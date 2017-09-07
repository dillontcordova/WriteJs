/**
 * Created by dcordova on 8/10/17.
 */

const FS = require('fs');
const ZIP = require('node-zip')();

function WriteJs( _cb, _fileName ){

    let fileName = _fileName || generateName();
    let handler = createStringHandler(_cb);

    function generateName(){
        return 'Uname' + new Date().valueOf() + Math.random().toFixed(8).substring(2);
    }

    function createStringHandler( _cb ){
        let convertedCallback = eval(_cb).toString();
        return `(${convertedCallback})(this);`;
    }

    function createJs( _handler ){
        FS.writeFileSync(`./${fileName}.js`, _handler);
    }

    function createZip( _handler ){
        ZIP.file(`${fileName}.js`, _handler);
        let data = ZIP.generate({base64:false, compression:'DEFLATE'});
        FS.writeFileSync(`./${fileName}.ZIP`, data, 'binary');
    }

    function getZipBuffer( _handler ){
        ZIP.file(`${fileName}.js`, _handler);
        let data = ZIP.generate({base64:false, compression:'DEFLATE'});
        let dataBuf = new Buffer(data.length);
        dataBuf.write(data, 'binary');
        return dataBuf;
    }

    return {
        create: {
            zip: function () {
                createZip( handler );
            },
            js: function () {
                createJs( handler );
            }
        },
        get: {
            zipBuffer: function(){
                return getZipBuffer( handler );
            }
        }
    }
}

module.exports = WriteJs;



