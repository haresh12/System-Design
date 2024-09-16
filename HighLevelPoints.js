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
