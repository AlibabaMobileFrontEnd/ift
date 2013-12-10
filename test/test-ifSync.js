var ift = require('../lib/ift');
var path = require('path');

ift.ifInit({});


ift.ifSync({
    files:[path.resolve("./demo/data/demo")],
    savePath:path.resolve("./doc/demo.md"),
    //dataTpl:path.resolve("./tpl/data.tpl"),
    //dataIncTpl:path.resolve("./tpl/data.inc.tpl"),
})