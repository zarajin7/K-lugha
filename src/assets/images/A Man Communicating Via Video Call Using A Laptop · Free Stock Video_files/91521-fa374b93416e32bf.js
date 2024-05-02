"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91521],{63731:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}},18502:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}},17632:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(18502),a=r(75906),o=r(63731);function i(e,t){return(0,o.Z)(2,arguments),new Date((0,a.Z)(e).getTime()+(0,n.Z)(t))}},53435:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(18502),a=r(17632),o=r(63731);function i(e,t){(0,o.Z)(2,arguments);var r=(0,n.Z)(t);return(0,a.Z)(e,6e4*r)}},40060:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(75906),a=r(63731);function o(e){return(0,a.Z)(1,arguments),(0,n.Z)(e).getFullYear()}},75906:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(68233),a=r(63731);function o(e){(0,a.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,n.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},7075:function(e){e.exports=a,e.exports.isMobile=a,e.exports.default=a;let t=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,r=/CrOS/,n=/android|ipad|playbook|silk/i;function a(e){e||(e={});let a=e.ua;if(a||"undefined"==typeof navigator||(a=navigator.userAgent),a&&a.headers&&"string"==typeof a.headers["user-agent"]&&(a=a.headers["user-agent"]),"string"!=typeof a)return!1;let o=t.test(a)&&!r.test(a)||!!e.tablet&&n.test(a);return!o&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==a.indexOf("Macintosh")&&-1!==a.indexOf("Safari")&&(o=!0),o}},46162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(18529),a=r(52810),o=a.jU?n.useLayoutEffect:n.useEffect,i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},l=a.jU&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],a=(0,n.useState)(i),l=a[0],u=a[1],c=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;u({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return o(function(){if(t)return c.observe(t),function(){c.disconnect()}},[t]),[r,l]}:function(){return[a.ZT,i]}},94585:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(18529);function a(e){var t=(0,n.useRef)();return(0,n.useEffect)(function(){t.current=e}),t.current}},12771:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(18529),a=({condition:e,fallback:t,children:r,...a})=>e?n.createElement(n.Suspense,{fallback:t,...a},r):n.createElement(n.Fragment,null,t),o=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{"undefined"!=typeof window&&t(!0)},[]),e},i=(e,t)=>{let[r,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if("function"==typeof IntersectionObserver){let r=new IntersectionObserver(([e])=>{a(e.isIntersecting)},t);return e.current&&r.observe(e.current),()=>{r.disconnect()}}},[e,t]),r},l=n.lazy(()=>Promise.all([r.e(79412),r.e(18325),r.e(612)]).then(r.bind(r,612))),u=e=>{let{style:t,className:r,onIntersection:a,placeholder:o}=e,l=n.useRef(null),u=i(l);return(0,n.useEffect)(()=>{u&&a&&a()},[u,a]),n.createElement(n.Fragment,null,n.createElement("mux-player",{ref:l,"data-mux-player-react-lazy-placeholder":!0,placeholder:o,style:{"--mux-player-react-lazy-placeholder":o?`url(${o});`:"",...t},className:r||"",nohotkeys:!0,"aria-hidden":!0,tabIndex:-1},n.createElement("div",{"data-mux-player-react-lazy-placeholder-overlay":!0})),n.createElement("style",null,`
        mux-player[data-mux-player-react-lazy-placeholder] {
          aspect-ratio: 16/9;
          display: block;
          background-color: var(--media-background-color, #000);
          width: 100%;
          position: relative;
          background-image: var(--mux-player-react-lazy-placeholder);
          background-repeat: no-repeat;
          background-size: var(--media-object-fit, contain);
          background-position: var(--media-object-position, 50% 50%);
          --controls: none;
          --controls-backdrop-color: rgba(0, 0, 0, 0.6);
        }
        mux-player [data-mux-player-react-lazy-placeholder-overlay] {
          position: absolute;
          inset: 0;
          background-color: var(--controls-backdrop-color);
        }
      `))},c={VIEWPORT:"viewport"},s=n.forwardRef((e,t)=>{let{loading:r=c.VIEWPORT,...i}=e,s=o(),[f,d]=(0,n.useState)(()=>r!==c.VIEWPORT);return n.createElement(a,{condition:s&&f,fallback:n.createElement(u,{style:i.style,className:i.className,placeholder:i.placeholder,onIntersection:()=>d(!0)})},n.createElement(l,{...i,ref:t}))})},68233:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}},39010:function(e,t,r){r.d(t,{ZP:function(){return s},wE:function(){return u}});var n=r(18529),a=r(75893),o=r(74162),i=r(7792);let l=e=>(0,o.qC)(e?e(0,null):null)[0],u=e=>o.UG+l(e),c=Promise.resolve(),s=(0,o.xD)(a.ZP,e=>(t,r,a)=>{let u;let s=(0,n.useRef)(!1),{cache:f,initialSize:d=1,revalidateAll:p=!1,persistSize:b=!1,revalidateFirstPage:m=!0,revalidateOnMount:y=!1,parallel:g=!1}=a,[,,,h]=o.DY.get(o.Fs);try{(u=l(t))&&(u=o.UG+u)}catch(e){}let[v,w,k]=(0,o.JN)(f,u),x=(0,n.useCallback)(()=>(0,o.o8)(v()._l)?d:v()._l,[f,u,d]);(0,i.useSyncExternalStore)((0,n.useCallback)(e=>u?k(u,()=>{e()}):()=>{},[f,u]),x,x);let E=(0,n.useCallback)(()=>{let e=v()._l;return(0,o.o8)(e)?d:e},[u,d]),Z=(0,n.useRef)(E());(0,o.LI)(()=>{if(!s.current){s.current=!0;return}u&&w({_l:b?Z.current:E()})},[u,f]);let N=y&&!s.current,S=e(u,async e=>{let n=v()._i,i=[],l=E(),[u]=(0,o.JN)(f,e),c=u().data,s=[],d=null;for(let e=0;e<l;++e){let[l,u]=(0,o.qC)(t(e,g?null:d));if(!l)break;let[b,y]=(0,o.JN)(f,l),v=b().data,w=p||n||(0,o.o8)(v)||m&&!e&&!(0,o.o8)(c)||N||c&&!(0,o.o8)(c[e])&&!a.compare(c[e],v);if(r&&w){let t=async()=>{if(l in h){let e=h[l];delete h[l],v=await e}else v=await r(u);y({data:v,_k:u}),i[e]=v};g?s.push(t):await t()}else i[e]=v;g||(d=v)}return g&&await Promise.all(s.map(e=>e())),w({_i:o.i_}),i},a),_=(0,n.useCallback)(function(e,t){let r="boolean"==typeof t?{revalidate:t}:t||{},n=!1!==r.revalidate;return u?(n&&((0,o.o8)(e)?w({_i:!0}):w({_i:!1})),arguments.length?S.mutate(e,{...r,revalidate:n}):S.mutate()):c},[u,f]),z=(0,n.useCallback)(e=>{let r;if(!u)return c;let[,n]=(0,o.JN)(f,u);if((0,o.mf)(e)?r=e(E()):"number"==typeof e&&(r=e),"number"!=typeof r)return c;n({_l:r}),Z.current=r;let a=[],[i]=(0,o.JN)(f,u),l=null;for(let e=0;e<r;++e){let[r]=(0,o.qC)(t(e,l)),[n]=(0,o.JN)(f,r),u=r?n().data:o.i_;if((0,o.o8)(u))return _(i().data);a.push(u),l=u}return _(a)},[u,f,_,E]);return{size:E(),setSize:z,mutate:_,get data(){return S.data},get error(){return S.error},get isValidating(){return S.isValidating},get isLoading(){return S.isLoading}}})}}]);