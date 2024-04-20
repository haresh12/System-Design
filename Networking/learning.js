/**
 *  DNS : Domain Name System 
 *  REST API , GRPC , GRAPHQL  MUST KNOW COMMUNICATION PROTOCOL
 *  
 *  MOSTLY ABOVE THREE ARE THE PROTOCOL THAT WE ARE GOING TO DECIDE 
 *  WHICH ONE TO USE AND FOR THAT THERE UNDERSTANDING IS MUST
 * 
 *  NEXT BIG THING WE NEED TO LEARN HTTP-1 ,HTTP-2 AND HTTP3 WHICH ONE TO 
 *  LEVARAGE WHEN
 */

/**
 *   HOW THE WEB WORKS ?
 * 
 *   Network Tab >> Response >> First Request to domain
 *   
 *   First thing to learn here is that see mostly we are aware the when you
 *   type google.com in any browser then or computer or network does not under
 *   stand what do we mean by that in simple term COMPUTERS understand IP 
 *   ADDRESS suppose you want something to be delieved at you home then 
 *   you give you home address in english because its our way of communication
 *   but when its comes to computers they can talk with each other through
 *   IP Address.
 * 
 *   And above is the case where DNS (Domain Name System comes into picture)
 *   you type Google.com and then your network send that request to DNS
 *   and then it return IP address of the google.com. YOU CAN SAY DNS
 *   IS LIKE DIRECTORY OF YOUR DOMAIN'S
 * 
 *   Now above thing was easy and basic to understand but one thing comes into 
 *   mind like request directly does not goes to DNS in between there are few
 *   more things from where request travels like YOUR NEAR BY CELL TOWER
 *   then YOUR PHONE COMPANY and then DNS
 * 
 *   REQUEST                             REACHES             
 *   SENT FROM >>   REACHES        >>  TO PHONE COMPANY   >>   DNS FINALLY
 *   MOBILE        TO CELL TOWER
 * 
 *  NOW THE MAIN REASON TO WRITE ALL ABOVE THING IS UNDERSTAND ONLY ONE 
 *  BASIC CONCEPT LIKE WHAT IF THERE ARE SOME WEBSITE THAT ARE BLOCKED IN
 *  YOU COUNTRY IN THAT CASE WILL REQUEST STILL REACHES TO DNS AND ANSWER
 *  IS NO IT WILL BE BLOCKED BY YOUR INTERNET SERVICE PROVIDER AND WON'T
 *  EVEN GO TO THE NEXT STPES. (SIMPLY YOU WILL GET LIKE CAN NOT REACH TO 
 *  SERVER)
 * 
 *  You basically have 3 things X , Y and Z
 *  
 *  X => your domain name
 *  Y => DNS
 *  Z => SERVER WHERE WE ACTUALLY HAVE DATA
 * 
 *  FOR ABOVE X , Y AND Z BELOW IS THE WAY HOW REQUEST GOES
 * 
 *  X >> Y 
 *  Y >> X (SENDS IP ADDREESS)
 *  X >> Z (SENDS REQUEST TO SERVER WITH IP ADDRESS)
 */


/**
 *   MULTIPLE PART OF URL  
 * 
 *   https://www.google.com/xyz?id=1 
 * 
 *  Root domain (.)
 *  Top Level Domain (.edu , .com , .dev , .org)
 *  Second Level Domain (google.com , google.edu , google.dev)
 *  Third Level Domain  (www.google.com , download.google.com , sales.google.com)
 *  
 *  (ALL 4 TYPES OF DOMAIN WE MUST HAVE IDEA ABOUT THIS THINGS)
 * 
 *  AND YOU WILL UNDERSTAND IMPORTENTS OF ABOVE THING WHEN YOU UNDERSTAND THAT
 *  WE HAVE MILLIONS OF DOMAIN AND IF WE DIRECTLY SEARCH THEN ITS COSTLY OPERATION
 *  BUT WHAT IF WE SEARCH ACCORDING TO DIFFERENT DOMAINS INFO WE HAVE LIKE
 *  BASED ON TOP , SECOND AND THIRD LEVEL DOMAIN
 * 
 *  DATA CENTER : WHERE YOU HAVE LARGE NUMBER OF CUPS WITH HIGH CONFIGURATION
n * 
 * 
 *  After top level domain .com/ we will have our own defined path like /profile
 *  /users and also we need we can have query params like ?id=1 or anything
 *  these are all possible things we can have in URL importent thing to get
 *  from here is all for types of domain like root level , top level , second
 *  and third level domain.
 * 
 *  Also in above url when we talk about parts i thing we missed https but sits called protocol/schema both word are fine
 */


/**
 *  CONNECT INTERNET ACROSS THE GLOBL : (OPTICAL FIBER NETWORK)
 * 
 *   This is also intersting that how the world is connect through optical
 *   fiber network and intresting thing is all those optical fiber wires
 *   are in SEA that means we can say that countries are connected through 
 *   SEA when it comes to network 
 */

