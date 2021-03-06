(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
r("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.P=b.prototype}
function oa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.u=this.h=null}
function pa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
oa.prototype.B=function(a){this.g=a};
function qa(a,b){a.h={Fa:b,ra:!0};a.f=a.l||a.j}
oa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function w(a,b,c){a.f=c;return{value:b}}
oa.prototype.I=function(a){this.f=a};
function ra(a){this.f=new oa;this.g=a}
function sa(a,b){pa(a.f);var c=a.f.i;if(c)return ta(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return ua(a)}
function ta(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,qa(a.f,g),ua(a)}a.f.i=null;d.call(a.f,f);return ua(a)}
function ua(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,qa(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.ra)throw b.Fa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function va(a){this.next=function(b){pa(a.f);a.f.i?b=ta(a,a.f.i.next,b,a.f.B):(a.f.B(b),b=ua(a));return b};
this["throw"]=function(b){pa(a.f);a.f.i?b=ta(a,a.f.i["throw"],b,a.f.B):(qa(a.f,b),b=ua(a));return b};
this["return"]=function(b){return sa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){var c=new va(new ra(b));na&&a.prototype&&na(c,a.prototype);return c}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function wa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
r("Object.setPrototypeOf",function(a){return a||na});
function xa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ya="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)xa(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ya});
r("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.C),reject:g(this.j)}};
b.prototype.C=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.F(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.u(g):this.l(g)}};
b.prototype.u=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.G(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.B()};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.F=function(g){var h=this.i();g.da(h.resolve,h.reject)};
b.prototype.G=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(A){try{l(t(A))}catch(E){m(E)}}:q}
var l,m,p=new b(function(t,q){l=t;m=q});
this.da(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.da=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).da(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(A){return function(E){t[A]=E;q--;0==q&&l(t)}}
var t=[],q=0;do t.push(void 0),q++,d(k.value).da(p(t.length-1),m),k=h.next();while(!k.done)})};
return b});
function za(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.keys",function(a){return a?a:function(){return za(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return za(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==wa(this,b,"includes").indexOf(b,c||0)}});
r("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!xa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!xa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&xa(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&xa(k,g)&&xa(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&xa(k,g)&&xa(k[g],this.f)?delete k[g][this.f]:!1};
return b});
r("Array.prototype.entries",function(a){return a?a:function(){return za(this,function(b,c){return[b,c]})}});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&xa(h.g,l))for(var p=0;p<m.length;p++){var t=m[p];if(k!==k&&t.key!==t.key||k===t.key)return{id:l,list:m,index:p,A:t}}return{id:l,list:m,index:-1,A:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.A?l.A.value=k:(l.A={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.A),this.f.previous.next=l.A,this.f.previous=l.A,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.A&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.A.previous.next=h.A.next,h.A.next.previous=h.A.previous,h.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).A};
e.prototype.get=function(h){return(h=d(this,h).A)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)xa(b,d)&&c.push([d,b[d]]);return c}});
r("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Aa(a){if(a&&a!=y)return Ba(a.document);null===Ca&&(Ca=Ba(y.document));return Ca}
var Da=/^[\w+/_-]+[=]{0,2}$/,Ca=null;function Ba(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Da.test(a)?a:""}
function B(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ea(){}
function Fa(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++La)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),La=0;function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Ma:C=Na;return C.apply(null,arguments)}
function Oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now;function Pa(a,b){z(a,b,void 0)}
function F(a,b){function c(){}
c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Qa(a){return a}
;function G(a){if(Error.captureStackTrace)Error.captureStackTrace(this,G);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(G,Error);G.prototype.name="CustomError";function Ra(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function Sa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ua=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Wa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Xa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ya(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Za(a,b){var c=Ta(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function $a(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ab(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function cb(a,b){var c=Ha(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ib(a){var b={},c;for(c in a)b[c]=a[c];return b}
function jb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=jb(a[c]);return b}
var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var mb;function nb(){if(void 0===mb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Qa,createScript:Qa,createScriptURL:Qa})}catch(c){y.console&&y.console.error(c.message)}mb=a}else mb=a}return mb}
;function ob(a,b){this.f=b===pb?a:""}
ob.prototype.O=!0;ob.prototype.M=function(){return this.f.toString()};
ob.prototype.ka=!0;ob.prototype.ha=function(){return 1};
function qb(a){if(a instanceof ob&&a.constructor===ob)return a.f;Ga(a);return"type_error:TrustedResourceUrl"}
var pb={};var rb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function sb(a,b){if(b)a=a.replace(tb,"&amp;").replace(ub,"&lt;").replace(vb,"&gt;").replace(wb,"&quot;").replace(xb,"&#39;").replace(yb,"&#0;");else{if(!zb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(tb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ub,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(vb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(wb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(xb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(yb,"&#0;"))}return a}
var tb=/&/g,ub=/</g,vb=/>/g,wb=/"/g,xb=/'/g,yb=/\x00/g,zb=/[\x00&<>"']/;function I(a,b){this.f=b===Ab?a:""}
I.prototype.O=!0;I.prototype.M=function(){return this.f.toString()};
I.prototype.ka=!0;I.prototype.ha=function(){return 1};
function Bb(a){if(a instanceof I&&a.constructor===I)return a.f;Ga(a);return"type_error:SafeUrl"}
var Cb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Db=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Fb(a){if(a instanceof I)return a;a="object"==typeof a&&a.O?a.M():String(a);Eb.test(a)||(a="about:invalid#zClosurez");return new I(a,Ab)}
var Ab={},Gb=new I("about:invalid#zClosurez",Ab);var Hb;a:{var Ib=y.navigator;if(Ib){var Jb=Ib.userAgent;if(Jb){Hb=Jb;break a}}Hb=""}function J(a){return-1!=Hb.indexOf(a)}
;function Kb(a,b,c){this.f=c===Lb?a:"";this.g=b}
Kb.prototype.ka=!0;Kb.prototype.ha=function(){return this.g};
Kb.prototype.O=!0;Kb.prototype.M=function(){return this.f.toString()};
var Lb={};function Mb(a,b){var c=nb();c=c?c.createHTML(a):a;return new Kb(c,b,Lb)}
;function Nb(a,b){var c=b instanceof I?b:Fb(b);a.href=Bb(c)}
function Ob(a,b){a.src=qb(b);var c=Aa(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Pb(a){return a=sb(a,void 0)}
function Qb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Rb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Sb(a){return a?decodeURI(a):a}
function K(a){return Sb(a.match(Rb)[3]||null)}
function Tb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Tb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Vb(a){var b=[],c;for(c in a)Tb(c,a[c],b);return b.join("&")}
function Wb(a,b){var c=Vb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Xb=/#|$/;function L(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;var Yb=J("Opera"),Zb=J("Trident")||J("MSIE"),$b=J("Edge"),ac=J("Gecko")&&!(-1!=Hb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),bc=-1!=Hb.toLowerCase().indexOf("webkit")&&!J("Edge");function cc(){var a=y.document;return a?a.documentMode:void 0}
var dc;a:{var ec="",fc=function(){var a=Hb;if(ac)return/rv:([^\);]+)(\)|;)/.exec(a);if($b)return/Edge\/([\d\.]+)/.exec(a);if(Zb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(bc)return/WebKit\/(\S+)/.exec(a);if(Yb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fc&&(ec=fc?fc[1]:"");if(Zb){var gc=cc();if(null!=gc&&gc>parseFloat(ec)){dc=String(gc);break a}}dc=ec}var hc=dc,ic;if(y.document&&Zb){var jc=cc();ic=jc?jc:parseInt(hc,10)||void 0}else ic=void 0;var kc=ic;var lc=J("iPhone")&&!J("iPod")&&!J("iPad")||J("iPod"),mc=J("iPad");var nc={},oc=null;var M=window;function pc(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=qc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,rc[c])c=rc[c];else{c=String(c);if(!rc[c]){var f=/function\s+([^\(]+)/m.exec(c);rc[c]=f?f[1]:"[Anonymous]"}c=rc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function qc(a,b){b||(b={});b[sc(a)]=!0;var c=a.stack||"",d=a.wb;d&&!b[sc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=qc(d,b));return c}
function sc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var rc={};function tc(a){this.f=a||{cookie:""}}
n=tc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Cb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.sa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=rb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{sa:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=rb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var uc=new tc("undefined"==typeof document?null:document);var vc=!Zb||9<=Number(kc);function wc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=wc.prototype;n.clone=function(){return new wc(this.x,this.y)};
n.equals=function(a){return a instanceof wc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function xc(a,b){this.width=a;this.height=b}
n=xc.prototype;n.clone=function(){return new xc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function yc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function zc(a,b){bb(b,function(c,d){c&&"object"==typeof c&&c.O&&(c=c.M());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Ac.hasOwnProperty(d)?a.setAttribute(Ac[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Ac={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Bc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!vc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Pb(g.name),'"');if(g.type){f.push(' type="',Pb(g.type),'"');var h={};lb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Cc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):zc(f,g));2<d.length&&Dc(e,f,d);return f}
function Dc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ha(f)||Ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ia(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?$a(f):f,d)}}}
function Cc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ec(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Fc(a){var b=Gc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Hc(){var a=[];Fc(function(b){a.push(b)});
return a}
var Gc={jb:"allow-forms",kb:"allow-modals",lb:"allow-orientation-lock",mb:"allow-pointer-lock",nb:"allow-popups",ob:"allow-popups-to-escape-sandbox",pb:"allow-presentation",qb:"allow-same-origin",rb:"allow-scripts",sb:"allow-top-navigation",tb:"allow-top-navigation-by-user-activation"},Ic=Sa(function(){return Hc()});
function Jc(){var a=Cc(document,"IFRAME"),b={};H(Ic(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function N(){this.g=this.g;this.B=this.B}
N.prototype.g=!1;N.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Kc(a,b){a.g?b():(a.B||(a.B=[]),a.B.push(b))}
N.prototype.o=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Lc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Mc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ha(d)?Mc.apply(null,d):Lc(d)}}
;var Nc={};function Oc(){}
function Pc(a,b){if(b!==Nc)throw Error("Bad secret");this.f=a}
v(Pc,Oc);Pc.prototype.toString=function(){return this.f};new Pc("about:blank",Nc);new Pc("about:invalid#zTSz",Nc);function Qc(a){Rc();var b=nb();a=b?b.createScriptURL(a):a;return new ob(a,pb)}
var Rc=Ea;function Sc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Tc=(new Date).getTime();function Uc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Vc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var A=e[1],E=e[2],V=e[3],hd=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Va=V^A&(E^V);var Ub=1518500249}else Va=A^E^V,Ub=1859775393;else 60>q?(Va=A&E|V&(A|E),Ub=2400959708):(Va=A^E^V,Ub=3395469782);Va=((p<<5|p>>>27)&4294967295)+Va+hd+Ub+t[q]&4294967295;hd=V;V=E;E=(A<<30|A>>>2)&4294967295;A=p;p=Va}e[0]=e[0]+p&4294967295;e[1]=e[1]+
A&4294967295;e[2]=e[2]+E&4294967295;e[3]=e[3]+V&4294967295;e[4]=e[4]+hd&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],A=0,E=p.length;A<E;++A)q.push(p.charCodeAt(A));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<t;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],t=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var A=24;0<=A;A-=8)p[t++]=e[q]>>A&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ea:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function Wc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),Xc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=Xc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Xc(a){var b=Vc();b.update(a);return b.Ea().toLowerCase()}
;function Yc(a){var b=Uc(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new tc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,c||(c=new tc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,Wc(Uc(d),
c,a||null)].join(" "):null}return null}
;function Zc(){this.g=[];this.f=-1}
Zc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Zc.prototype.get=function(a){return!!this.g[a]};
function $c(a){-1==a.f&&(a.f=Xa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function ad(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
ad.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function bd(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function cd(a){y.setTimeout(function(){throw a;},0)}
var dd;
function ed(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Cc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.qa;c.qa=null;e()}};
return function(e){d.next={qa:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function fd(){this.g=this.f=null}
var id=new ad(function(){return new gd},function(a){a.reset()});
fd.prototype.add=function(a,b){var c=id.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
fd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function gd(){this.next=this.scope=this.f=null}
gd.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
gd.prototype.reset=function(){this.next=this.scope=this.f=null};function jd(a,b){kd||ld();md||(kd(),md=!0);nd.add(a,b)}
var kd;function ld(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);kd=function(){a.then(od)}}else kd=function(){var b=od;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!J("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(dd||(dd=ed()),dd(b)):y.setImmediate(b)}}
var md=!1,nd=new fd;function od(){for(var a;a=nd.remove();){try{a.f.call(a.scope)}catch(b){cd(b)}bd(id,a)}md=!1}
;function pd(){this.g=-1}
;function qd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
F(qd,pd);qd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function rd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
qd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)rd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){rd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){rd(this,e);f=0;break}}this.h=f;this.j+=b}};
qd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;rd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var sd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function td(){}
td.prototype.next=function(){throw sd;};
td.prototype.H=function(){return this};
function ud(a){if(a instanceof td)return a;if("function"==typeof a.H)return a.H(!1);if(Ha(a)){var b=0,c=new td;c.next=function(){for(;;){if(b>=a.length)throw sd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function vd(a,b){if(Ha(a))try{H(a,b,void 0)}catch(c){if(c!==sd)throw c;}else{a=ud(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==sd)throw c;}}}
function wd(a){if(Ha(a))return $a(a);a=ud(a);var b=[];vd(a,function(c){b.push(c)});
return b}
;function xd(a,b){this.h={};this.f=[];this.J=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof xd)for(c=yd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function yd(a){zd(a);return a.f.concat()}
n=xd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Ad;zd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Ad(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.J=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.J++,this.f.length>2*this.g&&zd(this),!0):!1};
function zd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.J++);this.h[a]=b};
n.forEach=function(a,b){for(var c=yd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new xd(this)};
n.H=function(a){zd(this);var b=0,c=this.J,d=this,e=new td;e.next=function(){if(c!=d.J)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw sd;var f=d.f[b++];return a?f:d.h[f]};
return e};function Bd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Cd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Dd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Bd(a).match(/\S+/g)||[],c=0<=Ta(c,b);return c}
function Ed(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Dd(a,"inverted-hdpi")&&Cd(a,Ua(a.classList?a.classList:Bd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Fd(a){var b=[];Gd(new Hd,a,b);return b.join("")}
function Hd(){}
function Gd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Gd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Id(d,c),c.push(":"),Gd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Id(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Jd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Kd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Id(a,b){b.push('"',a.replace(Kd,function(c){var d=Jd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Jd[c]=d);return d}),'"')}
;function Ld(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Md(b,2,c)},function(c){Md(b,3,c)})}catch(c){Md(this,3,c)}}
function Nd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Nd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Od=new ad(function(){return new Nd},function(a){a.reset()});
function Pd(a,b,c){var d=Od.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Qd(a){if(a instanceof O)return a;var b=new O(Ea);Md(b,2,a);return b}
function Rd(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return Sd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
O.prototype.$goog_Thenable=!0;function Td(a,b){return Sd(a,null,b,void 0)}
O.prototype.cancel=function(a){if(0==this.f){var b=new Ud(a);jd(function(){Vd(this,b)},this)}};
function Vd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Vd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Wd(c),Xd(c,e,3,b)))}a.h=null}else Md(a,3,b)}
function Yd(a,b){a.g||2!=a.f&&3!=a.f||Zd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Sd(a,b,c,d){var e=Pd(null,null,null);e.f=new O(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ud?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Yd(a,e);return e.f}
O.prototype.u=function(a){this.f=0;Md(this,2,a)};
O.prototype.C=function(a){this.f=0;Md(this,3,a)};
function Md(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.u,f=a.C;if(d instanceof O){Yd(d,Pd(e||Ea,f||null,a));var g=!0}else if(Ld(d))d.then(e,f,a),g=!0;else{if(Ia(d))try{var h=d.then;if("function"===typeof h){$d(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,Zd(a),3!=b||c instanceof Ud||ae(a,c))}}
function $d(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Zd(a){a.l||(a.l=!0,jd(a.B,a))}
function Wd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
O.prototype.B=function(){for(var a;a=Wd(this);)Xd(this,a,this.f,this.m);this.l=!1};
function Xd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,be(b,c,d);else try{b.h?b.g.call(b.context):be(b,c,d)}catch(e){ce.call(null,e)}bd(Od,b)}
function be(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ae(a,b){a.j=!0;jd(function(){a.j&&ce.call(null,b)})}
var ce=cd;function Ud(a){G.call(this,a)}
F(Ud,G);Ud.prototype.name="cancel";function P(a){N.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
F(P,N);n=P.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function de(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Ya(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.R(b)}}
n.R=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ea):(c&&Za(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.N=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];ee(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.R(c)}}return 0!=e}return!1};
function ee(a,b,c){jd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(H(b,this.R,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){P.P.o.call(this);this.clear();this.i.length=0};function fe(a){this.f=a}
fe.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Fd(b))};
fe.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
fe.prototype.remove=function(a){this.f.remove(a)};function ge(a){this.f=a}
F(ge,fe);function he(a){this.data=a}
function ie(a){return void 0===a||a instanceof he?a:new he(a)}
ge.prototype.set=function(a,b){ge.P.set.call(this,a,ie(b))};
ge.prototype.g=function(a){a=ge.P.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ge.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function je(a){this.f=a}
F(je,ge);je.prototype.set=function(a,b,c){if(b=ie(b)){if(c){if(c<D()){je.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}je.P.set.call(this,a,b)};
je.prototype.g=function(a){var b=je.P.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())je.prototype.remove.call(this,a);else return b}};function ke(){}
;function le(){}
F(le,ke);le.prototype.clear=function(){var a=wd(this.H(!0)),b=this;H(a,function(c){b.remove(c)})};function me(a){this.f=a}
F(me,le);n=me.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.H=function(a){var b=0,c=this.f,d=new td;d.next=function(){if(b>=c.length)throw sd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function ne(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
F(ne,me);function oe(a,b){this.g=a;this.f=null;if(Zb&&!(9<=Number(kc))){pe||(pe=new xd);this.f=pe.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),pe.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
F(oe,le);var qe={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},pe=null;function re(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return qe[b]})}
n=oe.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(re(a),b);se(this)};
n.get=function(a){a=this.f.getAttribute(re(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(re(a));se(this)};
n.H=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new td;d.next=function(){if(b>=c.length)throw sd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);se(this)};
function se(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function te(a,b){this.g=a;this.f=b+"::"}
F(te,le);te.prototype.set=function(a,b){this.g.set(this.f+a,b)};
te.prototype.get=function(a){return this.g.get(this.f+a)};
te.prototype.remove=function(a){this.g.remove(this.f+a)};
te.prototype.H=function(a){var b=this.g.H(!0),c=this,d=new td;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function ue(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ve=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",ve,void 0);function Q(a){ue(ve,arguments)}
function R(a,b){return a in ve?ve[a]:b}
function we(){return R("PLAYER_CONFIG",{})}
;var xe=[];function ye(a){xe.forEach(function(b){return b(a)})}
function ze(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b),ye(b)}}:a}
function S(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Q("ERRORS",b))}
function Ae(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Q("ERRORS",b))}
;var Be=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Be,void 0);function Ce(a){ue(Be,arguments)}
;function De(a,b,c,d){uc.set(""+a,b,{sa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function T(a){a=Ee(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Fe(a,b){var c=Ee(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Ee(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;function Ge(a){a&&(a.dataset?a.dataset[He("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ie(a,b){return a?a.dataset?a.dataset[He(b)]:a.getAttribute("data-"+b):null}
var Je={};function He(a){return Je[a]||(Je[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function U(a,b){"function"===typeof a&&(a=ze(a));return window.setTimeout(a,b)}
function Ke(a){window.clearTimeout(a)}
;var Le=y.ytPubsubPubsubInstance||new P,Me=y.ytPubsubPubsubSubscribedKeys||{},Ne=y.ytPubsubPubsubTopicToKeys||{},Oe=y.ytPubsubPubsubIsSynchronous||{};function Pe(a,b){var c=Qe();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Me[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Oe[a]?f():U(f,0)}catch(g){S(g)}},void 0);
Me[d]=!0;Ne[a]||(Ne[a]=[]);Ne[a].push(d);return d}return 0}
function Re(a){var b=Qe();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete Me[c]}))}
function Se(a,b){var c=Qe();c&&c.publish.apply(c,arguments)}
function Te(a){var b=Qe();if(b)if(b.clear(a),a)Ue(a);else for(var c in Ne)Ue(c)}
function Qe(){return y.ytPubsubPubsubInstance}
function Ue(a){Ne[a]&&(a=Ne[a],H(a,function(b){Me[b]&&delete Me[b]}),a.length=0)}
P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.R;P.prototype.publish=P.prototype.N;P.prototype.clear=P.prototype.clear;z("ytPubsubPubsubInstance",Le,void 0);z("ytPubsubPubsubTopicToKeys",Ne,void 0);z("ytPubsubPubsubIsSynchronous",Oe,void 0);z("ytPubsubPubsubSubscribedKeys",Me,void 0);var Ve=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,We=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Xe(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ve,""),c=c.replace(We,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ye(a,b,c)}
function Ye(a,b,c){c=void 0===c?null:c;var d=Ze(a),e=document.getElementById(d),f=e&&Ie(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Pe(d,b),b=""+Ja(b),$e[b]=f),g||(e=af(a,d,function(){Ie(e,"loaded")||(Ge(e),Se(d),U(Oa(Te,d),0))},c)))}
function af(a,b,c,d){d=void 0===d?null:d;var e=Cc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ob(e,Qc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function bf(a){a=Ze(a);var b=document.getElementById(a);b&&(Te(a),b.parentNode.removeChild(b))}
function cf(a,b){if(a&&b){var c=""+Ja(b);(c=$e[c])&&Re(c)}}
function Ze(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Qb(a)}
var $e={};function df(){}
function ef(a,b){return ff(a,0,b)}
function gf(a,b){return ff(a,1,b)}
;function hf(){}
v(hf,df);function ff(a,b,c){isNaN(c)&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function jf(a){if(!isNaN(a)){var b=B("yt.scheduler.instance.cancelJob");b?b(a):Ke(a)}}
hf.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
hf.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Fa(hf);hf.getInstance();var kf=[],lf=!1;function mf(){if(!T("disable_ad_status_on_html5_clients")&&(!T("condition_ad_status_fetch_on_consent_cookie_html5_clients")||uc.get("CONSENT","").startsWith("YES+"))&&"1"!=cb(we(),"args","privembed")){var a=function(){lf=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
Xe("//static.doubleclick.net/instream/ad_status.js",a);kf.push(gf(function(){lf||"google_ad_status"in window||(cf("//static.doubleclick.net/instream/ad_status.js",a),lf=!0,Q("DCLKSTAT",3))},5E3))}}
function nf(){return parseInt(R("DCLKSTAT",0),10)}
;var of=0;z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++of},void 0);var pf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function qf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in pf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function rf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
qf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
qf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
qf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",eb,void 0);var sf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",sf,void 0);
function tf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&hb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var uf=Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function vf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=tf(a,b,c,d);if(e)return e;e=++sf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new qf(h);if(!Ec(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new qf(h);
h.currentTarget=a;return c.call(a,h)};
g=ze(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),uf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);eb[e]=[a,b,c,g,d];return e}
function wf(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in eb){var c=eb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?uf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[b]}}))}
;var xf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function yf(a){this.u=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.F=vf(window,"mousemove",C(this.G,this));a=C(this.C,this);"function"===typeof a&&(a=ze(a));this.L=window.setInterval(a,25)}
F(yf,N);yf.prototype.G=function(a){void 0===a.f&&rf(a);var b=a.f;void 0===a.g&&rf(a);this.f=new wc(b,a.g)};
yf.prototype.C=function(){if(this.f){var a=xf();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.u();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
yf.prototype.o=function(){window.clearInterval(this.L);wf(this.F)};var zf={};
function Af(a){var b=void 0===a?{}:a;a=void 0===b.Ka?!0:b.Ka;b=void 0===b.Wa?!1:b.Wa;if(null==B("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Bf();vf(document,"keydown",Bf);vf(document,"keyup",Bf);vf(document,"mousedown",Bf);vf(document,"mouseup",Bf);a&&(b?vf(window,"touchmove",function(){Cf("touchmove",200)},{passive:!0}):(vf(window,"resize",function(){Cf("resize",200)}),vf(window,"scroll",function(){Cf("scroll",200)})));
new yf(function(){Cf("mouse",100)});
vf(document,"touchstart",Bf,{passive:!0});vf(document,"touchend",Bf,{passive:!0})}}
function Cf(a,b){zf[a]||(zf[a]=!0,gf(function(){Bf();zf[a]=!1},b))}
function Bf(){null==B("_lact",window)&&Af();var a=D();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Df(){var a=B("_lact",window),b;null==a?b=-1:b=Math.max(D()-a,0);return b}
;var Ef=window,W=Ef.ytcsi&&Ef.ytcsi.now?Ef.ytcsi.now:Ef.performance&&Ef.performance.timing&&Ef.performance.now&&Ef.performance.timing.navigationStart?function(){return Ef.performance.timing.navigationStart+Ef.performance.now()}:function(){return(new Date).getTime()};var Ff=Fe("initial_gel_batch_timeout",1E3),Gf=Math.pow(2,16)-1,Hf=null,If=0,Jf=void 0,Kf=0,Lf=0,Mf=0,Nf=!0,Of=y.ytLoggingTransportLogPayloadsQueue_||{};z("ytLoggingTransportLogPayloadsQueue_",Of,void 0);var Pf=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Pf,void 0);var Qf=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Qf,void 0);
function Rf(){Ke(Kf);Ke(Lf);Lf=0;Jf&&Jf.isReady()?(Sf(Pf),"log_event"in Of&&Sf(Object.entries(Of.log_event)),Pf.clear(),delete Of.log_event):Tf()}
function Tf(){T("web_gel_timeout_cap")&&!Lf&&(Lf=U(Rf,6E4));Ke(Kf);var a=R("LOGGING_BATCH_TIMEOUT",Fe("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Nf&&(a=Ff);Kf=U(Rf,a)}
function Sf(a){var b=Jf,c=Math.round(W());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=jb({context:Uf(b.f||Vf())});e.events=f;(f=Qf[d])&&Wf(e,d,f);delete Qf[d];Xf(e,c);Yf(b,"log_event",e,{retry:!0,onSuccess:function(){If=Math.round(W()-c)}});
Nf=!1}}
function Xf(a,b){a.requestTimeMs=String(b);T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&T("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Gf/2));d++;d>Gf&&(d=1);Q("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Hf&&If&&T("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Hf,roundtripMs:String(If)});Hf=c;If=0}}
function Wf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Zf=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Zf,void 0);
function $f(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||W());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Df())};T("log_sequence_info_on_gel_web")&&d.T&&(a=e.context,b=d.T,Zf[b]=b in Zf?Zf[b]+1:0,a.sequence={index:Zf[b],groupKey:b},d.yb&&delete Zf[d.T]);d=d.ga;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Qf[d.token]=a,a=d.token);d=Pf.get(a)||[];Pf.set(a,d);d.push(e);c&&(Jf=new c);c=Fe("web_logging_max_batch")||100;e=
W();d.length>=c?Rf():10<=e-Mf&&(Tf(),Mf=e)}
;function ag(){var a=bg;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function cg(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;function dg(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?ab(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};S(h)}}}return b}
function eg(a){var b=[];bb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function fg(a){"?"==a.charAt(0)&&(a=a.substr(1));return dg(a)}
function gg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=fg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Wb(a,e)+d}
;function hg(a){var b=ig;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(jg(b),kg(b));b.ca_type="image";a&&(b.bid=a);return b}
function jg(a){var b={};b.dt=Tc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?M:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!M.navigator&&"unknown"!==typeof M.navigator.javaEnabled&&!!M.navigator.javaEnabled&&M.navigator.javaEnabled();M.screen&&(b.u_h=M.screen.height,b.u_w=M.screen.width,b.u_ah=M.screen.availHeight,b.u_aw=M.screen.availWidth,b.u_cd=M.screen.colorDepth);
M.navigator&&M.navigator.plugins&&(b.u_nplug=M.navigator.plugins.length);M.navigator&&M.navigator.mimeTypes&&(b.u_nmime=M.navigator.mimeTypes.length);return b}
function kg(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new xc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new xc(-12245933,-12245933)}k=m;m={};l=new Zc;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=Jc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=$c(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!M.WebGLRenderingContext,m}
var ig=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return eg(hg(a))},void 0);D();var lg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function mg(){if(!lg)return null;var a=lg();return"open"in a?a:null}
function ng(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var og={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},pg="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
qg=!1;
function rg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Rb)[1]||null,e=K(a);d&&e?(d=c,c=a.match(Rb),d=d.match(Rb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?K(c)==e&&(Number(c.match(Rb)[4]||null)||null)==(Number(a.match(Rb)[4]||null)||null):!0;d=T("web_ajax_ignore_global_headers_if_set");for(var f in og)e=R(og[f]),!e||!c&&K(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!K(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!K(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!K(a))b["X-YouTube-Ad-Signals"]=eg(hg(void 0));return b}
function sg(a){var b=window.location.search,c=K(a),d=Sb(a.match(Rb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=fg(b),f={};H(pg,function(g){e[g]&&(f[g]=e[g])});
return gg(a,f||{},!1)}
function tg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ug(a,b);var d=vg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Ke(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||y;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ma&&b.ma.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.wa&&0<b.timeout&&(f=U(function(){e||(e=!0,Ke(f),b.wa.call(b.context||y))},b.timeout))}else wg(a,b)}
function wg(a,b){var c=b.format||"JSON";a=ug(a,b);var d=vg(a,b),e=!1,f=xg(a,function(k){if(!e){e=!0;h&&Ke(h);var l=ng(k),m=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)m=yg(a,c,k,b.xb);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.ma&&b.ma.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.S&&0<b.timeout){var g=b.S;var h=U(function(){e||(e=!0,f.abort(),Ke(h),g.call(b.context||y,f))},b.timeout)}return f}
function ug(a,b){b.Ab&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.ib;d&&(d[c]&&delete d[c],a=gg(a,d||{},!0));return a}
function vg(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.D,g=R("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.zb||K(a)&&!b.withCredentials&&K(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.D&&b.D[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=fg(e),lb(e,f),e=b.xa&&"JSON"==b.xa?JSON.stringify(e):Vb(e));f=e||f&&!fb(f);!qg&&f&&"POST"!=b.method&&(qg=!0,S(Error("AJAX request with postData should use POST")));
return e}
function yg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ae(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?zg(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ag(g)})}d&&Bg(e);
return e}
function Bg(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Mb(a[b],null);a[c]=d}else Bg(a[b])}}
function zg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ag(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function xg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ze(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=mg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;T("debug_forward_web_query_parameters")&&(a=sg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=rg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Cg(){for(var a={},b=u(Object.entries(fg(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Dg(){return"INNERTUBE_API_KEY"in ve&&"INNERTUBE_API_VERSION"in ve}
function Vf(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),La:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ma:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Oa:R("INNERTUBE_CONTEXT_HL",void 0),Na:R("INNERTUBE_CONTEXT_GL",void 0),Pa:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ra:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Qa:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function Uf(a){a={client:{hl:a.Oa,gl:a.Na,clientName:a.Ma,clientVersion:a.innertubeContextClientVersion,configInfo:a.La}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=R("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=R("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=R("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(a.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,Cg());return a}
function Eg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.vb||R("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().ub:b=Yc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
;function Fg(a){a=Object.assign({},a);delete a.Authorization;var b=Yc();if(b){var c=new qd;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ha(b);void 0===c&&(c=0);if(!oc){oc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));nc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===oc[k]&&(oc[k]=h)}}}c=nc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function Gg(a){a=Fg(a);var b=new qd;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Hg(){var a=new ne;(a=a.isAvailable()?new te(a,"yt.innertube"):null)||(a=new oe("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new je(a):null;this.g=document.domain||window.location.hostname}
Hg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Fd(b))}catch(f){return}else e=escape(b);De(a,e,c,this.g)};
Hg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=uc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Hg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;uc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ig;function Jg(){Ig||(Ig=new Hg);return Ig}
function Kg(a,b,c,d){if(d)return null;d=Jg().get("nextId",!0)||1;var e=Jg().get("requests",!0)||{};e[d]={method:a,request:b,authState:Fg(c),requestTime:Math.round(W())};Jg().set("nextId",d+1,86400,!0);Jg().set("requests",e,86400,!0);return d}
function Lg(a){var b=Jg().get("requests",!0)||{};delete b[a];Jg().set("requests",b,86400,!0)}
function Mg(a){var b=Jg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Fg(Eg(!1));hb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Yf(a,d.method,e,{}));delete b[c]}}Jg().set("requests",b,86400,!0)}}
;function Ng(){}
;var Og=lc||mc;function Pg(a){var b=Hb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Qg(a){if(!a)throw Error();throw a;}
function Rg(a){return a}
function X(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
X.all=function(a){return new X(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={K:0};f.K<a.length;f={K:f.K},++f.K)Sg(X.resolve(a[f.K]).then(function(g){return function(h){d[g.K]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
X.resolve=function(a){return new X(function(b,c){a instanceof X?a.then(b,c):b(a)})};
X.reject=function(a){return new X(function(b,c){c(a)})};
X.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Rg,e=null!==b&&void 0!==b?b:Qg;return new X(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Tg(c,c,d,f,g)}),c.onRejected.push(function(){Ug(c,c,e,f,g)})):"FULFILLED"===c.state.status?Tg(c,c,d,f,g):"REJECTED"===c.state.status&&Ug(c,c,e,f,g)})};
function Sg(a,b){a.then(void 0,b)}
function Tg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof X?Vg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ug(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof X?Vg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Vg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof X?Vg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Wg(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Wg.prototype)}
v(Wg,Error);function Xg(){var a=Error.call(this,"IndexedDB is not supported.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Xg.prototype)}
v(Xg,Error);function Yg(){var a=Error.call(this,"The current transaction exceeded its quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Yg.prototype)}
v(Yg,Error);function Zg(){var a=Error.call(this,"The current transaction may have failed because of exceeding quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Zg.prototype)}
v(Zg,Error);function $g(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
function ah(a,b){return new X(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function bh(a){return new O(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
function ch(a){return new X(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function dh(a){this.f=a}
n=dh.prototype;n.add=function(a,b,c){return eh(this,[a],"readwrite",function(d){return fh(d,a).add(b,c)})};
n.clear=function(a){return eh(this,[a],"readwrite",function(b){return fh(b,a).clear()})};
n.close=function(){this.f.close()};
n.count=function(a,b){return eh(this,[a],"readonly",function(c){return fh(c,a).count(b)})};
function gh(a,b,c){a=a.f.createObjectStore(b,c);return new hh(a)}
n["delete"]=function(a,b){return eh(this,[a],"readwrite",function(c){return fh(c,a)["delete"](b)})};
n.get=function(a,b){return eh(this,[a],"readwrite",function(c){return fh(c,a).get(b)})};
function ih(a,b){return eh(a,["databases"],"readwrite",function(c){return jh(fh(c,"databases"),b,void 0)})}
function eh(a,b,c,d){c=void 0===c?"readonly":c;return new O(function(e,f){var g=a.f.transaction(b,c),h=new kh(g,b);Sg(d(h).then(function(k){Td(lh(h).then(function(){e(k)}),function(l){f(l)})}),function(k){f(k)})})}
function hh(a){this.f=a}
n=hh.prototype;n.add=function(a,b){var c=b?this.f.add(a,b):this.f.add(a);return ch(c)};
n.clear=function(){return ch(this.f.clear()).then(function(){})};
n.count=function(a){a=a?this.f.count(a):this.f.count();return ch(a)};
n["delete"]=function(a){return ch(this.f["delete"](a))};
n.get=function(a){return ch(this.f.get(a))};
n.index=function(a){return new mh(this.f.index(a))};
n.getName=function(){return this.f.name};
function jh(a,b,c){a=c?a.f.put(b,c):a.f.put(b);return ch(a)}
function kh(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new O(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?Ae(new Yg):"UnknownError"===e.name&&Ae(new Zg),d(e)):d(new Wg)})})}
kh.prototype.abort=function(){this.f.abort();this.aborted=!0};
function lh(a){var b=a.f;b.commit&&!a.aborted&&b.commit();return a.done}
function fh(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new hh(c),a.g.set(c,d));return d}
function mh(a){this.f=a}
mh.prototype.count=function(a){a=a?this.f.count(a):this.f.count();return ch(a)};
mh.prototype.get=function(a){return ch(this.f.get(a))};
function nh(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return oh(a).then(function(d){return ah(d,c)})}
function ph(a,b){this.request=a;this.f=b}
function oh(a){return ch(a).then(function(b){return null===b?null:new ph(a,b)})}
ph.prototype["delete"]=function(){return ch(this.f["delete"]()).then(function(){})};
ph.prototype.getValue=function(){return this.f.value};
ph.prototype.update=function(a){return ch(this.f.update(a))};function qh(a,b,c){function d(){m||(m=new dh(f.result));return m}
var e=kh;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.blocked,h=c.blocking,k=c.f,l=c.upgrade,m;l&&f.addEventListener("upgradeneeded",function(p){if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var t=d(),q=new e(f.transaction);l(t,p.oldVersion,p.newVersion,q)});
g&&f.addEventListener("blocked",function(){g()});
return bh(f).then(function(p){h&&p.addEventListener("versionchange",function(){h(d())});
k&&p.addEventListener("close",function(){k()});
return d()})}
function rh(a,b,c){c=void 0===c?{}:c;return qh(a,b,c)}
;var sh,th,uh=["getAll","getAllKeys","getKey","openKeyCursor"],vh=["getAll","getAllKeys","getKey","openKeyCursor"];
function wh(){return L(this,function b(){var c;return x(b,function(d){switch(d.f){case 1:var e;if(e=Og)e=/WebKit\/([0-9]+)/.exec(Hb),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Hb),e=!(e&&602<=parseInt(e[1],10)));if(e&&!T("ytidb_allow_on_ios_safari_v8_and_v9"))return d["return"](!1);try{if(!self.indexedDB)return d["return"](!1)}catch(f){return d["return"](!1)}d.l=2;d.j=3;return w(d,rh("yt-idb-test-do-not-use"),5);case 5:c=d.g;case 3:d.u=[d.h];d.l=0;d.j=0;if(c)try{c.close()}catch(f){}e=
d.u.splice(0)[0];(e=d.h=d.h||e)?e.ra?d.f=d.l||d.j:void 0!=e.I&&d.j<e.I?(d.f=e.I,d.h=null):d.f=d.j:d.f=4;break;case 2:return d.l=0,d.h=null,d["return"](!1);case 4:return d["return"](!0)}})})}
function xh(){return void 0!==sh?Qd(sh):new O(function(a){wh().then(function(b){sh=b;a(b)})})}
function yh(){return void 0!==th?Qd(th):xh().then(function(a){if(!a)return!1;var b=u(uh);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(vh);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return th=a})}
;var zh;function Ah(){function a(b){b.close();zh=void 0}
zh||(zh=Td(rh("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&gh(b,"databases",{keyPath:"actualName"})}}),function(b){return $g(b)?rh("YtIdbMeta",void 0,{blocking:a}):Rd(b)}));
return zh}
function Bh(a){return Ah().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return ih(b,a)})})}
function Ch(a){return Ah().then(function(b){return b["delete"]("databases",a)})}
;function Dh(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Rd(c)}return Td(Bh(b).then(function(){return a(b)}),function(c){return Td(Ch(b.actualName),function(){}).then(function(){return Rd(c)})})}
function Eh(){return xh().then(function(a){if(!a)throw new Xg;})}
function Fh(a,b){b=void 0===b?{}:b;return Eh().then(function(){return Dh(function(c){return rh(c.actualName,a,b)})})}
;function Gh(){X.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(Gh,X);Gh.reject=X.reject;Gh.resolve=X.resolve;Gh.all=X.all;var Hh;function Ih(){return L(this,function b(){return x(b,function(c){if(!Hh)try{Hh=Fh(1,{upgrade:function(d,e){1>e&&(gh(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),gh(d,"sapisid"))}})}catch(d){if(!$g(d))return S(d),c["return"](Promise.reject(d));
Hh=Fh()}return c["return"](Hh)})})}
function Jh(a){return L(this,function c(){var d,e,f;return x(c,function(g){if(1==g.f)return w(g,Kh(),2);if(3!=g.f)return d=g.g,w(g,Ih(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function Lh(){return L(this,function b(){var c,d,e,f,g,h;return x(b,function(k){switch(k.f){case 1:return w(k,Kh(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,W()],f=IDBKeyRange.bound(d,e),w(k,Ih(),3);case 3:return g=k.g,h=void 0,w(k,eh(g,["LogsRequestsStore"],"readwrite",function(l){return nh(fh(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.getValue()&&(h=m.getValue(),h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function Mh(a){return L(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Ih(),2);d=e.g;return e["return"](eh(d,["LogsRequestsStore"],"readwrite",function(f){var g=fh(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",jh(g,h).then(function(){return h})})}))})})}
function Nh(a){return L(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Ih(),2);d=e.g;return e["return"](eh(d,["LogsRequestsStore"],"readwrite",function(f){var g=fh(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,jh(g,h).then(function(){return h})):Gh.resolve(void 0)})}))})})}
function Oh(a){return L(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Ih(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Kh(){return L(this,function b(){var c;return x(b,function(d){if(1==d.f){Ng.f||(Ng.f=new Ng);var e={};var f=Yc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=R("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in ve||(e["X-Origin"]=window.location.origin),T("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in ve&&(e["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));e=Qd(e);return w(d,e,2)}c=d.g;return d["return"](Gg(c))})})}
;var Ph=Fe("network_polling_interval",3E4);function Qh(){this.i=0;this.f=window.navigator.onLine;Rh(this);Sh(this)}
function Th(){Qh.f||(Qh.f=new Qh);return Qh.f}
function Uh(a){var b=Vh,c=Wh;(new O(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)});
Xh(a)}
function Sh(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Rh(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function Xh(a){a.i||(Yh(a),window.navigator.onLine&&a.g&&a.g())}
function Yh(a){a.i=ef(function(){window.navigator.onLine?(!1===a.f&&S(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&S(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());Yh(a)},Ph)}
;var Zh=Fe("networkless_throttle_timeout")||100,$h=Fe("networkless_retry_attempts")||1,ai=0;function bi(a,b){b=void 0===b?{}:b;ci().then(function(c){if(c&&!T("networkless_bypass_write")){var d={url:a,options:b,timestamp:W(),status:"NEW",sendCount:0};Jh(d).then(function(e){d.id=e;e=Th();e.f&&!T("networkless_always_offline")?di(d):Uh(e)})["catch"](function(e){di(d);
S(e)})}else wg(a,b)})}
function Vh(){var a=this;ai||(ai=gf(function(){return L(a,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Lh(),2);if(3!=e.f)return d=e.g,d?w(e,di(d),3):(Wh(),e["return"]());ai=0;Vh();e.f=0})})},Zh))}
function Wh(){jf(ai);ai=0}
function di(a){return L(this,function c(){var d;return x(c,function(e){switch(e.f){case 1:if(!a.id){e.I(2);break}return w(e,Mh(a.id),3);case 3:(d=e.g)?a=d:Ae(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=W()-f)){e.I(4);break}Ae(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.I(5);break}return w(e,Oh(a.id),5);case 5:return e["return"]();case 4:(a=ei(a))&&wg(a.url,a.options),e.f=0}})})}
function ei(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return L(b,function h(){return x(h,function(k){if(1==k.f)return a&&a.id?a.sendCount<$h?w(k,Nh(a.id),6):w(k,Oh(a.id),2):k.I(2);2!=k.f&&Uh(Th());c(e,f);k.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return L(b,function h(){return x(h,function(k){if(1==k.f)return a&&a.id?w(k,Oh(a.id),2):k.I(2);d(e,f);k.f=0})})};
return a}
function ci(){return L(this,function b(){return x(b,function(c){return T("networkless_logging")?(2===Fe("networkless_ytidb_version")&&yh().then(function(d){return d}),c["return"](xh())):c["return"](!1)})})}
;function fi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(fi,Error);function gi(a){var b=this;this.f=null;a?this.f=a:Dg()&&(this.f=Vf());ef(function(){Mg(b)},5E3)}
gi.prototype.isReady=function(){!this.f&&Dg()&&(this.f=Vf());return!!this.f};
function Yf(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ae(new fi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new fi("innertube xhrclient not ready",b,c,d);S(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",D:c,xa:"JSON",S:function(){d.S()},
wa:d.S,onSuccess:function(p,t){if(d.onSuccess)d.onSuccess(t)},
va:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,t){if(d.onError)d.onError(t)},
Bb:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.Pa)&&(g=e);var h=a.f.Ra||!1,k=Eg(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.Qa&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=gg(""+g+e,l||{},!0);ci().then(function(p){if(d.retry&&T("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(T("networkless_gel")&&!p||!T("networkless_gel"))var t=Kg(b,
c,k,h);if(t){var q=f.onSuccess,A=f.va;f.onSuccess=function(E,V){Lg(t);q(E,V)};
c.va=function(E,V){Lg(t);A(E,V)}}}try{T("use_fetch_for_op_xhr")?tg(m,f):T("networkless_gel")&&d.retry?(f.method="POST",bi(m,f)):(f.method="POST",f.D||(f.D={}),wg(m,f))}catch(E){if("InvalidAccessError"==E.name)t&&(Lg(t),t=0),Ae(Error("An extension is blocking network request."));
else throw E;}t&&ef(function(){Mg(a)},5E3)})}
;function hi(a,b,c){c=void 0===c?{}:c;var d=gi;R("ytLoggingEventsDefaultDisabled",!1)&&gi==gi&&(d=null);$f(a,b,d,c)}
;var ii=[{ta:function(a){return"Cannot read property '"+a.key+"'"},
na:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ta:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];function ji(){this.f=[];this.g=[]}
var ki;var li=new P;var mi=new Set,ni=0,oi=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function pi(a){qi(a,"WARNING")}
function qi(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(window&&window.yterr||g)&&!(5<=ni)&&0!==a.sampleWeight)){var h=pc(a);g=h.message||"Unknown Error";d=h.name||"UnknownError";e=h.lineNumber||"Not available";f=h.fileName||"Not available";h=h.stack||a.f||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var t=c,q=0;q<m.length&&!(m[q]&&(k+=ri(q,m[q],p,t),500<k));q++);else if("object"===typeof m)for(t in t=void 0,q=c,m){if(m[t]&&
(k+=ri(t,m[t],p,q),500<k))break}else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,t=String(JSON.stringify(m[l])).substr(0,500),c[k]=t,p+=k.length+t.length,500<p))break}else c.params=String(JSON.stringify(m)).substr(0,500);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=
navigator.vendor);c={message:g,name:d,lineNumber:e,fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(ii);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.na[c.name])for(e=u(g.na[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["error."+e[h]]=d[h+1];c.message=g.ta(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);
if(!(mi.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){li.N("handleError",c);if(T("kevlar_gel_error_routing")){a=b;a:{g=u(oi);for(d=g.next();!d.done;d=g.next())if(Pg(d.value.toLowerCase())){g=!0;break a}g=!1}if(!g){g={stackTrace:c.stack};c.fileName&&(g.filename=c.fileName);d=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(g.lineNumber=Number(d[0]),
g.columnNumber=Number(d[1])):g.lineNumber=Number(d[0]));d=c.message;e=c.name;ki||(ki=new ji);f=ki;a:{h=u(f.g);for(l=h.next();!l.done;l=h.next())if(l=l.value,c.message&&c.message.match(l.f)){f=l.weight;break a}f=u(f.f);for(h=f.next();!h.done;h=f.next())if(h=h.value,h.Da(c)){f=h.weight;break a}f=1}d={level:"ERROR_LEVEL_UNKNOWN",message:d,errorClassName:e,sampleWeight:f};"ERROR"===a?d.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(d.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:g};g={pageUrl:window.location.href,
kvPairs:[]};if(e=c.params)for(f=u(Object.keys(e)),h=f.next();!h.done;h=f.next())h=h.value,g.kvPairs.push({key:"client."+h,value:String(e[h])});e=R("SERVER_NAME",void 0);f=R("SERVER_VERSION",void 0);e&&f&&(g.kvPairs.push({key:"server.name",value:e}),g.kvPairs.push({key:"server.version",value:f}));hi("clientError",{errorMetadata:g,stackTrace:a,logMessage:d});Rf()}}a=c.params||{};b={ib:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},D:{url:R("PAGE_NAME",
window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.D){c.stack&&(b.D.stack=c.stack);g=u(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,b.D["client."+d]=a[d];if(a=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=u(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.D[d]=a[d];a=R("SERVER_NAME",void 0);g=R("SERVER_VERSION",void 0);a&&g&&(b.D["server.name"]=a,b.D["server.version"]=g)}wg(R("ECATCHER_REPORT_HOST","")+"/error_204",
b);mi.add(c.message);ni++}}}
function ri(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function si(){this.g=!1;this.f=null}
si.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Xe(b,function(){g.g=!1;window.botguard?ti(g,c,d,f):(bf(b),pi(new fi("Unable to load Botguard","from "+b)))},e)):a&&(T("botguard_eval_with_script_tag")?(e=Cc(document,"SCRIPT"),e.textContent=a,e.nonce=Aa(),document.head.appendChild(e),document.head.removeChild(e)):eval(a),window.botguard?ti(this,c,d,f):pi(Error("Unable to load Botguard from JS")))};
function ti(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ea)}catch(e){pi(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){pi(e)}c&&c(b)}}
si.prototype.dispose=function(){this.f=null};var ui=new si;function vi(){return!!ui.f}
function wi(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return ui.f?ui.f.invoke(void 0,void 0,a):null}
;var xi=D().toString();
function yi(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(xi)for(a=1,b=0;b<xi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^xi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var zi=y.ytLoggingDocDocumentNonce_||yi();z("ytLoggingDocDocumentNonce_",zi,void 0);var Ai=1;function Bi(a){this.f=a}
Bi.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
Bi.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Bi.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function Ci(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Di(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ei(a){return R(Di(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Ei,void 0);function Fi(){var a=Ei(0),b;a?b=new Bi({veType:a,youtubeData:void 0}):b=null;return b}
function Gi(){var a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function Hi(a){a=void 0===a?0:a;var b=R(Ci(a));if(!b&&!R("USE_CSN_FALLBACK",!0))return null;b||0!=a||(T("kevlar_client_side_screens")||T("c3_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",Hi,void 0);function Ii(a,b,c){var d=Gi();(c=Hi(c))&&delete d[c];b&&(d[a]=b)}
function Ji(a){return Gi()[a]}
z("yt_logging_screen.getCttAuthInfo",Ji,void 0);function Ki(a,b,c,d){c=void 0===c?0:c;if(a!==R(Ci(c))||b!==R(Di(c)))if(Ii(a,d,c),Q(Ci(c),a),Q(Di(c),b),0==c||T("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&$f("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:zi,clientScreenNonce:a},gi)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Ki,void 0);function Li(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=K(window.location.href);g&&f.push(g);g=K(d);if(0<=Ta(f,g)||!g&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(f=document.createElement("a"),Nb(f,d),d=f.href),d){g=d.match(Rb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Hi()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Qb(d).toString(36),e=e?Vb(e):"",De(b,e,k||5))}else k=b,e="ST-"+Qb(d).toString(36),k=k?Vb(k):"",De(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=Wb(a,l)+m;a=a instanceof I?a:Fb(a);c.href=Bb(a)}return!0}
;function Mi(a,b){this.version=a;this.args=b}
;function Ni(a,b){this.topic=a;this.f=b}
Ni.prototype.toString=function(){return this.topic};var Oi=B("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.R;P.prototype.publish=P.prototype.N;P.prototype.clear=P.prototype.clear;z("ytPubsub2Pubsub2Instance",Oi,void 0);var Pi=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Pi,void 0);var Qi=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Qi,void 0);var Ri=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Ri,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Si(a,b){var c=Ti();c&&c.publish.call(c,a.toString(),a,b)}
function Ui(a){var b=Vi,c=Ti();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Pi[d])try{if(f&&b instanceof Ni&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.J){var l=new h;h.J=l.version}var m=h.J}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
$a(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){S(p)}},Ri[b.toString()]?B("yt.scheduler.instance")?gf(g):U(g,0):g())});
Pi[d]=!0;Qi[b.toString()]||(Qi[b.toString()]=[]);Qi[b.toString()].push(d);return d}
function Wi(){var a=Xi,b=Ui(function(c){a.apply(void 0,arguments);Yi(b)});
return b}
function Yi(a){var b=Ti();b&&("number"===typeof a&&(a=[a]),H(a,function(c){b.unsubscribeByKey(c);delete Pi[c]}))}
function Ti(){return B("ytPubsub2Pubsub2Instance")}
;function Zi(a){Mi.call(this,1,arguments);this.csn=a}
v(Zi,Mi);var Vi=new Ni("screen-created",Zi),$i=[],aj=0;function bj(a,b,c){var d=T("use_default_events_client")?void 0:gi;b={csn:a,parentVe:b.getAsJson(),childVes:Wa(c,function(f){return f.getAsJson()})};
c=u(c);for(var e=c.next();!e.done;e=c.next())e=e.value.getAsJson(),(fb(e)||!e.trackingParams&&!e.veType)&&pi(Error("Child VE logged with no data"));c={ga:Ji(a),T:a};"UNDEFINED_CSN"==a?cj("visualElementAttached",b,c):d?$f("visualElementAttached",b,d,c):hi("visualElementAttached",b,c)}
function cj(a,b,c){$i.push({payloadName:a,payload:b,options:c});aj||(aj=Wi())}
function Xi(a){if($i){for(var b=u($i),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,$f(c.payloadName,c.payload,null,c.options));$i.length=0}aj=0}
;function dj(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ib(b);this.assets=a.assets||{};this.attrs=a.attrs||ib(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
dj.prototype.clone=function(){var a=new dj,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ga(c)?a[b]=ib(c):a[b]=c}return a};function ej(){N.call(this);this.f=[]}
v(ej,N);ej.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.Da)}N.prototype.o.call(this)};var fj=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function gj(a){a=a||"";if(window.spf){var b=a.match(fj);spf.style.load(a,b?b[1]:"",void 0)}else hj(a)}
function hj(a){var b=ij(a),c=document.getElementById(b),d=c&&Ie(c,"loaded");d||c&&!d||(c=jj(a,b,function(){Ie(c,"loaded")||(Ge(c),Se(b),U(Oa(Te,b),0))}))}
function jj(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qc(a);d.rel="stylesheet";d.href=qb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ij(a){var b=Cc(document,"A");Nb(b,new I(a,Ab));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Qb(a)}
;function kj(a,b,c,d){N.call(this);var e=this;this.m=this.aa=a;this.X=b;this.u=!1;this.api={};this.Y=this.F=null;this.G=new P;Kc(this,Oa(Lc,this.G));this.j={};this.U=this.Z=this.h=this.fa=this.f=null;this.L=!1;this.l=this.C=null;this.ba={};this.Aa=["onReady"];this.ea=null;this.oa=NaN;this.V={};this.i=d;lj(this);this.ca("WATCH_LATER_VIDEO_ADDED",this.Ta.bind(this));this.ca("WATCH_LATER_VIDEO_REMOVED",this.Ua.bind(this));this.ca("onAdAnnounce",this.Ca.bind(this));this.Ba=new ej(this);Kc(this,Oa(Lc,this.Ba));
this.W=0;c?this.W=U(function(){e.loadNewVideoConfig(c)},0):d&&(mj(this),nj(this))}
v(kj,N);n=kj.prototype;n.getId=function(){return this.X};
n.loadNewVideoConfig=function(a){if(!this.g){this.W&&(Ke(this.W),this.W=0);a instanceof dj||(a=new dj(a));this.fa=a;this.f=a.clone();mj(this);this.Z||(this.Z=oj(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Sc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Sc(Number(a)||a);nj(this);this.u&&pj(this)}};
function mj(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.X,a.f.attrs.id=a.X);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
n.Ha=function(){return this.fa};
function pj(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function qj(a){var b=!0,c=rj(a);c&&a.f&&(a=sj(a),b=Ie(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function nj(a){if(!a.g&&!a.L){var b=qj(a);if(b&&"html5"==(rj(a)?"html5":null))a.U="html5",a.u||tj(a);else if(uj(a),a.U="html5",b&&a.l)a.aa.appendChild(a.l),tj(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.C=function(){c=!0;var d=vj(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.aa,e,a.i);tj(a)};
a.L=!0;b?a.C():(Xe(sj(a),a.C),(b=a.i?a.i.cssUrl:a.f.assets.css)&&gj(b),wj(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function rj(a){var b=yc(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function tj(a){if(!a.g){var b=rj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.L=!1,!vj(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||xj(a)):a.oa=U(function(){tj(a)},50)}}
function xj(a){lj(a);a.u=!0;var b=rj(a);b.addEventListener&&(a.F=yj(a,b,"addEventListener"));b.removeEventListener&&(a.Y=yj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=yj(a,b,e))}for(var f in a.j)a.F(f,a.j[f]);pj(a);a.Z&&a.Z(a.api);a.G.N("onReady",a.api)}
function yj(a,b,c){var d=b[c];return function(){try{return a.ea=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ea=e,Ae(e))}}}
function lj(a){a.u=!1;if(a.Y)for(var b in a.j)a.Y(b,a.j[b]);for(var c in a.V)Ke(parseInt(c,10));a.V={};a.F=null;a.Y=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ca.bind(a);a.api.removeEventListener=a.Ya.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ia.bind(a);a.api.getPlayerType=a.Ja.bind(a);a.api.getCurrentVideoConfig=a.Ha.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Sa.bind(a)}
n.Sa=function(){return this.u};
n.ca=function(a,b){var c=this,d=oj(this,b);if(d){if(!(0<=Ta(this.Aa,a)||this.j[a])){var e=zj(this,a);this.F&&this.F(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.u&&U(function(){d(c.api)},0)}};
n.Ya=function(a,b){if(!this.g){var c=oj(this,b);c&&de(this.G,a,c)}};
function oj(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var d=B(b);d&&d.apply(y,arguments)};
a.ba[b]=c}return c?c:null}
function zj(a,b){var c="ytPlayer"+b+a.X;a.j[b]=c;y[c]=function(d){var e=U(function(){if(!a.g){a.G.N(b,d);var f=a.V,g=String(e);g in f&&delete f[g]}},0);
gb(a.V,String(e))};
return c}
n.Ca=function(a){Se("a11y-announce",a)};
n.Ta=function(a){Se("WATCH_LATER_VIDEO_ADDED",a)};
n.Ua=function(a){Se("WATCH_LATER_VIDEO_REMOVED",a)};
n.Ja=function(){return this.U||(rj(this)?"html5":null)};
n.Ia=function(){return this.ea};
function uj(a){a.cancel();lj(a);a.U=null;a.f&&(a.f.loaded=!1);var b=rj(a);b&&(qj(a)||!wj(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.aa;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.C){var a=sj(this);cf(a,this.C)}Ke(this.oa);this.L=!1};
n.o=function(){uj(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){S(b)}this.ba=null;for(var a in this.j)y[this.j[a]]=null;this.fa=this.f=this.api=null;delete this.aa;delete this.m;N.prototype.o.call(this)};
function wj(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function sj(a){return a.i?a.i.jsUrl:a.f.assets.js}
function vj(a,b){if(a.i)var c=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(c=a.f.args.fflags);return"true"==dg(c||"")[b]}
;var Aj={},Bj="player_uid_"+(1E9*Math.random()>>>0);
function Cj(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=yc(d):e=d;d=e;e=Bj+"_"+Ja(d);var f=Aj[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new kj(d,e,a,b);Aj[e]=f;Se("player-added",f.api);Kc(f,Oa(Dj,f));return f.api}
function Dj(a){delete Aj[a.getId()]}
;function Ej(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Fj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Gj(a)}
function Gj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Hj(a,b,c,d){if(Ia(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Ij(a){a=void 0===a?!1:a;N.call(this);this.f=new P(a);Kc(this,Oa(Lc,this.f))}
F(Ij,N);Ij.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
Ij.prototype.j=function(a,b){this.g||this.f.N.apply(this.f,arguments)};function Jj(a,b,c){Ij.call(this);this.h=a;this.i=b;this.l=c}
v(Jj,Ij);function Kj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(Fd(a),d.i))}}
Jj.prototype.o=function(){this.i=this.h=null;Ij.prototype.o.call(this)};function Lj(a){N.call(this);this.f=a;this.f.subscribe("command",this.ya,this);this.h={};this.j=!1}
v(Lj,N);n=Lj.prototype;n.start=function(){this.j||this.g||(this.j=!0,Kj(this.f,"RECEIVING"))};
n.ya=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.ab,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Mj(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=Nj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=Oj(a,c))&&this.j&&!this.g&&Kj(this.f,a,c))}}};
n.ab=function(a,b){this.j&&!this.g&&Kj(this.f,a,this.ia(a,b))};
n.ia=function(a,b){if(null!=b)return{value:b}};
function Mj(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||de(a.f,"command",this.ya,this);this.f=null;for(var b in this.h)Mj(this,b);N.prototype.o.call(this)};function Pj(a,b){Lj.call(this,b);this.i=a;this.start()}
v(Pj,Lj);Pj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
Pj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function Nj(a,b){switch(a){case "loadVideoById":return b=Gj(b),[b];case "cueVideoById":return b=Gj(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Hj(b),[b];case "cuePlaylist":return b=Hj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Oj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Pj.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Lj.prototype.ia.call(this,a,b)};
Pj.prototype.o=function(){Lj.prototype.o.call(this);delete this.i};function Qj(a,b,c){N.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.u="*";this.i=c;this.sessionId=null;this.channel="widget";this.C=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.C&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.u=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Ta(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
v(Qj,N);Qj.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.u)}catch(e){Ae(e)}}};
Qj.prototype.o=function(){window.removeEventListener("message",this.m);N.prototype.o.call(this)};function Rj(){var a=this.g=new Qj(!!R("WIDGET_ID_ENFORCE")),b=C(this.Xa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=R("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=Rj.prototype;n.Xa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,Sj(this,a)),this.j[a]=!0)):this.ua(a,b,c)};
n.ua=function(){};
function Sj(a,b){return C(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Ga=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");H(this.i,this.za,this);this.i=[]};
n.ja=function(){return null};
function Tj(a,b){a.sendMessage("infoDelivery",b)}
n.za=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.za({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function Uj(a){Rj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.Va,this));this.addEventListener("onVideoProgress",C(this.fb,this));this.addEventListener("onVolumeChange",C(this.gb,this));this.addEventListener("onApiChange",C(this.Za,this));this.addEventListener("onPlaybackQualityChange",C(this.bb,this));this.addEventListener("onPlaybackRateChange",C(this.cb,this));this.addEventListener("onStateChange",C(this.eb,this));this.addEventListener("onWebglSettingsChanged",C(this.hb,
this))}
v(Uj,Rj);n=Uj.prototype;n.ua=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Ej(a)){var d=b;if(Ia(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Gj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Fj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Hj.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Ej(a)&&Tj(this,this.ja())}};
n.Va=function(){var a=C(this.Ga,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ja=function(){if(!this.f)return null;var a=this.f.getApiInterface();Za(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
n.eb=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Tj(this,a)};
n.bb=function(a){Tj(this,{playbackQuality:a})};
n.cb=function(a){Tj(this,{playbackRate:a})};
n.Za=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.gb=function(){Tj(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.fb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Tj(this,a)};
n.hb=function(){var a={sphericalProperties:this.f.getSphericalProperties()};Tj(this,a)};
n.dispose=function(){Rj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function Vj(a,b,c){N.call(this);this.f=a;this.i=c;this.j=vf(window,"message",C(this.l,this));this.h=new Jj(this,a,b);Kc(this,Oa(Lc,this.h))}
v(Vj,N);Vj.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
Vj.prototype.o=function(){wf(this.j);this.f=null;N.prototype.o.call(this)};function Wj(){var a=ib(Xj),b;return Td(new O(function(c,d){a.onSuccess=function(e){ng(e)?c(e):d(new Yj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Yj("Unknown request error","net.unknown",e))};
a.S=function(e){d(new Yj("Request timed out","net.timeout",e))};
b=wg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Ud&&b.abort();
return Rd(c)})}
function Yj(a,b){G.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
v(Yj,G);function Zj(){this.g=0;this.f=null}
Zj.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Ld(a)?a:ak(a)):2===this.g&&b?(a=b.call(c,this.f),Ld(a)?a:bk(a)):this};
Zj.prototype.getValue=function(){return this.f};
Zj.prototype.$goog_Thenable=!0;function bk(a){var b=new Zj;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function ak(a){var b=new Zj;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function ck(a){G.call(this,a.message||a.description||a.name);this.isMissing=a instanceof dk;this.isTimeout=a instanceof Yj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ud}
v(ck,G);ck.prototype.name="BiscottiError";function dk(){G.call(this,"Biscotti ID is missing from server")}
v(dk,G);dk.prototype.name="BiscottiMissingError";var Xj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ek=null;
function bg(){if(T("disable_biscotti_fetch_on_html5_clients"))return Rd(Error("Fetching biscotti ID is disabled."));if(T("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!uc.get("CONSENT","").startsWith("YES+"))return Rd(Error("User has not consented - not fetching biscotti id."));if("1"===cb(we(),"args","privembed"))return Rd(Error("Biscotti ID is not available in private embed mode"));ek||(ek=Td(Wj().then(fk),function(a){return gk(2,a)}));
return ek}
function fk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new dk;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new dk;a=a.id;cg(a);ek=ak(a);hk(18E5,2);return a}
function gk(a,b){var c=new ck(b);cg("");ek=bk(c);0<a&&hk(12E4,a-1);throw c;}
function hk(a,b){U(function(){Td(Wj().then(fk,function(c){return gk(b,c)}),Ea)},a)}
function ik(){try{var a=B("yt.ads.biscotti.getId_");return a?a():bg()}catch(b){return Rd(b)}}
;function jk(a){if("1"!==cb(we(),"args","privembed")){a&&ag();try{ik().then(function(){},function(){}),U(jk,18E5)}catch(b){S(b)}}}
;var Y=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function kk(){this.f=R("ALT_PREF_COOKIE_NAME","PREF");var a=uc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
n=kk.prototype;n.get=function(a,b){lk(a);mk(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){lk(a);mk(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
n.remove=function(a){lk(a);mk(a);delete Y[a]};
n.save=function(){De(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Y)delete Y[a]};
n.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function mk(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function lk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function nk(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fa(kk);function ok(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!pk(a)||c.some(function(e){return!pk(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())qk(a,d.value);return a}
function qk(a,b){for(var c in b)if(pk(b[c])){if(c in a&&!pk(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});qk(a[c],b[c])}else if(rk(b[c])){if(c in a&&!rk(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);sk(a[c],b[c])}else a[c]=b[c];return a}
function sk(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,pk(d)?a.push(qk({},d)):rk(d)?a.push(sk([],d)):a.push(d);return a}
function pk(a){return"object"===typeof a&&!Array.isArray(a)}
function rk(a){return"object"===typeof a&&Array.isArray(a)}
;var tk={},uk=0;
function vk(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Pg("cobalt")){if(a){a instanceof I||(a="object"==typeof a&&a.O?a.M():String(a),Eb.test(a)?a=new I(a,Ab):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Db))&&Cb.test(b[1])?new I(a,Ab):null));a=Bb(a||Gb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Kb)){b="object"==typeof a;var f=null;b&&a.ka&&(f=a.ha());a=Mb(sb(b&&a.O?a.M():String(a)),f)}a instanceof Kb&&a.constructor===Kb?a=a.f:(Ga(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Fd(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Bc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)xg(a,b,"POST",e,d);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)xg(a,b,"GET","",d);else{b:{try{var g=new Ra({url:a});if(g.h&&g.g||g.i){var h=Sb(a.match(Rb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(Xb);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var t=c;break d}}c+=3}t=-1}if(0>t)var q=null;else{var A=a.indexOf("&",t);if(0>A||A>l)A=l;t+=3;q=decodeURIComponent(a.substr(t,A-t).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(E){}f=!1}f?wk(a)?(b&&b(),f=!0):f=!1:f=!1;f||xk(a,b)}}
function wk(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function xk(a,b){var c=new Image,d=""+uk++;tk[d]=c;c.onload=c.onerror=function(){b&&tk[d]&&b();delete tk[d]};
c.src=a}
;function yk(a,b){Mi.call(this,1,arguments)}
v(yk,Mi);function zk(a,b){Mi.call(this,1,arguments)}
v(zk,Mi);var Ak=new Ni("aft-recorded",yk),Bk=new Ni("timing-sent",zk);var Ck=window;function Dk(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Ek=Ck.performance||Ck.mozPerformance||Ck.msPerformance||Ck.webkitPerformance||new Dk;var Fk=!1;C(Ek.clearResourceTimings||Ek.webkitClearResourceTimings||Ek.mozClearResourceTimings||Ek.msClearResourceTimings||Ek.oClearResourceTimings||Ea,Ek);function Gk(a){var b=Hk(a);if(b.aft)return b.aft;a=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Ik(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Pa("ytcsi."+(a||"")+"data_",b));return b}
function Jk(a){a=Ik(a);a.info||(a.info={});return a.info}
function Hk(a){a=Ik(a);a.tick||(a.tick={});return a.tick}
function Kk(a){var b=Ik(a).nonce;b||(b=yi(),Ik(a).nonce=b);return b}
function Lk(a){var b=Hk(a||""),c=Gk(a);c&&!Fk&&(Si(Ak,new yk(Math.round(c-b._start),a)),Fk=!0)}
;function Mk(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function Nk(a){a=a||"";var b=B("ytcsi.reference");b||(Mk(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Mk(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Ok=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Ok,void 0);function Pk(){this.f=0}
function Qk(){Pk.f||(Pk.f=new Pk);return Pk.f}
Pk.prototype.tick=function(a,b,c){Rk(this,"tick_"+a+"_"+b)||hi("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Pk.prototype.info=function(a,b){var c=Object.keys(a).join("");Rk(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,hi("latencyActionInfo",c))};
Pk.prototype.span=function(a,b){var c=Object.keys(a).join("");Rk(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,hi("latencyActionSpan",a))};
function Rk(a,b){Ok[b]=Ok[b]||{count:0};var c=Ok[b];c.count++;c.time=W();a.f||(a.f=ef(function(){var d=W(),e;for(e in Ok)Ok[e]&&6E4<d-Ok[e].time&&delete Ok[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new fi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||pi(c)),!0):!1}
;var Z={},Sk=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.aq="tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",
Z.rcl="mwebInfo.responseContentLength",Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),Tk="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Uk={},Vk=(Uk.ccs="CANARY_STATE_",Uk.mver="MEASUREMENT_VERSION_",Uk.pis="PLAYER_INITIALIZED_STATE_",Uk.yt_pt="LATENCY_PLAYER_",Uk.pa="LATENCY_ACTION_",Uk.yt_vst="VIDEO_STREAM_TYPE_",Uk),Wk="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Xk(a){return!!R("FORCE_CSI_ON_GEL",!1)||T("csi_on_gel")||!!Ik(a).useGel}
function Yk(a){a=Ik(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Zk(a,b,c){if(null!==b)if(Jk(c)[a]=b,Xk(c)){var d=b;b=Yk(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Sk){b=Sk[a];0<=Ta(Tk,b)&&(d=!!d);a in Vk&&"string"===typeof d&&(d=Vk[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=ok({},e)}else 0<=Ta(Wk,a)||pi(new fi("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Xk(c)&&(b=Nk(c||""),ok(b.info,f),b=Yk(c),"gelInfos"in b||(b.gelInfos={}),ok(b.gelInfos,f),c=Kk(c),Qk().info(f,c))}else Nk(c||"").info[a]=b}
function $k(a,b,c){var d=Hk(c);if(T("use_first_tick")&&al(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Ek.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Ek.mark(e))}e=b||W();d[a]=e;e=Yk(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||W();if(Xk(c)){Nk(c||"").tick[a]=b||W();e=Kk(c);if("_start"===a){var f=Qk();Rk(f,"baseline_"+e)||hi("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Qk().tick(a,e,b);Lk(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&
(f=R((c||"")+"TIMING_ACTION",void 0),e=Hk(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&al("_start")&&Gk(c)))if(Lk(c),c)bl(c);else{f=!0;var g=R("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&bl(c)}Nk(c||"").tick[a]=b||W()}return d[a]}
function al(a,b){var c=Hk(b);return a in c}
function bl(a){if(!Xk(a)){var b=Hk(a),c=Jk(a),d=b._start,e=R("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:R((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Gk(a);var h=Hk(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Jk(a).yt_pvis&&"youtube"===e&&(Zk("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=W();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;T("debug_csi_data")&&(c=B("yt.timing.csiData"),c||(c=[],Pa("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var t in f)f.hasOwnProperty(t)&&(c+="&"+t+"="+f[t]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var q=void 0===q?"":q;wk(f,q)||vk(f,void 0,void 0,void 0,q)}else vk(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);Si(Bk,new zk(m.aft+(Number(g)||0),a))}}
var cl=window;cl.ytcsi&&(cl.ytcsi.info=Zk,cl.ytcsi.tick=$k);var dl=null,el=null,fl=null,gl={};function hl(a){var b=a.id;a=a.ve_type;var c=Ai++;a=new Bi({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});gl[b]=a;b=Hi();c=Fi();b&&c&&bj(b,c,[a])}
function il(){var a=dl.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function jl(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Ki(b,a),a=Fi()))for(var c in gl){var d=gl[c];d&&bj(b,a,[d])}}
function kl(a){gl[a.id]=new Bi({trackingParams:a.tracking_params})}
function ll(a){var b=Hi(),c=gl[a.id];if(b&&c){a=T("use_default_events_client")?void 0:gi;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={ga:Ji(b),T:b};"UNDEFINED_CSN"==b?cj("visualElementGestured",c,d):a?$f("visualElementGestured",c,a,d):hi("visualElementGestured",c,d)}}
function ml(a){a=a.ids;var b=Hi();if(b)for(var c=0;c<a.length;c++){var d=gl[a[c]];if(d){var e=b,f=T("use_default_events_client")?void 0:gi;d={csn:e,ve:d.getAsJson(),eventType:1};var g={ga:Ji(e),T:e};"UNDEFINED_CSN"==e?cj("visualElementShown",d,g):f?$f("visualElementShown",d,f,g):hi("visualElementShown",d,g)}}}
;z("yt.setConfig",Q,void 0);z("yt.config.set",Q,void 0);z("yt.setMsg",Ce,void 0);z("yt.msgs.set",Ce,void 0);z("yt.logging.errors.log",qi,void 0);
z("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);if(!a){var b=R("PLAYER_VARS",void 0);b&&(a={args:b})}jk(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.args.forced_experiments||(b=window.location.href,-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=fg(1<b.length?b[1]:b[0])):b={},b.forced_experiments&&(a.args.forced_experiments=b.forced_experiments));a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");
window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);dl=a=(c=R("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c?Cj(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1):Cj(a);a.addEventListener("onScreenChanged",jl);a.addEventListener("onLogClientVeCreated",hl);a.addEventListener("onLogServerVeCreated",kl);a.addEventListener("onLogVeClicked",ll);a.addEventListener("onLogVesShown",ml);a.addEventListener("onVideoDataChange",il);c=R("POST_MESSAGE_ID","player");
R("ENABLE_JS_API")?fl=new Uj(a):R("ENABLE_POST_API")&&"string"===typeof c&&"string"===typeof b&&(el=new Vj(window.parent,c,b),fl=new Pj(a,el.h));mf()},void 0);
var nl=ze(function(){$k("ol");var a=kk.getInstance(),b=!!((nk("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Dd(document.body,"exp-invert-logo"))if(c&&!Dd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Dd(d,"inverted-hdpi")){var e=Bd(d);Cd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Dd(document.body,"inverted-hdpi")&&Ed();b!=c&&(b="f"+(Math.floor(119/31)+1),d=nk(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),ol=ze(function(){var a=dl;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&ui.dispose();a=0;for(var b=kf.length;a<b;a++)jf(kf[a]);kf.length=0;bf("//static.doubleclick.net/instream/ad_status.js");lf=!1;Q("DCLKSTAT",0);Mc(fl,el);if(a=dl)a.removeEventListener("onScreenChanged",jl),a.removeEventListener("onLogClientVeCreated",hl),a.removeEventListener("onLogServerVeCreated",kl),a.removeEventListener("onLogVeClicked",ll),a.removeEventListener("onLogVesShown",ml),a.removeEventListener("onVideoDataChange",il),a.destroy();
gl={}});
window.addEventListener?(window.addEventListener("load",nl),window.addEventListener("unload",ol)):window.attachEvent&&(window.attachEvent("onload",nl),window.attachEvent("onunload",ol));Pa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||vi);Pa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||wi);Pa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||nf);
Pa("yt.player.exports.navigate",B("yt.player.exports.navigate")||Li);Pa("yt.util.activity.init",B("yt.util.activity.init")||Af);Pa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Df);Pa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Bf);}).call(this);
