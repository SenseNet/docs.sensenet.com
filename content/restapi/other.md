---
title: Other
metaTitle: "sensenet API - Other"
metaDescription: "Other"
---

## GetVersionInfo
- Method: **GET** or optionally POST.

Provides version information about all components / packages / assemblies of the running sensenet system.
 

 For example:
 ``` 
 {
   "Components": [
     {
       "ComponentId": "SenseNet.Services",
       "Version": "7.7.13.4",
       "Description": "sensenet Services"
     }
   ],
   "Assemblies": {
     "SenseNet": [
       {
         "Name": "SenseNet.BlobStorage, Version=7.5.0.0, Culture=neutral, PublicKeyToken=null",
         "IsDynamic": false,
         "Version": "7.5.0.0 Debug"
       },
       {
         "Name": "SenseNet.Security, Version=4.1.0.0, Culture=neutral, PublicKeyToken=null",
         "IsDynamic": false,
         "Version": "4.1.0.0 Release"
       },
       ...
     ],
     "Plugins": [ ... ],
     "GAC": [...],
     "Other": [...],
     "Dynamic": [...]
   },
   "InstalledPackages": [
     {
       "Id": 1,
       "Description": "sensenet Services",
       "ComponentId": "SenseNet.Services",
       "PackageType": 2,
       "ReleaseDate": "2020-08-30T08:38:38.0209081Z",
       "ExecutionDate": "2020-08-30T08:38:38.021009Z",
       "ExecutionResult": 0,
       "ComponentVersion": "7.7.13.4",
       "ExecutionError": null,
       "Manifest": null
     }
   ],
   "DatabaseAvailable": true
 }
```

### Request example:

```
GET /odata.svc/('Root')/GetVersionInfo
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
A _RepositoryVersionInfo_ instance containing package, component, assembly
 versions. (Type: RepositoryVersionInfo).

### Requirements:
- **AllowedRoles**: Administrators, Developers

