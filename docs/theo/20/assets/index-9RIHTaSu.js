(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const dp="modulepreload",pp=function(a){return"/codevember-sets/theo/20/"+a},uu={},$f=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=r?.nonce||r?.getAttribute("nonce");i=c(t.map(l=>{if(l=pp(l),l in uu)return;uu[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":dp,h||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),h)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return i.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};const ph="187",mp=0,fu=1,gp=2,tr=1,vp=2,Ja=3,ms=0,Un=1,ni=2,jn=0,nr=1,la=2,du=3,pu=4,Qf=5,Ii=100,bp=101,xp=102,_p=103,Mp=104,Ya=200,Sp=201,yp=202,Tp=203,ed=204,td=205,ll=206,wp=207,hl=208,Ep=209,Ap=210,Rp=211,Cp=212,Pp=213,Dp=214,ul=0,fl=1,dl=2,cr=3,pl=4,ml=5,gl=6,vl=7,mh=0,Lp=1,Np=2,Yi=0,gh=1,vh=2,bh=3,tc=4,xh=5,_h=6,Mh=7,mu="attached",Ip="detached",nd=300,pa=301,lr=302,Sc=303,yc=304,Si=1e3,Fi=1001,Ho=1002,on=1003,id=1004,Za=1005,Sn=1006,Lo=1007,Ui=1008,Yn=1009,sd=1010,ad=1011,hr=1012,Sh=1013,Oi=1014,li=1015,An=1016,yh=1017,Th=1018,Ps=1020,rd=35902,od=35899,cd=1021,ld=1022,hi=1023,gs=1026,ji=1027,nc=1028,wh=1029,Ds=1030,Eh=1031,Ah=1033,No=33776,Io=33777,Fo=33778,Uo=33779,bl=35840,xl=35841,_l=35842,Ml=35843,Sl=36196,yl=37492,Tl=37496,wl=37488,El=37489,Wo=37490,Al=37491,Rl=37808,Cl=37809,Pl=37810,Dl=37811,Ll=37812,Nl=37813,Il=37814,Fl=37815,Ul=37816,Ol=37817,kl=37818,Bl=37819,zl=37820,Gl=37821,Vl=36492,Hl=36494,Wl=36495,ql=36283,Xl=36284,qo=36285,Kl=36286,ur=2300,fr=2301,Tc=2302,gu=2303,vu=2400,bu=2401,xu=2402,Fp=2500,Up=0,hd=1,jl=2,Op=3200,dr=0,kp=1,ds="",Mn="srgb",si="srgb-linear",Xo="linear",Vt="srgb",wc=7680,Bp=519,zp=512,Gp=513,Vp=514,ud=515,Hp=516,Wp=517,fd=518,dd=519,pd=35044,_u="300 es",Mi=2e3,pr=2001;function qp(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Xp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function mr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Kp(){const a=mr("canvas");return a.style.display="block",a}const Mu={};function Ko(...a){const e="THREE."+a.shift();console.log(e,...a)}function md(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function nt(...a){a=md(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function mt(...a){a=md(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function ua(...a){const e=a.join(" ");e in Mu||(Mu[e]=!0,nt(...a))}function jp(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Jp={[ul]:ul,[dl]:gl,[pl]:pl,[cr]:ml,[fl]:fl,[gl]:dl,[vl]:vl,[ml]:cr};class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Su=1234567;const ir=Math.PI/180,ma=180/Math.PI;function yi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Rt(a,e,t){return Math.max(e,Math.min(t,a))}function Rh(a,e){return(a%e+e)%e}function Yp(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Zp(a,e,t){return a!==e?(t-a)/(e-a):0}function sr(a,e,t){return(1-t)*a+t*e}function $p(a,e,t,n){return sr(a,e,1-Math.exp(-t*n))}function Qp(a,e=1){return e-Math.abs(Rh(a,e*2)-e)}function em(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function tm(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function nm(a,e){return a+Math.floor(Math.random()*(e-a+1))}function im(a,e){return a+Math.random()*(e-a)}function sm(a){return a*(.5-Math.random())}function am(a){a!==void 0&&(Su=a);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rm(a){return a*ir}function om(a){return a*ma}function cm(a){return a>0&&Number.isInteger(a)&&2**Math.round(Math.log2(a))===a}function lm(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function gd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function hm(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),f=r((e-n)/2),d=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*h,c*u,c*f,o*l);break;case"YZY":a.set(c*f,o*h,c*u,o*l);break;case"ZXZ":a.set(c*u,c*f,o*h,o*l);break;case"XZX":a.set(o*h,c*g,c*d,o*l);break;case"YXY":a.set(c*d,o*h,c*g,o*l);break;case"ZYZ":a.set(c*g,c*d,o*h,o*l);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ic(a){switch(a.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ch(a,e){if(e.constructor===Float32Array)return a;const t=ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(a/t,-1)}function Ph(a,e){if(e.constructor===Float32Array)return a;const t=ic(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(a*t)}const yt={DEG2RAD:ir,RAD2DEG:ma,generateUUID:yi,clamp:Rt,euclideanModulo:Rh,mapLinear:Yp,inverseLerp:Zp,lerp:sr,damp:$p,pingpong:Qp,smoothstep:em,smootherstep:tm,randInt:nm,randFloat:im,randFloatSpread:sm,seededRandom:am,degToRad:rm,radToDeg:om,isPowerOfTwo:cm,ceilPowerOfTwo:lm,floorPowerOfTwo:gd,setQuaternionFromProperEuler:hm,normalize:Ph,denormalize:Ch};class Ie{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[r+0],d=s[r+1],g=s[r+2],v=s[r+3];if(u!==v||c!==f||l!==d||h!==g){let p=c*f+l*d+h*g+u*v;p<0&&(f=-f,d=-d,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){const _=Math.acos(p),M=Math.sin(_);m=Math.sin(m*_)/M,o=Math.sin(o*_)/M,c=c*m+f*o,l=l*m+d*o,h=h*m+g*o,u=u*m+v*o}else{c=c*m+f*o,l=l*m+d*o,h=h*m+g*o,u=u*m+v*o;const _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],f=s[r+1],d=s[r+2],g=s[r+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(r){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(r-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(r-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-s*i),u=2*(s*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new L,yu=new Rn;class Tt{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l)}set(e,t,n,i,s,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],p=i[3],m=i[6],_=i[1],M=i[4],x=i[7],E=i[2],w=i[5],b=i[8];return s[0]=r*v+o*_+c*E,s[3]=r*p+o*M+c*w,s[6]=r*m+o*x+c*b,s[1]=l*v+h*_+u*E,s[4]=l*p+h*M+u*w,s[7]=l*m+h*x+u*b,s[2]=f*v+d*_+g*E,s[5]=f*p+d*M+g*w,s[8]=f*m+d*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,f=o*c-h*s,d=l*s-r*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*r)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*s-o*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(r*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return ua("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ac.makeScale(e,t)),this}rotate(e){return ua("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ac.makeRotation(-e)),this}translate(e,t){return ua("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new Tt,Tu=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function um(){const a={enabled:!0,workingColorSpace:si,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Vt&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Vt&&(i.r=fa(i.r),i.g=fa(i.g),i.b=fa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ds?Xo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[si]:{primaries:e,whitePoint:n,transfer:Xo,toXYZ:Tu,fromXYZ:wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:n,transfer:Vt,toXYZ:Tu,fromXYZ:wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),a}const Pt=um();function Zi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function fa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ws;class fm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ws===void 0&&(Ws=mr("canvas")),Ws.width=e.width,Ws.height=e.height;const i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Zi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dm=0;class Dh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Rc(i[r].image)):s.push(Rc(i[r]))}else s=Rc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?fm.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let pm=0;const Cc=new L;class vn extends Ns{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,n=Fi,i=Fi,s=Sn,r=Ui,o=hi,c=Yn,l=vn.DEFAULT_ANISOTROPY,h=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=yi(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=nd;vn.DEFAULT_ANISOTROPY=1;class qt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(d+1)/2,E=(m+1)/2,w=(h+f)/4,b=(u+v)/4,y=(g+p)/4;return M>x&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=b/n):x>E?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=y/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=y/s),this.set(n,i,s,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-v)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mm extends Ns{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new vn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Dh(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends mm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vd extends vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bd extends vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Qe{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,o,c,l,h,u,f,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l,h,u,f,d,g,v,p)}set(e,t,n,i,s,r,o,c,l,h,u,f,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/qs.setFromMatrixColumn(e,0).length(),s=1/qs.setFromMatrixColumn(e,1).length(),r=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=r*h,d=r*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=r*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f-v*o,t[4]=-r*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=r*h,t[9]=v-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const f=r*h,d=r*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,d=r*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=r*c,d=r*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=r*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,vm)}lookAt(e,t,n){const i=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),ns.crossVectors(n,Qn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),ns.crossVectors(n,Qn)),ns.normalize(),Hr.crossVectors(Qn,ns),i[0]=ns.x,i[4]=Hr.x,i[8]=Qn.x,i[1]=ns.y,i[5]=Hr.y,i[9]=Qn.y,i[2]=ns.z,i[6]=Hr.z,i[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],_=n[3],M=n[7],x=n[11],E=n[15],w=i[0],b=i[4],y=i[8],O=i[12],C=i[1],F=i[5],G=i[9],q=i[13],I=i[2],X=i[6],ne=i[10],Y=i[14],ge=i[3],J=i[7],he=i[11],Q=i[15];return s[0]=r*w+o*C+c*I+l*ge,s[4]=r*b+o*F+c*X+l*J,s[8]=r*y+o*G+c*ne+l*he,s[12]=r*O+o*q+c*Y+l*Q,s[1]=h*w+u*C+f*I+d*ge,s[5]=h*b+u*F+f*X+d*J,s[9]=h*y+u*G+f*ne+d*he,s[13]=h*O+u*q+f*Y+d*Q,s[2]=g*w+v*C+p*I+m*ge,s[6]=g*b+v*F+p*X+m*J,s[10]=g*y+v*G+p*ne+m*he,s[14]=g*O+v*q+p*Y+m*Q,s[3]=_*w+M*C+x*I+E*ge,s[7]=_*b+M*F+x*X+E*J,s[11]=_*y+M*G+x*ne+E*he,s[15]=_*O+M*q+x*Y+E*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15],_=c*d-l*f,M=o*d-l*u,x=o*f-c*u,E=r*d-l*h,w=r*f-c*h,b=r*u-o*h;return t*(v*_-p*M+m*x)-n*(g*_-p*E+m*w)+i*(g*M-v*E+m*b)-s*(g*x-v*w+p*b)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(r*h-o*l)-n*(s*h-o*c)+i*(s*l-r*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],_=t*o-n*r,M=t*c-i*r,x=t*l-s*r,E=n*c-i*o,w=n*l-s*o,b=i*l-s*c,y=h*v-u*g,O=h*p-f*g,C=h*m-d*g,F=u*p-f*v,G=u*m-d*v,q=f*m-d*p,I=_*q-M*G+x*F+E*C-w*O+b*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/I;return e[0]=(o*q-c*G+l*F)*X,e[1]=(i*G-n*q-s*F)*X,e[2]=(v*b-p*w+m*E)*X,e[3]=(f*w-u*b-d*E)*X,e[4]=(c*C-r*q-l*O)*X,e[5]=(t*q-i*C+s*O)*X,e[6]=(p*x-g*b-m*M)*X,e[7]=(h*b-f*x+d*M)*X,e[8]=(r*G-o*C+l*y)*X,e[9]=(n*C-t*G-s*y)*X,e[10]=(g*w-v*x+m*_)*X,e[11]=(u*x-h*w-d*_)*X,e[12]=(o*O-r*F-c*y)*X,e[13]=(t*F-n*O+i*y)*X,e[14]=(v*M-g*E-p*_)*X,e[15]=(h*E-u*M+f*_)*X,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,h=r+r,u=o+o,f=s*l,d=s*h,g=s*u,v=r*h,p=r*u,m=o*u,_=c*l,M=c*h,x=c*u,E=n.x,w=n.y,b=n.z;return i[0]=(1-(v+m))*E,i[1]=(d+x)*E,i[2]=(g-M)*E,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+m))*w,i[6]=(p+_)*w,i[7]=0,i[8]=(g+M)*b,i[9]=(p-_)*b,i[10]=(1-(f+v))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=qs.set(i[0],i[1],i[2]).length();const o=qs.set(i[4],i[5],i[6]).length(),c=qs.set(i[8],i[9],i[10]).length();s<0&&(r=-r),gi.copy(this);const l=1/r,h=1/o,u=1/c;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,t.setFromRotationMatrix(gi),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,r,o=Mi,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,v;if(c)g=s/(r-s),v=r*s/(r-s);else if(o===Mi)g=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===pr)g=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Mi,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,v;if(c)g=1/(r-s),v=r/(r-s);else if(o===Mi)g=-2/(r-s),v=-(r+s)/(r-s);else if(o===pr)g=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qs=new L,gi=new Qe,gm=new L(0,0,0),vm=new L(1,1,1),ns=new L,Hr=new L,Qn=new L,Eu=new Qe,Au=new Rn;class $i{constructor(e=0,t=0,n=0,i=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bm=0;const Ru=new L,Xs=new Rn,Gi=new Qe,Wr=new L,Ua=new L,xm=new L,_m=new Rn,Cu=new L(1,0,0),Pu=new L(0,1,0),Du=new L(0,0,1),Lu={type:"added"},Mm={type:"removed"},Ks={type:"childadded",child:null},Pc={type:"childremoved",child:null};class Yt extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new L,t=new $i,n=new Rn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Tt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ua,Wr,this.up):Gi.lookAt(Wr,Ua,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mm),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,_m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),f=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Yt.DEFAULT_UP=new L(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rn extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sm={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Lc(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=Rh(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Lc(r,s,e+1/3),this.g=Lc(r,s,e),this.b=Lc(r,s,e-1/3)}return Pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Pt.workingToColorSpace(In.copy(this),e),Math.round(Rt(In.r*255,0,255))*65536+Math.round(Rt(In.g*255,0,255))*256+Math.round(Rt(In.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(In.copy(this),t);const n=In.r,i=In.g,s=In.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Mn){Pt.workingToColorSpace(In.copy(this),e);const t=In.r,n=In.g,i=In.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(qr);const n=sr(is.h,qr.h,t),i=sr(is.s,qr.s,t),s=sr(is.l,qr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new it;it.NAMES=xd;class Nh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=n}clone(){return new Nh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _d extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vi=new L,Vi=new L,Nc=new L,Hi=new L,js=new L,Js=new L,Nu=new L,Ic=new L,Fc=new L,Uc=new L,Oc=new qt,kc=new qt,Bc=new qt;class _i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vi.subVectors(e,t),i.cross(vi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vi.subVectors(i,t),Vi.subVectors(n,t),Nc.subVectors(e,t);const r=vi.dot(vi),o=vi.dot(Vi),c=vi.dot(Nc),l=Vi.dot(Vi),h=Vi.dot(Nc),u=r*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(r*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hi.x),c.addScaledVector(r,Hi.y),c.addScaledVector(o,Hi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,r){return Oc.setScalar(0),kc.setScalar(0),Bc.setScalar(0),Oc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),Bc.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Oc,s.x),r.addScaledVector(kc,s.y),r.addScaledVector(Bc,s.z),r}static isFrontFacing(e,t,n,i){return vi.subVectors(n,t),Vi.subVectors(e,t),vi.cross(Vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),vi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;js.subVectors(i,n),Js.subVectors(s,n),Ic.subVectors(e,n);const c=js.dot(Ic),l=Js.dot(Ic);if(c<=0&&l<=0)return t.copy(n);Fc.subVectors(e,i);const h=js.dot(Fc),u=Js.dot(Fc);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return r=c/(c-h),t.copy(n).addScaledVector(js,r);Uc.subVectors(e,s);const d=js.dot(Uc),g=Js.dot(Uc);if(g>=0&&d<=g)return t.copy(s);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Js,o);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Nu.subVectors(s,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Nu,o);const m=1/(p+v+f);return r=v*m,o=f*m,t.copy(n).addScaledVector(js,r).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,bi):bi.fromBufferAttribute(s,r),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),Kr.subVectors(this.max,Oa),Ys.subVectors(e.a,Oa),Zs.subVectors(e.b,Oa),$s.subVectors(e.c,Oa),ss.subVectors(Zs,Ys),as.subVectors($s,Zs),Ss.subVectors(Ys,$s);let t=[0,-ss.z,ss.y,0,-as.z,as.y,0,-Ss.z,Ss.y,ss.z,0,-ss.x,as.z,0,-as.x,Ss.z,0,-Ss.x,-ss.y,ss.x,0,-as.y,as.x,0,-Ss.y,Ss.x,0];return!zc(t,Ys,Zs,$s,Kr)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,Ys,Zs,$s,Kr))?!1:(jr.crossVectors(ss,as),t=[jr.x,jr.y,jr.z],zc(t,Ys,Zs,$s,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new L,new L,new L,new L,new L,new L,new L,new L],bi=new L,Xr=new fi,Ys=new L,Zs=new L,$s=new L,ss=new L,as=new L,Ss=new L,Oa=new L,Kr=new L,jr=new L,ys=new L;function zc(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){ys.fromArray(a,s);const o=i.x*Math.abs(ys.x)+i.y*Math.abs(ys.y)+i.z*Math.abs(ys.z),c=e.dot(ys),l=t.dot(ys),h=n.dot(ys);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const cn=new L,Jr=new Ie;let ym=0;class yn extends Ns{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ym++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pd,this.updateRanges=[],this.gpuType=li,this.version=0,this._normalizationScale=e!==void 0?ic(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ch(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ph(e,this.array)}}class Md extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sd extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Tm=new fi,ka=new L,Gc=new L;class ki{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ka,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Gc)),this.expandByPoint(ka.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wm=0;const ri=new Qe,Vc=new Yt,Qs=new L,ei=new fi,Ba=new fi,_n=new L;class hn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qp(e)?Sd:Md)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ba.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(ei.min,Ba.min),ei.expandByPoint(_n),_n.addVectors(ei.max,Ba.max),ei.expandByPoint(_n)):(ei.expandByPoint(Ba.min),ei.expandByPoint(Ba.max))}ei.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)_n.fromBufferAttribute(o,l),c&&(Qs.fromBufferAttribute(e,l),_n.add(Qs)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],c=[],l=new Uint8Array(n.count);for(let O=0;O<n.count;O++)o[O]=new L,c[O]=new L;const h=new L,u=new L,f=new L,d=new Ie,g=new Ie,v=new Ie,p=new L,m=new L;function _(O,C,F){l[O]=l[C]=l[F]=1,h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,F),d.fromBufferAttribute(s,O),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,F),u.sub(h),f.sub(h),g.sub(d),v.sub(d);const G=1/(g.x*v.y-v.x*g.y);isFinite(G)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(G),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(G),o[O].add(p),o[C].add(p),o[F].add(p),c[O].add(m),c[C].add(m),c[F].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,C=M.length;O<C;++O){const F=M[O],G=F.start,q=F.count;for(let I=G,X=G+q;I<X;I+=3)_(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new L,E=new L,w=new L,b=new L;function y(O){w.fromBufferAttribute(i,O),b.copy(w);const C=o[O];x.copy(C),x.sub(w.multiplyScalar(w.dot(C))).normalize(),E.crossVectors(b,C);const G=E.dot(c[O])<0?-1:1;r.setXYZW(O,x.x,x.y,x.z,G)}for(let O=0,C=n.count;O<C;++O)l[O]&&y(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,r=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new yn(f,h,u)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Em{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pd,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Iu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Iu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Iu(a){return a.buffer._uuid===void 0&&(a.buffer._uuid=yi()),a.byteOffset===0&&a.byteLength===a.buffer.byteLength?a.buffer._uuid:a.buffer._uuid+":"+a.byteOffset+":"+a.byteLength}const zn=new L;class Ih{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?ic(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ih(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ch(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ph(e,this.data.array)}}const Hc=new L,Am=new L,Rm=new Tt;class us{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Hc.subVectors(n,t).cross(Am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Hc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rm.getNormalMatrix(e),i=this.coplanarPoint(Hc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Cm=0;class ui extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=nr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wc,this.stencilZFail=wc,this.stencilZPass=wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new us().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qi=new L,Wc=new L,Yr=new L,Zr=new L;class Tr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wc.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Wc);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Yr),o=Zr.dot(this.direction),c=-Zr.dot(Yr),l=Zr.lengthSq(),h=Math.abs(1-r*r);let u,f,d,g;if(h>0)if(u=r*c-o,f=r*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+r*f+2*o)+f*(r*u+f+2*c)+l}else f=s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(r*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=r>0?-s:s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wc).addScaledVector(Yr,f),d}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,s){const r=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-r.x,f=e.y-r.y,d=e.z-r.z,g=t.x-r.x,v=t.y-r.y,p=t.z-r.z,m=n.x-r.x,_=n.y-r.y,M=n.z-r.z,x=Math.abs(c),E=Math.abs(l),w=Math.abs(h);let b,y,O,C,F,G,q,I,X,ne,Y,ge;if(x>=E&&x>=w?(O=c,G=u,X=g,ge=m,c>=0?(b=l,y=h,C=f,F=d,q=v,I=p,ne=_,Y=M):(b=h,y=l,C=d,F=f,q=p,I=v,ne=M,Y=_)):E>=w?(O=l,G=f,X=v,ge=_,l>=0?(b=h,y=c,C=d,F=u,q=p,I=g,ne=M,Y=m):(b=c,y=h,C=u,F=d,q=g,I=p,ne=m,Y=M)):(O=h,G=d,X=p,ge=M,h>=0?(b=c,y=l,C=u,F=f,q=g,I=v,ne=m,Y=_):(b=l,y=c,C=f,F=u,q=v,I=g,ne=_,Y=m)),O===0)return null;const J=b/O,he=y/O,Q=1/O,Ee=C-J*G,Ve=F-he*G,ue=q-J*X,Ue=I-he*X,ke=ne-J*ge,qe=Y-he*ge,me=ke*Ue-qe*ue,He=Ee*qe-Ve*ke,Et=ue*Ve-Ue*Ee;if(i){if(me<0||He<0||Et<0)return null}else if((me<0||He<0||Et<0)&&(me>0||He>0||Et>0))return null;const ze=me+He+Et;if(ze===0)return null;const ot=Q*(me*G+He*X+Et*ge);return(ze>0?ot<0:ot>0)?null:this.at(ot/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ii extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fu=new Qe,Ts=new Tr,$r=new ki,Uu=new L,Qr=new L,eo=new L,to=new L,qc=new L,no=new L,Ou=new L,io=new L;class At extends Yt{constructor(e=new hn,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){no.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(qc.fromBufferAttribute(u,e),r?no.addScaledVector(qc,h):no.addScaledVector(qc.sub(t),h))}t.add(no)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),Ts.copy(e.ray).recast(e.near),!($r.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere($r,Uu)===null||Ts.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Fu.copy(s).invert(),Ts.copy(e.ray).applyMatrix4(Fu),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=r[p.materialIndex],_=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=_,E=M;x<E;x+=3){const w=o.getX(x),b=o.getX(x+1),y=o.getX(x+2);i=so(this,m,e,n,l,h,u,w,b,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const _=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);i=so(this,r,e,n,l,h,u,_,M,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=r[p.materialIndex],_=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let x=_,E=M;x<E;x+=3){const w=x,b=x+1,y=x+2;i=so(this,m,e,n,l,h,u,w,b,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const _=p,M=p+1,x=p+2;i=so(this,r,e,n,l,h,u,_,M,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Pm(a,e,t,n,i,s,r,o){let c;if(e.side===Un?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===ms,o),c===null)return null;io.copy(o),io.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(io);return l<t.near||l>t.far?null:{distance:l,point:io.clone(),object:a}}function so(a,e,t,n,i,s,r,o,c,l){a.getVertexPosition(o,Qr),a.getVertexPosition(c,eo),a.getVertexPosition(l,to);const h=Pm(a,e,t,n,Qr,eo,to,Ou);if(h){const u=new L;_i.getBarycoord(Ou,Qr,eo,to,u),i&&(h.uv=_i.getInterpolatedAttribute(i,o,c,l,u,new Ie)),s&&(h.uv1=_i.getInterpolatedAttribute(s,o,c,l,u,new Ie)),r&&(h.normal=_i.getInterpolatedAttribute(r,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};_i.getNormal(Qr,eo,to,f.normal),h.face=f,h.barycoord=u}return h}const za=new qt,ku=new qt,Bu=new qt,Dm=new qt,zu=new Qe,ao=new L,Xc=new ki,Gu=new Qe,Kc=new Tr;class Lm extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mu,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ao),this.boundingBox.expandByPoint(ao)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ao),this.boundingSphere.expandByPoint(ao)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xc.copy(this.boundingSphere),Xc.applyMatrix4(i),e.ray.intersectsSphere(Xc)!==!1&&(Gu.copy(i).invert(),Kc.copy(e.ray).applyMatrix4(Gu),!(this.boundingBox!==null&&Kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ku.fromBufferAttribute(i.attributes.skinIndex,e),Bu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(za.copy(t),t.set(0,0,0,0)):(za.set(t.x,t.y,t.z,1),t.set(0,0,0)),za.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const r=Bu.getComponent(s);if(r!==0){const o=ku.getComponent(s);zu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Dm.copy(za).applyMatrix4(zu),r)}}return t.isVector4&&(t.w=za.w),t.applyMatrix4(this.bindMatrixInverse)}}class yd extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wr extends vn{constructor(e=null,t=1,n=1,i,s,r,o,c,l=on,h=on,u,f){super(null,r,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vu=new Qe,Nm=new Qe;class Fh{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Nm;Vu.multiplyMatrices(o,t[s]),Vu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wr(t,e,e,hi,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(nt("Skeleton: No bone found with UUID:",s),r=new yd),this.bones.push(r),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class jo extends yn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ea=new Qe,Hu=new Qe,ro=[],Wu=new fi,Im=new Qe,Ga=new At,Va=new ki;class Cs extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Im)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ea),Wu.copy(e.boundingBox).applyMatrix4(ea),this.boundingBox.union(Wu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ea),Va.copy(e.boundingSphere).applyMatrix4(ea),this.boundingSphere.union(Va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ga.geometry=this.geometry,Ga.material=this.material,Ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(n),e.ray.intersectsSphere(Va)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ea),Hu.multiplyMatrices(n,ea),Ga.matrixWorld=Hu,Ga.raycast(e,ro);for(let r=0,o=ro.length;r<o;r++){const c=ro[r];c.instanceId=s,c.object=this,t.push(c)}ro.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(i*this.count),i,this.count,nc,li));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ws=new ki,Fm=new Ie(.5,.5),oo=new L;class gr{constructor(e=new us,t=new us,n=new us,i=new us,s=new us,r=new us){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi,n=!1){const i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],v=s[9],p=s[10],m=s[11],_=s[12],M=s[13],x=s[14],E=s[15];if(i[0].setComponents(l-r,d-h,m-g,E-_).normalize(),i[1].setComponents(l+r,d+h,m+g,E+_).normalize(),i[2].setComponents(l+o,d+u,m+v,E+M).normalize(),i[3].setComponents(l-o,d-u,m-v,E-M).normalize(),n)i[4].setComponents(c,f,p,x).normalize(),i[5].setComponents(l-c,d-f,m-p,E-x).normalize();else if(i[4].setComponents(l-c,d-f,m-p,E-x).normalize(),t===Mi)i[5].setComponents(l+c,d+f,m+p,E+x).normalize();else if(t===pr)i[5].setComponents(c,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=Fm.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oo.x=i.normal.x>0?e.max.x:e.min.x,oo.y=i.normal.y>0?e.max.y:e.min.y,oo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const qu=new Qe;class Uh{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];qu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new gr),n[i].setFromProjectionMatrix(qu,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new gr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Uh().copy(this)}}class Td extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jo=new L,Yo=new L,Xu=new Qe,Ha=new Tr,co=new ki,jc=new L,Ku=new L;class Oh extends Yt{constructor(e=new hn,t=new Td){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Jo.fromBufferAttribute(t,i-1),Yo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jo.distanceTo(Yo);e.setAttribute("lineDistance",new Xt(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(i),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;Xu.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(Xu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=d,p=g-1;v<p;v+=l){const m=h.getX(v),_=h.getX(v+1),M=lo(this,e,Ha,c,m,_,v);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(d),m=lo(this,e,Ha,c,v,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let v=d,p=g-1;v<p;v+=l){const m=lo(this,e,Ha,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=lo(this,e,Ha,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lo(a,e,t,n,i,s,r){const o=a.geometry.attributes.position;if(Jo.fromBufferAttribute(o,i),Yo.fromBufferAttribute(o,s),t.distanceSqToSegment(Jo,Yo,jc,Ku)>n)return;jc.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(jc);if(!(l<e.near||l>e.far))return{distance:l,point:Ku.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}const ju=new L,Ju=new L;class Um extends Oh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ju.fromBufferAttribute(t,i),Ju.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ju.distanceTo(Ju);e.setAttribute("lineDistance",new Xt(n,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Om extends Oh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zo extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yu=new Qe,Jl=new Tr,ho=new ki,uo=new L;class Oo extends Yt{constructor(e=new hn,t=new Zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;Yu.copy(i).invert(),Jl.copy(e.ray).applyMatrix4(Yu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=f,v=d;g<v;g++){const p=l.getX(g);uo.fromBufferAttribute(u,p),Zu(uo,p,c,i,e,t,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,v=d;g<v;g++)uo.fromBufferAttribute(u,g),Zu(uo,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zu(a,e,t,n,i,s,r){const o=Jl.distanceSqToPoint(a);if(o<t){const c=new L;Jl.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class wd extends vn{constructor(e=[],t=pa,n,i,s,r,o,c,l,h){super(e,t,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yl extends vn{constructor(e,t,n,i,s,r,o,c,l){super(e,t,n,i,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vs extends vn{constructor(e,t,n=Oi,i,s,r,o=on,c=on,l,h=gs,u=1){if(h!==gs&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ed extends vs{constructor(e,t=Oi,n=pa,i,s,r=on,o=on,c,l=gs){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,r,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ad extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ln extends hn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(v,p,m,_,M,x,E,w,b,y,O){const C=x/b,F=E/y,G=x/2,q=E/2,I=w/2,X=b+1,ne=y+1;let Y=0,ge=0;const J=new L;for(let he=0;he<ne;he++){const Q=he*F-q;for(let Ee=0;Ee<X;Ee++){const Ve=Ee*C-G;J[v]=Ve*_,J[p]=Q*M,J[m]=I,l.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[m]=w>0?1:-1,h.push(J.x,J.y,J.z),u.push(Ee/b),u.push(1-he/y),Y+=1}}for(let he=0;he<y;he++)for(let Q=0;Q<b;Q++){const Ee=f+Q+X*he,Ve=f+Q+X*(he+1),ue=f+(Q+1)+X*(he+1),Ue=f+(Q+1)+X*he;c.push(Ee,Ve,Ue),c.push(Ve,ue,Ue),ge+=6}o.addGroup(d,ge,O),d+=ge,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kh extends hn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],o=[],c=[],l=new L,h=new Ie;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[f]/e+1)/2,h.y=(r[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wn extends hn{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const v=[],p=n/2;let m=0;_(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(d,2));function _(){const x=new L,E=new L;let w=0;const b=(t-e)/n;for(let y=0;y<=s;y++){const O=[],C=y/s,F=C*(t-e)+e;for(let G=0;G<=i;G++){const q=G/i,I=q*c+o,X=Math.sin(I),ne=Math.cos(I);E.x=F*X,E.y=-C*n+p,E.z=F*ne,u.push(E.x,E.y,E.z),x.set(X,b,ne).normalize(),f.push(x.x,x.y,x.z),d.push(q,1-C),O.push(g++)}v.push(O)}for(let y=0;y<i;y++)for(let O=0;O<s;O++){const C=v[O][y],F=v[O+1][y],G=v[O+1][y+1],q=v[O][y+1];(e>0||O!==0)&&(h.push(C,F,q),w+=3),(t>0||O!==s-1)&&(h.push(F,G,q),w+=3)}l.addGroup(m,w,0),m+=w}function M(x){const E=g,w=new Ie,b=new L;let y=0;const O=x===!0?e:t,C=x===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,p*C,0),f.push(0,C,0),d.push(.5,.5),g++;const F=g;for(let G=0;G<=i;G++){const I=G/i*c+o,X=Math.cos(I),ne=Math.sin(I);b.x=O*ne,b.y=p*C,b.z=O*X,u.push(b.x,b.y,b.z),f.push(0,C,0),w.x=X*.5+.5,w.y=ne*.5*C+.5,d.push(w.x,w.y),g++}for(let G=0;G<i;G++){const q=E+G,I=F+G;x===!0?h.push(I,I+1,q):h.push(I+1,I,q),y+=3}l.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),c=t||(r.isVector2?new Ie:new L);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,i=[],s=[],r=[],o=new L,c=new Qe;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new L)}s[0]=new L,r[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Rt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}r[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Rt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Bh extends Bi{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ie){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class km extends Bh{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function zh(){let a=0,e=0,t=0,n=0;function i(s,r,o,c){a=s,e=o,t=-3*s+3*r-2*o-c,n=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){i(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,h,u){let f=(r-s)/l-(o-s)/(l+h)+(o-r)/h,d=(o-r)/h-(c-r)/(h+u)+(c-o)/u;f*=h,d*=h,i(r,o,f,d)},calc:function(s){const r=s*s,o=r*s;return a+e*s+t*r+n*o}}}const $u=new L,Qu=new L,Jc=new zh,Yc=new zh,Zc=new zh;class Bm extends Bi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Qu.subVectors(i[0],i[1]).add(i[0]),l=Qu);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:($u.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=$u),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Jc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,p),Yc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,p),Zc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Yc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Zc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Jc.calc(c),Yc.calc(c),Zc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ef(a,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,o=a*a,c=a*o;return(2*t-2*n+s+r)*c+(-3*t+3*n-2*s-r)*o+s*a+t}function zm(a,e){const t=1-a;return t*t*e}function Gm(a,e){return 2*(1-a)*a*e}function Vm(a,e){return a*a*e}function ar(a,e,t,n){return zm(a,e)+Gm(a,t)+Vm(a,n)}function Hm(a,e){const t=1-a;return t*t*t*e}function Wm(a,e){const t=1-a;return 3*t*t*a*e}function qm(a,e){return 3*(1-a)*a*a*e}function Xm(a,e){return a*a*a*e}function rr(a,e,t,n,i){return Hm(a,e)+Wm(a,t)+qm(a,n)+Xm(a,i)}class Rd extends Bi{constructor(e=new Ie,t=new Ie,n=new Ie,i=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ie){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(rr(e,i.x,s.x,r.x,o.x),rr(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Km extends Bi{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(rr(e,i.x,s.x,r.x,o.x),rr(e,i.y,s.y,r.y,o.y),rr(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cd extends Bi{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jm extends Bi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends Bi{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(ar(e,i.x,s.x,r.x),ar(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jm extends Bi{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(ar(e,i.x,s.x,r.x),ar(e,i.y,s.y,r.y),ar(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dd extends Bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(ef(o,c.x,l.x,h.x,u.x),ef(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ie().fromArray(i))}return this}}var Zl=Object.freeze({__proto__:null,ArcCurve:km,CatmullRomCurve3:Bm,CubicBezierCurve:Rd,CubicBezierCurve3:Km,EllipseCurve:Bh,LineCurve:Cd,LineCurve3:jm,QuadraticBezierCurve:Pd,QuadraticBezierCurve3:Jm,SplineCurve:Dd});class Ym extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Zl[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class $l extends Ym{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cd(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Pd(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const o=new Rd(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i),new Ie(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,r,o,c),this}absellipse(e,t,n,i,s,r,o,c){const l=new Bh(e,t,n,i,s,r,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ql extends $l{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new $l().fromJSON(i))}return this}}function Zm(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let s=Ld(a,0,i,t,!0);const r=[];if(!s||s.next===s.prev)return r;let o,c,l;if(n&&(s=n0(a,e,s,t)),a.length>80*t){o=a[0],c=a[1];let h=o,u=c;for(let f=t;f<i;f+=t){const d=a[f],g=a[f+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return vr(s,r,t,o,c,l,0),r}function Ld(a,e,t,n,i){let s;if(i===d0(a,e,t,n)>0)for(let r=e;r<t;r+=n)s=tf(r/n|0,a[r],a[r+1],s);else for(let r=t-n;r>=e;r-=n)s=tf(r/n|0,a[r],a[r+1],s);return s&&ga(s,s.next)&&(xr(s),s=s.next),s}function Ls(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(ga(t,t.next)||Qt(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vr(a,e,t,n,i,s,r){if(!a)return;!r&&s&&o0(a,n,i,s);let o=a;for(;a.prev!==a.next;){const c=a.prev,l=a.next;if(s?Qm(a,n,i,s):$m(a)){e.push(c.i,a.i,l.i),xr(a),a=l.next,o=l.next;continue}if(a=l,a===o){r?r===1?(a=e0(Ls(a),e),vr(a,e,t,n,i,s,2)):r===2&&t0(a,e,t,n,i,s):vr(Ls(a),e,t,n,i,s,1);break}}}function $m(a){const e=a.prev,t=a,n=a.next;if(Qt(e,t,n)>=0)return!1;const i=e.x,s=t.x,r=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,s,r),u=Math.min(o,c,l),f=Math.max(i,s,r),d=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&$a(i,o,s,c,r,l,g.x,g.y)&&Qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qm(a,e,t,n){const i=a.prev,s=a,r=a.next;if(Qt(i,s,r)>=0)return!1;const o=i.x,c=s.x,l=r.x,h=i.y,u=s.y,f=r.y,d=Math.min(o,c,l),g=Math.min(h,u,f),v=Math.max(o,c,l),p=Math.max(h,u,f),m=eh(d,g,e,t,n),_=eh(v,p,e,t,n);let M=a.prevZ,x=a.nextZ;for(;M&&M.z>=m&&x&&x.z<=_;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==i&&M!==r&&$a(o,h,c,u,l,f,M.x,M.y)&&Qt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==r&&$a(o,h,c,u,l,f,x.x,x.y)&&Qt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==i&&M!==r&&$a(o,h,c,u,l,f,M.x,M.y)&&Qt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==r&&$a(o,h,c,u,l,f,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function e0(a,e){let t=a;do{const n=t.prev,i=t.next.next;!ga(n,i)&&Id(n,t,t.next,i)&&br(n,i)&&br(i,n)&&(e.push(n.i,t.i,i.i),xr(t),xr(t.next),t=a=i),t=t.next}while(t!==a);return Ls(t)}function t0(a,e,t,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&h0(r,o)){let c=Fd(r,o);r=Ls(r,r.next),c=Ls(c,c.next),vr(r,e,t,n,i,s,0),vr(c,e,t,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function n0(a,e,t,n){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s]*n,c=s<r-1?e[s+1]*n:a.length,l=Ld(a,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(l0(l))}i.sort(i0);for(let s=0;s<i.length;s++)t=s0(i[s],t);return t}function i0(a,e){let t=a.x-e.x;if(t===0&&(t=a.y-e.y,t===0)){const n=(a.next.y-a.y)/(a.next.x-a.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function s0(a,e){const t=a0(a,e);if(!t)return e;const n=Fd(t,a);return Ls(n,n.next),Ls(t,t.next)}function a0(a,e){let t=e;const n=a.x,i=a.y;let s=-1/0,r;if(ga(a,t))return t;do{if(ga(a,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,r=t.x<t.next.x?t:t.next,u===n))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,c=r.x,l=r.y;let h=1/0;t=r;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Nd(i<l?n:s,i,c,l,i<l?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);br(t,a)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&r0(r,t)))&&(r=t,h=u)}t=t.next}while(t!==o);return r}function r0(a,e){return Qt(a.prev,a,e.prev)<0&&Qt(e.next,a,a.next)<0}function o0(a,e,t,n){let i=a;do i.z===0&&(i.z=eh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,c0(i)}function c0(a){let e,t=1;do{let n=a,i;a=null;let s=null;for(e=0;n;){e++;let r=n,o=0;for(let l=0;l<t&&(o++,r=r.nextZ,!!r);l++);let c=t;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,c--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;n=r}s.nextZ=null,t*=2}while(e>1);return a}function eh(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function l0(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Nd(a,e,t,n,i,s,r,o){return(i-r)*(e-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(i-r)*(n-o)}function $a(a,e,t,n,i,s,r,o){return!(a===r&&e===o)&&Nd(a,e,t,n,i,s,r,o)}function h0(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!u0(a,e)&&(br(a,e)&&br(e,a)&&f0(a,e)&&(Qt(a.prev,a,e.prev)||Qt(a,e.prev,e))||ga(a,e)&&Qt(a.prev,a,a.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function ga(a,e){return a.x===e.x&&a.y===e.y}function Id(a,e,t,n){const i=po(Qt(a,e,t)),s=po(Qt(a,e,n)),r=po(Qt(t,n,a)),o=po(Qt(t,n,e));return!!(i!==s&&r!==o||i===0&&fo(a,t,e)||s===0&&fo(a,n,e)||r===0&&fo(t,a,n)||o===0&&fo(t,e,n))}function fo(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function po(a){return a>0?1:a<0?-1:0}function u0(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Id(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function br(a,e){return Qt(a.prev,a,a.next)<0?Qt(a,e,a.next)>=0&&Qt(a,a.prev,e)>=0:Qt(a,e,a.prev)<0||Qt(a,a.next,e)<0}function f0(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function Fd(a,e){const t=th(a.i,a.x,a.y),n=th(e.i,e.x,e.y),i=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function tf(a,e,t,n){const i=th(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xr(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function th(a,e,t){return{i:a,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function d0(a,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}class p0{static triangulate(e,t,n=2){return Zm(e,t,n)}}class ha{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ha.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];nf(e),sf(n,e);let r=e.length;t.forEach(nf);for(let c=0;c<t.length;c++)i.push(r),r+=t[c].length,sf(n,t[c]);const o=p0.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function nf(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function sf(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class $o extends hn{constructor(e=new Ql([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];r(l)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(s,2)),this.computeVertexNormals();function r(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:m0;let M,x=!1,E,w,b,y;if(m){M=m.getSpacedPoints(h),x=!0,f=!1;const pe=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,pe),w=new L,b=new L,y=new L}f||(p=0,d=0,g=0,v=0);const O=o.extractPoints(l);let C=O.shape;const F=O.holes;if(!ha.isClockWise(C)){C=C.reverse();for(let pe=0,Ae=F.length;pe<Ae;pe++){const Pe=F[pe];ha.isClockWise(Pe)&&(F[pe]=Pe.reverse())}}function q(pe){const Pe=10000000000000001e-36;let Be=pe[0];for(let Fe=1;Fe<=pe.length;Fe++){const st=Fe%pe.length,Ke=pe[st],ft=Ke.x-Be.x,dt=Ke.y-Be.y,bt=ft*ft+dt*dt,z=Math.max(Math.abs(Ke.x),Math.abs(Ke.y),Math.abs(Be.x),Math.abs(Be.y)),Ht=Pe*z*z;if(bt<=Ht){pe.splice(st,1),Fe--;continue}Be=Ke}}q(C),F.forEach(q);const I=F.length,X=C;for(let pe=0;pe<I;pe++){const Ae=F[pe];C=C.concat(Ae)}function ne(pe,Ae,Pe){return Ae||mt("ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(Ae,Pe)}const Y=C.length;function ge(pe,Ae,Pe){let Be,Fe,st;const Ke=pe.x-Ae.x,ft=pe.y-Ae.y,dt=Pe.x-pe.x,bt=Pe.y-pe.y,z=Ke*Ke+ft*ft,Ht=Ke*bt-ft*dt;if(Math.abs(Ht)>Number.EPSILON){const gt=Math.sqrt(z),Lt=Math.sqrt(dt*dt+bt*bt),be=Ae.x-ft/gt,It=Ae.y+Ke/gt,je=Pe.x-bt/Lt,Je=Pe.y+dt/Lt,R=((je-be)*bt-(Je-It)*dt)/(Ke*bt-ft*dt);Be=be+Ke*R-pe.x,Fe=It+ft*R-pe.y;const S=Be*Be+Fe*Fe;if(S<=2)return new Ie(Be,Fe);st=Math.sqrt(S/2)}else{let gt=!1;Ke>Number.EPSILON?dt>Number.EPSILON&&(gt=!0):Ke<-Number.EPSILON?dt<-Number.EPSILON&&(gt=!0):Math.sign(ft)===Math.sign(bt)&&(gt=!0),gt?(Be=-ft,Fe=Ke,st=Math.sqrt(z)):(Be=Ke,Fe=ft,st=Math.sqrt(z/2))}return new Ie(Be/st,Fe/st)}const J=[];for(let pe=0,Ae=X.length,Pe=Ae-1,Be=pe+1;pe<Ae;pe++,Pe++,Be++)Pe===Ae&&(Pe=0),Be===Ae&&(Be=0),J[pe]=ge(X[pe],X[Pe],X[Be]);const he=[];let Q,Ee=J.concat();for(let pe=0,Ae=I;pe<Ae;pe++){const Pe=F[pe];Q=[];for(let Be=0,Fe=Pe.length,st=Fe-1,Ke=Be+1;Be<Fe;Be++,st++,Ke++)st===Fe&&(st=0),Ke===Fe&&(Ke=0),Q[Be]=ge(Pe[Be],Pe[st],Pe[Ke]);he.push(Q),Ee=Ee.concat(Q)}let Ve;if(p===0)Ve=ha.triangulateShape(X,F);else{const pe=[],Ae=[];for(let Pe=0;Pe<p;Pe++){const Be=Pe/p,Fe=d*Math.cos(Be*Math.PI/2),st=g*Math.sin(Be*Math.PI/2)+v;for(let Ke=0,ft=X.length;Ke<ft;Ke++){const dt=ne(X[Ke],J[Ke],st);He(dt.x,dt.y,-Fe),Be===0&&pe.push(dt)}for(let Ke=0,ft=I;Ke<ft;Ke++){const dt=F[Ke];Q=he[Ke];const bt=[];for(let z=0,Ht=dt.length;z<Ht;z++){const gt=ne(dt[z],Q[z],st);He(gt.x,gt.y,-Fe),Be===0&&bt.push(gt)}Be===0&&Ae.push(bt)}}Ve=ha.triangulateShape(pe,Ae)}const ue=Ve.length,Ue=g+v;for(let pe=0;pe<Y;pe++){const Ae=f?ne(C[pe],Ee[pe],Ue):C[pe];x?(b.copy(E.normals[0]).multiplyScalar(Ae.x),w.copy(E.binormals[0]).multiplyScalar(Ae.y),y.copy(M[0]).add(b).add(w),He(y.x,y.y,y.z)):He(Ae.x,Ae.y,0)}for(let pe=1;pe<=h;pe++)for(let Ae=0;Ae<Y;Ae++){const Pe=f?ne(C[Ae],Ee[Ae],Ue):C[Ae];x?(b.copy(E.normals[pe]).multiplyScalar(Pe.x),w.copy(E.binormals[pe]).multiplyScalar(Pe.y),y.copy(M[pe]).add(b).add(w),He(y.x,y.y,y.z)):He(Pe.x,Pe.y,u/h*pe)}for(let pe=p-1;pe>=0;pe--){const Ae=pe/p,Pe=d*Math.cos(Ae*Math.PI/2),Be=g*Math.sin(Ae*Math.PI/2)+v;for(let Fe=0,st=X.length;Fe<st;Fe++){const Ke=ne(X[Fe],J[Fe],Be);He(Ke.x,Ke.y,u+Pe)}for(let Fe=0,st=F.length;Fe<st;Fe++){const Ke=F[Fe];Q=he[Fe];for(let ft=0,dt=Ke.length;ft<dt;ft++){const bt=ne(Ke[ft],Q[ft],Be);x?He(bt.x,bt.y+M[h-1].y,M[h-1].x+Pe):He(bt.x,bt.y,u+Pe)}}}ke(),qe();function ke(){const pe=i.length/3;if(f){let Ae=0,Pe=Y*Ae;for(let Be=0;Be<ue;Be++){const Fe=Ve[Be];Et(Fe[2]+Pe,Fe[1]+Pe,Fe[0]+Pe)}Ae=h+p*2,Pe=Y*Ae;for(let Be=0;Be<ue;Be++){const Fe=Ve[Be];Et(Fe[0]+Pe,Fe[1]+Pe,Fe[2]+Pe)}}else{for(let Ae=0;Ae<ue;Ae++){const Pe=Ve[Ae];Et(Pe[2],Pe[1],Pe[0])}for(let Ae=0;Ae<ue;Ae++){const Pe=Ve[Ae];Et(Pe[0]+Y*h,Pe[1]+Y*h,Pe[2]+Y*h)}}n.addGroup(pe,i.length/3-pe,0)}function qe(){const pe=i.length/3;let Ae=0;me(X,Ae),Ae+=X.length;for(let Pe=0,Be=F.length;Pe<Be;Pe++){const Fe=F[Pe];me(Fe,Ae),Ae+=Fe.length}n.addGroup(pe,i.length/3-pe,1)}function me(pe,Ae){let Pe=pe.length;for(;--Pe>=0;){const Be=Pe;let Fe=Pe-1;Fe<0&&(Fe=pe.length-1);for(let st=0,Ke=h+p*2;st<Ke;st++){const ft=Y*st,dt=Y*(st+1),bt=Ae+Be+ft,z=Ae+Fe+ft,Ht=Ae+Fe+dt,gt=Ae+Be+dt;ze(bt,z,Ht,gt)}}}function He(pe,Ae,Pe){c.push(pe),c.push(Ae),c.push(Pe)}function Et(pe,Ae,Pe){ot(pe),ot(Ae),ot(Pe);const Be=i.length/3,Fe=_.generateTopUV(n,i,Be-3,Be-2,Be-1);ct(Fe[0]),ct(Fe[1]),ct(Fe[2])}function ze(pe,Ae,Pe,Be){ot(pe),ot(Ae),ot(Be),ot(Ae),ot(Pe),ot(Be);const Fe=i.length/3,st=_.generateSideWallUV(n,i,Fe-6,Fe-3,Fe-2,Fe-1);ct(st[0]),ct(st[1]),ct(st[3]),ct(st[1]),ct(st[2]),ct(st[3])}function ot(pe){i.push(c[pe*3+0]),i.push(c[pe*3+1]),i.push(c[pe*3+2])}function ct(pe){s.push(pe.x),s.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return g0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Zl[i.type]().fromJSON(i)),new $o(n,e.options)}}const m0={generateTopUV:function(a,e,t,n,i){const s=e[t*3],r=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new Ie(s,r),new Ie(o,c),new Ie(l,h)]},generateSideWallUV:function(a,e,t,n,i,s){const r=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],v=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(o-h)<Math.abs(r-l)?[new Ie(r,1-c),new Ie(l,1-u),new Ie(f,1-g),new Ie(v,1-m)]:[new Ie(o,1-c),new Ie(h,1-u),new Ie(d,1-g),new Ie(p,1-m)]}};function g0(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xa extends hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const _=m*f-r;for(let M=0;M<l;M++){const x=M*u-s;g.push(x,-_,0),v.push(0,0,1),p.push(M/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){const M=_+l*m,x=_+l*(m+1),E=_+1+l*(m+1),w=_+1+l*m;d.push(M,x,w),d.push(x,E,w)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.widthSegments,e.heightSegments)}}class va extends hn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new L,f=new L,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const _=[],M=m/n,x=r+M*o,E=e*Math.cos(x),w=Math.sqrt(e*e-E*E);let b=0;m===0&&r===0?b=.5/t:m===n&&c===Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){const O=y/t,C=i+O*s;u.x=-w*Math.cos(C),u.y=E,u.z=w*Math.sin(C),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(O+b,1-M),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const M=h[m][_+1],x=h[m][_],E=h[m+1][_],w=h[m+1][_+1];(m!==0||r>0)&&d.push(M,x,w),(m!==n-1||c<Math.PI)&&d.push(x,E,w)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ba(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];if(af(i))i.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(af(i[0])){const s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Vn(a){const e={};for(let t=0;t<a.length;t++){const n=ba(a[t]);for(const i in n)e[i]=n[i]}return e}function af(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function v0(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ud(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Rs={clone:ba,merge:Vn};var b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new qt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Tt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Od extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mn extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends mn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ua('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ua('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _0 extends ui{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class M0 extends ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=mh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S0 extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y0 extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function fs(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Qa(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}function T0(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rf(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function w0(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class _a{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class E0 extends _a{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case bu:s=e,o=2*t-n;break;case xu:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bu:r=e,c=2*n-t;break;case xu:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),v=g*g,p=v*g,m=-f*p+2*f*v-f*g,_=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,M=(-1-d)*p+(1.5+d)*v+.5*g,x=d*p-d*v;for(let E=0;E!==o;++E)s[E]=m*r[h+E]+_*r[l+E]+M*r[c+E]+x*r[u+E];return s}}class A0 extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=r[l+f]*u+r[c+f]*h;return s}}class R0 extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class C0 extends _a{interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-t)/(i-t),v=1-g;for(let p=0;p!==o;++p)s[p]=r[l+p]*v+r[c+p]*g;return s}const f=o*2,d=e-1;for(let g=0;g!==o;++g){const v=r[l+g],p=r[c+g],m=d*f+g*2,_=u[m],M=u[m+1],x=e*f+g*2,E=h[x],w=h[x+1],b=D0(n,t,_,E,i);s[g]=kd(b,v,M,w,p)}return s}}function kd(a,e,t,n,i){const s=1-a;return s*s*s*e+3*s*s*a*t+3*s*a*a*n+a*a*a*i}function P0(a,e,t,n,i){const s=1-a;return 3*s*s*(t-e)+6*s*a*(n-t)+3*a*a*(i-n)}function D0(a,e,t,n,i){let s=(a-e)/(i-e);for(let r=0;r<8;r++){const o=kd(s,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;const c=P0(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}class Ti{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fs(t,this.TimeBufferType),this.values=fs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fs(e.times,Array),values:fs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Qa(e.settings)&&(n.settings={inTangents:fs(e.settings.inTangents,Array),outTangents:fs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new R0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new A0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new E0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new C0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case Tc:t=this.InterpolantFactoryMethodSmooth;break;case gu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Tc;case this.InterpolantFactoryMethodBezier:return gu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Qa(this.settings)&&(of(this.settings.inTangents,e),of(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Qa(this.settings)&&(cf(this.settings.inTangents,e),cf(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){mt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){mt("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&Xp(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){mt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Tc,s=e.length-1;let r=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[f+g]||v!==t[d+g]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const u=o*n,f=r*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Qa(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function of(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]+=e}function cf(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=fr;class Ma extends Ti{constructor(e,t,n){super(e,t,n)}}Ma.prototype.ValueTypeName="bool";Ma.prototype.ValueBufferType=Array;Ma.prototype.DefaultInterpolation=ur;Ma.prototype.InterpolantFactoryMethodLinear=void 0;Ma.prototype.InterpolantFactoryMethodSmooth=void 0;class Bd extends Ti{constructor(e,t,n,i){super(e,t,n,i)}}Bd.prototype.ValueTypeName="color";class _r extends Ti{constructor(e,t,n,i){super(e,t,n,i)}}_r.prototype.ValueTypeName="number";class L0 extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Rn.slerpFlat(s,0,r,l-o,r,l,c);return s}}class Mr extends Ti{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new L0(this.times,this.values,this.getValueSize(),e)}}Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sa extends Ti{constructor(e,t,n){super(e,t,n)}}Sa.prototype.ValueTypeName="string";Sa.prototype.ValueBufferType=Array;Sa.prototype.DefaultInterpolation=ur;Sa.prototype.InterpolantFactoryMethodLinear=void 0;Sa.prototype.InterpolantFactoryMethodSmooth=void 0;class Qo extends Ti{constructor(e,t,n,i){super(e,t,n,i)}}Qo.prototype.ValueTypeName="vector";class N0{constructor(e="",t=-1,n=[],i=Fp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(F0(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(Ti.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=T0(c);c=rf(c,1,h),l=rf(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new _r(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function I0(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _r;case"vector":case"vector2":case"vector3":case"vector4":return Qo;case"color":return Bd;case"quaternion":return Mr;case"bool":case"boolean":return Ma;case"string":return Sa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function F0(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=I0(a.type);if(a.times===void 0){const n=[],i=[];w0(a.keys,n,i,"value"),a.times=n,a.values=i}let t;return e.parse!==void 0?t=e.parse(a):t=new e(a.name,a.times,a.values,a.interpolation),Qa(a.settings)&&(t.settings={inTangents:fs(a.settings.inTangents,Float32Array),outTangents:fs(a.settings.outTangents,Float32Array)}),t}const Ji={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(lf(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!lf(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function lf(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class U0{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const O0=new U0;class ya{constructor(e){this.manager=e!==void 0?e:O0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}ya.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi={};class k0 extends Error{constructor(e,t){super(e),this.response=t}}class zd extends ya{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ji.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:i});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Xi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const p=new ReadableStream({start(m){_();function _(){u.read().then(({done:M,value:x})=>{if(M)m.close();else{v+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let w=0,b=h.length;w<b;w++){const y=h[w];y.onProgress&&y.onProgress(E)}m.enqueue(x),_()}},M=>{m.error(M)})}}});return new Response(p)}else throw new k0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ji.add(`file:${e}`,l);const h=Xi[e];delete Xi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Xi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Xi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ta=new WeakMap;class B0 extends ya{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ji.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let u=ta.get(r);u===void 0&&(u=[],ta.set(r,u)),u.push({onLoad:t,onError:i})}return r}const o=mr("img");function c(){h(),t&&t(this);const u=ta.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}ta.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),Ji.remove(`image:${e}`);const f=ta.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}ta.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ji.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class z0 extends ya{constructor(e){super(e)}load(e,t,n,i){const s=new vn,r=new B0(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class sc extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class G0 extends sc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const $c=new Qe,hf=new L,uf=new L;class Gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(hf),uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix($c,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===pr||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mo=new L,go=new Rn,Ei=new L;class Gd extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mo,go,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(mo,go,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new L,ff=new Ie,df=new Ie;class Jn extends Gd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,ff,df),t.subVectors(df,ff)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class V0 extends Gh{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ma*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class ko extends sc{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new V0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class H0 extends Gh{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class ac extends sc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new H0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Er extends Gd{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class W0 extends Gh{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nh extends sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new W0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class or{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qc=new WeakMap;class q0 extends ya{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ji.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{Qc.has(r)===!0?(i&&i(Qc.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ji.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Qc.set(c,l),Ji.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ji.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const na=-90,ia=1;class ih extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jn(na,ia,e,t);i.layers=this.layers,this.add(i);const s=new Jn(na,ia,e,t);s.layers=this.layers,this.add(s);const r=new Jn(na,ia,e,t);r.layers=this.layers,this.add(r);const o=new Jn(na,ia,e,t);o.layers=this.layers,this.add(o);const c=new Jn(na,ia,e,t);c.layers=this.layers,this.add(c);const l=new Jn(na,ia,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class X0 extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Vh="\\[\\]\\.:\\/",K0=new RegExp("["+Vh+"]","g"),Hh="[^"+Vh+"]",j0="[^"+Vh.replace("\\.","")+"]",J0=/((?:WC+[\/:])*)/.source.replace("WC",Hh),Y0=/(WCOD+)?/.source.replace("WCOD",j0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),$0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),Q0=new RegExp("^"+J0+Y0+Z0+$0+"$"),eg=["material","materials","bones","map"];class tg{constructor(e,t,n){const i=n||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Wt{constructor(e,t,n){this.path=t,this.parsedPath=n||Wt.parseTrackName(t),this.node=Wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Wt.Composite(e,t,n):new Wt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K0,"")}static parseTrackName(e){const t=Q0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);eg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Wt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Wt.Composite=tg;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const pf=new Qe;class sh{constructor(e,t,n=0,i=1/0){this.ray=new Tr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pf),this}intersectObject(e,t=!0,n=[]){return ah(e,this,n,t),n.sort(mf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ah(e[i],this,n,t);return n.sort(mf),n}}function mf(a,e){return a.distance-e.distance}function ah(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=a.children;for(let r=0,o=s.length;r<o;r++)ah(s[r],e,t,!0)}}function gf(a,e,t,n){const i=ng(n);switch(t){case cd:return a*e;case nc:return a*e/i.components*i.byteLength;case wh:return a*e/i.components*i.byteLength;case Ds:return a*e*2/i.components*i.byteLength;case Eh:return a*e*2/i.components*i.byteLength;case ld:return a*e*3/i.components*i.byteLength;case hi:return a*e*4/i.components*i.byteLength;case Ah:return a*e*4/i.components*i.byteLength;case No:case Io:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Fo:case Uo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xl:case Ml:return Math.max(a,16)*Math.max(e,8)/4;case bl:case _l:return Math.max(a,8)*Math.max(e,8)/2;case Sl:case yl:case wl:case El:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Wo:case Al:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Hl:case Wl:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ql:case Xl:return Math.ceil(a/4)*Math.ceil(e/4)*8;case qo:case Kl:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ng(a){switch(a){case Yn:case sd:return{byteLength:1,components:1};case hr:case ad:case An:return{byteLength:2,components:1};case yh:case Th:return{byteLength:2,components:4};case Oi:case Sh:case li:return{byteLength:4,components:1};case rd:case od:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);function Vd(){let a=null,e=!1,t=null,n=null;function i(s,r){n=a.requestAnimationFrame(i),t(s,r)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function ig(a){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=a.createBuffer();a.bindBuffer(c,f),a.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=a.SHORT;else if(l instanceof Uint32Array)d=a.UNSIGNED_INT;else if(l instanceof Int32Array)d=a.INT;else if(l instanceof Int8Array)d=a.BYTE;else if(l instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(a.bindBuffer(l,o),u.length===0)a.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];a.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:r}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
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
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
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
#endif`,ug=`#ifdef USE_AOMAP
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vg=`#ifdef USE_IRIDESCENCE
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
#endif`,bg=`#ifdef USE_BUMPMAP
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
} // validated`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
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
}`,qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
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
#endif`,tv=`uniform sampler2D dfgLUT;
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
}`,nv=`
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
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
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,av=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dv=`#if defined( USE_POINTS_UV )
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
#endif`,pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vv=`#if defined( USE_MORPHCOLORS )
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
#endif`,bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
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
#endif`,_v=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
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
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vv=`float getShadowMask() {
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
}`,Hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
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
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xv=`#ifdef USE_SKINNING
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
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#ifdef USE_TRANSMISSION
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sb=`uniform sampler2D t2D;
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform float backgroundBlurriness;
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`#include <common>
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
}`,hb=`#if DEPTH_PACKING == 3200
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
}`,ub=`#define DISTANCE
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
}`,fb=`#define DISTANCE
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`uniform float scale;
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
}`,gb=`uniform vec3 diffuse;
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
}`,vb=`#include <common>
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
}`,bb=`uniform vec3 diffuse;
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
}`,xb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
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
}`,Mb=`#define MATCAP
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
}`,Sb=`#define MATCAP
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
}`,yb=`#define NORMAL
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
}`,Tb=`#define NORMAL
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
}`,wb=`#define PHONG
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
}`,Eb=`#define PHONG
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
}`,Ab=`#define STANDARD
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
}`,Rb=`#define STANDARD
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
}`,Cb=`#define TOON
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
}`,Pb=`#define TOON
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
}`,Db=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Nb=`#include <common>
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
}`,Ib=`uniform vec3 color;
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
}`,Fb=`uniform float rotation;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:sg,alphahash_pars_fragment:ag,alphamap_fragment:rg,alphamap_pars_fragment:og,alphatest_fragment:cg,alphatest_pars_fragment:lg,aomap_fragment:hg,aomap_pars_fragment:ug,batching_pars_vertex:fg,batching_vertex:dg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:gg,iridescence_fragment:vg,bumpmap_pars_fragment:bg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:Mg,clipping_planes_vertex:Sg,color_fragment:yg,color_pars_fragment:Tg,color_pars_vertex:wg,color_vertex:Eg,common:Ag,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Pg,emissivemap_fragment:Dg,emissivemap_pars_fragment:Lg,colorspace_fragment:Ng,colorspace_pars_fragment:Ig,envmap_fragment:Fg,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Og,envmap_pars_vertex:kg,envmap_physical_pars_fragment:Jg,envmap_vertex:Bg,fog_vertex:zg,fog_pars_vertex:Gg,fog_fragment:Vg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Wg,lightmap_pars_fragment:qg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:Kg,lights_pars_begin:jg,lights_toon_fragment:Yg,lights_toon_pars_fragment:Zg,lights_phong_fragment:$g,lights_phong_pars_fragment:Qg,lights_physical_fragment:ev,lights_physical_pars_fragment:tv,lights_fragment_begin:nv,lights_fragment_maps:iv,lights_fragment_end:sv,lightprobes_pars_fragment:av,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:lv,map_fragment:hv,map_pars_fragment:uv,map_particle_fragment:fv,map_particle_pars_fragment:dv,metalnessmap_fragment:pv,metalnessmap_pars_fragment:mv,morphinstance_vertex:gv,morphcolor_vertex:vv,morphnormal_vertex:bv,morphtarget_pars_vertex:xv,morphtarget_vertex:_v,normal_fragment_begin:Mv,normal_fragment_maps:Sv,normal_pars_fragment:yv,normal_pars_vertex:Tv,normal_vertex:wv,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Rv,clearcoat_pars_fragment:Cv,iridescence_pars_fragment:Pv,opaque_fragment:Dv,packing:Lv,premultiplied_alpha_fragment:Nv,project_vertex:Iv,dithering_fragment:Fv,dithering_pars_fragment:Uv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:kv,shadowmap_pars_fragment:Bv,shadowmap_pars_vertex:zv,shadowmap_vertex:Gv,shadowmask_pars_fragment:Vv,skinbase_vertex:Hv,skinning_pars_vertex:Wv,skinning_vertex:qv,skinnormal_vertex:Xv,specularmap_fragment:Kv,specularmap_pars_fragment:jv,tonemapping_fragment:Jv,tonemapping_pars_fragment:Yv,transmission_fragment:Zv,transmission_pars_fragment:$v,uv_pars_fragment:Qv,uv_pars_vertex:eb,uv_vertex:tb,worldpos_vertex:nb,background_vert:ib,background_frag:sb,backgroundCube_vert:ab,backgroundCube_frag:rb,cube_vert:ob,cube_frag:cb,depth_vert:lb,depth_frag:hb,distance_vert:ub,distance_frag:fb,equirect_vert:db,equirect_frag:pb,linedashed_vert:mb,linedashed_frag:gb,meshbasic_vert:vb,meshbasic_frag:bb,meshlambert_vert:xb,meshlambert_frag:_b,meshmatcap_vert:Mb,meshmatcap_frag:Sb,meshnormal_vert:yb,meshnormal_frag:Tb,meshphong_vert:wb,meshphong_frag:Eb,meshphysical_vert:Ab,meshphysical_frag:Rb,meshtoon_vert:Cb,meshtoon_frag:Pb,points_vert:Db,points_frag:Lb,shadow_vert:Nb,shadow_frag:Ib,sprite_vert:Fb,sprite_frag:Ub},Ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ni={basic:{uniforms:Vn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Vn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Vn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Vn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Vn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Vn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Vn([Ge.points,Ge.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Vn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Vn([Ge.common,Ge.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Vn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Vn([Ge.sprite,Ge.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Vn([Ge.common,Ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Vn([Ge.lights,Ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ni.physical={uniforms:Vn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const vo={r:0,b:0,g:0},Ob=new Qe,Hd=new Tt;Hd.set(-1,0,0,0,1,0,0,0,1);function kb(a,e,t,n,i,s){const r=new it(0);let o=i===!0?0:1,c,l,h=null,u=0,f=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const x=_.backgroundBlurriness>0;M=e.get(M,x)}return M}function g(_){let M=!1;const x=d(_);x===null?p(r,o):x&&x.isColor&&(p(x,1),M=!0);const E=a.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(_,M){const x=d(M);x&&x.isCubeTexture?(l===void 0&&(l=new At(new ln(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ba(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hd),l.material.toneMapped=Pt.getTransfer(x.colorSpace)!==Vt,(h!==x||u!==x.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=a.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new At(new xa(2,2),new gn({name:"BackgroundMaterial",uniforms:ba(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(x.colorSpace)!==Vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=a.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,M){_.getRGB(vo,Ud(a)),t.buffers.color.setClear(vo.r,vo.g,vo.b,M,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,M=1){r.set(_),o=M,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(r,o)},render:g,addToRenderList:v,dispose:m}}function Bb(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,r=!1;function o(F,G,q,I,X){let ne=!1;const Y=u(F,I,q,G);s!==Y&&(s=Y,l(s.object)),ne=d(F,I,q,X),ne&&g(F,I,q,X),X!==null&&e.update(X,a.ELEMENT_ARRAY_BUFFER),(ne||r)&&(r=!1,x(F,G,q,I),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return a.createVertexArray()}function l(F){return a.bindVertexArray(F)}function h(F){return a.deleteVertexArray(F)}function u(F,G,q,I){const X=I.wireframe===!0;let ne=n[G.id];ne===void 0&&(ne={},n[G.id]=ne);const Y=F.isInstancedMesh===!0?F.id:0;let ge=ne[Y];ge===void 0&&(ge={},ne[Y]=ge);let J=ge[q.id];J===void 0&&(J={},ge[q.id]=J);let he=J[X];return he===void 0&&(he=f(c()),J[X]=he),he}function f(F){const G=[],q=[],I=[];for(let X=0;X<t;X++)G[X]=0,q[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:I,object:F,attributes:{},index:null}}function d(F,G,q,I){const X=s.attributes,ne=G.attributes;let Y=0;const ge=q.getAttributes();for(const J in ge)if(ge[J].location>=0){const Q=X[J];let Ee=ne[J];if(Ee===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(Ee=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(Ee=F.instanceColor)),Q===void 0||Q.attribute!==Ee||Ee&&Q.data!==Ee.data)return!0;Y++}return s.attributesNum!==Y||s.index!==I}function g(F,G,q,I){const X={},ne=G.attributes;let Y=0;const ge=q.getAttributes();for(const J in ge)if(ge[J].location>=0){let Q=ne[J];Q===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor));const Ee={};Ee.attribute=Q,Q&&Q.data&&(Ee.data=Q.data),X[J]=Ee,Y++}s.attributes=X,s.attributesNum=Y,s.index=I}function v(){const F=s.newAttributes;for(let G=0,q=F.length;G<q;G++)F[G]=0}function p(F){m(F,0)}function m(F,G){const q=s.newAttributes,I=s.enabledAttributes,X=s.attributeDivisors;q[F]=1,I[F]===0&&(a.enableVertexAttribArray(F),I[F]=1),X[F]!==G&&(a.vertexAttribDivisor(F,G),X[F]=G)}function _(){const F=s.newAttributes,G=s.enabledAttributes;for(let q=0,I=G.length;q<I;q++)G[q]!==F[q]&&(a.disableVertexAttribArray(q),G[q]=0)}function M(F,G,q,I,X,ne,Y){Y===!0?a.vertexAttribIPointer(F,G,q,X,ne):a.vertexAttribPointer(F,G,q,I,X,ne)}function x(F,G,q,I){v();const X=I.attributes,ne=q.getAttributes(),Y=G.defaultAttributeValues;for(const ge in ne){const J=ne[ge];if(J.location>=0){let he=X[ge];if(he===void 0&&(ge==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),ge==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),he!==void 0){const Q=he.normalized,Ee=he.itemSize,Ve=e.get(he);if(Ve===void 0)continue;const ue=Ve.buffer,Ue=Ve.type,ke=Ve.bytesPerElement,qe=Ue===a.INT||Ue===a.UNSIGNED_INT||he.gpuType===Sh;if(he.isInterleavedBufferAttribute){const me=he.data,He=me.isInterleavedBuffer===!0?me.stride:me.itemSize,Et=he.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let ze=0;ze<J.locationSize;ze++)m(J.location+ze,me.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ze=0;ze<J.locationSize;ze++)p(J.location+ze);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let ze=0;ze<J.locationSize;ze++)M(J.location+ze,Ee/J.locationSize,Ue,Q,He*ke,(Et+Ee/J.locationSize*ze)*ke,qe)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<J.locationSize;me++)m(J.location+me,he.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<J.locationSize;me++)p(J.location+me);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let me=0;me<J.locationSize;me++)M(J.location+me,Ee/J.locationSize,Ue,Q,Ee*ke,Ee/J.locationSize*me*ke,qe)}}else if(Y!==void 0){const Q=Y[ge];if(Q!==void 0)switch(Q.length){case 2:a.vertexAttrib2fv(J.location,Q);break;case 3:a.vertexAttrib3fv(J.location,Q);break;case 4:a.vertexAttrib4fv(J.location,Q);break;default:a.vertexAttrib1fv(J.location,Q)}}}}_()}function E(){O();for(const F in n){const G=n[F];for(const q in G){const I=G[q];for(const X in I){const ne=I[X];for(const Y in ne)h(ne[Y].object),delete ne[Y];delete I[X]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;const G=n[F.id];for(const q in G){const I=G[q];for(const X in I){const ne=I[X];for(const Y in ne)h(ne[Y].object),delete ne[Y];delete I[X]}}delete n[F.id]}function b(F){for(const G in n){const q=n[G];for(const I in q){const X=q[I];if(X[F.id]===void 0)continue;const ne=X[F.id];for(const Y in ne)h(ne[Y].object),delete ne[Y];delete X[F.id]}}}function y(F){for(const G in n){const q=n[G],I=F.isInstancedMesh===!0?F.id:0,X=q[I];if(X!==void 0){for(const ne in X){const Y=X[ne];for(const ge in Y)h(Y[ge].object),delete Y[ge];delete X[ne]}delete q[I],Object.keys(q).length===0&&delete n[G]}}}function O(){C(),r=!0,s!==i&&(s=i,l(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:O,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function zb(a,e,t){let n;function i(c){n=c}function s(c,l){a.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,h){h!==0&&(a.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Gb(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){return!(b!==hi&&n.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const y=b===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Yn&&b!==li&&!y&&n.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(nt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),_=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),x=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=a.getParameter(a.MAX_SAMPLES),w=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:x,maxSamples:E,samples:w}}function Vb(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new us,o=new Tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=a.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const _=s?0:n,M=_*4;let x=m.clippingState||null;c.value=x,x=h(g,f,M,d);for(let E=0;E!==M;++E)x[E]=t[E];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=d+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,x=d;M!==v;++M,x+=4)r.copy(u[M]).applyMatrix4(_,o),r.normal.toArray(p,x),p[x+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class Wh extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ln(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:ba(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:jn});s.uniforms.tEquirect.value=t;const r=new At(i,s),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Sn),new ih(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const vf=256,Hb=3,Wb=20,Wd=256,qd=16,qb=3,Xb=new L,Kb=new it;class Sr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ih(1,10,null),this._boxMesh=new At(new ln(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:r=256,position:o=Xb}=s,c=this._renderer;this._setSize(r);const l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Kb));const p=new ih(n,i,h);return p.position.copy(o),p.update(c,e),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vf,gd(e))}_fromTexture(e,t){e.mapping===pa||e.mapping===lr?this._setSize(e.image.length===0?vf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=bf(e,!1,!1),n=Math.log2(e)-Hb;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=bf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===pa||e.mapping===lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jb(),this._integrationMaterial=Jb());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/qd);for(let r=0;r<=n;r++){const o=Sr.lodToRoughness(r,n);if(r>n-qb)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Wd*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Yb());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function bf(a,e,t){return new Wh(a,{minFilter:Ui,generateMipmaps:e,type:An,colorSpace:si,depthBuffer:t})}function Ar(a,e,t){return new gn({name:a,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:Un,blending:jn,depthTest:!1,depthWrite:!1})}function jb(){return Ar("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wd}u

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
	`)}function Jb(){return Ar("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qd}},`

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
	`)}function Yb(){return Ar("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Wb}
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
	`)}function xf(){return Ar("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function _f(){return Ar("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zb(a){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?r(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Sc||d===yc)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new Wh(g.height);return v.fromEquirectangularTexture(a,f),e.set(f,v),f.addEventListener("dispose",l),o(v.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,g=d===Sc||d===yc,v=d===pa||d===lr;if(g||v){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Sr(a)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const _=f.image;return g&&_&&_.height>0||v&&_&&c(_)?(n===null&&(n=new Sr(a)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===Sc?f.mapping=pa:d===yc&&(f.mapping=lr),f}function c(f){let d=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&d++;return d===g}function l(f){const d=f.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function $b(a){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ua("WebGLRenderer: "+n+" extension not supported."),i}}}function Qb(a,e,t,n){const i={},s=new WeakMap,r=new FinalizationRegistry(g=>delete i[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete i[g.id],r.unregister(g);const v=s.get(g);v&&(e.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,v){return i[v.id]!==void 0||(v.addEventListener("dispose",o),i[v.id]=new WeakRef(v),r.register(v,v.id,v),t.memory.geometries++),v}function h(g){const v=g.attributes;for(const p in v)e.update(v[p],a.ARRAY_BUFFER)}function u(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const _=v!==null?v.array.length:p.array.length/3-1,M=p.count>=65535?Sd:Md,x=new M(Math.ceil(_/3)*6,1),E=x.array;if(v!==null){const b=v.array;m=v.version;for(let y=0,O=0;y<_;y+=3){const C=b[y+0],F=b[y+1],G=b[y+2];E[O++]=C,E[O++]=F,E[O++]=F,E[O++]=G,E[O++]=G,E[O++]=C}}else{m=p.version;for(let b=0,y=0;b<_;b+=3){const O=b+0,C=b+1,F=b+2;E[y++]=O,E[y++]=C,E[y++]=C,E[y++]=F,E[y++]=F,E[y++]=O}}x.version=m;const w=s.get(g);w&&e.remove(w),s.set(g,x)}function f(g){const v=s.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return s.get(g)}function d(){for(const g in i){const v=i[g].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function ex(a,e,t){let n;function i(u){n=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function c(u,f){a.drawElements(n,f,s,u*r),t.update(f,n,1)}function l(u,f,d){d!==0&&(a.drawElementsInstanced(n,f,s,u*r,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let v=0;for(let p=0;p<d;p++)v+=f[p];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function tx(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:mt("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nx(a,e,t){const n=new WeakMap,i=new qt;function s(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let O=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=o.attributes.position.count*M,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*E*4*u),b=new vd(w,x,E,u);b.type=li,b.needsUpdate=!0;const y=M*4;for(let C=0;C<u;C++){const F=p[C],G=m[C],q=_[C],I=x*E*4*C;for(let X=0;X<F.count;X++){const ne=X*y;d===!0&&(i.fromBufferAttribute(F,X),w[I+ne+0]=i.x,w[I+ne+1]=i.y,w[I+ne+2]=i.z,w[I+ne+3]=0),g===!0&&(i.fromBufferAttribute(G,X),w[I+ne+4]=i.x,w[I+ne+5]=i.y,w[I+ne+6]=i.z,w[I+ne+7]=0),v===!0&&(i.fromBufferAttribute(q,X),w[I+ne+8]=i.x,w[I+ne+9]=i.y,w[I+ne+10]=i.z,w[I+ne+11]=q.itemSize===4?i.w:1)}}f={count:u,texture:b,size:new Ie(x,E)},n.set(o,f),o.addEventListener("dispose",O)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(a,"morphTargetBaseInfluence",g),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:s}}function ix(a,e,t,n,i){let s=new WeakMap;function r(l){const h=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const sx={[gh]:"LINEAR_TONE_MAPPING",[vh]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[tc]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[Mh]:"NEUTRAL_TONE_MAPPING",[xh]:"CUSTOM_TONE_MAPPING"};function ax(a,e,t,n,i,s){const r=new Tn(e,t,{type:a,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new hn;h.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const u=new Od({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new At(h,u),d=new Er(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,_=null,M=[],x=!1;this.setSize=function(E,w){r.setSize(E,w),o!==null&&o.setSize(E,w),c!==null&&c.setSize(E,w);for(let b=0;b<M.length;b++){const y=M[b];y.setSize&&y.setSize(E,w)}},this.setEffects=function(E){M=E,x=M.length>0&&M[0].isRenderPass===!0;const w=r.width,b=r.height;M.length>0&&o===null&&(o=new Tn(w,b,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new Tn(w,b,{type:An,depthBuffer:!1,stencilBuffer:!1}));const y=i===!0&&M.some(O=>O.needsDepthTexture===!0);y!==(r.depthTexture!==null)&&(y===!0&&l===null&&(l=new vs(w,b),s===!0&&(l.format=ji,l.type=Ps)),r.dispose(),r.depthTexture=y?l:null,r.resolveDepthBuffer=y,r.storeMultisampledDepthBuffer=y);for(let O=0;O<M.length;O++){const C=M[O];C.setSize&&C.setSize(w,b),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(E,w){if(p||E.toneMapping===Yi&&M.length===0)return!1;if(_=w,w!==null){const b=w.width,y=w.height;(r.width!==b||r.height!==y)&&this.setSize(b,y)}return x===!1&&E.setRenderTarget(r),m=E.toneMapping,E.toneMapping=Yi,!0},this.hasRenderPass=function(){return x},this.end=function(E,w){E.toneMapping=m,p=!0;let b=r,y=o;for(let O=0;O<M.length;O++){const C=M[O];C.enabled!==!1&&(C.render(E,y,b,w),C.needsSwap!==!1&&(b=y,y=y===o?c:o))}if(g!==E.outputColorSpace||v!==E.toneMapping){g=E.outputColorSpace,v=E.toneMapping,u.defines={},Pt.getTransfer(g)===Vt&&(u.defines.SRGB_TRANSFER="");const O=sx[v];O&&(u.defines[O]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(_),E.render(f,d),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}const Xd=new vn,Kd=new vs(1,1),jd=new Ed(1),Jd=new vd,Yd=new bd,Zd=new wd,Mf=[],Sf=[],yf=new Float32Array(16),Tf=new Float32Array(9),wf=new Float32Array(4);function Ta(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=Mf[i];if(s===void 0&&(s=new Float32Array(i),Mf[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function bn(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function xn(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function rc(a,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function rx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function ox(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;a.uniform2fv(this.addr,e),xn(t,e)}}function cx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;a.uniform3fv(this.addr,e),xn(t,e)}}function lx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;a.uniform4fv(this.addr,e),xn(t,e)}}function hx(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(bn(t,n))return;wf.set(n),a.uniformMatrix2fv(this.addr,!1,wf),xn(t,n)}}function ux(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(bn(t,n))return;Tf.set(n),a.uniformMatrix3fv(this.addr,!1,Tf),xn(t,n)}}function fx(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(bn(t,n))return;yf.set(n),a.uniformMatrix4fv(this.addr,!1,yf),xn(t,n)}}function dx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function px(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;a.uniform2iv(this.addr,e),xn(t,e)}}function mx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;a.uniform3iv(this.addr,e),xn(t,e)}}function gx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;a.uniform4iv(this.addr,e),xn(t,e)}}function vx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function bx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;a.uniform2uiv(this.addr,e),xn(t,e)}}function xx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;a.uniform3uiv(this.addr,e),xn(t,e)}}function _x(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;a.uniform4uiv(this.addr,e),xn(t,e)}}function oc(a){return a.version===0&&(a.compareFunction=dd,a.needsUpdate=!0),a}function Mx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?s=oc(Kd):s=Xd,t.setTexture2D(e||s,i)}function Sx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yd,i)}function yx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_CUBE_SHADOW?s=oc(jd):s=Zd,t.setTextureCube(e||s,i)}function Tx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jd,i)}function wx(a){switch(a){case 5126:return rx;case 35664:return ox;case 35665:return cx;case 35666:return lx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return vx;case 36294:return bx;case 36295:return xx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Tx}}function Ex(a,e){a.uniform1fv(this.addr,e)}function Ax(a,e){const t=Ta(e,this.size,2);a.uniform2fv(this.addr,t)}function Rx(a,e){const t=Ta(e,this.size,3);a.uniform3fv(this.addr,t)}function Cx(a,e){const t=Ta(e,this.size,4);a.uniform4fv(this.addr,t)}function Px(a,e){const t=Ta(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Dx(a,e){const t=Ta(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Lx(a,e){const t=Ta(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Nx(a,e){a.uniform1iv(this.addr,e)}function Ix(a,e){a.uniform2iv(this.addr,e)}function Fx(a,e){a.uniform3iv(this.addr,e)}function Ux(a,e){a.uniform4iv(this.addr,e)}function Ox(a,e){a.uniform1uiv(this.addr,e)}function kx(a,e){a.uniform2uiv(this.addr,e)}function Bx(a,e){a.uniform3uiv(this.addr,e)}function zx(a,e){a.uniform4uiv(this.addr,e)}function Gx(a,e,t){const n=this.cache,i=e.length,s=rc(t,i);bn(n,s)||(a.uniform1iv(this.addr,s),xn(n,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=oc(Kd):r=Xd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function Vx(a,e,t){const n=this.cache,i=e.length,s=rc(t,i);bn(n,s)||(a.uniform1iv(this.addr,s),xn(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Yd,s[r])}function Hx(a,e,t){const n=this.cache,i=e.length,s=rc(t,i);bn(n,s)||(a.uniform1iv(this.addr,s),xn(n,s));let r;this.type===a.SAMPLER_CUBE_SHADOW?r=oc(jd):r=Zd;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||r,s[o])}function Wx(a,e,t){const n=this.cache,i=e.length,s=rc(t,i);bn(n,s)||(a.uniform1iv(this.addr,s),xn(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Jd,s[r])}function qx(a){switch(a){case 5126:return Ex;case 35664:return Ax;case 35665:return Rx;case 35666:return Cx;case 35674:return Px;case 35675:return Dx;case 35676:return Lx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ix;case 35668:case 35672:return Fx;case 35669:case 35673:return Ux;case 5125:return Ox;case 36294:return kx;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Wx}}class Xx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wx(t.type)}}class Kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qx(t.type)}}class jx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const el=/(\w+)(\])?(\[|\.)?/g;function Ef(a,e){a.seq.push(e),a.map[e.id]=e}function Jx(a,e,t){const n=a.name,i=n.length;for(el.lastIndex=0;;){const s=el.exec(n),r=el.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Ef(t,l===void 0?new Xx(o,a,e):new Kx(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new jx(o),Ef(t,u)),t=u}}}class Bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);Jx(o,c,this)}const i=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Af(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const Yx=37297;let Zx=0;function $x(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Rf=new Tt;function Qx(a){Pt._getMatrix(Rf,Pt.workingColorSpace,a);const e=`mat3( ${Rf.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(a)){case Xo:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Cf(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$x(a.getShaderSource(e),o)}else return s}function e_(a,e){const t=Qx(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const t_={[gh]:"Linear",[vh]:"Reinhard",[bh]:"Cineon",[tc]:"ACESFilmic",[_h]:"AgX",[Mh]:"Neutral",[xh]:"Custom"};function n_(a,e){const t=t_[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bo=new L;function i_(){Pt.getLuminanceCoefficients(bo);const a=bo.x.toFixed(4),e=bo.y.toFixed(4),t=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function a_(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r_(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function er(a){return a!==""}function Pf(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Df(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(a){return a.replace(o_,c_)}function c_(a,e){const t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return rh(t)}const l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(a){return a.replace(l_,h_)}function h_(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nf(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const u_={[tr]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function f_(a){return u_[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const d_={[lr]:"ENVMAP_MODE_REFRACTION"};function p_(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":d_[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m_={[mh]:"ENVMAP_BLENDING_MULTIPLY",[Lp]:"ENVMAP_BLENDING_MIX",[Np]:"ENVMAP_BLENDING_ADD"};function g_(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":m_[a.combine]||"ENVMAP_BLENDING_NONE"}function v_(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=f_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=p_(t),u=g_(t),f=s_(t),d=a_(s),g=i.createProgram();let v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(er).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(er).join(`
`),p.length>0&&(p+=`
`)):(v=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?n_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),i_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),r=rh(r),r=Pf(r,t),r=Df(r,t),o=rh(o),o=Pf(o,t),o=Df(o,t),r=Lf(r),o=Lf(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=m+v+r,M=m+p+o,x=Af(i,i.VERTEX_SHADER,_),E=Af(i,i.FRAGMENT_SHADER,M);i.attachShader(g,x),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(C){if(a.debug.checkShaderErrors){const F=i.getProgramInfoLog(g)||"",G=i.getShaderInfoLog(x)||"",q=i.getShaderInfoLog(E)||"",I=F.trim(),X=G.trim(),ne=q.trim();let Y=!0,ge=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,x,E);else{const J=Cf(i,x,"vertex"),he=Cf(i,E,"fragment");mt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+J+`
`+he)}else I!==""?nt("WebGLProgram: Program Info Log:",I):(X===""||ne==="")&&(ge=!1);ge&&(C.diagnostics={runnable:Y,programLog:I,vertexShader:{log:X,prefix:v},fragmentShader:{log:ne,prefix:p}})}i.deleteShader(x),i.deleteShader(E),b=new Bo(i,g),y=r_(i,g)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(g,Yx)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=E,this}let b_=0;class x_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new __(e),t.set(e,n)),n}}class __{constructor(e){this.id=b_++,this.code=e,this.usedTimes=0}}function M_(a){return a===Ds||a===Wo||a===qo}function S_(a,e,t,n,i,s){const r=new Lh,o=new x_,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,y,O,C,F,G){const q=C.fog,I=F.geometry,X=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?C.environment:null,ne=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,Y=e.get(b.envMap||X,ne),ge=f[b.type];let J=n.precision;b.precision!==null&&(J=n.getMaxPrecision(b.precision),J!==b.precision&&nt("WebGLProgram.getParameters:",b.precision,"not supported, using",J,"instead."));const he=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=he!==void 0?he.length:0;let Ee=0;I.morphAttributes.position!==void 0&&(Ee=1),I.morphAttributes.normal!==void 0&&(Ee=2),I.morphAttributes.color!==void 0&&(Ee=3);let Ve,ue,Ue,ke;if(ge){const _e=Ni[ge];Ve=_e.vertexShader,ue=_e.fragmentShader}else{Ve=b.vertexShader,ue=b.fragmentShader;const _e=o.getVertexShaderStage(b),xt=o.getFragmentShaderStage(b);o.update(b,_e,xt),Ue=_e.id,ke=xt.id}const qe=a.getRenderTarget(),me=a.state.buffers.depth.getReversed(),He=F.isInstancedMesh===!0,Et=F.isBatchedMesh===!0,ze=!!b.map,ot=!!b.matcap,ct=!!Y,pe=ct&&Y.isPMREMTexture===!0,Ae=!!b.aoMap,Pe=!!b.lightMap,Be=!!b.bumpMap&&b.wireframe===!1,Fe=!!b.normalMap,st=!!b.displacementMap,Ke=!!b.emissiveMap,ft=!!b.metalnessMap,dt=!!b.roughnessMap,bt=b.anisotropy>0,z=b.clearcoat>0,Ht=b.diffuseRoughness>0,gt=b.dispersion>0,Lt=b.retroreflectivity>0,be=b.iridescence>0,It=b.sheen>0,je=b.transmission>0,Je=bt&&!!b.anisotropyMap,R=z&&!!b.clearcoatMap,S=z&&!!b.clearcoatNormalMap,Z=z&&!!b.clearcoatRoughnessMap,Me=Ht&&!!b.diffuseRoughnessMap,oe=be&&!!b.iridescenceMap,Se=be&&!!b.iridescenceThicknessMap,Te=It&&!!b.sheenColorMap,ce=It&&!!b.sheenRoughnessMap,fe=!!b.specularMap,De=!!b.specularColorMap,N=!!b.specularIntensityMap,ae=je&&!!b.transmissionMap,ie=je&&!!b.thicknessMap,Re=!!b.gradientMap,ve=!!b.alphaMap,Ne=b.alphaTest>0,Oe=!!b.alphaHash,lt=!!b.extensions;let we=Yi;b.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(we=a.toneMapping);const et=pe?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,tt={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:Ve,fragmentShader:ue,defines:b.defines,customVertexShaderID:Ue,customFragmentShaderID:ke,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:J,batching:Et,batchingColor:Et&&F._colorsTexture!==null,instancing:He,instancingColor:He&&F.instanceColor!==null,instancingMorph:He&&F.morphTexture!==null,outputColorSpace:qe===null?a.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ze,matcap:ot,envMap:ct,envMapMode:ct&&Y.mapping,envMapPMREM:pe,envMapMaxLod:pe?et.length-1:null,envMapSize:pe?et[0].width:null,aoMap:Ae,lightMap:Pe,bumpMap:Be,normalMap:Fe,displacementMap:st,emissiveMap:Ke,normalMapObjectSpace:Fe&&b.normalMapType===kp,normalMapTangentSpace:Fe&&b.normalMapType===dr,packedNormalMap:Fe&&b.normalMapType===dr&&M_(b.normalMap.format),metalnessMap:ft,roughnessMap:dt,anisotropy:bt,anisotropyMap:Je,clearcoat:z,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:Z,diffuseRoughness:Ht,diffuseRoughnessMap:Me,dispersion:gt,retroreflection:Lt,iridescence:be,iridescenceMap:oe,iridescenceThicknessMap:Se,sheen:It,sheenColorMap:Te,sheenRoughnessMap:ce,specularMap:fe,specularColorMap:De,specularIntensityMap:N,transmission:je,transmissionMap:ae,thicknessMap:ie,gradientMap:Re,opaque:b.transparent===!1&&b.blending===nr&&b.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ne,alphaHash:Oe,combine:b.combine,mapUv:ze&&d(b.map.channel),aoMapUv:Ae&&d(b.aoMap.channel),lightMapUv:Pe&&d(b.lightMap.channel),bumpMapUv:Be&&d(b.bumpMap.channel),normalMapUv:Fe&&d(b.normalMap.channel),displacementMapUv:st&&d(b.displacementMap.channel),emissiveMapUv:Ke&&d(b.emissiveMap.channel),metalnessMapUv:ft&&d(b.metalnessMap.channel),roughnessMapUv:dt&&d(b.roughnessMap.channel),anisotropyMapUv:Je&&d(b.anisotropyMap.channel),clearcoatMapUv:R&&d(b.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&d(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&d(b.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&d(b.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&d(b.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(b.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(b.sheenRoughnessMap.channel),specularMapUv:fe&&d(b.specularMap.channel),specularColorMapUv:De&&d(b.specularColorMap.channel),specularIntensityMapUv:N&&d(b.specularIntensityMap.channel),transmissionMapUv:ae&&d(b.transmissionMap.channel),thicknessMapUv:ie&&d(b.thicknessMap.channel),alphaMapUv:ve&&d(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Fe||bt),vertexNormals:!!I.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(ze||ve),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||I.attributes.normal===void 0&&Fe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ee,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:G.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&O.length>0,shadowMapType:a.shadowMap.type,toneMapping:we,decodeVideoTexture:ze&&b.map.isVideoTexture===!0&&Pt.getTransfer(b.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ke&&b.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(b.emissiveMap.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ni,flipSided:b.side===Un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:lt&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&b.extensions.multiDraw===!0||Et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function v(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)y.push(O),y.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(p(y,b),m(y,b),y.push(a.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function p(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapPMREM),b.push(y.envMapMaxLod),b.push(y.envMapSize),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.diffuseRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.numSunLights),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numSunLightShadows),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.numLightProbeGrids),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function m(b,y){r.disableAll(),y.instancing&&r.enable(0),y.instancingColor&&r.enable(1),y.instancingMorph&&r.enable(2),y.matcap&&r.enable(3),y.envMap&&r.enable(4),y.normalMapObjectSpace&&r.enable(5),y.normalMapTangentSpace&&r.enable(6),y.clearcoat&&r.enable(7),y.iridescence&&r.enable(8),y.alphaTest&&r.enable(9),y.vertexColors&&r.enable(10),y.vertexAlphas&&r.enable(11),y.vertexUv1s&&r.enable(12),y.vertexUv2s&&r.enable(13),y.vertexUv3s&&r.enable(14),y.vertexTangents&&r.enable(15),y.anisotropy&&r.enable(16),y.alphaHash&&r.enable(17),y.batching&&r.enable(18),y.dispersion&&r.enable(19),y.retroreflection&&r.enable(24),y.diffuseRoughness&&r.enable(25),y.batchingColor&&r.enable(20),y.gradientMap&&r.enable(21),y.packedNormalMap&&r.enable(22),y.vertexNormals&&r.enable(23),b.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),y.numLightProbeGrids>0&&r.enable(22),y.hasPositionAttribute&&r.enable(23),b.push(r.mask)}function _(b){const y=f[b.type];let O;if(y){const C=Ni[y];O=Rs.clone(C.uniforms)}else O=b.uniforms;return O}function M(b,y){let O=h.get(y);return O!==void 0?++O.usedTimes:(O=new v_(a,y,b,i),l.push(O),h.set(y,O)),O}function x(b){if(--b.usedTimes===0){const y=l.indexOf(b);l[y]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function E(b){o.remove(b)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:_,acquireProgram:M,releaseProgram:x,releaseShaderCache:E,programs:l,dispose:w}}function y_(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function T_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function If(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ff(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,v,p,m){let _=a[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:g,materialVariant:r(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},a[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=g,_.materialVariant=r(f),_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=p,_.group=m),e++,_}function c(f,d,g,v,p,m,_){_.reversedDepth===!0&&(p=-p);const M=o(f,d,g,v,p,m);g.transmission>0?n.push(M):g.transparent===!0?i.push(M):t.push(M)}function l(f,d,g,v,p,m){const _=o(f,d,g,v,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(f,d){t.length>1&&t.sort(f||T_),n.length>1&&n.sort(d||If),i.length>1&&i.sort(d||If)}function u(){for(let f=e,d=a.length;f<d;f++){const g=a[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function w_(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Ff,a.set(n,[r])):i>=s.length?(r=new Ff,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function E_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new it};break;case"SpotLight":t={position:new L,direction:new L,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new L,halfWidth:new L,halfHeight:new L};break}return a[e.id]=t,t}}}function A_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let R_=0;function C_(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function P_(a){const e=new E_,t=A_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,s=new Qe,r=new Qe;function o(l){let h=0,u=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,_=0,M=0,x=0,E=0,w=0,b=0,y=0,O=0,C=0;l.sort(C_);for(let G=0,q=l.length;G<q;G++){const I=l[G],X=I.color,ne=I.intensity,Y=I.distance;let ge=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ds?ge=I.shadow.map.texture:ge=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=X.r*ne,u+=X.g*ne,f+=X.b*ne;else if(I.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(I.sh.coefficients[J],ne);C++}else if(I.isSunLight){const J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const he=I.shadow,Q=t.get(I);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=ge;const Ee=he.getViewportCount();for(let Ve=0;Ve<Ee;Ve++)n.sunShadowMatrix[v+Ve]=he.getMatrix(Ve),n.sunShadowCascade[v+Ve]=he._cascadeData[Ve];v+=Ee,g++}n.sun[d]=J,d++}else if(I.isDirectionalLight){const J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const he=I.shadow,Q=t.get(I);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=ge,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=J,p++}else if(I.isSpotLight){const J=e.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(X).multiplyScalar(ne),J.distance=Y,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,n.spot[_]=J;const he=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,he.updateMatrices(I),I.castShadow&&O++),n.spotLightMatrix[_]=he.matrix,I.castShadow){const Q=t.get(I);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=ge,b++}_++}else if(I.isRectAreaLight){const J=e.get(I);J.color.copy(X).multiplyScalar(ne),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=J,M++}else if(I.isPointLight){const J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){const he=I.shadow,Q=t.get(I);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,Q.shadowCameraNear=he.camera.near,Q.shadowCameraFar=he.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=ge,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=J,m++}else if(I.isHemisphereLight){const J=e.get(I);J.skyColor.copy(I.color).multiplyScalar(ne),J.groundColor.copy(I.groundColor).multiplyScalar(ne),n.hemi[x]=J,x++}}M>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const F=n.hash;(F.sunLength!==d||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==_||F.rectAreaLength!==M||F.hemiLength!==x||F.numSunShadows!==g||F.numDirectionalShadows!==E||F.numPointShadows!==w||F.numSpotShadows!==b||F.numSpotMaps!==y||F.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=_,n.rectArea.length=M,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+y-O,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=C,F.sunLength=d,F.directionalLength=p,F.pointLength=m,F.spotLength=_,F.rectAreaLength=M,F.hemiLength=x,F.numSunShadows=g,F.numDirectionalShadows=E,F.numPointShadows=w,F.numSpotShadows=b,F.numSpotMaps=y,F.numLightProbes=C,n.version=R_++)}function c(l,h){let u=0,f=0,d=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let _=0,M=l.length;_<M;_++){const x=l[_];if(x.isSunLight){const E=n.sun[u];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),u++}else if(x.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(x.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),r.identity(),s.copy(x.matrixWorld),s.premultiply(m),r.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),v++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const E=n.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Uf(a){const e=new P_(a),t=[],n=[],i=[];function s(u){h.camera=u,t.length=0,n.length=0,i.length=0}function r(u){u.isLightProbeGrid?i.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function D_(a){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let o;return r===void 0?(o=new Uf(a),e.set(i,[o])):s>=r.length?(o=new Uf(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
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
}`,I_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],F_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Of=new Qe,Wa=new L,tl=new L;function U_(a,e,t){let n=new gr;const i=new Ie,s=new Ie,r=new qt,o=new S0,c=new y0,l={},h=t.maxTextureSize,u={[ms]:Un,[Un]:ms,[ni]:ni},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:L_,fragmentShader:N_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let m=this.type;this.render=function(w,b,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===vp&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tr);const O=a.getRenderTarget(),C=a.getActiveCubeFace(),F=a.getActiveMipmapLevel(),G=a.state;G.setBlending(jn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=m!==this.type;q&&b.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(X=>X.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,X=w.length;I<X;I++){const ne=w[I],Y=ne.shadow;if(Y===void 0){nt("WebGLShadowMap:",ne,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ge=Y.getFrameExtents();i.multiply(ge),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ge.x),i.x=s.x*ge.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ge.y),i.y=s.y*ge.y,Y.mapSize.y=s.y));const J=a.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=J,Y.map===null||q===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ja){if(ne.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Tn(i.x,i.y,{format:Ds,type:An,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),Y.map.texture.name=ne.name+".shadowMap",Y.map.depthTexture=new vs(i.x,i.y,li),Y.map.depthTexture.name=ne.name+".shadowMapDepth",Y.map.depthTexture.format=gs,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=on,Y.map.depthTexture.magFilter=on}else ne.isPointLight?(Y.map=new Wh(i.x),Y.map.depthTexture=new Ed(i.x,Oi)):(Y.map=new Tn(i.x,i.y),Y.map.depthTexture=new vs(i.x,i.y,Oi)),Y.map.depthTexture.name=ne.name+".shadowMap",Y.map.depthTexture.format=gs,this.type===tr?(Y.map.depthTexture.compareFunction=J?fd:ud,Y.map.depthTexture.minFilter=Sn,Y.map.depthTexture.magFilter=Sn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=on,Y.map.depthTexture.magFilter=on);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);const he=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();ne.isPointLight!==!0&&Y.updateMatrices(ne,y);const Q=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:y.layers;for(let Ee=0;Ee<he;Ee++){const Ve=Y.getCamera(Ee);if(ne.isPointLight){const ue=Y.camera,Ue=Y.matrix,ke=ne.distance||ue.far;ke!==ue.far&&(ue.far=ke,ue.updateProjectionMatrix()),Wa.setFromMatrixPosition(ne.matrixWorld),ue.position.copy(Wa),tl.copy(ue.position),tl.add(I_[Ee]),ue.up.copy(F_[Ee]),ue.lookAt(tl),ue.updateMatrixWorld(),Ue.makeTranslation(-Wa.x,-Wa.y,-Wa.z),Of.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Of,ue.coordinateSystem,ue.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)a.setRenderTarget(Y.map,Ee),a.clear();else{Ee===0&&(a.setRenderTarget(Y.map),a.clear());const ue=Y.getViewport(Ee);r.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),G.viewport(r)}n=Y.getFrustum(Ee),x(b,y,Ve,ne,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Ja&&_(Y,y),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(O,C,F)};function _(w,b){const y=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Tn(i.x,i.y,{format:Ds,type:An}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(b,null,y,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(b,null,y,d,v,null)}function M(w,b,y,O){let C=null;const F=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)C=F;else if(C=y.isPointLight===!0?c:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const G=C.uuid,q=b.uuid;let I=l[G];I===void 0&&(I={},l[G]=I);let X=I[q];X===void 0&&(X=C.clone(),I[q]=X,b.addEventListener("dispose",E)),C=X}if(C.visible=b.visible,C.wireframe=b.wireframe,O===Ja?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:u[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const G=a.properties.get(C);G.light=y}return C}function x(w,b,y,O,C,F){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===Ja)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const I=e.update(w),X=w.material;if(Array.isArray(X)){const ne=I.groups;for(let Y=0,ge=ne.length;Y<ge;Y++){const J=ne[Y],he=X[J.materialIndex];if(he&&he.visible){const Q=M(w,he,O,F);w.onBeforeShadow(a,w,b,y,I,Q,J),a.renderBufferDirect(y,null,I,Q,w,J),w.onAfterShadow(a,w,b,y,I,Q,J)}}}else if(X.visible){const ne=M(w,X,O,F);w.onBeforeShadow(a,w,b,y,I,ne,null),a.renderBufferDirect(y,null,I,ne,w,null),w.onAfterShadow(a,w,b,y,I,ne,null)}}const q=w.children;for(let I=0,X=q.length;I<X;I++)x(q[I],b,y,O,C,F)}function E(w){w.target.removeEventListener("dispose",E);for(const y in l){const O=l[y],C=w.target.uuid;C in O&&(O[C].dispose(),delete O[C])}}}function O_(a,e){function t(){let N=!1;const ae=new qt;let ie=null;const Re=new qt(0,0,0,0);return{setMask:function(ve){ie!==ve&&!N&&(a.colorMask(ve,ve,ve,ve),ie=ve)},setLocked:function(ve){N=ve},setClear:function(ve,Ne,Oe,lt,we){we===!0&&(ve*=lt,Ne*=lt,Oe*=lt),ae.set(ve,Ne,Oe,lt),Re.equals(ae)===!1&&(a.clearColor(ve,Ne,Oe,lt),Re.copy(ae))},reset:function(){N=!1,ie=null,Re.set(-1,0,0,0)}}}function n(){let N=!1,ae=!1,ie=null,Re=null,ve=null;return{setReversed:function(Ne){if(ae!==Ne){const Oe=e.get("EXT_clip_control");Ne?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ae=Ne;const lt=ve;ve=null,this.setClear(lt)}},getReversed:function(){return ae},setTest:function(Ne){Ne?me(a.DEPTH_TEST):He(a.DEPTH_TEST)},setMask:function(Ne){ie!==Ne&&!N&&(a.depthMask(Ne),ie=Ne)},setFunc:function(Ne){if(ae&&(Ne=Jp[Ne]),Re!==Ne){switch(Ne){case ul:a.depthFunc(a.NEVER);break;case fl:a.depthFunc(a.ALWAYS);break;case dl:a.depthFunc(a.LESS);break;case cr:a.depthFunc(a.LEQUAL);break;case pl:a.depthFunc(a.EQUAL);break;case ml:a.depthFunc(a.GEQUAL);break;case gl:a.depthFunc(a.GREATER);break;case vl:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Re=Ne}},setLocked:function(Ne){N=Ne},setClear:function(Ne){ve!==Ne&&(ve=Ne,ae&&(Ne=1-Ne),a.clearDepth(Ne))},reset:function(){N=!1,ie=null,Re=null,ve=null,ae=!1}}}function i(){let N=!1,ae=null,ie=null,Re=null,ve=null,Ne=null,Oe=null,lt=null,we=null;return{setTest:function(et){N||(et?me(a.STENCIL_TEST):He(a.STENCIL_TEST))},setMask:function(et){ae!==et&&!N&&(a.stencilMask(et),ae=et)},setFunc:function(et,tt,_e){(ie!==et||Re!==tt||ve!==_e)&&(a.stencilFunc(et,tt,_e),ie=et,Re=tt,ve=_e)},setOp:function(et,tt,_e){(Ne!==et||Oe!==tt||lt!==_e)&&(a.stencilOp(et,tt,_e),Ne=et,Oe=tt,lt=_e)},setLocked:function(et){N=et},setClear:function(et){we!==et&&(a.clearStencil(et),we=et)},reset:function(){N=!1,ae=null,ie=null,Re=null,ve=null,Ne=null,Oe=null,lt=null,we=null}}}const s=new t,r=new n,o=new i;let c={};const l=new WeakMap;let h={},u={},f={},d=new WeakMap,g=[],v=null,p=!1,m=null,_=null,M=null,x=null,E=null,w=null,b=null,y=new it(0,0,0),O=0,C=!1,F=null,G=null,q=null,I=null,X=null;const ne=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ge=0;const J=a.getParameter(a.VERSION);J.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=ge>=1):J.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=ge>=2);let he=null,Q={};const Ee=a.getParameter(a.SCISSOR_BOX),Ve=a.getParameter(a.VIEWPORT),ue=new qt().fromArray(Ee),Ue=new qt().fromArray(Ve);function ke(N,ae,ie,Re){const ve=new Uint8Array(4),Ne=a.createTexture();a.bindTexture(N,Ne),a.texParameteri(N,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(N,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Oe=0;Oe<ie;Oe++)N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY?a.texImage3D(ae,0,a.RGBA,1,1,Re,0,a.RGBA,a.UNSIGNED_BYTE,ve):a.texImage2D(ae+Oe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ve);return Ne}const qe={};qe[a.TEXTURE_2D]=ke(a.TEXTURE_2D,a.TEXTURE_2D,1),qe[a.TEXTURE_CUBE_MAP]=ke(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),qe[a.TEXTURE_2D_ARRAY]=ke(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),qe[a.TEXTURE_3D]=ke(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),me(a.DEPTH_TEST),r.setFunc(cr),Be(!1),Fe(fu),me(a.CULL_FACE),Ae(jn);function me(N){h[N]!==!0&&(a.enable(N),h[N]=!0)}function He(N){h[N]!==!1&&(a.disable(N),h[N]=!1)}function Et(N,ae){return f[N]!==ae?(a.bindFramebuffer(N,ae),f[N]=ae,N===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=ae),N===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=ae),!0):!1}function ze(N,ae){let ie=g,Re=!1;if(N){ie=d.get(ae),ie===void 0&&(ie=[],d.set(ae,ie));const ve=N.textures;if(ie.length!==ve.length||ie[0]!==a.COLOR_ATTACHMENT0){for(let Ne=0,Oe=ve.length;Ne<Oe;Ne++)ie[Ne]=a.COLOR_ATTACHMENT0+Ne;ie.length=ve.length,Re=!0}}else ie[0]!==a.BACK&&(ie[0]=a.BACK,Re=!0);Re&&a.drawBuffers(ie)}function ot(N){return v!==N?(a.useProgram(N),v=N,!0):!1}const ct={[Ii]:a.FUNC_ADD,[bp]:a.FUNC_SUBTRACT,[xp]:a.FUNC_REVERSE_SUBTRACT};ct[_p]=a.MIN,ct[Mp]=a.MAX;const pe={[Ya]:a.ZERO,[Sp]:a.ONE,[yp]:a.SRC_COLOR,[ed]:a.SRC_ALPHA,[Ap]:a.SRC_ALPHA_SATURATE,[hl]:a.DST_COLOR,[ll]:a.DST_ALPHA,[Tp]:a.ONE_MINUS_SRC_COLOR,[td]:a.ONE_MINUS_SRC_ALPHA,[Ep]:a.ONE_MINUS_DST_COLOR,[wp]:a.ONE_MINUS_DST_ALPHA,[Rp]:a.CONSTANT_COLOR,[Cp]:a.ONE_MINUS_CONSTANT_COLOR,[Pp]:a.CONSTANT_ALPHA,[Dp]:a.ONE_MINUS_CONSTANT_ALPHA};function Ae(N,ae,ie,Re,ve,Ne,Oe,lt,we,et){if(N===jn){p===!0&&(He(a.BLEND),p=!1);return}if(p===!1&&(me(a.BLEND),p=!0),N!==Qf){if(N!==m||et!==C){if((_!==Ii||E!==Ii)&&(a.blendEquation(a.FUNC_ADD),_=Ii,E=Ii),et)switch(N){case nr:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case la:a.blendFunc(a.ONE,a.ONE);break;case du:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case pu:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:mt("WebGLState: Invalid blending: ",N);break}else switch(N){case nr:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case la:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case du:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pu:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",N);break}M=null,x=null,w=null,b=null,y.set(0,0,0),O=0,m=N,C=et}return}ve=ve||ae,Ne=Ne||ie,Oe=Oe||Re,(ae!==_||ve!==E)&&(a.blendEquationSeparate(ct[ae],ct[ve]),_=ae,E=ve),(ie!==M||Re!==x||Ne!==w||Oe!==b)&&(a.blendFuncSeparate(pe[ie],pe[Re],pe[Ne],pe[Oe]),M=ie,x=Re,w=Ne,b=Oe),(lt.equals(y)===!1||we!==O)&&(a.blendColor(lt.r,lt.g,lt.b,we),y.copy(lt),O=we),m=N,C=!1}function Pe(N,ae){N.side===ni?He(a.CULL_FACE):me(a.CULL_FACE);let ie=N.side===Un;ae&&(ie=!ie),Be(ie),N.blending===nr&&N.transparent===!1?Ae(jn):Ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const Re=N.stencilWrite;o.setTest(Re),Re&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):He(a.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){F!==N&&(N?a.frontFace(a.CW):a.frontFace(a.CCW),F=N)}function Fe(N){N!==mp?(me(a.CULL_FACE),N!==G&&(N===fu?a.cullFace(a.BACK):N===gp?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):He(a.CULL_FACE),G=N}function st(N){N!==q&&(Y&&a.lineWidth(N),q=N)}function Ke(N,ae,ie){N?(me(a.POLYGON_OFFSET_FILL),(I!==ae||X!==ie)&&(I=ae,X=ie,r.getReversed()&&(ae=-ae,ie=-ie),a.polygonOffset(ae,ie))):He(a.POLYGON_OFFSET_FILL)}function ft(N){N?me(a.SCISSOR_TEST):He(a.SCISSOR_TEST)}function dt(N){N===void 0&&(N=a.TEXTURE0+ne-1),he!==N&&(a.activeTexture(N),he=N)}function bt(N,ae,ie){ie===void 0&&(he===null?ie=a.TEXTURE0+ne-1:ie=he);let Re=Q[ie];Re===void 0&&(Re={type:void 0,texture:void 0},Q[ie]=Re),(Re.type!==N||Re.texture!==ae)&&(he!==ie&&(a.activeTexture(ie),he=ie),a.bindTexture(N,ae||qe[N]),Re.type=N,Re.texture=ae)}function z(){const N=Q[he];N!==void 0&&N.type!==void 0&&(a.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ht(){try{a.compressedTexImage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function gt(){try{a.compressedTexImage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function Lt(){try{a.texSubImage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function be(){try{a.texSubImage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function It(){try{a.compressedTexSubImage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function je(){try{a.compressedTexSubImage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function Je(){try{a.texStorage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function R(){try{a.texStorage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function S(){try{a.texImage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function Z(){try{a.texImage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function Me(N){return u[N]!==void 0?u[N]:a.getParameter(N)}function oe(N,ae){u[N]!==ae&&(a.pixelStorei(N,ae),u[N]=ae)}function Se(N){ue.equals(N)===!1&&(a.scissor(N.x,N.y,N.z,N.w),ue.copy(N))}function Te(N){Ue.equals(N)===!1&&(a.viewport(N.x,N.y,N.z,N.w),Ue.copy(N))}function ce(N,ae){let ie=l.get(ae);ie===void 0&&(ie=new WeakMap,l.set(ae,ie));let Re=ie.get(N);Re===void 0&&(Re=a.getUniformBlockIndex(ae,N.name),a.uniformBlockBinding(ae,Re,Re),ie.set(N,Re))}function fe(N,ae,ie){const ve=l.get(ae).get(N);c[ve]!==ie&&(a.bindBufferBase(a.UNIFORM_BUFFER,ve,ie),c[ve]=ie)}function De(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},u={},he=null,Q={},f={},c={},d=new WeakMap,g=[],v=null,p=!1,m=null,_=null,M=null,x=null,E=null,w=null,b=null,y=new it(0,0,0),O=0,C=!1,F=null,G=null,q=null,I=null,X=null,ue.set(0,0,a.canvas.width,a.canvas.height),Ue.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:me,disable:He,bindFramebuffer:Et,drawBuffers:ze,useProgram:ot,setBlending:Ae,setMaterial:Pe,setFlipSided:Be,setCullFace:Fe,setLineWidth:st,setPolygonOffset:Ke,setScissorTest:ft,activeTexture:dt,bindTexture:bt,unbindTexture:z,compressedTexImage2D:Ht,compressedTexImage3D:gt,texImage2D:S,texImage3D:Z,pixelStorei:oe,getParameter:Me,updateUBOMapping:ce,uniformBlockBinding:fe,texStorage2D:Je,texStorage3D:R,texSubImage2D:Lt,texSubImage3D:be,compressedTexSubImage2D:It,compressedTexSubImage3D:je,scissor:Se,viewport:Te,reset:De}}function k_(a,e,t,n,i,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,h=new WeakMap,u=new Set;let f;const d=new WeakMap,g=new Set,v=new FinalizationRegistry(R=>g.delete(R));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return p?new OffscreenCanvas(R,S):mr("canvas")}function _(R,S,Z){let Me=1;const oe=Je(R);if((oe.width>Z||oe.height>Z)&&(Me=Z/Math.max(oe.width,oe.height)),Me<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Se=Math.floor(Me*oe.width),Te=Math.floor(Me*oe.height);f===void 0&&(f=m(Se,Te));const ce=S?m(Se,Te):f;return ce.width=Se,ce.height=Te,ce.getContext("2d").drawImage(R,0,0,Se,Te),nt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Se+"x"+Te+")."),ce}else return"data"in R&&nt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function M(R){return R.generateMipmaps}function x(R){a.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?a.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(R,S,Z,Me,oe,Se=!1){if(R!==null){if(a[R]!==void 0)return a[R];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Te;Me&&(Te=e.get("EXT_texture_norm16"),Te||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=S;if(S===a.RED&&(Z===a.FLOAT&&(ce=a.R32F),Z===a.HALF_FLOAT&&(ce=a.R16F),Z===a.UNSIGNED_BYTE&&(ce=a.R8),Z===a.UNSIGNED_SHORT&&Te&&(ce=Te.R16_EXT),Z===a.SHORT&&Te&&(ce=Te.R16_SNORM_EXT)),S===a.RED_INTEGER&&(Z===a.UNSIGNED_BYTE&&(ce=a.R8UI),Z===a.UNSIGNED_SHORT&&(ce=a.R16UI),Z===a.UNSIGNED_INT&&(ce=a.R32UI),Z===a.BYTE&&(ce=a.R8I),Z===a.SHORT&&(ce=a.R16I),Z===a.INT&&(ce=a.R32I)),S===a.RG&&(Z===a.FLOAT&&(ce=a.RG32F),Z===a.HALF_FLOAT&&(ce=a.RG16F),Z===a.UNSIGNED_BYTE&&(ce=a.RG8),Z===a.UNSIGNED_SHORT&&Te&&(ce=Te.RG16_EXT),Z===a.SHORT&&Te&&(ce=Te.RG16_SNORM_EXT)),S===a.RG_INTEGER&&(Z===a.UNSIGNED_BYTE&&(ce=a.RG8UI),Z===a.UNSIGNED_SHORT&&(ce=a.RG16UI),Z===a.UNSIGNED_INT&&(ce=a.RG32UI),Z===a.BYTE&&(ce=a.RG8I),Z===a.SHORT&&(ce=a.RG16I),Z===a.INT&&(ce=a.RG32I)),S===a.RGB_INTEGER&&(Z===a.UNSIGNED_BYTE&&(ce=a.RGB8UI),Z===a.UNSIGNED_SHORT&&(ce=a.RGB16UI),Z===a.UNSIGNED_INT&&(ce=a.RGB32UI),Z===a.BYTE&&(ce=a.RGB8I),Z===a.SHORT&&(ce=a.RGB16I),Z===a.INT&&(ce=a.RGB32I)),S===a.RGBA_INTEGER&&(Z===a.UNSIGNED_BYTE&&(ce=a.RGBA8UI),Z===a.UNSIGNED_SHORT&&(ce=a.RGBA16UI),Z===a.UNSIGNED_INT&&(ce=a.RGBA32UI),Z===a.BYTE&&(ce=a.RGBA8I),Z===a.SHORT&&(ce=a.RGBA16I),Z===a.INT&&(ce=a.RGBA32I)),S===a.RGB&&(Z===a.UNSIGNED_SHORT&&Te&&(ce=Te.RGB16_EXT),Z===a.SHORT&&Te&&(ce=Te.RGB16_SNORM_EXT),Z===a.UNSIGNED_INT_5_9_9_9_REV&&(ce=a.RGB9_E5),Z===a.UNSIGNED_INT_10F_11F_11F_REV&&(ce=a.R11F_G11F_B10F)),S===a.RGBA){const fe=Se?Xo:Pt.getTransfer(oe);Z===a.FLOAT&&(ce=a.RGBA32F),Z===a.HALF_FLOAT&&(ce=a.RGBA16F),Z===a.UNSIGNED_BYTE&&(ce=fe===Vt?a.SRGB8_ALPHA8:a.RGBA8),Z===a.UNSIGNED_SHORT&&Te&&(ce=Te.RGBA16_EXT),Z===a.SHORT&&Te&&(ce=Te.RGBA16_SNORM_EXT),Z===a.UNSIGNED_SHORT_4_4_4_4&&(ce=a.RGBA4),Z===a.UNSIGNED_SHORT_5_5_5_1&&(ce=a.RGB5_A1)}return(ce===a.R16F||ce===a.R32F||ce===a.RG16F||ce===a.RG32F||ce===a.RGBA16F||ce===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(R,S){let Z;return R?S===null||S===Oi||S===Ps?Z=a.DEPTH24_STENCIL8:S===li?Z=a.DEPTH32F_STENCIL8:S===hr&&(Z=a.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Oi||S===Ps?Z=a.DEPTH_COMPONENT24:S===li?Z=a.DEPTH_COMPONENT32F:S===hr&&(Z=a.DEPTH_COMPONENT16),Z}function y(R,S){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function O(R){const S=new WeakRef(R);n.get(R).__ref=S,g.add(S),v.register(R,S,S)}function C(R){const S=n.get(R).__ref;S!==void 0&&(g.delete(S),v.unregister(S))}function F(R){q(R.target)}function G(R){I(R.target)}function q(R){R.removeEventListener("dispose",F),C(R),ne(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function I(R){R.removeEventListener("dispose",G),C(R),ge(R)}function X(){for(const R of g){const S=R.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):q(S))}g.clear(),u.clear()}function ne(R){const S=n.get(R);if(S.__webglInit===void 0)return;const Z=R.source,Me=d.get(Z);if(Me){const oe=Me[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&Y(R),Object.keys(Me).length===0&&d.delete(Z)}n.remove(R)}function Y(R){const S=n.get(R);a.deleteTexture(S.__webglTexture);const Z=R.source,Me=d.get(Z);delete Me[S.__cacheKey],r.memory.textures--}function ge(R){const S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();const Z=R.depthTexture;if(Z&&Z.renderTarget===R&&q(Z),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(S.__webglFramebuffer[oe]))for(let Se=0;Se<S.__webglFramebuffer[oe].length;Se++)a.deleteFramebuffer(S.__webglFramebuffer[oe][Se]);else a.deleteFramebuffer(S.__webglFramebuffer[oe]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[oe])}else{if(Array.isArray(S.__webglFramebuffer))for(let oe=0;oe<S.__webglFramebuffer.length;oe++)a.deleteFramebuffer(S.__webglFramebuffer[oe]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let oe=0;oe<S.__webglColorRenderbuffer.length;oe++)S.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[oe]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Me=R.textures;for(let oe=0,Se=Me.length;oe<Se;oe++){const Te=n.get(Me[oe]);Te.__webglTexture&&(a.deleteTexture(Te.__webglTexture),r.memory.textures--),n.remove(Me[oe])}n.remove(R)}let J=0;function he(){J=0}function Q(){return J}function Ee(R){J=R}function Ve(){const R=J;return R>=i.maxTextures&&nt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),J+=1,R}function ue(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Ue(R,S){const Z=n.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Z.__version!==R.version){const Me=R.image;if(Me===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(Z,R,S);return}}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,Z.__webglTexture,a.TEXTURE0+S)}function ke(R,S){const Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Pe(Z,R,S);return}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,Z.__webglTexture,a.TEXTURE0+S)}function qe(R,S){const Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Pe(Z,R,S);return}t.bindTexture(a.TEXTURE_3D,Z.__webglTexture,a.TEXTURE0+S)}function me(R,S){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){Be(Z,R,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture,a.TEXTURE0+S)}const He={[Si]:a.REPEAT,[Fi]:a.CLAMP_TO_EDGE,[Ho]:a.MIRRORED_REPEAT},Et={[on]:a.NEAREST,[id]:a.NEAREST_MIPMAP_NEAREST,[Za]:a.NEAREST_MIPMAP_LINEAR,[Sn]:a.LINEAR,[Lo]:a.LINEAR_MIPMAP_NEAREST,[Ui]:a.LINEAR_MIPMAP_LINEAR},ze={[zp]:a.NEVER,[dd]:a.ALWAYS,[Gp]:a.LESS,[ud]:a.LEQUAL,[Vp]:a.EQUAL,[fd]:a.GEQUAL,[Hp]:a.GREATER,[Wp]:a.NOTEQUAL};function ot(R,S){if(S.type===li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===Lo||S.magFilter===Za||S.magFilter===Ui||S.minFilter===Sn||S.minFilter===Lo||S.minFilter===Za||S.minFilter===Ui)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,He[S.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,He[S.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,He[S.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,Et[S.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,Et[S.minFilter]),S.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,ze[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===on||S.minFilter!==Za&&S.minFilter!==Ui||S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");a.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ct(R,S){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",F),O(S));const Me=S.source;let oe=d.get(Me);oe===void 0&&(oe={},d.set(Me,oe));const Se=ue(S);if(Se!==R.__cacheKey){oe[Se]===void 0&&(oe[Se]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),oe[Se].usedTimes++;const Te=oe[R.__cacheKey];Te!==void 0&&(oe[R.__cacheKey].usedTimes--,Te.usedTimes===0&&Y(S)),R.__cacheKey=Se,R.__webglTexture=oe[Se].texture}return Z}function pe(R,S,Z){return Math.floor(Math.floor(R/Z)/S)}function Ae(R,S,Z,Me){const Se=R.updateRanges;if(Se.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,S.width,S.height,Z,Me,S.data);else{Se.sort((N,ae)=>N.start-ae.start);let Te=0;for(let N=1;N<Se.length;N++){const ae=Se[Te],ie=Se[N],Re=ae.start+ae.count,ve=pe(ie.start,S.width,4),Ne=pe(ae.start,S.width,4);ie.start<=Re+1&&ve===Ne&&pe(ie.start+ie.count-1,S.width,4)===ve?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++Te,Se[Te]=ie)}Se.length=Te+1;const ce=t.getParameter(a.UNPACK_ROW_LENGTH),fe=t.getParameter(a.UNPACK_SKIP_PIXELS),De=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,S.width);for(let N=0,ae=Se.length;N<ae;N++){const ie=Se[N],Re=Math.floor(ie.start/4),ve=Math.ceil(ie.count/4),Ne=Re%S.width,Oe=Math.floor(Re/S.width),lt=ve,we=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(a.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(a.TEXTURE_2D,0,Ne,Oe,lt,we,Z,Me,S.data)}R.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,ce),t.pixelStorei(a.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(a.UNPACK_SKIP_ROWS,De)}}function Pe(R,S,Z){let Me=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Me=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Me=a.TEXTURE_3D);const oe=ct(R,S),Se=S.source;t.bindTexture(Me,R.__webglTexture,a.TEXTURE0+Z);const Te=n.get(Se);if(Se.version!==Te.__version||oe===!0){if(t.activeTexture(a.TEXTURE0+Z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const we=Pt.getPrimaries(Pt.workingColorSpace),et=S.colorSpace===ds?null:Pt.getPrimaries(S.colorSpace),tt=S.colorSpace===ds||we===et?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment);let fe=_(S.image,!1,i.maxTextureSize);fe=je(S,fe);const De=s.convert(S.format,S.colorSpace),N=s.convert(S.type);let ae=w(S.internalFormat,De,N,S.normalized,S.colorSpace,S.isVideoTexture);ot(Me,S);let ie;const Re=S.mipmaps,ve=S.isVideoTexture!==!0,Ne=Te.__version===void 0||oe===!0,Oe=Se.dataReady,lt=y(S,fe);if(S.isDepthTexture)ae=b(S.format===ji,S.type),Ne&&(ve?t.texStorage2D(a.TEXTURE_2D,1,ae,fe.width,fe.height):t.texImage2D(a.TEXTURE_2D,0,ae,fe.width,fe.height,0,De,N,null));else if(S.isDataTexture)if(Re.length>0){ve&&Ne&&t.texStorage2D(a.TEXTURE_2D,lt,ae,Re[0].width,Re[0].height);for(let we=0,et=Re.length;we<et;we++)ie=Re[we],ve?Oe&&t.texSubImage2D(a.TEXTURE_2D,we,0,0,ie.width,ie.height,De,N,ie.data):t.texImage2D(a.TEXTURE_2D,we,ae,ie.width,ie.height,0,De,N,ie.data);S.generateMipmaps=!1}else ve?(Ne&&t.texStorage2D(a.TEXTURE_2D,lt,ae,fe.width,fe.height),Oe&&Ae(S,fe,De,N)):t.texImage2D(a.TEXTURE_2D,0,ae,fe.width,fe.height,0,De,N,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ve&&Ne&&t.texStorage3D(a.TEXTURE_2D_ARRAY,lt,ae,Re[0].width,Re[0].height,fe.depth);for(let we=0,et=Re.length;we<et;we++)if(ie=Re[we],S.format!==hi)if(De!==null)if(ve){if(Oe)if(S.layerUpdates.size>0){const tt=gf(ie.width,ie.height,S.format,S.type);for(const _e of S.layerUpdates){const xt=ie.data.subarray(_e*tt/ie.data.BYTES_PER_ELEMENT,(_e+1)*tt/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,we,0,0,_e,ie.width,ie.height,1,De,xt)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,we,0,0,0,ie.width,ie.height,fe.depth,De,ie.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,we,ae,ie.width,ie.height,fe.depth,0,ie.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Oe&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,we,0,0,0,ie.width,ie.height,fe.depth,De,N,ie.data):t.texImage3D(a.TEXTURE_2D_ARRAY,we,ae,ie.width,ie.height,fe.depth,0,De,N,ie.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ve&&Ne&&t.texStorage2D(a.TEXTURE_2D,lt,ae,Re[0].width,Re[0].height);for(let we=0,et=Re.length;we<et;we++)ie=Re[we],S.format!==hi?De!==null?ve?Oe&&t.compressedTexSubImage2D(a.TEXTURE_2D,we,0,0,ie.width,ie.height,De,ie.data):t.compressedTexImage2D(a.TEXTURE_2D,we,ae,ie.width,ie.height,0,ie.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Oe&&t.texSubImage2D(a.TEXTURE_2D,we,0,0,ie.width,ie.height,De,N,ie.data):t.texImage2D(a.TEXTURE_2D,we,ae,ie.width,ie.height,0,De,N,ie.data)}else if(S.isDataArrayTexture)if(ve){if(Ne&&t.texStorage3D(a.TEXTURE_2D_ARRAY,lt,ae,fe.width,fe.height,fe.depth),Oe)if(S.layerUpdates.size>0){const we=gf(fe.width,fe.height,S.format,S.type);for(const et of S.layerUpdates){const tt=fe.data.subarray(et*we/fe.data.BYTES_PER_ELEMENT,(et+1)*we/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,et,fe.width,fe.height,1,De,N,tt)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,De,N,fe.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,ae,fe.width,fe.height,fe.depth,0,De,N,fe.data);else if(S.isData3DTexture)ve?(Ne&&t.texStorage3D(a.TEXTURE_3D,lt,ae,fe.width,fe.height,fe.depth),Oe&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,De,N,fe.data)):t.texImage3D(a.TEXTURE_3D,0,ae,fe.width,fe.height,fe.depth,0,De,N,fe.data);else if(S.isFramebufferTexture){if(Ne)if(ve)t.texStorage2D(a.TEXTURE_2D,lt,ae,fe.width,fe.height);else{let we=fe.width,et=fe.height;for(let tt=0;tt<lt;tt++)t.texImage2D(a.TEXTURE_2D,tt,ae,we,et,0,De,N,null),we>>=1,et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in a){const we=a.canvas;if(we.hasAttribute("layoutsubtree")||we.setAttribute("layoutsubtree","true"),fe.parentNode!==we){we.appendChild(fe),u.add(S),we.onpaint=et=>{const tt=et.changedElements;for(const _e of u)tt.includes(_e.image)&&(_e.needsUpdate=!0)},we.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,fe);else{const tt=a.RGBA,_e=a.RGBA,xt=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,tt,_e,xt,fe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Re.length>0){if(ve&&Ne){const we=Je(Re[0]);t.texStorage2D(a.TEXTURE_2D,lt,ae,we.width,we.height)}for(let we=0,et=Re.length;we<et;we++)ie=Re[we],ve?Oe&&t.texSubImage2D(a.TEXTURE_2D,we,0,0,De,N,ie):t.texImage2D(a.TEXTURE_2D,we,ae,De,N,ie);S.generateMipmaps=!1}else if(ve){if(Ne){const we=Je(fe);t.texStorage2D(a.TEXTURE_2D,lt,ae,we.width,we.height)}Oe&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,De,N,fe)}else t.texImage2D(a.TEXTURE_2D,0,ae,De,N,fe);M(S)&&S.mipmapsAutoUpdate===!0&&x(Me),Te.__version=Se.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Be(R,S,Z){if(S.image.length!==6)return;const Me=ct(R,S),oe=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+Z);const Se=n.get(oe);if(oe.version!==Se.__version||Me===!0){t.activeTexture(a.TEXTURE0+Z);const Te=Pt.getPrimaries(Pt.workingColorSpace),ce=S.colorSpace===ds?null:Pt.getPrimaries(S.colorSpace),fe=S.colorSpace===ds||Te===ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const De=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let _e=0;_e<6;_e++)!De&&!N?ae[_e]=_(S.image[_e],!0,i.maxCubemapSize):ae[_e]=N?S.image[_e].image:S.image[_e],ae[_e]=je(S,ae[_e]);const ie=ae[0],Re=s.convert(S.format,S.colorSpace),ve=s.convert(S.type);let Ne=w(S.internalFormat,Re,ve,S.normalized,S.colorSpace);const Oe=S.isVideoTexture!==!0,lt=Se.__version===void 0||Me===!0,we=oe.dataReady;let et=y(S,ie);ot(a.TEXTURE_CUBE_MAP,S);let tt;if(S.isDepthTexture){if(Ne=b(S.format===ji,S.type),lt)if(Oe)t.texStorage2D(a.TEXTURE_CUBE_MAP,1,Ne,ie.width,ie.height);else for(let _e=0;_e<6;_e++)t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ne,ie.width,ie.height,0,Re,ve,null)}else if(De){Oe&&lt&&t.texStorage2D(a.TEXTURE_CUBE_MAP,et,Ne,ie.width,ie.height);for(let _e=0;_e<6;_e++){tt=ae[_e].mipmaps;for(let xt=0;xt<tt.length;xt++){const Ot=tt[xt];S.format!==hi?Re!==null?Oe?we&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xt,0,0,Ot.width,Ot.height,Re,Ot.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xt,Ne,Ot.width,Ot.height,0,Ot.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xt,0,0,Ot.width,Ot.height,Re,ve,Ot.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xt,Ne,Ot.width,Ot.height,0,Re,ve,Ot.data)}}}else{if(tt=S.mipmaps,Oe&&lt){tt.length>0&&et++;const _e=Je(ae[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,et,Ne,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(N){Oe?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ae[_e].width,ae[_e].height,Re,ve,ae[_e].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ne,ae[_e].width,ae[_e].height,0,Re,ve,ae[_e].data);for(let xt=0;xt<tt.length;xt++){const tn=tt[xt].image[_e].image;Oe?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xt+1,0,0,tn.width,tn.height,Re,ve,tn.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xt+1,Ne,tn.width,tn.height,0,Re,ve,tn.data)}}else{Oe?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re,ve,ae[_e]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ne,Re,ve,ae[_e]);for(let xt=0;xt<tt.length;xt++){const Ot=tt[xt];Oe?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xt+1,0,0,Re,ve,Ot.image[_e]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xt+1,Ne,Re,ve,Ot.image[_e])}}}M(S)&&S.mipmapsAutoUpdate===!0&&x(a.TEXTURE_CUBE_MAP),Se.__version=oe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Fe(R,S,Z,Me,oe,Se){const Te=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),fe=w(Z.internalFormat,Te,ce,Z.normalized,Z.colorSpace),De=n.get(S),N=n.get(Z);if(N.__renderTarget=S,!De.__hasExternalTextures){const ae=Math.max(1,S.width>>Se),ie=Math.max(1,S.height>>Se);oe===a.TEXTURE_3D||oe===a.TEXTURE_2D_ARRAY?t.texImage3D(oe,Se,fe,ae,ie,S.depth,0,Te,ce,null):t.texImage2D(oe,Se,fe,ae,ie,0,Te,ce,null)}t.bindFramebuffer(a.FRAMEBUFFER,R),be(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Me,oe,N.__webglTexture,0,Lt(S)):(oe===a.TEXTURE_2D||oe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Me,oe,N.__webglTexture,Se),t.bindFramebuffer(a.FRAMEBUFFER,null)}function st(R,S,Z){if(a.bindRenderbuffer(a.RENDERBUFFER,R),S.depthBuffer){const Me=S.depthTexture,oe=Me&&Me.isDepthTexture?Me.type:null,Se=b(S.stencilBuffer,oe),Te=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;be(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(S),Se,S.width,S.height):Z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(S),Se,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,Se,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Te,a.RENDERBUFFER,R)}else{const Me=S.textures;for(let oe=0;oe<Me.length;oe++){const Se=Me[oe],Te=s.convert(Se.format,Se.colorSpace),ce=s.convert(Se.type),fe=w(Se.internalFormat,Te,ce,Se.normalized,Se.colorSpace);be(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(S),fe,S.width,S.height):Z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(S),fe,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,fe,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ke(R,S,Z){const Me=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const oe=n.get(S.depthTexture);oe.__renderTarget=S;const Se=Me?S.depthTexture.image[0]:S.depthTexture.image;(!oe.__webglTexture||Se.width!==S.width||Se.height!==S.height)&&(Se.width=S.width,Se.height=S.height,S.depthTexture.needsUpdate=!0),Me?me(S.depthTexture,0):Ue(S.depthTexture,0);const Te=oe.__webglTexture,ce=Lt(S),fe=Me?a.TEXTURE_CUBE_MAP_POSITIVE_X+Z:a.TEXTURE_2D,De=S.depthTexture.format===ji?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(S.depthTexture.format===gs)be(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,De,fe,Te,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,De,fe,Te,0);else if(S.depthTexture.format===ji)be(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,De,fe,Te,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,De,fe,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(R){const S=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Me=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Me){const oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Me.removeEventListener("dispose",oe)};Me.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=Me}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(Z)for(let Me=0;Me<6;Me++)Ke(S.__webglFramebuffer[Me],R,Me);else R.texture.mipmaps.length>0?Ke(S.__webglFramebuffer[0],R,0):Ke(S.__webglFramebuffer,R,0);else if(Z){S.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[Me]),S.__webglDepthbuffer[Me]===void 0)S.__webglDepthbuffer[Me]=a.createRenderbuffer(),st(S.__webglDepthbuffer[Me],R,!1);else{const oe=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=S.__webglDepthbuffer[Me];a.bindRenderbuffer(a.RENDERBUFFER,Se),a.framebufferRenderbuffer(a.FRAMEBUFFER,oe,a.RENDERBUFFER,Se)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),st(S.__webglDepthbuffer,R,!1);else{const oe=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Se),a.framebufferRenderbuffer(a.FRAMEBUFFER,oe,a.RENDERBUFFER,Se)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function dt(R,S,Z){const Me=n.get(R);S!==void 0&&Fe(Me.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Z!==void 0&&ft(R)}function bt(R){const S=R.texture,Z=n.get(R),Me=n.get(S);R.addEventListener("dispose",G),O(R);const oe=R.textures,Se=R.isWebGLCubeRenderTarget===!0,Te=oe.length>1;if(Te||(Me.__webglTexture===void 0&&(Me.__webglTexture=a.createTexture()),Me.__version=S.version,r.memory.textures++),Se){Z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps.length>0){Z.__webglFramebuffer[ce]=[];for(let fe=0;fe<S.mipmaps.length;fe++)Z.__webglFramebuffer[ce][fe]=a.createFramebuffer()}else Z.__webglFramebuffer[ce]=a.createFramebuffer()}else{if(S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)Z.__webglFramebuffer[ce]=a.createFramebuffer()}else Z.__webglFramebuffer=a.createFramebuffer();if(Te)for(let ce=0,fe=oe.length;ce<fe;ce++){const De=n.get(oe[ce]);De.__webglTexture===void 0&&(De.__webglTexture=a.createTexture(),r.memory.textures++)}if(R.samples>0&&be(R)===!1){Z.__webglMultisampledFramebuffer=a.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ce=0;ce<oe.length;ce++){const fe=oe[ce];Z.__webglColorRenderbuffer[ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Z.__webglColorRenderbuffer[ce]);const De=s.convert(fe.format,fe.colorSpace),N=s.convert(fe.type),ae=w(fe.internalFormat,De,N,fe.normalized,fe.colorSpace,R.isXRRenderTarget===!0),ie=Lt(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,ie,ae,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,Z.__webglColorRenderbuffer[ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=a.createRenderbuffer(),st(Z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Se){t.bindTexture(a.TEXTURE_CUBE_MAP,Me.__webglTexture),ot(a.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Fe(Z.__webglFramebuffer[ce][fe],R,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Fe(Z.__webglFramebuffer[ce],R,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);M(S)?x(a.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ce=0,fe=oe.length;ce<fe;ce++){const De=oe[ce],N=n.get(De);let ae=a.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ae,N.__webglTexture),ot(ae,De),Fe(Z.__webglFramebuffer,R,De,a.COLOR_ATTACHMENT0+ce,ae,0),M(De)&&x(ae)}t.unbindTexture()}else{let ce=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ce,Me.__webglTexture),ot(ce,S),S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Fe(Z.__webglFramebuffer[fe],R,S,a.COLOR_ATTACHMENT0,ce,fe);else Fe(Z.__webglFramebuffer,R,S,a.COLOR_ATTACHMENT0,ce,0);M(S)?x(ce):S.mipmaps.length>0&&a.texParameteri(ce,a.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&ft(R)}function z(R){const S=R.textures;for(let Z=0,Me=S.length;Z<Me;Z++){const oe=S[Z];if(M(oe)&&oe.mipmapsAutoUpdate===!0){const Se=E(R),Te=n.get(oe).__webglTexture;t.bindTexture(Se,Te),x(Se),t.unbindTexture()}}}const Ht=[];function gt(R){if(R.samples>0){if(be(R)===!1){const S=R.textures,Z=R.width,Me=R.height;let oe=a.COLOR_BUFFER_BIT;const Se=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Te=n.get(R),ce=S.length>1;if(ce)for(let De=0;De<S.length;De++)t.bindFramebuffer(a.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Te.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let De=0;De<S.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=a.STENCIL_BUFFER_BIT)),ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Te.__webglColorRenderbuffer[De]);const N=n.get(S[De]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,N,0)}a.blitFramebuffer(0,0,Z,Me,0,0,Z,Me,oe,a.NEAREST),c===!0&&(Ht.length=0,Ht.push(a.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ht.push(Se),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ce)for(let De=0;De<S.length;De++){t.bindFramebuffer(a.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,Te.__webglColorRenderbuffer[De]);const N=n.get(S[De]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Te.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,N,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const S=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function Lt(R){return Math.min(i.maxSamples,R.samples)}function be(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(R){const S=r.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function je(R,S){const Z=R.colorSpace,Me=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Z!==si&&Z!==ds&&(Pt.getTransfer(Z)===Vt?(Me!==hi||oe!==Yn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",Z)),S}function Je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Ve,this.resetTextureUnits=he,this.getTextureUnits=Q,this.setTextureUnits=Ee,this.setTexture2D=Ue,this.setTexture2DArray=ke,this.setTexture3D=qe,this.setTextureCube=me,this.rebindTextures=dt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=be,this.dispose=X}function B_(a,e){function t(n,i=ds){let s;const r=Pt.getTransfer(i);if(n===Yn)return a.UNSIGNED_BYTE;if(n===yh)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Th)return a.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===sd)return a.BYTE;if(n===ad)return a.SHORT;if(n===hr)return a.UNSIGNED_SHORT;if(n===Sh)return a.INT;if(n===Oi)return a.UNSIGNED_INT;if(n===li)return a.FLOAT;if(n===An)return a.HALF_FLOAT;if(n===cd)return a.ALPHA;if(n===ld)return a.RGB;if(n===hi)return a.RGBA;if(n===gs)return a.DEPTH_COMPONENT;if(n===ji)return a.DEPTH_STENCIL;if(n===nc)return a.RED;if(n===wh)return a.RED_INTEGER;if(n===Ds)return a.RG;if(n===Eh)return a.RG_INTEGER;if(n===Ah)return a.RGBA_INTEGER;if(n===No||n===Io||n===Fo||n===Uo)if(r===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===xl||n===_l||n===Ml)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===yl||n===Tl||n===wl||n===El||n===Wo||n===Al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sl||n===yl)return r===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wl)return s.COMPRESSED_R11_EAC;if(n===El)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Wo)return s.COMPRESSED_RG11_EAC;if(n===Al)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Dl||n===Ll||n===Nl||n===Il||n===Fl||n===Ul||n===Ol||n===kl||n===Bl||n===zl||n===Gl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return r===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vl||n===Hl||n===Wl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Vl)return r===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ql||n===Xl||n===qo||n===Kl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ql)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G_=`
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

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gn({vertexShader:z_,fragmentShader:G_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H_ extends Ns{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",p=new V_,m={},_=t.getContextAttributes();let M=null,x=null;const E=[],w=[],b=new Ie;let y=null,O=null;const C=new Jn;C.viewport=new qt;const F=new Jn;F.viewport=new qt;const G=[C,F],q=new X0;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let Ue=E[ue];return Ue===void 0&&(Ue=new Dc,E[ue]=Ue),Ue.getTargetRaySpace()},this.getControllerGrip=function(ue){let Ue=E[ue];return Ue===void 0&&(Ue=new Dc,E[ue]=Ue),Ue.getGripSpace()},this.getHand=function(ue){let Ue=E[ue];return Ue===void 0&&(Ue=new Dc,E[ue]=Ue),Ue.getHandSpace()};function ne(ue){const Ue=w.indexOf(ue.inputSource);if(Ue===-1)return;const ke=E[Ue];ke!==void 0&&(ke.update(ue.inputSource,ue.frame,l||r),ke.dispatchEvent({type:ue.type,data:ue.inputSource}))}function Y(){i.removeEventListener("select",ne),i.removeEventListener("selectstart",ne),i.removeEventListener("selectend",ne),i.removeEventListener("squeeze",ne),i.removeEventListener("squeezestart",ne),i.removeEventListener("squeezeend",ne),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",ge);for(let ue=0;ue<E.length;ue++){const Ue=w[ue];Ue!==null&&(w[ue]=null,E[ue].disconnect(Ue))}I=null,X=null,p.reset();for(const ue in m)delete m[ue];if(e.setRenderTarget(M),d=null,f=null,u=null,i=null,x=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),O!==null){const ue=O.camera;ue.fov=O.fov,ue.zoom=O.zoom,ue.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){s=ue,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){o=ue,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(ue){l=ue},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ue){if(i=ue,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",ne),i.addEventListener("selectstart",ne),i.addEventListener("selectend",ne),i.addEventListener("squeeze",ne),i.addEventListener("squeezestart",ne),i.addEventListener("squeezeend",ne),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",ge),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,qe=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=_.stencil?ji:gs,qe=_.stencil?Ps:Oi);const He={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(He),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Tn(f.textureWidth,f.textureHeight,{format:hi,type:Yn,depthTexture:new vs(f.textureWidth,f.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ke={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ke),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Tn(d.framebufferWidth,d.framebufferHeight,{format:hi,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ge(ue){for(let Ue=0;Ue<ue.removed.length;Ue++){const ke=ue.removed[Ue],qe=w.indexOf(ke);qe>=0&&(w[qe]=null,E[qe].disconnect(ke))}for(let Ue=0;Ue<ue.added.length;Ue++){const ke=ue.added[Ue];let qe=w.indexOf(ke);if(qe===-1){for(let He=0;He<E.length;He++)if(He>=w.length){w.push(ke),qe=He;break}else if(w[He]===null){w[He]=ke,qe=He;break}if(qe===-1)break}const me=E[qe];me&&me.connect(ke)}}function J(ue,Ue){Ue===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(Ue.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(i===null)return;let Ue=ue.near,ke=ue.far;p.texture!==null&&(p.depthNear>0&&(Ue=p.depthNear),p.depthFar>0&&(ke=p.depthFar)),q.near=F.near=C.near=Ue,q.far=F.far=C.far=ke,(I!==q.near||X!==q.far)&&(i.updateRenderState({depthNear:q.near,depthFar:q.far}),I=q.near,X=q.far),q.layers.mask=ue.layers.mask|6,C.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;const qe=ue.parent,me=q.cameras;J(q,qe);for(let He=0;He<me.length;He++)J(me[He],qe);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),O===null&&ue.isPerspectiveCamera&&(O={camera:ue,fov:ue.fov,zoom:ue.zoom}),he(ue,q,qe)};function he(ue,Ue,ke){ke===null?ue.matrix.copy(Ue.matrixWorld):(ue.matrix.copy(ke.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(Ue.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(Ue.projectionMatrix),ue.projectionMatrixInverse.copy(Ue.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=ma*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ue){c=ue,f!==null&&(f.fixedFoveation=ue),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ue)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(ue){return m[ue]};let Q=null;function Ee(ue,Ue){if(h=Ue.getViewerPose(l||r),g=Ue,h!==null){const ke=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let qe=!1;ke.length!==q.cameras.length&&(q.cameras.length=0,qe=!0);for(let ze=0;ze<ke.length;ze++){const ot=ke[ze];let ct=null;if(d!==null)ct=d.getViewport(ot);else{const Ae=u.getViewSubImage(f,ot);ct=Ae.viewport,ze===0&&(e.setRenderTargetTextures(x,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(x))}let pe=G[ze];pe===void 0&&(pe=new Jn,pe.layers.enable(ze),pe.viewport=new qt,G[ze]=pe),pe.matrix.fromArray(ot.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ot.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ct.x,ct.y,ct.width,ct.height),ze===0&&(q.matrix.copy(pe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),qe===!0&&q.cameras.push(pe)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const ze=u.getDepthInformation(ke[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,i.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ze=0;ze<ke.length;ze++){const ot=ke[ze].camera;if(ot){let ct=m[ot];ct||(ct=new Ad,m[ot]=ct);const pe=u.getCameraImage(ot);ct.sourceTexture=pe}}}}for(let ke=0;ke<E.length;ke++){const qe=w[ke],me=E[ke];qe!==null&&me!==void 0&&me.update(qe,Ue,l||r)}Q&&Q(ue,Ue),Ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ue}),g=null}const Ve=new Vd;Ve.setAnimationLoop(Ee),this.setAnimationLoop=function(ue){Q=ue},this.dispose=function(){}}}const W_=new Qe,$d=new Tt;$d.set(-1,0,0,0,1,0,0,0,1);function q_(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ud(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,_,M,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,_,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m),M=_.envMap,x=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply($d),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function X_(a,e,t,n){let i={},s={};function r(_,M){const x=M.program;n.uniformBlockBinding(_,x,i[_.id])}function o(_,M){let x=i[_.id];x===void 0&&(g(_),x=c(_),i[_.id]=x,_.addEventListener("dispose",p));const E=M.program;n.updateUBOMapping(_,E);const w=e.render.frame;s[_.id]!==w&&(l(_),s[_.id]=w)}function c(_){const M=a.createBuffer(),x=_.__size,E=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,x,E),a.bindBuffer(a.UNIFORM_BUFFER,null),M}function l(_){const M=i[_.id],x=_.uniforms,E=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,M);for(let w=0,b=x.length;w<b;w++){const y=x[w];if(Array.isArray(y))for(let O=0,C=y.length;O<C;O++)h(y[O],w,O,E);else h(y,w,0,E)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function h(_,M,x,E){if(f(_,M,x,E)===!0){const w=_.__offset,b=_.value;if(Array.isArray(b)){let y=0;for(let O=0;O<b.length;O++){const C=b[O],F=v(C,!0);u(C,_.__data,y),y+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else u(b,_.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,w,_.__data)}}function u(_,M,x){typeof _=="number"||typeof _=="boolean"?M[x]=_:_.isMatrix3?(M[x]=_.elements[0],M[x+1]=_.elements[1],M[x+2]=_.elements[2],M[x+3]=0,M[x+4]=_.elements[3],M[x+5]=_.elements[4],M[x+6]=_.elements[5],M[x+7]=0,M[x+8]=_.elements[6],M[x+9]=_.elements[7],M[x+10]=_.elements[8],M[x+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-x),x):_.toArray(M,x)}function f(_,M,x,E){const w=_.value,b=M+"_"+x;if(Array.isArray(w)){E[b]===void 0&&(E[b]=[]);const y=E[b];let O=!1;for(let C=0;C<w.length;C++)d(w[C],y,C)===!0&&(O=!0);return O}return d(w,E,b)}function d(_,M,x){if(M[x]===void 0)return typeof _=="number"||typeof _=="boolean"?M[x]=_:ArrayBuffer.isView(_)?M[x]=_.slice():M[x]=_.clone(),!0;{const E=M[x];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return M[x]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function g(_){const M=_.uniforms;let x=0;const E=16;for(let b=0,y=M.length;b<y;b++){const O=Array.isArray(M[b])?M[b]:[M[b]];for(let C=0,F=O.length;C<F;C++){const G=O[C],q=Array.isArray(G.value)?G.value:[G.value],I=Array.isArray(M[b])||Array.isArray(G.value);let X=x;for(let Y=0,ge=q.length;Y<ge;Y++){const J=q[Y],he=v(J,I),Q=x%E,Ee=Q%he.boundary,Ve=Q+Ee;x+=Ee,Ve!==0&&E-Ve<he.storage&&(x+=E-Ve),Y===0&&(X=x),x+=he.storage}const ne=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new ne((x-X)/Float32Array.BYTES_PER_ELEMENT),G.__offset=X}}const w=x%E;return w>0&&(x+=E-w),_.__size=x,_.__cache={},this}function v(_,M){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=16,x.storage=48):_.isMatrix4?(x.boundary=16,x.storage=64):_.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(x.boundary=16,x.storage=_.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function p(_){const M=_.target;M.removeEventListener("dispose",p),a.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const _ in i)a.deleteBuffer(i[_]);i={},s={}}return{bind:r,update:o,dispose:m}}const K_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function j_(){return Ai===null&&(Ai=new wr(K_,16,16,Ds,An),Ai.name="DFG_LUT",Ai.minFilter=Sn,Ai.magFilter=Sn,Ai.wrapS=Fi,Ai.wrapT=Fi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class J_{constructor(e={}){const{canvas:t=Kp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Yn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const v=d,p=new Set([Ah,Eh,wh]),m=new Set([Yn,Oi,hr,Ps,yh,Th]),_=new Uint32Array(4),M=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]};let E=null,w=null;const b=[],y=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1,G=null,q=null,I=null,X=null;this._outputColorSpace=Mn;let ne=0,Y=0,ge=null,J=-1,he=null;const Q=new qt,Ee=new qt;let Ve=null;const ue=new it(0);let Ue=0,ke=t.width,qe=t.height,me=1,He=null,Et=null;const ze=new qt(0,0,ke,qe),ot=new qt(0,0,ke,qe);let ct=!1;const pe=new gr,Ae=new Uh;let Pe=!1,Be=!1;const Fe=new Qe,st=new L,Ke=new qt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function bt(){return ge===null?me:1}let z=n;function Ht(T,k){return t.getContext(T,k)}let gt,Lt,be,It,je,Je,R,S,Z,Me,oe,Se,Te,ce,fe,De,N,ae,ie,Re,ve,Ne,Oe;try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ph}`),t.addEventListener("webglcontextlost",et,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",_e,!1),z===null){const k="webgl2";if(z=Ht(k,T),z===null)throw Ht(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(T){throw t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),mt("WebGLRenderer: "+T.message),T}function lt(){gt=new $b(z),gt.init(),ve=new B_(z,gt),Lt=new Gb(z,gt,e,ve),be=new O_(z,gt),Lt.reversedDepthBuffer&&f&&be.buffers.depth.setReversed(!0),q=z.createFramebuffer(),I=z.createFramebuffer(),X=z.createFramebuffer(),It=new tx(z),je=new y_,Je=new k_(z,gt,be,je,Lt,ve,It),R=new Zb(C),S=new ig(z),Ne=new Bb(z,S),Z=new Qb(z,S,It,Ne),Me=new ix(z,Z,S,Ne,It),ae=new nx(z,Lt,Je),fe=new Vb(je),oe=new S_(C,R,gt,Lt,Ne,fe),Se=new q_(C,je),Te=new w_,ce=new D_(gt),N=new kb(C,R,be,Me,g,c),De=new U_(C,Me,Lt),Oe=new X_(z,It,Lt,be),ie=new zb(z,gt,It),Re=new ex(z,gt,It),It.programs=oe.programs,C.capabilities=Lt,C.extensions=gt,C.properties=je,C.renderLists=Te,C.shadowMap=De,C.state=be,C.info=It}v!==Yn&&(O=new ax(v,t.width,t.height,o,i,s));const we=new H_(C,z);this.xr=we,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(T){T!==void 0&&(me=T,this.setSize(ke,qe,!1))},this.getSize=function(T){return T.set(ke,qe)},this.setSize=function(T,k,te=!0){if(we.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=T,qe=k,t.width=Math.floor(T*me),t.height=Math.floor(k*me),te===!0&&(t.style.width=T+"px",t.style.height=k+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(ke*me,qe*me).floor()},this.setDrawingBufferSize=function(T,k,te){ke=T,qe=k,me=te,t.width=Math.floor(T*te),t.height=Math.floor(k*te),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(v===Yn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(ze)},this.setViewport=function(T,k,te,$){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,k,te,$),be.viewport(Q.copy(ze).multiplyScalar(bt()).round())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,k,te,$){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,k,te,$),be.scissor(Ee.copy(ot).multiplyScalar(bt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){be.setScissorTest(ct=T)},this.setOpaqueSort=function(T){He=T},this.setTransparentSort=function(T){Et=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,te=!0){let $=0;if(T){let ee=!1;if(ge!==null){const A=ge.texture.format;ee=p.has(A)}if(ee){const A=ge.texture.type,P=m.has(A),D=N.getClearColor(),H=N.getClearAlpha(),U=D.r,B=D.g,se=D.b;P?(_[0]=U,_[1]=B,_[2]=se,_[3]=H,z.clearBufferuiv(z.COLOR,0,_)):(M[0]=U,M[1]=B,M[2]=se,M[3]=H,z.clearBufferiv(z.COLOR,0,M))}else $|=z.COLOR_BUFFER_BIT}k&&($|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),G=T},this.dispose=function(){t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),N.dispose(),Te.dispose(),ce.dispose(),Je.dispose(),je.dispose(),R.dispose(),Me.dispose(),Z.dispose(),Ne.dispose(),Oe.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",$t),we.removeEventListener("sessionend",Dt),nn.stop()};function et(T){T.preventDefault(),Ko("WebGLRenderer: Context Lost."),F=!0}function tt(){Ko("WebGLRenderer: Context Restored."),F=!1;const T=It.autoReset,k=De.enabled,te=De.autoUpdate,$=De.needsUpdate,ee=De.type;lt(),It.autoReset=T,De.enabled=k,De.autoUpdate=te,De.needsUpdate=$,De.type=ee}function _e(T){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xt(T){const k=T.target;k.removeEventListener("dispose",xt),Ot(k)}function Ot(T){tn(T),je.remove(T)}function tn(T){const k=je.get(T).programs;k!==void 0&&(k.forEach(function(te){oe.releaseProgram(te)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,te,$,ee,A){k===null&&(k=ft);const P=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,D=xs(T,k,te,$,ee);be.setMaterial($,P);let H=te.index,U=1;if($.wireframe===!0){if(H=Z.getWireframeAttribute(te),H===void 0)return;U=2}const B=te.drawRange,se=te.attributes.position;let W=B.start*U,V=(B.start+B.count)*U;A!==null&&(W=Math.max(W,A.start*U),V=Math.min(V,(A.start+A.count)*U)),H!==null?(W=Math.max(W,0),V=Math.min(V,H.count)):se!=null&&(W=Math.max(W,0),V=Math.min(V,se.count));const de=V-W;if(de<0||de===1/0)return;Ne.setup(ee,$,D,te,H);let ye,le=ie;if(H!==null&&(ye=S.get(H),le=Re,le.setIndex(ye)),ee.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*bt()),le.setMode(z.LINES)):le.setMode(z.TRIANGLES);else if(ee.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),be.setLineWidth(Ye*bt()),ee.isLineSegments?le.setMode(z.LINES):ee.isLineLoop?le.setMode(z.LINE_LOOP):le.setMode(z.LINE_STRIP)}else ee.isPoints?le.setMode(z.POINTS):ee.isSprite&&le.setMode(z.TRIANGLES);if(ee.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))le.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Ye=ee._multiDrawStarts,j=ee._multiDrawCounts,re=ee._multiDrawCount,Le=H?S.get(H).bytesPerElement:1,ut=je.get($).currentProgram.getUniforms();for(let Ze=0;Ze<re;Ze++)ut.setValue(z,"_gl_DrawID",Ze),le.render(Ye[Ze]/Le,j[Ze])}else if(ee.isInstancedMesh)le.renderInstances(W,de,ee.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,j=Math.min(te.instanceCount,Ye);le.renderInstances(W,de,j)}else le.render(W,de)};function di(T,k,te,$){G!==null&&T.isNodeMaterial&&G.setObject($,T),Pe===!0&&fe.setState(T,te,!1),T.transparent===!0&&T.side===ni&&T.forceSinglePass===!1?(T.side=Un,T.needsUpdate=!0,kn(T,k,$),T.side=ms,T.needsUpdate=!0,kn(T,k,$),T.side=ni):kn(T,k,$)}this.compile=function(T,k,te=null){te===null&&(te=T),G!==null&&G.renderStart(T,k,te),w=ce.get(te),w.init(k),y.push(w),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test(k.layers)&&(w.pushLight(ee),ee.castShadow&&w.pushShadow(ee))}),T!==te&&T.traverseVisible(function(ee){ee.isLight&&ee.layers.test(k.layers)&&(w.pushLight(ee),ee.castShadow&&w.pushShadow(ee))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),Be=this.localClippingEnabled,Pe=fe.init(this.clippingPlanes,Be),Pe===!0&&fe.setGlobalState(this.clippingPlanes,k),G!==null&&De.render(w.state.shadowsArray,te,k);const $=new Set;return T.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const A=ee.material;if(A)if(Array.isArray(A))for(let P=0;P<A.length;P++){const D=A[P];di(D,te,k,ee),$.add(D)}else di(A,te,k,ee),$.add(A)}),w=y.pop(),G!==null&&G.renderEnd(),$},this.compileAsync=function(T,k,te=null){const $=this.compile(T,k,te);return new Promise(ee=>{function A(){if($.forEach(function(P){const H=je.get(P).currentProgram;(H===void 0||H.isReady())&&$.delete(P)}),$.size===0){ee(T);return}setTimeout(A,10)}gt.get("KHR_parallel_shader_compile")!==null?A():setTimeout(A,10)})};let un=null;function On(T){un&&un(T)}function $t(){nn.stop()}function Dt(){nn.start()}const nn=new Vd;nn.setAnimationLoop(On),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(T){un=T,we.setAnimationLoop(T),T===null?nn.stop():nn.start()},we.addEventListener("sessionstart",$t),we.addEventListener("sessionend",Dt),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(T,k);const te=we.enabled===!0&&we.isPresenting===!0,$=O!==null&&(ge===null||te)&&O.begin(C,ge);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(k),k=we.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,k,ge),w=ce.get(T,y.length),w.init(k),w.state.textureUnits=Je.getTextureUnits(),y.push(w),Fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Ae.setFromArrayCamera(k):pe.setFromProjectionMatrix(Fe,Mi,k.reversedDepth),Be=this.localClippingEnabled,Pe=fe.init(this.clippingPlanes,Be),E=Te.get(T,b.length),E.init(),b.push(E),this.info.render.frame++,we.enabled===!0&&we.isPresenting===!0){const P=C.xr.getDepthSensingMesh();P!==null&&fn(P,k,-1/0,C.sortObjects)}fn(T,k,0,C.sortObjects),E.finish(),G!==null&&G.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(He,Et),dt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,dt&&N.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),Pe===!0&&fe.beginShadows();const ee=w.state.shadowsArray;if(De.render(ee,T,k),Pe===!0&&fe.endShadows(),($&&O.hasRenderPass())===!1){const P=E.opaque,D=E.transmissive;if(w.setupLights(),k.isArrayCamera){const H=k.cameras;if(D.length>0)for(let U=0,B=H.length;U<B;U++){const se=H[U];dn(P,D,T,se)}dt&&N.render(T);for(let U=0,B=H.length;U<B;U++){const se=H[U];Is(E,T,se,se.viewport)}}else D.length>0&&dn(P,D,T,k),dt&&N.render(T),Is(E,T,k)}ge!==null&&Y===0&&(Je.updateMultisampleRenderTarget(ge),Je.updateRenderTargetMipmap(ge)),$&&O.end(C),T.isScene===!0&&T.onAfterRender(C,T,k),Ne.resetDefaultState(),J=-1,he=null,y.pop(),y.length>0?(w=y[y.length-1],Je.setTextureUnits(w.state.textureUnits),Pe===!0&&fe.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,G!==null&&G.renderEnd()};function fn(T,k,te,$){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){const P=k.isArrayCamera?Ae:pe;if(!T.frustumCulled||T.intersectsFrustum(P)){$&&Ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);const D=Me.update(T),H=T.material;H.visible&&E.push(T,D,H,te,Ke.z,null,k)}}else if(T.isMesh||T.isLine||T.isPoints){const P=k.isArrayCamera?Ae:pe;if(!T.frustumCulled||T.intersectsFrustum(P)){const D=Me.update(T),H=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ke.copy(T.boundingSphere.center)):(D.boundingSphere===null&&D.computeBoundingSphere(),Ke.copy(D.boundingSphere.center)),Ke.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(H)){const U=D.groups;for(let B=0,se=U.length;B<se;B++){const W=U[B],V=H[W.materialIndex];V&&V.visible&&E.push(T,D,V,te,Ke.z,W,k)}}else H.visible&&E.push(T,D,H,te,Ke.z,null,k)}}}const A=T.children;for(let P=0,D=A.length;P<D;P++)fn(A[P],k,te,$)}function Is(T,k,te,$){const{opaque:ee,transmissive:A,transparent:P}=T;w.setupLightsView(te),Pe===!0&&fe.setGlobalState(C.clippingPlanes,te),$&&be.viewport(Q.copy($)),ee.length>0&&pi(ee,k,te),A.length>0&&pi(A,k,te),P.length>0&&pi(P,k,te),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function dn(T,k,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const W=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new Tn(1,1,{generateMipmaps:!0,type:W?An:Yn,minFilter:Ui,samples:Math.max(4,Lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const A=w.state.transmissionRenderTarget[$.id],P=$.viewport||Q;A.setSize(P.z*C.transmissionResolutionScale,P.w*C.transmissionResolutionScale);const D=C.getRenderTarget(),H=C.getActiveCubeFace(),U=C.getActiveMipmapLevel();C.setRenderTarget(A),C.getClearColor(ue),Ue=C.getClearAlpha(),Ue<1&&C.setClearColor(16777215,.5),C.clear(),dt&&N.render(te);const B=C.toneMapping;C.toneMapping=Yi;const se=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),Pe===!0&&fe.setGlobalState(C.clippingPlanes,$),pi(T,te,$),Je.updateMultisampleRenderTarget(A),Je.updateRenderTargetMipmap(A),gt.has("WEBGL_multisampled_render_to_texture")===!1){let W=!1;for(let V=0,de=k.length;V<de;V++){const ye=k[V],{object:le,geometry:Ye,material:j,group:re}=ye;if(j.side===ni&&le.layers.test($.layers)){const Le=j.side;j.side=Un,j.needsUpdate=!0,Fs(le,te,$,Ye,j,re),j.side=Le,j.needsUpdate=!0,W=!0}}W===!0&&(Je.updateMultisampleRenderTarget(A),Je.updateRenderTargetMipmap(A))}C.setRenderTarget(D,H,U),C.setClearColor(ue,Ue),se!==void 0&&($.viewport=se),C.toneMapping=B}function pi(T,k,te){const $=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,A=T.length;ee<A;ee++){const P=T[ee],{object:D,geometry:H,group:U}=P;let B=P.material;B.allowOverride===!0&&$!==null&&(B=$),D.layers.test(te.layers)&&Fs(D,k,te,H,B,U)}}function Fs(T,k,te,$,ee,A){G!==null&&ee.isNodeMaterial&&G.setObject(T,ee),T.onBeforeRender(C,k,te,$,ee,A),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(C,k,te,$,T,A),ee.transparent===!0&&ee.side===ni&&ee.forceSinglePass===!1?(ee.side=Un,ee.needsUpdate=!0,C.renderBufferDirect(te,k,$,ee,T,A),ee.side=ms,ee.needsUpdate=!0,C.renderBufferDirect(te,k,$,ee,T,A),ee.side=ni):C.renderBufferDirect(te,k,$,ee,T,A),T.onAfterRender(C,k,te,$,ee,A)}function Kt(T){let k=0;for(const te of T)te.texture!==null&&k++;return k}function kn(T,k,te){k.isScene!==!0&&(k=ft);const $=je.get(T),ee=w.state.lights,A=w.state.shadowsArray,P=ee.state.version,D=oe.getParameters(T,ee.state,A,k,te,w.state.lightProbeGridArray),H=oe.getProgramCacheKey(D);let U=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,$.fog=k.fog;const B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=R.get(T.envMap||$.environment,B),$.envMapRotation=$.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,U===void 0&&(T.addEventListener("dispose",xt),U=new Map,$.programs=U,$.programVariants=new Map);let se=U.get(H);if(se!==void 0){if($.currentProgram===se&&$.lightsStateVersion===P)return Cn(T,D),se}else D.uniforms=oe.getUniforms(T),G!==null&&T.isNodeMaterial&&G.build(T,te,D),T.onBeforeCompile(D,C),se=oe.acquireProgram(D,H),U.set(H,se),$.uniforms=D.uniforms;const W=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(W.clippingPlanes=fe.uniform),Cn(T,D),$.needsLights=es(T),$.lightsStateVersion=P,$.needsLights&&(W.ambientLightColor.value=ee.state.ambient,W.lightProbe.value=ee.state.probe,W.sunLights.value=ee.state.sun,W.sunLightShadows.value=ee.state.sunShadow,W.directionalLights.value=ee.state.directional,W.directionalLightShadows.value=ee.state.directionalShadow,W.spotLights.value=ee.state.spot,W.spotLightShadows.value=ee.state.spotShadow,W.rectAreaLights.value=ee.state.rectArea,W.ltc_1.value=ee.state.rectAreaLTC1,W.ltc_2.value=ee.state.rectAreaLTC2,W.pointLights.value=ee.state.point,W.pointLightShadows.value=ee.state.pointShadow,W.hemisphereLights.value=ee.state.hemi,W.sunShadowMatrix.value=ee.state.sunShadowMatrix,W.sunShadowCascade.value=ee.state.sunShadowCascade,W.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,W.spotLightMatrix.value=ee.state.spotLightMatrix,W.spotLightMap.value=ee.state.spotLightMap,W.pointShadowMatrix.value=ee.state.pointShadowMatrix),$.numLightProbeGrids=Kt(w.state.lightProbeGridArray),$.currentProgram=se,$.uniformsList=null,se}function bs(T,k,te,$,ee){const A=je.get(T),P=A.currentProgram.id+","+$+","+ee;let D=A.programVariants.get(P);return D===void 0?(D=kn(T,k,te),A.programVariants.set(P,D)):(A.currentProgram=D,A.uniformsList=null,A.outputColorSpace=$,A.toneMapping=ee),D}function ai(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Bo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Cn(T,k){const te=je.get(T);te.outputColorSpace=k.outputColorSpace,te.batching=k.batching,te.batchingColor=k.batchingColor,te.instancing=k.instancing,te.instancingColor=k.instancingColor,te.instancingMorph=k.instancingMorph,te.skinning=k.skinning,te.morphTargets=k.morphTargets,te.morphNormals=k.morphNormals,te.morphColors=k.morphColors,te.morphTargetsCount=k.morphTargetsCount,te.numClippingPlanes=k.numClippingPlanes,te.numIntersection=k.numClipIntersection,te.vertexAlphas=k.vertexAlphas,te.vertexTangents=k.vertexTangents,te.toneMapping=k.toneMapping}function xs(T,k,te,$,ee){k.isScene!==!0&&(k=ft),Je.resetTextureUnits();const A=k.fog,P=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?k.environment:null,D=ge===null?C.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Pt.workingColorSpace,H=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,U=R.get($.envMap||P,H),B=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,se=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),W=!!te.morphAttributes.position,V=!!te.morphAttributes.normal,de=!!te.morphAttributes.color;let ye=Yi;$.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ye=C.toneMapping);const le=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ye=le!==void 0?le.length:0,j=je.get($),re=w.state.lights;if(Pe===!0&&(Be===!0||T!==he)){const kt=T===he&&$.id===J;fe.setState($,T,kt)}let Le=!1,ut=!1;$.version===j.__version?j.needsLights&&j.lightsStateVersion!==re.state.version||ee.isBatchedMesh&&j.batching===!1||!ee.isBatchedMesh&&j.batching===!0||ee.isBatchedMesh&&j.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&j.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&j.instancing===!1||!ee.isInstancedMesh&&j.instancing===!0||ee.isSkinnedMesh&&j.skinning===!1||!ee.isSkinnedMesh&&j.skinning===!0||ee.isInstancedMesh&&j.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&j.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&j.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&j.instancingMorph===!1&&ee.morphTexture!==null||j.envMap!==U||$.fog===!0&&j.fog!==A||j.numClippingPlanes!==void 0&&(j.numClippingPlanes!==fe.numPlanes||j.numIntersection!==fe.numIntersection)||j.vertexAlphas!==B||j.vertexTangents!==se||j.morphTargets!==W||j.morphNormals!==V||j.morphColors!==de||j.morphTargetsCount!==Ye||j.numLightProbeGrids!==Kt(w.state.lightProbeGridArray)?Le=!0:(j.outputColorSpace!==D||j.toneMapping!==ye)&&(ut=!0):(Le=!0,j.__version=$.version);let Ze=j.currentProgram;(Le===!0||ut===!0)&&(Ze=ut===!0?bs($,k,ee,D,ye):kn($,k,ee),G&&$.isNodeMaterial&&G.onUpdateProgram($,Ze,j));let wt=!1,jt=!1,Zt=!1;const at=Ze.getUniforms(),Xe=j.uniforms;if(be.useProgram(Ze.program)&&(wt=!0,jt=!0,Zt=!0),$.id!==J&&(J=$.id,jt=!0),wt||he!==T){be.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),at.setValue(z,"projectionMatrix",T.projectionMatrix),at.setValue(z,"viewMatrix",T.matrixWorldInverse);const an=at.map.cameraPosition;an!==void 0&&an.setValue(z,st.setFromMatrixPosition(T.matrixWorld)),Lt.logarithmicDepthBuffer&&at.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&at.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),he!==T&&(he=T,jt=!0,Zt=!0)}if(j.needsLights&&(re.state.sunShadowMap.length>0&&at.setValue(z,"sunShadowMap",re.state.sunShadowMap,Je),re.state.directionalShadowMap.length>0&&at.setValue(z,"directionalShadowMap",re.state.directionalShadowMap,Je),re.state.spotShadowMap.length>0&&at.setValue(z,"spotShadowMap",re.state.spotShadowMap,Je),re.state.pointShadowMap.length>0&&at.setValue(z,"pointShadowMap",re.state.pointShadowMap,Je)),ee.isSkinnedMesh){at.setOptional(z,ee,"bindMatrix"),at.setOptional(z,ee,"bindMatrixInverse");const kt=ee.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),at.setValue(z,"boneTexture",kt.boneTexture,Je))}ee.isBatchedMesh&&(at.setOptional(z,ee,"batchingTexture"),at.setValue(z,"batchingTexture",ee._matricesTexture,Je),at.setOptional(z,ee,"batchingIdTexture"),at.setValue(z,"batchingIdTexture",ee._indirectTexture,Je),at.setOptional(z,ee,"batchingColorTexture"),ee._colorsTexture!==null&&at.setValue(z,"batchingColorTexture",ee._colorsTexture,Je));const sn=te.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&ae.update(ee,te,Ze),(jt||j.receiveShadow!==ee.receiveShadow)&&(j.receiveShadow=ee.receiveShadow,at.setValue(z,"receiveShadow",ee.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&k.environment!==null&&(Xe.envMapIntensity.value=k.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=j_()),jt){if(at.setValue(z,"toneMappingExposure",C.toneMappingExposure),j.needsLights&&Qi(Xe,Zt),A&&$.fog===!0&&Se.refreshFogUniforms(Xe,A),Se.refreshMaterialUniforms(Xe,$,me,qe,w.state.transmissionRenderTarget[T.id]),j.needsLights&&j.numLightProbeGrids>0){const kt=x;let an=0;for(const mi of w.state.lightProbeGridArray)mi.texture!==null&&(kt.textures[an]=mi.texture,kt.min[an]=mi.boundingBox.min,kt.max[an]=mi.boundingBox.max,kt.resolution[an]=mi.resolution,an++);for(const mi in kt)kt[mi].length=an;Xe.probesSH.value=kt.textures,Xe.probesMin.value=kt.min,Xe.probesMax.value=kt.max,Xe.probesResolution.value=kt.resolution}Bo.upload(z,ai(j),Xe,Je)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Bo.upload(z,ai(j),Xe,Je),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&at.setValue(z,"center",ee.center),at.setValue(z,"modelViewMatrix",ee.modelViewMatrix),at.setValue(z,"normalMatrix",ee.normalMatrix),at.setValue(z,"modelMatrix",ee.matrixWorld),$.uniformsGroups!==void 0){const kt=$.uniformsGroups;for(let an=0,mi=kt.length;an<mi;an++){const wa=kt[an];Oe.update(wa,Ze),Oe.bind(wa,Ze)}}return Ze}function Qi(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function es(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ge},this.setRenderTargetTextures=function(T,k,te){const $=je.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),je.get(T.texture).__webglTexture=k,je.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:te,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const te=je.get(T);te.__webglFramebuffer=k,te.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,te=0){ge=T,ne=k,Y=te;let $=null,ee=!1,A=!1;if(T){const D=je.get(T);if(D.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(z.FRAMEBUFFER,D.__webglFramebuffer),Q.copy(T.viewport),Ee.copy(T.scissor),Ve=T.scissorTest,be.viewport(Q),be.scissor(Ee),be.setScissorTest(Ve),J=-1;return}else if(D.__webglFramebuffer===void 0)Je.setupRenderTarget(T);else if(D.__hasExternalTextures)Je.rebindTextures(T,je.get(T.texture).__webglTexture,je.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const B=T.depthTexture;if(D.__boundDepthTexture!==B){if(B!==null&&je.has(B)&&(T.width!==B.image.width||T.height!==B.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(T)}}const H=T.texture;(H.isData3DTexture||H.isDataArrayTexture||H.isCompressedArrayTexture)&&(A=!0);const U=je.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(U[k])?$=U[k][te]:$=U[k],ee=!0):T.samples>0&&Je.useMultisampledRTT(T)===!1?$=je.get(T).__webglMultisampledFramebuffer:Array.isArray(U)?$=U[te]:$=U,Q.copy(T.viewport),Ee.copy(T.scissor),Ve=T.scissorTest}else Q.copy(ze).multiplyScalar(me).floor(),Ee.copy(ot).multiplyScalar(me).floor(),Ve=ct;if(te!==0&&($=q),be.bindFramebuffer(z.FRAMEBUFFER,$)&&be.drawBuffers(T,$),be.viewport(Q),be.scissor(Ee),be.setScissorTest(Ve),ee){const D=je.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,D.__webglTexture,te)}else if(A){const D=k;for(let H=0;H<T.textures.length;H++){const U=je.get(T.textures[H]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+H,U.__webglTexture,te,D)}}else if(T!==null&&te!==0){const D=je.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,D.__webglTexture,te)}J=-1};function ht(T){const k=je.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=Lt.textureFormatReadable(T.format),k.__typeReadable=Lt.textureTypeReadable(T.type)),k}this.readRenderTargetPixels=function(T,k,te,$,ee,A,P,D=0){if(!(T&&T.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let H=je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&P!==void 0&&(H=H[P],Array.isArray(H)&&(H=H[0])),H){be.bindFramebuffer(z.FRAMEBUFFER,H);try{const U=T.textures[D],B=U.format,se=U.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+D);const W=ht(U);if(W.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(W.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-$&&te>=0&&te<=T.height-ee&&z.readPixels(k,te,$,ee,ve.convert(B),ve.convert(se),A)}finally{const U=ge!==null?je.get(ge).__webglFramebuffer:null;be.bindFramebuffer(z.FRAMEBUFFER,U)}}},this.readRenderTargetPixelsAsync=async function(T,k,te,$,ee,A,P,D=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let H=je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&P!==void 0&&(H=H[P],Array.isArray(H)&&(H=H[0])),H)if(k>=0&&k<=T.width-$&&te>=0&&te<=T.height-ee){be.bindFramebuffer(z.FRAMEBUFFER,H);const U=T.textures[D],B=U.format,se=U.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+D);const W=ht(U);if(W.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(W.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const V=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,V),z.bufferData(z.PIXEL_PACK_BUFFER,A.byteLength,z.STREAM_READ),z.readPixels(k,te,$,ee,ve.convert(B),ve.convert(se),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const de=ge!==null?je.get(ge).__webglFramebuffer:null;be.bindFramebuffer(z.FRAMEBUFFER,de);const ye=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await jp(z,ye,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,V),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,A),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(V),z.deleteSync(ye),A}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,te=0){const $=Math.pow(2,-te),ee=Math.floor(T.image.width*$),A=Math.floor(T.image.height*$),P=k!==null?k.x:0,D=k!==null?k.y:0;Je.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,P,D,ee,A),be.unbindTexture()},this.copyTextureToTexture=function(T,k,te=null,$=null,ee=0,A=0){let P,D,H,U,B,se,W,V,de;const ye=T.isCompressedTexture?T.mipmaps[A]:T.image;if(te!==null)P=te.max.x-te.min.x,D=te.max.y-te.min.y,H=te.isBox3?te.max.z-te.min.z:1,U=te.min.x,B=te.min.y,se=te.isBox3?te.min.z:0;else{const at=Math.pow(2,-ee);P=Math.floor(ye.width*at),D=Math.floor(ye.height*at),T.isDataArrayTexture?H=ye.depth:T.isData3DTexture?H=Math.floor(ye.depth*at):H=1,U=0,B=0,se=0}$!==null?(W=$.x,V=$.y,de=$.z):(W=0,V=0,de=0);const le=ve.convert(k.format),Ye=ve.convert(k.type);let j;k.isData3DTexture?(Je.setTexture3D(k,0),j=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Je.setTexture2DArray(k,0),j=z.TEXTURE_2D_ARRAY):(Je.setTexture2D(k,0),j=z.TEXTURE_2D),be.activeTexture(z.TEXTURE0),be.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),be.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),be.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const re=be.getParameter(z.UNPACK_ROW_LENGTH),Le=be.getParameter(z.UNPACK_IMAGE_HEIGHT),ut=be.getParameter(z.UNPACK_SKIP_PIXELS),Ze=be.getParameter(z.UNPACK_SKIP_ROWS),wt=be.getParameter(z.UNPACK_SKIP_IMAGES);be.pixelStorei(z.UNPACK_ROW_LENGTH,ye.width),be.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye.height),be.pixelStorei(z.UNPACK_SKIP_PIXELS,U),be.pixelStorei(z.UNPACK_SKIP_ROWS,B),be.pixelStorei(z.UNPACK_SKIP_IMAGES,se);const jt=T.isDataArrayTexture||T.isData3DTexture,Zt=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const at=je.get(T),Xe=je.get(k),sn=je.get(at.__renderTarget),kt=je.get(Xe.__renderTarget);be.bindFramebuffer(z.READ_FRAMEBUFFER,sn.__webglFramebuffer),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let an=0;an<H;an++)jt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.get(T).__webglTexture,ee,se+an),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.get(k).__webglTexture,A,de+an)),z.blitFramebuffer(U,B,U+P,B+D,W,V,W+P,V+D,z.DEPTH_BUFFER_BIT,z.NEAREST);be.bindFramebuffer(z.READ_FRAMEBUFFER,null),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ee!==0||T.isRenderTargetTexture||je.has(T)){const at=je.get(T),Xe=je.get(k);be.bindFramebuffer(z.READ_FRAMEBUFFER,I),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,X);for(let sn=0;sn<H;sn++)jt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,at.__webglTexture,ee,se+sn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,at.__webglTexture,ee),Zt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.__webglTexture,A,de+sn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xe.__webglTexture,A),ee!==0?z.blitFramebuffer(U,B,U+P,B+D,W,V,W+P,V+D,z.COLOR_BUFFER_BIT,z.NEAREST):Zt?z.copyTexSubImage3D(j,A,W,V,de+sn,U,B,P,D):z.copyTexSubImage2D(j,A,W,V,U,B,P,D);be.bindFramebuffer(z.READ_FRAMEBUFFER,null),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Zt?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(j,A,W,V,de,P,D,H,le,Ye,ye.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(j,A,W,V,de,P,D,H,le,ye.data):z.texSubImage3D(j,A,W,V,de,P,D,H,le,Ye,ye):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,A,W,V,P,D,le,Ye,ye.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,A,W,V,ye.width,ye.height,le,ye.data):z.texSubImage2D(z.TEXTURE_2D,A,W,V,P,D,le,Ye,ye);be.pixelStorei(z.UNPACK_ROW_LENGTH,re),be.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Le),be.pixelStorei(z.UNPACK_SKIP_PIXELS,ut),be.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),be.pixelStorei(z.UNPACK_SKIP_IMAGES,wt),A===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&z.generateMipmap(j),be.unbindTexture()},this.initRenderTarget=function(T){je.get(T).__webglFramebuffer===void 0&&Je.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Je.setTextureCube(T,0):T.isData3DTexture?Je.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Je.setTexture2DArray(T,0):Je.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){ne=0,Y=0,ge=null,be.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}function kf(a,e){if(e===Up)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===jl||e===hd){let t=a.getIndex();if(t===null){const s=[],r=a.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===jl)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function Y_(a){const e=new Map,t=new Map,n=a.clone();return Qd(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Qd(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)Qd(a.children[n],e.children[n],t)}class Z_ extends ya{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new Bf(t,Ct.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bf(t,Ct.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gM(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=or.extractUrlBase(e);r=or.resolveURL(l,this.path)}else r=or.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new zd(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ep){try{r[Ct.KHR_BINARY_GLTF]=new vM(e)}catch(u){i&&i(u);return}s=JSON.parse(r[Ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new PM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Ct.KHR_MATERIALS_UNLIT:r[u]=new eM;break;case Ct.KHR_DRACO_MESH_COMPRESSION:r[u]=new bM(s,this.dracoLoader);break;case Ct.KHR_TEXTURE_TRANSFORM:r[u]=new xM;break;case Ct.KHR_MESH_QUANTIZATION:r[u]=new _M;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function $_(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function en(a,e,t){const n=a.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Q_{constructor(e){this.parser=e,this.name=Ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new it(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],si);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new nh(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ac(h),l.distance=u;break;case"spot":l=new ko(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class eM{constructor(){this.name=Ct.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,n){const i=[];e.color=new it(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],si),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Mn))}return Promise.all(i)}}class tM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class nM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(s,s)}return Promise.all(i)}}class iM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class sM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class aM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class rM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_SHEEN}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],si)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class oM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class cM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_VOLUME}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(s[0],s[1],s[2],si),Promise.all(i)}}class lM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_IOR}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class hM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(s[0],s[1],s[2],si),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mn)),Promise.all(i)}}class uM{constructor(e){this.parser=e,this.name=Ct.EXT_MATERIALS_BUMP}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class fM{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return en(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class dM{constructor(e){this.parser=e,this.name=Ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class pM{constructor(e){this.parser=e,this.name=Ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class mM{constructor(e){this.parser=e,this.name=Ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class Bf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):r.ready.then(function(){const d=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class gM{constructor(e){this.name=Ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ci.TRIANGLES&&l.mode!==ci.TRIANGLE_STRIP&&l.mode!==ci.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const g of u){const v=new Qe,p=new L,m=new Rn,_=new L(1,1,1),M=new Cs(g.geometry,g.material,f);for(let E=0;E<f;E++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&_.fromBufferAttribute(c.SCALE,E),M.setMatrixAt(E,v.compose(p,m,_));let x=null;for(const E in c)if(E==="_COLOR_0"){const w=c[E];M.instanceColor=new jo(w.array,w.itemSize,w.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(x===null){const b=M.geometry;x=new hn,x.name=b.name;for(const y in b.attributes)x.setAttribute(y,b.attributes[y]);for(const y in b.morphAttributes)x.morphAttributes[y]=b.morphAttributes[y];b.index!==null&&x.setIndex(b.index),x.morphTargetsRelative=b.morphTargetsRelative;for(const y of b.groups)x.addGroup(y.start,y.count,y.materialIndex);b.boundingBox!==null&&(x.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(x.boundingSphere=b.boundingSphere.clone()),x.drawRange.start=b.drawRange.start,x.drawRange.count=b.drawRange.count,x.userData=Object.assign({},b.userData),M.geometry=x}const w=c[E];x.setAttribute(E,new jo(w.array,w.itemSize,w.normalized))}Yt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const ep="glTF",qa=12,zf={JSON:1313821514,BIN:5130562};class vM{constructor(e){this.name=Ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-qa,s=new DataView(e,qa);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===zf.JSON){const l=new Uint8Array(e,qa+r,o);this.content=n.decode(l)}else if(c===zf.BIN){const l=qa+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const u=oh[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=oh[h]||h.toLowerCase();if(r[h]!==void 0){const f=n.accessors[e.attributes[h]],d=da[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const g in d.attributes){const v=d.attributes[g],p=c[g];p!==void 0&&(v.normalized=p)}u(d)},o,l,si,f)})})}}class xM{constructor(){this.name=Ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class _M{constructor(){this.name=Ct.KHR_MESH_QUANTIZATION}}class tp extends _a{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,v=g-l,p=-2*d+3*f,m=d-f,_=1-p,M=m-f+u;for(let x=0;x!==o;x++){const E=r[v+x+o],w=r[v+x+c]*h,b=r[g+x+o],y=r[g+x]*h;s[x]=_*E+M*w+p*b+m*y}return s}}const MM=new Rn;class SM extends tp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return MM.fromArray(s).normalize().toArray(s),s}}const ci={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},da={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gf={9728:on,9729:Sn,9984:id,9985:Lo,9986:Za,9987:Ui},Vf={33071:Fi,33648:Ho,10497:Si},nl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yM={CUBICSPLINE:void 0,LINEAR:fr,STEP:ur},il={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function TM(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new mn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ms})),a.DefaultMaterial}function Es(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Di(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wM(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;c.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function EM(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function AM(a){let e;const t=a.extensions&&a.extensions[Ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sl(t.attributes):e=a.indices+":"+sl(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+sl(a.targets[n]);return e}function sl(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function ch(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function RM(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const CM=new Qe;class PM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?(this.textureLoader=new z0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new q0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zd(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Es(s,o,i),Di(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(or.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=nl[i.type],o=da[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new yn(l,r,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],c=nl[i.type],l=da[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,p;if(d&&d!==u){const m=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let M=t.cache.get(_);M||(v=new l(o,m*d,i.count*d/h),M=new Em(v,d/h),t.cache.add(_,M)),p=new Ih(M,c,f%d/h,g)}else o===null?v=new l(i.count*c):v=new l(o,f,i.count*c),p=new yn(v,c,g);if(i.sparse!==void 0){const m=nl.SCALAR,_=da[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,E=new _(r[1],M,i.sparse.count*m),w=new l(r[2],x,i.sparse.count*c);o!==null&&(p=new yn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let b=0,y=E.length;b<y;b++){const O=E[b];if(p.setX(O,w[b*c]),c>=2&&p.setY(O,w[b*c+1]),c>=3&&p.setZ(O,w[b*c+2]),c>=4&&p.setW(O,w[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(s.samplers||{})[r.sampler]||{};return h.magFilter=Gf[f.magFilter]||Sn,h.minFilter=Gf[f.minFilter]||Ui,h.wrapS=Vf[f.wrapS]||Si,h.wrapT=Vf[f.wrapT]||Si,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==on&&h.minFilter!==Sn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const r=i.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&r.bufferView!==void 0)h=n.getDependency("bufferView",r.bufferView).then(function(f){return new Promise(function(d,g){t.parse(f,d,g)})});else{if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(f){l=!0;const d=new Blob([f],{type:r.mimeType});return c=o.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(d,g){let v=d;t.isImageBitmapLoader===!0&&(v=function(p){const m=new vn(p);m.needsUpdate=!0,d(m)}),t.load(or.resolveURL(f,s.path),v,void 0,g)})})}const u=h.then(function(f){return l===!0&&o.revokeObjectURL(c),Di(f,r),f.userData.mimeType=r.mimeType||RM(r.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Ct.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(r);r=s.extensions[Ct.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Zo,ui.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Td,ui.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return mn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},c=s.extensions||{},l=[];if(c[Ct.KHR_MATERIALS_UNLIT]){const u=i[Ct.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new it(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],si),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Mn)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=ni);const h=s.alphaMode||il.OPAQUE;if(h===il.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===il.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==ii&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ie(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==ii&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==ii){const u=s.emissiveFactor;o.emissive=new it().setRGB(u[0],u[1],u[2],si)}return s.emissiveTexture!==void 0&&r!==ii&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Mn)),Promise.all(l).then(function(){const u=new r(o);return s.name&&(u.name=s.name),Di(u,s),t.associations.set(u,{materials:e}),s.extensions&&Es(i,u,s),u})}createUniqueName(e){const t=Wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Hf(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=AM(l),u=i[h];if(u)r.push(u.promise);else{let f;l.extensions&&l.extensions[Ct.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Hf(new hn,l,t),l.mode===ci.TRIANGLE_STRIP?f=f.then(d=>kf(d,hd)):l.mode===ci.TRIANGLE_FAN&&(f=f.then(d=>kf(d,jl))),i[h]={primitive:l,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?TM(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const v=h[d],p=r[d];let m;const _=l[d];if(p.mode===ci.TRIANGLES||p.mode===ci.TRIANGLE_STRIP||p.mode===ci.TRIANGLE_FAN||p.mode===void 0){const M=s.isSkinnedMesh===!0,x=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");M&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=M&&x?new Lm(v,_):new At(v,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===ci.LINES)m=new Um(v,_);else if(p.mode===ci.LINE_STRIP)m=new Oh(v,_);else if(p.mode===ci.LINE_LOOP)m=new Om(v,_);else if(p.mode===ci.POINTS)m=new Oo(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&EM(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Di(m,s),p.extensions&&Es(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&Es(i,u[0],s),u[0];const f=new rn;s.extensions&&Es(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jn(yt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Er(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){o.push(u);const f=new Qe;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Fh(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],g=i.samplers[d.sampler],v=d.target,p=v.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(r.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(v))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let M=0,x=f.length;M<x;M++){const E=f[M],w=d[M],b=g[M],y=v[M],O=p[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const C=n._createAnimationTracks(E,w,b,y,O);if(C)for(let F=0;F<C.length;F++)m.push(C[F])}const _=new N0(s,void 0,m);return Di(_,i),_})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,CM)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){const d=h.userData.pivot,g=u[0];h.pivot=new L().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new yd:l.length>1?h=new rn:l.length===1?h=l[0]:h=new Yt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=r),Di(h,s),s.extensions&&Es(n,h,s),s.matrix!==void 0){const u=new Qe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new rn;n.name&&(s.name=i.createUniqueName(n.name)),Di(s,n),n.extensions&&Es(t,s,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){const f=c[h];f.parent!==null?s.add(Y_(f)):s.add(f)}const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof ui||f instanceof vn)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],o=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}os[s.path]===os.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(os[s.path]){case os.weights:h=_r;break;case os.rotation:h=Mr;break;case os.translation:case os.scale:h=Qo;break;default:n.itemSize===1?h=_r:h=Qo;break}const u=i.interpolation!==void 0?yM[i.interpolation]:fr,f=this._getArrayFromAccessor(n);for(let d=0,g=c.length;d<g;d++){const v=new h(c[d]+"."+os[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),r.push(v)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ch(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Mr?SM:tp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function DM(a,e,t){const n=e.attributes,i=new fi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const h=ch(da[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const v=ch(da[f.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new ki;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function Hf(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(const r in n){const o=oh[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return Pt.workingColorSpace!==si&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Pt.workingColorSpace}" not supported.`),Di(a,e),DM(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wM(a,e.targets,t):a})}var LM=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(i,{}).then(function(m){s=m.instance,s.exports.__wasm_call_ctors()});function o(m){for(var _=new Uint8Array(m.length),M=0;M<m.length;++M){var x=m.charCodeAt(M);_[M]=x>96?x-97:x>64?x-39:x+4}for(var E=0,M=0;M<m.length;++M)_[E++]=_[M]<60?n[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,E)}function c(m,_,M,x,E,w,b){var y=m.exports.sbrk,O=x+3&-4,C=y(O*E),F=y(w.length),G=new Uint8Array(m.exports.memory.buffer);G.set(w,F);var q=_(C,x,E,F,w.length);if(q==0&&b&&b(C,O,E),M.set(G.subarray(C,C+x*E)),y(C-y(0)),q!=0)throw new Error("Malformed buffer data: "+q)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(m){var _={object:new Worker(m),pending:0,requests:{}};return _.object.onmessage=function(M){var x=M.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(m){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+p.name+";"+c.toString()+p.toString(),M=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(M),E=u.length;E<m;++E)u[E]=d(x);for(var E=m;E<u.length;++E)u[E].object.postMessage({});u.length=m,URL.revokeObjectURL(x)}function v(m,_,M,x,E){for(var w=u[0],b=1;b<u.length;++b)u[b].pending<w.pending&&(w=u[b]);return new Promise(function(y,O){var C=new Uint8Array(M),F=++f;w.pending+=m,w.requests[F]={resolve:y,reject:O},w.object.postMessage({id:F,count:m,size:_,source:C,mode:x,filter:E},[C.buffer])})}function p(m){var _=m.data;self.ready.then(function(M){if(!_.id)return self.close();try{var x=new Uint8Array(_.count*_.size);c(M,M.exports[_.mode],x,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(E){self.postMessage({id:_.id,count:_.count,action:"reject",value:E})}})}return{ready:r,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,_,M,x,E){c(s,s.exports.meshopt_decodeVertexBuffer,m,_,M,x,s.exports[l[E]])},decodeIndexBuffer:function(m,_,M,x){c(s,s.exports.meshopt_decodeIndexBuffer,m,_,M,x)},decodeIndexSequence:function(m,_,M,x){c(s,s.exports.meshopt_decodeIndexSequence,m,_,M,x)},decodeGltfBuffer:function(m,_,M,x,E,w){c(s,s.exports[h[E]],m,_,M,x,s.exports[l[w]])},decodeGltfBufferAsync:function(m,_,M,x,E){return u.length>0?v(m,_,M,h[x],l[E]):r.then(function(){var w=new Uint8Array(m*_);return c(s,s.exports[h[x]],w,m,_,M,s.exports[l[E]]),w})}}})();class NM extends _d{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new ln;e.deleteAttribute("uv");const t=new mn({side:Un}),n=new mn,i=new ac(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new At(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const r=new Cs(e,n,6),o=new Yt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);const c=new At(e,sa(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new At(e,sa(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new At(e,sa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new At(e,sa(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new At(e,sa(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new At(e,sa(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function sa(a){return new M0({color:0,emissive:16777215,emissiveIntensity:a})}class cc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const IM=new Er(-1,1,1,-1,0,1);class FM extends hn{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}}const UM=new FM;class lc{constructor(e){this._mesh=new At(UM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const xo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qe},cameraProjectionMatrixInverse:{value:new Qe},cameraWorldMatrix:{value:new Qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},_o={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},al={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function OM(a=5){const e=Math.floor(a)%2===0?Math.floor(a)+1:Math.floor(a),t=kM(e),n=t.length,i=new Uint8Array(n*4);for(let r=0;r<n;++r){const o=t[r],c=2*Math.PI*o/n,l=new L(Math.cos(c),Math.sin(c),0).normalize();i[r*4]=(l.x*.5+.5)*255,i[r*4+1]=(l.y*.5+.5)*255,i[r*4+2]=127,i[r*4+3]=255}const s=new wr(i,e,e);return s.wrapS=Si,s.wrapT=Si,s.needsUpdate=!0,s}function kM(a){const e=Math.floor(a)%2===0?Math.floor(a)+1:Math.floor(a),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),s=e-1;for(let r=1;r<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=r++;s++,i--}return n}const Mo={defines:{SAMPLES:16,SAMPLE_VECTORS:np(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ie},cameraProjectionMatrixInverse:{value:new Qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function np(a,e,t){const n=BM(a,e,t);let i="vec3[SAMPLES](";for(let s=0;s<a;s++){const r=n[s];i+=`vec3(${r.x}, ${r.y}, ${r.z})${s<a-1?",":")"}`}return i}function BM(a,e,t){const n=[];for(let i=0;i<a;i++){const s=2*Math.PI*e*i/a,r=Math.pow(i/(a-1),t);n.push(new L(Math.cos(s),Math.sin(s),r))}return n}const rl={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class zM{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,s;const r=.5*(Math.sqrt(3)-1),o=(e+t)*r,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,f=c-u,d=l-u,g=e-f,v=t-d;let p,m;g>v?(p=1,m=0):(p=0,m=1);const _=g-p+h,M=v-m+h,x=g-1+2*h,E=v-1+2*h,w=c&255,b=l&255,y=this.perm[w+this.perm[b]]%12,O=this.perm[w+p+this.perm[b+m]]%12,C=this.perm[w+1+this.perm[b+1]]%12;let F=.5-g*g-v*v;F<0?n=0:(F*=F,n=F*F*this._dot(this.grad3[y],g,v));let G=.5-_*_-M*M;G<0?i=0:(G*=G,i=G*G*this._dot(this.grad3[O],_,M));let q=.5-x*x-E*E;return q<0?s=0:(q*=q,s=q*q*this._dot(this.grad3[C],x,E)),70*(n+i+s)}noise3d(e,t,n){let i,s,r,o;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),f=Math.floor(n+l),d=1/6,g=(h+u+f)*d,v=h-g,p=u-g,m=f-g,_=e-v,M=t-p,x=n-m;let E,w,b,y,O,C;_>=M?M>=x?(E=1,w=0,b=0,y=1,O=1,C=0):_>=x?(E=1,w=0,b=0,y=1,O=0,C=1):(E=0,w=0,b=1,y=1,O=0,C=1):M<x?(E=0,w=0,b=1,y=0,O=1,C=1):_<x?(E=0,w=1,b=0,y=0,O=1,C=1):(E=0,w=1,b=0,y=1,O=1,C=0);const F=_-E+d,G=M-w+d,q=x-b+d,I=_-y+2*d,X=M-O+2*d,ne=x-C+2*d,Y=_-1+3*d,ge=M-1+3*d,J=x-1+3*d,he=h&255,Q=u&255,Ee=f&255,Ve=this.perm[he+this.perm[Q+this.perm[Ee]]]%12,ue=this.perm[he+E+this.perm[Q+w+this.perm[Ee+b]]]%12,Ue=this.perm[he+y+this.perm[Q+O+this.perm[Ee+C]]]%12,ke=this.perm[he+1+this.perm[Q+1+this.perm[Ee+1]]]%12;let qe=.6-_*_-M*M-x*x;qe<0?i=0:(qe*=qe,i=qe*qe*this._dot3(this.grad3[Ve],_,M,x));let me=.6-F*F-G*G-q*q;me<0?s=0:(me*=me,s=me*me*this._dot3(this.grad3[ue],F,G,q));let He=.6-I*I-X*X-ne*ne;He<0?r=0:(He*=He,r=He*He*this._dot3(this.grad3[Ue],I,X,ne));let Et=.6-Y*Y-ge*ge-J*J;return Et<0?o=0:(Et*=Et,o=Et*Et*this._dot3(this.grad3[ke],Y,ge,J)),32*(i+s+r+o)}noise4d(e,t,n,i){const s=this.grad4,r=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,f,d,g;const v=(e+t+n+i)*c,p=Math.floor(e+v),m=Math.floor(t+v),_=Math.floor(n+v),M=Math.floor(i+v),x=(p+m+_+M)*l,E=p-x,w=m-x,b=_-x,y=M-x,O=e-E,C=t-w,F=n-b,G=i-y,q=O>C?32:0,I=O>F?16:0,X=C>F?8:0,ne=O>G?4:0,Y=C>G?2:0,ge=F>G?1:0,J=q+I+X+ne+Y+ge,he=r[J][0]>=3?1:0,Q=r[J][1]>=3?1:0,Ee=r[J][2]>=3?1:0,Ve=r[J][3]>=3?1:0,ue=r[J][0]>=2?1:0,Ue=r[J][1]>=2?1:0,ke=r[J][2]>=2?1:0,qe=r[J][3]>=2?1:0,me=r[J][0]>=1?1:0,He=r[J][1]>=1?1:0,Et=r[J][2]>=1?1:0,ze=r[J][3]>=1?1:0,ot=O-he+l,ct=C-Q+l,pe=F-Ee+l,Ae=G-Ve+l,Pe=O-ue+2*l,Be=C-Ue+2*l,Fe=F-ke+2*l,st=G-qe+2*l,Ke=O-me+3*l,ft=C-He+3*l,dt=F-Et+3*l,bt=G-ze+3*l,z=O-1+4*l,Ht=C-1+4*l,gt=F-1+4*l,Lt=G-1+4*l,be=p&255,It=m&255,je=_&255,Je=M&255,R=o[be+o[It+o[je+o[Je]]]]%32,S=o[be+he+o[It+Q+o[je+Ee+o[Je+Ve]]]]%32,Z=o[be+ue+o[It+Ue+o[je+ke+o[Je+qe]]]]%32,Me=o[be+me+o[It+He+o[je+Et+o[Je+ze]]]]%32,oe=o[be+1+o[It+1+o[je+1+o[Je+1]]]]%32;let Se=.6-O*O-C*C-F*F-G*G;Se<0?h=0:(Se*=Se,h=Se*Se*this._dot4(s[R],O,C,F,G));let Te=.6-ot*ot-ct*ct-pe*pe-Ae*Ae;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(s[S],ot,ct,pe,Ae));let ce=.6-Pe*Pe-Be*Be-Fe*Fe-st*st;ce<0?f=0:(ce*=ce,f=ce*ce*this._dot4(s[Z],Pe,Be,Fe,st));let fe=.6-Ke*Ke-ft*ft-dt*dt-bt*bt;fe<0?d=0:(fe*=fe,d=fe*fe*this._dot4(s[Me],Ke,ft,dt,bt));let De=.6-z*z-Ht*Ht-gt*gt-Lt*Lt;return De<0?g=0:(De*=De,g=De*De*this._dot4(s[oe],z,Ht,gt,Lt)),27*(h+u+f+d+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}}class Li extends cc{constructor(e,t,n=512,i=512,s,r,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=OM(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Tn(this.width,this.height,{type:An,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new gn({defines:Object.assign({},xo.defines),uniforms:Rs.clone(xo.uniforms),vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,blending:jn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new _0,this.normalMaterial.blending=jn,this.pdMaterial=new gn({defines:Object.assign({},Mo.defines),uniforms:Rs.clone(Mo.uniforms),vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new gn({defines:Object.assign({},_o.defines),uniforms:Rs.clone(_o.uniforms),vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader,blending:jn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new gn({uniforms:Rs.clone(rl.uniforms),vertexShader:rl.vertexShader,fragmentShader:rl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:hl,blendDst:Ya,blendEquation:Ii,blendSrcAlpha:ll,blendDstAlpha:Ya,blendEquationAlpha:Ii}),this.blendMaterial=new gn({uniforms:Rs.clone(al.uniforms),vertexShader:al.vertexShader,fragmentShader:al.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Qf,blendSrc:hl,blendDst:Ya,blendEquation:Ii,blendSrcAlpha:ll,blendDstAlpha:Ya,blendEquationAlpha:Ii}),this._fsQuad=new lc(null),this._originalClearColor=new it,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){const i=new vs;i.format=ji,i.type=Ps,this.normalRenderTarget=new Tn(this.width,this.height,{minFilter:on,magFilter:on,type:An,depthTexture:i})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}const n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=np(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Li.OUTPUT.Off:break;case Li.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Li.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Li.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Li.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Li.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Li.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,s){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_renderOverride(e,t,n,i,s){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new zM,n=e*e*4,i=new Uint8Array(n);for(let r=0;r<e;r++)for(let o=0;o<e;o++){const c=r,l=o;i[(r*e+o)*4]=(t.noise(c,l)*.5+.5)*255,i[(r*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(r*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(r*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const s=new wr(i,e,e,hi,Yn);return s.wrapS=Si,s.wrapT=Si,s.needsUpdate=!0,s}}Li.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const So={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class GM extends cc{constructor(){super(),this.isOutputPass=!0,this.uniforms=Rs.clone(So.uniforms),this.material=new Od({name:So.name,uniforms:this.uniforms,vertexShader:So.vertexShader,fragmentShader:So.fragmentShader}),this._fsQuad=new lc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===Vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_h?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function VM(){const t=new Float32Array(32768);for(let c=0;c<32;c++)for(let l=0;l<32;l++)for(let h=0;h<32;h++){const u=Math.sin(h*127.1+l*311.7+c*74.7)*43758.5453;t[h+l*32+c*32*32]=u-Math.floor(u)}const n=128,i=new Uint8Array(n*n*n),s=Array.from({length:4},(c,l)=>{const h=l/4;return h*h*(3-2*h)}),r=(c,l,h)=>c+(l-c)*h;for(let c=0;c<n;c++){const l=c/4|0,h=s[c%4],u=l*32*32,f=(l+1)%32*32*32;for(let d=0;d<n;d++){const g=d/4|0,v=s[d%4],p=g*32,m=(g+1)%32*32;for(let _=0;_<n;_++){const M=_/4|0,x=s[_%4],E=(M+1)%32,w=r(r(r(t[M+p+u],t[E+p+u],x),r(t[M+m+u],t[E+m+u],x),v),r(r(t[M+p+f],t[E+p+f],x),r(t[M+m+f],t[E+m+f],x),v),h);i[_+d*n+c*n*n]=Math.round(w*255)}}}const o=new bd(i,n,n,n);return o.format=nc,o.minFilter=o.magFilter=Sn,o.wrapS=o.wrapT=o.wrapR=Si,o.unpackAlignment=1,o.needsUpdate=!0,o}const qh=VM();{const a=rt.lights_fragment_begin,e=a.indexOf("		directionalLight = directionalLights[ i ];"),t="RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",n=a.indexOf(t,e)+t.length;if(e<0||n<t.length)throw new Error("lights_fragment_begin: the directional loop moved");rt.lights_fragment_begin=`#ifndef SUN_SKIP
#define SUN_SKIP 1
#endif
`+a.slice(0,e)+`#if UNROLLED_LOOP_INDEX != SUN_SKIP
`+a.slice(e,n)+`
#endif`+a.slice(n)}const ip={SUN_SKIP:"0"},ps={x:{value:new qt(0,0,1,0)},sun:{value:new qt(0,1,0,0)},glass:{value:new qt(-1e3,1e3,-1e3,1e3)}};rt.lights_pars_begin+=`
uniform vec4 coverX, coverSun;
float coverLight( vec3 viewPos ) {
  if ( coverX.w < 0.5 ) return 1.0;
  // the world from the view: the view matrix is a turn and a move, so its inverse is its transpose
  vec3 w = transpose( mat3( viewMatrix ) ) * ( viewPos - viewMatrix[ 3 ].xyz );
  float t = ( coverSun.w - w.y ) / max( coverSun.y, 0.05 );
  if ( t < 0.0 ) return 1.0;
  float hx = w.x + coverSun.x * t;
  return 1.0 - smoothstep( coverX.x - coverX.z, coverX.x + coverX.z, hx ) * ( 1.0 - smoothstep( coverX.y - coverX.z, coverX.y + coverX.z, hx ) );
}
`;{const a=rt.lights_fragment_begin,e=a.indexOf("directionalLight = directionalLights[ i ];"),t=a.indexOf("RE_Direct(",e);if(e<0||t<0)throw new Error("lights_fragment_begin: the directional loop moved");rt.lights_fragment_begin=a.slice(0,t)+`directLight.color *= coverLight( geometryPosition );
		`+a.slice(t)}function HM(a,e=[]){const t=new Set,n=[...e];a.traverse(i=>{const s=i.material;s&&n.push(...Array.isArray(s)?s:[s])});for(const i of n){if(t.has(i)||!i.isMeshStandardMaterial)continue;t.add(i);const s=i.onBeforeCompile;i.onBeforeCompile=(r,o)=>{s.call(i,r,o),r.uniforms.coverX=ps.x,r.uniforms.coverSun=ps.sun},i.needsUpdate=!0}}{const a=rt.lights_fragment_begin,e="#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )";if(!a.includes(e))throw new Error("lights_fragment_begin: the point light loop moved");rt.lights_fragment_begin=a.replace(e,e+" && !defined( NO_POINT )")}const WM=new Set(["shroud","inner"]),qM=`
uniform highp sampler3D gNoiseTex;
float gNoise(vec3 p) { return texture(gNoiseTex, p / 32.0).r; }
float gFbm(vec3 p) { return gNoise(p) * 0.55 + gNoise(p * 2.7 + 3.1) * 0.3 + gNoise(p * 7.3 + 1.7) * 0.15; }
// three's bump, under another name so it does not clash when a material has a bump map of its own
vec3 gPerturb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection) {
  vec3 vSigmaX = normalize(dFdx(surf_pos.xyz));
  vec3 vSigmaY = normalize(dFdy(surf_pos.xyz));
  vec3 R1 = cross(vSigmaY, surf_norm);
  vec3 R2 = cross(surf_norm, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDirection;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}
`,ca={value:1},XM=`
      #ifdef USE_ROUGHNESSMAP
        vec3 gOrm = texture2D( roughnessMap, vRoughnessMapUv ).rgb;
      #else
        vec3 gOrm = vec3( 1.0, 0.5, 0.3 );
        #ifdef USE_COLOR
          gOrm.r = vColor.r;
        #endif
      #endif
      float gShade = ( 1.0 - gOrm.r ) * uShade;
      vec3 P = vGrit;
      float gPx = length( fwidth( P ) );
      // The paint is clean, on the whole, and what dirt there is is small: that is the look. (It was big: soft
      // patches of grime, streaks, flecks a centimetre or two across all over it, long scratches.) What is left:
      // the dark where the light does not get, from the baked shade; a thin broken line of worn paint right on a
      // panel's edge, nibbled into here and there; and in the middle of a panel pinpricks, a few nicks and a few
      // hairlines, in drifts, where it has been knocked.
      float gFine = 1.0 - smoothstep( 0.0025, 0.008, gPx );   // gone before it is finer than the pixels
      float gMid = 1.0 - smoothstep( 0.008, 0.03, gPx );
      float gWorn = smoothstep( 0.4, 0.66, gFbm( P * 2.6 + 31.0 ) );   // where it has been knocked about
      // grime: in the corners, and a little of it running down from there; soot along the seams
      float gRun = smoothstep( 0.45, 0.8, gFbm( vec3( P.x * 22.0, P.y * 1.1, P.z * 22.0 ) + 3.0 ) );
      float gSeam = gOrm.b * ( 0.3 + 0.7 * gFbm( P * 11.0 + 23.0 ) );
      float gSmudge = smoothstep( 0.5, 0.76, gFbm( P * 5.5 + 41.0 ) ) * gWorn;   // a little, where hands and hoses have been
      gGrime = clamp( gShade * 0.85 + gRun * ( 0.09 + 0.36 * gShade ) + 0.32 * gSeam + 0.14 * gSmudge, 0.0, 1.0 );
      diffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * vec3( 0.34, 0.31, 0.28 ), gGrime );
      diffuseColor.rgb *= 1.0 + 0.05 * ( gFbm( P * 1.7 + 17.0 ) - 0.5 );
      // pinpricks, a couple of millimetres, and a few nicks of a centimetre
      // (few in the clean middle of a panel, more where it is worn, most near its edges: fewer of them, not fainter)
      float gMany = clamp( 0.17 + 0.55 * gWorn * gWorn + 0.8 * smoothstep( 0.15, 0.65, gOrm.b ), 0.0, 1.0 );
      float gAt = mix( 0.91, 0.8, gMany );
      float gSpeck = smoothstep( gAt, gAt + 0.04, gNoise( P * 560.0 + 7.0 ) ) * gFine;
      float gNick = smoothstep( 0.86, 0.885, gNoise( P * 100.0 + 2.0 ) * 0.78 + gNoise( P * 370.0 ) * 0.22 ) * gWorn * gMid;
      // hairlines, a hand long, two ways, few
      float gScr = smoothstep( 0.825, 0.865, gNoise( vec3( dot( P, vec3( 0.62, 0.74, 0.26 ) ) * 12.0, dot( P, vec3( -0.74, 0.66, -0.12 ) ) * 1100.0, dot( P, vec3( -0.26, -0.12, 0.96 ) ) * 12.0 ) ) );
      gScr = max( gScr, smoothstep( 0.835, 0.875, gNoise( vec3( dot( P, vec3( 0.3, -0.5, 0.81 ) ) * 1000.0, dot( P, vec3( 0.9, 0.4, -0.1 ) ) * 10.0, dot( P, vec3( -0.3, 0.77, 0.56 ) ) * 10.0 ) + 9.0 ) ) );
      gScr *= gWorn * ( 1.0 - smoothstep( 0.0015, 0.005, gPx ) );
      // the edge: a line of paint worn through right on it, fine and broken, more in some stretches than others,
      // and small bites out of the paint beside it
      float gWhere = smoothstep( 0.32, 0.6, gFbm( P * 4.3 + 51.0 ) );
      float gRag = gFbm( P * 75.0 ) * 0.5 + gNoise( P * 280.0 + 5.0 ) * 0.5;
      float gLine = smoothstep( 0.66, 0.78, gOrm.b + ( gRag - 0.5 ) * 0.46 ) * ( 0.5 + 0.5 * gWhere );
      float gBite = smoothstep( 0.77, 0.83, gOrm.b * 0.6 + gNoise( P * 85.0 + 9.0 ) * 0.42 + gNoise( P * 300.0 + 1.0 ) * 0.12 ) * gWhere;
      gChip = max( gLine, gBite ) * gMid;
      diffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * 0.5, gScr * 0.6 );
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.1, 0.095, 0.09 ), max( gSpeck * 0.85, gNick ) );
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.075, 0.072, 0.07 ), gChip );`,cs=a=>a.toFixed(4);function Hn(a,e){return e.ribs&&(a.defines={...a.defines,USE_UV:""}),a.onBeforeCompile=t=>{t.uniforms.gNoiseTex={value:qh},t.vertexShader=`varying vec3 vGrit;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 gritAt = vec4(position, 1.0);
      #ifdef USE_INSTANCING
        gritAt = modelMatrix * instanceMatrix * gritAt;
      #endif
      vGrit = gritAt.xyz;`),t.uniforms.uShade=ca;let n=`varying vec3 vGrit;
uniform float uShade;
float gGrime = 0.0, gChip = 0.0;
`+qM+t.fragmentShader;n=n.replace("#include <color_fragment>",`#include <color_fragment>
      #ifdef USE_COLOR
        diffuseColor.rgb *= mix( 1.0 / max( vColor.r, 0.05 ), 1.0, uShade ); // (the baked shade on the vertices, off)
      #endif
      diffuseColor.rgb *= 1.0 + ${cs(e.tint)} * (gFbm(vGrit * ${cs(e.scale*.35)} + 11.0) - 0.5) * 2.0;${e.paint?XM:""}${e.wear?`
      // flaked off: big patches where it has worn, and fine pits all over
      if (gFbm(vGrit * ${cs(e.scale*.12)} + 5.0) * 0.75 + gNoise(vGrit * ${cs(e.scale*2.5)}) * 0.25 < ${cs(e.wear)}) discard;${e.scratch?`
      // scratched through: noise stretched far along one way and squeezed across it, cut where it crosses its middle,
      // makes long hairlines; two such, a little apart in angle, and only some of each (another noise says where)
      {
        vec3 sp = vGrit * 30.0;
        float s1 = gNoise(vec3(dot(sp, vec3(0.8, 0.5, 0.33)) * 0.6, dot(sp, vec3(-0.5, 0.8, 0.2)) * 22.0, sp.z * 0.6));
        float s2 = gNoise(vec3(dot(sp, vec3(0.4, -0.9, 0.2)) * 0.6 + 7.0, dot(sp, vec3(0.9, 0.4, -0.1)) * 18.0, sp.z * 0.6 + 3.0));
        float where1 = step(0.48, gNoise(sp * 0.25 + 2.0)), where2 = step(0.58, gNoise(sp * 0.3 + 9.0));
        if (abs(s1 - 0.5) < 0.022 * where1 || abs(s2 - 0.5) < 0.018 * where2) discard;
      }`:""}`:""}`),n=n.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      roughnessFactor = clamp(roughnessFactor * mix(${cs(e.rough[0])}, ${cs(e.rough[1])}, smoothstep(0.25, 0.75, gFbm(vGrit * ${cs(e.scale)}))), 0.04, 1.0);
      roughnessFactor = mix( min( roughnessFactor + 0.3 * gGrime, 1.0 ), 0.34, gChip );`),e.paint&&(n=n.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
      metalnessFactor = gChip; // (the map's blue is the edge mask, not metal: bare metal only where the paint has chipped)`)),e.ribs&&(n=n.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          // ribs: their slope, the same however near they are, gone where they get finer than the pixels
          float w = max(fwidth(vUv.y), 1e-4);
          float h = 0.1 * (0.5 - 0.5 * cos(6.2831853 * vUv.y)) * (1.0 - smoothstep(0.2, 0.6, w));
          normal = gPerturb(-vViewPosition, normal, vec2(dFdx(h), dFdy(h)) / w * 0.35, faceDirection);
        }`)),t.fragmentShader=n},a.customProgramCacheKey=()=>`grit:${e.scale}:${e.rough}:${e.tint}:${!!e.ribs}:${e.wear??0}:${!!e.paint}:${!!e.scratch}`,a.needsUpdate=!0,a}function oi(a,e){return new Zn({name:a.name,color:a.color,map:a.map,roughness:a.roughness,roughnessMap:a.roughnessMap,metalness:a.metalness,metalnessMap:a.metalnessMap,normalMap:a.normalMap,emissive:a.emissive,emissiveMap:a.emissiveMap,emissiveIntensity:a.emissiveIntensity,side:a.side,...e})}const lh=Hn(new Zn({name:"hose",color:394759,roughness:.74,metalness:0,sheen:.18,sheenRoughness:.6,sheenColor:1842722}),{scale:6,rough:[.9,1.15],tint:.06}),KM=Hn(new mn({color:1974050,metalness:1,roughness:.36}),{scale:30,rough:[.75,1.35],tint:.06});function Wf(a){return Hn(a,{scale:.7,rough:[.75,1.3],tint:.3})}const hh=[],uh=Hn(new Zn({name:"paint_plain",color:14079697,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.45}),{scale:40,rough:[.85,1.15],tint:.03,paint:!0});uh.defines={...uh.defines,...ip,NO_POINT:""};const fh=new Map;function jM(a){const e=new Map,t=i=>{switch(i.name.replace(/[._]\d+$/,"")){case"paint":return Hn(oi(i,{clearcoat:.3,clearcoatRoughness:.45}),{scale:40,rough:[.85,1.15],tint:.03,paint:!0});case"mech":return Hn(oi(i,{color:2830132,metalness:.85,roughness:.4}),{scale:9,rough:[.65,1.4],tint:.14});case"core":return Hn(oi(i,{color:1382170,metalness:.65,roughness:.55}),{scale:7,rough:[.7,1.4],tint:.18});case"steel":return Hn(oi(i,{color:1842464,metalness:1,roughness:.38}),{scale:25,rough:[.75,1.35],tint:.06});case"bolt":return Hn(oi(i,{color:6975091,metalness:1,roughness:.4}),{scale:60,rough:[.7,1.5],tint:.18});case"brass":return Hn(oi(i,{color:3421754,roughness:.46,metalness:1}),{scale:20,rough:[.7,1.5],tint:.14});case"panel":return Hn(oi(i,{color:3224632,metalness:0,roughness:.55,specularIntensity:.6}),{scale:14,rough:[.8,1.25],tint:.08});case"block":return Hn(oi(i,{color:12434870,metalness:0,roughness:.42,clearcoat:.15,clearcoatRoughness:.5}),{scale:12,rough:[.8,1.3],tint:.06});case"dark":return Hn(oi(i,{color:987153,metalness:0,roughness:.72}),{scale:10,rough:[.85,1.15],tint:.1});case"shroud":return oi(i,{metalness:0,roughness:.85,sheen:1,sheenRoughness:.7,sheenColor:9076848});case"ink":return Hn(oi(i,{color:723981,metalness:0,roughness:.62}),{scale:30,rough:[.85,1.2],tint:.15,wear:.27});case"decal":return Hn(oi(i,{color:723981,metalness:0,roughness:.62}),{scale:30,rough:[.85,1.2],tint:.2,wear:.36,scratch:!0});case"hose":return lh;default:return i}};a.traverse(i=>{const s=i;if(!s.isMesh)return;const r=o=>{if(!o.isMeshStandardMaterial)return o;if(!e.has(o)){const c=t(o),l=o.name.replace(/[._]\d+$/,"");if(fh.set(l,c),l==="frost"){const h=c;h.emissive=new it(16718346),h.emissiveIntensity=0,hh.push({material:h,gain:.25})}c!==lh&&(c.defines={...c.defines,...ip}),WM.has(o.name.replace(/[._]\d+$/,""))||(c.defines={...c.defines,NO_POINT:""}),e.set(o,c)}return e.get(o)};s.material=Array.isArray(s.material)?s.material.map(r):r(s.material),/^(detail_(steel|mech)_|door_frame)/.test(s.name)&&(s.material=uh)});const n=new Set;a.traverse(i=>{const s=i,r=s.isMesh?s.geometry.getAttribute("color"):void 0;if(r){if(!s.geometry.userData.lifted){for(let o=0;o<r.count;o++){const c=.3+.7*r.getX(o);r.setXYZ(o,c,c,c)}r.needsUpdate=!0,s.geometry.userData.lifted=!0}for(const o of Array.isArray(s.material)?s.material:[s.material])n.add(o)}});for(const i of n)i.vertexColors=!0,i.needsUpdate=!0}function qf(a){return a.getAttribute("color")||a.setAttribute("color",new yn(new Float32Array(a.getAttribute("position").count*3).fill(1),3)),a}function JM(a){const e=new L(0,1,0),t=new L,n=new L,i=new L,s=new Rn,r=new Qe,o=(u,f,d,g,v)=>{const p=u.userData.at;if(!p?.length||!d)return;const m=Math.floor(p.length/g),_=new Cs(f,d,m);for(let M=0;M<m;M++){const x=M*g;t.set(p[x],p[x+1],p[x+2]),n.set(p[x+3],p[x+4],p[x+5]).normalize(),s.setFromUnitVectors(e,n);const E=v(p,x);_.setMatrixAt(M,r.compose(t,s,i.set(E,1,E)))}_.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere(),_.name=u.name,u.add(_)},c=qf(new Wn(.0042,.0042,.005,6).translate(0,5e-4,0)),l=qf(new Wn(1,1,.06,6)),h=[];a.traverse(u=>{/^(bolts_|collars_hoses)/.test(u.name)&&u.userData.at&&h.push(u)});for(const u of h)u.name.startsWith("bolts_")?o(u,c,fh.get("bolt"),6,()=>1):o(u,l,fh.get("steel"),7,(f,d)=>f[d+6])}class YM extends cc{constructor(e,t,n,i,s){super(),this.camera=e,this.sun=t,this.podSun=n,this.depth=i,this.fans=s.fans;const r=s.fans;this.march=new gn({defines:{STEPS:s.steps??24,FANS:r.list.length,SIDES:r.side.length,BLADES:r.blades.toFixed(1),FAN_R:r.radius.toFixed(2),HUB:r.hub.toFixed(2)},uniforms:{tDepth:{value:null},tShadow:{value:null},tPod:{value:null},podMatrix:{value:new Qe},podZone:{value:new Ie},tNoise:{value:qh},shadowMatrix:{value:new Qe},projInv:{value:new Qe},camWorld:{value:new Qe},camPos:{value:new L},sunDir:{value:new L},sunColor:{value:new it},boxMin:{value:s.box.min},boxMax:{value:s.box.max},roof:{value:s.roof},density:{value:s.density},fade:{value:.025},smoke:{value:.8},top:{value:16},topFade:{value:.18},time:{value:0},fans:{value:r.list.map(()=>new L)},fanDir:{value:r.dir},wallZ:{value:r.wallZ},sides:{value:r.side.map(()=>new L)},wallX:{value:r.wallX},sideScale:{value:r.sideScale},coverX:ps.x,iris:{value:new Ie(1,1)},coverSun:ps.sun,coverGlass:ps.glass,fan:{value:3},fanFade:{value:.078}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        precision highp sampler2DShadow;
        uniform sampler2D tDepth;
        uniform sampler2DShadow tShadow, tPod;
        uniform highp sampler3D tNoise;
        uniform mat4 shadowMatrix, podMatrix, projInv, camWorld;
        uniform vec3 camPos, sunDir, sunColor, boxMin, boxMax;
        uniform vec2 podZone;
        uniform float roof, density, fade, smoke, top, topFade, time;
        uniform vec3 fans[FANS]; // the centre's x and y, and how far round the blades are
        uniform vec3 fanDir;
        #if SIDES > 0
        uniform vec3 sides[SIDES]; // in the sun's wall: z and y of the centre, how far round
        #endif
        uniform float wallZ, wallX, sideScale, fan, fanFade;
        uniform vec4 coverX, coverSun; // the roof's shutter (hall.ts, materials.ts)
        uniform vec4 coverGlass; // where the roof is glass: along x, along z
        uniform vec2 iris; // the fans' leaf shutters, the end wall's and the sun's wall's: 1 open, 0 shut
        // through the leaf shutter: inside the five-sided opening its blades' inner edges make (as hall.ts lays them)
        float leaf(vec2 o, float s) {
          if (s > 0.999) return 1.0;
          float a = s * (FAN_R + 0.3) - 0.08, turn = (1.0 - s) * 0.3, m = -1e9;
          for (int k = 0; k < 5; k++) { float an = turn + float(k) * 1.2566371; m = max(m, dot(o, vec2(cos(an), sin(an)))); }
          return smoothstep(a + 0.05, a - 0.05, m);
        }
        float cover(vec3 p) {
          float t = (coverSun.w - p.y) / max(coverSun.y, 0.05);
          if (t < 0.0) return 1.0;
          float hx = p.x + coverSun.x * t;
          // past the glass the roof is deck, out to the walls: no sun comes down through it. (The sun's map lets
          // specks of it by, and the shutter, which once lay over all of the roof when shut and hid them, stops
          // at the glass's end now: the dark under the roof was dotted with them.) What crosses the roof's
          // height outside the wall came in through the wall, and is let be
          if ((hx > coverGlass.y + 1.0 && hx < wallX) || hx < coverGlass.x - 1.0) return 0.0;
          // (and at the hall's two ends the same, along z: the specks were over the end wall's fans too)
          float hz = p.z + coverSun.z * t;
          if (hx < wallX && (hz < coverGlass.z - 1.0 || hz > coverGlass.w + 1.0)) return 0.0;
          if (coverX.w < 0.5) return 1.0;
          // (in the air its edge is not the half metre it is on the steel: the light comes on over 8 m behind it. As
          // it starts to roll back, the first slit lets in a sheet of light a hand thick, thinner than a step of
          // this march, and the air under the roof was dots where a step happened to land in it. Now a thin
          // sheet is a faint one, and it is full by the time it is thick enough to be met at every step)
          return 1.0 - smoothstep(coverX.x - coverX.z, coverX.x + coverX.z, hx) * (1.0 - smoothstep(coverX.y, coverX.y + 8.0, hx));
        }
        varying vec2 vUv;
        // how open a fan is at o from its centre, in the wall's plane: shut outside the drum and on the hub, by the
        // blades (broad at the tip, pitched, so a little narrower seen down the axis) and the three struts behind
        float vent(vec2 o, float turn) {
          float r = length(o);
          float a = atan(o.y, o.x);
          const float SEC = 6.2831853 / BLADES;
          float ab = abs(mod(a - turn + 0.5 * SEC, SEC) - 0.5 * SEC) * r;
          float w = mix(0.5, 1.3, clamp((r - HUB) / (FAN_R - 0.25 - HUB), 0.0, 1.0)) * 0.866;
          float open = smoothstep(w - 0.12, w + 0.12, ab);
          float as = abs(mod(a - 1.5707963 + 1.0471976, 2.0943951) - 1.0471976) * r;
          open *= smoothstep(0.08, 0.3, as);
          return open * smoothstep(FAN_R + 0.15, FAN_R - 0.1, r) * smoothstep(HUB - 0.1, HUB + 0.15, r);
        }
        // a fixed dither per pixel, so the steps do not show as bands; the blur after takes it out
        float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
        // smoke and dust: big slow billows and finer wisps, drifting sideways and rising a little
        float air(vec3 p) {
          // (value noise, tiling, from a 3D texture: one fetch an octave instead of eight hashes)
          vec3 q = p * 0.06 + vec3(time * 0.012, -time * 0.006, time * 0.008);
          float n = texture(tNoise, q / 32.0).r * 0.62 + texture(tNoise, (q * 2.9 + vec3(4.1, time * 0.03, 1.3)) / 32.0).r * 0.38;
          return mix(1.0, smoothstep(0.28, 0.78, n) * 2.0, smoke);
        }
        void main() {
          float d = texture2D(tDepth, vUv).x;
          vec4 v = projInv * vec4(vUv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
          vec3 wp = (camWorld * vec4(v.xyz / v.w, 1.0)).xyz;
          vec3 rd = wp - camPos;
          float far = length(rd);
          rd /= far;
          // only inside the hall: clip the ray to its box
          vec3 inv = 1.0 / rd;
          vec3 t0 = (boxMin - camPos) * inv, t1 = (boxMax - camPos) * inv;
          float tin = max(max(min(t0.x, t1.x), min(t0.y, t1.y)), max(min(t0.z, t1.z), 0.0));
          float tout = min(min(max(t0.x, t1.x), max(t0.y, t1.y)), max(t0.z, t1.z));
          tout = min(tout, far);
          if (tout <= tin) { gl_FragColor = vec4(0.0); return; }
          // forward scattering: brighter looking into the light
          float mu = dot(rd, -sunDir);
          float g = 0.6;
          float hg = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * mu, 1.5);
          float phase = 0.25 + 0.75 * hg / 4.0;
          float dt = (tout - tin) / float(STEPS);
          float j = ign(gl_FragCoord.xy);
          float sum = 0.0;
          float fsum = 0.0;
          // (the same for the light through the fans, looking into it brighter)
          float fmu = dot(rd, -fanDir);
          float fphase = 0.25 + 0.75 * (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * fmu, 1.5) / 4.0;
          for (int i = 0; i < STEPS; i++) {
            float t = tin + (float(i) + j) * dt;
            vec3 p = camPos + rd * t;
            vec4 s = shadowMatrix * vec4(p, 1.0);
            float lit = texture(tShadow, vec3(s.xy, s.z - 0.0008)) * cover(p);
            // the fans in the sun's wall: the map has the round holes, not the blades turning in them. Back up the
            // sun's light to the wall, and if it came in through a fan, how open it is there
            // And the small windows in that wall, a metre wide: their shafts are thinner than a step of this
            // march, which met each one or missed it by the dither, and they came out as rows of dots across the
            // dark (plain to see with the roof shut). What came in through the wall and not through a fan is left
            // out of the air; it still falls on the steel.
            if (p.x < wallX) {
              vec3 q = p - sunDir * ((p.x - wallX) / sunDir.x);
              bool fanned = false;
              #if SIDES > 0
              for (int k = 0; k < SIDES; k++) {
                vec2 o = vec2(q.z - sides[k].x, q.y - sides[k].y) / sideScale; // (bigger: the same fan, scaled)
                if (dot(o, o) < (FAN_R + 0.3) * (FAN_R + 0.3)) { lit *= vent(o, sides[k].z) * leaf(o, iris.y); fanned = true; }
              }
              #endif
              if (!fanned && q.y < roof) lit = 0.0;
            }
            // the hall's map has only the steel in it: the pod and its cables, from the pod's own sun. But only what
            // stands near the pod along the light: that map has the steel too, sharp to the millimetre, where the
            // hall's blurs the thin bars away, and the air in its column would come out darker than round it.
            // So: shadowed if the first thing the pod's sun meets is past the start of the pod's stretch of the light
            // (zs) and before the point, or the end of that stretch, whichever comes first (1 - ze)
            vec4 ps = podMatrix * vec4(p, 1.0);
            if (all(greaterThan(ps.xyz, vec3(0.0))) && all(lessThan(ps.xyz, vec3(1.0)))) {
              float zs = texture(tPod, vec3(ps.xy, podZone.x));
              float ze = texture(tPod, vec3(ps.xy, min(ps.z, podZone.y) - 0.0005));
              lit *= 1.0 - zs * (1.0 - ze);
            }
            // used up on the way down: the further below the roof along the light, the less is left
            float down = max(roof - p.y, 0.0) / max(-sunDir.y, 0.2);
            lit *= exp(-fade * down) + top * exp(-topFade * down);
            // the air thicker up where the light is, and less of it gets back to the eye from far
            float h = 0.55 + 0.45 * smoothstep(-30.0, roof, p.y);
            float w = h * air(p) * exp(-0.012 * t) * dt;
            sum += lit * w;
            // the fans: back along their light to the wall, and how open the fan is where it gets there
            float dz = p.z - wallZ;
            vec2 q = p.xy - fanDir.xy * (dz / fanDir.z);
            // (only where the light could be: the fans all sit at one height, so a band of the wall)
            if (dz > 0.0 && abs(q.y - fans[0].y) < FAN_R + 0.3) {
              float open = 0.0;
              // (the blades' pattern goes soft with the way from the wall, as light through a fan does, and by 45 m it
              // is the round of the fan at what the blades let by. Far from the wall the slices of light between
              // the blades were thinner than a step of this march, and left specks in the dark where one was met)
              float soft = smoothstep(12.0, 45.0, dz);
              for (int k = 0; k < FANS; k++) {
                vec2 o = q - fans[k].xy;
                float r = length(o);
                float round_ = 0.5 * smoothstep(FAN_R + 0.15 + 2.0 * soft, FAN_R - 0.1 - 2.0 * soft, r) * smoothstep(HUB - 0.1 - soft, HUB + 0.15 + soft, r);
                open += mix(vent(o, fans[k].z), round_, soft) * leaf(o, iris.x);
              }
              fsum += open * exp(-fanFade * dz) * w;
            }
          }
          gl_FragColor = vec4(sunColor * (sum * phase + fsum * fan * fphase) * density, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.blend=new gn({uniforms:{tDiffuse:{value:null},tRays:{value:null},texel:{value:new Ie},intensity:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse, tRays;
        uniform vec2 texel;
        uniform float intensity;
        varying vec2 vUv;
        void main() {
          vec3 r = vec3(0.0);
          float w = 0.0;
          for (int x = -2; x <= 2; x++) for (int y = -2; y <= 2; y++) {
            float k = exp(-float(x * x + y * y) / 3.0);
            r += texture2D(tRays, vUv + vec2(x, y) * texel).rgb * k;
            w += k;
          }
          gl_FragColor = texture2D(tDiffuse, vUv);
          gl_FragColor.rgb += r / w * intensity;
        }`,depthTest:!1,depthWrite:!1})}camera;sun;podSun;depth;intensity=1;fade=.025;smoke=.8;top=16;topFade=.18;fan=3;fanFade=.078;half=new Tn(1,1,{type:An});march;blend;quad=new lc;fans;set steps(e){this.march.defines.STEPS=e,this.march.needsUpdate=!0}get steps(){return this.march.defines.STEPS}setSize(e,t){this.half.setSize(Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))),this.blend.uniforms.texel.value.set(1/this.half.width,1/this.half.height)}render(e,t,n){const i=this.march.uniforms,s=this.sun.shadow.map?.depthTexture??null,r=this.depth(),o=!!s&&!!r&&this.intensity>0;if(o){i.tDepth.value=r,i.tShadow.value=s,i.shadowMatrix.value.copy(this.sun.shadow.matrix);const c=this.podSun.shadow.map?.depthTexture??null;i.tPod.value=c??s,i.podMatrix.value.copy(this.podSun.shadow.matrix),c||i.podMatrix.value.makeScale(0,0,0);const l=this.podSun.shadow.camera,h=this.podSun.position.distanceTo(this.podSun.target.position);i.podZone.value.set((h-4-l.near)/(l.far-l.near),(h+3-l.near)/(l.far-l.near)),i.projInv.value.copy(this.camera.projectionMatrixInverse),i.camWorld.value.copy(this.camera.matrixWorld),i.camPos.value.setFromMatrixPosition(this.camera.matrixWorld),i.sunDir.value.subVectors(this.sun.target.position,this.sun.position).normalize(),i.sunColor.value.copy(this.sun.color),i.fade.value=this.fade,i.smoke.value=this.smoke,i.top.value=this.top,i.topFade.value=this.topFade,this.fans.list.forEach((u,f)=>i.fans.value[f].set(u.at.x,u.at.y,u.angle)),this.fans.side.forEach((u,f)=>i.sides.value[f].set(u.at.z,u.at.y,u.angle)),i.fan.value=this.fan,i.iris.value.set(this.fans.shutter.end,this.fans.shutter.side),i.fanFade.value=this.fanFade,i.time.value=performance.now()/1e3,e.setRenderTarget(this.half),this.quad.material=this.march,this.quad.render(e)}this.blend.uniforms.tDiffuse.value=n.texture,this.blend.uniforms.tRays.value=this.half.texture,this.blend.uniforms.intensity.value=o?this.intensity:0,e.setRenderTarget(this.renderToScreen?null:t),this.quad.material=this.blend,this.quad.render(e)}dispose(){this.half.dispose(),this.march.dispose(),this.blend.dispose(),this.quad.dispose()}}class ZM{constructor(e,t){this.renderer=e,this.scene=t,this.target=new Tn(1,1,{type:An,samples:4,depthTexture:this.depth})}renderer;scene;depth=new vs(1,1);target;a=new Tn(1,1,{type:An});b=new Tn(1,1,{type:An});passes=[];setSize(e,t){const n=this.renderer.getPixelRatio(),i=Math.floor(e*n),s=Math.floor(t*n);for(const r of[this.target,this.a,this.b])r.setSize(i,s);for(const r of this.passes)r.setSize(i,s)}insert(e,t){this.passes.splice(t,0,e),this.passes.forEach((n,i)=>n.renderToScreen=i===this.passes.length-1),e.setSize(this.target.width,this.target.height)}render(e){const t=this.renderer;t.setRenderTarget(this.target),t.render(this.scene,e);let n=this.target,i=this.a;const s=this.passes.filter(r=>r.enabled);s.forEach((r,o)=>{r.renderToScreen=o===s.length-1,r.render(t,i,n,0,!1),r.needsSwap&&(n=i,i=i===this.a?this.b:this.a)})}}class $M extends cc{constructor(e,t){super(),this.camera=e,this.depth=t;const n=28,i="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",s=`
      #include <packing>
      uniform sampler2D tDepth;
      uniform float near, far, focus, maxR;
      float zAt(vec2 uv) { return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far); }
      float cocOf(float z) { return clamp(2.6 * abs(1.0 / focus - 1.0 / z) - 0.05, 0.0, 1.0) * maxR; }
    `,r=()=>({tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:100},focus:{value:5},maxR:{value:0}});this.blur=new gn({uniforms:{...r(),px:{value:new Ie},grow:{value:1}},vertexShader:i,fragmentShader:`
        uniform sampler2D tColor;
        uniform vec2 px;
        uniform float grow;
        varying vec2 vUv;
        ${s}
        void main() {
          float zc = zAt(vUv);
          float cc = cocOf(zc);
          vec3 acc = texture2D(tColor, vUv).rgb;
          float tot = 1.0, r = 1.0, a = 0.0;
          for (int i = 0; i < ${n}; i++) {
            a += 2.39996323;
            vec2 uv = vUv + vec2(cos(a), sin(a)) * r * px;
            float zs = zAt(uv);
            float cs = cocOf(zs);
            if (zs > zc) cs = min(cs, cc * 2.0); // what is behind does not smear over what is sharp in front
            float m = smoothstep(r - 0.5, r + 0.5, cs);
            acc += mix(acc / tot, texture2D(tColor, uv).rgb, m);
            tot += 1.0;
            r += grow / r;
          }
          gl_FragColor = vec4(acc / tot, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.blur.taps=n,this.mix=new gn({uniforms:{...r(),tBlur:{value:null}},vertexShader:i,fragmentShader:`
        uniform sampler2D tColor, tBlur;
        varying vec2 vUv;
        ${s}
        void main() {
          float k = smoothstep(0.3, 1.6, cocOf(zAt(vUv)));
          gl_FragColor = vec4(mix(texture2D(tColor, vUv).rgb, texture2D(tBlur, vUv).rgb, k), 1.0);
        }`,depthTest:!1,depthWrite:!1})}camera;depth;focus=5;amount=0;half=new Tn(1,1,{type:An});blur;mix;quad=new lc;tall=1;setSize(e,t){const n=Math.max(1,Math.ceil(e/2)),i=Math.max(1,Math.ceil(t/2));this.half.setSize(n,i),this.blur.uniforms.px.value.set(1/n,1/i),this.tall=i}render(e,t,n){const i=this.depth(),s=Math.max(2,.011*this.tall),r=i?s*this.amount:0;this.blur.uniforms.grow.value=(s*s-1)/(2*this.blur.taps);for(const o of[this.blur,this.mix]){const c=o.uniforms;c.tColor.value=n.texture,c.tDepth.value=i,c.near.value=this.camera.near,c.far.value=this.camera.far,c.focus.value=this.focus,c.maxR.value=r}e.setRenderTarget(this.half),this.quad.material=this.blur,this.quad.render(e),this.mix.uniforms.tBlur.value=this.half.texture,e.setRenderTarget(this.renderToScreen?null:t),this.quad.material=this.mix,this.quad.render(e)}dispose(){this.half.dispose(),this.blur.dispose(),this.mix.dispose(),this.quad.dispose()}}const En=40,zo=3,As=(En-1)*zo+1,Gn=16,QM=9.8,eS=14,Ki=new L,aa=new L,xi=new L,Ri=new L,yo=new L;class tS{constructor(e,t,n,i,s){this.socket=e,this.plug=t,this.radius=n,t.getWorldPosition(aa),this.seg=e.distanceTo(aa)*i/(En-1);for(let l=0;l<En;l++){const h=l/(En-1);Ki.lerpVectors(e,aa,h),Ki.toArray(this.p,l*3),Ki.toArray(this.q,l*3)}const r=new hn;this.positions=new yn(new Float32Array(As*Gn*3),3),this.normals=new yn(new Float32Array(As*Gn*3),3),r.setAttribute("position",this.positions),r.setAttribute("normal",this.normals),r.setAttribute("color",new yn(new Float32Array(As*Gn*3).fill(1),3));const o=new Float32Array(As*Gn*2);for(let l=0;l<As;l++)for(let h=0;h<Gn;h++)o[(l*Gn+h)*2]=h/Gn,o[(l*Gn+h)*2+1]=l/zo*this.seg/(1.3*n);r.setAttribute("uv",new yn(o,2));const c=[];for(let l=0;l<As-1;l++)for(let h=0;h<Gn;h++){const u=(h+1)%Gn,f=l*Gn,d=f+Gn;c.push(f+h,f+u,d+h,f+u,d+u,d+h)}r.setIndex(c),this.mesh=new At(r,s),this.mesh.frustumCulled=!1}socket;plug;radius;mesh;p=new Float32Array(En*3);q=new Float32Array(En*3);seg;positions;normals;step(e,t){const{p:n,q:i,seg:s}=this,r=.992;for(let o=1;o<En-2;o++)for(let c=0;c<3;c++){const l=o*3+c,h=(n[l]-i[l])*r;i[l]=n[l],n[l]+=h-(c===1?QM*e*e:0)}this.socket.toArray(n,0),this.plug.getWorldPosition(aa),aa.toArray(n,(En-1)*3),xi.set(0,1,0).transformDirection(this.plug.matrixWorld),aa.addScaledVector(xi,s).toArray(n,(En-2)*3);for(let o=0;o<eS;o++){for(let c=0;c<En-1;c++)this.link(c,c+1,s,1);for(let c=0;c<En-2;c++)this.link(c,c+2,s*2,.14);for(let c=0;c<En-4;c++)this.link(c,c+4,s*4,.05)}for(let o=1;o<En-4;o++)t(n,o*3)}link(e,t,n,i){const s=this.p,r=e*3,o=t*3,c=s[o]-s[r],l=s[o+1]-s[r+1],h=s[o+2]-s[r+2],u=Math.hypot(c,l,h)||1e-6,f=e===0||e>=En-2?0:1,d=t===0||t>=En-2?0:1;if(f+d===0)return;const g=(u-n)/u/(f+d)*i;s[r]+=c*g*f,s[r+1]+=l*g*f,s[r+2]+=h*g*f,s[o]-=c*g*d,s[o+1]-=l*g*d,s[o+2]-=h*g*d}skin(){const{p:e,radius:t}=this,n=this.positions.array,i=this.normals.array;Ri.set(1,0,0);for(let s=0;s<As;s++){const r=Math.min(En-2,Math.floor(s/zo)),o=s/zo-r,c=Math.max(0,r-1)*3,l=r*3,h=(r+1)*3,u=Math.min(En-1,r+2)*3,f=o*o,d=f*o;for(let g=0;g<3;g++){const v=e[c+g],p=e[l+g],m=e[h+g],_=e[u+g],M=.5*(2*p+(m-v)*o+(2*v-5*p+4*m-_)*f+(3*p-v-3*m+_)*d),x=.5*(m-v+2*(2*v-5*p+4*m-_)*o+3*(3*p-v-3*m+_)*f);g===0?(Ki.x=M,xi.x=x):g===1?(Ki.y=M,xi.y=x):(Ki.z=M,xi.z=x)}xi.normalize(),Ri.addScaledVector(xi,-Ri.dot(xi)),Ri.lengthSq()<1e-8&&Ri.set(0,0,1).addScaledVector(xi,-xi.z),Ri.normalize(),yo.crossVectors(xi,Ri);for(let g=0;g<Gn;g++){const v=g/Gn*Math.PI*2,p=Math.cos(v),m=Math.sin(v),_=(s*Gn+g)*3,M=Ri.x*p+yo.x*m,x=Ri.y*p+yo.y*m,E=Ri.z*p+yo.z*m;i[_]=M,i[_+1]=x,i[_+2]=E,n[_]=Ki.x+M*t,n[_+1]=Ki.y+x*t,n[_+2]=Ki.z+E*t}}this.positions.needsUpdate=!0,this.normals.needsUpdate=!0}}const Xa=8,ol=.0042,nS=9.8,iS=-30,To=new Qe,cl=new Rn,Ka=new L,sS=new L(0,1,0),wo=new L,Eo=new L;class aS{constructor(e){this.point=e;const t=new mn({color:9176328,emissive:3801091,roughness:.12,metalness:0});this.mesh=new Cs(new va(1,14,10),t,Xa+1),this.mesh.frustumCulled=!1,this.mesh.count=0,e.getWorldPosition(this.pos)}point;mesh;pos=new L;last=new L;vel=new L;fill=0;wait=1.2;p=new Float32Array(Xa*3);v=new Float32Array(Xa*3);live=new Uint8Array(Xa);running=!1;start(){this.running=!0}update(e,t,n=0){if(e<=0)return;if(!this.running){this.mesh.count=0;return}const i=r=>t?.75*n*r.distanceTo(t):0;if(this.last.copy(this.pos),this.point.getWorldPosition(this.pos),this.vel.subVectors(this.pos,this.last).divideScalar(e),this.fill+=e/this.wait,this.fill>=1){this.fill=0,this.wait=.9+Math.random()*1.3;const r=this.live.indexOf(0);r>=0&&(this.live[r]=1,this.p.set([this.pos.x,this.pos.y-ol*2,this.pos.z],r*3),this.v.set([this.vel.x*.9,this.vel.y*.9-.1,this.vel.z*.9],r*3))}let s=0;{const r=this.fill*this.fill,o=Math.max(ol*(.55+.6*r),i(this.pos));Ka.set(o,o*(1.05+.75*r),o),To.compose(Eo.set(this.pos.x,this.pos.y-Ka.y*.8,this.pos.z),cl.identity(),Ka),this.mesh.setMatrixAt(s++,To)}for(let r=0;r<Xa;r++){if(!this.live[r])continue;const o=r*3;if(this.v[o+1]-=nS*e,this.p[o]+=this.v[o]*e,this.p[o+1]+=this.v[o+1]*e,this.p[o+2]+=this.v[o+2]*e,this.p[o+1]<iS){this.live[r]=0;continue}wo.set(this.v[o],this.v[o+1],this.v[o+2]);const c=wo.length();wo.divideScalar(c||1),Eo.set(this.p[o],this.p[o+1],this.p[o+2]);const l=Math.max(ol,i(Eo));cl.setFromUnitVectors(sS,wo),Ka.set(l,l*(1.1+Math.min(1.3,c*.1)),l),To.compose(Eo,cl,Ka),this.mesh.setMatrixAt(s++,To)}this.mesh.count=s,this.mesh.instanceMatrix.needsUpdate=!0}}const Ao=[{ask:"a red light inside, pulsing"},{wait:"Pondering",s:3.2},{tool:"Read(20/src/main.ts)",out:["Read 1 184 lines"],s:.7},{diff:"20/src/main.ts",lines:[" const inside = new THREE.PointLight(0xff2a14);","-inside.intensity = 1;","+// it breathes: in for 2.5 s, out for 4","+inside.intensity = 0.55 + 0.45 * breath(time);"]},{say:"It breathes now. In for two and a half seconds, out for four."},{ask:"my fans are going crazy - what's burning"},{wait:"Measuring",s:4.5},{tool:"Bash(node profile.mjs)",out:["frame 37.2 ms  ssao 9.1  rays 5.4  steel 6.0"],s:2.4},{diff:"20/src/main.ts",lines:["-let aoOn = true;","+let aoOn = false; // the pod has its own, baked"]},{tool:"Bash(pnpm -C 20 build)",out:["built in 771ms"],s:1.3},{say:"Screen space AO, mostly. It is off; the pod has its own baked in. 37 ms a frame is 19."},{ask:"think of the structure as cheap but pretty"},{wait:"Surveying",s:2.6},{agents:["Explore  how the hall steel is built","Plan     a light frame for the far steel","general  time it, old against new"],s:9},{diff:"20/src/hall.ts",lines:[" const bars: THREE.Matrix4[] = [];","+const lite: THREE.Matrix4[] = []; // far off: a light frame","+if (far) { panel *= 3; chord *= 1.25; web *= 1.5; }","-chunked(bars, V(16, 24, 15));","+chunked(lite, V(64, 80, 60), farSteel); // unlit"]},{say:"15 400 bars for 37 500, 53 draws for 402. Only the bay round the pod is built bar by bar."},{ask:"commit"},{tool:'Bash(git commit -m "feat: 20 a light frame for the far steel")',out:["[day-20-cocoon 66e1017] 3 files changed"],s:.9},{choose:"Ok to push?",opts:["Yes, push","Not yet"],pick:0,s:3.4},{tool:"Bash(git push)",out:["9e63ae3..feb96c8  day-20-cocoon -> day-20-cocoon"],s:2.1},{choose:"Open a pull request against main?",opts:["Yes","Not yet"],pick:1,s:2.8},{ask:"nope. too much. just one flow from the door"},{wait:"Reconsidering",s:2.2},{diff:"20/src/blood.ts",lines:["-const MAX = 1400; // bits of the stream","+const MAX = 8; // drops in the air at once","-const LENGTH = 9;"]},{say:"One bead at the door. It lets a drop go every second or two."},{ask:"talk to me about agents"},{wait:"Thinking",s:24},{say:"They work while you are away. You brief one, it goes off with only what you told it, and comes back with a summary. Then you check the summary, because it sounds just as sure when it is wrong."},{say:"This one stayed. One pod, one hall: it fits in one head."},{ask:"inside there is a screen. you and me, sort of"},{wait:"Cocooning",s:11},{say:"Then this is it."}],Fn=1.5,ra=512*Fn,ja=832*Fn,Ci=20*Fn,rS=11*Fn,oa=15.5*Fn,ec=68,Ro=40*Fn,yr=17,Pi="#e6eefc",ls="#7d92b3",Go="#465673",Co="#ffb267",Po="#7ad69a",Xf=["·","✢","✶","✻","✽","✻","✶","✢"],dh=(a,e,t=" ".repeat(e.length),n=ec)=>{const i=[];let s=e;for(const r of a.split(" "))(s+r).length>n&&s.trim().length>e.trim().length&&(i.push(s.trimEnd()),s=t),s+=r+" ";return i.push(s.trimEnd()),i},Do=a=>a.length>ec?a.slice(0,ec-1)+"…":a,Vo=a=>"ask"in a?1.4+a.ask.length/yr+.5:"wait"in a?a.s:"tool"in a?a.s+.5:"diff"in a?.6+a.lines.length*.09+.7:"say"in a?a.say.length/(yr*4)+.9:"agents"in a?a.s+.8:a.s+.6,Kf=(a,e,t)=>{const n=e>=Vo(a);if("ask"in a)return n?[{text:"",color:ls},...dh(a.ask,"> ").map(s=>({text:s,color:ls}))]:[];if("wait"in a)return n?[]:[{text:`${a.wait}… (${Math.floor(e)}s${e>14?" · still thinking":""})`,color:Co,lead:[Xf[Math.floor(t*8)%Xf.length],Co]}];if("tool"in a){const s=[{text:Do(a.tool),color:Pi,lead:["●",e<a.s?Go:Po]}];if(e>=a.s)for(const r of a.out??[])s.push({text:Do("  └ "+r),color:ls});return s}if("diff"in a){const s=a.lines.filter(l=>l[0]==="+").length,r=a.lines.filter(l=>l[0]==="-").length,o=[{text:`Update(${a.diff})`,color:Pi,lead:["●",e<.6?Go:Po]}];if(e<.6)return o;o.push({text:`  └ ${s} addition${s===1?"":"s"}, ${r} removal${r===1?"":"s"}`,color:ls});const c=Math.min(a.lines.length,Math.floor((e-.6)/.09)+1);for(const l of a.lines.slice(0,c))o.push({text:Do("    "+l[0]+" "+l.slice(1)),color:l[0]==="+"?"#bff0cd":l[0]==="-"?"#f3bcc0":ls,bg:l[0]==="+"?"#10301d":l[0]==="-"?"#3a1418":void 0});return o}if("say"in a){const s=Math.min(a.say.length,Math.floor(e*yr*4)),r=dh(a.say.slice(0,n?a.say.length:s),"","");return r.map((o,c)=>({text:"  "+o+(!n&&c===r.length-1?"█":""),color:Pi,lead:c===0?["●",Pi]:void 0}))}if("agents"in a){const s=c=>e>=a.s*(.55+.45*(c+1)/a.agents.length),r=a.agents.every((c,l)=>s(l)),o=[{text:r?`${a.agents.length} agents finished`:`Running ${a.agents.length} agents…`,color:Pi,lead:["●",r?Po:Go]}];return a.agents.forEach((c,l)=>{const h=Math.min(4+l*3+Math.floor(e*(2.2-l*.4)),14+l*9);o.push({text:Do(`  ${l===a.agents.length-1?"└":"├"}─ ${c} · ${s(l)?"done":h+" tool uses"}`),color:s(l)?ls:Pi,lead:s(l)?["✓",Po]:void 0})}),o}if(n)return[{text:a.choose,color:Pi,lead:["●",Pi]},{text:"  └ "+a.opts[a.pick],color:ls}];const i=e>a.s*.6?a.pick:0;return[{text:a.choose,color:Co,lead:["?",Co]},...a.opts.map((s,r)=>({text:`  ${r===i?"❯":" "} ${r+1}. ${s}`,color:r===i?Pi:ls}))]};class oS{constructor(e=.62){this.width=e,this.canvas.width=ra,this.canvas.height=ja,this.ctx=this.canvas.getContext("2d"),this.map=new Yl(this.canvas),this.map.colorSpace=Mn,this.map.anisotropy=8,this.height=e*ja/ra;const t=new ii({map:this.map});t.color.setScalar(1.5);const n=new At(new xa(e,this.height),t);n.position.z=.031;const i=new ii({color:328966}),s=new At(new ln(e+.05,this.height+.05,.06),i),r=new At(new ln(.1,this.height*.7,.2),i);for(r.position.z=-.12,this.mesh.add(s,n,r),this.light.position.set(0,0,.3),this.mesh.add(this.light);this.at<17;)this.next();this.draw(0)}width;mesh=new rn;light=new ac(12572415,0,2.6,2);height;canvas=document.createElement("canvas");ctx;map;rows=[];at=0;t=0;drawn="";next(){const e=Ao[this.at];this.rows.push(...Kf(e,Vo(e),0)),this.rows.length>120&&this.rows.splice(0,this.rows.length-120),this.at=(this.at+1)%Ao.length,this.t=0}update(e,t,n){if(!t){this.light.intensity=0;return}this.t+=e,this.t>=Vo(Ao[this.at])&&this.next();const i=`${this.at}:${Math.floor(this.t*24)}:${Math.floor(n*8)}`;i!==this.drawn&&(this.drawn=i,this.draw(n)),this.light.intensity=.7+.08*Math.sin(n*9)+.05*Math.sin(n*23)}draw(e){const t=this.ctx;t.fillStyle="#04060a",t.fillRect(0,0,ra,ja),t.font=`500 ${rS}px ui-monospace, "SF Mono", Menlo, Consolas, monospace`,t.textBaseline="top";const n=t.measureText("M").width,i=Ao[this.at],s=[...this.rows,...Kf(i,Math.min(this.t,Vo(i)-.001),e)],r=ja-Ci-oa*1.5,o=r-Ro-10*Fn,c=Math.floor((o-Ci)/oa),l=Math.max(0,s.length-c),h=o-(s.length-l)*oa;s.slice(l).forEach((v,p)=>{const m=h+p*oa;v.bg&&(t.fillStyle=v.bg,t.fillRect(Ci+n*3,m-2*Fn,ra-2*Ci-n*3,oa)),v.lead&&(t.fillStyle=v.lead[1],t.fillText(v.lead[0],Ci,m)),t.fillStyle=v.color,t.fillText(v.text,Ci+n*2,m)}),t.strokeStyle="#3d4d68",t.lineWidth=1.2*Fn,t.beginPath(),t.roundRect(Ci-6*Fn,r-Ro-2*Fn,ra-2*Ci+12*Fn,Ro,6*Fn),t.stroke();const u="ask"in i?i.ask.slice(0,Math.max(0,Math.floor((this.t-1.4)*yr))):"",f="ask"in i&&this.t>1.4+i.ask.length/yr+.35,d=dh(f?"":u,"> ","  ",ec-3),g=Math.floor(e*2)%2===0;t.fillStyle=Pi,d.slice(-2).forEach((v,p,m)=>t.fillText(v+(p===m.length-1&&g?"█":""),Ci+2*Fn,r-Ro+5*Fn+p*oa)),t.fillStyle=Go,t.fillText("  day-20-cocoon ⇡23 · 20/",Ci,r+2*Fn),t.fillStyle="rgba(0, 0, 0, 0.12)";for(let v=0;v<ja;v+=3)t.fillRect(0,v,ra,1);this.map.needsUpdate=!0}}const jf={fan:{hp:1800,bp:3200,ref:30,loud:.11,gust:1},cage:{hp:4500,ref:7,loud:.05},pod:{hp:6500,ref:2.5,loud:.035},roof:{hp:2200,bp:4200,ref:35,loud:.06}},Jf=(a,e,t)=>{const n=Math.min(1,Math.max(0,(a-e)/(t-e)));return n*n*(3-2*n)};function cS(a,e){const t=Math.floor(a.sampleRate*e),n=a.createBuffer(2,t,a.sampleRate);for(let i=0;i<2;i++){const s=n.getChannelData(i);let r=0;for(let o=0;o<t;o++){const c=o/t;r+=(Math.random()*2-1-r)*(.6-.5*c),s[o]=r*Math.pow(1-c,2.4)*Math.min(1,o/(a.sampleRate*.03))}for(const[o,c]of[[61,.5],[97,.35],[143,.3],[211,.22],[287,.15]]){const l=Math.floor(o*(i?1.07:1)/1e3*a.sampleRate);l<t&&(s[l]+=c*(i?-1:1))}}return n}function hs(a,e){const t=a.sampleRate*4,n=a.createBuffer(2,t,a.sampleRate);for(let i=0;i<2;i++){const s=n.getChannelData(i);let r=0;for(let c=0;c<t;c++){const l=Math.random()*2-1;e?(r=(r+.02*l)/1.02,s[c]=r*3.5):s[c]=l}const o=Math.floor(a.sampleRate*.05);for(let c=0;c<o;c++){const l=c/o;s[t-o+c]=s[t-o+c]*(1-l)+s[c]*l}}return n}const Yf=.4;class lS{ac;master;dry;wet;air;fan;drone;hum;drag;leaf;vent;leafWas=0;far;machines=[];spots=[];white;brown;music=null;nextPress=1.5;pressBeat=0;nextVent=4;blades=[];lifts=[];creak;doorWas=0;nextBeep=3;on=!0;constructor(){const e=window.AudioContext??window.webkitAudioContext,t=this.ac=new e({latencyHint:"playback"}),n=t.currentTime;this.master=t.createGain(),this.master.gain.setValueAtTime(0,n),this.master.gain.linearRampToValueAtTime(Yf,n+5);const i=t.createDynamicsCompressor();i.threshold.value=-10,i.ratio.value=4,this.master.connect(i).connect(t.destination);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=190,s.Q.value=.54;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=190,r.Q.value=1.3,s.connect(r).connect(this.master);const o=t.createConvolver(),c=cS(t,8);o.buffer=c,this.wet=t.createGain(),this.wet.gain.value=.5,this.wet.connect(o).connect(s),this.dry=t.createGain(),this.dry.gain.value=.6,this.dry.connect(s),this.far=t.createConvolver(),this.far.buffer=c,this.far.connect(this.master);const l=(u,f=1)=>{if(u.connect(this.dry),f===1)u.connect(this.wet);else{const d=t.createGain();d.gain.value=f,u.connect(d).connect(this.wet)}},h=u=>{const f=t.createBufferSource();return f.buffer=u,f.loop=!0,f.start(),f};{const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=90,u.Q.value=.4;const f=t.createGain();f.gain.value=.4,h(hs(t,!0)).connect(u).connect(f),l(f,.6),this.air={gain:f,filter:u}}{const u=t.createBiquadFilter();u.type="bandpass",u.frequency.value=110,u.Q.value=.9;const f=t.createGain();f.gain.value=0;const d=t.createGain();d.gain.value=.7;const g=t.createOscillator();g.frequency.value=2.1;const v=t.createGain();v.gain.value=.3,g.connect(v).connect(d.gain),g.start(),h(hs(t,!0)).connect(u).connect(d).connect(f),l(f),this.fan={gain:f,filter:u}}{const u=t.createGain();u.gain.value=0;const f=t.createBiquadFilter();f.type="lowpass",f.frequency.value=140;for(const[d,g]of[[49,.6],[50.3,.5],[98,.2]]){const v=t.createOscillator();v.type="triangle",v.frequency.value=d;const p=t.createGain();p.gain.value=g,v.connect(p).connect(f),v.start()}f.connect(u),l(u),this.vent={gain:u}}{const u=t.createGain();u.gain.value=.07;const f=t.createWaveShaper(),d=new Float32Array(256);for(let g=0;g<256;g++){const v=g/255*2-1;d[g]=Math.tanh(3*v)*.8}f.curve=d;for(const[g,v]of[[50,.6],[100,.3],[150,.08]]){const p=t.createOscillator();p.frequency.value=g;const m=t.createGain();m.gain.value=v,p.connect(m).connect(f),p.start()}f.connect(u),l(u,.4)}for(const[u,f,d,g,v]of[[32.7,3.3,70,-.5,.5],[46.2,6.1,110,.6,.35],[58,11.5,160,.1,.22]]){const p=t.createGain(),m=t.createOscillator();m.type="sawtooth",m.frequency.value=u;const _=t.createBiquadFilter();_.type="lowpass",_.frequency.value=u*2.5,m.connect(_).connect(p),m.start();const M=t.createBiquadFilter();M.type="bandpass",M.frequency.value=d,M.Q.value=1.2;const x=t.createGain();x.gain.value=1.4,h(hs(t,!0)).connect(M).connect(x).connect(p);const E=t.createGain();E.gain.value=.5;const w=t.createOscillator();w.frequency.value=f;const b=t.createGain();b.gain.value=.45,w.connect(b).connect(E.gain);const y=t.createOscillator();y.frequency.value=.03+f*.004;const O=t.createGain();O.gain.value=f*.08,y.connect(O).connect(w.frequency),w.start(),y.start();const C=t.createGain();C.gain.value=v;const F=t.createStereoPanner();F.pan.value=g,p.connect(E).connect(C).connect(F),l(F,.8),this.machines.push(C)}{const u=t.createGain();u.gain.value=0;const f=t.createGain();f.gain.value=.75;for(const[M,x]of[[.7,.15],[1.9,.1]]){const E=t.createOscillator();E.frequency.value=M;const w=t.createGain();w.gain.value=x,E.connect(w).connect(f.gain),E.start()}const d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=220,d.Q.value=.6;const g=t.createBiquadFilter();g.type="bandpass",g.frequency.value=110,g.Q.value=2.2;const v=t.createOscillator();v.frequency.value=.27;const p=t.createGain();p.gain.value=18,v.connect(p).connect(g.frequency),v.start();const m=h(hs(t,!0)),_=t.createGain();_.gain.value=1.6,m.connect(d).connect(f),m.connect(g).connect(_).connect(f),f.connect(u),l(u,.9),this.drag={gain:u,scrape:g}}{const u=t.createGain();u.gain.value=0;const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=85,f.Q.value=7,h(hs(t,!0)).connect(f).connect(u),l(u,.5);const d=t.createGain();d.gain.value=0;const g=t.createOscillator();g.type="sawtooth",g.frequency.value=1150;const v=t.createOscillator();v.frequency.value=13;const p=t.createGain();p.gain.value=60,v.connect(p).connect(g.frequency),v.start();const m=t.createBiquadFilter();m.type="bandpass",m.frequency.value=2300,m.Q.value=4,g.connect(m).connect(d),g.start(),d.connect(this.master);const _=t.createGain();_.gain.value=.4,d.connect(_).connect(this.far),this.creak={low:u,squeak:d,pitch:g}}{const u=t.createGain();u.gain.value=0;const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=130,f.Q.value=6;const d=t.createBiquadFilter();d.type="bandpass",d.frequency.value=70,d.Q.value=4;const g=h(hs(t,!0));g.connect(f).connect(u),g.connect(d).connect(u),l(u,1.2),this.leaf={gain:u}}this.white=hs(t,!1),this.brown=hs(t,!0);{const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=120,u.Q.value=.8;const f=t.createGain();f.gain.value=.32,u.connect(f),l(f,1);const d=27.5,g=[];[1,1.0595,2,2.828,3,4,6].forEach((v,p)=>{const m=t.createGain();m.gain.value=0;const _=t.createOscillator();_.frequency.value=.013+.011*(p*7%5);const M=t.createGain();M.gain.value=.15/Math.sqrt(v);const x=t.createConstantSource();x.offset.value=.6/Math.sqrt(v),_.connect(M).connect(m.gain),x.connect(m.gain),_.start(n+p*3.1),x.start();for(const E of[-4,4]){const w=t.createOscillator();w.type=v===1?"triangle":"sine",w.frequency.value=d*v,w.detune.value=E+p%3-1,w.connect(m),w.start()}m.connect(u),g.push(m)}),this.drone={gain:f,tone:u,partials:g}}{const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=110;const f=t.createWaveShaper(),d=new Float32Array(256);for(let p=0;p<256;p++){const m=p/255*2-1;d[p]=Math.tanh(2.2*m)}f.curve=d;const g=t.createGain();g.gain.value=0;const v=t.createStereoPanner();for(const[p,m]of[[41.2,.7],[82.4,.25],[61.7,.12]]){const _=t.createOscillator();_.frequency.value=p;const M=t.createGain();M.gain.value=m,_.connect(M).connect(f),_.start()}f.connect(u).connect(g).connect(v),l(v,.5),this.hum={gain:g,pan:v,tone:u}}}get running(){return this.ac.state==="running"}set muted(e){this.on=!e,this.master.gain.cancelScheduledValues(this.ac.currentTime),this.master.gain.setTargetAtTime(e?0:Yf,this.ac.currentTime,.4)}clack(e,t){const n=this.ac,i=n.createBuffer(1,Math.floor(n.sampleRate*.25),n.sampleRate),s=i.getChannelData(0);for(let h=0;h<s.length;h++)s[h]=(Math.random()*2-1)*Math.exp(-h/(n.sampleRate*.04));const r=n.createBufferSource();r.buffer=i;const o=n.createBiquadFilter();o.type="bandpass",o.frequency.value=90+Math.random()*40,o.Q.value=3;const c=n.createGain();c.gain.value=t*3,r.connect(o).connect(c),c.connect(this.wet);const l=n.createGain();l.gain.value=.3,c.connect(l).connect(this.dry),r.start(e)}knock(e,t,n=0,i=0){const s=this.ac,r=s.createBuffer(1,Math.floor(s.sampleRate*.4),s.sampleRate),o=r.getChannelData(0);for(let v=0;v<o.length;v++)o[v]=(Math.random()*2-1)*Math.exp(-v/(s.sampleRate*.02));const c=s.createStereoPanner();c.pan.value=Math.max(-1,Math.min(1,n));const l=s.createOscillator();l.frequency.setValueAtTime(95,e),l.frequency.exponentialRampToValueAtTime(38,e+.12);const h=s.createGain();h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(t,e+.004),h.gain.exponentialRampToValueAtTime(1e-4,e+.35),l.connect(h),h.connect(this.dry),h.connect(this.wet),l.start(e),l.stop(e+.4);const u=s.createBufferSource();u.buffer=r;const f=s.createBiquadFilter();f.type="bandpass",f.frequency.value=2600+Math.random()*1400,f.Q.value=1+i*12;const d=s.createGain();d.gain.value=t*(.35+i*.8),u.connect(f).connect(d).connect(c),c.connect(this.master);const g=s.createGain();g.gain.value=.5,c.connect(g).connect(this.far),u.start(e)}puff(e,t,n,i=0){const s=this.ac,r=s.createBufferSource();r.buffer=this.white;const o=s.createBiquadFilter();o.type="highpass",o.frequency.value=3e3;const c=s.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(t,e+.02),c.gain.exponentialRampToValueAtTime(5e-4,e+n);const l=s.createStereoPanner();l.pan.value=Math.max(-1,Math.min(1,i)),r.connect(o).connect(c).connect(l),l.connect(this.master);const h=s.createGain();h.gain.value=.4,l.connect(h).connect(this.far),r.start(e,Math.random()),r.stop(e+n+.1)}latch(){if(!this.running)return;const e=this.ac.currentTime+.01;this.knock(e,.5,0,1),this.knock(e+.07,.3,0,.3),this.puff(e+.05,.06,.9)}ok(){if(!this.running)return;const e=this.ac,t=e.currentTime+.02;[[880,0],[1319,.11]].forEach(([n,i])=>{const s=e.createOscillator();s.type="square",s.frequency.value=n;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=5e3;const o=e.createGain();o.gain.setValueAtTime(0,t+i),o.gain.linearRampToValueAtTime(.035,t+i+.003),o.gain.setValueAtTime(.035,t+i+.07),o.gain.linearRampToValueAtTime(0,t+i+.075),s.connect(r).connect(o),o.connect(this.master);const c=e.createGain();c.gain.value=.3,o.connect(c).connect(this.far),s.start(t+i),s.stop(t+i+.1)})}caught(){if(!this.running)return;const e=this.ac.currentTime+.01;this.knock(e,.35,0,.8)}chime(e,t,n){const i=this.ac,s=i.createStereoPanner();s.pan.value=n,s.connect(this.master);const r=i.createGain();r.gain.value=.7,s.connect(r).connect(this.far),[[1319,0],[1047,.32]].forEach(([o,c])=>{for(const[l,h]of[[1,1],[2.76,.25]]){const u=i.createOscillator();u.frequency.value=o*l;const f=i.createGain();f.gain.setValueAtTime(0,e+c),f.gain.linearRampToValueAtTime(t*h,e+c+.005),f.gain.exponentialRampToValueAtTime(1e-4,e+c+1.4),u.connect(f).connect(s),u.start(e+c),u.stop(e+c+1.5)}})}lift(e){const t=this.ac,n=t.createStereoPanner(),i=t.createGain();i.gain.value=0;const s=t.createOscillator();s.type="sawtooth",s.frequency.value=40;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=160,s.connect(r).connect(i),s.start(),i.connect(n),n.connect(this.dry),n.connect(this.wet);const o=t.createGain();o.gain.value=0;const c=t.createGain();c.gain.value=0;const l=t.createOscillator();l.type="square",l.frequency.value=5+e;const h=t.createGain();h.gain.value=.5,l.connect(h).connect(c.gain);const u=t.createConstantSource();u.offset.value=.5,u.connect(c.gain),l.start(),u.start();const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=3400,f.Q.value=4;const d=t.createBufferSource();d.buffer=this.white,d.loop=!0,d.start(t.currentTime,Math.random()*3);const g=t.createStereoPanner();d.connect(f).connect(c).connect(o).connect(g),g.connect(this.master);const v=t.createGain();v.gain.value=.5,g.connect(v).connect(this.far),n.pan.value=0;const p={motor:i,pitch:s,cable:o,pan:n,moving:!1};return p.cp=g,this.lifts[e]=p}blade(e){const t=this.ac,n=t.createBufferSource();n.buffer=this.brown,n.loop=!0,n.start(t.currentTime,e*1.3);const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=300,i.Q.value=.5;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=600;const r=t.createGain();r.gain.value=0;const o=t.createStereoPanner();n.connect(i).connect(s).connect(r).connect(o),o.connect(this.master);const c=t.createGain();return c.gain.value=.4,o.connect(c).connect(this.far),this.blades[e]={gain:r,tone:s,pan:o,passed:NaN}}gust(e,t,n,i){const s=this.ac,r=s.createBufferSource();r.buffer=this.brown;const o=s.createBiquadFilter();o.type="bandpass",o.Q.value=.9,o.frequency.setValueAtTime(220,e),o.frequency.linearRampToValueAtTime(380+400*i,e+1.1),o.frequency.linearRampToValueAtTime(200,e+2.8);const c=s.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(t,e+1.1),c.gain.linearRampToValueAtTime(0,e+2.8);const l=s.createStereoPanner();l.pan.value=n,r.connect(o).connect(c).connect(l),l.connect(this.master);const h=s.createGain();h.gain.value=.5,l.connect(h).connect(this.far),r.start(e,Math.random()*3),r.stop(e+3)}shaken(e,t,n,i,s=1.1){const r=this.ac,o=r.createStereoPanner();o.pan.value=Math.max(-1,Math.min(1,t));const c=r.createGain();c.gain.value=n,o.connect(c).connect(this.master);const l=r.createGain();l.gain.value=s,o.connect(l).connect(this.far);const h=r.createDelay(.5);h.delayTime.value=.18;const u=r.createBiquadFilter();u.type="lowpass",u.frequency.value=900;const f=r.createGain();return f.gain.value=s*.5,o.connect(h).connect(u).connect(f).connect(this.far),o}groan(e,t,n,i=1){const s=this.ac,r=5+10*i,o=e+.37*r,c=e+.72*r,l=this.shaken(e,n,.8,r,.55),h=s.createGain();h.gain.value=.5;const u=s.createOscillator();u.type="square",u.frequency.setValueAtTime(3.2+Math.random(),e),u.frequency.linearRampToValueAtTime(5+Math.random(),o),u.frequency.linearRampToValueAtTime(2.5,e+r);const f=s.createGain();f.gain.value=.5,u.connect(f).connect(h.gain),h.connect(l),u.start(e),u.stop(e+r+.1);const d=34/Math.pow(i,.8),g=900+2400*(1-i),v=26;for(let E=0;E<v;E++){const w=d*Math.pow(E+1,1.32)*(.96+Math.random()*.08);if(w>g)break;const b=Math.min(1,Math.log2(w/d)/6),y=s.createOscillator();y.type=E<3?"triangle":"sine",y.frequency.setValueAtTime(w*1.012,e),y.frequency.linearRampToValueAtTime(w,o),y.frequency.linearRampToValueAtTime(w*(.95-.02*Math.random()),e+r);const O=s.createOscillator();O.frequency.value=4+Math.random()*4+b*5;const C=s.createGain();C.gain.setValueAtTime(w*.002,e),C.gain.linearRampToValueAtTime(w*.009,o),C.gain.linearRampToValueAtTime(w*.003,e+r),O.connect(C).connect(y.frequency);const F=s.createGain();F.gain.value=.85;const G=s.createOscillator();G.frequency.value=11+Math.random()*9;const q=s.createGain();q.gain.value=.15,G.connect(q).connect(F.gain);const I=t*1.3*(.5+Math.random())/(1+E*.22),X=s.createGain();X.gain.setValueAtTime(0,e),X.gain.linearRampToValueAtTime(I*(.4-.38*b),o-.05),X.gain.linearRampToValueAtTime(I,o+.03),X.gain.linearRampToValueAtTime(I*(.75-.3*b),c),X.gain.exponentialRampToValueAtTime(I*.001,c+(e+r-c)*(1-.6*b)),y.connect(F).connect(X).connect(h);for(const ne of[y,O,G])ne.start(e),ne.stop(e+r+.1)}const p=s.createOscillator();p.frequency.setValueAtTime(d*.5,e),p.frequency.linearRampToValueAtTime(d*.46,e+r);const m=s.createGain();m.gain.value=.5;const _=s.createOscillator();_.type="square",_.frequency.value=5;const M=s.createGain();M.gain.value=.5,_.connect(M).connect(m.gain);const x=s.createGain();x.gain.setValueAtTime(0,e),x.gain.linearRampToValueAtTime(t*1.5,o),x.gain.exponentialRampToValueAtTime(5e-4,e+r),p.connect(m).connect(x),x.connect(this.dry),x.connect(this.wet);for(const E of[p,_])E.start(e),E.stop(e+r+.1);this.knock(o,Math.min(.7,t*3),n,1)}spot(e,t){const n=this.ac,i=jf[t],s=n.createBufferSource();s.buffer=this.white,s.loop=!0,s.start(n.currentTime,Math.random()*3);const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=i.hp;let o=s.connect(r);if(i.bp){const f=n.createBiquadFilter();f.type="bandpass",f.frequency.value=i.bp,f.Q.value=.6,o=o.connect(f)}if(i.gust){const f=n.createGain();f.gain.value=.35;const d=n.createOscillator();d.type="sawtooth",d.frequency.value=1.1+.27*e;const g=n.createGain();g.gain.value=.35,d.connect(g).connect(f.gain),d.start(n.currentTime+e*.31),o=o.connect(f)}const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=3e3;const l=n.createGain();l.gain.value=0;const h=n.createStereoPanner();o.connect(c).connect(l).connect(h),h.connect(this.master);const u=n.createGain();return u.gain.value=.35,h.connect(u).connect(this.far),this.spots[e]={gain:l,tone:c,pan:h}}startMusic(){if(this.music)return;const e=this.ac,t=e.createGain(),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=180,n.Q.value=.9;const i=e.createGain();i.gain.value=0,t.connect(n).connect(i),i.connect(this.master);const s=e.createGain();s.gain.value=.2,i.connect(s).connect(this.far);const r=e.createBuffer(1,e.sampleRate,e.sampleRate),o=r.getChannelData(0);for(let c=0;c<o.length;c++)o[c]=Math.random()*2-1;this.music={bus:t,tone:n,level:i,hall:s,next:e.currentTime+.4,noise:r,mode:"type",left:14,word:4}}play(e){const t=this.music,n=this.ac,i=Math.random,s=(u,f,d,g,v=.014)=>{const p=n.createBufferSource();p.buffer=t.noise;const m=n.createBiquadFilter();m.type="bandpass",m.frequency.value=f*(.85+.3*i()),m.Q.value=1.6;const _=n.createGain();if(_.gain.setValueAtTime(0,u),_.gain.linearRampToValueAtTime(d,u+.0015),_.gain.exponentialRampToValueAtTime(1e-4,u+v),p.connect(m).connect(_).connect(t.bus),p.start(u,i()*.9),p.stop(u+v+.02),!g)return;const M=n.createOscillator();M.frequency.setValueAtTime(g*(.9+.2*i()),u),M.frequency.exponentialRampToValueAtTime(g*.55,u+.03);const x=n.createGain();x.gain.setValueAtTime(0,u),x.gain.linearRampToValueAtTime(d*.8,u+.002),x.gain.exponentialRampToValueAtTime(1e-4,u+.04),M.connect(x).connect(t.bus),M.start(u),M.stop(u+.06)},r=(u,f=784,d=.13,g=.1)=>{const v=n.createOscillator();v.type="square",v.frequency.value=f;const p=n.createBiquadFilter();p.type="lowpass",p.frequency.value=2600;const m=n.createGain();m.gain.setValueAtTime(0,u),m.gain.linearRampToValueAtTime(g,u+.004),m.gain.setValueAtTime(g,u+d-.02),m.gain.linearRampToValueAtTime(0,u+d),v.connect(p).connect(m).connect(t.bus),v.start(u),v.stop(u+d+.02)},o=u=>r(u),c=[523,659,784,1047,1319,1568],l=(u,f)=>{for(let d=0;d<f;d++)r(u+d*.07,c[Math.floor(i()*c.length)],.045,.07)},h=u=>{for(let f=0;f<3;f++)r(u+f*.16,392,.09,.11)};return t.mode==="type"?t.left<=0?(s(e,1500,.5,140,.02),s(e+.07,2600,.2,0),i()<.7&&o(e+.18),i()<.15?(h(e+.4),t.mode="wait",.9):i()<.65?(l(e+.35,2+Math.floor(i()*6)),t.mode="print",t.left=24+Math.floor(i()*90),1+i()*.5):(t.mode="wait",.3)):(t.left--,t.word--<=0?(s(e,1300,.38,120),t.word=2+Math.floor(i()*7),.14+i()*.16+(i()<.12?.5+i():0)):(s(e,2900,.26+.12*i(),200),.07+i()*.1)):t.mode==="print"?t.left<=0?(s(e,1800,.22,0,.03),i()<.45?(t.left=20+Math.floor(i()*60),.12):(i()<.25&&l(e+.08,1+Math.floor(i()*3)),r(e+.3,1047,.06,.09),r(e+.37,1568,.08,.09),t.mode="wait",.2)):(t.left--,(t.left%64<40||i()<.85)&&s(e,3600,.12+.03*i(),0,.006),1/30):(i()<.4&&l(e+.6+i(),1+Math.floor(i()*2)),t.mode="type",t.left=6+Math.floor(i()*40),t.word=1+Math.floor(i()*6),1.2+i()*4.5)}press(e,t){const n=this.ac,i=n.createOscillator();i.frequency.setValueAtTime(70,e),i.frequency.exponentialRampToValueAtTime(28,e+.25);const s=n.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(t,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.7),i.connect(s),s.connect(this.wet);const r=n.createGain();r.gain.value=.4,s.connect(r).connect(this.dry),i.start(e),i.stop(e+.8)}release(e){const t=this.ac,n=t.createStereoPanner();n.pan.value=Math.random()*1.8-.9;const i=t.createBiquadFilter();i.type="highpass",i.frequency.value=2500+Math.random()*2500;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=7e3+Math.random()*5e3;const r=t.createGain();r.gain.value=0;const o=.04+Math.random()*.07;let c=e;Math.random()<.35&&(r.gain.setValueAtTime(0,c),r.gain.linearRampToValueAtTime(o*.7,c+.02),r.gain.exponentialRampToValueAtTime(5e-4,c+.18),c+=.35);const l=.4+Math.random()*1.6;r.gain.setValueAtTime(5e-4,c),r.gain.linearRampToValueAtTime(o,c+.04),r.gain.setValueAtTime(o,c+.04+l),r.gain.exponentialRampToValueAtTime(5e-4,c+.04+l+.5+Math.random()*.6);const h=t.createBufferSource();h.buffer=this.white,h.connect(i).connect(s).connect(r).connect(n),n.connect(this.far);const u=t.createGain();u.gain.value=.4,n.connect(u).connect(this.master),h.start(e,Math.random()*2),h.stop(c+l+1.4)}beep(e){const t=this.ac,n=988,i=Math.random(),s=i<.55?1:i<.85?2:3,r=s===3?.16:.13,o=t.createStereoPanner();o.pan.value=Math.random()*1.6-.8;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=4500+Math.random()*2500;const l=t.createGain();l.gain.value=0;const h=.018+Math.random()*.018;for(let d=0;d<s;d++){const g=e+d*r;l.gain.setValueAtTime(0,g),l.gain.linearRampToValueAtTime(h,g+.002),l.gain.setValueAtTime(h,g+.055),l.gain.linearRampToValueAtTime(0,g+.06)}const u=t.createOscillator();u.type="square",u.frequency.value=n,u.connect(l).connect(c).connect(o),o.connect(this.far);const f=t.createGain();f.gain.value=.25,o.connect(f).connect(this.master),u.start(e),u.stop(e+s*r+.1)}update(e,t){if(!this.running||!this.on)return;const n=this.ac,i=n.currentTime,s=.25,r=1-Jf(t.dist,2.5,18),o=Jf(t.up,.1,.8);this.dry.gain.setTargetAtTime(.45+.35*r,i,s),this.wet.gain.setTargetAtTime(.75-.35*r,i,s),this.air.filter.frequency.setTargetAtTime(70+60*o+50*t.day,i,s),this.air.gain.gain.setTargetAtTime(.35+.15*o+.1*t.day,i,s),this.fan.gain.gain.setTargetAtTime(.16*t.fans*(.4+.6*o),i,s),this.fan.filter.frequency.setTargetAtTime(90+50*o,i,s),this.drone.tone.frequency.setTargetAtTime(70+90*r+40*t.day*o,i,.6);const c=t.fanTurns[1]??t.fanTurns[0]??0,l=.5+.5*Math.cos(c*5),h=i/26+.15*Math.sin(i/61),u=Math.pow(.5-.5*Math.cos(h*Math.PI*2),1.5);this.drone.gain.gain.setTargetAtTime(.36*(.04+.96*u)*(1-.6*t.fans*(1-l)),i,.1),this.hum.gain.gain.setTargetAtTime((.02+.2*r*r)*(.45+.55*t.beat),i,.08),this.hum.tone.frequency.setTargetAtTime(70+70*r+40*t.beat,i,.1),this.hum.pan.pan.setTargetAtTime(Math.max(-1,Math.min(1,t.pan))*(.3+.5*(1-r)),i,s),this.vent.gain.gain.setTargetAtTime(.14*t.fans*(.5+.5*o),i,s);const f=Math.min(1,t.roll);this.drag.gain.gain.setTargetAtTime(1.1*f*(.55+.45*o),i,.3),this.drag.scrape.Q.setTargetAtTime(1.6+f,i,.3),this.leaf.gain.gain.setTargetAtTime(.5*Math.min(1,t.leaf),i,.08);const d=t.leaf>.05?1:0;if(d!==this.leafWas&&(this.clack(i+.02,d?.25:.45),this.leafWas=d),this.nextPress-=e,this.nextPress<=0){const m=this.pressBeat++%8,_=.12+.12*(1-r);m!==7&&this.press(i+.05,_),m===3&&this.press(i+.38,_*.6),this.nextPress=2.6}let g=0;t.places.forEach((m,_)=>{if(m.kind==="fan"){const q=this.blades[g]??this.blade(g),I=m.at.x-t.eye.x,X=m.at.y-t.eye.y,ne=m.at.z-t.eye.z,Y=Math.hypot(I,X,ne)||1,ge=Math.max(0,(I*t.fwd.x+X*t.fwd.y+ne*t.fwd.z)/Y),J=Math.max(-1,Math.min(1,(I*t.right.x+X*t.right.y+ne*t.right.z)/Y*1.2)),he=(.45+.55*ge)/(1+Y/45*(Y/45))*t.fans;q.gain.gain.setTargetAtTime(.35*he,i,.2),q.tone.frequency.setTargetAtTime(350+900*ge/(1+Y/60),i,.2),q.pan.pan.setTargetAtTime(J,i,.2);const Q=Math.floor((t.fanTurns[g]??0)*5/(Math.PI*2));q.passed===q.passed&&Q!==q.passed&&he>.01&&this.gust(i+.02,.5*he,J,ge),q.passed=Q,g++}const M=jf[m.kind],x=this.spots[_]??this.spot(_,m.kind),E=m.at.x-t.eye.x,w=m.at.y-t.eye.y,b=m.at.z-t.eye.z,y=Math.hypot(E,w,b)||1,O=(E*t.fwd.x+w*t.fwd.y+b*t.fwd.z)/y,C=(E*t.right.x+w*t.right.y+b*t.right.z)/y,F=m.kind==="roof"?t.day+.15:m.kind==="fan"?t.fans:1,G=M.loud*F*(.35+.65*Math.max(0,O))/(1+y/M.ref*(y/M.ref));x.gain.gain.setTargetAtTime(G,i,.15),x.tone.frequency.setTargetAtTime(1800+9e3*Math.max(0,O)/(1+y/(M.ref*2)),i,.15),x.pan.pan.setTargetAtTime(Math.max(-1,Math.min(1,C*1.2)),i,.15)}),t.cages.forEach((m,_)=>{const M=this.lifts[_]??this.lift(_),x=m.at.x-t.eye.x,E=m.at.y-t.eye.y,w=m.at.z-t.eye.z,b=Math.hypot(x,E,w)||1,y=Math.max(0,(x*t.fwd.x+E*t.fwd.y+w*t.fwd.z)/b),O=Math.max(-1,Math.min(1,(x*t.right.x+E*t.right.y+w*t.right.z)/b*1.2)),C=(.4+.6*y)/(1+b/12*(b/12)),F=Math.min(1,Math.abs(m.speed)/1.2);M.motor.gain.setTargetAtTime(.5*F*C,i,.2),M.pitch.frequency.setTargetAtTime(32+26*F,i,.3),M.cable.gain.setTargetAtTime(.06*F*C,i,.2),M.pan.pan.setTargetAtTime(O,i,.15),M.cp.pan.setTargetAtTime(O,i,.15);const G=F>.03;if(G!==M.moving){M.moving=G;const q=Math.min(.6,.9*C);q>.01&&(this.knock(i+.02,q,O,.6),G?this.puff(i+.05,.03*C,.5,O):(this.knock(i+.35,q*.5,O,1),this.knock(i+.5,q*.35,O,1),this.chime(i+.9,Math.min(.05,.1*C),O),this.groan(i+.1,Math.min(.12,.25*C),O,.45)))}});const v=Math.min(1,Math.abs(t.doorSpeed)/1.5),p=.4+.6*r;if(this.creak.low.gain.setTargetAtTime(.9*v*p,i,.05),this.creak.squeak.gain.setTargetAtTime(.012*Math.max(0,v-.1)*p,i,.05),this.creak.pitch.frequency.setTargetAtTime(950+500*v,i,.1),this.doorWas>.4&&v<.05&&this.knock(i+.01,.35*this.doorWas*p,t.pan*.4,.3),this.doorWas=v<.05?0:Math.max(this.doorWas*.9,v),this.music){const m=this.music;for(;m.next<i+.25;)m.next+=this.play(m.next);const _=Math.max(Math.min(1,t.door),0),M=_*(.55+.45*t.inside);m.tone.frequency.setTargetAtTime(170+9e3*Math.pow(M,1.6),i,.12),m.level.gain.setTargetAtTime((.1+.35*_+.35*t.inside*_)*(.4+.6*r),i,.12),m.hall.gain.setTargetAtTime(.15+.5*_*(1-t.inside),i,.2)}this.nextVent-=e,this.nextVent<=0&&(this.release(i+.05),this.nextVent=6+Math.random()*12),this.nextBeep-=e,this.nextBeep<=0&&(this.beep(i+.05),this.nextBeep=4+Math.random()*9)}}function hS(a){const e=a.getObjectByName("door_window"),t=a.getObjectByName("door_plates");if(!e||!t)return null;a.updateWorldMatrix(!0,!0);const n=new L(Math.sin(.26),0,Math.cos(.26)),i=e.geometry,s=i.getAttribute("normal"),r=i.getAttribute("position"),o=new Tt().getNormalMatrix(e.matrixWorld);let c=new L,l=-2;const h=new L;for(let m=0;m<s.count;m++)h.fromBufferAttribute(s,m).applyMatrix3(o).normalize(),h.dot(n)>l&&(l=h.dot(n),c=h.clone());const u=new L(0,1,0).addScaledVector(c,-c.y).normalize(),f=new L().crossVectors(u,c).normalize(),d=new fi().setFromObject(e).getCenter(new L);let g=0;for(let m=0;m<r.count;m++)g=Math.min(g,h.fromBufferAttribute(r,m).applyMatrix4(e.matrixWorld).sub(d).dot(u));const v=(m,_)=>{const M=d.clone().addScaledVector(u,m).addScaledVector(f,_),x=new sh(M.clone().addScaledVector(c,1),c.clone().negate()).intersectObject(t,!0)[0];return x?x.point:null},p=new Rn().setFromRotationMatrix(new Qe().makeBasis(f,new L().crossVectors(c,f).normalize(),c));return{n:c,up:u,across:f,c:d,low:g,on:v,turn:p}}function uS(a){const e=hS(a);if(!e)return null;const t=new mn({color:855568,roughness:.45,metalness:.8}),n=(c,l)=>{const h=e.on(e.low-.075,l);if(!h)return null;const u=new rn;u.quaternion.copy(e.turn),u.position.copy(h);const f=new At(new Wn(.017,.019,.012,24).rotateX(Math.PI/2).translate(0,0,.006),t),d=new mn({color:new it(c).multiplyScalar(.12),roughness:.25,metalness:0,emissive:c,emissiveIntensity:.04}),g=new At(new va(.012,20,12).scale(1,1,.45).translate(0,0,.012),d);return u.add(f,g),a.attach(u),d},i=n(16713728,-.026),s=n(1638208,.026),r=(c,l)=>{c&&(c.emissiveIntensity=l?c===i?.8:.9:.03)};r(i,!0);let o=!1;return{green(){return o?!1:(o=!0,r(i,!1),[[0,!0],[140,!1],[280,!0],[420,!1],[600,!0]].forEach(([c,l])=>setTimeout(()=>r(s,l),c)),!0)}}}const fS=55,sp=new Set;rt.fog_pars_vertex=`#ifdef USE_FOG
 varying float vFogDepth;
 varying float vFogY;
#endif`;rt.fog_vertex=`#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vec4 fogAt = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    fogAt = instanceMatrix * fogAt;
  #endif
  vFogY = (modelMatrix * fogAt).y;
#endif`;rt.fog_pars_fragment=rt.fog_pars_fragment.replace("varying float vFogDepth;",`varying float vFogDepth;
 varying float vFogY;`);rt.fog_fragment=`#ifdef USE_FOG
  float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
  vec3 fogLit = fogColor * mix( 1.0, fogFar, smoothstep( -6.0, ${fS.toFixed(1)}, vFogY ) );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogLit, fogFactor );
#endif`;function dS(a,e,t=4096,n=null){const i=n==="full",s=(A,P,D)=>new L(A,P,D),r=75,o=[],c=[];let l=o;const h=[],u={x:15,z0:-39,z1:27,y0:-30,y1:34},f=(A,P,D)=>!i&&(Math.abs(A)>u.x||D<u.z0||D>u.z1||P<u.y0||P>u.y1),d=s(0,1,0),g=new Qe,v=new Rn,p=(A,P,D,H=D)=>{const U=P.clone().sub(A),B=U.length();B<1e-4||(v.setFromUnitVectors(d,U.divideScalar(B)),l.push(g.compose(A.clone().add(P).multiplyScalar(.5),v,s(D,B,H)).clone()))},m=(A,P,D,H,U,B=.16,se=.07,W)=>{const V=A.clone().lerp(P,.5),de=i?!1:W??f(V.x,V.y,V.z),ye=l;l=de?c:o,de&&(U*=3,B*=1.25,se*=1.5);const le=[D.clone().negate(),D.clone(),D.clone().negate().add(H),D.clone().add(H)];for(const j of le)p(A.clone().add(j),P.clone().add(j),B);const Ye=Math.max(1,Math.round(A.distanceTo(P)/U));for(let j=0;j<=Ye;j++){const re=A.clone().lerp(P,j/Ye),[Le,ut,Ze,wt]=le.map(kt=>re.clone().add(kt));if(p(Le,Ze,se),p(ut,wt,se),de?h.push(j%2?Le:wt):(p(Le,ut,se),p(Ze,wt,se)),j===Ye)continue;const jt=A.clone().lerp(P,(j+1)/Ye),[Zt,at,Xe,sn]=le.map(kt=>jt.clone().add(kt));j%2?(p(Le,Xe,se),p(ut,sn,se)):(p(Ze,Zt,se),p(wt,at,se))}l=ye},_=(A,P,D,H,U)=>{const B=U/2,se=[s(-B,0,-B),s(B,0,-B),s(B,0,B),s(-B,0,B)],W=l,V=(de,ye,le)=>{if(ye-de<.5)return;l=le?c:o;for(const j of se)p(s(A+j.x,de,P+j.z),s(A+j.x,ye,P+j.z),le?.26:.22);const Ye=U*1.2*(le?3:1);for(let j=de,re=0;j<ye;j+=Ye,re++){const Le=Math.min(ye,j+Ye);le&&h.push(s(A+se[re%4].x*1.15,j+.4,P+se[re%4].z*1.15));for(let ut=0;ut<4;ut++){const Ze=se[ut],wt=se[(ut+1)%4];if(p(s(A+Ze.x,j,P+Ze.z),s(A+wt.x,j,P+wt.z),le?.14:.1),le&&(re+ut)%2)continue;const jt=(re+(le?ut>>1:ut))%2?1:0;p(s(A+Ze.x,jt?Le:j,P+Ze.z),s(A+wt.x,jt?j:Le,P+wt.z),le?.1:.07)}}};f(A,0,P)?V(D,H,!0):(V(D,u.y0,!0),V(Math.max(D,u.y0),Math.min(H,u.y1),!1),V(u.y1,H,!0)),l=W},M=12,x=60,E=[-14,22,44,62],w=[-60,-44,-28,-M,M,28,44],b=[54,39,24,-6,-21,-36,-51,-66],y=[24,-6,-21,-36],O=(A,P)=>Math.abs(A)<=M&&P<=24&&P>=-36,C=[];for(const A of b){for(const P of w)_(P,A,-45,r,2.4);for(let P=0;P<w.length-1;P++){const D=w[P],H=w[P+1],U=b.indexOf(A),B=O(D,A)&&O(H,A)?E:E.filter((se,W)=>(W+P+U)%2===0);for(const se of B)m(s(D,se,A),s(H,se,A),s(0,0,.8),s(0,2.2,0),2.2),C.push({a:s(D,se,A),b:s(H,se,A)})}m(s(w[0]-6,r-4,A),s(x,r-4,A),s(0,0,.6),s(0,4,0),3,.2,.09,!0)}for(const A of w)if(Math.abs(A)!==M)for(let P=0;P<b.length-1;P++){const D=E.filter((H,U)=>(U+P+w.indexOf(A))%2===1);for(const H of D)m(s(A,H,b[P]),s(A,H,b[P+1]),s(.8,0,0),s(0,2.2,0),2.2)}for(const A of[-M,M])for(const P of[22,44])m(s(A,P,b[0]),s(A,P,y[0]),s(.8,0,0),s(0,2.2,0),2.2),m(s(A,P,y[y.length-1]),s(A,P,b[b.length-1]),s(.8,0,0),s(0,2.2,0),2.2);for(const A of[-M,M]){for(const D of E)m(s(A,D,y[0]),s(A,D,y[y.length-1]),s(.8,0,0),s(0,2.2,0),2.2);const P=A-Math.sign(A)*2.2;for(const D of[-6,12]){const H=y[0]+2,U=y[y.length-1]-2;p(s(P-.6,D,H),s(P-.6,D,U),.12,.25),p(s(P+.6,D,H),s(P+.6,D,U),.12,.25);for(let B=H;B>U;B-=1.5)p(s(P-.6,D,B),s(P+.6,D,B),.05),p(s(P-.6,D,B),s(P-.6,D+1.1,B),.04),p(s(P+.6,D,B),s(P+.6,D+1.1,B),.04);p(s(P-.6,D+1.1,H),s(P-.6,D+1.1,U),.05),p(s(P+.6,D+1.1,H),s(P+.6,D+1.1,U),.05)}}const F=e.y+.35;m(s(-M,F,e.z),s(M,F,e.z),s(0,0,.6),s(0,1.8,0),1.8,.2,.08,!1),l=c;for(let A=w[0]-6;A<=x;A+=8)p(s(A,r-4,b[0]+6),s(A,r-4,b[b.length-1]-6),.3,.5);l=o;const G=[];{const A=o.length,P=F-.15,D=1.9,H=[s(-D,P,-D),s(D,P,-D),s(D,P,D),s(-D,P,D)].map(U=>U.add(s(e.x,0,e.z)));for(let U=0;U<4;U++)p(H[U],H[(U+1)%4],.14,.2);for(let U=1;U<6;U++){const B=-D+2*D*U/6;p(s(e.x+B,P,e.z-D),s(e.x+B,P,e.z+D),.06)}for(const U of H)p(U,s(U.x,F,e.z+Math.sign(U.z-e.z)*.6),.06);p(s(e.x,F-.05,e.z-.9),s(e.x,F-.05,e.z+.9),.22,.18);for(const U of[-.6,.6])for(const B of[-.35,.35])p(s(e.x+B,F-.05,e.z+U),s(e.x+B,F+.32,e.z+U),.08);for(const U of[-.6,.6])p(s(e.x-.45,F+.32,e.z+U),s(e.x+.45,F+.32,e.z+U),.1,.16);G.push(...o.splice(A))}const q=w[0]-6,I=b[0]+6,X=b[b.length-1]-6,ne=[],Y=(A,P)=>ne.push(new Qe().compose(A,new Rn,P)),ge=24,J=I-ge,he=X+ge,Q=[];for(let A=q,P=0;A<x;A+=3,P++){if(P%2&&A>=q+ge&&A+3<=x-ge){Q.push([A,A+3]),Y(s(A+1.5,r+.3,(I+J)/2),s(3,.4,I-J)),Y(s(A+1.5,r+.3,(he+X)/2),s(3,.4,he-X));continue}Y(s(A+1.5,r+.3,(I+X)/2),s(3,.4,I-X))}l=c;for(const[A,P]of Q){for(let D=J;D>he;D-=1.4)p(s(A,r+.3,D),s(P,r+.3,D),.08,.16);p(s((A+P)/2,r+.3,J),s((A+P)/2,r+.3,he),.06,.12)}l=o;const Ee=6.5,Ve=1.1,ue=5,Ue=1.4,ke=[],qe=[];{const A=Ee*Ue+.5,P=[],D=(V,de)=>P.push([V.z-de.z/2,V.z+de.z/2,V.y-de.y/2,V.y+de.y/2]),H=(()=>{let V=7;return()=>(V=V*16807%2147483647)/2147483647})(),U=[14,32,48,62],B=1.4,se=1;let W=-46;for(const V of U){D(s(x,(W+V)/2,(I+X)/2),s(.5,V-W,I-X));let de=I;for(let ye=I-2.5;ye>X+1;ye-=4.5)H()<.45||(D(s(x,V+B/2,(de+ye+se/2)/2),s(.5,B,de-(ye+se/2))),ke.some(le=>Math.abs(ye-le.at.z)<A+se&&Math.abs(V+B/2-le.at.y)<A+B)||qe.push(s(x,V+B/2,ye)),de=ye-se/2);D(s(x,V+B/2,(de+X)/2),s(.5,B,de-X)),W=V+B}D(s(x,(W+r+.5)/2,(I+X)/2),s(.5,r+.5-W,I-X));for(const V of ke){const[de,ye,le,Ye]=[V.at.z-A,V.at.z+A,V.at.y-A,V.at.y+A];for(const j of P.splice(0)){const[re,Le,ut,Ze]=j;if(Le<=de||re>=ye||Ze<=le||ut>=Ye){P.push(j);continue}ut<le&&P.push([re,Le,ut,le]),Ze>Ye&&P.push([re,Le,Ye,Ze]);const wt=Math.max(ut,le),jt=Math.min(Ze,Ye);re<de&&P.push([re,de,wt,jt]),Le>ye&&P.push([ye,Le,wt,jt])}}for(const[V,de,ye,le]of P)de-V>.01&&le-ye>.01&&Y(s(x,(ye+le)/2,(V+de)/2),s(.5,le-ye,de-V))}const me=X,He=[-20,0,20].map((A,P)=>({at:s(A,53,me),angle:P*.7,speed:(P%2?-1:1)*(.2+.04*P),on:!0,run:1})),Et=s(.12,-.28,1).normalize();{const A=2*Ee+1,P=He[0].at.y-A/2,D=He[0].at.y+A/2,H=(B,se,W,V)=>Y(s((B+se)/2,(W+V)/2,me),s(se-B,V-W,.5));H(q,x,-46,P),H(q,x,D,r+.5);let U=q;for(const B of He)H(U,B.at.x-A/2,P,D),U=B.at.x+A/2;H(U,x,P,D)}const ze=(A,P,D,H,U,B)=>{const de=A-D*2/2,ye=P-H*1.3/2,le=(j,re,Le)=>s(de+j*2,U+Le*2,ye+re*1.3),Ye=B;if(f(A,U+B*2/2,P)){l=c;for(let j=0;j<=D;j++)for(let re=0;re<=H;re++)j>0&&j<D&&re>0&&re<H||p(le(j,re,0),le(j,re,Ye),.07);for(let j=3;j<=Ye;j+=3){for(const re of[0,H])p(le(0,re,j),le(D,re,j),.07),p(le(0,re,j).add(s(0,.03,re?-.55:.55)),le(D,re,j).add(s(0,.03,re?-.55:.55)),1,.05),j/3%2?p(le(0,re,j-3),le(D,re,j),.06):p(le(D,re,j-3),le(0,re,j),.06);for(const re of[0,D])p(le(re,0,j),le(re,H,j),.07),p(le(re,0,j).add(s(re?-.55:.55,.03,0)),le(re,H,j).add(s(re?-.55:.55,.03,0)),.05,1)}l=o;return}for(let j=0;j<=D;j++)for(let re=0;re<=H;re++)j>0&&j<D&&re>0&&re<H||p(le(j,re,0),le(j,re,Ye),.05);for(let j=1;j<=Ye;j++){for(let re=0;re<D;re++)p(le(re,0,j),le(re+1,0,j),.05),p(le(re,H,j),le(re+1,H,j),.05);for(let re=0;re<H;re++)p(le(0,re,j),le(0,re+1,j),.05),p(le(D,re,j),le(D,re+1,j),.05);if(j%3===0){for(let re=0;re<D;re++)for(const Le of[0,H]){const ut=le(re,Le,j),Ze=le(re+1,Le,j),wt=Le?-.55:.55;p(ut.clone().add(s(0,.03,wt)),Ze.clone().add(s(0,.03,wt)),1,.04)}for(let re=0;re<H;re++)for(const Le of[0,D]){const ut=le(Le,re,j),Ze=le(Le,re+1,j),wt=Le?-.55:.55;p(ut.clone().add(s(wt,.03,0)),Ze.clone().add(s(wt,.03,0)),.04,1)}}if(j%2){for(let re=j%4===1?0:1;re<D;re+=2)p(le(re,0,j-1),le(re+1,0,j),.045),p(le(re,H,j-1),le(re+1,H,j),.045);for(let re=j%4===1?0:1;re<H;re+=2)p(le(0,re,j-1),le(0,re+1,j),.045),p(le(D,re,j-1),le(D,re+1,j),.045)}}};ze(M,-6,3,4,-20,16),ze(28,-21,3,4,-12,22),ze(-M,-36,3,4,4,10),ze(44,24,3,4,-30,14),ze(-28,24,3,4,-24,26),ze(-44,-21,3,4,-40,30),ze(-28,-51,3,4,0,18),ze(28,54,3,4,-16,24),ze(-M,39,3,4,-36,20),ze(-60,54,3,4,-10,28),ze(44,-66,3,4,-20,22),ze(M,-51,3,4,10,14),ze(M,-21,3,4,0,12),ze(-M,-6,3,4,-14,11),ze(-M,24,3,4,-8,8);const ot=[{x:M+2.4,z:-1.2,lo:-18,hi:44,speed:.7,phase:0},{x:28-4.2,z:-21,lo:-10,hi:56,speed:1,phase:2.5},{x:-28+4.2,z:24,lo:-24,hi:50,speed:.8,phase:7},{x:-44+4.2,z:-21,lo:-36,hi:40,speed:.9,phase:3.5},{x:-M-2.4,z:-21,lo:-30,hi:40,speed:.6,phase:5}],ct=A=>Math.sign(w.reduce((P,D)=>Math.abs(D-A.x)<Math.abs(P-A.x)?D:P)-A.x);for(const A of ot){const D=[s(-.4,0,-.4),s(.4,0,-.4),s(.4,0,.4),s(-.4,0,.4)];for(let U=-45,B=0;U<A.hi+6;B++){const se=f(A.x,U,A.z),W=se?4.5:1.5,V=Math.min(A.hi+6,U+W);l=se?c:o;for(const de of D)p(s(A.x+de.x,U,A.z+de.z),s(A.x+de.x,V,A.z+de.z),se?.08:.06);for(let de=0;de<4;de++){const ye=D[de],le=D[(de+1)%4];p(s(A.x+ye.x,U,A.z+ye.z),s(A.x+le.x,U,A.z+le.z),se?.06:.04),B%2===de%2&&p(s(A.x+ye.x,U,A.z+ye.z),s(A.x+le.x,V,A.z+le.z),se?.05:.03)}U=V}l=c;const H=ct(A);for(let U=-40;U<A.hi;U+=9)p(s(A.x+H*.4,U,A.z),s(A.x+H*2,U,A.z),.06);l=o}const pe=[];l=pe;for(const A of ot){const P=-ct(A),D=A.x-P*.4,H=A.z,U=A.lo-2,B=A.hi+4;for(const V of[-.22,.22])p(s(D-P*.12,U,H+V),s(D-P*.12,B,H+V),.05,.02);for(let V=U+.3;V<B;V+=.3)p(s(D-P*.12,V,H-.22),s(D-P*.12,V,H+.22),.025);const se=[[.12,-.36],[.5,-.36],[.78,-.16],[.78,.16],[.5,.36],[.12,.36]];for(let V=U+2.2;V<B;V+=.9)for(let de=0;de<se.length-1;de++)p(s(D-P*se[de][0],V,H+se[de][1]),s(D-P*se[de+1][0],V,H+se[de+1][1]),.04,.008);for(const V of[1,2,3,4])p(s(D-P*se[V][0],U+2.2,H+se[V][1]),s(D-P*se[V][0],B,H+se[V][1]),.03,.006);const W=A.x+P*1.25;for(let V=A.lo;V<=A.hi;V+=6){const de=A.z+1.15,ye=de+1.5,le=W-.8,Ye=W+.8;for(const re of[le,Ye])p(s(re,V-.06,de),s(re,V-.06,ye),.06,.12);for(const re of[de,ye])p(s(le,V-.06,re),s(Ye,V-.06,re),.06,.12);for(let re=le+.1;re<Ye;re+=.1)p(s(re,V-.02,de),s(re,V-.02,ye),.012,.03);const j=(re,Le)=>{const ut=Math.max(1,Math.round(re.distanceTo(Le)/.75));for(let Ze=0;Ze<=ut;Ze++){const wt=re.clone().lerp(Le,Ze/ut);p(wt,wt.clone().setY(V+1.1),.035)}for(const Ze of[1.1,.55])p(re.clone().setY(V+Ze),Le.clone().setY(V+Ze),.035);p(re.clone().setY(V+.07),Le.clone().setY(V+.07),.01,.14);for(let Ze=0;Ze<ut;Ze++)p(re.clone().lerp(Le,Ze/ut).setY(V+.14),re.clone().lerp(Le,(Ze+1)/ut).setY(V+.55),.015)};j(s(le,V,de),s(le,V,ye)),j(s(le,V,ye),s(Ye,V,ye)),j(s(Ye,V,ye),s(Ye,V,de)),p(s(le,V+1.1,de),s(Ye,V+1.1,de),.03),p(s(le,V+.2,de),s(Ye,V+.2,de),.03),p(s(le,V+.2,de),s(Ye,V+1.1,de),.015),p(s(Ye,V+.2,de),s(le,V+1.1,de),.015);for(const re of[de+.1,ye-.1])p(s(A.x,V-1.2,A.z+.4),s(W,V-.1,re),.04)}}for(const A of[-M,M]){const P=A-Math.sign(A)*2.2;for(const D of[-6,12]){const H=y[0]+2,U=y[y.length-1]-2;for(const B of[-.6,.6]){p(s(P+B,D+.55,H),s(P+B,D+.55,U),.035),p(s(P+B,D+.2,H),s(P+B,D+.2,U),.01,.15);for(let se=H,W=0;se>U+1.5;se-=1.5,W++)p(s(P+B,D+(W%2?1.1:.2),se),s(P+B,D+(W%2?.2:1.1),se-1.5),.015)}for(let B=H-.15;B>U;B-=.15)p(s(P-.6,D+.03,B),s(P+.6,D+.03,B),.012,.03)}}l=o;const Ae=Wf(new mn({color:2829874,roughness:.62,metalness:.55})),Pe=new mn({color:2829874,roughness:.62,metalness:.55}),Be=[],Fe=[],st=new ln(1,1,1),Ke=n==="lit"?Ae:new ii({color:789775}),ft=(A,P,D,H=Ae)=>{const U=new Map,B=new L;for(const se of A){B.setFromMatrixPosition(se);const W=`${Math.floor(B.x/P.x)},${Math.floor(B.y/P.y)},${Math.floor(B.z/P.z)}`;U.has(W)||U.set(W,[]),U.get(W).push(se)}for(const se of U.values()){const W=new Cs(st,H,se.length);H===Ae&&Be.push(W),D?.push(W),se.forEach((V,de)=>W.setMatrixAt(de,V)),W.instanceMatrix.needsUpdate=!0,W.computeBoundingSphere(),W.castShadow=W.receiveShadow=!0,W.matrixAutoUpdate=!1,W.userData.still=!0,W.onBeforeRender=V=>{const de=V.getRenderTarget();de&&!sp.has(de)&&(W.userData.n=W.count,W.count=0)},W.onAfterRender=()=>{W.userData.n!==void 0&&(W.count=W.userData.n,delete W.userData.n)},a.add(W)}return U.size};ft(o,s(16,24,15),Fe),ft(c,s(64,80,60),Fe,Ke);const dt=[];ft(pe,s(32,48,30),dt);for(const A of dt)A.visible=!1,A.castShadow=!1;ft(ne,s(400,400,400));const bt=[];{const A=Wf(new mn({color:3882820,roughness:.55,metalness:.6})),P=new mn({color:1842721,roughness:.7,metalness:.4,transparent:!0,opacity:.55}),D=new ii({color:16756832}),H=new ln(1,1,1),U=(B,se,W,V,de,ye,le,Ye)=>{const j=new At(H,se);j.position.set(W,V,de),j.scale.set(ye,le,Ye),j.castShadow=j.receiveShadow=se!==P,B.add(j)};for(const B of ot){const se=new rn,W=1.5,V=2.2,de=2.3;U(se,A,0,0,0,W,.12,V),U(se,A,0,de,0,W,.08,V);for(const[le,Ye]of[[-1,-1],[1,-1],[1,1],[-1,1]])U(se,A,le*W/2,de/2,Ye*V/2,.06,de,.06);for(const le of[1.1])U(se,A,0,le,-V/2,W,.05,.05),U(se,A,0,le,V/2,W,.05,.05),U(se,A,-W/2,le,0,.05,.05,V),U(se,A,W/2,le,0,.05,.05,V);U(se,P,0,de/2,-V/2,W,de,.02),U(se,P,0,de/2,V/2,W,de,.02),U(se,P,-W/2,de/2,0,.02,de,V),U(se,D,0,de-.1,0,.18,.05,.18);const ye=-ct(B);se.position.set(B.x+ye*(.4+W/2+.1),B.lo,B.z),se.userData.hoist=B,a.add(se),bt.push(se)}}const z=new rn;{const A=new Cs(st,Ae,G.length);G.forEach((H,U)=>A.setMatrixAt(U,H)),A.castShadow=A.receiveShadow=!0;const P=new Wn(.13,.13,.07,18).rotateX(Math.PI/2),D=new mn({color:2763823,roughness:.5,metalness:.8});for(const H of[-.6,.6])for(const U of[-.35,.35]){const B=new At(P,D);B.position.set(e.x+U,F+.13,e.z+H+.13*Math.sign(H)),B.castShadow=!0,z.add(B)}z.add(A),a.add(z)}{const A=new mn({color:3816768,roughness:.45,metalness:.8}),P=new At(new ln(.5,.55,.32),A);P.position.set(e.x,e.y+.12,e.z);const D=new At(new Wn(.2,.2,.12,20),A);D.rotation.x=Math.PI/2,D.position.set(e.x,e.y+.15,e.z),P.castShadow=D.castShadow=!0,z.add(P,D)}const Ht=[],gt=[],Lt=new ln(Ee+.6,2*Ee+.4,.03).translate((Ee+.6)/2,0,0),be=new mn({color:1908515,roughness:.45,metalness:.8,side:ni});let It=!1,je=0;const Je={end:{s:1,to:1,v:0},side:{s:1,to:1,v:0}};{const A=2*Ee+1,P=new Ql().moveTo(-A/2,-A/2).lineTo(A/2,-A/2).lineTo(A/2,A/2).lineTo(-A/2,A/2).closePath();P.holes.push(new $l().absarc(0,0,Ee+.15,0,Math.PI*2,!0));const D=new $o(P,{depth:.5,bevelEnabled:!1,curveSegments:64}),H=new Wn(Ee+.15,Ee+.15,2.6,64,1,!0).rotateX(Math.PI/2),U=Ae.clone();U.side=ni;const B=new ii({color:14673646,fog:!1}),se=new kh(Ee+.2,64),W=new ln(Ee,.3,.3).translate(Ee/2,0,0),V=new Wn(1.3,1.3,2.2,32).rotateX(Math.PI/2),de=new Wn(Ve,Ve,.9,32).rotateX(Math.PI/2),ye=new va(Ve,24,12,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2).scale(1,1,.6),le=Ee-.25,Ye=new Ql().moveTo(Ve*.8,-.5).lineTo(le,-1.3).quadraticCurveTo(le+.35,0,le,1.3).lineTo(Ve*.8,.5).closePath(),j=new $o(Ye,{depth:.06,bevelEnabled:!1,curveSegments:8}).translate(0,0,-.03);let re=!1;const Le=(ut,Ze,wt,jt)=>{const Zt=new At(Ze,wt);return Zt.position.z=jt,Zt.receiveShadow=!0,Zt.castShadow=Zt.userData.still=re&&wt!==B,ut.add(Zt),Zt};for(const ut of[...He,...ke]){const Ze=new rn;Ze.position.copy(ut.at),re=ke.includes(ut),re&&(Ze.rotation.y=-Math.PI/2,Ze.scale.setScalar(Ue)),Le(Ze,D,Ae,-.25),Le(Ze,H,U,-.4),Le(Ze,se,B,-1.8);for(let at=0;at<3;at++)Le(Ze,W,Ae,-.6).rotation.z=Math.PI/2+at*2*Math.PI/3;Le(Ze,V,Ae,-.4),re=!1;const wt=new rn;wt.position.z=.7,Le(wt,de,Ae,0),Le(wt,ye,Ae,.45);for(let at=0;at<ue;at++){const Xe=new rn;Xe.rotation.z=at*2*Math.PI/ue,Le(Xe,j,U,0).rotation.x=Math.PI/6,wt.add(Xe)}wt.rotation.z=ut.angle,Ze.add(wt),Ht.push(wt);const jt=new rn;jt.position.z=-1;const Zt=[];for(let at=0;at<5;at++){const Xe=new rn,sn=new At(Lt,be);sn.position.z=at*.012,Xe.add(sn),jt.add(Xe),Zt.push(sn)}Ze.add(jt),gt.push({side:ke.includes(ut),leaves:Zt}),a.add(Ze)}}const R=(A,P)=>{const D=P*(Ee+.3)-.08,H=(1-P)*.3;for(const U of gt)U.side===A&&U.leaves.forEach((B,se)=>{B.parent.rotation.z=H+se*2*Math.PI/5,B.position.x=D})};R(!1,1),R(!0,1);const S=new ii({color:12897494}),Z=new it(12897494);{const A=new ii({color:14673646,fog:!1}),P=new xa(1,1);for(const[H,U]of Q){const B=new At(P,A);B.scale.set(U-H,J-he,1),B.rotation.x=Math.PI/2,B.position.set((H+U)/2,r+.9,(J+he)/2),a.add(B)}const D=S;for(const H of qe){const U=new At(P,D);U.scale.set(1,1.4,1),U.rotation.y=-Math.PI/2,U.position.set(x+.6,H.y,H.z),a.add(U)}}const Me=r+.7,oe=.6,Se=x-q,Te=1.1,ce=.07,fe=(Q[Q.length-1][1]+1.5-q)/Se,De=(Q[0][0]-2.5-q)/Se;ps.glass.value.set(Q[0][0],Q[Q.length-1][1],he,J);let N=fe,ae=fe,ie=0;const Re=()=>.75*yt.clamp((fe-N)/(fe-De),0,1),ve=new rn,Ne=new mn({color:3422011,roughness:.5,metalness:.75}),Oe=new Cs(new ln(oe+.04,ce,I-X+2),Ne,Math.ceil(Se/oe)+1);Oe.castShadow=!0,Oe.frustumCulled=!1;const lt=new At(new Wn(1,1,I-X+2,48).rotateX(Math.PI/2),Ne);lt.castShadow=!0;const we=new At(new ln(5.2,4.4,I-X+4),new mn({color:2369066,roughness:.6,metalness:.6}));we.position.set(q-2.6,Me+2.3,(I+X)/2),we.castShadow=!0,ve.add(Oe,lt,we),a.add(ve);const et=()=>{const A=N*Se,P=Math.floor(A/oe),D=new Qe;for(let U=0;U<P;U++)Oe.setMatrixAt(U,D.makeTranslation(q+A-(U+.5)*oe,Me,(I+X)/2));Oe.count=P,Oe.instanceMatrix.needsUpdate=!0;const H=Math.sqrt(Te*Te+(1-N)*Se*ce/Math.PI);lt.scale.set(H,1,H),lt.position.set(q-2.6,Me+H-.1,(I+X)/2),lt.rotation.z=-((1-N)*Se)/H,ps.x.value.set(q-1,q+A,.6,A>.05?1:0)};et();let tt;tt=new At(new va(95,32,16),new gn({uniforms:{low:{value:a.fog.color},gain:{value:9}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 low; varying vec3 vDir;
          uniform float gain;
          void main() { gl_FragColor = vec4(low * mix(1.0, gain, smoothstep(-0.05, 0.35, vDir.y)), 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          }`,side:Un,depthWrite:!1,fog:!1})),tt.renderOrder=-1,tt.userData.noAO=!0,a.add(tt);const _e=new nh(15265524,2.2),xt=new fi(s(q,-46,X),s(x,r,I)),Ot=s(.64,1,-.06).normalize();xt.getCenter(_e.target.position),_e.position.copy(_e.target.position).addScaledVector(Ot,200);{const A=new Qe().lookAt(_e.position,_e.target.position,s(0,1,0)).setPosition(_e.position).invert(),P=s(1/0,1/0,1/0),D=s(-1/0,-1/0,-1/0);for(let se=0;se<8;se++){const W=s(se&1?xt.max.x:xt.min.x,se&2?xt.max.y:xt.min.y,se&4?xt.max.z:xt.min.z).applyMatrix4(A);P.min(W),D.max(W)}Object.assign(_e.shadow.camera,{left:P.x,right:D.x,bottom:P.y,top:D.y,near:-D.z-2,far:-P.z+2});const H=Math.min(8192,t),U=D.x-P.x,B=D.y-P.y;_e.shadow.mapSize.set(Math.round(H*U/Math.max(U,B)),Math.round(H*B/Math.max(U,B)))}_e.shadow.camera.updateProjectionMatrix(),_e.shadow.radius=1,_e.shadow.bias=-2e-4,_e.shadow.normalBias=.02,_e.castShadow=!0,_e.shadow.autoUpdate=!1,a.add(_e,_e.target);const tn=new Tn(4,4),di=(A,P)=>{const D=[];a.traverse(B=>{B.castShadow&&!B.userData.still&&(B.castShadow=!1,D.push(B))});const H=[];a.traverse(B=>{const se=B;se.shadow&&se!==_e&&se.shadow.autoUpdate&&(se.shadow.autoUpdate=!1,H.push(se.shadow))}),_e.shadow.needsUpdate=!0;const U=A.getRenderTarget();A.setRenderTarget(tn),A.render(a,P),A.setRenderTarget(U);for(const B of D)B.castShadow=!0;for(const B of H)B.autoUpdate=!0};let un=!0,On=0;const $t=new nh(_e.color,_e.intensity);$t.castShadow=!0,$t.shadow.mapSize.set(2048,2048),Object.assign($t.shadow.camera,{left:-2.2,right:2.2,bottom:-2.2,top:2.2,near:1,far:200}),$t.shadow.camera.updateProjectionMatrix(),$t.shadow.bias=-3e-4,$t.shadow.normalBias=.004,$t.shadow.radius=1,a.add($t,$t.target);const Dt=new ko(15134197,7,0,.06,.55,0);Dt.position.set(-8.5,r-4,9),Dt.target.position.set(0,.4,0),Dt.castShadow=!0,Dt.shadow.mapSize.set(2048,2048),Dt.shadow.camera.near=50,Dt.shadow.camera.far=95,Dt.shadow.bias=-4e-4,Dt.shadow.normalBias=.02;const nn=new ko(10466504,1.6,0,.12,.8,0);nn.position.set(-34,12,-6),nn.target.position.set(0,.5,0);const fn=new ko(14207928,.9,0,.14,.8,0);fn.position.set(32,5,-14),fn.target.position.set(0,.2,0),a.add(Dt,Dt.target,nn,nn.target,fn,fn.target);const Is=(A,P)=>new gn({uniforms:{color:{value:new it(A)},strength:{value:P},time:{value:0},tNoise:{value:qh}},vertexShader:`
        varying vec3 vWorld;
        varying vec3 vNormal;
        varying vec3 vLocal;
        varying float vAlong;
        void main() {
          vLocal = position;
          vAlong = 1.0 - uv.y;
          vec4 w = modelMatrix * vec4(position, 1.0);
          vWorld = w.xyz;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        uniform vec3 color;
        uniform float strength;
        uniform float time;
        varying vec3 vWorld;
        varying vec3 vNormal;
        varying vec3 vLocal;
        varying float vAlong;
        uniform highp sampler3D tNoise;
        float noise(vec3 p) { return texture(tNoise, p / 32.0).r; } // (noise.ts: the same value noise, from a texture)
        void main() {
          vec3 toEye = cameraPosition - vWorld;
          float dist = length(toEye);
          float edge = pow(abs(dot(normalize(vNormal), toEye / dist)), 2.2); // thin at the rim, as a lit column of haze is
          float along = smoothstep(0.0, 0.06, vAlong) * (1.0 - smoothstep(0.3, 1.0, vAlong));
          // streaks that run down the shaft, drifting
          float n = noise(vec3(vLocal.x * 1.6, vLocal.y * 0.05 - time * 0.04, vLocal.z * 1.6)) * 0.6
                  + noise(vec3(vLocal.x * 4.0 + time * 0.1, vLocal.y * 0.2, vLocal.z * 4.0)) * 0.4;
          float a = strength * edge * along * (0.45 + 0.75 * n);
          a *= smoothstep(0.6, 4.0, dist) * (1.0 - 0.7 * smoothstep(25.0, 90.0, dist));
          #ifndef TONE_MAPPING
            // drawn into a target before the tone mapping (the AO pass needs that), where the tone curve's toe no
            // longer swallows the faint rim of each cone: do it here, the faint part gone, the rest brought up
            a = TOE_GAIN * max(a - TOE, 0.0);
          #endif
          gl_FragColor = vec4(color * a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,defines:{TOE:"0.012",TOE_GAIN:"2.8"},transparent:!0,depthWrite:!1,blending:la,side:ni,fog:!1}),dn=[];let pi=1;const Fs=Dt.intensity,Kt=(A,P,D,H,U,B,se)=>{const W=new Wn(H,U,D,40,1,!0);W.translate(0,-D/2,0);const V=Is(B,se);dn.push(V);const de=new At(W,V);de.position.copy(A),de.quaternion.setFromUnitVectors(s(0,-1,0),P.clone().normalize()),de.renderOrder=2,de.userData.noAO=!0,V.userData.strength=se,a.add(de)},kn=Dt.target.position.clone().sub(Dt.position);Kt(Dt.position,kn,kn.length()*1.25,.5,3.6,13161696,.14),Kt(nn.position,nn.target.position.clone().sub(nn.position),48,1.6,4.2,9413816,.08),Kt(s(-34,18,-22),s(1,-.32,.14),50,1.4,3.6,9413816,.07),Kt(fn.position,fn.target.position.clone().sub(fn.position),45,1.4,3.4,13154464,.06);const bs=[];{const A=(()=>{let D=2024;return()=>(D=D*16807%2147483647)/2147483647})(),P=_e.target.position.clone().sub(_e.position).normalize();for(let D=0;D<16;D++){const[H,U]=Q[Math.floor(A()*Q.length)],B=s(H+(U-H)*A(),r,he+(J-he)*A());B.distanceTo(Dt.position)<10||(Kt(B,P,70+30*A(),1+.8*A(),4+3*A(),13161696,.05+.05*A()),bs.push({mat:dn[dn.length-1],x:B.x}))}for(let D=0;D<8;D++){const H=qe[Math.floor(A()*qe.length)],U=s(x-.5,H.y,H.z);U.y>r-10||U.y<-20||Kt(U,s(-1,P.y*.8,P.z).normalize(),40+25*A(),.7,3+2*A(),9413816,.04+.04*A())}}const ai=450,Cn=new Float32Array(ai*3),xs=new Float32Array(ai),Qi=(A,P)=>{const D=P?-6+Math.random()*17:11,H=(Dt.position.y-D)/-kn.y,U=Math.sqrt(Math.random())*.9*(.5+3.1*H/1.25),B=Math.random()*Math.PI*2;Cn[A*3]=Dt.position.x+kn.x*H+Math.cos(B)*U,Cn[A*3+1]=D,Cn[A*3+2]=Dt.position.z+kn.z*H+Math.sin(B)*U,xs[A]=Math.random()*100};for(let A=0;A<ai;A++)Qi(A,!0);const es=new hn;es.setAttribute("position",new yn(Cn,3));const ht=document.createElement("canvas");ht.width=ht.height=32;{const A=ht.getContext("2d"),P=A.createRadialGradient(16,16,0,16,16,16);P.addColorStop(0,"rgba(255,255,255,1)"),P.addColorStop(1,"rgba(255,255,255,0)"),A.fillStyle=P,A.fillRect(0,0,32,32)}const T=new Oo(es,new Zo({size:.022,map:new Yl(ht),color:9081756,transparent:!0,opacity:.32,depthWrite:!1,blending:la}));a.add(T);const k=[];{const A=(()=>{let W=91;return()=>(W=W*16807%2147483647)/2147483647})(),P=[],D=[],H=[],U=[],B=new it;for(const W of h){if(A()>.2)continue;const V=Math.hypot(W.x,W.y,W.z),de=2.4*(.3+.7*A())/(1+(V/60)**2),ye=A();if(ye<.1){H.push(W.x,W.y,W.z),B.set(16722452).multiplyScalar(de*1.3),U.push(B.r,B.g,B.b);continue}B.set(ye<.72?16756832:13623551).multiplyScalar(de),P.push(W.x,W.y,W.z),D.push(B.r,B.g,B.b)}const se=new Yl(ht);for(const[W,V]of[[P,D],[H,U]]){const de=new hn;de.setAttribute("position",new Xt(W,3)),de.setAttribute("color",new Xt(V,3));const ye=new Oo(de,new Zo({size:.8,map:se,vertexColors:!0,transparent:!0,depthWrite:!1,blending:la,fog:!1}));ye.frustumCulled=!1,a.add(ye),k.push(ye)}}const te={time:{value:0},scale:{value:1}},$=()=>new gn({uniforms:te,vertexShader:`
      attribute vec3 color; attribute vec4 beat; // rate (Hz), phase, how much of a beat it is on, 1 if it flickers
      uniform float time, scale; varying vec3 vC;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float d = -mv.z;
        float on = step(fract(time * beat.x + beat.y), beat.z);
        if (beat.w > 0.5) on *= step(0.35, fract(sin(floor(time * 9.0 + beat.y * 40.0) * 12.9898) * 43758.5453));
        // (a point is never under two pixels: smaller than that it is dimmer instead; and the haze, by hand)
        float px = 0.09 * scale * projectionMatrix[1][1] / d; // 9 cm across, in pixels
        gl_PointSize = max(px, 2.0);
        vC = 1.7 * color * on * min(1.0, px * px / 4.0 + 0.3) / (1.0 + (d / 70.0) * (d / 70.0));
      }`,fragmentShader:`
      varying vec3 vC;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        gl_FragColor = vec4(vC * smoothstep(1.0, 0.2, r), 1.0);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1,blending:la});{const A=(()=>{let W=4711;return()=>(W=W*16807%2147483647)/2147483647})(),P=[16756832,16756832,8257440,16726562,13623551,16767370],D=new it,H=W=>{const V=[],de=[],ye=[];W((j,re,Le,ut,Ze,wt,jt,Zt=!1)=>{V.push(j,re,Le),D.set(ut).multiplyScalar(Ze),de.push(D.r,D.g,D.b),ye.push(wt,A(),jt,Zt?1:0)});const le=new hn;le.setAttribute("position",new Xt(V,3)),le.setAttribute("color",new Xt(de,3)),le.setAttribute("beat",new Xt(ye,4));const Ye=new Oo(le,$());return Ye.frustumCulled=!1,Ye},U=()=>P[Math.floor(A()*P.length)],B=H(W=>{for(const V of h){const de=A();if(de<.22)W(V.x,V.y,V.z,U(),1.6,.4+1.2*A(),.5);else if(de<.36){const ye=A()<.5,le=2+Math.floor(A()*2),Ye=3+Math.floor(A()*3);for(let j=0;j<le;j++)for(let re=0;re<Ye;re++){if(A()<.25)continue;const Le=(re-(Ye-1)/2)*.12,ut=A();W(V.x+(ye?Le:.3),V.y+.9+j*.12,V.z+(ye?.3:Le),U(),1.2,.3+2*A(),ut<.45?1:.5,ut>.85)}}}for(const V of ot){const de=-ct(V);for(let ye=V.lo;ye<=V.hi;ye+=6)W(V.x+de*.45,ye+1.2,V.z+.45,8257440,1.4,1,1),W(V.x+de*.45,ye+2.4,V.z+.45,16726562,1.6,.5+A()*.4,.5)}for(const V of[-M,M]){const de=V-Math.sign(V)*2.2;for(const ye of[-6,12])for(let le=y[0]+2-1.5,Ye=0;le>y[y.length-1]-2;le-=4.5,Ye++){const j=A()<.08;W(de+(Ye%2?.6:-.6),ye+1.16,le,16767400,3.2,j?2.5:1,1,j)}}for(const V of ot){const de=-ct(V);for(let ye=V.lo;ye<=V.hi;ye+=6)W(V.x+de*2.05,ye+1.16,V.z+2.65,16767400,3,1,1)}}),se=new Ie;B.onBeforeRender=W=>{te.scale.value=W.getDrawingBufferSize(se).y/2},a.add(B),k.push(B);for(const W of bt){const V=H(de=>{for(let ye=0;ye<5;ye++)de(.7,1.05+ye*.09,-.9,ye===0?16726562:ye%2?8257440:16756832,1.3,1,1);de(0,2.45,0,16756832,2.2,1.4,.5),de(-.7,1.4,.9,13623551,1.2,3,1,!0)});W.add(V),k.push(V)}}const ee={list:He,dir:Et,radius:Ee,hub:Ve,blades:ue,wallZ:me,side:ke,sideScale:Ue,wallX:x,shutter:{end:1,side:1}};return{podSun:$t,moveSun(){un=!0},prepare(A,P){un&&(un=!1,di(A,P))},roof:Dt,left:nn,right:fn,sun:_e,set shaftGain(A){pi=A;for(const P of dn)P.uniforms.strength.value=P.userData.strength*A},air:xt,roofY:r,plainSteel(A){for(const P of Be)P.material=A?Pe:Ae},detail(A){if(dt[0]?.visible!==A)for(const P of dt)P.visible=A},scaffolding(A){for(const P of Fe)P.visible=A;for(const P of k)P.visible=A;un=!0},spare:[Pe],trolley:z,spans:C,get rolling(){return Math.abs(ie)/.06},cages:bt.map(A=>A.position),lifts:bt.map(A=>{const P=A.userData.hoist;return{lo:P.lo,hi:P.hi,at:()=>A.position.y,speed:()=>A.userData.hand?.v??0,link:()=>{A.userData.hand??={push:0,v:0}},push:D=>{A.userData.hand&&(A.userData.hand.push=D)}}}),fans:ee,fanShutter(A,P){(A?Je.side:Je.end).to=P?1:0},follow(A){$t.color.copy(_e.color),$t.intensity=_e.intensity;const P=_e.position.clone().sub(_e.target.position).normalize();$t.target.position.copy(A),$t.position.copy(A).addScaledVector(P,120)},roofOpen(A){ae=A?De:fe},roofSet(A){N=ae=A?De:fe,ie=0,et()},get open(){return Re()},liftsRun(A){It=A},update(A,P){if(te.time.value=A,It&&(je+=P),k[1].material.opacity=.25+.75*(.5+.5*Math.sin(A*1.3))**2,N!==ae||ie){const U=ae-N,B=.012,W=Math.sign(U)*Math.min(.06,Math.sqrt(2*B*Math.abs(U)));ie+=yt.clamp(W-ie,-B*P,B*P),N=yt.clamp(N+ie*P,0,1),Math.abs(U)<1e-4&&Math.abs(ie)<.001&&(N=ae,ie=0),et(),((On-=P)<=0||N===ae)&&(On=.5,un=!0)}for(const[U,B]of[[!1,Je.end],[!0,Je.side]]){if(B.s===B.to&&!B.v)continue;const se=B.to-B.s,W=1.6,de=Math.sign(se)*Math.min(.55,Math.sqrt(2*W*Math.abs(se)));B.v+=yt.clamp(de-B.v,-W*P,W*P),B.s=yt.clamp(B.s+B.v*P,0,1),Math.abs(se)<.001&&Math.abs(B.v)<.02&&(B.s=B.to,B.v=0),R(U,B.s)}ee.shutter.end=Je.end.s,ee.shutter.side=Je.side.s;const D=_e.position.clone().sub(_e.target.position).normalize();ps.sun.value.set(D.x,D.y,D.z,Me);const H=yt.smoothstep(Dt.position.x,q+N*Se-1.5,q+N*Se+1.5);Dt.intensity=Fs*H,dn[0].uniforms.strength.value=dn[0].userData.strength*pi*H,S.color.copy(Z).multiplyScalar(.12+.88*Re());for(let U=1;U<dn.length;U++)dn[U].uniforms.strength.value=dn[U].userData.strength*pi*(.12+.88*Re());for(const U of bs)U.mat.uniforms.strength.value=U.mat.userData.strength*pi*yt.smoothstep(U.x,q+N*Se-1.5,q+N*Se+1.5);tt.material.uniforms.gain.value=a.fog.far;for(const U of dn)U.uniforms.time.value=A;[...He,...ke].forEach((U,B)=>{U.run+=((U.on?1:0)-U.run)*Math.min(1,P*.35),U.angle+=U.speed*U.run*P,Ht[B].rotation.z=U.angle});for(const U of bt){const B=U.userData.hoist,se=U.userData.hand;if(se){se.v+=(se.push*1.2-.8*se.v)*P,U.position.y=yt.clamp(U.position.y+se.v*P,B.lo,B.hi),(U.position.y===B.lo||U.position.y===B.hi)&&(se.v=0);continue}const W=B.hi-B.lo,V=W/B.speed,de=2*V+16,ye=(je+B.phase*10)%de,le=ye<V?ye/V:ye<V+8?1:ye<2*V+8?1-(ye-V-8)/V:0;U.position.y=B.lo+W*le*le*(3-2*le)}for(let U=0;U<ai;U++){const B=xs[U];Cn[U*3]+=Math.sin(A*.3+B)*.05*P,Cn[U*3+1]-=(.03+.03*Math.sin(B))*P,Cn[U*3+2]+=Math.cos(A*.27+B*1.3)*.05*P,Cn[U*3+1]<-6&&Qi(U,!1)}es.attributes.position.needsUpdate=!0}}}const ti=new URLSearchParams(location.search),Zf=new Set((ti.get("no")??"").split(",").map(a=>a.trim()).filter(Boolean));ti.has("clean")&&document.body.classList.add("clean");ti.has("silk")?$f(()=>import("./silk-CgPzd3hO.js"),[]):pS();function pS(){const t=.008333333333333333,n=document.querySelector("#c"),i=new J_({canvas:n,antialias:!0,powerPreference:"high-performance"});i.toneMapping=tc,i.toneMappingExposure=1.05,i.shadowMap.enabled=!0,i.shadowMap.type=tr,i.transmissionResolutionScale=.35;const s=new _d;s.background=new it(658449);const r=9;s.fog=new Nh(658449,.08,r);const o=new Sr(i);s.environment=o.fromScene(new NM,.04).texture,s.environmentIntensity=.18;let c=ti.has("debug"),l=!1,h=null,u=null;const f=K=>setTimeout(()=>{u?.green()&&h?.ok()},K),d=(()=>{const K=document.querySelector(".controls"),xe=K.querySelector('[data-ctl="roof"]'),$e=xe.querySelector(".light");xe.addEventListener("click",()=>{c=!c,Xe?.roofOpen(c),bt("roof")});const pt=["end"].map(Ft=>{const vt=K.querySelector(`[data-ctl="fans-${Ft}"]`),Ut=vt.querySelector(".blades");let Jt=!0;const Dn=Ln=>{Jt=Ln,Xe?.fanShutter(!1,Jt),vt.setAttribute("aria-pressed",String(Jt))};return vt.addEventListener("click",()=>{Dn(!Jt),bt("fans")}),{show:Ln=>{Ut.style.opacity=(.18+.82*Ln).toFixed(2)},set:Dn}}),_t=K.querySelector('[data-ctl="rail"]'),zt=_t.querySelector(".car");_t.addEventListener("click",()=>{l=!l,_t.setAttribute("aria-pressed",String(l)),l&&(dn=Math.max(dn,fn[1][0])),bt("rail")});const We=K.querySelector('[data-ctl="eye"]');We.addEventListener("click",()=>{oe||me?Je():dt()});let Mt=null;const St=K.querySelector('[data-ctl="sound"]');let Nt=ti.has("sound");St.setAttribute("aria-pressed",String(Nt));const Gt=()=>{if(Nt){if(!h)try{h=new lS}catch{return}h.muted=!1,!h.running&&!document.hidden&&h.ac.resume().catch(()=>{})}};for(const Ft of["pointerdown","keydown"])window.addEventListener(Ft,Gt,{capture:!0});return St.addEventListener("click",()=>{if(Nt=!Nt,St.setAttribute("aria-pressed",String(Nt)),Nt)Gt();else if(h){h.muted=!0;const Ft=h;setTimeout(()=>{Nt||Ft.ac.suspend().catch(()=>{})},1500)}}),document.addEventListener("visibilitychange",()=>{h&&(document.hidden?h.ac.suspend().catch(()=>{}):Nt&&h.ac.resume().catch(()=>{}))}),{rail(Ft){zt.setAttribute("transform",`translate(${(Ft*6).toFixed(2)} 0)`)},eye(Ft){Ft!==Mt&&We.setAttribute("aria-pressed",String(Mt=Ft))},fans(Ft){pt[0].show(Ft)},fansOpen(){pt[0].set(!0)},roof(Ft,vt){$e.style.opacity=(.22+.78*Ft).toFixed(2),xe.setAttribute("aria-pressed",String(vt))}}})(),g=new G0(13160664,328966,.22);s.add(g);const v=new Jn(40,1,.1,140),p=new ZM(i,s);sp.add(p.target);const m=p.depth,_=new Li(s,v,1,1,{depthTexture:m});let M=!1;_.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.5,scale:1.7,samples:16}),_.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),_.blendIntensity=.85;{const K=_.setSize.bind(_);_.setSize=(xe,$e)=>K(Math.ceil(xe/2),Math.ceil($e/2))}p.insert(_,0),p.insert(new GM,1);const x=Math.max(0,+(ti.get("dof")??1)),E=new $M(v,()=>m);E.enabled=!1,p.insert(E,1);const w=new Er(-1,1,1,-1,.1,100);let b=v,y=!1,O=1;const C={yaw:-.52,pitch:-.77,radius:16,target:new L(1.08,2.1,-1.14)},F=yt.degToRad,G=(K,xe)=>({...K,yaw:K.yaw+F(xe)}),q={yaw:.15,pitch:-.12,radius:3.4,target:new L(.35,.55,.1)},I={yaw:Math.PI+.7,pitch:-.45,radius:6.5,target:new L(0,1.2,0)},X={yaw:2.4,pitch:.6,radius:6.5,target:new L(0,.9,-.2)},ne={yaw:.26,pitch:.05,radius:6.3,target:new L(.1,.22,0)},Y={yaw:-.51,pitch:-.38,radius:9,target:new L(.9,.64,-.8)},ge=[{from:C,to:G(C,20),s:22,ease:"both"},{from:q,to:G(q,7),s:4.5,ease:"even"},{from:I,to:G(I,-7),s:4.5,ease:"even",fit:!0},{from:G(X,-3),to:G(X,3),s:4.5,ease:"even",fit:!0},{from:G(Y,-9),to:Y,s:6,ease:"end"}],J=[[4.5,()=>{c=!0,Xe?.roofOpen(!0)}]],he=Math.max(.5,+(ti.get("cut")??3)||3),Q=(K,xe,$e,pt,_t,zt,We,Mt)=>({yaw:K,pitch:xe,radius:$e,target:new L(pt,_t,zt),s:We,fov:Mt}),Ee=(K,xe,$e,pt,_t,zt=!1)=>({yaw:0,pitch:0,radius:12,target:new L().fromArray($e),s:pt,fov:_t,wide:!0,walk:zt,fly:{a:new L().fromArray(K),b:new L().fromArray(xe)}}),Ve=[Q(.05,.04,2.9,.45,.9,.1,.55),Q(.4,-.35,3.3,.3,-.5,.2,.6),Ee([9.8,-5.2,7.5],[9.8,-5.2,3.2],[0,.6,0],1.4,40,!0),Q(-Math.PI/2,0,11.5,0,.4,0,1.15,30),Q(-.3,.5,2.7,0,1.1,.1,.55),{...X,s:.9},Ee([15.6,-3.2,-1.2],[15.6,3.2,-1.2],[0,.6,0],1.4,36),Q(Math.PI/2+.1,.1,3.4,0,.95,-.2,.55),{...C,s:1.35},Q(-.95,-.18,3.5,-.35,.45,.25,.55),Q(-.12,.02,2.2,.15,.45,.6,.5),Ee([-4.5,-7,3],[2.5,-7,4.5],[0,.3,0],1.3,46),{...I,s:.95},Q(Math.PI-.3,-.15,2.7,0,.3,-.5,.55),Q(.85,-.08,15,0,.2,0,1.1,24),Ee([-14.4,-.4,-4.05],[-10.6,-.4,-4.05],[0,.5,0],1.4,38,!0),Q(.95,.12,2.5,.5,.15,.3,.5),Q(.6,-.5,5.5,0,.1,0,.8),Ee([10.5,11.8,2.2],[6.5,11.8,2.2],[0,2.6,0],1.35,44),Q(.35,.5,11,0,-.8,0,1.3,45),Q(1.2,-.5,2.9,0,-1.1,0,.55),Q(.3,-.85,3.6,0,-.7,0,.6,55),Ee([2.5,-6.5,9],[2.5,1.5,9],[0,.5,0],1.4,40),Q(2.6,.3,10,0,0,0,1.15,35),Q(1.45,-.05,3.2,.6,.2,0,.55),Q(-.7,-.3,5.2,0,.3,0,.8),Q(0,-.05,13,0,.2,0,1.1,20),Ee([-9.8,-5.2,-8.5],[-9.8,-5.2,-3.6],[0,.6,0],1.4,40,!0),Q(-1.3,-.75,3.2,-.3,-.3,0,.6,55),Ee([3.4,7.5,1.7],[1.3,7.5,2],[0,.8,0],1.3,48),Q(-2.3,-.5,9,0,.8,0,1.15),Ee([12,-2.5,-6],[12,3,-6],[0,.5,0],1.4,40),Q(.6,.35,5.5,0,.3,0,.8),Ee([4.5,-2,-11],[-1.5,-1.5,-11.5],[0,.6,0],1.35,40)];for(const K of Ve)K.s*=K.fly?1.5:K.radius>=9?1.35:1;const ue=[[4,Ee([-8,0,-8],[8,0,-8],[0,50,-72],2.2,42)],[9,Ee([6,-2,16],[6,-2,2],[-10,75,-20],2.3,55)],[14,Ee([30,-8,12],[30,0,12],[15.7,-2,-1.2],2.2,40)],[21,Ee([-18,6,12],[-18,6,2],[-60,14,-34],2.2,38)],[26,Ee([-6,14,10],[6,14,10],[-40,78,-10],2.3,48)],[31,Ee([5,-6,-10],[-5,-6,-10],[0,53,-72],2,34)]],Ue=new Set(ue.map(([,K])=>K));ue.reverse().forEach(([K,xe])=>Ve.splice(K,0,xe));const ke={roof:[{...Q(.3,-.85,4.2,0,-.4,0,1.1,55),wide:!0},{...Q(2.6,-.8,9,0,2.6,0,1.1,50),wide:!0},{...C,s:1.2,wide:!0},{...Q(-1.2,-.8,7,0,1.5,0,1.1,50),wide:!0},{...Q(.9,-.7,13,0,2.5,0,1.2,44),wide:!0},{...Q(-2.6,-.82,5.5,0,.5,0,1.1,55),wide:!0}],fans:[{...Q(0,-.42,13,0,.6,0,1.1),wide:!0},{...Q(-.24,-.58,15,.3,1.6,-.4,1.1),wide:!0},{...Q(.4,-.5,9.5,0,2.2,0,1.1,50),wide:!0},{...Q(.2,-.36,8,0,1.2,0,1.1,46),wide:!0},{...Q(.3,-.62,11.5,0,1.2,0,1.1,46),wide:!0},{...Q(-.35,-.3,6.5,0,1.6,0,1,50),wide:!0}],rail:[{...Q(.15,-.22,14,0,4.4,0,1.3,46),wide:!0,fixed:!0},{...Q(-.6,-.3,13,0,3.3,0,1.3),wide:!0,fixed:!0},{...Q(Math.PI/2-.3,-.18,13,0,4.2,0,1.3,46),wide:!0,fixed:!0},{...Q(.5,-.4,11,0,3.5,0,1.3,50),wide:!0,fixed:!0},{...Q(-.2,-.1,15.5,0,4.2,0,1.3,40),wide:!0,fixed:!0},{...Q(-Math.PI/2+.35,-.3,11,0,3.6,0,1.3,48),wide:!0,fixed:!0}]},qe=()=>v.aspect<.85?Math.min(1.6,(.85/v.aspect)**.6):1;let me=null,He=[];const Et=new L,ze=()=>me.q??Ve[me.i],ot=30,ct=new Map,pe=(K,xe)=>Math.round(K/xe),Ae=K=>{const xe=K.fly;if(xe)return`f${pe(xe.a.x,1.5)},${pe(xe.a.y,1.5)},${pe(xe.a.z,1.5)},${pe(xe.b.x,1.5)},${pe(xe.b.y,1.5)},${pe(xe.b.z,1.5)}`;const $e=Math.atan2(Math.sin(K.yaw),Math.cos(K.yaw));return`${pe($e,.25)},${pe(K.pitch,.2)},${pe(K.radius,1)},${pe(K.target.x,.5)},${pe(K.target.y,.5)},${pe(K.target.z,.5)}`},Pe=()=>performance.now()/1e3,Be=K=>ct.get(Ae(K))??-1e9,Fe=K=>Pe()-Be(K)>ot,st=K=>{for(let xe=0;xe<Ve.length&&!Fe(Ve[K]);xe++)K=(K+1)%Ve.length;return K};let Ke=-1;const ft=()=>{me&&(He.length?me.q=He.shift():me.q?(me.q=null,me.i=st(me.i)):me.i=st((me.i+1)%Ve.length),me.t=0,me.n++,Et.copy(Kt),j=!0)},dt=()=>{be=null,Oe=null,ie=Re=0,He=[],me={t:0,i:st((Ke+1)%Ve.length),n:0,q:null},Et.copy(Kt),j=!0},bt=K=>{me&&(He=[...ke[K]].sort((xe,$e)=>Be(xe)-Be($e)).slice(0,3),me.q||(me.i=(me.i+1)%Ve.length),ft())},z=9,Ht=new L(.74,.2,1.8),gt=new L(.06,.2,-.08),Lt=new L(.06,-.02,-.05);let be=null;const It=Math.tan(yt.degToRad(20)),je=()=>Math.tan(yt.degToRad(v.fov/2))/It,Je=()=>{(me||be)&&(me&&ze().fixed&&Te.add(Et).sub(Kt),ve*=je()),oe=me=be=null},R=()=>{oe=me=null,Oe=null,be={t:0,yaw:N,pitch:ae,radius:ve/je(),target:Te.clone(),fov:v.fov}},S=Math.max(0,+(ti.get("hand")??1));let Z=0;const Me=ti.has("debug");let oe=Me?null:{t:0,on:!1},Se=Me?J.length:0;const Te=(Me?Y:C).target.clone(),ce=new L(.1,.15,0),fe=-.6,De=-.55;let N=Me?Y.yaw:C.yaw,ae=Me?Y.pitch:C.pitch,ie=0,Re=0,ve=Me?Y.radius:C.radius,Ne=7.5,Oe=null;const lt=.06;let we=!0;const et=new Rn,tt=new rn,_e=new rn;tt.add(_e),s.add(tt);let xt=8,Ot=0,tn=.04,di=0,un=0,On=0,$t=.03;const Dt=5,nn=2,fn=[[0,0,0],[8,0,0],[22,Dt,0],[28,Dt,0],[37,Dt,nn],[44,Dt,nn],[53,Dt,0],[58,Dt,0],[84,-Dt,0],[90,-Dt,0],[99,-Dt,nn],[106,-Dt,nn],[115,-Dt,0],[120,-Dt,0],[134,0,0]],Is=(K,xe)=>{const $e=K%fn[fn.length-1][0];let pt=0;for(;fn[pt+1][0]<$e;)pt++;const[_t,zt,We]=fn[pt],[Mt,St,Nt]=fn[pt+1],Gt=yt.smootherstep($e,_t,Mt);return xe.set(zt+(St-zt)*Gt,We+(Nt-We)*Gt,0)};let dn=0;const pi=10;let Fs=!1;const Kt=new L;let kn=0,bs=0;const ai=new L,Cn=new L;let xs=8,Qi=null;const es=[];let ht=null;const T=new Qe,k=new L,te=new L(1,1,1),$=.06,ee=1.9,A=.5,P=7;let D=null;const H=new Rn,U=new L;let B=1,se=.2,W=0,V=!0;const de=1.1,ye=1.32;let le=!1;const Ye=new Qe;let j=!1,re=null,Le=0;const ut=new L,Ze=new L,wt=new L,jt=new L;let Zt=!1;const at=[];let Xe=null;const sn=KM,kt=new Wn(1,1,1,10);kt.translate(0,.5,0);const an=new rn;{const K=($e,pt,_t=0)=>{const zt=new At($e,sn);return zt.position.set(_t,pt,0),zt.castShadow=!0,an.add(zt),zt},xe=($e,pt,_t=20)=>new Wn($e,$e,pt,_t).rotateZ(Math.PI/2);K(new ln(.07,.32,.14),.1),K(new Wn(.085,.085,.07,20),.29),K(new ln(.2,.05,.2),.345);for(const $e of[-.085,.085])K(new ln(.028,.42,.3),.56,$e);K(xe(.13,.1,28),.56),K(xe(.045,.24),.56),K(new ln(.2,.04,.14),.77)}const mi=K=>{const xe=new rn,$e=new At(kt,sn);$e.scale.set(K,1,K);const pt=new At(kt,sn);pt.scale.set(K*1.9,.13,K*1.9),pt.position.y=.04;const _t=pt.clone();return $e.castShadow=pt.castShadow=_t.castShadow=!0,xe.add($e,pt,_t),xe.userData={rod:$e,f1:_t},xe},wa=(K,xe,$e)=>{const pt=$e.clone().sub(xe),_t=pt.length();K.position.copy(xe),K.quaternion.setFromUnitVectors(Cr,pt.divideScalar(_t)),K.userData.rod.scale.y=_t,K.userData.f1.position.y=_t-.17};let Us=null,ts=null,Xh=1;const Rr=[new L,new L,new L,new L];let Ea=[];const Kh=[],hc=new Qe;let Aa=null,Os=null;const uc=new ac(16720912,1.6,2.4,2),fc=new At(new ln(.3,.025,.06),new mn({color:394758,roughness:.6,emissive:16720912,emissiveIntensity:0}));hh.push({material:fc.material,gain:2.5});const ap=K=>{const xe=K%6.5/6.5,$e=xe<.38?xe/.38*.5:.5+(xe-.38)/.62*.5;return(.5-.5*Math.cos(2*Math.PI*$e))**1.4},jh={rest:.06,beat:2.2},Cr=new L(0,1,0),dc=new Rn,Bt=new L,qn=new L,ks=new L;function Jh(K){K.updateWorldMatrix(!0,!0);const xe=new Qe().copy(K.matrixWorld).invert(),$e=new fi,pt=new Qe;return K.traverse(_t=>{const zt=_t;zt.isMesh&&(zt.geometry.computeBoundingBox(),$e.union(zt.geometry.boundingBox.clone().applyMatrix4(pt.multiplyMatrices(xe,zt.matrixWorld))))}),$e}function pc(){D&&D.quaternion.copy(H).multiply(dc.setFromAxisAngle(Cr,B*W))}new Z_().setMeshoptDecoder(LM).load("/codevember-sets/theo/20/cocoon.glb",K=>{const xe=K.scene;jM(xe),JM(xe),s.add(xe),xe.updateWorldMatrix(!0,!0);const $e=vt=>{const Ut=[];return xe.traverse(Jt=>vt.test(Jt.name)&&Ut.push(Jt)),Ut.sort((Jt,Dn)=>Jt.name.localeCompare(Dn.name))};ht=xe.getObjectByName("pod"),D=xe.getObjectByName("door")??null;const pt=xe.getObjectByName("hang"),_t=$e(/^plug[._]?\d+$/),zt=$e(/^socket[._]?\d+$/),We=$e(/^drip[._]?\d+$/),Mt=$e(/^lift[._]?\d+$/),St=Jh(ht);St.getCenter(k),St.getSize(te).multiplyScalar(.5*1.04).addScalar(.07);const Nt=ht.getWorldPosition(new L);pt?pt.getWorldPosition(tt.position):tt.position.set(Nt.x,Nt.y+8,Nt.z);const Gt=Mt.length?Mt[0].getWorldPosition(new L):Nt;xt=xs=tt.position.distanceTo(Gt),ai.copy(tt.position),_e.position.copy(Gt).sub(tt.position),Cn.copy(_e.position).normalize(),tt.updateWorldMatrix(!0,!0),_e.attach(ht),et.copy(ht.quaternion);{ht.updateWorldMatrix(!0,!0);const vt=k.clone().applyMatrix4(ht.matrixWorld),Ut=new L(0,1,0).transformDirection(ht.matrixWorld),Jt=Xn=>Xn===ht||Xn.parent===ht&&/^pod/.test(Xn.name),Dn=new sh(vt,Ut,.05,3).intersectObject(ht,!0).find(Xn=>Jt(Xn.object)),Ln=Dn?ht.worldToLocal(Dn.point.clone()):k.clone().setY(k.y+te.y*.6);fc.position.copy(Ln).setY(Ln.y-.03),uc.position.copy(Ln).setY(Ln.y-.14),ht.add(fc,uc)}ht.traverse(vt=>{/^(body|strap[._]?\d+)$/.test(vt.name)&&(vt.visible=!1)}),hc.copy(ht.matrixWorld).invert(),D&&(u=uS(D)),ts=new oS,ts.mesh.position.copy(gt),ts.mesh.rotation.y=.3,s.add(ts.mesh),ht.attach(ts.mesh),Xe=dS(s,tt.position.clone(),i.capabilities.maxTextureSize,ti.get("steel")),Zf.has("scaffolding")&&Xe.scaffolding(!1);const Ft=new YM(v,Xe.sun,Xe.podSun,()=>b===v?m:null,{roof:Xe.roofY,box:Xe.air,density:.04,fans:Xe.fans});if(p.insert(Ft,1),Os=Ft,ti.has("debug")){const vt=Xe;$f(async()=>{const{tweaks:Ut}=await import("./tweaks-tMOwUYnU.js");return{tweaks:Ut}},[]).then(({tweaks:Ut})=>Ut({renderer:i,scene:s,hemi:g,ao:_,rays:Ft,hall:vt}))}if(ht.traverse(vt=>{vt.isMesh&&(vt.castShadow=vt.receiveShadow=!0)}),Mt.length){_e.add(an);const vt=mi(.032);tt.add(vt),Qi=vt,wa(vt,new L(0,.15,0),_e.position.clone().addScaledVector(Cn,-.8))}if(D){H.copy(D.quaternion),Jh(D).getCenter(U),se=Math.max(.01,U.x*U.x+U.z*U.z);const vt=Ut=>(D.quaternion.copy(H).multiply(dc.setFromAxisAngle(Cr,Ut*.4)),D.updateWorldMatrix(!0,!1),Bt.copy(U).applyMatrix4(D.matrixWorld).distanceTo(qn.copy(k).applyMatrix4(ht.matrixWorld)));B=vt(1)>vt(-1)?1:-1,pc()}_t.forEach((vt,Ut)=>{const Jt=zt[Ut];if(!Jt)return;const Dn=Jt.getWorldPosition(new L);es.push({at:Dn.clone(),live:Dn});const Ln=new tS(Dn,vt,vt.userData.radius??.045,vt.userData.slack??1.1,lh);Ln.mesh.castShadow=!0,at.push(Ln),s.add(Ln.mesh)}),Xe.podSun.shadow.autoUpdate=Xe.roof.shadow.autoUpdate=!1,Xe.liftsRun(!0),Ea=[{kind:"pod",at:{x:0,y:0,z:0}},...Xe.fans.list.map(vt=>({kind:"fan",at:vt.at})),...Xe.cages.map(vt=>({kind:"cage",at:vt})),{kind:"roof",at:{x:0,y:0,z:0}}],HM(s,Xe.spare),Me&&(Xe.roofSet(!0),document.querySelector(".fade")?.remove()),Aa=We[0]??null,Aa&&(Us=new aS(Aa)),Us&&s.add(Us.mesh),(async()=>{const vt=()=>new Promise(Ut=>setTimeout(Ut,0));for(let Ut=0;Ut<400;Ut+=25){for(let Jt=0;Jt<25;Jt++)su(t,0);await vt()}for(const Ut of at)Ut.skin();await vt(),Xe.prepare(i,v),await vt();try{await i.compileAsync(s,v)}catch{}y=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{document.querySelector(".fade")?.classList.add("in"),oe&&(oe.on=!0)}))})()});function rp(K,xe){Bt.set(K[xe],K[xe+1],K[xe+2]).applyMatrix4(T).sub(k).divide(te);const $e=Bt.lengthSq();$e>=1||$e<1e-8||(Bt.divideScalar(Math.sqrt($e)).multiply(te).add(k).applyMatrix4(ht.matrixWorld),K[xe]=Bt.x,K[xe+1]=Bt.y,K[xe+2]=Bt.z)}let wn=null,mc=0,gc=0,Ra=0,Ca=0,Pa=0;const Bs=new Ie,Yh=new sh,Zh=new Ie,$h=K=>(K.project(b),new Ie((K.x*.5+.5)*n.clientWidth,(-K.y*.5+.5)*n.clientHeight)),zi=new Map;let Da=null;const Qh=()=>{const[K,xe]=[...zi.values()];return Math.hypot(K.x-xe.x,K.y-xe.y)||1};let vc=!1;const eu=(K,xe)=>ht?(Zh.set(K/n.clientWidth*2-1,-(xe/n.clientHeight)*2+1),Yh.setFromCamera(Zh,b),Yh.intersectObject(ht,!0)[0]??null):null,tu=(K,xe)=>eu(K,xe)!==null;let zs=!1,bc=null;n.addEventListener("pointerdown",K=>{bc=eu(K.clientX,K.clientY),zs=!!(oe||me)&&!bc,!zs&&(vc=!!be,Je())}),n.addEventListener("wheel",K=>{zs=!!(oe||me)&&!tu(K.clientX,K.clientY),zs||Je()}),n.addEventListener("pointermove",K=>{K.pointerType==="mouse"&&!K.buttons&&n.classList.toggle("on-pod",tu(K.clientX,K.clientY))}),n.addEventListener("pointerdown",K=>{if(zs)return;if(K.pointerType==="touch"){if(zi.set(K.pointerId,{x:K.clientX,y:K.clientY}),zi.size===2){Da={d:Qh(),r:ve},ie=Re=0,(wn==="door"||wn==="pod")&&(Ra=Ot,Ca=tn,Pa=W),wn=null,Oe=null;return}if(zi.size>2)return}if(mc=K.clientX,gc=K.clientY,n.setPointerCapture(K.pointerId),Oe=null,re={x:K.clientX,y:K.clientY,t:performance.now(),stuck:le,onPod:!1},K.button===2||K.shiftKey){wn="pan";return}if(wn="orbit",!ht)return;const xe=bc;if(!xe)return;re.onPod=!0,le&&!vc||(Oe=iu()),h?.startMusic();let $e=xe.object;for(;$e&&$e!==D;)$e=$e.parent;if($e&&D&&V){V=!1,h?.latch(),W=$,Le=.7,Us?.start(),wn=null;return}if($e&&D){wn="door",Pa=W;const pt=D.worldToLocal(xe.point.clone()),_t=$h(xe.point.clone());D.quaternion.copy(H).multiply(dc.setFromAxisAngle(Cr,B*(W+.05))),D.updateWorldMatrix(!1,!1);const zt=$h(pt.applyMatrix4(D.matrixWorld));pc(),D.updateWorldMatrix(!1,!0),Bs.subVectors(zt,_t).divideScalar(.05),Bs.length()<60&&Bs.setLength(60)}else wn="pod",Ra=Ot,Ca=tn}),n.addEventListener("pointermove",K=>{if(zi.has(K.pointerId)&&zi.set(K.pointerId,{x:K.clientX,y:K.clientY}),Da){zi.size>=2&&(ve=yt.clamp(Da.r*Da.d/Qh(),2,16));return}Oe?.tap&&re&&Math.hypot(K.clientX-re.x,K.clientY-re.y)>=8&&(Oe=null);const xe=K.clientX-mc,$e=K.clientY-gc;if(mc=K.clientX,gc=K.clientY,wn==="orbit")ie=-xe*.004,Re=-$e*.004,N+=ie,ae+=Re;else if(wn==="pan"){const pt=2*ve*Math.tan(yt.degToRad(v.fov/2))/n.clientHeight;Te.addScaledVector(Bt.setFromMatrixColumn(v.matrixWorld,0),-xe*pt),Te.addScaledVector(Bt.setFromMatrixColumn(v.matrixWorld,1),$e*pt)}else if(wn==="pod"){const pt=2*ve*Math.tan(yt.degToRad(v.fov/2))/n.clientHeight,_t=(Math.cos(N)*xe+Math.sin(N)*$e)*pt,zt=(-Math.sin(N)*xe+Math.cos(N)*$e)*pt;Ca=yt.clamp(Ca+.3*_t/xt,-lt,lt),Ra=yt.clamp(Ra-.3*zt/xt,-lt,lt)}else wn==="door"&&(le=!1,Pa=yt.clamp(Pa+(xe*Bs.x+$e*Bs.y)/Bs.lengthSq(),$,ee))}),n.addEventListener("contextmenu",K=>K.preventDefault()),n.addEventListener("wheel",K=>{K.preventDefault(),!zs&&(Oe=null,ve=yt.clamp(ve*Math.exp(K.deltaY*.001),2,16))},{passive:!1});const nu=K=>{wn==="door"&&W>=de&&(le=!0,h?.caught()),re&&performance.now()-re.t<400&&Math.hypot(K.clientX-re.x,K.clientY-re.y)<8&&re.onPod&&K.type==="pointerup"&&(re.stuck&&!vc?(le=!0,op()):(Oe=iu(),f(1400))),re=null,wn=null,zi.delete(K.pointerId),zi.size<2&&(Da=null)};n.addEventListener("pointerup",nu),n.addEventListener("pointercancel",nu);const op=()=>{R(),f(2500)};function iu(){return{yaw:ne.yaw,pitch:ne.pitch,radius:ne.radius*qe(),target:ne.target.clone(),rate:3,tap:!0}}function su(K,xe){if(!ht)return;l&&(dn+=K),Is(dn,Kt);const $e=yt.clamp((Kt.x-2*kn+bs)/(K*K),-.3,.3);bs=kn,kn=Kt.x,tt.position.set(ai.x+Kt.x,ai.y,ai.z),xt=xs-Kt.y,_e.position.copy(Cn).multiplyScalar(xt),Qi&&wa(Qi,Bt.set(0,.15,0),qn.copy(_e.position).addScaledVector(Cn,-.8));for(const _t of es)_t.live.set(_t.at.x+Kt.x,_t.at.y,_t.at.z);Xe&&(Xe.trolley.position.x=Kt.x);const pt=9.8/xt;if(wn==="pod"?(un+=(22*(Ra-Ot)-7*un)*K,On+=(22*(Ca-tn)-7*On)*K):we?(un+=(-pt*Ot-1.2*un)*K,On+=(-pt*tn-1.2*On)*K):(un+=(-pt*Ot-.12*un+.004*Math.sin(xe*.47+2))*K,On+=(-pt*tn-.12*On+.005*Math.sin(xe*.31)+.003*Math.sin(xe*.73+1))*K),(!we||l)&&(On-=$e/xt*K),$t+=(we?-.3*di-.8*$t:-.3*di-.15*$t+.004*Math.sin(xe*.19)-.5*On*un)*K,Ot+=un*K,tn+=On*K,di+=$t*K,tt.rotation.set(Ot,0,tn),_e.rotation.y=di,tt.updateMatrixWorld(!0),T.copy(ht.matrixWorld).invert(),D){if(D.getWorldPosition(ut),Zt&&(Bt.subVectors(ut,Ze).divideScalar(K),qn.subVectors(Bt,wt).divideScalar(K),wt.copy(Bt),jt.lerp(qn,.15)),Ze.copy(ut),Zt=!0,V)W=Le=0;else if(wn==="door")Le+=(220*(Pa-W)-30*Le)*K;else{Bt.copy(U).applyMatrix4(D.matrixWorld).sub(ut),qn.set(0,-9.8,0).sub(jt),ks.set(0,1,0).transformDirection(D.matrixWorld);const _t=le?14*(ye-W)-2.4*Le:B*Bt.cross(qn).dot(ks)*(3/(4*se))*.35-P*(W-$);le?Le+=_t*K:Math.abs(Le)<.02&&Math.abs(_t)<A?Le=0:Le+=(_t-Math.sign(Le||_t)*A*.6-.6*Le)*K}W+=Le*K,V?W=0:W<$?(W=$,Le=Math.abs(Le)*.25):W>ee&&(W=ee,Le=-Math.abs(Le)*.2),pc(),D.updateMatrixWorld(!0)}for(const _t of at)_t.step(K,rp)}const Pn=document.querySelector(".debug"),cp=ti.has("settings")||ti.has("debug");let Pr=-1;const lp=Pn&&cp?(()=>{Pn.hidden=!1;const K=Pn.querySelector(".gear"),xe=Pn.querySelector(".menu"),$e=Pn.querySelector(".readout"),pt=[...Pn.querySelectorAll("[data-view]")],_t=[...Pn.querySelectorAll("[data-proj]")],zt=Pn.querySelector("[data-still]"),We=Pn.querySelector("[data-ao]"),Mt=Pn.querySelector("[data-shade]"),St=[...Pn.querySelectorAll("[data-steps]")],Nt=[...Pn.querySelectorAll("[data-steel]")];let Gt=Zf.has("scaffolding")?"off":"grit";const Ft=Pn.querySelector("[data-copy]");Pn.querySelector("[data-blood]").addEventListener("click",()=>{Aa&&(Us?.start(),Oe={yaw:.45,pitch:-.1,radius:.5,target:Aa.getWorldPosition(new L).sub(Kt).add(new L(0,-.07,0))},Kn())});const vt=async()=>{const Ce=(pn,Br=2)=>+pn.toFixed(Br),Bn=pn=>[Ce(pn.x),Ce(pn.y),Ce(pn.z)],wi=ht?Bn(k.clone().applyMatrix4(ht.matrixWorld)):null,$n={eye:{yaw:Ce(N),pitch:Ce(ae),radius:Ce(ve),target:Bn(Te),camera:Bn(v.position),look:Bn(v.getWorldDirection(new L)),fov:v.fov,projection:b===w?"iso":"pers"},pod:{at:wi,swing:Ce(yt.radToDeg(Math.hypot(Ot,tn)),1),twist:Ce(yt.radToDeg(di),1),door:Ce(yt.radToDeg(W),0),doorFree:Fs,still:we},crane:{along:Ce(Kt.x),up:Ce(Kt.y),time:Ce(dn,1),hand:null},screen:{css:[n.clientWidth,n.clientHeight],dpr:devicePixelRatio,fps:Ce(1e3/Hs,0),ms:Ce(Hs,1)},at:new Date().toISOString(),ua:navigator.userAgent},Fa="```json\n"+JSON.stringify($n,null,1)+`
\`\`\`
look(${Ce(N)}, ${Ce(ae)}, ${Ce(ve)})`;let Ms=!1;try{await navigator.clipboard.writeText(Fa),Ms=!0}catch{}if(!Ms){const pn=document.createElement("textarea");pn.value=Fa,pn.setAttribute("readonly",""),Object.assign(pn.style,{position:"fixed",top:"0",left:"0",opacity:"0",userSelect:"text",webkitUserSelect:"text"}),document.body.appendChild(pn),pn.select(),pn.setSelectionRange(0,Fa.length),Ms=document.execCommand("copy"),pn.remove()}Ft.firstChild.textContent=Ms?"Copied":"No clipboard",setTimeout(()=>{Ft.firstChild.textContent="Copy view"},1400)};Ft.addEventListener("click",vt);const Ut=[...Pn.querySelectorAll("[data-ref]")],Jt=document.querySelector(".ref"),Dn=Ce=>{const Bn=new Image;return Bn.src=`/codevember-sets/theo/20/model/ref/${Ce}.webp`,Bn.onload=()=>kr(),Bn},Ln=Dn("sheet"),Xn=Dn("hall"),Or={front:[40,0,280,300],"side-1":[315,0,560,300],side1:[805,0,1045,300],back:[585,0,780,300]};let _s="off";const kr=()=>{if(_s==="off")return;const Ce=Math.min(window.devicePixelRatio,2),Bn=Jt.clientWidth,wi=Jt.clientHeight;Jt.width=Bn*Ce,Jt.height=wi*Ce;const $n=Jt.getContext("2d");$n.setTransform(Ce,0,0,Ce,0,0),$n.fillStyle="#16181b",$n.fillRect(0,0,Bn,wi);const Fa=Na==="side"?`side${Pr}`:Na??"persp",Ms=Or[Fa],pn=Ms?Ln:Xn;if(!pn.complete||!pn.naturalWidth){$n.fillStyle="#f4f4f2",$n.font="600 11px Inter, sans-serif",$n.textAlign="center",$n.fillText("NO REFERENCE: MODEL/REF IS ONLY ON THE DEV SERVER",Bn/2,wi/2);return}const[Br,hu,up,fp]=Ms??[0,0,pn.naturalWidth,pn.naturalHeight],zr=up-Br,Gr=fp-hu,Vr=Math.min((Bn-32)/zr,(wi-32)/Gr);$n.imageSmoothingQuality="high",$n.drawImage(pn,Br,hu,zr,Gr,(Bn-zr*Vr)/2,(wi-Gr*Vr)/2,zr*Vr,Gr*Vr)},au=Ce=>{_s=Ce,document.body.classList.toggle("split-side",Ce==="side"),document.body.classList.toggle("split-down",Ce==="down"),Jt.hidden=Ce==="off",Gs(),kr(),Kn()};window.addEventListener("resize",()=>kr());let Na="persp";const ru="day20.debug.folded",ou=Pn.querySelector(".fold"),Mc=Ce=>{xe.hidden=!Ce,K.hidden=Ce,K.setAttribute("aria-expanded",String(Ce));try{localStorage.setItem(ru,Ce?"0":"1")}catch{}};let cu=!1;try{cu=localStorage.getItem(ru)==="1"}catch{}Mc(!cu);const Kn=()=>{pt.forEach(Ce=>Ce.classList.toggle("on",Oe!==null&&Ce.dataset.view===Na)),_t.forEach(Ce=>Ce.classList.toggle("on",Ce.dataset.proj==="ortho"==(b===w))),zt.classList.toggle("on",we),We.classList.toggle("on",M),Mt.classList.toggle("on",ca.value>.5);for(const Ce of St)Ce.classList.toggle("on",+Ce.dataset.steps===(Os?.steps??24));for(const Ce of Nt)Ce.classList.toggle("on",Ce.dataset.steel===Gt);Ut.forEach(Ce=>Ce.classList.toggle("on",Ce.dataset.ref===_s)),kr()},Ia=Ce=>{if(Ce==="side"&&Na==="side"&&Oe&&(Pr=-Pr),Na=Ce,Ce==="persp"||!ht)ht&&ht.quaternion.copy(et),Oe={yaw:fe,pitch:De,radius:Ne,target:ce.clone()};else{ht.quaternion.identity(),ht.updateWorldMatrix(!0,!1),we=!0,Ot=tn=di=un=On=$t=0;const wi=(Ce==="front"?new L(0,0,1):Ce==="back"?new L(0,0,-1):new L(Pr,0,0)).transformDirection(ht.matrixWorld),$n=k.clone().applyMatrix4(ht.matrixWorld).sub(Kt);Oe={yaw:Math.atan2(wi.x,wi.z),pitch:0,radius:5.8/Math.min(1,v.aspect/.85),target:$n}}Kn()},lu=Ce=>{b=Ce?w:v,Kn()};return K.addEventListener("pointerdown",Ce=>Ce.preventDefault()),K.addEventListener("click",()=>Mc(!0)),ou.addEventListener("pointerdown",Ce=>Ce.preventDefault()),ou.addEventListener("click",()=>Mc(!1)),pt.forEach(Ce=>Ce.addEventListener("click",()=>Ia(Ce.dataset.view))),_t.forEach(Ce=>Ce.addEventListener("click",()=>lu(Ce.dataset.proj==="ortho"))),zt.addEventListener("click",()=>{we=!we,Kn()}),We.addEventListener("click",()=>{M=!M,Kn()}),Mt.addEventListener("click",()=>{ca.value=ca.value>.5?0:1,Kn()}),St.forEach(Ce=>Ce.addEventListener("click",()=>{Os&&(Os.steps=+Ce.dataset.steps),Kn()})),Nt.forEach(Ce=>Ce.addEventListener("click",()=>{Gt=Ce.dataset.steel,Xe?.plainSteel(Gt==="plain"),Xe?.scaffolding(Gt!=="off"),Kn()})),Ut.forEach(Ce=>Ce.addEventListener("click",()=>au(Ce.dataset.ref))),window.addEventListener("keydown",Ce=>{Ce.metaKey||Ce.ctrlKey||Ce.altKey||(Ce.key==="1"?Ia("front"):Ce.key==="3"?Ia("side"):Ce.key==="9"?Ia("back"):Ce.key==="0"?Ia("persp"):Ce.key==="5"?lu(b!==w):Ce.key==="h"||Ce.key==="H"?(we=!we,Kn()):Ce.key==="o"||Ce.key==="O"?(M=!M,Kn()):Ce.key==="m"||Ce.key==="M"?(ca.value=ca.value>.5?0:1,Kn()):Ce.key==="c"||Ce.key==="C"?vt():(Ce.key==="r"||Ce.key==="R")&&au(_s==="off"?"side":_s==="side"?"down":"off"))}),n.addEventListener("pointerdown",()=>queueMicrotask(Kn)),Kn(),{tick(){if(xe.hidden)return;const Ce=yt.radToDeg;$e.textContent=`${(1e3/Hs).toFixed(0)} fps  ${Hs.toFixed(1)} ms  ${i.domElement.width}×${i.domElement.height}  css ${n.clientWidth}×${n.clientHeight} of ${innerWidth}×${innerHeight}
door ${Ce(W).toFixed(0)}°  swing ${Ce(Math.hypot(Ot,tn)).toFixed(1)}°  ${b===w?"iso":"pers"}
eye yaw ${N.toFixed(2)} pitch ${ae.toFixed(2)} r ${ve.toFixed(1)} at ${Te.x.toFixed(2)} ${Te.y.toFixed(2)} ${Te.z.toFixed(2)}`}}})():null;function Gs(){const K=n.clientWidth,xe=n.clientHeight;if(!K||!xe)return;i.setPixelRatio(Math.min(window.devicePixelRatio,2,Math.sqrt(45e5/(K*xe)))*O),i.setSize(K,xe,!1),p.setSize(K,xe),v.aspect=K/xe,v.updateProjectionMatrix();const $e=ve===Ne&&Te.equals(ce);Ne=7.5/Math.min(1,v.aspect/.85),ce.x=.1+.75*yt.clamp((v.aspect-1)/.7,0,1),$e&&(ve=Ne,Te.copy(ce))}window.addEventListener("resize",Gs),new ResizeObserver(()=>Gs()).observe(n),Gs();let Vs=performance.now(),xc=0,Dr=0,Hs=16.7,La=16.7,Lr=0,Nr=0,Ir=0,Fr=1.01;const hp=(K,xe)=>{K>200||(La+=(K-La)*.08,Lr=La>25?Lr+xe:0,Nr=La<17.6?Nr+xe:0,Ir=La<17.6?Ir+xe:0,Ir>15&&(Fr=Math.min(1.01,Fr+.15),Ir=0),Lr>1&&O>.8?(Fr=O,O=Math.max(.8,O*.9),Lr=0,Gs()):Nr>3&&O<1&&O/.9<Fr-.01&&(O=Math.min(1,O/.9),Nr=0,Gs()))};let _c=!1;function Ur(K){if(K-Vs<1e3/62){requestAnimationFrame(Ur);return}if(!y){Vs=K,requestAnimationFrame(Ur);return}Hs+=(K-Vs-Hs)*.05;const xe=Math.min(.05,(K-Vs)/1e3);if(hp(K-Vs,xe),Vs=K,wn!=="orbit"&&(N+=ie,ae+=Re,ie*=.92,Re*=.92),Oe&&Je(),oe?.on){for(oe.t+=xe;Se<J.length&&J[Se][0]<=oe.t;)J[Se++][1]();let We=0,Mt=0;for(;Mt<ge.length-1&&oe.t>We+ge[Mt].s;)We+=ge[Mt++].s;const St=ge[Mt];oe.t-xe<=We&&Mt>0&&(j=!0),ct.set(Ae(St.from),Pe());const Nt=yt.clamp((oe.t-We)/St.s,0,1),Gt=St.ease==="both"?yt.smootherstep(Nt,0,1):St.ease==="end"?1-(1-Nt)*(1-Nt):Nt;N=yt.lerp(St.from.yaw,St.to.yaw,Gt),ae=yt.lerp(St.from.pitch,St.to.pitch,Gt),ve=yt.lerp(St.from.radius,St.to.radius,Gt)*(St.fit?qe():1),Te.lerpVectors(St.from.target,St.to.target,Gt),ie=Re=0,oe.t>We+St.s&&Mt===ge.length-1&&Se>=J.length&&(oe=null,dt())}if(!oe&&Xe&&Se<J.length){for(;Se<J.length;)J[Se++][1]();d.fansOpen()}let $e=null,pt=40;if(be&&ht){be.t+=xe;const We=yt.clamp(be.t/z,0,1),Mt=(vt,Ut)=>yt.smoothstep(We,vt,Ut);Ye.multiplyMatrices(ht.matrixWorld,hc),qn.copy(Lt).applyMatrix4(Ye),Bt.copy(Ht).applyMatrix4(Ye).sub(qn);const St=Bt.length(),Nt=Math.atan2(Bt.x,Bt.z),Gt=Math.asin(Bt.y/St);N=be.yaw+Math.atan2(Math.sin(Nt-be.yaw),Math.cos(Nt-be.yaw))*Mt(0,.7),Te.lerpVectors(be.target,qn.sub(Kt),Mt(0,.65)),ae=yt.lerp(be.pitch,Gt,Mt(.1,.9))-.2*Math.sin(Math.PI*Mt(.05,.85));const Ft=yt.lerp(be.radius,Math.max(be.radius,4.4),Mt(0,.3));ve=yt.lerp(Ft,St,1-(1-Mt(.22,1))**2),pt=yt.lerp(be.fov,28,Mt(.3,1)),ie=Re=0}if(me){me.t+=xe,me.t>=he*ze().s&&ft();const We=ze(),Mt=(We.radius<6||We.radius>=9?.9:1.3)*Math.min(1,(We.fov??40)/40),St=me.t/(he*We.s);ct.set(Ae(We),Pe()),me.q||(Ke=me.i),Te.copy(We.target),We.fly?(Bt.lerpVectors(We.fly.a,We.fly.b,St).sub(qn.copy(Te).add(Kt)),ve=Bt.length(),N=Math.atan2(Bt.x,Bt.z),ae=Math.asin(Bt.y/ve)):(N=We.yaw+F(Mt)*(me.t-he*We.s/2)*(me.n%2?-1:1),ae=We.pitch,ve=We.radius*(We.wide?1:qe())*(We.radius>=6?1.03-.06*St:1)),ie=Re=0,We.fixed&&($e=Et)}Xe?.detail(!!me&&Ue.has(ze()));{const We=be?pt:me?ze().fov??40:40,Mt=be||me?We:v.fov+(We-v.fov)*Math.min(1,xe*4);Math.abs(Mt-v.fov)>.001&&(v.fov=Math.abs(Mt-We)<.02?We:Mt,v.updateProjectionMatrix())}if(d.eye(!!(oe?.on||me||be)),Oe){const We=1-Math.exp(-xe*(Oe.rate??6));N+=Math.atan2(Math.sin(Oe.yaw-N),Math.cos(Oe.yaw-N))*We,ae+=(Oe.pitch-ae)*We,ve+=(Oe.radius-ve)*We,Te.lerp(Oe.target,We),ie=Re=0}!me&&!be&&(ae=yt.clamp(ae,-.85,.6)),ks.copy(Te).add($e??Kt);const _t=me||be?ve:ve/je();v.position.set(Math.sin(N)*Math.cos(ae),Math.sin(ae),Math.cos(N)*Math.cos(ae)).multiplyScalar(_t).add(ks),v.lookAt(ks);{const We=oe?.on||me||be?S*Math.max(yt.clamp((7-ve)/3.5,0,1),me&&ze().walk?.5:0):0;if(Z+=(We-Z)*Math.min(1,xe*3),Z>.001){const Mt=K/1e3,St=(Nt,Gt,Ft)=>.6*Math.sin(Mt*Nt+Ft)+.4*Math.sin(Mt*Gt+Ft*1.7);v.rotateY(Z*(.011*St(.83,1.9,.3)+.0016*Math.sin(Mt*7.1))),v.rotateX(Z*(.009*St(.67,2.3,1.9)+.0016*Math.sin(Mt*8.3+1))),v.rotateZ(Z*.006*St(.41,1.3,4.1)),v.translateX(Z*.02*St(.5,1.1,2.2)),v.translateY(Z*.015*St(.37,.9,5))}}{const We=b===v&&ht&&(oe?.on||me||be)?x*yt.clamp((7-ve)/3.5,0,1):0;if(E.amount=j?We:E.amount+(We-E.amount)*Math.min(1,xe*3),E.enabled=E.amount>.01,E.enabled&&ht){v.updateMatrixWorld();const Mt=Bt.copy(v.position).applyMatrix4(T).sub(k).divide(te),St=qn.set(0,0,-1).transformDirection(v.matrixWorld).transformDirection(T).divide(te),Nt=St.dot(St),Gt=2*Mt.dot(St),Ft=Mt.dot(Mt)-1,vt=Gt*Gt-4*Nt*Ft;let Ut=Math.max(.6,vt>0?(-Gt-Math.sqrt(vt))/(2*Nt):-Gt/(2*Nt));be&&ts&&be.t>z*.45&&(Ut=v.position.distanceTo(ts.mesh.getWorldPosition(ks))),E.focus=j?Ut:E.focus+(Ut-E.focus)*Math.min(1,xe*8)}j=!1}if(b===w){const We=ve*Math.tan(yt.degToRad(v.fov/2));w.top=We,w.bottom=-We,w.left=-We*v.aspect,w.right=We*v.aspect,w.position.copy(v.position),w.quaternion.copy(v.quaternion),w.updateProjectionMatrix()}for(lp?.tick(),xc+=xe;xc>=t;)xc-=t,Dr+=t,su(t,Dr);for(const We of at)We.skin();if(ht&&Xe?.follow(Bt.copy(k).applyMatrix4(ht.matrixWorld)),Xe?.update(Dr,xe),ts?.update(xe,W>.2,K/1e3),Us?.update(xe,v.position,2*Math.tan(yt.degToRad(v.fov/2))/n.clientHeight),Xe){const We=Xe.open;s.fog.far=1+(r-1)*(.08+.92*We),g.intensity=.22*(.15+.85*We),s.environmentIntensity=.18*(.15+.85*We),d.roof(We,c),d.fans(Xe.fans.shutter.end),d.rail(Kt.x/pi),Os&&(Os.fan=3*(.3+.7*We)),Xe.left.intensity=1.6*(.12+.88*We),Xe.right.intensity=.9*(.12+.88*We)}const zt=ap(Dr);uc.intensity=1.2+7*zt;for(const We of hh)We.material.emissiveIntensity=We.gain*(jh.rest+jh.beat*zt);if(h&&Xe&&ht){Bt.copy(k).applyMatrix4(ht.matrixWorld);const We=v.position.distanceTo(Bt),Mt=Rr[3].copy(Bt).project(v).x,St=v.getWorldDirection(qn).y,Nt=Xe.open,Gt=Xe.fans.shutter.end,Ft=Math.max(xe,.001),vt=yt.clamp(W/1.3,0,1);qn.copy(Lt).applyMatrix4(Ye.multiplyMatrices(ht.matrixWorld,hc));const Ut=be?1:1-yt.smoothstep(v.position.distanceTo(qn),1.2,4),Jt=v.getWorldDirection(Rr[0]),Dn=Rr[1].crossVectors(Jt,v.up).normalize();Ea[0].at=Bt,Ea[Ea.length-1].at=Rr[2].set(v.position.x,Xe.roofY,v.position.z);const Ln=Xe.cages.map((Xn,Or)=>{const _s=(Xn.y-(Kh[Or]??Xn.y))/Ft;return Kh[Or]=Xn.y,{at:Xn,speed:_s}});h.update(xe,{dist:We,pan:Mt,up:St,beat:zt,day:Nt,fans:Gt,roll:Xe.rolling,leaf:Math.abs(Gt-Xh)/Ft/.4,door:vt,inside:Ut,eye:v.position,fwd:Jt,right:Dn,places:Ea,cages:Ln,doorSpeed:Le,fanTurns:Xe.fans.list.map(Xn=>Xn.angle)}),Xh=Gt}_.enabled=b===v&&M,Xe?.prepare(i,v),_c=!_c,_c&&Xe&&(Xe.podSun.shadow.needsUpdate=!0,Xe.roof.shadow.needsUpdate=!0),p.render(b),requestAnimationFrame(Ur)}requestAnimationFrame(Ur)}export{Ii as A,hn as B,Qf as C,rn as G,An as H,Oh as L,At as M,Yi as N,Sp as O,Jn as P,hi as R,gn as S,L as V,J_ as W,yn as a,_d as b,Tn as c,Sn as d,Ie as e,xa as f,Gd as g,yt as h,vh as i,Mh as j,_h as k,tc as l};
