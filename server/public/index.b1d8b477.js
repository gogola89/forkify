function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"jy8XN":"index.b1d8b477.js","3fUEm":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,f={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,g=Function.prototype.call;f=p?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!v.call({1:2},1);h=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,L=p&&O.bind(j,j),$=(E=p?function(e){return e&&L(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),x=E("".slice);w=function(e){return x($(e),8,-1)};var P=Object,T=E("".split);k=d((function(){return!P("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?T(e,""):P(e)}:P;var M,H=TypeError;M=function(e){if(null==e)throw H("Can't call method on "+e);return e},_=function(e){return k(M(e))};var q,A,I,F;F=function(e){return"function"==typeof e},I=function(e){return"object"==typeof e?null!==e:F(e)};var N,C={},R=function(e){return F(e)?e:void 0};N=function(e,t){return arguments.length<2?R(c[e]):c[e]&&c[e][t]};var W={};W=E({}.isPrototypeOf);var U,D,G,z={};z=N("navigator","userAgent")||"";var B,J,X=c.process,Y=c.Deno,Q=X&&X.versions||Y&&Y.version,V=Q&&Q.v8;V&&(J=(B=V.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!J&&z&&(!(B=z.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=z.match(/Chrome\/(\d+)/))&&(J=+B[1]),G=J,D=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&G&&G<41})),U=D&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var K=Object;C=U?function(e){return"symbol"==typeof e}:function(e){var t=N("Symbol");return F(t)&&W(t.prototype,K(e))};var Z,ee,te,ne=String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=TypeError;ee=function(e){if(F(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var ie,oe=TypeError;ie=function(e,t){var n,r;if("string"===t&&F(n=e.toString)&&!I(r=f(n,e)))return r;if(F(n=e.valueOf)&&!I(r=f(n,e)))return r;if("string"!==t&&F(n=e.toString)&&!I(r=f(n,e)))return r;throw oe("Can't convert object to primitive value")};var ae,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var de=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=de,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.23.2",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,fe={},he=Object;pe=function(e){return he(M(e))};var ge=E({}.hasOwnProperty);fe=Object.hasOwn||function(e,t){return ge(pe(e),t)};var ve,ye=0,me=Math.random(),be=E(1..toString);ve=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++ye+me,36)};var _e=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=U?we:we&&we.withoutSetter||ve;ae=function(e){if(!fe(_e,e)||!D&&"string"!=typeof _e[e]){var t="Symbol."+e;D&&fe(we,e)?_e[e]=we[e]:_e[e]=U&&ke?ke(t):Ee(t)}return _e[e]};var Se=TypeError,Oe=ae("toPrimitive");A=function(e,t){if(!I(e)||C(e))return e;var n,r=Z(e,Oe);if(r){if(void 0===t&&(t="default"),n=f(r,e,t),!I(n)||C(n))return n;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},q=function(e){var t=A(e,"string");return C(t)?t:t+""};var je,Le,$e=c.document,xe=I($e)&&I($e.createElement);Le=function(e){return xe?$e.createElement(e):{}},je=!l&&!d((function(){return 7!=Object.defineProperty(Le("div"),"a",{get:function(){return 7}}).a}));var Pe,Te,Me=Object.getOwnPropertyDescriptor,He=s=l?Me:function(e,t){if(e=_(e),t=q(t),je)try{return Me(e,t)}catch(e){}if(fe(e,t))return b(!f(h,e,t),e[t])},qe={};Te=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ae,Ie=String,Fe=TypeError;Ae=function(e){if(I(e))return e;throw Fe(Ie(e)+" is not an object")};var Ne=TypeError,Ce=Object.defineProperty,Re=Object.getOwnPropertyDescriptor;Pe=l?Te?function(e,t,n){if(Ae(e),t=q(t),Ae(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Re(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(Ae(e),t=q(t),Ae(n),je)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ne("Accessors not supported");return"value"in n&&(e[t]=n.value),e},qe=l?function(e,t,n){return Pe(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var We,Ue,De=Function.prototype,Ge=l&&Object.getOwnPropertyDescriptor,ze=fe(De,"name"),Be={EXISTS:ze,PROPER:ze&&"something"===function(){}.name,CONFIGURABLE:ze&&(!l||l&&Ge(De,"name").configurable)}.CONFIGURABLE,Je={},Xe=E(Function.toString);F(ue.inspectSource)||(ue.inspectSource=function(e){return Xe(e)}),Je=ue.inspectSource;var Ye,Qe,Ve=c.WeakMap;Qe=F(Ve)&&/native code/.test(Je(Ve));var Ke,Ze=se("keys");Ke=function(e){return Ze[e]||(Ze[e]=ve(e))};var et={};et={};var tt,nt,rt,it=c.TypeError,ot=c.WeakMap;if(Qe||ue.state){var at=ue.state||(ue.state=new ot),st=E(at.get),ct=E(at.has),ut=E(at.set);tt=function(e,t){if(ct(at,e))throw new it("Object already initialized");return t.facade=e,ut(at,e,t),t},nt=function(e){return st(at,e)||{}},rt=function(e){return ct(at,e)}}else{var lt=Ke("state");et[lt]=!0,tt=function(e,t){if(fe(e,lt))throw new it("Object already initialized");return t.facade=e,qe(e,lt,t),t},nt=function(e){return fe(e,lt)?e[lt]:{}},rt=function(e){return fe(e,lt)}}var dt=(Ye={set:tt,get:nt,has:rt,enforce:function(e){return rt(e)?nt(e):tt(e,{})},getterFor:function(e){return function(t){var n;if(!I(t)||(n=nt(t)).type!==e)throw it("Incompatible receiver, "+e+" required");return n}}}).enforce,pt=Ye.get,ft=Object.defineProperty,ht=l&&!d((function(){return 8!==ft((function(){}),"length",{value:8}).length})),gt=String(String).split("String"),vt=Ue=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!fe(e,"name")||Be&&e.name!==t)&&ft(e,"name",{value:t,configurable:!0}),ht&&n&&fe(n,"arity")&&e.length!==n.arity&&ft(e,"length",{value:n.arity});try{n&&fe(n,"constructor")&&n.constructor?l&&ft(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=dt(e);return fe(r,"source")||(r.source=gt.join("string"==typeof t?t:"")),e};Function.prototype.toString=vt((function(){return F(this)&&pt(this).source||Je(this)}),"toString"),We=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;return F(n)&&Ue(n,o,r),r.global?i?e[t]=n:ce(t,n):(r.unsafe?e[t]&&(i=!0):delete e[t],i?e[t]=n:Pe(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})),e};var yt,mt,bt,_t,wt,kt,Et={},St={},Ot=Math.ceil,jt=Math.floor;St=Math.trunc||function(e){var t=+e;return(t>0?jt:Ot)(t)},kt=function(e){var t=+e;return t!=t||0===t?0:St(t)};var Lt=Math.max,$t=Math.min;wt=function(e,t){var n=kt(e);return n<0?Lt(n+t,0):$t(n,t)};var xt,Pt,Tt=Math.min;Pt=function(e){return e>0?Tt(kt(e),9007199254740991):0},xt=function(e){return Pt(e.length)};var Mt=function(e){return function(t,n,r){var i,o=_(t),a=xt(o),s=wt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Ht=(_t={includes:Mt(!0),indexOf:Mt(!1)}).indexOf,qt=E([].push);bt=function(e,t){var n,r=_(e),i=0,o=[];for(n in r)!fe(et,n)&&fe(r,n)&&qt(o,n);for(;t.length>i;)fe(r,n=t[i++])&&(~Ht(o,n)||qt(o,n));return o};var At,It={},Ft=(It=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");mt=Object.getOwnPropertyNames||function(e){return bt(e,Ft)},At=Object.getOwnPropertySymbols;var Nt=E([].concat);Et=N("Reflect","ownKeys")||function(e){var t=mt(Ae(e));return At?Nt(t,At(e)):t},yt=function(e,t,n){for(var r=Et(t),i=Pe,o=s,a=0;a<r.length;a++){var c=r[a];fe(e,c)||n&&fe(n,c)||i(e,c,o(t,c))}};var Ct={},Rt=/#|\.prototype\./,Wt=function(e,t){var n=Dt[Ut(e)];return n==zt||n!=Gt&&(F(t)?d(t):!!t)},Ut=Wt.normalize=function(e){return String(e).replace(Rt,".").toLowerCase()},Dt=Wt.data={},Gt=Wt.NATIVE="N",zt=Wt.POLYFILL="P";Ct=Wt,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(a=He(n,r))&&a.value:n[r],!Ct(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;yt(o,i)}(e.sham||i&&i.sham)&&qe(o,"sham",!0),We(n,r,o,e)}};var Bt,Jt,Xt=_t.includes,Yt={},Qt={};Qt=Object.keys||function(e){return bt(e,It)},Jt=l&&!Te?Object.defineProperties:function(e,t){Ae(e);for(var n,r=_(t),i=Qt(t),o=i.length,a=0;o>a;)Pe(e,n=i[a++],r[n]);return e};var Vt={};Vt=N("document","documentElement");var Kt,Zt=Ke("IE_PROTO"),en=function(){},tn=function(e){return"<script>"+e+"<\/script>"},nn=function(e){e.write(tn("")),e.close();var t=e.parentWindow.Object;return e=null,t},rn=function(){try{Kt=new ActiveXObject("htmlfile")}catch(e){}var e,t;rn="undefined"!=typeof document?document.domain&&Kt?nn(Kt):((t=Le("iframe")).style.display="none",Vt.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(tn("document.F=Object")),e.close(),e.F):nn(Kt);for(var n=It.length;n--;)delete rn.prototype[It[n]];return rn()};et[Zt]=!0,Yt=Object.create||function(e,t){var n;return null!==e?(en.prototype=Ae(e),n=new en,en.prototype=null,n[Zt]=e):n=rn(),void 0===t?n:Jt(n,t)};var on=Pe,an=ae("unscopables"),sn=Array.prototype;null==sn[an]&&on(sn,an,{configurable:!0,value:Yt(null)}),Bt=function(e){sn[an][e]=!0},a({target:"Array",proto:!0,forced:d((function(){return!Array(1).includes()}))},{includes:function(e){return Xt(this,e,arguments.length>1?arguments[1]:void 0)}}),Bt("includes");var cn,un={},ln=Function.prototype,dn=ln.apply,pn=ln.call;un="object"==typeof Reflect&&Reflect.apply||(p?pn.bind(dn):function(){return pn.apply(dn,arguments)});var fn,hn=E(E.bind);fn=function(e,t){return ee(e),void 0===t?e:p?hn(e,t):function(){return e.apply(t,arguments)}};var gn={};gn=E([].slice);var vn,yn=TypeError;vn=function(e,t){if(e<t)throw yn("Not enough arguments");return e};var mn;mn=/(?:ipad|iphone|ipod).*applewebkit/i.test(z);var bn;bn="process"==w(c.process);var _n,wn,kn,En,Sn=c.setImmediate,On=c.clearImmediate,jn=c.process,Ln=c.Dispatch,$n=c.Function,xn=c.MessageChannel,Pn=c.String,Tn=0,Mn={};try{_n=c.location}catch(e){}var Hn=function(e){if(fe(Mn,e)){var t=Mn[e];delete Mn[e],t()}},qn=function(e){return function(){Hn(e)}},An=function(e){Hn(e.data)},In=function(e){c.postMessage(Pn(e),_n.protocol+"//"+_n.host)};Sn&&On||(Sn=function(e){vn(arguments.length,1);var t=F(e)?e:$n(e),n=gn(arguments,1);return Mn[++Tn]=function(){un(t,void 0,n)},wn(Tn),Tn},On=function(e){delete Mn[e]},bn?wn=function(e){jn.nextTick(qn(e))}:Ln&&Ln.now?wn=function(e){Ln.now(qn(e))}:xn&&!mn?(En=(kn=new xn).port2,kn.port1.onmessage=An,wn=fn(En.postMessage,En)):c.addEventListener&&F(c.postMessage)&&!c.importScripts&&_n&&"file:"!==_n.protocol&&!d(In)?(wn=In,c.addEventListener("message",An,!1)):wn="onreadystatechange"in Le("script")?function(e){Vt.appendChild(Le("script")).onreadystatechange=function(){Vt.removeChild(this),Hn(e)}}:function(e){setTimeout(qn(e),0)});var Fn=(cn={set:Sn,clear:On}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==Fn},{clearImmediate:Fn});var Nn=cn.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==Nn},{setImmediate:Nn});var Cn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new $(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return P()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,o)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function x(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,c(k,"constructor",m),c(m,"constructor",y),y.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Cn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Cn:Function("r","regeneratorRuntime = r")(Cn)}const Rn=function(e){return new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},Wn=async function(e,t){try{const n=t?await Promise.race([fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),Rn(5)]):await Promise.race([fetch(e),Rn(5)]),r=await n.json();if(!n.ok)throw new Error(`${r.message} (${n.status})`);return r}catch(e){throw e}},Un={recipe:{},search:{query:"",page:1,results:[],resultsPerPage:10},bookmarks:[]},Dn=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},Gn=function(e=Un.search.page){Un.search.page=e;const t=(e-1)*Un.search.resultsPerPage,n=e*Un.search.resultsPerPage;return Un.search.results.slice(t,n)},zn=function(){localStorage.setItem("bookmarks",JSON.stringify(Un.bookmarks))},Bn=function(e){Un.bookmarks.push(e),e.id===Un.recipe.id&&(Un.recipe.bookmarked=!0),zn()};!function(){const e=localStorage.getItem("bookmarks");e&&(Un.bookmarks=JSON.parse(e))}();var Jn;Jn=new URL(o("27Lyk").resolve("3fUEm"),import.meta.url).toString();class Xn{_data;_message="Recipe was successfully uploaded";render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>{n.setAttribute(e.name,e.value)}))}))}_clear(){this._parentElement.innerHTML=""}renderMessage(e=this._message){const t=`\n        <div class="error">\n          <div>\n            <svg>\n              <use href="${n(Jn)}#icon-smile"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(e=this._errorMessage){const t=`\n        <div class="error">\n          <div>\n            <svg>\n              <use href="${n(Jn)}#icon-alert-triangle"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSpinner=function(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(Jn)}#icon-loader"></use>\n        </svg>\n      </div>\n  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}var Yn=new class extends Xn{_parentElement=document.querySelector(".recipe");_message="";_errorMessage="We could not find the recipe. Please try another one.";addHandleRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}_generateMarkup(){return`\n        <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(Jn)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">\n              ${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(Jn)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">\n              ${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" \n                data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${n(Jn)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings"\n                data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${n(Jn)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(Jn)}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${n(Jn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n          </ul>\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(Jn)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n    `}_generateMarkupIngredient(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${n(Jn)}#icon-check"></use>\n        </svg>\n        \n        <div class="recipe__quantity">\n        ${e.quantity?e.quantity.toString():""}\n        </div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${e.unit}</span>\n          ${e.description}\n        </div>\n      </li>\n    `}};var Qn=new class extends Xn{_parentElement=document.querySelector(".search");getQuery(){return this._parentElement.querySelector(".search__field").value}clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var Vn=new class extends Xn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n        <li class="preview">\n            <a class="preview__link \n                ${this._data.id===e?"preview__link--active":""}" \n                href="#${this._data.id}">\n                <figure class="preview__fig">\n                <img src="${this._data.image}" alt="${this._data.title}" />\n                </figure>\n                <div class="preview__data">\n                <h4 class="preview__title">${this._data.title}</h4>\n                <p class="preview__publisher">${this._data.publisher}</p>\n                <div class="recipe__user-generated \n                  ${this._data.key?"":"hidden"}">\n                  <svg>\n                    <use href="${n(Jn)}#icon-user"></use>\n                  </svg>\n                </div>\n                </div>\n            </a>\n        </li>\n      `}};var Kn=new class extends Xn{_parentElement=document.querySelector(".results");_message="";_errorMessage="No recipe found for your search. Please try again.";_generateMarkup(){return this._data.map((e=>Vn.render(e,!1))).join("")}};var Zn=new class extends Xn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&1===t?"":1===e&&t>1?`\n        <button data-goto="${e+1}" \n            class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n(Jn)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n      `:e>1&&e<t?`\n            <button data-goto="${e-1}" \n                class="btn--inline pagination__btn--prev">\n                <svg class="search__icon">\n                <use href="${n(Jn)}#icon-arrow-left"></use>\n                </svg>\n                <span>Page ${e-1}</span>\n            </button>\n            <button data-goto="${e+1}"\n                class="btn--inline pagination__btn--next">\n                <span>Page ${e+1}</span>\n                <svg class="search__icon">\n                <use href="${n(Jn)}#icon-arrow-right"></use>\n                </svg>\n            </button>\n      `:e===t&&t>1?`\n        <button data-goto="${e+1}"\n            class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(Jn)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n        </button>\n      `:void 0}};var er=new class extends Xn{_parentElement=document.querySelector(".bookmarks__list");_message="";_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";addHandlerRender(e){window.addEventListener("load",(function(){e()}))}_generateMarkup(){return this._data.map((e=>Vn.render(e,!1))).join("")}};var tr=new class extends Xn{_parentElement=document.querySelector(".upload");_overlay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const nr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Yn.renderSpinner(),Kn.update(Gn()),await async function(e){try{const t=await Wn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=bc848ea3-31aa-4b6d-97d2-8eb210f1d3eb`);Un.recipe=Dn(t),Un.bookmarks?.some((t=>t.id===e))?Un.recipe.bookmarked=!0:Un.recipe.bookmarked=!1}catch(e){throw e}}(e);const t=Un.recipe;Yn.render(t),er.update(Un.bookmarks)}catch(e){Yn.renderError(),console.log(e)}},rr=async function(e){try{tr.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format. Please use correct format!");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await Wn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=bc848ea3-31aa-4b6d-97d2-8eb210f1d3eb",n);Un.recipe=Dn(r),Bn(Un.recipe)}catch(e){throw e}}(e),console.log(Un.recipe),Yn.render(Un.recipe),tr.renderMessage(),er.render(Un.bookmarks),window.history.pushState(null,"",`#${Un.recipe.id}`),setTimeout((function(){tr.toggleWindow()}),2500)}catch(e){tr.renderError(e.message),console.log(e)}},ir=async function(){try{const e=Qn.getQuery();if(!e)return;Kn.renderSpinner(),await async function(e){try{const t=await Wn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=bc848ea3-31aa-4b6d-97d2-8eb210f1d3eb`);Un.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Un.search.page=1}catch(e){throw e}}(e),Kn.render(Gn()),Zn.render(Un.search),Qn.clearInput()}catch(e){console.log(e)}},or=function(e){Kn.render(Gn(e)),Zn.render(Un.search)},ar=function(e){!function(e){Un.recipe.ingredients.forEach((t=>{t.quantity=e*t.quantity/Un.recipe.servings})),Un.recipe.servings=e}(e),Yn.update(Un.recipe)},sr=function(){Un.recipe.bookmarked?function(e){const t=Un.bookmarks.findIndex((t=>t.id===e));Un.bookmarks.splice(t,1),e===Un.recipe.id&&(Un.recipe.bookmarked=!1),zn()}(Un.recipe.id):Bn(Un.recipe),Yn.update(Un.recipe),er.render(Un.bookmarks)},cr=function(){er.render(Un.bookmarks)};Yn.addHandleRender(nr),Yn.addHandlerUpdateServings(ar),Yn.addHandlerBookmark(sr),Qn.addHandlerSearch(ir),Zn.addHandlerClick(or),er.addHandlerRender(cr),tr._addHandlerUpload(rr);
//# sourceMappingURL=index.b1d8b477.js.map