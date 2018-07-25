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

     **1xx Information responses**	

     + 100 Continue
     + 101 Switching Protocol

     **2xx Successful responses**

     + 200 OK
     + 201 Created
     + 202 Accepted
     + 203 Non-Authoritative 

     **3xx Redirection messages**

     + 300 Multiple Choice
     + 301 Moved Permanently
     + 302 Found

     **4xx Client error responses**

     + 400 Bad Request
     + 401 Unauthorized
     + 403 Forbidden
     + 404 Not Found

     **5xx Server error responses**

     + 500 Internal Sever Error
     + 501 Not Implemented
     + 502 Bad Gateway

  3. Status message

  4. HTTP headers

  5. Optionally, a body containing the fetched resource

### MIME

The **Multipurpose Internet Mail Extensions (MIME) type** is a standardized way to indicate the nature and format of a document. 

Browsers often use the MIME type (and not the file extension) to determine how it will process a document; it is therefore important that servers are set up correctly to attach the correct MIME type to the header of the response object.

| Type          | Description                                                  | Example of typical subtypes                                  |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `text`        | Represents any document that contains text and is theoretically human readable | `text/plain`, `text/html`, `text/css, text/javascript`       |
| `image`       | Represents any kind of images. Videos are not included, though animated images (like animated gif) are described with an image type. | `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp` |
| `audio`       | Represents any kind of audio files                           | `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav` |
| `video`       | Represents any kind of video files                           | `video/webm`, `video/ogg`                                    |
| `application` | Represents any kind of binary data.                          | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

 ### CORS

Cross-Origin Resource Sharing ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is a mechanism that uses additional [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. A web application makes a **cross-origin HTTP request** when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.