/**
 *                                                  TOPIC: 1 NETWORKING
 * 
 *     1. HOW WEB WORKS
 * 
 *        - User Requests a Webpage:
 *             The user types a URL into the browser or clicks on a link. This initiates a request 
 *             to the web server that hosts the webpage.
 * 
 *        - DNS Lookup:
 *             The browser first needs to translate the human-readable domain (e.g., www.example.com) 
 *             into an IP address using the Domain Name System (DNS). This IP address is required to 
 *             find the server on the internet.
 * 
 *        - Browser Sends Request to Server:
 *             The browser sends an HTTP or HTTPS request to the web server, asking for the webpage’s content.
 * 
 *        - Server Processes Request:
 *             The server receives the request, processes it, and decides what content needs to be 
 *             sent back to the browser, often HTML, CSS, JavaScript, images, etc.
 * 
 *        - Server Sends Response:
 *             The server sends back an HTTP response which includes the requested resources (HTML, CSS, 
 *             JavaScript, images) and status codes to inform the browser whether the request was successful.
 * 
 *        - Browser Receives Response:
 *             The browser receives the response and begins interpreting the HTML, CSS, and JavaScript 
 *             to construct the webpage.
 * 
 *        - Rendering the Webpage:
 *             The browser parses the HTML, builds the DOM (Document Object Model), applies CSS to style 
 *             the elements, and executes any JavaScript. It then paints the webpage on the screen for 
 *             the user to see and interact with.
 * 
 *        - Subsequent Requests:
 *             As the page is loaded, the browser may need to make additional requests for images, 
 *             fonts, or other resources referenced by the HTML or CSS.
 * 
 */

/**
 *                                     BASIC ABOUT ALL AVAILABLE PROTOCOLS
 * 
 *    HTTP, HTTPS, HTTP/2, HTTP/3, UDP, TCP, WEBSOCKET, FTP, SMTP
 * 
 * Hey there, fellow engineer! Let's dive into the world of protocols and explore how they work their magic in the realm of web communication and data transfer. Buckle up, because it's gonna be a wild ride!
 * 
 * ## HTTP (Hypertext Transfer Protocol)
 * Ah, HTTP - the backbone of the internet! It's like the secret handshake that allows your web browser to communicate with servers. Here's a quick rundown:
 * 
 * - **HTTP/1.0** (1996): The OG of HTTP, it introduced the basic request-response model. Imagine it as a one-way street, where you send a request and wait for a response.
 * - **HTTP/1.1** (1997): The upgraded version that brought persistent connections and pipelining. Now, it's like having a two-way street, allowing multiple requests to travel back and forth without starting from scratch each time.
 * - **Limitations**: Despite its improvements, HTTP/1.1 still had some issues. It suffered from head-of-line blocking, where a single slow request could hold up the entire pipeline. Imagine being stuck behind a slow car on a one-lane road!
 * 
 * ## HTTPS (HTTP Secure)
 * HTTPS is like the secret agent of the internet, adding an extra layer of security to your web browsing. It's like having a bodyguard for your data, ensuring that no one can snoop on your conversations with the server. HTTPS uses TLS (Transport Layer Security) to encrypt your data, so even if someone intercepts it, it'll look like gibberish to them.
 * 
 * ## HTTP/2
 * HTTP/2 is the cool kid on the block, introduced in 2015 to make web browsing faster and more efficient. It's like having a high-speed train for your data:
 * 
 * - **Multiplexing**: Instead of waiting in line for each request to be processed, HTTP/2 allows multiple requests to be sent simultaneously over a single connection. It's like having a train with multiple cars, each carrying a different request.
 * - **Header Compression**: HTTP/2 uses HPACK to compress headers, reducing the amount of data that needs to be transmitted. It's like having a luggage compressor for your train, allowing more requests to fit in the same space.
 * - **Server Push**: Servers can now proactively send resources to clients before they even ask for them. It's like having a butler who anticipates your needs and brings you what you need before you even ask.
 * 
 * ## HTTP/3
 * HTTP/3 is the latest version of HTTP, standardized in 2022. It's built on QUIC (Quick UDP Internet Connections), which uses UDP instead of TCP. Here's what makes HTTP/3 special:
 * 
 * - **Reduced Latency**: By using UDP, HTTP/3 eliminates head-of-line blocking, which means that a single slow request won't hold up the entire connection. It's like having a highway with multiple lanes, so if one lane is blocked, the other lanes can still keep moving.
 * - **Improved Security**: HTTP/3 incorporates TLS 1.3 by default, ensuring that your data is secure from prying eyes. It's like having a high-tech security system for your highway.
 * - **Connection Migration**: HTTP/3 allows connections to seamlessly transition between networks without dropping the connection. It's like having a car that can switch between different types of fuel without stalling.
 * 
 * ## TCP (Transmission Control Protocol)
 * TCP is the reliable workhorse of the internet, ensuring that your data arrives at its destination in one piece. It's like having a postal service that guarantees delivery:
 * 
 * - TCP uses a three-way handshake to establish a connection, making sure that both ends are ready to communicate.
 * - It guarantees data integrity by checking for errors and retransmitting lost packets. However, this strict ordering can sometimes introduce latency, like a postal service that waits for a missing package before delivering the rest of the mail.
 * 
 * ## UDP (User Datagram Protocol)
 * UDP is the speedy delivery guy of the internet, prioritizing speed over reliability. It's like having a courier service that gets your package there as fast as possible, even if it gets a little banged up along the way:
 * 
 * - UDP doesn't bother with error checking or retransmissions, so it can deliver data faster than TCP.
 * - It's often used in real-time applications like gaming or video streaming, where a little data loss is acceptable as long as the action keeps moving.
 * 
 * ## WebSocket
 * WebSocket is the real-time communication expert, allowing for full-duplex communication over a single TCP connection. It's like having a two-way radio for your web applications:
 * 
 * - WebSocket enables instant updates and notifications, making it perfect for chat apps, live sports scores, or stock tickers.
 * - Once the connection is established, both the client and server can send messages at any time, without waiting for the other to respond first.
 * 
 * ## FTP (File Transfer Protocol)
 * FTP is the file-sharing guru of the internet, allowing you to transfer files between computers. It's like having a dedicated file-moving service:
 * 
 * - FTP supports both anonymous and authenticated access, so you can share files publicly or restrict access to authorized users.
 * - It's commonly used for uploading website files to servers or downloading large files like software updates or media files.
 * 
 * ## SMTP (Simple Mail Transfer Protocol)
 * SMTP is the email delivery expert, responsible for sending messages across the internet. It's like having a global postal service for electronic mail:
 * 
 * - SMTP primarily handles the sending of emails from clients to servers or between servers.
 * - It's a key component of the email system, working alongside other protocols like POP3 and IMAP to deliver messages to your inbox.
 * 
 * There you have it, fellow engineer! A quick tour of the protocols that make the internet work. Remember, each protocol has its own strengths and use cases, so choose wisely when designing your web applications. Happy coding!
 */

                                           /** REQUEST HEADERS , RESPONSE HEADERS AND STATUS CODES */



