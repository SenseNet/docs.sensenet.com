---
title: "Travis CI"
metaTitle: "sensenet Integrations - Travis CI webhook"
metaDescription: "sensenet Integrations - Trigger a Travis CI build based on the content event(s) of your choice"
---

With this template you can easily create webhooks that notify projects hosted on Travis CI about the chosen content related events (creation, change, approval, etc.), automatically triggering a build to deploy a new version of the app.

First get a Personal API Token (it can be found under your Travis CI [profile page](https://travis-ci.com/account/repositories))

![Travis CI Personal API Token](../img/travis-api-token.png)

On sensenet admin ui choose Travis CI template when you add a new webhook:

![Travis webhook template](../img/travis-webhook-template.png)

There are five required fields on the form to fill out: *Name*, *GitHub organization or user name*, *GitHub repository name*, *Branch* and *Personal API Token* (the one you can find at your Travis CI profile page). You can leave all other fields at default (you can change them at any time later) and thats it.

By default, this webhook will:

- Trigger a Travis CI build
- Triggered when something is happened with a **File** under **/Root**
- Triggered on all available events (Create, Modify, Delete, Checkout, Draft, Approve, Pending, Reject)

![Travis build hook](../img/new-travis-webhook.png)

<note severity="info">For additional setting options check <a href="/guides/webhooks">webhook guide docs</a>.</note>

It is possible to trigger webhooks manually to try out if all the settings fit your needs. Select the webhook in the webhooks list and open command palette search with CTRL+SHIFT+P. Search for the *FireWebHook* and choose an action from the list based on what parameters you want to test with (path or id). Add the required parameters and execute the action.


