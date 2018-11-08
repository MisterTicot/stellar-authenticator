!function(e){var t={};function n(c){if(t[c])return t[c].exports;var r=t[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(c,r,function(t){return e[t]}.bind(null,r));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports={name:"stellar-authenticator",version:"0.12.1",description:"An application to easily & securely sign Stellar transactions",author:"MisterTicot",repository:"github:cosmic-plus/webapp-stellar-authenticator",license:"MIT",browserslist:"last 4 versions, > 0.1%",keywords:["cryptocurrency","stellar","authenticator","safe","wallet"],scripts:{test:'echo "Error: no test specified" && exit 1',lint:"eslint --fix src/*.js",get:"git submodule update --init --recursive","build-css":"cat src/*.css | autoprefixer-cli -o web/authenticator.css && cp -f node_modules/cosmic-lib/web/cosmic-lib.css web","build-html":"cp -fl src/*.html web","build-js":"webpack -p && cp -f node_modules/stellar-sdk/dist/stellar-sdk.min.js web/stellar-sdk.js","build-misc":"cp -f AUTHORS LICENSE README.md package-lock.json web",build:"for i in js css html misc; do npm run build-$i || return; done",check:"npm run get && cp web/package-lock.json . && npm ci && npm run build && cd web && git status",watch:"webpack -d --watch",serve:"npm run watch & cd web && live-server --no-browser"},devDependencies:{"@babel/core":"^7.1.5","@babel/plugin-transform-runtime":"^7.1.0","@babel/preset-env":"^7.1.5","@babel/runtime":"^7.1.5","autoprefixer-cli":"^1.0.0","babel-loader":"^8.0.4",eslint:"^5.8.0","live-server":"^1.2.0",webpack:"^4.25.1","webpack-cli":"^3.1.2"},dependencies:{"@cosmic-plus/base":"^1.1.0","@cosmic-plus/jsutils":"^1.7.0","cosmic-lib":"^1.1.1","scrypt-async":"^2.0.0",tweetnacl:"^1.0.0","tweetnacl-util":"^0.15.0"}}},function(e,t,n){var c=location.host.replace(/:.*/,""),r="localhost"!==c&&"127.0.0.1"!==c,o=n(0).name,i=n(0).version,s="".concat(location.protocol,"//").concat(location.host,"/"),l=1e3,a="".concat(o,"-").concat(i),u=["/","authenticator.css","authenticator.js","cosmic-lib.css","index.html","stellar-sdk.js"];self.addEventListener("install",function(e){console.log("Installing ".concat(a,"...")),e.waitUntil(function(e){return caches.open(a).then(function(t){return t.addAll(e)})}(u).then(function(){return self.skipWaiting()}).then(function(){return console.log("".concat(a," installed"))}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){e!==a&&caches.delete(e)}))}))}),self.addEventListener("fetch",function(e){if(r&&"GET"===e.request.method&&e.request.url.match(d)){var t=new Request(e.request.url.replace(/\?.*$/,"")),n=t.url.replace(d,"")||"index.html";e.respondWith(function(e){return caches.open(a).then(function(t){return t.match(e)})}(t).then(function(e){return e?(console.log("Loading ".concat(n," for ").concat(a,"...")),e):(console.log("Downloading ".concat(n,"...")),function(e){return new Promise(function(t,n){var c=setTimeout(n,l);return fetch(e).then(function(e){clearTimeout(c),t(e)})})}(t))}))}});var d=new RegExp("^"+s)}]);
//# sourceMappingURL=worker.js.map