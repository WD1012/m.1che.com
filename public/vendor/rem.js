
window.onload=function () {
    FastClick.attach(document.body);
}
if(!window.Promise) {
    var s=document.createElement('script');
    var h=document.getElementsByTagName('head')[0];
    s.setAttribute('src','/static/dist/scripts/es6-promise.min.js');
    h.appendChild(s);
}
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = 25 * (750 / 375) + 'px';
            }else {
                // docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
                docEl.style.fontSize = 25 * (clientWidth / 375) + 'px';
            }

            // docEl.style.fontSize = 25 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// 640 1rem=40px  750 1rem=50px