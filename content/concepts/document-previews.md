---
title: "Document Previews"
metaTitle: "sensenet - Document Previews"
metaDescription: "sensenet Document Previews"
---
Sensenet comes with built-in document management features like [Office online editing](/concepts/office-online-editing/), which enables the users to open Office documents from the repository and edit them directly in the browser. However, in many cases it is also desired to preview a content without downloading it or without using a third party software. As such, sensenet has an integrated document preview generator that creates images of documents which can be viewed in any browser.

# Under the hood
When the user uploads or modifies a document, sensenet generates preview images and stores them in the repository.

The preview generator implementation uses a provider approach, which means you can easily use a different preview generation technology than the one that comes with sensenet. Also, this way the whole preview generation feature can be turned on and off just by a simple web.config setting.

## Task management server
Preview generation is completed on a standalone task management server, letting you execute background operations in a scalable way.

This server handles long-running tasks that would keep the web server busy and make the user wait for the response, or resource-consuming jobs that can potentially crash the executing process.

To generate previews in your on-premise solution, you need to configure the task management server in your environment.

## Licensing
To use the built-in generator to create preview images, an Aspose license is needed. SNaaS partners have no additional task as in this model every sensenet instance will be served by our task management servers (having all the neccessary licenses).
If you plan to have the on-premise sensenet solution, please visit [Aspose's site](https://www.aspose.com/) for more information about licensing. 

# Supported file formats
The supported document types depend on the implementation of the preview generator. The built-in generator ([Aspose](https://www.aspose.com/)) supports the following types:

- Microsoft Office Word documents (.doc, .docx)
- Microsoft Office Excel workbooks (.xls, .xlsx, .xlsm, .xltm, .xltx)
- Microsoft Office Powerpoint presentations (.ppt, .pptx, .pot, .potx, .ppsx, .pptx)
- Microsoft Office Project files (.mpp)
- Microsoft Visio files (.vsd, .vdx, .vss, .vst, .vsx, .vtx, .vdw)
- Open Document Format files (.ods, .odp, .odt)
- Adobe Portable Document Format (.pdf)
- Images (.gif, .jpg, .jpeg, .bmp, .png, .svg, .exif, .icon, .tiff, .tif)
- Email files (.msg) (from version 6.3.1 Patch 3)
- Other file formats (.xml, .txt, .rtf, .csv)

> In every case, a preview image is generated for every page/worksheet/image.

# Docviewer
Once we have the preview images generated, they also need to be displayed somehow. A lightweight but powerful document viewer with a set of built-in tools is ready for the task.

__Features (available through admin UI and API):__

- thumbnails
- comments
- download
- print
- share
- resizing (original, fit to width etc.)
- zoom
- rotate

__Additional features (available through API):__

- redaction
- annotation
- highlight
- shapes
- watermark
