(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8rJp":function(t,e,r){"use strict";r("FF8Y")},Al62:function(t,e,r){var n,a=r("lwsE").default,i=r("W8MJ").default,s=r("cDf5").default,c=r("J4zp").default,o=r("Y3SK").default,l=r("VkAN").default,u=r("RIqP").default;r("oVuX"),r("yXV3"),r("YGK4"),r("07d7"),r("PKPk"),r("3bBZ"),r("ma9I"),r("TeQF"),r("UxlC"),r("rB9j"),r("EnZy"),r("DQNa"),r("+2oP"),r("rMz7"),r("SYor"),r("LKBx"),r("hDyC"),r("sMBO"),r("T63A"),r("QWBl"),r("FZtP");var f,h=r("Po9p"),g=r("33yf"),d=r("MCLT"),p=r("X0/w"),v=r("v2xc");function m(t){if(void 0===t.length&&0==(arguments.length<=1?0:arguments.length-1))return d.inspect(t);for(var e=[],r=0;r<t.length||r<(arguments.length<=1?0:arguments.length-1);r++)r<t.length&&e.push(t[r]),r<(arguments.length<=1?0:arguments.length-1)&&e.push(d.inspect(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]));return e.join("")}function y(t){return new Date(t+"T00:00:00")}function _(){if(f&&f.locale)return f.locale;if("undefined"!=typeof Intl&&Intl.DateTimeFormat){var t=Intl.DateTimeFormat();if(t.resolvedOptions){var e=t.resolvedOptions();if(e.locale)return e.locale}}if("undefined"!=typeof navigator){if(navigator.languages&&navigator.languages.length>0)return navigator.languages[0];for(var r=0,n=["userLanguage","browserLanguage","systemLanguage","language"];r<n.length;r++){var a=n[r];if(navigator[a])return navigator[a]}}return"en-US"}function x(t,e){return 0===t.indexOf(e)?t.slice(e.length):t}function k(t,e){var r=t.length-e.length;return t.slice(r)===e?t.slice(0,r):t}function M(t,e){return 0===t.indexOf(e)}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=e*(1+Math.floor(t.length/e));return t.padEnd(r)}h&&h.existsSync&&h.existsSync("config.json")&&(f=JSON.parse(h.readFileSync("config.json","utf8"))),t.exports.repr=m,t.exports.contains=function(t,e){return!!(t.indexOf(e)>-1)},t.exports.getUnion=function(t,e){var r=new Set([].concat(u(t),u(e)));return u(r)},t.exports.getIntersection=function(t,e){var r=new Set(t),n=new Set(e),a=new Set(u(r).filter((function(t){return n.has(t)})));return u(a)},t.exports.slugify=function(t){return t.toLowerCase().replace(/[^\w\d -]/g,"").replace(/[ -]+/g,"-")},t.exports.splitlines=function(t){return t.split(/\r\n|\r|\n/)},t.exports.strToDate=y,t.exports.dateToStr=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iso",r=_(),n={};switch(e){case"iso":return t.toISOString().slice(0,10);case"long":n={year:"numeric",month:"long",day:"numeric"};break;case"D MMMM YYYY":r="en-GB",n={year:"numeric",month:"long",day:"numeric"};break;case"D MMMM":n={month:"long",day:"numeric"};break;case"MMMM":n={month:"long"};break;case"MMMM YYYY":n={year:"numeric",month:"long"}}return t.toLocaleDateString(r,n)},t.exports.dateStrDiff=function(t,e){var r=y(t),n=y(e);return Math.round((r-n)/1e3/60/60/24)},t.exports.getLocale=_,t.exports.getImage=function(t,e){if(!t)return t;if(M(t,"/src/images/"))return t.substring(4);if(M(t,"/images/"))return t;var r=t.split("/"),a=r[r.length-1],i=e[a];return i||(console.error(m(n||(n=l(["Image "," not found in asset store."])),a)),t)},t.exports.mdToHtml=function(t){var e;return p().use(v).process(t,(function(t,r){t?console.error(t):e=String(r)})),x(k(e.trim(),"</p>"),"<p>")},t.exports.matchesPrefixes=function(t,e){var r,n=o(e);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(0===t.indexOf(a))return!0}}catch(t){n.e(t)}finally{n.f()}return!1},t.exports.ensurePrefix=function(t,e){return t.startsWith(e)?t:e+t},t.exports.rmPrefix=x,t.exports.rmSuffix=k,t.exports.startswith=M,t.exports.endswith=function(t,e){return t.indexOf(e)===t.length-e.length},t.exports.titlecase=function(t){return t.charAt(0).toUpperCase()+t.substring(1,t.length)},t.exports.spaceTab=S,t.exports.rmPathPrefix=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t.startsWith("/");n&&e++,null===r&&(r=n);var a=t.split("/"),i=a.slice(e).join("/");return r?"/"+i:i},t.exports.getFilesDeep=function t(e){var r,n=[],a=h.readdirSync(e,{withFileTypes:!0}),i=o(a);try{for(i.s();!(r=i.n()).done;){var s=r.value,c=g.join(e,s.name);if(s.isDirectory()){var l=t(c);n=n.concat(l)}else s.isFile()&&n.push(c)}}catch(t){i.e(t)}finally{i.f()}return n},t.exports.getFilesShallow=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[],a=h.readdirSync(t,{withFileTypes:!0}),i=o(a);try{for(i.s();!(e=i.n()).done;){var s=e.value;(s.isFile()||s.isSymbolicLink())&&(null!==r&&g.parse(s.name).ext===r||n.push(s.name))}}catch(t){i.e(t)}finally{i.f()}return n},t.exports.describeObject=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=0,a=Object.entries(t);n<a.length;n++){var i=c(a[n],2),o=i[0],l=i[1],u=s(l),f=void 0;f="string"===u?d.inspect(l):"number"===u||"boolean"===u||null===l?l:"(".concat(u,")");var h=S(o+":"),g="".concat(e).concat(h).concat(f),p=void 0;p=g.length>r?g.substring(0,r-1)+"…":g,console.log(p)}},t.exports.logTree=function t(e,r,n){var a="";e.id&&(a=' id="'.concat(e.id));var i="";e.className&&(i=' class="'.concat(e.className,'"')),console.log("".concat(n,"<").concat(e.tagName.toLowerCase()).concat(a).concat(i,">")),n="  "+n,(r-=1)>0?e.children.forEach((function(e){return t(e,r,n)})):console.log("".concat(n,"  (recursion limit)"))},t.exports.switchPane=function(t,e){var r=document.getElementById("".concat(t,"-tab"));r||console.error('switchPane(): No element with id "'.concat(t,'-tab".'));var n=document.getElementById("".concat(t,"-pane"));if(n){var a=document.querySelectorAll('[data-toggle-group="'.concat(e,'"]'));a?a.forEach((function(t){t.classList.remove("active"),t.classList.remove("show")})):console.error("switchPane(): No elements found for paneGroup ".concat(e)),n.classList.add("show"),n.classList.add("active"),r&&r.classList.add("active")}else console.error('switchPane(): No element with id "'.concat(t,'-pane".'))};var b=function(){"use strict";function t(e){a(this,t),this.path=e}return i(t,[{key:"exists",value:function(){if(h.existsSync(this.path))return!0;try{return h.lstatSync(this.path),!0}catch(t){return!1}}},{key:"type",value:function(){if(!this.exists())return"nonexistent";var t;try{t=h.statSync(this.path)}catch(t){if("ENOENT"===t.code){if(this.isLink())return"brokenlink";throw console.error("Unexpected filesystem entry ".concat(this.path)),t}throw t}if(t.isFile())return"file";if(t.isDirectory())return"dir";if(t.isSocket())return"socket";if(t.isBlockDevice())return"block";if(t.isCharacterDevice())return"char";if(t.isFIFO())return"fifo";throw"Unexpected path type: ".concat(this.path)}},{key:"isLink",value:function(){if(this.exists()&&h.lstatSync(this.path).isSymbolicLink())return!0;return!1}},{key:"mtime",value:function(){return this.exists()?h.lstatSync(this.path).mtimeMs:null}},{key:"size",value:function(){return this.exists()?h.lstatSync(this.path).size:null}}],[{key:"exists",value:function(t){return new this(t).exists()}},{key:"type",value:function(t){return new this(t).type()}},{key:"isLink",value:function(t){return new this(t).isLink()}},{key:"mtime",value:function(t){return new this(t).mtime()}},{key:"size",value:function(t){return new this(t).size()}}]),t}();t.exports.PathInfo=b},FF8Y:function(t,e,r){},FJik:function(t,e,r){},Hc6n:function(t,e,r){"use strict";r("hY4T")},LHBX:function(t,e,r){"use strict";r("FJik")},hY4T:function(t,e,r){},xtqI:function(t,e,r){"use strict";r.r(e);var n=r("zYve"),a=r("zNj4"),i={components:{ArticleHeader:n.a,ArticleFooter:a.a},metaInfo:function(){return{title:this.$page.article.title}}},s=(r("Hc6n"),r("KHd+")),c=null,o=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("ArticleHeader",{attrs:{article:this.$page.article}}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content markdown",domProps:{innerHTML:this._s(this.$page.article.content)}}),e("ArticleFooter",{attrs:{article:this.$page.article}})],1)}),[],!1,null,"818dbe78",null);"function"==typeof c&&c(o);e.default=o.exports},zNj4:function(t,e,r){"use strict";var n={props:{article:{type:Object,required:!0}}},a=(r("LHBX"),r("KHd+")),i=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{class:this.article.category},["blog"===this.article.category?e("p",{staticClass:"backlink"},[this._v("\n        See this and other Galaxy-related posts in\n        "),e("g-link",{attrs:{to:"/blog/"}},[this._v("The Galactic Blog")])],1):this._e()])}),[],!1,null,"54ece1d6",null);e.a=i.exports},zYve:function(t,e,r){"use strict";r("DQNa"),r("ma9I");var n=r("Al62"),a={props:{article:{type:Object,required:!0}},methods:{getImage:function(t){return Object(n.getImage)(t.image,t.images)},dateSpan:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"D MMMM YYYY",a=Object(n.strToDate)(t);if(e&&e>1){var i,s,c=a.getTime()+24*(e-1)*60*60*1e3,o=new Date(c),l="",u="";return a.getFullYear()===o.getFullYear()?a.getMonth()===o.getMonth()?(l=Object(n.dateToStr)(a,"MMMM")+" ",i=String(a.getDate()),s=String(o.getDate()),u=", "+a.getFullYear()):(i=Object(n.dateToStr)(a,"D MMMM"),s=Object(n.dateToStr)(o,"D MMMM"),u=", "+a.getFullYear()):(i=Object(n.dateToStr)(a,r),s=Object(n.dateToStr)(o,r)),"".concat(l).concat(i," - ").concat(s).concat(u)}return Object(n.dateToStr)(a,r)},titlecase:n.titlecase,strToDate:n.strToDate,dateToStr:n.dateToStr}},i=(r("8rJp"),r("KHd+")),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{class:t.article.category},[t.article.category?r("g-link",{staticClass:"link",attrs:{to:"/"+t.article.category+"/"}},[t._v("\n        ← Back to "+t._s(t.titlecase(t.article.category))+"\n    ")]):r("g-link",{staticClass:"link",attrs:{to:"/"}},[t._v("← Back to Home")]),t.article.redirect?r("p",{staticClass:"redirect alert alert-warning"},[r("strong",[t._v("Note")]),t._v("\n        This content has a new home at\n        "),r("a",{attrs:{href:t.article.redirect}},[t._v(t._s(t.article.redirect))]),t._v("\n        .\n    ")]):t._e(),t.article.image?r("g-image",{staticClass:"img-fluid main-image",attrs:{src:t.getImage(t.article)}}):t._e(),t.article.skip_title_render?t._e():r("h1",{staticClass:"title"},[t._v(t._s(t.article.title))]),t.article.tease?r("p",{staticClass:"subtitle"},[t._v(t._s(t.article.tease))]):t._e(),"events"===t.article.category?r("ul",{staticClass:"metadata list-unstyled"},[t.article.date?r("li",[r("span",{staticClass:"metakey"},[t._v("Date:")]),t._v(" "+t._s(t.dateSpan(t.article.date,t.article.days)))]):t._e(),t.article.location?r("li",[r("span",{staticClass:"metakey"},[t._v("Location: ")]),t.article.location_url?r("a",{attrs:{href:t.article.location_url}},[t._v(t._s(t.article.location))]):[t._v(t._s(t.article.location))]],2):t._e(),t.article.contact?r("li",[r("span",{staticClass:"metakey"},[t._v("Contact: ")]),t.article.contact_url?r("a",{attrs:{href:t.article.contact_url}},[t._v(t._s(t.article.contact))]):[t._v(t._s(t.article.contact))]],2):t._e(),t.article.links.length>0?r("li",[r("span",{staticClass:"metakey"},[t._v("Links: ")]),t._l(t.article.links,(function(e){return[r("a",{key:e.url,attrs:{href:e.url}},[t._v(t._s(e.text))]),t._v(".\n            ")]}))],2):t._e()]):r("section",{staticClass:"metadata freetext"},[t.article.contact?r("p",{staticClass:"contact"},[t._v("Contact: "+t._s(t.article.contact))]):t._e(),t.article.authors?r("p",{staticClass:"authors"},[t._v("By "+t._s(t.article.authors))]):t._e(),t.article.date?r("p",{staticClass:"date"},[t._v("\n            "+t._s(t.dateToStr(t.strToDate(t.article.date),"D MMMM YYYY"))+"\n        ")]):t._e()]),t.article.external_url?r("p",{staticClass:"outlink"},[t._v("See "),r("a",{attrs:{href:t.article.external_url}},[t._v("(external) url")])]):t._e(),t.article.source_blog?r("p",{staticClass:"blogref"},[t._v("\n        From "),r("a",{attrs:{href:t.article.source_blog_url}},[t._v(t._s(t.article.source_blog))])]):t._e()],1)}),[],!1,null,"5911d7e0",null);e.a=s.exports}}]);