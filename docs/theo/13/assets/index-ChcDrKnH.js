(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const vh="187",Np=0,au=1,Up=2,Io=1,kd=2,na=3,yi=0,Nn=1,si=2,Xn=0,la=1,xc=2,ou=3,lu=4,Vd=5,Oi=100,Op=101,Fp=102,Bp=103,zp=104,ia=200,kp=201,Vp=202,Gp=203,Gd=204,Hd=205,vc=206,Hp=207,Mc=208,Wp=209,Xp=210,qp=211,Yp=212,Zp=213,$p=214,_c=0,Sc=1,yc=2,va=3,bc=4,Tc=5,wc=6,Ec=7,Wd=0,Kp=1,Jp=2,Bi=0,Xd=1,qd=2,Yd=3,Zd=4,$d=5,Kd=6,Jd=7,Qd=300,Rr=301,Ma=302,Rl=303,Cl=304,$n=1e3,ai=1001,Ac=1002,dn=1003,Qp=1004,Ya=1005,Ln=1006,Pl=1007,vs=1008,Zn=1009,jd=1010,tf=1011,_a=1012,Mh=1013,zi=1014,bi=1015,Qn=1016,_h=1017,Sh=1018,Gs=1020,ef=35902,nf=35899,sf=1021,rf=1022,Ti=1023,Ts=1026,Ji=1027,yh=1028,bh=1029,Hs=1030,Th=1031,wh=1033,Do=33776,Lo=33777,No=33778,Uo=33779,Rc=35840,Cc=35841,Pc=35842,Ic=35843,Dc=36196,Lc=37492,Nc=37496,Uc=37488,Oc=37489,Wo=37490,Fc=37491,Bc=37808,zc=37809,kc=37810,Vc=37811,Gc=37812,Hc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,Zc=37818,$c=37819,Kc=37820,Jc=37821,Qc=36492,jc=36494,th=36495,eh=36283,nh=36284,Xo=36285,ih=36286,jp=3200,qo=0,tm=1,ps="",He="srgb",Yo="srgb-linear",Zo="linear",Ne="srgb",Il=7680,em=519,nm=512,im=513,sm=514,af=515,rm=516,am=517,of=518,lf=519,om=35044,Oo=35048,cu="300 es",wi=2e3,Sa=2001;function lm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cm(){const i=$o("canvas");return i.style.display="block",i}const hu={};function uu(...i){const t="THREE."+i.shift();console.log(t,...i)}function cf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ae(...i){i=cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pe(...i){i=cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function br(...i){const t=i.join(" ");t in hu||(hu[t]=!0,ae(...i))}function hm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const um={[_c]:_c,[yc]:wc,[bc]:bc,[va]:Tc,[Sc]:Sc,[wc]:yc,[Ec]:Ec,[Tc]:va};class Ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const Tr=Math.PI/180,ya=180/Math.PI;function Zs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Eh(i,t){return(i%t+t)%t}function dm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fm(i,t,e){return i!==t?(e-i)/(t-i):0}function ca(i,t,e){return(1-e)*i+e*t}function pm(i,t,e,n){return ca(i,t,1-Math.exp(-e*n))}function mm(i,t=1){return t-Math.abs(Eh(i,t*2)-t)}function gm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mm(i,t){return i+Math.random()*(t-i)}function _m(i){return i*(.5-Math.random())}function Sm(i){i!==void 0&&(du=i);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ym(i){return i*Tr}function bm(i){return i*ya}function Tm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Em(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),g=a((t-n)/2),m=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*p,c*g,o*l);break;case"YZY":i.set(c*g,o*h,c*p,o*l);break;case"ZXZ":i.set(c*p,c*g,o*h,o*l);break;case"XZX":i.set(o*h,c*x,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*x,o*l);break;case"ZYZ":i.set(c*x,c*m,o*h,o*l);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ah(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uf(i,t){if(t.constructor===Float32Array)return i;const e=Ah(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function df(i,t){if(t.constructor===Float32Array)return i;const e=Ah(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const hn={DEG2RAD:Tr,RAD2DEG:ya,generateUUID:Zs,clamp:xe,euclideanModulo:Eh,mapLinear:dm,inverseLerp:fm,lerp:ca,damp:pm,pingpong:mm,smoothstep:gm,smootherstep:xm,randInt:vm,randFloat:Mm,randFloatSpread:_m,seededRandom:Sm,degToRad:ym,radToDeg:bm,isPowerOfTwo:Tm,ceilPowerOfTwo:wm,floorPowerOfTwo:hf,setQuaternionFromProperEuler:Em,normalize:df,denormalize:uf};class At{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],g=r[a+0],m=r[a+1],x=r[a+2],S=r[a+3];if(p!==S||c!==g||l!==m||h!==x){let d=c*g+l*m+h*x+p*S;d<0&&(g=-g,m=-m,x=-x,S=-S,d=-d);let u=1-o;if(d<.9995){const _=Math.acos(d),v=Math.sin(_);u=Math.sin(u*_)/v,o=Math.sin(o*_)/v,c=c*u+g*o,l=l*u+m*o,h=h*u+x*o,p=p*u+S*o}else{c=c*u+g*o,l=l*u+m*o,h=h*u+x*o,p=p*u+S*o;const _=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=_,l*=_,h*=_,p*=_}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[a],g=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+h*p+c*m-l*g,t[e+1]=c*x+h*g+l*p-o*m,t[e+2]=l*x+h*m+o*g-c*p,t[e+3]=h*x-o*p-c*g-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),p=o(r/2),g=c(n/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=g*h*p+l*m*x,this._y=l*m*p-g*h*x,this._z=l*h*x+g*m*p,this._w=l*h*p-g*m*x;break;case"YXZ":this._x=g*h*p+l*m*x,this._y=l*m*p-g*h*x,this._z=l*h*x-g*m*p,this._w=l*h*p+g*m*x;break;case"ZXY":this._x=g*h*p-l*m*x,this._y=l*m*p+g*h*x,this._z=l*h*x+g*m*p,this._w=l*h*p-g*m*x;break;case"ZYX":this._x=g*h*p-l*m*x,this._y=l*m*p+g*h*x,this._z=l*h*x-g*m*p,this._w=l*h*p+g*m*x;break;case"YZX":this._x=g*h*p+l*m*x,this._y=l*m*p+g*h*x,this._z=l*h*x-g*m*p,this._w=l*h*p-g*m*x;break;case"XZY":this._x=g*h*p-l*m*x,this._y=l*m*p-g*h*x,this._z=l*h*x+g*m*p,this._w=l*h*p+g*m*x;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],p=e[10],g=n+o+p;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=s+c*p+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dl.copy(this).projectOnVector(t),this.sub(Dl)}reflect(t){return this.sub(Dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dl=new U,fu=new Oe;class de{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],g=n[2],m=n[5],x=n[8],S=s[0],d=s[3],u=s[6],_=s[1],v=s[4],f=s[7],T=s[2],b=s[5],M=s[8];return r[0]=a*S+o*_+c*T,r[3]=a*d+o*v+c*b,r[6]=a*u+o*f+c*M,r[1]=l*S+h*_+p*T,r[4]=l*d+h*v+p*b,r[7]=l*u+h*f+p*M,r[2]=g*S+m*_+x*T,r[5]=g*d+m*v+x*b,r[8]=g*u+m*f+x*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=h*a-o*l,g=o*c-h*r,m=l*r-a*c,x=e*p+n*g+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=p*S,t[1]=(s*l-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=g*S,t[4]=(h*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=m*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ll.makeScale(t,e)),this}rotate(t){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ll.makeRotation(-t)),this}translate(t,e){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ll=new de,pu=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Am(){const i={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ne&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ne&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ps?Zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yo]:{primaries:t,whitePoint:n,transfer:Zo,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}const ye=Am();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let sr;class Rm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{sr===void 0&&(sr=$o("canvas")),sr.width=t.width,sr.height=t.height;const s=sr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=sr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$o("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ji(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cm=0;class Rh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nl(s[a].image)):r.push(Nl(s[a]))}else r=Nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let Pm=0;const Ul=new U;class Un extends Ys{constructor(t=Un.DEFAULT_IMAGE,e=Un.DEFAULT_MAPPING,n=ai,s=ai,r=Ln,a=vs,o=Ti,c=Zn,l=Un.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Zs(),this.name="",this.source=new Rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $n:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $n:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Qd;Un.DEFAULT_ANISOTROPY=1;class tn{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],p=c[8],g=c[1],m=c[5],x=c[9],S=c[2],d=c[6],u=c[10];if(Math.abs(h-g)<.01&&Math.abs(p-S)<.01&&Math.abs(x-d)<.01){if(Math.abs(h+g)<.1&&Math.abs(p+S)<.1&&Math.abs(x+d)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,f=(m+1)/2,T=(u+1)/2,b=(h+g)/4,M=(p+S)/4,y=(x+d)/4;return v>f&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=M/n):f>T?f<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(f),n=b/s,r=y/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=M/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((d-x)*(d-x)+(p-S)*(p-S)+(g-h)*(g-h));return Math.abs(_)<.001&&(_=1),this.x=(d-x)/_,this.y=(p-S)/_,this.z=(g-h)/_,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Im extends Ys{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Un({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rh(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Im{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ff extends Un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dm extends Un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class be{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,h,p,g,m,x,S,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,p,g,m,x,S,d)}set(t,e,n,s,r,a,o,c,l,h,p,g,m,x,S,d){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=g,u[3]=m,u[7]=x,u[11]=S,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/rr.setFromMatrixColumn(t,0).length(),r=1/rr.setFromMatrixColumn(t,1).length(),a=1/rr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const g=a*h,m=a*p,x=o*h,S=o*p;e[0]=c*h,e[4]=-c*p,e[8]=l,e[1]=m+x*l,e[5]=g-S*l,e[9]=-o*c,e[2]=S-g*l,e[6]=x+m*l,e[10]=a*c}else if(t.order==="YXZ"){const g=c*h,m=c*p,x=l*h,S=l*p;e[0]=g+S*o,e[4]=x*o-m,e[8]=a*l,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=S+g*o,e[10]=a*c}else if(t.order==="ZXY"){const g=c*h,m=c*p,x=l*h,S=l*p;e[0]=g-S*o,e[4]=-a*p,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=S-g*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const g=a*h,m=a*p,x=o*h,S=o*p;e[0]=c*h,e[4]=x*l-m,e[8]=g*l+S,e[1]=c*p,e[5]=S*l+g,e[9]=m*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const g=a*c,m=a*l,x=o*c,S=o*l;e[0]=c*h,e[4]=S-g*p,e[8]=x*p+m,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*p+x,e[10]=g-S*p}else if(t.order==="XZY"){const g=a*c,m=a*l,x=o*c,S=o*l;e[0]=c*h,e[4]=-p,e[8]=l*h,e[1]=g*p+S,e[5]=a*h,e[9]=m*p-x,e[2]=x*p-m,e[6]=o*h,e[10]=S*p+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lm,t,Nm)}lookAt(t,e,n){const s=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ss.crossVectors(n,ei),ss.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ss.crossVectors(n,ei)),ss.normalize(),Za.crossVectors(ei,ss),s[0]=ss.x,s[4]=Za.x,s[8]=ei.x,s[1]=ss.y,s[5]=Za.y,s[9]=ei.y,s[2]=ss.z,s[6]=Za.z,s[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],g=n[9],m=n[13],x=n[2],S=n[6],d=n[10],u=n[14],_=n[3],v=n[7],f=n[11],T=n[15],b=s[0],M=s[4],y=s[8],P=s[12],R=s[1],w=s[5],A=s[9],L=s[13],D=s[2],C=s[6],F=s[10],O=s[14],q=s[3],V=s[7],X=s[11],k=s[15];return r[0]=a*b+o*R+c*D+l*q,r[4]=a*M+o*w+c*C+l*V,r[8]=a*y+o*A+c*F+l*X,r[12]=a*P+o*L+c*O+l*k,r[1]=h*b+p*R+g*D+m*q,r[5]=h*M+p*w+g*C+m*V,r[9]=h*y+p*A+g*F+m*X,r[13]=h*P+p*L+g*O+m*k,r[2]=x*b+S*R+d*D+u*q,r[6]=x*M+S*w+d*C+u*V,r[10]=x*y+S*A+d*F+u*X,r[14]=x*P+S*L+d*O+u*k,r[3]=_*b+v*R+f*D+T*q,r[7]=_*M+v*w+f*C+T*V,r[11]=_*y+v*A+f*F+T*X,r[15]=_*P+v*L+f*O+T*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],p=t[6],g=t[10],m=t[14],x=t[3],S=t[7],d=t[11],u=t[15],_=c*m-l*g,v=o*m-l*p,f=o*g-c*p,T=a*m-l*h,b=a*g-c*h,M=a*p-o*h;return e*(S*_-d*v+u*f)-n*(x*_-d*T+u*b)+s*(x*v-S*T+u*M)-r*(x*f-S*b+d*M)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=t[9],g=t[10],m=t[11],x=t[12],S=t[13],d=t[14],u=t[15],_=e*o-n*a,v=e*c-s*a,f=e*l-r*a,T=n*c-s*o,b=n*l-r*o,M=s*l-r*c,y=h*S-p*x,P=h*d-g*x,R=h*u-m*x,w=p*d-g*S,A=p*u-m*S,L=g*u-m*d,D=_*L-v*A+f*w+T*R-b*P+M*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return t[0]=(o*L-c*A+l*w)*C,t[1]=(s*A-n*L-r*w)*C,t[2]=(S*M-d*b+u*T)*C,t[3]=(g*b-p*M-m*T)*C,t[4]=(c*R-a*L-l*P)*C,t[5]=(e*L-s*R+r*P)*C,t[6]=(d*f-x*M-u*v)*C,t[7]=(h*M-g*f+m*v)*C,t[8]=(a*A-o*R+l*y)*C,t[9]=(n*R-e*A-r*y)*C,t[10]=(x*b-S*f+u*_)*C,t[11]=(p*f-h*b-m*_)*C,t[12]=(o*P-a*w-c*y)*C,t[13]=(e*w-n*P+s*y)*C,t[14]=(S*v-x*T-d*_)*C,t[15]=(h*T-p*v+g*_)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,p=o+o,g=r*l,m=r*h,x=r*p,S=a*h,d=a*p,u=o*p,_=c*l,v=c*h,f=c*p,T=n.x,b=n.y,M=n.z;return s[0]=(1-(S+u))*T,s[1]=(m+f)*T,s[2]=(x-v)*T,s[3]=0,s[4]=(m-f)*b,s[5]=(1-(g+u))*b,s[6]=(d+_)*b,s[7]=0,s[8]=(x+v)*M,s[9]=(d-_)*M,s[10]=(1-(g+S))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=rr.set(s[0],s[1],s[2]).length();const o=rr.set(s[4],s[5],s[6]).length(),c=rr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gi.copy(this);const l=1/a,h=1/o,p=1/c;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,e.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=wi,c=!1){const l=this.elements,h=2*r/(e-t),p=2*r/(n-s),g=(e+t)/(e-t),m=(n+s)/(n-s);let x,S;if(c)x=r/(a-r),S=a*r/(a-r);else if(o===wi)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Sa)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=g,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=wi,c=!1){const l=this.elements,h=2/(e-t),p=2/(n-s),g=-(e+t)/(e-t),m=-(n+s)/(n-s);let x,S;if(c)x=1/(a-r),S=a/(a-r);else if(o===wi)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===Sa)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=g,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rr=new U,gi=new be,Lm=new U(0,0,0),Nm=new U(1,1,1),ss=new U,Za=new U,ei=new U,gu=new be,xu=new Oe;class ts{constructor(t=0,e=0,n=0,s=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],p=s[2],g=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(g,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class pf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Um=0;const vu=new U,ar=new Oe,Hi=new be,$a=new U,Xr=new U,Om=new U,Fm=new Oe,Mu=new U(1,0,0),_u=new U(0,1,0),Su=new U(0,0,1),yu={type:"added"},Bm={type:"removed"},or={type:"childadded",child:null},Ol={type:"childremoved",child:null};class yn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new U,e=new ts,n=new Oe,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new de}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$a.copy(t):$a.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Xr,$a,this.up):Hi.lookAt($a,Xr,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Hi),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yu),or.child=t,this.dispatchEvent(or),or.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bm),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yu),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,Om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),p=a(t.shapes),g=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yn.DEFAULT_UP=new U(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _n extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zm={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const d=e.getJointPose(S,n),u=this._getHandJoint(l,S);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],g=h.position.distanceTo(p.position),m=.02,x=.005;l.inputState.pinching&&g>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&g<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Bl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=Eh(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bl(a,r,t+1/3),this.g=Bl(a,r,t),this.b=Bl(a,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return ye.workingToColorSpace(An.copy(this),t),Math.round(xe(An.r*255,0,255))*65536+Math.round(xe(An.g*255,0,255))*256+Math.round(xe(An.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(An.copy(this),e);const n=An.r,s=An.g,r=An.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=He){ye.workingToColorSpace(An.copy(this),t);const e=An.r,n=An.g,s=An.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(Ka);const n=ca(rs.h,Ka.h,e),s=ca(rs.s,Ka.s,e),r=ca(rs.l,Ka.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Zt;Zt.NAMES=mf;class gf extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xi=new U,Wi=new U,zl=new U,Xi=new U,lr=new U,cr=new U,bu=new U,kl=new U,Vl=new U,Gl=new U,Hl=new tn,Wl=new tn,Xl=new tn;class di{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xi.subVectors(t,e),s.cross(xi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xi.subVectors(s,e),Wi.subVectors(n,e),zl.subVectors(t,e);const a=xi.dot(xi),o=xi.dot(Wi),c=xi.dot(zl),l=Wi.dot(Wi),h=Wi.dot(zl),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const g=1/p,m=(l*c-o*h)*g,x=(a*h-o*c)*g;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xi.x),c.addScaledVector(a,Xi.y),c.addScaledVector(o,Xi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Hl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Hl.fromBufferAttribute(t,e),Wl.fromBufferAttribute(t,n),Xl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Hl,r.x),a.addScaledVector(Wl,r.y),a.addScaledVector(Xl,r.z),a}static isFrontFacing(t,e,n,s){return xi.subVectors(n,e),Wi.subVectors(t,e),xi.cross(Wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),xi.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return di.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return di.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;lr.subVectors(s,n),cr.subVectors(r,n),kl.subVectors(t,n);const c=lr.dot(kl),l=cr.dot(kl);if(c<=0&&l<=0)return e.copy(n);Vl.subVectors(t,s);const h=lr.dot(Vl),p=cr.dot(Vl);if(h>=0&&p<=h)return e.copy(s);const g=c*p-h*l;if(g<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(lr,a);Gl.subVectors(t,r);const m=lr.dot(Gl),x=cr.dot(Gl);if(x>=0&&m<=x)return e.copy(r);const S=m*l-c*x;if(S<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(cr,o);const d=h*x-m*p;if(d<=0&&p-h>=0&&m-x>=0)return bu.subVectors(r,s),o=(p-h)/(p-h+(m-x)),e.copy(s).addScaledVector(bu,o);const u=1/(d+S+g);return a=S*u,o=g*u,e.copy(n).addScaledVector(lr,a).addScaledVector(cr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $s{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ja.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(t.matrixWorld),this.union(Ja)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Qa.subVectors(this.max,qr),hr.subVectors(t.a,qr),ur.subVectors(t.b,qr),dr.subVectors(t.c,qr),as.subVectors(ur,hr),os.subVectors(dr,ur),Ls.subVectors(hr,dr);let e=[0,-as.z,as.y,0,-os.z,os.y,0,-Ls.z,Ls.y,as.z,0,-as.x,os.z,0,-os.x,Ls.z,0,-Ls.x,-as.y,as.x,0,-os.y,os.x,0,-Ls.y,Ls.x,0];return!ql(e,hr,ur,dr,Qa)||(e=[1,0,0,0,1,0,0,0,1],!ql(e,hr,ur,dr,Qa))?!1:(ja.crossVectors(as,os),e=[ja.x,ja.y,ja.z],ql(e,hr,ur,dr,Qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qi=[new U,new U,new U,new U,new U,new U,new U,new U],vi=new U,Ja=new $s,hr=new U,ur=new U,dr=new U,as=new U,os=new U,Ls=new U,qr=new U,Qa=new U,ja=new U,Ns=new U;function ql(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ns.fromArray(i,r);const o=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=t.dot(Ns),l=e.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const sn=new U,to=new At;let km=0;class fi extends Ys{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=om,this.updateRanges=[],this.gpuType=bi,this.version=0,this._normalizationScale=t!==void 0?Ah(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):uf(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):df(t,this.array)}}class xf extends fi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vf extends fi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Bt extends fi{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Vm=new $s,Yr=new U,Yl=new U;class Ur{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);const e=Yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(Yl)),this.expandByPoint(Yr.copy(t.center).sub(Yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Gm=0;const ci=new be,Zl=new yn,fr=new U,ni=new $s,Zr=new $s,vn=new U;class Se extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lm(t)?vf:xf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,n){return ci.makeTranslation(t,e,n),this.applyMatrix4(ci),this}scale(t,e,n){return ci.makeScale(t,e,n),this.applyMatrix4(ci),this}lookAt(t){return Zl.lookAt(t),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(ni.min,Zr.min),ni.expandByPoint(vn),vn.addVectors(ni.max,Zr.max),ni.expandByPoint(vn)):(ni.expandByPoint(Zr.min),ni.expandByPoint(Zr.max))}ni.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)vn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(vn));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)vn.fromBufferAttribute(o,l),c&&(fr.fromBufferAttribute(t,l),vn.add(fr)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new U,c[P]=new U;const h=new U,p=new U,g=new U,m=new At,x=new At,S=new At,d=new U,u=new U;function _(P,R,w){l[P]=l[R]=l[w]=1,h.fromBufferAttribute(n,P),p.fromBufferAttribute(n,R),g.fromBufferAttribute(n,w),m.fromBufferAttribute(r,P),x.fromBufferAttribute(r,R),S.fromBufferAttribute(r,w),p.sub(h),g.sub(h),x.sub(m),S.sub(m);const A=1/(x.x*S.y-S.x*x.y);isFinite(A)&&(d.copy(p).multiplyScalar(S.y).addScaledVector(g,-x.y).multiplyScalar(A),u.copy(g).multiplyScalar(x.x).addScaledVector(p,-S.x).multiplyScalar(A),o[P].add(d),o[R].add(d),o[w].add(d),c[P].add(u),c[R].add(u),c[w].add(u))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,R=v.length;P<R;++P){const w=v[P],A=w.start,L=w.count;for(let D=A,C=A+L;D<C;D+=3)_(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const f=new U,T=new U,b=new U,M=new U;function y(P){b.fromBufferAttribute(s,P),M.copy(b);const R=o[P];f.copy(R),f.sub(b.multiplyScalar(b.dot(R))).normalize(),T.crossVectors(M,R);const A=T.dot(c[P])<0?-1:1;a.setXYZW(P,f.x,f.y,f.z,A)}for(let P=0,R=n.count;P<R;++P)l[P]&&y(P);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new fi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,m=n.count;g<m;g++)n.setXYZ(g,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,p=new U;if(t)for(let g=0,m=t.count;g<m;g+=3){const x=t.getX(g+0),S=t.getX(g+1),d=t.getX(g+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,d),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,d),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let g=0,m=e.count;g<m;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,p=o.normalized,g=new l.constructor(c.length*h);let m=0,x=0;for(let S=0,d=c.length;S<d;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let u=0;u<h;u++)g[x++]=l[m++]}return new fi(g,h,p)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){const g=l[h],m=t(g,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,g=l.length;p<g;p++){const m=l[p];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],p=r[l];for(let g=0,m=p.length;g<m;g++)h.push(p[g].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new U,Hm=new U,Wm=new de;class hs{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$l.subVectors(n,e).cross(Hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta($l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wm.getNormalMatrix(t),s=this.coplanarPoint($l).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Xm=0;class Ks extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=la,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Hd,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Il,this.stencilZFail=Il,this.stencilZPass=Il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hs().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Yi=new U,Kl=new U,eo=new U,no=new U;class Mf{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Kl.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),no.copy(this.origin).sub(Kl);const r=t.distanceTo(e)*.5,a=-this.direction.dot(eo),o=no.dot(this.direction),c=-no.dot(eo),l=no.lengthSq(),h=Math.abs(1-a*a);let p,g,m,x;if(h>0)if(p=a*c-o,g=a*o-c,x=r*h,p>=0)if(g>=-x)if(g<=x){const S=1/h;p*=S,g*=S,m=p*(p+a*g+2*o)+g*(a*p+g+2*c)+l}else g=r,p=Math.max(0,-(a*g+o)),m=-p*p+g*(g+2*c)+l;else g=-r,p=Math.max(0,-(a*g+o)),m=-p*p+g*(g+2*c)+l;else g<=-x?(p=Math.max(0,-(-a*r+o)),g=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+g*(g+2*c)+l):g<=x?(p=0,g=Math.min(Math.max(-r,-c),r),m=g*(g+2*c)+l):(p=Math.max(0,-(a*r+o)),g=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+g*(g+2*c)+l);else g=a>0?-r:r,p=Math.max(0,-(a*g+o)),m=-p*p+g*(g+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Kl).addScaledVector(eo,g),m}intersectSphere(t,e){if(t.radius<0)return null;Yi.subVectors(t.center,this.origin);const n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,g=this.origin;return l>=0?(n=(t.min.x-g.x)*l,s=(t.max.x-g.x)*l):(n=(t.max.x-g.x)*l,s=(t.min.x-g.x)*l),h>=0?(r=(t.min.y-g.y)*h,a=(t.max.y-g.y)*h):(r=(t.max.y-g.y)*h,a=(t.min.y-g.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-g.z)*p,c=(t.max.z-g.z)*p):(o=(t.max.z-g.z)*p,c=(t.min.z-g.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,p=t.x-a.x,g=t.y-a.y,m=t.z-a.z,x=e.x-a.x,S=e.y-a.y,d=e.z-a.z,u=n.x-a.x,_=n.y-a.y,v=n.z-a.z,f=Math.abs(c),T=Math.abs(l),b=Math.abs(h);let M,y,P,R,w,A,L,D,C,F,O,q;if(f>=T&&f>=b?(P=c,A=p,C=x,q=u,c>=0?(M=l,y=h,R=g,w=m,L=S,D=d,F=_,O=v):(M=h,y=l,R=m,w=g,L=d,D=S,F=v,O=_)):T>=b?(P=l,A=g,C=S,q=_,l>=0?(M=h,y=c,R=m,w=p,L=d,D=x,F=v,O=u):(M=c,y=h,R=p,w=m,L=x,D=d,F=u,O=v)):(P=h,A=m,C=d,q=v,h>=0?(M=c,y=l,R=p,w=g,L=x,D=S,F=u,O=_):(M=l,y=c,R=g,w=p,L=S,D=x,F=_,O=u)),P===0)return null;const V=M/P,X=y/P,k=1/P,$=R-V*A,dt=w-X*A,B=L-V*C,j=D-X*C,K=F-V*q,ot=O-X*q,et=K*j-ot*B,Mt=$*ot-dt*K,Xt=B*dt-j*$;if(s){if(et<0||Mt<0||Xt<0)return null}else if((et<0||Mt<0||Xt<0)&&(et>0||Mt>0||Xt>0))return null;const Nt=et+Mt+Xt;if(Nt===0)return null;const Jt=k*(et*A+Mt*C+Xt*q);return(Nt>0?Jt<0:Jt>0)?null:this.at(Jt/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qi extends Ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tu=new be,Us=new Mf,io=new Ur,wu=new U,so=new U,ro=new U,ao=new U,Jl=new U,oo=new U,Eu=new U,lo=new U;class Wt extends yn{constructor(t=new Se,e=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],p=r[c];h!==0&&(Jl.fromBufferAttribute(p,t),a?oo.addScaledVector(Jl,h):oo.addScaledVector(Jl.sub(e),h))}e.add(oo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Us.copy(t.ray).recast(t.near),!(io.containsPoint(Us.origin)===!1&&(Us.intersectSphere(io,wu)===null||Us.origin.distanceToSquared(wu)>(t.far-t.near)**2))&&(Tu.copy(r).invert(),Us.copy(t.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Us)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,g=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=g.length;x<S;x++){const d=g[x],u=a[d.materialIndex],_=Math.max(d.start,m.start),v=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let f=_,T=v;f<T;f+=3){const b=o.getX(f),M=o.getX(f+1),y=o.getX(f+2);s=co(this,u,t,n,l,h,p,b,M,y),s&&(s.faceIndex=Math.floor(f/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let d=x,u=S;d<u;d+=3){const _=o.getX(d),v=o.getX(d+1),f=o.getX(d+2);s=co(this,a,t,n,l,h,p,_,v,f),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=g.length;x<S;x++){const d=g[x],u=a[d.materialIndex],_=Math.max(d.start,m.start),v=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let f=_,T=v;f<T;f+=3){const b=f,M=f+1,y=f+2;s=co(this,u,t,n,l,h,p,b,M,y),s&&(s.faceIndex=Math.floor(f/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let d=x,u=S;d<u;d+=3){const _=d,v=d+1,f=d+2;s=co(this,a,t,n,l,h,p,_,v,f),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function qm(i,t,e,n,s,r,a,o){let c;if(t.side===Nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===yi,o),c===null)return null;lo.copy(o),lo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(lo);return l<e.near||l>e.far?null:{distance:l,point:lo.clone(),object:i}}function co(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,so),i.getVertexPosition(c,ro),i.getVertexPosition(l,ao);const h=qm(i,t,e,n,so,ro,ao,Eu);if(h){const p=new U;di.getBarycoord(Eu,so,ro,ao,p),s&&(h.uv=di.getInterpolatedAttribute(s,o,c,l,p,new At)),r&&(h.uv1=di.getInterpolatedAttribute(r,o,c,l,p,new At)),a&&(h.normal=di.getInterpolatedAttribute(a,o,c,l,p,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const g={a:o,b:c,c:l,normal:new U,materialIndex:0};di.getNormal(so,ro,ao,g.normal),h.face=g,h.barycoord=p}return h}class dl extends Un{constructor(t=null,e=1,n=1,s,r,a,o,c,l=dn,h=dn,p,g){super(null,a,o,c,l,h,s,r,p,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ha extends fi{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pr=new be,Au=new be,ho=[],Ru=new $s,Ym=new be,$r=new Wt,Kr=new Ur;class Zm extends Wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ym)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $s),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),Ru.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(Ru)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ur),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),Kr.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(Kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),t.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),Au.multiplyMatrices(n,pr),$r.matrixWorld=Au,$r.raycast(t,ho);for(let a=0,o=ho.length;a<o;a++){const c=ho[a];c.instanceId=r,c.object=this,e.push(c)}ho.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dl(new Float32Array(s*this.count),s,this.count,yh,bi));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Os=new Ur,$m=new At(.5,.5),uo=new U;class ba{constructor(t=new hs,e=new hs,n=new hs,s=new hs,r=new hs,a=new hs){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wi,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],p=r[5],g=r[6],m=r[7],x=r[8],S=r[9],d=r[10],u=r[11],_=r[12],v=r[13],f=r[14],T=r[15];if(s[0].setComponents(l-a,m-h,u-x,T-_).normalize(),s[1].setComponents(l+a,m+h,u+x,T+_).normalize(),s[2].setComponents(l+o,m+p,u+S,T+v).normalize(),s[3].setComponents(l-o,m-p,u-S,T-v).normalize(),n)s[4].setComponents(c,g,d,f).normalize(),s[5].setComponents(l-c,m-g,u-d,T-f).normalize();else if(s[4].setComponents(l-c,m-g,u-d,T-f).normalize(),e===wi)s[5].setComponents(l+c,m+g,u+d,T+f).normalize();else if(e===Sa)s[5].setComponents(c,g,d,f).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const e=$m.distanceTo(t.center);return Os.radius=.7071067811865476+e,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(uo.x=s.normal.x>0?t.max.x:t.min.x,uo.y=s.normal.y>0?t.max.y:t.min.y,uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Cu=new be;class Ch{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ba),n[s].setFromProjectionMatrix(Cu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ba),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Ch().copy(this)}}class _f extends Ks{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ko=new U,Jo=new U,Pu=new be,Jr=new Mf,fo=new Ur,Ql=new U,Iu=new U;class Km extends yn{constructor(t=new Se,e=new _f){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ko.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ko.distanceTo(Jo);t.setAttribute("lineDistance",new Bt(n,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,t.ray.intersectsSphere(fo)===!1)return;Pu.copy(s).invert(),Jr.copy(t.ray).applyMatrix4(Pu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,g=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let S=m,d=x-1;S<d;S+=l){const u=h.getX(S),_=h.getX(S+1),v=po(this,t,Jr,c,u,_,S);v&&e.push(v)}if(this.isLineLoop){const S=h.getX(x-1),d=h.getX(m),u=po(this,t,Jr,c,S,d,x-1);u&&e.push(u)}}else{const m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let S=m,d=x-1;S<d;S+=l){const u=po(this,t,Jr,c,S,S+1,S);u&&e.push(u)}if(this.isLineLoop){const S=po(this,t,Jr,c,x-1,m,x-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function po(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Ko.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,r),e.distanceSqToSegment(Ko,Jo,Ql,Iu)>n)return;Ql.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ql);if(!(l<t.near||l>t.far))return{distance:l,point:Iu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Du=new U,Lu=new U;class Nu extends Km{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Du.fromBufferAttribute(e,s),Lu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Du.distanceTo(Lu);t.setAttribute("lineDistance",new Bt(n,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sf extends Un{constructor(t=[],e=Rr,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class en extends Un{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ws extends Un{constructor(t,e,n=zi,s,r,a,o=dn,c=dn,l,h=Ts,p=1){if(h!==Ts&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:p};super(g,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class yf extends Ws{constructor(t,e=zi,n=Rr,s,r,a=dn,o=dn,c,l=Ts){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bf extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Or extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],p=[];let g=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(p,2));function x(S,d,u,_,v,f,T,b,M,y,P){const R=f/M,w=T/y,A=f/2,L=T/2,D=b/2,C=M+1,F=y+1;let O=0,q=0;const V=new U;for(let X=0;X<F;X++){const k=X*w-L;for(let $=0;$<C;$++){const dt=$*R-A;V[S]=dt*_,V[d]=k*v,V[u]=D,l.push(V.x,V.y,V.z),V[S]=0,V[d]=0,V[u]=b>0?1:-1,h.push(V.x,V.y,V.z),p.push($/M),p.push(1-X/y),O+=1}}for(let X=0;X<y;X++)for(let k=0;k<M;k++){const $=g+k+C*X,dt=g+k+C*(X+1),B=g+(k+1)+C*(X+1),j=g+(k+1)+C*X;c.push($,dt,j),c.push(dt,B,j),q+=6}o.addGroup(m,q,P),m+=q,g+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class fl extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new U,h=new At;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,g=3;p<=e;p++,g+=3){const m=n+p/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[g]/t+1)/2,h.y=(a[g+1]/t+1)/2,c.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(o,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ws extends Se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],g=[],m=[];let x=0;const S=[],d=n/2;let u=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(m,2));function _(){const f=new U,T=new U;let b=0;const M=(e-t)/n;for(let y=0;y<=r;y++){const P=[],R=y/r,w=R*(e-t)+t;for(let A=0;A<=s;A++){const L=A/s,D=L*c+o,C=Math.sin(D),F=Math.cos(D);T.x=w*C,T.y=-R*n+d,T.z=w*F,p.push(T.x,T.y,T.z),f.set(C,M,F).normalize(),g.push(f.x,f.y,f.z),m.push(L,1-R),P.push(x++)}S.push(P)}for(let y=0;y<s;y++)for(let P=0;P<r;P++){const R=S[P][y],w=S[P+1][y],A=S[P+1][y+1],L=S[P][y+1];(t>0||P!==0)&&(h.push(R,w,L),b+=3),(e>0||P!==r-1)&&(h.push(w,A,L),b+=3)}l.addGroup(u,b,0),u+=b}function v(f){const T=x,b=new At,M=new U;let y=0;const P=f===!0?t:e,R=f===!0?1:-1;for(let A=1;A<=s;A++)p.push(0,d*R,0),g.push(0,R,0),m.push(.5,.5),x++;const w=x;for(let A=0;A<=s;A++){const D=A/s*c+o,C=Math.cos(D),F=Math.sin(D);M.x=P*F,M.y=d*R,M.z=P*C,p.push(M.x,M.y,M.z),g.push(0,R,0),b.x=C*.5+.5,b.y=F*.5*R+.5,m.push(b.x,b.y),x++}for(let A=0;A<s;A++){const L=T+A,D=w+A;f===!0?h.push(D,D+1,L):h.push(D+1,D,L),y+=3}l.addGroup(u,y,f===!0?1:2),u+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const mo=new U,go=new U,jl=new U,xo=new di;class Uu extends Se{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Tr*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],p=new Array(3),g=new Map,m=[];for(let x=0;x<c;x+=3){a?(l[0]=a.getX(x),l[1]=a.getX(x+1),l[2]=a.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);const{a:S,b:d,c:u}=xo;if(S.fromBufferAttribute(o,l[0]),d.fromBufferAttribute(o,l[1]),u.fromBufferAttribute(o,l[2]),xo.getNormal(jl),p[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,p[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,p[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let _=0;_<3;_++){const v=(_+1)%3,f=p[_],T=p[v],b=xo[h[_]],M=xo[h[v]],y=`${f}_${T}`,P=`${T}_${f}`,R=g.get(P);R?(jl.dot(R.normal)<=r&&(m.push(b.x,b.y,b.z),m.push(M.x,M.y,M.z)),g.set(P,null)):g.has(y)||g.set(y,{index0:l[_],index1:l[v],normal:jl.clone()})}}for(const x of g.values())if(x){const{index0:S,index1:d}=x;mo.fromBufferAttribute(o,S),go.fromBufferAttribute(o,d),m.push(mo.x,mo.y,mo.z),m.push(go.x,go.y,go.z)}this.setAttribute("position",new Bt(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],g=n[s+1]-h,m=(a-h)/g;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new At:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],a=[],o=new U,c=new be;for(let m=0;m<=t;m++){const x=m/t;s[m]=this.getTangentAt(x,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),p=Math.abs(s[0].y),g=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),g<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(xe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(xe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ph extends ki{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new At){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),g=c-this.aX,m=l-this.aY;c=g*h-m*p+this.aX,l=g*p+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Jm extends Ph{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ih(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,p){let g=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+p)+(c-o)/p;g*=h,m*=h,s(a,o,g,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ou=new U,Fu=new U,tc=new Ih,ec=new Ih,nc=new Ih;class Qm extends ki{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Fu.subVectors(s[0],s[1]).add(s[0]),l=Fu);const p=s[o%r],g=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ou.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ou),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(p),m),S=Math.pow(p.distanceToSquared(g),m),d=Math.pow(g.distanceToSquared(h),m);S<1e-4&&(S=1),x<1e-4&&(x=S),d<1e-4&&(d=S),tc.initNonuniformCatmullRom(l.x,p.x,g.x,h.x,x,S,d),ec.initNonuniformCatmullRom(l.y,p.y,g.y,h.y,x,S,d),nc.initNonuniformCatmullRom(l.z,p.z,g.z,h.z,x,S,d)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(l.x,p.x,g.x,h.x,this.tension),ec.initCatmullRom(l.y,p.y,g.y,h.y,this.tension),nc.initCatmullRom(l.z,p.z,g.z,h.z,this.tension));return n.set(tc.calc(c),ec.calc(c),nc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function jm(i,t){const e=1-i;return e*e*t}function t0(i,t){return 2*(1-i)*i*t}function e0(i,t){return i*i*t}function ua(i,t,e,n){return jm(i,t)+t0(i,e)+e0(i,n)}function n0(i,t){const e=1-i;return e*e*e*t}function i0(i,t){const e=1-i;return 3*e*e*i*t}function s0(i,t){return 3*(1-i)*i*i*t}function r0(i,t){return i*i*i*t}function da(i,t,e,n,s){return n0(i,t)+i0(i,e)+s0(i,n)+r0(i,s)}class Tf extends ki{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(t,s.x,r.x,a.x,o.x),da(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class a0 extends ki{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(t,s.x,r.x,a.x,o.x),da(t,s.y,r.y,a.y,o.y),da(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wf extends ki{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o0 extends ki{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ef extends ki{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ua(t,s.x,r.x,a.x),ua(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l0 extends ki{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ua(t,s.x,r.x,a.x),ua(t,s.y,r.y,a.y),ua(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Bu(o,c.x,l.x,h.x,p.x),Bu(o,c.y,l.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new At().fromArray(s))}return this}}var sh=Object.freeze({__proto__:null,ArcCurve:Jm,CatmullRomCurve3:Qm,CubicBezierCurve:Tf,CubicBezierCurve3:a0,EllipseCurve:Ph,LineCurve:wf,LineCurve3:o0,QuadraticBezierCurve:Ef,QuadraticBezierCurve3:l0,SplineCurve:Af});class c0 extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new sh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class zu extends c0{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wf(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ef(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Tf(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Af(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Ph(t,e,n,s,r,a,o,c);if(this.curves.length>0){const p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Rf extends zu{constructor(t){super(t),this.uuid=Zs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new zu().fromJSON(s))}return this}}function h0(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Cf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=m0(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,p=c;for(let g=e;g<s;g+=e){const m=i[g],x=i[g+1];m<o&&(o=m),x<c&&(c=x),m>h&&(h=m),x>p&&(p=x)}l=Math.max(h-o,p-c),l=l!==0?32767/l:0}return Ta(r,a,e,o,c,l,0),a}function Cf(i,t,e,n,s){let r;if(s===E0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ku(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ku(a/n|0,i[a],i[a+1],r);return r&&Cr(r,r.next)&&(Ea(r),r=r.next),r}function Xs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cr(e,e.next)||Ye(e.prev,e,e.next)===0)){if(Ea(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ta(i,t,e,n,s,r,a){if(!i)return;!a&&r&&_0(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?d0(i,n,s,r):u0(i)){t.push(c.i,i.i,l.i),Ea(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=f0(Xs(i),t),Ta(i,t,e,n,s,r,2)):a===2&&p0(i,t,e,n,s,r):Ta(Xs(i),t,e,n,s,r,1);break}}}function u0(i){const t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),p=Math.min(o,c,l),g=Math.max(s,r,a),m=Math.max(o,c,l);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=g&&x.y>=p&&x.y<=m&&sa(s,o,r,c,a,l,x.x,x.y)&&Ye(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function d0(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ye(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,p=r.y,g=a.y,m=Math.min(o,c,l),x=Math.min(h,p,g),S=Math.max(o,c,l),d=Math.max(h,p,g),u=rh(m,x,t,e,n),_=rh(S,d,t,e,n);let v=i.prevZ,f=i.nextZ;for(;v&&v.z>=u&&f&&f.z<=_;){if(v.x>=m&&v.x<=S&&v.y>=x&&v.y<=d&&v!==s&&v!==a&&sa(o,h,c,p,l,g,v.x,v.y)&&Ye(v.prev,v,v.next)>=0||(v=v.prevZ,f.x>=m&&f.x<=S&&f.y>=x&&f.y<=d&&f!==s&&f!==a&&sa(o,h,c,p,l,g,f.x,f.y)&&Ye(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;v&&v.z>=u;){if(v.x>=m&&v.x<=S&&v.y>=x&&v.y<=d&&v!==s&&v!==a&&sa(o,h,c,p,l,g,v.x,v.y)&&Ye(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;f&&f.z<=_;){if(f.x>=m&&f.x<=S&&f.y>=x&&f.y<=d&&f!==s&&f!==a&&sa(o,h,c,p,l,g,f.x,f.y)&&Ye(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function f0(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Cr(n,s)&&If(n,e,e.next,s)&&wa(n,s)&&wa(s,n)&&(t.push(n.i,e.i,s.i),Ea(e),Ea(e.next),e=i=s),e=e.next}while(e!==i);return Xs(e)}function p0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&b0(a,o)){let c=Df(a,o);a=Xs(a,a.next),c=Xs(c,c.next),Ta(a,t,e,n,s,r,0),Ta(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function m0(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Cf(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(y0(l))}s.sort(g0);for(let r=0;r<s.length;r++)e=x0(s[r],e);return e}function g0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function x0(i,t){const e=v0(i,t);if(!e)return t;const n=Df(e,i);return Xs(n,n.next),Xs(e,e.next)}function v0(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Cr(i,e))return e;do{if(Cr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Pf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const p=Math.abs(s-e.y)/(n-e.x);wa(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&M0(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function M0(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function _0(i,t,e,n){let s=i;do s.z===0&&(s.z=rh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S0(s)}function S0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function rh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function y0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sa(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Pf(i,t,e,n,s,r,a,o)}function b0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!T0(i,t)&&(wa(i,t)&&wa(t,i)&&w0(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||Cr(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cr(i,t){return i.x===t.x&&i.y===t.y}function If(i,t,e,n){const s=Mo(Ye(i,t,e)),r=Mo(Ye(i,t,n)),a=Mo(Ye(e,n,i)),o=Mo(Ye(e,n,t));return!!(s!==r&&a!==o||s===0&&vo(i,e,t)||r===0&&vo(i,n,t)||a===0&&vo(e,i,n)||o===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Mo(i){return i>0?1:i<0?-1:0}function T0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&If(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wa(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function w0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Df(i,t){const e=ah(i.i,i.x,i.y),n=ah(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ku(i,t,e,n){const s=ah(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ea(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ah(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class A0{static triangulate(t,e,n=2){return h0(t,e,n)}}class yr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return yr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Vu(t),Gu(n,t);let a=t.length;e.forEach(Vu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Gu(n,e[c]);const o=A0.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Vu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Gu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Dh extends Se{constructor(t=new Rf([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Bt(s,3)),this.setAttribute("uv",new Bt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:m-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:R0;let v,f=!1,T,b,M,y;if(u){v=u.getSpacedPoints(h),f=!0,g=!1;const at=u.isCatmullRomCurve3?u.closed:!1;T=u.computeFrenetFrames(h,at),b=new U,M=new U,y=new U}g||(d=0,m=0,x=0,S=0);const P=o.extractPoints(l);let R=P.shape;const w=P.holes;if(!yr.isClockWise(R)){R=R.reverse();for(let at=0,pt=w.length;at<pt;at++){const mt=w[at];yr.isClockWise(mt)&&(w[at]=mt.reverse())}}function L(at){const mt=10000000000000001e-36;let lt=at[0];for(let _t=1;_t<=at.length;_t++){const Ct=_t%at.length,wt=at[Ct],qt=wt.x-lt.x,ne=wt.y-lt.y,re=qt*qt+ne*ne,G=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(lt.x),Math.abs(lt.y)),bt=mt*G*G;if(re<=bt){at.splice(Ct,1),_t--;continue}lt=wt}}L(R),w.forEach(L);const D=w.length,C=R;for(let at=0;at<D;at++){const pt=w[at];R=R.concat(pt)}function F(at,pt,mt){return pt||Pe("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(pt,mt)}const O=R.length;function q(at,pt,mt){let lt,_t,Ct;const wt=at.x-pt.x,qt=at.y-pt.y,ne=mt.x-at.x,re=mt.y-at.y,G=wt*wt+qt*qt,bt=wt*re-qt*ne;if(Math.abs(bt)>Number.EPSILON){const ut=Math.sqrt(G),Dt=Math.sqrt(ne*ne+re*re),ct=pt.x-qt/ut,Gt=pt.y+wt/ut,ht=mt.x-re/Dt,Tt=mt.y+ne/Dt,N=((ht-ct)*re-(Tt-Gt)*ne)/(wt*re-qt*ne);lt=ct+wt*N-at.x,_t=Gt+qt*N-at.y;const E=lt*lt+_t*_t;if(E<=2)return new At(lt,_t);Ct=Math.sqrt(E/2)}else{let ut=!1;wt>Number.EPSILON?ne>Number.EPSILON&&(ut=!0):wt<-Number.EPSILON?ne<-Number.EPSILON&&(ut=!0):Math.sign(qt)===Math.sign(re)&&(ut=!0),ut?(lt=-qt,_t=wt,Ct=Math.sqrt(G)):(lt=wt,_t=qt,Ct=Math.sqrt(G/2))}return new At(lt/Ct,_t/Ct)}const V=[];for(let at=0,pt=C.length,mt=pt-1,lt=at+1;at<pt;at++,mt++,lt++)mt===pt&&(mt=0),lt===pt&&(lt=0),V[at]=q(C[at],C[mt],C[lt]);const X=[];let k,$=V.concat();for(let at=0,pt=D;at<pt;at++){const mt=w[at];k=[];for(let lt=0,_t=mt.length,Ct=_t-1,wt=lt+1;lt<_t;lt++,Ct++,wt++)Ct===_t&&(Ct=0),wt===_t&&(wt=0),k[lt]=q(mt[lt],mt[Ct],mt[wt]);X.push(k),$=$.concat(k)}let dt;if(d===0)dt=yr.triangulateShape(C,w);else{const at=[],pt=[];for(let mt=0;mt<d;mt++){const lt=mt/d,_t=m*Math.cos(lt*Math.PI/2),Ct=x*Math.sin(lt*Math.PI/2)+S;for(let wt=0,qt=C.length;wt<qt;wt++){const ne=F(C[wt],V[wt],Ct);Mt(ne.x,ne.y,-_t),lt===0&&at.push(ne)}for(let wt=0,qt=D;wt<qt;wt++){const ne=w[wt];k=X[wt];const re=[];for(let G=0,bt=ne.length;G<bt;G++){const ut=F(ne[G],k[G],Ct);Mt(ut.x,ut.y,-_t),lt===0&&re.push(ut)}lt===0&&pt.push(re)}}dt=yr.triangulateShape(at,pt)}const B=dt.length,j=x+S;for(let at=0;at<O;at++){const pt=g?F(R[at],$[at],j):R[at];f?(M.copy(T.normals[0]).multiplyScalar(pt.x),b.copy(T.binormals[0]).multiplyScalar(pt.y),y.copy(v[0]).add(M).add(b),Mt(y.x,y.y,y.z)):Mt(pt.x,pt.y,0)}for(let at=1;at<=h;at++)for(let pt=0;pt<O;pt++){const mt=g?F(R[pt],$[pt],j):R[pt];f?(M.copy(T.normals[at]).multiplyScalar(mt.x),b.copy(T.binormals[at]).multiplyScalar(mt.y),y.copy(v[at]).add(M).add(b),Mt(y.x,y.y,y.z)):Mt(mt.x,mt.y,p/h*at)}for(let at=d-1;at>=0;at--){const pt=at/d,mt=m*Math.cos(pt*Math.PI/2),lt=x*Math.sin(pt*Math.PI/2)+S;for(let _t=0,Ct=C.length;_t<Ct;_t++){const wt=F(C[_t],V[_t],lt);Mt(wt.x,wt.y,p+mt)}for(let _t=0,Ct=w.length;_t<Ct;_t++){const wt=w[_t];k=X[_t];for(let qt=0,ne=wt.length;qt<ne;qt++){const re=F(wt[qt],k[qt],lt);f?Mt(re.x,re.y+v[h-1].y,v[h-1].x+mt):Mt(re.x,re.y,p+mt)}}}K(),ot();function K(){const at=s.length/3;if(g){let pt=0,mt=O*pt;for(let lt=0;lt<B;lt++){const _t=dt[lt];Xt(_t[2]+mt,_t[1]+mt,_t[0]+mt)}pt=h+d*2,mt=O*pt;for(let lt=0;lt<B;lt++){const _t=dt[lt];Xt(_t[0]+mt,_t[1]+mt,_t[2]+mt)}}else{for(let pt=0;pt<B;pt++){const mt=dt[pt];Xt(mt[2],mt[1],mt[0])}for(let pt=0;pt<B;pt++){const mt=dt[pt];Xt(mt[0]+O*h,mt[1]+O*h,mt[2]+O*h)}}n.addGroup(at,s.length/3-at,0)}function ot(){const at=s.length/3;let pt=0;et(C,pt),pt+=C.length;for(let mt=0,lt=w.length;mt<lt;mt++){const _t=w[mt];et(_t,pt),pt+=_t.length}n.addGroup(at,s.length/3-at,1)}function et(at,pt){let mt=at.length;for(;--mt>=0;){const lt=mt;let _t=mt-1;_t<0&&(_t=at.length-1);for(let Ct=0,wt=h+d*2;Ct<wt;Ct++){const qt=O*Ct,ne=O*(Ct+1),re=pt+lt+qt,G=pt+_t+qt,bt=pt+_t+ne,ut=pt+lt+ne;Nt(re,G,bt,ut)}}}function Mt(at,pt,mt){c.push(at),c.push(pt),c.push(mt)}function Xt(at,pt,mt){Jt(at),Jt(pt),Jt(mt);const lt=s.length/3,_t=_.generateTopUV(n,s,lt-3,lt-2,lt-1);ie(_t[0]),ie(_t[1]),ie(_t[2])}function Nt(at,pt,mt,lt){Jt(at),Jt(pt),Jt(lt),Jt(pt),Jt(mt),Jt(lt);const _t=s.length/3,Ct=_.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);ie(Ct[0]),ie(Ct[1]),ie(Ct[3]),ie(Ct[1]),ie(Ct[2]),ie(Ct[3])}function Jt(at){s.push(c[at*3+0]),s.push(c[at*3+1]),s.push(c[at*3+2])}function ie(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return C0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sh[s.type]().fromJSON(s)),new Dh(n,t.options)}}const R0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new At(r,a),new At(o,c),new At(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],p=t[n*3+2],g=t[s*3],m=t[s*3+1],x=t[s*3+2],S=t[r*3],d=t[r*3+1],u=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new At(a,1-c),new At(l,1-p),new At(g,1-x),new At(S,1-u)]:[new At(o,1-c),new At(h,1-p),new At(m,1-x),new At(d,1-u)]}};function C0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Pr extends Se{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=xe(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,p=new U,g=new At,m=new U,x=new U,S=new U;let d=0,u=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:d=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,m.x=u*1,m.y=-d,m.z=u*0,S.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:S.normalize(),c.push(S.x,S.y,S.z);break;default:d=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,m.x=u*1,m.y=-d,m.z=u*0,x.copy(m),m.x+=S.x,m.y+=S.y,m.z+=S.z,m.normalize(),c.push(m.x,m.y,m.z),S.copy(x)}for(let _=0;_<=e;_++){const v=n+_*h*s,f=Math.sin(v),T=Math.cos(v);for(let b=0;b<=t.length-1;b++){p.x=t[b].x*f,p.y=t[b].y,p.z=t[b].x*T,a.push(p.x,p.y,p.z),g.x=_/e,g.y=b/(t.length-1),o.push(g.x,g.y);const M=c[3*b+0]*f,y=c[3*b+1],P=c[3*b+0]*T;l.push(M,y,P)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){const f=v+_*t.length,T=f,b=f+t.length,M=f+t.length+1,y=f+1;r.push(T,b,y),r.push(M,y,b)}this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("uv",new Bt(o,2)),this.setAttribute("normal",new Bt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.points,t.segments,t.phiStart,t.phiLength)}}class Ai extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,p=t/o,g=e/c,m=[],x=[],S=[],d=[];for(let u=0;u<h;u++){const _=u*g-a;for(let v=0;v<l;v++){const f=v*p-r;x.push(f,-_,0),S.push(0,0,1),d.push(v/o),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<o;_++){const v=_+l*u,f=_+l*(u+1),T=_+1+l*(u+1),b=_+1+l*u;m.push(v,f,b),m.push(f,T,b)}this.setIndex(m),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(S,3)),this.setAttribute("uv",new Bt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}class pl extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let p=t;const g=(e-t)/s,m=new U,x=new At;for(let S=0;S<=s;S++){for(let d=0;d<=n;d++){const u=r+d/n*a;m.x=p*Math.cos(u),m.y=p*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),x.x=(m.x/e+1)/2,x.y=(m.y/e+1)/2,h.push(x.x,x.y)}p+=g}for(let S=0;S<s;S++){const d=S*(n+1);for(let u=0;u<n;u++){const _=u+d,v=_,f=_+n+1,T=_+n+2,b=_+1;o.push(v,f,b),o.push(f,T,b)}}this.setIndex(o),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Si extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],p=new U,g=new U,m=[],x=[],S=[],d=[];for(let u=0;u<=n;u++){const _=[],v=u/n,f=a+v*o,T=t*Math.cos(f),b=Math.sqrt(t*t-T*T);let M=0;u===0&&a===0?M=.5/e:u===n&&c===Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const P=y/e,R=s+P*r;p.x=-b*Math.cos(R),p.y=T,p.z=b*Math.sin(R),x.push(p.x,p.y,p.z),g.copy(p).normalize(),S.push(g.x,g.y,g.z),d.push(P+M,1-v),_.push(l++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<e;_++){const v=h[u][_+1],f=h[u][_],T=h[u+1][_],b=h[u+1][_+1];(u!==0||a>0)&&m.push(v,f,b),(u!==n-1||c<Math.PI)&&m.push(f,T,b)}this.setIndex(m),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(S,3)),this.setAttribute("uv",new Bt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ii extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],p=[],g=new U,m=new U,x=new U;for(let S=0;S<=n;S++){const d=a+S/n*o;for(let u=0;u<=s;u++){const _=u/s*r;m.x=(t+e*Math.cos(d))*Math.cos(_),m.y=(t+e*Math.cos(d))*Math.sin(_),m.z=e*Math.sin(d),l.push(m.x,m.y,m.z),g.x=t*Math.cos(_),g.y=t*Math.sin(_),x.subVectors(m,g).normalize(),h.push(x.x,x.y,x.z),p.push(u/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let d=1;d<=s;d++){const u=(s+1)*S+d-1,_=(s+1)*(S-1)+d-1,v=(s+1)*(S-1)+d,f=(s+1)*S+d;c.push(u,_,f),c.push(_,v,f)}this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Ir(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Hu(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Bn(i){const t={};for(let e=0;e<i.length;e++){const n=Ir(i[e]);for(const s in n)t[s]=n[s]}return t}function Hu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function P0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}const _r={clone:Ir,merge:Bn};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=P0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new tn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class L0 extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fe extends Ks{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mi extends Fe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class N0 extends Ks{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class U0 extends Ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class O0 extends Ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lh extends yn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class F0 extends Lh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ic=new be,Wu=new U,Xu=new U;class Nf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ic,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Sa||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _o=new U,So=new Oe,Ci=new U;class Uf extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_o,So,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,So,Ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_o,So,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,So,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new U,qu=new At,Yu=new At;class hi extends Uf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Yu),e.subVectors(Yu,qu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class B0 extends Nf{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class sc extends Lh{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new B0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Nh extends Uf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class z0 extends Nf{constructor(){super(new Nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rc extends Lh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new z0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class k0 extends Se{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const mr=-90,gr=1;class oh extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hi(mr,gr,t,e);s.layers=this.layers,this.add(s);const r=new hi(mr,gr,t,e);r.layers=this.layers,this.add(r);const a=new hi(mr,gr,t,e);a.layers=this.layers,this.add(a);const o=new hi(mr,gr,t,e);o.layers=this.layers,this.add(o);const c=new hi(mr,gr,t,e);c.layers=this.layers,this.add(c);const l=new hi(mr,gr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,p=t.getRenderTarget(),g=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,g,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class V0 extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}function Zu(i,t,e,n){const s=G0(n);switch(e){case sf:return i*t;case yh:return i*t/s.components*s.byteLength;case bh:return i*t/s.components*s.byteLength;case Hs:return i*t*2/s.components*s.byteLength;case Th:return i*t*2/s.components*s.byteLength;case rf:return i*t*3/s.components*s.byteLength;case Ti:return i*t*4/s.components*s.byteLength;case wh:return i*t*4/s.components*s.byteLength;case Do:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:case Ic:return Math.max(i,16)*Math.max(t,8)/4;case Rc:case Pc:return Math.max(i,8)*Math.max(t,8)/2;case Dc:case Lc:case Uc:case Oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nc:case Wo:case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qc:case jc:case th:return Math.ceil(i/4)*Math.ceil(t/4)*16;case eh:case nh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xo:case ih:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function G0(i){switch(i){case Zn:case jd:return{byteLength:1,components:1};case _a:case tf:case Qn:return{byteLength:2,components:1};case _h:case Sh:return{byteLength:2,components:4};case zi:case Mh:case bi:return{byteLength:4,components:1};case ef:case nf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);function Of(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function H0(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,p=l.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:g,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((m,x)=>m.start-x.start);let g=0;for(let m=1;m<p.length;m++){const x=p[g],S=p[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++g,p[g]=S)}p.length=g+1;for(let m=0,x=p.length;m<x;m++){const S=p[m];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
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
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ig=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,pg=`vec3 transformedNormal = objectNormal;
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
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",_g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Ug=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Vg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gg=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jg=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Rx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
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
}`,Kx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jx=`#define DISTANCE
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
}`,Qx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`uniform float scale;
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#define LAMBERT
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
}`,av=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ov=`#define MATCAP
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
}`,lv=`#define MATCAP
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
}`,cv=`#define NORMAL
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
}`,hv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uv=`#define PHONG
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
}`,dv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,fv=`#define STANDARD
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
}`,pv=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,mv=`#define TOON
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
}`,gv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,xv=`uniform float size;
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
}`,vv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,_v=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Sv=`uniform float rotation;
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
}`,yv=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:Y0,alphatest_fragment:Z0,alphatest_pars_fragment:$0,aomap_fragment:K0,aomap_pars_fragment:J0,batching_pars_vertex:Q0,batching_vertex:j0,begin_vertex:tg,beginnormal_vertex:eg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:og,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:hg,color_pars_vertex:ug,color_vertex:dg,common:fg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:xg,emissivemap_pars_fragment:vg,colorspace_fragment:Mg,colorspace_pars_fragment:_g,envmap_fragment:Sg,envmap_common_pars_fragment:yg,envmap_pars_fragment:bg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Ug,envmap_vertex:wg,fog_vertex:Eg,fog_pars_vertex:Ag,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Ng,lights_toon_fragment:Og,lights_toon_pars_fragment:Fg,lights_phong_fragment:Bg,lights_phong_pars_fragment:zg,lights_physical_fragment:kg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Hg,lights_fragment_end:Wg,lightprobes_pars_fragment:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:$g,map_fragment:Kg,map_pars_fragment:Jg,map_particle_fragment:Qg,map_particle_pars_fragment:jg,metalnessmap_fragment:tx,metalnessmap_pars_fragment:ex,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ax,normal_fragment_begin:ox,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:hx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:xx,packing:vx,premultiplied_alpha_fragment:Mx,project_vertex:_x,dithering_fragment:Sx,dithering_pars_fragment:yx,roughnessmap_fragment:bx,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:Ex,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Px,skinning_vertex:Ix,skinnormal_vertex:Dx,specularmap_fragment:Lx,specularmap_pars_fragment:Nx,tonemapping_fragment:Ux,tonemapping_pars_fragment:Ox,transmission_fragment:Fx,transmission_pars_fragment:Bx,uv_pars_fragment:zx,uv_pars_vertex:kx,uv_vertex:Vx,worldpos_vertex:Gx,background_vert:Hx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:qx,cube_vert:Yx,cube_frag:Zx,depth_vert:$x,depth_frag:Kx,distance_vert:Jx,distance_frag:Qx,equirect_vert:jx,equirect_frag:tv,linedashed_vert:ev,linedashed_frag:nv,meshbasic_vert:iv,meshbasic_frag:sv,meshlambert_vert:rv,meshlambert_frag:av,meshmatcap_vert:ov,meshmatcap_frag:lv,meshnormal_vert:cv,meshnormal_frag:hv,meshphong_vert:uv,meshphong_frag:dv,meshphysical_vert:fv,meshphysical_frag:pv,meshtoon_vert:mv,meshtoon_frag:gv,points_vert:xv,points_frag:vv,shadow_vert:Mv,shadow_frag:_v,sprite_vert:Sv,sprite_frag:yv},Ht={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ui={basic:{uniforms:Bn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Bn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Bn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Bn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Bn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Bn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Bn([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Bn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Bn([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Bn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Bn([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Bn([Ht.common,Ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Bn([Ht.lights,Ht.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ui.physical={uniforms:Bn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const yo={r:0,b:0,g:0},bv=new be,Ff=new de;Ff.set(-1,0,0,0,1,0,0,0,1);function Tv(i,t,e,n,s,r){const a=new Zt(0);let o=s===!0?0:1,c,l,h=null,p=0,g=null;function m(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){const f=_.backgroundBlurriness>0;v=t.get(v,f)}return v}function x(_){let v=!1;const f=m(_);f===null?d(a,o):f&&f.isColor&&(d(f,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(_,v){const f=m(v);f&&f.isCubeTexture?(l===void 0&&(l=new Wt(new Or(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Ir(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bv.makeRotationFromEuler(v.backgroundRotation)).transpose(),f.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ff),l.material.toneMapped=ye.getTransfer(f.colorSpace)!==Ne,(h!==f||p!==f.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,h=f,p=f.version,g=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(c===void 0&&(c=new Wt(new Ai(2,2),new kn({name:"BackgroundMaterial",uniforms:Ir(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=f,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ye.getTransfer(f.colorSpace)!==Ne,f.matrixAutoUpdate===!0&&f.updateMatrix(),c.material.uniforms.uvTransform.value.copy(f.matrix),(h!==f||p!==f.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,h=f,p=f.version,g=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,v){_.getRGB(yo,Lf(i)),e.buffers.color.setClear(yo.r,yo.g,yo.b,v,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),o=v,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,d(a,o)},render:x,addToRenderList:S,dispose:u}}function wv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null);let r=s,a=!1;function o(w,A,L,D,C){let F=!1;const O=p(w,D,L,A);r!==O&&(r=O,l(r.object)),F=m(w,D,L,C),F&&x(w,D,L,C),C!==null&&t.update(C,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,f(w,A,L,D),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function p(w,A,L,D){const C=D.wireframe===!0;let F=n[A.id];F===void 0&&(F={},n[A.id]=F);const O=w.isInstancedMesh===!0?w.id:0;let q=F[O];q===void 0&&(q={},F[O]=q);let V=q[L.id];V===void 0&&(V={},q[L.id]=V);let X=V[C];return X===void 0&&(X=g(c()),V[C]=X),X}function g(w){const A=[],L=[],D=[];for(let C=0;C<e;C++)A[C]=0,L[C]=0,D[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:D,object:w,attributes:{},index:null}}function m(w,A,L,D){const C=r.attributes,F=A.attributes;let O=0;const q=L.getAttributes();for(const V in q)if(q[V].location>=0){const k=C[V];let $=F[V];if($===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),k===void 0||k.attribute!==$||$&&k.data!==$.data)return!0;O++}return r.attributesNum!==O||r.index!==D}function x(w,A,L,D){const C={},F=A.attributes;let O=0;const q=L.getAttributes();for(const V in q)if(q[V].location>=0){let k=F[V];k===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(k=w.instanceColor));const $={};$.attribute=k,k&&k.data&&($.data=k.data),C[V]=$,O++}r.attributes=C,r.attributesNum=O,r.index=D}function S(){const w=r.newAttributes;for(let A=0,L=w.length;A<L;A++)w[A]=0}function d(w){u(w,0)}function u(w,A){const L=r.newAttributes,D=r.enabledAttributes,C=r.attributeDivisors;L[w]=1,D[w]===0&&(i.enableVertexAttribArray(w),D[w]=1),C[w]!==A&&(i.vertexAttribDivisor(w,A),C[w]=A)}function _(){const w=r.newAttributes,A=r.enabledAttributes;for(let L=0,D=A.length;L<D;L++)A[L]!==w[L]&&(i.disableVertexAttribArray(L),A[L]=0)}function v(w,A,L,D,C,F,O){O===!0?i.vertexAttribIPointer(w,A,L,C,F):i.vertexAttribPointer(w,A,L,D,C,F)}function f(w,A,L,D){S();const C=D.attributes,F=L.getAttributes(),O=A.defaultAttributeValues;for(const q in F){const V=F[q];if(V.location>=0){let X=C[q];if(X===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),X!==void 0){const k=X.normalized,$=X.itemSize,dt=t.get(X);if(dt===void 0)continue;const B=dt.buffer,j=dt.type,K=dt.bytesPerElement,ot=j===i.INT||j===i.UNSIGNED_INT||X.gpuType===Mh;if(X.isInterleavedBufferAttribute){const et=X.data,Mt=et.isInterleavedBuffer===!0?et.stride:et.itemSize,Xt=X.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let Nt=0;Nt<V.locationSize;Nt++)u(V.location+Nt,et.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Nt=0;Nt<V.locationSize;Nt++)d(V.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,B);for(let Nt=0;Nt<V.locationSize;Nt++)v(V.location+Nt,$/V.locationSize,j,k,Mt*K,(Xt+$/V.locationSize*Nt)*K,ot)}else{if(X.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)u(V.location+et,X.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let et=0;et<V.locationSize;et++)d(V.location+et);i.bindBuffer(i.ARRAY_BUFFER,B);for(let et=0;et<V.locationSize;et++)v(V.location+et,$/V.locationSize,j,k,$*K,$/V.locationSize*et*K,ot)}}else if(O!==void 0){const k=O[q];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(V.location,k);break;case 3:i.vertexAttrib3fv(V.location,k);break;case 4:i.vertexAttrib4fv(V.location,k);break;default:i.vertexAttrib1fv(V.location,k)}}}}_()}function T(){P();for(const w in n){const A=n[w];for(const L in A){const D=A[L];for(const C in D){const F=D[C];for(const O in F)h(F[O].object),delete F[O];delete D[C]}}delete n[w]}}function b(w){if(n[w.id]===void 0)return;const A=n[w.id];for(const L in A){const D=A[L];for(const C in D){const F=D[C];for(const O in F)h(F[O].object),delete F[O];delete D[C]}}delete n[w.id]}function M(w){for(const A in n){const L=n[A];for(const D in L){const C=L[D];if(C[w.id]===void 0)continue;const F=C[w.id];for(const O in F)h(F[O].object),delete F[O];delete C[w.id]}}}function y(w){for(const A in n){const L=n[A],D=w.isInstancedMesh===!0?w.id:0,C=L[D];if(C!==void 0){for(const F in C){const O=C[F];for(const q in O)h(O[q].object),delete O[q];delete C[F]}delete L[D],Object.keys(L).length===0&&delete n[A]}}}function P(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:M,initAttributes:S,enableAttribute:d,disableUnusedAttributes:_}}function Ev(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let g=0;for(let m=0;m<h;m++)g+=l[m];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Av(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==Ti&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const y=M===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Zn&&M!==bi&&!y&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(ae("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),f=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:f,maxSamples:T,samples:b}}function Rv(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new hs,o=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const m=p.length!==0||g||n!==0||s;return s=g,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,g){e=h(p,g,0)},this.setState=function(p,g,m){const x=p.clippingPlanes,S=p.clipIntersection,d=p.clipShadows,u=i.get(p);if(!s||x===null||x.length===0||r&&!d)r?h(null):l();else{const _=r?0:n,v=_*4;let f=u.clippingState||null;c.value=f,f=h(x,g,v,m);for(let T=0;T!==v;++T)f[T]=e[T];u.clippingState=f,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,g,m,x){const S=p!==null?p.length:0;let d=null;if(S!==0){if(d=c.value,x!==!0||d===null){const u=m+S*4,_=g.matrixWorldInverse;o.getNormalMatrix(_),(d===null||d.length<u)&&(d=new Float32Array(u));for(let v=0,f=m;v!==S;++v,f+=4)a.copy(p[v]).applyMatrix4(_,o),a.normal.toArray(d,f),d[f+3]=a.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,d}}class Uh extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Or(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:Xn});r.uniforms.tEquirect.value=e;const a=new Wt(s,r),o=e.minFilter;return e.minFilter===vs&&(e.minFilter=Ln),new oh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const $u=256,Cv=3,Pv=20,Bf=256,zf=16,Iv=3,Dv=new U,Lv=new Zt;class Aa{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new oh(1,10,null),this._boxMesh=new Wt(new Or(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Dv}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const p=c.autoClear,g=c.autoClearColor,m=c.autoClearDepth,x=c.autoClearStencil,S=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(t.background=c.getClearColor(Lv));const d=new oh(n,s,h);return d.position.copy(o),d.update(c,t),c.autoClear=p,c.autoClearColor=g,c.autoClearDepth=m,c.autoClearStencil=x,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max($u,hf(t))}_fromTexture(t,e){t.mapping===Rr||t.mapping===Ma?this._setSize(t.image.length===0?$u:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Ku(t,!1,!1),n=Math.log2(t)-Cv;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ku(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Rr||t.mapping===Ma?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ju()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Nv(),this._integrationMaterial=Uv());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/zf);for(let a=0;a<=n;a++){const o=Aa.lodToRoughness(a,n);if(a>n-Iv)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const c=o>0?Math.log2(e)+.5*Math.log2(6/(Bf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ov());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Ku(i,t,e){return new Uh(i,{minFilter:vs,generateMipmaps:t,type:Qn,colorSpace:Yo,depthBuffer:e})}function La(i,t,e){return new kn({name:i,uniforms:t,vertexShader:ge.cube_vert,fragmentShader:e,side:Nn,blending:Xn,depthTest:!1,depthWrite:!1})}function Nv(){return La("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Uv(){return La("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ov(){return La("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ju(){return La("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qu(){return La("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,m=!1){return g==null?null:m?a(g):r(g)}function r(g){if(g&&g.isTexture){const m=g.mapping;if(m===Rl||m===Cl)if(t.has(g)){const x=t.get(g).texture;return o(x,g.mapping)}else{const x=g.image;if(x&&x.height>0){const S=new Uh(x.height);return S.fromEquirectangularTexture(i,g),t.set(g,S),g.addEventListener("dispose",l),o(S.texture,g.mapping)}else return null}}return g}function a(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const m=g.mapping,x=m===Rl||m===Cl,S=m===Rr||m===Ma;if(x||S){let d=e.get(g);const u=d!==void 0?d.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==u)return n===null&&(n=new Aa(i)),d=x?n.fromEquirectangular(g,d):n.fromCubemap(g,d),d.texture.pmremVersion=g.pmremVersion,e.set(g,d),d.texture;if(d!==void 0)return d.texture;{const _=g.image;return x&&_&&_.height>0||S&&_&&c(_)?(n===null&&(n=new Aa(i)),d=x?n.fromEquirectangular(g):n.fromCubemap(g),d.texture.pmremVersion=g.pmremVersion,e.set(g,d),g.addEventListener("dispose",h),d.texture):null}}}return g}function o(g,m){return m===Rl?g.mapping=Rr:m===Cl&&(g.mapping=Ma),g}function c(g){let m=0;const x=6;for(let S=0;S<x;S++)g[S]!==void 0&&m++;return m===x}function l(g){const m=g.target;m.removeEventListener("dispose",l);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(g){const m=g.target;m.removeEventListener("dispose",h);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Bv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&br("WebGLRenderer: "+n+" extension not supported."),s}}}function zv(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){c(x.target)}function c(x){x.index!==null&&t.remove(x.index);for(const d in x.attributes)t.remove(x.attributes[d]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);const S=r.get(x);S&&(t.remove(S),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function l(x,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function h(x){const S=x.attributes;for(const d in S)t.update(S[d],i.ARRAY_BUFFER)}function p(x){const S=x.index,d=x.attributes.position;let u=0;if(d===void 0)return;const _=S!==null?S.array.length:d.array.length/3-1,v=d.count>=65535?vf:xf,f=new v(Math.ceil(_/3)*6,1),T=f.array;if(S!==null){const M=S.array;u=S.version;for(let y=0,P=0;y<_;y+=3){const R=M[y+0],w=M[y+1],A=M[y+2];T[P++]=R,T[P++]=w,T[P++]=w,T[P++]=A,T[P++]=A,T[P++]=R}}else{u=d.version;for(let M=0,y=0;M<_;M+=3){const P=M+0,R=M+1,w=M+2;T[y++]=P,T[y++]=R,T[y++]=R,T[y++]=w,T[y++]=w,T[y++]=P}}f.version=u;const b=r.get(x);b&&t.remove(b),r.set(x,f)}function g(x){const S=r.get(x);if(S){const d=x.index;d!==null&&S.version<d.version&&p(x)}else p(x);return r.get(x)}function m(){for(const x in s){const S=s[x].deref();S!==void 0&&c(S)}}return{get:l,update:h,getWireframeAttribute:g,dispose:m}}function kv(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,g){i.drawElements(n,g,r,p*a),e.update(g,n,1)}function l(p,g,m){m!==0&&(i.drawElementsInstanced(n,g,r,p*a,m),e.update(g,n,m))}function h(p,g,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,p,0,m);let S=0;for(let d=0;d<m;d++)S+=g[d];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gv(i,t,e){const n=new WeakMap,s=new tn;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let g=n.get(o);if(g===void 0||g.count!==p){let R=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var m=R;g!==void 0&&g.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let f=0;x===!0&&(f=1),S===!0&&(f=2),d===!0&&(f=3);let T=o.attributes.position.count*f,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const M=new Float32Array(T*b*4*p),y=new ff(M,T,b,p);y.type=bi,y.needsUpdate=!0;const P=f*4;for(let w=0;w<p;w++){const A=u[w],L=_[w],D=v[w],C=T*b*4*w;for(let F=0;F<A.count;F++){const O=F*P;x===!0&&(s.fromBufferAttribute(A,F),M[C+O+0]=s.x,M[C+O+1]=s.y,M[C+O+2]=s.z,M[C+O+3]=0),S===!0&&(s.fromBufferAttribute(L,F),M[C+O+4]=s.x,M[C+O+5]=s.y,M[C+O+6]=s.z,M[C+O+7]=0),d===!0&&(s.fromBufferAttribute(D,F),M[C+O+8]=s.x,M[C+O+9]=s.y,M[C+O+10]=s.z,M[C+O+11]=D.itemSize===4?s.w:1)}}g={count:p,texture:y,size:new At(T,b)},n.set(o,g),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let x=0;for(let d=0;d<l.length;d++)x+=l[d];const S=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function Hv(i,t,e,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,p=l.geometry,g=t.get(l,p);if(r.get(g)!==h&&(t.update(g),r.set(g,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return g}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Wv={[Xd]:"LINEAR_TONE_MAPPING",[qd]:"REINHARD_TONE_MAPPING",[Yd]:"CINEON_TONE_MAPPING",[Zd]:"ACES_FILMIC_TONE_MAPPING",[Kd]:"AGX_TONE_MAPPING",[Jd]:"NEUTRAL_TONE_MAPPING",[$d]:"CUSTOM_TONE_MAPPING"};function Xv(i,t,e,n,s,r){const a=new Jn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new Se;h.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const p=new L0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Wt(h,p),m=new Nh(-1,1,1,-1,0,1);let x=null,S=null,d=!1,u,_=null,v=[],f=!1;this.setSize=function(T,b){a.setSize(T,b),o!==null&&o.setSize(T,b),c!==null&&c.setSize(T,b);for(let M=0;M<v.length;M++){const y=v[M];y.setSize&&y.setSize(T,b)}},this.setEffects=function(T){v=T,f=v.length>0&&v[0].isRenderPass===!0;const b=a.width,M=a.height;v.length>0&&o===null&&(o=new Jn(b,M,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),c=new Jn(b,M,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&v.some(P=>P.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new Ws(b,M),r===!0&&(l.format=Ji,l.type=Gs)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let P=0;P<v.length;P++){const R=v[P];R.setSize&&R.setSize(b,M),y&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(T,b){if(d||T.toneMapping===Bi&&v.length===0)return!1;if(_=b,b!==null){const M=b.width,y=b.height;(a.width!==M||a.height!==y)&&this.setSize(M,y)}return f===!1&&T.setRenderTarget(a),u=T.toneMapping,T.toneMapping=Bi,!0},this.hasRenderPass=function(){return f},this.end=function(T,b){T.toneMapping=u,d=!0;let M=a,y=o;for(let P=0;P<v.length;P++){const R=v[P];R.enabled!==!1&&(R.render(T,y,M,b),R.needsSwap!==!1&&(M=y,y=y===o?c:o))}if(x!==T.outputColorSpace||S!==T.toneMapping){x=T.outputColorSpace,S=T.toneMapping,p.defines={},ye.getTransfer(x)===Ne&&(p.defines.SRGB_TRANSFER="");const P=Wv[S];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=M.texture,T.setRenderTarget(_),T.render(g,m),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}const kf=new Un,Vf=new Ws(1,1),Gf=new yf(1),Hf=new ff,Wf=new Dm,Xf=new Sf,ju=[],td=[],ed=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function Fr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ju[s];if(r===void 0&&(r=new Float32Array(s),ju[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ml(i,t){let e=td[t];e===void 0&&(e=new Int32Array(t),td[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2fv(this.addr,t),pn(e,t)}}function Zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;i.uniform3fv(this.addr,t),pn(e,t)}}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4fv(this.addr,t),pn(e,t)}}function Kv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;id.set(n),i.uniformMatrix2fv(this.addr,!1,id),pn(e,n)}}function Jv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;nd.set(n),i.uniformMatrix3fv(this.addr,!1,nd),pn(e,n)}}function Qv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;ed.set(n),i.uniformMatrix4fv(this.addr,!1,ed),pn(e,n)}}function jv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2iv(this.addr,t),pn(e,t)}}function eM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3iv(this.addr,t),pn(e,t)}}function nM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4iv(this.addr,t),pn(e,t)}}function iM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2uiv(this.addr,t),pn(e,t)}}function rM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3uiv(this.addr,t),pn(e,t)}}function aM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4uiv(this.addr,t),pn(e,t)}}function gl(i){return i.version===0&&(i.compareFunction=lf,i.needsUpdate=!0),i}function oM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=gl(Vf):r=kf,e.setTexture2D(t||r,s)}function lM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wf,s)}function cM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=gl(Gf):r=Xf,e.setTextureCube(t||r,s)}function hM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hf,s)}function uM(i){switch(i){case 5126:return qv;case 35664:return Yv;case 35665:return Zv;case 35666:return $v;case 35674:return Kv;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return jv;case 35667:case 35671:return tM;case 35668:case 35672:return eM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return sM;case 36295:return rM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return hM}}function dM(i,t){i.uniform1fv(this.addr,t)}function fM(i,t){const e=Fr(t,this.size,2);i.uniform2fv(this.addr,e)}function pM(i,t){const e=Fr(t,this.size,3);i.uniform3fv(this.addr,e)}function mM(i,t){const e=Fr(t,this.size,4);i.uniform4fv(this.addr,e)}function gM(i,t){const e=Fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xM(i,t){const e=Fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vM(i,t){const e=Fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function MM(i,t){i.uniform1iv(this.addr,t)}function _M(i,t){i.uniform2iv(this.addr,t)}function SM(i,t){i.uniform3iv(this.addr,t)}function yM(i,t){i.uniform4iv(this.addr,t)}function bM(i,t){i.uniform1uiv(this.addr,t)}function TM(i,t){i.uniform2uiv(this.addr,t)}function wM(i,t){i.uniform3uiv(this.addr,t)}function EM(i,t){i.uniform4uiv(this.addr,t)}function AM(i,t,e){const n=this.cache,s=t.length,r=ml(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=gl(Vf):a=kf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function RM(i,t,e){const n=this.cache,s=t.length,r=ml(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wf,r[a])}function CM(i,t,e){const n=this.cache,s=t.length,r=ml(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=gl(Gf):a=Xf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function PM(i,t,e){const n=this.cache,s=t.length,r=ml(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hf,r[a])}function IM(i){switch(i){case 5126:return dM;case 35664:return fM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return xM;case 35676:return vM;case 5124:case 35670:return MM;case 35667:case 35671:return _M;case 35668:case 35672:return SM;case 35669:case 35673:return yM;case 5125:return bM;case 36294:return TM;case 36295:return wM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}class DM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uM(e.type)}}class LM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=IM(e.type)}}class NM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function sd(i,t){i.seq.push(t),i.map[t.id]=t}function UM(i,t,e){const n=i.name,s=n.length;for(ac.lastIndex=0;;){const r=ac.exec(n),a=ac.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){sd(e,l===void 0?new DM(o,i,t):new LM(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new NM(o),sd(e,p)),e=p}}}class Fo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);UM(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function rd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const OM=37297;let FM=0;function BM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ad=new de;function zM(i){ye._getMatrix(ad,ye.workingColorSpace,i);const t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case Zo:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function od(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+BM(i.getShaderSource(t),o)}else return r}function kM(i,t){const e=zM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const VM={[Xd]:"Linear",[qd]:"Reinhard",[Yd]:"Cineon",[Zd]:"ACESFilmic",[Kd]:"AgX",[Jd]:"Neutral",[$d]:"Custom"};function GM(i,t){const e=VM[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bo=new U;function HM(){ye.getLuminanceCoefficients(bo);const i=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function XM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ra(i){return i!==""}function ld(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(i){return i.replace(YM,ZM)}function ZM(i,t){const e=ge[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return lh(e)}const $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(i){return i.replace($M,KM)}function KM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const JM={[Io]:"SHADOWMAP_TYPE_PCF",[na]:"SHADOWMAP_TYPE_VSM"};function QM(i){return JM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jM={[Ma]:"ENVMAP_MODE_REFRACTION"};function t_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e_={[Wd]:"ENVMAP_BLENDING_MULTIPLY",[Kp]:"ENVMAP_BLENDING_MIX",[Jp]:"ENVMAP_BLENDING_ADD"};function n_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":e_[i.combine]||"ENVMAP_BLENDING_NONE"}function i_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=QM(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=t_(e),p=n_(e),g=WM(e),m=XM(r),x=s.createProgram();let S,d,u=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ra).join(`
`),S.length>0&&(S+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ra).join(`
`),d.length>0&&(d+=`
`)):(S=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),d=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?ge.tonemapping_pars_fragment:"",e.toneMapping!==Bi?GM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,kM("linearToOutputTexel",e.outputColorSpace),HM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ra).join(`
`)),a=lh(a),a=ld(a,e),a=cd(a,e),o=lh(o),o=ld(o,e),o=cd(o,e),a=hd(a),o=hd(o),e.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,S=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,d=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=u+S+a,v=u+d+o,f=rd(s,s.VERTEX_SHADER,_),T=rd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,f),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(R){if(i.debug.checkShaderErrors){const w=s.getProgramInfoLog(x)||"",A=s.getShaderInfoLog(f)||"",L=s.getShaderInfoLog(T)||"",D=w.trim(),C=A.trim(),F=L.trim();let O=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,f,T);else{const V=od(s,f,"vertex"),X=od(s,T,"fragment");Pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+V+`
`+X)}else D!==""?ae("WebGLProgram: Program Info Log:",D):(C===""||F==="")&&(q=!1);q&&(R.diagnostics={runnable:O,programLog:D,vertexShader:{log:C,prefix:S},fragmentShader:{log:F,prefix:d}})}s.deleteShader(f),s.deleteShader(T),M=new Fo(s,x),y=qM(s,x)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,OM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=FM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=f,this.fragmentShader=T,this}let s_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new a_(t),e.set(t,n)),n}}class a_{constructor(t){this.id=s_++,this.code=t,this.usedTimes=0}}function o_(i){return i===Hs||i===Wo||i===Xo}function l_(i,t,e,n,s,r){const a=new pf,o=new r_,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,y,P,R,w,A){const L=R.fog,D=w.geometry,C=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,F=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,O=t.get(M.envMap||C,F),q=g[M.type];let V=n.precision;M.precision!==null&&(V=n.getMaxPrecision(M.precision),V!==M.precision&&ae("WebGLProgram.getParameters:",M.precision,"not supported, using",V,"instead."));const X=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,k=X!==void 0?X.length:0;let $=0;D.morphAttributes.position!==void 0&&($=1),D.morphAttributes.normal!==void 0&&($=2),D.morphAttributes.color!==void 0&&($=3);let dt,B,j,K;if(q){const kt=Ui[q];dt=kt.vertexShader,B=kt.fragmentShader}else{dt=M.vertexShader,B=M.fragmentShader;const kt=o.getVertexShaderStage(M),we=o.getFragmentShaderStage(M);o.update(M,kt,we),j=kt.id,K=we.id}const ot=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),Mt=w.isInstancedMesh===!0,Xt=w.isBatchedMesh===!0,Nt=!!M.map,Jt=!!M.matcap,ie=!!O,at=ie&&O.isPMREMTexture===!0,pt=!!M.aoMap,mt=!!M.lightMap,lt=!!M.bumpMap&&M.wireframe===!1,_t=!!M.normalMap,Ct=!!M.displacementMap,wt=!!M.emissiveMap,qt=!!M.metalnessMap,ne=!!M.roughnessMap,re=M.anisotropy>0,G=M.clearcoat>0,bt=M.diffuseRoughness>0,ut=M.dispersion>0,Dt=M.retroreflectivity>0,ct=M.iridescence>0,Gt=M.sheen>0,ht=M.transmission>0,Tt=re&&!!M.anisotropyMap,N=G&&!!M.clearcoatMap,E=G&&!!M.clearcoatNormalMap,H=G&&!!M.clearcoatRoughnessMap,it=bt&&!!M.diffuseRoughnessMap,Q=ct&&!!M.iridescenceMap,xt=ct&&!!M.iridescenceThicknessMap,gt=Gt&&!!M.sheenColorMap,J=Gt&&!!M.sheenRoughnessMap,tt=!!M.specularMap,St=!!M.specularColorMap,z=!!M.specularIntensityMap,ft=ht&&!!M.transmissionMap,st=ht&&!!M.thicknessMap,It=!!M.gradientMap,Rt=!!M.alphaMap,Pt=M.alphaTest>0,jt=!!M.alphaHash,ce=!!M.extensions;let Et=Bi;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Et=i.toneMapping);const se=at?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,he={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:dt,fragmentShader:B,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:V,batching:Xt,batchingColor:Xt&&w._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&w.instanceColor!==null,instancingMorph:Mt&&w.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Nt,matcap:Jt,envMap:ie,envMapMode:ie&&O.mapping,envMapPMREM:at,envMapMaxLod:at?se.length-1:null,envMapSize:at?se[0].width:null,aoMap:pt,lightMap:mt,bumpMap:lt,normalMap:_t,displacementMap:Ct,emissiveMap:wt,normalMapObjectSpace:_t&&M.normalMapType===tm,normalMapTangentSpace:_t&&M.normalMapType===qo,packedNormalMap:_t&&M.normalMapType===qo&&o_(M.normalMap.format),metalnessMap:qt,roughnessMap:ne,anisotropy:re,anisotropyMap:Tt,clearcoat:G,clearcoatMap:N,clearcoatNormalMap:E,clearcoatRoughnessMap:H,diffuseRoughness:bt,diffuseRoughnessMap:it,dispersion:ut,retroreflection:Dt,iridescence:ct,iridescenceMap:Q,iridescenceThicknessMap:xt,sheen:Gt,sheenColorMap:gt,sheenRoughnessMap:J,specularMap:tt,specularColorMap:St,specularIntensityMap:z,transmission:ht,transmissionMap:ft,thicknessMap:st,gradientMap:It,opaque:M.transparent===!1&&M.blending===la&&M.alphaToCoverage===!1,alphaMap:Rt,alphaTest:Pt,alphaHash:jt,combine:M.combine,mapUv:Nt&&m(M.map.channel),aoMapUv:pt&&m(M.aoMap.channel),lightMapUv:mt&&m(M.lightMap.channel),bumpMapUv:lt&&m(M.bumpMap.channel),normalMapUv:_t&&m(M.normalMap.channel),displacementMapUv:Ct&&m(M.displacementMap.channel),emissiveMapUv:wt&&m(M.emissiveMap.channel),metalnessMapUv:qt&&m(M.metalnessMap.channel),roughnessMapUv:ne&&m(M.roughnessMap.channel),anisotropyMapUv:Tt&&m(M.anisotropyMap.channel),clearcoatMapUv:N&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:E&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&m(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&m(M.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(M.sheenRoughnessMap.channel),specularMapUv:tt&&m(M.specularMap.channel),specularColorMapUv:St&&m(M.specularColorMap.channel),specularIntensityMapUv:z&&m(M.specularIntensityMap.channel),transmissionMapUv:ft&&m(M.transmissionMap.channel),thicknessMapUv:st&&m(M.thicknessMap.channel),alphaMapUv:Rt&&m(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(_t||re),vertexNormals:!!D.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!D.attributes.uv&&(Nt||Rt),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||D.attributes.normal===void 0&&_t===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:et,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:$,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:A.filter(kt=>kt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Nt&&M.map.isVideoTexture===!0&&ye.getTransfer(M.map.colorSpace)===Ne,decodeVideoTextureEmissive:wt&&M.emissiveMap.isVideoTexture===!0&&ye.getTransfer(M.emissiveMap.colorSpace)===Ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===si,flipSided:M.side===Nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ce&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&M.extensions.multiDraw===!0||Xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function S(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(d(y,M),u(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function d(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapPMREM),M.push(y.envMapMaxLod),M.push(y.envMapSize),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.diffuseRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.numSunLights),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numSunLightShadows),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.numLightProbeGrids),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function u(M,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function _(M){const y=g[M.type];let P;if(y){const R=Ui[y];P=_r.clone(R.uniforms)}else P=M.uniforms;return P}function v(M,y){let P=h.get(y);return P!==void 0?++P.usedTimes:(P=new i_(i,y,M,s),l.push(P),h.set(y,P)),P}function f(M){if(--M.usedTimes===0){const y=l.indexOf(M);l[y]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function T(M){o.remove(M)}function b(){o.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:_,acquireProgram:v,releaseProgram:f,releaseShaderCache:T,programs:l,dispose:b}}function c_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function dd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(g){let m=0;return g.isInstancedMesh&&(m+=2),g.isSkinnedMesh&&(m+=1),m}function o(g,m,x,S,d,u){let _=i[t];return _===void 0?(_={id:g.id,object:g,geometry:m,material:x,materialVariant:a(g),groupOrder:S,renderOrder:g.renderOrder,z:d,group:u},i[t]=_):(_.id=g.id,_.object=g,_.geometry=m,_.material=x,_.materialVariant=a(g),_.groupOrder=S,_.renderOrder=g.renderOrder,_.z=d,_.group=u),t++,_}function c(g,m,x,S,d,u,_){_.reversedDepth===!0&&(d=-d);const v=o(g,m,x,S,d,u);x.transmission>0?n.push(v):x.transparent===!0?s.push(v):e.push(v)}function l(g,m,x,S,d,u){const _=o(g,m,x,S,d,u);x.transmission>0?n.unshift(_):x.transparent===!0?s.unshift(_):e.unshift(_)}function h(g,m){e.length>1&&e.sort(g||h_),n.length>1&&n.sort(m||dd),s.length>1&&s.sort(m||dd)}function p(){for(let g=t,m=i.length;g<m;g++){const x=i[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function u_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new fd,i.set(n,[a])):s>=r.length?(a=new fd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Zt};break;case"SpotLight":e={position:new U,direction:new U,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function f_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let p_=0;function m_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g_(i){const t=new d_,e=f_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new be,a=new be;function o(l){let h=0,p=0,g=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,x=0,S=0,d=0,u=0,_=0,v=0,f=0,T=0,b=0,M=0,y=0,P=0,R=0;l.sort(m_);for(let A=0,L=l.length;A<L;A++){const D=l[A],C=D.color,F=D.intensity,O=D.distance;let q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hs?q=D.shadow.map.texture:q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=C.r*F,p+=C.g*F,g+=C.b*F;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],F);R++}else if(D.isSunLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,k=e.get(D);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[x]=k,n.sunShadowMap[x]=q;const $=X.getViewportCount();for(let dt=0;dt<$;dt++)n.sunShadowMatrix[S+dt]=X.getMatrix(dt),n.sunShadowCascade[S+dt]=X._cascadeData[dt];S+=$,x++}n.sun[m]=V,m++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,k=e.get(D);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=D.shadow.matrix,T++}n.directional[d]=V,d++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(C).multiplyScalar(F),V.distance=O,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[_]=V;const X=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,X.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[_]=X.matrix,D.castShadow){const k=e.get(D);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=q,M++}_++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(C).multiplyScalar(F),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[v]=V,v++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const X=D.shadow,k=e.get(D);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,n.pointShadow[u]=k,n.pointShadowMap[u]=q,n.pointShadowMatrix[u]=D.shadow.matrix,b++}n.point[u]=V,u++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(F),V.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[f]=V,f++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=g;const w=n.hash;(w.sunLength!==m||w.directionalLength!==d||w.pointLength!==u||w.spotLength!==_||w.rectAreaLength!==v||w.hemiLength!==f||w.numSunShadows!==x||w.numDirectionalShadows!==T||w.numPointShadows!==b||w.numSpotShadows!==M||w.numSpotMaps!==y||w.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=d,n.spot.length=_,n.rectArea.length=v,n.point.length=u,n.hemi.length=f,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+y-P,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,w.sunLength=m,w.directionalLength=d,w.pointLength=u,w.spotLength=_,w.rectAreaLength=v,w.hemiLength=f,w.numSunShadows=x,w.numDirectionalShadows=T,w.numPointShadows=b,w.numSpotShadows=M,w.numSpotMaps=y,w.numLightProbes=R,n.version=p_++)}function c(l,h){let p=0,g=0,m=0,x=0,S=0,d=0;const u=h.matrixWorldInverse;for(let _=0,v=l.length;_<v;_++){const f=l[_];if(f.isSunLight){const T=n.sun[p];T.direction.setFromMatrixPosition(f.matrixWorld),T.direction.transformDirection(u),p++}else if(f.isDirectionalLight){const T=n.directional[g];T.direction.setFromMatrixPosition(f.matrixWorld),s.setFromMatrixPosition(f.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),g++}else if(f.isSpotLight){const T=n.spot[x];T.position.setFromMatrixPosition(f.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(f.matrixWorld),s.setFromMatrixPosition(f.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),x++}else if(f.isRectAreaLight){const T=n.rectArea[S];T.position.setFromMatrixPosition(f.matrixWorld),T.position.applyMatrix4(u),a.identity(),r.copy(f.matrixWorld),r.premultiply(u),a.extractRotation(r),T.halfWidth.set(f.width*.5,0,0),T.halfHeight.set(0,f.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(f.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(f.matrixWorld),T.position.applyMatrix4(u),m++}else if(f.isHemisphereLight){const T=n.hemi[d];T.direction.setFromMatrixPosition(f.matrixWorld),T.direction.transformDirection(u),d++}}}return{setup:o,setupView:c,state:n}}function pd(i){const t=new g_(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function c(){t.setup(e),s.sort((p,g)=>p.priority-g.priority||p.id-g.id)}function l(p){t.setupView(e,p)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function x_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new pd(i),t.set(s,[o])):r>=a.length?(o=new pd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,__=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],S_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],md=new be,Qr=new U,oc=new U;function y_(i,t,e){let n=new ba;const s=new At,r=new At,a=new tn,o=new U0,c=new O0,l={},h=e.maxTextureSize,p={[yi]:Nn,[Nn]:yi,[si]:si},g=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:v_,fragmentShader:M_}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const x=new Se;x.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Wt(x,g),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let u=this.type;this.render=function(b,M,y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;this.type===kd&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Io);const P=i.getRenderTarget(),R=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Xn),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const L=u!==this.type;L&&M.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(C=>C.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,C=b.length;D<C;D++){const F=b[D],O=F.shadow;if(O===void 0){ae("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const q=O.getFrameExtents();s.multiply(q),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,O.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===na){if(F.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Jn(s.x,s.y,{format:Hs,type:Qn,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new Ws(s.x,s.y,bi),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=Ts,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=dn,O.map.depthTexture.magFilter=dn}else F.isPointLight?(O.map=new Uh(s.x),O.map.depthTexture=new yf(s.x,zi)):(O.map=new Jn(s.x,s.y),O.map.depthTexture=new Ws(s.x,s.y,zi)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=Ts,this.type===Io?(O.map.depthTexture.compareFunction=V?of:af,O.map.depthTexture.minFilter=Ln,O.map.depthTexture.magFilter=Ln):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=dn,O.map.depthTexture.magFilter=dn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const X=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();F.isPointLight!==!0&&O.updateMatrices(F,y);const k=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:y.layers;for(let $=0;$<X;$++){const dt=O.getCamera($);if(F.isPointLight){const B=O.camera,j=O.matrix,K=F.distance||B.far;K!==B.far&&(B.far=K,B.updateProjectionMatrix()),Qr.setFromMatrixPosition(F.matrixWorld),B.position.copy(Qr),oc.copy(B.position),oc.add(__[$]),B.up.copy(S_[$]),B.lookAt(oc),B.updateMatrixWorld(),j.makeTranslation(-Qr.x,-Qr.y,-Qr.z),md.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),O._frustum.setFromProjectionMatrix(md,B.coordinateSystem,B.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,$),i.clear();else{$===0&&(i.setRenderTarget(O.map),i.clear());const B=O.getViewport($);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),A.viewport(a)}n=O.getFrustum($),f(M,y,dt,F,k,this.type)}O.isPointLightShadow!==!0&&this.type===na&&_(O,y),O.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(P,R,w)};function _(b,M){const y=t.update(S);g.defines.VSM_SAMPLES!==b.blurSamples&&(g.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new Jn(s.x,s.y,{format:Hs,type:Qn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),g.uniforms.shadow_pass.value=b.map.depthTexture,g.uniforms.resolution.value.set(b.map.width,b.map.height),g.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,y,g,S,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,y,m,S,null)}function v(b,M,y,P){let R=null;const w=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)R=w;else if(R=y.isPointLight===!0?c:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const A=R.uuid,L=M.uuid;let D=l[A];D===void 0&&(D={},l[A]=D);let C=D[L];C===void 0&&(C=R.clone(),D[L]=C,M.addEventListener("dispose",T)),R=C}if(R.visible=M.visible,R.wireframe=M.wireframe,P===na?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:p[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const A=i.properties.get(R);A.light=y}return R}function f(b,M,y,P,R,w){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===na)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const D=t.update(b),C=b.material;if(Array.isArray(C)){const F=D.groups;for(let O=0,q=F.length;O<q;O++){const V=F[O],X=C[V.materialIndex];if(X&&X.visible){const k=v(b,X,P,w);b.onBeforeShadow(i,b,M,y,D,k,V),i.renderBufferDirect(y,null,D,k,b,V),b.onAfterShadow(i,b,M,y,D,k,V)}}}else if(C.visible){const F=v(b,C,P,w);b.onBeforeShadow(i,b,M,y,D,F,null),i.renderBufferDirect(y,null,D,F,b,null),b.onAfterShadow(i,b,M,y,D,F,null)}}const L=b.children;for(let D=0,C=L.length;D<C;D++)f(L[D],M,y,P,R,w)}function T(b){b.target.removeEventListener("dispose",T);for(const y in l){const P=l[y],R=b.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function b_(i,t){function e(){let z=!1;const ft=new tn;let st=null;const It=new tn(0,0,0,0);return{setMask:function(Rt){st!==Rt&&!z&&(i.colorMask(Rt,Rt,Rt,Rt),st=Rt)},setLocked:function(Rt){z=Rt},setClear:function(Rt,Pt,jt,ce,Et){Et===!0&&(Rt*=ce,Pt*=ce,jt*=ce),ft.set(Rt,Pt,jt,ce),It.equals(ft)===!1&&(i.clearColor(Rt,Pt,jt,ce),It.copy(ft))},reset:function(){z=!1,st=null,It.set(-1,0,0,0)}}}function n(){let z=!1,ft=!1,st=null,It=null,Rt=null;return{setReversed:function(Pt){if(ft!==Pt){const jt=t.get("EXT_clip_control");Pt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),ft=Pt;const ce=Rt;Rt=null,this.setClear(ce)}},getReversed:function(){return ft},setTest:function(Pt){Pt?et(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(Pt){st!==Pt&&!z&&(i.depthMask(Pt),st=Pt)},setFunc:function(Pt){if(ft&&(Pt=um[Pt]),It!==Pt){switch(Pt){case _c:i.depthFunc(i.NEVER);break;case Sc:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case va:i.depthFunc(i.LEQUAL);break;case bc:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case wc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=Pt}},setLocked:function(Pt){z=Pt},setClear:function(Pt){Rt!==Pt&&(Rt=Pt,ft&&(Pt=1-Pt),i.clearDepth(Pt))},reset:function(){z=!1,st=null,It=null,Rt=null,ft=!1}}}function s(){let z=!1,ft=null,st=null,It=null,Rt=null,Pt=null,jt=null,ce=null,Et=null;return{setTest:function(se){z||(se?et(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(se){ft!==se&&!z&&(i.stencilMask(se),ft=se)},setFunc:function(se,he,kt){(st!==se||It!==he||Rt!==kt)&&(i.stencilFunc(se,he,kt),st=se,It=he,Rt=kt)},setOp:function(se,he,kt){(Pt!==se||jt!==he||ce!==kt)&&(i.stencilOp(se,he,kt),Pt=se,jt=he,ce=kt)},setLocked:function(se){z=se},setClear:function(se){Et!==se&&(i.clearStencil(se),Et=se)},reset:function(){z=!1,ft=null,st=null,It=null,Rt=null,Pt=null,jt=null,ce=null,Et=null}}}const r=new e,a=new n,o=new s;let c={};const l=new WeakMap;let h={},p={},g={},m=new WeakMap,x=[],S=null,d=!1,u=null,_=null,v=null,f=null,T=null,b=null,M=null,y=new Zt(0,0,0),P=0,R=!1,w=null,A=null,L=null,D=null,C=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=q>=2);let X=null,k={};const $=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),B=new tn().fromArray($),j=new tn().fromArray(dt);function K(z,ft,st,It){const Rt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(z,Pt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<st;jt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(ft+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Pt}const ot={};ot[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(va),lt(!1),_t(au),et(i.CULL_FACE),pt(Xn);function et(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Mt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Xt(z,ft){return g[z]!==ft?(i.bindFramebuffer(z,ft),g[z]=ft,z===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=ft),z===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Nt(z,ft){let st=x,It=!1;if(z){st=m.get(ft),st===void 0&&(st=[],m.set(ft,st));const Rt=z.textures;if(st.length!==Rt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,jt=Rt.length;Pt<jt;Pt++)st[Pt]=i.COLOR_ATTACHMENT0+Pt;st.length=Rt.length,It=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,It=!0);It&&i.drawBuffers(st)}function Jt(z){return S!==z?(i.useProgram(z),S=z,!0):!1}const ie={[Oi]:i.FUNC_ADD,[Op]:i.FUNC_SUBTRACT,[Fp]:i.FUNC_REVERSE_SUBTRACT};ie[Bp]=i.MIN,ie[zp]=i.MAX;const at={[ia]:i.ZERO,[kp]:i.ONE,[Vp]:i.SRC_COLOR,[Gd]:i.SRC_ALPHA,[Xp]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[vc]:i.DST_ALPHA,[Gp]:i.ONE_MINUS_SRC_COLOR,[Hd]:i.ONE_MINUS_SRC_ALPHA,[Wp]:i.ONE_MINUS_DST_COLOR,[Hp]:i.ONE_MINUS_DST_ALPHA,[qp]:i.CONSTANT_COLOR,[Yp]:i.ONE_MINUS_CONSTANT_COLOR,[Zp]:i.CONSTANT_ALPHA,[$p]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(z,ft,st,It,Rt,Pt,jt,ce,Et,se){if(z===Xn){d===!0&&(Mt(i.BLEND),d=!1);return}if(d===!1&&(et(i.BLEND),d=!0),z!==Vd){if(z!==u||se!==R){if((_!==Oi||T!==Oi)&&(i.blendEquation(i.FUNC_ADD),_=Oi,T=Oi),se)switch(z){case la:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.ONE,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",z);break}else switch(z){case la:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ou:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",z);break}v=null,f=null,b=null,M=null,y.set(0,0,0),P=0,u=z,R=se}return}Rt=Rt||ft,Pt=Pt||st,jt=jt||It,(ft!==_||Rt!==T)&&(i.blendEquationSeparate(ie[ft],ie[Rt]),_=ft,T=Rt),(st!==v||It!==f||Pt!==b||jt!==M)&&(i.blendFuncSeparate(at[st],at[It],at[Pt],at[jt]),v=st,f=It,b=Pt,M=jt),(ce.equals(y)===!1||Et!==P)&&(i.blendColor(ce.r,ce.g,ce.b,Et),y.copy(ce),P=Et),u=z,R=!1}function mt(z,ft){z.side===si?Mt(i.CULL_FACE):et(i.CULL_FACE);let st=z.side===Nn;ft&&(st=!st),lt(st),z.blending===la&&z.transparent===!1?pt(Xn):pt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const It=z.stencilWrite;o.setTest(It),It&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),wt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){w!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),w=z)}function _t(z){z!==Np?(et(i.CULL_FACE),z!==A&&(z===au?i.cullFace(i.BACK):z===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),A=z}function Ct(z){z!==L&&(O&&i.lineWidth(z),L=z)}function wt(z,ft,st){z?(et(i.POLYGON_OFFSET_FILL),(D!==ft||C!==st)&&(D=ft,C=st,a.getReversed()&&(ft=-ft,st=-st),i.polygonOffset(ft,st))):Mt(i.POLYGON_OFFSET_FILL)}function qt(z){z?et(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function ne(z){z===void 0&&(z=i.TEXTURE0+F-1),X!==z&&(i.activeTexture(z),X=z)}function re(z,ft,st){st===void 0&&(X===null?st=i.TEXTURE0+F-1:st=X);let It=k[st];It===void 0&&(It={type:void 0,texture:void 0},k[st]=It),(It.type!==z||It.texture!==ft)&&(X!==st&&(i.activeTexture(st),X=st),i.bindTexture(z,ft||ot[z]),It.type=z,It.texture=ft)}function G(){const z=k[X];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(z){Pe("WebGLState:",z)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(z){Pe("WebGLState:",z)}}function Dt(){try{i.texSubImage2D(...arguments)}catch(z){Pe("WebGLState:",z)}}function ct(){try{i.texSubImage3D(...arguments)}catch(z){Pe("WebGLState:",z)}}function Gt(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Pe("WebGLState:",z)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Pe("WebGLState:",z)}}function Tt(){try{i.texStorage2D(...arguments)}catch(z){Pe("WebGLState:",z)}}function N(){try{i.texStorage3D(...arguments)}catch(z){Pe("WebGLState:",z)}}function E(){try{i.texImage2D(...arguments)}catch(z){Pe("WebGLState:",z)}}function H(){try{i.texImage3D(...arguments)}catch(z){Pe("WebGLState:",z)}}function it(z){return p[z]!==void 0?p[z]:i.getParameter(z)}function Q(z,ft){p[z]!==ft&&(i.pixelStorei(z,ft),p[z]=ft)}function xt(z){B.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),B.copy(z))}function gt(z){j.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function J(z,ft){let st=l.get(ft);st===void 0&&(st=new WeakMap,l.set(ft,st));let It=st.get(z);It===void 0&&(It=i.getUniformBlockIndex(ft,z.name),i.uniformBlockBinding(ft,It,It),st.set(z,It))}function tt(z,ft,st){const Rt=l.get(ft).get(z);c[Rt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,Rt,st),c[Rt]=st)}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},X=null,k={},g={},c={},m=new WeakMap,x=[],S=null,d=!1,u=null,_=null,v=null,f=null,T=null,b=null,M=null,y=new Zt(0,0,0),P=0,R=!1,w=null,A=null,L=null,D=null,C=null,B.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Mt,bindFramebuffer:Xt,drawBuffers:Nt,useProgram:Jt,setBlending:pt,setMaterial:mt,setFlipSided:lt,setCullFace:_t,setLineWidth:Ct,setPolygonOffset:wt,setScissorTest:qt,activeTexture:ne,bindTexture:re,unbindTexture:G,compressedTexImage2D:bt,compressedTexImage3D:ut,texImage2D:E,texImage3D:H,pixelStorei:Q,getParameter:it,updateUBOMapping:J,uniformBlockBinding:tt,texStorage2D:Tt,texStorage3D:N,texSubImage2D:Dt,texSubImage3D:ct,compressedTexSubImage2D:Gt,compressedTexSubImage3D:ht,scissor:xt,viewport:gt,reset:St}}function T_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,h=new WeakMap,p=new Set;let g;const m=new WeakMap,x=new Set,S=new FinalizationRegistry(N=>x.delete(N));let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(N,E){return d?new OffscreenCanvas(N,E):$o("canvas")}function _(N,E,H){let it=1;const Q=Tt(N);if((Q.width>H||Q.height>H)&&(it=H/Math.max(Q.width,Q.height)),it<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const xt=Math.floor(it*Q.width),gt=Math.floor(it*Q.height);g===void 0&&(g=u(xt,gt));const J=E?u(xt,gt):g;return J.width=xt,J.height=gt,J.getContext("2d").drawImage(N,0,0,xt,gt),ae("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+xt+"x"+gt+")."),J}else return"data"in N&&ae("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function v(N){return N.generateMipmaps}function f(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(N,E,H,it,Q,xt=!1){if(N!==null){if(i[N]!==void 0)return i[N];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let gt;it&&(gt=t.get("EXT_texture_norm16"),gt||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=E;if(E===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8),H===i.UNSIGNED_SHORT&&gt&&(J=gt.R16_EXT),H===i.SHORT&&gt&&(J=gt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),E===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8),H===i.UNSIGNED_SHORT&&gt&&(J=gt.RG16_EXT),H===i.SHORT&&gt&&(J=gt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),E===i.RGB&&(H===i.UNSIGNED_SHORT&&gt&&(J=gt.RGB16_EXT),H===i.SHORT&&gt&&(J=gt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),E===i.RGBA){const tt=xt?Zo:ye.getTransfer(Q);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=tt===Ne?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&gt&&(J=gt.RGBA16_EXT),H===i.SHORT&&gt&&(J=gt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(N,E){let H;return N?E===null||E===zi||E===Gs?H=i.DEPTH24_STENCIL8:E===bi?H=i.DEPTH32F_STENCIL8:E===_a&&(H=i.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zi||E===Gs?H=i.DEPTH_COMPONENT24:E===bi?H=i.DEPTH_COMPONENT32F:E===_a&&(H=i.DEPTH_COMPONENT16),H}function y(N,E){return v(N)===!0||N.isFramebufferTexture&&N.minFilter!==dn&&N.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function P(N){const E=new WeakRef(N);n.get(N).__ref=E,x.add(E),S.register(N,E,E)}function R(N){const E=n.get(N).__ref;E!==void 0&&(x.delete(E),S.unregister(E))}function w(N){L(N.target)}function A(N){D(N.target)}function L(N){N.removeEventListener("dispose",w),R(N),F(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&p.delete(N)}function D(N){N.removeEventListener("dispose",A),R(N),q(N)}function C(){for(const N of x){const E=N.deref();E!==void 0&&(E.isRenderTarget===!0?D(E):L(E))}x.clear(),p.clear()}function F(N){const E=n.get(N);if(E.__webglInit===void 0)return;const H=N.source,it=m.get(H);if(it){const Q=it[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(N),Object.keys(it).length===0&&m.delete(H)}n.remove(N)}function O(N){const E=n.get(N);i.deleteTexture(E.__webglTexture);const H=N.source,it=m.get(H);delete it[E.__cacheKey],a.memory.textures--}function q(N){const E=n.get(N);E.__depthDisposeCallback&&E.__depthDisposeCallback();const H=N.depthTexture;if(H&&H.renderTarget===N&&L(H),N.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let xt=0;xt<E.__webglFramebuffer[Q].length;xt++)i.deleteFramebuffer(E.__webglFramebuffer[Q][xt]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const it=N.textures;for(let Q=0,xt=it.length;Q<xt;Q++){const gt=n.get(it[Q]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(it[Q])}n.remove(N)}let V=0;function X(){V=0}function k(){return V}function $(N){V=N}function dt(){const N=V;return N>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,N}function B(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.mipmapsAutoUpdate),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function j(N,E){const H=n.get(N);if(N.isVideoTexture&&Gt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&H.__version!==N.version){const it=N.image;if(it===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(H,N,E);return}}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function K(N,E){const H=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){mt(H,N,E);return}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function ot(N,E){const H=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){mt(H,N,E);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function et(N,E){const H=n.get(N);if(N.version>0&&H.__version!==N.version){lt(H,N,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}const Mt={[$n]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Ac]:i.MIRRORED_REPEAT},Xt={[dn]:i.NEAREST,[Qp]:i.NEAREST_MIPMAP_NEAREST,[Ya]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Pl]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},Nt={[nm]:i.NEVER,[lf]:i.ALWAYS,[im]:i.LESS,[af]:i.LEQUAL,[sm]:i.EQUAL,[of]:i.GEQUAL,[rm]:i.GREATER,[am]:i.NOTEQUAL};function Jt(N,E){if(E.type===bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ln||E.magFilter===Pl||E.magFilter===Ya||E.magFilter===vs||E.minFilter===Ln||E.minFilter===Pl||E.minFilter===Ya||E.minFilter===vs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Mt[E.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Mt[E.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Mt[E.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Xt[E.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Xt[E.minFilter]),E.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Nt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===dn||E.minFilter!==Ya&&E.minFilter!==vs||E.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ie(N,E){let H=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",w),P(E));const it=E.source;let Q=m.get(it);Q===void 0&&(Q={},m.set(it,Q));const xt=B(E);if(xt!==N.__cacheKey){Q[xt]===void 0&&(Q[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[xt].usedTimes++;const gt=Q[N.__cacheKey];gt!==void 0&&(Q[N.__cacheKey].usedTimes--,gt.usedTimes===0&&O(E)),N.__cacheKey=xt,N.__webglTexture=Q[xt].texture}return H}function at(N,E,H){return Math.floor(Math.floor(N/H)/E)}function pt(N,E,H,it){const xt=N.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,H,it,E.data);else{xt.sort((z,ft)=>z.start-ft.start);let gt=0;for(let z=1;z<xt.length;z++){const ft=xt[gt],st=xt[z],It=ft.start+ft.count,Rt=at(st.start,E.width,4),Pt=at(ft.start,E.width,4);st.start<=It+1&&Rt===Pt&&at(st.start+st.count-1,E.width,4)===Rt?ft.count=Math.max(ft.count,st.start+st.count-ft.start):(++gt,xt[gt]=st)}xt.length=gt+1;const J=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let z=0,ft=xt.length;z<ft;z++){const st=xt[z],It=Math.floor(st.start/4),Rt=Math.ceil(st.count/4),Pt=It%E.width,jt=Math.floor(It/E.width),ce=Rt,Et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,jt),e.texSubImage2D(i.TEXTURE_2D,0,Pt,jt,ce,Et,H,it,E.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function mt(N,E,H){let it=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(it=i.TEXTURE_3D);const Q=ie(N,E),xt=E.source;e.bindTexture(it,N.__webglTexture,i.TEXTURE0+H);const gt=n.get(xt);if(xt.version!==gt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Et=ye.getPrimaries(ye.workingColorSpace),se=E.colorSpace===ps?null:ye.getPrimaries(E.colorSpace),he=E.colorSpace===ps||Et===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let tt=_(E.image,!1,s.maxTextureSize);tt=ht(E,tt);const St=r.convert(E.format,E.colorSpace),z=r.convert(E.type);let ft=b(E.internalFormat,St,z,E.normalized,E.colorSpace,E.isVideoTexture);Jt(it,E);let st;const It=E.mipmaps,Rt=E.isVideoTexture!==!0,Pt=gt.__version===void 0||Q===!0,jt=xt.dataReady,ce=y(E,tt);if(E.isDepthTexture)ft=M(E.format===Ji,E.type),Pt&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,ft,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,St,z,null));else if(E.isDataTexture)if(It.length>0){Rt&&Pt&&e.texStorage2D(i.TEXTURE_2D,ce,ft,It[0].width,It[0].height);for(let Et=0,se=It.length;Et<se;Et++)st=It[Et],Rt?jt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,st.width,st.height,St,z,st.data):e.texImage2D(i.TEXTURE_2D,Et,ft,st.width,st.height,0,St,z,st.data);E.generateMipmaps=!1}else Rt?(Pt&&e.texStorage2D(i.TEXTURE_2D,ce,ft,tt.width,tt.height),jt&&pt(E,tt,St,z)):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,St,z,tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Rt&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ft,It[0].width,It[0].height,tt.depth);for(let Et=0,se=It.length;Et<se;Et++)if(st=It[Et],E.format!==Ti)if(St!==null)if(Rt){if(jt)if(E.layerUpdates.size>0){const he=Zu(st.width,st.height,E.format,E.type);for(const kt of E.layerUpdates){const we=st.data.subarray(kt*he/st.data.BYTES_PER_ELEMENT,(kt+1)*he/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,kt,st.width,st.height,1,St,we)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,st.width,st.height,tt.depth,St,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,ft,st.width,st.height,tt.depth,0,st.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,st.width,st.height,tt.depth,St,z,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,ft,st.width,st.height,tt.depth,0,St,z,st.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Rt&&Pt&&e.texStorage2D(i.TEXTURE_2D,ce,ft,It[0].width,It[0].height);for(let Et=0,se=It.length;Et<se;Et++)st=It[Et],E.format!==Ti?St!==null?Rt?jt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,st.width,st.height,St,st.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,ft,st.width,st.height,0,st.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?jt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,st.width,st.height,St,z,st.data):e.texImage2D(i.TEXTURE_2D,Et,ft,st.width,st.height,0,St,z,st.data)}else if(E.isDataArrayTexture)if(Rt){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ft,tt.width,tt.height,tt.depth),jt)if(E.layerUpdates.size>0){const Et=Zu(tt.width,tt.height,E.format,E.type);for(const se of E.layerUpdates){const he=tt.data.subarray(se*Et/tt.data.BYTES_PER_ELEMENT,(se+1)*Et/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,tt.width,tt.height,1,St,z,he)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,St,z,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,tt.width,tt.height,tt.depth,0,St,z,tt.data);else if(E.isData3DTexture)Rt?(Pt&&e.texStorage3D(i.TEXTURE_3D,ce,ft,tt.width,tt.height,tt.depth),jt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,St,z,tt.data)):e.texImage3D(i.TEXTURE_3D,0,ft,tt.width,tt.height,tt.depth,0,St,z,tt.data);else if(E.isFramebufferTexture){if(Pt)if(Rt)e.texStorage2D(i.TEXTURE_2D,ce,ft,tt.width,tt.height);else{let Et=tt.width,se=tt.height;for(let he=0;he<ce;he++)e.texImage2D(i.TEXTURE_2D,he,ft,Et,se,0,St,z,null),Et>>=1,se>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const Et=i.canvas;if(Et.hasAttribute("layoutsubtree")||Et.setAttribute("layoutsubtree","true"),tt.parentNode!==Et){Et.appendChild(tt),p.add(E),Et.onpaint=se=>{const he=se.changedElements;for(const kt of p)he.includes(kt.image)&&(kt.needsUpdate=!0)},Et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{const he=i.RGBA,kt=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,he,kt,we,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Rt&&Pt){const Et=Tt(It[0]);e.texStorage2D(i.TEXTURE_2D,ce,ft,Et.width,Et.height)}for(let Et=0,se=It.length;Et<se;Et++)st=It[Et],Rt?jt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,St,z,st):e.texImage2D(i.TEXTURE_2D,Et,ft,St,z,st);E.generateMipmaps=!1}else if(Rt){if(Pt){const Et=Tt(tt);e.texStorage2D(i.TEXTURE_2D,ce,ft,Et.width,Et.height)}jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,z,tt)}else e.texImage2D(i.TEXTURE_2D,0,ft,St,z,tt);v(E)&&E.mipmapsAutoUpdate===!0&&f(it),gt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function lt(N,E,H){if(E.image.length!==6)return;const it=ie(N,E),Q=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+H);const xt=n.get(Q);if(Q.version!==xt.__version||it===!0){e.activeTexture(i.TEXTURE0+H);const gt=ye.getPrimaries(ye.workingColorSpace),J=E.colorSpace===ps?null:ye.getPrimaries(E.colorSpace),tt=E.colorSpace===ps||gt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const St=E.isCompressedTexture||E.image[0].isCompressedTexture,z=E.image[0]&&E.image[0].isDataTexture,ft=[];for(let kt=0;kt<6;kt++)!St&&!z?ft[kt]=_(E.image[kt],!0,s.maxCubemapSize):ft[kt]=z?E.image[kt].image:E.image[kt],ft[kt]=ht(E,ft[kt]);const st=ft[0],It=r.convert(E.format,E.colorSpace),Rt=r.convert(E.type);let Pt=b(E.internalFormat,It,Rt,E.normalized,E.colorSpace);const jt=E.isVideoTexture!==!0,ce=xt.__version===void 0||it===!0,Et=Q.dataReady;let se=y(E,st);Jt(i.TEXTURE_CUBE_MAP,E);let he;if(E.isDepthTexture){if(Pt=M(E.format===Ji,E.type),ce)if(jt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pt,st.width,st.height);else for(let kt=0;kt<6;kt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Pt,st.width,st.height,0,It,Rt,null)}else if(St){jt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,se,Pt,st.width,st.height);for(let kt=0;kt<6;kt++){he=ft[kt].mipmaps;for(let we=0;we<he.length;we++){const Ze=he[we];E.format!==Ti?It!==null?jt?Et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,we,0,0,Ze.width,Ze.height,It,Ze.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,we,Pt,Ze.width,Ze.height,0,Ze.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,we,0,0,Ze.width,Ze.height,It,Rt,Ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,we,Pt,Ze.width,Ze.height,0,It,Rt,Ze.data)}}}else{if(he=E.mipmaps,jt&&ce){he.length>0&&se++;const kt=Tt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,se,Pt,kt.width,kt.height)}for(let kt=0;kt<6;kt++)if(z){jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,0,0,ft[kt].width,ft[kt].height,It,Rt,ft[kt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Pt,ft[kt].width,ft[kt].height,0,It,Rt,ft[kt].data);for(let we=0;we<he.length;we++){const mi=he[we].image[kt].image;jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,we+1,0,0,mi.width,mi.height,It,Rt,mi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,we+1,Pt,mi.width,mi.height,0,It,Rt,mi.data)}}else{jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,0,0,It,Rt,ft[kt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Pt,It,Rt,ft[kt]);for(let we=0;we<he.length;we++){const Ze=he[we];jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,we+1,0,0,It,Rt,Ze.image[kt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,we+1,Pt,It,Rt,Ze.image[kt])}}}v(E)&&E.mipmapsAutoUpdate===!0&&f(i.TEXTURE_CUBE_MAP),xt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function _t(N,E,H,it,Q,xt){const gt=r.convert(H.format,H.colorSpace),J=r.convert(H.type),tt=b(H.internalFormat,gt,J,H.normalized,H.colorSpace),St=n.get(E),z=n.get(H);if(z.__renderTarget=E,!St.__hasExternalTextures){const ft=Math.max(1,E.width>>xt),st=Math.max(1,E.height>>xt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,xt,tt,ft,st,E.depth,0,gt,J,null):e.texImage2D(Q,xt,tt,ft,st,0,gt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),ct(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Q,z.__webglTexture,0,Dt(E)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,Q,z.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(N,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,N),E.depthBuffer){const it=E.depthTexture,Q=it&&it.isDepthTexture?it.type:null,xt=M(E.stencilBuffer,Q),gt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ct(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(E),xt,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(E),xt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,N)}else{const it=E.textures;for(let Q=0;Q<it.length;Q++){const xt=it[Q],gt=r.convert(xt.format,xt.colorSpace),J=r.convert(xt.type),tt=b(xt.internalFormat,gt,J,xt.normalized,xt.colorSpace);ct(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(E),tt,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(E),tt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,tt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(N,E,H){const it=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(E.depthTexture);Q.__renderTarget=E;const xt=it?E.depthTexture.image[0]:E.depthTexture.image;(!Q.__webglTexture||xt.width!==E.width||xt.height!==E.height)&&(xt.width=E.width,xt.height=E.height,E.depthTexture.needsUpdate=!0),it?et(E.depthTexture,0):j(E.depthTexture,0);const gt=Q.__webglTexture,J=Dt(E),tt=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,St=E.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ts)ct(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,tt,gt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,St,tt,gt,0);else if(E.depthTexture.format===Ji)ct(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,tt,gt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,St,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(N){const E=n.get(N),H=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const it=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),it){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,it.removeEventListener("dispose",Q)};it.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=it}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let it=0;it<6;it++)wt(E.__webglFramebuffer[it],N,it);else N.texture.mipmaps.length>0?wt(E.__webglFramebuffer[0],N,0):wt(E.__webglFramebuffer,N,0);else if(H){E.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[it]),E.__webglDepthbuffer[it]===void 0)E.__webglDepthbuffer[it]=i.createRenderbuffer(),Ct(E.__webglDepthbuffer[it],N,!1);else{const Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,xt)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ct(E.__webglDepthbuffer,N,!1);else{const Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,xt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(N,E,H){const it=n.get(N);E!==void 0&&_t(it.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&qt(N)}function re(N){const E=N.texture,H=n.get(N),it=n.get(E);N.addEventListener("dispose",A),P(N);const Q=N.textures,xt=N.isWebGLCubeRenderTarget===!0,gt=Q.length>1;if(gt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=E.version,a.memory.textures++),xt){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(E.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let tt=0;tt<E.mipmaps.length;tt++)H.__webglFramebuffer[J][tt]=i.createFramebuffer()}else H.__webglFramebuffer[J]=i.createFramebuffer()}else{if(E.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<E.mipmaps.length;J++)H.__webglFramebuffer[J]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(gt)for(let J=0,tt=Q.length;J<tt;J++){const St=n.get(Q[J]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&ct(N)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){const tt=Q[J];H.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[J]);const St=r.convert(tt.format,tt.colorSpace),z=r.convert(tt.type),ft=b(tt.internalFormat,St,z,tt.normalized,tt.colorSpace,N.isXRRenderTarget===!0),st=Dt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ft,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,H.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(H.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,E);for(let J=0;J<6;J++)if(E.mipmaps.length>0)for(let tt=0;tt<E.mipmaps.length;tt++)_t(H.__webglFramebuffer[J][tt],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,tt);else _t(H.__webglFramebuffer[J],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);v(E)?f(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let J=0,tt=Q.length;J<tt;J++){const St=Q[J],z=n.get(St);let ft=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ft=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,z.__webglTexture),Jt(ft,St),_t(H.__webglFramebuffer,N,St,i.COLOR_ATTACHMENT0+J,ft,0),v(St)&&f(ft)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(J=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,it.__webglTexture),Jt(J,E),E.mipmaps.length>0)for(let tt=0;tt<E.mipmaps.length;tt++)_t(H.__webglFramebuffer[tt],N,E,i.COLOR_ATTACHMENT0,J,tt);else _t(H.__webglFramebuffer,N,E,i.COLOR_ATTACHMENT0,J,0);v(E)?f(J):E.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&qt(N)}function G(N){const E=N.textures;for(let H=0,it=E.length;H<it;H++){const Q=E[H];if(v(Q)&&Q.mipmapsAutoUpdate===!0){const xt=T(N),gt=n.get(Q).__webglTexture;e.bindTexture(xt,gt),f(xt),e.unbindTexture()}}}const bt=[];function ut(N){if(N.samples>0){if(ct(N)===!1){const E=N.textures,H=N.width,it=N.height;let Q=i.COLOR_BUFFER_BIT;const xt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(N),J=E.length>1;if(J)for(let St=0;St<E.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let St=0;St<E.length;St++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[St]);const z=n.get(E[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,H,it,0,0,H,it,Q,i.NEAREST),c===!0&&(bt.length=0,bt.push(i.COLOR_ATTACHMENT0+St),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&bt.push(xt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let St=0;St<E.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,gt.__webglColorRenderbuffer[St]);const z=n.get(E[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,z,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){const E=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Dt(N){return Math.min(s.maxSamples,N.samples)}function ct(N){const E=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Gt(N){const E=a.render.frame;h.get(N)!==E&&(h.set(N,E),N.update())}function ht(N,E){const H=N.colorSpace,it=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||H!==Yo&&H!==ps&&(ye.getTransfer(H)===Ne?(it!==Ti||Q!==Zn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",H)),E}function Tt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=dt,this.resetTextureUnits=X,this.getTextureUnits=k,this.setTextureUnits=$,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=ot,this.setTextureCube=et,this.rebindTextures=ne,this.setupRenderTarget=re,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ct,this.dispose=C}function w_(i,t){function e(n,s=ps){let r;const a=ye.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===_h)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jd)return i.BYTE;if(n===tf)return i.SHORT;if(n===_a)return i.UNSIGNED_SHORT;if(n===Mh)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===sf)return i.ALPHA;if(n===rf)return i.RGB;if(n===Ti)return i.RGBA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===yh)return i.RED;if(n===bh)return i.RED_INTEGER;if(n===Hs)return i.RG;if(n===Th)return i.RG_INTEGER;if(n===wh)return i.RGBA_INTEGER;if(n===Do||n===Lo||n===No||n===Uo)if(a===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Pc||n===Ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dc||n===Lc||n===Nc||n===Uc||n===Oc||n===Wo||n===Fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dc||n===Lc)return a===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uc)return r.COMPRESSED_R11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wo)return r.COMPRESSED_RG11_EAC;if(n===Fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Kc||n===Jc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qc||n===jc||n===th)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qc)return a===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===nh||n===Xo||n===ih)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===eh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new bf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:E_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends Ys{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,g=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",d=new R_,u={},_=e.getContextAttributes();let v=null,f=null;const T=[],b=[],M=new At;let y=null,P=null;const R=new hi;R.viewport=new tn;const w=new hi;w.viewport=new tn;const A=[R,w],L=new V0;let D=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=T[B];return j===void 0&&(j=new Fl,T[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=T[B];return j===void 0&&(j=new Fl,T[B]=j),j.getGripSpace()},this.getHand=function(B){let j=T[B];return j===void 0&&(j=new Fl,T[B]=j),j.getHandSpace()};function F(B){const j=b.indexOf(B.inputSource);if(j===-1)return;const K=T[j];K!==void 0&&(K.update(B.inputSource,B.frame,l||a),K.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",q);for(let B=0;B<T.length;B++){const j=b[B];j!==null&&(b[B]=null,T[B].disconnect(j))}D=null,C=null,d.reset();for(const B in u)delete u[B];if(t.setRenderTarget(v),m=null,g=null,p=null,s=null,f=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(M.width,M.height,!1),P!==null){const B=P.camera;B.fov=P.fov,B.zoom=P.zoom,B.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(M),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,ot=null,et=null;_.depth&&(et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?Ji:Ts,ot=_.stencil?Gs:zi);const Mt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};p=this.getBinding(),g=p.createProjectionLayer(Mt),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),f=new Jn(g.textureWidth,g.textureHeight,{format:Ti,type:Zn,depthTexture:new Ws(g.textureWidth,g.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const K={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Jn(m.framebufferWidth,m.framebufferHeight,{format:Ti,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function q(B){for(let j=0;j<B.removed.length;j++){const K=B.removed[j],ot=b.indexOf(K);ot>=0&&(b[ot]=null,T[ot].disconnect(K))}for(let j=0;j<B.added.length;j++){const K=B.added[j];let ot=b.indexOf(K);if(ot===-1){for(let Mt=0;Mt<T.length;Mt++)if(Mt>=b.length){b.push(K),ot=Mt;break}else if(b[Mt]===null){b[Mt]=K,ot=Mt;break}if(ot===-1)break}const et=T[ot];et&&et.connect(K)}}function V(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let j=B.near,K=B.far;d.texture!==null&&(d.depthNear>0&&(j=d.depthNear),d.depthFar>0&&(K=d.depthFar)),L.near=w.near=R.near=j,L.far=w.far=R.far=K,(D!==L.near||C!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,C=L.far),L.layers.mask=B.layers.mask|6,R.layers.mask=L.layers.mask&-5,w.layers.mask=L.layers.mask&-3;const ot=B.parent,et=L.cameras;V(L,ot);for(let Mt=0;Mt<et.length;Mt++)V(et[Mt],ot);L.projectionMatrix.copy(R.projectionMatrix),L.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&B.isPerspectiveCamera&&(P={camera:B,fov:B.fov,zoom:B.zoom}),X(B,L,ot)};function X(B,j,K){K===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(K.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ya*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(g===null&&m===null))return c},this.setFoveation=function(B){c=B,g!==null&&(g.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(L)},this.getCameraTexture=function(B){return u[B]};let k=null;function $(B,j){if(h=j.getViewerPose(l||a),x=j,h!==null){const K=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let ot=!1;K.length!==L.cameras.length&&(L.cameras.length=0,ot=!0);for(let Nt=0;Nt<K.length;Nt++){const Jt=K[Nt];let ie=null;if(m!==null)ie=m.getViewport(Jt);else{const pt=p.getViewSubImage(g,Jt);ie=pt.viewport,Nt===0&&(t.setRenderTargetTextures(f,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(f))}let at=A[Nt];at===void 0&&(at=new hi,at.layers.enable(Nt),at.viewport=new tn,A[Nt]=at),at.matrix.fromArray(Jt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Jt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ie.x,ie.y,ie.width,ie.height),Nt===0&&(L.matrix.copy(at.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ot===!0&&L.cameras.push(at)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();const Nt=p.getDepthInformation(K[0]);Nt&&Nt.isValid&&Nt.texture&&d.init(Nt,s.renderState)}if(et&&et.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let Nt=0;Nt<K.length;Nt++){const Jt=K[Nt].camera;if(Jt){let ie=u[Jt];ie||(ie=new bf,u[Jt]=ie);const at=p.getCameraImage(Jt);ie.sourceTexture=at}}}}for(let K=0;K<T.length;K++){const ot=b[K],et=T[K];ot!==null&&et!==void 0&&et.update(ot,j,l||a)}k&&k(B,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}const dt=new Of;dt.setAnimationLoop($),this.setAnimationLoop=function(B){k=B},this.dispose=function(){}}}const P_=new be,qf=new de;qf.set(-1,0,0,0,1,0,0,0,1);function I_(i,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,Lf(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,_,v,f){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(d,u):u.isMeshLambertMaterial?(r(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(d,u),p(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(d,u),g(d,u),u.isMeshPhysicalMaterial&&m(d,u,f)):u.isMeshMatcapMaterial?(r(d,u),x(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),S(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?c(d,u,_,v):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Nn&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Nn&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const _=t.get(u),v=_.envMap,f=_.envMapRotation;v&&(d.envMap.value=v,d.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(f)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(qf),d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,_,v){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*_,d.scale.value=v*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function p(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function g(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,_){d.ior.value=u.ior,u.diffuseRoughness>0&&(d.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=u.diffuseRoughnessMap,e(u.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Nn&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.retroreflectivity>0&&(d.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,u){u.matcap&&(d.matcap.value=u.matcap)}function S(d,u){const _=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(_.matrixWorld),d.nearDistance.value=_.shadow.camera.near,d.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D_(i,t,e,n){let s={},r={};function a(_,v){const f=v.program;n.uniformBlockBinding(_,f,s[_.id])}function o(_,v){let f=s[_.id];f===void 0&&(x(_),f=c(_),s[_.id]=f,_.addEventListener("dispose",d));const T=v.program;n.updateUBOMapping(_,T);const b=t.render.frame;r[_.id]!==b&&(l(_),r[_.id]=b)}function c(_){const v=i.createBuffer(),f=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,f,T),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function l(_){const v=s[_.id],f=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,M=f.length;b<M;b++){const y=f[b];if(Array.isArray(y))for(let P=0,R=y.length;P<R;P++)h(y[P],b,P,T);else h(y,b,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,v,f,T){if(g(_,v,f,T)===!0){const b=_.__offset,M=_.value;if(Array.isArray(M)){let y=0;for(let P=0;P<M.length;P++){const R=M[P],w=S(R,!0);p(R,_.__data,y),y+=w.storage/Float32Array.BYTES_PER_ELEMENT}}else p(M,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function p(_,v,f){typeof _=="number"||typeof _=="boolean"?v[f]=_:_.isMatrix3?(v[f]=_.elements[0],v[f+1]=_.elements[1],v[f+2]=_.elements[2],v[f+3]=0,v[f+4]=_.elements[3],v[f+5]=_.elements[4],v[f+6]=_.elements[5],v[f+7]=0,v[f+8]=_.elements[6],v[f+9]=_.elements[7],v[f+10]=_.elements[8],v[f+11]=0):ArrayBuffer.isView(_)?v.set(_.subarray(0,v.length-f),f):_.toArray(v,f)}function g(_,v,f,T){const b=_.value,M=v+"_"+f;if(Array.isArray(b)){T[M]===void 0&&(T[M]=[]);const y=T[M];let P=!1;for(let R=0;R<b.length;R++)m(b[R],y,R)===!0&&(P=!0);return P}return m(b,T,M)}function m(_,v,f){if(v[f]===void 0)return typeof _=="number"||typeof _=="boolean"?v[f]=_:ArrayBuffer.isView(_)?v[f]=_.slice():v[f]=_.clone(),!0;{const T=v[f];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return v[f]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function x(_){const v=_.uniforms;let f=0;const T=16;for(let M=0,y=v.length;M<y;M++){const P=Array.isArray(v[M])?v[M]:[v[M]];for(let R=0,w=P.length;R<w;R++){const A=P[R],L=Array.isArray(A.value)?A.value:[A.value],D=Array.isArray(v[M])||Array.isArray(A.value);let C=f;for(let O=0,q=L.length;O<q;O++){const V=L[O],X=S(V,D),k=f%T,$=k%X.boundary,dt=k+$;f+=$,dt!==0&&T-dt<X.storage&&(f+=T-dt),O===0&&(C=f),f+=X.storage}const F=A.type==="int"?Int32Array:A.type==="uint"?Uint32Array:Float32Array;A.__data=new F((f-C)/Float32Array.BYTES_PER_ELEMENT),A.__offset=C}}const b=f%T;return b>0&&(f+=T-b),_.__size=f,_.__cache={},this}function S(_,v){const f={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(f.boundary=4,f.storage=4):_.isVector2?(f.boundary=8,f.storage=8):_.isVector3||_.isColor?(f.boundary=16,f.storage=12):_.isVector4?(f.boundary=16,f.storage=16):_.isMatrix3?(f.boundary=16,f.storage=48):_.isMatrix4?(f.boundary=16,f.storage=64):_.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(f.boundary=16,f.storage=_.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",_),v===!0&&(f.boundary=16,f.storage=Math.ceil(f.storage/16)*16),f}function d(_){const v=_.target;v.removeEventListener("dispose",d),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(const _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:u}}const L_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function N_(){return Pi===null&&(Pi=new dl(L_,16,16,Hs,Qn),Pi.name="DFG_LUT",Pi.minFilter=Ln,Pi.magFilter=Ln,Pi.wrapS=ai,Pi.wrapT=ai,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class U_{constructor(t={}){const{canvas:e=cm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1,outputBufferType:m=Zn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const S=m,d=new Set([wh,Th,bh]),u=new Set([Zn,zi,_a,Gs,_h,Sh]),_=new Uint32Array(4),v=new Int32Array(4),f={textures:[],min:[],max:[],resolution:[]};let T=null,b=null;const M=[],y=[];let P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1,A=null,L=null,D=null,C=null;this._outputColorSpace=He;let F=0,O=0,q=null,V=-1,X=null;const k=new tn,$=new tn;let dt=null;const B=new Zt(0);let j=0,K=e.width,ot=e.height,et=1,Mt=null,Xt=null;const Nt=new tn(0,0,K,ot),Jt=new tn(0,0,K,ot);let ie=!1;const at=new ba,pt=new Ch;let mt=!1,lt=!1;const _t=new be,Ct=new U,wt=new tn,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function re(){return q===null?et:1}let G=n;function bt(I,W){return e.getContext(I,W)}let ut,Dt,ct,Gt,ht,Tt,N,E,H,it,Q,xt,gt,J,tt,St,z,ft,st,It,Rt,Pt,jt;try{const I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vh}`),e.addEventListener("webglcontextlost",se,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",kt,!1),G===null){const W="webgl2";if(G=bt(W,I),G===null)throw bt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(I){throw e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),Pe("WebGLRenderer: "+I.message),I}function ce(){ut=new Bv(G),ut.init(),Rt=new w_(G,ut),Dt=new Av(G,ut,t,Rt),ct=new b_(G,ut),Dt.reversedDepthBuffer&&g&&ct.buffers.depth.setReversed(!0),L=G.createFramebuffer(),D=G.createFramebuffer(),C=G.createFramebuffer(),Gt=new Vv(G),ht=new c_,Tt=new T_(G,ut,ct,ht,Dt,Rt,Gt),N=new Fv(R),E=new H0(G),Pt=new wv(G,E),H=new zv(G,E,Gt,Pt),it=new Hv(G,H,E,Pt,Gt),ft=new Gv(G,Dt,Tt),tt=new Rv(ht),Q=new l_(R,N,ut,Dt,Pt,tt),xt=new I_(R,ht),gt=new u_,J=new x_(ut),z=new Tv(R,N,ct,it,x,c),St=new y_(R,it,Dt),jt=new D_(G,Gt,Dt,ct),st=new Ev(G,ut,Gt),It=new kv(G,ut,Gt),Gt.programs=Q.programs,R.capabilities=Dt,R.extensions=ut,R.properties=ht,R.renderLists=gt,R.shadowMap=St,R.state=ct,R.info=Gt}S!==Zn&&(P=new Xv(S,e.width,e.height,o,s,r));const Et=new C_(R,G);this.xr=Et,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const I=ut.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ut.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(I){I!==void 0&&(et=I,this.setSize(K,ot,!1))},this.getSize=function(I){return I.set(K,ot)},this.setSize=function(I,W,nt=!0){if(Et.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}K=I,ot=W,e.width=Math.floor(I*et),e.height=Math.floor(W*et),nt===!0&&(e.style.width=I+"px",e.style.height=W+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(K*et,ot*et).floor()},this.setDrawingBufferSize=function(I,W,nt){K=I,ot=W,et=nt,e.width=Math.floor(I*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,I,W)},this.setEffects=function(I){if(S===Zn){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let W=0;W<I.length;W++)if(I[W].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(k)},this.getViewport=function(I){return I.copy(Nt)},this.setViewport=function(I,W,nt,Y){I.isVector4?Nt.set(I.x,I.y,I.z,I.w):Nt.set(I,W,nt,Y),ct.viewport(k.copy(Nt).multiplyScalar(re()).round())},this.getScissor=function(I){return I.copy(Jt)},this.setScissor=function(I,W,nt,Y){I.isVector4?Jt.set(I.x,I.y,I.z,I.w):Jt.set(I,W,nt,Y),ct.scissor($.copy(Jt).multiplyScalar(re()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(I){ct.setScissorTest(ie=I)},this.setOpaqueSort=function(I){Mt=I},this.setTransparentSort=function(I){Xt=I},this.getClearColor=function(I){return I.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(I=!0,W=!0,nt=!0){let Y=0;if(I){let Z=!1;if(q!==null){const Ut=q.texture.format;Z=d.has(Ut)}if(Z){const Ut=q.texture.type,Yt=u.has(Ut),Lt=z.getClearColor(),zt=z.getClearAlpha(),Qt=Lt.r,oe=Lt.g,ue=Lt.b;Yt?(_[0]=Qt,_[1]=oe,_[2]=ue,_[3]=zt,G.clearBufferuiv(G.COLOR,0,_)):(v[0]=Qt,v[1]=oe,v[2]=ue,v[3]=zt,G.clearBufferiv(G.COLOR,0,v))}else Y|=G.COLOR_BUFFER_BIT}W&&(Y|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),A=I},this.dispose=function(){e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),z.dispose(),gt.dispose(),J.dispose(),Tt.dispose(),ht.dispose(),N.dispose(),it.dispose(),H.dispose(),Pt.dispose(),jt.dispose(),Q.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",kr),Et.removeEventListener("sessionend",Fa),Vi.stop()};function se(I){I.preventDefault(),uu("WebGLRenderer: Context Lost."),w=!0}function he(){uu("WebGLRenderer: Context Restored."),w=!1;const I=Gt.autoReset,W=St.enabled,nt=St.autoUpdate,Y=St.needsUpdate,Z=St.type;ce(),Gt.autoReset=I,St.enabled=W,St.autoUpdate=nt,St.needsUpdate=Y,St.type=Z}function kt(I){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function we(I){const W=I.target;W.removeEventListener("dispose",we),Ze(W)}function Ze(I){mi(I),ht.remove(I)}function mi(I){const W=ht.get(I).programs;W!==void 0&&(W.forEach(function(nt){Q.releaseProgram(nt)}),I.isShaderMaterial&&Q.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,nt,Y,Z,Ut){W===null&&(W=qt);const Yt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Lt=Tn(I,W,nt,Y,Z);ct.setMaterial(Y,Yt);let zt=nt.index,Qt=1;if(Y.wireframe===!0){if(zt=H.getWireframeAttribute(nt),zt===void 0)return;Qt=2}const oe=nt.drawRange,ue=nt.attributes.position;let Kt=oe.start*Qt,pe=(oe.start+oe.count)*Qt;Ut!==null&&(Kt=Math.max(Kt,Ut.start*Qt),pe=Math.min(pe,(Ut.start+Ut.count)*Qt)),zt!==null?(Kt=Math.max(Kt,0),pe=Math.min(pe,zt.count)):ue!=null&&(Kt=Math.max(Kt,0),pe=Math.min(pe,ue.count));const ke=pe-Kt;if(ke<0||ke===1/0)return;Pt.setup(Z,Y,Lt,nt,zt);let Le,De=st;if(zt!==null&&(Le=E.get(zt),De=It,De.setIndex(Le)),Z.isMesh)Y.wireframe===!0?(ct.setLineWidth(Y.wireframeLinewidth*re()),De.setMode(G.LINES)):De.setMode(G.TRIANGLES);else if(Z.isLine){let mn=Y.linewidth;mn===void 0&&(mn=1),ct.setLineWidth(mn*re()),Z.isLineSegments?De.setMode(G.LINES):Z.isLineLoop?De.setMode(G.LINE_LOOP):De.setMode(G.LINE_STRIP)}else Z.isPoints?De.setMode(G.POINTS):Z.isSprite&&De.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))De.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const mn=Z._multiDrawStarts,$t=Z._multiDrawCounts,gn=Z._multiDrawCount,Te=zt?E.get(zt).bytesPerElement:1,Ri=ht.get(Y).currentProgram.getUniforms();for(let nn=0;nn<gn;nn++)Ri.setValue(G,"_gl_DrawID",nn),De.render(mn[nn]/Te,$t[nn])}else if(Z.isInstancedMesh)De.renderInstances(Kt,ke,Z.count);else if(nt.isInstancedBufferGeometry){const mn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,$t=Math.min(nt.instanceCount,mn);De.renderInstances(Kt,ke,$t)}else De.render(Kt,ke)};function zr(I,W,nt,Y){A!==null&&I.isNodeMaterial&&A.setObject(Y,I),mt===!0&&tt.setState(I,nt,!1),I.transparent===!0&&I.side===si&&I.forceSinglePass===!1?(I.side=Nn,I.needsUpdate=!0,ns(I,W,Y),I.side=yi,I.needsUpdate=!0,ns(I,W,Y),I.side=si):ns(I,W,Y)}this.compile=function(I,W,nt=null){nt===null&&(nt=I),A!==null&&A.renderStart(I,W,nt),b=J.get(nt),b.init(W),y.push(b),nt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),I!==nt&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),A!==null&&A.updateLights(b.state.lightsArray),lt=this.localClippingEnabled,mt=tt.init(this.clippingPlanes,lt),mt===!0&&tt.setGlobalState(this.clippingPlanes,W),A!==null&&St.render(b.state.shadowsArray,nt,W);const Y=new Set;return I.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ut=Z.material;if(Ut)if(Array.isArray(Ut))for(let Yt=0;Yt<Ut.length;Yt++){const Lt=Ut[Yt];zr(Lt,nt,W,Z),Y.add(Lt)}else zr(Ut,nt,W,Z),Y.add(Ut)}),b=y.pop(),A!==null&&A.renderEnd(),Y},this.compileAsync=function(I,W,nt=null){const Y=this.compile(I,W,nt);return new Promise(Z=>{function Ut(){if(Y.forEach(function(Yt){const zt=ht.get(Yt).currentProgram;(zt===void 0||zt.isReady())&&Y.delete(Yt)}),Y.size===0){Z(I);return}setTimeout(Ut,10)}ut.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let As=null;function Oa(I){As&&As(I)}function kr(){Vi.stop()}function Fa(){Vi.start()}const Vi=new Of;Vi.setAnimationLoop(Oa),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(I){As=I,Et.setAnimationLoop(I),I===null?Vi.stop():Vi.start()},Et.addEventListener("sessionstart",kr),Et.addEventListener("sessionend",Fa),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A!==null&&A.renderStart(I,W);const nt=Et.enabled===!0&&Et.isPresenting===!0,Y=P!==null&&(q===null||nt)&&P.begin(R,q);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(W),W=Et.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,W,q),b=J.get(I,y.length),b.init(W),b.state.textureUnits=Tt.getTextureUnits(),y.push(b),_t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?pt.setFromArrayCamera(W):at.setFromProjectionMatrix(_t,wi,W.reversedDepth),lt=this.localClippingEnabled,mt=tt.init(this.clippingPlanes,lt),T=gt.get(I,M.length),T.init(),M.push(T),this.info.render.frame++,Et.enabled===!0&&Et.isPresenting===!0){const Yt=R.xr.getDepthSensingMesh();Yt!==null&&Vr(Yt,W,-1/0,R.sortObjects)}Vr(I,W,0,R.sortObjects),T.finish(),A!==null&&A.updateLights(b.state.lightsArray),R.sortObjects===!0&&T.sort(Mt,Xt),ne=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,ne&&z.addToRenderList(T,I),this.info.autoReset===!0&&this.info.reset(),mt===!0&&tt.beginShadows();const Z=b.state.shadowsArray;if(St.render(Z,I,W),mt===!0&&tt.endShadows(),(Y&&P.hasRenderPass())===!1){const Yt=T.opaque,Lt=T.transmissive;if(b.setupLights(),W.isArrayCamera){const zt=W.cameras;if(Lt.length>0)for(let Qt=0,oe=zt.length;Qt<oe;Qt++){const ue=zt[Qt];Gr(Yt,Lt,I,ue)}ne&&z.render(I);for(let Qt=0,oe=zt.length;Qt<oe;Qt++){const ue=zt[Qt];Ba(T,I,ue,ue.viewport)}}else Lt.length>0&&Gr(Yt,Lt,I,W),ne&&z.render(I),Ba(T,I,W)}q!==null&&O===0&&(Tt.updateMultisampleRenderTarget(q),Tt.updateRenderTargetMipmap(q)),Y&&P.end(R),I.isScene===!0&&I.onAfterRender(R,I,W),Pt.resetDefaultState(),V=-1,X=null,y.pop(),y.length>0?(b=y[y.length-1],Tt.setTextureUnits(b.state.textureUnits),mt===!0&&tt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,M.pop(),M.length>0?T=M[M.length-1]:T=null,A!==null&&A.renderEnd()};function Vr(I,W,nt,Y){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)nt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)b.pushLight(I),I.castShadow&&b.pushShadow(I);else if(I.isSprite){const Yt=W.isArrayCamera?pt:at;if(!I.frustumCulled||I.intersectsFrustum(Yt)){Y&&wt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(_t);const Lt=it.update(I),zt=I.material;zt.visible&&T.push(I,Lt,zt,nt,wt.z,null,W)}}else if(I.isMesh||I.isLine||I.isPoints){const Yt=W.isArrayCamera?pt:at;if(!I.frustumCulled||I.intersectsFrustum(Yt)){const Lt=it.update(I),zt=I.material;if(Y&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),wt.copy(I.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),wt.copy(Lt.boundingSphere.center)),wt.applyMatrix4(I.matrixWorld).applyMatrix4(_t)),Array.isArray(zt)){const Qt=Lt.groups;for(let oe=0,ue=Qt.length;oe<ue;oe++){const Kt=Qt[oe],pe=zt[Kt.materialIndex];pe&&pe.visible&&T.push(I,Lt,pe,nt,wt.z,Kt,W)}}else zt.visible&&T.push(I,Lt,zt,nt,wt.z,null,W)}}}const Ut=I.children;for(let Yt=0,Lt=Ut.length;Yt<Lt;Yt++)Vr(Ut[Yt],W,nt,Y)}function Ba(I,W,nt,Y){const{opaque:Z,transmissive:Ut,transparent:Yt}=I;b.setupLightsView(nt),mt===!0&&tt.setGlobalState(R.clippingPlanes,nt),Y&&ct.viewport(k.copy(Y)),Z.length>0&&js(Z,W,nt),Ut.length>0&&js(Ut,W,nt),Yt.length>0&&js(Yt,W,nt),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Gr(I,W,nt,Y){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const Kt=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Jn(1,1,{generateMipmaps:!0,type:Kt?Qn:Zn,minFilter:vs,samples:Math.max(4,Dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}const Ut=b.state.transmissionRenderTarget[Y.id],Yt=Y.viewport||k;Ut.setSize(Yt.z*R.transmissionResolutionScale,Yt.w*R.transmissionResolutionScale);const Lt=R.getRenderTarget(),zt=R.getActiveCubeFace(),Qt=R.getActiveMipmapLevel();R.setRenderTarget(Ut),R.getClearColor(B),j=R.getClearAlpha(),j<1&&R.setClearColor(16777215,.5),R.clear(),ne&&z.render(nt);const oe=R.toneMapping;R.toneMapping=Bi;const ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),mt===!0&&tt.setGlobalState(R.clippingPlanes,Y),js(I,nt,Y),Tt.updateMultisampleRenderTarget(Ut),Tt.updateRenderTargetMipmap(Ut),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let pe=0,ke=W.length;pe<ke;pe++){const Le=W[pe],{object:De,geometry:mn,material:$t,group:gn}=Le;if($t.side===si&&De.layers.test(Y.layers)){const Te=$t.side;$t.side=Nn,$t.needsUpdate=!0,tr(De,nt,Y,mn,$t,gn),$t.side=Te,$t.needsUpdate=!0,Kt=!0}}Kt===!0&&(Tt.updateMultisampleRenderTarget(Ut),Tt.updateRenderTargetMipmap(Ut))}R.setRenderTarget(Lt,zt,Qt),R.setClearColor(B,j),ue!==void 0&&(Y.viewport=ue),R.toneMapping=oe}function js(I,W,nt){const Y=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Ut=I.length;Z<Ut;Z++){const Yt=I[Z],{object:Lt,geometry:zt,group:Qt}=Yt;let oe=Yt.material;oe.allowOverride===!0&&Y!==null&&(oe=Y),Lt.layers.test(nt.layers)&&tr(Lt,W,nt,zt,oe,Qt)}}function tr(I,W,nt,Y,Z,Ut){A!==null&&Z.isNodeMaterial&&A.setObject(I,Z),I.onBeforeRender(R,W,nt,Y,Z,Ut),I.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(R,W,nt,Y,I,Ut),Z.transparent===!0&&Z.side===si&&Z.forceSinglePass===!1?(Z.side=Nn,Z.needsUpdate=!0,R.renderBufferDirect(nt,W,Y,Z,I,Ut),Z.side=yi,Z.needsUpdate=!0,R.renderBufferDirect(nt,W,Y,Z,I,Ut),Z.side=si):R.renderBufferDirect(nt,W,Y,Z,I,Ut),I.onAfterRender(R,W,nt,Y,Z,Ut)}function Rs(I){let W=0;for(const nt of I)nt.texture!==null&&W++;return W}function ns(I,W,nt){W.isScene!==!0&&(W=qt);const Y=ht.get(I),Z=b.state.lights,Ut=b.state.shadowsArray,Yt=Z.state.version,Lt=Q.getParameters(I,Z.state,Ut,W,nt,b.state.lightProbeGridArray),zt=Q.getProgramCacheKey(Lt);let Qt=Y.programs;Y.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?W.environment:null,Y.fog=W.fog;const oe=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;Y.envMap=N.get(I.envMap||Y.environment,oe),Y.envMapRotation=Y.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,Qt===void 0&&(I.addEventListener("dispose",we),Qt=new Map,Y.programs=Qt,Y.programVariants=new Map);let ue=Qt.get(zt);if(ue!==void 0){if(Y.currentProgram===ue&&Y.lightsStateVersion===Yt)return Vn(I,Lt),ue}else Lt.uniforms=Q.getUniforms(I),A!==null&&I.isNodeMaterial&&A.build(I,nt,Lt),I.onBeforeCompile(Lt,R),ue=Q.acquireProgram(Lt,zt),Qt.set(zt,ue),Y.uniforms=Lt.uniforms;const Kt=Y.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Kt.clippingPlanes=tt.uniform),Vn(I,Lt),Y.needsLights=nr(I),Y.lightsStateVersion=Yt,Y.needsLights&&(Kt.ambientLightColor.value=Z.state.ambient,Kt.lightProbe.value=Z.state.probe,Kt.sunLights.value=Z.state.sun,Kt.sunLightShadows.value=Z.state.sunShadow,Kt.directionalLights.value=Z.state.directional,Kt.directionalLightShadows.value=Z.state.directionalShadow,Kt.spotLights.value=Z.state.spot,Kt.spotLightShadows.value=Z.state.spotShadow,Kt.rectAreaLights.value=Z.state.rectArea,Kt.ltc_1.value=Z.state.rectAreaLTC1,Kt.ltc_2.value=Z.state.rectAreaLTC2,Kt.pointLights.value=Z.state.point,Kt.pointLightShadows.value=Z.state.pointShadow,Kt.hemisphereLights.value=Z.state.hemi,Kt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Kt.sunShadowCascade.value=Z.state.sunShadowCascade,Kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Kt.spotLightMatrix.value=Z.state.spotLightMatrix,Kt.spotLightMap.value=Z.state.spotLightMap,Kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.numLightProbeGrids=Rs(b.state.lightProbeGridArray),Y.currentProgram=ue,Y.uniformsList=null,ue}function Cs(I,W,nt,Y,Z){const Ut=ht.get(I),Yt=Ut.currentProgram.id+","+Y+","+Z;let Lt=Ut.programVariants.get(Yt);return Lt===void 0?(Lt=ns(I,W,nt),Ut.programVariants.set(Yt,Lt)):(Ut.currentProgram=Lt,Ut.uniformsList=null,Ut.outputColorSpace=Y,Ut.toneMapping=Z),Lt}function Ps(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=Fo.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function Vn(I,W){const nt=ht.get(I);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function Tn(I,W,nt,Y,Z){W.isScene!==!0&&(W=qt),Tt.resetTextureUnits();const Ut=W.fog,Yt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?W.environment:null,Lt=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ye.workingColorSpace,zt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Qt=N.get(Y.envMap||Yt,zt),oe=Y.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ue=!!nt.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Kt=!!nt.morphAttributes.position,pe=!!nt.morphAttributes.normal,ke=!!nt.morphAttributes.color;let Le=Bi;Y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Le=R.toneMapping);const De=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,mn=De!==void 0?De.length:0,$t=ht.get(Y),gn=b.state.lights;if(mt===!0&&(lt===!0||I!==X)){const Ve=I===X&&Y.id===V;tt.setState(Y,I,Ve)}let Te=!1,Ri=!1;Y.version===$t.__version?$t.needsLights&&$t.lightsStateVersion!==gn.state.version||Z.isBatchedMesh&&$t.batching===!1||!Z.isBatchedMesh&&$t.batching===!0||Z.isBatchedMesh&&$t.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&$t.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&$t.instancing===!1||!Z.isInstancedMesh&&$t.instancing===!0||Z.isSkinnedMesh&&$t.skinning===!1||!Z.isSkinnedMesh&&$t.skinning===!0||Z.isInstancedMesh&&$t.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$t.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&$t.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&$t.instancingMorph===!1&&Z.morphTexture!==null||$t.envMap!==Qt||Y.fog===!0&&$t.fog!==Ut||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==tt.numPlanes||$t.numIntersection!==tt.numIntersection)||$t.vertexAlphas!==oe||$t.vertexTangents!==ue||$t.morphTargets!==Kt||$t.morphNormals!==pe||$t.morphColors!==ke||$t.morphTargetsCount!==mn||$t.numLightProbeGrids!==Rs(b.state.lightProbeGridArray)?Te=!0:($t.outputColorSpace!==Lt||$t.toneMapping!==Le)&&(Ri=!0):(Te=!0,$t.__version=Y.version);let nn=$t.currentProgram;(Te===!0||Ri===!0)&&(nn=Ri===!0?Cs(Y,W,Z,Lt,Le):ns(Y,W,Z),A&&Y.isNodeMaterial&&A.onUpdateProgram(Y,nn,$t));let Is=!1,wn=!1,ti=!1;const Me=nn.getUniforms(),We=$t.uniforms;if(ct.useProgram(nn.program)&&(Is=!0,wn=!0,ti=!0),Y.id!==V&&(V=Y.id,wn=!0),Is||X!==I){ct.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Me.setValue(G,"projectionMatrix",I.projectionMatrix),Me.setValue(G,"viewMatrix",I.matrixWorldInverse);const Xe=Me.map.cameraPosition;Xe!==void 0&&Xe.setValue(G,Ct.setFromMatrixPosition(I.matrixWorld)),Dt.logarithmicDepthBuffer&&Me.setValue(G,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Me.setValue(G,"isOrthographic",I.isOrthographicCamera===!0),X!==I&&(X=I,wn=!0,ti=!0)}if($t.needsLights&&(gn.state.sunShadowMap.length>0&&Me.setValue(G,"sunShadowMap",gn.state.sunShadowMap,Tt),gn.state.directionalShadowMap.length>0&&Me.setValue(G,"directionalShadowMap",gn.state.directionalShadowMap,Tt),gn.state.spotShadowMap.length>0&&Me.setValue(G,"spotShadowMap",gn.state.spotShadowMap,Tt),gn.state.pointShadowMap.length>0&&Me.setValue(G,"pointShadowMap",gn.state.pointShadowMap,Tt)),Z.isSkinnedMesh){Me.setOptional(G,Z,"bindMatrix"),Me.setOptional(G,Z,"bindMatrixInverse");const Ve=Z.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Me.setValue(G,"boneTexture",Ve.boneTexture,Tt))}Z.isBatchedMesh&&(Me.setOptional(G,Z,"batchingTexture"),Me.setValue(G,"batchingTexture",Z._matricesTexture,Tt),Me.setOptional(G,Z,"batchingIdTexture"),Me.setValue(G,"batchingIdTexture",Z._indirectTexture,Tt),Me.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Me.setValue(G,"batchingColorTexture",Z._colorsTexture,Tt));const Fn=nt.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&ft.update(Z,nt,nn),(wn||$t.receiveShadow!==Z.receiveShadow)&&($t.receiveShadow=Z.receiveShadow,Me.setValue(G,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&W.environment!==null&&(We.envMapIntensity.value=W.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=N_()),wn){if(Me.setValue(G,"toneMappingExposure",R.toneMappingExposure),$t.needsLights&&er(We,ti),Ut&&Y.fog===!0&&xt.refreshFogUniforms(We,Ut),xt.refreshMaterialUniforms(We,Y,et,ot,b.state.transmissionRenderTarget[I.id]),$t.needsLights&&$t.numLightProbeGrids>0){const Ve=f;let Xe=0;for(const xn of b.state.lightProbeGridArray)xn.texture!==null&&(Ve.textures[Xe]=xn.texture,Ve.min[Xe]=xn.boundingBox.min,Ve.max[Xe]=xn.boundingBox.max,Ve.resolution[Xe]=xn.resolution,Xe++);for(const xn in Ve)Ve[xn].length=Xe;We.probesSH.value=Ve.textures,We.probesMin.value=Ve.min,We.probesMax.value=Ve.max,We.probesResolution.value=Ve.resolution}Fo.upload(G,Ps($t),We,Tt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fo.upload(G,Ps($t),We,Tt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Me.setValue(G,"center",Z.center),Me.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Me.setValue(G,"normalMatrix",Z.normalMatrix),Me.setValue(G,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const Ve=Y.uniformsGroups;for(let Xe=0,xn=Ve.length;Xe<xn;Xe++){const Hr=Ve[Xe];jt.update(Hr,nn),jt.bind(Hr,nn)}}return nn}function er(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.sunLights.needsUpdate=W,I.sunLightShadows.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function nr(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(I,W,nt){const Y=ht.get(I);Y.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ht.get(I.texture).__webglTexture=W,ht.get(I.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:nt,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,W){const nt=ht.get(I);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,nt=0){q=I,F=W,O=nt;let Y=null,Z=!1,Ut=!1;if(I){const Lt=ht.get(I);if(Lt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),k.copy(I.viewport),$.copy(I.scissor),dt=I.scissorTest,ct.viewport(k),ct.scissor($),ct.setScissorTest(dt),V=-1;return}else if(Lt.__webglFramebuffer===void 0)Tt.setupRenderTarget(I);else if(Lt.__hasExternalTextures)Tt.rebindTextures(I,ht.get(I.texture).__webglTexture,ht.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const oe=I.depthTexture;if(Lt.__boundDepthTexture!==oe){if(oe!==null&&ht.has(oe)&&(I.width!==oe.image.width||I.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Tt.setupDepthRenderbuffer(I)}}const zt=I.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Ut=!0);const Qt=ht.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?Y=Qt[W][nt]:Y=Qt[W],Z=!0):I.samples>0&&Tt.useMultisampledRTT(I)===!1?Y=ht.get(I).__webglMultisampledFramebuffer:Array.isArray(Qt)?Y=Qt[nt]:Y=Qt,k.copy(I.viewport),$.copy(I.scissor),dt=I.scissorTest}else k.copy(Nt).multiplyScalar(et).floor(),$.copy(Jt).multiplyScalar(et).floor(),dt=ie;if(nt!==0&&(Y=L),ct.bindFramebuffer(G.FRAMEBUFFER,Y)&&ct.drawBuffers(I,Y),ct.viewport(k),ct.scissor($),ct.setScissorTest(dt),Z){const Lt=ht.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,nt)}else if(Ut){const Lt=W;for(let zt=0;zt<I.textures.length;zt++){const Qt=ht.get(I.textures[zt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+zt,Qt.__webglTexture,nt,Lt)}}else if(I!==null&&nt!==0){const Lt=ht.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,nt)}V=-1};function On(I){const W=ht.get(I);return(W.__readFormat!==I.format||W.__readType!==I.type)&&(W.__readFormat=I.format,W.__readType=I.type,W.__formatReadable=Dt.textureFormatReadable(I.format),W.__typeReadable=Dt.textureTypeReadable(I.type)),W}this.readRenderTargetPixels=function(I,W,nt,Y,Z,Ut,Yt,Lt=0){if(!(I&&I.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=ht.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Yt!==void 0&&(zt=zt[Yt],Array.isArray(zt)&&(zt=zt[0])),zt){ct.bindFramebuffer(G.FRAMEBUFFER,zt);try{const Qt=I.textures[Lt],oe=Qt.format,ue=Qt.type;I.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt);const Kt=On(Qt);if(Kt.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-Y&&nt>=0&&nt<=I.height-Z&&G.readPixels(W,nt,Y,Z,Rt.convert(oe),Rt.convert(ue),Ut)}finally{const Qt=q!==null?ht.get(q).__webglFramebuffer:null;ct.bindFramebuffer(G.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(I,W,nt,Y,Z,Ut,Yt,Lt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=ht.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Yt!==void 0&&(zt=zt[Yt],Array.isArray(zt)&&(zt=zt[0])),zt)if(W>=0&&W<=I.width-Y&&nt>=0&&nt<=I.height-Z){ct.bindFramebuffer(G.FRAMEBUFFER,zt);const Qt=I.textures[Lt],oe=Qt.format,ue=Qt.type;I.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt);const Kt=On(Qt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,pe),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),G.readPixels(W,nt,Y,Z,Rt.convert(oe),Rt.convert(ue),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const ke=q!==null?ht.get(q).__webglFramebuffer:null;ct.bindFramebuffer(G.FRAMEBUFFER,ke);const Le=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await hm(G,Le,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,pe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(pe),G.deleteSync(Le),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,W=null,nt=0){const Y=Math.pow(2,-nt),Z=Math.floor(I.image.width*Y),Ut=Math.floor(I.image.height*Y),Yt=W!==null?W.x:0,Lt=W!==null?W.y:0;Tt.setTexture2D(I,0),G.copyTexSubImage2D(G.TEXTURE_2D,nt,0,0,Yt,Lt,Z,Ut),ct.unbindTexture()},this.copyTextureToTexture=function(I,W,nt=null,Y=null,Z=0,Ut=0){let Yt,Lt,zt,Qt,oe,ue,Kt,pe,ke;const Le=I.isCompressedTexture?I.mipmaps[Ut]:I.image;if(nt!==null)Yt=nt.max.x-nt.min.x,Lt=nt.max.y-nt.min.y,zt=nt.isBox3?nt.max.z-nt.min.z:1,Qt=nt.min.x,oe=nt.min.y,ue=nt.isBox3?nt.min.z:0;else{const Me=Math.pow(2,-Z);Yt=Math.floor(Le.width*Me),Lt=Math.floor(Le.height*Me),I.isDataArrayTexture?zt=Le.depth:I.isData3DTexture?zt=Math.floor(Le.depth*Me):zt=1,Qt=0,oe=0,ue=0}Y!==null?(Kt=Y.x,pe=Y.y,ke=Y.z):(Kt=0,pe=0,ke=0);const De=Rt.convert(W.format),mn=Rt.convert(W.type);let $t;W.isData3DTexture?(Tt.setTexture3D(W,0),$t=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Tt.setTexture2DArray(W,0),$t=G.TEXTURE_2D_ARRAY):(Tt.setTexture2D(W,0),$t=G.TEXTURE_2D),ct.activeTexture(G.TEXTURE0),ct.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),ct.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),ct.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const gn=ct.getParameter(G.UNPACK_ROW_LENGTH),Te=ct.getParameter(G.UNPACK_IMAGE_HEIGHT),Ri=ct.getParameter(G.UNPACK_SKIP_PIXELS),nn=ct.getParameter(G.UNPACK_SKIP_ROWS),Is=ct.getParameter(G.UNPACK_SKIP_IMAGES);ct.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),ct.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),ct.pixelStorei(G.UNPACK_SKIP_PIXELS,Qt),ct.pixelStorei(G.UNPACK_SKIP_ROWS,oe),ct.pixelStorei(G.UNPACK_SKIP_IMAGES,ue);const wn=I.isDataArrayTexture||I.isData3DTexture,ti=W.isDataArrayTexture||W.isData3DTexture;if(I.isDepthTexture){const Me=ht.get(I),We=ht.get(W),Fn=ht.get(Me.__renderTarget),Ve=ht.get(We.__renderTarget);ct.bindFramebuffer(G.READ_FRAMEBUFFER,Fn.__webglFramebuffer),ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Xe=0;Xe<zt;Xe++)wn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ht.get(I).__webglTexture,Z,ue+Xe),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ht.get(W).__webglTexture,Ut,ke+Xe)),G.blitFramebuffer(Qt,oe,Qt+Yt,oe+Lt,Kt,pe,Kt+Yt,pe+Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);ct.bindFramebuffer(G.READ_FRAMEBUFFER,null),ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||I.isRenderTargetTexture||ht.has(I)){const Me=ht.get(I),We=ht.get(W);ct.bindFramebuffer(G.READ_FRAMEBUFFER,D),ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,C);for(let Fn=0;Fn<zt;Fn++)wn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Me.__webglTexture,Z,ue+Fn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Me.__webglTexture,Z),ti?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.__webglTexture,Ut,ke+Fn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,We.__webglTexture,Ut),Z!==0?G.blitFramebuffer(Qt,oe,Qt+Yt,oe+Lt,Kt,pe,Kt+Yt,pe+Lt,G.COLOR_BUFFER_BIT,G.NEAREST):ti?G.copyTexSubImage3D($t,Ut,Kt,pe,ke+Fn,Qt,oe,Yt,Lt):G.copyTexSubImage2D($t,Ut,Kt,pe,Qt,oe,Yt,Lt);ct.bindFramebuffer(G.READ_FRAMEBUFFER,null),ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else ti?I.isDataTexture||I.isData3DTexture?G.texSubImage3D($t,Ut,Kt,pe,ke,Yt,Lt,zt,De,mn,Le.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D($t,Ut,Kt,pe,ke,Yt,Lt,zt,De,Le.data):G.texSubImage3D($t,Ut,Kt,pe,ke,Yt,Lt,zt,De,mn,Le):I.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,Kt,pe,Yt,Lt,De,mn,Le.data):I.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,Kt,pe,Le.width,Le.height,De,Le.data):G.texSubImage2D(G.TEXTURE_2D,Ut,Kt,pe,Yt,Lt,De,mn,Le);ct.pixelStorei(G.UNPACK_ROW_LENGTH,gn),ct.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Te),ct.pixelStorei(G.UNPACK_SKIP_PIXELS,Ri),ct.pixelStorei(G.UNPACK_SKIP_ROWS,nn),ct.pixelStorei(G.UNPACK_SKIP_IMAGES,Is),Ut===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&G.generateMipmap($t),ct.unbindTexture()},this.initRenderTarget=function(I){ht.get(I).__webglFramebuffer===void 0&&Tt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Tt.setTextureCube(I,0):I.isData3DTexture?Tt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Tt.setTexture2DArray(I,0):Tt.setTexture2D(I,0),ct.unbindTexture()},this.resetState=function(){F=0,O=0,q=null,ct.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}}const ch=.525,xl=.635,ks=.842,_e=.87,In=1,ri=.056,Ke=_e+ri,ln=xl+ri,Qe=1.024,bn=.026,Ms=.092,Rn=Math.PI/180,Wn=[{phiStart:0*Rn,phiEnd:19*Rn,count:1},{phiStart:19*Rn,phiEnd:40*Rn,count:8},{phiStart:40*Rn,phiEnd:65*Rn,count:16},{phiStart:65*Rn,phiEnd:90*Rn,count:16},{phiStart:90*Rn,phiEnd:115*Rn,count:16},{phiStart:115*Rn,phiEnd:140*Rn,count:16},{phiStart:140*Rn,phiEnd:161*Rn,count:8},{phiStart:161*Rn,phiEnd:180*Rn,count:1}];function Ie(i,t,e=new U){const n=Math.sin(i);return e.set(n*Math.cos(t),Math.cos(i),n*Math.sin(t))}function hh(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Yf(i,t,e){const n=i.raisedWalls.slice(0,e);for(const s of i.toggles)if((t&1<<s.id)!==0)for(const r of s.wallIds)n[r]=!n[r];return n}function Zf(i,t,e){const n=i.openShutters.slice(0,e);for(const s of i.toggles)if((t&1<<s.id)!==0)for(const r of s.shutterIds)n[r]=!n[r];return n}function xr(i,t,e){const n=Wn[t],s=(e%n.count+n.count)%n.count;return i.find(r=>r.band===t&&r.col===s)}function O_(i,t,e){const n=new Uint8Array(i),s=[0];n[0]=1;let r=1;for(let a=0;a<s.length;a++){const o=s[a];for(const c of t[o]){if(e[c.id])continue;const l=c.cellA===o?c.cellB:c.cellA;n[l]||(n[l]=1,r++,s.push(l))}}return r===i}function gd(i,t,e,n,s,r,a){const o=i.checkpoints.length,c=1<<i.toggles.length,l=new Int8Array(t.length).fill(-1);for(const _ of i.toggles)l[_.cellId]=_.id;const h=[],p=[];for(let _=0;_<c;_++){const v=i.raisedWalls.slice(),f=i.openShutters.slice();for(const T of i.toggles)if((_&1<<T.id)!==0){for(const b of T.wallIds)e[b].locked||(v[b]=!v[b]);for(const b of T.shutterIds)f[b]=!f[b]}h.push(v),p.push(f)}const g=Math.max(t.length,r.length),m=(_,v,f,T)=>((T*c+f)*2+_)*g+v,x=new Set,S=m(0,i.startCellId,0,0);x.add(S);const d=[{layer:0,loc:i.startCellId,mask:0,cp:0,steps:0,portals:0,flips:0}],u=(_,v,f)=>{let T=f;for(;T<o;){const b=i.checkpoints[T];if(_===0&&b.layer==="upper"&&b.cellId===v)T++;else if(_===1&&b.layer==="pipe"&&b.pipeNodeId===v)T++;else break}return T};for(let _=0;_<d.length;_++){const v=d[_];if(v.cp>=o)return{solvable:!0,minSteps:v.steps,portalTransitions:v.portals,toggleFlips:v.flips};const f=(T,b,M,y,P)=>{const R=u(T,b,v.cp),w=m(T,b,M,R);x.has(w)||(x.add(w),d.push({layer:T,loc:b,mask:M,cp:R,steps:v.steps+1,portals:y,flips:P}))};if(v.layer===0){const T=h[v.mask];for(const M of n[v.loc]){if(T[M.id])continue;const y=M.cellA===v.loc?M.cellB:M.cellA,P=l[y];P>=0&&f(0,y,v.mask^1<<P,v.portals,v.flips+1),f(0,y,v.mask,v.portals,v.flips)}const b=t[v.loc].shutterId;b>=0&&p[v.mask][b]&&f(1,s[b].pipeNodeId,v.mask,v.portals+1,v.flips)}else{const T=r[v.loc];for(const b of T.edgeIds){const M=a[b],y=M.nodeA===v.loc?M.nodeB:M.nodeA;f(1,y,v.mask,v.portals,v.flips)}T.shutterId>=0&&p[v.mask][T.shutterId]&&f(0,s[T.shutterId].cellId,v.mask,v.portals+1,v.flips)}}return{solvable:!1,minSteps:-1,portalTransitions:0,toggleFlips:0}}function $f(i,t,e,n){const s=new Int32Array(t.length).fill(-1),r=new Int32Array(t.length).fill(-1),a=[i];s[i]=0;for(let o=0;o<a.length;o++){const c=a[o];for(const l of e[c]){if(n[l.id])continue;const h=l.cellA===c?l.cellB:l.cellA;s[h]===-1&&(s[h]=s[c]+1,r[h]=c,a.push(h))}}return{dist:s,parent:r}}function F_(i,t,e,n,s,r,a){const o=hh(i),c=r.map(()=>!0),l=g=>{if(!n)return!1;const m=s[g.cellA].band,x=s[g.cellB].band;return m===3&&x===4||m===4&&x===3},h=new Uint8Array(s.length),p=g=>{const m=[g];for(h[g]=1;m.length>0;){const x=m[m.length-1],S=a[x].filter(_=>{if(_.locked||l(_))return!1;const v=_.cellA===x?_.cellB:_.cellA;return!h[v]});if(S.length===0){m.pop();continue}const d=S.map(_=>{const v=_.cellA===x?_.cellB:_.cellA;let f=o();return _.kind==="lon"&&(f+=t),s[v].band===Wn.length-1&&(f-=.45),{w:_,v,weight:f}});d.sort((_,v)=>v.weight-_.weight);const u=d[0];c[u.w.id]=!1,h[u.v]=1,m.push(u.v)}};if(p(0),n&&p(s.length-1),e>0){const g=r.filter(x=>c[x.id]&&!x.locked&&!l(x));for(let x=g.length-1;x>0;x--){const S=Math.floor(o()*(x+1));[g[x],g[S]]=[g[S],g[x]]}const m=Math.floor(g.length*e);for(let x=0;x<m;x++)c[g[x].id]=!1}return c}function xd(i,t,e,n,s,r=!0){const{dist:a,parent:o}=$f(i,e,n,s);if(a[t]<=0)return null;const c=[];let l=t;for(;l!==-1;)c.push(l),l=o[l];c.reverse();const h=[];for(let p=0;p<c.length-1;p++)h.push(p);r&&h.reverse();for(const p of h){const g=c[p],m=c[p+1],x=n[g].find(S=>!S.locked&&(S.cellA===g&&S.cellB===m||S.cellA===m&&S.cellB===g));if(x)return x}return null}function B_(){const i=[],t=[];for(let w=0;w<Wn.length;w++){t.push(i.length);const A=Wn[w],L=Math.PI*2/A.count;for(let D=0;D<A.count;D++){const C=D*L,F=(D+1)*L,O=w===0?1e-4:w===Wn.length-1?Math.PI-1e-4:.5*(A.phiStart+A.phiEnd),q=A.count===1?0:.5*(C+F);i.push({id:i.length,band:w,col:D,phiMin:A.phiStart,phiMax:A.phiEnd,thetaMin:C,thetaMax:F,centerPhi:O,centerTheta:q,centerDir:Ie(O,q),panelKind:"solid",shutterId:-1})}}const e=[{band:2,col:3,label:"A"},{band:4,col:2,label:"B"},{band:3,col:6,label:"C"},{band:5,col:7,label:"D"},{band:2,col:11,label:"E"},{band:4,col:13,label:"F"}],n=[],s=[];for(let w=0;w<e.length;w++){const A=e[w],L=xr(i,A.band,A.col);L.panelKind="shutter",L.shutterId=w;const D=s.length;s.push({id:D,dir:L.centerDir.clone(),shutterId:w,edgeIds:[]}),n.push({id:w,cellId:L.id,label:A.label,phi:L.centerPhi,theta:L.centerTheta,dir:L.centerDir.clone(),pipeNodeId:D})}const r=[{band:3,col:3},{band:4,col:8},{band:3,col:13}],a=[];for(const w of r){const A=xr(i,w.band,w.col),L=s.length;s.push({id:L,dir:A.centerDir.clone(),shutterId:-1,edgeIds:[]}),a.push(L)}const o=[[0,6],[1,6],[2,6],[2,7],[3,7],[4,7],[4,8],[5,8],[1,8],[6,8]],c=[];for(const[w,A]of o){const L=Math.max(-1,Math.min(1,s[w].dir.dot(s[A].dir))),D=Math.acos(L),C=c.length;c.push({id:C,nodeA:w,nodeB:A,arcLen:D}),s[w].edgeIds.push(C),s[A].edgeIds.push(C)}const l=new U;for(const w of c){const A=s[w.nodeA].dir,L=s[w.nodeB].dir;for(let D=0;D<=10;D++){l.copy(A).lerp(L,D/10).normalize();let C=null,F=-2;for(const O of i){if(O.band<=1||O.band>=Wn.length-2)continue;const q=O.centerDir.dot(l);q>F&&(F=q,C=O)}C&&C.panelKind==="solid"&&(C.panelKind="window")}}const h=[],p=new Map,g=(w,A)=>{const L=(A%(Math.PI*2)+Math.PI*2)%(Math.PI*2),D=Math.round(L*1e3)%Math.round(Math.PI*2*1e3),C=`${Math.round(w*1e3)}_${D}`,F=p.get(C);if(F!==void 0)return F;const O=h.length;return h.push({id:O,phi:w,theta:L,dir:Ie(w,L),wallIds:[],locked:!1}),p.set(C,O),O},m=[],x=(w,A,L,D,C,F,O)=>{const q=m.length,V=g(D,F),X=g(C,O);m.push({id:q,kind:w,cellA:A,cellB:L,phiStart:D,phiEnd:C,thetaStart:F,thetaEnd:O,midDir:Ie(.5*(D+C),.5*(F+O)),locked:!1,hasArrow:!1,postA:V,postB:X}),h[V].wallIds.push(q),h[X].wallIds.push(q)};for(let w=0;w<Wn.length;w++){const A=Wn[w];if(A.count<=1)continue;const L=t[w],D=Math.PI*2/A.count;for(let C=0;C<A.count;C++){const F=(C+1)%A.count;x("lon",L+C,L+F,A.phiStart,A.phiEnd,(C+1)*D,(C+1)*D)}}for(let w=0;w<Wn.length-1;w++){const A=Wn[w],L=Wn[w+1],D=t[w],C=t[w+1],F=A.phiEnd,O=Math.max(A.count,L.count),q=Math.PI*2/O;for(let V=0;V<O;V++){const X=Math.floor(V*A.count/O),k=Math.floor(V*L.count/O);x("lat",D+X,C+k,F,F,V*q,(V+1)*q)}}const S=Array.from({length:i.length},()=>[]);for(const w of m)S[w.cellA].push(w),S[w.cellB].push(w);const d=m.map(()=>!1),u=hh(1309),_=m.filter(w=>w.kind==="lat"&&i[w.cellA].band>=1&&i[w.cellB].band<=6).sort(()=>u()-.5),v=m.find(w=>w.kind==="lat"&&w.cellA===0&&w.thetaStart>=.7&&w.thetaStart<=1.7);let f=0;v&&(d[v.id]=!0,v.locked=!0,h[v.postA].locked=!0,h[v.postB].locked=!0,f++);for(const w of _){if(f>=18)break;w.locked||i[w.cellA].band===3&&i[w.cellB].band===4||m.some(L=>L.locked&&L.midDir.dot(w.midDir)>.76)||(d[w.id]=!0,O_(i.length,S,d)?(w.locked=!0,h[w.postA].locked=!0,h[w.postB].locked=!0,f++):d[w.id]=!1)}const T=hh(4419),b=m.filter(w=>!w.locked&&w.kind==="lat").sort(()=>T()-.5);let M=0;for(const w of b){if(M>=14)break;m.some(L=>L.hasArrow&&L.midDir.dot(w.midDir)>.65)||(w.hasArrow=!0,M++)}const y=(w,A,L)=>{const D=Wn[w];for(let C=0;C<D.count;C++)for(const F of C===0?[0]:[1,-1]){const O=xr(i,w,A+F*C);if(O.panelKind==="solid"&&!L.has(O.id))return O}for(const C of i)if(C.panelKind==="solid"&&!L.has(C.id)&&C.id!==0&&C.id!==i.length-1)return C;return xr(i,w,A)},R=[{level:1,name:"FIRST ROLL",nameJa:"初転",difficulty:"EASY · TURN",seed:1019,lonBias:.28,extraOpen:.36,splitEquator:!1,openShutters:[!1,!1,!1,!1,!1,!1],cpSpecs:[{band:2,col:7},{band:5,col:10},{band:7,col:0,isFinish:!0}],toggleSpecs:[]},{level:2,name:"IRIS PORTAL",nameJa:"虹彩門",difficulty:"EASY · PORTAL",seed:2029,lonBias:.32,extraOpen:.3,splitEquator:!0,openShutters:[!0,!0,!1,!1,!1,!1],cpSpecs:[{band:2,col:4},{pipeHub:0},{band:7,col:0,isFinish:!0}],toggleSpecs:[]},{level:3,name:"FIRST SWITCH",nameJa:"初切換",difficulty:"PLAN · SWITCH",seed:3041,lonBias:.26,extraOpen:.22,splitEquator:!0,openShutters:[!1,!1,!1,!1,!1,!1],cpSpecs:[{band:2,col:6},{band:5,col:4},{band:7,col:0,isFinish:!0}],toggleSpecs:[{colorId:0,label:"A",padBand:2,padCol:1,equatorGateCol:4,closeCounterToCpIndex:0}]},{level:4,name:"UNDERPASS",nameJa:"地下道",difficulty:"PLAN · SPLIT",seed:4057,lonBias:.32,extraOpen:.18,splitEquator:!0,openShutters:[!0,!0,!0,!1,!1,!1],cpSpecs:[{band:2,col:8},{pipeHub:0},{band:5,col:11},{band:7,col:0,isFinish:!0}],toggleSpecs:[]},{level:5,name:"SHUTTER LOCK",nameJa:"閉門鍵",difficulty:"PLAN · IRIS",seed:5077,lonBias:.36,extraOpen:.08,splitEquator:!0,openShutters:[!0,!1,!1,!1,!1,!1],cpSpecs:[{band:2,col:11},{pipeHub:0},{band:5,col:9},{band:7,col:0,isFinish:!0}],toggleSpecs:[{colorId:0,label:"A",padBand:2,padCol:8,shutterIds:[1],closeCounterToCpIndex:0}]},{level:6,name:"COUNTERWEIGHT",nameJa:"均衡",difficulty:"TRICKY",seed:6089,lonBias:.4,extraOpen:0,splitEquator:!1,openShutters:[!0,!1,!0,!0,!1,!1],cpSpecs:[{band:2,col:14},{band:5,col:5},{pipeHub:1},{band:6,col:2},{band:7,col:0,isFinish:!0}],toggleSpecs:[{colorId:0,label:"A",padBand:2,padCol:9,gateToCpIndex:1,closeCounterToCpIndex:0,shutterIds:[1,2]}]},{level:7,name:"DUAL CIRCUIT",nameJa:"二重回路",difficulty:"HARD",seed:7109,lonBias:.48,extraOpen:0,splitEquator:!0,openShutters:[!0,!1,!0,!1,!1,!1],cpSpecs:[{band:2,col:10},{pipeHub:0},{band:5,col:1},{band:5,col:12},{band:7,col:0,isFinish:!0}],toggleSpecs:[{colorId:0,label:"A",padBand:2,padCol:8,shutterIds:[1],closeCounterToCpIndex:0},{colorId:1,label:"B",padBand:5,padCol:4,gateToCpIndex:3,shutterIds:[5]}]},{level:8,name:"WINDING VAULT",nameJa:"迷廊",difficulty:"HARD",seed:8123,lonBias:.52,extraOpen:0,splitEquator:!0,openShutters:[!0,!1,!1,!1,!1,!1],cpSpecs:[{band:2,col:1},{pipeHub:2},{band:5,col:10},{band:1,col:5},{band:7,col:0,isFinish:!0}],toggleSpecs:[{colorId:0,label:"A",padBand:2,padCol:8,equatorGateCol:10,shutterIds:[1,3]},{colorId:1,label:"B",padBand:6,padCol:6,gateToCpIndex:4,shutterIds:[2]}]},{level:9,name:"PARADOX",nameJa:"逆説",difficulty:"VERY HARD",seed:9137,lonBias:.48,extraOpen:0,splitEquator:!0,openShutters:[!0,!1,!1,!1,!1,!1],cpSpecs:[{band:2,col:14},{pipeHub:1},{band:5,col:9},{band:1,col:1},{pipeHub:2},{band:7,col:0,isFinish:!0}],toggleSpecs:[{colorId:0,label:"A",padBand:2,padCol:5,shutterIds:[1,4],equatorGateCol:1},{colorId:1,label:"B",padBand:5,padCol:14,gateToCpIndex:5,shutterIds:[2,5]}]},{level:10,name:"MASTER SPHERE",nameJa:"極球",difficulty:"SUPER HARD",seed:10177,lonBias:.56,extraOpen:0,splitEquator:!0,openShutters:[!1,!1,!0,!1,!1,!1],cpSpecs:[{band:2,col:10},{pipeHub:0},{band:5,col:11},{pipeHub:2},{band:2,col:1},{band:7,col:0,isFinish:!0}],toggleSpecs:[{colorId:0,label:"A",padBand:3,padCol:8,shutterIds:[0,1],gateToCpIndex:4,closeCounterToCpIndex:0},{colorId:1,label:"B",padBand:6,padCol:4,gateToCpIndex:5,closeCounterToCpIndex:2,shutterIds:[4,5]}]}].map(w=>{const A=F_(w.seed,w.lonBias,w.extraOpen,w.splitEquator,i,m,S),L=w.openShutters.slice(),D=new Set([0]),C=[];for(let X=0;X<w.cpSpecs.length;X++){const k=w.cpSpecs[X];if("pipeHub"in k){const $=s[a[k.pipeHub]];C.push({index:X,cellId:-1,pipeNodeId:$.id,layer:"pipe",label:`U${X+1}`,dir:$.dir.clone(),isFinish:!1})}else{const $=!!k.isFinish,dt=$?i[i.length-1]:y(k.band,k.col,D);D.add(dt.id),C.push({index:X,cellId:dt.id,pipeNodeId:-1,layer:"upper",label:$?"13":String(X+1).padStart(2,"0"),dir:dt.centerDir.clone(),isFinish:$})}}const F=[],O=new Set;for(let X=0;X<w.toggleSpecs.length;X++){const k=w.toggleSpecs[X],$=y(k.padBand,k.padCol,D);D.add($.id);const dt=[];if(k.gateToCpIndex!==void 0&&C[k.gateToCpIndex]?.layer==="upper"){const B=C[k.gateToCpIndex].cellId,j=i[B].band>=4&&w.splitEquator?i.length-1:0,K=xd(B===i.length-1?$.id:j,B,i,S,A,!0);if(K&&!O.has(K.id)){A[K.id]=!0;const ot=$f(j,i,S,A);j===0&&ot.dist[$.id]===-1?A[K.id]=!1:(O.add(K.id),dt.push(K.id))}}if(k.closeCounterToCpIndex!==void 0&&C[k.closeCounterToCpIndex]?.layer==="upper"){const B=C[k.closeCounterToCpIndex].cellId,j=i[B].band>=4&&w.splitEquator?i.length-1:0,K=xd(j,B,i,S,A,!0);K&&!O.has(K.id)&&!A[K.id]&&(O.add(K.id),dt.push(K.id))}if(k.equatorGateCol!==void 0){const B=xr(i,3,k.equatorGateCol),j=xr(i,4,k.equatorGateCol),K=S[B.id].find(ot=>!ot.locked&&(ot.cellA===B.id&&ot.cellB===j.id||ot.cellA===j.id&&ot.cellB===B.id));K&&!O.has(K.id)&&(A[K.id]=!0,O.add(K.id),dt.push(K.id))}F.push({id:X,colorId:k.colorId,label:k.label,cellId:$.id,dir:$.centerDir.clone(),wallIds:dt,shutterIds:k.shutterIds?k.shutterIds.slice():[]})}const q={level:w.level,name:w.name,nameJa:w.nameJa,difficulty:w.difficulty,seed:w.seed,raisedWalls:A,openShutters:L,toggles:F,startCellId:0,checkpoints:C};let V=gd(q,i,m,S,n,s,c);if(!V.solvable){for(const X of F)X.wallIds=X.wallIds.filter(k=>A[k]);V=gd(q,i,m,S,n,s,c)}return{...q,stats:V}});return{cells:i,walls:m,posts:h,shutters:n,pipeNodes:s,pipeEdges:c,levels:R}}const $e=-1.18,z_=[16735400,16742327,16729244,16747460],k_=[14224248,15073406,13041774,15733644];function V_(i){const t=i==="pink"?z_:k_;return t[Math.floor(Math.random()*t.length)]}function G_(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(26, 23, 18, 0.62)"),n.addColorStop(.36,"rgba(32, 29, 24, 0.34)"),n.addColorStop(.7,"rgba(40, 37, 32, 0.10)"),n.addColorStop(1,"rgba(48, 45, 40, 0.0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const s=new en(t);return s.colorSpace=He,s}function H_(i){const t=new Ai(2,2),e=new k0;e.index=t.index,e.attributes.position=t.attributes.position,e.attributes.uv=t.attributes.uv,t.dispose();const n=new Float32Array(i*3),s=new Float32Array(i*3),r=new Float32Array(i*4),a=new ha(n,3),o=new ha(s,3),c=new ha(r,4);a.setUsage(Oo),o.setUsage(Oo),c.setUsage(Oo),e.setAttribute("aCenter",a),e.setAttribute("aColor",o),e.setAttribute("aParams",c),e.instanceCount=0;const l=new kn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{uTime:{value:0},uLightDir:{value:new U(-.52,.72,.46).normalize()}},vertexShader:`
      attribute vec3 aCenter;
      attribute vec3 aColor;
      attribute vec4 aParams;

      varying vec2 vUv;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vSeed;
      varying vec3 vCamRight;
      varying vec3 vCamUp;
      varying vec3 vCamFwd;

      void main() {
        float radius = aParams.x;
        float alpha = aParams.y;
        float rot = aParams.z;
        float seed = aParams.w;

        vUv = uv;
        vColor = aColor;
        vAlpha = alpha;
        vSeed = seed;

        // Camera-aligned billboard basis in world space
        vec3 camRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
        vec3 camUp = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        vec3 camFwd = -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
        vCamRight = camRight;
        vCamUp = camUp;
        vCamFwd = camFwd;

        float c = cos(rot);
        float s = sin(rot);
        vec2 p = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * radius;

        vec3 worldPos = aCenter + camRight * p.x + camUp * p.y;
        gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uLightDir;

      varying vec2 vUv;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vSeed;
      varying vec3 vCamRight;
      varying vec3 vCamUp;
      varying vec3 vCamFwd;

      float hash21(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }

      float vnoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        float a = hash21(i);
        float b = hash21(i + vec2(1.0, 0.0));
        float c = hash21(i + vec2(0.0, 1.0));
        float d = hash21(i + vec2(1.0, 1.0));
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      float fbm(vec2 p) {
        float val = 0.0;
        float amp = 0.52;
        mat2 m = mat2(0.8, 0.6, -0.6, 0.8);
        for (int i = 0; i < 4; i++) {
          val += amp * vnoise(p);
          p = m * p * 2.04 + vec2(1.7, 9.2);
          amp *= 0.5;
        }
        return val;
      }

      void main() {
        vec2 q = vUv * 2.0 - 1.0;
        float r2 = dot(q, q);
        if (r2 > 1.0) discard;

        // Slowly boiling turbulent FBM warp for organic billowing smoke cauliflower edges
        vec2 seedOff = vec2(vSeed * 13.7, vSeed * 29.3);
        float drift = uTime * 0.24;
        vec2 warp = vec2(
          fbm(q * 1.9 + seedOff + vec2(0.0, -drift)),
          fbm(q * 1.9 + seedOff + vec2(5.2, 1.3 - drift * 0.8))
        ) - 0.5;

        vec2 p = q + warp * 0.42;
        float n = fbm(p * 2.35 + seedOff + vec2(0.0, -drift * 1.15));
        float nDetail = fbm(p * 4.4 + seedOff + vec2(2.1, -drift * 1.5));

        // Sculpted volumetric radial falloff carved by multi-octave noise (billowy cauliflower cloud silhouettes)
        float radial = 1.0 - smoothstep(0.18, 0.94, length(q) + (n - 0.48) * 0.52);
        float density = clamp(radial * (0.68 + 0.62 * n + 0.28 * nDetail), 0.0, 1.0);
        density = smoothstep(0.10, 0.80, density);
        if (density < 0.01) discard;

        // Pseudo-3D spherical normal perturbed by FBM billows for authentic studio volumetric shading!
        float nz = sqrt(max(0.02, 1.0 - min(0.98, r2)));
        float nx = q.x + (n - 0.5) * 1.15 + (nDetail - 0.5) * 0.55;
        float ny = q.y + (n - 0.5) * 1.15 - (nDetail - 0.5) * 0.42;
        vec3 worldN = normalize(vCamRight * nx + vCamUp * ny - vCamFwd * nz);

        float ndl = dot(worldN, uLightDir) * 0.5 + 0.5;
        // Self-shadowed billowing depth: luminous sunlit top-left ridge, rich saturated core & shaded underside
        vec3 deepCol = vColor * vec3(0.48, 0.42, 0.54);
        vec3 litCol = mix(vColor, vec3(1.0, 0.99, 0.98), 0.36);
        vec3 col = mix(deepCol, vColor, smoothstep(0.14, 0.58, ndl));
        col = mix(col, litCol, smoothstep(0.55, 0.94, ndl) * 0.72);

        // Soft translucent silver-lining scatter along thin wispy outer fringes
        float rimScatter = smoothstep(0.08, 0.42, density) * (1.0 - smoothstep(0.42, 0.9, density));
        col = mix(col, litCol, rimScatter * 0.34);

        float outAlpha = clamp(density * vAlpha, 0.0, 0.92);
        gl_FragColor = vec4(col, outAlpha);
      }
    `}),h=new Wt(e,l);return h.frustumCulled=!1,h.renderOrder=12,{mesh:h,centerAttr:a,colorAttr:o,paramsAttr:c,material:l,geometry:e}}function W_(i,t,e,n,s,r){const a=new _n,o=[],c=i?1:-1,l=c*Qe*.36,h=new U(0,l,0),p=new U(0,c,0),g=i?0:Math.PI*.5,m=Math.PI*.5,x=new Si(Qe,64,28,0,Math.PI*2,g,m);x.translate(0,-l,0);const S=new Wt(x,t);S.renderOrder=10,a.add(S),o.push(S);const d=new Si(Qe-.016,48,20,0,Math.PI*2,g,m);d.translate(0,-l,0);const u=new Wt(d,e);u.renderOrder=9,a.add(u),o.push(u);const _=new ii(Qe-.006,.0105,14,96);_.rotateX(Math.PI/2),_.translate(0,-l,0);const v=new Wt(_,n);v.renderOrder=11,a.add(v),o.push(v);const f=new ii(Qe-.022,.006,10,84);f.rotateX(Math.PI/2),f.translate(0,-l+c*.006,0);const T=new Wt(f,n);T.renderOrder=11,a.add(T),o.push(T);const b=new Ai(.32,.11,8,2),M=b.attributes.position;for(let P=0;P<M.count;P++){const R=M.getX(P),w=M.getY(P),A=R/Qe+(i?.36:Math.PI+.18),L=Math.max(0,-c*w)*.38,D=Qe+.006+L;M.setXYZ(P,Math.sin(A)*D,w-l+c*.03,Math.cos(A)*D)}b.computeVertexNormals();const y=new Wt(b,s);return y.renderOrder=12,a.add(y),o.push(y),r.push(x,d,_,f,b),{group:a,comOffsetLocal:h,apexLocal:p,aoExcluded:o}}class X_{constructor(t,e){this.sourceBallMesh=t,this.sourcePlasticMat=e,this.group.visible=!1}sourceBallMesh;sourcePlasticMat;group=new _n;aoExcluded=[];phase="idle";built=!1;phaseTime=0;unsealTime=0;sphereY=0;sphereVelY=0;camShake=0;corePos=new U;coreVel=new U;coreQuat=new Oe;coreAngVel=new U;coreBounces=0;domes=[];freeBallMesh=null;ballPos=new U;ballVel=new U;ballDirXZ=new U(.5,0,-.866).normalize();ballQuat=new Oe;ballBounces=0;shadowInstanced=null;MAX_PUFFS=220;puffs=[];smokeCenterAttr=null;smokeColorAttr=null;smokeParamsAttr=null;smokeMat=null;smokeGeo=null;smokeSortIndices=[];smokeSortDists=new Float32Array(220);coreSmokeTimer=0;trailSmokeTimer=0;horizonSmokeTimer=0;nextColorFlip=!1;tmpMat=new be;tmpPos=new U;tmpQuat=new Oe;tmpScale=new U;tmpDir=new U;tmpAxis=new U;tmpDeltaQ=new Oe;tmpWorldApex=new U;disposables=[];ensureBuilt(){if(this.built)return;this.built=!0;const t=this.sourceBallMesh.clone(!0);t.visible=!0,t.traverse(h=>{h instanceof Wt&&(h.castShadow=!0,h.receiveShadow=!0,h.renderOrder=5)}),this.group.add(t),this.freeBallMesh=t;const e=new Mi({color:15660024,roughness:.1,metalness:0,clearcoat:.9,clearcoatRoughness:.08,ior:1.49,envMapIntensity:1.35,transparent:!0,opacity:.14,depthWrite:!1,side:Nn}),n=new Mi({color:15262940,roughness:.22,metalness:.02,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.65,transparent:!0,opacity:.62,depthWrite:!1}),s=new Mi({color:16052714,roughness:.52,metalness:0,clearcoat:.24,transparent:!0,opacity:.56,depthWrite:!1,side:si});this.disposables.push(e,n,s);for(const h of[!0,!1]){const p=W_(h,this.sourcePlasticMat,e,n,s,this.disposables);this.group.add(p.group),this.aoExcluded.push(...p.aoExcluded),this.domes.push({group:p.group,pos:new U,vel:new U,quat:new Oe,angVel:new U,apexLocal:p.apexLocal,comOffsetLocal:p.comOffsetLocal,bounces:0,settled:!1})}const r=G_(),a=new Ai(1,1);a.rotateX(-Math.PI/2);const o=new Qi({map:r,transparent:!0,depthWrite:!1,opacity:.88}),c=new Zm(a,o,4);c.instanceMatrix.setUsage(Oo),c.renderOrder=-1,c.frustumCulled=!1,this.group.add(c),this.aoExcluded.push(c),this.shadowInstanced=c,this.disposables.push(r,a,o);const l=H_(this.MAX_PUFFS);this.group.add(l.mesh),this.aoExcluded.push(l.mesh),this.smokeCenterAttr=l.centerAttr,this.smokeColorAttr=l.colorAttr,this.smokeParamsAttr=l.paramsAttr,this.smokeMat=l.material,this.smokeGeo=l.geometry,this.disposables.push(l.geometry,l.material);for(let h=0;h<this.MAX_PUFFS;h++)this.puffs.push({active:!1,pos:new U,vel:new U,color:new Zt,age:0,maxAge:3,startRadius:.2,endRadius:1,maxAlpha:.5,rotation:0,rotSpeed:0,seed:h*.37,buoyancy:.45,drag:1.2,turbulence:.25})}start(t,e,n){this.ensureBuilt(),this.phase="lift",this.phaseTime=0,this.unsealTime=0,this.sphereY=0,this.sphereVelY=0,this.camShake=0,this.corePos.set(0,0,0),this.coreQuat.copy(t),this.coreSmokeTimer=0,this.trailSmokeTimer=0,this.horizonSmokeTimer=.35;for(const s of this.puffs)s.active=!1;this.smokeGeo&&(this.smokeGeo.instanceCount=0),this.group.visible=!1,n?.onLiftStart?.()}stop(){this.phase="idle",this.phaseTime=0,this.unsealTime=0,this.sphereY=0,this.sphereVelY=0,this.camShake=0;for(const t of this.puffs)t.active=!1;this.smokeGeo&&(this.smokeGeo.instanceCount=0),this.group.visible=!1}spawnSmokePuff(t,e,n,s,r,a,o,c,l,h,p,g=.48,m=1.25,x=.24){let S=null,d=null,u=-1;for(let v=0;v<this.puffs.length;v++){const f=this.puffs[v];if(!f.active){S=f;break}const T=f.age/f.maxAge;T>u&&(u=T,d=f)}const _=S||d;_&&(_.active=!0,_.pos.set(t,e,n),_.vel.set(s,r,a),_.color.setHex(V_(o)),_.age=0,_.maxAge=h,_.startRadius=c,_.endRadius=l,_.maxAlpha=p,_.rotation=Math.random()*Math.PI*2,_.rotSpeed=(Math.random()-.5)*.45,_.seed=Math.random()*100,_.buoyancy=g,_.drag=m,_.turbulence=x)}spawnSmokeFlareBurst(t,e,n,s,r=10,a=1){for(let o=0;o<r;o++){const c=Math.random()*Math.PI*2,l=(.35+Math.random()*.95)*a;this.spawnSmokePuff(t+(Math.random()-.5)*.35*a,Math.max($e+.14,e+(Math.random()-.5)*.25*a),n+(Math.random()-.5)*.35*a,Math.cos(c)*l,(.45+Math.random()*.85)*a,Math.sin(c)*l,s,(.24+Math.random()*.16)*a,(.95+Math.random()*.65)*a,2.8+Math.random()*1.8,.58+Math.random()*.18,.42+Math.random()*.25,1.15,.32)}}celebrateTap(t=0,e){if(this.phase!=="unsealed")return;const n=-this.ballDirXZ.z,s=this.ballDirXZ.x,r=2.6+Math.random()*.85,a=hn.clamp(t*1.4,-1.6,1.6),o=this.ballPos.x+this.ballDirXZ.x*r+n*a,c=this.ballPos.z+this.ballDirXZ.z*r+s*a;this.spawnSmokeFlareBurst(o-n*.35,$e+.36,c-s*.35,"pink",9,1.05),this.spawnSmokeFlareBurst(o+n*.35,$e+.36,c+s*.35,"magenta",9,1.05),e?.onSmokeBurst?.(hn.clamp(t,-.8,.8)),this.ballVel.x+=this.ballDirXZ.x*.42,this.ballVel.z+=this.ballDirXZ.z*.42,this.ballPos.y<=$e+ri+.015&&(this.ballVel.y=.68)}triggerSealPop(t,e){this.phase="unsealed",this.phaseTime=0,this.unsealTime=0,this.camShake=.68,this.group.visible=!0;const n=new U(0,this.sphereY,0);this.corePos.copy(n),this.coreQuat.copy(t),this.coreVel.set(-.55,1.16,-.35),this.coreAngVel.set(-.55,.35,.45),this.coreBounces=0;const r=new U(0,1,0).applyQuaternion(t).x>=0?1:-1;for(let a=0;a<2;a++){const o=this.domes[a],c=a===0?r:-r;o.pos.copy(o.comOffsetLocal).applyQuaternion(t).add(n),o.pos.y=Math.max($e+.32,o.pos.y),o.quat.copy(t),o.vel.set(c*(c>0?1.85:1.38),a===0?1.58:1.35,c>0?-.45:.16),o.angVel.set(c*-.95,c*1.15,-c*1.9),o.bounces=0,o.settled=!1,o.group.position.copy(o.pos),o.group.quaternion.copy(o.quat)}this.ballDirXZ.set(.5,0,-.866).normalize(),this.ballPos.set(.36,$e+ri+.42,.56),this.ballVel.set(this.ballDirXZ.x*1.24,1.48,this.ballDirXZ.z*1.24),this.ballQuat.identity(),this.ballBounces=0,this.freeBallMesh&&(this.freeBallMesh.position.copy(this.ballPos),this.freeBallMesh.quaternion.copy(this.ballQuat)),this.spawnSmokeFlareBurst(-.62,n.y+.12,-.25,"pink",18,1.15),this.spawnSmokeFlareBurst(.68,n.y+.12,-.35,"magenta",18,1.15),e?.onSealPop?.()}computeDomeFloorClearance(t){this.tmpWorldApex.copy(t.apexLocal).applyQuaternion(t.quat).normalize();const e=this.tmpWorldApex.y,n=-.36863999999999997*e,s=Qe*Math.sqrt(Math.max(0,1-e*e)),r=e<0?Qe:s;return Math.max(.18,r-n)}step(t,e,n,s){const r=Math.min(t,.04);if(this.phase==="idle")return{phase:"idle",corePos:this.corePos.set(0,0,0),coreQuat:e,ballPos:this.ballPos.set(0,0,0),ballDirXZ:this.ballDirXZ,ballSpeed:0,followBlend:0,outerShellVisible:!0,intactBallVisible:!0,useFinaleCorePose:!1,shadowScale:1,shadowOpacity:1,camShakeX:0,camShakeY:0,readyForReplay:!1};if(this.phaseTime+=r,this.phase==="lift"){const d=Math.min(1,this.phaseTime/.48),u=1-Math.pow(1-d,3);this.sphereY=u*.34;const _=Math.sin(d*Math.PI)*.015,v=Math.sin(this.phaseTime*54)*_,f=Math.cos(this.phaseTime*61)*_;return this.corePos.set(v,this.sphereY,f),this.coreQuat.copy(e),d>=1&&(this.phase="fall",this.phaseTime=0,this.sphereVelY=-.35),{phase:"lift",corePos:this.corePos,coreQuat:this.coreQuat,ballPos:this.corePos,ballDirXZ:this.ballDirXZ,ballSpeed:0,followBlend:0,outerShellVisible:!0,intactBallVisible:!0,useFinaleCorePose:!0,shadowScale:1+this.sphereY*.35,shadowOpacity:Math.max(.45,1-this.sphereY*.55),camShakeX:0,camShakeY:0,readyForReplay:!1}}if(this.phase==="fall"){const S=$e+Qe;if(this.sphereVelY-=12.6*r,this.sphereY+=this.sphereVelY*r,this.corePos.set(0,this.sphereY,0),this.coreQuat.copy(e),this.sphereY<=S)this.sphereY=S,this.triggerSealPop(e,s);else{const d=Math.max(0,this.sphereY-S);return{phase:"fall",corePos:this.corePos,coreQuat:this.coreQuat,ballPos:this.corePos,ballDirXZ:this.ballDirXZ,ballSpeed:0,followBlend:0,outerShellVisible:!0,intactBallVisible:!0,useFinaleCorePose:!0,shadowScale:.74+d*.5,shadowOpacity:Math.min(1,.72+(1-Math.min(1,d))*.35),camShakeX:0,camShakeY:0,readyForReplay:!1}}}this.unsealTime+=r,this.camShake=Math.max(0,this.camShake-r*3);const a=this.camShake*this.camShake*.036,o=(Math.sin(this.unsealTime*68)*.7+Math.cos(this.unsealTime*43)*.3)*a,c=(Math.cos(this.unsealTime*74)*.7+Math.sin(this.unsealTime*51)*.3)*a,l=$e+In;if(this.coreVel.y-=9.8*r,this.corePos.addScaledVector(this.coreVel,r),this.corePos.y<l){if(this.corePos.y=l,this.coreVel.y<-.18){const d=Math.min(1,-this.coreVel.y/3.8);this.coreBounces<3&&s?.onShellBounce?.(d),this.coreBounces++,this.coreVel.y=-this.coreVel.y*.38}else this.coreVel.y=0;const S=Math.exp(-1.7*r);this.coreVel.x*=S,this.coreVel.z*=S}const h=Math.hypot(this.coreVel.x,this.coreVel.z);if(this.corePos.y<=l+.02&&h>1e-4)this.tmpAxis.set(this.coreVel.z/h,0,-this.coreVel.x/h),this.tmpDeltaQ.setFromAxisAngle(this.tmpAxis,h*r/In),this.coreQuat.premultiply(this.tmpDeltaQ).normalize(),this.coreAngVel.multiplyScalar(Math.exp(-4*r));else{const S=this.coreAngVel.length();S>1e-4&&(this.tmpAxis.copy(this.coreAngVel).multiplyScalar(1/S),this.tmpDeltaQ.setFromAxisAngle(this.tmpAxis,S*r),this.coreQuat.premultiply(this.tmpDeltaQ).normalize())}for(let S=0;S<this.domes.length;S++){const d=this.domes[S];if(!d.settled){d.vel.y-=9.8*r,d.pos.addScaledVector(d.vel,r);const u=d.angVel.length();u>1e-4&&(this.tmpAxis.copy(d.angVel).multiplyScalar(1/u),this.tmpDeltaQ.setFromAxisAngle(this.tmpAxis,u*r),d.quat.premultiply(this.tmpDeltaQ).normalize());const _=this.computeDomeFloorClearance(d),v=$e+_;if(d.pos.y<v){if(d.pos.y=v,d.vel.y<-.22){const w=Math.min(1,-d.vel.y/4.2);d.bounces<3&&s?.onShellBounce?.(w*.72),d.bounces++,d.vel.y=-d.vel.y*.34,d.angVel.multiplyScalar(.75)}else d.vel.y=0;this.tmpWorldApex.copy(d.apexLocal).applyQuaternion(d.quat).normalize();const y=this.tmpWorldApex.y>=0?1:-1;this.tmpDir.set(0,y,0),this.tmpAxis.crossVectors(this.tmpWorldApex,this.tmpDir),d.angVel.addScaledVector(this.tmpAxis,4.2*r);const P=Math.exp(-2.65*r),R=Math.exp(-2.8*r);d.vel.x*=P,d.vel.z*=P,d.angVel.multiplyScalar(R),d.vel.lengthSq()<6e-4&&d.angVel.lengthSq()<.004&&Math.abs(this.tmpWorldApex.y)>.94&&(d.vel.set(0,0,0),d.angVel.set(0,0,0),d.settled=!0)}const f=d.pos.x-this.corePos.x,T=d.pos.z-this.corePos.z,b=Math.hypot(f,T),M=In+Qe*.88;if(b>1e-4&&b<M&&this.unsealTime>.24){const y=(M-b)*.35;d.pos.x+=f/b*y,d.pos.z+=T/b*y}d.group.position.copy(d.pos),d.group.quaternion.copy(d.quat)}}const p=$e+ri;if(this.ballVel.y-=9.6*r,this.ballPos.addScaledVector(this.ballVel,r),this.ballPos.y<p){if(this.ballPos.y=p,this.ballVel.y<-.16){const f=Math.min(1,-this.ballVel.y/3.8);this.ballBounces<5&&s?.onMarbleBounce?.(f),this.ballBounces++,this.ballVel.y=-this.ballVel.y*.5}else this.ballVel.y=0;const S=-1.04+Math.sin(this.unsealTime*.36)*.14,d=Math.cos(S),u=Math.sin(S),_=1.05,v=1-Math.exp(-1.55*r);this.ballVel.x+=(d*_-this.ballVel.x)*v,this.ballVel.z+=(u*_-this.ballVel.z)*v}const g=Math.hypot(this.ballVel.x,this.ballVel.z);if(g>1e-4&&(this.ballDirXZ.set(this.ballVel.x/g,0,this.ballVel.z/g),this.tmpAxis.set(this.ballVel.z/g,0,-this.ballVel.x/g),this.tmpDeltaQ.setFromAxisAngle(this.tmpAxis,g*r/ri),this.ballQuat.premultiply(this.tmpDeltaQ).normalize()),this.freeBallMesh&&(this.freeBallMesh.position.copy(this.ballPos),this.freeBallMesh.quaternion.copy(this.ballQuat)),this.shadowInstanced){const S=Math.max(0,this.corePos.y-l),d=2.65*(1+S*.25)*Math.max(.45,1-S*.2);this.tmpPos.set(this.corePos.x+.14+S*.12,$e+.002,this.corePos.z-.05),this.tmpQuat.identity(),this.tmpScale.set(d,1,d),this.tmpMat.compose(this.tmpPos,this.tmpQuat,this.tmpScale),this.shadowInstanced.setMatrixAt(0,this.tmpMat);for(let v=0;v<2;v++){const f=this.domes[v],T=Math.max(0,f.pos.y-($e+.36)),b=1.68*(1+T*.3)*Math.max(.35,1-T*.25);this.tmpPos.set(f.pos.x+.1+T*.12,$e+.0025+v*5e-4,f.pos.z-.04),this.tmpScale.set(b,1,b),this.tmpMat.compose(this.tmpPos,this.tmpQuat,this.tmpScale),this.shadowInstanced.setMatrixAt(1+v,this.tmpMat)}const u=Math.max(0,this.ballPos.y-p),_=ri*4.6*(1+u*.45)*Math.max(.32,1-u*.25);this.tmpPos.set(this.ballPos.x+.02+u*.1,$e+.004,this.ballPos.z-.02),this.tmpScale.set(_,1,_),this.tmpMat.compose(this.tmpPos,this.tmpQuat,this.tmpScale),this.shadowInstanced.setMatrixAt(3,this.tmpMat),this.shadowInstanced.instanceMatrix.needsUpdate=!0}if(this.unsealTime<4.5&&(this.coreSmokeTimer-=r,this.coreSmokeTimer<=0&&(this.coreSmokeTimer=.085,this.spawnSmokePuff(this.corePos.x-.48+(Math.random()-.5)*.45,$e+.38+Math.random()*.3,this.corePos.z-.45+(Math.random()-.5)*.35,-.28+(Math.random()-.5)*.38,.62+Math.random()*.45,-.18+(Math.random()-.5)*.35,"pink",.26,1.25+Math.random()*.45,3.2+Math.random()*1.4,.56,.44,1,.3),this.spawnSmokePuff(this.corePos.x+.65+(Math.random()-.5)*.45,$e+.36+Math.random()*.3,this.corePos.z-.55+(Math.random()-.5)*.35,.34+(Math.random()-.5)*.38,.58+Math.random()*.45,-.22+(Math.random()-.5)*.35,"magenta",.26,1.25+Math.random()*.45,3.2+Math.random()*1.4,.54,.44,1,.3))),this.trailSmokeTimer-=r,this.trailSmokeTimer<=0&&this.unsealTime>.35){this.trailSmokeTimer=.16;const S=-this.ballDirXZ.z,d=this.ballDirXZ.x;this.nextColorFlip=!this.nextColorFlip;const u=this.nextColorFlip?1:-1;this.spawnSmokePuff(this.ballPos.x-this.ballDirXZ.x*.14+S*u*.14,$e+.05,this.ballPos.z-this.ballDirXZ.z*.14+d*u*.14,S*u*(.24+Math.random()*.16),.22+Math.random()*.16,d*u*(.24+Math.random()*.16),this.nextColorFlip?"pink":"magenta",.06,.3+Math.random()*.14,1.85+Math.random()*.85,.32,.24,1.35,.2)}if(this.horizonSmokeTimer-=r,this.horizonSmokeTimer<=0){this.horizonSmokeTimer=.85+Math.random()*.42;const S=-this.ballDirXZ.z,d=this.ballDirXZ.x,u=2.9+Math.random()*1.25,_=(Math.random()<.5?-1:1)*(.5+Math.random()*1.05),v=_<0?"pink":"magenta",f=this.ballPos.x+this.ballDirXZ.x*u+S*_,T=this.ballPos.z+this.ballDirXZ.z*u+d*_;this.spawnSmokeFlareBurst(f,$e+.22,T,v,9,1.12),s?.onSmokeBurst?.(hn.clamp(_*.45,-.8,.8))}if(this.smokeMat&&this.smokeGeo&&this.smokeCenterAttr&&this.smokeColorAttr&&this.smokeParamsAttr){this.smokeMat.uniforms.uTime.value=this.unsealTime,this.smokeSortIndices.length=0;for(let v=0;v<this.puffs.length;v++){const f=this.puffs[v];if(!f.active)continue;if(f.age+=r,f.age>=f.maxAge){f.active=!1;continue}const T=Math.exp(-f.drag*r);f.vel.x*=T,f.vel.z*=T,f.vel.y=f.vel.y*Math.exp(-f.drag*.65*r)+f.buoyancy*r;const b=f.turbulence*r;f.vel.x+=Math.sin(this.unsealTime*1.3+f.seed)*b,f.vel.z+=Math.cos(this.unsealTime*1.1+f.seed*1.3)*b,f.pos.addScaledVector(f.vel,r),f.pos.y<$e+.08&&(f.pos.y=$e+.08,f.vel.y=Math.max(.08,Math.abs(f.vel.y)*.3)),f.rotation+=f.rotSpeed*r;const M=f.pos.x-n.x,y=f.pos.y-n.y,P=f.pos.z-n.z;this.smokeSortDists[v]=M*M+y*y+P*P,this.smokeSortIndices.push(v)}this.smokeSortIndices.sort((v,f)=>this.smokeSortDists[f]-this.smokeSortDists[v]);const S=this.smokeCenterAttr.array,d=this.smokeColorAttr.array,u=this.smokeParamsAttr.array,_=this.smokeSortIndices.length;for(let v=0;v<_;v++){const f=this.puffs[this.smokeSortIndices[v]],T=f.age/f.maxAge,b=1-Math.pow(1-T,2.2),M=f.startRadius+(f.endRadius-f.startRadius)*b,y=Math.min(1,T/.14),P=Math.pow(Math.max(0,1-Math.max(0,T-.22)/.78),1.55),R=f.maxAlpha*y*P,w=v*3,A=v*4;S[w]=f.pos.x,S[w+1]=f.pos.y,S[w+2]=f.pos.z,d[w]=f.color.r,d[w+1]=f.color.g,d[w+2]=f.color.b,u[A]=M,u[A+1]=R,u[A+2]=f.rotation,u[A+3]=f.seed}this.smokeGeo.instanceCount=_,this.smokeCenterAttr.needsUpdate=!0,this.smokeColorAttr.needsUpdate=!0,this.smokeParamsAttr.needsUpdate=!0}const m=hn.clamp((this.unsealTime-.72)/2.2,0,1),x=m*m*(3-2*m);return{phase:"unsealed",corePos:this.corePos,coreQuat:this.coreQuat,ballPos:this.ballPos,ballDirXZ:this.ballDirXZ,ballSpeed:this.ballPos.y<=p+.02?g:0,followBlend:x,outerShellVisible:!1,intactBallVisible:!1,useFinaleCorePose:!0,shadowScale:0,shadowOpacity:0,camShakeX:o,camShakeY:c,readyForReplay:this.unsealTime>=1.9}}dispose(){for(const t of this.disposables)t.dispose()}}const vd={" ":["....","....","....","....","....","....","....","....","....","....","....","...."],"-":["......","......","......","......","......","######","######","......","......","......","......","......"],"·":["..","..","..","..","..","##","##","..","..","..","..",".."],0:["#######","#######","##...##","##...##","##...##","##...##","##...##","##...##","##...##","##...##","#######","#######"],1:["..####.","..####.","....##.","....##.","....##.","....##.","....##.","....##.","....##.","....##.","#######","#######"],2:["#######","#######",".....##",".....##",".....##","#######","#######","##.....","##.....","##.....","#######","#######"],3:["#######","#######",".....##",".....##",".....##","..#####","..#####",".....##",".....##",".....##","#######","#######"],4:["##...##","##...##","##...##","##...##","##...##","#######","#######",".....##",".....##",".....##",".....##",".....##"],5:["#######","#######","##.....","##.....","##.....","#######","#######",".....##",".....##",".....##","#######","#######"],6:["#######","#######","##.....","##.....","##.....","#######","#######","##...##","##...##","##...##","#######","#######"],7:["#######","#######",".....##",".....##",".....##",".....##",".....##",".....##",".....##",".....##",".....##",".....##"],8:["#######","#######","##...##","##...##","##...##","#######","#######","##...##","##...##","##...##","#######","#######"],9:["#######","#######","##...##","##...##","##...##","#######","#######",".....##",".....##",".....##","#######","#######"],A:["#######","#######","##...##","##...##","##...##","#######","#######","##...##","##...##","##...##","##...##","##...##"],B:["######.","#######","##...##","##...##","##...##","######.","#######","##...##","##...##","##...##","#######","######."],C:["#######","#######","##.....","##.....","##.....","##.....","##.....","##.....","##.....","##.....","#######","#######"],D:["######.","#######","##...##","##...##","##...##","##...##","##...##","##...##","##...##","##...##","#######","######."],E:["#######","#######","##.....","##.....","##.....","######.","######.","##.....","##.....","##.....","#######","#######"],F:["#######","#######","##.....","##.....","##.....","######.","######.","##.....","##.....","##.....","##.....","##....."],G:["#######","#######","##.....","##.....","##.....","##..###","##..###","##...##","##...##","##...##","#######","#######"],H:["##...##","##...##","##...##","##...##","##...##","#######","#######","##...##","##...##","##...##","##...##","##...##"],I:["######","######","..##..","..##..","..##..","..##..","..##..","..##..","..##..","..##..","######","######"],J:[".....##",".....##",".....##",".....##",".....##",".....##",".....##","##...##","##...##","##...##","#######","#######"],K:["##...##","##...##","##..##.","##..##.","##.##..","####...","####...","##.##..","##..##.","##..##.","##...##","##...##"],L:["##.....","##.....","##.....","##.....","##.....","##.....","##.....","##.....","##.....","##.....","#######","#######"],M:["##.....##","###...###","####.####","##.###.##","##..#..##","##.....##","##.....##","##.....##","##.....##","##.....##","##.....##","##.....##"],N:["##...##","###..##","###..##","####.##","##.####","##..###","##..###","##...##","##...##","##...##","##...##","##...##"],O:["#######","#######","##...##","##...##","##...##","##...##","##...##","##...##","##...##","##...##","#######","#######"],P:["#######","#######","##...##","##...##","##...##","#######","#######","##.....","##.....","##.....","##.....","##....."],Q:["#######","#######","##...##","##...##","##...##","##...##","##...##","##...##","##.#.##","##..###","#######","#####.#"],R:["#######","#######","##...##","##...##","##...##","#######","#######","##..##.","##...##","##...##","##...##","##...##"],S:["#######","#######","##.....","##.....","##.....","#######","#######",".....##",".....##",".....##","#######","#######"],T:["########","########","...##...","...##...","...##...","...##...","...##...","...##...","...##...","...##...","...##...","...##..."],U:["##...##","##...##","##...##","##...##","##...##","##...##","##...##","##...##","##...##","##...##","#######","#######"],V:["##...##","##...##","##...##","##...##","##...##","##...##","##...##","##...##",".##.##.",".##.##.","..###..","..###.."],W:["##.....##","##.....##","##.....##","##.....##","##.....##","##.....##","##..#..##","##.###.##","####.####","###...###","##.....##","##.....##"],X:["##...##","##...##",".##.##.",".##.##.","..###..","..###..","..###..","..###..",".##.##.",".##.##.","##...##","##...##"],Y:["##....##","##....##","##....##",".##..##.","..####..","...##...","...##...","...##...","...##...","...##...","...##...","...##..."],Z:["#######","#######",".....##","....##.","...##..","..##...","..##...",".##....","##.....","##.....","#######","#######"]};function q_(){const c=4.025806451612903,l=64/15,h=Math.min(c,l)-.72,p=h,g=h*.5,m=p*.5,x=new Float32Array(2496),S=new Float32Array(2496);for(let bt=0;bt<156;bt++)for(let ut=0;ut<16;ut++){let Dt=bt*374761393+ut*668265263+1313>>>0;Dt=Math.imul(Dt^Dt>>>13,1274126177)>>>0,x[bt*16+ut]=((Dt^Dt>>>16)>>>0)/4294967295,S[bt*16+ut]=((Dt>>>8&255)/255-.5)*14}const d=document.createElement("canvas");d.width=768,d.height=128;const u=d.getContext("2d"),_=9,v=9,f=u.createLinearGradient(0,v,0,128-v);f.addColorStop(0,"rgba(226, 222, 214, 0.48)"),f.addColorStop(.16,"rgba(234, 230, 223, 0.28)"),f.addColorStop(.84,"rgba(232, 228, 221, 0.26)"),f.addColorStop(1,"rgba(220, 215, 206, 0.46)"),u.fillStyle=f,u.fillRect(_,v,768-_*2,128-v*2),u.strokeStyle="rgba(116, 111, 102, 0.42)",u.lineWidth=1.2,u.strokeRect(_,v,768-_*2,128-v*2),u.strokeStyle="rgba(255, 255, 255, 0.58)",u.lineWidth=.85,u.strokeRect(_+1.5,v+1.5,768-(_+1.5)*2,128-(v+1.5)*2),u.fillStyle="rgba(238, 235, 228, 0.30)",u.fillRect(66,26,636,76),u.strokeStyle="rgba(122, 116, 106, 0.26)",u.lineWidth=.8,u.strokeRect(66,26,636,76);const T=(bt,ut,Dt)=>{u.strokeStyle=`rgba(148, 128, 96, ${Dt})`,u.lineWidth=ut,u.beginPath(),u.moveTo(48,bt),u.lineTo(720,bt),u.stroke()};T(17,1.5,.46),T(20.5,.75,.28),T(111,1.5,.46),T(128-20.5,.75,.28);const b=26,M=32,y=21,P=64;u.strokeStyle="rgba(144, 124, 92, 0.52)",u.lineWidth=.8;for(let bt=0;bt<8;bt++){const ut=M+6+bt/7*(P-12),Dt=32+bt/7*64;u.beginPath(),u.moveTo(b+y,ut),u.lineTo(b+y+7,ut),u.lineTo(66,Dt),u.stroke(),u.fillStyle="rgba(182, 184, 188, 0.90)",u.fillRect(b+y,ut-1.1,4,2.2),u.fillRect(b-3,ut-1.1,3,2.2)}u.fillStyle="rgba(30, 30, 32, 0.92)",u.fillRect(b,M,y,P),u.strokeStyle="rgba(98, 98, 102, 0.55)",u.lineWidth=.8,u.strokeRect(b,M,y,P),u.fillStyle="rgba(216, 212, 204, 0.72)",u.fillRect(b+4,M+4.5,3,3);const R=725,w=["V+","DA","CK","GD"];u.font='600 6.5px "IBM Plex Mono", ui-monospace, monospace',u.textBaseline="middle",u.textAlign="right";for(let bt=0;bt<4;bt++){const ut=38+bt*17.5;u.fillStyle="rgba(198, 162, 94, 0.82)",u.fillRect(R,ut-4,14,8),u.strokeStyle="rgba(128, 98, 50, 0.65)",u.lineWidth=.75,u.strokeRect(R,ut-4,14,8),u.strokeStyle="rgba(146, 126, 94, 0.46)",u.beginPath(),u.moveTo(R,ut),u.lineTo(702,ut),u.stroke(),u.fillStyle="rgba(46, 42, 36, 0.72)",u.fillText(w[bt],R-3,ut)}u.font='600 6.8px "IBM Plex Mono", ui-monospace, monospace',u.fillStyle="rgba(38, 35, 30, 0.62)",u.textAlign="left",u.textBaseline="middle",u.fillText("EPD-13 // TRANSLUCENT E-INK FILM",72,13.5),u.textAlign="right",u.fillText("16×156 ELECTROPHORETIC · STHLM",696,128-13.5),u.fillStyle="rgba(244, 241, 234, 0.17)";for(let bt=0;bt<16;bt++){const ut=32+bt*l-m;for(let Dt=0;Dt<156;Dt++){const ct=72+Dt*c-g;u.fillRect(ct,ut,h,p)}}u.strokeStyle="rgba(122, 116, 106, 0.10)",u.lineWidth=.45;for(let bt=0;bt<=16;bt++){const ut=32-l*.5+bt*l;u.beginPath(),u.moveTo(72-c*.5,ut),u.lineTo(696+c*.5,ut),u.stroke()}for(let bt=0;bt<=156;bt+=2){const ut=72-c*.5+bt*c;u.beginPath(),u.moveTo(ut,32-l*.5),u.lineTo(ut,96+l*.5),u.stroke()}const A=document.createElement("canvas");A.width=128,A.height=32;const L=A.getContext("2d");L.fillStyle="#5c5c5c",L.fillRect(0,0,128,32),L.fillStyle="#c4c4c4",L.fillRect(11,7,106,18),L.fillStyle="#9a9a9a",L.fillRect(4,8,4,16);const D=document.createElement("canvas");D.width=768,D.height=128;const C=D.getContext("2d"),F=new en(D);F.colorSpace=He,F.generateMipmaps=!1,F.minFilter=Ln,F.magFilter=Ln,F.anisotropy=1;const O=new en(A),q=document.createElement("canvas");q.width=80,q.height=16;const V=q.getContext("2d",{willReadFrequently:!0}),X=bt=>{const ut=bt.toUpperCase(),Dt=[];for(let ct=0;ct<ut.length;ct++){const Gt=vd[ut[ct]]??vd[" "],ht=Gt[0].length;for(let Tt=0;Tt<ht;Tt++){let N=0;for(let E=0;E<12;E++)Gt[E][Tt]==="#"&&(N|=1<<E+2);Dt.push(N)}ct<ut.length-1&&Dt.push(0,0)}return Dt},k=bt=>{if(!bt)return[];V.clearRect(0,0,q.width,16),V.imageSmoothingEnabled=!1,V.fillStyle="#000000",V.textBaseline="middle",V.textAlign="left",V.font='400 15px "DotGothic16", "Hiragino Sans", "Noto Sans JP", monospace';const ut=Math.min(q.width-2,Math.ceil(V.measureText(bt).width)+2);V.fillText(bt,1,16*.5+.5);const Dt=V.getImageData(0,0,ut,16).data,ct=[];for(let Tt=0;Tt<ut;Tt++){let N=0;for(let E=0;E<16;E++)Dt[(E*ut+Tt)*4+3]>=104&&(N|=1<<E);ct.push(N)}let Gt=0;for(;Gt<ct.length&&ct[Gt]===0;)Gt++;let ht=ct.length-1;for(;ht>=Gt&&ct[ht]===0;)ht--;return Gt<=ht?ct.slice(Gt,ht+1):[]},$=(bt,ut="")=>{const Dt=X(bt),ct=k(ut),Gt=Dt.length>0&&ct.length>0?7:0,ht=Dt.length+Gt+ct.length,Tt=new Uint16Array(156);let E=Math.max(0,Math.floor((156-ht)*.5));for(let H=0;H<Dt.length&&E<156;H++,E++)Tt[E]=Dt[H];E+=Gt;for(let H=0;H<ct.length&&E<156;H++,E++)Tt[E]=ct[H];return Tt},dt=new Uint16Array(156),B=new Uint16Array(156),j=new Uint16Array(156);let K=1,ot="FIRST ROLL",et="初転",Mt=!1,Xt=new Uint16Array(156),Nt=new Uint16Array(156),Jt=new Uint16Array(156),ie=new Uint16Array(156);const at=()=>{Xt=$(`LEVEL ${K}`),Nt=$(ot,et),Jt=$("TAP TO START","開始"),ie=$(`LEVEL ${K} CLEAR`,"完了"),lt=""};let pt="intro",mt=-1,lt="",_t="";const Ct=(bt,ut,Dt,ct,Gt,ht)=>{C.clearRect(0,0,768,128),C.drawImage(d,0,0);const Tt=34,N=105;if(C.fillStyle=ht?Mt?"rgba(18, 128, 82, 0.92)":"rgba(28, 28, 30, 0.86)":"rgba(140, 134, 124, 0.24)",C.fillRect(Tt,N,4.2,4.2),ct==="dark"){C.fillStyle="rgba(34, 34, 36, 0.68)",C.fillRect(72-g,32-m,624+h,64+p),F.needsUpdate=!0;return}if(ct==="light"){C.fillStyle="rgba(248, 246, 240, 0.56)",C.fillRect(72-g,32-m,624+h,64+p),F.needsUpdate=!0;return}if(ut&&Dt>.005){C.fillStyle=`rgba(34, 34, 36, ${Dt.toFixed(3)})`;for(let E=0;E<156;E++){const H=ut[E];if(H===0)continue;const it=72+E*c-g;for(let Q=0;Q<16;Q++){if((H&1<<Q)===0)continue;const xt=32+Q*l-m;C.fillRect(it,xt,h,p)}}}for(let E=0;E<156;E++){const H=bt[E],it=Gt>=0&&(E===Gt||E===Gt+1),Q=Gt>=0&&(E===Gt-1||E===Gt-2);if(H===0&&!it&&!Q)continue;const xt=72+E*c-g;for(let gt=0;gt<16;gt++){const J=32+gt*l-m,tt=(H&1<<gt)!==0;if(it)C.fillStyle=tt?"rgba(244, 241, 234, 0.64)":"rgba(42, 42, 44, 0.48)",C.fillRect(xt,J,h,p);else if(Q&&!tt)C.fillStyle="rgba(248, 246, 240, 0.42)",C.fillRect(xt,J,h,p);else if(tt){const St=S[E*16+gt];if(Mt){const z=Math.round(14+St*.25),ft=Math.round(112+St*.45),st=Math.round(72+St*.35);C.fillStyle=`rgba(${z}, ${ft}, ${st}, 0.94)`}else{const z=Math.round(22+St*.32);C.fillStyle=`rgba(${z}, ${z+1}, ${z+2}, 0.95)`}C.fillRect(xt,J,h,p)}}}F.needsUpdate=!0};function wt(bt,ut,Dt,ct=!1){const Gt=`${bt}|${ut}|${Dt}|${ct?1:0}`;Gt!==_t&&(_t=Gt,K=bt,ot=ut,et=Dt,Mt=ct,at(),ct&&(pt="cleared",mt=-1),lt="")}function qt(){Mt=!1,pt="intro",mt=-1,lt=""}function ne(){pt==="blank"||pt==="clearing"||(j.set(B),pt="clearing",mt=-1,lt="")}const re=(bt,ut,Dt)=>{const ct=Dt*168-6,Gt=Math.round(ct);for(let ht=0;ht<156;ht++){const Tt=ct-ht;if(Tt>=6)B[ht]=ut[ht];else if(Tt<=-6)B[ht]=bt[ht];else{const N=(Tt+6)/12;let E=0;const H=bt[ht],it=ut[ht];for(let Q=0;Q<16;Q++){const xt=1<<Q;(x[ht*16+Q]<=N?(it&xt)!==0:(H&xt)!==0)&&(E|=xt)}B[ht]=E}}return Gt};function G(bt){mt<0&&(mt=bt);const ut=Math.max(0,bt-mt);if(pt==="blank"){if(lt==="blank")return;lt="blank",B.fill(0),Ct(dt,null,0,"none",-1,!1);return}if(pt==="clearing"){if(ut<.06){if(lt==="clr:light")return;lt="clr:light",Ct(B,null,0,"light",-1,!0);return}const N=Math.min(1,(ut-.06)/.34);if(N>=1){pt="blank",lt="",B.fill(0),Ct(dt,null,0,"none",-1,!1);return}const H=`clearing:${Math.floor(N*14)}`;if(H===lt)return;lt=H;for(let it=0;it<156;it++){let Q=0;const xt=j[it];if(xt!==0)for(let gt=0;gt<16;gt++){const J=1<<gt;(xt&J)!==0&&x[it*16+gt]>N&&(Q|=J)}B[it]=Q}Ct(B,null,0,"none",-1,!0);return}if(pt==="cleared"){if(ut<.08){if(lt==="done:dark")return;lt="done:dark",Ct(B,null,0,"dark",-1,!0);return}if(ut<.15){if(lt==="done:light")return;lt="done:light",Ct(B,null,0,"light",-1,!0);return}const N=Math.min(1,(ut-.15)/.34),H=`done:${Math.min(16,Math.floor(N*16))}`;if(H===lt)return;lt=H;for(let it=0;it<156;it++){let Q=0;const xt=ie[it];if(xt!==0)for(let gt=0;gt<16;gt++){const J=1<<gt;(xt&J)!==0&&x[it*16+gt]<=N&&(Q|=J)}B[it]=Q}Ct(B,null,0,"none",-1,N<1);return}if(ut<.08){if(lt==="in:dark")return;lt="in:dark",Ct(B,null,0,"dark",-1,!0);return}if(ut<.15){if(lt==="in:light")return;lt="in:light",Ct(B,null,0,"light",-1,!0);return}if(ut<.48){const N=Math.min(1,(ut-.15)/.33),H=`in:lvl:${Math.floor(N*14)}`;if(H===lt)return;lt=H;for(let it=0;it<156;it++){let Q=0;const xt=Xt[it];if(xt!==0)for(let gt=0;gt<16;gt++){const J=1<<gt;(xt&J)!==0&&x[it*16+gt]<=N&&(Q|=J)}B[it]=Q}Ct(B,null,0,"none",-1,!0);return}if(ut<1.45){if(lt==="hold:lvl")return;lt="hold:lvl",B.set(Xt),Ct(B,null,0,"none",-1,!1);return}if(ut<2.02){const N=(ut-1.45)/.57,E=re(Xt,Nt,N),H=`scan:ttl:${E}`;if(H===lt)return;lt=H,Ct(B,null,0,"none",E>=0&&E<156?E:-1,!0);return}if(ut<3.65){const N=ut-2.02,H=`hold:ttl:${N<.4?Math.floor(N*12):99}`;if(H===lt)return;lt=H,B.set(Nt);const it=N<.4?.08*(1-N/.4):0;Ct(B,it>0?Xt:null,it,"none",-1,!1);return}if(ut<4.2){const N=(ut-3.65)/.55,E=re(Nt,Jt,N),H=`scan:tap:${E}`;if(H===lt)return;lt=H,Ct(B,null,0,"none",E>=0&&E<156?E:-1,!0);return}const Dt=ut-4.2,ct=Dt<.4?Math.floor(Dt*12):99,Gt=Math.floor(bt*1.6)%2===0,ht=`hold:tap:${ct}:${Gt?1:0}`;if(ht===lt)return;lt=ht,B.set(Jt);const Tt=Dt<.4?.08*(1-Dt/.4):0;Ct(B,Tt>0?Nt:null,Tt,"none",-1,Gt)}return at(),Ct(Xt,null,0,"none",-1,!1),typeof document<"u"&&"fonts"in document&&document.fonts.ready.then(()=>{at()}),{map:F,roughnessMap:O,isCleared:()=>Mt,setLevel:wt,restartIntro:qt,clearToBlank:ne,update:G,dispose:()=>{F.dispose(),O.dispose()}}}function Oh(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Y_(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=document.createElement("canvas");n.width=512,n.height=512;const s=n.getContext("2d"),r=e.createImageData(512,512),a=s.createImageData(512,512),o=Oh(4213);for(let h=0;h<512*512;h++){const p=(o()+o())*.5,g=Math.round(136+(p-.5)*34),m=Math.round(128+(p-.5)*44),x=h*4;r.data[x]=r.data[x+1]=r.data[x+2]=g,r.data[x+3]=255,a.data[x]=a.data[x+1]=a.data[x+2]=m,a.data[x+3]=255}e.putImageData(r,0,0),s.putImageData(a,0,0),e.strokeStyle="rgba(215, 215, 215, 0.14)";for(let h=0;h<26;h++){const p=o()*512,g=o()*512,m=18+o()*55,x=o()*Math.PI*2;e.lineWidth=.6+o()*.9,e.beginPath(),e.moveTo(p,g),e.quadraticCurveTo(p+Math.cos(x+.2)*m*.5,g+Math.sin(x+.2)*m*.5,p+Math.cos(x)*m,g+Math.sin(x)*m),e.stroke()}const c=new en(t);c.wrapS=c.wrapT=$n,c.repeat.set(4,4);const l=new en(n);return l.wrapS=l.wrapT=$n,l.repeat.set(4,4),{roughnessMap:c,bumpMap:l}}function Z_(){const e=document.createElement("canvas");e.width=4096,e.height=2048;const n=e.getContext("2d"),s=document.createElement("canvas");s.width=4096,s.height=2048;const r=s.getContext("2d"),a=document.createElement("canvas");a.width=4096,a.height=2048;const o=a.getContext("2d"),c=document.createElement("canvas");c.width=4096,c.height=2048;const l=c.getContext("2d");n.fillStyle="rgb(34, 34, 34)",n.fillRect(0,0,4096,2048),r.fillStyle="rgb(128, 128, 128)",r.fillRect(0,0,4096,2048),o.fillStyle="rgb(245, 244, 240)",o.fillRect(0,0,4096,2048),l.fillStyle="rgb(0, 0, 0)",l.fillRect(0,0,4096,2048);const h=Oh(1388);for(let d=0;d<10;d++){const u=h()*4096,_=2048*(.14+h()*.72),v=110+h()*200,f=68+h()*125,T=h()*Math.PI,b=.36+h()*.26,M=(y,P,R)=>{y.save(),y.translate(u,_),y.rotate(T);for(let w=0;w<3;w++){const A=(w-1)*v*.28,L=(w%2-.5)*f*.24,D=v*(.68+w*.14),C=f*(.72+(2-w)*.12);y.save(),y.translate(A,L),y.scale(1,C/D);const F=y.createRadialGradient(0,0,D*.05,0,0,D);F.addColorStop(0,`rgba(${P}, ${Math.min(1,b*R).toFixed(4)})`),F.addColorStop(.45,`rgba(${P}, ${Math.min(1,b*R*.48).toFixed(4)})`),F.addColorStop(1,`rgba(${P}, 0)`),y.fillStyle=F,y.beginPath(),y.arc(0,0,D,0,Math.PI*2),y.fill(),y.restore()}y.restore()};M(n,"232, 232, 232",1.15),M(o,"204, 207, 210",.72),M(l,"255, 255, 255",.22)}const p=(d,u,_,v,f,T,b,M)=>{const y=(P,R,w,A=0,L=0)=>{const D=P.createLinearGradient(d+A,u+L,f+A,T+L),C=Math.min(1,w);return D.addColorStop(0,`rgba(${R}, 0)`),D.addColorStop(.18,`rgba(${R}, ${(C*.85).toFixed(3)})`),D.addColorStop(.5,`rgba(${R}, ${C.toFixed(3)})`),D.addColorStop(.82,`rgba(${R}, ${(C*.85).toFixed(3)})`),D.addColorStop(1,`rgba(${R}, 0)`),D};n.strokeStyle=y(n,"240, 240, 240",M*1.4),n.lineWidth=b*1.15,n.beginPath(),n.moveTo(d,u),n.quadraticCurveTo(_,v,f,T),n.stroke(),r.strokeStyle=y(r,"72, 72, 72",M*1.1),r.lineWidth=b,r.beginPath(),r.moveTo(d,u),r.quadraticCurveTo(_,v,f,T),r.stroke(),o.strokeStyle=y(o,"106, 102, 96",M*1.15,.85,.85),o.lineWidth=b,o.beginPath(),o.moveTo(d+.85,u+.85),o.quadraticCurveTo(_+.85,v+.85,f+.85,T+.85),o.stroke(),o.strokeStyle=y(o,"255, 255, 255",M*1.65),o.lineWidth=b,o.beginPath(),o.moveTo(d,u),o.quadraticCurveTo(_,v,f,T),o.stroke(),l.strokeStyle=y(l,"255, 255, 255",M*1.35),l.lineWidth=b*1.05,l.beginPath(),l.moveTo(d,u),l.quadraticCurveTo(_,v,f,T),l.stroke()};for(let d=0;d<165;d++){const u=h()*4096,_=2048*(.08+h()*.84),v=32+h()*190,f=h()*Math.PI*2,T=(h()-.5)*.24,b=u+Math.cos(f+T)*v*.5,M=_+Math.sin(f+T)*v*.5,y=u+Math.cos(f)*v,P=_+Math.sin(f)*v,R=.2+h()*.36,w=.65+h()*.42;p(u,_,b,M,y,P,w,R)}for(let d=0;d<65;d++){const u=h()*4096,_=2048*(.1+h()*.8),v=60+h()*210,f=h()*Math.PI*2,T=.2+h()*.65,b=u+Math.cos(f)*v,M=_+Math.sin(f)*v,y=f+T*.5,P=u+Math.cos(y)*v*1.04,R=_+Math.sin(y)*v*1.04,w=u+Math.cos(f+T)*v,A=_+Math.sin(f+T)*v;p(b,M,P,R,w,A,.65+h()*.3,.14+h()*.22)}for(let d=0;d<12;d++){const u=h()*4096,_=2048*(.14+h()*.72),v=h()*Math.PI*2,f=3+Math.floor(h()*3);for(let T=0;T<f;T++){const b=(h()-.5)*48,M=(h()-.5)*48,y=24+h()*68,P=v+(h()-.5)*.16,R=u+b,w=_+M,A=R+Math.cos(P)*y,L=w+Math.sin(P)*y;p(R,w,(R+A)*.5,(w+L)*.5,A,L,.68,.22+h()*.26)}}for(let d=0;d<180;d++){const u=h()*4096,_=2048*(.08+h()*.84),v=.65+h()*.9,f=.08+h()*.14;n.fillStyle=`rgba(190,190,190,${f})`,n.beginPath(),n.arc(u,_,v,0,Math.PI*2),n.fill(),l.fillStyle=`rgba(255,255,255,${f*.95})`,l.beginPath(),l.arc(u,_,v,0,Math.PI*2),l.fill()}const g=new en(e);g.wrapS=$n,g.wrapT=ai,g.anisotropy=8;const m=new en(s);m.wrapS=$n,m.wrapT=ai,m.anisotropy=8;const x=new en(a);x.colorSpace=He,x.wrapS=$n,x.wrapT=ai,x.anisotropy=8;const S=new en(c);return S.wrapS=$n,S.wrapT=ai,S.anisotropy=8,{roughnessMap:g,bumpMap:m,scratchMap:x,scratchAlphaMap:S}}function lc(i){const t=i==="north"||i==="south",e=t?860:1536,n=t?256:320,s=document.createElement("canvas");s.width=e,s.height=n;const r=s.getContext("2d"),a=document.createElement("canvas");a.width=e,a.height=n;const o=a.getContext("2d");o.fillStyle="rgb(112, 112, 112)",o.fillRect(0,0,e,n);const l=Oh({primary:9913,secondary:5513,north:7113,south:8213}[i]),h=t?24:34,p=t?20:26,g=t?12:16,m=t?13:16;r.save(),r.beginPath(),r.moveTo(h,p),r.lineTo(e-h,p);for(let v=0;v<g;v++){const f=p+(v+.5)/g*(n-p*2),T=p+(v+1)/g*(n-p*2);r.lineTo(e-h-m*(.75+l()*.35),f),r.lineTo(e-h+(l()-.5)*3,T)}r.lineTo(h,n-p);for(let v=g-1;v>=0;v--){const f=p+(v+.5)/g*(n-p*2),T=p+v/g*(n-p*2);r.lineTo(h+m*(.75+l()*.35),f),r.lineTo(h+(l()-.5)*3,T)}r.closePath(),r.clip();const x=r.createLinearGradient(0,p,0,n-p);x.addColorStop(0,"rgba(246, 243, 234, 0.44)"),x.addColorStop(.08,"rgba(244, 240, 230, 0.29)"),x.addColorStop(.5,"rgba(242, 238, 227, 0.26)"),x.addColorStop(.92,"rgba(244, 240, 230, 0.29)"),x.addColorStop(1,"rgba(246, 243, 234, 0.45)"),r.fillStyle=x,r.fillRect(0,0,e,n),r.strokeStyle="rgba(255, 254, 250, 0.48)",r.lineWidth=3,r.beginPath(),r.moveTo(h,p+2),r.lineTo(e-h,p+2),r.moveTo(h,n-p-2),r.lineTo(e-h,n-p-2),r.stroke();for(let v=0;v<40;v++){const f=p+8+l()*(n-p*2-16);r.strokeStyle=`rgba(255, 252, 245, ${.03+l()*.05})`,r.lineWidth=1+l()*2,r.beginPath(),r.moveTo(h+l()*140,f),r.lineTo(e-h-l()*140,f),r.stroke()}for(let v=0;v<9;v++){const f=v%2===0?h+26+l()*85:e-h-26-l()*85,T=p+18+l()*(n-p*2-36),b=3+l()*8;r.fillStyle="rgba(255, 255, 252, 0.22)",r.beginPath(),r.ellipse(f,T,b*1.4,b*.8,l()*.5,0,Math.PI*2),r.fill()}r.fillStyle="rgba(26, 25, 22, 0.88)",r.strokeStyle="rgba(26, 25, 22, 0.42)",r.textBaseline="middle",r.lineWidth=2;const S=t?40:58,d=t?30:40;if(r.beginPath(),r.moveTo(h+S,p+d),r.lineTo(e-h-S,p+d),r.moveTo(h+S,n-p-d),r.lineTo(e-h-S,n-p-d),r.stroke(),i==="primary"){const v=h+94,f=n/2;r.lineWidth=2.5,r.beginPath(),r.arc(v,f,16,0,Math.PI*2),r.moveTo(v-24,f),r.lineTo(v+24,f),r.moveTo(v,f-24),r.lineTo(v,f+24),r.stroke(),r.font='700 44px "IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',r.fillText("MADE IN SWEDEN",h+148,n/2-14),r.fillStyle="rgba(32, 31, 28, 0.56)",r.font='600 22px Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',r.fillText("SPHERE LABYRINTH NO. 13   ·   ABS / PC SHELL   ·   STHLM 2026",h+150,n/2+30);const T=e-h-246;r.strokeStyle="rgba(32, 31, 28, 0.45)",r.lineWidth=2.2,r.strokeRect(T,n/2-36,178,72),r.fillStyle="rgba(32, 31, 28, 0.74)",r.font='700 24px "IBM Plex Sans", "Helvetica Neue", sans-serif',r.fillText("SE-013",T+18,n/2-11),r.fillStyle="rgba(32, 31, 28, 0.54)",r.font='600 17px Inter, "Helvetica Neue", sans-serif',r.fillText("Ø120MM  QC ✓",T+18,n/2+18)}else if(i==="secondary")r.font='700 34px "IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',r.fillText("INSPECTION SEAL  ·  DO NOT OPEN",h+110,n/2-12),r.fillStyle="rgba(32, 31, 28, 0.54)",r.font='600 21px Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',r.fillText("LOT 26-1113   ·   PRECISION STEEL 8MM   ·   MADE IN SWEDEN",h+112,n/2+28);else{const v=i==="north",f=h+76,T=n/2;r.lineWidth=2.4,r.beginPath(),r.arc(f,T,14,0,Math.PI*2),r.moveTo(f-21,T),r.lineTo(f+21,T),r.moveTo(f,T-21),r.lineTo(f,T+21),r.stroke(),r.font='700 38px "IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',r.fillText(v?"NORTH POLE":"SOUTH POLE",h+124,n/2-14),r.fillStyle="rgba(32, 31, 28, 0.56)",r.font='600 19px Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',r.fillText(v?"+90°N  ·  00 START  ·  AXIS REF":"−90°S  ·  13 END  ·  AXIS REF",h+126,n/2+26);const b=e-h-134;r.strokeStyle="rgba(32, 31, 28, 0.45)",r.lineWidth=2.2,r.strokeRect(b,n/2-30,88,60),r.fillStyle="rgba(32, 31, 28, 0.78)",r.font='700 32px "IBM Plex Sans", "Helvetica Neue", sans-serif',r.textAlign="center",r.fillText(v?"N":"S",b+44,n/2+2),r.textAlign="left"}r.restore();const u=new en(s);u.colorSpace=He,u.anisotropy=8;const _=new en(a);return _.anisotropy=4,{map:u,roughnessMap:_}}function Md(i,t){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.clearRect(0,0,256,256),s.strokeStyle="rgba(42, 40, 36, 0.34)",s.lineWidth=4,s.beginPath(),s.arc(256/2,256/2,256*.42,0,Math.PI*2),s.stroke();for(let a=0;a<4;a++){const o=a*Math.PI/2;s.beginPath(),s.moveTo(256/2+Math.cos(o)*256*.36,256/2+Math.sin(o)*256*.36),s.lineTo(256/2+Math.cos(o)*256*.45,256/2+Math.sin(o)*256*.45),s.stroke()}s.fillStyle="rgba(38, 36, 32, 0.62)",s.textAlign="center",s.textBaseline="middle",s.font='700 44px "IBM Plex Sans", "Helvetica Neue", sans-serif',s.fillText(i,256/2,t?256*.24:256*.25),t&&(s.fillStyle="rgba(38, 36, 32, 0.46)",s.font='600 22px Inter, "Helvetica Neue", sans-serif',s.fillText(t,256/2,256*.78));const r=new en(n);return r.colorSpace=He,r.anisotropy=4,r}function $_(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.22,"rgba(255, 255, 255, 0.62)"),n.addColorStop(.55,"rgba(255, 255, 255, 0.16)"),n.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const s=new en(t);return s.colorSpace=He,s}function K_(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.clearRect(0,0,128,128),e.strokeStyle="rgba(42, 40, 36, 0.72)",e.fillStyle="rgba(42, 40, 36, 0.72)",e.lineWidth=7.5,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.arc(64,52,16,Math.PI,0,!1),e.lineTo(80,62),e.moveTo(48,52),e.lineTo(48,62),e.stroke(),e.beginPath(),e.roundRect(38,60,52,38,7),e.stroke(),e.beginPath(),e.arc(64,79,4.5,0,Math.PI*2),e.fill();const n=new en(t);return n.colorSpace=He,n.anisotropy=4,n}function J_(){const e=document.createElement("canvas");e.width=192,e.height=96;const n=e.getContext("2d");n.clearRect(0,0,192,96),n.strokeStyle="rgba(42, 40, 36, 0.58)",n.lineWidth=6.5,n.lineCap="round",n.lineJoin="round",n.beginPath(),n.moveTo(46,48),n.lineTo(146,48),n.moveTo(62,34),n.lineTo(44,48),n.lineTo(62,62),n.moveTo(130,34),n.lineTo(148,48),n.lineTo(130,62),n.stroke();const s=new en(e);return s.colorSpace=He,s.anisotropy=4,s}function Q_(i,t){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.clearRect(0,0,256,256),s.strokeStyle=t,s.globalAlpha=.65,s.lineWidth=4.5,s.setLineDash([12,8]),s.beginPath(),s.arc(256/2,256/2,256*.43,0,Math.PI*2),s.stroke(),s.setLineDash([]),s.globalAlpha=.85,s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.font='700 34px "IBM Plex Sans", "Helvetica Neue", sans-serif',s.fillText(`SW ${i}`,256/2,256*.16),s.font='600 26px Inter, "Helvetica Neue", sans-serif',s.fillText("⇄",256/2,256*.84);const r=new en(n);return r.colorSpace=He,r.anisotropy=4,r}function _d(i){const n=document.createElement("canvas");n.width=64,n.height=64;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,64);i===0?(r.addColorStop(0,"#e60404"),r.addColorStop(.22,"#ff120e"),r.addColorStop(.4,"#ff4842"),r.addColorStop(.5,"#ff8a84"),r.addColorStop(.6,"#ff4842"),r.addColorStop(.78,"#ff120e"),r.addColorStop(1,"#e60404")):(r.addColorStop(0,"#0038f0"),r.addColorStop(.22,"#0c5eff"),r.addColorStop(.4,"#4a98ff"),r.addColorStop(.5,"#9ed0ff"),r.addColorStop(.6,"#4a98ff"),r.addColorStop(.78,"#0c5eff"),r.addColorStop(1,"#0038f0")),s.fillStyle=r,s.fillRect(0,0,64,64);const a=new en(n);return a.colorSpace=He,a.anisotropy=4,a}const ys=bn*1.12,Er=bn*1.1,bs=bn*1.01,Qo=.0034;function qn(i){let t=0,e=0;for(const h of i)t+=h.attributes.position.count,e+=h.index?h.index.count:h.attributes.position.count;const n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),a=new Uint32Array(e);let o=0,c=0;for(const h of i){const p=h.attributes.position,g=h.attributes.normal,m=h.attributes.uv,x=p.count;if(n.set(p.array,o*3),s.set(g.array,o*3),m&&r.set(m.array,o*2),h.index){const S=h.index.array;for(let d=0;d<S.length;d++)a[c+d]=S[d]+o;c+=S.length}else{for(let S=0;S<x;S++)a[c+S]=o+S;c+=x}o+=x,h.dispose()}const l=new Se;return l.setAttribute("position",new fi(n,3)),l.setAttribute("normal",new fi(s,3)),l.setAttribute("uv",new fi(r,2)),l.setIndex(new fi(a,1)),l}function fa(i,t,e,n,s,r,a,o,c,l,h,p,g,m,x,S){const d=o-s,u=c-r,_=l-a,v=h-s,f=p-r,T=g-a;let b=u*T-_*f,M=_*v-d*T,y=d*f-u*v;const P=Math.hypot(b,M,y)||1;b/=P,M/=P,y/=P;const R=i.length/3;i.push(s,r,a,o,c,l,h,p,g,m,x,S),t.push(b,M,y,b,M,y,b,M,y,b,M,y),e.push(0,0,1,0,0,1,1,1),n.push(R,R+1,R+2,R+1,R+3,R+2)}function j_(i){const t=i.band===0,e=i.band===Wn.length-1,n=8,s=t||e?36:8,r=[],a=[],o=[],c=[],l=new U,h=t?.072:i.phiMin,p=e?Math.PI-.072:i.phiMax,g=i.thetaMin,m=i.thetaMax,x=s+1,S=(n+1)*x;for(let u=0;u<2;u++){const _=u===0?_e:ks,v=u===0?1:-1;for(let f=0;f<=n;f++){const T=f/n,b=h+(p-h)*T;for(let M=0;M<=s;M++){const y=M/s,P=g+(m-g)*y;Ie(b,P,l),r.push(l.x*_,l.y*_,l.z*_),a.push(l.x*v,l.y*v,l.z*v),o.push(y*2,T*2)}}}for(let u=0;u<n;u++)for(let _=0;_<s;_++){const v=u*x+_,f=v+1,T=(u+1)*x+_,b=T+1;c.push(v,f,T,f,b,T);const M=S+v,y=S+f,P=S+T,R=S+b;c.push(M,P,y,y,P,R)}if(!t&&!e){const u=(v,f,T)=>{const b=S+v,M=S+f,y=T?v:f,P=T?f:v,R=T?b:M,w=T?M:b;fa(r,a,o,c,r[y*3],r[y*3+1],r[y*3+2],r[P*3],r[P*3+1],r[P*3+2],r[R*3],r[R*3+1],r[R*3+2],r[w*3],r[w*3+1],r[w*3+2])};for(let v=0;v<s;v++)u(v,v+1,!1);const _=n*x;for(let v=0;v<s;v++)u(_+v,_+v+1,!0);for(let v=0;v<n;v++)u(v*x,(v+1)*x,!0);for(let v=0;v<n;v++)u(v*x+s,(v+1)*x+s,!1)}const d=new Se;return d.setAttribute("position",new Bt(r,3)),d.setAttribute("normal",new Bt(a,3)),d.setAttribute("uv",new Bt(o,2)),d.setIndex(c),d}function tS(i){const t=(i.phiMax-i.phiMin)*.155,e=(i.thetaMax-i.thetaMin)*.155,n=i.phiMin,s=i.phiMax,r=i.thetaMin,a=i.thetaMax,o=n+t,c=s-t,l=r+e,h=a-e,p=Math.max(.28,Math.sin(i.centerPhi)),g=.0082,m=g,x=g/p,S=o-m,d=c+m,u=l-x,_=h+x,v=new U,f=(pt,mt,lt,_t,Ct,wt)=>{const qt=[],ne=[],re=[],G=[],bt=wt+1,ut=(Ct+1)*bt;for(let ht=0;ht<2;ht++){const Tt=ht===0?_e:ks,N=ht===0?1:-1;for(let E=0;E<=Ct;E++){const H=pt+(mt-pt)*E/Ct;for(let it=0;it<=wt;it++){const Q=lt+(_t-lt)*it/wt;Ie(H,Q,v),qt.push(v.x*Tt,v.y*Tt,v.z*Tt),ne.push(v.x*N,v.y*N,v.z*N),re.push(it/wt,E/Ct)}}}for(let ht=0;ht<Ct;ht++)for(let Tt=0;Tt<wt;Tt++){const N=ht*bt+Tt,E=N+1,H=(ht+1)*bt+Tt,it=H+1;G.push(N,E,H,E,it,H),G.push(ut+N,ut+H,ut+E,ut+E,ut+H,ut+it)}const Dt=(ht,Tt,N)=>{const E=ut+ht,H=ut+Tt,it=N?ht:Tt,Q=N?Tt:ht,xt=N?E:H,gt=N?H:E;fa(qt,ne,re,G,qt[it*3],qt[it*3+1],qt[it*3+2],qt[Q*3],qt[Q*3+1],qt[Q*3+2],qt[xt*3],qt[xt*3+1],qt[xt*3+2],qt[gt*3],qt[gt*3+1],qt[gt*3+2])};for(let ht=0;ht<wt;ht++)Dt(ht,ht+1,!1);const ct=Ct*bt;for(let ht=0;ht<wt;ht++)Dt(ct+ht,ct+ht+1,!0);for(let ht=0;ht<Ct;ht++)Dt(ht*bt,(ht+1)*bt,!0);for(let ht=0;ht<Ct;ht++)Dt(ht*bt+wt,(ht+1)*bt+wt,!1);const Gt=new Se;return Gt.setAttribute("position",new Bt(qt,3)),Gt.setAttribute("normal",new Bt(ne,3)),Gt.setAttribute("uv",new Bt(re,2)),Gt.setIndex(G),Gt},T=qn([f(n,S,r,a,2,6),f(d,s,r,a,2,6),f(S,d,r,u,5,2),f(S,d,_,a,5,2)]),b=[],M=[],y=[],P=[],R=_e,w=_e-.008,A=new U,L=new U,D=new U,C=new U,F=(pt,mt,lt,_t,Ct,wt,qt,ne,re)=>{for(let G=0;G<re;G++){const bt=G/re,ut=(G+1)/re,Dt=pt+(lt-pt)*bt,ct=mt+(_t-mt)*bt,Gt=pt+(lt-pt)*ut,ht=mt+(_t-mt)*ut,Tt=Ct+(qt-Ct)*bt,N=wt+(ne-wt)*bt,E=Ct+(qt-Ct)*ut,H=wt+(ne-wt)*ut;Ie(Dt,ct,A).multiplyScalar(R),Ie(Gt,ht,L).multiplyScalar(R),Ie(Tt,N,D).multiplyScalar(w),Ie(E,H,C).multiplyScalar(w),fa(b,M,y,P,A.x,A.y,A.z,L.x,L.y,L.z,D.x,D.y,D.z,C.x,C.y,C.z),Ie(Tt,N,A).multiplyScalar(w),Ie(E,H,L).multiplyScalar(w),Ie(Tt,N,D).multiplyScalar(ks),Ie(E,H,C).multiplyScalar(ks),fa(b,M,y,P,A.x,A.y,A.z,L.x,L.y,L.z,D.x,D.y,D.z,C.x,C.y,C.z)}};F(S,u,S,_,o,l,o,h,6),F(S,_,d,_,o,h,c,h,6),F(d,_,d,u,c,h,c,l,6),F(d,u,S,u,c,l,o,l,6);const O=new Se;O.setAttribute("position",new Bt(b,3)),O.setAttribute("normal",new Bt(M,3)),O.setAttribute("uv",new Bt(y,2)),O.setIndex(P);const q=[],V=[],X=[],k=[],$=_e+28e-5,dt=.011,B=85e-5,j=(pt,mt)=>{const lt=pt,_t=pt/p,Ct=mt,wt=mt/p,qt=S-lt-Ct,ne=d+lt+Ct,re=u-_t-wt,G=_+_t+wt,bt=S-lt+Ct,ut=d+lt-Ct,Dt=u-_t+wt,ct=_+_t-wt,Gt=(ht,Tt,N,E,H,it,Q,xt,gt)=>{for(let J=0;J<gt;J++){const tt=J/gt,St=(J+1)/gt;Ie(ht+(N-ht)*tt,Tt+(E-Tt)*tt,A),Ie(ht+(N-ht)*St,Tt+(E-Tt)*St,L),Ie(H+(Q-H)*tt,it+(xt-it)*tt,D),Ie(H+(Q-H)*St,it+(xt-it)*St,C);const z=q.length/3;q.push(A.x*$,A.y*$,A.z*$,L.x*$,L.y*$,L.z*$,D.x*$,D.y*$,D.z*$,C.x*$,C.y*$,C.z*$),V.push(A.x,A.y,A.z,L.x,L.y,L.z,D.x,D.y,D.z,C.x,C.y,C.z),X.push(tt,0,St,0,tt,1,St,1),k.push(z,z+1,z+2,z+1,z+3,z+2)}};Gt(qt,re,qt,G,bt,Dt,bt,ct,6),Gt(qt,G,ne,G,bt,ct,ut,ct,6),Gt(ne,G,ne,re,ut,ct,ut,Dt,6),Gt(ne,re,qt,re,ut,Dt,bt,Dt,6)};j(dt,B),j(5e-4,6e-4);const K=new Se;K.setAttribute("position",new Bt(q,3)),K.setAttribute("normal",new Bt(V,3)),K.setAttribute("uv",new Bt(X,2)),K.setIndex(k);const ot=6,et=[],Mt=[],Xt=[],Nt=[],Jt=_e-.0072;for(let pt=0;pt<=ot;pt++){const mt=o+(c-o)*pt/ot;for(let lt=0;lt<=ot;lt++){const _t=l+(h-l)*lt/ot;Ie(mt,_t,v),et.push(v.x*Jt,v.y*Jt,v.z*Jt),Mt.push(v.x,v.y,v.z),Xt.push(lt/ot,pt/ot)}}const ie=ot+1;for(let pt=0;pt<ot;pt++)for(let mt=0;mt<ot;mt++){const lt=pt*ie+mt,_t=lt+1,Ct=(pt+1)*ie+mt,wt=Ct+1;Nt.push(lt,_t,Ct,_t,wt,Ct)}const at=new Se;return at.setAttribute("position",new Bt(et,3)),at.setAttribute("normal",new Bt(Mt,3)),at.setAttribute("uv",new Bt(Xt,2)),at.setIndex(Nt),{frameGeo:T,paneGeo:at,chamferGeo:O,seamGeo:K}}function eS(i){const n=i.centerDir,s=i.centerPhi,r=i.centerTheta,a=(i.phiMax-i.phiMin)*.5,o=(i.thetaMax-i.thetaMin)*.5,c=new U(-Math.sin(r),0,Math.cos(r)).normalize(),l=new U(Math.cos(s)*Math.cos(r),-Math.sin(s),Math.cos(s)*Math.sin(r)).normalize(),h=Math.cos(Ms),p=Math.sin(Ms),g=new U,m=new U,x=new U,S=[],d=[],u=[],_=[],v=37,f=5*v;for(let y=0;y<2;y++){const P=y===0?_e:ks,R=y===0?1:-1;for(let w=0;w<=4;w++){const A=w/4;for(let L=0;L<=36;L++){const D=L/36*Math.PI*2,C=Math.cos(D),F=Math.sin(D);g.copy(n).multiplyScalar(h).addScaledVector(c,C*p).addScaledVector(l,F*p).normalize();const O=1/Math.max(Math.abs(C),Math.abs(F)),q=C*O,V=F*O;Ie(s+V*a,r+q*o,m),x.copy(g).lerp(m,A).normalize(),S.push(x.x*P,x.y*P,x.z*P),d.push(x.x*R,x.y*R,x.z*R),u.push(A*C*.5+.5,A*F*.5+.5)}}}for(let y=0;y<4;y++)for(let P=0;P<36;P++){const R=y*v+P,w=R+1,A=(y+1)*v+P,L=A+1;_.push(R,A,w,A,L,w);const D=f+R,C=f+w,F=f+A,O=f+L;_.push(D,C,F,F,C,O)}const T=(y,P,R)=>{const w=f+y,A=f+P,L=R?y:P,D=R?P:y,C=R?w:A,F=R?A:w;fa(S,d,u,_,S[L*3],S[L*3+1],S[L*3+2],S[D*3],S[D*3+1],S[D*3+2],S[C*3],S[C*3+1],S[C*3+2],S[F*3],S[F*3+1],S[F*3+2])};for(let y=0;y<36;y++)T(y,y+1,!0);const b=4*v;for(let y=0;y<36;y++)T(b+y,b+y+1,!1);const M=new Se;return M.setAttribute("position",new Bt(S,3)),M.setAttribute("normal",new Bt(d,3)),M.setAttribute("uv",new Bt(u,2)),M.setIndex(_),M}function Sd(i){const t=i*1.04,e=new Rf;e.moveTo(-t*.03,-t*.16),e.quadraticCurveTo(t*.08,t*.5,-t*.42,t*.94),e.quadraticCurveTo(-t*.9,t*.8,-t*1.14,t*.02),e.quadraticCurveTo(-t*.64,-t*.14,-t*.03,-t*.16);const n=new Dh(e,{depth:.0042,bevelEnabled:!0,bevelThickness:8e-4,bevelSize:8e-4,bevelSegments:2,curveSegments:14});return n.rotateX(-Math.PI/2),n}function nS(i,t){const e=t[i.nodeA].dir,n=t[i.nodeB].dir,s=Math.max(12,Math.ceil(i.arcLen*28)),r=.068,a=.084,o=14,c=105*Math.PI/180,l=[];for(let C=0;C<=o;C++){const F=-c+2*c*C/o;l.push([Math.sin(F)*r,-Math.cos(F)*r])}for(let C=o;C>=0;C--){const F=-c+2*c*C/o;l.push([Math.sin(F)*a,-Math.cos(F)*a])}const h=l.length,p=[],g=[],m=[],x=new U,S=new U,d=new U,u=new U,_=new U,v=new U().crossVectors(e,n).normalize(),f=Math.acos(Math.max(-1,Math.min(1,e.dot(n)))),T=Math.sin(f),b=(C,F)=>{if(T<1e-5)return F.copy(e);const O=Math.sin((1-C)*f)/T,q=Math.sin(C*f)/T;return F.set(e.x*O+n.x*q,e.y*O+n.y*q,e.z*O+n.z*q).normalize()},M=.088/ln,y=Math.min(.34,M/Math.max(.18,i.arcLen));for(let C=0;C<=s;C++){const F=C/s,O=y+F*(1-y*2);b(O,x),b(Math.min(1,O+.01),S),d.subVectors(S,x).normalize(),u.copy(v);for(let q=0;q<h;q++){const[V,X]=l[q];_.copy(x).multiplyScalar(ln+X).addScaledVector(u,V),p.push(_.x,_.y,_.z),g.push(F*i.arcLen*3,q/h)}}for(let C=0;C<s;C++)for(let F=0;F<h;F++){const O=(F+1)%h,q=C*h+F,V=(C+1)*h+F,X=(C+1)*h+O,k=C*h+O;m.push(q,V,k,V,X,k)}const P=new Se;P.setAttribute("position",new Bt(p,3)),P.setAttribute("uv",new Bt(g,2)),P.setIndex(m),P.computeVertexNormals();const R=[],w=Math.max(1,Math.floor((i.arcLen-M*2)*3.5)),A=new ii(a+.005,.0075,8,18,c*2);A.rotateZ(-Math.PI/2-c);const L=Math.min(.45,y+.05),D=Math.max(.55,1-y-.05);for(let C=1;C<=w;C++){const F=L+C/(w+1)*(D-L);b(F,x);const O=Math.min(1,F+.01);b(O,S),d.subVectors(S,x).normalize();const q=new be().makeBasis(v,x,d),V=A.clone();V.applyMatrix4(q),V.translate(x.x*ln,x.y*ln,x.z*ln),R.push(V)}return A.dispose(),{troughGeo:P,ribGeo:qn(R)}}function iS(i){const t=new U(0,1,0),e=new Oe().setFromUnitVectors(t,i.dir),n=[],s=[],r=.072,a=.088,o=[],c=12,l=72*Math.PI/180;for(let m=0;m<=c;m++){const x=l*m/c;o.push(new At(Math.max(1e-4,Math.sin(x)*r),ln-Math.cos(x)*r))}for(let m=c;m>=0;m--){const x=l*m/c;o.push(new At(Math.max(1e-4,Math.sin(x)*a),ln-Math.cos(x)*a))}o.reverse();const h=new Pr(o,24);h.applyQuaternion(e),h.computeVertexNormals(),n.push(h);const p=xl-ch+.02,g=new ws(.036,.048,p,16);if(g.translate(0,ch+p*.5-.01,0),g.applyQuaternion(e),s.push(g),i.shutterId>=0){const x=Ms*_e*.99,S=.048,d=new ws(x,x*.94,S,28,1,!0);d.translate(0,ks-S*.45,0);const u=d.index;for(let _=0;_<u.count;_+=3){const v=u.getX(_+1);u.setX(_+1,u.getX(_+2)),u.setX(_+2,v)}d.computeVertexNormals(),d.applyQuaternion(e),s.push(d)}return{bowlGeo:qn(n),metalGeo:qn(s)}}function sS(i){const t=_e-.016,e=In-.0042,n=In,s=bn*1.02,r=bn*1,a=bn*.91,o=[[-s,t,ys],[-r,e,Er],[-a,n,bs],[a,n,bs],[r,e,Er],[s,t,ys]],c=i.kind==="lat"?Math.abs(i.thetaEnd-i.thetaStart)*Math.sin(i.phiStart):Math.abs(i.phiEnd-i.phiStart),l=Math.max(8,Math.ceil(c*28)),h=[];for(let y=0;y<=l;y++)h.push(y/l);const p=o.length,g=new U,m=new U,x=new U,S=new U,d=i.phiEnd-i.phiStart,u=i.thetaEnd-i.thetaStart,_=[];for(let y=0;y<h.length;y++){const P=h[y],R=[];for(let w=0;w<p;w++){const[A,L,D]=o[w],C=Math.max(.002,D-.0026),F=Math.sqrt(Math.max(1e-5,C*C-A*A)),O=Math.min(.28,F/Math.max(.05,c)),q=O+P*(1-O*2),V=i.kind==="lat"?i.phiStart:i.phiStart+d*q,X=i.kind==="lon"?i.thetaStart:i.thetaStart+u*q;Ie(V,X,g),i.kind==="lat"?m.set(-Math.sin(X),0,Math.cos(X)).normalize():m.set(Math.cos(V)*Math.cos(X),-Math.sin(V),Math.cos(V)*Math.sin(X)).normalize(),x.crossVectors(g,m).normalize(),S.copy(g).multiplyScalar(L).addScaledVector(x,A*L),S.normalize().multiplyScalar(L),R.push([S.x,S.y,S.z,P*c*2.2,w/(p-1)])}_.push(R)}const v=[],f=[],T=[];for(let y=0;y<p-1;y++){const P=v.length/3;for(let R=0;R<h.length;R++){const w=_[R][y],A=_[R][y+1];v.push(w[0],w[1],w[2],A[0],A[1],A[2]),f.push(w[3],w[4],A[3],A[4])}for(let R=0;R<h.length-1;R++){const w=P+R*2,A=w+1,L=w+2,D=w+3;T.push(w,L,A,L,D,A)}}const b=(y,P)=>{const R=v.length/3;for(let O=0;O<p;O++){const q=_[y][O];v.push(q[0],q[1],q[2]),f.push(q[3],q[4])}const w=R+0,A=R+1,L=R+2,D=R+3,C=R+4,F=R+5;P?T.push(w,F,A,A,F,C,A,C,L,L,C,D):T.push(w,A,F,A,C,F,A,L,C,L,D,C)};b(0,!1),b(h.length-1,!0);const M=new Se;return M.setAttribute("position",new Bt(v,3)),M.setAttribute("uv",new Bt(f,2)),M.setIndex(T),M.computeVertexNormals(),M}function rS(i){const t=_e+.001,e=In-.0042,n=In,s=65e-5,r=bn*1.02+s,a=bn*1+s,o=bn*.91,c=[[-r,t,ys],[-a,e,Er],[-o,n+s,bs],[o,n+s,bs],[a,e,Er],[r,t,ys]],l=i.kind==="lat"?Math.abs(i.thetaEnd-i.thetaStart)*Math.sin(i.phiStart):Math.abs(i.phiEnd-i.phiStart),h=.00135,p=[],g=[],m=new U,x=new U,S=new U,d=new U,u=i.phiEnd-i.phiStart,_=i.thetaEnd-i.thetaStart,v=(k,$,dt,B,j)=>{const K=Math.max(.002,dt+B),ot=Math.sqrt(Math.max(1e-5,K*K-k*k)),et=Math.min(.45,ot/Math.max(.05,l)),Mt=j===1?et:1-et,Xt=i.kind==="lat"?i.phiStart:i.phiStart+u*Mt,Nt=i.kind==="lon"?i.thetaStart:i.thetaStart+_*Mt;return Ie(Xt,Nt,m),i.kind==="lat"?x.set(-Math.sin(Nt),0,Math.cos(Nt)).normalize():x.set(Math.cos(Xt)*Math.cos(Nt),-Math.sin(Xt),Math.cos(Xt)*Math.sin(Nt)).normalize(),S.crossVectors(m,x).normalize(),d.copy(m).multiplyScalar($).addScaledVector(S,k*$),d.normalize().multiplyScalar($),[d.x,d.y,d.z]},f=7,T=(k,$)=>{const dt=[];dt.push(v(c[0][0],c[0][1],c[0][2],k,$)),dt.push(v(c[1][0],c[1][1],c[1][2],k,$));for(let B=0;B<=f;B++){const j=B/f,K=-o+j*(o*2);dt.push(v(K,n+s,bs,k,$))}return dt.push(v(c[4][0],c[4][1],c[4][2],k,$)),dt.push(v(c[5][0],c[5][1],c[5][2],k,$)),dt};for(const k of[1,-1]){const $=T(2e-4,k),dt=T(h,k),B=$.length,j=p.length/3;for(let K=0;K<B;K++)p.push($[K][0],$[K][1],$[K][2]);for(let K=0;K<B;K++)p.push(dt[K][0],dt[K][1],dt[K][2]);for(let K=0;K<B-1;K++){const ot=j+K,et=j+B+K,Mt=j+B+K+1,Xt=j+K+1;k===1?g.push(ot,et,Xt,et,Mt,Xt):g.push(ot,Xt,et,et,Xt,Mt)}}const b=e-t,M=Math.min(.28,(Er+.0022)/Math.max(.05,l)),y=Math.max(.02,l*(1-M*2)),P=new U,R=new U,w=new U,A=new U,L=new U,D=(k,$,dt,B,j)=>{const K=M+k*(1-M*2),ot=i.kind==="lat"?i.phiStart:i.phiStart+u*K,et=i.kind==="lon"?i.thetaStart:i.thetaStart+_*K;Ie(ot,et,m),i.kind==="lat"?x.set(-Math.sin(et),0,Math.cos(et)).normalize():x.set(Math.cos(ot)*Math.cos(et),-Math.sin(ot),Math.cos(ot)*Math.sin(et)).normalize(),S.crossVectors(m,x).normalize();const Mt=t+$*b,Xt=dt*(r+(a-r)*$+25e-5);B.copy(m).multiplyScalar(Mt).addScaledVector(S,Xt*Mt),B.normalize().multiplyScalar(Mt),j&&j.copy(S).multiplyScalar(dt)},C=(k,$,dt=72e-5)=>{for(let B=0;B<$.length-1;B++){const[j,K]=$[B],[ot,et]=$[B+1],Mt=(ot-j)*y,Xt=(et-K)*b,Nt=Math.hypot(Mt,Xt),Jt=Math.max(1,Math.ceil(Nt*36));for(let ie=0;ie<Jt;ie++){const at=ie/Jt,pt=(ie+1)/Jt;if(D(j+(ot-j)*at,K+(et-K)*at,k,P,A),D(j+(ot-j)*pt,K+(et-K)*pt,k,R),w.subVectors(R,P),w.lengthSq()<1e-12)continue;w.normalize(),L.crossVectors(A,w).normalize().multiplyScalar(dt);const mt=p.length/3;p.push(P.x-L.x,P.y-L.y,P.z-L.z,P.x+L.x,P.y+L.y,P.z+L.z,R.x-L.x,R.y-L.y,R.z-L.z,R.x+L.x,R.y+L.y,R.z+L.z),g.push(mt,mt+1,mt+2,mt+1,mt+3,mt+2)}}},F=(k,$,dt,B=.0024)=>{const K=[];for(let ot=0;ot<=10;ot++){const et=ot/10*Math.PI*2,Mt=Math.cos(et)*B/y,Xt=Math.sin(et)*B/b;K.push([Math.max(.02,Math.min(.98,$+Mt)),Math.max(.05,Math.min(.95,dt+Xt))])}C(k,K,55e-5)},O=((i.id+13)*2654435761>>>0)/4294967296,q=((i.id+71)*2246822519>>>0)/4294967296,V=k=>q>.5?k.map(([$,dt])=>[1-$,dt]):k;if(y>.14&&O<.14){const k=q>.5?1:-1,$=58e-5;O<.07?(C(k,V([[.24,.16],[.24,.72],[.32,.8],[.74,.8],[.74,.16],[.24,.16]]),$),F(k,q>.5?.32:.68,.28,.002)):(C(k,V([[.28,.03],[.28,.62],[.36,.7],[.72,.7],[.72,.03]]),$),F(k,q>.5?.36:.64,.58,.002))}const X=new Se;return X.setAttribute("position",new Bt(p,3)),X.setIndex(g),X.computeVertexNormals(),X}function aS(i){const t=ks,e=In-.0042,n=In,s=ys*t,r=Er*e,a=bs*n,o=36,c=new Pr([new At(s,t),new At(r,e)],o),l=new Pr([new At(r,e),new At(a,n)],o),h=new fl(a,o);h.rotateX(-Math.PI/2),h.translate(0,n,0);const p=qn([c,l,h]),g=new Oe().setFromUnitVectors(new U(0,1,0),i.dir);return p.applyQuaternion(g),p}function oS(i){const t=[],e=_e+25e-5,n=9e-4,s=bn*1.04,r=new U,a=new U,o=new U,c=new U,l=new U,h=Math.sqrt(Math.max(1e-4,(ys+Qo)**2-s*s));for(const S of i.walls){const d=S.kind==="lat"?Math.abs(S.thetaEnd-S.thetaStart)*Math.sin(S.phiStart):Math.abs(S.phiEnd-S.phiStart),u=Math.max(5,Math.ceil(d*22)),_=Math.min(.32,h/Math.max(.05,d));for(const v of[-1,1]){const f=[],T=[],b=[],M=[];for(let P=0;P<=u;P++){const R=P/u,w=_+R*(1-_*2),A=S.kind==="lat"?S.phiStart:S.phiStart+(S.phiEnd-S.phiStart)*w,L=S.kind==="lon"?S.thetaStart:S.thetaStart+(S.thetaEnd-S.thetaStart)*w;Ie(A,L,r),S.kind==="lat"?a.set(-Math.sin(L),0,Math.cos(L)).normalize():a.set(Math.cos(A)*Math.cos(L),-Math.sin(A),Math.cos(A)*Math.sin(L)).normalize(),o.crossVectors(r,a).normalize();const D=v*s;c.copy(r).addScaledVector(o,D-n).normalize(),l.copy(r).addScaledVector(o,D+n).normalize(),f.push(c.x*e,c.y*e,c.z*e),T.push(c.x,c.y,c.z),b.push(R,0),f.push(l.x*e,l.y*e,l.z*e),T.push(l.x,l.y,l.z),b.push(R,1)}for(let P=0;P<u;P++){const R=P*2,w=R+1,A=R+2,L=R+3;M.push(R,A,w,w,A,L)}const y=new Se;y.setAttribute("position",new Bt(f,3)),y.setAttribute("normal",new Bt(T,3)),y.setAttribute("uv",new Bt(b,2)),y.setIndex(M),t.push(y)}}const p=22,g=ys,m=ys+Qo+n*1.4,x=new U(0,1,0);for(const S of i.posts){const d=new pl(g*e,m*e,p);d.rotateX(-Math.PI/2),d.translate(0,e,0);const u=d.attributes.position,_=d.attributes.normal,v=new U;for(let T=0;T<u.count;T++)v.set(u.getX(T),u.getY(T),u.getZ(T)).normalize(),u.setXYZ(T,v.x*e,v.y*e,v.z*e),_.setXYZ(T,v.x,v.y,v.z);const f=new Oe().setFromUnitVectors(x,S.dir);d.applyQuaternion(f),t.push(d)}return qn(t)}function lS(i){const t=[],e=_e+22e-5,n=72e-5,s=bn*1.12,r=new U,a=new U,o=(l,h,p)=>{if(p-h<.03)return;const g=Math.max(4,Math.ceil((p-h)*Math.sin(l)*28)),m=[],x=[],S=[],d=[];for(let _=0;_<=g;_++){const v=_/g,f=h+v*(p-h);Ie(l-n,f,r),Ie(l+n,f,a),m.push(r.x*e,r.y*e,r.z*e,a.x*e,a.y*e,a.z*e),x.push(r.x,r.y,r.z,a.x,a.y,a.z),S.push(v,0,v,1)}for(let _=0;_<g;_++){const v=_*2;d.push(v,v+1,v+2,v+1,v+3,v+2)}const u=new Se;u.setAttribute("position",new Bt(m,3)),u.setAttribute("normal",new Bt(x,3)),u.setAttribute("uv",new Bt(S,2)),u.setIndex(d),t.push(u)},c=(l,h,p)=>{if(p-h<.03)return;const g=Math.max(4,Math.ceil((p-h)*28)),m=[],x=[],S=[],d=[];for(let _=0;_<=g;_++){const v=_/g,f=h+v*(p-h),T=n/Math.max(.18,Math.sin(f));Ie(f,l-T,r),Ie(f,l+T,a),m.push(r.x*e,r.y*e,r.z*e,a.x*e,a.y*e,a.z*e),x.push(r.x,r.y,r.z,a.x,a.y,a.z),S.push(v,0,v,1)}for(let _=0;_<g;_++){const v=_*2;d.push(v,v+2,v+1,v+1,v+2,v+3)}const u=new Se;u.setAttribute("position",new Bt(m,3)),u.setAttribute("normal",new Bt(x,3)),u.setAttribute("uv",new Bt(S,2)),u.setIndex(d),t.push(u)};for(const l of i.cells){if(l.panelKind!=="solid"||l.band===0||l.band===Wn.length-1)continue;const h=((l.id+41)*2654435761>>>0)/4294967296;if(h>.44)continue;const p=l.phiMax-l.phiMin,g=l.phiMin+s,m=l.phiMax-s,x=Math.max(.25,Math.sin(l.centerPhi)),S=s/x,d=l.thetaMin+S,u=l.thetaMax-S,_=u-d;if(m<=g+.04||_<=.05)continue;const v=((l.id+97)*1597334677>>>0)/4294967296;if(h<.16){const f=v<.5?.28:.72;o(l.phiMin+p*f,d,u)}else if(h<.3){const f=v<.5?.3:.7;c(d+_*f,g,m)}else{const f=v<.5?.32:.68,T=v<.25||v>.75?.34:.66,b=l.phiMin+p*f,M=d+_*T;T<.5?o(b,d,M):o(b,M,u),f<.5?c(M,g,b):c(M,b,m)}}return qn(t)}function yd(i,t,e,n,s=.018){const r=i.kind==="lat"?Math.abs(i.thetaEnd-i.thetaStart)*Math.sin(i.phiStart):Math.abs(i.phiEnd-i.phiStart),a=bs+Qo+s,o=Math.min(.36,a/Math.max(.05,r)),c=Math.max(8,Math.ceil(r*28)),l=[[-e,t-.002],[-e*.78,t+n*.72],[0,t+n],[e*.78,t+n*.72],[e,t-.002]],h=l.length,p=[],g=[],m=[],x=new U,S=new U,d=new U,u=new U,_=i.phiEnd-i.phiStart,v=i.thetaEnd-i.thetaStart;for(let b=0;b<=c;b++){const M=b/c,y=o+M*(1-o*2),P=i.kind==="lat"?i.phiStart:i.phiStart+_*y,R=i.kind==="lon"?i.thetaStart:i.thetaStart+v*y;Ie(P,R,x),i.kind==="lat"?S.set(-Math.sin(R),0,Math.cos(R)).normalize():S.set(Math.cos(P)*Math.cos(R),-Math.sin(P),Math.cos(P)*Math.sin(R)).normalize(),d.crossVectors(x,S).normalize();const w=b===0||b===c?.15:1;for(let A=0;A<h;A++){const[L,D]=l[A],C=t+(D-t)*w;u.copy(x).multiplyScalar(C).addScaledVector(d,L*C),u.normalize().multiplyScalar(C),p.push(u.x,u.y,u.z),g.push(M,A/(h-1))}}for(let b=0;b<c;b++)for(let M=0;M<h-1;M++){const y=b*h+M,P=(b+1)*h+M,R=(b+1)*h+(M+1),w=b*h+(M+1);m.push(y,P,w,P,R,w)}const f=(b,M)=>{M?m.push(b,b+4,b+1,b+1,b+4,b+3,b+1,b+3,b+2):m.push(b,b+1,b+4,b+1,b+3,b+4,b+1,b+2,b+3)};f(0,!1),f(c*h,!0);const T=new Se;return T.setAttribute("position",new Bt(p,3)),T.setAttribute("uv",new Bt(g,2)),T.setIndex(m),T.computeVertexNormals(),T}function bd(i,t,e){const n=i.kind==="lat"?Math.abs(i.thetaEnd-i.thetaStart)*Math.sin(i.phiStart):Math.abs(i.phiEnd-i.phiStart),s=bs+Qo+.008,r=Math.min(.35,s/Math.max(.05,n)),a=Math.max(8,Math.ceil(n*24)),o=[],c=[],l=[],h=[],p=new U,g=new U,m=new U,x=new U,S=i.phiEnd-i.phiStart,d=i.thetaEnd-i.thetaStart;for(let _=0;_<=a;_++){const v=_/a,f=r+v*(1-r*2),T=i.kind==="lat"?i.phiStart:i.phiStart+S*f,b=i.kind==="lon"?i.thetaStart:i.thetaStart+d*f;Ie(T,b,p),i.kind==="lat"?g.set(-Math.sin(b),0,Math.cos(b)).normalize():g.set(Math.cos(T)*Math.cos(b),-Math.sin(T),Math.cos(T)*Math.sin(b)).normalize(),m.crossVectors(p,g).normalize();for(let M=0;M<2;M++){const y=M===0?-e:e;x.copy(p).addScaledVector(m,y).normalize(),o.push(x.x*t,x.y*t,x.z*t),c.push(x.x,x.y,x.z),l.push(v,M)}}for(let _=0;_<a;_++){const v=_*2,f=v+1,T=v+2,b=v+3;h.push(v,T,f,f,T,b)}const u=new Se;return u.setAttribute("position",new Bt(o,3)),u.setAttribute("normal",new Bt(c,3)),u.setAttribute("uv",new Bt(l,2)),u.setIndex(h),u}function Td(i,t,e,n){const a=[],o=[],c=[],l=[],h=.5*(i.phiStart+i.phiEnd),p=.5*(i.thetaStart+i.thetaEnd),g=Ie(h,p),m=i.kind==="lat"?new U(-Math.sin(p),0,Math.cos(p)).normalize():new U(Math.cos(h)*Math.cos(p),-Math.sin(h),Math.cos(h)*Math.sin(p)).normalize(),x=new U().crossVectors(g,m).normalize(),S=new U;for(let _=0;_<=2;_++){const v=_/2*2-1;for(let f=0;f<=4;f++){const T=f/4*2-1;S.copy(g).addScaledVector(m,T*e*.5).addScaledVector(x,v*n*.5).normalize(),o.push(S.x,S.y,S.z),a.push(S.x*t,S.y*t,S.z*t),c.push(f/4,1-_/2)}}const d=5;for(let _=0;_<2;_++)for(let v=0;v<4;v++){const f=_*d+v,T=f+1,b=(_+1)*d+v,M=b+1;l.push(f,T,b,T,M,b)}const u=new Se;return u.setAttribute("position",new Bt(a,3)),u.setAttribute("normal",new Bt(o,3)),u.setAttribute("uv",new Bt(c,2)),u.setIndex(l),u}function To(i,t,e,n,s,r=0){const c=[],l=[],h=[],p=[],g=new Oe().setFromAxisAngle(new U(1,0,0),s),m=new Oe().setFromAxisAngle(new U(0,1,0),t),x=new U;for(let u=0;u<=10;u++){const _=u/10,v=r+(_-.5)*n,f=Math.cos(v),T=Math.sin(v);for(let b=0;b<=40;b++){const M=b/40,y=(M-.5)*e/Math.max(.35,Math.cos(r));x.set(f*Math.sin(y),T,f*Math.cos(y)),x.applyQuaternion(g),x.applyQuaternion(m),l.push(x.x,x.y,x.z),c.push(x.x*i,x.y*i,x.z*i),h.push(M,_)}}const S=41;for(let u=0;u<10;u++)for(let _=0;_<40;_++){const v=u*S+_,f=v+1,T=(u+1)*S+_,b=T+1;p.push(v,f,T,f,b,T)}const d=new Se;return d.setAttribute("position",new Bt(c,3)),d.setAttribute("normal",new Bt(l,3)),d.setAttribute("uv",new Bt(h,2)),d.setIndex(p),d}function cc(i,t,e){const s=[],r=[],a=[],o=[],c=Math.abs(i.y)>.95?new U(0,0,1):new U(0,1,0),l=new U().crossVectors(c,i).normalize(),h=new U().crossVectors(i,l).normalize(),p=new U;for(let x=0;x<=8;x++){const S=x/8*2-1;for(let d=0;d<=8;d++){const u=d/8*2-1;p.copy(i).addScaledVector(l,u*e).addScaledVector(h,S*e).normalize(),r.push(p.x,p.y,p.z),s.push(p.x*t,p.y*t,p.z*t),a.push(d/8,x/8)}}const g=9;for(let x=0;x<8;x++)for(let S=0;S<8;S++){const d=x*g+S,u=d+1,_=(x+1)*g+S,v=_+1;o.push(d,u,_,u,v,_)}const m=new Se;return m.setAttribute("position",new Bt(s,3)),m.setAttribute("normal",new Bt(r,3)),m.setAttribute("uv",new Bt(a,2)),m.setIndex(o),m}function wd(i,t,e=1){const n=new _n,s=new Wt(new ws(.025*e,.028*e,.008*e,18),t);s.position.y=-.002*e,n.add(s);const r=new Wt(new ws(.018*e,.021*e,.01*e,18),i);r.position.y=.001*e,n.add(r);const a=new Wt(new Or(.032*e,.005*e,.0055*e),t);return a.position.y=.005*e,n.add(a),n}function cS(i){const t=new _n,e=[],n=[],s=[],r=[],a=()=>{r.length=0,r.push(...n,...s)},{roughnessMap:o,bumpMap:c}=Y_();e.push(o,c);const l=new Zt(14143166),h=new Zt(15986663),p=new U(0,1,0),g=new Fe({color:l,roughness:.78,roughnessMap:o,metalness:0}),m=new Fe({color:14080220,metalness:.92,roughness:.24}),x=new Fe({color:3881269,metalness:.45,roughness:.65}),S=new Fe({color:11841188,roughness:.88,metalness:0,side:si,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),d=new Fe({color:10524811,roughness:.86,metalness:0,transparent:!0,opacity:.64,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),u=new Fe({color:14603976,roughness:.56,roughnessMap:o,metalness:.02});e.push(g,m,x,S,d,u);const _=rt=>{const vt=[new At(rt*.97,-.009),new At(rt*1.015,-.003),new At(rt*1.09,.0028),new At(rt*1.18,4e-4)],yt=new Pr(vt,44);return yt.computeVertexNormals(),yt},v=rt=>{const vt=new pl(rt*1.175,rt*1.205,48);return vt.rotateX(-Math.PI/2),vt},f=new Si(ch,48,36),T=new Fe({color:10787725,roughness:.88,roughnessMap:o,metalness:0}),b=new Wt(f,T);b.receiveShadow=!0,t.add(b),e.push(f,T);const M=[],y=[];for(const rt of i.pipeEdges){const{troughGeo:vt,ribGeo:yt}=nS(rt,i.pipeNodes);M.push(vt),y.push(yt)}for(const rt of i.pipeNodes){const{bowlGeo:vt,metalGeo:yt}=iS(rt);M.push(vt),y.push(yt)}const P=new Fe({color:15459543,roughness:.54,roughnessMap:o,bumpMap:c,bumpScale:.0014,metalness:0}),R=new Fe({color:11117206,roughness:.42,metalness:.55}),w=qn(M),A=new Wt(w,P);A.castShadow=!0,A.receiveShadow=!0,t.add(A);const L=qn(y),D=new Wt(L,R);D.castShadow=!0,D.receiveShadow=!0,t.add(D),e.push(w,L,P,R);const C=[],F=[],O=[],q=[];for(const rt of i.cells)if(rt.panelKind==="solid")C.push(j_(rt));else if(rt.panelKind==="window"){const{frameGeo:vt,paneGeo:yt,chamferGeo:Vt,seamGeo:ve}=tS(rt);C.push(vt),F.push(yt),O.push(Vt),q.push(ve)}else rt.panelKind==="shutter"&&C.push(eS(rt));const V=qn(C),X=new Wt(V,g);if(X.castShadow=!0,X.receiveShadow=!0,t.add(X),e.push(V),O.length>0){const rt=qn(O),vt=new Wt(rt,u);vt.castShadow=!0,vt.receiveShadow=!0,t.add(vt),e.push(rt)}if(q.length>0){const rt=qn(q),vt=new Wt(rt,d);vt.receiveShadow=!0,t.add(vt),n.push(vt),e.push(rt)}const k=qn(F),$=new Mi({color:16250351,roughness:.08,metalness:0,clearcoat:1,clearcoatRoughness:.06,reflectivity:.75,ior:1.49,envMapIntensity:1.45,transparent:!0,opacity:.16,depthWrite:!1}),dt=new Wt(k,$);dt.renderOrder=4,t.add(dt),n.push(dt),e.push(k,$);const B=Ms*_e,j=Sd(B),K=new Uu(j,32),ot=new Fe({color:14867408,roughness:.44,metalness:.14}),et=new _f({color:6051148,transparent:!0,opacity:.78}),Mt=new ii(B*1,.0052,12,36);Mt.rotateX(Math.PI/2);const Xt=_(B),Nt=v(B),Jt=new ii(B*.905,.0036,10,36);Jt.rotateX(Math.PI/2);const ie=new ii(B*1.13,.0038,12,42);ie.rotateX(Math.PI/2);const at=new Ai(B*3.1,B*3.1);at.rotateX(-Math.PI/2);const pt=document.createElement("canvas");pt.width=128,pt.height=128;const mt=pt.getContext("2d"),lt=mt.createImageData(128,128);for(let rt=0;rt<128;rt++){const vt=(rt+.5)/64-1;for(let yt=0;yt<128;yt++){const Vt=(yt+.5)/64-1,ve=Math.hypot(Vt,vt);let Ae=0;if(ve>=.58&&ve<1){const le=Math.min(1,(ve-.58)/.14),te=Math.pow(Math.max(0,1-Math.abs(ve-.72)/.28),1.9);Ae=le*te}const me=(rt*128+yt)*4;lt.data[me]=lt.data[me+1]=lt.data[me+2]=255,lt.data[me+3]=Math.round(Ae*255)}}mt.putImageData(lt,0,0);const _t=new en(pt);_t.colorSpace=He;const Ct=$_();e.push(j,K,ot,et,Mt,Xt,Nt,Jt,ie,at,_t,Ct);const wt=[];for(const rt of i.shutters){const vt=new _n;vt.position.copy(rt.dir).multiplyScalar(_e-.001),vt.quaternion.setFromUnitVectors(p,rt.dir),t.add(vt);const yt=new Wt(Xt,u);yt.position.y=.001,yt.receiveShadow=!0,vt.add(yt);const Vt=new Wt(Nt,S);Vt.position.y=.0015,vt.add(Vt);const ve=new Wt(Mt,m);ve.position.y=.0016,vt.add(ve);const Ae=new Fe({color:13697004,emissive:new Zt(3073692),emissiveIntensity:1.4,roughness:.22,metalness:.05,envMapIntensity:.25}),me=new Wt(Jt,Ae);me.position.y=.0026,vt.add(me);const le=new Fe({color:16734804,emissive:new Zt(16714250),emissiveIntensity:2.3,roughness:.16,metalness:0,envMapIntensity:.35}),te=new Wt(ie,le);te.position.y=.0032,te.visible=!1,vt.add(te);const Ft=new Qi({map:_t,color:16716820,transparent:!0,opacity:.34,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Re=new Wt(at,Ft);Re.position.y=.0022,Re.visible=!1,vt.add(Re),n.push(Re),e.push(Ae,le,Ft);const Ee=[],Ce=B*1.04;for(let qe=0;qe<6;qe++){const cn=qe*Math.PI*2/6,oi=new _n;oi.position.set(Math.cos(cn)*Ce,-.011+qe*7e-4,Math.sin(cn)*Ce),oi.rotation.y=-cn;const Gi=new _n,ir=new Wt(j,ot);ir.castShadow=!0,ir.receiveShadow=!0,Gi.add(ir);const is=new Nu(K,et);Gi.add(is),oi.add(Gi),vt.add(oi),Ee.push(Gi)}wt.push({port:rt,pivots:Ee,ringLedMat:Ae,outerNeonMesh:te,outerNeonMat:le,outerHaloMesh:Re,outerHaloMat:Ft,linkedColorId:-1,lastOpen:-1})}const qt=oS(i),ne=new Wt(qt,d);ne.receiveShadow=!0,t.add(ne),n.push(ne),e.push(qt);const re=lS(i),G=new Wt(re,d);G.receiveShadow=!0,t.add(G),n.push(G),e.push(re);const bt=new Fe({color:h,roughness:.48,roughnessMap:o,bumpMap:c,bumpScale:.0014,metalness:0});e.push(bt);const ut=K_(),Dt=J_(),ct=new Fe({map:ut,transparent:!0,roughness:.75,depthWrite:!1});e.push(ut,Dt,ct);const Gt=[];for(const rt of i.walls){const vt=sS(rt),yt=rt.locked?bt:bt.clone(),Vt=new Wt(vt,yt);Vt.castShadow=!0,Vt.receiveShadow=!0,t.add(Vt),e.push(vt),rt.locked||e.push(yt);const ve=rS(rt),Ae=new Wt(ve,S);Vt.add(Ae),n.push(Ae),e.push(ve);let me=null;if(rt.locked){const le=Td(rt,In+.0014,.034,.034),te=new Wt(le,ct);Vt.add(te),n.push(te),e.push(le)}else if(rt.hasArrow){const le=Td(rt,In+.0014,.066,.033);me=new Fe({map:Dt,transparent:!0,opacity:1,roughness:.75,depthWrite:!1});const te=new Wt(le,me);Vt.add(te),n.push(te),e.push(le,me)}Gt.push({slot:rt,mesh:Vt,mat:yt,arrowMat:me,gateColorId:-1,lastExt:-1})}const ht=i.posts.map(rt=>aS(rt)),Tt=qn(ht),N=new Wt(Tt,bt);N.castShadow=!0,N.receiveShadow=!0,t.add(N),e.push(Tt);const E=i.posts.filter(rt=>rt.locked&&rt.phi>.35&&rt.phi<Math.PI-.35),H=[];for(const rt of E){if(H.length>=6)break;H.some(yt=>yt.dir.dot(rt.dir)>.48)||H.push(rt)}for(let rt=0;rt<H.length;rt++){const vt=H[rt],yt=wd(m,x,.78);yt.position.copy(vt.dir).multiplyScalar(In-.002),yt.quaternion.setFromUnitVectors(p,vt.dir),yt.rotateY(rt*1.17+.4),t.add(yt)}for(let rt=0;rt<4;rt++){const vt=rt*Math.PI/2+Math.PI/4,yt=new U(Math.cos(vt),0,Math.sin(vt)),Vt=wd(m,x,.72);Vt.position.copy(yt).multiplyScalar(Qe-.003),Vt.quaternion.setFromUnitVectors(p,yt),Vt.rotateY(rt*.9+.2),t.add(Vt)}const it=i.cells[0].centerDir,Q=Md("00","START"),xt=cc(it,_e+.0024,.17),gt=new Fe({map:Q,transparent:!0,roughness:.78,depthWrite:!1}),J=new Wt(xt,gt);t.add(J),n.push(J),e.push(Q,xt,gt);const tt=Math.sin(.072)*_e,St=new ii(tt*1.01,.0048,12,36);St.rotateX(Math.PI/2);const z=_(tt),ft=v(tt),st=Sd(tt),It=new Uu(st,32),Rt=.155,Pt=new ws(tt*.99,tt*.92,Rt,28,1,!0),jt=Pt.index;for(let rt=0;rt<jt.count;rt+=3){const vt=jt.getX(rt+1);jt.setX(rt+1,jt.getX(rt+2)),jt.setX(rt+2,vt)}Pt.computeVertexNormals();const ce=new fl(tt*.93,28);ce.rotateX(-Math.PI/2);const Et=new Fe({color:3881012,metalness:.45,roughness:.62}),se=i.cells[i.cells.length-1].centerDir,he=[[],[]],kt=[it,se];for(let rt=0;rt<kt.length;rt++){const vt=kt[rt],yt=new Oe().setFromUnitVectors(p,vt),Vt=new _n;Vt.quaternion.copy(yt);const ve=new Wt(z,u);ve.position.y=_e+5e-4,ve.receiveShadow=!0,Vt.add(ve);const Ae=new Wt(ft,S);Ae.position.y=_e+.0014,Vt.add(Ae);const me=new Wt(St,m);me.position.y=_e+.0014,Vt.add(me);const le=new Wt(Pt,m);le.position.y=_e-Rt*.5,Vt.add(le);const te=new Wt(ce,Et);te.position.y=_e-Rt+.002,Vt.add(te);const Ft=tt*1.04;for(let Re=0;Re<6;Re++){const Ee=Re*Math.PI*2/6,Ce=new _n;Ce.position.set(Math.cos(Ee)*Ft,_e-.01+Re*6e-4,Math.sin(Ee)*Ft),Ce.rotation.y=-Ee;const qe=new _n,cn=new Wt(st,ot);cn.castShadow=!0,cn.receiveShadow=!0,qe.add(cn);const oi=new Nu(It,et);qe.add(oi),Ce.add(qe),Vt.add(Ce),he[rt].push(qe)}t.add(Vt)}const we=new ii(tt*1.13,.0044,12,36);we.rotateX(Math.PI/2),e.push(St,z,ft,st,It,Pt,ce,Et,we);const Ze=new ii(.024,.0048,10,24);Ze.rotateX(Math.PI/2);const mi=new Si(.0185,20,12,0,Math.PI*2,0,Math.PI*.55),zr=new Ai(.21,.21),As=new ii(.046,.006,10,28);As.rotateX(Math.PI/2);const Oa=new ws(.036,.039,.014,24),kr=new Si(.008,12,8),Fa=["#d61010","#1054f5"],Vi=[new Zt(15076364),new Zt(1335039)],Vr=[new Zt(16732748),new Zt(7254783)],Ba=[new Zt(16713736),new Zt(20223)],Gr=[new Zt(16716820),new Zt(1337087)],js=[new Zt(15861768),new Zt(544511)],tr=[_d(0),_d(1)],Rs=document.createElement("canvas");Rs.width=128,Rs.height=64;const ns=Rs.getContext("2d"),Cs=ns.createImageData(128,64);for(let rt=0;rt<64;rt++){const vt=Math.abs((rt+.5)/64-.5)*2,yt=Math.pow(Math.max(0,1-vt),2.35);for(let Vt=0;Vt<128;Vt++){const ve=Math.abs((Vt+.5)/128-.5)*2,Ae=Math.min(1,(1-ve)*4),me=Math.round(yt*Ae*255),le=(rt*128+Vt)*4;Cs.data[le]=Cs.data[le+1]=Cs.data[le+2]=255,Cs.data[le+3]=me}}ns.putImageData(Cs,0,0);const Ps=new en(Rs);Ps.colorSpace=He,e.push(Ps,tr[0],tr[1],Ze,mi,zr,As,Oa,kr);const Vn=new _n;t.add(Vn);let Tn=[],er=[],nr=[],On=[],I=[],W=-1;function nt(rt){Wr=rt,bl=!1;for(const vt of On)vt.dispose();On=[];for(const vt of I)vt.parent.remove(vt.mesh);I=[],Vn.clear(),s.length=0,Tn=[],er=[],nr=[],W=-1;for(const vt of wt)vt.linkedColorId=-1,vt.lastOpen=-1;for(const vt of Gt)vt.slot.locked||(vt.gateColorId=-1,vt.lastExt=-1,vt.mat.emissive.setHex(0),vt.mat.emissiveIntensity=0);for(const vt of rt.checkpoints){const yt=new Oe().setFromUnitVectors(p,vt.dir),Vt=vt.layer==="pipe"?xl:_e;if(vt.layer==="upper"){const le=Md(vt.label,vt.isFinish?"END":"CHK"),te=cc(vt.dir,Vt+.0022,vt.isFinish?.17:.112),Ft=new Fe({map:le,transparent:!0,roughness:.78,depthWrite:!1}),Re=new Wt(te,Ft);Vn.add(Re),s.push(Re),On.push(le,te,Ft)}const ve=new Fe({color:13683650,emissive:new Zt(0),emissiveIntensity:0,roughness:.24,metalness:.05});if(vt.isFinish){const le=new Wt(we,ve);le.position.copy(vt.dir).multiplyScalar(Vt+.0032),le.quaternion.copy(yt),Vn.add(le)}else{const le=new Wt(Ze,m);le.position.copy(vt.dir).multiplyScalar(Vt+.002),le.quaternion.copy(yt),Vn.add(le);const te=new Wt(mi,ve);te.position.copy(vt.dir).multiplyScalar(Vt-.001),te.quaternion.copy(yt),Vn.add(te)}On.push(ve);const Ae=new Qi({map:Ct,color:16747563,transparent:!0,opacity:0,blending:xc,depthWrite:!1}),me=new Wt(zr,Ae);me.position.copy(vt.dir).multiplyScalar(Vt+.02),me.quaternion.setFromUnitVectors(new U(0,0,1),vt.dir),Vn.add(me),s.push(me),On.push(Ae),Tn.push({checkpoint:vt,domeMat:ve,haloMat:Ae,haloMesh:me,localPos:vt.dir.clone().multiplyScalar(Vt+.07)})}for(const vt of rt.toggles){const yt=new Oe().setFromUnitVectors(p,vt.dir),Vt=Fa[vt.colorId],ve=Vi[vt.colorId],Ae=Q_(vt.label,Vt),me=cc(vt.dir,_e+.0022,.115),le=new Fe({map:Ae,transparent:!0,roughness:.75,depthWrite:!1}),te=new Wt(me,le);Vn.add(te),s.push(te),On.push(Ae,me,le);const Ft=new _n;Ft.position.copy(vt.dir).multiplyScalar(_e),Ft.quaternion.copy(yt),Vn.add(Ft);const Re=new Wt(As,m);Re.position.y=.002,Ft.add(Re);const Ee=new Fe({color:ve.clone(),emissive:ve.clone(),emissiveIntensity:.08,roughness:.42,metalness:.06}),Ce=new Wt(Oa,Ee),qe=.003;Ce.position.y=qe,Ce.castShadow=!0,Ce.receiveShadow=!0,Ft.add(Ce);const cn=new Fe({color:16777215,emissive:ve.clone(),emissiveIntensity:.35,roughness:.2}),oi=new Wt(kr,cn);oi.position.y=.007,Ce.add(oi),On.push(Ee,cn),er.push({pad:vt,capMesh:Ce,capMat:Ee,pipMat:cn,baseY:qe});const Gi=tr[vt.colorId],ir=Gr[vt.colorId];for(const is of vt.wallIds){const li=Gt[is];if(!li||li.slot.locked)continue;li.gateColorId=vt.colorId,li.lastExt=-1;const jh=yd(li.slot,In-5e-4,bn*.46,.0092,.015),Tl=new Fe({color:16777215,map:Gi,emissive:new Zt(16777215),emissiveMap:Gi,emissiveIntensity:2.35,roughness:.14,metalness:0,envMapIntensity:.45}),tu=new Wt(jh,Tl);li.mesh.add(tu),I.push({parent:li.mesh,mesh:tu}),On.push(jh,Tl);const eu=bd(li.slot,In+.0018,bn*1.48),wl=new Qi({map:Ps,color:ir.clone(),transparent:!0,opacity:.34,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),El=new Wt(eu,wl);li.mesh.add(El),I.push({parent:li.mesh,mesh:El}),s.push(El),On.push(eu,wl);const nu=yd(li.slot,_e+.0012,bn*.32,.0032,.017),Al=new Fe({color:16777215,map:Gi,emissive:new Zt(16777215),emissiveMap:Gi,emissiveIntensity:1.65,roughness:.16,metalness:0,envMapIntensity:.4}),Lp=new Wt(nu,Al);Vn.add(Lp),On.push(nu,Al);const iu=bd(li.slot,_e+.0016,bn*1.12),su=new Qi({map:Ps,color:ir.clone(),transparent:!0,opacity:.22,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),ru=new Wt(iu,su);Vn.add(ru),s.push(ru),On.push(iu,su),nr.push({colorId:vt.colorId,wallId:is,barMat:Tl,haloMat:wl,floorBarMat:Al})}for(const is of vt.shutterIds)wt[is]&&(wt[is].linkedColorId=vt.colorId,wt[is].lastOpen=-1)}a(),xn.setLevel(rt.level,rt.name,rt.nameJa,!1)}const Y=new sc(16742432,.72,.92,1.8),Z=new sc(3336342,0,.92,1.8),Ut=new sc(16183266,.24,1.4,1.3);Ut.position.set(.15,.1,.72),t.add(Y),t.add(Z),t.add(Ut);const Yt=document.createElement("canvas");Yt.width=256,Yt.height=256;const Lt=Yt.getContext("2d"),zt=Lt.createImageData(256,256);let Qt=1337;const oe=()=>(Qt=Qt*1664525+1013904223>>>0,Qt/4294967296);for(let rt=0;rt<256*256;rt++){const vt=Math.round(182+(oe()-.5)*44+(oe()-.5)*26),yt=rt*4;zt.data[yt]=zt.data[yt+1]=zt.data[yt+2]=Math.max(120,Math.min(245,vt)),zt.data[yt+3]=255}Lt.putImageData(zt,0,0);const ue=new en(Yt);ue.wrapS=ue.wrapT=$n,ue.repeat.set(3,3);const Kt=new Si(ri,40,28),pe=new Mi({color:10138810,metalness:0,roughness:.44,roughnessMap:ue,bumpMap:ue,bumpScale:.0011,clearcoat:.3,clearcoatRoughness:.32,reflectivity:.85,ior:1.52,sheen:.65,sheenRoughness:.52,sheenColor:new Zt(16055292),envMapIntensity:1.75});pe.onBeforeCompile=rt=>{rt.fragmentShader=rt.fragmentShader.replace("#include <dithering_fragment>",`
      // Subtle translucent internal subsurface scatter & luminous frosted glass edge
      vec3 mView = normalize(vViewPosition);
      float mNdotV = clamp(abs(dot(normalize(normal), mView)), 0.0, 1.0);
      float mRim = pow(1.0 - mNdotV, 2.1);
      float mCore = pow(mNdotV, 1.5);
      gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(0.84, 0.93, 0.95), mCore * 0.24);
      gl_FragColor.rgb += vec3(0.24, 0.30, 0.31) * mRim;
      #include <dithering_fragment>
      `)};const ke=new Wt(Kt,pe);ke.castShadow=!0,ke.receiveShadow=!0;const Le=new Si(ri+55e-5,18,10,0,Math.PI*2,0,.165),De=new Fe({color:2503222,roughness:.62,metalness:.05}),mn=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)];for(const rt of mn){const vt=new Wt(Le,De);vt.quaternion.setFromUnitVectors(p,rt),ke.add(vt)}t.add(ke),e.push(Kt,ue,pe,Le,De);const{roughnessMap:$t,bumpMap:gn,scratchMap:Te,scratchAlphaMap:Ri}=Z_();e.push($t,gn,Te,Ri);const nn=new Si(Qe,64,48),Is={value:1},wn=new Mi({color:16645369,roughness:.34,roughnessMap:$t,bumpMap:gn,bumpScale:.0026,metalness:0,clearcoat:1,clearcoatRoughness:.28,clearcoatRoughnessMap:$t,reflectivity:.92,ior:1.49,envMapIntensity:2.35,transparent:!0,opacity:1,depthWrite:!1});wn.onBeforeCompile=rt=>{rt.uniforms.uPlasticScale=Is,rt.fragmentShader=`uniform float uPlasticScale;
`+rt.fragmentShader.replace("#include <dithering_fragment>",`
        vec3 viewDir = normalize(vViewPosition);
        float ndotv = clamp(abs(dot(normalize(normal), viewDir)), 0.0, 1.0);
        float fresnel = pow(1.0 - ndotv, 2.55);
        float specEnergy = max(max(reflectedLight.directSpecular.r, reflectedLight.directSpecular.g), reflectedLight.directSpecular.b)
                         + max(max(reflectedLight.indirectSpecular.r, reflectedLight.indirectSpecular.g), reflectedLight.indirectSpecular.b) * 0.65;
        float smudgeLift = smoothstep(0.08, 0.28, roughnessFactor) * 0.22;
        float shellAlpha = clamp((0.022 + fresnel * 0.44 + specEnergy * 0.36 + smudgeLift) * uPlasticScale, 0.0, 0.84);
        gl_FragColor.a = shellAlpha;
        #include <dithering_fragment>
        `)};const ti=new Wt(nn,wn);ti.renderOrder=10,t.add(ti),n.push(ti),e.push(nn,wn);const Me=new Fe({color:16777215,map:Te,alphaMap:Ri,transparent:!0,opacity:.62,roughness:.2,metalness:.08,envMapIntensity:1.6,depthWrite:!1}),We=new Wt(nn,Me);We.scale.setScalar(1.0008),We.renderOrder=11,t.add(We),n.push(We),e.push(Me);const Fn=new ii(Qe+.001,.0038,10,120);Fn.rotateX(Math.PI/2);const Ve=new Mi({color:14209993,roughness:.32,metalness:0,transparent:!0,opacity:.42,depthWrite:!1}),Xe=new Wt(Fn,Ve);Xe.renderOrder=12,t.add(Xe),n.push(Xe),e.push(Fn,Ve);const xn=q_(),Hr=To(Qe+.0046,.36,1.32,.215,0),kh=new Mi({map:xn.map,roughnessMap:xn.roughnessMap,roughness:.68,metalness:.03,clearcoat:.3,clearcoatRoughness:.34,transparent:!0,depthWrite:!1,side:yi}),za=new Wt(Hr,kh);za.renderOrder=14,t.add(za),n.push(za),e.push(xn,Hr,kh);const ka=lc("secondary"),Vh=To(Qe+.0042,Math.PI+.18,.78,.17,-.075),Gh=new Mi({map:ka.map,roughnessMap:ka.roughnessMap,roughness:.44,metalness:0,clearcoat:.28,clearcoatRoughness:.35,transparent:!0,depthWrite:!1,side:yi}),Va=new Wt(Vh,Gh);Va.renderOrder=14,t.add(Va),n.push(Va),e.push(ka.map,ka.roughnessMap,Vh,Gh);const Ga=lc("north"),Hh=To(Qe+.0044,.34,.44,.135,0,1.16),Wh=new Mi({map:Ga.map,roughnessMap:Ga.roughnessMap,roughness:.42,metalness:0,clearcoat:.34,clearcoatRoughness:.3,transparent:!0,depthWrite:!1,side:yi}),Ha=new Wt(Hh,Wh);Ha.renderOrder=14,t.add(Ha),n.push(Ha),e.push(Ga.map,Ga.roughnessMap,Hh,Wh);const Wa=lc("south"),Xh=To(Qe+.0044,.34,.44,.135,0,-1.16),qh=new Mi({map:Wa.map,roughnessMap:Wa.roughnessMap,roughness:.42,metalness:0,clearcoat:.34,clearcoatRoughness:.3,transparent:!0,depthWrite:!1,side:yi}),Xa=new Wt(Xh,qh);Xa.renderOrder=14,t.add(Xa),n.push(Xa),e.push(Wa.map,Wa.roughnessMap,Xh,qh),a();const Yh=(_e+25e-5)/In;function bp(rt){for(let vt=0;vt<Gt.length;vt++){const yt=Gt[vt],Vt=yt.slot.locked?1:rt[yt.slot.id];if(Math.abs(Vt-yt.lastExt)<1e-4)continue;yt.lastExt=Vt;const ve=Yh+(1-Yh)*Vt;if(yt.mesh.scale.setScalar(ve),yt.mesh.visible=yt.slot.locked||Vt>.015,yt.mesh.castShadow=Vt>.08,!yt.slot.locked){const Ae=Math.pow(Vt,.65);yt.mat.color.lerpColors(l,h,Ae),yt.mat.roughness=.78+(.48-.78)*Ae,yt.gateColorId>=0?(yt.mat.emissive.copy(js[yt.gateColorId]),yt.mat.emissiveIntensity=.14*Ae):(yt.mat.emissive.setHex(0),yt.mat.emissiveIntensity=0),yt.arrowMat&&(yt.arrowMat.opacity=yt.gateColorId>=0?0:Math.max(0,(Vt-.35)/.65))}}}function Tp(rt){for(let vt=0;vt<wt.length;vt++){const yt=wt[vt],Vt=rt[yt.port.id];if(Math.abs(Vt-yt.lastOpen)<1e-4)continue;yt.lastOpen=Vt;const ve=Vt*.96,Ae=1-Vt*.42;for(let me=0;me<yt.pivots.length;me++){const le=yt.pivots[me];le.rotation.y=ve,le.scale.set(Ae,1,Ae),le.visible=Vt<.985}if(yt.linkedColorId>=0){const me=Vr[yt.linkedColorId],le=Ba[yt.linkedColorId],te=Gr[yt.linkedColorId];yt.outerNeonMesh.visible=!0,yt.outerNeonMat.color.copy(me),yt.outerNeonMat.emissive.copy(le),yt.outerNeonMat.emissiveIntensity=1.9+Vt*.9,yt.outerHaloMesh.visible=!0,yt.outerHaloMat.color.copy(te),yt.outerHaloMat.opacity=.2+Vt*.14,yt.ringLedMat.color.copy(me),yt.ringLedMat.emissive.copy(le),yt.ringLedMat.emissiveIntensity=1.3+Vt*1.1}else yt.outerNeonMesh.visible=!1,yt.outerHaloMesh.visible=!1,yt.ringLedMat.emissive.setHex(3073692),yt.ringLedMat.emissiveIntensity=Vt*1.55,yt.ringLedMat.color.setHex(Vt>.35?13828077:10196104)}}const Zh=[-1,-1];let $h=-1,Sl=!1,Ds=0,Kh=-1;function wp(rt,vt){const yt=[rt,vt];for(let Vt=0;Vt<2;Vt++){const ve=Math.max(0,Math.min(1,yt[Vt]));if(Math.abs(ve-Zh[Vt])<1e-4)continue;Zh[Vt]=ve;const Ae=ve*.96,me=1-ve*.42,le=he[Vt];for(let te=0;te<le.length;te++){const Ft=le[te];Ft.rotation.y=Ae,Ft.scale.set(me,1,me),Ft.visible=ve<.985}}}function Ep(rt,vt,yt=0,Vt=-1){$h=rt,Sl=vt,Ds=yt,Kh=Vt}const Jh=new Zt(16739864),yl=new Zt(2941841),qa=new Zt(4649125),Qh=new Zt(2808262),Ap=new Zt(7236196);let Wr=null,bl=!1;function Rp(rt,vt,yt,Vt,ve,Ae){Wr&&Vt!==bl&&(bl=Vt,xn.setLevel(Wr.level,Wr.name,Wr.nameJa,Vt)),xn.update(rt);let me=-1;for(let te=0;te<Tn.length;te++)vt[te]&&(me=te);me!==-1&&(W=me);for(let te=0;te<Tn.length;te++){const Ft=Tn[te],Re=vt[te];if(Vt){const Ee=.5+.5*Math.sin(rt*3.4-te*.9);Ft.domeMat.color.setHex(13828075),Ft.domeMat.emissive.copy(qa),Ft.domeMat.emissiveIntensity=2.2+Ee*2,Ft.haloMat.color.copy(qa),Ft.haloMat.opacity=.38+Ee*.34,Ft.haloMesh.scale.setScalar(1+Ee*.24)}else if(Re){const Ee=.5+.5*Math.sin(rt*1.6+te*1.3),Ce=Ft.checkpoint.layer==="pipe";Ft.domeMat.color.setHex(13828075),Ft.domeMat.emissive.copy(yl),Ft.domeMat.emissiveIntensity=(Ce?1.55:2.1)+Ee*.4,Ft.haloMat.color.copy(yl),Ft.haloMat.opacity=(Ce?.24:.4)+Ee*.08,Ft.haloMesh.scale.setScalar((Ce?.78:1)+Ee*.08)}else if(te===yt){const Ee=.5+.5*Math.sin(rt*(Ft.checkpoint.isFinish&&Sl?6.2:3.6)),Ce=Ft.checkpoint.layer==="pipe",qe=Ft.checkpoint.isFinish&&Sl,cn=qe?qa:Ce?Qh:Jh;Ft.domeMat.color.setHex(qe?15925240:Ce?13697016:16769474),Ft.domeMat.emissive.copy(cn),Ft.domeMat.emissiveIntensity=qe?3.4+Ds*2.1+Ee*1.9:(Ce?1.7:2.2)+Ee*(Ce?1.2:2.1),Ft.haloMat.color.copy(cn),Ft.haloMat.opacity=qe?.58+Ee*.28:(Ce?.28:.46)+Ee*(Ce?.2:.36),Ft.haloMesh.scale.setScalar(qe?1.18+Ee*.22:(Ce?.82:1.02)+Ee*.26)}else Ft.domeMat.color.setHex(13157047),Ft.domeMat.emissive.copy(Ap),Ft.domeMat.emissiveIntensity=.05,Ft.haloMat.opacity=0,Ft.haloMesh.scale.setScalar(.5)}for(let te=0;te<er.length;te++){const Ft=er[te],Re=(ve&1<<Ft.pad.id)!==0,Ee=Ae[Ft.pad.id]||0,Ce=Ft.pad.id===Kh,qe=Ce?.0016+Ds*.0034:0;Ft.capMesh.position.y=Ft.baseY-Ee*.0065-(Re?.0028:0)-qe;const cn=.5+.5*Math.sin(rt*(Ce?6.2:2.8)+te),oi=Ce?.45+Ds*.85+cn*.35:0;Ft.capMat.emissiveIntensity=(Re?.72+cn*.24:.22+cn*.08)+oi,Ft.pipMat.emissiveIntensity=(Re?3.2:.9+cn*.4)+oi*1.8}for(let te=0;te<nr.length;te++){const Ft=nr[te],Re=.5+.5*Math.sin(rt*2.6+Ft.colorId*2.1);Ft.barMat.emissiveIntensity=2+Re*.7,Ft.haloMat.opacity=.28+Re*.14,Ft.floorBarMat.emissiveIntensity=1.45+Re*.45}const le=.5+.5*Math.sin(rt*6.4);for(let te=0;te<wt.length;te++){const Ft=wt[te],Re=Ft.port.id===$h&&Ft.lastOpen>.5;if(Ft.linkedColorId>=0){const Ee=.5+.5*Math.sin(rt*2.6+Ft.linkedColorId*2.1),Ce=Ft.lastOpen>0?Ft.lastOpen*.75:0,qe=Re?1.35+Ds*1.65+le*.95:0;Ft.outerNeonMat.emissiveIntensity=1.85+Ce+Ee*.55+qe,Ft.outerHaloMat.opacity=Math.min(.62,.18+(Ft.lastOpen>0?Ft.lastOpen*.12:0)+Ee*.08+(Re?.16+Ds*.1:0)),Ft.ringLedMat.emissiveIntensity=1.3+Math.max(0,Ft.lastOpen)*1.1+qe*1.2}else if(Re)Ft.ringLedMat.color.setHex(15925241),Ft.ringLedMat.emissive.setHex(3862690),Ft.ringLedMat.emissiveIntensity=2.85+Ds*2.1+le*1.65;else{const Ee=Math.max(0,Ft.lastOpen);Ft.ringLedMat.emissive.setHex(3073692),Ft.ringLedMat.emissiveIntensity=Ee*1.55,Ft.ringLedMat.color.setHex(Ee>.35?13828077:10196104)}}if(Vt&&Tn.length>0){const te=Math.floor(rt*1.8)%Tn.length;Y.color.copy(qa),Y.position.copy(Tn[te].localPos),Y.intensity=1.25,Z.intensity=0}else{if(yt>=0&&yt<Tn.length){const te=.5+.5*Math.sin(rt*3.6),Ft=Tn[yt].checkpoint.layer==="pipe",Re=Ft?Qh:Jh;Y.color.copy(Re),Y.position.copy(Tn[yt].localPos),Y.intensity=(Ft?.65:.9)+te*.65}else Y.intensity=0;if(W>=0&&W<Tn.length&&vt[W]){const te=Tn[W].checkpoint.layer==="pipe";Z.color.copy(yl),Z.position.copy(Tn[W].localPos),Z.intensity=te?.52:.78}else Z.intensity=0}}function Cp(rt){Is.value=rt}function Pp(rt){Me.opacity=.62*rt,wn.bumpScale=.0022*rt,wn.roughness=.045+.28*rt,wn.clearcoatRoughness=.04+.24*rt}function Ip(rt){ti.visible=rt,We.visible=rt,Xe.visible=rt,za.visible=rt,Va.visible=rt,Ha.visible=rt,Xa.visible=rt}function Dp(){for(const rt of On)rt.dispose();for(const rt of e)rt.dispose()}return{root:t,ballMesh:ke,plasticShell:ti,plasticMat:wn,scratchOverlayMesh:We,scratchOverlayMat:Me,aoExcluded:r,applyWallExtensions:bp,applyShutterOpenings:Tp,applyPoleShutters:wp,setReadyHole:Ep,setLevelVisuals:nt,triggerLedIntro:()=>xn.restartIntro(),clearLedTape:()=>xn.clearToBlank(),updateLeds:Rp,setPlasticOpacity:Cp,setScratchStrength:Pp,setOuterShellVisible:Ip,dispose:Dp}}const aa=Math.PI*2;function hS(i,t,e){const n=e-t,s=((i-t)%aa+aa)%aa;if(s<=n)return t+s;const r=s-n,a=aa-s;return r<a?e:t}function uS(i,t,e){if(t.kind==="lat"){let c=Math.atan2(i.z,i.x);c<0&&(c+=aa);const l=hS(c,t.thetaStart,t.thetaEnd);return Ie(t.phiStart,l,e)}const n=Math.cos(t.thetaStart),s=Math.sin(t.thetaStart),r=Math.max(0,i.x*n+i.z*s),a=Math.atan2(r,i.y),o=Math.max(t.phiStart,Math.min(t.phiEnd,a));return Ie(o,t.thetaStart,e)}function wo(i,t,e,n){const s=Math.max(-1,Math.min(1,i.dot(t))),r=Math.acos(s),a=Math.sin(r);if(a<1e-5)return n.copy(i);const o=Math.sin((1-e)*r)/a,c=Math.sin(e*r)/a;return n.set(i.x*o+t.x*c,i.y*o+t.y*c,i.z*o+t.z*c).normalize()}class dS{constructor(t,e){this.grid=t,this.level=e,this.cleared=e.checkpoints.map(()=>!1),this.reset()}grid;dir=new U(0,1,0);vel=new U(0,0,0);ballQuat=new Oe;layer="upper";radius=Ke;cleared=[];allCleared=!1;speed=0;readyPortal={kind:"none"};readyPortalDwell=0;level;minWallAngle=bn*1.03+ri/Ke;minPostAngle=bn*1.12+ri/Ke;gravityMag=7.4;linearDamp=1.85;restitution=.24;maxSpeed=3.35;restActivateSec=1;activeShutterId=-1;lastEntryShutterId=-1;suppressDwellShutterId=-1;suppressDwellToggleId=-1;readyPortalKey="";readyDwellSec=0;transT=0;transStartDir=new U;portalCooldown=0;pipeEdgeId=0;pipeT=0;pipeSpeed=0;toggleMask=0;toggleCooldown=0;invQuat=new Oe;localGravity=new U;gTan=new U;closest=new U;normal=new U;rollAxis=new U;rollDelta=new Oe;tmpA=new U;tmpB=new U;tmpTan=new U;setLevel(t,e=!1){this.level=t,this.cleared=t.checkpoints.map(()=>!1),this.allCleared=!1,this.toggleMask=0,this.toggleCooldown=0,this.readyPortal={kind:"none"},this.readyPortalDwell=0,this.readyPortalKey="",this.readyDwellSec=0,this.suppressDwellShutterId=-1,this.suppressDwellToggleId=-1,e&&this.reset()}reset(){this.dir.copy(this.grid.cells[this.level.startCellId].centerDir).normalize(),this.vel.set(0,0,0),this.ballQuat.identity(),this.layer="upper",this.radius=Ke,this.activeShutterId=-1,this.lastEntryShutterId=-1,this.suppressDwellShutterId=-1,this.suppressDwellToggleId=-1,this.transT=0,this.portalCooldown=0,this.toggleMask=0,this.toggleCooldown=0,this.cleared=this.level.checkpoints.map(()=>!1),this.allCleared=!1,this.speed=0,this.readyPortal={kind:"none"},this.readyPortalDwell=0,this.readyPortalKey="",this.readyDwellSec=0}enterPipeAtShutter(t){const e=this.grid.shutters[t];if(!e)return;const n=this.grid.pipeNodes[e.pipeNodeId],s=n.edgeIds[0],r=this.grid.pipeEdges[s];this.layer="pipe",this.radius=ln,this.lastEntryShutterId=t,this.suppressDwellShutterId=t,this.pipeEdgeId=s,this.pipeT=r.nodeA===n.id?.02:.98,this.pipeSpeed=r.nodeA===n.id?.55:-.55,this.dir.copy(n.dir),this.vel.set(0,0,0),this.portalCooldown=.7,this.readyPortal={kind:"none"},this.readyPortalDwell=0,this.readyPortalKey="",this.readyDwellSec=0}clearReadyDwell(){this.readyPortalDwell=0,this.readyPortalKey="",this.readyDwellSec=0}updateReadyPortalDwell(t,e,n){const s=this.readyPortal;if(s.kind==="none"){this.clearReadyDwell();return}if((s.kind==="shutter-enter"||s.kind==="shutter-exit")&&s.shutterId===this.suppressDwellShutterId){this.clearReadyDwell();return}if(s.kind==="toggle"&&s.toggleId===this.suppressDwellToggleId){this.clearReadyDwell();return}const r=s.kind==="finish-drop"?"finish":s.kind==="toggle"?`toggle:${s.toggleId}`:`${s.kind}:${s.shutterId}`;r!==this.readyPortalKey&&(this.readyPortalKey=r,this.readyDwellSec=0);const a=s.kind==="shutter-exit"?.48:.44;this.speed<=a?this.readyDwellSec+=t:this.readyDwellSec=Math.max(0,this.readyDwellSec-t*2.5),this.readyPortalDwell=Math.min(1,this.readyDwellSec/this.restActivateSec),this.readyDwellSec>=this.restActivateSec&&this.activateReadyPortal(e,n)}activateReadyPortal(t,e){const n=this.readyPortal;if(n.kind==="none")return!1;if(n.kind==="shutter-enter")return this.layer!=="upper"||this.portalCooldown>0||t[n.shutterId]<.72?!1:(this.layer="dropping",this.activeShutterId=n.shutterId,this.transT=0,this.transStartDir.copy(this.dir),this.readyPortal={kind:"none"},this.clearReadyDwell(),e?.onDropIntoPipe?.(n.shutterId),!0);if(n.kind==="shutter-exit")return this.layer!=="pipe"||this.portalCooldown>0||t[n.shutterId]<.72?!1:(this.layer="rising",this.activeShutterId=n.shutterId,this.transT=0,this.transStartDir.copy(this.dir),this.readyPortal={kind:"none"},this.clearReadyDwell(),e?.onEmergeFromPipe?.(n.shutterId),!0);if(n.kind==="finish-drop"){if(this.layer!=="upper"||this.allCleared)return!1;const s=this.getNextCheckpointIndex();return s<0||!this.level.checkpoints[s].isFinish?!1:(this.cleared[s]=!0,this.allCleared=this.cleared.every(Boolean),this.readyPortal={kind:"none"},this.clearReadyDwell(),e?.onCheckpoint?.(s,this.allCleared),!0)}return n.kind==="toggle"?this.layer!=="upper"||this.toggleCooldown>0?!1:(this.toggleCooldown=.38,this.suppressDwellToggleId=n.toggleId,this.toggleMask^=1<<n.toggleId,this.clearReadyDwell(),e?.onToggle?.(n.toggleId,(this.toggleMask&1<<n.toggleId)!==0),!0):!1}getNextCheckpointIndex(){for(let t=0;t<this.cleared.length;t++)if(!this.cleared[t])return t;return-1}getClearedCount(){let t=0;for(const e of this.cleared)e&&t++;return t}edgeTangentAt(t,e,n){const s=this.grid.pipeNodes[t.nodeA].dir,r=this.grid.pipeNodes[t.nodeB].dir,a=Math.max(0,e-.005),o=Math.min(1,e+.005);return wo(s,r,a,this.tmpA),wo(s,r,o,this.tmpB),n.subVectors(this.tmpB,this.tmpA).normalize()}pickNextPipeBranch(t,e,n){const s=this.grid.pipeNodes[t],r=this.localGravity.dot(s.dir);this.gTan.copy(this.localGravity).addScaledVector(s.dir,-r);const a=this.tmpA.copy(n).multiplyScalar(.75).addScaledVector(this.gTan,.22),o=a.length();o>1e-5&&a.multiplyScalar(1/o);let c=e,l=this.grid.pipeEdges[e].nodeA===t,h=-2;for(const p of s.edgeIds){const g=this.grid.pipeEdges[p],m=g.nodeA===t,x=this.grid.pipeNodes[m?g.nodeB:g.nodeA].dir;this.tmpB.copy(x).addScaledVector(s.dir,-x.dot(s.dir)).normalize();let S=this.tmpB.dot(a);p===e&&s.edgeIds.length>1&&(S-=.28),S>h&&(h=S,c=p,l=m)}return{edgeId:c,atStart:l,alignment:h}}step(t,e,n,s,r,a){const o=Math.min(t,.04);if(this.portalCooldown>0&&(this.portalCooldown=Math.max(0,this.portalCooldown-o)),this.toggleCooldown>0&&(this.toggleCooldown=Math.max(0,this.toggleCooldown-o)),this.invQuat.copy(e).invert(),this.localGravity.copy(n).normalize().multiplyScalar(this.gravityMag).applyQuaternion(this.invQuat),this.layer==="dropping"){this.readyPortal={kind:"none"};const d=this.grid.shutters[this.activeShutterId];this.transT=Math.min(1,this.transT+o/.19);const u=this.transT*this.transT;if(this.dir.copy(this.transStartDir).lerp(d.dir,Math.min(1,this.transT*1.4)).normalize(),this.radius=Ke+(ln-Ke)*u,this.speed=1.4,this.transT>=1){const _=this.grid.pipeNodes[d.pipeNodeId],v=this.pickNextPipeBranch(_.id,_.edgeIds[0],this.vel);this.pipeEdgeId=v.edgeId,this.pipeT=v.atStart?.01:.99,this.pipeSpeed=v.atStart?.34:-.34,this.lastEntryShutterId=d.id,this.suppressDwellShutterId=d.id,this.layer="pipe",this.radius=ln,this.portalCooldown=.38}return}if(this.layer==="rising"){this.readyPortal={kind:"none"},this.clearReadyDwell();const d=this.grid.shutters[this.activeShutterId];this.transT=Math.min(1,this.transT+o/.21);const u=1-Math.pow(1-this.transT,2);if(this.dir.copy(this.transStartDir).lerp(d.dir,Math.min(1,this.transT*1.5)).normalize(),this.radius=ln+(Ke-ln)*u,this.speed=1.1,this.transT>=1){const _=this.localGravity.dot(d.dir);this.gTan.copy(this.localGravity).addScaledVector(d.dir,-_),this.dir.copy(d.dir),this.gTan.lengthSq()>1e-4?(this.gTan.normalize(),this.vel.copy(this.gTan).multiplyScalar(.18)):this.vel.set(0,0,0),this.layer="upper",this.radius=Ke,this.lastEntryShutterId=-1,this.suppressDwellShutterId=d.id,this.portalCooldown=.42}return}if(this.layer==="pipe"){const u=o/6;for(let v=0;v<6;v++){const f=this.grid.pipeEdges[this.pipeEdgeId],T=this.grid.pipeNodes[f.nodeA],b=this.grid.pipeNodes[f.nodeB],M=T.dir,y=b.dir;wo(M,y,this.pipeT,this.dir),this.edgeTangentAt(f,this.pipeT,this.tmpTan);const P=this.localGravity.dot(this.tmpTan)*1.12;if(this.pipeSpeed+=P*u,this.portalCooldown<=0){const w=Math.abs(this.pipeSpeed),A=Math.max(.14,1-w/1.75),L=this.pipeT*f.arcLen,D=(1-this.pipeT)*f.arcLen;if(T.shutterId>=0&&r[T.shutterId]>.72&&L<.115){const C=Math.sin(Math.min(1,L/.115)*Math.PI);this.pipeSpeed-=2.65*A*C*u,L<.072&&w<.92&&(this.pipeSpeed*=Math.exp(-3.8*u))}else if(b.shutterId>=0&&r[b.shutterId]>.72&&D<.115){const C=Math.sin(Math.min(1,D/.115)*Math.PI);this.pipeSpeed+=2.65*A*C*u,D<.072&&w<.92&&(this.pipeSpeed*=Math.exp(-3.8*u))}}if(this.pipeSpeed*=Math.exp(-.92*u),this.pipeSpeed=Math.max(-3.6,Math.min(3.6,this.pipeSpeed)),this.pipeT+=this.pipeSpeed/Math.max(.08,f.arcLen)*u,this.pipeT<=0||this.pipeT>=1){const R=this.pipeT<=0,w=R?f.nodeA:f.nodeB,A=this.grid.pipeNodes[w];this.pipeT=R?0:1,this.dir.copy(A.dir),A.shutterId!==this.lastEntryShutterId&&(this.lastEntryShutterId=-1);const L=A.shutterId>=0&&r[A.shutterId]>.72,D=this.tmpTan.clone().multiplyScalar(this.pipeSpeed>=0?1:-1),C=this.pickNextPipeBranch(w,this.pipeEdgeId,D);if(C.edgeId!==this.pipeEdgeId){const F=this.localGravity.dot(A.dir);if(this.gTan.copy(this.localGravity).addScaledVector(A.dir,-F),L&&this.portalCooldown<=0&&Math.abs(this.pipeSpeed)<.32&&this.gTan.length()<2.2)this.pipeSpeed*=.25;else{const O=Math.max(.18,Math.abs(this.pipeSpeed)*Math.max(.35,C.alignment));this.pipeEdgeId=C.edgeId,this.pipeT=C.atStart?.008:.992,this.pipeSpeed=C.atStart?O:-O}}else L?(Math.abs(this.pipeSpeed)>.65&&a?.onWallHit&&a.onWallHit(Math.min(.45,Math.abs(this.pipeSpeed)/3.8)),this.pipeSpeed=-this.pipeSpeed*.08):(Math.abs(this.pipeSpeed)>.45&&a?.onWallHit&&a.onWallHit(Math.min(.65,Math.abs(this.pipeSpeed)/3.2)),this.pipeSpeed=-this.pipeSpeed*.28)}}const _=this.grid.pipeEdges[this.pipeEdgeId];if(wo(this.grid.pipeNodes[_.nodeA].dir,this.grid.pipeNodes[_.nodeB].dir,this.pipeT,this.dir),this.edgeTangentAt(_,this.pipeT,this.tmpTan),this.vel.copy(this.tmpTan).multiplyScalar(this.pipeSpeed),this.speed=Math.abs(this.pipeSpeed),this.radius=ln,this.speed>1e-4&&(this.rollAxis.crossVectors(this.dir,this.vel),this.rollAxis.lengthSq()>1e-10&&(this.rollAxis.normalize(),this.rollDelta.setFromAxisAngle(this.rollAxis,this.speed*o*(ln/ri)),this.ballQuat.premultiply(this.rollDelta).normalize())),this.suppressDwellShutterId>=0){const v=this.grid.shutters[this.suppressDwellShutterId];v&&Math.acos(Math.max(-1,Math.min(1,this.dir.dot(v.dir))))>.145&&(this.suppressDwellShutterId=-1)}if(this.readyPortal={kind:"none"},this.portalCooldown<=0){let v=.112,f=-1;for(let T=0;T<this.grid.shutters.length;T++){if(r[T]<.72)continue;const b=this.grid.shutters[T],M=Math.max(-1,Math.min(1,this.dir.dot(b.dir))),y=Math.acos(M);y<v&&(v=y,f=b.id)}f>=0&&(this.readyPortal={kind:"shutter-exit",shutterId:f})}this.checkCheckpoints("pipe",a),this.updateReadyPortalDwell(o,r,a);return}const c=8,l=o/c;let h=0;const p=this.grid.walls,g=this.grid.posts,m=this.grid.shutters,x=this.allCleared?-1:this.getNextCheckpointIndex(),S=x>=0&&this.level.checkpoints[x]?.isFinish?this.level.checkpoints[x]:null;for(let d=0;d<c;d++){const u=this.localGravity.dot(this.dir);if(this.gTan.copy(this.localGravity).addScaledVector(this.dir,-u),this.vel.addScaledVector(this.gTan,l),this.vel.multiplyScalar(Math.exp(-this.linearDamp*l)),this.vel.addScaledVector(this.dir,-this.vel.dot(this.dir)),this.portalCooldown<=0){const f=this.vel.length(),T=Math.max(.14,1-f/1.65),b=Ms+.022;for(let M=0;M<m.length;M++){if(r[M]<.72)continue;const y=m[M],P=Math.max(-1,Math.min(1,this.dir.dot(y.dir))),R=Math.acos(P);if(R<b){if(this.tmpA.copy(y.dir).addScaledVector(this.dir,-P),this.tmpA.lengthSq()>1e-8){this.tmpA.normalize();const w=Math.sin(Math.min(1,R/b)*Math.PI);this.vel.addScaledVector(this.tmpA,2.55*T*w*l)}R<Ms*.92&&f<.95&&this.vel.multiplyScalar(Math.exp(-3.6*l));break}}if(S){const y=Math.max(-1,Math.min(1,this.dir.dot(S.dir))),P=Math.acos(y);if(P<.105){if(this.tmpA.copy(S.dir).addScaledVector(this.dir,-y),this.tmpA.lengthSq()>1e-8){this.tmpA.normalize();const R=Math.sin(Math.min(1,P/.105)*Math.PI);this.vel.addScaledVector(this.tmpA,2.6*T*R*l)}P<.082&&f<.95&&this.vel.multiplyScalar(Math.exp(-3.6*l))}}}const _=this.level.toggles;if(_.length>0&&this.toggleCooldown<=0){const f=this.vel.length(),T=Math.max(.14,1-f/1.65),b=.095;for(let M=0;M<_.length;M++){const y=_[M],P=Math.max(-1,Math.min(1,this.dir.dot(y.dir))),R=Math.acos(P);if(R<b){if(this.tmpA.copy(y.dir).addScaledVector(this.dir,-P),this.tmpA.lengthSq()>1e-8){this.tmpA.normalize();const w=Math.sin(Math.min(1,R/b)*Math.PI);this.vel.addScaledVector(this.tmpA,2.45*T*w*l)}R<.072&&f<.95&&this.vel.multiplyScalar(Math.exp(-3.6*l));break}}}const v=this.vel.length();v>this.maxSpeed&&this.vel.multiplyScalar(this.maxSpeed/v),this.dir.addScaledVector(this.vel,l).normalize(),this.vel.addScaledVector(this.dir,-this.vel.dot(this.dir));for(let f=0;f<2;f++){for(let T=0;T<g.length;T++){const b=g[T].dir,M=Math.max(-1,Math.min(1,this.dir.dot(b))),y=Math.acos(M);if(y<this.minPostAngle){this.normal.copy(this.dir).addScaledVector(b,-M);const P=this.normal.length();if(P>1e-6&&(this.normal.multiplyScalar(1/P),this.dir.addScaledVector(this.normal,this.minPostAngle-y).normalize(),this.normal.addScaledVector(this.dir,-this.normal.dot(this.dir)),this.normal.lengthSq()>1e-8)){this.normal.normalize();const R=this.vel.dot(this.normal);R<0&&(-R>h&&(h=-R),this.vel.addScaledVector(this.normal,-(1+this.restitution)*R))}}}for(let T=0;T<p.length;T++){const b=p[T],M=b.locked?1:s[T];if(M<.22)continue;uS(this.dir,b,this.closest);const y=Math.max(-1,Math.min(1,this.dir.dot(this.closest))),P=Math.acos(y),R=this.minWallAngle*Math.min(1,.55+M*.45);if(P<R){this.normal.copy(this.dir).addScaledVector(this.closest,-y);let w=this.normal.length();if(w<1e-6&&(this.normal.set(1,0,0).cross(this.dir),this.normal.lengthSq()<1e-6&&this.normal.set(0,1,0).cross(this.dir),w=this.normal.length()),w>1e-6&&(this.normal.multiplyScalar(1/w),this.dir.addScaledVector(this.normal,R-P).normalize(),this.normal.addScaledVector(this.dir,-this.normal.dot(this.dir)),this.normal.lengthSq()>1e-8)){this.normal.normalize();const A=this.vel.dot(this.normal);A<0&&(-A>h&&M>.75&&(h=-A),this.vel.addScaledVector(this.normal,-(1+this.restitution)*A),this.vel.multiplyScalar(.996))}}}}}if(this.radius=Ke,this.speed=this.vel.length(),this.speed>1e-4&&(this.rollAxis.crossVectors(this.dir,this.vel),this.rollAxis.lengthSq()>1e-10)){this.rollAxis.normalize();const d=this.speed*o*(Ke/ri);this.rollDelta.setFromAxisAngle(this.rollAxis,d),this.ballQuat.premultiply(this.rollDelta).normalize()}if(h>.28&&a?.onWallHit&&a.onWallHit(Math.min(1,(h-.28)/2.2)),this.checkCheckpoints("upper",a),this.suppressDwellShutterId>=0){const d=this.grid.shutters[this.suppressDwellShutterId];d&&Math.acos(Math.max(-1,Math.min(1,this.dir.dot(d.dir))))>Ms+.042&&(this.suppressDwellShutterId=-1)}if(this.suppressDwellToggleId>=0){const d=this.level.toggles[this.suppressDwellToggleId];(!d||Math.acos(Math.max(-1,Math.min(1,this.dir.dot(d.dir))))>.125)&&(this.suppressDwellToggleId=-1)}if(this.readyPortal={kind:"none"},this.portalCooldown<=0){let d=Ms*1.02,u=-1;for(let _=0;_<m.length;_++){if(r[_]<.72)continue;const v=m[_],f=Math.max(-1,Math.min(1,this.dir.dot(v.dir))),T=Math.acos(f);T<d&&(d=T,u=v.id)}if(u>=0)this.readyPortal={kind:"shutter-enter",shutterId:u};else if(!this.allCleared){const _=this.getNextCheckpointIndex(),v=_>=0?this.level.checkpoints[_]:null;if(v&&v.isFinish){const f=Math.max(-1,Math.min(1,this.dir.dot(v.dir)));Math.acos(f)<.112&&(this.readyPortal={kind:"finish-drop"})}}}if(this.readyPortal.kind==="none"&&this.toggleCooldown<=0)for(let d=0;d<this.level.toggles.length;d++){const u=this.level.toggles[d],_=Math.max(-1,Math.min(1,this.dir.dot(u.dir)));if(Math.acos(_)<.095){this.readyPortal={kind:"toggle",toggleId:u.id,label:u.label};break}}this.updateReadyPortalDwell(o,r,a)}checkCheckpoints(t,e){if(this.allCleared)return;const n=this.getNextCheckpointIndex();if(n<0)return;const s=this.level.checkpoints[n];if(s.layer!==t||s.isFinish)return;const r=t==="pipe"?.145:.115,a=Math.max(-1,Math.min(1,this.dir.dot(s.dir)));Math.acos(a)<r&&(this.cleared[n]=!0,this.allCleared=this.cleared.every(Boolean),e?.onCheckpoint?.(n,this.allCleared))}}class Kf{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fS=new Nh(-1,1,1,-1,0,1);class pS extends Se{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}}const mS=new pS;class Jf{constructor(t){this._mesh=new Wt(mS,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fS)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}const Eo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new At},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new be},cameraProjectionMatrixInverse:{value:new be},cameraWorldMatrix:{value:new be},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ao={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},hc={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function gS(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=xS(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],c=2*Math.PI*o/n,l=new U(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new dl(s,t,t);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}function xS(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const Ro={defines:{SAMPLES:16,SAMPLE_VECTORS:Qf(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new At},cameraProjectionMatrixInverse:{value:new be},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Qf(i,t,e){const n=vS(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function vS(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new U(Math.cos(r),Math.sin(r),a))}return n}const uc={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class MS{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,c=Math.floor(t+o),l=Math.floor(e+o),h=(3-Math.sqrt(3))/6,p=(c+l)*h,g=c-p,m=l-p,x=t-g,S=e-m;let d,u;x>S?(d=1,u=0):(d=0,u=1);const _=x-d+h,v=S-u+h,f=x-1+2*h,T=S-1+2*h,b=c&255,M=l&255,y=this.perm[b+this.perm[M]]%12,P=this.perm[b+d+this.perm[M+u]]%12,R=this.perm[b+1+this.perm[M+1]]%12;let w=.5-x*x-S*S;w<0?n=0:(w*=w,n=w*w*this._dot(this.grad3[y],x,S));let A=.5-_*_-v*v;A<0?s=0:(A*=A,s=A*A*this._dot(this.grad3[P],_,v));let L=.5-f*f-T*T;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[R],f,T)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const l=(t+e+n)*.3333333333333333,h=Math.floor(t+l),p=Math.floor(e+l),g=Math.floor(n+l),m=1/6,x=(h+p+g)*m,S=h-x,d=p-x,u=g-x,_=t-S,v=e-d,f=n-u;let T,b,M,y,P,R;_>=v?v>=f?(T=1,b=0,M=0,y=1,P=1,R=0):_>=f?(T=1,b=0,M=0,y=1,P=0,R=1):(T=0,b=0,M=1,y=1,P=0,R=1):v<f?(T=0,b=0,M=1,y=0,P=1,R=1):_<f?(T=0,b=1,M=0,y=0,P=1,R=1):(T=0,b=1,M=0,y=1,P=1,R=0);const w=_-T+m,A=v-b+m,L=f-M+m,D=_-y+2*m,C=v-P+2*m,F=f-R+2*m,O=_-1+3*m,q=v-1+3*m,V=f-1+3*m,X=h&255,k=p&255,$=g&255,dt=this.perm[X+this.perm[k+this.perm[$]]]%12,B=this.perm[X+T+this.perm[k+b+this.perm[$+M]]]%12,j=this.perm[X+y+this.perm[k+P+this.perm[$+R]]]%12,K=this.perm[X+1+this.perm[k+1+this.perm[$+1]]]%12;let ot=.6-_*_-v*v-f*f;ot<0?s=0:(ot*=ot,s=ot*ot*this._dot3(this.grad3[dt],_,v,f));let et=.6-w*w-A*A-L*L;et<0?r=0:(et*=et,r=et*et*this._dot3(this.grad3[B],w,A,L));let Mt=.6-D*D-C*C-F*F;Mt<0?a=0:(Mt*=Mt,a=Mt*Mt*this._dot3(this.grad3[j],D,C,F));let Xt=.6-O*O-q*q-V*V;return Xt<0?o=0:(Xt*=Xt,o=Xt*Xt*this._dot3(this.grad3[K],O,q,V)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,p,g,m,x;const S=(t+e+n+s)*c,d=Math.floor(t+S),u=Math.floor(e+S),_=Math.floor(n+S),v=Math.floor(s+S),f=(d+u+_+v)*l,T=d-f,b=u-f,M=_-f,y=v-f,P=t-T,R=e-b,w=n-M,A=s-y,L=P>R?32:0,D=P>w?16:0,C=R>w?8:0,F=P>A?4:0,O=R>A?2:0,q=w>A?1:0,V=L+D+C+F+O+q,X=a[V][0]>=3?1:0,k=a[V][1]>=3?1:0,$=a[V][2]>=3?1:0,dt=a[V][3]>=3?1:0,B=a[V][0]>=2?1:0,j=a[V][1]>=2?1:0,K=a[V][2]>=2?1:0,ot=a[V][3]>=2?1:0,et=a[V][0]>=1?1:0,Mt=a[V][1]>=1?1:0,Xt=a[V][2]>=1?1:0,Nt=a[V][3]>=1?1:0,Jt=P-X+l,ie=R-k+l,at=w-$+l,pt=A-dt+l,mt=P-B+2*l,lt=R-j+2*l,_t=w-K+2*l,Ct=A-ot+2*l,wt=P-et+3*l,qt=R-Mt+3*l,ne=w-Xt+3*l,re=A-Nt+3*l,G=P-1+4*l,bt=R-1+4*l,ut=w-1+4*l,Dt=A-1+4*l,ct=d&255,Gt=u&255,ht=_&255,Tt=v&255,N=o[ct+o[Gt+o[ht+o[Tt]]]]%32,E=o[ct+X+o[Gt+k+o[ht+$+o[Tt+dt]]]]%32,H=o[ct+B+o[Gt+j+o[ht+K+o[Tt+ot]]]]%32,it=o[ct+et+o[Gt+Mt+o[ht+Xt+o[Tt+Nt]]]]%32,Q=o[ct+1+o[Gt+1+o[ht+1+o[Tt+1]]]]%32;let xt=.6-P*P-R*R-w*w-A*A;xt<0?h=0:(xt*=xt,h=xt*xt*this._dot4(r[N],P,R,w,A));let gt=.6-Jt*Jt-ie*ie-at*at-pt*pt;gt<0?p=0:(gt*=gt,p=gt*gt*this._dot4(r[E],Jt,ie,at,pt));let J=.6-mt*mt-lt*lt-_t*_t-Ct*Ct;J<0?g=0:(J*=J,g=J*J*this._dot4(r[H],mt,lt,_t,Ct));let tt=.6-wt*wt-qt*qt-ne*ne-re*re;tt<0?m=0:(tt*=tt,m=tt*tt*this._dot4(r[it],wt,qt,ne,re));let St=.6-G*G-bt*bt-ut*ut-Dt*Dt;return St<0?x=0:(St*=St,x=St*St*this._dot4(r[Q],G,bt,ut,Dt)),27*(h+p+g+m+x)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}}class _i extends Kf{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=gS(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Jn(this.width,this.height,{type:Qn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new kn({defines:Object.assign({},Eo.defines),uniforms:_r.clone(Eo.uniforms),vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,blending:Xn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new N0,this.normalMaterial.blending=Xn,this.pdMaterial=new kn({defines:Object.assign({},Ro.defines),uniforms:_r.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new kn({defines:Object.assign({},Ao.defines),uniforms:_r.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,blending:Xn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new kn({uniforms:_r.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Mc,blendDst:ia,blendEquation:Oi,blendSrcAlpha:vc,blendDstAlpha:ia,blendEquationAlpha:Oi}),this.blendMaterial=new kn({uniforms:_r.clone(hc.uniforms),vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vd,blendSrc:Mc,blendDst:ia,blendEquation:Oi,blendSrcAlpha:vc,blendDstAlpha:ia,blendEquationAlpha:Oi}),this._fsQuad=new Jf(null),this._originalClearColor=new Zt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget&&this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){if(t!==void 0)this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){const s=new Ws;s.format=Ji,s.type=Gs,this.normalRenderTarget=new Jn(this.width,this.height,{minFilter:dn,magFilter:dn,type:Qn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}const n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Qf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case _i.OUTPUT.Off:break;case _i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Xn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Xn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Xn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Xn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Xn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){const e=new MS,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const c=a,l=o;s[(a*t+o)*4]=(e.noise(c,l)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(c+t,l)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(c,l+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(c+t,l+t)*.5+.5)*255}const r=new dl(s,t,t,Ti,Zn);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}}_i.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};class _S extends Kf{fsQuad;material;constructor(){super(),this.material=new kn({uniforms:{tDiffuse:{value:null},uTime:{value:0},uExposure:{value:1.02},uGradeStrength:{value:1},uVignette:{value:.085}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform float uExposure;
        uniform float uGradeStrength;
        uniform float uVignette;
        varying vec2 vUv;

        // Clean AgX-inspired gentle filmic tone curve (preserves airy studio whites)
        vec3 studioFilmic(vec3 x) {
          x = max(x, vec3(0.0));
          // Slightly softer shoulder than harsh ACES so light studio whites stay crisp & creamy
          vec3 a = x * (2.35 * x + 0.045);
          vec3 b = x * (2.22 * x + 0.56) + 0.125;
          return clamp(a / b, 0.0, 1.0);
        }

        float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }

        void main() {
          vec3 hdr = texture2D(tDiffuse, vUv).rgb;
          vec3 col = studioFilmic(hdr * uExposure);

          // Linear -> sRGB for subtle photographic print grading
          col = pow(max(col, vec3(0.0)), vec3(1.0 / 2.2));

          float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
          float shadowMask = pow(1.0 - clamp(luma, 0.0, 1.0), 2.1);
          float highMask = smoothstep(0.55, 1.0, luma);

          // Minimalist studio color grade:
          // - Delicate cool-stone shadow lift (prevents muddy dark tracks)
          // - Subtle warm-ivory highlight tint
          vec3 graded = col;
          graded += shadowMask * vec3(0.008, 0.011, 0.015);
          graded *= mix(vec3(1.0), vec3(1.012, 1.005, 0.992), highMask * 0.65);

          // Very gentle micro-contrast S-curve
          vec3 sCurve = graded * graded * (3.0 - 2.0 * graded);
          graded = mix(graded, sCurve, 0.11);

          // Subtle editorial desaturation only on extreme shadows, keeping LEDs vivid
          col = mix(col, graded, uGradeStrength);

          // Soft studio lens vignette framing the cyclorama
          vec2 p = vUv - 0.5;
          float vig = 1.0 - dot(p, p) * uVignette * 3.1;
          col *= clamp(vig, 0.86, 1.0);

          // Imperceptible fine photographic grain (eliminates 8-bit cyclorama banding)
          float grain = (hash12(gl_FragCoord.xy + fract(uTime * 13.7) * 197.0) - 0.5) * 0.012;
          col = clamp(col + grain, 0.0, 1.0);

          gl_FragColor = vec4(col, 1.0);
        }
      `}),this.fsQuad=new Jf(this.material)}render(t,e,n){this.material.uniforms.tDiffuse.value=n.texture,this.renderToScreen?t.setRenderTarget(null):t.setRenderTarget(e),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class SS{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.target=new Jn(1,1,{type:Qn,samples:4}),this.ping=new Jn(1,1,{type:Qn}),this.aoPass=new _i(e,n,1,1),this.aoPass.output=_i.OUTPUT.Default,this.aoPass.blendIntensity=.56,this.aoPass.updateGtaoMaterial({radius:.25,distanceExponent:1.3,thickness:.58,scale:1.18,samples:8,distanceFallOff:.88}),this.aoPass.updatePdMaterial({lumaPhi:6,depthPhi:1.2,normalPhi:2.6,radius:2,radiusExponent:1.6,rings:1,samples:6}),this.aoPass.renderToScreen=!1,this.gradePass=new _S,this.gradePass.renderToScreen=!0}renderer;scene;camera;target;ping;aoPass;gradePass;aoExcluded=[];setAoExcluded(t){this.aoExcluded=t}setSize(t,e){const n=this.renderer.getPixelRatio(),s=Math.max(1,Math.floor(t*n)),r=Math.max(1,Math.floor(e*n));this.target.setSize(s,r),this.ping.setSize(s,r),this.aoPass.setSize(Math.max(1,Math.floor(s*.65)),Math.max(1,Math.floor(r*.65)))}render(t){this.gradePass.material.uniforms.uTime.value=t,this.renderer.setRenderTarget(this.target),this.renderer.render(this.scene,this.camera);let e=this.target;if(this.aoPass.enabled&&this.aoPass.blendIntensity>.001){const n=[];for(let s=0;s<this.aoExcluded.length;s++)n.push(this.aoExcluded[s].visible),this.aoExcluded[s].visible=!1;this.aoPass.render(this.renderer,this.ping,this.target,0,!1);for(let s=0;s<this.aoExcluded.length;s++)this.aoExcluded[s].visible=n[s];e=this.ping}this.gradePass.render(this.renderer,this.ping,e)}dispose(){this.target.dispose(),this.ping.dispose(),this.aoPass.dispose(),this.gradePass.dispose()}}const Fs=[{bass:36.71,notes:[146.83,174.61,220,261.63,329.63]},{bass:29.14,notes:[116.54,174.61,220,293.66,329.63]},{bass:49,notes:[146.83,196,233.08,293.66,349.23]},{bass:55,notes:[164.81,196,220,293.66,329.63]},{bass:36.71,notes:[146.83,155.56,220,293.66,349.23]},{bass:41.2,notes:[130.81,196,261.63,293.66,392]}],Ed=[440,523.25,587.33,659.25,698.46,880,1046.5,1174.66];class yS{ctx=null;sfxBus=null;musicMaster=null;musicDropGain=null;musicFilter=null;reverbSend=null;wowLfo=null;wowDepth=null;subOsc1=null;subOsc2=null;rollGain=null;rollFilter=null;noiseBuf=null;enabled=!0;backgrounded=!1;suspendTimer=null;lastHitAt=0;chordIndex=0;chordTimer=null;glitchTimer=null;lastSubterranean=!1;isEnabled(){return this.enabled}setEnabled(t){if(this.enabled=t,!this.ctx)return;const e=this.ctx.currentTime;this.rollGain&&this.rollGain.gain.setTargetAtTime(0,e,.05),this.musicMaster&&(this.musicMaster.gain.cancelScheduledValues(e),this.musicMaster.gain.setTargetAtTime(t?.54:1e-4,e,t?1.1:.22)),this.sfxBus&&this.sfxBus.gain.setTargetAtTime(t?1:1e-4,e,.04),t&&!this.backgrounded?(this.ctx.state==="suspended"&&this.ctx.resume(),this.ensureSchedulers()):this.stopSchedulers()}setBackgrounded(t){if(t===this.backgrounded||(this.backgrounded=t,!this.ctx))return;this.suspendTimer!==null&&(window.clearTimeout(this.suspendTimer),this.suspendTimer=null);const e=this.ctx.currentTime;t?(this.stopSchedulers(),this.rollGain&&this.rollGain.gain.setTargetAtTime(0,e,.02),this.sfxBus&&this.sfxBus.gain.setTargetAtTime(1e-4,e,.02),this.musicMaster&&(this.musicMaster.gain.cancelScheduledValues(e),this.musicMaster.gain.setTargetAtTime(1e-4,e,.025)),this.suspendTimer=window.setTimeout(()=>{this.suspendTimer=null,this.backgrounded&&this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()},110)):this.enabled&&(this.ctx.state==="suspended"&&this.ctx.resume(),this.sfxBus&&this.sfxBus.gain.setTargetAtTime(1,e,.04),this.musicMaster&&(this.musicMaster.gain.cancelScheduledValues(e),this.musicMaster.gain.setTargetAtTime(.54,e,.55)),this.ensureSchedulers())}unlock(){if(this.enabled){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const n=e.sampleRate*3,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);let a=0,o=0,c=0;for(let V=0;V<n;V++){const X=Math.random()*2-1;a=.997*a+X*.029,o=.985*o+X*.032,c=.95*c+X*.048,r[V]=Math.max(-1,Math.min(1,(a+o+c+X*.14)*.65))}this.noiseBuf=s;const l=e.createGain();l.gain.value=1,l.connect(e.destination),this.sfxBus=l;const h=e.createBufferSource();h.buffer=s,h.loop=!0;const p=e.createBiquadFilter();p.type="bandpass",p.frequency.value=340,p.Q.value=2.6;const g=e.createGain();g.gain.value=0,h.connect(p),p.connect(g),g.connect(l),h.start(),this.rollFilter=p,this.rollGain=g;const m=e.createGain();m.gain.setValueAtTime(1e-4,e.currentTime),m.gain.linearRampToValueAtTime(.54,e.currentTime+2.8);const x=e.createGain();x.gain.value=1;const S=e.createWaveShaper(),d=new Float32Array(256);for(let V=0;V<256;V++){const X=V*2/255-1;d[V]=Math.tanh(X*1.65)/Math.tanh(1.65)}S.curve=d,S.oversample="2x";const u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=2600,u.Q.value=.7;const _=e.createConvolver();_.buffer=this.createDarkReverbImpulse(e,4.8);const v=e.createGain();v.gain.value=.72;const f=e.createGain();f.gain.value=.58,x.connect(u),u.connect(S),S.connect(m),m.connect(e.destination),v.connect(_),_.connect(f),f.connect(x),this.musicMaster=m,this.musicDropGain=x,this.musicFilter=u,this.reverbSend=v;const T=e.createOscillator();T.type="sine",T.frequency.value=.14;const b=e.createOscillator();b.type="triangle",b.frequency.value=.53;const M=e.createGain();M.gain.value=4.2;const y=e.createGain();y.gain.value=10.5,T.connect(y),b.connect(M),M.connect(y),T.start(),b.start(),this.wowLfo=T,this.wowDepth=y;const P=e.createBiquadFilter();P.type="lowpass",P.frequency.value=135,P.Q.value=1.4;const R=e.createOscillator();R.type="sine",R.frequency.value=.048;const w=e.createGain();w.gain.value=55,R.connect(w),w.connect(P.frequency),R.start();const A=e.createGain();A.gain.value=.14;const L=e.createOscillator();L.type="sine",L.frequency.value=Fs[0].bass;const D=e.createOscillator();D.type="triangle",D.frequency.value=Fs[0].bass*2,D.detune.value=-5,y.connect(D.detune);const C=e.createGain();C.gain.value=.38,L.connect(P),D.connect(C),C.connect(P),P.connect(A),A.connect(x),A.connect(v),L.start(),D.start(),this.subOsc1=L,this.subOsc2=D;const F=e.createBufferSource();F.buffer=s,F.loop=!0;const O=e.createBiquadFilter();O.type="bandpass",O.frequency.value=2150,O.Q.value=.85;const q=e.createGain();q.gain.value=.011,F.connect(O),O.connect(q),q.connect(x),F.start(),this.chordIndex=0,this.triggerSlowPadChord(0),this.ensureSchedulers()}this.ctx.state==="suspended"&&this.ctx.resume()}}updateAmbience(t){if(t===this.lastSubterranean||(this.lastSubterranean=t,!this.ctx||!this.musicFilter))return;const e=this.ctx.currentTime;this.musicFilter.frequency.setTargetAtTime(t?840:2600,e,.28)}createDarkReverbImpulse(t,e){const n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);let o=0;for(let c=0;c<n;c++){const l=c/n,h=Math.pow(1-l,2.75)*Math.min(1,c/(t.sampleRate*.035)),p=Math.random()*2-1,g=.06+(1-l)*.16;o+=(p-o)*g,a[c]=o*h*.85}}return s}ensureSchedulers(){if(this.chordTimer===null){const t=()=>{const e=13e3+Math.random()*7500;this.chordTimer=window.setTimeout(()=>{this.chordTimer=null,!(!this.enabled||!this.ctx)&&(this.ctx.state==="running"&&(this.chordIndex=(this.chordIndex+1+(Math.random()<.28?1:0))%Fs.length,this.triggerSlowPadChord(this.chordIndex)),t())},e)};t()}if(this.glitchTimer===null){const t=()=>{const e=3200+Math.random()*5600;this.glitchTimer=window.setTimeout(()=>{this.glitchTimer=null,!(!this.enabled||!this.ctx)&&(this.ctx.state==="running"&&this.triggerExperimentalGlitch(),t())},e)};t()}}stopSchedulers(){this.chordTimer!==null&&(window.clearTimeout(this.chordTimer),this.chordTimer=null),this.glitchTimer!==null&&(window.clearTimeout(this.glitchTimer),this.glitchTimer=null)}triggerSlowPadChord(t){if(!this.ctx||!this.musicDropGain||!this.reverbSend||!this.wowDepth)return;const e=this.ctx,n=e.currentTime,s=Fs[t%Fs.length];this.subOsc1&&this.subOsc2&&(this.subOsc1.frequency.setTargetAtTime(s.bass,n,1.8),this.subOsc2.frequency.setTargetAtTime(s.bass*2,n,1.8));const a=s.notes.slice().sort(()=>Math.random()-.5).slice(0,Math.random()<.45?3:4),o=4.2+Math.random()*2.2,c=3.5+Math.random()*3,l=6.5+Math.random()*3,h=o+c+l,p=e.createBiquadFilter();p.type="lowpass";const g=460+Math.random()*440;p.frequency.setValueAtTime(190,n),p.frequency.exponentialRampToValueAtTime(g,n+o+c*.45),p.frequency.exponentialRampToValueAtTime(170,n+h),p.Q.value=1.6+Math.random()*1.4;const m=e.createGain();m.gain.setValueAtTime(1e-4,n),m.gain.linearRampToValueAtTime(.068,n+o),m.gain.setValueAtTime(.062,n+o+c),m.gain.exponentialRampToValueAtTime(1e-4,n+h);const x=e.createStereoPanner();x.pan.setValueAtTime((Math.random()-.5)*.45,n),p.connect(m),m.connect(x),x.connect(this.musicDropGain),x.connect(this.reverbSend);for(let S=0;S<a.length;S++){const d=a[S],u=(Math.random()<.5?-1:1)*(6+Math.random()*10),_=e.createOscillator();_.type="sawtooth",_.frequency.setValueAtTime(d,n),_.detune.setValueAtTime(u-7,n),_.detune.linearRampToValueAtTime(-5+(Math.random()-.5)*4,n+o*.8);const v=e.createOscillator();v.type="triangle",v.frequency.setValueAtTime(d*(S===a.length-1&&Math.random()<.35?2:1),n),v.detune.setValueAtTime(u+8,n),v.detune.linearRampToValueAtTime(6+(Math.random()-.5)*4,n+o*.8),this.wowDepth.connect(_.detune),this.wowDepth.connect(v.detune);const f=e.createGain();f.gain.value=1/a.length,_.connect(f),v.connect(f),f.connect(p),_.start(n),v.start(n),_.stop(n+h+.15),v.stop(n+h+.15)}}triggerExperimentalGlitch(){if(!this.ctx||!this.musicDropGain||!this.reverbSend)return;const t=Math.random();t<.24?this.glitchTapeSpliceDropout():t<.5?this.glitchDigitalDataSparks():t<.72?this.glitchTelemetryPing():t<.88?this.glitchSteppedStaticGrain():this.glitchReverseHarmonicCut()}glitchTapeSpliceDropout(){if(!this.ctx||!this.musicDropGain)return;const t=this.ctx.currentTime,e=.08+Math.random()*.14,n=.28+Math.random()*.3;this.musicDropGain.gain.cancelScheduledValues(t),this.musicDropGain.gain.setValueAtTime(1,t),this.musicDropGain.gain.linearRampToValueAtTime(n,t+.012),this.musicDropGain.gain.linearRampToValueAtTime(1,t+e);const s=this.ctx.createOscillator();s.type="sine",s.frequency.setValueAtTime(2800+Math.random()*1900,t);const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.014,t+.002),r.gain.exponentialRampToValueAtTime(1e-4,t+.016),s.connect(r),r.connect(this.reverbSend),s.start(t),s.stop(t+.02)}glitchDigitalDataSparks(){if(!this.ctx||!this.musicDropGain||!this.reverbSend)return;const t=this.ctx,e=t.currentTime,n=2+Math.floor(Math.random()*4),s=t.createStereoPanner();s.pan.value=(Math.random()-.5)*1.4,s.connect(this.musicDropGain),s.connect(this.reverbSend);let r=0;for(let a=0;a<n;a++){const o=e+r,c=.009+Math.random()*.018,l=t.createOscillator();l.type=Math.random()<.5?"sine":"square";const h=1400+Math.random()*3800;l.frequency.setValueAtTime(h,o),l.frequency.setValueAtTime(h*(Math.random()<.5?1.5:.5),o+c*.5);const p=t.createBiquadFilter();p.type="bandpass",p.frequency.value=h,p.Q.value=3.5;const g=t.createGain();g.gain.setValueAtTime(1e-4,o),g.gain.linearRampToValueAtTime(.016+Math.random()*.012,o+.0015),g.gain.exponentialRampToValueAtTime(1e-4,o+c),l.connect(p),p.connect(g),g.connect(s),l.start(o),l.stop(o+c+.01),r+=c+.018+Math.random()*.065}}glitchTelemetryPing(){if(!this.ctx||!this.musicDropGain||!this.reverbSend||!this.wowDepth)return;const t=this.ctx,e=t.currentTime,n=Ed[Math.floor(Math.random()*Ed.length)],s=t.createStereoPanner();s.pan.value=(Math.random()-.5)*1.3,s.connect(this.musicDropGain),s.connect(this.reverbSend);const r=(a,o,c)=>{const l=t.createOscillator();l.type="sine",l.frequency.setValueAtTime(c,a),this.wowDepth.connect(l.detune);const h=t.createOscillator();h.type="sine",h.frequency.setValueAtTime(c*2.005,a);const p=t.createGain();p.gain.setValueAtTime(c*.12,a),p.gain.exponentialRampToValueAtTime(.5,a+.35),h.connect(p),p.connect(l.frequency);const g=t.createGain();g.gain.setValueAtTime(1e-4,a),g.gain.linearRampToValueAtTime(o,a+.012),g.gain.exponentialRampToValueAtTime(1e-4,a+1.85),l.connect(g),g.connect(s),l.start(a),h.start(a),l.stop(a+1.9),h.stop(a+1.9)};r(e,.022,n),Math.random()<.55&&r(e+.31+Math.random()*.42,.009,n*(Math.random()<.25?.5:1))}glitchSteppedStaticGrain(){if(!this.ctx||!this.reverbSend||!this.musicDropGain)return;const t=this.ctx,e=t.currentTime,n=.045+Math.random()*.08,s=Math.max(64,Math.floor(t.sampleRate*n)),r=t.createBuffer(1,s,t.sampleRate),a=r.getChannelData(0),o=12+Math.floor(Math.random()*28);let c=0;for(let m=0;m<s;m++){m%o===0&&(c=Math.random()*2-1);const x=Math.sin(m/s*Math.PI);a[m]=c*x}const l=t.createBufferSource();l.buffer=r;const h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=1100+Math.random()*2400,h.Q.value=2.4;const p=t.createGain();p.gain.value=.026;const g=t.createStereoPanner();g.pan.value=(Math.random()-.5)*1.5,l.connect(h),h.connect(p),p.connect(g),g.connect(this.reverbSend),g.connect(this.musicDropGain),l.start(e)}glitchReverseHarmonicCut(){if(!this.ctx||!this.reverbSend||!this.wowDepth)return;const t=this.ctx,e=t.currentTime,n=Fs[this.chordIndex%Fs.length],s=n.notes[Math.floor(Math.random()*n.notes.length)]*(Math.random()<.5?1:2),r=1.4+Math.random()*1.2,a=t.createOscillator();a.type="triangle",a.frequency.setValueAtTime(s*.992,e),a.frequency.linearRampToValueAtTime(s,e+r),this.wowDepth.connect(a.detune);const o=t.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(240,e),o.frequency.exponentialRampToValueAtTime(1400,e+r);const c=t.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(.036,e+r),c.gain.linearRampToValueAtTime(1e-4,e+r+.014);const l=t.createStereoPanner();l.pan.value=(Math.random()-.5)*1.1,a.connect(o),o.connect(c),c.connect(l),l.connect(this.reverbSend),a.start(e),a.stop(e+r+.04)}updateRoll(t){if(!this.ctx||!this.rollGain||!this.rollFilter||!this.enabled||this.ctx.state!=="running")return;const e=Math.min(1,t/2.6),n=e>.04?e*e*.032:0,s=220+e*620,r=this.ctx.currentTime;this.rollGain.gain.setTargetAtTime(n,r,.04),this.rollFilter.frequency.setTargetAtTime(s,r,.05)}playWallHit(t){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const e=this.ctx.currentTime;if(e-this.lastHitAt<.045)return;this.lastHitAt=e;const n=.024+t*.09,s=920+Math.random()*220+t*260,r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(s,e),r.frequency.exponentialRampToValueAtTime(s*.58,e+.028);const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(s*2.42,e),a.frequency.exponentialRampToValueAtTime(s*1.6,e+.018);const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n,e+.002),o.gain.exponentialRampToValueAtTime(1e-4,e+.038);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(n*.45,e+.0015),c.gain.exponentialRampToValueAtTime(1e-4,e+.022),r.connect(o),a.connect(c),o.connect(this.sfxBus),c.connect(this.sfxBus),r.start(e),a.start(e),r.stop(e+.045),a.stop(e+.028)}playCheckpoint(t,e){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const n=this.ctx.currentTime,s=[293.66,349.23,440,523.25,659.25],r=s[t%s.length],a=(o,c,l,h)=>{if(!this.ctx||!this.sfxBus)return;const p=n+c,g=this.ctx.createOscillator();g.type="sine",g.frequency.setValueAtTime(o,p),this.wowDepth&&this.wowDepth.connect(g.detune);const m=this.ctx.createGain();m.gain.setValueAtTime(1e-4,p),m.gain.linearRampToValueAtTime(h,p+.012),m.gain.exponentialRampToValueAtTime(1e-4,p+l),g.connect(m),m.connect(this.sfxBus),this.reverbSend&&m.connect(this.reverbSend),g.start(p),g.stop(p+l+.04)};a(r,0,.65,.075),a(r*2,.014,.34,.018),e&&(a(293.66,.16,1.35,.055),a(440,.32,1.45,.05),a(523.25,.48,1.65,.048),a(659.25,.68,2,.045))}playMorph(){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(164.81,t+.48),e.frequency.exponentialRampToValueAtTime(146.83,t+.95);const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(.028,t+.16),n.gain.exponentialRampToValueAtTime(1e-4,t+1.05),e.connect(n),n.connect(this.sfxBus),this.reverbSend&&n.connect(this.reverbSend),e.start(t),e.stop(t+1.08);const s=[.08,.24,.44,.64,.82];for(let r=0;r<s.length;r++){const a=t+s[r],o=this.ctx.createOscillator();o.type="triangle";const c=720+r*70;o.frequency.setValueAtTime(c,a),o.frequency.exponentialRampToValueAtTime(c*.65,a+.02);const l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,a),l.gain.linearRampToValueAtTime(.016,a+.002),l.gain.exponentialRampToValueAtTime(1e-4,a+.024),o.connect(l),l.connect(this.sfxBus),o.start(a),o.stop(a+.028)}}playPortalDrop(){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(349.23,t),e.frequency.exponentialRampToValueAtTime(146.83,t+.18);const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(.08,t+.008),n.gain.exponentialRampToValueAtTime(1e-4,t+.25),e.connect(n),n.connect(this.sfxBus),this.reverbSend&&n.connect(this.reverbSend),e.start(t),e.stop(t+.28)}playPortalEmerge(){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(440,t+.13);const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(.06,t+.006),n.gain.exponentialRampToValueAtTime(1e-4,t+.18),e.connect(n),n.connect(this.sfxBus),this.reverbSend&&n.connect(this.reverbSend),e.start(t),e.stop(t+.2)}playToggle(t){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const e=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(t?1180:880,e),n.frequency.exponentialRampToValueAtTime(t?540:410,e+.025);const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.08,e+.002),s.gain.exponentialRampToValueAtTime(1e-4,e+.032),n.connect(s),s.connect(this.sfxBus),n.start(e),n.stop(e+.038);const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(t?440:349.23,e+.028),r.frequency.exponentialRampToValueAtTime(t?587.33:293.66,e+.2);const a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,e+.028),a.gain.linearRampToValueAtTime(.038,e+.042),a.gain.exponentialRampToValueAtTime(1e-4,e+.28),r.connect(a),a.connect(this.sfxBus),this.reverbSend&&a.connect(this.reverbSend),r.start(e+.028),r.stop(e+.3)}playFinaleLift(){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(146.83,t),e.frequency.exponentialRampToValueAtTime(293.66,t+.52);const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(.055,t+.14),n.gain.exponentialRampToValueAtTime(1e-4,t+.62),e.connect(n),n.connect(this.sfxBus),this.reverbSend&&n.connect(this.reverbSend),e.start(t),e.stop(t+.66)}playFinaleSealPop(){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(125,e),n.frequency.exponentialRampToValueAtTime(42,e+.18);const s=t.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.22,e+.006),s.gain.exponentialRampToValueAtTime(1e-4,e+.24),n.connect(s),s.connect(this.sfxBus),n.start(e),n.stop(e+.28);const r=t.createOscillator();r.type="triangle",r.frequency.setValueAtTime(1480,e+.012),r.frequency.exponentialRampToValueAtTime(520,e+.068);const a=t.createGain();if(a.gain.setValueAtTime(1e-4,e+.012),a.gain.linearRampToValueAtTime(.16,e+.016),a.gain.exponentialRampToValueAtTime(1e-4,e+.09),r.connect(a),a.connect(this.sfxBus),this.reverbSend&&a.connect(this.reverbSend),r.start(e+.012),r.stop(e+.1),this.noiseBuf){const c=t.createBufferSource();c.buffer=this.noiseBuf;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(3100,e+.01),l.frequency.exponentialRampToValueAtTime(1400,e+.16),l.Q.value=1.6;const h=t.createGain();h.gain.setValueAtTime(1e-4,e+.01),h.gain.linearRampToValueAtTime(.09,e+.02),h.gain.exponentialRampToValueAtTime(1e-4,e+.18),c.connect(l),l.connect(h),h.connect(this.sfxBus),c.start(e+.01,Math.random()*1.4,.22)}for(let c=0;c<2;c++){const l=e+.055+c*.045,h=t.createOscillator();h.type="sine";const p=c===0?740:620;h.frequency.setValueAtTime(p,l),h.frequency.exponentialRampToValueAtTime(p*.72,l+.065);const g=t.createGain();g.gain.setValueAtTime(1e-4,l),g.gain.linearRampToValueAtTime(.075,l+.004),g.gain.exponentialRampToValueAtTime(1e-4,l+.085);const m=t.createStereoPanner();m.pan.value=c===0?.55:-.55,h.connect(g),g.connect(m),m.connect(this.sfxBus),h.start(l),h.stop(l+.095)}const o=[293.66,369.99,440,554.37,659.25,880];for(let c=0;c<o.length;c++){const l=e+.14+c*.095,h=t.createOscillator();h.type="sine",h.frequency.setValueAtTime(o[c],l),this.wowDepth&&this.wowDepth.connect(h.detune);const p=t.createGain();p.gain.setValueAtTime(1e-4,l),p.gain.linearRampToValueAtTime(.048,l+.05),p.gain.exponentialRampToValueAtTime(1e-4,l+2.6),h.connect(p),p.connect(this.sfxBus),this.reverbSend&&p.connect(this.reverbSend),h.start(l),h.stop(l+2.7)}}playMarbleBounce(t){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const e=this.ctx,n=e.currentTime,s=.025+Math.min(1,t)*.095,r=2350+Math.random()*280,a=r*2.18,o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(r,n),o.frequency.exponentialRampToValueAtTime(r*.92,n+.042);const c=e.createOscillator();c.type="sine",c.frequency.setValueAtTime(a,n);const l=e.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.linearRampToValueAtTime(s,n+.0015),l.gain.exponentialRampToValueAtTime(1e-4,n+.065);const h=e.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(s*.4,n+.001),h.gain.exponentialRampToValueAtTime(1e-4,n+.032),o.connect(l),c.connect(h),l.connect(this.sfxBus),h.connect(this.sfxBus),this.reverbSend&&l.connect(this.reverbSend),o.start(n),c.start(n),o.stop(n+.07),c.stop(n+.038)}playSmokePlume(t=0){if(!this.enabled||!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const e=this.ctx,n=e.currentTime,s=e.createStereoPanner();if(s.pan.value=Math.max(-.9,Math.min(.9,t)),s.connect(this.sfxBus),this.reverbSend&&s.connect(this.reverbSend),this.noiseBuf){const l=e.createBufferSource();l.buffer=this.noiseBuf;const h=e.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(520+Math.random()*260,n),h.frequency.exponentialRampToValueAtTime(1450+Math.random()*450,n+.24),h.frequency.exponentialRampToValueAtTime(340,n+.78),h.Q.value=1.1;const p=e.createGain();p.gain.setValueAtTime(1e-4,n),p.gain.linearRampToValueAtTime(.052,n+.1),p.gain.exponentialRampToValueAtTime(1e-4,n+.85),l.connect(h),h.connect(p),p.connect(s),l.start(n,Math.random()*1.4,.9)}const r=[587.33,659.25,739.99,880,1174.66],a=r[Math.floor(Math.random()*r.length)],o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(a,n+.04);const c=e.createGain();c.gain.setValueAtTime(1e-4,n+.04),c.gain.linearRampToValueAtTime(.016,n+.12),c.gain.exponentialRampToValueAtTime(1e-4,n+1.15),o.connect(c),c.connect(s),o.start(n+.04),o.stop(n+1.2)}}function bS(i){const t=new _n,e=[],n=[];let s=0;const r=(T,b,M=!1)=>{const y=T.length,P=new U,R=new U,w=new U,A=new U,L=new U;for(let C=0;C<y;C++){const F=T[(C-1+y)%y],O=T[C],q=T[(C+1)%y];!M&&C===0?P.subVectors(q,O).normalize():!M&&C===y-1?P.subVectors(O,F).normalize():P.subVectors(q,F).normalize(),R.copy(O).normalize(),w.crossVectors(R,P).normalize(),A.copy(O).addScaledVector(w,-b).normalize().multiplyScalar(i),L.copy(O).addScaledVector(w,b).normalize().multiplyScalar(i),e.push(A.x,A.y,A.z,L.x,L.y,L.z)}const D=M?y:y-1;for(let C=0;C<D;C++){const F=(C+1)%y,O=s+C*2,q=O+1,V=s+F*2,X=V+1;n.push(O,V,q,q,V,X)}s+=y*2},a=64,o=.036,c=[];for(let T=0;T<a;T++){const b=T/a*Math.PI*2;c.push(new U(Math.sin(o)*Math.cos(b)*i,Math.sin(o)*Math.sin(b)*i,Math.cos(o)*i))}r(c,.0011,!0);const l=12,h=.056,p=.205,g=[[1,0],[-1,0],[0,1],[0,-1]];for(const[T,b]of g){const M=[];for(let y=0;y<=l;y++){const P=h+(p-h)*(y/l);M.push(new U(T*Math.sin(P)*i,b*Math.sin(P)*i,Math.cos(P)*i))}r(M,.0011,!1)}const m=new Se;m.setAttribute("position",new Bt(e,3)),m.setIndex(n);const x=new Qi({color:1842204,transparent:!0,opacity:.42,depthWrite:!1,side:si}),S=new Wt(m,x);S.renderOrder=16,t.add(S);const d=new U,u=new U,_=new U,v=new be;function f(T,b,M){_.copy(T).normalize(),d.crossVectors(b,_),d.lengthSq()<1e-6?d.set(1,0,0):d.normalize(),u.crossVectors(_,d).normalize(),v.makeBasis(d,u,_),t.quaternion.setFromRotationMatrix(v),x.opacity=.42+M*.43}return{group:t,setPose:f,dispose:()=>{m.dispose(),x.dispose()}}}function TS(i){const t=new Aa(i);t.compileEquirectangularShader();const e=new gf;e.background=new Zt(15131612);const n=(r,a,o,c,l,h=[0,0,0])=>{const p=new Ai(o,c),g=new Qi({color:new Zt(r).multiplyScalar(a),side:si}),m=new Wt(p,g);m.position.set(...l),m.lookAt(...h),e.add(m)};n(16776696,3.2,8.2,4.4,[-1.2,5.4,2.2]),n(16775920,3.9,5.4,5.2,[-4.8,3.2,4]),n(15791355,1.9,5.8,4.6,[5.8,1.2,3.2]),n(16777215,3.8,2,6.8,[4.2,2.6,-4.8]),n(15065044,1.05,14,14,[0,-5.5,0]),n(2763047,1,4.2,5.4,[-6.5,-1.6,-2.5]),n(3420976,1,3.6,4.2,[5.8,-2.2,-1.6]),n(4604992,1,5.5,2.4,[0,-2.8,6.4]);const s=t.fromScene(e,.032);return t.dispose(),e.traverse(r=>{r instanceof Wt&&(r.geometry.dispose(),r.material.dispose())}),s.texture}function wS(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(32, 29, 24, 0.48)"),n.addColorStop(.28,"rgba(36, 33, 28, 0.28)"),n.addColorStop(.6,"rgba(44, 41, 36, 0.09)"),n.addColorStop(1,"rgba(48, 45, 40, 0.0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const s=new en(t);return s.colorSpace=He,s}function ES(i,t){const e=TS(i);t.environment=e,t.environmentIntensity=.56;const n=new Si(28,32,24),s=new kn({side:Nn,depthWrite:!1,uniforms:{uTop:{value:new Zt(13818595)},uMid:{value:new Zt(15854818)},uBottom:{value:new Zt(13353394)},uGlow:{value:new Zt(16447472)}},vertexShader:`
      varying vec3 vWorldDir;
      varying vec2 vScreenUv;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldDir = normalize(wp.xyz);
        vec4 clip = projectionMatrix * viewMatrix * wp;
        vScreenUv = clip.xy / max(clip.w, 0.0001) * 0.5 + 0.5;
        gl_Position = clip;
      }
    `,fragmentShader:`
      uniform vec3 uTop;
      uniform vec3 uMid;
      uniform vec3 uBottom;
      uniform vec3 uGlow;
      varying vec3 vWorldDir;
      varying vec2 vScreenUv;
      void main() {
        // Blend screen vertical sweep with subtle 3D world elevation so the gradient reads richly at 32deg FOV
        float sy = clamp(vScreenUv.y, 0.0, 1.0);
        float wy = clamp(vWorldDir.y * 1.4 + 0.5, 0.0, 1.0);
        float t = mix(sy, wy, 0.25);

        // Smooth 3-stop studio sweep: warm limestone floor -> luminous alabaster mid -> cool Nordic mist top
        vec3 col = mix(uBottom, uMid, smoothstep(0.0, 0.48, t));
        col = mix(col, uTop, smoothstep(0.46, 1.0, t));

        // Soft off-center studio softbox backlight halo behind the sphere (upper-left bias matching key light)
        vec2 haloVec = (vScreenUv - vec2(0.46, 0.52)) * vec2(1.15, 1.0);
        float halo = exp(-dot(haloVec, haloVec) * 4.2);
        col = mix(col, uGlow, halo * 0.48);

        gl_FragColor = vec4(col, 1.0);
      }
    `}),r=new Wt(n,s);r.renderOrder=-10,t.add(r);const a=new F0(16447731,12235170,.55);t.add(a);const o=new rc(16775920,1.48);o.position.set(-2.9,3.8,3.3),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.near=1.5,o.shadow.camera.far=12,o.shadow.camera.left=-1.32,o.shadow.camera.right=1.32,o.shadow.camera.top=1.32,o.shadow.camera.bottom=-1.32,o.shadow.bias=-35e-5,o.shadow.normalBias=.01,o.shadow.radius=2.5,t.add(o);const c=new rc(15265784,.34);c.position.set(4.1,1.1,2.4),t.add(c);const l=new rc(16777215,.58);l.position.set(2.5,3.1,-3.6),t.add(l);const h=wS(),p=new Ai(3.1,3.1);p.rotateX(-Math.PI/2);const g=new Qi({map:h,transparent:!0,depthWrite:!1,opacity:1}),m=new Wt(p,g);return m.position.set(.18,-1.18,-.06),m.renderOrder=-2,t.add(m),{envMap:e,shadowPlane:m,backdropMesh:r,dispose:()=>{e.dispose(),n.dispose(),s.dispose(),h.dispose(),p.dispose(),g.dispose()}}}const Ad='600 7.5px "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',dc='500 6.5px "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',AS='500 6.5px "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',cs=60/Qe,Cn="#1c1c1c",fc="#5a5650",RS="#d9620f",Rd="#0d9688",Bs="#12995c",pc="#d61414",Cd="#1050e8",CS=new U(0,1,0);function Mn(i){return Math.round(i)+.5}function Pd(i){return i<0?0:i>1?1:i}function PS(i){const t=Math.max(0,Math.floor(i)),e=Math.floor(t/60),n=t%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}class IS{constructor(t){this.canvas=t,this.ctx=t.getContext("2d")}canvas;ctx;width=1;height=1;dpr=1;enabled=!0;worldPos=new U;ndc=new U;sphereCenter=new U;outwardWorld=new U;toCam=new U;ballWorldDir=new U;gravArcDir=new U;gravArcAxis=new U;gravArcQuat=new Oe;cachedGrid=null;cachedAdj=[];aStarCacheKey="";aStarCachedMm=0;aStarFirstStepDir=null;aStarTailMm=0;ensureAdjacency(t){if(this.cachedGrid!==t){this.cachedGrid=t,this.cachedAdj=Array.from({length:t.cells.length},()=>[]);for(const e of t.walls)this.cachedAdj[e.cellA].push(e),this.cachedAdj[e.cellB].push(e)}}computeAStarDistanceMm(t){const{grid:e,level:n,ballDir:s,ballLayer:r,nextCpIdx:a,toggleMask:o}=t;if(a<0||a>=n.checkpoints.length)return 0;const c=n.checkpoints[a];this.ensureAdjacency(e);const l=r==="pipe";let h=0,p=-2;if(l)for(let d=0;d<e.pipeNodes.length;d++){const u=s.dot(e.pipeNodes[d].dir);u>p&&(p=u,h=d)}else for(let d=0;d<e.cells.length;d++){const u=s.dot(e.cells[d].centerDir);u>p&&(p=u,h=d)}const g=l?1:0,m=c.layer==="pipe"?1:0,x=m===1?c.pipeNodeId:c.cellId;if(g===m&&h===x){const d=l?ln:Ke;return Math.acos(Math.max(-1,Math.min(1,s.dot(c.dir))))*d*cs}const S=`${n.level}:${g}:${h}:${a}:${o}`;if(S!==this.aStarCacheKey){this.aStarCacheKey=S;const{cells:d,walls:u,shutters:_,pipeNodes:v,pipeEdges:f}=e,T=1<<n.toggles.length,b=Math.max(d.length,v.length),M=(X,k,$)=>($*2+X)*b+k,y=new Int8Array(d.length).fill(-1);for(const X of n.toggles)y[X.cellId]=X.id;const P=[],R=[];for(let X=0;X<T;X++){const k=n.raisedWalls.slice(),$=n.openShutters.slice();for(const dt of n.toggles)if((X&1<<dt.id)!==0){for(const B of dt.wallIds)u[B].locked||(k[B]=!k[B]);for(const B of dt.shutterIds)$[B]=!$[B]}P.push(k),R.push($)}const w=(X,k)=>X===1?v[k].dir:d[k].centerDir,A=(X,k)=>{const $=Math.max(-1,Math.min(1,w(X,k).dot(c.dir)));return Math.acos($)*ln*cs},L=M(g,h,o),D=new Map([[L,0]]),C=new Map,F=[{key:L,layer:g,loc:h,mask:o,g:0,f:A(g,h)}],O=new Set;let q=-1,V=-1;for(;F.length>0;){let X=0;for(let dt=1;dt<F.length;dt++)F[dt].f<F[X].f&&(X=dt);const k=F[X];if(F[X]=F[F.length-1],F.pop(),O.has(k.key))continue;if(O.add(k.key),k.layer===m&&k.loc===x){q=k.key,V=k.g;break}const $=(dt,B,j,K)=>{const ot=M(dt,B,j);if(O.has(ot))return;const et=k.g+K,Mt=D.get(ot);(Mt===void 0||et<Mt)&&(D.set(ot,et),C.set(ot,{prev:k.key,layer:dt,loc:B}),F.push({key:ot,layer:dt,loc:B,mask:j,g:et,f:et+A(dt,B)}))};if(k.layer===0){const dt=P[k.mask],B=d[k.loc].centerDir,j=this.cachedAdj[k.loc];for(let ot=0;ot<j.length;ot++){const et=j[ot];if(dt[et.id])continue;const Mt=et.cellA===k.loc?et.cellB:et.cellA,Xt=Math.acos(Math.max(-1,Math.min(1,B.dot(d[Mt].centerDir))))*Ke*cs;$(0,Mt,k.mask,Xt);const Nt=y[Mt];Nt>=0&&$(0,Mt,k.mask^1<<Nt,Xt)}const K=d[k.loc].shutterId;K>=0&&R[k.mask][K]&&$(1,_[K].pipeNodeId,k.mask,(Ke-ln)*cs)}else{const dt=v[k.loc];for(let B=0;B<dt.edgeIds.length;B++){const j=f[dt.edgeIds[B]],K=j.nodeA===k.loc?j.nodeB:j.nodeA;$(1,K,k.mask,j.arcLen*ln*cs)}dt.shutterId>=0&&R[k.mask][dt.shutterId]&&$(0,_[dt.shutterId].cellId,k.mask,(Ke-ln)*cs)}}if(q>=0){this.aStarCachedMm=V;let X=q,k=null;for(;X!==L;){const $=C.get(X);if(!$)break;if($.prev===L){k={layer:$.layer,loc:$.loc};break}X=$.prev}if(k&&k.layer===g){this.aStarFirstStepDir=w(k.layer,k.loc);const $=M(k.layer,k.loc,o),dt=D.get($)??0;this.aStarTailMm=Math.max(0,V-dt)}else this.aStarFirstStepDir=null,this.aStarTailMm=V}else this.aStarCachedMm=-1,this.aStarFirstStepDir=null,this.aStarTailMm=0}if(this.aStarCachedMm<0)return-1;if(this.aStarFirstStepDir){const d=l?ln:Ke;return Math.acos(Math.max(-1,Math.min(1,s.dot(this.aStarFirstStepDir))))*d*cs+this.aStarTailMm}return this.aStarCachedMm}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t,t||(this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height))}resize(t,e){this.width=Math.max(1,t),this.height=Math.max(1,e),this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(this.width*this.dpr),this.canvas.height=Math.round(this.height*this.dpr)}projectLocal(t,e,n,s){this.worldPos.copy(t).multiplyScalar(e).applyMatrix4(n.matrixWorld),this.outwardWorld.subVectors(this.worldPos,this.sphereCenter).normalize(),this.toCam.subVectors(s.position,this.worldPos).normalize();const r=this.outwardWorld.dot(this.toCam);this.ndc.copy(this.worldPos).project(s);const a=(this.ndc.x+1)*.5,o=(1-this.ndc.y)*.5;return{x:a*this.width,y:o*this.height,nx:a,ny:o,front:r,visible:this.ndc.z>=-1&&this.ndc.z<=1}}depthAlpha(t,e=.88,n=.18){const s=Pd((t+.14)/.42),r=s*s*(3-2*s);return n+(e-n)*r}drawBrackets(t,e,n,s,r,a,o=1.25){if(a<=.02)return;const c=this.ctx,l=Mn(t-n),h=Mn(e-n),p=Mn(t+n),g=Mn(e+n);c.save(),c.globalAlpha=a,c.strokeStyle=r,c.lineWidth=o,c.beginPath(),c.moveTo(l,h+s),c.lineTo(l,h),c.lineTo(l+s,h),c.moveTo(p-s,h),c.lineTo(p,h),c.lineTo(p,h+s),c.moveTo(p,g-s),c.lineTo(p,g),c.lineTo(p-s,g),c.moveTo(l+s,g),c.lineTo(l,g),c.lineTo(l,g-s),c.stroke(),c.restore()}drawNodeSquare(t,e,n,s,r,a){if(r<=.02)return;const o=this.ctx,c=Math.max(3,Math.round(n*2));if(o.save(),o.globalAlpha=r,o.strokeStyle=s,o.lineWidth=.75,o.strokeRect(Mn(t-n),Mn(e-n),c,c),o.fillStyle=a||s,o.fillRect(t-.75,e-.75,1.5,1.5),a){const l=Mn(t+n+3),h=Mn(e);o.strokeStyle=a,o.lineWidth=.75,o.beginPath(),o.moveTo(l-1.6,h),o.lineTo(l+1.6,h),o.moveTo(l,h-1.6),o.lineTo(l,h+1.6),o.stroke()}o.restore()}drawLinkLine(t,e,n,s,r=!1,a=.75){if(s<=.02)return;const o=this.ctx;o.save(),o.globalAlpha=s,o.strokeStyle=n,o.lineWidth=a,r&&o.setLineDash([2,3]),o.beginPath(),o.moveTo(Mn(t.x),Mn(t.y)),o.lineTo(Mn(e.x),Mn(e.y)),o.stroke(),o.restore()}drawCallout(t,e,n,s,r,a,o,c="auto",l=!0){if(a<=.05)return;const h=this.ctx;h.save(),h.font=Ad;const p=h.measureText(n).width;h.font=dc;const g=h.measureText(s).width,m=3.5,x=2.5,S=Math.ceil(Math.max(p,g)+m*2+2),d=18,u=t<this.width*.56?1:-1,_=c==="top"?[[-S*.5,-26],[14*u-(u<0?S:0),-19],[-S*.5,13],[14*-u-(-u<0?S:0),-19]]:c==="bottom"?[[-S*.5,13],[14*u-(u<0?S:0),7],[-S*.5,-25]]:[[14*u-(u<0?S:0),-17],[-S*.5,-25],[14*u-(u<0?S:0),7],[14*-u-(-u<0?S:0),-17],[-S*.5,13]],v=16,f=88,T=78;let b=Math.max(v,Math.min(this.width-S-v,t+_[0][0])),M=Math.max(f,Math.min(this.height-d-T,e+_[0][1]));for(const[R,w]of _){const A=Math.max(v,Math.min(this.width-S-v,t+R)),L=Math.max(f,Math.min(this.height-d-T,e+w));if(!o.some(C=>A<C.x+C.w+4&&A+S+4>C.x&&L<C.y+C.h+3&&L+d+3>C.y)){b=A,M=L;break}}const y=Math.round(b),P=Math.round(M);if(o.push({x:y,y:P,w:S,h:d}),l){const R=y+S*.5,w=P+d*.5;let A=y,L=w;const D=t>=y-4&&t<=y+S+4;D?(A=y+1,L=e>w?P+d:P):R<t?(A=y+S+1,L=P+4):(A=y-1,L=P+4);const C=D?A:t+(A-t)*.42;h.globalAlpha=a*.3,h.strokeStyle=Cn,h.lineWidth=.75,h.beginPath(),h.moveTo(Mn(t),Mn(e)),h.lineTo(Mn(C),Mn(L)),D||h.lineTo(Mn(A),Mn(L)),h.stroke()}h.globalAlpha=a*.42,h.fillStyle="rgba(236, 233, 226, 0.56)",h.fillRect(y,P,S,d),h.globalAlpha=a*.72,h.fillStyle=r,h.fillRect(y,P+1.5,1.2,d-3),h.globalAlpha=a*.74,h.font=Ad,h.fillStyle=Cn,h.textBaseline="top",h.fillText(n,y+m+1,P+x),h.globalAlpha=a*.56,h.font=dc,h.fillStyle=r===fc?fc:Cn,h.fillText(s,y+m+1,P+x+8),h.restore()}projectWorld(t,e,n){this.worldPos.copy(t).multiplyScalar(e).add(this.sphereCenter),this.outwardWorld.copy(t).normalize(),this.toCam.subVectors(n.position,this.worldPos).normalize();const s=this.outwardWorld.dot(this.toCam);this.ndc.copy(this.worldPos).project(n);const r=(this.ndc.x+1)*.5,a=(1-this.ndc.y)*.5;return{x:r*this.width,y:a*this.height,nx:r,ny:a,front:s,visible:this.ndc.z>=-1&&this.ndc.z<=1}}drawGravitationLine(t,e){this.ballWorldDir.copy(t.ballDir).applyQuaternion(t.sphereRoot.quaternion).normalize();const n=t.gravityWorldDir,s=Math.max(-1,Math.min(1,this.ballWorldDir.dot(n))),r=Math.acos(s);if(r<.055||(this.gravArcAxis.crossVectors(this.ballWorldDir,n),this.gravArcAxis.lengthSq()<1e-8))return;this.gravArcAxis.normalize();const a=Math.sin(Math.min(Math.PI*.5,r)),o=t.ballRadius+.022,c=18,l=[];for(let d=0;d<=c;d++){const u=d/c;this.gravArcQuat.setFromAxisAngle(this.gravArcAxis,r*u),this.gravArcDir.copy(this.ballWorldDir).applyQuaternion(this.gravArcQuat).normalize(),l.push(this.projectWorld(this.gravArcDir,o,t.camera))}const h=this.ctx,p=Pd((r-.055)/.16)*.52;h.save(),h.strokeStyle=Cn,h.lineWidth=.8;for(let d=0;d<c;d++){const u=l[d],_=l[d+1];if(!u.visible||!_.visible)continue;const v=.5*(u.front+_.front);h.globalAlpha=p*this.depthAlpha(v,1,.28),h.setLineDash(v<.04?[2,3]:[3.5,2.5]),h.beginPath(),h.moveTo(u.x,u.y),h.lineTo(_.x,_.y),h.stroke()}const g=Math.floor(c*.55),m=l[g-1],x=l[g],S=l[g+1];if(m&&x&&S&&x.visible){const d=S.x-m.x,u=S.y-m.y,_=Math.hypot(d,u);if(_>1.5){const v=d/_,f=u/_,T=-f,b=v,M=3.2,y=1.9;if(h.setLineDash([]),h.globalAlpha=p*1.35*this.depthAlpha(x.front,1,.35),h.strokeStyle=Cn,h.lineWidth=.85,h.beginPath(),h.moveTo(x.x-v*M+T*y,x.y-f*M+b*y),h.lineTo(x.x,x.y),h.lineTo(x.x-v*M-T*y,x.y-f*M-b*y),h.stroke(),r>.14&&x.front>.05){const P=`GRAV ${a.toFixed(2)}G`;h.font=dc;const R=h.measureText(P).width,w=T>=0?1:-1,A=Math.round(x.x+w*(6+(w>0?0:R+5))),L=Math.round(x.y+b*5-4),D=Math.ceil(R+5),C=9;e.some(O=>A<O.x+O.w+3&&A+D+3>O.x&&L<O.y+O.h+3&&L+C+3>O.y)||(e.push({x:A,y:L,w:D,h:C}),h.globalAlpha=p*.52,h.fillStyle="rgba(236, 233, 226, 0.55)",h.fillRect(A,L,D,C),h.globalAlpha=p*.92,h.fillStyle=Cn,h.textBaseline="top",h.fillText(P,A+2.5,L+1.5))}}}h.restore()}sphereScreen={cx:0,cy:0,radius:0};drawOrbitalLightsArc(t){const e=this.ctx,{level:n,camera:s,clearedMask:r,nextCpIdx:a,allCleared:o,toggleMask:c}=t;this.ndc.copy(this.sphereCenter).project(s);const l=(this.ndc.x+1)*.5*this.width,h=(1-this.ndc.y)*.5*this.height,p=s.position.distanceTo(this.sphereCenter),g=s.fov*Math.PI/180,m=Math.min(.95,Qe/Math.max(Qe+.05,p)),S=m/Math.sqrt(1-m*m)/Math.tan(g*.5)*(this.height*.5);this.sphereScreen.cx=l,this.sphereScreen.cy=h,this.sphereScreen.radius=S;const d=this.width<640,u=d?18:26,_=d?16:Math.max(20,Math.min(32,S*.068)),v=Math.max(90,this.width-l-u),f=Math.min(S+_,v),T=n.checkpoints.length,b=n.toggles.length,M=b>0,y=d?25:32,P=d?16:20,R=y/f,w=P/f,A=Math.max(0,T-1)*R,L=M?Math.max(0,b-1)*R:0,D=A+(M?w*2+L:0),C=-D*.5,F=D*.5,O=(d?20:26)/f,q=d?4:4.6,V=d?4:5,X=[];for(let B=0;B<T;B++){const j=C+B*R,Mt=((!(!!r[B]||o)&&B===a?q+3.4:q+.6)+V)/f;X.push({a0:j-Mt,a1:j+Mt})}if(M){const B=C+A+w,j=5.5/f;X.push({a0:B-j,a1:B+j});const K=B+w;for(let ot=0;ot<b;ot++){const et=K+ot*R,Mt=(q+.6+V)/f;X.push({a0:et-Mt,a1:et+Mt})}}X.sort((B,j)=>B.a0-j.a0),e.save(),e.strokeStyle=Cn,e.globalAlpha=.22,e.lineWidth=1;let k=C-O;const $=F+O;for(let B=0;B<X.length;B++){const j=X[B];j.a0>k+.002&&(e.beginPath(),e.arc(l,h,f,k,Math.min($,j.a0)),e.stroke()),k=Math.max(k,j.a1)}$>k+.002&&(e.beginPath(),e.arc(l,h,f,k,$),e.stroke());const dt=(B,j,K,ot)=>{const et=Math.cos(B),Mt=Math.sin(B);e.globalAlpha=ot,e.beginPath(),e.moveTo(l+et*(f-j),h+Mt*(f-j)),e.lineTo(l+et*(f+K),h+Mt*(f+K)),e.stroke()};dt(C-O,3.5,3.5,.28),dt(F+O,3.5,3.5,.28);for(let B=0;B<T;B++){const j=n.checkpoints[B],K=C+B*R,ot=l+Math.cos(K)*f,et=h+Math.sin(K)*f,Mt=!!r[B]||o,Xt=!Mt&&B===a,Nt=j.layer==="pipe";if(Mt)e.globalAlpha=.96,e.fillStyle="#24cc7e",e.beginPath(),e.arc(ot,et,q,0,Math.PI*2),e.fill();else if(Xt){const Jt=Nt?"#24cfc0":"#f58420";e.globalAlpha=.52,e.strokeStyle=Jt,e.lineWidth=1,e.beginPath(),e.arc(ot,et,q+3.2,0,Math.PI*2),e.stroke(),e.globalAlpha=1,e.fillStyle=Jt,e.beginPath(),e.arc(ot,et,q,0,Math.PI*2),e.fill()}else e.globalAlpha=Nt?.62:.36,e.strokeStyle=Nt?"#12998c":Cn,e.lineWidth=1.4,e.beginPath(),e.arc(ot,et,q-.3,0,Math.PI*2),e.stroke()}if(M){const B=C+A+w;e.strokeStyle=Cn,e.lineWidth=1,dt(B,4.5,4.5,.32);const j=B+w;for(let K=0;K<b;K++){const ot=n.toggles[K],et=(c&1<<ot.id)!==0,Mt=ot.colorId===0?pc:Cd,Xt=j+K*R,Nt=l+Math.cos(Xt)*f,Jt=h+Math.sin(Xt)*f;e.beginPath(),et?(e.arc(Nt,Jt,q,0,Math.PI*2),e.globalAlpha=.96,e.fillStyle=Mt,e.fill()):(e.arc(Nt,Jt,q-.2,0,Math.PI*2),e.globalAlpha=.55,e.strokeStyle=Mt,e.lineWidth=1.4,e.stroke())}}e.restore()}clear(){this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0),this.ctx.clearRect(0,0,this.width,this.height)}render(t){const e=this.ctx;if(e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.width,this.height),t.sphereRoot.updateMatrixWorld(),this.sphereCenter.setFromMatrixPosition(t.sphereRoot.matrixWorld),this.drawOrbitalLightsArc(t),!this.enabled||t.inTransition)return;const n=[],{grid:s,level:r,camera:a,sphereRoot:o,time:c}=t,l=.5+.5*Math.sin(c*4),h=this.projectLocal(t.ballDir,t.ballRadius,o,a),p=this.projectLocal(CS,_e+.012,o,a);if(p.visible&&p.front>.14){const d=this.depthAlpha(p.front,.72,0);this.drawNodeSquare(p.x,p.y,2.8,Cn,d*.8),this.drawCallout(p.x,p.y,"START",`NORTH POLE ${PS(t.elapsedSec)}`,fc,d,n,"top",!0)}const g=!t.allCleared&&t.nextCpIdx>=0?r.checkpoints[t.nextCpIdx]:null;let m=null;if(g){const d=g.layer==="pipe"?xl+.01:_e+.012,u=this.projectLocal(g.dir,d,o,a);m=u;const _=g.layer==="pipe",v=g.isFinish?Bs:_?Rd:RS;if(h.visible&&u.visible){const f=u.x-h.x,T=u.y-h.y,b=Math.hypot(f,T);if(b>22){const M=this.depthAlpha(u.front,.5,.2);if(this.drawLinkLine(h,u,v,M,u.front<.08,.75),b>54){const y=Math.acos(Math.max(-1,Math.min(1,t.ballDir.dot(g.dir))))*t.ballRadius*cs,P=this.computeAStarDistanceMm(t),R=P>=0?`${P.toFixed(1)}`:"--",w=`ABS ${y.toFixed(1)}  A* ${R}mm`;let A=Math.atan2(T,f);A>Math.PI*.5?A-=Math.PI:A<-Math.PI*.5&&(A+=Math.PI);const L=(h.x+u.x)*.5,D=(h.y+u.y)*.5;e.save(),e.translate(L,D),e.rotate(A),e.font=AS,e.textAlign="center",e.textBaseline="bottom";const C=e.measureText(w).width;e.globalAlpha=Math.min(.4,M*.68),e.fillStyle="rgba(236, 233, 226, 0.55)",e.fillRect(-C*.5-2.5,-10.5,C+5,8.5),e.globalAlpha=Math.min(.72,M*1.2),e.fillStyle=v,e.fillText(w,0,-3),e.restore()}}}if(u.visible){const f=this.depthAlpha(u.front,.94,.3),T=(g.isFinish?11:9.5)+l*.9;this.drawBrackets(u.x,u.y,T,3.5,u.front>.05?Cn:v,f,.9),this.drawNodeSquare(u.x,u.y,2.5,Cn,f*.85,v);const b=g.isFinish?"EXIT":`TARGET ${t.nextCpIdx+1}`,M=g.isFinish?u.front>.05?"SOUTH POLE · OPEN":"SOUTH POLE · FAR SIDE":_?u.front>.05?"ACTIVE · SUB-RAIL":"SUB-RAIL · FAR SIDE":u.front>.05?"ACTIVE":"ACTIVE · FAR SIDE";this.drawCallout(u.x,u.y,b,M,v,this.depthAlpha(u.front,.96,.46),n,"top",!0)}}for(let d=0;d<r.toggles.length;d++){const u=r.toggles[d],_=u.colorId===0?pc:Cd,v=(t.toggleMask&1<<u.id)!==0,f=t.togglePulse[u.id]||0,T=t.readyPortal.kind==="toggle"&&t.readyPortal.toggleId===u.id,b=Math.max(f,T?.75:0),M=this.projectLocal(u.dir,_e+.015,o,a),y=this.depthAlpha(M.front,.92,.22);(M.front>-.1||b>.1)&&(this.drawBrackets(M.x,M.y,7.5+b*1.6,3,_,Math.min(1,y+b*.2),.85),this.drawNodeSquare(M.x,M.y,2.2,Cn,y,_),(M.front>.06||b>.1)&&this.drawCallout(M.x,M.y,`SWITCH ${u.label}`,v?"ACTIVE":"INACTIVE",_,Math.min(1,this.depthAlpha(M.front,.9,.36)+b*.2),n,"auto",!0));for(let P=0;P<u.wallIds.length;P++){const R=u.wallIds[P],w=s.walls[R];if(!w)continue;const A=t.wallExt[R],L=A>.5,D=_e+(In-_e)*A+.01,C=this.projectLocal(w.midDir,D,o,a),F=M.front>.05&&C.front>.05,O=Math.min(.92,Math.max(y,this.depthAlpha(C.front,.84,.18))*(F?.58:.24)+b*.38);this.drawLinkLine(M,C,_,O,!F||!L,b>.15?1:.75);const q=Math.min(1,this.depthAlpha(C.front,.86,.2)+b*.22);this.drawNodeSquare(C.x,C.y,2.5,_,q,L?_:Bs),(C.front>.16||b>.15)&&this.drawCallout(C.x,C.y,`DOOR ${u.label}${P+1}`,L?"CLOSED":"OPEN",_,Math.min(.95,this.depthAlpha(C.front,.82,.3)+b*.25),n,"auto",!0)}for(let P=0;P<u.shutterIds.length;P++){const R=u.shutterIds[P],w=s.shutters[R];if(!w)continue;const A=t.shutterOpen[R]>.5,L=this.projectLocal(w.dir,_e+.012,o,a),D=M.front>.05&&L.front>.05,C=Math.min(.92,Math.max(y,this.depthAlpha(L.front,.84,.18))*(D?.56:.24)+b*.38);this.drawLinkLine(M,L,_,C,!D||!A,b>.15?1:.75);const F=Math.min(1,this.depthAlpha(L.front,.86,.2)+b*.22);this.drawNodeSquare(L.x,L.y,2.8,_,F,A?Bs:_),(L.front>.18||b>.15)&&this.drawCallout(L.x,L.y,`PORTAL ${w.label}`,A?`OPEN · SW ${u.label}`:`CLOSED · SW ${u.label}`,_,Math.min(.95,this.depthAlpha(L.front,.82,.3)+b*.25),n,"auto",!0)}}const x=new Set;for(const d of r.toggles)for(const u of d.shutterIds)x.add(u);const S=t.ballLayer==="pipe"||g!==null&&g.layer==="pipe";for(let d=0;d<s.shutters.length;d++){const u=s.shutters[d];if(t.shutterOpen[d]<.5)continue;const _=(t.readyPortal.kind==="shutter-enter"||t.readyPortal.kind==="shutter-exit")&&t.readyPortal.shutterId===u.id,v=this.projectLocal(u.dir,_e+.01,o,a);if(S&&m&&g?.layer==="pipe"){const T=v.front>.05&&m.front>.05;this.drawLinkLine(v,m,Rd,T?.34:.14,!0,.75)}if(x.has(u.id)&&!_)continue;const f=this.depthAlpha(v.front,.84,.16);(v.front>.08||_)&&(_&&this.drawBrackets(v.x,v.y,9.5+t.readyDwell*1.6,3.5,Bs,.94,.95),this.drawNodeSquare(v.x,v.y,2.5,Cn,f*.82,Bs),(v.front>.2||_)&&this.drawCallout(v.x,v.y,`PORTAL ${u.label}`,t.ballLayer==="pipe"?"OPEN · EXIT":"OPEN",Bs,_?.95:this.depthAlpha(v.front,.76,.2),n,"auto",!0))}if(this.drawGravitationLine(t,n),h.visible&&h.front>-.1){const d=this.depthAlpha(h.front,.68,.2),u=t.readyPortal.kind!=="none",_=t.readyPortal.kind==="toggle"?pc:u?Bs:Cn;this.drawNodeSquare(h.x,h.y,3,Cn,d*.68,u?_:void 0)}}}const Ra=new URLSearchParams(location.search);Ra.has("clean")&&document.body.classList.add("clean");const ze=document.querySelector("#c"),Js=new U_({canvas:ze,antialias:!1,powerPreference:"high-performance"});Js.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Js.shadowMap.enabled=!0;Js.shadowMap.type=kd;Js.toneMapping=Bi;const vl=new gf,on=new hi(32,window.innerWidth/window.innerHeight,.1,60);let us=4.55,es=4.55;const Pn=0,Sn=.053;let an=Pn,rn=Sn,zn=Pn,Dn=Sn;on.position.set(0,.24,us);on.lookAt(0,-.02,0);const Yn=ES(Js,vl),Vs=new SS(Js,vl,on),fe=new yS,Ar=new IS(document.getElementById("telemetry-canvas")),Dr=new _n;vl.add(Dr);const Ue=B_(),ee=cS(Ue);Dr.add(ee.root);const Qs=new X_(ee.ballMesh,ee.plasticMat);vl.add(Qs.group);let jn=!1,Lr=!1,jo=0,Ca=0;const Ii=new U,Di=new U,zs=bS(Qe+.0055);Dr.add(zs.group);const DS=Math.max(1,Math.min(Ue.levels.length,Number(Ra.get("level"))||1));let Ge=DS-1;const Fh="codevember-13-labyrinth-progress-v1",Br=new Set;try{const i=window.localStorage.getItem(Fh);if(i){const t=JSON.parse(i);if(Array.isArray(t))for(const e of t)typeof e=="number"&&e>=1&&e<=Ue.levels.length&&Br.add(e)}}catch{}function jf(){try{window.localStorage.setItem(Fh,JSON.stringify(Array.from(Br).sort((i,t)=>i-t)))}catch{}}let Bo=0,zo=!1;const ms=new U(0,1,0),tl=new U(0,-1,0),jr=_e-.115;let Be=null;const Es=Ue.walls.length,$i=new Float32Array(Es),el=new Float32Array(Es),tp=new Float32Array(Es),uh=new Float32Array(Es),pi=Ue.shutters.length,Fi=new Float32Array(pi),dh=new Float32Array(pi),ep=new Float32Array(pi),fh=new Float32Array(pi),gs=new Float32Array(pi),Id=new Float32Array(pi);let ds=0,fs=0;const Li=new Float32Array(4);let Sr=10,ko=.54,np=.4;const Ot=new dS(Ue,Ue.levels[Ge]),pa=new Oe().setFromAxisAngle(new U(1,0,0),Math.PI/2-Sn).multiply(new Oe().setFromAxisAngle(new U(0,1,0),-.34)).normalize(),ma=new Oe().setFromAxisAngle(new U(0,1,0),-.36).normalize(),Je=pa.clone(),Kn=new U(0,0,0),xs=document.getElementById("level-num"),Dd=document.getElementById("level-title"),Pa=document.getElementById("level-picker"),LS=document.getElementById("btn-reset"),ip=document.getElementById("btn-sound"),sp=document.getElementById("btn-help"),Gn=document.getElementById("tap-cue"),ph=document.getElementById("help-card"),Ld=document.getElementById("btn-settings"),Vo=document.getElementById("settings-panel"),rp=Array.from(document.querySelectorAll(".lvl-btn")),ap=Ra.has("debug")||Ra.has("settings")||location.hash==="#debug";function Ei(){const i=Ue.levels[Ge];jn?(xs.textContent="ALL 10 CLEARED",Dd.innerHTML='FREEDOM <span lang="ja">解放</span>'):(xs.textContent=`LEVEL ${i.level}`,Dd.innerHTML=Ot.allCleared?`${i.name} <span lang="ja">${i.nameJa}</span> · CLEAR`:`${i.name} <span lang="ja">${i.nameJa}</span>`);for(const t of rp){const e=Number(t.dataset.level);t.classList.toggle("active",e===i.level),t.classList.toggle("done",Br.has(e))}}function op(){Vs.setAoExcluded([...ee.aoExcluded,...Qs.aoExcluded,zs.group,Yn.backdropMesh,Yn.shadowPlane])}const Bh={onLiftStart:()=>fe.playFinaleLift(),onSealPop:()=>fe.playFinaleSealPop(),onMarbleBounce:i=>fe.playMarbleBounce(i),onShellBounce:i=>fe.playWallHit(i*.78),onSmokeBurst:i=>fe.playSmokePlume(i)};function nl(){Be=null,jn=!0,Lr=!1,jo=0,Ca=0,Ii.copy(on.position),Di.set(0,-.02,0),Kn.set(0,0,0),ee.clearLedTape(),ee.root.visible=!0,ee.setOuterShellVisible(!0),ee.ballMesh.visible=!0,Yn.shadowPlane.visible=!0,Qs.start(Je,Ot.dir,Bh),op(),es=6.55,zn=0,Dn=.24,Ei(),xa()}function lp(){jn&&(jn=!1,Lr=!1,Qs.stop(),Dr.position.set(0,0,0),Yn.backdropMesh.position.set(0,0,0),ee.root.visible=!0,ee.setOuterShellVisible(!0),ee.ballMesh.visible=!0,Yn.shadowPlane.visible=!0,Yn.shadowPlane.scale.setScalar(1),Yn.shadowPlane.material.opacity=1,es=4.55,zn=Pn,Dn=Sn,Ei(),xa())}function cp(i,t,e,n,s=.54,r=.4){ko=s,np=r;for(let a=0;a<Es;a++){const o=Ue.walls[a],c=o.locked||i[a]?1:0;if(el[a]=n?c:$i[a],tp[a]=c,n)$i[a]=c,uh[a]=0;else{const l=.5-.5*o.midDir.dot(e),h=c<el[a]?0:.08;uh[a]=l*r+h}}for(let a=0;a<pi;a++){const o=Ue.shutters[a],c=t[a]?1:0;if(dh[a]=n?c:Fi[a],ep[a]=c,n)Fi[a]=c,fh[a]=0;else{const l=.5-.5*o.dir.dot(e);fh[a]=l*r*.7+.04}}Sr=n?10:0,n&&(ee.applyWallExtensions($i),ee.applyShutterOpenings(Fi))}function il(i,t,e,n=.92,s=.68){Ge=Math.max(0,Math.min(Ue.levels.length-1,i));const a=Ue.levels[Ge],o=new U(-.6,.72,.35).normalize().applyQuaternion(Je.clone().invert());Ot.setLevel(a,!0),Bo=0,zo=!1;const c=Yf(a,Ot.toggleMask,Es),l=Zf(a,Ot.toggleMask,pi);cp(c,l,o,t,n,s),t||fe.playMorph(),e&&(Je.copy(pa),Kn.set(0,0,0),zn=Pn,Dn=Sn,t&&(an=Pn,rn=Sn)),ee.setLevelVisuals(a),ee.applyShutterOpenings(Fi),t&&(ds=0,fs=0,gs.fill(0),ee.applyPoleShutters(0,0)),op(),Ei()}function qs(i,t){lp();const e=Math.max(0,Math.min(Ue.levels.length-1,t)),n=Be!==null&&(Be.phase==="morph"||Be.phase==="tape"),s=Ot.dir.clone().normalize();let r=s.clone();i==="complete"?r=tl.clone():s.y>.85?r=ms.clone():s.y<-.85&&(r=tl.clone());const a=Math.atan2(Math.sin(an),Math.cos(an));an=a,zn=a,Kn.set(0,0,0);const o=i==="intro",c=i==="complete",l=i==="reset";if(o){il(e,!0,!1),Je.copy(ma),an=zn=Pn,rn=Dn=Sn,ee.ballMesh.visible=!1,ee.triggerLedIntro(),Be={kind:"intro",phase:"tape",t:0,targetLevelIdx:e,dropStartDir:ms.clone(),dropTargetDir:ms.clone(),dropStartRadius:Ke,dropDuration:0,dropSoundPlayed:!0,morphDuration:0,tapeDuration:e===0?1/0:6.8,toPoleDuration:1.05,startQuat:ma.clone(),startCamYaw:Pn,startCamPitch:Sn,orbitSweepYaw:0,riseDuration:.54};return}Be={kind:i,phase:n?"morph":"drop",t:0,targetLevelIdx:e,dropStartDir:s,dropTargetDir:r,dropStartRadius:Ot.radius,dropDuration:c?.84:.34,dropSoundPlayed:!1,morphDuration:c?1.55:l?1.05:1.35,tapeDuration:l?0:6.8,toPoleDuration:l?0:1.02,startQuat:Je.clone(),startCamYaw:a,startCamPitch:rn,orbitSweepYaw:c?Math.PI*2:0,riseDuration:c?.56:.48},n&&(ee.ballMesh.visible=!1,il(e,!1,!1,c?1.05:.9,c?.78:.66))}function Ml(){return Be===null||Be.phase!=="tape"?!1:(ze.classList.remove("tap-ready"),ee.clearLedTape(),Be.phase="to-pole",Be.t=0,Be.startQuat=Je.clone(),Be.startCamYaw=an,Be.startCamPitch=rn,!0)}function ui(i,t,e=!0){const n=jn;lp(),t?(Be=null,ee.ballMesh.visible=!0,il(i,!0,!0),ee.clearLedTape()):qs(n?"intro":"switch",i)}function hp(i){const t=Ue.levels[Ge],e=t.toggles[i],n=e?e.dir:new U(0,1,0),s=Yf(t,Ot.toggleMask,Es),r=Zf(t,Ot.toggleMask,pi);cp(s,r,n,!1,.42,.24),Li[i]=1}Ra.has("clean")?ui(Ge,!0,!0):qs("intro",Ge);ee.root.quaternion.copy(Je);ee.ballMesh.position.copy(Ot.dir).multiplyScalar(Ot.radius);function NS(i){const t=Math.max(0,Math.min(1,i)),e=1.55;return 1+(e+1)*Math.pow(t-1,3)+e*Math.pow(t-1,2)}function ta(i){const t=Math.max(0,Math.min(1,i));return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}const un=new Map;let ga=null,_s="sphere",Nr=!1,Ia=!1,mh=0,gh=0,Go=0,Na=!1,sl=0,rl=0,up=0,dp=0,fp=0,Da=!1;const mc=new U,gc=new U,Nd=new Oe,Ud=new Oe,Co=new U;let xh=performance.now();function pp(){const i=Array.from(un.values()),t=i[0],e=i[1];return{midX:(t.x+e.x)*.5,midY:(t.y+e.y)*.5,dist:Math.hypot(e.x-t.x,e.y-t.y)}}ze.addEventListener("pointerdown",i=>{fe.unlock(),un.set(i.pointerId,{x:i.clientX,y:i.clientY});try{ze.setPointerCapture(i.pointerId)}catch{}if(un.size===1)ga=i.pointerId,_s=i.metaKey||i.ctrlKey?"camera":"sphere",Nr=!1,Ia=!1,ze.classList.add(_s==="camera"?"aiming":"dragging"),sl=i.clientX,rl=i.clientY,up=i.clientX,dp=i.clientY,fp=performance.now(),Da=!1,_s==="sphere"&&Kn.set(0,0,0),xh=performance.now();else if(un.size===2){Nr=!0,Ia=!0,Da=!0,_s="camera",Kn.set(0,0,0),ze.classList.remove("dragging"),ze.classList.add("aiming");const t=pp();mh=t.midX,gh=t.midY,Go=t.dist}});ze.addEventListener("pointermove",i=>{if(!un.has(i.pointerId)||(un.set(i.pointerId,{x:i.clientX,y:i.clientY}),Be!==null))return;if(un.size>=2&&Nr){const o=pp(),c=o.midX-mh,l=o.midY-gh;mh=o.midX,gh=o.midY,zn-=c*.0075,Dn=hn.clamp(Dn+l*.0075,-1.24,1.24),Go>12&&o.dist>12&&(es=hn.clamp(es*(Go/o.dist),2.45,5.6)),Go=o.dist;return}if(Ia||i.pointerId!==ga)return;const t=i.clientX-sl,e=i.clientY-rl;if(sl=i.clientX,rl=i.clientY,!Da&&Math.hypot(i.clientX-up,i.clientY-dp)>10&&(Da=!0),jn){jo-=t*.0068,Ca=hn.clamp(Ca+e*.0068,-.1,.72);return}if(_s==="camera"){zn-=t*.0068,Dn=hn.clamp(Dn+e*.0068,-1.24,1.24);return}const n=ze.getBoundingClientRect(),s=Math.max(120,Math.min(n.width,n.height)*.36),r=t/s,a=e/s;if(Math.abs(a)>1e-5||Math.abs(r)>1e-5){mc.set(0,1,0).applyQuaternion(on.quaternion).normalize(),gc.set(1,0,0).applyQuaternion(on.quaternion).normalize(),Ud.setFromAxisAngle(mc,r),Nd.setFromAxisAngle(gc,a),Je.premultiply(Ud).premultiply(Nd).normalize();const o=performance.now(),c=Math.max(.008,(o-xh)*.001);xh=o,Co.copy(mc).multiplyScalar(r/c).addScaledVector(gc,a/c);const l=Co.length();l>6.5&&Co.multiplyScalar(6.5/l),Kn.lerp(Co,.45)}});function mp(i){if(!un.has(i.pointerId))return;const t=i.type==="pointerup"&&i.pointerId===ga&&un.size===1&&!Nr&&!Ia&&_s==="sphere"&&(Be?.phase==="tape"||!Da&&performance.now()-fp<340);if(un.delete(i.pointerId),ze.hasPointerCapture(i.pointerId)&&ze.releasePointerCapture(i.pointerId),un.size<2&&(Nr=!1),un.size===0)ga=null,_s="sphere",Ia=!1,ze.classList.remove("dragging"),ze.classList.toggle("aiming",Na);else if(un.size===1){const[e,n]=un.entries().next().value;ga=e,sl=n.x,rl=n.y}if(t)if(jn){const e=ze.getBoundingClientRect(),n=e.width>0?(i.clientX-e.left)/e.width*2-1:0;Qs.celebrateTap(n,Bh)}else Ml()||_l()}ze.addEventListener("pointerup",mp);ze.addEventListener("pointercancel",mp);ze.addEventListener("wheel",i=>{i.preventDefault(),es=Math.max(2.45,Math.min(5.6,es+i.deltaY*.0024))},{passive:!1});const Hn=new Set;window.addEventListener("keydown",i=>{(i.key==="Meta"||i.key==="Control")&&(Na=!0,un.size===0&&ze.classList.add("aiming"));const t=i.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright","w","a","s","d","q","e"].includes(t))fe.unlock(),Hn.add(t);else if(t>="1"&&t<="9")fe.unlock(),ui(Number(t)-1,!1,!0);else if(t==="0")fe.unlock(),ui(9,!1,!0);else if(t==="[")fe.unlock(),ui(Math.max(0,Ge-1),!1,!0);else if(t==="]")fe.unlock(),ui(Math.min(Ue.levels.length-1,Ge+1),!1,!0);else if(t===" "||t==="enter")jn&&Lr?(i.preventDefault(),fe.unlock(),ui(0,!1,!0)):Be!==null&&Be.phase==="tape"?(i.preventDefault(),fe.unlock(),Ml()):Be===null&&Ot.readyPortal.kind!=="none"&&(i.preventDefault(),fe.unlock(),_l());else if(t==="r")jn?(fe.unlock(),ui(0,!1,!0)):gp();else if(t==="m")xp();else if(t==="t"){const e=!Ar.isEnabled();Ki({...je,telemetry:e},!0)}else t==="?"||t==="h"?al():t==="escape"&&(ph.hidden||al(!1),Pa.hidden||Ho(!1))});window.addEventListener("keyup",i=>{(i.key==="Meta"||i.key==="Control")&&(Na=!1,un.size===0&&ze.classList.remove("aiming")),Hn.delete(i.key.toLowerCase())});window.addEventListener("blur",()=>{Na=!1,Hn.clear(),ze.classList.remove("aiming"),fe.setBackgrounded(!0)});window.addEventListener("focus",()=>{document.hidden||fe.setBackgrounded(!1)});document.addEventListener("visibilitychange",()=>{fe.setBackgrounded(document.hidden)});function gp(){fe.unlock(),qs("reset",Ge)}function xp(){const i=!fe.isEnabled();Ki({...je,sound:i},!0),i&&fe.unlock()}function al(i){const t=i!==void 0?i:ph.hidden;ph.hidden=!t,sp.setAttribute("aria-expanded",String(t)),t&&(Vo.hidden=!0)}const vp={onWallHit:i=>fe.playWallHit(i),onDropIntoPipe:i=>{gs[i]=1,fe.playPortalDrop(),Ei()},onEmergeFromPipe:i=>{gs[i]=1,fe.playPortalEmerge(),Ei()},onToggle:(i,t)=>{fe.playToggle(t),hp(i),Ei()},onCheckpoint:(i,t)=>{fe.playCheckpoint(i,t),t&&(Br.add(Ge+1),jf(),Ge>=Ue.levels.length-1?nl():qs("complete",Ge+1)),Ei()}};function _l(){return Be!==null||jn?!1:Ot.activateReadyPortal(Fi,vp)}let Po="",vr=-1;function xa(){if(jn){if(!Lr){Gn.hidden||(Gn.hidden=!0);return}const e="PLAY AGAIN";e!==Po&&(Gn.textContent=e,Po=e),vr!==0&&(Gn.style.setProperty("--dwell","0"),vr=0),Gn.hidden&&(Gn.hidden=!1);return}if(Be!==null||Ot.readyPortal.kind==="none"){Gn.hidden||(Gn.hidden=!0),vr!==0&&(Gn.style.setProperty("--dwell","0"),vr=0);return}const i=Ot.readyPortal.kind==="shutter-enter"?"TAP TO ENTER":Ot.readyPortal.kind==="shutter-exit"?"TAP TO EXIT":Ot.readyPortal.kind==="toggle"?"TAP TO SWITCH":"TAP TO FINISH";i!==Po&&(Gn.textContent=i,Po=i);const t=Math.round(Ot.readyPortalDwell*200)/200;t!==vr&&(Gn.style.setProperty("--dwell",String(t)),vr=t),Gn.hidden&&(Gn.hidden=!1)}LS.addEventListener("click",()=>{jn?(fe.unlock(),ui(0,!1,!0)):gp()});ip.addEventListener("click",xp);sp.addEventListener("click",()=>al());Gn.addEventListener("click",i=>{i.stopPropagation(),fe.unlock(),jn?ui(0,!1,!0):Ml()||_l()});const zh="codevember-13-labyrinth-settings-v1",Ni={ssao:.56,grade:1,plastic:1,scratches:1,telemetry:!0,sound:!0},ol=document.getElementById("opt-ssao"),ll=document.getElementById("opt-grade"),cl=document.getElementById("opt-plastic"),hl=document.getElementById("opt-scratches"),ul=document.getElementById("opt-telemetry"),US=document.getElementById("btn-test-finale"),OS=document.getElementById("btn-factory-reset");function FS(){try{const i=window.localStorage.getItem(zh);if(!i)return{...Ni};const t=JSON.parse(i),e=(n,s,r,a)=>typeof n=="number"&&Number.isFinite(n)?Math.max(s,Math.min(r,n)):a;return{ssao:e(t.ssao,0,1,Ni.ssao),grade:e(t.grade,0,1.5,Ni.grade),plastic:e(t.plastic,0,1.8,Ni.plastic),scratches:e(t.scratches,0,2,Ni.scratches),telemetry:typeof t.telemetry=="boolean"?t.telemetry:Ni.telemetry,sound:typeof t.sound=="boolean"?t.sound:Ni.sound}}catch{return{...Ni}}}let je={...Ni};function Ki(i,t){if(je={...i},Vs.aoPass.blendIntensity=je.ssao,Vs.gradePass.material.uniforms.uGradeStrength.value=je.grade,ee.setPlasticOpacity(je.plastic),ee.setScratchStrength(je.scratches),Ar.setEnabled(je.telemetry),fe.setEnabled(je.sound),ip.setAttribute("aria-pressed",String(je.sound)),ol&&(ol.value=String(je.ssao)),ll&&(ll.value=String(je.grade)),cl&&(cl.value=String(je.plastic)),hl&&(hl.value=String(je.scratches)),ul&&(ul.checked=je.telemetry),t)try{window.localStorage.setItem(zh,JSON.stringify(je))}catch{}}function Mp(){try{window.localStorage.removeItem(zh),window.localStorage.removeItem(Fh)}catch{}Br.clear(),Ki(Ni,!1),Ei()}Ki(FS(),!1);function Ho(i){if(!ap)return;const t=i!==void 0?i:Pa.hidden;Pa.hidden=!t,xs.setAttribute("aria-expanded",String(t))}if(ap){xs.disabled=!1,xs.classList.add("dev-select"),xs.title="Select level (dev)",xs.addEventListener("click",i=>{i.stopPropagation(),fe.unlock(),Ho()});for(const i of rp)i.addEventListener("click",()=>{fe.unlock();const t=Number(i.dataset.level);ui(t-1,!1,!0),Ho(!1)});window.addEventListener("pointerdown",i=>{!Pa.hidden&&!Pa.contains(i.target)&&i.target!==xs&&Ho(!1)}),Ld.hidden=!1,Ld.addEventListener("click",()=>{const i=Vo.hidden;Vo.hidden=!i,i&&al(!1)}),ol.addEventListener("input",()=>{Ki({...je,ssao:Number(ol.value)},!0)}),ll.addEventListener("input",()=>{Ki({...je,grade:Number(ll.value)},!0)}),cl.addEventListener("input",()=>{Ki({...je,plastic:Number(cl.value)},!0)}),hl.addEventListener("input",()=>{Ki({...je,scratches:Number(hl.value)},!0)}),ul.addEventListener("change",()=>{Ki({...je,telemetry:ul.checked},!0)}),US.addEventListener("click",()=>{fe.unlock(),Vo.hidden=!0,nl()}),OS.addEventListener("click",()=>{Mp()})}let _p=0,Sp=0,oa=1;function Ua(){const i=Math.max(1,Math.round(ze.clientWidth||window.innerWidth)),t=Math.max(1,Math.round(ze.clientHeight||window.innerHeight));_p=i,Sp=t,Js.setSize(i,t,!1),Vs.setSize(i,t),Ar.resize(i,t);const e=i/t;on.aspect=e,on.fov=32,oa=e<1?Math.max(1,.94/Math.max(.42,e)):1,on.updateProjectionMatrix()}window.addEventListener("resize",Ua);window.visualViewport?.addEventListener("resize",Ua);new ResizeObserver(Ua).observe(ze);Ua();window.__labyrinth={setLevel:(i,t=!1)=>ui(i-1,t,!0),flipToggle:(i=0)=>{Ot.toggleMask^=1<<i,hp(i),Ei()},enterPipe:(i=0)=>{Ot.enterPipeAtShutter(i),Ei()},tapPortal:()=>_l(),seatOnShutter:(i=0)=>{const t=Ue.shutters[i];t&&(Ot.layer="upper",Ot.dir.copy(t.dir),Ot.vel.set(0,0,0),Ot.radius=Ke,Je.setFromUnitVectors(t.dir,Ss),Kn.set(0,0,0))},setFinishReady:()=>{const i=Ue.levels[Ge].checkpoints.length;for(let t=0;t<i-1;t++)Ot.cleared[t]=!0;Ot.allCleared=!1,Ei()},seatOnSouthPole:()=>{Ot.layer="upper",Ot.dir.copy(tl),Ot.vel.set(0,0,0),Ot.radius=Ke,Je.setFromUnitVectors(tl,Ss),Kn.set(0,0,0)},seatOnToggle:(i=0)=>{const t=Ue.levels[Ge].toggles[i];t&&(Ot.layer="upper",Ot.dir.copy(t.dir),Ot.vel.set(0,0,0),Ot.radius=Ke,Je.setFromUnitVectors(t.dir,Ss),Kn.set(0,0,0))},setRotation:(i,t,e=0)=>{Je.setFromEuler(new ts(i,t,e,"YXZ")),Kn.set(0,0,0)},setZoom:i=>{es=i,us=i},setCamera:(i,t,e=!0)=>{zn=i,Dn=hn.clamp(t,-1.24,1.24),e&&(an=zn,rn=Dn)},triggerComplete:()=>{Br.add(Ge+1),jf(),Ge>=Ue.levels.length-1?nl():qs("complete",Ge+1)},triggerFinale:()=>nl(),stopFinale:()=>ui(0,!1,!0),skipTape:()=>Ml(),replayIntro:()=>qs("intro",Ge),resetSettings:()=>Mp(),getState:()=>({level:Ge+1,name:Ue.levels[Ge].name,finalePhase:Qs.phase,transitionPhase:Be?.phase??null,layer:Ot.layer,radius:Ot.radius,readyPortal:Ot.readyPortal,readyPortalDwell:Ot.readyPortalDwell,northIrisOpen:ds,southIrisOpen:fs,toggleMask:Ot.toggleMask,cleared:Ot.getClearedCount(),total:Ue.levels[Ge].checkpoints.length,nextCp:Ue.levels[Ge].checkpoints[Ot.getNextCheckpointIndex()]?.label??"DONE",stats:Ue.levels[Ge].stats})};let Od=performance.now();const Fd=new U,Bd=new Oe,Zi=new U,Ss=new U(Math.cos(Sn)*Math.sin(Pn),Math.sin(Sn),Math.cos(Sn)*Math.cos(Pn)).normalize(),zd=new U(0,1,0),ea=Ss.clone();let Mr=0;function yp(i){requestAnimationFrame(yp);const t=Math.min((i-Od)*.001,.05);Od=i;const e=i*.001;for(let f=0;f<Li.length;f++)Li[f]>0&&(Li[f]=Math.max(0,Li[f]-t*4.2));let n=!1;for(let f=0;f<pi;f++)gs[f]>0&&(gs[f]=Math.max(0,gs[f]-t/.42),n=!0);const s=np+ko+.2;if(Sr<=s||n){if(Sr<=s){Sr+=t;for(let f=0;f<Es;f++){if(Ue.walls[f].locked){$i[f]=1;continue}const T=(Sr-uh[f])/ko;$i[f]=el[f]+(tp[f]-el[f])*ta(T)}for(let f=0;f<pi;f++){const T=(Sr-fh[f])/(ko*.95);Fi[f]=dh[f]+(ep[f]-dh[f])*ta(T)}ee.applyWallExtensions($i)}for(let f=0;f<pi;f++){const T=gs[f]>0?Math.sin(gs[f]*Math.PI)*.42:0;Id[f]=Math.max(0,Fi[f]-T)}ee.applyShutterOpenings(Id)}Zi.set(0,0,0);const r=1.85;if((Hn.has("arrowup")||Hn.has("w"))&&(Zi.x+=r),(Hn.has("arrowdown")||Hn.has("s"))&&(Zi.x-=r),(Hn.has("arrowleft")||Hn.has("a"))&&(Zi.y+=r),(Hn.has("arrowright")||Hn.has("d"))&&(Zi.y-=r),Hn.has("q")&&(Zi.z+=r),Hn.has("e")&&(Zi.z-=r),Zi.lengthSq()>0&&Kn.lerp(Zi,Math.min(1,t*8)),un.size===0){const f=Kn.length();f>1e-4&&(Fd.copy(Kn).multiplyScalar(1/f),Bd.setFromAxisAngle(Fd,f*t),Je.premultiply(Bd).normalize(),Kn.multiplyScalar(Math.exp(-6.5*t)))}const a=Math.round(ze.clientWidth),o=Math.round(ze.clientHeight);if(a>0&&o>0&&(a!==_p||o!==Sp)&&Ua(),Dr.position.set(0,0,0),Yn.shadowPlane.scale.setScalar(1),jn){fe.updateAmbience(!1);const f=Qs.step(t,Je,on.position,Bh);fe.updateRoll(f.ballSpeed*.55),Dr.position.copy(f.corePos),ee.root.visible=!0,ee.setOuterShellVisible(f.outerShellVisible),ee.ballMesh.visible=f.intactBallVisible,Yn.shadowPlane.visible=f.outerShellVisible,f.outerShellVisible&&(Yn.shadowPlane.scale.setScalar(f.shadowScale),Yn.shadowPlane.material.opacity=f.shadowOpacity),f.readyForReplay&&!Lr&&(Lr=!0,xa());const T=6.55*oa,b=jo,M=hn.clamp(.24+Ca,.06,1.15),y=T*Math.cos(M)*Math.sin(b),P=T*Math.sin(M),R=T*Math.cos(M)*Math.cos(b),A=Math.atan2(-f.ballDirXZ.x,-f.ballDirXZ.z)+.14+jo,L=hn.clamp(.15+Ca,.05,.85),D=1.48*oa,C=f.ballPos.x+f.ballDirXZ.x*.24,F=$e+.16,O=f.ballPos.z+f.ballDirXZ.z*.24,q=C+D*Math.cos(L)*Math.sin(A),V=Math.max($e+.2,F+D*Math.sin(L)),X=O+D*Math.cos(L)*Math.cos(A),k=f.followBlend,$=hn.lerp(y,q,k),dt=hn.lerp(P,V,k),B=hn.lerp(R,X,k),j=hn.lerp(0,C,k),K=hn.lerp(-.28,F,k),ot=hn.lerp(.04,O,k),et=1-Math.exp(-(4.2+k*3.2)*t);Ii.x+=($-Ii.x)*et,Ii.y+=(dt-Ii.y)*et,Ii.z+=(B-Ii.z)*et,Di.x+=(j-Di.x)*et,Di.y+=(K-Di.y)*et,Di.z+=(ot-Di.z)*et,on.position.set(Ii.x+f.camShakeX,Ii.y+f.camShakeY,Ii.z),on.lookAt(Di.x+f.camShakeX*.35,Di.y+f.camShakeY*.35,Di.z),Yn.backdropMesh.position.set(on.position.x,0,on.position.z),zs.group.visible=!1,ee.setReadyHole(-1,!1),ee.root.quaternion.copy(f.coreQuat),ee.updateLeds(e,Ot.cleared,Ot.getNextCheckpointIndex(),!0,Ot.toggleMask,Li),Vs.render(e),Ar.clear();return}if(Be!==null){const f=Be;if(f.t+=t,fe.updateRoll(0),f.phase==="drop"){const w=Math.min(1,f.t/f.dropDuration),A=Math.min(1,w/.34),L=Math.max(0,(w-.3)/.7);L>.02&&!f.dropSoundPlayed&&(f.dropSoundPlayed=!0,fe.playPortalDrop());const D=f.dropStartDir.clone().lerp(f.dropTargetDir,ta(A)).normalize(),C=f.dropStartRadius+(jr-f.dropStartRadius)*(L*L);if(ee.ballMesh.visible=w<.94,ee.ballMesh.position.copy(D).multiplyScalar(C),w>=1){ee.ballMesh.visible=!1,f.phase="morph",f.t=0;const F=f.kind==="complete"?1.06:f.kind==="reset"?.72:.92,O=f.kind==="complete"?.78:f.kind==="reset"?.4:.68;il(f.targetLevelIdx,!1,!1,F,O)}}else if(f.phase==="morph"){const w=Math.min(1,f.t/f.morphDuration),A=ta(w),L=f.tapeDuration>0?ma:pa;Je.copy(f.startQuat).slerp(L,A).normalize(),f.orbitSweepYaw>.01?(an=f.startCamYaw+A*(Pn+f.orbitSweepYaw-f.startCamYaw),rn=f.startCamPitch+(Sn-f.startCamPitch)*A+.22*Math.sin(Math.PI*w)):(an=f.startCamYaw+(Pn-f.startCamYaw)*A+(f.kind==="reset"?.58:.24)*Math.sin(Math.PI*w),rn=f.startCamPitch+(Sn-f.startCamPitch)*A+.14*Math.sin(Math.PI*w)),zn=an,Dn=rn,w>=1&&(an=zn=Pn,rn=Dn=Sn,Je.copy(L),f.tapeDuration>0?(ee.ballMesh.visible=!1,ee.triggerLedIntro(),f.phase="tape",f.t=0):(ee.ballMesh.visible=!0,ee.ballMesh.position.copy(ms).multiplyScalar(jr),fe.playPortalEmerge(),f.phase="rise",f.t=0))}else if(f.phase==="tape")Je.copy(ma),an=zn=Pn,rn=Dn=Sn,ee.ballMesh.visible=!1,ze.classList.add("tap-ready"),Number.isFinite(f.tapeDuration)&&f.t>=f.tapeDuration&&(ze.classList.remove("tap-ready"),ee.clearLedTape(),f.phase="to-pole",f.t=0,f.startQuat=ma.clone(),f.startCamYaw=Pn,f.startCamPitch=Sn);else if(f.phase==="to-pole"){const w=Math.min(1,f.t/Math.max(.01,f.toPoleDuration)),A=ta(w);Je.copy(f.startQuat).slerp(pa,A).normalize(),an=zn=f.startCamYaw+(Pn-f.startCamYaw)*A,rn=Dn=f.startCamPitch+(Sn-f.startCamPitch)*A,ee.ballMesh.visible=!1,w>=1&&(Je.copy(pa),an=zn=Pn,rn=Dn=Sn,ee.ballMesh.visible=!0,ee.ballMesh.position.copy(ms).multiplyScalar(jr),fe.playPortalEmerge(),f.phase="rise",f.t=0)}else if(f.phase==="rise"){const w=Math.min(1,f.t/f.riseDuration),A=NS(w),L=jr+(Ke-jr)*A;ee.ballMesh.visible=!0,ee.ballMesh.position.copy(ms).multiplyScalar(L),w>=1&&(Ot.dir.copy(ms),Ot.radius=Ke,Ot.vel.set(0,0,0),ee.ballMesh.position.copy(ms).multiplyScalar(Ke),Be=null)}us+=(es-us)*Math.min(1,t*9);const T=us*oa,b=Math.cos(rn);on.position.set(T*b*Math.sin(an),T*Math.sin(rn),T*b*Math.cos(an)),on.lookAt(0,-.02*b,0);const M=hn.smoothstep(Math.sin(rn),-.22,.18);Yn.shadowPlane.material.opacity=M,ea.copy(Ss),Mr+=(0-Mr)*Math.min(1,t*10),zs.group.visible=!1,zs.setPose(Ss,zd,Mr);let y=0,P=0;if(Be!==null){const w=Be;if(w.phase==="drop"){const A=Math.min(1,w.t/w.dropDuration);w.dropTargetDir.y>.5&&(y=A<.78?1:0),w.dropTargetDir.y<-.5&&(P=A<.78?1:0)}else if(w.phase==="morph"){const A=Math.min(1,w.t/w.morphDuration);y=w.tapeDuration===0&&A>.84?1:0}else w.phase==="to-pole"?y=Math.min(1,w.t/Math.max(.01,w.toPoleDuration))>.65?1:0:w.phase==="rise"&&(y=Math.min(1,w.t/w.riseDuration)<.72?1:0)}const R=1-Math.exp(-11*t);ds+=(y-ds)*R,fs+=(P-fs)*R,ee.applyPoleShutters(ds,fs),ee.setReadyHole(-1,!1),xa(),ee.root.quaternion.copy(Je),ee.updateLeds(e,Ot.cleared,Ot.getNextCheckpointIndex(),Ot.allCleared,Ot.toggleMask,Li),Vs.render(e),Ar.render({time:e,elapsedSec:Bo,camera:on,sphereRoot:ee.root,grid:Ue,level:Ue.levels[Ge],ballDir:Ot.dir,ballRadius:Ot.radius,ballLayer:Ot.layer,gravityWorldDir:ea,clearedMask:Ot.cleared,nextCpIdx:Ot.getNextCheckpointIndex(),allCleared:Ot.allCleared,readyPortal:Ot.readyPortal,readyDwell:Ot.readyPortalDwell,toggleMask:Ot.toggleMask,togglePulse:Li,wallExt:$i,shutterOpen:Fi,inTransition:!0});return}const c=1-Math.exp(-11*t);us+=(es-us)*Math.min(1,t*9),an+=(zn-an)*c,rn+=(Dn-rn)*c;const l=us*oa,h=Math.cos(rn);on.position.set(l*h*Math.sin(an),l*Math.sin(rn),l*h*Math.cos(an)),on.lookAt(0,-.02*h,0);const p=hn.smoothstep(Math.sin(rn),-.22,.18);Yn.shadowPlane.material.opacity=p,ea.copy(Ss);const g=Na||Nr||un.size>0&&_s==="camera"?1:0;Mr+=(g-Mr)*Math.min(1,t*12),zs.group.visible=!0,zs.setPose(Ss,zd,Mr),ee.root.quaternion.copy(Je),Ot.step(t,Je,ea,$i,Fi,vp),Ot.allCleared||(!zo&&(un.size>0||Hn.size>0||Ot.speed>.08)&&(zo=!0),zo&&(Bo+=t)),fe.updateRoll(Ot.speed),fe.updateAmbience(Ot.layer==="pipe"||Ot.layer==="dropping");const m=Ue.levels[Ge],x=Ot.getNextCheckpointIndex(),S=!Ot.allCleared&&x>=0&&m.checkpoints[x]?.isFinish===!0,d=1-Math.exp(-10*t);ds+=(0-ds)*d,fs+=((S?1:0)-fs)*d,ee.applyPoleShutters(ds,fs);const u=Ot.readyPortal,_=u.kind==="shutter-enter"||u.kind==="shutter-exit"?u.shutterId:-1,v=u.kind==="toggle"?u.toggleId:-1;ee.setReadyHole(_,u.kind==="finish-drop",Ot.readyPortalDwell,v),xa(),ee.ballMesh.position.copy(Ot.dir).multiplyScalar(Ot.radius),ee.ballMesh.quaternion.copy(Ot.ballQuat),ee.updateLeds(e,Ot.cleared,x,Ot.allCleared,Ot.toggleMask,Li),Vs.render(e),Ar.render({time:e,elapsedSec:Bo,camera:on,sphereRoot:ee.root,grid:Ue,level:m,ballDir:Ot.dir,ballRadius:Ot.radius,ballLayer:Ot.layer,gravityWorldDir:ea,clearedMask:Ot.cleared,nextCpIdx:x,allCleared:Ot.allCleared,readyPortal:Ot.readyPortal,readyDwell:Ot.readyPortalDwell,toggleMask:Ot.toggleMask,togglePulse:Li,wallExt:$i,shutterOpen:Fi,inTransition:!1})}requestAnimationFrame(yp);
