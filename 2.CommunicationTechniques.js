                                             /** COMMUNICATION TECHNIQUES */

/**
 *      
 *                          SHORT POLLING
 * 
 * 
 * WHAT IS SHORT POLLING ?
 * 
 * Short polling is a technique where the client sends 
 * HTTP requests to the server at regular intervals 
 * (e.g., every few seconds) to check for new data or updates. 
 * The server responds with the current state, even if there 
 * are no new updates. 
 * 
 * Unlike long polling or WebSockets, short polling is simpler 
 * but can be less efficient as it generates multiple requests 
 * which increase network overhead.
 * 
 * 
 * SCENARIO WHERE SHORT POLLING IS USEFUL ?
 * 
 * Short polling is useful when:
 * 
 * 1. Real-time communication is not critical but periodic 
 *    updates are required.
 *    - Example: A news feed or chat app where updates don’t 
 *      need to be instantaneous.
 * 
 * 2. The client cannot support advanced techniques like 
 *    WebSockets or long polling due to technical constraints.
 * 
 * 3. Server-side events are unpredictable, making it inefficient 
 *    to hold open connections for long periods.
 * 
 * 
 * WHAT CHANGES DO WE NEED IN BACKEND AND FRONTEND ?
 * 
 * Backend:
 * 
 * 1. The server should be capable of responding to frequent 
 *    requests without performance issues (e.g., caching results).
 * 
 * 2. Server must return immediate responses even when 
 *    no new data is available.
 * 
 * Frontend:
 * 
 * 1. Use `setInterval()` or similar mechanisms to send 
 *    requests at regular intervals.
 * 
 * 2. Efficiently handle the server response and update the 
 *    UI if new data is available.
 * 
 * 
 * BEST JAVASCRIPT EXAMPLE ?
 * 
 * // Short polling using setInterval in JavaScript
 * 
 * function shortPoll() {
 *   setInterval(async () => {
 *     try {
 *       const response = await fetch('/api/check-updates');
 *       const data = await response.json();
 *       if (data.newUpdates) {
 *         updateUI(data);
 *       }
 *     } catch (error) {
 *       console.error('Polling error:', error);
 *     }
 *   }, 5000);  // Poll every 5 seconds
 * }
 * 
 * 
 * MORE ADVANCED TOPICS TO CONSIDER:
 * 
 * 1. **Polling Efficiency**: 
 *    - **What is it?**
 *      Polling efficiency refers to optimizing the frequency and 
 *      logic of polling to reduce unnecessary requests and server 
 *      load. For instance, you can implement **exponential backoff**, 
 *      where the interval between polling requests increases 
 *      progressively if no updates are available.
 *    - **How to implement?**
 *      Start with a short interval (e.g., 5 seconds). If no updates 
 *      are received, double the interval (e.g., 10, 20, 40 seconds) 
 *      until a maximum limit is reached.
 * 
 * 2. **Error Handling**: 
 *    - **What is it?**
 *      Ensuring that short polling gracefully handles errors such as 
 *      network failures, server downtimes, or request timeouts.
 *    - **How to implement?**
 *      Use a retry mechanism in case of failure. You can use techniques 
 *      like **retry with exponential backoff** to avoid overwhelming 
 *      the server. 
 *      Example:
 *      ```javascript
 *      function shortPollWithRetry() {
 *        let retryCount = 0;
 *        const maxRetries = 5;
 *        async function poll() {
 *          try {
 *            const response = await fetch('/api/check-updates');
 *            const data = await response.json();
 *            if (data.newUpdates) {
 *              updateUI(data);
 *              retryCount = 0;  // Reset on success
 *            }
 *          } catch (error) {
 *            retryCount++;
 *            if (retryCount < maxRetries) {
 *              setTimeout(poll, Math.pow(2, retryCount) * 1000);  // Exponential backoff
 *            } else {
 *              console.error('Max retries reached');
 *            }
 *          }
 *        }
 *        poll();
 *      }
 *      ```
 * 
 * 3. **Polling vs Push (WebSockets)**:
 *    - **What is it?**
 *      Understanding when to use polling vs real-time data push 
 *      technologies like WebSockets or Server-Sent Events (SSE). 
 *      Short polling might not be ideal for high-frequency real-time 
 *      communication.
 *    - **How to implement?**
 *      For real-time apps (e.g., stock market tickers or live messaging), 
 *      WebSockets are preferable because they maintain an open connection 
 *      and push data as soon as new information is available, avoiding the 
 *      need for repeated requests.
 * 
 * 4. **Throttling and Rate Limiting**:
 *    - **What is it?**
 *      Servers often implement rate-limiting to prevent overloading from 
 *      frequent requests (DDoS protection). Clients should handle this 
 *      gracefully by not exceeding request limits.
 *    - **How to implement?**
 *      Add logic in your client to respect rate limits provided by the 
 *      server. For example, if the server response includes headers like 
 *      `Retry-After`, your polling mechanism should respect the indicated 
 *      delay before sending the next request.
 * 
 */

 /**
 *                                        LONG POLLING - IN-DEPTH EXPLANATION
 *
 * WHAT IS LONG POLLING?
 *
 * Long polling is a technique used to emulate real-time communication between the client and server.
 * The client sends an HTTP request to the server, and the server holds the request open until either:
 * 1. New data becomes available.
 * 2. A timeout occurs (typically after 30-60 seconds).
 * 
 * Once the client receives the response, it immediately sends another request to repeat the process,
 * thereby creating a continuous loop of requests and responses without the need for a permanent connection.
 *
 * HOW DOES LONG POLLING WORKS UNDER THE HOOD?
 * 
 * Here's the sequence of how long polling operates:
 *
 * 1. **Initial Request**: 
 *    The client sends an HTTP request (e.g., `GET /updates`) to the server.
 * 
 * 2. **Server Holds Connection**:
 *    - The server receives the request and doesn’t respond immediately. 
 *    - The server holds the connection open while waiting for new data (e.g., a new message in a chat, a price update).
 *    - During this time, the client is "connected" to the server via an open connection, even though no data is sent.
 *    - The server doesn’t block other tasks; it uses **asynchronous programming** to keep the connection alive without
 *      impacting other processes.
 * 
 * 3. **Response**:
 *    - If new data arrives before the timeout, the server responds to the client with the data and closes the connection.
 *    - If no new data is available, the server responds with an empty or timeout response (e.g., `HTTP 204 No Content`).
 * 
 * 4. **Client Reconnects**:
 *    Once the client receives a response, whether it's new data or a timeout, it immediately re-initiates the request 
 *    to keep polling for new updates.
 * 
 * NEED TO UNDERSTAND: HOW DOES THE REQUEST GET HELD FOR A LONG TIME?
 *
 * - **HTTP/1.1 Keep-Alive**: HTTP/1.1 uses the **Keep-Alive** header, which allows the server to keep the TCP connection 
 *   alive without closing it after a response is sent.
 * 
 * - **Connection Management**: The server holds the request at the application level (using non-blocking I/O, such as Node.js' 
 *   event loop or Java's async frameworks). This way, the server can handle many open connections without using a separate 
 *   thread for each connection.
 * 
 * - **No Immediate Response**: In long polling, the server does not immediately respond to an incoming HTTP request, unless 
 *   there’s data available or a predefined timeout is reached. This "waiting" happens asynchronously, meaning the server 
 *   doesn’t block other processes.
 * 
 * **Connection Handling in HTTPS**:
 * 
 * 1. **HTTPS Handshake**: The first time a client initiates a long-polling request, there’s an SSL/TLS handshake between 
 *    the client and server. This handshake ensures that the data being transmitted is encrypted.
 * 
 * 2. **Reusing Connections**: Once the handshake is done, the HTTPS connection can be **reused** via HTTP/1.1's persistent 
 *    connection (Keep-Alive), reducing the overhead of future handshakes.
 * 
 * 3. **Request Lifecycle**: Every time the client re-initiates the request, the TLS connection is reused (if the session 
 *    hasn’t expired), minimizing the overhead of establishing a secure connection again and again. This allows the client 
 *    and server to continue the long polling with the same encrypted connection.
 * 
 * 4. **Server-Side Concurrency**: The server must handle many simultaneous long-held connections efficiently. This can be 
 *    done using:
 *    - **Event-driven systems** like Node.js (single-threaded, non-blocking) that handle thousands of open connections without 
 *      consuming many system resources.
 *    - **Thread pooling** in environments like Java to manage multiple connections.
 * 
 * CHALLENGES WHEN DEALING WITH MILLIONS OF USERS
 *
 * 1. **Handling Millions of Open Connections**:
 *    - Each client maintains an open connection with the server for long polling. Handling millions of open connections 
 *      requires a scalable architecture.
 *    - **Event-driven architectures** (like Node.js) can efficiently handle thousands of simultaneous connections with 
 *      minimal resource usage because they don’t require a dedicated thread per connection.
 *    - **Load balancing** is critical for distributing these millions of connections across multiple servers. A common 
 *      strategy is to use a reverse proxy (like NGINX) to distribute connections evenly.
 *
 * 2. **Scalability**:
 *    - Long polling isn’t as scalable as **WebSockets**. While the connection is open, resources are consumed on both the 
 *      server and client, which can be expensive.
 *    - Scaling involves horizontal scaling—spinning up more servers or containers to distribute the load.
 *    - Solutions like **Redis Pub/Sub** or message queues can be introduced to communicate between backend servers 
 *      so that clients connected to different servers can still receive updates in real-time.
 * 
 * 3. **Connection Timeouts**:
 *    - With millions of users, **timeouts** need to be managed carefully. A **timeout** should trigger a new connection 
 *      attempt by the client.
 *    - Network conditions should be considered: If users are in areas with poor internet connections, you may need to 
 *      increase timeout intervals or introduce **exponential backoff** to prevent overloading the server.
 * 
 * BACKEND CHANGES:
 *
 * 1. **Non-blocking, event-driven architecture**:
 *    - Use non-blocking servers like **Node.js** or **Nginx** with **asynchronous programming** to handle long-held requests.
 *    - This prevents the server from getting overwhelmed by thousands of open connections.
 * 
 * 2. **Efficient data retrieval**:
 *    - If your long polling is fetching data from a database, make sure the database queries are optimized and fast. Use 
 *      techniques like **caching** or **message queues** (like RabbitMQ or Redis) to prevent database overload.
 * 
 * 3. **Load Balancing**:
 *    - Use a load balancer (NGINX, AWS Load Balancer, etc.) to distribute the load of incoming requests across multiple 
 *      server instances.
 * 
 * FRONTEND CHANGES:
 *
 * 1. **Retry Logic**:
 *    - Implement retry mechanisms in case of server failure or timeouts. Use **exponential backoff** to gradually increase 
 *      the time between retries to avoid overwhelming the server.
 * 
 * 2. **Persistent Connections**:
 *    - Ensure the client can reinitiate the connection immediately after receiving a response, whether it’s a new data 
 *      response or a timeout.
 * 
 * 3. **Error Handling**:
 *    - Implement robust error handling in the client to manage network issues, server downtime, or request timeouts.
 * 
 * 4. **Optimize UI updates**:
 *    - Only update the UI when new data is received to reduce unnecessary re-renders.
 * 
 * THINGS TO CONSIDER WHEN USING LONG POLLING:
 *
 * 1. **Scalability**: Long polling can lead to scalability issues as the number of concurrent users increases. Each open 
 *    connection consumes server resources, and managing thousands or millions of open connections requires careful architecture 
 *    planning.
 * 
 * 2. **Timeouts**: Clients should handle timeouts gracefully. After a timeout, they should reattempt the request while 
 *    balancing the retry frequency to prevent flooding the server.
 * 
 * 3. **Server Overhead**: Since the server keeps many connections open, it needs to manage resources like memory and CPU 
 *    effectively. Consider using **microservices architecture** with separate services handling long polling requests and 
 *    delegating data fetching to other services.
 * 
 * 4. **Security**: Since you’re keeping the connections alive for extended periods, make sure your server is secure 
 *    (use HTTPS) and that each request is authenticated properly to avoid misuse.
 * 
 * PROS AND CONS OF LONG POLLING:
 *
 * **Pros**:
 * 1. **Near Real-Time**: Provides near-real-time data without needing a constant connection like WebSockets.
 * 2. **Simplicity**: Easy to implement in any HTTP environment. Works well in environments where WebSockets are unavailable.
 * 3. **Firewall Compatibility**: Since it's based on standard HTTP, it works with most firewalls and proxies that might block WebSockets.
 *
 * **Cons**:
 * 1. **Scalability**: Maintaining millions of open connections is resource-intensive. As user load increases, it becomes 
 *    harder to scale without load balancers and horizontal scaling.
 * 2. **Latency**: Though near real-time, there may be a slight delay since the client has to reinitiate the connection 
 *    every time a response is received.
 * 3. **Increased Server Load**: Holding open connections for long periods increases the load on the server. Horizontal scaling 
 *    and efficient resource management are necessary.
 * 4. **Inefficient**: Compared to WebSockets, long polling is inefficient because it opens and closes connections repeatedly.
 * 
 * 
 * SIMPLE LONG POLLING EXAMPLE:
 *
 * Backend (Node.js):
 * 
 * const express = require('express');
 * const app = express();
 * let messages = []; // Message store
 *
 * // Long Polling endpoint
 * app.get('/long-poll', (req, res) => {
 *   if (messages.length > 0) {
 *     res.json({ messages });
 *     messages = [];
 *   } else {
 *     setTimeout(() => res.json({ messages: [] }), 30000); // Hold connection for 30s
 *   }
 * });
 * 
 * // Push message
 * app.post('/send-message', (req, res) => {
 *   messages.push("New message");
 *   res.json({ status: 'Message added' });
 * });
 * 
 * app.listen(3000, () => console.log('Server running on port 3000'));
 *
 * Frontend (JavaScript):
 *
 * function longPoll() {
 *   fetch('/long-poll')
 *     .then(response => response.json())
 *     .then(data => {
 *       if (data.messages.length > 0) {
 *         console.log("New messages:", data.messages); // Handle new messages
 *       }
 *       longPoll(); // Reconnect after response
 *     })
 *     .catch(err => console.error('Polling error:', err));
 * }
 * longPoll(); // Start the long-polling loop
 * 
 */


