(()=>{"use strict";var e,t,r,n,o,a,i={294:(e,t,r)=>{r.e(881).then(r.t.bind(r,881,23)).then((e=>{const t=document.createElement("div");t.appendChild(e.default()),document.body.appendChild(t),document.body.innerHTML+=(e=>{let t="<ul>";for(let r=0;r<e;r++)t+="<li>item "+r+"</li>";return t+="</ul>",t})(5)}))},796:(e,t,r)=>{var n=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof nav)return e();r.l("http://localhost:3003/remoteEntry.js",(r=>{if("undefined"!=typeof nav)return e();var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,t(n)}),"nav")})).then((()=>nav))}},u={};function l(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return i[e](r,r.exports,l),r.exports}l.m=i,l.c=u,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);l.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,l.d(o,a),o},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="home:",l.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var i,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+o){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",n+o),i.src=e),r[e]=[t];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={881:[881]},a={881:["default","./Header",796]},l.f.remotes=(e,t)=>{l.o(o,e)&&o[e].forEach((e=>{var r=l.R;r||(r=[]);var n=a[e];if(!(r.indexOf(n)>=0)){if(r.push(n),n.p)return t.push(n.p);var o=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l.m[e]=()=>{throw t},n.p=0},i=(e,r,a,i,u,l)=>{try{var s=e(r,a);if(!s||!s.then)return u(s,i,l);var c=s.then((e=>u(e,i)),o);if(!l)return c;t.push(n.p=c)}catch(e){o(e)}},u=(e,t,o)=>i(t.get,n[1],r,0,s,o),s=t=>{n.p=1,l.m[e]=e=>{e.exports=t()}};i(l,n[2],0,0,((e,t,r)=>e?i(l.I,n[0],0,e,u,r):o()),1)}}))},(()=>{l.S={};var e={},t={};l.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];l.o(l.S,r)||(l.S[r]={}),l.S[r];var a=[];return"default"===r&&(e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(t);var t};try{var o=l(796);if(!o)return;var i=e=>e&&e.init&&e.init(l.S[r],n);if(o.then)return a.push(o.then(i,t));var u=i(o);u&&u.then&&a.push(u.catch(t))}catch(e){t(e)}})(),a.length?e[r]=Promise.all(a).then((()=>e[r]=1)):e[r]=1}}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(179==t){var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=l.p+l.u(t),i=new Error;l.l(a,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,r)=>{var n,o,[a,i,u]=r,s=0;if(a.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);u&&u(l)}for(t&&t(r);s<a.length;s++)o=a[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkhome=self.webpackChunkhome||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),l(294)})();