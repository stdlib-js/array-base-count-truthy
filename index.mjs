// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-typed-array@v0.1.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-booleanarray@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex@v0.1.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.2-esm/index.mjs";function a(r){var e,s;for(e=0,s=0;s<r.length;s++)r[s]&&(e+=1);return e}function d(d){return s(d)?e(d)?a(i(d,0)):r(d)?function(r){var e,s,t;for(e=n(r,0),s=0,t=0;t<e.length;t+=2)(e[t]||e[t+1])&&(s+=1);return s}(d):function(r){var e,s,n;for(e=t(r),s=0,n=0;n<r.length;n++)e(r,n)&&(s+=1);return s}(d):a(d)}export{d as default};
//# sourceMappingURL=index.mjs.map
