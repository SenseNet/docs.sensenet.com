---
title: Manage content using the .Net client
metaTitle: "sensenet Tutorials - Manage content using the .Net client"
metaDescription: "This tutorial shows you how to manage content in the sensenet repository using the .Net client API."
---

In this tutorial we will show you examples of managing content items using the .Net client API. As a prerequisite we assume you already have a [console application]("/tutorials/getting-started/getting-started-dotnet") or a [web application]("/tutorials/getting-started/getting-started-mvc-client") set up with the necessary services and authentication.

-- coming soon

-- under construction

### Writing a strongly typed model
#### Strongly typed model definition
- Class inherited from Content or a Content descendant.
- Required one ctor with minimal parameters: IRestCaller, ILogger<T> when T is the model's type.
- Public, non-static, read/write properties for data binding (the data binding works with name equality)

This is the model used in the examples below
```csharp
internal class Memo : Content
{
    public Memo(IRestCaller restCaller, ILogger<Content> logger) : base(restCaller, logger) { }

    public string Description { get; set; }
    public DateTime Date { get; set; }
    public string[] MemoType { get; set; }
    public List<Content> SeeAlso { get; set; }
}

```

### Registering a strongly typed model
Register a global strongly typed model:
```csharp
services
    .AddSenseNetClient()
    .RegisterGlobalContentType<Memo>()
    //...
```

Register a model locally:
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

Register a **global** model with different content type name
```csharp
    .RegisterGlobalContentType<MyMemo>("Memo")
```

Register a **local** model with different content type name
```csharp
    types.Add<MyMemo>("Memo")
```

## Using models
### Creation
Create a strongly typed model on the server in 2 step. The content type should be registered globally or locally in the currently used repository.
1. Call the creation method on the desired repository with these parameters:
    - parent path of the existing server content.
    - content type name or null if it equals with the type name of the model.
    - content name.
2. Save the content
```csharp
var newMemo = repository.CreateContent<Memo>("/Root/Content/MyMemos", null "Memo-0001");
await newMemo.SaveAsync(cancel).ConfigureAwait(false);
```
### Loading entry
Load an entry...

...by path
```csharp
var memo = await repository.LoadContentAsync<Memo>("/Root/Content/MyMemos/Memo-0001", cancel);
```
...by Id
```csharp
var memo = await repository.LoadContentAsync<Memo>(1689, cancel);
```
...with total control
```csharp
var memo = await repository.LoadContentAsync<Memo>(new LoadContentRequest
{
    Path = "/Root/Content/MyMemos/Memo-0001",
    Expand = new[] {"SeeAlso"},
    Select = new[] {"Id", "Path", "Type", "Description", "SeeAlso/Id", "SeeAlso/Type"},
}, cancel).ConfigureAwait(false);
```
### Loading or querying entries
The starting point of these operations a single content defined in the request object.
But loading a collection and querying contents have different scopes: the collection loading applies only to the children (InFolder) the querying applies to the whole subtree (InTree). 

Note: LoadCollectionAsync always applies only to the children even if ContentQuery is used in the request.

Load a collection:
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
Get collection count (no type parameter).
There are many irrelevant property in the request e.g. OrderBy, Select, Expand etc.
```csharp
var x = await repository.GetContentCountAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/MyMemos",
}, cancel).ConfigureAwait(false);
```
Query contents. Can throw InvalidCastException.
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
## Advanced data binding in Models
Use integral types for simple fields.

Use Content or descendants for single references.

Use the followings for multireferences (T is Content or descendants)
- T[]
- IEnumerable<T>
- List<T>

A property with any other type needs a conversion mechanism.

#### Custom object that has configurable serialization.
There is no necessary additional conversion if the JSON response and the target object can be matched with simple serialization modifications.
In this case, the conversion is done implicitly.

JSON response
```text
{
  "d": {
    "CustomField": {
      "property1": "value1",
      "property2": 42
    },
  }
}
```
The type used in the strongly typed model's property. Note that the property name are modified declaratively.
```csharp
private class CustomPropertyType
{
    [JsonProperty(PropertyName = "property1")]
    public string Property1 { get; set; }
    [JsonProperty(PropertyName = "property2")]
    public int Property2 { get; set; }
}
```
The model
```csharp
private class TestContent_CustomProperties : Content
{
    public TestContent_CustomProperties(IRestCaller restCaller, ILogger<Content> logger) : base(restCaller, logger) { }

    public CustomPropertyType CustomField { get; set; }
}
```
#### Explicit conversions.
If the field in the JSON response and the property in the model do not match, need to write explicit conversion.

JSON response (string representation of an integer and a string/int dictionary).
```text
{
  "d": {
    "BoolField: "0",
    "DictionaryField": "Name1:111,Name2:222,Name3:333"
  }
}
```
Part of the model
```csharp
public bool BoolField { get; set; }
public Dictionary<string, int> DictionaryField { get; set; }
```
The conversion methods in the model (the Content overrides)

Typical Chain of Responsibility pattern: return true if this overload can convert, otherwise return the result of the base.
```csharp
protected override bool TryConvertToProperty(string propertyName, JToken jsonValue, out object propertyValue)
{
    if (jsonValue == null)
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

protected override bool TryConvertFromProperty(string propertyName, out object convertedValue)
{
    if (propertyName == nameof(Field_StringToBool))
    {
        convertedValue = Field_StringToBool ? 1 : 0;
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