/**
 * REQUEST HEADERS
 *
 * Below are the most important HTTP request headers with detailed explanations and examples.
 *
 * 1. **Host**
 *    - **Description**: Specifies the domain name of the server (for virtual hosting), and optionally the TCP port number.
 *    - **Example**:
 *      ```
 *      Host: www.example.com
 *      ```
 *    - **Details**: The `Host` header is mandatory in HTTP/1.1 requests. It allows the server to distinguish between different domains hosted on the same IP address.
 *
 * 2. **User-Agent**
 *    - **Description**: Contains information about the user agent (browser or client software) making the request.
 *    - **Example**:
 *      ```
 *      User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
 *      ```
 *    - **Details**: Useful for content negotiation, analytics, and logging. It can help servers deliver optimized content for specific browsers or devices.
 *
 * 3. **Accept**
 *    - **Description**: Informs the server about the types of content the client can process.
 *    - **Example**:
 *      ```
 *      Accept: text/html,application/xhtml+xml,application/xml;q=0.9
 *      ```
 *    - **Details**: Helps the server select the appropriate response format based on client preferences.
 *
 * 4. **Accept-Language**
 *    - **Description**: Indicates the preferred natural languages for the response.
 *    - **Example**:
 *      ```
 *      Accept-Language: en-US,en;q=0.5
 *      ```
 *    - **Details**: Used in content negotiation for localization, allowing servers to provide content in the user's language.
 *
 * 5. **Accept-Encoding**
 *    - **Description**: Lists the content encoding (compression algorithms) the client can handle.
 *    - **Example**:
 *      ```
 *      Accept-Encoding: gzip, deflate, br
 *      ```
 *    - **Details**: Enables servers to send compressed responses, reducing bandwidth usage and improving load times.
 *
 * 6. **Connection**
 *    - **Description**: Controls whether the network connection stays open after the current transaction.
 *    - **Example**:
 *      ```
 *      Connection: keep-alive
 *      ```
 *    - **Details**: `keep-alive` allows multiple requests over a single connection, improving performance.
 *
 * 7. **Cookie**
 *    - **Description**: Contains stored HTTP cookies previously sent by the server with `Set-Cookie`.
 *    - **Example**:
 *      ```
 *      Cookie: sessionId=abc123; theme=light; lang=en-US
 *      ```
 *    - **Details**: Used for session management, personalization, and tracking user activities.
 *
 * 8. **Content-Type**
 *    - **Description**: Indicates the media type of the resource in the request body.
 *    - **Example**:
 *      ```
 *      Content-Type: application/json
 *      ```
 *    - **Details**: Essential for POST and PUT requests containing a body, so the server knows how to parse it.
 *
 * 9. **Content-Length**
 *    - **Description**: The length of the request body in bytes.
 *    - **Example**:
 *      ```
 *      Content-Length: 348
 *      ```
 *    - **Details**: Required for requests with a body to indicate where the body ends.
 *
 * 10. **Authorization**
 *     - **Description**: Contains credentials to authenticate a user agent with a server.
 *     - **Example**:
 *       ```
 *       Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
 *       ```
 *     - **Details**: Supports various authentication schemes like Basic, Bearer tokens, and OAuth.
 *
 * 11. **Referer**
 *     - **Description**: The address of the previous web page from which a link to the currently requested page was followed.
 *     - **Example**:
 *       ```
 *       Referer: https://www.google.com/
 *       ```
 *     - **Details**: Used for analytics, logging, and security purposes.
 *
 * 12. **Cache-Control**
 *     - **Description**: Directives for caching mechanisms in both requests and responses.
 *     - **Example**:
 *       ```
 *       Cache-Control: no-cache
 *       ```
 *     - **Details**: `no-cache` indicates that the client wants a fresh response, avoiding cached versions.
 *
 * 13. **If-Modified-Since**
 *     - **Description**: Allows a 304 Not Modified response if content is unchanged since the specified date.
 *     - **Example**:
 *       ```
 *       If-Modified-Since: Wed, 21 Oct 2020 07:28:00 GMT
 *       ```
 *     - **Details**: Optimizes bandwidth by requesting content only if it has changed.
 *
 * 14. **If-None-Match**
 *     - **Description**: Makes the request conditional based on the ETag.
 *     - **Example**:
 *       ```
 *       If-None-Match: "686897696a7c876b7e"
 *       ```
 *     - **Details**: Used for caching; the server returns a 304 Not Modified if the ETag matches.
 *
 * 15. **Range**
 *     - **Description**: Requests a specific part of a document.
 *     - **Example**:
 *       ```
 *       Range: bytes=500-999
 *       ```
 *     - **Details**: Useful for resuming interrupted downloads or streaming media.
 *
 * 16. **Origin**
 *     - **Description**: Initiates a request for cross-origin resource sharing (CORS).
 *     - **Example**:
 *       ```
 *       Origin: https://www.example.com
 *       ```
 *     - **Details**: Used to determine if the server should allow the request based on CORS policy.
 *
 * 17. **Upgrade-Insecure-Requests**
 *     - **Description**: Signals the client's preference for an encrypted and authenticated response.
 *     - **Example**:
 *       ```
 *       Upgrade-Insecure-Requests: 1
 *       ```
 *     - **Details**: Indicates that the client prefers HTTPS over HTTP.
 *
 * 18. **DNT (Do Not Track)**
 *     - **Description**: Expresses the user's tracking preference.
 *     - **Example**:
 *       ```
 *       DNT: 1
 *       ```
 *     - **Details**: `1` means the user does not want to be tracked. Not all servers honor this header.
 *
 * 19. **X-Requested-With**
 *     - **Description**: Used to identify Ajax requests.
 *     - **Example**:
 *       ```
 *       X-Requested-With: XMLHttpRequest
 *       ```
 *     - **Details**: Non-standard header, but commonly used in web development to detect Ajax requests.
 *
 * 20. **Accept-Charset**
 *     - **Description**: Indicates what character sets the client is able to understand.
 *     - **Example**:
 *       ```
 *       Accept-Charset: utf-8, iso-8859-1;q=0.5
 *       ```
 *    - **Details**: Helps the server provide content in a compatible character encoding.
 */

