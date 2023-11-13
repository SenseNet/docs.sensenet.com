---
title: AsposePreviewGeneratorOptions
metaTitle: "sensenet API - AsposePreviewGeneratorOptions"
metaDescription: "AsposePreviewGeneratorOptions"
---

## AsposePreviewGeneratorOptions

#endregion

### Configuration example:
``` json
{
  "sensenet": {
    "AsposePreviewGenerator": {
      "Upload": {
        "ChunkSize": 0
      },
      "ImageGeneration": {
        "PreviewResolution": 0,
        "CheckLicense": true
      },
      "Environment": {
        "IsDevelopment": true
      },
      "Applications": [
        {}
      ]
    }
  }
}
```
### Environment variables example:
```
sensenet__AsposePreviewGenerator__Upload="_UploadConfig_value_"
sensenet__AsposePreviewGenerator__ImageGeneration="_ImageGenerationConfig_value_"
sensenet__AsposePreviewGenerator__Environment="_EnvironmentConfig_value_"
sensenet__AsposePreviewGenerator__Applications="_RepositoryOptions[]_value_"
```
### Properties:
- **Upload** (`UploadConfig`): 
- **ImageGeneration** (`ImageGenerationConfig`): 
- **Environment** (`EnvironmentConfig`): 
- **Applications** (`RepositoryOptions[]`): 

