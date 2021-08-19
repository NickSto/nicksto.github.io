(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},qOaq:function(e,t,a){"use strict";a.r(t);var o=a("KHd+"),n=a("UQSp"),s=a("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var r={VueRemarkRoot:n.a},c=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===i(r[e])&&"function"==typeof r[e].render||"function"==typeof r[e]&&"function"==typeof r[e].options.render?t[e]=r[e]:a[e]=function(){return r[e]}}))},l=s.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",d={excerpt:null,title:"Frequently Asked Questions for CloudMan"};var m=function(e){e.options[u]&&(e.options[u]=d),s.a.util.defineReactive(e.options,u,d),e.options.computed=l.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},h=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("div",{staticClass:"toc-wrapper col-md-3"},[a("ul",[a("li",[a("a",{attrs:{href:"#accessing-cloudman"}},[e._v("Accessing CloudMan")])]),a("li",[a("a",{attrs:{href:"#cloudman-admin-page"}},[e._v("CloudMan Admin page")])]),a("li",[a("a",{attrs:{href:"#command-line-access"}},[e._v("Command line access")])]),a("li",[a("a",{attrs:{href:"#copying-files"}},[e._v("Copying files")])]),a("li",[a("a",{attrs:{href:"#adding-more-storage-space"}},[e._v("Adding more storage space")])]),a("li",[a("a",{attrs:{href:"#terminology"}},[e._v("Terminology")])])])]),a("div",{staticClass:"body-wrapper col-md-9"},[e._t("/cloudman/linkbox-horizontal"),a("p",[e._v("See "),a("a",{attrs:{href:"/learn/faq/"}},[e._v("Learn/FAQ")]),e._v(" for questions about using any Galaxy instance and "),a("a",{attrs:{href:"/cloudman/"}},[e._v("CloudMan")]),e._v(" page for general information about CloudMan.")]),a("hr"),a("h2",{attrs:{id:"accessing-cloudman"}},[a("a",{attrs:{href:"#accessing-cloudman","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Accessing CloudMan")]),a("p",[e._v("CloudMan console on your cluster is available at "),a("em",[a("code",{pre:!0},[e._v("<cluster IP address>/cloud")])]),e._v(". To login, you need to use "),a("em",[e._v("ubuntu")]),e._v(" user name and a password you used when starting the cluster via "),a("a",{attrs:{href:"https://launch.usegalaxy.org/launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Launch")]),e._v(".")]),a("hr"),a("h2",{attrs:{id:"cloudman-admin-page"}},[a("a",{attrs:{href:"#cloudman-admin-page","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("CloudMan Admin page")]),a("p",[e._v("In addition to the main console, CloudMan also has an Admin page. The Admin page provides additional insight and control over your cluster. The Admin page can be accessed by clicking "),a("em",[e._v("Admin")]),e._v(" link at the top right hand side of the main CloudMan console.")]),a("hr"),a("h2",{attrs:{id:"command-line-access"}},[a("a",{attrs:{href:"#command-line-access","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Command line access")]),a("p",[e._v("You can access your CloudMan cluster via "),a("em",[e._v("SSH")]),e._v(" by using the command prompt. On OS X and Linux, you can use the terminal while on Windows you can use Putty. "),a("em",[e._v("SSH")]),e._v(" access to your cluster is possible as the "),a("em",[e._v("ubuntu")]),e._v(" or "),a("em",[e._v("galaxy")]),e._v(" system user. The "),a("em",[e._v("ubuntu")]),e._v(" user will have "),a("em",[e._v("sudo")]),e._v(" access so you can perform system-level changes as well as change into the "),a("em",[e._v("galaxy")]),e._v(" user. Accessing the cluster via "),a("em",[e._v("ssh")]),e._v(" as the "),a("em",[e._v("root")]),e._v(" user is disabled.")]),a("p",[e._v("To "),a("em",[e._v("SSH")]),e._v(" into the cluster, issue the following command: "),a("code",{pre:!0},[e._v("ssh ubuntu@<cluster IP address>")]),e._v(". You will be prompted for a password - this is the same password you used when you started the cluster via Cloud Launch. Alternatively, you can use your ssh key to access the cluster without using a password. The command for this option is "),a("code",{pre:!0},[e._v("ssh -i <your ssh key file> ubuntu@<cluster IP address>")])]),a("hr"),a("h2",{attrs:{id:"copying-files"}},[a("a",{attrs:{href:"#copying-files","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Copying files")]),a("p",[e._v("You can copy files to or from your cluster using the "),a("code",{pre:!0},[e._v("scp")]),e._v(" command. As described in the "),a("em",[e._v("Command line access")]),e._v(" section, you have a choice of the username when accessing the cluster - make sure you are copying the files as the system user that has read/write permissions for the destination directory. The command to use when copying files to the cluster should look as follows: "),a("code",{pre:!0},[e._v("scp /path/to/local/file ubunut@<cluster IP address>:/path/to/destination")])]),a("p",[e._v("When copying files from the cluster, on your local machine, issue the following command: "),a("code",{pre:!0},[e._v("scp ubunut@<cluster IP address>:/path/to/desired/file /local/path")])]),a("hr"),a("h2",{attrs:{id:"adding-more-storage-space"}},[a("a",{attrs:{href:"#adding-more-storage-space","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Adding more storage space")]),a("p",[e._v("You can add additional storage space to your cluster by adding a file system to it. For "),a("a",{attrs:{href:"/cloudman/cluster-types/"}},[e._v("cluster types")]),e._v(" with persistent storage, you can also increase the size of the storage by clicking on the "),a("em",[e._v("Grow")]),e._v(" icon next to the Disk Status.")]),a("p",[e._v("To add a new file system, go to CloudMan Admin page, and click "),a("em",[e._v("Add new")]),e._v(" under "),a("em",[e._v("File systems")]),e._v(" section of the page. You can choose among several storage device options:")]),a("div",{staticClass:"center"},[a("img",{attrs:{src:"http://i.imgur.com/pRqlWiw.png",alt:"",width:"250"}})]),a("ul",[a("li",[a("em",[e._v("Bucket")]),e._v(": an AWS S3 bucket. To connect to an existing bucket, you just need a bucket name. Keep in mind that this option will work only if you have appropriate permissions for the specified bucket.")]),a("li",[a("em",[e._v("Volume")]),e._v(": an existing block storage volume device. If you already have an existing volume that you would like to use from within this cluster, you need the volume ID.")]),a("li",[a("em",[e._v("Snapshot")]),e._v(": an existing volume snapshot. If you have a volume snapshot, you can provide the snapshot ID and a new volume will be created from it that will be then made available as a file system.")]),a("li",[a("em",[e._v("New volume")]),e._v(": a new block storage volume. You need to specify a desired size for the volume and a new one will be created.")]),a("li",[a("em",[e._v("NFS")]),e._v(": an existing NFS server to connect to. This NFS server needs to be accessible on the local network to the cluster.")])]),a("p",[e._v("Once you have chosen the device type and provided the necessary device information, you need to give the file system a name. After you click "),a("em",[e._v("Add new file system")]),e._v(", CloudMan will attempt to add/create the file system and make it available under "),a("em",[a("code",{pre:!0},[e._v("/mnt/<file system name>")])]),e._v(". After you click the button, it will take a up to a minute for the file system to be added.")]),a("hr"),a("h2",{attrs:{id:"terminology"}},[a("a",{attrs:{href:"#terminology","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Terminology")]),a("p",[e._v("The space of cloud computing is littered with technical terms, here we try to explain the meaning of the most common terms:")]),a("ul",[a("li",[a("em",[e._v("Access key")]),e._v(": credentials required along with the secret key to access cloud resources under your account via the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Application_programming_interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("API")])]),a("li",[a("em",[e._v("Secret key")]),e._v(": credentials required along with the access key to access cloud resources under your account via the API")]),a("li",[a("em",[e._v("Instance")]),e._v(": a running virtual machine that can be used")]),a("li",[a("em",[e._v("Instance type")]),e._v(": a type of virtual hardware used by a running instance")]),a("li",[a("em",[e._v("Cluster")]),e._v(": a set of virtual machines/instances connected together")]),a("li",[a("em",[e._v("Master node")]),e._v(": the virtual machine that controls the cluster and is used to access the cluster")]),a("li",[a("em",[e._v("Worker node")]),e._v(": virtual machines that are connected to the master and perform computations requested by the master")]),a("li",[a("em",[e._v("Image")]),e._v(": a stopped virtual machine that can be used to start instances")]),a("li",[a("em",[e._v("Terminate")]),e._v(": shut down a running instance")]),a("li",[a("em",[e._v("Object store")]),e._v(": a storage service for storing Internet-accessible files")]),a("li",[a("em",[e._v("Bucket")]),e._v(": a folder available in an object store")]),a("li",[a("em",[e._v("Object")]),e._v(": a file available within a bucket")]),a("li",[a("em",[e._v("Volume")]),e._v(": a storage device like a USB flash drive that can be attached to a running instance")]),a("li",[a("em",[e._v("Snapshot")]),e._v(": a point-in-time snapshot of a volume that can be shared with other cloud users. A snapshot must be converted into a volume before it can be used.")])])],2)])}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof m&&m(h);t.default=h.exports}}]);