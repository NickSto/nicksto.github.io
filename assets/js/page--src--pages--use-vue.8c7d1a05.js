(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Al62:function(t,e,r){var n,i=r("lwsE").default,s=r("W8MJ").default,a=r("cDf5").default,o=r("J4zp").default,l=r("Y3SK").default,c=r("VkAN").default;r("oVuX"),r("UxlC"),r("rB9j"),r("EnZy"),r("+2oP"),r("rMz7"),r("DQNa"),r("SYor"),r("yXV3"),r("LKBx"),r("hDyC"),r("sMBO"),r("ma9I"),r("T63A"),r("QWBl"),r("FZtP");var u=r("Po9p"),f=r("33yf"),p=r("MCLT"),h=r("X0/w"),m=r("v2xc");function d(t){if(void 0===t.length&&0==(arguments.length<=1?0:arguments.length-1))return p.inspect(t);for(var e=[],r=0;r<t.length||r<(arguments.length<=1?0:arguments.length-1);r++)r<t.length&&e.push(t[r]),r<(arguments.length<=1?0:arguments.length-1)&&e.push(p.inspect(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]));return e.join("")}function g(t,e){return 0===t.indexOf(e)?t.slice(e.length):t}function v(t,e){var r=t.length-e.length;return t.slice(r)===e?t.slice(0,r):t}function x(t,e){return 0===t.indexOf(e)}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=e*(1+Math.floor(t.length/e));return t.padEnd(r)}t.exports.repr=d,t.exports.slugify=function(t){return t.toLowerCase().replace(/[^\w\d -]/g,"").replace(/[ -]+/g,"-")},t.exports.splitlines=function(t){return t.split(/\r\n|\r|\n/)},t.exports.dateToStr=function(t){return t.toISOString().slice(0,10)},t.exports.dateStrDiff=function(t,e){var r=new Date(t),n=new Date(e);return Math.round((r-n)/1e3/60/60/24)},t.exports.getImage=function(t,e){if(!t)return t;if(x(t,"/src/images/"))return t.substring(4);if(x(t,"/images/"))return t;var r=t.split("/"),i=r[r.length-1],s=e[i];return s||(console.error(d(n||(n=c(["Image "," not found in asset store."])),i)),t)},t.exports.mdToHtml=function(t){var e;return h().use(m).process(t,(function(t,r){t?console.error(t):e=String(r)})),g(v(e.trim(),"</p>"),"<p>")},t.exports.matchesPrefixes=function(t,e){var r,n=l(e);try{for(n.s();!(r=n.n()).done;){var i=r.value;if(0===t.indexOf(i))return!0}}catch(t){n.e(t)}finally{n.f()}return!1},t.exports.ensurePrefix=function(t,e){return t.startsWith(e)?t:e+t},t.exports.rmPrefix=g,t.exports.rmSuffix=v,t.exports.startswith=x,t.exports.endswith=function(t,e){return t.indexOf(e)===t.length-e.length},t.exports.titlecase=function(t){return t.charAt(0).toUpperCase()+t.substring(1,t.length)},t.exports.spaceTab=y,t.exports.rmPathPrefix=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t.startsWith("/");n&&e++,null===r&&(r=n);var i=t.split("/"),s=i.slice(e).join("/");return r?"/"+s:s},t.exports.getFilesDeep=function t(e){var r,n=[],i=u.readdirSync(e,{withFileTypes:!0}),s=l(i);try{for(s.s();!(r=s.n()).done;){var a=r.value,o=f.join(e,a.name);if(a.isDirectory()){var c=t(o);n=n.concat(c)}else a.isFile()&&n.push(o)}}catch(t){s.e(t)}finally{s.f()}return n},t.exports.getFilesShallow=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[],i=u.readdirSync(t,{withFileTypes:!0}),s=l(i);try{for(s.s();!(e=s.n()).done;){var a=e.value;(a.isFile()||a.isSymbolicLink())&&(null!==r&&f.parse(a.name).ext===r||n.push(a.name))}}catch(t){s.e(t)}finally{s.f()}return n},t.exports.describeObject=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=0,i=Object.entries(t);n<i.length;n++){var s=o(i[n],2),l=s[0],c=s[1],u=a(c),f=void 0;f="string"===u?p.inspect(c):"number"===u||"boolean"===u||null===c?c:"(".concat(u,")");var h=y(l+":"),m="".concat(e).concat(h).concat(f),d=void 0;d=m.length>r?m.substring(0,r-1)+"…":m,console.log(d)}},t.exports.logTree=function t(e,r,n){var i="";e.id&&(i=' id="'.concat(e.id));var s="";e.className&&(s=' class="'.concat(e.className,'"')),console.log("".concat(n,"<").concat(e.tagName.toLowerCase()).concat(i).concat(s,">")),n="  "+n,(r-=1)>0?e.children.forEach((function(e){return t(e,r,n)})):console.log("".concat(n,"  (recursion limit)"))};var w=function(){"use strict";function t(e){i(this,t),this.path=e}return s(t,[{key:"exists",value:function(){if(u.existsSync(this.path))return!0;try{return u.lstatSync(this.path),!0}catch(t){return!1}}},{key:"type",value:function(){if(!this.exists())return"nonexistent";var t;try{t=u.statSync(this.path)}catch(t){if("ENOENT"===t.code){if(this.isLink())return"brokenlink";throw console.error("Unexpected filesystem entry ".concat(this.path)),t}throw t}if(t.isFile())return"file";if(t.isDirectory())return"dir";if(t.isSocket())return"socket";if(t.isBlockDevice())return"block";if(t.isCharacterDevice())return"char";if(t.isFIFO())return"fifo";throw"Unexpected path type: ".concat(this.path)}},{key:"isLink",value:function(){if(this.exists()&&u.lstatSync(this.path).isSymbolicLink())return!0;return!1}},{key:"mtime",value:function(){return this.exists()?u.lstatSync(this.path).mtimeMs:null}},{key:"size",value:function(){return this.exists()?u.lstatSync(this.path).size:null}}]),t}();t.exports.PathInfo=w},TAt2:function(t,e,r){"use strict";r.r(e);var n={props:["platform"],methods:{mdToHtml:r("Al62").mdToHtml}},i=r("KHd+"),s={components:{PlatformRow:Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",{staticClass:"title"},[r("a",{attrs:{href:t.platform.path}},[t.platform.title?[t._v(t._s(t.platform.title))]:[t._v(t._s(t.platform.path))]],2)]),r("td",{staticClass:"server"},[r("a",{attrs:{href:t.platform.url}},[t._v("Server")])]),r("td",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"summary markdown",domProps:{innerHTML:t._s(t.mdToHtml(t.platform.summary))}})])}),[],!1,null,null,null).exports},metaInfo:function(){return{title:this.$page.main.title}}},a=null,o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("h1",{staticClass:"page-title"},[t._v(t._s(t.$page.main.title))]),r("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:t._s(t.$page.main.content)}}),r("table",{staticClass:"table table-striped"},[r("thead",[r("tr",[r("th",[t._v("Resource")]),r("th",[t._v("Server")]),r("th",[t._v("Summary")])])]),r("tbody",t._l(t.$page.platforms.edges,(function(t){return r("PlatformRow",{key:t.node.id,attrs:{platform:t.node}})})),1)]),t.$page.footer?r("footer",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"page-footer markdown",domProps:{innerHTML:t._s(t.$page.footer.content)}}):t._e()])}),[],!1,null,null,null);"function"==typeof a&&a(o);e.default=o.exports}}]);