# WriteJs
Create and write a js file from a single callback. Choose to create a zip or js file from the simplicity of a method call. 


Create Js File (will be created at the same destination as the js script file):
```
const WriteJs = require('writejs');
 
 let callBack = function(){
     exports.handler = function( _event, _context, _callback ){
         return 'hello';
     }
 };
 
 let fileName = 'test';
 WriteJs(callBack, fileName).create.js();
```
The file "./test.js" was just created.


Create a Zip File (at same folder destination of the script):
```
const WriteJs = require('writejs');

let callBack = function(){
    exports.handler = function( _event, _context, _callback ){
        return 'hello';
    }
};

let fileName = 'test';
WriteJs(callBack, fileName).create.zip();
```
The file "./test.zip" was just created.


Get the zip buffer of the file (at same folder destination of the script):
```
const WriteJs = require('writejs');

let callBack = function(){
    exports.handler = function( _event, _context, _callback ){
        return 'hello';
    }
};

let handlerName = 'test';
let zipBuffer = WriteJs(callBack, handlerName).get.zipBuffer();
console.log(zipBuffer);
```
