---
title: Query by a field
metaTitle: "sensenet API - Query by a field"
metaDescription: "Query by a field"
---

# Define searchable fields

You can define which fields should be saved to the index by marking them in the related content type at the chosen field's definition.

It is also possible to switch off indexing for certain content types. In that case nobody will be able to find the instances made with those content types using queries, and the index will be smaller.

About the possible indexing configurations and field definition see the [schema](/concepts/content-management/02-content-model) and the [content type concepts](/concepts/content-types).

Basically query by a field works by adding the chosen field name to the query with a value that you are looking for:

```query=[FieldName]:[value]```

Field names are always case sensitive but values are not. The following queries return the same result:

```query=Name:saturn```
&nbsp;
```query=Name:SaTUrn```

In the following examples you will see how you can query by the most common fields.

# Query by a text field

The following query returns the content that's `Color` is `Yellow`

<tab category="querying" article="query-by-field" example="byShortText" />

Following query returns the content that's `DisplayName` field contains the word 'Astra' (notice that it is actually a [wildcard search](/api-docs/querying#wildcardsearch))

<tab category="querying" article="query-by-field" example="byLongText" />

# Query by a number field

Following example shows how to get the list of cars that's `Price` lower than 1 000 000:

<tab category="querying" article="query-by-field" example="byNumber" />

# Query by a boolean field

You can also query by a boolean field as it is shown in the following example. The query returns the list of folders (e.g. content that's `IsFolder` field's value is `true`).

<tab category="querying" article="query-by-field" example="byBoolean" />

# Query by choice field (localized value)

It is also possible to query by a choice field. Since choice options could have a value and the (localized) title you have to format your query according to which one you want to search for. See the following choice field's options

```xml
<Field name="MemoType" type="Choice">
      <DisplayName>Memo</DisplayName>
      <Configuration>
        <Options>
          <Option value="generic" selected="true">Generic</Option>
          <Option value="iso">ISO</Option>
          <Option value="iaudit">Internal audit</Option>
        </Options>
      </Configuration>
    </Field>

```

In the following example you can see that if you simply use a verb as a possible value of a choice field it will search for it as a choice option's text, in this case for 'Internal audit' memos.

<tab category="querying" article="query-by-field" example="byChoiceLocalized" />

# Query by choice field (value)

If you use localized titles for the choice options you may need to query by value that is common even if the title could be used and displayed in various languages. In this case you have to use the '$' sign with the value.

<tab category="querying" article="query-by-field" example="byChoice" />
