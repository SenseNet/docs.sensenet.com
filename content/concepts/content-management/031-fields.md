---
title: "Fields"
metaTitle: "sensenet - Fields"
metaDescription: "sensenet Fields"
---

Fields are single data storing units that build up *Content Types* - in other words: field are attributes of content. A single field represents a single chunk of information, such as a name or a date. Fields are mapped to repository data slots in the storage layer, and can be displayed and accessed through APIs.

A field is a data storing building block of a content. However, it not only stores data, but also carries metadata and configuration settings. Metadata includes attributes like *Title* and *Description*, configuration includes attributes like *Compulsory* and *ReadOnly*.

# Field types

There are numerous field types defined in the base system. Different field types store different types of data and have different configuration. A **Number** field for example stores a number and - among others - *MaxValue* property can be configured to limit the maximum value stored, whereas a **ShortText** Field stores text data and has a *MaxLength* configuration property that can be set to limit the maximum allowed number of characters stored in the Field.

|  |  |
| -| -|
| Binary Field | for binary data |
| Boolean Field | for storing a boolean value (true or false) |
| Choice Field | a multi-purpose field used to allow the user to choose one or more options |
| Color Field | for storing color code in hex |
| Currency Field | for storing a number value as value in specified currency |
| DateTime Field | stores a date and a time value |
| HyperLink Field | stores a link to the required content or webpage |
| Image Field | handle an image attached to the content |
| Integer Field |  |
| LongText Field | for storing text without length restrictions |
| Number Field | for storing a whole number with value |
| Reference Field | for defining references to other content |
| ShortText Field | for storing short strings |
|**Special system types**|-|
| ApprovingMode Field  | for storing the approval mode |
| InheritableApprovingMode Field  | for storing the inherited approval mode |
| VersioningMode Field  | for storing the versioning mode |
| InheritableVersioningMode Field  | for storing the inherited versioning mode |
| Lock Field  | for storing whether a content is locked or not |
| NodeType Field  | for storing the content type |
| Password Field  | for storing passwords |
| Version Field  | for storing the current version number |

# Field setting

Fields can be configured to behave different ways. This is controlled by their configuration - or with other name: their field setting. The field setting of a field contains properties that define the behavior of the field - for example configured as read only or required to fill. The field setting can be adjusted with its field definition.

# Field definition

As fields build up content, the set of contained fields are defined when content types are defined. The content type definition (CTD) for different types holds the field definition information besides a couple of type-related configuration settings. When defining a content type the contained fields can be defined in the CTD with XML fragments describing the type of the field, metadata and configuration:

```xml
<Field name="MyField" type="ShortText">
  <DisplayName>My field</DisplayName>
  <Description>Field to contain custom data</Description>
  <Bind property="AnotherField" />
  <Indexing>
    <Mode>Analyzed</Mode>
    <Store>Yes</Store>
    <Analyzer>Keyword</Analyzer>
  </Indexing>
  <Configuration>
    <ReadOnly>false</ReadOnly>
    <Compulsory>true</Compulsory>
    <OutputMethod>Raw</OutputMethod>
    <DefaultValue>lorem ipsum</DefaultValue>
    <VisibleBrowse>Hide</VisibleBrowse>
    <VisibleEdit>Show</VisibleEdit>
    <VisibleNew>Hide</VisibleNew>
    <FieldIndex>101</FieldIndex>
    <ControlHint>sn:CustomControl</ControlHint>
  </Configuration>
</Field>
```
&nbsp;
&nbsp;

| | |
|-|-|
| name | Name of the field. Required, should be unique in a content type. |
| type | Short name of the field type. This or handler is required. (see the list of field types above) |
| handler | Fully qualified type name of field handler class. This or handler is required. |
| DisplayName | Displayed name of the field. |
| Description | Description of the field. |
| Bind | Name of the storage property the field is bound to. |
| Indexing | Indexing settings of the field. |
| ReadOnly | Indicates if the field is read-only. |
| Compulsory | Indicates if the field is required to fill. |
| OutputMethod | Defines the field output type (Default, Raw, Text, Html) |
| DefaultValue | Default value of the field. |
| VisibleBrowse | Indicates if the field is visible in auto-generated browse view. |
| VisibleEdit | Indicates if the field is visible in auto-generated edit view (while a content is edited). |
| VisibleNew | Indicates if the field is visible in auto-generated new view (while a content is created). |
| FieldIndex | Defines order of field in auto-generated views. |
| ControlHint | Default field control name. Used by the mapper in control libs like [sn-controls-react](https://github.com/SenseNet/sn-client/tree/develop/packages/sn-controls-react). |

# Search in fields

For every content the field values can be indexed so that when searched for a value the corresponding content will appear in the result set. It is also possible to search in fields by explicitly defining them. The way a specific field of a content is indexed is defined in the [field definition](/concepts/basics/04-search#metadataindexing,searchingbyfields).

# Validation

When the content is saved the input field data falls under validation according to the field settings. This includes non-empty value check for required fields and some field setting-dependent checks. An *Integer* field for example validates input data against data-type check - the entered value should be an integer value - and also checks whether input data falls between the range of *MinValue* and *MaxValue* as given in the field definition in the content type's CTD.

# Fields on the ui

Each repository has a content model, a schema that represents the content types you create. This schema is fully available to the client through the REST API. Using this schema it is possible to auto-generate the ui since it contains all the necessary information (field type, validations, etc). Can be a good starting point for this to check the [sn-controls-react](https://github.com/SenseNet/sn-client/tree/develop/packages/sn-controls-react) client library that contains field controls for all the built-in field types and a mapper that manage how (with which field control) the specific field types should be displayed on the ui.
