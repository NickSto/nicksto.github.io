(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1BVN":function(t,e,n){},Al62:function(t,e,n){var r,a=n("cDf5").default,i=n("J4zp").default,o=n("Y3SK").default,s=n("VkAN").default;n("oVuX"),n("UxlC"),n("rB9j"),n("+2oP"),n("rMz7"),n("DQNa"),n("EnZy"),n("SYor"),n("yXV3"),n("LKBx"),n("hDyC"),n("sMBO"),n("ma9I"),n("T63A"),n("QWBl"),n("FZtP");var c=n("Po9p"),l=n("33yf"),u=n("MCLT"),g=n("X0/w"),f=n("v2xc");function p(t){if(void 0===t.length&&0==(arguments.length<=1?0:arguments.length-1))return u.inspect(t);for(var e=[],n=0;n<t.length||n<(arguments.length<=1?0:arguments.length-1);n++)n<t.length&&e.push(t[n]),n<(arguments.length<=1?0:arguments.length-1)&&e.push(u.inspect(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]));return e.join("")}function d(t,e){return 0===t.indexOf(e)?t.slice(e.length):t}function h(t,e){var n=t.length-e.length;return t.slice(n)===e?t.slice(0,n):t}function m(t,e){return 0===t.indexOf(e)}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=e*(1+Math.floor(t.length/e));return t.padEnd(n)}t.exports.repr=p,t.exports.slugify=function(t){return t.toLowerCase().replace(/[^\w\d -]/g,"").replace(/[ -]+/g,"-")},t.exports.dateToStr=function(t){return t.toISOString().slice(0,10)},t.exports.dateStrDiff=function(t,e){var n=new Date(t),r=new Date(e);return Math.round((n-r)/1e3/60/60/24)},t.exports.getImage=function(t,e){if(!t)return t;if(m(t,"/src/images/"))return t.substring(4);if(m(t,"/images/"))return t;var n=t.split("/"),a=n[n.length-1],i=e[a];return i||(console.error(p(r||(r=s(["Image "," not found in asset store."])),a)),t)},t.exports.mdToHtml=function(t){var e;return g().use(f).process(t,(function(t,n){t?console.error(t):e=String(n)})),d(h(e.trim(),"</p>"),"<p>")},t.exports.matchesPrefixes=function(t,e){var n,r=o(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(0===t.indexOf(a))return!0}}catch(t){r.e(t)}finally{r.f()}return!1},t.exports.ensurePrefix=function(t,e){return t.startsWith(e)?t:e+t},t.exports.rmPrefix=d,t.exports.rmSuffix=h,t.exports.startswith=m,t.exports.endswith=function(t,e){return t.indexOf(e)===t.length-e.length},t.exports.titlecase=function(t){return t.charAt(0).toUpperCase()+t.substring(1,t.length)},t.exports.spaceTab=v,t.exports.rmPathPrefix=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t.startsWith("/");r&&e++,null===n&&(n=r);var a=t.split("/"),i=a.slice(e).join("/");return n?"/"+i:i},t.exports.getFilesDeep=function t(e){var n,r=[],a=c.readdirSync(e,{withFileTypes:!0}),i=o(a);try{for(i.s();!(n=i.n()).done;){var s=n.value,u=l.join(e,s.name);if(s.isDirectory()){var g=t(u);r=r.concat(g)}else s.isFile()&&r.push(u)}}catch(t){i.e(t)}finally{i.f()}return r},t.exports.getFilesShallow=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[],a=c.readdirSync(t,{withFileTypes:!0}),i=o(a);try{for(i.s();!(e=i.n()).done;){var s=e.value;(s.isFile()||s.isSymbolicLink())&&(null!==n&&l.parse(s.name).ext===n||r.push(s.name))}}catch(t){i.e(t)}finally{i.f()}return r},t.exports.describeObject=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=0,o=Object.entries(t);r<o.length;r++){var s=i(o[r],2),c=s[0],l=s[1],g=a(l),f=void 0;f="string"===g?u.inspect(l):"number"===g||"boolean"===g||null===l?l:"(".concat(g,")");var p=v(c+":"),d="".concat(e).concat(p).concat(f),h=void 0;h=d.length>n?d.substring(0,n-1)+"…":d,console.log(h)}},t.exports.logTree=function t(e,n,r){var a="";e.id&&(a=' id="'.concat(e.id));var i="";e.className&&(i=' class="'.concat(e.className,'"')),console.log("".concat(r,"<").concat(e.tagName.toLowerCase()).concat(a).concat(i,">")),r="  "+r,(n-=1)>0?e.children.forEach((function(e){return t(e,n,r)})):console.log("".concat(r,"  (recursion limit)"))}},"gz/5":function(t,e,n){"use strict";n.r(e);var r=n("Al62"),a={metaInfo:function(){return{title:this.$page.article.title}},methods:{mdToHtml:r.mdToHtml,getImage:function(t){return Object(r.getImage)(t,this.$page.article.images)}}},i=(n("iUyQ"),n("KHd+")),o=null,s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("g-link",{staticClass:"link",attrs:{to:"/"}},[t._v(" ← Home")]),n("header",[t.$page.article.image?n("g-image",{staticClass:"img-fluid main-image",attrs:{src:t.getImage(t.$page.article.image)}}):t._e(),t.$page.article.skip_title_render?t._e():n("h1",{staticClass:"title"},[t._v(t._s(t.$page.article.title))]),n("section",{staticClass:"metadata"},[t.$page.article.tease?n("p",{staticClass:"subtitle"},[t._v(t._s(t.$page.article.tease))]):t._e(),t.$page.article.contact?n("p",{staticClass:"contact"},[t._v("\n        Contact: "+t._s(t.$page.article.contact)+"\n      ")]):t._e(),t.$page.article.date?n("p",{staticClass:"date"},[t._v(t._s(t.$page.article.date))]):t._e()])],1),n("article",{staticClass:"content markdown"},[n("VueRemarkContent",{scopedSlots:t._u([t._l(t.$page.article.inserts,(function(e){return{key:e.name,fn:function(){return[n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],key:e.name,staticClass:"markdown",domProps:{innerHTML:t._s(t.mdToHtml(e.content))}})]},proxy:!0}}))],null,!0)})],1)],1)}),[],!1,null,"4735ab8b",null);"function"==typeof o&&o(s);e.default=s.exports},iUyQ:function(t,e,n){"use strict";n("1BVN")}}]);