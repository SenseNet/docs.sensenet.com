---
title: "OData REST API References"
metaTitle: "sensenet - OData REST API References"
metaDescription: "sensenet - OData REST API References"
---

Path: D:\dev\github, operations: 214
## .NET Core Operations (112)
| Operation | Type | File | Doc | Directory |
| --------- | ---- | ---- | --- | ---- |
| [RebuildIndex](#RebuildIndex) | Action | Content.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [RebuildIndexSubtree](#RebuildIndexSubtree) | Action | Content.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [RefreshIndexSubtree](#RefreshIndexSubtree) | Action | Content.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [GetNameFromDisplayName](#GetNameFromDisplayName) | Function | ContentNamingProvider.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [Approve](#Approve) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [CheckIn](#CheckIn) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [CheckOut](#CheckOut) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [ForceUndoCheckOut](#ForceUndoCheckOut) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [Publish](#Publish) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [Reject](#Reject) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [RestoreVersion](#RestoreVersion) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [UndoCheckOut](#UndoCheckOut) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [AddAllowedChildTypes](#AddAllowedChildTypes) | Action | GenericContent.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [RemoveAllowedChildTypes](#RemoveAllowedChildTypes) | Action | GenericContent.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [AddMembers](#AddMembers) | Action | Group.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [RemoveMembers](#RemoveMembers) | Action | Group.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [CheckPreviews](#CheckPreviews) | Action | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [DocumentPreviewFinalizer](#DocumentPreviewFinalizer) | Action | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [GetExistingPreviewImages](#GetExistingPreviewImages) | Function | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [GetPageCount](#GetPageCount) | Action | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [GetPreviewImages](#GetPreviewImages) | Function | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [GetPreviewsFolder](#GetPreviewsFolder) | Action | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [PreviewAvailable](#PreviewAvailable) | Function | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [RegeneratePreviews](#RegeneratePreviews) | Action | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [SetInitialPreviewProperties](#SetInitialPreviewProperties) | Action | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [SetPageCount](#SetPageCount) | Action | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [SetPreviewStatus](#SetPreviewStatus) | Action | DocumentPreviewProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Preview |
| [GetVersionInfo](#GetVersionInfo) | Function | Repository.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [Ad2PortalSyncFinalizer](#Ad2PortalSyncFinalizer) | Action | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [Ancestors](#Ancestors) | Function | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [BackupIndex](#BackupIndex) | Action | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [CancelIndexBackup](#CancelIndexBackup) | Action | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [CheckAllowedChildTypesOfFolders](#CheckAllowedChildTypesOfFolders) | Function | RepositoryTools.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [CheckIndexIntegrity](#CheckIndexIntegrity) | Function | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [CheckSecurityConsistency](#CheckSecurityConsistency) | Function | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [CopyExplicitEntriesOfEveryoneToVisitor](#CopyExplicitEntriesOfEveryoneToVisitor) | Action | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [GetAllContentTypes](#GetAllContentTypes) | Function | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [GetAllowedChildTypesFromCTD](#GetAllowedChildTypesFromCTD) | Function | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [GetRecentIndexingActivities](#GetRecentIndexingActivities) | Function | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [GetRecentSecurityActivities](#GetRecentSecurityActivities) | Function | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [MissingExplicitEntriesOfVisitorComparedToEveryone](#MissingExplicitEntriesOfVisitorComparedToEveryone) | Function | RepositoryTools.cs | ok | D:\dev\github\sensenet\src\ContentRepository |
| [QueryIndexBackup](#QueryIndexBackup) | Function | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [ResetRecentIndexingActivities](#ResetRecentIndexingActivities) | Action | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [TakeLockOver](#TakeLockOver) | Action | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [TakeOwnership](#TakeOwnership) | Action | RepositoryTools.cs |  | D:\dev\github\sensenet\src\ContentRepository |
| [Decrypt](#Decrypt) | Action | CryptoServiceProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security\Cryptography |
| [Encrypt](#Encrypt) | Action | CryptoServiceProvider.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security\Cryptography |
| [GetAllowedUsers](#GetAllowedUsers) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security |
| [GetChildrenPermissionInfo](#GetChildrenPermissionInfo) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security |
| [GetParentGroups](#GetParentGroups) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security |
| [GetPermissionInfo](#GetPermissionInfo) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security |
| [GetRelatedIdentities](#GetRelatedIdentities) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security |
| [GetRelatedIdentitiesByPermissions](#GetRelatedIdentitiesByPermissions) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security |
| [GetRelatedItems](#GetRelatedItems) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security |
| [GetRelatedItemsOneLevel](#GetRelatedItemsOneLevel) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security |
| [GetRelatedPermissions](#GetRelatedPermissions) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\ContentRepository\Security |
| [GetSharing](#GetSharing) | Function | SharingActions.cs | ok | D:\dev\github\sensenet\src\ContentRepository\Sharing |
| [RemoveSharing](#RemoveSharing) | Action | SharingActions.cs | ok | D:\dev\github\sensenet\src\ContentRepository\Sharing |
| [Share](#Share) | Action | SharingActions.cs | ok | D:\dev\github\sensenet\src\ContentRepository\Sharing |
| [GetSchema](#GetSchema) | Function | ClientMetadataProvider.cs |  | D:\dev\github\sensenet\src\OData\Metadata |
| [GetClientRequestParameters](#GetClientRequestParameters) | Function | IdentityServerOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Authentication\IdentityServer4 |
| [CopyBatch](#CopyBatch) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [Delete](#Delete) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [DeleteBatch](#DeleteBatch) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [GetPermissions](#GetPermissions) | Function | ContentOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [HasPermission](#HasPermission) | Function | ContentOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [MoveBatch](#MoveBatch) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [Restore](#Restore) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [SetPermissions](#SetPermissions) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [SetPermissions](#SetPermissions) | Action | ContentOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [CreateUserByProvider](#CreateUserByProvider) | Action | IdentityOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [ValidateCredentials](#ValidateCredentials) | Action | IdentityOperations.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [FinalizeBlobUpload](#FinalizeBlobUpload) | Action | UploadActions.cs | ok | D:\dev\github\sensenet\src\Services.Core\Operations |
| [FinalizeContent](#FinalizeContent) | Action | UploadActions.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [GetBinaryToken](#GetBinaryToken) | Function | UploadActions.cs | ok | D:\dev\github\sensenet\src\Services.Core\Operations |
| [StartBlobUpload](#StartBlobUpload) | Action | UploadActions.cs | ok | D:\dev\github\sensenet\src\Services.Core\Operations |
| [StartBlobUploadToParent](#StartBlobUploadToParent) | Action | UploadActions.cs | ok | D:\dev\github\sensenet\src\Services.Core\Operations |
| [Upload](#Upload) | Action | UploadActions.cs |  | D:\dev\github\sensenet\src\Services.Core\Operations |
| [GetPermissionOverview](#GetPermissionOverview) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\Services.Core |
| [GetMetadata](#GetMetadata) | Function | QueryBuilder.cs | ok | D:\dev\github\sensenet\src\Services.Core |
| [GetQueries](#GetQueries) | Function | QueryBuilder.cs |  | D:\dev\github\sensenet\src\Services.Core |
| [SaveQuery](#SaveQuery) | Action | QueryBuilder.cs |  | D:\dev\github\sensenet\src\Services.Core |
| [GetWopiData](#GetWopiData) | Function | WopiActions.cs |  | D:\dev\github\sensenet\src\Services.Wopi |
| [WopiOpenEdit](#WopiOpenEdit) | Function | WopiActions.cs |  | D:\dev\github\sensenet\src\Services.Wopi |
| [WopiOpenView](#WopiOpenView) | Function | WopiActions.cs |  | D:\dev\github\sensenet\src\Services.Wopi |
| [IsFilled](#IsFilled) | Function | SurveyList.cs | ok | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\ContentHandlers |
| [AddTag](#AddTag) | Action | TagManagerApi.cs |  | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\Portlets\Tagging |
| [GetTags](#GetTags) | Function | TagManagerApi.cs |  | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\Portlets\Tagging |
| [CreateComment](#CreateComment) | Action | WallApi.cs | ok | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\Wall |
| [CreatePost](#CreatePost) | Action | WallApi.cs | ok | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\Wall |
| [GetLikeList](#GetLikeList) | Function | WallApi.cs | ok | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\Wall |
| [GetPosts](#GetPosts) | Function | WallApi.cs | ok | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\Wall |
| [Like](#Like) | Action | WallApi.cs | ok | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\Wall |
| [Share](#Share) | Action | WallApi.cs | ok | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\Wall |
| [Unlike](#Unlike) | Action | WallApi.cs | ok | D:\dev\github\sn-compatibility-pack\src\SenseNet.Compatibility\Wall |
| [RegisterUser](#RegisterUser) | Action | Actions.cs |  | D:\dev\github\sn-demo\src\SenseNet.Demo |
| [ValidateCredentialsExperimental](#ValidateCredentialsExperimental) | Action | IdentityOperations.cs |  | D:\dev\github\sn-identity\src\SenseNet.Identity.Experimental |
| [AddPreviewComment](#AddPreviewComment) | Action | PreviewCommentActions.cs |  | D:\dev\github\sn-preview\src\Preview\Preview.Controller |
| [DeletePreviewComment](#DeletePreviewComment) | Action | PreviewCommentActions.cs |  | D:\dev\github\sn-preview\src\Preview\Preview.Controller |
| [GetPreviewComments](#GetPreviewComments) | Function | PreviewCommentActions.cs |  | D:\dev\github\sn-preview\src\Preview\Preview.Controller |
| [GetActions](#GetActions) | Function | SmartAppHelperApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\ApplicationModel |
| [GetChildren](#GetChildren) | Function | ContentStoreApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\ContentStore |
| [GetTreeNodeAllChildren](#GetTreeNodeAllChildren) | Function | ContentStoreApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\ContentStore |
| [GetTreeNodeChildren](#GetTreeNodeChildren) | Function | ContentStoreApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\ContentStore |
| [IsContentQuery](#IsContentQuery) | Function | ContentStoreApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\ContentStore |
| [IsLuceneQuery](#IsLuceneQuery) | Function | ContentStoreApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\ContentStore |
| [Search](#Search) | Function | ContentStoreApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\ContentStore |
| [CopyViewLocal](#CopyViewLocal) | Function | ContentListViewHelperApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\UI\ContentListViews |
| [SetView](#SetView) | Function | ContentListViewHelperApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\UI\ContentListViews |
| [GetUserUploads](#GetUserUploads) | Function | DialogUploadApi.cs |  | D:\dev\github\sn-webpages\src\WebPages\UI\Controls |
| [AddMembers](#AddMembers) | Action | WorkspaceApi.cs |  | D:\dev\github\sn-workspaces\src\SenseNet.Workspaces |
| [RemoveMember](#RemoveMember) | Action | WorkspaceApi.cs |  | D:\dev\github\sn-workspaces\src\SenseNet.Workspaces |
## .NET Framework Operations (16)
| Operation | Type | File | Doc | Directory |
| --------- | ---- | ---- | --- | ---- |
| [FinalizeBlobUpload](#FinalizeBlobUpload) | Action | UploadAction.cs | ok | D:\dev\github\sensenet\src\Services\ApplicationModel |
| [FinalizeContent](#FinalizeContent) | Action | UploadAction.cs |  | D:\dev\github\sensenet\src\Services\ApplicationModel |
| [GetBinaryToken](#GetBinaryToken) | Function | UploadAction.cs | ok | D:\dev\github\sensenet\src\Services\ApplicationModel |
| [StartBlobUpload](#StartBlobUpload) | Action | UploadAction.cs | ok | D:\dev\github\sensenet\src\Services\ApplicationModel |
| [StartBlobUploadToParent](#StartBlobUploadToParent) | Action | UploadAction.cs | ok | D:\dev\github\sensenet\src\Services\ApplicationModel |
| [GetTemplateScript](#GetTemplateScript) | Function | HtmlTemplate.cs | ok | D:\dev\github\sensenet\src\Services |
| [BrowseProfile](#BrowseProfile) | Function | IdentityTools.cs |  | D:\dev\github\sensenet\src\Services |
| [GetSchema](#GetSchema) | Function | ClientMetadataProvider.cs |  | D:\dev\github\sensenet\src\Services\Metadata |
| [GetPermissionOverview](#GetPermissionOverview) | Function | PermissionQuery.cs |  | D:\dev\github\sensenet\src\Services |
| [GetMetadata](#GetMetadata) | Function | QueryBuilder.cs | ok | D:\dev\github\sensenet\src\Services |
| [GetQueries](#GetQueries) | Function | QueryBuilder.cs |  | D:\dev\github\sensenet\src\Services |
| [SaveQuery](#SaveQuery) | Action | QueryBuilder.cs |  | D:\dev\github\sensenet\src\Services |
| [GetStringResources](#GetStringResources) | Function | ResourceEditorApi.cs |  | D:\dev\github\sensenet\src\Services\Resources |
| [SaveResource](#SaveResource) | Action | ResourceEditorApi.cs |  | D:\dev\github\sensenet\src\Services\Resources |
| [Login](#Login) | Action | AuthenticationHelper.cs |  | D:\dev\github\sensenet\src\Services\Virtualization |
| [GetWopiData](#GetWopiData) | Function | WopiActions.cs |  | D:\dev\github\sensenet\src\Services\Wopi |
## Test Operations (86)
| Operation | Type | File | Doc | Directory |
| --------- | ---- | ---- | --- | ---- |
| [Function1](#Function1) | Function | ODataOperationTests.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Function2](#Function2) | Function | ODataOperationTests.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Function3](#Function3) | Function | ODataOperationTests.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ParameterEcho](#ParameterEcho) | Action | ODataTestBase.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ActionForQueryStringTest](#ActionForQueryStringTest) | Action | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Array_Bool](#Array_Bool) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Array_Decimal](#Array_Decimal) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Array_Double](#Array_Double) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Array_Float](#Array_Float) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Array_Int](#Array_Int) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Array_Long](#Array_Long) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Array_String](#Array_String) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [AsyncMethod](#AsyncMethod) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Authorization_None](#Authorization_None) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [AuthorizedByPermission](#AuthorizedByPermission) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [AuthorizedByPolicy](#AuthorizedByPolicy) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [AuthorizedByPolicy_Error](#AuthorizedByPolicy_Error) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [AuthorizedByRole_Administrators](#AuthorizedByRole_Administrators) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [AuthorizedByRole_All](#AuthorizedByRole_All) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [AuthorizedByRole_All2](#AuthorizedByRole_All2) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [AuthorizedByRole_Visitor](#AuthorizedByRole_Visitor) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Enumerable_Bool](#Enumerable_Bool) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Enumerable_Decimal](#Enumerable_Decimal) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Enumerable_Double](#Enumerable_Double) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Enumerable_Float](#Enumerable_Float) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Enumerable_Int](#Enumerable_Int) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Enumerable_Long](#Enumerable_Long) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Enumerable_String](#Enumerable_String) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [FunctionForQueryStringTest](#FunctionForQueryStringTest) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [List_Bool](#List_Bool) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [List_Decimal](#List_Decimal) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [List_Double](#List_Double) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [List_Float](#List_Float) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [List_Int](#List_Int) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [List_Long](#List_Long) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [List_String](#List_String) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ODataArray_Bool](#ODataArray_Bool) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ODataArray_Decimal](#ODataArray_Decimal) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ODataArray_Double](#ODataArray_Double) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ODataArray_Float](#ODataArray_Float) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ODataArray_Int](#ODataArray_Int) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ODataArray_Long](#ODataArray_Long) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ODataArray_String](#ODataArray_String) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ODataArray_TestItemArray](#ODataArray_TestItemArray) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op1](#Op1) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op10](#Op10) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op2](#Op2) | Action | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op3](#Op3) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op4](#Op4) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op5](#Op5) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op6](#Op6) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op7](#Op7) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op8](#Op8) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Op9_Renamed](#Op9_Renamed) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Array_Bool](#Optional_Array_Bool) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Array_Decimal](#Optional_Array_Decimal) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Array_Double](#Optional_Array_Double) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Array_Float](#Optional_Array_Float) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Array_Int](#Optional_Array_Int) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Array_Long](#Optional_Array_Long) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Array_String](#Optional_Array_String) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Enumerable_Bool](#Optional_Enumerable_Bool) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Enumerable_Decimal](#Optional_Enumerable_Decimal) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Enumerable_Double](#Optional_Enumerable_Double) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Enumerable_Float](#Optional_Enumerable_Float) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Enumerable_Int](#Optional_Enumerable_Int) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Enumerable_Long](#Optional_Enumerable_Long) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_Enumerable_String](#Optional_Enumerable_String) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_List_Bool](#Optional_List_Bool) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_List_Decimal](#Optional_List_Decimal) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_List_Double](#Optional_List_Double) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_List_Float](#Optional_List_Float) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_List_Int](#Optional_List_Int) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_List_Long](#Optional_List_Long) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_List_String](#Optional_List_String) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_ODataArray_Bool](#Optional_ODataArray_Bool) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_ODataArray_Decimal](#Optional_ODataArray_Decimal) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_ODataArray_Double](#Optional_ODataArray_Double) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_ODataArray_Float](#Optional_ODataArray_Float) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_ODataArray_Int](#Optional_ODataArray_Int) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_ODataArray_Long](#Optional_ODataArray_Long) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_ODataArray_String](#Optional_ODataArray_String) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [Optional_ODataArray_TestItemArray](#Optional_ODataArray_TestItemArray) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [SensitiveMethodName](#SensitiveMethodName) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [WrongMethodName](#WrongMethodName) | Function | TestTypes.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.ODataTests |
| [ParameterEcho](#ParameterEcho) | Action | ODataTests_legacy.cs |  | D:\dev\github\sensenet\src\Tests\SenseNet.Services.OData.Tests |
## GetPreviewImages
**FUNCTION**,&nbsp;

- File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**,&nbsp;
- Class: **SenseNet.Preview.DocumentPreviewProvider**,&nbsp;
- Method: **GetPreviewImagesForOData**.

### Parameters:
- **content** (Content):
- **Return value** (IEnumerable&lt;Content>):
### Description:

$Action,GetPreviewImages

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.File
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Preview

## PreviewAvailable
**FUNCTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **PreviewAvailable**.
### Parameters:
- **content** (Content):
- **page** (int):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.File
- **AllowedRoles**: N.R.Everyone

## GetExistingPreviewImages
**FUNCTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **GetExistingPreviewImagesForOData**.
### Parameters:
- **content** (Content):
- **Return value** (IEnumerable&lt;object>):
### Description:

$Action,GetExistingPreviewImages

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.File
- **AllowedRoles**: N.R.Everyone

## GetPageCount
**ACTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **GetPageCount**.
### Parameters:
- **content** (Content):
- **Return value** (int):
### Description:

Get page count

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.File
- **AllowedRoles**: N.R.Everyone

## GetPreviewsFolder
**ACTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **GetPreviewsFolder**.
### Parameters:
- **content** (Content):
- **empty** (bool):
- **Return value** (object):
### Description:

Get previews folder

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.File
- **AllowedRoles**: N.R.Everyone

## SetPreviewStatus
**ACTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **SetPreviewStatus**.
### Parameters:
- **content** (Content):
- **status** (PreviewStatus):
### Description:

Set preview status

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.File
- **AllowedRoles**: N.R.Everyone

## SetPageCount
**ACTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **SetPageCount**.
### Parameters:
- **content** (Content):
- **pageCount** (int):
### Description:

Set page count

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.File
- **AllowedRoles**: N.R.Everyone

## SetInitialPreviewProperties
**ACTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **SetInitialPreviewProperties**.
### Parameters:
- **content** (Content):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PreviewImage
- **AllowedRoles**: N.R.Everyone

## RegeneratePreviews
**ACTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **RegeneratePreviews**.
### Parameters:
- **content** (Content):
### Description:

Regenerate preview images

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.File
- **AllowedRoles**: N.R.Everyone

## CheckPreviews
**ACTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **CheckPreviews**.
### Parameters:
- **content** (Content):
- **generateMissing** (bool):
- **Return value** (object):
### Description:

Check preview images

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.File
- **AllowedRoles**: N.R.Everyone

## DocumentPreviewFinalizer
**ACTION**, File: **\sensenet\src\ContentRepository\Preview\DocumentPreviewProvider.cs**, Class: **SenseNet.Preview.DocumentPreviewProvider**, Method: **DocumentPreviewFinalizer**.
### Parameters:
- **content** (Content):
- **result** (SnTaskResult):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone

## Encrypt
**ACTION**, File: **\sensenet\src\ContentRepository\Security\Cryptography\CryptoServiceProvider.cs**, Class: **SenseNet.ContentRepository.Security.Cryptography.CryptoServiceProvider**, Method: **Encrypt**.
### Parameters:
- **content** (Content):
- **text** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## Decrypt
**ACTION**, File: **\sensenet\src\ContentRepository\Security\Cryptography\CryptoServiceProvider.cs**, Class: **SenseNet.ContentRepository.Security.Cryptography.CryptoServiceProvider**, Method: **Decrypt**.
### Parameters:
- **content** (Content):
- **text** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## GetRelatedIdentities
**FUNCTION**, File: **\sensenet\src\ContentRepository\Security\PermissionQuery.cs**, Class: **SenseNet.ContentRepository.Security.PermissionQueryForRest**, Method: **GetRelatedIdentities**.
### Parameters:
- **content** (Content):
- **permissionLevel** (string):
- **identityKind** (string):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone

## GetRelatedPermissions
**FUNCTION**, File: **\sensenet\src\ContentRepository\Security\PermissionQuery.cs**, Class: **SenseNet.ContentRepository.Security.PermissionQueryForRest**, Method: **GetRelatedPermissions**.
### Parameters:
- **content** (Content):
- **permissionLevel** (string):
- **explicitOnly** (bool):
- **memberPath** (string):
- **includedTypes** (IEnumerable&lt;string>):
- **Return value** (IDictionary&lt;PermissionType, int>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone

## GetRelatedItems
**FUNCTION**, File: **\sensenet\src\ContentRepository\Security\PermissionQuery.cs**, Class: **SenseNet.ContentRepository.Security.PermissionQueryForRest**, Method: **GetRelatedItems**.
### Parameters:
- **content** (Content):
- **permissionLevel** (string):
- **explicitOnly** (bool):
- **memberPath** (string):
- **permissions** (string[]):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone

## GetRelatedIdentitiesByPermissions
**FUNCTION**, File: **\sensenet\src\ContentRepository\Security\PermissionQuery.cs**, Class: **SenseNet.ContentRepository.Security.PermissionQueryForRest**, Method: **GetRelatedIdentities**.
### Parameters:
- **content** (Content):
- **permissionLevel** (string):
- **identityKind** (string):
- **permissions** (string[]):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone

## GetRelatedItemsOneLevel
**FUNCTION**, File: **\sensenet\src\ContentRepository\Security\PermissionQuery.cs**, Class: **SenseNet.ContentRepository.Security.PermissionQueryForRest**, Method: **GetRelatedItemsOneLevel**.
### Parameters:
- **content** (Content):
- **permissionLevel** (string):
- **memberPath** (string):
- **permissions** (string[]):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone

## GetAllowedUsers
**FUNCTION**, File: **\sensenet\src\ContentRepository\Security\PermissionQuery.cs**, Class: **SenseNet.ContentRepository.Security.PermissionQueryForRest**, Method: **GetAllowedUsers**.
### Parameters:
- **content** (Content):
- **permissions** (string[]):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone

## GetParentGroups
**FUNCTION**, File: **\sensenet\src\ContentRepository\Security\PermissionQuery.cs**, Class: **SenseNet.ContentRepository.Security.PermissionQueryForRest**, Method: **GetParentGroups**.
### Parameters:
- **content** (Content):
- **directOnly** (bool):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.Group, N.CT.User
- **AllowedRoles**: N.R.Everyone

## GetPermissionInfo
**FUNCTION**, File: **\sensenet\src\ContentRepository\Security\PermissionQuery.cs**, Class: **SenseNet.ContentRepository.Security.PermissionQueryForRest**, Method: **GetPermissionInfo**.
### Parameters:
- **content** (Content):
- **identity** (string):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone

## GetChildrenPermissionInfo
**FUNCTION**, File: **\sensenet\src\ContentRepository\Security\PermissionQuery.cs**, Class: **SenseNet.ContentRepository.Security.PermissionQueryForRest**, Method: **GetChildrenPermissionInfo**.
### Parameters:
- **content** (Content):
- **identity** (string):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone

## GetSharing
**FUNCTION**, File: **\sensenet\src\ContentRepository\Sharing\SharingActions.cs**, Class: **SenseNet.ContentRepository.Sharing.SharingActions**, Method: **GetSharing**.
### Parameters:
- **content** (Content):
- **Return value** (object):

### Documentation:
Gets a list of all sharing records on a content.

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save, N.P.SetPermissions

## Share
**ACTION**, File: **\sensenet\src\ContentRepository\Sharing\SharingActions.cs**, Class: **SenseNet.ContentRepository.Sharing.SharingActions**, Method: **Share**.
### Parameters:
- **content** (Content):
- **token** (string): An identifier token: an email address, a username or a user or group id.
- **level** (SharingLevel): What permissions will the user get for the content.
- **mode** (SharingMode): Whether the content will be accessible for other users.
- **sendNotification** (bool): Whether a notification email should be sent to the target user.
- **Return value** (object): A sharing record representing the new share.

### Documentation:
Shares a content with somebody.

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save, N.P.SetPermissions
- **Scenarios**: N.S.ContextMenu, N.S.BatchActions

## RemoveSharing
**ACTION**, File: **\sensenet\src\ContentRepository\Sharing\SharingActions.cs**, Class: **SenseNet.ContentRepository.Sharing.SharingActions**, Method: **RemoveSharing**.
### Parameters:
- **content** (Content):
- **id** (string): Identifier of a sharing record.
- **Return value** (object): Returns true if the system has found and removed the sharing record.

### Documentation:
Remove a sharing record from a content.

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save, N.P.SetPermissions

## RebuildIndex
**ACTION**, File: **\sensenet\src\ContentRepository\Content.cs**, Class: **SenseNet.ContentRepository.Operations**, Method: **RebuildIndex**.
### Parameters:
- **content** (Content): The content provided by the infrastructure.
- **recursive** (bool): Whether child content should be reindexed or not. Default: false.
- **rebuildLevel** (IndexRebuildLevel): The algorithm selector. Value can be <value>IndexOnly</value> or <value>DatabaseAndIndex</value>. Default: <value>IndexOnly</value>

### Documentation:
Rebuilds the index document of a content and optionally of all documents in the whole subtree.
In case the value of rebuildLevel is IndexOnly the index document is refreshed
based on the already existing extracted data stored in the database. This is a significantly faster method
and it is designed for cases when only the place of the content in the tree has changed or the index got corrupted.
The DatabaseAndIndex algorithm will reindex the full content than update the index in the
external index provider the same way as the light-weight algorithm.

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Administrators, N.R.Developers
- **RequiredPermissions**: N.P.Save

## RebuildIndexSubtree
**ACTION**, File: **\sensenet\src\ContentRepository\Content.cs**, Class: **SenseNet.ContentRepository.Operations**, Method: **RebuildIndexSubtree**.
### Parameters:
- **content** (Content): The content provided by the infrastructure.

### Documentation:
Performes a full reindex operation on the content and the whole subtree.

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## RefreshIndexSubtree
**ACTION**, File: **\sensenet\src\ContentRepository\Content.cs**, Class: **SenseNet.ContentRepository.Operations**, Method: **RefreshIndexSubtree**.
### Parameters:
- **content** (Content): The content provided by the infrastructure.

### Documentation:
Refreshes the index document of the content and the whole subtree using the already existing index data stored in the database.

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## GetNameFromDisplayName
**FUNCTION**, File: **\sensenet\src\ContentRepository\ContentNamingProvider.cs**, Class: **SenseNet.ContentRepository.ContentNamingProvider**, Method: **GetNameFromDisplayName**.
### Parameters:
- **content** (Content): Required parameter for the OData function.
- **displayName** (string): Source of the conversion.
- **Return value** (string): The converted name.

### Documentation:
OData function that converts the human readable name to the valid content name.

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Everyone, N.R.Visitor

## Approve
**ACTION**, File: **\sensenet\src\ContentRepository\ContentOperations.cs**, Class: **SenseNet.ContentRepository.ContentOperations**, Method: **Approve**, Icon: **"approve"**.
### Parameters:
- **content** (Content):
- **Return value** (Content):
### Description:

$Action,Approve

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save, N.P.Approve
- **RequiredPolicies**: N.Pol.VersioningAndApproval
- **Scenarios**: N.S.ListItem, N.S.ExploreActions, N.S.SimpleApprovableListItem, N.S.ContextMenu

## CheckIn
**ACTION**, File: **\sensenet\src\ContentRepository\ContentOperations.cs**, Class: **SenseNet.ContentRepository.ContentOperations**, Method: **CheckIn**, Icon: **"checkin"**.
### Parameters:
- **content** (Content):
- **checkInComments** (string):
- **Return value** (Content):
### Description:

$Action,CheckIn

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save
- **RequiredPolicies**: N.Pol.VersioningAndApproval
- **Scenarios**: N.S.ListItem, N.S.ExploreActions, N.S.SimpleApprovableListItem, N.S.ContextMenu

## CheckOut
**ACTION**, File: **\sensenet\src\ContentRepository\ContentOperations.cs**, Class: **SenseNet.ContentRepository.ContentOperations**, Method: **CheckOut**, Icon: **"checkout"**.
### Parameters:
- **content** (Content):
- **Return value** (Content):
### Description:

$Action,CheckOut

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save
- **RequiredPolicies**: N.Pol.VersioningAndApproval
- **Scenarios**: N.S.ListItem, N.S.ExploreActions, N.S.ContextMenu

## Publish
**ACTION**, File: **\sensenet\src\ContentRepository\ContentOperations.cs**, Class: **SenseNet.ContentRepository.ContentOperations**, Method: **Publish**, Icon: **"publish"**.
### Parameters:
- **content** (Content):
- **Return value** (Content):
### Description:

$Action,Publish

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save, N.P.Publish
- **RequiredPolicies**: N.Pol.VersioningAndApproval
- **Scenarios**: N.S.ListItem, N.S.ExploreActions, N.S.SimpleApprovableListItem, N.S.ContextMenu

## Reject
**ACTION**, File: **\sensenet\src\ContentRepository\ContentOperations.cs**, Class: **SenseNet.ContentRepository.ContentOperations**, Method: **Reject**.
### Parameters:
- **content** (Content):
- **rejectReason** (string):
- **Return value** (Content):
### Description:

$Action,Reject

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save
- **RequiredPolicies**: N.Pol.VersioningAndApproval

## UndoCheckOut
**ACTION**, File: **\sensenet\src\ContentRepository\ContentOperations.cs**, Class: **SenseNet.ContentRepository.ContentOperations**, Method: **UndoCheckOut**, Icon: **"undocheckout"**.
### Parameters:
- **content** (Content):
- **Return value** (Content):
### Description:

$Action,UndoCheckOut

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save
- **RequiredPolicies**: N.Pol.VersioningAndApproval
- **Scenarios**: N.S.ListItem, N.S.ExploreActions, N.S.ContextMenu

## ForceUndoCheckOut
**ACTION**, File: **\sensenet\src\ContentRepository\ContentOperations.cs**, Class: **SenseNet.ContentRepository.ContentOperations**, Method: **ForceUndoCheckOut**, Icon: **"undocheckout"**.
### Parameters:
- **content** (Content):
- **Return value** (Content):
### Description:

$Action,ForceUndoCheckOut

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save, N.P.ForceCheckin
- **RequiredPolicies**: N.Pol.VersioningAndApproval
- **Scenarios**: N.S.ListItem, N.S.ExploreActions, N.S.ContextMenu

## RestoreVersion
**ACTION**, File: **\sensenet\src\ContentRepository\ContentOperations.cs**, Class: **SenseNet.ContentRepository.ContentOperations**, Method: **RestoreVersion**, Icon: **"restoreversion"**.
### Parameters:
- **content** (Content):
- **version** (string):
- **Return value** (Content):
### Description:

$Action,RestoreVersion

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save, N.P.RecallOldVersion

## AddAllowedChildTypes
**ACTION**, File: **\sensenet\src\ContentRepository\GenericContent.cs**, Class: **SenseNet.ContentRepository.GenericContent**, Method: **AddAllowedChildTypes**.
### Parameters:
- **content** (Content): The _SenseNet.ContentRepository.Content_ that will be modified.
- **contentTypes** (string[]): The extension.
- **Return value** (string): Empty string.

### Documentation:
Extends the Content's AllowedChildTypes collection with the provided Content types.
The Content will be saved after the operation.
This is an _ODataAction_.

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone

## RemoveAllowedChildTypes
**ACTION**, File: **\sensenet\src\ContentRepository\GenericContent.cs**, Class: **SenseNet.ContentRepository.GenericContent**, Method: **RemoveAllowedChildTypes**.
### Parameters:
- **content** (Content): The _SenseNet.ContentRepository.Content_ that will be modified.
- **contentTypes** (string[]): The items that will be removed.
- **Return value** (string): Empty string.

### Documentation:
Removes the specified Content types from the given Content's AllowedChildTypes collection.
The Content will be saved after the operation.
This is an _ODataAction_.

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone

## AddMembers
**ACTION**, File: **\sensenet\src\ContentRepository\Group.cs**, Class: **SenseNet.ContentRepository.Group**, Method: **AddMembers**.
### Parameters:
- **content** (Content): A _Content_ that should be a _Group_.
- **contentIds** (int[]): An array of contentIds that represents the new members.
- **Return value** (object):

### Documentation:
Adds the specified items to the members list of the given group _Content_.
If the content is not a _Group_, an _InvalidOperationException_ will be thrown.

### Filters and authorization:
- **ContentTypes**: N.CT.Group
- **AllowedRoles**: N.R.Everyone

## RemoveMembers
**ACTION**, File: **\sensenet\src\ContentRepository\Group.cs**, Class: **SenseNet.ContentRepository.Group**, Method: **RemoveMembers**.
### Parameters:
- **content** (Content): A _Content_ that should be a _Group_.
- **contentIds** (int[]): An array of contentIds that represents the members to remove.
- **Return value** (object):

### Documentation:
Removes the specified items from the members list of the given group _Content_.

### Filters and authorization:
- **ContentTypes**: N.CT.Group
- **AllowedRoles**: N.R.Everyone

## GetVersionInfo
**FUNCTION**, File: **\sensenet\src\ContentRepository\Repository.cs**, Class: **SenseNet.ContentRepository.Repository**, Method: **GetVersionInfo**.
### Parameters:
- **content** (Content):
- **Return value** (RepositoryVersionInfo):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## CheckAllowedChildTypesOfFolders
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **CheckAllowedChildTypesOfFolders**.
### Parameters:
- **root** (Content): Subtree to check. Null means /Root content
- **Return value** (Dictionary&lt;string, List&lt;string>>): Paths where AllowedChildTypes is empty categorized by content type names.

### Documentation:
Checks all IFolder objects in the repository and returns all paths where AllowedChildTypes is empty. Paths are categorized by content type names.
This method is allowed to call as Generic OData Application.


## GetAllContentTypes
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **GetListOfAllContentTypes**.
### Parameters:
- **content** (Content):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Everyone

## GetAllowedChildTypesFromCTD
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **GetAllowedChildTypesFromCTD**.
### Parameters:
- **content** (Content):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone

## MissingExplicitEntriesOfVisitorComparedToEveryone
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **MissingExplicitEntriesOfVisitorComparedToEveryone**.
### Parameters:
- **root** (Content): Examination scope.
- **Return value** (IEnumerable&lt;string>):

### Documentation:
Returns a path list containing items that have explicit security entry for Everyone group but does not have explicit security entry for Visitor user.


## Ancestors
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **Ancestors**.
### Parameters:
- **content** (Content):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone, N.R.Visitor

## CopyExplicitEntriesOfEveryoneToVisitor
**ACTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **CopyExplicitEntriesOfEveryoneToVisitor**.
### Parameters:
- **root** (Content):
- **exceptList** (string[]):
- **Return value** (string):

MISSING DOCUMENTATION


## BackupIndex
**ACTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **BackupIndex**.
### Parameters:
- **content** (Content):
- **target** (string):
- **Return value** (STT.Task&lt;BackupResponse>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## QueryIndexBackup
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **QueryIndexBackup**.
### Parameters:
- **content** (Content):
- **Return value** (STT.Task&lt;BackupResponse>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## CancelIndexBackup
**ACTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **CancelIndexBackup**.
### Parameters:
- **content** (Content):
- **Return value** (STT.Task&lt;BackupResponse>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## TakeOwnership
**ACTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **TakeOwnership**.
### Parameters:
- **content** (Content):
- **userOrGroup** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.TakeOwnership

## TakeLockOver
**ACTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **TakeLockOver**.
### Parameters:
- **content** (Content):
- **user** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.ForceCheckin

## GetRecentSecurityActivities
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **GetRecentSecurityActivities**.
### Parameters:
- **content** (Content):
- **Return value** (SenseNet.Security.Messaging.SecurityActivityHistory):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## GetRecentIndexingActivities
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **GetRecentIndexingActivities**.
### Parameters:
- **content** (Content):
- **Return value** (IndexingActivityHistory):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## ResetRecentIndexingActivities
**ACTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **ResetRecentIndexingActivities**.
### Parameters:
- **content** (Content):
- **Return value** (IndexingActivityHistory):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## CheckIndexIntegrity
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **CheckIndexIntegrity**.
### Parameters:
- **content** (Content):
- **recurse** (bool):
- **Return value** (object):

MISSING DOCUMENTATION


## CheckSecurityConsistency
**FUNCTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **CheckSecurityConsistency**.
### Parameters:
- **content** (Content):
- **Return value** (SecurityConsistencyResult):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Administrators, N.R.Developers

## Ad2PortalSyncFinalizer
**ACTION**, File: **\sensenet\src\ContentRepository\RepositoryTools.cs**, Class: **SenseNet.ContentRepository.RepositoryTools**, Method: **Ad2PortalSyncFinalizer**.
### Parameters:
- **content** (Content):
- **result** (SnTaskResult):

MISSING DOCUMENTATION


## GetSchema
**FUNCTION**, File: **\sensenet\src\OData\Metadata\ClientMetadataProvider.cs**, Class: **SenseNet.OData.Metadata.ClientMetadataProvider**, Method: **GetSchema**.
### Parameters:
- **content** (Content):
- **contentTypeName** (string):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.All

## FinalizeContent
**ACTION**, File: **\sensenet\src\Services\ApplicationModel\UploadAction.cs**, Class: **SenseNet.ApplicationModel.UploadAction**, Method: **FinalizeContent**.
### Parameters:
- **content** (Content):
- **Return value** (string):

MISSING DOCUMENTATION


## StartBlobUploadToParent
**ACTION**, File: **\sensenet\src\Services\ApplicationModel\UploadAction.cs**, Class: **SenseNet.ApplicationModel.UploadAction**, Method: **StartBlobUploadToParent**.
### Parameters:
- **content** (Content): Parent content to upload the new file to.
- **name** (string): Name of the new (or existing) content.
- **contentType** (string): Content type of the new content.
- **fullSize** (long): Size of the whole binary.
- **fieldName** (string): Optional custom binary field name, if it is other than 'Binary'.
- **Return value** (string): Chunk write token, content id and version id in a JSON object.

### Documentation:
Starts a blob write operation by loading an existing content (determined by the
requested parent resource and the provided file name) or creating a new one.
It puts the content into a multistep saving state and calls StartChunk.
This method is used by clients who intend to use the blob storage client
to write files directly to the blob storage.


## StartBlobUpload
**ACTION**, File: **\sensenet\src\Services\ApplicationModel\UploadAction.cs**, Class: **SenseNet.ApplicationModel.UploadAction**, Method: **StartBlobUpload**.
### Parameters:
- **content** (Content): Existing content with a binary field to upload to. In most cases this is a file content.
- **fullSize** (long): Size of the whole binary.
- **fieldName** (string): Optional custom binary field name, if it is other than 'Binary'.
- **Return value** (string): Chunk write token, content id and version id in a JSON object.

### Documentation:
Starts a blob write operation by putting the content into a multistep saving state
and calling StartChunk. This method is used by clients who intend to use the blob
storage client to write files directly to the blob storage.


## FinalizeBlobUpload
**ACTION**, File: **\sensenet\src\Services\ApplicationModel\UploadAction.cs**, Class: **SenseNet.ApplicationModel.UploadAction**, Method: **FinalizeBlobUpload**.
### Parameters:
- **content** (Content): A content in a multistep saving state.
- **token** (string): Binary token provided by the start operation before.
- **fullSize** (long): Size of the whole binary.
- **fieldName** (string): Optional custom binary field name, if it is other than 'Binary'.
- **fileName** (string): Binary file name to save into the binary metadata.
- **Return value** (string):

### Documentation:
Finishes a blob write operation by calling CommitChunk and finalizing the content.
This method is used by clients who intend to use the blob storage client
to write files directly to the blob storage.


## GetBinaryToken
**FUNCTION**, File: **\sensenet\src\Services\ApplicationModel\UploadAction.cs**, Class: **SenseNet.ApplicationModel.UploadAction**, Method: **GetBinaryToken**.
### Parameters:
- **content** (Content): A content with a binary field.
- **fieldName** (string): Optional custom binary field name, if it is other than 'Binary'.
- **Return value** (string):

### Documentation:
Gets a token from the Content Repository that represents the binary data stored in the specified
field (by default Binary) of the provided content version.


## GetSchema
**FUNCTION**, File: **\sensenet\src\Services\Metadata\ClientMetadataProvider.cs**, Class: **SenseNet.Services.Metadata.ClientMetadataProvider**, Method: **GetSchema**.
### Parameters:
- **content** (Content):
- **contentTypeName** (string):
- **Return value** (object):

MISSING DOCUMENTATION


## GetStringResources
**FUNCTION**, File: **\sensenet\src\Services\Resources\ResourceEditorApi.cs**, Class: **SenseNet.Portal.Resources.ResourceEditorApi**, Method: **GetStringResources**.
### Parameters:
- **content** (Content):
- **classname** (string):
- **name** (string):
- **rnd** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## SaveResource
**ACTION**, File: **\sensenet\src\Services\Resources\ResourceEditorApi.cs**, Class: **SenseNet.Portal.Resources.ResourceEditorApi**, Method: **SaveResource**.
### Parameters:
- **content** (Content):
- **classname** (string):
- **name** (string):
- **resources** (string):

MISSING DOCUMENTATION


## Login
**ACTION**, File: **\sensenet\src\Services\Virtualization\AuthenticationHelper.cs**, Class: **SenseNet.Portal.Virtualization.AuthenticationHelper**, Method: **Login**.
### Parameters:
- **content** (Content):
- **username** (string):
- **password** (string):
- **Return value** (object):

MISSING DOCUMENTATION


## GetWopiData
**FUNCTION**, File: **\sensenet\src\Services\Wopi\WopiActions.cs**, Class: **SenseNet.Services.Wopi.WopiActions**, Method: **GetWopiData**.
### Parameters:
- **content** (Content):
- **action** (string):
- **Return value** (object):

MISSING DOCUMENTATION


## GetTemplateScript
**FUNCTION**, File: **\sensenet\src\Services\HtmlTemplate.cs**, Class: **SenseNet.Portal.UI.HtmlTemplate**, Method: **GetTemplateScript**.
### Parameters:
- **content** (Content):
- **skin** (string):
- **category** (string):
- **Return value** (string):

### Documentation:
Compiles a template script that contains a Javascript variable definition and a JSON object
with local and global templates that belong to the provided skin and category.


## BrowseProfile
**FUNCTION**, File: **\sensenet\src\Services\IdentityTools.cs**, Class: **SenseNet.Services.IdentityTools**, Method: **BrowseProfile**.
### Parameters:
- **content** (Content):
- **back** (string):
- **Return value** (object):

MISSING DOCUMENTATION


## GetPermissionOverview
**FUNCTION**, File: **\sensenet\src\Services\PermissionQuery.cs**, Class: **SenseNet.Portal.PermissionQuery**, Method: **GetPermissionOverview**.
### Parameters:
- **content** (Content):
- **identity** (string):
- **Return value** (object):

MISSING DOCUMENTATION


## GetMetadata
**FUNCTION**, File: **\sensenet\src\Services\QueryBuilder.cs**, Class: **SenseNet.Portal.QueryBuilder**, Method: **GetMetadata**.
### Parameters:
- **content** (Content): Compulsory generic OData action parameter, currently not used.
- **Return value** (string): Two arrays: one with regular fields and one for aspect fields.

### Documentation:
Generic OData action method for collecting all fields of all types in the system.


## GetQueries
**FUNCTION**, File: **\sensenet\src\Services\QueryBuilder.cs**, Class: **SenseNet.Portal.QueryBuilder**, Method: **GetQueries**.
### Parameters:
- **content** (Content):
- **onlyPublic** (bool):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION


## SaveQuery
**ACTION**, File: **\sensenet\src\Services\QueryBuilder.cs**, Class: **SenseNet.Portal.QueryBuilder**, Method: **SaveQuery**.
### Parameters:
- **content** (Content):
- **query** (string):
- **displayName** (string):
- **queryType** (string):
- **Return value** (object):

MISSING DOCUMENTATION


## GetClientRequestParameters
**FUNCTION**, File: **\sensenet\src\Services.Core\Authentication\IdentityServer4\IdentityServerOperations.cs**, Class: **SenseNet.Services.Core.Authentication.IdentityServer4.IdentityServerOperations**, Method: **GetClientRequestParameters**.
### Parameters:
- **content** (Content):
- **context** (HttpContext):
- **clientType** (string):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.All

## CopyBatch
**ACTION**, File: **\sensenet\src\Services.Core\Operations\ContentOperations.cs**, Class: **SenseNet.Services.Core.Operations.ContentOperations**, Method: **CopyBatch**, Icon: **"copy"**.
### Parameters:
- **content** (Content):
- **targetPath** (string):
- **paths** (object[]):
- **Return value** (BatchActionResponse):
### Description:

$Action,CopyBatch

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.Folder
- **AllowedRoles**: N.R.Everyone
- **Scenarios**: N.S.GridToolbar, N.S.BatchActions

## MoveBatch
**ACTION**, File: **\sensenet\src\Services.Core\Operations\ContentOperations.cs**, Class: **SenseNet.Services.Core.Operations.ContentOperations**, Method: **MoveBatch**, Icon: **"move"**.
### Parameters:
- **content** (Content):
- **targetPath** (string):
- **paths** (object[]):
- **Return value** (BatchActionResponse):
### Description:

$Action,MoveBatch

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.Folder
- **AllowedRoles**: N.R.Everyone
- **Scenarios**: N.S.GridToolbar, N.S.BatchActions

## Delete
**ACTION**, File: **\sensenet\src\Services.Core\Operations\ContentOperations.cs**, Class: **SenseNet.Services.Core.Operations.ContentOperations**, Method: **Delete**, Icon: **"delete"**.
### Parameters:
- **content** (Content):
- **permanent** (bool):
- **Return value** (object):
### Description:

$Action,Delete

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Delete
- **Scenarios**: N.S.ListItem, N.S.ContextMenu

## DeleteBatch
**ACTION**, File: **\sensenet\src\Services.Core\Operations\ContentOperations.cs**, Class: **SenseNet.Services.Core.Operations.ContentOperations**, Method: **DeleteBatch**, Icon: **"delete"**.
### Parameters:
- **content** (Content):
- **permanent** (bool):
- **paths** (object[]):
- **Return value** (BatchActionResponse):
### Description:

$Action,DeleteBatch

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.Folder
- **AllowedRoles**: N.R.Everyone
- **Scenarios**: N.S.GridToolbar, N.S.BatchActions

## GetPermissions
**FUNCTION**, File: **\sensenet\src\Services.Core\Operations\ContentOperations.cs**, Class: **SenseNet.Services.Core.Operations.ContentOperations**, Method: **GetPermissions**.
### Parameters:
- **content** (Content):
- **identity** (string):
- **Return value** (object):
### Description:

$Action,GetPermissions

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone

## HasPermission
**FUNCTION**, File: **\sensenet\src\Services.Core\Operations\ContentOperations.cs**, Class: **SenseNet.Services.Core.Operations.ContentOperations**, Method: **HasPermission**.
### Parameters:
- **content** (Content):
- **permissions** (string[]):
- **user** (string):
- **Return value** (bool):
### Description:

$Action,HasPermission

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.SeePermissions

## SetPermissions
**ACTION**, File: **\sensenet\src\Services.Core\Operations\ContentOperations.cs**, Class: **SenseNet.Services.Core.Operations.ContentOperations**, Method: **SetPermissions**, Icon: **"security"**.
### Parameters:
- **content** (Content):
- **inheritance** (string):
- **Return value** (object):
### Description:

$Action,SetPermissions

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Open, N.P.SeePermissions, N.P.SetPermissions
- **Scenarios**: N.S.WorkspaceActions, N.S.ListItem, N.S.ExploreActions, N.S.ContextMenu

## SetPermissions
**ACTION**, File: **\sensenet\src\Services.Core\Operations\ContentOperations.cs**, Class: **SenseNet.Services.Core.Operations.ContentOperations**, Method: **SetPermissions**, Icon: **"security"**.
### Parameters:
- **content** (Content):
- **r** (SetPermissionsRequest):
- **Return value** (object):
### Description:

$Action,SetPermissions

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Open, N.P.SeePermissions, N.P.SetPermissions
- **Scenarios**: N.S.WorkspaceActions, N.S.ListItem, N.S.ExploreActions, N.S.ContextMenu

## Restore
**ACTION**, File: **\sensenet\src\Services.Core\Operations\ContentOperations.cs**, Class: **SenseNet.Services.Core.Operations.ContentOperations**, Method: **Restore**, Icon: **"restore"**.
### Parameters:
- **content** (Content):
- **destination** (string):
- **newname** (bool?):
- **Return value** (object):
### Description:

$Action,Restore

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.TrashBag
- **AllowedRoles**: N.R.Everyone
- **RequiredPermissions**: N.P.Save
- **Scenarios**: N.S.ListItem, N.S.ExploreToolbar, N.S.ContextMenu

## ValidateCredentials
**ACTION**, File: **\sensenet\src\Services.Core\Operations\IdentityOperations.cs**, Class: **SenseNet.Services.Core.Operations.IdentityOperations**, Method: **ValidateCredentials**.
### Parameters:
- **content** (Content):
- **context** (HttpContext):
- **userName** (string):
- **password** (string):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.All

## CreateUserByProvider
**ACTION**, File: **\sensenet\src\Services.Core\Operations\IdentityOperations.cs**, Class: **SenseNet.Services.Core.Operations.IdentityOperations**, Method: **CreateUserByProvider**.
### Parameters:
- **content** (Content):
- **context** (HttpContext):
- **provider** (string):
- **userId** (string):
- **claims** (string):
- **Return value** (Task&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.Administrators

## Upload
**ACTION**, File: **\sensenet\src\Services.Core\Operations\UploadActions.cs**, Class: **SenseNet.Services.Core.Operations.UploadActions**, Method: **Upload**.
### Parameters:
- **content** (Content):
- **context** (HttpContext):
- **FileLength** (long?):
- **ContentType** (string):
- **PropertyName** (string):
- **FileText** (string):
- **Overwrite** (bool?):
- **ContentId** (int?):
- **FileName** (string):
- **ChunkToken** (string):
- **UseChunk** (bool?):
- **create** (string):
- **Return value** (Task&lt;object>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.All
- **RequiredPermissions**: N.P.AddNew

## FinalizeContent
**ACTION**, File: **\sensenet\src\Services.Core\Operations\UploadActions.cs**, Class: **SenseNet.Services.Core.Operations.UploadActions**, Method: **FinalizeContent**.
### Parameters:
- **content** (Content):
- **context** (HttpContext):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.All
- **RequiredPermissions**: N.P.Save

## StartBlobUploadToParent
**ACTION**, File: **\sensenet\src\Services.Core\Operations\UploadActions.cs**, Class: **SenseNet.Services.Core.Operations.UploadActions**, Method: **StartBlobUploadToParent**.
### Parameters:
- **content** (Content): Parent content to upload the new file to.
- **context** (HttpContext): The current HttpContext if available.
- **name** (string): Name of the new (or existing) content.
- **contentType** (string): Content type of the new content.
- **fullSize** (long): Size of the whole binary.
- **fieldName** (string): Optional custom binary field name, if it is other than 'Binary'.
- **Return value** (Task&lt;string>): Chunk write token, content id and version id in a JSON object.

### Documentation:
Starts a blob write operation by loading an existing content (determined by the
requested parent resource and the provided file name) or creating a new one.
It puts the content into a multistep saving state and calls StartChunk.
This method is used by clients who intend to use the blob storage client
to write files directly to the blob storage.

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.All
- **RequiredPermissions**: N.P.AddNew

## StartBlobUpload
**ACTION**, File: **\sensenet\src\Services.Core\Operations\UploadActions.cs**, Class: **SenseNet.Services.Core.Operations.UploadActions**, Method: **StartBlobUpload**.
### Parameters:
- **content** (Content): Existing content with a binary field to upload to. In most cases this is a file content.
- **context** (HttpContext): The current HttpContext if available.
- **fullSize** (long): Size of the whole binary.
- **fieldName** (string): Optional custom binary field name, if it is other than 'Binary'.
- **Return value** (string): Chunk write token, content id and version id in a JSON object.

### Documentation:
Starts a blob write operation by putting the content into a multistep saving state
and calling StartChunk. This method is used by clients who intend to use the blob
storage client to write files directly to the blob storage.

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.All
- **RequiredPermissions**: N.P.Save

## FinalizeBlobUpload
**ACTION**, File: **\sensenet\src\Services.Core\Operations\UploadActions.cs**, Class: **SenseNet.Services.Core.Operations.UploadActions**, Method: **FinalizeBlobUpload**.
### Parameters:
- **content** (Content): A content in a multistep saving state.
- **context** (HttpContext): The current HttpContext if available.
- **token** (string): Binary token provided by the start operation before.
- **fullSize** (long): Size of the whole binary.
- **fieldName** (string): Optional custom binary field name, if it is other than 'Binary'.
- **fileName** (string): Binary file name to save into the binary metadata.
- **Return value** (Task&lt;string>):

### Documentation:
Finishes a blob write operation by calling CommitChunk and finalizing the content.
This method is used by clients who intend to use the blob storage client
to write files directly to the blob storage.

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.All
- **RequiredPermissions**: N.P.Save

## GetBinaryToken
**FUNCTION**, File: **\sensenet\src\Services.Core\Operations\UploadActions.cs**, Class: **SenseNet.Services.Core.Operations.UploadActions**, Method: **GetBinaryToken**.
### Parameters:
- **content** (Content): A content with a binary field.
- **context** (HttpContext): The current HttpContext if available.
- **fieldName** (string): Optional custom binary field name, if it is other than 'Binary'.
- **Return value** (string):

### Documentation:
Gets a token from the Content Repository that represents the binary data stored in the specified
field (by default Binary) of the provided content version.

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType
- **AllowedRoles**: N.R.All

## GetPermissionOverview
**FUNCTION**, File: **\sensenet\src\Services.Core\PermissionQuery.cs**, Class: **SenseNet.Services.Core.PermissionQuery**, Method: **GetPermissionOverview**.
### Parameters:
- **content** (Content):
- **identity** (string):
- **Return value** (object):

MISSING DOCUMENTATION


## GetMetadata
**FUNCTION**, File: **\sensenet\src\Services.Core\QueryBuilder.cs**, Class: **SenseNet.Services.Core.QueryBuilder**, Method: **GetMetadata**.
### Parameters:
- **content** (Content): Compulsory generic OData action parameter, currently not used.
- **Return value** (string): Two arrays: one with regular fields and one for aspect fields.

### Documentation:
Generic OData action method for collecting all fields of all types in the system.

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone

## GetQueries
**FUNCTION**, File: **\sensenet\src\Services.Core\QueryBuilder.cs**, Class: **SenseNet.Services.Core.QueryBuilder**, Method: **GetQueries**.
### Parameters:
- **content** (Content):
- **onlyPublic** (bool):
- **Return value** (IEnumerable&lt;Content>):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone

## SaveQuery
**ACTION**, File: **\sensenet\src\Services.Core\QueryBuilder.cs**, Class: **SenseNet.Services.Core.QueryBuilder**, Method: **SaveQuery**.
### Parameters:
- **content** (Content):
- **query** (string):
- **displayName** (string):
- **queryType** (string):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Everyone

## GetWopiData
**FUNCTION**, File: **\sensenet\src\Services.Wopi\WopiActions.cs**, Class: **SenseNet.Services.Wopi.WopiActions**, Method: **GetWopiData**.
### Parameters:
- **content** (Content):
- **context** (HttpContext):
- **action** (string):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **RequiredPermissions**: N.P.Open

## WopiOpenView
**FUNCTION**, File: **\sensenet\src\Services.Wopi\WopiActions.cs**, Class: **SenseNet.Services.Wopi.WopiActions**, Method: **WopiOpenView**, Icon: **"office"**.
### Parameters:
- **content** (Content):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **RequiredPermissions**: N.P.Open
- **RequiredPolicies**: WopiOpenView
- **Scenarios**: N.S.ContextMenu

## WopiOpenEdit
**FUNCTION**, File: **\sensenet\src\Services.Wopi\WopiActions.cs**, Class: **SenseNet.Services.Wopi.WopiActions**, Method: **WopiOpenEdit**, Icon: **"office"**.
### Parameters:
- **content** (Content):
- **Return value** (object):

MISSING DOCUMENTATION

### Filters and authorization:
- **RequiredPermissions**: N.P.Save
- **RequiredPolicies**: WopiOpenEdit
- **Scenarios**: N.S.ContextMenu

## Function1
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\ODataOperationTests.cs**, Class: **SenseNet.ODataTests.ODataOperationTests**, Method: **Function1**.
### Parameters:
- **content** (Content):
- **param1** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## Function2
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\ODataOperationTests.cs**, Class: **SenseNet.ODataTests.ODataOperationTests**, Method: **Function2**.
### Parameters:
- **content** (Content):
- **httpContext** (HttpContext):
- **request** (ODataRequest):
- **param1** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## Function3
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\ODataOperationTests.cs**, Class: **SenseNet.ODataTests.ODataOperationTests**, Method: **Function3**.
### Parameters:
- **content** (Content):
- **param1** (string):
- **param2** (string):
- **param3** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## ParameterEcho
**ACTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\ODataTestBase.cs**, Class: **SenseNet.ODataTests.ODataTestsCustomActions**, Method: **ParameterEcho**.
### Parameters:
- **content** (Content):
- **testString** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## Op1
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op1**.
### Parameters:
- **content** (Content):
- **a** (string):
- **b** (int):
- **c** (bool):
- **d** (float):
- **e** (decimal):
- **f** (double):
- **Return value** (object[]):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.User, N.CT.Group, OrgUnit
- **AllowedRoles**: N.R.Administrators, Editors
- **RequiredPermissions**: See, Run
- **RequiredPolicies**: Policy1
- **Scenarios**: Scenario1, Scenario2, Scenario3, Scenario4

## Op2
**ACTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op2**.
### Parameters:
- **content** (Content):
- **a** (string):
- **b** (int):
- **c** (bool):
- **d** (float):
- **e** (decimal):
- **f** (double):
- **Return value** (object[]):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.GenericContent, N.CT.ContentType, N.CT.File
- **AllowedRoles**: N.R.Administrators, Editors, Visitor
- **RequiredPermissions**: P1, P2, P3
- **RequiredPolicies**: Policy1, Policy2, Policy3

## Op3
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op3**.
### Parameters:
- **content** (Content):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **RequiredPolicies**: Policy2

## Op4
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op4**.
### Parameters:
- **content** (Content):
- **a** (JObject):
- **Return value** (JObject):

MISSING DOCUMENTATION


## Op5
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op5**.
### Parameters:
- **content** (Content):
- **a** (object[]):
- **Return value** (object[]):

MISSING DOCUMENTATION


## Op6
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op6**.
### Parameters:
- **content** (Content):
### Description:

Lorem ipsum ...

MISSING DOCUMENTATION


## Op7
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op7**, Icon: **"icon42"**.
### Parameters:
- **content** (Content):

MISSING DOCUMENTATION


## Op8
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op8**, Icon: **"Application"**.
### Parameters:
- **content** (Content):
### Description:

Lorem ipsum ...

MISSING DOCUMENTATION


## Op9_Renamed
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op9**, Icon: **"icon94"**.
### Parameters:
- **content** (Content):
### Description:

Lorem ipsum ...

MISSING DOCUMENTATION


## Op10
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Op10**.
### Parameters:
- **content** (Content):

MISSING DOCUMENTATION

### Filters and authorization:
- **RequiredPolicies**: ContentNameMustBeRoot

## Array_String
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Array_String**.
### Parameters:
- **content** (Content):
- **a** (string[]):
- **Return value** (string[]):

MISSING DOCUMENTATION


## Array_Int
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Array_Int**.
### Parameters:
- **content** (Content):
- **a** (int[]):
- **Return value** (int[]):

MISSING DOCUMENTATION


## Array_Long
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Array_Long**.
### Parameters:
- **content** (Content):
- **a** (long[]):
- **Return value** (long[]):

MISSING DOCUMENTATION


## Array_Bool
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Array_Bool**.
### Parameters:
- **content** (Content):
- **a** (bool[]):
- **Return value** (bool[]):

MISSING DOCUMENTATION


## Array_Float
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Array_Float**.
### Parameters:
- **content** (Content):
- **a** (float[]):
- **Return value** (float[]):

MISSING DOCUMENTATION


## Array_Double
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Array_Double**.
### Parameters:
- **content** (Content):
- **a** (double[]):
- **Return value** (double[]):

MISSING DOCUMENTATION


## Array_Decimal
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Array_Decimal**.
### Parameters:
- **content** (Content):
- **a** (decimal[]):
- **Return value** (decimal[]):

MISSING DOCUMENTATION


## Optional_Array_String
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Array_String**.
### Parameters:
- **content** (Content):
- **a** (string[]):
- **Return value** (string[]):

MISSING DOCUMENTATION


## Optional_Array_Int
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Array_Int**.
### Parameters:
- **content** (Content):
- **a** (int[]):
- **Return value** (int[]):

MISSING DOCUMENTATION


## Optional_Array_Long
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Array_Long**.
### Parameters:
- **content** (Content):
- **a** (long[]):
- **Return value** (long[]):

MISSING DOCUMENTATION


## Optional_Array_Bool
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Array_Bool**.
### Parameters:
- **content** (Content):
- **a** (bool[]):
- **Return value** (bool[]):

MISSING DOCUMENTATION


## Optional_Array_Float
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Array_Float**.
### Parameters:
- **content** (Content):
- **a** (float[]):
- **Return value** (float[]):

MISSING DOCUMENTATION


## Optional_Array_Double
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Array_Double**.
### Parameters:
- **content** (Content):
- **a** (double[]):
- **Return value** (double[]):

MISSING DOCUMENTATION


## Optional_Array_Decimal
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Array_Decimal**.
### Parameters:
- **content** (Content):
- **a** (decimal[]):
- **Return value** (decimal[]):

MISSING DOCUMENTATION


## List_String
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **List_String**.
### Parameters:
- **content** (Content):
- **a** (List&lt;string>):
- **Return value** (List&lt;string>):

MISSING DOCUMENTATION


## List_Int
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **List_Int**.
### Parameters:
- **content** (Content):
- **a** (List&lt;int>):
- **Return value** (List&lt;int>):

MISSING DOCUMENTATION


## List_Long
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **List_Long**.
### Parameters:
- **content** (Content):
- **a** (List&lt;long>):
- **Return value** (List&lt;long>):

MISSING DOCUMENTATION


## List_Bool
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **List_Bool**.
### Parameters:
- **content** (Content):
- **a** (List&lt;bool>):
- **Return value** (List&lt;bool>):

MISSING DOCUMENTATION


## List_Float
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **List_Float**.
### Parameters:
- **content** (Content):
- **a** (List&lt;float>):
- **Return value** (List&lt;float>):

MISSING DOCUMENTATION


## List_Double
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **List_Double**.
### Parameters:
- **content** (Content):
- **a** (List&lt;double>):
- **Return value** (List&lt;double>):

MISSING DOCUMENTATION


## List_Decimal
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **List_Decimal**.
### Parameters:
- **content** (Content):
- **a** (List&lt;decimal>):
- **Return value** (List&lt;decimal>):

MISSING DOCUMENTATION


## Optional_List_String
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_List_String**.
### Parameters:
- **content** (Content):
- **a** (List&lt;string>):
- **Return value** (List&lt;string>):

MISSING DOCUMENTATION


## Optional_List_Int
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_List_Int**.
### Parameters:
- **content** (Content):
- **a** (List&lt;int>):
- **Return value** (List&lt;int>):

MISSING DOCUMENTATION


## Optional_List_Long
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_List_Long**.
### Parameters:
- **content** (Content):
- **a** (List&lt;long>):
- **Return value** (List&lt;long>):

MISSING DOCUMENTATION


## Optional_List_Bool
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_List_Bool**.
### Parameters:
- **content** (Content):
- **a** (List&lt;bool>):
- **Return value** (List&lt;bool>):

MISSING DOCUMENTATION


## Optional_List_Float
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_List_Float**.
### Parameters:
- **content** (Content):
- **a** (List&lt;float>):
- **Return value** (List&lt;float>):

MISSING DOCUMENTATION


## Optional_List_Double
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_List_Double**.
### Parameters:
- **content** (Content):
- **a** (List&lt;double>):
- **Return value** (List&lt;double>):

MISSING DOCUMENTATION


## Optional_List_Decimal
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_List_Decimal**.
### Parameters:
- **content** (Content):
- **a** (List&lt;decimal>):
- **Return value** (List&lt;decimal>):

MISSING DOCUMENTATION


## Enumerable_String
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Enumerable_String**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;string>):
- **Return value** (IEnumerable&lt;string>):

MISSING DOCUMENTATION


## Enumerable_Int
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Enumerable_Int**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;int>):
- **Return value** (IEnumerable&lt;int>):

MISSING DOCUMENTATION


## Enumerable_Long
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Enumerable_Long**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;long>):
- **Return value** (IEnumerable&lt;long>):

MISSING DOCUMENTATION


## Enumerable_Bool
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Enumerable_Bool**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;bool>):
- **Return value** (IEnumerable&lt;bool>):

MISSING DOCUMENTATION


## Enumerable_Float
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Enumerable_Float**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;float>):
- **Return value** (IEnumerable&lt;float>):

MISSING DOCUMENTATION


## Enumerable_Double
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Enumerable_Double**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;double>):
- **Return value** (IEnumerable&lt;double>):

MISSING DOCUMENTATION


## Enumerable_Decimal
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Enumerable_Decimal**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;decimal>):
- **Return value** (IEnumerable&lt;decimal>):

MISSING DOCUMENTATION


## Optional_Enumerable_String
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Enumerable_String**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;string>):
- **Return value** (IEnumerable&lt;string>):

MISSING DOCUMENTATION


## Optional_Enumerable_Int
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Enumerable_Int**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;int>):
- **Return value** (IEnumerable&lt;int>):

MISSING DOCUMENTATION


## Optional_Enumerable_Long
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Enumerable_Long**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;long>):
- **Return value** (IEnumerable&lt;long>):

MISSING DOCUMENTATION


## Optional_Enumerable_Bool
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Enumerable_Bool**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;bool>):
- **Return value** (IEnumerable&lt;bool>):

MISSING DOCUMENTATION


## Optional_Enumerable_Float
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Enumerable_Float**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;float>):
- **Return value** (IEnumerable&lt;float>):

MISSING DOCUMENTATION


## Optional_Enumerable_Double
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Enumerable_Double**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;double>):
- **Return value** (IEnumerable&lt;double>):

MISSING DOCUMENTATION


## Optional_Enumerable_Decimal
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_Enumerable_Decimal**.
### Parameters:
- **content** (Content):
- **a** (IEnumerable&lt;decimal>):
- **Return value** (IEnumerable&lt;decimal>):

MISSING DOCUMENTATION


## ODataArray_String
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **ODataArray_String**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;string>):
- **Return value** (IEnumerable&lt;string>):

MISSING DOCUMENTATION


## ODataArray_Int
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **ODataArray_Int**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;int>):
- **Return value** (IEnumerable&lt;int>):

MISSING DOCUMENTATION


## ODataArray_Long
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **ODataArray_Long**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;long>):
- **Return value** (IEnumerable&lt;long>):

MISSING DOCUMENTATION


## ODataArray_Bool
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **ODataArray_Bool**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;bool>):
- **Return value** (IEnumerable&lt;bool>):

MISSING DOCUMENTATION


## ODataArray_Float
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **ODataArray_Float**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;float>):
- **Return value** (IEnumerable&lt;float>):

MISSING DOCUMENTATION


## ODataArray_Double
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **ODataArray_Double**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;double>):
- **Return value** (IEnumerable&lt;double>):

MISSING DOCUMENTATION


## ODataArray_Decimal
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **ODataArray_Decimal**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;decimal>):
- **Return value** (IEnumerable&lt;decimal>):

MISSING DOCUMENTATION


## Optional_ODataArray_String
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_ODataArray_String**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;string>):
- **Return value** (IEnumerable&lt;string>):

MISSING DOCUMENTATION


## Optional_ODataArray_Int
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_ODataArray_Int**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;int>):
- **Return value** (IEnumerable&lt;int>):

MISSING DOCUMENTATION


## Optional_ODataArray_Long
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_ODataArray_Long**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;long>):
- **Return value** (IEnumerable&lt;long>):

MISSING DOCUMENTATION


## Optional_ODataArray_Bool
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_ODataArray_Bool**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;bool>):
- **Return value** (IEnumerable&lt;bool>):

MISSING DOCUMENTATION


## Optional_ODataArray_Float
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_ODataArray_Float**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;float>):
- **Return value** (IEnumerable&lt;float>):

MISSING DOCUMENTATION


## Optional_ODataArray_Double
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_ODataArray_Double**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;double>):
- **Return value** (IEnumerable&lt;double>):

MISSING DOCUMENTATION


## Optional_ODataArray_Decimal
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_ODataArray_Decimal**.
### Parameters:
- **content** (Content):
- **a** (ODataArray&lt;decimal>):
- **Return value** (IEnumerable&lt;decimal>):

MISSING DOCUMENTATION


## ODataArray_TestItemArray
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **ODataArray_TestItemArray**.
### Parameters:
- **content** (Content):
- **a** (ODataArrayTests.TestItemArray):
- **Return value** (IEnumerable&lt;ODataArrayTests.TestItem>):

MISSING DOCUMENTATION


## Optional_ODataArray_TestItemArray
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Optional_ODataArray_TestItemArray**.
### Parameters:
- **content** (Content):
- **a** (ODataArrayTests.TestItemArray):
- **Return value** (IEnumerable&lt;ODataArrayTests.TestItem>):

MISSING DOCUMENTATION


## Authorization_None
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **Authorization_None**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## AuthorizedByRole_Administrators
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **AuthorizedByRole_Administrators**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Administrators

## AuthorizedByRole_Visitor
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **AuthorizedByRole_Visitor**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.Visitor

## AuthorizedByRole_All
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **AuthorizedByRole_All**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.All

## AuthorizedByRole_All2
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **AuthorizedByRole_All2**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: All

## AuthorizedByPermission
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **AuthorizedByPermission**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **RequiredPermissions**: N.P.Open

## AuthorizedByPolicy
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **AuthorizedByPolicy**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **RequiredPolicies**: VisitorAllowed, AdminDenied

## AuthorizedByPolicy_Error
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **AuthorizedByPolicy_Error**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **RequiredPolicies**: UnknownPolicy

## WrongMethodName
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **WrongMethodName**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## SensitiveMethodName
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **SensitiveMethodName**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## AsyncMethod
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **AsyncMethod**.
### Parameters:
- **content** (Content):
- **a** (string):
- **Return value** (Task&lt;string>):

MISSING DOCUMENTATION


## FunctionForQueryStringTest
**FUNCTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **FunctionForQueryStringTest**.
### Parameters:
- **content** (Content):
- **a** (string):
- **b** (int):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.All

## ActionForQueryStringTest
**ACTION**, File: **\sensenet\src\Tests\SenseNet.ODataTests\TestTypes.cs**, Class: **SenseNet.ODataTests.TestOperations**, Method: **ActionForQueryStringTest**.
### Parameters:
- **content** (Content):
- **a** (string):
- **b** (int):
- **Return value** (string):

MISSING DOCUMENTATION

### Filters and authorization:
- **AllowedRoles**: N.R.All

## ParameterEcho
**ACTION**, File: **\sensenet\src\Tests\SenseNet.Services.OData.Tests\ODataTests_legacy.cs**, Class: **SenseNet.Services.OData.Tests.ODataTestsCustomActions**, Method: **ParameterEcho**.
### Parameters:
- **content** (Content):
- **testString** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## IsFilled
**FUNCTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\ContentHandlers\SurveyList.cs**, Class: **SenseNet.Portal.Portlets.ContentHandlers.SurveyList**, Method: **IsFilled**.
### Parameters:
- **content** (Content): SurveyList content.
- **Return value** (object):

### Documentation:
Checks whether the provided survey has already been filled at least one time by the current user.


## GetTags
**FUNCTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\Portlets\Tagging\TagManagerApi.cs**, Class: **SenseNet.Portal.Portlets.TagManagerApi**, Method: **GetTags**.
### Parameters:
- **content** (Content):
- **query** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## AddTag
**ACTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\Portlets\Tagging\TagManagerApi.cs**, Class: **SenseNet.Portal.Portlets.TagManagerApi**, Method: **AddTag**.
### Parameters:
- **dummy** (Content):
- **tag** (string):
- **id** (int):

MISSING DOCUMENTATION


## GetPosts
**FUNCTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\Wall\WallApi.cs**, Class: **SenseNet.Portal.Wall.WallApi**, Method: **GetPosts**.
### Parameters:
- **content** (Content): actual workspace
- **skip** (int): how many posts to skip
- **pageSize** (int): size of the page
- **rnd** (string):
- **Return value** (string):

### Documentation:
Gets post from the given workspace using paging


## CreatePost
**ACTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\Wall\WallApi.cs**, Class: **SenseNet.Portal.Wall.WallApi**, Method: **CreatePost**.
### Parameters:
- **content** (Content):
- **text** (string):
- **Return value** (string):

### Documentation:
Creates a manually written Post in the Content Repository and returns Post markup.


## CreateComment
**ACTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\Wall\WallApi.cs**, Class: **SenseNet.Portal.Wall.WallApi**, Method: **CreateComment**.
### Parameters:
- **content** (Content):
- **postId** (string):
- **text** (string):
- **Return value** (string):

### Documentation:
Creates a comment for a Post and returns Comment markup.


## Like
**ACTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\Wall\WallApi.cs**, Class: **SenseNet.Portal.Wall.WallApi**, Method: **Like**.
### Parameters:
- **content** (Content):
- **itemId** (string):
- **fullMarkup** (bool):
- **Return value** (string):

### Documentation:
Creates a like for a Post/Comment and returns Like markup.


## Unlike
**ACTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\Wall\WallApi.cs**, Class: **SenseNet.Portal.Wall.WallApi**, Method: **Unlike**.
### Parameters:
- **content** (Content):
- **itemId** (string):
- **fullMarkup** (bool):
- **Return value** (string):

### Documentation:
Deletes a like for a Post/Comment and returns Like markup.


## GetLikeList
**FUNCTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\Wall\WallApi.cs**, Class: **SenseNet.Portal.Wall.WallApi**, Method: **GetLikeList**.
### Parameters:
- **content** (Content):
- **itemId** (string):
- **rnd** (string):
- **Return value** (string):

### Documentation:
Returns full markup of like list corresponding to itemId


## Share
**ACTION**, File: **\sn-compatibility-pack\src\SenseNet.Compatibility\Wall\WallApi.cs**, Class: **SenseNet.Portal.Wall.WallApi**, Method: **Share**.
### Parameters:
- **content** (Content):
- **itemId** (int):
- **text** (string):
- **Return value** (string):

### Documentation:
Shares a post.


## RegisterUser
**ACTION**, File: **\sn-demo\src\SenseNet.Demo\Actions.cs**, Class: **SenseNet.Demo.Actions**, Method: **RegisterUser**.
### Parameters:
- **content** (Content):
- **email** (string):
- **password** (string):
- **Return value** (Content):

MISSING DOCUMENTATION


## ValidateCredentialsExperimental
**ACTION**, File: **\sn-identity\src\SenseNet.Identity.Experimental\IdentityOperations.cs**, Class: **SenseNet.Identity.Experimental.IdentityOperations**, Method: **ValidateCredentialsExperimental**.
### Parameters:
- **content** (Content):
- **context** (HttpContext):
- **userName** (string):
- **password** (string):
- **Return value** (Task&lt;object>):

MISSING DOCUMENTATION

### Filters and authorization:
- **ContentTypes**: N.CT.PortalRoot
- **AllowedRoles**: N.R.All

## GetPreviewComments
**FUNCTION**, File: **\sn-preview\src\Preview\Preview.Controller\PreviewCommentActions.cs**, Class: **SenseNet.Preview.Controller.PreviewCommentActions**, Method: **GetPreviewComments**.
### Parameters:
- **content** (Content):
- **page** (int):
- **Return value** (object):

MISSING DOCUMENTATION


## AddPreviewComment
**ACTION**, File: **\sn-preview\src\Preview\Preview.Controller\PreviewCommentActions.cs**, Class: **SenseNet.Preview.Controller.PreviewCommentActions**, Method: **AddPreviewComment**.
### Parameters:
- **content** (Content):
- **page** (int):
- **x** (double):
- **y** (double):
- **text** (string):
- **Return value** (object):

MISSING DOCUMENTATION


## DeletePreviewComment
**ACTION**, File: **\sn-preview\src\Preview\Preview.Controller\PreviewCommentActions.cs**, Class: **SenseNet.Preview.Controller.PreviewCommentActions**, Method: **DeletePreviewComment**.
### Parameters:
- **content** (Content):
- **id** (string):
- **Return value** (object):

MISSING DOCUMENTATION


## GetActions
**FUNCTION**, File: **\sn-webpages\src\WebPages\ApplicationModel\SmartAppHelperApi.cs**, Class: **SenseNet.Portal.ApplicationModel.SmartAppHelperApi**, Method: **GetActions**.
### Parameters:
- **content** (Content):
- **scenario** (string):
- **back** (string):
- **parameters** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## GetChildren
**FUNCTION**, File: **\sn-webpages\src\WebPages\ContentStore\ContentStoreApi.cs**, Class: **SenseNet.Portal.ContentStore.ContentStoreApi**, Method: **GetChildren**.
### Parameters:
- **content** (Content):
- **rnd** (string):
- **contentTypes** (string):
- **simpleContent** (bool):
- **Return value** (string):

MISSING DOCUMENTATION


## GetTreeNodeChildren
**FUNCTION**, File: **\sn-webpages\src\WebPages\ContentStore\ContentStoreApi.cs**, Class: **SenseNet.Portal.ContentStore.ContentStoreApi**, Method: **GetTreeNodeChildren**.
### Parameters:
- **content** (Content):
- **path** (string):
- **rootonly** (string):
- **rnd** (string):
- **simpleContent** (bool):
- **Return value** (string):

MISSING DOCUMENTATION


## GetTreeNodeAllChildren
**FUNCTION**, File: **\sn-webpages\src\WebPages\ContentStore\ContentStoreApi.cs**, Class: **SenseNet.Portal.ContentStore.ContentStoreApi**, Method: **GetTreeNodeAllChildren**.
### Parameters:
- **content** (Content):
- **path** (string):
- **rootonly** (string):
- **rnd** (string):
- **simpleContent** (bool):
- **Return value** (string):

MISSING DOCUMENTATION


## IsLuceneQuery
**FUNCTION**, File: **\sn-webpages\src\WebPages\ContentStore\ContentStoreApi.cs**, Class: **SenseNet.Portal.ContentStore.ContentStoreApi**, Method: **IsLuceneQuery**.
### Parameters:
- **content** (Content):
- **rnd** (string):
- **Return value** (bool):

MISSING DOCUMENTATION


## IsContentQuery
**FUNCTION**, File: **\sn-webpages\src\WebPages\ContentStore\ContentStoreApi.cs**, Class: **SenseNet.Portal.ContentStore.ContentStoreApi**, Method: **IsContentQuery**.
### Parameters:
- **content** (Content):
- **rnd** (string):
- **Return value** (bool):

MISSING DOCUMENTATION


## Search
**FUNCTION**, File: **\sn-webpages\src\WebPages\ContentStore\ContentStoreApi.cs**, Class: **SenseNet.Portal.ContentStore.ContentStoreApi**, Method: **Search**.
### Parameters:
- **content** (Content):
- **searchStr** (string):
- **searchRoot** (string):
- **contentTypes** (string):
- **rnd** (string):
- **simpleContent** (bool):
- **Return value** (object[]):

MISSING DOCUMENTATION


## SetView
**FUNCTION**, File: **\sn-webpages\src\WebPages\UI\ContentListViews\ContentListViewHelperApi.cs**, Class: **SenseNet.Portal.UI.ContentListViews.ContentListViewHelperApi**, Method: **SetView**.
### Parameters:
- **content** (Content):
- **uiContextId** (string):
- **view** (string):
- **back** (string):

MISSING DOCUMENTATION


## CopyViewLocal
**FUNCTION**, File: **\sn-webpages\src\WebPages\UI\ContentListViews\ContentListViewHelperApi.cs**, Class: **SenseNet.Portal.UI.ContentListViews.ContentListViewHelperApi**, Method: **CopyViewLocal**.
### Parameters:
- **content** (Content):
- **listPath** (string):
- **viewPath** (string):
- **back** (string):

MISSING DOCUMENTATION


## GetUserUploads
**FUNCTION**, File: **\sn-webpages\src\WebPages\UI\Controls\DialogUploadApi.cs**, Class: **SenseNet.Portal.UI.Controls.DialogUploadApi**, Method: **GetUserUploads**.
### Parameters:
- **content** (cr.Content):
- **startUploadDate** (string):
- **path** (string):
- **rnd** (string):
- **Return value** (string):

MISSING DOCUMENTATION


## AddMembers
**ACTION**, File: **\sn-workspaces\src\SenseNet.Workspaces\WorkspaceApi.cs**, Class: **SenseNet.Portal.Workspaces.WorkspaceApi**, Method: **AddMembers**.
### Parameters:
- **dummyContent** (Content):
- **data** (string):

MISSING DOCUMENTATION


## RemoveMember
**ACTION**, File: **\sn-workspaces\src\SenseNet.Workspaces\WorkspaceApi.cs**, Class: **SenseNet.Portal.Workspaces.WorkspaceApi**, Method: **RemoveMember**.
### Parameters:
- **content** (Content):
- **groupId** (int):
- **memberId** (int):

MISSING DOCUMENTATION


