e=this,t=function(){"use strict";function P(e,t){var n,s=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,n)),s}function u(e){for(var t,n=1;n<arguments.length;n++)t=null!=arguments[n]?arguments[n]:{},n%2?P(Object(t),!0).forEach(function(n){x(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n,s=0;s<t.length;s++)n=t[s],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function n(e,t,n){return t&&F(e.prototype,t),n&&F(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&k(e,t)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function ce(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var n,o,s=p(e);return t?(o=p(this).constructor,n=Reflect.construct(s,arguments,o)):n=s.apply(this,arguments),ce(this,n)}}function d(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function v(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function o(e){return Array.isArray?Array.isArray(e):"[object Array]"===I(e)}function a(e){return"string"==typeof e}function L(e){return"number"==typeof e}function se(e){return!0===e||!1===e||function(e){return A(e)&&null!==e}(e)&&"[object Boolean]"==I(e)}function A(e){return"object"===w(e)}function s(e){return e!=null}function y(e){return!e.trim().length}function I(e){return e==null?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}var X=function(e){return"Invalid value for key ".concat(e)},$=function(e){return"Pattern length exceeds max of ".concat(e,".")},R=Object.prototype.hasOwnProperty,ae=function(){function e(n){var s,o=this;t(this,e),this._keys=[],this._keyMap={},s=0,n.forEach(function(e){var t=z(e);s+=t.weight,o._keys.push(t),o._keyMap[t.id]=t,s+=t.weight}),this._keys.forEach(function(e){e.weight/=s})}return n(e,[{key:"get",value:function(e){return this._keyMap[e]}},{key:"keys",value:function(){return this._keys}},{key:"toJSON",value:function(){return JSON.stringify(this._keys)}}]),e}();function z(e){var t,n=null,s=null,i=null,r=1;if(a(e)||o(e))i=e,n=M(e),s=C(e);else{if(!R.call(e,"name"))throw new Error(function(e){return"Missing ".concat(e," property in key")}("name"));if(t=e.name,i=t,R.call(e,"weight")&&(r=e.weight)<=0)throw new Error(function(e){return"Property 'weight' in key '".concat(e,"' must be a positive integer")}(t));n=M(t),s=C(t)}return{path:n,id:s,weight:r,src:i}}function M(e){return o(e)?e:e.split(".")}function C(e){return o(e)?e.join("."):e}var Q={useExtendedSearch:!1,getFn:function(e,t){var n=[],i=!1;return function e(t,r,c){if(s(t))if(r[c]){if(l=t[r[c]],!s(l))return;if(c===r.length-1&&(a(l)||L(l)||se(l)))n.push(function(e){return e==null?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(l));else if(o(l)){i=!0;for(var l,d=0,u=l.length;d<u;d+=1)e(l[d],r,c+1)}else r.length&&e(l,r,c+1)}else n.push(t)}(e,a(t)?t.split("."):t,0),i?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},e=u(u(u(u({},{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:function(e,t){return e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1}}),{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1}),{location:0,threshold:.6,distance:100}),Q),ge=/[^ ]+/g;function ue(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,e=new Map,t=Math.pow(10,s);return{get:function(s){if(o=s.match(ge).length,e.has(o))return e.get(o);var o,a=1/Math.pow(o,.5*n),i=parseFloat(Math.round(a*t)/t);return e.set(o,i),i},clear:function(){e.clear()}}}f=function(){function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=n.getFn,a=void 0===s?e.getFn:s,o=n.fieldNormWeight,r=void 0===o?e.fieldNormWeight:o;t(this,i),this.norm=ue(r,3),this.getFn=a,this.isCreated=!1,this.setIndexRecords()}return n(i,[{key:"setSources",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.docs=e}},{key:"setIndexRecords",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.records=e}},{key:"setKeys",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.keys=e,this._keysMap={},e.forEach(function(e,n){t._keysMap[e.id]=n})}},{key:"create",value:function(){var e=this;!this.isCreated&&this.docs.length&&(this.isCreated=!0,a(this.docs[0])?this.docs.forEach(function(t,n){e._addString(t,n)}):this.docs.forEach(function(t,n){e._addObject(t,n)}),this.norm.clear())}},{key:"add",value:function(e){var t=this.size();a(e)?this._addString(e,t):this._addObject(e,t)}},{key:"removeAt",value:function(e){this.records.splice(e,1);for(var t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}},{key:"getValueForItemAtKeyId",value:function(e,t){return e[this._keysMap[t]]}},{key:"size",value:function(){return this.records.length}},{key:"_addString",value:function(e,t){if(s(e)&&!y(e)){var n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}}},{key:"_addObject",value:function(e,t){var n=this,i={i:t,$:{}};this.keys.forEach(function(t,r){var l,c=n.getFn(e,t.path);s(c)&&(o(c)?!function(){for(l=[],t=[{nestedArrIndex:-1,value:c}];t.length;){var t,l,u,d=t.pop(),h=d.nestedArrIndex,e=d.value;s(e)&&(a(e)&&!y(e)?(u={v:e,i:h,n:n.norm.get(e)},l.push(u)):o(e)&&e.forEach(function(e,n){t.push({nestedArrIndex:n,value:e})}))}i.$[r]=l}():y(c)||(l={v:c,n:n.norm.get(c)},i.$[r]=l))}),this.records.push(i)}},{key:"toJSON",value:function(){return{keys:this.keys,records:this.records}}}]),i}();function D(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.getFn,r=void 0===i?e.getFn:i,a=o.fieldNormWeight,c=void 0===a?e.fieldNormWeight:a,s=new f({getFn:r,fieldNormWeight:c});return s.setKeys(t.map(z)),s.setSources(n),s.create(),s}function g(t){var s,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=n.errors,f=void 0===d?0:d,l=n.currentLocation,u=void 0===l?0:l,a=n.expectedLocation,h=void 0===a?0:a,r=n.distance,c=void 0===r?e.distance:r,i=n.ignoreLocation,m=void 0===i?e.ignoreLocation:i,o=f/t.length;return m?o:(s=Math.abs(h-u),c?o+s/c:s?1:o)}function oe(){for(var i,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.minMatchCharLength,o=[],t=-1,r=-1,n=0,c=s.length;n<c;n+=1)i=s[n],i&&-1===t?t=n:i||-1===t||((r=n-1)-t+1>=a&&o.push([t,r]),t=-1);return s[n-1]&&n-t>=a&&o.push([t,n-1]),o}l=32;function W(e){for(var s,n={},t=0,o=e.length;t<o;t+=1)s=e.charAt(t),n[s]=(n[s]||0)|1<<o-t-1;return n}O=function(){function s(n){var i,a,c,y=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},h=o.location,C=void 0===h?e.location:h,g=o.threshold,O=void 0===g?e.threshold:g,d=o.distance,A=void 0===d?e.distance:d,m=o.includeMatches,E=void 0===m?e.includeMatches:m,p=o.findAllMatches,x=void 0===p?e.findAllMatches:p,v=o.minMatchCharLength,_=void 0===v?e.minMatchCharLength:v,u=o.isCaseSensitive,j=void 0===u?e.isCaseSensitive:u,b=o.ignoreLocation,w=void 0===b?e.ignoreLocation:b;if(t(this,s),this.options={location:C,threshold:O,distance:A,includeMatches:E,findAllMatches:x,minMatchCharLength:_,isCaseSensitive:j,ignoreLocation:w},this.pattern=j?n:n.toLowerCase(),this.chunks=[],this.pattern.length)if(a=function(e,t){y.chunks.push({pattern:e,alphabet:W(e),startIndex:t})},i=this.pattern.length,i>l){for(var r=0,f=i%l,k=i-f;r<k;)a(this.pattern.substr(r,l),r),r+=l;f&&(c=i-l,a(this.pattern.substr(c),c))}else a(this.pattern,0)}return n(s,[{key:"searchIn",value:function(t){var c=this.options,j=c.isCaseSensitive,a=c.includeMatches;if(j||(t=t.toLowerCase()),this.pattern===t)return r={isMatch:!0,score:0},a&&(r.indices=[[0,t.length-1]]),r;var i,r,n=this.options,b=n.location,h=n.distance,v=n.threshold,p=n.findAllMatches,m=n.minMatchCharLength,f=n.ignoreLocation,o=[],u=0,s=!1;return this.chunks.forEach(function(n){var j=n.pattern,y=n.alphabet,_=n.startIndex,i=function(t,n,s){var o,a,f,v,b,_,E,M,P,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},B=r.location,V=void 0===B?e.location:B,R=r.distance,C=void 0===R?e.distance:R,N=r.threshold,K=void 0===N?e.threshold:N,F=r.findAllMatches,W=void 0===F?e.findAllMatches:F,D=r.minMatchCharLength,z=void 0===D?e.minMatchCharLength:D,I=r.includeMatches,H=void 0===I?e.includeMatches:I,L=r.ignoreLocation,j=void 0===L?e.ignoreLocation:L;if(n.length>l)throw new Error($(l));for(var y,d=n.length,p=t.length,i=Math.max(0,Math.min(V,p)),m=K,h=i,x=z>1||H,S=x?Array(p):[];(y=t.indexOf(n,h))>-1;)if(P=g(n,{currentLocation:y,expectedLocation:i,distance:C,ignoreLocation:j}),m=Math.min(P,m),h=y+d,x)for(b=0;b<d;)S[y+b]=1,b+=1;h=-1;for(var w=[],A=1,O=d+p,U=1<<d-1,c=0;c<d;c+=1){for(f=0,a=O;f<a;)g(n,{errors:c,currentLocation:i+a,expectedLocation:i,distance:C,ignoreLocation:j})<=m?f=a:O=a,a=Math.floor((O-f)/2+f);var O=a,T=Math.max(1,i-a+1),k=W?p:Math.min(i+a,p)+d,u=Array(k+2);u[k+1]=(1<<c)-1;for(o=k;o>=T;o-=1)if(v=o-1,E=s[t.charAt(v)],x&&(S[v]=+!!E),u[o]=(u[o+1]<<1|1)&E,c&&(u[o]|=(w[o+1]|w[o])<<1|1|w[o+1]),u[o]&U&&(A=g(n,{errors:c,currentLocation:v,expectedLocation:i,distance:C,ignoreLocation:j}))<=m){if(m=A,(h=v)<=i)break;T=Math.max(1,2*i-h)}if(g(n,{errors:c+1,currentLocation:i,expectedLocation:i,distance:C,ignoreLocation:j})>m)break;w=u}return _={isMatch:h>=0,score:Math.max(.001,A)},x&&(M=oe(S,z),M.length?H&&(_.indices=M):_.isMatch=!1),_}(t,j,y,{location:b+_,distance:h,threshold:v,findAllMatches:p,minMatchCharLength:m,includeMatches:a,ignoreLocation:f}),r=i.isMatch,w=i.score,c=i.indices;r&&(s=!0),u+=w,r&&c&&(o=[].concat(d(o),d(c)))}),i={isMatch:s,score:s?u/this.chunks.length:1},s&&a&&(i.indices=o),i}}]),s}(),i=function(){function e(n){t(this,e),this.pattern=n}return n(e,[{key:"search",value:function(){}}],[{key:"isMultiMatch",value:function(e){return B(e,this.multiRegex)}},{key:"isSingleMatch",value:function(e){return B(e,this.singleRegex)}}]),e}();function B(e,t){var n=e.match(t);return n?n[1]:null}var i,l,h,f,O,G=function(e){r(s,e);var o=c(s);function s(e){return t(this,s),o.call(this,e)}return n(s,[{key:"search",value:function(e){var t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"exact"}},{key:"multiRegex",get:function(){return/^="(.*)"$/}},{key:"singleRegex",get:function(){return/^=(.*)$/}}]),s}(i),Y=function(e){r(s,e);var o=c(s);function s(e){return t(this,s),o.call(this,e)}return n(s,[{key:"search",value:function(e){var t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"$/}},{key:"singleRegex",get:function(){return/^!(.*)$/}}]),s}(i),ne=function(e){r(s,e);var o=c(s);function s(e){return t(this,s),o.call(this,e)}return n(s,[{key:"search",value:function(e){var t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"prefix-exact"}},{key:"multiRegex",get:function(){return/^\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^\^(.*)$/}}]),s}(i),U=function(e){r(s,e);var o=c(s);function s(e){return t(this,s),o.call(this,e)}return n(s,[{key:"search",value:function(e){var t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-prefix-exact"}},{key:"multiRegex",get:function(){return/^!\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^!\^(.*)$/}}]),s}(i),K=function(e){r(s,e);var o=c(s);function s(e){return t(this,s),o.call(this,e)}return n(s,[{key:"search",value:function(e){var t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}],[{key:"type",get:function(){return"suffix-exact"}},{key:"multiRegex",get:function(){return/^"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^(.*)\$$/}}]),s}(i),q=function(e){r(s,e);var o=c(s);function s(e){return t(this,s),o.call(this,e)}return n(s,[{key:"search",value:function(e){var t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-suffix-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^!(.*)\$$/}}]),s}(i),S=function(s){r(o,s);var i=c(o);function o(n){var f,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},h=s.location,g=void 0===h?e.location:h,l=s.threshold,p=void 0===l?e.threshold:l,u=s.distance,j=void 0===u?e.distance:u,a=s.includeMatches,_=void 0===a?e.includeMatches:a,d=s.findAllMatches,v=void 0===d?e.findAllMatches:d,m=s.minMatchCharLength,b=void 0===m?e.minMatchCharLength:m,r=s.isCaseSensitive,y=void 0===r?e.isCaseSensitive:r,c=s.ignoreLocation,w=void 0===c?e.ignoreLocation:c;return t(this,o),(f=i.call(this,n))._bitapSearch=new O(n,{location:g,threshold:p,distance:j,includeMatches:_,findAllMatches:v,minMatchCharLength:b,isCaseSensitive:y,ignoreLocation:w}),f}return n(o,[{key:"search",value:function(e){return this._bitapSearch.searchIn(e)}}],[{key:"type",get:function(){return"fuzzy"}},{key:"multiRegex",get:function(){return/^"(.*)"$/}},{key:"singleRegex",get:function(){return/^(.*)$/}}]),o}(i),V=function(e){r(s,e);var o=c(s);function s(e){return t(this,s),o.call(this,e)}return n(s,[{key:"search",value:function(e){for(var t,o,n=0,s=[],i=this.pattern.length;(t=e.indexOf(this.pattern,n))>-1;)n=t+i,s.push([t,n-1]);return o=!!s.length,{isMatch:o,score:o?0:1,indices:s}}}],[{key:"type",get:function(){return"include"}},{key:"multiRegex",get:function(){return/^'"(.*)"$/}},{key:"singleRegex",get:function(){return/^'(.*)$/}}]),s}(i),_=[G,V,ne,U,q,K,Y,S],H=_.length,Z=/ +(?=([^"]*"[^"]*")*[^"]*$)/;function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.split("|").map(function(e){for(var a,r,c,l,d=e.trim().split(Z).filter(function(e){return e&&!!e.trim()}),s=[],o=0,h=d.length;o<h;o+=1){for(var u=d[o],i=!1,n=-1;!i&&++n<H;)a=_[n],r=a.isMultiMatch(u),r&&(s.push(new a(r,t)),i=!0);if(!i)for(n=-1;++n<H;)if(c=_[n],l=c.isSingleMatch(u),l){s.push(new c(l,t));break}}return s})}var ee=new Set([S.type,V.type]),te=function(){function s(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.isCaseSensitive,r=void 0===a?e.isCaseSensitive:a,c=o.includeMatches,j=void 0===c?e.includeMatches:c,d=o.minMatchCharLength,v=void 0===d?e.minMatchCharLength:d,h=o.ignoreLocation,f=void 0===h?e.ignoreLocation:h,m=o.findAllMatches,p=void 0===m?e.findAllMatches:m,i=o.location,g=void 0===i?e.location:i,u=o.threshold,b=void 0===u?e.threshold:u,l=o.distance,y=void 0===l?e.distance:l;t(this,s),this.query=null,this.options={isCaseSensitive:r,includeMatches:j,minMatchCharLength:v,findAllMatches:p,ignoreLocation:f,location:g,threshold:b,distance:y},this.pattern=r?n:n.toLowerCase(),this.query=J(this.pattern,this.options)}return n(s,[{key:"searchIn",value:function(e){if(o=this.query,!o)return{isMatch:!1,score:1};u=this.options,l=u.includeMatches,e=u.isCaseSensitive?e:e.toLowerCase();for(var s,o,i,c,l,u,f,g,n=0,t=[],a=0,r=0,j=o.length;r<j;r+=1){i=o[r],t.length=0,n=0;for(s=0,f=i.length;s<f;s+=1){var m=i[s],h=m.search(e),v=h.isMatch,p=h.indices,b=h.score;if(!v){a=0,n=0,t.length=0;break}n+=1,a+=b,l&&(g=m.constructor.type,ee.has(g)?t=[].concat(d(t),d(p)):t.push(p))}if(n)return c={isMatch:!0,score:a/n},l&&(c.indices=t),c}return{isMatch:!1,score:1}}}],[{key:"condition",value:function(e,t){return t.useExtendedSearch}}]),s}(),m=[];function b(e,t){for(var s,n=0,o=m.length;n<o;n+=1)if(s=m[n],s.condition(e,t))return new s(e,t);return new O(e,t)}var j="$and",ie="$or",N="$path",re="$val",E=function(e){return!!e[j]||!!e[ie]},le=function(e){return!!e[N]},de=function(e){return!o(e)&&A(e)&&!E(e)},T=function(e){return x({},j,Object.keys(e).map(function(t){return x({},t,e[t])}))};function he(t,n){var s=n.ignoreFieldNorm,o=void 0===s?e.ignoreFieldNorm:s;t.forEach(function(e){var t=1;e.matches.forEach(function(e){var n=e.key,a=e.norm,s=e.score,i=n?n.weight:null;t*=Math.pow(0===s&&i?Number.EPSILON:s,(i||1)*(o?1:a))}),e.score=t})}function me(e,t){var n=e.matches;t.matches=[],s(n)&&n.forEach(function(e){if(s(e.indices)&&e.indices.length){var n={indices:e.indices,value:e.value};e.key&&(n.key=e.key.src),e.idx>-1&&(n.refIndex=e.idx),t.matches.push(n)}})}function fe(e,t){t.score=e.score}function pe(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.includeMatches,r=void 0===i?e.includeMatches:i,a=o.includeScore,c=void 0===a?e.includeScore:a,s=[];return r&&s.push(me),c&&s.push(fe),t.map(function(e){var t=e.idx,o={item:n[t],refIndex:t};return s.length&&s.forEach(function(t){t(e,o)}),o})}return h=function(){function i(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;t(this,i),this.options=u(u({},e),s),this.options.useExtendedSearch,this._keyStore=new ae(this.options.keys),this.setCollection(n,o)}return n(i,[{key:"setCollection",value:function(e,t){if(this._docs=e,t&&!(t instanceof f))throw new Error("Incorrect 'index' type");this._myIndex=t||D(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}},{key:"add",value:function(e){s(e)&&(this._docs.push(e),this._myIndex.add(e))}},{key:"remove",value:function(){for(var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1},n=[],e=0,s=this._docs.length;e<s;e+=1)t=this._docs[e],o(t,e)&&(this.removeAt(e),e-=1,s-=1,n.push(t));return n}},{key:"removeAt",value:function(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}},{key:"getIndex",value:function(){return this._myIndex}},{key:"search",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.limit,s=void 0===o?-1:o,t=this.options,r=t.includeMatches,c=t.includeScore,l=t.shouldSort,d=t.sortFn,u=t.ignoreFieldNorm,n=a(e)?a(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return he(n,{ignoreFieldNorm:u}),l&&n.sort(d),L(s)&&s>-1&&(n=n.slice(0,s)),pe(n,this._docs,{includeMatches:r,includeScore:c})}},{key:"_searchStringList",value:function(e){var n=b(e,this.options),o=this._myIndex.records,t=[];return o.forEach(function(e){var o=e.v,a=e.i,r=e.n;if(s(o)){var i=n.searchIn(o),c=i.isMatch,l=i.score,d=i.indices;c&&t.push({item:o,idx:a,matches:[{score:l,value:o,norm:r,indices:d}]})}}),t}},{key:"_searchLogical",value:function(e){var n=this,r=function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).auto,s=void 0===n||n,i=function e(n){var r,c,d,u,i=Object.keys(n),l=le(n);if(!l&&i.length>1&&!E(n))return e(T(n));if(de(n)){if(r=l?n[N]:i[0],c=l?n[re]:n[r],!a(c))throw new Error(X(r));return d={keyId:C(r),pattern:c},s&&(d.searcher=b(c,t)),d}return u={children:[],operator:i[0]},i.forEach(function(t){var s=n[t];o(s)&&s.forEach(function(t){u.children.push(e(t))})}),u};return E(e)||(e=T(e)),i(e)}(e,this.options),c=function e(t,s,o){if(!t.children){var c,l=t.keyId,u=t.searcher,i=n._findMatches({key:n._keyStore.get(l),value:n._myIndex.getValueForItemAtKeyId(s,l),searcher:u});return i&&i.length?[{idx:o,item:s,matches:i}]:[]}for(var a=[],r=0,h=t.children.length;r<h;r+=1)if(c=e(t.children[r],s,o),c.length)a.push.apply(a,d(c));else if(t.operator===j)return[];return a},l=this._myIndex.records,t={},i=[];return l.forEach(function(e){var a,o=e.$,n=e.i;s(o)&&(a=c(r,o,n),a.length&&(t[n]||(t[n]={idx:n,item:o,matches:[]},i.push(t[n])),a.forEach(function(e){var s,o=e.matches;(s=t[n].matches).push.apply(s,d(o))})))}),i}},{key:"_searchObjectList",value:function(e){var o=this,i=b(e,this.options),t=this._myIndex,a=t.keys,r=t.records,n=[];return r.forEach(function(e){var t,r=e.$,c=e.i;s(r)&&(t=[],a.forEach(function(e,n){t.push.apply(t,d(o._findMatches({key:e,value:r[n],searcher:i})))}),t.length&&n.push({idx:c,item:r,matches:t}))}),n}},{key:"_findMatches",value:function(e){var a=e.key,t=e.value,r=e.searcher;if(!s(t))return[];if(n=[],o(t))t.forEach(function(e){var t=e.v,i=e.i,c=e.n;if(s(t)){var o=r.searchIn(t),l=o.isMatch,d=o.score,u=o.indices;l&&n.push({score:d,key:a,value:t,idx:i,norm:c,indices:u})}});else{var n,c=t.v,l=t.n,i=r.searchIn(c),d=i.isMatch,u=i.score,h=i.indices;d&&n.push({score:u,key:a,value:c,norm:l,indices:h})}return n}}]),i}(),h.version="6.5.3",h.createIndex=D,h.parseIndex=function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=s.getFn,a=void 0===o?e.getFn:o,i=s.fieldNormWeight,r=void 0===i?e.fieldNormWeight:i,c=t.keys,l=t.records,n=new f({getFn:a,fieldNormWeight:r});return n.setKeys(c),n.setIndexRecords(l),n},h.config=e,function(){m.push.apply(m,arguments)}(te),h},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Fuse=t();var e,t,fuse,showButton=document.getElementById("search-button"),hideButton=document.getElementById("close-search-button"),wrapper=document.getElementById("search-wrapper"),modal=document.getElementById("search-modal"),input=document.getElementById("search-query"),output=document.getElementById("search-results"),first=output.firstChild,last=output.lastChild,searchVisible=!1,indexed=!1,hasResults=!1;showButton.addEventListener("click",displaySearch),hideButton.addEventListener("click",hideSearch),wrapper.addEventListener("click",hideSearch),modal.addEventListener("click",function(e){return e.stopPropagation(),e.stopImmediatePropagation(),!1}),document.addEventListener("keydown",function(e){e.key=="/"&&(searchVisible||(e.preventDefault(),displaySearch())),e.key=="Escape"&&hideSearch(),e.key=="ArrowDown"&&searchVisible&&hasResults&&(e.preventDefault(),document.activeElement==input?first.focus():document.activeElement==last?last.focus():document.activeElement.parentElement.nextSibling.firstElementChild.focus()),e.key=="ArrowUp"&&searchVisible&&hasResults&&(e.preventDefault(),document.activeElement==input?input.focus():document.activeElement==first?input.focus():document.activeElement.parentElement.previousSibling.firstElementChild.focus())}),input.onkeyup=function(){executeQuery(this.value)};function displaySearch(){indexed||buildIndex(),searchVisible||(document.body.style.overflow="hidden",wrapper.style.visibility="visible",input.focus(),searchVisible=!0)}function hideSearch(){searchVisible&&(document.body.style.overflow="visible",wrapper.style.visibility="hidden",input.value="",output.innerHTML="",document.activeElement.blur(),searchVisible=!1)}function fetchJSON(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState===4&&n.status===200){var e=JSON.parse(n.responseText);t&&t(e)}},n.open("GET",e),n.send()}function buildIndex(){var e=wrapper.getAttribute("data-url");fetchJSON(e+"index.json",function(e){var t={shouldSort:!0,ignoreLocation:!0,threshold:0,includeMatches:!0,keys:[{name:"title",weight:.8},{name:"section",weight:.2},{name:"summary",weight:.6},{name:"content",weight:.4}]};fuse=new Fuse(e,t),indexed=!0})}function executeQuery(e){let n=fuse.search(e),t="";n.length>0?(n.forEach(function(e){t=t+`<li class="mb-2">
          <a class="flex items-center px-3 py-2 rounded-md appearance-none bg-neutral-100 dark:bg-neutral-700 focus:bg-primary-100 hover:bg-primary-100 dark:hover:bg-primary-900 dark:focus:bg-primary-900 focus:outline-dotted focus:outline-transparent focus:outline-2" href="${e.item.permalink}" tabindex="0">
            <div class="grow">
              <div class="-mb-1 text-lg font-bold">${e.item.title}</div>
              <div class="text-sm text-neutral-500 dark:text-neutral-400">${e.item.section}<span class="px-2 text-primary-500">&middot;</span>${e.item.date}</span></div>
              <div class="text-sm italic">${e.item.summary}</div>
            </div>
            <div class="ml-2 ltr:block rtl:hidden text-neutral-500">&rarr;</div>
            <div class="mr-2 ltr:hidden rtl:block text-neutral-500">&larr;</div>
          </a>
        </li>`}),hasResults=!0):(t="",hasResults=!1),output.innerHTML=t,n.length>0&&(first=output.firstChild.firstElementChild,last=output.lastChild.firstElementChild)}