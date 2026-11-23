var Tm=Object.defineProperty;var bm=(r,t,e)=>t in r?Tm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Et=(r,t,e)=>bm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cu="169",wm=0,xh=1,Am=2,ud=1,Cm=2,Ci=3,ur=0,En=1,Li=2,rr=0,Ts=1,Sh=2,Mh=3,yh=4,Rm=5,Lr=100,Pm=101,Lm=102,Dm=103,Im=104,Um=200,Nm=201,Om=202,Fm=203,Sc=204,Mc=205,Bm=206,zm=207,km=208,Hm=209,Vm=210,Gm=211,Wm=212,Xm=213,Ym=214,yc=0,Ec=1,Tc=2,Us=3,bc=4,wc=5,Ac=6,Cc=7,hd=0,qm=1,$m=2,sr=0,Km=1,Zm=2,Jm=3,fd=4,jm=5,Qm=6,t_=7,dd=300,Ns=301,Os=302,Rc=303,Pc=304,_l=306,Lc=1e3,Ir=1001,Dc=1002,Qn=1003,e_=1004,Qo=1005,ci=1006,wl=1007,Ur=1008,Fi=1009,pd=1010,md=1011,Io=1012,Ru=1013,Wr=1014,Ii=1015,qo=1016,Pu=1017,Lu=1018,Fs=1020,_d=35902,gd=1021,vd=1022,hi=1023,xd=1024,Sd=1025,bs=1026,Bs=1027,Md=1028,Du=1029,yd=1030,Iu=1031,Uu=1033,Na=33776,Oa=33777,Fa=33778,Ba=33779,Ic=35840,Uc=35841,Nc=35842,Oc=35843,Fc=36196,Bc=37492,zc=37496,kc=37808,Hc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,Yc=37814,qc=37815,$c=37816,Kc=37817,Zc=37818,Jc=37819,jc=37820,Qc=37821,za=36492,tu=36494,eu=36495,Ed=36283,nu=36284,iu=36285,ru=36286,n_=3200,i_=3201,Td=0,r_=1,ji="",li="srgb",_r="srgb-linear",Nu="display-p3",gl="display-p3-linear",Ja="linear",Te="srgb",ja="rec709",Qa="p3",Jr=7680,Eh=519,s_=512,o_=513,a_=514,bd=515,l_=516,c_=517,u_=518,h_=519,Th=35044,bh="300 es",Ui=2e3,tl=2001;class Ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wh=1234567;const go=Math.PI/180,Uo=180/Math.PI;function qs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Ze(r,t,e){return Math.max(t,Math.min(e,r))}function Ou(r,t){return(r%t+t)%t}function f_(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function d_(r,t,e){return r!==t?(e-r)/(t-r):0}function vo(r,t,e){return(1-e)*r+e*t}function p_(r,t,e,n){return vo(r,t,1-Math.exp(-e*n))}function m_(r,t=1){return t-Math.abs(Ou(r,t*2)-t)}function __(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function g_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function v_(r,t){return r+Math.floor(Math.random()*(t-r+1))}function x_(r,t){return r+Math.random()*(t-r)}function S_(r){return r*(.5-Math.random())}function M_(r){r!==void 0&&(wh=r);let t=wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function y_(r){return r*go}function E_(r){return r*Uo}function T_(r){return(r&r-1)===0&&r!==0}function b_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function w_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function A_(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),d=s((t-n)/2),h=o((t-n)/2),f=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*d,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _s(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Zs={DEG2RAD:go,RAD2DEG:Uo,generateUUID:qs,clamp:Ze,euclideanModulo:Ou,mapLinear:f_,inverseLerp:d_,lerp:vo,damp:p_,pingpong:m_,smoothstep:__,smootherstep:g_,randInt:v_,randFloat:x_,randFloatSpread:S_,seededRandom:M_,degToRad:y_,radToDeg:E_,isPowerOfTwo:T_,ceilPowerOfTwo:b_,floorPowerOfTwo:w_,setQuaternionFromProperEuler:A_,normalize:hn,denormalize:_s};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,s,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],x=i[4],y=i[7],C=i[2],w=i[5],E=i[8];return s[0]=o*g+a*S+l*C,s[3]=o*p+a*x+l*w,s[6]=o*m+a*y+l*E,s[1]=c*g+u*S+d*C,s[4]=c*p+u*x+d*w,s[7]=c*m+u*y+d*E,s[2]=h*g+f*S+_*C,s[5]=h*p+f*x+_*w,s[8]=h*m+f*y+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,_=e*d+n*h+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Al.makeScale(t,e)),this}rotate(t){return this.premultiply(Al.makeRotation(-t)),this}translate(t,e){return this.premultiply(Al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new Zt;function wd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function el(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function C_(){const r=el("canvas");return r.style.display="block",r}const Ah={};function ka(r){r in Ah||(Ah[r]=!0,console.warn(r))}function R_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function P_(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function L_(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ch=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[_r]:{transfer:Ja,primaries:ja,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[li]:{transfer:Te,primaries:ja,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[gl]:{transfer:Ja,primaries:Qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Rh),fromReference:r=>r.applyMatrix3(Ch)},[Nu]:{transfer:Te,primaries:Qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Rh),fromReference:r=>r.applyMatrix3(Ch).convertLinearToSRGB()}},D_=new Set([_r,gl]),de={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!D_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Js[t].toReference,i=Js[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Js[r].primaries},getTransfer:function(r){return r===ji?Ja:Js[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(Js[t].luminanceCoefficients)}};function ws(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let jr;class I_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jr===void 0&&(jr=el("canvas")),jr.width=t.width,jr.height=t.height;const n=jr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=el("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ws(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ws(e[n]/255)*255):e[n]=ws(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let U_=0;class Ad{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Rl(i[o].image)):s.push(Rl(i[o]))}else s=Rl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Rl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?I_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N_=0;class xn extends Ys{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,n=Ir,i=Ir,s=ci,o=Ur,a=hi,l=Fi,c=xn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=qs(),this.name="",this.source=new Ad(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lc:t.x=t.x-Math.floor(t.x);break;case Ir:t.x=t.x<0?0:1;break;case Dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lc:t.y=t.y-Math.floor(t.y);break;case Ir:t.y=t.y<0?0:1;break;case Dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=dd;xn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(f+1)/2,C=(m+1)/2,w=(u+h)/4,E=(d+g)/4,P=(_+p)/4;return x>y&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=E/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=P/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(d-g)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O_ extends Ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ad(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends O_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cd extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class F_ extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==h||c!==f||u!==_){let p=1-a;const m=l*h+c*f+u*_+d*g,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,m*S);p=Math.sin(p*w)/C,a=Math.sin(a*w)/C}const y=a*S;if(l=l*p+h*y,c=c*p+f*y,u=u*p+_*y,d=d*p+g*y,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+u*d+l*f-c*h,t[e+1]=l*_+u*h+c*d-a*f,t[e+2]=c*_+u*f+a*h-l*d,t[e+3]=u*_-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pl.copy(this).projectOnVector(t),this.sub(Pl)}reflect(t){return this.sub(Pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new O,Ph=new $o;class Ko{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),ea.subVectors(this.max,js),Qr.subVectors(t.a,js),ts.subVectors(t.b,js),es.subVectors(t.c,js),Vi.subVectors(ts,Qr),Gi.subVectors(es,ts),vr.subVectors(Qr,es);let e=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-vr.z,vr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,vr.z,0,-vr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-vr.y,vr.x,0];return!Ll(e,Qr,ts,es,ea)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,Qr,ts,es,ea))?!1:(na.crossVectors(Vi,Gi),e=[na.x,na.y,na.z],Ll(e,Qr,ts,es,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new O,new O,new O,new O,new O,new O,new O,new O],ri=new O,ta=new Ko,Qr=new O,ts=new O,es=new O,Vi=new O,Gi=new O,vr=new O,js=new O,ea=new O,na=new O,xr=new O;function Ll(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){xr.fromArray(r,s);const a=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),l=t.dot(xr),c=e.dot(xr),u=n.dot(xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const B_=new Ko,Qs=new O,Dl=new O;class Fu{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):B_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Dl)),this.expandByPoint(Qs.copy(t.center).sub(Dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new O,Il=new O,ia=new O,Wi=new O,Ul=new O,ra=new O,Nl=new O;class z_{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Il.copy(t).add(e).multiplyScalar(.5),ia.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(Il);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ia),a=Wi.dot(this.direction),l=-Wi.dot(ia),c=Wi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*l-a,h=o*a-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Il).addScaledVector(ia,h),f}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,i,s){Ul.subVectors(e,t),ra.subVectors(n,t),Nl.crossVectors(Ul,ra);let o=this.direction.dot(Nl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,t);const l=a*this.direction.dot(ra.crossVectors(Wi,ra));if(l<0)return null;const c=a*this.direction.dot(Ul.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(Nl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,i,s,o,a,l,c,u,d,h,f,_,g,p){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,d,h,f,_,g,p)}set(t,e,n,i,s,o,a,l,c,u,d,h,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,_=a*u,g=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=h-g*c,e[9]=-a*l,e[2]=g-h*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,_=c*u,g=c*d;e[0]=h+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,_=c*u,g=c*d;e[0]=h-g*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=g-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,_=a*u,g=a*d;e[0]=l*u,e[4]=_*c-f,e[8]=h*c+g,e[1]=l*d,e[5]=g*c+h,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-h*d,e[8]=_*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+_,e[10]=h-g*d}else if(t.order==="XZY"){const h=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+g,e[5]=o*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*u,e[10]=g*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k_,t,H_)}lookAt(t,e,n){const i=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Xi.crossVectors(n,Ln),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Xi.crossVectors(n,Ln)),Xi.normalize(),sa.crossVectors(Ln,Xi),i[0]=Xi.x,i[4]=sa.x,i[8]=Ln.x,i[1]=Xi.y,i[5]=sa.y,i[9]=Ln.y,i[2]=Xi.z,i[6]=sa.z,i[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],x=n[7],y=n[11],C=n[15],w=i[0],E=i[4],P=i[8],B=i[12],v=i[1],T=i[5],N=i[9],k=i[13],X=i[2],K=i[6],G=i[10],Y=i[14],W=i[3],rt=i[7],R=i[11],at=i[15];return s[0]=o*w+a*v+l*X+c*W,s[4]=o*E+a*T+l*K+c*rt,s[8]=o*P+a*N+l*G+c*R,s[12]=o*B+a*k+l*Y+c*at,s[1]=u*w+d*v+h*X+f*W,s[5]=u*E+d*T+h*K+f*rt,s[9]=u*P+d*N+h*G+f*R,s[13]=u*B+d*k+h*Y+f*at,s[2]=_*w+g*v+p*X+m*W,s[6]=_*E+g*T+p*K+m*rt,s[10]=_*P+g*N+p*G+m*R,s[14]=_*B+g*k+p*Y+m*at,s[3]=S*w+x*v+y*X+C*W,s[7]=S*E+x*T+y*K+C*rt,s[11]=S*P+x*N+y*G+C*R,s[15]=S*B+x*k+y*Y+C*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*f-n*l*f)+g*(+e*l*f-e*c*h+s*o*h-i*o*f+i*c*u-s*l*u)+p*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-e*l*d+e*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],S=d*p*c-g*h*c+g*l*f-a*p*f-d*l*m+a*h*m,x=_*h*c-u*p*c-_*l*f+o*p*f+u*l*m-o*h*m,y=u*g*c-_*d*c+_*a*f-o*g*f-u*a*m+o*d*m,C=_*d*l-u*g*l-_*a*h+o*g*h+u*a*p-o*d*p,w=e*S+n*x+i*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=S*E,t[1]=(g*h*s-d*p*s-g*i*f+n*p*f+d*i*m-n*h*m)*E,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*E,t[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*f-n*l*f)*E,t[4]=x*E,t[5]=(u*p*s-_*h*s+_*i*f-e*p*f-u*i*m+e*h*m)*E,t[6]=(_*l*s-o*p*s-_*i*c+e*p*c+o*i*m-e*l*m)*E,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*f+e*l*f)*E,t[8]=y*E,t[9]=(_*d*s-u*g*s-_*n*f+e*g*f+u*n*m-e*d*m)*E,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*E,t[11]=(u*a*s-o*d*s-u*n*c+e*d*c+o*n*f-e*a*f)*E,t[12]=C*E,t[13]=(u*g*i-_*d*i+_*n*h-e*g*h-u*n*p+e*d*p)*E,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*E,t[15]=(o*d*i-u*a*i+u*n*l-e*d*l-o*n*h+e*a*h)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,_=s*d,g=o*u,p=o*d,m=a*d,S=l*c,x=l*u,y=l*d,C=n.x,w=n.y,E=n.z;return i[0]=(1-(g+m))*C,i[1]=(f+y)*C,i[2]=(_-x)*C,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(h+m))*w,i[6]=(p+S)*w,i[7]=0,i[8]=(_+x)*E,i[9]=(p-S)*E,i[10]=(1-(h+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const o=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],si.copy(this);const c=1/s,u=1/o,d=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,e.setFromRotationMatrix(si),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Ui){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let f,_;if(a===Ui)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===tl)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ui){const l=this.elements,c=1/(e-t),u=1/(n-i),d=1/(o-s),h=(e+t)*c,f=(n+i)*u;let _,g;if(a===Ui)_=(o+s)*d,g=-2*d;else if(a===tl)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new O,si=new Ce,k_=new O(0,0,0),H_=new O(1,1,1),Xi=new O,sa=new O,Ln=new O,Lh=new Ce,Dh=new $o;class Si{constructor(t=0,e=0,n=0,i=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Rd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let V_=0;const Ih=new O,is=new $o,bi=new Ce,oa=new O,to=new O,G_=new O,W_=new $o,Uh=new O(1,0,0),Nh=new O(0,1,0),Oh=new O(0,0,1),Fh={type:"added"},X_={type:"removed"},rs={type:"childadded",child:null},Ol={type:"childremoved",child:null};class tn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new O,e=new Si,n=new $o,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Zt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oa.copy(t):oa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(to,oa,this.up):bi.lookAt(oa,to,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),is.setFromRotationMatrix(bi),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(X_),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,G_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,W_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}tn.DEFAULT_UP=new O(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new O,wi=new O,Fl=new O,Ai=new O,ss=new O,os=new O,Bh=new O,Bl=new O,zl=new O,kl=new O,Hl=new ve,Vl=new ve,Gl=new ve;class ui{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),oi.subVectors(t,e),i.cross(oi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){oi.subVectors(i,e),wi.subVectors(n,e),Fl.subVectors(t,e);const o=oi.dot(oi),a=oi.dot(wi),l=oi.dot(Fl),c=wi.dot(wi),u=wi.dot(Fl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Hl.setScalar(0),Vl.setScalar(0),Gl.setScalar(0),Hl.fromBufferAttribute(t,e),Vl.fromBufferAttribute(t,n),Gl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Hl,s.x),o.addScaledVector(Vl,s.y),o.addScaledVector(Gl,s.z),o}static isFrontFacing(t,e,n,i){return oi.subVectors(n,e),wi.subVectors(t,e),oi.cross(wi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),oi.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ui.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ui.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ss.subVectors(i,n),os.subVectors(s,n),Bl.subVectors(t,n);const l=ss.dot(Bl),c=os.dot(Bl);if(l<=0&&c<=0)return e.copy(n);zl.subVectors(t,i);const u=ss.dot(zl),d=os.dot(zl);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ss,o);kl.subVectors(t,s);const f=ss.dot(kl),_=os.dot(kl);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(os,a);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return Bh.subVectors(s,i),a=(d-u)/(d-u+(f-_)),e.copy(i).addScaledVector(Bh,a);const m=1/(p+g+h);return o=g*m,a=h*m,e.copy(n).addScaledVector(ss,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Wl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ue{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=Ou(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Wl(o,s,t+1/3),this.g=Wl(o,s,t),this.b=Wl(o,s,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=li){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=li){const n=Pd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=Cl(t.r),this.g=Cl(t.g),this.b=Cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return de.fromWorkingColorSpace(rn.copy(this),t),Math.round(Ze(rn.r*255,0,255))*65536+Math.round(Ze(rn.g*255,0,255))*256+Math.round(Ze(rn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=li){de.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,i=rn.b;return t!==li?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(aa);const n=vo(Yi.h,aa.h,e),i=vo(Yi.s,aa.s,e),s=vo(Yi.l,aa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ue;ue.NAMES=Pd;let Y_=0;class Zo extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Ts,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=Mc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==Mc&&(n.blendDst=this.blendDst),this.blendEquation!==Lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bu extends Zo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new O,la=new wt;class vi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),t}}class Ld extends vi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dd extends vi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Hn extends vi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let q_=0;const qn=new Ce,Xl=new tn,as=new O,Dn=new Ko,eo=new Ko,Ye=new O;class ki extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wd(t)?Dd:Ld)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return Xl.lookAt(t),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Hn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Dn.min,eo.min),Dn.expandByPoint(Ye),Ye.addVectors(Dn.max,eo.max),Dn.expandByPoint(Ye)):(Dn.expandByPoint(eo.min),Dn.expandByPoint(eo.max))}Dn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ye.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),Ye.add(as)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new O,l[P]=new O;const c=new O,u=new O,d=new O,h=new wt,f=new wt,_=new wt,g=new O,p=new O;function m(P,B,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,B),d.fromBufferAttribute(n,v),h.fromBufferAttribute(s,P),f.fromBufferAttribute(s,B),_.fromBufferAttribute(s,v),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const T=1/(f.x*_.y-_.x*f.y);isFinite(T)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(T),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(T),a[P].add(g),a[B].add(g),a[v].add(g),l[P].add(p),l[B].add(p),l[v].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,B=S.length;P<B;++P){const v=S[P],T=v.start,N=v.count;for(let k=T,X=T+N;k<X;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new O,y=new O,C=new O,w=new O;function E(P){C.fromBufferAttribute(i,P),w.copy(C);const B=a[P];x.copy(B),x.sub(C.multiplyScalar(C.dot(B))).normalize(),y.crossVectors(w,B);const T=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,T)}for(let P=0,B=S.length;P<B;++P){const v=S[P],T=v.start,N=v.count;for(let k=T,X=T+N;k<X;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(t)for(let h=0,f=t.count;h<f;h+=3){const _=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[f++]}return new vi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ki,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new Ce,Sr=new z_,ca=new Fu,kh=new O,ua=new O,ha=new O,fa=new O,Yl=new O,da=new O,Hh=new O,pa=new O;class gn extends tn{constructor(t=new ki,e=new Bu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Yl.fromBufferAttribute(d,t),o?da.addScaledVector(Yl,u):da.addScaledVector(Yl.sub(e),u))}e.add(da)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),Sr.copy(t.ray).recast(t.near),!(ca.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(ca,kh)===null||Sr.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(zh.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],S=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,C=x;y<C;y+=3){const w=a.getX(y),E=a.getX(y+1),P=a.getX(y+2);i=ma(this,m,t,n,c,u,d,w,E,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const S=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=ma(this,o,t,n,c,u,d,S,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],S=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,C=x;y<C;y+=3){const w=y,E=y+1,P=y+2;i=ma(this,m,t,n,c,u,d,w,E,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const S=p,x=p+1,y=p+2;i=ma(this,o,t,n,c,u,d,S,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function $_(r,t,e,n,i,s,o,a){let l;if(t.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ur,a),l===null)return null;pa.copy(a),pa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(pa);return c<e.near||c>e.far?null:{distance:c,point:pa.clone(),object:r}}function ma(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ua),r.getVertexPosition(l,ha),r.getVertexPosition(c,fa);const u=$_(r,t,e,n,ua,ha,fa,Hh);if(u){const d=new O;ui.getBarycoord(Hh,ua,ha,fa,d),i&&(u.uv=ui.getInterpolatedAttribute(i,a,l,c,d,new wt)),s&&(u.uv1=ui.getInterpolatedAttribute(s,a,l,c,d,new wt)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};ui.getNormal(ua,ha,fa,h.normal),u.face=h,u.barycoord=d}return u}class $s extends ki{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(d,2));function _(g,p,m,S,x,y,C,w,E,P,B){const v=y/E,T=C/P,N=y/2,k=C/2,X=w/2,K=E+1,G=P+1;let Y=0,W=0;const rt=new O;for(let R=0;R<G;R++){const at=R*T-k;for(let zt=0;zt<K;zt++){const Xt=zt*v-N;rt[g]=Xt*S,rt[p]=at*x,rt[m]=X,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[p]=0,rt[m]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),d.push(zt/E),d.push(1-R/P),Y+=1}}for(let R=0;R<P;R++)for(let at=0;at<E;at++){const zt=h+at+K*R,Xt=h+at+K*(R+1),q=h+(at+1)+K*(R+1),Q=h+(at+1)+K*R;l.push(zt,Xt,Q),l.push(Xt,q,Q),W+=6}a.addGroup(f,W,B),f+=W,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function dn(r){const t={};for(let e=0;e<r.length;e++){const n=zs(r[e]);for(const i in n)t[i]=n[i]}return t}function K_(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Id(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Z_={clone:zs,merge:dn};var J_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Zo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=K_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ud extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new O,Vh=new wt,Gh=new wt;class On extends Ud{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,Vh,Gh),e.subVectors(Gh,Vh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(go*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class Q_ extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new On(ls,cs,t,e);i.layers=this.layers,this.add(i);const s=new On(ls,cs,t,e);s.layers=this.layers,this.add(s);const o=new On(ls,cs,t,e);o.layers=this.layers,this.add(o);const a=new On(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new On(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new On(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Nd extends xn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tg extends Xr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Nd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $s(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:rr});s.uniforms.tEquirect.value=e;const o=new gn(i,s),a=e.minFilter;return e.minFilter===Ur&&(e.minFilter=ci),new Q_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const ql=new O,eg=new O,ng=new Zt;class wr{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ql.subVectors(n,e).cross(eg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ql),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ng.getNormalMatrix(t),i=this.coplanarPoint(ql).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Fu,_a=new O;class zu{constructor(t=new wr,e=new wr,n=new wr,i=new wr,s=new wr,o=new wr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ui){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],S=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,h-c,p-f,y-m).normalize(),n[1].setComponents(l+s,h+c,p+f,y+m).normalize(),n[2].setComponents(l+o,h+u,p+_,y+S).normalize(),n[3].setComponents(l-o,h-u,p-_,y-S).normalize(),n[4].setComponents(l-a,h-d,p-g,y-x).normalize(),e===Ui)n[5].setComponents(l+a,h+d,p+g,y+x).normalize();else if(e===tl)n[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(_a.x=i.normal.x>0?t.max.x:t.min.x,_a.y=i.normal.y>0?t.max.y:t.min.y,_a.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_a)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ig(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Jo extends ki{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*h-o;for(let x=0;x<c;x++){const y=x*d-s;_.push(y,-S,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const x=S+c*m,y=S+c*(m+1),C=S+1+c*(m+1),w=S+1+c*m;f.push(x,y,w),f.push(y,C,w)}this.setIndex(f),this.setAttribute("position",new Hn(_,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.widthSegments,t.heightSegments)}}var rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ug=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ag=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ng=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,n0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,d0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:rg,alphahash_pars_fragment:sg,alphamap_fragment:og,alphamap_pars_fragment:ag,alphatest_fragment:lg,alphatest_pars_fragment:cg,aomap_fragment:ug,aomap_pars_fragment:hg,batching_pars_vertex:fg,batching_vertex:dg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:_g,iridescence_fragment:gg,bumpmap_pars_fragment:vg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:Mg,clipping_planes_vertex:yg,color_fragment:Eg,color_pars_fragment:Tg,color_pars_vertex:bg,color_vertex:wg,common:Ag,cube_uv_reflection_fragment:Cg,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Pg,displacementmap_vertex:Lg,emissivemap_fragment:Dg,emissivemap_pars_fragment:Ig,colorspace_fragment:Ug,colorspace_pars_fragment:Ng,envmap_fragment:Og,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Bg,envmap_pars_vertex:zg,envmap_physical_pars_fragment:Zg,envmap_vertex:kg,fog_vertex:Hg,fog_pars_vertex:Vg,fog_fragment:Gg,fog_pars_fragment:Wg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:Yg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:$g,lights_pars_begin:Kg,lights_toon_fragment:Jg,lights_toon_pars_fragment:jg,lights_phong_fragment:Qg,lights_phong_pars_fragment:t0,lights_physical_fragment:e0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:r0,lights_fragment_end:s0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:u0,map_pars_fragment:h0,map_particle_fragment:f0,map_particle_pars_fragment:d0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:_0,morphcolor_vertex:g0,morphnormal_vertex:v0,morphtarget_pars_vertex:x0,morphtarget_vertex:S0,normal_fragment_begin:M0,normal_fragment_maps:y0,normal_pars_fragment:E0,normal_pars_vertex:T0,normal_vertex:b0,normalmap_pars_fragment:w0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:P0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:I0,project_vertex:U0,dithering_fragment:N0,dithering_pars_fragment:O0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:k0,shadowmap_vertex:H0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:Y0,specularmap_fragment:q0,specularmap_pars_fragment:$0,tonemapping_fragment:K0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:j0,uv_pars_fragment:Q0,uv_pars_vertex:tv,uv_vertex:ev,worldpos_vertex:nv,background_vert:iv,background_frag:rv,backgroundCube_vert:sv,backgroundCube_frag:ov,cube_vert:av,cube_frag:lv,depth_vert:cv,depth_frag:uv,distanceRGBA_vert:hv,distanceRGBA_frag:fv,equirect_vert:dv,equirect_frag:pv,linedashed_vert:mv,linedashed_frag:_v,meshbasic_vert:gv,meshbasic_frag:vv,meshlambert_vert:xv,meshlambert_frag:Sv,meshmatcap_vert:Mv,meshmatcap_frag:yv,meshnormal_vert:Ev,meshnormal_frag:Tv,meshphong_vert:bv,meshphong_frag:wv,meshphysical_vert:Av,meshphysical_frag:Cv,meshtoon_vert:Rv,meshtoon_frag:Pv,points_vert:Lv,points_frag:Dv,shadow_vert:Iv,shadow_frag:Uv,sprite_vert:Nv,sprite_frag:Ov},mt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},pi={basic:{uniforms:dn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:dn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:dn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:dn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:dn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:dn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:dn([mt.points,mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:dn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:dn([mt.common,mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:dn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:dn([mt.sprite,mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:dn([mt.common,mt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:dn([mt.lights,mt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};pi.physical={uniforms:dn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const ga={r:0,b:0,g:0},yr=new Si,Fv=new Ce;function Bv(r,t,e,n,i,s,o){const a=new ue(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function g(S){let x=!1;const y=_(S);y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(S,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===_l)?(u===void 0&&(u=new gn(new $s(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:zs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),yr.copy(x.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(yr)),u.material.toneMapped=de.getTransfer(y.colorSpace)!==Te,(d!==y||h!==y.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,f=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new gn(new Jo(2,2),new hr({name:"BackgroundMaterial",uniforms:zs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=de.getTransfer(y.colorSpace)!==Te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,x){S.getRGB(ga,Id(r)),n.buffers.color.setClear(ga.r,ga.g,ga.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:g,addToRenderList:p}}function zv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(v,T,N,k,X){let K=!1;const G=d(k,N,T);s!==G&&(s=G,c(s.object)),K=f(v,k,N,X),K&&_(v,k,N,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(v,T,N,k),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function d(v,T,N){const k=N.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let K=X[T.id];K===void 0&&(K={},X[T.id]=K);let G=K[k];return G===void 0&&(G=h(l()),K[k]=G),G}function h(v){const T=[],N=[],k=[];for(let X=0;X<e;X++)T[X]=0,N[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:N,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,T,N,k){const X=s.attributes,K=T.attributes;let G=0;const Y=N.getAttributes();for(const W in Y)if(Y[W].location>=0){const R=X[W];let at=K[W];if(at===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(at=v.instanceColor)),R===void 0||R.attribute!==at||at&&R.data!==at.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function _(v,T,N,k){const X={},K=T.attributes;let G=0;const Y=N.getAttributes();for(const W in Y)if(Y[W].location>=0){let R=K[W];R===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(R=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(R=v.instanceColor));const at={};at.attribute=R,R&&R.data&&(at.data=R.data),X[W]=at,G++}s.attributes=X,s.attributesNum=G,s.index=k}function g(){const v=s.newAttributes;for(let T=0,N=v.length;T<N;T++)v[T]=0}function p(v){m(v,0)}function m(v,T){const N=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;N[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),X[v]!==T&&(r.vertexAttribDivisor(v,T),X[v]=T)}function S(){const v=s.newAttributes,T=s.enabledAttributes;for(let N=0,k=T.length;N<k;N++)T[N]!==v[N]&&(r.disableVertexAttribArray(N),T[N]=0)}function x(v,T,N,k,X,K,G){G===!0?r.vertexAttribIPointer(v,T,N,X,K):r.vertexAttribPointer(v,T,N,k,X,K)}function y(v,T,N,k){g();const X=k.attributes,K=N.getAttributes(),G=T.defaultAttributeValues;for(const Y in K){const W=K[Y];if(W.location>=0){let rt=X[Y];if(rt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const R=rt.normalized,at=rt.itemSize,zt=t.get(rt);if(zt===void 0)continue;const Xt=zt.buffer,q=zt.type,Q=zt.bytesPerElement,ft=q===r.INT||q===r.UNSIGNED_INT||rt.gpuType===Ru;if(rt.isInterleavedBufferAttribute){const ot=rt.data,At=ot.stride,yt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Wt=0;Wt<W.locationSize;Wt++)m(W.location+Wt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Wt=0;Wt<W.locationSize;Wt++)p(W.location+Wt);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let Wt=0;Wt<W.locationSize;Wt++)x(W.location+Wt,at/W.locationSize,q,R,At*Q,(yt+at/W.locationSize*Wt)*Q,ft)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)m(W.location+ot,rt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let ot=0;ot<W.locationSize;ot++)x(W.location+ot,at/W.locationSize,q,R,at*Q,at/W.locationSize*ot*Q,ft)}}else if(G!==void 0){const R=G[Y];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(W.location,R);break;case 3:r.vertexAttrib3fv(W.location,R);break;case 4:r.vertexAttrib4fv(W.location,R);break;default:r.vertexAttrib1fv(W.location,R)}}}}S()}function C(){P();for(const v in n){const T=n[v];for(const N in T){const k=T[N];for(const X in k)u(k[X].object),delete k[X];delete T[N]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const N in T){const k=T[N];for(const X in k)u(k[X].object),delete k[X];delete T[N]}delete n[v.id]}function E(v){for(const T in n){const N=n[T];if(N[v.id]===void 0)continue;const k=N[v.id];for(const X in k)u(k[X].object),delete k[X];delete N[v.id]}}function P(){B(),o=!0,s!==i&&(s=i,c(s.object))}function B(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function kv(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];for(let g=0;g<h.length;g++)e.update(_,n,h[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==hi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Fi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ii&&!P)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:w}}function Vv(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new wr,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,x=S*4;let y=m.clippingState||null;l.value=y,y=u(_,h,x,f);for(let C=0;C!==x;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=f;x!==g;++x,y+=4)o.copy(d[x]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Gv(r){let t=new WeakMap;function e(o,a){return a===Rc?o.mapping=Ns:a===Pc&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rc||a===Pc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Fd extends Ud{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xs=4,Wh=[.125,.215,.35,.446,.526,.582],Dr=20,$l=new Fd,Xh=new ue;let Kl=null,Zl=0,Jl=0,jl=!1;const Ar=(1+Math.sqrt(5))/2,us=1/Ar,Yh=[new O(-Ar,us,0),new O(Ar,us,0),new O(-us,0,Ar),new O(us,0,Ar),new O(0,Ar,-us),new O(0,Ar,us),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class qh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Kl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kl,Zl,Jl),this._renderer.xr.enabled=jl,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:qo,format:hi,colorSpace:_r,depthBuffer:!1},i=$h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wv(s)),this._blurMaterial=Xv(s,t,e)}return i}_compileMaterial(t){const e=new gn(this._lodPlanes[0],t);this._renderer.compile(e,$l)}_sceneToCubeUV(t,e,n,i){const a=new On(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Xh),u.toneMapping=sr,u.autoClear=!1;const f=new Bu({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new gn(new $s,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(Xh),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;va(i,S*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ns||t.mapping===Os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;va(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$l)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yh[(i-s-1)%Yh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new gn(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Dr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Dr;p>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dr}`);const m=[];let S=0;for(let E=0;E<Dr;++E){const P=E/g,B=Math.exp(-P*P/2);m.push(B),E===0?S+=B:E<p&&(S+=2*B)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-n;const y=this._sizeLods[i],C=3*y*(i>x-xs?i-x+xs:0),w=4*(this._cubeSize-y);va(e,C,w,3*y,2*y),l.setRenderTarget(e),l.render(d,$l)}}function Wv(r){const t=[],e=[],n=[];let i=r;const s=r-xs+1+Wh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-xs?l=Wh[o-r+xs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*f),x=new Float32Array(p*_*f),y=new Float32Array(m*_*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,P=w>2?0:-1,B=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];S.set(B,g*_*w),x.set(h,p*_*w);const v=[w,w,w,w,w,w];y.set(v,m*_*w)}const C=new ki;C.setAttribute("position",new vi(S,g)),C.setAttribute("uv",new vi(x,p)),C.setAttribute("faceIndex",new vi(y,m)),t.push(C),i>xs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $h(r,t,e){const n=new Xr(r,t,e);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Xv(r,t,e){const n=new Float32Array(Dr),i=new O(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Kh(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Zh(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yv(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rc||l===Pc,u=l===Ns||l===Os;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new qh(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new qh(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ka("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $v(r,t,e,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)t.update(h[_],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const S=f.array;g=f.version;for(let x=0,y=S.length;x<y;x+=3){const C=S[x+0],w=S[x+1],E=S[x+2];h.push(C,w,w,E,E,C)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const C=x+0,w=x+1,E=x+2;h.push(C,w,w,E,E,C)}}else return;const p=new(wd(h)?Dd:Ld)(h,1);p.version=g;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Kv(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,h*o,_),e.update(f,n,_))}function u(h,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,n,1)}function d(h,f,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=f[S];for(let S=0;S<g.length;S++)e.update(m,n,g[S])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Zv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jv(r,t,e){const n=new WeakMap,i=new ve;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let C=a.attributes.position.count*y,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const E=new Float32Array(C*w*4*d),P=new Cd(E,C,w,d);P.type=Ii,P.needsUpdate=!0;const B=y*4;for(let T=0;T<d;T++){const N=m[T],k=S[T],X=x[T],K=C*w*4*T;for(let G=0;G<N.count;G++){const Y=G*B;_===!0&&(i.fromBufferAttribute(N,G),E[K+Y+0]=i.x,E[K+Y+1]=i.y,E[K+Y+2]=i.z,E[K+Y+3]=0),g===!0&&(i.fromBufferAttribute(k,G),E[K+Y+4]=i.x,E[K+Y+5]=i.y,E[K+Y+6]=i.z,E[K+Y+7]=0),p===!0&&(i.fromBufferAttribute(X,G),E[K+Y+8]=i.x,E[K+Y+9]=i.y,E[K+Y+10]=i.z,E[K+Y+11]=X.itemSize===4?i.w:1)}}h={count:d,texture:P,size:new wt(C,w)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function jv(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Bd extends xn{constructor(t,e,n,i,s,o,a,l,c,u=bs){if(u!==bs&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bs&&(n=Wr),n===void 0&&u===Bs&&(n=Fs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zd=new xn,Jh=new Bd(1,1),kd=new Cd,Hd=new F_,Vd=new Nd,jh=[],Qh=[],tf=new Float32Array(16),ef=new Float32Array(9),nf=new Float32Array(4);function Ks(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=jh[i];if(s===void 0&&(s=new Float32Array(i),jh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ge(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function We(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function vl(r,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Qv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function tx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2fv(this.addr,t),We(e,t)}}function ex(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;r.uniform3fv(this.addr,t),We(e,t)}}function nx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4fv(this.addr,t),We(e,t)}}function ix(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;nf.set(n),r.uniformMatrix2fv(this.addr,!1,nf),We(e,n)}}function rx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;ef.set(n),r.uniformMatrix3fv(this.addr,!1,ef),We(e,n)}}function sx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;tf.set(n),r.uniformMatrix4fv(this.addr,!1,tf),We(e,n)}}function ox(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ax(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2iv(this.addr,t),We(e,t)}}function lx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;r.uniform3iv(this.addr,t),We(e,t)}}function cx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4iv(this.addr,t),We(e,t)}}function ux(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function hx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2uiv(this.addr,t),We(e,t)}}function fx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;r.uniform3uiv(this.addr,t),We(e,t)}}function dx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4uiv(this.addr,t),We(e,t)}}function px(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Jh.compareFunction=bd,s=Jh):s=zd,e.setTexture2D(t||s,i)}function mx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hd,i)}function _x(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Vd,i)}function gx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||kd,i)}function vx(r){switch(r){case 5126:return Qv;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return rx;case 35676:return sx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return ux;case 36294:return hx;case 36295:return fx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return gx}}function xx(r,t){r.uniform1fv(this.addr,t)}function Sx(r,t){const e=Ks(t,this.size,2);r.uniform2fv(this.addr,e)}function Mx(r,t){const e=Ks(t,this.size,3);r.uniform3fv(this.addr,e)}function yx(r,t){const e=Ks(t,this.size,4);r.uniform4fv(this.addr,e)}function Ex(r,t){const e=Ks(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Tx(r,t){const e=Ks(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function bx(r,t){const e=Ks(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function wx(r,t){r.uniform1iv(this.addr,t)}function Ax(r,t){r.uniform2iv(this.addr,t)}function Cx(r,t){r.uniform3iv(this.addr,t)}function Rx(r,t){r.uniform4iv(this.addr,t)}function Px(r,t){r.uniform1uiv(this.addr,t)}function Lx(r,t){r.uniform2uiv(this.addr,t)}function Dx(r,t){r.uniform3uiv(this.addr,t)}function Ix(r,t){r.uniform4uiv(this.addr,t)}function Ux(r,t,e){const n=this.cache,i=t.length,s=vl(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||zd,s[o])}function Nx(r,t,e){const n=this.cache,i=t.length,s=vl(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Hd,s[o])}function Ox(r,t,e){const n=this.cache,i=t.length,s=vl(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Vd,s[o])}function Fx(r,t,e){const n=this.cache,i=t.length,s=vl(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||kd,s[o])}function Bx(r){switch(r){case 5126:return xx;case 35664:return Sx;case 35665:return Mx;case 35666:return yx;case 35674:return Ex;case 35675:return Tx;case 35676:return bx;case 5124:case 35670:return wx;case 35667:case 35671:return Ax;case 35668:case 35672:return Cx;case 35669:case 35673:return Rx;case 5125:return Px;case 36294:return Lx;case 36295:return Dx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Fx}}class zx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vx(e.type)}}class kx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bx(e.type)}}class Hx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Ql=/(\w+)(\])?(\[|\.)?/g;function rf(r,t){r.seq.push(t),r.map[t.id]=t}function Vx(r,t,e){const n=r.name,i=n.length;for(Ql.lastIndex=0;;){const s=Ql.exec(n),o=Ql.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rf(e,c===void 0?new zx(a,r,t):new kx(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Hx(a),rf(e,d)),e=d}}}class Ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Vx(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function sf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Gx=37297;let Wx=0;function Xx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Yx(r){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(r);let n;switch(t===e?n="":t===Qa&&e===ja?n="LinearDisplayP3ToLinearSRGB":t===ja&&e===Qa&&(n="LinearSRGBToLinearDisplayP3"),r){case _r:case gl:return[n,"LinearTransferOETF"];case li:case Nu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function of(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Xx(r.getShaderSource(t),o)}else return i}function qx(r,t){const e=Yx(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $x(r,t){let e;switch(t){case Km:e="Linear";break;case Zm:e="Reinhard";break;case Jm:e="Cineon";break;case fd:e="ACESFilmic";break;case Qm:e="AgX";break;case t_:e="Neutral";break;case jm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xa=new O;function Kx(){de.getLuminanceCoefficients(xa);const r=xa.x.toFixed(4),t=xa.y.toFixed(4),e=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function Jx(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jx(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function lo(r){return r!==""}function af(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(r){return r.replace(Qx,eS)}const tS=new Map;function eS(r,t){let e=Kt[t];if(e===void 0){const n=tS.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return su(e)}const nS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(r){return r.replace(nS,iS)}function iS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function uf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ud?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Cm?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function sS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ns:case Os:t="ENVMAP_TYPE_CUBE";break;case _l:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function aS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hd:t="ENVMAP_BLENDING_MULTIPLY";break;case qm:t="ENVMAP_BLENDING_MIX";break;case $m:t="ENVMAP_BLENDING_ADD";break}return t}function lS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cS(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=rS(e),c=sS(e),u=oS(e),d=aS(e),h=lS(e),f=Zx(e),_=Jx(s),g=i.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lo).join(`
`),m.length>0&&(m+=`
`)):(p=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),m=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==sr?"#define TONE_MAPPING":"",e.toneMapping!==sr?Kt.tonemapping_pars_fragment:"",e.toneMapping!==sr?$x("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,qx("linearToOutputTexel",e.outputColorSpace),Kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lo).join(`
`)),o=su(o),o=af(o,e),o=lf(o,e),a=su(a),a=af(a,e),a=lf(a,e),o=cf(o),a=cf(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+p+o,y=S+m+a,C=sf(i,i.VERTEX_SHADER,x),w=sf(i,i.FRAGMENT_SHADER,y);i.attachShader(g,C),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(T){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(w).trim();let K=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,w);else{const Y=of(i,C,"vertex"),W=of(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+Y+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||X==="")&&(G=!1);G&&(T.diagnostics={runnable:K,programLog:N,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(C),i.deleteShader(w),P=new Ha(i,g),B=jx(i,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let B;this.getAttributes=function(){return B===void 0&&E(this),B};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,Gx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let uS=0;class hS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fS(t),e.set(t,n)),n}}class fS{constructor(t){this.id=uS++,this.code=t,this.usedTimes=0}}function dS(r,t,e,n,i,s,o){const a=new Rd,l=new hS,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,f=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,N,k,X){const K=k.fog,G=X.geometry,Y=v.isMeshStandardMaterial?k.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||Y),rt=W&&W.mapping===_l?W.image.height:null,R=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,zt=at!==void 0?at.length:0;let Xt=0;G.morphAttributes.position!==void 0&&(Xt=1),G.morphAttributes.normal!==void 0&&(Xt=2),G.morphAttributes.color!==void 0&&(Xt=3);let q,Q,ft,ot;if(R){const Rt=pi[R];q=Rt.vertexShader,Q=Rt.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),ot=l.getFragmentShaderID(v);const At=r.getRenderTarget(),yt=X.isInstancedMesh===!0,Wt=X.isBatchedMesh===!0,Vt=!!v.map,Ot=!!v.matcap,L=!!W,se=!!v.aoMap,Ft=!!v.lightMap,kt=!!v.bumpMap,F=!!v.normalMap,Jt=!!v.displacementMap,Dt=!!v.emissiveMap,A=!!v.metalnessMap,M=!!v.roughnessMap,V=v.anisotropy>0,J=v.clearcoat>0,et=v.dispersion>0,Z=v.iridescence>0,St=v.sheen>0,it=v.transmission>0,dt=V&&!!v.anisotropyMap,Gt=J&&!!v.clearcoatMap,nt=J&&!!v.clearcoatNormalMap,vt=J&&!!v.clearcoatRoughnessMap,xt=Z&&!!v.iridescenceMap,Ut=Z&&!!v.iridescenceThicknessMap,gt=St&&!!v.sheenColorMap,Yt=St&&!!v.sheenRoughnessMap,Bt=!!v.specularMap,oe=!!v.specularColorMap,D=!!v.specularIntensityMap,tt=it&&!!v.transmissionMap,$=it&&!!v.thicknessMap,j=!!v.gradientMap,lt=!!v.alphaMap,ct=v.alphaTest>0,qt=!!v.alphaHash,xe=!!v.extensions;let be=sr;v.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(be=r.toneMapping);const ie={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Wt,batchingColor:Wt&&X._colorsTexture!==null,instancing:yt,instancingColor:yt&&X.instanceColor!==null,instancingMorph:yt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:_r,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:Ot,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:rt,aoMap:se,lightMap:Ft,bumpMap:kt,normalMap:F,displacementMap:f&&Jt,emissiveMap:Dt,normalMapObjectSpace:F&&v.normalMapType===r_,normalMapTangentSpace:F&&v.normalMapType===Td,metalnessMap:A,roughnessMap:M,anisotropy:V,anisotropyMap:dt,clearcoat:J,clearcoatMap:Gt,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:et,iridescence:Z,iridescenceMap:xt,iridescenceThicknessMap:Ut,sheen:St,sheenColorMap:gt,sheenRoughnessMap:Yt,specularMap:Bt,specularColorMap:oe,specularIntensityMap:D,transmission:it,transmissionMap:tt,thicknessMap:$,gradientMap:j,opaque:v.transparent===!1&&v.blending===Ts&&v.alphaToCoverage===!1,alphaMap:lt,alphaTest:ct,alphaHash:qt,combine:v.combine,mapUv:Vt&&p(v.map.channel),aoMapUv:se&&p(v.aoMap.channel),lightMapUv:Ft&&p(v.lightMap.channel),bumpMapUv:kt&&p(v.bumpMap.channel),normalMapUv:F&&p(v.normalMap.channel),displacementMapUv:Jt&&p(v.displacementMap.channel),emissiveMapUv:Dt&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:M&&p(v.roughnessMap.channel),anisotropyMapUv:dt&&p(v.anisotropyMap.channel),clearcoatMapUv:Gt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&p(v.sheenRoughnessMap.channel),specularMapUv:Bt&&p(v.specularMap.channel),specularColorMapUv:oe&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:$&&p(v.thicknessMap.channel),alphaMapUv:lt&&p(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(F||V),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!G.attributes.uv&&(Vt||lt),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Xt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&de.getTransfer(v.map.colorSpace)===Te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Li,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function S(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)T.push(N),T.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(x(T,v),y(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){const T=g[v.type];let N;if(T){const k=pi[T];N=Z_.clone(k.uniforms)}else N=v.uniforms;return N}function w(v,T){let N;for(let k=0,X=u.length;k<X;k++){const K=u[k];if(K.cacheKey===T){N=K,++N.usedTimes;break}}return N===void 0&&(N=new cS(r,T,v,s),u.push(N)),N}function E(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function P(v){l.remove(v)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:C,acquireProgram:w,releaseProgram:E,releaseShaderCache:P,programs:u,dispose:B}}function pS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function mS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function hf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ff(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,h,f,_,g,p){let m=r[t];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},r[t]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=g,m.group=p),t++,m}function a(d,h,f,_,g,p){const m=o(d,h,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(d,h,f,_,g,p){const m=o(d,h,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,h){e.length>1&&e.sort(d||mS),n.length>1&&n.sort(h||hf),i.length>1&&i.sort(h||hf)}function u(){for(let d=t,h=r.length;d<h;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function _S(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ff,r.set(n,[o])):i>=s.length?(o=new ff,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function gS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ue};break;case"SpotLight":e={position:new O,direction:new O,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function vS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let xS=0;function SS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function MS(r){const t=new gS,e=vS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new Ce,o=new Ce;function a(c){let u=0,d=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,S=0,x=0,y=0,C=0,w=0,E=0;c.sort(SS);for(let B=0,v=c.length;B<v;B++){const T=c[B],N=T.color,k=T.intensity,X=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=N.r*k,d+=N.g*k,h+=N.b*k;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],k);E++}else if(T.isDirectionalLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,W=e.get(T);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=T.shadow.matrix,S++}n.directional[f]=G,f++}else if(T.isSpotLight){const G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(N).multiplyScalar(k),G.distance=X,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[g]=G;const Y=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,Y.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[g]=Y.matrix,T.castShadow){const W=e.get(T);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=K,y++}g++}else if(T.isRectAreaLight){const G=t.get(T);G.color.copy(N).multiplyScalar(k),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=G,p++}else if(T.isPointLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const Y=T.shadow,W=e.get(T);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=T.shadow.matrix,x++}n.point[_]=G,_++}else if(T.isHemisphereLight){const G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(k),G.groundColor.copy(T.groundColor).multiplyScalar(k),n.hemi[m]=G,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==S||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,P.directionalLength=f,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=S,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=E,n.version=xS++)}function l(c,u){let d=0,h=0,f=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function df(r){const t=new MS(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function yS(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new df(r),t.set(i,[a])):s>=o.length?(a=new df(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ES extends Zo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class TS extends Zo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AS(r,t,e){let n=new zu;const i=new wt,s=new wt,o=new ve,a=new ES({depthPacking:i_}),l=new TS,c={},u=e.maxTextureSize,d={[ur]:En,[En]:ur,[Li]:Li},h=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:bS,fragmentShader:wS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new ki;_.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new gn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud;let m=this.type;this.render=function(w,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const B=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),N=r.state;N.setBlending(rr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=m!==Ci&&this.type===Ci,X=m===Ci&&this.type!==Ci;for(let K=0,G=w.length;K<G;K++){const Y=w[K],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const rt=W.getFrameExtents();if(i.multiply(rt),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/rt.x),i.x=s.x*rt.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/rt.y),i.y=s.y*rt.y,W.mapSize.y=s.y)),W.map===null||k===!0||X===!0){const at=this.type!==Ci?{minFilter:Qn,magFilter:Qn}:{};W.map!==null&&W.map.dispose(),W.map=new Xr(i.x,i.y,at),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const R=W.getViewportCount();for(let at=0;at<R;at++){const zt=W.getViewport(at);o.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),N.viewport(o),W.updateMatrices(Y,at),n=W.getFrustum(),y(E,P,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Ci&&S(W,P),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(B,v,T)};function S(w,E){const P=t.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xr(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,P,h,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,P,f,g,null)}function x(w,E,P,B){let v=null;const T=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,k=E.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let K=X[k];K===void 0&&(K=v.clone(),X[k]=K,E.addEventListener("dispose",C)),v=K}if(v.visible=E.visible,v.wireframe=E.wireframe,B===Ci?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:d[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=P}return v}function y(w,E,P,B,v){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Ci)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const k=t.update(w),X=w.material;if(Array.isArray(X)){const K=k.groups;for(let G=0,Y=K.length;G<Y;G++){const W=K[G],rt=X[W.materialIndex];if(rt&&rt.visible){const R=x(w,rt,B,v);w.onBeforeShadow(r,w,E,P,k,R,W),r.renderBufferDirect(P,null,k,R,w,W),w.onAfterShadow(r,w,E,P,k,R,W)}}}else if(X.visible){const K=x(w,X,B,v);w.onBeforeShadow(r,w,E,P,k,K,null),r.renderBufferDirect(P,null,k,K,w,null),w.onAfterShadow(r,w,E,P,k,K,null)}}const N=w.children;for(let k=0,X=N.length;k<X;k++)y(N[k],E,P,B,v)}function C(w){w.target.removeEventListener("dispose",C);for(const P in c){const B=c[P],v=w.target.uuid;v in B&&(B[v].dispose(),delete B[v])}}}const CS={[yc]:Ec,[Tc]:Ac,[bc]:Cc,[Us]:wc,[Ec]:yc,[Ac]:Tc,[Cc]:bc,[wc]:Us};function RS(r){function t(){let D=!1;const tt=new ve;let $=null;const j=new ve(0,0,0,0);return{setMask:function(lt){$!==lt&&!D&&(r.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){D=lt},setClear:function(lt,ct,qt,xe,be){be===!0&&(lt*=xe,ct*=xe,qt*=xe),tt.set(lt,ct,qt,xe),j.equals(tt)===!1&&(r.clearColor(lt,ct,qt,xe),j.copy(tt))},reset:function(){D=!1,$=null,j.set(-1,0,0,0)}}}function e(){let D=!1,tt=!1,$=null,j=null,lt=null;return{setReversed:function(ct){tt=ct},setTest:function(ct){ct?ft(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(ct){$!==ct&&!D&&(r.depthMask(ct),$=ct)},setFunc:function(ct){if(tt&&(ct=CS[ct]),j!==ct){switch(ct){case yc:r.depthFunc(r.NEVER);break;case Ec:r.depthFunc(r.ALWAYS);break;case Tc:r.depthFunc(r.LESS);break;case Us:r.depthFunc(r.LEQUAL);break;case bc:r.depthFunc(r.EQUAL);break;case wc:r.depthFunc(r.GEQUAL);break;case Ac:r.depthFunc(r.GREATER);break;case Cc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ct}},setLocked:function(ct){D=ct},setClear:function(ct){lt!==ct&&(r.clearDepth(ct),lt=ct)},reset:function(){D=!1,$=null,j=null,lt=null}}}function n(){let D=!1,tt=null,$=null,j=null,lt=null,ct=null,qt=null,xe=null,be=null;return{setTest:function(ie){D||(ie?ft(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(ie){tt!==ie&&!D&&(r.stencilMask(ie),tt=ie)},setFunc:function(ie,Rt,Tt){($!==ie||j!==Rt||lt!==Tt)&&(r.stencilFunc(ie,Rt,Tt),$=ie,j=Rt,lt=Tt)},setOp:function(ie,Rt,Tt){(ct!==ie||qt!==Rt||xe!==Tt)&&(r.stencilOp(ie,Rt,Tt),ct=ie,qt=Rt,xe=Tt)},setLocked:function(ie){D=ie},setClear:function(ie){be!==ie&&(r.clearStencil(ie),be=ie)},reset:function(){D=!1,tt=null,$=null,j=null,lt=null,ct=null,qt=null,xe=null,be=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,_=!1,g=null,p=null,m=null,S=null,x=null,y=null,C=null,w=new ue(0,0,0),E=0,P=!1,B=null,v=null,T=null,N=null,k=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=G>=2);let W=null,rt={};const R=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),zt=new ve().fromArray(R),Xt=new ve().fromArray(at);function q(D,tt,$,j){const lt=new Uint8Array(4),ct=r.createTexture();r.bindTexture(D,ct),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<$;qt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(tt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ct}const Q={};Q[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ft(r.DEPTH_TEST),s.setFunc(Us),Ft(!1),kt(xh),ft(r.CULL_FACE),L(rr);function ft(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function ot(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function At(D,tt){return u[D]!==tt?(r.bindFramebuffer(D,tt),u[D]=tt,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function yt(D,tt){let $=h,j=!1;if(D){$=d.get(tt),$===void 0&&($=[],d.set(tt,$));const lt=D.textures;if($.length!==lt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,qt=lt.length;ct<qt;ct++)$[ct]=r.COLOR_ATTACHMENT0+ct;$.length=lt.length,j=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,j=!0);j&&r.drawBuffers($)}function Wt(D){return f!==D?(r.useProgram(D),f=D,!0):!1}const Vt={[Lr]:r.FUNC_ADD,[Pm]:r.FUNC_SUBTRACT,[Lm]:r.FUNC_REVERSE_SUBTRACT};Vt[Dm]=r.MIN,Vt[Im]=r.MAX;const Ot={[Um]:r.ZERO,[Nm]:r.ONE,[Om]:r.SRC_COLOR,[Sc]:r.SRC_ALPHA,[Vm]:r.SRC_ALPHA_SATURATE,[km]:r.DST_COLOR,[Bm]:r.DST_ALPHA,[Fm]:r.ONE_MINUS_SRC_COLOR,[Mc]:r.ONE_MINUS_SRC_ALPHA,[Hm]:r.ONE_MINUS_DST_COLOR,[zm]:r.ONE_MINUS_DST_ALPHA,[Gm]:r.CONSTANT_COLOR,[Wm]:r.ONE_MINUS_CONSTANT_COLOR,[Xm]:r.CONSTANT_ALPHA,[Ym]:r.ONE_MINUS_CONSTANT_ALPHA};function L(D,tt,$,j,lt,ct,qt,xe,be,ie){if(D===rr){_===!0&&(ot(r.BLEND),_=!1);return}if(_===!1&&(ft(r.BLEND),_=!0),D!==Rm){if(D!==g||ie!==P){if((p!==Lr||x!==Lr)&&(r.blendEquation(r.FUNC_ADD),p=Lr,x=Lr),ie)switch(D){case Ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sh:r.blendFunc(r.ONE,r.ONE);break;case Mh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Mh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,S=null,y=null,C=null,w.set(0,0,0),E=0,g=D,P=ie}return}lt=lt||tt,ct=ct||$,qt=qt||j,(tt!==p||lt!==x)&&(r.blendEquationSeparate(Vt[tt],Vt[lt]),p=tt,x=lt),($!==m||j!==S||ct!==y||qt!==C)&&(r.blendFuncSeparate(Ot[$],Ot[j],Ot[ct],Ot[qt]),m=$,S=j,y=ct,C=qt),(xe.equals(w)===!1||be!==E)&&(r.blendColor(xe.r,xe.g,xe.b,be),w.copy(xe),E=be),g=D,P=!1}function se(D,tt){D.side===Li?ot(r.CULL_FACE):ft(r.CULL_FACE);let $=D.side===En;tt&&($=!$),Ft($),D.blending===Ts&&D.transparent===!1?L(rr):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),i.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Jt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(D){B!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),B=D)}function kt(D){D!==wm?(ft(r.CULL_FACE),D!==v&&(D===xh?r.cullFace(r.BACK):D===Am?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),v=D}function F(D){D!==T&&(K&&r.lineWidth(D),T=D)}function Jt(D,tt,$){D?(ft(r.POLYGON_OFFSET_FILL),(N!==tt||k!==$)&&(r.polygonOffset(tt,$),N=tt,k=$)):ot(r.POLYGON_OFFSET_FILL)}function Dt(D){D?ft(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function A(D){D===void 0&&(D=r.TEXTURE0+X-1),W!==D&&(r.activeTexture(D),W=D)}function M(D,tt,$){$===void 0&&(W===null?$=r.TEXTURE0+X-1:$=W);let j=rt[$];j===void 0&&(j={type:void 0,texture:void 0},rt[$]=j),(j.type!==D||j.texture!==tt)&&(W!==$&&(r.activeTexture($),W=$),r.bindTexture(D,tt||Q[D]),j.type=D,j.texture=tt)}function V(){const D=rt[W];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(D){zt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),zt.copy(D))}function gt(D){Xt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Xt.copy(D))}function Yt(D,tt){let $=l.get(tt);$===void 0&&($=new WeakMap,l.set(tt,$));let j=$.get(D);j===void 0&&(j=r.getUniformBlockIndex(tt,D.name),$.set(D,j))}function Bt(D,tt){const j=l.get(tt).get(D);a.get(tt)!==j&&(r.uniformBlockBinding(tt,j,D.__bindingPointIndex),a.set(tt,j))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,rt={},u={},d=new WeakMap,h=[],f=null,_=!1,g=null,p=null,m=null,S=null,x=null,y=null,C=null,w=new ue(0,0,0),E=0,P=!1,B=null,v=null,T=null,N=null,k=null,zt.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ft,disable:ot,bindFramebuffer:At,drawBuffers:yt,useProgram:Wt,setBlending:L,setMaterial:se,setFlipSided:Ft,setCullFace:kt,setLineWidth:F,setPolygonOffset:Jt,setScissorTest:Dt,activeTexture:A,bindTexture:M,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:vt,texImage3D:xt,updateUBOMapping:Yt,uniformBlockBinding:Bt,texStorage2D:Gt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:it,compressedTexSubImage3D:dt,scissor:Ut,viewport:gt,reset:oe}}function pf(r,t,e,n){const i=PS(n);switch(e){case gd:return r*t;case xd:return r*t;case Sd:return r*t*2;case Md:return r*t/i.components*i.byteLength;case Du:return r*t/i.components*i.byteLength;case yd:return r*t*2/i.components*i.byteLength;case Iu:return r*t*2/i.components*i.byteLength;case vd:return r*t*3/i.components*i.byteLength;case hi:return r*t*4/i.components*i.byteLength;case Uu:return r*t*4/i.components*i.byteLength;case Na:case Oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Ba:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Uc:case Oc:return Math.max(r,16)*Math.max(t,8)/4;case Ic:case Nc:return Math.max(r,8)*Math.max(t,8)/2;case Fc:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case qc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case $c:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case za:case tu:case eu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ed:case nu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case iu:case ru:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function PS(r){switch(r){case Fi:case pd:return{byteLength:1,components:1};case Io:case md:case qo:return{byteLength:2,components:1};case Pu:case Lu:return{byteLength:2,components:4};case Wr:case Ru:case Ii:return{byteLength:4,components:1};case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function LS(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return f?new OffscreenCanvas(A,M):el("canvas")}function g(A,M,V){let J=1;const et=Dt(A);if((et.width>V||et.height>V)&&(J=V/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(J*et.width),St=Math.floor(J*et.height);d===void 0&&(d=_(Z,St));const it=M?_(Z,St):d;return it.width=Z,it.height=St,it.getContext("2d").drawImage(A,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+St+")."),it}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Qn&&A.minFilter!==ci}function m(A){r.generateMipmap(A)}function S(A,M,V,J,et=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=M;if(M===r.RED&&(V===r.FLOAT&&(Z=r.R32F),V===r.HALF_FLOAT&&(Z=r.R16F),V===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.R8UI),V===r.UNSIGNED_SHORT&&(Z=r.R16UI),V===r.UNSIGNED_INT&&(Z=r.R32UI),V===r.BYTE&&(Z=r.R8I),V===r.SHORT&&(Z=r.R16I),V===r.INT&&(Z=r.R32I)),M===r.RG&&(V===r.FLOAT&&(Z=r.RG32F),V===r.HALF_FLOAT&&(Z=r.RG16F),V===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RG8UI),V===r.UNSIGNED_SHORT&&(Z=r.RG16UI),V===r.UNSIGNED_INT&&(Z=r.RG32UI),V===r.BYTE&&(Z=r.RG8I),V===r.SHORT&&(Z=r.RG16I),V===r.INT&&(Z=r.RG32I)),M===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),V===r.UNSIGNED_INT&&(Z=r.RGB32UI),V===r.BYTE&&(Z=r.RGB8I),V===r.SHORT&&(Z=r.RGB16I),V===r.INT&&(Z=r.RGB32I)),M===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),V===r.UNSIGNED_INT&&(Z=r.RGBA32UI),V===r.BYTE&&(Z=r.RGBA8I),V===r.SHORT&&(Z=r.RGBA16I),V===r.INT&&(Z=r.RGBA32I)),M===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),M===r.RGBA){const St=et?Ja:de.getTransfer(J);V===r.FLOAT&&(Z=r.RGBA32F),V===r.HALF_FLOAT&&(Z=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Z=St===Te?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(A,M){let V;return A?M===null||M===Wr||M===Fs?V=r.DEPTH24_STENCIL8:M===Ii?V=r.DEPTH32F_STENCIL8:M===Io&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wr||M===Fs?V=r.DEPTH_COMPONENT24:M===Ii?V=r.DEPTH_COMPONENT32F:M===Io&&(V=r.DEPTH_COMPONENT16),V}function y(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Qn&&A.minFilter!==ci?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),E(M),M.isVideoTexture&&u.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),B(M)}function E(A){const M=n.get(A);if(M.__webglInit===void 0)return;const V=A.source,J=h.get(V);if(J){const et=J[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&P(A),Object.keys(J).length===0&&h.delete(V)}n.remove(A)}function P(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const V=A.source,J=h.get(V);delete J[M.__cacheKey],o.memory.textures--}function B(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let et=0;et<M.__webglFramebuffer[J].length;et++)r.deleteFramebuffer(M.__webglFramebuffer[J][et]);else r.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)r.deleteFramebuffer(M.__webglFramebuffer[J]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=A.textures;for(let J=0,et=V.length;J<et;J++){const Z=n.get(V[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[J])}n.remove(A)}let v=0;function T(){v=0}function N(){const A=v;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),v+=1,A}function k(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function X(A,M){const V=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(V,A,M);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+M)}function K(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Xt(V,A,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+M)}function G(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Xt(V,A,M);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+M)}function Y(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){q(V,A,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+M)}const W={[Lc]:r.REPEAT,[Ir]:r.CLAMP_TO_EDGE,[Dc]:r.MIRRORED_REPEAT},rt={[Qn]:r.NEAREST,[e_]:r.NEAREST_MIPMAP_NEAREST,[Qo]:r.NEAREST_MIPMAP_LINEAR,[ci]:r.LINEAR,[wl]:r.LINEAR_MIPMAP_NEAREST,[Ur]:r.LINEAR_MIPMAP_LINEAR},R={[s_]:r.NEVER,[h_]:r.ALWAYS,[o_]:r.LESS,[bd]:r.LEQUAL,[a_]:r.EQUAL,[u_]:r.GEQUAL,[l_]:r.GREATER,[c_]:r.NOTEQUAL};function at(A,M){if(M.type===Ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ci||M.magFilter===wl||M.magFilter===Qo||M.magFilter===Ur||M.minFilter===ci||M.minFilter===wl||M.minFilter===Qo||M.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,W[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,W[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,W[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,rt[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,rt[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,R[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qn||M.minFilter!==Qo&&M.minFilter!==Ur||M.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function zt(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const J=M.source;let et=h.get(J);et===void 0&&(et={},h.set(J,et));const Z=k(M);if(Z!==A.__cacheKey){et[Z]===void 0&&(et[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[Z].usedTimes++;const St=et[A.__cacheKey];St!==void 0&&(et[A.__cacheKey].usedTimes--,St.usedTimes===0&&P(M)),A.__cacheKey=Z,A.__webglTexture=et[Z].texture}return V}function Xt(A,M,V){let J=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=r.TEXTURE_3D);const et=zt(A,M),Z=M.source;e.bindTexture(J,A.__webglTexture,r.TEXTURE0+V);const St=n.get(Z);if(Z.version!==St.__version||et===!0){e.activeTexture(r.TEXTURE0+V);const it=de.getPrimaries(de.workingColorSpace),dt=M.colorSpace===ji?null:de.getPrimaries(M.colorSpace),Gt=M.colorSpace===ji||it===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let nt=g(M.image,!1,i.maxTextureSize);nt=Jt(M,nt);const vt=s.convert(M.format,M.colorSpace),xt=s.convert(M.type);let Ut=S(M.internalFormat,vt,xt,M.colorSpace,M.isVideoTexture);at(J,M);let gt;const Yt=M.mipmaps,Bt=M.isVideoTexture!==!0,oe=St.__version===void 0||et===!0,D=Z.dataReady,tt=y(M,nt);if(M.isDepthTexture)Ut=x(M.format===Bs,M.type),oe&&(Bt?e.texStorage2D(r.TEXTURE_2D,1,Ut,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Ut,nt.width,nt.height,0,vt,xt,null));else if(M.isDataTexture)if(Yt.length>0){Bt&&oe&&e.texStorage2D(r.TEXTURE_2D,tt,Ut,Yt[0].width,Yt[0].height);for(let $=0,j=Yt.length;$<j;$++)gt=Yt[$],Bt?D&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,$,Ut,gt.width,gt.height,0,vt,xt,gt.data);M.generateMipmaps=!1}else Bt?(oe&&e.texStorage2D(r.TEXTURE_2D,tt,Ut,nt.width,nt.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,xt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,Ut,nt.width,nt.height,0,vt,xt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Bt&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,Ut,Yt[0].width,Yt[0].height,nt.depth);for(let $=0,j=Yt.length;$<j;$++)if(gt=Yt[$],M.format!==hi)if(vt!==null)if(Bt){if(D)if(M.layerUpdates.size>0){const lt=pf(gt.width,gt.height,M.format,M.type);for(const ct of M.layerUpdates){const qt=gt.data.subarray(ct*lt/gt.data.BYTES_PER_ELEMENT,(ct+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,ct,gt.width,gt.height,1,vt,qt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,gt.width,gt.height,nt.depth,vt,gt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ut,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,gt.width,gt.height,nt.depth,vt,xt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Ut,gt.width,gt.height,nt.depth,0,vt,xt,gt.data)}else{Bt&&oe&&e.texStorage2D(r.TEXTURE_2D,tt,Ut,Yt[0].width,Yt[0].height);for(let $=0,j=Yt.length;$<j;$++)gt=Yt[$],M.format!==hi?vt!==null?Bt?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Ut,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,$,Ut,gt.width,gt.height,0,vt,xt,gt.data)}else if(M.isDataArrayTexture)if(Bt){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,Ut,nt.width,nt.height,nt.depth),D)if(M.layerUpdates.size>0){const $=pf(nt.width,nt.height,M.format,M.type);for(const j of M.layerUpdates){const lt=nt.data.subarray(j*$/nt.data.BYTES_PER_ELEMENT,(j+1)*$/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,vt,xt,lt)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(M.isData3DTexture)Bt?(oe&&e.texStorage3D(r.TEXTURE_3D,tt,Ut,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Ut,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(M.isFramebufferTexture){if(oe)if(Bt)e.texStorage2D(r.TEXTURE_2D,tt,Ut,nt.width,nt.height);else{let $=nt.width,j=nt.height;for(let lt=0;lt<tt;lt++)e.texImage2D(r.TEXTURE_2D,lt,Ut,$,j,0,vt,xt,null),$>>=1,j>>=1}}else if(Yt.length>0){if(Bt&&oe){const $=Dt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,tt,Ut,$.width,$.height)}for(let $=0,j=Yt.length;$<j;$++)gt=Yt[$],Bt?D&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,vt,xt,gt):e.texImage2D(r.TEXTURE_2D,$,Ut,vt,xt,gt);M.generateMipmaps=!1}else if(Bt){if(oe){const $=Dt(nt);e.texStorage2D(r.TEXTURE_2D,tt,Ut,$.width,$.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,xt,nt)}else e.texImage2D(r.TEXTURE_2D,0,Ut,vt,xt,nt);p(M)&&m(J),St.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function q(A,M,V){if(M.image.length!==6)return;const J=zt(A,M),et=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+V);const Z=n.get(et);if(et.version!==Z.__version||J===!0){e.activeTexture(r.TEXTURE0+V);const St=de.getPrimaries(de.workingColorSpace),it=M.colorSpace===ji?null:de.getPrimaries(M.colorSpace),dt=M.colorSpace===ji||St===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Gt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let j=0;j<6;j++)!Gt&&!nt?vt[j]=g(M.image[j],!0,i.maxCubemapSize):vt[j]=nt?M.image[j].image:M.image[j],vt[j]=Jt(M,vt[j]);const xt=vt[0],Ut=s.convert(M.format,M.colorSpace),gt=s.convert(M.type),Yt=S(M.internalFormat,Ut,gt,M.colorSpace),Bt=M.isVideoTexture!==!0,oe=Z.__version===void 0||J===!0,D=et.dataReady;let tt=y(M,xt);at(r.TEXTURE_CUBE_MAP,M);let $;if(Gt){Bt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Yt,xt.width,xt.height);for(let j=0;j<6;j++){$=vt[j].mipmaps;for(let lt=0;lt<$.length;lt++){const ct=$[lt];M.format!==hi?Ut!==null?Bt?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ct.width,ct.height,Ut,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,Yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ct.width,ct.height,Ut,gt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,Yt,ct.width,ct.height,0,Ut,gt,ct.data)}}}else{if($=M.mipmaps,Bt&&oe){$.length>0&&tt++;const j=Dt(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Yt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){Bt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,vt[j].width,vt[j].height,Ut,gt,vt[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,vt[j].width,vt[j].height,0,Ut,gt,vt[j].data);for(let lt=0;lt<$.length;lt++){const qt=$[lt].image[j].image;Bt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,qt.width,qt.height,Ut,gt,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,Yt,qt.width,qt.height,0,Ut,gt,qt.data)}}else{Bt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ut,gt,vt[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,Ut,gt,vt[j]);for(let lt=0;lt<$.length;lt++){const ct=$[lt];Bt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Ut,gt,ct.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,Yt,Ut,gt,ct.image[j])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),Z.__version=et.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Q(A,M,V,J,et,Z){const St=s.convert(V.format,V.colorSpace),it=s.convert(V.type),dt=S(V.internalFormat,St,it,V.colorSpace);if(!n.get(M).__hasExternalTextures){const nt=Math.max(1,M.width>>Z),vt=Math.max(1,M.height>>Z);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,dt,nt,vt,M.depth,0,St,it,null):e.texImage2D(et,Z,dt,nt,vt,0,St,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),kt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,et,n.get(V).__webglTexture,0,Ft(M)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,et,n.get(V).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(A,M,V){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){const J=M.depthTexture,et=J&&J.isDepthTexture?J.type:null,Z=x(M.stencilBuffer,et),St=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=Ft(M);kt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,Z,M.width,M.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Z,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,A)}else{const J=M.textures;for(let et=0;et<J.length;et++){const Z=J[et],St=s.convert(Z.format,Z.colorSpace),it=s.convert(Z.type),dt=S(Z.internalFormat,St,it,Z.colorSpace),Gt=Ft(M);V&&kt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,dt,M.width,M.height):kt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,dt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,dt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,et=Ft(M);if(M.depthTexture.format===bs)kt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(M.depthTexture.format===Bs)kt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function At(A){const M=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=J}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ot(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=r.createRenderbuffer(),ft(M.__webglDepthbuffer[J],A,!1);else{const et=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ft(M.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(A,M,V){const J=n.get(A);M!==void 0&&Q(J.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&At(A)}function Wt(A){const M=A.texture,V=n.get(A),J=n.get(M);A.addEventListener("dispose",w);const et=A.textures,Z=A.isWebGLCubeRenderTarget===!0,St=et.length>1;if(St||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=M.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[it]=[];for(let dt=0;dt<M.mipmaps.length;dt++)V.__webglFramebuffer[it][dt]=r.createFramebuffer()}else V.__webglFramebuffer[it]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let it=0;it<M.mipmaps.length;it++)V.__webglFramebuffer[it]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(St)for(let it=0,dt=et.length;it<dt;it++){const Gt=n.get(et[it]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&kt(A)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){const dt=et[it];V.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[it]);const Gt=s.convert(dt.format,dt.colorSpace),nt=s.convert(dt.type),vt=S(dt.internalFormat,Gt,nt,dt.colorSpace,A.isXRRenderTarget===!0),xt=Ft(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,vt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,V.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),at(r.TEXTURE_CUBE_MAP,M);for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Q(V.__webglFramebuffer[it][dt],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt);else Q(V.__webglFramebuffer[it],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let it=0,dt=et.length;it<dt;it++){const Gt=et[it],nt=n.get(Gt);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),at(r.TEXTURE_2D,Gt),Q(V.__webglFramebuffer,A,Gt,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,0),p(Gt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,J.__webglTexture),at(it,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Q(V.__webglFramebuffer[dt],A,M,r.COLOR_ATTACHMENT0,it,dt);else Q(V.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,it,0);p(M)&&m(it),e.unbindTexture()}A.depthBuffer&&At(A)}function Vt(A){const M=A.textures;for(let V=0,J=M.length;V<J;V++){const et=M[V];if(p(et)){const Z=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,St=n.get(et).__webglTexture;e.bindTexture(Z,St),m(Z),e.unbindTexture()}}}const Ot=[],L=[];function se(A){if(A.samples>0){if(kt(A)===!1){const M=A.textures,V=A.width,J=A.height;let et=r.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(A),it=M.length>1;if(it)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Gt=n.get(M[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Gt,0)}r.blitFramebuffer(0,0,V,J,0,0,V,J,et,r.NEAREST),l===!0&&(Ot.length=0,L.length=0,Ot.push(r.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ot.push(Z),L.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Gt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ft(A){return Math.min(i.maxSamples,A.samples)}function kt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Jt(A,M){const V=A.colorSpace,J=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==_r&&V!==ji&&(de.getTransfer(V)===Te?(J!==hi||et!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=yt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=kt}function DS(r,t){function e(n,i=ji){let s;const o=de.getTransfer(i);if(n===Fi)return r.UNSIGNED_BYTE;if(n===Pu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===_d)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return r.BYTE;if(n===md)return r.SHORT;if(n===Io)return r.UNSIGNED_SHORT;if(n===Ru)return r.INT;if(n===Wr)return r.UNSIGNED_INT;if(n===Ii)return r.FLOAT;if(n===qo)return r.HALF_FLOAT;if(n===gd)return r.ALPHA;if(n===vd)return r.RGB;if(n===hi)return r.RGBA;if(n===xd)return r.LUMINANCE;if(n===Sd)return r.LUMINANCE_ALPHA;if(n===bs)return r.DEPTH_COMPONENT;if(n===Bs)return r.DEPTH_STENCIL;if(n===Md)return r.RED;if(n===Du)return r.RED_INTEGER;if(n===yd)return r.RG;if(n===Iu)return r.RG_INTEGER;if(n===Uu)return r.RGBA_INTEGER;if(n===Na||n===Oa||n===Fa||n===Ba)if(o===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ic||n===Uc||n===Nc||n===Oc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===Bc||n===zc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fc||n===Bc)return o===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===Yc||n===qc||n===$c||n===Kc||n===Zc||n===Jc||n===jc||n===Qc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===tu||n===eu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===za)return o===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ed||n===nu||n===iu||n===ru)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class IS extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ss extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const US={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(US)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const NS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new xn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hr({vertexShader:NS,fragmentShader:OS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gn(new Jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BS extends Ys{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const g=new FS,p=e.getContextAttributes();let m=null,S=null;const x=[],y=[],C=new wt;let w=null;const E=new On;E.layers.enable(1),E.viewport=new ve;const P=new On;P.layers.enable(2),P.viewport=new ve;const B=[E,P],v=new IS;v.layers.enable(1),v.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=x[q];return Q===void 0&&(Q=new tc,x[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=x[q];return Q===void 0&&(Q=new tc,x[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=x[q];return Q===void 0&&(Q=new tc,x[q]=Q),Q.getHandSpace()};function k(q){const Q=y.indexOf(q.inputSource);if(Q===-1)return;const ft=x[Q];ft!==void 0&&(ft.update(q.inputSource,q.frame,c||o),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let q=0;q<x.length;q++){const Q=y[q];Q!==null&&(y[q]=null,x[q].disconnect(Q))}T=null,N=null,g.reset(),t.setRenderTarget(m),f=null,h=null,d=null,i=null,S=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Xr(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ft=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Bs:bs,ft=p.stencil?Fs:Wr);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(At),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Xr(h.textureWidth,h.textureHeight,{format:hi,type:Fi,depthTexture:new Bd(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(q){for(let Q=0;Q<q.removed.length;Q++){const ft=q.removed[Q],ot=y.indexOf(ft);ot>=0&&(y[ot]=null,x[ot].disconnect(ft))}for(let Q=0;Q<q.added.length;Q++){const ft=q.added[Q];let ot=y.indexOf(ft);if(ot===-1){for(let yt=0;yt<x.length;yt++)if(yt>=y.length){y.push(ft),ot=yt;break}else if(y[yt]===null){y[yt]=ft,ot=yt;break}if(ot===-1)break}const At=x[ot];At&&At.connect(ft)}}const G=new O,Y=new O;function W(q,Q,ft){G.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ft.matrixWorld);const ot=G.distanceTo(Y),At=Q.projectionMatrix.elements,yt=ft.projectionMatrix.elements,Wt=At[14]/(At[10]-1),Vt=At[14]/(At[10]+1),Ot=(At[9]+1)/At[5],L=(At[9]-1)/At[5],se=(At[8]-1)/At[0],Ft=(yt[8]+1)/yt[0],kt=Wt*se,F=Wt*Ft,Jt=ot/(-se+Ft),Dt=Jt*-se;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(Jt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=Wt+Jt,M=Vt+Jt,V=kt-Dt,J=F+(ot-Dt),et=Ot*Vt/M*A,Z=L*Vt/M*A;q.projectionMatrix.makePerspective(V,J,et,Z,A,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,ft=q.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ft=g.depthFar)),v.near=P.near=E.near=Q,v.far=P.far=E.far=ft,(T!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,N=v.far);const ot=q.parent,At=v.cameras;rt(v,ot);for(let yt=0;yt<At.length;yt++)rt(At[yt],ot);At.length===2?W(v,E,P):v.projectionMatrix.copy(E.projectionMatrix),R(q,v,ot)};function R(q,Q,ft){ft===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Uo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let at=null;function zt(q,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const ft=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let ot=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let yt=0;yt<ft.length;yt++){const Wt=ft[yt];let Vt=null;if(f!==null)Vt=f.getViewport(Wt);else{const L=d.getViewSubImage(h,Wt);Vt=L.viewport,yt===0&&(t.setRenderTargetTextures(S,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(S))}let Ot=B[yt];Ot===void 0&&(Ot=new On,Ot.layers.enable(yt),Ot.viewport=new ve,B[yt]=Ot),Ot.matrix.fromArray(Wt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Wt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),yt===0&&(v.matrix.copy(Ot.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(Ot)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const yt=d.getDepthInformation(ft[0]);yt&&yt.isValid&&yt.texture&&g.init(t,yt,i.renderState)}}for(let ft=0;ft<x.length;ft++){const ot=y[ft],At=x[ft];ot!==null&&At!==void 0&&At.update(ot,Q,c||o)}at&&at(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Xt=new Od;Xt.setAnimationLoop(zt),this.setAnimationLoop=function(q){at=q},this.dispose=function(){}}}const Er=new Si,zS=new Ce;function kS(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Id(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===En&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===En&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),x=S.envMap,y=S.envMapRotation;x&&(p.envMap.value=x,Er.copy(y),Er.x*=-1,Er.y*=-1,Er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),p.envMapRotation.value.setFromMatrix4(zS.makeRotationFromEuler(Er)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function HS(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function c(S,x){let y=i[S.id];y===void 0&&(_(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(S,C);const w=t.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function u(S){const x=d();S.__bindingPointIndex=x;const y=r.createBuffer(),C=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=i[S.id],y=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let B=0,v=P.length;B<v;B++){const T=P[B];if(f(T,w,B,C)===!0){const N=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let K=0;K<k.length;K++){const G=k[K],Y=g(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,N+X,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,x,y,C){const w=S.value,E=x+"_"+y;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const P=C[E];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[E]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(S){const x=S.uniforms;let y=0;const C=16;for(let E=0,P=x.length;E<P;E++){const B=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,T=B.length;v<T;v++){const N=B[v],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,K=k.length;X<K;X++){const G=k[X],Y=g(G),W=y%C,rt=W%Y.boundary,R=W+rt;y+=rt,R!==0&&C-R<Y.storage&&(y+=C-R),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=Y.storage}}}const w=y%C;return w>0&&(y+=C-w),S.__size=y,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class VS{constructor(t={}){const{canvas:e=C_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=sr,this.toneMappingExposure=1;const x=this;let y=!1,C=0,w=0,E=null,P=-1,B=null;const v=new ve,T=new ve;let N=null;const k=new ue(0);let X=0,K=e.width,G=e.height,Y=1,W=null,rt=null;const R=new ve(0,0,K,G),at=new ve(0,0,K,G);let zt=!1;const Xt=new zu;let q=!1,Q=!1;const ft=new Ce,ot=new Ce,At=new O,yt=new ve,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Ot(){return E===null?Y:1}let L=n;function se(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cu}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),L===null){const U="webgl2";if(L=se(U,b),L===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ft,kt,F,Jt,Dt,A,M,V,J,et,Z,St,it,dt,Gt,nt,vt,xt,Ut,gt,Yt,Bt,oe,D;function tt(){Ft=new qv(L),Ft.init(),Bt=new DS(L,Ft),kt=new Hv(L,Ft,t,Bt),F=new RS(L),kt.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),Jt=new Zv(L),Dt=new pS,A=new LS(L,Ft,F,Dt,kt,Bt,Jt),M=new Gv(x),V=new Yv(x),J=new ig(L),oe=new zv(L,J),et=new $v(L,J,Jt,oe),Z=new jv(L,et,J,Jt),Ut=new Jv(L,kt,A),nt=new Vv(Dt),St=new dS(x,M,V,Ft,kt,oe,nt),it=new kS(x,Dt),dt=new _S,Gt=new yS(Ft),xt=new Bv(x,M,V,F,Z,h,l),vt=new AS(x,Z,kt),D=new HS(L,Jt,kt,F),gt=new kv(L,Ft,Jt),Yt=new Kv(L,Ft,Jt),Jt.programs=St.programs,x.capabilities=kt,x.extensions=Ft,x.properties=Dt,x.renderLists=dt,x.shadowMap=vt,x.state=F,x.info=Jt}tt();const $=new BS(x,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(K,G,!1))},this.getSize=function(b){return b.set(K,G)},this.setSize=function(b,U,z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,G=U,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),z===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(K*Y,G*Y).floor()},this.setDrawingBufferSize=function(b,U,z){K=b,G=U,Y=z,e.width=Math.floor(b*z),e.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(R)},this.setViewport=function(b,U,z,H){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,U,z,H),F.viewport(v.copy(R).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(at)},this.setScissor=function(b,U,z,H){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,U,z,H),F.scissor(T.copy(at).multiplyScalar(Y).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(b){F.setScissorTest(zt=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(b=!0,U=!0,z=!0){let H=0;if(b){let I=!1;if(E!==null){const st=E.texture.format;I=st===Uu||st===Iu||st===Du}if(I){const st=E.texture.type,_t=st===Fi||st===Wr||st===Io||st===Fs||st===Pu||st===Lu,ht=xt.getClearColor(),ut=xt.getClearAlpha(),Ct=ht.r,Nt=ht.g,bt=ht.b;_t?(f[0]=Ct,f[1]=Nt,f[2]=bt,f[3]=ut,L.clearBufferuiv(L.COLOR,0,f)):(_[0]=Ct,_[1]=Nt,_[2]=bt,_[3]=ut,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Gt.dispose(),Dt.dispose(),M.dispose(),V.dispose(),Z.dispose(),oe.dispose(),D.dispose(),St.dispose(),$.dispose(),$.removeEventListener("sessionstart",ce),$.removeEventListener("sessionend",pt),It.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Jt.autoReset,U=vt.enabled,z=vt.autoUpdate,H=vt.needsUpdate,I=vt.type;tt(),Jt.autoReset=b,vt.enabled=U,vt.autoUpdate=z,vt.needsUpdate=H,vt.type=I}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const U=b.target;U.removeEventListener("dispose",qt),xe(U)}function xe(b){be(b),Dt.remove(b)}function be(b){const U=Dt.get(b).programs;U!==void 0&&(U.forEach(function(z){St.releaseProgram(z)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,H,I,st){U===null&&(U=Wt);const _t=I.isMesh&&I.matrixWorld.determinant()<0,ht=pe(b,U,z,H,I);F.setMaterial(H,_t);let ut=z.index,Ct=1;if(H.wireframe===!0){if(ut=et.getWireframeAttribute(z),ut===void 0)return;Ct=2}const Nt=z.drawRange,bt=z.attributes.position;let ae=Nt.start*Ct,re=(Nt.start+Nt.count)*Ct;st!==null&&(ae=Math.max(ae,st.start*Ct),re=Math.min(re,(st.start+st.count)*Ct)),ut!==null?(ae=Math.max(ae,0),re=Math.min(re,ut.count)):bt!=null&&(ae=Math.max(ae,0),re=Math.min(re,bt.count));const _e=re-ae;if(_e<0||_e===1/0)return;oe.setup(I,H,ht,z,ut);let Xe,jt=gt;if(ut!==null&&(Xe=J.get(ut),jt=Yt,jt.setIndex(Xe)),I.isMesh)H.wireframe===!0?(F.setLineWidth(H.wireframeLinewidth*Ot()),jt.setMode(L.LINES)):jt.setMode(L.TRIANGLES);else if(I.isLine){let Lt=H.linewidth;Lt===void 0&&(Lt=1),F.setLineWidth(Lt*Ot()),I.isLineSegments?jt.setMode(L.LINES):I.isLineLoop?jt.setMode(L.LINE_LOOP):jt.setMode(L.LINE_STRIP)}else I.isPoints?jt.setMode(L.POINTS):I.isSprite&&jt.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)jt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))jt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Lt=I._multiDrawStarts,je=I._multiDrawCounts,he=I._multiDrawCount,ii=ut?J.get(ut).bytesPerElement:1,Zr=Dt.get(H).currentProgram.getUniforms();for(let Pn=0;Pn<he;Pn++)Zr.setValue(L,"_gl_DrawID",Pn),jt.render(Lt[Pn]/ii,je[Pn])}else if(I.isInstancedMesh)jt.renderInstances(ae,_e,I.count);else if(z.isInstancedBufferGeometry){const Lt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,je=Math.min(z.instanceCount,Lt);jt.renderInstances(ae,_e,je)}else jt.render(ae,_e)};function ie(b,U,z){b.transparent===!0&&b.side===Li&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,Ue(b,U,z),b.side=ur,b.needsUpdate=!0,Ue(b,U,z),b.side=Li):Ue(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),p=Gt.get(z),p.init(U),S.push(p),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),b!==z&&b.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const H=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const st=I.material;if(st)if(Array.isArray(st))for(let _t=0;_t<st.length;_t++){const ht=st[_t];ie(ht,z,I),H.add(ht)}else ie(st,z,I),H.add(st)}),S.pop(),p=null,H},this.compileAsync=function(b,U,z=null){const H=this.compile(b,U,z);return new Promise(I=>{function st(){if(H.forEach(function(_t){Dt.get(_t).currentProgram.isReady()&&H.delete(_t)}),H.size===0){I(b);return}setTimeout(st,10)}Ft.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Rt=null;function Tt(b){Rt&&Rt(b)}function ce(){It.stop()}function pt(){It.start()}const It=new Od;It.setAnimationLoop(Tt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(b){Rt=b,$.setAnimationLoop(b),b===null?It.stop():It.start()},$.addEventListener("sessionstart",ce),$.addEventListener("sessionend",pt),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,E),p=Gt.get(b,S.length),p.init(U),S.push(p),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xt.setFromProjectionMatrix(ot),Q=this.localClippingEnabled,q=nt.init(this.clippingPlanes,Q),g=dt.get(b,m.length),g.init(),m.push(g),$.enabled===!0&&$.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Pt(st,U,-1/0,x.sortObjects)}Pt(b,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,rt),Vt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Vt&&xt.addToRenderList(g,b),this.info.render.frame++,q===!0&&nt.beginShadows();const z=p.state.shadowsArray;vt.render(z,b,U),q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,I=g.transmissive;if(p.setupLights(),U.isArrayCamera){const st=U.cameras;if(I.length>0)for(let _t=0,ht=st.length;_t<ht;_t++){const ut=st[_t];Ie(H,I,b,ut)}Vt&&xt.render(b);for(let _t=0,ht=st.length;_t<ht;_t++){const ut=st[_t];Ht(g,b,ut,ut.viewport)}}else I.length>0&&Ie(H,I,b,U),Vt&&xt.render(b),Ht(g,b,U);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,U),oe.resetDefaultState(),P=-1,B=null,S.pop(),S.length>0?(p=S[S.length-1],q===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Pt(b,U,z,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xt.intersectsSprite(b)){H&&yt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const _t=Z.update(b),ht=b.material;ht.visible&&g.push(b,_t,ht,z,yt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xt.intersectsObject(b))){const _t=Z.update(b),ht=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),yt.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),yt.copy(_t.boundingSphere.center)),yt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(ht)){const ut=_t.groups;for(let Ct=0,Nt=ut.length;Ct<Nt;Ct++){const bt=ut[Ct],ae=ht[bt.materialIndex];ae&&ae.visible&&g.push(b,_t,ae,z,yt.z,bt)}}else ht.visible&&g.push(b,_t,ht,z,yt.z,null)}}const st=b.children;for(let _t=0,ht=st.length;_t<ht;_t++)Pt(st[_t],U,z,H)}function Ht(b,U,z,H){const I=b.opaque,st=b.transmissive,_t=b.transparent;p.setupLightsView(z),q===!0&&nt.setGlobalState(x.clippingPlanes,z),H&&F.viewport(v.copy(H)),I.length>0&&$t(I,U,z),st.length>0&&$t(st,U,z),_t.length>0&&$t(_t,U,z),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ie(b,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Xr(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?qo:Fi,minFilter:Ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const st=p.state.transmissionRenderTarget[H.id],_t=H.viewport||v;st.setSize(_t.z,_t.w);const ht=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(k),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&xt.render(z);const ut=x.toneMapping;x.toneMapping=sr;const Ct=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),q===!0&&nt.setGlobalState(x.clippingPlanes,H),$t(b,z,H),A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let bt=0,ae=U.length;bt<ae;bt++){const re=U[bt],_e=re.object,Xe=re.geometry,jt=re.material,Lt=re.group;if(jt.side===Li&&_e.layers.test(H.layers)){const je=jt.side;jt.side=En,jt.needsUpdate=!0,we(_e,z,H,Xe,jt,Lt),jt.side=je,jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st))}x.setRenderTarget(ht),x.setClearColor(k,X),Ct!==void 0&&(H.viewport=Ct),x.toneMapping=ut}function $t(b,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let I=0,st=b.length;I<st;I++){const _t=b[I],ht=_t.object,ut=_t.geometry,Ct=H===null?_t.material:H,Nt=_t.group;ht.layers.test(z.layers)&&we(ht,U,z,ut,Ct,Nt)}}function we(b,U,z,H,I,st){b.onBeforeRender(x,U,z,H,I,st),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(x,U,z,H,b,st),I.transparent===!0&&I.side===Li&&I.forceSinglePass===!1?(I.side=En,I.needsUpdate=!0,x.renderBufferDirect(z,U,H,I,b,st),I.side=ur,I.needsUpdate=!0,x.renderBufferDirect(z,U,H,I,b,st),I.side=Li):x.renderBufferDirect(z,U,H,I,b,st),b.onAfterRender(x,U,z,H,I,st)}function Ue(b,U,z){U.isScene!==!0&&(U=Wt);const H=Dt.get(b),I=p.state.lights,st=p.state.shadowsArray,_t=I.state.version,ht=St.getParameters(b,I.state,st,U,z),ut=St.getProgramCacheKey(ht);let Ct=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?V:M).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",qt),Ct=new Map,H.programs=Ct);let Nt=Ct.get(ut);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===_t)return Se(b,ht),Nt}else ht.uniforms=St.getUniforms(b),b.onBeforeCompile(ht,x),Nt=St.acquireProgram(ht,ut),Ct.set(ut,Nt),H.uniforms=ht.uniforms;const bt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=nt.uniform),Se(b,ht),H.needsLights=Ee(b),H.lightsStateVersion=_t,H.needsLights&&(bt.ambientLightColor.value=I.state.ambient,bt.lightProbe.value=I.state.probe,bt.directionalLights.value=I.state.directional,bt.directionalLightShadows.value=I.state.directionalShadow,bt.spotLights.value=I.state.spot,bt.spotLightShadows.value=I.state.spotShadow,bt.rectAreaLights.value=I.state.rectArea,bt.ltc_1.value=I.state.rectAreaLTC1,bt.ltc_2.value=I.state.rectAreaLTC2,bt.pointLights.value=I.state.point,bt.pointLightShadows.value=I.state.pointShadow,bt.hemisphereLights.value=I.state.hemi,bt.directionalShadowMap.value=I.state.directionalShadowMap,bt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,bt.spotShadowMap.value=I.state.spotShadowMap,bt.spotLightMatrix.value=I.state.spotLightMatrix,bt.spotLightMap.value=I.state.spotLightMap,bt.pointShadowMap.value=I.state.pointShadowMap,bt.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function ye(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Ha.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Se(b,U){const z=Dt.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function pe(b,U,z,H,I){U.isScene!==!0&&(U=Wt),A.resetTextureUnits();const st=U.fog,_t=H.isMeshStandardMaterial?U.environment:null,ht=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:_r,ut=(H.isMeshStandardMaterial?V:M).get(H.envMap||_t),Ct=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!z.morphAttributes.position,ae=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let _e=sr;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(_e=x.toneMapping);const Xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,jt=Xe!==void 0?Xe.length:0,Lt=Dt.get(H),je=p.state.lights;if(q===!0&&(Q===!0||b!==B)){const Yn=b===B&&H.id===P;nt.setState(H,b,Yn)}let he=!1;H.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==je.state.version||Lt.outputColorSpace!==ht||I.isBatchedMesh&&Lt.batching===!1||!I.isBatchedMesh&&Lt.batching===!0||I.isBatchedMesh&&Lt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Lt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Lt.instancing===!1||!I.isInstancedMesh&&Lt.instancing===!0||I.isSkinnedMesh&&Lt.skinning===!1||!I.isSkinnedMesh&&Lt.skinning===!0||I.isInstancedMesh&&Lt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Lt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Lt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Lt.instancingMorph===!1&&I.morphTexture!==null||Lt.envMap!==ut||H.fog===!0&&Lt.fog!==st||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==nt.numPlanes||Lt.numIntersection!==nt.numIntersection)||Lt.vertexAlphas!==Ct||Lt.vertexTangents!==Nt||Lt.morphTargets!==bt||Lt.morphNormals!==ae||Lt.morphColors!==re||Lt.toneMapping!==_e||Lt.morphTargetsCount!==jt)&&(he=!0):(he=!0,Lt.__version=H.version);let ii=Lt.currentProgram;he===!0&&(ii=Ue(H,U,I));let Zr=!1,Pn=!1,El=!1;const Ne=ii.getUniforms(),Hi=Lt.uniforms;if(F.useProgram(ii.program)&&(Zr=!0,Pn=!0,El=!0),H.id!==P&&(P=H.id,Pn=!0),Zr||B!==b){kt.reverseDepthBuffer?(ft.copy(b.projectionMatrix),P_(ft),L_(ft),Ne.setValue(L,"projectionMatrix",ft)):Ne.setValue(L,"projectionMatrix",b.projectionMatrix),Ne.setValue(L,"viewMatrix",b.matrixWorldInverse);const Yn=Ne.map.cameraPosition;Yn!==void 0&&Yn.setValue(L,At.setFromMatrixPosition(b.matrixWorld)),kt.logarithmicDepthBuffer&&Ne.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ne.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,Pn=!0,El=!0)}if(I.isSkinnedMesh){Ne.setOptional(L,I,"bindMatrix"),Ne.setOptional(L,I,"bindMatrixInverse");const Yn=I.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Ne.setValue(L,"boneTexture",Yn.boneTexture,A))}I.isBatchedMesh&&(Ne.setOptional(L,I,"batchingTexture"),Ne.setValue(L,"batchingTexture",I._matricesTexture,A),Ne.setOptional(L,I,"batchingIdTexture"),Ne.setValue(L,"batchingIdTexture",I._indirectTexture,A),Ne.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&Ne.setValue(L,"batchingColorTexture",I._colorsTexture,A));const Tl=z.morphAttributes;if((Tl.position!==void 0||Tl.normal!==void 0||Tl.color!==void 0)&&Ut.update(I,z,ii),(Pn||Lt.receiveShadow!==I.receiveShadow)&&(Lt.receiveShadow=I.receiveShadow,Ne.setValue(L,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Hi.envMap.value=ut,Hi.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Hi.envMapIntensity.value=U.environmentIntensity),Pn&&(Ne.setValue(L,"toneMappingExposure",x.toneMappingExposure),Lt.needsLights&&Rn(Hi,El),st&&H.fog===!0&&it.refreshFogUniforms(Hi,st),it.refreshMaterialUniforms(Hi,H,Y,G,p.state.transmissionRenderTarget[b.id]),Ha.upload(L,ye(Lt),Hi,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ha.upload(L,ye(Lt),Hi,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ne.setValue(L,"center",I.center),Ne.setValue(L,"modelViewMatrix",I.modelViewMatrix),Ne.setValue(L,"normalMatrix",I.normalMatrix),Ne.setValue(L,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Yn=H.uniformsGroups;for(let bl=0,Em=Yn.length;bl<Em;bl++){const vh=Yn[bl];D.update(vh,ii),D.bind(vh,ii)}}return ii}function Rn(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Ee(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,U,z){Dt.get(b.texture).__webglTexture=U,Dt.get(b.depthTexture).__webglTexture=z;const H=Dt.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const z=Dt.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,z=0){E=b,C=U,w=z;let H=!0,I=null,st=!1,_t=!1;if(b){const ut=Dt.get(b);if(ut.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(ut.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(ut.__hasExternalTextures)A.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const bt=b.depthTexture;if(ut.__boundDepthTexture!==bt){if(bt!==null&&Dt.has(bt)&&(b.width!==bt.image.width||b.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(_t=!0);const Nt=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?I=Nt[U][z]:I=Nt[U],st=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?I=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?I=Nt[z]:I=Nt,v.copy(b.viewport),T.copy(b.scissor),N=b.scissorTest}else v.copy(R).multiplyScalar(Y).floor(),T.copy(at).multiplyScalar(Y).floor(),N=zt;if(F.bindFramebuffer(L.FRAMEBUFFER,I)&&H&&F.drawBuffers(b,I),F.viewport(v),F.scissor(T),F.setScissorTest(N),st){const ut=Dt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,z)}else if(_t){const ut=Dt.get(b.texture),Ct=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.__webglTexture,z||0,Ct)}P=-1},this.readRenderTargetPixels=function(b,U,z,H,I,st,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){F.bindFramebuffer(L.FRAMEBUFFER,ht);try{const ut=b.texture,Ct=ut.format,Nt=ut.type;if(!kt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&z>=0&&z<=b.height-I&&L.readPixels(U,z,H,I,Bt.convert(Ct),Bt.convert(Nt),st)}finally{const ut=E!==null?Dt.get(E).__webglFramebuffer:null;F.bindFramebuffer(L.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,H,I,st,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){const ut=b.texture,Ct=ut.format,Nt=ut.type;if(!kt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-H&&z>=0&&z<=b.height-I){F.bindFramebuffer(L.FRAMEBUFFER,ht);const bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),L.readPixels(U,z,H,I,Bt.convert(Ct),Bt.convert(Nt),0);const ae=E!==null?Dt.get(E).__webglFramebuffer:null;F.bindFramebuffer(L.FRAMEBUFFER,ae);const re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await R_(L,re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st),L.deleteBuffer(bt),L.deleteSync(re),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,z=0){b.isTexture!==!0&&(ka("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-z),I=Math.floor(b.image.width*H),st=Math.floor(b.image.height*H),_t=U!==null?U.x:0,ht=U!==null?U.y:0;A.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,_t,ht,I,st),F.unbindTexture()},this.copyTextureToTexture=function(b,U,z=null,H=null,I=0){b.isTexture!==!0&&(ka("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],U=arguments[2],I=arguments[3]||0,z=null);let st,_t,ht,ut,Ct,Nt;z!==null?(st=z.max.x-z.min.x,_t=z.max.y-z.min.y,ht=z.min.x,ut=z.min.y):(st=b.image.width,_t=b.image.height,ht=0,ut=0),H!==null?(Ct=H.x,Nt=H.y):(Ct=0,Nt=0);const bt=Bt.convert(U.format),ae=Bt.convert(U.type);A.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const re=L.getParameter(L.UNPACK_ROW_LENGTH),_e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xe=L.getParameter(L.UNPACK_SKIP_PIXELS),jt=L.getParameter(L.UNPACK_SKIP_ROWS),Lt=L.getParameter(L.UNPACK_SKIP_IMAGES),je=b.isCompressedTexture?b.mipmaps[I]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,je.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,je.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,ut),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,Ct,Nt,st,_t,bt,ae,je.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,Ct,Nt,je.width,je.height,bt,je.data):L.texSubImage2D(L.TEXTURE_2D,I,Ct,Nt,st,_t,bt,ae,je),L.pixelStorei(L.UNPACK_ROW_LENGTH,re),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt),I===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,U,z=null,H=null,I=0){b.isTexture!==!0&&(ka("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,b=arguments[2],U=arguments[3],I=arguments[4]||0);let st,_t,ht,ut,Ct,Nt,bt,ae,re;const _e=b.isCompressedTexture?b.mipmaps[I]:b.image;z!==null?(st=z.max.x-z.min.x,_t=z.max.y-z.min.y,ht=z.max.z-z.min.z,ut=z.min.x,Ct=z.min.y,Nt=z.min.z):(st=_e.width,_t=_e.height,ht=_e.depth,ut=0,Ct=0,Nt=0),H!==null?(bt=H.x,ae=H.y,re=H.z):(bt=0,ae=0,re=0);const Xe=Bt.convert(U.format),jt=Bt.convert(U.type);let Lt;if(U.isData3DTexture)A.setTexture3D(U,0),Lt=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Lt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const je=L.getParameter(L.UNPACK_ROW_LENGTH),he=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ii=L.getParameter(L.UNPACK_SKIP_PIXELS),Zr=L.getParameter(L.UNPACK_SKIP_ROWS),Pn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ut),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ct),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nt),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Lt,I,bt,ae,re,st,_t,ht,Xe,jt,_e.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Lt,I,bt,ae,re,st,_t,ht,Xe,_e.data):L.texSubImage3D(Lt,I,bt,ae,re,st,_t,ht,Xe,jt,_e),L.pixelStorei(L.UNPACK_ROW_LENGTH,je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ii),L.pixelStorei(L.UNPACK_SKIP_ROWS,Zr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pn),I===0&&U.generateMipmaps&&L.generateMipmap(Lt),F.unbindTexture()},this.initRenderTarget=function(b){Dt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){C=0,w=0,E=null,F.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Nu?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===gl?"display-p3":"srgb"}}class GS extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class WS extends xn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new wt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,i=[],s=[],o=[],a=new O,l=new Ce;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ze(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ze(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hu extends yi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class XS extends Hu{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vu(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Sa=new O,ec=new Vu,nc=new Vu,ic=new Vu;class YS extends yi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Sa.subVectors(i[0],i[1]).add(i[0]),c=Sa);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Sa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),ec.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,_,g,p),nc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,_,g,p),ic.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),nc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),ic.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ec.calc(l),nc.calc(l),ic.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mf(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function qS(r,t){const e=1-r;return e*e*t}function $S(r,t){return 2*(1-r)*r*t}function KS(r,t){return r*r*t}function xo(r,t,e,n){return qS(r,t)+$S(r,e)+KS(r,n)}function ZS(r,t){const e=1-r;return e*e*e*t}function JS(r,t){const e=1-r;return 3*e*e*r*t}function jS(r,t){return 3*(1-r)*r*r*t}function QS(r,t){return r*r*r*t}function So(r,t,e,n,i){return ZS(r,t)+JS(r,e)+jS(r,n)+QS(r,i)}class Gd extends yi{constructor(t=new wt,e=new wt,n=new wt,i=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new wt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(So(t,i.x,s.x,o.x,a.x),So(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tM extends yi{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(So(t,i.x,s.x,o.x,a.x),So(t,i.y,s.y,o.y,a.y),So(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wd extends yi{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eM extends yi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xd extends yi{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(xo(t,i.x,s.x,o.x),xo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nM extends yi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(xo(t,i.x,s.x,o.x),xo(t,i.y,s.y,o.y),xo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yd extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(mf(a,l.x,c.x,u.x,d.x),mf(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new wt().fromArray(i))}return this}}var _f=Object.freeze({__proto__:null,ArcCurve:XS,CatmullRomCurve3:YS,CubicBezierCurve:Gd,CubicBezierCurve3:tM,EllipseCurve:Hu,LineCurve:Wd,LineCurve3:eM,QuadraticBezierCurve:Xd,QuadraticBezierCurve3:nM,SplineCurve:Yd});class iM extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _f[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new _f[i.type]().fromJSON(i))}return this}}class rM extends iM{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Wd(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Xd(this.currentPoint.clone(),new wt(t,e),new wt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Gd(this.currentPoint.clone(),new wt(t,e),new wt(n,i),new wt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Yd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Hu(t,e,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gu extends ki{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ze(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/e,d=new O,h=new wt,f=new O,_=new O,g=new O;let p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(_)}for(let S=0;S<=e;S++){const x=n+S*u*i,y=Math.sin(x),C=Math.cos(x);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*y,d.y=t[w].y,d.z=t[w].x*C,o.push(d.x,d.y,d.z),h.x=S/e,h.y=w/(t.length-1),a.push(h.x,h.y);const E=l[3*w+0]*y,P=l[3*w+1],B=l[3*w+0]*C;c.push(E,P,B)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const y=x+S*t.length,C=y,w=y+t.length,E=y+t.length+1,P=y+1;s.push(C,w,P),s.push(E,P,w)}this.setIndex(s),this.setAttribute("position",new Hn(o,3)),this.setAttribute("uv",new Hn(a,2)),this.setAttribute("normal",new Hn(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gu(t.points,t.segments,t.phiStart,t.phiLength)}}class nl extends Gu{constructor(t=1,e=1,n=4,i=8){const s=new rM;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new nl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Wu extends ki{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new O,d=new O,h=new O;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,p=f/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(g),d.y=(t+e*Math.cos(p))*Math.sin(g),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,p=(i+1)*(f-1)+_-1,m=(i+1)*(f-1)+_,S=(i+1)*f+_;o.push(g,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new Hn(a,3)),this.setAttribute("normal",new Hn(l,3)),this.setAttribute("uv",new Hn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ma extends Zo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xu extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sM extends Xu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rc=new Ce,gf=new O,vf=new O;class qd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zu,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gf.setFromMatrixPosition(t.matrixWorld),e.position.copy(gf),vf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vf),e.updateMatrixWorld(),rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xf=new Ce,no=new O,sc=new O;class oM extends qd{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),no.setFromMatrixPosition(t.matrixWorld),n.position.copy(no),sc.copy(n.position),sc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sc),n.updateMatrixWorld(),i.makeTranslation(-no.x,-no.y,-no.z),xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf)}}class Sf extends Xu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new oM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class aM extends qd{constructor(){super(new Fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lM extends Xu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new aM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cu);const io=new O;function $n(r,t,e,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;io.copy(t),io[n]=0,io.normalize();const c=.5*o/(o+a),u=1-io.angleTo(r)/l;return Math.sign(io[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Mf extends $s{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new O,l=new O,c=new O(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,f=u.length/6,_=new O,g=.5/i;for(let p=0,m=0;p<u.length;p+=3,m+=2)switch(a.fromArray(u,p),l.copy(a),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=c.x*Math.sign(a.x)+l.x*s,u[p+1]=c.y*Math.sign(a.y)+l.y*s,u[p+2]=c.z*Math.sign(a.z)+l.z*s,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/f)){case 0:_.set(1,0,0),h[m+0]=$n(_,l,"z","y",s,n),h[m+1]=1-$n(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),h[m+0]=1-$n(_,l,"z","y",s,n),h[m+1]=1-$n(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),h[m+0]=1-$n(_,l,"x","z",s,t),h[m+1]=$n(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),h[m+0]=1-$n(_,l,"x","z",s,t),h[m+1]=1-$n(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),h[m+0]=1-$n(_,l,"x","y",s,t),h[m+1]=1-$n(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),h[m+0]=$n(_,l,"x","y",s,t),h[m+1]=1-$n(_,l,"y","x",s,e);break}}}function Ri(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $d(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},No={duration:.5,overwrite:!1,delay:0},Yu,en,Ae,ti=1e8,ge=1/ti,ou=Math.PI*2,cM=ou/4,uM=0,Kd=Math.sqrt,hM=Math.cos,fM=Math.sin,Je=function(t){return typeof t=="string"},De=function(t){return typeof t=="function"},Bi=function(t){return typeof t=="number"},qu=function(t){return typeof t>"u"},Mi=function(t){return typeof t=="object"},Tn=function(t){return t!==!1},$u=function(){return typeof window<"u"},ya=function(t){return De(t)||Je(t)},Zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,dM=/random\([^)]+\)/g,pM=/,\s*/g,yf=/(?:-?\.?\d|\.)+/gi,Jd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,oc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jd=/[+-]=-?[.\d]+/,mM=/[^,'"\[\]\s]+/gi,_M=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pe,fi,au,Ku,Wn={},il={},Qd,tp=function(t){return(il=ks(t,Wn))&&Cn},Zu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Oo=function(t,e){return!e&&console.warn(t)},ep=function(t,e){return t&&(Wn[t]=e)&&il&&(il[t]=e)||Wn},Fo=function(){return 0},gM={suppressEvents:!0,isStart:!0,kill:!1},Va={suppressEvents:!0,kill:!1},vM={suppressEvents:!0},Ju={},or=[],lu={},np,Nn={},ac={},Ef=30,Ga=[],ju="",Qu=function(t){var e=t[0],n,i;if(Mi(e)||De(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ga.length;i--&&!Ga[i].targetTest(e););n=Ga[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Tp(t[i],n)))||t.splice(i,1);return t},Fr=function(t){return t._gsap||Qu(ei(t))[0]._gsap},ip=function(t,e,n){return(n=t[e])&&De(n)?t[e]():qu(n)&&t.getAttribute&&t.getAttribute(e)||n},bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},Re=function(t){return Math.round(t*1e7)/1e7||0},As=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},xM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},rl=function(){var t=or.length,e=or.slice(0),n,i;for(lu={},or.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},th=function(t){return!!(t._initted||t._startAt||t.add)},rp=function(t,e,n,i){or.length&&!en&&rl(),t.render(e,n,!!(en&&e<0&&th(t))),or.length&&!en&&rl()},sp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(mM).length<2?e:Je(t)?t.trim():t},op=function(t){return t},Xn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},SM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ks=function(t,e){for(var n in e)t[n]=e[n];return t},Tf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Mi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},sl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Mo=function(t){var e=t.parent||Pe,n=t.keyframes?SM(cn(t.keyframes)):Xn;if(Tn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},MM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ap=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},xl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},fr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Br=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},yM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},cu=function(t,e,n,i){return t._startAt&&(en?t._startAt.revert(Va):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},EM=function r(t){return!t||t._ts&&r(t.parent)},bf=function(t){return t._repeat?Hs(t._tTime,t=t.duration()+t._rDelay)*t:0},Hs=function(t,e){var n=Math.floor(t=Re(t/e));return t&&n===t?n-1:n},ol=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Sl=function(t){return t._end=Re(t._start+(t._tDur/Math.abs(t._ts||t._rts||ge)||0))},Ml=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Re(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Sl(t),n._dirty||Br(n,t)),t},lp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ol(t.rawTime(),e),(!e._dur||jo(0,e.totalDuration(),n)-e._tTime>ge)&&e.render(n,!0)),Br(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ge}},mi=function(t,e,n,i){return e.parent&&fr(e),e._start=Re((Bi(n)?n:!n&&al(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Pe?Kn(t,n,e):t._time)+e._delay),e._end=Re(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ap(t,e,"_first","_last",t._sort?"_start":0),al(e)||(t._recent=e),i||lp(t,e),t._ts<0&&Ml(t,t._tTime),t},cp=function(t,e){return(Wn.ScrollTrigger||Zu("scrollTrigger",e))&&Wn.ScrollTrigger.create(e,t)},up=function(t,e,n,i,s){if(nh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!en&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&np!==Bn.frame)return or.push(t),t._lazy=[s,i],1},TM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},al=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},bM=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&TM(t)&&!(!t._initted&&al(t))||(t._ts<0||t._dp._ts<0)&&!al(t))?0:1,a=t._rDelay,l=0,c,u,d;if(a&&t._repeat&&(l=jo(0,t._tDur,e),u=Hs(l,a),t._yoyo&&u&1&&(o=1-o),u!==Hs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||en||i||t._zTime===ge||!e&&t._zTime){if(!t._initted&&up(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ge:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&cu(t,e,n,!0),t._onUpdate&&!n&&zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&fr(t,1),!n&&!en&&(zn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},wM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Vs=function(t,e,n,i){var s=t._repeat,o=Re(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Re(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Ml(t,t._tTime=t._tDur*a),t.parent&&Sl(t),n||Br(t.parent,t),t},wf=function(t){return t instanceof Mn?Br(t):Vs(t,t._dur)},AM={_start:0,endTime:Fo,totalDuration:Fo},Kn=function r(t,e,n){var i=t.labels,s=t._recent||AM,o=t.duration()>=ti?s.endTime(!1):t._dur,a,l,c;return Je(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},yo=function(t,e,n){var i=Bi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ke(e[0],o,e[s+1])},gr=function(t,e){return t||t===0?e(t):e},jo=function(t,e,n){return n<t?t:n>e?e:n},an=function(t,e){return!Je(t)||!(e=_M.exec(t))?"":e[1]},CM=function(t,e,n){return gr(n,function(i){return jo(t,e,i)})},uu=[].slice,hp=function(t,e){return t&&Mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Mi(t[0]))&&!t.nodeType&&t!==fi},RM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Je(i)&&!e||hp(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):Je(t)&&!n&&(au||!Gs())?uu.call((e||Ku).querySelectorAll(t),0):cn(t)?RM(t,n):hp(t)?uu.call(t,0):t?[t]:[]},hu=function(t){return t=ei(t)[0]||Oo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ei(e,n.querySelectorAll?n:n===t?Oo("Invalid scope")||Ku.createElement("div"):t)}},fp=function(t){return t.sort(function(){return .5-Math.random()})},dp=function(t){if(De(t))return t;var e=Mi(t)?t:{each:t},n=zr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,d=i;return Je(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(h,f,_){var g=(_||e).length,p=o[g],m,S,x,y,C,w,E,P,B;if(!p){if(B=e.grid==="auto"?0:(e.grid||[1,ti])[1],!B){for(E=-ti;E<(E=_[B++].getBoundingClientRect().left)&&B<g;);B<g&&B--}for(p=o[g]=[],m=l?Math.min(B,g)*u-.5:i%B,S=B===ti?0:l?g*d/B-.5:i/B|0,E=0,P=ti,w=0;w<g;w++)x=w%B-m,y=S-(w/B|0),p[w]=C=c?Math.abs(c==="y"?y:x):Kd(x*x+y*y),C>E&&(E=C),C<P&&(P=C);i==="random"&&fp(p),p.max=E-P,p.min=P,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(B>g?g-1:c?c==="y"?g/B:B:Math.max(B,g/B))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=an(e.amount||e.each)||0,n=n&&g<0?VM(n):n}return g=(p[h]-p.min)/p.max||0,Re(p.b+(n?n(g):g)*p.v)+p.u}},fu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Re(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Bi(n)?0:an(n))}},pp=function(t,e){var n=cn(t),i,s;return!n&&Mi(t)&&(i=n=t.radius||ti,t.values?(t=ei(t.values),(s=!Bi(t[0]))&&(i*=i)):t=fu(t.increment)),gr(e,n?De(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ti,u=0,d=t.length,h,f;d--;)s?(h=t[d].x-a,f=t[d].y-l,h=h*h+f*f):h=Math.abs(t[d]-a),h<c&&(c=h,u=d);return u=!i||c<=i?t[u]:o,s||u===o||Bi(o)?u:u+an(o)}:fu(t))},mp=function(t,e,n,i){return gr(cn(t)?!e:n===!0?!!(n=0):!i,function(){return cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},PM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},LM=function(t,e){return function(n){return t(parseFloat(n))+(e||an(n))}},DM=function(t,e,n){return gp(t,e,0,1,n)},_p=function(t,e,n){return gr(n,function(i){return t[~~e(i)]})},IM=function r(t,e,n){var i=e-t;return cn(t)?_p(t,r(0,t.length),e):gr(n,function(s){return(i+(s-t)%i)%i+t})},UM=function r(t,e,n){var i=e-t,s=i*2;return cn(t)?_p(t,r(0,t.length-1),e):gr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Bo=function(t){return t.replace(dM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(pM);return mp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},gp=function(t,e,n,i,s){var o=e-t,a=i-n;return gr(s,function(l){return n+((l-t)/o*a||0)})},NM=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Je(t),a={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(cn(t)&&!cn(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(r(t[c-1],t[c]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=ks(cn(t)?[]:{},t));if(!u){for(l in e)eh.call(a,t,l,"get",e[l]);s=function(_){return sh(_,a)||(o?t.p:t)}}}return gr(n,s)},Af=function(t,e,n){var i=t.labels,s=ti,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(t,e,n){var i=t.vars,s=i[e],o=Ae,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&or.length&&rl(),a&&(Ae=a),u=l?s.apply(c,l):s.call(c),Ae=o,u},co=function(t){return fr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!en),t.progress()<1&&zn(t,"onInterrupt"),t},ys,vp=[],xp=function(t){if(t)if(t=!t.name&&t.default||t,$u()||t.headless){var e=t.name,n=De(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Fo,render:sh,add:eh,kill:jM,modifier:JM,rawVars:0},o={targetTest:0,get:0,getSetter:rh,aliases:{},register:0};if(Gs(),t!==i){if(Nn[e])return;Xn(i,Xn(sl(t,s),o)),ks(i.prototype,ks(s,sl(t,o))),Nn[i.prop=e]=i,t.targetTest&&(Ga.push(i),Ju[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ep(e,i),t.register&&t.register(Cn,i,wn)}else vp.push(t)},Me=255,uo={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},lc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},Sp=function(t,e,n){var i=t?Bi(t)?[t>>16,t>>8&Me,t&Me]:0:uo.black,s,o,a,l,c,u,d,h,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),uo[t])i=uo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Me,i&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(yf),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=lc(l+1/3,s,o),i[1]=lc(l,s,o),i[2]=lc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Jd),n&&i.length<4&&(i[3]=1),i}else i=t.match(yf)||uo.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Me,o=i[1]/Me,a=i[2]/Me,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Mp=function(t){var e=[],n=[],i=-1;return t.split(ar).forEach(function(s){var o=s.match(Ms)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Cf=function(t,e,n){var i="",s=(t+i).match(ar),o=e?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=Sp(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Mp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ar,"1").split(Ms),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ar),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},ar=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in uo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),OM=/hsl[a]?\(/,yp=function(t){var e=t.join(" "),n;if(ar.lastIndex=0,ar.test(e))return n=OM.test(e),t[1]=Cf(t[1],n),t[0]=Cf(t[0],n,Mp(t[1])),!0},zo,Bn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,d,h,f,_=function g(p){var m=r()-i,S=p===!0,x,y,C,w;if((m>t||m<0)&&(n+=m-e),i+=m,C=i-n,x=C-o,(x>0||S)&&(w=++d.frame,h=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?0:s-x),y=1),S||(l=c(g)),y)for(f=0;f<a.length;f++)a[f](C,h,w,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Qd&&(!au&&$u()&&(fi=au=window,Ku=fi.document||{},Wn.gsap=Cn,(fi.gsapVersions||(fi.gsapVersions=[])).push(Cn.version),tp(il||fi.GreenSockGlobals||!fi.gsap&&fi||{}),vp.forEach(xp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},zo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),zo=0,c=Fo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,m,S){var x=m?function(y,C,w,E){p(y,C,w,E),d.remove(x)}:p;return d.remove(p),a[S?"unshift":"push"](x),Gs(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d}(),Gs=function(){return!zo&&Bn.wake()},le={},FM=/^[\d.\-M][\d.\-,\s]/,BM=/["']/g,zM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(BM,"").trim():+c,i=l.substr(a+1).trim();return e},kM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},HM=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[zM(e[1])]:kM(t).split(",").map(sp)):le._CE&&FM.test(t)?le._CE("",t):n},VM=function(t){return function(e){return 1-t(1-e)}},zr=function(t,e){return t&&(De(t)?t:le[t]||HM(t))||e},Kr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return bn(t,function(a){le[a]=Wn[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},Ep=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},cc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/ou*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*fM((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Ep(a);return s=ou/s,l.config=function(c,u){return r(t,c,u)},l},uc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ep(n);return i.config=function(s){return r(t,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Kr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;Kr("Elastic",cc("in"),cc("out"),cc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Kr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Kr("Circ",function(r){return-(Kd(1-r*r)-1)});Kr("Sine",function(r){return r===1?1:-hM(r*cM)+1});Kr("Back",uc("in"),uc("out"),uc());le.SteppedEase=le.steps=Wn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ge;return function(a){return((i*jo(0,o,a)|0)+s)*n}}};No.ease=le["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ju+=r+","+r+"Params,"});var Tp=function(t,e){this.id=uM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ip,this.set=e?e.getSetter:rh},ko=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Vs(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),zo||Bn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ml(this,n),!s._dp||s.parent||lp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ge||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Hs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ge?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ol(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ge?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(jo(-Math.abs(this._delay),a,s),i!==!1),Sl(this),yM(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Gs(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==ge,o;if(s)for(this._tTime-=ge,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+ge){s=!1;break}o=o._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Re(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ol(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=vM);var i=en;return en=n,th(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Kn(this,n),Tn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i)),this._dur||(this._zTime=-ge),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ge:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ge,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ge)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=De(n)?n:op,l=function(){var u=i.then;i.then=null,s&&s(),De(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){co(this)},r}();Xn(ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ge,_prom:0,_ps:!1,_rts:1});var Mn=function(r){$d(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Tn(n.sortChildren),Pe&&mi(n.parent||Pe,Ri(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&cp(Ri(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return yo(0,arguments,this),this},e.from=function(i,s,o){return yo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return yo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Mo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,Kn(this,o),1),this},e.call=function(i,s,o){return mi(this,ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ke(i,o,Kn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Mo(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,d){return a.startAt=o,Mo(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Re(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,_,g,p,m,S,x,y,C,w,E;if(this!==Pe&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,x=this._ts,m=!x,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Re(u%p),u===l?(g=this._repeat,h=c):(C=Re(u/p),g=~~C,g&&g===C&&(h=c,g--),h>c&&(h=c)),C=Hs(this._tTime,p),!a&&this._tTime&&C!==g&&this._tTime-C*p-this._dur<=0&&(C=g),w&&g&1&&(h=c-h,E=1),g!==C&&!this._lock){var P=w&&C&1,B=P===(w&&g&1);if(g<C&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Re(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,B&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=wM(this,Re(a),Re(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!C&&(zn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||h>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-ge);break}}f=_}else{f=this._last;for(var v=i<0?i:h;f;){if(_=f._prev,(f._act||v<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,o||en&&th(f)),h!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=v?-ge:ge);break}}f=_}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-ge)._zTime=h>=a?1:-1,this._ts))return this._start=y,Sl(this),this.render(i,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Bi(s)||(s=Kn(this,s,i)),!(i instanceof ko)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Je(i))return this.addLabel(i,s);if(De(i))i=ke.delayedCall(0,i);else return this}return this!==i?mi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ke?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Je(i)?this.removeLabel(i):De(i)?this.killTweensOf(i):(i.parent===this&&xl(this,i),i===this._recent&&(this._recent=this._last),Br(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Re(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Kn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ke.delayedCall(0,s||Fo,o);return a.data="isPause",this._hasPause=1,mi(this,a,Kn(this,i))},e.removePause=function(i){var s=this._first;for(i=Kn(this,i);s;)s._start===i&&s.data==="isPause"&&fr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Qi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ei(i),l=this._first,c=Bi(s),u;l;)l instanceof ke?xM(l._targets,a)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Kn(o,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,_=ke.to(o,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ge,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Vs(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Xn({startAt:{time:Kn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Af(this,Kn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Af(this,Kn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ge)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Re(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Br(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Br(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ti,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,mi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Re(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Vs(o,o===Pe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Pe._ts&&(rp(Pe,ol(i,Pe)),np=Bn.frame),Bn.frame>=Ef){Ef+=Vn.autoSleep||120;var s=Pe._first;if((!s||!s._ts)&&Vn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},t}(ko);Xn(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var GM=function(t,e,n,i,s,o,a){var l=new wn(this._pt,t,e,0,1,Rp,null,s),c=0,u=0,d,h,f,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Bo(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),h=n.match(oc)||[];d=oc.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?As(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=oc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(jd.test(i)||m)&&(l.e=0),this._pt=l,l},eh=function(t,e,n,i,s,o,a,l,c,u){De(i)&&(i=i(s||0,t,o));var d=t[e],h=n!=="get"?n:De(d)?c?t[e.indexOf("set")||!De(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=De(d)?c?$M:Ap:ih,_;if(Je(i)&&(~i.indexOf("random(")&&(i=Bo(i)),i.charAt(1)==="="&&(_=As(h,i)+(an(h)||0),(_||_===0)&&(i=_))),!u||h!==i||du)return!isNaN(h*i)&&i!==""?(_=new wn(this._pt,t,e,+h||0,i-(h||0),typeof d=="boolean"?ZM:Cp,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!d&&!(e in t)&&Zu(e,i),GM.call(this,t,e,h,i,f,l||Vn.stringFilter,c))},WM=function(t,e,n,i,s){if(De(t)&&(t=Eo(t,s,e,n,i)),!Mi(t)||t.style&&t.nodeType||cn(t)||Zd(t))return Je(t)?Eo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Eo(t[a],s,e,n,i);return o},bp=function(t,e,n,i,s,o){var a,l,c,u;if(Nn[t]&&(a=new Nn[t]).init(s,a.rawVars?e[t]:WM(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new wn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ys))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qi,du,nh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!Yu,y=t.timeline,C=i.easeReverse||d,w,E,P,B,v,T,N,k,X,K,G,Y,W;if(y&&(!h||!s)&&(s="none"),t._ease=zr(s,No.ease),t._rEase=C&&(zr(C)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||h&&!i.stagger){if(k=p[0]?Fr(p[0]).harness:0,Y=k&&i[k.prop],w=sl(i,Ju),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?Va:gM),g._lazy=0),o){if(fr(t._startAt=ke.set(p,Xn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en||!a&&!f)&&t._startAt.revert(Va),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),P=Xn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Tn(l),immediateRender:a,stagger:0,parent:m},w),Y&&(P[k.prop]=Y),fr(t._startAt=ke.set(p,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en?t._startAt.revert(Va):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ge,ge);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Tn(l)||l&&!_,E=0;E<p.length;E++){if(v=p[E],N=v._gsap||Qu(p)[E]._gsap,t._ptLookup[E]=K={},lu[N.id]&&or.length&&rl(),G=S===p?E:S.indexOf(v),k&&(X=new k).init(v,Y||w,t,G,S)!==!1&&(t._pt=B=new wn(t._pt,v,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(rt){K[rt]=B}),X.priority&&(T=1)),!k||Y)for(P in w)Nn[P]&&(X=bp(P,w,t,G,v,S))?X.priority&&(T=1):K[P]=B=eh.call(t,v,P,"get",w[P],G,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),x&&t._pt&&(Qi=t,Pe.killTweensOf(v,K,t.globalTime(e)),W=!t.parent,Qi=0),t._pt&&l&&(lu[N.id]=1)}T&&Pp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,h&&e<=0&&y.render(ti,!0,!0)},XM=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return du=1,t.vars[e]="+=0",nh(t,a),du=0,l?Oo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=Oe(n)+an(d.e)),d.b&&(d.b=u.s+an(d.b))},YM=function(t,e){var n=t[0]?Fr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=ks({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},qM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(cn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Eo=function(t,e,n,i,s){return De(t)?t.call(e,n,i,s):Je(t)&&~t.indexOf("random(")?Bo(t):t},ll=ju+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wp={};bn(ll+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return wp[r]=1});ll=ll.split(",");var ke=function(r){$d(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Mo(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Pe,S=(cn(n)||Zd(n)?Bi(n[0]):"length"in i)?[n]:ei(n),x,y,C,w,E,P,B,v;if(a._targets=S.length?Qu(S):Oo("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||h||ya(c)||ya(u)){i=a.vars;var T=i.easeReverse||i.yoyoEase;if(x=a.timeline=new Mn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:S}),x.kill(),x.parent=x._dp=Ri(a),x._start=0,h||ya(c)||ya(u)){if(w=S.length,B=h&&dp(h),Mi(h))for(E in h)~ll.indexOf(E)&&(v||(v={}),v[E]=h[E]);for(y=0;y<w;y++)C=sl(i,wp),C.stagger=0,T&&(C.easeReverse=T),v&&ks(C,v),P=S[y],C.duration=+Eo(c,Ri(a),y,P,S),C.delay=(+Eo(u,Ri(a),y,P,S)||0)-a._delay,!h&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),x.to(P,C,B?B(y,P,S):0),x._ease=le.none;x.duration()?c=u=0:a.timeline=0}else if(_){Mo(Xn(x.vars.defaults,{ease:"none"})),x._ease=zr(_.ease||i.ease||"none");var N=0,k,X,K;if(cn(_))_.forEach(function(G){return x.to(S,G,">")}),x.duration();else{C={};for(E in _)E==="ease"||E==="easeEach"||qM(E,_[E],C,_.easeEach);for(E in C)for(k=C[E].sort(function(G,Y){return G.t-Y.t}),N=0,y=0;y<k.length;y++)X=k[y],K={ease:X.e,duration:(X.t-(y?k[y-1].t:0))/100*c},K[E]=X.v,x.to(S,K,N),N+=K.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!Yu&&(Qi=Ri(a),Pe.killTweensOf(S),Qi=0),mi(m,Ri(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!_&&a._start===Re(m._time)&&Tn(d)&&EM(Ri(a))&&m.data!=="nested")&&(a._tTime=-ge,a.render(Math.max(0,-u)||0)),p&&cp(Ri(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-ge&&!u?l:i<ge?0:i,h,f,_,g,p,m,S,x;if(!c)bM(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=Re(d%g),d===l?(_=this._repeat,h=c):(p=Re(d/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(h=c-h),p=Hs(this._tTime,g),h===a&&!o&&this._initted&&_===p)return this._tTime=d,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Re(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(up(this,u?i:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var C=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(y?-1:1)/C:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(zn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&cu(this,i,s,o),zn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&cu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&fr(this,1),!s&&!(u&&!a)&&(d||a||m)&&(zn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){zo||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nh(this,c),u=this._ease(c/this._dur),XM(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Ml(this,0),this.parent||ap(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?co(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qi&&Qi.vars.overwrite!==!0)._first||co(this),this.parent&&o!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ei(i):a,c=this._ptLookup,u=this._pt,d,h,f,_,g,p,m;if((!s||s==="all")&&MM(a,l))return s==="all"&&(this._pt=0),co(this);for(d=this._op=this._op||[],s!=="all"&&(Je(s)&&(g={},bn(s,function(S){return g[S]=1}),s=g),s=YM(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(d[m]=s,_=h,f={}):(f=d[m]=d[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&xl(this,p,"_pt"),delete h[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&co(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return yo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return yo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Pe.killTweensOf(i,s,o)},t}(ko);Xn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new Mn,e=uu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var ih=function(t,e,n){return t[e]=n},Ap=function(t,e,n){return t[e](n)},$M=function(t,e,n,i){return t[e](i.fp,n)},KM=function(t,e,n){return t.setAttribute(e,n)},rh=function(t,e){return De(t[e])?Ap:qu(t[e])&&t.setAttribute?KM:ih},Cp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ZM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Rp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},sh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},JM=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},jM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?xl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},QM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Pp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},wn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Cp,this.d=l||this,this.set=c||ih,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=QM,this.m=n,this.mt=s,this.tween=i},r}();bn(ju+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ju[r]=1});Wn.TweenMax=Wn.TweenLite=ke;Wn.TimelineLite=Wn.TimelineMax=Mn;Pe=new Mn({sortChildren:!1,defaults:No,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=yp;var kr=[],Wa={},ty=[],Rf=0,ey=0,hc=function(t){return(Wa[t]||ty).map(function(e){return e()})},Ho=function(){var t=Date.now(),e=[];t-Rf>2&&(hc("matchMediaInit"),kr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=fi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),hc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Rf=t,hc("matchMedia"))},Lp=function(){function r(e,n){this.selector=n&&hu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ey++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){De(n)&&(s=i,i=n,n=De);var o=this,a=function(){var c=Ae,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=hu(s)),Ae=o,d=i.apply(o,arguments),De(d)&&o._r.push(d),Ae=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===De?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=kr.length;o--;)kr[o].id===this.id&&kr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Ho):a.removeEventListener("change",Ho)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r}(),ny=function(){function r(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Mi(n)||(n={matches:n});var o=new Lp(0,s||this.scope),a=o.conditions={},l,c,u;Ae&&!o.selector&&(o.selector=Ae.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=fi.matchMedia(n[c]),l&&(kr.indexOf(o)<0&&kr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ho):l.addEventListener("change",Ho),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),cl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return xp(i)})},timeline:function(t){return new Mn(t)},getTweensOf:function(t,e){return Pe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Je(t)&&(t=ei(t)[0]);var s=Fr(t||{}).get,o=n?op:sp;return n==="native"&&(n=""),t&&(e?o((Nn[e]&&Nn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Nn[a]&&Nn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ei(t),t.length>1){var i=t.map(function(u){return Cn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var o=Nn[e],a=Fr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var d=new o;ys._pt=0,d.init(t,n?u+n:u,ys,0,[t]),d.render(1,d),ys._pt&&sh(1,ys)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Cn.to(t,Xn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=zr(t.ease,No.ease)),Tf(No,t||{})},config:function(t){return Tf(Vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Wn[a]&&Oo(e+" effect requires "+a+" plugin.")}),ac[e]=function(a,l,c){return n(ei(a),Xn(l||{},s),c)},o&&(Mn.prototype[e]=function(a,l,c){return this.add(ac[e](a,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=zr(e)},parseEase:function(t,e){return arguments.length?zr(t,e):le},getById:function(t){return Pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Mn(t),i,s;for(n.smoothChildTiming=Tn(t.smoothChildTiming),Pe.remove(n),n._dp=0,n._time=n._tTime=Pe._time,i=Pe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&mi(n,i,i._start-i._delay),i=s;return mi(Pe,n,0),n},context:function(t,e){return t?new Lp(t,e):Ae},matchMedia:function(t){return new ny(t)},matchMediaRefresh:function(){return kr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ho()},addEventListener:function(t,e){var n=Wa[t]||(Wa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Wa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:IM,wrapYoyo:UM,distribute:dp,random:mp,snap:pp,normalize:DM,getUnit:an,clamp:CM,splitColor:Sp,toArray:ei,selector:hu,mapRange:gp,pipe:PM,unitize:LM,interpolate:NM,shuffle:fp},install:tp,effects:ac,ticker:Bn,updateRoot:Mn.updateRoot,plugins:Nn,globalTimeline:Pe,core:{PropTween:wn,globals:ep,Tween:ke,Timeline:Mn,Animation:ko,getCache:Fr,_removeLinkedListItem:xl,reverting:function(){return en},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return Yu=t}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cl[r]=ke[r]});Bn.add(Mn.updateRoot);ys=cl.to({},{duration:0});var iy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ry=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=iy(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},fc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Je(s)&&(l={},bn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}ry(a,s)}}}},Cn=cl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},fc("roundProps",fu),fc("modifiers"),fc("snap",pp))||cl;ke.version=Mn.version=Cn.version="3.15.1";Qd=1;$u()&&Gs();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pf,tr,Cs,oh,Nr,Lf,ah,sy=function(){return typeof window<"u"},zi={},Cr=180/Math.PI,Rs=Math.PI/180,hs=Math.atan2,Df=1e8,lh=/([A-Z])/g,oy=/(left|right|width|margin|padding|x)/i,ay=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ly=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},cy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},uy=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},hy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Dp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ip=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},fy=function(t,e,n){return t.style[e]=n},dy=function(t,e,n){return t.style.setProperty(e,n)},py=function(t,e,n){return t._gsap[e]=n},my=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},_y=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},gy=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Le="transform",An=Le+"Origin",vy=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in zi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=_i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Pi(i,a)}):this.tfm[t]=o.x?o[t]:Pi(i,t),t===An&&(this.tfm.zOrigin=o.zOrigin);else return _i.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},Up=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},xy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(lh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ah(),(!s||!s.isStart)&&!n[Le]&&(Up(n),i.zOrigin&&n[An]&&(n[An]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Np=function(t,e){var n={target:t,props:[],revert:xy,save:vy};return t._gsap||Cn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Op,mu=function(t,e){var n=tr.createElementNS?tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):tr.createElement(t);return n&&n.style?n:tr.createElement(t)},kn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(lh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ws(e)||e,1)||""},If="O,Moz,ms,Ms,Webkit".split(","),Ws=function(t,e,n){var i=e||Nr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(If[o]+t in s););return o<0?null:(o===3?"ms":o>=0?If[o]:"")+t},_u=function(){sy()&&window.document&&(Pf=window,tr=Pf.document,Cs=tr.documentElement,Nr=mu("div")||{style:{}},mu("div"),Le=Ws(Le),An=Le+"Origin",Nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Op=!!Ws("perspective"),ah=Cn.core.reverting,oh=1)},Uf=function(t){var e=t.ownerSVGElement,n=mu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Cs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Cs.removeChild(n),s},Nf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Fp=function(t){var e,n;try{e=t.getBBox()}catch{e=Uf(t),n=1}return e&&(e.width||e.height)||n||(e=Uf(t)),e&&!e.width&&!e.x&&!e.y?{x:+Nf(t,["x","cx","x1"])||0,y:+Nf(t,["y","cy","y1"])||0,width:0,height:0}:e},Bp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Fp(t))},dr=function(t,e){if(e){var n=t.style,i;e in zi&&e!==An&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(lh,"-$1").toLowerCase())):n.removeAttribute(e)}},er=function(t,e,n,i,s,o){var a=new wn(t._pt,e,n,0,1,o?Ip:Dp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Of={deg:1,rad:1,turn:1},Sy={grid:1,flex:1},pr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Nr.style,l=oy.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",_,g,p,m;if(i===o||!s||Of[i]||Of[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&Bp(t),(f||o==="%")&&(zi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Oe(f?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(h?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===tr||!g.appendChild)&&(g=tr.body),p=g._gsap,p&&f&&p.width&&l&&p.time===Bn.time&&!p.uncache)return Oe(s/p.width*d);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=d+i,_=t[u],S?t.style[e]=S:dr(t,e)}else(f||o==="%")&&!Sy[kn(g,"display")]&&(a.position=kn(t,"position")),g===t&&(a.position="static"),g.appendChild(Nr),_=Nr[u],g.removeChild(Nr),a.position="absolute";return l&&f&&(p=Fr(g),p.time=Bn.time,p.width=g[u]),Oe(h?_*s/d:_&&s?d/_*s:0)},Pi=function(t,e,n,i){var s;return oh||_u(),e in _i&&e!=="transform"&&(e=_i[e],~e.indexOf(",")&&(e=e.split(",")[0])),zi[e]&&e!=="transform"?(s=Go(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:hl(kn(t,An))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ul[e]&&ul[e](t,e,n)||kn(t,e)||ip(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?pr(t,e,s,n)+n:s},My=function(t,e,n,i){if(!n||n==="none"){var s=Ws(e,t,1),o=s&&kn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=kn(t,"borderTopColor"))}var a=new wn(this._pt,t.style,e,0,1,Rp),l=0,c=0,u,d,h,f,_,g,p,m,S,x,y,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=kn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=kn(t,e)||i,g?t.style[e]=g:dr(t,e)),u=[n,i],yp(u),n=u[0],i=u[1],h=n.match(Ms)||[],C=i.match(Ms)||[],C.length){for(;d=Ms.exec(i);)p=d[0],S=i.substring(l,d.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),p.charAt(1)==="="&&(p=As(f,p)+y),m=parseFloat(p),x=p.substr((m+"").length),l=Ms.lastIndex-x.length,x||(x=x||Vn.units[e]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(f=pr(t,e,g,x)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Ip:Dp;return jd.test(i)&&(a.e=0),this._pt=a,a},Ff={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ff[n]||n,e[1]=Ff[i]||i,e.join(" ")},Ey=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],zi[a]&&(l=1,a=a==="transformOrigin"?An:Le),dr(n,a);l&&(dr(n,Le),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Go(n,1),o.uncache=1,Up(i)))}},ul={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new wn(t._pt,e,n,0,0,Ey);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Vo=[1,0,0,1,0,0],zp={},kp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Bf=function(t){var e=kn(t,Le);return kp(e)?Vo:e.substr(7).match(Jd).map(Oe)},ch=function(t,e){var n=t._gsap||Fr(t),i=t.style,s=Bf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Vo:s):(s===Vo&&!t.offsetParent&&t!==Cs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Cs.appendChild(t)),s=Bf(t),l?i.display=l:dr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Cs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gu=function(t,e,n,i,s,o){var a=t._gsap,l=s||ch(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],x=e.split(" "),y=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,E,P,B;n?l!==Vo&&(E=f*p-_*g)&&(P=y*(p/E)+C*(-g/E)+(g*S-p*m)/E,B=y*(-_/E)+C*(f/E)-(f*S-_*m)/E,y=P,C=B):(w=Fp(t),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&a.smooth?(m=y-c,S=C-u,a.xOffset=d+(m*f+S*g)-m,a.yOffset=h+(m*_+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[An]="0px 0px",o&&(er(o,a,"xOrigin",c,y),er(o,a,"yOrigin",u,C),er(o,a,"xOffset",d,a.xOffset),er(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+C)},Go=function(t,e){var n=t._gsap||new Tp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=kn(t,An)||"0",u,d,h,f,_,g,p,m,S,x,y,C,w,E,P,B,v,T,N,k,X,K,G,Y,W,rt,R,at,zt,Xt,q,Q;return u=d=h=g=p=m=S=x=y=0,f=_=1,n.svg=!!(t.getCTM&&Bp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),E=ch(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),gu(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,w=n.yOrigin||0,E!==Vo&&(T=E[0],N=E[1],k=E[2],X=E[3],u=K=E[4],d=G=E[5],E.length===6?(f=Math.sqrt(T*T+N*N),_=Math.sqrt(X*X+k*k),g=T||N?hs(N,T)*Cr:0,S=k||X?hs(k,X)*Cr+g:0,S&&(_*=Math.abs(Math.cos(S*Rs))),n.svg&&(u-=C-(C*T+w*k),d-=w-(C*N+w*X))):(Q=E[6],Xt=E[7],R=E[8],at=E[9],zt=E[10],q=E[11],u=E[12],d=E[13],h=E[14],P=hs(Q,zt),p=P*Cr,P&&(B=Math.cos(-P),v=Math.sin(-P),Y=K*B+R*v,W=G*B+at*v,rt=Q*B+zt*v,R=K*-v+R*B,at=G*-v+at*B,zt=Q*-v+zt*B,q=Xt*-v+q*B,K=Y,G=W,Q=rt),P=hs(-k,zt),m=P*Cr,P&&(B=Math.cos(-P),v=Math.sin(-P),Y=T*B-R*v,W=N*B-at*v,rt=k*B-zt*v,q=X*v+q*B,T=Y,N=W,k=rt),P=hs(N,T),g=P*Cr,P&&(B=Math.cos(P),v=Math.sin(P),Y=T*B+N*v,W=K*B+G*v,N=N*B-T*v,G=G*B-K*v,T=Y,K=W),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Oe(Math.sqrt(T*T+N*N+k*k)),_=Oe(Math.sqrt(G*G+Q*Q)),P=hs(K,G),S=Math.abs(P)>2e-4?P*Cr:0,y=q?1/(q<0?-q:q):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!kp(kn(t,Le)),Y&&t.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Oe(f),n.scaleY=Oe(_),n.rotation=Oe(g)+a,n.rotationX=Oe(p)+a,n.rotationY=Oe(m)+a,n.skewX=S+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[An]=hl(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?by:Op?Hp:Ty,n.uncache=0,n},hl=function(t){return(t=t.split(" "))[0]+" "+t[1]},dc=function(t,e,n){var i=an(e);return Oe(parseFloat(e)+parseFloat(pr(t,"x",n+"px",i)))+i},Ty=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Hp(t,e)},Tr="0deg",ro="0px",br=") ",Hp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,x=n.zOrigin,y="",C=m==="auto"&&t&&t!==1||m===!0;if(x&&(d!==Tr||u!==Tr)){var w=parseFloat(u)*Rs,E=Math.sin(w),P=Math.cos(w),B;w=parseFloat(d)*Rs,B=Math.cos(w),o=dc(S,o,E*B*-x),a=dc(S,a,-Math.sin(w)*-x),l=dc(S,l,P*B*-x+x)}p!==ro&&(y+="perspective("+p+br),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(C||o!==ro||a!==ro||l!==ro)&&(y+=l!==ro||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+br),c!==Tr&&(y+="rotate("+c+br),u!==Tr&&(y+="rotateY("+u+br),d!==Tr&&(y+="rotateX("+d+br),(h!==Tr||f!==Tr)&&(y+="skew("+h+", "+f+br),(_!==1||g!==1)&&(y+="scale("+_+", "+g+br),S.style[Le]=y||"translate(0, 0)"},by=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,x=parseFloat(o),y=parseFloat(a),C,w,E,P,B;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Rs,c*=Rs,C=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=Rs,B=Math.tan(c-u),B=Math.sqrt(1+B*B),E*=B,P*=B,u&&(B=Math.tan(u),B=Math.sqrt(1+B*B),C*=B,w*=B)),C=Oe(C),w=Oe(w),E=Oe(E),P=Oe(P)):(C=d,P=h,w=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=pr(f,"x",o,"px"),y=pr(f,"y",a,"px")),(_||g||p||m)&&(x=Oe(x+_-(_*C+g*E)+p),y=Oe(y+g-(_*w+g*P)+m)),(i||s)&&(B=f.getBBox(),x=Oe(x+i/100*B.width),y=Oe(y+s/100*B.height)),B="matrix("+C+","+w+","+E+","+P+","+x+","+y+")",f.setAttribute("transform",B),S&&(f.style[Le]=B)},wy=function(t,e,n,i,s){var o=360,a=Je(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Cr:1),c=l-i,u=i+c+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Df)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Df)%o-~~(c/o)*o)),t._pt=h=new wn(t._pt,e,n,i,c,ly),h.e=u,h.u="deg",t._props.push(n),h},zf=function(t,e){for(var n in e)t[n]=e[n];return t},Ay=function(t,e,n){var i=zf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,h,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Le]=e,a=Go(n,1),dr(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],o[Le]=e,a=Go(n,1),o[Le]=c);for(l in zi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=an(c),_=an(u),d=f!==_?pr(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new wn(t._pt,a,l,d,h-d,pu),t._pt.u=_||0,t._props.push(l));zf(a,i)};bn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});ul[t>1?"border"+r:r]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=o.map(function(_){return Pi(a,_,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,f,d)}});var Vp={name:"css",register:_u,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,d,h,f,_,g,p,m,S,x,y,C,w,E,P,B;oh||_u(),this.styles=this.styles||Np(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Nn[g]&&bp(g,e,n,i,t,s)))){if(f=typeof u,_=ul[g],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Bo(u)),_)_(this,t,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(p=an(c),m=an(u),m?p!==m&&(c=pr(t,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Je(c)&&~c.indexOf("random(")&&(c=Bo(c)),an(c+"")||c==="auto"||(c+=Vn.units[g]||an(Pi(t,g))||""),(c+"").charAt(1)==="="&&(c=Pi(t,g))):c=Pi(t,g),h=parseFloat(c),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),g in _i&&(g==="autoAlpha"&&(h===1&&Pi(t,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),er(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=_i[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in zi,x){if(this.styles.save(g),B=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=kn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=kn(t,"perspective"),v?t.style.perspective=v:dr(t,"perspective")}d=parseFloat(u)}if(y||(C=t._gsap,C.renderTransform&&!e.parseTransform||Go(t,e.parseTransform),w=e.smoothOrigin!==!1&&C.smooth,y=this._pt=new wn(this._pt,a,Le,0,1,C.renderTransform,C,0,-1),y.dep=1),g==="scale")this._pt=new wn(this._pt,C,"scaleY",C.scaleY,(S?As(C.scaleY,S+d):d)-C.scaleY||0,pu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(An,0,a[An]),u=yy(u),C.svg?gu(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==C.zOrigin&&er(this,C,"zOrigin",C.zOrigin,m),er(this,a,g,hl(c),hl(u)));continue}else if(g==="svgOrigin"){gu(t,u,1,w,0,this);continue}else if(g in zp){wy(this,C,g,h,S?As(h,S+u):u);continue}else if(g==="smoothOrigin"){er(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){Ay(this,u,t);continue}}else g in a||(g=Ws(g)||g);if(x||(d||d===0)&&(h||h===0)&&!ay.test(u)&&g in a)p=(c+"").substr((h+"").length),d||(d=0),m=an(u)||(g in Vn.units?Vn.units[g]:p),p!==m&&(h=pr(t,g,c,m)),this._pt=new wn(this._pt,x?C:a,g,h,(S?As(h,S+d):d)-h,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?hy:pu),this._pt.u=m||0,x&&B!==u?(this._pt.b=c,this._pt.e=B,this._pt.r=uy):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=cy);else if(g in a)My.call(this,t,g,c,S?S+u:u);else if(g in t)this.add(t,g,c||t[g],S?S+u:u,i,s);else if(g!=="parseTransform"){Zu(g,u);continue}x||(g in a?P.push(g,0,a[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,c||t[g])),o.push(g)}}E&&Pp(this)},render:function(t,e){if(e.tween._time||!ah())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Pi,aliases:_i,getSetter:function(t,e,n){var i=_i[e];return i&&i.indexOf(",")<0&&(e=i),e in zi&&e!==An&&(t._gsap.x||Pi(t,"x"))?n&&Lf===n?e==="scale"?my:py:(Lf=n||{})&&(e==="scale"?_y:gy):t.style&&!qu(t.style[e])?fy:~e.indexOf("-")?dy:rh(t,e)},core:{_removeProperty:dr,_getMatrix:ch}};Cn.utils.checkPrefix=Ws;Cn.core.getStyleSaver=Np;(function(r,t,e,n){var i=bn(r+","+t+","+e,function(s){zi[s]=1});bn(t,function(s){Vn.units[s]="deg",zp[s]=1}),_i[i[13]]=r+","+t,bn(n,function(s){var o=s.split(":");_i[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Cn.registerPlugin(Vp);var Gn=Cn.registerPlugin(Vp)||Cn;Gn.core.Tween;function Cy(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ry(r,t,e){return t&&Cy(r.prototype,t),r}/*!
 * Observer 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qe,Xa,yn,nr,ir,Ps,Gp,Rr,Ls,Wp,Ni,ai,Xp,Yp=function(){return Qe||typeof window<"u"&&(Qe=window.gsap)&&Qe.registerPlugin&&Qe},qp=1,Es=[],ee=[],xi=[],To=Date.now,vu=function(t,e){return e},Py=function(){var t=Ls.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,xi),ee=n,xi=i,vu=function(o,a){return e[o](a)}},lr=function(t,e){return~xi.indexOf(t)&&xi[xi.indexOf(t)+1][e]},bo=function(t){return!!~Wp.indexOf(t)},fn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ea="scrollLeft",Ta="scrollTop",xu=function(){return Ni&&Ni.isPressed||ee.cache++},fl=function(t,e){var n=function i(s){if(s||s===0){qp&&yn.history.scrollRestoration!=="manual"&&(yn.history.scrollRestoration="manual");var o=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),t(s),i.cacheID=ee.cache,o&&vu("ss",s)}else(e||ee.cache!==i.cacheID||vu("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},vn={s:Ea,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fl(function(r){return arguments.length?yn.scrollTo(r,Ve.sc()):yn.pageXOffset||nr[Ea]||ir[Ea]||Ps[Ea]||0})},Ve={s:Ta,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:fl(function(r){return arguments.length?yn.scrollTo(vn.sc(),r):yn.pageYOffset||nr[Ta]||ir[Ta]||Ps[Ta]||0})},Sn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Qe.utils.toArray)(t)[0]||(typeof t=="string"&&Qe.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ly=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},mr=function(t,e){var n=e.s,i=e.sc;bo(t)&&(t=nr.scrollingElement||ir);var s=ee.indexOf(t),o=i===Ve.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+o]||fn(t,"scroll",xu);var a=ee[s+o],l=a||(ee[s+o]=fl(lr(t,n),!0)||(bo(t)?i:fl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Qe.getProperty(t,"scrollBehavior")==="smooth"),l},Su=function(t,e,n){var i=t,s=t,o=To(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=To();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},h=function(_){var g=a,p=s,m=To();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:d,getVelocity:h}},so=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},kf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},$p=function(){Ls=Qe.core.globals().ScrollTrigger,Ls&&Ls.core&&Py()},Kp=function(t){return Qe=t||Yp(),!Xa&&Qe&&typeof document<"u"&&document.body&&(yn=window,nr=document,ir=nr.documentElement,Ps=nr.body,Wp=[yn,nr,ir,Ps],Qe.utils.clamp,Xp=Qe.core.context||function(){},Rr="onpointerenter"in Ps?"pointer":"mouse",Gp=Fe.isTouch=yn.matchMedia&&yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ai=Fe.eventTypes=("ontouchstart"in ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return qp=0},500),Xa=1),Ls||$p(),Xa};vn.op=Ve;ee.cache=0;var Fe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Xa||Kp(Qe)||console.warn("Please gsap.registerPlugin(Observer)"),Ls||$p();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,x=n.onPress,y=n.onRelease,C=n.onRight,w=n.onLeft,E=n.onUp,P=n.onDown,B=n.onChangeX,v=n.onChangeY,T=n.onChange,N=n.onToggleX,k=n.onToggleY,X=n.onHover,K=n.onHoverEnd,G=n.onMove,Y=n.ignoreCheck,W=n.isNormalizer,rt=n.onGestureStart,R=n.onGestureEnd,at=n.onWheel,zt=n.onEnable,Xt=n.onDisable,q=n.onClick,Q=n.scrollSpeed,ft=n.capture,ot=n.allowClicks,At=n.lockAxis,yt=n.onLockAxis;this.target=a=Sn(a)||ir,this.vars=n,f&&(f=Qe.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(yn.getComputedStyle(Ps).lineHeight)||22);var Wt,Vt,Ot,L,se,Ft,kt,F=this,Jt=0,Dt=0,A=n.passive||!u&&n.passive!==!1,M=mr(a,vn),V=mr(a,Ve),J=M(),et=V(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ai[0]==="pointerdown",St=bo(a),it=a.ownerDocument||nr,dt=[0,0,0],Gt=[0,0,0],nt=0,vt=function(){return nt=To()},xt=function(Tt,ce){return(F.event=Tt)&&f&&Ly(Tt.target,f)||ce&&Z&&Tt.pointerType!=="touch"||Y&&Y(Tt,ce)},Ut=function(){F._vx.reset(),F._vy.reset(),Vt.pause(),d&&d(F)},gt=function(){var Tt=F.deltaX=kf(dt),ce=F.deltaY=kf(Gt),pt=Math.abs(Tt)>=i,It=Math.abs(ce)>=i;T&&(pt||It)&&T(F,Tt,ce,dt,Gt),pt&&(C&&F.deltaX>0&&C(F),w&&F.deltaX<0&&w(F),B&&B(F),N&&F.deltaX<0!=Jt<0&&N(F),Jt=F.deltaX,dt[0]=dt[1]=dt[2]=0),It&&(P&&F.deltaY>0&&P(F),E&&F.deltaY<0&&E(F),v&&v(F),k&&F.deltaY<0!=Dt<0&&k(F),Dt=F.deltaY,Gt[0]=Gt[1]=Gt[2]=0),(L||Ot)&&(G&&G(F),Ot&&(p&&Ot===1&&p(F),S&&S(F),Ot=0),L=!1),Ft&&!(Ft=!1)&&yt&&yt(F),se&&(at(F),se=!1),Wt=0},Yt=function(Tt,ce,pt){dt[pt]+=Tt,Gt[pt]+=ce,F._vx.update(Tt),F._vy.update(ce),c?Wt||(Wt=requestAnimationFrame(gt)):gt()},Bt=function(Tt,ce){At&&!kt&&(F.axis=kt=Math.abs(Tt)>Math.abs(ce)?"x":"y",Ft=!0),kt!=="y"&&(dt[2]+=Tt,F._vx.update(Tt,!0)),kt!=="x"&&(Gt[2]+=ce,F._vy.update(ce,!0)),c?Wt||(Wt=requestAnimationFrame(gt)):gt()},oe=function(Tt){if(!xt(Tt,1)){Tt=so(Tt,u);var ce=Tt.clientX,pt=Tt.clientY,It=ce-F.x,Pt=pt-F.y,Ht=F.isDragging;F.x=ce,F.y=pt,(Ht||(It||Pt)&&(Math.abs(F.startX-ce)>=s||Math.abs(F.startY-pt)>=s))&&(Ot||(Ot=Ht?2:1),Ht||(F.isDragging=!0),Bt(It,Pt))}},D=F.onPress=function(Rt){xt(Rt,1)||Rt&&Rt.button||(F.axis=kt=null,Vt.pause(),F.isPressed=!0,Rt=so(Rt),Jt=Dt=0,F.startX=F.x=Rt.clientX,F.startY=F.y=Rt.clientY,F._vx.reset(),F._vy.reset(),fn(W?a:it,ai[1],oe,A,!0),F.deltaX=F.deltaY=0,x&&x(F))},tt=F.onRelease=function(Rt){if(!xt(Rt,1)){un(W?a:it,ai[1],oe,!0);var Tt=!isNaN(F.y-F.startY),ce=F.isDragging,pt=ce&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),It=so(Rt);!pt&&Tt&&(F._vx.reset(),F._vy.reset(),u&&ot&&Qe.delayedCall(.08,function(){if(To()-nt>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(it.createEvent){var Pt=it.createEvent("MouseEvents");Pt.initMouseEvent("click",!0,!0,yn,1,It.screenX,It.screenY,It.clientX,It.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(Pt)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,d&&ce&&!W&&Vt.restart(!0),Ot&&gt(),m&&ce&&m(F),y&&y(F,pt)}},$=function(Tt){return Tt.touches&&Tt.touches.length>1&&(F.isGesturing=!0)&&rt(Tt,F.isDragging)},j=function(){return(F.isGesturing=!1)||R(F)},lt=function(Tt){if(!xt(Tt)){var ce=M(),pt=V();Yt((ce-J)*Q,(pt-et)*Q,1),J=ce,et=pt,d&&Vt.restart(!0)}},ct=function(Tt){if(!xt(Tt)){Tt=so(Tt,u),at&&(se=!0);var ce=(Tt.deltaMode===1?l:Tt.deltaMode===2?yn.innerHeight:1)*_;Yt(Tt.deltaX*ce,Tt.deltaY*ce,0),d&&!W&&Vt.restart(!0)}},qt=function(Tt){if(!xt(Tt)){var ce=Tt.clientX,pt=Tt.clientY,It=ce-F.x,Pt=pt-F.y;F.x=ce,F.y=pt,L=!0,d&&Vt.restart(!0),(It||Pt)&&Bt(It,Pt)}},xe=function(Tt){F.event=Tt,X(F)},be=function(Tt){F.event=Tt,K(F)},ie=function(Tt){return xt(Tt)||so(Tt,u)&&q(F)};Vt=F._dc=Qe.delayedCall(h||.25,Ut).pause(),F.deltaX=F.deltaY=0,F._vx=Su(0,50,!0),F._vy=Su(0,50,!0),F.scrollX=M,F.scrollY=V,F.isDragging=F.isGesturing=F.isPressed=!1,Xp(this),F.enable=function(Rt){return F.isEnabled||(fn(St?it:a,"scroll",xu),o.indexOf("scroll")>=0&&fn(St?it:a,"scroll",lt,A,ft),o.indexOf("wheel")>=0&&fn(a,"wheel",ct,A,ft),(o.indexOf("touch")>=0&&Gp||o.indexOf("pointer")>=0)&&(fn(a,ai[0],D,A,ft),fn(it,ai[2],tt),fn(it,ai[3],tt),ot&&fn(a,"click",vt,!0,!0),q&&fn(a,"click",ie),rt&&fn(it,"gesturestart",$),R&&fn(it,"gestureend",j),X&&fn(a,Rr+"enter",xe),K&&fn(a,Rr+"leave",be),G&&fn(a,Rr+"move",qt)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=L=Ot=!1,F._vx.reset(),F._vy.reset(),J=M(),et=V(),Rt&&Rt.type&&D(Rt),zt&&zt(F)),F},F.disable=function(){F.isEnabled&&(Es.filter(function(Rt){return Rt!==F&&bo(Rt.target)}).length||un(St?it:a,"scroll",xu),F.isPressed&&(F._vx.reset(),F._vy.reset(),un(W?a:it,ai[1],oe,!0)),un(St?it:a,"scroll",lt,ft),un(a,"wheel",ct,ft),un(a,ai[0],D,ft),un(it,ai[2],tt),un(it,ai[3],tt),un(a,"click",vt,!0),un(a,"click",ie),un(it,"gesturestart",$),un(it,"gestureend",j),un(a,Rr+"enter",xe),un(a,Rr+"leave",be),un(a,Rr+"move",qt),F.isEnabled=F.isPressed=F.isDragging=!1,Xt&&Xt(F))},F.kill=F.revert=function(){F.disable();var Rt=Es.indexOf(F);Rt>=0&&Es.splice(Rt,1),Ni===F&&(Ni=0)},Es.push(F),W&&bo(a)&&(Ni=F),F.enable(g)},Ry(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Fe.version="3.15.1";Fe.create=function(r){return new Fe(r)};Fe.register=Kp;Fe.getAll=function(){return Es.slice()};Fe.getById=function(r){return Es.filter(function(t){return t.vars.id===r})[0]};Yp()&&Qe.registerPlugin(Fe);/*!
 * ScrollTrigger 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mt,gs,te,me,Fn,fe,uh,dl,Wo,wo,ho,ba,sn,yl,Mu,mn,Hf,Vf,vs,Zp,pc,Jp,pn,yu,jp,Qp,Zi,Eu,hh,Ds,fh,cr,Tu,mc,wa=1,on=Date.now,_c=on(),ni=0,fo=0,Gf=function(t,e,n){var i=Un(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Wf=function(t,e){return e&&(!Un(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Dy=function r(){return fo&&requestAnimationFrame(r)},Xf=function(){return yl=1},Yf=function(){return yl=0},di=function(t){return t},po=function(t){return Math.round(t*1e5)/1e5||0},tm=function(){return typeof window<"u"},em=function(){return Mt||tm()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},Yr=function(t){return!!~uh.indexOf(t)},nm=function(t){return(t==="Height"?fh:te["inner"+t])||Fn["client"+t]||fe["client"+t]},im=function(t){return lr(t,"getBoundingClientRect")||(Yr(t)?function(){return Za.width=te.innerWidth,Za.height=fh,Za}:function(){return Di(t)})},Iy=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=lr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?nm(s):t["client"+s])||0}},Uy=function(t,e){return!e||~xi.indexOf(t)?im(t):function(){return Za}},gi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=lr(t,n))?o()-im(t)()[s]:Yr(t)?(Fn[n]||fe[n])-nm(i):t[n]-t["offset"+i])},Aa=function(t,e){for(var n=0;n<vs.length;n+=3)(!e||~e.indexOf(vs[n+1]))&&t(vs[n],vs[n+1],vs[n+2])},Un=function(t){return typeof t=="string"},ln=function(t){return typeof t=="function"},mo=function(t){return typeof t=="number"},Pr=function(t){return typeof t=="object"},oo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},fs=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ds=Math.abs,rm="left",sm="top",dh="right",ph="bottom",Hr="width",Vr="height",Ao="Right",Co="Left",Ro="Top",Po="Bottom",ze="padding",Jn="margin",Xs="Width",mh="Height",He="px",jn=function(t){return te.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Ny=function(t){var e=jn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},qf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Di=function(t,e){var n=e&&jn(t)[Mu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},pl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},om=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Oy=function(t){return function(e){return Mt.utils.snap(om(t),e)}},_h=function(t){var e=Mt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Fy=function(t){return function(e,n){return _h(om(t))(e,n.direction)}},Ca=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ke=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},qe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ra=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},$f={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pa={toggleActions:"play",anticipatePin:0},ml={top:0,left:0,center:.5,bottom:1,right:1},Ya=function(t,e){if(Un(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ml?ml[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},La=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,_=me.createElement("div"),g=Yr(n)||lr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?fe:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,x=S?c:u,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(y+=(i===Ve?dh:ph)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=y,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],qa(_,0,i,S),_},qa=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Xs]=1,s["border"+a+Xs]=0,s[n.p]=e+"px",Mt.set(t,s)},Qt=[],bu={},Xo,Kf=function(){return on()-ni>34&&(Xo||(Xo=requestAnimationFrame(Oi)))},ps=function(){(!pn||!pn.isPressed||pn.startX>fe.clientWidth)&&(ee.cache++,pn?Xo||(Xo=requestAnimationFrame(Oi)):Oi(),ni||$r("scrollStart"),ni=on())},gc=function(){Qp=te.innerWidth,jp=te.innerHeight},_o=function(t){ee.cache++,(t===!0||!sn&&!Jp&&!me.fullscreenElement&&!me.webkitFullscreenElement&&(!yu||Qp!==te.innerWidth||Math.abs(te.innerHeight-jp)>te.innerHeight*.25))&&dl.restart(!0)},qr={},By=[],am=function r(){return qe(ne,"scrollEnd",r)||Or(!0)},$r=function(t){return qr[t]&&qr[t].map(function(e){return e()})||By},In=[],lm=function(t){for(var e=0;e<In.length;e+=5)(!t||In[e+4]&&In[e+4].query===t)&&(In[e].style.cssText=In[e+1],In[e].getBBox&&In[e].setAttribute("transform",In[e+2]||""),In[e+3].uncache=1)},cm=function(){ee.cache++,ee.forEach(function(t){return ln(t)&&(t.rec=t())})},gh=function(t,e){var n;for(mn=0;mn<Qt.length;mn++)n=Qt[mn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));cr=!0,e&&lm(e),e||$r("revert")},um=function(t,e){ee.cache++,(e||!_n)&&ee.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),Un(t)&&(hh=t,te.history.scrollRestoration!==t&&(te.history.scrollRestoration=t))},_n,Gr=0,Zf,zy=function(){if(Zf!==Gr){var t=Zf=Gr;requestAnimationFrame(function(){return t===Gr&&Or(!0)})}},hm=function(){fe.appendChild(Ds),fh=!pn&&Ds.offsetHeight||te.innerHeight,fe.removeChild(Ds)},Jf=function(t){return Wo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Or=function(t,e){if(Fn=me.documentElement,fe=me.body,uh=[te,me,Fn,fe],ni&&!t&&!cr){Ke(ne,"scrollEnd",am);return}hm(),_n=ne.isRefreshing=!0,cr||cm();var n=$r("refreshInit");Zp&&ne.sort(),e||gh(),ee.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qt.slice(0).forEach(function(i){return i.refresh()}),cr=!1,Qt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Tu=1,Jf(!0),Qt.forEach(function(i){var s=gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Jf(!1),Tu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),um(hh,1),dl.pause(),Gr++,_n=2,Oi(2),Qt.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),_n=ne.isRefreshing=!1,$r("refresh")},wu=0,$a=1,Lo,Oi=function(t){if(t===2||!_n&&!cr){ne.isUpdating=!0,Lo&&Lo.update(0);var e=Qt.length,n=on(),i=n-_c>=50,s=e&&Qt[0].scroll();if($a=wu>s?-1:1,_n||(wu=s),i&&(ni&&!yl&&n-ni>200&&(ni=0,$r("scrollEnd")),ho=_c,_c=n),$a<0){for(mn=e;mn-- >0;)Qt[mn]&&Qt[mn].update(0,i);$a=1}else for(mn=0;mn<e;mn++)Qt[mn]&&Qt[mn].update(0,i);ne.isUpdating=!1}Xo=0},Au=[rm,sm,ph,dh,Jn+Po,Jn+Ao,Jn+Ro,Jn+Co,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ka=Au.concat([Hr,Vr,"boxSizing","max"+Xs,"max"+mh,"position",Jn,ze,ze+Ro,ze+Ao,ze+Po,ze+Co]),ky=function(t,e,n){Is(n);var i=t._gsap;if(i.spacerIsNative)Is(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},vc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Au.length,o=e.style,a=t.style,l;s--;)l=Au[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[ph]=a[dh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Hr]=pl(t,vn)+He,o[Vr]=pl(t,Ve)+He,o[ze]=a[Jn]=a[sm]=a[rm]="0",Is(i),a[Hr]=a["max"+Xs]=n[Hr],a[Vr]=a["max"+mh]=n[Vr],a[ze]=n[ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Hy=/([A-Z])/g,Is=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Mt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Hy,"-$1").toLowerCase())}},Da=function(t){for(var e=Ka.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ka[s],n[Ka[s]]);return i.t=t,i},Vy=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Za={left:0,top:0},jf=function(t,e,n,i,s,o,a,l,c,u,d,h,f,_){ln(t)&&(t=t(l)),Un(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Ya("0"+t.substr(3),n):0));var g=f?f.time():0,p,m,S;if(f&&f.seek(0),isNaN(t)||(t=+t),mo(t))f&&(t=Mt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,t)),a&&qa(a,n,i,!0);else{ln(e)&&(e=e(l));var x=(t||"0").split(" "),y,C,w,E;S=Sn(e,l)||fe,y=Di(S)||{},(!y||!y.left&&!y.top)&&jn(S).display==="none"&&(E=S.style.display,S.style.display="block",y=Di(S),E?S.style.display=E:S.style.removeProperty("display")),C=Ya(x[0],y[i.d]),w=Ya(x[1]||"0",n),t=y[i.p]-c[i.p]-u+C+s-w,a&&qa(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var P=t+n,B=o._isStart;p="scroll"+i.d2,qa(o,P,i,B&&P>20||!B&&(d?Math.max(fe[p],Fn[p]):o.parentNode[p])<=P+1),d&&(c=Di(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+He))}return f&&S&&(p=Di(S),f.seek(h),m=Di(S),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*h),f&&f.seek(g),f?t:Math.round(t)},Gy=/(webkit|moz|length|cssText|inset)/i,Qf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===fe){t._stOrig=s.cssText,a=jn(t);for(o in a)!+o&&!Gy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Mt.core.getCache(t).uncache=1,e.appendChild(t)}},fm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ia=function(t,e,n){var i={};i[e.p]="+="+n,Mt.set(t,i)},td=function(t,e){var n=mr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,d){var h=o.tween,f=l.onComplete,_={};c=c||n();var g=fm(n,c,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&Oi()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=Mt.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ke(t,"wheel",n.wheelHandler),ne.isTouch&&Ke(t,"touchmove",n.wheelHandler),s},ne=function(){function r(e,n){gs||r.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Eu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!fo){this.update=this.refresh=this.kill=di;return}n=qf(Un(n)||mo(n)||n.nodeType?{trigger:n}:n,Pa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,x=s.once,y=s.snap,C=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,B=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:Ve,T=!d&&d!==0,N=Sn(n.scroller||te),k=Mt.core.getCache(N),X=Yr(N),K=("pinType"in n?n.pinType:lr(N,"pinType")||X&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=T&&n.toggleActions.split(" "),W="markers"in n?n.markers:Pa.markers,rt=X?0:parseFloat(jn(N)["border"+v.p2+Xs])||0,R=this,at=n.onRefreshInit&&function(){return n.onRefreshInit(R)},zt=Iy(N,X,v),Xt=Uy(N,X),q=0,Q=0,ft=0,ot=mr(N,v),At,yt,Wt,Vt,Ot,L,se,Ft,kt,F,Jt,Dt,A,M,V,J,et,Z,St,it,dt,Gt,nt,vt,xt,Ut,gt,Yt,Bt,oe,D,tt,$,j,lt,ct,qt,xe,be;if(R._startClamp=R._endClamp=!1,R._dir=v,p*=45,R.scroller=N,R.scroll=E?E.time.bind(E):ot,Vt=ot(),cr&&ot.rec==null&&(ot.rec=Vt),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Zp=1,n.refreshPriority===-9999&&(Lo=R)),k.tweenScroll=k.tweenScroll||{top:td(N,Ve),left:td(N,vn)},R.tweenTo=At=k.tweenScroll[v.p],R.scrubDuration=function(pt){$=mo(pt)&&pt,$?tt?tt.duration(pt):tt=Mt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:$,paused:!0,onComplete:function(){return m&&m(R)}}):(tt&&tt.progress(1).kill(),tt=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),oe=0,l||(l=i.vars.id)),y&&((!Pr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in fe.style&&Mt.set(X?[fe,Fn]:N,{scrollBehavior:"auto"}),ee.forEach(function(pt){return ln(pt)&&pt.target===(X?me.scrollingElement||Fn:N)&&(pt.smooth=!1)}),Wt=ln(y.snapTo)?y.snapTo:y.snapTo==="labels"?Oy(i):y.snapTo==="labelsDirectional"?Fy(i):y.directional!==!1?function(pt,It){return _h(y.snapTo)(pt,on()-Q<500?0:It.direction)}:Mt.utils.snap(y.snapTo),j=y.duration||{min:.1,max:2},j=Pr(j)?wo(j.min,j.max):wo(j,j),lt=Mt.delayedCall(y.delay||$/2||.1,function(){var pt=ot(),It=on()-Q<500,Pt=At.tween;if((It||Math.abs(R.getVelocity())<10)&&!Pt&&!yl&&q!==pt){var Ht=(pt-L)/M,Ie=i&&!T?i.totalProgress():Ht,$t=It?0:(Ie-D)/(on()-ho)*1e3||0,we=Mt.utils.clamp(-Ht,1-Ht,ds($t/2)*$t/.185),Ue=Ht+(y.inertia===!1?0:we),ye,Se,pe=y,Rn=pe.onStart,Ee=pe.onInterrupt,b=pe.onComplete;if(ye=Wt(Ue,R),mo(ye)||(ye=Ue),Se=Math.max(0,Math.round(L+ye*M)),pt<=se&&pt>=L&&Se!==pt){if(Pt&&!Pt._initted&&Pt.data<=ds(Se-pt))return;y.inertia===!1&&(we=ye-Ht),At(Se,{duration:j(ds(Math.max(ds(Ue-Ie),ds(ye-Ie))*.185/$t/.05||0)),ease:y.ease||"power3",data:ds(Se-pt),onInterrupt:function(){return lt.restart(!0)&&Ee&&fs(R,Ee)},onComplete:function(){R.update(),q=ot(),i&&!T&&(tt?tt.resetTo("totalProgress",ye,i._tTime/i._tDur):i.progress(ye)),oe=D=i&&!T?i.totalProgress():R.progress,S&&S(R),b&&fs(R,b)}},pt,we*M,Se-pt-we*M),Rn&&fs(R,Rn,At.tween)}}else R.isActive&&q!==pt&&lt.restart(!0)}).pause()),l&&(bu[l]=R),h=R.trigger=Sn(h||f!==!0&&f),be=h&&h._gsap&&h._gsap.stRevert,be&&(be=be(R)),f=f===!0?h:Sn(f),Un(a)&&(a={targets:h,className:a}),f&&(_===!1||_===Jn||(_=!_&&f.parentNode&&f.parentNode.style&&jn(f.parentNode).display==="flex"?!1:ze),R.pin=f,yt=Mt.core.getCache(f),yt.spacer?V=yt.pinState:(w&&(w=Sn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),yt.spacerIsNative=!!w,w&&(yt.spacerState=Da(w))),yt.spacer=Z=w||me.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),yt.pinState=V=Da(f)),n.force3D!==!1&&Mt.set(f,{force3D:!0}),R.spacer=Z=yt.spacer,Bt=jn(f),vt=Bt[_+v.os2],it=Mt.getProperty(f),dt=Mt.quickSetter(f,v.a,He),vc(f,Z,Bt),et=Da(f)),W){Dt=Pr(W)?qf(W,$f):$f,F=La("scroller-start",l,N,v,Dt,0),Jt=La("scroller-end",l,N,v,Dt,0,F),St=F["offset"+v.op.d2];var ie=Sn(lr(N,"content")||N);Ft=this.markerStart=La("start",l,ie,v,Dt,St,0,E),kt=this.markerEnd=La("end",l,ie,v,Dt,St,0,E),E&&(xe=Mt.quickSetter([Ft,kt],v.a,He)),!K&&!(xi.length&&lr(N,"fixedMarkers")===!0)&&(Ny(X?fe:N),Mt.set([F,Jt],{force3D:!0}),Ut=Mt.quickSetter(F,v.a,He),Yt=Mt.quickSetter(Jt,v.a,He))}if(E){var Rt=E.vars.onUpdate,Tt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),Rt&&Rt.apply(E,Tt||[])})}if(R.previous=function(){return Qt[Qt.indexOf(R)-1]},R.next=function(){return Qt[Qt.indexOf(R)+1]},R.revert=function(pt,It){if(!It)return R.kill(!0);var Pt=pt!==!1||!R.enabled,Ht=sn;Pt!==R.isReverted&&(Pt&&(ct=Math.max(ot(),R.scroll.rec||0),ft=R.progress,qt=i&&i.progress()),Ft&&[Ft,kt,F,Jt].forEach(function(Ie){return Ie.style.display=Pt?"none":"block"}),Pt&&(sn=R,R.update(Pt)),f&&(!C||!R.isActive)&&(Pt?ky(f,Z,V):vc(f,Z,jn(f),xt)),Pt||R.update(Pt),sn=Ht,R.isReverted=Pt)},R.refresh=function(pt,It,Pt,Ht){if(!((sn||!R.enabled)&&!It)){if(f&&pt&&ni){Ke(r,"scrollEnd",am);return}!_n&&at&&at(R),sn=R,At.tween&&!Pt&&(At.tween.kill(),At.tween=0),tt&&tt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(jt){return jt.vars.immediateRender&&jt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ie=zt(),$t=Xt(),we=E?E.duration():gi(N,v),Ue=M<=.01||!M,ye=0,Se=Ht||0,pe=Pr(Pt)?Pt.end:n.end,Rn=n.endTrigger||h,Ee=Pr(Pt)?Pt.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),b=R.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer,R),U=h&&Math.max(0,Qt.indexOf(R))||0,z=U,H,I,st,_t,ht,ut,Ct,Nt,bt,ae,re,_e,Xe;for(W&&Pr(Pt)&&(_e=Mt.getProperty(F,v.p),Xe=Mt.getProperty(Jt,v.p));z-- >0;)ut=Qt[z],ut.end||ut.refresh(0,1)||(sn=R),Ct=ut.pin,Ct&&(Ct===h||Ct===f||Ct===b)&&!ut.isReverted&&(ae||(ae=[]),ae.unshift(ut),ut.revert(!0,!0)),ut!==Qt[z]&&(U--,z--);for(ln(Ee)&&(Ee=Ee(R)),Ee=Gf(Ee,"start",R),L=jf(Ee,h,Ie,v,ot(),Ft,F,R,$t,rt,K,we,E,R._startClamp&&"_startClamp")||(f?-.001:0),ln(pe)&&(pe=pe(R)),Un(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(Un(Ee)?Ee.split(" ")[0]:"")+pe:(ye=Ya(pe.substr(2),Ie),pe=Un(Ee)?Ee:(E?Mt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,L):L)+ye,Rn=h)),pe=Gf(pe,"end",R),se=Math.max(L,jf(pe||(Rn?"100% 0":we),Rn,Ie,v,ot()+ye,kt,Jt,R,$t,rt,K,we,E,R._endClamp&&"_endClamp"))||-.001,ye=0,z=U;z--;)ut=Qt[z]||{},Ct=ut.pin,Ct&&ut.start-ut._pinPush<=L&&!E&&ut.end>0&&(H=ut.end-(R._startClamp?Math.max(0,ut.start):ut.start),(Ct===h&&ut.start-ut._pinPush<L||Ct===b)&&isNaN(Ee)&&(ye+=H*(1-ut.progress)),Ct===f&&(Se+=H));if(L+=ye,se+=ye,R._startClamp&&(R._startClamp+=ye),R._endClamp&&!_n&&(R._endClamp=se||-.001,se=Math.min(se,gi(N,v))),M=se-L||(L-=.01)&&.001,Ue&&(ft=Mt.utils.clamp(0,1,Mt.utils.normalize(L,se,ct))),R._pinPush=Se,Ft&&ye&&(H={},H[v.a]="+="+ye,b&&(H[v.p]="-="+ot()),Mt.set([Ft,kt],H)),f&&!(Tu&&R.end>=gi(N,v)))H=jn(f),_t=v===Ve,st=ot(),Gt=parseFloat(it(v.a))+Se,!we&&se>1&&(re=(X?me.scrollingElement||Fn:N).style,re={style:re,value:re["overflow"+v.a.toUpperCase()]},X&&jn(fe)["overflow"+v.a.toUpperCase()]!=="scroll"&&(re.style["overflow"+v.a.toUpperCase()]="scroll")),vc(f,Z,H),et=Da(f),I=Di(f,!0),Nt=K&&mr(N,_t?vn:Ve)(),_?(xt=[_+v.os2,M+Se+He],xt.t=Z,z=_===ze?pl(f,v)+M+Se:0,z&&(xt.push(v.d,z+He),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=z+He)),Is(xt),b&&Qt.forEach(function(jt){jt.pin===b&&jt.vars.pinSpacing!==!1&&(jt._subPinOffset=!0)}),K&&ot(ct)):(z=pl(f,v),z&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=z+He)),K&&(ht={top:I.top+(_t?st-L:Nt)+He,left:I.left+(_t?Nt:st-L)+He,boxSizing:"border-box",position:"fixed"},ht[Hr]=ht["max"+Xs]=Math.ceil(I.width)+He,ht[Vr]=ht["max"+mh]=Math.ceil(I.height)+He,ht[Jn]=ht[Jn+Ro]=ht[Jn+Ao]=ht[Jn+Po]=ht[Jn+Co]="0",ht[ze]=H[ze],ht[ze+Ro]=H[ze+Ro],ht[ze+Ao]=H[ze+Ao],ht[ze+Po]=H[ze+Po],ht[ze+Co]=H[ze+Co],J=Vy(V,ht,C),_n&&ot(0)),i?(bt=i._initted,pc(1),i.render(i.duration(),!0,!0),nt=it(v.a)-Gt+M+Se,gt=Math.abs(M-nt)>1,K&&gt&&J.splice(J.length-2,2),i.render(0,!0,!0),bt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pc(0)):nt=M,re&&(re.value?re.style["overflow"+v.a.toUpperCase()]=re.value:re.style.removeProperty("overflow-"+v.a));else if(h&&ot()&&!E)for(I=h.parentNode;I&&I!==fe;)I._pinOffset&&(L-=I._pinOffset,se-=I._pinOffset),I=I.parentNode;ae&&ae.forEach(function(jt){return jt.revert(!1,!0)}),R.start=L,R.end=se,Vt=Ot=_n?ct:ot(),!E&&!_n&&!cr&&(Vt<ct&&ot(ct),R.scroll.rec=0),R.revert(!1,!0),Q=on(),lt&&(q=-1,lt.restart(!0)),sn=0,i&&T&&(i._initted||qt)&&i.progress()!==qt&&i.progress(qt||0,!0).render(i.time(),!0,!0),(Ue||ft!==R.progress||E||g||i&&!i._initted)&&(i&&!T&&(i._initted||ft||i.vars.immediateRender!==!1)&&i.totalProgress(E&&L<-.001&&!ft?Mt.utils.normalize(L,se,0):ft,!0),R.progress=Ue||(Vt-L)/M===ft?0:ft),f&&_&&(Z._pinOffset=Math.round(R.progress*nt)),tt&&tt.invalidate(),isNaN(_e)||(_e-=Mt.getProperty(F,v.p),Xe-=Mt.getProperty(Jt,v.p),Ia(F,v,_e),Ia(Ft,v,_e-(Ht||0)),Ia(Jt,v,Xe),Ia(kt,v,Xe-(Ht||0))),Ue&&!_n&&R.update(),u&&!_n&&!A&&(A=!0,u(R),A=!1)}},R.getVelocity=function(){return(ot()-Ot)/(on()-ho)*1e3||0},R.endAnimation=function(){oo(R.callbackAnimation),i&&(tt?tt.progress(1):i.paused()?T||oo(i,R.direction<0,1):oo(i,i.reversed()))},R.labelToScroll=function(pt){return i&&i.labels&&(L||R.refresh()||L)+i.labels[pt]/i.duration()*M||0},R.getTrailing=function(pt){var It=Qt.indexOf(R),Pt=R.direction>0?Qt.slice(0,It).reverse():Qt.slice(It+1);return(Un(pt)?Pt.filter(function(Ht){return Ht.vars.preventOverlaps===pt}):Pt).filter(function(Ht){return R.direction>0?Ht.end<=L:Ht.start>=se})},R.update=function(pt,It,Pt){if(!(E&&!Pt&&!pt)){var Ht=_n===!0?ct:R.scroll(),Ie=pt?0:(Ht-L)/M,$t=Ie<0?0:Ie>1?1:Ie||0,we=R.progress,Ue,ye,Se,pe,Rn,Ee,b,U;if(It&&(Ot=Vt,Vt=E?ot():Ht,y&&(D=oe,oe=i&&!T?i.totalProgress():$t)),p&&f&&!sn&&!wa&&ni&&(!$t&&L<Ht+(Ht-Ot)/(on()-ho)*p?$t=1e-4:$t===1&&se>Ht+(Ht-Ot)/(on()-ho)*p&&($t=.9999)),$t!==we&&R.enabled){if(Ue=R.isActive=!!$t&&$t<1,ye=!!we&&we<1,Ee=Ue!==ye,Rn=Ee||!!$t!=!!we,R.direction=$t>we?1:-1,R.progress=$t,Rn&&!sn&&(Se=$t&&!we?0:$t===1?1:we===1?2:3,T&&(pe=!Ee&&Y[Se+1]!=="none"&&Y[Se+1]||Y[Se],U=i&&(pe==="complete"||pe==="reset"||pe in i))),B&&(Ee||U)&&(U||d||!i)&&(ln(B)?B(R):R.getTrailing(B).forEach(function(st){return st.endAnimation()})),T||(tt&&!sn&&!wa?(tt._dp._time-tt._start!==tt._time&&tt.render(tt._dp._time-tt._start),tt.resetTo?tt.resetTo("totalProgress",$t,i._tTime/i._tDur):(tt.vars.totalProgress=$t,tt.invalidate().restart())):i&&i.totalProgress($t,!!(sn&&(Q||pt)))),f){if(pt&&_&&(Z.style[_+v.os2]=vt),!K)dt(po(Gt+nt*$t));else if(Rn){if(b=!pt&&$t>we&&se+1>Ht&&Ht+1>=gi(N,v),C)if(!pt&&(Ue||b)){var z=Di(f,!0),H=Ht-L;Qf(f,fe,z.top+(v===Ve?H:0)+He,z.left+(v===Ve?0:H)+He)}else Qf(f,Z);Is(Ue||b?J:et),gt&&$t<1&&Ue||dt(Gt+($t===1&&!b?nt:0))}}y&&!At.tween&&!sn&&!wa&&lt.restart(!0),a&&(Ee||x&&$t&&($t<1||!mc))&&Wo(a.targets).forEach(function(st){return st.classList[Ue||x?"add":"remove"](a.className)}),o&&!T&&!pt&&o(R),Rn&&!sn?(T&&(U&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(R)),(Ee||!mc)&&(c&&Ee&&fs(R,c),G[Se]&&fs(R,G[Se]),x&&($t===1?R.kill(!1,1):G[Se]=0),Ee||(Se=$t===1?1:3,G[Se]&&fs(R,G[Se]))),P&&!Ue&&Math.abs(R.getVelocity())>(mo(P)?P:2500)&&(oo(R.callbackAnimation),tt?tt.progress(1):oo(i,pe==="reverse"?1:!$t,1))):T&&o&&!sn&&o(R)}if(Yt){var I=E?Ht/E.duration()*(E._caScrollDist||0):Ht;Ut(I+(F._isFlipped?1:0)),Yt(I)}xe&&xe(-Ht/E.duration()*(E._caScrollDist||0))}},R.enable=function(pt,It){R.enabled||(R.enabled=!0,Ke(N,"resize",_o),X||Ke(N,"scroll",ps),at&&Ke(r,"refreshInit",at),pt!==!1&&(R.progress=ft=0,Vt=Ot=q=ot()),It!==!1&&R.refresh())},R.getTween=function(pt){return pt&&At?At.tween:tt},R.setPositions=function(pt,It,Pt,Ht){if(E){var Ie=E.scrollTrigger,$t=E.duration(),we=Ie.end-Ie.start;pt=Ie.start+we*pt/$t,It=Ie.start+we*It/$t}R.refresh(!1,!1,{start:Wf(pt,Pt&&!!R._startClamp),end:Wf(It,Pt&&!!R._endClamp)},Ht),R.update()},R.adjustPinSpacing=function(pt){if(xt&&pt){var It=xt.indexOf(v.d)+1;xt[It]=parseFloat(xt[It])+pt+He,xt[1]=parseFloat(xt[1])+pt+He,Is(xt)}},R.disable=function(pt,It){if(pt!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,It||tt&&tt.pause(),ct=0,yt&&(yt.uncache=1),at&&qe(r,"refreshInit",at),lt&&(lt.pause(),At.tween&&At.tween.kill()&&(At.tween=0)),!X)){for(var Pt=Qt.length;Pt--;)if(Qt[Pt].scroller===N&&Qt[Pt]!==R)return;qe(N,"resize",_o),X||qe(N,"scroll",ps)}},R.kill=function(pt,It){R.disable(pt,It),tt&&!It&&tt.kill(),l&&delete bu[l];var Pt=Qt.indexOf(R);Pt>=0&&Qt.splice(Pt,1),Pt===mn&&$a>0&&mn--,Pt=0,Qt.forEach(function(Ht){return Ht.scroller===R.scroller&&(Pt=1)}),Pt||_n||cr||(R.scroll.rec=0),i&&(i.scrollTrigger=null,pt&&i.revert({kill:!1}),It||i.kill()),Ft&&[Ft,kt,F,Jt].forEach(function(Ht){return Ht.parentNode&&Ht.parentNode.removeChild(Ht)}),Lo===R&&(Lo=0),f&&(yt&&(yt.uncache=1),Pt=0,Qt.forEach(function(Ht){return Ht.pin===f&&Pt++}),Pt||(yt.spacer=0)),n.onKill&&n.onKill(R)},Qt.push(R),R.enable(!1,!1),be&&be(R),i&&i.add&&!M){var ce=R.update;R.update=function(){R.update=ce,ee.cache++,L||se||R.refresh()},Mt.delayedCall(.01,R.update),M=.01,L=se=0}else R.refresh();f&&zy()},r.register=function(n){return gs||(Mt=n||em(),tm()&&window.document&&r.enable(),gs=fo),gs},r.defaults=function(n){if(n)for(var i in n)Pa[i]=n[i];return Pa},r.disable=function(n,i){fo=0,Qt.forEach(function(o){return o[i?"kill":"disable"](n)}),qe(te,"wheel",ps),qe(me,"scroll",ps),clearInterval(ba),qe(me,"touchcancel",di),qe(fe,"touchstart",di),Ca(qe,me,"pointerdown,touchstart,mousedown",Xf),Ca(qe,me,"pointerup,touchend,mouseup",Yf),dl.kill(),Aa(qe);for(var s=0;s<ee.length;s+=3)Ra(qe,ee[s],ee[s+1]),Ra(qe,ee[s],ee[s+2])},r.enable=function(){if(te=window,me=document,Fn=me.documentElement,fe=me.body,Mt){if(Wo=Mt.utils.toArray,wo=Mt.utils.clamp,Eu=Mt.core.context||di,pc=Mt.core.suppressOverwrites||di,hh=te.history.scrollRestoration||"auto",wu=te.pageYOffset||0,Mt.core.globals("ScrollTrigger",r),fe){fo=1,Ds=document.createElement("div"),Ds.style.height="100vh",Ds.style.position="absolute",hm(),Dy(),Fe.register(Mt),r.isTouch=Fe.isTouch,Zi=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yu=Fe.isTouch===1,Ke(te,"wheel",ps),uh=[te,me,Fn,fe],Mt.matchMedia?(r.matchMedia=function(u){var d=Mt.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Mt.addEventListener("matchMediaInit",function(){cm(),gh()}),Mt.addEventListener("matchMediaRevert",function(){return lm()}),Mt.addEventListener("matchMedia",function(){Or(0,1),$r("matchMedia")}),Mt.matchMedia().add("(orientation: portrait)",function(){return gc(),gc})):console.warn("Requires GSAP 3.11.0 or later"),gc(),Ke(me,"scroll",ps);var n=fe.hasAttribute("style"),i=fe.style,s=i.borderTopStyle,o=Mt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Di(fe),Ve.m=Math.round(a.top+Ve.sc())||0,vn.m=Math.round(a.left+vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(fe.setAttribute("style",""),fe.removeAttribute("style")),ba=setInterval(Kf,250),Mt.delayedCall(.5,function(){return wa=0}),Ke(me,"touchcancel",di),Ke(fe,"touchstart",di),Ca(Ke,me,"pointerdown,touchstart,mousedown",Xf),Ca(Ke,me,"pointerup,touchend,mouseup",Yf),Mu=Mt.utils.checkPrefix("transform"),Ka.push(Mu),gs=on(),dl=Mt.delayedCall(.2,Or).pause(),vs=[me,"visibilitychange",function(){var u=te.innerWidth,d=te.innerHeight;me.hidden?(Hf=u,Vf=d):(Hf!==u||Vf!==d)&&_o()},me,"DOMContentLoaded",Or,te,"load",Or,te,"resize",_o],Aa(Ke),Qt.forEach(function(u){return u.enable(0,1)}),l=0;l<ee.length;l+=3)Ra(qe,ee[l],ee[l+1]),Ra(qe,ee[l],ee[l+2])}else if(me){var c=function u(){r.enable(),me.removeEventListener("DOMContentLoaded",u)};me.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(mc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ba)||(ba=i)&&setInterval(Kf,i),"ignoreMobileResize"in n&&(yu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Aa(qe)||Aa(Ke,n.autoRefreshEvents||"none"),Jp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Sn(n),o=ee.indexOf(s),a=Yr(s);~o&&ee.splice(o,a?6:2),i&&(a?xi.unshift(te,i,fe,i,Fn,i):xi.unshift(s,i))},r.clearMatchMedia=function(n){Qt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Un(n)?Sn(n):n).getBoundingClientRect(),a=o[s?Hr:Vr]*i||0;return s?o.right-a>0&&o.left+a<te.innerWidth:o.bottom-a>0&&o.top+a<te.innerHeight},r.positionInViewport=function(n,i,s){Un(n)&&(n=Sn(n));var o=n.getBoundingClientRect(),a=o[s?Hr:Vr],l=i==null?a/2:i in ml?ml[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/te.innerWidth:(o.top+l)/te.innerHeight},r.killAll=function(n){if(Qt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=qr.killAll||[];qr={},i.forEach(function(s){return s()})}},r}();ne.version="3.15.1";ne.saveStyles=function(r){return r?Wo(r).forEach(function(t){if(t&&t.style){var e=In.indexOf(t);e>=0&&In.splice(e,5),In.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),Eu())}}):In};ne.revert=function(r,t){return gh(!r,t)};ne.create=function(r,t){return new ne(r,t)};ne.refresh=function(r){return r?_o(!0):(gs||ne.register())&&Or(!0)};ne.update=function(r){return++ee.cache&&Oi(r===!0?2:0)};ne.clearScrollMemory=um;ne.maxScroll=function(r,t){return gi(r,t?vn:Ve)};ne.getScrollFunc=function(r,t){return mr(Sn(r),t?vn:Ve)};ne.getById=function(r){return bu[r]};ne.getAll=function(){return Qt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ne.isScrolling=function(){return!!ni};ne.snapDirectional=_h;ne.addEventListener=function(r,t){var e=qr[r]||(qr[r]=[]);~e.indexOf(t)||e.push(t)};ne.removeEventListener=function(r,t){var e=qr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ne.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var d=[],h=[],f=Mt.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(_){d.length||f.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&ln(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return ln(s)&&(s=s(),Ke(ne,"refresh",function(){return s=t.batchMax()})),Wo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ne.create(c))}),e};var ed=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},xc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Fe.isTouch?" pinch-zoom":""):"none",t===Fn&&r(fe,e)},Ua={auto:1,scroll:1},Wy=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Mt.core.getCache(s),a=on(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==fe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ua[(l=jn(s)).overflowY]||Ua[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Yr(s)&&(Ua[(l=jn(s)).overflowY]||Ua[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},dm=function(t,e,n,i){return Fe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Wy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ke(me,Fe.eventTypes[0],id,!1,!0)},onDisable:function(){return qe(me,Fe.eventTypes[0],id,!0)}})},Xy=/(input|label|select|textarea)/i,nd,id=function(t){var e=Xy.test(t.target.tagName);(e||nd)&&(t._gsapAllow=!0,nd=e)},Yy=function(t){Pr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Sn(t.target)||Fn,u=Mt.core.globals().ScrollSmoother,d=u&&u.get(),h=Zi&&(t.content&&Sn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=mr(c,Ve),_=mr(c,vn),g=1,p=(Fe.isTouch&&te.visualViewport?te.visualViewport.scale*te.visualViewport.width:te.outerWidth)/te.innerWidth,m=0,S=ln(i)?function(){return i(a)}:function(){return i||2.8},x,y,C=dm(c,t.type,!0,s),w=function(){return y=!1},E=di,P=di,B=function(){l=gi(c,Ve),P=wo(Zi?1:0,l),n&&(E=wo(0,gi(c,vn))),x=Gr},v=function(){h._gsap.y=po(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},T=function(){if(y){requestAnimationFrame(w);var W=po(a.deltaY/2),rt=P(f.v-W);if(h&&rt!==f.v+f.offset){f.offset=rt-f.v;var R=po((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",f.cacheID=ee.cache,Oi()}return!0}f.offset&&v(),y=!0},N,k,X,K,G=function(){B(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return h&&Mt.set(h,{y:"+=0"}),t.ignoreCheck=function(Y){return Zi&&Y.type==="touchmove"&&T()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){y=!1;var Y=g;g=po((te.visualViewport&&te.visualViewport.scale||1)/p),N.pause(),Y!==g&&xc(c,g>1.01?!0:n?!1:"x"),k=_(),X=f(),B(),x=Gr},t.onRelease=t.onGestureStart=function(Y,W){if(f.offset&&v(),!W)K.restart(!0);else{ee.cache++;var rt=S(),R,at;n&&(R=_(),at=R+rt*.05*-Y.velocityX/.227,rt*=ed(_,R,at,gi(c,vn)),N.vars.scrollX=E(at)),R=f(),at=R+rt*.05*-Y.velocityY/.227,rt*=ed(f,R,at,gi(c,Ve)),N.vars.scrollY=P(at),N.invalidate().duration(rt).play(.01),(Zi&&N.vars.scrollY>=l||R>=l-1)&&Mt.to({},{onUpdate:G,duration:rt})}o&&o(Y)},t.onWheel=function(){N._ts&&N.pause(),on()-m>1e3&&(x=0,m=on())},t.onChange=function(Y,W,rt,R,at){if(Gr!==x&&B(),W&&n&&_(E(R[2]===W?k+(Y.startX-Y.x):_()+W-R[1])),rt){f.offset&&v();var zt=at[2]===rt,Xt=zt?X+Y.startY-Y.y:f()+rt-at[1],q=P(Xt);zt&&Xt!==q&&(X+=q-Xt),f(q)}(rt||W)&&Oi()},t.onEnable=function(){xc(c,n?!1:"x"),ne.addEventListener("refresh",G),Ke(te,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),C.enable()},t.onDisable=function(){xc(c,!0),qe(te,"resize",G),ne.removeEventListener("refresh",G),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new Fe(t),a.iOS=Zi,Zi&&!f()&&f(1),Zi&&Mt.ticker.add(di),K=a._dc,N=Mt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:fm(f,f(),function(){return N.pause()})},onUpdate:Oi,onComplete:K.vars.onComplete}),a};ne.sort=function(r){if(ln(r))return Qt.sort(r);var t=te.pageYOffset||0;return ne.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+te.innerHeight}),Qt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ne.observe=function(r){return new Fe(r)};ne.normalizeScroll=function(r){if(typeof r>"u")return pn;if(r===!0&&pn)return pn.enable();if(r===!1){pn&&pn.kill(),pn=r;return}var t=r instanceof Fe?r:Yy(r);return pn&&pn.target===t.target&&pn.kill(),Yr(t.target)&&(pn=t),t};ne.core={_getVelocityProp:Su,_inputObserver:dm,_scrollers:ee,_proxies:xi,bridge:{ss:function(){ni||$r("scrollStart"),ni=on()},ref:function(){return sn}}};em()&&Mt.registerPlugin(ne);var rd="1.3.27";function pm(r,t,e){return Math.max(r,Math.min(t,e))}function qy(r,t,e){return(1-e)*r+e*t}function $y(r,t,e,n){return qy(r,t,1-Math.exp(-e*n))}function Ky(r,t){return(r%t+t)%t}var Zy=class{constructor(){Et(this,"isRunning",!1);Et(this,"value",0);Et(this,"from",0);Et(this,"to",0);Et(this,"currentTime",0);Et(this,"lerp");Et(this,"duration");Et(this,"easing");Et(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const e=pm(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=$y(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Jy(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var jy=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Et(this,"width",0);Et(this,"height",0);Et(this,"scrollHeight",0);Et(this,"scrollWidth",0);Et(this,"debouncedResize");Et(this,"wrapperResizeObserver");Et(this,"contentResizeObserver");Et(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Et(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Et(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Jy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},mm=class{constructor(){Et(this,"events",{})}emit(r,...t){const e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}};const Qy=100/6,$i={passive:!1};function sd(r,t){return r===1?Qy:r===2?t:1}var tE=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Et(this,"touchStart",{x:0,y:0});Et(this,"lastDelta",{x:0,y:0});Et(this,"window",{width:0,height:0});Et(this,"emitter",new mm);Et(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Et(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Et(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Et(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=sd(n,this.window.width),s=sd(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Et(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,$i),this.element.addEventListener("touchstart",this.onTouchStart,$i),this.element.addEventListener("touchmove",this.onTouchMove,$i),this.element.addEventListener("touchend",this.onTouchEnd,$i)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,$i),this.element.removeEventListener("touchstart",this.onTouchStart,$i),this.element.removeEventListener("touchmove",this.onTouchMove,$i),this.element.removeEventListener("touchend",this.onTouchEnd,$i)}};const od=r=>Math.min(1,1.001-2**(-10*r));var eE=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:S=!0,autoRaf:x=!1,anchors:y=!1,autoToggle:C=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:P=E,stopInertiaOnNavigate:B=!1,respectReducedMotion:v=!0}={}){Et(this,"_isScrolling",!1);Et(this,"_isStopped",!1);Et(this,"_isLocked",!1);Et(this,"_preventNextNativeScrollEvent",!1);Et(this,"_resetVelocityTimeout",null);Et(this,"_rafId",null);Et(this,"_isDraggingSelection",!1);Et(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Et(this,"isTouching");Et(this,"isIos");Et(this,"time",0);Et(this,"userData",{});Et(this,"lastVelocity",0);Et(this,"velocity",0);Et(this,"direction",0);Et(this,"options");Et(this,"targetScroll");Et(this,"animatedScroll");Et(this,"animate",new Zy);Et(this,"emitter",new mm);Et(this,"dimensions");Et(this,"virtualScroll");Et(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Et(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Et(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Et(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Et(this,"onPointerDown",r=>{r.button===1&&this.reset()});Et(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>_ instanceof HTMLElement&&(typeof c=="function"&&c?.(_)||_.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&_.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&_.hasAttribute?.("data-lenis-prevent-horizontal")||i&&_.hasAttribute?.("data-lenis-prevent-touch")||s&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Et(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Et(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=rd,window.lenis||(window.lenis={}),window.lenis.version=rd,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=od:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:S,autoRaf:x,anchors:y,autoToggle:C,allowNestedScroll:w,naiveDimensions:P,stopInertiaOnNavigate:B,respectReducedMotion:v},this.dimensions=new jy(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new tE(e,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=r,f=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof Element&&(_=h),_){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}const g=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),S=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=pm(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=od:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,d,h,f,_;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,_=r.clientHeight,a=d>f,l=h>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,S,x,y,C;if(g==="horizontal")p=Math.round(r.scrollLeft),m=d-f,S=t,x=s,y=a,C=c;else if(g==="vertical")p=Math.round(r.scrollTop),m=h-_,S=e,x=o,y=l,C=u;else return!1;return!C&&(p>=m||p<=0)?!0:(S>0?p<m:p>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Ky(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};Gn.registerPlugin(ne);const Yo=matchMedia("(prefers-reduced-motion: reduce)").matches,_m=13111317,gm="./";function nE(){try{const r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl")||r.getContext("experimental-webgl")))}catch{return!1}}const vm=nE();vm||document.body.classList.add("no-webgl");let Do=null;Yo||(Do=new eE({duration:1.1,smoothWheel:!0}),Do.on("scroll",()=>ne.update()),Gn.ticker.add(r=>Do.raf(r*1e3)),Gn.ticker.lagSmoothing(0));let Ji=null,$e=null,Zn;const ms={x:0,y:0};function ad(){const r=new Ss,t=new Ma({color:15921906,roughness:.5,metalness:.06,transparent:!0,opacity:1}),e=new Ma({color:15198183,roughness:.55,metalness:.05,transparent:!0,opacity:1});new Ma({color:16777215,roughness:.6,metalness:.04,transparent:!0,opacity:1});const n=new Ma({color:_m,roughness:.4,metalness:.1,transparent:!0,opacity:1}),i=new gn(new Mf(2.1,1.7,1.6,6,.55),t);r.add(i);const s=new gn(new nl(.42,1.3,8,16),t);s.rotation.z=Math.PI/2,s.position.set(0,.55,.62),r.add(s);const o=new gn(new nl(.4,.7,8,16),t);o.position.set(-1,-.15,.5),o.rotation.z=.7,o.rotation.x=.3,r.add(o);const a=new gn(new Mf(1.5,1.2,1.5,5,.4),e);a.position.set(0,-1.25,-.1),a.scale.set(1,.8,1),r.add(a);const l=new gn(new Wu(.82,.1,10,28),n);return l.position.set(0,-1.25,-.1),l.rotation.x=Math.PI/2,r.add(l),r}function iE(r){return new Promise((t,e)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=e,n.src=r})}function rE(r,t,e,n,i){const s=r.naturalWidth*n,o=r.naturalHeight*i,a=document.createElement("canvas");a.width=640,a.height=Math.max(64,Math.round(640*o/s));const l=a.getContext("2d");l.drawImage(r,r.naturalWidth*t,r.naturalHeight*e,s,o,0,0,a.width,a.height);const c=l.getImageData(0,0,a.width,a.height),u=c.data;for(let h=0;h<u.length;h+=4)u[h+3]=255-Math.min(u[h],u[h+1],u[h+2]);l.putImageData(c,0,0);const d=new WS(a);return d.colorSpace=li,d.anisotropy=4,d}async function ld(r,t,e,n,i,s,o,a){try{const l=await iE(gm+"glove-ref.webp"),c=rE(l,t,e,n,i),u=s,d=u*(c.image.height/c.image.width),h=new gn(new Jo(u,d),new Bu({map:c,transparent:!0,depthWrite:!1,depthTest:!0}));h.position.set(o,a,.865),r.add(h)}catch(l){console.warn("glove decal failed",l)}}function sE(){const r=document.getElementById("scene");Ji=new VS({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"});const t=Math.min(window.devicePixelRatio||1,innerWidth<760?1.6:2);Ji.setPixelRatio(t),Ji.setSize(innerWidth,innerHeight),Ji.toneMapping=fd,Ji.toneMappingExposure=1.05;const e=new GS;Zn=new On(42,innerWidth/innerHeight,.1,100),Zn.position.set(0,0,7.4),e.add(new sM(2105386,0,.45));const n=new lM(16777215,2.1);n.position.set(4,6,5),e.add(n);const i=new Sf(_m,60,40);i.position.set(-5,1,-3),e.add(i);const s=new Sf(16726850,22,30);s.position.set(5,-2,4),e.add(s),$e=new Ss;const o=ad();o.scale.setScalar(.82),o.position.set(-2.45,.05,0),o.rotation.y=.24;const a=ad();a.scale.setScalar(.82),a.position.set(2.45,.05,0),a.rotation.y=-.24,$e.add(o,a),$e.scale.setScalar(0),e.add($e),ld(o,.15,.12,.29,.5,1,.02,.18),ld(a,.53,.14,.38,.47,1.3,0,.2),xm(),Gn.to($e.scale,{x:1,y:1,z:1,duration:Yo?.1:1.8,ease:"expo.out",delay:.2}),Gn.from($e.rotation,{y:-.7,duration:Yo?.1:2,ease:"expo.out",delay:.2}),addEventListener("pointermove",c=>{ms.x=c.clientX/innerWidth-.5,ms.y=c.clientY/innerHeight-.5}),addEventListener("resize",oE),performance.now();function l(c){const u=Sm();if($e){$e.rotation.y=Math.sin(c*4e-4)*.16+ms.x*.3+u*1.8,$e.rotation.x=Zs.lerp($e.rotation.x,-.04+ms.y*.18+u*.45,.06);const d=Math.min(u*2.2,1);$e.position.z=Zs.lerp($e.position.z,-d*3,.06),$e.position.y=Zs.lerp($e.position.y,d*.9,.06);const h=1-Math.min(Math.max((u-.12)*2.2,0),.75);$e.traverse(f=>{f.material&&(f.material.opacity=h)})}Zn.position.x=Zs.lerp(Zn.position.x,ms.x*.8,.05),Zn.position.y=Zs.lerp(Zn.position.y,-ms.y*.5,.05),Zn.lookAt(0,0,0),Ji.render(e,Zn),requestAnimationFrame(l)}requestAnimationFrame(l)}function xm(){if(!$e||!Zn)return;const r=innerWidth<760,t=r?1.35:2.45,e=r?.58:.82,n=$e.children[0],i=$e.children[1];n&&(n.position.x=-t,n.scale.setScalar(e)),i&&(i.position.x=t,i.scale.setScalar(e)),Zn.position.z=r?9.4:7.4}function oE(){Ji&&(Zn.aspect=innerWidth/innerHeight,Zn.updateProjectionMatrix(),Ji.setSize(innerWidth,innerHeight),xm())}function Sm(){const r=document.documentElement.scrollHeight-innerHeight;return r>0?Math.min(Math.max(scrollY/r,0),1):0}if(vm)try{sE()}catch(r){console.warn("3D init failed, fallback",r),document.body.classList.add("no-webgl")}const cd=Gn.utils.toArray("#act0 .rv");Yo?Gn.set(cd,{opacity:1,y:0}):Gn.timeline({delay:.5}).to(cd,{opacity:1,y:0,duration:1.1,ease:"power3.out",stagger:.16});Gn.utils.toArray(".act:not(#act0) .rv").forEach(r=>{if(Yo){Gn.set(r,{opacity:1,y:0});return}Gn.to(r,{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 86%"}})});const aE=document.getElementById("nav"),lE=document.getElementById("scroll-fill"),cE=Array.from(document.querySelectorAll(".nav-acts a"));function Mm(){aE.classList.toggle("sc",scrollY>40),lE.style.width=(Sm()*100).toFixed(2)+"%"}addEventListener("scroll",Mm,{passive:!0});Mm();document.querySelectorAll(".act").forEach(r=>{ne.create({trigger:r,start:"top 55%",end:"bottom 55%",onToggle:t=>{if(!t.isActive)return;const e=r.getAttribute("data-act");cE.forEach(n=>n.classList.toggle("on",n.getAttribute("data-act")===e))}})});document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",t=>{const e=r.getAttribute("href"),n=document.querySelector(e);n&&(t.preventDefault(),Do?Do.scrollTo(n,{offset:0}):n.scrollIntoView({behavior:"smooth"}))})});const uE={beginner:{en:"ZERO TO ONE",title:"新手入門",desc:"完全沒基礎也能開始。新手泰拳從站架、步法與基本拳腿起步，零基礎友善、入門不對打。",rec:"建議路線：新手泰拳 → $400 首堂體驗 → 依程度加私教。",video:"/goal_start.mp4",tag:"LV.1 新手泰拳"},fatloss:{en:"BURN & BUILD",title:"減脂體能",desc:"拳腿循環 × 高強度間歇，一堂約 600–800 大卡。邊學技術邊爆汗，比跑步機更容易持續。",rec:"建議路線：泰拳燃脂 + 肌力體能，一週 2–3 次。",video:"/goal_shred.mp4",tag:"泰拳燃脂"},stress:{en:"RELEASE",title:"紓壓興趣",desc:"把一天的壓力打進沙包。節奏感、專注與成就感，讓運動變成你期待的事。",rec:"建議路線：新手泰拳團課，先從每週一堂開始。",video:"/goal_release.mp4",tag:"團體課程"},skill:{en:"REFINE",title:"技術精進",desc:"組合、距離、時機與情境攻防。把每個動作練對、練穩，看得到進步。",rec:"建議路線：中階泰拳 + 私人教練針對弱點加速。",video:"/goal_skill.mp4",tag:"LV.2 中階泰拳"},spar:{en:"LIVE ROUNDS",title:"實戰對練",desc:"護具下的自由技術對打，距離・時機・節奏的真實應用；需教練評估、指定裝備與當日確認。",rec:"建議路線：自由技術對打（週三／週五），需具備基礎。",video:"/goal_skill.mp4",tag:"LV.3 自由技術對打"},defense:{en:"PROTECT",title:"自我保護",desc:"建立距離感與基本反應，學會保護自己與重要的人。實用、不花俏。",rec:"建議路線：新手泰拳打底 + 私教情境練習。",video:"/goal_start.mp4",tag:"新手＋私教"},fighter:{en:"THE ARENA",title:"選手培訓",desc:"邀請制專項與備賽訓練，技術、體能與複盤並進。為站上擂台做準備。",rec:"建議路線：選手班（邀請制）＋ 教練評估。",video:"/goal_shred.mp4",tag:"ELITE 選手班"}},Ki=document.getElementById("goalVideo"),ao={en:document.getElementById("goalEn"),title:document.getElementById("goalTitle"),desc:document.getElementById("goalDesc"),rec:document.getElementById("goalRec"),tag:document.getElementById("goalTag")};function ym(r){const t=uE[r];t&&(ao.en.textContent=t.en,ao.title.textContent=t.title,ao.desc.textContent=t.desc,ao.rec.textContent=t.rec,ao.tag.textContent=t.tag,Ki.getAttribute("data-src")!==t.video&&(Ki.setAttribute("data-src",t.video),Ki.classList.remove("on"),Ki.src=gm+t.video.replace(/^\//,""),Ki.load(),Ki.play().then(()=>Ki.classList.add("on")).catch(()=>Ki.classList.add("on"))),Gn.fromTo(".goal-copy > *",{opacity:0,y:14},{opacity:1,y:0,duration:.5,stagger:.05,ease:"power2.out",overwrite:!0}))}document.querySelectorAll(".chip").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".chip").forEach(t=>t.classList.remove("is-active")),r.classList.add("is-active"),ym(r.getAttribute("data-goal"))})});ym("beginner");window.__HCF_READY__=!0;
