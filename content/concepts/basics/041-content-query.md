---
title: "Content Query"
metaTitle: "sensenet - Content Query"
metaDescription: "sensenet Content Query"
---

One of the main features of sensenet is Content Query. Repository is a **query based system**. This means that every content is delivered by a very sophisticated and fast query engine.

As a user, a developer or a repository administrator you get a simple but powerful content query language (CQL). You can use this language to find, filter and sort content even in a huge and constantly expanding repository. As a developer you get an easy-to use API as well, that is capable of serving any need in your custom code.

# Indexing

For every content [link] the field values can be indexed so that when you search for a term the corresponding content with the related field value will appear in the result set. It is also possible to search by explicitly defining the field whose value we want to search for. The way a specific field of a content is indexed is defined in the CTD Field Definition.

[more about indexing](/concepts/basics/04-search#metadataindexing,searchingbyfields)

# Basic search

In most cases you want to look for a single term or a phrase, which is a group of words surrounded by double quotes ("apple pie"). In these cases sensenet will look for contents that have these words in their default index data that contains all the relevant text of the content.

In more complex situations you may need some filtering based on the type or place of the content you are looking for, or you want to search in a specific field. In this page you can learn how to construct more complex queries that you can use to effectively find content in a huge repository.

[check the api docs for complex queries and examples](/api-docs/querying)

# Security

In sensenet there are many Content that we consider security critical like users, confidential documents, system content. As this platform is based on Content Query that lets users find content in the repository easily, we need to make sure that noone can access information that he or she does not have permissions for.

When a user executes a query (or to be precise, the system executes it in the name of the user), the result list will contain only those content that the user has permissions for. There is no way for the user to access other content using a query, only the permitted ones. This is baked into the system, because we filter the result for the appropriate permissions. This means even if somebody hijacked the query somehow, he will not be able to access sensitive information.

The most sensitive personal data is the password of a user. To make sure that it is safe, sensenet does not index the *Password* and *PasswordHash* fields - and this cannot be changed by a configuration, this behavior is hardcoded.
