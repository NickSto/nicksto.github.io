(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+Lau":function(t,e,a){},"5kAV":function(t,e,a){"use strict";a.r(e);var n={components:{ArticleTableEvents:a("Z34+").a},metaInfo:function(){return{title:this.$page.main.title}}},i=a("KHd+"),s=null,r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("h1",{staticClass:"page-title"},[t._v(t._s(t.$page.main.title))]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:t._s(t.$page.main.content)}}),a("h2",{attrs:{id:"upcoming-events"}},[t._v("Upcoming Events")]),a("table",{staticClass:"table table-striped"},[a("thead",[a("tr",[a("th",[t._v("Date")]),a("th",[t._v("Topic/Event")]),a("th",[t._v("Venue/Location")]),a("th",[t._v("Contact")])])]),a("tbody",t._l(t.$page.upcoming.edges,(function(t){return a("ArticleTableEvents",{key:t.node.id,attrs:{article:t.node}})})),1)]),a("h2",{attrs:{id:"recent-events"}},[t._v("Recent Events")]),a("p",[t._v("Events in the past 12 months:")]),a("table",{staticClass:"table table-striped"},[a("thead",[a("tr",[a("th",[t._v("Date")]),a("th",[t._v("Topic/Event")]),a("th",[t._v("Venue/Location")]),a("th",[t._v("Contact")])])]),a("tbody",t._l(t.$page.recent.edges,(function(t){return a("ArticleTableEvents",{key:t.node.id,attrs:{article:t.node}})})),1)]),t.$page.footer?a("footer",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"page-footer markdown",domProps:{innerHTML:t._s(t.$page.footer.content)}}):t._e()])}),[],!1,null,null,null);"function"==typeof s&&s(r);e.default=r.exports},XSun:function(t,e,a){"use strict";var n={props:["continent"]},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return this.continent?e("g-image",{staticClass:"continent float-right",attrs:{src:"/images/icons/"+this.continent+".png"}}):this._e()}),[],!1,null,null,null);e.a=s.exports},"Z34+":function(t,e,a){"use strict";var n={components:{Continent:a("XSun").a},props:["article"]},i=(a("k3x6"),a("KHd+")),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"date text-nowrap"},[t._v(t._s(t.article.date))]),a("td",{staticClass:"title"},[t.article.external_url?a("a",{attrs:{href:t.article.external_url}},[t._v(t._s(t.article.title))]):a("g-link",{staticClass:"read",attrs:{to:t.article.path}},[t._v(t._s(t.article.title))]),a("p",{staticClass:"tease"},[t._v(t._s(t.article.tease))])],1),a("td",{staticClass:"location"},[a("Continent",{attrs:{continent:t.article.continent}}),t.article.location_url?a("a",{attrs:{href:t.article.location_url}},[t._v(t._s(t.article.location))]):[t._v(t._s(t.article.location))]],2),a("td",{staticClass:"contact"},[t.article.gtn?a("a",{attrs:{href:"https://training.galaxyproject.org/"}},[a("g-image",{staticClass:"gtn-icon",attrs:{src:"/images/galaxy-logos/GTN16.png",alt:"Training offered by GTN Member",title:"Training offered by GTN Member"}})],1):t._e(),t._v("\n    "+t._s(t.article.contact)+"\n  ")])])}),[],!1,null,"7687c618",null);e.a=s.exports},k3x6:function(t,e,a){"use strict";a("+Lau")}}]);