/**
 *  ISP : (INTERNET SERVICE PROVIDES) PAYS BIG ROLES IN TERMS OF NETWORKING)
 * 
 *  FIBER OPTICAL NETWORKS WORKS ALMOST ON SPEED ON LIGHT  
 */


/**
 *  WHAT BROWSER IS DOING BEFORE EVEN MAKING REQUEST
 *   
 *   Basically all four levels of caching done by browser 
 *   
 *   Browser (Cache , Services Worker)
 *   Operating System
 *   Router
 *   ISP
 * 
 *  UNDERSTAND THAT DEPENDING ON BROWSER MAX REQUEST CAN BE HANDLED PARELLERLY
 *  IS AROUND 6 TO 8
 */


/**
 *  SERVICE WORKER UNDERSTAND THIS AND MUST UNDERSTAND THERE CACHING
 */


/**
 *  AT ALL STAGE THERE IS CACHING GOING ON WE ONLY NEED TO CARE ABOUT BROWSER LEVEL
 */


/**
 *  ONE THING I NEED TO UNDERSTAND THAT WHAT DO WE MEAN WHEN WE SAY IT GOT THE 
 *  RESPONE FROM THE SERVICE WORKER AND NEVER WENT TO SERVER
 */


/**
 * GOOGLE PEERING REQUEST DIRECTLY FROM MOBILE TO GOOGLE NO NEED TO GO TO ISP
 * PROVIDER HOW DO THAT DO THAT.
 */


/***
 *  WHEN REQUEST GOES FROM CLIENT TO SERVER FEW BELOW THINGS HAPPEN
 * 
 *  CLIENT SENDS TCP REQUEST TO CHECK IF SERVER IS AVALIABLE OR NOT
 *  SERVER ACKNOLEDGE TO CLIENT AND SAY THAT HA BHAI AVALIABLE TO BEJO REQUEST KYA CHAIYE
 *  AND THIS IS WHO BOTH DO THE HANDSHAKE FIRST AND THAN ONLY COMMINICATION STARTED
 */


/***
 *   SEE WITH DIFFERERNT HTTPS PROTOCOL WE CAN HAVE DIFFERENT TYPES OF SECURITY 
 *   AND HANDSHAKE IN SOME WE MIGHT BE HAVE TO DO HANDSHAKE WITH EACH REQUEST
 *   AND IN SOME WE MIGHT HAVE TO DO IT ONCE BUT THATS NOT PART WE WILL LEARN
 *   NOW THATS SOMETHING WE WILL TAKE CARE LATER
 */

/**
 *   SO LETS FINALIZE FEW STEPS WHEN CLIENT AND SERVER COMMUNICATE WITH EACH OTHER
 * 
 *   1. CLIENT TO DNS LOOKUP (FROM HERE IT WILL GET IP ADDRESS)
 *   2. CLIENT TO SERVER (TCP HANDSHAKE HAPPEN)
 *   3. SERVER ACKNOWLEDGE THAT YES I AM AVALIABLE 
 *   4. SERVER SENDS SSL HANDSHAKE (TO EXCHNAGE CERTIFICATES SO LATER THEY WE VERIFY WITH EACH REQUEST MAINLY IN CASE OF HTTPS)
 *   5. ONCE BOTH TCP AND SSL HANDSHAKE HAPPENS THEN ONLY IT STARTS WITH COMMUNICATION WITH EACH OTHER FOR ALL OTHER REQUEST
 * 
 *   IMPORTENT THING TO LEARN HERE IS ABOUT TCP AND SSL HANDSHAKE THAT HAPPENS
 *   BEFORE REQUEST AND ALSO NOW I UNDERSTAND WHY THEY HAVE TO EXCHANGE THE
 *   CERTIFICATES.
 * 
 *   ONE MORE THING TO LEARN HERE IS THAT AFTER COMPLETING ALL ABOVE 5 STEPS ITS
 *   UPTO SERVE HOW IT WANTS TO SEND DATA LIKE IN CHUNK OR AT ONE GO FULL RESPONSE
 * 
 *   THERE IS ONE BANCHMARK THAT WE HAVE SEE TRY TO LOAD YOU FCP (FIRST CONTANT PAINT)
 *   ASAP AND NORMALLY FOR THAT 14KB DATA IS KINDA BANCHMARK FOR GOOD SEO AND ALL
 * 
 *   REGARDING FIRST CONTECT PAINT WE ARE GOING TO COVER LATER BUT THING TO LEARN 
 *   FROM HERE IS THAT WE CAN SEND DATA IN CHUNK AND ALWAYS REMEMBER THAT 14KB 
 *   BENCHMARK HOW IMPORTANT IT IT
 */


