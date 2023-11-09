---
title: BlobStorageOptions
metaTitle: "sensenet API - BlobStorageOptions"
metaDescription: "BlobStorageOptions"
---

## BlobStorageOptions

Provides configuration values needed by the blob storage.
 All properties have default values, no configuration is mandatory.

### Configuration example:
``` json
{
  "sensenet": {
    "BlobStorage": {
      "BinaryChunkSize": 0,
      "BinaryBufferSize": 0,
      "BinaryCacheSize": 0,
      "MinimumSizeForBlobProviderInBytes": 0,
      "MinimumSizeForBlobProviderKb": 0,
      "BlobDeletionPolicy": "_enum_value_of_SenseNet.Configuration.BlobDeletionPolicy_"
    }
  }
}
```
### Environment variables example:
```
sensenet__BlobStorage__BinaryChunkSize="_int_value_"
sensenet__BlobStorage__BinaryBufferSize="_int_value_"
sensenet__BlobStorage__BinaryCacheSize="_int_value_"
sensenet__BlobStorage__MinimumSizeForBlobProviderInBytes="_int_value_"
sensenet__BlobStorage__MinimumSizeForBlobProviderKb="_int_value_"
sensenet__BlobStorage__BlobDeletionPolicy="_BlobDeletionPolicy_value_"
```
### Properties:
- **BinaryChunkSize** (`int`): Size of chunks (in bytes) that are sent to the server by the upload control. It is also taken into
 account when computing the size of inner buffers and caches.
- **BinaryBufferSize** (`int`): Size (in bytes) of the binary buffer used by internal streams when serving files from
 the database or the file system. The purpose of this cache is to serve requests faster
 and to reduce the number of SQL connections.
- **BinaryCacheSize** (`int`): Maximum file size (in bytes) that should be cached after loading a binary value. Smaller files
 will by placed into the cache, larger files will always be served from the blob storage directly.
- **MinimumSizeForBlobProviderInBytes** (`int`): Minimum size limit (in bytes) for binary data to be stored in the external blob storage.
 Files under this size will be stored in the database. If you set this to 0, all files
 will go to the external storage. In case of a huge value everything will remain in the db.
- **MinimumSizeForBlobProviderKb** (`int`): Minimum size limit (in kilobytes) for binary data to be stored in the external blob storage.
 Files under this size will be stored in the database. If you set this to 0, all files
 will go to the external storage. In case of a huge value everything will remain in the db.
- **BlobDeletionPolicy** (`BlobDeletionPolicy`): Gets or sets the blob deletion algorithm. The value can be "BackgroundDelayed", "BackgroundImmediately" or "Immediately"

