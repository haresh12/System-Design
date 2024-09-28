/**
 * IMPORTANCE OF PERFORMANCE: WHY DO WE EVEN NEED THAT?
 * 
 * **1. Why is performance important in web development?**
 *    - Performance is critical because it directly influences user engagement, user satisfaction, conversion rates, 
 *      and overall business success. Poor performance often results in high bounce rates, meaning users will leave 
 *      your website if it loads slowly. A well-performing application ensures smooth interaction, faster load times, 
 *      and overall better user experience. The faster and more responsive the application, the more likely users 
 *      are to return and engage.
 *
 * **2. How does performance impact the end user?**
 *    - Performance affects how quickly a user can access content and interact with the application. If a website or 
 *      app is slow to load or unresponsive, users experience frustration. This can result in lost opportunities for 
 *      engagement and even loss of revenue for businesses. Additionally, poor performance impacts accessibility on 
 *      mobile devices or areas with slower internet speeds, creating barriers for a broader audience.
 *
 * **3. Why do we need to focus on performance in modern web applications?**
 *    - As modern web apps become more feature-rich, they also grow more complex, with heavier assets like large 
 *      JavaScript files, videos, images, and third-party libraries. Without optimization, this increased complexity 
 *      can severely impact performance. Developers must ensure that even with rich content and features, the 
 *      application remains fast, scalable, and optimized for all types of users and devices.
 *
 * **4. How does performance affect SEO and search rankings?**
 *    - Performance is directly tied to SEO (Search Engine Optimization). Search engines like Google use performance 
 *      metrics (like page speed) as a ranking factor. Websites that load faster have a better chance of ranking higher 
 *      on search results. Additionally, metrics like Core Web Vitals—focusing on speed, responsiveness, and visual 
 *      stability—are now part of Google’s ranking criteria, so improving performance directly improves search rankings.
 *
 * **5. What are some key performance metrics to focus on?**
 *    - **Time to First Byte (TTFB)**: The time it takes for the server to respond.
 *    - **First Contentful Paint (FCP)**: When the first piece of content is rendered.
 *    - **Largest Contentful Paint (LCP)**: The time it takes for the largest content element to load.
 *    - **Time to Interactive (TTI)**: How quickly the page becomes fully interactive.
 *    - **Cumulative Layout Shift (CLS)**: Measures visual stability during loading (unexpected shifts harm user experience).
 *    These metrics give insights into how fast a website appears and becomes usable to users.
 *
 * **6. What are the main factors that degrade performance in web applications?**
 *    - **Large file sizes**: Unoptimized images, videos, and large JavaScript files can slow down page loads.
 *    - **Third-party scripts**: Ads, analytics, and social media widgets can add considerable load time.
 *    - **Unnecessary re-renders**: Poor coding practices, such as not using memoization, can cause components to re-render unnecessarily, slowing down performance.
 *    - **Blocking resources**: Scripts that block the rendering of critical content can delay the time it takes for users to see meaningful content.
 *
 * **7. What can be done to optimize performance in web applications?**
 *    - **Code Splitting**: Break down JavaScript into smaller, manageable chunks using techniques like lazy loading. This ensures only the necessary code is loaded for the current view.
 *    - **Image Optimization**: Compress images, use modern formats like WebP, and serve responsive images using `srcset` to load appropriate image sizes based on device screen.
 *    - **Lazy Loading**: Defer loading of non-critical resources (images, scripts) until they’re needed. For example, lazy load images as they come into the viewport.
 *    - **Minification and Bundling**: Minify JavaScript, CSS, and HTML to remove unnecessary whitespace, comments, and reduce file size. Bundle files to reduce HTTP requests.
 *    - **Content Delivery Network (CDN)**: Serve static assets from geographically distributed servers to reduce latency for users worldwide.
 *
 * **8. What impact does performance have on mobile users?**
 *    - Mobile users often face performance bottlenecks such as slower network speeds, limited bandwidth, and lower-powered devices. A poorly optimized website will load much slower on mobile, affecting mobile SEO rankings, engagement, and user retention. Features like responsive design, efficient caching strategies, and reducing the reliance on heavy JavaScript improve the mobile user experience.
 *
 * **9. How do caching strategies improve performance?**
 *    - **Browser Caching**: Storing assets like images, styles, and scripts in the browser cache can reduce the number of requests made on subsequent visits. Cache-Control headers can dictate how long content should be cached.
 *    - **Service Workers**: For advanced caching, service workers can cache specific resources and serve them when the network is slow or unavailable, improving load times for repeated visits or offline access.
 *    - **API Caching**: Cache API responses to prevent unnecessary network requests when the data doesn’t frequently change, which saves bandwidth and speeds up content delivery.
 *
 * **10. What are common performance pitfalls developers face?**
 *    - **Too much JavaScript**: Large or unoptimized JavaScript files can lead to slow initial load times and make the app sluggish.
 *    - **Inefficient Data Fetching**: Over-fetching or frequent API calls without caching leads to slow performance. GraphQL or efficient REST calls can help mitigate this.
 *    - **Heavy Animations**: Overuse of CSS animations and transitions without hardware acceleration can degrade performance.
 *    - **Not leveraging native browser APIs**: Many developers miss out on native browser APIs like IntersectionObserver for efficient lazy loading or the `requestIdleCallback()` for scheduling non-urgent tasks.
 *
 * **ADVANCED PERFORMANCE OPTIMIZATION FACTS THAT 99.999% DEVELOPERS DON'T KNOW:**
 * 
 * 1. **Using Web Workers for Heavy Computations**: Web Workers allow you to run JavaScript code in the background, 
 *    keeping the UI thread free to handle user interactions without freezing or lagging.
 * 
 * 2. **Preload, Prefetch, and Preconnect**: Using `<link rel="preload">` to load critical resources early, 
 *    `rel="prefetch"` to load future resources, and `rel="preconnect"` to establish early connections to external resources 
 *    can dramatically improve perceived performance.
 * 
 * 3. **HTTP/2 and HTTP/3**: These newer versions of the HTTP protocol offer multiplexing, header compression, and faster 
 *    connection setups, significantly improving loading times, especially on high-latency networks.
 * 
 * 4. **Avoiding Render-Blocking Resources**: Use asynchronous loading (`async` and `defer`) for JavaScript, 
 *    so scripts don't block the rendering of content.
 * 
 * 5. **Critical CSS**: Inline only the critical CSS necessary for the first paint and defer the rest. This ensures 
 *    the user sees content as quickly as possible, reducing the perceived load time.
 */


                         
                                                                 /** PERFORMANCE MONITERING */

