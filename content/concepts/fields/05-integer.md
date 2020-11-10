---
title: "Integer field"
metaTitle: "sensenet - Integer field"
metaDescription: "sensenet Integer field"
---

Integer field is used for storing a whole number with value between -(2^31-1) and (2^31-1).

# Field handler
- handler: `SenseNet.ContentRepository.Fields.IntegerField`
short name: **Integer**

Usage in CTD:

```xml
<Field name="NumberOfPages" type="Integer">
  ...
</Field>
```

# Configuration

The following properties can be set in the field's configuration:

- **MinValue**: (optional) defines the allowed minimum value of the input data.
- **MaxValue**: (optional) defines the allowed maximum value of the input data.
- **Step**: (optional) specifies the value used to increment or decrement input data.

# Fully featured example

```xml
<Field name="MyIntegerField" type="Integer">
	<DisplayName>My integer field</DisplayName>
	<Description>Integer content</Description>
	<Configuration>
		<MinValue>10</MinValue>
		<MaxValue>100</MaxValue>
                <Step>10</Step>
	</Configuration>
</Field>
```

The above example configures the Integer field so that:

- the minimum allowed value is 10
- the maximum allowed value is 100
