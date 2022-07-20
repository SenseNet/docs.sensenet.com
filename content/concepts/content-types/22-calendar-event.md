---
title: "Calendar Event"
metaTitle: "sensenet - Calendar Event"
metaDescription: "sensenet Calendar Event"
---

A content type for defining calendar events.

# Features

- Calendar Events are created under [Event Calendars](/concepts/content-types/21-event-calendar), usually inside workspaces.

# Parent type

ListItem

# Content handler

`SenseNet.ContentRepository.CalendarEvent`

# Special fields

| Name          | Type        | Description                                                  |
| ------------- | ----------- | ------------------------------------------------------------ |
| **Location**  | `ShortText` | Location of the event                                        |
| **StartDate** | `DateTime`  | Start date of the event                                      |
| **EndDate**   | `DateTime`  | End date of the event                                        |
| **AllDay**    | `Boolean`   | Boolean field to store if the event takes a whole day or not |
| **EventType** | `Integer`   | Type of the event                                            |

# Example

```xml
<ContentType name="CalendarEvent" parentType="ListItem" handler="SenseNet.ContentRepository.CalendarEvent" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-CalendarEvent,DisplayName</DisplayName>
  <Description>$Ctd-CalendarEvent,Description</Description>
  <Icon>CalendarEvent</Icon>
  <Fields>
    <Field name="Location" type="ShortText">
      <DisplayName>$Ctd-CalendarEvent,Location-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,Location-Description</Description>
    </Field>
    <Field name="StartDate" type="DateTime">
      <DisplayName>$Ctd-CalendarEvent,StartDate-DisplayName</DisplayName>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
        <Compulsory>true</Compulsory>
        <DefaultValue>@@currenttime@@</DefaultValue>
      </Configuration>
    </Field>
    <Field name="EndDate" type="DateTime">
      <DisplayName>$Ctd-CalendarEvent,EndDate-DisplayName</DisplayName>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
        <Compulsory>true</Compulsory>
        <DefaultValue>@@currenttime@@</DefaultValue>
      </Configuration>
    </Field>
    <Field name="AllDay" type="Boolean">
      <DisplayName>$Ctd-CalendarEvent,AllDay-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,AllDay-Description</Description>
    </Field>
    <Field name="EventType" type="Choice">
      <DisplayName>$Ctd-CalendarEvent,EventType-DisplayName</DisplayName>
      <Configuration>
        <AllowMultiple>True</AllowMultiple>
        <Options>
          <Option value="Deadline" selected="true">$Ctd-CalendarEvent,EventType-Deadline</Option>
          <Option value="Meeting">$Ctd-CalendarEvent,EventType-Meeting</Option>
          <Option value="Demo">$Ctd-CalendarEvent,EventType-Demo</Option>
        </Options>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
