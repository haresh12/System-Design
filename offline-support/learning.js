/**
 *  UNDERSTANING SERVICE WORKERS 
 * 
 *  Peice of js code runs in other thread rether then in main thread
 * 
 *  Seprate thread it does not block main thread
 * 
 *  Provided by browsers 
 * 
 *  Using this service workers we can create offline experience 
 * 
 *  INTERSEPT NETWORK REQUEST
 * 
 */

/**
 *  FROM FIRST VIDEO WE LEARNED 15 POINTS AS BELOW SEE THESE ARE JUST BASIC POINTS GO LITTLE DEEP ON THOSE
 

Offline Capability: Service Workers enable applications to work offline by intercepting network requests and serving cached resources when the network is unavailable.

Improved Performance: By caching resources, Service Workers can significantly reduce load times and improve the overall performance of web applications.

Background Sync: Service Workers support background synchronization, allowing applications to defer actions until the user has stable connectivity.

Push Notifications: They enable push notifications, keeping users engaged by delivering timely updates even when the web application is not open.

Precaching: Service Workers can precache critical resources during the installation phase, ensuring that the application loads quickly on subsequent visits.

Network Request Interception: They can intercept and modify network requests, enabling custom logic for handling different scenarios, such as serving different content based on the user's network status.

Offline Fallback Pages: Service Workers can serve custom offline fallback pages, providing a better user experience when the application cannot access the network.

Periodic Background Sync: This feature allows web applications to periodically synchronize data with the server in the background, improving data freshness and reliability.

Resource Prioritization: Service Workers can prioritize the loading of critical resources, ensuring that essential parts of the application are available as quickly as possible.

Security: Service Workers operate under a secure context (HTTPS), which helps protect the integrity and confidentiality of the data they handle.

Granular Control: They offer granular control over caching strategies, allowing developers to fine-tune how different types of resources are cached and served.

No Impact on Main Thread: Service Workers run independently of the main browser thread, meaning they don't block or slow down the user interface.

Polyfilling Functionality: They can be used to polyfill modern web features in older browsers, enhancing compatibility without compromising on functionality.

Advanced Analytics: By intercepting network requests, Service Workers can provide detailed analytics on resource usage and network performance.

Progressive Enhancement: Service Workers can progressively enhance web applications, ensuring they work well on older browsers while providing advanced features on newer ones.


 */