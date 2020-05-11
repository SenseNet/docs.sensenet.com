---
title: Approval
metaTitle: "sensenet API - Approval"
metaDescription: "sensenet API - Approval"
---

sensenet also introduces a basic approval functionality. Regardless of the versioning mode in use, approval can be enabled to control changes.

# Enable simple approval

In sensenet, approval is disabled by default. It can be enabled for folders or content lists or even for individual contents by setting the value of the `Versioning Mode` and `Approval Mode` fields. (Subfolders inherit approval settings by default.)

<tab category="collaboration" article="approval" example="enableApproval" />

# Send a content for approve

If approval is required for a certain Content, after changes has been made to the document, the system creates a version labeled 'Pending for approval'. This version is visible only for administrators and users who have permission to **Approve** or **Reject** it. If the content is approved, its version number is bumped according to the versioning mode, and gets the A (approved) flag.

# Approve a content

Following example shows you how to approve a content:

<tab category="collaboration" article="approval" example="approve" />

# Reject a content

With the next snippet you are able to reject a content version adding a comment:

<tab category="collaboration" article="approval" example="reject" />
