---
title: "Content Types"
metaTitle: "sensenet - Content Types"
metaDescription: "sensenet Content Types"
---

The content repository contains many different types of content. Content vary in structure and even in function. Different types of content contain different fields and may also implement different business logic. The fields and business logic of a content are defined by their type - the content type.

# Content Types

A content type is a special content in the content repository. Content types define the structure and functions of contents. It is defined by a (xml like) configuration file called ``content type definition`` or ``CTD``.

For example a User has a name, e-mail address, etc. - these fields of the user ``content type`` are defined by its ``content type definition``.

> Additional logic, like a specific task when a user is saved can be implemented in the ``content handler``.

# Default content types

A default set of predefined content types is provided in sensenet. These types can be used in any solution built with sensenet but additional (custom) content types can be configured as well according to business needs.

some example from the default set:
- user
- folder
- file
- workspace
- image
- ...

# Custom content type

Since many feature are tied to content types (AllowedChildType, content template) it is strongly suggested to create custom content types according to your solution's architecture. Default content types can be used in your solution but cannot be modified or deleted (in SNaaS). You can create custom content type by inheriting from ``GenericContent`` or any other content type in the tree.

# Content type hierarchy

Content types are organized into a hierarchy according to inheritance. Any content type may inherit from another one. The topmost content type in the inheritance hierarchy is the ``GenericContent`` (with handler ``SenseNet.ContentRepository.GenericContent``), every content type must inherit from this, or any of its descendant. When a child content type is inherited from a parent content type it means that the child content type contains all the fields of the parent, even if they are not defined in the child CTD - and also they share common implemented logic.

> Multiple inheritance is not allowed so content types are arranged in a simple tree.

## Field inheritance

A content type inherits its fields from its parent (and upper ancestor) content type (defined by the ``parentType`` attribute). This means that only additional fields have to be defined in the type’s CTD. The inherited fields apply to the content type as defined on the parent type, but may also be overridden. The following apply to field inheritance:

- fields of all ancestors are inherited: ie. fields of parent type of the direct parent are also available in the current type
- all fields of the parent type are inherited: deleting a field that has been defined on an ancestor type is not possible
- a field is inherited from parent when it is not defined in the current type’s CTD
- if a field is defined in a CTD it overrides parent’s field of the same name
- if a field is defined in a CTD with empty markup the parent’s field of the same name is overridden with empty data
- when inheriting a field the first order elements of the configuration element are inherited (these are defined by the field definition)

> Every detail of a field (e.g: name, visibility, compulsory) can be overridden on child level allowing you to break inheritance field by field.

# Allowed child types

In sensenet content repository it is possible to define restrictions on what content types the different containers can contain. You can configure ``AllowedChildTypes`` in the content type definition of the different types. For example a calendar can only contain events, a document library can only contain folders and files, etc. These settings can be overridden on the specific content, for example you can modify any of your document libraries to contain images too.
There are also some special types that behave differently: a folder for example can never define child types, it will always inherit its parent settings. A ``SystemFolder`` will allow every type by default and can be created anywhere in the repository.

> ([learn more about allowed child types](/concepts/content-management/06-allowed-childtypes))

# Field settings and validations

The content type definition (CTD) for different content types holds the field definition information besides a couple of content type-related configuration settings. Every field has a ``FieldSetting`` object serving as a configuration element inside the content type definition. The field setting of a field contains properties that define the behavior of the field - for example a field can be configured as read only or compulsory to fill. The field setting of fields can be adjusted in the content type definition, with the ``configuration`` element.

> Different field types have different field settings however there are a couple common settings that are available for all fields.

The ``FieldSetting`` not only specifies the type of information but it also **validates** according to its implementation. Validation can happen automatically on saving a content, or manually from code. The field is able to store the validation status (valid, invalid, reason of error), thus if a validation has occurred the field will be revalidated if its data has changed or a previous validation has failed.

JavaScript functions can be used to define **dynamic default values**. If the field does not appear on the ui, this element has no effect. Only takes effect in case the user adds a new content, edit forms do not use default values.

In sensenet there's option to set **appearance** of each field defining wheteher the specific field should be visible on automatically generated views (like new, edit or browse).

**Disabling** a field on a content will make it read-only preventing users to edit field value. It's important that this feature is independent from ``appearance`` setting (defined above).

# Content type definitions
A content type definition is an xml-format configuration file for defining content types. The xml configuration (CTD) holds information about

- the type name, description
- properties that control how content of this type look and behave (icon, preview generation, indexing)
- parent content type
- set of fields (name, displayname and configuration of fields)
- content handler

Below you can see a fully featured skeleton of a content type definition xml:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ContentType name="" handler="" parentType="" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName></DisplayName>
  <Description></Description>
  <Icon></Icon>
  <Preview></Preview>
  <AllowIndexing></AllowIndexing>
  <AppInfo></AppInfo>
  <AllowIncrementalNaming></AllowIncrementalNaming>
  <AllowedChildTypes></AllowedChildTypes>
  <Fields>
    <Field name="" type="">
      <DisplayName></DisplayName>
      <Description></Description>
      <AppInfo></AppInfo>
      <Bind property="" />
      <Indexing>
         <Mode></Mode>
         <Store></Store>
         <TermVector></TermVector>
         <Analyzer></Analyzer>
         <IndexHandler></IndexHandler>
      </Indexing>
      <Configuration>
        <ReadOnly></ReadOnly>
        <Compulsory></Compulsory>
        <DefaultValue></DefaultValue>
        <VisibleBrowse></VisibleBrowse>
        <VisibleEdit></VisibleEdit>
        <VisibleNew></VisibleNew>
        <FieldIndex></FieldIndex>
        <ControlHint></ControlHint>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```

The content type definition xml of a content type can be edited on the admin ui or through OData REST API ([see How to create a Content Type for details](/tutorials/content-types/how-to-create-a-content-type/)).

# Usage (advantages)

sensenet content type approach enables you to define custom content types in a system according to your needs. This allows great flexibility on content level. You can freely use predefined content types available in the system or create your own by inheriting from ``GenericContent`` or any other existing content type. It is recommended to define the required custom content types right at the beginning of your project and build your solution afterwards.
