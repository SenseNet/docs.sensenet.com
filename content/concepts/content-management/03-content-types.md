---
title: "Content Types"
metaTitle: "sensenet - Content Types"
metaDescription: "sensenet Content Types"
---


The content repository contains many different types of content. Content vary in structure and even in function. Different types of content contain different fields and may also implement different business logic. The fields and business logic of a content is defined by its type - the content type.

# Content Types
https://community.sensenet.com/docs/content-type/

Content types are defined in a type hierarchy: a content type may be inherited from another content type - thus automatically inheriting its fields. 

> Multiple inheritance is not allowed so content types are arranged in a simple tree.

A content type is a special content in the content repository. Content types define the structure and functioning of content. It is defined by a (xml like) configuration file called ``content type definition`` or ``CTD``.

Optional custom business logic is implemented via a ``custom content handler``, ``custom fields`` and ``custom field controls``. 

For example a User has a name, e-mail address, etc. - these fields of the user ``content type`` are defined by its ``content type definition``.

> Additional logic, like a specific task when a user is saved can be implemented in the ``content handler``.

# Default content types

In sensenet we provide a default set of predefined content types. These types can be used in any solution built with sensenet but additional content types can be configured as well according to business needs.

some example from the default set:
- user
- folder
- file
- workspace
- image
- ...

# Content type hierarchy

Content types are organized into hierarchy according to inheritance. Any content type may inherit from another one. The topmost content type in the inheritance hierarchy is the ``GenericContent`` (with handler ``SenseNet.ContentRepository.GenericContent``), every content type must inherit from this, or any of its descendant. When a child content type is inherited from a parent content type it means that the child content type contains all the fields of the parent, even if they are not defined in the child CTD - and also they share common implemented logic.

## Field inheritance

A content type inherits its fields from its parent content type (defined by the ``parentType`` attribute). This means that only additional fields have to be defined in the type’s CTD. The inherited fields apply to the content type as defined on the parent type, but may also be overridden. The following apply to field inheritance:

- fields of all ancestors are inherited: ie. fields of parent type of the direct parent are also available in the current type
- all fields of the parent type are inherited: deleting a field that has been defined on an ancestor type is not possible
- a field is inherited from parent when it is not defined in the current type’s CTD
- if a field is defined in a CTD it overrides parent’s field of the same name
- if a field is defined in a CTD with empty markup the parent’s field of the same name is overridden with empty data
- when inheriting a field the first order elements of the configuration element are inherited (these are defined by the field definition)

# Breaking inheritance


# Field settings and validations
https://wiki.sensenet.com/Field_Setting
Every field has a ``FieldSetting`` object serving as a configuration element inside the content type definition.

- appearance
- validation
The FieldSetting not only specifies the type of information but it also validates according to its implementation. Validation can happen automatically on saving a content, or manually from code. The Field is able to store the validation status (valid, invalid, reason of error), thus if a validation has occurred the field will be revalidated if its data has changed or a previous validation has failed.
  
  - default value, etc
  
 DefaultValue: default value of the field. jScript functions can be used to define dynamic default values. If the field does not appear on the ui, this element has no effect. Only takes effect in case the user adds a new content, edit forms do not use default values.
  
Indexing: indexing settings of the field. 
Compulsory: indicates if the field is compulsory


  - disabling
  
  
  
# Custom content type

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

The content type definition xml of a content type can be edited on the admin ui or through OData REST API (see How to create a Content Type for details)https://community.sensenet.com/docs/tutorials/how-to-create-a-content-type/.

https://community.sensenet.com/docs/ctd/
# Usage (advantages)
