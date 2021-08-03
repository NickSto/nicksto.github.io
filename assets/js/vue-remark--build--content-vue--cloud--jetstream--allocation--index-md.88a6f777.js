(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"3iQF":function(t,e,a){t.exports=a.p+"assets/img/jetstream-os-api-creds.1003f5a5.png"},AM62:function(t,e,a){"use strict";a.r(e);var o=a("KHd+"),n=a("UQSp"),r=a("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},l=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===s(i[t])&&"function"==typeof i[t].render||"function"==typeof i[t]&&"function"==typeof i[t].options.render?e[t]=i[t]:a[t]=function(){return i[t]}}))},c=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null};var d=function(t){t.options[u]&&(t.options[u]=p),r.a.util.defineReactive(t.options,u,p),t.options.computed=c.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},h=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[t._t("/cloud/jetstream/linkbox"),o("h2",{attrs:{id:"requesting-an-allocation"}},[o("a",{attrs:{href:"#requesting-an-allocation","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Requesting an allocation")]),o("p",[t._v("For the time being, it is necessary for each Jetstream user to request a new resource allocation or be added to someone's allocation. This page covers the process of getting an XSEDE "),o("em",[t._v("Startup")]),t._v(" type of allocation. You will need an XSEDE account before you can proceed (visit "),o("a",{attrs:{href:"https://www.xsede.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.xsede.org/")]),t._v(" to create one).")]),o("ul",[o("li",[t._v("Start your allocation process by visiting "),o("a",{attrs:{href:"http://jetstream-cloud.org/allocations.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jetstream-cloud.org/allocations.php")]),t._v(" and clicking on "),o("em",[t._v("Submit and manage allocation requests")]),t._v(" link. After you logged in using your XSEDE account, choose "),o("em",[t._v("Startup")]),t._v(" type of allocation.")])]),o("img",{attrs:{src:"http://i.imgur.com/8RPpGbC.png",alt:"",width:"400"}}),t._v("\n* Next, set your role as a PI and click Next.\n"),o("img",{attrs:{src:"http://i.imgur.com/xqfxW30.png",alt:"",width:"400"}}),t._v("\n* In the next step, you will need to provide a title for your allocation and an abstract about your research. 100 words is sufficient. \n* Choose *Jetstream* as your desired target resource type and supply your anticipated usage for the duration of the project in [Service Units (SUs)](https://portal.xsede.org/knowledge-base/-/kb/document/bazo); projects are awarded on an annual basis so be careful not to forget about your instance left running when not in use. Note that 1 virtual CPU on an Jetstream instance corresponds to 1 SU. So, if you launch a 8 CPU instance, you will be using 8 SUs per each hour the instance is running. So, do some math and try to estimate how many SUs will you need each month.\n"),o("img",{attrs:{src:"http://i.imgur.com/BS9h6Kn.png",alt:"",width:"400"}}),t._v("\n* You will also ned to supply your CV. For *Startup* type allocation, adding supporting grants and publications is optional but feel free to add any.\n"),o("div",{staticClass:"img-sizer",staticStyle:{width:"150px"}},[t._v("![](http://i.imgur.com/jlVRiTk.png)")]),o("div",{staticClass:"img-sizer",staticStyle:{width:"150px"}},[t._v("![](http://i.imgur.com/e1r3q0a.png)")]),o("div",{staticClass:"img-sizer",staticStyle:{width:"150px"}},[t._v("![](http://i.imgur.com/IfMUenh.png)")]),o("ul",[o("li",[t._v("Finally, submit your application and wait approximately one business day for the allocation request to be approved.")])]),o("div",{staticClass:"img-sizer",staticStyle:{width:"400px"}},[o("p",[o("img",{attrs:{src:"http://i.imgur.com/BgL7Phr.png"}})])]),o("h2",{attrs:{id:"api-access"}},[o("a",{attrs:{href:"#api-access","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("API access")]),o("p",[t._v("To use CloudLaunch ("),o("a",{attrs:{href:"https://beta.launch.usegalaxy.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://beta.launch.usegalaxy.org/")]),t._v(") or access the Jetstream\nAPI programmatically, it is necessary to retrieve API credentials:")]),o("ol",[o("li",[t._v("Log onto the OpenStack dashboard\nVisit "),o("a",{attrs:{href:"https://iu.jetstream-cloud.org/dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://iu.jetstream-cloud.org/dashboard")]),t._v(" and login using your TACC\ncredentials. TACC credentials are the ones you can obtain and/or login at\n"),o("a",{attrs:{href:"https://portal.xsede.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://portal.xsede.org/")]),t._v(". The "),o("em",[t._v("Domain")]),t._v(" field is always set to "),o("em",[t._v("tacc")]),t._v(".")])]),o("a",{attrs:{href:"/cloud/jetstream/allocation/jetstream-os-dashboard.png"}},[o("img",{attrs:{src:a("fOHk"),alt:"",width:"75%"}})]),o("br"),o("br"),o("ol",{attrs:{start:"2"}},[o("li",[t._v("Navigate to the "),o("em",[t._v("API Access")]),t._v(" page and download the "),o("em",[t._v("OpenStack RC File v3")]),t._v(":")])]),o("a",{attrs:{href:"/cloud/jetstream/allocation/jetstream-os-api-creds.png"}},[o("img",{attrs:{src:a("3iQF"),alt:"",width:"75%"}})]),o("br"),o("br"),o("p",[t._v("By default, when using this file, you will be prompted for your TACC account\npassword. A more convenient but less secure approach is to save the password\ndirectly in the file by editing it as follows (note the two lines being\ncommented and the value of "),o("code",{pre:!0},[t._v("OS_PASSWORD")]),t._v(" variable set):")]),o("a",{attrs:{href:"/cloud/jetstream/allocation/rc.png"}},[o("img",{attrs:{src:a("Vs3c"),alt:"",width:"75%"}})]),o("br"),o("br"),o("h3",{attrs:{id:"using-api-credentials-for-cloudlaunch"}},[o("a",{attrs:{href:"#using-api-credentials-for-cloudlaunch","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Using API credentials for CloudLaunch")]),o("p",[t._v("After you have downloaded the API access credentials, you can use them to launch\ninstance using CloudLaunch. Head to "),o("a",{attrs:{href:"https://beta.launch.usegalaxy.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://beta.launch.usegalaxy.org/")]),t._v(" and\nchoose an application you would like to launch. Note that not all applications\nsupport all clouds.")]),o("p",[t._v("On the application launch page, you will need to provide your credentials.\nThe easiest method is to load them from the file we downloaded in the previous\nstep.")]),o("a",{attrs:{href:"/cloud/jetstream/allocation/cl-load-creds-1.png"}},[o("img",{attrs:{src:a("a007"),alt:"",width:"75%"}})]),o("br"),o("br"),o("p",[t._v("Once the file is loaded, fill in any missing fields and validate the\ncredentials.")]),o("a",{attrs:{href:"/cloud/jetstream/allocation/cl-load-creds-2.png"}},[o("img",{attrs:{src:a("ejl/"),alt:"",width:"75%"}})]),o("br"),o("br"),o("p",[t._v("If the credentials authenticate, click "),o("em",[t._v("Next")]),t._v(" to proceed.")]),o("a",{attrs:{href:"/cloud/jetstream/allocation/cl-load-creds-3.png"}},[o("img",{attrs:{src:a("lmGt"),alt:"",width:"75%"}})]),o("br"),o("br"),o("p",[t._v("You also have an option to save the uploaded credentials to the server\nand in the future you will be able to just select the credentials from\nthe appropriate menu:")]),o("a",{attrs:{href:"/cloud/jetstream/allocation/cl-load-creds-4.png"}},[o("img",{attrs:{src:a("WA7b"),alt:"",width:"75%"}})]),o("br"),o("br"),o("p",[o("strong",[t._v("Note")]),t._v(" that for the time being, if you launch instances via CloudLaunch, it will be\nnecessary to shut them down using the Jetstream OpenStack Dashboard\n("),o("a",{attrs:{href:"https://iu.jetstream-cloud.org/dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://iu.jetstream-cloud.org/dashboard")]),t._v(").")])],2)}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof d&&d(h);e.default=h.exports},UQSp:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},Vs3c:function(t,e,a){t.exports=a.p+"assets/img/rc.158c7f4f.png"},WA7b:function(t,e,a){t.exports=a.p+"assets/img/cl-load-creds-4.50252708.png"},a007:function(t,e,a){t.exports=a.p+"assets/img/cl-load-creds-1.9a083468.png"},"ejl/":function(t,e,a){t.exports=a.p+"assets/img/cl-load-creds-2.deed6163.png"},fOHk:function(t,e,a){t.exports=a.p+"assets/img/jetstream-os-dashboard.b321652e.png"},lmGt:function(t,e,a){t.exports=a.p+"assets/img/cl-load-creds-3.c91bc032.png"}}]);