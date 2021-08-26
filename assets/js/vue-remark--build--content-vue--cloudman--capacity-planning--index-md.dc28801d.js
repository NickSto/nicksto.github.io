(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{QATO:function(e,a,t){"use strict";t.r(a);var o=t("KHd+"),n=t("UQSp"),i=t("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.default.config.optionMergeStrategies;var r={VueRemarkRoot:n.a},c=function(e){var a=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===s(r[e])&&"function"==typeof r[e].render||"function"==typeof r[e]&&"function"==typeof r[e].options.render?a[e]=r[e]:t[e]=function(){return r[e]}}))},u=i.default.config.optionMergeStrategies,l="__vueRemarkFrontMatter",d={excerpt:null,title:"Capacity Planning"};var h=function(e){e.options[l]&&(e.options[l]=d),i.default.util.defineReactive(e.options,l,d),e.options.computed=u.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},f=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("VueRemarkRoot",[t("div",{staticClass:"toc-wrapper col-md-3"},[t("ul",[t("li",[t("p",[t("a",{attrs:{href:"#usage-scenarios"}},[e._v("Usage Scenarios")])]),t("ul",[t("li",[t("a",{attrs:{href:"#scenario-1-light-usage"}},[e._v("Scenario 1: Light usage")])]),t("li",[t("a",{attrs:{href:"#scenario-2-occasional-but-heavy-usage"}},[e._v("Scenario 2: Occasional but heavy usage")])]),t("li",[t("a",{attrs:{href:"#scenario-3-continuous-but-variable-usage"}},[e._v("Scenario 3: Continuous but variable usage")])]),t("li",[t("a",{attrs:{href:"#mixed-scenarios-and-elasticity"}},[e._v("Mixed Scenarios and Elasticity")])])])]),t("li",[t("p",[t("a",{attrs:{href:"#head-node-and-worker-nodes"}},[e._v("Head Node and Worker Nodes")])])]),t("li",[t("p",[t("a",{attrs:{href:"#platforms"}},[e._v("Platforms")])])])])]),t("div",{staticClass:"body-wrapper col-md-9"},[e._t("/cloudman/header"),e._t("/cloudman/linkbox-horizontal"),t("p",[e._v("This page offers advice on how much cloud infrastructure you will need to run your Galaxy instance.  This of course depends on the magnitude of your data, what type of analysis you are doing, and how consistent you expect your load to be.  Since these will be different for everyone, this page does not offer hard and fast rules, but rather guidelines to help you along.  Fortunately, due to the "),t("em",[e._v("elastic")]),e._v(" nature of CloudMan, configuration can be fairly forgiving.")]),t("p",[t("strong",[e._v("Be Aware:")]),e._v(" The specific configuration details will depend on the cloud "),t("a",{attrs:{href:"/cloudman/capacity-planning/#platforms"}},[e._v("infrastructure vendor and platform")]),e._v(".")]),t("h1",{attrs:{id:"usage-scenarios"}},[t("a",{attrs:{href:"#usage-scenarios","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("Usage Scenarios")]),t("p",[e._v("There are many reasons why you may want to run Galaxy on the cloud.  This page attempts to address these three general scenarios.")]),t("h2",{attrs:{id:"scenario-1-light-usage"}},[t("a",{attrs:{href:"#scenario-1-light-usage","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("Scenario 1: Light usage")]),t("p",[e._v("Scenario 1 is characterized by "),t("strong",[e._v("light usage paired with the desire to avoid system administration.")]),e._v("  In this case you want to use Galaxy for relatively lightweight processing tasks, but you don't want to use a "),t("a",{attrs:{href:"/use/"}},[e._v("shared Galaxy server")]),e._v(", or install your own copy.  Galaxy's cloud images come with more tools and datasets preinstalled than does "),t("a",{attrs:{href:"/main/"}},[e._v("Main")]),e._v(", and far more than a "),t("a",{attrs:{href:"/admin/get-galaxy/"}},[e._v("locally installed Galaxy")]),e._v(".  You may also not want to put your data on a public server.")]),t("h2",{attrs:{id:"scenario-2-occasional-but-heavy-usage"}},[t("a",{attrs:{href:"#scenario-2-occasional-but-heavy-usage","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("Scenario 2: Occasional but heavy usage")]),t("p",[e._v("Scenario 2 is the canonical case for cloud computing: "),t("strong",[e._v("You need heavy-duty computing, but you don't need it all the time, and you don't have access to your own compute cluster.")]),e._v(" In this case, you would only bring up a Galaxy on the cloud on those occasions when you have new datasets to analyze.  Once your analysis is done, you would offload your results and delete the instance.")]),t("h2",{attrs:{id:"scenario-3-continuous-but-variable-usage"}},[t("a",{attrs:{href:"#scenario-3-continuous-but-variable-usage","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("Scenario 3: Continuous but variable usage")]),t("p",[e._v("In this scenario you "),t("strong",[e._v("need a Galaxy instance on a more or less regular basis, with occasional peaks of computation intense analysis.")]),e._v("  In this case, the Galaxy instance is up continuously, but with only a limited number of worker nodes.  However, the number of worker nodes scales up and down with demand.")]),t("h2",{attrs:{id:"mixed-scenarios-and-elasticity"}},[t("a",{attrs:{href:"#mixed-scenarios-and-elasticity","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("Mixed Scenarios and Elasticity")]),t("p",[e._v("Of course there are many combinations of these scenarios.  The cloud is "),t("em",[e._v("elastic")]),e._v(" and there are (at least) two aspects of elasticity at work here.  The first is "),t("em",[e._v("on or off.")]),e._v("  That is, the ability to have (and pay for) a Galaxy instance only when you need it.  The second is the ability to have a small instance most of the time, and to have a large instance only when you need it.")]),t("h1",{attrs:{id:"head-node-and-worker-nodes"}},[t("a",{attrs:{href:"#head-node-and-worker-nodes","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("Head Node and Worker Nodes")]),t("p",[e._v("In a CloudMan based Galaxy cloud configuration you will need to determine two machine configurations: one for the "),t("em",[e._v("head")]),e._v(" node, and one for the "),t("em",[e._v("worker")]),e._v(" nodes.  The "),t("em",[e._v("head")]),e._v(" node implements the Galaxy web server, the backing Galaxy database, and any tools that are not particularly compute intensive (as defined by the tool's wrapper).  "),t("em",[e._v("Worker")]),e._v(" nodes execute compute intensive tools (again, as defined by the tool's wrapper).  The worker nodes are "),t("em",[e._v("elastic")]),e._v(" in CloudMan ‐ they increase and decrease in number to address changes in demand.")]),t("h1",{attrs:{id:"platforms"}},[t("a",{attrs:{href:"#platforms","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("Platforms")]),t("p",[e._v("Each different cloud infrastructures has it's own capacity planning information:")]),t("ul",[t("li",[t("a",{attrs:{href:"/cloudman/aws/capacity-planning/"}},[e._v("Amazon Web Services (AWS) Capacity Planning")])]),t("li",[t("em",[e._v("... (others to be added)")])])])],2)])}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof h&&h(f);a.default=f.exports},UQSp:function(e,a,t){"use strict";a.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);