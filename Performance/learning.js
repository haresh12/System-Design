/**
 *                                  THINGS THAT WE ARE GOING TO COVER IN PERFORMANCE
 *   Why performance
 *   Perormance matrix
 *   Measuring Performance
 *   Network Optimization
 *   Asset Optimization
 *   React Optimization
 *   Build Optimization
 *   Rengering Optimization
 *     
 *                                                           WHY PERFORMANCES
 * 
 * 
 * 
 *   https://radar.cloudflare.com/  (THIS IS LIT OF ANYLYTICS)
 * 
 * 
 *  PERFORMANCE METRICS :  SOME STANDARD THAT INDUSTRY FOLLOWS
 * 
 *   WEB VITELS 
 *  
 *   FCP (First Contentful Paint)  : Loading state to showing something in page
 *   LCP (Largest Contentful Paint) : From Something to most of the web part is visible
 *   FID (First Input Dealy) : WHILE LCP IS HAPPENING AND USER TRIES TO INTERACT WITH SOMETHING AND IT GET DEALY 
 *   CLS (Cumulative Layout Shift : (Once user is interactiving and something suddently comes in screen like dailog , popup , toast , model ,banner)
 *   while is not good practice
 * 
 *   THESE ARE THE MOST IMPORTENT PART OF WEBVITLES
 * 
 *   SYNTRY AND MS CLERITY GIVE INFO ABOUT THIS  WEB-VITELS LIKE HELL
 * 
 *   GOOGLE CROME > PERFORMANCE TAB > START RECORING YOU WILL ABLE TO SEE ALL ABOVE 4 THINGS
 * 
 *   INP (INTERACTION TO NEXT PAINT) : THIS IS NEW ONE LEARN MORE ABOUT IT HAVE BASIC IDEA)
 * 
 *   IF YOU CAN NOT MEGAR SOMETHING YOU CAN NOT FIX IT (MAKE SENSE)
 * 
 * 
 *   LIGHTHOUSE IS LIT : https://pagespeed.web.dev/analysis/https-leetcode-com/976catis0s?form_factor=mobile&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext
 *   GENERATED RESULT FOR  LEETCODE
 * 
 *   TIME TO FIRST BYTE IN LIGHT HOUSE WE NEED TO LEARN 
 *   TOTAL BLOCKING TIME AGAIN NEW ONE PART OF CORE WEB VITLES
 * 
 *   BROWSER CENTRIC AND USER CENTRIC TWO TYPE OF MATRICS
 * 
 *   WEBPAGETEXT IS ANOTHER TOOLS LIKE LIGHTHOUSE BOTH ARE LIT MUST USE DAY TO DAY
 * 
 * 
 *                                       DIFFERENT TOOLS    
 * 
 *   CRUX IS IMPORTENT THING ITS MENTIONED IN OUR CURRENT PROJECT ALSO
 * 
 *          CRUX
 *          PAGESPEED
 *          WEBPAGETEST (FOR SIMULATION DATA MUST TRY ALL OTHER ARE FOR REAL USER DATA THIS ONE FOR SIMULATED DATA)
 *          LIGHTHOUSE
 *          REQUESTMATRICS
 *          MS CLEARITY
 *          NEW RELIC (MUST TRY)
 *   
 *   WHEN YOU ARE USING LIGHOUSE ALWAYS TEST IN INCOGNITO MODE ELSE THERE COULD BE CHANCES THAT OTHER EXTENTION MAY IMPACT YOUR PERFORMANCE
 * 
 *   SPEED INDEX ALSO SOMETHING NEW FOR ME LEARN MORE ABOUT IT
 * 
 *   CHANGE THRESHOLD IN BROWSER TO TEST APP ON DIFFERENT NETWORK LIKE 3G/4G
 * 
 * 
 *                                               NETWORK OPTIMAZATION (THIS ONE IS LIT)
 * 
 *  THESE ARE THE ALL IMPORTENT POINTS THAT WE ARE GOING TO COVER
 * 
 *  CRITICAL RENDERING PATH  => 14KB YAAD RAKHNA
 *  Minimize the HTTP REQUEST  (One big request can sometime good rather then 3 to 4 small images)
 *  AVOID REDIRECTION   (WHAT DO WE MEAN BY THAT http to https or https to ws atleast at first)
 *  RESOURCE HINITING
 *  FETCH PRIORITY
 *  EARLY HINTS
 *  HTTP UPGRADE METHOD
 *  COMPRESSION : BROTLI/GZIP
 *  CACHING USING SERVICE WORKER
 * 
 *  SVG AND BASE64 IMAGES
 * 
 *  ASYC AND DEFER MUST UNDERSTAND THIS TECHNIQUES OF JS
 * 
 *  DEFER IS LIT 
 * 
 *  NEED TO KNOW MORE ABOUT hstspreload.org
 * 
 * 
 *  preconnect is also something new that we need to learn same for dns-prefetch same for preload
 * 
 *  PRECONNECT 
 *  DNS-PREFETCH
 *  PRELOAD : INITIATE EARLY REQUEST TO RESOURSE
 *  PREFETCH  : LOADS INTIRE PAGE AND ITS DEPANDANCY AND PUT IT TO THE CATCH
 *  PRERENDER 
 * 
 * 
 * RESOURSE HINT PRIORITY  fetchpriority inside link tag what needs to be load first
 * 
 *  THERE IS SOMETHING LIKE RESOURCE HINT AND THERE IS SOMETHING LIKE RESOURCE HINT PRIORITY
 * 
 *  EARLY HITS ARE LIKE TEACHER THOSE SAYS TO YOU HAVE YOU NEED TO PREAPRE THIS BEFORE EXAM
 * 
 *  HTTPS UPGRADE IS SIMPLE AS WE ALREADY IN NETWORKNING AND COMMINICATION TECHQNICES
 * 
 *  NEW THING HTTP2 AND HTTP3 ONLY WORKS ON HTTPS GOOD 
 *  
 *  HPACK AND QPACK HEADER COMPRATION ALOGRITHEM
* 
 * 
 */
