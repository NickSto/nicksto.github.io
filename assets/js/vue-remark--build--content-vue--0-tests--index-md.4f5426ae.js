(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"5J6h":function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),i=e("XSun"),r=e("UQSp"),u=e("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}u.default.config.optionMergeStrategies;var c={Continent:i.a,VueRemarkRoot:r.a},p=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===s(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?n[t]=c[t]:e[t]=function(){return c[t]}}))},a=u.default.config.optionMergeStrategies,f="__vueRemarkFrontMatter",l={excerpt:null,title:"A cool title",tease:"Lorem Ipsum is simply dummy text.",image:"AWSLogo.png",contact:"people",date:"2021-04-19T00:00:00.000Z"};var m=function(t){t.options[f]&&(t.options[f]=l),u.default.util.defineReactive(t.options,f,l),t.options.computed=a.computed({$frontmatter:function(){return t.options[f]}},t.options.computed)},d=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("VueRemarkRoot",[n("p",[this._v("Eyyyy")]),n("p",[this._v("Test space line break"),n("br"),this._v("\nthis is the second line!")]),this._t("/admin/linkbox"),n("p",[this._v("Continent:")]),n("Continent",{attrs:{continent:"EU"}}),n("pre",[n("code",{pre:!0},[this._v("// Import any Vue Component. Even other .md files!\n\nimport YouTube from '~/components/YouTube.vue'\n\n// Import any JSON if you need data.\n\nimport data from '~/data/youtube.json'\n\n// Use front-matter fields anywhere.\n\n# {{ $frontmatter.title }}\n> {{ $frontmatter.excerpt }}\n\n// Use your imported Vue Components.\n\n<YouTube :id=\"data.id\" />\n")])])],2)}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof m&&m(d);n.default=d.exports},G2be:function(t,n,e){"use strict";e("wLr5")},UQSp:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},XSun:function(t,n,e){"use strict";var o={props:{continent:{type:String,required:!0}}},i=(e("G2be"),e("KHd+")),r=Object(i.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return this.continent?n("g-image",{staticClass:"continent float-right",attrs:{src:"/images/icons/"+this.continent+".png"}}):this._e()}),[],!1,null,"23e56072",null);n.a=r.exports},wLr5:function(t,n,e){}}]);