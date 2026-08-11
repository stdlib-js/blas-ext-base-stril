"use strict";var x=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var b=x(function(Z,w){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(i,e,u,f,q,t,g,a,v,o,l){var s,n,r,m;if(s=g,n=l,O([q,t])){for(m=0;m<i;m++){for(r=0;r<=T(m+u,e-1);r++)a[n+r*o]=f[s+r*t];s+=q,n+=v}return a}for(m=0;m<e;m++){for(r=S(0,m-u);r<i;r++)a[n+r*v]=f[s+r*q];s+=t,n+=o}return a}w.exports=z
});var R=x(function($,y){
var C=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),p=require('@stdlib/math-base-special-fast-max/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),H=b();function I(i,e,u,f,q,t,g,a){var v,o,l,s,n,r;if(!C(i))throw new TypeError(c('nullFx',i));if(v=G(i),v?r=u:r=e,t<p(1,r))throw new RangeError(c('nullJL',r,t));if(a<p(1,r))throw new RangeError(c('nullGM',r,a));return v?(o=t,l=1,s=a,n=1):(o=1,l=t,s=1,n=a),H(e,u,f,q,o,l,0,g,s,n,0)}y.exports=I
});var j=x(function(k,d){
var J=b();function K(i,e,u,f,q,t,g,a,v,o,l){return J(i,e,u,f,q,t,g,a,v,o,l)}d.exports=K
});var _=x(function(N,V){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=R(),P=j();M(E,"ndarray",P);V.exports=E
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),W=require('@stdlib/assert-is-error/dist'),X=_(),h,F=U(Q(__dirname,"./native.js"));W(F)?h=X:h=F;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
