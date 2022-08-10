
//This one ONLY appends to the head

var loadedScripts =
    ["https://test.js",
     "https://test2.js",
     "https://test3.js"
    ];

loadedScripts.forEach(loadScript);


function loadScript(item) {
    var s = document.createElement('script');
    s.src = item;
    document.getElementsByTagName("head")[0].appendChild(s);
}
