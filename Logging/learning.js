/**
 *   In this module we don't have any practical's to cover but this module will cover about different logging tools why those are
 *   importent and how do you test application when it's in production
 * 
 *   Why user logs matters and when you are logging details how importent it is to care about different GDPA , HIPPA and PIA all this
 *   guidline's regarding user information
 * 
 *   Tools that we are going to cover
 * 
 *    Google Analytics
 *    Microsoft Clearity (This is lit)
 *    LogRocket
 *    Syntry 
 *    Open Telemetry
 *    
 * 
 *  Now above all tools will give you information about user events and we can add our custom events also
 * 
 *  But after Logging next importent step would be Alearting which helps us when something critical happens
 *  or something passed some threshold this is lit and even in tools like Syntry offers us the 
 *  alerting system our SMS , EMAIL SLACK AND ONCALL ALSO . ONCALL IS LIT
 * 
 *  Next after alerting and logging last step is fixing see its always upto criticality of bug like how seviour it
 *  is in my career i have done lot's of hot fixes also and 80% case we just log the bug in JIRA and then 
 *  set  version for next release
 * 
 *  SO ONE THING THESE THREE TOPICS WE ARE GOING TO COVER LOGGING , ALERTING , FIXING THIS ENTIRE MODULE IS THORITICAL BUT MUST
 *  BECAUSE WE ARE GOING TO LEARN GOOD AMOUNT OF NEW THINGS.
 */


/**                                         INTRO                 
 *        
 *    This is great interview question like suppose user facing issue in production then how will you 
 *    fix it ?
 * 
 *    Normal Ans : I will ask my support team to contact with user and then i will be on call with
 *    user see the issue in network tab and once i understand i will do the hot fix
 *    (THIS WAS THE REAL PROCESS ONE OF THE ED TECH COMPANY I WORKED FOR)
 * 
 *    PRO-ANSWER : IN OUR APLLICATION WE ALSO EACH LOGGING AND MONITORING WHERE WE LOGS WHAT KIND
 *    OF ISSUES USER ARE FACHING AND EACH AND EVERY DEVICE INFO WHICH HELP US TO FIX ISSUES WITHOUT
 *    EVEN CONNECTING WITH USERS.
 * 
 *    THINK ABOUT MULTI LOGGING ISSUES CAN WE FIXED WITH LOGGING AND ALERTING LIKE THIS COURSE IS
 *    ACCESS FROM 5 DIFFERENT MEANS SOMETHING PHISHE IS GOING ON IN THAT CASE WE CAN BLOCK THE 
 *    ACCOUNT
 * 
 *    RIGHT SET OF LOGGING DATA CAN REALLY HELP US TO FIX ISSUES IN SPEED
 * 
 *    ALWAYS MAKE SURE YOU HAVE PII DATA OF USER ELSE YOU WILL HAVE TO PAY BIG FINE
 * 
 *    WHAT IF ERROR HAPPENS BEFORE EVEN YOUR LOGGING GET INTIATE THIS IS GOOD QUESTION
 * 
 *    TALKING ABOUT ABOVE THING SOME CAN HAVE GOOD IMPRETION IN INTERVIEWS
 * 
 *    ALWAYS ALWAYS THING ABOUT PII DON'T STORE HELL OUT OF USER DATA
 * 
 *    SO FROM INTRO WE LEARNED ABOUT LOGGING MONITORING ALERTING FIXING
 * 
 *    DARK AND LIGHT THEAM IS KIND OF FEATURE IS NOT WORKING ITS FINE IF YOU DON'T HAVE
 *    LOGGING
 * 
 *    IN SHORT IF ANY GOOD TO HAVE FEATURE DOES NOT HAVE LOGGING THEN ITS YOU DON'T NEED LOGGING
 *    FOR THOSE
 */


