---
title: "Document Previews"
metaTitle: "sensenet - Document Previews"
metaDescription: "sensenet Document Previews"
---


# introduction

sensenet comes with built-in document management features like [Office online editing](/concepts/office-online-editing/) which enables the users to open Office documents from the repository and edit them directly in the browser. It is however in many cases desired to preview a content (other than Office docs) without downloading it or without using a third party software, therefore sensenet has an integrated document preview generator that creates images of documents in the background that can be viewed in any browser.

# under the hood

When the user uploads or modifies a document, sensenet generates preview images and persists them into the repository.

The preview generator implementation uses a provider approach, which means that you can easily use a different preview generation technology than the one that comes with sensenet. Also, this way the whole preview generation feature can be turned on and off just by a simple web.config setting.

__task management server__
Preview generation is completed on a standalone task management server letting you execute background operations in a scalable way.

This server handles long-running tasks that would keep the web server busy and make the user wait for the response, or resource-consuming jobs that are even able to crash the executing process.

In order to generate previews in your on-premise solution, you need to configure the task management server in your environment.

__licensing__
To use sensenet built-in generator to create preview images, an Aspose license is needed. SNaaS partners have no additional task since in this model every sensenet instance will be served by our task management servers (having all the neccessary licenses).
If you plan to have on-prem sensenet solution, please visit [Aspose's site](https://www.aspose.com/) for more information about licensing. 

# supported file formats

The supported document types depend on the preview generator implementation. The built-in generator ([Aspose](https://www.aspose.com/)) supports the following types:

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

> in every case a preview image is generated for every page/worksheet/image


# docviewer

Once we have the preview images generated, they also needs to displayed somehow. A lightweight but powerful document viewer is ready for the task with many builtin tools.

__features (available through admin ui and API)__

- thumbnails
- comments
- download
- print
- share
- resizing (original, fit to width etc.)
- zoom
- rotate

__additional features (available through API)__

- redaction
- annotation
- highlight
- shapes
- watermark
