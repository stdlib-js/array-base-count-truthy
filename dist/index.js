"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=o(function(A,a){
var v=require('@stdlib/array-base-assert-is-complex-typed-array/dist'),s=require('@stdlib/array-base-assert-is-booleanarray/dist'),f=require('@stdlib/array-base-assert-is-accessor-array/dist'),c=require('@stdlib/array-base-resolve-getter/dist'),l=require('@stdlib/strided-base-reinterpret-complex/dist'),p=require('@stdlib/strided-base-reinterpret-boolean/dist');function n(r){var e,i;for(e=0,i=0;i<r.length;i++)r[i]&&(e+=1);return e}function q(r){var e,i,t;for(e=c(r),i=0,t=0;t<r.length;t++)e(r,t)&&(i+=1);return i}function y(r){var e,i,t;for(e=l(r,0),i=0,t=0;t<e.length;t+=2)(e[t]||e[t+1])&&(i+=1);return i}function g(r){return f(r)?s(r)?n(p(r,0)):v(r)?y(r):q(r):n(r)}a.exports=g
});var h=u();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
