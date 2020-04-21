---
title: List Fields
metaTitle: "List fields"
metaDescription: "Managing list fields through OData"
---

The built-in ContentList type (and all the inherited ones like DocumentLibrary or TaskList) has a few legacy features that are now under rethinking and re-development (e.g. notifications, workflows). One of them is the possibility to add so called expando fields directly to individual lists without editing the type definition xmls and make a field available through the whole repository. Although this feature is not pushed to the forefront, let's see some examples of what we can do with it through OData.

## Browsing list fields

List fields have a `#` prefix, so their names look like `#MyField`. Except for this, they are not different from the other fields in terms of OData, they can be selected, expanded, used in queries or in paging and ordering.

Lets see a JSON response of a requested list item with an expando field:

```json
{
  "d": {
    ...
    "DisplayName": "Kickoff meeting",
    "Location": "Meeting room 2.",
    "StartDate": "2019-05-10T00:00:00Z",
    "EndDate": "2019-05-12T00:00:00Z",
    "#EventType": "meeting"
    ...
}
```

Following example shows how to use expando fields in an OData request as selected field:

<tab category="content-management" article="list-fields" example="selectByListField" />

## List expando fields defined on a specified list

sensenet lets you get the list of the custom fields added to an individual custom list requesting its [metadata](/api-docs/basic-concepts/metadata). Following request returns the Service Metadata Document of the specified instance that exposes the data model of the service in XML or JSON format:

<tab category="content-management" article="list-fields" example="metadata" />

## Add a new list field

The following example demonstrates how can you add a new metadata field to a content list, along with setting configuration values of the field (e.g. `Compulsory` or `MaxValue`).:

<tab category="content-management" article="list-fields" example="addField" />

## Edit expando fields

sensenet represents custom list fields as virtual contents that can be managed in a similar way as regular content items.

You may edit the configuration values of a field in two different ways: treating the field as a virtual child of the content list (see the first two example below), or using a dedicated action, `EditField`, as in the third example:

<tab category="content-management" article="list-fields" example="editFieldVirtualChildPatch" />
&nbsp;
<tab category="content-management" article="list-fields" example="editFieldVirtualChildPut" />
&nbsp;
<tab category="content-management" article="list-fields" example="editFieldWithAction" />

## Remove a list field

You can delete a custom field in two different ways: treating the field as a virtual child of the content list (see the first example below), or using the `DeleteField` action, as in the second example:

<tab category="content-management" article="list-fields" example="removeFieldVirtualChild" />
&nbsp;
<tab category="content-management" article="list-fields" example="removeFieldAction" />
