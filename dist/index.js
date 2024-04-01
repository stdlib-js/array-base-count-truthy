"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=a(function(y,n){
var o=require('@stdlib/array-base-assert-is-complex-typed-array/dist'),v=require('@stdlib/array-base-assert-is-accessor-array/dist'),s=require('@stdlib/array-base-resolve-getter/dist'),c=require('@stdlib/strided-base-reinterpret-complex/dist');function f(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]&&(e+=1);return e}function l(r){var e,t,i;for(e=s(r),t=0,i=0;i<r.length;i++)e(r,i)&&(t+=1);return t}function p(r){var e,t,i;for(e=c(r,0),t=0,i=0;i<e.length;i+=2)(e[i]||e[i+1])&&(t+=1);return t}function q(r){return v(r)?o(r)?p(r):l(r):f(r)}n.exports=q
});var g=u();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
