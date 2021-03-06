---
title: "Binary field"
metaTitle: "sensenet Concepts - Binary field"
metaDescription: "sensenet Binary field"
---

Binary field is used for storing binary data. This is the most important field defined on the File content type: after uploading a file the binary content of the file will be stored in a Binary field.

In a Binary field any kind of binary data can be stored without length restrictions. This is very useful when you want to store uploaded files on your repository. The following apply to the behavior of the field:

- **Import/Export**: Binary field data can be exported to a single file / imported from a single file.

# Usage in CTD:

```xml
<Field name="BinaryData" type="Binary">
  ...
</Field>
```

# Configuration

The following properties can be set in the field's [field setting](/concepts/fields/01-field-settings) configuration:

- **IsText**: a bool property that defines the way the binary is presented on the admin-ui. If set to true, the field data can be inserted manually as a text, otherwise a file can be uploaded. In the former case a textarea, in the latter case a file upload control is rendered.

<note severity="info">The <strong>IsText</strong> configuration property value is only a hint and the ui component displaying the control can override this setting in cases when the content has a special extension or it is a content type.
</note>

# Fully featured example:

```xml
<Field name="BinaryData" type="Binary">
   <DisplayName>Binary content.</DisplayName>
   <Description>This field contains the binary of a file.</Description>
   <Configuration>
      <ReadOnly>false</ReadOnly>
      <Compulsory>false</Compulsory>
      <IsText>true</IsText>
   </Configuration>
</Field>
```

The above example configures the Binary Field so that:

- the field is editable (not read-only)
- filling the field is not necessary
- the field is rendered with a textarea by default and binary content can be inserted as a text

Binary field's default React field control is the FileUpload control. On how to use it, see the [related docs](https://sn-react-component-docs.netlify.app/?path=/story/fieldcontrols-fileupload--new-mode)