/***
 *    TILL HERE YOU GOT ALL YOU NEED LIKE HTML , CSS AND JS NOW HOW WEB PAGE RENDER ?
 * 
 *   // https://medium.com/a-layman/how-browser-works-when-rendering-a-web-page-f49c09bec475  
 *   
 *    (MUST READ ARTICAL HOW WEB PAGE RENDER) (MUST NEED TO READ TODAY)
 * 
 *   MAINLY FOUR STEPS
 * 
 *   LOADING
 *   SCRIPTING
 *   RENDERING
 *   PAINTING
 * 
 *   CSS IN RENDER BLOCKING  (BLOCKS THE RENDERING)
 *   JS IS PARSER BLOCKING (BLOCKS THE PARSING)
 * 
 * 
 *   FIRST YOU BASICALLY SEND REQUEST TO CLIENT FOR HTML
 *   IN RESPONSE YOU GET HTML CSS AND JS
 *   NOW WITH USE OF HTML BROWSER BUINGS DOM TREE
 *   AND NEW THING WITH CSS BROWSER BUINGS CSSOM TREE
 *   THEN BROWSER MERGES BOTH DOM AND CSSOM TREE AND BUILD RENDER TREE (MERGE IS NEW THING I LEARNED)
 * 
 *   TILL ABOVE THINGS ARE GOING ON JS PARSING ALSO SOMETHING WE NEED TO THING ABOUT
 *   BECAUSE ITS PARSING BLOCKING YOU CAN USE ASYC AND DEFER TO CHANGE THE BEHAVIOURS
 *   BUT THATS TOPIC FOR LATER
 * 
 *   IN SHORT TO RENDER YOUR PAGE RENDER TREE SHOULD BE COMPLETED AND
 *   JS PARSING SHOULD BE DONE ONCE ALL THIS STEPS ARE DONE THEN 
 * 
 *   LAYOUT PAINT AND COMPOSING THESE PART STARTS (MI UNDERSTAND THIS AS WELL)
 * 
 *   
 *   LAYOUT : SEE IN THIS STAGE OUR RENDER TREE IS COMPLETED AND NOW BEFORE
 *            PAINTING IT BROWSER NEED TO DRAW THE LAYOUT ITS LIKE YOU JUST
 *            BOUGHT NEW HOUSE AND ALL YOU SEE IS BLANK WALLS EVERYTHING.
 *            JUST POSITION DECIDE KRO WHAT NEEDS TO PUT WHERE 
 * 
 *   
 *   PAINTING : AFTERING LAYOUTING OR AFTER BUYING HOUSE WHAT WE DO NEXT IS 
 *              PAINTING IN CASE OF HOUSE ALSO AND BROWSER DOES THE SAME THING
 *              IT ALSO START PAINTING OUR COMPONENTS
 * 
 *   COMPOSING : ITS LIKE ONCE PAINTING DONE IN YOUR HOUSE ITS TIME TO PUT SOFA
 *               TV AND ALL THIS THINGS SAME BROWSER DOES FOR MODELS AND ALL 
 *               COMPOSING IS TRICKY ONE WE NEED TO LEARN MORE ABOUT IT
 *  
 *   ASYNC AND DEFER MUST MUST LEARN THIS TWO THINGS I HAVE ALREADY BLOG BUT DO PRACTICAL
 * 
 *  THAT'S ALL THATS HOW FIRST WEB WORKS AND THEN WEB PAGE RENDERS.
 */



