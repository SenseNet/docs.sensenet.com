---
title: Update
metaTitle: "sensenet API - Update a content"
metaDescription: "How to update an existing content"
---

Updating a content could be achieved by sending an http `PATCH` or `PUT` request. You can call it by identifying the content that should be updated (this will be the path where you'll send the request), and adding an object with the fields and values that you want to update (this object will be sent in the request body). Both `PATCH` and `PUT` requests will return the updated content object in JSON.

# Modifying a field of an entity

First let's change the index of a workspace to 142:

<tab category="content-management" article="update" example="updatePatch" />

# Modifying multiple fields at once

The following example shows you how you can change a folder's name and index fields at once:

<tab category="content-management" article="update" example="updateMultipleFields" />

# Update the value of a date field

In the next example you can see how you can update the start date of an event:

<tab category="content-management" article="update" example="updateDate" />

# Update a choice field

Updating choice fields is a tricky one. Let's see how you can change an event's `EventType` field to choose multiple options:

<tab category="content-management" article="update" example="updateChoice" />

# Update the value of a reference field

The following example demonstrates how can you modify a reference field of an entity. Let's change the `Manager` of a workspace:

<tab category="content-management" article="update" example="updateReference" />

You may use either content id or path in case of reference fields. In case of a multiple reference field you should provide an array of ids or paths, as you can see below:

<tab category="content-management" article="update" example="updateReferenceMultiple" />

# Setting (resetting) all fields of an entity

Using the `PUT` http method enables you to set multiple fields of an entity and clear (reset to the default) the rest. Let's set the manager of a workspace to businesscat and clear all other fields.

<tab category="content-management" article="update" example="updatePut" />
