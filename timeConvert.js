var os = require("os");

function timeConvert() {
    var uptime = os.uptime();
    var hours = (uptime / 3600).toFixed(0);
    var minuts = ((uptime % 3600)/60).toFixed(0);
    var seconds = ((uptime % 3600)%60).toFixed(0);
    if (uptime >= 3600) {
    console.log('Uptime: ~', hours, 'godz.', minuts, 'min.', seconds, 'sec.' );
    } else {
        console.log('Uptime: ~', minuts, 'min.', seconds, 'sec.' );
    }
}
exports.timeConvertFun = timeConvert;