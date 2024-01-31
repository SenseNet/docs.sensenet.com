---
title: "Backup and restore"
metaTitle: "sensenet Tutorials - Backup and restore"
metaDescription: "sensenet Tutorials - Backup and restore the repository"
---

When maintaining a sensenet repository, it is important to have a backup of your content. This article describes how to create a backup of the repository and how to restore it if needed.

## Backup
Backing up the repository means creating a copy of the following things:

1. index
2. database

Technically the database would be enough as it contains all the information to build a completely new index. However, it is much faster to restore the index from a backup than to rebuild it from the database - especially in case of a large repository.

The order is important: **first you need to backup the index, then the database**. If you do it the other way around, the content operations that happen between the two backups will not be included in the db backup and may lead to a corrupt index.

Depending on the load on your site and the time gap between the db and index backups, there may be a difference between the content in the database and the index. This is normal and next time you start the site after a restore, the index will catch up and will be extended with the missing index documents automatically.

### Backup the index
sensenet is able to work with a local index, or in a network load balanced environment with multiple web nodes and a central search service. The backup process is different in these two cases.

#### Local index
In case of a local index you need to backup the index folder manually. This requires **stopping the repository app** first, then copying the index folder to a safe place. The index folder is located in the App_Data folder of the site.

> Stopping the site is important so that the index does not change while you are copying it. If you do not stop the site, the index may become corrupt and you will not be able to restore it.

#### Search service index
In this more advanced architecture there is a central search service that maintains the index. We offer an **OData REST API** in the repository for starting and monitoring index backup operations in this scenario. You can call the following actions on the `/Root` content:

- [BackupIndex](/restapi/backupindex): starts a backup operation. Calling it multiple times while a backup is still running will not create multiple backups, it will just return the status of the running backup.
- [QueryIndexBackup](/restapi/queryindexbackup): returns the status of the running backup operation and a history of past operations.
- [CancelIndexBackup](/restapi/cancelindexbackup): cancels a running backup operation.

### Backup the database
sensenet does not have a dedicated API or tool for creating a database backup. You can use any tool that is capable of creating a backup of a SQL Server database.

## Restore
When you have a backup of the index and the database, you can restore the repository to the state it was in when you created the backup. In contrast to the backup process, the repository should be fully stopped during the restore process.

Restoring the database works the same way as in any other SQL Server database. You can use any tool that is capable of restoring a SQL Server database. Restoring the index means copying the index folder back to the App_Data folder of the site.

After restoring these components you can restart the site. If there was a huge time gap between the index and database backups, the index will need some time to catch up with the database.

### Restoring without an index
If you only have a database backup, you can still restore the repository. In this case the index will be rebuilt from the database. This is a much slower process than restoring the index from a backup, but it is still possible. Just start the site with an empty index folder and the index will be rebuilt automatically.
