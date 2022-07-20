---
title: Sharing
metaTitle: "sensenet API - Sharing"
metaDescription: "Sharing"
---

Sharing in sensenet (like many other features of the Content Repository) is built around the concept of content. As sensenet content items are stored in a huge tree, it is easy to share not only a single content (like a document) but a whole folder or a workspace with other users.

Content in sensenet could be shared in various different modes and levels both with registered or external users. For the sharing concepts please refer the [concept docs](/concepts/collaboration/06-sharing).

# Share with a user

Following example shows you how to share a content with a registered user:

<tab category="sharing" article="share" example="byUser" />

# Share content with external users via email

In the next example you will see how to share a content in a sensenet content repository with an external (non-registered) user using her/his email address:

<tab category="sharing" article="share" example="byEmail" />
&nbsp;
<note title="Sharing mode">Notice that we used here sharing mode 'Public' which is required when you want to share with external users. For further information about sharing modes see to the <a href="/concepts/collaboration/06-sharing">sharing concept docs</a></note>

# Sharing levels

Sharing levels can define what the user would do with the shared content (e.g. open, edit). The next example demonstrates using the sharing levels with setting the sharingLevel property:

<tab category="sharing" article="share" example="sharingLevels" />

# Remove sharing

Following example shows how to unshare content which actually means removing a sharing entry:

<tab category="sharing" article="share" example="removeSharing" />

# Getting sharing entries for a content

Sometimes you need to get sharing info by content (whom it is shared with, on which level is it shared, etc). With the following example you can achieve to get all the sharing entries on the given content:

<tab category="sharing" article="share" example="getSharingContent" />

# Content shared with a specific user

With sensenet content queries it is easy to search for shared contents related to a specific user. For example in the following code snippet you can see how to get the list of contents shared with the current user searching by the `SharedWith` field:

<tab category="sharing" article="share" example="sharedWith" />

# Content shared by a specific user

It is almost the same to get the list of content shared by a specific user. The only difference is that you have to query by the `SharedBy` field:

<tab category="sharing" article="share" example="sharedBy" />

# Notifications

sensenet's sharing feature allows you to send notifications to users when a content is shared with them. By default sending notifications is switched on but you can easily switch it off per share requests as you can see it in the following example:

<tab category="sharing" article="share" example="sharingNotification" />
