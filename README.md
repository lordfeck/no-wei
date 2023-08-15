NO-WEI!
=========
A simple JavaScript banner for your website. It informs Google Chrome netizens of the coming abhorrent attack on their freedom and privacy from the rotten WEI (Web Environment Integrity) anti-feature.

The banner will only show for Chrome users. It will explain very briefly and politely why they should consider another browser. There is also a link to an online resource that informs of the dangers posed by WEI.

Finally, there is an option to hide the banner, with this preference stored in localstorage. This option may be switched off; that depends how strongly you feel. To switch it off, set `allowDismissal = false` in `no-wei.js`.

# Why no WEI?
To quote Greg Farough of the Free Software Foundation: "Before serving a web page, a server can ask a third-party "verification" service to make sure that the user's browsing environment has not been "tampered" with. A translation of the policy's terminology will help us here: this Google-owned server will be asked to make sure that the browser does not deviate in any way from Google's accepted browser configuration." This means that the verification service controlled by Google can and *will* be used to exclude certain configurations of web browser from accessing websites that implement WEI.

This will empower Google to refuse attestation to web browsers with advert blocking, web browsers on operating systems other than Windows/Apple/Android, users with stricter privacy preferences, web archiving services, competitors to Google, and anyone else their verification server deems invalid. The effect of this will be an end to the open web.

More details [here (OWD)](https://openwebdefenders.org/) and [here (FSF)](https://www.fsf.org/blogs/community/web-environment-integrity-is-an-all-out-attack-on-the-free-internet).

# Installing
Simply include the JavaScript and CSS at the top of your HTML. See `example.html` for an example. This project is written in vanilla JavaScript and uses no dependencies (JQuery or anything).

# User-Agent Detection
Currently a bit basic but this is the quickest way I could make it work without relying upon dependencies. Our user agent detection simply checks the UA string for telling keywords and then deducts which browser is in use.

We currently show the banner only to Chrome. This may change; we could include other browsers when their position on WEI becomes clear. Currently, no concrete position on WEI has been given for Edge, Opera or Safari (though Safari uses its own equivalent PATs that are [allegedly more private](https://www.theregister.com/2023/07/27/google_web_environment_integrity/)).

Vivaldi will [usually send the same user agent as Chrome](https://vivaldi.com/blog/user-agent-changes/), sorry Vivaldi users, you'll get the banner too.

[Sample User-Agent sources](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) used for this project; it is MDN's fault if I got any wrong ;)
