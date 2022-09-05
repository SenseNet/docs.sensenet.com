---
title: PreviewAvailable
metaTitle: "sensenet API - PreviewAvailable"
metaDescription: "PreviewAvailable"
---

## PreviewAvailable
- Method: **GET** or optionally POST.

Gets the path and image dimensions of a specific preview page of a document.
 If the page count for the content is available but the image does not exist, this
 action will start preview generation in the background (but will not wait for it).
 

### Example

``` 
 {
    PreviewAvailable: "/Root/Content/DocLib/MyDoc.docx/Previews/1.0.A/preview1.png",
    Width: 500,
    Height: 800
 }
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/PreviewAvailable?page=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/PreviewAvailable
DATA:
models=[{
  "page": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **page** (`int`): A specific page number to check.

### Return value:
A custom object containing image path and dimensions.
 In case the image is not available yet, it will return a similar object with the
 PreviewAvailable property set to null.
  (Type: `PreviewAvailableResponse`).

### Requirements:
- **AllowedRoles**: Everyone

