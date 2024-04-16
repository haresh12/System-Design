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
 */


