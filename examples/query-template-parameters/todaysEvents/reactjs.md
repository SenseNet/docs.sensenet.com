```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `TypeIs:CalendarEvent AND StartDate:@@Today@@`
  }
});
```
