
document.addEventListener('DOMContentLoaded', function () {
   
    (function(l) {
        if (l.search[1] === '/') {
            var decoded = l.search.slice(1).split('&').map(function(s) {
                return s.replace(/~and~/g, '&')
            }). join('?');
            window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
        }
    }(window.location));

    var path = window.location.pathname;
    var base = '/Portfolio-forsettelse-oppgave/';
    if (path.startsWith(base)) {
        window.location = base + '#/' + path.slice(base.length);
    } else {
        window.location = '/Portfolio-forsettelse-oppgave/' + '#/' + path;
    }
});
