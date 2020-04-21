```javascript
const response = await fetch(
      "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?$top=3&$skip=4&$inlinecount=allpages",
      { credentials: "include" }
    );
```