/**
 *                              TELEMETRY (THIS IS NEW SO GO AS DEEP AS YOU CAN)
 * 
 *      
 *      THREE STEP OF PROCESS
 * 
 *      COLLECT ==========================>  MONITOR ============================> FIX
 * 
 * 
 *      1. COLLECT 
 *          
 *        CAPTURE THE RIGHT DATA
 *           
 *            WHAT KIND OF DATA SHOULD BE CAPTURE ?
 *  
 *                - PERFOMRANCE MATRICS
 *                (WEB VITELS => LIKE HOW LONG YOUR WEB-PAGES TAKE LOAD)
 *                (API RESPONSE TIME MUST)
 *                (SUPPOSE WE HAVE SOME LOGIC LIKE IMAGE PROCESSING OR SOME ITTERATION THEN HOW LONG DOES IT TAKE)
 *                (RESOURCE TIMING LIKE IMANGES AND ALL LOAD TIME)
 *                (PAINT TIME , FRAME RATE  , NETWORK - (LIKE YOU API RESPONSE , CONNECTED NETWORK 3G/4G)) (FRAME RATE AND FRAME DROPS WE NEED TO GO DEEP INTO THIS TOPIC FOR SURE)
 *         
 *              -  RESOURCE ERROR 
 * 
 *                   5XX OR 4XX ERROR (THIS CAN TELL US HOW FREQUVITLY OUR API GETTING FAILD)
 *                   API FAILURE
 *                   NETWORK ERROR (THIS IS GOOD WE CAN MAKE DESCITION LIKE SHOULD WE SUPPORT OFLINE OR NOT)
 *                   CLIENT EXEPTION
 *                   
 * 
 *                
 *              - USER INTERACTION
 *  
 *                   CLICK  (MUST)
 *                   SCROLLING BEHAVIOURS  (THIS ONE ALSO I LIKED)
 *                   BROWSER EVENTS 
 * 
 *             - SYSTEM UTILIZATION
 *               (RESOURCE USAGE LIKE YOUR CPU AND MEMORY USAGE OF SYSTEM BECAUSE SOMETIME THOSE COULD BE THE REASON YOUR WEBAPP BECOME SLOW)  (THIS ONE IS LIT)
 * 
 * 
 *  
 *              APART FROM ALL ABOVE THINGS WE HAVE HAVE CUSTOM EVENTS ALSO AND I HAVE USED LIKE IN 90% PROJECT MAINLY FIREBASE ANALYTICS AND MIXPANEL 
 * 
 *             FROM ABOVE ALL POINTS I WAS MAINLY FOCUS OF CUSTOM EVENTS BUT PERFORMANCE MATRICS , RESOURCE ERROR , USER INTERACTION ALL THIS I FOCUSED ONLY 40 50% FROM
 *             NOW I WILL FOCUS ON THIS ALSO    
 *
 *                   
 *                  
 *        
 *       2. CLASSIFY THE DATA (HOME,DETAILS,AUTH THIS CAN BE DIFFENENT CLASSIFICATION EXAMPLE)
 * 
 * 
 *     DIFFERANT OPTIONS WE HAVE FOR LOGGING AND MONITERING (TOOLS)
 * 
 *       1. MS CLERITY (TRY ONCE IS LIT)
 *    
 *          DEMO LINK : https://clarity.microsoft.com/demo/projects/view/3t0wlogvdz/dashboard?date=Last%203%20days (INSANE)
 * 
 *         RECORDING AND HEATMAP FEATURE IS INSANE (https://clarity.microsoft.com/demo/projects/view/3t0wlogvdz/impressions?date=Last%203%20days)
 *  
 *  
 *        
 *       2. GOOGLE ANALYTICS (USED LIKE MORE THEN 15 TIMES)
 *       3. SYNTRY (MOST COMMEN USED IN INDUSTRY I HAVE USED MANY TIMES MAINLY FOR ERRORS)
 *           IF WE CARE ONLY ABOUT ERRORS I THING THIS TOOL WINS 
 * 
 *          IN SYNTRY WE MOSTLY SPEND TIME ONLY IN ERROR BUT THE PERFORMANCE TAB IS LIT
 * 
 *           https://try.sentry-demo.com/organizations/ultimate-lark/performance/  (MUST DEEP DOWN INTO THIS)
 *           ALSO SAME AS MS CLEARTY SENTRY HAS REPLAYS VIDEO ACTION OPTION
  
 *       4. LOGROCKET (NEW)
 *       5. OPEN TELEMATRY (NEW)  (CLONED DEMO BUT NOW WORKING ISSUE WITH MAKE FILE I DON'T THING ITS DIFFERENT THEN OTHER)
 *                 (https://opentelemetry.io/docs/demo/docker-deployment/)
 * 
 *    
 *   SEE NOWING ABOUT THIS DIFFERENT TOOLS IS GOOD I TRIED MS CLEARTY AND ITS HELL EASY AND TRACKS HELL AMOUT OF STUFF AND GIVE  YOU NECESSARY DATA   
 * 
 * 
 *   CORELATION ID : IF YOU HAVE MULTIPLE SYSTEM INVOLED LIKE YOUR FRONTEND CALLING API FROM BACKEND BACKEND USING SOME THIRD PARTY API SO ON SO IF ERROR OCCURS THEN IN THAT CASE WE MUST NEED TO HAVE
 *                  CORELATION ID BETWEEN THOSE SYSTEM TO TRACK ERROR EAISLY THIS ONE ALSO I NEED TO GO DEEP
 * 
 *   FEATURE FLAG CAN BE HANDLED FROM OPEN TELEMATRY I DON'T THING WE WILL REALY ON THAT WE CAN DO IT BY OUR SELF
 *       
 */