---
title: "Article"
metaTitle: "sensenet - Article"
metaDescription: "sensenet Article"
---

Articles are generally used for information that is updated more frequently and often cross-referenced and categorized.

# Features

# Parent type

WebContent

# Content handler

`SenseNet.ContentRepository.GenericContent`

# Special fields

| Name         | Type        | Description                |
| ------------ | ----------- | -------------------------- |
| **Subtitle** | `ShortText` | Subtitle of the article    |
| **Author**   | `ShortText` | Author of the article      |
| **Lead**     | `LongText`  | Lead or abstract           |
| **Body**     | `LongText`  | Main content section       |
| **Pinned**   | `Boolean`   | Is the article pinned?     |
| **Keywords** | `LongText`  | Keywords                   |
| **Image**    | `Image`     | Main image for the article |

# Example

```xml
<ContentType name="Article" parentType="WebContent" handler="SenseNet.ContentRepository.GenericContent" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-Article,DisplayName</DisplayName>
  <Description>$Ctd-Article,Description</Description>
  <Icon>WebContent</Icon>
  <Fields>
    <Field name="DisplayName" type="ShortText">
      <DisplayName>$Ctd-Article,DisplayName-DisplayName</DisplayName>
      <Description>$Ctd-Article,DisplayName-Description</Description>
      <Configuration>
        <FieldIndex>0</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Name" type="ShortText">
      <DisplayName>$Ctd-GenericContent,Name-DisplayName</DisplayName>
      <Description>$Ctd-GenericContent,Name-Description</Description>
      <Configuration>
        <FieldIndex>1</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Subtitle" type="ShortText">
      <DisplayName>$Ctd-Article,Subtitle-DisplayName</DisplayName>
      <Description>$Ctd-Article,Subtitle-Description</Description>
      <Configuration>
        <FieldIndex>2</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Author" type="ShortText">
      <DisplayName>$Ctd-Article,Author-DisplayName</DisplayName>
      <Description>$Ctd-Article,Author-Description</Description>
      <Configuration>
        <FieldIndex>3</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Lead" type="LongText">
      <DisplayName>$Ctd-Article,Lead-DisplayName</DisplayName>
      <Description>$Ctd-Article,Lead-Description</Description>
      <Indexing>
        <Analyzer>Standard</Analyzer>
      </Indexing>
      <Configuration>
        <ControlHint>sn:RichText</ControlHint>
        <FieldIndex>4</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Body" type="LongText">
      <DisplayName>$Ctd-Article,Body-DisplayName</DisplayName>
      <Description>$Ctd-Article,Body-Description</Description>
      <Indexing>
        <Analyzer>Standard</Analyzer>
      </Indexing>
      <Configuration>
        <ControlHint>sn:RichText</ControlHint>
        <FieldIndex>5</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Pinned" type="Boolean">
      <DisplayName>$Ctd-Article,Pinned-DisplayName</DisplayName>
      <Description>$Ctd-Article,Pinned-Description</Description>
      <Configuration>
        <FieldIndex>6</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Keywords" type="LongText">
      <DisplayName>$Ctd-Article,Keywords-DisplayName</DisplayName>
      <Description>$Ctd-Article,Keywords-DisplayName</Description>
      <Indexing>
        <Analyzer>Whitespace</Analyzer>
      </Indexing>
      <Configuration>
        <ControlHint>sn:Textarea</ControlHint>
        <FieldIndex>7</FieldIndex>
      </Configuration>
    </Field>
    <Field name="ImageRef" type="Reference">
      <DisplayName>$Ctd-Article,ImageRef-DisplayName</DisplayName>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <AllowMultiple>false</AllowMultiple>
      </Configuration>
    </Field>
    <Field name="ImageData" type="Binary">
      <DisplayName>$Ctd-Article,ImageData-DisplayName</DisplayName>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Image" type="Image">
      <DisplayName>$Ctd-Article,Image-DisplayName</DisplayName>
      <Bind property="ImageRef" />
      <Bind property="ImageData" />
      <Configuration>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
        <ControlHint>sn:Image</ControlHint>
        <FieldIndex>8</FieldIndex>
      </Configuration>
    </Field>
    <Field name="Description" type="LongText">
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Version" type="Version">
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="IsTaggable" type="Boolean">
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Tags" type="LongText">
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