/**
 *   COMMUNICATION PROTOCOLS 
 * 
 *   FIRST THING FIRST WHAT DO WE EVEN MEAN BY PROTOCOL
 * 
 *   SEE WHENEVER CLIENT AND SERVER OR EVEN SERVER AND SERVER WANTED TO COMMUNICATE
 *   WITH EACH OTHER THEY NEED TO FOLLOW SOME STANDARD AND THOSE STANDARDS ARE LIKE
 *   PROTOCOL.
 *  
 *   WE HAVE DIFFERENT PROTOCOL FOR DIFFERENT TYPE OF COMMUNICATION
 * 
 *   PROTOCOL : HTTP , HTTP/3 / HTTPS / WEBSOCKET
 * 
 * 
 *   HTTP  PROTOCOL: 
 *     FIRST IT WILL MAKE TCP CONNECTION ITS LIKE HANDSHAKE AND ONCE ITS
 *     DONE THEN CLIENT WILL REQUEST AND SERVER WILL SEND THE RESPONSE
 *     HERE IMPORTENT THING TO LEARN IS IN HTTP PROTOCOL THIS TCP HANDSHAKE
 *     HAPPENS WITH EACH AND EVERY REQUEST . SO WITH EACH REQUEST FIRST TCP
 *     HANDSHAKE NEEDS TO BE DONE AND THEN ONLY SERVER CAN SEND RESPONSE TO 
 *     CLIENT . UNDERSTAND ONE THING THAT TCP HANDSHAKE IS JUST LIKE CLIENT
 *     SAYING TO SERVER THAT I MAY COME TO YOU FOR SOME DATA ARE YOU AVALIABLE
 *     AND SERVERS SAYS HA BHAI ANYTIME FOR YOU. ITS JUST MAKING SURE THAT BEFORE
 *     ASKING FOR ACTUALLY DATA LETS CONFIRM FIRST THAT SERVER IS AVALIABLE OR NOT
 * 
 *     NOTE : ONE BAD THING ABOUT HTTP PROTOCOL IS THAT HERE FOR EACH REQUEST 
 *             TCS HANDSHAKE HAPPENS REALLY BAD 
 * 
 *     ONE MORE THING I HAVE LEARNED IS THAT TCP GURENTESS THAT NONE OF YOU DATA
 *     WILL BE LOSS SO IN CASE IF SOME PACKATES ARE MISSING THEN CLIENT CAN REQUEST
 *     AGAIN WITH ACKNOLEDGE NUMBER AND SERVER CAN SEND THOSE MISSING PACKAGE AGAIN.
 * 
 *     USED : Web Browsing , EMAIL Protocal uses TCP also (MORE RELIABLE)
 * 
 * 
 *   HTTP/3 PROTOCOL :
 *   (QUIC)
 *     
 *    BASED ON UDP SO WHEN YOU MAKE REQUEST FIRST THING HTTP/3 DOES IS ESTABLISH
 *    THE UDP CONNECTION . SEE NOT MUCH BUT ONE THING I AM CLEAR ABOUT IS UDP 
 *    IS FOR SPEED BASICALLY ITS MAINLY USED FOR VIDEO STREAMING THING ABOUT 
 *    IT LIKE YOU ARE WATCHING NEXTFLIX MOVIE ITS AROUND 2 HOUR LONG MOVIE NOW
 *    DATA WILL SENT IN CHUCK FOR SURE SO IN MOVIE IS WE MISS FEW CHUCK OF SECONDS
 *    IT WON'T MATTER A LOT BUT IF WE USE TCP HERE THEN SPEED WILL BE COMPROMISED
 *    
 *    SO LEARNING HERE IS IN CASE OF VIDEO STREAMING SPEED MATTER BECAUSE IF USER
 *    SEE EVER TIME LOADING LOADING THEN ITS WORST EXPERIENCE BUT IF USER IN WORST
 *    CASE MISSES FEW SECONDS OF MOVING LIKE IF UDP MISSES TO SEND FEW PACKETS THEN
 *    ITS FINE
 * 
 *    AND THATS THE MAIN REASON UDP IS MAINLY USED FOR VIDEO STREAMING BEST EXAMPLE
 *    YOUTUBE AND NETFLIX  
 * 
 *    WHY AND HOW ITS FAST ? 
 *      FIRST IT DOES HEADER COMPRESSION FAST
 *      BETTER NETWORK CONGESTION  
 * 
 *    MORE FAST 
 * 
 * 
 * 
 *   HTTPS PROTOCOL :
 * 
 *    SEE THIS ONE IS SAME AS HTTP BUT HERE CONCERN HTTPS HAS IS WHAT IF I SEND
 *    DATA TO CLIENT AND BEFORE EVEN IT REACHES TO CLIENT SOMEONE STEAL THAT 
 *    PACKATS OR DATA AND MODIFY IT TO SOLVE THIS PROBLEM WE HAVE HTTPS IN 
 *    PICTURE.
 * 
 *   HTTPS MAKES TO EXTRA CONNECTION BEFORE SENDING ANY DATA TO CLIENT ITS LIKE
 *   SSL AND TLS IN SIMPLE WORD THEY SHARE PUBLIC KEY WITH EACH OTHER AND NOW
 *   ENTIRE DATA SHARED BETWEEN CLIENT AND SERVER WILL BE ENCREPTED AND CLIENT
 *   WILL DECREPT THAT DATA ONLY WHEN ITS REACHED THERE AND TO DECREPT THAT 
 *   THAT CLIENT WILL USE SAME PUBLIC SERVER KEY THAT IS SHARED BY SERVER AT
 *   THE TIME OF TLS AND SSL CONNECTION.
 * 
 * 
 *   IN SHORT IN CASE OF HTTPS WE HAVE MORE SECURITY AND ALSO SSL CERTIFICATE
 *   VERIFICATION IS INCREDIBEL THING .
 * 
 *  IN HTTPS PACKETS OR DATA SENT FROM SERVER TO CLIENT OR CLIENT TO SERVER BOTH
 *  ARE ENCRYPTED
 * 
 *  USE : SAME AS HTTP BUT MOSTLY BANKS AND FAANG NOW A DAY 90% WEBSITE USES
 *        HTTPS   
 */



