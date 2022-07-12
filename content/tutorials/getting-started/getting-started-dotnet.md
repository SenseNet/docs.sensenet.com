---
title: Getting started with sensenet and the .Net Core client
metaTitle: "sensenet Tutorials - Getting started with sensenet and the .Net Core client"
metaDescription: "This tutorial shows you how to start using sensenet with the .Net client API."
---

In this tutorial we will export a folder structure containing subfolders and files to the file system, using the .Net Client library for sensenet.

You'll find the full source code at the end of this article.

## Create a new console application
Create a new .Net Core console application either in command line (`dotnet new`), Visual Studio or VS Code.

Install the following NuGet package:

```
SenseNet.Client
```

Add the following namespace registration to the beginning of your `Program.cs` file:

```csharp
using SenseNet.Client;
```

## Set up the connection to the sensenet service
A sensenet repository service is represented by a **server object**. The simplest way to achieve this (without [authentication](/tutorials/authentication/how-to-authenticate-dotnet)) is to construct it manually, providing the URL of the service. If you need authentication, it is a lot more convenient if you use our service registration API (see later in this article).

<note severity="info">If you do not have a repository yet, please head over to <a href="https://www.sensenet.com">www.sensenet.com</a> to get one.</note>
<div>&nbsp;</div>

```csharp
static async Task Main(string[] args)
{
    // define sensenet service url
    var server = new ServerContext
    {
        Url = "https://example.sensenet.cloud"
    };
}
```
<div>&nbsp;</div>
<note severity="info"><b>Important</b>: In this tutorial we assume that all the content items you are working with are <b>public</b> (accessible for visitors). You can make content (for example files or whole folders) public on the admin UI: on the <b>Set permissions</b> page hit the Make content public button.
</note>
<div>&nbsp;</div>
<note severity="info">
To access private content, please check out how to add <a href="/tutorials/authentication/how-to-authenticate-dotnet">authentication</a> to your client application.
</note>

## Load and iterate through a content collection
First we want to load all child items in an existing folder.

```csharp
// note the server parameter: that is what defines the repository service to load contents from
var children = await Content.LoadCollectionAsync(repositoryPath, server);
```

Iterate through the collection. Please note that here we treat child items as `dynamic` objects. This makes accessing properties easier and simpler.

```csharp
foreach (dynamic child in children)
{
    var contentType = (string) child.Type;

    // If child is a file: save it to the file system.
    // If it is a folder, iterate through its children recursively.
}
```

## Save files to the file system
The following code fragment shows the easiest way to save binary streams from the repository to the file system.

```csharp
using var fs = File.OpenWrite(localPath);
await RESTCaller.GetStreamResponseAsync((int) child.Id, string.Empty, string.Empty, server, message =>
{
    // save file (currently this has to be synchronous)
    message.Content.CopyToAsync(fs).GetAwaiter().GetResult();
}, CancellationToken.None);
```

## Put it all together
We assembled all the fragments above to a separate method that can be called recursively on subfolders. This is how the whole source code looks like.

If you execute it, it will export folders and files from the `/Root/Content/Folder` container from the repository to the `C:\temp\export` folder in the file system.

```csharp
class Program
{
    static async Task Main(string[] args)
    {            
        // define sensenet service url
        var server = new ServerContext
        {
            Url = "https://example.sensenet.cloud"
        };

        await ExportFolderAsync("/Root/Content/Folder", "C:\\temp\\export", server);
    }

    private static async Task ExportFolderAsync(string repositoryPath, string targetPath, ServerContext server)
    {
        var children = await Content.LoadCollectionAsync(repositoryPath, server);

        foreach (dynamic child in children)
        {
            var contentType = (string) child.Type;
            var localPath = Path.Combine(targetPath, child.Name);

            switch (contentType)
            {
                case "Folder":
                {
                    // create folder in file system
                    Directory.CreateDirectory(localPath);

                    // export subfolders recursively
                    await ExportFolderAsync((string) child.Path, localPath, server);
                    break;
                }
                case "File":
                {
                    // export file
                    using var fs = File.OpenWrite(localPath);
                    await RESTCaller.GetStreamResponseAsync((int) child.Id, string.Empty, string.Empty, server, message =>
                    {
                        // save file (currently this has to be synchronous)
                        message.Content.CopyToAsync(fs).GetAwaiter().GetResult();
                    }, CancellationToken.None);
                    break;
                }
            }
        }
    }
}
```

## Define and use services through Dependency Injection
.Net DI is a powerful service registration mechanism that makes defining and using services a lot easier. To use it, you will need to add the following nuget packages to your project:

```
Microsoft.Extensions.DependencyInjection
Microsoft.Extensions.Logging.Console
```

Please also add the following using declarations to your cs file:

```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SenseNet.Client;
using SenseNet.Extensions.DependencyInjection;
```

Now you can register the repository feature in the service collection using the `AddSenseNetRepository` method. Note that you can also provide the repository url and authentication data in **configuration**. Please visit the [authentication](/tutorials/authentication/how-to-authenticate-dotnet) article for an example on how to do that.

```csharp
var provider = new ServiceCollection()
    .AddSenseNetRepository(options => { options.Url = "https://example.sensenet.cloud"; })
    .AddLogging(logging => logging.AddConsole())
    .BuildServiceProvider();
```

The code sample above works in a console application, but you can also use the same API in an **Asp.Net** app to register the service!

To get a server object, please use the following API. You can either get the `IServerContextFactory` object manually like this, or through the usual ways (e.g. in a constructor of another service).

```csharp
var serverFactory = provider.GetRequiredService<IServerContextFactory>();
var server = await serverFactory.GetServerAsync();
```
