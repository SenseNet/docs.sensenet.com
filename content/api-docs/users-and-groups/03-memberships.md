---
title: Group Membership
metaTitle: "sensenet API - Group Membership"
metaDescription: "Group Membership"
---

# Load members of a group

`Members` is actually a reference field on every Group content allowed to contain multiple references, so the users and groups can be added as members just like another referred content with their ids. Using the following code snippet you can expand the content of the `Members` field of a group and get the members' usernames.

<tab category="users-and-groups" article="memberships" example="loadMembers" />

# Add members to a group

Users with appropriate permissions allowed can add new members to a group. The list of new members can be provided using the `contentIds` parameter (list of user or group ids). In the following example you can see how you can add users *businesscat* and *editormanatee* as members of the public developers group:

<tab category="users-and-groups" article="memberships" example="addMember" />

# Remove members from a group

Users with the appropriate permissions allowed are also able to remove members from a group using. The list of members to be deleted should be provided in the `contentIds` parameter as list of user or group ids.

<tab category="users-and-groups" article="memberships" example="addMember" />
