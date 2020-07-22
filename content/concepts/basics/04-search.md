---
title: "Search"
metaTitle: "sensenet - Search"
metaDescription: "sensenet Search"
---


In sensenet, one of the most important technical aspects is how we index content items and search for them. Because sensenet is a query-based system, every content, every list you see on the UI is there because a query found it. In this article, we describe the search module and how developers can customize it.

![search](../img/search.gif)

# Metadata indexing, searching by fields
For every [content](/content/concepts/content-management), the field values can be indexed, so when you search for a term, the corresponding content with the related field value will appear in the result set. It is also possible to search by explicitly defining the field whose value we want to search for. The way a specific field of a content is indexed is defined in the CTD Field Definition.

**sensenet** uses the Lucene search engine for indexing and to provide a fast mechanism for returning query results. Apart from the indexing of some basic built-in properties, each field can be configured separately according to the way you want to index it.

Please note that this decision is usually made in development time. Although it is possible to switch to another search engine later, it will involve reindexing the whole content repository.
The point of having a search module is that it provides a generic search interface for the content repository; a technology-independent search layer. Queries are expressed in a text or code (LINQ) format and are compiled to the language of the configured engine. Developers may create and execute queries without knowing which engine will execute them.

# How does it work?
It is possible to extract all relevant terms from a text, filtering stopwords etc. The same analyzer that executes this task is used in the indexing process as well as the query building. For example, your document contains the following text: „Writing Sentences”, with your query text being „writing”. After analysis, the indexed text and search text will be these: "writing", "sentences", and "writing". This method ensures that the original text can be found even if the query word typed in and the word in the original text do not match character-by-character.

Some of the built-in analyzers (StandardAnalyzer and StopAnalyzer) use a stop-word dictionary to exclude certain words that will not be indexed as terms. For example when indexing written English texts, it is useful not to index the word "the", as it is usually irrelevant in relation to the text content. Besides, searching for them would come up with results containing any written English text. The built-in stop-word dictionary uses the following words:
"a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of",
"on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"

You can configure the indexing and storing mode, analyzer, and the association of Field IndexHandler in every Field. All elements are optional because all elements have default values.

# Search in uploaded docs
Binary fields are special fields that hold the actual content of a file. In sensenet, it is possible to index documents to let users search for uploaded files. **sensenet** is able to index not only the metadata of documents (like creation date or author), but the binary content itself. The latter is called text extracting.
Sensenet provides different search features to make search results even more effective.
_Full text search_: In a sensenet content repository, you are able to search in any metadata field of any content. As the field values can be indexed for every content, when you search for a field value, the related content will appear in the result set. Without adding a field name into the query to search for, the search engine will look into all the fields whose value is indexed.
_Fuzzy search_ : It allows you to identify non-exact matches of your target item. You can get relevant search results even if you have a typo in your query or a different verbal tense. You can define which differences are accepted and which ones are not.
_Proximity search_: It is possible to limit the distance between the given words in the result documents. The proximity search is two words in quotes followed by a "~" character and a positive integer. This number defines the maximum number of words between the two searched words.
_Boosting_: It means that some items are scored better than others in the result list. For example if you search for two words, you can define which one is scored better. You can use boosting, for example, to promote the most popular or bestselling books in a bookshop in a search result. In sensenet, there is default sorting that overwrites boosting.

# Queries (can be saved)
There are several reasons for saving your search queries. A benefit of saving queries is that once stored, they will collect new data on future executions. The next time you open the query, all previous query criteria will be included in the search listings of the current session. This gives you a foundation of queries to build upon for your advanced search efforts, saving you data entry time.
Content Query has always been one of the most important features in sensenet. It is a text-based query compiled to an expression object, which the system understands and the query engine executes.

# Usage
The sensenet content repository is a query-based system, which means every content or image you see on the portal is collected by a sophisticated and fast query engine. As an end-user, developer, or administrator you get the solution to find, filter and sort content even in a huge and constantly expanding repository.
You can find several examples for its use within our [API docs](/content/api-docs/querying).

