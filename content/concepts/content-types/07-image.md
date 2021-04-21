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

| Name          | Type       | Description                                            |
| ------------- | ---------- | ------------------------------------------------------ |
| **DateTaken** | `DateTime` | Optional field for storing the time a photo was taken. |
| **Keywords**  | `LongText` | Arbitrary keywords.                                    |
| **Width**     | `Integer`  | Image width.                                           |
| **Height**    | `Integer`  | Image height.                                          |

# Example

```xml
<ContentType name="Image" parentType="File" handler="SenseNet.ContentRepository.Image" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-Image,DisplayName</DisplayName>
  <Description>$Ctd-Image,Description</Description>
  <Icon>Image</Icon>
  <Preview>true</Preview>
  <Fields>
    <Field name="DateTaken" type="DateTime">
      <DisplayName>$Ctd-Image,DateTaken-DisplayName</DisplayName>
      <Description>$Ctd-Image,DateTaken-Description</Description>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
        <FieldIndex>1</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Keywords" type="LongText">
      <DisplayName>$Ctd-Image,Keywords-DisplayName</DisplayName>
      <Description>$Ctd-Image,Keywords-Description</Description>
      <Configuration>
        <FieldIndex>2</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Width" type="Integer">
      <DisplayName>$Ctd-Image,Width-DisplayName</DisplayName>
      <Configuration>
        <ReadOnly>true</ReadOnly>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Height" type="Integer">
      <DisplayName>$Ctd-Image,Height-DisplayName</DisplayName>
      <Configuration>
        <ReadOnly>true</ReadOnly>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
