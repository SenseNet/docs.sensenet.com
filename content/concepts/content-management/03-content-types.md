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

Content types can inherit fields from their ancestors. For example a domain type inherits all the fields of the basic folder type. A content type may only inherit fields from a single type thus the content types are arranged in a simple tree hierarchy. Inherited field configuration can be overridden in derived types. Field inheritance and overriding is defined in the content type definition of the type.

# Breaking inheritance


# Field settings and validations
  - appearance
  - validation
  - default value, etc
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

The content type definition xml of a content type can be edited on the admin ui or through OData REST API (see How to create a Content Type for details).

https://community.sensenet.com/docs/ctd/
# Usage (advantages)
