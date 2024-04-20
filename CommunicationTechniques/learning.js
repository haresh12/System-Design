/**
 *   FROM NOW THIS LEARNING.JS WILL BE DEVIDED INTO TWO PARTS FIRST PART WILL CONTAINS BASICS LIKE ONLY IMPORTENT POINTS AND SENCOND PART
 *   WILL COVER INDEPTH KNOWLEDGE ON THOSE IMPORTENT POINTS
 */


/**
 *                                      PART ONE IMPORTENT POINTS
 * 
 * 
 *   COMMUNICATION TECHNIQUES =====> 
 * 
 *   Things that we are going to cover :
 * 
 *   Short Polling
 *   Long Polling
 *   Websocket
 *   Server Side Events 
 *   Webhooks (Differnt then websocket)
 * 
 * 
 *   WEBHOOKS IS LIT
 * 
 *   FOR FOREX APP REALLY POLLING WILL WORK BECAUSE IN FEW SECONDS MARKET CAN BE HELL CRASH
 * 
 * 
 *  SHORT POLLING : ===> Short Live connection => No persistance connection
 *          YOU HAVE 1M USER AND EVERY 5 SEC YOU MAKE REQUEST ITS HELL EVERY 10 SEC YOUR SERVER RECEIVE 1AM REQUEST
 * 
 *  SHORT POLLING IS SIMPLE ITS LIKE NORMAL REST CALL BUT IN SOME INTREVAL 
 * 
 *  ALWAYS INSURE REMOVE OR STOP SETINTERVAL()  clearInterval(interval)
 *  
 * 
 *  LONG POLLING : Single One lived connection
 *                 Connection is open until you get data or there is some timeout
 *                 Less number of request
 *      
 *                CONST : LOT OF ACTIVE CONNECTIONS I SEE I UNDERSTAND
 * 
 *                IN LONG POLLING SERVER CONFIG MATTERS
 *                
 * 
 * 
 *  WEB-SOCKET :   FULL DUPLEX COMMUNICATION 
 *                 Bidirectional Communication
 *                 Single long live TCP connection
 *                 
 *    HTTP UPGRAD REQUEST MUST UNDERSTAND FIRST REQUEST
 *    YES SOCKET.IO IS BEST FOR WEBSOCKET COMMUNICATION         SOCKET.IO CREATE ONE BASIC EXAMPLE
 * 
 *   connection , disconnect all this are events we have in Socket.io 
 * 
 *  101 swiching protocol =>>>>> MUST UNDERSTAND 
 * 
 *  Data framing 
 * 
 *  Connection limits in some of the provider
 *  
 *  Resource clean up is must its like event listner
 * 
 * 
 *  SERVER-SIDE EVENTS ===>>>>
 * 
 *      THIS IS I THING GOOD ONE AND NEW THING I LEARNED BECAUSE HERE YOU MAKE REQUEST ONE TIME TO SERVER AND AFTER THAT ITS SERVER JOB TO SEND EVENTS WHEN EVER SOME CHANGES HAPPEN
 * 
 *     EVENT STREAM SOMETHING NEW FOR ME
 * 
 *     NORMAL STRUCTURE : event | data | id
 * 
 *    OK ONE THING TO UNDERSTAND HERE IS FOR SERVER SIDE EVENTS AND WE DON'T HAVE ANY DIFFERENT LIBRARY OR SOMETHING THE ENTIRE GAME OF HEADER HERE WHEN WE MAKE REQUEST  OR WE CAN SAY WHEN WE 
 *    CRETE API WE JUST NEED TO CARE ABOUT SETTING UP FEW HEADERS
 * 
 * 
 *    setHeader('content-type','text/event-stream');
 *    setHeader('connection','keep-alive');
 *    setHeader('catch-control','no-cathe'); //  NO SURE THIS IS NEEDED OR NOT BUT ABOVE 2 1000% MAKE SENSE
 * 
 * 
 *    EventSource(); // new thing that provided by all morden browser MAKE SURE GO DEEP INTO THIS FOR SURE
 * 
 *    SO SERVER SIDE HEADERS METTERS AND CLIENT SIDE EVENSOURCE MATTERS
 *          
 *    
 * 
 * 
 *  
 *    
 */