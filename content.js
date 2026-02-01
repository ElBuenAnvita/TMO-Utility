chrome.storage.sync.get({ redirect: true, autoScroll: true }, function(settings) {
    if (settings.redirect) {
        if (window.location.host !== "https://zonatmo.com/") {
            let match = window.location.pathname.match(/\/news\/([a-fA-F0-9]+)\//);
            if (match) {
                let id = match[1];
                let matchOptions = window.location.pathname.match(/\/\w+\/\w+\/(.*)/);
                let targetUrl = matchOptions
                    ? "https://zonatmo.com/viewer/" + id + "/" + matchOptions[1]
                    : "https://zonatmo.com/viewer/" + id;
                window.location.replace(targetUrl);
            }
        }
    }

    if (settings.autoScroll) {
        if (window.location.href.includes('/viewer/')) {
            initAutoScroll();
        }
    }
});

// Función que realiza el scroll suave hacia arriba
function initAutoScroll() {
    const doScrollUp = () => {
        const target = document.querySelector('.container') || document.body;

        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Usamos scrollIntoView para un efecto suave
        }
    };

    const nextButtons = document.querySelectorAll('[onclick*="goNextPage"], .page-link');
    const viewer = document.querySelectorAll(".viewer-image");

    nextButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            setTimeout(doScrollUp, 100);
        });
    });
    viewer.forEach(el => {
        el.addEventListener('click', function () { setTimeout(doScrollUp, 100); })
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === "ArrowRight") {
            setTimeout(doScrollUp, 100);
        }
    });

}