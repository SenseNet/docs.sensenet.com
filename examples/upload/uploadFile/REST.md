```
POST https://example.com/OData.svc/Root/Content('Documents')/Upload

-----------------------------8dc86bc2e2dc8b5
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=FileName

MyFile.txt
-----------------------------8dc86bc2e2dc8b5
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=ContentType

File
-----------------------------8dc86bc2e2dc8b5
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=PropertyName

Binary
-----------------------------8dc86bc2e2dc8b5
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=UseChunk

False
-----------------------------8dc86bc2e2dc8b5
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=Overwrite

True
-----------------------------8dc86bc2e2dc8b5
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=FileLength

21
-----------------------------8dc86bc2e2dc8b5
Content-Type: text/plain; charset=utf-8
Content-Disposition: form-data; name=ChunkToken

0**True*True
-----------------------------8dc86bc2e2dc8b5
Content-Disposition: form-data; name="files[]"; filename=MyFile.txt; filename*=utf-8''MyFile.txt

Content of MyFile.txt
-----------------------------8dc86bc2e2dc8b5--
```
