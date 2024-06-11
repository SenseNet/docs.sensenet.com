```csharp
var ctd = @"<?xml version='1.0' encoding='utf-8'?>
    <ContentType name=""MyContentType"" parentType=""GenericContent""
            handler=""SenseNet.ContentRepository.GenericContent""
            xmlns=""http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition"">
        <DisplayName>MyContentType</DisplayName>
        <Fields></Fields>
    </ContentType>
    ";
await using var stream = new MemoryStream(Encoding.UTF8.GetBytes(ctd));
await repository.UploadAsync(
    request: new UploadRequest
    {
        ParentPath = "/Root/System/Schema/ContentTypes/GenericContent",
        ContentName = "MyContentType",
        ContentType = "ContentType"
    },
    stream,
    cancel);
```
