(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99476],{45014:function(t,e,n){t.exports=n(68143)},8512:function(t,e,n){t.exports=function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach(function(e){return delete t[e]})};var e=function(t){var e=!!document.importNode,n=new DOMParser().parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n};function r(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self&&self;var o=r(function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){return n&&!0===n.clone&&t(e)?r(Array.isArray(e)?[]:{},e,n):e}function n(n,o,i){var u=n.slice();return o.forEach(function(o,a){void 0===u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))}),u}function r(o,i,u){var a,c=Array.isArray(i),s=(u||{arrayMerge:n}).arrayMerge||n;return c?Array.isArray(o)?s(o,i,u):e(i,u):(a={},t(o)&&Object.keys(o).forEach(function(t){a[t]=e(o[t],u)}),Object.keys(i).forEach(function(n){t(i[n])&&o[n]?a[n]=r(o[n],i[n],u):a[n]=e(i[n],u)}),a)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw Error("first argument should be an array with at least two elements");return t.reduce(function(t,n){return r(t,n,e)})},r}()}),i=r(function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default}),u=i.svg,a=i.xlink,c={};c[u.name]=u.uri,c[a.name]=a.uri;var s=function(t,e){var n;return void 0===t&&(t=""),"<svg "+Object.keys(n=o(c,e||{})).map(function(t){var e=n[t].toString().replace(/"/g,"&quot;");return t+'="'+e+'"'}).join(" ")+">"+t+"</svg>"};return function(t){function n(){t.apply(this,arguments)}t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},n.createFromExistingNode=function(t){return new n({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},n.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},n.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},n.prototype.render=function(){return e(s(this.stringify())).childNodes[0]},n.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(n.prototype,r),n}(t)}()},52106:function(t,e,n){t.exports=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self&&self;var e,r,o=t(function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){return n&&!0===n.clone&&t(e)?r(Array.isArray(e)?[]:{},e,n):e}function n(n,o,i){var u=n.slice();return o.forEach(function(o,a){void 0===u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))}),u}function r(o,i,u){var a,c=Array.isArray(i),s=(u||{arrayMerge:n}).arrayMerge||n;return c?Array.isArray(o)?s(o,i,u):e(i,u):(a={},t(o)&&Object.keys(o).forEach(function(t){a[t]=e(o[t],u)}),Object.keys(i).forEach(function(n){t(i[n])&&o[n]?a[n]=r(o[n],i[n],u):a[n]=e(i[n],u)}),a)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw Error("first argument should be an array with at least two elements");return t.reduce(function(t,n){return r(t,n,e)})},r}()}),i=t(function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default}),u=i.svg,a=i.xlink,c={};c[u.name]=u.uri,c[a.name]=a.uri;var s=function(t,e){var n;return void 0===t&&(t=""),"<svg "+Object.keys(n=o(c,e||{})).map(function(t){var e=n[t].toString().replace(/"/g,"&quot;");return t+'="'+e+'"'}).join(" ")+">"+t+"</svg>"},f=i.svg,l=i.xlink,d={attrs:((e={style:"position: absolute; width: 0; height: 0","aria-hidden":"true"})[f.name]=f.uri,e[l.name]=l.uri,e)},p=function(t){this.config=o(d,t||{}),this.symbols=[]};p.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},p.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},p.prototype.find=function(t){return this.symbols.filter(function(e){return e.id===t})[0]||null},p.prototype.has=function(t){return null!==this.find(t)},p.prototype.stringify=function(){var t=this.config.attrs;return s(this.symbols.map(function(t){return t.stringify()}).join(""),t)},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){this.symbols.forEach(function(t){return t.destroy()})};var h=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};h.prototype.stringify=function(){return this.content},h.prototype.toString=function(){return this.stringify()},h.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach(function(e){return delete t[e]})};var y=function(t){var e=!!document.importNode,n=new DOMParser().parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},v=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){return y(s(this.stringify())).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(h),g={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},m=function(t){return Array.prototype.slice.call(t,0)},b={isChrome:function(){return/chrome/i.test(navigator.userAgent)},isFirefox:function(){return/firefox/i.test(navigator.userAgent)},isIE:function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},isEdge:function(){return/edge/i.test(navigator.userAgent)}},O=function(t,e){var n=document.createEvent("CustomEvent");n.initCustomEvent(t,!1,!1,e),window.dispatchEvent(n)},E=function(t){var e=[];return m(t.querySelectorAll("style")).forEach(function(t){t.textContent+="",e.push(t)}),e},_=function(t){return(t||window.location.href).split("#")[0]},w=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",function(e,n,r){O(t,{oldUrl:r,newUrl:n})})}])},x=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern, mask, clipPath"),m(t.querySelectorAll("symbol")).forEach(function(t){m(t.querySelectorAll(e)).forEach(function(e){t.parentNode.insertBefore(e,t)})}),t},j=i.xlink.uri,M="xlink:href",C=/[{}|\\\^\[\]`"<>]/g;function A(t){return t.replace(C,function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()})}var S=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],P=S.map(function(t){return"["+t+"]"}).join(","),T=function(t,e,n,r){var o,i,u=A(n),a=A(r);(o=t.querySelectorAll(P),i=function(t){var e=t.localName,n=t.value;return-1!==S.indexOf(e)&&-1!==n.indexOf("url("+u)},m(o).reduce(function(t,e){if(!e.attributes)return t;var n=m(e.attributes),r=i?n.filter(i):n;return t.concat(r)},[])).forEach(function(t){return t.value=t.value.replace(RegExp(u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),a)}),m(e).forEach(function(t){var e=t.getAttribute(M);if(e&&0===e.indexOf(u)){var n=e.replace(u,a);t.setAttributeNS(j,M,n)}})},k={MOUNT:"mount",SYMBOL_MOUNT:"symbol_mount"},N=function(t){function e(e){var n,r=this;void 0===e&&(e={}),t.call(this,o(g,e));var i=(n=n||Object.create(null),{on:function(t,e){(n[t]||(n[t]=[])).push(e)},off:function(t,e){n[t]&&n[t].splice(n[t].indexOf(e)>>>0,1)},emit:function(t,e){(n[t]||[]).map(function(t){t(e)}),(n["*"]||[]).map(function(n){n(t,e)})}});this._emitter=i,this.node=null;var u=this.config;if(u.autoConfigure&&this._autoConfigure(e),u.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");i.on(k.MOUNT,function(){return r.updateUrls("#",a)})}var c=this._handleLocationChange.bind(this);this._handleLocationChange=c,u.listenLocationChangeEvent&&window.addEventListener(u.locationChangeEvent,c),u.locationChangeAngularEmitter&&w(u.locationChangeEvent),i.on(k.MOUNT,function(t){u.moveGradientsOutsideSymbol&&x(t)}),i.on(k.SYMBOL_MOUNT,function(t){u.moveGradientsOutsideSymbol&&x(t.parentNode),(b.isIE()||b.isEdge())&&E(t)})}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(t){var e=this.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter=void 0!==window.angular),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=b.isFirefox())},e.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,r=e.newUrl;this.updateUrls(n,r)},e.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(k.SYMBOL_MOUNT,e.node)),n},e.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var r="string"==typeof t?document.querySelector(t):t;return n.node=r,this.symbols.forEach(function(t){t.mount(n.node),e._emitter.emit(k.SYMBOL_MOUNT,t.node)}),m(r.querySelectorAll("symbol")).forEach(function(t){var e=v.createFromExistingNode(t);e.node=t,n.add(e)}),this._emitter.emit(k.MOUNT,r),r},e.prototype.destroy=function(){var t=this.config,e=this.symbols,n=this._emitter;e.forEach(function(t){return t.destroy()}),n.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(t,e){if(void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1),this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,r=this.render();return this.node=r,e&&n.childNodes[0]?n.insertBefore(r,n.childNodes[0]):n.appendChild(r),this._emitter.emit(k.MOUNT,r),r},e.prototype.render=function(){return y(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return T(this.node,n,_(t)+"#",_(e)+"#"),!0},Object.defineProperties(e.prototype,n),e}(p),L=t(function(t){var e,n,r,o,i,u;/*!
* domready (c) Dustin Diaz 2014 - License MIT
*/t.exports=(n=[],o=(r=document).documentElement.doScroll,i="DOMContentLoaded",(u=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState))||r.addEventListener(i,e=function(){for(r.removeEventListener(i,e),u=1;e=n.shift();)e()}),function(t){u?setTimeout(t,0):n.push(t)})}),U="__SVG_SPRITE_NODE__",R="__SVG_SPRITE__";window[R]?r=window[R]:(r=new N({attrs:{id:U,"aria-hidden":"true"}}),window[R]=r);var B=function(){var t=document.getElementById(U);t?r.attach(t):r.mount(document.body,!0)};return document.body?B():L(B),r}()},22950:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return f},isThenable:function(){return l}});var n,r,o="refresh",i="navigate",u="restore",a="server-patch",c="prefetch",s="fast-refresh",f="server-action";function l(t){return t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},26884:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getDomainLocale",{enumerable:!0,get:function(){return o}});var r=n(71652);function o(t,e,o,i){var u=n(35008).normalizeLocalePath,a=n(11922).detectDomainLocale,c=e||u(t,o).detectedLocale,s=a(i,void 0,c);if(s){var f="http"+(s.http?"":"s")+"://",l=c===s.defaultLocale?"":"/"+c;return""+f+s.domain+(0,r.normalizePathTrailingSlash)(""+l+t)}return!1}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},68143:function(t,e,n){"use strict";var r=n(79334),o=n(61626),i=n(57412),u=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return M}});var s=n(47468),f=n(48282),l=s._(n(18529)),d=n(61981),p=n(68573),h=n(11582),y=n(13279),v=n(49743),g=n(11724),m=n(50338),b=n(94725),O=n(26884),E=n(26066),_=n(22950),w=new Set;function x(t,e,n,r,o,i){if(i||(0,p.isLocalURL)(e)){if(!r.bypassPrefetchedCheck){var u=e+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in t?t.locale:void 0);if(w.has(u))return;w.add(u)}Promise.resolve(i?t.prefetch(e,o):t.prefetch(e,n,r)).catch(function(t){})}}function j(t){return"string"==typeof t?t:(0,h.formatUrl)(t)}var M=l.default.forwardRef(function(t,e){var n,r,a=t.href,s=t.as,h=t.children,w=t.prefetch,M=void 0===w?null:w,C=t.passHref,A=t.replace,S=t.shallow,P=t.scroll,T=t.locale,k=t.onClick,N=t.onMouseEnter,L=t.onTouchStart,U=t.legacyBehavior,R=void 0!==U&&U,B=i(t,u);n=h,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,f.jsx)("a",{children:n}));var I=l.default.useContext(g.RouterContext),D=l.default.useContext(m.AppRouterContext),q=null!=I?I:D,F=!I,G=!1!==M,H=null===M?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,K=l.default.useMemo(function(){if(!I){var t=j(a);return{href:t,as:s?j(s):t}}var e=o((0,d.resolveHref)(I,a,!0),2),n=e[0],r=e[1];return{href:n,as:s?(0,d.resolveHref)(I,s):r||n}},[I,a,s]),z=K.href,V=K.as,Y=l.default.useRef(z),$=l.default.useRef(V);R&&(r=l.default.Children.only(n));var W=R?r&&"object"==typeof r&&r.ref:e,J=o((0,b.useIntersection)({rootMargin:"200px"}),3),Q=J[0],X=J[1],Z=J[2],tt=l.default.useCallback(function(t){($.current!==V||Y.current!==z)&&(Z(),$.current=V,Y.current=z),Q(t),W&&("function"==typeof W?W(t):"object"==typeof W&&(W.current=t))},[V,W,z,Z,Q]);l.default.useEffect(function(){q&&X&&G&&x(q,z,V,{locale:T},{kind:H},F)},[V,z,X,T,G,null==I?void 0:I.locale,q,F,H]);var te={ref:tt,onClick:function(t){R||"function"!=typeof k||k(t),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),q&&!t.defaultPrevented&&function(t,e,n,r,o,i,u,a,c){if(!("A"===t.currentTarget.nodeName.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which||!c&&!(0,p.isLocalURL)(n)))){t.preventDefault();var s,f=function(){var t=null==u||u;"beforePopState"in e?e[o?"replace":"push"](n,r,{shallow:i,locale:a,scroll:t}):e[o?"replace":"push"](r||n,{scroll:t})};c?l.default.startTransition(f):f()}}(t,q,z,V,A,S,P,T,F)},onMouseEnter:function(t){R||"function"!=typeof N||N(t),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),q&&(G||!F)&&x(q,z,V,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:H},F)},onTouchStart:function(t){R||"function"!=typeof L||L(t),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(t),q&&(G||!F)&&x(q,z,V,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:H},F)}};if((0,y.isAbsoluteUrl)(V))te.href=V;else if(!R||C||"a"===r.type&&!("href"in r.props)){var tn=void 0!==T?T:null==I?void 0:I.locale,tr=(null==I?void 0:I.isLocaleDomain)&&(0,O.getDomainLocale)(V,tn,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);te.href=tr||(0,E.addBasePath)((0,v.addLocale)(V,tn,null==I?void 0:I.defaultLocale))}return R?l.default.cloneElement(r,te):(0,f.jsx)("a",c(c(c({},B),te),{},{children:n}))});("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},35008:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"normalizeLocalePath",{enumerable:!0,get:function(){return r}});var r=function(t,e){return n(41796).normalizeLocalePath(t,e)};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},94725:function(t,e,n){"use strict";var r=n(61626);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIntersection",{enumerable:!0,get:function(){return s}});var o=n(18529),i=n(44387),u="function"==typeof IntersectionObserver,a=new Map,c=[];function s(t){var e=t.rootRef,n=t.rootMargin,s=t.disabled||!u,f=r((0,o.useState)(!1),2),l=f[0],d=f[1],p=(0,o.useRef)(null),h=(0,o.useCallback)(function(t){p.current=t},[]);return(0,o.useEffect)(function(){if(u){if(!s&&!l){var t,r,o,f,h=p.current;if(h&&h.tagName)return r=(t=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},r=c.find(function(t){return t.root===n.root&&t.margin===n.margin});if(r&&(e=a.get(r)))return e;var o=new Map;return e={id:n,observer:new IntersectionObserver(function(t){t.forEach(function(t){var e=o.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)})},t),elements:o},c.push(n),a.set(n,e),e}({root:null==e?void 0:e.current,rootMargin:n})).id,o=t.observer,(f=t.elements).set(h,function(t){return t&&d(t)}),o.observe(h),function(){if(f.delete(h),o.unobserve(h),0===f.size){o.disconnect(),a.delete(r);var t=c.findIndex(function(t){return t.root===r.root&&t.margin===r.margin});t>-1&&c.splice(t,1)}}}}else if(!l){var y=(0,i.requestIdleCallback)(function(){return d(!0)});return function(){return(0,i.cancelIdleCallback)(y)}}},[s,n,e,l,p.current]),[h,l,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)}}]);