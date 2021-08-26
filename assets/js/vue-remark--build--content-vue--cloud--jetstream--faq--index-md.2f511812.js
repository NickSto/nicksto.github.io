(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},apOz:function(t,e,o){"use strict";o.r(e);var r=o("KHd+"),a=o("UQSp"),s=o("Kw5r");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.default.config.optionMergeStrategies;var n={VueRemarkRoot:a.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(n).forEach((function(t){"object"===i(n[t])&&"function"==typeof n[t].render||"function"==typeof n[t]&&"function"==typeof n[t].options.render?e[t]=n[t]:o[t]=function(){return n[t]}}))},c=s.default.config.optionMergeStrategies,p="__vueRemarkFrontMatter",u={excerpt:null,title:"Frequently Asked Questions for Galaxy on Jetstream"};var d=function(t){t.options[p]&&(t.options[p]=u),s.default.util.defineReactive(t.options,p,u),t.options.computed=c.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},f=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("div",{staticClass:"toc-wrapper col-md-3"},[o("ul",[o("li",[o("a",{attrs:{href:"#how-do-i-restart-my-jetstream-galaxy-server"}},[t._v("How do I restart my Jetstream Galaxy server?")])]),o("li",[o("a",{attrs:{href:"#where-are-galaxys-log-files"}},[t._v("Where are Galaxy's log files?")])])])]),o("div",{staticClass:"body-wrapper col-md-9"},[o("p",[t._v("See "),o("a",{attrs:{href:"/learn/faq/"}},[t._v("Learn/FAQ")]),t._v(" for questions about using any Galaxy instance.")]),t._t("/cloud/jetstream/linkbox"),o("div",{staticClass:"left"}),o("hr"),o("h2",{attrs:{id:"how-do-i-restart-my-jetstream-galaxy-server"}},[o("a",{attrs:{href:"#how-do-i-restart-my-jetstream-galaxy-server","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("How do I restart my Jetstream Galaxy server?")]),o("p",[t._v("Galaxy server can be restarted from the Jetstream's web interface, Atmosphere. Do so by selecting the server you wish to restart, click the "),o("em",[t._v("Reboot")]),t._v(" button and choose "),o("em",[t._v("Hard Reboot")]),t._v(" option on the popup that shows up. The server will typically take a couple of minutes to reboot with Galaxy automatically starting up.")]),o("img",{attrs:{src:"http://i.imgur.com/LU0fHQM.png",alt:"",width:"300"}}),o("div",{staticClass:"img-sizer",staticStyle:{width:"300px"}},[o("p",[o("img",{attrs:{src:"http://i.imgur.com/2hUQCiD.png"}})])]),o("hr"),o("h2",{attrs:{id:"where-are-galaxys-log-files"}},[o("a",{attrs:{href:"#where-are-galaxys-log-files","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Where are Galaxy's log files?")]),o("p",[t._v("Log files are available for problem diagnosis. Each launched server will have their respective logs in the same locations, which are as follows:")]),o("table",[o("thead",[o("tr",[o("th",[t._v("Log path")]),o("th",[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[o("em",[t._v("/opt/galaxy/logs/galaxy_web0.log")])]),o("td",[t._v("This is the main Galaxy process server log.")])]),o("tr",[o("td",[o("em",[t._v("/opt/galaxy/logs/slurmctld.log")])]),o("td",[t._v("This is the log file for the SLURM job manager's control process.")])]),o("tr",[o("td",[o("em",[t._v("/opt/galaxy/logs/slurmd.log")])]),o("td",[t._v("This is the log file for the SLURM job manager's job runner process.")])]),o("tr",[o("td",[o("em",[t._v("/var/log/nginx/")])]),o("td",[t._v("This directory contains log files for the NGINX web server.")])]),o("tr",[o("td",[o("em",[t._v("/var/log/supervisor/")])]),o("td",[t._v("This directory contains log files for Supervisor process, which is used to manage Galaxy and several other Galaxy-related processes running on this server.")])]),o("tr",[o("td",[o("em",[t._v("/var/log/postgresql/")])]),o("td",[t._v("This directory contains log files for the PostgreSQL database process used by Galaxy.")])]),o("tr",[o("td",[o("em",[t._v("/var/log/proftpd/")])]),o("td",[t._v("This directory contains log files for the ProFTPd process used to upload data to Galaxy via FPT.")])])])])],2)])}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof d&&d(f);e.default=f.exports}}]);