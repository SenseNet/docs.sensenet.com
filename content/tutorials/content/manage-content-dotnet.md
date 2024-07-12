---
title: Manage content using the .Net client
metaTitle: "sensenet Tutorials - Manage content using the .Net client"
metaDescription: "This tutorial shows you how to manage content in the sensenet repository using the .Net client API."
---

In this tutorial we will show you examples of managing content items using the .Net client API. As a prerequisite we assume you already have a [console application](/tutorials/getting-started/getting-started-dotnet) or a [web application](/tutorials/getting-started/getting-started-mvc-client) set up with the necessary services and authentication.

## Using the built-in Content types
In many cases it is sufficient to use the basic `Content` type for managing content in the repository. If you simply want to collect data or manipulate basic fields, you can use the default methods in the repository API that work with the `Content` type.

This means you **do not have to create models** for your content types if you do not want to. It just makes complex business scenarios easier and cleaner when working with strongly typed properties.

> We also plan to offer built-in content types for well-known business types in the future (like `User` or `Group`). Please check out our built-in types first before creating your custom model.

## Creating a strongly typed model
In this article we will mainly use the strongly typed (generic) methods of the repository API. To see examples for the most common basic Content API, check out the [API docs documentation](/api-docs/basic-concepts).

To create a client model, please create it in the following form:

- A class that inherits from `Content` (or one of its descendants).
- Has a single constructor with at least the parameters required by the base type (currently `IRestCaller` and `ILogger<T>`). All other parameters must be dependency injection-compatible, because we register these models in DI.
- Public read/write properties for field data binding (the data binding works with name equality).

This is the model used in the examples below:

```csharp
public class Memo : Content
{
    public Memo(IRestCaller restCaller, ILogger<Memo> logger) : base(restCaller, logger) { }

    public string Description { get; set; }
    public DateTime Date { get; set; }
    public string[] MemoType { get; set; }
    public List<Content> SeeAlso { get; set; }
}
```

## Registering the model
#### Registering a global model
This is the most common way of registering models. This method registers a model that is able to handle sensenet repository content types with the same name.

```csharp
services
    .AddSenseNetClient()
    .RegisterGlobalContentType<Memo>()
    //...
```

Registering a global model for a different content type name:

```csharp
    .RegisterGlobalContentType<MyMemo>("Memo")
```

#### Registering a local model
In case you are working with **multiple repositories** (e.g. when writing a synchronizer tool) and the types in those repositories are not compatible, you may need to register different models for different repositories. You can do so using the following API:

```csharp
services
    .AddSenseNetClient()
    .ConfigureSenseNetRepository(repositoryOptions =>
    {
        //...
    }, types =>
    {
        types.Add<Memo>();
    });
```

Registering a local model for a different content type name:

```csharp
    types.Add<MyMemo>("Memo")
```

## Managing content
### Creating a content
Create a content using a strongly typed model in 2 steps. The content type should be registered as seen above.

1. Call the creation method on the desired repository with these parameters:
    - parent path (this container must already exist on the server)
    - content type name or null if it is the same as the type name of the model
    - content name (optional)
2. Save the content

```csharp
var newMemo = repository.CreateContent<Memo>("/Root/Content/MyMemos", null, "Memo-0001");
await newMemo.SaveAsync(cancel).ConfigureAwait(false);
```
### Loading a content
#### Load by path

```csharp
var memo = await repository.LoadContentAsync<Memo>("/Root/Content/MyMemos/Memo-0001", cancel);
```

#### Load by Id

```csharp
var memo = await repository.LoadContentAsync<Memo>(1689, cancel);
```

#### Load with customizing the response
It is recommended that you load only the necessary fields from the server - e.g. the ones you want to work with - instead of downloading everything. This will save you bandwidth and memory too.

To achieve this, you can make use of the `select` and `expand` features of the API as in the following example:

