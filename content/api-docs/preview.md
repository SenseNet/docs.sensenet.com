---
title: Preview
metaTitle: "sensenet API - Preview"
metaDescription: "Preview"
---

Following actions were designed to support the client-side preview component (document viewer) that displays document preview images.

# Get page count

Returns the number of pages in a document. If there is no information about page count on the content, it starts a preview generation task to determine the page count.

<tab category="preview" article="previews" example="getPageCount" />

# Check previews

Returns the number of currently existing preview images. If necessary, it can make sure that all preview images are generated and available for a document.

<tab category="preview" article="previews" example="checkPreviews" />

# Regenerate previews

It clears all existing preview images for a document and starts a task for generating new ones. This can be useful in case the preview status of a document has been set to ‘error’ before for some reason and you need to force the system to re-generate preview images.

<tab category="preview" article="previews" example="regeneratePreviews" />

# Commenting previews

A relatively new feature of sensenet document viewer is preview commenting. Basically it lets you manage comments of a document, connect the comments with the pages aka preview images with saving the data on the content itself. However it is a feature made for the document viewer, the following actions can be useful in your a custom sensenet document management project as well.

## Add comment

With the first example you can comment the third page of a document. You can also add coordinates to define which part of the page is actually commented:

<tab category="preview" article="previews" example="addComment" />

## Get comments for a page

Following example shows you how to get comments for the third page of a document:

<tab category="preview" article="previews" example="getComments" />

## Remove comment

With the next example you can remove the comment from the third page of the same document:

<tab category="preview" article="previews" example="removeComment" />
