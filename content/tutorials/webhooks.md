---
title: "Working with WebHooks"
metaTitle: "sensenet - WebHooks"
metaDescription: "sensenet - WebHooks"
---

To learn the basic concepts of WebHooks in sensenet, please [visit this article](/concepts/webhooks). In this article you'll learn how can you subscribe to WebHooks and how can you handle the requests sensenet makes.

# Subscribing to WebHooks
To define a WebHook subscription, go to the Settings section in admin UI. Creating a new subscription is as easy as providing the target service to call and defining the range of content changes and types that interests you.

## HTTP method of the request
sensenet offers you to choose the HTTP method to use when calling the target service. This may be useful when you have a predefined 3rd party service that expects a specific method, other than the default **POST**.

## Target URL
This is the URL of the service to call when an event triggers the WebHook. The service can be developed in any language on any platform - the only requirement is for it to understand an HTTP request sent by sensenet containing the payload described below. This target service may be a serverless cloud function, an ASP.NET MVC controller method or a Node.js action - basically anything.

## Event trigger
Content changes will trigger a WebHook event. First you need to specify the **container** where you want to monitor content items. This is usually one of your workspaces, libraries - or the `/Root/Content` root.

![WebHook subscription](../concepts/img/webhook-subscription.png)

You may also choose one or more specific **content types** and **event** triggers. Specific content type means that the event is relevant only if the content in question has the same type as the chosen one, so *content type inheritance* is not taken into account: if you are interested in content of a special file type (e.g. Contract), you have to choose Contract from the list, choosing File is not enough.

## WebHook payload
This is the data we send when an event is triggered. Currently this is a JSON object in the following form:

```json
{
    "nodeId": 123,
    "path": "/Root/Content/MyContent",
    "name": "MyContent",
    "displayName": "My Content",
    "eventName": "Modify",
    "subscriptionId": 456,
    "sentTime": "2021-02-18 06:55:00"
}
```

The content type of the request is `application/json`.

When the target service processes these values, it can make callbacks to the sensenet repository service for additional information about the content or call 3rd party services for initiating a custom workflow or sending a notification to users.

## Request headers
You have the option to add custom HTTP headers to the request. This may be useful in scenarios when the target service expects a certain header or you want an **authenticated** request. In that case you can simply add a header here containing an auth token in a format accepted by the target service.

## Disabling a WebHook subscription
It is possible to temporarily suspend a subscription by switching it off in the list. This is useful when you want to preserve the assembled subscription but do not want to receive messages for the time being.