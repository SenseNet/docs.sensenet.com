```
url: "/OData.svc/Root/Content/IT('Document_Library')"
type: 'POST',
data: "models=[" + JSON.stringify({
  '__ContentType':'IntegerFieldSetting' ,
  Name: 'MyField1',
  'DisplayName': 'My Field 1',
  'Compulsory': true,
  'MinValue': 10
}) + "]",
```
