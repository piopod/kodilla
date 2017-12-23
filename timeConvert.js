var os = require("os");

function timeConvert() {
    var uptime = os.uptime();
    if (uptime >= 3600) {
        var hours = (uptime / 3600).toFixed(0);
        var minuts = ((uptime % 3600)/60).toFixed(0);
        var seconds = ((uptime % 3600)%60).toFixed(0);
        var time = 'Uptime: ~', hours, 'godz.', minuts, 'min.', seconds, 'sec.'
    } else {
        var minuts = ((uptime % 3600)/60).toFixed(0);
        var seconds = ((uptime % 3600)%60).toFixed(0);
        var time = 'Uptime: ~', minuts, 'min.', seconds, 'sec.';
    }

    return time
}
exports.timeConvertFun = timeConvert;