```
url: "/OData.svc/Root/Content('IT')/Share",
type: 'POST',
data: "models=[" + JSON.stringify({
    token: 'alba@sensenet.com',
    level: 'Open',
    mode: 'Public',
    sendNotification: true
  }) + "]",
```
