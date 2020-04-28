---
title: "Client Side Forms"
metaTitle: "sensenet - Client Side Forms"
metaDescription: "sensenet Client Side Forms"
---

# Client Side Forms

As you probably heard before, in sensenet everything is a content. This philosophy provides many advantages when working with sensenet because the only difference between contents are the fields they have. This facilitate the way of managing different [type of contents](/concepts/content-types).

Based on this logic, defining a new content type with custom fields, opens the possibility to create client side forms easily.

# Schemas and Forms

You have the newly defined content type (form) but how this will be filled by users, you may ask.
Every time a user fills the fields (questions) of this content and submit it, a new instance is created (filled form) containing all the answers given to the questions in the form (saved to the corresponding fields).

Schemas
Fields on content types can have different types and different configurations just like questions may have on a survey. So if you have your questions you can easily select the matching types using a wide variety of field types from simple text and number fields till more complex ones containing multiple options to choose or list of links as answers. The fields can also be used to refine your questions with setting minimum or maximum values, set whether a question/field is required to fill or adding more complex rules for example for working with email addresses or phone numbers as answers and many more.

Schema represents the content model of the repository, the content types you create. This schema contains all the types, their fields and field configs and could be downloaded from your repository on the fly (through OData REST API) that lets you build custom ui for your form.

# Views

The content is there in the repository, but how it will be visible to the users only depends on you. You can get fields and possible values by API calls and display it in your solution based on your taste and needs.

Generating forms by content types dynamically is also possible with sensenet javascript client library that contains a  mapper (which binds fields to controls) and the required controls written in ReactJs. 

# Fields
[illustration of a custom content type with questions as fields]

Every content is built up by fields, so for example a user as content has numerous special fields as well for storing data like their username and password (among others). It is no different with forms but instead of username and password, it consists of questions.
Fields (of a content) can be defined on the content type definition.

# usage (advantages)

It is a handy use case of a custom content type since you don't need to rely on any third party service to create client side forms. All submitted forms will be saved as a new content under a specified location in your repo enabling you to analyze all the answers afterwards.
This versatility enables you to easily define contents based on your business needs, the client side forms (presented above) is just one example of the possibilities content type methodology holds.

# Forms and permissions
One of the most powerful features of sensenet's permission system is permission inheritance. There are cases however when you do not want children items to inherit a permission. For example you want to allow certain users to see a content (e.g. a Content List) but you do not want them to be able to see the child contents that were added to that list as list items. A typical use case for this is when you allow Visitors (not logged-in users) to Add content (e.g. a completed survey as Form Item) to a Form but you do not want them to be able to see or open any items added to the form by others. In this case you would set a local only (in other words not inherited) permission entry on the Form for Visitors to let them add new contents. The advantage of this construct is that you do not have to break inheritance on the content (in this case the Form), which means any permission allowed or denied on the tree above will still be inherited by child content.