/**
 *  WEBSOCKET : 
 * 
 *    Mainly used for live stream , live chat all this kind of thing we will go
 *    deeper into that but one think that we need to learn is that it uses something
 *    called HTTP UPGREAD and make request with that so basically first request still
 *    made through HTTPS and then only internal it convert status code to 101 and after
 *    that its WEBSOCKET connection now.
 * 
 *   (NEED TO GO DEEP INTO THAT)
 */


/**
 *  SMTP : (SIMPLE MAIL TRANSPORT PROTOCOL)
 *   
 *  I THINK ITS WELL KNOWN AND MAINLY USED FOR MAIL SENDING GIVEN THE EXAMPLE YOU
 *  ARE SENDING ONE MAIL FROM GMAIL THEN THAT FIRST GOES TO SMTP SERVER AND FROM
 *  THERE REQUEST GET PROCESSED REASON IS THAT HERE IT COULD BE POSSIBLE THAT
 *  YOU ARE SENDING REQUEST TO PERSON OR GROUP OF PERSON AND SMTP DOES THAT WELL.
 */


/**
 *   FTP : (FILE TRANSPORT PROTOCOL)
 *   
 *   SAME AS SMTP THIS IS ALSO USED FOR SPECIFIC PURPOSE AND THAT IS FILE TRANFER.
 *  
 */


/**
 *  SEE ALL THIS PROTOCOL ARE BUILD TO SOLVE SPECIFIC PROBLEM 
 * 
 *  LIST OF ALL THE ALL PROTOCOL THAT WE LEARNED
 * 
 *  HTTP
 *  HTTPS
 *  HTTP/3 (QUIC)
 *  WEBSOCKET 
 *  FTP 
 *  SMTP
 *  
 */



/**
 *  REST API (IN DEPTH)
 * 
 *  IN FIRST WATCH I WILL ONLY ADD IMPORTENT POINTS
 *  
 *  1-tier Architechture (All frontend and backend at same place)
 *  2- tier Architechture (Different code base for Frontend and Backend)
 *  3- tier Architechture (Here now we have Frontend , Backend and Storage database)
 *  
 *  REST API : COMMINCATION WAY BETWEEN TWO WEB SERVICES 
 * 
 *  REST IS LIKE DEFINING STARDARDS FOR COMMUNICATION BETWEEN SERVER AND CLIENT
 * 
 *  REST IS BUILD ON TOP OF HTTP OR WE CAN SAY BY LEVERAZING HTTP
 * 
 *  BENEFITS OF REST :
 * 
 *   SIMPLICITY OR EASY TO USE
 *   STATELESS : WHAT DO WE MEAN ? YOUR SERVER DOES NOT MAINTAIN ANY STATE
 *   SCALABILITY
 *   FLEXIBILITY WITH DATA : XML ,JSON ANYTHING WILL BE FINE
 *   UNIFORM INTERFACE
 *   CACHING 
 *   SEPARTION OF CONCERNS
 *   LANGUAGE AGNOSTIC
 *   EASE OF TESTING
 *   SECURITY
 * 
 *   
 *   BUILDING BLOCKS
 *   
 *     URL
 *     METHOD
 *     HEADER
 *     REQUEST
 *     RESPONSE
 *     STATUS CODE
 *   
 *  DIFFERENT PART OF URL
 * 
 *  https://www.example.com/forum/questions?tag=networking&order='desc'#top
 * 
 *  https => scheme / protocol
 * www.example.com => HOST WHICH CONTAINS DIFFERENT PARTS 
 *  www =>  subdomain / third level domain // sales. , download. www. 
 *  example => domain
 *  .com => top level domain => .edu , .dev , .org
 *  forum/questions => path [form is subdirectory and questions is subdirectory]
 *  tag=?networking&order=desc => Query string 
 *       [tag and order are keys and networking and desc are values] 
 *  #top => THIS IS FRAMGENT THIS IS NEW FOR ME LEARN MORE ABOUT IT
 * 
 *   #TOP => to store some extra infermation i need to learn more about it
 * 
 *  #TOP => THIS IS NOT SENT FROM CLIEN TO SERVE 
 * 
 *  
 *  PATH IS WAY TO REACH TO SPECIFIC ROUTE
 *  QUERY STRING IS WAY TO PASS SOME DATA 
 * 
 *   REST METHODS 
 * 
 *     POST , GET , PUT/PATCH  DELETE , HEAD , OPTIONS 
 * 
 *     OPTIONS => THIS ONE IS BASICALLY USED FOR SECURITY PURPOSE FOR CROSS
 *     DOMAIN
 * 
 *     CONNECT => TO MAKE ESTABLISH CONNECTION BETWEEN CLIENT AND SERVER SO 
 *     THAT WE DON'T HAVE TO DO HANDSHECK WITH EACH REQUEST 
 * 
 *     TRACE => FOR TRACING PURPOSE
 * 
 *     WE NEED TO DO ONE EXAMPLE FOR OPTIONS AND CONNECT FOR BETTER UNDERSTANDING
 * 
 *  ONE THING THAT I MADE MISTAKE IN INTERVIEW ALSO IS THAT NOT DE-SERIALIZING 
 *  API DATA WE NEED TO UNDERSTAND ONE THING THAT NOT MATTER WHETHER YOU SEND
 *  ANY DATA TO SERVER OR SERVERS SENDS ANY DATA TO CLIENT THE ENTIRE DATA
 *  IS SERIALIZED AND WE NEED TO DECERALIZED IT .
 * 
 *  ALWAYS ALWAYS DO res.json(); // THATS THE WAY TO ACCESS THE DATA 
 *  
 */


