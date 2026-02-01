document.addEventListener('DOMContentLoaded', function() {
    const redirectCheckbox = document.getElementById('redirectSwitch');
    const autoScrollCheckbox = document.getElementById('autoScrollSwitch');

    chrome.storage.sync.get({
        redirect: true,
        autoScroll: true
    }, function(data) {
        redirectCheckbox.checked = data.redirect;
        autoScrollCheckbox.checked = data.autoScroll;
    });

    redirectCheckbox.addEventListener('change', function() {
        chrome.storage.sync.set({redirect: redirectCheckbox.checked});
    });

    autoScrollCheckbox.addEventListener('change', function() {
        chrome.storage.sync.set({autoScroll: autoScrollCheckbox.checked});
    });
});