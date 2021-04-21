const sideMenuConfig = {
  apiDocs: {
    "forcedNavOrder": [
      "/api-docs/basic-concepts",
      "/api-docs/querying",
      "/api-docs/content-management",
      "/api-docs/collaboration",
      "/api-docs/users-and-groups",
      "/api-docs/permissions",
      "/api-docs/sharing",
      "/api-docs/preview"
    ],
    "collapsedNav": [
      "/api-docs/querying",
      "/api-docs/content-management",
      "/api-docs/collaboration",
      "/api-docs/users-and-groups",
      "/api-docs/permissions",
      "/api-docs/sharing",
      "/api-docs/preview"
    ],
  },
  concepts: {
    "forcedNavOrder": [
      "/concepts/introduction",
      "/concepts/basics",
      "/concepts/content-management",
      "/concepts/fields",
      "/concepts/content-types",
      "/concepts/collaboration",
      "/concepts/user-and-permission-management",
      "/concepts/client-side-forms",
      "/concepts/webhooks",
      "/concepts/logging",
      "/concepts/document-previews",
    ],
    "collapsedNav": [
      "/concepts/introduction",
      "/concepts/basics",
      "/concepts/content-management",
      "/concepts/fields",
      "/concepts/content-types",
      "/concepts/collaboration",
      "/concepts/user-and-permission-management",
      "/concepts/fields",
    ],
  },
  tutorials: {
    "forcedNavOrder": [
      "/tutorials/getting-started",
      "/tutorials/authentication",
      "/tutorials/content",
      "/tutorials/content-types",
      "/tutorials/webhooks"
    ],
    "collapsedNav": [
      "/tutorials/authentication",
      "/tutorials/content",
      "/tutorials/content-types",
    ],
  },
  guides: {
    "forcedNavOrder": [
      "/guides/getting-started",
      "/guides/search",
      "/guides/content-management",
      "/guides/users-and-groups",
      "/guides/roles-and-permissions",
      "/guides/working-with-content-types",
      "/guides/localization",
      "/guides/setup",
      "/guides/api-and-security",
      "/guides/customization",
    ],
    "collapsedNav": [
      "/guides/getting-started",
      "/guides/search",
      "/guides/content-management",
      "/guides/users-and-groups",
      "/guides/roles-and-permissions",
      "/guides/working-with-content-types",
      "/guides/localization",
      "/guides/setup",
      "/guides/api-and-security",
      "/guides/customization",
    ],
  },
  integrations: {},
  faq: {
    "forcedNavOrder": [
      "/faq/content-types",
      "/faq/versioning",
      "/faq/permissions"
    ],
    "collapsedNav": [
      "/faq/content-types",
      "/faq/versioning",
      "/faq/permissions"
    ],
  },
  usecases: {
    "forcedNavOrder": [
      "/usecases/websites",
      "/usecases/mobile-apps",
    ],
    "collapsedNav": [
      "/usecases/websites",
      "/usecases/mobile-apps",
    ],
  },
  restapi: {
    "forcedNavOrder": [
      "/restapi/index",
      "/restapi/cheatsheet",
      "/restapi/ad2portalsyncfinalizer",
      "/restapi/getclientrequestparameters",
      "/restapi/validatecredentials",
      "/restapi/finalizeblobupload",
      "/restapi/finalizecontent",
      "/restapi/getbinarytoken",
      "/restapi/startblobupload",
      "/restapi/startblobuploadtoparent",
      "/restapi/upload",
      "/restapi/approve",
      "/restapi/checkin",
      "/restapi/checkout",
      "/restapi/forceundocheckout",
      "/restapi/publish",
      "/restapi/reject",
      "/restapi/restoreversion",
      "/restapi/undocheckout",
      "/restapi/getmetadata",
      "/restapi/getnamefromdisplayname",
      "/restapi/getschema",
      "/restapi/copybatch",
      "/restapi/delete",
      "/restapi/deletebatch",
      "/restapi/movebatch",
      "/restapi/restore",
      "/restapi/addallowedchildtypes",
      "/restapi/checkallowedchildtypesoffolders",
      "/restapi/getallcontenttypes",
      "/restapi/getallowedchildtypesfromctd",
      "/restapi/removeallowedchildtypes",
      "/restapi/backupindex",
      "/restapi/cancelindexbackup",
      "/restapi/checkindexintegrity",
      "/restapi/getrecentindexingactivities",
      "/restapi/queryindexbackup",
      "/restapi/rebuildindex",
      "/restapi/rebuildindexsubtree",
      "/restapi/refreshindexsubtree",
      "/restapi/resetrecentindexingactivities",
      "/restapi/getwopidata",
      "/restapi/wopiopenedit",
      "/restapi/wopiopenview",
      "/restapi/getversioninfo",
      "/restapi/getacl",
      "/restapi/getallowedusers",
      "/restapi/getchildrenpermissioninfo",
      "/restapi/getpermissioninfo",
      "/restapi/getpermissionoverview",
      "/restapi/getpermissions",
      "/restapi/getrelatedidentities",
      "/restapi/getrelatedidentitiesbypermissions",
      "/restapi/getrelateditems",
      "/restapi/getrelateditemsonelevel",
      "/restapi/getrelatedpermissions",
      "/restapi/haspermission",
      "/restapi/setpermissions",
      "/restapi/setpermissions2",
      "/restapi/takelockover",
      "/restapi/takeownership",
      "/restapi/checkpreviews",
      "/restapi/documentpreviewfinalizer",
      "/restapi/getexistingpreviewimages",
      "/restapi/getpagecount",
      "/restapi/getpreviewimages",
      "/restapi/getpreviewsfolder",
      "/restapi/previewavailable",
      "/restapi/regeneratepreviews",
      "/restapi/setinitialpreviewproperties",
      "/restapi/setpagecount",
      "/restapi/setpreviewstatus",
      "/restapi/getqueries",
      "/restapi/savequery",
      "/restapi/checksecurityconsistency",
      "/restapi/copyexplicitentriesofeveryonetovisitor",
      "/restapi/decrypt",
      "/restapi/encrypt",
      "/restapi/getrecentsecurityactivities",
      "/restapi/missingexplicitentriesofvisitorcomparedtoeveryone",
      "/restapi/protectedpaths",
      "/restapi/getsharing",
      "/restapi/removesharing",
      "/restapi/share",
      "/restapi/ancestors",
      "/restapi/addmembers",
      "/restapi/createlocaluser",
      "/restapi/createtestfiles",
      "/restapi/createuserbyprovider",
      "/restapi/getparentgroups",
      "/restapi/removemembers"
    ],
    "collapsedNav": [
      "/restapi/index",
      "/restapi/cheatsheet",
      "/restapi/ad2portalsyncfinalizer",
      "/restapi/getclientrequestparameters",
      "/restapi/validatecredentials",
      "/restapi/finalizeblobupload",
      "/restapi/finalizecontent",
      "/restapi/getbinarytoken",
      "/restapi/startblobupload",
      "/restapi/startblobuploadtoparent",
      "/restapi/upload",
      "/restapi/approve",
      "/restapi/checkin",
      "/restapi/checkout",
      "/restapi/forceundocheckout",
      "/restapi/publish",
      "/restapi/reject",
      "/restapi/restoreversion",
      "/restapi/undocheckout",
      "/restapi/getmetadata",
      "/restapi/getnamefromdisplayname",
      "/restapi/getschema",
      "/restapi/copybatch",
      "/restapi/delete",
      "/restapi/deletebatch",
      "/restapi/movebatch",
      "/restapi/restore",
      "/restapi/addallowedchildtypes",
      "/restapi/checkallowedchildtypesoffolders",
      "/restapi/getallcontenttypes",
      "/restapi/getallowedchildtypesfromctd",
      "/restapi/removeallowedchildtypes",
      "/restapi/backupindex",
      "/restapi/cancelindexbackup",
      "/restapi/checkindexintegrity",
      "/restapi/getrecentindexingactivities",
      "/restapi/queryindexbackup",
      "/restapi/rebuildindex",
      "/restapi/rebuildindexsubtree",
      "/restapi/refreshindexsubtree",
      "/restapi/resetrecentindexingactivities",
      "/restapi/getwopidata",
      "/restapi/wopiopenedit",
      "/restapi/wopiopenview",
      "/restapi/getversioninfo",
      "/restapi/getacl",
      "/restapi/getallowedusers",
      "/restapi/getchildrenpermissioninfo",
      "/restapi/getpermissioninfo",
      "/restapi/getpermissionoverview",
      "/restapi/getpermissions",
      "/restapi/getrelatedidentities",
      "/restapi/getrelatedidentitiesbypermissions",
      "/restapi/getrelateditems",
      "/restapi/getrelateditemsonelevel",
      "/restapi/getrelatedpermissions",
      "/restapi/haspermission",
      "/restapi/setpermissions",
      "/restapi/setpermissions2",
      "/restapi/takelockover",
      "/restapi/takeownership",
      "/restapi/checkpreviews",
      "/restapi/documentpreviewfinalizer",
      "/restapi/getexistingpreviewimages",
      "/restapi/getpagecount",
      "/restapi/getpreviewimages",
      "/restapi/getpreviewsfolder",
      "/restapi/previewavailable",
      "/restapi/regeneratepreviews",
      "/restapi/setinitialpreviewproperties",
      "/restapi/setpagecount",
      "/restapi/setpreviewstatus",
      "/restapi/getqueries",
      "/restapi/savequery",
      "/restapi/checksecurityconsistency",
      "/restapi/copyexplicitentriesofeveryonetovisitor",
      "/restapi/decrypt",
      "/restapi/encrypt",
      "/restapi/getrecentsecurityactivities",
      "/restapi/missingexplicitentriesofvisitorcomparedtoeveryone",
      "/restapi/protectedpaths",
      "/restapi/getsharing",
      "/restapi/removesharing",
      "/restapi/share",
      "/restapi/ancestors",
      "/restapi/addmembers",
      "/restapi/createlocaluser",
      "/restapi/createtestfiles",
      "/restapi/createuserbyprovider",
      "/restapi/getparentgroups",
      "/restapi/removemembers"
    ],
  }
}

module.exports = sideMenuConfig;
