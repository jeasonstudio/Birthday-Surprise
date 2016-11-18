function fullScreen() {
    var el = document.documentElement;
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
        el.mozRequestFullScreen || el.msRequestFullScreen;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    } else if (typeof window.ActiveXObject != "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}


var theater = theaterJS()

theater
    .on('type:start, erase:start', function () {
        theater.getCurrentActor().$element.classList.add('actor__content--typing')
    })
    .on('type:end, erase:end', function () {
        theater.getCurrentActor().$element.classList.remove('actor__content--typing')
    })
    // .on('type:start, erase:start', function () {
    //     // if (theater.getCurrentActor().name === 'vader') {
    //     document.body.classList.add('dark')
    //         // } else {
    //         //     document.body.classList.remove('dark')
    //         // }
    // })

theater
    .addActor('vader', {
        speed: 1,
        accuracy: 0.4
    })
    .addActor('jeason', {
        speed: 1,
        accuracy: 0.4
    })
    .addScene('vader:老师您好，', 300, '在座的同学们你们好！', 1500)
    .addScene('jeason:因为一些原因，', 200, '我黑了这台电脑', 200, -2, '主机', 1500)
    .addScene('vader:不好意思耽误大家几分钟的时间', 1500)
    .addScene('jeason:今天是我女朋友贾凡茗的生日，她现在', 500, '就坐在讲台下', 1000)
    // .addScene(theater.replay.bind(theater))


var nowDate = new Date();
var theDateWeBegan = new Date('Mon Aug 15 2016 21:36:07 GMT+0800 (CST)');

var secOfDate = (nowDate - theDateWeBegan) / 1000;

console.log('距今相差秒数为：' + secOfDate);

var clock;

$(document).ready(function () {
    var clock;

    clock = $('.clock').FlipClock(secOfDate, {
        clockFace: 'DailyCounter',
        autoStart: true
    });

});