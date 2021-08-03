(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{OiYd:function(t,e,n){"use strict";n.r(e);var i=n("KHd+"),a=n("UQSp"),r=n("Kw5r");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var s={VueRemarkRoot:a.a},l=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===o(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?e[t]=s[t]:n[t]=function(){return s[t]}}))},c=r.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",d={excerpt:null,title:"Galaxy Admin Training: Basic Topics"};var p=function(t){t.options[h]&&(t.options[h]=d),r.a.util.defineReactive(t.options,h,d),t.options.computed=c.computed({$frontmatter:function(){return t.options[h]}},t.options.computed)},u=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[t._t("/events/admin-training2016/header"),n("div",{staticClass:"right"},[t._t("/events/admin-training2016/linkbox")],2),n("p",[n("strong",[t._v("November 7-8, Salt Lake City Library")])]),n("p",[t._v("This two day introductory session will introduce participants to what you need to know to get a Galaxy server up and running on a standalone server. You'll also learn and how to extend your Galaxy with your own tools and tools from the community, and how to define reference data in your server as well.")]),n("h2",{attrs:{id:"prerequisites"}},[n("a",{attrs:{href:"#prerequisites","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Prerequisites")]),n("p",[n("strong",[t._v("Please review the prerequisites carefully before "),n("a",{attrs:{href:"/src/events/admin-training2016/registration/index.md"}},[t._v("registering")]),t._v(".")]),t._v("  If you arrive without meeting the prerequisites then the workshop will be a frustrating experience.")]),n("h3",{attrs:{id:"comfortable-with-the-unixlinux-command-line"}},[n("a",{attrs:{href:"#comfortable-with-the-unixlinux-command-line","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Comfortable with the Unix/Linux command line")]),n("p",[t._v("Most of the workshop will happen at the Linux command line.  "),n("em",[t._v("If you aren’t comfortable with this before you arrive, then you will be lost the entire time.")]),t._v("  How comfortable do you need to be?  Here’s a sampling of commands and concepts that you should be comfortable with:")]),n("pre",[n("code",{pre:!0},[t._v("cd, mkdir, rmdir, ls\ntar, gzip\ncp, mv, rm, chmod, ln \n~, .., ./, /tmp\ncat, tail, less\nman\n")])]),n("p",[t._v("Note: "),n("em",[t._v("This is not an exhaustive list (or even a proper subset) of the commands that will be used in the workshop.")]),t._v("  They are included here to give you an idea of the depth of knowledge that is required.")]),n("h3",{attrs:{id:"competent-in-a-unixlinux-text-editor"}},[n("a",{attrs:{href:"#competent-in-a-unixlinux-text-editor","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Competent in a Unix/Linux text editor")]),n("p",[t._v("Linux has several text editors available in it.  You’ll need to be competent in at least one of them before the workshop starts.  Organizers will make sure that these editors are available on the Linux images we use in the workshop:")]),n("ul",[n("li",[n("a",{attrs:{href:"https://www.nano-editor.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nano")]),t._v(": Simple and functional.  Gets the job done.")]),n("li",[n("a",{attrs:{href:"https://www.gnu.org/software/emacs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emacs")]),t._v(": Powerful and a wee bit scary.")]),n("li",[n("a",{attrs:{href:"http://www.vim.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VIM")]),t._v(": Powerful, efficient, and more than a wee bit scary.")])]),n("h3",{attrs:{id:"some-experience-with-linux-package-management"}},[n("a",{attrs:{href:"#some-experience-with-linux-package-management","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Some experience with Linux Package Management")]),n("p",[t._v("You don’t need to be an expert at Linux package management, but you do need to have some experience at installing and upgrading packages on a Linux system.")]),n("p",[t._v("We’ll be using Ubuntu based images during the workshop, which means we’ll be using "),n("strong",[n("a",{attrs:{href:"https://help.ubuntu.com/community/AptGet/Howto",target:"_blank",rel:"noopener noreferrer"}},[t._v("apt")])]),t._v(" to do package management.  Get to know it.")]),n("h3",{attrs:{id:"hardware-and-software"}},[n("a",{attrs:{href:"#hardware-and-software","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Hardware and Software")]),n("p",[t._v("All participants should bring a wifi-enabled laptop with ")]),n("ul",[n("li",[t._v("at least 4GB of memory (more is better)")]),n("li",[t._v("Software to access the command line of a Linux server."),n("ul",[n("li",[t._v("If you are running Linux or Mac OS, then you already have this.")]),n("li",[t._v("If you are running Windows than you’ll need to get something like putty installed before the workshop.")])])]),n("li",[t._v("A recent version of either the Chrome or Firefox web browser installed.")])]),n("h2",{attrs:{id:"topics"}},[n("a",{attrs:{href:"#topics","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Topics")]),n("p",[t._v("This two day workshop will cover the big picture, and installation, configuration, and customization basics.  We'll present these topics by exploring several specific examples in detail.  Participants will finish this workshop with a solid understanding of how to set up and customize a Galaxy instance running on a desktop or standalone server.")]),n("ul",[n("li",[t._v("Deployment platform options")]),n("li",[t._v("Installing a basic Galaxy server ")]),n("li",[t._v("Database choices and configuration  (SQLite & PostgreSQL)")]),n("li",[t._v("Web server choices and configuration  (NGINX & Apache)")]),n("li",[t._v("Identifying and installing well-defined tools from the Galaxy Tool Shed")]),n("li",[t._v("Importing and defining reference genomes")]),n("li",[t._v("Defining users, groups, and quotas")]),n("li",[t._v("Basics of Tool Definition")]),n("li",[t._v("Enabling extensions: FTP & SMTP")]),n("li",[t._v("Introduction to Galaxy Architecture")])]),n("h2",{attrs:{id:"schedule"}},[n("a",{attrs:{href:"#schedule","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Schedule")]),n("p",[n("em",[t._v("This is a draft schedule and is a work in progress. Topic order and specific start and end times are likely to change.")])]),n("h3",{attrs:{id:"monday"}},[n("a",{attrs:{href:"#monday","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Monday")]),n("table",[n("tr",{staticClass:"th"},[n("th",[t._v(" Time ")]),n("th",[t._v(" Topic ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 9:15am ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Checkin and Coffee")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 9:30am ")]),n("td",[t._v(" Welcome and intro")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 10:00am ")]),n("td",[t._v(" Deployment and platform options ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 10:20am ")]),n("td",[t._v(" Get a basic Galaxy server up and running. ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 11:00am ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Break")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 11:20am ")]),n("td",[t._v(" Database choices and configuration. Introduction to "),n("a",{attrs:{href:"https://www.postgresql.org/"}},[t._v("PostgreSQL")]),t._v(". ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 12:30pm ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Lunch Break")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 1:30pm ")]),n("td",[t._v(" Web server choices and configuration. Introduction to "),n("a",{attrs:{href:"https://nginx.org/en/"}},[t._v("NGINX")]),t._v(". ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 3:20pm ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Break")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 3:40pm ")]),n("td",[t._v(" Introduction to the Galaxy Tool Shed: Identifying and installing well-defined tools. ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 4:50pm ")]),n("td",[t._v(" Defining and importing genomes ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 5:40pm ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Dinner Break")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 7:00pm ")]),n("td",[t._v(" Defining and importing genomes, cont.; Data Managers ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 8:30pm ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Done")])])])]),n("h3",{attrs:{id:"tuesday"}},[n("a",{attrs:{href:"#tuesday","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Tuesday")]),n("table",[n("tr",{staticClass:"th"},[n("th",[t._v(" Time ")]),n("th",[t._v(" Topic ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 9:15am ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Coffee")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 9:30am ")]),n("td",[t._v(" Welcome, Questions ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 9:45am ")]),n("td",[t._v(" Extending your installation: Enabling FTP & SMTP ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 11:00am ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Break")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 11:20am ")]),n("td",[t._v(" Users, Groups, and Quotas ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 12:20pm ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Lunch Break")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 1:20pm ")]),n("td",[t._v(" Tool Definition Basics & Planemo ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 3:20pm ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Break")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 3:40pm ")]),n("td",[t._v(" Tool Definition Basics & Planemo, cont. ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 5:40pm ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Dinner Break")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 7:00pm ")]),n("td",[t._v(" Introduction to Galaxy Architecture "),n("span",{staticStyle:{"font-size":"smaller"}},[t._v(" (Joint session with the "),n("a",{attrs:{href:"/src/events/admin-training2016/advanced-session/index.md"}},[t._v("Advanced Topics session")]),t._v(") ")])])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 8:20pm ")]),n("td",[t._v(" Wrap-up ")])]),n("tr",[n("th",{staticStyle:{"text-align":"right"}},[t._v(" 8:30pm ")]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Done")])])])]),n("div",{staticClass:"right"},[n("br"),n("a",{attrs:{href:"http://www.slcpl.lib.ut.us/branches/view/Main+Library"}},[n("img",{attrs:{src:"/src/events/admin-training2016/SLCLibrary1.jpg",alt:"alt Lake City Main Public Library, the venue for the introduction workshop"}})])]),n("h2",{attrs:{id:"venue"}},[n("a",{attrs:{href:"#venue","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Venue")]),n("p",[t._v("The "),n("strong",[t._v("introductory training workshop will be held at the "),n("a",{attrs:{href:"http://www.slcpl.lib.ut.us/branches/view/Main+Library",target:"_blank",rel:"noopener noreferrer"}},[t._v("Salt Lake City Main Public Library")]),t._v(".")]),t._v("  This "),n("a",{attrs:{href:"https://www.google.com/search?tbm=isch&q=salt+lake+city+library",target:"_blank",rel:"noopener noreferrer"}},[t._v("stunning venue")]),t._v(" is located in downtown Salt Lake City at "),n("a",{attrs:{href:"https://drive.google.com/open?id=1vC6J8BdrMDQo_cIJvTr9pjUGGcA&usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[t._v("210 East 400 South")]),t._v(", and is a stop on the "),n("a",{attrs:{href:"https://www.rideuta.com/Rider-Tools/Schedules-and-Maps/703-Red-Line",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTA TRAX Red Line")]),t._v(" and just "),n("a",{attrs:{href:"https://drive.google.com/open?id=1vC6J8BdrMDQo_cIJvTr9pjUGGcA&usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[t._v("5 stops from conference housing")]),t._v(".  We'll be meeting in "),n("a",{attrs:{href:"http://www.slcpl.lib.ut.us/rooms/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Conference Room 4")]),t._v(" .")]),t._t("/events/admin-training2016/footer")],2)}),[],!1,null,null,null);"function"==typeof l&&l(u),"function"==typeof p&&p(u);e.default=u.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);