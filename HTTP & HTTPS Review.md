# HTTP & HTTPS Review

### HTTP Messages

+ Requests

  1. Method: `GET/POST/PUT...`

     

     + | Name    | Description                                                  |
       | ------- | ------------------------------------------------------------ |
       | GET     | The `GET` method requests a representation of the specified resource. Requests using `GET` should only retrieve data. |
       | HEAD    | The `HEAD` method asks for a response identical to that of a `GET` request, but without the response body. |
       | POST    | The `POST` method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server. |
       | PUT     | The `PUT` method replaces all current representations of the target resource with the request payload. |
       | DELETE  | The `DELETE` method deletes the specified resource.          |
       | CONNECT | The `CONNECT` method establishes a tunnel to the server identified by the target resource. |
       | OPTIONS | The `OPTIONS` method is used to describe the communication options for the target resource. |
       | TRACE   | The `TRACE` method performs a message loop-back test along the path to the target resource. |
       | PATCH   | The `PATCH` method is used to apply partial modifications to a resource. |

  2. URL path

  3. Version of HTTP protocol: `HTTP/1.1`

  4. Optional headers (convey additional information) 

  5. Or a body

+ Response

  1. Version of HTTP protocol
  2. Status code
  3. Status message
  4. HTTP headers
  5. Optionally, a body containing the fetched resource