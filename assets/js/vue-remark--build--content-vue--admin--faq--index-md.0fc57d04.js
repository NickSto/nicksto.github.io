(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{UQSp:function(t,a,e){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},"bdY+":function(t,a,e){"use strict";e.r(a);var n=e("KHd+"),o=e("UQSp"),r=e("Kw5r");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default.config.optionMergeStrategies;var s={VueRemarkRoot:o.a},l=function(t){var a=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===i(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?a[t]=s[t]:e[t]=function(){return s[t]}}))},c=r.default.config.optionMergeStrategies,d="__vueRemarkFrontMatter",h={excerpt:null,title:"Frequently Asked Questions for Galaxy Administration"};var p=function(t){t.options[d]&&(t.options[d]=h),r.default.util.defineReactive(t.options,d,h),t.options.computed=c.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},u=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VueRemarkRoot",[e("div",{staticClass:"toc-wrapper col-md-3"},[e("ul",[e("li",[e("a",{attrs:{href:"#galaxy-license"}},[t._v("Galaxy license")])]),e("li",[e("a",{attrs:{href:"#using-galaxy"}},[t._v("Using Galaxy")])]),e("li",[e("a",{attrs:{href:"#purging-unwanted-histories-and-datasets"}},[t._v("Purging unwanted histories and datasets")])]),e("li",[e("a",{attrs:{href:"#galaxy-python-version"}},[t._v("Galaxy Python version")])]),e("li",[e("a",{attrs:{href:"#connect-an-external-datasource-to-galaxy"}},[t._v("Connect an external datasource to Galaxy")])]),e("li",[e("a",{attrs:{href:"#adding-support-for-a-new-data-type"}},[t._v("Adding support for a new data type")])]),e("li",[e("a",{attrs:{href:"#configuring-galaxy-so-a-tool-can-properly-generate-an-excel-file"}},[t._v("Configuring Galaxy so a tool can properly generate an Excel file")])]),e("li",[e("a",{attrs:{href:"#running-a-local-galaxy-mirror-on-port-80-or-through-apache"}},[t._v("Running a local Galaxy mirror on port 80, or through Apache")])]),e("li",[e("a",{attrs:{href:"#including-http-links-in-a-tools-help-text"}},[t._v("Including HTTP links in a tool's help text")])]),e("li",[e("a",{attrs:{href:"#alignment-tools"}},[t._v("Alignment Tools")])]),e("li",[e("a",{attrs:{href:"#tools-that-output-html-and-images"}},[t._v("Tools that output HTML and Images")])]),e("li",[e("a",{attrs:{href:"#tool-and-server-configuration"}},[t._v("Tool and server configuration")])]),e("li",[e("a",{attrs:{href:"#any-other-question"}},[t._v("Any other question")])])])]),e("div",{staticClass:"body-wrapper col-md-9"},[t._t("/admin/linkbox"),t._t("/faqs/linkbox"),e("p",[t._v("See "),e("a",{attrs:{href:"/learn/faq/"}},[t._v("Learn/FAQ")]),t._v(" for questions about using any Galaxy instance, and "),e("a",{attrs:{href:"/main/faq/"}},[t._v("Main/FAQ")]),t._v(" for questions specifically about using Galaxy's free public server "),e("a",{attrs:{href:"/main/"}},[t._v("Main")]),t._v(".")]),e("hr"),e("h2",{attrs:{id:"galaxy-license"}},[e("a",{attrs:{href:"#galaxy-license","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Galaxy license")]),e("p",[e("strong",[t._v("What are the licensing terms for Galaxy?")])]),e("p",[t._v("See "),e("a",{attrs:{href:"/admin/license/"}},[t._v("Copyrights and Licenses")]),t._v(".")]),e("hr"),e("h2",{attrs:{id:"using-galaxy"}},[e("a",{attrs:{href:"#using-galaxy","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Using Galaxy")]),e("p",[t._v("The Galaxy Community has created Galaxy instances in many different forms and for many different applications. The "),e("a",{attrs:{href:"/use/"}},[t._v("Galaxy Platform Directory")]),t._v(" lists the options we know about, including:")]),e("ul",[e("li",[t._v("Free public Galaxy servers,")]),e("li",[t._v("cloud services that support Galaxy instances, and")]),e("li",[t._v("virtual machines and containers that can be easily deployed for your own server.")])]),e("p",[t._v("Which is "),e("strong",[t._v("right")]),t._v(" for you?  Explore the directory, especially the section on "),e("a",{attrs:{href:"/use/#which-platform-platform-type-to-choose/"}},[t._v("Which Platform / Platform type to use")]),t._v(".")]),e("p",[t._v("Tools and workflows contributed by "),e("a",{attrs:{href:"/community/"}},[t._v("community members")]),t._v(" worldwide) are served through the "),e("strong",[e("a",{attrs:{href:"/toolshed/"}},[t._v("Main ToolShed")])]),t._v(" and genome data/indexes through an "),e("strong",[e("a",{attrs:{href:"/admin/data-integration/"}},[t._v("rsync service")])]),t._v(".")]),e("hr"),e("h2",{attrs:{id:"purging-unwanted-histories-and-datasets"}},[e("a",{attrs:{href:"#purging-unwanted-histories-and-datasets","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Purging unwanted histories and datasets")]),e("p",[e("strong",[t._v("I have downloaded and installed a local instance of Galaxy.  How can I get rid of unwanted histories and their associated datasets?")])]),e("p",[t._v("There are scripts available in the Galaxy distribution that make this process very simple.  See our "),e("a",{attrs:{href:"/admin/config/performance/purge-histories-and-datasets/"}},[t._v("Purge Histories and Datasets page")]),t._v(" for details.")]),e("hr"),e("h2",{attrs:{id:"galaxy-python-version"}},[e("a",{attrs:{href:"#galaxy-python-version","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Galaxy Python version")]),e("p",[e("strong",[t._v("What versions of the Python language do you support with your downloadable Galaxy source distribution?")])]),e("p",[t._v("We currently support Python 2.6 and 2.7.  When you start up your Galaxy instance, the Python eggs for your platform will be automatically downloaded for you.  See our "),e("a",{attrs:{href:"/admin/config/eggs/"}},[t._v("Eggs page")]),t._v(" for more information.")]),e("hr"),e("h2",{attrs:{id:"connect-an-external-datasource-to-galaxy"}},[e("a",{attrs:{href:"#connect-an-external-datasource-to-galaxy","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Connect an external datasource to Galaxy")]),e("p",[e("strong",[t._v("How do I connect an external datasource to Galaxy?")])]),e("p",[t._v("Adding an external datasource is quite easy, and only requires minimal work on the datasource side.  For complete details on how to do this, see our "),e("a",{attrs:{href:"/admin/internals/data-sources/"}},[t._v("DataSources page")]),t._v(".")]),e("hr"),e("h2",{attrs:{id:"adding-support-for-a-new-data-type"}},[e("a",{attrs:{href:"#adding-support-for-a-new-data-type","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Adding support for a new data type")]),e("p",[e("strong",[t._v("How do I implement support for a new data type in Galaxy?")])]),e("p",[t._v("For complete details on how to support a new data type, see our "),e("a",{attrs:{href:"/admin/datatypes/adding-datatypes/"}},[t._v("Adding Datatypes page")]),t._v(".")]),e("hr"),e("h2",{attrs:{id:"configuring-galaxy-so-a-tool-can-properly-generate-an-excel-file"}},[e("a",{attrs:{href:"#configuring-galaxy-so-a-tool-can-properly-generate-an-excel-file","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Configuring Galaxy so a tool can properly generate an Excel file")]),e("p",[e("strong",[t._v("Is there a way to force the mime type of the downloaded files ?")]),t._v(' eg an application generates a binary excel file and the mime type is always binary, and the file extension is always "data.ext".  This causes problems when the user tries to view ( click the eye icon ) or download ( click the \'save\' link ).  Changing the file type to "excel" doesn\'t help, and the user is forced to save the file on his desktop, rename the file to an XLS extension and then open it.')]),e("p",[t._v("In your universe_wsgi.ini file add this line to [galaxy:datatypes]...")]),e("p",[t._v("xls = galaxy.datatypes.data:Data,application/vnd.ms-excel")]),e("p",[t._v("...and set the output format of your tool to xls.")]),e("hr"),e("h2",{attrs:{id:"running-a-local-galaxy-mirror-on-port-80-or-through-apache"}},[e("a",{attrs:{href:"#running-a-local-galaxy-mirror-on-port-80-or-through-apache","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Running a local Galaxy mirror on port 80, or through Apache")]),e("p",[e("strong",[t._v("How can I run a Galaxy mirror alongside my regular web server (i.e. on port 80)?")])]),e("p",[t._v("Via a proxy connection in Apache.  Instructions can be found on the "),e("a",{attrs:{href:"/admin/config/apache-proxy/"}},[t._v("Admin/Config/Apache Proxy")]),t._v(" page.")]),e("hr"),e("h2",{attrs:{id:"including-http-links-in-a-tools-help-text"}},[e("a",{attrs:{href:"#including-http-links-in-a-tools-help-text","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Including HTTP links in a tool's help text")]),e("p",[e("strong",[t._v("Is there a way to include an http link (eg "),e("code",{pre:!0},[t._v("<a href='foo'>foo</a>")]),t._v(") in the help text in a tool's xml file?")])]),e("p",[t._v("This is done using a restructured text syntax similar to the following line.")]),e("p",[e("code",{pre:!0},[t._v(".. _Screencasts: http://www.bx.psu.edu/cgi-bin/trac.cgi/wiki/GopsDesc")])]),e("p",[t._v("There is additional information on restructured text "),e("a",{attrs:{href:"http://docutils.sourceforge.net/docs/user/rst/quickref.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here")]),t._v(".")]),e("hr"),e("h2",{attrs:{id:"alignment-tools"}},[e("a",{attrs:{href:"#alignment-tools","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Alignment Tools")]),e("p",[e("strong",[t._v('Does Galaxy provide tools to concatenate only blocks that are adjacent to each other ( i.e. without any gap in the "projected" species )?')])]),e("p",[t._v("The following alignment tools available in Galaxy enable this:")]),e("ul",[e("li",[e("strong",[t._v("Join MAF blocks by species")]),t._v(" - this tool will take a MAF from your history and fuse MAF blocks which are genomically adjacent on all the specified species producing another MAF file")]),e("li",[e("strong",[t._v("Stitch MAF blocks given a set of genomic intervals")]),t._v(" - this tool uses a set of guide intervals that you provide and creates one fasta alignment block per interval for each desired species.")]),e("li",[e("strong",[t._v("Stitch Gene blocks given a set of coding exon intervals")]),t._v(" - this tool does the same as above, except uses coding region information (encoded in the BED format) to create one fasta alignment block per CCDs.")])]),e("hr"),e("h2",{attrs:{id:"tools-that-output-html-and-images"}},[e("a",{attrs:{href:"#tools-that-output-html-and-images","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Tools that output HTML and Images")]),e("p",[e("strong",[t._v("I want to wrap or create a tool that generates an html output with several images and other files.  Where do I write and how can I reference the images and other files when I generate html to write to the html file?")])]),e("p",[e("a",{attrs:{href:"http://wiki.galaxyproject.org/Admin/Tools/Multiple%20Output%20Files#Single_history_output_Html_file_with_links_to_any_number_of_output_files_and_images",target:"_blank",rel:"noopener noreferrer"}},[t._v("Please take a look at this detailed description")])]),e("hr"),e("h2",{attrs:{id:"tool-and-server-configuration"}},[e("a",{attrs:{href:"#tool-and-server-configuration","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Tool and server configuration")]),e("p",[e("strong",[t._v("I've read about GALAXY_SLOTS but I don't understand what it is and how it works?")])]),e("p",[e("a",{attrs:{href:"/admin/config/galaxy_slots/"}},[t._v("Follow this link for a detailed description")])]),e("hr"),e("h2",{attrs:{id:"any-other-question"}},[e("a",{attrs:{href:"#any-other-question","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Any other question")]),e("div",{staticClass:"left"},[e("a",{attrs:{href:"/search/"}},[e("img",{attrs:{src:"/images/galaxy-logos/galaxy-web-search.png",alt:"Galaxy Search",width:"150"}})])]),t._v("\n[Galaxy Search](/src/search/index.md) searches all online Galaxy resources.  This includes this hub, the [Mailing Lists](/src/mailing-lists/index.md), [Main](/src/main/index.md), the [Tool Shed](/src/toolshed/index.md), and the [Galaxy source code](https://github.com/galaxyproject/galaxy).\n")],2)])}),[],!1,null,null,null);"function"==typeof l&&l(u),"function"==typeof p&&p(u);a.default=u.exports}}]);