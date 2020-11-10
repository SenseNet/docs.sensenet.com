---
title: "Boolean field"
metaTitle: "sensenet - Boolean field"
metaDescription: "sensenet Boolean field"
---

The Boolean field is used for storing a boolean value (true or false).

# Field handler

- handler: `SenseNet.ContentRepository.Fields.BooleanField`
- short name: **Boolean**

Usage in CTD:

```xml
<Field name="IsSystemContent" type="Boolean">
  ...
</Field>
```

# Configuration

There are no specific properties defined for this Field Control besides the common properties.

# Fully featured example

```xml
    <Field name="RequiresRegistration" type="Boolean">
      <DisplayName>Requires registration</DisplayName>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Show</VisibleEdit>
        <VisibleNew>Show</VisibleNew>
      </Configuration>
    </Field>
```

The above example configures the Reference Field so that:

- display name will be Requires registration
- the field will be hidden on browse view but it will be visible in edit and new view.
