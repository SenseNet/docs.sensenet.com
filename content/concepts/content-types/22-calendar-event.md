---
title: "Calendar Event"
metaTitle: "sensenet - Calendar Event"
metaDescription: "sensenet Calendar Event"
---

A content type for defining calendar events.

# Features

- Calendar Events are created under [Event Calendars](/concepts/content-types/20-event-calendar), usually inside workspaces.

# Parent type

ListItem

# Content handler

`SenseNet.ContentRepository.CalendarEvent`

# Special fields

| Name                       | Type        | Description                                                      |
| -------------------------- | ----------- | ---------------------------------------------------------------- |
| **Location**               | `ShortText` | Location of the event                                            |
| **StartDate**              | `DateTime`  | Start date of the event                                          |
| **EndDate**                | `DateTime`  | End date of the event                                            |
| **Lead**                   | `LongText`  | The lead of the event                                            |
| **AllDay**                 | `Boolean`   | Boolean field to store if the event takes a whole day or not     |
| **EventUrl**               | `ShortText` | The url of the event                                             |
| **RequiresRegistration**   | `Boolean`   | Boolean field to store if the event requires registration or not |
| **RegistrationForm**       | `Reference` | Reference for the registration form if the event has one            |
| **OwnerEmail**             | `ShortText` | The email of the event owner                                     |
| **NotificationMode**       | `Choice`    | Notification mode of the event                                   |
| **EmailTemplate**          | `LongText`  | An email template of the event                                   |
| **EmailTemplateSubmitter** | `LongText`  | An submitter of the email                                        |
| **EmailFrom**              | `ShortText` |                                                                  |
| **EmailFromSubmitter**     | `ShortText` |                                                                  |
| **EmailField**             | `ShortText` |                                                                  |
| **MaxParticipants**        | `Integer`   | The maximum nuber of participants                                |
| **NumParticipants**        | `Integer`   | The exact nuber of participants                                  |
| **EventType**              | `Integer`   | Type of the event                                                |

# Example

```
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
    <Field name="Lead" type="LongText">
      <DisplayName>$Ctd-CalendarEvent,Lead-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,Lead-Description</Description>
      <Indexing>
        <Analyzer>Standard</Analyzer>
      </Indexing>
      <Configuration>
        <ControlHint>sn:RichText</ControlHint>
      </Configuration>
    </Field>
    <Field name="AllDay" type="Boolean">
      <DisplayName>$Ctd-CalendarEvent,AllDay-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,AllDay-Description</Description>
    </Field>
    <Field name="EventUrl" type="ShortText">
      <DisplayName>$Ctd-CalendarEvent,EventUrl-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,EventUrl-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <!-- registration fields-->
    <Field name="RequiresRegistration" type="Boolean">
      <DisplayName>$Ctd-CalendarEvent,RequiresRegistration-DisplayName</DisplayName>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="RegistrationForm" type="Reference">
      <DisplayName>$Ctd-CalendarEvent,RegistrationForm-DisplayName</DisplayName>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowedTypes>
          <Type>EventRegistrationForm</Type>
        </AllowedTypes>
        <SelectionRoot>
          <Path>/Root</Path>
        </SelectionRoot>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="OwnerEmail" type="ShortText">
      <DisplayName>$Ctd-CalendarEvent,OwnerEmail-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,OwnerEmail-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="NotificationMode" type="Choice">
      <DisplayName>$Ctd-CalendarEvent,NotificationMode-DisplayName</DisplayName>
      <Configuration>
        <Options>
          <Option value="E-mail" selected="true">$Ctd-CalendarEvent,NotificationMode-Email</Option>
          <Option value="E-mail digest">$Ctd-CalendarEvent,NotificationMode-EmailDigest</Option>
          <Option value="None">$Ctd-CalendarEvent,NotificationMode-None</Option>
        </Options>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="EmailTemplate" type="LongText">
      <DisplayName>$Ctd-CalendarEvent,EmailTemplate-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,EmailTemplate-Description</Description>
      <Indexing>
        <Analyzer>Standard</Analyzer>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="EmailTemplateSubmitter" type="LongText">
      <DisplayName>$Ctd-CalendarEvent,EmailTemplateSubmitter-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,EmailTemplateSubmitter-Description</Description>
      <Indexing>
        <Analyzer>Standard</Analyzer>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="EmailFrom" type="ShortText">
      <DisplayName>$Ctd-CalendarEvent,EmailFrom-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,EmailFrom-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="EmailFromSubmitter" type="ShortText">
      <DisplayName>$Ctd-CalendarEvent,EmailFromSubmitter-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,EmailFromSubmitter-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="EmailField" type="ShortText">
      <DisplayName>$Ctd-CalendarEvent,EmailField-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,EmailField-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="MaxParticipants" type="Integer">
      <DisplayName>$Ctd-CalendarEvent,MaxParticipants-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,MaxParticipants-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="NumParticipants" type="Integer">
      <DisplayName>$Ctd-CalendarEvent,NumParticipants-DisplayName</DisplayName>
      <Description>$Ctd-CalendarEvent,NumParticipants-DisplayName</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <ReadOnly>True</ReadOnly>
      </Configuration>
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