/**                                        WEBSOCKET - IN-DEPTH EXPLANATION
 *
 *  WHAT IS WEBSOCKET CONNECTION AND HOW DOES IT WORK UNDER THE HOOD?
 * 
 *  WebSocket is a communication protocol that provides **full-duplex** communication channels over a single TCP connection.
 *  It allows for real-time, two-way communication between a client (browser) and a server, unlike HTTP, which follows a
 *  request-response model.
 * 
 *  **How It Works Under the Hood**:
 *  1. **Initial HTTP Request**: The WebSocket protocol starts with an HTTP request using the `Upgrade` header to ask the server 
 *     to switch the connection to WebSocket.
 *  2. **101 Switching Protocols**: If the server agrees to switch, it responds with a `101 Switching Protocols` status code. 
 *     This is a handshake response from the server to upgrade the connection.
 *  3. **TCP Connection**: After the handshake, both the client and the server use the same TCP connection, but it’s no longer 
 *     bound by the HTTP request-response cycle. The connection remains open and either side can send messages at any time.
 *  4. **Frames**: Data is exchanged in small packets called **frames** (control frames, data frames) using the WebSocket protocol.
 *     The frames can be text or binary, and the overhead per frame is minimal compared to HTTP.
 *  5. **Closing the Connection**: Either the client or server can close the WebSocket connection using a special "close frame".
 * 
 *  WHY IS WEBSOCKET BIDIRECTIONAL? (IN-DEPTH EXPLANATION)
 * 
 *  WebSocket is considered bidirectional because both the client and the server can send and receive messages **independently**
 *  of each other. Once the WebSocket connection is established:
 *  
 *  - **Client-to-Server Communication**: The client can send data to the server without waiting for a response.
 *  - **Server-to-Client Communication**: The server can push data to the client whenever needed, without the client initiating a request.
 * 
 *  This differs from the traditional HTTP model, which is **unidirectional** — the client makes a request, and the server responds.
 *  In WebSockets, either party can start sending data at any time, and both parties can keep the connection open as long as necessary.
 * 
 *  WHAT IS 101 SWITCHING STATUS AND WHY DOES IT START WITH HTTPS?
 * 
 *  - **101 Switching Protocols**: This is an HTTP response status code that indicates the server is switching protocols, 
 *    based on the client’s request (sent using the `Upgrade` header).
 *  - **Why HTTPS First?**: WebSocket connections are established over HTTP(S) initially. The client sends an HTTP `Upgrade` request 
 *    to the server. Once the server responds with `101 Switching Protocols`, the HTTP connection is upgraded to a WebSocket.
 *    HTTPS is required first to ensure that the connection is **secure** (using TLS) before it switches to WebSocket.
 * 
 *  WHY EXPERIENCED DEVS AVOID WEBSOCKETS (IN-DEPTH PERFORMANCE DISCUSSION)?
 * 
 *  Many experienced developers are cautious about WebSockets for several reasons:
 *  
 *  1. **Scalability**: WebSockets require maintaining an **open connection** for each client. This can overwhelm a server if 
 *     not properly managed because each connection consumes resources. Traditional HTTP is stateless, so it scales better 
 *     out of the box.
 *  
 *  2. **Resource Consumption**: WebSockets maintain a **persistent** connection for the duration of the communication. 
 *     This requires careful management of memory and resources, especially for applications with thousands or millions 
 *     of clients.
 *  
 *  3. **Server Load**: WebSocket servers need to handle **concurrency** efficiently. This is challenging for traditional 
 *     blocking server architectures. Non-blocking, event-driven architectures like Node.js or using tools like NGINX 
 *     are often necessary.
 *  
 *  4. **State Management**: WebSocket connections are **stateful**. Unlike HTTP where each request is independent, 
 *     maintaining open WebSocket connections requires more attention to resource management (e.g., memory leaks, 
 *     connection timeouts).
 *  
 *  5. **Firewall and Proxy Issues**: WebSocket traffic can be blocked by firewalls or proxies that don’t support the 
 *     protocol, making it harder to use in certain enterprise environments.
 *  
 *  6. **Idle Connections**: If clients are idle for long periods, the server still needs to keep the connection alive, 
 *     consuming resources.
 * 
 *  DIFFERENCE BETWEEN WS AND WSS?
 * 
 *  - **WS (WebSocket)**: This refers to a WebSocket connection over a **plain, unencrypted** connection (similar to HTTP).
 *  - **WSS (WebSocket Secure)**: This refers to a WebSocket connection over **TLS/SSL**, meaning the data is **encrypted** 
 *    (similar to HTTPS). WSS is important for securing sensitive data, protecting the integrity of the communication.
 * 
 *  WHAT TO REVIEW WHEN USING WEBSOCKETS?
 *  
 *  1. **Security**: Ensure that you use WSS for secure communication, especially if handling sensitive data.
 *  2. **Idle Timeouts**: Close idle connections after a certain period to free up resources.
 *  3. **Connection Limits**: Set limits on the number of concurrent WebSocket connections a server can handle.
 *  4. **Resource Management**: Implement garbage collection, connection management, and resource monitoring to avoid memory leaks.
 *  5. **Handling Reconnection**: Ensure clients can reconnect gracefully if a WebSocket connection is interrupted.
 *  6. **Authentication**: Implement proper authentication to ensure only authorized clients can connect to the WebSocket server.
 * 
 *  HOW TO USE WEBSOCKETS AT SCALE?
 *  
 *  1. **Load Balancing**: Use WebSocket-compatible load balancers (like **NGINX**) to distribute connections across multiple servers.
 *  2. **Clustered Architecture**: Use a **clustered architecture** where multiple servers handle WebSocket connections. 
 *     Use a shared **Redis Pub/Sub** or message queue system to distribute messages across the cluster.
 *  3. **Backpressure Management**: Ensure that your server can handle **backpressure** when too many messages are being 
 *     sent to clients too quickly, preventing buffer overflows.
 *  4. **Scaling Horizontally**: Use containerization (e.g., Docker, Kubernetes) to scale horizontally, spinning up more 
 *     servers when needed.
 * 
 *  IF YOU WERE THE CREATOR OF WEBSOCKET, WHAT WOULD YOU FIX?
 * 
 *  One common critique of WebSocket is its **stateful nature**. If I were to redesign WebSocket, I would look into improving 
 *  the protocol’s ability to **scale efficiently** in stateless environments, similar to HTTP. Stateless communication 
 *  would make it easier to horizontally scale WebSocket connections across many servers.
 * 
 *  PROS AND CONS OF WEBSOCKETS FOR SCALED PROJECTS
 * 
 *  **Pros**:
 *  1. **Low Latency**: WebSocket offers low-latency, real-time communication, making it ideal for applications like 
 *     online gaming, stock trading, and live messaging.
 *  2. **Efficient**: Since WebSocket uses small data frames and avoids the overhead of traditional HTTP requests, 
 *     it’s more efficient for frequent communication.
 * 
 *  **Cons**:
 *  1. **Resource-Intensive**: WebSockets are stateful and require dedicated resources for each open connection, 
 *     which can strain servers if not managed correctly.
 *  2. **Complexity**: Managing large numbers of WebSocket connections adds complexity to resource management and 
 *     horizontal scaling.
 *  3. **Firewall Issues**: Some firewalls may block WebSocket traffic, causing accessibility problems.
 * 
 *  IN-DEPTH NETWORK FLOW FOR WEBSOCKET:
 * 
 *  1. **Initial HTTP Connection**: The client initiates an HTTP connection, sending a request to the server with the 
 *     `Upgrade: websocket` header to request switching to the WebSocket protocol.
 * 
 *  2. **Server Handshake**: The server responds with a **101 Switching Protocols** header if it agrees to upgrade the 
 *     connection to WebSocket.
 * 
 *  3. **Upgrade to WebSocket**: After the 101 response, both client and server switch to the WebSocket protocol, 
 *     and the HTTP connection is upgraded to a **persistent TCP connection**.
 * 
 *  4. **Data Flow**: Data is exchanged between the client and server in **frames**. The frames can be text, binary, 
 *     or control frames. Either side can send data independently without waiting for a response.
 * 
 *  5. **Connection Termination**: Either party can send a close frame to terminate the connection. Once the close 
 *     frame is acknowledged, the connection is closed.
 * 
 *  SIMPLE EXAMPLE USING SOCKET.IO:
 * 
 *  // Backend (Node.js with Socket.IO)
 *  const io = require('socket.io')(3000);
 * 
 *  io.on('connection', (socket) => {
 *    console.log('Client connected');
 *    
 *    // Handle client message
 *    socket.on('message', (data) => {
 *      console.log('Received message from client:', data);
 *    });
 * 
 *    // Send message to client
 *    socket.emit('welcome', 'Hello from server');
 *    
 *    // Handle disconnect
 *    socket.on('disconnect', () => {
 *      console.log('Client disconnected');
 *    });
 *  });
 * 
 *  // Frontend (JavaScript)
 *  const socket = io('http://localhost:3000');
 * 
 *  socket.on('welcome', (data) => {
 *    console.log(data); // 'Hello from server'
 *  });
 * 
 *  // Send message to server
 *  socket.emit('message', 'Hello, server!');
 * 
 *  socket.on('disconnect', () => {
 *    console.log('Disconnected from server');
 *  });
 * 
 */




