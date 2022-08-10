// use array of js file urls here
var loadedScripts =
    ["https://test.js",
        "https://test2.js",
        "https://test3.js"
    ];

// create a setTimeout for slightly delayed load and append JS files to the head element

function wait1Seconds() {

    loadedScripts.forEach(loadScript);

    function loadScript(item) {
        var s = document.createElement('script');
        s.src = item;
        document.getElementsByTagName("head")[0].appendChild(s);
    }

}
setTimeout(wait1Seconds, 1500);