/**
 * RESPONSE HEADERS
 *
 * Below are the most important HTTP response headers with detailed explanations and examples.
 *
 * 1. **Content-Type**
 *    - **Description**: Indicates the media type of the resource sent to the client.
 *    - **Example**:
 *      ```
 *      Content-Type: text/html; charset=UTF-8
 *      ```
 *    - **Details**: Essential for the client to correctly interpret the data.
 *
 * 2. **Content-Length**
 *    - **Description**: The length of the response body in bytes.
 *    - **Example**:
 *      ```
 *      Content-Length: 2048
 *      ```
 *    - **Details**: Helps the client know when the response has been fully received.
 *
 * 3. **Date**
 *    - **Description**: The date and time at which the message was originated.
 *    - **Example**:
 *      ```
 *      Date: Mon, 27 Jul 2020 12:28:53 GMT
 *      ```
 *    - **Details**: Useful for caching and debugging purposes.
 *
 * 4. **Server**
 *    - **Description**: Contains information about the software used by the origin server.
 *    - **Example**:
 *      ```
 *      Server: Apache/2.4.41 (Ubuntu)
 *      ```
 *    - **Details**: May reveal server details; sometimes omitted or customized for security reasons.
 *
 * 5. **Set-Cookie**
 *    - **Description**: Sends cookies from the server to the client.
 *    - **Example**:
 *      ```
 *      Set-Cookie: sessionId=abc123; Path=/; Secure; HttpOnly; SameSite=Strict
 *      ```
 *    - **Details**: Manages session data and user preferences.
 *
 * 6. **Cache-Control**
 *    - **Description**: Directives for caching mechanisms in both requests and responses.
 *    - **Example**:
 *      ```
 *      Cache-Control: max-age=3600, must-revalidate
 *      ```
 *    - **Details**: Controls how and for how long the response is cached.
 *
 * 7. **Expires**
 *    - **Description**: Gives the date/time after which the response is considered stale.
 *    - **Example**:
 *      ```
 *      Expires: Wed, 21 Oct 2020 07:28:00 GMT
 *      ```
 *    - **Details**: Used for HTTP/1.0 caches; superseded by `Cache-Control` in HTTP/1.1.
 *
 * 8. **Last-Modified**
 *    - **Description**: Indicates the date and time at which the resource was last modified.
 *    - **Example**:
 *      ```
 *      Last-Modified: Tue, 15 Nov 2020 12:45:26 GMT
 *      ```
 *    - **Details**: Used with conditional requests to optimize caching.
 *
 * 9. **ETag**
 *    - **Description**: A unique identifier for a specific version of a resource.
 *    - **Example**:
 *      ```
 *      ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
 *      ```
 *    - **Details**: Used for caching and synchronization.
 *
 * 10. **Location**
 *     - **Description**: Used in redirection or when a new resource has been created.
 *     - **Example**:
 *       ```
 *       Location: https://www.example.com/new-page
 *       ```
 *     - **Details**: Commonly used with status codes like 301, 302, 303, 307, and 308.
 *
 * 11. **Content-Encoding**
 *     - **Description**: Specifies any encoding transformations applied to the resource.
 *     - **Example**:
 *       ```
 *       Content-Encoding: gzip
 *       ```
 *     - **Details**: Indicates that the client must decode the response before using it.
 *
 * 12. **Access-Control-Allow-Origin**
 *     - **Description**: Part of the CORS mechanism; specifies which origins can access the resource.
 *     - **Example**:
 *       ```
 *       Access-Control-Allow-Origin: *
 *       ```
 *     - **Details**: A value of `*` allows all domains; more restrictive policies enhance security.
 *
 * 13. **WWW-Authenticate**
 *     - **Description**: Defines the authentication method that should be used to access a resource.
 *     - **Example**:
 *       ```
 *       WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
 *       ```
 *     - **Details**: Sent with a 401 Unauthorized status code to prompt the user for credentials.
 *
 * 14. **Retry-After**
 *     - **Description**: Indicates how long the user agent should wait before making a follow-up request.
 *     - **Example**:
 *       ```
 *       Retry-After: 120
 *       ```
 *     - **Details**: Commonly used with 503 Service Unavailable responses.
 *
 * 15. **Strict-Transport-Security**
 *     - **Description**: Enforces secure (HTTPS) connections to the server.
 *     - **Example**:
 *       ```
 *       Strict-Transport-Security: max-age=31536000; includeSubDomains
 *       ```
 *     - **Details**: Helps prevent man-in-the-middle attacks by ensuring browsers always use HTTPS.
 *
 * 16. **X-Content-Type-Options**
 *     - **Description**: Prevents MIME-type sniffing, reducing exposure to drive-by download attacks.
 *     - **Example**:
 *       ```
 *       X-Content-Type-Options: nosniff
 *       ```
 *     - **Details**: Instructs browsers not to override the response's `Content-Type`.
 *
 * 17. **X-Frame-Options**
 *     - **Description**: Controls whether the browser should be allowed to render a page in a frame, iframe, embed, or object.
 *     - **Example**:
 *       ```
 *       X-Frame-Options: SAMEORIGIN
 *       ```
 *     - **Details**: Helps prevent clickjacking attacks by restricting framing of content.
 *
 * 18. **Content-Security-Policy**
 *     - **Description**: Controls resources the user agent is allowed to load for a given page.
 *     - **Example**:
 *       ```
 *       Content-Security-Policy: default-src 'self'; img-src https://images.example.com
 *       ```
 *     - **Details**: Enhances security by reducing the risk of XSS attacks.
 *
 * 19. **Transfer-Encoding**
 *     - **Description**: Specifies the form of encoding used to safely transfer the payload body to the user.
 *     - **Example**:
 *       ```
 *       Transfer-Encoding: chunked
 *       ```
 *     - **Details**: Used when the content length is unknown at the start of transmission.
 *
 * 20. **Accept-Ranges**
 *     - **Description**: Indicates if the server supports range requests.
 *     - **Example**:
 *       ```
 *       Accept-Ranges: bytes
 *       ```
 *     - **Details**: Allows clients to resume interrupted downloads.
 */

