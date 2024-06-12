/**
 *  React compiler is release we can use it with next js connery and start using it
 * 
 *  now we can remove all the useMemo and useCallback from our code base 
 * 
 *  Also there is possibility that react compiler can do things that we don't need 
 * 
 *  For that we need to for that we can add 
 * 
 *  comiletionMode : "annotation" // ADD THIS IN CONFIG
 * 
 *  NOW WHERE YOU THING YOU NEED COMPILER JUST USE THIS TWO ANNOTATION
 *  
 *  "use memo" // IF YOUR COMPONENT NEEDED TO USE MEMO THIS WILL GIVE IDEA TO COMPILER
 * 
 *  "use callBack" // SAME AS ABOVE JUST FOR useCallBack
 */