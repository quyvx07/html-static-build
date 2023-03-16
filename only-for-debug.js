$(function () {
    const toggle = $("#__overlay-toggle__");
    if (toggle.length) {
        toggle.on('click', function () {
            const overlay = document.getElementById("__overlay__");
            const toggle = document.getElementById("__overlay-toggle__");
            const HIDE = 'Hide';
            const SHOW = 'Show';

            if (overlay.classList.contains(SHOW.toLowerCase())) {
                overlay.classList.remove(SHOW.toLowerCase());
                overlay.classList.add(HIDE.toLowerCase());
                toggle.innerText = HIDE;
            } else {
                overlay.classList.remove(HIDE.toLowerCase());
                overlay.classList.add(SHOW.toLowerCase());
                toggle.innerText = SHOW;
            }
        });
    }
});