/***
 *   HERE I WILL WRITE ABOUT HEADERS FOR BOTH REQUEST AND RESPONSE
 * 
 *                     REQUEST HEADER 
 * 
 * 
 *  NAME                            USECASE                             EXAMPLE
 * 
 *  
 *  Host                            Target Host                       1.roma.api.flipart.com
 * 
 *  Origin                          Origin Host                        www.flipkart.com                     
 * 
 *  Referer                         Indicate from where                User comes from linkdin to fli
 *                                  request made                       pkart then in referer you will
 *                                                                     get https://www.linkdin.com
 * 
 * 
 *  User-Agent                      Gives infermation about           Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 
 *                                  user BROWSER , OS Version etc     (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36
 *  
 * 
 *  Accept                          What type of response i can        /* , application/json text/javscropt
 *                                  accept
 * 
 * 
 *  Accept-language                  What kinds of language i support        en-US,en;q=0.9
 *                                  also we can pass priority we will    
 *                                  put flipkart example
 * 
 * 
 *  Accept-encoding                  What kind of encoding algorithem      gzip, deflate, br, zstd
 *                                  supported. br is new one and best
 *                                  gzip is supported by all browser
 *                                  (LEARN MORE ABOUT ALL)
 * 
 * 
 *  Connection                      Best one if you want TCP handshek
 *                                  alive so we don't have to do handshak     keep-alive , close
 *                                  again and again .
 * 
 *  Authorization                   Used to send authorized header token     Authorization : Bearer-asd
 * 
 * 
 *  Cookies                         To send custom data in key value pair    MUID=0B521A7CD94C686F1A290E1ED89969A7
 *                                                                           (SEE HASHNODE TAKING MY MUID WITHOUT PERMISSION
 * 
 * 
 * if-modified-since                helpful for catching related stuff       we will see example in Security module
 * 
 * 
 *  Cache-control                   Again related to caching                we will see example in Security module
 * 
 * 
 *     
 *                                        REQUEST HEADER
 * 
 * 
 * 
 *   NAME                               USECASE                        EXAMPLE
 * 
 * 
 *   DATE                               When the response was        Thu, 18 Apr 2024 04:12:58 GMT
 *                                          generated
 * 
 *  
 *   Server                             provide info about server     nginx/1.18.0 (Ubuntu     
 *                                       used to build api
 * 
 *   
 *   Content-Type                        Type of response content       application/Json
 * 
 * 
 *   Content-length                       Total response body length      4123B (usefull to show progress) 
 *   
 * 
 *   Set-cookie                            To set cookie for next          Need some practical example  
 *                                          or future request
 *   
 *   Content-encoding                      Compration algorithm used         br
 *                                         like br,gzip
 * 
 *   
 *  
 *   NOW WE HAVE FEW MORE LIKE Catch-control  Last-modified   Etag all this are related to CACHING
 *   SO WE ARE GOING TO COVER IN FUTURE SECTIONS
 *                               
 */                                        


/**
 *                                 DIFFERENT STATUS CODE 
 * 
 *  
 *  STATUS RANGE         USECASE            STATUS CODE                USECASE                   
 *    
 *     
 * 
 *    1XX               Information          100                       keep sending information i am listening        
 *                                           101                       SWICHING (LIKE FROM HTTP TO WEBSOCKET)
 *                                          
 * 
 * 
 *  
 *    
 *    2xx                Success               200                      OK
 *                                             201                      Created
 *                                             203                      ACCEPTED (SEE SOME PRACTICAL)
 *                                             204                      No content (Kaam ho gya ji aapka thats it)
 *                                             206                      Partial Content

 *    
 *    3xx                Redirection            301                     Parmanently Moved
 *                                              302                     Tempeory  Moved
 *                                              304                     NOT MODIFIED DATA
 *                                              307                     Tempeory Moved  but retains method method
 *                                              308                     Parmanently  Moved but no changes in api method
 * 
 * 
 *    4XX                 Client Side Error     400                     Wrong information
 *                                              401                     Un-authorized
 *                                              403                     Not authorized (Bhai to admin nhi he)                  
 *                                              404                     BEST ONE NO DATA FOUND
 *                                              405                     Method not allow (BEST ONE)
 *                                              429                     Failed because of Concurrent request
 * 
 * 
 *    5XX                 Server Side Error    500                     Internal Server Error
 *                                             502                     Bad Gateway 
 *                                             503                     Service Unavaliable
 *                                             504                     GATEWAY TIMOUT
 *                                             507                     Insuficient Storage
 */  








