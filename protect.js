(function () {
    'use strict';
    var devtools = {
        open: false,
        orientation: null
    };
    var threshold = 160;
    var emitEvent = function (state, orientation) {
        window.dispatchEvent(new CustomEvent('devtoolschange', {
            detail: {
                open: state,
                orientation: orientation
            }
        }));
    }
    setInterval(function () {
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        var orientation = widthThreshold ? 'vertical' : 'horizontal';

        if (!(heightThreshold && widthThreshold) &&
            ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
            if (!devtools.open || devtools.orientation !== orientation) {
                emitEvent(true, orientation);
            }
            devtools.open = true;
            devtools.orientation = orientation;
        } else {
            if (devtools.open) {
                emitEvent(false, null);
            }
            devtools.open = false;
            devtools.orientation = null;
        }
    }, 300)
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = devtools;
    } else {
        window.devtools = devtools;
    }
})();


window.addEventListener('devtoolschange', function (e) {
    if (e.detail.open) console.clear();
    document.write("<html><body><h1>Never F12 again!</h1><h3>If you want the code, please contact the author.</h3></body></html>");
})
