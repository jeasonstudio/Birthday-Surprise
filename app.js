(function fullScreen() {
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
})()

var theater = theaterJS()

theater
    .on('type:start, erase:start', function () {
        theater.getCurrentActor().$element.classList.add('actor__content--typing')
    })
    .on('type:end, erase:end', function () {
        theater.getCurrentActor().$element.classList.remove('actor__content--typing')
    })
    .on('type:start, erase:start', function () {
        if (theater.getCurrentActor().name === 'vader') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    })

theater
    .addActor('vader', {
        speed: 0.8,
        accuracy: 0.6
    })
    .addActor('luke')
    .addScene('vader:Luke', 400)
    .addScene('luke:What?')
    .addScene('vader:I am your father.')
    .addScene('luke:Nooo...', -3, '!!! ', 400, 'No! ', 400)
    .addScene('luke:That\'s not true!', 400)
    .addScene('luke:That\'s impossible!')
    .addScene('vader:Search your feelings.', 1600)
    .addScene('vader:You know it to be true.', 1000)
    .addScene('luke:Noooooooo! ', 400, 'No!')
    .addScene('vader:Luke.', 800)
    .addScene('vader:You can destroy the Emperor.', 1600)
    .addScene('vader:He has foreseen this. ', 800)
    .addScene('vader:It is your destiny.', 1600)
    .addScene('vader:Join me.', 800)
    .addScene('vader:Together we can rule the galaxy.', 800)
    .addScene('vader:As father and son.', 1600)
    .addScene('vader:Come with me. ', 800)
    .addScene('vader:It is the only way.', 2000)
    .addScene(theater.replay.bind(theater))