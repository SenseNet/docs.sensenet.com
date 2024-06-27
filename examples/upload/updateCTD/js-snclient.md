```javascript
const ctd = `<?xml version='1.0' encoding='utf-8'?>
  <ContentType name="MyContentType" parentType="GenericContent"
          handler="SenseNet.ContentRepository.GenericContent"
          xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
      <DisplayName>MyContentType</DisplayName>
      <Fields></Fields>
  </ContentType>
  `;

const result = await repository.upload.textAsFile({
  parentPath: "/Root/System/Schema/ContentTypes/GenericContent",
  contentTypeName:"ContentType",
  text: ctd,
  fileName: "MyContentType.xml",
  binaryPropertyName: "Binary",
  overwrite: true,
});
```
