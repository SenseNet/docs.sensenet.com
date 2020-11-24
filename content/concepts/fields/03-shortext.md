---
title: "ShortText field"
metaTitle: "sensenet - ShortText field"
metaDescription: "sensenet ShortText field"
---

*ShortText* field is used for storing short strings. Maximum length of the stored data is 450 characters (this value however can be limited to a lower value in the [field setting](/concepts/fields/01-field-setting) of the field). If you want to store text strings longer than this consider using the [LongText field](/concepts/fields/04-longtext).

The following apply to the behavior of the field:

- **Regular expression**: data input can be validated against a regular expression defined in the [field setting](/concepts/fields/01-field-setting).

# Usage in CTD:

```xml
<Field name="ShortDesc" type="ShortText">
...
</Field>
```

# Configuration

The following properties can be set in the field's [field setting](/concepts/fields/01-field-setting) configuration:

- **ReadOnly**: a boolean property defining whether the field data can be edited.
- **Compulsory**: a boolean property defining whether the field has to contain data. If it is set to true, but field doesn't contain any data the portal displays an error message on saving this content.
- **DefaultValue**: specifies the value filled in, when a new content is added.
- **MaxLength**: an integer type property defining the maximum length of the inserted text: 0 to infinite.
- **MinLength**: an integer type property defining the minimal expected length of the inserted text: 0 to infinite.
- **Regex**: contains common regular expression against which the field is validated. E.g. [a-zA-Z0-9]*$

<note severity="info">
For a complete list of common Field Setting configuration properties see <a href="/concepts/content-management/03-content-types">CTD field definition</a>.
</note>

# Fully featured example

```xml
<Field name="ShortText1" type="ShortText">
      <DisplayName>ShortText data</DisplayName>
      <Description>Field for storing at most 450 characters.</Description>
      <Configuration>
        <ReadOnly>false</ReadOnly>
        <Compulsory>true</Compulsory>
        <DefaultValue>hello world</DefaultValue>
        <MaxLength>15</MaxLength>
        <MinLength>3</MinLength>
        <Regex>[a-zA-Z0-9]*$</Regex>
      </Configuration>
</Field>
```

The above example configures the ShortText Field so that:

- default value is set to *hello world*
- at most 15 characters are allowed to be inserted
- at least 3 characters are expected to be inserted
- field value is editable (not read-only)
- field can contain only letters and numbers

# React field controls

ShortText field's default React field control is the ShortText control. On how to use it, see the [related docs](https://sn-react-component-docs.netlify.app/?path=/story/fieldcontrols-shorttext--new-mode)
