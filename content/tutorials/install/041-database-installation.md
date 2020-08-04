---
title: "Database installation"
metaTitle: "sensenet - database installation"
metaDescription: "sensenet - database installation"
---

# Database installation
One of the most essential elements of a sensenet architecture is the database. In most cases this will be a SQL database but it is possible to create a custom db provider for other platforms as well.

In this article you can learn how to create the initial repository database.

## Creating the database
In case of a SQL db provider you have to create the initial empty database manually. Please **create an empty database** on the server. No other step is required, please proceed with the installer tool.

> If you already have the tool or use the built-in template, please skip the code snippets and scroll down to the configuration section.

## Creating the installer console application
In previous versions of sensenet there was a built-in tool called **SnAdmin** for installation and patching purposes. This is no longer the case, these operations are performed using a simple console application.

> **When is it necessary** to create your own console application? 
> 
> New to sensenet? Use our built-in console installer template!
> 
> There is a wast number of optional packages and features for sensenet that can be installed on top of the core repository. These features usually come with their own content types and .Net libraries. The install process requires these libraries to be present, and the industry standard way to do that is to pull them as **NuGet** packages. 
>
> This means we can offer a basic console app installer that contains only the core packages (please visit the template install article for details). If you want to install packages that contain **custom content handlers** or other repository-related features that cannot be installed without their libraries, please create a new console app described in this article.

An installer is a simple .Net Core console application with the following NuGet packages installed:

```
SenseNet.Services.Core.Install
SenseNet.OData
SenseNet.Search.Lucene29.Local
SenseNet.Security.EFCSecurityStore
```

The last package is required only if you want to install sensenet into a SQL database - but usually that is the case. If you want to use a different data provider, please add that instead.

### Start the repository
First we have to assemble and start the repository. Please add the following code to the `Main` method:

```csharp
IConfiguration config = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json", true, true)
    .AddEnvironmentVariables()
    .Build();

// build repository providers
var builder = new RepositoryBuilder()
    .SetConsole(Console.Out)
    .UseLogger(new SnFileSystemEventLogger())
    .UseTracer(new SnFileSystemTracer())
    .UseTraceCategories("System", "Event", "Repository")
    .UseConfiguration(config)
    .UseDataProvider(new MsSqlDataProvider())
    .UseSecurityDataProvider(
        new EFCSecurityDataProvider(connectionString: ConnectionStrings.ConnectionString))
    .UseLucene29LocalSearchEngine(Path.Combine(Environment.CurrentDirectory, "App_Data", "LocalIndex")) as RepositoryBuilder;
```

> Please note that you can change any of the providers or technologies above to the ones you need (for example a different db provider).

### Installer API
The next step is to add the installer code. The following line will install the sensenet base package that is incorporated in the install NuGet package above, no need to download anything.

```csharp
var installer = new SenseNet.Packaging.Installer(builder)
    .InstallSenseNet();
```

### Additional packages or import
It is also possible to extend the repository during installation by executing additional packages or importing content items.

The following code will execute configured packages and also import content structures from the configured file system folders.

```csharp
// optional configured install packages
foreach (var installPath in config.GetSection("sensenet:install:packages").GetChildren().Select(c => c.Value))
{
    installer.InstallPackage(installPath);
}

// optional configured import folders
foreach (var importPath in config.GetSection("sensenet:install:import").GetChildren().Select(c => c.Value))
{
    installer.Import(importPath);
}
```

## Configuration
sensenet works with the official `IConfiguration` API provided by .Net Core. That means you can define config values in any of the well-known ways (appSettings.json, environment, etc.).

sensenet features rely on predefined configuration values that usually reside under the `sensenet` section - with the exception of database connection strings that are stored in the standard `ConnectionStrings` section.

The following is an appSettings example that contains the connection string to the database you created before.

```json
{
  "ConnectionStrings": {
    "SnCrMsSql": "[your sql connection string]"
  }
}
```

Defining additional packages or import folders works this way (see the install code snippet above where it uses these config values):

```json
{
    "sensenet": {
        "install": {
            "packages": [ "c:\\package1.zip" ],
            "import": [ "c:\\import" ]
        }
    }
}
```

## Run the installer
With everything set up, please execute the tool and monitor the command line for errors.

If everything goes as expected, you will have two artifacts:

- a database filled with initial data
- a local index folder under the `App_Data\LocalIndex` folder

You will need to copy the index to the web application later when you assemble it during the next step.