/**
 * PERFORMANCE MONITORING
 * 
 * **1. In-depth understanding of Web Vitals?**
 *    - Web Vitals are a set of metrics defined by Google to measure user experience on the web. They provide insights 
 *      into how users experience load speed, interactivity, and visual stability of a website.
 * 
 * **2. What is FP, FCP, LCP, DCP, FID, CLS, and the new INP?**
 *    - **FP (First Paint):** Measures when the browser renders anything to the screen. It's not very user-focused, 
 *      but it shows the very first visual response.
 * 
 *    - **FCP (First Contentful Paint):** Measures when the browser renders the first piece of meaningful content 
 *      (text, image, etc.). It’s a more user-focused metric than FP.
 * 
 *    - **LCP (Largest Contentful Paint):** How long it takes for the largest piece of visible content 
 *      (like an image or heading) to load. A critical performance metric that impacts perceived load speed.
 * 
 *    - **DCP (Dwell Content Paint):** Not a well-known metric, but it could refer to measuring the user's engagement 
 *      or the time they dwell on content.
 * 
 *    - **FID (First Input Delay):** Measures the delay from when a user first interacts with a page (e.g., clicks a link) 
 *      to when the browser can respond to that interaction. It's about interactivity.
 * 
 *    - **CLS (Cumulative Layout Shift):** Tracks unexpected layout shifts while the page is loading. A low CLS means the 
 *      elements remain stable while loading, which improves the user experience.
 * 
 *    - **INP (Interaction to Next Paint):** A newer metric that evaluates the responsiveness of the page to all user interactions, 
 *      not just the first. It improves upon FID by measuring user interactions throughout the lifecycle of the page.
 * 
 * **3. Why do we have a performance tab in Chrome?**
 *    - The Chrome Performance Tab is a powerful tool to monitor, analyze, and optimize website performance. 
 *      It provides detailed insights into the loading, scripting, and rendering phases of a web page. 
 *      You can record a session and review all aspects of the performance, including JavaScript execution times, 
 *      resource load times, layout shifts, and user interactions.
 * 
 * **4. Is FID really a good way to measure web performance, and why are we changing it with INP?**
 *    - **FID** only measures the delay before the first interaction, which does not cover the entire user experience. 
 *      For example, if a site becomes unresponsive later, FID won't capture that. 
 *    - **INP** provides a broader understanding by measuring the time it takes for each interaction to be processed 
 *      throughout the user’s session. This gives a more holistic view of interactivity and responsiveness.
 * 
 * **5. In-depth understanding of INP (Interaction to Next Paint)?**
 *    - INP is a new web performance metric designed to capture the delay between user input and the next frame being painted, 
 *      not just for the first input but for all interactions.
 *    - It solves problems with **FID** by accounting for all input delays, giving a more comprehensive measure of how responsive 
 *      the website feels over time. If users are interacting with a page frequently, and the page is slow to respond, INP will show that.
 * 
 * **6. In-depth understanding of Lighthouse?**
 *    - **Lighthouse** is a tool used to audit the performance, accessibility, SEO, and best practices of a website.
 *    - It runs in Chrome and can be accessed via DevTools or as a CLI tool. 
 *    - It provides scores based on performance metrics (like FCP, LCP, CLS, etc.), and offers suggestions on how to improve them.
 *    - **Lighthouse** simulates loading conditions to measure how a page will perform for real users, including on slower 
 *      networks and devices.
 * 
 * **7. How are all these metrics event-driven?**
 *    - All web performance metrics are event-driven. For example:
 *      - **FP** and **FCP** are triggered when rendering events occur.
 *      - **FID** and **INP** depend on user input events (e.g., clicks or scrolls).
 *      - **CLS** is measured when visual elements move unexpectedly during layout events.
 *    - These events are collected in the browser and sent to analytics platforms for real-time monitoring.
 * 
 * **8. Difference between browser-centric metrics and user-centric metrics?**
 *    - **Browser-centric metrics** focus on the performance from the perspective of the browser itself: 
 *      how long it takes to load, parse, and execute the page’s resources.
 *    - **User-centric metrics** measure how users perceive the performance of a page, like how quickly they see content, 
 *      how interactive the page is, and how stable the layout feels.
 * 
 * **9. All things under browser-centric metrics?**  
 * These metrics focus on what happens on the browser's side. They measure the performance of the browser itself when 
 * loading and rendering the web page.
 *    
 *    - **TTFB (Time to First Byte):** 
 *      - Measures how long it takes for the server to send the first byte of data after the client makes an HTTP request.
 *      - Important for understanding server-side delays, as it shows how fast the server responds after receiving the request.
 *    
 *    - **Resource loading times:**
 *      - Measures how long it takes to load each resource, like JavaScript, CSS, fonts, and images. 
 *      - Longer resource loading times can lead to increased rendering delays.
 *    
 *    - **Script execution times:**
 *      - This metric tracks how long the browser spends executing JavaScript. 
 *      - Scripts that take too long to execute can block rendering and delay other processes, leading to poor performance.
 *    
 *    - **DOM ready time (DOMContentLoaded):**
 *      - Measures how long it takes for the browser to load and parse the HTML content.
 *    
 *    - **Render-blocking resources:**
 *      - Resources like CSS and JavaScript that block the rendering process can lead to slower page load times. 
 *      - This metric tracks how much time is spent on such resources.
 *    
 *    - **Parsing times:** 
 *      - Measures the time spent parsing HTML, CSS, and JavaScript.
 *    
 * **10. All things under user-centric metrics?**
 * These metrics focus on how users perceive performance, which is critical to the user experience.
 *    
 *    - **LCP (Largest Contentful Paint):**
 *      - Measures how long it takes for the largest content element to load. This could be an image, video, or block of text.
 *      - A good **LCP** time is under 2.5 seconds. Longer times lead to frustration and abandonment.
 *    
 *    - **FID (First Input Delay) / INP (Interaction to Next Paint):**
 *      - Measures how long it takes for the page to respond to user input. FID only measures the first interaction, 
 *        while INP measures interactions throughout the lifecycle of the page.
 *    
 *    - **CLS (Cumulative Layout Shift):**
 *      - Tracks how stable elements are as the page loads. Unexpected shifts in content are frustrating and disruptive to users.
 *      - A good CLS score is less than 0.1.
 *    
 *    - **FCP (First Contentful Paint):**
 *      - Measures when meaningful content is first displayed. 
 *      - A good FCP time is under 1.8 seconds, as it gives users confidence that the page is loading quickly.
 *    
 *    - **INP (Interaction to Next Paint):**
 *      - Measures the time from user interaction to the next paint for the response. This metric focuses on real-time responsiveness.
 * 
 * **11. Ten much more advanced things that 99.99% of developers don't know about performance monitoring?**
 *    1. **JavaScript Long Tasks API:** Detects long-running scripts that block the main thread, which can degrade user experience.
 *    2. **Web Workers:** Offload heavy tasks from the main thread to web workers, which operate in the background.
 *    3. **Server Push in HTTP/2:** Server can proactively send resources (like CSS or JS) to the client before they are requested.
 *    4. **Network Information API:** Adjusts app performance dynamically based on network conditions (e.g., serving lower-quality images on slow networks).
 *    5. **Priority Hints:** You can prioritize resources using the `importance` attribute (e.g., `importance="high"`).
 *    6. **Client Hints:** Allows servers to send optimized resources based on device characteristics like screen size, DPI, and network.
 *    7. **Lazy-loading images and iframes:** Use `loading="lazy"` to defer offscreen images and iframes, improving performance.
 *    8. **Third-party Script Containment:** Many sites load slow due to unoptimized third-party scripts (ads, widgets). Tools like `iframe sandboxing` help contain them.
 *    9. **Resource Timing API:** Gives precise control and detailed information on how each resource is fetched, helping diagnose performance issues.
 *    10. **Preload and prefetch:** Use `rel="preload"` and `rel="prefetch"` to load critical resources early and cache future needs.
 */
                              
 
  

