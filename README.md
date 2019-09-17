#  @influmy/logger

Easy to use Winston logger wrapper with colorized console transport. Because developers simply want to start coding in their outstandable business logic.

No more console.log for debugging!

So, first and only step it is import constructor and call it.
  
    import Logger, { levels }  from  '@influmy/logger';
    export  default  new  Logger({  level: levels.info  });

A logger accepts an object with following parameters:
|Name|Default|Description|
|--|--|--|
| level |  info| Log only if level is less than or equal to this level

  
Available levels:

    const levels = { 
      error: 0, 
      warn: 1, 
      info: 2, 
      verbose: 3, 
      debug: 4, 
      silly: 5 
    };
