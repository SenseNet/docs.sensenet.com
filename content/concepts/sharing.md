---
title: "Sharing"
metaTitle: "sensenet - Sharing"
metaDescription: "sensenet Sharing"
---

Sharing in sensenet (like many other features of the content repository) is built around the concept of content. As sensenet content items are stored in a huge tree, it is easy to share not only a single content (like a document) but a whole folder or a workspace with other users.

# Who do I share with?

It is not necessary to know much about the user you want to share a content with if they are already registered in the system: an email address or a username is enough.

In case of Public sharing (see below) it is not even necessary to provide an email: it is enough to simply generate a public sharing link that you can send or post anywhere.

# Sharing levels

When you share something, you will be presented with an option for what do you want your target users to do with the content. For example a read-only access is represented by the `Open` sharing level. If we want to let users modify the content, that requires the `Edit` level.

<note title="Do you need more sharing levels?">
Drop us an <a href="mailto:snteam@sensenet.com">email</a> and lets talk about it!
</note>

# Sharing modes

There are three sharing modes that determine who will get permissions to access the content.

### Private

The system tries to find a known user for the email you provided. If it finds them, the user will get explicit permissions to the content - and nobody else. If the user forwards the email with the sharing link in it to others, it will be useless for them, unless they log in to the system with the target user’s credentials.

### Authenticated

Every logged in user will have access to the content - but not visitors (technically the Everyone group will get permissions to the content). This makes the link received in the notification email shareable, so it can be forwarded to co-workers for example.

### Public

Anybody with the link will be able to access the content, without even signing in.

<note>
The advantage of <b>private</b> and <b>authenticated</b> sharing (over <b>public</b> sharing) is that it lets users not just access the content through the sharing link: they can also query for content shared with them. This lets them access shared folders and documents by browsing, not just visiting them directly.
</note>

It is perfectly fine if you want to have multiple sharing links, let them be **private** or **public**. This lets you manage accesses more easily by removing sharing access for some users and keep it for others.

# Removing sharing access

By deleting sharing entries using the Sharing API, the previously sent sharing links will no longer work and the users will not have access to the previously shared content.

# Notifications

When you share something with an email address or a known user, the system send a notification email. It will contain a sharing link that the user will be able to follow to access the content. About forwarding this email to others please see the *Sharing modes* section above.

<note>
By default the notification feature for sharing is switched on, but is possible to switch it off globally or for a subtree or per sharing API calls (see <a href="/api-docs/sharing/#Notifications">here</a>). Notification emails can also be customized at these levels. See the <i>Configuration</i> section below for details.
</note>

# Configuration

You can switch ON or OFF notifications and also customize the notification emails using the Sharing settings which can be found at `/Root/System/Settings/Sharing.settings` or in the `Setup` menu on the admin-ui.

Having different mail subjects and bodies per subtree is possible as well, because the keys themselves (see below) are coming from settings.

```json
{
   "NotificationEnabled": false,
   "NotificationSender": "info@example.com",
   "NotificationMailSubjectKey": "NotificationMailSubject",
   "NotificationMailBodyKey": "NotificationMailBody"
}
```

# How do I share technically?

If you are interested in how to share and manage sharing related content through REST API check the [API docs](/api-docs/sharing). Every above mentioned feature and functionality is available through the API.

# Sharing FAQ

What happens when something that is related to a shared content or a user changes?

### What happens when a user is deleted?

All sharing information and permissions related to them will be removed.

### What happens when new user is created or an existing user gets an email address?

If there are private sharing records with this email address and no identity, we will give explicit permissions for the new user on that content. This is to make sure that if a user registers to access a content that was shared with them privately, they get a seamless user experience.

### Does a content remain shared after it was moved to the Trash?

This is a special case when a content is not yet physically removed from the system, only moved to the Trash. For existing users this won’t change much, they will still be able to access the content the same way as any other content.

For public sharing this is different: visitors will no longer access those content items - unless the documents are restored from the Trash. In that case the old public sharing links will still be working.
