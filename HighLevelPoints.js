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


