---
title: "User"
metaTitle: "sensenet - User"
metaDescription: "sensenet User"
---

User is the base type for creating user content. Logging into sensenet is possible using the credentials that belong to a user content.

# Features

- User is the base content for defining users who can log into the repository
- the password is never persisted to the repository, only the hash of the password which is a lot more secure
- users are created under a specific Domain (/Root/IMS/Public)
- users may be organized under [OrganizationalUnits](/concepts/content-types/05-organizational-unit) and referenced in [Groups](/concepts/content-types/04-group) to model organizational hierarchy and to define custom permission levels and roles in the repository
- User profile: if this feature is enabled, when a new user is created a dedicated profile workspace is also created for them to store their documents, tasks and memos.

# Parent type

[GenericContent](/concepts/content-types/01-generic-content)

# Content handler

`SenseNet.ContentRepository.User`

The content handler of the **User** content type handles the following:

- encodes passwords when saving the content
- sets adequate permissions to user content when a new user is created (thus every user has rights to update their own properties)

# Special fields

| Name                   | Type        | Description                                                                                                                          |
| ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Enabled**            | `Boolean`   | Adjusts whether the user can login to the system or not.                                                                             |
| **Domain**             | `ShortText` | The domain of the user.                                                                                                              |
| **SyncGuid**           | `ShortText` | GUID of corresponding AD object.                                                                                                     |
| **LastSync**           | `DateTime`  | Date of last synchronization.                                                                                                        |
| **Captcha**            | `Captcha`   | Captcha text entered by the user.                                                                                                    |
| **LoginName**          | `ShortText` | The name that the user has to type in on login forms (in some cases along with the domain name). It has to be unique under a domain. |
| **FullName**           | `ShortText` | Full name of the user (e.g. John Smith).                                                                                             |
| **Email**              | `ShortText` | The e-mail of the user.                                                                                                              |
| **Password**           | `Password`  | User password.                                                                                                                       |
| **Phone**              | `ShortText` | Phone number. (e.g. +123456789 or 1234).                                                                                             |
| **Avatar**             | `Image`     | Avatar image of user.                                                                                                                |
| **ImageRef**           | `Reference` | Cover image (reference)                                                                                                              |
| **ImageData**          | `Binary`    | Cover image (binarydata)                                                                                                             |
| **FacebookURL**        | `ShortText` | Facebook URL e.g.:http://www.facebook.com/USERNAME.                                                                                  |
| **LinkedInURL**        | `ShortText` | LinkedIn URL e.g.:http://www.linkedin.com/USERNAME.                                                                                  |
| **TwitterAccount**     | `ShortText` | Twitter account<                                                                                                                     |
| **JobTitle**           | `ShortText` | Job title<                                                                                                                           |
| **Department**         | `ShortText` | Department of employee.                                                                                                              |
| **BirthDate**          | `DateTime`  | Birth date                                                                                                                           |
| **Manager**            | `Reference` | Manager of the user.                                                                                                                 |
| **Language**           | `Choice`    | Language used to display texts on the site, if it is available.                                                                      |
| **Languages**          | `ShortText` | Spoken languages.                                                                                                                    |
| **Gender**             | `Choice`    |                                                                                                                                      |
| **MaritalStatus**      | `Choice`    |                                                                                                                                      |
| **Education**          | `LongText`  | List of educations - e.g. high school, university.                                                                                   |
| **ProfilePath**        | `Reference` | Path of the user's personal workspace.                                                                                               |
| **FollowedWorkspaces** | `Reference` | List of workspaces followed by the user.                                                                                             |
| **LastLoggedOut**      | `DateTime`  | Date and time of when the user logged out from all devices.                                                                          |

# Example

