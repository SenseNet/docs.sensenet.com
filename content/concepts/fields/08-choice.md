---
title: "Choice field"
metaTitle: "sensenet - Choice field"
metaDescription: "sensenet Choice field"
---

Choice field is a multi-purpose field used to allow the user to choose one or more options. It can be rendered as a dropdown list, radio buttons, or checkboxes.

Choice field as a dropdown list can be used just the same as a common html select. The options could have the standard properties like selected, disabled, label and value. Value and label properties and the text of the option could be localized.

The chosen option is indexed in the fulltext index by all its localized values and texts (so you can search by either value or text) and indexed in field index by its value. If you want to sort list items by a choice field, they will be ordered by the selected options value and the items with extravalue will be at the end of the list.

# Usage in CTD:

```xml
   <Field name="Data1" type="Choice">
   ...
   <Configuration>
      <Options>
          <Option value="1" selected="true">value 1</Option>
          <Option value="2">value 2</Option>
          ...
      </Options>
   </Configuration>
   </Field>
```

# Configuration

The following properties can be set in the field's configuration:

- **AllowMultiple**: (optional) allows multiple selection.
- **AllowExtraValue**: (optional) allows to add an extra value to the field.
- **DisplayChoice**: (optional) specifies the type of the field control which will handle the current field ('DropDown','RadioButtons','CheckBoxes').

# Fully featured example

```xml
<Field name="Style" type="Choice">
      <DisplayName>Style</DisplayName>
      <Description>This field contains the style of the car</Description>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>true</AllowExtraValue>
        <Options>
          <Option value="Sedan" selected='true'>Sedan</Option>
          <Option value="Coupe">Coupe</Option>
          <Option value="Cabrio">Cabrio</Option>
          <Option value="Roadster">Roadster</Option>
          <Option value="SUV">SUV</Option>
          <Option value="Van">Van</Option>
        </Options>
        <DisplayChoice>RadioButtons</DisplayChoice>
      </Configuration>
</Field>
```

The above example configures the Choice field so that:

- it is not allowed to choose more than one option
- it is allowed to add an extra value
- there's a list of the options
- the field will be displayed as list of radiobuttons

# React field controls

Choice field can be rendered in multiple ways based on its configuration. If the field can contain multiple options as a value, it can be rendered as a CheckboxGroup or a DropDownList (default is CheckboxGroup), if it can have only one selected value, you can choose between DropDownList and RadioButtonGroup controls (default is DropDownList). On how to use them, see the [related docs](https://sn-react-component-docs.netlify.app/?path=/story/fieldcontrols-checkboxgroup--new-mode)
