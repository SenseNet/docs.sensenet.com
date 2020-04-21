---
title: "Simple approval"
metaTitle: "sensenet - Simple approval"
metaDescription: "sensenet Simple approval"
---

Simple approval adds an extra step to the default publishing process. When approval is turned on, contents needs to be sent for approval and can only be published when the review is finished and modification requests has been adapted (if applicable).

# Indicating roles and permissions

It is important to differentiate roles like author and editor. Approval feature works best if permissions are defined correctly and the whole process is tailor made to the business logic.

# Steps
[possible illustration of the steps could be something like that](https://images.ctfassets.net/fo9twyrwpveg/1EQtohKijakksU2KwS262w/69c5b114908eba58787c29ce1d1ad737/Step_11.png?fm=jpg&fl=progressive&q=90&w=2156)

First, a draft is born by the author which will be then sent for review - the system creates a version labeled ‘Pending for approval’. This version is visible only for administrators and users who have permission to Approve or Reject it.

The editor (or approver) can approve the document as it is, or propose changes. In this case the draft is modified and resubmitted by the author.

When everyone is happy with the result, the document gets approved and published - If the Content is approved, its version number is bumped according to the versioning mode, and gets the A (“approved”) flag.

# Automatic notifications on state change

It is possible to enable notifications for every state change of a specific document. When this feature is switched on, the system notifies all subscribed user via email when the content or any of its metadata has been changed. Such changes could be the update, a new [version](/concepts/versioning), approval and many more.
# Public visibility

Visitors in general are only allowed to view the last public versions of a content. This is controlled by the Open minor permissions ([learn more about versioning](/concepts/versioning)): a user who does not possess the open minor permission for a content will only see the last public version of a content, and will never see any changes that correspond to a draft version or that are not yet approved. The other important thing here to bear in mind is that if a document gets rejected it does not mean that the document is not visible for the public. It only means that the last version that was rejected will not be visible to the public.

# Usage (use cases)

Could be useful when people with different roles (author, editor) are working on the same document. The feature makes change requests and approval as easy as possible, grants transparency and serve as an extra line of defense for keeping mission critical content error free.
