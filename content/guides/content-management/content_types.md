---
title: "Content Types"
metaTitle: "sensenet admin-ui - Content types"
metaDescription: "sensenet admin-ui - Content types"
---

As you probably know, in sensenet, everything is [content](/concepts/content-management), and every content is derived from a content type.
A content type is a special content in the repository which defines the structure and functions of contents. Content types are defined by a (xml like) configuration file called content type definition or CTD.

> [Learn more about content types (concept docs)](/concepts/content-management/03-content-types)

# Editing CTD (content type definition)

On the admin ui there is a dedicated section for all your content type definitions.

![Content type tab](../img/contenttype_tab.png)

By double clicking on any of these items here, a basic editor surface reveals. You can modify a CTD then submit it so save your changes. If you edited something and changed your mind, you can use the reset button (top right corner) to revert your changes (to the last saved state). If no changes has been made, the button stays inactive.

![Content type edit](../img/contenttype_edit.png)

> You can also copy the CTD and edit it on your local machine (instead on the admin ui) then upload it when you're done through OData REST API.