/**
 * HTTP STATUS CODES
 *
 * Below are the most important HTTP status codes, including the ones you mentioned (402, 407, 307, 308, 507), with detailed explanations.
 *
 * **1XX Informational Responses**
 *
 * 1. **100 Continue**
 *    - **Description**: The server has received the request headers, and the client should proceed to send the request body.
 *    - **Usage**: Mainly with large POST requests to check if the server is ready to accept the request.
 *
 * 2. **101 Switching Protocols**
 *    - **Description**: The requester has asked the server to switch protocols, and the server is acknowledging that it will do so.
 *    - **Usage**: Used in WebSocket handshake requests.
 *
 * **2XX Successful Responses**
 *
 * 3. **200 OK**
 *    - **Description**: The request has succeeded.
 *    - **Usage**: Standard response for successful HTTP requests.
 *
 * 4. **201 Created**
 *    - **Description**: The request has been fulfilled, resulting in the creation of a new resource.
 *    - **Usage**: Used with POST requests when a new resource is created.
 *
 * 5. **202 Accepted**
 *    - **Description**: The request has been accepted for processing, but the processing has not been completed.
 *    - **Usage**: For asynchronous processing.
 *
 * 6. **204 No Content**
 *    - **Description**: The server successfully processed the request, and is not returning any content.
 *    - **Usage**: When no content needs to be returned (e.g., after a DELETE request).
 *
 * **3XX Redirection Messages**
 *
 * 7. **301 Moved Permanently**
 *    - **Description**: The URL of the requested resource has been changed permanently.
 *    - **Usage**: URL redirection; the new URL is provided in the `Location` header.
 *
 * 8. **302 Found**
 *    - **Description**: The URI of the requested resource has been changed temporarily.
 *    - **Usage**: Temporary redirections.
 *
 * 9. **303 See Other**
 *    - **Description**: The server is redirecting the client to a different resource, typically using GET.
 *    - **Usage**: After a POST request to redirect to a confirmation page.
 *
 * 10. **304 Not Modified**
 *     - **Description**: Indicates that the resource has not been modified since the version specified by the request headers.
 *     - **Usage**: Used for caching purposes with conditional GET requests.
 *
 * 11. **307 Temporary Redirect**
 *     - **Description**: The requested resource resides temporarily under a different URI.
 *     - **Usage**: Similar to 302, but the request method should not change (e.g., POST should remain POST).
 *
 * 12. **308 Permanent Redirect**
 *     - **Description**: The requested resource has been assigned a new permanent URI.
 *     - **Usage**: Similar to 301, but the request method should not change.
 *
 * **4XX Client Error Responses**
 *
 * 13. **400 Bad Request**
 *     - **Description**: The server could not understand the request due to invalid syntax.
 *     - **Usage**: Malformed request syntax, invalid request message framing.
 *
 * 14. **401 Unauthorized**
 *     - **Description**: The client must authenticate itself to get the requested response.
 *     - **Usage**: Missing or invalid authentication credentials.
 *
 * 15. **402 Payment Required**
 *     - **Description**: Reserved for future use, intended for digital payment systems.
 *     - **Usage**: Some APIs use it for quota limitations or payment requirements.
 *
 * 16. **403 Forbidden**
 *     - **Description**: The client does not have access rights to the content.
 *     - **Usage**: Authentication succeeded but authenticated user does not have permission.
 *
 * 17. **404 Not Found**
 *     - **Description**: The server cannot find the requested resource.
 *     - **Usage**: The endpoint is valid but the resource itself does not exist.
 *
 * 18. **405 Method Not Allowed**
 *     - **Description**: The request method is known by the server but is not supported by the target resource.
 *     - **Usage**: E.g., using GET on a form that requires POST.
 *
 * 19. **407 Proxy Authentication Required**
 *     - **Description**: The client must first authenticate itself with the proxy.
 *     - **Usage**: When access is controlled by a proxy that requires authentication.
 *
 * 20. **408 Request Timeout**
 *     - **Description**: The server would like to shut down this unused connection.
 *     - **Usage**: Server times out waiting for the request.
 *
 * 21. **409 Conflict**
 *     - **Description**: Indicates a request conflict with current state of the server.
 *     - **Usage**: For example, editing conflicts in version control systems.
 *
 * 22. **410 Gone**
 *     - **Description**: The resource requested is no longer available and will not be available again.
 *     - **Usage**: Indicates permanent removal.
 *
 * 23. **429 Too Many Requests**
 *     - **Description**: The user has sent too many requests in a given amount of time.
 *     - **Usage**: Rate limiting.
 *
 * **5XX Server Error Responses**
 *
 * 24. **500 Internal Server Error**
 *     - **Description**: The server has encountered a situation it doesn't know how to handle.
 *     - **Usage**: Generic error message when no more specific message is suitable.
 *
 * 25. **501 Not Implemented**
 *     - **Description**: The request method is not supported by the server and cannot be handled.
 *     - **Usage**: E.g., the server does not recognize the request method.
 *
 * 26. **502 Bad Gateway**
 *     - **Description**: The server was acting as a gateway or proxy and received an invalid response from the upstream server.
 *     - **Usage**: Issues with reverse proxies or load balancers.
 *
 * 27. **503 Service Unavailable**
 *     - **Description**: The server is not ready to handle the request.
 *     - **Usage**: Server maintenance or overload.
 *
 * 28. **504 Gateway Timeout**
 *     - **Description**: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
 *     - **Usage**: Network errors or slow upstream servers.
 *
 * 29. **505 HTTP Version Not Supported**
 *     - **Description**: The HTTP version used in the request is not supported by the server.
 *     - **Usage**: When the server does not support the HTTP protocol version used in the request.
 *
 * 30. **507 Insufficient Storage**
 *     - **Description**: The server is unable to store the representation needed to complete the request.
 *     - **Usage**: When the server runs out of storage space.
 */



                                              /** GRAPHQL */

