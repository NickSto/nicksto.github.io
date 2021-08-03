(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{QIF1:function(e,t,a){"use strict";a.r(t);var n=a("KHd+"),o=a("UQSp"),i=a("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:o.a},c=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===r(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:a[e]=function(){return s[e]}}))},l=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",d={excerpt:null,title:"Getting Started with Galaxy on the Cloud"};var h=function(e){e.options[u]&&(e.options[u]=d),i.a.util.defineReactive(e.options,u,d),e.options.computed=l.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},p=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[e._t("/cloudman/linkbox-horizontal"),a("p",[e._v("This getting started guide will guide you through creating their own\n"),a("em",[e._v("Galaxy on the Cloud")]),e._v(" instance. It takes about 10 minutes to complete. There is\nalso a video version of this documentation available\n"),a("a",{attrs:{href:"https://youtu.be/E-e2A8tRVDA",target:"_blank"}},[e._v("here")]),e._v(".")]),a("div",{staticClass:"alert alert-danger",attrs:{role:"danger"}},[e._v("\nWe recommend being familiar with cloud systems administration in general and the specific costs associated with your target provider before launching an instance. Cloud instances can be costly, and the minimum instance size needed for Galaxy on the cloud often exceeds free tier allowances. It is entirely possible for your bill to range from several hundred to a several thousand dollars depending on the size and number of instances launched. Make sure to inspect your cloud provider dashboard to ensure that you have no unwanted instances running.\n")]),a("h2",{attrs:{id:"step-0-get-your-cloud-credentials"}},[a("a",{attrs:{href:"#step-0-get-your-cloud-credentials","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Step 0: Get your cloud credentials")]),a("p",[e._v("Before you can start using cloud resources, you need to get your API access credentials for the given cloud. This step needs to be done only once for each\ncloud.")]),a("h3",{attrs:{id:"amazon-cloud"}},[a("a",{attrs:{href:"#amazon-cloud","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Amazon cloud")]),a("ol",[a("li",[a("p",[e._v("You first need to "),a("a",{attrs:{href:"http://aws.amazon.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("register here")]),e._v(" for an Amazon Web Services (AWS) account.")])]),a("li",[a("p",[e._v("Once you have created an account, log into the "),a("a",{attrs:{href:"https://console.aws.amazon.com/console",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Management Console")]),e._v(".")])]),a("li",[a("p",[e._v("Next, it's necessary to create the API access credentials. Do this by creating an IAM user: click on "),a("em",[e._v("Services")]),e._v(" → "),a("em",[e._v("IAM")]),e._v(" → "),a("em",[e._v("Users")]),e._v(" → "),a("em",[e._v("Add user")]),e._v(". Give the user a name (e.g., "),a("em",[e._v("galaxy_cloudman")]),e._v("), attach existing policies for "),a("em",[e._v("EC2FullAccess")]),e._v(" and\n"),a("em",[e._v("S3FullAccess")]),e._v(". After reviewing the configuration, create the user. Once created, make a note of and download the API access credentials. Keep these credentials safe because they are all that is required to use your cloud account.")])])]),a("div",{staticClass:"center"},[a("a",{attrs:{href:"iam1.png"}},[a("img",{attrs:{src:"iam1.png",alt:"",width:"200"}})]),a("a",{attrs:{href:"iam2.png"}},[a("img",{attrs:{src:"iam2.png",alt:"",width:"200"}})]),a("a",{attrs:{href:"iam3.png"}},[a("img",{attrs:{src:"iam3.png",alt:"",width:"200"}})]),a("a",{attrs:{href:"iam4.png"}},[a("img",{attrs:{src:"iam4.png",alt:"",width:"200"}})])]),a("h3",{attrs:{id:"jetstream-cloud"}},[a("a",{attrs:{href:"#jetstream-cloud","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Jetstream cloud")]),a("ol",[a("li",[a("p",[e._v("To use the Jetstream cloud through our launcher (more below), it is required to\ncreate a TACC account. Head over to "),a("a",{attrs:{href:"https://portal.tacc.utexas.edu/",target:"_blank"}},[e._v("https://portal.tacc.utexas.edu/")]),e._v(" and create a new account.")])]),a("li",[a("p",[e._v("Next, it is necessary to obtain an allocation on Jetstream. If your\ncollaborator or PI has an active allocation, they can add you to it. Otherwise,\nyou need to get your own. Note that this process may take several days. To get started, follow the official instructions available\n"),a("a",{attrs:{href:"https://iujetstream.atlassian.net/wiki/display/JWT/Jetstream+Allocations",target:"_blank"}},[e._v("here")]),e._v(". Once you have an active allocation, you will be\nassigned a project ID, such as "),a("em",[e._v("TG-CCR160022")]),e._v(".")])])]),a("h2",{attrs:{id:"step-1-launch-your-cluster"}},[a("a",{attrs:{href:"#step-1-launch-your-cluster","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Step 1: Launch your cluster")]),a("p",[e._v("In this step, we will create a new cluster by launching a virtual server in the\ncloud, which will act as the access point for Galaxy and the cluster.")]),a("ol",[a("li",[a("p",[e._v("Head to the "),a("a",{attrs:{href:"https://launch.usegalaxy.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudLaunch application")]),e._v("\nand login through one of the available authentication providers. First time\nlogging in, it will be necessary to authorize CloudLaunch application to have\naccess to your basic profile information. Note that each provider will create a\nseparate account on CloudLaunch so remember which provider you use.")]),a("pre",[a("code",{pre:!0},[e._v('<div class=\'center\'>\n<a href=\'cloudlaunch-login.png\'><img src="cloudlaunch-login.png" alt="" width=200 /></a>\n<a href=\'twitter-login.png\'><img src="twitter-login.png" alt="" width=200 /></a>\n<a href=\'twitter-auth.png\'><img src="twitter-auth.png" alt="" width=200 /></a>\n</div>\n')])])]),a("li",[a("p",[e._v("Once logged in, choose an appliance you would like to launch from the\nCloudLaunch Marketplace. CloudLaunch Marketplace is similar to an app store for\ncloud-enabled applications; it allows us to discover and launch a range of\napplications on different cloud computing providers. This time, choose\nthe "),a("em",[e._v("Genomics Virtual Laboratory (GVL)")]),e._v(" appliance.")])]),a("li",[a("p",[e._v("We now need to configure the appliance launch properties. This means\nchoosing one of the available appliance versions, the target cloud\ninfrastructure and providing the cloud access credentials. "),a("strong",[e._v("For the Amazon\ncloud")]),e._v(", the access credentials are the API keys we obtained in step 0 above\n(e.g., "),a("em",[e._v("AKIAJYU2JUN23XQ2NWGQ")]),e._v(" for the access key and\n"),a("em",[e._v("K69vZAsvKKzqNl+M4kzCRuspIxzfwYBTa7sBs9Xb")]),e._v(" for the secret key). "),a("strong",[e._v("For the\nJetstream cloud")]),e._v(", these are the TACC credentials we registered with above as\nwell as the allocation project ID. Further, project domain name and user domain\nname values are simply "),a("em",[e._v("tacc")]),e._v(". After supplying the credentials, click "),a("em",[e._v("Test and\nuse these credentials, followed by clicking ")]),e._v("Next*.")]),a("pre",[a("code",{pre:!0},[e._v('<div class=\'center\'>\n<a href=\'cloudlaunch-app-config-aws.png\'><img src="cloudlaunch-app-config-aws.png" alt="" width=200 /></a>\n<a href=\'cloudlaunch-app-config-js.png\'><img src="cloudlaunch-app-config-js.png" alt="" width=200 /></a>\n<a href=\'cloudlaunch-cloud-config.png\'><img src="cloudlaunch-cloud-config.png" alt="" width=200 /></a>\n</div>\n')])])]),a("li",[a("p",[e._v("Before launching, we need to give our cluster a name. A default one is\nprovided but feel free to replace it with something more suitable and\ndescriptive. We also need to supply a password of choice that will protect\naccess to the cluster once launched. Currently, the amount of storage available\nis fixed at 100GB. We can also choose the type of virtual hardware our server will\nuse. Then click "),a("em",[e._v("Launch")]),e._v(".")])]),a("li",[a("p",[e._v("Initiating the launch process will take us to the "),a("em",[e._v("My appliances")]),e._v(" page,\nwhich is a log of all instances we have launched. Now we just wait for the\ncluster to start - it will take a few minutes. Once it has started, a URL to\nthe appliance will be shown. Note that you can navigate away from this page\nduring the launch process and return to it later while the launch process will\ncontinue uninterrupted.")]),a("pre",[a("code",{pre:!0},[e._v("<div class='center'>\n<a href='cloudlaunch-my-apps.png'><img src=\"cloudlaunch-my-apps.png\" alt=\"\" width=200 /></a>\n</div>\n")])])]),a("li",[a("p",[e._v("[Optional] The first time you launch an appliance on a given cloud, you\nwill be prompted to download an ssh key from the My Appliances page. This key\nallows you to "),a("em",[e._v("ssh")]),e._v(" into the instance via the command prompt without a\npassword, so keep it safe. "),a("strong",[e._v("Note")]),e._v(" that this key is available for download\nonly the very first time you use a given cloud account. If you have missed to\ndownload the key, delete the key from within the cloud's management console (by\ndefault, called "),a("em",[e._v("cloudlaunch-key-pair")]),e._v(") and it will be automatically recreated\nthe next time you start a cluster.")])])]),a("h2",{attrs:{id:"step-2-access-cloudman-and-galaxy"}},[a("a",{attrs:{href:"#step-2-access-cloudman-and-galaxy","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Step 2: Access CloudMan and Galaxy")]),a("p",[e._v("After the cluster has started, we can access it by clicking the provided URL.\nLog in with username "),a("em",[e._v("admin")]),e._v(" and the password you\nchose during the launch process. It may take a few more minutes to start Galaxy\nafter the interface becomes available but clicking on the link under "),a("em",[e._v("Access Address")]),e._v("\nwill lead you to Galaxy. ")]),a("hr"),a("p",[e._v("Depending on your interest, the documentation contains a wealth of information. Here are some places that might interest you:")]),a("ul",[a("li",[a("a",{attrs:{href:"/src/cloudman/capacity-planning/index.md"}},[e._v("Capacity planning")])]),a("li",[a("a",{attrs:{href:"/src/cloudman/services/index.md"}},[e._v("Cluster applications and services")])]),a("li",[a("a",{attrs:{href:"/src/cloudman/sharing/index.md"}},[e._v("Sharing and publishing a cluster")])]),a("li",[a("a",{attrs:{href:"/src/cloudman/customizing/index.md"}},[e._v("Customizing your cluster")])]),a("li",[a("a",{attrs:{href:"/src/cloudman/troubleshooting/index.md"}},[e._v("Troubleshooting")])])])],2)}),[],!1,null,null,null);"function"==typeof c&&c(p),"function"==typeof h&&h(p);t.default=p.exports},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);