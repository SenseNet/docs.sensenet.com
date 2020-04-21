---
title: Upload
metaTitle: "sensenet API - Upload files"
metaDescription: "How to upload files"
---

You can upload a stream or text to a content binary field (e.g. a file) with the action named `Upload`. An upload request is actually two requests, one for creating a new content in the repository and one for fill its Binary field with the stream or text. The upload requests should have a bunch of required and optional parameters in their body, let's see them one by one.

| name |||
|-|-|-|
| create | URL parameter, required in the first request | this parameter should be added to the initial upload request |
| ContentType | string, optional | specific content type name for the uploaded content. If not provided, the system will try to determine it from the current environment: the upload content types configured in the web.config and the allowed content types in the particular folder. In most cases, this will be File. |
| FileName | string, required | name of the uploaded file. |
| Overwrite| boolean, optional, default value is `True` | determines whether the upload action should overwrite a content if it already exist with the same name. If false, a new file will be created with a similar name containing an incremental number (e.g. sample(2).docx). |
| UseChunk | boolean, optional, used in the first request, default is `False` | determines whether the system should start a chunk upload process instead of saving the file in one round. Usually this is determined by the size of the file.|
| PropertyName | string, optional, default value is 'Binary' | appoints the binary field of the content where the data should be saved. |
| ChunkToken | string, required only in the second request | the response of the first request returns this token. It must be posted in all of the subsequent requests without modification. It is used for executing the chunk upload operation. |
| FileText | string, optional | in case you do not have the file as a real file in the file system but a text in the browser, you can provide the raw text in this parameter.

# Initial request

The first request is a create request that tells the system whether it should create a new file or use an existing one, and whether it should start a chunk upload process or not. The latter means if you want to upload the binary of a file in more parts - usually if the file is bigger than a configured value.

# Subsequent requests

The first request returns an upload token that contains essential information for the upload process. You have to pass this data to subsequent requests without modification. If you declared in the first request that this will be a chunk upload, you have to specify the offset (`Content-Range` header) and the actual binary chunk in subsequent requests - otherwise you'll post the whole file in one round.

# Content versioning

Depending on the versioning mode in the particular folder or list where you want to upload files and the actual state of existing files, the versioning behavior of the uploaded files can be different. The following sections describe whether new versions will be created or not for the uploaded files if they already exist. In case of new files there is not much to tell: the file will be created with the default version number determined by the versioning and approving settings (0.1 draft or 1.0 approved, etc.).

- No versioning : If the file already exists, it will be overwritten - except if it is stated otherwise using the `Overwrite` parameter of the first request.

- Major versioning: If the file already exists, a new version will be created with the next major number - or, if the `Overwrite` parameter was false, a completely new file with a similar name.

- Major and minor versioning: A new minor version will be created - again, you can modify this behavior using the `Overwrite` parameter.

<note>
If the existing content is checked out by the current user, that version will be overwritten by the uploaded file and you will have to check in the file manually to make it accessible for others. If the content is checked out by another user, the file will not be uploaded.
</note>

# Upload a file

The next example shows how to upload a file in two steps with two requests.
The first response will be `5062*3196*True` (or similar). This value must be passed to the second requests `ChunkToken`.

<tab category="content-management" article="upload" example="uploadFile" />

# Create a file with raw text

Following examples shows how to create a simple text file adding its raw text (this thing could be useful if you are working with text files' (e.g. .json, .txt, .md, .xml) content directly in the browser):

// TODO: ide berakni, hogy a ctd és localization és settings fájl változtatás most így müx, vagy esetleg példa

<tab category="content-management" article="upload" example="uploadRawText" />

# Update a CTD

<tab category="content-management" article="upload" example="updateCTD" />

# Update a Settings file

<tab category="content-management" article="upload" example="updateSettings" />

# Upload whole files instead of chunks

If the files are small, you may upload the whole file in one round instead of chunks. In the initial request you can set the UseChunk parameter to false and send the whole file in the next request. It is possible to avoid the initial request. In this case you have to send the whole file and the necessary parameters according to the second request specification (see the OData action article for more info). The chunk token in this case needs to be the following `0*0*False`.

Following example shows you how the whole request looks like in this case:

<tab category="content-management" article="upload" example="uploadFileNoChunks" />

# Upload a structure

<tab category="content-management" article="upload" example="uploadStructure" />

# Interrupted uploads

If the upload process was interrupted, the database may contain a partially uploaded file. If the file existed before the upload operation, you can simply revert to the previous version by choosing the Undo changes action. Partially uploaded new files can only be deleted. If you try to upload the file again, the upload process will be restarted and the whole file will be uploaded again from the beginning. It is only possible to continue a previously interrupted upload process if you have the **chunk token** received from the first request and know the exact position where the upload process stopped. sensenet offers a possibility to resume a previously interrupted upload process.

// TODO ->

<tab category="content-management" article="upload" example="uploadResume" />