```csharp
var memo = await repository.LoadContentAsync<Memo>(new LoadContentRequest
{
    Path = "/Root/Content/MyMemos/Memo-0001",
    Expand = new[] {"SeeAlso"},
    Select = new[] {"Id", "Path", "Type", "Description", "SeeAlso/Id", "SeeAlso/Type"},
}, cancel).ConfigureAwait(false);
```

### Loading or querying multiple items

The starting point of these operations is a single content defined in the request object which serves as the root of the query. But loading a collection and querying contents have different scopes:

- **collection loading**: applies only to direct children
- **querying** applies to the whole subtree

This means `LoadCollectionAsync` always applies only to children even if `ContentQuery` is used in the request.

> Note: the following methods may throw an `InvalidCastException` if the result list contains types that are different from the one provided as the `<T>` parameter. It is the responsibility of the developer to construct a query (e.g. by filtering for type) that loads only the appropriate contents.

#### Loading a collection

```csharp
var lastMemos = await repository.LoadCollectionAsync<Memo>(new LoadCollectionRequest
{
    Path = "/Root/Content/MyMemos",
    Expand = new[] {"SeeAlso"},
    Select = new[] {"Id", "Path", "Type", "Description", "SeeAlso/Id", "SeeAlso/Type"},
    OrderBy = new[] {"Name desc"},
    Top = 10
}, cancel).ConfigureAwait(false);
```
#### Getting the count of a collection

> Note: in this case most of the request parameters (e.g. OrderBy, Select, Expand etc.) are ignored.

```csharp
var memoCount = await repository.GetContentCountAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/MyMemos",
}, cancel).ConfigureAwait(false);
```

#### Querying contents

```csharp
var memos = await repository.QueryAsync<Memo>(new QueryContentRequest
{
    ContentQuery = "+TypeIs:Memo",
    Top = 5,
    Skip = 10,
    OrderBy = new[] {"Name desc"},
    Expand = new[] {"CreatedBy"},
    Select = new[] {"Id", "Path", "Type", "Description", "SeeAlso/Id", "SeeAlso/Type"},
}, cancel).ConfigureAwait(false);
```

#### Custom requests
If there is no dedicated API for a certain request, you can use one of the following all-purpose methods to send a custom request to the server.

Calling an operation with a custom strongly-typed result:

```csharp
var request = new ODataRequest { ContentId = 42, ActionName = "CustomAction" };
var customObject = await repository.GetResponseAsync<CustomObject>(request, HttpMethod.Get, default);
```

A JSON response:

```csharp
var request = new ODataRequest {ContentId = 42, ActionName = "CustomAction" };
var jsonResult = await repository.GetResponseJsonAsync(request, HttpMethod.Get, default);
```

Or a string response:

```csharp
var request = new ODataRequest(repository.Server)
{
    Select = new []{ "Version" },
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    ActionName = "Versions",
};
var result = await repository.GetResponseStringAsync(request, HttpMethod.Get, cancel);
```

## Working with Content actions
Every content has its own [actions and functions](/api-docs/basic-concepts/09-actions) that you can call from the client. The repository API lets you call these actions by name and pass parameters to them. The result can be a strongly typed object that represents the JSON response returned by the repository.

### Calling a function
A function is an operation that is called using the ```GET``` HTTP method and does not change the state of the repository.

```csharp
var request = new OperationRequest()
{
	ContentId = 2,
	OperationName = "GetPermissions"
};
var result = await repository.InvokeFunctionAsync<GetPermissionsResponse>(request, CancellationToken.None);
```

### Calling an action
An action is an operation that is called using the ```POST``` HTTP method and may change the state of the repository.

```csharp
var postData = new { param1 = "value" };
var request = new OperationRequest()
{
	ContentId = 2,
	OperationName = "ActionName",
	PostData = postData
};

await repository.InvokeActionAsync(request, CancellationToken.None);
```

