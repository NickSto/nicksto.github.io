(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{UQSp:function(t,o,e){"use strict";o.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},"ecl+":function(t,o,e){"use strict";e.r(o);var n=e("KHd+"),r=e("UQSp"),i=e("Kw5r");function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.default.config.optionMergeStrategies;var p={VueRemarkRoot:r.a},c=function(t){var o=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===u(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?o[t]=p[t]:e[t]=function(){return p[t]}}))},f=i.default.config.optionMergeStrategies,s="__vueRemarkFrontMatter",a={excerpt:"Lorem Ipsum is simply dummy text.",title:"A cool title",components:!0};var m=function(t){t.options[s]&&(t.options[s]=a),i.default.util.defineReactive(t.options,s,a),t.options.computed=f.computed({$frontmatter:function(){return t.options[s]}},t.options.computed)},l=Object(n.a)({},(function(){var t=this.$createElement,o=this._self._c||t;return o("VueRemarkRoot",[o("pre",[o("code",{pre:!0},[this._v("// Import any Vue Component. Even other .md files!\n\nimport YouTube from '~/components/YouTube.vue'\n\n// Import any JSON if you need data.\n\nimport data from '~/data/youtube.json'\n\n// Use front-matter fields anywhere.\n\n# {{ $frontmatter.title }}\n> {{ $frontmatter.excerpt }}\n\n// Use your imported Vue Components.\n\n<YouTube :id=\"data.id\" />\n")])]),o("p",[this._v("Get it to include AWSLogo.png in the Vue build directory.")])])}),[],!1,null,null,null);"function"==typeof c&&c(l),"function"==typeof m&&m(l);o.default=l.exports}}]);