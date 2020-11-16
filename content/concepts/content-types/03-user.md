---
title: "User"
metaTitle: "sensenet - User"
metaDescription: "sensenet User"
---

User is the base type for creating user content. Logging into sensenet could be done with credentials that belong to specific user content.

# Features

- User is the base content for defining users who can log into the repository
- password is never persisted to repository, only the hash of the password which exposes no security threats
- users are created under a specific Domain (/Root/IMS/Public)
- users may be organized under [OrganizationalUnits](/concepts/content-types/05-organizational-unit) and referenced in [Groups](/concepts/content-types/04-group) to model organizational hierarchy and to define custom permission levels and roles in the repository

# Parent type

[GenericContent](/concepts/content-types/01-generic-content)

# Content handler

`SenseNet.ContentRepository.User`

The content handler of the **User** content type handles the following:

- encodes passwords when saving the content
- sets adequate permissions to user content when new user is created (thus every user has rights to update own properties)

# Special fields

| Name | Type |Description|
|------|------|-----------|
|**Enabled**|`Boolean`||
|**LoginName**|`ShortText`||
|**FullName**|`ShortText`||
|**Email**|`ShortText`||
|**Password**|`Password`||
|**Phone**|`ShortText`||
|**Avatar**|`Image`||
|**ImageRef**|`Reference`||
|**ImageData**|`Binary`||
|**FacebookURL**|`ShortText`||
|**LinkedInURL**|`ShortText`||
|**TwitterAccount**|`ShortText`||
|**JobTitle**|`ShortText`||
|**Department**|`ShortText`||
|**BirthDate**|`DateTime`||
|**Manager**|`Reference`||
|**Language**|`Choice`||
|**Languages**|`ShortText`||
|**Gender**|`Choice`||
|**MaritalStatus**|`Choice`||
|**Education**|`LongText`||
|**ProfilePath**|`Reference`||
|**FollowedWorkspaces**|`Reference`||

# Example
