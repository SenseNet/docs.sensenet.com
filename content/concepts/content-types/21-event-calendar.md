---
title: "Event Calendar"
metaTitle: "sensenet - Event Calendar"
metaDescription: "sensenet Event Calendar"
---

A special container type to store calendar events.

# Features

- EventList is a regular conatainer for storing items, this one is created to store Enents
- EventLists are created under Contents (/Root/Content)


# Parent type

ItemList

# Content handler

`SenseNet.ContentRepository.ContentList`

//TODO

# Special fields

| Name            | Type        | Description    |
| --------------- | ----------- | -------------- |
| **RegistrationFolder**        | `Reference` | Registration folder |

# Example

```
<ContentType name="EventList" parentType="ItemList" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-EventList,DisplayName</DisplayName>
  <Description>$Ctd-EventList,Description</Description>
  <Icon>ContentList</Icon>
  <AllowedChildTypes>CalendarEvent</AllowedChildTypes>
  <Fields>
    <Field name="RegistrationFolder" type="Reference">
      <DisplayName>$Ctd-EventList,RegistrationFolder-DisplayName</DisplayName>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowedTypes>
          <Type>Folder</Type>
        </AllowedTypes>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
