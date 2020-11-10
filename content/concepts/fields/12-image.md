---
title: "Image field"
metaTitle: "sensenet - Image field"
metaDescription: "sensenet Image field"
---

Image field is a field type that is used to handle an image attached to the content. It handles images either as references or binary field content.

The field has two modes depending on how the image is stored in relation to the content:

- **reference mode**
    - image data is stored as a node in content repository (under the content)
    - the field acts as a [Reference field](/concepts/fields/reference) referencing the image node
- **binarydata mode**
    - the field acts as a [Binary field](/concepts/fields/binary) storing image data
    - image is therefore not visible in content repository

# Field handler

- handler: `SenseNet.ContentRepository.Fields.ImageField`
- short name: **Image**

Usage in CTD:

```xml
<Field name="ImageRef" type="Reference">
...
</Field>
<Field name="ImageData" type="Binary">
...
</Field>
<Field name="Avatar" type="Image">
  <Bind property="ImageRef" />
  <Bind property="ImageData" />
  ...
</Field>
```

<note severity="info">Note that the Image field is a composite field and it embodies a Reference field and a Binary field. These two fields are technical fields and do not have to be presented by views.
</note>

# Configuration

- The field does not have any special configuration settings in the [content type definition](/concepts/content-management/03-content-types).

# Fully featured example

```xml
<Field name="ImageRef" type="Reference">
  <DisplayName>Avatar image (reference)</DisplayName>
  <Configuration>
    <VisibleBrowse>Hide</VisibleBrowse>
    <VisibleEdit>Hide</VisibleEdit>
    <VisibleNew>Hide</VisibleNew>
    <AllowMultiple>false</AllowMultiple>
  </Configuration>
</Field>
<Field name="ImageData" type="Binary">
  <DisplayName>Avatar image (binarydata)</DisplayName>
  <Configuration>
    <VisibleBrowse>Hide</VisibleBrowse>
    <VisibleEdit>Hide</VisibleEdit>
    <VisibleNew>Hide</VisibleNew>
  </Configuration>
</Field>
<Field name="Avatar" type="Image">
  <DisplayName>Avatar</DisplayName>
  <Description>Avatar image of user.</Description>
  <Bind property="ImageRef" />
  <Bind property="ImageData" />
  <Configuration>
    <Visible>true</Visible>
  </Configuration>
</Field>
```

The above example is an excerpt from the User content type CTD. The *Avatar* field incorporates the hidden *ImageRef* and *ImageData* technical fields.
