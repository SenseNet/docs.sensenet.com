---
title: "Client-Side Forms"
metaTitle: "sensenet Concepts - Client-Side Forms"
metaDescription: "sensenet Client-Side Forms"
---

As you probably heard before, in sensenet everything is a content. This philosophy provides many advantages when working with sensenet because the only difference between contents are the fields they have. This facilitates the way of managing different [type of contents](/concepts/content-management/03-content-types).

Based on this logic, defining a new content type with custom fields opens the possibility to create client-side forms easily.

# Schemas and Forms
You have the newly defined content type: a form. But how will your users fill this?
Every time a user fills the fields (questions) of this content and submits it, a new instance is created (filled form), containing all the answers given in the form (saved to the corresponding fields).

## Schemas
Fields of content types can have different types and different configurations, just like questions on a survey. So if you have your questions, you can easily select the matching types using a wide variety of field types from simple text and number fields to more complex ones containing multiple options to choose, or even a list of links as answers. The fields can also be used to refine your questions by setting minimum or maximum values, making a question/field required to fill, or adding more complex rules like email or phone number validation.

Schema represents the content model of the repository: the content types you create. This schema contains all the types, their fields and field configurations, and can be downloaded from your repository on the fly (through OData REST API) that lets you build custom UI for your form.

# Views
The content is there in the repository. How it will be visible to users is up to you. You can get fields and possible values by API calls and display it in your solution according to you needs.

Generating forms by content types dynamically is also possible with sensenet javascript client library that contains a  mapper (which binds fields to controls) and the required controls written in ReactJs.

# Fields
[illustration of a custom content type with questions as fields]

Every content is built up by fields. For example, a user as content has numerous special fields for storing data: their username and password, among others. It is no different with forms, but instead of username and password, it consists of questions.
Fields of a content can be defined on the content type definition.

# Forms and permissions
One of the most powerful features of the sensenet permission system is permission inheritance. However, there are cases when you do not want children items to inherit a permission entry. For example, you want to allow certain users to see a content (e.g. a Content List) but do not want them to see the child contents that were added to that list as list items. A typical use case for this is when you allow Visitors (not logged-in users!) to add content (e.g. a completed survey as Form Item) to a Form but do not want them to see or open any items added to the form by others. In this case, you would set a local only (not inherited) permission entry on the Form for Visitors to add new contents. The advantage of this method is that you do not have to break inheritance on the content, which means any permission allowed or denied on the tree above will still be inherited by the child content.

# Usage (advantages)
It is a handy use case of a custom content type, since you do not need to rely on any third party service to create client-side forms. All submitted forms will be saved as a new content under a specified location in your repository, enabling you to analyze all the answers afterwards.

Client-side forms is just one example of the possibilities the content type methodology holds. Its versatility enables you to easily define content based on your business needs.
