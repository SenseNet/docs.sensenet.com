---
title: "Content List"
metaTitle: "sensenet - Content List"
metaDescription: "sensenet Content List"
---

A Content List is a container that usually holds certain types of content - e.g. a Document Library contains files, an Image Library contains images. You can create lists for your own features and choose the content types you want to store in them freely.

# Features

Content Lists may have their own [local metadata fields](/api-docs/content-management/08-list-fields) that are assigned to the content items stored in that list.

> Please note that is feature is under rethinking and may change in the future.

# Parent type

[Folder](/concepts/content-types/02-folder)

# Content handler

`SenseNet.ContentRepository.ContentList`

# Special fields

| Name                           | Type        | Description                                                                                                                                                       |
| ------------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ContentListDefinition**      | `LongText`  | XML definition for additional fields.                                                                                                                             |
| **DefaultView**                | `ShortText` | The default View to use.                                                                                                                                          |
| **AvailableViews**             | `ShortText` | Select global content list views here that you want to offer users to choose from.                                                                                |
| **FieldSettingContents**       | `Reference` |                                                                                                                                                                   |
| **AvailableContentTypeFields** | `Reference` |                                                                                                                                                                   |
| **ListEmail**                  | `ShortText` | Emails sent to this address will be imported as Email content into the Document Library.                                                                          |
| **ExchangeSubscriptionId**     | `ShortText` |                                                                                                                                                                   |
| **OverwriteFiles**             | `Boolean`   | If checked new emails and attachments with the same name will overwrite existing items in list. Otherwise increment suffix is used in the name of new mail items. |
| **GroupAttachments**           | `Choice`    | Select the appropriate option to group attachment files under folders or email content or not.                                                                    |
| **SaveOriginalEmail**          | `Boolean`   | A separate .eml file will be created for every incoming email.                                                                                                    |
| **IncomingEmailWorkflow**      | `Reference` | Select the workflow to be executed on every incoming email.                                                                                                       |
| **OnlyFromLocalGroups**        | `Boolean`   | If set, only users that are members of any local group are able to send e-mails to this library.                                                                  |
| **InboxFolder**                | `ShortText` | A relative path of a folder to store incoming e-mails.                                                                                                            |
| **OwnerWhenVisitor**           | `Reference` | If a Visitor adds content to this list, this user will be set as the creator instead of the Visitor. This prevents visitors see each others' content.             |

# Example

```xml
<ContentType name="ContentList" parentType="Folder" handler="SenseNet.ContentRepository.ContentList" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-ContentList,DisplayName</DisplayName>
  <Description>$Ctd-ContentList,Description</Description>
  <Icon>ContentList</Icon>
  <Fields>
    <Field name="ContentListDefinition" type="LongText">
      <DisplayName>$Ctd-ContentList,ContentListDefinition-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,ContentListDefinition-Description</Description>
      <Indexing>
        <Mode>No</Mode>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="DefaultView" type="ShortText">
      <DisplayName>$Ctd-ContentList,DefaultView-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,DefaultView-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="AvailableViews" type="Reference">
      <DisplayName>$Ctd-ContentList,AvailableViews-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,AvailableViews-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <AllowMultiple>true</AllowMultiple>
        <AllowedTypes>
          <Type>ListView</Type>
        </AllowedTypes>
      </Configuration>
    </Field>
    <Field name="FieldSettingContents" type="Reference">
      <DisplayName>$Ctd-ContentList,FieldSettingContents-DisplayName</DisplayName>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <AllowMultiple>true</AllowMultiple>
        <AllowedTypes>
          <Type>FieldSettingContent</Type>
        </AllowedTypes>
      </Configuration>
    </Field>
    <Field name="AvailableContentTypeFields" type="Reference">
      <DisplayName>$Ctd-ContentList,AvailableContentTypeFields-DisplayName</DisplayName>
      <Configuration>
        <ReadOnly>true</ReadOnly>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <AllowMultiple>true</AllowMultiple>
        <AllowedTypes>
          <Type>FieldSettingContent</Type>
        </AllowedTypes>
      </Configuration>
    </Field>
    <!-- Exchange integration -->
    <Field name="ListEmail" type="ShortText">
      <DisplayName>$Ctd-ContentList,ListEmail-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,ListEmail-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="ExchangeSubscriptionId" type="ShortText">
      <DisplayName>$Ctd-ContentList,ExchangeSubscriptionId-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,ExchangeSubscriptionId-Description</Description>
      <Configuration>
        <ReadOnly>true</ReadOnly>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="OverwriteFiles" type="Boolean">
      <DisplayName>$Ctd-ContentList,OverwriteFiles-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,OverwriteFiles-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="GroupAttachments" type="Choice">
      <DisplayName>$Ctd-ContentList,GroupAttachments-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,GroupAttachments-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>false</AllowExtraValue>
        <Options>
          <Option value="email" selected="true">$Ctd-ContentList,GroupAttachments-email</Option>
          <Option value="root">$Ctd-ContentList,GroupAttachments-root</Option>
          <Option value="subject">$Ctd-ContentList,GroupAttachments-subject</Option>
          <Option value="sender">$Ctd-ContentList,GroupAttachments-sender</Option>
        </Options>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="SaveOriginalEmail" type="Boolean">
      <DisplayName>$Ctd-ContentList,SaveOriginalEmail-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,SaveOriginalEmail-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="IncomingEmailWorkflow" type="Reference">
      <DisplayName>$Ctd-ContentList,IncomingEmailWorkflow-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,IncomingEmailWorkflow-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <SelectionRoot>
          <Path>/Root/System/Schema/ContentTypes/GenericContent/Workflow/MailProcessorWorkflow</Path>
        </SelectionRoot>
        <DefaultValue>/Root/System/Schema/ContentTypes/GenericContent/Workflow/MailProcessorWorkflow</DefaultValue>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="OnlyFromLocalGroups" type="Boolean">
      <DisplayName>$Ctd-ContentList,OnlyFromLocalGroups-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,OnlyFromLocalGroups-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="InboxFolder" type="ShortText">
      <DisplayName>$Ctd-ContentList,InboxFolder-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,InboxFolder-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <!-- Exchange integration end -->
    <Field name="OwnerWhenVisitor" type="Reference">
      <DisplayName>$Ctd-ContentList,OwnerWhenVisitor-DisplayName</DisplayName>
      <Description>$Ctd-ContentList,OwnerWhenVisitor-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowedTypes>
          <Type>User</Type>
        </AllowedTypes>
        <SelectionRoot>
          <Path>/Root/IMS</Path>
        </SelectionRoot>
        <DefaultValue>/Root/IMS/BuiltIn/Portal/Admin</DefaultValue>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
