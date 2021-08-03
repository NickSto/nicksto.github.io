(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{K1VU:function(e,t,n){"use strict";n.r(t);var a=n("KHd+"),o=n("UQSp"),s=n("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var l={VueRemarkRoot:o.a},r=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===i(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?t[e]=l[e]:n[e]=function(){return l[e]}}))},u=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",c={excerpt:null};var m=function(e){e.options[p]&&(e.options[p]=c),s.a.util.defineReactive(e.options,p,c),e.options.computed=u.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},d=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[e._t("/admin/tools/linkbox"),e._v("\n## Writing Tests\n"),n("p",[e._v("Preparing test for your Galaxy tool is easy. In short you include a sample input file and asample output file. Then you specify the parameters that with the given tool and input should produce the desired output.")]),n("p",[e._v("Everybody benefits from a good testing - the tool author ensures quality of tool, admins can easily separate good tools from bad tools and users use tools that are reliable. An examples below explains how to write a test.")]),n("p",[e._v("Tests can be specified in the tool config file using "),n("code",{pre:!0},[e._v("<tests>")]),e._v(" and "),n("code",{pre:!0},[e._v("test")]),e._v(" tags (for more information see "),n("a",{attrs:{href:"/admin/tools/tool-config-syntax/"}},[e._v(" description of test configuration tags")]),e._v(".  For example, the "),n("a",{attrs:{href:"https://github.com/galaxyproject/tools-devteam/blob/master/tool_collections/gops/cluster/cluster.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("cluster tool")]),e._v(" specifies the following tests:")]),n("pre",[n("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('  <tests>\n    <test>\n      <param name="input1" value="5.bed" />\n      <param name="distance" value="1" />\n      <param name="minregions" value="2" />\n      <param name="returntype" value="1" />\n      <output name="output" file="gops-cluster-1.bed" />     \n    </test>\n    <test>\n      <param name="input1" value="gops_cluster_bigint.bed" />\n      <param name="distance" value="1" />\n      <param name="minregions" value="2" />\n      <param name="returntype" value="1" />\n      <output name="output" file="gops-cluster-1.bed" />     \n    </test>\n    <test>\n      <param name="input1" value="5.bed" />\n      <param name="distance" value="1" />\n      <param name="minregions" value="2" />\n      <param name="returntype" value="2" />\n      <output name="output" file="gops-cluster-2.bed" />     \n    </test>    \n    <test>\n      <param name="input1" value="5.bed" />\n      <param name="distance" value="1" />\n      <param name="minregions" value="2" />\n      <param name="returntype" value="3" />\n      <output name="output" file="gops-cluster-3.bed" />     \n    </test>\n  </tests>\n')])]),n("p",[e._v("To explain what this means let's first take a look at the inputs and outputs of the "),n("a",{attrs:{href:"https://github.com/galaxyproject/tools-devteam/blob/master/tool_collections/gops/cluster/cluster.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("cluster tool")]),e._v(". It takes four inputs ("),n("code",{pre:!0},[e._v("input1")]),e._v(", "),n("code",{pre:!0},[e._v("distance")]),e._v(", "),n("code",{pre:!0},[e._v("minregions")]),e._v(", and "),n("code",{pre:!0},[e._v("returntype")]),e._v(") and produces a single "),n("code",{pre:!0},[e._v("output")]),e._v(":")]),n("pre",[n("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('  <inputs>\n    <param format="interval" name="input1" type="data">\n      <label>Cluster intervals of</label>\n    </param>\n    <param name="distance" size="5" type="integer" value="1" help="(bp)">\n      <label>max distance between intervals</label>\n    </param>\n    <param name="minregions" size="5" type="integer" value="2">\n      <label>min number of intervals per cluster</label>\n    </param>\n    <param name="returntype" type="select" label="Return type">\n        <option value="1">Merge clusters into single intervals</option>\n        <option value="2">Find cluster intervals; preserve comments and order</option>\n        <option value="3">Find cluster intervals; output grouped by clusters</option>\n        <option value="4">Find the smallest interval in each cluster</option>\n        <option value="5">Find the largest interval in each cluster</option>\n    </param>\n   </inputs>\n  <outputs>\n    <data format="input" name="output" metadata_source="input1" />\n  </outputs>\n')])]),n("p",[e._v("Now let's take a look at the first test:")]),n("pre",[n("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('    <test>\n      <param name="input1" value="5.bed" />\n      <param name="distance" value="1" />\n      <param name="minregions" value="2" />\n      <param name="returntype" value="1" />\n      <output name="output" file="gops-cluster-1.bed" />     \n    </test>\n')])]),n("p",[e._v("All this does is specify parameters that will be used by test framework to run this test. For most input types, the value should be what would be entered by the user when running the tool through the web, with the exception of input and output. The input ("),n("code",{pre:!0},[e._v("5.bed")]),e._v(") and output ("),n("code",{pre:!0},[e._v("gops-cluster-1.bed")]),e._v(") files reside within the "),n("code",{pre:!0},[e._v("~/test-data")]),e._v(" directory. Once the test is executed the framework simply compares generated output with an example file ("),n("code",{pre:!0},[e._v("gops-cluster-1.bed")]),e._v(" in this case). If there are no differences - test is declared success.")]),n("p",[e._v("To run the Galaxy functional tests see "),n("a",{attrs:{href:"/admin/running-tests/"}},[e._v("Running Tests")]),e._v(".")]),n("hr"),n("h2",{attrs:{id:"advanced-test-settings"}},[n("a",{attrs:{href:"#advanced-test-settings","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Advanced Test Settings")]),n("h3",{attrs:{id:"output-file-comparison-methods"}},[n("a",{attrs:{href:"#output-file-comparison-methods","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Output File Comparison Methods")]),n("h4",{attrs:{id:"diff"}},[n("a",{attrs:{href:"#diff","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("diff")]),n("p",[e._v("The default comparison method ("),n("em",[e._v("diff")]),e._v(") simply compares line by line in a file to check if the result of the test run of the tool matches the expected output specified in the "),n("code",{pre:!0},[e._v("<output>")]),e._v(" tag. A "),n("em",[e._v("lines_diff")]),e._v(" attribute can be provided to allow the declared number of lines to differ between outputs. A 'change' in a line is equivalent to a count of 2 line differences: one line removed, one line added.")]),n("pre",[n("code",{pre:!0},[e._v('    <test>\n      <output name="output" file="variable_output_file.bed" lines_diff="10"/>     \n    </test>\n')])]),n("p",[e._v("Several tools, including those that use Composite Datatypes such as rGenetics, create additional files which are stored in a directory associated with the main history item. If you have a tool that creates these extra files, it is a good idea to write tests which also verify their correctness. This can be done on a per extra file basis or by comparing an entire directory; all of the previously mentioned comparison methods are applicable.")]),n("p",[e._v("The two examples below are from "),n("code",{pre:!0},[e._v("tools/peak_calling/macs_wrapper.xml")]),e._v(".")]),n("h4",{attrs:{id:"file-by-file-comparison"}},[n("a",{attrs:{href:"#file-by-file-comparison","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("File-by-file comparison")]),n("p",[e._v("Here two outputs are being tested; the first file has no extra files, but the second file has five extra files (in addition to the primary file) which are being tested.")]),n("pre",[n("code",{pre:!0},[e._v('    <test>\n      <output name="output_bed_file" file="peakcalling_macs/macs_test_1_out.bed" />\n      <output name="output_html_file" file="peakcalling_macs/macs_test_1_out.html" compare="re_match" >\n        <extra_files type="file" name="Galaxy_Test_Run_model.pdf" value="peakcalling_macs/test2/Galaxy_Test_Run_model.pdf" compare="re_match"/>\n        <extra_files type="file" name="Galaxy_Test_Run_model.r" value="peakcalling_macs/test2/Galaxy_Test_Run_model.r" compare="re_match"/>\n        <extra_files type="file" name="Galaxy_Test_Run_model.r.log" value="peakcalling_macs/test2/Galaxy_Test_Run_model.r.log"/>\n        <extra_files type="file" name="Galaxy_Test_Run_negative_peaks.xls" value="peakcalling_macs/test2/Galaxy_Test_Run_negative_peaks.xls" compare="re_match"/>\n        <extra_files type="file" name="Galaxy_Test_Run_peaks.xls" value="peakcalling_macs/test2/Galaxy_Test_Run_peaks.xls" compare="re_match"/>\n      </output>\n    </test>\n')])]),n("h4",{attrs:{id:"directory-comparison"}},[n("a",{attrs:{href:"#directory-comparison","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Directory comparison")]),n("p",[e._v("Here four outputs are being tested; the first three files have no extra files, but the last file has 5 extra files (in addition to the primary file) which are being tested by the directory method. Each file in the specified directory of "),n("em",[e._v("output_html_file")]),e._v(" will be tested against the files of the same name in the history item's extra files path.")]),n("pre",[n("code",{pre:!0},[e._v('    <test>\n      <output name="output_bed_file" file="peakcalling_macs/macs_test_1_out.bed" />\n      <output name="output_xls_to_interval_peaks_file" file="peakcalling_macs/macs_test_2_peaks_out.interval" lines_diff="4" />\n      <output name="output_xls_to_interval_negative_peaks_file" file="peakcalling_macs/macs_test_2_neg_peaks_out.interval" />\n      <output name="output_html_file" file="peakcalling_macs/macs_test_1_out.html" compare="re_match" >\n        <extra_files type="directory" value="peakcalling_macs/test2/" compare="re_match"/>\n      </output>\n    </test>\n')])]),n("hr"),n("h2",{attrs:{id:"beware-of-twill-bug"}},[n("a",{attrs:{href:"#beware-of-twill-bug","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Beware of twill bug")]),n("p",[e._v('See the following e-mail for explanation of a workaround that deals with "dashed" options:')]),n("pre",[n("code",{pre:!0},[e._v('Hello Assaf,\n\nThis is a known bug in twill 0.9.  The work-around is to use the label rather than the value in your functional test.  So, in your example, the test should be changed to the following.  Let me know if this does not work.\n\nOne of the tests looks like this:\n-------------\n<test>\n  \x3c!-- ASCII to NUMERIC --\x3e\n  <param name="input" value="fastq_qual_conv1.fastq" />\n  <param name="QUAL_FORMAT" value="Numeric quality scores" />\n  <output name="output" file="fastq_qual_conv1.out" />\n</test>\n-------------\n\nGreg Von Kuster\nGalaxy Development Team\n\n\nAssaf Gordon wrote:\nHello,\n\nI wrote a functional test for my tool, and encountered a strange behavior.\n\nOne of the tool\'s parameters looks like this:\n-------------\n<param name="QUAL_FORMAT" type="select" label="output format">\n     <option value="-a">ASCII (letters) quality scores</option>\n     <option value="-n">Numeric quality scores</option>\n</param>\n------------\n\nOne of the tests looks like this:\n-------------\n<test>\n   \x3c!-- ASCII to NUMERIC --\x3e\n   <param name="input" value="fastq_qual_conv1.fastq" />\n   <param name="QUAL_FORMAT" value="-n" />\n   <output name="output" file="fastq_qual_conv1.out" />\n</test>\n-------------\n\n\nWhen I run the functional tests for this tool, I get the following exception:\n---------------\nTraceback (most recent call last):\nFile "galaxy_devel_tools/test/functional/test_toolbox.py", line 114, in test_tool\n    self.do_it()\nFile "galaxy_devel_tools/test/functional/test_toolbox.py", line 44, in do_it\n    self.run_tool( self.testdef.tool.id, repeat_name=repeat_name, **page_inputs )\nFile "galaxy_devel_tools/test/base/twilltestcase.py", line 520, in run_tool\n    self.submit_form( **kwd )\n  File "galaxy_devel_tools/test/base/twilltestcase.py", line 495, in submit_form\n    raise AssertionError( errmsg )\nAssertionError: Attempting to set field \'QUAL_FORMAT\' to value \'[\'-n\']\' in form \'tool_form\' threw exception: cannot find value/label "n" in list control\ncontrol: <SelectControl(QUAL_FORMAT=[-a, -n])>\n---------------\n\nIf I understand the exception correctly, it means that somewhere the minus character ("-n") gets dropped, and therefor the value \'n\' cannot be found in the list (which contains "-n" and "-a").\n\n\n\nIs this an actual bug or am I doing something wrong?\n\nThanks,\n   Gordon.\n')])]),n("hr"),n("h2",{attrs:{id:"saving-generated-functional-test-output-files"}},[n("a",{attrs:{href:"#saving-generated-functional-test-output-files","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Saving generated functional test output files")]),n("p",[e._v("A small change to the test framework was introduced in April 2011 allowing test outputs generated by Twill during functional tests to be saved, making it easier to update test expected outputs after changes to a tool.")]),n("p",[e._v("If there is a variable called 'GALAXY_TEST_SAVE' in the environment when tests are being run, each output file Twill generates that is compared with a reference file will be written to that directory - assuming write permissions and so on. For example:")]),n("pre",[n("code",{pre:!0},[e._v("setenv GALAXY_TEST_SAVE /tmp/galtest\nsh run_functional_tests.sh -id myTool\n")])]),n("p",[e._v("will test the individual tool with id 'myTool' and write the tested output files to /tmp/galtest. Running a full set of functional tests will of course result in a full set of test outputs being saved. To stop test outputs from being saved, reset GALAXY_TOOL_SAVE to null")]),n("pre",[n("code",{pre:!0},[e._v("setenv GALAXY_TEST_SAVE\n")])]),n("p",[e._v("See also the environment variable GALAXY_TEST_NO_CLEANUP which disables automated removal of the test output files.")])],2)}),[],!1,null,null,null);"function"==typeof r&&r(d),"function"==typeof m&&m(d);t.default=d.exports},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);