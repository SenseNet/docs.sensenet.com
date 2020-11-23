---
title: "Number field"
metaTitle: "sensenet - Number field"
metaDescription: "sensenet Number field"
---

Number field is used for storing any kind of number data. In a Number field any kind of data can be stored that can be translated as a number, such as: byte, integer, double, decimal, unsigned integer.

# Usage in CTD:

```xml
<Field name="Data1" type="Number">
  ...
</Field>
```

# Configuration
The following properties can be set in the field's configuration:

- **MinValue**: (optional) defines the allowed minimum value of the input data.
- **MaxValue**: (optional) defines the allowed maximum value of the input data.
- **Digits**: (optional) specifies the number of the displayed decimals. Default value is 2.
- **ShowAsPercentage**: (optional) number is stored as decimal value and displayed as percentage.

# Fully featured example

```xml
<Field name="Data1" type="Number">
      <DisplayName>Price</DisplayName>
      <Description>This field contains the price of the car</Description>
      <Configuration>
        <ReadOnly>false</ReadOnly>
        <Compulsory>true</Compulsory>
        <MinValue>1</MinValue>
        <MaxValue>99.5</MaxValue>
        <Digits>4</Digits>
        <ShowAsPercentage>true</ShowAsPercentage>
      </Configuration>
</Field>
```

The above example configures the Number field so that:

- the field is editable (not read-only)
- filling the field is compulsory.
- the minimal value has to be at least 1
- the maximal value can be set up to 99.5 (remark that the Min and MaxValue can be defined by decimal number)
- the data is displayed with 4 decimal numbers

# React field controls

Number field's default React field control is the Number control. On how to use it, see the [related docs](https://sn-react-component-docs.netlify.app/?path=/story/fieldcontrols-number--new-mode)
