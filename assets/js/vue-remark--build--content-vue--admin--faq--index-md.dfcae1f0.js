(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},"bdY+":function(e,t,a){"use strict";a.r(t);var n=a("KHd+"),o=a("UQSp"),i=a("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:o.a},l=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===r(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:a[e]=function(){return s[e]}}))},d=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",h={excerpt:null,title:"Frequently Asked Questions for Galaxy Administration"};var p=function(e){e.options[c]&&(e.options[c]=h),i.a.util.defineReactive(e.options,c,h),e.options.computed=d.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},u=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[e._t("/admin/linkbox"),e._t("/faqs/linkbox"),a("p",[e._v("See "),a("a",{attrs:{href:"/src/learn/faq/index.md"}},[e._v("Learn/FAQ")]),e._v(" for questions about using any Galaxy instance, and "),a("a",{attrs:{href:"/src/main/faq/index.md"}},[e._v("Main/FAQ")]),e._v(" for questions specifically about using Galaxy's free public server "),a("a",{attrs:{href:"/src/main/index.md"}},[e._v("Main")]),e._v(".")]),a("hr"),a("h2",{attrs:{id:"galaxy-license"}},[a("a",{attrs:{href:"#galaxy-license","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Galaxy license")]),a("p",[a("strong",[e._v("What are the licensing terms for Galaxy?")])]),a("p",[e._v("See "),a("a",{attrs:{href:"/src/admin/license/index.md"}},[e._v("Copyrights and Licenses")]),e._v(".")]),a("hr"),a("h2",{attrs:{id:"using-galaxy"}},[a("a",{attrs:{href:"#using-galaxy","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Using Galaxy")]),a("p",[e._v("The Galaxy Community has created Galaxy instances in many different forms and for many different applications. The "),a("a",{attrs:{href:"/src/use/index.md"}},[e._v("Galaxy Platform Directory")]),e._v(" lists the options we know about, including:")]),a("ul",[a("li",[e._v("Free public Galaxy servers,")]),a("li",[e._v("cloud services that support Galaxy instances, and")]),a("li",[e._v("virtual machines and containers that can be easily deployed for your own server.")])]),a("p",[e._v("Which is "),a("strong",[e._v("right")]),e._v(" for you?  Explore the directory, especially the section on "),a("a",{attrs:{href:"/src/use/index.md#which-platform-platform-type-to-choose/"}},[e._v("Which Platform / Platform type to use")]),e._v(".")]),a("p",[e._v("Tools and workflows contributed by "),a("a",{attrs:{href:"/src/community/index.md"}},[e._v("community members")]),e._v(" worldwide) are served through the "),a("strong",[a("a",{attrs:{href:"/src/toolshed/index.md"}},[e._v("Main ToolShed")])]),e._v(" and genome data/indexes through an "),a("strong",[a("a",{attrs:{href:"/src/admin/data-integration/index.md"}},[e._v("rsync service")])]),e._v(".  ")]),a("hr"),a("h2",{attrs:{id:"purging-unwanted-histories-and-datasets"}},[a("a",{attrs:{href:"#purging-unwanted-histories-and-datasets","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Purging unwanted histories and datasets")]),a("p",[a("strong",[e._v("I have downloaded and installed a local instance of Galaxy.  How can I get rid of unwanted histories and their associated datasets?")])]),a("p",[e._v("There are scripts available in the Galaxy distribution that make this process very simple.  See our "),a("a",{attrs:{href:"/src/admin/config/performance/purge-histories-and-datasets/index.md"}},[e._v("Purge Histories and Datasets page")]),e._v(" for details.")]),a("hr"),a("h2",{attrs:{id:"galaxy-python-version"}},[a("a",{attrs:{href:"#galaxy-python-version","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Galaxy Python version")]),a("p",[a("strong",[e._v("What versions of the Python language do you support with your downloadable Galaxy source distribution?")])]),a("p",[e._v("We currently support Python 2.6 and 2.7.  When you start up your Galaxy instance, the Python eggs for your platform will be automatically downloaded for you.  See our "),a("a",{attrs:{href:"/src/admin/config/eggs/index.md"}},[e._v("Eggs page")]),e._v(" for more information.")]),a("hr"),a("h2",{attrs:{id:"connect-an-external-datasource-to-galaxy"}},[a("a",{attrs:{href:"#connect-an-external-datasource-to-galaxy","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Connect an external datasource to Galaxy")]),a("p",[a("strong",[e._v("How do I connect an external datasource to Galaxy?")])]),a("p",[e._v("Adding an external datasource is quite easy, and only requires minimal work on the datasource side.  For complete details on how to do this, see our "),a("a",{attrs:{href:"/src/admin/internals/data-sources/index.md"}},[e._v("DataSources page")]),e._v(".")]),a("hr"),a("h2",{attrs:{id:"adding-support-for-a-new-data-type"}},[a("a",{attrs:{href:"#adding-support-for-a-new-data-type","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Adding support for a new data type")]),a("p",[a("strong",[e._v("How do I implement support for a new data type in Galaxy?")])]),a("p",[e._v("For complete details on how to support a new data type, see our "),a("a",{attrs:{href:"/src/admin/datatypes/adding-datatypes/index.md"}},[e._v("Adding Datatypes page")]),e._v(".")]),a("hr"),a("h2",{attrs:{id:"configuring-galaxy-so-a-tool-can-properly-generate-an-excel-file"}},[a("a",{attrs:{href:"#configuring-galaxy-so-a-tool-can-properly-generate-an-excel-file","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Configuring Galaxy so a tool can properly generate an Excel file")]),a("p",[a("strong",[e._v("Is there a way to force the mime type of the downloaded files ?")]),e._v(' eg an application generates a binary excel file and the mime type is always binary, and the file extension is always "data.ext".  This causes problems when the user tries to view ( click the eye icon ) or download ( click the \'save\' link ).  Changing the file type to "excel" doesn\'t help, and the user is forced to save the file on his desktop, rename the file to an XLS extension and then open it. ')]),a("p",[e._v("In your universe_wsgi.ini file add this line to [galaxy:datatypes]...")]),a("p",[e._v("xls = galaxy.datatypes.data:Data,application/vnd.ms-excel")]),a("p",[e._v("...and set the output format of your tool to xls.")]),a("hr"),a("h2",{attrs:{id:"running-a-local-galaxy-mirror-on-port-80-or-through-apache"}},[a("a",{attrs:{href:"#running-a-local-galaxy-mirror-on-port-80-or-through-apache","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Running a local Galaxy mirror on port 80, or through Apache")]),a("p",[a("strong",[e._v("How can I run a Galaxy mirror alongside my regular web server (i.e. on port 80)?")])]),a("p",[e._v("Via a proxy connection in Apache.  Instructions can be found on the "),a("a",{attrs:{href:"/src/admin/config/apache-proxy/index.md"}},[e._v("Admin/Config/Apache Proxy")]),e._v(" page.")]),a("hr"),a("h2",{attrs:{id:"including-http-links-in-a-tools-help-text"}},[a("a",{attrs:{href:"#including-http-links-in-a-tools-help-text","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Including HTTP links in a tool's help text")]),a("p",[a("strong",[e._v("Is there a way to include an http link (eg "),a("code",{pre:!0},[e._v("<a href='foo'>foo</a>")]),e._v(") in the help text in a tool's xml file?")])]),a("p",[e._v("This is done using a restructured text syntax similar to the following line.")]),a("p",[a("code",{pre:!0},[e._v(".. _Screencasts: http://www.bx.psu.edu/cgi-bin/trac.cgi/wiki/GopsDesc")])]),a("p",[e._v("There is additional information on restructured text "),a("a",{attrs:{href:"http://docutils.sourceforge.net/docs/user/rst/quickref.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(".")]),a("hr"),a("h2",{attrs:{id:"alignment-tools"}},[a("a",{attrs:{href:"#alignment-tools","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Alignment Tools")]),a("p",[a("strong",[e._v('Does Galaxy provide tools to concatenate only blocks that are adjacent to each other ( i.e. without any gap in the "projected" species )?')])]),a("p",[e._v("The following alignment tools available in Galaxy enable this:")]),a("ul",[a("li",[a("strong",[e._v("Join MAF blocks by species")]),e._v(" - this tool will take a MAF from your history and fuse MAF blocks which are genomically adjacent on all the specified species producing another MAF file")]),a("li",[a("strong",[e._v("Stitch MAF blocks given a set of genomic intervals")]),e._v(" - this tool uses a set of guide intervals that you provide and creates one fasta alignment block per interval for each desired species.")]),a("li",[a("strong",[e._v("Stitch Gene blocks given a set of coding exon intervals")]),e._v(" - this tool does the same as above, except uses coding region information (encoded in the BED format) to create one fasta alignment block per CCDs.")])]),a("hr"),a("h2",{attrs:{id:"tools-that-output-html-and-images"}},[a("a",{attrs:{href:"#tools-that-output-html-and-images","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Tools that output HTML and Images")]),a("p",[a("strong",[e._v("I want to wrap or create a tool that generates an html output with several images and other files.  Where do I write and how can I reference the images and other files when I generate html to write to the html file?")])]),a("p",[a("a",{attrs:{href:"http://wiki.galaxyproject.org/Admin/Tools/Multiple%20Output%20Files#Single_history_output_Html_file_with_links_to_any_number_of_output_files_and_images",target:"_blank",rel:"noopener noreferrer"}},[e._v("Please take a look at this detailed description")])]),a("hr"),a("h2",{attrs:{id:"tool-and-server-configuration"}},[a("a",{attrs:{href:"#tool-and-server-configuration","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Tool and server configuration")]),a("p",[a("strong",[e._v("I've read about GALAXY_SLOTS but I don't understand what it is and how it works?")])]),a("p",[a("a",{attrs:{href:"/src/admin/config/galaxy_slots/index.md"}},[e._v("Follow this link for a detailed description")])]),a("hr"),a("h2",{attrs:{id:"any-other-question"}},[a("a",{attrs:{href:"#any-other-question","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Any other question")]),a("div",{staticClass:"left"},[a("a",{attrs:{href:"/src/search/index.md"}},[a("img",{attrs:{src:"/src/images/galaxy-logos/galaxy-web-search.png",alt:"Galaxy Search",width:"150"}})])]),e._v("\n[Galaxy Search](/src/search/index.md) searches all online Galaxy resources.  This includes this hub, the [Mailing Lists](/src/mailing-lists/index.md), [Main](/src/main/index.md), the [Tool Shed](/src/toolshed/index.md), and the [Galaxy source code](https://github.com/galaxyproject/galaxy).\n")],2)}),[],!1,null,null,null);"function"==typeof l&&l(u),"function"==typeof p&&p(u);t.default=u.exports}}]);