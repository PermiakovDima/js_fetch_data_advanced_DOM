parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",t=document.querySelector("body"),e=function(){return fetch(n).then(function(n){return n.json()})};function c(n,e,c){t.insertAdjacentHTML("beforeend",'\n    <div class="'.concat(n,'">\n      <h3>').concat(c,'</h3>\n      <ul class="').concat(e,'"></ul>\n    </div>\n  '))}function i(n,t){document.querySelector(".".concat(n)).insertAdjacentHTML("beforeend","\n    <li>".concat(t,"</li>\n  "))}var o=function(){e().then(function(n){return Promise.race(n).then(function(n){c("first-received","first-list","First Received"),i("first-list",n.name)})})},r=function(){e().then(function(n){return Promise.all(n).then(function(n){c("all-successful","all-list","All Successful"),n.map(function(n){return i("all-list",n.id.toUpperCase())})})})};e().then(o).then(r).catch();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9bbc7a2c.js.map