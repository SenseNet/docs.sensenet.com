---
title: "Search"
metaTitle: "sensenet - Search"
metaDescription: "sensenet Search"
---

# Search
https://community.sensenet.com/docs/search-engine/
https://wiki.sensenet.com/query_syntax.html

In sensenet one of the most important technical aspects is how we index content items and how we search for them. Especially because sensenet is a query based system which means every content, every list you see on the UI is there because a query found it. In this article we describe the search module and how developers can customize it.

# Metadata indexing, searching by fields
Making full index of content repository content is one of the most important tasks of the installation procedure of the sensenet Content Repository. This feature is used frequently during development too. The tool that can be used to create a full index is the Index Populator.
Index Populator is a standalone tool that has two files:

- IndexPopulator.exe
- IndexPopulator.exe.config

For every content [link] the field values can be indexed so that when searched for a field value the corresponding content will appear in the result set. It is also possible to search in fields by explicitely defining the field whose values are to be searched within a query. The way a specific field of a content is indexed is defined in the CTD Field Definition.

sensenet uses the Lucene search engine for indexing the content repository and to provide a fast mechanism for returning query results. Apart from the indexing of some basic built-in properties every field can be configured to be indexed separately.
There are two ways to put field data information in the index: by indexing and by storing. Indexing means that an analyzer processes field data, it resolves to data to terms and the content ID is stored under the corresponding term making it possible to search for terms to get the content. Storing means that field data itself can be stored in the index for a content (for example the base system stores path in the index to allow convenient programming). Indexing and storing is independent of each other, they can both be switched on and off regardless of the state of the other. 

You may configure which search engine you want to use for indexing and querying by setting the SearchEngine value in the providers web.config section.
Please note that this decision is usually made in development time. Although it is possible to switch to another search engine on a portal later, it will involve reindexing the whole content repository.
The whole point of having a search module is that it provides a generic search interface for the content repository, a technology-independent search layer. Queries are expressed in a text or code (LINQ) format and are compiled to the language of the configured engine. Developers may create and execute queries without knowing which engine will execute them.

# Analizer, Stop words
The goal of an analyzer is to extract all relevant terms from a text, filtering stopwords etc. It is important that the same analyzer is used in the indexing process and the query building. For example your document contains the following text: „Writing Sentences” and your query text is „writing”. After analysis the indexed text and search text will be these: „writing, sentences” and „writing”. This method ensures that the original text can be found even if the query word typed in and the word in the original text do not match exactly char-by-char. We use a PerFieldAnalyzerWrapper that can support a unique analyzer for every Field. Analyzer-Field bindings are defined in the CTD. Field without analyzer-binding will be analyzed with the default analyzer: KeywordAnalyzer.

Some of the built-in analyzers (StandardAnalyzer and StopAnalyzer) use a stop-word dictionary to exclude certain words that will not be indexed as terms. For example when indexing written English texts it is useful not to index the word the, as it is usually irrelevant in relation to the text content. Besides, searching for the would come up with results including Content containing any written English text. The built-in stop-word dictionary uses the following words:
"a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", 
"on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"

https://wiki.sensenet.com/Field_Indexing.html - mit érdemes még itt említeni, kifejteni?

# Search in uploaded docs
Binary fields are special fields that hold the actual content of a file. In sensenet it is possible indexing documents to let users search for (and find) uploaded files. sensenet is able to index not only metadata of documents (like creation date or author) but the binary content itself. The latter is called text extracting. The algorithm used for extracting text from a binary depends on the type of the file - e.g. we need a different algorithm for extracting text from docx files than from pdfs. sensenet uses a provider approach to solve this task: every file type (extension) has its own text extractor class.

https://wiki.sensenet.com/Text_extractors.html - kell részletezni ezeket?

# Full text search

# Boosting
# Stemming
# Queries (can be saved)
Content Query has always been one of the most important features in sensenet. It is a text-based query that is compiled to an expression object understandable by the system and executed by the query engine.

The search engine is responsible for providing these two important components:

The query engine is responsible for executing a query that is already compiled to a generic SnQuery object. It compiles the query to the language understandable by the underlying index technology. In sensenet the current default implementation uses the Lucene engine for indexing and querying content items.

The indexing engine is an implementation of an interface that defines methods for writing IndexDocuments to the index. These index documents are generic, they hold all the meta information by which we can search for content items in the repository. To learn more about how indexing works in sensenet, please visit the Field indexing article.

# Usage (search box tips)
-> link to /api-docs/querying



Customization
From version 7.1 sensenet provides the ISearchEngine, IIndexingEngine and IQueryEngine interfaces that let developers create their own query and index implementations.

Currently the built-in search engine works the same way as before: using a local Lucene index. In the future we will provide new official implementations that will be able to work as a service in the modern cloud environment.
