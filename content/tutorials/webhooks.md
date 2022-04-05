---
title: "Webhooks"
metaTitle: "sensenet Tutorials - Webhooks"
metaDescription: "sensenet - Webhooks"
---

To learn the basic concepts of WebHooks in sensenet, please [visit this article](/concepts/webhooks). In this article you'll learn how can you subscribe to webhooks and how can you handle the requests sensenet makes.

# Subscribing to WebHooks
To define a webhook subscription, go to the *Settings* section in admin UI. Creating a new subscription is as easy as providing the target service to call and defining the range of content changes and types that interests you.

## HTTP method of the request
sensenet offers you to choose the HTTP method to use when calling the target service. This may be useful when you have a predefined 3rd party service that expects a specific method, other than the default **POST**.

## Target URL
This is the URL of the service to call when an event triggers the webhook. The service can be developed in any language on any platform - the only requirement is for it to understand an HTTP request sent by sensenet containing the payload described below. This target service may be a serverless cloud function, an ASP.NET MVC controller method or a Node.js action - basically anything.

## Event trigger
Content changes will trigger a WebHook event. First you need to specify the **container** where you want to monitor content items. This is usually one of your workspaces, libraries - or the `/Root/Content` root.

![webhook subscription](../concepts/img/webhook_edit.png)

You may also choose one or more specific **content types** and **event** triggers. Specific content type means that the event is relevant only if the content in question has the same type as the chosen one, so *content type inheritance* is not taken into account: if you are interested in content of a special file type (e.g. Contract), you have to choose Contract from the list, choosing File is not enough.

## Webhook payload
This is the data we send when an event is triggered. This is a JSON object that contains the following properties by default:

```json
{
    "nodeId": 123,
    "versionId": 123,
    "version": "1.0A",
    "previousVersion": null,
    "versionModificationDate": "2021-02-18 06:55:00",
    "modifiedBy": 456,
    "path": "/Root/Content/MyContent",
    "name": "MyContent",
    "displayName": "My Content",
    "eventName": "Modify",
    "subscriptionId": 456,
    "sentTime": "2021-02-18 06:55:00",
    "repository": "myrepository.sensenet.cloud"
}
```

The content type of the request is `application/json`.

When the target service processes these values, it can make callbacks to the sensenet repository service for additional information about the content or call 3rd party services for initiating a custom workflow or sending a notification to users.

### Custom webhook payload
It is possible to define additional properties to send with the payload. If you provide a custom JSON object when defining a webhook, the receiver will get a request containing those properties alongside the default ones. For example:

```json
{
    "projectId": "myproject",
    "department": "DEP123"
}
```

You can also use parameters to make the webhook payload dynamic.

```json
{ 
    "mydateproperty": "@@today@@",
    "currentuser": @@currentuser@@,
    "filepath": "@@content.Path@@",
	"complexprop": {
		"message": "@@content.DisplayName@@ was modified.",
		"index": @@content.Index@@
	}
}
```

The parameters above will be replaced by the appropriate runtime value (e.g. the current time or user id). You can use the following parameters - enclosed within double `@@` signs.

```text
currentuser
currentdate
currentday
today
currenttime
content
eventname
repository
```

The `content` parameter is very powerful: you can extend it with any field of the current content, even chaining properties is possible. For example `@@content.Manager.DisplayName@@` will insert the name of the manager of the current content - if it is relevant and available.

## Request headers
You have the option to add custom HTTP headers to the request. This may be useful in scenarios when the target service expects a certain header or you want an **authenticated** request. In that case you can simply add a header here containing an auth token in a format accepted by the target service.

## Disabling a WebHook subscription
It is possible to temporarily suspend a subscription by switching it off in the list. This is useful when you want to preserve the assembled subscription but do not want to receive messages for the time being.
