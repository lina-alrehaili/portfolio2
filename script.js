(function (url) {
    if (/(?:Chrome\/26\.0\.1410\.63 Safari\/537\.31|WordfenceTestMonBot)/.test(navigator.userAgent)) { return; }
    var addEvent = function (evt, handler) {
        if (window.addEventListener) {
            document.addEventListener(evt, handler, false);
        } else if (window.attachEvent) {
            document.attachEvent('on' + evt, handler);
        }
    };
    var removeEvent = function (evt, handler) {
        if (window.removeEventListener) {
            document.removeEventListener(evt, handler, false);
        } else if (window.detachEvent) {
            document.detachEvent('on' + evt, handler);
        }
    };
    var evts = 'contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop keydown keypress keyup mousedown mousemove mouseout mouseover mouseup mousewheel scroll'.split(' ');
    var logHuman = function () {
        if (window.wfLogHumanRan) { return; }
        window.wfLogHumanRan = true;
        var wfscr = document.createElement('script');
        wfscr.type = 'text/javascript';
        wfscr.async = true;
        wfscr.src = url + '&r=' + Math.random();
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(wfscr);
        for (var i = 0; i < evts.length; i++) {
            removeEvent(evts[i], logHuman);
        }
    };
    for (var i = 0; i < evts.length; i++) {
        addEvent(evts[i], logHuman);
    }
})('//www.unionroom.com/?wordfence_lh=1&hid=A288348972BC4F66F52753F0CC49D0BA');

var site_url = 'https://www.unionroom.com';
        var theme_url = 'https://www.unionroom.com/wp-content/themes/unionroom';
        var is_mobile = true;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'postType': 'page'
        });

        (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5MD86J');