/***
 * 
 *                                      UNDERSTANDING GRAPHQL 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */




/***
 *                                      UNDERSTANDING  GRPC
 * 
 * 
 * 
 *   SO FIRST THING FIRST WHAT WE ARE GOING TO COVER 
 * 
 *    1. What is grpc
 *    2. RPC
 *    3. ProtoBuf (Protocol Buffer) (IDL)
 *    4. HandsOn  (One small practical example)
 *    5. REST VS GRPC
 *    6. Pros/Cons
 * 
 * 
 *   FIRST UNDERSTAND THAT RPC IS LIKE ANOTHER WAY TO COMMUNICATE BETWEEN CLIENT AND SERVER OR SERVER
 *   TO SERVER LIKE OTHER WE LEARNED EXAMPLE REST AND GRAPHQL
 * 
 *   RPC STANDS FOR REMOTE PROCEDURE CALL
 *  
 *   NOW WHAT IS GRPC THEN SO BASICALLY ITS BUILD BY GOOGLE ON TOP OF RPC AND WE KNOW WHEN GOOGLE
 *   BUILD SOMETHING WE HAVE HELL LOT OF EASYNESS IN THAT AND LOT MORE FUNCTIONALITY
 * 
 *   SEE FROM THIS ENTIRE GRPC SESSION IF WE DON'T LEARN ANYTHING THEN THATS FINE BUT ONLY
 *   REMEMBER THIS BELOW FUNCTION.
 * 
 *    IT IS OPEN SOURCE
 *    
 *   "THE BASIC IDEA OF GRPC IS THAT WHAT IF WE CAN DIRECTLY CALL SERVER FUNCTION FROM CLIENT
 *    SIDE SO SEE IN REST YOU HAVE MANY URLS YOU ACCESS THOSE URL TO GET DATA IN CLIENT
 *    IN CASE OF GRAPHQL WE HAD ONE SINGLE URL ANY WE USE QUERY AND MUTATIONS TO ACCESS AND
 *    MODIFY THOSE DATA BUT IN CASE OF GRPC WE CAN DIRECTLY ACCESS THE METHODS OF SERVER
 *    AND TO BE REAL THIS IS FASINATING"
 * 
 * 
 *    "I DON'T HAVE MUCH UNDERSTANDING AT THIS POINT OF TIME BUT I THINK GRPC IS MAINLY
 *     USED FOR SERVER TO SERVER COMMUNICATION."
 * 
 *    
 * 
 *                   LETS UNDERSTAND HOW GRPC WORKS
 * 
 * 
 *   
 *     CLIENT FUNCTION : EXECUTE SOMETHING THAT IS RETURN ON  SERVER
 *     CLIENT STUB : CLIENT STUB IS PROVIDING YOU INTRFACES THATS HELPS YOU TO CALL ABOVE FUNCTION (ITS LIKE THERE INTERNALS)
 *     RPC RUNTIME : INTERNAL RUNTIME 
 * 
 *     // SAME AS CLIENT SERVER ALSO HAS THIS THREE THINGS
 *     SERVER FUNCTION
 *     SERVER STUB
 *     RTC RUNTIME
 * 
 *   
 *    NOW IN TOTAL YOU HAVE ABOVE 6 THINGS ANY QUESTION IS LIKE HOW THE DATA FLOWS SO LETS 
 *    UNDERSTAND THIS.
 * 
 *    FIRST SUPPOSE YOU HAVE FUNCTION A THAT IS WRITTEN IN SERVER ANY CLIENT WANTS TO EXECUTE
 *    IT
 *   
 *    THEN I CAN SEE IN CLIENT YOU HAVE SOMETHING LIKE A(); // FUNCTION INVOCATION
 *    THEN FROM THERE REQUEST GOES TO CLIENT STUB WHICH IS INTERNALLY THINGS THAT
 *    HOW THIS FUNCTION A() NEEDS TO BE CALLED FROM THERE IT GOES TO RPC RUNTIME
 *    
 *    SO TILL NOW COMMUNICATION IS LIKE
 * 
 *    CLIENT FUNCTION  ========>  CLIENT STUB ======>  CLIENT RPC RUNTIME 
 *    
 *    NOW ITS TIME TO INVOLE SERVER SO FROM FROM CLIENT RUNTION REQUEST GOES TO 
 *    SERVER RPC RUNTIME AND FROM THERE IT GOES TO SERVER STUB AND FROM THERE
 *    IT GOES TO SERVER FUNCTION.
 * 
 * 
 *    SO TILL NOW BELOW IS THE WAY REQUEST DATA IS FLOWING
 * 
 *   
 *  CLIENT FUNCTION =====> CLIENT STUB ====> CLIENT RPC RUNTIME =====> SERVER RPC RUNTIME =======> SERVER RPC STUBS ====> SERVER FUNCTIONS
 * 
 * 
 *  SO ALL ABOVE ARE THE STEPS THAT WE HAVE SEEN LIKE HOW REQUEST FLOWS NEXT IS RESPONSE STEPS
 * 
 *  (GENERATE THE RESPONSE) (MESSAGE THE RESPONSE)                                                                  (5000 SAAL BAD RESPONSE MIL GYA)
 *  SERVER FUNCTION =====> SERVER STUB  ======> SERVER RPC RUNTIME ====> CLIENT RPC RUNTIME ====> CLIENT STUBS ====> CLIENT FUNCTIONS
 * 
 *  
 *  SEE TO BE REAL AT THIS TIME CLIENT STUB AND RPC RUNTIME ARE BLACK BOXES FOR US WE DON'T HAVE
 *  ANY INDEPTH UNDERSTANDING OF THOSE BUT AS DEVELOPER I CAN UNDERSTAND THAT THERE ARE LOT
 *  OF THINGS NEEDED TO BE DONE BETWEEN.
 * 
 *  BEST EXAMPLE SEE GRPC IS LANGUAGE AGNOSTIC SO SUPPOSE IN SERVER FUNCTION IS WRITTEN IS 
 *  JAVA AND THE CLIENT IS CALLING IT FROM JS SO TO COVERT JAVA TO JS SO CLIENT CAN UNDERSTAND
 *  ALL DONE INTERNALLY BY THESE RUNTIMES AND STUBS.
 * 
 * 
 *  IN REST THE YOU SEND JSON YOU RECIECVE JSON
 * 
 *  IN GRPC YOU SEND PROBUFFER YOU RECEIVE PROTOBUFFER (IDL - INTERFACE DESCRIPTION LANGUAGE)
 * 
 *  ONE IMPORTENT THING TO LEARN IS GRPC USES HTTP2 AND WE KNOW IN HTTP2 WE CAN SEND DATA IN CHUNK
 *  ALSO WE CAN DO SINGLE HANDSHAKE AND KEEP CONNECTION ALIVE.
 * 
 *  NOW IN REST WHEN YOU SEND DATA YOU DO JSON.STRINGFY() TO SERIANLIZE IT AND THEN CLIENT
 *  DESERIABLIZE IT 
 * 
 * 
 *  SAME WAY IN GRPC WE USE SOMETHING CALLED PROTCOL SERIALIZATION
 * 
 * 
 *  SINGLE LONG LIVE CONNECATION IS POSSIBLE (PTA HE BHAI YE HTTP2 KA FEATURE HE)
 * 
 *  ALSO BI-DIRECTIONAL COMMUNICATION IS POSSIBLE (AGAIN BHAI YE BE HTTP2 HE FEATURE HE)
 * 
 * 
 *                LET'S UNDERSTAND PROTOCOL BUFFER
 * 
 * 
 *  SEE WE TALKED ABOU SERIALIZATION AND DECERIALIZATION OF DATA IN GRPC THAT ENITRE THING
 *  IS TAKE CARE BY PROTOCOL BUFFER WHICH IS AGAIN BUILD BY GOOGLE. (https://protobuf.dev/)
 *  
 *  ITS LIKE IDL BETWEEN CLIENT AND SERVER AND WHATEVER DATA YOU WILL PASS IT WILL CONVERT
 *  INTO BINARY FIRST AND THEN DOES SERIALIZATION AND DECERILIZATION.
 * 
 * 
 *  ALSO WE LEARNED THATS ITS LANGUAGE AGNOSTIC SO ITS FINE IF WE HAVE DIFFERNT LANGUAGES 
 *  IN BOTH SIDE PROTOCOL BUTTER WILL TAKE CARE OF IT
 * 
 *  .proto ==>> we need to create this file (WE WILL SEE IN PRACTICAL)   
 *  
 *      // TWO MUST NEEDED DEPENDENCY
 *      "@grpc/proto-loader": "^0.7.10",
        "body-parser": "^1.20.2",
 * 

          HERE MOST OF LEARNING WILL COME FROM EXAMPLE ONLY SEE FIRST LOOK INTO PROTO FILE THEN SERVER THEN CLIENT AND THEN EXPRESS
 * 
           .proto => server.js => client.js => index.js(where we have simple api call with express)


           https://medium.com/@LadyNoBug/grpc-v-s-rest-v-s-others-5d8b6eaa61df  // SEE BEST FEW DIFFERENTS BETWEEN REST AND GRPC
 */








