webpackJsonp([1],{"+tzu":function(t,e,n){t.exports=n.p+"static/img/movers-logo.7872ff1.png"},"1uuo":function(t,e){},"3Idr":function(t,e){},"4/Ox":function(t,e){},"8BOy":function(t,e){},BHyM:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-container",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},s,!1,function(t){n("peoh")},null,null).exports,o=n("/ocq"),i=n("Vimu"),l={name:"home",components:{Slideout:n.n(i).a},methods:{open:function(){console.log("slideoutOpen")}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-container fluid main"},[a("Slideout",{attrs:{menu:"#menu",panel:"#panel",toggleSelectors:[".toggle-button"]},on:{"on-open":t.open}},[a("nav",{staticClass:"grid-x grid-padding-x",attrs:{id:"menu"}},[a("div",{staticClass:"cell medium-12 slid-nav-container"},[a("ul",[a("li",[t._v("Service Areas")]),t._v(" "),a("li",[t._v("About Us")]),t._v(" "),a("li",[t._v("Request A Quote")])])])]),t._v(" "),a("main",{attrs:{id:"panel"}},[a("router-link",{attrs:{to:"home"}},[a("img",{attrs:{src:n("+tzu")}})]),t._v(" "),a("h1",[t._v("4th DIMENSION PRO MOVERS")]),t._v(" "),a("h2",[t._v("Apartments | Residence | Military")]),t._v(" "),a("site-header",{attrs:{panelClickHandler:""}}),t._v(" "),a("router-view"),t._v(" "),a("footer-content",[t._v("test")])],1)])],1)},staticRenderFns:[]};var c=n("VU/8")(l,u,!1,function(t){n("3Idr")},"data-v-513da80e",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("p",{staticClass:"top-paragraph"},[this._v("Our business is built on excellence.")]),this._v(" "),e("p",{staticClass:"body-paragraph"},[this._v("\n\t\t\tThe thought of entrusting your entire life’s belongings to someone to move them is about as scary as it gets. We understand that and want you to rest assured knowing that we’re the ones who can get the job done right.\n\n            We know that we’re only as good as our last move completed and work tirelessly to improve our operations. Whether it be down the block or across the country, there’s nothing we value more than our client’s satisfaction.\n\t\t")])])}]};var h={Home:n("VU/8")({name:"home"},v,!1,function(t){n("8BOy")},null,null).exports},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var m=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},_,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports,d=[{path:"/dev/",component:c,meta:{auth:!0},children:[{path:"",redirect:"home",meta:{auth:!0}},{path:"home",name:"Home",component:h.Home,meta:{auth:!0}}]}];a.a.use(o.a);var f=new o.a({mode:"history",routes:d}),p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"nav-container"},[e("ul",{staticClass:"menu",attrs:{"data-dropdown-menu":""}},[e("li",[e("router-link",{attrs:{to:"service"}},[this._v("Service Areas")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"about-us"}},[this._v("About Us")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"quote"}},[this._v("Request A Quote")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-bar",attrs:{"data-responsive-toggle":"example-animated-menu","data-hide-for":"medium"}},[e("button",{staticClass:"menu-icon toggle-button",attrs:{type:"button","data-toggle":""}}),this._v(" "),e("div",{staticClass:"title-bar-title"},[this._v("Menu")])])}]};var g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"grid-container"},[n("div",{staticClass:"grid-x footer-container"},[n("div",{staticClass:"cell small-12 medium-6 footer-content"},[n("p",[t._v("Let us take care of your move while you focus on your move")]),t._v(" "),n("p",[t._v("\n\t          Request A "),n("a",{attrs:{href:"#"}},[t._v("Quote")])])]),t._v(" "),n("div",{staticClass:"cell small-12 medium-6"},[n("ul",{staticClass:"footer-link-container"},[n("li",{staticClass:"footer-link-nav"},[t._v("\n\t\t\t\t\tService\n\t\t\t\t\t"),n("ul",{staticClass:"footer-link-sub-container"},[n("li",{staticClass:"sub-footer-link"},[t._v("Moving")])])]),t._v(" "),n("li",{staticClass:"footer-link-nav"},[t._v("Company")]),t._v(" "),n("li",{staticClass:"footer-link-nav"},[t._v("Quote")])])])]),t._v(" "),n("div",{staticClass:"footer-bottom"},[n("p",[t._v("Serving: Denver Colorado, Florida")]),t._v(" "),n("p",[t._v("123 address lane Fl 80023 | Main (850) 427 8800 "),n("a",{attrs:{href:"mailto:info@4dlocalmovers.com?subject=Mail from 4D Local Movers App"}},[t._v("info@4Dlocalmovers.com")])]),t._v(" "),n("p",[n("a",{attrs:{href:"#"}},[t._v("Privacy Policy ")]),n("span",{staticClass:"copy-format"},[t._v("© 2019 4th Dimension Pro Movers")])])])])}]};[m,n("VU/8")({name:"site-header",data:function(){return{}},methods:{}},p,!1,function(t){n("BHyM")},"data-v-69dafa01",null).exports,n("VU/8")({name:"test-slot"},g,!1,null,null,null).exports,n("VU/8")({name:"footer-content"},b,!1,function(t){n("4/Ox")},"data-v-10c1d01a",null).exports].forEach(function(t){return a.a.component(t.name,t)}),a.a.config.productionTip=!1,new a.a({el:"#app",router:f,components:{App:r},template:"<App/>"})},peoh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7d2f588acdc925dcec28.js.map