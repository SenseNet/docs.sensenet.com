Under construction
```
// initial request
url: "/OData.svc/Root/Content/IT('Document_Library')/Upload?create=1",
type: 'POST',
data: {
  "ContentType": "File",
  "FileName": "sampledata.xlsx",
  "Overwrite": true,
  "UseChunk": false,
  "PropertyName": "Binary"
},

// subsequent request
url: "/OData.svc/Root/Content/IT/('Document_Library')/Upload",
type: 'POST',
data: {
  "ContentType": "File",
  "FileName": "sampledata.xlsx",
  "Overwrite": true,
  "ChunkToken": "0*0*False",
  "PropertyName": "Binary"
},
```
