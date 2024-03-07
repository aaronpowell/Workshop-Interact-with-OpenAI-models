(()=>{"use strict";var e,t,r,a,o,c={},n={};function b(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,b),r.loaded=!0,r.exports}b.m=c,b.c=n,e=[],b.O=(t,r,a,o)=>{if(!r){var c=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var n=!0,f=0;f<r.length;f++)(!1&o||c>=o)&&Object.keys(b.O).every((e=>b.O[e](r[f])))?r.splice(f--,1):(n=!1,o<c&&(c=o));if(n){e.splice(i--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);b.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,b.d(o,c),o},b.d=(e,t)=>{for(var r in t)b.o(t,r)&&!b.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((t,r)=>(b.f[r](e,t),t)),[])),b.u=e=>"assets/js/"+({70:"c76d4815",96:"7cc2d26e",188:"733753c7",204:"1f391b9e",208:"0b5d7157",292:"bea27cdc",300:"3a6acbce",304:"5e95c892",352:"9f03bfb2",450:"1b835106",500:"a7bd4aaa",512:"89c20c38",536:"9c63cb12",628:"ebfa0115",652:"393be207",666:"a94703ab",672:"b4ad58b4",696:"935f2afb",752:"17896441",800:"3ba4b5d2",804:"e9c1640e",828:"140b5340",868:"90c8b38a"}[e]||e)+"."+{70:"31457410",96:"19cf547e",188:"f3b92c8d",204:"fb5fdbc0",208:"aeb34e1f",292:"e059dd52",300:"31d6b758",304:"f07c8225",352:"33c28370",450:"c998d9bc",500:"f0d1b12d",512:"733aa83b",536:"20fc5c11",628:"e355cc8f",652:"6dc9fbe3",666:"5236f594",672:"a622abca",696:"876253b7",752:"09ffc309",768:"332bc8a6",800:"e366c237",804:"3cd3f989",828:"c4c31568",868:"f6ea29bc",956:"1e3826d7"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="docs:",b.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var n,f;if(void 0!==r)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var u=d[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(f=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,b.nc&&n.setAttribute("nonce",b.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),f&&document.head.appendChild(n)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/Workshop-Interact-with-OpenAI-models/",b.gca=function(e){return e={17896441:"752",c76d4815:"70","7cc2d26e":"96","733753c7":"188","1f391b9e":"204","0b5d7157":"208",bea27cdc:"292","3a6acbce":"300","5e95c892":"304","9f03bfb2":"352","1b835106":"450",a7bd4aaa:"500","89c20c38":"512","9c63cb12":"536",ebfa0115:"628","393be207":"652",a94703ab:"666",b4ad58b4:"672","935f2afb":"696","3ba4b5d2":"800",e9c1640e:"804","140b5340":"828","90c8b38a":"868"}[e]||e,b.p+b.u(e)},(()=>{var e={296:0,176:0};b.f.j=(t,r)=>{var a=b.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(17|29)6$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=b.p+b.u(t),n=new Error;b.l(c,(r=>{if(b.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+t,t)}},b.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],n=r[1],f=r[2],d=0;if(c.some((t=>0!==e[t]))){for(a in n)b.o(n,a)&&(b.m[a]=n[a]);if(f)var i=f(b)}for(t&&t(r);d<c.length;d++)o=c[d],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return b.O(i)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();