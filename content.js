if (window.location.host !== "https://lectortmo.com/") {
    let match = window.location.pathname.match(/\/news\/([a-fA-F0-9]+)\//); // /\/([^\/]+)\//
    if (match) {
        let id = match[1];
        let matchOptions = window.location.pathname.match(/\/\w+\/\w+\/(.*)/);
        if (matchOptions) {
            window.location.replace("https://lectortmo.com/viewer/" + id + "/" + matchOptions[1])
        } else window.location.replace("https://lectortmo.com/viewer/" + id)
    } else console.log("TempHexID not found")
}
