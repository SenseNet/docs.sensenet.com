---
title: Getting started with sensenet repository backend service
metaTitle: "sensenet Tutorials - Customizing the repository service"
metaDescription: "This tutorial shows you how to customize the repository service in sensenet."
---

In this tutorial we will show you how to customize the repository service in sensenet. You can learn how to replace built-in providers and inject your own services into the repository application.

<note severity="info">Please note that customizing the backend repository service is an advanced scenario. Consider using client methods (our .Net client or REST API) instead and only customize the web application when you need to replace backend components.</note>


## Prerequisites
Before you start customizing the repository service, you need to have a sensenet repository installed. You can install it using the [sensenet docker image](/tutorials/getting-started/install-docker) or directly from [source code on GitHub](https://github.com/SenseNet/sensenet/tree/master/deployment).

## Custom web application
To be able to modify backend services (e.g. logging, database provider, etc.) you need a web application. You can create a new web application from scratch and add the necessary services or you can clone one of the [sensenet web application projects](https://github.com/SenseNet/sensenet/tree/master/src/WebApps).

The web applications in the folder above are simply combining the necessary services and configurations to run a sensenet repository web application. There is no business logic in them - all of that is in the sensenet NuGet packages. Choose the web application that suits your environment and architecture: for example based on whether the index is local or a remote service.

### Customizing logging
To replace or modify logging sinks (currently we use Serilog) you can modify the logging configuration in the `Program.cs` file. You can add new sinks, modify the log level, or even replace the whole logger with your own.

```csharp
UseSerilog((hostingContext, loggerConfiguration) =>
{
    loggerConfiguration.ReadFrom
        .Configuration(hostingContext.Configuration);

	// custom sink
    loggerConfiguration.WriteTo.Sink(new MyCustomSink(null), LogEventLevel.Verbose);
})
```

### Customizing sensenet services
In sensenet we use the .Net **dependency injection** system to register services. This means you can replace built-in services with your own implementations. For example, you can replace the database provider, the search engine, or any other default service. To do this, you need to register your services in the `Startup.cs` file **after the built-in sensenet services**.

For example you can replace the default database provider with your own implementation.

```csharp
// register a custom data provider
services.AddSenseNetDataProvider<MyCustomSqlDataProvider>();
```
