---
title: "Content types"
metaTitle: "sensenet FAQ - Content types"
metaDescription: "sensenet FAQ - Content types"
---

# Can I delete a content type?

If there's no content instance with the chosen type, then you can simply delete the content type as other contents in the repository. If you've created some content with the type already, delete the affected contents first, then you can remove the content type definition as well.

# How can I change the type of a field?

Changing a field's type is not possible since the field types can be quite different and the related values in most of the cases cannot be migrated. If you are sure you do not need the field with its current type, remove it from the content type definition, save it (if there were any content in the repository that had this field filled with value, it will be removed from these contents as well) and then you can freely add a new field with the same name but with another type.

# Can I change my type's parent type?

No, it is not possible to change the ParentType of a content type.
