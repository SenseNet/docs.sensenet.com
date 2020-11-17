---
title: "File"
metaTitle: "sensenet - File"
metaDescription: "sensenet File"
---

Main content type for storing files in the content repository.

# Features
The File type is responsible for handling all kinds of files:
- Office and PDF documents
- text files
- binary files

There are special kinds of files that inherit from the File type (for example the [Image](/concepts/content-types/07-image) type). These types extend the basic functionality of File with their own features.

Certain file types will have **preview images** generated for them. For example the well-known office types (Word or Excel documents), text files or even images will have previews, if the feature is enabled in the repository.

Files can be created by **uploading** them on the admin user interface or importing them through our REST API.

# Parent type

[GenericContent](/concepts/content-types/01-generic-content)

# Content handler

`SenseNet.ContentRepository.File`

# Special fields

| Name | Type |Description|
|------|------|-----------|
|**Binary**|`Binary`|Holds the file data itself. Additional Binary fields may be added to your custom CTD if required.|
|**Size**|`Number`|File size.|
|**PageCount**|`Integer`|Number of preview pages if available.|
|**Watermark**|`ShortText`|Optional watermark text to display in document viewer.|

# Example