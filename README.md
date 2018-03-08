# WriteJs
Create and write a js file from a single callback. Choose to create a zip or js file from the simplicity of a method call. 


Create Js File (at same folder destination of the script):

```const WriteJs = require('../index');
 
 let callBack = function(){
     exports.handler = function( _event, _context, _callback ){
         return 'hello';
     }
 };
 
 let handlerName = 'test';
 WriteJs(callBack, handlerName).create.js();
```