/**                                        SERVER-SIDE EVENTS (SSE) - IN-DEPTH EXPLANATION
 *  
 *  WHAT IS SERVER-SIDE EVENTS (SSE)?
 *  
 *  Server-Side Events (SSE) is a **unidirectional** communication technology where the server pushes real-time updates 
 *  to the client over an HTTP connection. It allows servers to continuously send data to the browser once an initial connection 
 *  is established, without the client having to request new updates.
 *  
 *  Unlike WebSockets, which are bidirectional, SSE is a simpler protocol designed for **streaming updates** from the server 
 *  to the client. SSE is built on top of standard HTTP and works seamlessly with browsers using the `EventSource` API.
 *  
 *  
 *  HOW DOES SSE WORK INTERNALLY? (HTTP AND NETWORK FLOW)
 *  
 *  The flow of SSE happens like this:
 *  
 *  1. **Initial HTTP Request**:
 *     - The client initiates an HTTP request to the server to open an SSE connection. This is done using the `EventSource` 
 *       API on the frontend, which sends an HTTP GET request to the server.
 *  
 *  2. **Response from the Server**:
 *     - The server responds with a special content type header: `Content-Type: text/event-stream`.
 *     - The connection remains **open** as long as the server has updates to send. The server continuously pushes events to 
 *       the client through this open connection, rather than closing it after one response.
 *  
 *  3. **Streaming Data**:
 *     - The server sends data in the form of text-based **event streams**. These streams are sent line by line in a format 
 *       that the client can interpret as a stream of events. The client processes these events as they arrive.
 *  
 *  4. **Connection Management**:
 *     - The connection is **kept alive** by the server until either the server or the client terminates it.
 *     - The client can **reconnect** if the connection is lost. This is handled automatically by the `EventSource` API, 
 *       which retries the connection if the server or network fails.
 *  
 *  WHY DO WE SAY IT'S UNI-DIRECTIONAL? WHAT'S THE DIFFERENCE BETWEEN UNI- AND BI-DIRECTIONAL?
 *  
 *  SSE is called **unidirectional** because data only flows in **one direction**: from the **server to the client**.
 *  The client cannot send messages back to the server through the same connection. Here's the key distinction:
 *  
 *  - **Uni-directional (SSE)**: Data only flows from **server to client**. The client only receives data.
 *  - **Bi-directional (WebSockets)**: Both the client and the server can send data to each other at any time.
 *  
 *  SSE is designed for use cases where the server needs to push updates to the client, but the client doesn’t need to send 
 *  data back, except for the initial HTTP request.
 *  
 *  WHAT CHANGES DO WE NEED TO MAKE IN BACKEND AND FRONTEND (IN-DEPTH)?
 *  
 *  **Backend Changes**:
 *  
 *  1. **Set the Response Header**: The server must set the `Content-Type` header to `text/event-stream` for the HTTP response.
 *  
 *  ```javascript
 *  res.setHeader('Content-Type', 'text/event-stream');
 *  ```
 *  
 *  2. **Keep the Connection Open**: The server must keep the connection open indefinitely and stream events to the client. 
 *     This can be done using `res.write()` for sending individual events.
 *  
 *  3. **Send Events in a Specific Format**: SSE expects events in a certain format:
 *     - `data: message` - A line starting with "data" contains the actual event data.
 *     - `id: 1` - An optional ID to keep track of the last event.
 *     - `event: customEventName` - Optionally specify a custom event name.
 *  
 *  Example of server-side implementation:
 *  
 *  ```javascript
 *  app.get('/events', (req, res) => {
 *    res.setHeader('Content-Type', 'text/event-stream');
 *    res.setHeader('Cache-Control', 'no-cache');
 *    res.setHeader('Connection', 'keep-alive');
 *  
 *    res.write('data: Hello from server\n\n'); // Send a message
 *  
 *    setInterval(() => {
 *      res.write(`data: ${new Date().toLocaleTimeString()}\n\n`); // Send time updates every second
 *    }, 1000);
 *  });
 *  ```
 *  
 *  **Frontend Changes**:
 *  
 *  1. **Use `EventSource` API**: The frontend must create a new `EventSource` object to establish the SSE connection.
 *     This object will automatically handle the connection and reconnect if the connection is lost.
 *  
 *  ```javascript
 *  const eventSource = new EventSource('/events');
 *  
 *  eventSource.onmessage = (event) => {
 *    console.log('Received event:', event.data);
 *  };
 *  ```
 *  
 *  2. **Handle Automatic Reconnection**: The `EventSource` API automatically reconnects if the connection drops. 
 *     You don’t need to manually implement reconnection logic.
 *  
 *  3. **Custom Event Handling**: You can listen to specific event types using `addEventListener`.
 *  
 *  ```javascript
 *  eventSource.addEventListener('customEvent', (event) => {
 *    console.log('Custom event:', event.data);
 *  });
 *  ```
 *  
 *  WHAT IS `text/event-stream` HEADER AND HOW DOES IT WORK?
 *  
 *  The `text/event-stream` header is crucial for Server-Side Events. It tells the client that the server will be sending 
 *  a stream of text-based events, rather than the typical request-response pattern.
 *  
 *  - **Keeps the Connection Open**: The browser understands that this connection should remain open to receive multiple 
 *    events, instead of closing after receiving a single response.
 *  
 *  - **Stream Processing**: The client reads the incoming data as a stream and processes it in real time, handling each 
 *    event as it comes.
 *  
 *  The magic of `text/event-stream` lies in the **streaming** capability, where data is continuously written to the response, 
 *  allowing real-time updates without reloading the page or sending additional requests.
 *  
 *  WHEN TO USE AND WHEN NOT TO USE (BEST USE CASES)?
 *  
 *  **When to Use SSE**:
 *  - **Live Updates**: When you need to push live updates from the server to the client (e.g., live sports scores, stock 
 *    prices, or live news feeds).
 *  - **Notifications**: For real-time notification systems where the server pushes updates (e.g., chat notifications, 
 *    user updates).
 *  - **Monitoring Dashboards**: SSE is great for pushing updates to real-time monitoring dashboards.
 *  
 *  **When NOT to Use SSE**:
 *  - **Bi-Directional Communication**: If the client also needs to send data to the server, use **WebSockets** instead.
 *  - **Massive Scale**: SSE can struggle with scaling if there are a large number of clients due to the nature of keeping 
 *    long-lived connections open.
 *  - **Mobile/Network Issues**: For mobile or unreliable networks, **WebSockets** or **long polling** might be a better choice 
 *    as they are more resilient to connectivity issues.
 *  
 *  WHAT IS EVENTSOURCE (IN-DEPTH EXPLANATION)?
 *  
 *  `EventSource` is the JavaScript API used to establish a connection to an SSE endpoint on the server.
 *  
 *  **How It Works**:
 *  - When you create an `EventSource` object, it sends a regular HTTP GET request to the server.
 *  - Once the server starts streaming data with `text/event-stream`, the client begins receiving these events.
 *  - `EventSource` provides methods to handle messages, custom events, and automatic reconnections.
 *  
 *  **Features**:
 *  1. **Automatic Reconnection**: If the connection drops, `EventSource` will automatically attempt to reconnect.
 *  2. **Onmessage Handler**: You can set a function to handle incoming messages with the `.onmessage` property.
 *  3. **Custom Events**: You can listen for custom event names using `.addEventListener()`.
 *  4. **ID Tracking**: You can track the last event ID using the `Last-Event-ID` header to resume from where you left off.
 *  
 *  Example:
 *  
 *  ```javascript
 *  const eventSource = new EventSource('/events');
 *  
 *  eventSource.onmessage = (event) => {
 *    console.log('Received:', event.data);
 *  };
 *  
 *  eventSource.addEventListener('customEvent', (event) => {
 *    console.log('Custom event:', event.data);
 *  });
 *  ```
 *  
 *  PROS AND CONS OF SERVER-SIDE EVENTS
 *  
 *  **Pros**:
 *  
 *  1. **Simplicity**: SSE is built on top of HTTP and is very easy to implement with minimal setup on both the client and server.
 *   No special protocols are required.
 *  
 *  2. **Auto-Reconnect**: The `EventSource` API automatically handles reconnections and doesn’t require manual implementation 
 *     of reconnection logic.
 *  
 *  3. **Lightweight**: SSE is more lightweight than WebSockets, as it only requires an open HTTP connection with minimal overhead.
 *  
 *  4. **Great for Broadcasts**: SSE works well for sending the same updates to many clients at once, making it ideal for 
 *     scenarios where the server needs to broadcast data.
 *  
 *  **Cons**:
 *  
 *  1. **Uni-directional**: SSE can only send data from the server to the client. If you need bi-directional communication, 
 *     WebSockets are a better choice.
 *  
 *  2. **Connection Limits**: SSE relies on keeping an HTTP connection open, which could exhaust resources on the server if 
 *     too many connections are opened simultaneously.
 *  
 *  3. **Limited Browser Support**: Although most modern browsers support SSE, older browsers (like Internet Explorer) do not.
 *  
 *  4. **No Binary Data Support**: SSE only supports sending text-based data. If you need to transmit binary data, WebSockets 
 *     or HTTP requests are more appropriate.
 *  
 */
        

