(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20758],{21717:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var r=n(5338),a=n(30073),o=n.n(a),i=n(18529),c=!1,l=function(){var e=(0,i.useState)(function(){return void 0!==window.IntersectionObserver}),t=e[0],a=e[1];return(0,i.useEffect)(function(){var e;c||t||(c=!0,(e=(0,r.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:if(!(void 0!==window.IntersectionObserver)){e.next=7;break}a(!0),e.next=16;break;case 7:return e.prev=7,e.next=10,n.e(68702).then(n.t.bind(n,68702,23));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),Sentry.captureException(e.t0);case 15:a(!0);case 16:case"end":return e.stop()}},e,null,[[7,12]])})),function(){return e.apply(this,arguments)})())},[]),t}},34230:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(23810),a=n(18529),o=n(84774),i=n(4954),c=n(21570);function l(){var e=(0,o.Z)(),t=(0,r.Z)(e,2)[1];return(0,a.useCallback)(function(e){return function(){(0,i.d8)("locale",e),t({type:"switch-locale-modal-close"}),t({type:"switch-locale-banner-close"}),(0,c.D)(e)}},[t])}},21570:function(e,t,n){"use strict";n.d(t,{D:function(){return p},Z:function(){return f}});var r=n(23810),a=n(33106),o=n(38741),i=n(84774),c=n(44040),l=n(56248),s=n(13586),u="hide_switch_locale";function p(e){var t=new Date;t.setDate(t.getDate()+60);var n={hideUntil:t,language:(0,l.Z)(e)};localStorage.setItem(u,JSON.stringify(n))}function f(){var e=(0,a.Z)().lang,t=(0,i.Z)(),n=(0,r.Z)(t,2)[1];(0,o.Z)(function(){if((0,c.Z)()){var t,r,a,o,i=(0,l.Z)(navigator.language||navigator.userLanguage||s.defaultLocale),p=(0,l.Z)(e);r=(t={userLanguage:i,pageLanguage:p}).userLanguage,a=t.pageLanguage,(!(o=function(){var e=localStorage.getItem(u);if(!e)return null;try{var t=JSON.parse(e),n=t.hideUntil,r=t.language;if(n>new Date||!r)return null;return(0,l.Z)(r)}catch(e){return Sentry.captureException(e),null}}())||o!==a)&&a!==r&&(0,l.j)().has(r)&&n({type:"switch-locale-banner-open",payload:{pageLanguage:p,userLanguage:i}})}})}},20758:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(23810),a=n(44713),o=n.n(a),i=n(28649),c=n.n(i),l=n(90227),s=n(33106),u=n(17370),p=n(84774),f=n(67187),g=n(98442),d=n(88393),h=n(18529),m=n(69983),v=n(63323),w=n(33256),x=n(64950),b=n.n(x),_=n(75839),y=n(70597),Z=n(44040),j=n(13586);function S(e){return j.availableLocales.find(function(t){return t.startsWith(e)})}var O=n(11830),k=n(34460),L=n.n(k),C=n(34230),R=n(48282);function D(e){var t=e.locales,n=(0,p.Z)(),a=(0,r.Z)(n,2),o=a[0].switchLocaleBanner,i=a[1],c=(0,C.Z)(),l=(0,s.Z)("common").t;if((0,h.useEffect)(function(){(0,Z.Z)()&&document.body.classList.add(b().contentAboveSwitchLocaleModal)},[o]),!o)return null;var u=o.pageLanguage,f=o.userLanguage,g=S(u),d=S(f),x=t.find(function(e){return e.locale===g}),j=t.find(function(e){return e.locale===d});return x&&j?(0,R.jsxs)("div",{className:L().container,children:[(0,R.jsxs)(y.Z,{size:"h$18",weight:"bold",className:L().title,children:[l("locale.choose_your_language"),":"]}),(0,R.jsxs)(_.Z,{spaceBetween:8,className:L().buttons,children:[(0,R.jsx)(v.Z,{href:x.href,onClick:c(x.locale),imgixIcon:"https://images.pexels.com/lib/flags/".concat(x.locale,".png"),imgixIconFit:"crop",imgixIconCrop:"left",children:O.Z[x.locale]}),(0,R.jsx)(v.Z,{href:j.href,onClick:c(j.locale),imgixIcon:"https://images.pexels.com/lib/flags/".concat(j.locale,".png"),imgixIconFit:"crop",imgixIconCrop:"left",children:O.Z[j.locale]}),(0,R.jsx)(v.C,{onClick:function(){return i({type:"switch-locale-banner-close"})},icon:(0,R.jsx)(w.Z,{symbol:m.Z})})]})]}):null}var N=n(21570),I=n(56248),E=n(28490),G=n(69566),P=o()(function(){return Promise.all([n.e(83567),n.e(18586)]).then(n.bind(n,18586))},{loadableGenerated:{webpack:function(){return[18586]}}});function T(e){var t,n,a,o,i,h,m,v,w,x,b,_,y=e.onlyDefaultLocale,S=e.title,O=e.description,k=e.ogImage,L=e.ogTitle,C=e.ogDescription,T=e.ogSiteName,B=e.ogType,z=e.metaRoute,A=e.translatedSlugs,M=void 0===A?{}:A,F=e.robots,U=e.keywords,H=e.articleModifiedTime,V=e.articleTag,W=e.trackingUrl,J=e.noIndex,q=e.xDefault,K=e.isMediumHead,Q=e.showGoogleOneTap,Y=(0,s.Z)(),$=Y.t,X=Y.lang,ee=(t=e.metaRoute,n=e.canonicalMetaRoute,a=e.translatedSlugs,o=e.canonicalLocaleOverride,i=(0,s.Z)(),h=(0,l.useRouter)().query,m=(n||t)({i18n:i,includeDomain:!0,locale:o||i.lang,translatedSlugs:void 0===a?{}:a}).href.split("?"),w=(v=(0,r.Z)(m,2))[0],x=v[1],(b=(0,G.ce)(x,{page:h.page}))?"".concat(w,"?").concat(b):w),et=(0,f.Z)().state,en=void 0!==W?W:(0,Z.Z)()?window.location.href:null;(0,N.Z)(),(0,g.Z)(en);var er=j.availableLocales.map(function(e){return{href:z({i18n:Y,locale:e,translatedSlugs:M}).href,locale:e}}),ea=(0,p.Z)(),eo=(0,r.Z)(ea,1)[0].switchLocale.open;return et&&!K?null:(0,R.jsxs)(R.Fragment,{children:[eo&&(0,R.jsx)(P,{locales:er}),(0,R.jsx)(D,{locales:er}),(void 0===Q||Q)&&(0,R.jsx)(d.Z,{}),(0,R.jsxs)(c(),{children:[(0,R.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}),(0,R.jsx)("meta",{name:"theme-color",content:"#232a34"}),(0,R.jsx)("meta",{name:"msapplication-TileColor",content:"#05a081"}),(0,R.jsx)("title",{children:S||$("common:meta.title")}),(0,R.jsx)("meta",{name:"description",content:O||$("common:meta.description")}),(0,R.jsx)("meta",{name:"robots",content:(_="max-image-preview:large",J||F?J?"noindex, ".concat(_):F?"".concat(F,", ").concat(_):void 0:_)}),U&&(0,R.jsx)("meta",{name:"keywords",content:U}),H&&(0,R.jsx)("meta",{property:"article:modified_time",content:H}),V&&(0,R.jsx)("meta",{property:"article:tag",content:V}),(0,R.jsx)("meta",{property:"og:image",content:k||(0,E.Z)("/meta/pexels-stock-photos.jpg")}),L&&(0,R.jsx)("meta",{property:"og:title",content:L}),C&&(0,R.jsx)("meta",{property:"og:description",content:C}),T&&(0,R.jsx)("meta",{property:"og:site_name",content:T}),B&&(0,R.jsx)("meta",{property:"og:type",content:B}),(0,R.jsx)("meta",{property:"og:url",content:ee}),(0,R.jsx)("link",{href:ee,rel:"canonical"}),(0,R.jsx)("link",{rel:"alternate",hrefLang:"x-default",href:(q||z)({i18n:Y,includeDomain:!0,locale:"en-US",translatedSlugs:M}).href}),!y&&j.availableLocales.map(function(e){var t=z({i18n:Y,includeDomain:!0,locale:e,translatedSlugs:M}).href;return e===X&&(t=ee),(0,R.jsx)("link",{rel:"alternate",hrefLang:(0,I.Z)(e),href:t},e)}),(0,R.jsx)("link",{href:(0,u.JV)({i18n:Y,includeDomain:!0}).href,rel:"alternate",title:"RSS",type:"application/rss+xml"}),(0,R.jsx)("link",{rel:"search",type:"application/opensearchdescription+xml",title:"Pexels",href:(0,u.us)({i18n:Y}).href}),(0,R.jsx)("link",{href:(0,E.Z)("/meta/favicon.ico"),rel:"shortcut icon",type:"image/x-icon"}),(0,R.jsx)("link",{rel:"icon",sizes:"192x192",href:(0,E.Z)("/meta/pexels-icon.png")}),(0,R.jsx)("link",{rel:"apple-touch-icon",href:(0,E.Z)("/meta/apple-touch-icon.png")}),(0,R.jsx)("link",{rel:"mask-icon",href:(0,E.Z)("/meta/safari-pinned-tab.svg"),color:"#05a081"}),(0,R.jsx)("meta",{name:"application-name",content:"Pexels"}),(0,R.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"WebSite",name:"Pexels",url:"https://www.pexels.com/",potentialAction:{"@type":"SearchAction",target:"https://www.pexels.com/search/{search_term_string}/","query-input":"required name=search_term_string"}})}}),(0,R.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"Organization",name:"Pexels",url:"https://www.pexels.com",logo:(0,E.Z)("/meta/pexels-logo.png"),sameAs:["https://www.facebook.com/pexels","https://twitter.com/pexels","https://www.pinterest.com/pexels/","https://instagram.com/pexels/"]})}})]})]})}},75839:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(94713),a=n(21841),o=n.n(a),i=n(18529),c=n(82695),l=n(8512),s=n.n(l),u=n(52106),p=n.n(u),f=new(s())({id:"chevron_left-1f1bcc17d037a68b0a54789082827bf1",use:"chevron_left-1f1bcc17d037a68b0a54789082827bf1-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chevron_left-1f1bcc17d037a68b0a54789082827bf1"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" /></symbol>'});p().add(f);var g=new(s())({id:"chevron_right-43348a741a3250672b4cd410153577da",use:"chevron_right-43348a741a3250672b4cd410153577da-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chevron_right-43348a741a3250672b4cd410153577da"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></symbol>'});p().add(g);var d=n(46852),h=n(33256);function m(e){var t,n,r,a,o,c,l=(t=e.index,n=e.childrenCount,r=e.spaceBetween,a=e.addBottomMargin,o=t>=n-1,c=(0,i.useMemo)(function(){var e={};return o||(e.marginRight=r),a&&(e.marginBottom=r),e},[a,o,r]),{lastChild:o,spacingProps:c}),s=l.spacingProps,u=l.lastChild;return e.children({spacingProps:s,lastChild:u})}var v=n(47563),w=n.n(v),x=n(23810),b=n(21717);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Z=n(44040),j=n(48282),S={minWidth:1};function O(e){var t,n,a,l,s,u=e.center,p=e.children,v=e.spaceBetween,_=e.responsive,O=e.showOverflowGradients,k=void 0===O||O,L=e.showOverflowArrows,C=void 0===L||L,R=e.overflowArrowColor,D=void 0===R?"grey$7F7F7F":R,N=e.assumeContentWillOverflow,I=e.className,E=e.vertical,G=i.Children.toArray(p).filter(function(e){return(0,i.isValidElement)(e)}),P="overflow"===_,T=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,i.useRef)(null),r=(0,i.useRef)(null),a=(0,i.useRef)(null),o=(0,i.useState)({left:!1,right:t}),c=o[0],l=o[1],s=(0,b.T)();return(0,i.useEffect)(function(){if(!e||!s)return function(){};var t=n.current,o=r.current,i=a.current;if(!t||!o||!i)return function(){};var c=[o,i].map(function(e){var n=e===o,r=new IntersectionObserver(function(e){var t=(0,x.Z)(e,1)[0];l(function(e){return n?y(y({},e),{},{left:!t.isIntersecting}):y(y({},e),{},{right:!t.isIntersecting})})},{root:t});return r.observe(e),function(){r.unobserve(e)}});return function(){c.map(function(e){return e()})}},[s,e]),{overflowElementsToShow:c,ref:n,leftRef:r,rightRef:a}}(P,N),B=(t=T.ref.current,n=(0,i.useRef)(0),{triggerScroll:function(e){if((0,Z.Z)()&&t){var r,a=window.innerWidth/2,o=t.clientHeight/2,i=0;"left"==e||"right"==e?(n.current=t.scrollLeft,i="left"===e?-a:a):(n.current=t.scrollTop,i="up"===e?-o:o),window.requestAnimationFrame(function a(o){void 0===r&&(r=o);var c,l,s,u=o-r,p=(c=u,l=n.current,s=i,(c/=200)<1?s/2*c*c+l:-s/2*((c-=1)*(c-2)-1)+l);"left"==e||"right"==e?t.scrollLeft=p:t.scrollTop=p,u<400&&window.requestAnimationFrame(a)})}}}).triggerScroll,z=(0,c.Z)({marginBottom:-v});return G.length<=0?null:(0,j.jsx)("div",{className:o()((0,d.Z)(e),w().wrapper,I,(0,r.Z)({},w().horizontalCenter,"horizontal"===u||"both"===u)),children:(0,j.jsxs)("div",{ref:T.ref,style:"wrap"===_?z:void 0,className:o()(w().default,(a={},(0,r.Z)(a,w().wrap,"wrap"===_),(0,r.Z)(a,w().overflow,"overflow"===_),(0,r.Z)(a,w().verticalCenter,"vertical"===u||"both"===u),(0,r.Z)(a,w().vertical,E),a)),children:[(0,j.jsx)("div",{ref:T.leftRef,style:S}),P&&(0,j.jsx)("div",{className:o()((l={},(0,r.Z)(l,w().leftOverlay,!E),(0,r.Z)(l,w().topOverlay,E),(0,r.Z)(l,w().open,T.overflowElementsToShow.left),(0,r.Z)(l,w().hasGradient,k),l)),children:C&&(0,j.jsx)(h.Z,{symbol:f,fill:D,className:w().overflowArrow,onClick:function(){return E?B("up"):B("left")}})}),G.map(function(e,t){return(0,j.jsx)(m,{index:t,childrenCount:G.length,spaceBetween:v,addBottomMargin:"wrap"===_,children:function(t){var n=t.spacingProps;return(0,i.cloneElement)(e,n)}},"".concat(null==e?void 0:e.key,"-").concat(t))}),P&&(0,j.jsx)("div",{className:o()((s={},(0,r.Z)(s,w().rightOverlay,!E),(0,r.Z)(s,w().bottomOverlay,E),(0,r.Z)(s,w().open,T.overflowElementsToShow.right),(0,r.Z)(s,w().hasGradient,k),s)),children:C&&(0,j.jsx)(h.Z,{symbol:g,fill:D,className:w().overflowArrow,onClick:function(){return E?B("down"):B("right")}})}),(0,j.jsx)("div",{ref:T.rightRef,style:S})]})})}},56248:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},j:function(){return s}});var r,a,o=n(23810),i=n(13586),c=(r=new Set,a={},i.availableLocales.forEach(function(e){var t=e.split("-"),n=(0,o.Z)(t,1)[0];a[n]?r.add(n):a[n]=!0}),r);function l(e){var t=e.split("-"),n=(0,o.Z)(t,1)[0];return c.has(n)?e:n}function s(){return new Set(i.availableLocales.map(l))}},11830:function(e,t,n){"use strict";n(13586),t.Z={"en-US":"English","pt-BR":"Portugu\xeas","es-ES":"Espa\xf1ol","ca-ES":"Catal\xe0","de-DE":"Deutsch","it-IT":"Italiano","fr-FR":"Fran\xe7ais","sv-SE":"Svenska","id-ID":"Bahasa Indonesia","pl-PL":"Polski","ja-JP":"日本語","zh-TW":"繁體中文","zh-CN":"简体中文","ko-KR":"한국어","th-TH":"ภาษาไทย","nl-NL":"Nederlands","hu-HU":"Magyar","vi-VN":"Tiếng Việt","cs-CZ":"Čeština","da-DK":"Dansk","fi-FI":"Suomi","uk-UA":"Українська","el-GR":"Ελληνικά","ro-RO":"Rom\xe2nă","nb-NO":"Norsk","sk-SK":"Slovenčina","tr-TR":"T\xfcrk\xe7e","ru-RU":"Русский"}},28490:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(36111);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,r.Z)("/images".concat(e))}},34460:function(e){e.exports={container:"SwitchLocaleBanner_container__c8tXn",title:"SwitchLocaleBanner_title__Vl7Ud",buttons:"SwitchLocaleBanner_buttons__eY9do"}},47563:function(e){e.exports={wrapper:"SpacingGroup_wrapper__D_lOO",default:"SpacingGroup_default__s_Qnp",vertical:"SpacingGroup_vertical__2ruzi",horizontalCenter:"SpacingGroup_horizontalCenter__f1zVb",verticalCenter:"SpacingGroup_verticalCenter__JCDw5",wrap:"SpacingGroup_wrap__WdQqN",overflow:"SpacingGroup_overflow__WLIlL",rightOverlay:"SpacingGroup_rightOverlay__YRflP",leftOverlay:"SpacingGroup_leftOverlay__bngzs",topOverlay:"SpacingGroup_topOverlay__2yA_D",bottomOverlay:"SpacingGroup_bottomOverlay__cczER",open:"SpacingGroup_open__nzbYt",hasGradient:"SpacingGroup_hasGradient__Q1MR4",overflowArrow:"SpacingGroup_overflowArrow__bcRB_"}}}]);