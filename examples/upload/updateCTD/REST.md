```
POST https://localhost:44362/OData.svc/Root/System/Schema/ContentTypes('GenericContent')/Upload

-----------------------------8dc86cabae328e4
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=FileName

MyContentType
-----------------------------8dc86cabae328e4
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=ContentType

ContentType
-----------------------------8dc86cabae328e4
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=PropertyName

Binary
-----------------------------8dc86cabae328e4
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=UseChunk

False
-----------------------------8dc86cabae328e4
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=Overwrite

True
-----------------------------8dc86cabae328e4
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=FileLength

476
-----------------------------8dc86cabae328e4
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=ChunkToken

0**True*True
-----------------------------8dc86cabae328e4
Content-Disposition: form-data; name="files[]"; filename=MyContentType; filename*=utf-8''MyContentType

<?xml version='1.0' encoding='utf-8'?>
<ContentType name="MyContentType" parentType="GenericContent"
      handler="SenseNet.ContentRepository.GenericContent"
      xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>MyContentType</DisplayName>
  <Fields></Fields>
</ContentType>

-----------------------------8dc86cabae328e4--
```
