(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{"T/ag":function(t,e,o){"use strict";o.r(e);var n=o("KHd+"),r=o("UQSp"),i=o("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var a={VueRemarkRoot:r.a},u=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(a).forEach((function(t){"object"===s(a[t])&&"function"==typeof a[t].render||"function"==typeof a[t]&&"function"==typeof a[t].options.render?e[t]=a[t]:o[t]=function(){return a[t]}}))},c=i.a.config.optionMergeStrategies,f="__vueRemarkFrontMatter",p={excerpt:null};var l=function(t){t.options[f]&&(t.options[f]=p),i.a.util.defineReactive(t.options,f,p),t.options.computed=c.computed({$frontmatter:function(){return t.options[f]}},t.options.computed)},m=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[t._t("/admin/tools/linkbox"),t._v("\n# Tool Requirements\n"),o("p",[t._v("A Galaxy tool can require other pieces of software in order to do its job. This does not mean that you as the Galaxy user need to do something.")]),o("p",[t._v("The tool developers specify these requirements within the "),o("a",{attrs:{href:"/src/admin/tools/tool-config-syntax/index.md#a3crequirements3e_tag_set"}},[t._v("tool definition")]),t._v(". These requirements along with their specified versions are visible to the user in the Galaxy UI when looking at the tool form for "),o("strong",[t._v("informational purposes")]),t._v(".")]),o("p",[t._v("It is important to understand that the actual version of the tool that will be run after you hit "),o("em",[t._v("Execute")]),t._v(" on the tool form depends on the configuration of the Galaxy instance and its environment. To be sure what version of the software was actually run you have to check the output dataset in the history - many tools will include the exact version of the software that was run there. ")]),o("p",[t._v("An example of requirements version information:\n"),o("img",{attrs:{src:"/src/tools/requirements/requirement_versions.png"}})])],2)}),[],!1,null,null,null);"function"==typeof u&&u(m),"function"==typeof l&&l(m);e.default=m.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);