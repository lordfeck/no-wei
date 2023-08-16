/*******************************************************************************
 * No-WEI!
 * (C) 2023 Thransoft (soft.thran.uk)
 * Licence: MIT
 * Src: https://github.com/lordfeck/no-wei
/*******************************************************************************/

// AGRESSIVE MODE. Set to false if you want the banner to always show.
const allowDismissal = true;

window.addEventListener("load", function() {
    // Detect Chrome only. Safari, Edge and Opera TBD
    const uaHasFox = navigator.userAgent.includes("Firefox");
    const uaHasChrome = navigator.userAgent.includes("Chrome");
    const uaHasSafari = navigator.userAgent.includes("Safari");
    const uaHasOpera = navigator.userAgent.includes("OPR");
    const uaHasEdge = navigator.userAgent.includes("Edg");

    const isDismissed = window.localStorage["nowei-isDismissed"];

    // User agent is okay, or has dismissed banner
    if (!uaHasChrome || uaHasFox || uaHasOpera || uaHasEdge || allowDismissal && isDismissed === "true") { 
        return;
    } else if (uaHasChrome && uaHasSafari) { // UA is Chrome
        const noWei = document.createElement("div");
        noWei.setAttribute("id", "no-wei-banner");

        let dismissalNotice = "";
        if (allowDismissal) {
            dismissalNotice = `<a href="#" id="nowei-dismiss">Dismiss this banner</a>. `;
        }

        noWei.innerHTML = `<div id="nowei-opener">Dear Chrome User:</div>
        <p class="nowei-p">Regrettably, Google is changing the web for the worse. By using Chrome, you are unwittingly helping Google consolidate control over the open Internet through the disastrous WEI standard. This is depriving internet freedom from you and billions of others. Do not help them any further; take a stand!</p>
        <p class="nowei-p">Consider using a browser that respects your freedom such as <a href="https://www.mozilla.org/en-GB/firefox/new/" target="_blank">Firefox</a>, <a href="https://brave.com/" target="_blank">Brave</a> or <a href="https://vivaldi.com/" target="_blank">Vivaldi</a>.</p>
        <div><a href="https://openwebdefenders.org/" target="_blank">Find out more about WEI and its dangers here</a>. ${dismissalNotice}</div>`;

        document.body.insertAdjacentElement("afterbegin", noWei);

        if (allowDismissal) {
            const dismissLink = document.getElementById("nowei-dismiss");
            dismissLink.addEventListener("click", function(e) {
                e.preventDefault();
                window.localStorage["nowei-isDismissed"] = "true";
                noWei.remove();
            });
        }
    }
});
