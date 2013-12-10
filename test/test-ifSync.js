var ift = require('../lib/ift');
var path = require('path');

ift.ifInit({root: __dirname});


ift.ifSync({
    dataDir: path.join(__dirname, 'demo/data'),
    files: ['demo'],
    savePath: path.resolve("./doc/demo.md"),
    dataTpl: path.resolve("./tpl/data.tpl"),
    dataIncTpl: path.resolve("./tpl/data.inc.tpl")
})