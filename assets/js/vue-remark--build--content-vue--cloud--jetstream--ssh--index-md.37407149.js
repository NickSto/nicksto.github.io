(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"/iZZ":function(e,t,a){"use strict";a.r(t);var i=a("KHd+"),n=a("UQSp"),o=a("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.default.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},l=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===r(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:a[e]=function(){return s[e]}}))},u=o.default.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"SSH Access"};var c=function(e){e.options[p]&&(e.options[p]=d),o.default.util.defineReactive(e.options,p,d),e.options.computed=u.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},m=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("div",{staticClass:"toc-wrapper col-md-3"},[a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#changing-galaxy-settings"}},[e._v("Changing Galaxy settings")])]),a("ul",[a("li",[a("a",{attrs:{href:"#adding-galaxy-admin-user"}},[e._v("Adding Galaxy Admin user")])])])]),a("li",[a("p",[a("a",{attrs:{href:"#restarting-galaxy"}},[e._v("Restarting Galaxy")])])])])]),a("div",{staticClass:"body-wrapper col-md-9"},[e._t("/cloud/jetstream/linkbox"),a("p",[e._v("Some tasks on the Galaxy server (e.g., configuration changes) require you to connect to the VM using a command line shell. This can easily be done from within your browser by opening the VM details page and clicking the "),a("em",[e._v("Open Web Shell")]),e._v(" button.")]),a("div",{staticClass:"img-sizer",staticStyle:{width:"300px"}},[a("p",[a("img",{attrs:{src:"http://i.imgur.com/xYtIYoR.png"}})])]),a("p",[e._v("This will open a terminal inside your web browser with a command prompt in the VM.")]),a("div",{staticClass:"img-sizer",staticStyle:{width:"300px"}},[a("p",[a("img",{attrs:{src:"http://i.imgur.com/0avr6go.png"}})])]),a("p",[e._v("From here, you can perform any administrative task. You will be logged in as the user that launched the instance ("),a("em",[e._v("eafgan")]),e._v(" in my case, as shown in the screenshot). This user has privileges to become the "),a("em",[e._v("root")]),e._v(" system user via "),a("em",[e._v("sudo")]),e._v(" command. Some tasks will require you to become "),a("em",[e._v("root")]),e._v(" user while others will require you to become "),a("em",[e._v("galaxy")]),e._v(" system user. Changing users is simple:")]),a("ul",[a("li",[e._v("To become "),a("em",[e._v("root")]),e._v(" user, run this command: "),a("em",[e._v("sudo -s")])]),a("li",[e._v("To become "),a("em",[e._v("galaxy")]),e._v(" user, run this command: "),a("em",[e._v("sudo su galaxy")])]),a("li",[e._v("To return to the previous user, type "),a("em",[e._v("exit")])])]),a("h2",{attrs:{id:"changing-galaxy-settings"}},[a("a",{attrs:{href:"#changing-galaxy-settings","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Changing Galaxy settings")]),a("p",[e._v("Galaxy has an extensive set of administrative "),a("a",{attrs:{href:"/admin/"}},[e._v("configuration options")]),e._v(". The most common changes to Galaxy are performed by editing "),a("em",[e._v("galaxy.ini")]),e._v(" file. On the Jetstream image, this file is located in "),a("em",[e._v("/opt/galaxy/galaxy-app/config/galaxy.ini")]),e._v(" and it must be edited as "),a("em",[e._v("galaxy")]),e._v(" system user. You can edit the file using "),a("a",{attrs:{href:"http://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nano")]),e._v(" or "),a("a",{attrs:{href:"https://www.linux.com/learn/vim-101-beginners-guide-vim",target:"_blank",rel:"noopener noreferrer"}},[e._v("vim")]),e._v(" editors. The most current list of available options is always available in the "),a("a",{attrs:{href:"https://github.com/galaxyproject/galaxy/blob/dev/config/galaxy.ini.sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("galaxy.ini.sample")]),e._v(" file; any missing options can be added of the existing ones can be modified. If adding new options to the file, make sure that you are adding them under the right section of the file, most likely under "),a("em",[e._v("[app:main]")]),e._v(" header. Note that after changing this file, it is necessary to restart Galaxy.")]),a("h3",{attrs:{id:"adding-galaxy-admin-user"}},[a("a",{attrs:{href:"#adding-galaxy-admin-user","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Adding Galaxy Admin user")]),a("p",[e._v("To be able to add new tools or reference data, it is necessary to become Galaxy Admin user and use the "),a("a",{attrs:{href:"/admin/"}},[e._v("admin panel")]),e._v(". This is done by editing Galaxy settings (see above section) and adding a line like the following under the "),a("em",[e._v("[app:main]")]),e._v(" section: "),a("em",[e._v("admin_users = \\<registered user's email address>")]),e._v(". Save the file and restart Galaxy process.")]),a("h2",{attrs:{id:"restarting-galaxy"}},[a("a",{attrs:{href:"#restarting-galaxy","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Restarting Galaxy")]),a("p",[e._v("After any Galaxy configuration changes, it is necessary to restart the Galaxy process. Galaxy process is managed by "),a("a",{attrs:{href:"http://supervisord.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Supervisor")]),e._v(" - a process control software. To restart the process, it is required to become "),a("em",[e._v("root")]),e._v(" user, and restart the Galaxy process via supervisor:")]),a("pre",[a("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("eafgan@x:~$ sudo -s\nroot@x:~# supervisorctl\ngalaxy:web0                      RUNNING    pid 4077, uptime 3:17:41\nmunge                            RUNNING    pid 1376, uptime 3:57:06\nnginx                            RUNNING    pid 1378, uptime 3:57:06\npostgresql                       RUNNING    pid 1375, uptime 3:57:06\npre_postgresql                   EXITED     Apr 15 11:33 AM\nproftpd                          RUNNING    pid 1385, uptime 3:57:06\nslurmctld                        RUNNING    pid 3512, uptime 3:47:58\nslurmd                           RUNNING    pid 1563, uptime 3:56:36\nsupervisor> restart galaxy:web0\ngalaxy:web0: stopped\ngalaxy:web0: started\nsupervisor> exit```\n")])])],2)])}),[],!1,null,null,null);"function"==typeof l&&l(m),"function"==typeof c&&c(m);t.default=m.exports},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);