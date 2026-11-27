(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Ku="187",ys={ROTATE:0,DOLLY:1,PAN:2},uo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hp=0,kh=1,dp=2,dl=1,fp=2,Ba=3,di=0,ui=1,Wn=2,$o=0,Ga=1,Oh=2,zh=3,Vh=4,d0=5,ks=100,pp=101,mp=102,gp=103,vp=104,xp=200,ka=201,Sp=202,_p=203,f0=204,p0=205,Mp=206,yp=207,bp=208,wp=209,Tp=210,Ep=211,Ap=212,Rp=213,Cp=214,Yc=0,qc=1,Zc=2,er=3,Kc=4,$c=5,Jc=6,Qc=7,m0=0,Pp=1,Dp=2,ji=0,g0=1,v0=2,x0=3,$u=4,S0=5,_0=6,M0=7,y0=300,sa=301,tr=302,tc=303,nc=304,yn=1e3,wi=1001,jc=1002,Bn=1003,Np=1004,Ar=1005,Mn=1006,ic=1007,Ss=1008,Xn=1009,b0=1010,w0=1011,nr=1012,Ju=1013,rs=1014,Yi=1015,Ui=1016,Qu=1017,ju=1018,oa=1020,T0=35902,E0=35899,A0=1021,R0=1022,xi=1023,Ys=1026,Gs=1027,Xl=1028,eh=1029,go=1030,th=1031,nh=1033,fl=33776,pl=33777,ml=33778,gl=33779,eu=35840,tu=35841,nu=35842,iu=35843,su=36196,ou=37492,au=37496,ru=37488,lu=37489,yl=37490,cu=37491,uu=37808,hu=37809,du=37810,fu=37811,pu=37812,mu=37813,gu=37814,vu=37815,xu=37816,Su=37817,_u=37818,Mu=37819,yu=37820,bu=37821,wu=36492,Tu=36494,Eu=36495,Au=36283,Ru=36284,bl=36285,Cu=36286,Lp=3200,Pu=0,Ip=1,Os="",Rn="srgb",wl="srgb-linear",Tl="linear",cn="srgb",sc=7680,Fp=519,Up=512,Bp=513,kp=514,C0=515,Op=516,zp=517,P0=518,D0=519,Vp=35044,qi=35048,Du="300 es",Zi=2e3,ir=2001;function Gp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function El(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hp(){const i=El("canvas");return i.style.display="block",i}const Gh={};function Hh(...i){const e="THREE."+i.shift();console.log(e,...i)}function N0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=N0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function on(...i){i=N0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Jo(...i){const e=i.join(" ");e in Gh||(Gh[e]=!0,Lt(...i))}function Wp(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const Xp={[Yc]:Yc,[Zc]:Jc,[Kc]:Kc,[er]:$c,[qc]:qc,[Jc]:Zc,[Qc]:Qc,[$c]:er};class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wh=1234567;const Qo=Math.PI/180,sr=180/Math.PI;function To(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jn[i&255]+jn[i>>8&255]+jn[i>>16&255]+jn[i>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[n&255]+jn[n>>8&255]+jn[n>>16&255]+jn[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function ih(i,e){return(i%e+e)%e}function Yp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qp(i,e,t){return i!==e?(t-i)/(e-i):0}function Ha(i,e,t){return(1-t)*i+t*e}function Zp(i,e,t,n){return Ha(i,e,1-Math.exp(-t*n))}function Kp(i,e=1){return e-Math.abs(ih(i,e*2)-e)}function $p(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jp(i,e){return i+Math.random()*(e-i)}function em(i){return i*(.5-Math.random())}function tm(i){i!==void 0&&(Wh=i);let e=Wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nm(i){return i*Qo}function im(i){return i*sr}function sm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function om(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function L0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function am(i,e,t,n,s){const o=Math.cos,a=Math.sin,r=o(t/2),l=a(t/2),c=o((e+n)/2),h=a((e+n)/2),f=o((e-n)/2),u=a((e-n)/2),d=o((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(r*h,l*f,l*u,r*c);break;case"YZY":i.set(l*u,r*h,l*f,r*c);break;case"ZXZ":i.set(l*f,l*u,r*h,r*c);break;case"XZX":i.set(r*h,l*g,l*d,r*c);break;case"YXY":i.set(l*d,r*h,l*g,r*c);break;case"ZYZ":i.set(l*g,l*d,r*h,r*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function I0(i,e){if(e.constructor===Float32Array)return i;const t=sh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function F0(i,e){if(e.constructor===Float32Array)return i;const t=sh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const U0={DEG2RAD:Qo,RAD2DEG:sr,generateUUID:To,clamp:Xt,euclideanModulo:ih,mapLinear:Yp,inverseLerp:qp,lerp:Ha,damp:Zp,pingpong:Kp,smoothstep:$p,smootherstep:Jp,randInt:Qp,randFloat:jp,randFloatSpread:em,seededRandom:tm,degToRad:nm,radToDeg:im,isPowerOfTwo:sm,ceilPowerOfTwo:om,floorPowerOfTwo:L0,setQuaternionFromProperEuler:am,normalize:F0,denormalize:I0};class ot{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*n-a*s+e.x,this.y=o*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Li{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,a,r){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=o[a+0],d=o[a+1],g=o[a+2],x=o[a+3];if(f!==x||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*x;p<0&&(u=-u,d=-d,g=-g,x=-x,p=-p);let m=1-r;if(p<.9995){const S=Math.acos(p),y=Math.sin(S);m=Math.sin(m*S)/y,r=Math.sin(r*S)/y,l=l*m+u*r,c=c*m+d*r,h=h*m+g*r,f=f*m+x*r}else{l=l*m+u*r,c=c*m+d*r,h=h*m+g*r,f=f*m+x*r;const S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,o,a){const r=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[a],u=o[a+1],d=o[a+2],g=o[a+3];return e[t]=r*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-r*d,e[t+2]=c*g+h*d+r*u-l*f,e[t+3]=h*g-r*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,a=e._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(s/2),f=r(o/2),u=l(n/2),d=l(s/2),g=l(o/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],a=t[1],r=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+r+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(a-s)*d}else if(n>r&&n>f){const d=2*Math.sqrt(1+n-r-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(o+c)/d}else if(r>f){const d=2*Math.sqrt(1+r-n-f);this._w=(o-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-r);this._w=(a-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,a=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*r+s*c-o*l,this._y=s*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-s*r,this._w=a*h-n*r-s*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,o=e._z,a=e._w,r=this.dot(e);r<0&&(n=-n,s=-s,o=-o,a=-a,r=-r);let l=1-t;if(r<.9995){const c=Math.acos(r),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+o*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+o*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,a=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,a=e.y,r=e.z,l=e.w,c=2*(a*s-r*n),h=2*(r*t-o*s),f=2*(o*n-a*t);return this.x=t+l*c+a*f-r*h,this.y=n+l*h+r*c-o*f,this.z=s+l*f+o*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this.z=Xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this.z=Xt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,a=t.x,r=t.y,l=t.z;return this.x=s*l-o*r,this.y=o*a-n*l,this.z=n*r-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new G,Xh=new Li;class Ht{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,o,a,r,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,a,r,l,c)}set(e,t,n,s,o,a,r,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=r,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=s[0],p=s[3],m=s[6],S=s[1],y=s[4],_=s[7],A=s[2],E=s[5],v=s[8];return o[0]=a*x+r*S+l*A,o[3]=a*p+r*y+l*E,o[6]=a*m+r*_+l*v,o[1]=c*x+h*S+f*A,o[4]=c*p+h*y+f*E,o[7]=c*m+h*_+f*v,o[2]=u*x+d*S+g*A,o[5]=u*p+d*y+g*E,o[8]=u*m+d*_+g*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*r*c-n*o*h+n*r*l+s*o*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],f=h*a-r*c,u=r*l-h*o,d=c*o-a*l,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(s*c-h*n)*x,e[2]=(r*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*o-r*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+e,-s*c,s*l,-s*(-c*a+l*r)+r+t,0,0,1),this}scale(e,t){return Jo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ac.makeScale(e,t)),this}rotate(e){return Jo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return Jo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new Ht,Yh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rm(){const i={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(s,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===cn&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===cn&&(s.r=jo(s.r),s.g=jo(s.g),s.b=jo(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Os?Tl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wl]:{primaries:e,whitePoint:n,transfer:Tl,toXYZ:Yh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:n,transfer:cn,toXYZ:Yh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}const sn=rm();function bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Do;class lm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Do===void 0&&(Do=El("canvas")),Do.width=e.width,Do.height=e.height;const s=Do.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Do}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=El("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=bs(o[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cm=0;class oh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=To(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(rc(s[a].image)):o.push(rc(s[a]))}else o=rc(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function rc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let um=0;const lc=new G;class Yn extends $s{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,n=wi,s=wi,o=Mn,a=Ss,r=xi,l=Xn,c=Yn.DEFAULT_ANISOTROPY,h=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=To(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(lc).x}get height(){return this.source.getSize(lc).y}get depth(){return this.source.getSize(lc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yn:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yn:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=y0;Yn.DEFAULT_ANISOTROPY=1;class wn{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(d+1)/2,A=(m+1)/2,E=(h+u)/4,v=(f+x)/4,T=(g+p)/4;return y>_&&y>A?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=E/n,o=v/n):_>A?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=E/s,o=T/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=v/o,s=T/o),this.set(n,s,o,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-x)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this.z=Xt(this.z,e.z,t.z),this.w=Xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this.z=Xt(this.z,e,t),this.w=Xt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hm extends $s{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wn(0,0,e,t),this.scissorTest=!1,this.viewport=new wn(0,0,e,t),this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=new Yn({width:e,height:t,depth:n.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new oh(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends hm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class B0 extends Yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k0 extends Yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class un{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,o,a,r,l,c,h,f,u,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,a,r,l,c,h,f,u,d,g,x,p)}set(e,t,n,s,o,a,r,l,c,h,f,u,d,g,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=o,m[5]=a,m[9]=r,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/No.setFromMatrixColumn(e,0).length(),o=1/No.setFromMatrixColumn(e,1).length(),a=1/No.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const u=a*h,d=a*f,g=r*h,x=r*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-x*c,t[9]=-r*l,t[2]=x-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,x=c*f;t[0]=u+x*r,t[4]=g*r-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-r,t[2]=d*r-g,t[6]=x+u*r,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,x=c*f;t[0]=u-x*r,t[4]=-a*f,t[8]=g+d*r,t[1]=d+g*r,t[5]=a*h,t[9]=x-u*r,t[2]=-a*c,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,g=r*h,x=r*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=d*c-g,t[2]=-c,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,g=r*l,x=r*c;t[0]=l*h,t[4]=x-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-r*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-x*f}else if(e.order==="XZY"){const u=a*l,d=a*c,g=r*l,x=r*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=r*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,fm)}lookAt(e,t,n){const s=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Ns.crossVectors(n,_i),Ns.lengthSq()===0&&(Math.abs(n.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Ns.crossVectors(n,_i)),Ns.normalize(),Rr.crossVectors(_i,Ns),s[0]=Ns.x,s[4]=Rr.x,s[8]=_i.x,s[1]=Ns.y,s[5]=Rr.y,s[9]=_i.y,s[2]=Ns.z,s[6]=Rr.z,s[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],S=n[3],y=n[7],_=n[11],A=n[15],E=s[0],v=s[4],T=s[8],U=s[12],C=s[1],D=s[5],O=s[9],Y=s[13],R=s[2],B=s[6],$=s[10],K=s[14],he=s[3],ee=s[7],ue=s[11],ae=s[15];return o[0]=a*E+r*C+l*R+c*he,o[4]=a*v+r*D+l*B+c*ee,o[8]=a*T+r*O+l*$+c*ue,o[12]=a*U+r*Y+l*K+c*ae,o[1]=h*E+f*C+u*R+d*he,o[5]=h*v+f*D+u*B+d*ee,o[9]=h*T+f*O+u*$+d*ue,o[13]=h*U+f*Y+u*K+d*ae,o[2]=g*E+x*C+p*R+m*he,o[6]=g*v+x*D+p*B+m*ee,o[10]=g*T+x*O+p*$+m*ue,o[14]=g*U+x*Y+p*K+m*ae,o[3]=S*E+y*C+_*R+A*he,o[7]=S*v+y*D+_*B+A*ee,o[11]=S*T+y*O+_*$+A*ue,o[15]=S*U+y*Y+_*K+A*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],a=e[1],r=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15],S=l*d-c*u,y=r*d-c*f,_=r*u-l*f,A=a*d-c*h,E=a*u-l*h,v=a*f-r*h;return t*(x*S-p*y+m*_)-n*(g*S-p*A+m*E)+s*(g*y-x*A+m*v)-o*(g*_-x*E+p*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[1],a=e[5],r=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-r*c)-n*(o*h-r*l)+s*(o*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],S=t*r-n*a,y=t*l-s*a,_=t*c-o*a,A=n*l-s*r,E=n*c-o*r,v=s*c-o*l,T=h*x-f*g,U=h*p-u*g,C=h*m-d*g,D=f*p-u*x,O=f*m-d*x,Y=u*m-d*p,R=S*Y-y*O+_*D+A*C-E*U+v*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/R;return e[0]=(r*Y-l*O+c*D)*B,e[1]=(s*O-n*Y-o*D)*B,e[2]=(x*v-p*E+m*A)*B,e[3]=(u*E-f*v-d*A)*B,e[4]=(l*C-a*Y-c*U)*B,e[5]=(t*Y-s*C+o*U)*B,e[6]=(p*_-g*v-m*y)*B,e[7]=(h*v-u*_+d*y)*B,e[8]=(a*O-r*C+c*T)*B,e[9]=(n*C-t*O-o*T)*B,e[10]=(g*E-x*_+m*S)*B,e[11]=(f*_-h*E-d*S)*B,e[12]=(r*U-a*D-l*T)*B,e[13]=(t*D-n*U+s*T)*B,e[14]=(x*y-g*A-p*S)*B,e[15]=(h*A-f*y+u*S)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,a=e.x,r=e.y,l=e.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+n,h*l-s*a,0,c*l-s*r,h*l+s*a,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,a){return this.set(1,n,o,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,a=t._y,r=t._z,l=t._w,c=o+o,h=a+a,f=r+r,u=o*c,d=o*h,g=o*f,x=a*h,p=a*f,m=r*f,S=l*c,y=l*h,_=l*f,A=n.x,E=n.y,v=n.z;return s[0]=(1-(x+m))*A,s[1]=(d+_)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(u+m))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(g+y)*v,s[9]=(p-S)*v,s[10]=(1-(u+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let a=No.set(s[0],s[1],s[2]).length();const r=No.set(s[4],s[5],s[6]).length(),l=No.set(s[8],s[9],s[10]).length();o<0&&(a=-a),Bi.copy(this);const c=1/a,h=1/r,f=1/l;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=f,Bi.elements[9]*=f,Bi.elements[10]*=f,t.setFromRotationMatrix(Bi),n.x=a,n.y=r,n.z=l,this}makePerspective(e,t,n,s,o,a,r=Zi,l=!1){const c=this.elements,h=2*o/(t-e),f=2*o/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let g,x;if(l)g=o/(a-o),x=a*o/(a-o);else if(r===Zi)g=-(a+o)/(a-o),x=-2*a*o/(a-o);else if(r===ir)g=-a/(a-o),x=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,a,r=Zi,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,x;if(l)g=1/(a-o),x=a/(a-o);else if(r===Zi)g=-2/(a-o),x=-(a+o)/(a-o);else if(r===ir)g=-1/(a-o),x=-o/(a-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const No=new G,Bi=new un,dm=new G(0,0,0),fm=new G(1,1,1),Ns=new G,Rr=new G,_i=new G,Zh=new un,Kh=new Li;class es{constructor(e=0,t=0,n=0,s=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],a=s[4],r=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(r,d));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pm=0;const $h=new G,Lo=new Li,hs=new un,Cr=new G,Ea=new G,mm=new G,gm=new Li,Jh=new G(1,0,0),Qh=new G(0,1,0),jh=new G(0,0,1),ed={type:"added"},vm={type:"removed"},Io={type:"childadded",child:null},cc={type:"childremoved",child:null};class qn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new G,t=new es,n=new Li,s=new G(1,1,1);function o(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new un},normalMatrix:{value:new Ht}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(Ea,Cr,this.up):hs.lookAt(Cr,Ea,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),Lo.setFromRotationMatrix(hs),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Io.child=e,this.dispatchEvent(Io),Io.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vm),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hs.multiply(e.parent.matrixWorld)),e.applyMatrix4(hs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Io.child=e,this.dispatchEvent(Io),Io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*s,o[13]+=n-o[1]*t-o[5]*n-o[9]*s,o[14]+=s-o[2]*t-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const o=this.children;for(let a=0,r=o.length;a<r;a++)o[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(r=>({...r})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(e.materials,this.material[l]));s.material=r}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qn.DEFAULT_UP=new G(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ki extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xm={type:"move"};class uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));r!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.quaternion,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const O0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function hc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=sn.workingColorSpace){return this.r=e,this.g=t,this.b=n,sn.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=sn.workingColorSpace){if(e=ih(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,a=2*n-o;this.r=hc(a,o,e+1/3),this.g=hc(a,o,e),this.b=hc(a,o,e-1/3)}return sn.colorSpaceToWorking(this,s),this}setStyle(e,t=Rn){function n(o){o!==void 0&&parseFloat(o)<1&&Lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,t);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);Lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=O0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return sn.workingToColorSpace(ei.copy(this),e),Math.round(Xt(ei.r*255,0,255))*65536+Math.round(Xt(ei.g*255,0,255))*256+Math.round(Xt(ei.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sn.workingColorSpace){sn.workingToColorSpace(ei.copy(this),t);const n=ei.r,s=ei.g,o=ei.b,a=Math.max(n,s,o),r=Math.min(n,s,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const f=a-r;switch(c=h<=.5?f/(a+r):f/(2-a-r),a){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=sn.workingColorSpace){return sn.workingToColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=Rn){sn.workingToColorSpace(ei.copy(this),e);const t=ei.r,n=ei.g,s=ei.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(Pr);const n=Ha(Ls.h,Pr.h,t),s=Ha(Ls.s,Pr.s,t),o=Ha(Ls.l,Pr.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new Ut;Ut.NAMES=O0;class ii extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new G,ds=new G,dc=new G,fs=new G,Fo=new G,Uo=new G,td=new G,fc=new G,pc=new G,mc=new G,gc=new wn,vc=new wn,xc=new wn;class Ni{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ki.subVectors(e,t),s.cross(ki);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){ki.subVectors(s,t),ds.subVectors(n,t),dc.subVectors(e,t);const a=ki.dot(ki),r=ki.dot(ds),l=ki.dot(dc),c=ds.dot(ds),h=ds.dot(dc),f=a*c-r*r;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(c*l-r*h)*u,g=(a*h-r*l)*u;return o.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(e,t,n,s,o,a,r,l){return this.getBarycoord(e,t,n,s,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,fs.x),l.addScaledVector(a,fs.y),l.addScaledVector(r,fs.z),l)}static getInterpolatedAttribute(e,t,n,s,o,a){return gc.setScalar(0),vc.setScalar(0),xc.setScalar(0),gc.fromBufferAttribute(e,t),vc.fromBufferAttribute(e,n),xc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gc,o.x),a.addScaledVector(vc,o.y),a.addScaledVector(xc,o.z),a}static isFrontFacing(e,t,n,s){return ki.subVectors(n,t),ds.subVectors(e,t),ki.cross(ds).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),ki.cross(ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Ni.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let a,r;Fo.subVectors(s,n),Uo.subVectors(o,n),fc.subVectors(e,n);const l=Fo.dot(fc),c=Uo.dot(fc);if(l<=0&&c<=0)return t.copy(n);pc.subVectors(e,s);const h=Fo.dot(pc),f=Uo.dot(pc);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Fo,a);mc.subVectors(e,o);const d=Fo.dot(mc),g=Uo.dot(mc);if(g>=0&&d<=g)return t.copy(o);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(Uo,r);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return td.subVectors(o,s),r=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(td,r);const m=1/(p+x+u);return a=x*m,r=u*m,t.copy(n).addScaledVector(Fo,a).addScaledVector(Uo,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Eo{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,r=o.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,Oi):Oi.fromBufferAttribute(o,a),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const s=e.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),Nr.subVectors(this.max,Aa),Bo.subVectors(e.a,Aa),ko.subVectors(e.b,Aa),Oo.subVectors(e.c,Aa),Is.subVectors(ko,Bo),Fs.subVectors(Oo,ko),to.subVectors(Bo,Oo);let t=[0,-Is.z,Is.y,0,-Fs.z,Fs.y,0,-to.z,to.y,Is.z,0,-Is.x,Fs.z,0,-Fs.x,to.z,0,-to.x,-Is.y,Is.x,0,-Fs.y,Fs.x,0,-to.y,to.x,0];return!Sc(t,Bo,ko,Oo,Nr)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,Bo,ko,Oo,Nr))?!1:(Lr.crossVectors(Is,Fs),t=[Lr.x,Lr.y,Lr.z],Sc(t,Bo,ko,Oo,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ps=[new G,new G,new G,new G,new G,new G,new G,new G],Oi=new G,Dr=new Eo,Bo=new G,ko=new G,Oo=new G,Is=new G,Fs=new G,to=new G,Aa=new G,Nr=new G,Lr=new G,no=new G;function Sc(i,e,t,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){no.fromArray(i,o);const r=s.x*Math.abs(no.x)+s.y*Math.abs(no.y)+s.z*Math.abs(no.z),l=e.dot(no),c=t.dot(no),h=n.dot(no);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const En=new G,Ir=new ot;let Sm=0;class mn extends $s{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vp,this.updateRanges=[],this.gpuType=Yi,this.version=0,this._normalizationScale=e!==void 0?sh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):I0(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):F0(e,this.array)}}class z0 extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class V0 extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const _m=new Eo,Ra=new G,_c=new G;class Js{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_m.setFromPoints(e).getCenter(n);let s=0;for(let o=0,a=e.length;o<a;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const t=Ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ra,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(_c)),this.expandByPoint(Ra.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mm=0;const Ri=new un,Mc=new qn,zo=new G,Mi=new Eo,Ca=new Eo,Gn=new G;class vn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gp(e)?V0:z0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ht().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,n){return Ri.makeTranslation(e,t,n),this.applyMatrix4(Ri),this}scale(e,t,n){return Ri.makeScale(e,t,n),this.applyMatrix4(Ri),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zo).negate(),this.translate(zo.x,zo.y,zo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const r=t[o];Ca.setFromBufferAttribute(r),this.morphTargetsRelative?(Gn.addVectors(Mi.min,Ca.min),Mi.expandByPoint(Gn),Gn.addVectors(Mi.max,Ca.max),Mi.expandByPoint(Gn)):(Mi.expandByPoint(Ca.min),Mi.expandByPoint(Ca.max))}Mi.getCenter(n);let s=0;for(let o=0,a=e.count;o<a;o++)Gn.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Gn));if(t)for(let o=0,a=t.length;o<a;o++){const r=t[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Gn.fromBufferAttribute(r,c),l&&(zo.fromBufferAttribute(e,c),Gn.add(zo)),s=Math.max(s,n.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const r=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)r[U]=new G,l[U]=new G;const h=new G,f=new G,u=new G,d=new ot,g=new ot,x=new ot,p=new G,m=new G;function S(U,C,D){c[U]=c[C]=c[D]=1,h.fromBufferAttribute(n,U),f.fromBufferAttribute(n,C),u.fromBufferAttribute(n,D),d.fromBufferAttribute(o,U),g.fromBufferAttribute(o,C),x.fromBufferAttribute(o,D),f.sub(h),u.sub(h),g.sub(d),x.sub(d);const O=1/(g.x*x.y-x.x*g.y);isFinite(O)&&(p.copy(f).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(O),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(O),r[U].add(p),r[C].add(p),r[D].add(p),l[U].add(m),l[C].add(m),l[D].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,C=y.length;U<C;++U){const D=y[U],O=D.start,Y=D.count;for(let R=O,B=O+Y;R<B;R+=3)S(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const _=new G,A=new G,E=new G,v=new G;function T(U){E.fromBufferAttribute(s,U),v.copy(E);const C=r[U];_.copy(C),_.sub(E.multiplyScalar(E.dot(C))).normalize(),A.crossVectors(v,C);const O=A.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,O)}for(let U=0,C=n.count;U<C;++U)c[U]&&T(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new G,o=new G,a=new G,r=new G,l=new G,c=new G,h=new G,f=new G;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,o),f.subVectors(s,o),h.cross(f),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),o.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,f=r.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,p=l.length;x<p;x++){r.isInterleavedBufferAttribute?d=l[x]*r.data.stride+r.offset:d=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new mn(u,h,f)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=e(l,n);t.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],f=o[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new G,ym=new G,bm=new Ht;class Wi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=yc.subVectors(n,t).cross(ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(yc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bm.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let wm=0;class va extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=To(),this.name="",this.type="Material",this.blending=Ga,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=f0,this.blendDst=p0,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Lt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(t){const o=s(e.textures),a=s(e.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ms=new G,bc=new G,Fr=new G,Ur=new G;class Yl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ms.copy(this.origin).addScaledVector(this.direction,t),ms.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){bc.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(bc);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),r=Ur.dot(this.direction),l=-Ur.dot(Fr),c=Ur.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*l-r,u=a*r-l,g=o*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,d=f*(f+a*u+2*r)+u*(a*f+u+2*l)+c}else u=o,f=Math.max(0,-(a*u+r)),d=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(a*u+r)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*o+r)),u=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-o,-l),o),d=u*(u+2*l)+c):(f=Math.max(0,-(a*o+r)),u=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c);else u=a>0?-o:o,f=Math.max(0,-(a*u+r)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bc).addScaledVector(Fr,u),d}intersectSphere(e,t){if(e.radius<0)return null;ms.subVectors(e.center,this.origin);const n=ms.dot(this.direction),s=ms.dot(ms)-n*n,o=e.radius*e.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(o=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(o=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),f>=0?(r=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(r=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ms)!==null}intersectTriangle(e,t,n,s,o){const a=this.origin,r=this.direction,l=r.x,c=r.y,h=r.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=n.x-a.x,S=n.y-a.y,y=n.z-a.z,_=Math.abs(l),A=Math.abs(c),E=Math.abs(h);let v,T,U,C,D,O,Y,R,B,$,K,he;if(_>=A&&_>=E?(U=l,O=f,B=g,he=m,l>=0?(v=c,T=h,C=u,D=d,Y=x,R=p,$=S,K=y):(v=h,T=c,C=d,D=u,Y=p,R=x,$=y,K=S)):A>=E?(U=c,O=u,B=x,he=S,c>=0?(v=h,T=l,C=d,D=f,Y=p,R=g,$=y,K=m):(v=l,T=h,C=f,D=d,Y=g,R=p,$=m,K=y)):(U=h,O=d,B=p,he=y,h>=0?(v=l,T=c,C=f,D=u,Y=g,R=x,$=m,K=S):(v=c,T=l,C=u,D=f,Y=x,R=g,$=S,K=m)),U===0)return null;const ee=v/U,ue=T/U,ae=1/U,le=C-ee*O,Ee=D-ue*O,N=Y-ee*B,j=R-ue*B,W=$-ee*he,I=K-ue*he,X=W*j-I*N,te=le*I-Ee*W,ce=N*Ee-j*le;if(s){if(X<0||te<0||ce<0)return null}else if((X<0||te<0||ce<0)&&(X>0||te>0||ce>0))return null;const ie=X+te+ce;if(ie===0)return null;const re=ae*(X*O+te*B+ce*he);return(ie>0?re<0:re>0)?null:this.at(re/ie,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zs extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=m0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nd=new un,io=new Yl,Br=new Js,id=new G,kr=new G,Or=new G,zr=new G,wc=new G,Vr=new G,sd=new G,Gr=new G;class Qt extends qn{constructor(e=new vn,t=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const r=this.morphTargetInfluences;if(o&&r){Vr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],f=o[l];h!==0&&(wc.fromBufferAttribute(f,e),a?Vr.addScaledVector(wc,h):Vr.addScaledVector(wc.sub(t),h))}t.add(Vr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(o),io.copy(e.ray).recast(e.near),!(Br.containsPoint(io.origin)===!1&&(io.intersectSphere(Br,id)===null||io.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(o).invert(),io.copy(e.ray).applyMatrix4(nd),!(n.boundingBox!==null&&io.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}_computeIntersections(e,t,n){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(r.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,A=y;_<A;_+=3){const E=r.getX(_),v=r.getX(_+1),T=r.getX(_+2);s=Hr(this,m,e,n,c,h,f,E,v,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(r.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const S=r.getX(p),y=r.getX(p+1),_=r.getX(p+2);s=Hr(this,a,e,n,c,h,f,S,y,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,A=y;_<A;_+=3){const E=_,v=_+1,T=_+2;s=Hr(this,m,e,n,c,h,f,E,v,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const S=p,y=p+1,_=p+2;s=Hr(this,a,e,n,c,h,f,S,y,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Tm(i,e,t,n,s,o,a,r){let l;if(e.side===ui?l=n.intersectTriangle(a,o,s,!0,r):l=n.intersectTriangle(s,o,a,e.side===di,r),l===null)return null;Gr.copy(r),Gr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:i}}function Hr(i,e,t,n,s,o,a,r,l,c){i.getVertexPosition(r,kr),i.getVertexPosition(l,Or),i.getVertexPosition(c,zr);const h=Tm(i,e,t,n,kr,Or,zr,sd);if(h){const f=new G;Ni.getBarycoord(sd,kr,Or,zr,f),s&&(h.uv=Ni.getInterpolatedAttribute(s,r,l,c,f,new ot)),o&&(h.uv1=Ni.getInterpolatedAttribute(o,r,l,c,f,new ot)),a&&(h.normal=Ni.getInterpolatedAttribute(a,r,l,c,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:r,b:l,c,normal:new G,materialIndex:0};Ni.getNormal(kr,Or,zr,u.normal),h.face=u,h.barycoord=f}return h}class Al extends Yn{constructor(e=null,t=1,n=1,s,o,a,r,l,c=Bn,h=Bn,f,u){super(null,a,r,l,c,h,s,o,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo extends mn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vo=new un,od=new un,Wr=[],ad=new Eo,Em=new un,Pa=new Qt,Da=new Js;class G0 extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Em)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Eo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vo),ad.copy(e.boundingBox).applyMatrix4(Vo),this.boundingBox.union(ad)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Js),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vo),Da.copy(e.boundingSphere).applyMatrix4(Vo),this.boundingSphere.union(Da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=e*o+1;for(let r=0;r<n.length;r++)n[r]=s[a+r]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(n),e.ray.intersectsSphere(Da)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Vo),od.multiplyMatrices(n,Vo),Pa.matrixWorld=od,Pa.raycast(e,Wr);for(let a=0,r=Wr.length;a<r;a++){const l=Wr[a];l.instanceId=o,l.object=this,t.push(l)}Wr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Al(new Float32Array(s*this.count),s,this.count,Xl,Yi));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return o[l]=r,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const so=new Js,Am=new ot(.5,.5),Xr=new G;class or{constructor(e=new Wi,t=new Wi,n=new Wi,s=new Wi,o=new Wi,a=new Wi){this.planes=[e,t,n,s,o,a]}set(e,t,n,s,o,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi,n=!1){const s=this.planes,o=e.elements,a=o[0],r=o[1],l=o[2],c=o[3],h=o[4],f=o[5],u=o[6],d=o[7],g=o[8],x=o[9],p=o[10],m=o[11],S=o[12],y=o[13],_=o[14],A=o[15];if(s[0].setComponents(c-a,d-h,m-g,A-S).normalize(),s[1].setComponents(c+a,d+h,m+g,A+S).normalize(),s[2].setComponents(c+r,d+f,m+x,A+y).normalize(),s[3].setComponents(c-r,d-f,m-x,A-y).normalize(),n)s[4].setComponents(l,u,p,_).normalize(),s[5].setComponents(c-l,d-u,m-p,A-_).normalize();else if(s[4].setComponents(c-l,d-u,m-p,A-_).normalize(),t===Zi)s[5].setComponents(c+l,d+u,m+p,A+_).normalize();else if(t===ir)s[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),so.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){so.center.set(0,0,0);const t=Am.distanceTo(e.center);return so.radius=.7071067811865476+t,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xr.x=s.normal.x>0?e.max.x:e.min.x,Xr.y=s.normal.y>0?e.max.y:e.min.y,Xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const rd=new un;class rh{constructor(){this.coordinateSystem=Zi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const o=t[s];rd.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),n[s]===void 0&&(n[s]=new or),n[s].setFromProjectionMatrix(rd,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new or),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new rh().copy(this)}}class Nu extends va{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new G,Cl=new G,ld=new un,Na=new Yl,Yr=new Js,Tc=new G,cd=new G;class Rm extends qn{constructor(e=new vn,t=new Nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Rl.fromBufferAttribute(t,s-1),Cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rl.distanceTo(Cl);e.setAttribute("lineDistance",new an(n,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=o,e.ray.intersectsSphere(Yr)===!1)return;ld.copy(s).invert(),Na.copy(e.ray).applyMatrix4(ld);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,p=g-1;x<p;x+=c){const m=h.getX(x),S=h.getX(x+1),y=qr(this,e,Na,l,m,S,x);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(d),m=qr(this,e,Na,l,x,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=d,p=g-1;x<p;x+=c){const m=qr(this,e,Na,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=qr(this,e,Na,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function qr(i,e,t,n,s,o,a){const r=i.geometry.attributes.position;if(Rl.fromBufferAttribute(r,s),Cl.fromBufferAttribute(r,o),t.distanceSqToSegment(Rl,Cl,Tc,cd)>n)return;Tc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Tc);if(!(c<e.near||c>e.far))return{distance:c,point:cd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ud=new G,hd=new G;class Ec extends Rm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)ud.fromBufferAttribute(t,s),hd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ud.distanceTo(hd);e.setAttribute("lineDistance",new an(n,1))}else Lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class H0 extends Yn{constructor(e=[],t=sa,n,s,o,a,r,l,c,h){super(e,t,n,s,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tn extends Yn{constructor(e,t,n,s,o,a,r,l,c){super(e,t,n,s,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class aa extends Yn{constructor(e,t,n=rs,s,o,a,r=Bn,l=Bn,c,h=Ys,f=1){if(h!==Ys&&h!==Gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class W0 extends aa{constructor(e,t=rs,n=sa,s,o,a=Bn,r=Bn,l,c=Ys){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,o,a,r,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class X0 extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xa extends vn{constructor(e=1,t=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,o,0),g("z","y","x",1,-1,n,t,-e,a,o,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,o,4),g("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(f,2));function g(x,p,m,S,y,_,A,E,v,T,U){const C=_/v,D=A/T,O=_/2,Y=A/2,R=E/2,B=v+1,$=T+1;let K=0,he=0;const ee=new G;for(let ue=0;ue<$;ue++){const ae=ue*D-Y;for(let le=0;le<B;le++){const Ee=le*C-O;ee[x]=Ee*S,ee[p]=ae*y,ee[m]=R,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[p]=0,ee[m]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(le/v),f.push(1-ue/T),K+=1}}for(let ue=0;ue<T;ue++)for(let ae=0;ae<v;ae++){const le=u+ae+B*ue,Ee=u+ae+B*(ue+1),N=u+(ae+1)+B*(ue+1),j=u+(ae+1)+B*ue;l.push(le,Ee,j),l.push(Ee,N,j),he+=6}r.addGroup(d,he,U),d+=he,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lh extends vn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const o=[],a=[];r(s),c(n),h(),this.setAttribute("position",new an(o,3)),this.setAttribute("normal",new an(o.slice(),3)),this.setAttribute("uv",new an(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(S){const y=new G,_=new G,A=new G;for(let E=0;E<t.length;E+=3)d(t[E+0],y),d(t[E+1],_),d(t[E+2],A),l(y,_,A,S)}function l(S,y,_,A){const E=A+1,v=[];for(let T=0;T<=E;T++){v[T]=[];const U=S.clone().lerp(_,T/E),C=y.clone().lerp(_,T/E),D=E-T;for(let O=0;O<=D;O++)O===0&&T===E?v[T][O]=U:v[T][O]=U.clone().lerp(C,O/D)}for(let T=0;T<E;T++)for(let U=0;U<2*(E-T)-1;U++){const C=Math.floor(U/2);U%2===0?(u(v[T][C+1]),u(v[T+1][C]),u(v[T][C])):(u(v[T][C+1]),u(v[T+1][C+1]),u(v[T+1][C]))}}function c(S){const y=new G;for(let _=0;_<o.length;_+=3)y.x=o[_+0],y.y=o[_+1],y.z=o[_+2],y.normalize().multiplyScalar(S),o[_+0]=y.x,o[_+1]=y.y,o[_+2]=y.z}function h(){const S=new G;for(let y=0;y<o.length;y+=3){S.x=o[y+0],S.y=o[y+1],S.z=o[y+2];const _=p(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;a.push(_,1-A)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const y=a[S+0],_=a[S+2],A=a[S+4],E=Math.max(y,_,A),v=Math.min(y,_,A);E>.9&&v<.1&&(y<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function u(S){o.push(S.x,S.y,S.z)}function d(S,y){const _=S*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const S=new G,y=new G,_=new G,A=new G,E=new ot,v=new ot,T=new ot;for(let U=0,C=0;U<o.length;U+=9,C+=6){S.set(o[U+0],o[U+1],o[U+2]),y.set(o[U+3],o[U+4],o[U+5]),_.set(o[U+6],o[U+7],o[U+8]),E.set(a[C+0],a[C+1]),v.set(a[C+2],a[C+3]),T.set(a[C+4],a[C+5]),A.copy(S).add(y).add(_).divideScalar(3);const D=p(A);x(E,C+0,S,D),x(v,C+2,y,D),x(T,C+4,_,D)}}function x(S,y,_,A){A<0&&S.x===1&&(a[y]=S.x-1),_.x===0&&_.z===0&&(a[y]=A/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.vertices,e.indices,e.radius,e.detail)}}const Zr=new G,Kr=new G,Ac=new G,$r=new Ni;class Cm extends vn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(Qo*t),a=e.getIndex(),r=e.getAttribute("position"),l=a?a.count:r.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u=new Map,d=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:p,c:m}=$r;if(x.fromBufferAttribute(r,c[0]),p.fromBufferAttribute(r,c[1]),m.fromBufferAttribute(r,c[2]),$r.getNormal(Ac),f[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const y=(S+1)%3,_=f[S],A=f[y],E=$r[h[S]],v=$r[h[y]],T=`${_}_${A}`,U=`${A}_${_}`,C=u.get(U);C?(Ac.dot(C.normal)<=o&&(d.push(E.x,E.y,E.z),d.push(v.x,v.y,v.z)),u.set(U,null)):u.has(T)||u.set(T,{index0:c[S],index1:c[y],normal:Ac.clone()})}}for(const g of u.values())if(g){const{index0:x,index1:p}=g;Zr.fromBufferAttribute(r,x),Kr.fromBufferAttribute(r,p),d.push(Zr.x,Zr.y,Zr.z),d.push(Kr.x,Kr.y,Kr.z)}this.setAttribute("position",new an(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class us{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const o=n.length;let a;t?a=t:a=e*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=n[s]-a,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),r=this.getPoint(o),l=t||(a.isVector2?new ot:new G);return l.copy(r).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new G,s=[],o=[],a=[],r=new G,l=new un;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new G)}o[0]=new G,a[0]=new G;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],r),a[0].crossVectors(s[0],o[0]);for(let d=1;d<=e;d++){if(o[d]=o[d-1].clone(),a[d]=a[d-1].clone(),r.crossVectors(s[d-1],s[d]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(Xt(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(r,g))}a[d].crossVectors(s[d],o[d])}if(t===!0){let d=Math.acos(Xt(o[0].dot(o[e]),-1,1));d/=e,s[0].dot(r.crossVectors(o[0],o[e]))>0&&(d=-d);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class ch extends us{constructor(e=0,t=0,n=1,s=1,o=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new ot){const n=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(a?o=0:o=s),this.aClockwise===!0&&!a&&(o===s?o=-s:o=o-s);const r=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Pm extends ch{constructor(e,t,n,s,o,a){super(e,t,n,n,s,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function uh(){let i=0,e=0,t=0,n=0;function s(o,a,r,l){i=o,e=r,t=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){s(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,f){let u=(a-o)/c-(r-o)/(c+h)+(r-a)/h,d=(r-a)/h-(l-a)/(h+f)+(l-r)/f;u*=h,d*=h,s(a,r,u,d)},calc:function(o){const a=o*o,r=a*o;return i+e*o+t*a+n*r}}}const dd=new G,fd=new G,Rc=new uh,Cc=new uh,Pc=new uh;class Dm extends us{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new G){const n=t,s=this.points,o=s.length,a=(o-(this.closed?0:1))*e;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%o]:(fd.subVectors(s[0],s[1]).add(s[0]),c=fd);const f=s[r%o],u=s[(r+1)%o];if(this.closed||r+2<o?h=s[(r+2)%o]:(dd.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=dd),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Rc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,p),Cc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,p),Pc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Cc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Pc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Rc.calc(l),Cc.calc(l),Pc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pd(i,e,t,n,s){const o=(n-e)*.5,a=(s-t)*.5,r=i*i,l=i*r;return(2*t-2*n+o+a)*l+(-3*t+3*n-2*o-a)*r+o*i+t}function Nm(i,e){const t=1-i;return t*t*e}function Lm(i,e){return 2*(1-i)*i*e}function Im(i,e){return i*i*e}function Wa(i,e,t,n){return Nm(i,e)+Lm(i,t)+Im(i,n)}function Fm(i,e){const t=1-i;return t*t*t*e}function Um(i,e){const t=1-i;return 3*t*t*i*e}function Bm(i,e){return 3*(1-i)*i*i*e}function km(i,e){return i*i*i*e}function Xa(i,e,t,n,s){return Fm(i,e)+Um(i,t)+Bm(i,n)+km(i,s)}class Y0 extends us{constructor(e=new ot,t=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ot){const n=t,s=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(Xa(e,s.x,o.x,a.x,r.x),Xa(e,s.y,o.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Om extends us{constructor(e=new G,t=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new G){const n=t,s=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(Xa(e,s.x,o.x,a.x,r.x),Xa(e,s.y,o.y,a.y,r.y),Xa(e,s.z,o.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q0 extends us{constructor(e=new ot,t=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ot){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ot){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zm extends us{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z0 extends us{constructor(e=new ot,t=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ot){const n=t,s=this.v0,o=this.v1,a=this.v2;return n.set(Wa(e,s.x,o.x,a.x),Wa(e,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vm extends us{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){const n=t,s=this.v0,o=this.v1,a=this.v2;return n.set(Wa(e,s.x,o.x,a.x),Wa(e,s.y,o.y,a.y),Wa(e,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K0 extends us{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ot){const n=t,s=this.points,o=(s.length-1)*e,a=Math.floor(o),r=o-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(pd(r,l.x,c.x,h.x,f.x),pd(r,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ot().fromArray(s))}return this}}var Lu=Object.freeze({__proto__:null,ArcCurve:Pm,CatmullRomCurve3:Dm,CubicBezierCurve:Y0,CubicBezierCurve3:Om,EllipseCurve:ch,LineCurve:q0,LineCurve3:zm,QuadraticBezierCurve:Z0,QuadraticBezierCurve3:Vm,SplineCurve:K0});class Gm extends us{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const a=s[o]-n,r=this.curves[o],l=r.getLength(),c=l===0?0:1-a/l;return r.getPointAt(c,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const a=o[s],r=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(r);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Lu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class md extends Gm{constructor(e){super(),this.type="Path",this.currentPoint=new ot,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new q0(this.currentPoint.clone(),new ot(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const o=new Z0(this.currentPoint.clone(),new ot(e,t),new ot(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,o,a){const r=new Y0(this.currentPoint.clone(),new ot(e,t),new ot(n,s),new ot(o,a));return this.curves.push(r),this.currentPoint.set(o,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new K0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,o,a){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+r,t+l,n,s,o,a),this}absarc(e,t,n,s,o,a){return this.absellipse(e,t,n,n,s,o,a),this}ellipse(e,t,n,s,o,a,r,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,o,a,r,l),this}absellipse(e,t,n,s,o,a,r,l){const c=new ch(e,t,n,s,o,a,r,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hh extends md{constructor(e){super(e),this.uuid=To(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new md().fromJSON(s))}return this}}function Hm(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let o=$0(i,0,s,t,!0);const a=[];if(!o||o.next===o.prev)return a;let r,l,c;if(n&&(o=Zm(i,e,o,t)),i.length>80*t){r=i[0],l=i[1];let h=r,f=l;for(let u=t;u<s;u+=t){const d=i[u],g=i[u+1];d<r&&(r=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-r,f-l),c=c!==0?32767/c:0}return ar(o,a,t,r,l,c,0),a}function $0(i,e,t,n,s){let o;if(s===og(i,e,t,n)>0)for(let a=e;a<t;a+=n)o=gd(a/n|0,i[a],i[a+1],o);else for(let a=t-n;a>=e;a-=n)o=gd(a/n|0,i[a],i[a+1],o);return o&&ra(o,o.next)&&(lr(o),o=o.next),o}function vo(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ra(t,t.next)||_n(t.prev,t,t.next)===0)){if(lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ar(i,e,t,n,s,o,a){if(!i)return;!a&&o&&jm(i,n,s,o);let r=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?Xm(i,n,s,o):Wm(i)){e.push(l.i,i.i,c.i),lr(i),i=c.next,r=c.next;continue}if(i=c,i===r){a?a===1?(i=Ym(vo(i),e),ar(i,e,t,n,s,o,2)):a===2&&qm(i,e,t,n,s,o):ar(vo(i),e,t,n,s,o,1);break}}}function Wm(i){const e=i.prev,t=i,n=i.next;if(_n(e,t,n)>=0)return!1;const s=e.x,o=t.x,a=n.x,r=e.y,l=t.y,c=n.y,h=Math.min(s,o,a),f=Math.min(r,l,c),u=Math.max(s,o,a),d=Math.max(r,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Oa(s,r,o,l,a,c,g.x,g.y)&&_n(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xm(i,e,t,n){const s=i.prev,o=i,a=i.next;if(_n(s,o,a)>=0)return!1;const r=s.x,l=o.x,c=a.x,h=s.y,f=o.y,u=a.y,d=Math.min(r,l,c),g=Math.min(h,f,u),x=Math.max(r,l,c),p=Math.max(h,f,u),m=Iu(d,g,e,t,n),S=Iu(x,p,e,t,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=m&&_&&_.z<=S;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Oa(r,h,l,f,c,u,y.x,y.y)&&_n(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Oa(r,h,l,f,c,u,_.x,_.y)&&_n(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Oa(r,h,l,f,c,u,y.x,y.y)&&_n(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Oa(r,h,l,f,c,u,_.x,_.y)&&_n(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ym(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ra(n,s)&&Q0(n,t,t.next,s)&&rr(n,s)&&rr(s,n)&&(e.push(n.i,t.i,s.i),lr(t),lr(t.next),t=i=s),t=t.next}while(t!==i);return vo(t)}function qm(i,e,t,n,s,o){let a=i;do{let r=a.next.next;for(;r!==a.prev;){if(a.i!==r.i&&ng(a,r)){let l=j0(a,r);a=vo(a,a.next),l=vo(l,l.next),ar(a,e,t,n,s,o,0),ar(l,e,t,n,s,o,0);return}r=r.next}a=a.next}while(a!==i)}function Zm(i,e,t,n){const s=[];for(let o=0,a=e.length;o<a;o++){const r=e[o]*n,l=o<a-1?e[o+1]*n:i.length,c=$0(i,r,l,n,!1);c===c.next&&(c.steiner=!0),s.push(tg(c))}s.sort(Km);for(let o=0;o<s.length;o++)t=$m(s[o],t);return t}function Km(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function $m(i,e){const t=Jm(i,e);if(!t)return e;const n=j0(t,i);return vo(n,n.next),vo(t,t.next)}function Jm(i,e){let t=e;const n=i.x,s=i.y;let o=-1/0,a;if(ra(i,t))return t;do{if(ra(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>o&&(o=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const r=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&J0(s<c?n:o,s,l,c,s<c?o:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);rr(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Qm(a,t)))&&(a=t,h=f)}t=t.next}while(t!==r);return a}function Qm(i,e){return _n(i.prev,i,e.prev)<0&&_n(e.next,i,i.next)<0}function jm(i,e,t,n){let s=i;do s.z===0&&(s.z=Iu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,eg(s)}function eg(i){let e,t=1;do{let n=i,s;i=null;let o=null;for(e=0;n;){e++;let a=n,r=0;for(let c=0;c<t&&(r++,a=a.nextZ,!!a);c++);let l=t;for(;r>0||l>0&&a;)r!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,r--):(s=a,a=a.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=a}o.nextZ=null,t*=2}while(e>1);return i}function Iu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function tg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function J0(i,e,t,n,s,o,a,r){return(s-a)*(e-r)>=(i-a)*(o-r)&&(i-a)*(n-r)>=(t-a)*(e-r)&&(t-a)*(o-r)>=(s-a)*(n-r)}function Oa(i,e,t,n,s,o,a,r){return!(i===a&&e===r)&&J0(i,e,t,n,s,o,a,r)}function ng(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ig(i,e)&&(rr(i,e)&&rr(e,i)&&sg(i,e)&&(_n(i.prev,i,e.prev)||_n(i,e.prev,e))||ra(i,e)&&_n(i.prev,i,i.next)>0&&_n(e.prev,e,e.next)>0)}function _n(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ra(i,e){return i.x===e.x&&i.y===e.y}function Q0(i,e,t,n){const s=Qr(_n(i,e,t)),o=Qr(_n(i,e,n)),a=Qr(_n(t,n,i)),r=Qr(_n(t,n,e));return!!(s!==o&&a!==r||s===0&&Jr(i,t,e)||o===0&&Jr(i,n,e)||a===0&&Jr(t,i,n)||r===0&&Jr(t,e,n))}function Jr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qr(i){return i>0?1:i<0?-1:0}function ig(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Q0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function rr(i,e){return _n(i.prev,i,i.next)<0?_n(i,e,i.next)>=0&&_n(i,i.prev,e)>=0:_n(i,e,i.prev)<0||_n(i,i.next,e)<0}function sg(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function j0(i,e){const t=Fu(i.i,i.x,i.y),n=Fu(e.i,e.x,e.y),s=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function gd(i,e,t,n){const s=Fu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function og(i,e,t,n){let s=0;for(let o=e,a=t-n;o<t;o+=n)s+=(i[a]-i[o])*(i[o+1]+i[a+1]),a=o;return s}class ag{static triangulate(e,t,n=2){return Hm(e,t,n)}}class Ko{static area(e){const t=e.length;let n=0;for(let s=t-1,o=0;o<t;s=o++)n+=e[s].x*e[o].y-e[o].x*e[s].y;return n*.5}static isClockWise(e){return Ko.area(e)<0}static triangulateShape(e,t){const n=[],s=[],o=[];vd(e),xd(n,e);let a=e.length;t.forEach(vd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,xd(n,t[l]);const r=ag.triangulate(n,s);for(let l=0;l<r.length;l+=3)o.push(r.slice(l,l+3));return o}}function vd(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ql extends vn{constructor(e=new hh([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],o=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];a(c)}this.setAttribute("position",new an(s,3)),this.setAttribute("uv",new an(o,2)),this.computeVertexNormals();function a(r){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:rg;let y,_=!1,A,E,v,T;if(m){y=m.getSpacedPoints(h),_=!0,u=!1;const se=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,se),E=new G,v=new G,T=new G}u||(p=0,d=0,g=0,x=0);const U=r.extractPoints(c);let C=U.shape;const D=U.holes;if(!Ko.isClockWise(C)){C=C.reverse();for(let se=0,fe=D.length;se<fe;se++){const de=D[se];Ko.isClockWise(de)&&(D[se]=de.reverse())}}function Y(se){const de=10000000000000001e-36;let we=se[0];for(let Re=1;Re<=se.length;Re++){const ze=Re%se.length,De=se[ze],it=De.x-we.x,be=De.y-we.y,Ce=it*it+be*be,H=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(we.x),Math.abs(we.y)),nt=de*H*H;if(Ce<=nt){se.splice(ze,1),Re--;continue}we=De}}Y(C),D.forEach(Y);const R=D.length,B=C;for(let se=0;se<R;se++){const fe=D[se];C=C.concat(fe)}function $(se,fe,de){return fe||on("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(fe,de)}const K=C.length;function he(se,fe,de){let we,Re,ze;const De=se.x-fe.x,it=se.y-fe.y,be=de.x-se.x,Ce=de.y-se.y,H=De*De+it*it,nt=De*Ce-it*be;if(Math.abs(nt)>Number.EPSILON){const ke=Math.sqrt(H),$e=Math.sqrt(be*be+Ce*Ce),pe=fe.x-it/ke,Ke=fe.y+De/ke,qe=de.x-Ce/$e,at=de.y+be/$e,L=((qe-pe)*Ce-(at-Ke)*be)/(De*Ce-it*be);we=pe+De*L-se.x,Re=Ke+it*L-se.y;const w=we*we+Re*Re;if(w<=2)return new ot(we,Re);ze=Math.sqrt(w/2)}else{let ke=!1;De>Number.EPSILON?be>Number.EPSILON&&(ke=!0):De<-Number.EPSILON?be<-Number.EPSILON&&(ke=!0):Math.sign(it)===Math.sign(Ce)&&(ke=!0),ke?(we=-it,Re=De,ze=Math.sqrt(H)):(we=De,Re=it,ze=Math.sqrt(H/2))}return new ot(we/ze,Re/ze)}const ee=[];for(let se=0,fe=B.length,de=fe-1,we=se+1;se<fe;se++,de++,we++)de===fe&&(de=0),we===fe&&(we=0),ee[se]=he(B[se],B[de],B[we]);const ue=[];let ae,le=ee.concat();for(let se=0,fe=R;se<fe;se++){const de=D[se];ae=[];for(let we=0,Re=de.length,ze=Re-1,De=we+1;we<Re;we++,ze++,De++)ze===Re&&(ze=0),De===Re&&(De=0),ae[we]=he(de[we],de[ze],de[De]);ue.push(ae),le=le.concat(ae)}let Ee;if(p===0)Ee=Ko.triangulateShape(B,D);else{const se=[],fe=[];for(let de=0;de<p;de++){const we=de/p,Re=d*Math.cos(we*Math.PI/2),ze=g*Math.sin(we*Math.PI/2)+x;for(let De=0,it=B.length;De<it;De++){const be=$(B[De],ee[De],ze);te(be.x,be.y,-Re),we===0&&se.push(be)}for(let De=0,it=R;De<it;De++){const be=D[De];ae=ue[De];const Ce=[];for(let H=0,nt=be.length;H<nt;H++){const ke=$(be[H],ae[H],ze);te(ke.x,ke.y,-Re),we===0&&Ce.push(ke)}we===0&&fe.push(Ce)}}Ee=Ko.triangulateShape(se,fe)}const N=Ee.length,j=g+x;for(let se=0;se<K;se++){const fe=u?$(C[se],le[se],j):C[se];_?(v.copy(A.normals[0]).multiplyScalar(fe.x),E.copy(A.binormals[0]).multiplyScalar(fe.y),T.copy(y[0]).add(v).add(E),te(T.x,T.y,T.z)):te(fe.x,fe.y,0)}for(let se=1;se<=h;se++)for(let fe=0;fe<K;fe++){const de=u?$(C[fe],le[fe],j):C[fe];_?(v.copy(A.normals[se]).multiplyScalar(de.x),E.copy(A.binormals[se]).multiplyScalar(de.y),T.copy(y[se]).add(v).add(E),te(T.x,T.y,T.z)):te(de.x,de.y,f/h*se)}for(let se=p-1;se>=0;se--){const fe=se/p,de=d*Math.cos(fe*Math.PI/2),we=g*Math.sin(fe*Math.PI/2)+x;for(let Re=0,ze=B.length;Re<ze;Re++){const De=$(B[Re],ee[Re],we);te(De.x,De.y,f+de)}for(let Re=0,ze=D.length;Re<ze;Re++){const De=D[Re];ae=ue[Re];for(let it=0,be=De.length;it<be;it++){const Ce=$(De[it],ae[it],we);_?te(Ce.x,Ce.y+y[h-1].y,y[h-1].x+de):te(Ce.x,Ce.y,f+de)}}}W(),I();function W(){const se=s.length/3;if(u){let fe=0,de=K*fe;for(let we=0;we<N;we++){const Re=Ee[we];ce(Re[2]+de,Re[1]+de,Re[0]+de)}fe=h+p*2,de=K*fe;for(let we=0;we<N;we++){const Re=Ee[we];ce(Re[0]+de,Re[1]+de,Re[2]+de)}}else{for(let fe=0;fe<N;fe++){const de=Ee[fe];ce(de[2],de[1],de[0])}for(let fe=0;fe<N;fe++){const de=Ee[fe];ce(de[0]+K*h,de[1]+K*h,de[2]+K*h)}}n.addGroup(se,s.length/3-se,0)}function I(){const se=s.length/3;let fe=0;X(B,fe),fe+=B.length;for(let de=0,we=D.length;de<we;de++){const Re=D[de];X(Re,fe),fe+=Re.length}n.addGroup(se,s.length/3-se,1)}function X(se,fe){let de=se.length;for(;--de>=0;){const we=de;let Re=de-1;Re<0&&(Re=se.length-1);for(let ze=0,De=h+p*2;ze<De;ze++){const it=K*ze,be=K*(ze+1),Ce=fe+we+it,H=fe+Re+it,nt=fe+Re+be,ke=fe+we+be;ie(Ce,H,nt,ke)}}}function te(se,fe,de){l.push(se),l.push(fe),l.push(de)}function ce(se,fe,de){re(se),re(fe),re(de);const we=s.length/3,Re=S.generateTopUV(n,s,we-3,we-2,we-1);Me(Re[0]),Me(Re[1]),Me(Re[2])}function ie(se,fe,de,we){re(se),re(fe),re(we),re(fe),re(de),re(we);const Re=s.length/3,ze=S.generateSideWallUV(n,s,Re-6,Re-3,Re-2,Re-1);Me(ze[0]),Me(ze[1]),Me(ze[3]),Me(ze[1]),Me(ze[2]),Me(ze[3])}function re(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function Me(se){o.push(se.x),o.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lg(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,a=e.shapes.length;o<a;o++){const r=t[e.shapes[o]];n.push(r)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lu[s.type]().fromJSON(s)),new ql(n,e.options)}}const rg={generateTopUV:function(i,e,t,n,s){const o=e[t*3],a=e[t*3+1],r=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ot(o,a),new ot(r,l),new ot(c,h)]},generateSideWallUV:function(i,e,t,n,s,o){const a=e[t*3],r=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[o*3],p=e[o*3+1],m=e[o*3+2];return Math.abs(r-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-f),new ot(u,1-g),new ot(x,1-m)]:[new ot(r,1-l),new ot(h,1-f),new ot(d,1-g),new ot(p,1-m)]}};function lg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dh extends lh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dh(e.radius,e.detail)}}class qs extends vn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,a=t/2,r=Math.floor(n),l=Math.floor(s),c=r+1,h=l+1,f=e/r,u=t/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const S=m*u-a;for(let y=0;y<c;y++){const _=y*f-o;g.push(_,-S,0),x.push(0,0,1),p.push(y/r),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<r;S++){const y=S+c*m,_=S+c*(m+1),A=S+1+c*(m+1),E=S+1+c*m;d.push(y,_,E),d.push(_,A,E)}this.setIndex(d),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rs extends vn{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],f=new G,u=new G,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const S=[],y=m/n,_=a+y*r,A=e*Math.cos(_),E=Math.sqrt(e*e-A*A);let v=0;m===0&&a===0?v=.5/t:m===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const U=T/t,C=s+U*o;f.x=-E*Math.cos(C),f.y=A,f.z=E*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),p.push(U+v,1-y),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const y=h[m][S+1],_=h[m][S],A=h[m+1][S],E=h[m+1][S+1];(m!==0||a>0)&&d.push(y,_,E),(m!==n-1||l<Math.PI)&&d.push(_,A,E)}this.setIndex(d),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function la(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Sd(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Sd(s[0])){const o=[];for(let a=0,r=s.length;a<r;a++)o[a]=s[a].clone();e[t][n]=o}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ri(i){const e={};for(let t=0;t<i.length;t++){const n=la(i[t]);for(const s in n)e[s]=n[s]}return e}function Sd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ef(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:sn.workingColorSpace}const ug={clone:la,merge:ri};var hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new un().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fg extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pg extends va{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ao extends pg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Jo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Jo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mg extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gg extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tf extends qn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class nf extends tf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Dc=new un,_d=new G,Md=new G;class vg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new wn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Dc,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,a=s?s.z/o.x:1,r=s?s.w/o.y:1,l=s?s.x/o.x:0,c=s?s.y/o.y:0;e.coordinateSystem===ir||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*r,0,.5*r+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*r,0,.5*r+c,0,0,.5,.5,0,0,0,1),t.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jr=new G,el=new Li,ts=new G;class sf extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jr,el,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,el,ts.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(jr,el,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,el,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Us=new G,yd=new ot,bd=new ot;class Di extends sf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,t){return this.getViewBounds(e,yd,bd),t.subVectors(bd,yd)}setViewOffset(e,t,n,s,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fh extends sf{constructor(e=-1,t=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,a=n+e,r=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xg extends vg{constructor(){super(new fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fo extends tf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new xg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Sg extends vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Go=-90,Ho=1;class Uu extends qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Di(Go,Ho,e,t);s.layers=this.layers,this.add(s);const o=new Di(Go,Ho,e,t);o.layers=this.layers,this.add(o);const a=new Di(Go,Ho,e,t);a.layers=this.layers,this.add(a);const r=new Di(Go,Ho,e,t);r.layers=this.layers,this.add(r);const l=new Di(Go,Ho,e,t);l.layers=this.layers,this.add(l);const c=new Di(Go,Ho,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,a,r,l]=t;for(const c of t)this.remove(c);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _g extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const wd=new un;class Mg{constructor(e,t,n=0,s=1/0){this.ray=new Yl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):on("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wd),this}intersectObject(e,t=!0,n=[]){return Bu(e,this,n,t),n.sort(Td),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)Bu(e[s],this,n,t);return n.sort(Td),n}}function Td(i,e){return i.distance-e.distance}function Bu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let a=0,r=o.length;a<r;a++)Bu(o[a],e,t,!0)}}class Ed{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yg extends $s{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ad(i,e,t,n){const s=bg(n);switch(t){case A0:return i*e;case Xl:return i*e/s.components*s.byteLength;case eh:return i*e/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case th:return i*e*2/s.components*s.byteLength;case R0:return i*e*3/s.components*s.byteLength;case xi:return i*e*4/s.components*s.byteLength;case nh:return i*e*4/s.components*s.byteLength;case fl:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tu:case iu:return Math.max(i,16)*Math.max(e,8)/4;case eu:case nu:return Math.max(i,8)*Math.max(e,8)/2;case su:case ou:case ru:case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case au:case yl:case cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Su:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wu:case Tu:case Eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Au:case Ru:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bl:case Cu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bg(i){switch(i){case Xn:case b0:return{byteLength:1,components:1};case nr:case w0:case Ui:return{byteLength:2,components:1};case Qu:case ju:return{byteLength:2,components:4};case rs:case Ju:case Yi:return{byteLength:4,components:1};case T0:case E0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);function of(){let i=null,e=!1,t=null,n=null;function s(o,a){n=i.requestAnimationFrame(s),t(o,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function wg(i){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),r.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:f}}function n(r,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,r),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(i.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:o,update:a}}var Tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,Ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`#ifdef USE_BATCHING
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
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Og=`#ifdef USE_BUMPMAP
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zg=`#define PI 3.141592653589793
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
} // validated`,Kg=`vec3 transformedNormal = objectNormal;
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
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hv=`#ifdef USE_GRADIENTMAP
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
}`,dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mv=`PhysicalMaterial material;
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
#endif`,yv=`uniform sampler2D dfgLUT;
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
}`,bv=`
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ev=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iv=`#if defined( USE_POINTS_UV )
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
#endif`,Fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
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
#endif`,Vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qv=`#ifdef USE_NORMALMAP
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
#endif`,Zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c1=`float getShadowMask() {
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
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform float backgroundBlurriness;
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`#include <common>
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
}`,D1=`#if DEPTH_PACKING == 3200
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
}`,N1=`#define DISTANCE
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
}`,L1=`#define DISTANCE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`uniform float scale;
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
}`,B1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,O1=`uniform vec3 diffuse;
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
}`,z1=`#define LAMBERT
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
}`,V1=`#define LAMBERT
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
}`,G1=`#define MATCAP
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
}`,H1=`#define MATCAP
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
}`,W1=`#define NORMAL
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
}`,X1=`#define NORMAL
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
}`,Y1=`#define PHONG
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
}`,q1=`#define PHONG
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
}`,Z1=`#define STANDARD
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
}`,K1=`#define STANDARD
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
}`,$1=`#define TOON
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
}`,J1=`#define TOON
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
}`,Q1=`uniform float size;
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
}`,j1=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 color;
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
}`,nx=`uniform float rotation;
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
}`,ix=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Tg,alphahash_pars_fragment:Eg,alphamap_fragment:Ag,alphamap_pars_fragment:Rg,alphatest_fragment:Cg,alphatest_pars_fragment:Pg,aomap_fragment:Dg,aomap_pars_fragment:Ng,batching_pars_vertex:Lg,batching_vertex:Ig,begin_vertex:Fg,beginnormal_vertex:Ug,bsdfs:Bg,iridescence_fragment:kg,bumpmap_pars_fragment:Og,clipping_planes_fragment:zg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Gg,clipping_planes_vertex:Hg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:Yg,color_vertex:qg,common:Zg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:$g,displacementmap_vertex:Jg,emissivemap_fragment:Qg,emissivemap_pars_fragment:jg,colorspace_fragment:ev,colorspace_pars_fragment:tv,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:sv,envmap_pars_vertex:ov,envmap_physical_pars_fragment:gv,envmap_vertex:av,fog_vertex:rv,fog_pars_vertex:lv,fog_fragment:cv,fog_pars_fragment:uv,gradientmap_pars_fragment:hv,lightmap_pars_fragment:dv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:vv,lights_toon_pars_fragment:xv,lights_phong_fragment:Sv,lights_phong_pars_fragment:_v,lights_physical_fragment:Mv,lights_physical_pars_fragment:yv,lights_fragment_begin:bv,lights_fragment_maps:wv,lights_fragment_end:Tv,lightprobes_pars_fragment:Ev,logdepthbuf_fragment:Av,logdepthbuf_pars_fragment:Rv,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Pv,map_fragment:Dv,map_pars_fragment:Nv,map_particle_fragment:Lv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Fv,metalnessmap_pars_fragment:Uv,morphinstance_vertex:Bv,morphcolor_vertex:kv,morphnormal_vertex:Ov,morphtarget_pars_vertex:zv,morphtarget_vertex:Vv,normal_fragment_begin:Gv,normal_fragment_maps:Hv,normal_pars_fragment:Wv,normal_pars_vertex:Xv,normal_vertex:Yv,normalmap_pars_fragment:qv,clearcoat_normal_fragment_begin:Zv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:Jv,opaque_fragment:Qv,packing:jv,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:r1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:h1,skinning_vertex:d1,skinnormal_vertex:f1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:v1,transmission_fragment:x1,transmission_pars_fragment:S1,uv_pars_fragment:_1,uv_pars_vertex:M1,uv_vertex:y1,worldpos_vertex:b1,background_vert:w1,background_frag:T1,backgroundCube_vert:E1,backgroundCube_frag:A1,cube_vert:R1,cube_frag:C1,depth_vert:P1,depth_frag:D1,distance_vert:N1,distance_frag:L1,equirect_vert:I1,equirect_frag:F1,linedashed_vert:U1,linedashed_frag:B1,meshbasic_vert:k1,meshbasic_frag:O1,meshlambert_vert:z1,meshlambert_frag:V1,meshmatcap_vert:G1,meshmatcap_frag:H1,meshnormal_vert:W1,meshnormal_frag:X1,meshphong_vert:Y1,meshphong_frag:q1,meshphysical_vert:Z1,meshphysical_frag:K1,meshtoon_vert:$1,meshtoon_frag:J1,points_vert:Q1,points_frag:j1,shadow_vert:ex,shadow_frag:tx,sprite_vert:nx,sprite_frag:ix},mt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},os={basic:{uniforms:ri([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:ri([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:ri([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:ri([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:ri([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:ri([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:ri([mt.points,mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:ri([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:ri([mt.common,mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:ri([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:ri([mt.sprite,mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:ri([mt.common,mt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:ri([mt.lights,mt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};os.physical={uniforms:ri([os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const tl={r:0,b:0,g:0},sx=new un,af=new Ht;af.set(-1,0,0,0,1,0,0,0,1);function ox(i,e,t,n,s,o){const a=new Ut(0);let r=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let y=S.isScene===!0?S.background:null;if(y&&y.isTexture){const _=S.backgroundBlurriness>0;y=e.get(y,_)}return y}function g(S){let y=!1;const _=d(S);_===null?p(a,r):_&&_.isColor&&(p(_,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,y){const _=d(y);_&&_.isCubeTexture?(c===void 0&&(c=new Qt(new xa(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:la(os.backgroundCube.uniforms),vertexShader:os.backgroundCube.vertexShader,fragmentShader:os.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=sn.getTransfer(_.colorSpace)!==cn,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Qt(new qs(2,2),new bn({name:"BackgroundMaterial",uniforms:la(os.background.uniforms),vertexShader:os.background.vertexShader,fragmentShader:os.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=sn.getTransfer(_.colorSpace)!==cn,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(tl,ef(i)),t.buffers.color.setClear(tl.r,tl.g,tl.b,y,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),r=y,p(a,r)},getClearAlpha:function(){return r},setClearAlpha:function(S){r=S,p(a,r)},render:g,addToRenderList:x,dispose:m}}function ax(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,a=!1;function r(D,O,Y,R,B){let $=!1;const K=f(D,R,Y,O);o!==K&&(o=K,c(o.object)),$=d(D,R,Y,B),$&&g(D,R,Y,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(D,O,Y,R),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,O,Y,R){const B=R.wireframe===!0;let $=n[O.id];$===void 0&&($={},n[O.id]=$);const K=D.isInstancedMesh===!0?D.id:0;let he=$[K];he===void 0&&(he={},$[K]=he);let ee=he[Y.id];ee===void 0&&(ee={},he[Y.id]=ee);let ue=ee[B];return ue===void 0&&(ue=u(l()),ee[B]=ue),ue}function u(D){const O=[],Y=[],R=[];for(let B=0;B<t;B++)O[B]=0,Y[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:R,object:D,attributes:{},index:null}}function d(D,O,Y,R){const B=o.attributes,$=O.attributes;let K=0;const he=Y.getAttributes();for(const ee in he)if(he[ee].location>=0){const ae=B[ee];let le=$[ee];if(le===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),ae===void 0||ae.attribute!==le||le&&ae.data!==le.data)return!0;K++}return o.attributesNum!==K||o.index!==R}function g(D,O,Y,R){const B={},$=O.attributes;let K=0;const he=Y.getAttributes();for(const ee in he)if(he[ee].location>=0){let ae=$[ee];ae===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const le={};le.attribute=ae,ae&&ae.data&&(le.data=ae.data),B[ee]=le,K++}o.attributes=B,o.attributesNum=K,o.index=R}function x(){const D=o.newAttributes;for(let O=0,Y=D.length;O<Y;O++)D[O]=0}function p(D){m(D,0)}function m(D,O){const Y=o.newAttributes,R=o.enabledAttributes,B=o.attributeDivisors;Y[D]=1,R[D]===0&&(i.enableVertexAttribArray(D),R[D]=1),B[D]!==O&&(i.vertexAttribDivisor(D,O),B[D]=O)}function S(){const D=o.newAttributes,O=o.enabledAttributes;for(let Y=0,R=O.length;Y<R;Y++)O[Y]!==D[Y]&&(i.disableVertexAttribArray(Y),O[Y]=0)}function y(D,O,Y,R,B,$,K){K===!0?i.vertexAttribIPointer(D,O,Y,B,$):i.vertexAttribPointer(D,O,Y,R,B,$)}function _(D,O,Y,R){x();const B=R.attributes,$=Y.getAttributes(),K=O.defaultAttributeValues;for(const he in $){const ee=$[he];if(ee.location>=0){let ue=B[he];if(ue===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ue!==void 0){const ae=ue.normalized,le=ue.itemSize,Ee=e.get(ue);if(Ee===void 0)continue;const N=Ee.buffer,j=Ee.type,W=Ee.bytesPerElement,I=j===i.INT||j===i.UNSIGNED_INT||ue.gpuType===Ju;if(ue.isInterleavedBufferAttribute){const X=ue.data,te=X.isInterleavedBuffer===!0?X.stride:X.itemSize,ce=ue.offset;if(X.isInstancedInterleavedBuffer||X.isInstancedBufferAttribute){for(let ie=0;ie<ee.locationSize;ie++)m(ee.location+ie,X.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ie=0;ie<ee.locationSize;ie++)p(ee.location+ie);i.bindBuffer(i.ARRAY_BUFFER,N);for(let ie=0;ie<ee.locationSize;ie++)y(ee.location+ie,le/ee.locationSize,j,ae,te*W,(ce+le/ee.locationSize*ie)*W,I)}else{if(ue.isInstancedBufferAttribute){for(let X=0;X<ee.locationSize;X++)m(ee.location+X,ue.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let X=0;X<ee.locationSize;X++)p(ee.location+X);i.bindBuffer(i.ARRAY_BUFFER,N);for(let X=0;X<ee.locationSize;X++)y(ee.location+X,le/ee.locationSize,j,ae,le*W,le/ee.locationSize*X*W,I)}}else if(K!==void 0){const ae=K[he];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(ee.location,ae);break;case 3:i.vertexAttrib3fv(ee.location,ae);break;case 4:i.vertexAttrib4fv(ee.location,ae);break;default:i.vertexAttrib1fv(ee.location,ae)}}}}S()}function A(){U();for(const D in n){const O=n[D];for(const Y in O){const R=O[Y];for(const B in R){const $=R[B];for(const K in $)h($[K].object),delete $[K];delete R[B]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const O=n[D.id];for(const Y in O){const R=O[Y];for(const B in R){const $=R[B];for(const K in $)h($[K].object),delete $[K];delete R[B]}}delete n[D.id]}function v(D){for(const O in n){const Y=n[O];for(const R in Y){const B=Y[R];if(B[D.id]===void 0)continue;const $=B[D.id];for(const K in $)h($[K].object),delete $[K];delete B[D.id]}}}function T(D){for(const O in n){const Y=n[O],R=D.isInstancedMesh===!0?D.id:0,B=Y[R];if(B!==void 0){for(const $ in B){const K=B[$];for(const he in K)h(K[he].object),delete K[he];delete B[$]}delete Y[R],Object.keys(Y).length===0&&delete n[O]}}}function U(){C(),a=!0,o!==s&&(o=s,c(o.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:U,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:T,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function rx(i,e,t){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function r(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r}function lx(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==xi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(v){const T=v===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Xn&&v!==Yi&&!T&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,maxSamples:A,samples:E}}function cx(i){const e=this;let t=null,n=0,s=!1,o=!1;const a=new Wi,r=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||o&&!p)o?h(null):c();else{const S=o?0:n,y=S*4;let _=m.clippingState||null;l.value=_,_=h(g,u,y,d);for(let A=0;A!==y;++A)_[A]=t[A];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=d+x*4,S=u.matrixWorldInverse;r.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,_=d;y!==x;++y,_+=4)a.copy(f[y]).applyMatrix4(S,r),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}class ph extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new H0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xa(5,5,5),o=new bn({name:"CubemapFromEquirect",uniforms:la(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ui,blending:$o});o.uniforms.tEquirect.value=t;const a=new Qt(s,o),r=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Mn),new Uu(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(o)}}const Rd=256,ux=3,hx=20,rf=256,lf=16,dx=3,fx=new G,px=new Ut;class cr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Uu(1,10,null),this._boxMesh=new Qt(new xa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:a=256,position:r=fx}=o,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(px));const p=new Uu(n,s,h);return p.position.copy(r),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Rd,L0(e))}_fromTexture(e,t){e.mapping===sa||e.mapping===tr?this._setSize(e.image.length===0?Rd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Cd(e,!1,!1),n=Math.log2(e)-ux;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,o=this._cubeCamera;s.material=n,o.renderTarget=e,o.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),o.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===sa||e.mapping===tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Pd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mx(),this._integrationMaterial=gx());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(t/lf);for(let a=0;a<=n;a++){const r=cr.lodToRoughness(a,n);if(a>n-dx)o.roughness.value=r,this._renderCube(e,a,this._integrationMaterial);else{const l=r>0?Math.log2(t)+.5*Math.log2(6/(rf*Math.pow(r,4)))+.5:0;s.roughness.value=r,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vx());const n=this._blurMaterial,s=n.uniforms,o=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=o.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(o,0,n)}}function Cd(i,e,t){return new ph(i,{minFilter:Ss,generateMipmaps:e,type:Ui,colorSpace:wl,depthBuffer:t})}function yr(i,e,t){return new bn({name:i,uniforms:e,vertexShader:qt.cube_vert,fragmentShader:t,side:ui,blending:$o,depthTest:!1,depthWrite:!1})}function mx(){return yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rf}u

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
	`)}function gx(){return yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lf}},`

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
	`)}function vx(){return yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hx}
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
	`)}function Pd(){return yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Dd(){return yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):o(u)}function o(u){if(u&&u.isTexture){const d=u.mapping;if(d===tc||d===nc)if(e.has(u)){const g=e.get(u).texture;return r(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new ph(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),r(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const d=u.mapping,g=d===tc||d===nc,x=d===sa||d===tr;if(g||x){let p=t.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new cr(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const S=u.image;return g&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new cr(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function r(u,d){return d===tc?u.mapping=sa:d===nc&&(u.mapping=tr),u}function l(u){let d=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Sx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Jo("WebGLRenderer: "+n+" extension not supported."),s}}}function _x(i,e,t,n){const s={},o=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function r(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",r),delete s[g.id],a.unregister(g);const x=o.get(g);x&&(e.remove(x),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",r),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(g){const x=g.attributes;for(const p in x)e.update(x[p],i.ARRAY_BUFFER)}function f(g){const x=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const S=x!==null?x.array.length:p.array.length/3-1,y=p.count>=65535?V0:z0,_=new y(Math.ceil(S/3)*6,1),A=_.array;if(x!==null){const v=x.array;m=x.version;for(let T=0,U=0;T<S;T+=3){const C=v[T+0],D=v[T+1],O=v[T+2];A[U++]=C,A[U++]=D,A[U++]=D,A[U++]=O,A[U++]=O,A[U++]=C}}else{m=p.version;for(let v=0,T=0;v<S;v+=3){const U=v+0,C=v+1,D=v+2;A[T++]=U,A[T++]=C,A[T++]=C,A[T++]=D,A[T++]=D,A[T++]=U}}_.version=m;const E=o.get(g);E&&e.remove(E),o.set(g,_)}function u(g){const x=o.get(g);if(x){const p=g.index;p!==null&&x.version<p.version&&f(g)}else f(g);return o.get(g)}function d(){for(const g in s){const x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Mx(i,e,t){let n;function s(f){n=f}let o,a;function r(f){o=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,o,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,o,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,f,0,d);let x=0;for(let p=0;p<d;p++)x+=u[p];t.update(x,n,1)}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=r*(o/3);break;case i.LINES:t.lines+=r*(o/2);break;case i.LINE_STRIP:t.lines+=r*(o-1);break;case i.LINE_LOOP:t.lines+=r*o;break;case i.POINTS:t.points+=r*o;break;default:on("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bx(i,e,t){const n=new WeakMap,s=new wn;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(r);if(u===void 0||u.count!==f){let C=function(){T.dispose(),n.delete(r),r.removeEventListener("dispose",C)};var d=C;u!==void 0&&u.texture.dispose();const g=r.morphAttributes.position!==void 0,x=r.morphAttributes.normal!==void 0,p=r.morphAttributes.color!==void 0,m=r.morphAttributes.position||[],S=r.morphAttributes.normal||[],y=r.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),p===!0&&(_=3);let A=r.attributes.position.count*_,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const v=new Float32Array(A*E*4*f),T=new B0(v,A,E,f);T.type=Yi,T.needsUpdate=!0;const U=_*4;for(let D=0;D<f;D++){const O=m[D],Y=S[D],R=y[D],B=A*E*4*D;for(let $=0;$<O.count;$++){const K=$*U;g===!0&&(s.fromBufferAttribute(O,$),v[B+K+0]=s.x,v[B+K+1]=s.y,v[B+K+2]=s.z,v[B+K+3]=0),x===!0&&(s.fromBufferAttribute(Y,$),v[B+K+4]=s.x,v[B+K+5]=s.y,v[B+K+6]=s.z,v[B+K+7]=0),p===!0&&(s.fromBufferAttribute(R,$),v[B+K+8]=s.x,v[B+K+9]=s.y,v[B+K+10]=s.z,v[B+K+11]=R.itemSize===4?s.w:1)}}u={count:f,texture:T,size:new ot(A,E)},n.set(r,u),r.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function wx(i,e,t,n,s){let o=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,u=e.get(c,f);if(o.get(u)!==h&&(e.update(u),o.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return u}function r(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:r}}const Tx={[g0]:"LINEAR_TONE_MAPPING",[v0]:"REINHARD_TONE_MAPPING",[x0]:"CINEON_TONE_MAPPING",[$u]:"ACES_FILMIC_TONE_MAPPING",[_0]:"AGX_TONE_MAPPING",[M0]:"NEUTRAL_TONE_MAPPING",[S0]:"CUSTOM_TONE_MAPPING"};function Ex(i,e,t,n,s,o){const a=new Ti(e,t,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let r=null,l=null,c=null;const h=new vn;h.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new an([0,2,0,0,2,0],2));const f=new fg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qt(h,f),d=new fh(-1,1,1,-1,0,1);let g=null,x=null,p=!1,m,S=null,y=[],_=!1;this.setSize=function(A,E){a.setSize(A,E),r!==null&&r.setSize(A,E),l!==null&&l.setSize(A,E);for(let v=0;v<y.length;v++){const T=y[v];T.setSize&&T.setSize(A,E)}},this.setEffects=function(A){y=A,_=y.length>0&&y[0].isRenderPass===!0;const E=a.width,v=a.height;y.length>0&&r===null&&(r=new Ti(E,v,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new Ti(E,v,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));const T=s===!0&&y.some(U=>U.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new aa(E,v),o===!0&&(c.format=Gs,c.type=oa)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let U=0;U<y.length;U++){const C=y[U];C.setSize&&C.setSize(E,v),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,E){if(p||A.toneMapping===ji&&y.length===0)return!1;if(S=E,E!==null){const v=E.width,T=E.height;(a.width!==v||a.height!==T)&&this.setSize(v,T)}return _===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=ji,!0},this.hasRenderPass=function(){return _},this.end=function(A,E){A.toneMapping=m,p=!0;let v=a,T=r;for(let U=0;U<y.length;U++){const C=y[U];C.enabled!==!1&&(C.render(A,T,v,E),C.needsSwap!==!1&&(v=T,T=T===r?l:r))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,f.defines={},sn.getTransfer(g)===cn&&(f.defines.SRGB_TRANSFER="");const U=Tx[x];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(S),A.render(u,d),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),r!==null&&r.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const cf=new Yn,uf=new aa(1,1),hf=new W0(1),df=new B0,ff=new k0,pf=new H0,Nd=[],Ld=[],Id=new Float32Array(16),Fd=new Float32Array(9),Ud=new Float32Array(4);function Sa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=Nd[s];if(o===void 0&&(o=new Float32Array(s),Nd[s]=o),e!==0){n.toArray(o,0);for(let a=1,r=0;a!==e;++a)r+=t,i[a].toArray(o,r)}return o}function On(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zl(i,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ax(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2fv(this.addr,e),zn(t,e)}}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;i.uniform3fv(this.addr,e),zn(t,e)}}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4fv(this.addr,e),zn(t,e)}}function Dx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zn(t,e)}else{if(On(t,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),zn(t,n)}}function Nx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zn(t,e)}else{if(On(t,n))return;Fd.set(n),i.uniformMatrix3fv(this.addr,!1,Fd),zn(t,n)}}function Lx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zn(t,e)}else{if(On(t,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),zn(t,n)}}function Ix(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2iv(this.addr,e),zn(t,e)}}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3iv(this.addr,e),zn(t,e)}}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4iv(this.addr,e),zn(t,e)}}function kx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2uiv(this.addr,e),zn(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3uiv(this.addr,e),zn(t,e)}}function Vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4uiv(this.addr,e),zn(t,e)}}function Kl(i){return i.version===0&&(i.compareFunction=D0,i.needsUpdate=!0),i}function Gx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?o=Kl(uf):o=cf,t.setTexture2D(e||o,s)}function Hx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ff,s)}function Wx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Kl(hf):o=pf,t.setTextureCube(e||o,s)}function Xx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||df,s)}function Yx(i){switch(i){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Dx;case 35675:return Nx;case 35676:return Lx;case 5124:case 35670:return Ix;case 35667:case 35671:return Fx;case 35668:case 35672:return Ux;case 35669:case 35673:return Bx;case 5125:return kx;case 36294:return Ox;case 36295:return zx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function qx(i,e){i.uniform1fv(this.addr,e)}function Zx(i,e){const t=Sa(e,this.size,2);i.uniform2fv(this.addr,t)}function Kx(i,e){const t=Sa(e,this.size,3);i.uniform3fv(this.addr,t)}function $x(i,e){const t=Sa(e,this.size,4);i.uniform4fv(this.addr,t)}function Jx(i,e){const t=Sa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qx(i,e){const t=Sa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jx(i,e){const t=Sa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eS(i,e){i.uniform1iv(this.addr,e)}function tS(i,e){i.uniform2iv(this.addr,e)}function nS(i,e){i.uniform3iv(this.addr,e)}function iS(i,e){i.uniform4iv(this.addr,e)}function sS(i,e){i.uniform1uiv(this.addr,e)}function oS(i,e){i.uniform2uiv(this.addr,e)}function aS(i,e){i.uniform3uiv(this.addr,e)}function rS(i,e){i.uniform4uiv(this.addr,e)}function lS(i,e,t){const n=this.cache,s=e.length,o=Zl(t,s);On(n,o)||(i.uniform1iv(this.addr,o),zn(n,o));let a;this.type===i.SAMPLER_2D_SHADOW?a=Kl(uf):a=cf;for(let r=0;r!==s;++r)t.setTexture2D(e[r]||a,o[r])}function cS(i,e,t){const n=this.cache,s=e.length,o=Zl(t,s);On(n,o)||(i.uniform1iv(this.addr,o),zn(n,o));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ff,o[a])}function uS(i,e,t){const n=this.cache,s=e.length,o=Zl(t,s);On(n,o)||(i.uniform1iv(this.addr,o),zn(n,o));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Kl(hf):a=pf;for(let r=0;r!==s;++r)t.setTextureCube(e[r]||a,o[r])}function hS(i,e,t){const n=this.cache,s=e.length,o=Zl(t,s);On(n,o)||(i.uniform1iv(this.addr,o),zn(n,o));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||df,o[a])}function dS(i){switch(i){case 5126:return qx;case 35664:return Zx;case 35665:return Kx;case 35666:return $x;case 35674:return Jx;case 35675:return Qx;case 35676:return jx;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return oS;case 36295:return aS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}class fS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}}class pS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}}class mS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(e,t[r.id],n)}}}const Nc=/(\w+)(\])?(\[|\.)?/g;function Bd(i,e){i.seq.push(e),i.map[e.id]=e}function gS(i,e,t){const n=i.name,s=n.length;for(Nc.lastIndex=0;;){const o=Nc.exec(n),a=Nc.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===s){Bd(t,c===void 0?new fS(r,i,e):new pS(r,i,e));break}else{let f=t.map[r];f===void 0&&(f=new mS(r),Bd(t,f)),t=f}}}class vl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=e.getActiveUniform(t,a),l=e.getUniformLocation(t,r.name);gS(r,l,this)}const s=[],o=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):o.push(a);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,a=t.length;o!==a;++o){const r=t[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function kd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vS=37297;let xS=0;function SS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=s;a<o;a++){const r=a+1;n.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return n.join(`
`)}const Od=new Ht;function _S(i){sn._getMatrix(Od,sn.workingColorSpace,i);const e=`mat3( ${Od.elements.map(t=>t.toFixed(4))} )`;switch(sn.getTransfer(i)){case Tl:return[e,"LinearTransferOETF"];case cn:return[e,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+SS(i.getShaderSource(e),r)}else return o}function MS(i,e){const t=_S(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const yS={[g0]:"Linear",[v0]:"Reinhard",[x0]:"Cineon",[$u]:"ACESFilmic",[_0]:"AgX",[M0]:"Neutral",[S0]:"Custom"};function bS(i,e){const t=yS[e];return t===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nl=new G;function wS(){sn.getLuminanceCoefficients(nl);const i=nl.x.toFixed(4),e=nl.y.toFixed(4),t=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function ES(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function AS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),a=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),t[a]={type:o.type,location:i.getAttribLocation(e,a),locationSize:r}}return t}function za(i){return i!==""}function Vd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Gd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(i){return i.replace(RS,CS)}function CS(i,e){const t=qt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ku(t)}const PS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(i){return i.replace(PS,DS)}function DS(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Wd(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const NS={[dl]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function LS(i){return NS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IS={[tr]:"ENVMAP_MODE_REFRACTION"};function FS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":IS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const US={[m0]:"ENVMAP_BLENDING_MULTIPLY",[Pp]:"ENVMAP_BLENDING_MIX",[Dp]:"ENVMAP_BLENDING_ADD"};function BS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":US[i.combine]||"ENVMAP_BLENDING_NONE"}function kS(i,e,t,n){const s=i.getContext(),o=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=LS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=FS(t),f=BS(t),u=TS(t),d=ES(o),g=s.createProgram();let x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(za).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(za).join(`
`),p.length>0&&(p+=`
`)):(x=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),p=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?qt.tonemapping_pars_fragment:"",t.toneMapping!==ji?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),wS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),a=ku(a),a=Vd(a,t),a=Gd(a,t),r=ku(r),r=Vd(r,t),r=Gd(r,t),a=Hd(a),r=Hd(r),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=m+x+a,y=m+p+r,_=kd(s,s.VERTEX_SHADER,S),A=kd(s,s.FRAGMENT_SHADER,y);s.attachShader(g,_),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(C){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(_)||"",Y=s.getShaderInfoLog(A)||"",R=D.trim(),B=O.trim(),$=Y.trim();let K=!0,he=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,_,A);else{const ee=zd(s,_,"vertex"),ue=zd(s,A,"fragment");on("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+ee+`
`+ue)}else R!==""?Lt("WebGLProgram: Program Info Log:",R):(B===""||$==="")&&(he=!1);he&&(C.diagnostics={runnable:K,programLog:R,vertexShader:{log:B,prefix:x},fragmentShader:{log:$,prefix:p}})}s.deleteShader(_),s.deleteShader(A),v=new vl(s,g),T=AS(s,g)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,vS)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=A,this}let OS=0;class zS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new VS(e),t.set(e,n)),n}}class VS{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}}function GS(i){return i===go||i===yl||i===bl}function HS(i,e,t,n,s,o){const a=new ah,r=new zS,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,T,U,C,D,O){const Y=C.fog,R=D.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||B,$),he=u[v.type];let ee=n.precision;v.precision!==null&&(ee=n.getMaxPrecision(v.precision),ee!==v.precision&&Lt("WebGLProgram.getParameters:",v.precision,"not supported, using",ee,"instead."));const ue=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ae=ue!==void 0?ue.length:0;let le=0;R.morphAttributes.position!==void 0&&(le=1),R.morphAttributes.normal!==void 0&&(le=2),R.morphAttributes.color!==void 0&&(le=3);let Ee,N,j,W;if(he){const z=os[he];Ee=z.vertexShader,N=z.fragmentShader}else{Ee=v.vertexShader,N=v.fragmentShader;const z=r.getVertexShaderStage(v),Qe=r.getFragmentShaderStage(v);r.update(v,z,Qe),j=z.id,W=Qe.id}const I=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),te=D.isInstancedMesh===!0,ce=D.isBatchedMesh===!0,ie=!!v.map,re=!!v.matcap,Me=!!K,se=Me&&K.isPMREMTexture===!0,fe=!!v.aoMap,de=!!v.lightMap,we=!!v.bumpMap&&v.wireframe===!1,Re=!!v.normalMap,ze=!!v.displacementMap,De=!!v.emissiveMap,it=!!v.metalnessMap,be=!!v.roughnessMap,Ce=v.anisotropy>0,H=v.clearcoat>0,nt=v.diffuseRoughness>0,ke=v.dispersion>0,$e=v.retroreflectivity>0,pe=v.iridescence>0,Ke=v.sheen>0,qe=v.transmission>0,at=Ce&&!!v.anisotropyMap,L=H&&!!v.clearcoatMap,w=H&&!!v.clearcoatNormalMap,ne=H&&!!v.clearcoatRoughnessMap,Pe=nt&&!!v.diffuseRoughnessMap,_e=pe&&!!v.iridescenceMap,Ve=pe&&!!v.iridescenceThicknessMap,je=Ke&&!!v.sheenColorMap,Se=Ke&&!!v.sheenRoughnessMap,ge=!!v.specularMap,Xe=!!v.specularColorMap,J=!!v.specularIntensityMap,Ae=qe&&!!v.transmissionMap,xe=qe&&!!v.thicknessMap,He=!!v.gradientMap,et=!!v.alphaMap,tt=v.alphaTest>0,gt=!!v.alphaHash,Tt=!!v.extensions;let Je=ji;v.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Je=i.toneMapping);const wt=se?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,Bt={shaderID:he,shaderType:v.type,shaderName:v.name,vertexShader:Ee,fragmentShader:N,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:ee,batching:ce,batchingColor:ce&&D._colorsTexture!==null,instancing:te,instancingColor:te&&D.instanceColor!==null,instancingMorph:te&&D.morphTexture!==null,outputColorSpace:I===null?i.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:sn.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ie,matcap:re,envMap:Me,envMapMode:Me&&K.mapping,envMapPMREM:se,envMapMaxLod:se?wt.length-1:null,envMapSize:se?wt[0].width:null,aoMap:fe,lightMap:de,bumpMap:we,normalMap:Re,displacementMap:ze,emissiveMap:De,normalMapObjectSpace:Re&&v.normalMapType===Ip,normalMapTangentSpace:Re&&v.normalMapType===Pu,packedNormalMap:Re&&v.normalMapType===Pu&&GS(v.normalMap.format),metalnessMap:it,roughnessMap:be,anisotropy:Ce,anisotropyMap:at,clearcoat:H,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:ne,diffuseRoughness:nt,diffuseRoughnessMap:Pe,dispersion:ke,retroreflection:$e,iridescence:pe,iridescenceMap:_e,iridescenceThicknessMap:Ve,sheen:Ke,sheenColorMap:je,sheenRoughnessMap:Se,specularMap:ge,specularColorMap:Xe,specularIntensityMap:J,transmission:qe,transmissionMap:Ae,thicknessMap:xe,gradientMap:He,opaque:v.transparent===!1&&v.blending===Ga&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:tt,alphaHash:gt,combine:v.combine,mapUv:ie&&d(v.map.channel),aoMapUv:fe&&d(v.aoMap.channel),lightMapUv:de&&d(v.lightMap.channel),bumpMapUv:we&&d(v.bumpMap.channel),normalMapUv:Re&&d(v.normalMap.channel),displacementMapUv:ze&&d(v.displacementMap.channel),emissiveMapUv:De&&d(v.emissiveMap.channel),metalnessMapUv:it&&d(v.metalnessMap.channel),roughnessMapUv:be&&d(v.roughnessMap.channel),anisotropyMapUv:at&&d(v.anisotropyMap.channel),clearcoatMapUv:L&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:w&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Pe&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:je&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&d(v.sheenRoughnessMap.channel),specularMapUv:ge&&d(v.specularMap.channel),specularColorMapUv:Xe&&d(v.specularColorMap.channel),specularIntensityMapUv:J&&d(v.specularIntensityMap.channel),transmissionMapUv:Ae&&d(v.transmissionMap.channel),thicknessMapUv:xe&&d(v.thicknessMap.channel),alphaMapUv:et&&d(v.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Re||Ce),vertexNormals:!!R.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!R.attributes.uv&&(ie||et),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||R.attributes.normal===void 0&&Re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:X,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:le,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.filter(z=>z.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:ie&&v.map.isVideoTexture===!0&&sn.getTransfer(v.map.colorSpace)===cn,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&sn.getTransfer(v.emissiveMap.colorSpace)===cn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wn,flipSided:v.side===ui,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Tt&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&v.extensions.multiDraw===!0||ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function x(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)T.push(U),T.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(p(T,v),m(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapPMREM),v.push(T.envMapMaxLod),v.push(T.envMapSize),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.diffuseRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.numLightProbeGrids),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function m(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){const T=u[v.type];let U;if(T){const C=os[T];U=ug.clone(C.uniforms)}else U=v.uniforms;return U}function y(v,T){let U=h.get(T);return U!==void 0?++U.usedTimes:(U=new kS(i,T,v,s),c.push(U),h.set(T,U)),U}function _(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){r.remove(v)}function E(){r.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:S,acquireProgram:y,releaseProgram:_,releaseShaderCache:A,programs:c,dispose:E}}function WS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function n(a){i.delete(a)}function s(a,r,l){i.get(a)[r]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function XS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yd(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function r(u,d,g,x,p,m){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},i[e]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=a(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=p,S.group=m),e++,S}function l(u,d,g,x,p,m,S){S.reversedDepth===!0&&(p=-p);const y=r(u,d,g,x,p,m);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function c(u,d,g,x,p,m){const S=r(u,d,g,x,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,d){t.length>1&&t.sort(u||XS),n.length>1&&n.sort(d||Xd),s.length>1&&s.sort(d||Xd)}function f(){for(let u=e,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:f,sort:h}}function YS(){let i=new WeakMap;function e(n,s){const o=i.get(n);let a;return o===void 0?(a=new Yd,i.set(n,[a])):s>=o.length?(a=new Yd,o.push(a)):a=o[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function qS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ut};break;case"SpotLight":t={position:new G,direction:new G,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function ZS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let KS=0;function $S(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function JS(i){const e=new qS,t=ZS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,o=new un,a=new un;function r(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,S=0,y=0,_=0,A=0,E=0,v=0,T=0,U=0,C=0;c.sort($S);for(let O=0,Y=c.length;O<Y;O++){const R=c[O],B=R.color,$=R.intensity,K=R.distance;let he=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===go?he=R.shadow.map.texture:he=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=B.r*$,f+=B.g*$,u+=B.b*$;else if(R.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(R.sh.coefficients[ee],$);C++}else if(R.isSunLight){const ee=e.get(R);if(ee.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ue=R.shadow,ae=t.get(R);ae.shadowIntensity=ue.intensity,ae.shadowBias=ue.bias,ae.shadowNormalBias=ue.normalBias,ae.shadowRadius=ue.radius,ae.shadowMapSize.copy(ue.mapSize).multiply(ue.getFrameExtents()),n.sunShadow[g]=ae,n.sunShadowMap[g]=he;const le=ue.getViewportCount();for(let Ee=0;Ee<le;Ee++)n.sunShadowMatrix[x+Ee]=ue.getMatrix(Ee),n.sunShadowCascade[x+Ee]=ue._cascadeData[Ee];x+=le,g++}n.sun[d]=ee,d++}else if(R.isDirectionalLight){const ee=e.get(R);if(ee.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ue=R.shadow,ae=t.get(R);ae.shadowIntensity=ue.intensity,ae.shadowBias=ue.bias,ae.shadowNormalBias=ue.normalBias,ae.shadowRadius=ue.radius,ae.shadowMapSize=ue.mapSize,n.directionalShadow[p]=ae,n.directionalShadowMap[p]=he,n.directionalShadowMatrix[p]=R.shadow.matrix,A++}n.directional[p]=ee,p++}else if(R.isSpotLight){const ee=e.get(R);ee.position.setFromMatrixPosition(R.matrixWorld),ee.color.copy(B).multiplyScalar($),ee.distance=K,ee.coneCos=Math.cos(R.angle),ee.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),ee.decay=R.decay,n.spot[S]=ee;const ue=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,ue.updateMatrices(R),R.castShadow&&U++),n.spotLightMatrix[S]=ue.matrix,R.castShadow){const ae=t.get(R);ae.shadowIntensity=ue.intensity,ae.shadowBias=ue.bias,ae.shadowNormalBias=ue.normalBias,ae.shadowRadius=ue.radius,ae.shadowMapSize=ue.mapSize,n.spotShadow[S]=ae,n.spotShadowMap[S]=he,v++}S++}else if(R.isRectAreaLight){const ee=e.get(R);ee.color.copy(B).multiplyScalar($),ee.halfWidth.set(R.width*.5,0,0),ee.halfHeight.set(0,R.height*.5,0),n.rectArea[y]=ee,y++}else if(R.isPointLight){const ee=e.get(R);if(ee.color.copy(R.color).multiplyScalar(R.intensity),ee.distance=R.distance,ee.decay=R.decay,R.castShadow){const ue=R.shadow,ae=t.get(R);ae.shadowIntensity=ue.intensity,ae.shadowBias=ue.bias,ae.shadowNormalBias=ue.normalBias,ae.shadowRadius=ue.radius,ae.shadowMapSize=ue.mapSize,ae.shadowCameraNear=ue.camera.near,ae.shadowCameraFar=ue.camera.far,n.pointShadow[m]=ae,n.pointShadowMap[m]=he,n.pointShadowMatrix[m]=R.shadow.matrix,E++}n.point[m]=ee,m++}else if(R.isHemisphereLight){const ee=e.get(R);ee.skyColor.copy(R.color).multiplyScalar($),ee.groundColor.copy(R.groundColor).multiplyScalar($),n.hemi[_]=ee,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.sunLength!==d||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==y||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==v||D.numSpotMaps!==T||D.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=y,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+T-U,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=C,D.sunLength=d,D.directionalLength=p,D.pointLength=m,D.spotLength=S,D.rectAreaLength=y,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=v,D.numSpotMaps=T,D.numLightProbes=C,n.version=KS++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0,p=0;const m=h.matrixWorldInverse;for(let S=0,y=c.length;S<y;S++){const _=c[S];if(_.isSunLight){const A=n.sun[f];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(m),f++}else if(_.isDirectionalLight){const A=n.directional[u];A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(_.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const A=n.rectArea[x];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(m),a.identity(),o.copy(_.matrixWorld),o.premultiply(m),a.extractRotation(o),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const A=n.hemi[p];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:r,setupView:l,state:n}}function qd(i){const e=new JS(i),t=[],n=[],s=[];function o(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function r(f){n.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:r}}function QS(i){let e=new WeakMap;function t(s,o=0){const a=e.get(s);let r;return a===void 0?(r=new qd(i),e.set(s,[r])):o>=a.length?(r=new qd(i),a.push(r)):r=a[o],r}function n(){e=new WeakMap}return{get:t,dispose:n}}const jS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e_=`uniform sampler2D shadow_pass;
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
}`,t_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],n_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Zd=new un,La=new G,Lc=new G;function i_(i,e,t){let n=new or;const s=new ot,o=new ot,a=new wn,r=new mg,l=new gg,c={},h=t.maxTextureSize,f={[di]:ui,[ui]:di,[Wn]:Wn},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:jS,fragmentShader:e_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let m=this.type;this.render=function(E,v,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===fp&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dl);const U=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending($o),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Y=m!==this.type;Y&&v.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(B=>B.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,B=E.length;R<B;R++){const $=E[R],K=$.shadow;if(K===void 0){Lt("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const he=K.getFrameExtents();s.multiply(he),o.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/he.x),s.x=o.x*he.x,K.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/he.y),s.y=o.y*he.y,K.mapSize.y=o.y));const ee=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=ee,K.map===null||Y===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ba){if($.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Ti(s.x,s.y,{format:go,type:Ui,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new aa(s.x,s.y,Yi),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=Ys,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn}else $.isPointLight?(K.map=new ph(s.x),K.map.depthTexture=new W0(s.x,rs)):(K.map=new Ti(s.x,s.y),K.map.depthTexture=new aa(s.x,s.y,rs)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=Ys,this.type===dl?(K.map.depthTexture.compareFunction=ee?P0:C0,K.map.depthTexture.minFilter=Mn,K.map.depthTexture.magFilter=Mn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const ue=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();$.isPointLight!==!0&&K.updateMatrices($,T);const ae=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:T.layers;for(let le=0;le<ue;le++){const Ee=K.getCamera(le);if($.isPointLight){const N=K.camera,j=K.matrix,W=$.distance||N.far;W!==N.far&&(N.far=W,N.updateProjectionMatrix()),La.setFromMatrixPosition($.matrixWorld),N.position.copy(La),Lc.copy(N.position),Lc.add(t_[le]),N.up.copy(n_[le]),N.lookAt(Lc),N.updateMatrixWorld(),j.makeTranslation(-La.x,-La.y,-La.z),Zd.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Zd,N.coordinateSystem,N.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,le),i.clear();else{le===0&&(i.setRenderTarget(K.map),i.clear());const N=K.getViewport(le);a.set(o.x*N.x,o.y*N.y,o.x*N.z,o.y*N.w),O.viewport(a)}n=K.getFrustum(le),_(v,T,Ee,$,ae,this.type)}K.isPointLightShadow!==!0&&this.type===Ba&&S(K,T),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,C,D)};function S(E,v){const T=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ti(s.x,s.y,{format:go,type:Ui}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(v,null,T,u,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(v,null,T,d,x,null)}function y(E,v,T,U){let C=null;const D=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=T.isPointLight===!0?l:r,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const O=C.uuid,Y=v.uuid;let R=c[O];R===void 0&&(R={},c[O]=R);let B=R[Y];B===void 0&&(B=C.clone(),R[Y]=B,v.addEventListener("dispose",A)),C=B}if(C.visible=v.visible,C.wireframe=v.wireframe,U===Ba?C.side=v.shadowSide!==null?v.shadowSide:v.side:C.side=v.shadowSide!==null?v.shadowSide:f[v.side],C.alphaMap=v.alphaMap,C.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,C.map=v.map,C.clipShadows=v.clipShadows,C.clippingPlanes=v.clippingPlanes,C.clipIntersection=v.clipIntersection,C.displacementMap=v.displacementMap,C.displacementScale=v.displacementScale,C.displacementBias=v.displacementBias,C.wireframeLinewidth=v.wireframeLinewidth,C.linewidth=v.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const O=i.properties.get(C);O.light=T}return C}function _(E,v,T,U,C,D){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Ba)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const R=e.update(E),B=E.material;if(Array.isArray(B)){const $=R.groups;for(let K=0,he=$.length;K<he;K++){const ee=$[K],ue=B[ee.materialIndex];if(ue&&ue.visible){const ae=y(E,ue,U,D);E.onBeforeShadow(i,E,v,T,R,ae,ee),i.renderBufferDirect(T,null,R,ae,E,ee),E.onAfterShadow(i,E,v,T,R,ae,ee)}}}else if(B.visible){const $=y(E,B,U,D);E.onBeforeShadow(i,E,v,T,R,$,null),i.renderBufferDirect(T,null,R,$,E,null),E.onAfterShadow(i,E,v,T,R,$,null)}}const Y=E.children;for(let R=0,B=Y.length;R<B;R++)_(Y[R],v,T,U,C,D)}function A(E){E.target.removeEventListener("dispose",A);for(const T in c){const U=c[T],C=E.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}function s_(i,e){function t(){let J=!1;const Ae=new wn;let xe=null;const He=new wn(0,0,0,0);return{setMask:function(et){xe!==et&&!J&&(i.colorMask(et,et,et,et),xe=et)},setLocked:function(et){J=et},setClear:function(et,tt,gt,Tt,Je){Je===!0&&(et*=Tt,tt*=Tt,gt*=Tt),Ae.set(et,tt,gt,Tt),He.equals(Ae)===!1&&(i.clearColor(et,tt,gt,Tt),He.copy(Ae))},reset:function(){J=!1,xe=null,He.set(-1,0,0,0)}}}function n(){let J=!1,Ae=!1,xe=null,He=null,et=null;return{setReversed:function(tt){if(Ae!==tt){const gt=e.get("EXT_clip_control");tt?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),Ae=tt;const Tt=et;et=null,this.setClear(Tt)}},getReversed:function(){return Ae},setTest:function(tt){tt?X(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(tt){xe!==tt&&!J&&(i.depthMask(tt),xe=tt)},setFunc:function(tt){if(Ae&&(tt=Xp[tt]),He!==tt){switch(tt){case Yc:i.depthFunc(i.NEVER);break;case qc:i.depthFunc(i.ALWAYS);break;case Zc:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case Kc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case Jc:i.depthFunc(i.GREATER);break;case Qc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}He=tt}},setLocked:function(tt){J=tt},setClear:function(tt){et!==tt&&(et=tt,Ae&&(tt=1-tt),i.clearDepth(tt))},reset:function(){J=!1,xe=null,He=null,et=null,Ae=!1}}}function s(){let J=!1,Ae=null,xe=null,He=null,et=null,tt=null,gt=null,Tt=null,Je=null;return{setTest:function(wt){J||(wt?X(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(wt){Ae!==wt&&!J&&(i.stencilMask(wt),Ae=wt)},setFunc:function(wt,Bt,z){(xe!==wt||He!==Bt||et!==z)&&(i.stencilFunc(wt,Bt,z),xe=wt,He=Bt,et=z)},setOp:function(wt,Bt,z){(tt!==wt||gt!==Bt||Tt!==z)&&(i.stencilOp(wt,Bt,z),tt=wt,gt=Bt,Tt=z)},setLocked:function(wt){J=wt},setClear:function(wt){Je!==wt&&(i.clearStencil(wt),Je=wt)},reset:function(){J=!1,Ae=null,xe=null,He=null,et=null,tt=null,gt=null,Tt=null,Je=null}}}const o=new t,a=new n,r=new s;let l={};const c=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],x=null,p=!1,m=null,S=null,y=null,_=null,A=null,E=null,v=null,T=new Ut(0,0,0),U=0,C=!1,D=null,O=null,Y=null,R=null,B=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,he=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=he>=1):ee.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=he>=2);let ue=null,ae={};const le=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),N=new wn().fromArray(le),j=new wn().fromArray(Ee);function W(J,Ae,xe,He){const et=new Uint8Array(4),tt=i.createTexture();i.bindTexture(J,tt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<xe;gt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,He,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(Ae+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return tt}const I={};I[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),X(i.DEPTH_TEST),a.setFunc(er),we(!1),Re(kh),X(i.CULL_FACE),fe($o);function X(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function te(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function ce(J,Ae){return u[J]!==Ae?(i.bindFramebuffer(J,Ae),u[J]=Ae,J===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),J===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ie(J,Ae){let xe=g,He=!1;if(J){xe=d.get(Ae),xe===void 0&&(xe=[],d.set(Ae,xe));const et=J.textures;if(xe.length!==et.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,gt=et.length;tt<gt;tt++)xe[tt]=i.COLOR_ATTACHMENT0+tt;xe.length=et.length,He=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,He=!0);He&&i.drawBuffers(xe)}function re(J){return x!==J?(i.useProgram(J),x=J,!0):!1}const Me={[ks]:i.FUNC_ADD,[pp]:i.FUNC_SUBTRACT,[mp]:i.FUNC_REVERSE_SUBTRACT};Me[gp]=i.MIN,Me[vp]=i.MAX;const se={[xp]:i.ZERO,[ka]:i.ONE,[Sp]:i.SRC_COLOR,[f0]:i.SRC_ALPHA,[Tp]:i.SRC_ALPHA_SATURATE,[bp]:i.DST_COLOR,[Mp]:i.DST_ALPHA,[_p]:i.ONE_MINUS_SRC_COLOR,[p0]:i.ONE_MINUS_SRC_ALPHA,[wp]:i.ONE_MINUS_DST_COLOR,[yp]:i.ONE_MINUS_DST_ALPHA,[Ep]:i.CONSTANT_COLOR,[Ap]:i.ONE_MINUS_CONSTANT_COLOR,[Rp]:i.CONSTANT_ALPHA,[Cp]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(J,Ae,xe,He,et,tt,gt,Tt,Je,wt){if(J===$o){p===!0&&(te(i.BLEND),p=!1);return}if(p===!1&&(X(i.BLEND),p=!0),J!==d0){if(J!==m||wt!==C){if((S!==ks||A!==ks)&&(i.blendEquation(i.FUNC_ADD),S=ks,A=ks),wt)switch(J){case Ga:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:on("WebGLState: Invalid blending: ",J);break}else switch(J){case Ga:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zh:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",J);break}y=null,_=null,E=null,v=null,T.set(0,0,0),U=0,m=J,C=wt}return}et=et||Ae,tt=tt||xe,gt=gt||He,(Ae!==S||et!==A)&&(i.blendEquationSeparate(Me[Ae],Me[et]),S=Ae,A=et),(xe!==y||He!==_||tt!==E||gt!==v)&&(i.blendFuncSeparate(se[xe],se[He],se[tt],se[gt]),y=xe,_=He,E=tt,v=gt),(Tt.equals(T)===!1||Je!==U)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Je),T.copy(Tt),U=Je),m=J,C=!1}function de(J,Ae){J.side===Wn?te(i.CULL_FACE):X(i.CULL_FACE);let xe=J.side===ui;Ae&&(xe=!xe),we(xe),J.blending===Ga&&J.transparent===!1?fe($o):fe(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),a.setFunc(J.depthFunc),a.setTest(J.depthTest),a.setMask(J.depthWrite),o.setMask(J.colorWrite);const He=J.stencilWrite;r.setTest(He),He&&(r.setMask(J.stencilWriteMask),r.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),r.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),De(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(J){D!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),D=J)}function Re(J){J!==hp?(X(i.CULL_FACE),J!==O&&(J===kh?i.cullFace(i.BACK):J===dp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),O=J}function ze(J){J!==Y&&(K&&i.lineWidth(J),Y=J)}function De(J,Ae,xe){J?(X(i.POLYGON_OFFSET_FILL),(R!==Ae||B!==xe)&&(R=Ae,B=xe,a.getReversed()&&(Ae=-Ae,xe=-xe),i.polygonOffset(Ae,xe))):te(i.POLYGON_OFFSET_FILL)}function it(J){J?X(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function be(J){J===void 0&&(J=i.TEXTURE0+$-1),ue!==J&&(i.activeTexture(J),ue=J)}function Ce(J,Ae,xe){xe===void 0&&(ue===null?xe=i.TEXTURE0+$-1:xe=ue);let He=ae[xe];He===void 0&&(He={type:void 0,texture:void 0},ae[xe]=He),(He.type!==J||He.texture!==Ae)&&(ue!==xe&&(i.activeTexture(xe),ue=xe),i.bindTexture(J,Ae||I[J]),He.type=J,He.texture=Ae)}function H(){const J=ae[ue];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(J){on("WebGLState:",J)}}function ke(){try{i.compressedTexImage3D(...arguments)}catch(J){on("WebGLState:",J)}}function $e(){try{i.texSubImage2D(...arguments)}catch(J){on("WebGLState:",J)}}function pe(){try{i.texSubImage3D(...arguments)}catch(J){on("WebGLState:",J)}}function Ke(){try{i.compressedTexSubImage2D(...arguments)}catch(J){on("WebGLState:",J)}}function qe(){try{i.compressedTexSubImage3D(...arguments)}catch(J){on("WebGLState:",J)}}function at(){try{i.texStorage2D(...arguments)}catch(J){on("WebGLState:",J)}}function L(){try{i.texStorage3D(...arguments)}catch(J){on("WebGLState:",J)}}function w(){try{i.texImage2D(...arguments)}catch(J){on("WebGLState:",J)}}function ne(){try{i.texImage3D(...arguments)}catch(J){on("WebGLState:",J)}}function Pe(J){return f[J]!==void 0?f[J]:i.getParameter(J)}function _e(J,Ae){f[J]!==Ae&&(i.pixelStorei(J,Ae),f[J]=Ae)}function Ve(J){N.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),N.copy(J))}function je(J){j.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),j.copy(J))}function Se(J,Ae){let xe=c.get(Ae);xe===void 0&&(xe=new WeakMap,c.set(Ae,xe));let He=xe.get(J);He===void 0&&(He=i.getUniformBlockIndex(Ae,J.name),i.uniformBlockBinding(Ae,He,He),xe.set(J,He))}function ge(J,Ae,xe){const et=c.get(Ae).get(J);l[et]!==xe&&(i.bindBufferBase(i.UNIFORM_BUFFER,et,xe),l[et]=xe)}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ue=null,ae={},u={},l={},d=new WeakMap,g=[],x=null,p=!1,m=null,S=null,y=null,_=null,A=null,E=null,v=null,T=new Ut(0,0,0),U=0,C=!1,D=null,O=null,Y=null,R=null,B=null,N.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:X,disable:te,bindFramebuffer:ce,drawBuffers:ie,useProgram:re,setBlending:fe,setMaterial:de,setFlipSided:we,setCullFace:Re,setLineWidth:ze,setPolygonOffset:De,setScissorTest:it,activeTexture:be,bindTexture:Ce,unbindTexture:H,compressedTexImage2D:nt,compressedTexImage3D:ke,texImage2D:w,texImage3D:ne,pixelStorei:_e,getParameter:Pe,updateUBOMapping:Se,uniformBlockBinding:ge,texStorage2D:at,texStorage3D:L,texSubImage2D:$e,texSubImage3D:pe,compressedTexSubImage2D:Ke,compressedTexSubImage3D:qe,scissor:Ve,viewport:je,reset:Xe}}function o_(i,e,t,n,s,o,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f=new Set;let u;const d=new WeakMap,g=new Set,x=new FinalizationRegistry(L=>g.delete(L));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,w){return p?new OffscreenCanvas(L,w):El("canvas")}function S(L,w,ne){let Pe=1;const _e=at(L);if((_e.width>ne||_e.height>ne)&&(Pe=ne/Math.max(_e.width,_e.height)),Pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ve=Math.floor(Pe*_e.width),je=Math.floor(Pe*_e.height);u===void 0&&(u=m(Ve,je));const Se=w?m(Ve,je):u;return Se.width=Ve,Se.height=je,Se.getContext("2d").drawImage(L,0,0,Ve,je),Lt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Ve+"x"+je+")."),Se}else return"data"in L&&Lt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function A(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(L,w,ne,Pe,_e,Ve=!1){if(L!==null){if(i[L]!==void 0)return i[L];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let je;Pe&&(je=e.get("EXT_texture_norm16"),je||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Se=w;if(w===i.RED&&(ne===i.FLOAT&&(Se=i.R32F),ne===i.HALF_FLOAT&&(Se=i.R16F),ne===i.UNSIGNED_BYTE&&(Se=i.R8),ne===i.UNSIGNED_SHORT&&je&&(Se=je.R16_EXT),ne===i.SHORT&&je&&(Se=je.R16_SNORM_EXT)),w===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(Se=i.R8UI),ne===i.UNSIGNED_SHORT&&(Se=i.R16UI),ne===i.UNSIGNED_INT&&(Se=i.R32UI),ne===i.BYTE&&(Se=i.R8I),ne===i.SHORT&&(Se=i.R16I),ne===i.INT&&(Se=i.R32I)),w===i.RG&&(ne===i.FLOAT&&(Se=i.RG32F),ne===i.HALF_FLOAT&&(Se=i.RG16F),ne===i.UNSIGNED_BYTE&&(Se=i.RG8),ne===i.UNSIGNED_SHORT&&je&&(Se=je.RG16_EXT),ne===i.SHORT&&je&&(Se=je.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(ne===i.UNSIGNED_BYTE&&(Se=i.RG8UI),ne===i.UNSIGNED_SHORT&&(Se=i.RG16UI),ne===i.UNSIGNED_INT&&(Se=i.RG32UI),ne===i.BYTE&&(Se=i.RG8I),ne===i.SHORT&&(Se=i.RG16I),ne===i.INT&&(Se=i.RG32I)),w===i.RGB_INTEGER&&(ne===i.UNSIGNED_BYTE&&(Se=i.RGB8UI),ne===i.UNSIGNED_SHORT&&(Se=i.RGB16UI),ne===i.UNSIGNED_INT&&(Se=i.RGB32UI),ne===i.BYTE&&(Se=i.RGB8I),ne===i.SHORT&&(Se=i.RGB16I),ne===i.INT&&(Se=i.RGB32I)),w===i.RGBA_INTEGER&&(ne===i.UNSIGNED_BYTE&&(Se=i.RGBA8UI),ne===i.UNSIGNED_SHORT&&(Se=i.RGBA16UI),ne===i.UNSIGNED_INT&&(Se=i.RGBA32UI),ne===i.BYTE&&(Se=i.RGBA8I),ne===i.SHORT&&(Se=i.RGBA16I),ne===i.INT&&(Se=i.RGBA32I)),w===i.RGB&&(ne===i.UNSIGNED_SHORT&&je&&(Se=je.RGB16_EXT),ne===i.SHORT&&je&&(Se=je.RGB16_SNORM_EXT),ne===i.UNSIGNED_INT_5_9_9_9_REV&&(Se=i.RGB9_E5),ne===i.UNSIGNED_INT_10F_11F_11F_REV&&(Se=i.R11F_G11F_B10F)),w===i.RGBA){const ge=Ve?Tl:sn.getTransfer(_e);ne===i.FLOAT&&(Se=i.RGBA32F),ne===i.HALF_FLOAT&&(Se=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(Se=ge===cn?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT&&je&&(Se=je.RGBA16_EXT),ne===i.SHORT&&je&&(Se=je.RGBA16_SNORM_EXT),ne===i.UNSIGNED_SHORT_4_4_4_4&&(Se=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(Se=i.RGB5_A1)}return(Se===i.R16F||Se===i.R32F||Se===i.RG16F||Se===i.RG32F||Se===i.RGBA16F||Se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function v(L,w){let ne;return L?w===null||w===rs||w===oa?ne=i.DEPTH24_STENCIL8:w===Yi?ne=i.DEPTH32F_STENCIL8:w===nr&&(ne=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rs||w===oa?ne=i.DEPTH_COMPONENT24:w===Yi?ne=i.DEPTH_COMPONENT32F:w===nr&&(ne=i.DEPTH_COMPONENT16),ne}function T(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Bn&&L.minFilter!==Mn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function U(L){const w=new WeakRef(L);n.get(L).__ref=w,g.add(w),x.register(L,w,w)}function C(L){const w=n.get(L).__ref;w!==void 0&&(g.delete(w),x.unregister(w))}function D(L){Y(L.target)}function O(L){R(L.target)}function Y(L){L.removeEventListener("dispose",D),C(L),$(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&f.delete(L)}function R(L){L.removeEventListener("dispose",O),C(L),he(L)}function B(){for(const L of g){const w=L.deref();w!==void 0&&(w.isRenderTarget===!0?R(w):Y(w))}g.clear(),f.clear()}function $(L){const w=n.get(L);if(w.__webglInit===void 0)return;const ne=L.source,Pe=d.get(ne);if(Pe){const _e=Pe[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&K(L),Object.keys(Pe).length===0&&d.delete(ne)}n.remove(L)}function K(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const ne=L.source,Pe=d.get(ne);delete Pe[w.__cacheKey],a.memory.textures--}function he(L){const w=n.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();const ne=L.depthTexture;if(ne&&ne.renderTarget===L&&Y(ne),L.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(w.__webglFramebuffer[_e]))for(let Ve=0;Ve<w.__webglFramebuffer[_e].length;Ve++)i.deleteFramebuffer(w.__webglFramebuffer[_e][Ve]);else i.deleteFramebuffer(w.__webglFramebuffer[_e]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[_e])}else{if(Array.isArray(w.__webglFramebuffer))for(let _e=0;_e<w.__webglFramebuffer.length;_e++)i.deleteFramebuffer(w.__webglFramebuffer[_e]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let _e=0;_e<w.__webglColorRenderbuffer.length;_e++)w.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[_e]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Pe=L.textures;for(let _e=0,Ve=Pe.length;_e<Ve;_e++){const je=n.get(Pe[_e]);je.__webglTexture&&(i.deleteTexture(je.__webglTexture),a.memory.textures--),n.remove(Pe[_e])}n.remove(L)}let ee=0;function ue(){ee=0}function ae(){return ee}function le(L){ee=L}function Ee(){const L=ee;return L>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),ee+=1,L}function N(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function j(L,w){const ne=n.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ne.__version!==L.version){const Pe=L.image;if(Pe===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(Pe.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{de(ne,L,w);return}}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+w)}function W(L,w){const ne=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){de(ne,L,w);return}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+w)}function I(L,w){const ne=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){de(ne,L,w);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+w)}function X(L,w){const ne=n.get(L);if(L.version>0&&ne.__version!==L.version){we(ne,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+w)}const te={[yn]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[jc]:i.MIRRORED_REPEAT},ce={[Bn]:i.NEAREST,[Np]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},ie={[Up]:i.NEVER,[D0]:i.ALWAYS,[Bp]:i.LESS,[C0]:i.LEQUAL,[kp]:i.EQUAL,[P0]:i.GEQUAL,[Op]:i.GREATER,[zp]:i.NOTEQUAL};function re(L,w){if(w.type===Yi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Mn||w.magFilter===ic||w.magFilter===Ar||w.magFilter===Ss||w.minFilter===Mn||w.minFilter===ic||w.minFilter===Ar||w.minFilter===Ss)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,te[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,te[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,te[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ce[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Bn||w.minFilter!==Ar&&w.minFilter!==Ss||w.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Me(L,w){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",D),U(w));const Pe=w.source;let _e=d.get(Pe);_e===void 0&&(_e={},d.set(Pe,_e));const Ve=N(w);if(Ve!==L.__cacheKey){_e[Ve]===void 0&&(_e[Ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ne=!0),_e[Ve].usedTimes++;const je=_e[L.__cacheKey];je!==void 0&&(_e[L.__cacheKey].usedTimes--,je.usedTimes===0&&K(w)),L.__cacheKey=Ve,L.__webglTexture=_e[Ve].texture}return ne}function se(L,w,ne){return Math.floor(Math.floor(L/ne)/w)}function fe(L,w,ne,Pe){const Ve=L.updateRanges;if(Ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,ne,Pe,w.data);else{Ve.sort((J,Ae)=>J.start-Ae.start);let je=0;for(let J=1;J<Ve.length;J++){const Ae=Ve[je],xe=Ve[J],He=Ae.start+Ae.count,et=se(xe.start,w.width,4),tt=se(Ae.start,w.width,4);xe.start<=He+1&&et===tt&&se(xe.start+xe.count-1,w.width,4)===et?Ae.count=Math.max(Ae.count,xe.start+xe.count-Ae.start):(++je,Ve[je]=xe)}Ve.length=je+1;const Se=t.getParameter(i.UNPACK_ROW_LENGTH),ge=t.getParameter(i.UNPACK_SKIP_PIXELS),Xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let J=0,Ae=Ve.length;J<Ae;J++){const xe=Ve[J],He=Math.floor(xe.start/4),et=Math.ceil(xe.count/4),tt=He%w.width,gt=Math.floor(He/w.width),Tt=et,Je=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,gt),t.texSubImage2D(i.TEXTURE_2D,0,tt,gt,Tt,Je,ne,Pe,w.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,Xe)}}function de(L,w,ne){let Pe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Pe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Pe=i.TEXTURE_3D);const _e=Me(L,w),Ve=w.source;t.bindTexture(Pe,L.__webglTexture,i.TEXTURE0+ne);const je=n.get(Ve);if(Ve.version!==je.__version||_e===!0){if(t.activeTexture(i.TEXTURE0+ne),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Je=sn.getPrimaries(sn.workingColorSpace),wt=w.colorSpace===Os?null:sn.getPrimaries(w.colorSpace),Bt=w.colorSpace===Os||Je===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=S(w.image,!1,s.maxTextureSize);ge=qe(w,ge);const Xe=o.convert(w.format,w.colorSpace),J=o.convert(w.type);let Ae=E(w.internalFormat,Xe,J,w.normalized,w.colorSpace,w.isVideoTexture);re(Pe,w);let xe;const He=w.mipmaps,et=w.isVideoTexture!==!0,tt=je.__version===void 0||_e===!0,gt=Ve.dataReady,Tt=T(w,ge);if(w.isDepthTexture)Ae=v(w.format===Gs,w.type),tt&&(et?t.texStorage2D(i.TEXTURE_2D,1,Ae,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ge.width,ge.height,0,Xe,J,null));else if(w.isDataTexture)if(He.length>0){et&&tt&&t.texStorage2D(i.TEXTURE_2D,Tt,Ae,He[0].width,He[0].height);for(let Je=0,wt=He.length;Je<wt;Je++)xe=He[Je],et?gt&&t.texSubImage2D(i.TEXTURE_2D,Je,0,0,xe.width,xe.height,Xe,J,xe.data):t.texImage2D(i.TEXTURE_2D,Je,Ae,xe.width,xe.height,0,Xe,J,xe.data);w.generateMipmaps=!1}else et?(tt&&t.texStorage2D(i.TEXTURE_2D,Tt,Ae,ge.width,ge.height),gt&&fe(w,ge,Xe,J)):t.texImage2D(i.TEXTURE_2D,0,Ae,ge.width,ge.height,0,Xe,J,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ae,He[0].width,He[0].height,ge.depth);for(let Je=0,wt=He.length;Je<wt;Je++)if(xe=He[Je],w.format!==xi)if(Xe!==null)if(et){if(gt)if(w.layerUpdates.size>0){const Bt=Ad(xe.width,xe.height,w.format,w.type);for(const z of w.layerUpdates){const Qe=xe.data.subarray(z*Bt/xe.data.BYTES_PER_ELEMENT,(z+1)*Bt/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Je,0,0,z,xe.width,xe.height,1,Xe,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Je,0,0,0,xe.width,xe.height,ge.depth,Xe,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Je,Ae,xe.width,xe.height,ge.depth,0,xe.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?gt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Je,0,0,0,xe.width,xe.height,ge.depth,Xe,J,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Je,Ae,xe.width,xe.height,ge.depth,0,Xe,J,xe.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{et&&tt&&t.texStorage2D(i.TEXTURE_2D,Tt,Ae,He[0].width,He[0].height);for(let Je=0,wt=He.length;Je<wt;Je++)xe=He[Je],w.format!==xi?Xe!==null?et?gt&&t.compressedTexSubImage2D(i.TEXTURE_2D,Je,0,0,xe.width,xe.height,Xe,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,Je,Ae,xe.width,xe.height,0,xe.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?gt&&t.texSubImage2D(i.TEXTURE_2D,Je,0,0,xe.width,xe.height,Xe,J,xe.data):t.texImage2D(i.TEXTURE_2D,Je,Ae,xe.width,xe.height,0,Xe,J,xe.data)}else if(w.isDataArrayTexture)if(et){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ae,ge.width,ge.height,ge.depth),gt)if(w.layerUpdates.size>0){const Je=Ad(ge.width,ge.height,w.format,w.type);for(const wt of w.layerUpdates){const Bt=ge.data.subarray(wt*Je/ge.data.BYTES_PER_ELEMENT,(wt+1)*Je/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,ge.width,ge.height,1,Xe,J,Bt)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Xe,J,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ge.width,ge.height,ge.depth,0,Xe,J,ge.data);else if(w.isData3DTexture)et?(tt&&t.texStorage3D(i.TEXTURE_3D,Tt,Ae,ge.width,ge.height,ge.depth),gt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Xe,J,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ge.width,ge.height,ge.depth,0,Xe,J,ge.data);else if(w.isFramebufferTexture){if(tt)if(et)t.texStorage2D(i.TEXTURE_2D,Tt,Ae,ge.width,ge.height);else{let Je=ge.width,wt=ge.height;for(let Bt=0;Bt<Tt;Bt++)t.texImage2D(i.TEXTURE_2D,Bt,Ae,Je,wt,0,Xe,J,null),Je>>=1,wt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const Je=i.canvas;if(Je.hasAttribute("layoutsubtree")||Je.setAttribute("layoutsubtree","true"),ge.parentNode!==Je){Je.appendChild(ge),f.add(w),Je.onpaint=wt=>{const Bt=wt.changedElements;for(const z of f)Bt.includes(z.image)&&(z.needsUpdate=!0)},Je.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ge);else{const Bt=i.RGBA,z=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Bt,z,Qe,ge)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(He.length>0){if(et&&tt){const Je=at(He[0]);t.texStorage2D(i.TEXTURE_2D,Tt,Ae,Je.width,Je.height)}for(let Je=0,wt=He.length;Je<wt;Je++)xe=He[Je],et?gt&&t.texSubImage2D(i.TEXTURE_2D,Je,0,0,Xe,J,xe):t.texImage2D(i.TEXTURE_2D,Je,Ae,Xe,J,xe);w.generateMipmaps=!1}else if(et){if(tt){const Je=at(ge);t.texStorage2D(i.TEXTURE_2D,Tt,Ae,Je.width,Je.height)}gt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,J,ge)}else t.texImage2D(i.TEXTURE_2D,0,Ae,Xe,J,ge);y(w)&&w.mipmapsAutoUpdate===!0&&_(Pe),je.__version=Ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function we(L,w,ne){if(w.image.length!==6)return;const Pe=Me(L,w),_e=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+ne);const Ve=n.get(_e);if(_e.version!==Ve.__version||Pe===!0){t.activeTexture(i.TEXTURE0+ne);const je=sn.getPrimaries(sn.workingColorSpace),Se=w.colorSpace===Os?null:sn.getPrimaries(w.colorSpace),ge=w.colorSpace===Os||je===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,J=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let z=0;z<6;z++)!Xe&&!J?Ae[z]=S(w.image[z],!0,s.maxCubemapSize):Ae[z]=J?w.image[z].image:w.image[z],Ae[z]=qe(w,Ae[z]);const xe=Ae[0],He=o.convert(w.format,w.colorSpace),et=o.convert(w.type);let tt=E(w.internalFormat,He,et,w.normalized,w.colorSpace);const gt=w.isVideoTexture!==!0,Tt=Ve.__version===void 0||Pe===!0,Je=_e.dataReady;let wt=T(w,xe);re(i.TEXTURE_CUBE_MAP,w);let Bt;if(w.isDepthTexture){if(tt=v(w.format===Gs,w.type),Tt)if(gt)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,tt,xe.width,xe.height);else for(let z=0;z<6;z++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,tt,xe.width,xe.height,0,He,et,null)}else if(Xe){gt&&Tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,wt,tt,xe.width,xe.height);for(let z=0;z<6;z++){Bt=Ae[z].mipmaps;for(let Qe=0;Qe<Bt.length;Qe++){const Ie=Bt[Qe];w.format!==xi?He!==null?gt?Je&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Qe,0,0,Ie.width,Ie.height,He,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Qe,tt,Ie.width,Ie.height,0,Ie.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Qe,0,0,Ie.width,Ie.height,He,et,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Qe,tt,Ie.width,Ie.height,0,He,et,Ie.data)}}}else{if(Bt=w.mipmaps,gt&&Tt){Bt.length>0&&wt++;const z=at(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,wt,tt,z.width,z.height)}for(let z=0;z<6;z++)if(J){gt?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ae[z].width,Ae[z].height,He,et,Ae[z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,tt,Ae[z].width,Ae[z].height,0,He,et,Ae[z].data);for(let Qe=0;Qe<Bt.length;Qe++){const ht=Bt[Qe].image[z].image;gt?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Qe+1,0,0,ht.width,ht.height,He,et,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Qe+1,tt,ht.width,ht.height,0,He,et,ht.data)}}else{gt?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,He,et,Ae[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,tt,He,et,Ae[z]);for(let Qe=0;Qe<Bt.length;Qe++){const Ie=Bt[Qe];gt?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Qe+1,0,0,He,et,Ie.image[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Qe+1,tt,He,et,Ie.image[z])}}}y(w)&&w.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),Ve.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Re(L,w,ne,Pe,_e,Ve){const je=o.convert(ne.format,ne.colorSpace),Se=o.convert(ne.type),ge=E(ne.internalFormat,je,Se,ne.normalized,ne.colorSpace),Xe=n.get(w),J=n.get(ne);if(J.__renderTarget=w,!Xe.__hasExternalTextures){const Ae=Math.max(1,w.width>>Ve),xe=Math.max(1,w.height>>Ve);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,Ve,ge,Ae,xe,w.depth,0,je,Se,null):t.texImage2D(_e,Ve,ge,Ae,xe,0,je,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),pe(w)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,_e,J.__webglTexture,0,$e(w)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Pe,_e,J.__webglTexture,Ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(L,w,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const Pe=w.depthTexture,_e=Pe&&Pe.isDepthTexture?Pe.type:null,Ve=v(w.stencilBuffer,_e),je=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(w)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(w),Ve,w.width,w.height):ne?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(w),Ve,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,je,i.RENDERBUFFER,L)}else{const Pe=w.textures;for(let _e=0;_e<Pe.length;_e++){const Ve=Pe[_e],je=o.convert(Ve.format,Ve.colorSpace),Se=o.convert(Ve.type),ge=E(Ve.internalFormat,je,Se,Ve.normalized,Ve.colorSpace);pe(w)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(w),ge,w.width,w.height):ne?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(w),ge,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ge,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(L,w,ne){const Pe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=n.get(w.depthTexture);_e.__renderTarget=w;const Ve=Pe?w.depthTexture.image[0]:w.depthTexture.image;(!_e.__webglTexture||Ve.width!==w.width||Ve.height!==w.height)&&(Ve.width=w.width,Ve.height=w.height,w.depthTexture.needsUpdate=!0),Pe?X(w.depthTexture,0):j(w.depthTexture,0);const je=_e.__webglTexture,Se=$e(w),ge=Pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+ne:i.TEXTURE_2D,Xe=w.depthTexture.format===Gs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ys)pe(w)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Xe,ge,je,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,Xe,ge,je,0);else if(w.depthTexture.format===Gs)pe(w)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Xe,ge,je,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,Xe,ge,je,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(L){const w=n.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const Pe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Pe){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Pe.removeEventListener("dispose",_e)};Pe.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=Pe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(ne)for(let Pe=0;Pe<6;Pe++)De(w.__webglFramebuffer[Pe],L,Pe);else L.texture.mipmaps.length>0?De(w.__webglFramebuffer[0],L,0):De(w.__webglFramebuffer,L,0);else if(ne){w.__webglDepthbuffer=[];for(let Pe=0;Pe<6;Pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Pe]),w.__webglDepthbuffer[Pe]===void 0)w.__webglDepthbuffer[Pe]=i.createRenderbuffer(),ze(w.__webglDepthbuffer[Pe],L,!1);else{const _e=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=w.__webglDepthbuffer[Pe];i.bindRenderbuffer(i.RENDERBUFFER,Ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Ve)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ze(w.__webglDepthbuffer,L,!1);else{const _e=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(L,w,ne){const Pe=n.get(L);w!==void 0&&Re(Pe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&it(L)}function Ce(L){const w=L.texture,ne=n.get(L),Pe=n.get(w);L.addEventListener("dispose",O),U(L);const _e=L.textures,Ve=L.isWebGLCubeRenderTarget===!0,je=_e.length>1;if(je||(Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture()),Pe.__version=w.version,a.memory.textures++),Ve){ne.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(w.mipmaps.length>0){ne.__webglFramebuffer[Se]=[];for(let ge=0;ge<w.mipmaps.length;ge++)ne.__webglFramebuffer[Se][ge]=i.createFramebuffer()}else ne.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Se=0;Se<w.mipmaps.length;Se++)ne.__webglFramebuffer[Se]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(je)for(let Se=0,ge=_e.length;Se<ge;Se++){const Xe=n.get(_e[Se]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&pe(L)===!1){ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Se=0;Se<_e.length;Se++){const ge=_e[Se];ne.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Se]);const Xe=o.convert(ge.format,ge.colorSpace),J=o.convert(ge.type),Ae=E(ge.internalFormat,Xe,J,ge.normalized,ge.colorSpace,L.isXRRenderTarget===!0),xe=$e(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Ae,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(ne.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ve){t.bindTexture(i.TEXTURE_CUBE_MAP,Pe.__webglTexture),re(i.TEXTURE_CUBE_MAP,w);for(let Se=0;Se<6;Se++)if(w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Re(ne.__webglFramebuffer[Se][ge],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ge);else Re(ne.__webglFramebuffer[Se],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);y(w)?_(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(je){for(let Se=0,ge=_e.length;Se<ge;Se++){const Xe=_e[Se],J=n.get(Xe);let Ae=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,J.__webglTexture),re(Ae,Xe),Re(ne.__webglFramebuffer,L,Xe,i.COLOR_ATTACHMENT0+Se,Ae,0),y(Xe)&&_(Ae)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Se=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,Pe.__webglTexture),re(Se,w),w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Re(ne.__webglFramebuffer[ge],L,w,i.COLOR_ATTACHMENT0,Se,ge);else Re(ne.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,Se,0);y(w)?_(Se):w.mipmaps.length>0&&i.texParameteri(Se,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&it(L)}function H(L){const w=L.textures;for(let ne=0,Pe=w.length;ne<Pe;ne++){const _e=w[ne];if(y(_e)&&_e.mipmapsAutoUpdate===!0){const Ve=A(L),je=n.get(_e).__webglTexture;t.bindTexture(Ve,je),_(Ve),t.unbindTexture()}}}const nt=[];function ke(L){if(L.samples>0){if(pe(L)===!1){const w=L.textures,ne=L.width,Pe=L.height;let _e=i.COLOR_BUFFER_BIT;const Ve=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,je=n.get(L),Se=w.length>1;if(Se)for(let Xe=0;Xe<w.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Xe=0;Xe<w.length;Xe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,je.__webglColorRenderbuffer[Xe]);const J=n.get(w[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,ne,Pe,0,0,ne,Pe,_e,i.NEAREST),l===!0&&(nt.length=0,nt.push(i.COLOR_ATTACHMENT0+Xe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&nt.push(Ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Xe=0;Xe<w.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,je.__webglColorRenderbuffer[Xe]);const J=n.get(w[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function $e(L){return Math.min(s.maxSamples,L.samples)}function pe(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(L){const w=a.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function qe(L,w){const ne=L.colorSpace,Pe=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ne!==wl&&ne!==Os&&(sn.getTransfer(ne)===cn?(Pe!==xi||_e!==Xn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",ne)),w}function at(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Ee,this.resetTextureUnits=ue,this.getTextureUnits=ae,this.setTextureUnits=le,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=I,this.setTextureCube=X,this.rebindTextures=be,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=pe,this.dispose=B}function a_(i,e){function t(n,s=Os){let o;const a=sn.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Qu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ju)return i.UNSIGNED_SHORT_5_5_5_1;if(n===T0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===E0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===b0)return i.BYTE;if(n===w0)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===Ju)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===Yi)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===A0)return i.ALPHA;if(n===R0)return i.RGB;if(n===xi)return i.RGBA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===Xl)return i.RED;if(n===eh)return i.RED_INTEGER;if(n===go)return i.RG;if(n===th)return i.RG_INTEGER;if(n===nh)return i.RGBA_INTEGER;if(n===fl||n===pl||n===ml||n===gl)if(a===cn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===fl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===fl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ml)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eu||n===tu||n===nu||n===iu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===eu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===iu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===su||n===ou||n===au||n===ru||n===lu||n===yl||n===cu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===su||n===ou)return a===cn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===au)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===ru)return o.COMPRESSED_R11_EAC;if(n===lu)return o.COMPRESSED_SIGNED_R11_EAC;if(n===yl)return o.COMPRESSED_RG11_EAC;if(n===cu)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===vu||n===xu||n===Su||n===_u||n===Mu||n===yu||n===bu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===uu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===du)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Su)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_u)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bu)return a===cn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wu||n===Tu||n===Eu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===wu)return a===cn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===Ru||n===bl||n===Cu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Au)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ru)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
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

}`;class c_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new X0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:r_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u_ extends $s{constructor(e,t){super();const n=this;let s=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",p=new c_,m={},S=t.getContextAttributes();let y=null,_=null;const A=[],E=[],v=new ot;let T=null,U=null;const C=new Di;C.viewport=new wn;const D=new Di;D.viewport=new wn;const O=[C,D],Y=new _g;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let j=A[N];return j===void 0&&(j=new uc,A[N]=j),j.getTargetRaySpace()},this.getControllerGrip=function(N){let j=A[N];return j===void 0&&(j=new uc,A[N]=j),j.getGripSpace()},this.getHand=function(N){let j=A[N];return j===void 0&&(j=new uc,A[N]=j),j.getHandSpace()};function $(N){const j=E.indexOf(N.inputSource);if(j===-1)return;const W=A[j];W!==void 0&&(W.update(N.inputSource,N.frame,c||a),W.dispatchEvent({type:N.type,data:N.inputSource}))}function K(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",he);for(let N=0;N<A.length;N++){const j=E[N];j!==null&&(E[N]=null,A[N].disconnect(j))}R=null,B=null,p.reset();for(const N in m)delete m[N];if(e.setRenderTarget(y),d=null,u=null,f=null,s=null,_=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(v.width,v.height,!1),U!==null){const N=U.camera;N.fov=U.fov,N.zoom=U.zoom,N.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){o=N,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){r=N,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",K),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,I=null,X=null;S.depth&&(X=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=S.stencil?Gs:Ys,I=S.stencil?oa:rs);const te={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:o};f=this.getBinding(),u=f.createProjectionLayer(te),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Ti(u.textureWidth,u.textureHeight,{format:xi,type:Xn,depthTexture:new aa(u.textureWidth,u.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const W={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ti(d.framebufferWidth,d.framebufferHeight,{format:xi,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(r),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function he(N){for(let j=0;j<N.removed.length;j++){const W=N.removed[j],I=E.indexOf(W);I>=0&&(E[I]=null,A[I].disconnect(W))}for(let j=0;j<N.added.length;j++){const W=N.added[j];let I=E.indexOf(W);if(I===-1){for(let te=0;te<A.length;te++)if(te>=E.length){E.push(W),I=te;break}else if(E[te]===null){E[te]=W,I=te;break}if(I===-1)break}const X=A[I];X&&X.connect(W)}}function ee(N,j){j===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(j.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let j=N.near,W=N.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(W=p.depthFar)),Y.near=D.near=C.near=j,Y.far=D.far=C.far=W,(R!==Y.near||B!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),R=Y.near,B=Y.far),Y.layers.mask=N.layers.mask|6,C.layers.mask=Y.layers.mask&-5,D.layers.mask=Y.layers.mask&-3;const I=N.parent,X=Y.cameras;ee(Y,I);for(let te=0;te<X.length;te++)ee(X[te],I);Y.projectionMatrix.copy(C.projectionMatrix),Y.projectionMatrixInverse.copy(C.projectionMatrixInverse),U===null&&N.isPerspectiveCamera&&(U={camera:N,fov:N.fov,zoom:N.zoom}),ue(N,Y,I)};function ue(N,j,W){W===null?N.matrix.copy(j.matrixWorld):(N.matrix.copy(W.matrixWorld),N.matrix.invert(),N.matrix.multiply(j.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(j.projectionMatrix),N.projectionMatrixInverse.copy(j.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=sr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(N){l=N,u!==null&&(u.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Y)},this.getCameraTexture=function(N){return m[N]};let ae=null;function le(N,j){if(h=j.getViewerPose(c||a),g=j,h!==null){const W=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let I=!1;W.length!==Y.cameras.length&&(Y.cameras.length=0,I=!0);for(let ie=0;ie<W.length;ie++){const re=W[ie];let Me=null;if(d!==null)Me=d.getViewport(re);else{const fe=f.getViewSubImage(u,re);Me=fe.viewport,ie===0&&(e.setRenderTargetTextures(_,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(_))}let se=O[ie];se===void 0&&(se=new Di,se.layers.enable(ie),se.viewport=new wn,O[ie]=se),se.matrix.fromArray(re.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(re.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Me.x,Me.y,Me.width,Me.height),ie===0&&(Y.matrix.copy(se.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),I===!0&&Y.cameras.push(se)}const X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const ie=f.getDepthInformation(W[0]);ie&&ie.isValid&&ie.texture&&p.init(ie,s.renderState)}if(X&&X.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let ie=0;ie<W.length;ie++){const re=W[ie].camera;if(re){let Me=m[re];Me||(Me=new X0,m[re]=Me);const se=f.getCameraImage(re);Me.sourceTexture=se}}}}for(let W=0;W<A.length;W++){const I=E[W],X=A[W];I!==null&&X!==void 0&&X.update(I,j,c||a)}ae&&ae(N,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Ee=new of;Ee.setAnimationLoop(le),this.setAnimationLoop=function(N){ae=N},this.dispose=function(){}}}const h_=new un,mf=new Ht;mf.set(-1,0,0,0,1,0,0,0,1);function d_(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ef(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,y,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(p,m):m.isMeshLambertMaterial?(o(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(p,m),f(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),x(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&r(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ui&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ui&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,_=S.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(mf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function r(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ui&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f_(i,e,t,n){let s={},o={};function a(S,y){const _=y.program;n.uniformBlockBinding(S,_,s[S.id])}function r(S,y){let _=s[S.id];_===void 0&&(g(S),_=l(S),s[S.id]=_,S.addEventListener("dispose",p));const A=y.program;n.updateUBOMapping(S,A);const E=e.render.frame;o[S.id]!==E&&(c(S),o[S.id]=E)}function l(S){const y=i.createBuffer(),_=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,_,A),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(S){const y=s[S.id],_=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,v=_.length;E<v;E++){const T=_[E];if(Array.isArray(T))for(let U=0,C=T.length;U<C;U++)h(T[U],E,U,A);else h(T,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,y,_,A){if(u(S,y,_,A)===!0){const E=S.__offset,v=S.value;if(Array.isArray(v)){let T=0;for(let U=0;U<v.length;U++){const C=v[U],D=x(C,!0);f(C,S.__data,T),T+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}function f(S,y,_){typeof S=="number"||typeof S=="boolean"?y[_]=S:S.isMatrix3?(y[_]=S.elements[0],y[_+1]=S.elements[1],y[_+2]=S.elements[2],y[_+3]=0,y[_+4]=S.elements[3],y[_+5]=S.elements[4],y[_+6]=S.elements[5],y[_+7]=0,y[_+8]=S.elements[6],y[_+9]=S.elements[7],y[_+10]=S.elements[8],y[_+11]=0):ArrayBuffer.isView(S)?y.set(S.subarray(0,y.length-_),_):S.toArray(y,_)}function u(S,y,_,A){const E=S.value,v=y+"_"+_;if(Array.isArray(E)){A[v]===void 0&&(A[v]=[]);const T=A[v];let U=!1;for(let C=0;C<E.length;C++)d(E[C],T,C)===!0&&(U=!0);return U}return d(E,A,v)}function d(S,y,_){if(y[_]===void 0)return typeof S=="number"||typeof S=="boolean"?y[_]=S:ArrayBuffer.isView(S)?y[_]=S.slice():y[_]=S.clone(),!0;{const A=y[_];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return y[_]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){const y=S.uniforms;let _=0;const A=16;for(let v=0,T=y.length;v<T;v++){const U=Array.isArray(y[v])?y[v]:[y[v]];for(let C=0,D=U.length;C<D;C++){const O=U[C],Y=Array.isArray(O.value)?O.value:[O.value],R=Array.isArray(y[v])||Array.isArray(O.value);let B=_;for(let K=0,he=Y.length;K<he;K++){const ee=Y[K],ue=x(ee,R),ae=_%A,le=ae%ue.boundary,Ee=ae+le;_+=le,Ee!==0&&A-Ee<ue.storage&&(_+=A-Ee),K===0&&(B=_),_+=ue.storage}const $=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new $((_-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}const E=_%A;return E>0&&(_+=A-E),S.__size=_,S.__cache={},this}function x(S,y){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=16,_.storage=48):S.isMatrix4?(_.boundary=16,_.storage=64):S.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(_.boundary=16,_.storage=S.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",S),y===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function p(S){const y=S.target;y.removeEventListener("dispose",p),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);s={},o={}}return{bind:a,update:r,dispose:m}}const p_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ns=null;function m_(){return ns===null&&(ns=new Al(p_,16,16,go,Ui),ns.name="DFG_LUT",ns.minFilter=Mn,ns.magFilter=Mn,ns.wrapS=wi,ns.wrapT=wi,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}class g_{constructor(e={}){const{canvas:t=Hp(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Xn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=d,p=new Set([nh,th,eh]),m=new Set([Xn,rs,nr,oa,Qu,ju]),S=new Uint32Array(4),y=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]};let A=null,E=null;const v=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,O=null,Y=null,R=null,B=null;this._outputColorSpace=Rn;let $=0,K=0,he=null,ee=-1,ue=null;const ae=new wn,le=new wn;let Ee=null;const N=new Ut(0);let j=0,W=t.width,I=t.height,X=1,te=null,ce=null;const ie=new wn(0,0,W,I),re=new wn(0,0,W,I);let Me=!1;const se=new or,fe=new rh;let de=!1,we=!1;const Re=new un,ze=new G,De=new wn,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Ce(){return he===null?X:1}let H=n;function nt(M,P){return t.getContext(M,P)}let ke,$e,pe,Ke,qe,at,L,w,ne,Pe,_e,Ve,je,Se,ge,Xe,J,Ae,xe,He,et,tt,gt;try{const M={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ku}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",Bt,!1),t.addEventListener("webglcontextcreationerror",z,!1),H===null){const P="webgl2";if(H=nt(P,M),H===null)throw nt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(M){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",Bt,!1),t.removeEventListener("webglcontextcreationerror",z,!1),on("WebGLRenderer: "+M.message),M}function Tt(){ke=new Sx(H),ke.init(),et=new a_(H,ke),$e=new lx(H,ke,e,et),pe=new s_(H,ke),$e.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),Y=H.createFramebuffer(),R=H.createFramebuffer(),B=H.createFramebuffer(),Ke=new yx(H),qe=new WS,at=new o_(H,ke,pe,qe,$e,et,Ke),L=new xx(C),w=new wg(H),tt=new ax(H,w),ne=new _x(H,w,Ke,tt),Pe=new wx(H,ne,w,tt,Ke),Ae=new bx(H,$e,at),ge=new cx(qe),_e=new HS(C,L,ke,$e,tt,ge),Ve=new d_(C,qe),je=new YS,Se=new QS(ke),J=new ox(C,L,pe,Pe,g,l),Xe=new i_(C,Pe,$e),gt=new f_(H,Ke,$e,pe),xe=new rx(H,ke,Ke),He=new Mx(H,ke,Ke),Ke.programs=_e.programs,C.capabilities=$e,C.extensions=ke,C.properties=qe,C.renderLists=je,C.shadowMap=Xe,C.state=pe,C.info=Ke}x!==Xn&&(U=new Ex(x,t.width,t.height,r,s,o));const Je=new u_(C,H);this.xr=Je,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const M=ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(W,I,!1))},this.getSize=function(M){return M.set(W,I)},this.setSize=function(M,P,Z=!0){if(Je.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,I=P,t.width=Math.floor(M*X),t.height=Math.floor(P*X),Z===!0&&(t.style.width=M+"px",t.style.height=P+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(W*X,I*X).floor()},this.setDrawingBufferSize=function(M,P,Z){W=M,I=P,X=Z,t.width=Math.floor(M*Z),t.height=Math.floor(P*Z),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(x===Xn){on("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ae)},this.getViewport=function(M){return M.copy(ie)},this.setViewport=function(M,P,Z,k){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,P,Z,k),pe.viewport(ae.copy(ie).multiplyScalar(Ce()).round())},this.getScissor=function(M){return M.copy(re)},this.setScissor=function(M,P,Z,k){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,P,Z,k),pe.scissor(le.copy(re).multiplyScalar(Ce()).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(M){pe.setScissorTest(Me=M)},this.setOpaqueSort=function(M){te=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,Z=!0){let k=0;if(M){let b=!1;if(he!==null){const q=he.texture.format;b=p.has(q)}if(b){const q=he.texture.type,Ge=m.has(q),Ne=J.getClearColor(),Te=J.getClearAlpha(),Ye=Ne.r,Oe=Ne.g,ye=Ne.b;Ge?(S[0]=Ye,S[1]=Oe,S[2]=ye,S[3]=Te,H.clearBufferuiv(H.COLOR,0,S)):(y[0]=Ye,y[1]=Oe,y[2]=ye,y[3]=Te,H.clearBufferiv(H.COLOR,0,y))}else k|=H.COLOR_BUFFER_BIT}P&&(k|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(k|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&H.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",Bt,!1),t.removeEventListener("webglcontextcreationerror",z,!1),J.dispose(),je.dispose(),Se.dispose(),at.dispose(),qe.dispose(),L.dispose(),Pe.dispose(),ne.dispose(),tt.dispose(),gt.dispose(),_e.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",Ot),Je.removeEventListener("sessionend",Wt),_t.stop()};function wt(M){M.preventDefault(),Hh("WebGLRenderer: Context Lost."),D=!0}function Bt(){Hh("WebGLRenderer: Context Restored."),D=!1;const M=Ke.autoReset,P=Xe.enabled,Z=Xe.autoUpdate,k=Xe.needsUpdate,b=Xe.type;Tt(),Ke.autoReset=M,Xe.enabled=P,Xe.autoUpdate=Z,Xe.needsUpdate=k,Xe.type=b}function z(M){on("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Qe(M){const P=M.target;P.removeEventListener("dispose",Qe),Ie(P)}function Ie(M){ht(M),qe.remove(M)}function ht(M){const P=qe.get(M).programs;P!==void 0&&(P.forEach(function(Z){_e.releaseProgram(Z)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,Z,k,b,q){P===null&&(P=it);const Ge=b.isMesh&&b.matrixWorld.determinantAffine()<0,Ne=We(M,P,Z,k,b);pe.setMaterial(k,Ge);let Te=Z.index,Ye=1;if(k.wireframe===!0){if(Te=ne.getWireframeAttribute(Z),Te===void 0)return;Ye=2}const Oe=Z.drawRange,ye=Z.attributes.position;let Le=Oe.start*Ye,vt=(Oe.start+Oe.count)*Ye;q!==null&&(Le=Math.max(Le,q.start*Ye),vt=Math.min(vt,(q.start+q.count)*Ye)),Te!==null?(Le=Math.max(Le,0),vt=Math.min(vt,Te.count)):ye!=null&&(Le=Math.max(Le,0),vt=Math.min(vt,ye.count));const Ct=vt-Le;if(Ct<0||Ct===1/0)return;tt.setup(b,k,Ne,Z,Te);let Mt,ct=xe;if(Te!==null&&(Mt=w.get(Te),ct=He,ct.setIndex(Mt)),b.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*Ce()),ct.setMode(H.LINES)):ct.setMode(H.TRIANGLES);else if(b.isLine){let Yt=k.linewidth;Yt===void 0&&(Yt=1),pe.setLineWidth(Yt*Ce()),b.isLineSegments?ct.setMode(H.LINES):b.isLineLoop?ct.setMode(H.LINE_LOOP):ct.setMode(H.LINE_STRIP)}else b.isPoints?ct.setMode(H.POINTS):b.isSprite&&ct.setMode(H.TRIANGLES);if(b.isBatchedMesh)if(ke.get("WEBGL_multi_draw"))ct.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{const Yt=b._multiDrawStarts,pt=b._multiDrawCounts,xn=b._multiDrawCount,rt=Te?w.get(Te).bytesPerElement:1,F=qe.get(k).currentProgram.getUniforms();for(let st=0;st<xn;st++)F.setValue(H,"_gl_DrawID",st),ct.render(Yt[st]/rt,pt[st])}else if(b.isInstancedMesh)ct.renderInstances(Le,Ct,b.count);else if(Z.isInstancedBufferGeometry){const Yt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,pt=Math.min(Z.instanceCount,Yt);ct.renderInstances(Le,Ct,pt)}else ct.render(Le,Ct)};function nn(M,P,Z,k){O!==null&&M.isNodeMaterial&&O.setObject(k,M),de===!0&&ge.setState(M,Z,!1),M.transparent===!0&&M.side===Wn&&M.forceSinglePass===!1?(M.side=ui,M.needsUpdate=!0,Dt(M,P,k),M.side=di,M.needsUpdate=!0,Dt(M,P,k),M.side=Wn):Dt(M,P,k)}this.compile=function(M,P,Z=null){Z===null&&(Z=M),O!==null&&O.renderStart(M,P,Z),E=Se.get(Z),E.init(P),T.push(E),Z.traverseVisible(function(b){b.isLight&&b.layers.test(P.layers)&&(E.pushLight(b),b.castShadow&&E.pushShadow(b))}),M!==Z&&M.traverseVisible(function(b){b.isLight&&b.layers.test(P.layers)&&(E.pushLight(b),b.castShadow&&E.pushShadow(b))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),we=this.localClippingEnabled,de=ge.init(this.clippingPlanes,we),de===!0&&ge.setGlobalState(this.clippingPlanes,P),O!==null&&Xe.render(E.state.shadowsArray,Z,P);const k=new Set;return M.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;const q=b.material;if(q)if(Array.isArray(q))for(let Ge=0;Ge<q.length;Ge++){const Ne=q[Ge];nn(Ne,Z,P,b),k.add(Ne)}else nn(q,Z,P,b),k.add(q)}),E=T.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(M,P,Z=null){const k=this.compile(M,P,Z);return new Promise(b=>{function q(){if(k.forEach(function(Ge){const Te=qe.get(Ge).currentProgram;(Te===void 0||Te.isReady())&&k.delete(Ge)}),k.size===0){b(M);return}setTimeout(q,10)}ke.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let Kt=null;function $t(M){Kt&&Kt(M)}function Ot(){_t.stop()}function Wt(){_t.start()}const _t=new of;_t.setAnimationLoop($t),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(M){Kt=M,Je.setAnimationLoop(M),M===null?_t.stop():_t.start()},Je.addEventListener("sessionstart",Ot),Je.addEventListener("sessionend",Wt),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(M,P);const Z=Je.enabled===!0&&Je.isPresenting===!0,k=U!==null&&(he===null||Z)&&U.begin(C,he);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(P),P=Je.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,P,he),E=Se.get(M,T.length),E.init(P),E.state.textureUnits=at.getTextureUnits(),T.push(E),Re.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?fe.setFromArrayCamera(P):se.setFromProjectionMatrix(Re,Zi,P.reversedDepth),we=this.localClippingEnabled,de=ge.init(this.clippingPlanes,we),A=je.get(M,v.length),A.init(),v.push(A),this.info.render.frame++,Je.enabled===!0&&Je.isPresenting===!0){const Ge=C.xr.getDepthSensingMesh();Ge!==null&&zt(Ge,P,-1/0,C.sortObjects)}zt(M,P,0,C.sortObjects),A.finish(),O!==null&&O.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(te,ce),be=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,be&&J.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),de===!0&&ge.beginShadows();const b=E.state.shadowsArray;if(Xe.render(b,M,P),de===!0&&ge.endShadows(),(k&&U.hasRenderPass())===!1){const Ge=A.opaque,Ne=A.transmissive;if(E.setupLights(),P.isArrayCamera){const Te=P.cameras;if(Ne.length>0)for(let Ye=0,Oe=Te.length;Ye<Oe;Ye++){const ye=Te[Ye];en(Ge,Ne,M,ye)}be&&J.render(M);for(let Ye=0,Oe=Te.length;Ye<Oe;Ye++){const ye=Te[Ye];hn(A,M,ye,ye.viewport)}}else Ne.length>0&&en(Ge,Ne,M,P),be&&J.render(M),hn(A,M,P)}he!==null&&K===0&&(at.updateMultisampleRenderTarget(he),at.updateRenderTargetMipmap(he)),k&&U.end(C),M.isScene===!0&&M.onAfterRender(C,M,P),tt.resetDefaultState(),ee=-1,ue=null,T.pop(),T.length>0?(E=T[T.length-1],at.setTextureUnits(E.state.textureUnits),de===!0&&ge.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,O!==null&&O.renderEnd()};function zt(M,P,Z,k){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){const Ge=P.isArrayCamera?fe:se;if(!M.frustumCulled||M.intersectsFrustum(Ge)){k&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Re);const Ne=Pe.update(M),Te=M.material;Te.visible&&A.push(M,Ne,Te,Z,De.z,null,P)}}else if(M.isMesh||M.isLine||M.isPoints){const Ge=P.isArrayCamera?fe:se;if(!M.frustumCulled||M.intersectsFrustum(Ge)){const Ne=Pe.update(M),Te=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),De.copy(Ne.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(Re)),Array.isArray(Te)){const Ye=Ne.groups;for(let Oe=0,ye=Ye.length;Oe<ye;Oe++){const Le=Ye[Oe],vt=Te[Le.materialIndex];vt&&vt.visible&&A.push(M,Ne,vt,Z,De.z,Le,P)}}else Te.visible&&A.push(M,Ne,Te,Z,De.z,null,P)}}}const q=M.children;for(let Ge=0,Ne=q.length;Ge<Ne;Ge++)zt(q[Ge],P,Z,k)}function hn(M,P,Z,k){const{opaque:b,transmissive:q,transparent:Ge}=M;E.setupLightsView(Z),de===!0&&ge.setGlobalState(C.clippingPlanes,Z),k&&pe.viewport(ae.copy(k)),b.length>0&&ve(b,P,Z),q.length>0&&ve(q,P,Z),Ge.length>0&&ve(Ge,P,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function en(M,P,Z,k){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const Le=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Ti(1,1,{generateMipmaps:!0,type:Le?Ui:Xn,minFilter:Ss,samples:Math.max(4,$e.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:sn.workingColorSpace})}const q=E.state.transmissionRenderTarget[k.id],Ge=k.viewport||ae;q.setSize(Ge.z*C.transmissionResolutionScale,Ge.w*C.transmissionResolutionScale);const Ne=C.getRenderTarget(),Te=C.getActiveCubeFace(),Ye=C.getActiveMipmapLevel();C.setRenderTarget(q),C.getClearColor(N),j=C.getClearAlpha(),j<1&&C.setClearColor(16777215,.5),C.clear(),be&&J.render(Z);const Oe=C.toneMapping;C.toneMapping=ji;const ye=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),de===!0&&ge.setGlobalState(C.clippingPlanes,k),ve(M,Z,k),at.updateMultisampleRenderTarget(q),at.updateRenderTargetMipmap(q),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let vt=0,Ct=P.length;vt<Ct;vt++){const Mt=P[vt],{object:ct,geometry:Yt,material:pt,group:xn}=Mt;if(pt.side===Wn&&ct.layers.test(k.layers)){const rt=pt.side;pt.side=ui,pt.needsUpdate=!0,Be(ct,Z,k,Yt,pt,xn),pt.side=rt,pt.needsUpdate=!0,Le=!0}}Le===!0&&(at.updateMultisampleRenderTarget(q),at.updateRenderTargetMipmap(q))}C.setRenderTarget(Ne,Te,Ye),C.setClearColor(N,j),ye!==void 0&&(k.viewport=ye),C.toneMapping=Oe}function ve(M,P,Z){const k=P.isScene===!0?P.overrideMaterial:null;for(let b=0,q=M.length;b<q;b++){const Ge=M[b],{object:Ne,geometry:Te,group:Ye}=Ge;let Oe=Ge.material;Oe.allowOverride===!0&&k!==null&&(Oe=k),Ne.layers.test(Z.layers)&&Be(Ne,P,Z,Te,Oe,Ye)}}function Be(M,P,Z,k,b,q){O!==null&&b.isNodeMaterial&&O.setObject(M,b),M.onBeforeRender(C,P,Z,k,b,q),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),b.onBeforeRender(C,P,Z,k,M,q),b.transparent===!0&&b.side===Wn&&b.forceSinglePass===!1?(b.side=ui,b.needsUpdate=!0,C.renderBufferDirect(Z,P,k,b,M,q),b.side=di,b.needsUpdate=!0,C.renderBufferDirect(Z,P,k,b,M,q),b.side=Wn):C.renderBufferDirect(Z,P,k,b,M,q),M.onAfterRender(C,P,Z,k,b,q)}function Pt(M){let P=0;for(const Z of M)Z.texture!==null&&P++;return P}function Dt(M,P,Z){P.isScene!==!0&&(P=it);const k=qe.get(M),b=E.state.lights,q=E.state.shadowsArray,Ge=b.state.version,Ne=_e.getParameters(M,b.state,q,P,Z,E.state.lightProbeGridArray),Te=_e.getProgramCacheKey(Ne);let Ye=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,k.fog=P.fog;const Oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=L.get(M.envMap||k.environment,Oe),k.envMapRotation=k.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Ye===void 0&&(M.addEventListener("dispose",Qe),Ye=new Map,k.programs=Ye,k.programVariants=new Map);let ye=Ye.get(Te);if(ye!==void 0){if(k.currentProgram===ye&&k.lightsStateVersion===Ge)return V(M,Ne),ye}else Ne.uniforms=_e.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,Z,Ne),M.onBeforeCompile(Ne,C),ye=_e.acquireProgram(Ne,Te),Ye.set(Te,ye),k.uniforms=Ne.uniforms;const Le=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ge.uniform),V(M,Ne),k.needsLights=oe(M),k.lightsStateVersion=Ge,k.needsLights&&(Le.ambientLightColor.value=b.state.ambient,Le.lightProbe.value=b.state.probe,Le.sunLights.value=b.state.sun,Le.sunLightShadows.value=b.state.sunShadow,Le.directionalLights.value=b.state.directional,Le.directionalLightShadows.value=b.state.directionalShadow,Le.spotLights.value=b.state.spot,Le.spotLightShadows.value=b.state.spotShadow,Le.rectAreaLights.value=b.state.rectArea,Le.ltc_1.value=b.state.rectAreaLTC1,Le.ltc_2.value=b.state.rectAreaLTC2,Le.pointLights.value=b.state.point,Le.pointLightShadows.value=b.state.pointShadow,Le.hemisphereLights.value=b.state.hemi,Le.sunShadowMatrix.value=b.state.sunShadowMatrix,Le.sunShadowCascade.value=b.state.sunShadowCascade,Le.directionalShadowMatrix.value=b.state.directionalShadowMatrix,Le.spotLightMatrix.value=b.state.spotLightMatrix,Le.spotLightMap.value=b.state.spotLightMap,Le.pointShadowMatrix.value=b.state.pointShadowMatrix),k.numLightProbeGrids=Pt(E.state.lightProbeGridArray),k.currentProgram=ye,k.uniformsList=null,ye}function fn(M,P,Z,k,b){const q=qe.get(M),Ge=q.currentProgram.id+","+k+","+b;let Ne=q.programVariants.get(Ge);return Ne===void 0?(Ne=Dt(M,P,Z),q.programVariants.set(Ge,Ne)):(q.currentProgram=Ne,q.uniformsList=null,q.outputColorSpace=k,q.toneMapping=b),Ne}function tn(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=vl.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function V(M,P){const Z=qe.get(M);Z.outputColorSpace=P.outputColorSpace,Z.batching=P.batching,Z.batchingColor=P.batchingColor,Z.instancing=P.instancing,Z.instancingColor=P.instancingColor,Z.instancingMorph=P.instancingMorph,Z.skinning=P.skinning,Z.morphTargets=P.morphTargets,Z.morphNormals=P.morphNormals,Z.morphColors=P.morphColors,Z.morphTargetsCount=P.morphTargetsCount,Z.numClippingPlanes=P.numClippingPlanes,Z.numIntersection=P.numClipIntersection,Z.vertexAlphas=P.vertexAlphas,Z.vertexTangents=P.vertexTangents,Z.toneMapping=P.toneMapping}function We(M,P,Z,k,b){P.isScene!==!0&&(P=it),at.resetTextureUnits();const q=P.fog,Ge=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?P.environment:null,Ne=he===null?C.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:sn.workingColorSpace,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ye=L.get(k.envMap||Ge,Te),Oe=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ye=!!Z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!Z.morphAttributes.position,vt=!!Z.morphAttributes.normal,Ct=!!Z.morphAttributes.color;let Mt=ji;k.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Mt=C.toneMapping);const ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Yt=ct!==void 0?ct.length:0,pt=qe.get(k),xn=E.state.lights;if(de===!0&&(we===!0||M!==ue)){const xt=M===ue&&k.id===ee;ge.setState(k,M,xt)}let rt=!1,F=!1;k.version===pt.__version?pt.needsLights&&pt.lightsStateVersion!==xn.state.version||b.isBatchedMesh&&pt.batching===!1||!b.isBatchedMesh&&pt.batching===!0||b.isBatchedMesh&&pt.batchingColor===!0&&b._colorsTexture===null||b.isBatchedMesh&&pt.batchingColor===!1&&b._colorsTexture!==null||b.isInstancedMesh&&pt.instancing===!1||!b.isInstancedMesh&&pt.instancing===!0||b.isSkinnedMesh&&pt.skinning===!1||!b.isSkinnedMesh&&pt.skinning===!0||b.isInstancedMesh&&pt.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&pt.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&pt.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&pt.instancingMorph===!1&&b.morphTexture!==null||pt.envMap!==Ye||k.fog===!0&&pt.fog!==q||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==ge.numPlanes||pt.numIntersection!==ge.numIntersection)||pt.vertexAlphas!==Oe||pt.vertexTangents!==ye||pt.morphTargets!==Le||pt.morphNormals!==vt||pt.morphColors!==Ct||pt.morphTargetsCount!==Yt||pt.numLightProbeGrids!==Pt(E.state.lightProbeGridArray)?rt=!0:(pt.outputColorSpace!==Ne||pt.toneMapping!==Mt)&&(F=!0):(rt=!0,pt.__version=k.version);let st=pt.currentProgram;(rt===!0||F===!0)&&(st=F===!0?fn(k,P,b,Ne,Mt):Dt(k,P,b),O&&k.isNodeMaterial&&O.onUpdateProgram(k,st,pt));let Vt=!1,Nt=!1,yt=!1;const ft=st.getUniforms(),At=pt.uniforms;if(pe.useProgram(st.program)&&(Vt=!0,Nt=!0,yt=!0),k.id!==ee&&(ee=k.id,Nt=!0),Vt||ue!==M){pe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(H,"projectionMatrix",M.projectionMatrix),ft.setValue(H,"viewMatrix",M.matrixWorldInverse);const lt=ft.map.cameraPosition;lt!==void 0&&lt.setValue(H,ze.setFromMatrixPosition(M.matrixWorld)),$e.logarithmicDepthBuffer&&ft.setValue(H,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ft.setValue(H,"isOrthographic",M.isOrthographicCamera===!0),ue!==M&&(ue=M,Nt=!0,yt=!0)}if(pt.needsLights&&(xn.state.sunShadowMap.length>0&&ft.setValue(H,"sunShadowMap",xn.state.sunShadowMap,at),xn.state.directionalShadowMap.length>0&&ft.setValue(H,"directionalShadowMap",xn.state.directionalShadowMap,at),xn.state.spotShadowMap.length>0&&ft.setValue(H,"spotShadowMap",xn.state.spotShadowMap,at),xn.state.pointShadowMap.length>0&&ft.setValue(H,"pointShadowMap",xn.state.pointShadowMap,at)),b.isSkinnedMesh){ft.setOptional(H,b,"bindMatrix"),ft.setOptional(H,b,"bindMatrixInverse");const xt=b.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ft.setValue(H,"boneTexture",xt.boneTexture,at))}b.isBatchedMesh&&(ft.setOptional(H,b,"batchingTexture"),ft.setValue(H,"batchingTexture",b._matricesTexture,at),ft.setOptional(H,b,"batchingIdTexture"),ft.setValue(H,"batchingIdTexture",b._indirectTexture,at),ft.setOptional(H,b,"batchingColorTexture"),b._colorsTexture!==null&&ft.setValue(H,"batchingColorTexture",b._colorsTexture,at));const Zt=Z.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Ae.update(b,Z,st),(Nt||pt.receiveShadow!==b.receiveShadow)&&(pt.receiveShadow=b.receiveShadow,ft.setValue(H,"receiveShadow",b.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&P.environment!==null&&(At.envMapIntensity.value=P.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=m_()),Nt){if(ft.setValue(H,"toneMappingExposure",C.toneMappingExposure),pt.needsLights&&Ze(At,yt),q&&k.fog===!0&&Ve.refreshFogUniforms(At,q),Ve.refreshMaterialUniforms(At,k,X,I,E.state.transmissionRenderTarget[M.id]),pt.needsLights&&pt.numLightProbeGrids>0){const xt=_;let lt=0;for(const bt of E.state.lightProbeGridArray)bt.texture!==null&&(xt.textures[lt]=bt.texture,xt.min[lt]=bt.boundingBox.min,xt.max[lt]=bt.boundingBox.max,xt.resolution[lt]=bt.resolution,lt++);for(const bt in xt)xt[bt].length=lt;At.probesSH.value=xt.textures,At.probesMin.value=xt.min,At.probesMax.value=xt.max,At.probesResolution.value=xt.resolution}vl.upload(H,tn(pt),At,at)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vl.upload(H,tn(pt),At,at),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ft.setValue(H,"center",b.center),ft.setValue(H,"modelViewMatrix",b.modelViewMatrix),ft.setValue(H,"normalMatrix",b.normalMatrix),ft.setValue(H,"modelMatrix",b.matrixWorld),k.uniformsGroups!==void 0){const xt=k.uniformsGroups;for(let lt=0,bt=xt.length;lt<bt;lt++){const Jt=xt[lt];gt.update(Jt,st),gt.bind(Jt,st)}}return st}function Ze(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function oe(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(M,P,Z){const k=qe.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),qe.get(M.texture).__webglTexture=P,qe.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){const Z=qe.get(M);Z.__webglFramebuffer=P,Z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,Z=0){he=M,$=P,K=Z;let k=null,b=!1,q=!1;if(M){const Ne=qe.get(M);if(Ne.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(H.FRAMEBUFFER,Ne.__webglFramebuffer),ae.copy(M.viewport),le.copy(M.scissor),Ee=M.scissorTest,pe.viewport(ae),pe.scissor(le),pe.setScissorTest(Ee),ee=-1;return}else if(Ne.__webglFramebuffer===void 0)at.setupRenderTarget(M);else if(Ne.__hasExternalTextures)at.rebindTextures(M,qe.get(M.texture).__webglTexture,qe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Oe=M.depthTexture;if(Ne.__boundDepthTexture!==Oe){if(Oe!==null&&qe.has(Oe)&&(M.width!==Oe.image.width||M.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(q=!0);const Ye=qe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ye[P])?k=Ye[P][Z]:k=Ye[P],b=!0):M.samples>0&&at.useMultisampledRTT(M)===!1?k=qe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ye)?k=Ye[Z]:k=Ye,ae.copy(M.viewport),le.copy(M.scissor),Ee=M.scissorTest}else ae.copy(ie).multiplyScalar(X).floor(),le.copy(re).multiplyScalar(X).floor(),Ee=Me;if(Z!==0&&(k=Y),pe.bindFramebuffer(H.FRAMEBUFFER,k)&&pe.drawBuffers(M,k),pe.viewport(ae),pe.scissor(le),pe.setScissorTest(Ee),b){const Ne=qe.get(M.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+P,Ne.__webglTexture,Z)}else if(q){const Ne=P;for(let Te=0;Te<M.textures.length;Te++){const Ye=qe.get(M.textures[Te]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Te,Ye.__webglTexture,Z,Ne)}}else if(M!==null&&Z!==0){const Ne=qe.get(M.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ne.__webglTexture,Z)}ee=-1};function Ue(M){const P=qe.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=$e.textureFormatReadable(M.format),P.__typeReadable=$e.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,Z,k,b,q,Ge,Ne=0){if(!(M&&M.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=qe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ge!==void 0&&(Te=Te[Ge],Array.isArray(Te)&&(Te=Te[0])),Te){pe.bindFramebuffer(H.FRAMEBUFFER,Te);try{const Ye=M.textures[Ne],Oe=Ye.format,ye=Ye.type;M.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ne);const Le=Ue(Ye);if(Le.__formatReadable===!1){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-k&&Z>=0&&Z<=M.height-b&&H.readPixels(P,Z,k,b,et.convert(Oe),et.convert(ye),q)}finally{const Ye=he!==null?qe.get(he).__webglFramebuffer:null;pe.bindFramebuffer(H.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(M,P,Z,k,b,q,Ge,Ne=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=qe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ge!==void 0&&(Te=Te[Ge],Array.isArray(Te)&&(Te=Te[0])),Te)if(P>=0&&P<=M.width-k&&Z>=0&&Z<=M.height-b){pe.bindFramebuffer(H.FRAMEBUFFER,Te);const Ye=M.textures[Ne],Oe=Ye.format,ye=Ye.type;M.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ne);const Le=Ue(Ye);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,vt),H.bufferData(H.PIXEL_PACK_BUFFER,q.byteLength,H.STREAM_READ),H.readPixels(P,Z,k,b,et.convert(Oe),et.convert(ye),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const Ct=he!==null?qe.get(he).__webglFramebuffer:null;pe.bindFramebuffer(H.FRAMEBUFFER,Ct);const Mt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Wp(H,Mt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,vt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,q),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(vt),H.deleteSync(Mt),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,Z=0){const k=Math.pow(2,-Z),b=Math.floor(M.image.width*k),q=Math.floor(M.image.height*k),Ge=P!==null?P.x:0,Ne=P!==null?P.y:0;at.setTexture2D(M,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,Ge,Ne,b,q),pe.unbindTexture()},this.copyTextureToTexture=function(M,P,Z=null,k=null,b=0,q=0){let Ge,Ne,Te,Ye,Oe,ye,Le,vt,Ct;const Mt=M.isCompressedTexture?M.mipmaps[q]:M.image;if(Z!==null)Ge=Z.max.x-Z.min.x,Ne=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,Ye=Z.min.x,Oe=Z.min.y,ye=Z.isBox3?Z.min.z:0;else{const ft=Math.pow(2,-b);Ge=Math.floor(Mt.width*ft),Ne=Math.floor(Mt.height*ft),M.isDataArrayTexture?Te=Mt.depth:M.isData3DTexture?Te=Math.floor(Mt.depth*ft):Te=1,Ye=0,Oe=0,ye=0}k!==null?(Le=k.x,vt=k.y,Ct=k.z):(Le=0,vt=0,Ct=0);const ct=et.convert(P.format),Yt=et.convert(P.type);let pt;P.isData3DTexture?(at.setTexture3D(P,0),pt=H.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(at.setTexture2DArray(P,0),pt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(P,0),pt=H.TEXTURE_2D),pe.activeTexture(H.TEXTURE0),pe.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,P.flipY),pe.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),pe.pixelStorei(H.UNPACK_ALIGNMENT,P.unpackAlignment);const xn=pe.getParameter(H.UNPACK_ROW_LENGTH),rt=pe.getParameter(H.UNPACK_IMAGE_HEIGHT),F=pe.getParameter(H.UNPACK_SKIP_PIXELS),st=pe.getParameter(H.UNPACK_SKIP_ROWS),Vt=pe.getParameter(H.UNPACK_SKIP_IMAGES);pe.pixelStorei(H.UNPACK_ROW_LENGTH,Mt.width),pe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt.height),pe.pixelStorei(H.UNPACK_SKIP_PIXELS,Ye),pe.pixelStorei(H.UNPACK_SKIP_ROWS,Oe),pe.pixelStorei(H.UNPACK_SKIP_IMAGES,ye);const Nt=M.isDataArrayTexture||M.isData3DTexture,yt=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){const ft=qe.get(M),At=qe.get(P),Zt=qe.get(ft.__renderTarget),xt=qe.get(At.__renderTarget);pe.bindFramebuffer(H.READ_FRAMEBUFFER,Zt.__webglFramebuffer),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let lt=0;lt<Te;lt++)Nt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(M).__webglTexture,b,ye+lt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(P).__webglTexture,q,Ct+lt)),H.blitFramebuffer(Ye,Oe,Ye+Ge,Oe+Ne,Le,vt,Le+Ge,vt+Ne,H.DEPTH_BUFFER_BIT,H.NEAREST);pe.bindFramebuffer(H.READ_FRAMEBUFFER,null),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(b!==0||M.isRenderTargetTexture||qe.has(M)){const ft=qe.get(M),At=qe.get(P);pe.bindFramebuffer(H.READ_FRAMEBUFFER,R),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,B);for(let Zt=0;Zt<Te;Zt++)Nt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ft.__webglTexture,b,ye+Zt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ft.__webglTexture,b),yt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,At.__webglTexture,q,Ct+Zt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,At.__webglTexture,q),b!==0?H.blitFramebuffer(Ye,Oe,Ye+Ge,Oe+Ne,Le,vt,Le+Ge,vt+Ne,H.COLOR_BUFFER_BIT,H.NEAREST):yt?H.copyTexSubImage3D(pt,q,Le,vt,Ct+Zt,Ye,Oe,Ge,Ne):H.copyTexSubImage2D(pt,q,Le,vt,Ye,Oe,Ge,Ne);pe.bindFramebuffer(H.READ_FRAMEBUFFER,null),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else yt?M.isDataTexture||M.isData3DTexture?H.texSubImage3D(pt,q,Le,vt,Ct,Ge,Ne,Te,ct,Yt,Mt.data):P.isCompressedArrayTexture?H.compressedTexSubImage3D(pt,q,Le,vt,Ct,Ge,Ne,Te,ct,Mt.data):H.texSubImage3D(pt,q,Le,vt,Ct,Ge,Ne,Te,ct,Yt,Mt):M.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,Le,vt,Ge,Ne,ct,Yt,Mt.data):M.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,Le,vt,Mt.width,Mt.height,ct,Mt.data):H.texSubImage2D(H.TEXTURE_2D,q,Le,vt,Ge,Ne,ct,Yt,Mt);pe.pixelStorei(H.UNPACK_ROW_LENGTH,xn),pe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rt),pe.pixelStorei(H.UNPACK_SKIP_PIXELS,F),pe.pixelStorei(H.UNPACK_SKIP_ROWS,st),pe.pixelStorei(H.UNPACK_SKIP_IMAGES,Vt),q===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&H.generateMipmap(pt),pe.unbindTexture()},this.initRenderTarget=function(M){qe.get(M).__webglFramebuffer===void 0&&at.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?at.setTextureCube(M,0):M.isData3DTexture?at.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?at.setTexture2DArray(M,0):at.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){$=0,K=0,he=null,pe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=sn._getDrawingBufferColorSpace(e),t.unpackColorSpace=sn._getUnpackColorSpace()}}const Kd={type:"change"},mh={type:"start"},gf={type:"end"},il=new Yl,$d=new Wi,v_=Math.cos(70*U0.DEG2RAD),Cn=new G,fi=2*Math.PI,rn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ic=1e-6;class x_ extends yg{constructor(e,t=null){super(e,t),this.state=rn.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:uo.ROTATE,TWO:uo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Li,this._lastTargetPosition=new G,this._quat=new Li().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ed,this._sphericalDelta=new Ed,this._scale=1,this._panOffset=new G,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new G,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=__.bind(this),this._onPointerDown=S_.bind(this),this._onPointerUp=M_.bind(this),this._onContextMenu=R_.bind(this),this._onMouseWheel=w_.bind(this),this._onKeyDown=T_.bind(this),this._onTouchStart=E_.bind(this),this._onTouchMove=A_.bind(this),this._onMouseDown=y_.bind(this),this._onMouseMove=b_.bind(this),this._interceptControlDown=C_.bind(this),this._interceptControlUp=P_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=rn.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kd),this.update(),this.state=rn.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Cn.copy(t).sub(this.target),Cn.applyQuaternion(this._quat),this._spherical.setFromVector3(Cn),this.autoRotate&&this.state===rn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=fi:n>Math.PI&&(n-=fi),s<-Math.PI?s+=fi:s>Math.PI&&(s-=fi),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(Cn.setFromSpherical(this._spherical),Cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=Cn.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new G(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=Cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(il.origin.copy(this.object.position),il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(il.direction))<v_?this.object.lookAt(this.target):($d.setFromNormalAndCoplanarPoint(this.object.up,this.target),il.intersectPlane($d,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ic||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ic||this._lastTargetPosition.distanceToSquared(this.target)>Ic?(this.dispatchEvent(Kd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fi/60*this.autoRotateSpeed*e:fi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Cn.setFromMatrixColumn(t,0),Cn.multiplyScalar(-e),this._panOffset.add(Cn)}_panUp(e,t){this.screenSpacePanning===!0?Cn.setFromMatrixColumn(t,1):(Cn.setFromMatrixColumn(t,0),Cn.crossVectors(this.object.up,Cn)),Cn.multiplyScalar(e),this._panOffset.add(Cn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Cn.copy(s).sub(this.target);let o=Cn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,a=n.width,r=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function S_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function __(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function M_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gf),this.state=rn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function y_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=rn.DOLLY;break;case ys.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rn.ROTATE}break;case ys.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rn.PAN}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(mh)}function b_(i){switch(this.state){case rn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case rn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case rn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function w_(i){this.enabled===!1||this.enableZoom===!1||this.state!==rn.NONE||(i.preventDefault(),this.dispatchEvent(mh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gf))}function T_(i){this.enabled!==!1&&this._handleKeyDown(i)}function E_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case uo.ROTATE:if(this.enableRotate===!1){this.state=rn.NONE;break}this._handleTouchStartRotate(i),this.state=rn.TOUCH_ROTATE;break;case uo.PAN:if(this.enablePan===!1){this.state=rn.NONE;break}this._handleTouchStartPan(i),this.state=rn.TOUCH_PAN;break;default:this.state=rn.NONE}break;case 2:switch(this.touches.TWO){case uo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=rn.TOUCH_DOLLY_PAN;break;case uo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=rn.TOUCH_DOLLY_ROTATE;break;default:this.state=rn.NONE}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(mh)}function A_(i){switch(this._trackPointer(i),this.state){case rn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case rn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case rn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case rn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=rn.NONE}}function R_(i){this.enabled!==!1&&i.preventDefault()}function C_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fn(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Bs(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Ya(i){return i*i*(3-2*i)}function D_(i,e,t){const n=Math.floor(i),s=Math.floor(e),o=Math.floor(t),a=Ya(i-n),r=Ya(e-s),l=Ya(t-o),c=Bs(n,s,o),h=Bs(n+1,s,o),f=Bs(n,s+1,o),u=Bs(n+1,s+1,o),d=Bs(n,s,o+1),g=Bs(n+1,s,o+1),x=Bs(n,s+1,o+1),p=Bs(n+1,s+1,o+1),m=c+(h-c)*a,S=f+(u-f)*a,y=d+(g-d)*a,_=x+(p-x)*a,A=m+(S-m)*r,E=y+(_-y)*r;return A+(E-A)*l}function $i(i,e,t,n=4){let s=0,o=.5,a=0,r=1;for(let l=0;l<n;l++)s+=D_(i*r,e*r,t*r)*o,a+=o,o*=.5,r*=2.03;return s/a}function sl(i,e){let t=Math.imul(i,374761393)^Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function N_(i,e){const t=Math.floor(i),n=Math.floor(e),s=Ya(i-t),o=Ya(e-n),a=sl(t,n),r=sl(t+1,n),l=sl(t,n+1),c=sl(t+1,n+1),h=a+(r-a)*s,f=l+(c-l)*s;return h+(f-h)*o}function Hs(i,e,t=4){let n=0,s=.5,o=0,a=1;for(let r=0;r<t;r++)n+=N_(i*a,e*a)*s,o+=s,s*=.5,a*=2.03;return n/o}function Q(i,e,t){return i<e?e:i>t?t:i}function me(i,e,t){const n=e-i;if(Math.abs(n)<1e-12)return t<i?0:1;const s=Q((t-i)/n,0,1);return s*s*(3-2*s)}const L_=typeof window<"u"&&(window.matchMedia("(pointer: coarse)").matches||Math.min(window.innerWidth,window.innerHeight)<=820),gn=L_?32:48;function Vi(i,e,t,n){let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2147483647)+Math.imul(n,1274126177);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967295}function Wo(i,e,t,n,s){const o=i*n,a=e*n,r=t*n,l=Math.floor(o),c=Math.floor(a),h=Math.floor(r),f=o-l,u=a-c,d=r-h,g=f*f*(3-2*f),x=u*u*(3-2*u),p=d*d*(3-2*d),m=(l%n+n)%n,S=(c%n+n)%n,y=(h%n+n)%n,_=(m+1)%n,A=(S+1)%n,E=(y+1)%n,v=Vi(m,S,y,s),T=Vi(_,S,y,s),U=Vi(m,A,y,s),C=Vi(_,A,y,s),D=Vi(m,S,E,s),O=Vi(_,S,E,s),Y=Vi(m,A,E,s),R=Vi(_,A,E,s),B=v+(T-v)*g,$=U+(C-U)*g,K=D+(O-D)*g,he=Y+(R-Y)*g,ee=B+($-B)*x,ue=K+(he-K)*x;return ee+(ue-ee)*p}let xl=null,Sl=null;function vf(){if(xl&&Sl)return{texture:xl,cpuData:Sl};const i=gn*gn*gn,e=new Uint8Array(i*4),t=new Float32Array(i),n=8,s=new Float32Array(n*n*n),o=new Float32Array(n*n*n),a=new Float32Array(n*n*n);for(let c=0;c<n;c++)for(let h=0;h<n;h++)for(let f=0;f<n;f++){const u=(c*n+h)*n+f;s[u]=Vi(f,h,c,71),o[u]=Vi(f,h,c,137),a[u]=Vi(f,h,c,251)}let r=0;for(let c=0;c<gn;c++){const h=c/gn,f=h*n,u=Math.floor(f),d=f-u;for(let g=0;g<gn;g++){const x=g/gn,p=x*n,m=Math.floor(p),S=p-m;for(let y=0;y<gn;y++){const _=y/gn,A=_*n,E=Math.floor(A),v=A-E,T=Wo(_,x,h,6,11)*.667+Wo(_,x,h,12,23)*.333,U=Wo(_,x,h,6,37)*.667+Wo(_,x,h,12,53)*.333;let C=8;for(let R=-1;R<=1;R++){const B=(u+R+n)%n;for(let $=-1;$<=1;$++){const K=(m+$+n)%n,he=(B*n+K)*n;for(let ee=-1;ee<=1;ee++){const ue=(E+ee+n)%n,ae=he+ue,le=ee+s[ae]-v,Ee=$+o[ae]-S,N=R+a[ae]-d,j=le*le+Ee*Ee+N*N;j<C&&(C=j)}}}const D=Math.max(0,Math.min(1,1-Math.sqrt(C)*.96)),O=Wo(_,x,h,12,89)*.65+Wo(_,x,h,24,113)*.35;t[r]=T;const Y=r*4;e[Y]=T*255+.5|0,e[Y+1]=U*255+.5|0,e[Y+2]=D*255+.5|0,e[Y+3]=O*255+.5|0,r++}}}const l=new k0(e,gn,gn,gn);return l.format=xi,l.type=Xn,l.minFilter=Mn,l.magFilter=Mn,l.wrapS=yn,l.wrapT=yn,l.wrapR=yn,l.unpackAlignment=1,l.needsUpdate=!0,xl=l,Sl=t,{texture:l,cpuData:t}}function xf(){return xl??vf().texture}const Fc=gn/6,Jd=gn*gn,Uc=gn-1;function lo(i,e,t){const n=Sl??vf().cpuData,s=i*Fc,o=e*Fc,a=t*Fc,r=Math.floor(s),l=Math.floor(o),c=Math.floor(a),h=s-r,f=o-l,u=a-c;let d=r%gn;d<0&&(d+=gn);let g=l%gn;g<0&&(g+=gn);let x=c%gn;x<0&&(x+=gn);const p=d===Uc?0:d+1,m=g===Uc?0:g+1,S=x===Uc?0:x+1,y=x*Jd,_=S*Jd,A=g*gn,E=m*gn,v=n[y+A+d],T=n[y+A+p],U=n[y+E+d],C=n[y+E+p],D=n[_+A+d],O=n[_+A+p],Y=n[_+E+d],R=n[_+E+p],B=v+(T-v)*h,$=U+(C-U)*h,K=D+(O-D)*h,he=Y+(R-Y)*h,ee=B+($-B)*f,ue=K+(he-K)*f;return ee+(ue-ee)*u}const Qd=.215,Sf=.042,_f=Sf*.19,jd=_f*.7,si=.035,gh=1.05,Hn=.18;function $l(i){const e=Q(i,0,1);if(e<=Hn)return 0;const t=(e-Hn)/(1-Hn),n=me(0,.1,t);return t*(.35+.65*n)}const Fe={yTop:1.12,yBottom:-1.02,domeStartNorm:.735,halfWidthTop:.545,halfWidthBottom:.625,halfDepth:.215,fluteX:.165,fluteWidth:.036,fluteDepth:.024,stickWidth:Qd,stickDepth:Sf,stickBevelThickness:_f,stickBevelSize:jd,stickEdgeX:Qd*.5+jd,stickTopY:.54,stickBottomY:-1.48};function vh(i){return i*.55+(.5-.5*Math.cos(i*Math.PI))*.45}function Mf(i){const e=Q(i,0,1);let t=Fe.halfWidthBottom+(Fe.halfWidthTop-Fe.halfWidthBottom)*e;if(e>Fe.domeStartNorm){const n=Q((e-Fe.domeStartNorm)/(1-Fe.domeStartNorm),0,1);t*=Math.sqrt(Math.max(0,1-n*n))}return t}function ur(i,e,t){const n=t.heatSpots;if(n.length===0)return 0;let s=0;for(let o=0;o<n.length;o++){const a=n[o];if(a.heat<=5e-4)continue;const r=i-a.x,l=(e-a.y)*.85,c=r*r+l*l;c>.85||(s+=a.heat*Math.exp(-c/.115))}return Q(s,0,.85)}function ws(i){const e=$l(i),t=me(.4,.975,e),n=t*t,s=-.46,o=Fe.yTop-e*.72,a=Fe.yBottom+e*.14,r=me(.64,.9,e),l=-.88*r*r,c=o+(s-o)*Math.pow(t,1.38)+l,h=a+(s-a)*(n*.9+Math.pow(t,3)*.1)+l,f=1-me(.78,.885,e),u=e>=.895||c-h<.014;return{yTop:c,yBot:h,slideY:l,iceAmount:f,iceGone:u}}const I_={rawMelt:0,m:0,yTop:Fe.yTop,yBot:Fe.yBottom,slideY:0,bodyH:Fe.yTop-Fe.yBottom,iceAmount:1,collapse:0,endRound:0,bulletTaper:0,radialCollapseW:1,radialCollapseD:1,domeStart:Fe.domeStartNorm,botBevel:.072,flatKeep:.86,fluteCenter:Fe.fluteX,waveScale:1,erodeScale:0,carveGate:0,so:0,timeMacroY:0,timeRivY:0,poolAmt:0,w0:1,w1:1,w2:1,w3:1,pullL0:0,pullL1:0,pullR0:0,pullR1:0,hasHeatSpots:!1},F_={yBase:0,hNorm:0,bodyHalfW:.5,halfW:.5,halfD:.2,capFactor:1,domeDepthFactor:1,bodyBlend:1,invExpX:.5,invExpZ:.5,fluteVerticalMask:0,botProximity:0,rimBellyMask:0,xL0:-.35,xL1:-.2,xR0:.2,xR1:.35,invSL0:10,invSL1:10,invSR0:10,invSR1:10};function yf(i,e=I_){const t=Q(i.melt,0,1),n=$l(t),{yTop:s,yBot:o,slideY:a,iceAmount:r}=ws(t),l=me(.4,.975,n),c=me(.72,.94,n),h=me(.06,.72,n);e.rawMelt=t,e.m=n,e.yTop=s,e.yBot=o,e.slideY=a,e.bodyH=Math.max(.02,s-o),e.iceAmount=r,e.collapse=l,e.endRound=c,e.bulletTaper=h,e.radialCollapseW=1-Math.pow(l,1.58)*.85,e.radialCollapseD=1-Math.pow(l,1.5)*.88,e.domeStart=Fe.domeStartNorm-h*.14-c*.08,e.botBevel=.072+h*.24+c*.16,e.flatKeep=.86*(1-h*.62)*(1-c*.85),e.fluteCenter=Fe.fluteX*(1-n*.25),e.waveScale=(1-l*.78)*r,e.erodeScale=me(.3,.52,t)*(1-l*.42)*r,e.carveGate=me(Hn-.02,Hn+.05,t),e.so=i.seedOffset,e.timeMacroY=i.time*.012,e.timeRivY=i.time*.035;const f=1-me(.66,.9,n),u=me(.008,.18,n);e.poolAmt=Q(i.bottomPool??gh,0,2.2)*u*f;const d=i.bottomLobes,g=i.pendantPull,x=i.time*.65;e.w0=(d?d[0]:1)*(1+.04*Math.sin(x+.4)),e.w1=(d?d[1]:1)*(1+.04*Math.sin(x*1.15+1.9)),e.w2=(d?d[2]:1)*(1+.04*Math.sin(x*.95+3.4)),e.w3=(d?d[3]:1)*(1+.04*Math.sin(x*1.1+4.8)),e.pullL0=g?g[0]:0,e.pullL1=g?g[1]:0,e.pullR0=g?g[2]:0,e.pullR1=g?g[3]:0;let p=!1;const m=i.heatSpots;for(let S=0;S<m.length;S++)if(m[S].heat>5e-4){p=!0;break}return e.hasHeatSpots=p,e}function bf(i,e,t,n,s,o,a,r,l,c,h){const f=(1-e*.44*(.62+.58*i))*s;let u=(Fe.halfWidthBottom+(Fe.halfWidthTop-Fe.halfWidthBottom)*i)*f;u*=1-t*(1-n*.55)*.22*me(.35,.92,i);const d=(1-e*.48*(.68+.45*i))*o;let g=Fe.halfDepth*d,x=1,p=1;if(i>a){const m=Q((i-a)/Math.max(.1,1-a),0,1),S=Math.sqrt(Math.max(0,1-m*m));x=S,p=Math.pow(S,.74)}if(i<r){const m=Q(1-i/r,0,1),S=Math.sqrt(Math.max(0,1-m*m));x*=l+(1-l)*S,p*=c?Math.max(.22,S):S}h.bodyHalfW=u,h.halfW=u*x,h.halfD=g*p,h.capFactor=x,h.domeDepthFactor=p}const ss={bodyHalfW:0,halfW:0,halfD:0,capFactor:1,domeDepthFactor:1};function wf(i,e,t=F_){const n=e.yBot+(e.yTop-e.yBot)*i,s=Q((n-e.yBot)/e.bodyH,0,1);bf(s,e.m,e.bulletTaper,e.endRound,e.radialCollapseW,e.radialCollapseD,e.domeStart,e.botBevel,e.flatKeep,!1,ss);const o=me(.03,.14,s)*me(.98,.78,s)*(1-e.bulletTaper*.65);if(t.yBase=n,t.hNorm=s,t.bodyHalfW=ss.bodyHalfW,t.halfW=ss.halfW,t.halfD=ss.halfD,t.capFactor=ss.capFactor,t.domeDepthFactor=ss.domeDepthFactor,t.bodyBlend=o,t.invExpX=2/(2+1.15*o),t.invExpZ=2/(2+1.45*o),t.fluteVerticalMask=me(.06,.15,s)*me(.92,.78,s),s<.24&&e.poolAmt>.005){t.botProximity=Math.pow(me(.24,0,s),1.4),t.rimBellyMask=me(.2,.036,s)*me(0,.025,s);const a=Fe.stickWidth*.5,r=Math.max(a+.08,ss.bodyHalfW*.86),l=Math.max(.075,r-a);t.xL0=-(a+l*.62),t.xL1=-(a+l*.2),t.xR0=+(a+l*.24),t.xR1=+(a+l*.65),t.invSL0=1/Math.max(.056,l*.28),t.invSL1=1/Math.max(.046,l*.23),t.invSR0=1/Math.max(.058,l*.28),t.invSR1=1/Math.max(.05,l*.24)}else t.botProximity=0,t.rimBellyMask=0;return t}function Tf(i,e,t,n,s,o){let a=n.yBase;const r=i>=0?1:-1,l=e>=0?1:-1,c=Math.abs(i),h=Math.abs(e);let f=r*Math.pow(c,n.invExpX)*n.halfW,u=l*Math.pow(h,n.invExpZ)*n.halfD;const d=t.hasHeatSpots?ur(f,a,s)*t.carveGate:0,g=Q(t.m+d*.55,0,1),x=Math.max(0,1-me(.04,.58,g));if(n.fluteVerticalMask>0&&x>0&&h>.18){const D=me(.18,.52,h),O=Fe.fluteWidth*(1+g*.85),Y=1/O,R=(f+t.fluteCenter)*Y,B=(f-t.fluteCenter)*Y,$=Math.exp(-R*R*1.45)+Math.exp(-B*B*1.45),K=(Math.abs(f+t.fluteCenter)-O*1.05)/(O*.65),he=(Math.abs(f-t.fluteCenter)-O*1.05)/(O*.65),ee=Math.exp(-K*K)+Math.exp(-he*he);u+=l*(-$*Fe.fluteDepth+ee*Fe.fluteDepth*.16)*n.fluteVerticalMask*D*x}if(d>.001){const D=d*.22*(.4+.6*n.bodyBlend)*t.iceAmount;f*=1-D*.55,u*=1-D*.78,a-=d*.065*me(.05,.3,n.hNorm)*t.iceAmount}const p=t.so,m=a-t.slideY,S=lo(f*2.4+p,m*1.7+t.timeMacroY,u*2.4)-.5,y=lo(f*7.8+p*1.7,m*1.9+t.timeRivY,u*4.5)-.5,_=me(.08,.45,g),A=_>0||t.erodeScale>0?lo(f*18+p*2.3,m*17,u*18)-.5:0,E=1-n.botProximity*.84;let v=0;if(t.erodeScale>.002&&E>.02){const D=lo(f*34+p*4.1,m*36,u*34),O=(D-.5)*1.18+(Math.abs(D-.5)-.22)*.55;v=(A*.02+O*.018)*t.erodeScale*E}const T=(.004+g*.052)*t.waveScale,U=S*T*(.65+.55*c)+y*(.0025+g*.018)*t.waveScale+A*(.014*_)*t.waveScale;f+=r*(U+v)*(.48+.52*c)*n.capFactor,u+=l*(U+v*.42)*.78*n.domeDepthFactor;let C=0;if(n.botProximity>0){const D=Fe.stickWidth*.5,O=lo(f*3.6+p*1.1,p*.5,Math.abs(u)*3.2),Y=Math.max(0,O-.36)*.014,R=Math.exp(-Math.pow(Math.abs(f-n.xL0)*n.invSL0,2.2)),B=Math.exp(-Math.pow(Math.abs(f-n.xL1)*n.invSL1,2.2)),$=Math.exp(-Math.pow(Math.abs(f-n.xR0)*n.invSR0,2.2)),K=Math.exp(-Math.pow(Math.abs(f-n.xR1)*n.invSR1,2.2)),he=R*(.04*t.w0+Math.max(-.012,t.pullL0*.024)),ee=B*(.028*t.w1+Math.max(-.01,t.pullL1*.018)),ue=$*(.038*t.w2+Math.max(-.012,t.pullR0*.022)),ae=K*(.026*t.w3+Math.max(-.009,t.pullR1*.016)),le=(f+D+.01)/.048,Ee=(f-D-.01)/.048,N=f/(D*.68),j=me(.08,.24,t.m)*(1-me(.6,.78,t.m)),W=Math.exp(-le*le)*(.022+.024*j)*(.7+.3*t.w1),I=Math.exp(-Ee*Ee)*(.018+.022*j)*(.7+.3*t.w2),X=Math.exp(-N*N),te=.74+.26*(1-Math.min(1,Math.abs(u)/Math.max(.04,n.halfD))),ce=((Y+he+ee+ue+ae)*(1-X*.88)+W+I)*t.poolAmt,ie=.088,Me=ie*ce/(ie+ce)*te*n.botProximity;a-=Me,C=Q(Me/.048,0,1);const se=(.006+Me*.34)*n.rimBellyMask;u+=l*se*(.58+.42*h)*(1-X*.58),f+=r*se*.16*c}o.x=f,o.y=a,o.z=u,o.hang=C}const Ef={depth:0,dx:0,dz:0,dyBot:0,dyTop:0};function Af(i,e,t,n,s=Ef){const o=Q(n.melt,0,1),a=$l(o),{yTop:r,yBot:l,iceAmount:c,iceGone:h}=ws(o);if(h)return s.depth=-99,s.dx=-99,s.dz=-99,s.dyBot=-99,s.dyTop=-99,s;const f=me(.4,.975,a),u=me(.72,.94,a),d=Q(e,l,r),g=Q((d-l)/Math.max(.02,r-l),0,1),x=me(.06,.72,a),p=1-Math.pow(f,1.58)*.85,m=1-Math.pow(f,1.5)*.88,S=Fe.domeStartNorm-x*.14-u*.08,y=.072+x*.24+u*.16,_=.86*(1-x*.62)*(1-u*.85);bf(g,a,x,u,p,m,S,y,_,!0,ss);let A=ss.halfW,E=ss.halfD;const v=me(Hn-.02,Hn+.05,o),U=ur(i,d,n)*v*.22*c;A*=1-U*.55,E*=1-U*.78;const C=Math.abs(i)/Math.max(.015,A),D=Math.abs(t)/Math.max(.012,E),O=2.6-x*.5,Y=Math.pow(Math.pow(C,O)+Math.pow(D,O),1/O),R=Math.min(A,E)+(Math.max(A,E)-Math.min(A,E))*(C/Math.max(1e-4,C+D)),B=(1-Y)*R,$=r-e,K=e-l,he=Math.min($,K);if(s.dx=A-Math.abs(i),s.dz=E-Math.abs(t),s.dyBot=K,s.dyTop=$,B>=0&&he>=0)s.depth=Math.min(B,he);else{const ee=Math.max(0,-B),ue=Math.max(0,-he);s.depth=-Math.hypot(ee,ue)}return s}function zi(i,e,t,n){return Af(i,e,t,n,Ef).depth}const ls=typeof window<"u"&&(window.matchMedia("(pointer: coarse)").matches||Math.min(window.innerWidth,window.innerHeight)<=820),Rf=ls?512:1024,Cf=ls?170:340;function Pl(i){const e=Math.sin(i),t=Math.cos(i),n=.86+.14*me(-.3,.55,e),s=1-.18*me(-.35,-.98,e)*(1-Math.abs(t)*.4),o=1-.1*Math.pow(Math.max(0,e),6),a=.84+.12*Math.pow(Math.abs(t),2);return n*s*o*a*.9}function U_(i=103){const e=ls?256:512,t=document.createElement("canvas"),n=document.createElement("canvas"),s=document.createElement("canvas");t.width=n.width=s.width=e,t.height=n.height=s.height=e;const o=t.getContext("2d"),a=n.getContext("2d"),r=s.getContext("2d"),l=o.createImageData(e,e),c=a.createImageData(e,e),h=r.createImageData(e,e),f=Fn(i),u=f()*30,d=28,g=[];for(let S=0;S<d;S++){const y=S/d*Math.PI*2-Math.PI+(f()-.5)*.06,A=Pl(y)*(.945+f()*.025);g.push({x:Math.cos(y)*A,y:Math.sin(y)*A})}for(let S=0;S<e;S++){const y=1-S/(e-1)*2;for(let _=0;_<e;_++){const A=_/(e-1)*2-1,E=Math.hypot(A,y),v=Math.atan2(y,A),T=Pl(v),U=E/Math.max(.001,T),C=Hs(A*28+u,y*28+13.1,4),D=Hs(A*7.5+u,y*7.5+47.3,3),O=Hs(A*54+u,y*54+92.7,2),Y=(D-.5)*2.8,R=.5+.5*Math.sin(v*24+Y),B=.5+.5*Math.sin(v*42-Y*.7),$=(Math.pow(R,3.2)*.68+Math.pow(B,4.5)*.32)*me(.14,.36,U)*me(.95,.7,U),K=y-.06,he=Math.hypot(A*1.42,K*1.04),ee=(D-.5)*.14+Math.cos(v*5+u)*.032,ue=1-me(.14,.44,he+ee),ae=1-me(.03,.2,Math.hypot(A*1.5,(y-.04)*1.1)),le=me(.42,.88,U),Ee=me(.74,.99,U);let N=200+(C-.5)*32+(O-.5)*14,j=13+(C-.5)*14,W=13+(C-.5)*12;N=N*(1-le*.28)+136*(le*.28),j=j*(1-le*.78)+3*(le*.78),W=W*(1-le*.66)+8*(le*.66),N=N*(1-Ee*.56)+64*(Ee*.56),j*=1-Ee*.78,W*=1-Ee*.62;const I=me(.91,.68,U);N=N+(254-N)*$*.56*I,j=j+(176-j)*$*.56*I,W=W+(164-W)*$*.52*I;const X=Q(ue*(.84+C*.16),0,1);N=N+(252-N)*X*.8,j=j+(188-j)*X*.8,W=W+(172-W)*X*.76;const te=Math.exp(-Math.pow((he+ee-.2)/.085,2));N=N+(255-N)*te*.42,j=j+(214-j)*te*.44,W=W+(198-W)*te*.4,N=N+(226-N)*ae*.52,j=j+(68-j)*ae*.52,W=W+(62-W)*ae*.48;let ce=128+(C-.5)*48+(O-.5)*26-$*24-ae*32,ie=(146+X*94-le*58+(C-.5)*24)*(1-Ee*.48);if(U>.84&&U<1.08)for(let fe=0;fe<d;fe++){const de=g[fe],we=A-de.x,Re=y-de.y,ze=we*we+Re*Re;if(ze<.001936){const De=Math.sqrt(ze),it=me(.044,.018,De);if(N*=1-it*.42,j*=1-it*.55,W*=1-it*.55,ce-=it*56,De<.016){const be=me(.016,.007,De);N=N*(1-be)+188*be,j=j*(1-be)+126*be,W=W*(1-be)+46*be,ce+=be*72,ie*=1-be*.78}}}const re=(S*e+_)*4;l.data[re]=Q(Math.round(N),0,255),l.data[re+1]=Q(Math.round(j),0,255),l.data[re+2]=Q(Math.round(W),0,255),l.data[re+3]=255;const Me=Q(Math.round(ce),0,255);c.data[re]=c.data[re+1]=c.data[re+2]=Me,c.data[re+3]=255;const se=Q(Math.round(ie),0,255);h.data[re]=h.data[re+1]=h.data[re+2]=se,h.data[re+3]=255}}o.putImageData(l,0,0),a.putImageData(c,0,0),r.putImageData(h,0,0);const x=new Tn(t);x.colorSpace=Rn,x.anisotropy=8;const p=new Tn(n);p.anisotropy=4;const m=new Tn(s);return m.anisotropy=4,{albedo:x,bump:p,translucency:m}}function B_(i=207){const e=ls?256:512,t=document.createElement("canvas"),n=document.createElement("canvas"),s=document.createElement("canvas");t.width=n.width=s.width=e,t.height=n.height=s.height=e;const o=t.getContext("2d"),a=n.getContext("2d"),r=s.getContext("2d"),l=o.createImageData(e,e),c=a.createImageData(e,e),h=r.createImageData(e,e),u=Fn(i)()*40;for(let p=0;p<e;p++){const m=p/(e-1),S=m*Math.PI,y=Math.sin(S),_=Math.cos(S);for(let A=0;A<e;A++){const v=A/(e-1)*Math.PI*2,T=Math.cos(v)*y,U=_,C=Math.sin(v)*y,D=lo(T*.56+u,U*.56,C*.56),O=lo(T*2.9+u+4.3,U*2.9,C*2.9);let Y=12+O*11,R=13+O*12,B=30+O*22;const $=me(.42,.78,D)*me(.06,.22,m);Y=Y+(44-Y)*$*.42,R=R+(50-R)*$*.44,B=B+(82-B)*$*.48;const K=.5+.5*Math.cos(v*5),he=1-me(.03,.095,m),ee=Math.exp(-Math.pow((m-(.095+K*.032))/.025,2));Y=Y+(72-Y)*ee*.48,R=R+(62-R)*ee*.44,B=B+(82-B)*ee*.48,Y=Y*(1-he*.78)+12*(he*.78),R=R*(1-he*.82)+9*(he*.82),B=B*(1-he*.78)+15*(he*.78);const ue=34+$*56+(O-.5)*22+ee*38,ae=128+(O-.5)*56-he*72+ee*64,le=(p*e+A)*4;l.data[le]=Q(Math.round(Y),0,255),l.data[le+1]=Q(Math.round(R),0,255),l.data[le+2]=Q(Math.round(B),0,255),l.data[le+3]=255;const Ee=Q(Math.round(ae),0,255);c.data[le]=c.data[le+1]=c.data[le+2]=Ee,c.data[le+3]=255;const N=Q(Math.round(ue),25,235);h.data[le]=h.data[le+1]=h.data[le+2]=N,h.data[le+3]=255}}o.putImageData(l,0,0),a.putImageData(c,0,0),r.putImageData(h,0,0);const d=new Tn(t);d.colorSpace=Rn,d.wrapS=yn,d.anisotropy=8;const g=new Tn(n);g.wrapS=yn;const x=new Tn(s);return x.wrapS=yn,{albedo:d,bump:g,roughness:x}}function k_(i=311){const e=ls?128:256,t=ls?256:512,n=document.createElement("canvas"),s=document.createElement("canvas");n.width=s.width=e,n.height=s.height=t;const o=n.getContext("2d"),a=s.getContext("2d"),r=o.createImageData(e,t),l=a.createImageData(e,t),h=Fn(i)()*50;for(let A=0;A<t;A++){const E=A/(t-1);for(let v=0;v<e;v++){const T=v/(e-1),U=Hs(T*4.2+h,E*1.4+5.1,3)*.42,C=Hs(T*36+U*9+h,E*2.5+21.3,4),D=Hs(T*135+h,E*12+54.7,2),O=Hs(T*210+h,E*46+87.2,2),Y=.5+.5*Math.sin((T*18+U*12)*Math.PI),R=me(.68,.9,O)*26;let B=186+(C-.5)*44-Y*18+(D-.5)*22-R,$=132+(C-.5)*38-Y*18+(D-.5)*18-R*.9,K=82+(C-.5)*28-Y*14+(D-.5)*14-R*.7;const he=me(.32,.5,Math.abs(T-.5));B*=1-he*.16,$*=1-he*.18,K*=1-he*.16;const ee=1-me(.16,.46,E+(C-.5)*.08);B=B*(1-ee*.12)+158*(ee*.1),$=$*(1-ee*.24),K=K*(1-ee*.26);const ue=128+(D-.5)*76+(C-.5)*44-R*1.4,ae=(A*e+v)*4;r.data[ae]=Q(Math.round(B),0,255),r.data[ae+1]=Q(Math.round($),0,255),r.data[ae+2]=Q(Math.round(K),0,255),r.data[ae+3]=255;const le=Q(Math.round(ue),0,255);l.data[ae]=l.data[ae+1]=l.data[ae+2]=le,l.data[ae+3]=255}}o.putImageData(r,0,0),a.putImageData(l,0,0);const f=new Tn(n);f.colorSpace=Rn,f.anisotropy=8;const u=new Tn(s);u.anisotropy=4;const d=Rf,g=Cf,x=document.createElement("canvas");x.width=d,x.height=g;const p=x.getContext("2d"),m=(A,E,v,T,U)=>{const C=Array.from(E),D=C.map(R=>A.measureText(R).width),O=D.reduce((R,B)=>R+B,0)+U*Math.max(0,C.length-1);let Y=v-O*.5;for(let R=0;R<C.length;R++)A.fillText(C[R],Y+D[R]*.5,T),Y+=D[R]+U},S=()=>{const A=document.createElement("canvas");A.width=d,A.height=g;const E=A.getContext("2d"),v=document.createElement("canvas");v.width=d,v.height=g;const T=v.getContext("2d"),U=(R,B)=>{R.clearRect(0,0,d,g),R.save(),R.filter=B>0?`blur(${B}px)`:"none",R.fillStyle="#ffffff",R.textAlign="center",R.textBaseline="middle";const $=d/1024;R.font=`700 ${Math.round(84*$)}px "IBM Plex Sans", "Inter", "Helvetica Neue", system-ui, sans-serif`,m(R,"THEO TILLBERG",d*.5,g*.34,9*$),R.font=`600 ${Math.round(62*$)}px "IBM Plex Sans", "Inter", "Helvetica Neue", system-ui, sans-serif`,m(R,"CODEVEMBER 26 - MELT",d*.5,g*.69,4.5*$),R.restore()},C=d/1024;U(E,2.2*C),U(T,5.4*C);const D=E.getImageData(0,0,d,g).data,O=T.getImageData(0,0,d,g).data,Y=p.createImageData(d,g);for(let R=0;R<Y.data.length;R+=4)Y.data[R]=D[R+3],Y.data[R+1]=O[R+3],Y.data[R+2]=0,Y.data[R+3]=255;p.putImageData(Y,0,0)};S();const y=new Tn(x);y.anisotropy=8,y.generateMipmaps=!0,y.minFilter=Ss,y.magFilter=Mn,y.wrapS=wi,y.wrapT=wi;let _=!1;return y.addEventListener("dispose",()=>{_=!0}),typeof document<"u"&&document.fonts&&document.fonts.ready&&(!document.fonts.check||!document.fonts.check('700 84px "IBM Plex Sans"'))&&document.fonts.ready.then(()=>{_||(S(),y.needsUpdate=!0)}),{albedo:f,bump:u,carving:y}}function Fi(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,t}function Xs(i,e,t){return Hs(i,e,t)}function O_(i){const e=ls?128:256,t=Fi(e,e),n=Fi(e,e),s=Fi(e,e),o=t.getContext("2d"),a=n.getContext("2d"),r=s.getContext("2d"),l=o.createImageData(e,e),c=a.createImageData(e,e),h=r.createImageData(e,e),f=i*11.7;for(let x=0;x<e;x++)for(let p=0;p<e;p++){const m=p/e,S=x/e,y=Xs(m*9+f,S*9,3),_=Xs(m*28+f*1.4,S*28,2),A=Xs(m*62+f*2.1,S*62,2),E=me(.56,.92,A),v=212+y*32+(_-.5)*16+E*10,T=Q(v+8,0,255),U=Q(v-4,0,255),C=Q(v-2,0,255),D=Q(104+y*62+_*52+E*36,0,255),O=Q(88+E*86+(1-y)*44,0,255),Y=(x*e+p)*4;l.data[Y]=T,l.data[Y+1]=U,l.data[Y+2]=C,l.data[Y+3]=255,c.data[Y]=c.data[Y+1]=c.data[Y+2]=D,c.data[Y+3]=255,h.data[Y]=h.data[Y+1]=h.data[Y+2]=O,h.data[Y+3]=255}o.putImageData(l,0,0),a.putImageData(c,0,0),r.putImageData(h,0,0);const u=new Tn(t);u.colorSpace=Rn,u.wrapS=u.wrapT=yn;const d=new Tn(n);d.wrapS=d.wrapT=yn;const g=new Tn(s);return g.wrapS=g.wrapT=yn,{albedo:u,bump:d,roughness:g}}function z_(i){const e=ls?128:256,t=Fi(e,e),n=Fi(e,e),s=Fi(e,e),o=t.getContext("2d"),a=n.getContext("2d"),r=s.getContext("2d"),l=o.createImageData(e,e),c=a.createImageData(e,e),h=r.createImageData(e,e),f=i*15.3;for(let x=0;x<e;x++)for(let p=0;p<e;p++){const m=p/e,S=x/e,y=Xs(m*6+f,S*6,3),_=Xs(m*28+f*2.1,S*28,3),A=me(.6,.88,y),E=Q(44+y*24+A*12,0,255),v=Q(22+y*14+A*7,0,255),T=Q(12+y*8+A*4,0,255),U=Q(100+_*85+y*45,0,255),C=Q(92+_*75+(1-A)*28,0,255),D=(x*e+p)*4;l.data[D]=E,l.data[D+1]=v,l.data[D+2]=T,l.data[D+3]=255,c.data[D]=c.data[D+1]=c.data[D+2]=U,c.data[D+3]=255,h.data[D]=h.data[D+1]=h.data[D+2]=C,h.data[D+3]=255}o.putImageData(l,0,0),a.putImageData(c,0,0),r.putImageData(h,0,0);const u=new Tn(t);u.colorSpace=Rn,u.wrapS=u.wrapT=yn;const d=new Tn(n);d.wrapS=d.wrapT=yn;const g=new Tn(s);return g.wrapS=g.wrapT=yn,{albedo:u,bump:d,roughness:g}}function V_(i){const e=ls?128:256,t=Fi(e,e),n=Fi(e,e),s=Fi(e,e),o=t.getContext("2d"),a=n.getContext("2d"),r=s.getContext("2d"),l=o.createImageData(e,e),c=a.createImageData(e,e),h=r.createImageData(e,e),f=i*9.3;for(let x=0;x<e;x++)for(let p=0;p<e;p++){const m=p/e,S=x/e,y=Math.sin(m*Math.PI*22+f)*Math.sin(S*Math.PI*10+f*.7),_=me(.35,.95,y*.5+.5),A=Xs(m*12+f,S*12,3),E=me(.36,.5,Math.abs(S-.5));let v=248+A*7-_*12,T=212+A*18-_*18,U=26+A*24+E*145;v=Q(v+E*6,0,255),T=Q(T+E*28,0,255),U=Q(U,0,255);const C=Q(155-_*95+A*35,0,255),D=Q(82+E*90+_*30,0,255),O=(x*e+p)*4;l.data[O]=v,l.data[O+1]=T,l.data[O+2]=U,l.data[O+3]=255,c.data[O]=c.data[O+1]=c.data[O+2]=C,c.data[O+3]=255,h.data[O]=h.data[O+1]=h.data[O+2]=D,h.data[O+3]=255}o.putImageData(l,0,0),a.putImageData(c,0,0),r.putImageData(h,0,0);const u=new Tn(t);u.colorSpace=Rn,u.wrapS=u.wrapT=yn;const d=new Tn(n);d.wrapS=d.wrapT=yn;const g=new Tn(s);return g.wrapS=g.wrapT=yn,{albedo:u,bump:d,roughness:g}}function G_(i,e){const t=ls?128:256,n=Fi(t,t),s=Fi(t,t),o=Fi(t,t),a=n.getContext("2d"),r=s.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(t,t),h=r.createImageData(t,t),f=l.createImageData(t,t),u=i*13.9;for(let p=0;p<t;p++)for(let m=0;m<t;m++){const S=m/t,y=p/t,_=Xs(S*20+u,y*20,4),A=me(.28,.78,Xs(S*42+u*1.7,y*42,2)),E=me(.68,.94,_);let v,T,U;e==="dark"?(v=Q(20+_*20+E*12-(1-A)*8,8,64),T=Q(15+_*16+E*9-(1-A)*7,7,52),U=Q(14+_*14+E*8-(1-A)*6,7,48)):(v=Q(146+_*52-(1-A)*26,84,218),T=Q(102+_*42-(1-A)*22,54,174),U=Q(56+_*28-(1-A)*18,28,116));const C=Q(65+_*125+A*65,0,255),D=Q(195+(1-A)*48+_*18,0,255),O=(p*t+m)*4;c.data[O]=v,c.data[O+1]=T,c.data[O+2]=U,c.data[O+3]=255,h.data[O]=h.data[O+1]=h.data[O+2]=C,h.data[O+3]=255,f.data[O]=f.data[O+1]=f.data[O+2]=D,f.data[O+3]=255}a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(f,0,0);const d=new Tn(n);d.colorSpace=Rn,d.wrapS=d.wrapT=yn;const g=new Tn(s);g.wrapS=g.wrapT=yn;const x=new Tn(o);return x.wrapS=x.wrapT=yn,{albedo:d,bump:g,roughness:x}}const Dl=new Map;function Ro(i,e){const t=Dl.get(i);if(t)return t;const n=e();return Dl.set(i,n),n}function hr(i){return Ro(`strawberry:${i}`,()=>U_(i))}function ca(i){return Ro(`blueberry:${i}`,()=>B_(i))}function H_(i){return Ro(`wood:${i}`,()=>k_(i))}function xh(i){return Ro(`raspberry:${i}`,()=>O_(i))}function Sh(i){return Ro(`chocolate:${i}`,()=>z_(i))}function _h(i){return Ro(`lemon:${i}`,()=>V_(i))}function ua(i,e){return Ro(`kaksmulor:${e}:${i}`,()=>G_(i,e))}function W_(){for(const i of Dl.values())for(const e of Object.values(i))e instanceof Yn&&e.dispose();Dl.clear()}function X_(i){const e=new cr(i),t=new ii;t.background=new Ut(12100506);const n=[],s=[],o=(u,d,g,x,p)=>{const m=new qs(u,d);n.push(m);const S=new Qt(m,g);S.position.set(x[0],x[1],x[2]),p&&S.lookAt(p[0],p[1],p[2]),t.add(S)},a=new zs({color:new Ut(3.2,2.95,2.75),side:Wn}),r=new zs({color:new Ut(3.6,3.5,3.45),side:Wn}),l=new zs({color:new Ut(3.4,3.3,3.2),side:Wn}),c=new zs({color:new Ut(2.4,2.28,2.18),side:Wn}),h=new zs({color:new Ut(.08,.06,.07),side:Wn});s.push(a,r,l,c,h),o(14,14,a,[0,.2,-6.5]),o(2,12,r,[-5.8,.5,2.2],[0,.3,0]),o(2.2,12,l,[5.8,.6,2],[0,.3,0]),o(8,3,c,[0,6.2,1],[0,0,0]),o(3.4,9,h,[-4,0,5.2],[0,0,0]),o(3.4,9,h,[4,0,5.2],[0,0,0]);const f=e.fromScene(t,.025);e.dispose();for(const u of n)u.dispose();for(const u of s)u.dispose();return f.texture}const dr=[{id:"mango",label:"Mango",swatch:"#f5a61c",sigma:[.22,1.52,8.6],core:[1.68,1.18,.2],mid:[1.46,.72,.06],deep:[.98,.3,.02],waterCloudiness:.22,creamAlbedo:[.92,.46,.035],creamSss:[1.14,.64,.09],creamDeep:[.56,.2,.01],stain:[.95,.6,.1],dropSigma:[.22,1.2,4.4]},{id:"lemon",label:"Lemon",swatch:"#f2de41",sigma:[.26,.4,6.8],core:[1.62,1.56,.44],mid:[1.38,1.24,.16],deep:[.96,.78,.05],waterCloudiness:.08,creamAlbedo:[.92,.74,.16],creamSss:[1.12,.94,.28],creamDeep:[.6,.43,.05],stain:[.94,.84,.22],dropSigma:[.2,.32,3.2]},{id:"orange",label:"Orange",swatch:"#f26d1d",sigma:[.2,3.05,9.4],core:[1.66,.82,.16],mid:[1.44,.4,.05],deep:[.98,.14,.02],waterCloudiness:.1,creamAlbedo:[.9,.28,.045],creamSss:[1.14,.44,.1],creamDeep:[.54,.11,.014],stain:[.94,.42,.09],dropSigma:[.2,2.05,4.8]},{id:"watermelon",label:"Watermelon",swatch:"#f24d64",sigma:[.28,5.15,4.15],core:[1.58,.58,.56],mid:[1.32,.22,.3],deep:[.84,.05,.14],waterCloudiness:.02,creamAlbedo:[.84,.15,.22],creamSss:[1.08,.26,.34],creamDeep:[.42,.048,.09],stain:[.93,.28,.38],dropSigma:[.24,3,2.5]},{id:"strawberry",label:"Strawberry",swatch:"#e83845",sigma:[.4,6.15,5.8],core:[1.48,.54,.4],mid:[1.2,.2,.19],deep:[.76,.03,.08],waterCloudiness:0,creamAlbedo:[.76,.085,.115],creamSss:[1.04,.18,.2],creamDeep:[.34,.024,.042],stain:[.88,.26,.32],dropSigma:[.26,3.45,3.25]},{id:"raspberry",label:"Raspberry",swatch:"#c81c5b",sigma:[.68,7.6,4.15],core:[1.4,.26,.52],mid:[1.04,.07,.28],deep:[.54,.02,.14],waterCloudiness:.08,creamAlbedo:[.4,.052,.102],creamSss:[.64,.11,.19],creamDeep:[.15,.016,.036],stain:[.78,.14,.36],dropSigma:[.44,4.3,2.35]},{id:"blueberry",label:"Blueberry",swatch:"#4a3da8",sigma:[4.55,6.2,1.15],core:[.56,.42,1.36],mid:[.24,.16,.9],deep:[.1,.05,.44],waterCloudiness:.14,creamAlbedo:[.1,.36,.72],creamSss:[.24,.54,.94],creamDeep:[.035,.15,.42],stain:[.3,.22,.64],dropSigma:[2.75,3.6,.72]},{id:"banana",label:"Banana",swatch:"#ebd367",sigma:[.4,.78,3.9],core:[1.54,1.4,.76],mid:[1.28,1.08,.38],deep:[.88,.68,.18],waterCloudiness:.42,creamAlbedo:[.9,.72,.24],creamSss:[1.1,.9,.36],creamDeep:[.58,.4,.08],stain:[.86,.74,.36],dropSigma:[.32,.62,2.15]},{id:"chocolate",label:"Chocolate",swatch:"#57301e",sigma:[5.2,8.9,13],core:[.46,.21,.1],mid:[.24,.1,.04],deep:[.1,.035,.015],waterCloudiness:.66,creamAlbedo:[.21,.092,.045],creamSss:[.36,.165,.085],creamDeep:[.075,.028,.012],stain:[.32,.15,.08],dropSigma:[2.8,4.9,6.8]}],_l=Object.fromEntries(dr.map(i=>[i.id,i])),ha=[{id:"blueberry",label:"Blueberry",swatch:"#272452"},{id:"chocolate",label:"Chocolate",swatch:"#3d2013"},{id:"shaved-lemon",label:"Shaved lemon",swatch:"#f5d738"},{id:"strawberry",label:"Strawberry",swatch:"#d92836"},{id:"raspberry",label:"Raspberry",swatch:"#b9164d"},{id:"kaksmulor",label:"Kaksmulor",swatch:"#302420"}],ea={base:"water",flavors:["strawberry"],toppings:["strawberry","blueberry"]},xo=[{id:"berry-classic",name:"Berry Classic",seed:1,recipe:{base:"water",flavors:["strawberry"],toppings:["strawberry","blueberry"]}},{id:"mango-sunrise",name:"Mango Sunrise",seed:4,recipe:{base:"water",flavors:["mango","orange"],toppings:["raspberry","shaved-lemon"]}},{id:"pink-lemonade",name:"Pink Lemonade",seed:7,recipe:{base:"water",flavors:["raspberry","lemon"],toppings:["raspberry","shaved-lemon"]}},{id:"blueberry-ice",name:"Blueberry Ice",seed:9,recipe:{base:"water",flavors:["blueberry"],toppings:["blueberry","shaved-lemon"]}},{id:"watermelon-rush",name:"Watermelon",seed:12,recipe:{base:"water",flavors:["watermelon"],toppings:["strawberry","chocolate"]}},{id:"cookies-milk",name:"Cookies & Milk",seed:3,recipe:{base:"coconut",flavors:[],toppings:["kaksmulor"]}},{id:"berry-cream",name:"Berry Milk",seed:6,recipe:{base:"coconut",flavors:["strawberry"],toppings:["strawberry","raspberry"]}},{id:"choco-banana",name:"Choco Banana",seed:11,recipe:{base:"coconut",flavors:["banana","chocolate"],toppings:["chocolate","kaksmulor"]}},{id:"dark-fudge",name:"Dark Fudge",seed:14,recipe:{base:"coconut",flavors:["chocolate"],toppings:["chocolate","raspberry"]}}];function Mh(i,e){if(i.base!==e.base||i.flavors.length!==e.flavors.length||i.toppings.length!==e.toppings.length)return!1;for(let n=0;n<i.flavors.length;n++)if(i.flavors[n]!==e.flavors[n])return!1;const t=new Set(e.toppings);for(let n=0;n<i.toppings.length;n++)if(!t.has(i.toppings[n]))return!1;return!0}const e0={sigma:[.45,.55,.72],core:[1.34,1.26,1.06],mid:[1.08,.99,.8],deep:[.76,.66,.48],waterCloudiness:.96,creamAlbedo:[.9,.8,.56],creamSss:[1.05,.92,.64],creamDeep:[.6,.48,.28],stain:[.88,.78,.54],dropSigma:[.38,.44,.54]};function oo(i,e,t=.5){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function Jl(i){const e=i.base==="coconut"?"coconut":"water",t=[];for(const o of i.flavors)if(o in _l&&!t.includes(o)&&t.push(o),t.length>=2)break;e==="water"&&t.length===0&&t.push("strawberry");const n=new Set(ha.map(o=>o.id)),s=[];for(const o of i.toppings)n.has(o)&&!s.includes(o)&&s.push(o);return{base:e,flavors:t,toppings:s}}function da(i){const e=Jl(i),t=e.base==="coconut",n=e.flavors.length>0?_l[e.flavors[0]]:t?e0:_l.strawberry,s=e.flavors.length>1?_l[e.flavors[1]]:n,o=e.flavors.length>1&&e.flavors[0]!==e.flavors[1],a=t?1:Math.max(n.waterCloudiness,s.waterCloudiness*.85+n.waterCloudiness*.15),r=t?n.creamAlbedo:oo(n.creamAlbedo,[n.mid[0]*.72,n.mid[1]*.72,n.mid[2]*.72],.45),l=t?s.creamAlbedo:oo(s.creamAlbedo,[s.mid[0]*.72,s.mid[1]*.72,s.mid[2]*.72],.45),c=oo(n.stain,s.stain,o?.62:0),h=oo(r,l,o?.58:0),f=t?e.flavors.length===0?e0.stain:oo(c,[Math.min(1,h[0]*1.05+.1),Math.min(1,h[1]*1.05+.1),Math.min(1,h[2]*1.05+.1)],.68):c,u=oo(n.dropSigma,s.dropSigma,o?.58:0),d=t&&e.flavors.length>0?oo(u,[-Math.log(Math.max(.14,Math.min(.95,h[0]*1.05+.06)))*1.65,-Math.log(Math.max(.14,Math.min(.95,h[1]*1.05+.06)))*1.65,-Math.log(Math.max(.14,Math.min(.95,h[2]*1.05+.06)))*1.65],.65):u,g=[.24+f[0]*.28,.16+f[1]*.26,.16+f[2]*.26];return{isCoconut:t,opacity:a,isDual:o,sigmaA:n.sigma,coreA:n.core,midA:n.mid,deepA:n.deep,creamAlbedoA:r,creamSssA:n.creamSss,creamDeepA:n.creamDeep,sigmaB:s.sigma,coreB:s.core,midB:s.mid,deepB:s.deep,creamAlbedoB:l,creamSssB:s.creamSss,creamDeepB:s.creamDeep,stainColor:f,dropSigma:d,dropCreamColor:h,shadowTint:g}}const fr={uSideLightDir:{value:new G(-.88,.22,-.42).normalize()},uTransBoost:{value:1.45}};function Y_(i,e,t){const n=Math.max(t-Math.abs(i-e),0)/t;return Math.min(i,e)-n*n*t*.25}function yh(i,e=.16,t=0){const n=Fn(i+t*197),s=n()*30,o=t===1,a=t===2,r=t===3,l=r?36:54,c=[0,.22,.46,.68,.85,.955,.995],h=[{rMul:1.012,zFrac:.84,uvR:.975},{rMul:1.028,zFrac:.48,uvR:.985},{rMul:1.034,zFrac:0,uvR:.992},{rMul:1.028,zFrac:-.48,uvR:.985},{rMul:1.012,zFrac:-.84,uvR:.975}],f=(n()-.5)*.08,u=n()*Math.PI*2,d=r?.44+n()*.14:a?.26+n()*.08:o?e*(1.06+n()*.16):e;let g=0,x=0;const p=[];if(o){const I=(n()<.5?0:Math.PI)+(n()-.5)*.95,X=Math.cos(I),te=Math.sin(I),ce=(n()-.5)*.16,ie=.34;g=X*(ce+ie),x=te*(ce+ie),p.push({nx:-X,ny:-te,dist:ie})}else if(a){const I=n()*Math.PI*2,X=.82+n()*.24;g=Math.cos(I)*.36,x=Math.sin(I)*.36;const te=I+X+Math.PI*.5,ce=I-X-Math.PI*.5,ie=.24+n()*.07,re=.24+n()*.07;p.push({nx:Math.cos(te),ny:Math.sin(te),dist:ie}),p.push({nx:Math.cos(ce),ny:Math.sin(ce),dist:re})}else if(r){const I=n()*Math.PI*2,X=.16+n()*.36;g=Math.cos(I)*X,x=Math.sin(I)*X;const te=n()<.55?4:3,ce=n()*Math.PI*2;for(let ie=0;ie<te;ie++){const re=ce+ie/te*Math.PI*2+(n()-.5)*.42;p.push({nx:Math.cos(re),ny:Math.sin(re),dist:.24+n()*.14})}}function m(I){const X=Pl(I),te=1+f*Math.cos(I),ce=1+.025*Math.sin(I*3+u),ie=1+.012*Math.cos(I*26);return X*te*ce*ie}function S(I,X){if(g===0&&x===0)return m(Math.atan2(X,I));let te=.02,ce=1.95;for(let ie=0;ie<12;ie++){const re=.5*(te+ce),Me=g+I*re,se=x+X*re,fe=Math.hypot(Me,se),de=m(Math.atan2(se,Me));fe<de?te=re:ce=re}return .5*(te+ce)}function y(I){const X=Math.cos(I),te=Math.sin(I),ce=S(X,te);if(p.length===0)return{r:ce,isKnife:!1};let ie=999;for(const se of p){const fe=X*se.nx+te*se.ny;fe>1e-4&&(ie=Math.min(ie,se.dist/fe))}const Me=Y_(ce,ie,r?.055:.048);return{r:Math.max(.04,Me),isKnife:ie<ce+.03}}const _=new Float32Array(l+1),A=new Uint8Array(l+1);let E=0,v=0;for(let I=0;I<l;I++){const X=I/l*Math.PI*2-Math.PI,te=y(X);_[I]=te.r,A[I]=te.isKnife?1:0,E+=g+Math.cos(X)*te.r,v+=x+Math.sin(X)*te.r}_[l]=_[0],A[l]=A[0];const T=p.length>0?E/l:0,U=p.length>0?v/l:0;let C=.01;if(p.length>0)for(let I=0;I<l;I++){const X=I/l*Math.PI*2-Math.PI,te=g+Math.cos(X)*_[I]-T,ce=x+Math.sin(X)*_[I]-U;C=Math.max(C,Math.hypot(te,ce))}const D=p.length>0?.96/C:1,O=d*.5,Y=[],R=[],B=[];function $(I,X,te,ce,ie){Y.push((I-T)*D,(X-U)*D,te),R.push(Q(.5+.5*ce,.002,.998),Q(.5+.5*ie,.002,.998))}function K(I,X,te,ce){const ie=1+.16*Q(X,-1,1),re=($i(I*3.6+s,X*3.6,te*1.7,3)-.5)*.032,Me=1-(r?.16:.1)*ce*ce;return te*(O*ie*Me+re)}function he(I,X,te=1){if(p.length===0){const ce=Math.atan2(X,I),ie=m(ce),re=Pl(ce),Me=ie>1e-4?re/ie*te:te;return[I*Me,X*Me]}return[I*te,X*te]}const ee=[],ue=0,[ae,le]=he(g,x,1);$(g,x,K(g,x,1,0),ae,le);for(let I=1;I<c.length;I++){const X=c[I];ee.push(Y.length/3);for(let te=0;te<=l;te++){const ce=te/l*Math.PI*2-Math.PI,ie=_[te]*X,re=g+Math.cos(ce)*ie,Me=x+Math.sin(ce)*ie,[se,fe]=he(re,Me,1);$(re,Me,K(re,Me,1,X),se,fe)}}for(let I=0;I<h.length;I++){const X=h[I];ee.push(Y.length/3);for(let te=0;te<=l;te++){const ce=te/l*Math.PI*2-Math.PI,ie=A[te]===1,re=ie?1:1-.015*Math.pow(.5+.5*Math.cos(ce*26),4)*(1-Math.abs(X.zFrac)),Me=_[te]*(ie?1+(X.rMul-1)*.55:X.rMul)*re,se=g+Math.cos(ce)*Me,fe=x+Math.sin(ce)*Me,de=1+.16*Q(fe,-1,1),we=O*de*.9*X.zFrac,[Re,ze]=he(se,fe,ie?.96:X.uvR);$(se,fe,we,Re,ze)}}for(let I=c.length-1;I>=1;I--){const X=c[I];ee.push(Y.length/3);for(let te=0;te<=l;te++){const ce=te/l*Math.PI*2-Math.PI,ie=_[te]*X,re=g+Math.cos(ce)*ie,Me=x+Math.sin(ce)*ie,[se,fe]=he(re,Me,1);$(re,Me,K(re,Me,-1,X),se,fe)}}const Ee=Y.length/3;$(g,x,K(g,x,-1,0),ae,le);const N=ee[0];for(let I=0;I<l;I++)B.push(ue,N+I,N+I+1);for(let I=0;I<ee.length-1;I++){const X=ee[I],te=ee[I+1];for(let ce=0;ce<l;ce++){const ie=X+ce,re=X+ce+1,Me=te+ce,se=te+ce+1;B.push(ie,Me,re),B.push(re,Me,se)}}const j=ee[ee.length-1];for(let I=0;I<l;I++)B.push(Ee,j+I+1,j+I);const W=new vn;return W.setAttribute("position",new an(Y,3)),W.setAttribute("uv",new an(R,2)),W.setIndex(B),W.computeVertexNormals(),W}function Nl(i,e=0){const t=Fn(i+e*151),n=t()*40,s=t()*Math.PI*2,o=e===1,a=e===2,r=a?.5+t()*.12:o?.66+t()*.1:.84+t()*.08,l=a?1.18+t()*.16:o?1.08+t()*.12:.96+t()*.08,c=a?1.12+t()*.16:o?1.04+t()*.12:.96+t()*.08;let h=t()*2-1,f=(t()-.5)*.8,u=t()*2-1;const d=Math.hypot(h,f,u)||1;h/=d,f/=d,u/=d;const g=32,x=24,p=new Rs(1,g,x),m=p.attributes.position;for(let S=0;S<m.count;S++){const y=m.getX(S),_=m.getY(S),A=m.getZ(S),E=Math.acos(Q(_,-1,1)),v=Math.atan2(A,y),T=a?.16:o?.12:.085;let C=1+($i(y*2.6+n,_*2.6,A*2.6,3)-.5)*T,D=0;if(E<.52){const B=Math.pow(.5+.5*Math.cos(v*5+s),1.45),$=1-me(0,.24,E),K=Math.exp(-Math.pow((E-.27)/.085,2))*(.45+.85*B);C*=1-$*.2+K*.09,D+=K*.095-$*.14}if(E>Math.PI-.26){const B=me(Math.PI-.26,Math.PI,E);C*=1-B*.09}let O=y*C*l,Y=_*r*C+D,R=A*C*c;if(o||a){const B=y*h+_*f+A*u;if(B>.28){const $=me(.28,.92,B)*(a?.34:.2);O-=h*$,Y-=f*$*r,R-=u*$}if(a){const $=Math.exp(-Math.pow((B-.15)/.18,2))*.085;O*=1-$,R*=1-$}}m.setXYZ(S,O,Y,R)}return p.computeVertexNormals(),p}function q_(){const i=Fe.stickWidth*.5,e=Fe.stickTopY,t=Fe.stickBottomY,n=i,s=new hh;s.absarc(0,t+n,n,Math.PI,Math.PI*2,!1),s.lineTo(i,e-n),s.absarc(0,e-n,n,0,Math.PI,!1),s.closePath();const o=Fe.stickDepth*.62,a=new ql(s,{depth:o,bevelEnabled:!0,bevelThickness:Fe.stickBevelThickness,bevelSize:Fe.stickBevelSize,bevelSegments:4,curveSegments:20});a.translate(0,0,-o*.5);const r=a.attributes.position,l=a.attributes.uv,c=e-t;for(let h=0;h<r.count;h++){const f=r.getX(h),u=r.getY(h),d=r.getZ(h),g=Q(.5+(f+d*.35)/(Fe.stickWidth*1.08),.01,.99),x=Q((u-t)/c,0,1);l.setXY(h,g,x)}return a.computeVertexNormals(),a}function Ll(i){const e={value:new G(0,0,0)},t=new Ao({map:i.albedo,bumpMap:i.bump,bumpScale:.016,roughness:.28,metalness:0,clearcoat:.78,clearcoatRoughness:.16,envMapIntensity:.85});return t.customProgramCacheKey=()=>"strawberry-softbend-v1",t.onBeforeCompile=n=>{n.uniforms.uTranslucencyMap={value:i.translucency},n.uniforms.uBacklightDir={value:new G(0,.08,-1).normalize()},n.uniforms.uBend=e,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
        uniform vec3 uBend;
        varying vec2 vBerryUv;
        varying vec3 vBerryWorldNormal;
        varying vec3 vBerryWorldPos;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        {
          float dBdx = 2.0 * uBend.x * position.x + 2.0 * uBend.z * abs(position.x);
          float dBdy = 2.0 * uBend.x * position.y + 2.0 * uBend.y * abs(position.y);
          objectNormal = normalize(vec3(
            objectNormal.x - objectNormal.z * dBdx,
            objectNormal.y - objectNormal.z * dBdy,
            objectNormal.z
          ));
        }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          float bR2 = position.x * position.x + position.y * position.y;
          float bendZ = uBend.x * bR2 + uBend.y * position.y * abs(position.y) + uBend.z * position.x * abs(position.x);
          transformed.z += bendZ;
          // Subtle length-preserving inward draw so soft berry tissue curls naturally without stretching
          float bendMag = abs(uBend.x) + abs(uBend.y) * 0.65 + abs(uBend.z) * 0.65;
          transformed.xy *= 1.0 - clamp(bendMag * 0.16 * bR2, 0.0, 0.22);
        }`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vBerryUv = uv;
        vec4 berryWp = modelMatrix * vec4(transformed, 1.0);
        vBerryWorldPos = berryWp.xyz;
        vBerryWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uTranslucencyMap;
        uniform vec3 uBacklightDir;
        varying vec2 vBerryUv;
        varying vec3 vBerryWorldNormal;
        varying vec3 vBerryWorldPos;`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        {
          vec3 bViewDir = normalize(cameraPosition - vBerryWorldPos);
          vec3 bNorm = normalize(vBerryWorldNormal);
          float sssMask = texture2D(uTranslucencyMap, vBerryUv).r;
          // Strong studio lightbox transmission through thin strawberry slice!
          float viewBack = pow(clamp(dot(bViewDir, -uBacklightDir), 0.0, 1.0), 1.4) * 0.65 + 0.35;
          float faceWrap = 0.55 + 0.45 * abs(dot(bNorm, uBacklightDir));
          // Luminous fiery scarlet-crimson to warm coral-peach backlit core transmission
          vec3 sssTint = mix(vec3(1.22, 0.14, 0.06), vec3(1.42, 0.62, 0.42), smoothstep(0.50, 0.96, sssMask));
          vec3 sssGlow = diffuseColor.rgb * sssTint * (0.55 + 1.05 * sssMask) * viewBack * faceWrap;
          reflectedLight.directDiffuse += sssGlow * 0.78;
        }`)},{material:t,uBend:e}}function pr(i){const e={value:0},t=new Ao({map:i.albedo,bumpMap:i.bump,bumpScale:.022,roughnessMap:i.roughness,roughness:.28,metalness:0,clearcoat:0,specularIntensity:.32,envMapIntensity:.12});return t.customProgramCacheKey=()=>"blueberry-wetthaw-v3",t.onBeforeCompile=n=>{n.uniforms.uThaw=e,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vBlueWorldPos;
        varying vec3 vBlueWorldNormal;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vBlueWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vBlueWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uThaw;
        varying vec3 vBlueWorldPos;
        varying vec3 vBlueWorldNormal;`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // Wetting uncovered blueberry skin deepens & saturates its midnight-indigo color (zero frosted haze!)
          vec3 wetRich = pow(max(diffuseColor.rgb, vec3(0.0001)), vec3(1.18)) * vec3(0.60, 0.62, 0.84);
          diffuseColor.rgb = mix(diffuseColor.rgb, wetRich, clamp(uThaw, 0.0, 1.0) * 0.85);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, min(roughnessFactor, 0.16), clamp(uThaw, 0.0, 1.0) * 0.85);`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        {
          vec3 vDir = normalize(cameraPosition - vBlueWorldPos);
          vec3 nDir = normalize(vBlueWorldNormal);
          float ndv = clamp(abs(dot(nDir, vDir)), 0.0, 1.0);
          float thaw = clamp(uThaw, 0.0, 1.0);

          // Suppress grazing backlight & studio-env Fresnel wash at spherical rims so berries NEVER wear a white frozen halo!
          float rimMask = smoothstep(0.04, 0.56, ndv);
          reflectedLight.indirectSpecular *= mix(0.08, 0.85, rimMask);
          reflectedLight.directSpecular *= mix(0.10, 1.0, rimMask);
          reflectedLight.indirectDiffuse *= mix(0.68, 1.0, smoothstep(0.04, 0.45, ndv));

          // Crisp localized wet studio pinpoint catchlights on fresh glossy uncovered blueberry skin
          vec3 lA = normalize(vec3(-0.52, 0.54, 0.66));
          vec3 lB = normalize(vec3(0.56, 0.38, 0.73));
          vec3 hA = lA + vDir;
          hA *= inversesqrt(max(dot(hA, hA), 1e-8));
          vec3 hB = lB + vDir;
          hB *= inversesqrt(max(dot(hB, hB), 1e-8));
          float spA = pow(max(dot(nDir, hA), 0.0), 175.0);
          float spB = pow(max(dot(nDir, hB), 0.0), 130.0);
          reflectedLight.directSpecular += vec3(1.55, 1.58, 1.68) * (spA * 1.15 + spB * 0.60) * (0.28 + 0.72 * thaw);
        }`)},{material:t,uThaw:e}}function bh(i,e=0){const t=Fn(i*73+19+e*131),n=[],s=[],o=[],a=[],r=[],l=[],c=[],h=e===1,f=e===2,u=e===3,d=e===4,g=e===5,x=h?1.12+t()*.14:.94+t()*.12,p=h?.9+t()*.12:.96+t()*.1,m=h?.54+t()*.12:f||u?.92+t()*.08:.86+t()*.14,S=1+(x-1)*.28,y=1+(p-1)*.28,_=1+(m-1)*.34,A=d||g?0:(t()-.5)*.16,E=d||g?0:(t()-.5)*.12;function v(le){const Ee=Q(le,0,1);return Ee<=.04045?Ee/12.92:Math.pow((Ee+.055)/1.055,2.4)}function T(le,Ee,N){const j=Ee*Ee;return[(le+A*j)*x,Ee*p,(N+E*j)*m]}function U(le,Ee,N){const j=n[le*3],W=n[le*3+1],I=n[le*3+2],X=n[Ee*3],te=n[Ee*3+1],ce=n[Ee*3+2],ie=n[N*3],re=n[N*3+1],Me=n[N*3+2],se=X-j,fe=te-W,de=ce-I,we=ie-j,Re=re-W,ze=Me-I,De=fe*ze-de*Re,it=de*we-se*ze,be=se*Re-fe*we,Ce=s[le*3]+s[Ee*3]+s[N*3],H=s[le*3+1]+s[Ee*3+1]+s[N*3+1],nt=s[le*3+2]+s[Ee*3+2]+s[N*3+2];De*Ce+it*H+be*nt>=0?c.push(le,Ee,N):c.push(le,N,Ee)}let C=0,D=0;function O(le){const Ee=D<2,N=le&&Ee||Ee&&t()<.045?t():-1;if(N>=0)return D++,N<.44?[.27+t()*.08,.025+t()*.025,.11+t()*.05]:N<.78?[.85+t()*.07,.36+t()*.12,.42+t()*.12]:[.86+t()*.06,.44+t()*.12,.3+t()*.1];const j=t();return[.56+j*.22,.038+j*.062,.13+j*.125]}function Y(le,Ee,N,j,W,I,X,te){const ce=X*(.38+t()*.24),ie=(t()-.5)*.85,re=-.45-t()*.45,Me=(t()-.5)*.85,se=Math.abs(W)<.9?0:1,fe=Math.abs(W)<.9?1:0,de=0;let we=W*de-I*fe,Re=I*se-j*de,ze=j*fe-W*se;const De=Math.hypot(we,Re,ze)||1;we/=De,Re/=De,ze/=De;const it=W*ze-I*Re,be=I*we-j*ze,Ce=j*Re-W*we,H=3,nt=[{t:0,rad:.0115,hFlag:.35},{t:.38,rad:.0075,hFlag:.72},{t:.74,rad:.0042,hFlag:.92},{t:1,rad:.0018,hFlag:1}],ke=[.66,.38,.36],$e=C;for(let Ke=0;Ke<nt.length;Ke++){const{t:qe,rad:at,hFlag:L}=nt[Ke],w=qe*qe*ce*.52,ne=le+j*(qe*ce)+ie*w,Pe=Ee+W*(qe*ce)+re*w,_e=N+I*(qe*ce)+Me*w,Ve=me(0,.78,qe),je=v(te[0]*(1-Ve)+ke[0]*Ve),Se=v(te[1]*(1-Ve)+ke[1]*Ve),ge=v(te[2]*(1-Ve)+ke[2]*Ve);for(let Xe=0;Xe<=H;Xe++){const J=Xe/H*Math.PI*2,Ae=Math.cos(J),xe=Math.sin(J),He=we*Ae+it*xe,et=Re*Ae+be*xe,tt=ze*Ae+Ce*xe;n.push(ne+He*at,Pe+et*at,_e+tt*at),s.push(He,et,tt),o.push(Xe/H,qe),a.push(je,Se,ge),r.push(L),l.push(1)}}const pe=H+1;for(let Ke=0;Ke<nt.length-1;Ke++)for(let qe=0;qe<H;qe++){const at=$e+Ke*pe+qe,L=at+1,w=at+pe,ne=w+1;U(at,L,w),U(L,ne,w)}C+=nt.length*pe}const R=12,B=8;function $(le,Ee,N,j,W,I,X,te=!1){const ce=C,[ie,re,Me]=T(le,Ee,N),se=Math.hypot(ie,re,Me)||1,fe=ie/se,de=re/se,we=Me/se,Re=S*(.94+t()*.12),ze=y*(.92+t()*.12),De=_*(.94+t()*.12);for(let be=0;be<=B;be++){const Ce=be/B*Math.PI,H=Math.sin(Ce),nt=Math.cos(Ce);for(let ke=0;ke<=R;ke++){const $e=ke/R*Math.PI*2,pe=H*Math.cos($e),Ke=nt,qe=H*Math.sin($e),at=pe*fe+Ke*de+qe*we,L=at<0?1+at*.16:1+at*.04;let w=ie+pe*j*Re*L;const ne=re+Ke*j*ze*L;let Pe=Me+qe*j*De*L,_e=!1;const Ve=.055*m;if(te&&Pe>Ve&&(Pe=Ve+(Pe-Ve)*.14,_e=!0),te){const Tt=Q((.5*p-ne)/(1.02*p),0,1),Je=.34*Math.pow(Math.max(.02,1-Tt*Tt*.92),.62),wt=w/x,Bt=(Pe-.02*m)/(m*.88),z=Math.hypot(wt,Bt);if(z<Je&&ne>-.54*p&&ne<.54*p){const Qe=Je+.01;z>1e-4?(w=wt/z*Qe*x,Pe=Bt/z*Qe*m*.88+.02*m):Pe=-Qe*m*.88+.02*m}}n.push(w,ne,Pe);let je=_e?pe*.25:pe/Re,Se=_e?Ke*.25:Ke/ze,ge=_e?.94:qe/De;const Xe=Math.hypot(je,Se,ge)||1;s.push(je/Xe,Se/Xe,ge/Xe),o.push(ke/R,be/B);const J=Q((w*pe+ne*Ke+Pe*qe)/Math.max(.15,Math.hypot(w,ne,Pe)),0,1),Ae=_e?Q(.84+.16*t(),.72,1.04):te?Q(W*(.5+.56*Math.pow(J,.82)),.42,1.06):Q(W*(.3+.78*Math.pow(J,.88)),.2,1.06),xe=_e?Math.min(1,I[0]*1.12+.07):I[0],He=_e?Math.min(1,I[1]*1.3+.08):I[1],et=_e?Math.min(1,I[2]*1.15+.08):I[2];a.push(v(xe*Ae),v(He*Ae*.95),v(et*Ae*.96)),r.push(0);const tt=_e?.88:Q(W*me(-.18,.82,J),0,1),gt=te?Math.max(.42,tt):tt;l.push(gt)}}const it=R+1;for(let be=0;be<B;be++)for(let Ce=0;Ce<R;Ce++){const H=ce+be*it+Ce,nt=H+1,ke=H+it,$e=ke+1;U(H,nt,ke),U(nt,$e,ke)}if(C+=(B+1)*it,X&&(!te||N<.02)){const be=fe+(t()-.5)*.28,Ce=de*.75-.14+(t()-.5)*.22,H=we+(t()-.5)*.28,nt=Math.hypot(be,Ce,H)||1,ke=be/nt,$e=Ce/nt,pe=H/nt;Y(ie+ke*j*.94*Re,re+$e*j*.94*ze,Me+pe*j*.94*De,ke,$e,pe,j,I)}}if(g)if(t()<.36){const Ee=O(t()<.14),N=O(t()<.12),j=.64+t()*.08,W=.56+t()*.1;$(-.42,.05,.04,j,1,Ee,!0,!1),$(.44,-.06,-.04,W,1,N,!0,!1)}else{const Ee=O(t()<.18);$(0,0,0,.92,1,Ee,!0,!1)}else if(d){const le=3+Math.floor(t()*4),Ee=[[0,0,.06],[.54,.16,-.04],[-.48,.24,-.06],[.12,-.5,-.05],[-.42,-.34,.08],[.5,-.36,.12]];for(let N=0;N<le;N++){const[j,W,I]=Ee[N],X=(t()-.5)*.16,te=(t()-.5)*.16,ce=(t()-.5)*.14,ie=.4+t()*.12,re=O(N===le-1&&t()<.3);$(j+X,W+te,I+ce,ie,.98,re,!0,!1)}}else{if(f||u){const j=[{y:.32,r:.28,dr:.21,n:u?2:4},{y:-.04,r:.3,dr:.22,n:u?2:4},{y:-.38,r:.2,dr:.2,n:u?1:3}];for(const W of j)for(let I=0;I<W.n;I++){const X=W.n===1?.5:I/(W.n-1),te=u?Math.PI+.22+X*Math.PI*.42:Math.PI+.24+X*(Math.PI-.48);$(Math.cos(te)*W.r,W.y,Math.sin(te)*W.r-.04,W.dr,.78,[.64,.14,.2],!1,!0)}}else $(0,-.04,0,.62,.34,[.4,.025,.095],!1,!1);const le=[{y:.56,ringR:.44,count:8,drupR:.295,phase:t()*6.28},{y:.18,ringR:.61,count:10,drupR:.325,phase:t()*6.28},{y:-.24,ringR:.56,count:9,drupR:.315,phase:t()*6.28},{y:-.62,ringR:.36,count:6,drupR:.29,phase:t()*6.28}],Ee=t()<.58?Math.floor(t()*26):-1;let N=0;for(const j of le)for(let W=0;W<j.count;W++){const I=j.phase+W/j.count*Math.PI*2+(t()-.5)*.16,X=j.ringR*(.93+t()*.13),te=Math.cos(I)*X,ce=Math.sin(I)*X,ie=j.y+(t()-.5)*.08;if(f&&ce>.18){N++;continue}if(u&&(ce>.16||te>.2)){N++;continue}const re=j.drupR*(.91+t()*.18),Me=O(N===Ee);$(te,ie,ce,re,.98,Me,!0,f||u),N++}$(u?-.14:(t()-.5)*.06,-.82,f||u?-.12:(t()-.5)*.06,.29,1,O(!1),!0,f||u)}if(u||d||g){const le=n.length/3;if(le>0){let Ee=0,N=0,j=0;for(let X=0;X<le;X++)Ee+=n[X*3],N+=n[X*3+1],j+=n[X*3+2];Ee/=le,N/=le,j/=le;let W=.01;for(let X=0;X<le;X++){const te=n[X*3]-Ee,ce=n[X*3+1]-N,ie=n[X*3+2]-j;n[X*3]=te,n[X*3+1]=ce,n[X*3+2]=ie,r[X]<.2&&(W=Math.max(W,Math.hypot(te,ce,ie)))}const I=.96/W;for(let X=0;X<n.length;X++)n[X]*=I}}const K=n.length/3,he=new Float32Array(K),ee=new Float32Array(K*3),ue=g?1:d?.94:u?.86:f?.78:h?.68:.6;for(let le=0;le<K;le++){const Ee=n[le*3],N=n[le*3+1],j=n[le*3+2],W=Math.min(1,Math.hypot(Ee,N,j));ee[le*3]=Ee,ee[le*3+1]=N,ee[le*3+2]=j,he[le]=Q(ue*(.42+.58*W),.18,1)}const ae=new vn;return ae.setAttribute("position",new an(n,3)),ae.setAttribute("normal",new an(s,3)),ae.setAttribute("uv",new an(o,2)),ae.setAttribute("color",new an(a,3)),ae.setAttribute("aHair",new an(r,1)),ae.setAttribute("aDrupThin",new an(he,1)),ae.setAttribute("aDrupCrevice",new an(l,1)),ae.setAttribute("aBerryPos",new an(ee,3)),ae.setIndex(c),ae}function Il(i){const e=Fn(i*101+37),t=new Rs(1,26,20),n=t.attributes.position,s=[];for(let c=0;c<5;c++){let h=e()*2-1,f=e()*2-1,u=e()*2-1;const d=Math.hypot(h,f,u)||1;h/=d,f/=d,u/=d,s.push({nx:h,ny:f,nz:u,d:.56+e()*.24})}const o=e()*25,a=.88+e()*.34,r=.72+e()*.34,l=.5+e()*.28;for(let c=0;c<n.count;c++){let h=n.getX(c),f=n.getY(c),u=n.getZ(c);for(const g of s){const x=h*g.nx+f*g.ny+u*g.nz;if(x>g.d){const p=x-g.d,m=p*(.76+.16*me(0,.22,p));h-=g.nx*m,f-=g.ny*m,u-=g.nz*m}}const d=1+($i(h*3.8+o,f*3.8,u*3.8,2)-.5)*.09;n.setXYZ(c,h*a*d,f*r*d,u*l*d)}return t.computeVertexNormals(),t}function qa(i){const e=Fn(i*89+43),t=14,n=2,s=(1.1+e()*1.45)*(e()<.5?1:-1),o=.72+e()*.38,a=(e()-.5)*.65,r=(e()-.5)*1.6,l=.22+e()*.08,c=[],h=[],f=[];for(let g=0;g<=t;g++){const x=g/t,p=x-.5,m=p*s,S=Math.sin(m)*o,y=(Math.cos(m)-1)*o,_=p*a,A=Math.sin(x*Math.PI),E=l*(.28+.72*Math.pow(A,.55)),v=p*r,T=Math.cos(v),U=Math.sin(v),C=Math.sin(m),D=Math.cos(m);for(let O=0;O<=n;O++){const Y=O/n,R=(Y-.5)*2*E,B=(1-(Y-.5)*(Y-.5)*4)*.06,$=S+C*(B+R*U),K=_+R*T,he=y+D*(B+R*U);c.push($,K,he),h.push(x*2,Y)}}const u=n+1;for(let g=0;g<t;g++)for(let x=0;x<n;x++){const p=g*u+x,m=p+1,S=p+u,y=S+1;f.push(p,S,m),f.push(m,S,y)}const d=new vn;return d.setAttribute("position",new an(c,3)),d.setAttribute("uv",new an(h,2)),d.setIndex(f),d.computeVertexNormals(),d}function Za(i,e){const t=Fn(i*137+61),n=new dh(1,e?2:1),s=n.attributes.position,o=t()*30,a=e?.24+t()*.12:.48+t()*.28,r=.86+t()*.38,l=.78+t()*.36;for(let c=0;c<s.count;c++){const h=s.getX(c),f=s.getY(c),u=s.getZ(c),d=.7+$i(h*3.4+o,f*3.4,u*3.4,3)*.54,g=$i(h*11.5-o,f*11.5,u*11.5,2),x=d*(.86+g*.26);s.setXYZ(c,h*r*x,f*l*x,u*a*x)}return n.computeVertexNormals(),n}function wh(i,e=0){const t={value:e},n=new Ao({map:i.albedo,bumpMap:i.bump,bumpScale:.024,roughnessMap:i.roughness,roughness:.56,metalness:0,clearcoat:0,vertexColors:!0,envMapIntensity:.06});return n.customProgramCacheKey=()=>"raspberry-sideglass-v8",n.onBeforeCompile=s=>{s.uniforms.uThaw=t,s.uniforms.uSideLightDir=fr.uSideLightDir,s.uniforms.uTransBoost=fr.uTransBoost,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
        attribute float aHair;
        attribute float aDrupThin;
        attribute float aDrupCrevice;
        attribute vec3 aBerryPos;
        varying vec3 vRaspWorldPos;
        varying vec3 vRaspWorldNormal;
        varying vec3 vBerryWorldDir;
        varying float vBerryRad;
        varying float vHair;
        varying float vDrupThin;
        varying float vCrevice;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vRaspWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vRaspWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
        vBerryRad = clamp(length(aBerryPos), 0.0, 1.0);
        vec3 bDirObj = aBerryPos / max(length(aBerryPos), 1e-4);
        vBerryWorldDir = normalize(mat3(modelMatrix) * bDirObj);
        vHair = aHair;
        vDrupThin = aDrupThin;
        vCrevice = aDrupCrevice;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uThaw;
        uniform vec3 uSideLightDir;
        uniform float uTransBoost;
        varying vec3 vRaspWorldPos;
        varying vec3 vRaspWorldNormal;
        varying vec3 vBerryWorldDir;
        varying float vBerryRad;
        varying float vHair;
        varying float vDrupThin;
        varying float vCrevice;`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // Rich deep jewel-ruby raspberry base color (lush berry magenta-crimson!)
          float thaw = clamp(uThaw, 0.0, 1.0);
          float hairMask = clamp(vHair, 0.0, 1.0);
          vec3 deepRuby = pow(max(diffuseColor.rgb, vec3(0.0001)), vec3(1.26)) * vec3(0.92, 0.46, 0.68);
          diffuseColor.rgb = mix(diffuseColor.rgb, deepRuby, (0.32 + thaw * 0.48) * (1.0 - hairMask));
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        {
          // Silky frosted sea-glass / velvety berry skin roughness (eliminates shiny plastic marble dots!)
          float hairMask = clamp(vHair, 0.0, 1.0);
          float frostedSkin = mix(max(roughnessFactor, 0.46), 0.42, clamp(uThaw, 0.0, 1.0) * 0.45);
          roughnessFactor = mix(frostedSkin, 0.88, hairMask);
        }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        {
          vec3 vDir = normalize(cameraPosition - vRaspWorldPos);
          vec3 nDir = normalize(vRaspWorldNormal);
          vec3 bDir = normalize(vBerryWorldDir);
          vec3 sideL = normalize(uSideLightDir);
          float ndv = clamp(abs(dot(nDir, vDir)), 0.0, 1.0);
          float thaw = clamp(uThaw, 0.0, 1.0);
          float hairMask = clamp(vHair, 0.0, 1.0);
          float fleshMask = 1.0 - hairMask;
          float dThin = clamp(vDrupThin, 0.18, 1.0);
          float crevice = clamp(vCrevice, 0.0, 1.0);
          float outerDome = smoothstep(0.14, 0.90, crevice);
          float bRad = clamp(vBerryRad, 0.0, 1.0);

          // Outside-the-ice exaggeration factor (dramatic side-lit sea-glass glow when outside ice / in air!)
          float outsideIce = smoothstep(0.04, 0.72, thaw);
          float boost = uTransBoost * mix(0.58, 1.32, outsideIce);

          // Suppress hard plastic white speculars so the frosted translucent jelly glow is the hero!
          reflectedLight.indirectSpecular *= 0.08 * outerDome * fleshMask;
          reflectedLight.directSpecular *= 0.22 * outerDome * fleshMask;

          // === EXAGGERATED DAY-19 CARNELIAN-RUBY SIDE-LIT TRANSLUCENCY ===
          vec3 baseCol = clamp(diffuseColor.rgb, vec3(0.015), vec3(0.95));

          // 1. Directional side-light alignment across the WHOLE berry:
          //    +1 = side facing incoming light, 0 = grazing rim, -1 = far shadowed side
          float sideEntry = dot(bDir, sideL);
          float sideBand = smoothstep(-0.28, 0.86, sideEntry);
          float litSideCore = smoothstep(-0.02, 0.92, sideEntry);
          // Grazing silhouette of the whole berry relative to view ray (thin outer drupelets!)
          float berryEdge = 1.0 - clamp(abs(dot(bDir, vDir)), 0.0, 1.0);
          float grazingEdge = pow(berryEdge, 1.45) * smoothstep(0.36, 0.92, bRad);

          // 2. Sculpt deep dark velvet-wine shadow contrast on the unlit side, crevices & inner drupelet seed core!
          //    Deep shadow + glowing fiery side-transmitted light = unmistakable frosted-glass translucency!
          float darkSideShade = mix(0.18, 0.78, smoothstep(-0.80, 0.45, sideEntry));
          float creviceShade = mix(0.10, 1.0, smoothstep(0.08, 0.80, crevice));
          // Subtle darker seed pip inside the center of each plump drupelet so translucent walls glow around it!
          float seedPip = pow(ndv, 2.4) * 0.46 * outerDome;
          float surfaceKeep = mix(0.68, 0.44, outsideIce) * darkSideShade * creviceShade * (1.0 - seedPip * 0.55);
          reflectedLight.directDiffuse *= mix(1.0, surfaceKeep, fleshMask);
          reflectedLight.indirectDiffuse *= mix(1.0, darkSideShade * creviceShade * 0.28, fleshMask);

          // 3. True optical path thickness through the berry & each drupelet:
          //    - Thin along the lit side & curved translucent walls of each drupelet (away from seed core!)
          //    - Thick & dark through the shadowed half, berry center, and crevices between drupelets!
          float coreThick = mix(2.60, 0.22, sideBand) * mix(1.16, 0.42, grazingEdge);
          float drupPath = mix(0.10, 1.18, pow(ndv, 1.15));
          float optThick = clamp(
            coreThick * (0.34 + 0.66 * drupPath) * mix(1.25, 0.48, dThin) * mix(1.95, 0.62, outerDome),
            0.09,
            3.20
          );

          // True Raspberry-Ruby Beer-Lambert spectral absorption:
          // Deep wine shadows -> lush ripe crimson -> blazing luminous translucent ruby-scarlet -> warm glowing coral-rose edge (zero yellow/white wash!)
          vec3 carnelianSigma = vec3(0.32, 3.10, 3.35);
          vec3 beer = exp(-carnelianSigma * optThick);

          // 4. Henyey-Greenstein forward scatter + side-through-drupelet exit radiance:
          float cosL = dot(-vDir, sideL);
          float g = 0.60;
          float hg = (1.0 - g * g) / (12.56637 * pow(max(0.08, 1.0 + g * g - 2.0 * g * cosL), 1.5));
          // Light punching through each drupelet from sideL out toward the camera:
          float exitWrap = pow(clamp(dot(-nDir, sideL) * 0.55 + 0.45, 0.0, 1.0), 1.35);
          float entryWrap = pow(clamp(dot(nDir, sideL) * 0.65 + 0.35, 0.0, 1.0), 1.15);
          // Curved translucent wall around each individual drupelet (preserves crisp dark seed center & dark crevices!)
          float drupWall = pow(1.0 - ndv, 1.38) * smoothstep(0.02, 0.32, ndv) * outerDome;
          float drupBelly = (1.0 - seedPip * 0.72) * outerDome;

          // Intense sunlit ruby-crimson light streaming through the side (vivid raspberry-scarlet -> warm glowing coral-rose at thinnest edge!)
          vec3 sideSun = vec3(2.25, 0.24, 0.22);
          float sideGate = mix(0.05, 1.36, sideBand) + grazingEdge * (0.14 + 0.85 * litSideCore);

          // Primary light punching through the lit side of the raspberry!
          vec3 sidePunch = sideSun * beer * (exitWrap * 0.82 + entryWrap * 0.58 + hg * 0.55) * sideGate * drupBelly;

          // Exaggerated Day-19 light-piping along curved drupelet walls & grazing side silhouette (molten glowing raspberry-ruby!)
          vec3 pipeSpectrum = exp(-carnelianSigma * mix(0.85, 0.18, litSideCore));
          vec3 pipeSun = vec3(2.65, 0.30, 0.25);
          vec3 sidePipe = pipeSun * pipeSpectrum * (drupWall * (0.14 + 1.25 * litSideCore) + grazingEdge * (0.10 + 0.95 * litSideCore) * outerDome) * (0.55 + 0.50 * dThin);

          // Deep ruby-magenta internal bounce on the shaded side so shadow drupelets stay rich velvet-berry, never flat black
          vec3 shadowJewel = vec3(0.32, 0.012, 0.036) * (0.32 + 0.68 * drupWall) * outerDome;

          // Subtle per-drupelet ripeness modulation
          vec3 drupHueTint = mix(vec3(1.0), clamp(baseCol * 3.0 + vec3(0.36, 0.08, 0.12), vec3(0.45), vec3(1.22)), 0.28);
          vec3 transTotal = (sidePunch + sidePipe * 0.90) * drupHueTint * boost + shadowJewel;

          // Soft frosted sea-glass velvet sheen on curved rims (luminous raspberry-coral on the lit side, deep velvet on shadow side!)
          float frostRim = pow(1.0 - ndv, 2.2) * outerDome * fleshMask;
          vec3 frostTint = mix(vec3(0.34, 0.03, 0.08), vec3(1.55, 0.26, 0.26), litSideCore) * (0.16 + 0.22 * outsideIce);

          vec3 combinedDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + transTotal * fleshMask + frostTint * frostRim;
          // Inside ice: gentle frost veil softens the berry under frozen rime; outside ice: pure glowing frosted sea glass!
          float iceFrost = (1.0 - outsideIce) * 0.24 * (0.35 + 0.65 * pow(1.0 - ndv, 1.5)) * fleshMask;
          vec3 iceVeilCol = mix(vec3(0.86, 0.66, 0.70), baseCol * 1.45 + vec3(0.14, 0.02, 0.04), 0.68);
          combinedDiffuse = mix(combinedDiffuse, iceVeilCol, iceFrost);

          reflectedLight.directDiffuse = combinedDiffuse;
          reflectedLight.indirectDiffuse = vec3(0.0);

          // Delicate warm golden-crimson glow on tiny botanical hairs along the lit side silhouette!
          if (hairMask > 0.05) {
            float hairLit = (0.18 + 1.25 * litSideCore + 0.45 * grazingEdge) * (0.40 + 0.60 * pow(1.0 - ndv, 1.2));
            vec3 hairGlowCol = mix(vec3(0.42, 0.10, 0.10), vec3(1.85, 0.68, 0.34), litSideCore * outsideIce);
            reflectedLight.directDiffuse += hairGlowCol * hairLit * hairMask * (0.28 + 0.34 * outsideIce);
          }

          // Soft velvety micro-frosted satin sheen (wide gentle lobe, zero hard marble dots!)
          vec3 hSide = normalize(sideL + vDir);
          float softSatin = pow(max(dot(nDir, hSide), 0.0), 18.0) * (0.18 + 0.24 * litSideCore);
          float microGlint = pow(max(dot(nDir, hSide), 0.0), 64.0) * 0.14 * outsideIce;
          reflectedLight.directSpecular += vec3(1.45, 0.78, 0.62) * (softSatin + microGlint) * outerDome * fleshMask;
        }`)},{material:n,uThaw:t}}function Th(i){return new Ao({map:i.albedo,bumpMap:i.bump,bumpScale:.016,roughnessMap:i.roughness,roughness:.68,metalness:0,specularIntensity:.24,specularColor:new Ut(9330762),envMapIntensity:.12})}function Eh(i){return new Ao({map:i.albedo,bumpMap:i.bump,bumpScale:.018,roughnessMap:i.roughness,roughness:.56,metalness:0,specularIntensity:.34,specularColor:new Ut(16773286),side:Wn,envMapIntensity:.22})}function fa(i){return new Ao({map:i.albedo,bumpMap:i.bump,bumpScale:.028,roughnessMap:i.roughness,roughness:.94,metalness:0,specularIntensity:.14,specularColor:new Ut(13149316),envMapIntensity:.08})}function Z_(i,e){const t=e.toppings;if(t.length===0)return[];const n=e.base==="coconut",s=i===1&&!n&&t.length===2&&t.includes("strawberry")&&t.includes("blueberry"),o=Fn(i*7919+13+t.length*97);if(s){const u=d=>(o()-.5)*d;return[{kind:"strawberry",x:.26+u(.01),y:.45+u(.01),z:.014,scale:[.255,.295,.25],rot:[.36,-.44,-.62],radius:.2,baseBend:[.24,.16,-.16],variant:0},{kind:"strawberry",x:-.24+u(.012),y:-.09+u(.012),z:.042,scale:[.22,.245,.225],rot:[-.38,.52,.38],radius:.195,baseBend:[-.28,.18,.18],variant:1},{kind:"strawberry",x:-.26+u(.012),y:-.73+u(.012),z:.008,scale:[.185,.205,.19],rot:[.44,.48,-.92],radius:.165,baseBend:[.12,-.08,.08],variant:2},{kind:"strawberry",x:.21+u(.015),y:-.44+u(.015),z:-.022,scale:[.225,.26,.225],rot:[-.48,-.56,.78],radius:.185,baseBend:[-.14,.12,-.1],variant:0},{kind:"strawberry",x:-.01+u(.01),y:.9+u(.01),z:-.008,scale:[.115,.105,.11],rot:[.58,.28,2.82],radius:.098,baseBend:[.06,.04,.04],variant:3},{kind:"strawberry",x:-.32+u(.015),y:.33+u(.015),z:-.015,scale:[.125,.14,.13],rot:[.46,.62,-.48],radius:.115,baseBend:[-.1,-.06,.06],variant:2},{kind:"strawberry",x:.33+u(.015),y:-.81+u(.015),z:-.01,scale:[.095,.105,.1],rot:[-.42,-.54,1.18],radius:.088,baseBend:[.04,.04,-.04],variant:3},{kind:"strawberry",x:.14+u(.015),y:.08+u(.015),z:.044,scale:[.082,.088,.086],rot:[.35,-.4,1.85],radius:.075,baseBend:[.04,-.03,.03],variant:3},{kind:"strawberry",x:-.06+u(.015),y:-.24+u(.015),z:.048,scale:[.076,.082,.08],rot:[-.3,.42,-1.25],radius:.07,baseBend:[.03,.03,-.02],variant:3},{kind:"blueberry",x:-.17+u(.012),y:.65+u(.012),z:-.034,scale:[.132,.132,.125],rot:[1.15,.35,-.25],radius:.128,variant:1},{kind:"blueberry",x:.36+u(.012),y:-.07+u(.012),z:-.022,scale:[.118,.118,.112],rot:[1.28,-.52,.35],radius:.114,variant:0},{kind:"blueberry",x:-.155+u(.01),y:-.45+u(.01),z:.028,scale:[.122,.122,.116],rot:[1.18,.22,-.18],radius:.118,variant:2},{kind:"blueberry",x:.075+u(.01),y:-.63+u(.01),z:.034,scale:[.136,.136,.128],rot:[1.46,-.28,.38],radius:.132,variant:0},{kind:"blueberry",x:.21+u(.01),y:-.84+u(.01),z:-.004,scale:[.094,.094,.09],rot:[1.35,.55,.12],radius:.092,variant:1},{kind:"blueberry",x:-.42+u(.01),y:-.53+u(.01),z:-.03,scale:[.104,.104,.098],rot:[1.22,.72,-.4],radius:.1,variant:2},{kind:"blueberry",x:.41+u(.01),y:-.67+u(.01),z:-.024,scale:[.098,.098,.092],rot:[1.1,-.65,.22],radius:.095,variant:0},{kind:"blueberry",x:.31+u(.012),y:.24+u(.012),z:.022,scale:[.084,.084,.08],rot:[1.38,-.4,.5],radius:.082,variant:1},{kind:"blueberry",x:-.34+u(.012),y:-.26+u(.012),z:-.018,scale:[.088,.088,.084],rot:[1.24,.48,-.35],radius:.085,variant:2}]}const a=[],r=[];function l(u,d,g,x,p,m=0){const S=u==="shaved-lemon"||u==="chocolate"&&d<.065||u==="kaksmulor"&&m>=2||u==="raspberry"&&m>=4||u==="strawberry"&&m===3||u==="blueberry"&&d<.096;for(let y=0;y<95;y++){const _=g+o()*(x-g),A=Q((_-Fe.yBottom)/(Fe.yTop-Fe.yBottom),0,1),E=Math.max(.05,Mf(A)),v=u==="shaved-lemon"?1.55:u==="kaksmulor"&&m<2?1.24:S?1.1:1.08,T=Math.max(.04,E-d*v),U=(o()*2-1)*T,C=u==="strawberry"?m>=2?d*.62:d*.44:u==="shaved-lemon"?d*.35:u==="kaksmulor"&&m<2?d*.45:u==="chocolate"?d*.62:u==="blueberry"&&m>=1?d*.68:d*.92,D=u==="shaved-lemon"||u==="kaksmulor"||u==="chocolate"&&d<.068,O=Math.max(-.02,Fe.halfDepth-C-(n?D?.002:.012:.028));let Y;if(n){const B=o()<.78?1:-1,$=D?.016:.026,K=Math.max(.02,O-o()*$);Y=B*K}else Y=Q(p+(o()*2-1)*.026,-.05,O);if(_<Fe.stickTopY+d*.55&&Math.abs(U)<Fe.stickEdgeX+d*.52&&Math.abs(Y)<Fe.stickDepth*.5+C*.52){const B=Math.min(Math.max(.035,O),Fe.stickDepth*.5+C*.62);Y=(Y>=0?1:-1)*B}let R=!0;for(const B of r){const $=U-B.x,K=_-B.y,he=(Y-B.z)*1.45,ee=(d+B.r)*(u==="shaved-lemon"||u==="kaksmulor"&&m>=2?.46:S?.56:.78);if($*$+K*K+he*he<ee*ee){R=!1;break}}if(R){if(r.push({x:U,y:_,z:Y,r:d}),u==="strawberry"){const B=m>=2,$=B?d*1.08:d*1.18,K=o()<.5?-1:1,he=o()<.5?-1:1,ee=o()<.5?-1:1,ue=B?.06:o()<.55?.22+o()*.14:.08+o()*.1,ae=n?K*(.08+o()*.22):B?(o()-.5)*1.4:K*(.28+o()*.36),le=n?he*(.08+o()*.24):B?(o()-.5)*1.6:he*(.32+o()*.42);a.push({kind:u,x:U,y:_,z:Y,scale:[$*(.94+o()*.12),$*(1.02+o()*.14),$],rot:[ae,le,(o()-.5)*Math.PI*1.9],radius:d,baseBend:[ee*ue,(o()-.5)*(B?.08:.34),(o()-.5)*(B?.08:.3)],variant:m})}else if(u==="blueberry")a.push({kind:u,x:U,y:_,z:Y,scale:[d,d,d*(m>=1?.9:.94)],rot:[.95+o()*.85,(o()-.5)*1.6,(o()-.5)*1.4],radius:d,variant:m});else if(u==="raspberry"){const B=m===2||m===3,$=m>=4;a.push({kind:u,x:U,y:_,z:Y,scale:$?[d*(.94+o()*.14),d*(.94+o()*.14),d*(.94+o()*.14)]:[d*.98,d*1.08,d*.98],rot:B?[(o()-.5)*.95,(o()-.5)*1.15,(o()-.5)*2.6]:[(o()-.5)*2.4,(o()-.5)*2.8,(o()-.5)*2.4],radius:d,variant:m})}else if(u==="chocolate")a.push({kind:u,x:U,y:_,z:Y,scale:[d*(.95+o()*.35),d*(.85+o()*.32),d*(.8+o()*.28)],rot:[o()*3.14,o()*3.14,o()*3.14],radius:d});else if(u==="shaved-lemon")a.push({kind:u,x:U,y:_,z:Y,scale:[d*1.35,d*1.35,d*1.2],rot:[(o()-.5)*1.2,(o()-.5)*1.4,o()*Math.PI*2],radius:d});else{const B=m<2,$=B?d*1.12:d*1.05;a.push({kind:u,x:U,y:_,z:Y,scale:[$,$*(.88+o()*.24),$],rot:B?[(o()-.5)*.55,(o()-.5)*.65,o()*Math.PI*2]:[o()*3.14,o()*3.14,o()*3.14],radius:d,variant:m})}return!0}}return!1}const c=t.filter(u=>u==="strawberry"||u==="blueberry"||u==="raspberry"||u==="chocolate"),h=t.includes("shaved-lemon"),f=t.includes("kaksmulor");if(c.length>0){const u=c.length===1?10:c.length===2?6:c.length===3?4:3,d=[[.32,.88],[-.22,.34],[-.86,-.2]];for(let g=0;g<c.length;g++){const x=c[g];for(let p=0;p<u;p++){const[m,S]=d[(p+g)%d.length];if(x==="strawberry"){const y=p===0?0:p%4===1?1:p%4===2?2:p%4===3?3:0,_=y===0?.2+o()*.038:y===1?.165+o()*.036:y===2?.13+o()*.032:.072+o()*.028;l(x,_,m,S,p%2===0?.042:-.015,y)}else if(x==="blueberry"){const y=p%3===1?1:p%3===2?2:0,_=.088+o()*.044;l(x,_,m,S,p%3===0?.056:-.012,y)}else if(x==="raspberry"){const y=p%4,_=y===3?.105+o()*.028:y===2?.13+o()*.03:.14+o()*.032;l(x,_,m,S,p%2===0?.045:-.015,y)}else if(x==="chocolate"){const y=.066+o()*.028;l(x,y,m,S,p%2===0?.052:-.01)}}}if(c.includes("chocolate")){const g=c.length===1?14:10;for(let x=0;x<g;x++){const p=.034+o()*.026;l("chocolate",p,-.86,.84,x%3===0?-.012:.056)}}if(c.includes("raspberry")){const g=c.length===1?6:4;for(let p=0;p<g;p++){const m=.06+o()*.026;l("raspberry",m,-.84,.82,.048,4)}const x=c.length===1?8:5;for(let p=0;p<x;p++){const m=.036+o()*.018;l("raspberry",m,-.86,.84,.054,5)}}if(c.includes("strawberry")){const g=c.length===1?6:4;for(let x=0;x<g;x++){const p=.058+o()*.032;l("strawberry",p,-.84,.82,.046,3)}}if(c.includes("blueberry")){const g=c.length===1?5:3;for(let x=0;x<g;x++){const p=.068+o()*.024,m=o()<.65?o()<.5?1:2:0;l("blueberry",p,-.86,.8,.048,m)}}}if(f){const u=c.length===0?14:9;for(let g=0;g<u;g++){const x=-.82+g/u*1.48,p=Math.min(.74,x+.24),m=c.length===0?.064+o()*.032:.058+o()*.024,S=o()<.8?0:1;l("kaksmulor",m,x,p,.056,S)}const d=c.length===0?54:34;for(let g=0;g<d;g++){const x=.018+o()*.024,p=o()<.78?2:3;l("kaksmulor",x,-.86,.82,g%3===0?-.014:.062,p)}}if(h){const u=c.length===0&&!f?56:42;for(let d=0;d<u;d++){const g=.031+o()*.014;l("shaved-lemon",g,-.86,.82,d%3===0?-.014:.054,d%2)}}return a}function Pf(i,e=ea){const t=new Ki,n=[],s=da(e),o=new Set(e.toppings),a=o.has("strawberry")?hr(i*31+103):null,r=o.has("strawberry")?hr(i*37+211):null,l=o.has("blueberry")?ca(i*41+307):null,c=o.has("blueberry")?ca(i*43+419):null,h=o.has("raspberry")?xh(i*47+521):null,f=o.has("chocolate")?Sh(i*53+613):null,u=o.has("shaved-lemon")?_h(i*59+709):null,d=o.has("kaksmulor")?ua(i*61+811,"dark"):null,g=o.has("kaksmulor")?ua(i*67+907,"butter"):null,x=H_(i*19+503),p={uIceBottomY:{value:Fe.yBottom},uIceTopY:{value:Fe.yTop},uIceAmount:{value:1},uStickWetness:{value:0},uStainColor:{value:new G(s.stainColor[0],s.stainColor[1],s.stainColor[2])}},m=new Ao({map:x.albedo,bumpMap:x.bump,bumpScale:.008,roughness:.72,metalness:0,clearcoat:0,clearcoatRoughness:.12,envMapIntensity:.62});m.customProgramCacheKey=()=>"wood-stick-v2";const S=(2/Rf).toFixed(7),y=(2/Cf).toFixed(7);m.onBeforeCompile=z=>{z.uniforms.uIceBottomY=p.uIceBottomY,z.uniforms.uIceTopY=p.uIceTopY,z.uniforms.uIceAmount=p.uIceAmount,z.uniforms.uStickWetness=p.uStickWetness,z.uniforms.uStainColor=p.uStainColor,z.uniforms.uCarveMap={value:x.carving},z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vStickWorldPos;
        varying vec3 vStickWorldNormal;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vStickWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vStickWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uIceBottomY;
        uniform float uIceTopY;
        uniform float uIceAmount;
        uniform float uStickWetness;
        uniform vec3 uStainColor;
        uniform sampler2D uCarveMap;
        varying vec3 vStickWorldPos;
        varying vec3 vStickWorldNormal;
        float stickRevStep(float hi, float lo, float x) { return 1.0 - smoothstep(lo, hi, x); }
        vec3 stickSafeNorm(vec3 v) { return v * inversesqrt(max(dot(v, v), 1e-8)); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float sSharedDampMask = 0.0;
        float sSharedRevealedUpper = 0.0;
        float sSharedCarveGx = 0.0;
        float sSharedCarveGy = 0.0;
        float sSharedGroovePool = 0.0;
        float sSharedFrontFace = 0.0;
        {
          // Continuous seamless berry-stain along the entire stick (ZERO blonde seam at yBot or yTop!)
          float effRefY = mix(${Fe.yBottom.toFixed(3)}, uIceBottomY, uIceAmount);
          float distBelow = effRefY - vStickWorldPos.y;
          float collarShadow = exp(-max(0.0, distBelow) * 16.0) * smoothstep(-0.08, 0.02, distBelow) * uIceAmount;
          float insideIce = stickRevStep(0.04, -0.10, distBelow) * stickRevStep(uIceTopY + 0.04, uIceTopY - 0.04, vStickWorldPos.y) * uIceAmount;

          // Upper stick (y > -1.02) has been soaking inside frozen berry ice the whole time -> seamless deep berry stain!
          float wasSubmerged = smoothstep(-1.14, -0.96, vStickWorldPos.y);
          float upperSoak = wasSubmerged * smoothstep(0.08, 0.36, uStickWetness);
          float revealedUpper = wasSubmerged * max(1.0 - uIceAmount, smoothstep(uIceTopY - 0.04, uIceTopY + 0.03, vStickWorldPos.y));
          sSharedRevealedUpper = revealedUpper;

          // Porous birch fibers progressively capillary-wick melted berry juice down the ENTIRE lower handle!
          float grainWick =
            0.50 + 0.30 * sin(vStickWorldPos.x * 58.0 + 1.1) +
            0.20 * sin(vStickWorldPos.x * 134.0 - 0.6);
          float progress = smoothstep(0.04, 0.78, uStickWetness);
          float edgeIrreg = (clamp(grainWick, 0.0, 1.0) - 0.5) * 0.20 * (1.0 - smoothstep(0.55, 0.88, uStickWetness));
          float wickReach = progress * 1.55 + edgeIrreg;
          // Overlap generously upward past effRefY so lowerSoak + upperSoak weld at 1.000 with ZERO band!
          float distPos = max(0.0, distBelow);
          float topOverlap = smoothstep(-0.30, -0.10, distBelow);
          float lowerSoak = stickRevStep(wickReach + 0.14, wickReach - 0.18, distPos) *
                            topOverlap *
                            smoothstep(0.02, 0.18, uStickWetness);
          float lowerDamp = stickRevStep(wickReach + 0.12, wickReach - 0.16, distPos) *
                            topOverlap *
                            smoothstep(0.03, 0.20, uStickWetness);
          sSharedDampMask = clamp(max(lowerDamp, revealedUpper), 0.0, 1.0);
          float soakFront = clamp(max(lowerSoak, upperSoak), 0.0, 1.0);
          float fullSoak = clamp(max(smoothstep(0.30, 0.90, uStickWetness) * lowerSoak, upperSoak * 0.95), 0.0, 1.0);

          diffuseColor.rgb *= mix(vec3(1.0), vec3(0.82, 0.66, 0.64), collarShadow * 0.52);
          diffuseColor.rgb *= mix(vec3(1.0), vec3(0.92, 0.76, 0.74), insideIce * 0.32 * (1.0 - upperSoak));

          // Natural damp flavor-stained birch wood (dynamically tints to match mango, berry, chocolate, coconut, etc.!)
          float woodLuma = dot(diffuseColor.rgb, vec3(0.30, 0.59, 0.11));
          vec3 lightTint = mix(vec3(0.88), uStainColor, 0.58);
          vec3 dampStainedWood = mix(
            diffuseColor.rgb * lightTint,
            uStainColor * woodLuma * 1.24,
            0.52 + 0.40 * fullSoak
          );
          vec3 deepStickyTip = uStainColor * 0.90 * woodLuma * 1.18;
          vec3 targetStain = mix(dampStainedWood, deepStickyTip, wasSubmerged * (0.28 + 0.22 * revealedUpper));
          diffuseColor.rgb = mix(diffuseColor.rgb, targetStain, soakFront * (0.58 + 0.38 * fullSoak));

          // Hidden carved signature on the front face of the upper stick underneath the ice cream!
          // Mapped cleanly onto the flat embedded upper face below the rounded cap (revealed as the popsicle melts!)
          // Single 5-tap pass shared directly with lights_fragment_end (halves uCarveMap texture bandwidth!)
          float frontFace = smoothstep(0.45, 0.78, vStickWorldNormal.z);
          sSharedFrontFace = frontFace;
          vec2 carveUv = vec2((vStickWorldPos.y + 0.32) / 0.64, (-vStickWorldPos.x + 0.088) / 0.176);
          if (frontFace > 0.01 && carveUv.x > 0.005 && carveUv.x < 0.995 && carveUv.y > 0.005 && carveUv.y < 0.995) {
            vec2 cTex = texture2D(uCarveMap, carveUv).rg;
            float depth = cTex.r * frontFace;
            float halo = cTex.g * frontFace;
            if (halo > 0.01 || depth > 0.01) {
              vec2 cStep = vec2(${S}, ${y});
              float cUp = texture2D(uCarveMap, carveUv + vec2(cStep.x, 0.0)).r;
              float cDn = texture2D(uCarveMap, carveUv - vec2(cStep.x, 0.0)).r;
              float cLt = texture2D(uCarveMap, carveUv + vec2(0.0, cStep.y)).r;
              float cRt = texture2D(uCarveMap, carveUv - vec2(0.0, cStep.y)).r;
              // Screen-space light comes from upper-left (-X, +Y): upper-left groove wall sits in shadow, lower-right catches warm rim!
              float bevelShade = ((cDn - cUp) * 0.72 + (cLt - cRt) * 0.68) * frontFace;
              sSharedCarveGx = cLt - cRt;
              sSharedCarveGy = cUp - cDn;
              sSharedGroovePool = depth;

              // Pressed/carved inner birch darkened by open wood grain + pooled flavor syrup inside the groove!
              vec3 carvedTint = mix(vec3(0.46, 0.28, 0.19), uStainColor * 0.48, soakFront);
              diffuseColor.rgb *= mix(1.0, 0.88, halo * 0.45);
              diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * carvedTint, clamp(depth * 0.84, 0.0, 0.84));
              // Subtle physical V-groove shadow & chamfer catchlight
              diffuseColor.rgb *= 1.0 + clamp(bevelShade * 0.48, -0.30, 0.22);
            }
          }
        }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        {
          if (sSharedDampMask > 0.01) {
            vec3 sV = normalize(cameraPosition - vStickWorldPos);
            vec3 sN = normalize(vStickWorldNormal);
            // Reuse carved letter gradient computed in color_fragment so studio light glints on the indentation!
            if (sSharedGroovePool > 0.01) {
              sN = normalize(sN + vec3(sSharedCarveGx * 0.42, -sSharedCarveGy * 0.42, 0.0) * sSharedFrontFace);
            }
            float ndv = clamp(dot(sN, sV), 0.0, 1.0);
            // Natural damp-wood sticky satin sheen (camera-aligned azimuth so 360° turntable catches light on both faces!)
            float stickyFresnel = pow(1.0 - ndv, 4.2) * (0.08 + 0.10 * sSharedRevealedUpper);
            vec3 sCamH = stickSafeNorm(vec3(cameraPosition.x, 0.0, cameraPosition.z));
            vec3 sCamR = vec3(sCamH.z, 0.0, -sCamH.x);
            vec3 sH1 = stickSafeNorm(normalize(-0.52 * sCamR + vec3(0.0, 0.38, 0.0) + 0.76 * sCamH) + sV);
            vec3 sH2 = stickSafeNorm(normalize( 0.55 * sCamR + vec3(0.0, 0.32, 0.0) + 0.77 * sCamH) + sV);
            float wetSpec = pow(max(dot(sN, sH1), 0.0), 72.0) * (0.30 + 0.14 * sSharedRevealedUpper)
                          + pow(max(dot(sN, sH2), 0.0), 58.0) * (0.22 + 0.10 * sSharedRevealedUpper);
            // Recessed groove holds slightly darker shadowed cavity while its chamfered rim catches gloss
            reflectedLight.directSpecular += vec3(1.08, 0.94, 0.93) * (wetSpec + stickyFresnel) * sSharedDampMask * (1.0 - sSharedGroovePool * 0.32);
          }
        }`)};const _=q_(),A=new Qt(_,m);A.name="popsicle-stick",t.add(A),n.push(_,m);const E=Z_(i,e),v=[],T=Fn(i*97+7),U=f?Th(f):null,C=u?Eh(u):null,D=d?fa(d):null,O=g?fa(g):null;for(const z of[U,C,D,O])z&&n.push(z);E.forEach((z,Qe)=>{let Ie,ht=null,nn,Kt;switch(z.kind){case"strawberry":{if(!a||!r)return;Ie=yh(i*131+Qe*17+5,.16+T()*.04,z.variant??0);const zt=Ll(Qe%2===0?a:r);ht=zt.material,nn=zt.uBend,n.push(ht);break}case"blueberry":{if(!l||!c)return;Ie=Nl(i*149+Qe*23+11,z.variant??0);const zt=pr(Qe%2===0?l:c);ht=zt.material,Kt=zt.uThaw,n.push(ht);break}case"raspberry":{if(!h)return;Ie=bh(i*157+Qe*29+13,z.variant??0);const zt=wh(h);ht=zt.material,Kt=zt.uThaw,n.push(ht);break}case"chocolate":{if(!U)return;Ie=Il(i*163+Qe*31+17),ht=U;break}case"shaved-lemon":{if(!C)return;Ie=qa(i*173+Qe*37+19),ht=C;break}case"kaksmulor":{const zt=(z.variant??0)<2;if(ht=(z.variant??0)%2===1?O:D,!ht)return;Ie=Za(i*179+Qe*41+23,zt);break}}n.push(Ie);const $t=new Qt(Ie,ht);$t.position.set(z.x,z.y,z.z),$t.scale.set(z.scale[0],z.scale[1],z.scale[2]),$t.rotation.set(z.rot[0],z.rot[1],z.rot[2]),$t.name=`${z.kind}-${Qe}`,t.add($t);const Ot=z.baseBend?new G(z.baseBend[0],z.baseBend[1],z.baseBend[2]):new G;nn&&nn.value.copy(Ot);const Wt=z.kind==="chocolate"?1.55:z.kind==="blueberry"?1.12:z.kind==="raspberry"?.95:z.kind==="strawberry"?.86:z.kind==="kaksmulor"?.72:.44,_t=Math.max(.001,Wt*z.radius*z.radius*z.radius*420);v.push({kind:z.kind,mesh:$t,basePos:$t.position.clone(),baseQuat:$t.quaternion.clone(),baseScale:$t.scale.clone(),radius:z.radius,mass:_t,velocity:new G,angVel:new G,detached:!1,detachTime:0,detachOrigin:$t.position.clone(),cavityDepth:0,stickCavity:0,grabbed:!1,exposure:0,wetContact:0,knockAccum:0,jostlePos:new G,jostleVel:new G,bendAmt:Ot.x,bendVel:0,bendPhase:T()*Math.PI*2,baseBend:Ot,bendUniform:nn,thawUniform:Kt})});const Y=.28;let R=-1,B=-1,$=0;const K=new Wi,he=new G(0,0,1),ee=new G,ue=new G,ae=new G,le=new G,Ee=new G,N=new G,j=new G,W=new G,I=new Li,X=new es,te=new Li,ce=new G;let ie=0,re=!1,Me=0;function se(z){return z.mesh.visible?z.detached||z.exposure>=Y:!1}function fe(){B>=0&&B<v.length&&(v[B].grabbed=!1),B=-1,R=-1,N.set(0,0,0),re=!1,ie=0,Me=0}function de(){fe();for(const z of v)z.mesh.position.copy(z.basePos),z.mesh.quaternion.copy(z.baseQuat),z.mesh.scale.copy(z.baseScale),z.velocity.set(0,0,0),z.angVel.set(0,0,0),z.detached=!1,z.detachTime=0,z.detachOrigin.copy(z.basePos),z.cavityDepth=0,z.stickCavity=0,z.grabbed=!1,z.exposure=0,z.wetContact=0,z.knockAccum=0,z.jostlePos.set(0,0,0),z.jostleVel.set(0,0,0),z.bendAmt=z.baseBend.x,z.bendVel=0,z.bendUniform?.value.copy(z.baseBend),z.thawUniform&&(z.thawUniform.value=0),z.mesh.visible=!0;p.uIceBottomY.value=Fe.yBottom,p.uIceTopY.value=Fe.yTop,p.uIceAmount.value=1,p.uStickWetness.value=0}const we={blueberry:{gravity:8.2,restitution:.3,wetDrag:1.35,adhesion:.24,rollGain:1.15,airDragLin:.12,airDragQuad:.038,angDrag:.45,maxSpin:9.8,flatAero:0,magnus:.055,flexGain:.58,isFlat:!1},raspberry:{gravity:7.7,restitution:.2,wetDrag:1.95,adhesion:.32,rollGain:1.25,airDragLin:.16,airDragQuad:.05,angDrag:.62,maxSpin:8.8,flatAero:0,magnus:.044,flexGain:.68,isFlat:!1},strawberry:{gravity:7.3,restitution:.14,wetDrag:2.15,adhesion:.38,rollGain:.6,airDragLin:.18,airDragQuad:.048,angDrag:.95,maxSpin:5.4,flatAero:1.05,magnus:.018,flexGain:1,isFlat:!0},chocolate:{gravity:9.4,restitution:.44,wetDrag:.95,adhesion:.14,rollGain:.9,airDragLin:.08,airDragQuad:.025,angDrag:.38,maxSpin:10.2,flatAero:.14,magnus:.028,flexGain:.16,isFlat:!1},kaksmulor:{gravity:7.8,restitution:.36,wetDrag:1.25,adhesion:.2,rollGain:1,airDragLin:.15,airDragQuad:.046,angDrag:.55,maxSpin:11,flatAero:.22,magnus:.036,flexGain:.22,isFlat:!1},"shaved-lemon":{gravity:6.2,restitution:.12,wetDrag:2.05,adhesion:.34,rollGain:.48,airDragLin:.28,airDragQuad:.085,angDrag:1.2,maxSpin:6.8,flatAero:1.4,magnus:.022,flexGain:.85,isFlat:!0}},Re=new es,ze=new Li,De=new G,it=new Li,be=new G,Ce=new G,H=new G,nt=new G,ke=new G,$e=new G,pe=new G,Ke=new G,qe=new G,at=new G,L={depth:0,dx:0,dz:0,dyBot:0,dyTop:0};function w(z){switch(z.kind){case"strawberry":return z.radius*.42;case"shaved-lemon":return z.radius*.35;case"kaksmulor":return z.radius*.5;case"chocolate":return z.radius*.62;default:return z.radius*.84}}function ne(z,Qe,Ie,ht,nn){const $t=zi(z-.012,Qe,Ie,ht)-zi(z+.012,Qe,Ie,ht),Ot=zi(z,Qe-.012,Ie,ht)-zi(z,Qe+.012,Ie,ht),Wt=zi(z,Qe,Ie-.012,ht)-zi(z,Qe,Ie+.012,ht),_t=$t*$t+Ot*Ot+Wt*Wt;if(_t>1e-10){const zt=1/Math.sqrt(_t);nn.set($t*zt,Ot*zt,Wt*zt)}else{const zt=Math.abs(z)>.02?Math.sign(z):0,hn=Ie<=.004?-1:1;nn.set(zt*.35,0,hn).normalize()}return nn}const Pe=Fe.stickEdgeX,_e=Fe.stickDepth*.5+Fe.stickBevelThickness,Ve=Fe.stickTopY-Pe,je=Fe.stickBottomY+Pe;function Se(z,Qe,Ie,ht){if(Qe>Ve||Qe<je){const Wt=Qe>Ve,_t=Qe-(Wt?Ve:je),zt=Math.hypot(z,_t),hn=zt-Pe,en=Math.abs(Ie)-_e;if(hn>0||en>0){const Be=Math.max(0,hn),Pt=Math.max(0,en),Dt=Math.hypot(Be,Pt),fn=zt>1e-5?z/zt:0,tn=zt>1e-5?_t/zt:Wt?1:-1,V=Ie>=0?1:-1;return Dt>1e-6?ht.set(Be*fn/Dt,Be*tn/Dt,Pt*V/Dt):ht.set(0,Wt?1:-1,0),Dt}if(en>hn)return ht.set(0,0,Ie>=0?1:-1),en;const ve=zt>1e-5?1/zt:0;return ht.set(z*ve,_t*ve||(Wt?1:-1),0),hn}const nn=Q(Qe,je,Ve),Kt=Math.abs(z)-Pe,$t=Math.abs(Qe-nn),Ot=Math.abs(Ie)-_e;if(Kt>0||$t>0||Ot>0){const Wt=Math.max(0,Kt),_t=Math.max(0,$t),zt=Math.max(0,Ot),hn=Math.hypot(Wt,_t,zt);return hn>1e-6?ht.set(Wt*(z>=0?1:-1)/hn,_t*(Qe>=nn?1:-1)/hn,zt*(Ie>=0?1:-1)/hn):ht.set(0,0,Ie>=0?1:-1),hn}return Ot>=Kt?(ht.set(0,0,Ie>=0?1:-1),Ot):(ht.set(z>=0?1:-1,0,0),Kt)}function ge(z,Qe,Ie=0){const ht=Af(z.basePos.x,z.basePos.y+Ie,z.basePos.z,Qe,L),nn=me(.6,.84,Qe.melt)*.06,Kt=w(z),$t=ht.dz+Math.abs(z.basePos.z);return Math.min(ht.depth-(z.radius*.2+nn),ht.dx-(z.radius*.54+nn*.8),$t-(Kt*.74+nn*.7),ht.dz-(Kt*.32+nn*.5),ht.dyBot-(z.radius*.36+nn*.5))-z.knockAccum}function Xe(z,Qe,Ie=0){const ht=Math.max(.045,z.radius*.48);z.exposure=Q(1-me(0,ht,Qe),0,1);const nn=me(Y,1,z.exposure),Kt=nn*nn*(.65+.35*nn),$t=Math.abs(z.basePos.x)>.03?Math.sign(z.basePos.x):1,Ot=z.basePos.z<=.004?-1:1,Wt=z.basePos.y>.65,_t=we[z.kind].isFlat,zt=_t?Kt*(Wt?.032:.022):Kt*(Wt?.026:.016),hn=_t?Kt*(Wt?.016:.05):Kt*(Wt?.014:.048);z.mesh.position.set(z.basePos.x+$t*Kt*.012+z.jostlePos.x,z.basePos.y+Ie-hn+z.jostlePos.y,z.basePos.z+Ot*zt+z.jostlePos.z);const en=Ot*Kt*(_t?.24:.16)+z.jostlePos.z*2.4,ve=-$t*Kt*(_t?.18:.2)-z.jostlePos.x*2.4;Re.set(en,0,ve),ze.setFromEuler(Re),z.mesh.quaternion.copy(z.baseQuat).multiply(ze),z.mesh.scale.copy(z.baseScale);const Be=me(.18,1,z.exposure),Pt=z.baseBend.x>=0?1:-1;z.bendAmt=z.baseBend.x+Pt*Be*.26,z.bendVel=0,z.bendUniform&&z.bendUniform.value.set(z.bendAmt,z.baseBend.y+Be*.16,z.baseBend.z-$t*Be*.16),z.thawUniform&&(z.thawUniform.value=me(.02,.38,z.exposure))}function J(z,Qe,Ie){const{yTop:ht,yBot:nn,slideY:Kt,iceAmount:$t,iceGone:Ot}=ws(z.melt);p.uIceBottomY.value=nn,p.uIceTopY.value=ht,p.uIceAmount.value=$t,Ie!==void 0&&(p.uStickWetness.value=Q(Math.max(Ie*1.1,me(.012,.5,z.melt)*.96),0,1)),Qe===0&&B>=0&&fe();for(let en=0;en<v.length;en++){const ve=v[en];if(Qe===0)ve.knockAccum=0,ve.jostlePos.set(0,0,0),ve.jostleVel.set(0,0,0);else if(!ve.detached&&!ve.grabbed){const tn=Math.min(.033,Qe);ve.jostleVel.x+=(-ve.jostlePos.x*140-ve.jostleVel.x*14)*tn,ve.jostleVel.y+=(-ve.jostlePos.y*140-ve.jostleVel.y*14)*tn,ve.jostleVel.z+=(-ve.jostlePos.z*140-ve.jostleVel.z*14)*tn,ve.jostlePos.addScaledVector(ve.jostleVel,tn),ve.jostlePos.lengthSq()>.045*.045&&ve.jostlePos.setLength(.045)}const Be=ge(ve,z,Kt),Pt=Ot||z.melt>.14&&Be<=0;if(Qe===0){Pt?(ve.detached=!0,ve.mesh.visible=!1):(ve.detached=!1,ve.detachTime=0,ve.detachOrigin.copy(ve.basePos),ve.cavityDepth=0,ve.stickCavity=0,ve.wetContact=0,ve.grabbed=!1,ve.mesh.visible=!0,Xe(ve,Be,Kt),ve.velocity.set(0,0,0));continue}if(!ve.detached){if(ve.grabbed){const Dt=Math.max(.045,ve.radius*.48);ve.exposure=Q(1-me(0,Dt,Be),0,1),ve.thawUniform&&(ve.thawUniform.value=Math.max(ve.thawUniform.value,me(.02,.38,ve.exposure))),Pt&&(ve.detached=!0,ve.detachTime=0,ve.detachOrigin.copy(ve.mesh.position),ve.cavityDepth=0,ve.stickCavity=0,te.copy(ve.mesh.quaternion),re=!0,ie=0,ve.thawUniform&&(ve.thawUniform.value=1));continue}if(Xe(ve,Be,Kt),en===R&&ve.exposure>=Y){$+=Qe;const Dt=Math.sin($*9.5)*.0055*me(Y,.85,ve.exposure);ve.mesh.position.y-=Math.abs(Dt)*.55,Re.set(Dt*3,0,Dt*6.5),ze.setFromEuler(Re),ve.mesh.quaternion.multiply(ze)}if(Pt){ve.detached=!0,ve.detachTime=0,ve.detachOrigin.copy(ve.mesh.position);const Dt=w(ve),fn=Ot?-1:zi(ve.mesh.position.x,ve.mesh.position.y,ve.mesh.position.z,z);ve.cavityDepth=Ot?0:Math.max(0,fn+Dt);const tn=Se(ve.mesh.position.x,ve.mesh.position.y,ve.mesh.position.z,nt);ve.stickCavity=Math.max(0,Dt-tn),ve.wetContact=Ot?0:1,ne(ve.mesh.position.x,ve.mesh.position.y,ve.mesh.position.z,z,be);const V=-be.y,We=-V*be.x,Ze=-1-V*be.y,oe=-V*be.z,Ue=Math.hypot(We,Ze,oe),M=.065+en%3*.012;if(Ue>.05&&!Ot)ve.velocity.set(We/Ue*M+be.x*.028+ve.jostleVel.x*.45,Ze/Ue*M+Math.min(0,be.y*.02)+ve.jostleVel.y*.45,oe/Ue*M+be.z*.032+ve.jostleVel.z*.45);else{const k=Math.abs(ve.basePos.x)>.04?Math.sign(ve.basePos.x):en%2===0?1:-1,b=ve.basePos.z<=.004?-1:1;ve.velocity.set(k*.03+ve.jostleVel.x*.5,-.07+ve.jostleVel.y*.5,b*.03+ve.jostleVel.z*.5)}H.crossVectors(be,ve.velocity);const P=we[ve.kind].rollGain/Math.max(.06,Dt);ve.angVel.copy(H).multiplyScalar(P*.35),ve.angVel.y+=(en%2===0?1:-1)*.14;const Z=ve.baseBend.x>=0?1:-1;ve.bendVel=we[ve.kind].isFlat?Z*.75:.3,ve.thawUniform&&(ve.thawUniform.value=1)}}}if(Qe<=0)return;const Wt=4,_t=Math.min(.05,Qe)/Wt,zt=Fe.halfWidthBottom+.28,hn=Fe.halfDepth+.28;for(let en=0;en<v.length;en++){const ve=v[en];!ve.detached||!ve.mesh.visible||ve.grabbed||(ve.detachTime+=Qe)}for(let en=0;en<Wt;en++){for(let ve=0;ve<v.length;ve++){const Be=v[ve];if(!Be.detached||!Be.mesh.visible||Be.grabbed)continue;const Pt=we[Be.kind],Dt=w(Be),fn=.28+.72*me(0,.12,Be.detachTime);Be.velocity.y-=Pt.gravity*fn*_t;const tn=Be.velocity.lengthSq();if(tn>1e-6){const oe=Math.sqrt(tn);if(Pt.flatAero>.01){ke.set(0,0,1).applyQuaternion(Be.mesh.quaternion);const Ue=Be.velocity.dot(ke);$e.copy(Be.velocity).addScaledVector(ke,-Ue);const M=-Ue*(1.25+Math.abs(Ue)*.55)*Pt.flatAero;Be.velocity.addScaledVector(ke,M*_t),Be.velocity.addScaledVector($e,-Pt.airDragLin*_t),pe.crossVectors(ke,$e);const P=Q(Ue*2.1*Pt.flatAero,-5.5,5.5);Be.angVel.addScaledVector(pe,P*_t)}else{const Ue=Math.exp(-_t*(Pt.airDragLin+Pt.airDragQuad*oe));Be.velocity.multiplyScalar(Ue),Pt.magnus>0&&Be.angVel.lengthSq()>.04&&(Ke.crossVectors(Be.angVel,Be.velocity),Be.velocity.addScaledVector(Ke,Pt.magnus*_t))}}Be.mesh.position.addScaledVector(Be.velocity,_t);let V=!1;if(!Ot){const oe=Be.mesh.position.x,Ue=Be.mesh.position.y,M=Be.mesh.position.z;if(Ue>nn-Dt-.14&&Ue<ht+Dt+.14&&Math.abs(oe)<zt+Dt&&Math.abs(M)<hn+Dt){const P=zi(oe,Ue,M,z);let Z=0;if(Be.cavityDepth>1e-4){const q=Be.mesh.position.distanceToSquared(Be.detachOrigin),Ge=Math.max(.08,Be.radius*1.05);Z=Be.cavityDepth*Math.exp(-q/(Ge*Ge)),Z<.002&&(Be.cavityDepth=0,Z=0)}const k=-(P+Dt-Z),b=.058*Pt.adhesion;if(k<b){ne(oe,Ue,M,z,be);const q=Be.velocity.dot(be);Ce.copy(Be.velocity).addScaledVector(be,-q);const Ge=Ce.length();if(k<0){V=!0;const ye=-k,Le=Be.cavityDepth>.002?.32:.68;if(Be.mesh.position.addScaledVector(be,Math.min(ye*Le,.06)),q<0){const Mt=-q,Yt=-(1+(Mt>.35?Pt.restitution:0))*q;if(Be.velocity.addScaledVector(be,Yt),Mt>.45){const pt=Be.baseBend.x>=0?1:-1;Be.bendVel+=Q(Mt*.95,0,2.8)*Pt.flexGain*(Pt.isFlat?pt:1)}}const vt=Math.exp(-_t*Pt.wetDrag*(.75+.5*Q(ye/Math.max(.02,Dt),0,1)));Ce.multiplyScalar(vt);const Ct=Be.velocity.dot(be);if(Be.velocity.copy(Ce).addScaledVector(be,Ct),Ge>.015){H.crossVectors(be,Ce).divideScalar(Math.max(.055,Dt));const Mt=1-Math.exp(-_t*12*Pt.rollGain);Be.angVel.lerp(H,Mt)}}const Ne=me(-.18,.28,be.y+.14),Te=1-me(.65,1.55,Ge),Ye=1-me(.18,.46,Be.detachTime),Oe=Ne*Te*Ye*(1-me(0,b,Math.max(0,k)));if(Oe>.01&&q<.45){V=!0;const ye=Pt.adhesion*3*Oe;Be.velocity.addScaledVector(be,-ye*_t),Be.velocity.addScaledVector(Ce,-Pt.wetDrag*.28*Oe*_t),Pt.isFlat&&Be.detachTime<.3&&(ke.set(0,0,1).applyQuaternion(Be.mesh.quaternion),ke.dot(be)<0&&ke.negate(),pe.crossVectors(ke,be),Be.angVel.addScaledVector(pe,4.2*Oe*_t))}}}}Be.wetContact+=((V?1:0)-Be.wetContact)*Math.min(1,_t*14);{const oe=Be.mesh.position.x,Ue=Be.mesh.position.y,M=Be.mesh.position.z;if(Ue<Fe.stickTopY+Dt+.05&&Ue>Fe.stickBottomY-Dt&&Math.abs(oe)<Pe+Dt+.04&&Math.abs(M)<_e+Dt+.04){const P=Se(oe,Ue,M,nt);let Z=0;if(Be.stickCavity>1e-4){const b=Be.mesh.position.distanceToSquared(Be.detachOrigin),q=Math.max(.07,Be.radius*.9);Z=Be.stickCavity*Math.exp(-b/(q*q)),Z<.002&&(Be.stickCavity=0,Z=0)}const k=Dt-Z-P;if(k>0){const b=Be.stickCavity>.002?.28:.82;Be.mesh.position.addScaledVector(nt,Math.min(k*b,.06));const q=Be.velocity.dot(nt);if(q<0){const Ge=-q,Te=-(1+Q(Pt.restitution+.14,.16,.54))*q;Be.velocity.addScaledVector(nt,Te),Ce.copy(Be.velocity).addScaledVector(nt,-Be.velocity.dot(nt));const Oe=Math.min(.22*Te,Ce.length());if(Ce.lengthSq()>1e-6&&(Ce.normalize(),Be.velocity.addScaledVector(Ce,-Oe),H.crossVectors(nt,Ce),Be.angVel.addScaledVector(H,Oe/Math.max(.05,Dt)*.95)),Ge>.3){const ye=Be.baseBend.x>=0?1:-1;Be.bendVel+=Q(Ge*1.25,0,3.4)*Pt.flexGain*(Pt.isFlat?ye:1)}}}}}for(let oe=0;oe<v.length;oe++){if(oe===ve)continue;const Ue=v[oe];if(Ue.detached||!Ue.mesh.visible||Ue.grabbed||Ue.exposure<.06&&!Ot)continue;const M=w(Ue),P=Dt+M;qe.subVectors(Be.mesh.position,Ue.mesh.position);const Z=qe.lengthSq();if(Z>=P*P||Z<1e-9||Be.detachTime<.05&&Be.detachOrigin.distanceToSquared(Ue.mesh.position)<P*P*1.05)continue;const k=Math.sqrt(Z);be.copy(qe).divideScalar(k);const b=P-k;Be.mesh.position.addScaledVector(be,Math.min(b*.78,.06));const q=Be.velocity.dot(be);if(q<0){const Ge=-q,Te=-(1+.5*(Pt.restitution+we[Ue.kind].restitution))*q;if(Be.velocity.addScaledVector(be,Te),Ce.copy(Be.velocity).addScaledVector(be,-Be.velocity.dot(be)),Ce.lengthSq()>1e-6){const ye=Ce.length(),Le=Math.min(.28*Te,ye*.55);Ce.divideScalar(ye),Be.velocity.addScaledVector(Ce,-Le),H.crossVectors(be,Ce),Be.angVel.addScaledVector(H,Le/Math.max(.05,Dt)*1.1)}const Ye=Q(Be.mass/Math.max(.001,Ue.mass),.3,2.2),Oe=Q(Ge*.14*Ye,0,.42);if(Ue.jostleVel.addScaledVector(be,-Oe),Ue.jostleVel.y-=Oe*.45,Ue.exposure>.65&&Ge>.55&&(Ue.knockAccum+=Q((Ge-.45)*.022*Ye*Ue.exposure,0,.06)),Ge>.3){const ye=Be.baseBend.x>=0?1:-1;Be.bendVel+=Q(Ge*1.15,0,3.2)*Pt.flexGain*(Pt.isFlat?ye:1)}}}const We=13.5;Be.velocity.lengthSq()>We*We&&Be.velocity.setLength(We),Be.angVel.multiplyScalar(Math.exp(-_t*Pt.angDrag)),Be.angVel.lengthSq()>Pt.maxSpin*Pt.maxSpin&&Be.angVel.setLength(Pt.maxSpin);const Ze=Be.angVel.length();Ze>1e-4&&(De.copy(Be.angVel).divideScalar(Ze),it.setFromAxisAngle(De,Ze*_t),Be.mesh.quaternion.premultiply(it),Be.mesh.quaternion.normalize())}for(let ve=0;ve<v.length;ve++){const Be=v[ve];if(!Be.detached||!Be.mesh.visible||Be.grabbed)continue;const Pt=w(Be),Dt=1/Be.mass;for(let fn=ve+1;fn<v.length;fn++){const tn=v[fn];if(!tn.detached||!tn.mesh.visible||tn.grabbed)continue;const V=w(tn),We=Pt+V;qe.subVectors(tn.mesh.position,Be.mesh.position);const Ze=qe.lengthSq();if(Ze>=We*We||Ze<1e-9)continue;const oe=Math.sqrt(Ze);be.copy(qe).divideScalar(oe);const Ue=We-oe,M=1/tn.mass,P=Dt+M,Z=Math.min(Ue*.72,.06)/P;Be.mesh.position.addScaledVector(be,-Z*Dt),tn.mesh.position.addScaledVector(be,Z*M),at.subVectors(tn.velocity,Be.velocity);const k=at.dot(be);if(k<0){const b=we[Be.kind],q=we[tn.kind],Ne=-(1+.5*(b.restitution+q.restitution))*k/P;Be.velocity.addScaledVector(be,-Ne*Dt),tn.velocity.addScaledVector(be,Ne*M),Ce.copy(at).addScaledVector(be,-k);const Te=Ce.length();if(Te>1e-4){Ce.divideScalar(Te);const Oe=Math.min(.24*Ne,Te*.45/P);Be.velocity.addScaledVector(Ce,Oe*Dt),tn.velocity.addScaledVector(Ce,-Oe*M),H.crossVectors(be,Ce),Be.angVel.addScaledVector(H,Oe*Dt/Math.max(.05,Pt)),tn.angVel.addScaledVector(H,Oe*M/Math.max(.05,V))}const Ye=-k;if(Ye>.3){const Oe=Be.baseBend.x>=0?1:-1,ye=tn.baseBend.x>=0?1:-1;Be.bendVel+=Q(Ye*.9,0,2.8)*b.flexGain*(b.isFlat?Oe:1),tn.bendVel+=Q(Ye*.9,0,2.8)*q.flexGain*(q.isFlat?ye:1)}}}}}for(let en=0;en<v.length;en++){const ve=v[en];if(!ve.detached||!ve.mesh.visible||ve.grabbed)continue;const Be=we[ve.kind],Pt=Math.abs(ve.basePos.x)>.04?Math.sign(ve.basePos.x):en%2===0?1:-1,Dt=ve.baseBend.x>=0?1:-1;let fn=0;Be.isFlat&&(ke.set(0,0,1).applyQuaternion(ve.mesh.quaternion),fn=Q(-ve.velocity.dot(ke)*.085,-.22,.22));const V=((Be.isFlat?ve.baseBend.x+Dt*.14+fn+.05*Math.sin(ve.detachTime*8.2+ve.bendPhase):0)-ve.bendAmt)*28-ve.bendVel*5.2;if(ve.bendVel+=V*Qe,ve.bendAmt=Q(ve.bendAmt+ve.bendVel*Qe,-.56,.58),ve.bendUniform){const We=Math.sin(ve.detachTime*7.4+ve.bendPhase)*.075+fn*.45;ve.bendUniform.value.set(ve.bendAmt,ve.baseBend.y+We,ve.baseBend.z-Pt*Math.abs(ve.bendAmt)*.3)}else{const We=Q(ve.bendAmt*.22,-.09,.09);ve.mesh.scale.set(ve.baseScale.x*(1+We*.55),ve.baseScale.y*(1-We),ve.baseScale.z*(1+We*.55))}(ve.mesh.position.y<-5.2||ve.detachTime>5)&&(ve.mesh.visible=!1)}}function Ae(z){const Qe=[],Ie=[];for(let Ot=0;Ot<v.length;Ot++)se(v[Ot])&&(v[Ot].mesh.updateWorldMatrix(!0,!1),Qe.push(v[Ot].mesh),Ie.push(Ot));if(Qe.length===0)return-1;const ht=z.intersectObjects(Qe,!1);if(ht.length>0){const Ot=ht[0].object;for(let Wt=0;Wt<Qe.length;Wt++)if(Qe[Wt]===Ot)return Ie[Wt]}let nn=-1,Kt=1/0;const $t=z.ray;for(let Ot=0;Ot<Ie.length;Ot++){const Wt=Ie[Ot],_t=v[Wt],zt=$t.distanceSqToPoint(_t.mesh.position),hn=_t.radius*(_t.detached?1.38:1.12);if(zt<=hn*hn){$t.closestPointToPoint(_t.mesh.position,ce);const en=$t.origin.distanceToSquared(ce);en<Kt&&(Kt=en,nn=Wt)}}return nn}function xe(z){z!==R&&(R=z>=0&&z<v.length&&se(v[z])?z:-1,$=0)}function He(z,Qe,Ie){if(z<0||z>=v.length)return!1;const ht=v[z];return se(ht)?(fe(),B=z,ht.grabbed=!0,ht.velocity.set(0,0,0),ht.angVel.set(0,0,0),Me=0,Ie.getWorldDirection(he),K.setFromNormalAndCoplanarPoint(he,ht.mesh.position),ee.copy(ht.mesh.position),Ee.copy(ht.mesh.position),te.copy(ht.mesh.quaternion),N.set(0,0,0),Qe.ray.intersectPlane(K,le)?(ue.copy(ht.mesh.position).sub(le),ue.lengthSq()>ht.radius*ht.radius*.72&&ue.setLength(ht.radius*.85),ae.copy(le).add(ue)):(ue.set(0,0,0),ae.copy(ht.mesh.position)),re=ht.detached&&ht.mesh.position.z<.28,ie=re?0:1,ht.detached&&(ht.detachTime=0,ht.thawUniform&&(ht.thawUniform.value=1)),!0):!1}function et(z,Qe){if(B<0||B>=v.length)return;const Ie=v[B];if(z.ray.intersectPlane(K,le)&&(ae.copy(le).add(ue),!Ie.detached)){const ht=.048-me(Y,.9,Ie.exposure)*.036;if(ae.distanceTo(ee)>=ht){Ie.detached=!0,Ie.detachTime=0,Ie.cavityDepth=0,Ie.stickCavity=0,te.copy(Ie.mesh.quaternion);const{iceGone:Kt}=ws(Qe.melt),$t=w(Ie),Ot=Kt?-1:zi(Ie.mesh.position.x,Ie.mesh.position.y,Ie.mesh.position.z,Qe);re=!Kt&&(Ot>-$t||Ie.mesh.position.z<.3),ie=re?0:1;const Wt=Ie.baseBend.x>=0?1:-1;Ie.bendVel+=Ie.kind==="strawberry"?Wt*2.4:1.4,Ie.thawUniform&&(Ie.thawUniform.value=1)}}}function tt(){if(B<0||B>=v.length)return;const z=v[B];if(z.grabbed=!1,z.detached){N.lengthSq()>6.2*6.2&&N.setLength(6.2),z.velocity.copy(N),z.velocity.lengthSq()<.08&&(z.velocity.y=Math.min(z.velocity.y,-.22)),z.angVel.set(Q(z.velocity.y*.45,-2,2),Q(z.velocity.x*.35,-1.8,1.8),Q(-z.velocity.x*.62,-2.4,2.4)),z.detachTime=0,z.cavityDepth=0,z.stickCavity=0;const Ie=z.baseBend.x>=0?1:-1;z.bendVel+=Q(z.velocity.length()*.55,.3,2.4)*(z.kind==="strawberry"?Ie:.7)}B=-1,N.set(0,0,0),re=!1,ie=0,Me=0}function gt(z,Qe){if(B<0||B>=v.length||z<=0)return;const Ie=v[B];if(!Ie.grabbed||!Ie.mesh.visible){fe();return}const ht=Math.min(.05,z);if(Me+=ht,!Ie.detached){const{slideY:fn}=ws(Qe.melt),tn=ge(Ie,Qe,fn);Xe(Ie,tn,fn),ee.copy(Ie.mesh.position),j.copy(ae).sub(ee);const V=j.length(),Ze=Math.min(.036,V*.58);if(V>1e-4&&Ie.mesh.position.addScaledVector(j,Ze/V),X.set(Q(-j.y*2.2,-.18,.18),Q(j.x*1.8,-.16,.16),Q(-j.x*2.4,-.22,.22)),I.setFromEuler(X),Ie.mesh.quaternion.multiply(I),Ie.bendUniform){const oe=Q(V*3.8,0,.16),Ue=Ie.baseBend.x>=0?1:-1;Ie.bendUniform.value.set(Ie.bendAmt+Ue*oe,Ie.baseBend.y+Q(j.y*2.2,-.14,.14),Ie.baseBend.z+Q(j.x*2.6,-.18,.18))}return}Ie.detachTime=0,re&&ie<1&&(ie=Math.min(1,ie+ht*7.5));const nn=re?me(0,1,ie)*.24:0;W.copy(ae).addScaledVector(he,-nn),Ee.copy(Ie.mesh.position);const Kt=1-Math.exp(-ht*28);Ie.mesh.position.lerp(W,Kt);const $t=(Ie.mesh.position.x-Ee.x)/ht,Ot=(Ie.mesh.position.y-Ee.y)/ht,Wt=(Ie.mesh.position.z-Ee.z)/ht,_t=1-Math.exp(-ht*18);N.x+=($t-N.x)*_t,N.y+=(Ot-N.y)*_t,N.z+=(Wt-N.z)*_t;const zt=Q(-N.x*.14,-.42,.42),hn=Q(N.y*.12,-.34,.34),en=Q(N.x*.09,-.28,.28);X.set(hn,en,zt),I.setFromEuler(X),Ie.mesh.quaternion.copy(te).premultiply(I);const ve=Ie.baseBend.x>=0?1:-1,Be=Q(Math.hypot(N.x,N.y)*.085,0,.24),Dt=((Ie.kind==="strawberry"?Ie.baseBend.x+ve*(.14+Be)+.03*Math.sin(Me*5.2+Ie.bendPhase):Q(Be*.45,0,.12))-Ie.bendAmt)*32-Ie.bendVel*5.8;if(Ie.bendVel+=Dt*ht,Ie.bendAmt=Q(Ie.bendAmt+Ie.bendVel*ht,-.54,.56),Ie.bendUniform){const fn=Q(-N.x*.09,-.24,.24),tn=Q(N.y*.08,-.2,.2);Ie.bendUniform.value.set(Ie.bendAmt,Ie.baseBend.y+tn,Ie.baseBend.z+fn)}else{const fn=Q(Ie.bendAmt*.24,-.06,.06);Ie.mesh.scale.set(Ie.baseScale.x*(1+fn*.5),Ie.baseScale.y*(1-fn),Ie.baseScale.z*(1+fn*.5))}}function Tt(){return{hoveredIndex:R,grabbedIndex:B,grabbedFreed:B>=0&&v[B].detached}}function Je(){for(let z=0;z<v.length;z++){const Qe=v[z];if(Qe.detached&&Qe.mesh.visible&&(Qe.grabbed||Qe.mesh.position.y>-1.95&&Qe.detachTime<3.6))return!0}return!1}function wt(z){const Qe=da(z);p.uStainColor.value.set(Qe.stainColor[0],Qe.stainColor[1],Qe.stainColor[2])}function Bt(){fe();for(const z of n)z.dispose()}return{group:t,stickMesh:A,stickUniforms:p,fruits:v,setRecipeColors:wt,hasFallingFruitInView:Je,pickGrabbableFruit:Ae,setHoveredFruit:xe,beginGrab:He,moveGrab:et,endGrab:tt,updateGrab:gt,getGrabState:Tt,reset:de,update:J,dispose:Bt}}function K_(i=1){const e=new Ki;e.name="topping-debug-stage",e.visible=!1;const t=[],n=[],s=xh(i),o=hr(i),a=hr(i+1),r=ca(i),l=ca(i+1),c=Sh(i),h=_h(i),f=ua(i,"dark"),u=ua(i,"butter"),d=wh(s,1).material,g=Ll(o).material,x=Ll(a).material,p=pr(r);p.uThaw.value=1;const m=pr(l);m.uThaw.value=1;const S=Th(c),y=Eh(h),_=fa(f),A=fa(u);t.push(d,g,x,p.material,m.material,S,y,_,A);function E(ie,re,Me,se,fe=!1){let de,we;switch(ie){case"raspberry":de=bh(i*157+se,re),we=d;break;case"strawberry":de=yh(i*131+se,.17,re),we=re%2===0?g:x;break;case"blueberry":de=Nl(i*149+se,re),we=re%2===0?p.material:m.material;break;case"chocolate":de=Il(i*163+se),we=S;break;case"shaved-lemon":de=qa(i*173+se),we=y;break;case"kaksmulor":de=Za(i*179+se,re<2),we=re%2===1?A:_;break}t.push(de);const Re=new Qt(de,we),ze=new es(Me[0],Me[1],Me[2]);Re.rotation.copy(ze),Re.visible=!1,e.add(Re);const De={kind:ie,variant:re,mesh:Re,baseRot:ze,spinPhase:se*.37,isAirHero:fe};return n.push(De),De}const v=E("raspberry",0,[.16,.35,-.1],11,!0),T=E("raspberry",2,[.12,-.45,.18],23),U=E("raspberry",3,[.24,.52,-.22],37),C=E("raspberry",4,[.35,-.25,.32],51),D=E("raspberry",5,[.18,.42,.1],67),O=E("strawberry",0,[.14,-.22,-.18],19),Y=E("strawberry",1,[-.16,.28,.22],31),R=E("strawberry",2,[.22,-.35,-.28],43),B=E("strawberry",3,[.38,.44,.18],59),$=E("blueberry",0,[.42,.28,-.18],13),K=E("blueberry",1,[.58,-.42,.25],29),he=E("blueberry",2,[.28,.65,-.35],47),ee=E("chocolate",0,[.32,.48,-.22],17),ue=E("chocolate",1,[-.45,-.32,.38],41),ae=E("shaved-lemon",0,[.24,.42,-.26],21),le=E("shaved-lemon",1,[-.32,-.58,.34],53),Ee=E("kaksmulor",0,[.28,-.36,.18],27),N=E("kaksmulor",1,[-.24,.52,-.28],61),j=E("kaksmulor",2,[.46,.18,.4],73);function W(ie,re,Me,se,fe){ie.mesh.visible=!0,ie.mesh.position.set(re,Me,se),ie.mesh.scale.setScalar(fe)}let I=0;function X(ie,re,Me){for(const se of n)se.mesh.visible=!1;if(ie==="off"||ie==="inside"){Me?(e.visible=!0,W(v,1.06,.22,.08,.3),W(T,1.06,-.36,.06,.22),W(D,1.06,-.76,.08,.12)):e.visible=!1;return}if(e.visible=!0,ie==="both"){re==="all"?(W(v,1.06,.44,.08,.3),W(T,1.08,-.08,.06,.22),W(D,1.46,.12,.08,.12),W(ee,1.04,-.56,.04,.2),W(Ee,1.46,-.44,.04,.18),W(O,-1.06,.44,.06,.28),W(R,-1.46,.08,.06,.2),W($,-1.04,-.08,.06,.18),W(he,-1.44,-.36,.06,.17),W(ae,-1.04,-.56,.06,.22)):re==="raspberry"?(W(v,1.04,.48,.08,.33),W(T,1.04,-.04,.06,.22),W(U,-1.06,.38,.06,.24),W(C,-1.06,-.14,.06,.2),W(D,-1.04,-.56,.08,.14)):re==="strawberry"?(W(O,1.08,.34,.06,.32),W(Y,1.08,-.28,.06,.26),W(R,-1.08,.28,.06,.25),W(B,-1.06,-.3,.06,.2)):re==="blueberry"?(W($,1.06,.3,.06,.24),W(K,1.06,-.28,.06,.22),W(he,-1.06,.04,.06,.24)):re==="chocolate"?(W(ee,1.06,.22,.06,.26),W(ue,-1.06,-.1,.06,.24)):re==="shaved-lemon"?(W(ae,1.06,.22,.06,.28),W(le,-1.06,-.1,.06,.26)):re==="kaksmulor"&&(W(Ee,1.06,.28,.06,.24),W(N,-1.06,.18,.06,.24),W(j,1.06,-.3,.06,.18));return}re==="all"?(W(v,-1.2,.4,.04,.31),W(T,-.54,.42,.04,.25),W(U,.04,.42,.04,.22),W(C,.5,.46,.04,.17),W(D,.5,.18,.06,.12),W(O,1.02,.38,.02,.29),W(R,-1.32,-.32,.04,.22),W($,-.9,-.32,.04,.19),W(he,-.5,-.32,.04,.18),W(ee,-.1,-.32,.04,.19),W(ae,.26,-.32,.04,.2),W(Ee,.6,-.32,.04,.18)):re==="raspberry"?(W(v,-.26,.04,.06,.48),W(T,.74,.42,.04,.28),W(U,.8,-.08,.04,.24),W(C,.64,-.54,.04,.21),W(D,.14,-.56,.06,.16)):re==="strawberry"?(W(O,-.56,.14,.04,.4),W(Y,.34,.28,.04,.32),W(R,.36,-.32,.04,.28),W(B,-.52,-.44,.06,.22)):re==="blueberry"?(W($,-.62,.04,.04,.32),W(K,.04,.06,.04,.3),W(he,.68,.02,.04,.3)):re==="chocolate"?(W(ee,-.44,.04,.04,.34),W(ue,.46,.02,.04,.32)):re==="shaved-lemon"?(W(ae,-.44,.04,.04,.36),W(le,.46,.02,.04,.34)):re==="kaksmulor"&&(W(Ee,-.58,.04,.04,.3),W(N,.08,.06,.04,.3),W(j,.66,0,.04,.24))}function te(ie,re){if(e.visible){re&&ie>0&&(I+=ie);for(const Me of n)Me.mesh.visible&&(re?Me.mesh.rotation.set(Me.baseRot.x+Math.sin(I*.45+Me.spinPhase)*.14,Me.baseRot.y+I*.55,Me.baseRot.z):Me.mesh.rotation.copy(Me.baseRot))}}function ce(){for(const ie of t)ie.dispose()}return{group:e,setLayout:X,update:te,dispose:ce}}function $_(i,e=1){const t=new Ki,n=[],s=(o,a,r,l,c)=>{n.push(o);const h=new Qt(o,a);h.position.set(r[0],r[1],r[2]),h.rotation.set(l[0],l[1],l[2]),h.scale.setScalar(c),t.add(h)};switch(i){case"strawberry":{const o=Ll(hr(e)).material;n.push(o),s(yh(e*131+19,.19,0),o,[0,-.02,0],[.24,-.34,-.22],.68);break}case"blueberry":{const o=pr(ca(e));o.uThaw.value=1;const a=pr(ca(e+1));a.uThaw.value=1,n.push(o.material,a.material),s(Nl(e*149+13,0),o.material,[-.14,.05,.08],[.46,.34,-.18],.44),s(Nl(e*149+29,1),a.material,[.24,-.14,-.04],[.62,-.45,.24],.34);break}case"raspberry":{const o=wh(xh(e),1).material;n.push(o),s(bh(e*157+11,0),o,[0,-.02,0],[.26,.42,-.14],.72);break}case"shaved-lemon":{const o=Eh(_h(e));n.push(o),s(qa(e*173+21),o,[-.08,.08,.06],[.42,.34,-.38],.74),s(qa(e*173+53),o,[.16,-.14,-.02],[-.36,-.44,.52],.64),s(qa(e*173+89),o,[-.14,-.18,.12],[.22,.68,.26],.48);break}case"chocolate":{const o=Th(Sh(e));n.push(o),s(Il(e*163+17),o,[-.12,.06,.06],[.36,.52,-.22],.48),s(Il(e*163+41),o,[.24,-.16,-.04],[-.42,-.36,.38],.36);break}case"kaksmulor":{const o=fa(ua(e,"dark")),a=fa(ua(e,"butter"));n.push(o,a),s(Za(e*179+27,!0),o,[-.16,.08,.05],[.32,-.38,.22],.44),s(Za(e*179+61,!0),a,[.2,-.1,.02],[-.26,.48,-.24],.38),s(Za(e*179+73,!1),o,[.04,-.28,.14],[.46,.18,.4],.24);break}}return{object:t,dispose(){for(const o of n)o.dispose()}}}function t0(i,e){return new bn({side:e,depthTest:!0,depthWrite:!0,uniforms:{uTag:{value:i}},vertexShader:`
      varying float vCamDepth;
      void main() {
        vec4 mvPos = viewMatrix * modelMatrix * vec4(position, 1.0);
        vCamDepth = -mvPos.z;
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform float uTag;
      varying float vCamDepth;
      void main() {
        gl_FragColor = vec4(vCamDepth, uTag, 0.0, 1.0);
      }
    `})}function J_(i){const e=da(i),t={uBgTex:{value:null},uBgBlur1:{value:null},uBgBlur2:{value:null},uBgBlur3:{value:null},uBubblesTex:{value:null},uFilmTex:{value:null},uRimeTex:{value:null},uInteriorZ:{value:null},uBackIceZ:{value:null},uNoise3D:{value:xf()},uResolution:{value:new ot(1280,720)},uTime:{value:0},uMelt:{value:si},uSlideY:{value:0},uFrost:{value:.58},uSeedOffset:{value:0},uOpacity:{value:e.opacity},uIsDual:{value:e.isDual?1:0},uSigmaA:{value:new G(...e.sigmaA)},uCoreA:{value:new G(...e.coreA)},uMidA:{value:new G(...e.midA)},uDeepA:{value:new G(...e.deepA)},uCreamAlbA:{value:new G(...e.creamAlbedoA)},uCreamSssA:{value:new G(...e.creamSssA)},uCreamDeepA:{value:new G(...e.creamDeepA)},uSigmaB:{value:new G(...e.sigmaB)},uCoreB:{value:new G(...e.coreB)},uMidB:{value:new G(...e.midB)},uDeepB:{value:new G(...e.deepB)},uCreamAlbB:{value:new G(...e.creamAlbedoB)},uCreamSssB:{value:new G(...e.creamSssB)},uCreamDeepB:{value:new G(...e.creamDeepB)},uStainCol:{value:new G(...e.stainColor)}};return{material:new bn({glslVersion:Du,side:di,transparent:!1,depthTest:!0,depthWrite:!0,uniforms:t,vertexShader:`
      in float aHang;
      out vec3 vWorldPos;
      out vec3 vWorldNormal;
      out vec2 vUv;
      out float vHang;
      out float vCamDepth;

      void main() {
        vUv = uv;
        vHang = aHang;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vec4 mvPos = viewMatrix * wp;
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vCamDepth = -mvPos.z;
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      precision highp float;
      precision highp sampler3D;

      uniform sampler2D uBgTex;
      uniform sampler2D uBgBlur1;
      uniform sampler2D uBgBlur2;
      uniform sampler2D uBgBlur3;
      uniform sampler2D uBubblesTex;
      uniform sampler2D uFilmTex;
      uniform sampler2D uRimeTex;
      uniform sampler2D uInteriorZ;
      uniform sampler2D uBackIceZ;
      uniform sampler3D uNoise3D;
      uniform vec2 uResolution;
      uniform float uTime;
      uniform float uMelt;
      uniform float uSlideY;
      uniform float uFrost;
      uniform float uSeedOffset;
      uniform float uOpacity;
      uniform float uIsDual;
      uniform vec3 uSigmaA;
      uniform vec3 uCoreA;
      uniform vec3 uMidA;
      uniform vec3 uDeepA;
      uniform vec3 uCreamAlbA;
      uniform vec3 uCreamSssA;
      uniform vec3 uCreamDeepA;
      uniform vec3 uSigmaB;
      uniform vec3 uCoreB;
      uniform vec3 uMidB;
      uniform vec3 uDeepB;
      uniform vec3 uCreamAlbB;
      uniform vec3 uCreamSssB;
      uniform vec3 uCreamDeepB;
      uniform vec3 uStainCol;

      in vec3 vWorldPos;
      in vec3 vWorldNormal;
      in vec2 vUv;
      in float vHang;
      in float vCamDepth;

      out vec4 fragColor;

      // Single-cycle hardware-trilinear 3D texture lookups replacing 15x 4-octave FBM & 54-iter Voronoi loops!
      // Channels: R = 2-oct FBM (period 6), G = independent 2-oct FBM (period 6),
      //           B = 3D Voronoi cell height (period 8), A = fine 2-oct detail noise (period 12)
      const float INV_P6 = 1.0 / 6.0;
      const float INV_P8 = 1.0 / 8.0;
      const float INV_P12 = 1.0 / 12.0;

      // Strict WebGL2/Metal/Adreno portable math helpers (no pow(negative,2.0), no inverted smoothstep, no zero normalize)
      float sq(float x) { return x * x; }
      float revStep(float hi, float lo, float x) { return 1.0 - smoothstep(lo, hi, x); }
      vec3 safeNorm(vec3 v) { return v * inversesqrt(max(dot(v, v), 1e-8)); }

      float fbm3Tex(vec3 p) {
        vec4 s = texture(uNoise3D, p * INV_P6);
        return s.r * 0.72 + s.a * 0.28;
      }

      float vnoiseTex(vec3 p) {
        return texture(uNoise3D, p * INV_P12).a;
      }

      // Fast deterministic 3D cell hash -> [0, 1]^3 for razor-sharp condensed-milk holes & micro-shards (zero loops!)
      vec3 hash33(vec3 p) {
        p = fract(p * vec3(0.1031, 0.1030, 0.0973));
        p += dot(p, p.yxz + 33.33);
        return fract((p.xxy + p.yxx) * p.zyx);
      }

      // Single-cell jittered 3D frozen air-pocket crater (organic chipped edges, directional cavity normal, NO cartoon white ring!)
      vec2 evalAirPocketCell(vec3 p, float invScale, float probBoost, float minR, float maxR, out vec3 outPitDir) {
        vec3 cell = floor(p);
        vec3 f = fract(p);
        vec3 h1 = hash33(cell);
        outPitDir = vec3(0.0);

        // Evaluate organic cluster density at the constant cell center so holes never half-clip across boundaries!
        vec3 cellWorld = (cell + 0.5) * invScale;
        float clusterN = texture(uNoise3D, (cellWorld * vec3(2.8, 2.4, 3.0) + vec3(uSeedOffset * 0.7, 1.3, -0.9)) * INV_P6).g;
        float fluteBias = exp(-sq((abs(cellWorld.x) - ${Fe.fluteX.toFixed(4)}) / 0.10));
        float cellProb = clamp(smoothstep(0.26, 0.74, clusterN) * 0.60 + fluteBias * 0.28, 0.06, 0.88) * probBoost;
        if (h1.x > cellProb) return vec2(0.0);

        vec3 h2 = hash33(cell + 19.37);
        vec3 ctr = vec3(0.28) + h2 * 0.44;
        float rad = mix(minR, maxR, h1.y * h1.y);
        vec3 d = f - ctr;
        // Organic irregular chipped-ice cavity silhouette (gentle Z-stretch yields realistic varied surface cross-sections!)
        float chipWarp = (texture(uNoise3D, (p * 0.55 + vec3(h1.z * 3.1)) * INV_P12).a - 0.5) * 0.30;
        vec3 stretched = d * vec3(1.0 + (h1.z - 0.5) * 0.40, 1.0 + (h2.y - 0.5) * 0.36, 0.68);
        float dist = length(stretched) * (1.0 + chipWarp);
        if (dist > rad * 1.32) return vec2(0.0);

        float u = dist / max(rad, 1e-4);
        // Smooth concave bowl interior -> crisp micro-cavity shadow & wall slope
        float pit = revStep(1.0, 0.32, u);
        // Soft outer shoulder slope for directional key-light catch (NOT a uniform white halo!)
        float wallSlope = smoothstep(0.28, 0.88, u) * revStep(1.28, 0.92, u);
        outPitDir = d * inversesqrt(max(dot(d, d), 1e-6));
        return vec2(pit, wallSlope);
      }

      // Single-cell jittered 3D angular ice/sugar micro-shard (crisp flaky crystal splinters in organic frost drifts!)
      vec2 evalMicroShardCell(vec3 p, float invScale, float probBoost, float minSize, float maxSize) {
        vec3 cell = floor(p);
        vec3 f = fract(p);
        vec3 h1 = hash33(cell + 7.13);

        // Organic drifting frost-shard clouds across the whole paleta face (patches of dense crystal flecks + clean zones!)
        vec3 cellWorld = (cell + 0.5) * invScale;
        vec3 driftW = cellWorld * vec3(2.4, 1.9, 2.4) + vec3(-2.1 + uSeedOffset * 0.6, 0.9, 3.7);
        vec4 dSamp = texture(uNoise3D, driftW * INV_P6);
        float driftN = dSamp.r * 0.62 + dSamp.g * 0.38;
        float cellProb = clamp(pow(smoothstep(0.20, 0.72, driftN), 1.25) * 0.92 + 0.08, 0.08, 0.96) * probBoost;
        if (h1.x > cellProb) return vec2(0.0);

        vec3 h2 = hash33(cell + 41.91);
        vec3 ctr = vec3(0.27) + h2 * 0.46;
        vec3 d = f - ctr;

        float ang = h1.y * 6.2831853;
        float ca = cos(ang);
        float sa = sin(ang);
        vec3 dr = vec3(d.x * ca - d.y * sa, d.x * sa + d.y * ca, d.z);
        float baseS = mix(minSize, maxSize, h1.z);
        // Irregular angular ice-crystal flake / splinter proportions (generous Z depth so shards populate naturally on curved faces!)
        float elong = mix(1.15, 2.15, h2.x);
        vec3 q = abs(dr) / vec3(baseS * elong, baseS, min(0.24, baseS * 2.4));
        float facetD = (q.x + q.y + q.z) * 0.66 + max(q.x, max(q.y, q.z)) * 0.40;
        float mask = revStep(1.04, 0.52, facetD);
        // Varied translucency per shard: some faintly frosted in cream, some bright crisp white crystals on top!
        float intensity = mix(0.32, 1.12, h2.z * h2.z * 0.55 + h2.y * 0.45);
        return vec2(mask, intensity);
      }

      // Tactile thawing ice micro-relief + spatially varied frozen crystal roughness + baked 3D Voronoi slush beads!
      // Uses only 7 hardware texture3D fetches instead of 128 hashes + 54 nested Voronoi loop iterations (~12x faster!)
      vec3 perturbNormal(
        vec3 N,
        vec3 p,
        float glazeCover,
        float localFreezeRough,
        float sweatMask,
        float postThirdTex,
        out float microGrain,
        out float slushBump,
        out float slushCavity
      ) {
        vec3 sp = (p * vec3(9.5, 4.5, 9.5) + vec3(uSeedOffset, uTime * 0.04, 0.0)) * INV_P6;
        float eW = 0.008;
        float h0 = texture(uNoise3D, sp).r;
        float hx = texture(uNoise3D, sp + vec3(eW, 0.0, 0.0)).r;
        float hy = texture(uNoise3D, sp + vec3(0.0, eW, 0.0)).r;
        float hz = texture(uNoise3D, sp + vec3(0.0, 0.0, eW)).r;
        vec3 wetGrad = vec3(hx - h0, hy - h0, hz - h0) / 0.048;

        // Clean multi-scale wet porous ice-pebble relief emerging smoothly after 1/3 melt:
        // Keeps normals physically bounded (never chaotic white static!) so rich juicy color dominates
        // while tiny pebble crests catch crisp sparse 1-2px wet glints (matching real half-melted popsicles!).
        float earlySweat = (0.24 + 0.30 * smoothstep(0.14, 0.34, uMelt)) * sweatMask * (1.0 - glazeCover * 0.85);
        float deepSlush = postThirdTex * (0.95 - glazeCover * 0.16);
        float slushAmt = clamp(earlySweat + deepSlush, 0.0, 1.15);

        // Subtle organic eroded melt dimples (~8mm scale) — gentle undulation without big white blotches
        vec3 coarsePert = vec3(0.0);
        float coarseDimple = 0.5;
        if (postThirdTex > 0.005) {
          vec3 cp = (p * 26.0 + vec3(uSeedOffset * 1.9, -2.4, 1.3)) * INV_P6;
          float eD = 0.020;
          vec4 cd0 = texture(uNoise3D, cp);
          float cdX = texture(uNoise3D, cp + vec3(eD, 0.0, 0.0)).b;
          float cdY = texture(uNoise3D, cp + vec3(0.0, eD, 0.0)).b;
          float cdZ = texture(uNoise3D, cp + vec3(0.0, 0.0, eD)).b;
          coarsePert = vec3(cd0.b - cdX, cd0.b - cdY, cd0.b - cdZ) * 2.4;
          coarseDimple = cd0.b * 0.65 + cd0.g * 0.35;
        }

        // Primary porous icy-granita pebbles (~2.5mm scale — crisp tactile bumps & recessed wet pores!)
        vec3 medPert = vec3(0.0);
        float medCell = 0.5;
        if (postThirdTex > 0.005) {
          vec3 mp = (p * 62.0 + vec3(uSeedOffset * 2.7, 4.1, -1.9)) * INV_P8;
          float eM = 0.022;
          vec4 md0 = texture(uNoise3D, mp);
          float mdX = texture(uNoise3D, mp + vec3(eM, 0.0, 0.0)).b;
          float mdY = texture(uNoise3D, mp + vec3(0.0, eM, 0.0)).b;
          float mdZ = texture(uNoise3D, mp + vec3(0.0, 0.0, eM)).b;
          medPert = vec3(md0.b - mdX, md0.b - mdY, md0.b - mdZ) * 3.6;
          medCell = md0.b;
        }

        // Fine sparkling wet micro-pebbles (~1mm scale)
        vec3 cmP = (p * 116.0 + vec3(uSeedOffset * 1.3)) * INV_P8;
        float eC = 0.024;
        vec4 cm0 = texture(uNoise3D, cmP);
        float cmX = texture(uNoise3D, cmP + vec3(eC, 0.0, 0.0)).b;
        float cmY = texture(uNoise3D, cmP + vec3(0.0, eC, 0.0)).b;
        float cmZ = texture(uNoise3D, cmP + vec3(0.0, 0.0, eC)).b;
        vec3 cellPert = vec3(cm0.b - cmX, cm0.b - cmY, cm0.b - cmZ) * 3.2;

        vec4 cf = texture(uNoise3D, (p * 188.0 + vec3(uSeedOffset * 2.9)) * INV_P12);
        vec3 microFacetPert = vec3(cf.r - 0.5, cf.g - 0.5, cf.a - 0.5) * (0.16 * slushAmt);
        microGrain = clamp(mix(cf.a * 0.46 + cm0.b * 0.54, medCell * 0.56 + cm0.b * 0.30 + cf.a * 0.14, postThirdTex), 0.0, 1.0);
        slushBump = slushAmt * smoothstep(0.32, 0.90, microGrain);
        slushCavity = postThirdTex * clamp(
          revStep(0.50, 0.14, medCell) * 0.68 +
          revStep(0.46, 0.14, cm0.b) * 0.22 +
          revStep(0.46, 0.16, coarseDimple) * 0.20,
          0.0,
          1.0
        );

        float domeFrost = 1.0 + smoothstep(0.45, 1.05, p.y) * 0.45;
        // Damp sharp Voronoi blister relief on cold opaque milk shoulders so they stay velvety matte instead of bumpy plastic!
        float milkReliefDamp = 1.0 - smoothstep(0.76, 0.98, uOpacity) * 0.68;
        float freezeCrystalRelief = (0.022 + 0.125 * localFreezeRough) * uFrost * domeFrost * (1.0 - glazeCover * 0.72) * milkReliefDamp;
        vec3 pert =
          wetGrad * (0.028 + uMelt * 0.016) * (1.0 - glazeCover * 0.65) +
          coarsePert * (0.20 * postThirdTex) +
          medPert * (0.34 * postThirdTex) +
          cellPert * (freezeCrystalRelief + 0.18 * slushAmt * milkReliefDamp) +
          microFacetPert;

        pert -= N * dot(pert, N);
        // Clamp tangential perturbation magnitude so wet pebbles stay crisp & glossy without scrambling normals!
        float pertLen = length(pert);
        if (pertLen > 0.46) {
          pert *= 0.46 / pertLen;
        }
        return normalize(N - pert);
      }

      vec3 sampleFrostedBg(vec2 uv, float blurAmt) {
        vec2 cUv = clamp(uv, vec2(0.002), vec2(0.998));
        if (blurAmt <= 0.001) {
          return texture(uBgTex, cUv).rgb;
        }
        float lvl = clamp(blurAmt, 0.0, 1.0) * 3.0;
        if (lvl < 1.0) {
          return mix(texture(uBgTex, cUv).rgb, texture(uBgBlur1, cUv).rgb, lvl);
        }
        if (lvl < 2.0) {
          return mix(texture(uBgBlur1, cUv).rgb, texture(uBgBlur2, cUv).rgb, lvl - 1.0);
        }
        return mix(texture(uBgBlur2, cUv).rgb, texture(uBgBlur3, cUv).rgb, lvl - 2.0);
      }

      // Crisp backlit macro studio reflections: dark front fill so coral-ruby ice stays deeply saturated!
      vec3 evalMacroStudioReflection(vec3 R, float roughness) {
        vec3 r = normalize(R);
        vec3 col = vec3(0.06, 0.03, 0.03);
        float sharp = mix(1.0, 0.20, roughness);

        // Narrow twin vertical strip-lights (silky thin reflection ribbons!)
        float stripY = smoothstep(-0.90, -0.58, r.y) * revStep(0.92, 0.62, r.y);
        float wNarrow = 0.034 + roughness * 0.13;
        float leftStrip = exp(-sq((r.x + 0.56) / wNarrow));
        float rightStrip = exp(-sq((r.x - 0.56) / wNarrow));
        float stripZ = smoothstep(-0.18, 0.45, r.z);
        col += vec3(2.1, 1.95, 1.88) * (leftStrip + rightStrip) * stripY * stripZ * (0.35 + 0.85 * sharp);

        // Crisp grazing outer wall rim strip
        float rimStrip = exp(-sq((abs(r.x) - 0.89) / (0.048 + roughness * 0.12))) * stripY;
        col += vec3(2.25, 2.06, 1.98) * rimStrip * (0.42 + 0.78 * sharp);

        // Overhead curved dome softbox highlight
        float topBox = smoothstep(0.68 - roughness * 0.18, 0.94, r.y) *
                       exp(-sq(r.x / (0.38 + roughness * 0.22)));
        col += vec3(1.15, 1.02, 0.98) * topBox * (0.28 + 0.55 * sharp);

        return col;
      }

      void main() {
        vec2 screenUv = gl_FragCoord.xy / uResolution;
        vec3 N0 = normalize(vWorldNormal);

        // Camera-aligned horizontal studio basis so 360° turntable rotates the popsicle through fixed studio lights!
        vec3 camH = safeNorm(vec3(cameraPosition.x, 0.0, cameraPosition.z));
        vec3 camR = vec3(camH.z, 0.0, -camH.x);

        // === SAMPLE CONTINUOUS 2D VISCOUS LIQUID GLAZE FILM & FREEZER HOARFROST RIME ===
        vec4 filmSample = texture(uFilmTex, vUv);
        float filmH = filmSample.r;
        vec2 filmSlope = (filmSample.gb - 0.5) * 2.0;
        float wetMem = filmSample.a;
        float rimeRaw = texture(uRimeTex, vUv).r;

        // Multi-scale crystalline hoarfrost needles & tiny snowy crystal tufts (inspired by freezer-fresh macro!)
        vec4 rFine = texture(uNoise3D, (vWorldPos * 96.0 + vec3(uSeedOffset * 2.1)) * INV_P12);
        vec4 rMicro = texture(uNoise3D, (vWorldPos * 235.0 + vec3(-4.2, uSeedOffset * 3.7, 2.8)) * INV_P12);
        float rimeGrain = rFine.a * 0.48 + rMicro.a * 0.52;
        float frostScale = clamp(uFrost / 0.58, 0.25, 1.45);
        float rimeMaskPre = smoothstep(0.10, 0.64, rimeRaw * (0.86 + 0.26 * frostScale) + (rimeGrain - 0.5) * 0.42);

        // Sleek bottom-edge transparency band (keeps glowing cloudy pink rim & rich backlit body above,
        // while the thinning bottom meniscus turns crystal-clear like the drops breaking away from it!)
        float hangLiquid = smoothstep(0.08, 0.55, vHang);
        float meltClearGate = smoothstep(0.045, 0.18, uMelt) * (1.0 - rimeMaskPre * 0.92);
        vec3 V = normalize(cameraPosition - vWorldPos);
        float N0dotV = clamp(dot(N0, V), 0.0, 1.0);
        float isMilkBase = smoothstep(0.76, 0.98, uOpacity);
        float bottomEdgeClear = revStep(0.145, 0.014, vUv.y) * meltClearGate;
        float hangTipClear = smoothstep(0.24, 0.72, vHang);
        // Opaque condensed milk keeps thick opaque cream right down to its melting bottom edge (zero glass clarity!)
        float hangClear = clamp(max(hangTipClear, bottomEdgeClear * 0.95), 0.0, 1.0) * (1.0 - uOpacity * 0.96) * (1.0 - isMilkBase);

        // Thick flowing sticky glaze lobes + accumulated sticky bottom-rim puddles level frost into mirror-glossy syrup!
        float sweatMask = (1.0 - rimeMaskPre) * (1.0 - max(hangLiquid, hangClear) * 0.94);
        float bottomPoolZone = max(
          revStep(0.16, 0.015, vUv.y) * (1.0 - smoothstep(0.62, 0.95, uMelt)) * smoothstep(0.04, 0.14, uMelt) * (1.0 - rimeMaskPre * 0.85),
          hangLiquid
        );
        float glazeWave = smoothstep(0.16, 0.52, filmH) * (1.0 - rimeMaskPre * 0.88);
        float glazeThick = smoothstep(0.30, 0.82, filmH) * (1.0 - rimeMaskPre * 0.88);
        float glazeCover = max(glazeWave, max(bottomPoolZone * 0.85, max(hangLiquid, hangClear) * 0.98));
        float lipSlope = length(filmSlope);
        float glazeEdge = smoothstep(0.06, 0.44, lipSlope) * smoothstep(0.11, 0.36, filmH) * (1.0 - rimeMaskPre * 0.82);

        // Anchor internal frozen texture, crystalline streaks, frost grain, and dual-flavor gradient to the sliding ice body!
        vec3 icePos = vec3(vWorldPos.x, vWorldPos.y - uSlideY, vWorldPos.z);

        // Domain-warped spatial freeze-roughness field (2 texture fetches instead of 4x4-octave FBM!)
        vec3 volPos = icePos * vec3(2.9, 2.5, 3.4) + vec3(uSeedOffset, 0.0, 0.0);
        vec4 wSampA = texture(uNoise3D, (volPos * 1.35 + vec3(4.1, 1.7, 2.9)) * INV_P6);
        float wSampB = texture(uNoise3D, (volPos * 1.35 + vec3(2.2, -5.1, 7.3)) * INV_P6).r;
        vec3 warpOff = vec3(wSampA.r, wSampA.g, wSampB) - 0.5;
        vec3 warpedVol = volPos + warpOff * 1.25;

        float nearFluteWall = exp(-sq((abs(icePos.x) - ${Fe.fluteX.toFixed(4)}) / 0.052)) * revStep(0.32, 0.04, uMelt);
        vec4 patchSamp = texture(uNoise3D, (warpedVol * 1.85 + vec3(-2.7, 3.8, 1.5)) * INV_P6);
        float freezePatchRaw = patchSamp.r * 0.72 + patchSamp.a * 0.28;
        float freezeRoughBase = clamp(
          pow(smoothstep(0.28, 0.72, freezePatchRaw), 1.35) * 0.92 +
          nearFluteWall * 0.38 +
          smoothstep(0.55, 1.05, icePos.y) * 0.22,
          0.06,
          1.0
        ) * uFrost;

        // Pre-query unrefracted depth to solid emerging fruits so porous slush bumps & refraction fade cleanly
        // to zero right where a berry breaks the surface (eliminates peppery speckle halos around emerging berries!)
        // Checking bgCenter.a > 0.5 guarantees studio backdrop air pixels NEVER falsely match a shallow solid!
        vec4 bgCenter = texture(uBgTex, clamp(screenUv, vec2(0.002), vec2(0.998)));
        float dFront = vCamDepth;
        float dBackRaw = texture(uBackIceZ, screenUv).r;
        float dBack = (dBackRaw < 50.0 && dBackRaw > dFront - 0.02) ? dBackRaw : (dFront + 0.36);
        float totalThickness = clamp(dBack - dFront, 0.03, 0.56);
        vec2 rawIntSample = texture(uInteriorZ, screenUv).rg;
        bool rawHitsSolid = (bgCenter.a > 0.5) && (rawIntSample.g > 0.5) && (rawIntSample.r < dBack + 0.06) && (rawIntSample.r >= dFront - 0.05);
        float rawFrontDist = rawHitsSolid ? clamp(rawIntSample.r - dFront, 0.0, totalThickness) : totalThickness;
        float rawThinFade = rawHitsSolid ? smoothstep(0.010, 0.085, rawFrontDist) : 1.0;

        // Tactile porous wet ice-crystal texture ramps in richly after 1/3 melt (keeping crystal bottom pouches & berry rims clean!)
        float postThirdTex = smoothstep(0.30, 0.56, uMelt) * (1.0 - rimeMaskPre * 0.90) * (1.0 - max(hangLiquid, hangClear) * 0.94) * rawThinFade;

        float microGrain = 0.0;
        float slushFacet = 0.0;
        float slushCavity = 0.0;
        vec3 N_ice = perturbNormal(N0, icePos, glazeCover, freezeRoughBase, sweatMask, postThirdTex, microGrain, slushFacet, slushCavity);

        vec3 refUp = abs(N0.y) > 0.94 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
        vec3 T = normalize(cross(refUp, N0));
        vec3 B = normalize(cross(N0, T));
        // Distinct curved liquid meniscus normal along advancing sticky syrup wave fronts!
        vec3 meniscusBend = (T * filmSlope.x + B * filmSlope.y) * (0.46 * smoothstep(0.09, 0.44, filmH) * (1.0 - rimeMaskPre * 0.80));

        if (bottomPoolZone > 0.01) {
          vec3 pPool = vWorldPos * vec3(24.0, 26.0, 22.0) + vec3(uSeedOffset * 1.9, 0.0, 0.0);
          float poolU = vnoiseTex(pPool + vec3(0.35, 0.0, 0.0)) - vnoiseTex(pPool - vec3(0.35, 0.0, 0.0));
          float poolV = vnoiseTex(pPool + vec3(0.0, 0.35, 0.0)) - vnoiseTex(pPool - vec3(0.0, 0.35, 0.0));
          // Keep hanging liquid pouches taut & surface-tension smooth like real clear droplets (no crinkly ripple noise!)
          meniscusBend += (T * poolU + B * poolV) * (0.24 * bottomPoolZone * (1.0 - hangClear * 0.86));
        }
        // Smooth out meniscus noise inside crystal-clear hanging drop pouches so they curve like taut glass drops!
        meniscusBend *= (1.0 - hangClear * 0.65);
        vec3 N_glaze = normalize(N0 - meniscusBend);
        vec3 N = normalize(mix(N_ice - meniscusBend, N_glaze, max(hangLiquid, hangClear) * 0.96));

        // Physically, Snell screen displacement scales with actual ice thickness above the fruit (Δx ∝ d -> 0 at emergence!)
        float refrDepthScale = rawHitsSolid ? smoothstep(0.002, 0.115, rawFrontDist) : 1.0;

        // View-space Snell screen refraction (IOR = 1.31): accurate from front, side, and 180° back orbit!
        // Scale horizontal UV bend proportionally on the narrow 90° side profile so refraction never overshoots across the slab.
        // Opaque condensed milk does NOT refract or disperse light like clear glass (prevents orange/red chromatic fringes around crumbs!).
        float sideProfile = abs(camH.x);
        vec3 Nview = mat3(viewMatrix) * N;
        float edgeBend = mix(0.014, 0.042, pow(1.0 - N0dotV, 1.30)) * (1.0 - hangClear * 0.34);
        vec2 refrN = vec2(Nview.x * mix(1.0, 0.34, sideProfile * sideProfile), Nview.y * (1.0 - hangClear * 0.45));
        vec2 baseOffset = (-refrN * edgeBend * (0.72 + totalThickness * 1.15) - filmSlope * (0.0085 * glazeWave)) * refrDepthScale * (1.0 - isMilkBase);

        float dispScale = 1.0 - isMilkBase;
        vec2 uvR = screenUv + baseOffset * mix(1.0, 0.94, dispScale);
        vec2 uvG = screenUv + baseOffset;
        vec2 uvB = screenUv + baseOffset * mix(1.0, 1.07, dispScale);

        // Exact front ice thickness to solid embedded fruits & stick
        vec2 clampedUvG = clamp(uvG, vec2(0.002), vec2(0.998));
        vec2 interiorSample = texture(uInteriorZ, clampedUvG).rg;
        bool refrBgIsSolid = (isMilkBase > 0.5) ? (bgCenter.a > 0.5) : (texture(uBgTex, clampedUvG).a > 0.5);
        bool hitsSolid = refrBgIsSolid && (interiorSample.g > 0.5) && (interiorSample.r < dBack + 0.06) && (interiorSample.r >= dFront - 0.04);
        float frontIceDist = hitsSolid ? clamp(interiorSample.r - dFront, 0.0, totalThickness) : totalThickness;
        if (rawHitsSolid) {
          hitsSolid = true;
          frontIceDist = min(frontIceDist, rawFrontDist);
        }
        // Where melting ice thins to zero around an emerging fruit, melt all frost/snow crystals & surface reflections
        // smoothly to zero so the ice converges seamlessly to the exact uncovered fruit surface (zero sharp cutoff step!).
        float thinIceFade = hitsSolid ? smoothstep(0.005, 0.072, frontIceDist) : 1.0;
        float edgeMeltFade = hitsSolid ? smoothstep(0.002, 0.036, frontIceDist) : 1.0;

        // === SPATIALLY VARYING 3D FREEZE-ZONE ROUGHNESS & CRYSTALLINE INTERNAL STRUCTURE ===
        vec4 cloudSamp = texture(uNoise3D, warpedVol * INV_P6);
        float cloudMacro = cloudSamp.r * 0.72 + cloudSamp.a * 0.28;
        float cloudMed = patchSamp.g * 0.70 + patchSamp.a * 0.30;
        float freezeStreaks = fbm3Tex(vec3(icePos.x * 13.5 + warpOff.x * 2.2 + uSeedOffset, icePos.y * 2.6, icePos.z * 11.0));

        // Suppress internal fruit/stick nucleation halo on opaque condensed milk so the buried wooden stick never ghosts!
        float fruitNucleation = hitsSolid ? smoothstep(0.024, 0.085, frontIceDist) * revStep(0.24, 0.095, frontIceDist) * (1.0 - isMilkBase) : 0.0;
        float freezeRoughZone = clamp(freezeRoughBase + fruitNucleation * 0.32 * uFrost, 0.06, 1.0);

        // Two-depth parallax-shifted 3D internal volume sampling (3 fetches total!)
        // On opaque condensed milk, anchor directly near the outer skin so deep buried stick depth never creates a seam!
        float parallaxDist = mix(frontIceDist, 0.025, isMilkBase);
        vec3 innerPosA = icePos - V * clamp(parallaxDist * 0.36, 0.018, 0.095);
        vec3 innerPosB = icePos - V * clamp(parallaxDist * 0.72, 0.040, 0.19);
        vec4 inSampA = texture(uNoise3D, (innerPosA * 18.0 + warpOff * 2.2 + vec3(uSeedOffset * 1.7)) * INV_P6);
        vec4 inSampFine = texture(uNoise3D, (innerPosA * 56.0 + vec3(uSeedOffset * 3.1)) * INV_P12);
        vec4 inSampB = texture(uNoise3D, (innerPosB * 24.0 + vec3(-3.1, 6.4, 2.2)) * INV_P6);

        float innerGranuleCoarse = inSampA.r * 0.72 + inSampA.a * 0.28;
        float innerGranuleFine = inSampFine.r;
        float innerGranuleMicro = inSampFine.a;
        float deepGranule = inSampB.g * 0.72 + inSampB.a * 0.28;

        // Feathery internal freeze-fracture planes & granular snow-ice pockets
        float veinRawA = 1.0 - abs(inSampA.g - 0.5) * 2.0;
        float veinRawB = 1.0 - abs(inSampB.r - 0.5) * 2.0;
        float freezeVeins = (pow(clamp(veinRawA, 0.0, 1.0), 4.0) * 0.68 + pow(clamp(veinRawB, 0.0, 1.0), 4.8) * 0.58) * freezeRoughZone;
        float crunchyPattern = (innerGranuleCoarse * 0.42 + innerGranuleFine * 0.36 + deepGranule * 0.22);
        float crystalMod = (crunchyPattern - 0.5) * 2.0 * freezeRoughZone;

        float frostFactor = clamp(
          uFrost * (0.34 + 0.66 * freezeRoughZone + 0.24 * (cloudMacro - 0.5) + 0.18 * (freezeStreaks - 0.5)),
          0.10,
          1.0
        );

        vec2 roughJitter = vec2(innerGranuleFine - 0.5, innerGranuleMicro - 0.5) * (0.0072 * freezeRoughZone * (1.0 - glazeCover * 0.45) * thinIceFade * (1.0 - isMilkBase));
        uvR += roughJitter;
        uvG += roughJitter;
        uvB += roughJitter;

        // Fresh out of the freezer (uMelt <= 0.08), keep full continuous frost over shallow berries too;
        // once melting progresses, thinIceFade ensures emerging bare berries never wear frost, and pure
        // liquid hanging bellies (hangLiquid) are always 100% frost-free crystal-clear syrup!
        float frostThinGate = mix(1.0, thinIceFade, smoothstep(0.06, 0.16, uMelt)) * (1.0 - hangLiquid * 0.96);
        float rimeMask = rimeMaskPre * frostThinGate;
        float rimeWetEdge = smoothstep(0.02, 0.20, rimeRaw) * (1.0 - smoothstep(0.20, 0.52, rimeRaw)) * frostThinGate;

        float blurAmt = hitsSolid
          ? clamp((smoothstep(0.048, 0.24, frontIceDist) * (0.32 + 0.68 * frostFactor) + freezeRoughZone * 0.14) * thinIceFade, 0.0, 0.84)
          : clamp(0.18 + 0.64 * frostFactor + freezeRoughZone * 0.14, 0.14, 0.92);
        // Hanging liquid pouches & melting lower rim edges are 100% optically crystal-clear like real water drops!
        blurAmt = max(blurAmt * (1.0 - max(hangLiquid, hangClear)), rimeMask * 0.72);

        // Day 19 frosted sea-glass rotated 4-tap scatter disk sampling across 4-level blur pyramid for silky frosted diffusion!
        vec3 bgCol;
        float glassScatter = (1.0 - isMilkBase) * (1.0 - hangClear * 0.92) * (1.0 - glazeCover * 0.58) * thinIceFade;
        float scatterRad = blurAmt * (0.0036 + 0.0068 * pow(1.0 - N0dotV, 1.6) + 0.0045 * totalThickness) * glassScatter;
        if (scatterRad > 0.0018) {
          float angJ = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831853;
          vec2 j0 = vec2(cos(angJ), sin(angJ)) * scatterRad;
          vec2 j1 = vec2(-j0.y, j0.x);
          vec3 s0 = vec3(sampleFrostedBg(uvR + j0, blurAmt).r, sampleFrostedBg(uvG + j0, blurAmt).g, sampleFrostedBg(uvB + j0, blurAmt).b);
          vec3 s1 = vec3(sampleFrostedBg(uvR - j0, blurAmt).r, sampleFrostedBg(uvG - j0, blurAmt).g, sampleFrostedBg(uvB - j0, blurAmt).b);
          vec3 s2 = vec3(sampleFrostedBg(uvR + j1, blurAmt).r, sampleFrostedBg(uvG + j1, blurAmt).g, sampleFrostedBg(uvB + j1, blurAmt).b);
          vec3 s3 = vec3(sampleFrostedBg(uvR - j1, blurAmt).r, sampleFrostedBg(uvG - j1, blurAmt).g, sampleFrostedBg(uvB - j1, blurAmt).b);
          bgCol = (s0 + s1 + s2 + s3) * 0.25;
        } else {
          bgCol.r = sampleFrostedBg(uvR, blurAmt).r;
          bgCol.g = sampleFrostedBg(uvG, blurAmt).g;
          bgCol.b = sampleFrostedBg(uvB, blurAmt).b;
        }

        float grazingPath = 1.0 / max(0.34, N0dotV);
        float opticalDist = frontIceDist * mix(1.0, grazingPath, 0.50);

        // === DYNAMIC FLAVOR PALETTE (1 OR 2 ORGANICALLY SWIRLED TASTES) + WATER vs OPAQUE COCONUT BASE ===
        float bottomRichness = revStep(0.22, -0.98, icePos.y);
        float topRuby = smoothstep(0.70, 1.08, icePos.y);
        float edgeRichness = pow(1.0 - N0dotV, 1.32);
        float fluteOptical = smoothstep(0.10, 0.34, abs(N0.x)) * revStep(0.76, 0.38, abs(N0.x));

        // Organic dual-flavor layered/marbled swirl (Flavor A upper half -> Flavor B lower half)
        float swirlWave = (cloudMacro - 0.5) * 0.46 + (cloudMed - 0.5) * 0.24 + sin(icePos.x * 4.4 + uSeedOffset) * 0.08;
        float dualMix = uIsDual > 0.5 ? smoothstep(-0.34, 0.34, -icePos.y + swirlWave) : 0.0;

        vec3 flvSigma = mix(uSigmaA, uSigmaB, dualMix);
        vec3 flvCore = mix(uCoreA, uCoreB, dualMix);
        vec3 flvMid = mix(uMidA, uMidB, dualMix);
        vec3 flvDeep = mix(uDeepA, uDeepB, dualMix);
        vec3 flvCreamAlb = mix(uCreamAlbA, uCreamAlbB, dualMix);
        vec3 flvCreamSss = mix(uCreamSssA, uCreamSssB, dualMix);
        vec3 flvCreamDeep = mix(uCreamDeepA, uCreamDeepB, dualMix);

        // Reuses baked G channel of cloudSamp (zero extra texture fetches!) for subtle internal sunlit pockets
        float warmPocketNoise = cloudSamp.g * 0.72 + wSampA.a * 0.28;
        float downwardWarmth = revStep(0.55, -0.82, vWorldPos.y);
        float warmNuance = clamp(
          (smoothstep(0.32, 0.76, warmPocketNoise) * 0.68 + downwardWarmth * 0.42) *
          (1.0 - edgeRichness * 0.75) *
          (1.0 - topRuby * 0.65),
          0.0,
          1.0
        );

        vec3 baseSigma = flvSigma * mix(vec3(1.0), vec3(0.92, 0.90, 1.12), warmNuance * 0.38);
        float densityRough = 1.0 - crystalMod * 0.34;
        vec3 juiceSigma = baseSigma * (0.84 + 0.44 * cloudMed) * densityRough;
        juiceSigma *= (1.0 + bottomRichness * 0.54 + topRuby * 0.54 + edgeRichness * 0.78 + fluteOptical * 0.24);

        float absorbScale = hitsSolid ? 1.48 : 1.82;
        vec3 solidTrans = exp(-juiceSigma * opticalDist * absorbScale);
        // Crystal-clear drop-like liquid transparency right across the lower pouch edge band:
        // lets bright studio light shine straight through with only a light jewel-like rose/flavor tint!
        vec3 dropLikeTrans = exp(-flvSigma * (0.055 + 0.13 * clamp(opticalDist * 1.2, 0.0, 1.0) + 0.14 * (1.0 - N0dotV)));
        vec3 transmittance = mix(solidTrans, dropLikeTrans, hangClear * 0.96);
        vec3 transmitted = bgCol * transmittance;

        // === LUMINOUS BACKLIT WATER-BASE SUBSURFACE SCATTERING ===
        float screenHoriz = dot(vWorldPos.xz, camR.xz);
        float lightboxCore = exp(-dot(vec2(screenHoriz, vWorldPos.y) * vec2(0.72, 0.48), vec2(screenHoriz, vWorldPos.y) * vec2(0.72, 0.48)));
        float openChannel = hitsSolid ? smoothstep(0.030, 0.22, frontIceDist) * 0.52 : 1.0;

        float cloudContrast = pow(clamp(cloudMacro * 1.15, 0.0, 1.0), 1.42);
        float centerGlow = clamp(lightboxCore * (0.46 + 0.76 * cloudContrast) * (1.0 - edgeRichness * 0.86), 0.0, 1.0);
        vec3 baseGlow = mix(flvMid, flvCore, centerGlow);
        baseGlow *= (1.0 + warmNuance * openChannel * 0.12);

        vec3 sssJuiceColor = mix(
          baseGlow,
          flvDeep,
          clamp(bottomRichness * 0.50 + edgeRichness * 0.64 + topRuby * 0.48, 0.0, 0.94)
        );

        float roughScatterMod = 1.0 + crystalMod * 0.32;
        float scatterStrength = (0.54 + 0.64 * lightboxCore) * (0.68 + 0.52 * cloudContrast) * (0.48 + 0.44 * frostFactor) * roughScatterMod;
        // Liquid hanging edges & pouches have virtually zero milky internal scatter -> crystal-clear transparency!
        vec3 internalScatter = sssJuiceColor * (1.0 - solidTrans) * openChannel * scatterStrength * (1.0 - hangClear * 0.97);

        // === INTERNAL FROZEN CRYSTALLINE SNOW-POCKETS, MICRO-VEINS & ROUGH FREEZE TOOTH ===
        float crystalSpeck = smoothstep(0.60, 0.95, innerGranuleMicro) * smoothstep(0.34, 0.80, freezeRoughZone);
        float snowPocket = smoothstep(0.54, 0.90, crunchyPattern) * smoothstep(0.36, 0.82, freezeRoughZone) * (1.0 - uMelt * 0.42);
        float creviceDark = revStep(0.46, 0.14, crunchyPattern) * smoothstep(0.34, 0.82, freezeRoughZone) * (1.0 - uMelt * 0.42);

        vec3 warmFrostCol = mix(vec3(1.36, 1.30, 1.26), flvCore * 1.05 + vec3(0.45), 0.42);
        vec3 internalFreezeTex = (
          warmFrostCol * (snowPocket * 0.24 + freezeVeins * 0.28) * (hitsSolid ? 0.65 : 1.0) +
          vec3(1.56, 1.48, 1.40) * crystalSpeck * 0.20 * (hitsSolid ? 0.68 : 1.0)
        ) * thinIceFade * (1.0 - uOpacity * 0.62) * (1.0 - hangLiquid * 0.92);

        float grainSparkle = smoothstep(0.56, 0.94, microGrain) * frostFactor * (0.55 + 0.95 * freezeRoughZone) * (1.0 - uMelt * 0.45);
        float domeSparkle = 1.0 + smoothstep(0.50, 1.06, vWorldPos.y) * 1.25;
        vec3 frostTooth = mix(vec3(1.32, 1.24, 1.20), flvCore + vec3(0.35), 0.48) *
                          grainSparkle * domeSparkle * (hitsSolid ? 0.09 : 0.17) * thinIceFade * (1.0 - uOpacity * 0.58) * (1.0 - hangLiquid * 0.92);

        vec3 iceBody = (transmitted + internalScatter) * (1.0 - creviceDark * 0.24 * thinIceFade * (1.0 - hangClear * 0.92)) + internalFreezeTex + frostTooth;

        // === DAY 19 FROSTED SEA-GLASS TRANSLUCENCY FOR WATER BASE (HG forward scatter + internal light-piping + silky frost veil!) ===
        float waterSeaGlass = (1.0 - isMilkBase) * (1.0 - uOpacity * 0.72) * (1.0 - hangClear * 0.94);
        if (waterSeaGlass > 0.01) {
          vec3 backSunL = normalize(-camH + vec3(0.0, 0.24, 0.0));
          float cosL = dot(-V, backSunL);
          float gHG = 0.45;
          float hgPhase = (1.0 - gHG * gHG) / (12.56637 * pow(max(0.08, 1.0 + gHG * gHG - 2.0 * gHG * cosL), 1.5));
          float backLitIce = pow(clamp(dot(-N, backSunL) * 0.5 + 0.5, 0.0, 1.0), 1.45);
          float frontWrapIce = pow(clamp(dot(N, backSunL) * 0.5 + 0.5, 0.0, 1.0), 1.35);

          // Thin-edge sunlit glow (where dome/bevel thins out) + saturated internal light-piping along curved outer rims!
          float iceThinness = revStep(0.36, 0.06, totalThickness) * (0.45 + 0.55 * lightboxCore);
          vec3 pipeTint = exp(-flvSigma * 0.34);
          vec3 warmStudioBack = vec3(1.38, 1.22, 1.12);
          vec3 seaRimGlow = warmStudioBack * (0.34 + 0.42 * backLitIce) * mix(flvCore, pipeTint * 1.35, 0.45) * iceThinness * thinIceFade;

          float pipeMask = pow(1.0 - N0dotV, 2.0) * smoothstep(0.03, 0.34, N0dotV) * thinIceFade;
          vec3 pipeGlowCol = pipeTint * warmStudioBack * (0.58 + 0.48 * lightboxCore);
          vec3 hgBoost = mix(flvMid, flvCore, 0.55) * warmStudioBack * (hgPhase * 0.30 + backLitIce * 0.16) * (1.0 - solidTrans) * openChannel;

          iceBody += (seaRimGlow * 0.52 + hgBoost * 0.48) * waterSeaGlass;
          iceBody = mix(iceBody, max(iceBody, pipeGlowCol * 0.88), pipeMask * 0.58 * waterSeaGlass);

          // Silky color-tinted frosted sea-glass surface veil (thickens softly at grazing curves, clears where wet/melted!)
          float seaFrostWet = 1.0 - glazeCover * 0.68;
          float seaVeil = clamp(frostFactor * seaFrostWet * (0.07 + 0.24 * pow(1.0 - N0dotV, 1.55)) * thinIceFade * waterSeaGlass, 0.0, 0.34);
          vec3 seaVeilCol = mix(vec3(0.98, 0.94, 0.91), clamp(flvCore * 0.72 + vec3(0.26), vec3(0.0), vec3(1.25)), 0.54) * (0.72 + 0.36 * frontWrapIce + 0.18 * lightboxCore);
          iceBody = mix(iceBody, seaVeilCol, seaVeil);
        }

        float innerRubyRim = revStep(0.54, 0.16, N0dotV) * smoothstep(0.02, 0.16, N0dotV) * thinIceFade * (1.0 - uOpacity * 0.82) * (1.0 - hangClear * 0.88);
        iceBody = mix(iceBody, iceBody * clamp(flvMid * 0.85, vec3(0.15), vec3(1.15)) + flvDeep * 0.40, innerRubyRim * 0.36);

        // === OPAQUE CONDENSED-MILK PALETA BASE (and natural pulp opacity for banana/chocolate!) ===
        vec3 milkSheenTint = vec3(1.04, 1.01, 0.97);
        float milkShardSpark = 0.0;
        if (uOpacity > 0.01) {
          vec3 cKeyL = normalize(-0.68 * camR + vec3(0.0, 0.44, 0.0) + 0.58 * camH);
          vec3 cKeyR = normalize( 0.64 * camR + vec3(0.0, 0.36, 0.0) + 0.68 * camH);
          vec3 cKeyT = normalize(-0.14 * camR + vec3(0.0, 0.82, 0.0) + 0.55 * camH);

          // Velvety matte-granular frozen-cream normal relief (multi-scale tactile tooth + subtle irregular mold texture!)
          float coldMilkAmt = revStep(0.58, 0.06, uMelt) * (1.0 - glazeCover * 0.55);
          vec3 milkMedUndul = (vec3(inSampA.r, inSampA.g, inSampA.a) - 0.5) * (0.20 * isMilkBase * (0.35 + 0.65 * coldMilkAmt));
          vec3 milkFineTooth = (vec3(inSampFine.r, inSampFine.g, inSampFine.a) - 0.5) * (0.30 * isMilkBase * (0.35 + 0.65 * coldMilkAmt));
          vec3 N_milk = normalize(mix(N0, N_ice, 0.48) + milkMedUndul + milkFineTooth);

          // --- 1. FROZEN AIR-POCKET HOLES, TINY PINHOLES & SHALLOW MOLD POCKMARKS ---
          float holePit = 0.0;
          float holeWall = 0.0;
          float moldDimple = 0.0;
          vec3 holeDir = vec3(0.0);
          if (isMilkBase > 0.01) {
            float holeMeltFade = revStep(0.62, 0.14, uMelt) * (1.0 - glazeCover * 0.55) * edgeMeltFade;
            if (holeMeltFade > 0.01) {
              // Broad shallow irregular mold-wall dimples (sculpt organic pockets along flutes & face without dark dots!)
              vec3 dirD;
              vec2 hd = evalAirPocketCell(
                icePos * 10.5 + vec3(-1.4, uSeedOffset * 0.9, 2.3),
                1.0 / 10.5,
                0.60,
                0.15,
                0.24,
                dirD
              );
              moldDimple = hd.x * holeMeltFade * isMilkBase;
              if (moldDimple > 0.01) {
                vec3 tangD = dirD - N0 * dot(dirD, N0);
                N_milk = normalize(N_milk - tangD * (moldDimple * 0.46));
              }

              // Medium trapped air-bubble craters (clearly legible sculpted irregular cavities!)
              vec3 dirM;
              vec2 hm = evalAirPocketCell(
                icePos * 14.5 + vec3(uSeedOffset * 1.3, 2.1, -0.7),
                1.0 / 14.5,
                0.62,
                0.125,
                0.235,
                dirM
              );
              // Rotated crisp tiny pinholes (creates natural 2-3 hole clusters along flutes & face!)
              vec3 rotIceS = vec3(icePos.x * 0.80 - icePos.y * 0.60, icePos.x * 0.60 + icePos.y * 0.80, icePos.z);
              vec3 dirS;
              vec2 hs = evalAirPocketCell(
                rotIceS * 29.0 + vec3(-3.4, uSeedOffset * 2.1, 4.7),
                1.0 / 29.0,
                0.64,
                0.115,
                0.205,
                dirS
              );
              holePit = clamp(max(hm.x, hs.x * 0.90), 0.0, 1.0) * holeMeltFade * isMilkBase;
              holeWall = clamp(max(hm.y, hs.y * 0.85), 0.0, 1.0) * holeMeltFade * isMilkBase;
              holeDir = hm.x >= hs.x ? dirM : dirS;
              if (holePit > 0.01 || holeWall > 0.01) {
                vec3 tangDir = holeDir - N0 * dot(holeDir, N0);
                // Concave crater wall normal tilts inward -> dark upper-left interior, naturally lit lower-right edge!
                N_milk = normalize(N_milk - tangDir * ((holePit * 0.95 + holeWall * 0.38)));
              }
            }
          }

          float wL = clamp((dot(N_milk, cKeyL) + 0.32) / 1.32, 0.0, 1.0);
          float wR = clamp((dot(N_milk, cKeyR) + 0.40) / 1.40, 0.0, 1.0);
          float wT = clamp((dot(N_milk, cKeyT) + 0.34) / 1.34, 0.0, 1.0);

          // Deep sculpted twin vertical flutes + organic wavy matte frost along flute shoulders (NEVER straight neon lines!)
          float fluteWarp = (warpOff.x * 0.042 + (inSampA.r - 0.5) * 0.028);
          float fluteAbsD = abs(abs(icePos.x) - ${Fe.fluteX.toFixed(4)});
          float fluteSpanY = smoothstep(-0.86, -0.54, icePos.y) * revStep(0.84, 0.52, icePos.y) * revStep(0.56, 0.14, uMelt);
          float fluteTrack = exp(-sq(fluteAbsD / 0.044)) * fluteSpanY;
          float fluteRidgeWavy = exp(-sq((abs(abs(icePos.x + fluteWarp) - ${Fe.fluteX.toFixed(4)}) - 0.064) / 0.030)) * fluteSpanY;
          float fluteAO = 1.0 - fluteTrack * (0.38 + 0.18 * (1.0 - wL));

          // Soft ambient wrap on edges + sculpted key-to-shadow gradient (kept <= 1.0 so ACES preserves deep chroma!)
          float edgeForm = 0.80 + 0.20 * smoothstep(0.06, 0.56, N0dotV);
          float creamLight = clamp((0.18 + 0.56 * wL + 0.16 * wR + 0.10 * wT) * fluteAO * edgeForm, 0.0, 1.0);

          // --- 2. RICH ORGANIC COLOR & TEXTURE VARIATION (cloudy frozen-milk mottling + fine sugary velvety grain, NO caustic webs!) ---
          vec3 grainCoord = icePos * vec3(15.0, 4.8, 14.0) + warpOff * 1.1 + vec3(uSeedOffset * 1.4, -1.2, 0.8);
          vec4 fgSamp = texture(uNoise3D, grainCoord * INV_P6);
          float verticalFreezeGrain = fgSamp.r * 0.60 + fgSamp.a * 0.40;
          float mottleCoarse = texture(uNoise3D, (icePos * vec3(5.0, 4.0, 5.0) + warpOff * 0.7 + vec3(-1.8, uSeedOffset * 1.1, 2.4)) * INV_P6).g;
          float mottleMed = texture(uNoise3D, (icePos * vec3(12.5, 9.5, 12.5) + vec3(2.3, -1.7, uSeedOffset * 1.9)) * INV_P6).r;
          float mottleFine = inSampA.g * 0.48 + inSampFine.r * 0.52;
          float velvetSugarTooth = rFine.a * 0.45 + rMicro.a * 0.55;

          // Concentrated dark fruit-pigment blotches vs soft cloudy frozen-milk marbling patches!
          float pigmentPocket = smoothstep(0.36, 0.82, mottleCoarse * 0.52 + (1.0 - cloudMacro) * 0.30 + (1.0 - mottleMed) * 0.18) * isMilkBase;
          float milkSwirlRaw = clamp(cloudMacro * 0.44 + cloudMed * 0.32 + (mottleMed - 0.5) * 0.28 + (verticalFreezeGrain - 0.5) * 0.24, 0.0, 1.0);
          float milkRibbon = smoothstep(0.46, 0.84, milkSwirlRaw) * isMilkBase;
          float microMottle = (mottleFine - 0.5) * 0.30 + (velvetSugarTooth - 0.5) * 0.24 + (verticalFreezeGrain - 0.5) * 0.14;

          // Distinct organic light/dark tonal richness without washing vibrant fruit hues into chalky pastel!
          vec3 paleMilkTint = mix(flvCreamAlb * 1.24 + vec3(0.14, 0.12, 0.11), vec3(0.94, 0.89, 0.80), 0.32);
          vec3 deepJuiceTint = mix(flvCreamDeep * 0.66, flvCreamAlb * 0.52, 0.30);
          vec3 swirledAlb = mix(flvCreamAlb, deepJuiceTint, pigmentPocket * 0.44);
          swirledAlb = mix(swirledAlb, paleMilkTint, milkRibbon * 0.34);
          vec3 swirledDeep = mix(flvCreamDeep, flvCreamDeep * 0.64, pigmentPocket * 0.36);
          swirledDeep = mix(swirledDeep, mix(flvCreamDeep, vec3(0.60, 0.50, 0.38), 0.20), milkRibbon * 0.24);
          milkSheenTint = mix(vec3(1.04, 1.00, 0.96), swirledAlb * 1.12 + vec3(0.30), 0.48);

          // Tactile velvety frozen-cream grain + shallow mold-dimple shading
          float creamGrain = clamp(0.92 + 0.18 * (crunchyPattern - 0.5) + 0.14 * (microGrain - 0.5) + microMottle * isMilkBase - creviceDark * 0.14 - moldDimple * 0.18, 0.60, 1.26);
          vec3 creamBase = mix(swirledDeep, swirledAlb, creamLight) * creamGrain;

          // Subtle, organically broken matte-velvet frost dusting across cold crests & wavy flute shoulders
          vec3 frostDustCol = mix(swirledAlb * 1.26 + vec3(0.18, 0.16, 0.15), vec3(0.95, 0.92, 0.89), 0.42);
          float wavyRidgePatch = smoothstep(0.38, 0.80, mottleMed * 0.52 + velvetSugarTooth * 0.48);
          float ridgeFrostAmt = fluteRidgeWavy * wavyRidgePatch * coldMilkAmt * isMilkBase;
          float coldVelvetDust = smoothstep(0.54, 0.90, velvetSugarTooth * 0.55 + mottleFine * 0.45) * coldMilkAmt * isMilkBase;
          creamBase = mix(creamBase, frostDustCol, clamp(ridgeFrostAmt * 0.28 + coldVelvetDust * 0.20, 0.0, 0.44));

          // Apply crisp organic air-pocket cavities (deep rich pigment pit shadow + subtle directional lit lip — zero white ring!)
          if (holePit > 0.005 || holeWall > 0.005) {
            vec3 pitDarkCol = swirledDeep * (0.18 + 0.20 * wL);
            creamBase = mix(creamBase, pitDarkCol, clamp(holePit * 0.86, 0.0, 0.88));
            float dirLip = pow(clamp(dot(-holeDir, cKeyL), 0.0, 1.0), 1.8);
            creamBase = mix(creamBase, mix(swirledAlb * 1.18, frostDustCol, 0.45), clamp(holeWall * dirLip * 0.30, 0.0, 0.32));
          }

          // --- 3. CRISP SCATTERED ICE/SUGAR MICRO-SHARDS (faceted frosty crystal flakes & organic drifts on cold milk!) ---
          if (isMilkBase > 0.01) {
            float shardMeltFade = revStep(0.52, 0.06, uMelt) * (1.0 - glazeCover * 0.72) * edgeMeltFade;
            if (shardMeltFade > 0.01) {
              // Coarse flaky frosted sugar/ice shards (visible ~2-5px irregular crystalline flecks in organic drifts!)
              vec2 shA = evalMicroShardCell(
                icePos * 24.0 + vec3(uSeedOffset * 1.7, -1.9, 3.1),
                1.0 / 24.0,
                0.86,
                0.082,
                0.175
              );
              // Medium angular micro-splinters (rotated 51 deg so shards layer into crisp frosty crystal drifts!)
              vec3 rotIceSh1 = vec3(icePos.x * 0.63 + icePos.y * 0.78, -icePos.x * 0.78 + icePos.y * 0.63, icePos.z);
              vec2 shB = evalMicroShardCell(
                rotIceSh1 * 48.0 + vec3(5.2, uSeedOffset * 2.9, -2.3),
                1.0 / 48.0,
                0.90,
                0.075,
                0.160
              );
              // Fine sparkling frozen sugar-frost micro-crystals (rotated -32 deg)
              vec3 rotIceSh2 = vec3(icePos.x * 0.85 - icePos.y * 0.53, icePos.x * 0.53 + icePos.y * 0.85, icePos.z);
              vec2 shC = evalMicroShardCell(
                rotIceSh2 * 86.0 + vec3(-4.1, 2.7, uSeedOffset * 3.3),
                1.0 / 86.0,
                0.86,
                0.070,
                0.145
              );
              float wA = shA.x * shA.y * 0.92;
              float wB = shB.x * shB.y * 0.86;
              float wC = shC.x * shC.y * 0.74;
              float shardCov = clamp(max(wA, max(wB, wC)), 0.0, 1.0) * shardMeltFade * isMilkBase;
              vec3 shardCol = mix(vec3(1.04, 1.01, 0.97), swirledAlb * 0.50 + vec3(0.66), 0.22);
              creamBase = mix(creamBase, shardCol, clamp(shardCov * 0.86, 0.0, 0.88));
              milkShardSpark = shardCov * smoothstep(0.60, 1.0, max(shA.y, shB.y));
            }
          }

          // Very soft subsurface warm scatter strictly along thin rim bevels (never washes out body!)
          float rimSss = pow(1.0 - N0dotV, 3.0) * (0.14 + 0.14 * lightboxCore);
          creamBase += flvCreamSss * rimSss * (0.24 - 0.12 * isMilkBase);

          // Pressed-in toppings right against the outer 1-3mm mold skin integrate organically into opaque milk
          // with ZERO bright white studio-backdrop border or halo: any gather tap outside the topping silhouette
          // (s.a <= 0.5) substitutes creamBase (the actual flavored milk) instead of white lightbox air!
          if (isMilkBase > 0.01) {
            float peekMaxD = 0.066;
            float nearSolidAlpha = max(bgCenter.a, texture(uBgBlur1, clamp(screenUv, vec2(0.002), vec2(0.998))).a);
            if (nearSolidAlpha > 0.008) {
              float milkSolidDist = (rawHitsSolid && bgCenter.a > 0.5) ? rawFrontDist : 99.0;
              if (milkSolidDist >= peekMaxD) {
                vec2 pStep = (2.4 * clamp(uResolution.y / 1000.0, 0.75, 2.0)) / uResolution;
                vec2 z0 = texture(uInteriorZ, clamp(screenUv + vec2( pStep.x, 0.0), vec2(0.002), vec2(0.998))).rg;
                vec2 z1 = texture(uInteriorZ, clamp(screenUv + vec2(-pStep.x, 0.0), vec2(0.002), vec2(0.998))).rg;
                vec2 z2 = texture(uInteriorZ, clamp(screenUv + vec2(0.0,  pStep.y), vec2(0.002), vec2(0.998))).rg;
                vec2 z3 = texture(uInteriorZ, clamp(screenUv + vec2(0.0, -pStep.y), vec2(0.002), vec2(0.998))).rg;
                if (z0.g > 0.5 && z0.r >= dFront - 0.05 && z0.r < dBack + 0.06) milkSolidDist = min(milkSolidDist, max(0.0, z0.r - dFront));
                if (z1.g > 0.5 && z1.r >= dFront - 0.05 && z1.r < dBack + 0.06) milkSolidDist = min(milkSolidDist, max(0.0, z1.r - dFront));
                if (z2.g > 0.5 && z2.r >= dFront - 0.05 && z2.r < dBack + 0.06) milkSolidDist = min(milkSolidDist, max(0.0, z2.r - dFront));
                if (z3.g > 0.5 && z3.r >= dFront - 0.05 && z3.r < dBack + 0.06) milkSolidDist = min(milkSolidDist, max(0.0, z3.r - dFront));
              }

              if (milkSolidDist < peekMaxD) {
                float creamPeek = exp(-milkSolidDist * 38.0) * revStep(peekMaxD, 0.0, milkSolidDist);
                float veilDepth = smoothstep(0.002, peekMaxD, milkSolidDist);
                float pxScale = clamp(uResolution.y / 1000.0, 0.75, 2.0);
                vec2 radUv = (mix(0.65, 3.6, veilDepth) * pxScale) / uResolution;
                vec2 dRad = radUv * 0.7071;

                vec3 c0 = bgCenter.a > 0.5 ? bgCenter.rgb : creamBase;
                vec4 t1 = texture(uBgTex, clamp(screenUv + vec2( radUv.x, 0.0), vec2(0.002), vec2(0.998)));
                vec4 t2 = texture(uBgTex, clamp(screenUv + vec2(-radUv.x, 0.0), vec2(0.002), vec2(0.998)));
                vec4 t3 = texture(uBgTex, clamp(screenUv + vec2(0.0,  radUv.y), vec2(0.002), vec2(0.998)));
                vec4 t4 = texture(uBgTex, clamp(screenUv + vec2(0.0, -radUv.y), vec2(0.002), vec2(0.998)));
                vec4 t5 = texture(uBgTex, clamp(screenUv + vec2( dRad.x,  dRad.y), vec2(0.002), vec2(0.998)));
                vec4 t6 = texture(uBgTex, clamp(screenUv + vec2(-dRad.x,  dRad.y), vec2(0.002), vec2(0.998)));
                vec4 t7 = texture(uBgTex, clamp(screenUv + vec2( dRad.x, -dRad.y), vec2(0.002), vec2(0.998)));
                vec4 t8 = texture(uBgTex, clamp(screenUv + vec2(-dRad.x, -dRad.y), vec2(0.002), vec2(0.998)));

                vec3 s1 = t1.a > 0.5 ? t1.rgb : creamBase;
                vec3 s2 = t2.a > 0.5 ? t2.rgb : creamBase;
                vec3 s3 = t3.a > 0.5 ? t3.rgb : creamBase;
                vec3 s4 = t4.a > 0.5 ? t4.rgb : creamBase;
                vec3 s5 = t5.a > 0.5 ? t5.rgb : creamBase;
                vec3 s6 = t6.a > 0.5 ? t6.rgb : creamBase;
                vec3 s7 = t7.a > 0.5 ? t7.rgb : creamBase;
                vec3 s8 = t8.a > 0.5 ? t8.rgb : creamBase;

                vec3 gathered = (c0 * 2.0 + s1 + s2 + s3 + s4 + (s5 + s6 + s7 + s8) * 0.75) / 9.0;
                vec3 peekSrc = mix(c0, gathered, smoothstep(0.0, 0.22, veilDepth));
                vec3 peekTint = mix(peekSrc, mix(peekSrc * 0.70 + swirledAlb * 0.30, creamBase, 0.40), veilDepth * 0.85);
                float emergeMix = clamp(creamPeek * mix(1.0, 0.94, veilDepth), 0.0, 1.0);
                creamBase = mix(creamBase, peekTint, emergeMix);
              }
            }
          } else if (hitsSolid) {
            float creamPeek = exp(-frontIceDist * 26.0) * revStep(0.105, 0.0, frontIceDist);
            float veilDepth = smoothstep(0.002, 0.105, frontIceDist);
            vec3 peekTint = mix(bgCol, mix(bgCol * 0.68 + swirledAlb * 0.32, creamBase, 0.42), veilDepth * 0.45);
            creamBase = mix(creamBase, peekTint, clamp(creamPeek * 0.92, 0.0, 0.96));
          }

          // Melted wet condensed milk deepens & turns lush velvety satin where liquid glaze flows
          creamBase *= mix(vec3(1.0), vec3(0.90, 0.86, 0.84), glazeCover * (0.24 + 0.16 * isMilkBase));

          // True 100% opaque coverage on condensed-milk base: creamBase already converges smoothly
          // to uncovered toppings as depth -> 0, so NEVER fall back to translucent water iceBody!
          float milkCoverage = mix(uOpacity * thinIceFade, uOpacity, isMilkBase);
          iceBody = mix(iceBody, creamBase, clamp(milkCoverage, 0.0, mix(0.96, 1.0, isMilkBase)));
        }

        // === GLOSSY VISCOUS MELT-SYRUP GLAZE LAYERING & BOTTOM PUDDLE ABSORPTION ===
        // Thick creeping sticky syrup layers deepen flavor saturation on the body;
        // inside crystal-clear hanging drop pouches (hangClear), keep clarity crisp & luminous like real drops!
        vec3 glazeAbsorb = mix(flvSigma * 0.42, vec3(0.24), uOpacity * 0.78);
        float glazeOpticalDepth = (glazeWave * 0.56 + glazeThick * 0.42 + bottomPoolZone * 0.40) * (1.0 - hangClear * 0.92);
        vec3 glazeTint = exp(-glazeAbsorb * glazeOpticalDepth * thinIceFade);
        iceBody *= mix(vec3(1.0), glazeTint, 0.86 * (1.0 - uOpacity * 0.50));
        // Subtle darker meniscus contour right underneath the curved leading lip of an advancing syrup wave
        float lipShade = clamp(max(0.0, -filmSlope.y) * 1.25 * glazeEdge * thinIceFade, 0.0, 0.24);
        iceBody *= (1.0 - lipShade * (1.0 - uOpacity * 0.55));
        iceBody *= mix(vec3(1.0), mix(vec3(0.92), uStainCol, 0.24), wetMem * 0.24 * (1.0 - glazeCover) * thinIceFade * (1.0 - hangClear * 0.92));

        // Jewel-clear optical water-drop refractive contour rim along the transparent lower edge (matching hanging drops!)
        float hangGlassRim = revStep(0.62, 0.14, N0dotV) * hangClear;
        vec3 dropRimTint = mix(vec3(0.46, 0.22, 0.24), uStainCol * 0.48, 0.65);
        iceBody = mix(iceBody, iceBody * dropRimTint, clamp(hangGlassRim * 0.64, 0.0, 0.66));

        // Rich colored porous pebble shading after 1/3 melt (studio lights stay locked to viewer azimuth for 360° turntable!)
        vec3 keyL = normalize(-0.66 * camR + vec3(0.0, 0.46, 0.0) + 0.59 * camH);
        vec3 keyR = normalize( 0.66 * camR + vec3(0.0, 0.42, 0.0) + 0.62 * camH);
        vec3 keyTop = normalize(-0.18 * camR + vec3(0.0, 0.78, 0.0) + 0.60 * camH);
        vec3 keyFront = normalize( 0.14 * camR + vec3(0.0, 0.34, 0.0) + 0.93 * camH);

        if (postThirdTex > 0.005) {
          // Pure colored micro-bump diffuse relief: lit upper pebble bevels glow richer, shadowed troughs deepen!
          float lIce = dot(N_ice, keyL) * 0.48 + dot(N_ice, keyTop) * 0.34 + dot(N_ice, keyR) * 0.18;
          float lBase = dot(N0, keyL) * 0.48 + dot(N0, keyTop) * 0.34 + dot(N0, keyR) * 0.18;
          float bumpRelief = clamp(lIce - lBase, -0.34, 0.34);
          iceBody *= 1.0 + bumpRelief * mix(0.88, 0.44, uOpacity) * postThirdTex * thinIceFade;

          // Rich saturated flavor darkening inside tiny melted ice-crystal pores
          float wetSlushDepth = slushCavity * thinIceFade * (1.0 - hangClear * 0.94);
          vec3 creviceTint = mix(flvDeep * 0.58 + vec3(0.12), vec3(0.86, 0.83, 0.81), uOpacity * 0.82);
          iceBody = mix(iceBody, iceBody * creviceTint, clamp(wetSlushDepth * 0.42, 0.0, 0.44));
        }

        // === INTERNAL TRAPPED AIR MICRO-BUBBLES (hidden inside opaque coconut & clear hanging liquid syrup!) ===
        vec4 bub = texture(uBubblesTex, clamp(uvG, vec2(0.002), vec2(0.998)));
        float bubVis = clamp(bub.a * 0.92 * thinIceFade * (1.0 - uOpacity * 0.92) * (1.0 - hangLiquid * 0.94), 0.0, 0.92);
        iceBody = mix(iceBody, bub.rgb, bubVis);

        // === WET GLAZE FRESNEL, SOFT SYRUPY SHEEN & SPARSE CRISP WET CRYSTAL PINPOINTS ===
        // Gently ripple glaze reflections over the wet porous pebbles (bounded blend avoids huge white blotches!)
        vec3 N_refl = normalize(mix(N_glaze, N_ice, clamp(postThirdTex * 0.36 * (1.0 - uOpacity * 0.35), 0.0, 0.40)));
        vec3 R_glaze = reflect(-V, N_refl);
        vec3 R_smooth = reflect(-V, N0);
        vec3 R_glazeStudio = vec3(dot(R_glaze, camR), R_glaze.y, dot(R_glaze, camH));
        vec3 R_smoothStudio = vec3(dot(R_smooth, camR), R_smooth.y, dot(R_smooth, camH));

        float fresnel = (0.02 + 0.98 * pow(1.0 - clamp(dot(N_glaze, V), 0.0, 1.0), 4.8)) * edgeMeltFade * (0.35 + 0.65 * thinIceFade);
        float shoulderGlareTame = mix(1.0, 0.48, smoothstep(0.55, 0.95, vWorldPos.y));
        float dryFrostMatte = 1.0 - rimeMask * 0.84;
        // Keep cold condensed milk truly velvety matte (zero glossy plastic shoulder glare until melting warms the surface!)
        float milkWetness = smoothstep(0.18, 0.48, uMelt) * 0.74 + glazeCover * smoothstep(0.14, 0.34, uMelt) * 0.26;
        float filmRough = mix(mix(0.10, 0.045, glazeCover) + postThirdTex * 0.165, 0.42 - 0.16 * milkWetness, isMilkBase);
        vec3 specWet = evalMacroStudioReflection(R_glazeStudio, filmRough) * shoulderGlareTame;
        vec3 specSatin = evalMacroStudioReflection(R_smoothStudio, 0.32) * shoulderGlareTame;

        // Dry powdery hoarfrost damps mirror-glossy studio reflections; cold condensed milk is velvety matte,
        // warming gently into a soft, micro-grain-broken wet-cream satin sheen as it melts (never plastic wrap!)
        float milkSpecScale = mix(1.0, 0.025 + 0.16 * milkWetness, isMilkBase);
        float glazeSpecBoost = (1.0 + glazeCover * 0.45 + wetMem * 0.16) * (1.0 - postThirdTex * 0.56) * dryFrostMatte * milkSpecScale;
        vec3 color =
          iceBody * (1.0 - fresnel * 0.38 * dryFrostMatte * mix(1.0, 0.08, isMilkBase)) +
          specWet * (fresnel * 0.70 * glazeSpecBoost) +
          specSatin * (fresnel * 0.14 * frostFactor * (1.0 - glazeCover * 0.75) * thinIceFade * dryFrostMatte * mix(1.0, 0.18, isMilkBase));

        // Soft, slightly granular wet-cream sheen when condensed milk melts + sparse crisp micro-shard twinkle
        if (isMilkBase > 0.01) {
          float milkGrainBreak = 0.72 + 0.56 * innerGranuleFine;
          float milkBroadSheen =
            (pow(max(dot(N_glaze, safeNorm(keyL + V)), 0.0), 34.0) * 0.11 +
             pow(max(dot(N_glaze, safeNorm(keyR + V)), 0.0), 42.0) * 0.06 +
             pow(1.0 - N0dotV, 3.2) * 0.07) * milkGrainBreak;
          color += milkSheenTint * milkBroadSheen * milkWetness * isMilkBase * dryFrostMatte * edgeMeltFade;
          color += vec3(1.36, 1.32, 1.28) * milkShardSpark * 0.24 * dryFrostMatte * edgeMeltFade;
        }

        // Organic, crystal-broken frosted specular ridges along the twin molded flutes (suppressed on matte milk!)
        float fluteFade = revStep(0.36, 0.14, uMelt) * (1.0 - isMilkBase * 0.96);
        if (fluteFade > 0.002) {
          vec3 R_flute = reflect(-V, normalize(mix(N0, N_ice, 0.55)));
          float nearFluteTrack = exp(-sq((abs(vWorldPos.x) - ${Fe.fluteX.toFixed(4)}) / 0.064));
          float fluteBreakup = smoothstep(0.18, 0.82, innerGranuleCoarse);
          float fluteCrystalSpark = smoothstep(0.45, 0.95, innerGranuleMicro) * 0.85;
          float fluteBand = exp(-sq((abs(R_flute.x) - 0.34) / 0.056)) *
                            smoothstep(0.08, 0.24, abs(N0.x)) *
                            revStep(0.54, 0.24, abs(N0.x)) *
                            smoothstep(-0.86, -0.60, vWorldPos.y) *
                            revStep(0.88, 0.62, vWorldPos.y) *
                            nearFluteTrack * fluteFade;
          float fluteLine = fluteBand * (0.28 + 0.82 * fluteBreakup + fluteCrystalSpark + freezeVeins * 0.45);
          color += mix(vec3(1.56, 1.38, 1.34), vec3(1.68, 1.48, 1.24), warmNuance * 0.45) * fluteLine * 0.34 * edgeMeltFade * dryFrostMatte;
        }

        // Crisp sparse sparkling wet micro-crystal pinpoints across porous thawing sugar-ice
        vec3 hL = safeNorm(keyL + V);
        vec3 hR = safeNorm(keyR + V);
        vec3 hT = safeNorm(keyTop + V);
        vec3 hF = safeNorm(keyFront + V);

        float creamSmoothSpec = (1.0 - uOpacity * 0.78) * (1.0 - isMilkBase * 0.96);
        float solidIceSpec = 1.0 - hangLiquid * 0.88;
        float solidSpecScale = creamSmoothSpec * solidIceSpec;

        float crystalGlint = 0.0;
        if (solidSpecScale > 0.002) {
          crystalGlint =
            pow(max(dot(N, hL), 0.0), 460.0) * 1.35 +
            pow(max(dot(N, hR), 0.0), 460.0) * 1.20 +
            pow(max(dot(N, hT), 0.0), 540.0) * 1.25;
        }

        float ndhL_g = max(dot(N_glaze, hL), 0.0);
        float ndhR_g = max(dot(N_glaze, hR), 0.0);
        float ndhT_g = max(dot(N_glaze, hT), 0.0);

        float softGlazeW = clamp(glazeCover * 0.68 + glazeEdge * 1.15, 0.0, 1.35);
        float softGlazeSheen = softGlazeW > 0.002
          ? (pow(ndhL_g, 135.0) * 0.82 + pow(ndhR_g, 135.0) * 0.68 + pow(ndhT_g, 175.0) * 0.62) * softGlazeW * (1.0 - postThirdTex * 0.55)
          : 0.0;
        // Sharp glossy curved liquid gleam riding along the advancing lip of each creeping sticky syrup wave!
        float glazeLipGlint = glazeEdge > 0.002
          ? (pow(ndhL_g, 280.0) * 1.45 + pow(ndhR_g, 280.0) * 1.25 + pow(ndhT_g, 320.0) * 1.35) * glazeEdge * (1.0 - postThirdTex * 0.62)
          : 0.0;
        float bottomStickyGlint = bottomPoolZone > 0.002
          ? (pow(ndhL_g, 210.0) * 1.25 + pow(ndhR_g, 210.0) * 1.15 + pow(ndhT_g, 180.0) * 0.92) * bottomPoolZone
          : 0.0;

        // Crisp sparse 1-2px wet white specular pinpoints on the sharpest pebble bevels (NEVER chalky white static!)
        float ndhL_i = max(dot(N_ice, hL), 0.0);
        float ndhR_i = max(dot(N_ice, hR), 0.0);
        float ndhT_i = max(dot(N_ice, hT), 0.0);
        float ndhF_i = max(dot(N_ice, hF), 0.0);
        float pebbleCrest = smoothstep(0.48, 0.88, microGrain);
        float slushPinpoints = (slushFacet > 0.002 && solidSpecScale > 0.002)
          ? (pow(ndhL_i, 460.0) * 2.10 +
             pow(ndhR_i, 460.0) * 1.85 +
             pow(ndhT_i, 520.0) * 1.95 +
             pow(ndhF_i, 380.0) * 1.45 * postThirdTex) * slushFacet * (0.35 + 0.65 * pebbleCrest)
          : 0.0;

        // Suppress hard glossy plastic glaze bands on velvety matte condensed milk (keep subtle soft wet luster when melting!)
        float milkGlazeSpec = mix(1.0, 0.02 + 0.14 * milkWetness, isMilkBase);
        color *= 1.0 + (microGrain - 0.50) * (0.18 + 0.14 * postThirdTex) * slushFacet * thinIceFade * solidSpecScale * dryFrostMatte;
        color += vec3(1.96, 1.85, 1.80) * (crystalGlint * solidSpecScale + slushPinpoints * 1.35 * thinIceFade * solidSpecScale + (glazeLipGlint * 1.05 + bottomStickyGlint * 0.95) * milkGlazeSpec) * edgeMeltFade * (0.38 + 0.62 * thinIceFade) * dryFrostMatte;
        color += vec3(1.72, 1.60, 1.56) * softGlazeSheen * milkGlazeSpec * edgeMeltFade * (0.42 + 0.58 * thinIceFade) * dryFrostMatte;

        // Luminous clear glass bottom caustic crescent & crisp droplet-style pinpoint catchlights on hanging pouches!
        float hangCaustic = revStep(0.16, -0.78, N_glaze.y) * smoothstep(0.12, 0.72, N0dotV) * max(hangLiquid, hangClear) * (1.0 - uOpacity * 0.68);
        color += mix(vec3(0.82, 0.72, 0.68), uStainCol * 0.82 + vec3(0.26), 0.52) * hangCaustic * 0.62;
        if (hangClear > 0.002) {
          float hangPinSpec = (pow(ndhL_g, 220.0) * 1.15 + pow(ndhR_g, 180.0) * 0.82) * hangClear;
          color += vec3(2.4, 2.3, 2.24) * hangPinSpec * edgeMeltFade;
        }

        // Keep the luminous cloudy pink rim glow alive across translucent water ice (suppressed on opaque condensed milk!)
        float silhouetteRim = pow(1.0 - N0dotV, 5.4) * thinIceFade * (1.0 - hangClear * 0.28) * (1.0 - isMilkBase * 0.88);
        color += vec3(1.36, 0.98, 0.94) * silhouetteRim * 0.48 * dryFrostMatte;

        // === FREEZER-FRESH POWDERY HOARFROST RIME LAYER (instant melt under pointer!) ===
        if (rimeMask > 0.005 || rimeWetEdge > 0.005) {
          vec4 rTuft = texture(uNoise3D, (vWorldPos * 32.0 + vec3(uSeedOffset * 1.1, 3.3, -1.7)) * INV_P8);
          float rimEdgeFuzz = pow(1.0 - N0dotV, 1.48);
          float topSnow = smoothstep(0.62, 1.04, vWorldPos.y) * 0.22;

          // Crisp spiky crystalline frost needles & high-contrast micro-fuzz (vivid popsicle glows richly underneath!)
          float needleRaw = rMicro.a * 0.58 + rFine.b * 0.42;
          float needleSpikes = pow(smoothstep(0.38, 0.92, needleRaw), 1.65);
          float microFuzz = smoothstep(0.46, 0.94, rMicro.b * 0.65 + rFine.a * 0.35);

          // Scattered crisp bright snow-crystal star-tufts heaviest along cold grazing right/left edges & shoulders!
          float tuftRaw = rTuft.b * 0.55 + rFine.b * 0.45;
          float frostTuft = pow(smoothstep(0.60, 0.91, tuftRaw), 2.35) *
                            (0.42 + 1.85 * rimEdgeFuzz + topSnow * 1.8);
          // Occasional tiny bright crisp snowflake specks across the face (matches macro hoarfrost photo!)
          float snowFlakeSpeck = pow(smoothstep(0.76, 0.96, rTuft.a * 0.52 + rFine.a * 0.48), 2.8) * rimeMask;

          // Warm backlit icy-white micro-crystals on face -> pure luminous snowy white along fuzzy grazing silhouette!
          vec3 frostSnowCol = mix(
            vec3(1.26, 1.14, 1.11),
            vec3(1.56, 1.52, 1.48),
            clamp(rimEdgeFuzz * 1.20 + needleSpikes * 0.45 + topSnow, 0.0, 1.0)
          );

          // Delicate translucent frosty base (lets vibrant strawberry-coral & berries shine vividly through!)
          // + crisp dense white needle fibers + thick snowy fuzzy rim halo!
          float faceCov = rimeMask * (0.11 + 0.36 * needleSpikes + 0.16 * microFuzz + topSnow * 0.38);
          float rimCov = rimeMask * rimEdgeFuzz * (0.58 + 0.50 * needleSpikes + 0.25 * microFuzz);
          float totalFrostCov = clamp(max(faceCov, rimCov), 0.0, 0.92);

          // Crisp twinkling dry micro-crystal pinpoints across the hoarfrost needles
          float frostSparkle = pow(smoothstep(0.76, 0.98, rMicro.a * rFine.b * 1.64), 1.9) * rimeMask;

          // Subtle wet dark-meniscus transition border right along an active melted frost shoreline.
          // On opaque condensed milk, damp the straight flute-valley rime stripe so milk's own micro-shards & frost shine!
          float milkRimeCalm = mix(1.0, 0.08, isMilkBase);
          color *= mix(1.0, 0.85, rimeWetEdge * 0.55 * milkRimeCalm);
          color = mix(color, frostSnowCol, totalFrostCov * milkRimeCalm);
          color += vec3(1.75, 1.70, 1.66) * (frostTuft * rimeMask * 0.62 + snowFlakeSpeck * 0.85 + frostSparkle * 0.58) * milkRimeCalm;
        }

        // Tag postIceRT.a so Pass 6b can apply a continuous capillary surface-tension blur & contact shadow
        // strictly where uncovered berries/strawberries physically emerge from melting ice (zero effect on
        // mid-air falling fruits or studio silhouettes!):
        //   0.00 = backdrop air, 0.25 = open ice, 0.55 = contact-zone ice hugging an emerging fruit, 1.00 = solid
        float isContactIce = ((hitsSolid && frontIceDist < 0.15) || texture(uBgBlur1, clamp(screenUv, vec2(0.002), vec2(0.998))).a > 0.02) ? 0.55 : 0.25;
        fragColor = vec4(color, isContactIce);
      }
    `}),uniforms:t}}function Q_(i){const t=Fn(i*251+89),n=new Rs(1,14,10),s=new bn({transparent:!0,depthWrite:!1,depthTest:!0,vertexShader:`
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      varying float vDepthFront;

      void main() {
        vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vec4 mvPos = viewMatrix * wp;
        vNormalView = normalize(normalMatrix * mat3(instanceMatrix) * normal);
        vViewDir = normalize(-mvPos.xyz);
        // Camera-relative frontness (works from front, side, and 180° back orbit!)
        float centerDepth = -(viewMatrix * vec4(0.0, wp.y, 0.0, 1.0)).z;
        float relFront = centerDepth - (-mvPos.z);
        vDepthFront = clamp((relFront + 0.14) / 0.34, 0.0, 1.0);
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      precision highp float;
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      varying float vDepthFront;

      float revStep(float hi, float lo, float x) { return 1.0 - smoothstep(lo, hi, x); }

      void main() {
        vec3 N = normalize(vNormalView);
        vec3 V = normalize(vViewDir);
        float ndv = clamp(dot(N, V), 0.0, 1.0);

        // Air bubble inside crimson-coral ice:
        // 1) Crisp dark ruby-espresso TIR contour ring around the rim
        float darkRing = revStep(0.68, 0.36, ndv) * smoothstep(0.05, 0.30, ndv);
        // 2) Subtle bright coral-peach inner caustic on lower hemisphere
        float innerCaustic = revStep(0.2, -0.75, N.y) * smoothstep(0.22, 0.72, ndv);
        // 3) Tiny razor-sharp white studio pinpoint catchlight on upper curve
        float spec = pow(max(dot(N, normalize(vec3(-0.46, 0.62, 0.63))), 0.0), 72.0);
        float spec2 = pow(max(dot(N, normalize(vec3(0.52, 0.44, 0.73))), 0.0), 90.0);

        // Rich dark crimson-maroon TIR ring + glowing apricot-peach caustic + crisp white sparkle!
        vec3 ringCol = vec3(0.24, 0.02, 0.035);
        vec3 causticCol = vec3(1.55, 0.88, 0.68);
        vec3 specCol = vec3(2.2, 2.05, 1.95);

        float ringW = darkRing * (0.58 + 0.36 * vDepthFront);
        float causW = innerCaustic * 0.32;
        float specW = (spec * 1.15 + spec2 * 0.65) * (0.55 + 0.45 * vDepthFront);

        float alpha = clamp(ringW + causW + specW, 0.0, 0.94);
        if (alpha < 0.01) discard;

        vec3 col = (ringCol * ringW + causticCol * causW + specCol * specW) / max(0.001, ringW + causW + specW);
        gl_FragColor = vec4(col, alpha);
      }
    `}),o=new G0(n,s,760);o.frustumCulled=!1;const a=[],r={melt:si,heatSpots:[]};let l=0,c=0;for(;l<760&&c<760*14;){c++;const h=Fe.yBottom+.06+t()*(Fe.yTop-Fe.yBottom-.12),f=(t()*2-1)*(Fe.halfWidthBottom-.035),u=t(),d=-.06+Math.pow(u,.68)*.245;if(zi(f,h,d,r)<.022)continue;const x=t(),p=.0028+Math.pow(x,3.6)*.0155,m=1+t()*.32,S=(t()-.5)*.45;a.push({pos:new G(f,h,d),radius:p,stretchY:m,cosR:Math.cos(S),sinR:Math.sin(S)}),l++}return{mesh:o,data:a,dispose(){o.dispose(),n.dispose(),s.dispose()}}}function j_(i,e=!1,t=ea){const n=e?84:112,s=e?56:96,o=(n+1)*(s+1),a=new Float32Array(o*3),r=new Float32Array(o*3),l=new Float32Array(o),c=new Float32Array(o*2),h=[];for(let I=0;I<=s;I++){const X=I/s;for(let te=0;te<=n;te++){const ce=te/n,ie=I*(n+1)+te;c[ie*2]=ce,c[ie*2+1]=X}}for(let I=0;I<s;I++)for(let X=0;X<n;X++){const te=I*(n+1)+X,ce=te+1,ie=te+(n+1),re=ie+1;h.push(te,ce,re),h.push(te,re,ie)}const f=new vn,u=new mn(a,3),d=new mn(r,3),g=new mn(l,1);u.setUsage(qi),d.setUsage(qi),g.setUsage(qi),f.setAttribute("position",u),f.setAttribute("normal",d),f.setAttribute("aHang",g),f.setAttribute("uv",new mn(c,2)),f.setIndex(h);const{material:x,uniforms:p}=J_(t);function m(I){const X=da(I);p.uOpacity.value=X.opacity,p.uIsDual.value=X.isDual?1:0,p.uSigmaA.value.set(...X.sigmaA),p.uCoreA.value.set(...X.coreA),p.uMidA.value.set(...X.midA),p.uDeepA.value.set(...X.deepA),p.uCreamAlbA.value.set(...X.creamAlbedoA),p.uCreamSssA.value.set(...X.creamSssA),p.uCreamDeepA.value.set(...X.creamDeepA),p.uSigmaB.value.set(...X.sigmaB),p.uCoreB.value.set(...X.coreB),p.uMidB.value.set(...X.midB),p.uDeepB.value.set(...X.deepB),p.uCreamAlbB.value.set(...X.creamAlbedoB),p.uCreamSssB.value.set(...X.creamSssB),p.uCreamDeepB.value.set(...X.creamDeepB),p.uStainCol.value.set(...X.stainColor)}const S=new Qt(f,x);S.name="popsicle-ice",S.frustumCulled=!1;const y=t0(0,ui),_=new Qt(f,y);_.name="popsicle-ice-back-z",_.frustumCulled=!1;const A=t0(1,Wn),E=Q_(i);E.mesh.frustumCulled=!1;const v={x:0,y:0,z:0,hang:0},T=new Float32Array(s+1);for(let I=0;I<=s;I++)T[I]=vh(I/s);const U=256,C=new Uint16Array(U+1);{let I=0;for(let X=0;X<=U;X++){const te=X/U;for(;I+1<s&&T[I+1]<=te;)I++;C[X]=I}}const D=new Float32Array(n+1),O=new Float32Array(n+1);for(let I=0;I<=n;I++){const X=I===n?0:I/n*Math.PI*2;D[I]=Math.sin(X),O[I]=Math.cos(X)}let Y=-999,R=-999,B=-999,$=-999,K=-999,he=-999,ee=-999,ue=-999,ae=-999,le=-999,Ee=0;function N(I,X,te=!1){p.uTime.value=I.time,p.uMelt.value=I.melt,p.uSeedOffset.value=I.seedOffset;const{slideY:ce,iceGone:ie}=ws(I.melt);if(p.uSlideY.value=ce,ie){S.visible=!1,_.visible=!1,E.mesh.visible=!1;return}S.visible=!0,_.visible=!0;const re=I.pendantPull?I.pendantPull[0]:0,Me=I.pendantPull?I.pendantPull[1]:0,se=I.pendantPull?I.pendantPull[2]:0,fe=I.pendantPull?I.pendantPull[3]:0,de=I.bottomPool??gh;if(te||I.seedOffset!==B||Math.abs(I.melt-Y)>25e-5||Math.abs(de-$)>.005||Math.abs(re-K)>.004||Math.abs(Me-he)>.004||Math.abs(se-ee)>.004||Math.abs(fe-ue)>.004||Math.abs(I.time-R)>.028||I.pointerHeat>.015){Y=I.melt,R=I.time,B=I.seedOffset,$=de,K=re,he=Me,ee=se,ue=fe;const ze=n+1,De=yf(I);for(let it=0;it<=s;it++){const be=wf(T[it],De),Ce=it*ze;for(let ke=0;ke<n;ke++){Tf(D[ke],O[ke],De,be,I,v);const $e=Ce+ke,pe=$e*3;a[pe]=v.x,a[pe+1]=v.y,a[pe+2]=v.z,l[$e]=v.hang??0}const H=Ce*3,nt=(Ce+n)*3;a[nt]=a[H],a[nt+1]=a[H+1],a[nt+2]=a[H+2],l[Ce+n]=l[Ce]}for(let it=0;it<=s;it++){const be=it*ze;if(it===0)for(let nt=0;nt<n;nt++){const ke=(be+nt)*3,$e=nt===0?n-1:nt-1,pe=nt+1,Ke=(be+$e)*3,qe=(be+pe)*3,at=a[qe]-a[Ke],L=a[qe+1]-a[Ke+1],w=Math.abs(at)>1e-4?Q(L/at,-1.65,1.65):0,ne=1/Math.hypot(w,1);r[ke]=w*ne,r[ke+1]=-ne,r[ke+2]=0}else if(it===s)for(let nt=0;nt<n;nt++){const ke=(be+nt)*3;r[ke]=0,r[ke+1]=1,r[ke+2]=0}else{const nt=(it-1)*ze,ke=(it+1)*ze;for(let $e=0;$e<n;$e++){const pe=(be+$e)*3,Ke=$e===0?n-1:$e-1,qe=$e+1,at=(be+Ke)*3,L=(be+qe)*3,w=(nt+$e)*3,ne=(ke+$e)*3,Pe=a[L]-a[at],_e=a[L+1]-a[at+1],Ve=a[L+2]-a[at+2],je=a[ne]-a[w],Se=a[ne+1]-a[w+1],ge=a[ne+2]-a[w+2];let Xe=_e*ge-Ve*Se,J=Ve*je-Pe*ge,Ae=Pe*Se-_e*je;const xe=Math.hypot(Xe,J,Ae);if(xe>1e-7){const He=1/xe;Xe*=He,J*=He,Ae*=He}else Xe=0,J=0,Ae=1;r[pe]=Xe,r[pe+1]=J,r[pe+2]=Ae}}const Ce=be*3,H=(be+n)*3;r[H]=r[Ce],r[H+1]=r[Ce+1],r[H+2]=r[Ce+2]}u.needsUpdate=!0,d.needsUpdate=!0,g.needsUpdate=!0,(te||ae<-100)&&f.computeBoundingSphere()}if(te||X!==le||Math.abs(I.melt-ae)>.0018||I.pointerHeat>.02){ae=I.melt,le=X;const ze=Math.floor(E.data.length*Q(X,0,1)),De=E.mesh.instanceMatrix.array;let it=0;for(let be=0;be<ze;be++){const Ce=E.data[be],H=Ce.pos.y+ce,nt=zi(Ce.pos.x,H,Ce.pos.z,I),ke=me(.01,.045,nt);if(ke<=.001)continue;const $e=Ce.radius*ke,pe=$e*Ce.stretchY,Ke=it*16;De[Ke]=Ce.cosR*$e,De[Ke+1]=Ce.sinR*$e,De[Ke+2]=0,De[Ke+3]=0,De[Ke+4]=-Ce.sinR*pe,De[Ke+5]=Ce.cosR*pe,De[Ke+6]=0,De[Ke+7]=0,De[Ke+8]=0,De[Ke+9]=0,De[Ke+10]=$e,De[Ke+11]=0,De[Ke+12]=Ce.pos.x,De[Ke+13]=H,De[Ke+14]=Ce.pos.z,De[Ke+15]=1,it++}Ee=it,E.mesh.count=it,E.mesh.instanceMatrix.needsUpdate=!0}E.mesh.visible=Ee>0&&p.uOpacity.value<.96}function j(I,X,te,ce){const ie=(I%1+1)%1,re=Q(X,0,1),Me=ie*n,se=Math.floor(Me),fe=Math.min(n,se+1),de=Me-se;let we=C[re*U|0];for(;we+1<s&&T[we+1]<=re;)we++;for(;we>0&&T[we]>re;)we--;const Re=we+1,ze=Math.max(1e-5,T[Re]-T[we]),De=Q((re-T[we])/ze,0,1),it=n+1,be=(we*it+se)*3,Ce=(we*it+fe)*3,H=(Re*it+se)*3,nt=(Re*it+fe)*3,ke=(1-de)*(1-De),$e=de*(1-De),pe=(1-de)*De,Ke=de*De;te.set(a[be]*ke+a[Ce]*$e+a[H]*pe+a[nt]*Ke,a[be+1]*ke+a[Ce+1]*$e+a[H+1]*pe+a[nt+1]*Ke,a[be+2]*ke+a[Ce+2]*$e+a[H+2]*pe+a[nt+2]*Ke),ce.set(r[be]*ke+r[Ce]*$e+r[H]*pe+r[nt]*Ke,r[be+1]*ke+r[Ce+1]*$e+r[H+1]*pe+r[nt+1]*Ke,r[be+2]*ke+r[Ce+2]*$e+r[H+2]*pe+r[nt+2]*Ke).normalize()}function W(){f.dispose(),x.dispose(),y.dispose(),A.dispose(),E.dispose()}return{iceMesh:S,backZMesh:_,bubblesMesh:E.mesh,solidWorldZMat:A,uniforms:p,setRecipe:m,update:N,sampleLiveSurface:j,dispose:W}}const Gt=64,Sn=64,Xo=Gt-1,Pn=128,pi=128,Bc=Pn-1;function eM(i){const e=Gt*Sn,t=new Float32Array(e),n=new Float32Array(e),s=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e),r=new Float32Array(e),l=new Float32Array(Gt),c=new Uint8Array(e*4),h=new Al(c,Gt,Sn,xi,Xn);h.wrapS=yn,h.wrapT=wi,h.minFilter=Mn,h.magFilter=Mn,h.generateMipmaps=!1;const f=Pn*pi,u=new Float32Array(f),d=new Float32Array(f),g=new Float32Array(f),x=new Float32Array(f),p=new Float32Array(f),m=new Uint8Array(f),S=new Al(m,Pn,pi,Xl,Xn);S.wrapS=yn,S.wrapT=wi,S.minFilter=Mn,S.magFilter=Mn,S.generateMipmaps=!1,S.unpackAlignment=1;const y=new Float32Array(Gt),_=new Float32Array(Gt),A=new Float32Array(Gt);for(let N=0;N<Gt;N++){const j=N/Gt*Math.PI*2;y[N]=j,_[N]=Math.sin(j),A[N]=Math.cos(j)}const E=i*19.7;for(let N=0;N<Sn;N++){const j=N/(Sn-1);for(let W=0;W<Gt;W++){const I=_[W],X=A[W],te=$i(I*3.4+E,j*4.2,X*3.4,3),ce=$i(I*9.5+E*1.6,j*11.5,X*9.5,2);a[N*Gt+W]=te*.68+ce*.32}}for(let N=0;N<pi;N++){const j=N/(pi-1),W=vh(j),I=Math.max(.05,Mf(W)),X=me(.8,.99,W),te=me(.12,.012,W),ce=me(.06,.14,W)*me(.93,.8,W);for(let ie=0;ie<Pn;ie++){const re=N*Pn+ie,Me=ie/Pn*Math.PI*2,se=Math.sin(Me),fe=Math.cos(Me),de=Math.abs(se),we=Math.abs(fe),Re=me(.24,.58,we),ze=$i(se*4.5+E*1.3,W*5.4,fe*4.5,3),De=$i(se*14.5+E*2.1,W*16.5,fe*14.5,2),it=Q(ze*.58+De*.42,0,1);g[re]=it;const be=me(.56,.94,de),Ce=Math.max(be,X,te*(.62+.38*de)),H=Math.sign(se)*Math.pow(de,2/3.15)*I,nt=(ze-.5)*.034,ke=Math.abs(H+nt),$e=Math.abs(ke-Fe.fluteX),pe=Math.exp(-Math.pow($e/.035,2))*ce*Re,Ke=Math.exp(-Math.pow(Math.abs(H+nt)/.118,3)),qe=me(.195,.255,ke),at=Q(Math.max(Ke,qe)*(1-pe*.96),0,1)*Re,L=Q(Math.max(Ce,at*.88)*(1-pe*.92),0,1);x[re]=L,p[re]=Q(.86-L*.64+pe*.24-(1-it)*.28,0,1)}}for(let N=0;N<Sn;N++)for(let j=0;j<Gt;j++){const W=(j-1+Gt)%Gt,I=(j+1)%Gt;r[N*Gt+j]=a[N*Gt+I]-a[N*Gt+W]}let v=0,T=.92;function U(){let N=0;for(let j=0;j<f;j++){const W=Q(u[j],0,1);m[j]=Math.round(W*255),N+=W}T=N/f,S.needsUpdate=!0}function C(N,j,W,I,X){const te=j-1,ce=(I%1+1)%1,ie=Q(X,0,1),re=ce*j,Me=ie*(W-1),se=Math.floor(re),fe=se&te,de=fe+1&te,we=Math.min(W-1,Math.floor(Me)),Re=Math.min(W-1,we+1),ze=re-se,De=Me-we,it=we*j,be=Re*j,Ce=N[it+fe]*(1-ze)+N[it+de]*ze,H=N[be+fe]*(1-ze)+N[be+de]*ze;return Ce*(1-De)+H*De}function D(N,j){return C(u,Pn,pi,N,j)}function O(){for(let N=0;N<Sn;N++){const j=Math.min(pi-1,N*2);for(let W=0;W<Gt;W++){const I=N*Gt+W,X=j*Pn+(W*2&Bc),te=a[I],ce=Q(1-u[X],0,1),ie=.014+.02*(1-te);t[I]=ie+ce*.11,o[I]=Q(ie*.8+ce*.42,0,.55)}}}function Y(N){if(N>=Hn)u.fill(0);else{const W=.22+Q((N-si)/(Hn-si),0,1)*.98;for(let I=0;I<f;I++){const X=(p[I]-W)/.44+.56;u[I]=Q(X,0,1)}}if(U(),v=N<=Hn*.72?0:Q(me(Hn*.72,.58,N),0,1),N>.12){const j=Q((N-.12)/.45,0,1),W=me(.11,.25,N);for(let I=0;I<Sn;I++){const X=I/(Sn-1),te=me(.18,.01,X)*j*.55;for(let ce=0;ce<Gt;ce++){const ie=I*Gt+ce,re=y[ce],Me=a[ie],se=.5+.5*Math.sin(re*2+i*1.7+Me*3.2),fe=.5+.5*Math.cos(re*3-i*2.3+X*2.5),de=Q(.86-j*(.58+.34*se+.16*fe),.04,.94),we=me(de-.07,de+.09,X),Re=(X-de)/.065,ze=Math.exp(-Re*Re)*(.45+.55*se),De=(we*(.34+.28*fe)+ze*.42+te)*W;t[ie]=Q(.03+De*(.82+.32*(1-Me)),0,1.35),o[ie]=Q(we*.78+ze*.85+te,0,.95)}}}else O();l.fill(0),ee()}function R(N,j,W,I){const X=(N%1+1)%1,te=Q(j,0,1),ce=I*.72,ie=I*1.12,re=Math.ceil(ce*Pn)+1,Me=Math.ceil(ie*pi)+1,se=Math.floor(X*Pn)%Pn,fe=Math.min(pi-1,Math.floor(te*(pi-1)));let de=0,we=0;for(let Re=-Me;Re<=Me;Re++){const ze=fe+Re;if(ze<0||ze>=pi)continue;const De=Re/(ie*pi),it=De*De;if(!(it>1.35))for(let be=-re;be<=re;be++){const Ce=be/(ce*Pn),H=Ce*Ce+it;if(H>1.35)continue;const nt=(se+be+Pn)%Pn,ke=ze*Pn+nt,$e=u[ke];if($e<=.002)continue;const pe=(g[ke]-.5)*.36,Ke=Math.sqrt(H)+pe*.42;if(Ke>=1)continue;const qe=1-Ke*Ke,at=qe*qe,L=Math.min($e,at*W);L>.001&&(u[ke]=$e-L,de+=L,we++)}}if(de>.004){const Re=Math.min(.34,de/Math.max(8,we*.35)*.32);K(X,te,Re,2)}return we>0?de/Math.max(10,Math.sqrt(we)*3.2):0}function B(N,j,W,I,X=.92,te=.068){let ce=W-N;ce>.5&&(ce-=1),ce<-.5&&(ce+=1);const ie=I-j,re=Math.hypot(ce*1.4,ie),Me=Q(Math.ceil(re/.018),1,10),se=[];let fe=!1;for(let de=1;de<=Me;de++){const we=de/Me,Re=(N+ce*we+1)%1,ze=Q(j+ie*we,.01,.99),De=R(Re,ze,X,te);De>.008&&(fe=!0,se.push({u:Re,v:ze,melted:De}))}return fe&&(U(),ee()),se}function $(N,j){return C(t,Gt,Sn,N,j)}function K(N,j,W,I=2){const X=(N%1+1)%1,te=Q(j,0,1),ce=Math.floor(X*Gt)%Gt,ie=Math.min(Sn-1,Math.floor(te*(Sn-1))),re=I*I+.5;for(let Me=-I;Me<=I;Me++){const se=ie+Me;if(!(se<0||se>=Sn))for(let fe=-I;fe<=I;fe++){const de=fe*fe+Me*Me;if(de>re)continue;const we=Math.exp(-de/(I*.9+.5)),Re=(ce+fe+Gt)%Gt,ze=se*Gt+Re;t[ze]=Math.min(1.4,t[ze]+W*we),o[ze]=Math.min(1,o[ze]+W*we*1.4)}}}function he(N,j){for(let W=0;W<Sn;W++){const I=W>0?W-1:0,X=W<Sn-1?W+1:Sn-1,te=W*Gt,ce=I*Gt,ie=X*Gt;for(let re=0;re<Gt;re++){const Me=re-1&Xo,se=re+1&Xo,fe=N[te+re],de=N[ie+re],we=N[ce+re],Re=N[te+Me],ze=N[te+se];j[te+re]=fe*.4+(de+we+Re+ze)*.15}}}function ee(){he(t,s);for(let N=0;N<Sn;N++){const j=N>0?N-1:0,W=N<Sn-1?N+1:Sn-1,I=N*Gt,X=j*Gt,te=W*Gt;for(let ce=0;ce<Gt;ce++){const ie=ce-1&Xo,re=ce+1&Xo,Me=I+ce,se=s[Me],fe=s[te+ie],de=s[te+ce],we=s[te+re],Re=s[I+ie],ze=s[I+re],De=s[X+ie],it=s[X+ce],be=s[X+re],Ce=(we+2*ze+be-(fe+2*Re+De))*.125,H=(fe+2*de+we-(De+2*it+be))*.125,nt=Me*4;c[nt]=Q(Math.round(se*255),0,255),c[nt+1]=Q(Math.round((.5+Q(Ce*3.4,-.5,.5))*255),0,255),c[nt+2]=Q(Math.round((.5+Q(H*3.4,-.5,.5))*255),0,255),c[nt+3]=Q(Math.round(o[Me]*255),0,255)}}h.needsUpdate=!0}function ue(){t.fill(0),o.fill(0),l.fill(0),v=0,Y(si)}function ae(){ue()}function le(N,j,W){if(l.fill(0),j<=0)return;const{yTop:I,yBot:X,iceGone:te}=ws(N.melt);if(te){v=1;return}const ce=(1+N.melt*2.4)*W,ie=Math.min(.033,j),re=Fe.halfWidthBottom*(1-Q(N.melt,0,1)*.45),Me=N.pointerHeat>.01,se=N.heatSpots.length>0,fe=N.time*.42;for(let Ce=0;Ce<Sn;Ce++){const H=Ce/(Sn-1),nt=X+(I-X)*H,ke=me(.42,.95,H),$e=Ce*Gt;for(let pe=0;pe<Gt;pe++){const Ke=$e+pe,qe=A[pe]>-.15;let at=.0045;if(ke>0){const ne=y[pe],Pe=.5+.5*Math.sin(fe+ne*2+a[Ke]*4.8),_e=.5+.5*Math.cos(fe*.68-ne*3+H*3.6),Ve=Math.pow(Pe*.62+_e*.38,1.55);at+=ke*(.016+.036*Ve)}let L=at*ce*(.68+.64*(1-a[Ke]));if(qe&&(Me||se)){const ne=_[pe]*re;if(Me){const Pe=ne-N.pointerX,_e=nt-N.pointerY,Ve=Pe*Pe+_e*_e;if(Ve<.28){const je=Math.exp(-Ve/.065)*N.pointerHeat;L+=je*.42*W}}if(se){const Pe=ur(ne,nt,N);Pe>.02&&(L+=Pe*.042*W)}}const w=Math.min(1.48,t[Ke]+L*ie);t[Ke]=w,n[Ke]=w}}const de=.21,we=3.35*(.85+N.melt*.8),Re=.32,ze=.68;for(let Ce=0;Ce<Sn;Ce++){const H=Ce/(Sn-1),nt=.45+.55*me(1,.76,H),ke=Ce*Gt,$e=(Ce-1)*Gt;for(let pe=0;pe<Gt;pe++){const Ke=ke+pe,qe=t[Ke];if(qe<=.002)continue;const at=pe-1&Xo,L=pe+1&Xo,w=o[Ke],ne=de*(.72+.52*a[Ke])*(1-w*.45),Pe=qe-ne;if(Pe>0){const Se=Math.pow(Pe,2.3)*(.52+.98*(1-a[Ke]))*(1+w*.9);let ge=we*nt*Se*ie;if(ge=Math.min(ge,qe*.44),n[Ke]-=ge,Ce>0){const Xe=$e+at,J=$e+pe,Ae=$e+L,xe=(o[Ae]-o[Xe])*.35,He=-r[Ke]*ze,et=Q(xe+He,-.34,.34),tt=Math.max(.06,.14+et*.42),gt=Math.max(.06,.14-et*.42),Tt=1-gt-tt;n[Xe]+=ge*gt,n[J]+=ge*Tt,n[Ae]+=ge*tt}else l[pe]+=ge}const _e=t[ke+at]+t[ke+L]-2*qe,Ve=me(.06,.32,qe),je=Q(Re*Ve*_e*ie,-qe*.18,.18);n[Ke]+=je}}const De=Math.exp(-ie*.045);for(let Ce=0;Ce<e;Ce++){const H=Q(n[Ce],0,1.45);t[Ce]=H,o[Ce]=Math.max(o[Ce]*De,me(.1,.42,H))}if(T>.001){d.set(u);const Ce=(.036+me(.035,Hn,N.melt)*.48)*W*j,H=me(Hn-.045,Hn-.005,N.melt)*1.35*j;let nt=0;for(let ke=0;ke<pi;ke++){const $e=ke>0?ke-1:0,pe=ke<pi-1?ke+1:pi-1,Ke=ke*Pn,qe=$e*Pn,at=pe*Pn,L=Math.min(Sn-1,ke>>1)*Gt;for(let w=0;w<Pn;w++){const ne=Ke+w,Pe=d[ne];if(Pe<=0)continue;const _e=w-1&Bc,Ve=w+1&Bc,Se=((d[Ke+_e]<.35?1:0)+(d[Ke+Ve]<.35?1:0)+(d[qe+w]<.35?1:0)+(d[at+w]<.35?1:0))*.45,ge=.1+2.35*x[ne]+Se*1.35,Xe=t[L+(w>>1)],J=me(.14,.38,Xe)*.48*j,Ae=1.24-.48*g[ne],xe=Pe-(Ce*ge*Ae+J+H);if(xe>.002){const He=xe<1?xe:1;u[ne]=He,m[ne]=Math.round(He*255),nt+=He}else u[ne]=0,m[ne]=0}}T=nt/f,S.needsUpdate=!0}let it=0;for(let Ce=0;Ce<Gt;Ce++)it+=l[Ce];const be=me(.22,.02,T);v=Q(v+(it*.018+j*.0025*ce)*be,0,1),ee()}function Ee(){h.dispose(),S.dispose()}return ue(),{texture:h,rimeTexture:S,bottomFlux:l,get stickWetness(){return v},get avgRime(){return T},sampleThickness:$,sampleRime:D,meltFrostSegment:B,syncRimeToMelt:Y,deposit:K,reset:ae,update:le,dispose:Ee}}const So=`
  float sq(float x) { return x * x; }
  float revStep(float hi, float lo, float x) { return 1.0 - smoothstep(lo, hi, x); }
  vec3 safeNorm(vec3 v) { return v * inversesqrt(max(dot(v, v), 1e-8)); }
`,Ou=80,Pi={sag:.54,stretch:1.51,edgeBlur:1.2,shadow:.44,shadowBlur:1.05,rimDark:.48,size:1,bottomPool:gh,dripRate:.76,bottomDrops:10},zu=520,Vu=1200,Df=180,Yo=zu+Vu+Df,An=96,is=96;function tM(i){return new bn({transparent:!0,blending:d0,blendEquation:ks,blendSrc:ka,blendDst:ka,blendEquationAlpha:ks,blendSrcAlpha:ka,blendDstAlpha:ka,depthTest:!0,depthWrite:!1,side:Wn,uniforms:{uResolution:i.uResolution,uDropSag:i.uDropSag,uDropStretch:i.uDropStretch,uDropSize:i.uDropSize},vertexShader:`
      // aCenter = xyz world position on live ice surface
      // aNormal = xyz outward ice surface normal
      // aParams = (worldRadius, aspectY, plumpness, juiceTint)
      // aMotion = (tiltAngleRad, wobbleAmt, gravitySag)
      attribute vec3 aCenter;
      attribute vec3 aNormal;
      attribute vec4 aParams;
      attribute vec3 aMotion;

      uniform vec2 uResolution;
      uniform float uDropSag;
      uniform float uDropStretch;
      uniform float uDropSize;

      varying vec2 vLocal;
      varying float vRadiusPx;
      varying float vPlumpness;
      varying float vJuiceTint;
      varying float vVisibility;
      varying float vSag;

      void main() {
        float r = aParams.x * uDropSize;
        float baseAspectY = aParams.y;
        float plumpness = aParams.z;
        float juiceTint = aParams.w;
        float tilt = aMotion.x;
        float wobble = aMotion.y;
        float rawSag = aMotion.z;

        vLocal = position.xy * 2.0; // [-1, 1]
        vPlumpness = plumpness;
        vJuiceTint = juiceTint;
        vSag = clamp(rawSag * uDropSag, 0.0, 1.65);

        if (r < 0.0004) {
          vVisibility = 0.0;
          vRadiusPx = 0.0;
          gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          return;
        }

        vec3 V = normalize(cameraPosition - aCenter);
        float ndv = dot(normalize(aNormal), V);

        vVisibility = smoothstep(-0.22, 0.06, ndv);
        if (vVisibility <= 0.001) {
          vRadiusPx = 0.0;
          gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          return;
        }

        // Grazing silhouette drops clear the curved ice shoulder smoothly without hard vertical depth slicing
        float rimBias = mix(r * 3.4, r * 0.68, smoothstep(-0.08, 0.48, ndv));
        vec3 worldCenter = aCenter + aNormal * (r * 0.20) + V * rimBias;
        vec4 mvCenter = viewMatrix * vec4(worldCenter, 1.0);

        float projScaleY = projectionMatrix[1][1];
        vRadiusPx = max(1.4, (r * projScaleY * (0.5 * uResolution.y)) / max(0.25, -mvCenter.z));

        // Gravity-heavy teardrop vertical elongation scales smoothly with uDropStretch & per-drop sag weight!
        float stretchWeight = 0.28 + 0.72 * clamp(rawSag, 0.0, 1.25);
        float aspectY = max(0.92, baseAspectY * (1.0 + (uDropStretch - 1.0) * stretchWeight));

        // Generous quad padding guarantees bottom-heavy teardrop bellies NEVER clip at quad bounds
        float rx = r * 1.64 * (1.0 - wobble * 0.14);
        float ry = r * 1.60 * aspectY * (1.0 + wobble * 0.14);

        vec2 localOff = vec2(position.x * 2.0 * rx, position.y * 2.0 * ry);
        // Align elongated sliding droplet & rivulet trail along its actual meandering flow direction!
        float ct = cos(tilt);
        float st = sin(tilt);
        vec2 rotOff = vec2(localOff.x * ct - localOff.y * st, localOff.x * st + localOff.y * ct);
        rotOff.y -= r * (aspectY - 1.0) * 0.24;

        mvCenter.xy += rotOff;
        gl_Position = projectionMatrix * mvCenter;
      }
    `,fragmentShader:`
      precision highp float;

      varying vec2 vLocal;
      varying float vRadiusPx;
      varying float vPlumpness;
      varying float vJuiceTint;
      varying float vVisibility;
      varying float vSag;

      void main() {
        vec2 p = vLocal;
        float s = vSag;

        // C-infinity boundary-preserving Mobius gravity warp on [-1, 1]:
        // Shifts the dome peak & center of mass LOWER into a heavy hanging belly while lengthening the upper taper!
        float shift = clamp(0.28 * s, 0.0, 0.44);
        float py = (p.y + shift) / (1.0 + shift * p.y);

        // Teardrop width profile: narrower clinging upper shoulder/tail, fuller heavier lower belly
        float topT = clamp(py, 0.0, 1.0);
        float botT = clamp(-py, 0.0, 1.0);
        float taperX = 1.0 + s * (0.48 * topT + 0.28 * topT * topT) - s * 0.15 * botT * (1.0 - 0.35 * botT);

        // 1.12 horizontal pad scale guarantees d2 >= 1 before |vLocal.x| = 1 even at max sag
        vec2 q = vec2(p.x * 1.12 * taperX, py);
        float d2 = dot(q, q);
        if (d2 >= 1.0) discard;

        // C1-smooth cubic metaball kernel -> continuous liquid bridges & smooth gravity-weighted domes!
        float m = 1.0 - d2;
        float phi = m * m * m * vVisibility;

        gl_FragColor = vec4(phi, phi * vRadiusPx, phi * vPlumpness, phi * vJuiceTint);
      }
    `})}function nM(i){return new bn({depthTest:!1,depthWrite:!1,uniforms:{uSceneTex:i.uSceneTex,uDropFieldTex:i.uDropFieldTex,uHasDropField:{value:0},uResolution:i.uResolution,uEdgeSoftness:i.uEdgeSoftness,uShadowStrength:i.uShadowStrength,uShadowBlur:i.uShadowBlur,uRimDark:i.uRimDark,uDropSigma:i.uDropSigma,uDropCreamColor:i.uDropCreamColor,uDropOpacity:i.uDropOpacity,uShadowTint:i.uShadowTint,uStainColor:i.uStainColor},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      precision highp float;

      uniform sampler2D uSceneTex;
      uniform sampler2D uDropFieldTex;
      uniform float uHasDropField;
      uniform vec2 uResolution;
      uniform float uEdgeSoftness;
      uniform float uShadowStrength;
      uniform float uShadowBlur;
      uniform float uRimDark;
      uniform vec3 uDropSigma;
      uniform vec3 uDropCreamColor;
      uniform float uDropOpacity;
      uniform vec3 uShadowTint;
      uniform vec3 uStainColor;

      varying vec2 vUv;

      const float ISO_THRESH = 0.34;
      ${So}

      float evalDomeHeightPx(vec4 f) {
        float phi = f.r;
        float e = max(0.0, phi - ISO_THRESH);
        if (e <= 0.0) return 0.0;
        float invPhi = 1.0 / max(phi, 0.0001);
        float rEff = f.g * invPhi;
        float plump = clamp(f.b * invPhi, 0.22, 1.0);
        // Tall convex dome for plump drops; delicate lower-profile wet meniscus for thin rivulet trails!
        float dome = sqrt(e / (e + 0.42));
        return rEff * dome * (0.26 + 0.62 * plump);
      }

      void main() {
        vec4 baseSample = texture2D(uSceneTex, vUv);
        vec3 baseScene = baseSample.rgb;
        float baseTag = baseSample.a;

        vec2 tx = 1.0 / uResolution;
        float pxScale = clamp(uResolution.y / 1000.0, 0.65, 2.4);

        // === CAPILLARY SURFACE-TENSION MENISCUS WHERE UNCOVERED BERRY/FRUIT MEETS MELTING ICE ===
        // postIceRT.a tags: 0.00 = studio air, 0.25 = open ice, 0.55 = contact-zone ice, 1.00 = uncovered solid.
        // Fast probe skips >94% of pixels; seam pixels use a symmetric C∞ Gaussian bell (4 * sFrac * iFrac)
        // with zero discontinuity across the 1px boundary and zero studio-air bleed!
        if (baseTag > 0.42) {
          bool isSolidPx = baseTag > 0.78;
          vec2 r1 = (2.0 * pxScale) * tx;
          vec2 r2 = (4.2 * pxScale) * tx;
          vec2 pR = (6.2 * pxScale) * tx;

          vec4 p0 = texture2D(uSceneTex, vUv + vec2( pR.x,   0.0));
          vec4 p1 = texture2D(uSceneTex, vUv + vec2(-pR.x,   0.0));
          vec4 p2 = texture2D(uSceneTex, vUv + vec2(  0.0,  pR.y));
          vec4 p3 = texture2D(uSceneTex, vUv + vec2(  0.0, -pR.y));

          vec4 c0 = texture2D(uSceneTex, vUv + vec2( r1.x,  r1.y));
          vec4 c1 = texture2D(uSceneTex, vUv + vec2(-r1.x,  r1.y));
          vec4 c2 = texture2D(uSceneTex, vUv + vec2( r1.x, -r1.y));
          vec4 c3 = texture2D(uSceneTex, vUv + vec2(-r1.x, -r1.y));

          float oppProbe = 0.0;
          if (isSolidPx) {
            oppProbe += ((p0.a > 0.40 && p0.a < 0.72) ? 1.0 : 0.0) + ((p1.a > 0.40 && p1.a < 0.72) ? 1.0 : 0.0)
                      + ((p2.a > 0.40 && p2.a < 0.72) ? 1.0 : 0.0) + ((p3.a > 0.40 && p3.a < 0.72) ? 1.0 : 0.0)
                      + ((c0.a > 0.40 && c0.a < 0.72) ? 1.0 : 0.0) + ((c1.a > 0.40 && c1.a < 0.72) ? 1.0 : 0.0)
                      + ((c2.a > 0.40 && c2.a < 0.72) ? 1.0 : 0.0) + ((c3.a > 0.40 && c3.a < 0.72) ? 1.0 : 0.0);
          } else {
            oppProbe += ((p0.a > 0.78) ? 1.0 : 0.0) + ((p1.a > 0.78) ? 1.0 : 0.0)
                      + ((p2.a > 0.78) ? 1.0 : 0.0) + ((p3.a > 0.78) ? 1.0 : 0.0)
                      + ((c0.a > 0.78) ? 1.0 : 0.0) + ((c1.a > 0.78) ? 1.0 : 0.0)
                      + ((c2.a > 0.78) ? 1.0 : 0.0) + ((c3.a > 0.78) ? 1.0 : 0.0);
          }

          if (oppProbe > 0.01) {
            vec4 m0 = texture2D(uSceneTex, vUv + vec2( r2.x,   0.0));
            vec4 m1 = texture2D(uSceneTex, vUv + vec2(-r2.x,   0.0));
            vec4 m2 = texture2D(uSceneTex, vUv + vec2(  0.0,  r2.y));
            vec4 m3 = texture2D(uSceneTex, vUv + vec2(  0.0, -r2.y));
            vec4 f0 = texture2D(uSceneTex, vUv + vec2( pR.x * 0.75,  pR.y * 0.75));
            vec4 f1 = texture2D(uSceneTex, vUv + vec2(-pR.x * 0.75,  pR.y * 0.75));
            vec4 f2 = texture2D(uSceneTex, vUv + vec2( pR.x * 0.75, -pR.y * 0.75));
            vec4 f3 = texture2D(uSceneTex, vUv + vec2(-pR.x * 0.75, -pR.y * 0.75));

            // Accumulate symmetric Gaussian blur + smooth solid/contact-ice fractions (strictly excluding studio air!)
            vec3 blurSum = baseScene * 1.15;
            float wSum = 1.15;
            float sSum = isSolidPx ? 1.15 : 0.0;
            float iSum = isSolidPx ? 0.0 : 1.15;

            if (c0.a > 0.15) { blurSum += c0.rgb * 1.00; wSum += 1.00; if (c0.a > 0.78) sSum += 1.00; else if (c0.a > 0.40) iSum += 1.00; }
            if (c1.a > 0.15) { blurSum += c1.rgb * 1.00; wSum += 1.00; if (c1.a > 0.78) sSum += 1.00; else if (c1.a > 0.40) iSum += 1.00; }
            if (c2.a > 0.15) { blurSum += c2.rgb * 1.00; wSum += 1.00; if (c2.a > 0.78) sSum += 1.00; else if (c2.a > 0.40) iSum += 1.00; }
            if (c3.a > 0.15) { blurSum += c3.rgb * 1.00; wSum += 1.00; if (c3.a > 0.78) sSum += 1.00; else if (c3.a > 0.40) iSum += 1.00; }

            if (m0.a > 0.15) { blurSum += m0.rgb * 0.78; wSum += 0.78; if (m0.a > 0.78) sSum += 0.78; else if (m0.a > 0.40) iSum += 0.78; }
            if (m1.a > 0.15) { blurSum += m1.rgb * 0.78; wSum += 0.78; if (m1.a > 0.78) sSum += 0.78; else if (m1.a > 0.40) iSum += 0.78; }
            if (m2.a > 0.15) { blurSum += m2.rgb * 0.78; wSum += 0.78; if (m2.a > 0.78) sSum += 0.78; else if (m2.a > 0.40) iSum += 0.78; }
            if (m3.a > 0.15) { blurSum += m3.rgb * 0.78; wSum += 0.78; if (m3.a > 0.78) sSum += 0.78; else if (m3.a > 0.40) iSum += 0.78; }

            if (p0.a > 0.15) { blurSum += p0.rgb * 0.48; wSum += 0.48; if (p0.a > 0.78) sSum += 0.48; else if (p0.a > 0.40) iSum += 0.48; }
            if (p1.a > 0.15) { blurSum += p1.rgb * 0.48; wSum += 0.48; if (p1.a > 0.78) sSum += 0.48; else if (p1.a > 0.40) iSum += 0.48; }
            if (p2.a > 0.15) { blurSum += p2.rgb * 0.48; wSum += 0.48; if (p2.a > 0.78) sSum += 0.48; else if (p2.a > 0.40) iSum += 0.48; }
            if (p3.a > 0.15) { blurSum += p3.rgb * 0.48; wSum += 0.48; if (p3.a > 0.78) sSum += 0.48; else if (p3.a > 0.40) iSum += 0.48; }

            if (f0.a > 0.15) { blurSum += f0.rgb * 0.42; wSum += 0.42; if (f0.a > 0.78) sSum += 0.42; else if (f0.a > 0.40) iSum += 0.42; }
            if (f1.a > 0.15) { blurSum += f1.rgb * 0.42; wSum += 0.42; if (f1.a > 0.78) sSum += 0.42; else if (f1.a > 0.40) iSum += 0.42; }
            if (f2.a > 0.15) { blurSum += f2.rgb * 0.42; wSum += 0.42; if (f2.a > 0.78) sSum += 0.42; else if (f2.a > 0.40) iSum += 0.42; }
            if (f3.a > 0.15) { blurSum += f3.rgb * 0.42; wSum += 0.42; if (f3.a > 0.78) sSum += 0.42; else if (f3.a > 0.40) iSum += 0.42; }

            vec3 seamBlur = blurSum / wSum;

            // Symmetric C∞ bell curve: peaks at 1.00 right on the exact boundary (sFrac = iFrac = 0.5),
            // identical on both sides of the 1px seam, and decays smoothly to 0.0 away from the waterline!
            float sFrac = sSum / wSum;
            float iFrac = iSum / wSum;
            float seamBell = clamp(4.0 * sFrac * iFrac, 0.0, 1.0);

            // 1. Continuous optical surface-tension blur dissolving the depth-buffer seam seamlessly
            baseScene = mix(baseScene, seamBlur, smoothstep(0.0, 0.92, seamBell) * 0.95);

            // 2. Soft concave capillary contact shadow where wet syrup pools in the berry-ice crease
            float shadowBell = pow(seamBell, 1.45);
            vec3 creaseTint = mix(vec3(0.36, 0.34, 0.34), uShadowTint, 0.78);
            baseScene = mix(baseScene, baseScene * creaseTint, shadowBell * 0.46);
          }
        }

        // Skip all drop-field fetches when Pass 6a had zero active splats (still keeps berry-ice seam blur above!)
        if (uHasDropField < 0.5) {
          gl_FragColor = vec4(baseScene, baseTag);
          return;
        }

        vec4 fC = texture2D(uDropFieldTex, vUv);
        float phi = fC.r;

        // Quick directional shadow probe slightly above & left of pixel (key light casts shadow down & right!)
        vec2 shDir = vec2(-0.22, 1.0);
        vec2 shProbeUv = vUv + shDir * (2.6 * uShadowBlur * pxScale) * tx;
        vec4 fShProbe = texture2D(uDropFieldTex, shProbeUv);

        // Ultra-fast early exit on ~90% of pixels with zero nearby droplet or cast shadow!
        if (phi <= 0.008 && fShProbe.r <= 0.025) {
          gl_FragColor = vec4(baseScene, baseTag);
          return;
        }

        // Exact popsicle/solid vs backdrop-air mask from postIceRT.a (works identically on Pure Coconut & dark berries!)
        float onIceMask = smoothstep(0.05, 0.20, baseTag);

        // Soft directional cast shadow + subtle meniscus contact occlusion around/beneath each drop
        vec3 shadowedBase = baseScene;
        if (uShadowStrength > 0.005 && onIceMask > 0.01) {
          float shR = fShProbe.r > 0.01 ? clamp(fShProbe.g / fShProbe.r, 2.0, 26.0) : 5.0;
          float shOffsetPx = (1.1 + shR * 0.16) * (0.65 + 0.55 * uShadowBlur) * pxScale;
          vec2 shCenterUv = vUv + shDir * shOffsetPx * tx;
          vec2 sp = (1.55 + 2.35 * uShadowBlur) * pxScale * tx;

          vec4 s0 = texture2D(uDropFieldTex, shCenterUv);
          vec4 s1 = texture2D(uDropFieldTex, shCenterUv + vec2(-sp.x,  sp.y));
          vec4 s2 = texture2D(uDropFieldTex, shCenterUv + vec2( sp.x,  sp.y));
          vec4 s3 = texture2D(uDropFieldTex, shCenterUv + vec2(-sp.x, -sp.y));
          vec4 s4 = texture2D(uDropFieldTex, shCenterUv + vec2( sp.x, -sp.y));
          vec4 shAvg = (s0 * 2.0 + s1 + s2 + s3 + s4) * (1.0 / 6.0);

          float shPhi = shAvg.r;
          float shInvPhi = 1.0 / max(shPhi, 0.0001);
          float shPlump = clamp(shAvg.b * shInvPhi, 0.25, 1.0);
          float shJuice = clamp(shAvg.a * shInvPhi, 0.0, 1.0);

          float castSh = smoothstep(0.05, ISO_THRESH + 0.16, shPhi);
          // Delicate omnidirectional contact halo hugging the outer wet meniscus ring
          float haloSpan = 0.09 + 0.08 * uShadowBlur;
          float haloSh = smoothstep(ISO_THRESH - haloSpan, ISO_THRESH + 0.02, phi) *
                         (1.0 - smoothstep(ISO_THRESH - 0.01, ISO_THRESH + 0.07, phi));
          float shAmt = clamp((castSh * 0.72 + haloSh * 0.42) * uShadowStrength * onIceMask * (0.42 + 0.58 * shPlump), 0.0, 0.76);
          vec3 shadowTint = mix(uShadowTint, uShadowTint * 0.76, shJuice);
          shadowedBase = mix(baseScene, baseScene * shadowTint, shAmt);
        }

        // Pure shadow pixel outside the feathered drop boundary -> skip expensive Sobel & refraction!
        float outerMargin = max(0.032, 0.095 * uEdgeSoftness + 0.024);
        if (phi <= ISO_THRESH - outerMargin) {
          gl_FragColor = vec4(shadowedBase, baseTag);
          return;
        }

        vec4 fTL = texture2D(uDropFieldTex, vUv + vec2(-tx.x,  tx.y));
        vec4 fT  = texture2D(uDropFieldTex, vUv + vec2(  0.0,  tx.y));
        vec4 fTR = texture2D(uDropFieldTex, vUv + vec2( tx.x,  tx.y));
        vec4 fL  = texture2D(uDropFieldTex, vUv + vec2(-tx.x,   0.0));
        vec4 fR  = texture2D(uDropFieldTex, vUv + vec2( tx.x,   0.0));
        vec4 fBL = texture2D(uDropFieldTex, vUv + vec2(-tx.x, -tx.y));
        vec4 fB  = texture2D(uDropFieldTex, vUv + vec2(  0.0, -tx.y));
        vec4 fBR = texture2D(uDropFieldTex, vUv + vec2( tx.x, -tx.y));

        float hTL = evalDomeHeightPx(fTL);
        float hT  = evalDomeHeightPx(fT);
        float hTR = evalDomeHeightPx(fTR);
        float hL  = evalDomeHeightPx(fL);
        float hR  = evalDomeHeightPx(fR);
        float hBL = evalDomeHeightPx(fBL);
        float hB  = evalDomeHeightPx(fB);
        float hBR = evalDomeHeightPx(fBR);

        float gradPhi = length(vec2(fR.r - fL.r, fT.r - fB.r)) * 0.5;

        float dhdx = ((hTR + 2.0 * hR + hBR) - (hTL + 2.0 * hL + hBL)) * 0.125;
        float dhdy = ((hTL + 2.0 * hT + hTR) - (hBL + 2.0 * hB + hBR)) * 0.125;

        vec2 slope = vec2(dhdx, dhdy);
        float slopeCap = mix(3.6, 2.35, clamp(uEdgeSoftness * 0.60, 0.0, 0.85));
        float slopeLen = length(slope);
        if (slopeLen > slopeCap) {
          slope *= slopeCap / slopeLen;
        }
        vec3 N = normalize(vec3(-slope.x * 1.15, -slope.y * 1.15, 1.0));
        vec3 V = vec3(0.0, 0.0, 1.0);
        float ndv = clamp(N.z, 0.0, 1.0);

        float invPhi = 1.0 / max(phi, 0.0001);
        float rEff = fC.g * invPhi;
        float plump = clamp(fC.b * invPhi, 0.22, 1.0);
        float juiceTint = clamp(fC.a * invPhi, 0.0, 1.0);

        // Refraction bends strongly in tall droplets and gently in flat glistening wet trails!
        float refrPx = clamp(rEff * (0.45 + 0.72 * plump), 2.0, 34.0);
        vec2 refrOffset = -N.xy * refrPx * tx * (0.72 + 0.55 * (1.0 - ndv));

        vec2 uvR = clamp(vUv + refrOffset * 0.94, vec2(0.002), vec2(0.998));
        vec2 uvG = clamp(vUv + refrOffset * 1.00, vec2(0.002), vec2(0.998));
        vec2 uvB = clamp(vUv + refrOffset * 1.07, vec2(0.002), vec2(0.998));

        vec3 refrCol;
        refrCol.r = texture2D(uSceneTex, uvR).r;
        refrCol.g = texture2D(uSceneTex, uvG).g;
        refrCol.b = texture2D(uSceneTex, uvB).b;

        // Subtle optical rim blur near the outer drop border so meniscus melts organically into the wet ice
        float edgeProx = 1.0 - smoothstep(ISO_THRESH, ISO_THRESH + 0.07 + 0.18 * uEdgeSoftness, phi);
        if (uEdgeSoftness > 0.02 && edgeProx > 0.02) {
          vec2 bStep = (0.65 + 1.35 * uEdgeSoftness) * pxScale * tx;
          vec3 refrBlur = (
            texture2D(uSceneTex, clamp(uvG + vec2(-bStep.x,  bStep.y), vec2(0.002), vec2(0.998))).rgb +
            texture2D(uSceneTex, clamp(uvG + vec2( bStep.x,  bStep.y), vec2(0.002), vec2(0.998))).rgb +
            texture2D(uSceneTex, clamp(uvG + vec2(-bStep.x, -bStep.y), vec2(0.002), vec2(0.998))).rgb +
            texture2D(uSceneTex, clamp(uvG + vec2( bStep.x, -bStep.y), vec2(0.002), vec2(0.998))).rgb
          ) * 0.25;
          refrCol = mix(refrCol, refrBlur, edgeProx * clamp(uEdgeSoftness * 0.56, 0.0, 0.72));
        }

        vec3 juiceTrans = exp(-uDropSigma * (0.14 + 0.30 * clamp(juiceTint * 1.4, 0.0, 1.0) * (0.35 + 0.45 * plump)));
        float poolSyrup = smoothstep(0.46, 0.84, juiceTint);
        float topJoin = smoothstep(-0.30, 0.65, N.y);
        vec3 syrupAbsorb = exp(-uDropSigma * (0.35 + 0.45 * (topJoin * 0.68 + (1.0 - ndv) * 0.32)));
        refrCol *= mix(juiceTrans, syrupAbsorb, poolSyrup);

        // Creamy coconut / milky-base surface droplets look glossy & softly milky rather than pure clear water!
        vec3 l1 = normalize(vec3(-0.48, 0.58, 0.66));
        vec3 l2 = normalize(vec3(0.54, 0.44, 0.71));
        if (uDropOpacity > 0.15) {
          float cWrap = 0.64 + 0.38 * clamp((dot(N, l1) + 0.4) / 1.4, 0.0, 1.0) + 0.22 * clamp((dot(N, l2) + 0.4) / 1.4, 0.0, 1.0);
          vec3 creamyDrop = uDropCreamColor * cWrap;
          refrCol = mix(refrCol, creamyDrop, clamp(uDropOpacity * (0.48 + 0.34 * plump), 0.0, 0.82));
        }

        // Softened optical glass contour: controlled by uRimDark & gently pulled inward from razor alpha edge
        float innerEdgeLift = 0.04 + 0.09 * clamp(uEdgeSoftness, 0.0, 1.2);
        float darkContour = revStep(0.76, 0.34, ndv) * smoothstep(innerEdgeLift, 0.32 + innerEdgeLift * 0.5, ndv);
        vec3 darkRimTint = mix(uShadowTint * 0.65, uStainColor * 0.45, clamp(juiceTint * 1.15, 0.0, 1.0));
        vec3 col = mix(refrCol, refrCol * darkRimTint, clamp(darkContour * (0.36 + 0.46 * plump) * uRimDark * (1.0 - uDropOpacity * 0.42), 0.0, 0.92));

        // Luminous bottom caustic crescent (warm translucent flavor glow on water drops, softer on cream drops)
        float bottomCaustic = revStep(0.14, -0.76, N.y) * smoothstep(0.14, 0.72, ndv);
        vec3 causticTint = mix(vec3(0.72, 0.66, 0.62), uStainColor * 0.88 + vec3(0.14), 0.45 + 0.45 * poolSyrup);
        col += causticTint * bottomCaustic * (0.28 + 0.52 * plump) * (1.0 - 0.35 * poolSyrup) * (1.0 - uDropOpacity * 0.55);

        // Glassy Fresnel studio sheen (makes thin wet trails glisten crisply when light grazes their edges!)
        float fresnel = 0.02 + 0.98 * pow(1.0 - ndv, 4.2);
        vec3 R = reflect(-V, N);
        float stripRefl = exp(-sq((abs(R.x) - 0.62) / 0.18)) * smoothstep(-0.85, 0.85, R.y);
        float topRefl = smoothstep(0.50, 0.92, R.y);
        vec3 envSpec = mix(vec3(1.22, 1.16, 1.12), uStainColor * 0.72 + vec3(0.52), poolSyrup * 0.65) * (0.30 + 1.45 * stripRefl + 0.80 * topRefl);
        col = mix(col, envSpec, clamp(fresnel * (0.50 + 0.16 * plump) * (1.0 - 0.28 * poolSyrup), 0.0, 0.70));

        // Razor-sharp studio pinpoint catchlights
        vec3 h1 = safeNorm(l1 + V);
        vec3 h2 = safeNorm(l2 + V);
        float spec1 = pow(max(dot(N, h1), 0.0), 200.0);
        float spec2 = pow(max(dot(N, h2), 0.0), 155.0);
        col += vec3(2.8, 2.68, 2.62) * (spec1 * 1.22 + spec2 * 0.78) * (0.55 + 0.45 * plump);

        // Feathered wet meniscus blend (smoothly responds to uEdgeSoftness on BOTH face & side silhouette drops!)
        float softFaceMul = mix(0.68, 1.0, onIceMask);
        float aaWidth = max(0.011, gradPhi * (1.15 + uEdgeSoftness * 2.25 * softFaceMul)) + uEdgeSoftness * 0.052 * softFaceMul;
        float mask = smoothstep(ISO_THRESH - aaWidth * 0.68, ISO_THRESH + aaWidth * 0.85, phi);

        vec3 outCol = mix(shadowedBase, col, mask);
        gl_FragColor = vec4(outCol, max(baseTag, mask));
      }
    `})}function kc(i,e,t,n=!0,s=!1){return new bn({transparent:!0,depthTest:!0,depthWrite:!n,side:di,uniforms:{uSceneTex:i.uSceneTex,uResolution:i.uResolution,uLensPower:{value:e},uJuiceTint:{value:t},uDropSigma:i.uDropSigma,uDropCreamColor:i.uDropCreamColor,uDropOpacity:i.uDropOpacity,uShadowTint:i.uShadowTint,uStainColor:i.uStainColor},vertexShader:`
      ${n?`attribute float aCollarFade;
      attribute float aFilletFade;`:""}
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vViewNormal;
      varying float vLocalY;
      varying float vCollarFade;
      varying float vFilletFade;

      void main() {
        #ifdef USE_INSTANCING
          mat4 instModel = modelMatrix * instanceMatrix;
        #else
          mat4 instModel = modelMatrix;
        #endif
        vec4 wp = instModel * vec4(position, 1.0);
        vLocalY = wp.y - instModel[3].y;
        vWorldPos = wp.xyz;
        vCollarFade = ${n?"aCollarFade":"1.0"};
        vFilletFade = ${n?"aFilletFade":"1.0"};
        vec3 invScale = vec3(
          1.0 / max(1e-5, length(instModel[0].xyz)),
          1.0 / max(1e-5, length(instModel[1].xyz)),
          1.0 / max(1e-5, length(instModel[2].xyz))
        );
        vec3 worldN = normalize(mat3(instModel) * (normal * invScale * invScale));
        vWorldNormal = worldN;
        vViewNormal = normalize(mat3(viewMatrix) * worldN);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;

      uniform sampler2D uSceneTex;
      uniform vec2 uResolution;
      uniform float uLensPower;
      uniform float uJuiceTint;
      uniform vec3 uDropSigma;
      uniform vec3 uDropCreamColor;
      uniform float uDropOpacity;
      uniform vec3 uShadowTint;
      uniform vec3 uStainColor;

      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vViewNormal;
      varying float vLocalY;
      varying float vCollarFade;
      varying float vFilletFade;

      ${So}

      void main() {
        if (vCollarFade < 0.004) discard;
        vec2 screenUv = gl_FragCoord.xy / uResolution;
        vec3 N = normalize(vWorldNormal);
        vec3 Nv = normalize(vViewNormal);
        vec3 V = normalize(cameraPosition - vWorldPos);

        float ndv = clamp(dot(N, V), 0.0, 1.0);

        // Calm lens refraction to 0 right at the underside join (vFilletFade -> 0) so the overlapping upper
        // wetting skirt matches uSceneTex invisibly (ZERO semicircle halo or horizontal seam on tiny drops!),
        // ramping smoothly to crisp jewel refraction across the hanging drop belly!
        vec2 refrVec = -Nv.xy * uLensPower * (0.62 + 0.72 * pow(1.0 - ndv, 0.8)) * vFilletFade;
        vec2 uvR = clamp(screenUv + refrVec * 0.94, vec2(0.002), vec2(0.998));
        vec2 uvG = clamp(screenUv + refrVec * 1.00, vec2(0.002), vec2(0.998));
        vec2 uvB = clamp(screenUv + refrVec * 1.07, vec2(0.002), vec2(0.998));

        vec3 refrCol;
        refrCol.r = texture2D(uSceneTex, uvR).r;
        refrCol.g = texture2D(uSceneTex, uvG).g;
        refrCol.b = texture2D(uSceneTex, uvB).b;

        float topJuice = smoothstep(-0.085, 0.006, vLocalY);
        float effTint = uJuiceTint * (0.38 + 0.30 * topJuice);
        vec3 flavorTrans = exp(-uDropSigma * (0.13 + 0.28 * effTint) * (0.24 + 0.76 * vFilletFade));
        refrCol *= flavorTrans;
        vec3 collarColor = mix(uStainColor, uDropCreamColor, uDropOpacity);
        refrCol = mix(refrCol, collarColor, (1.0 - vFilletFade) * (0.04 + 0.22 * uDropOpacity));

        vec3 camH = safeNorm(vec3(cameraPosition.x, 0.0, cameraPosition.z));
        vec3 camR = vec3(camH.z, 0.0, -camH.x);
        vec3 l1 = normalize(-0.50 * camR + vec3(0.0, 0.56, 0.0) + 0.66 * camH);
        vec3 l2 = normalize( 0.56 * camR + vec3(0.0, 0.42, 0.0) + 0.71 * camH);
        // Smoothly match creamy & opaque condensed-milk recipes with rich thick opaque cream drops!
        float creamMix = smoothstep(0.04, 0.86, uDropOpacity) * 0.98;
        if (creamMix > 0.005) {
          float cWrap = 0.52 + 0.42 * clamp((dot(N, l1) + 0.38) / 1.38, 0.0, 1.0) + 0.18 * clamp((dot(N, l2) + 0.40) / 1.40, 0.0, 1.0);
          vec3 creamyPendant = uDropCreamColor * cWrap;
          refrCol = mix(refrCol, creamyPendant, creamMix);
        }

        // Delicate refractive silhouette contour — fades cleanly to 0 at yEdge so ZERO dark arc prints on the ice!
        float darkContour = revStep(0.66, 0.28, ndv) * smoothstep(0.02, 0.22, ndv);
        vec3 darkRimTint = mix(uShadowTint * 0.64, uStainColor * 0.46, effTint);
        vec3 col = mix(refrCol, refrCol * darkRimTint, darkContour * (0.68 * vFilletFade) * (1.0 - uDropOpacity * 0.50));

        float bottomCaustic = revStep(0.16, -0.78, Nv.y) * smoothstep(0.12, 0.70, ndv) * vFilletFade;
        col += mix(vec3(0.78, 0.68, 0.64), uStainColor * 0.80 + vec3(0.20), 0.50) * bottomCaustic * 0.74 * (1.0 - uDropOpacity * 0.65);

        float fresnel = 0.02 + 0.98 * pow(1.0 - ndv, 4.4);
        vec3 R = reflect(-V, N);
        float rxStudio = dot(R, camR);
        float stripRefl = exp(-sq((abs(rxStudio) - 0.64) / 0.16)) * smoothstep(-0.85, 0.85, R.y);
        float topRefl = smoothstep(0.52, 0.92, R.y);
        vec3 envSpec = vec3(1.18, 1.12, 1.08) * (0.24 + ${s?"0.46":"1.45"} * stripRefl + ${s?"0.42":"0.82"} * topRefl);
        col = mix(col, envSpec, clamp(fresnel * (${s?"0.38":"0.60"} - 0.18 * uDropOpacity) * vFilletFade, 0.0, ${s?"0.42":"0.65"}));

        vec3 h1 = safeNorm(l1 + V);
        vec3 h2 = safeNorm(l2 + V);
        float spec1 = pow(max(dot(N, h1), 0.0), ${s?"280.0":"220.0"});
        float spec2 = pow(max(dot(N, h2), 0.0), ${s?"220.0":"170.0"});
        col += vec3(2.7, 2.6, 2.52) * (spec1 * ${s?"0.72":"1.10"} + spec2 * ${s?"0.48":"0.72"}) * vFilletFade;

        float alpha = smoothstep(0.0, 0.06, ndv) * vCollarFade;
        gl_FragColor = vec4(col, clamp(alpha * 0.99, 0.0, 1.0));
      }
    `})}function iM(i,e){const l=new Float32Array(18963),c=new Float32Array(6321*3),h=[],f=Fe.stickEdgeX+.0014,u=Fe.stickDepth*.5+.0016,d=Fe.stickTopY-Fe.stickWidth*.5,g=Fe.stickBottomY+Fe.stickWidth*.5,x=f;for(let A=0;A<=128;A++){let E,v=1,T=1,U=0,C=1,D=0;if(A<=20){const Y=Math.pow(A/20,1.15)*Math.PI*.5;U=Math.cos(Y),C=1,E=d+U*x,v=A===0?0:Math.sin(Y),D=me(.945,1,U),T=A===0?0:Math.sqrt(Math.max(.02,1-D*D))}else if(A<=112){const O=(A-20)/92;E=d-O*(d-g)}else{const O=A-112,R=Math.pow(Math.max(0,1-O/16),1.15)*Math.PI*.5;U=Math.cos(R),C=-1,E=g-U*x,v=A===128?0:Math.sin(R),D=me(.945,1,U),T=A===128?0:Math.sqrt(Math.max(.02,1-D*D))}for(let O=0;O<=48;O++){const Y=O/48,R=O===48?0:Y*Math.PI*2,B=Math.sin(R),$=Math.cos(R),K=B>=0?1:-1,he=$>=0?1:-1,ee=K*Math.pow(Math.abs(B),.34)*f*v,ue=he*Math.pow(Math.abs($),.38)*u*T;let ae,le,Ee;if(A===0)ae=0,le=1,Ee=0;else if(A===128)ae=0,le=-1,Ee=0;else{let j=K*Math.pow(Math.max(1e-4,Math.abs(B)),1.66)/f,W=he*Math.pow(Math.max(1e-4,Math.abs($)),1.62)/u;const I=Math.hypot(j,W)||1;if(j/=I,W/=I,U>.001){ae=j*(1-U*.55),le=C*(U*Math.abs(B)*.92+D*.88),Ee=W*(1-D*.6);const X=Math.hypot(ae,le,Ee)||1;ae/=X,le/=X,Ee/=X}else ae=j,le=0,Ee=W}const N=A*49+O;l[N*3]=ee,l[N*3+1]=E,l[N*3+2]=ue,c[N*3]=ae,c[N*3+1]=le,c[N*3+2]=Ee}}for(let A=0;A<128;A++)for(let E=0;E<48;E++){const v=A*49+E,T=v+1,U=v+49,C=U+1;h.push(v,U,T),h.push(T,U,C)}const p=new vn;p.setAttribute("position",new mn(l,3)),p.setAttribute("normal",new mn(c,3)),p.setIndex(h);const m={uIceBottomY:{value:Fe.yBottom},uIceTopY:{value:Fe.yTop},uIceAmount:{value:1},uStickWetness:{value:0},uMelt:{value:0}},S=`
    ${So}

    float evalLiquidLayer(float x, float dSmooth, float reach, float speed, float phase, float xCenter, float xWidth) {
      // Constant wrap period guarantees d(front)/dt = +speed > 0 ALWAYS (never reverses upward while reach grows!)
      const float CYCLE = 1.65;
      float front = mod(uTime * speed + phase * CYCLE, CYCLE);
      float dx = (x - xCenter) / xWidth;
      float lobeShape = exp(-dx * dx * 1.15);
      float grainRipple = sin(x * 11.5 + phase * 4.3 + uSeed) * 0.018 + cos(x * 23.0 - uSeed) * 0.008;
      float frontY = front * (0.38 + 0.78 * lobeShape) + grainRipple;

      float reachMax = max(0.04, reach * 1.25);
      float reachClip = revStep(reachMax + 0.08, reachMax - 0.14, dSmooth);
      float frontInReach = revStep(reachMax + 0.14, reachMax - 0.06, frontY);
      float fadeEnd = revStep(CYCLE, CYCLE - 0.14, front);

      float sheet = revStep(frontY + 0.016, frontY - 0.030, dSmooth) * smoothstep(0.02, 0.10, front) * (0.35 + 0.65 * lobeShape) * reachClip * fadeEnd;
      float softLip = exp(-sq((dSmooth - frontY) / 0.014)) * lobeShape * smoothstep(0.03, 0.12, front) * fadeEnd * frontInReach;
      return sheet * 0.28 + softLip * 0.20;
    }

    float evalEdgeWave(float dSmooth, float reach, float speed, float phase, float bulbLen) {
      // Constant wrap period guarantees every edge wave strictly travels DOWNWARD (d(front)/dt = +speed > 0)!
      const float CYCLE = 1.65;
      float front = mod(uTime * speed + phase * CYCLE, CYCLE);
      float fadeEnds = smoothstep(0.015, 0.09, front) * revStep(CYCLE, CYCLE - 0.14, front) * revStep(reach + 0.10, reach - 0.08, front);
      float head = exp(-sq((dSmooth - front) / bulbLen)) * 0.78;
      float tail = revStep(front + bulbLen * 0.6, front - bulbLen * 2.8, dSmooth) * smoothstep(-0.01, 0.025, dSmooth) * 0.34;
      return (head + tail) * fadeEnds;
    }

    // Subtle organic wet side-edge trickle film along BOTH left & right stick edges while ice is actively melting
    float evalSideEdgeRunoff(vec2 xzNorm, float wy) {
      // Fade active mid-stick runoff cleanly as the final ice bead disappears (no phantom drips starting mid-stick!)
      float edgeWet = smoothstep(0.055, 0.24, uMelt) * smoothstep(0.08, 0.42, uStickWetness) * smoothstep(0.04, 0.36, uIceAmount);
      if (edgeWet < 0.005) return 0.0;
      float sideMask = smoothstep(0.66, 0.96, abs(xzNorm.x));
      if (sideMask < 0.005) return 0.0;

      float distBelow = uIceBottomY - wy;
      float dSmooth = 0.5 * (distBelow + sqrt(distBelow * distBelow + 0.0005));
      float topCut = smoothstep(0.002, 0.036, distBelow);
      float reach = 0.14 + smoothstep(0.055, 0.58, uMelt) * 1.25;
      float trackMask = revStep(reach + 0.08, reach - 0.14, dSmooth) * topCut;

      float sidePhase = xzNorm.x >= 0.0 ? 0.43 : 0.0;
      float w1 = evalEdgeWave(dSmooth, reach, 0.026, 0.11 + sidePhase, 0.055);
      float w2 = evalEdgeWave(dSmooth, reach, 0.044, 0.57 + sidePhase * 1.3, 0.042);
      float w3 = evalEdgeWave(dSmooth, reach, 0.064, 0.89 + sidePhase * 0.7, 0.034);
      float organicRipple = 0.72 + 0.28 * sin(wy * 24.0 + uTime * 0.24 + sidePhase * 8.0 + uSeed);

      float ribbon = (0.14 * trackMask * organicRipple + clamp(w1 + w2 * 0.85 + w3 * 0.70, 0.0, 1.05) * topCut);
      return clamp(ribbon * sideMask * edgeWet, 0.0, 1.05);
    }

    // Lush, cohesive sticky melted-popsicle glaze coating the entire upper stick where the ice cream actually sat
    // (wrapping cleanly over the rounded top cap down through the submerged zone & tapering down the handle!)
    float evalStickyResidue(vec2 xzNorm, float wy) {
      float x = xzNorm.x;
      float creepT = uTime * 0.0065;
      // Organic slow-creeping syrup waves & viscous pooling ridges across the entire upper ice-contact zone
      float grain1 = 0.5 + 0.5 * sin(x * 6.8 + (wy + creepT) * 7.2 + uSeed);
      float grain2 = 0.5 + 0.5 * cos(x * 13.5 - (wy + creepT * 1.4) * 11.0 + uSeed * 1.7);
      float verticalStreaks = smoothstep(0.18, 0.88, grain1 * 0.62 + grain2 * 0.38);

      // Thickest glossy pools sitting right on the upper rounded cap & carved text zone where the popsicle sat
      float capPool = exp(-sq((wy - ${(Fe.stickTopY-.1).toFixed(3)}) / 0.22)) * (0.28 + 0.18 * cos(x * 4.2 + uSeed));
      float d1 = exp(-sq((x + 0.26) / 0.34) - sq((wy - ${(Fe.stickTopY-.26).toFixed(3)}) / 0.24)) * 0.36;
      float d2 = exp(-sq((x - 0.24) / 0.32) - sq((wy - ${(Fe.stickTopY-.58).toFixed(3)}) / 0.26)) * 0.34;
      float d3 = exp(-sq((x + 0.04) / 0.38) - sq((wy - ${(Fe.stickTopY-.96).toFixed(3)}) / 0.28)) * 0.28;
      // Subtle lower trailing drip tongues extending softly down the handle from the wet upper coat
      float trail1 = exp(-sq((x + 0.22) / 0.32)) * smoothstep(-1.75, -0.92, wy) * (0.14 + 0.12 * sin(wy * 9.0 + uTime * 0.18 + uSeed));
      float trail2 = exp(-sq((x - 0.20) / 0.30)) * smoothstep(-1.62, -0.88, wy) * (0.14 + 0.12 * cos(wy * 8.2 + uTime * 0.15 - uSeed));

      // Strong, unmistakable glossy coat across the ENTIRE upper ice-contact zone (y > -1.04 up to the rounded tip!)
      float iceSeatZone = smoothstep(-1.26, -0.78, wy);
      float baseCoat = mix(0.16, 0.46, iceSeatZone);
      float streaks = verticalStreaks * mix(0.16, 0.28, iceSeatZone);
      return clamp(baseCoat + streaks + capPool + d1 + d2 + d3 + trail1 + trail2, 0.0, 0.94);
    }

    float evalSyrupField(vec2 xzNorm, float wy) {
      float wet = clamp(uStickWetness, 0.0, 1.0);
      if (wet < 0.08 && uIceAmount > 0.95) return 0.0;

      float x = xzNorm.x;
      float z = xzNorm.y;
      float faceMask = smoothstep(0.28, 0.72, abs(z));

      float iceFlow = 0.0;
      float layerAmt = smoothstep(0.20, 0.80, wet);
      float iceBlend = smoothstep(0.0, 0.60, uIceAmount);
      if (layerAmt > 0.005 && iceBlend > 0.005) {
        float distBelow = uIceBottomY - wy;
        float dSmooth = 0.5 * (distBelow + sqrt(distBelow * distBelow + 0.0006));
        float reach = smoothstep(0.15, 0.90, wet);

        float l1 = evalLiquidLayer(x, dSmooth, reach, 0.022, 0.12, -0.34, 0.62);
        float l2 = evalLiquidLayer(x, dSmooth, reach, 0.030, 0.44,  0.30, 0.58);
        float l3 = evalLiquidLayer(x, dSmooth, reach, 0.018, 0.72, -0.04, 0.78);
        float l4 = evalLiquidLayer(x, dSmooth, reach, 0.036, 0.91,  0.42, 0.52);

        float collar = exp(-dSmooth / max(0.036, 0.075 * (0.5 + 0.7 * reach))) * 0.30 * iceBlend;
        float layered = (l1 + l2 + l3 + l4) * layerAmt * 1.20;
        float topFade = smoothstep(-0.075, 0.014, distBelow);
        iceFlow = clamp((collar * smoothstep(0.10, 0.36, wet) + layered) * faceMask * topFade, 0.0, 0.95);
      }

      // Smoothly coat the revealed upper stick as the sliding ice retreats downward (wide blend prevents any horizontal seam!),
      // and seamlessly wrap the entire stick once bare!
      float bareWeight = clamp(max(1.0 - iceBlend, smoothstep(uIceTopY - 0.14, uIceTopY + 0.08, wy) * smoothstep(-1.45, -1.05, wy)), 0.0, 1.0);
      float bareSticky = 0.0;
      if (bareWeight > 0.005) {
        float sticky = evalStickyResidue(xzNorm, wy);
        // Coat both the broad front/back faces AND softly wrap around the beveled edges & rounded top cap!
        float capWrap = smoothstep(${(Fe.stickTopY-.16).toFixed(3)}, ${(Fe.stickTopY-.02).toFixed(3)}, wy);
        float bareMask = mix(0.42 + 0.58 * faceMask, 0.88 + 0.12 * faceMask, capWrap);
        bareSticky = clamp(sticky * bareMask, 0.0, 0.92);
      }

      return clamp(max(iceFlow * iceBlend, bareSticky * bareWeight), 0.0, 0.94);
    }
  `,y=new bn({transparent:!0,depthTest:!0,depthWrite:!1,side:di,uniforms:{uSceneTex:i.uSceneTex,uResolution:i.uResolution,uTime:i.uTime,uIceBottomY:m.uIceBottomY,uIceTopY:m.uIceTopY,uIceAmount:m.uIceAmount,uStickWetness:m.uStickWetness,uMelt:m.uMelt,uSeed:{value:e*3.17},uDropSigma:i.uDropSigma,uDropCreamColor:i.uDropCreamColor,uDropOpacity:i.uDropOpacity},vertexShader:`
      uniform float uTime;
      uniform float uIceBottomY;
      uniform float uIceTopY;
      uniform float uIceAmount;
      uniform float uStickWetness;
      uniform float uMelt;
      uniform float uSeed;

      varying vec3 vWorldPos;
      varying vec3 vBaseNormal;
      varying vec2 vLocalXZ;
      varying float vWorldY;

      ${S}

      void main() {
        vWorldY = position.y;
        vec2 xzNorm = vec2(position.x / ${f.toFixed(6)}, position.z / ${u.toFixed(6)});
        vLocalXZ = xzNorm;

        float thick = evalSyrupField(xzNorm, position.y);
        float edgeRun = evalSideEdgeRunoff(xzNorm, position.y);

        float distBelow = uIceBottomY - position.y;
        float dSmooth = 0.5 * (distBelow + sqrt(distBelow * distBelow + 0.0006));

        float tinyMeniscus = exp(-dSmooth * 36.0) * smoothstep(-0.04, 0.015, distBelow) * smoothstep(0.10, 0.45, uStickWetness) * uIceAmount * 0.0011;
        float layerBulge = smoothstep(0.06, 0.90, thick) * (0.0010 + 0.0018 * max(uStickWetness, 1.0 - uIceAmount));
        // Ultra-subtle damp surface film on the wood edge (zero hollow rail — real 3D teardrops carry the side dripping silhouette!)
        float edgeBulge = edgeRun * 0.0016;
        vec3 displaced = position + normal * (tinyMeniscus + layerBulge + edgeBulge);

        vec4 wp = modelMatrix * vec4(displaced, 1.0);
        vWorldPos = wp.xyz;
        vBaseNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;

      uniform sampler2D uSceneTex;
      uniform vec2 uResolution;
      uniform float uTime;
      uniform float uIceBottomY;
      uniform float uIceTopY;
      uniform float uIceAmount;
      uniform float uStickWetness;
      uniform float uMelt;
      uniform float uSeed;
      uniform vec3 uDropSigma;
      uniform vec3 uDropCreamColor;
      uniform float uDropOpacity;

      varying vec3 vWorldPos;
      varying vec3 vBaseNormal;
      varying vec2 vLocalXZ;
      varying float vWorldY;

      ${S}

      void main() {
        float fFace = evalSyrupField(vLocalXZ, vWorldY);
        float fEdge = evalSideEdgeRunoff(vLocalXZ, vWorldY);
        float fC = max(fFace, fEdge);
        if (fC < 0.04) discard;

        vec3 N0 = normalize(vBaseNormal);
        vec3 rawT = cross(vec3(0.0, 1.0, 0.0), N0);
        vec3 T = length(rawT) > 0.001 ? normalize(rawT) : vec3(1.0, 0.0, 0.0);
        vec3 B = normalize(cross(N0, T));

        float epsS = 0.028;
        vec2 stepXZ = vec2(T.x * epsS, T.z * epsS * (${(f/u).toFixed(4)}));
        float dv = 0.010;
        float fR = max(evalSyrupField(vLocalXZ + stepXZ, vWorldY), evalSideEdgeRunoff(vLocalXZ + stepXZ, vWorldY));
        float fL = max(evalSyrupField(vLocalXZ - stepXZ, vWorldY), evalSideEdgeRunoff(vLocalXZ - stepXZ, vWorldY));
        float fD = max(evalSyrupField(vLocalXZ, vWorldY - dv), evalSideEdgeRunoff(vLocalXZ, vWorldY - dv));
        float fU = max(evalSyrupField(vLocalXZ, vWorldY + dv), evalSideEdgeRunoff(vLocalXZ, vWorldY + dv));

        float gradT = (fR - fL) / (2.0 * epsS);
        float gradV = (fD - fU) / (2.0 * dv);

        float sideZone = smoothstep(0.56, 0.92, abs(vLocalXZ.x));
        float edgeFactor = smoothstep(0.06, 0.34, fEdge) * sideZone;

        // Keep glossy liquid meniscus normals alive across the entire rounded top cap where the ice cream sat,
        // only gently softening right at the very grazing top apex edge (zero hard specular pinching!).
        float distBelow = uIceBottomY - vWorldY;
        float tipDamp = mix(0.42, 1.0, revStep(${Fe.stickTopY.toFixed(3)}, ${(Fe.stickTopY-.032).toFixed(3)}, vWorldY));
        float topDamp = max(1.0 - uIceAmount, smoothstep(-0.01, 0.035, distBelow)) * tipDamp;
        vec3 N = normalize(
          N0 - T * clamp(gradT * (0.16 + 0.14 * edgeFactor) * tipDamp, -0.45, 0.45) +
          B * clamp(gradV * (0.085 + 0.09 * edgeFactor) * topDamp, -0.45, 0.45)
        );
        vec3 V = normalize(cameraPosition - vWorldPos);
        float ndv = clamp(dot(N, V), 0.0, 1.0);

        vec2 screenUv = gl_FragCoord.xy / uResolution;
        // Keep side-edge refraction tight (0.0038 max) so the wood edge never pulls a hollow white stripe off the backdrop!
        float refrAmp = mix(0.0018 + 0.0040 * smoothstep(0.06, 0.88, fC), 0.0038, edgeFactor);
        vec2 refrOff = -N.xy * refrAmp;
        vec3 bgWood = texture2D(uSceneTex, clamp(screenUv + refrOff, vec2(0.002), vec2(0.998))).rgb;

        float optDepth = smoothstep(0.04, 0.88, fC);
        float bareSeatBoost = (1.0 - uIceAmount) * smoothstep(-1.15, -0.60, vWorldY);
        vec3 syrupTrans = exp(-uDropSigma * mix(0.26 + 0.12 * bareSeatBoost, 0.21, edgeFactor) * (0.20 + 0.66 * optDepth));
        vec3 col = bgWood * syrupTrans;
        vec3 camH = safeNorm(vec3(cameraPosition.x, 0.0, cameraPosition.z));
        vec3 camR = vec3(camH.z, 0.0, -camH.x);
        float isMilkDrop = smoothstep(0.76, 0.98, uDropOpacity);
        float creamMix = smoothstep(0.04, 0.86, uDropOpacity) * clamp(0.45 + 0.45 * optDepth + 0.22 * isMilkDrop, 0.0, mix(0.86, 0.98, isMilkDrop)) * mix(0.44, 1.0, smoothstep(0.0, 0.55, uIceAmount));
        if (creamMix > 0.005) {
          vec3 cL1 = normalize(-0.48 * camR + vec3(0.0, 0.54, 0.0) + 0.68 * camH);
          vec3 cL2 = normalize( 0.52 * camR + vec3(0.0, 0.42, 0.0) + 0.74 * camH);
          float cWrap = mix(0.62, 0.44, isMilkDrop) + 0.36 * clamp((dot(N, cL1) + 0.45) / 1.45, 0.0, 1.0) + 0.18 * clamp((dot(N, cL2) + 0.45) / 1.45, 0.0, 1.0);
          col = mix(col, uDropCreamColor * cWrap, creamMix);
        }

        // Delicate optical meniscus contour — subtle & organic (never a heavy dark pipe outline!)
        float lipContour = clamp(-gradV * 0.052 * topDamp, 0.0, 0.22);
        col *= (1.0 - lipContour);

        // Damp harsh specular streaks along the curved wood side bevels while keeping silky glossy coat across the upper cap!
        float bevelCalm = (1.0 - sideZone * 0.76) * smoothstep(0.05, 0.28, ndv);
        float fresnel = 0.016 + 0.984 * pow(1.0 - ndv, 4.5);
        vec3 l1 = normalize(-0.46 * camR + vec3(0.0, 0.54, 0.0) + 0.70 * camH);
        vec3 l2 = normalize( 0.52 * camR + vec3(0.0, 0.42, 0.0) + 0.74 * camH);
        vec3 h1 = safeNorm(l1 + V);
        vec3 h2 = safeNorm(l2 + V);
        float spec1 = pow(max(dot(N, h1), 0.0), 175.0);
        float spec2 = pow(max(dot(N, h2), 0.0), 140.0);
        // Subtle broad wet clearcoat sheen so the coated top of the stick unmistakably reads as wet glazed syrup
        float broadSheen = pow(max(dot(N, h1), 0.0), 28.0) * 0.12 + pow(max(dot(N, h2), 0.0), 24.0) * 0.085;
        float milkSpecCalm = 1.0 - isMilkDrop * 0.48;
        col = mix(col, vec3(1.04, 0.96, 0.94), clamp(fresnel * (0.14 + 0.09 * bareSeatBoost) * bevelCalm * milkSpecCalm, 0.0, 0.22));
        col += vec3(1.75, 1.64, 1.58) * (spec1 * 0.66 + spec2 * 0.45 + broadSheen * (0.35 + 0.62 * bareSeatBoost)) * bevelCalm * milkSpecCalm;

        float baseAlpha = mix(0.80, 0.52, edgeFactor);
        float alpha = smoothstep(0.05, 0.22, fC) * mix(baseAlpha, 0.95, isMilkDrop * smoothstep(0.10, 0.48, fC)) * smoothstep(0.02, 0.14, ndv);
        gl_FragColor = vec4(col, alpha);
      }
    `}),_=new Qt(p,y);return _.name="stick-melt-glaze",{mesh:_,uniforms:m,dispose(){p.dispose(),y.dispose()}}}function sM(i,e){const a=new Float32Array(6693),r=[];for(let S=0;S<=96;S++){const y=S/96;for(let _=0;_<=22;_++){const A=_/22,E=S*23+_;a[E*3]=A,a[E*3+1]=y,a[E*3+2]=0}}for(let S=0;S<96;S++)for(let y=0;y<22;y++){const _=S*23+y,A=_+1,E=_+23,v=E+1;r.push(_,A,E),r.push(A,v,E)}const l=new vn;l.setAttribute("position",new mn(a,3)),l.setIndex(r),l.boundingSphere=new Js(new G(0,-1.2,0),2.5);const c=Fe.stickEdgeX,h=Fe.stickDepth*.5,f={uIceBottomY:{value:Fe.yBottom},uIceAmount:{value:1},uMelt:{value:0},uFlowRate:{value:1},uLeftFunnelY:{value:Fe.yBottom},uRightFunnelY:{value:Fe.yBottom},uLeftFunnelW:{value:0},uRightFunnelW:{value:0}};function u(S,y,_,A){return new bn({transparent:!0,depthTest:!0,depthWrite:!1,side:di,uniforms:{uSceneTex:i.uSceneTex,uResolution:i.uResolution,uTime:i.uTime,uIceBottomY:f.uIceBottomY,uIceAmount:f.uIceAmount,uMelt:f.uMelt,uFlowRate:f.uFlowRate,uFunnelY:_,uFunnelW:A,uPhase:{value:S+e*2.13},uSideGain:{value:y},uDropSigma:i.uDropSigma,uDropCreamColor:i.uDropCreamColor,uDropOpacity:i.uDropOpacity,uShadowTint:i.uShadowTint,uStainColor:i.uStainColor},vertexShader:`
        uniform float uTime;
        uniform float uIceBottomY;
        uniform float uIceAmount;
        uniform float uMelt;
        uniform float uFlowRate;
        uniform float uFunnelY;
        uniform float uFunnelW;
        uniform float uPhase;
        uniform float uSideGain;

        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec3 vViewNormal;
        varying float vWorldY;
        varying float vCa;
        varying float vThickNorm;
        varying float vFlowMask;
        varying float vMeniscus;

        ${So}

        // Skewed gravity-driven falling liquid wave (plump downward-leading crest + smooth tapering tail)
        // Uses monotonically integrated uFlowPhase so even live speed-slider changes never reverse wave motion!
        float surgeWave(float d, float speed, float freq, float phase, float pwr) {
          float ph = d * freq - uFlowRate * speed * freq + phase;
          float skew = sin(ph - 0.46 * sin(ph));
          return pow(clamp(0.5 + 0.5 * skew, 0.0, 1.0), pwr);
        }

        // Evaluates continuous outward liquid stream thickness (world units) at height y
        float evalStreamThick(float y, float flowStrength, float meniscusStrength, out float outMeniscus) {
          float d = uIceBottomY - y;
          float dPos = max(0.0, d);
          // Smooth advancing wetness front early on -> full continuous drainage down the whole stick once melting builds!
          float reach = 0.06 + smoothstep(0.08, 0.34, uMelt) * 1.48;
          float reachMask = revStep(reach + 0.07, reach - 0.14, dPos);

          // Subtle two-scale tangential capillary meniscus kissing the underside translucent pouch smoothly
          // before curving gracefully inward onto the vertical wooden stick stream!
          float dFunnel = max(0.0, uFunnelY - y);
          float meniscusCurve = 0.54 * exp(-dFunnel / 0.064) + 0.46 * exp(-dFunnel / 0.017);
          float icePresence = smoothstep(0.0, 0.26, uIceAmount);
          float meniscus = uFunnelW * meniscusCurve * meniscusStrength * icePresence;
          outMeniscus = meniscusCurve * smoothstep(0.004, 0.022, uFunnelW) * meniscusStrength * icePresence;

          // Constant liquid core (never disconnects once melt is heavy) + calm viscous downward-advecting roll-waves!
          float slowSwell = 0.76 + 0.24 * sin(dPos * 5.8 - uFlowRate * 0.34 + uPhase * 0.9);
          float baseCore = (0.0044 + 0.0060 * flowStrength) * slowSwell;

          float w1 = surgeWave(dPos, 0.115, 9.8,  uPhase * 1.1 + 0.3, 2.2);
          float w2 = surgeWave(dPos, 0.175, 16.5, uPhase * 2.4 + 2.1, 2.6);
          float w3 = surgeWave(dPos, 0.072, 6.2,  uPhase * 0.7 + 4.3, 1.9);
          float w4 = surgeWave(dPos, 0.215, 24.0, uPhase * 3.1 + 0.8, 2.4);
          float waves = (w1 * 0.0115 + w2 * 0.0080 + w3 * 0.0068 + w4 * 0.0030) * (0.42 + 0.58 * flowStrength);
          float waveCalm = 1.0 - meniscusCurve * 0.55;

          return meniscus + (baseCore + waves * waveCalm) * reachMask * flowStrength * uSideGain;
        }

        vec3 evalStreamPos(
          float ca,
          float sa,
          float v,
          float flowStrength,
          float meniscusStrength,
          out float outThick,
          out float outMeniscus
        ) {
          float yStart = min(${(Fe.stickTopY-.04).toFixed(4)}, max(uIceBottomY + 0.020, uFunnelY + 0.046));
          float yBotArch = ${(Fe.stickBottomY+Fe.stickWidth*.5).toFixed(4)};
          float yEnd = ${(Fe.stickBottomY+.012).toFixed(4)};
          // Concentrate vertical resolution near the upper concave meniscus bridge for silky smooth normals & silhouette
          float vCurve = v * 0.65 + v * v * 0.35;
          float y = mix(yStart, yEnd, vCurve);

          float tipTaper = smoothstep(yEnd, yBotArch, y);
          float thick = evalStreamThick(y, flowStrength, meniscusStrength, outMeniscus) * (0.20 + 0.80 * tipTaper);
          outThick = thick;

          // Follow the semicircular rounded bottom curve of the wooden stick so liquid hugs the tip cleanly!
          float rStick = ${(c-.0025).toFixed(5)};
          float dyBot = max(0.0, yBotArch - y);
          float woodEdgeX = sqrt(max(0.0001, rStick * rStick - dyBot * dyBot));

          float innerLap = (0.011 + min(thick, 0.028) * 0.72) * (0.35 + 0.65 * tipTaper);
          float xOut = (ca >= 0.0) ? (ca * thick) : (ca * innerLap);
          float zSwell = min(thick, 0.028) * 0.42 + max(0.0, thick - 0.028) * 0.24;
          float zHalf = ${h.toFixed(5)} + 0.0012 + zSwell * smoothstep(-0.65, 0.45, ca);

          float zPos = sa * zHalf;
          float xPos = woodEdgeX + xOut;
          return vec3(xPos, y, zPos);
        }

        void main() {
          float u = position.x;
          float v = position.y;

          // Completely dry while freezer frost is thawing (melt < 0.16); peaks at mid-melt and subsides cleanly at endgame!
          float flowStrength = smoothstep(0.16, 0.44, uMelt) * (1.0 - smoothstep(0.64, 0.90, uMelt));
          float meniscusStrength = smoothstep(0.16, 0.30, uMelt) * (1.0 - smoothstep(0.64, 0.88, uMelt));
          vFlowMask = max(flowStrength, meniscusStrength);

          // Open curved D-cross-section hugging the vertical wooden edge from back bevel (-128 deg)
          // around outer liquid crest (0 deg, +X) to front bevel (+128 deg)
          float ang = (u - 0.5) * 4.46;
          float caC = cos(ang);
          float saC = sin(ang);

          float thickC;
          float meniscusC;
          vec3 P = evalStreamPos(caC, saC, v, flowStrength, meniscusStrength, thickC, meniscusC);

          // Analytical circumferential tangent tu (since thickness is independent of u -> cuts evalStreamPos from 5 to 3!)
          float innerLap = 0.011 + min(thickC, 0.028) * 0.72;
          float rOut = mix(innerLap, thickC, smoothstep(-0.08, 0.08, caC));
          float sCa = smoothstep(-0.65, 0.45, caC);
          float tCa = clamp((caC + 0.65) / 1.10, 0.0, 1.0);
          float dsDca = (caC > -0.65 && caC < 0.45) ? (6.0 * tCa * (1.0 - tCa) / 1.10) : 0.0;
          float zSwell = min(thickC, 0.028) * 0.42 + max(0.0, thickC - 0.028) * 0.24;
          float zHalf = ${h.toFixed(5)} + 0.0012 + zSwell * sCa;
          vec3 tu = vec3(-saC * rOut, 0.0, caC * zHalf - saC * saC * zSwell * dsDca);

          float epsV = 0.004;
          float dummyThick;
          float dummyMen;
          vec3 PvP = evalStreamPos(caC, saC, min(1.0, v + epsV), flowStrength, meniscusStrength, dummyThick, dummyMen);
          vec3 PvM = evalStreamPos(caC, saC, max(0.0, v - epsV), flowStrength, meniscusStrength, dummyThick, dummyMen);
          vec3 tv = PvP - PvM;
          vec3 localN = safeNorm(cross(tu, tv));

          vCa = caC;
          vThickNorm = clamp(thickC / 0.026, 0.0, 1.35);
          vMeniscus = meniscusC;

          vec4 wp = modelMatrix * vec4(P, 1.0);
          vWorldPos = wp.xyz;
          vWorldY = wp.y;
          vWorldNormal = normalize(mat3(modelMatrix) * localN);
          vViewNormal = normalize(normalMatrix * localN);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        precision highp float;

        uniform sampler2D uSceneTex;
        uniform vec2 uResolution;
        uniform float uIceBottomY;
        uniform float uFunnelY;
        uniform vec3 uDropSigma;
        uniform vec3 uDropCreamColor;
        uniform float uDropOpacity;
        uniform vec3 uShadowTint;
        uniform vec3 uStainColor;

        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec3 vViewNormal;
        varying float vWorldY;
        varying float vCa;
        varying float vThickNorm;
        varying float vFlowMask;
        varying float vMeniscus;

        ${So}

        void main() {
          if (vFlowMask < 0.008 || vThickNorm < 0.03) discard;

          // Keep meniscus continuous all the way up behind the pouch silhouette (where hardware depth clips it seamlessly!)
          float topStart = max(uIceBottomY + 0.016, uFunnelY + 0.040);
          float topFull = max(uIceBottomY - 0.006, uFunnelY + 0.010);
          float topFade = revStep(topStart, topFull, vWorldY);
          float meniscusBlend = clamp(vMeniscus, 0.0, 1.0);
          float funnelClarity = clamp((1.0 - meniscusBlend * 0.85) * revStep(uFunnelY + 0.014, uFunnelY - 0.085, vWorldY), 0.0, 1.0);
          float innerFade = smoothstep(-0.60, 0.08, vCa);
          float thickFade = smoothstep(0.03, 0.18, vThickNorm);
          float alphaMask = topFade * innerFade * thickFade;
          if (alphaMask < 0.005) discard;

          vec2 screenUv = gl_FragCoord.xy / uResolution;
          vec3 N = normalize(vWorldNormal);
          vec3 Nv = normalize(vViewNormal);
          vec3 V = normalize(cameraPosition - vWorldPos);
          float ndv = clamp(dot(N, V), 0.0, 1.0);

          // Realistic thin-stream Snell refraction (gentler inside the pale concave meniscus so wood never bleeds into it!)
          float outerMask = smoothstep(-0.10, 0.32, vCa) * topFade;
          float refrAmp = mix(0.0016, 0.0052 * (0.70 + 0.36 * vThickNorm), outerMask) * mix(1.0, 0.68, meniscusBlend);
          vec2 refrVec = -Nv.xy * refrAmp * (0.65 + 0.55 * pow(1.0 - ndv, 0.85));

          vec3 refrCol;
          refrCol.r = texture2D(uSceneTex, clamp(screenUv + refrVec * 0.94, vec2(0.002), vec2(0.998))).r;
          refrCol.g = texture2D(uSceneTex, clamp(screenUv + refrVec * 1.00, vec2(0.002), vec2(0.998))).g;
          refrCol.b = texture2D(uSceneTex, clamp(screenUv + refrVec * 1.07, vec2(0.002), vec2(0.998))).b;

          // Match crystal-clear pale translucency of the bottom pouch across the meniscus bridge,
          // deepening smoothly into luminous juicy syrup crests as the stream pours down the wooden stick!
          float depthAmt = (0.105 + 0.23 * clamp(vThickNorm, 0.0, 1.15)) * (0.44 + 0.56 * funnelClarity);
          vec3 flavorTrans = exp(-uDropSigma * depthAmt);
          refrCol *= flavorTrans;
          // Soft translucent blush matching the crystal bottom pouch right at the top meniscus weld (zero tone step!)
          float pouchBlush = meniscusBlend * (1.0 - uDropOpacity * 0.85) * 0.24;
          refrCol = mix(refrCol, refrCol * mix(vec3(1.0), uStainColor * 0.72 + vec3(0.46), 0.78), pouchBlush);
          float woodWeld = revStep(0.55, -0.10, vCa) * (1.0 - uDropOpacity * 0.70) * smoothstep(0.24, 0.90, funnelClarity);
          refrCol = mix(refrCol, refrCol * mix(vec3(1.0), uStainColor * 1.02 + vec3(0.10), 0.42), woodWeld * 0.55);

          // Smooth creamy & pulpy recipe support (Coconut, Mango, Chocolate, Banana!)
          vec3 camH = safeNorm(vec3(cameraPosition.x, 0.0, cameraPosition.z));
          vec3 camR = vec3(camH.z, 0.0, -camH.x);
          vec3 l1 = normalize(-0.48 * camR + vec3(0.0, 0.56, 0.0) + 0.68 * camH);
          vec3 l2 = normalize( 0.54 * camR + vec3(0.0, 0.42, 0.0) + 0.72 * camH);
          float isMilkDrop = smoothstep(0.76, 0.98, uDropOpacity);
          float creamMix = smoothstep(0.04, 0.86, uDropOpacity) * mix(0.88, 0.98, isMilkDrop);
          if (creamMix > 0.005) {
            float cWrap = mix(0.62, 0.44, isMilkDrop) + 0.36 * clamp((dot(N, l1) + 0.45) / 1.45, 0.0, 1.0) + 0.20 * clamp((dot(N, l2) + 0.45) / 1.45, 0.0, 1.0);
            refrCol = mix(refrCol, uDropCreamColor * cWrap, creamMix);
          }

          // Delicate optical glass rim matching the translucent bottom pouch edge across the concave meniscus,
          // sharpening naturally into the crisp vertical stick-stream silhouette below!
          float darkContour = revStep(0.64, 0.20, ndv) * smoothstep(0.01, 0.18, ndv) * outerMask;
          vec3 streamRimTint = mix(uShadowTint * 0.64, uStainColor * 0.48, 0.52);
          vec3 pouchRimTint = mix(uShadowTint * 0.82, uStainColor * 0.74 + vec3(0.18), 0.45);
          vec3 darkRimTint = mix(streamRimTint, pouchRimTint, meniscusBlend * 0.85);
          float rimStrength = mix(0.62, 0.36, meniscusBlend) * (1.0 - uDropOpacity * 0.52);
          vec3 col = mix(refrCol, refrCol * darkRimTint, darkContour * rimStrength);

          // Subtle internal caustic brighten along downward-facing swelling wave bellies
          float waveCaustic = revStep(0.18, -0.68, Nv.y) * smoothstep(0.14, 0.72, ndv) * outerMask;
          col += mix(vec3(0.76, 0.68, 0.64), uStainColor * 0.78 + vec3(0.22), 0.50) * waveCaustic * 0.46 * (1.0 - uDropOpacity * 0.65);

          // Restrained silky studio Fresnel & gliding specular sparkles rippling down every surging wave crest!
          float fresnel = 0.018 + 0.982 * pow(1.0 - ndv, 4.6);
          vec3 R = reflect(-V, N);
          float rxStudio = dot(R, camR);
          float stripRefl = exp(-sq((abs(rxStudio) - 0.62) / 0.18)) * smoothstep(-0.85, 0.85, R.y);
          vec3 envSpec = vec3(1.16, 1.10, 1.06) * (0.24 + 0.42 * stripRefl);
          col = mix(col, envSpec, clamp(fresnel * (0.34 - 0.14 * uDropOpacity) * outerMask, 0.0, 0.36));

          vec3 h1 = safeNorm(l1 + V);
          vec3 h2 = safeNorm(l2 + V);
          float spec1 = pow(max(dot(N, h1), 0.0), 250.0);
          float spec2 = pow(max(dot(N, h2), 0.0), 200.0);
          col += vec3(2.4, 2.32, 2.25) * (spec1 * 0.68 + spec2 * 0.44) * outerMask;

          float alpha = smoothstep(0.0, 0.06, ndv) * alphaMask;
          gl_FragColor = vec4(col, clamp(alpha * 0.97, 0.0, 1.0));
        }
      `})}const d=u(0,1,f.uRightFunnelY,f.uRightFunnelW),g=u(3.7,1.06,f.uLeftFunnelY,f.uLeftFunnelW),x=new Qt(l,d);x.name="stick-flow-right",x.frustumCulled=!1;const p=new Qt(l,g);p.name="stick-flow-left",p.rotation.y=Math.PI,p.frustumCulled=!1;const m=new Ki;return m.add(x,p),{group:m,uniforms:f,dispose(){l.dispose(),d.dispose(),g.dispose()}}}function oM(i,e){const a=new Float32Array(6141),r=[];for(let p=0;p<=88;p++){const m=p/88;for(let S=0;S<=22;S++){const y=S/22,_=p*23+S;a[_*3]=y,a[_*3+1]=m,a[_*3+2]=0}}for(let p=0;p<88;p++)for(let m=0;m<22;m++){const S=p*23+m,y=S+1,_=S+23,A=_+1;r.push(S,y,_),r.push(y,A,_)}const l=new vn;l.setAttribute("position",new mn(a,3)),l.setIndex(r);const c=Fe.stickBottomY,h=Fe.stickWidth*.5,f=Fe.stickDepth*.5,u=c+h,d={uFlowPhase:{value:0},uReach:{value:0},uThickness:{value:0},uTailDrop:{value:0},uCollarAmt:{value:0}},g=new bn({transparent:!0,depthTest:!0,depthWrite:!1,side:di,uniforms:{uSceneTex:e.uSceneTex,uResolution:e.uResolution,uTime:e.uTime,uDropSigma:e.uDropSigma,uDropCreamColor:e.uDropCreamColor,uDropOpacity:e.uDropOpacity,uShadowTint:e.uShadowTint,uStainColor:e.uStainColor,uFlowPhase:d.uFlowPhase,uReach:d.uReach,uThickness:d.uThickness,uTailDrop:d.uTailDrop,uCollarAmt:d.uCollarAmt,uPhase:{value:i*3.17+1.1}},vertexShader:`
      uniform float uFlowPhase;
      uniform float uReach;
      uniform float uThickness;
      uniform float uTailDrop;
      uniform float uCollarAmt;
      uniform float uPhase;
      uniform float uDropOpacity;

      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vViewNormal;
      varying float vV;
      varying float vRadNorm;
      varying float vAlphaMask;

      ${So}

      float filamentWave(float d, float speed, float freq, float ph, float pwr) {
        float a = d * freq - uFlowPhase * speed * freq + ph;
        float skew = sin(a - 0.44 * sin(a));
        return pow(clamp(0.5 + 0.5 * skew, 0.0, 1.0), pwr);
      }

      float smaxFil(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / max(1e-5, k), 0.0, 1.0);
        return mix(a, b, h) + k * h * (1.0 - h);
      }

      void evalFilament(float v, out float outY, out float outRx, out float outRz, out float outCx, out float outCz, out float outMask) {
        const float tipY = ${c.toFixed(4)};
        const float stickHalfW = ${h.toFixed(4)};
        const float stickHalfD = ${f.toFixed(4)};
        const float yArcCenter = ${u.toFixed(4)};
        const float collarOverlap = 0.064;

        float yTop = tipY + collarOverlap;
        float totalLen = max(0.08, uReach + collarOverlap);
        // Concentrate vertex density near the top V-meniscus collar & rounded tip!
        float vCurve = v * 0.42 + v * v * 0.58;
        float d = vCurve * totalLen;

        // When pinching off (uTailDrop > 0), lower filament detaches cleanly below pinch neck and accelerates off-screen!
        float tailMask = smoothstep(0.085, 0.175, d);
        float y = yTop - d - uTailDrop * tailMask * 1.75;
        outY = y;

        // Continuous distance downward from the upper wood-flank attachment (yTop) and below the stick tip (tipY)
        float sTop = max(0.0, yTop - y);
        float dBelow = max(0.0, tipY - y);
        float viscousMul = mix(1.0, 1.28, smoothstep(0.25, 0.90, uDropOpacity));

        // 1. TRUE WOOD-ARC-TANGENT CONCAVE V-MENISCUS COLLAR (ZERO horizontal shelf, ZERO step!)
        // Along the curved lower flanks of the rounded stick tip (y > tipY), hug the semicircular birch contour
        // smoothly and then sweep tangentially inward into a concave V-funnel converging beneath the tip!
        float dyArc = clamp(yArcCenter - y, 0.0, stickHalfW);
        float woodHalfW = sqrt(max(0.0, stickHalfW * stickHalfW - dyArc * dyArc));
        float vFunnel = (0.092 * exp(-sTop / 0.056) + 0.018 * exp(-sTop / 0.135)) * uCollarAmt * viscousMul;
        // Clamp collar width smoothly inside the wet wood flank near yTop so it tucks invisibly onto the glazed stick!
        float topWoodClamp = mix(min(vFunnel, woodHalfW + 0.005 * uCollarAmt), vFunnel, smoothstep(0.012, 0.046, sTop));
        float collarRx = topWoodClamp;
        // Keep front-to-back depth flush against the flat wooden stick face above tipY, tapering smoothly into circular below!
        float collarRz = (stickHalfD + 0.003) * exp(-dBelow / 0.052) * uCollarAmt;

        // 2. Continuous syrupy flowing thread with gentle gravity-accelerated taper + gliding Rayleigh-Plateau pulses!
        float gravityTaper = 1.0 / pow(1.0 + dBelow * 1.15, 0.22);
        float w1 = filamentWave(dBelow, 0.62, 11.5, uPhase, 1.9);
        float w2 = filamentWave(dBelow, 0.92, 19.5, uPhase * 1.7 + 2.1, 2.3);
        float pulse = 1.0 + (w1 * 0.34 + w2 * 0.18) * smoothstep(0.03, 0.26, dBelow);

        // Rounded leading droplet bead while the filament is first overflowing & stretching down off the tip!
        float distFromTip = max(0.0, (1.0 - vCurve) * totalLen);
        float extendingMask = 1.0 - smoothstep(1.35, 2.15, uReach);
        float leadHead = exp(-sq((distFromTip - 0.036) / 0.038)) * 0.018 * extendingMask * smoothstep(0.02, 0.16, uReach);
        float tipClose = smoothstep(0.0, 0.028, distFromTip);

        // Smooth hourglass pinch-off right below the meniscus when transitioning from continuous stream -> final drops!
        float pinchZone = exp(-sq((dBelow - 0.082) / 0.052));
        float pinchAtten = 1.0 - smoothstep(0.0, 0.48, uTailDrop) * pinchZone;
        float tailFade = 1.0 - smoothstep(0.45, 1.35, uTailDrop) * tailMask;
        // Soften residual upper cone during pinch so it rounds gracefully into the first final drop instead of a sharp needle
        float collarPinchRound = 1.0 - smoothstep(0.15, 0.85, uTailDrop) * smoothstep(0.015, 0.090, dBelow);

        float bodyR = (0.0172 * gravityTaper * pulse * uThickness + leadHead) * viscousMul * pinchAtten * tailFade * tipClose;
        // C-infinity smooth blend from the tangent V-meniscus collar into the cylindrical liquid filament!
        float rx = smaxFil(bodyR, collarRx * collarPinchRound, 0.0085) * tipClose;
        float rz = smaxFil(bodyR, collarRz * collarPinchRound, 0.0075) * tipClose;

        // Close bottom pole cleanly to zero; keep top edge tucked flush on the curved stick contour!
        float botPole = smoothstep(1.0, 0.985, v);
        outRx = rx * botPole;
        outRz = rz * botPole;

        // Whisper-subtle organic capillary sway as the syrupy thread streams downward
        float swayAmp = smoothstep(0.05, 0.65, dBelow) * 0.0062 * (1.0 - uDropOpacity * 0.32);
        outCx = sin(dBelow * 4.0 - uFlowPhase * 2.2 + uPhase) * swayAmp;
        outCz = cos(dBelow * 3.2 - uFlowPhase * 1.8 + uPhase * 0.7) * swayAmp * 0.65;

        // Feather alpha invisibly onto the glazed curved wood flanks across the top 0.036 of overlap
        float topFeather = smoothstep(0.004, 0.038, sTop);
        outMask = topFeather * smoothstep(1.0, 0.965, v) * smoothstep(0.0018, 0.0070, max(rx, rz));
      }

      void main() {
        float u = position.x;
        float v = position.y;
        float ang = u * 6.2831853;
        float ca = cos(ang);
        float sa = sin(ang);

        float yC, rxC, rzC, cxC, czC, mC;
        evalFilament(v, yC, rxC, rzC, cxC, czC, mC);
        vec3 P = vec3(cxC + ca * rxC, yC, czC + sa * rzC);

        float epsV = 0.005;
        float yP, rxP, rzP, cxP, czP, mP;
        float yM, rxM, rzM, cxM, czM, mM;
        evalFilament(min(1.0, v + epsV), yP, rxP, rzP, cxP, czP, mP);
        evalFilament(max(0.0, v - epsV), yM, rxM, rzM, cxM, czM, mM);

        vec3 tu = vec3(-sa * max(rxC, 1e-4), 0.0, ca * max(rzC, 1e-4));
        vec3 tv = vec3(cxP + ca * rxP - (cxM + ca * rxM), yP - yM, czP + sa * rzP - (czM + sa * rzM));
        vec3 localN = safeNorm(cross(tu, tv));

        vV = v;
        vRadNorm = clamp(max(rxC, rzC) / 0.024, 0.0, 1.4);
        vAlphaMask = mC;

        vec4 wp = modelMatrix * vec4(P, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * localN);
        vViewNormal = normalize(normalMatrix * localN);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;

      uniform sampler2D uSceneTex;
      uniform vec2 uResolution;
      uniform vec3 uDropSigma;
      uniform vec3 uDropCreamColor;
      uniform float uDropOpacity;
      uniform vec3 uShadowTint;
      uniform vec3 uStainColor;

      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vViewNormal;
      varying float vV;
      varying float vRadNorm;
      varying float vAlphaMask;

      ${So}

      void main() {
        if (vAlphaMask < 0.01) discard;

        vec2 screenUv = gl_FragCoord.xy / uResolution;
        vec3 N = normalize(vWorldNormal);
        vec3 Nv = normalize(vViewNormal);
        vec3 V = normalize(cameraPosition - vWorldPos);
        float ndv = clamp(dot(N, V), 0.0, 1.0);

        // Crisp cylindrical liquid lens refraction (bends the warm studio backdrop cleanly through the thin syrup filament!)
        float refrAmp = 0.0052 * (0.70 + 0.55 * vRadNorm);
        vec2 refrVec = -Nv.xy * refrAmp * (0.62 + 0.65 * pow(1.0 - ndv, 0.78));

        vec3 refrCol;
        refrCol.r = texture2D(uSceneTex, clamp(screenUv + refrVec * 0.94, vec2(0.002), vec2(0.998))).r;
        refrCol.g = texture2D(uSceneTex, clamp(screenUv + refrVec * 1.00, vec2(0.002), vec2(0.998))).g;
        refrCol.b = texture2D(uSceneTex, clamp(screenUv + refrVec * 1.07, vec2(0.002), vec2(0.998))).b;

        // Rich juicy flavor Beer-Lambert tint (matches the wet stick runoff & hanging drops seamlessly!)
        float depthAmt = 0.42 + 0.46 * vRadNorm;
        refrCol *= exp(-uDropSigma * depthAmt);
        refrCol = mix(refrCol, refrCol * mix(vec3(1.0), uStainColor * 0.92 + vec3(0.10), 0.80), 0.44 * (1.0 - uDropOpacity * 0.85));

        vec3 camH = safeNorm(vec3(cameraPosition.x, 0.0, cameraPosition.z));
        vec3 camR = vec3(camH.z, 0.0, -camH.x);
        vec3 l1 = normalize(-0.48 * camR + vec3(0.0, 0.56, 0.0) + 0.68 * camH);
        vec3 l2 = normalize( 0.54 * camR + vec3(0.0, 0.42, 0.0) + 0.72 * camH);

        // Opaque creamy / chocolate / coconut milk filament support!
        float isMilkDrop = smoothstep(0.76, 0.98, uDropOpacity);
        float creamMix = smoothstep(0.04, 0.86, uDropOpacity) * mix(0.90, 0.98, isMilkDrop);
        if (creamMix > 0.005) {
          float cWrap = mix(0.62, 0.44, isMilkDrop) + 0.36 * clamp((dot(N, l1) + 0.45) / 1.45, 0.0, 1.0) + 0.20 * clamp((dot(N, l2) + 0.45) / 1.45, 0.0, 1.0);
          refrCol = mix(refrCol, uDropCreamColor * cWrap, creamMix);
        }

        // Crisp dark optical liquid edge contour so the thin glistening filament reads vividly against the bright studio backdrop!
        float darkContour = revStep(0.72, 0.14, ndv) * smoothstep(0.01, 0.15, ndv);
        vec3 darkRimTint = mix(uShadowTint * 0.48, uStainColor * 0.36, 0.58);
        vec3 col = mix(refrCol, refrCol * darkRimTint, darkContour * (0.82 - 0.38 * uDropOpacity));

        // Internal warm backlit caustic glow down the core of the liquid thread
        float coreGlow = pow(ndv, 1.5) * (1.0 - uDropOpacity * 0.80);
        col += (uStainColor * 0.45 + vec3(0.16, 0.10, 0.10)) * coreGlow * 0.26;

        // Crisp gliding vertical studio highlight stripe running down the glossy filament!
        float fresnel = 0.02 + 0.98 * pow(1.0 - ndv, 4.0);
        vec3 R = reflect(-V, N);
        float rxStudio = dot(R, camR);
        float stripRefl = exp(-sq((abs(rxStudio) - 0.56) / 0.17));
        vec3 envSpec = vec3(1.25, 1.18, 1.14) * (0.30 + 0.52 * stripRefl);
        col = mix(col, envSpec, clamp(fresnel * (0.44 - 0.18 * uDropOpacity), 0.0, 0.46));

        vec3 h1 = safeNorm(l1 + V);
        vec3 h2 = safeNorm(l2 + V);
        float spec1 = pow(max(dot(N, h1), 0.0), 210.0);
        float spec2 = pow(max(dot(N, h2), 0.0), 160.0);
        col += vec3(2.8, 2.70, 2.62) * (spec1 * 0.85 + spec2 * 0.52);

        float alpha = smoothstep(0.0, 0.06, ndv) * vAlphaMask;
        gl_FragColor = vec4(col, clamp(alpha * 0.99, 0.0, 1.0));
      }
    `}),x=new Qt(l,g);return x.name="stick-tip-filament",x.frustumCulled=!1,x.visible=!1,{mesh:x,uniforms:d,dispose(){l.dispose(),g.dispose()}}}function aM(){const s=new Float32Array(2001),o=new Float32Array(667*3),a=new Float32Array(667),r=new Float32Array(667),l=[];for(let h=0;h<=28;h++){const f=h/28,u=1-2*f,d=f*Math.PI,g=Math.pow(Math.sin(d*.5),1.65)*Math.sin(d)/.654,x=me(0,.16,f),p=me(.02,.24,f);for(let m=0;m<=22;m++){const S=m===22?0:m/22*Math.PI*2,y=Math.cos(S),_=Math.sin(S),A=(y>=0?y*g:y*g*.3)-.04*g,E=_*g*.86,v=h*23+m;s[v*3]=A,s[v*3+1]=u,s[v*3+2]=E;const T=me(-.22,.16,y);a[v]=x*T,r[v]=p*me(-.14,.24,y)}}for(let h=0;h<=28;h++)for(let f=0;f<=22;f++){const d=(h*23+f)*3;if(h===0){o[d]=.2,o[d+1]=.98,o[d+2]=0;continue}if(h===28){o[d]=0,o[d+1]=-1,o[d+2]=0;continue}const g=f===0?21:f-1,x=f===22?1:f+1,p=Math.max(0,h-1),m=Math.min(28,h+1),S=(h*23+x)*3,y=(h*23+g)*3,_=(m*23+f)*3,A=(p*23+f)*3,E=s[S]-s[y],v=s[S+1]-s[y+1],T=s[S+2]-s[y+2],U=s[_]-s[A],C=s[_+1]-s[A+1],D=s[_+2]-s[A+2],O=v*D-T*C,Y=T*U-E*D,R=E*C-v*U,B=Math.hypot(O,Y,R)||1;o[d]=O/B,o[d+1]=Y/B,o[d+2]=R/B}for(let h=0;h<28;h++)for(let f=0;f<22;f++){const u=h*23+f,d=u+1,g=u+23,x=g+1;l.push(u,d,g),l.push(d,x,g)}const c=new vn;return c.setAttribute("position",new mn(s,3)),c.setAttribute("normal",new mn(o,3)),c.setAttribute("aCollarFade",new mn(a,1)),c.setAttribute("aFilletFade",new mn(r,1)),c.setIndex(l),c}const Ii=28,li=40,rM=new Float32Array(li+1),lM=new Float32Array(li+1),Nf=new Float32Array(Ii+1),Lf=new Float32Array(Ii+1);for(let i=0;i<=Ii;i++){const e=i===Ii?0:i/Ii*Math.PI*2;Nf[i]=Math.cos(e),Lf[i]=Math.sin(e)}function Oc(){const i=(Ii+1)*(li+1),e=new Float32Array(i*3),t=new Float32Array(i*3),n=new Float32Array(i),s=new Float32Array(i),o=[];for(let f=0;f<li;f++)for(let u=0;u<Ii;u++){const d=f*(Ii+1)+u,g=d+1,x=d+(Ii+1),p=x+1;o.push(d,g,x),o.push(g,p,x)}const a=new vn,r=new mn(e,3),l=new mn(t,3),c=new mn(n,1),h=new mn(s,1);return r.setUsage(qi),l.setUsage(qi),c.setUsage(qi),h.setUsage(qi),a.setAttribute("position",r),a.setAttribute("normal",l),a.setAttribute("aCollarFade",c),a.setAttribute("aFilletFade",h),a.setIndex(o),a}function Ia(i,e,t,n,s,o){const a=.036*s;if(a<.002||e==="dormant"||e==="growing"&&t<.008)return{visible:!1,yBulbCenter:0,bulbR:0,pinchY:0};const r=i.attributes.position,l=i.attributes.normal,c=i.attributes.aCollarFade,h=i.attributes.aFilletFade,f=r.array,u=l.array,d=c.array,g=h.array,x=rM,p=lM,m=(R,B,$)=>{const K=Q(.5+.5*(B-R)/Math.max(1e-5,$),0,1);return R+(B-R)*K+$*K*(1-K)},S=-.001,y=.0028*s,_=.009*s*(e==="growing"?.65+.35*Q(t,0,1):1);let A=S-.01,E=a,v=-a;if(e==="recoiling"){const R=Q(n,0,1),B=Math.exp(-R*4.8)*Math.cos(R*Math.PI*1.15),$=Math.min(S-.001,o*Math.max(-.04,B)),K=Math.max(.0012,a*(.2+.14*Math.sin(R*Math.PI))*(1-.68*R)),he=a*(1.42-.52*R);if($>=S-.002)return{visible:!1,yBulbCenter:0,bulbR:0,pinchY:0};const ee=$+K;for(let ue=0;ue<=li;ue++){const ae=ue/li,le=ae<.72?ae:.72+.28*Math.sin((ae-.72)/.28*Math.PI*.5),Ee=_+($-_)*le;if(p[ue]=Ee,ue===li)x[ue]=0;else if(Ee<=ee){const N=Q((ee-Ee)/Math.max(1e-4,K),0,1);x[ue]=K*Math.sqrt(Math.max(0,1-N*N))}else{const N=Q((y-Ee)/Math.max(1e-4,y-ee),0,1),j=he*Math.exp(-N*2.5);x[ue]=m(j,K*(.72+.28*N),K*.48)}}E=K,A=ee}else{let R,B,$,K,he,ee,ue;if(e==="growing"){const I=Q(t,0,1);E=a*Math.pow(I,.72),R=E*(.76+.44*me(.25,1,I)),A=-a*(.85*Math.pow(I,.65)+2*Math.pow(I,1.25))+R,B=Math.max(a*.7,E*(2.32-.52*I)),ue=me(.48,1,I),$=E*(1-.44*ue),K=1.95,he=1.15,ee=.48}else{const I=Q(n,0,1);E=a*(1-.07*Math.sin(I*Math.PI*.85)),R=a*(1.2+.22*Math.sin(I*Math.PI*.8)+.04*I);const X=3.55*a*Math.pow(I,2.05);A=-1.65*a-X,B=a*(1.8-.26*I),$=Math.max(.004*a,a*.56*Math.pow(Math.max(0,1-I),1.08)),K=1.95+.35*I,he=1.15+.32*I,ee=.48+.04*I,ue=1}const ae=A-R,le=Math.min(y-.002,Math.max(A+.002,y+(A-y)*ee));if(v=le,ae>=S-.001)return{visible:!1,yBulbCenter:A,bulbR:E,pinchY:v};const Ee=Math.max(1e-4,y-A),N=Math.max(1e-4,y-le),j=Math.max(1e-4,le-A),W=Math.max(1e-4,_-y);for(let I=0;I<=li;I++){const X=I/li,te=X<.72?X:.72+.28*Math.sin((X-.72)/.28*Math.PI*.5),ce=_+(ae-_)*te;if(p[I]=ce,I===li){x[I]=0;continue}if(ce<=A){const ie=Q((A-ce)/Math.max(1e-4,R),0,1);x[I]=E*Math.sqrt(Math.max(0,1-ie*ie))}else{let ie;if(ce<=y){const Me=Q((ce-A)/Ee,0,1);ie=E+(B-E)*Math.pow(Me,1.75)}else{const Me=Q((ce-y)/W,0,1);ie=B*(1+.22*Me)}let re;if(ce<=le){const Me=Q((le-ce)/j,0,1),se=Math.pow(Me,he),fe=se*se*(3-2*se);re=$+(E-$)*fe}else if(ce<=y){const Me=Q((ce-le)/N,0,1);re=$+(B-$)*Math.pow(Me,K)}else{const Me=Q((ce-y)/W,0,1);re=B*(1+.22*Me)}x[I]=ie+(re-ie)*ue}}}const T=Math.max(.006,Math.min(.018,Math.max(.005,S-A)*.72)),U=Ii+1;let C=0;for(let R=0;R<=li;R++){const B=x[R];B>C&&(C=B);const $=p[R],K=R>0?R-1:0,he=R<li?R+1:li,ee=x[he]-x[K],ue=p[he]-p[K],ae=1/(Math.hypot(-ue,ee)||1),le=-ue*ae,Ee=ee*ae,N=1-me(S,_-.001,$),j=me(S,S-T,$),W=R*U;if(R===li)for(let I=0;I<=Ii;I++){const X=W+I,te=X*3;f[te]=0,f[te+1]=$,f[te+2]=0,u[te]=0,u[te+1]=-1,u[te+2]=0,d[X]=N,g[X]=j}else for(let I=0;I<=Ii;I++){const X=Nf[I],te=Lf[I],ce=W+I,ie=ce*3;f[ie]=X*B,f[ie+1]=$,f[ie+2]=te*B,u[ie]=X*le,u[ie+1]=Ee,u[ie+2]=te*le,d[ce]=N,g[ce]=j}}r.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0,h.needsUpdate=!0;const D=p[li],O=.5*(_+D),Y=.5*Math.abs(_-D);return i.boundingSphere||(i.boundingSphere=new Js),i.boundingSphere.center.set(0,O,0),i.boundingSphere.radius=Math.hypot(C,Y)+.005,{visible:!0,yBulbCenter:A,bulbR:E,pinchY:v}}function cM(i,e="off",t=ea){const n=[];let s=e;const o={...Pi},a=da(t),r={uSceneTex:{value:null},uDropFieldTex:{value:null},uResolution:{value:new ot(1280,720)},uTime:{value:0},uDropSag:{value:o.sag},uDropStretch:{value:o.stretch},uDropSize:{value:o.size},uEdgeSoftness:{value:o.edgeBlur},uShadowStrength:{value:o.shadow},uShadowBlur:{value:o.shadowBlur},uRimDark:{value:o.rimDark},uDropSigma:{value:new G(...a.dropSigma)},uDropCreamColor:{value:new G(...a.dropCreamColor)},uDropOpacity:{value:0},uShadowTint:{value:new G(...a.shadowTint)},uStainColor:{value:new G(...a.stainColor)}};function l(V){const We=da(V);r.uDropSigma.value.set(...We.dropSigma),r.uDropCreamColor.value.set(...We.dropCreamColor),r.uDropOpacity.value=0,r.uShadowTint.value.set(...We.shadowTint),r.uStainColor.value.set(...We.stainColor)}const c=new qs(1,1),h=new Sg;h.index=c.index,h.attributes.position=c.attributes.position;const f=new Float32Array(Yo*3),u=new Float32Array(Yo*3),d=new Float32Array(Yo*4),g=new Float32Array(Yo*3),x=new Zo(f,3),p=new Zo(u,3),m=new Zo(d,4),S=new Zo(g,3);x.setUsage(qi),p.setUsage(qi),m.setUsage(qi),S.setUsage(qi),h.setAttribute("aCenter",x),h.setAttribute("aNormal",p),h.setAttribute("aParams",m),h.setAttribute("aMotion",S),h.instanceCount=Yo;const y=tM(r),_=new Qt(h,y);_.frustumCulled=!1,_.name="water-metaball-splats";const A=new ii;A.add(_),n.push(c,h,y);const E=new qs(2,2),v=nM(r),T=new ii;T.add(new Qt(E,v)),n.push(E,v);const U=new Ki,C=iM(r,i);U.add(C.mesh);const D=sM(r,i);U.add(D.group);let O=0;n.push(C,D);const Y=kc(r,.044,.56,!0,!1),R=kc(r,.046,.56,!1,!1),B=kc(r,.028,.58,!0,!0),$=new Rs(1,24,18),K=aM();n.push(Y,R,B,$,K);const he=Fe.stickEdgeX,ue=[{side:-1,maxR:.024,dormantDur:.3,spawnDropY:.018,phase:.4},{side:-1,maxR:.015,dormantDur:2,spawnDropY:.052,phase:2.1},{side:-1,maxR:.02,dormantDur:3.8,spawnDropY:.024,phase:3.9},{side:-1,maxR:.013,dormantDur:5.5,spawnDropY:.078,phase:5.5},{side:1,maxR:.023,dormantDur:1,spawnDropY:.02,phase:1.3},{side:1,maxR:.014,dormantDur:2.8,spawnDropY:.062,phase:3.1},{side:1,maxR:.019,dormantDur:4.6,spawnDropY:.026,phase:4.8},{side:1,maxR:.013,dormantDur:6.3,spawnDropY:.088,phase:.9}].map((V,We)=>{const Ze=new Qt(K,B);return Ze.visible=!1,Ze.name=`stick-edge-drop-${We}`,V.side<0&&(Ze.rotation.y=Math.PI),U.add(Ze),{side:V.side,stage:"dormant",y:Fe.yBottom-V.spawnDropY,radius:0,maxR:V.maxR,velY:0,stageTime:0,dormantDur:V.dormantDur,initDormantDur:V.dormantDur,spawnDropY:V.spawnDropY,phase:V.phase,mesh:Ze}}),ae=new Float32Array(An*is),le=new Float32Array(An*is);let Ee=!1,N=0;const j=new Float32Array(4),W=i*17.3;for(let V=0;V<is;V++){const We=V/(is-1);for(let Ze=0;Ze<An;Ze++){const oe=Ze/An*Math.PI*2,Ue=Math.sin(oe),M=Math.cos(oe),P=$i(Ue*3.8+W,We*5.2,M*3.8,3),Z=$i(Ue*11+W*1.7,We*14,M*11,2);le[V*An+Ze]=P*.65+Z*.35}}function I(V,We,Ze){const oe=(We%1+1)%1,Ue=Q(Ze,0,1),M=oe*An,P=Ue*(is-1),Z=Math.floor(M)%An,k=(Z+1)%An,b=Math.min(is-1,Math.floor(P)),q=Math.min(is-1,b+1),Ge=M-Math.floor(M),Ne=P-b,Te=V[b*An+Z]*(1-Ge)+V[b*An+k]*Ge,Ye=V[q*An+Z]*(1-Ge)+V[q*An+k]*Ge;return Te*(1-Ne)+Ye*Ne}function X(V,We,Ze){if(Ze<=0)return;Ee=!0;const oe=(V%1+1)%1,Ue=Q(We,0,1),M=Math.floor(oe*An)%An,P=Math.min(is-1,Math.floor(Ue*(is-1)));for(let Z=-1;Z<=1;Z++){const k=P+Z;if(!(k<0||k>=is))for(let b=-1;b<=1;b++){const q=(M+b+An)%An,Ge=b===0&&Z===0?1:b===0||Z===0?.55:.25,Ne=k*An+q;ae[Ne]=Math.min(1,ae[Ne]+Ze*Ge)}}}const te=Fn(i*409+19),ce=[];for(let V=0;V<zu;V++){const We=V<Math.floor(zu*.52);let Ze,oe,Ue;if(We){const M=V%2===0?.25:.75;Ze=(M+(M===.25?-.018:.018)+(te()-.5)*.082+1)%1,oe=.06+te()*.88;const Z=te();Ue=.0048+Math.pow(Z,2.2)*.0145}else{Ze=te()<.88?((te()-.5)*.44+1)%1:.5+(te()-.5)*.36,oe=.07+te()*.87;const P=te();Ue=.0044+Math.pow(P,2.35)*.0125}ce.push({uNorm:Ze,vNorm:oe,initU:Ze,initV:oe,radius:Ue,initRadius:Ue,maxRadius:.052+te()*.014,growRate:45e-5+Math.pow(te(),1.55)*.00145,velV:0,velU:0,sliding:!1,pinBias:.92+te()*.36,trailDistAccum:0,runArcLen:0,wobble:0,wobblePhase:te()*Math.PI*2,isRim:We,pos:new G,normal:new G(0,0,1),alive:!0,respawnDelay:0})}const ie=Array.from({length:Vu},()=>({uNorm:0,vNorm:0,baseRadius:0,life:0,maxLife:1,arcPhase:0,plumpness:.42,juiceTint:.26,pos:new G,normal:new G(0,0,1)}));let re=0;function Me(V,We,Ze,oe,Ue,M,P){const Z=ie[re];re=(re+1)%Vu,Z.uNorm=V,Z.vNorm=We,Z.baseRadius=Ze,Z.life=1,Z.maxLife=P,Z.arcPhase=oe,Z.plumpness=Ue,Z.juiceTint=M}const se=[{side:-1,slotFrac:.94,minSpan:0,lobeIndex:0,anchorU:.855,anchorV:.01,initStage:"dormant",initGrow:0,growRate:.036,scale:.84,dormantDur:2.6},{side:-1,slotFrac:.5,minSpan:.15,lobeIndex:0,anchorU:.895,anchorV:.01,initStage:"dormant",initGrow:0,growRate:.031,scale:.56,dormantDur:5.2},{side:-1,slotFrac:.06,minSpan:.07,lobeIndex:1,anchorU:.935,anchorV:.01,initStage:"dormant",initGrow:0,growRate:.029,scale:.7,dormantDur:7.8},{side:1,slotFrac:.06,minSpan:0,lobeIndex:2,anchorU:.065,anchorV:.01,initStage:"dormant",initGrow:0,growRate:.034,scale:.82,dormantDur:3.8},{side:1,slotFrac:.5,minSpan:.15,lobeIndex:2,anchorU:.105,anchorV:.01,initStage:"dormant",initGrow:0,growRate:.03,scale:.54,dormantDur:6.4},{side:1,slotFrac:.94,minSpan:.07,lobeIndex:3,anchorU:.145,anchorV:.01,initStage:"dormant",initGrow:0,growRate:.028,scale:.68,dormantDur:9}],fe=Fn(i*613+41),de=se.map((V,We)=>{const Ze=i===1?0:(fe()-.5)*.012,oe=V.initStage,Ue=V.initGrow,M=Oc(),P=new Qt(M,Y);P.name=`pendant-neck-${We}`,U.add(P);const Z=new Qt($,R);Z.visible=!1,Z.name=`pendant-fall-${We}`,U.add(Z),n.push(M);const k=(V.anchorU+Ze+1)%1;return{side:V.side,slotFrac:V.slotFrac,minSpan:V.minSpan,lobeIndex:V.lobeIndex,anchorU:k,initAnchorU:k,anchorV:V.anchorV,stage:oe,initStage:oe,grow:Ue,initGrow:Ue,stageTime:0,dormantDuration:V.dormantDur,pinchDuration:.85,recoilDuration:.42,growRate:V.growRate,scale:V.scale,neckGeo:M,neckMesh:P,fallMesh:Z,fallActive:!1,fallTime:0,fallPos:new G,fallVelY:0,fallR:.036*V.scale,recoilStartY:-.07*V.scale,slotFits:!0,minSafeAbsX:Fe.stickEdgeX+.074,maxSafeAbsX:.5}}),we=Oc();Ia(we,"growing",.72,0,1,0),n.push(we);const Re=[];{const V=Fn(i*919+173),We=Math.floor(Ou/2),Ze=.6180339887498949,oe=[[],[]];for(let Ue=0;Ue<2;Ue++){const M=Ue===0?-1:1,P=V(),Z=[];for(let k=0;k<We;k++){const b=k<16||k%3!==2,q=.03+((k+.5)*Ze+P)%1*.94,Ge=V(),Ne=me(14,We-1,k),Te=b?(.28+Math.pow(Ge,1.42)*.56)*(1-Ne*.34):(.24+Math.pow(Ge,1.55)*.34)*(1-Ne*.25);let Ye=Q(q+(V()-.5)*(b?.045:.1),.02,.98),Oe=b?(V()-.45)*.38:k%2===0?.34+V()*.22:-.46+V()*.22;const ye=.024*(1-Ne*.45);for(let Ct=0;Ct<12;Ct++){let Mt=!1;for(let ct=0;ct<Z.length;ct++){const Yt=Z[ct],pt=(Ye-Yt.s)*.34,xn=(Oe-Yt.z)*.08,rt=(Te+Yt.r)*ye+.005;if(pt*pt+xn*xn<rt*rt){Mt=!0;break}}if(!Mt)break;Ye=Q(q+(V()-.5)*.11,.02,.98),Oe=b?(V()-.45)*.46:k%2===0?.3+V()*.26:-.5+V()*.26}Z.push({s:Ye,z:Oe,r:Te});const Le=k%4,vt=Le===0?0:Le===1?.06:Le===2?.14:.22;oe[Ue].push({side:M,slotFrac:Ye,zFrac:Oe,baseScale:Te,elong:.84+Math.min(1,Te)*.24+(V()-.5)*.08,minSpan:vt,appearAt:.02+V()*.42,freq:.45+V()*.65,phase:V()*Math.PI*2})}}for(let Ue=0;Ue<We;Ue++)Re.push(oe[0][Ue],oe[1][Ue])}const ze=new G0(we,Y,Re.length);ze.name="bottom-rim-pearls",ze.frustumCulled=!1,ze.count=0,ze.visible=!1,U.add(ze),n.push(ze);const De=oM(i,{uSceneTex:r.uSceneTex,uResolution:r.uResolution,uTime:r.uTime,uDropSigma:r.uDropSigma,uDropCreamColor:r.uDropCreamColor,uDropOpacity:r.uDropOpacity,uShadowTint:r.uShadowTint,uStainColor:r.uStainColor});U.add(De.mesh),n.push(De);const it=Oc();Ia(it,"growing",.5,0,1,0);const be=new Qt(it,Y);be.name="stick-tip-final-neck",be.frustumCulled=!1,be.visible=!1,U.add(be),n.push(it);const Ce=Array.from({length:4},(V,We)=>{const Ze=new Qt($,R);return Ze.name=`stick-tip-final-drop-${We}`,Ze.frustumCulled=!1,Ze.visible=!1,U.add(Ze),{mesh:Ze,active:!1,y:Fe.stickBottomY,velY:0,radius:.025,time:0}});let H=0,nt=0,ke=0,$e="idle",pe=0,Ke=0,qe=0;const at=4;let L=0;function w(V,We,Ze){if(!V.bottomLobes)return;let oe;We<-.26?oe=0:We<0?oe=1:We<.26?oe=2:oe=3,V.bottomLobes[oe]=Math.min(1.55,V.bottomLobes[oe]+Ze*1.4)}const ne=new G,Pe=new G,_e=44,Ve=_e+1;function je(){return{u:new Float32Array(Ve),x0:new Float32Array(Ve),y0:new Float32Array(Ve),z0:new Float32Array(Ve),ny0:new Float32Array(Ve),x1:new Float32Array(Ve),y1:new Float32Array(Ve),z1:new Float32Array(Ve),ny1:new Float32Array(Ve),lowestY:1/0,flatEdgeAbsX:0,innerPouchY:1/0,maxRimAbsX:0,hasSmooth:!1}}const Se=je(),ge=je();function Xe(V,We,Ze,oe,Ue=0){const M=We<0?.985:.015,P=We<0?.752:.248;let Z=1/0,k=1/0,b=0,q=-1,Ge=0;for(let Oe=0;Oe<=_e;Oe++){const ye=M+(P-M)*(Oe/_e);oe.u[Oe]=ye,V.sampleLiveSurface(ye,.008,ne,Pe),oe.x0[Oe]=ne.x,oe.y0[Oe]=ne.y,oe.z0[Oe]=ne.z,oe.ny0[Oe]=Pe.y;const Le=Math.abs(ne.x),vt=-.5-Pe.y;if(vt>=0)Le>b&&(b=Le);else if(Oe>0&&q>=0){const Ct=q-vt,Mt=Ct>1e-6?Q(q/Ct,0,1):0,ct=Ge+(Le-Ge)*Mt;ct>b&&(b=ct)}q=vt,Ge=Le,Le>=Fe.stickEdgeX+.012&&Le<=Fe.stickEdgeX+.072&&Pe.y<=-.45&&ne.y<k&&(k=ne.y),Le>=Ze&&Pe.y<=-.72&&ne.y<Z&&(Z=ne.y),V.sampleLiveSurface(ye,.018,ne,Pe),oe.x1[Oe]=ne.x,oe.y1[Oe]=ne.y,oe.z1[Oe]=ne.z,oe.ny1[Oe]=Pe.y}let Ne=Ze,Te=-1,Ye=Ze;for(let Oe=0;Oe<=_e;Oe++){const ye=Math.abs(oe.x0[Oe]),Le=Math.min(-.74-oe.ny0[Oe],Z+.014-oe.y0[Oe]);if(ye>=Ze){if(Le>=0)ye>Ne&&(Ne=ye);else if(Oe>0&&Te>=0){const vt=Te-Le,Ct=vt>1e-6?Q(Te/vt,0,1):0,Mt=Ye+(ye-Ye)*Ct;Mt>Ne&&(Ne=Mt)}}Te=Le,Ye=ye}if(oe.lowestY=Z,oe.innerPouchY=k,Ue>0&&oe.hasSmooth){const Oe=1-Math.exp(-Ue*16);oe.flatEdgeAbsX+=(Ne-oe.flatEdgeAbsX)*Oe,oe.maxRimAbsX+=(b-oe.maxRimAbsX)*Oe}else oe.flatEdgeAbsX=Ne,oe.maxRimAbsX=b,oe.hasSmooth=!0}function J(V,We){for(let Ue=0;Ue<_e;Ue++){const M=Math.abs(V.x0[Ue]),P=Math.abs(V.x0[Ue+1]),Z=M<=P?M:P,k=M<=P?P:M;if(We>=Z&&We<=k&&(V.ny0[Ue]<=-.6||V.ny0[Ue+1]<=-.6)){const b=P-M,q=Math.abs(b)>1e-6?Q((We-M)/b,0,1):0;return{found:!0,u:V.u[Ue]+(V.u[Ue+1]-V.u[Ue])*q,y:V.y0[Ue]+(V.y0[Ue+1]-V.y0[Ue])*q,ny:V.ny0[Ue]+(V.ny0[Ue+1]-V.ny0[Ue])*q}}}let Ze=-1,oe=1/0;for(let Ue=0;Ue<=_e;Ue++){if(V.ny0[Ue]>-.66)continue;const M=Math.abs(Math.abs(V.x0[Ue])-We);M<oe&&(oe=M,Ze=Ue)}return Ze<0||oe>.05?{found:!1,u:0,y:0,ny:0}:{found:!0,u:V.u[Ze],y:V.y0[Ze],ny:V.ny0[Ze]}}function Ae(V,We,Ze,oe,Ue){const M=We<0?.8685:.1315,P=.036*Math.max(.76,oe)*1.92,Z=Ue+.022,k=V.flatEdgeAbsX-P*1.05-.014,b=k-Z;if(b<-.018)return{found:!1,u:M,v:.008,minSafeAbsX:Z,maxSafeAbsX:k,availSpan:b};const q=Math.max(Z,k),Ge=Q(b<=0?(Z+k)*.5:Z+b*Ze,Z,q),Ne=J(V,Ge);return Ne.found?{found:!0,u:Ne.u,v:.008,minSafeAbsX:Z,maxSafeAbsX:k,availSpan:b}:{found:!1,u:M,v:.008,minSafeAbsX:Z,maxSafeAbsX:k,availSpan:b}}function xe(V,We){const Ze=o.dripRate;if(Ze<=.001)return;let oe=de[0],Ue=999;for(let P=0;P<de.length;P++){const Z=Math.abs(He(V,de[P].anchorU));Z<Ue&&(Ue=Z,oe=de[P])}if(!oe)return;const M=We*Ze;oe.stage==="growing"?oe.grow=Math.min(1,oe.grow+M):oe.stage==="dormant"&&(oe.stageTime+=M*14,oe.stageTime>=oe.dormantDuration&&(oe.stage="growing",oe.grow=0,oe.stageTime=0))}function He(V,We){let Ze=We-V;return Ze>.5&&(Ze-=1),Ze<-.5&&(Ze+=1),Ze}function et(V,We,Ze){for(let M=0;M<ce.length;M++){const P=ce[M];P.alive&&V.sampleLiveSurface(P.uNorm,P.vNorm,P.pos,P.normal)}const oe=Ze?.8:.82,Ue=1.45;for(let M=0;M<ce.length;M++){const P=ce[M];if(P.alive)for(let Z=M+1;Z<ce.length;Z++){const k=ce[Z];if(!k.alive)continue;const b=P.radius+k.radius,q=b*Ue,Ge=k.pos.x-P.pos.x;if(Math.abs(Ge)>q)continue;const Ne=k.pos.y-P.pos.y;if(Math.abs(Ne)>q)continue;const Te=k.pos.z-P.pos.z;if(Math.abs(Te)>q)continue;const Ye=Ge*Ge+Ne*Ne+Te*Te,Oe=b*oe;if(Ye<Oe*Oe){const ye=P.radius>=k.radius?P:k,Le=P.radius>=k.radius?k:P,vt=ye.radius*ye.radius*ye.radius,Ct=Le.radius*Le.radius*Le.radius,Mt=vt+Ct,ct=Ct/Mt,Yt=He(ye.uNorm,Le.uNorm);if(ye.uNorm=(ye.uNorm+Yt*ct*.68+1)%1,ye.vNorm=Q(ye.vNorm+(Le.vNorm-ye.vNorm)*ct*.68,.024,.95),ye.radius=Math.min(ye.maxRadius,Math.cbrt(Mt)),Ze||(P.sliding||k.sliding?(ye.velV=Math.max(ye.velV,Le.velV)+(.06+ct*.14),ye.velU=Q(ye.velU*(1-ct)+Le.velU*ct+Yt*.08,-.025,.025),ye.sliding=!0):ye.radius>=.034*ye.pinBias&&(ye.sliding=!0,ye.velV=.12+ct*.08,ye.velU=0),ye.wobble=Math.min(1,ye.wobble+.55+ct*.65),X(ye.uNorm,ye.vNorm,.45)),V.sampleLiveSurface(ye.uNorm,ye.vNorm,ye.pos,ye.normal),Le.alive=!1,Le.radius=0,Le.velV=0,Le.velU=0,Le.sliding=!1,Le.respawnDelay=Ze?1.8+Z*.37%5:2.5+Z*.53%6.5,ye===k)break}else if(!Ze&&We>0&&Ye<q*q){const ye=Math.sqrt(Ye)||1e-4,Le=me(q,Oe,ye);if(P.sliding&&!k.sliding&&k.vNorm<P.vNorm+.02){const vt=He(P.uNorm,k.uNorm);P.velU+=Q(vt,-.03,.03)*Le*We*1.4}else if(k.sliding&&!P.sliding&&P.vNorm<k.vNorm+.02){const vt=He(k.uNorm,P.uNorm);k.velU+=Q(vt,-.03,.03)*Le*We*1.4}else{const vt=P.radius>=k.radius?P:k,Ct=P.radius>=k.radius?k:P,Mt=He(Ct.uNorm,vt.uNorm);Ct.uNorm=(Ct.uNorm+Mt*Le*We*.42+1)%1,Ct.vNorm=Q(Ct.vNorm+(vt.vNorm-Ct.vNorm)*Le*We*.42,.025,.95)}}}}}let tt=!1,gt=Fn(i*911+73);const Tt=new G,Je=new G;function wt(){ae.fill(0),Ee=!1,N=0,Pt=-999,Se.hasSmooth=!1,ge.hasSmooth=!1,gt=Fn(i*911+73);for(const V of ce)V.uNorm=V.initU,V.vNorm=V.initV,V.radius=V.initRadius,V.velV=0,V.velU=0,V.sliding=!1,V.trailDistAccum=0,V.runArcLen=0,V.wobble=0,V.alive=!0,V.respawnDelay=0;for(const V of ie)V.life=0,V.baseRadius=0;for(const V of de)V.anchorU=V.initAnchorU,V.stage=V.initStage,V.grow=V.initGrow,V.stageTime=0,V.fallActive=!1,V.fallTime=0,V.fallVelY=0,V.fallMesh.visible=!1,V.neckMesh.visible=!1,V.slotFits=!0;for(const V of ue)V.stage="dormant",V.y=Fe.yBottom-V.spawnDropY,V.radius=0,V.velY=0,V.stageTime=0,V.dormantDur=V.initDormantDur,V.mesh.visible=!1;Ot(),hn(),h.instanceCount=0,v.uniforms.uHasDropField.value=0,C.uniforms.uIceBottomY.value=Fe.yBottom,C.uniforms.uIceTopY.value=Fe.yTop,C.uniforms.uIceAmount.value=1,C.uniforms.uStickWetness.value=0,C.uniforms.uMelt.value=0,C.mesh.visible=!1,D.uniforms.uIceBottomY.value=Fe.yBottom,D.uniforms.uIceAmount.value=1,D.uniforms.uLeftFunnelY.value=Fe.yBottom,D.uniforms.uRightFunnelY.value=Fe.yBottom,D.uniforms.uLeftFunnelW.value=0,D.uniforms.uRightFunnelW.value=0,D.uniforms.uMelt.value=0,O=0,D.uniforms.uFlowRate.value=0,D.group.visible=!1,De.mesh.visible=!1,De.uniforms.uFlowPhase.value=0,De.uniforms.uReach.value=0,De.uniforms.uThickness.value=0,De.uniforms.uTailDrop.value=0,De.uniforms.uCollarAmt.value=0,H=0,nt=0,ke=0,$e="idle",pe=0,Ke=0,qe=0,L=0,be.visible=!1;for(const V of Ce)V.active=!1,V.mesh.visible=!1;ze.count=0,ze.visible=!1,tt=!1}function Bt(V,We,Ze,oe,Ue){const M=(1+V.melt*2.1)*Ue,P=me(.044,.16,V.melt);if(P<=.005)return;if(Ee){const k=Math.exp(-oe*.085);let b=!1;for(let q=0;q<ae.length;q++)ae[q]>.001?(ae[q]*=k,b=!0):ae[q]=0;Ee=b}const Z=1/An;for(let k=0;k<ce.length;k++){const b=ce[k];if(!b.alive){if(b.respawnDelay-=oe*M,b.respawnDelay<=0&&V.melt<.58){if(b.isRim){const yt=k%2===0?.25:.75,ft=yt===.25?-.018:.018;b.uNorm=(yt+ft+(gt()-.5)*.08+1)%1}else b.uNorm=((gt()-.5)*.44+1)%1;b.vNorm=.2+gt()*.74,b.radius=.0014,b.velV=0,b.velU=0,b.sliding=!1,b.trailDistAccum=0,b.runArcLen=0,b.wobble=0,b.alive=!0}continue}We.sampleLiveSurface(b.uNorm,b.vNorm,b.pos,b.normal);const q=ur(b.pos.x,b.pos.y,V),Ge=Math.hypot(b.pos.x-V.pointerX,b.pos.y-V.pointerY),Ne=V.pointerHeat*Math.exp(-(Ge*Ge)/.14),Te=1+q*3.5+Ne*6.5,Ye=Ze.sampleThickness(b.uNorm,b.vNorm);if(Ye>.36&&!b.isRim){const yt=me(.36,.72,Ye)*oe*.55,ft=Math.min(b.radius,yt*.032);if(b.radius-=ft,Ze.deposit(b.uNorm,b.vNorm,ft*4.2,1),b.vNorm=Math.max(.028,b.vNorm-me(.32,.85,Ye)*.022*oe),b.radius<.0038){b.alive=!1,b.radius=0,b.sliding=!1,b.respawnDelay=4.5+gt()*6;continue}}const Oe=Math.max(I(ae,b.uNorm,b.vNorm),me(.18,.55,Ye)),ye=I(ae,b.uNorm,Math.max(.02,b.vNorm-.025)),Le=Math.max(Oe,ye*.85),vt=I(ae,b.uNorm-Z*1.8,Math.max(.02,b.vNorm-.015)),Mt=I(ae,b.uNorm+Z*1.8,Math.max(.02,b.vNorm-.015))-vt,ct=I(le,b.uNorm,b.vNorm),Yt=I(le,b.uNorm-Z*1.5,b.vNorm),xn=I(le,b.uNorm+Z*1.5,b.vNorm)-Yt,rt=1-me(.24,.68,Ze.sampleRime(b.uNorm,b.vNorm));b.radius=Math.min(b.maxRadius,b.radius+b.growRate*.72*oe*M*Te*P*rt);const F=.88+ct*.34,st=1-Le*.35,Vt=1/(1+Ne*.5+q*.25),Nt=.036*b.pinBias*F*st*Vt;if(!b.sliding)b.radius>=Nt&&rt>.25&&(b.sliding=!0,b.velV=.12+(b.radius-Nt)*5,b.velU=0,b.runArcLen=0,b.trailDistAccum=0);else{const yt=1.65+Math.max(0,b.radius-.024)*75*(1+Le*.8)*(1+Ne*.9),ft=1.9+ct*.65*(1-Le*.55);b.velV+=(yt-b.velV*ft)*oe,b.velV=Q(b.velV,.11,.74*(1+Ne*.55));const At=Mt*(.035+b.velV*.55),Zt=-xn*(.015+b.velV*.24);let xt=0;const lt=b.uNorm>.5?b.uNorm-1:b.uNorm;if(Math.abs(lt)<.16){const Ps=(lt>0?.044:-.044)-lt;Math.abs(Ps)<.032&&(xt=Ps*.12)}b.velU+=(At+Zt+xt-b.velU*6.5)*oe;const bt=Math.min(.02,b.velV*.24);b.velU=Q(b.velU,-bt,bt);const Jt=b.uNorm,oi=b.vNorm,Zn=.14+.86*me(-.72,-.15,b.normal.y),ai=b.velV*oe*Zn,ba=b.velU*oe*Zn;b.vNorm-=ai,b.uNorm=(b.uNorm+ba+1)%1,X(b.uNorm,b.vNorm,Q(ai*14,.06,.45)),Ze.deposit(b.uNorm,b.vNorm,Q(ai*2.2,.008,.08),1);const wa=Math.hypot(ba*3.2,ai*2.1);b.trailDistAccum+=wa,b.runArcLen+=wa;const Cs=Q(b.radius*(.3+Q(b.velV*1.1,0,.1)),.005,.0125),Po=Cs*.48;if(b.trailDistAccum>=Po){const js=Math.min(5,Math.floor(b.trailDistAccum/Po));for(let eo=1;eo<=js;eo++){const Er=eo/js,Vn=(Jt+He(Jt,b.uNorm)*Er+1)%1,Ta=oi+(b.vNorm-oi)*Er;Me(Vn,Ta+b.radius*.34,Cs,b.runArcLen*28+eo*.5,.38,b.isRim?.32:.26,9.5+k%7*.85)}b.trailDistAccum-=js*Po;const Ps=1-Le*.72,ec=js*Cs*Cs*Cs*.045*Ps;b.radius=Math.max(.024,Math.cbrt(Math.max(1e-8,b.radius**3-ec)))}}if(b.wobble>.001&&(b.wobble*=Math.exp(-oe*5),b.wobblePhase+=oe*24),b.normal.y<-.44||b.vNorm<.048){let yt=999;for(let xt=0;xt<de.length;xt++){const lt=He(b.uNorm,de[xt].anchorU);Math.abs(lt)<Math.abs(yt)&&(yt=lt)}Math.abs(yt)<.036&&(b.uNorm=(b.uNorm+Q(yt,-.008,.008)*Math.min(1,oe*.65)+1)%1);const ft=me(-.78,-.25,b.normal.y);b.vNorm=Math.max(.018,b.vNorm-oe*.006*ft),b.velV*=Math.exp(-oe*6),b.velU*=Math.exp(-oe*8);const At=b.radius,Zt=Math.min(b.radius,oe*(.034+b.radius*.65));if(b.radius=Math.max(0,b.radius-Zt),At>b.radius){const xt=(At**3-b.radius**3)/7408800000000001e-20;w(V,b.pos.x,Q(xt*.75,0,.055)),xe(b.uNorm,Q(xt*.16,0,.045))}b.radius<.0018&&(b.alive=!1,b.radius=0,b.velV=0,b.velU=0,b.sliding=!1,b.respawnDelay=3.5+gt()*5.5)}}et(We,oe,!1);for(let k=0;k<ie.length;k++){const b=ie[k];b.life>0&&(b.life=Math.max(0,b.life-oe/b.maxLife))}}const z=Fn(i*733+109),Qe=10,Ie=[];for(let V=0;V<Qe;V++){const We=V<Math.floor(Qe*.6);let Ze,oe,Ue;if(We){const Z=V%2===0?.25:.75;Ze=(Z+(Z===.25?-.022:.022)+(z()-.5)*.075+1)%1,oe=.08+z()*.4,Ue=.003+Math.pow(z(),2)*.0044}else Ze=((z()-.5)*.4+1)%1,oe=.1+z()*.34,Ue=.0028+Math.pow(z(),2)*.0042;const M=7e-5+Math.pow(z(),1.95)*24e-5,P=.0285+z()*.007;Ie.push({uNorm:Ze,vNorm:oe,initU:Ze,initV:oe,radius:Ue,initRadius:Ue,maxRadius:.036,growRate:M,breakFreeR:P,isRim:We,alive:!0,absorbing:!1,respawnDelay:0,slipping:!1,velV:0,velU:0,wobble:0,wobblePhase:z()*Math.PI*2,pos:new G,normal:new G(0,0,1)})}function ht(V){s=V}function nn(){return s}function Kt(V){V.sag!==void 0&&(o.sag=Q(V.sag,0,1.6),r.uDropSag.value=o.sag),V.stretch!==void 0&&(o.stretch=Q(V.stretch,.85,1.8),r.uDropStretch.value=o.stretch),V.edgeBlur!==void 0&&(o.edgeBlur=Q(V.edgeBlur,0,1.5),r.uEdgeSoftness.value=o.edgeBlur),V.shadow!==void 0&&(o.shadow=Q(V.shadow,0,1.5),r.uShadowStrength.value=o.shadow),V.shadowBlur!==void 0&&(o.shadowBlur=Q(V.shadowBlur,.2,2),r.uShadowBlur.value=o.shadowBlur),V.rimDark!==void 0&&(o.rimDark=Q(V.rimDark,0,1.5),r.uRimDark.value=o.rimDark),V.size!==void 0&&(o.size=Q(V.size,.5,1.8),r.uDropSize.value=o.size),V.bottomPool!==void 0&&(o.bottomPool=Q(V.bottomPool,0,2)),V.dripRate!==void 0&&(o.dripRate=Q(V.dripRate,0,2)),V.bottomDrops!==void 0&&(o.bottomDrops=Math.round(Q(V.bottomDrops,0,Ou)))}function $t(){return{...o}}function Ot(){for(const V of Ie)V.uNorm=V.initU,V.vNorm=V.initV,V.radius=V.initRadius,V.alive=!0,V.absorbing=!1,V.respawnDelay=0,V.slipping=!1,V.velV=0,V.velU=0,V.wobble=0}const Wt=Fn(i*1217+53),_t=Array.from({length:Df},()=>({uNorm:0,vNorm:0,radius:0,targetRadius:0,velV:0,velU:0,slipping:!1,wobble:0,wobblePhase:0,alive:!1,pos:new G,normal:new G(0,0,1)}));let zt=0;function hn(){for(let V=0;V<_t.length;V++){const We=_t[V];We.alive=!1,We.radius=0,We.targetRadius=0,We.slipping=!1,We.velV=0,We.velU=0,We.wobble=0}zt=0}function en(V,We,Ze,oe){if(s==="off"||Ze<=.008)return;const Ue=Q(Math.round(.6+Ze*1.8),1,2);for(let M=0;M<Ue;M++){const P=Wt()*Math.PI*2,Z=Math.sqrt(Wt())*.026,k=(V+Math.cos(P)*Z*.72+1)%1,b=Q(We+Math.sin(P)*Z*1.15,.055,.945);if(oe.sampleRime(k,b)>.68)continue;const q=.003+Math.pow(Wt(),1.95)*.0052;let Ge=!1;for(let Ye=0;Ye<_t.length;Ye++){const Oe=_t[Ye];if(!Oe.alive)continue;const ye=He(Oe.uNorm,k),Le=Oe.vNorm-b;if(ye*ye*2+Le*Le<22e-5){const vt=Math.min(.03,Math.cbrt(Oe.targetRadius**3+q**3*.72));Oe.targetRadius=vt,Oe.wobble=Math.min(.85,Oe.wobble+.45),Ge=!0;break}}if(Ge)continue;let Ne=-1;for(let Ye=0;Ye<_t.length;Ye++){const Oe=(zt+Ye)%_t.length;if(!_t[Oe].alive){Ne=Oe,zt=(Oe+1)%_t.length;break}}Ne<0&&(Ne=zt,zt=(zt+1)%_t.length);const Te=_t[Ne];Te.uNorm=k,Te.vNorm=b,Te.targetRadius=q,Te.radius=q*.62,Te.velV=0,Te.velU=0,Te.slipping=!1,Te.wobble=.55,Te.wobblePhase=Wt()*Math.PI*2,Te.alive=!0}}function ve(V,We,Ze,oe,Ue){const M=1/An,P=1-Math.exp(-oe*14),Z=(.9+V.melt*1.4)*Ue;for(let k=0;k<_t.length;k++){const b=_t[k];if(b.alive){if(b.radius<b.targetRadius&&(b.radius+=(b.targetRadius-b.radius)*P),b.wobble>.001&&(b.wobble*=Math.exp(-oe*6.5),b.wobblePhase+=oe*24),V.melt>.62&&(b.targetRadius=Math.max(0,b.targetRadius-oe*.006),b.radius=Math.min(b.radius,b.targetRadius),b.radius<.0014)){b.alive=!1;continue}if(b.slipping){We.sampleLiveSurface(b.uNorm,b.vNorm,b.pos,b.normal);const q=.14+.86*me(-.72,-.15,b.normal.y),Ge=I(le,b.uNorm-M*1.5,b.vNorm),Te=-(I(le,b.uNorm+M*1.5,b.vNorm)-Ge)*.016,Ye=1.75+Math.max(0,b.radius-.018)*85;b.velV+=(Ye-b.velV*1.95)*oe,b.velV=Q(b.velV,.11,.74),b.velU+=(Te-b.velU*5)*oe,b.velU=Q(b.velU,-b.velV*.14,b.velV*.14);const Oe=b.velV*oe*q;if(b.vNorm=Math.max(.018,b.vNorm-Oe),b.uNorm=(b.uNorm+b.velU*oe*q+1)%1,Ze.deposit(b.uNorm,b.vNorm,Oe*.65,1),b.normal.y<-.44||b.vNorm<=.05){const ye=b.radius;b.targetRadius=Math.max(0,b.targetRadius-oe*.026),b.radius=Math.max(0,b.radius-oe*.026),b.velV*=Math.exp(-oe*6),b.velU*=Math.exp(-oe*8),ye>b.radius&&w(V,b.pos.x,Q((ye**3-b.radius**3)/.042**3*.75,0,.04)),b.radius<.0014&&(b.alive=!1,b.radius=0)}}else{const q=me(.055,.18,V.melt);q>.02&&b.targetRadius<.0235&&(b.targetRadius+=26e-5*oe*Z*q),b.radius>=.0205&&(b.slipping=!0,b.velV=.12+(b.radius-.0205)*6,b.velU=0)}}}}function Be(V,We,Ze){for(let M=0;M<Ie.length;M++){const P=Ie[M];!P.alive||P.radius<.0014||V.sampleLiveSurface(P.uNorm,P.vNorm,P.pos,P.normal)}const oe=Ze?.72:.74,Ue=1.38;for(let M=0;M<Ie.length;M++){const P=Ie[M];if(!(!P.alive||P.absorbing||P.radius<.002))for(let Z=M+1;Z<Ie.length;Z++){const k=Ie[Z];if(!k.alive||k.absorbing||k.radius<.002)continue;const b=P.radius+k.radius,q=b*Ue,Ge=k.pos.x-P.pos.x;if(Math.abs(Ge)>q)continue;const Ne=k.pos.y-P.pos.y;if(Math.abs(Ne)>q)continue;const Te=k.pos.z-P.pos.z;if(Math.abs(Te)>q)continue;const Ye=Ge*Ge+Ne*Ne+Te*Te,Oe=b*oe;if(Ye<Oe*Oe){let ye,Le;Math.abs(P.radius-k.radius)>.0015?(ye=P.radius>=k.radius?P:k,Le=P.radius>=k.radius?k:P):(ye=P.vNorm<=k.vNorm?P:k,Le=P.vNorm<=k.vNorm?k:P);const vt=ye.radius**3,Ct=Le.radius**3,Mt=vt+Ct,ct=Ct/Math.max(1e-10,Mt),Yt=Math.cbrt(Mt),pt=He(ye.uNorm,Le.uNorm);if(ye.uNorm=(ye.uNorm+pt*ct*.42+1)%1,ye.vNorm=Q(ye.vNorm+(Le.vNorm-ye.vNorm)*ct*.42,.006,.95),ye.radius=Math.min(ye.maxRadius,Yt),Ze||(ye.wobble=Math.min(.85,ye.wobble+.4+ct*.45),P.slipping||k.slipping?(ye.slipping=!0,ye.velV=Math.max(ye.velV,Le.velV)+.055+ct*.14,ye.velU=Q(ye.velU*(1-ct)+Le.velU*ct+pt*.04,-.022,.022)):ye.radius>=ye.breakFreeR&&(ye.slipping=!0,ye.velV=.12+(ye.radius-ye.breakFreeR)*5,ye.velU=0)),V.sampleLiveSurface(ye.uNorm,ye.vNorm,ye.pos,ye.normal),Le.alive=!1,Le.absorbing=!1,Le.radius=0,Le.slipping=!1,Le.velV=0,Le.velU=0,Le.wobble=0,Le.respawnDelay=Ze?4+Z*.73%10:7+Z*1.13%18,ye===k)break}else if(!Ze&&We>0&&Ye<q*q){const ye=Math.sqrt(Ye)||1e-4,Le=me(q,Oe,ye);if(P.slipping&&!k.slipping&&k.vNorm<P.vNorm+.025){const vt=He(P.uNorm,k.uNorm);P.velU+=Q(vt,-.025,.025)*Le*We*2.2}else if(k.slipping&&!P.slipping&&P.vNorm<k.vNorm+.025){const vt=He(k.uNorm,P.uNorm);k.velU+=Q(vt,-.025,.025)*Le*We*2.2}}}}}let Pt=-999;function Dt(V,We,Ze,oe,Ue){const M=me(.044,.16,V.melt);if(M<=.005)return;const P=1/An,Z=1-me(.42,.7,V.melt),k=(.65+V.melt*.85)*Z*Ue;for(let b=0;b<Ie.length;b++){const q=Ie[b];if(!q.alive){q.respawnDelay-=oe*k,q.respawnDelay<=0&&V.melt<.48&&(q.uNorm=(q.initU+(gt()-.5)*.08+1)%1,q.vNorm=.14+gt()*.36,q.radius=.0014,q.alive=!0,q.absorbing=!1,q.slipping=!1,q.velV=0,q.velU=0,q.wobble=0);continue}if(q.wobble>.001&&(q.wobble*=Math.exp(-oe*5.2),q.wobblePhase+=oe*22),q.absorbing){We.sampleLiveSurface(q.uNorm,q.vNorm,q.pos,q.normal);let ye=999;for(let Mt=0;Mt<de.length;Mt++){const ct=He(q.uNorm,de[Mt].anchorU);Math.abs(ct)<Math.abs(ye)&&(ye=ct)}Math.abs(ye)<.036&&(q.uNorm=(q.uNorm+Q(ye,-.008,.008)*Math.min(1,oe*.65)+1)%1);const Le=me(-.78,-.25,q.normal.y);q.vNorm=Math.max(.018,q.vNorm-oe*.005*Le);const vt=q.radius,Ct=Math.min(q.radius,oe*.022);if(q.radius=Math.max(0,q.radius-Ct),vt>q.radius){const ct=(vt**3-q.radius**3)/.042**3;w(V,q.pos.x,Q(ct*.85,0,.06)),xe(q.uNorm,Q(ct*.22,0,.028))}q.radius<.0014&&(q.alive=!1,q.absorbing=!1,q.radius=0,q.slipping=!1,q.velV=0,q.velU=0,q.respawnDelay=8+gt()*18);continue}We.sampleLiveSurface(q.uNorm,q.vNorm,q.pos,q.normal);const Ge=Math.hypot(q.pos.x-V.pointerX,q.pos.y-V.pointerY),Ne=V.pointerHeat*Math.exp(-(Ge*Ge)/.14),Te=1+Ne*6.5,Ye=1-me(.24,.68,Ze.sampleRime(q.uNorm,q.vNorm)),Oe=q.breakFreeR*1.08;if(q.radius<Oe&&Ye>.12&&(q.radius=Math.min(Oe,q.radius+q.growRate*oe*k*Te*M*Ye)),q.slipping){const ye=I(le,q.uNorm-P*1.5,q.vNorm),vt=-(I(le,q.uNorm+P*1.5,q.vNorm)-ye)*.018,Ct=.14+.86*me(-.72,-.15,q.normal.y),Mt=1.75+Math.max(0,q.radius-.018)*95;q.velV+=(Mt-q.velV*1.85)*oe,q.velV=Q(q.velV,.1,.78*(1+Ne*.55)),q.velU+=(vt-q.velU*5.2)*oe;const ct=q.velV*.14;q.velU=Q(q.velU,-ct,ct);const Yt=q.velV*oe*(1+Ne*.6)*Ct;q.vNorm=Math.max(.018,q.vNorm-Yt),q.uNorm=(q.uNorm+q.velU*oe*Ct+1)%1,Ze.deposit(q.uNorm,q.vNorm,Q(Yt*1.35,.004,.045),1),(q.normal.y<-.44||q.vNorm<=.048)&&(q.absorbing=!0,q.slipping=!1)}else{if(q.normal.y<-.5||q.vNorm<=.044){q.absorbing=!0;continue}const ye=q.breakFreeR/(1+Ne*.32);q.radius>=ye&&Ye>.25&&(q.slipping=!0,q.velV=.12+(q.radius-ye)*6,q.velU=0)}}Be(We,oe,!1)}function fn(V,We,Ze,oe,Ue){r.uTime.value=V.time;const M=Fe.stickEdgeX+.052,{yTop:P,yBot:Z,iceAmount:k,iceGone:b}=ws(V.melt);if(!tt){Xe(We,-1,M,Se),Xe(We,1,M,ge);for(let rt=0;rt<de.length;rt++){const F=de[rt],st=F.side<0?Se:ge,Vt=Ae(st,F.side,F.slotFrac,F.scale,M);F.minSafeAbsX=Vt.minSafeAbsX,F.maxSafeAbsX=Vt.maxSafeAbsX,F.slotFits=Vt.found&&Vt.availSpan>=F.minSpan,Vt.found&&(F.anchorU=Vt.u,F.anchorV=Vt.v,F.initAnchorU=Vt.u)}et(We,0,!0),Be(We,0,!0),tt=!0}const q=$l(V.melt),Ge=1-me(.45,.72,q),Ne=(.72+Math.sin(Q(q,0,.82)*Math.PI*1.22)*.42)*Ge*Ue,Te=b?0:Q(1-me(.5,.76,q),0,1);if(oe>0&&!b){s==="full"?Bt(V,We,Ze,oe,Ue):s==="minimal"&&Dt(V,We,Ze,oe,Ue),s!=="off"&&ve(V,We,Ze,oe,Ue),j.fill(0);const rt=Fe.halfWidthBottom*(1-q*.44);for(let F=0;F<Gt;F++){const st=Ze.bottomFlux[F];if(st<=1e-4)continue;const Vt=(F+.5)/Gt,Nt=Math.sin(Vt*Math.PI*2)*rt;w(V,Nt,Math.min(.045*oe,st*.075));const yt=Nt<-.26?0:Nt<0?1:Nt<.26?2:3;j[yt]+=st}if(Ge>.05)for(let F=0;F<de.length;F++){const st=j[de[F].lobeIndex];st>0&&xe(de[F].anchorU,Math.min(.012*oe,st*.01*Ge))}}const Ye=me(.18,.02,Ze.avgRime),Oe=Q(Math.max(Ze.stickWetness*1.15,me(.14,.54,V.melt)*.98*Ye),0,1);C.uniforms.uIceBottomY.value=Z,C.uniforms.uIceTopY.value=P,C.uniforms.uIceAmount.value=k,C.uniforms.uStickWetness.value=Oe,C.uniforms.uMelt.value=V.melt,C.mesh.visible=!(Oe<.08&&k>.95&&V.melt<.14),D.uniforms.uIceBottomY.value=Z,D.uniforms.uIceAmount.value=k,D.uniforms.uMelt.value=V.melt,oe>0&&(O+=oe*Q(.38+Ue*.24,.24,1.15)),D.uniforms.uFlowRate.value=O,D.group.visible=V.melt>.16&&V.melt<.9;{const rt=V.melt,F=oe===0||Math.abs(rt-L)>.04;L=rt;const st=me(.16,.44,Oe),Vt=me(.22,.36,rt)*st,Nt=me(.66,.74,rt),yt=1-me(.84,.89,rt);if(oe>0&&(H+=oe*Q(.68+Ue*.42,.35,1.9)),rt<.21||st<.04){nt=0,ke=0,$e="idle",pe=0,Ke=0,qe=0,De.mesh.visible=!1,be.visible=!1;for(const ft of Ce)ft.active=!1,ft.mesh.visible=!1}else{const ft=Vt*2.45;if(F)nt=ft,ke=Nt*1.55;else{const lt=ft>nt?1.55:3;nt+=(ft-nt)*Math.min(1,oe*lt),Nt>.01?ke=Math.min(1.65,Math.max(ke+oe*(1.35+Nt*2.5),Nt*1.55)):ke=0}const At=me(.23,.35,rt)*st*(1-me(.6,.72,rt)*.55)*(1-me(.71,.75,rt)),Zt=me(.21,.31,rt)*st*(1-me(.67,.74,rt));De.uniforms.uFlowPhase.value=H,De.uniforms.uReach.value=nt,De.uniforms.uThickness.value=At,De.uniforms.uTailDrop.value=ke,De.uniforms.uCollarAmt.value=Zt,De.mesh.visible=At>.015&&ke<1.48||Zt>.02;const xt=rt>=.71&&rt<.875&&yt>.02;if(F){for(const lt of Ce)lt.active=!1,lt.mesh.visible=!1;if(xt){const lt=Q((rt-.71)/.165,0,1);qe=Math.min(at-1,Math.floor(lt*at)),$e="growing",pe=.82,Ke=0;const bt=Ce[0];bt.active=!0,bt.y=Fe.stickBottomY-.16-lt*.36%.18,bt.velY=1.4,bt.radius=.032*(1-lt*.32),bt.time=.18}else $e=rt>=.875?"done":"idle",pe=0,Ke=0,qe=rt>=.875?at:0}else if(oe>0){xt&&$e==="idle"&&qe<at&&($e="growing",pe=.22,Ke=0);const lt=1-qe/at*.48;if($e==="growing")!xt&&pe<.75?(pe=Math.max(0,pe-oe*.45),pe<=.01&&($e="done")):(pe+=oe*(.28+.2*lt)*Ue,pe>=1&&(pe=1,$e="pinching",Ke=0));else if($e==="pinching"){if(Ke+=oe*(.95+.25*Ue),Ke>=.72){const bt=1.08-qe/at*.44,Jt=Ce.find(oi=>!oi.active)??Ce[0];Jt.active=!0,Jt.y=Fe.stickBottomY-.088*bt,Jt.velY=.34,Jt.radius=.033*bt,Jt.time=0,qe++,$e="recoiling",Ke=0}}else $e==="recoiling"&&(Ke+=oe*1.1,Ke>=.55&&(xt&&qe<at?($e="growing",pe=.05,Ke=0):($e="done",pe=0)))}if($e==="growing"||$e==="pinching"||$e==="recoiling"){const lt=(1.1-Math.min(qe,at-1)/at*.42)*(.5+.5*yt),bt=$e==="pinching"?Q(Ke/.72,0,1):0,Jt=$e==="recoiling"?Q(Ke/.55,0,1):0;Ia(it,$e,pe,$e==="pinching"?bt:Jt,1,-.058),be.position.set(0,Fe.stickBottomY+.008,0),be.scale.setScalar(lt),be.visible=lt>.14&&($e!=="growing"||pe>.04)}else be.visible=!1;for(const lt of Ce){if(!lt.active){lt.mesh.visible=!1;continue}if(oe>0&&(lt.time+=oe,lt.velY+=5.4*oe,lt.y-=lt.velY*oe,lt.y<Fe.stickBottomY-2.4||lt.time>1.8)){lt.active=!1,lt.mesh.visible=!1;continue}const bt=1.15+Q(lt.velY*.22,0,.75),Jt=1/Math.sqrt(bt);lt.mesh.position.set(0,lt.y,0),lt.mesh.scale.set(lt.radius*Jt,lt.radius*bt,lt.radius*Jt),lt.mesh.visible=!0}}}const ye=me(.14,.23,V.melt)*Ye,Le=1-me(.28,.46,V.melt),vt=ye*Le,Ct=Math.max(.25,o.dripRate);for(let rt=0;rt<ue.length;rt++){const F=ue[rt];if(vt<=.01||b&&F.stage!=="sliding"){F.mesh.visible=!1;continue}if(oe>0){if(F.stage==="dormant")!b&&k>.08&&(F.stageTime+=oe*(.62+V.melt*1.1)*Ue*Ct*ye,F.stageTime>=F.dormantDur&&(F.stage="swelling",F.stageTime=0,F.radius=.001,F.velY=0,F.y=Math.min(Fe.stickTopY-.1,Z-F.spawnDropY)));else if(F.stage==="swelling"){const Vt=(.0058+V.melt*.0072)*Ue*Ct;F.radius=Math.min(F.maxR,F.radius+Vt*oe);const Nt=Math.min(Fe.stickTopY-.1,Z-F.spawnDropY);F.y+=(Nt-F.y)*Math.min(1,oe*2.2),F.y-=F.radius*.28*oe*Ue,F.radius>=F.maxR*.84&&(F.stage="sliding",F.velY=.018)}else if(F.stage==="sliding"){if(F.y>=Fe.stickBottomY-.015){const Vt=.56+.44*Math.sin(F.y*19+F.phase),Nt=(.026+F.radius/.025*.038)*(.72+V.melt*.5)*Ue*Vt;F.velY+=(Nt-F.velY)*Math.min(1,oe*3),F.y-=F.velY*oe,F.radius=Math.max(F.maxR*.68,F.radius-45e-5*oe)}else F.velY+=4.6*oe,F.y-=F.velY*oe;F.y<Fe.stickBottomY-.85&&(F.stage="dormant",F.stageTime=0,F.radius=0,F.velY=0,F.dormantDur=2.2+(rt*1.35+V.time*.43)%2.8)}}const st=F.radius*vt;if(F.stage==="dormant"||st<.0018||F.y>Z+.015)F.mesh.visible=!1;else{const Vt=Fe.stickBottomY+Fe.stickWidth*.5,Nt=F.y<Fe.stickBottomY-.015,yt=F.stage==="sliding"?Q(F.velY/.085,0,1):0,ft=st*(Nt?.96:1.14-yt*.1),At=st*(Nt?1.85+Q(F.velY*.35,0,.8):2.05+yt*1.15),Zt=st*.96;let xt;if(F.y>=Vt)xt=F.side*(he+.0025);else if(Nt)xt=F.side*.012;else{const lt=Math.min(he,Math.max(0,Vt-F.y)),bt=Math.sqrt(Math.max(0,he*he-lt*lt));xt=F.side*(bt+.002)}F.mesh.position.set(xt,F.y,0),F.mesh.scale.set(ft,At,Zt),F.mesh.visible=!0}}const Mt=me(.044,.16,V.melt);let ct=0;if(s==="minimal"&&Mt>.005){const rt=Q(1-me(.46,.72,V.melt),0,1);for(let F=0;F<Ie.length;F++){const st=Ie[F];if(!st.alive)continue;const Vt=me(.026,.07,st.vNorm),Nt=1-me(.24,.68,Ze.sampleRime(st.uNorm,st.vNorm));if(st.radius*Te*Mt*rt*Vt*Nt<.0014)continue;We.sampleLiveSurface(st.uNorm,st.vNorm,st.pos,st.normal);const yt=me(-.88,-.46,st.normal.y),ft=st.radius*Te*Mt*rt*Vt*yt*Nt;if(ft<.0014)continue;const At=ct*3,Zt=ct*4;ct++;const xt=st.slipping?Q(st.velV*1.85,0,1):0,lt=me(.0052,.026,st.radius);let bt,Jt;st.isRim?(bt=1.12+lt*.24+xt*.48,Jt=.58+lt*.48+xt*.6):(bt=1.04+lt*.18+xt*.46,Jt=.26+lt*.46+xt*.6);const oi=st.slipping?Q(Math.atan2(st.velU*1.4,Math.max(.02,st.velV)),-.35,.35):0,Zn=st.wobble*Math.sin(st.wobblePhase);f[At]=st.pos.x,f[At+1]=st.pos.y,f[At+2]=st.pos.z,u[At]=st.normal.x,u[At+1]=st.normal.y,u[At+2]=st.normal.z,d[Zt]=ft,d[Zt+1]=bt,d[Zt+2]=st.slipping?.88:.72,d[Zt+3]=st.isRim?.42:.34,g[At]=oi,g[At+1]=Zn,g[At+2]=Jt}}else if(s==="full"&&Mt>.005){for(let rt=0;rt<ce.length;rt++){const F=ce[rt];if(!F.alive)continue;const st=me(.026,.068,F.vNorm),Vt=1-me(.24,.68,Ze.sampleRime(F.uNorm,F.vNorm));if(F.radius*Te*Mt*st*Vt<.001)continue;We.sampleLiveSurface(F.uNorm,F.vNorm,F.pos,F.normal);const Nt=me(-.88,-.46,F.normal.y),yt=F.radius*Te*Mt*st*Nt*Vt;if(yt<.001)continue;const ft=ct*3,At=ct*4;ct++;const Zt=Q(F.velV*1.85,0,1),xt=me(.012,.042,yt),lt=(F.isRim?1.12:1.05)+xt*.22+Zt*.48,bt=(F.isRim?.62:.3)+xt*.46+Zt*.6,Jt=F.sliding?Q(Math.atan2(F.velU*1.4,Math.max(.02,F.velV)),-.45,.45):0,oi=F.wobble*Math.sin(F.wobblePhase);f[ft]=F.pos.x,f[ft+1]=F.pos.y,f[ft+2]=F.pos.z,u[ft]=F.normal.x,u[ft+1]=F.normal.y,u[ft+2]=F.normal.z,d[At]=yt,d[At+1]=lt,d[At+2]=1,d[At+3]=F.isRim?.34:.24,g[ft]=Jt,g[ft+1]=oi,g[ft+2]=bt}if(Te>=.05)for(let rt=0;rt<ie.length;rt++){const F=ie[rt];if(F.life<=.01)continue;const st=me(.025,.065,F.vNorm);if(st<.02)continue;const Vt=1-F.life,Nt=me(.28,.72,Vt),yt=Math.sin(F.arcPhase*.85),ft=1-Nt*(.45-.55*yt),At=me(0,.22,F.life),Zt=F.baseRadius*Q(ft,0,1.15)*At*Te*st;if(Zt<.0018)continue;We.sampleLiveSurface(F.uNorm,F.vNorm,F.pos,F.normal);const xt=F.plumpness+Nt*Math.max(0,yt)*.42,lt=ct*3,bt=ct*4;ct++,f[lt]=F.pos.x,f[lt+1]=F.pos.y,f[lt+2]=F.pos.z,u[lt]=F.normal.x,u[lt+1]=F.normal.y,u[lt+2]=F.normal.z,d[bt]=Zt,d[bt+1]=1.18-Nt*.14,d[bt+2]=Q(xt,.3,.88),d[bt+3]=F.juiceTint,g[lt]=0,g[lt+1]=0,g[lt+2]=.2}}else ct=0;if(s!=="off"&&!b&&Te>.05)for(let rt=0;rt<_t.length&&ct<Yo;rt++){const F=_t[rt];if(!F.alive)continue;const st=me(.026,.07,F.vNorm);if(F.radius*Te*st<.0014)continue;We.sampleLiveSurface(F.uNorm,F.vNorm,F.pos,F.normal);const Vt=me(-.88,-.46,F.normal.y),Nt=F.radius*Te*st*Vt;if(Nt<.0014)continue;const yt=ct*3,ft=ct*4;ct++;const At=F.slipping?Q(F.velV*1.85,0,1):0,Zt=me(.0048,.022,F.radius),xt=1.04+Zt*.16+At*.46,lt=.24+Zt*.44+At*.6,bt=F.slipping?Q(Math.atan2(F.velU*1.4,Math.max(.02,F.velV)),-.35,.35):0,Jt=F.wobble*Math.sin(F.wobblePhase);f[yt]=F.pos.x,f[yt+1]=F.pos.y,f[yt+2]=F.pos.z,u[yt]=F.normal.x,u[yt+1]=F.normal.y,u[yt+2]=F.normal.z,d[ft]=Nt,d[ft+1]=xt,d[ft+2]=F.slipping?.86:.68,d[ft+3]=.32,g[yt]=bt,g[yt+1]=Jt,g[yt+2]=lt}N=ct,h.instanceCount=ct,v.uniforms.uHasDropField.value=ct>0?1:0,ct>0&&(x.clearUpdateRanges(),p.clearUpdateRanges(),m.clearUpdateRanges(),S.clearUpdateRanges(),x.addUpdateRange(0,ct*3),p.addUpdateRange(0,ct*3),m.addUpdateRange(0,ct*4),S.addUpdateRange(0,ct*3),x.needsUpdate=!0,p.needsUpdate=!0,m.needsUpdate=!0,S.needsUpdate=!0);const Yt=Q(me(.15,.25,V.melt)*me(.16,.01,Ze.avgRime),0,1),pt=!Se.hasSmooth||oe>0||Math.abs(V.melt-Pt)>1e-6;if(pt&&!b&&Te>.05&&(Pt=V.melt,Xe(We,-1,M,Se,oe),Xe(We,1,M,ge,oe)),!b&&Te>.05){const rt=Math.max(0,Se.maxRimAbsX-Fe.stickEdgeX),F=Math.max(0,ge.maxRimAbsX-Fe.stickEdgeX);D.uniforms.uLeftFunnelW.value=Q((rt-.045)*.19,0,.056),D.uniforms.uRightFunnelW.value=Q((F-.045)*.19,0,.056),D.uniforms.uLeftFunnelY.value=Number.isFinite(Se.innerPouchY)?Q(Se.innerPouchY+.004,Z-.095,Z):Z,D.uniforms.uRightFunnelY.value=Number.isFinite(ge.innerPouchY)?Q(ge.innerPouchY+.004,Z-.095,Z):Z}else D.uniforms.uLeftFunnelW.value=0,D.uniforms.uRightFunnelW.value=0,D.uniforms.uLeftFunnelY.value=Z,D.uniforms.uRightFunnelY.value=Z;!V.pendantPull||V.pendantPull.length<4?V.pendantPull=[0,0,0,0]:(V.pendantPull[0]=0,V.pendantPull[1]=0,V.pendantPull[2]=0,V.pendantPull[3]=0);for(let rt=0;rt<de.length;rt++){const F=de[rt];if(!b&&Te>.05){if(pt){const xt=F.scale*Te,lt=F.side<0?Se:ge,bt=Ae(lt,F.side,F.slotFrac,xt,M);if(F.maxSafeAbsX=bt.maxSafeAbsX,F.minSafeAbsX=bt.minSafeAbsX,F.slotFits=bt.found&&bt.availSpan>=F.minSpan,bt.found)if(oe===0||F.stage==="dormant")F.anchorU=bt.u,F.anchorV=bt.v;else{We.sampleLiveSurface(F.anchorU,F.anchorV,Tt,Je);const Jt=Math.abs(Tt.x);if(Jt>F.maxSafeAbsX||Jt<F.minSafeAbsX||Je.y>-.68){const Zn=He(F.anchorU,bt.u),ai=Jt>F.maxSafeAbsX+.035?1-Math.exp(-oe*24):1-Math.exp(-oe*12);F.anchorU=(F.anchorU+Zn*ai+1)%1,F.anchorV+=(bt.v-F.anchorV)*ai}else if(F.stage==="growing"&&F.grow<.45){const Zn=He(F.anchorU,bt.u),ai=1-Math.exp(-oe*2.4);F.anchorU=(F.anchorU+Q(Zn,-.012,.012)*ai+1)%1,F.anchorV+=(bt.v-F.anchorV)*ai}}}}else F.slotFits=!1;We.sampleLiveSurface(F.anchorU,F.anchorV,Tt,Je);const st=Math.abs(Tt.x),Vt=st>=F.minSafeAbsX-.008&&st<=F.maxSafeAbsX+.01&&Je.y<=-.64;F.neckMesh.position.set(Tt.x,Tt.y-.003*Te,Tt.z*.12);const Nt=F.scale*Te*Yt,yt=.036*Nt;if(oe>0&&Te>.06&&Vt){const xt=ur(Tt.x,Tt.y,V),lt=Math.hypot(Tt.x-V.pointerX,Tt.y-V.pointerY),bt=V.pointerHeat*Math.exp(-(lt*lt)/.35),Jt=1+xt*3.2+bt*6.5,oi=o.dripRate;if(F.stage==="dormant")F.slotFits&&Ge>.08&&(F.stageTime+=oe*(.72+V.melt*.55)*Ge*Ue*Jt*oi*Yt,F.stageTime>=F.dormantDuration&&(F.stage="growing",F.grow=0,F.stageTime=0));else if(F.stage==="growing"){const Zn=Math.max(bt*.9,Ne),ai=Math.min(.085*Math.max(1,Ue)*oe,F.growRate*Zn*Jt*oi*oe);F.grow+=ai,oi<=.001?F.grow=Math.min(F.grow,.94):F.grow>=1&&(F.grow=1,F.stage="pinching",F.stageTime=0)}else if(F.stage==="pinching"){if(F.stageTime+=oe,F.stageTime>=F.pinchDuration){const Zn=Ia(F.neckGeo,"pinching",1,1,Nt,F.recoilStartY);F.fallActive=!0,F.fallTime=0,F.fallR=yt,F.fallPos.set(F.neckMesh.position.x,F.neckMesh.position.y+Zn.yBulbCenter,F.neckMesh.position.z),F.fallVelY=2.05*3.55*yt/F.pinchDuration,F.recoilStartY=Zn.pinchY,F.fallMesh.visible=!0,F.stage="recoiling",F.stageTime=0,V.bottomLobes&&(V.bottomLobes[F.lobeIndex]=Math.max(.68,V.bottomLobes[F.lobeIndex]*.8))}}else F.stage==="recoiling"&&(F.stageTime+=oe,F.stageTime>=F.recoilDuration&&(F.stage="dormant",F.stageTime=0,F.grow=0,F.dormantDuration=5.2+(rt*2.3+V.time*.41)%5.4))}const ft=F.stage==="pinching"?Q(F.stageTime/F.pinchDuration,0,1):F.stage==="recoiling"?Q(F.stageTime/F.recoilDuration,0,1):0;let At=0;Te>.05&&Vt&&Yt>.01&&(F.stage==="growing"?At=me(0,.7,F.grow):F.stage==="pinching"?At=1+.16*Math.sin(ft*Math.PI*.72):F.stage==="recoiling"&&(At=Math.exp(-ft*5.2)*Math.cos(ft*Math.PI*1.55)));const Zt=At*Yt*Te;if(Math.abs(Zt)>Math.abs(V.pendantPull[F.lobeIndex])&&(V.pendantPull[F.lobeIndex]=Zt),Te<=.05||Nt<=.04||!Vt||F.stage==="dormant"||F.stage==="growing"&&F.grow<.01)F.neckMesh.visible=!1;else{const xt=Ia(F.neckGeo,F.stage,F.grow,ft,Nt,F.recoilStartY);F.neckMesh.visible=xt.visible}if(F.fallActive&&F.fallMesh.visible){F.fallTime+=oe;const xt=F.fallVelY*F.fallTime+.5*8.2*F.fallTime*F.fallTime;F.fallMesh.position.set(F.fallPos.x,F.fallPos.y-xt,F.fallPos.z);const bt=1+Math.exp(-F.fallTime*5.2)*Math.cos(F.fallTime*15)*.26,Jt=1/Math.sqrt(Math.max(.5,bt));F.fallMesh.scale.set(F.fallR*Jt,F.fallR*bt,F.fallR*Jt),F.fallMesh.position.y<-3.6&&(F.fallActive=!1,F.fallMesh.visible=!1)}}const xn=Math.round(Q(o.bottomDrops,0,Re.length));if(xn<=0||b||Te<=.05||Yt<=.01)ze.count=0,ze.visible=!1;else{const rt=me(.4,.975,q),F=Fe.halfDepth*(1-q*.34)*(1-Math.pow(rt,1.5)*.88),st=ze.instanceMatrix.array;let Vt=0;for(let Nt=0;Nt<xn;Nt++){const yt=Re[Nt],ft=yt.side<0?Se:ge,At=me(yt.appearAt*.4,Math.min(1,yt.appearAt*.4+.36),Yt);if(At<=.02)continue;const Zt=.9+.1*Math.sin(V.time*yt.freq+yt.phase);let xt=yt.baseScale*(.45+.55*Te)*At*Zt;if(xt<.08)continue;const bt=.028*xt*1.48,Jt=Fe.stickEdgeX+bt+.024,Zn=ft.flatEdgeAbsX-bt*1.12-.012-Jt,ai=me(yt.minSpan-.015,yt.minSpan+.045,Zn);if(Zn<=.002||ai<=.02)continue;xt*=ai;const ba=Jt+yt.slotFrac*Zn,wa=J(ft,ba);if(!wa.found)continue;const Cs=yt.side*ba,Po=yt.zFrac*Math.max(.016,F*.34),js=wa.y-.0036*Te;let Ps=1;const ec=.028*xt;for(let Ta=0;Ta<de.length;Ta++){const Ds=de[Ta];if(Ds.side!==yt.side||!Ds.neckMesh.visible||Ds.stage==="dormant")continue;const up=.036*Ds.scale*Te*Yt*(Ds.stage==="growing"?.35+.65*Ds.grow:1),Uh=Math.hypot(Cs-Ds.neckMesh.position.x,Po-Ds.neckMesh.position.z),Bh=up*.92+ec*.85;Uh<Bh&&(Ps=Math.min(Ps,me(.4,1,Uh/Math.max(1e-4,Bh))))}if(xt*=Ps,xt<.08)continue;const eo=xt,Er=xt*yt.elong,Vn=Vt*16;st[Vn]=eo,st[Vn+1]=0,st[Vn+2]=0,st[Vn+3]=0,st[Vn+4]=0,st[Vn+5]=Er,st[Vn+6]=0,st[Vn+7]=0,st[Vn+8]=0,st[Vn+9]=0,st[Vn+10]=eo,st[Vn+11]=0,st[Vn+12]=Cs,st[Vn+13]=js,st[Vn+14]=Po,st[Vn+15]=1,Vt++}ze.count=Vt,ze.visible=Vt>0,Vt>0&&(ze.instanceMatrix.needsUpdate=!0)}if(oe>0&&V.bottomLobes){const rt=1-Math.exp(-oe*.28);for(let F=0;F<4;F++)V.bottomLobes[F]+=(1-V.bottomLobes[F])*rt}}function tn(){for(const V of n)V.dispose()}return{fieldScene:A,resolveScene:T,pendantGroup:U,uniforms:r,setMode:ht,getMode:nn,setDebugParams:Kt,getDebugParams:$t,hasDropField:()=>N>0,setRecipe:l,spawnFrostMeltDrops:en,clearFrostDrops:hn,reset:wt,update:fn,dispose:tn}}function uM(i=26){const e=new xa(1,1,1,i,i,i),t=e.attributes.position,n=new G,s=.24,o=.5-s;for(let a=0;a<t.count;a++){n.fromBufferAttribute(t,a);const r=Math.max(-o,Math.min(o,n.x)),l=Math.max(-o,Math.min(o,n.y)),c=Math.max(-o,Math.min(o,n.z)),h=n.x-r,f=n.y-l,u=n.z-c,d=Math.hypot(h,f,u)||1e-6,g=h/d,x=f/d,p=u/d;let m=r+g*s,S=l+x*s,y=c+p*s;const _=.012*Math.sin(m*5.8+S*3.2)*Math.cos(y*5.1)+.008*Math.cos(S*7.4-y*4.6);m+=g*_,S+=x*_,y+=p*_,t.setXYZ(a,m*1.18,S*1.14,y*1.18)}return e.computeVertexNormals(),e}const Ah=`
  float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }
  float noise3(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n000 = hash31(i + vec3(0,0,0));
    float n100 = hash31(i + vec3(1,0,0));
    float n010 = hash31(i + vec3(0,1,0));
    float n110 = hash31(i + vec3(1,1,0));
    float n001 = hash31(i + vec3(0,0,1));
    float n101 = hash31(i + vec3(1,0,1));
    float n011 = hash31(i + vec3(0,1,1));
    float n111 = hash31(i + vec3(1,1,1));
    return mix(
      mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
      mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
      f.z
    );
  }
`;function hM(){return new bn({transparent:!0,depthWrite:!0,side:di,vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPos;
      void main() {
        vLocalPos = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPos;
      ${Ah}

      void main() {
        vec3 N = normalize(vWorldNormal);
        vec3 V = normalize(cameraPosition - vWorldPos);
        float ndv = clamp(dot(N, V), 0.0, 1.0);
        float fresnel = 0.05 + 0.95 * pow(1.0 - ndv, 3.0);

        vec3 pIn = vLocalPos * 4.4 - V * 0.35;
        float frost1 = noise3(pIn * 1.4);
        float frost2 = noise3(pIn * 3.2 + vec3(2.3, -1.7, 0.8));
        float internalCore = smoothstep(0.70, 0.14, length(vLocalPos));
        float frostCloud = smoothstep(0.40, 0.76, frost1 * 0.65 + frost2 * 0.35) * internalCore;
        float bubbles = smoothstep(0.76, 0.88, noise3(vLocalPos * 16.0 + vec3(4.1, 1.2, -3.5))) * internalCore;

        // Luminous clear glacial crystal (bright white-aqua clarity, never muddy grey!)
        vec3 iceDeep   = vec3(0.66, 0.84, 0.95);
        vec3 iceGlass  = vec3(0.90, 0.96, 1.00);
        vec3 iceWhite  = vec3(1.00, 1.00, 1.00);

        vec3 lKey = normalize(vec3(-0.54, 0.78, 0.62));
        vec3 lRim = normalize(vec3(0.76, 0.46, -0.28));
        vec3 lBot = normalize(vec3(0.18, -0.82, 0.50));

        float wrapKey = clamp((dot(N, lKey) + 0.58) / 1.58, 0.0, 1.0);
        float botCaustic = pow(max(dot(N, lBot), 0.0), 1.8) * 0.75;
        float topFacet = smoothstep(0.42, 0.90, N.y);
        float refractStreak = pow(clamp(sin((vLocalPos.x * 4.6 - vLocalPos.y * 3.8 + vLocalPos.z * 2.4)) * 0.5 + 0.5, 0.0, 1.0), 3.0) * internalCore;

        vec3 col = mix(iceDeep, iceGlass, wrapKey * 0.66 + 0.34);
        col = mix(col, iceWhite, clamp(frostCloud * 0.62 + botCaustic * 0.86 + topFacet * 0.48 + refractStreak * 0.42 + bubbles * 0.95, 0.0, 0.97));

        float darkContour = smoothstep(0.48, 0.15, ndv) * smoothstep(0.02, 0.18, ndv);
        col = mix(col, vec3(0.42, 0.66, 0.82), darkContour * 0.42);
        col = mix(col, vec3(1.0, 1.0, 1.0), fresnel * 0.92);

        vec3 h1 = normalize(lKey + V);
        vec3 h2 = normalize(lRim + V);
        float spec1 = pow(max(dot(N, h1), 0.0), 105.0);
        float spec2 = pow(max(dot(N, h2), 0.0), 40.0);
        float windowGlint = smoothstep(0.72, 0.94, dot(reflect(-V, N), lKey));
        col += vec3(1.9, 1.96, 2.0) * (spec1 + windowGlint * 0.45) + vec3(0.95, 1.0, 1.08) * spec2 * 0.60;

        float alpha = clamp(0.40 + fresnel * 0.54 + frostCloud * 0.25 + botCaustic * 0.26 + bubbles * 0.38 + spec1 * 0.55 + windowGlint * 0.30, 0.0, 0.98);
        gl_FragColor = vec4(col, alpha);
      }
    `})}function dM(){return new bn({transparent:!0,depthWrite:!0,side:di,vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPos;
      void main() {
        vLocalPos = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPos;
      ${Ah}

      void main() {
        vec3 N = normalize(vWorldNormal);
        vec3 V = normalize(cameraPosition - vWorldPos);
        float ndv = clamp(dot(N, V), 0.0, 1.0);
        float fresnel = pow(1.0 - ndv, 3.0);

        vec3 milkShadow = vec3(0.73, 0.64, 0.52);
        vec3 milkMid    = vec3(0.95, 0.89, 0.78);
        vec3 milkLit    = vec3(1.00, 0.97, 0.90);
        vec3 milkSss    = vec3(1.05, 0.93, 0.74);

        vec3 lKey = normalize(vec3(-0.52, 0.76, 0.62));
        vec3 lFill = normalize(vec3(0.66, 0.25, 0.55));
        vec3 lRim = normalize(vec3(0.45, -0.40, -0.70));

        float nKey = clamp((dot(N, lKey) + 0.42) / 1.42, 0.0, 1.0);
        float nFill = clamp((dot(N, lFill) + 0.35) / 1.35, 0.0, 1.0);
        float sssWrap = pow(clamp(1.0 - abs(dot(N, lKey)), 0.0, 1.0), 1.6) * 0.28 + fresnel * 0.34;
        float grain = (noise3(vLocalPos * 14.0) - 0.5) * 0.035;

        vec3 col = mix(milkShadow, milkMid, smoothstep(0.05, 0.78, nKey * 0.78 + nFill * 0.28));
        col = mix(col, milkLit, smoothstep(0.62, 1.0, nKey) * 0.65);
        col += milkSss * sssWrap * 0.22 + vec3(grain);

        vec3 h1 = normalize(lKey + V);
        vec3 h2 = normalize(lRim + V);
        float spec1 = pow(max(dot(N, h1), 0.0), 34.0);
        float spec2 = pow(max(dot(N, h2), 0.0), 22.0);
        col += vec3(1.0, 0.98, 0.94) * (spec1 * 0.42 + spec2 * 0.16);

        float edgeShade = smoothstep(0.32, 0.02, ndv);
        col = mix(col, vec3(0.68, 0.58, 0.46), edgeShade * 0.28);

        gl_FragColor = vec4(col, 0.99);
      }
    `})}function ol(i,e,t,n,s,o,a,r){i.readRenderTargetPixels(e,0,0,t,t,n);const l=a.data;for(let c=0;c<t;c++){const h=(t-1-c)*t*4,f=c*t*4;for(let u=0;u<t;u++){const d=h+u*4,g=f+u*4,x=n[d+3];if(x===0){l[g]=0,l[g+1]=0,l[g+2]=0,l[g+3]=0;continue}if(r)for(let p=0;p<3;p++){const m=n[d+p]/255,S=m<=.0031308?m*12.92:1.055*Math.pow(m,1/2.4)-.055;l[g+p]=Math.max(0,Math.min(255,Math.round(S*255)))}else l[g]=n[d],l[g+1]=n[d+1],l[g+2]=n[d+2];l[g+3]=x}}return o.putImageData(a,0,0),s.toDataURL("image/png")}const fM={mango:{core:[1.26,.72,.04],mid:[.92,.38,.012],deep:[.52,.14,.004],caustic:[1.75,1.18,.18],creaminess:.38,pulp:.44,bendX:-.18,beadSide:1},lemon:{core:[1.38,1.3,.12],mid:[.98,.86,.03],deep:[.56,.46,.01],caustic:[1.9,1.82,.46],creaminess:.1,pulp:.22,bendX:.16,beadSide:-1},orange:{core:[1.38,.4,.025],mid:[.98,.17,.008],deep:[.58,.05,.003],caustic:[1.88,.8,.12],creaminess:.2,pulp:.4,bendX:-.14,beadSide:1},watermelon:{core:[1.38,.28,.38],mid:[.98,.1,.19],deep:[.56,.026,.075],caustic:[1.85,.72,.78],creaminess:.04,pulp:.06,bendX:.2,beadSide:-1},strawberry:{core:[1.18,.08,.09],mid:[.76,.028,.036],deep:[.36,.008,.014],caustic:[1.72,.36,.28],creaminess:.08,pulp:.1,bendX:-.16,beadSide:1},raspberry:{core:[.98,.038,.3],mid:[.58,.012,.15],deep:[.24,.004,.06],caustic:[1.58,.26,.64],creaminess:.08,pulp:.12,bendX:.15,beadSide:-1},blueberry:{core:[.24,.16,1.12],mid:[.095,.055,.66],deep:[.032,.014,.28],caustic:[.68,.54,1.72],creaminess:.12,pulp:.1,bendX:-.2,beadSide:1},banana:{core:[1.16,.96,.36],mid:[.9,.7,.2],deep:[.52,.35,.07],caustic:[1.34,1.16,.58],creaminess:.76,pulp:.28,bendX:.17,beadSide:-1},chocolate:{core:[.22,.095,.042],mid:[.115,.044,.017],deep:[.036,.012,.004],caustic:[.4,.2,.095],creaminess:.94,pulp:.04,bendX:-.15,beadSide:1}};function pM(i,e){const t=new Rs(1,48,36),n=t.attributes.position,s=new G;for(let o=0;o<n.count;o++){s.fromBufferAttribute(n,o);const a=s.y,r=Math.max(0,a),l=Math.max(0,-a),c=1+.18*l*(1-.42*l),h=Math.pow(Math.max(0,1-r*.78),.7),f=(a>=0?h:c)*.56,u=Math.atan2(s.z,s.x),d=1+.026*Math.sin(u*2+e)*(1-r*.65),g=s.x*f*d+i*r*r*.88,x=a*.68+r*r*.14-.07,p=s.z*f*(.94+.04*l);n.setXYZ(o,g,x,p)}return t.computeVertexNormals(),t}function mM(i,e){return new bn({transparent:!0,depthWrite:!0,side:di,uniforms:{uCore:{value:new G(...i.core)},uMid:{value:new G(...i.mid)},uDeep:{value:new G(...i.deep)},uCaustic:{value:new G(...i.caustic)},uCreaminess:{value:i.creaminess},uPulp:{value:i.pulp},uSeed:{value:e}},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPos;
      void main() {
        vLocalPos = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;
      uniform vec3 uCore;
      uniform vec3 uMid;
      uniform vec3 uDeep;
      uniform vec3 uCaustic;
      uniform float uCreaminess;
      uniform float uPulp;
      uniform float uSeed;

      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPos;
      ${Ah}

      void main() {
        vec3 N = normalize(vWorldNormal);
        vec3 V = normalize(cameraPosition - vWorldPos);
        float ndv = clamp(dot(N, V), 0.0, 1.0);
        float fresnel = 0.03 + 0.97 * pow(1.0 - ndv, 3.6);

        vec3 lKey = normalize(vec3(-0.56, 0.72, 0.66));
        vec3 lRim = normalize(vec3(0.76, 0.36, -0.34));
        vec3 lCaustic = normalize(vec3(0.32, -0.82, 0.48));

        float wrapKey = clamp((dot(N, lKey) + 0.46) / 1.46, 0.0, 1.0);
        float centerThick = pow(ndv, 1.15);

        // Refracted internal volume color: luminous translucent heart -> saturated deep jewel edge
        vec3 jewelCol = mix(uDeep, uMid, smoothstep(0.08, 0.62, ndv));
        jewelCol = mix(jewelCol, uCore, smoothstep(0.36, 0.95, centerThick * 0.78 + wrapKey * 0.32));

        // Signature macro-photography backlit liquid caustic crescent concentrated in the lower-right belly!
        float causticZone = pow(max(dot(N, lCaustic), 0.0), 1.65) * smoothstep(0.06, 0.56, ndv);
        float bellyFocus = smoothstep(0.38, -0.42, vLocalPos.y);
        float causticAmt = causticZone * (0.55 + 0.55 * bellyFocus) * (1.0 - uCreaminess * 0.82);
        jewelCol = mix(jewelCol, uCaustic, clamp(causticAmt * 0.78, 0.0, 0.84));

        // Subtle organic suspended juice pulp shimmer (mango / orange / lemon)
        if (uPulp > 0.02) {
          float pN = noise3(vLocalPos * 12.5 + vec3(uSeed, -uSeed * 0.7, uSeed * 1.3));
          float pulpGlow = smoothstep(0.46, 0.86, pN) * uPulp * smoothstep(0.18, 0.72, ndv);
          jewelCol = mix(jewelCol, uCore * 1.16 + vec3(0.06), pulpGlow * 0.28);
        }

        // Creamy glossy liquid shading for banana puree & melted dark chocolate ganache
        vec3 creamCol = mix(uDeep, uMid, smoothstep(0.05, 0.65, wrapKey));
        creamCol = mix(creamCol, uCore, smoothstep(0.55, 1.0, wrapKey) * 0.72);
        creamCol += uCaustic * pow(1.0 - ndv, 2.4) * 0.22;

        vec3 col = mix(jewelCol, creamCol, uCreaminess);

        // Crisp dark refractive TIR inner contour (makes floating clear drops pop like liquid jewels on warm taupe!)
        float tirRing = smoothstep(0.46, 0.14, ndv) * smoothstep(0.01, 0.16, ndv);
        col = mix(col, uDeep * 0.52, tirRing * mix(0.62, 0.28, uCreaminess));

        // Crisp refined studio softbox highlight crescent + pinpoint liquid catchlight (never washes out jewel color!)
        vec3 R = reflect(-V, N);
        float softbox = smoothstep(0.89, 0.975, dot(R, lKey));
        float rimStrip = smoothstep(0.84, 0.96, dot(R, lRim)) * (0.40 + 0.60 * fresnel);

        vec3 h1 = normalize(lKey + V);
        vec3 h2 = normalize(lRim + V);
        float specSharp = pow(max(dot(N, h1), 0.0), mix(180.0, 110.0, uCreaminess));
        float specBroad = pow(max(dot(N, h1), 0.0), mix(44.0, 30.0, uCreaminess));
        float specRim = pow(max(dot(N, h2), 0.0), 68.0);

        vec3 specTint = mix(vec3(1.0, 0.99, 0.97), vec3(1.04, 0.94, 0.86), uCreaminess);
        col += specTint * (specSharp * 1.85 + softbox * 0.58 + specBroad * 0.16 + rimStrip * 0.30 + specRim * 0.36);

        // Delicate luminous studio rim bounce along silhouette
        col = mix(col, mix(uCaustic * 0.72 + vec3(0.32), vec3(1.0, 0.98, 0.95), 0.40), fresnel * mix(0.32, 0.16, uCreaminess));

        float alpha = clamp(
          mix(0.84 + fresnel * 0.15 + causticAmt * 0.12 + specSharp * 0.40 + softbox * 0.20, 0.99, uCreaminess),
          0.0,
          0.995
        );
        gl_FragColor = vec4(col, alpha);
      }
    `})}function gM(i,e){const t=fM[i],n=new Ki,s=mM(t,e*3.7+1.3),o=pM(t.bendX,e*1.45),a=new Qt(o,s);n.add(a);const r=new Rs(.115,22,16),l=new Qt(r,s);l.scale.set(.95,1.18,.95),l.position.set(t.beadSide*.44,.44,.08),l.rotation.z=-t.beadSide*.42,n.add(l);const c=new Rs(.062,16,12),h=new Qt(c,s);return h.position.set(t.beadSide*.58,.16,.12),n.add(h),n.rotation.set(.08,t.beadSide*-.14,0),{object:n,dispose(){o.dispose(),r.dispose(),c.dispose(),s.dispose()}}}let al=null;function vM(i,e){if(al)return al;const t=256,n=new Ti(t,t,{type:Xn,format:xi,samples:0,depthBuffer:!0,stencilBuffer:!1}),s=new ii;e&&(s.environment=e);const o=new Di(28,1,.1,20);o.position.set(0,.18,3.7),o.lookAt(0,0,0);const a=new fo(16774891,2.55);a.position.set(-2.4,3.2,2.8);const r=new fo(16771030,1.15);r.position.set(2.8,1,2.4);const l=new fo(16777215,1.45);l.position.set(.4,2,-3.2);const c=new nf(16775408,14205876,.95);s.add(a,r,l,c);const h=i.getRenderTarget(),f=new Ut;i.getClearColor(f);const u=i.getClearAlpha(),d=i.autoClear,g=i.toneMapping,x=i.toneMappingExposure,p=new Uint8Array(t*t*4),m=document.createElement("canvas");m.width=t,m.height=t;const S=m.getContext("2d"),y=S.createImageData(t,t),_={},A={},E={};try{i.autoClear=!0,i.setRenderTarget(n),i.setClearColor(0,0);const v=uM(26),T=hM(),U=dM(),C=new Qt(v,T);C.rotation.set(.42,-.62,.14),s.add(C),i.toneMapping=ji,i.clear(!0,!0,!1),i.render(s,o),_.water=ol(i,n,t,p,m,S,y,!1),C.material=U,C.rotation.set(.42,-.58,.12),i.clear(!0,!0,!1),i.render(s,o),_.coconut=ol(i,n,t,p,m,S,y,!1),s.remove(C),v.dispose(),T.dispose(),U.dispose(),i.toneMapping=$u,i.toneMappingExposure=1.12,o.position.set(0,.06,3.35),o.lookAt(0,.02,0);for(let D=0;D<dr.length;D++){const O=dr[D],Y=gM(O.id,D);s.add(Y.object),i.clear(!0,!0,!1),i.render(s,o),A[O.id]=ol(i,n,t,p,m,S,y,!0),s.remove(Y.object),Y.dispose()}i.toneMappingExposure=1.18,o.position.set(0,.08,3.25),o.lookAt(0,0,0);for(const D of ha){const O=$_(D.id,1);s.add(O.object),i.clear(!0,!0,!1),i.render(s,o),E[D.id]=ol(i,n,t,p,m,S,y,!0),s.remove(O.object),O.dispose()}}finally{i.setRenderTarget(h),i.setClearColor(f,u),i.autoClear=d,i.toneMapping=g,i.toneMappingExposure=x,n.dispose()}return al={bases:_,flavors:A,toppings:E},al}const Si=new URLSearchParams(window.location.search);Si.has("clean")&&document.documentElement.classList.add("clean");const zc=Number(Si.get("seed"));let Ei=Number.isFinite(zc)&&zc>=1?Math.floor(zc):1;const n0=Si.has("melt")?Number(Si.get("melt")):si,pa=Q(Number.isFinite(n0)?n0:si,0,1);let cs=Si.has("paused");const If="codevember-03-melt-settings-v2",xM="codevember-03-melt-settings-v1",gs={speed:1,turntable:0,frost:.8,bubbles:.55},SM="off",_M="off";function mi(i,e,t,n){return typeof i=="number"&&Number.isFinite(i)?Q(i,t,n):e}function MM(){try{let i=window.localStorage.getItem(If),e=!1;if(i||(i=window.localStorage.getItem(xM),e=!!i),!i)return null;const t=JSON.parse(i);if(!t||typeof t!="object")return null;const n={speed:mi(t.speed,gs.speed,.2,6),turntable:e?gs.turntable:mi(t.turntable,gs.turntable,0,1),frost:mi(t.frost,gs.frost,.1,1),bubbles:mi(t.bubbles,gs.bubbles,0,1)};(t.drops==="minimal"||t.drops==="full"||t.drops==="off")&&(n.drops=t.drops),(t.onFall==="pause"||t.onFall==="slow"||t.onFall==="off")&&(n.onFall=t.onFall);const s=t.dropDebug;return s&&typeof s=="object"&&(n.dropDebug={sag:mi(s.sag,Pi.sag,0,1.6),stretch:mi(s.stretch,Pi.stretch,.85,1.8),edgeBlur:mi(s.edgeBlur,Pi.edgeBlur,0,1.5),shadow:mi(s.shadow,Pi.shadow,0,1.5),shadowBlur:mi(s.shadowBlur,Pi.shadowBlur,.2,2),rimDark:mi(s.rimDark,Pi.rimDark,0,1.5),size:mi(s.size,Pi.size,.5,1.8),bottomPool:mi(s.bottomPool,Pi.bottomPool,0,2),dripRate:mi(s.dripRate,Pi.dripRate,0,2),bottomDrops:Math.round(mi(s.bottomDrops,Pi.bottomDrops,0,Ou))}),n}catch{return null}}const ho=MM(),rl=Si.get("drops");let Rh=rl==="full"||rl==="off"||rl==="minimal"?rl:ho?.drops??SM;const ll=Si.get("fall");let Ka=ll==="pause"||ll==="slow"||ll==="off"?ll:ho?.onFall??_M,ti=0;const Gi=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches||/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function Ff(){return Math.min(window.devicePixelRatio||1,Gi?1.35:2)}function br(){return{w:Math.max(1,window.innerWidth),h:Math.max(1,window.innerHeight)}}const hi=document.getElementById("c"),ut=new g_({canvas:hi,antialias:!1,powerPreference:"high-performance",alpha:!1}),_o=br();ut.setPixelRatio(Ff());ut.setSize(_o.w,_o.h);ut.toneMapping=ji;ut.outputColorSpace=Rn;ut.autoClear=!1;let Ql=!1,dn=!0,Ml=!0;hi.addEventListener("webglcontextlost",i=>{i.preventDefault(),Ql=!0});hi.addEventListener("webglcontextrestored",()=>{Ql=!1,Ih(),wr(),dn=!0});const Rt=new Di(27,_o.w/_o.h,.1,30),yM=new G(0,-1.56,7.09),bM=new G(0,-.22,0),wM=new G(0,-1.58,6.52),TM=new G(0,-.35,0),Ch=new G,Mo=new G;let Gu=!1;function Uf(i){const e=i.w<=860&&i.h>i.w;return Ch.copy(e?wM:yM),Mo.copy(e?TM:bM),e}Gu=Uf(_o);Rt.position.copy(Ch);Rt.lookAt(Mo);const EM=1.15;let $a=0,i0=!1;const cl=new G;function Bf(i){const e=Q((i-.05)/.72,0,1);return e*e*(3-2*e)*EM}function _a(i,e=!1){const t=Bf(dt.melt),n=t-$a;if(Math.abs(n)<1e-4){$a=t;return}const s=e?n:n*(1-Math.exp(-i*3.8));cl.copy(Rt.position).sub(It.target);const o=cl.length();if(o<1e-4)return;const a=Q(o+s,It.minDistance,It.maxDistance),r=a-o;Math.abs(r)>1e-5&&(cl.multiplyScalar(a/o),Rt.position.copy(It.target).add(cl),Rt.updateMatrixWorld(),dn=!0),$a+=e?n:r}const It=new x_(Rt,hi);It.target.copy(Mo);It.enableDamping=!0;It.dampingFactor=.065;It.rotateSpeed=.72;It.enablePan=!1;It.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.ROTATE};It.touches={ONE:null,TWO:uo.DOLLY_ROTATE};It.minDistance=3.2;It.maxDistance=9.8;It.minPolarAngle=Math.PI*.5-.35;It.maxPolarAngle=Math.PI*.5+.31;It.enabled=!0;It.update();It.saveState();let mr=!1;It.addEventListener("start",()=>{mr=!0,ci()});It.addEventListener("end",()=>{mr=!1,ci()});It.addEventListener("change",()=>{dn=!0});let Va=null;function Ph(){return Va||(Va=X_(ut),pn.environment=Va),Va}function AM(){const i=new Ki,e=new nf(16774379,14202539,.95);i.add(e);const t=new fo(16775667,1.45);t.position.set(-2.6,2.2,3.2),i.add(t);const n=new fo(16774124,1.15);n.position.set(2.8,1.4,2.4),i.add(n);const s=new fo(16774890,2.4);return s.position.set(0,.4,-4),i.add(s),i}const Ji=new fh(-1,1,1,-1,0,1),Dh=new qs(2,2),Nh={uHaloCenter:{value:new ot(.5,.54)},uAspect:{value:_o.w/_o.h}},RM=new bn({depthTest:!1,depthWrite:!1,uniforms:Nh,vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    precision highp float;
    uniform vec2 uHaloCenter;
    uniform float uAspect;
    varying vec2 vUv;

    void main() {
      // Aspect-corrected oval studio lightbox halo sitting directly behind & wrapping the popsicle!
      vec2 d = vUv - uHaloCenter;
      d.x *= uAspect * 1.24;
      d.y *= 0.88;
      float r = length(d);

      // Luminous warm creamy-ivory studio lightbox peak right behind the translucent ice (linear HDR!)
      vec3 centerGlow = vec3(1.62, 1.44, 1.22);
      // Warm peach-cream halo aura visibly hugging the popsicle silhouette
      vec3 haloWarm = vec3(0.96, 0.82, 0.70);
      // Warm muted taupe-blush studio sweep toward edges & corners (matches reference photo!)
      vec3 edgeTaupe = vec3(0.41, 0.31, 0.28);
      vec3 cornerDeep = vec3(0.30, 0.22, 0.20);

      float coreMask = exp(-r * r * 5.8);
      float haloMask = exp(-r * r * 2.15);
      float vig = smoothstep(0.48, 1.32, r);

      vec3 col = mix(edgeTaupe, haloWarm, haloMask);
      col = mix(col, centerGlow, coreMask);
      col = mix(col, cornerDeep, vig * 0.72);

      // Alpha = 0.0 tags studio backdrop air (solids write 1.0, ice writes 0.25 / 0.55 near fruit contact)
      gl_FragColor = vec4(col, 0.0);
    }
  `}),Ja=new ii;Ja.add(new Qt(Dh,RM));const co={uTex:{value:null},uDir:{value:new ot(1,0)},uTexelSize:{value:new ot(1/640,1/360)}},CM=new bn({depthTest:!1,depthWrite:!1,uniforms:co,vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    precision highp float;
    uniform sampler2D uTex;
    uniform vec2 uDir;
    uniform vec2 uTexelSize;
    varying vec2 vUv;

    void main() {
      vec2 stepUv = uDir * uTexelSize;
      vec4 sum = texture2D(uTex, vUv) * 0.227027;
      sum += texture2D(uTex, clamp(vUv + stepUv * 1.3846, vec2(0.002), vec2(0.998))) * 0.316216;
      sum += texture2D(uTex, clamp(vUv - stepUv * 1.3846, vec2(0.002), vec2(0.998))) * 0.316216;
      sum += texture2D(uTex, clamp(vUv + stepUv * 3.2307, vec2(0.002), vec2(0.998))) * 0.070270;
      sum += texture2D(uTex, clamp(vUv - stepUv * 3.2307, vec2(0.002), vec2(0.998))) * 0.070270;
      gl_FragColor = sum;
    }
  `}),Fl=new ii;Fl.add(new Qt(Dh,CM));const Fa=new zs({colorWrite:!1,depthWrite:!0,depthTest:!0,side:Wn}),Ts={uTex:{value:null},uWireTex:{value:null},uReveal:{value:0},uBg:{value:new G(213,197,188).divideScalar(255)},uInk:{value:new G(28,28,28).divideScalar(255)},uTime:{value:0},uMaskOnly:{value:0}},PM=new bn({depthTest:!1,depthWrite:!1,uniforms:Ts,vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    precision highp float;
    uniform sampler2D uTex;
    uniform sampler2D uWireTex;
    uniform float uReveal;
    uniform vec3 uBg;
    uniform vec3 uInk;
    uniform float uTime;
    uniform float uMaskOnly;
    varying vec2 vUv;

    // Clean ACES-fitted filmic curve preserving warm coral-reds and silky highlight desaturation!
    vec3 acesFilmic(vec3 x) {
      const float a = 2.51;
      const float b = 0.03;
      const float c = 2.43;
      const float d = 0.59;
      const float e = 0.14;
      return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      if (uReveal <= 0.0001 && uMaskOnly <= 0.5) {
        vec3 drawing = mix(uBg, uInk, texture2D(uWireTex, vUv).a * 0.38);
        gl_FragColor = vec4(drawing, 1.0);
        return;
      }

      vec4 tex = texture2D(uTex, vUv);
      if (uMaskOnly > 0.5) {
        float m = smoothstep(0.015, 0.22, tex.a);
        gl_FragColor = vec4(vec3(m), 1.0);
        return;
      }
      vec3 hdr = tex.rgb;

      // Photographic exposure calibration
      hdr *= 1.08;

      // Filmic tone-mapping
      vec3 col = acesFilmic(hdr);

      // Gentle photographic micro-contrast S-curve
      col = mix(col, col * col * (3.0 - 2.0 * col), 0.14);

      // Linear -> sRGB encoding
      col = pow(max(col, vec3(0.0)), vec3(1.0 / 2.2));

      // Ultra-subtle macro studio sensor grain (eliminates gradient banding on soft studio halo)
      float grain = (hash12(gl_FragCoord.xy + fract(uTime) * 37.0) - 0.5) * 0.011;
      col = clamp(col + grain, 0.0, 1.0);

      if (uReveal < 1.0) {
        vec3 drawing = mix(uBg, uInk, texture2D(uWireTex, vUv).a * 0.38);
        col = mix(drawing, col, uReveal);
      }

      gl_FragColor = vec4(col, 1.0);
    }
  `}),Lh=new ii;Lh.add(new Qt(Dh,PM));function yi(i,e,t,n=!0,s=Ui){return new Ti(Math.max(2,i),Math.max(2,e),{type:s,format:xi,minFilter:n?Mn:Bn,magFilter:n?Mn:Bn,depthBuffer:t,stencilBuffer:!1})}let Dn=2,Nn=2,ma,gr,Xi,Ws,Ul,ta,Hu,na,Wu,vr,vs,po,Es,_s=null,Bl=!1;function Ih(){const i=ut.getPixelRatio(),e=br();Dn=Math.max(2,Math.floor(e.w*i)),Nn=Math.max(2,Math.floor(e.h*i));const t=Math.max(2,Dn>>1),n=Math.max(2,Nn>>1),s=Math.max(2,Dn>>2),o=Math.max(2,Nn>>2),a=Math.max(2,Dn>>3),r=Math.max(2,Nn>>3),l=Gi?Math.max(2,Math.floor(Dn*.4)):t,c=Gi?Math.max(2,Math.floor(Nn*.4)):n,h=Gi?Math.max(2,Math.floor(Dn*.75)):Dn,f=Gi?Math.max(2,Math.floor(Nn*.75)):Nn,u=Gi?Math.max(2,Math.floor(Dn*.75)):Dn,d=Gi?Math.max(2,Math.floor(Nn*.75)):Nn;ma?.dispose(),gr?.dispose(),Xi?.dispose(),Ws?.dispose(),Ul?.dispose(),ta?.dispose(),Hu?.dispose(),na?.dispose(),Wu?.dispose(),vr?.dispose(),vs?.dispose(),po?.dispose(),Es?.dispose(),_s?.dispose(),ma=yi(l,c,!0,!1),gr=yi(h,f,!0,!1),Xi=yi(Dn,Nn,!0,!0),Ws=yi(u,d,!0,!0,Gi?Xn:Ui),Ul=yi(t,n,!1,!0),ta=yi(t,n,!1,!0),Hu=yi(s,o,!1,!0),na=yi(s,o,!1,!0),Wu=yi(a,r,!1,!0),vr=yi(a,r,!1,!0),vs=yi(Dn,Nn,!0,!0),po=yi(Dn,Nn,!0,!0),Es=yi(Dn,Nn,!0,!0),Bl?(_s=null,Ts.uWireTex.value=null):(_s=new Ti(Dn,Nn,{samples:ut.capabilities.isWebGL2?Gi?2:4:0,depthBuffer:!0,stencilBuffer:!1}),Ts.uWireTex.value=_s.texture),Nh.uAspect.value=Dn/Nn,Ml=!0}Ih();const pn=new ii,kf=AM();pn.add(kf);const kl=new fo(16773604,1.35);kl.position.set(-3.5,.9,-1.6);pn.add(kl);const Ol=new ii,zl=new ii,Hi=new ii,xr=new ii;let Et=null,St=null,Ft=null,kt=null,Ms=null;const ul=Si.get("toppings");let Jn=ul==="outside"||ul==="both"||ul==="inside"?ul:Si.has("toppings")?"both":"off";const Vc=Si.get("topping");let Vs=Vc&&ha.some(i=>i.id===Vc)?Vc:"all",yo=Si.has("air_raspberry"),Of=-112,zf=!1,Ua=null;const s0=Si.has("turntable")?Number(Si.get("turntable")):NaN,ln={speed:ho?.speed??gs.speed,turntable:Number.isFinite(s0)?Q(s0,0,1):ho?.turntable??gs.turntable,frost:ho?.frost??gs.frost,bubbles:ho?.bubbles??gs.bubbles},Ln={...Pi,...ho?.dropDebug??{}};function DM(){return{speed:Number(ln.speed.toFixed(2)),turntable:Number(ln.turntable.toFixed(2)),frost:Number(ln.frost.toFixed(2)),bubbles:Number(ln.bubbles.toFixed(2)),drops:Rh,onFall:Ka,dropDebug:{sag:Number(Ln.sag.toFixed(2)),stretch:Number(Ln.stretch.toFixed(2)),edgeBlur:Number(Ln.edgeBlur.toFixed(2)),shadow:Number(Ln.shadow.toFixed(2)),shadowBlur:Number(Ln.shadowBlur.toFixed(2)),rimDark:Number(Ln.rimDark.toFixed(2)),size:Number(Ln.size.toFixed(2)),bottomPool:Number(Ln.bottomPool.toFixed(2)),bottomDrops:Math.round(Ln.bottomDrops),dripRate:Number(Ln.dripRate.toFixed(2))}}}function NM(){try{window.localStorage.setItem(If,JSON.stringify(DM()))}catch{}}const dt={melt:pa,time:0,seedOffset:Ei*13.7,heatSpots:[],pointerHeat:0,pointerX:0,pointerY:0,bottomPool:Ln.bottomPool,bottomLobes:[1,1,1,1],pendantPull:[0,0,0,0]},LM=24;let jt={base:ea.base,flavors:[...ea.flavors],toppings:[...ea.toppings]},vi=!1,Un=!1,ni=!1,mo=!1,bo=!1,as=null,kn=null,As=null;const wo=new Set;let In=null,Kn=null,ia=!1,Sr=0,_r=0;const Vf=.105;function Gf(i,e=!1){Ma(),dt.melt=Q(Number.isFinite(i)?i:si,0,1),ti=0,(e||dt.melt<=si+.005)&&(dt.heatSpots=[],dt.pointerHeat=0,dt.bottomLobes=[1,1,1,1],dt.pendantPull=[0,0,0,0],Et?.reset(),Ft?.reset()),St&&Et&&Ft&&kt&&(kt.syncRimeToMelt(dt.melt),Ft.clearFrostDrops(),St.update(dt,ln.bubbles,!0),Et.update(dt,0,kt.stickWetness),Ft.update(dt,St,kt,0,ln.speed)),_a(0,!0),dn=!0}function Zs(i,e=pa){kn!==null&&Ma(),i!==Ei&&W_(),Ei=i,Et&&(pn.remove(Et.group),Et.dispose()),St&&(Hi.remove(St.iceMesh),Ol.remove(St.backZMesh),zl.remove(St.bubblesMesh),St.dispose()),Ft&&(xr.remove(Ft.pendantGroup),Ft.dispose()),kt&&kt.dispose(),dt.melt=Q(e,0,1),dt.time=0,dt.seedOffset=i*13.7,dt.heatSpots=[],dt.pointerHeat=0,dt.bottomPool=Ln.bottomPool,dt.bottomLobes=[1,1,1,1],dt.pendantPull=[0,0,0,0],ti=0,Ph(),Et=Pf(i,jt),pn.add(Et.group),St=j_(i,Gi,jt),Hi.add(St.iceMesh),Ol.add(St.backZMesh),zl.add(St.bubblesMesh),kt=eM(i),Math.abs(dt.melt-si)>.001&&kt.syncRimeToMelt(dt.melt),St.uniforms.uFilmTex.value=kt.texture,St.uniforms.uRimeTex.value=kt.rimeTexture,Ft=cM(i,Rh,jt),Ft.setDebugParams(Ln),xr.add(Ft.pendantGroup),St.uniforms.uFrost.value=ln.frost,St.update(dt,ln.bubbles,!0),Et.update(dt,0,kt.stickWetness),Ft.update(dt,St,kt,0,ln.speed),(cs||!i0)&&(_a(0,!0),i0=!0),np(),(Jn!=="off"||yo)&&ip(),dn=!0}function ga(i,e=!0){const t=jt.base,n=jt.toppings.join(","),s=Jl(i);jt=s;const o=s.base!==t,a=s.toppings.join(",")!==n;if(e&&dt.melt>.78){Zs(Ei,si);return}o||a?(kn!==null&&Ma(),Et&&(pn.remove(Et.group),Et.dispose()),Et=Pf(Ei,jt),pn.add(Et.group),kt&&Et.update(dt,0,kt.stickWetness)):Et?.setRecipeColors(jt),St?.setRecipe(jt),Ft?.setRecipe(jt),St&&St.update(dt,ln.bubbles),np(),dn=!0}function IM(){Ma(),dt.melt=si,dt.time=0,dt.heatSpots=[],dt.pointerHeat=0,dt.bottomPool=Ln.bottomPool,dt.bottomLobes=[1,1,1,1],dt.pendantPull=[0,0,0,0],ti=0,Et?.reset(),kt?.reset(),Ft?.reset(),St&&Et&&Ft&&kt&&(St.update(dt,ln.bubbles,!0),Et.update(dt,0,kt.stickWetness),Ft.update(dt,St,kt,0,ln.speed)),dn=!0}const Qi=new Mg,Gc=new ot,o0=new Wi(new G(0,0,1),0),ao=new G;function ci(){const i=Et?.getGrabState();i&&i.grabbedIndex>=0||ni||mr?hi.style.cursor="grabbing":i&&i.hoveredIndex>=0||mo?hi.style.cursor="grab":hi.style.cursor=""}function Xu(i,e){const t=br();Gc.x=i/t.w*2-1,Gc.y=-(e/t.h)*2+1,Qi.setFromCamera(Gc,Rt)}function Hf(){if(!Et)return!1;for(let i=0;i<Et.fruits.length;i++){const e=Et.fruits[i];if(!e.detached&&e.mesh.visible&&Qi.intersectObject(e.mesh,!1).length>0)return!0}return!1}function FM(){return bi<.85||Jn==="outside"?!1:St&&St.iceMesh.visible&&Qi.intersectObject(St.iceMesh,!1).length>0?!0:Hf()}const ro=new G(0,0,1),Hc=new G(1,0,0);function Vl(i,e){if(Xu(i,e),kn!==null&&Et){Et.moveGrab(Qi,dt),vi=!1,mo=!1,ci();return}if(ni||bo||As!==null){vi=!1,In=null,Kn=null,ci();return}if(bi<.85||Jn==="outside"){vi=!1,In=null,Kn=null,!Un&&wo.size===0&&(mo=!0,ci());return}let t=!1;if(Et&&!Un){const o=Et.pickGrabbableFruit(Qi);Et.setHoveredFruit(o),t=o>=0}const n=St&&St.iceMesh.visible?Qi.intersectObject(St.iceMesh,!1):[],s=n.length>0||Hf();if(!Un&&wo.size===0&&(mo=!t&&!s,ci()),St&&kt&&Ft&&!t&&kt.avgRime>.002)if(n.length>0&&n[0].uv){const o=n[0].uv.x,a=n[0].uv.y,r=In!==null&&Math.abs(o-In)>.35,l=In!==null&&!r?In:o,c=Kn!==null&&!r?Kn:a,h=Un?.072:.046,f=Un?1:.92,u=kt.meltFrostSegment(l,c,o,a,f,h);if(u.length>0){for(let d=0;d<u.length;d++){const g=u[d];Ft.spawnFrostMeltDrops(g.u,g.v,g.melted,kt)}cs&&Ft.update(dt,St,kt,0,ln.speed),dn=!0}In=o,Kn=a}else In=null,Kn=null;else In=null,Kn=null;if(ro.set(Rt.position.x-It.target.x,0,Rt.position.z-It.target.z),ro.lengthSq()>1e-6?ro.normalize():ro.set(0,0,1),Hc.set(ro.z,0,-ro.x),o0.set(ro,0),Qi.ray.intersectPlane(o0,ao)){dt.pointerX=ao.x,dt.pointerY=ao.y;const{yBot:o,yTop:a}=ws(dt.melt);vi=Math.abs(ao.x*Hc.x+ao.z*Hc.z)<Fe.halfWidthBottom*1.28&&ao.y>Math.min(Fe.yBottom,o)-.18&&ao.y<Math.max(Fe.yTop,a)+.18}else vi=!1}function Wf(i,e,t){const n=dt.heatSpots;for(let s=0;s<n.length;s++){const o=n[s].x-i,a=n[s].y-e;if(o*o+a*a<.026){n[s].heat=Q(n[s].heat+t,0,.95);return}}if(n.length<LM)n.push({x:i,y:e,heat:Q(t,0,.95)});else{let s=0;for(let o=1;o<n.length;o++)n[o].heat<n[s].heat&&(s=o);n[s].x=i,n[s].y=e,n[s].heat=Q(t,0,.95)}}function Ma(){if(kn!==null){try{hi.releasePointerCapture(kn)}catch{}kn=null}Et?.endGrab(),It.enabled=as===null,ci(),dn=!0}function Xf(){kn!==null&&Ma(),wo.clear(),bo=!1,as=null,As=null,Un=!1,ni=!1,mo=!1,vi=!1,In=null,Kn=null,ia=!1,It.enabled=!0,Et?.setHoveredFruit(-1),ci()}hi.addEventListener("pointermove",i=>{bo||ni||As!==null||kn!==null&&i.pointerId!==kn||as!==null&&i.pointerId!==as||(Sr=i.clientX,_r=i.clientY,ia=!0)});hi.addEventListener("pointerdown",i=>{if(i.pointerType==="touch"){if(wo.add(i.pointerId),kn!==null)return;if(wo.size>=2){bo=!0,ni=!0,It.enabled=!0,Un=!1,vi=!1,In=null,Kn=null,dn=!0;return}if(It.enabled=!0,Xu(i.clientX,i.clientY),Et){const e=Et.pickGrabbableFruit(Qi);if(e>=0&&Et.beginGrab(e,Qi,Rt)){kn=i.pointerId;try{hi.setPointerCapture(i.pointerId)}catch{}It.enabled=!1,Un=!1,ni=!1,vi=!1,In=null,Kn=null,ci(),dn=!0;return}}Un=!0,ni=!1,Sr=i.clientX,_r=i.clientY,In=null,Kn=null,Vl(i.clientX,i.clientY),dn=!0;return}if(i.button===2){As=i.pointerId,ni=!0,It.enabled=!0,vi=!1,In=null,Kn=null,ci(),dn=!0;return}if(i.button===0){if(kn!==null)return;if(Xu(i.clientX,i.clientY),Et){const e=Et.pickGrabbableFruit(Qi);if(e>=0&&Et.beginGrab(e,Qi,Rt)){kn=i.pointerId;try{hi.setPointerCapture(i.pointerId)}catch{}It.enabled=!1,Un=!1,ni=!1,vi=!1,In=null,Kn=null,ci(),dn=!0;return}}FM()?(as=i.pointerId,It.enabled=!1,Un=!0,ni=!1,mo=!1,Sr=i.clientX,_r=i.clientY,In=null,Kn=null,Vl(i.clientX,i.clientY),ci(),dn=!0):(It.enabled=!0,ni=!0,Un=!1,vi=!1,In=null,Kn=null,ci(),dn=!0)}},{capture:!0});window.addEventListener("pointerup",i=>{i.pointerType==="touch"&&wo.delete(i.pointerId),kn!==null&&(i.pointerId===kn||i.pointerId===0)&&Ma(),as!==null&&(i.pointerId===as||i.pointerId===0)&&(as=null),As!==null&&(i.pointerId===As||i.pointerId===0)&&(As=null),i.pointerType==="touch"?wo.size===0&&(bo=!1,ni=!1,Un=!1,vi=!1):(Un=!1,ni=!1),It.enabled=kn===null&&as===null,In=null,Kn=null,ci()});window.addEventListener("pointercancel",Xf);window.addEventListener("blur",Xf);hi.addEventListener("pointerleave",()=>{kn!==null||ni||as!==null||(vi=!1,Un=!1,mo=!1,In=null,Kn=null,ia=!1,Et?.setHoveredFruit(-1),ci())});hi.addEventListener("contextmenu",i=>i.preventDefault());const Qn=document.getElementById("customize-studio"),UM=document.getElementById("cust-flavors"),BM=document.getElementById("cust-toppings"),kM=document.getElementById("img-base-water"),OM=document.getElementById("img-base-coconut"),Yf=Array.from(Qn.querySelectorAll("[data-base]")),$n=document.getElementById("preset-dock"),qf="/codevember-sets/theo/03/",Zf=new Map;for(let i=0;i<xo.length;i++){const e=xo[i],t=document.createElement("button");t.type="button",t.className="preset-btn",t.dataset.preset=e.id,t.dataset.label=e.name,t.title=`${e.name} (${i+1})`,t.setAttribute("aria-label",e.name),t.setAttribute("aria-pressed","false");const n=document.createElement("img");n.src=`${qf}presets/${e.id}.webp`,n.alt="",n.width=80,n.height=112,n.draggable=!1,n.decoding="async",t.appendChild(n),t.addEventListener("click",s=>{if($n.classList.contains("is-peeking")&&Mh(jt,e.recipe)){s.preventDefault(),Yu(2800);return}$f(e),!Ks&&Qn.hidden&&Yu(1800)}),$n.appendChild(t),Zf.set(e.id,t)}const Fh=document.createElement("span");Fh.className="preset-sep";Fh.setAttribute("aria-hidden","true");$n.appendChild(Fh);const Ai=document.createElement("button");Ai.id="btn-dock-customize";Ai.type="button";Ai.className="preset-btn preset-customize-btn";Ai.dataset.label="Customize";Ai.title="Customize popsicle (C)";Ai.setAttribute("aria-label","Customize popsicle");Ai.setAttribute("aria-expanded","false");Ai.setAttribute("aria-controls","customize-studio");const Co=document.createElement("img");Co.src=`${qf}presets/customize-raspberry.webp`;Co.alt="";Co.width=96;Co.height=96;Co.draggable=!1;Co.decoding="async";Ai.appendChild(Co);$n.appendChild(Ai);let Qa=null,Ks=!1,a0=!1;function zM(){if(a0)return;const i=vM(ut,Ph());kM.src=i.bases.water,OM.src=i.bases.coconut;for(const[e,t]of Qf)t.src=i.flavors[e];for(const[e,t]of ep)t.src=i.toppings[e];a0=!0}function Mr(i){i&&(zM(),Tr(),Qs(!1),Gf(Vf,!0)),Qn.hidden=!i,Ai.setAttribute("aria-expanded",String(i)),!i&&!Ks&&!cs&&ya(1100)}function wr(){const i=$n.querySelector('.preset-btn[aria-pressed="true"]');if(!i||$n.clientWidth<=0){$n.style.setProperty("--peek-shift","0px");return}const e=i.offsetLeft+i.offsetWidth*.5,t=$n.clientWidth*.5;$n.style.setProperty("--peek-shift",`${(t-e).toFixed(1)}px`)}function Tr(){Qa!==null&&(window.clearTimeout(Qa),Qa=null)}const Kf=window.matchMedia("(max-width: 860px), (hover: none) and (pointer: coarse)");function Gl(){return Kf.matches}function Qs(i){Tr(),i&&Qn.hidden&&!Gl()?(wr(),$n.classList.add("is-peeking")):$n.classList.remove("is-peeking")}function ya(i=1150){cs||Ks||!Qn.hidden||Gl()||(Tr(),Qa=window.setTimeout(()=>{Qa=null,!Ks&&Qn.hidden&&!Gl()&&!$n.matches(":focus-within")&&Qs(!0)},i))}Kf.addEventListener("change",()=>{Gl()?Qs(!1):!Ks&&Qn.hidden&&!cs&&ya(1100)});function Yu(i){Qs(!1),i!==void 0&&Qn.hidden&&ya(i)}$n.addEventListener("pointerenter",()=>{Ks=!0,Tr(),Qs(!1)});$n.addEventListener("pointerleave",()=>{Ks=!1,ya(1100)});$n.addEventListener("focusin",()=>{Tr(),Qs(!1)});$n.addEventListener("focusout",()=>{ya(1100)});hi.addEventListener("pointerdown",()=>{!Ks&&!cs&&Qn.hidden&&!$n.classList.contains("is-peeking")&&Qs(!0)},{passive:!0});let xs=null;window.addEventListener("pointerdown",i=>{if(Qn.hidden||!i.isPrimary){xs=null;return}if((i.target instanceof Element?i.target:null)?.closest(".float-obj, #cust-mobile-tabs, #preset-dock, .plate a")){xs=null;return}xs={id:i.pointerId,x:i.clientX,y:i.clientY}},{passive:!0});window.addEventListener("pointerup",i=>{if(!xs||i.pointerId!==xs.id)return;const e=Math.hypot(i.clientX-xs.x,i.clientY-xs.y);xs=null,e<8&&!Qn.hidden&&Mr(!1)},{passive:!0});window.addEventListener("pointercancel",()=>{xs=null},{passive:!0});function $f(i){const e=Mh(jt,i.recipe);jt=Jl(i.recipe);const t=e?Ei+1:i.seed,n=Qn.hidden?si:Vf;Zs(t,n)}function VM(){let i=!1;for(let e=0;e<xo.length;e++){const t=xo[e],n=Zf.get(t.id);if(!n)continue;const s=Mh(jt,t.recipe);s&&(i=!0),n.setAttribute("aria-pressed",String(s)),n.title=s?`${t.name} — click for new mix (${e+1})`:`${t.name} (${e+1})`}Ai.dataset.customActive=String(!i),wr()}const Hl=["M22 21 C44 8, 86 11, 100 31 C111 49, 103 80, 79 90 C50 100, 17 92, 11 68 C5 44, 21 19, 49 14","M89 19 C65 7, 25 13, 13 35 C3 56, 14 85, 42 92 C72 99, 103 85, 107 61 C110 37, 92 16, 65 13","M27 16 C56 6, 95 16, 105 40 C113 62, 96 89, 68 94 C38 99, 10 83, 9 57 C8 32, 28 14, 57 12","M84 15 C55 7, 19 18, 11 44 C4 68, 22 92, 51 95 C81 98, 107 80, 108 55 C109 30, 88 12, 60 11"],r0=[{x:18,y:8,size:68,rot:-4},{x:110,y:4,size:68,rot:4},{x:202,y:10,size:68,rot:-3},{x:14,y:102,size:68,rot:3},{x:108,y:98,size:68,rot:-4},{x:200,y:104,size:68,rot:4},{x:18,y:196,size:68,rot:-3},{x:110,y:192,size:68,rot:4},{x:202,y:198,size:68,rot:-4}],l0=[{x:18,y:14,size:92,rot:-4},{x:148,y:20,size:84,rot:5},{x:22,y:132,size:86,rot:3},{x:144,y:126,size:94,rot:-5},{x:16,y:244,size:96,rot:4},{x:148,y:252,size:84,rot:-3}],Jf=new Map,Qf=new Map;for(let i=0;i<dr.length;i++){const e=dr[i],t=r0[i%r0.length],n=document.createElement("button");n.type="button",n.className="float-obj taste-chunk-btn",n.dataset.flavor=e.id,n.dataset.tip=e.label,n.setAttribute("aria-label",e.label),n.setAttribute("aria-pressed","false"),n.style.setProperty("--fx",`${t.x}px`),n.style.setProperty("--fy",`${t.y}px`),n.style.setProperty("--size",`${t.size}px`),n.style.setProperty("--rot",`${t.rot}deg`),n.style.setProperty("--float-delay",`${(-.5-i*.67).toFixed(2)}s`),n.style.setProperty("--float-dur",`${(4.7+i%4*.45).toFixed(2)}s`);const s=Hl[(i+1)%Hl.length];n.innerHTML=`<svg class="pen-ring" viewBox="0 0 116 102" fill="none" aria-hidden="true"><path pathLength="1" d="${s}" /></svg><span class="obj-stage"></span>`;const o=document.createElement("img");o.alt="",o.draggable=!1,n.querySelector(".obj-stage").appendChild(o),n.addEventListener("click",()=>{const a=[...jt.flavors],r=a.indexOf(e.id);r>=0?(jt.base==="coconut"||a.length>1)&&a.splice(r,1):(a.length>=2&&a.shift(),a.push(e.id)),ga({...jt,flavors:a})}),UM.appendChild(n),Jf.set(e.id,n),Qf.set(e.id,o)}const jf=new Map,ep=new Map;for(let i=0;i<ha.length;i++){const e=ha[i],t=l0[i%l0.length],n=document.createElement("button");n.type="button",n.className="float-obj topping-card",n.dataset.topping=e.id,n.dataset.tip=e.label,n.setAttribute("aria-label",e.label),n.setAttribute("aria-pressed","false"),n.style.setProperty("--fx",`${t.x}px`),n.style.setProperty("--fy",`${t.y}px`),n.style.setProperty("--size",`${t.size}px`),n.style.setProperty("--rot",`${t.rot}deg`),n.style.setProperty("--float-delay",`${(-.8-i*.92).toFixed(2)}s`),n.style.setProperty("--float-dur",`${(4.9+i%3*.52).toFixed(2)}s`);const s=Hl[i%Hl.length];n.innerHTML=`<svg class="pen-ring" viewBox="0 0 116 102" fill="none" aria-hidden="true"><path pathLength="1" d="${s}" /></svg><span class="obj-stage"></span>`;const o=document.createElement("img");o.alt="",o.draggable=!1,n.querySelector(".obj-stage").appendChild(o),n.addEventListener("click",()=>{const a=[...jt.toppings],r=a.indexOf(e.id);r>=0?a.splice(r,1):a.push(e.id),ga({...jt,toppings:a})}),BM.appendChild(n),jf.set(e.id,n),ep.set(e.id,o)}const tp=Array.from(document.querySelectorAll("#cust-mobile-tabs .cust-tab-btn"));function GM(i){Qn.dataset.mobileTab=i;for(const e of tp)e.setAttribute("aria-selected",String(e.dataset.tab===i))}for(const i of tp)i.addEventListener("click",()=>{const e=i.dataset.tab;e&&GM(e)});for(const i of Yf)i.addEventListener("click",()=>{const e=i.dataset.base;e!==jt.base&&ga({...jt,base:e})});function np(){for(const i of Yf)i.setAttribute("aria-pressed",String(i.dataset.base===jt.base));for(const[i,e]of Jf)e.setAttribute("aria-pressed",String(jt.flavors.includes(i)));for(const[i,e]of jf)e.setAttribute("aria-pressed",String(jt.toppings.includes(i)));VM()}function HM(){return Ms||(Ms=K_(Ei),pn.add(Ms.group)),Ms}function ip(){Jn!=="off"||yo?HM().setLayout(Jn,Vs,yo):Ms&&Ms.setLayout("off",Vs,!1);const e=Jn==="outside";Et&&(Et.group.visible=!e),St&&(St.iceMesh.visible=!e,St.backZMesh.visible=!e),Ft&&(Ft.pendantGroup.visible=!e),It.minDistance=Jn!=="off"?1.35:3.2}function qu(i=!0){if(i){if(Jn==="both"||Jn==="inside"){Ua||(Ua={base:jt.base,flavors:[...jt.flavors],toppings:[...jt.toppings]});const e=Vs==="all"?ha.map(n=>n.id):[Vs],t=Vs==="raspberry"?["raspberry"]:Vs==="blueberry"?["blueberry"]:Vs==="shaved-lemon"?["lemon"]:jt.flavors.length>0?jt.flavors:["strawberry"];ga({base:jt.base,flavors:t,toppings:e},!1)}else if(Jn==="off"&&Ua){const e=Ua;Ua=null,ga(e,!1)}}ip(),dn=!0}Ai.addEventListener("click",()=>{Mr(Qn.hidden)});function WM(i,e=!1,t=!0){Object.assign(Ln,i),i.bottomPool!==void 0&&(dt.bottomPool=Ln.bottomPool),Ft?.setDebugParams(i),Ft&&Object.assign(Ln,Ft.getDebugParams()),(e||i.bottomDrops!==void 0)&&St&&Ft&&kt&&(i.bottomPool!==void 0&&St.update(dt,ln.bubbles,!0),Ft.update(dt,St,kt,0,ln.speed)),t&&NM(),dn=!0}window.addEventListener("keydown",i=>{if(i.metaKey||i.ctrlKey||i.altKey)return;const e=i.target;if(!(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&e.isContentEditable)){if(i.key==="Escape"){Qn.hidden||Mr(!1);return}if(i.code==="Space"){if(e instanceof HTMLElement&&e.closest("button, summary, a"))return;i.preventDefault(),cs=!cs,dn=!0}else if(jl){if(i.key==="r"||i.key==="R")IM();else if(i.key==="n"||i.key==="N")Zs(Ei+1,si);else if(i.key==="c"||i.key==="C")Mr(Qn.hidden);else if(i.key>="1"&&i.key<="9"){const t=xo[Number(i.key)-1];t&&($f(t),Yu(1800))}}else return}});const qo=new Ut(0),c0=new Ut(100,0,0),Wc=new G,Ci={meltScale:1,fluidScale:1,fruitScale:1};let Zu=ut.capabilities.isWebGL2,u0=!1;function hl(i,e,t){if(!Zu||i.width!==e.width||i.height!==e.height)return!1;const n=ut.getContext();ut.setRenderTarget(e);const s=ut.properties.get(i)?.__webglFramebuffer,o=ut.properties.get(e)?.__webglFramebuffer;if(!s||!o)return!1;const a=i.width,r=i.height;return n.bindFramebuffer(n.READ_FRAMEBUFFER,s),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,o),n.disable(n.SCISSOR_TEST),n.blitFramebuffer(0,0,a,r,0,0,a,r,t,n.NEAREST),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,o),!u0&&(u0=!0,n.getError()!==n.NO_ERROR)?(Zu=!1,!1):!0}function Xc(i,e,t,n){co.uTexelSize.value.set(n/t.width,n/t.height),co.uTex.value=i,co.uDir.value.set(1,0),ut.setRenderTarget(e),ut.clear(!0,!1,!1),ut.render(Fl,Ji),co.uTex.value=e.texture,co.uDir.value.set(0,1),ut.setRenderTarget(t),ut.clear(!0,!1,!1),ut.render(Fl,Ji)}const XM=Gi?1:1.45,sp=Si.has("loader");let bi=0,jl=!1;function YM(i,e){const a=new Float32Array(3321),r=[],l=[],c={melt:Q(e,0,1),time:0,seedOffset:i*13.7,heatSpots:[],bottomPool:Ln.bottomPool,bottomLobes:[1,1,1,1],pendantPull:[0,0,0,0]},h=yf(c),f={x:0,y:0,z:0};for(let O=0;O<=26;O++){const Y=vh(O/26),R=wf(Y,h);for(let B=0;B<=40;B++){const $=B===40?0:B/40*Math.PI*2;Tf(Math.sin($),Math.cos($),h,R,c,f);const K=O*41+B;a[K*3]=f.x,a[K*3+1]=f.y,a[K*3+2]=f.z}}for(let O=0;O<26;O++)for(let Y=0;Y<40;Y++){const R=O*41+Y,B=R+1,$=R+41,K=$+1;r.push(R,B,K,R,K,$),l.push(a[R*3],a[R*3+1],a[R*3+2],a[B*3],a[B*3+1],a[B*3+2]),l.push(a[R*3],a[R*3+1],a[R*3+2],a[$*3],a[$*3+1],a[$*3+2])}const u=new vn;u.setAttribute("position",new mn(a,3)),u.setIndex(r);const d=new vn;d.setAttribute("position",new an(l,3));const g=Fe.stickWidth*.5,x=Fe.stickTopY,p=Fe.stickBottomY,m=new hh;m.absarc(0,p+g,g,Math.PI,Math.PI*2,!1),m.lineTo(g,x-g),m.absarc(0,x-g,g,0,Math.PI,!1),m.closePath();const S=Fe.stickDepth*.62,y=new ql(m,{depth:S,bevelEnabled:!0,bevelThickness:Fe.stickBevelThickness,bevelSize:Fe.stickBevelSize,bevelSegments:2,curveSegments:14});y.translate(0,0,-S*.5);const _=new Cm(y,24),A=new zs({colorWrite:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),E=new Nu({color:16777215}),v=new Nu({color:16777215,transparent:!0,opacity:.68,depthWrite:!1}),T=new ii;T.add(new Qt(u,A),new Qt(y,A));const U=new ii;U.add(new Ec(d,E),new Ec(_,E));const C=new ii;C.add(new Qt(y,A));const D=new ii;return D.add(new Ec(_,v)),{draw(O){_s&&(ut.setRenderTarget(_s),ut.setClearColor(qo,0),ut.clear(!0,!0,!1),ut.render(T,O),ut.render(U,O),ut.clear(!1,!0,!1),ut.render(C,O),ut.render(D,O))},dispose(){u.dispose(),d.dispose(),y.dispose(),_.dispose(),A.dispose(),E.dispose(),v.dispose()}}}let Wl=YM(Ei,pa);function op(){Bl||(Bl=!0,Wl?.dispose(),Wl=null,_s?.dispose(),_s=null,Ts.uWireTex.value=null)}function ap(){if(Ql||!Et||!St||!Ft)return;const i=ut.getContext(),e=Math.atan2(Rt.position.x-It.target.x,Rt.position.z-It.target.z);kf.rotation.y=e;const t=Jn!=="off"||yo?Of*Math.PI/180:e+-112*Math.PI/180;if(fr.uSideLightDir.value.set(Math.sin(t),.24,Math.cos(t)).normalize(),kl.position.copy(fr.uSideLightDir.value).multiplyScalar(4),kl.intensity=Jn!=="off"?1.75:1.25,Rt.updateMatrixWorld(),Wc.set(0,.08,0).project(Rt),Nh.uHaloCenter.value.set(Wc.x*.5+.5,Wc.y*.5+.5),Jn==="outside"){ut.setRenderTarget(Es),ut.setClearColor(qo,1),ut.clear(!0,!0,!1),ut.render(Ja,Ji),ut.render(pn,Rt);return}ut.setRenderTarget(ma),ut.setClearColor(c0,1),ut.clear(!0,!0,!1),ut.render(Ol,Rt),ut.setRenderTarget(gr),ut.setClearColor(c0,1),ut.clear(!0,!0,!1),pn.overrideMaterial=St.solidWorldZMat,ut.render(pn,Rt),pn.overrideMaterial=null,ut.setRenderTarget(Xi),ut.setClearColor(qo,1),ut.clear(!0,!0,!1),ut.render(Ja,Ji),ut.render(pn,Rt),St.bubblesMesh.visible?(ut.setRenderTarget(Ws),ut.setClearColor(qo,0),hl(Xi,Ws,i.DEPTH_BUFFER_BIT)?ut.clear(!0,!1,!1):(ut.clear(!0,!0,!1),pn.overrideMaterial=Fa,ut.render(pn,Rt),pn.overrideMaterial=null),ut.render(zl,Rt),Ml=!0):Ml&&(ut.setRenderTarget(Ws),ut.setClearColor(qo,0),ut.clear(!0,!1,!1),Ml=!1),Xc(Xi.texture,Ul,ta,1.45),Xc(ta.texture,Hu,na,2.25),Xc(na.texture,Wu,vr,2.85),St.uniforms.uBgTex.value=Xi.texture,St.uniforms.uBgBlur1.value=ta.texture,St.uniforms.uBgBlur2.value=na.texture,St.uniforms.uBgBlur3.value=vr.texture,St.uniforms.uBubblesTex.value=Ws.texture,St.uniforms.uInteriorZ.value=gr.texture,St.uniforms.uBackIceZ.value=ma.texture,St.uniforms.uResolution.value.set(Dn,Nn),hl(Xi,vs,i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT)||(ut.setRenderTarget(vs),ut.clear(!0,!0,!1),ut.render(Ja,Ji),ut.render(pn,Rt)),ut.render(Hi,Rt),Ft.uniforms.uSceneTex.value=vs.texture,Ft.uniforms.uDropFieldTex.value=po.texture,Ft.uniforms.uResolution.value.set(Dn,Nn),Ft.hasDropField()&&(ut.setRenderTarget(po),ut.setClearColor(qo,0),hl(vs,po,i.DEPTH_BUFFER_BIT)?ut.clear(!0,!1,!1):(ut.clear(!0,!0,!1),pn.overrideMaterial=Fa,Hi.overrideMaterial=Fa,ut.render(pn,Rt),ut.render(Hi,Rt),pn.overrideMaterial=null,Hi.overrideMaterial=null),ut.render(Ft.fieldScene,Rt)),ut.setRenderTarget(Es),ut.clear(!0,!1,!1),ut.render(Ft.resolveScene,Ji),hl(vs,Es,i.DEPTH_BUFFER_BIT)||(ut.clear(!1,!0,!1),pn.overrideMaterial=Fa,Hi.overrideMaterial=Fa,ut.render(pn,Rt),ut.render(Hi,Rt),pn.overrideMaterial=null,Hi.overrideMaterial=null),ut.render(xr,Rt)}function gi(){if(Ql)return;const i=bi>=1?1:bi<=0?0:U0.smoothstep(bi,0,1);i<1&&Wl&&_s&&(Rt.updateMatrixWorld(),Wl.draw(Rt)),i>0&&Et&&St&&Ft&&ap(),Ts.uTex.value=Es.texture,Ts.uReveal.value=i,Ts.uTime.value=dt.time,ut.setRenderTarget(null),ut.clear(!0,!1,!1),ut.render(Lh,Ji),dn=!1}function rp(i,e){const t=Ka!=="off"&&e?1:0,n=t>ti?22:4.8;return ti+=(t-ti)*(1-Math.exp(-i*n)),ti<.001&&(ti=0),Ka==="pause"?(Ci.meltScale=1-ti,Ci.fluidScale=1-ti*.86,Ci.fruitScale=1-ti*.16,Ci):Ka==="slow"?(Ci.meltScale=1-ti*.92,Ci.fluidScale=1-ti*.78,Ci.fruitScale=1-ti*.52,Ci):(Ci.meltScale=1,Ci.fluidScale=1,Ci.fruitScale=1,Ci)}function lp(i,e){if(i<=0||!kt)return;const n=i*.0028*ln.speed*e;dt.melt<Hn?kt.avgRime>.015?dt.melt=Math.min(Hn-.003,dt.melt+n*2.4):dt.melt=Math.min(Hn,dt.melt+Math.max(n*2.4,i*.14*ln.speed)):dt.melt=Q(dt.melt+n,0,1)}let h0=performance.now();function cp(i){requestAnimationFrame(cp);const e=Math.min(.05,Math.max(0,(i-h0)*.001));h0=i,ia&&(ia=!1,Vl(Sr,_r));const t=cs||!Qn.hidden?0:e;jl&&bi<1&&(bi=Math.min(1,bi+e/XM),dn=!0,bi>=1&&op());const n=bi>=.85&&vi&&!ni&&!bo&&As===null,s=n?Un?1:.42:0;if(dt.pointerHeat+=(s-dt.pointerHeat)*Math.min(1,e*8),t>0&&Ms&&Ms.group.visible&&zf&&(Ms.update(t,!0),dn=!0),t>0&&bi>=.85&&Jn!=="outside"&&Et&&St&&Ft&&kt){const{meltScale:o,fluidScale:a,fruitScale:r}=rp(t,Et.hasFallingFruitInView()),l=t*o,c=t*a,h=t*r;if(dt.time+=c,l>0&&(lp(l,n?Un?11.5:3.2:1),n&&(dt.melt>=Hn-.01||kt.avgRime<.05))){const u=l*(Un?.34:.075)*ln.speed;Wf(dt.pointerX,dt.pointerY,u)}if(kt.update(dt,c,ln.speed),St.update(dt,ln.bubbles),Et.update(dt,h,kt.stickWetness),Ft.update(dt,St,kt,c,ln.speed),dn=!0,ln.turntable>.001&&!mr&&As===null&&kn===null){const f=t*ln.turntable*.2,u=Rt.position.x-It.target.x,d=Rt.position.z-It.target.z,g=Math.cos(f),x=Math.sin(f);Rt.position.x=It.target.x+u*g+d*x,Rt.position.z=It.target.z-u*x+d*g,Rt.lookAt(It.target),Rt.updateMatrixWorld(),Un&&!ia&&Vl(Sr,_r)}}t>0&&!mr&&!ni&&!bo&&_a(t,!1),Et&&kn!==null&&(Et.updateGrab(e,dt),dn=!0),It.enabled&&It.update(),dn&&gi()}window.addEventListener("resize",()=>{const i=br(),e=Uf(i);e!==Gu&&(Gu=e,Rt.position.copy(Ch),It.target.copy(Mo),Rt.lookAt(Mo),It.update(),$a=0,_a(0,!0)),Rt.aspect=i.w/i.h,Rt.updateProjectionMatrix(),ut.setPixelRatio(Ff()),ut.setSize(i.w,i.h),Ih(),wr(),dn=!0});const ja=()=>new Promise(i=>requestAnimationFrame(()=>i()));async function qM(){co.uTex.value=Xi.texture,Ts.uTex.value=Es.texture,St&&(St.uniforms.uBgTex.value=Xi.texture,St.uniforms.uBgBlur1.value=ta.texture,St.uniforms.uBgBlur2.value=na.texture,St.uniforms.uBgBlur3.value=vr.texture,St.uniforms.uBubblesTex.value=Ws.texture,St.uniforms.uInteriorZ.value=gr.texture,St.uniforms.uBackIceZ.value=ma.texture,St.uniforms.uResolution.value.set(Dn,Nn)),Ft&&(Ft.uniforms.uSceneTex.value=vs.texture,Ft.uniforms.uDropFieldTex.value=po.texture,Ft.uniforms.uResolution.value.set(Dn,Nn));const i=ut.getRenderTarget(),e=[],t=(r,l,c)=>{ut.setRenderTarget(c),e.push(ut.compileAsync(r,l))};t(Ol,Rt,ma),t(Ja,Ji,Xi),t(pn,Rt,Xi),t(zl,Rt,Ws),t(Fl,Ji,Ul),t(Hi,Rt,vs),Ft&&(t(Ft.fieldScene,Rt,po),t(Ft.resolveScene,Ji,Es)),t(xr,Rt,Es),t(Lh,Ji,null),ut.setRenderTarget(i),await Promise.all(e);const n=new Set,s=r=>{r instanceof Yn&&!r.isRenderTargetTexture&&n.add(r)};s(Va),kt&&(s(kt.texture),s(kt.rimeTexture));const o=r=>{r.traverse(l=>{const c=l.material;if(c)for(const h of Array.isArray(c)?c:[c]){for(const u of Object.values(h))s(u);const f=h.uniforms;if(f)for(const u of Object.values(f))u&&s(u.value)}})};o(pn),o(Hi),o(xr);let a=0;for(const r of n)ut.initTexture(r),a++,a%6===0&&await ja();await ja(),ap()}async function ZM(){if(dn=!0,await ja(),!sp){try{Ph(),xf(),await ja(),Zs(Ei,pa),await ja(),await qM()}catch{(!Et||!St||!Ft)&&Zs(Ei,pa)}jl=!0,document.body.classList.remove("loading"),wr(),ya(2600),dn=!0}}cs&&!sp?(Zs(Ei,pa),(Jn!=="off"||yo)&&qu(!0),bi=1,jl=!0,op(),document.body.classList.remove("loading"),gi()):(_a(0,!0),gi(),ZM().then(()=>{(Jn!=="off"||yo)&&qu(!0)}));window.__day03={setMelt(i){Gf(i),gi()},step(i){const e=Math.max(1,Math.ceil(i/.033)),t=i/e;for(let n=0;n<e;n++)if(St&&Et&&Ft&&kt){const{meltScale:s,fluidScale:o,fruitScale:a}=rp(t,Et.hasFallingFruitInView());dt.time+=t*o,lp(t*s,1),kt.update(dt,t*o,ln.speed),St.update(dt,ln.bubbles),Et.update(dt,t*a,kt.stickWetness),Ft.update(dt,St,kt,t*o,ln.speed),_a(t,!1)}gi()},warmAt(i,e,t){Wf(i,e,t),dt.pointerX=i,dt.pointerY=e,dt.pointerHeat=1,St&&Et&&Ft&&kt&&(kt.update(dt,.033,ln.speed),St.update(dt,ln.bubbles),Et.update(dt,.033,kt.stickWetness),Ft.update(dt,St,kt,.033,ln.speed)),gi()},setSeed(i){Zs(i,si),gi()},setRecipe(i){ga({base:i.base??jt.base,flavors:i.flavors??jt.flavors,toppings:i.toppings??jt.toppings},!1),gi()},getRecipe(){return{base:jt.base,flavors:[...jt.flavors],toppings:[...jt.toppings]}},applyPreset(i){const e=xo.find(t=>t.id===i);return e?(jt=Jl(e.recipe),Zs(e.seed,si),gi(),!0):!1},getPresets(){return xo.map(i=>({id:i.id,name:i.name,seed:i.seed,recipe:i.recipe}))},setMaskMode(i){Ts.uMaskOnly.value=i?1:0,gi()},setDropMode(i){Rh=i,Ft?.setMode(i),St&&Ft&&kt&&Ft.update(dt,St,kt,0,ln.speed),gi()},setFallMode(i){Ka=i,i==="off"&&(ti=0)},setDropDebug(i){WM(i,i.bottomPool!==void 0||i.bottomDrops!==void 0,!1),gi()},getDropDebug(){return{...Ln}},setCamera(i,e,t){const n=It.enableDamping;It.enableDamping=!1,Rt.position.set(i,e,t),It.target.copy(Mo),Rt.lookAt(Mo),It.update(),It.enableDamping=n,$a=Bf(dt.melt),gi()},getCamera(){return[Rt.position.x,Rt.position.y,Rt.position.z]},getGrabbableFruits(){if(!Et)return[];const i=br(),e=new G;return Et.fruits.map((t,n)=>(e.copy(t.mesh.position).project(Rt),{index:n,kind:t.kind,exposure:t.exposure,detached:t.detached,grabbed:t.grabbed,visible:t.mesh.visible,x:(e.x*.5+.5)*i.w,y:(-e.y*.5+.5)*i.h,world:[t.mesh.position.x,t.mesh.position.y,t.mesh.position.z]})).filter(t=>t.visible&&(t.detached||t.exposure>=.28))},setToppingDebug(i){i.mode!==void 0&&(Jn=i.mode),i.filter!==void 0&&(Vs=i.filter),i.airRaspberry!==void 0&&(yo=i.airRaspberry),i.lightDeg!==void 0&&(Of=i.lightDeg),i.transBoost!==void 0&&(fr.uTransBoost.value=i.transBoost),i.spin!==void 0&&(zf=i.spin),qu(!0),gi()},setDockPeeking(i){Qs(i)},setCustomizeOpen(i){Mr(i)},getState(){return{melt:dt.melt,time:dt.time,seed:Ei,avgRime:kt?.avgRime??0,stickWetness:kt?.stickWetness??0,falling:Et?.hasFallingFruitInView()??!1,fallFocusBlend:ti,blitEnabled:Zu,reveal:bi,wireFreed:Bl,loading:document.body.classList.contains("loading"),grab:Et?.getGrabState()??null}}};requestAnimationFrame(cp);
