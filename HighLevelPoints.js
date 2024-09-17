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
 *                               BASIC ABOUT ALL AVAILABLE PROTOCOLS
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