(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{LGZw:function(a,e,t){"use strict";t.r(e);var o=t("KHd+"),n=t("UQSp"),i=t("Kw5r");function r(a){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}i.default.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},l=function(a){var e=a.options.components=a.options.components||{},t=a.options.computed=a.options.computed||{};Object.keys(s).forEach((function(a){"object"===r(s[a])&&"function"==typeof s[a].render||"function"==typeof s[a]&&"function"==typeof s[a].options.render?e[a]=s[a]:t[a]=function(){return s[a]}}))},u=i.default.config.optionMergeStrategies,c="__vueRemarkFrontMatter",d={excerpt:null,title:"Galaxy CloudMan"};var h=function(a){a.options[c]&&(a.options[c]=d),i.default.util.defineReactive(a.options,c,d),a.options.computed=u.computed({$frontmatter:function(){return a.options[c]}},a.options.computed)},p=Object(o.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("VueRemarkRoot",[t("div",{staticClass:"toc-wrapper col-md-3"},[t("ul",[t("li",[t("a",{attrs:{href:"#about-galaxy-cloudman"}},[a._v("About Galaxy CloudMan")])]),t("li",[t("a",{attrs:{href:"#when-to-use-galaxy-cloudman"}},[a._v("When to use Galaxy CloudMan")])]),t("li",[t("a",{attrs:{href:"#getting-started"}},[a._v("Getting started")])]),t("li",[t("a",{attrs:{href:"#determining-the-size-of-your-cloud-cluster"}},[a._v("Determining the size of your cloud cluster")])]),t("li",[t("a",{attrs:{href:"#customizing-your-cloud-cluster"}},[a._v("Customizing your cloud cluster")])]),t("li",[t("a",{attrs:{href:"#a-note-about-costs"}},[a._v("A note about costs")])]),t("li",[t("a",{attrs:{href:"#galaxy-amis"}},[a._v("Galaxy AMIs")])]),t("li",[t("a",{attrs:{href:"#citing-and-publications"}},[a._v("Citing and Publications")])])])]),t("div",{staticClass:"body-wrapper col-md-9"},[t("div",{staticClass:"center"},[t("img",{attrs:{src:"/images/galaxy-logos/cloudman-logo.jpg",alt:"CloudMan",width:"60%"}})]),t("br"),a._t("/cloudman/linkbox-horizontal"),t("p",[a._v("There are several choices for using Galaxy.  This page describes using Galaxy on a "),t("em",[t("a",{attrs:{href:"https://www.tcnp3.com/home/cloud-technology/what-is-cloud-computing-infographic/",target:"_blank",rel:"noopener noreferrer"}},[a._v("cloud infrastructure")])]),a._v(" using CloudMan (see below). For other options, see the "),t("a",{attrs:{href:"/use/"}},[a._v("Galaxy Platform Directory")]),a._v(" and "),t("a",{attrs:{href:"/cloud/"}},[a._v("Cloud")]),a._v(".")]),t("h2",{attrs:{id:"about-galaxy-cloudman"}},[t("a",{attrs:{href:"#about-galaxy-cloudman","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),a._v("About Galaxy CloudMan")]),t("p",[a._v("Galaxy CloudMan enables Galaxy to be quickly setup on cloud computing\nresources. CloudMan is a "),t("em",[a._v("Cloud Man")]),a._v("ager that orchestrates all of the steps\nrequired to provision, configure, manage, and share Galaxy on a cloud computing\ninfrastructure using just a web browser. An instance of Galaxy CloudMan behaves like\na private instance of Galaxy and offers the benefits of cloud computing\nresource availability, elasticity and "),t("a",{attrs:{href:"https://www.techopedia.com/definition/26951/pay-as-you-go-payg",target:"_blank",rel:"noopener noreferrer"}},[a._v("pay-as-you-go")]),a._v("\nresource ownership model.")]),t("p",[a._v("Galaxy available via CloudMan comes pre-configured with the production settings\nand is ready for processing data as soon as it is launched. The process  of\nusing Galaxy CloudMan requires a virtual server to be launched on a cloud\nprovider, which only takes a few minutes. Once launched, CloudMan sets up a\nvirtual cluster on the created server that can be dynamically scaled to meet\nthe current computational demand. Once the need for the compute resources\nsubsides, the acquired server(s) can be shut down. With such a paradigm, one\npays only for the resources they need and use.")]),t("h2",{attrs:{id:"when-to-use-galaxy-cloudman"}},[t("a",{attrs:{href:"#when-to-use-galaxy-cloudman","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),a._v("When to use Galaxy CloudMan")]),t("p",[a._v("The following is a non-exhaustive list of scenarios when it is beneficial to use Galaxy on the Cloud:")]),t("ul",[t("li",[a._v("Do not want to spend time setting up a Galaxy instance")]),t("li",[a._v("Need to customize a Galaxy instance with new tools or genome reference data")]),t("li",[a._v("Have run up against the quotas on a public server")]),t("li",[a._v("Have variable or high requirements for compute or storage resources")])]),t("h2",{attrs:{id:"getting-started"}},[t("a",{attrs:{href:"#getting-started","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),a._v("Getting started")]),t("p",[a._v("To start your own "),t("em",[a._v("Galaxy CloudMan")]),a._v(", see the "),t("a",{attrs:{href:"/cloudman/getting-started/"}},[a._v("Getting Started")]),a._v(" page.")]),t("h2",{attrs:{id:"determining-the-size-of-your-cloud-cluster"}},[t("a",{attrs:{href:"#determining-the-size-of-your-cloud-cluster","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),a._v("Determining the size of your cloud cluster")]),t("p",[a._v("Cloud computing allows your cloud cluster to be variable in size and capacity. See "),t("a",{attrs:{href:"/cloudman/capacity-planning/"}},[a._v("this page")]),a._v(" for some guidelines on how to decide what is right for you.")]),t("h2",{attrs:{id:"customizing-your-cloud-cluster"}},[t("a",{attrs:{href:"#customizing-your-cloud-cluster","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),a._v("Customizing your cloud cluster")]),t("p",[a._v("If you are interested in running your own version of Galaxy and/or tools on the cloud while utilizing all the automation and functionality provided by CloudMan, "),t("a",{attrs:{href:"/cloudman/customizing/"}},[a._v("this page")]),a._v(" explains how to do it.")]),t("h2",{attrs:{id:"a-note-about-costs"}},[t("a",{attrs:{href:"#a-note-about-costs","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),a._v("A note about costs")]),t("p",[a._v("Amazon Web Services (AWS) is a pay-as-you-go service that requires a valid credit\ncard before resources can be acquired. Rates for Amazon EC2 can be found\n"),t("a",{attrs:{href:"http://aws.amazon.com/ec2/pricing/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here")]),a._v(". To see how much using Amazon cloud\nmight cost, you can use the "),t("a",{attrs:{href:"http://calculator.s3.amazonaws.com/calc5.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("AWS cost calculator")]),a._v(".\nWhen calculating the total cost, in addition to the EC2 instance(s), you will\nhave data volumes associated with your cluster where all of your Galaxy data\nwill be stored.")]),t("p",[a._v("Community cloud providers, such as the "),t("a",{attrs:{href:"http://jetstream-cloud.org/",target:"_blank"}},[a._v("Jetstream cloud")]),a._v(" in the US or the "),t("a",{attrs:{href:"https://nectar.org.au/research-cloud/",target:"_blank"}},[a._v("NeCTAR cloud")]),a._v("\nin Australia offer free access to cloud resources but require an active project\nallocation for which ones needs to apply.")]),t("h2",{attrs:{id:"galaxy-amis"}},[t("a",{attrs:{href:"#galaxy-amis","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),a._v("Galaxy AMIs")]),t("p",[t("strong",[a._v("Current AMI:")])]),t("ul",[t("li",[a._v("AMI: ami-3be8cd2c")]),t("li",[a._v("Name: Galaxy CloudMan 161101b2 (active dates: 2016-11-01 -> present)")])]),t("p",[a._v("Note that the current AMI represents the environment required to run CloudMan (in the format of a machine image) and "),t("em",[a._v("the machine image release date does not represent the most recent update or version of either CloudMan or Galaxy")]),a._v(". Versions of those tools can be seen (and automatically updated, with the Update button in the CloudMan Admin page) once an instance has been instantiated (we are also looking into a more explicit form of making this information available).")]),t("p",[t("strong",[a._v("Deprecated AMIs")])]),t("ul",[t("li",[a._v("AMI: ami-b45e59de")]),t("li",[a._v("Name: Galaxy-CloudMan-1457720469 (active dates: 2016-03-24 -> 2016-11-01)")]),t("li",[a._v("AMI: ami-d5246abf")]),t("li",[a._v("Name: Galaxy-CloudMan-1449500413 (active dates: 2015-12-18 -> 2016-03-24)")]),t("li",[a._v("AMI: ami-d1c77fba")]),t("li",[a._v("Name: Galaxy-CloudMan-1440625733 (active dates: 2015-09-03 -> 2015-12-18)")]),t("li",[a._v("AMI: ami-a7dbf6ce")]),t("li",[a._v("Name: Galaxy CloudMan 2.3 (active dates: 2014-01-07 -> 2015-09-03)")]),t("li",[a._v("AMI: ami-118bfc78")]),t("li",[a._v("Name: 861460482541/Galaxy CloudMan 2.0")]),t("li",[a._v("AMI: ami-da58aab3")]),t("li",[a._v("Name: 861460482541/galaxy-cloudman-2011-03-22")]),t("li",[a._v("AMI: ami-9a7485f3")]),t("li",[a._v("Name: 861460482541/galaxy-cloudman-2010-01-12")]),t("li",[a._v("AMI: ami-228a7e4b")]),t("li",[a._v("Name: 115971652512/galaxy-cloudman-2010-10-08")]),t("li",[a._v("AMI: ami-ed03ed84")]),t("li",[a._v("Name: 115971652512/galaxy-2010-04-20_2")])]),t("p",[a._v("Note, the AMI ami-561bc93f, 072133624695/galaxy-cloudman-2012-02-26 is from unknown origin, and not supported.")]),t("h2",{attrs:{id:"citing-and-publications"}},[t("a",{attrs:{href:"#citing-and-publications","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),a._v("Citing and Publications")]),t("p",[a._v("If "),t("em",[a._v("Galaxy on the Cloud")]),a._v(" has been significant to a project that has led to an academic publication, please acknowledge the contribution by citing the "),t("a",{attrs:{href:"http://www.nature.com/nbt/journal/v29/n11/full/nbt.2028.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("following paper")]),a._v(":")]),t("ul",[t("li",[a._v('Afgan E., Baker D., Coraor N., Goto H., Paul I.M., Makova K.D., Nekrutenko A., Taylor J., "Harnessing cloud computing with Galaxy Cloud," Nature Biotechnology, Vol 29, Issue 11, 2011.')])]),t("p",[a._v("Thank you!")]),t("p",[a._v("For a complete list of publications and presentations linked to CloudMan and Galaxy on the Cloud, see "),t("a",{attrs:{href:"http://cloudman.irb.hr/publications",target:"_blank",rel:"noopener noreferrer"}},[a._v("this page")]),a._v(".")])],2)])}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof h&&h(p);e.default=p.exports},UQSp:function(a,e,t){"use strict";e.a={name:"VueRemarkRoot",render:function(a){return a("div",null,this.$slots.default)}}}}]);