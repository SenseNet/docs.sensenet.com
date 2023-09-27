---
title: "Large content repository"
metaTitle: "sensenet Tutorials - Large content repository"
metaDescription: "sensenet Tutorials - How to create a large database by replicating content items"
category: Tutorials
index: 0
version: v7.0
tags: [client, api, database]
description: This tutorial shows you how to create a large database by replicating content items.
---

# Large content repository
In most enterprise projects it is vital to know how the repository behaves with a database full of content items. Although it is possible to perform generic load tests using built-in content types beforehand, the most **realistic test** is the one you make with your own **custom content types** in your own environment.

In this article we will show you how can you create a **large database** without actually importing a huge number of content items.

<note severity="info">This article is <strong>not about load testing</strong>. It is about building a large test database as fast as possible. Designing and executing load tests is a different topic as it may vary depending on the requirements of the project.</note>

## Replicating content items
Although you could import many content items through our rest API, it would take very long if you needed a really huge database. The reason is that using the regular [import API](/tutorials/content/import-export) the process flows through the network and all the layers of sensenet for every content - and that is not feasible in this case.

The solution is to replicate content items instead, on the storage level. It still results in real, fully indexed content items with the usual fields and permissions, but it makes a few shortcuts to speed up things a bit.

With this solution you create one or more **source content items** and start a **replication process** through the OData rest API. It runs in the background and creates a huge number of content items by duplicating the source a configured number of times, with certain fields modified.

<note severity="info">The repository is usable during the process - although it is advisable to start the operation during quiet hours.</note>

## Source content items
First you need to decide what kind of content items you want your repository to contain in mass. Try to settle with only a couple of simple types like _users_, _events_, _filled forms_ - with a couple of essential fields, to keep the process simple and configurable.

A single replication process can work with a **single content item** as a source. If you have multiple types of items to replicate, please start multiple processes one after the other.

## Target folder
The replicator will create copies of the source item in a pre-existing folder. Please create a **new, empty folder** (or any type of container) before starting the process.

Replication configuration allows you to define the **number of subfolders** on one level and the number of allowed replicated content items, which are created as _leaves_.

## Configuration
Replicating content items and especially filling their fields with meaningful data can be complex. We simplified the possible options to a level that still provides the necessary flexibility.

The configuration is a ```JSON``` object you can POST to the ```Replicate``` action in the repository as you can see in the following sections.

### Generated content counts
You can define how many contents you want to generate, and also the maximum number of folders and replicated items in one level.

```json
{
    "MaxCount": 1000,
    "Max...": 100,
    "Max...": 100
}
```

### Field customization
When creating many similar content items, you need to think about the fields that should vary for these items. We have a default setting for the most important field: ```Name```, but you can also customize other simple fields too. The following field types are currently supported:

- short and long text
- number
- datetime

When customizing the generated contents of a field, you have the following options:

- setting a constant value
- using a template in combination with a pattern:
   - sequence of numbers with a range
   - a random number in a range

```json
{
    "Fields": {
        "Name": "Event-*, 1 TO 100",
        "Index": "1 TO 100"
    }
}
```

#### Pattern syntax
You have to format the field customization patterns based on the following syntax.

```
TODO: patterns
```

A full example with all the possible options:
```
TODO: full example
```

```json
{
    "MaxCount": 1000,
    "Fields": {
        "Name": "Event-*, 1 TO 100",
        "Index": "1 TO 100",
        "StartDate": "RANDOM ...."
    }
}
```

## Start the process
To start replicating a content, you call the ```Replicate``` OData action from the platform of your preference - for example **Postman**, a script or a tool, using our .Net client API.

The action should be called on the **source content** (the one you want to replicate) and it expects two parameters:

- **target**: path or id of the target folder as a string
- **options**: an object in the format above that describes the replication process with the required counts and field customizations.

The action will immediately return (with ```200 OK``` if you provided correct options) but will start the replication process on the server.

### Monitoring
Currently you can monitor the process by monitoring the log entries written periodically by the background process.

```
TODO: monitoring action
```