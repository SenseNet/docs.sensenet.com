---
title: "DateTime field"
metaTitle: "sensenet - DateTime field"
metaDescription: "sensenet DateTime field"
---

DateTime is a field that stores a date and a time value.

# Usage in CTD:

```xml
<Field name="CreationDate" type="DateTime">
  ...
</Field>
```

# Configuration

The following properties can be set in the field's configuration:

- **DateTimeMode**: (optional) an enumeration which defines the presentation mode of the stored value: *None*, *Date* and *DateAndTime*. This only controls the behavior of the DatePicker. Default is *None*.
- **Precision**: (optional) an enumeration which defines the precision of the indexed value: *Millisecond*, *Second*, *Minute*, *Hour*, *Day* (Default is *Minute*). This does not affect the stored value, only the value stored in the index, making it possible to use different precision levels depending on the nature of the application. Chosing a finer or coarser precision than the optimal may cause slower query running and larger index files than what would be reasonable.

# Fully featured example

```xml
<Field name="MyDateTimeField" type="DateTime">
	<DisplayName>My DateTime field</DisplayName>
	<Description>DateTime content</Description>
	<Configuration>
		<DateTimeMode>DateAndTime</DateTimeMode>
		<Precision>Second</Precision>
	</Configuration>
</Field>
```

The above example configures the DateTime field so that:

- it stores the date and time values
- it stores the date/time in the index in seconds

# React field controls

DateTime field can be represented by DatePicker or DateTimePicker controls, depending on the field's `DateTimeMode` property. On how to use it, see the [related docs](https://sn-react-component-docs.netlify.app/?path=/story/fieldcontrols-datepicker--new-mode)
