webpackJsonp([3],{"/j9u":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default[0]:t("div",{class:{"no-ssr-placeholder":!0}},this.placeholder)}}},F88d:function(t,e,n){"use strict";function r(t){n("M3ul")}var o=n("P9mH"),a=n("yv6g"),i=n("VU/8"),s=r,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},GUmx:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s={_default:function(){return n.e(1).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}},u={};e.a={head:{title:"這是一個練習",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"},{property:"og:type",content:"website"},{property:"og:site_name",content:"聯合報"},{property:"fb:admins",content:"671188086"},{property:"fb:app_id",content:"1010324812347164"},{property:"article:author",content:"https://www.facebook.com/udnplus"},{property:"article:publisher",content:"https://www.facebook.com/udnplus"},{property:"og:title",content:"讓家準備好 與你一起變老"},{property:"og:url",content:"https://udn.com/upf/newmedia/2017_data/elderhome/index.html"},{property:"og:image",content:"https://udn.com/upf/newmedia/2017_data/elderhome/meta.jpg"},{property:"og:description",content:"大人樂活撇步，報你知！國健署統計，每年「三個老人一個跌」。 打造適合高齡居住的「大人宅」，成為迎接高齡社會關鍵。"},{name:"copyright",content:"聯合報"},{name:"application-name",content:"讓家準備好 與你一起變老"},{name:"description",content:"大人樂活撇步，報你知！國健署統計，每年「三個老人一個跌」。 打造適合高齡居住的「大人宅」，成為迎接高齡社會關鍵。"}],link:[{rel:"icon",type:"image/ico",href:"https://udn.com/upf/newmedia/image/udn-icon.ico"},{rel:"stylesheet",href:"https://udn.com/upf/newmedia/css/font-awesome.min.css"},{rel:"stylesheet",href:"https://udn.com/upf/newmedia/css/bootstrap.min.css"},{rel:"stylesheet",href:"https://udn-newmedia.github.io/udn-newmedia-css/css/style.css"}],script:[{id:"etu-recommender",type:"text/javascript",innerHTML:"\n\t\t\t\tvar erUrlPrefix='https://rec.udn.com/';\n\t\t\t\tvar _qevents = _qevents || [];\n\t\t\t\t_qevents.push({\n\t\t\t\t\tgroup:'udn',\n\t\t\t\t\tcid : 'udn_soft',\n\t\t\t\t\tact : 'view',\n\t\t\t\t\tcat : ['news','cms','','',''],\n\t\t\t\t\tuid : '',\n\t\t\t\t\tbid : '',\n\t\t\t\t\tpid : '',\n\t\t\t\t\tpage:'ARTICLE',\n\t\t\t\t\tRank_cat:'10',\n\t\t\t\t\tRank_pid:'10',\n\t\t\t\t\ttitle: document.querySelector('title').innerHTML,\n\t\t\t\t\ttag:[],\n\t\t\t\t\treferral: document.referrer\n\t\t\t\t});\n\t\t\t\t(function() {\n\t\t\t\t\tvar er = document.createElement('script');\n\t\t\t\t\ter.type = 'text/javascript';\n\t\t\t\t\ter.async = true;\n\t\t\t\t\ter.src = erUrlPrefix + 'er.js?' + (new Date().getTime());\n\t\t\t\t\tvar currentJs = document.getElementById('etu-recommender');\n\t\t\t\t\tcurrentJs.parentNode.insertBefore(er, currentJs);\n\t\t\t\t})();\n    \t\t"},{src:"https://cdn.jsdelivr.net/npm/vue"}],__dangerouslyDisableSanitizers:["script"],style:[]},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options._nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?o.a.resolve(u[n]):s[n]().then(function(t){return u[n]=t,delete s[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}},"HBB+":function(t,e,n){"use strict";var r=(n("/5sW"),["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];e.a={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,a=e.data;a.nuxtChild=!0;for(var i=n,s=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,c=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&c++,n=n.$parent;a.nuxtChildDepth=c;var l=s[c]||u,f={};r.forEach(function(t){void 0!==l[t]&&(f[t]=l[t])});var d={};return o.forEach(function(t){"function"==typeof l[t]&&(d[t]=l[t].bind(i))}),t("transition",{props:f,on:d},[t("router-view",a)])}}},J2Ti:function(t,e,n){"use strict";function r(t){var e=f(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function o(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},o(t.modules[n],e)}n.d(e,"a",function(){return C});var a=n("woOf"),i=n.n(a),s=n("BO1k"),u=n.n(s),c=n("/5sW"),l=n("NYxO");c.default.use(l.default);var f=n("kRpp"),d=f.keys(),p={},h=void 0;if(d.forEach(function(t){-1!==t.indexOf("./index.")&&(h=t)}),h&&(p=r(h)),"function"!=typeof p){p.modules||(p.modules={});var m=!0,v=!1,x=void 0;try{for(var y,g=u()(d);!(m=(y=g.next()).done);m=!0){var w=y.value,_=w.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==_){var b=_.split(/\//),t=o(p,b);_=b.pop(),t[_]=r(w),t[_].namespaced=!0}}}catch(t){v=!0,x=t}finally{try{!m&&g.return&&g.return()}finally{if(v)throw x}}}var C=p instanceof Function?p:function(){return new l.default.Store(i()({strict:!1},p,{state:p.state instanceof Function?p.state():{}}))}},M2Ky:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"__nuxt"}},[n("nuxt-loading",{ref:"loading"}),t.layout?n(t.nuxt.err?"nuxt":t.layout,{tag:"component"}):t._e()],1)},o=[],a={render:r,staticRenderFns:o};e.a=a},M3ul:function(t,e,n){var r=n("wJGU");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("6e26fdac",r,!0)},MZof:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._m(0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt.js")])])}],a={render:r,staticRenderFns:o};e.a=a},P9mH:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},T23V:function(t,e,n){"use strict";function r(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}function o(t,e,n){var o=function(t){var o=r(t,"transition",e,n)||{};return"string"==typeof o?{name:o}:o};return t.map(function(t){var e=b()({},o(t));if(n&&n.matched.length&&n.matched[0].components.default){var r=o(n.matched[0].components.default);w()(r).filter(function(t){return r[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=r[t]})}return e})}function a(t,e){return F.serverRendered&&e&&Object(E.a)(t,e),t._Ctor=t,t}function i(t){var e=Object(E.e)(t.options.base,t.options.mode);return Object(E.c)(t.match(e),function(t,e,n,r,o){if("function"!=typeof t||t.options){var i=a(Object(E.j)(t),F.data?F.data[o]:null);return n.components[r]=i,i}return t().then(function(t){var e=a(Object(E.j)(t),F.data?F.data[o]:null);return n.components[r]=e,e})})}function s(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"!=typeof k.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),k.a[t]}),!a)return Object(E.h)(o,e)}function u(t,e){Object(E.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":d()(t))||t.options||(t=C.default.extend(t),t._Ctor=t,n.components[r]=t),t})}function c(t,e){var n=this;this._hashChanged||C.default.nextTick(function(){var e=Object(E.g)(t);U=e.map(function(t,e){if(!t)return"";if(O[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)C.default.set(t.$data,r,n[r])}return t.constructor.options.__file}),n._hadError&&n._dateLastError===n.$options._nuxt.dateErr&&n.error();var r=n.$options._nuxt.err?j.a.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(n._context)),n.setLayout(r)})}function l(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),M.afterEach(function(e,n){t.$nuxt.$emit("routeChanged",e,n)})}Object.defineProperty(e,"__esModule",{value:!0});var f=n("pFYg"),d=n.n(f),p=n("Xxa5"),h=n.n(p),m=n("//Fk"),v=n.n(m),x=n("exGp"),y=n.n(x),g=n("fZjL"),w=n.n(g),_=n("woOf"),b=n.n(_),C=n("/5sW"),k=n("unZF"),j=n("qcny"),E=n("YLfZ"),$=function(){var t=y()(h.a.mark(function t(e,n,r){var o,a,i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.fullPath.split("#")[0],a=e.fullPath.split("#")[0],this._hashChanged=o===a,!this._hashChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,v.a.all(Object(E.c)(e,function(t,e,n,r){if("function"!=typeof t||t.options){var o=Object(E.j)(t);return n.components[r]=o,o}return t().then(function(t){var e=Object(E.j)(t);return n.components[r]=e,e})}));case 7:r(),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(4),t.t0||(t.t0={}),i=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:i,message:t.t0.message}),r(!1);case 16:case"end":return t.stop()}},t,this,[[4,10]])}));return function(e,n,r){return t.apply(this,arguments)}}(),R=function(){var t=y()(h.a.mark(function t(e,n,r){var a,i,u,c,l,f,d,p,m=this;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",r());case 2:if(a=!1,i=function(t){m.$loading.finish&&m.$loading.finish(),a||(a=!0,r(t))},u=Object(E.d)({to:e,from:n,store:L,isClient:!0,next:i.bind(this),error:this.error.bind(this)},A),this._context=u,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,c=Object(E.f)(e),c.length){t.next=23;break}return t.next=12,s.call(this,c,u);case 12:if(!u._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof j.a.layout?j.a.layout(u):j.a.layout);case 16:return l=t.sent,t.next=19,s.call(this,c,u,l);case 19:if(!u._redirected){t.next=21;break}return t.abrupt("return");case 21:return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 23:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(o(c,e,n)),t.prev=25,t.next=28,s.call(this,c,u);case 28:if(!u._redirected){t.next=30;break}return t.abrupt("return");case 30:return f=c[0].options.layout,"function"==typeof f&&(f=f(u)),t.next=34,this.loadLayout(f);case 34:return f=t.sent,t.next=37,s.call(this,c,u,f);case 37:if(!u._redirected){t.next=39;break}return t.abrupt("return");case 39:if(d=!0,c.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:u.store}))}),d){t.next=44;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 44:return t.next=46,v.a.all(c.map(function(t,n){if(t._path=Object(E.b)(e.matched[n].path)(e.params),!m._hadError&&m._isMounted&&t._path===O[n]&&n+1!==c.length)return v.a.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,i=o&&a?30:45;if(o){var s=Object(E.i)(t.options.asyncData,u).then(function(e){Object(E.a)(t,e),m.$loading.increase&&m.$loading.increase(i)});r.push(s)}if(a){var l=t.options.fetch(u);l&&(l instanceof v.a||"function"==typeof l.then)||(l=v.a.resolve(l)),l.then(function(t){m.$loading.increase&&m.$loading.increase(i)}),r.push(l)}return v.a.all(r)}));case 46:O=c.map(function(t,n){return Object(E.b)(e.matched[n].path)(e.params)}),this.$loading.finish&&this.$loading.finish(),a||r(),t.next=62;break;case 51:return t.prev=51,t.t0=t.catch(25),t.t0||(t.t0={}),O=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,p=j.a.layout,"function"==typeof p&&(p=p(u)),t.next=60,this.loadLayout(p);case 60:this.error(t.t0),r(!1);case 62:case"end":return t.stop()}},t,this,[[25,51]])}));return function(e,n,r){return t.apply(this,arguments)}}(),T=function(){var t=y()(h.a.mark(function t(e){var n,r,a,s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=e.app,M=e.router,L=e.store,t.next=5,v.a.all(i(M));case 5:return n=t.sent,r=new C.default(A),a=F.layout||"default",t.next=10,r.loadLayout(a);case 10:if(r.setLayout(a),s=function(){r.$mount("#__nuxt"),C.default.nextTick(function(){l(r)})},r.setTransitions=r.$options._nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(o(n,M.currentRoute)),O=M.currentRoute.matched.map(function(t){return Object(E.b)(t.path)(M.currentRoute.params)}),U=n.map(function(t){return t.options.__file})),r.error=r.$options._nuxt.error.bind(r),r.$loading={},F.error&&r.error(F.error),M.beforeEach($.bind(r)),M.beforeEach(R.bind(r)),M.afterEach(u),M.afterEach(c.bind(r)),!F.serverRendered){t.next=24;break}return s(),t.abrupt("return");case 24:R.call(r,M.currentRoute,M.currentRoute,function(t){if(!t)return u(M.currentRoute,M.currentRoute),c.call(r,M.currentRoute,M.currentRoute),void s();var e=!1;M.afterEach(function(){e||(e=!0,s())}),M.push(t)});case 25:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),O=[],U=[],A=void 0,M=void 0,L=void 0,F=window.__NUXT__||{};Object(j.b)().then(T).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},TuIM:function(t,e){!function(t,e,n,r,o,a,i){t.GoogleAnalyticsObject=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,a=e.createElement(n),i=e.getElementsByTagName(n)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",i.parentNode.insertBefore(a,i)}(window,document,"script",0,"ga"),ga("create","UA-83853620-2","auto"),ga("create","UA-19660006-1","auto",{name:"udn"}),ga("create","UA-44955675-22","auto",{name:"theme"}),ga("send","pageview"),ga("udn.send","pageview"),ga("theme.send","pageview"),ga("udn.send","event","圖表看時事","view","圖解新聞"),console.log("GA loaded 123")},WRRc:function(t,e,n){"use strict";n("/5sW");e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";function r(t,e){var n=t.options.data||O;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),R()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=T.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function a(t){return[].concat.apply([],t.matched.map(function(t){return E()(t.components).map(function(e){return t.components[e]})}))}function i(t){return[].concat.apply([],t.matched.map(function(t){return E()(t.instances).map(function(e){return t.instances[e]})}))}function s(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return E()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function u(t,e){var n={isServer:!!t.isServer,isClient:!!t.isClient,isStatic:!0,isDev:!1,isHMR:t.isHMR||!1,app:e,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/test-nuxt/",env:{}},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,e,o){t&&(n._redirected=!0,"string"!=typeof t||void 0!==e&&"object"!==(void 0===e?"undefined":k()(e))||(o=e||{},e=t,t=302),r({path:e,query:o,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),t.from&&(n.from=t.from),n.isServer&&t.beforeRenderFns&&(n.beforeNuxtRender=function(e){return t.beforeRenderFns.push(e)}),n.isClient&&window.__NUXT__&&(n.nuxtState=window.__NUXT__),n}function c(t,e){return!t.length||e._redirected?b.a.resolve():l(t[0],e).then(function(){return c(t.slice(1),e)})}function l(t,e){var n=void 0;return n=2===t.length?new b.a(function(n){t(e,function(t,r){t&&e.error(t),r=r||{},n(r)})}):t(e),n&&(n instanceof b.a||"function"==typeof n.then)||(n=b.a.resolve(n)),n}function f(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function d(t,e){return v(p(t,e))}function p(t,e){for(var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";null!=(n=U.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var f=t[a],d=n[2],p=n[3],h=n[4],m=n[5],v=n[6],g=n[7];i&&(r.push(i),i="");var w=null!=d&&null!=f&&f!==d,_="+"===v||"*"===v,b="?"===v||"*"===v,C=n[2]||s,k=h||m;r.push({name:p||o++,prefix:d||"",delimiter:C,optional:b,repeat:_,partial:w,asterisk:!!g,pattern:k?y(k):g?".*":"[^"+x(C)+"]+?"})}}return a<t.length&&(i+=t.substr(a)),i&&r.push(i),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function m(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function v(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===k()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,f=a[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+w()(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(l=s(f[d]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+w()(l)+"`");o+=(0===d?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?m(f):s(f),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}function x(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function y(t){return t.replace(/([=!:$\/()])/g,"\\$1")}e.a=r,e.j=o,e.f=a,e.g=i,e.c=s,e.d=u,e.h=c,e.i=l,e.e=f,e.b=d;var g=n("mvHQ"),w=n.n(g),_=n("//Fk"),b=n.n(_),C=n("pFYg"),k=n.n(C),j=n("fZjL"),E=n.n(j),$=n("Dd8w"),R=n.n($),T=n("/5sW"),O=function(){return{}};window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var U=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},cs8z:function(t,e,n){"use strict";var r=n("y0Z5"),o=n("lJnm"),a=n("VU/8"),i=a(r.a,o.a,!1,null,null,null);e.a=i.exports},ct3O:function(t,e,n){"use strict";function r(t){n("dqDT")}var o=n("hRrh"),a=n("MZof"),i=n("VU/8"),s=r,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},dqDT:function(t,e,n){var r=n("/j9u");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("3ebcd42d",r,!0)},"gXG+":function(t,e,n){"use strict";var r=n("GUmx"),o=n("M2Ky"),a=n("VU/8"),i=a(r.a,o.a,!1,null,null,null);e.a=i.exports},hRrh:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},kRpp:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="kRpp"},lJnm:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt.err?n("nuxt-error",{attrs:{error:t.nuxt.err}}):n("nuxt-child",{key:t.routerViewKey})},o=[],a={render:r,staticRenderFns:o};e.a=a},mtxM:function(t,e,n){"use strict";function r(){return new a.default({mode:"history",base:"/test-nuxt/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:s,routes:[{path:"/",component:i,name:"index"}],fallback:!1})}e.a=r;var o=n("/5sW"),a=n("/ocq");o.default.use(a.default);var i=function(){return n.e(0).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})},s=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},p5rU:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="p5rU"},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return U});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),l=n("Dd8w"),f=n.n(l),d=n("exGp"),p=n.n(d),h=n("MU8w"),m=(n.n(h),n("/5sW")),v=n("p3jY"),x=n.n(v),y=n("mtxM"),g=n("0F0d"),w=n("HBB+"),_=n("WRRc"),b=n("ct3O"),C=n("cs8z"),k=n("gXG+"),j=n("YLfZ"),E=n("J2Ti"),$=n("TuIM"),R=n.n($),T=n("vHGK"),O=n.n(T);n.d(e,"a",function(){return b.a});var U=function(){var t=p()(o.a.mark(function t(e){var n,r,a,i,u,l,d,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Object(y.a)(),r=Object(E.a)(),a=f()({router:n,store:r,_nuxt:{defaultTransition:A,transitions:[A],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},A,{name:t}):c()({},A,t):A}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){"string"==typeof(t=t||null)&&(t={statusCode:500,message:t});var e=this._nuxt||this.$options._nuxt;return e.dateErr=Date.now(),e.err=t,t}}},k.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(l=Object(j.e)(n.options.base),u=n.resolve(l).route),d=Object(j.d)({isServer:!!e,isClient:!e,route:u,next:i,error:a._nuxt.error.bind(a),store:r,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0},a),p=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");t="$"+t,a[t]=e,m.default.use(function(){var e="__nuxt_"+t+"_installed__";m.default[e]||(m.default[e]=!0,m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}}))}),r[t]=a[t]},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof R.a){t.next=14;break}return t.next=14,R()(d,p);case 14:if("function"!=typeof O.a){t.next=17;break}return t.next=17,O()(d,p);case 17:t.next=20;break;case 20:return t.abrupt("return",{app:a,router:n,store:r});case 21:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();m.default.component(g.a.name,g.a),m.default.component(w.a.name,w.a),m.default.component(_.a.name,_.a),m.default.component(C.a.name,C.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var A={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("p5rU"),i=a.keys(),s={},u=!0,c=!1,l=void 0;try{for(var f,d=o()(i);!(u=(f=d.next()).done);u=!0){var p=f.value;s[p.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var e=a(t);return e.default?e.default:e}(p)}}catch(t){c=!0,l=t}finally{try{!u&&d.return&&d.return()}finally{if(c)throw l}}e.a=s},vHGK:function(t,e,n){(function(t){window.fbAsyncInit=function(){FB.init({appId:"1010324812347164",autoLogAppEvents:!0,xfbml:!0,version:"v2.11"})},function(t,e,n){var r,o=t.getElementsByTagName(e)[0];t.getElementById(n)||(r=t.createElement(e),r.id=n,r.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(r,o))}(document,"script","facebook-jssdk"),console.log("facebook SDK loaded"),console.log(t.env)}).call(e,n("W2nU"))},wJGU:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;-o-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},y0Z5:function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey"],beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},computed:{routerViewKey:function(){return void 0!==this.nuxtChildKey||this.$route.matched.length>1?this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params):this.$route.fullPath.split("#")[0]}},components:{NuxtChild:o.a,NuxtError:a.a}}},yv6g:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"nuxt-progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},o=[],a={render:r,staticRenderFns:o};e.a=a}},["T23V"]);
//# sourceMappingURL=app.8e6e81d1bc1b042654ef.js.map