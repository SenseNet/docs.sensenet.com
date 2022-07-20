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

[GenericContent](/concepts/content-types/01-genericcontent)

# Content handler

`SenseNet.ContentRepository.File`

# Special fields

| Name               | Type        | Description                                                                                                                                 |
| ------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Binary**         | `Binary`    | Holds the file data itself. Additional Binary fields may be added to your custom CTD if required.                                           |
| **Size**           | `Number`    | File size.                                                                                                                                  |
| **FullSize**       | `Number`    | The total amount of space the Document occupies, counting all versions.                                                                     |
| **MimeType**       | `ShortText` |                                                                                                                                             |
| **Shapes**         | `LongText`  | Stores data used for document preview (redaction, highlight, annotation shapes). This value can be modified by the document preview plugin. |
| **PageAttributes** | `LongText`  | Stores data used for document preview (for example page rotation). This value can be modified by the document preview plugin.               |
| **PageCount**      | `Integer`   | Number of preview pages if available.                                                                                                       |
| **Watermark**      | `ShortText` | Optional watermark text to display in document viewer.                                                                                      |

# Example

```xml
<ContentType name="File" parentType="GenericContent" handler="SenseNet.ContentRepository.File" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-File,DisplayName</DisplayName>
  <Description>$Ctd-File,Description</Description>
  <Icon>File</Icon>
  <Preview>true</Preview>
  <Fields>
    <Field name="Binary" type="Binary">
      <DisplayName>$Ctd-File,Binary-DisplayName</DisplayName>
      <Description>$Ctd-File,Binary-Description</Description>
      <Indexing>
        <Analyzer>Standard</Analyzer>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Size" type="Number">
      <DisplayName>$Ctd-File,Size-DisplayName</DisplayName>
      <Description>$Ctd-File,Size-Description</Description>
      <Configuration>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <ReadOnly>true</ReadOnly>
      </Configuration>
    </Field>
    <Field name="FullSize" type="Number">
      <DisplayName>$Ctd-File,FullSize-DisplayName</DisplayName>
      <Description>$Ctd-File,FullSize-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <ReadOnly>true</ReadOnly>
      </Configuration>
    </Field>
    <Field name="PageCount" type="Integer">
      <DisplayName>$Ctd-File,PageCount-DisplayName</DisplayName>
      <Description>$Ctd-File,PageCount-Description</Description>
      <Configuration>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <DefaultValue>-4</DefaultValue>
      </Configuration>
    </Field>
    <Field name="MimeType" type="ShortText">
      <DisplayName>$Ctd-File,MimeType-DisplayName</DisplayName>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <ReadOnly>true</ReadOnly>
      </Configuration>
    </Field>
    <Field name="Shapes" type="LongText">
      <DisplayName>$Ctd-File,Shapes-DisplayName</DisplayName>
      <Description>$Ctd-File,Shapes-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="PageAttributes" type="LongText">
      <DisplayName>$Ctd-File,PageAttributes-DisplayName</DisplayName>
      <Description>$Ctd-File,PageAttributes-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Watermark" type="ShortText">
      <DisplayName>$Ctd-File,Watermark-DisplayName</DisplayName>
      <Description>$Ctd-File,Watermark-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
