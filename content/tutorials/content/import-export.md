---
title: "Import and export"
metaTitle: "sensenet Tutorials - Import and export content"
metaDescription: "sensenet Tutorials - How to import and export content items"
category: Tutorials
index: 0
version: v7.0
tags: [import, export, client, api]
description: This tutorial shows you how to import and export content items.
---

# Import and export
When a project depends on a repository, it is a common task to import or export content to and from that repository. Scenarios include archiving files, synchronizing data between related repositories (or staging and live systems) or installing an initial data structure into a brand new repository.

The **sensenet IO tool and library** solves these problems. You can use it as a command line tool or integrate the IO functionality into your own program.

> This article is a high-level overview of this tool. For detailed command line arguments and features please visit the [sensenet IO tool and library](https://github.com/SenseNet/sn-io) on GitHub.

### Installation
You can get the **SnIO** tool in the following ways:
- integrate the [SenseNet.IO](https://www.nuget.org/packages/SenseNet.IO) NuGet package into your application and use our API to manage content in your repository
- compile the source code in this repository and use the tool from the `SenseNet.IO.CLI` folder
- **BETA**: install the tool as a [dotnet tool](https://learn.microsoft.com/en-us/dotnet/core/tools/global-tools) from [NuGet](https://www.nuget.org/packages/SenseNet.IO.CLI) and use it anywhere from command line. The following command will install the sensenet IO tool as a global dotnet tool:

`dotnet tool install -g sensenet.io.cli`

## Scenarios
There are four scenarios offered by the built-in tool.
- **EXPORT**: Transfer content from a sensenet repository to the file system.
- **IMPORT**: Transfer content from the file system to a sensenet repository.
- **COPY**: Transfer content between file system directories :).
- **SYNC**: Transfer content from a sensenet repository to another repository.

When using the tool, you provide the scenario name as the first parameter.

## Configuration
In this article we assume you execute the `snio` tool either from a local directory or installed it as a global dotnet tool. In both cases you will need to provide the repository connection information in the following local configuration file:

```
providerSettings.json
```

> It is possible to provide some of these values from the command line. It is up to you whether you choose to combine these two modes.

Every scenario needs logging. The following is a recommended generic logging configuration:

```json
{
	"display": { 
		"level": "Verbose" // None, Progress, Errors, Verbose. Default: Errors
	},
	"Serilog": {
        "Using": [ "Serilog.Sinks.Console", "Serilog.Sinks.File" ],
        "MinimumLevel": {
        "Default": "Verbose",
        "Override": {
            "Microsoft": "Warning",
            "System": "Warning"
        }
        },
        "WriteTo": [
            { "Name": "Console" },
            {
                "Name": "File",
                "Args": {
                "path": "logs/SenseNet.IO-.txt",
                "rollingInterval": "Day"
                }
            }
        ]
    }
}
```

See scenario-specific additional configuration values below. Most of them will require **authentication**. To read more about that, please visit the [API and security page](https://docs.sensenet.com/guides/settings/api-and-security) on admin UI or the [authentication](https://docs.sensenet.com/tutorials/authentication) article.

## Export
To be able to export from a sensenet repository, you will need to provide connection info to the repository and a target folder in your local file system. Add the following sections to the config file:

```json
"repositoryReader": {
    "url": "https://example.com", // Repository url
    "path": "/Root/Content", // Source path. Default: "/Root",
    "blockSize": null, // Contents per request. Default: 10.
    "Authentication": {
      "ClientId": "...", // connect as an authenticated user
      "ClientSecret": "..." 
    } 
}
```
To configure the target folder, please provide the path:

```json
"fsWriter": {
    "path": "D:\\temp\\export",
    "name": null // Optional. Default: name of the reader's root.
}
```

To execute the tool, simply call it providing the scenario name. Everything else will be loaded from the configuration:

```
snio export
```

## Import
To be able to import content to a sensenet repository, you will need to provide connection info to the repository and a source folder in your local file system. The source folder should contain the import structure (folders, simple files or `.Content` files). Add the following sections to the config file:

```json
"fsReader": {
    "path": "D:\\temp\\import"
},
"repositoryWriter": {
    "url": "https://example.com", // Target repository URL
    "path": "/Root/Content", // Target path. Default: "/",
    "name": null, // Target name under the container. Default: name of the reader's root.
    "Authentication": {
      "ClientId": "...", // connect as an authenticated user
      "ClientSecret": "..." 
    }
},
```

To execute the tool, simply call it providing the scenario name. Everything else will be loaded from the configuration:

```
snio import
```