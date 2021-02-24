---
title: "Webhooks"
metaTitle: "sensenet - Webhooks"
metaDescription: "sensenet Webhooks"
---
Handling events is one of the most important things we need when building an enterprise application.

In the old days backend developers would handle this issue by developing a module that runs inside the application when a user uploads a file - but since everything has moved to the cloud, this is not an option anymore.

In a service-oriented environment we can do the same with webhooks. They are basically HTTP requests made by the service and a corresponding handler method on the other side. Developers can then do what their project requires in case of these events - for example archiving a document, starting a build in the cloud or sending a notification email.

In sensenet, webhooks are an easy way to integrate our service with another. They are usually triggered by content changes. You can register a webhook for the usual content operations - for example when somebody uploads a file or changes an article.

When such an event occurs, we call the URL you provided. It can be a custom application in your datacenter, a serverless function in the cloud or a 3rd party service like Slack or Netlify. We make these HTTP requests based on the filter you define: for example you are interested only in new file uploads in a certain library but not article changes. You also have some control over the request itself - for example you can add custom headers or URL parameters required by your webhook handler.

In the future we plan to extend the list of events with other options like permission changes, login events, and so on.
