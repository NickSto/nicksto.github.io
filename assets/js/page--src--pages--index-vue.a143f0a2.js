(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DjVF:function(t,e,a){},YUrV:function(t,e,a){"use strict";a("DjVF")},Z18z:function(t,e,a){},aDT6:function(t,e,a){"use strict";a("Z18z")},iyQ6:function(t,e,a){"use strict";a.r(e);var s={props:["article"]},r=(a("YUrV"),a("KHd+")),i={components:{ArticleListBrief:Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",{staticClass:"title"},[t.article.external_url?a("a",{attrs:{href:t.article.external_url}},[t._v(t._s(t.article.title))]):a("g-link",{staticClass:"read",attrs:{to:t.article.path}},[t._v(t._s(t.article.title))])],1),t.article.date||t.article.tease||t.article.location||t.article.closes?a("small",{staticClass:"text-dark"},[t._v("\n        –\n        "),t.article.date?a("span",{staticClass:"date"},[t._v(" "+t._s(t.article.date)+". ")]):t._e(),t.article.tease?[t._v("\n            "+t._s(t.article.tease)+"\n        ")]:t.article.location?[t._v("\n            "+t._s(t.article.location)+"\n        ")]:t._e(),t.article.closes?a("span",{staticClass:"closes"},[t._v(" Apply by "+t._s(t.article.closes)+". ")]):t._e()],2):t._e()])}),[],!1,null,"46af4b44",null).exports},metaInfo:{title:"Home"},mounted:function(){var t,e,a,s,r,i;t=document,e="script",a="twitter-wjs",r=t.getElementsByTagName(e)[0],i=/^http:/.test(t.location)?"http":"https",t.getElementById(a)||((s=t.createElement(e)).id=a,s.src=i+"://platform.twitter.com/widgets.js",r.parentNode.insertBefore(s,r))}},n=(a("aDT6"),null),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("header",{staticClass:"header"},[a("h1",{staticClass:"display-4"},[t._v(t._s(t.$page.main.title))])]),t.$page.jumbotron?a("section",{staticClass:"section-content jumbotron"},[a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"row text-center markdown",domProps:{innerHTML:t._s(t.$page.jumbotron.content)}})]):t._e(),a("section",{staticClass:"section-content"},[a("div",{attrs:{id:"splash-row"}},[a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"col-sm-12 lead markdown",domProps:{innerHTML:t._s(t.$page.main.content)}})]),a("div",{staticClass:"row"},[a("div",{staticClass:"pseudo-card col-sm-4"},[a("h2",[a("g-link",{attrs:{to:"/news/"}},[a("span",{staticClass:"fas fa-bullhorn"}),t._v("News")])],1),t._l(t.$page.news.edges,(function(t){return a("ArticleListBrief",{key:t.node.id,attrs:{article:t.node}})}))],2),a("div",{staticClass:"pseudo-card col-sm-4"},[a("h2",[a("g-link",{attrs:{to:"/events/"}},[a("span",{staticClass:"far fa-calendar-alt"}),t._v("Events")])],1),t._l(t.$page.events.edges,(function(t){return a("ArticleListBrief",{key:t.node.id,attrs:{article:t.node}})}))],2),a("div",{staticClass:"pseudo-card col-sm-4"},[a("h2",[a("a",{attrs:{href:"https://twitter.com/galaxyproject"}},[a("span",{staticClass:"fab fa-twitter"}),t._v("@galaxyproject\n                    ")]),a("a",{staticClass:"twitter-timeline",attrs:{href:"https://twitter.com/galaxyproject","data-dnt":"true",height:"400","data-chrome":"noheader nofooter noscrollbar noborders transparent","data-widget-id":"384667676347363329"}})])])]),a("div",{staticClass:"row"},[t.$page.videos?a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"pseudo-card col-sm-4 markdown",domProps:{innerHTML:t._s(t.$page.videos.content)}}):t._e(),a("div",{staticClass:"pseudo-card col-sm-4"},[a("h2",[a("g-link",{attrs:{to:"/blog/"}},[a("span",{staticClass:"fas fa-pencil-alt"}),t._v("Blog")])],1),t._l(t.$page.blog.edges,(function(t){return a("ArticleListBrief",{key:t.node.id,attrs:{article:t.node}})}))],2),a("div",{staticClass:"pseudo-card col-sm-4"},[a("h2",[a("a",{attrs:{href:"/careers/"}},[a("span",{staticClass:"fas fa-user-astronaut"}),t._v("Careers")])]),t._l(t.$page.careers.edges,(function(t){return a("ArticleListBrief",{key:t.node.id,attrs:{article:t.node}})}))],2)]),a("div",{staticClass:"row"},[t.$page.platforms?a("div",{staticClass:"pseudo-card col-sm-4"},[a("h2",[a("a",{attrs:{href:"/use/"}},[a("span",{staticClass:"fas fa-server"}),t._v(t._s(t.$page.platforms.title))])]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:t._s(t.$page.platforms.content)}})]):t._e(),t.$page.pubs?a("div",{staticClass:"pseudo-card col-sm-8"},[a("h2",[a("a",{attrs:{href:"https://www.zotero.org/groups/galaxy"}},[a("span",{staticClass:"fas fa-book-open"}),t._v(t._s(t.$page.pubs.title)+"\n                    ")])]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:t._s(t.$page.pubs.content)}})]):t._e()])]),t.$page.footer?a("footer",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"page-footer markdown",domProps:{innerHTML:t._s(t.$page.footer.content)}}):t._e()])}),[],!1,null,"0e0d6138",null);"function"==typeof n&&n(o);e.default=o.exports}}]);