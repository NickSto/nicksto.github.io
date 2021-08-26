(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},w6zl:function(t,e,o){"use strict";o.r(e);var a=o("KHd+"),n=o("UQSp"),i=o("Kw5r");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.default.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===r(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?e[t]=s[t]:o[t]=function(){return s[t]}}))},p=i.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",c={excerpt:null,title:"Automation strategies for Data, Tools, & Config"};var d=function(t){t.options[u]&&(t.options[u]=c),i.default.util.defineReactive(t.options,u,c),t.options.computed=p.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},f=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("div",{staticClass:"toc-wrapper col-md-3"},[o("ul",[o("li",[o("a",{attrs:{href:"#notes"}},[t._v("Notes")])])])]),o("div",{staticClass:"body-wrapper col-md-9"},[t._t("/events/gcc2012/page-header"),t._t("/events/gcc2012/linkbox"),o("p",[t._v("A proposed "),o("a",{attrs:{href:"/events/gcc2012/program/breakouts/automation-strategies//"}},[t._v("Breakout Session")]),t._v(" for "),o("a",{attrs:{href:"/events/gcc2012/"}},[t._v("GCC2012")]),t._v(", organized by Brad Chapman, "),o("a",{attrs:{href:"/people/john-chilton/"}},[t._v("John Chilton")]),t._v(", "),o("a",{attrs:{href:"/people/enis-afgan/"}},[t._v("Enis Afgan")]),t._v(", "),o("a",{attrs:{href:"/people/dave-bouvier/"}},[t._v("Dave Bouvier")]),t._v(" and "),o("a",{attrs:{href:"/people/jennifer-jackson/"}},[t._v("Jen Jackson")])]),o("p",[t._v("This involves turning the base Galaxy into a production machine:")]),o("ul",[o("li",[t._v("download of associated genomes and data files,")]),o("li",[t._v("Galaxy tool and executable installation,")]),o("li",[t._v("setup of configuration files.")])]),o("p",[t._v("There are, at least, three different overlapping attempts at this:")]),o("ul",[o("li",[o("a",{attrs:{href:"https://bitbucket.org/jmchilton/galaxy-vm-launcher",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bitbucket.org/jmchilton/galaxy-vm-launcher")])]),o("li",[o("a",{attrs:{href:"https://bitbucket.org/afgane/mi-deployment",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bitbucket.org/afgane/mi-deployment")])]),o("li",[o("a",{attrs:{href:"https://github.com/chapmanb/cloudbiolinux/blob/master/data_fabfile.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/chapmanb/cloudbiolinux/blob/master/data_fabfile.py")])])]),o("p",[t._v("This also dovetails nicely with work within the Galaxy Team to address some of these issues as well.")]),o("p",[t._v("We would like to consolidate these into a single community maintained package. This breakout will lay out a foundation for this.")]),o("h1",{attrs:{id:"notes"}},[o("a",{attrs:{href:"#notes","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Notes")]),o("p",[t._v("From Brad Chapman.")]),o("p",[t._v("During the Galaxy breakout sessions, I joined folks who've been working on strategies to automate post-Galaxy tool and data installation. The goal was to consolidate implementations that install reference data, update Galaxy location files, and eventually install tools and software. The overall goal is to make moving to a production Galaxy instance as easy as getting up and running using "),o("code",{pre:!0},[t._v("sh run.sh")]),t._v(".")]),o("p",[t._v("The work plan moving forward is:")]),o("ul",[o("li",[o("p",[t._v("Community members will look at building tools that include dependencies and sort out any issues that might arise with independent dependency installation scripts through Fabric.")])]),o("li",[o("p",[t._v("Galaxy team is working on exposing tool installation and data installation scripts through the API to allow access through automated scripts. The "),o("a",{attrs:{href:"https://bitbucket.org/hbc/galaxy-central-hbc/src/3127de4501ee/lib/galaxy/web/controllers/data_admin.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("current data installation code")]),t._v(".")])]),o("li",[o("p",[t._v("Community is going to work on consolidating preparation of pre-Galaxy base machines using the CloudBioLinux framework. The short term goal is to use CloudBioLinux flavors to generalize existing scripts. Longer term, we will explore moving to a framework like Chef that handles high level configuration details.")])])]),o("p",[t._v("It was great to bring all these projects together and I'm looking forward to building well supported approaches to automating the full Galaxy installation process.")])],2)])}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof d&&d(f);e.default=f.exports}}]);