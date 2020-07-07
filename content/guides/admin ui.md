---
title: "admin ui"
metaTitle: "sensenet admin-ui - Getting started"
metaDescription: "sensenet admin-ui - Getting started"
---

sensenet has an admin ui which enables you to connect to your repos and do basic content management actions. In the following you can learn about the different features of the admin surface.

# Login

Admin ui is a central place to manage sensenet repositories by logging in to a specific repo with the correct credentials.
First, enter **repository URL** then log in using your email address (and password) or your Google, GitHub account.

![repo url](./img/adminui_repo.png)
![login](./img/admin-ui_logincredentials.png)

If you don't have a repo yet, you can log in to our demo repository by clicking the big blue button either on repo url or login screen (see above).

> You will be logged in with an **admin user** called Business Cat.

# Menu and dashboard
Once logged in you can see the admin ui in its whole beauty with different actions in the left pane menu and a nice dashboard with the most important info about your repo.

By default the sidebar has the following items:

![dasboard](./img/dashboard_new.png)

**search**: execute custom searches, build and save queries

**content**: explore and manage your content in the repository

**users and groups**: manage users and groups, roles and identities

**trash**: a place for all trashed items

**content types**: manage content types ([more about content types](/concepts/content-management/03-content-types))

**localization**: manage string resources

**setup**: configure sensenet system ([more about setup](/guides/setup))

<note title="pro tip">Menu items can be customized in personal settings.</note> - _____I'M not sure about this anymore_____

# Content

In the content pane you can browse the content repo and execute basic document management actions (open, edit properties, copy, move, delete). You can find these actions by clicking the three-dot menu on a content row.

Please note that different content types has different actions.

![Content management](./img/content.gif)

## Edit

Thanks to office online editing, some documents (like word and excel files) can be opened and edited without any desktop app involved.

## Preview

sensenet has a built-in preview generator which allow users to open pdf, docx, txt and other files in ready only mode.
Clicking open on a supported file will bring up the already generated preview images of the content in question.

![Open document preview](./img/preview.png)

## Add new

By clicking plus button in the sidebar you can add content to repo either by uploading or creating.

<note title="pro tip">Allowed types under a specific content can be set by modifying <a href="/concepts/content-management/06-allowed-childtypes">allowed child types</a> property of the content.</note>

![Create content](./img/adminui_addNEW.png)

# Personal settings

In personal settings you can customize the admin surface

- content views
- events and logging
- language
- display additional menu items

<note title="pro tip">You can bring up intellisense with ctrl+space shortcut to get context based suggestions.
<a href="/guides/dashboard-customization">Learn more</a> about personal settings in admin ui.</note>

![personal settings](./img/personal_settings.gif)
