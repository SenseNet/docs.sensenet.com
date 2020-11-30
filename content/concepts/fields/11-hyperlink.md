---
title: "Hyperlink field"
metaTitle: "sensenet - Hyperlink field"
metaDescription: "sensenet Hyperlink field"
---

HyperLink is a field that stores a link to the required content or webpage.

# Usage in CTD:

```xml
<Field name="LinkTo" type="Hyperlink">
  ...
</Field>
```

# Configuration

The following properties can be set in the field's configuration:

- **UrlFormat**: can hold two values *HyperLink* or *Picture*. Default value is *HyperLink*.

# Fully featured example

```xml
 <Field name="MyHyperlinkField" type="HyperLink">
      <DisplayName>My Hyperlink Field</DisplayName>
      <Description>Hyperlink content</Description>
      <Configuration>
        <UrlFormat>HyperLink</UrlFormat>
      </Configuration>
 </Field>
```

# React field controls

HyperLink field's default React field control is the ShortText control. On how to use it, see the [related docs](https://sn-react-component-docs.netlify.app/?path=/story/fieldcontrols-shorttext--new-mode)
