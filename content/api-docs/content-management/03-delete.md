---
title: Delete
metaTitle: "sensenet API - Delete content"
metaDescription: "How to delete content"
---

Deleting a content is an http `DELETE` request under the hood. You can call it by defining the content that you want to delete and setting whether the deleted item should be first moved to the trash or be deleted immediately. These `DELETE` requests will return a JSON similar to the following. It contains the number of deleted items, basic info about the deleted item(s) and if some of the given contents cannot be deleted for some reason, there will be error messages listed in the `errors` array:

```json
{
  "d": {
    "__count": 1,
    "results": [
      {
        "Id": 1335,
        "Path": "/Root/Content/IT/Tasks/Debug",
        "Name": "Debug"
      }
    ],
    "errors": []
  }
}
```

## Delete a single content

The following example shows you how to delete a folder:

<tab category="content-management" article="delete" example="deleteContent" />

## Delete multiple content at once

With the next example you can remove a bunch of documents at once:

<tab category="content-management" article="delete" example="deleteMultipleContent" />

## Move items to the trash

This example shows you how to move a content to the trash:

<tab category="content-management" article="delete" example="moveTotheTrash" />
&nbsp;
<note>
See the related docs about the trash functionality for more details <a href="/content-management/trash">here</a>.
</note>
