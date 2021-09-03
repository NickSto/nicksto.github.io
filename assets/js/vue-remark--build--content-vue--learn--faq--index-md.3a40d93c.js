(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},WKTY:function(e,t,a){"use strict";a.r(t);var s=a("KHd+"),r=a("UQSp"),o=a("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.default.config.optionMergeStrategies;var n={VueRemarkRoot:r.a},l=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(n).forEach((function(e){"object"===i(n[e])&&"function"==typeof n[e].render||"function"==typeof n[e]&&"function"==typeof n[e].options.render?t[e]=n[e]:a[e]=function(){return n[e]}}))},h=o.default.config.optionMergeStrategies,d="__vueRemarkFrontMatter",c={excerpt:null,title:"Frequently Asked Questions for Using Galaxy"};var u=function(e){e.options[d]&&(e.options[d]=c),o.default.util.defineReactive(e.options,d,c),e.options.computed=h.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},p=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("div",{staticClass:"toc-wrapper col-md-3"},[a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#datasets-histories-and-disk-usage"}},[e._v("Datasets, Histories, and Disk Usage")])])]),a("li",[a("p",[a("a",{attrs:{href:"#storage-on-galaxy-servers"}},[e._v("Storage on Galaxy servers")])])]),a("li",[a("p",[a("a",{attrs:{href:"#multiple-histories"}},[e._v("Multiple histories")])])]),a("li",[a("p",[a("a",{attrs:{href:"#browser-cache"}},[e._v("Browser cache")])])]),a("li",[a("p",[a("a",{attrs:{href:"#central-galaxy-server-or-galaxy-source-distribution"}},[e._v("Central Galaxy server or Galaxy source distribution")])])]),a("li",[a("p",[a("a",{attrs:{href:"#alignment-tools"}},[e._v("Alignment Tools")])])]),a("li",[a("p",[a("a",{attrs:{href:"#interval-and-bed-format"}},[e._v("Interval and BED format")])]),a("ul",[a("li",[a("a",{attrs:{href:"#examples"}},[e._v("Examples")])])])]),a("li",[a("p",[a("a",{attrs:{href:"#the-galaxy-test-server"}},[e._v("The Galaxy Test Server")])])]),a("li",[a("p",[a("a",{attrs:{href:"#using-galaxy-for-transcriptome-analysis"}},[e._v("Using Galaxy for Transcriptome Analysis")])])]),a("li",[a("p",[a("a",{attrs:{href:"#questions-not-answered-here-"}},[e._v("Questions Not Answered Here ...")])])])])]),a("div",{staticClass:"body-wrapper col-md-9"},[e._t("/learn/linkbox"),e._t("/faqs/linkbox"),a("p",[e._v("Questions that apply to using most Galaxy instances.  See "),a("a",{attrs:{href:"/main/faq/"}},[e._v("Main/FAQ")]),e._v(" for questions that are specifically about using "),a("a",{attrs:{href:"/main/"}},[e._v("Main")]),e._v(", Galaxy's free public server.  See "),a("a",{attrs:{href:"/admin/faq/"}},[e._v("Admin/FAQ")]),e._v(" for questions about "),a("a",{attrs:{href:"/admin/"}},[e._v("administering")]),e._v(" Galaxy.")]),a("h2",{attrs:{id:"datasets-histories-and-disk-usage"}},[a("a",{attrs:{href:"#datasets-histories-and-disk-usage","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Datasets, Histories, and Disk Usage")]),a("p",[e._v("What are the disk usage quotas when using Galaxy?")]),a("p",[e._v("Total disk space reserved per user is noted on the "),a("a",{attrs:{href:"/main/"}},[e._v("Main")]),e._v(" and "),a("a",{attrs:{href:"/test/"}},[e._v("Test")]),e._v(' home pages under the section "Quotas".')]),a("p",[e._v("When using a local, cloud, or public Galaxy servers hosted by other teams, quotas may or may not be set and are configured by that instance's administrator.")]),a("p",[e._v("For help understanding and organizing datasets and histories, please see: "),a("a",{attrs:{href:"/learn/managing-datasets/"}},[e._v("Managing Datasets")]),e._v(".")]),a("h2",{attrs:{id:"storage-on-galaxy-servers"}},[a("a",{attrs:{href:"#storage-on-galaxy-servers","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Storage on Galaxy servers")]),a("p",[e._v("How long will my histories and associated dataset be stored on the central Galaxy server?")]),a("p",[e._v('When you use Galaxy, any analyses that you perform will result in a "Galaxy history", which consists of history items ( datasets ).  This history is displayed in the right panel of your browser.  If you are logged into the Galaxy main server, your history / datasets will never be removed, except under these scenarios:')]),a("ol",[a("li",[a("p",[e._v("If you delete a specific history using the "),a("strong",[e._v("Options")]),e._v(" link at the top of the history panel, that history and all of its associated datasets will be removed from disk 60 days after you deleted the history.")])]),a("li",[a("p",[e._v('Those specific history items ( datasets ) that you delete from one of your histories by clicking the "X" icon in the history item will be removed from disk after 60 days, but unless you manually delete your history, you will still be able to view the history itself ( only the dataset that you deleted from your history will be removed from disk ).')])])]),a("p",[e._v("If you are not logged into our Galaxy main server, the history which results from your analyses will not be associated with a Galaxy login ID ( the history will not be associated with a user ).  Any history that is not associated with a user and which has not been altered for over 60 days will be deleted, and all history items ( datasets ) associated with that history will be removed from disk at the same time.")]),a("h2",{attrs:{id:"multiple-histories"}},[a("a",{attrs:{href:"#multiple-histories","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Multiple histories")]),a("p",[e._v("I suspect there must be a way of creating multiple history query sets (e.g., for different projects).  Is this possible?")]),a("p",[e._v("Galaxy allows you to create as many histories as you want, but doing this requires you to have a Galaxy account and be logged in.  When logged in, click "),a("strong",[e._v("Options")]),e._v(' in the upper right corner of the history panel.  This will display a list of options in the center work panel.  Save a history by providing the history with a name.  If a history has more than one item and is saved, there will be an additional option "create a new empty history" which will let you create and save another history.')]),a("h2",{attrs:{id:"browser-cache"}},[a("a",{attrs:{href:"#browser-cache","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Browser cache")]),a("p",[e._v("If I encounter some problem when using Galaxy, should I clear my browser cache to attempt to correct the problem?  In other words, is Galaxy behavior affected by my browser cache?")]),a("p",[e._v("Yes, your browser cache definitely affects the behavior of Galaxy.  The Galaxy development team often updates the central Galaxy server with new code enhancements.  Because of this, your browser cache may be using old versions of files and clearing them out is important.")]),a("h2",{attrs:{id:"central-galaxy-server-or-galaxy-source-distribution"}},[a("a",{attrs:{href:"#central-galaxy-server-or-galaxy-source-distribution","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Central Galaxy server or Galaxy source distribution")]),a("p",[e._v("Should I use the central Galaxy server environment hosted at Penn State or should I download the Galaxy source code and host it locally within my environment?")]),a("p",[e._v('It depends upon your specifics needs.  In general, we advise our customers to use the central Galaxy server, hosted by The Institute for Genomics, Proteomics and Bioinformatics at Penn State University.  This environment is freely available to anyone with Internet access. Unlimited disk space is available for storing personal Galaxy histories and data.  If you want to manage a local Galaxy environment, the Galaxy source distribution aims to be a "zero configuration", entirely self-contained system that provides a lightweight webserver, an embedded database and a multi-threaded job manager. All tools (and their parameters) can be specified via simple XML based configuration files.')]),a("h2",{attrs:{id:"alignment-tools"}},[a("a",{attrs:{href:"#alignment-tools","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Alignment Tools")]),a("p",[e._v('Does Galaxy provide tools to concatenate only blocks that are adjacent to each other ( i.e. without any gap in the "projected" species )?')]),a("p",[e._v("The following alignment tools available in Galaxy enable this:")]),a("ul",[a("li",[a("strong",[e._v("Join MAF blocks by species")]),e._v(" - this tool will take a MAF from your history and fuse MAF blocks which are genomically adjacent on all the specified species producing another MAF file")]),a("li",[a("strong",[e._v("Stitch MAF blocks given a set of genomic intervals")]),e._v(" - this tool uses a set of guide intervals that you provide and creates one fasta alignment block per interval for each desired species.")]),a("li",[a("strong",[e._v("Stitch Gene blocks given a set of coding exon intervals")]),e._v(" - this tool does the same as above, except uses coding region information (encoded in the BED format) to create one fasta alignment block per CCDs.")])]),a("h2",{attrs:{id:"interval-and-bed-format"}},[a("a",{attrs:{href:"#interval-and-bed-format","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Interval and BED format")]),a("p",[a("em",[e._v("Extract Genomic DNA")]),e._v(" tool under "),a("em",[e._v("Fetch sequences")]),e._v(" section returns one less nucleotide for the start value in each of my intervals. Is this a bug?")]),a("p",[e._v('Genomic intervals (Interval and BED formats) in Galaxy are 0-based, start-inclusive/end-exclusive, reported with respect to a forward-strand chromosome beginning with a base labeled as "0". This nomenclature is in accordance with the definition of '),a("a",{attrs:{href:"http://genome.ucsc.edu/FAQ/FAQformat#format1",target:"_blank",rel:"noopener noreferrer"}},[e._v("BED format")]),e._v(" and "),a("a",{attrs:{href:"http://genomewiki.cse.ucsc.edu/index.php/Coordinate_Transforms",target:"_blank",rel:"noopener noreferrer"}},[e._v("0-based Coordinates")]),e._v(" by UCSC.")]),a("h3",{attrs:{id:"examples"}},[a("a",{attrs:{href:"#examples","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Examples")]),a("ol",[a("li",[e._v('For computational purposes, a chromosome begins with the initial base labeled as "0". So for a chromosome 1 beginning with a base labeled as "0", BED/Interval coordinates defined as "chr1 100 200" will be translated and representing the 0-start computational bases 100 to 199.')]),a("li",[e._v('For certain other data formats and in particular positional visualization, a chromosomes begins with the initial base labeled as "1". So for a chromosome 1 beginning with a base labeled as "1", the BED/Interval coordinates defined as "chr1 100 200" will be translated/visualized as representing the 1-start positional bases 101 to 200.')])]),a("p",[e._v("For a detailed explanation, please read "),a("a",{attrs:{href:"https://depot.galaxyproject.org/hub/attachments/learn/faq/zero_based_coordinates.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article")]),e._v('.\nTo learn/understand whether a particular datatype is associated with a 0-based or 1-based coordinate system, see data format descriptions in Galaxy\'s help section for the tool "Get Data -> Upload".')]),a("h2",{attrs:{id:"the-galaxy-test-server"}},[a("a",{attrs:{href:"#the-galaxy-test-server","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("The Galaxy Test Server")]),a("p",[e._v("The "),a("a",{attrs:{href:"/test/"}},[e._v("Galaxy Test Server")]),e._v(", "),a("a",{attrs:{href:"http://test.g2.bx.psu.edu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://test.g2.bx.psu.edu/")]),e._v(", is an experimental/beta server where we test things out.  It is not recommended for anything other than testing.  See "),a("a",{attrs:{href:"/test/"}},[e._v("Test")]),e._v(" for more.")]),a("h2",{attrs:{id:"using-galaxy-for-transcriptome-analysis"}},[a("a",{attrs:{href:"#using-galaxy-for-transcriptome-analysis","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Using Galaxy for Transcriptome Analysis")]),a("p",[e._v("See")]),a("ul",[a("li",[a("a",{attrs:{href:"http://main.g2.bx.psu.edu/u/jeremy/p/transcriptome-analysis-faq",target:"_blank",rel:"noopener noreferrer"}},[e._v("this Galaxy Page")]),e._v(" by Jeremy Goecks.")]),a("li",[a("a",{attrs:{href:"http://kevin-gattaca.blogspot.com/2011/09/faq-howto-do-rna-seq-bioinformatics.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blogspot post")]),e._v(".")])]),a("h2",{attrs:{id:"questions-not-answered-here-"}},[a("a",{attrs:{href:"#questions-not-answered-here-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Questions Not Answered Here ...")]),a("div",{staticClass:"right"},[a("a",{attrs:{href:"/search/"}},[a("img",{attrs:{src:"/images/galaxy-logos/galaxy-web-search.png",alt:"Galaxy Search",width:"150"}})])]),a("p",[e._v("If you have questions about using Galaxy that aren't answered here, try "),a("a",{attrs:{href:"/search/"}},[e._v("Galaxy Search")]),e._v(".  It will search "),a("em",[e._v("all")]),e._v(" online Galaxy resources and return a categorized list of search results.")])],2)])}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof u&&u(p);t.default=p.exports}}]);