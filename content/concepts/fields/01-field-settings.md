---
title: "Field settings"
metaTitle: "sensenet Concepts - Field settings"
metaDescription: "sensenet Field settings"
---

The behavior of [fields](/concepts/fields) can be controlled by their configuration - or as we call it in our API: their field setting. The field setting of a field contains properties that define the behavior of the field - for example a field can be configured as *read only* or *required*. The field setting of fields can be adjusted in the [content type definition (CTD)](/concepts/content-management/03-content-types), using the *Configuration* element.

As [fields](/concepts/fields) build up [content](/concepts/basics), the set of Fields are defined when [content types](/concepts/content-management/02-content-model) are defined. The [CTD](/concepts/content-management/03-content-types) holds the field definition information (besides a couple of content type-related configuration settings). When defining a content type the contained fields can be defined in the CTD with *XML fragments* describing the type of the field, metadata and field setting.

# Field setting and field types

Different Field types have different Field Settings.
Besides Field type-specific settings there are a couple common settings that are available for all Fields. For a complete list of common Field Setting configuration properties see [CTD field definition](/concepts/content-management/03-content-types)