/**
 *                                                 WEBHOOK - IN-DEPTH EXPLANATION
 * 
 *   WHAT IS A WEBHOOK? HOW DOES IT WORK IN DEPTH?
 * 
 *   A webhook is a way for one application to provide real-time data to another application by making an HTTP request 
 *   (usually POST) when a specific event occurs. It is a **server-to-server communication mechanism** where one system 
 *   sends data to another in response to a trigger.
 * 
 *   Instead of the client polling for new updates (short/long polling), the server sends data to a specific URL (the webhook 
 *   endpoint) whenever an event occurs. The receiving server is configured to handle these incoming requests and process 
 *   the data accordingly.
 *   
 *   **How Does a Webhook Work?**:
 *   1. **Trigger Event**: A predefined event happens in the source system (e.g., payment made, code pushed to a repository).
 *   2. **HTTP POST Request**: The source system makes an HTTP POST request to a specific URL (the webhook endpoint) on the 
 *      target system.
 *   3. **Data Transmission**: The POST request contains a payload with the event details (usually in JSON format) that the 
 *      receiving system can use to process the event.
 *   4. **Response**: The receiving system processes the incoming data and responds with a status (e.g., `200 OK` to acknowledge 
 *      receipt). If the webhook fails (e.g., if the receiving server is down), the source system can retry sending the data.
 * 
 * 
 *   IS A WEBHOOK JUST ONE POST REQUEST?
 *   
 *   While the **HTTP POST request** is the core mechanism behind webhooks, it is more than just "one request." It represents 
 *   an **event-driven architecture**. Instead of continuously polling for data, the source application sends data only when 
 *   an event happens. The POST request carries critical event data in real-time, which makes the process efficient.
 *   
 *   Key elements of a webhook POST request include:
 *   - **Trigger**: A specific event that initiates the POST request.
 *   - **Payload**: Data about the event (often JSON) sent to the target system.
 *   - **Response Handling**: The receiving system acknowledges the webhook or retries if the request fails.
 * 
 * 
 *   IN-DEPTH KNOWLEDGE ABOUT WEBHOOK:
 * 
 *   **Architecture**:
 *   - **Event-Driven**: Webhooks operate based on events, making them efficient for real-time communication between systems.
 *   - **HTTP-based Communication**: Webhooks primarily use HTTP(S) to send data from one system to another. The target system 
 *     must expose an endpoint capable of receiving and processing HTTP requests.
 *   - **Asynchronous**: Webhooks are asynchronous by design. The source system pushes data without waiting for the target system 
 *     to request it.
 * 
 *   **Webhook Workflow**:
 *   1. **Event Trigger**: An action like a successful payment, a repository push, or an account change occurs.
 *   2. **Webhook Invocation**: The system where the event happens makes an HTTP POST request to the predefined webhook endpoint.
 *   3. **Payload**: The POST request contains event data in JSON, XML, or form-data format. This payload includes details 
 *      such as event type, user ID, timestamps, and other relevant information.
 *   4. **Response**: The target system (which hosts the webhook endpoint) processes the incoming payload and responds with 
 *      a `200 OK` (or another appropriate status code).
 *   5. **Retries**: If the webhook fails (e.g., the target system returns a 500 error), the source system may attempt to 
 *      resend the data.
 * 
 *   Example payload from a payment system webhook:
 *   ```json
 *   {
 *     "event": "payment.success",
 *     "payment_id": "123456",
 *     "amount": 1000,
 *     "currency": "USD",
 *     "customer": {
 *       "id": "cust_abc123",
 *       "email": "customer@example.com"
 *     }
 *   }
 *   ```
 * 
 * 
 *   HOW GIT AND PAYMENT SYSTEMS USE WEBHOOKS? WHY DON’T THEY USE SHORT OR LONG POLLING INSTEAD?
 *   
 *   **Git (e.g., GitHub, GitLab)**:
 *   - Webhooks are used in services like GitHub or GitLab to notify external systems when certain events happen (e.g., 
 *     a code push, a pull request, or an issue creation).
 *   - For example, after a developer pushes new code to a GitHub repository, a webhook can trigger a build system like Jenkins 
 *     or CircleCI to automatically start a new build.
 *   - **Why not polling?**: Polling is inefficient here because it would require constantly querying GitHub's API to check 
 *     for new commits or issues. Instead, the webhook allows GitHub to notify the build system **immediately** when the event 
 *     occurs, making it a real-time notification system.
 * 
 *   **Payment Systems (e.g., Stripe, PayPal)**:
 *   - When a user completes a payment, the payment gateway (like Stripe or PayPal) triggers a webhook to notify the merchant’s 
 *     system about the transaction status (e.g., payment successful, failed).
 *   - The merchant system processes the webhook and updates the order status, sends email confirmations, or triggers other 
 *     workflows.
 *   - **Why not polling?**: Short/long polling would require the merchant’s system to repeatedly query the payment provider 
 *     to check if a payment was successful, leading to increased server load and latency. Webhooks are far more efficient 
 *     since the payment gateway pushes data **immediately** upon transaction completion.
 * 
 * 
 *   EXPLAIN THE ENTIRE NETWORK REQUEST FLOW IN A WEBHOOK:
 *   
 *   1. **Client Action/Trigger**: A user or system event occurs that triggers the webhook (e.g., a customer completes a purchase).
 *   2. **Webhook Request Initiation**:
 *      - The source system (e.g., a payment provider or GitHub) prepares the data related to the event.
 *      - It creates an HTTP POST request to the target system’s webhook endpoint.
 *   3. **Network Request**:
 *      - The source server sends the HTTP POST request over the network to the destination server (the webhook receiver).
 *      - The POST request includes headers and a payload, typically in JSON format.
 *   4. **Receiving Server**:
 *      - The receiving server, which exposes a webhook endpoint, processes the incoming POST request.
 *      - The data is parsed, validated, and processed based on the specific event (e.g., updating order status, starting a build).
 *   5. **Response**:
 *      - After successfully processing the webhook, the receiving server responds with an HTTP `200 OK` status to acknowledge receipt.
 *      - If the processing fails, the receiving server may respond with an error (e.g., 500), prompting retries.
 *   6. **Retries (if needed)**:
 *      - If the source server doesn’t receive a `200 OK` response, it may retry sending the webhook a few times, usually 
 *        with exponential backoff.
 * 
 * 
 *   EXAMPLE OF WEBHOOK BACKEND AND FRONTEND CHANGES:
 * 
 *   **Backend (Node.js Example)**:
 *   This example shows how to create a simple webhook listener in Node.js.
 * 
 *   ```javascript
 *   const express = require('express');
 *   const app = express();
 * 
 *   // Middleware to parse JSON payload
 *   app.use(express.json());
 * 
 *   // Webhook listener endpoint
 *   app.post('/webhook', (req, res) => {
 *     const event = req.body;
 * 
 *     // Handle event
 *     console.log('Received webhook event:', event);
 * 
 *     // Respond with 200 OK to acknowledge receipt
 *     res.status(200).send('Webhook received');
 *   });
 * 
 *   app.listen(3000, () => console.log('Webhook listener running on port 3000'));
 *   ```
 * 
 *   **Frontend (Sending Data Using Fetch)**:
 *   The frontend may not typically interact directly with webhooks, but to simulate a webhook, you can use `fetch()`:
 * 
 *   ```javascript
 *   fetch('/webhook', {
 *     method: 'POST',
 *     headers: {
 *       'Content-Type': 'application/json',
 *     },
 *     body: JSON.stringify({
 *       event: 'payment.success',
 *       payment_id: '123456',
 *       amount: 1000,
 *       currency: 'USD',
 *     }),
 *   }).then(response => response.text())
 *     .then(data => console.log('Webhook response:', data));
 *   ```
 * 
 * 
 *   WHEN TO USE WEBHOOKS AND WHEN NOT TO USE WEBHOOKS:
 *   
 *   **When to Use**:
 *   - **Real-time Notifications**: Use webhooks when you need to notify another system in real-time (e.g., order processing, 
 *     CI/CD build triggers, payment confirmation).
 *   - **Event-Driven Architectures**: If your system relies on specific events to trigger other workflows (e.g., payment 
 *     processing, automated tasks), webhooks are ideal.
 *   - **Efficiency**: When polling would be inefficient, and you need a more scalable, real-time solution.
 * 
 *   **When Not to Use**:
 *   - **Bi-directional Communication**: Webhooks are **unidirectional**. If you need back-and-forth communication between 
 *     systems, consider using **WebSockets** or **APIs**.
 *   - **High Failure Tolerance**: Webhooks can fail if the receiving server is down or the request fails. If failure recovery 
 *     is critical, you may want to explore more robust event systems like message queues.
 *   - **Low-frequency Updates**: If updates are infrequent and real-time isn’t needed, a simple API call or even polling 
 *     might be easier to manage.
 * 
 * 
 *   PROS AND CONS OF WEBHOOKS:
 * 
 *   **Pros**:
 *   - **Real-time Data**: Webhooks provide immediate data delivery, making them perfect for real-time applications.
 *   - **Efficient**: Unlike polling, webhooks only send data when an event occurs, reducing server load and unnecessary requests.
 *   - **Decoupling**: Webhooks decouple systems by allowing one system to notify another when needed without requiring 
 *     constant communication.
 *   - **Simplicity**: Webhooks are simple to implement, requiring only an HTTP POST request and a receiving endpoint.
 * 
 *   **Cons**:
 *   - **Error Handling**: If the receiving server is down or the network fails, webhooks may not be delivered, leading to 
 *     potential data loss (unless retries are in place).
 *   - **Security Risks**: Exposing a webhook endpoint can be a security risk if proper validation, authentication, or 
 *     authorization isn’t enforced.
 *   - **Debugging**: Debugging webhook issues can be challenging since the communication happens asynchronously, making it 
 *     harder to trace errors.
 *   - **Scaling**: If you need to send webhooks to many different systems, scaling can become more complex.
 */




