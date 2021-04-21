---
title: "Link"
metaTitle: "sensenet - Link"
metaDescription: "sensenet Link"
---

A link that navigates to a URL.

# Features

- Links are usually created under [LinkLists](/concepts/content-types/18-linklist) inside workspaces.
- The url field can be restricted by a regular expression.

# Parent type

ListItem

# Content handler

`SenseNet.ContentRepository.GenericContent`

# Special fields

| Name    | Type        | Description |
| ------- | ----------- | ----------- |
| **Url** | `ShortText` | Linked url  |

# Example

```xml
<ContentType name="Link" parentType="ListItem" handler="SenseNet.ContentRepository.GenericContent" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-Link,DisplayName</DisplayName>
  <Description>$Ctd-Link,Description</Description>
  <Icon>link</Icon>
  <AllowIncrementalNaming>true</AllowIncrementalNaming>
  <Fields>
    <Field name="Url" type="ShortText">
      <DisplayName>$Ctd-Link,Url-DisplayName</DisplayName>
      <Description>$Ctd-Link,Url-Description</Description>
      <Configuration>
        <Regex>^(http|https)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+(\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|hu|[a-zA-Z]{2})){0,1})(\:[0-9]+)*((\#|/)($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$</Regex>
        <DefaultValue>https://</DefaultValue>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