```xml
<ContentType name="User" parentType="GenericContent" handler="SenseNet.ContentRepository.User" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-User,DisplayName</DisplayName>
  <Description>$Ctd-User,Description</Description>
  <Icon>User</Icon>
  <AllowedChildTypes>
    Image
  </AllowedChildTypes>
  <Fields>
    <Field name="LoginName" type="ShortText">
      <DisplayName>$Ctd-User,LoginName-DisplayName</DisplayName>
      <Description>$Ctd-User,LoginName-Description</Description>
      <Configuration>
        <FieldIndex>220</FieldIndex>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
        <Compulsory>true</Compulsory>
        <MaxLength>100</MaxLength>
      </Configuration>
    </Field>
    <Field name="JobTitle" type="ShortText">
      <DisplayName>$Ctd-User,JobTitle-DisplayName</DisplayName>
      <Description>$Ctd-User,JobTitle-Description</Description>
      <Configuration>
        <FieldIndex>210</FieldIndex>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Enabled" type="Boolean">
      <DisplayName>$Ctd-User,Enabled-DisplayName</DisplayName>
      <Description>$Ctd-User,Enabled-Description</Description>
      <Configuration>
        <FieldIndex>240</FieldIndex>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Domain" type="ShortText">
      <DisplayName>$Ctd-User,Domain-DisplayName</DisplayName>
      <Description>$Ctd-User,Domain-Description</Description>
      <Configuration>
        <ReadOnly>true</ReadOnly>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Email" type="ShortText">
      <DisplayName>$Ctd-User,Email-DisplayName</DisplayName>
      <Description>$Ctd-User,Email-Description</Description>
      <Configuration>
        <FieldIndex>160</FieldIndex>
        <Compulsory>true</Compulsory>
        <Regex>^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$</Regex>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="FullName" type="ShortText">
      <DisplayName>$Ctd-User,FullName-DisplayName</DisplayName>
      <Description>$Ctd-User,FullName-Description</Description>
      <Configuration>
        <FieldIndex>200</FieldIndex>
        <Compulsory>true</Compulsory>
        <Regex>[^&lt;]+</Regex>
      </Configuration>
    </Field>
    <Field name="ImageRef" type="Reference">
      <DisplayName>$Ctd-User,ImageRef-DisplayName</DisplayName>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <AllowMultiple>false</AllowMultiple>
      </Configuration>
    </Field>
    <Field name="ImageData" type="Binary">
      <DisplayName>$Ctd-User,ImageData-DisplayName</DisplayName>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Avatar" type="Image">
      <DisplayName>$Ctd-User,Avatar-DisplayName</DisplayName>
      <Description>$Ctd-User,Avatar-Description</Description>
      <Bind property="ImageRef" />
      <Bind property="ImageData" />
      <Configuration>
        <FieldIndex>250</FieldIndex>
        <Visible>true</Visible>
        <ControlHint>sn:Image</ControlHint>
      </Configuration>
    </Field>
    <Field name="Password" type="Password">
      <DisplayName>$Ctd-User,Password-DisplayName</DisplayName>
      <Description>$Ctd-User,Password-Description</Description>
      <Bind property="PasswordHash"></Bind>
      <Configuration>
        <FieldIndex>120</FieldIndex>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
        <Compulsory>true</Compulsory>
        <ReenterTitle>$Ctd-User,Password-ReenterTitle</ReenterTitle>
        <ReenterDescription>$Ctd-User,Password-ReenterDescription</ReenterDescription>
      </Configuration>
    </Field>
    <Field name="SyncGuid" type="ShortText">
      <DisplayName>$Ctd-User,SyncGuid-DisplayName</DisplayName>
      <Description>$Ctd-User,SyncGuid-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="LastSync" type="DateTime">
      <DisplayName>$Ctd-User,LastSync-DisplayName</DisplayName>
      <Description>$Ctd-User,LastSync-Description</Description>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Captcha" type="Captcha">
      <DisplayName>$Ctd-User,Captcha-DisplayName</DisplayName>
      <Description>$Ctd-User,Captcha-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Manager" type="Reference">
      <DisplayName>$Ctd-User,Manager-DisplayName</DisplayName>
      <Description>$Ctd-User,Manager-Description</Description>
      <Configuration>
        <FieldIndex>170</FieldIndex>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
        <AllowMultiple>false</AllowMultiple>
        <AllowedTypes>
          <Type>User</Type>
        </AllowedTypes>
        <SelectionRoot>
          <Path>/Root/IMS/Public</Path>
        </SelectionRoot>
      </Configuration>
    </Field>
    <Field name="Department" type="ShortText">
      <DisplayName>$Ctd-User,Department-DisplayName</DisplayName>
      <Description>$Ctd-User,Department-Description</Description>
      <Indexing>
        <Analyzer>Standard</Analyzer>
      </Indexing>
      <Configuration>
        <FieldIndex>190</FieldIndex>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Languages" type="ShortText">
      <DisplayName>$Ctd-User,Languages-DisplayName</DisplayName>
      <Description>$Ctd-User,Languages-Description</Description>
      <Indexing>
        <Analyzer>Standard</Analyzer>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Phone" type="ShortText">
      <DisplayName>$Ctd-User,Phone-DisplayName</DisplayName>
      <Description>$Ctd-User,Phone-Description</Description>
      <Configuration>
        <FieldIndex>140</FieldIndex>
        <Regex>(^\d*([-\s\+\(\)]\d*)*$)?</Regex>
        <Visible>true</Visible>
      </Configuration>
    </Field>
    <Field name="Gender" type="Choice">
      <DisplayName>$Ctd-User,Gender-DisplayName</DisplayName>
      <Description>$Ctd-User,Gender-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>false</AllowExtraValue>
        <Options>
          <Option value="...">$Ctd-User,Gender-...</Option>
          <Option value="Female">$Ctd-User,Gender-Female</Option>
          <Option value="Male">$Ctd-User,Gender-Male</Option>
        </Options>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="MaritalStatus" type="Choice">
      <DisplayName>$Ctd-User,MaritalStatus-DisplayName</DisplayName>
      <Description>$Ctd-User,MaritalStatus-Description</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>false</AllowExtraValue>
        <Options>
          <Option value="...">$Ctd-User,MaritalStatus-...</Option>
          <Option value="Single">$Ctd-User,MaritalStatus-Single</Option>
          <Option value="Married">$Ctd-User,MaritalStatus-Married</Option>
        </Options>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="BirthDate" type="DateTime">
      <DisplayName>$Ctd-User,BirthDate-DisplayName</DisplayName>
      <Configuration>
        <FieldIndex>180</FieldIndex>
        <DateTimeMode>Date</DateTimeMode>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Education" type="LongText">
      <DisplayName>$Ctd-User,Education-DisplayName</DisplayName>
      <Description>$Ctd-User,Education-Description</Description>
      <Configuration>
        <TextType>LongText</TextType>
        <ControlHint>sn:EducationEditor</ControlHint>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="TwitterAccount" type="ShortText">
      <DisplayName>$Ctd-User,TwitterAccount-DisplayName</DisplayName>
      <Configuration>
        <FieldIndex>110</FieldIndex>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="FacebookURL" type="ShortText">
      <DisplayName>$Ctd-User,FacebookURL-DisplayName</DisplayName>
      <Description>$Ctd-User,FacebookURL-Description</Description>
      <Configuration>
        <FieldIndex>150</FieldIndex>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="LinkedInURL" type="ShortText">
      <DisplayName>$Ctd-User,LinkedInURL-DisplayName</DisplayName>
      <Description>$Ctd-User,LinkedInURL-Description</Description>
      <Configuration>
        <FieldIndex>130</FieldIndex>
        <VisibleBrowse>Show</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
    <Field name="Language" type="Choice">
      <DisplayName>$Ctd-User,Language-DisplayName</DisplayName>
      <Description>$Ctd-User,Language-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
        <FieldIndex>100</FieldIndex>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>false</AllowExtraValue>
        <Options>
          <Option value="en" selected="true">$Ctd-User,Language-En</Option>
          <Option value="hu">$Ctd-User,Language-Hu</Option>
        </Options>
      </Configuration>
    </Field>
    <Field name="FollowedWorkspaces" type="Reference">
      <DisplayName>$Ctd-User,FollowedWorkspaces-DisplayName</DisplayName>
      <Description>$Ctd-User,FollowedWorkspaces-Description</Description>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <AllowMultiple>true</AllowMultiple>
        <AllowedTypes>
          <Type>Workspace</Type>
        </AllowedTypes>
      </Configuration>
    </Field>
    <Field name="ProfilePath" type="ShortText">
      <DisplayName>$Ctd-User,ProfilePath-DisplayName</DisplayName>
      <Description>$Ctd-User,ProfilePath-Description</Description>
      <Configuration>
        <ReadOnly>true</ReadOnly>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="LastLoggedOut" type="DateTime">
      <DisplayName>$Ctd-User,LastLoggedOut-DisplayName</DisplayName>
      <Description>$Ctd-User,LastLoggedOut-Description</Description>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="ExternalUserProviders" type="LongText">
      <Indexing>
        <IndexHandler>SenseNet.Search.Indexing.GeneralJsonIndexHandler</IndexHandler>
      </Indexing>
    </Field>
    <Field name="AllRoles" type="AllRoles">
      <DisplayName>$Ctd-User,AllRoles-DisplayName</DisplayName>
      <Description>$Ctd-User,AllRoles-Description</Description>
      <Indexing>
        <Mode>No</Mode>
        <Store>No</Store>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="DirectRoles" type="DirectRoles">
      <DisplayName>$Ctd-User,DirectRoles-DisplayName</DisplayName>
      <Description>$Ctd-User,DirectRoles-Description</Description>
      <Indexing>
        <Mode>No</Mode>
        <Store>No</Store>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
