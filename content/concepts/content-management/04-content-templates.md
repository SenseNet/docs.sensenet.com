---
title: "Content Templates"
metaTitle: "sensenet - Content Templates"
metaDescription: "sensenet Content Templates"
---

In sensenet everything is content. When you create a new article, workspace or just upload a document you are creating a content. But you do not always want to start from scratch. Sometimes you want to have pre-filled values in fields, predefined document templates (e.g. containing a company logo in the header) or a whole pre-built workspace containing lists and libraries for a special purpose. This is what content templates are for: they are predefined templates for creating new content.

Content template can be a single content - e.g. a Word document containing a company logo or menu items - or a whole content structure, for example a pre-built workspace. 
Content templates can reside in the following places:

- global templates: /Root/ContentTemplates
- local templates: in ContentTemplates system folders on Workspace, Library or local content level

Every content template resides in a folder named by its content type. In this folder there can be multiple content templates - like multiple document templates in the /Root/ContentTemplates/File folder. Templates can have any name but it is advisable to give a name that reflects the type of the template.

# Creating a template

Content templates are content of the same type as they are defined for. For example document templates are files; library or list templates are document libraries or memo lists. To create a content template you simply need to create a new content under the appropriate folder (named by the type). You can set any property of the content template or add child content (e.g. libraries and lists for a workspace), they will be part of the template.

# Modify or delete a template

You can modify or delete a content template at any time. They are not connected to the content created using them in any way. For this reason, modifying a template will not modify a content previously created.

# Creating a new content with a template

Content templates are recognized and cached by the system immediately. You can create new content using the templates in any folder where that particular type is allowed.
When you open a New menu anywhere it will contain the following items for every allowed type:
- if the content type has no content template, the type name will be listed (e.g. New Memo)
- in case there are existing templates for that type all relevant templates will be listed (for example if the File content type is allowed in a document library, all the document templates will appear in the New menu with their name displayed)

After selecting a content template the user will be presented a content view for that content type and will be able to see and change the predefined template fields (depending on the content view). When the user presses the Done editing button the whole template will be copied to the destination place. E.g. if the template is of the workspace type, all its lists and libraries will be present at the destination place.

See example under API docs [https://docs.sensenet.com/api-docs/content-management/01-create]

# Permissions and security

Content templates can be controlled by permissions the same way as any other content. If the user has no permission for a particular template she will not be able to create content using that template.
After creating a content using a template the security settings that were set directly on the content template are also copied to the new content. All settings set on the destination parent will be inherited by the new content naturally.
To build a separate micro permission system locally it is enough to add local groups to wokspace templates.
# Content template hierarchy

Content templates can be defined on the following levels:

- global: global folder, see above
- workspace: ContentTemplates system folder under a workspace
- local: ContentTemplates system folder under any content - e.g. document library

When the user creates new content the system looks for content templates defined for all content types that are allowed there. It starts under the current content (e.g. content list), than moves up to the workspace and finally the global level. Content templates can override each other by name. This means if you define a local content template with a name that exists above on the workspace, site or global level, it will override them.
