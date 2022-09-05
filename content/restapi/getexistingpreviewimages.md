---
title: GetExistingPreviewImages
metaTitle: "sensenet API - GetExistingPreviewImages"
metaDescription: "GetExistingPreviewImages"
---

## GetExistingPreviewImages
- Method: **GET** or optionally POST.

Gets path and dimension information for existing preview images.
 This action will not start preview generation, only return a list
 of consecutive preview images starting from the beginning.

### Example

``` 
 [
     {
         PreviewAvailable: "/Root/Content/DocLib/MyDoc.docx/Previews/1.0.A/preview1.png",
         Width: 500,
         Height: 800,
         Index: 1
     },
     {
         PreviewAvailable: "/Root/Content/DocLib/MyDoc.docx/Previews/1.0.A/preview2.png",
         Width: 500,
         Height: 800,
         Index: 2
     }
 ]
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetExistingPreviewImages
```
The `targetContent` can be File
### Parameters:
There are no parameters.

### Return value:

 A list of custom objects containing path and dimensions of preview images.
 Thumbnail images are not included.
  (Type: `GetExistingPreviewImagesResponse[]`).

### Requirements:
- **AllowedRoles**: Everyone

