```
url: "/OData.svc/Root/Content/IT/Document_Library/Chicago/MoveBatch",
type: 'POST',
data: "models=[" + JSON.stringify({
    'targetPath': '/Root/Content/IT/Document_Library/Munich',
    'paths': [
      '/Root/Content/IT/Document_Library/Chicago/100Pages.pdf',
      '/Root/Content/IT/Document_Library/Chicago/400Pages.pdf'
    ]
  }) + "]",
```
