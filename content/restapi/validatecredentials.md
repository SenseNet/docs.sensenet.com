---
title: ValidateCredentials
metaTitle: "sensenet API - ValidateCredentials"
metaDescription: "ValidateCredentials"
---

## ValidateCredentials
- Method: **POST**.

Validates the provided user credentials.

### Example

``` 
 {
     id: 1234,
     email: "mail@example.com",
     username: "example",
     name: "example",
     loginName: "example"
 }
```

### Exceptions
- SenseNetSecurityException: Thrown when login is unsuccessful.
- MissingDomainException: Thrown when the domain is missing but the login algorithm needs it.

### Request example:

```
POST /odata.svc/('Root')/ValidateCredentials
DATA:
models=[{
  "userName": _value_, 
  "password": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **userName** (`string`): Username (domain name can be omitted if it is the default).
- **password** (`string`): Password

### Return value:
A custom object containing basic user data. If the credentials are not valid,
 the request throws a _SenseNetSecurityException_ and return a 404 response.
  (Type: `CredentialValidationResult`).

### Requirements:
- **AllowedRoles**: All