### Handling custom operation responses
There is an API for handling custom operation responses. You can use it to call an operation and get the response as a string. You can also pass an HTTP method to the API.

```csharp
var request = new OperationRequest()
{
	ContentId = 2,
	OperationName = "GetPermissions"
};

await repository.ProcessOperationResponseAsync(request, HttpMethod.Get,
	(response) => {
		// process response string
	}, CancellationToken.None);
```

## Advanced data binding in Models
If you create a model class for your type, most of the properties will be simple types (e.g. an integer or a string). There are cases however when a content field is more complex. In this section you will see examples for those cases and how can developers make field data conversions.

### Reference fields
In case of **single reference** fields (e.g. `Manager` or `CreatedBy`) use the Content type or one of its descendants for the property type.

In case of **multi reference** fields use one of the following types (`T` is Content or one of its descendants):

- `T[]`
- `IEnumerable<T>`
- `List<T>`

### Custom object

#### Automatic conversion
If the JSON response and the target object can be matched with simple serialization, the conversion is done implicitly. Let's take the following response as an example:

```json
{
  "d": {
    "CustomField": {
      "property1": "value1",
      "property2": 42
    },
  }
}
```
The type used in the strongly typed model's property could be the following.

> Note that the property names are modified declaratively.

```csharp
private class CustomPropertyType
{
    [JsonProperty(PropertyName = "property1")]
    public string Property1 { get; set; }
    [JsonProperty(PropertyName = "property2")]
    public int Property2 { get; set; }
}
```
The model:

```csharp
private class TestContent_CustomProperties : Content
{
    /*...constructor and other properties...*/

    public CustomPropertyType CustomField { get; set; }
}
```
#### Explicit conversion
If the field in the JSON response and the property in the model do not match, you need to write an explicit conversion. That means you need to implement the `TryConvertToProperty` and `TryConvertFromProperty` methods in the model class.

JSON response (string representation of an integer and a string/int dictionary):

```json
{
  "d": {
    "BoolField": "0",
    "DictionaryField": "Name1:111,Name2:222,Name3:333"
  }
}
```

Model properties:

```csharp
public bool BoolField { get; set; }
public Dictionary<string, int> DictionaryField { get; set; }
```

The **conversion methods** in the model class: return true if this overload can convert the value, otherwise return the result of the base method.

```csharp
// Convert from JSON response to model property
protected override bool TryConvertToProperty(string propertyName, JToken jsonValue, out object propertyValue)
{
    if (jsonValue != null)
    {
        if (propertyName == nameof(Field_StringToBool))
        {
            var stringValue = jsonValue.Value<string>();
            propertyValue = !string.IsNullOrEmpty(stringValue) && "0" != stringValue;
            return true;
        }

        if (propertyName == nameof(Field_StringToDictionary))
        {
            var stringValue = jsonValue.Value<string>();
            if (stringValue != null)
            {
                propertyValue = new Dictionary<string, int>(stringValue.Split(',').Select(x =>
                {
                    var split = x.Split(':');
                    var name = split[0].Trim();
                    var value = int.Parse(split[1]);
                    return new KeyValuePair<string, int>(name, value);
                }));
                return true;
            }
        }
    }

    return base.TryConvertToProperty(propertyName, jsonValue, out propertyValue);
}

// Converts the property value to a string representation that can be sent to the server
protected override bool TryConvertFromProperty(string propertyName, out object convertedValue)
{
    if (propertyName == nameof(Field_StringToBool))
    {
        convertedValue = Field_StringToBool ? "1" : "0";
        return true;
    }
    if (propertyName == nameof(Field_StringToDictionary))
    {
        convertedValue = string.Join(",", Field_StringToDictionary
            // Ordering is needed for tests
            .OrderBy(x => x.Key)
            .Select(x => $"{x.Key}:{x.Value}"));
        return true;
    }
    return base.TryConvertFromProperty(propertyName, out convertedValue);
}
```
