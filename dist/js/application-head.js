/*! gruntyplate - v0.1.0 - 2016-10-04
* Copyright (c) 2016 Gruntyplate;*/

!function(a,b,c){function d(a,b){return typeof a===b}function e(){var a,b,c,e,f,g,h;for(var i in t)if(t.hasOwnProperty(i)){if(a=[],b=t[i],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(e=d(b.fn,"function")?b.fn():b.fn,f=0;f<a.length;f++)g=a[f],h=g.split("."),1===h.length?v[h[0]]=e:(!v[h[0]]||v[h[0]]instanceof Boolean||(v[h[0]]=new Boolean(v[h[0]])),v[h[0]][h[1]]=e),s.push((e?"":"no-")+h.join("-"))}}function f(a){var b=w.className,c=v._config.classPrefix||"";if(x&&(b=b.baseVal),v._config.enableJSClass){var d=new RegExp("(^|\\s)"+c+"no-js(\\s|$)");b=b.replace(d,"$1"+c+"js$2")}v._config.enableClasses&&(b+=" "+c+a.join(" "+c),x?w.className.baseVal=b:w.className=b)}function g(a,b){return!!~(""+a).indexOf(b)}function h(){return"function"!=typeof b.createElement?b.createElement(arguments[0]):x?b.createElementNS.call(b,"http://www.w3.org/2000/svg",arguments[0]):b.createElement.apply(b,arguments)}function i(a){return a.replace(/([a-z])-([a-z])/g,function(a,b,c){return b+c.toUpperCase()}).replace(/^-/,"")}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b,c){var e;for(var f in a)if(a[f]in b)return c===!1?a[f]:(e=b[a[f]],d(e,"function")?j(e,c||b):e);return!1}function l(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(){var a=b.body;return a||(a=h(x?"svg":"body"),a.fake=!0),a}function n(a,c,d,e){var f,g,i,j,k="modernizr",l=h("div"),n=m();if(parseInt(d,10))for(;d--;)i=h("div"),i.id=e?e[d]:k+(d+1),l.appendChild(i);return f=h("style"),f.type="text/css",f.id="s"+k,(n.fake?n:l).appendChild(f),n.appendChild(l),f.styleSheet?f.styleSheet.cssText=a:f.appendChild(b.createTextNode(a)),l.id=k,n.fake&&(n.style.background="",n.style.overflow="hidden",j=w.style.overflow,w.style.overflow="hidden",w.appendChild(n)),g=c(l,a),n.fake?(n.parentNode.removeChild(n),w.style.overflow=j,w.offsetHeight):l.parentNode.removeChild(l),!!g}function o(b,d){var e=b.length;if("CSS"in a&&"supports"in a.CSS){for(;e--;)if(a.CSS.supports(l(b[e]),d))return!0;return!1}if("CSSSupportsRule"in a){for(var f=[];e--;)f.push("("+l(b[e])+":"+d+")");return f=f.join(" or "),n("@supports ("+f+") { #modernizr { position: absolute; } }",function(a){return"absolute"==getComputedStyle(a,null).position})}return c}function p(a,b,e,f){function j(){l&&(delete C.style,delete C.modElem)}if(f=!d(f,"undefined")&&f,!d(e,"undefined")){var k=o(a,e);if(!d(k,"undefined"))return k}for(var l,m,n,p,q,r=["modernizr","tspan","samp"];!C.style&&r.length;)l=!0,C.modElem=h(r.shift()),C.style=C.modElem.style;for(n=a.length,m=0;n>m;m++)if(p=a[m],q=C.style[p],g(p,"-")&&(p=i(p)),C.style[p]!==c){if(f||d(e,"undefined"))return j(),"pfx"!=b||p;try{C.style[p]=e}catch(s){}if(C.style[p]!=q)return j(),"pfx"!=b||p}return j(),!1}function q(a,b,c,e,f){var g=a.charAt(0).toUpperCase()+a.slice(1),h=(a+" "+z.join(g+" ")+g).split(" ");return d(b,"string")||d(b,"undefined")?p(h,b,e,f):(h=(a+" "+A.join(g+" ")+g).split(" "),k(h,b,c))}function r(a,b,d){return q(a,c,c,b,d)}var s=[],t=[],u={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(a,b,c){t.push({name:a,fn:b,options:c})},addAsyncTest:function(a){t.push({name:null,fn:a})}},v=function(){};v.prototype=u,v=new v;var w=b.documentElement,x="svg"===w.nodeName.toLowerCase(),y="Moz O ms Webkit",z=u._config.usePrefixes?y.split(" "):[];u._cssomPrefixes=z;var A=u._config.usePrefixes?y.toLowerCase().split(" "):[];u._domPrefixes=A;var B={elem:h("modernizr")};v._q.push(function(){delete B.elem});var C={style:B.elem.style};v._q.unshift(function(){delete C.style}),u.testAllProps=q,u.testAllProps=r,v.addTest("flexbox",r("flexBasis","1px",!0)),e(),f(s),delete u.addTest,delete u.addAsyncTest;for(var D=0;D<v._q.length;D++)v._q[D]();a.Modernizr=v}(window,document),function(){if(window&&window.addEventListener){var a,b,c=Object.create(null),d=function(){clearTimeout(b),b=setTimeout(a,100)},e=function(){},f=function(){var a;window.MutationObserver?(a=new MutationObserver(d),a.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),e=function(){try{a.disconnect()}catch(b){}}):(document.documentElement.addEventListener("DOMSubtreeModified",d,!1),e=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1)})};a=function(){function a(){--n,0===n&&f()}function b(b){return function(){var c=document.body,d=document.createElement("x");b.onload=null,d.innerHTML=b.responseText,(d=d.getElementsByTagName("svg")[0])&&(d.style.position="absolute",d.style.width=0,d.style.height=0,c.insertBefore(d,c.firstChild)),a()}}function d(b){return function(){b.onerror=null,b.ontimeout=null,a()}}var g,h,i,j,k,l,m,n=0;if(window.XMLHttpRequest&&(k=new XMLHttpRequest,k=void 0!==k.withCredentials?XMLHttpRequest:XDomainRequest||void 0),void 0!==k){for(e(),m=document.getElementsByTagName("use"),j=0;j<m.length;j+=1){try{h=m[j].getBoundingClientRect()}catch(o){h=!1}i=m[j].getAttributeNS("http://www.w3.org/1999/xlink","href").split("#"),g=i[0],i=i[1],l=h&&0===h.left&&0===h.right,h&&0===h.width&&0===h.height&&!l?g.length&&(l=c[g],!0!==l&&m[j].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+i),void 0===l&&(l=new k,c[g]=l,l.onload=b(l),l.onerror=d(l),l.ontimeout=d(l),l.open("GET",g),l.send(),n+=1)):l||void 0!==c[g]||(c[g]=!0)}m="",n+=1,a()}},window.addEventListener("load",function b(){window.removeEventListener("load",b,!1),a()},!1)}}(),function(a){var b={defaults:{selector:".column",outerHeight:!1,responsive:!0,excludeFullWidth:!1},tallest:0,watching:!1,settings:"",sizeColumns:function(c){return a(c).each(function(){var c=a(this).width();columns=a(this).find(b.settings.selector),b.tallest=0,columns.each(function(d){return b.settings.excludeFullWidth&&a(this).outerWidth()>=c?(columns=columns.not(this),!0):void(b.settings.outerHeight?a(this).outerHeight()>b.tallest&&(b.tallest=a(this).outerHeight()):a(this).height()>b.tallest&&(b.tallest=a(this).height()))}),columns.css("height",b.tallest).addClass("ehc-sized")})},watchResize:function(c){b.watching=!0,a(window).on("resize.ehc",function(d){b.watching&&(b.tallest=0,a(c).find(b.settings.selector).each(function(){a(this).css("height","")}),b.sizeColumns(c))})},methods:{kill:function(c){return b.watching=!1,a(window).off("resize.ehc"),a(c).find(b.settings.selector).each(function(){a(this).css("height","")})},refresh:function(a){return b.methods.kill(a),b.sizeColumns(a),b.watchResize(a)},debug:function(){return b}}};a.fn.equalHeightColumns=function(c){return b.methods[c]?this.each(function(){b.methods[c].apply(void 0,[this])}):(b.settings=a.extend(b.defaults,c),b.settings.responsive&&b.watchResize(this),this.each(function(){b.sizeColumns(this)}))}}(jQuery),function(a,b){function c(a){return"object"===b.type(a)}function d(a){return"string"===b.type(a)&&b.trim(a).length>0}function e(a,b,c,d){d(a[c])||(a[c]=b[c])}b.fn.extend({scrollspy:function(g,h){if(d(g)){var i=h;h=g,g=i}g=b.extend({},f,g),e(g,f,"container",c);var j=b(g.container);if(0===j.length)return this;if(e(g,f,"namespace",d),d(h)&&"DESTROY"===h.toUpperCase())return j.off("scroll."+g.namespace),this;e(g,f,"buffer",b.isNumeric),e(g,f,"max",b.isNumeric),e(g,f,"min",b.isNumeric),e(g,f,"onEnter",b.isFunction),e(g,f,"onLeave",b.isFunction),e(g,f,"onLeaveTop",b.isFunction),e(g,f,"onLeaveBottom",b.isFunction),e(g,f,"onTick",b.isFunction),b.isFunction(g.max)&&(g.max=g.max()),b.isFunction(g.min)&&(g.min=g.min());var k="VERTICAL"===a.String(g.mode).toUpperCase();return this.each(function(){var a=this,c=b(a),d=0,e=!1,f=0;j.on("scroll."+g.namespace,function(){var h=b(this),i={top:h.scrollTop(),left:h.scrollLeft()},l=j.height(),m=g.max,n=g.min,o=k?i.top+g.buffer:i.left+g.buffer;if(0===m&&(m=k?l:j.outerWidth()+c.outerWidth()),o>=n&&o<=m)e||(e=!0,d++,c.trigger("scrollEnter",{position:i}),null!==g.onEnter&&g.onEnter(a,i)),c.trigger("scrollTick",{position:i,inside:e,enters:d,leaves:f}),null!==g.onTick&&g.onTick(a,i,e,d,f);else if(e)e=!1,f++,c.trigger("scrollLeave",{position:i,leaves:f}),null!==g.onLeave&&g.onLeave(a,i),o<=n?(c.trigger("scrollLeaveTop",{position:i,leaves:f}),null!==g.onLeaveTop&&g.onLeaveTop(a,i)):o>=m&&(c.trigger("scrollLeaveBottom",{position:i,leaves:f}),null!==g.onLeaveBottom&&g.onLeaveBottom(a,i));else{var p=j.scrollTop(),q=c.height(),r=c.offset().top;r<l+p&&r>p-q&&(c.trigger("scrollView",{position:i}),null!==g.onView&&g.onView(a,i))}})})}});var f={buffer:0,container:a,max:0,min:0,mode:"vertical",namespace:"scrollspy",onEnter:null,onLeave:null,onLeaveTop:null,onLeaveBottom:null,onTick:null,onView:null}}(window,window.jQuery);
//# sourceMappingURL=application-head.js.map