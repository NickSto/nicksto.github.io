(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Al62:function(e,t,r){var n,a,i,o=r("lwsE").default,s=r("W8MJ").default,l=r("cDf5").default,u=r("J4zp").default,c=r("Y3SK").default,f=r("VkAN").default,p=r("RIqP").default;r("oVuX"),r("yXV3"),r("YGK4"),r("07d7"),r("PKPk"),r("3bBZ"),r("ma9I"),r("TeQF"),r("EnZy"),r("rB9j"),r("DQNa"),r("+2oP"),r("rMz7"),r("SYor"),r("2B1R"),r("LKBx"),r("hDyC"),r("sMBO"),r("T63A"),r("QWBl"),r("FZtP");var d,m=r("Po9p"),g=r("33yf"),h=r("MCLT"),v=r("X0/w"),y=r("v2xc"),b=r("FDkO");function k(e){if(void 0===e.length&&0==(arguments.length<=1?0:arguments.length-1))return h.inspect(e);for(var t=[],r=0;r<e.length||r<(arguments.length<=1?0:arguments.length-1);r++)r<e.length&&t.push(e[r]),r<(arguments.length<=1?0:arguments.length-1)&&t.push(h.inspect(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]));return t.join("")}function x(e){return new Date(e+"T00:00:00")}function w(){if(d&&d.locale)return d.locale;if("undefined"!=typeof Intl&&Intl.DateTimeFormat){var e=Intl.DateTimeFormat();if(e.resolvedOptions){var t=e.resolvedOptions();if(t.locale)return t.locale}}if("undefined"!=typeof navigator){if(navigator.languages&&navigator.languages.length>0)return navigator.languages[0];for(var r=0,n=["userLanguage","browserLanguage","systemLanguage","language"];r<n.length;r++){var a=n[r];if(navigator[a])return navigator[a]}}return"en-US"}function _(e,t){return 0===e.indexOf(t)?e.slice(t.length):e}function P(e,t){var r=e.length-t.length;return e.slice(r)===t?e.slice(0,r):e}function S(e,t){return 0===e.indexOf(t)}function M(e,t){return e.indexOf(t)===e.length-t.length}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=t*(1+Math.floor(e.length/t));return e.padEnd(r)}m&&m.existsSync&&m.existsSync("config.json")&&(d=JSON.parse(m.readFileSync("config.json","utf8"))),e.exports.repr=k,e.exports.contains=function(e,t){return!!(e.indexOf(t)>-1)},e.exports.getUnion=function(e,t){var r=new Set([].concat(p(e),p(t)));return p(r)},e.exports.getIntersection=function(e,t){var r=new Set(e),n=new Set(t),a=new Set(p(r).filter((function(e){return n.has(e)})));return p(a)},e.exports.splitlines=function(e){return e.split(/\r\n|\r|\n/)},e.exports.strToDate=x,e.exports.dateToStr=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iso",r=w(),n={};switch(t){case"iso":return e.toISOString().slice(0,10);case"long":n={year:"numeric",month:"long",day:"numeric"};break;case"D MMMM YYYY":r="en-GB",n={year:"numeric",month:"long",day:"numeric"};break;case"D MMMM":n={month:"long",day:"numeric"};break;case"MMMM":n={month:"long"};break;case"MMMM YYYY":n={year:"numeric",month:"long"}}return e.toLocaleDateString(r,n)},e.exports.dateStrDiff=function(e,t){var r=x(e),n=x(t);return Math.round((r-n)/1e3/60/60/24)},e.exports.getLocale=w,e.exports.getImage=function(e,t){if(!e)return e;if(S(e,"/src/images/"))return e.substring(4);if(S(e,"/images/"))return e;var r=e.split("/"),a=r[r.length-1],i=t[a];return i||(console.error(k(n||(n=f(["Image "," not found in asset store."])),a)),e)},e.exports.mdToHtml=function(e){var t;return v().use(y,{sanitize:!1}).process(e,(function(e,r){e?console.error(e):t=String(r)})),_(P(t.trim(),"</p>"),"<p>")},e.exports.gridifyPath=function(e){var t=e.split(g.sep),r=t[t.length-1];return M(r,".html")&&(t[t.length-1]=P(r,".html"),t.push("")),t.map(b).join(g.sep)},e.exports.matchesPrefixes=function(e,t){var r,n=c(t);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(0===e.indexOf(a))return!0}}catch(e){n.e(e)}finally{n.f()}return!1},e.exports.ensurePrefix=function(e,t){return e.startsWith(t)?e:t+e},e.exports.rmPrefix=_,e.exports.rmSuffix=P,e.exports.startswith=S,e.exports.endswith=M,e.exports.titlecase=function(e){return e.charAt(0).toUpperCase()+e.substring(1,e.length)},e.exports.spaceTab=O,e.exports.rmPathPrefix=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e.startsWith("/");n&&t++,null===r&&(r=n);var a=e.split("/"),i=a.slice(t).join("/");return r?"/"+i:i},e.exports.getFilesDeep=function e(t){var r,n=[],a=m.readdirSync(t,{withFileTypes:!0}),i=c(a);try{for(i.s();!(r=i.n()).done;){var o=r.value,s=g.join(t,o.name);if(o.isDirectory()){var l=e(s);n=n.concat(l)}else o.isFile()&&n.push(s)}}catch(e){i.e(e)}finally{i.f()}return n},e.exports.getFilesShallow=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[],a=m.readdirSync(e,{withFileTypes:!0}),i=c(a);try{for(i.s();!(t=i.n()).done;){var o=t.value;(o.isFile()||o.isSymbolicLink())&&(null!==r&&g.parse(o.name).ext===r||n.push(o.name))}}catch(e){i.e(e)}finally{i.f()}return n},e.exports.doRedirect=function(e){window.location.href=e},e.exports.describeObject=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=0,a=Object.entries(e);n<a.length;n++){var i=u(a[n],2),o=i[0],s=i[1],c=l(s),f=void 0;f="string"===c?h.inspect(s):"number"===c||"boolean"===c||null===s?s:"(".concat(c,")");var p=O(o+":"),d="".concat(t).concat(p).concat(f),m=void 0;m=d.length>r?d.substring(0,r-1)+"…":d,console.log(m)}};var T={}.toString;function D(e){var t=T.call(e),r=t.split(" ");return 2!==r.length?(console.error(k(a||(a=f(["Wrong number of fields in toString: ",""])),r)),null):M(r[1],"]")?r[1].slice(0,r[1].length-1):(console.error(k(i||(i=f(["Unexpected toString value - no ending ']': ",""])),t)),null)}e.exports.getType=D,e.exports.findKey=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;if(!(n<=0))for(var a=0,i=Object.entries(t);a<i.length;a++){var o=u(i[a],2),s=o[0],l=o[1];if(s===r)return l;if("Object"===D(l))return e(l,r,n-1);if("Array"===D(l)){var f,p=c(l);try{for(p.s();!(f=p.n()).done;){var d=f.value,m=e(d,r,n-1);if("Undefined"!==D(m))return m}}catch(e){p.e(e)}finally{p.f()}}}},e.exports.logTree=function e(t,r,n){var a="";t.id&&(a=' id="'.concat(t.id));var i="";t.className&&(i=' class="'.concat(t.className,'"')),console.log("".concat(n,"<").concat(t.tagName.toLowerCase()).concat(a).concat(i,">")),n="  "+n,(r-=1)>0?t.children.forEach((function(t){return e(t,r,n)})):console.log("".concat(n,"  (recursion limit)"))};var L=function(){"use strict";function e(t){o(this,e),this.path=t}return s(e,[{key:"exists",value:function(){if(m.existsSync(this.path))return!0;try{return m.lstatSync(this.path),!0}catch(e){return!1}}},{key:"type",value:function(){if(!this.exists())return"nonexistent";var e;try{e=m.statSync(this.path)}catch(e){if("ENOENT"===e.code){if(this.isLink())return"brokenlink";throw console.error("Unexpected filesystem entry ".concat(this.path)),e}throw e}if(e.isFile())return"file";if(e.isDirectory())return"dir";if(e.isSocket())return"socket";if(e.isBlockDevice())return"block";if(e.isCharacterDevice())return"char";if(e.isFIFO())return"fifo";throw"Unexpected path type: ".concat(this.path)}},{key:"isLink",value:function(){if(this.exists()&&m.lstatSync(this.path).isSymbolicLink())return!0;return!1}},{key:"mtime",value:function(){return this.exists()?m.lstatSync(this.path).mtimeMs:null}},{key:"size",value:function(){return this.exists()?m.lstatSync(this.path).size:null}}],[{key:"exists",value:function(e){return new this(e).exists()}},{key:"type",value:function(e){return new this(e).type()}},{key:"isLink",value:function(e){return new this(e).isLink()}},{key:"mtime",value:function(e){return new this(e).mtime()}},{key:"size",value:function(e){return new this(e).size()}}]),e}();e.exports.PathInfo=L},GKVU:function(e,t,r){"use strict";var n=r("I+eb"),a=r("hXpO");n({target:"String",proto:!0,forced:r("rwPt")("anchor")},{anchor:function(e){return a(this,"a","name",e)}})},N135:function(e,t,r){},TAt2:function(e,t,r){"use strict";r.r(t);for(var n=r("uFwe"),a=(r("TeQF"),r("2B1R"),r("QWBl"),r("FZtP"),r("GKVU"),r("Al62")),i={"academic-cloud":"Academic","commercial-cloud":"Commercial",container:"Container",vm:"VM","public-server":"Server"},o={usegalaxy:{link:"/use/#usegalaxy-dir",text:"UseGalaxy"},general:{link:"/use/#genomics",text:"Genomics"},domain:{link:"/use/#domain",text:"Domain"},"tool-publishing":{link:"/use/#tool-publishing",text:"Tools"}},s=[{active:!0,id:"usegalaxy",label:"UseGalaxy",anchor:"usegalaxy-dir",linkGroup:"public-server",columns:["resource",{key:"link",label:"Server"},"summary","keywords"]},{id:"all-resources",label:"All",linkGroup:"public-server",columns:["resource",{key:"link",label:"Server"},"cloud","deployable","summary","keywords"]},{id:"public-server",label:"Public Servers",columns:["resource","link","summary","keywords"]},{id:"academic-cloud",label:"Academic Clouds",columns:["resource","link","summary","purview","keywords"]},{id:"commercial-cloud",label:"Commercial Clouds",columns:["resource","link","summary","keywords"]},{id:"containers",label:"Containers",anchor:"container",linkGroup:"container",columns:["resource","link","summary","keywords"]},{id:"vms",label:"VMs",anchor:"vm",linkGroup:"vm",columns:["resource","link","summary","keywords"]}],l=0,u=s;l<u.length;l++){var c=u[l];c.platforms=[],c.displayed=0,c.currentPage=1,c.pageStart=0,c.pageEnd=0}var f={metaInfo:function(){return{title:this.inserts.main.title}},data:function(){return{perPage:20,perPageOptions:[10,20,40,80,{value:1e3,text:"All"}],filter:"",keywords:o,tabs:s}},methods:{mdToHtml:a.mdToHtml,platformsByGroup:function(e){return this.platforms.filter((function(t){return function(e,t){return e.platforms.filter((function(e){return e.platform_group===t})).length>0}(t,e)}))},getPlatformValueByGroup:function(e,t,r){var a,i=Object(n.a)(e.platforms);try{for(i.s();!(a=i.n()).done;){var o=a.value;if(o.platform_group===t)return o[r]}}catch(e){i.e(e)}finally{i.f()}},getLinks:function(e,t){var r,o=[],s=Object(n.a)(e.platforms);try{for(s.s();!(r=s.n()).done;){var l=r.value;Object(a.contains)(t,l.platform_group)&&o.push({url:l.platform_url,text:i[l.platform_group]})}}catch(e){s.e(e)}finally{s.f()}return o},updateDisplayed:function(e,t){e.displayed=t,this.updatePageData(e)},updatePageData:function(e){0===e.displayed?e.pageStart=0:e.pageStart=(e.currentPage-1)*this.perPage+1;var t=e.currentPage*this.perPage;t>e.displayed?e.pageEnd=e.displayed:e.pageEnd=t}},computed:{inserts:function(){var e,t={},r=Object(n.a)(this.$page.allInsert.edges);try{for(r.s();!(e=r.n()).done;){var i=e.value;t[Object(a.rmSuffix)(Object(a.rmPrefix)(i.node.path,"/insert:/use/"),"/")]=i.node}}catch(e){r.e(e)}finally{r.f()}return t},platforms:function(){var e=this.$page.platforms.edges.map((function(e){return e.node}));return e.forEach((function(e){return e.filterKey=function(e){for(var t=[],r=0,a=["title","path","url"];r<a.length;r++){var s=a[r];e[s]&&t.push(e[s])}e.summary&&t.push(e.summary),o[e.scope]&&t.push(o[e.scope].text);var l,u=Object(n.a)(e.platforms);try{for(u.s();!(l=u.n()).done;){for(var c=l.value,f=0,p=["platform_url","platform_text"];f<p.length;f++){var d=p[f];c[d]&&t.push(c[d])}c.platform_group&&t.push(i[c.platform_group])}}catch(e){u.e(e)}finally{u.f()}return String(t)}(e)})),e}},created:function(){var e,t=Object(n.a)(this.tabs);try{for(t.s();!(e=t.n()).done;){var r=e.value;"usegalaxy"===r.id?r.platforms=this.platforms.filter((function(e){return"usegalaxy"===e.scope})):"all-resources"===r.id?r.platforms=this.platforms:r.platforms=this.platformsByGroup(r.anchor||r.id),r.displayed=r.platforms.length,this.updatePageData(r)}}catch(e){t.e(e)}finally{t.f()}}},p=(r("Ykyf"),r("KHd+")),d=null,m=Object(p.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("h1",{staticClass:"page-title"},[e._v(e._s(e.inserts.main.title))]),r("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:e._s(e.inserts.main.content)}}),r("b-tabs",{attrs:{"nav-class":"font-weight-bold"}},e._l(e.tabs,(function(t){return r("b-tab",{key:t.id,attrs:{title:t.label}},[r("h2",{staticClass:"nav-item",attrs:{id:e.tabs.anchor||e.tabs.id}},[e.inserts["tab-"+t.id]?[e._v("\n                    "+e._s(e.inserts["tab-"+t.id].title)+"\n                ")]:[e._v("\n                    "+e._s(t.label)+"\n                ")]],2),e.inserts["tab-"+t.id]?r("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:e._s(e.inserts["tab-"+t.id].content)}}):e._e(),r("p",{staticClass:"d-none"},[e._v("dummy text")]),r("b-row",{staticClass:"table-controls"},[r("b-col",{attrs:{cols:"2"}},[r("b-form-input",{attrs:{id:t.id+"-filter-input",type:"search",placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),r("b-col",{attrs:{cols:"2"}},[r("b-form-group",{attrs:{label:"Per page","label-for":t.id+"-per-page-select","label-size":"md","label-cols":"auto"}},[r("b-form-select",{attrs:{id:t.id+"-per-page-select",options:e.perPageOptions,size:"sm"},on:{input:function(r){return e.updatePageData(t)}},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),r("b-col",{attrs:{cols:"5"}},[r("b-form-group",{attrs:{label:"Page","label-for":t.id+"-page-select","label-size":"md","label-cols":"auto"}},[r("b-pagination",{attrs:{id:t.id+"-page-select","total-rows":t.displayed,"per-page":e.perPage,limit:"5","first-number":"","last-number":"","aria-controls":t.id+"-table"},on:{input:function(r){return e.updatePageData(t)}},model:{value:t.currentPage,callback:function(r){e.$set(t,"currentPage",r)},expression:"tab.currentPage"}})],1)],1),r("b-col",{attrs:{cols:"3"}},[r("p",[e._v("\n                        Showing "+e._s(t.pageStart)+" to "+e._s(t.pageEnd)+" of "+e._s(t.displayed)+"\n                        "),e.filter?[e._v(" results ")]:[e._v(" total ")]],2)])],1),r("b-table",{attrs:{striped:"",hover:"",id:t.id+"-table",items:t.platforms,fields:t.columns,"primary-key":"id","sort-by":"title","per-page":e.perPage,"current-page":t.currentPage,filter:e.filter,"filter-included-fields":["filterKey"]},on:{filtered:function(r,n){return e.updateDisplayed(t,n)}},scopedSlots:e._u([{key:"cell(resource)",fn:function(t){return[r("a",{attrs:{href:t.item.path}},[t.item.title?[e._v(e._s(t.item.title))]:[e._v(e._s(t.item.path))]],2)]}},{key:"cell(link)",fn:function(n){return e._l(e.getLinks(n.item,[t.linkGroup||t.id]),(function(t){return r("a",{key:t.text,attrs:{href:t.url}},[e._v("\n                        "+e._s(t.text)+"\n                    ")])}))}},{key:"cell(cloud)",fn:function(t){return e._l(e.getLinks(t.item,["academic-cloud","commercial-cloud"]),(function(t){return r("a",{key:t.text,attrs:{href:t.url}},[e._v("\n                        "+e._s(t.text)+"\n                    ")])}))}},{key:"cell(deployable)",fn:function(t){return e._l(e.getLinks(t.item,["container","vm"]),(function(t){return r("a",{key:t.text,attrs:{href:t.url}},[e._v("\n                        "+e._s(t.text)+"\n                    ")])}))}},{key:"cell(summary)",fn:function(t){return[r("span",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:e._s(e.mdToHtml(t.item.summary))}})]}},{key:"cell(purview)",fn:function(r){return[e._v("\n                    "+e._s(e.getPlatformValueByGroup(r.item,t.id,"platform_purview"))+"\n                ")]}},{key:"cell(keywords)",fn:function(t){return[r("g-link",{attrs:{to:e.keywords[t.item.scope].link}},[e._v("\n                        "+e._s(e.keywords[t.item.scope].text)+"\n                    ")])]}}],null,!0)}),e.inserts["tab-"+t.id+"-footer"]?r("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:e._s(e.inserts["tab-"+t.id+"-footer"].content)}}):e._e()],1)})),1),r("hr"),e.inserts.footer?r("footer",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"page-footer markdown",domProps:{innerHTML:e._s(e.inserts.footer.content)}}):e._e()],1)}),[],!1,null,"01e19db4",null);"function"==typeof d&&d(m);t.default=m.exports},Ykyf:function(e,t,r){"use strict";r("N135")}}]);