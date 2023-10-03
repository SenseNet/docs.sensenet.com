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

**TODO: Backup?**

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
    "CountMax": 10000,
    "MaxItemsPerFolder": 10,
    "MaxFoldersPerFolder": 10,
    "FirstFolderIndex": 1,
}
```
Based on the configuration above 10,000 content will be generated into a container subtree that contains 10 elements in every tree node. The subfolders are numbered starting from 1.

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

- Each syntax element is separated by a space or tab character.
- The syntax element can be keyword, constant or a special name
- The keywords and names are case insensitive.
- The data types that can be used: string, integer, datetime.

#### Range definition
The range defines a minimum and maximum values separated by the `"TO"` keyword and optionally prefixed by a range-type keyword and optionally followed by the step definition with the "STEP" keyword. The range-type keyword defines the generation algorithm. Now there are two algorithms:
- **Sequence** (default): The values will be increased by one for each content, or by the specified step. If the values are exhausted, the generation starts over.
- **Random**: The values will be generated between the specified limits. Boundaries are included in the value set. Boundaries are included in the value set.

Now there are two kind of range: integer and datetime. Here are some examples:

Integer ranges:

```
"1 to 99"
"SEQUENCE: -10 TO 20"
"SEQUENCE: 10 TO 20000"
"SEQUENCE: 10 TO 20000 STEP 10"
"RANDOM: 100 TO 99999"
```

DateTime ranges:
```
"2020-01-01 TO 9999-12-31"
"SEQUENCE: 2020-01-01 TO 2020-06-15"
"SEQUENCE: 2020-01-01 TO 2020-06-15 STEP 0.00:00:10"
"RANDOM: 2020-01-01 TO 99999"
```

#### String definition
You can define constant or an integer range thats elements will be inserted into a string constant.
- **Constant**: can contain one or more words that are not integer or datetime or keyword e.g. `"one or more words"`. The word cannot contain a comma or colon.
- **Template and range**: string template followed by an integer-range definition e.g. `"Event-*, 1 TO 100"`
  - **Template**: one or more words, the last word ends with a comma. The location of the range elements is indicated by an asterisk e.g. `"Replicated content *,"`
  - **Integer-range** (see above): e.g. `"RANDOM: 0 TO 99"`

#### Integer definition
The integer definition can be a constant or a range:
- **Constant**: simple whole number e.g. `"153"`
- **Range**: range definition (see below) with integer constants e.g. `"10 TO 159 STEP 3"`

#### DateTime definition
The datetime definition can be a constant or a range with date or datetime boundaries. The step definition uses a timespan constant.
- **Constant**: Can be a date or date and time separated by a space:
  - **Date**: e.g. `"2023-10-03"`
  - **Date and time**: e.g. `"2023-10-03 05:45:12"`
- **Range**: Range definition with date or datetime constants (even mixed). Examples:
  - **Date only**: `"2020-01-01 TO 2020-06-15"`
  - **Date and time**: e.g. `"2020-01-01 12:24:45 TO 2020-06-15 23:59:59"`
  - **Mixed**: `"2020-01-01 12:24:45 TO 2020-06-15"`
  - **STEP**: Defined as a timespan with the following form: `"<days>.<hours>.<minutes>.<seconds>"`. For example the definition of ten minutes is: `"0.00:10:00"`. The step definition's default value is 1 second.

#### A full example of a request with all the possible options:
<note severity="info">The request needs any valid authorization header (api key or bearer token) for a member of Administrators or Developer group.</note>

```
POST https://example.sensenet.cloud/odata.svc/Root/Content/Replication/Source/Events('Event-1')/Replicate
```
```json
{
    "target": "/Root/Content/Replication/Target",
    "options": {
        "CountMax": 10000,
        "MaxItemsPerFolder": 10,
        "MaxFoldersPerFolder": 10,
        "FirstFolderIndex": 1,
        "Fields": {
            "Name": "Event-*, 1 to 999999",
            "Index": "Random: 100 TO 999",
            "CreationDate": "RANDOM: 2023-01-01 TO 2023-10-01",
            "MaxParticipants": "20 TO 100"
        }
    }
}
```

## Start the process
To start replicating a content, you call the ```Replicate``` OData action from the platform of your preference - for example **Postman**, a script or a tool, using our .Net client API.

The action should be called on the **source content** (the one you want to replicate) and it expects two parameters:

- **target**: path or id of the target folder as a string
- **options**: an object in the format above that describes the replication process with the required counts and field customizations.

The action will immediately return (with ```204 No Content``` if you provided correct options) but will start the replication process on the server.

### Monitoring
Currently you can monitor the process by monitoring the log entries written periodically by the background process. The following log part demonstrates a replication progress:

```
2023-10-03 02:08:39.577 +02:00 [INF] Replication started. Count: 10000 Source: /Root/Content/Replication/Source/Events/Event-1, Target: /Root/Content/Replication/Target
2023-10-03 02:08:49.583 +02:00 [INF] Replication in progress. time: 00:00:10 (152 CPS). Count: 1517/10000 (15%)Source: /Root/Content/Replication/Source/Events/Event-1, Target: /Root/Content/Replication/Target
2023-10-03 02:08:59.584 +02:00 [INF] Replication in progress. time: 00:00:20 (188 CPS). Count: 3754/10000 (37%)Source: /Root/Content/Replication/Source/Events/Event-1, Target: /Root/Content/Replication/Target
2023-10-03 02:09:09.586 +02:00 [INF] Replication in progress. time: 00:00:30 (193 CPS). Count: 5784/10000 (57%)Source: /Root/Content/Replication/Source/Events/Event-1, Target: /Root/Content/Replication/Target
2023-10-03 02:09:19.587 +02:00 [INF] Replication in progress. time: 00:00:40 (201 CPS). Count: 8037/10000 (80%)Source: /Root/Content/Replication/Source/Events/Event-1, Target: /Root/Content/Replication/Target
2023-10-03 02:09:29.181 +02:00 [INF] Replication finished. Total time: 00:00:49 (202 CPS). Count: 10000 Source: /Root/Content/Replication/Source/Events/Event-1, Target: /Root/Content/Replication/Target
```