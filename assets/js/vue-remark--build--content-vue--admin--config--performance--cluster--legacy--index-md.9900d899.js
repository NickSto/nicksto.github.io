(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},iF6J:function(e,t,o){"use strict";o.r(t);var a=o("KHd+"),s=o("UQSp"),r=o("Kw5r");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===n(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:o[e]=function(){return i[e]}}))},h=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",d={excerpt:null,title:"Running Galaxy Tools on a Cluster"};var c=function(e){e.options[u]&&(e.options[u]=d),r.a.util.defineReactive(e.options,u,d),e.options.computed=h.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},p=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[e._t("/admin/config/performance/linkbox"),o("p",[e._v("Galaxy is designed to run jobs on your local system by default, but it can be configured to run jobs on a cluster. The front-end Galaxy application runs on a single server as usual, but tools are run on cluster nodes instead.")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-wiki"}},[e._v("This documentation applies to old Galaxy releases.  For the April 1, 2013 (tag `release_2013.04.01`) Galaxy release and newer, use the [current](/src/admin/config/performance/cluster/index.md) documentation.\n")])]),o("h2",{attrs:{id:"cluster-resources-managers"}},[o("a",{attrs:{href:"#cluster-resources-managers","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Cluster Resources Managers")]),o("div",{staticClass:"left"},[o("a",{attrs:{href:"http://www.drmaa.org"}},[o("img",{attrs:{src:"/src/images/logos/DRMAALogo200.png",alt:"DRMAA"}})])]),e._v("Galaxy is known to work with [TORQUE PBS](http://www.clusterresources.com/pages/products/torque-resource-manager.php), [Sun Grid Engine](http://gridengine.sunsource.net/), [Platform LSF](http://www.platform.com/workload-management/high-performance-computing), [PBS Pro](http://www.pbsworks.com/Product.aspx?id=1) and there's work in progress for [SLURM](https://computing.llnl.gov/linux/slurm/) (see this [blog post](http://mdahlo.blogspot.com/2011/06/galaxy-on-uppmax.html)). However, since Galaxy uses the [Distributed Resource Management Application API](http://www.drmaa.org), it should work with [any distributed resource manager (DRM) which implements the DRMAA](http://www.drmaa.org/implementations.php). Galaxy interfaces with these systems via [drmaa-python](http://code.google.com/p/drmaa-python/), although for legacy reasons, [pbs_python](https://subtrac.sara.nl/oss/pbs_python) can be used for TORQUE. If you successfully run Galaxy with another DRM, please let us know via an email to the [galaxy-dev mailing list](/src/mailing-lists/index.md).\n"),o("p",[e._v("Galaxy contributor John Chilton has also written "),o("a",{attrs:{href:"/src/admin/config/pulsar/index.md"}},[e._v("Pulsar")]),e._v(" which does not require an existing cluster or a shared filesystem and can also run jobs on Windows hosts. Please see the README included with Pulsar for instructions on how to set it up.")]),o("p",[e._v("Installing and configuring your cluster hardware and management software is outside the scope of this document (and specific to each site). To continue, it's assumed that you have a working cluster installation wherein the user which you intend to run Galaxy with (we'll just refer to this as the \"Galaxy user\") is able to successfully run jobs via the resource manager's command line tools.")]),o("h3",{attrs:{id:"drmaa-egg"}},[o("a",{attrs:{href:"#drmaa-egg","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("drmaa egg")]),o("p",[e._v("The drmaa egg is provided by Galaxy, but you must tell it where your resource manager's DRMAA library is located, and this is done with the "),o("code",{pre:!0},[e._v("$DRMAA_LIBRARY_PATH")]),e._v(" environment variable:")]),o("pre",[o("code",{pre:!0},[e._v("% export DRMAA_LIBRARY_PATH=/galaxy/lsf/7.0/linux2.6-glibc2.3-x86_64/lib/libdrmaa.so.1.0.3\n% export DRMAA_LIBRARY_PATH=/galaxy/sge/lib/lx24-amd64/libdrmaa.so.1.0\n")])]),o("p",[o("strong",[e._v("Important note on using the drmaa runner with TORQUE")]),e._v(": The drmaa egg and runner can be used with TORQUE, but you should not use the "),o("code",{pre:!0},[e._v("libdrmaa.so")]),e._v(" that is bundled with the TORQUE client, since using this library will result in a segmentation fault when the drmaa runner attempts to write the job template, and any native job runner options will not be passed to the DRM.  Instead, you should compile the "),o("a",{attrs:{href:"http://apps.man.poznan.pl/trac/pbs-drmaa/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbs-drmaa")]),e._v(" library and use this as the value for "),o("code",{pre:!0},[e._v("DRMAA_LIBRARY_PATH")]),e._v(" instead.  Thanks to Oleksandr Moskalenko for debugging this problem and finding the solution.")]),o("h3",{attrs:{id:"pbs_python-egg"}},[o("a",{attrs:{href:"#pbs_python-egg","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("pbs_python egg")]),o("p",[e._v('pbs_python is dependent upon TORQUE and is not provided by Galaxy. You must "scramble" it yourself (for more information on Galaxy\'s Python Egg dependencies, see the '),o("a",{attrs:{href:"/src/admin/config/Eggs/index.md"}},[e._v("Eggs")]),e._v(" page). Fortunately, this process should be simple:")]),o("pre",[o("code",{pre:!0},[e._v("LIBTORQUE_DIR=/path/to/libtorque python scripts/scramble.py -e pbs_python\n")])]),o("h2",{attrs:{id:"preliminary-setup"}},[o("a",{attrs:{href:"#preliminary-setup","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Preliminary Setup")]),o("p",[e._v("Galaxy supports two different methods of cluster deployment:")]),o("ul",[o("li",[o("strong",[e._v("Unified:")]),e._v(" The copy of Galaxy on the application server is the same copy as the one on the cluster nodes. The most common method to do this would be to put Galaxy in NFS somewhere that is accessible by the application server and the cluster nodes. We'll refer to this as the "),o("em",[e._v("unified")]),e._v(" method.")]),o("li",[o("strong",[e._v("Staged:")]),e._v(" The copy of Galaxy on the application server is NOT the same copy as the one on the cluster nodes. For example, Galaxy is put in local disk space on all the systems. This is a more complex configuration but can reduce stress on an NFS server for certain types of jobs. We'll refer to this as the "),o("em",[e._v("staged")]),e._v(" method. Using the staged method is not recommended unless your tools are writing so much that it's causing problems with your NFS server. This process is fairly complex and assumes an intermediate level of "),o("em",[e._v("nix sysadmin knowledge. The staged method is currently only supported with TORQUE.  ")]),e._v("Please note that the Staged Method is not in active use or development, and while we may be able to fix bugs that arise in this method due to changes in the way jobs run, not much time will be invested in maintaining it.*")])]),o("p",[e._v("For both methods, the path to Galaxy must be exactly the same on both the nodes and the application server. This is because absolute paths are used to refer to datasets when running the command on the cluster node. This is a limitation that should eventually be removed. Both methods are explained in further detail below.")]),o("h3",{attrs:{id:"unified-method"}},[o("a",{attrs:{href:"#unified-method","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Unified Method")]),o("p",[e._v("For this method, you'll simply need to ensure that your Galaxy user can access the Galaxy directory on the cluster nodes and the application server. Remember that the path must be the same on both. For example, if I were to check out Galaxy to my home directory:")]),o("pre",[o("code",{pre:!0},[e._v("galaxy_server% hg clone http://www.bx.psu.edu/hg/galaxy /home/nate/galaxy_dist\n")])]),o("p",[e._v("Then I should be able to access that directory from my cluster nodes:")]),o("pre",[o("code",{pre:!0},[e._v("galaxy_server% qsub -I\nqsub: waiting for job 1234.torque.server to start\nqsub: job 1234.torque.server ready\n\nnode1% cd /home/nate/galaxy_dist\nnode1%\n")])]),o("p",[e._v("One should also check that the job manager can accept jobs from the "),o("code",{pre:!0},[e._v("galaxy")]),e._v(" user.  This is typically not an issue unless the "),o("code",{pre:!0},[e._v("galaxy")]),e._v(" user lacks a shell login (not uncommon with secure server configurations); this may be an assigned shell of "),o("code",{pre:!0},[e._v("/bin/false")]),e._v(" (Debian/Ubuntu) or "),o("code",{pre:!0},[e._v("/bin/nologin")]),e._v(" (Fedora"),o("a",{attrs:{href:"/src/admin/config/performance/cluster/legacy/RedHat/index.md"}},[e._v("/RedHat")]),e._v(").  A default shell login is typically required for job submission with "),o("a",{attrs:{href:"http://www.clusterresources.com/pages/products/torque-resource-manager.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("TORQUE/PBS")]),e._v("; this can be set using "),o("code",{pre:!0},[e._v("usermod")]),e._v(":")]),o("pre",[o("code",{pre:!0},[e._v("sudo usermod -s /bin/bash galaxy\n")])]),o("p",[e._v("If your cluster nodes have Internet access (NAT is okay) and you want to run the data source tools (upload, ucsc, etc.) on the cluster (doing so is highly recommended), please set "),o("code",{pre:!0},[e._v("new_file_path")]),e._v(" in "),o("code",{pre:!0},[e._v("universe_wsgi.ini")]),e._v(" to a directory somewhere in your shared filesystem:")]),o("pre",[o("code",{pre:!0},[e._v("new_file_path = /home/nate/galaxy_dist/database/tmp\n")])]),o("p",[e._v("Once set, comment/remove the local tool runner overrides from the bottom of "),o("code",{pre:!0},[e._v("universe_wsgi.ini")]),e._v(", (such as "),o("code",{pre:!0},[e._v("upload1 = local:///")]),e._v(") and then start Galaxy.")]),o("p",[e._v("You may also find that you need to disable attribute caching in your filesystem.  In NFS this is done with the -noac mount option (Linux) or -actimeo=0 (Solaris).  The attribute cache can prevent Galaxy from detecting the presence of output files or properly reading their sizes.  Note that there is some performance trade-off here since all attributes will have to be read from the file server upon every file access.")]),o("h3",{attrs:{id:"staged-method"}},[o("a",{attrs:{href:"#staged-method","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Staged Method")]),o("h4",{attrs:{id:"configure-file-staging"}},[o("a",{attrs:{href:"#configure-file-staging","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Configure file staging")]),o("p",[e._v("This method makes use of PBS' stage-in/stage-out capabilities to copy the job's input datasets to the node and output datasets back from the node before and after the job runs. HOW these are staged is configured in TORQUE. By default, it uses rcp, but we suggest using scp. Information on how to configure staging is available in the "),o("a",{attrs:{href:"http://www.clusterresources.com/wiki/doku.php?id=torque:torque_wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("TORQUE Administrator Manual")]),e._v(". Ensure that both stage-in and stage-out works from your application server before proceeding.")]),o("p",[e._v("TIP: To use scp, you'll need to make sure that the galaxy user can scp/ssh from EACH cluster node to the application server with no password or host key prompts! This usually means logging in to each node and initiating an ssh connection back to the application server to accept the host key (or pre-distributing the galaxy user's ~/.ssh/known_hosts file).")]),o("p",[e._v("Here's the transcript of a brief test to make sure that it works as expected. The file /tmp/foo is created on the server and PBS copies it to the cluster node. Then, the file /tmp/bar is created on the cluster node, which PBS copies back to the server:")]),o("pre",[o("code",{pre:!0},[e._v("galaxy_server% echo foo > /tmp/foo\ngalaxy_server% qsub -I -W stagein=/tmp/foo@galaxy_server:/tmp/foo -W stageout=/tmp/bar@galaxy_server:/tmp/bar \nqsub: waiting for job 1235.torque.server to start\nqsub: job 1235.torque.server ready\n\n\n\n\nnode1% cat /tmp/foo\nfoo\nnode1% echo bar > /tmp/bar\nnode1% exit\n\nqsub: job 1235.torque.server completed\ngalaxy_server% cat /tmp/bar\nbar\ngalaxy_server%\n")])]),o("h4",{attrs:{id:"copy-galaxy-to-your-nodes"}},[o("a",{attrs:{href:"#copy-galaxy-to-your-nodes","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Copy Galaxy to your nodes")]),o("p",[e._v("This can be any number of ways, in whatever method is convenient for you. Here at Penn State, we use rsync to keep the copy of Galaxy on the node consistent with the copy on the application server. This is run every so often via cfengine to ensure that the copy on the nodes is up to date, but it could also be done more simply with cron. Here's our rsync invocation:")]),o("pre",[o("code",{pre:!0},[e._v("/usr/bin/rsync -avz --exclude=galaxy_dist/database --exclude=\\.svn --exclude=\\*.log\\* --exclude=\\*.pid --delete galaxy_server\\:/var/opt/galaxy_dist /var/opt\n")])]),o("p",[e._v("galaxy_dist is left off /var/opt intentionally - This copies the galaxy_dist directory from the galaxy_server to the /var/opt directory on the node.")]),o("h4",{attrs:{id:"create-a-shared-temporary-directory"}},[o("a",{attrs:{href:"#create-a-shared-temporary-directory","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Create a shared temporary directory")]),o("p",[e._v("Some tools make use of temporary files created on the server, but accessed on the nodes. For this, you'll need to make a directory (galaxy_dist/database/tmp by default) available everywhere - we do this with NFS. Rather than directly mount the tmp directory in place, it's acceptable (and usually simpler) to create a symbolic link to some other location. This way you can use an automounter to manage the mount for you.")]),o("p",[e._v("In the following example, galaxy_server shares a directory, /export/galaxy_tmp, via NFS to the cluster nodes. The cluster nodes mount this directory as /import/galaxy_tmp. On all systems, Galaxy is located at /var/opt/galaxy_dist.")]),o("pre",[o("code",{pre:!0},[e._v("galaxy_server% ln -s /export/galaxy_tmp /var/opt/galaxy_dist/database/tmp\ngalaxy_server% ssh node1\nnode1% ln -s /import/galaxy_tmp /var/opt/galaxy_dist/database/tmp\nnode1% exit\ngalaxy_server% ssh node2\nnode2% ln -s /import/galaxy_tmp /var/opt/galaxy_dist/database/tmp\nnode2% exit\ngalaxy_server%\n...\n")])]),o("p",[e._v("Of course, this is terribly inefficient for anything more than a small handful of nodes, so you'll probably want to script it.")]),o("p",[e._v("If your cluster nodes have Internet access (NAT is okay) and you want to run the data source tools (upload, ucsc, etc.) on the cluster (doing so is highly recommended), please set a temporary directory somewhere in your shared filesystem:")]),o("pre",[o("code",{pre:!0},[e._v("export TEMP=/var/opt/galaxy_dist/database/tmp\n")])]),o("p",[e._v("Once set, comment/remove the local tool runner overrides from the bottom of "),o("code",{pre:!0},[e._v("universe_wsgi.ini")]),e._v(", (such as "),o("code",{pre:!0},[e._v("upload1 = local:///")]),e._v("). You will most likely want to make the setting of "),o("code",{pre:!0},[e._v("$TEMP")]),e._v(" perisistent by putting it in your shell's startup file or the Galaxy init script.")]),o("h4",{attrs:{id:"create-a-file-stage-directory"}},[o("a",{attrs:{href:"#create-a-file-stage-directory","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Create a file stage directory")]),o("p",[e._v("Because the datasets in Galaxy's galaxy_dist/database/files directory are stored in subdirectories, there's no way for PBS to stage them in unless the subdirectories already exist (which is not really possible)! We solve this problem by staging the datasets in and out of a different directory, and then symlink to those datasets from the galaxy_dist/database/files/ directory on the node. You'll need to pre-create this stage directory on all the nodes:")]),o("pre",[o("code",{pre:!0},[e._v("galaxy_server% ssh node1\nnode1% mkdir /tmp/galaxy_stage\nnode1% exit\ngalaxy_server% ssh node2\nnode2% mkdir /tmp/galaxy_stage\nnode2% exit\n...\n")])]),o("h2",{attrs:{id:"galaxy-configuration"}},[o("a",{attrs:{href:"#galaxy-configuration","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Galaxy Configuration")]),o("p",[e._v("A number of options need to be configured in Galaxy's universe_wsgi.ini file to use the cluster:")]),o("ul",[o("li",[o("strong",[e._v("start_job_runners = pbs,drmaa")]),e._v(" - A comma separated list of job runners to start in addition to the local runner. It's possible to have more than one cluster runner, although most sites will probably want to just set one. If no extra runners are started, all jobs are run on the Galaxy application server, regardless of what job_runner URL is specified in the [galaxy:tool_runners] section of the config file.")]),o("li",[o("strong",[e._v("default_cluster_job_runner = [ !pbs:/// | !drmaa:/// ]")]),e._v(" - The URL of the job runner to use when a job runner for a tool is not explicitly defined. This is ignored if "),o("strong",[e._v("start_job_runners")]),e._v(" is not set.")])]),o("p",[e._v("For the "),o("em",[e._v("unified")]),e._v(" method, these are the only two options that should be set.")]),o("p",[e._v("The "),o("strong",[e._v("new_file_path")]),e._v(" option in the config file is used to control where temporary files are written by the Galaxy framework, but the value of this option will not carry over to temporary files created by tools running on a cluster.  To control this (to prevent tools from writing to the default, /tmp, which may be a small partition), you should set the "),o("code",{pre:!0},[e._v("$TEMP")]),e._v(" environment variable "),o("strong",[e._v("on your cluster nodes")]),e._v(", via one of a few methods:")]),o("ul",[o("li",[e._v("In the user's shell startup files (e.g. .bash_profile).  This works for TORQUE, but SGE invokes bash such that startup files are not read.")]),o("li",[e._v("For SGE, in the user's ~/.sge_request, with the "),o("strong",[e._v("-v")]),e._v(" option.")]),o("li",[e._v("In the file specified in the "),o("strong",[e._v("environment_setup_file")]),e._v(" option in the Galaxy config file.")])]),o("p",[e._v("For the "),o("em",[e._v("staged")]),e._v(" method, the following options must also be set:")]),o("ul",[o("li",[o("strong",[e._v("pbs_application_server = galaxy_server")]),e._v(" - This is the hostname of the Galaxy application server, as seen from the cluster nodes. Since cluster nodes are often on a private network, this may not necessarily be the application server's public hostname. This is the hostname passed to ssh to copy the job's stdout and stderr files back to the application server, so whatever you set here must exist in the galaxy user's ~/.ssh/known_hosts file to prevent failure due to a host key prompt.")]),o("li",[o("strong",[e._v("pbs_stage_path = /tmp/galaxy_stage")]),e._v(" - The directory on the cluster nodes where datasets will be staged in and out. This must exist before you try to run jobs.")]),o("li",[o("strong",[e._v("pbs_dataset_server = galaxy_server")]),e._v(" - This is the hostname of the system where Galaxy's datasets are stored. This is probably the same as the application server, but here at Penn State, our datasets are housed on a separate fileserver and then mounted on the application server via NFS, so this option is necessary. Please note that if you have separate dataset fileserver, the full path to the datasets must again be the same as on the application server and cluster nodes. This is usually most easily acheived with symbolic links.")])]),o("h3",{attrs:{id:"the-job-runner-url"}},[o("a",{attrs:{href:"#the-job-runner-url","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("The job runner URL")]),o("p",[e._v("In the Galaxy config (universe_wsgi.ini), the desired job runner is specified with a URL. The format depends on the runner:")]),o("ul",[o("li",[o("strong",[e._v("local:///")]),e._v(" - The local runner. No arguments available.")]),o("li",[o("strong",[e._v("pbs://[pbs_server]/[queue]/[pbs_options]")]),e._v(" - The PBS runner. Arguments are the PBS server name, the queue name, any PBS-specific options, and all are optional:"),o("ul",[o("li",[o("strong",[e._v("pbs:///")]),e._v(" - Use the default queue on the default PBS server.")]),o("li",[o("strong",[e._v("pbs:///galaxy")]),e._v(" - Use the 'galaxy' queue on the default PBS server.")]),o("li",[o("strong",[e._v("pbs://torque2.example.edu/")]),e._v(" - Use the default queue on the torque2.example.edu PBS server.")]),o("li",[o("strong",[e._v("pbs:///bignodes/-l nodes=1:ppn=8,mem=32gb/")]),e._v(" - Use the 'bignodes' queue and require 8 CPUs on one node and 32GB of memory. Separate multiple PBS flag options with spaces.")])])]),o("li",[o("strong",[e._v("drmaa://[native_options]/")]),e._v(" - The DRMAA runner. Arguments are any DRM-specific options, and are optional:"),o("ul",[o("li",[o("strong",[e._v("drmaa:///")]),e._v(" - Use the environment defaults for RM-specific attributes like queue and project.")]),o("li",[o("strong",[e._v("drmaa://-P bignodes -R y -pe threads 8/")]),e._v(" - Use the 'bignodes' project and reserve a node with 8 cores for the tool. Separate multiple DRM flag options with spaces.")])])])]),o("p",[e._v("Please note that the "),o("strong",[e._v("pbs_options")]),e._v(" and "),o("strong",[e._v("native_options")]),e._v(" fields are considered to be a temporary solution and it is the intent of the Galaxy team to provide a more general interface to these fields in the future. However, no timeline has been set on development of a replacement (and this capability will not be removed before a replacement interface is developed).")]),o("h2",{attrs:{id:"tool-configuration"}},[o("a",{attrs:{href:"#tool-configuration","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Tool Configuration")]),o("h3",{attrs:{id:"tool-runner-configuration"}},[o("a",{attrs:{href:"#tool-runner-configuration","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Tool Runner Configuration")]),o("p",[e._v("The config file has a section titled [galaxy:tool_runners], which is where you may place any per-tool job runner overrides. If an override isn't specified, where the tool is run depends on whether or not you started any runners in addition to the local runner.")]),o("ul",[o("li",[e._v("If the "),o("strong",[e._v("start_job_runners")]),e._v(" option is not set in universe_wsgi.ini, the local job runner will ALWAYS be used, regardless of whether or not the tool has an override specified.")]),o("li",[e._v("If the "),o("strong",[e._v("start_job_runners")]),e._v(" option IS set, then the [galaxy:tool_runners] section is consulted. If there's no override for the tool, then the URL specified in "),o("strong",[e._v("default_cluster_job_runner")]),e._v(" is what will be used to run the job.")])]),o("p",[e._v("If "),o("strong",[e._v("start_job_runners")]),e._v(" is set AND the tool has a [galaxy:tool_runners] entry, it will be consulted:")]),o("pre",[o("code",{pre:!0},[e._v("tool_id = runner_url:///\n")])]),o("p",[e._v("Primarily, this can be used to force jobs to run locally (by specifying "),o("strong",[e._v("local:///")]),e._v(" instead of on the cluster, which is set by default for most of the data source tools.")]),o("p",[e._v("Or, if you want a tool to use a different DRM server or queue than the default set in universe_wsgi.ini, you can specify them on a tool-by-tool basis with the appropriate "),o("strong",[e._v("pbs://")]),e._v(" or "),o("strong",[e._v("drmaa://")]),e._v(" URL. An example of where this might be useful is a tool which needs larger amounts of memory than might be available on the nodes in the default queue.")]),o("h3",{attrs:{id:"tool-handler-configuration"}},[o("a",{attrs:{href:"#tool-handler-configuration","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Tool Handler Configuration")]),o("p",[e._v("You can also control which job handler will be used via the similarly named [galaxy:tool_handlers] configuration section.  The synax on the left hand of the assignment (tool_id[params]) syntax is identical to the tool_runners options.  On the right hand of the assignment, you can specify which handler should be used to handle jobs for the specified tool/params.  More details about how to configure multiple job handlers can be found on the "),o("a",{attrs:{href:"/src/admin/config/performance/scaling/index.md"}},[e._v("Admin/Config/Performance/Scaling")]),e._v(" page.")]),o("h2",{attrs:{id:"submitting-jobs-as-the-real-user"}},[o("a",{attrs:{href:"#submitting-jobs-as-the-real-user","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Submitting Jobs as the Real User")]),o("p",[e._v("Galaxy runs as a process on your server under whatever user starts the server - usually an account created for the purpose of running Galaxy. Jobs will be submitted to your cluster(s) as this user. In environments where users in Galaxy are guaranteed to be users on the underlying system (i.e. Galaxy is configured to use external authentication), it may be desirable to submit jobs to the cluster as the user logged in to Galaxy rather than Galaxy's system user.")]),o("h3",{attrs:{id:"caveats"}},[o("a",{attrs:{href:"#caveats","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Caveats")]),o("p",[e._v("Since this is a complex problem, the current solution does have some caveats:")]),o("ul",[o("li",[e._v("All of the datasets stored in Galaxy will have to be readable on the underlying filesystem by all Galaxy users. Said users need not have direct access to any systems which mount these filesystems, only the ability to run jobs on clusters that mount them. But I expect that in most environments, users will have the ability to submit jobs to these clusters or log in to these clusters outside of Galaxy, so this will be a security concern to evaluate for most environments."),o("ul",[o("li",[o("em",[e._v("Technical details")]),e._v(" - Since Galaxy maintains dataset sharing internally and all files are owned by the Galaxy user, when running jobs only under a single user, permissions can be set such that only the Galaxy user can read all datasets. Since the dataset may be shared by multiple users, it is not suitable to simply change ownership of inputs before a job runs (what if another user tried to use the same dataset as an input during this time?). This could possibly be solved if Galaxy had tight control over extended ACLs on the file, but since many different ACL schemes exist, Galaxy would need a module for each scheme to be supported.")])])]),o("li",[e._v("The real user system works by changing ownership of the job's working directory to the system user matching the Galaxy user's email address (with the @domain stripped off) prior to running the job, and back to the Galaxy user once the job has completed. It does this by executing a site-customizable script via "),o("a",{attrs:{href:"http://www.gratisoft.us/sudo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("sudo")]),e._v(". The script accepts a path and does nothing to ensure that this path is a Galaxy working directory. So anyone who has access to the Galaxy user could use this script and sudo to change the ownership of any file or directory. Patches to tighten this are welcome.")])]),o("h3",{attrs:{id:"configuration"}},[o("a",{attrs:{href:"#configuration","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Configuration")]),o("p",[e._v("You'll need to ensure that all datasets are stored on the filesystem such that they are readable by all users that will use Galaxy: either made readable by a group, or world-readable. If using a group, set your "),o("code",{pre:!0},[e._v("umask(1)")]),e._v(" to "),o("strong",[e._v("027")]),e._v(" or for world-readable, use "),o("strong",[e._v("022")]),e._v(" Setting umask assumes your underlying filesystem uses POSIX permissions, so if this is not the case, your environment changes may be different.")]),o("p",[e._v("The directory specified in "),o("code",{pre:!0},[e._v("new_file_path")]),e._v(" in the Galaxy config should be world-writable, cluster-accessible (via the same absolute path) and have its sticky bit (+t) set. This directory should also be cleaned regularly using a script or program as is appropriate for your site, since temporary files created here may not always be cleaned up under certain conditions.")]),o("p",[e._v("The "),o("code",{pre:!0},[e._v("set_metadata_externally")]),e._v(" and "),o("code",{pre:!0},[e._v("outputs_to_working_directory")]),e._v(" options in the Galaxy config "),o("strong",[e._v("must")]),e._v(" be set to "),o("code",{pre:!0},[e._v("True")]),e._v(". "),o("code",{pre:!0},[e._v("set_metadata_externally")]),e._v(" is always recommended for Galaxy servers running outside of a single user's development environment. "),o("code",{pre:!0},[e._v("outputs_to_working_directory")]),e._v(" ensures that a tool/job's outputs are written to the temporary working directory, which (when using the real user system) is owned by the real user who submitted the job. If left set to the default ("),o("code",{pre:!0},[e._v("False")]),e._v("), the tool will attempt to write directly to the directory specified in "),o("code",{pre:!0},[e._v("file_path")]),e._v(" (by default, "),o("code",{pre:!0},[e._v("galaxy-dist/database/files/")]),e._v("), which must be owned by the Galaxy user (and thus will not be writable by the real user).")]),o("p",[e._v("Once these are set, you must set the "),o("code",{pre:!0},[e._v("drmaa_external_*")]),e._v(" settings in the Galaxy config and configure sudo to allow them to be run.  A sudo config using the "),o("code",{pre:!0},[e._v("drmaa_external_*")]),e._v(" scripts set in the sample "),o("code",{pre:!0},[e._v("universe_wsgi.ini")]),e._v(" would be:")]),o("pre",[o("code",{pre:!0},[e._v("galaxy  ALL = (root) NOPASSWD: SETENV: /opt/galaxy/scripts/drmaa_external_runner.py\ngalaxy  ALL = (root) NOPASSWD: SETENV: /opt/galaxy/scripts/drmaa_external_killer.py\ngalaxy  ALL = (root) NOPASSWD: SETENV: /usr/bin/chown\n")])]),o("p",[e._v("If your sudo config contains "),o("code",{pre:!0},[e._v("Defaults requiretty")]),e._v(", this option must be disabled.")]),o("p",[e._v("Some maintenance and support of this code will be provided via the usual "),o("a",{attrs:{href:"/src/support/index.md"}},[e._v("Support")]),e._v(" channels, but improvements and fixes would be greatly welcomed, as this is a complex feature which is not used by the Galaxy Development Team.")])],2)}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof c&&c(p);t.default=p.exports}}]);