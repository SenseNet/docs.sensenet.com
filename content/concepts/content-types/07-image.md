---
title: "Image"
metaTitle: "sensenet - Image"
metaDescription: "sensenet Image"
---

Image is a special [File](/concepts/content-types/06-file) type for holding pictures of any kind.

# Features
An Image is able to compute its dimensions (width and height) when created.

Images can also be resized on demand using the `width` or `height` url parameters if necessary.

# Parent type

[File](/concepts/content-types/06-file)

# Content handler

`SenseNet.ContentRepository.Image`

# Special fields

| Name | Type |Description|
|------|------|-----------|
|**DateTaken**|`DateTime`|Optional field for storing the time a photo  was taken.|
|**Keywords**|`LongText`|Arbitrary keywords.|
|**Width**|`Integer`|Image width.|
|**Height**|`Integer`|Image height.|

# Example