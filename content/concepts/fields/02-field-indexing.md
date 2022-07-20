---
title: "Field indexing"
metaTitle: "sensenet Concepts - Field indexing"
metaDescription: "sensenet Field indexing"
---

For every [content](/concepts/basics) the [field](/concepts/fields) values can be indexed so that when searching for a value the corresponding content will appear in the results. It is also possible to search in fields by explicitly defining the field to search for in a query. The way a specific field of a content is indexed is defined in the [content type definition](/concepts/content-types).

<note severity="info">
It is possible to switch off indexing for certain fields or content types. In that case, nobody will be able to find the instances of those content types using <a href="/concepts/basics/041-content-query" target="_blank">content query</a>, but the index will be smaller.
</note>

sensenet uses [Lucene search engine](http://lucenenet.apache.org/) by default for indexing the [content repository](/concepts/basics/02-content-tree) and to provide a fast mechanism for returning query results. Apart from the indexing of some basic built-in properties, every field can be configured to be indexed separately.

# Indexing and storing

There are two ways to put field data information in the index: by indexing and by storing. **Indexing** means that an analyzer processes field data, it resolves to data to *terms* and the content Id is stored under the corresponding term making it possible to search for terms to get the content. **Storing** means that field data itself can be stored in the index for a content (for example the base system stores content Path in the index for convenience). Indexing and storing is independent of each other, they can both be switched on and off regardless of the state of the other.

# Analyzers

The goal of an analyzer is to extract all relevant terms from a text, filtering stop-words, etc. It is important that the same analyzer is used in the indexing process and the query building. For example, your document contains the following text: „Writing Sentences” and your query text is „writing”. After analysis the indexed text and search text will be these: „writing, sentences” and „writing”. This method ensures that the original text can be found even if the query word typed in and the word in the original text does not match exactly char-by-char. We use a *PerFieldAnalyzerWrapper* that can support a unique analyzer for every field. Analyzer-Field bindings are defined in the CTD. Field without analyzer-binding will be analyzed with the default analyzer: *KeywordAnalyzer*.

# Stop-word dictionary

Some of the built-in analyzers (*StandardAnalyzer* and *StopAnalyzer*) use a stop-word dictionary to exclude certain words that will not be indexed as terms. For example when indexing written English texts it is useful not to index the word 'the', as it is usually irrelevant in relation to the text content. Besides, searching for 'the' would come up with results including Content containing any written English text. The built-in stop-word dictionary contains the following words:

```txt
"a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of",
"on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"
```

# Indexing definition

Below you can see the skeleton of a Field definition with indexing definition included:

```xml
    <Field name="" type="">
      ...
      <Indexing>
         <Mode></Mode>
         <Store></Store>
         <TermVector></TermVector>
         <Analyzer></Analyzer>
         <IndexHandler></IndexHandler>
      </Indexing>
    </Field>
```

You can configure the indexing and storing mode, analyzer, and the association of Field IndexHandler in every field. Indexing configuration is an optional xml element, with name *Indexing*, under the *Field* element after the *Bind* element (if defined) and before the *Configuration* element (if defined). Indexing element can contain the following sub elements in this order: *Mode*, *Store*, *TermVector*, *Analyzer*, *IndexHandler*. All elements are optional because all elements have default values.

# Mode

Indexing mode settings (refer to [Lucene indexing documentation](http://lucene.apache.org/java/2_9_4/api/core/org/apache/lucene/document/Field.Index.html)). Available values:

- **Analyzed** (default): Field will be analyzed with the given analyzer
- **AnalyzedNoNorms**
- **No**: Field is not indexed at all
- **NotAnalyzed**: Field is indexed without analyzing
- **NotAnalyzedNoNorms**

<note severity="info">
This setting is only available to make it easier to configure the indexing subsystem, default install only uses <em>Analyzed</em> and <em>No</em> settings.
</note>

# Store

The native Field value storage in the index can be switched on or off (refer to [Lucene storing documentation](http://lucene.apache.org/java/2_9_4/api/core/org/apache/lucene/document/Field.Store.html)). Available values:

- **No** (default)
- **Yes**

# Term vector

Term vector settings (refer to [Lucene term vector documentation](http://lucene.apache.org/java/2_9_4/api/core/org/apache/lucene/document/Field.TermVector.html)). Available values:

- **No** (default)
- **WithOffsets**
- **WithPositions**
- **WithPositionsOffsets**
- **Yes**

<note severity="info">
This setting is only available to make it easier to configure the indexing subsystem, default install uses default setting only.
</note>

# Analyzer

You can associate any Lucene Analyzer to a field (refer to: [Lucene analyzer documentation](http://lucene.apache.org/java/2_9_4/api/core/org/apache/lucene/analysis/Analyzer.html)). The element value is the fully qualified type name of the desired Lucene analyzer. Available analyzers:

- Lucene.Net.Analysis.Standard.**StandardAnalyzer**: an analyzer created specifically for text sentences/words. It excludes punctuations, splits up input string to words, gets each word in lower case and uses a stop-word dictionary for exclusions to lower false hit rates (for example you cannot query for articles like 'a' or 'the'). Use this whenever written text is stored in a Field that needs to be queried to individual words.
- Lucene.Net.Analysis.**KeywordAnalyzer**: (default) Trims the input string (removes white-spaces from the beginning and the end) and treats the input as a whole expression, as given - it does not even transform the input to lower case. It is useful for Fields holding processable string data, that needs to be searched as is.
- Lucene.Net.Analysis.**SimpleAnalyzer**: splits input string along white-spaces and punctuations, and even along numbers.
- Lucene.Net.Analysis.**StopAnalyzer**: similar to SimpleAnalyzer but also uses stop-word dictionary to exclude words.
- Lucene.Net.Analysis.**WhitespaceAnalyzer**: splits input string along white-spaces, but not along punctuations.

The built-in standard analyzer is based on english language. Please note that when using the system in different language environments it is reasonable to develop a custom analyzer with stop-word dictionary (and optionally a stemmer) specialized for the given language.

Only one analyzer can be bound to a specific field, that is this setting cannot be overridden. Changing an analyzer for a field can only be done at the topmost level the field is defined. To change an analyzer first re-register the CTD with omitted analyzer settings:

```xml
    <Field name="MyKeywords" type="LongText">
      <DisplayName>MyKeywords</DisplayName>
      <Indexing>
      </Indexing>
    </Field>
```

After registration you may provide the new analyzer settings and reinstall the CTD:

```xml
    <Field name="MyKeywords" type="LongText">
      <DisplayName>MyKeywords</DisplayName>
      <Indexing>
        <Analyzer>Lucene.Net.Analysis.Standard.StandardAnalyzer</Analyzer>
      </Indexing>
    </Field>
```
<div>&nbsp;</div>
<note severity="warning">
Changing an analyzer for a Field is only valid in development time, it should not be carried out on live portals! After changing an analyzer the affected Content should be saved and reindexed - a full index repopulation is highly recommended!
</note>

# Indexing of built-in properties

The following is a list of the properties that are indexed regardless of field indexing settings:

- **NodeId**: the identifier number of the Content.
- **VersionId**: (node.VersionId) version id of the Content.
- **Version**: (node.Version) version string of the Content (in the form of V*major*.*minor*.*status*).
- **CreatedById**: (node.CreatedById) id of the creator user Content of the Content.
- **ModifiedById**: (node.ModifiedById) id of the last modifier user Content of the Content.
- **NodeTimestamp**: (node.NodeTimestamp) 8 byte auto incremented timestamp for optimistic concurrency control.
- **VersionTimestamp**: (node.VersionTimestamp) 8 byte auto incremented timestamp for optimistic concurrency control.
- **IsInherited**: (node.IsInherited) value indicating whether the default permissions of this instance are inherited from its parent.
- **IsMajor**: (node.Version.IsMajor) true if the instance represents a major version (eg. 2.0).
- **IsPublic**: value indicating that version status (node.Version.Status) is *Approved*.
- **AllText**: the concatenated text extract of Content Field values. Format of a text extract of a Field is defined by the type of IndexHandler (ie.: HyperLinkIndexHandler returns the hyperlink's href, target, text and title attributes' concatenation). This technical Field is analyzed by *StandardAnalyzer*, and query texts are interpreted as queries in this Field when no query Field is selected.
- **Path**: (node.Path) path of the Content.
- **ParentId**: (node.ParentId) id of the parent Content of the Content.
- **IsLastDraft**: value indicating that Content is last public version and it's status is public (node.IsLastPublicVersion && node.Version.Status == VersionStatus.Approved).
- **IsLastPublic**: (node.IsLatestVersion) value indicating that the Content is the last version (version ID equals to the last minor version ID).

## Indexing binaries

Binary fields are special fields that hold the actual content of a file. Indexing these kinds of fields depend on the type of the file (e.g. pdf files need a different algorithm than docx files)

# Disabling Field indexing

The following example shows an indexing configuration that disables the indexing of the field:

```xml
  <Field name="Versions" type="Reference">
    <Title>Versions</Title>
    <Description>Content version history</Description>
    <Indexing> <!-- Indexing configuration -->
      <Mode>No</Mode>
      <Store>No</Store>
    </Indexing>
    ...
  </Field>
```

# Using StandardAnalyzer

```xml
    <Field name="MyKeywords" type="LongText">
      <DisplayName>MyKeywords</DisplayName>
      <Indexing>
        <Analyzer>Lucene.Net.Analysis.Standard.StandardAnalyzer</Analyzer>
      </Indexing>
    </Field>
```

Enter the following text into the *MyKeywords* Field:

```txt
the testing tesT2 and test3/test4;test5
```

The following terms will be present in the index:

| Fields | Text |
|--------|------|
| MyKeywords | testing |
| MyKeywords | test2 |
| MyKeywords | test3/test4 |
| MyKeywords | test5 |

Different queries will return the following results:

```txt
MyKeywords:test
Result count: 0

MyKeywords:test*
Result count: 1

MyKeywords:testing
Result count: 1

MyKeywords:testING
Result count: 1

MyKeywords:test2
Result count: 1

MyKeywords:test3
Result count: 0

MyKeywords:test3*
Result count: 1

MyKeywords:test3/test4;test5
Result count: 1

MyKeywords:test3/test4;testing
Result count: 0

MyKeywords:tested
Result count: 0

MyKeywords:"testing tesT2 test3/test4;test5"
Result count: 1
```

# Using KeyWordAnalyzer

```xml
    <Field name="MyKeywords" type="LongText">
      <DisplayName>MyKeywords</DisplayName>
      <Indexing>
        <Analyzer>Lucene.Net.Analysis.KeywordAnalyzer</Analyzer>
      </Indexing>
    </Field>
```

Enter the following text into the *MyKeywords* Field:

```txt
the testing tesT2 and test3/test4;test5
```

The following terms will be present in the index:

| Fields | Text |
|--------|------|
| MyKeywords | the testing tesT2 and test3/test4;test5 |

Different queries will return the following results:

```txt
MyKeywords:the
Result count: 0

MyKeywords:the*
Result count: 1

MyKeywords:testing
Result count: 0

MyKeywords:testING
Result count: 0

MyKeywords:test2
Result count: 0

MyKeywords:test3
Result count: 0

MyKeywords:test3*
Result count: 0

MyKeywords:*test3*
Result count: 1

MyKeywords:test3/test4;test5
Result count: 0

MyKeywords:"the testing tesT2 and test3/test4;test5"
Result count: 1
```

# Using SimpleAnalyzer

```xml
    <Field name="MyKeywords" type="LongText">
      <DisplayName>MyKeywords</DisplayName>
      <Indexing>
        <Analyzer>Lucene.Net.Analysis.SimpleAnalyzer</Analyzer>
      </Indexing>
    </Field>
```

Enter the following text into the *MyKeywords* Field:

```txt
the testing tesT2 and test3/test4;test5
```

The following terms will be present in the index:

| Fields | Text |
|--------|------|
| MyKeywords | test |
| MyKeywords | testing |
| MyKeywords | the |
| MyKeywords | and |

Different queries will return the following results:

```txt
MyKeywords:test
Result count: 1

MyKeywords:test*
Result count: 1

MyKeywords:testing
Result count: 1

MyKeywords:testING
Result count: 1

MyKeywords:test2
Result count: 1

MyKeywords:test4334
Result count: 1

MyKeywords:tester
Result count: 0

MyKeywords:*test3*
Result count: 0

MyKeywords:test3/test4;test5
Result count: 1

MyKeywords:"the testing tesT2 and test3/test4;test5"
Result count: 1
```

Just to make it clearer: enter the following text into the *MyKeywords* Field:

```txt
hello12bye
```

The following terms will be present in the index:

| Fields | Text |
|--------|------|
| MyKeywords | hello |
| MyKeywords | bye |

# Using StopAnalyzer

```xml
    <Field name="MyKeywords" type="LongText">
      <DisplayName>MyKeywords</DisplayName>
      <Indexing>
        <Analyzer>Lucene.Net.Analysis.StopAnalyzer</Analyzer>
      </Indexing>
    </Field>
```

Enter the following text into the *MyKeywords* Field:

```txt
the testing tesT2 and test3/test4;test5
```

The following terms will be present in the index:

| Fields | Text |
|--------|------|
| MyKeywords | testing |
| MyKeywords | test |

Different queries will return the following results:

```txt
MyKeywords:test
Result count: 1

MyKeywords:test*
Result count: 1

MyKeywords:testing
Result count: 1

MyKeywords:testING
Result count: 1

MyKeywords:test2
Result count: 1

MyKeywords:test4334
Result count: 1

MyKeywords:tester
Result count: 0

MyKeywords:*test3*
Result count: 0

MyKeywords:test3/test4;test5
Result count: 1

MyKeywords:"the testing tesT2 and test3/test4;test5"
Result count: 1
```

# Using WhitespaceAnalyzer

```xml
    <Field name="MyKeywords" type="LongText">
      <DisplayName>MyKeywords</DisplayName>
      <Indexing>
        <Analyzer>Lucene.Net.Analysis.WhitespaceAnalyzer</Analyzer>
      </Indexing>
    </Field>
```

Enter the following text into the *MyKeywords* Field:

```txt
the testing tesT2 and test3/test4;test5
```

The following terms will be present in the index:

| Fields | Text |
|--------|------|
| MyKeywords | testing |
| MyKeywords | tesT2 |
| MyKeywords | test3/test4;test5 |
| MyKeywords | the |
| MyKeywords | and |

```txt
MyKeywords:test
Result count: 0

MyKeywords:test*
Result count: 1

MyKeywords:testing
Result count: 1

MyKeywords:testING
Result count: 0

MyKeywords:test2
Result count: 0

MyKeywords:tesT2
Result count: 1

MyKeywords:test3
Result count: 0

MyKeywords:test3*
Result count: 1

MyKeywords:test3/test4;test5
Result count: 1

MyKeywords:the
Result count: 1
```
