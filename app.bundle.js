!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=13)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(i).concat([r]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var o=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[t]=o}return n[t]}}(),c=null,l=0,d=[],p=e(10);function u(t,n){for(var e=0;e<t.length;e++){var o=t[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(g(o.parts[a],n))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(g(o.parts[a],n));i[o.id]={id:o.id,refs:1,parts:s}}}}function m(t,n){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function f(t,n){var e=s(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),d.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertAt.before,e);e.insertBefore(n,r)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=d.indexOf(t);n>=0&&d.splice(n,1)}function v(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return e.nc}();o&&(t.attrs.nonce=o)}return b(n,t.attrs),f(t,n),n}function b(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function g(t,n){var e,o,r,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var a=l++;e=c||(c=v(n)),o=w.bind(null,e,a,!1),r=w.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(n,t.attrs),f(t,n),n}(n),o=function(t,n,e){var o=e.css,r=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),r=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=v(n),o=function(t,n){var e=n.css,o=n.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){h(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=m(t,n);return u(e,n),function(t){for(var o=[],r=0;r<e.length;r++){var a=e[r];(s=i[a.id]).refs--,o.push(s)}t&&u(m(t,n),n);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,x=(y=[],function(t,n){return y[t]=n,y.filter(Boolean).join("\n")});function w(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n,e){var o=e(3);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){n=t.exports=e(0)(!1);var o=e(4),r=o(e(5)),i=o(e(6)),a=o(e(7)),s=o(e(8)),c=o(e(9)+"#fontello");n.push([t.i,"@font-face {\r\n  font-family: 'fontello';\r\n  src: url("+r+");\r\n  src: url("+i+") format('woff2'),\r\n       url("+a+") format('woff'),\r\n       url("+s+") format('truetype'),\r\n       url("+c+") format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\r\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\r\n/*\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  @font-face {\r\n    font-family: 'fontello';\r\n    src: url('../font/fontello.svg?86019232#fontello') format('svg');\r\n  }\r\n}\r\n*/\r\n\r\n [class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\r\n  font-family: \"fontello\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  speak: none;\r\n\r\n  display: inline-block;\r\n  text-decoration: inherit;\r\n  width: 1em;\r\n  margin-right: .2em;\r\n  text-align: center;\r\n  /* opacity: .8; */\r\n\r\n  /* For safety - reset parent styles, that can break glyph codes*/\r\n  font-variant: normal;\r\n  text-transform: none;\r\n\r\n  /* fix buttons height, for twitter bootstrap */\r\n  line-height: 1em;\r\n\r\n  /* Animation center compensation - margins should be symmetric */\r\n  /* remove if not needed */\r\n  margin-left: .2em;\r\n\r\n  /* you can be more comfortable with increased icons size */\r\n  /* font-size: 120%; */\r\n\r\n  /* Font smoothing. That was taken from TWBS */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  /* Uncomment for 3D effect */\r\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\r\n}\r\n\r\n.icon-user:before { content: '\\e800'; } /* '' */\r\n.icon-calendar:before { content: '\\e801'; } /* '' */\r\n.icon-eye:before { content: '\\e802'; } /* '' */\r\n.icon-search:before { content: '\\e803'; } /* '' */\r\n",""])},function(t,n,e){"use strict";t.exports=function(t,n){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||n?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,n,e){t.exports=e.p+"1fe7ae4823864e6f7771800b7645fce3.eot"},function(t,n,e){t.exports=e.p+"562cf6a0fd587e7882b9e530f427b451.woff2"},function(t,n,e){t.exports=e.p+"87be8d174742b7084a3f3b15b987f646.woff"},function(t,n,e){t.exports=e.p+"f70bfa36a652d9362745ce532ff81bd6.ttf"},function(t,n,e){t.exports=e.p+"c6eab94fd5a780388c631a3be1762a5b.svg"},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,n,e){var o=e(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"*{\n  box-sizing: border-box;\n}\nbody {\n\tpadding: 0;\n\tmargin: 0;\n\tfont-family: sans-serif;\n}\n.header {\n\tpadding: 10px;\n}\n\n.wrapper {\n  width: 100vw;\n\tposition: relative;\n\tmargin: 0 auto;\n  overflow-x: hidden;\n  height: 100vh;\n}\n.search-label {\n\twidth: 60%;\n  display: grid;\n  grid-template-columns: auto 100px;\n  grid-gap: 10px;\n  margin: 0 auto;\n  margin-top: 10px;\n\tposition: relative;\n}\n.search-label::before {\n\tcontent: '\\e803';\n}\n/* MAGNIFIER */\n.magnifier::before {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 10px;\n\ttop: 5px;\n\tfont-family: 'fontello';\n\tfont-size: 1.5rem;\n\tcolor: #333333;\n}\n.search-input::placeholder {\n\tcolor:  #333333;\n}\n.search-input {\n  /* border: 2px solid #7a7a7a; */\n  border: none;\n  box-shadow: inset 0px 2px 10px #7a7a7a, 0px 4px 4px #7a7a7a;\n\tborder-radius: 4px;\n\toutline: none;\n\tfont-size: 1.25rem;\n\tpadding: 5px 0px 5px 40px;\n\twidth: 100%;\n\tcolor:  #333333;\n}\n.search-btn {\n  border-radius: 4px;\n  outline: none;\n  border: none;\n  box-shadow: inset 0px 2px 10px #7a7a7a, 0px 4px 4px #7a7a7a;\n  font-size: 1.25rem;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.search-btn:hover {\n  background-color: #222;\n  color:#FF9828;\n}\n\n:root{\n  --clip-count: 4;\n\t--clip-width: calc(100vw/var(--clip-count));\n\t--clip-height: calc(var(--clip-width) * 1.25);\n\t--clip-total: 0;\n\t--position: 0;\n}\n\n.clip-list {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(var(--clip-total),var(--clip-width));\n  grid-template-rows: var(--clip-height);\n\tmargin-top: 0;\n\tmargin-left: 0;\n\tpadding: 0;\n\twidth: calc(var(--clip-width)*var(--clips-total));\n  height: var(--clip-height);\n\tpadding-bottom: 20px;\n\tcursor: grab;\n}\n.clip {\n\tdisplay: block;\n\twidth: var(--clip-width);\n\theight: var(--clip-height);\n\tmargin-top: 20px;\n\ttext-align: center;\n\tpadding: 24px;\n\tlist-style: none;\n  user-select: none;\n}\n.clip-image {\n\twidth: 100%;\n\tmargin-top: 10px;\n}\n.clip-inner {\n\twidth: 100%;\n\theight: 100%;\n  margin: auto;\n  background-color: beige;\n  border: 1px solid #000;\n  box-shadow: 2px 2px 5px #000;\n\tborder-radius: 8px;\n  position: relative;\n  overflow: hidden;\n}\n.clip-title {\n\tposition: absolute;\n\ttop: 10px;\n\tleft: 0;\n\twidth: 100%;\n\tbackground-color: #222;\n\tz-index: 2;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n  line-height: 1.5rem;\n  transition: all 0.5s;\n\topacity: 0.8;\n}\n.clip-link {\n\tcolor: #fff;\n\tfont-size: 16px;\n  font-weight: bold;\n  transition: all 0.5s;\n}\n.clip-title:hover > .clip-link {\n  color: black;\n}\n.clip-title:hover {\n  background-color:#FFBF1D;\n  cursor: pointer;\n}\n.clip-info {\n  width: 80%;\n  margin: 10px auto;\n}\n.clip-wrapper {\n\tmargin: 5px auto;\n}\n.clip-channel-title {\n\tfont-weight: bold;\n\tmargin-bottom: 10px;\n  position: relative;\n  padding: 0 20px;\n}\n.clip-channel-title::before{\n\tcontent: '\\e800';\n}\n.clip-icon::before{\n\tposition: absolute;\n\tfont-family: 'fontello';\n\tcolor: #7a7a7a;\n\twidth: 1rem;\n\tz-index: 2;\n\ttop: 0;\n\tleft: 0;\n}\n.clip-date {\n  font-weight: bold;\n\tmargin-bottom: 10px;\n\tposition: relative;\n}\n.clip-date::before {\n\t content: '\\e801';\n}\n.clip-views {\n\tfont-weight: bold;\n\tposition: relative;\n}\n.clip-views::before {\n\tcontent: '\\e802';\n}\n.clip-desc {\n\ttext-align: left;\n  margin-top: 20px;\n\tfont-size: 0.75rem;\n\tcolor: #333333;\n\toverflow: hidden;\n}\n\n\n/*NAVIGATOR DOTS*/\n.navigator {\n\tdisplay: flex;\n\tjustify-content: center;\n  margin-top: 60px;\n  margin-bottom: 20px;\n  position: relative;\n}\n.dot {\n\tborder-radius: 50%;\n  border: 2px solid grey;\n\twidth: 25px;\n\theight: 25px;\n\tmargin-right: 10px;\n  margin-left: 10px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.dot:hover {\n  background-color: #ff0000;\n\tcursor: pointer;\n}\n.dot-prev {\n\tdisplay: none;\n}\n.dot-before-prev {\n\tdisplay: none;\n}\n.border {\n\tborder: 2px solid red;\n}\n.-active {\n\tbackground-color: red;\n\tcolor: #fff;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 0.75rem;\n\tfont-family: sans-serif;\n\tborder: none;\n}\n.dot-active{\n  display: block;\n}\n.tooltip {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  background-color: #0C7EFF;\n  width: 30px;\n  border-radius: 4px;\n  left: -3px;\n  height: 30px;\n  top: -46px;\n  z-index: 2;\n  box-shadow: 0px 3px 5px #0C7EFF;\n}\n/* ERROR */\n.wrapper-error {\n  position: absolute;\n  width: 400px;\n  height: 80px;\n  border-radius: 5px;\n  background: linear-gradient(90deg, #EECFBA, #C5DDE8);\n  box-shadow: 2px 2px 5px #333;\n\ttop: calc(50% - 40px);\n  left: calc(50% - 200px);\n}\n.round {\n  display: inline-block;\n  position: relative;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: red;\n}\n.round::before,\n.round::after {\n  content: '';\n  display: block;\n  position: absolute;\n  background-color: #fff;\n  height: 4px;\n  width: 20px;\n  top: 14px;\n  left: 6px;\n  z-index: 2;\n}\n.round::before{\n  transform: rotate(45deg);\n}\n.round::after {\n  transform: rotate(135deg);\n}\n.error {\n  font-size: 1.25rem;\n  color: #333;\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-text {\n  margin-left: 20px;\n}\n.error-title {\n  text-align: center;\n  margin: 0;\n  margin-bottom: 10px;\n}\n.restart {\n  cursor: pointer;\n}\n.restart:hover {\n  color: #EF8900;\n}\n/* SPINER */\n\n.wrapper-spiner {\n\tposition: absolute;\n\ttop: calc(50% - 62.5px);\n\tleft: calc(50% - 75px);\n\twidth: 125px;\n  height: 150px;\n  z-index: 2;\n\ttext-align: center;\n}\n.spiner-hidden {\n\tdisplay: none;\n}\n.loading {\n\tfont-size: 1.25rem;\n\ttext-transform: capitalize;\n\tcolor: #7a7a7a;\n\tmargin-top: -10px;\n}\n#floatingCirclesG{\n\tposition: relative;\n\tmargin: 0;\n\tpadding: 0;\n\twidth:125px;\n\theight:125px;\n\tmargin:auto;\n\ttransform:scale(0.6);\n\t\t-o-transform:scale(0.6);\n\t\t-ms-transform:scale(0.6);\n\t\t-webkit-transform:scale(0.6);\n\t\t-moz-transform:scale(0.6);\n}\n\n.f_circleG{\n\tposition:absolute;\n\tbackground-color:rgb(255,255,255);\n\theight:22px;\n\twidth:22px;\n\tborder-radius:12px;\n\t\t-o-border-radius:12px;\n\t\t-ms-border-radius:12px;\n\t\t-webkit-border-radius:12px;\n\t\t-moz-border-radius:12px;\n\tanimation-name:f_fadeG;\n\t\t-o-animation-name:f_fadeG;\n\t\t-ms-animation-name:f_fadeG;\n\t\t-webkit-animation-name:f_fadeG;\n\t\t-moz-animation-name:f_fadeG;\n\tanimation-duration:1.2s;\n\t\t-o-animation-duration:1.2s;\n\t\t-ms-animation-duration:1.2s;\n\t\t-webkit-animation-duration:1.2s;\n\t\t-moz-animation-duration:1.2s;\n\tanimation-iteration-count:infinite;\n\t\t-o-animation-iteration-count:infinite;\n\t\t-ms-animation-iteration-count:infinite;\n\t\t-webkit-animation-iteration-count:infinite;\n\t\t-moz-animation-iteration-count:infinite;\n\tanimation-direction:normal;\n\t\t-o-animation-direction:normal;\n\t\t-ms-animation-direction:normal;\n\t\t-webkit-animation-direction:normal;\n\t\t-moz-animation-direction:normal;\n}\n\n#frotateG_01{\n\tleft:0;\n\ttop:51px;\n\tanimation-delay:0.45s;\n\t\t-o-animation-delay:0.45s;\n\t\t-ms-animation-delay:0.45s;\n\t\t-webkit-animation-delay:0.45s;\n\t\t-moz-animation-delay:0.45s;\n}\n\n#frotateG_02{\n\tleft:15px;\n\ttop:15px;\n\tanimation-delay:0.6s;\n\t\t-o-animation-delay:0.6s;\n\t\t-ms-animation-delay:0.6s;\n\t\t-webkit-animation-delay:0.6s;\n\t\t-moz-animation-delay:0.6s;\n}\n\n#frotateG_03{\n\tleft:51px;\n\ttop:0;\n\tanimation-delay:0.75s;\n\t\t-o-animation-delay:0.75s;\n\t\t-ms-animation-delay:0.75s;\n\t\t-webkit-animation-delay:0.75s;\n\t\t-moz-animation-delay:0.75s;\n}\n\n#frotateG_04{\n\tright:15px;\n\ttop:15px;\n\tanimation-delay:0.9s;\n\t\t-o-animation-delay:0.9s;\n\t\t-ms-animation-delay:0.9s;\n\t\t-webkit-animation-delay:0.9s;\n\t\t-moz-animation-delay:0.9s;\n}\n\n#frotateG_05{\n\tright:0;\n\ttop:51px;\n\tanimation-delay:1.05s;\n\t\t-o-animation-delay:1.05s;\n\t\t-ms-animation-delay:1.05s;\n\t\t-webkit-animation-delay:1.05s;\n\t\t-moz-animation-delay:1.05s;\n}\n\n#frotateG_06{\n\tright:15px;\n\tbottom:15px;\n\tanimation-delay:1.2s;\n\t\t-o-animation-delay:1.2s;\n\t\t-ms-animation-delay:1.2s;\n\t\t-webkit-animation-delay:1.2s;\n\t\t-moz-animation-delay:1.2s;\n}\n\n#frotateG_07{\n\tleft:51px;\n\tbottom:0;\n\tanimation-delay:1.35s;\n\t\t-o-animation-delay:1.35s;\n\t\t-ms-animation-delay:1.35s;\n\t\t-webkit-animation-delay:1.35s;\n\t\t-moz-animation-delay:1.35s;\n}\n\n#frotateG_08{\n\tleft:15px;\n\tbottom:15px;\n\tanimation-delay:1.5s;\n\t\t-o-animation-delay:1.5s;\n\t\t-ms-animation-delay:1.5s;\n\t\t-webkit-animation-delay:1.5s;\n\t\t-moz-animation-delay:1.5s;\n}\n\n\n\n@keyframes f_fadeG{\n\t0%{\n\t\tbackground-color:rgb(0,0,0);\n\t}\n\n\t100%{\n\t\tbackground-color:rgb(255,255,255);\n\t}\n}\n\n@-o-keyframes f_fadeG{\n\t0%{\n\t\tbackground-color:rgb(0,0,0);\n\t}\n\n\t100%{\n\t\tbackground-color:rgb(255,255,255);\n\t}\n}\n\n@-ms-keyframes f_fadeG{\n\t0%{\n\t\tbackground-color:rgb(0,0,0);\n\t}\n\n\t100%{\n\t\tbackground-color:rgb(255,255,255);\n\t}\n}\n\n@-webkit-keyframes f_fadeG{\n\t0%{\n\t\tbackground-color:rgb(0,0,0);\n\t}\n\n\t100%{\n\t\tbackground-color:rgb(255,255,255);\n\t}\n}\n\n@-moz-keyframes f_fadeG{\n\t0%{\n\t\tbackground-color:rgb(0,0,0);\n\t}\n\n\t100%{\n\t\tbackground-color:rgb(255,255,255);\n\t}\n}\n\n@media screen and (max-width: 1050px){\n  :root {\n    --clip-count: 3;\n  }\n  .search-label {\n    width: 70%;\n  }\n}\n@media screen and (max-width: 768px){\n  :root {\n    --clip-count: 2;\n  }\n  .search-label {\n    width: 90%;\n  }\n}\n@media screen and (max-width: 480px){\n  :root{\n    --clip-count: 1;\n  }\n  .wrapper-error {\n    width: 350px;\n  }\n}\n",""])},function(t,n,e){"use strict";e.r(n);class o{constructor(t){this.state=t}async getClips(){const t=await fetch(this.state),n=await t.json();return n.hasOwnProperty("error")?"Error":n}}e(2),e(11);var r=class{constructor(t){this.data=t}render(t){const n=document.querySelector(".main"),e=[];let o;if(document.querySelector(".clip-list")){const t=document.querySelector(".clip-list"),n=+getComputedStyle(t).getPropertyValue("--clip-total");t.style.setProperty("--clip-total",n+this.data.items.length),t.innerHTML+=this.data.items.map(t=>(e.push(t.id.videoId),o=t.snippet.channelTitle.length>15?`${t.snippet.channelTitle.slice(0,15)} ...`:t.snippet.channelTitle,`<li class="clip">\n                    <div class="clip-inner">\n                       <img class="clip-image" src=${t.snippet.thumbnails.medium.url} width=${t.snippet.thumbnails.medium.width}>\n                       <div class="clip-title">\n                          <a class="clip-link" target="_blank">${t.snippet.title}</a>\n                       </div>\n                       <div class="clip-info">\n                          <div class="clip-wrapper">\n                              <div class="clip-icon clip-channel-title">${o}</div>\n                              <div class="clip-icon clip-date">${t.snippet.publishedAt.slice(0,10)}</div>\n                              <div class="clip-icon clip-views"></div>\n                          </div>\n                          <div class="clip-desc">${t.snippet.description}</div>\n                       </div>\n                    </div>\n                 </li>`)).join("")}else{const t=document.createElement("ul");t.setAttribute("class","clip-list"),t.style.setProperty("--clip-total",this.data.items.length),t.innerHTML=this.data.items.map(t=>(e.push(t.id.videoId),o=t.snippet.channelTitle.length>15?`${t.snippet.channelTitle.slice(0,15)} ...`:t.snippet.channelTitle,`<li class="clip">\n                      <div class="clip-inner">\n                        <img class="clip-image" src=${t.snippet.thumbnails.medium.url}>\n                        <div class="clip-title">\n                            <a class="clip-link" target="_blank">${t.snippet.title}</a>\n                        </div>\n                        <div class="clip-info">\n                            <div class="clip-wrapper">\n                                <div class="clip-icon clip-channel-title">${o}</div>\n                                <div class="clip-icon clip-date">${t.snippet.publishedAt.slice(0,10)}</div>\n                                <div class="clip-icon clip-views"></div>\n                            </div>\n                            <div class="clip-desc">${t.snippet.description}</div>\n                        </div>\n                      </div>\n                  </li>`)).join(""),n.appendChild(t)}if(!document.querySelector(".navigator")){const t=document.createElement("div");t.setAttribute("class","navigator"),t.innerHTML='<div class="dot-before-prev dot"></div>\n                        <div class="dot-prev dot"></div>\n                        <div class="dot-current dot -active">1</div>\n                        <div class="dot-next dot"></div>',n.appendChild(t)}return fetch(`https://www.googleapis.com/youtube/v3/videos?${t}&id=${e.join(",")}&part=snippet,statistics`).then(t=>t.json()).then(t=>{const n=document.querySelectorAll(".clip-link"),e=document.querySelectorAll(".clip-views");let o=0;for(let r=getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--clip-total")-15;r<n.length;r+=1)n[r].setAttribute("href",`https://www.youtube.com/watch?v=${t.items[o].id}`),e[r].innerHTML=t.items[o].statistics.viewCount,o+=1;o=0}),document.querySelector(".navigator")}};const i=new class{constructor(){this.state={address:"https://www.googleapis.com/youtube/v3/",search:"search?",key:"key=AIzaSyCbUr_IN4S6BJTZwnJ7dEdI6kCFZNspe4A",type:"&type=video",id:"&id=",token:"&pageToken=",nextToken:"",part:"&part=snippet",chunk:"&maxResults=15",query:"&q="},this.pos=0,this.count=1,this.clips=[]}startPage(){const t=document.createElement("div"),n=document.createElement("meta"),e=document.querySelector("meta");n.setAttribute("name","viewport"),n.setAttribute("content","width=device-width, initial-scale=1"),t.setAttribute("class","wrapper"),t.innerHTML='<header class="header">\n                              <label class="magnifier search-label" for="search-input">\n                                <input class="search-input" id="search-input" type="text" placeholder="What do you want to find?">\n                                <button class="search-btn">Search</button>\n                              </label>\n                           </header>\n                           <main class="main"></main>',document.head.insertBefore(n,e),document.body.appendChild(t)}spiner(){const t=document.createElement("div");t.setAttribute("class","wrapper-spiner"),t.innerHTML='<div id="floatingCirclesG">\n                                          <div class="f_circleG" id=frotateG_01></div>\n                                          <div class="f_circleG" id=frotateG_02></div>\n                                          <div class="f_circleG" id=frotateG_03></div>\n                                          <div class="f_circleG" id=frotateG_04></div>\n                                          <div class="f_circleG" id=frotateG_05></div>\n                                          <div class="f_circleG" id=frotateG_06></div>\n                                          <div class="f_circleG" id=frotateG_07></div>\n                                          <div class="f_circleG" id=frotateG_08></div>\n                                     </div>\n                                     <div class="loading">Loading</div>',document.querySelector(".wrapper").appendChild(t)}clearSpiner(){const t=document.querySelector(".wrapper"),n=document.querySelector(".wrapper-spiner");t.removeChild(n)}error(){const t=document.createElement("div"),n=document.querySelector(".wrapper");return t.setAttribute("class","wrapper-error"),t.innerHTML='<div class="error">\n                          <span class="round"></span>\n                          <span class="error-text">Ooops... Something went wrong</span>\n                       </div>\n                       <h2 class="error-title"><span class="restart">Try again</span>',n.removeChild(document.querySelector(".wrapper-spiner")),n.appendChild(t),"Error"}clearError(){const t=document.querySelector(".wrapper"),n=document.querySelector(".wrapper-error");t.removeChild(n)}tooltips(){const t=document.createElement("div");return t.setAttribute("class","tooltip"),t.innerHTML=this.count,t}async start(t){const{address:n,search:e,key:i,type:a,token:s,nextToken:c,part:l,chunk:d,query:p}=this.state;let u;u=document.querySelector(".clip-list")&&this.count%3==0&&-1===this.clips.indexOf(this.count)?`${n}${e}${i}${a}${l}${s}${c}${d}${p}${t}`:`${n}${e}${i}${a}${l}${d}${p}${t}`;const m=new o(u),f=await m.getClips();return"Error"===f?this.error():(new r(f).render(this.state.key),this.state.nextToken=f.nextPageToken,new Promise(t=>{if(document.querySelector(".navigator"))return t(document.querySelector(".navigator"))}))}};function a(t){const n=document.querySelector(".search-input");if(13===t.keyCode&&0!==n.value.length||t.target.classList.contains("search-btn")&&0!==n.value.length){const t=n.value;document.querySelector(".wrapper-error")&&i.clearError(),document.querySelector(".clip-list")&&(document.querySelector(".main").removeChild(document.querySelector(".clip-list")),document.querySelector(".main").removeChild(document.querySelector(".navigator")),i.count=1,i.pos=0,i.clips=[]),i.spiner(),setTimeout(()=>{i.start(t).then(t=>{if("Error"===t){document.querySelector(".restart").addEventListener("click",()=>{window.location.reload()})}else{i.clearSpiner();const n=document.querySelector(".clip-list"),e=document.querySelector(".dot-current"),o=document.querySelector(".dot-before-prev"),r=document.querySelector(".dot-prev"),a=document.querySelector(".dot-next");let s,c,l,d=!1,p=0;n.style.transition="transform 0.5s",t.addEventListener("click",t=>{if(t.target.classList.contains("dot-next")){i.count+=1,i.pos+=1;const a=i.tooltips();t.target.appendChild(a),setTimeout(()=>{t.target.removeChild(a),t.target.classList.add("border"),2===i.count&&r.classList.add("dot-active"),3===i.count&&o.classList.add("dot-active"),r.classList.remove("border"),o.classList.remove("border"),n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`,e.innerHTML=i.count,i.count%3==0&&-1===i.clips.indexOf(i.count)&&(i.start(document.querySelector(".search-input").value),i.clips.push(i.count))},200)}else if(t.target.classList.contains("dot-prev")){i.pos-=1,i.count-=1;const r=i.tooltips();t.target.appendChild(r),setTimeout(()=>{t.target.removeChild(r),t.target.classList.add("border"),2===i.count&&(o.classList.remove("dot-active"),t.target.classList.add("border")),1===i.count&&(t.target.classList.remove("dot-active"),t.target.classList.remove("border")),i.count>2&&t.target.classList.add("border"),a.classList.remove("border"),o.classList.remove("border"),n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`,e.innerHTML=i.count},200)}else if(t.target.classList.contains("dot-before-prev")){i.pos-=2,i.count-=2;const s=i.tooltips();t.target.appendChild(s),setTimeout(()=>{t.target.removeChild(s),t.target.classList.add("border"),2===i.count&&(t.target.classList.remove("dot-active"),t.target.classList.remove("border"),r.classList.add("border")),1===i.count&&(t.target.classList.remove("dot-active"),t.target.classList.remove("border"),r.classList.remove("dot-active")),i.count>2&&t.target.classList.add("border"),a.classList.remove("border"),o.classList.remove("border"),n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`,e.innerHTML=i.count},200)}n.style.transition="transform 0.5s"}),document.addEventListener("mousedown",t=>{d=!0,c=t.pageX,n.style.transition=""}),document.addEventListener("mouseleave",()=>{d=!1}),document.addEventListener("mousemove",t=>{d&&(t.preventDefault(),l=t.pageX,p=(s=l-c)+-document.documentElement.clientWidth*(i.count-1),n.style.transform=`translateX(${p}px)`)}),document.addEventListener("mouseup",()=>{d=!1,p>0?n.style.transform="translateX(0px)":c-l>130?(i.count+=1,i.pos+=1,n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`,2===i.count&&r.classList.add("dot-active"),3===i.count&&o.classList.add("dot-active"),r.classList.contains("border")&&r.classList.remove("border"),a.classList.add("border"),e.innerHTML=i.count):l-c>130&&i.count>0?(i.count-=1,i.pos-=1,n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`,2===i.count&&(o.classList.remove("dot-active"),r.classList.add("border")),1===i.count&&(r.classList.remove("dot-active"),r.classList.remove("border")),i.count>2&&r.classList.add("border"),a.classList.remove("border"),e.innerHTML=i.count):n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`,i.count%3==0&&-1===i.clips.indexOf(i.count)&&(i.start(document.querySelector(".search-input").value),i.clips.push(i.count)),c=void 0,l=void 0,n.style.transition="transform 0.5s"}),n.addEventListener("touchstart",t=>{c=t.touches[0].clientX}),n.addEventListener("touchmove",t=>{n.style.transition="",l=t.touches[0].clientX,p=(s=l-c)+-document.documentElement.clientWidth*(i.count-1),n.style.transform=`translateX('${p}px)`}),n.addEventListener("touchend",()=>{p>0?n.style.transform="translateX(0px)":c-l>30?(i.count+=1,i.pos+=1,n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`,2===i.count&&r.classList.add("dot-active"),3===i.count&&o.classList.add("dot-active"),r.classList.contains("border")&&r.classList.remove("border"),a.classList.add("border"),e.innerHTML=i.count):l-c>30&&i.count>0?(i.count-=1,i.pos-=1,n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`,2===i.count&&(o.classList.remove("dot-active"),r.classList.add("border")),1===i.count&&(r.classList.remove("dot-active"),r.classList.remove("border")),i.count>2&&r.classList.add("border"),a.classList.remove("border"),e.innerHTML=i.count):n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`,c=void 0,l=void 0,n.style.transition="transform 0.5s"}),window.addEventListener("resize",()=>{n.style.transform=`translateX(${-document.documentElement.clientWidth*i.pos}px)`})}})},2e3)}}i.startPage(),document.addEventListener("keydown",a),document.querySelector(".search-btn").addEventListener("click",a)}]);
//# sourceMappingURL=app.bundle.js.map