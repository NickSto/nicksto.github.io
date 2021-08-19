(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{Phfy:function(e,t,o){"use strict";o.r(t);var a=o("KHd+"),n=o("UQSp"),i=o("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===r(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:o[e]=function(){return s[e]}}))},d=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",h={excerpt:null,title:"GCC2013 Training Day"};var p=function(e){e.options[u]&&(e.options[u]=h),i.a.util.defineReactive(e.options,u,h),e.options.computed=d.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},c=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("div",{staticClass:"toc-wrapper col-md-3"},[o("ul",[o("li",[o("p",[o("a",{attrs:{href:"#introduction-to-tools-and-data-sources"}},[e._v("Introduction to tools and data sources")])]),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"#presenters-dan-blankenberg-and-ross-lazarus"}},[e._v("Presenters: Dan Blankenberg and Ross Lazarus")])]),o("ul",[o("li",[o("a",{attrs:{href:"#summary"}},[e._v("Summary")])])])]),o("li",[o("p",[o("a",{attrs:{href:"#helpful-links"}},[e._v("Helpful links")])])]),o("li",[o("p",[o("a",{attrs:{href:"#1230-1240-introduction-to-making-a-new-tool-for-your-galaxy"}},[e._v("12:30-12:40 Introduction to making a new tool for your Galaxy")])])]),o("li",[o("p",[o("a",{attrs:{href:"#1240-100-hello-world-in-galaxyish"}},[e._v("12:40-1:00 Hello world in Galaxyish")])]),o("ul",[o("li",[o("ul",[o("li",[o("a",{attrs:{href:"#bonus-points-if-you-finish-early"}},[e._v("Bonus points if you finish early")])])])])])]),o("li",[o("p",[o("a",{attrs:{href:"#100-110-hello-input"}},[e._v("1:00-1:10. Hello input")])]),o("ul",[o("li",[o("a",{attrs:{href:"#bonus-points"}},[e._v("Bonus points")])])])]),o("li",[o("p",[o("a",{attrs:{href:"#110--120pm-hello_sanitizer"}},[e._v("1:10 – 1:20pm Hello_sanitizer")])])]),o("li",[o("p",[o("a",{attrs:{href:"#120--130pm-hello_file"}},[e._v("1:20 – 1:30pm Hello_file")])])]),o("li",[o("p",[o("a",{attrs:{href:"#130--145pm-hello_datasource"}},[e._v("1:30 – 1:45pm hello_datasource")])])]),o("li",[o("p",[o("a",{attrs:{href:"#145--230pm-wrap-your-new-executable-into-a-new-tool"}},[e._v("1:45 – 2:30pm Wrap your new executable into a new tool")])]),o("ul",[o("li",[o("a",{attrs:{href:"#suggested-procedure"}},[e._v("Suggested procedure")])])])]),o("li",[o("p",[o("a",{attrs:{href:"#230-session-ends"}},[e._v("2:30 session ends")])]),o("ul",[o("li",[o("a",{attrs:{href:"#suggested-enhancements-for-those-who-finish-early"}},[e._v("Suggested enhancements for those who finish early")])]),o("li",[o("a",{attrs:{href:"#bonus-points-1"}},[e._v("Bonus points")])]),o("li",[o("a",{attrs:{href:"#useful-tips"}},[e._v("Useful tips")])])])])])])])]),o("div",{staticClass:"body-wrapper col-md-9"},[e._t("/events/gcc2013/header"),e._t("/events/gcc2013/linkbox"),o("div",{staticClass:"right"},[o("a",{attrs:{href:"/events/gcc2013/training-day/"}},[o("img",{attrs:{src:"/images/logos/GCC2013TrainingDayLogo300.png",alt:"Training Day",width:"200"}})])]),o("h1",{attrs:{id:"introduction-to-tools-and-data-sources"}},[o("a",{attrs:{href:"#introduction-to-tools-and-data-sources","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Introduction to tools and data sources")]),o("h2",{attrs:{id:"presenters-dan-blankenberg-and-ross-lazarus"}},[o("a",{attrs:{href:"#presenters-dan-blankenberg-and-ross-lazarus","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Presenters: Dan Blankenberg and Ross Lazarus")]),o("h3",{attrs:{id:"summary"}},[o("a",{attrs:{href:"#summary","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Summary")]),o("p",[e._v("As an administrator of your own local Galaxy, you can extend Galaxy by writing new tools and adding them to the tool panel for your users to use. There are a few things you need to do to make them work. In the simplest possible case, you need to prepare some XML and make your Galaxy read it in at startup when it reads and parses tool_conf.xml. Each tool must include a unique tool id, a visible name, a version number and a command line template. In addition, they can also include multiple tool form parameters with labels, validation and help, outputs, tests, dependency/version requirements. Galaxy uses these to set up the tool list and each selected tool's user interface form.")]),o("p",[e._v("*Note: there's actually a configuration setting in universe_wsgi.ini controlling which tool_conf.xml files are read. The default is")]),o("pre",[o("code",{pre:!0},[e._v("tool_config_file = tool_conf.xml,shed_tool_conf.xml\n")])]),o("p",[e._v("so you can use multiple tool configuration patterns if you ever need to*")]),o("p",[o("strong",[e._v("In summary, the essence of the entire 2 hour session is that to create a new tool for your users, you need to")])]),o("ul",[o("li",[o("p",[e._v("ensure the executable is available to the execution host (your own VM/login in the workshop)")])]),o("li",[o("p",[e._v("write some valid XML in a text file to describe your new tool and put it somewhere under tools/")])]),o("li",[o("p",[e._v("edit tool_conf.xml to tell Galaxy where that XML file can be found - leave out the path .../tools/")])]),o("li",[o("p",[e._v("restart Galaxy to make the new tool available")])])]),o("h2",{attrs:{id:"helpful-links"}},[o("a",{attrs:{href:"#helpful-links","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Helpful links")]),o("ul",[o("li",[o("a",{attrs:{href:"http://wiki.galaxyproject.org/Admin/Tools/Add%20Tool%20Tutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://wiki.galaxyproject.org/Admin/Tools/Add%20Tool%20Tutorial")])]),o("li",[o("a",{attrs:{href:"http://wiki.galaxyproject.org/Admin/Tools/ToolConfigSyntax",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://wiki.galaxyproject.org/Admin/Tools/ToolConfigSyntax")])]),o("li",[o("a",{attrs:{href:"http://www.cheetahtemplate.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.cheetahtemplate.org/")])])]),o("h2",{attrs:{id:"1230-1240-introduction-to-making-a-new-tool-for-your-galaxy"}},[o("a",{attrs:{href:"#1230-1240-introduction-to-making-a-new-tool-for-your-galaxy","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("12:30-12:40 Introduction to making a new tool for your Galaxy")]),o("ul",[o("li",[e._v("Introduce presenters and circulating tutors")]),o("li",[e._v("Scope of the session - start with simplest possible tool.")]),o("li",[e._v("Add complexity in the form of one useful tool feature at a time.")]),o("li",[e._v("Offer a series of examples covering a wide range of common tool requirements.")]),o("li",[e._v("We'll work as far as we can get.")]),o("li",[e._v("NOT explaining how Galaxy actually works.")]),o("li",[e._v("Moving at a fair clip through the essential steps for a new tool to become available to users on your own local Galaxy.")]),o("li",[e._v("Command line skills really will be needed.")])]),o("h2",{attrs:{id:"1240-100-hello-world-in-galaxyish"}},[o("a",{attrs:{href:"#1240-100-hello-world-in-galaxyish","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("12:40-1:00 Hello world in Galaxyish")]),o("p",[e._v("The first exercise consists of creating (or copying, your choice) a text file containing valid XML describing a simple and admittedly, not very useful tool. However, it will demonstrate the bare bones of the power of the Galaxy tool interface. A few lines of XML gets you a familiar, simple user interface and a single new history item - a text file containing a string.")]),o("p",[e._v("Steps:")]),o("ol",[o("li",[e._v("Make a new directory [galaxy root]/tools/hello and put hello.xml there containing")])]),o("pre",[o("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('<tool id="hello" name="hello" version="0.01">\n<description>World</description>\n<command>\n/bin/echo "Hello World” &gt; ${output1}\n</command>\n<outputs>\n   <data format="tabular" name="output1" label="hello_world_${mystring}"/>\n</outputs>\n<help>\n\n**What it does**\nSays hello\n</help>\n</tool>\n')])]),o("div",{staticClass:"indent"},[o("p",[e._v("This text is all you need for a new, real new tool, including some help to display to the user.\nIn this example, the executable we use is the built-in system echo command which echos its input (the string) to a new history output file - output is redirected using > to the output file path Galaxy chooses at tool execution because the template symbol "),o("code",{pre:!0},[e._v("${output1}")]),e._v(" on the command line is replaced with the Galaxy job execution engine's choice of path.")]),o("p",[e._v("The syntax ${...} is recommended and it is also recommended that all user supplied parameters be quoted in case the parameter contains slashes or spaces which might cause the tool to fail mysteriously.")]),o("p",[e._v("Note that the > redirection character has been "),o("em",[o("a",{attrs:{href:"http://dev.w3.org/html5/html-author/charref",target:"_blank",rel:"noopener noreferrer"}},[e._v("html-escaped")])]),e._v(" so the XML parser doesn't get confused. Failure to do this will throw a syntax error in paster.log when the XML is parsed at startup.")])]),o("ol",{attrs:{start:"2"}},[o("li",[e._v("#2 If not already done, adjust universe_wsgi.ini by adding an admin_user email you will register with when you first log in - use commas ONLY - no spaces - to separate admin email addresses. Adjust tool_conf.xml adding a new tool path that must exactly match the directory/filename you chose for your tool. For this example, we recommend putting your new tool entry at the very top of the first tool section so it's easy to reload through the admin interface, later when you make changes to the XML. The start of your local tool_conf.xml should look like this")])]),o("pre",[o("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('<?xml version="1.0"?>\n<toolbox>\n <tool file="hello/hello.xml"/>\n <section name="Get Data" id="getext">\n   <tool file="data_source/upload.xml"/>\n')])]),o("ol",{attrs:{start:"3"}},[o("li",[e._v("#3 Restart")])]),o("p",[o("strong",[e._v("Stop Galaxy if it's running")])]),o("pre",[o("code",{pre:!0},[e._v("sh run.sh –stop-daemon\n")])]),o("p",[o("strong",[e._v("Restart Galaxy")])]),o("pre",[o("code",{pre:!0},[e._v("sh run.sh –daemon\n")])]),o("ol",{attrs:{start:"4"}},[o("li",[o("p",[e._v("#4 Check paster.log for errors (search for “hello” to find where your tool loaded – or barfed). If it fails to load, look for the syntax error, repair it, rinse, repeat... until it loads. ( "),o("code",{pre:!0},[e._v("tail -f paster.log")]),e._v(" )")])]),o("li",[o("p",[e._v("#5 When it loads correctly, test your new tool. In your VM webrowser, visit "),o("a",{attrs:{href:"http://localhost:8050",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8050")]),e._v(" ("),o("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080")]),e._v(" is the distrubution default but Galaxy will be on the '''port''' - eg 8050 has been configured for the server in unverse_wsgi.ini - you can move it if you wish). Register your admin email address if you haven't already done so and log in. Test your new tool. It will write “hello world” to a new file in your history. If/when it works, find the actual commands Galaxy executed to run your tool in paster.log. If it fails, look in paster.log for hints about what went wrong. Repair and reload via the admin interface (no need to restart the Galaxy server) until it works.")])]),o("li",[o("p",[e._v("#6 Raise arms in victory \\o/")])])]),o("h4",{attrs:{id:"bonus-points-if-you-finish-early"}},[o("a",{attrs:{href:"#bonus-points-if-you-finish-early","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Bonus points if you finish early")]),o("ol",[o("li",[e._v("#1 Look at what's been written to paster.log when your tool has executed. Running something like")])]),o("pre",[o("code",{pre:!0},[e._v("tail -f paster.log\n")])]),o("p",[e._v("in a separate console is a good way to see what Galaxy is doing. This is a "),o("strong",[e._v("very useful strategy")]),e._v(" for figuring out what is going on when things are not working right because the log will contain the generated command line including all parameter substitutions.")]),o("ol",{attrs:{start:"2"}},[o("li",[e._v("#2 Make it do something more interesting.")])]),o("h2",{attrs:{id:"100-110-hello-input"}},[o("a",{attrs:{href:"#100-110-hello-input","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("1:00-1:10. Hello input")]),o("p",[e._v("Save a copy of your existing hello.xml as hello1.xml and adjust the old hello.xml - add an input parameter and adjust so it reads as shown below - cut and paste is always an easy option. Save. Reload the hello tool via the admin interface (reload a tool's configuration - find "),o("strong",[e._v("hello")]),e._v(" and reload it - if it fails to load, check the error message in paster.log and repair the syntax) and test it out. Note that you can use the "),o("strong",[e._v("redo")]),e._v(" (circular arrow in the expanded failed output) to set up the tool form as it was when you ran the job - this can save time for complex tool form testing. Rinse, repeat until it's working right.")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('<tool id="hello" name="hello" version="0.02">\n<description>World</description>\n<command>\n/bin/echo "Hello World ${mystring}" &gt; ${output1}\n</command>\n<inputs>\n <param name="mystring" type="text" label="Say something interesting"/>\n</inputs>\n<outputs>\n    <data format="tabular" name="output1" label="hello_world_${mystring}"/>\n</outputs>\n<help>\n\n**What it does**\n\nSays hello, adding a user supplied text parameter to the output\n\n</help>\n</tool>\n')])]),o("h3",{attrs:{id:"bonus-points"}},[o("a",{attrs:{href:"#bonus-points","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Bonus points")]),o("p",[e._v("Once you have hello v 0.02 working, try using the redo button to rerun an output in your history from hello v 0.01.\nYou should see a warning message")]),o("pre",[o("code",{pre:!0},[e._v('This job was initially run with tool version "0.01", which is not currently available. You can rerun the job with this tool version, which is a derivation of the original tool.\n')])]),o("p",[e._v("Why does Galaxy give you a warning?\nWhy is this a good thing?")]),o("p",[o("strong",[e._v("Hint:")]),e._v(" 'reproducible research'")]),o("p",[o("strong",[e._v("Author's opinion:")]),e._v(" Updated Galaxy tool versions are treated as potentially 'different' tools. Unless the old version is still available, rerunning old jobs with the updated version may not produce the same results if the tool has changed in any substantial way or the third party executable has been updated with bug fixes and enhancements. The Tool Shed has been designed to transparently support rerunning old jobs with exactly the same old version of tools which have been subsequently updated. This may not sound like a big deal but it is - good science has to be reproducible and ideally based on reproducible analyses. An updated version might give different results and so the original analysis might not be exactly replicated. Sure, tools that rely on simulation or permutation are expected to give slightly or trivially different results every time they are run unless you use the same random seed. Yes, the old version may have had bugs that are now fixed, but truly reproducible analysis means reproducing exactly the same bugs! Remember, reproduciblity is necessary for good science but it is not in itself a guarantee of "),o("strong",[e._v("valid")]),e._v(" analysis.")]),o("h2",{attrs:{id:"110--120pm-hello_sanitizer"}},[o("a",{attrs:{href:"#110--120pm-hello_sanitizer","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("1:10 – 1:20pm Hello_sanitizer")]),o("p",[e._v("Sometimes you will need to control the characters allowed in a text parameter - for example to prevent the user from supplying a space or other potentially annoying character. The "),o("a",{attrs:{href:"/admin/tools/tool-config-syntax/#sanitizer-tag-set"}},[e._v("sanitizer tag set")]),e._v(" allows excluding specific characters. The format requires an initial definition of acceptable characters and individual ones can be added with the add tag.")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('<tool id="hello" name="hello" version="0.03">\n<description>World</description>\n<command>\n/bin/echo "Hello World ${mystring}" &gt; ${output1}\n</command>\n<inputs>\n  <param name="mystring" type="text" label="Say something interesting">\n    <sanitizer invalid_char="">\n      <valid initial="string.letters,string.digits"><add value="_" /> </valid>\n    </sanitizer>\n  </param>\n</inputs>\n<outputs>\n    <data format="tabular" name="output1" label="hello_world_${mystring}"/>\n</outputs>\n<help>\n\n**What it does**\n\nSays hello, adding a user supplied text parameter to the output, but limiting the characters the user can type to digits, letters and the underscore. Try adding other characters to see what happens in the output\n\n</help>\n</tool>\n')])]),o("p",[e._v("Reload, test etc.")]),o("h2",{attrs:{id:"120--130pm-hello_file"}},[o("a",{attrs:{href:"#120--130pm-hello_file","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("1:20 – 1:30pm Hello_file")]),o("p",[e._v("So far, the tool does not accept any input files from the user's history. These require a "),o("strong",[o("a",{attrs:{href:"/admin/tools/tool-config-syntax/#typedata"}},[e._v("data")])]),e._v(" parameter specifying the template name for the input file and a data type (optionally a comma delimited list for multiple acceptable datatypes) which will be used to filter the user's current history so you can restrict the drop down choice list to the datatypes your tool needs - excluding other potentially unacceptable data formats to make it harder for the user to choose an incompatible datatype.")]),o("p",[e._v("Before we can implement that, we need to first make a suitable input file in the current history. A plain text file containing a few words of text is all you need. There are lots of ways of doing this, but the simplest way is to simply paste or write some text into the URL box of the "),o("strong",[e._v("Get data → Upload File")]),e._v(" tool, then set the file format to "),o("strong",[e._v("txt")]),e._v(" and press execute. A new text file containing whatever you typed will appear in your history after a few moments.")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('<tool id="hello" name="hello" version="0.04">\n<description>World</description>\n<command>\n/bin/echo "Hello World ${mystring}" &gt; ${output1} &amp;&amp; cat ${mytext} &gt;&gt; ${output1}\n</command>\n<inputs>\n <param name="mystring" type="text" label="Say something interesting">\n   <sanitizer invalid_char="">\n     <valid initial="string.letters,string.digits"><add value="_" /> </valid>\n   </sanitizer>\n</param>\n<param name="mytext" type="data" ftype="txt,tabular" label="Select a text file from your history"/>\n</inputs>\n<outputs>\n    <data format="tabular" name="output1" label="hello_world_${mystring}"/>\n</outputs>\n<help>\n\n**What it does**\n\nSays hello, adding a user supplied text parameter to the output, but limiting the characters the user can type to digits, letters and the underscore. Try adding other characters to see what happens in the output\nAlso appends the contents of a user supplied text file to the output.\n</help>\n</tool>\n')])]),o("p",[e._v("Note the ugly html escaping needed on the command line. This can be avoided in real tools by changing the command line to call a python or other script to replace the shell command line in a more obvious, maintainable and transparent way - but it can be made to work and will serve for the exercise although we apologise if your eyeballs hurt. In general we recommend calling wrappers rather than creating long confusing shell command lines.")]),o("p",[e._v("Reload, test etc.")]),o("h2",{attrs:{id:"130--145pm-hello_datasource"}},[o("a",{attrs:{href:"#130--145pm-hello_datasource","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("1:30 – 1:45pm hello_datasource")]),o("p",[e._v("Here is a simple datasource example. It is a a simple html page that uses JavaScript to parse incoming parameters and change the form action attribute to the provided GALAXY_URL value. The user can click the submit button to post the URL value (a prefilled text box) back to the originating Galaxy server. For more information on data source tools, see "),o("a",{attrs:{href:"/admin/internals/data-sources/"}},[e._v("here")]),e._v(".")]),o("p",[e._v("We'll use Python's built-in simple HTTP server to make the html page into a web-loadable link:")]),o("pre",[o("code",{pre:!0},[e._v("cd /home/gcc2013/Desktop/Training_Day_Workshops/Datsources_Tools/datasource_simple_example/\npython -m SimpleHTTPServer 8051\n")])]),o("p",[e._v("Verify that you can view the simple datasource at "),o("a",{attrs:{href:"http://localhost:8051/datasource_simple_example.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8051/datasource_simple_example.html")])]),o("p",[e._v("Now we will define the simple datasource tool xml. Create a file under tools/data_source/ named hello_datasource.xml.")]),o("p",[e._v("The contents should look like:")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('<tool name="Hello" id="hello_datasource" tool_type="data_source">\n    <description>datasource</description>\n    <command interpreter="python">data_source.py $output $__app__.config.output_size_limit</command>\n    <inputs action=" http://localhost:8051/datasource_simple_example.html" check_values="false" method="get"> \n        <display>go to Hello Datasource Example $GALAXY_URL</display>\n    </inputs>\n    <uihints minwidth="800"/>\n    <outputs>\n        <data name="output" format="auto" />\n    </outputs>\n    <options sanitize="False" refresh="True"/>\n</tool>\n')])]),o("p",[e._v("Add an entry to your tool_conf.xml file to instruct Galaxy to load the data source tool:")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('<tool file="data_source/hello_datasource.xml"/>\n')])]),o("p",[e._v("If you have extra time, you are able to customize additional attributes of your retrieved file by modifying the HTML file (datasource_simple_example.html) and adding reserved name parameters / form inputs:")]),o("table",[o("tr",[o("td",[o("strong",[e._v("Parameter name")])]),o("td",[o("strong",[e._v("Usage")])])]),o("tr",[o("td",[e._v(" name")]),o("td",[e._v(" The external resource can provide a descriptive name for the retrieved data set. If not provided, a default name based upon the name provided in the XML tool configuration is used.")])]),o("tr",[o("td",[e._v(" info")]),o("td",[e._v(" A free-form text string that a resource can use to provide additional information about the data set.")])]),o("tr",[o("td",[e._v(" data_type ")]),o("td",[e._v(" The type of data returned to Galaxy. Examples include bed, sam, gff and maf.")])]),o("tr",[o("td",[e._v(" dbkey")]),o("td",[e._v(" If the data belongs to a single reference genome, this string is used to store this information. Examples include hg18, mm9 and canFam2.")])]),o("tr",[o("td",[e._v(" URL")]),o("td",[e._v(" The user’s history will be populated with a new data set containing the results returned by submitting all provided parameters to this URL.")])])]),o("h2",{attrs:{id:"145--230pm-wrap-your-new-executable-into-a-new-tool"}},[o("a",{attrs:{href:"#145--230pm-wrap-your-new-executable-into-a-new-tool","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("1:45 – 2:30pm Wrap your new executable into a new tool")]),o("p",[e._v("(Work with a partner who has a tool or choose a "),o("a",{attrs:{href:"https://code.google.com/p/bedtools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bedtool")]),e._v(" if you don't have one)")]),o("h3",{attrs:{id:"suggested-procedure"}},[o("a",{attrs:{href:"#suggested-procedure","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Suggested procedure")]),o("ol",[o("li",[o("p",[e._v("RTM for your chosen executable and carefully take note of the required input data files, their formats, user configurable parameters and the outputs and their formats. You will need to specify all of these in the XML and on the command line template.")])]),o("li",[o("p",[e._v("Create or find some input test data files - pro tip: recycle stuff from the test-data directory - there are many, many small datasets there in almost all conceivable dataformats - as old William of Occam said, there's no point in multiplying entities unnecessarily.")])]),o("li",[o("p",[e._v("Run your executable "),o("strong",[e._v("from a shell")]),e._v(" with hand written hard coded parameters including test data paths on the command line. This strategy will ensure that once you can get the thing to work right (without the complications of Galaxy tool syntax) you have the command line you need for a tool and the test outputs for a test and after all, if you can't get it working on the command line, it certainly won't suddenly start working when you add the complications of a Galaxy tool wrapper. All Galaxy really does is run the command line constructed by the templating substitutions.")])]),o("li",[o("p",[e._v("Make an xml file like hello world but with exactly the required command line with hard coded parameters - and make it work in your Galaxy. Put outputs under /temp and use absolute paths (ie starting with /) to the test-data files because later, when Galaxy runs the tool, it will be using a temporary job working directory.")])]),o("li",[o("p",[e._v('Progressively swap out command line arguments with tool form parameters and validation - eg if you used a test-data file like .../test-data/1.bam, add a tool input data parameter named (eg) input1 with ftype="bam" so the user will be able to select any bam in the current history. Replace the hard coded path with ${input1}')])]),o("li",[o("p",[e._v("Add help and attribution")])])]),o("h2",{attrs:{id:"230-session-ends"}},[o("a",{attrs:{href:"#230-session-ends","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("2:30 session ends")]),o("h3",{attrs:{id:"suggested-enhancements-for-those-who-finish-early"}},[o("a",{attrs:{href:"#suggested-enhancements-for-those-who-finish-early","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Suggested enhancements for those who finish early")]),o("ol",[o("li",[e._v("Add a test")]),o("li",[e._v("Set up as a toolshed archive with a /test-data subfolder, tool_dependencies.xml ...")])]),o("h3",{attrs:{id:"bonus-points-1"}},[o("a",{attrs:{href:"#bonus-points-1","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Bonus points")]),o("p",[e._v("Please thank your tutors for giving up their otherwise potentially free time. Something tangible like a beer is not an unacceptable manifestation of the good karma they have earned.")]),o("h3",{attrs:{id:"useful-tips"}},[o("a",{attrs:{href:"#useful-tips","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Useful tips")]),o("ol",[o("li",[e._v("The tools directory contains lots of working code, so if you want to quickly find some working examples of exotic or dimly recalled tool syntax, try something like:")])]),o("div",{staticClass:"indent"},[e._v("```\ngrep sanitizer tools\n```\n")]),e._v("\n    then read the code around the tools containing the tag - there are often lots of false positives but it can be a useful strategy for finding a quick reminder when the documentation is not clear.\n"),o("ol",[o("li",[o("p",[e._v("#2 In the same vein, if you know of a particular tool that has a tool form feature you want to emulate, read the code for that tool and clone the working example into your own new wrapper. This can sometimes save a lot of time and effort where the documentation needs clarification.")])]),o("li",[o("p",[e._v("If you figure something out that was not sufficiently clear (or worse, completely wrong!) in the tool syntax documentation, please contribute it! Send your suggested clarifications to the galaxy-dev list and we'll make sure it gets added. We need all the help we can get to make the documentation better so every little bit you can provide will help the whole community.")])])]),e._t("/events/gcc2013/footer")],2)])}),[],!1,null,null,null);"function"==typeof l&&l(c),"function"==typeof p&&p(c);t.default=c.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);