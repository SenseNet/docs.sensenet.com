```typescript
const config: RepositoryConfiguration = {
  repositoryUrl: 'https://dev.demo.sensenet.com', // The root URL for the sensenet repository 
  oDataToken: 'OData.svc', // The service token for the OData Endpoint (default:'odata.svc')
  defaultSelect: ['DisplayName', 'Icon'], // This parameter describes what fields should be included in the OData $select statements by default (default:['DisplayName', 'Description', 'Icon'])
  requiredSelect: ['Id', 'Type', 'Path', 'Name'], // This parameter describes what fields should always be included in the OData $select statements (default:['Id', 'Path', 'Name', 'Type'])
  defaultMetadata: 'no', // This field sets the default OData $metadata value (default:'no')
  defaultInlineCount: 'allpages', // This field sets the default OData inline count value (default:'allpages')
  defaultExpand: [], // This field describes what fields should be expanded on every OData request by default
  defaultTop: 1000, // This field sets up a default OData $top parameter (default:10000)
  chunkSize: 52428800, // Chunk size for chunked uploads, must be equal to BinaryChunkSize setting at the backend (default:10485760) // 10 mb
  token: <jwt bearer token> // Access token to authorize access to data
}
```
