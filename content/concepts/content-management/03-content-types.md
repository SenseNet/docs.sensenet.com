---
title: "Content Types"
metaTitle: "sensenet - Content Types"
metaDescription: "sensenet Content Types"
---


The content repository contains many different types of content. Content vary in structure and even in function. Different types of content contain different fields, are displayed with different views, and may also implement different business logic. The fields, views and business logic of a content is defined by its type - the content type.

# Content Types
https://community.sensenet.com/docs/content-type/


Content Types are defined in a type hierarchy: a Content Type may be inherited from another Content Type - thus automatically inheriting its fields. Multiple inheritance is not allowed so Content Types are arranged in a simple tree.

A Content Type is a special content in the Content Repository. Content Types define the structure and functioning of content:

name, description of content types and available set of fields are defined with an xml configuration (Content Type Definition or CTD),
optional custom business logic is implemented via a custom Content Handler, custom Fields and custom Field Controls. For example a User has a name, e-mail address, etc. - these fields of the User Content Type are defined by its Content Type Definition. When saving a User it can be synchronized into an Active Directory - this logic is implemented in its Content Handler.

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

Content Types can inherit fields from their ancestors. For example a Domain type inherits all the fields of the basic Folder type. A Content Type may only inherit fields from a single type thus the Content Types are arranged in a simple tree hierarchy. Inherited field configuration can be overridden in derived types. Field inheritance and overriding is defined in the Content Type Definition of the type.

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

The content type definition xml of a content type can be edited on the admin ui or through OData REST API (see How to create a Content Type for details).

https://community.sensenet.com/docs/ctd/
# Usage (advantages)
