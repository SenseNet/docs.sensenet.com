---
title: "Webhooks"
metaTitle: "sensenet - Webhooks"
metaDescription: "sensenet Webhooks"
---
Handling events is one of the most important things we need when building an enterprise application.

In a service-oriented environment we can do this with webhooks. They are basically HTTP requests made by the service and a corresponding handler method on the other side. Developers can then do what their project requires in case of these events - for example archiving a document, starting a build in the cloud or sending a notification email.

In sensenet, webhooks (available from the next releases) are an easy way to integrate our service with another. They are usually triggered by content changes. You can register a webhook for the usual content operations - for example when somebody uploads a file or changes an article.

In the future we plan to extend the list of events with other options like permission changes, login events, and so on.

Please let us know which events would you like to have a webhook for!
