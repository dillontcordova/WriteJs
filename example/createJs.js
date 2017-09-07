/**
 * Created by dcordova on 9/7/17.
 */

const WriteJs = require('../index');

let callBack = function(){
    exports.handler = function( _event, _context, _callback ){
        return 'hello';
    }
};

let handlerName = 'test';
WriteJs(callBack, handlerName).create.js();
