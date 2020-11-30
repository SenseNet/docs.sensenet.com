```javascript
store.dispatch(
  Actions.loadContent(
    "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    {
      expand: ["Locked", "CheckedOutTo/Name"],
      select: ["CheckedOutTo"],
    }
  )
);
```
