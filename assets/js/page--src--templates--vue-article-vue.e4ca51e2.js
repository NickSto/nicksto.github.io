(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{A2zq:function(t,e,n){},Al62:function(t,e,n){var r,a=n("lwsE").default,i=n("W8MJ").default,s=n("cDf5").default,c=n("J4zp").default,o=n("Y3SK").default,l=n("VkAN").default,u=n("RIqP").default;n("oVuX"),n("yXV3"),n("YGK4"),n("07d7"),n("PKPk"),n("3bBZ"),n("ma9I"),n("TeQF"),n("UxlC"),n("rB9j"),n("EnZy"),n("DQNa"),n("+2oP"),n("rMz7"),n("SYor"),n("LKBx"),n("hDyC"),n("sMBO"),n("T63A"),n("QWBl"),n("FZtP");var f=n("Po9p"),h=n("33yf"),p=n("MCLT"),g=n("X0/w"),d=n("v2xc");function v(t){if(void 0===t.length&&0==(arguments.length<=1?0:arguments.length-1))return p.inspect(t);for(var e=[],n=0;n<t.length||n<(arguments.length<=1?0:arguments.length-1);n++)n<t.length&&e.push(t[n]),n<(arguments.length<=1?0:arguments.length-1)&&e.push(p.inspect(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]));return e.join("")}function m(t){return new Date(t+"T00:00:00")}function _(t,e){return 0===t.indexOf(e)?t.slice(e.length):t}function y(t,e){var n=t.length-e.length;return t.slice(n)===e?t.slice(0,n):t}function x(t,e){return 0===t.indexOf(e)}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=e*(1+Math.floor(t.length/e));return t.padEnd(n)}t.exports.repr=v,t.exports.contains=function(t,e){return!!(t.indexOf(e)>-1)},t.exports.getUnion=function(t,e){var n=new Set([].concat(u(t),u(e)));return u(n)},t.exports.getIntersection=function(t,e){var n=new Set(t),r=new Set(e),a=new Set(u(n).filter((function(t){return r.has(t)})));return u(a)},t.exports.slugify=function(t){return t.toLowerCase().replace(/[^\w\d -]/g,"").replace(/[ -]+/g,"-")},t.exports.splitlines=function(t){return t.split(/\r\n|\r|\n/)},t.exports.strToDate=m,t.exports.dateToStr=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iso";return"iso"===e?t.toISOString().slice(0,10):"long"===e?t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"D MMMM YYYY"===e?t.toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):void 0},t.exports.dateStrDiff=function(t,e){var n=m(t),r=m(e);return Math.round((n-r)/1e3/60/60/24)},t.exports.getImage=function(t,e){if(!t)return t;if(x(t,"/src/images/"))return t.substring(4);if(x(t,"/images/"))return t;var n=t.split("/"),a=n[n.length-1],i=e[a];return i||(console.error(v(r||(r=l(["Image "," not found in asset store."])),a)),t)},t.exports.mdToHtml=function(t){var e;return g().use(d).process(t,(function(t,n){t?console.error(t):e=String(n)})),_(y(e.trim(),"</p>"),"<p>")},t.exports.matchesPrefixes=function(t,e){var n,r=o(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(0===t.indexOf(a))return!0}}catch(t){r.e(t)}finally{r.f()}return!1},t.exports.ensurePrefix=function(t,e){return t.startsWith(e)?t:e+t},t.exports.rmPrefix=_,t.exports.rmSuffix=y,t.exports.startswith=x,t.exports.endswith=function(t,e){return t.indexOf(e)===t.length-e.length},t.exports.titlecase=function(t){return t.charAt(0).toUpperCase()+t.substring(1,t.length)},t.exports.spaceTab=k,t.exports.rmPathPrefix=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t.startsWith("/");r&&e++,null===n&&(n=r);var a=t.split("/"),i=a.slice(e).join("/");return n?"/"+i:i},t.exports.getFilesDeep=function t(e){var n,r=[],a=f.readdirSync(e,{withFileTypes:!0}),i=o(a);try{for(i.s();!(n=i.n()).done;){var s=n.value,c=h.join(e,s.name);if(s.isDirectory()){var l=t(c);r=r.concat(l)}else s.isFile()&&r.push(c)}}catch(t){i.e(t)}finally{i.f()}return r},t.exports.getFilesShallow=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[],a=f.readdirSync(t,{withFileTypes:!0}),i=o(a);try{for(i.s();!(e=i.n()).done;){var s=e.value;(s.isFile()||s.isSymbolicLink())&&(null!==n&&h.parse(s.name).ext===n||r.push(s.name))}}catch(t){i.e(t)}finally{i.f()}return r},t.exports.describeObject=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=0,a=Object.entries(t);r<a.length;r++){var i=c(a[r],2),o=i[0],l=i[1],u=s(l),f=void 0;f="string"===u?p.inspect(l):"number"===u||"boolean"===u||null===l?l:"(".concat(u,")");var h=k(o+":"),g="".concat(e).concat(h).concat(f),d=void 0;d=g.length>n?g.substring(0,n-1)+"…":g,console.log(d)}},t.exports.logTree=function t(e,n,r){var a="";e.id&&(a=' id="'.concat(e.id));var i="";e.className&&(i=' class="'.concat(e.className,'"')),console.log("".concat(r,"<").concat(e.tagName.toLowerCase()).concat(a).concat(i,">")),r="  "+r,(n-=1)>0?e.children.forEach((function(e){return t(e,n,r)})):console.log("".concat(r,"  (recursion limit)"))};var S=function(){"use strict";function t(e){a(this,t),this.path=e}return i(t,[{key:"exists",value:function(){if(f.existsSync(this.path))return!0;try{return f.lstatSync(this.path),!0}catch(t){return!1}}},{key:"type",value:function(){if(!this.exists())return"nonexistent";var t;try{t=f.statSync(this.path)}catch(t){if("ENOENT"===t.code){if(this.isLink())return"brokenlink";throw console.error("Unexpected filesystem entry ".concat(this.path)),t}throw t}if(t.isFile())return"file";if(t.isDirectory())return"dir";if(t.isSocket())return"socket";if(t.isBlockDevice())return"block";if(t.isCharacterDevice())return"char";if(t.isFIFO())return"fifo";throw"Unexpected path type: ".concat(this.path)}},{key:"isLink",value:function(){if(this.exists()&&f.lstatSync(this.path).isSymbolicLink())return!0;return!1}},{key:"mtime",value:function(){return this.exists()?f.lstatSync(this.path).mtimeMs:null}},{key:"size",value:function(){return this.exists()?f.lstatSync(this.path).size:null}}],[{key:"exists",value:function(t){return new this(t).exists()}},{key:"type",value:function(t){return new this(t).type()}},{key:"isLink",value:function(t){return new this(t).isLink()}},{key:"mtime",value:function(t){return new this(t).mtime()}},{key:"size",value:function(t){return new this(t).size()}}]),t}();t.exports.PathInfo=S},AqkW:function(t,e,n){},F2CU:function(t,e,n){"use strict";n("A2zq")},Lwj6:function(t,e,n){"use strict";n("tIK0")},WCpG:function(t,e,n){"use strict";n("AqkW")},"gz/5":function(t,e,n){"use strict";n.r(e);var r=n("zYve"),a=n("zNj4"),i=n("Al62"),s={components:{ArticleHeader:r.a,ArticleFooter:a.a},metaInfo:function(){return{title:this.$page.article.title}},methods:{mdToHtml:i.mdToHtml}},c=(n("WCpG"),n("KHd+")),o=null,l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("ArticleHeader",{attrs:{article:t.$page.article}}),n("article",{staticClass:"content markdown"},[n("VueRemarkContent",{scopedSlots:t._u([t._l(t.$page.article.inserts,(function(e){return{key:e.name,fn:function(){return[n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],key:e.name,staticClass:"markdown",domProps:{innerHTML:t._s(t.mdToHtml(e.content))}})]},proxy:!0}}))],null,!0)})],1),n("ArticleFooter",{attrs:{article:t.$page.article}})],1)}),[],!1,null,"0e15fb2c",null);"function"==typeof o&&o(l);e.default=l.exports},tIK0:function(t,e,n){},zNj4:function(t,e,n){"use strict";var r={props:["article"]},a=(n("Lwj6"),n("KHd+")),i=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{class:this.article.category},["blog"===this.article.category?e("p",{staticClass:"backlink"},[this._v("\n    See this and other Galaxy-related posts in\n    "),e("g-link",{attrs:{to:"/blog/"}},[this._v("The Galactic Blog")])],1):this._e()])}),[],!1,null,"fcf53fc4",null);e.a=i.exports},zYve:function(t,e,n){"use strict";n("DQNa");var r=n("Al62"),a={props:["article"],methods:{getImage:function(t){return Object(r.getImage)(t.image,t.images)},dateSpan:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"D MMMM YYYY",a=Object(r.strToDate)(t);if(e&&e>1){var i=a.getTime()+24*(e-1)*60*60*1e3,s=new Date(i);return Object(r.dateToStr)(a,n)+" - "+Object(r.dateToStr)(s,n)}return Object(r.dateToStr)(a,n)},titlecase:r.titlecase,strToDate:r.strToDate,dateToStr:r.dateToStr}},i=(n("F2CU"),n("KHd+")),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:t.article.category},[t.article.category?n("g-link",{staticClass:"link",attrs:{to:"/"+t.article.category+"/"}},[t._v("\n    ← Back to "+t._s(t.titlecase(t.article.category))+"\n  ")]):n("g-link",{staticClass:"link",attrs:{to:"/"}},[t._v("← Back to Home")]),t.article.image?n("g-image",{staticClass:"img-fluid main-image",attrs:{src:t.getImage(t.article)}}):t._e(),t.article.skip_title_render?t._e():n("h1",{staticClass:"title"},[t._v(t._s(t.article.title))]),t.article.tease?n("p",{staticClass:"subtitle"},[t._v(t._s(t.article.tease))]):t._e(),"events"===t.article.category?n("ul",{staticClass:"metadata list-unstyled"},[t.article.date?n("li",[n("span",{staticClass:"metakey"},[t._v("Date:")]),t._v(" "+t._s(t.dateSpan(t.article.date,t.article.days))+"\n    ")]):t._e(),t.article.location?n("li",[n("span",{staticClass:"metakey"},[t._v("Location: ")]),t.article.location_url?n("a",{attrs:{href:t.article.location_url}},[t._v(t._s(t.article.location))]):[t._v(t._s(t.article.location))]],2):t._e(),t.article.contact?n("li",[n("span",{staticClass:"metakey"},[t._v("Contact: ")]),t.article.contact_url?n("a",{attrs:{href:t.article.contact_url}},[t._v(t._s(t.article.contact))]):[t._v(t._s(t.article.contact))]],2):t._e(),t.article.links.length>0?n("li",[n("span",{staticClass:"metakey"},[t._v("Links: ")]),t._l(t.article.links,(function(e){return[n("a",{key:e.url,attrs:{href:e.url}},[t._v(t._s(e.text))]),t._v(". \n      ")]}))],2):t._e()]):n("section",{staticClass:"metadata freetext"},[t.article.contact?n("p",{staticClass:"contact"},[t._v("\n      Contact: "+t._s(t.article.contact)+"\n    ")]):t._e(),t.article.authors?n("p",{staticClass:"authors"},[t._v("\n      By "+t._s(t.article.authors)+"\n    ")]):t._e(),t.article.date?n("p",{staticClass:"date"},[t._v("\n      "+t._s(t.dateToStr(t.strToDate(t.article.date),"D MMMM YYYY"))+"\n    ")]):t._e()]),t.article.external_url?n("p",{staticClass:"outlink"},[t._v("\n    See "),n("a",{attrs:{href:t.article.external_url}},[t._v("(external) blog entry")])]):t._e(),t.article.source_blog?n("p",{staticClass:"blogref"},[t._v("\n    From "),n("a",{attrs:{href:t.article.source_blog_url}},[t._v(t._s(t.article.source_blog))])]):t._e()],1)}),[],!1,null,"08ecca1f",null);e.a=s.exports}}]);