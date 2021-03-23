---
title: "Create a new content type"
metaTitle: "sensenet Tutorials - Create a new content type"
metaDescription: "sensenet Tutorials - Create a new content type"
---

A Content Type Definition (CTD) is an XML-format configuration file for content types. After creating a new CTD the content type is immediately available in the system and can be used to create new content. The XML configuration (CTD) holds information about the content's name, description, icon, its parent content type's name and fields for storing content metadata.

# Create a new content type definition

First login to the admin-ui and go to the Content Types menu. There you can find all the available content types, all the built-in and the custom ones. Choosing an existing content type to be your customs parent type is a key step of creating content types in sensenet. It can save you a lot of headaches if you choose a parent type with fields and logic which you will need in your custom type anyway.

Let's see how to create a custom type for contracts. Contracts are in most of the cases files with some specific metadata like multiple unique contract id's, project or lawyer name and related other document as references. But behind these contract-specific data they are files that should have all the common data like the actual binary of the file, date of modification, the creator user and so on. These are the cases when sensenet's content type inheritance comes handy. All you have to do is to choose the right parent type and create an inherited one to get all the common fields that a file typed content could have.

Click on the add button at the top of the drawer menu and choose Content Type from the dropdown. A xml editor will appear with some default data to help you at the start. Don't panic working with these xml files seems to be though at the beginning but you cannot spoil anything and if you made one, the others will come easy.

You can clear the content of the editor and paste the following xml instead:

```

```

See the key stuff to make it easy to understand what is happening here:

# Make the new ctd available for content creation

# Change your content type

- no parenttype change
- if the name is changed a new one is created

# Add a new field

# Modify fields

- no type change

# Working with field visibility

# Delete a field

