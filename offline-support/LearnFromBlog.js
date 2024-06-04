/**
 Installation Phase Caching: Cache essential assets during the service worker's installation phase.
 
Cache First Strategy: Serve resources from the cache first, falling back to the network if necessary.

Network First Strategy: Fetch resources from the network first, using the cache as a fallback.

Cache then Network Strategy: Serve from cache and update the cache with a network response.

Stale-While-Revalidate Strategy: Serve from cache while fetching updates from the network to update the cache.

Dynamic Caching: Cache resources on-the-fly as they are fetched.

Background Sync: Sync data in the background when the user goes online.

Push Notifications: Use push notifications to keep the user informed of updates.

Offline Analytics: Queue user interactions or analytics data when offline and send them when online.

Precache Specific Routes: Cache specific routes or pages during the service worker installation.

Lazy Loading: Load assets only when needed and cache them for offline use.

Periodic Sync: Schedule periodic background syncs to keep data updated.

Handling Offline Forms: Cache form submissions and sync them when the user goes online.

Serve Offline Pages: Provide a fallback offline page for when the network is unavailable.

Offline API Requests: Cache API responses and serve them when offline.

Versioned Caching: Use different cache versions to manage updates and invalidations.

Cache Control Headers: Respect cache control headers to manage caching strategies.

Clear Old Caches: Delete outdated caches during the activation phase of the service worker.

Cache Images and Media: Precache and serve images and media files to improve offline experience.

 */


/**
 *    FEW MORE POINTS ABOUT SERVICE WORKERS
 * 
 *    Has seperate thread does not block your main thread
 * 
 *    Offline support is kind of the use case we use service worker
 * 
 *    Intercepter for all request
 * 
 *    Only works on https because it act as procy server so there can be man in middle attack
 * 
 *    DOM CAN NOT ACCESS
 * 
 *    Event driven (activated , installed there are different types of event)
 * 
 *    Not shared on different domains and it make sense also
 * 
 *    Form of the Javascript file at the end
 * 
 *    navigator.serviceWorker  // check if service work is supported or not by browser
 * 
 *    navigator.sericeworker.registor.then() // return promise if it is fullfilled means its registor successful
 * 
 *    Lifecycle : Register , Installed , Activated , Intercapte request
 *   
 *   all above life cycle can be accessed through event as its event driven
 */


/**
 *   PWA : PROGRASIVE WEB APP
 * 
 *   Combination of web + mobile apps written purly in JS no native stuff
 * 
 *   MDN is best exaple of PWA you will see install button in bar if those are PWA
 * 
 *   Most of the native functionality can be used also with PWA
 * 
 *   Advantages : 
 * 
 *   Easy to discover
 *   SEO possible 
 *   Offline experience is better
 *   Look and feels is better - (UX) 
 *   Mostly used for mobile first experience
 *   Responsive ness is lit
 *   Access to native device api (Camera, Contacts, Blootuth)
 * 
 *  SEE AT LAST ITS JUST WEBSITE WITH ONE CONFIG FILE (manifest.json)
 * 
 *  manifest.json file is like configuration file that we must have
 * 
 *  https://progressier.com/pwa-manifest-generator   // BEST YOU CAN GENERATE YOUR MANIFEST APP FROM HERE
 * 
 *  Crome >> Lighthouse >> PWA can give me idea above errors if you don't see install icon
 * 
 *   THIS IS GOOD QUESTION WE NEED SERVICE WORKER FOR PWA MANADATORY 
 *  https://stackoverflow.com/questions/53594466/are-service-workers-necessary-for-a-progressive-web-application (LEARN MORE ABOUT IT)
 */