/**
 * WHAT IS GRAPHQL?
 * 
 * GraphQL is a query language for APIs and a runtime.
 * It enables clients to specify exactly the data they need.
 * Developed by Facebook in 2012; open-sourced in 2015.
 * GraphQL allows for efficient, flexible data fetching.
 * It replaces traditional REST APIs with a single endpoint.
 * 
 * WHY DO WE NEED THAT IN-DEPTH ANSWER?
 * 
 * Understanding GraphQL's benefits requires deep insights.
 * It solves problems like over-fetching and under-fetching.
 * GraphQL provides strong typing and introspection abilities.
 * It improves performance and developer experience greatly.
 * Mastery involves knowing its architecture and best practices.
 * 
 * REST VS GRAPHQL TABLE FORMAT
 * 
 * | Aspect          | REST API                         | GraphQL                          |
 * |-----------------|----------------------------------|----------------------------------|
 * | Data Fetching   | Multiple endpoints, fixed data   | Single endpoint, flexible queries|
 * | Over-fetching   | Common, returns extra data       | Eliminated, client specifies fields|
 * | Under-fetching  | Requires multiple requests       | Single request fetches all needed data|
 * | Versioning      | Needs new endpoints for changes  | Evolves via schema, no versioning needed|
 * | Performance     | Can be inefficient               | Optimized data retrieval         |
 * | Tooling         | Limited introspection            | Rich tooling via schema introspection|
 * | Error Handling  | Relies on HTTP status codes      | Custom error responses in data   |
 * | Caching         | HTTP caching mechanisms          | Client-side caching strategies   |
 * 
 * WHAT IS SDL IN GRAPHQL?
 * 
 * SDL stands for Schema Definition Language.
 * It's a syntax to define GraphQL schemas precisely.
 * SDL describes types, queries, mutations, and subscriptions.
 * It provides a clear, human-readable schema representation.
 * SDL is central to schema-first GraphQL development.
 * 
 * GRAPHQL UNDER THE HOOD?
 * 
 * GraphQL operates on a type system and a schema.
 * When a query arrives, it's parsed into an AST.
 * The query is validated against the schema types.
 * Execution involves calling resolvers for each field.
 * Resolvers fetch data from databases or services.
 * The response matches the structure of the query.
 * GraphQL's execution engine optimizes data retrieval.
 * 
 * BENEFITS OF GRAPHQL
 * 
 * - **Precise Data Fetching**: Clients get exact data needed.
 * - **Single Endpoint**: Simplifies API architecture greatly.
 * - **Strong Typing**: Enhances validation and tooling options.
 * - **Self-Documenting**: Schema acts as documentation inherently.
 * - **Efficient Networking**: Reduces bandwidth and latency issues.
 * - **Introspection**: Clients can query the schema dynamically.
 * - **Easier Evolution**: Add fields without breaking clients.
 * - **Real-time Updates**: Supports subscriptions for live data.
 * - **Improved Developer Experience**: Better tooling and workflows.
 * 
 * DETAILED IDEA ABOUT SCHEMA, TYPE DEFINITION (QUERY AND MUTATION), RESOLVERS
 * 
 * - **Schema**: Core definition of API's data and operations.
 *   It specifies types, queries, mutations, and subscriptions.
 *   Acts as a contract between client and server.
 * - **Type Definitions**:
 *   - **Types**: Define objects with fields and field types.
 *     Custom types model application domain entities.
 *   - **Query**: Entry point for read operations; fetch data.
 *   - **Mutation**: Entry point for write operations; modify data.
 *   - **Subscription**: For real-time data streams via WebSockets.
 * - **Resolvers**: Functions mapping fields to data sources.
 *   They execute logic to fetch or compute field data.
 *   Resolvers can be synchronous or return promises.
 * 
 * CUSTOM RESOLVER IN GRAPHQL? WITH SIMPLE EXAMPLE
 * 
 * A custom resolver fetches data for a specific field.
 * 
 * **Example**:
 * 
 * ```javascript
 * const resolvers = {
 *   Query: {
 *     user: (parent, args, context) => {
 *       return db.getUserById(args.id);
 *     },
 *   },
 *   User: {
 *     fullName: (parent) => {
 *       return `${parent.firstName} ${parent.lastName}`;
 *     },
 *   },
 * };
 * ```
 * 
 * Here, `user` resolver fetches a user by ID.
 * `fullName` computes a user's full name dynamically.
 * 
 * EXAMPLE OF INBUILT TYPE AND CUSTOM TYPE IN GRAPHQL
 * 
 * **Inbuilt Types**: `Int`, `Float`, `String`, `Boolean`, `ID`.
 * 
 * **Custom Type Example**:
 * 
 * ```graphql
 * type Article {
 *   id: ID!
 *   title: String!
 *   content: String!
 *   author: User!
 * }
 * 
 * type User {
 *   id: ID!
 *   username: String!
 *   articles: [Article!]!
 * }
 * ```
 * 
 * These types define the structure of `Article` and `User`.
 * 
 * WHY DO WE HAVE ALL REQUESTS AS POST IN GRAPHQL?
 * 
 * GraphQL uses POST for its complex query payloads.
 * GET requests have URL length limitations and caching issues.
 * POST allows sending queries in the request body securely.
 * It avoids exposing query details in URLs.
 * POST supports more extensive HTTP features needed.
 * 
 * RESOLVER (IN-DEPTH)
 * 
 * A resolver is a function that resolves a field's value.
 * Resolvers can fetch data from any source needed.
 * They receive arguments and context for processing.
 * Resolvers are chained based on the query's fields.
 * They can handle authentication and authorization logic.
 * Efficient resolvers are key to GraphQL performance.
 * 
 * WHAT IS (parent, args, context)? WHERE CAN WE USE THEM? BEST USE CASE OF EACH ONE OF THEM
 * 
 * - **parent**: The return value of the parent resolver.
 *   Useful for accessing data from parent fields.
 *   *Example*: Getting a user's ID to fetch posts.
 * - **args**: Arguments provided in the field's query.
 *   Used to filter or identify data to fetch.
 *   *Example*: `args.id` to find a specific user.
 * - **context**: Shared object among all resolvers.
 *   Holds per-request state like authentication info.
 *   *Example*: Accessing the logged-in user's ID.
 * 
 * OPTIONAL FIELD IN GRAPHQL: HOW CAN WE HAVE OPTIONAL VALUES IN TYPES
 * 
 * Fields are optional unless marked non-null with `!`.
 * To make a field optional, omit the `!` in type.
 * 
 * **Example**:
 * 
 * ```graphql
 * type Profile {
 *   id: ID!
 *   bio: String
 *   avatarUrl: String
 * }
 * ```
 * 
 * Here, `bio` and `avatarUrl` are optional fields.
 * 
 * IN-DEPTH KNOWLEDGE ABOUT APOLLO CLIENT AND APOLLO SERVER
 * 
 * - **Apollo Server**:
 *   A GraphQL server library for Node.js applications.
 *   Supports schema creation, resolvers, and middleware.
 *   Integrates with Express, Koa, and other frameworks.
 *   Provides features like data sources and schema stitching.
 * - **Apollo Client**:
 *   A comprehensive GraphQL client for JavaScript apps.
 *   Manages local and remote data with GraphQL.
 *   Offers advanced caching and state management.
 *   Integrates with React, Angular, Vue, and more.
 *   Supports hooks, higher-order components, and more.
 * 
 * QUERY AND MUTATION IN-DEPTH
 * 
 * - **Query**:
 *   Used to read or fetch data from the server.
 *   Should be side-effect free and idempotent.
 *   Defined under the `Query` type in the schema.
 * - **Mutation**:
 *   Used to modify server-side data or state.
 *   Can have side effects and change data.
 *   Defined under the `Mutation` type in the schema.
 * 
 * **Example**:
 * 
 * ```graphql
 * type Query {
 *   getPosts(authorId: ID): [Post!]!
 * }
 * 
 * type Mutation {
 *   createPost(input: PostInput!): Post!
 * }
 * ```
 * 
 * WHAT IS FRAGMENT IN APOLLO CLIENT
 * 
 * A fragment is a reusable piece of query logic.
 * It allows for sharing fields between queries.
 * Reduces duplication and promotes maintainability.
 * 
 * **Example**:
 * 
 * ```graphql
 * fragment PostFields on Post {
 *   id
 *   title
 *   content
 * }
 * 
 * query getPost($id: ID!) {
 *   post(id: $id) {
 *     ...PostFields
 *   }
 * }
 * ```
 * 
 * WHAT IS SUSPENSE IN APOLLO CLIENT
 * 
 * Suspense is a React feature for data fetching.
 * Apollo Client integrates with Suspense for smoother UX.
 * It simplifies handling of loading states in components.
 * Suspense lets components wait for data before rendering.
 * It's currently experimental but promising for the future.
 * 
 * IN-DEPTH KNOWLEDGE ABOUT SUBSCRIPTION WITH BEST USE CASE AND SHORT EXAMPLE
 * 
 * **Subscriptions** enable real-time data over WebSockets.
 * They allow clients to receive live updates from the server.
 * Best for chat apps, live feeds, and notifications.
 * 
 * **Example Schema**:
 * 
 * ```graphql
 * type Subscription {
 *   messageSent(channelId: ID!): Message!
 * }
 * ```
 * 
 * **Example Resolver**:
 * 
 * ```javascript
 * const { PubSub } = require('graphql-subscriptions');
 * const pubsub = new PubSub();
 * 
 * const resolvers = {
 *   Subscription: {
 *     messageSent: {
 *       subscribe: (_, { channelId }) => {
 *         return pubsub.asyncIterator(`MESSAGE_SENT_${channelId}`);
 *       },
 *     },
 *   },
 * };
 * 
 * // When a new message is sent:
 * pubsub.publish(`MESSAGE_SENT_${channelId}`, { messageSent: newMessage });
 * ```
 * 
 * This setup delivers messages to subscribed clients in real-time.
 * 
 * ADDITIONAL ADVANCED QUESTIONS:
 * 
 * WHAT ARE DATA LOADERS AND HOW DO THEY HELP WITH N+1 PROBLEM?
 * 
 * Data Loaders batch and cache database requests efficiently.
 * They prevent redundant fetching in nested queries.
 * Address the N+1 problem common in GraphQL resolvers.
 * 
 * **Example**:
 * 
 * ```javascript
 * const DataLoader = require('dataloader');
 * const userLoader = new DataLoader(keys => fetchUsersByIds(keys));
 * ```
 * 
 * EXPLAIN DIRECTIVES IN GRAPHQL AND THEIR USE CASES
 * 
 * Directives provide a way to annotate schema elements.
 * They can modify execution or transformation of fields.
 * Built-in directives include `@include` and `@skip`.
 * Custom directives can implement authentication, logging.
 * 
 * **Example**:
 * 
 * ```graphql
 * directive @auth(requires: Role = ADMIN) on FIELD_DEFINITION
 * 
 * type Query {
 *   sensitiveData: String @auth(requires: USER)
 * }
 * ```
 * 
 * WHAT IS SCHEMA STITCHING AND FEDERATION?
 * 
 * - **Schema Stitching**: Combining multiple schemas into one.
 *   It allows for modular and scalable schema design.
 * - **Federation**: Enables distributed microservices to compose a single graph.
 *   Apollo Federation is a popular implementation.
 *   It allows teams to own subsets of the overall schema.
 * 
 * HOW DOES GRAPHQL HANDLE ERROR MANAGEMENT?
 * 
 * Errors are returned in a standardized `errors` array.
 * Each error includes a message and optional locations.
 * Partial data can be returned alongside errors.
 * Custom error handling can be implemented in resolvers.
 * 
 * WHAT IS THE ROLE OF BATCHING AND CACHING IN GRAPHQL?
 * 
 * Batching combines multiple requests into one.
 * Caching stores responses to improve performance.
 * They reduce load on databases and improve latency.
 * Apollo Client provides built-in caching mechanisms.
 * 
 * HOW TO IMPLEMENT AUTHENTICATION AND AUTHORIZATION IN GRAPHQL?
 * 
 * Use `context` to pass auth information to resolvers.
 * Middleware can validate tokens before query execution.
 * Resolvers can check user permissions as needed.
 * Directives can enforce auth rules declaratively.
 * 
 * WHAT ARE GRAPHQL SCALAR TYPES AND HOW TO CREATE CUSTOM SCALARS?
 * 
 * Scalar types represent leaf values in the schema.
 * Built-in scalars include `String`, `Int`, `Boolean`.
 * Custom scalars handle types like `Date`, `JSON`, `URL`.
 * 
 * **Example**:
 * 
 * ```graphql
 * scalar Date
 * 
 * type Event {
 *   id: ID!
 *   date: Date!
 * }
 * ```
 * 
 * **Resolver**:
 * 
 * ```javascript
 * const { GraphQLScalarType } = require('graphql');
 * 
 * const DateScalar = new GraphQLScalarType({
 *   name: 'Date',
 *   parseValue: (value) => new Date(value),
 *   serialize: (value) => value.toISOString(),
 *   parseLiteral: (ast) => new Date(ast.value),
 * });
 * ```
 * 
 * This custom scalar handles date serialization and parsing.
 */

