// this will append js script files to the body

var loadedScripts =
    ["https://test.js",
        "https://test2.js",
        "https://test3.js"
    ];

loadedScripts.forEach(loadScript);

function loadScript(item) {
    var s = document.createElement('script');
    s.src = item;
    document.body.appendChild(s);
}