/**
 *  REVISION
 * 
 *   SHORT POLLING 
 *   CLEAR INTERVAL ALWAYS
 *   LESS RESOURCE UTILZATION
 * 
 *   LONG POLLING 
 *   BEST THING I LEARED THAT YOU CAN HOLD THE REQUEST
 *   REAL HARD WHEN WE HAVE MILLIONS OF USER MEANS MILLIONS OF 
 *   OPEN CONNECTION
 *   EASIEST WAY TO ACHIEVE JUST IN SERVER DON'T DO res.send()
 *   or res.json() MEANS YOU ARE NEVER COMPLITING REQUEST.
 *   SEE YOU ARE NOT CONNECTING ONCE ONLY ITS LIKE EK REQUEST
 *   KHTM TO DUSRI BEJDO
 * 
 *   WEBSOCKET
 *   101 UPGRADE SWICHING PROTOCOL 
 *   BIDIRECTIONAL 
 *   SOCKET.IO
 *   EMIT ON , connect disconnect SEE ALL THESE EVENTS THAT WE NEED TO PLAY WITH
 *   ws and wss two other best libries
 *   wss is like web socket secure
 * 
 *  SSE : Server side event
 * 
 *  best think in this module and simplest 
 * 
 *  in server add few headers like text/event-stream
 *  connection-type keep-alive and then write as much 
 *  as data you want
 *  res.write() // exmple every 5 sec write something
 *  clear interal if you are using it MUST
 *  how to get those events in client now simple use
 *  new EventSource('/endpoint');
 *  eventsource.onMessege()
 *  event me data kya kya milega event | data | id
 *  
 * 
 *  Webhook
 *  Just one post api 
 *  used many many times have clear idea
 *  x and y system are connected and on
 *  certien event y sytem wanted to give acknoldgement
 *  of something at that time x will give end-point 
 *  and tell that once you are done please call this 
 *  end-point 
 * 
 *  In webhook think it like as api we have used in real
 *  time for payment getway razopay and another one which
 *  used most is github hook"
 *  
 */
                                         