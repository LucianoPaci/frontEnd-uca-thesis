# SimpleInventoryApi.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/InvestigacionAppUCA/UCA-api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserById**](DefaultApi.md#getUserById) | **GET** /user/{id} | searches user info


<a name="getUserById"></a>
# **getUserById**
> User getUserById(id)

searches user info

### Example
```javascript
import SimpleInventoryApi from 'simple_inventory_api';

let apiInstance = new SimpleInventoryApi.DefaultApi();

let id = 8.14; // Number | get userId


apiInstance.getUserById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| get userId | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

