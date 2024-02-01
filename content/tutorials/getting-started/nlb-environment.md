---
title: "sensenet in a Network Load Balanced environment"
metaTitle: "sensenet Tutorials - Network Load Balanced environment"
metaDescription: "sensenet Tutorials - Configure sensenet in a Network Load Balanced environment"
---

If you are using sensenet in an [advanced app architecture](/tutorials/getting-started/02-advanced-application-architecture) with multiple repository services, you need to configure the different components a bit differently to work together. This article describes how to configure the components of a sensenet application in a network load balanced environment.

## Components
You'll need to configure the following components:
- **IdentityServer** (authentication service, single instance)
- **Search service** (single instance)
- **sensenet application** (repository service, multiple instances)
- **RabbitMQ** service for messaging

> Configuring the MS SQL Server database is not covered in this article.

## Communication
### General and security messages
For the sensenet **repository instances** to work together, they need to communicate with each other. We recommend using **RabbitMQ** for this purpose. The repository instances use RabbitMQ to send messages to each other. These messages are used to synchronize the cache between the instances. There are two kinds of connections between the repository instances:

- cache invalidation and other system messages
- security store messages

These two types of messages are sent on different RabbitMQ exchanges that are configured separately. See the following sections for details.

### Indexing and query messages
In case of using a **Search Service** there is also a **gRPC connection** from the repository instances to the Search Service. This connection is used to send indexing and search requests to the Search Service and it requires an HTTP/2 connection.

## Configuration
In this section we go through each component and describe how to configure it.

### Identity server
The Identity Server is the authentication service of sensenet. It is responsible for authenticating users and providing access tokens for the repository service. It is a separate service that requires its own configuration. Most importantly it needs to know about the repository you want to connect to.

You have to configure all the repository urls so that the identity server recognizes them. You'll have to configure urls for every client id. For example for users to be able to log in to the repository admin user interface using your urls, you can provide them for the *adminui* client like this:

```txt
sensenet__Clients__adminui__RepositoryHosts__0__PublicHost="https://host1.example.com"
sensenet__Clients__adminui__RepositoryHosts__1__PublicHost="https://host2.example.com"
```

For more information about configuring the Identity Server, see the [Identity Server configuration](/api-docs/configuration/identityserver) article.

### Search Service
The search service requires an access to the repository database. It also needs to be able to receive indexing and search requests from the repository instances. The following sections describe how to configure the different components of the search service.

Please note that the MessageExchange value must be the same as the one configured for the repository instances. It also has to be unique for each sensenet application in case you are using the same RabbitMQ service for multiple sensenet applications.

```json
{
  "ConnectionStrings": {
    "SecurityStorage": "..."
  },
  "sensenet": {
    "security": {
      "rabbitmq": {
        "ServiceUrl": "amqps://user:password@host:5671/",
        "MessageExchange": "snsecurity-myapp"
      }
    }
  }
}
```

The same configuration in an environment variable format:

```txt
ConnectionStrings__SecurityStorage="..."
sensenet__security__rabbitmq__ServiceUrl="amqps://user:password@host:5671/"
sensenet__security__rabbitmq__MessageExchange="snsecurity-myapp"
```

#### Authentication
The Search Service is an internal service that is not accessible from the outside world. It is only used by the repository to provide indexing and search functionality. It does not require any authentication and must not be accessible from outside.

### sensenet repository instances
In a Network Load Balanced environment you'll have multiple repository instances. These instances need to be configured to work together. This section describes how to configure the different features of the repository service.

Please note that you have to configure RabbitMQ for sending system and security messages in two different places. The security *MessageExchange* value must be the same as the one configured for the search service. The general message exchange value (dedicated to system messages) has to be *identical on all sensenet instances*, but must be unique for the application.

You also have to provide the address for the Search service so that the repository can send indexing and query requests through gRPC.

```json
{
  "ConnectionStrings": {
    "SnCrMsSql": "..."
  },
  "sensenet": {
    "security": {
      "rabbitmq": {
        "ServiceUrl": "amqps://user:password@host:5671/",
        "MessageExchange": "snsecurity-myapp"
      }
    },
    "rabbitmq": {
      "ServiceUrl": "amqps://user:password@host:5671/",
      "MessageExchange": "snmessaging-myapp"
    },
    "search": {
      "service": {
        "ServiceAddress": "https://searchservice.example.com",
        "ValidateServerCertificate": true,
        "ChannelOptions": { }
      }
    }
  }
}
```

> ValidateServerCertificate should only be set to false in development environments where you use self-signed certificates. In production environments you should always use a valid certificate and set this value to true.

In case you want to access the individual repository instances on dedicated urls (e.g. *host1*.example.com, *host2*.example.com), you have to set these different urls in the configuration for each instance. This is also the case when you install sensenet repository instances on a local machine with localhost and different ports.

```json
{
  "sensenet":{
    "authentication": {
      "authority": "https://identityserver.example.com",
      "repositoryUrl": "https://host1.example.com"
    }
  }
}
```

The same configuration in an environment variable format:

```txt
ConnectionStrings__SnCrMsSql="..."
sensenet__security__rabbitmq__ServiceUrl="amqps://user:password@host:5671/"
sensenet__security__rabbitmq__MessageExchange="snsecurity-myapp"
sensenet__rabbitmq__ServiceUrl="amqps://user:password@host:5671/"
sensenet__rabbitmq__MessageExchange="snmessaging-myapp"
sensenet__search__service__ServiceAddress="https://searchservice.example.com"
sensenet__search__service__ValidateServerCertificate=true
sensenet__authentication__authority="https://identityserver.example.com"
sensenet__authentication__repositoryUrl="https://host1.example.com"
```

