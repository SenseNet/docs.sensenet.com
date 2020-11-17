---
title: Tools
metaTitle: "sensenet API - Tools"
metaDescription: "Tools"
---

## Ancestors
- Method: **GET** or optionally POST.

Returns the requested content's ancestor chain. The first element is the parent,
 the last is the Root or the closest permitted content towards the Root.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/Ancestors
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Return value:
Content list of the ancestors of the requested content. (Type: IEnumerable&lt;Content>).

### Requirements:
- **AllowedRoles**: Everyone, Visitor

