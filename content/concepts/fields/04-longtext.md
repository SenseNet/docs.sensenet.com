---
title: "LongText field"
metaTitle: "sensenet - LongText field"
metaDescription: "sensenet LongText field"
---

The LongText [field](/concepts/fields) is used for storing text without length restrictions.

# Usage in CTD:

```xml
<Field name="LongDescription" type="LongText">
  ...
</Field>
```

# Configuration

The following properties can be set in the Field's Field Setting configuration:
- **MaxLength**: an integer type property defining the maximum length of the inserted text: 0 to infinite.
- **MinLength**: an integer type property defining the minimal expected length of the inserted text: 0 to infinite.
- **TextType**: defines the rendering mode of the input box. Available settings:
   - *LongText*: box is rendered as a simple textarea.
   - *RichText*: box is rendered as a textarea and contains editor buttons at the bottom of the box.

<note severity="info">
Be aware when <strong>RichText</strong> is set as <i>TextType</i>, HTML tags are appended to the inserted text - that are not visible for the user. These extra characters are calculated in the length of the inserted text, thus <i>MinLength</i> and <i>MaxLength</i> settings in these cases should be used with precautions.
</note>

# Fully featured example

```xml
<Field name="LongText1" type="LongText">
      <DisplayName>LongText data</DisplayName>
      <Description>Field for storing more than 450 characters.</Description>
      <Configuration>
        <ReadOnly>false</ReadOnly>
        <Compulsory>true</Compulsory>
        <DefaultValue>hello world</DefaultValue>
        <MaxLength>300</MaxLength>
        <MinLength>3</MinLength>
        <TextType>LongText</TextType>
      </Configuration>
</Field>
```

The above example configures the LongText field so that:
- default value is set to hello world
- at most 300 characters are allowed to be inserted
- at least 3 characters are expected to be inserted
- field value is editable (not read-only)
- field control is rendered as simple textarea

# React field controls

LongText field can be rendered with two type of field control based on `TextType` property's value. With `TextType` `LongText` a simple multiple textbox will be displayed, but with value `RichText` it will be displayed as a RichTextEditor. On how to use it, see the [related docs](https://sn-react-component-docs.netlify.app/?path=/story/fieldcontrols-textarea--new-mode)