/**
 *       WE UNDERSTOOD REST API AND GRAPHQL FOR GRPC WE DON'T NEED TO DO ANY PRACTICAL BASIC UNDERSTANDING IS MORE THEN GOOD
 * 
 *       https://www.youtube.com/watch?v=Yw4rkaTc0f8  (BEST VIDEO FOR GRPC) THAT MUCH KNOWLEDGE IS MORE THEN ENOUGTH
 */


                                   /**BASIC UNDERSTADING OF gRPC */

  
/**
 * WHAT IS gRPC?
 *
 * gRPC is an open-source Remote Procedure Call (RPC) framework developed by Google.
 * It enables efficient communication between services, using HTTP/2 for transport.
 * gRPC uses Protocol Buffers as the Interface Definition Language (IDL) and data serialization format.
 * This combination allows for high performance, low latency, and cross-language interoperability.
 *
 * **Example**: In a microservices architecture, gRPC can connect services written in different languages.
 * A Python service can easily communicate with a Java service using gRPC, thanks to the common Protocol Buffers definitions.
 *
 * ---
 *
 * I HAVE REST AND GRAPHQL; WHY DO I NEED gRPC?
 *
 * While REST and GraphQL are suitable for client-server interactions, gRPC offers advantages for service-to-service communication:
 *
 * - **Performance**: Uses binary serialization (Protocol Buffers) which is faster and more efficient than JSON.
 * - **Streaming Support**: Provides native support for client, server, and bidirectional streaming.
 * - **Strong Typing**: Enforces a strict contract between client and server, reducing runtime errors.
 * - **Code Generation**: Automatically generates client and server code in multiple languages.
 *
 * **Example**: If you have a real-time chat application, gRPC's bidirectional streaming can handle messages more efficiently than REST or GraphQL.
 *
 * ---
 *
 * BEST CASES WHEN TO CHOOSE gRPC?
 *
 * - **Microservices Communication**: Ideal for internal communication between microservices due to its efficiency.
 * - **Low-Latency Systems**: Suitable for applications where speed is critical, like trading platforms.
 * - **Streaming Data**: Great for use cases involving live data feeds or real-time updates.
 * - **Polyglot Environments**: Useful when services are written in different programming languages.
 *
 * **Example**: In a video streaming service, gRPC can handle real-time video data transfer between servers.
 *
 * ---
 *
 * WE ALREADY HAD RPC PROTOCOLS; WHAT EXACT CHANGE DID GOOGLE MAKE SO THAT gRPC BECAME THAT FAMOUS?
 *
 * Google modernized RPC by introducing:
 *
 * - **HTTP/2 Support**: Leveraging features like multiplexing and header compression.
 * - **Protocol Buffers**: Efficient serialization format that is language-neutral.
 * - **Open-Source Availability**: Encouraged community adoption and contributions.
 * - **Built-In Authentication**: Supports SSL/TLS and token-based authentication.
 * - **Pluggable Load Balancing**: Integrates with various load balancing strategies.
 *
 * **Example**: Traditional RPC didn't support streaming or modern web protocols, but gRPC fills that gap with enhanced features.
 *
 * ---
 *
 * IN-DEPTH UNDERSTANDING OF gRPC
 *
 * **Core Components**:
 *
 * - **Service Definition**: Services are defined in `.proto` files using Protocol Buffers syntax.
 * - **Protocol Buffers**: Serves as both the IDL and the message serialization format.
 * - **Stub Generation**: gRPC tools generate client and server code from the service definitions.
 * - **Communication**: Uses HTTP/2 for transport, supporting advanced features like flow control.
 *
 * **Types of RPCs**:
 *
 * - **Unary RPC**: Single request and response.
 * - **Server-Side Streaming RPC**: Server sends a stream of responses.
 * - **Client-Side Streaming RPC**: Client sends a stream of requests.
 * - **Bidirectional Streaming RPC**: Both client and server exchange streams.
 *
 * **Example**: Implementing a stock price service where the client receives continuous updates via server-side streaming.
 *
 * ---
 *
 * WHAT IS PROTOCOL BUFFER AND HOW IS IT HELPFUL IN gRPC?
 *
 * Protocol Buffers are Google's language-neutral, platform-neutral mechanism for serializing structured data.
 *
 * - **Efficient Serialization**: Smaller and faster than traditional text-based formats like JSON.
 * - **IDL Support**: Defines the structure of services and messages in `.proto` files.
 * - **Cross-Language Support**: Can generate code for multiple programming languages.
 *
 * **Role in gRPC**:
 *
 * - **Defines Services and Messages**: Acts as the contract between client and server.
 * - **Enables Code Generation**: Tools generate boilerplate code, reducing development effort.
 * - **Ensures Compatibility**: Supports backward and forward compatibility in message formats.
 *
 * **Example**: Defining a message in Protocol Buffers:
 *
 *   ```proto
 *   message User {
 *     int32 id = 1;
 *     string name = 2;
 *     string email = 3;
 *   }
 *   ```
 *
 * ---
 *
 * WHAT DO WE MEAN WHEN WE SAY IDL IN TERMS OF gRPC?
 *
 * IDL stands for Interface Definition Language.
 *
 * - **Purpose**: Specifies the interfaces (services and methods) and data types used.
 * - **In gRPC**: Protocol Buffers serve as the IDL.
 * - **Benefits**:
 *   - **Language Neutrality**: Can be used with various programming languages.
 *   - **Automatic Code Generation**: Simplifies client and server development.
 *   - **Consistency**: Ensures all parties adhere to the same contract.
 *
 * **Example**: The `.proto` file defines the service interface:
 *
 *   ```proto
 *   service OrderService {
 *     rpc CreateOrder (OrderRequest) returns (OrderResponse);
 *   }
 *   ```
 *
 * ---
 *
 * OVERALL ARCHITECTURE OF gRPC
 *
 * **Components**:
 *
 * - **Client Application**: Initiates RPC calls.
 * - **Server Application**: Implements the service methods.
 * - **Stub (Client and Server)**: Generated code that handles communication.
 * - **Channel**: Represents a connection to the server.
 * - **Transport Layer**: Uses HTTP/2 for data transmission.
 * - **Serialization Layer**: Utilizes Protocol Buffers for encoding messages.
 *
 * **Communication Flow**:
 *
 * 1. **Define the Service**: Create `.proto` files with service and message definitions.
 * 2. **Generate Code**: Use `protoc` to generate stubs for client and server.
 * 3. **Implement Server Logic**: Write the server-side code to handle incoming requests.
 * 4. **Establish Channel**: Client creates a channel to the server.
 * 5. **Make RPC Calls**: Client uses the stub to call service methods.
 * 6. **Data Transmission**: Messages are serialized and sent over HTTP/2.
 * 7. **Receive Responses**: Server processes requests and sends back responses.
 *
 * **Example**: In a weather app, the client can request weather data from the server using gRPC calls.
 *
 * ---
 *
 * AS A FRONTEND DEVELOPER, HOW MUCH gRPC IS MORE THAN ENOUGH? GIVE ME DETAILED ANSWER AND TEACH ALL THOSE POINTS.
 *
 * **Understanding gRPC-Web**:
 *
 * - **Limitations in Browsers**: Browsers lack full support for HTTP/2 features required by gRPC.
 * - **gRPC-Web**: A JavaScript client library that allows web apps to interact with gRPC services.
 * - **Proxy Requirement**: A proxy server (like Envoy) is needed to translate between gRPC-Web and gRPC.
 *
 * **Key Learning Points**:
 *
 * - **Service Definitions**: Learn to read and understand `.proto` files.
 * - **Code Generation**: Use `protoc` with the `grpc-web` plugin to generate client code.
 * - **Making RPC Calls**: Use the generated code to perform RPCs from your frontend code.
 * - **Handling Streaming**: Understand that gRPC-Web supports server-side streaming but not client-side or bidirectional streaming.
 * - **Error Handling**: Implement robust error handling for network and application errors.
 * - **Security Considerations**: Learn about handling CORS and securing communications.
 *
 * **Example**:
 *
 * 1. **Define the Service**:
 *
 *    ```proto
 *    service ChatService {
 *      rpc SendMessage (ChatMessage) returns (ChatResponse);
 *      rpc StreamMessages (StreamRequest) returns (stream ChatMessage);
 *    }
 *    ```
 *
 * 2. **Generate Client Code**:
 *
 *    ```bash
 *    protoc -I=. chat.proto \
 *      --js_out=import_style=commonjs:./client \
 *      --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./client
 *    ```
 *
 * 3. **Use in Frontend Application**:
 *
 *    ```javascript
 *    import { ChatServiceClient } from './client/ChatServiceClientPb';
 *    import { ChatMessage } from './client/chat_pb';
 *
 *    const client = new ChatServiceClient('http://localhost:8080');
 *
 *    const message = new ChatMessage();
 *    message.setText('Hello, World!');
 *
 *    client.sendMessage(message, {}, (err, response) => {
 *      if (err) {
 *        console.error('Error:', err);
 *      } else {
 *        console.log('Message sent:', response);
 *      }
 *    });
 *    ```
 *
 * **Conclusion**:
 *
 * - **Focus on Integration**: Understand how to integrate gRPC services with your web application using gRPC-Web.
 * - **Learn the Tools**: Get comfortable with the tooling for code generation and proxy setup.
 * - **Understand Limitations**: Be aware of the differences between gRPC and gRPC-Web, especially regarding streaming.
 * - **Collaborate Effectively**: Work closely with backend developers to ensure smooth integration.
 *
 * By grasping these concepts, you'll be well-equipped to use gRPC in your frontend projects where appropriate.
 *
 */
                                 
