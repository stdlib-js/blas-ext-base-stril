"use strict";var x=function(u,e){return function(){try{return e||u((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var b=x(function(Z,w){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(u,e,n,f,m,t,g,i,o,l,q){var s,v,r,a;if(s=g,v=q,O([m,t])){for(a=0;a<u;a++){for(r=0;r<=T(a+n,e-1);r++)i[v+r*l]=f[s+r*t];s+=m,v+=o}return i}for(a=0;a<e;a++){for(r=S(0,a-n);r<u;r++)i[v+r*o]=f[s+r*m];s+=t,v+=l}return i}w.exports=z
});var y=x(function($,d){
var C=require('@stdlib/blas-base-layout-resolve-str/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),p=require('@stdlib/math-base-special-fast-max/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),H=b();function I(u,e,n,f,m,t,g,i){var o,l,q,s,v,r,a;if(a=C(u),a===null)throw new TypeError(c('38JFx',u));if(o=G(a),o?r=n:r=e,t<p(1,r))throw new RangeError(c('38JJL',r,t));if(i<p(1,r))throw new RangeError(c('38JGM',r,i));return o?(l=t,q=1,s=i,v=1):(l=1,q=t,s=1,v=i),H(e,n,f,m,l,q,0,g,s,v,0)}d.exports=I
});var j=x(function(k,R){
var J=b();function K(u,e,n,f,m,t,g,i,o,l,q){return J(u,e,n,f,m,t,g,i,o,l,q)}R.exports=K
});var _=x(function(N,V){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=y(),P=j();M(E,"ndarray",P);V.exports=E
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),W=require('@stdlib/assert-is-error/dist'),X=_(),h,F=U(Q(__dirname,"./native.js"));W(F)?h=X:h=F;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
