// ==UserScript==
// @name         wikipedia dark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.wikipedia.org/*
// @match        *.wikimedia.org/*
// @grant        none
// ==/UserScript==



var ss = document.createElement('style');
ss.type = "text/css";
ss.innerHTML = "\
#mw-head{background:linear-gradient(#ddd ,#ddd 25%,#ddd);}\
#p-namespaces *.selected span{background-color:;}\
body{background-color:#222;filter: invert(100%) saturate(160%);}\
body img:not(.mwe-math-element img, #mw-panel img), .mwe-popups-container a svg{filter: invert(100%) saturate(62.5%) ;}\
body img:not(.mwe-math-element img, #mw-panel img):not([width='38'][height='38'],[width='250'][height='25']){background:white;}\
.mwe-popups-container a svg{background:linear-gradient(rgba(0,0,0,0) 8px,#fff 8px , #fff 242px,rgba(0,0,0,0) 242px);}\
.new:not(#ca-talk), #ca-talk.new a{filter:hue-rotate(180deg);}\
#content{background-color:#CCC;}\
#p-namespaces>ul>.selected, #p-views>ul>.selected{background:linear-gradient(#ddd,#CCC);}\
#p-namespaces>ul>:not(.selected), #p-views>ul>:not(.selected){background:linear-gradient(#ddd,#cdd);}\
";
document.getElementsByTagName('head')[0].appendChild(ss);

