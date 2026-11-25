(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const wl="187",ah=0,Zl=1,oh=2,js=1,lh=2,Zr=3,Li=0,wn=1,ni=2,Er=0,Qr=1,Kl=2,Jl=3,Ql=4,ch=5,gr=100,fh=101,uh=102,hh=103,dh=104,ph=200,mh=201,gh=202,_h=203,Nf=204,Uf=205,vh=206,xh=207,Mh=208,Sh=209,yh=210,Eh=211,bh=212,Th=213,wh=214,Co=0,Lo=1,Po=2,es=3,Io=4,Do=5,No=6,Uo=7,Al=0,Ah=1,Rh=2,gi=0,Ff=1,Of=2,Bf=3,Rl=4,zf=5,kf=6,Gf=7,Hf=300,Lr=301,ts=302,Oa=303,Ba=304,ua=1e3,bn=1001,Fo=1002,on=1003,Ch=1004,vs=1005,ln=1006,za=1007,zn=1008,_n=1009,Vf=1010,Wf=1011,ns=1012,Cl=1013,ri=1014,kn=1015,si=1016,Ll=1017,Pl=1018,Pr=1020,Xf=35902,qf=35899,Yf=1021,$f=1022,Gn=1023,Pi=1026,Ri=1027,wa=1028,Il=1029,Ii=1030,Dl=1031,Nl=1033,ea=33776,ta=33777,na=33778,ia=33779,Oo=35840,Bo=35841,zo=35842,ko=35843,Go=36196,Ho=37492,Vo=37496,Wo=37488,Xo=37489,ha=37490,qo=37491,Yo=37808,$o=37809,Zo=37810,Ko=37811,Jo=37812,Qo=37813,jo=37814,el=37815,tl=37816,nl=37817,il=37818,rl=37819,sl=37820,al=37821,ol=36492,ll=36494,cl=36495,fl=36283,ul=36284,da=36285,hl=36286,Lh=3200,pa=0,Ph=1,Ai="",Sn="srgb",ma="srgb-linear",ga="linear",Gt="srgb",ka=7680,Ih=519,Dh=512,Nh=513,Uh=514,Zf=515,Fh=516,Oh=517,Kf=518,Jf=519,Bh=35044,jl="300 es",$n=2e3,is=2001;function zh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){const i=_a("canvas");return i.style.display="block",i}const ec={};function tc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Qf(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function xt(...i){i=Qf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Bt(...i){i=Qf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function br(...i){const e=i.join(" ");e in ec||(ec[e]=!0,xt(...i))}function Gh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Hh={[Co]:Co,[Po]:No,[Io]:Io,[es]:Do,[Lo]:Lo,[No]:Po,[Uo]:Uo,[Do]:es};class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,dl=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function Vh(i,e){return(i%e+e)%e}function Ha(i,e,t){return(1-t)*i+t*e}function Wh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ul(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xh(i,e){if(e.constructor===Float32Array)return i;const t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function qh(i,e){if(e.constructor===Float32Array)return i;const t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}class Nt{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],f=n[r+2],m=n[r+3],h=s[a+0],g=s[a+1],u=s[a+2],M=s[a+3];if(m!==M||c!==h||l!==g||f!==u){let p=c*h+l*g+f*u+m*M;p<0&&(h=-h,g=-g,u=-u,M=-M,p=-p);let d=1-o;if(p<.9995){const y=Math.acos(p),A=Math.sin(y);d=Math.sin(d*y)/A,o=Math.sin(o*y)/A,c=c*d+h*o,l=l*d+g*o,f=f*d+u*o,m=m*d+M*o}else{c=c*d+h*o,l=l*d+g*o,f=f*d+u*o,m=m*d+M*o;const y=1/Math.sqrt(c*c+l*l+f*f+m*m);c*=y,l*=y,f*=y,m*=y}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],f=n[r+3],m=s[a],h=s[a+1],g=s[a+2],u=s[a+3];return e[t]=o*u+f*m+c*g-l*h,e[t+1]=c*u+f*h+l*m-o*g,e[t+2]=l*u+f*g+o*h-c*m,e[t+3]=f*u-o*m-c*h-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(r/2),m=o(s/2),h=c(n/2),g=c(r/2),u=c(s/2);switch(a){case"XYZ":this._x=h*f*m+l*g*u,this._y=l*g*m-h*f*u,this._z=l*f*u+h*g*m,this._w=l*f*m-h*g*u;break;case"YXZ":this._x=h*f*m+l*g*u,this._y=l*g*m-h*f*u,this._z=l*f*u-h*g*m,this._w=l*f*m+h*g*u;break;case"ZXY":this._x=h*f*m-l*g*u,this._y=l*g*m+h*f*u,this._z=l*f*u+h*g*m,this._w=l*f*m-h*g*u;break;case"ZYX":this._x=h*f*m-l*g*u,this._y=l*g*m+h*f*u,this._z=l*f*u-h*g*m,this._w=l*f*m+h*g*u;break;case"YZX":this._x=h*f*m+l*g*u,this._y=l*g*m+h*f*u,this._z=l*f*u-h*g*m,this._w=l*f*m-h*g*u;break;case"XZY":this._x=h*f*m-l*g*u,this._y=l*g*m-h*f*u,this._z=l*f*u+h*g*m,this._w=l*f*m+h*g*u;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],m=t[10],h=n+o+m;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(n>o&&n>m){const g=2*Math.sqrt(1+n-o-m);this._w=(f-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>m){const g=2*Math.sqrt(1+o-n-m);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+m-n-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-r*o,this._w=a*f-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),f=2*(o*t-s*r),m=2*(s*n-a*t);return this.x=t+c*l+a*m-o*f,this.y=n+c*f+o*l-s*m,this.z=r+c*m+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new G,nc=new Tn;class Et{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],m=n[7],h=n[2],g=n[5],u=n[8],M=r[0],p=r[3],d=r[6],y=r[1],A=r[4],b=r[7],L=r[2],T=r[5],_=r[8];return s[0]=a*M+o*y+c*L,s[3]=a*p+o*A+c*T,s[6]=a*d+o*b+c*_,s[1]=l*M+f*y+m*L,s[4]=l*p+f*A+m*T,s[7]=l*d+f*b+m*_,s[2]=h*M+g*y+u*L,s[5]=h*p+g*A+u*T,s[8]=h*d+g*b+u*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],m=f*a-o*l,h=o*c-f*s,g=l*s-a*c,u=t*m+n*h+r*g;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/u;return e[0]=m*M,e[1]=(r*l-f*n)*M,e[2]=(o*n-r*a)*M,e[3]=h*M,e[4]=(f*t-r*c)*M,e[5]=(r*s-o*t)*M,e[6]=g*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Et,ic=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yh(){const i={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Gt&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Gt&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?ga:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ma]:{primaries:e,whitePoint:n,transfer:ga,toXYZ:ic,fromXYZ:rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:Gt,toXYZ:ic,fromXYZ:rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}const It=Yh();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class $h{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ji===void 0&&(ji=_a("canvas")),ji.width=e.width,ji.height=e.height;const r=ji.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_i(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class Fl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xa(r[a].image)):s.push(Xa(r[a]))}else s=Xa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$h.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let Kh=0;const qa=new G;class xn extends Zi{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=bn,r=bn,s=ln,a=zn,o=Gn,c=_n,l=xn.DEFAULT_ANISOTROPY,f=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=fs(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(qa).x}get height(){return this.source.getSize(qa).y}get depth(){return this.source.getSize(qa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Hf;xn.DEFAULT_ANISOTROPY=1;class $t{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],m=c[8],h=c[1],g=c[5],u=c[9],M=c[2],p=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(m-M)<.01&&Math.abs(u-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(m+M)<.1&&Math.abs(u+p)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,b=(g+1)/2,L=(d+1)/2,T=(f+h)/4,_=(m+M)/4,E=(u+p)/4;return A>b&&A>L?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=T/n,s=_/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=T/r,s=E/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=_/s,r=E/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-u)*(p-u)+(m-M)*(m-M)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(p-u)/y,this.y=(m-M)/y,this.z=(h-f)/y,this.w=Math.acos((l+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jh extends Zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new xn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends Jh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jf extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qh extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Wt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,c,l,f,m,h,g,u,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,f,m,h,g,u,M,p)}set(e,t,n,r,s,a,o,c,l,f,m,h,g,u,M,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=f,d[10]=m,d[14]=h,d[3]=g,d[7]=u,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),s=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const h=a*f,g=a*m,u=o*f,M=o*m;t[0]=c*f,t[4]=-c*m,t[8]=l,t[1]=g+u*l,t[5]=h-M*l,t[9]=-o*c,t[2]=M-h*l,t[6]=u+g*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,g=c*m,u=l*f,M=l*m;t[0]=h+M*o,t[4]=u*o-g,t[8]=a*l,t[1]=a*m,t[5]=a*f,t[9]=-o,t[2]=g*o-u,t[6]=M+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,g=c*m,u=l*f,M=l*m;t[0]=h-M*o,t[4]=-a*m,t[8]=u+g*o,t[1]=g+u*o,t[5]=a*f,t[9]=M-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,g=a*m,u=o*f,M=o*m;t[0]=c*f,t[4]=u*l-g,t[8]=h*l+M,t[1]=c*m,t[5]=M*l+h,t[9]=g*l-u,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,g=a*l,u=o*c,M=o*l;t[0]=c*f,t[4]=M-h*m,t[8]=u*m+g,t[1]=m,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=g*m+u,t[10]=h-M*m}else if(e.order==="XZY"){const h=a*c,g=a*l,u=o*c,M=o*l;t[0]=c*f,t[4]=-m,t[8]=l*f,t[1]=h*m+M,t[5]=a*f,t[9]=g*m-u,t[2]=u*m-g,t[6]=o*f,t[10]=M*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jh,e,ed)}lookAt(e,t,n){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),xi.crossVectors(n,Ln),xi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),xi.crossVectors(n,Ln)),xi.normalize(),xs.crossVectors(Ln,xi),r[0]=xi.x,r[4]=xs.x,r[8]=Ln.x,r[1]=xi.y,r[5]=xs.y,r[9]=Ln.y,r[2]=xi.z,r[6]=xs.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],m=n[5],h=n[9],g=n[13],u=n[2],M=n[6],p=n[10],d=n[14],y=n[3],A=n[7],b=n[11],L=n[15],T=r[0],_=r[4],E=r[8],z=r[12],P=r[1],R=r[5],O=r[9],Z=r[13],N=r[2],H=r[6],k=r[10],U=r[14],K=r[3],V=r[7],ne=r[11],se=r[15];return s[0]=a*T+o*P+c*N+l*K,s[4]=a*_+o*R+c*H+l*V,s[8]=a*E+o*O+c*k+l*ne,s[12]=a*z+o*Z+c*U+l*se,s[1]=f*T+m*P+h*N+g*K,s[5]=f*_+m*R+h*H+g*V,s[9]=f*E+m*O+h*k+g*ne,s[13]=f*z+m*Z+h*U+g*se,s[2]=u*T+M*P+p*N+d*K,s[6]=u*_+M*R+p*H+d*V,s[10]=u*E+M*O+p*k+d*ne,s[14]=u*z+M*Z+p*U+d*se,s[3]=y*T+A*P+b*N+L*K,s[7]=y*_+A*R+b*H+L*V,s[11]=y*E+A*O+b*k+L*ne,s[15]=y*z+A*Z+b*U+L*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],m=e[6],h=e[10],g=e[14],u=e[3],M=e[7],p=e[11],d=e[15],y=c*g-l*h,A=o*g-l*m,b=o*h-c*m,L=a*g-l*f,T=a*h-c*f,_=a*m-o*f;return t*(M*y-p*A+d*b)-n*(u*y-p*L+d*T)+r*(u*A-M*L+d*_)-s*(u*b-M*T+p*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-n*(s*f-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],m=e[9],h=e[10],g=e[11],u=e[12],M=e[13],p=e[14],d=e[15],y=t*o-n*a,A=t*c-r*a,b=t*l-s*a,L=n*c-r*o,T=n*l-s*o,_=r*l-s*c,E=f*M-m*u,z=f*p-h*u,P=f*d-g*u,R=m*p-h*M,O=m*d-g*M,Z=h*d-g*p,N=y*Z-A*O+b*R+L*P-T*z+_*E;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/N;return e[0]=(o*Z-c*O+l*R)*H,e[1]=(r*O-n*Z-s*R)*H,e[2]=(M*_-p*T+d*L)*H,e[3]=(h*T-m*_-g*L)*H,e[4]=(c*P-a*Z-l*z)*H,e[5]=(t*Z-r*P+s*z)*H,e[6]=(p*b-u*_-d*A)*H,e[7]=(f*_-h*b+g*A)*H,e[8]=(a*O-o*P+l*E)*H,e[9]=(n*P-t*O-s*E)*H,e[10]=(u*T-M*b+d*y)*H,e[11]=(m*b-f*T-g*y)*H,e[12]=(o*z-a*R-c*E)*H,e[13]=(t*R-n*z+r*E)*H,e[14]=(M*A-u*L-p*y)*H,e[15]=(f*L-m*A+h*y)*H,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+n,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,m=o+o,h=s*l,g=s*f,u=s*m,M=a*f,p=a*m,d=o*m,y=c*l,A=c*f,b=c*m,L=n.x,T=n.y,_=n.z;return r[0]=(1-(M+d))*L,r[1]=(g+b)*L,r[2]=(u-A)*L,r[3]=0,r[4]=(g-b)*T,r[5]=(1-(h+d))*T,r[6]=(p+y)*T,r[7]=0,r[8]=(u+A)*_,r[9]=(p-y)*_,r[10]=(1-(h+M))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=er.set(r[0],r[1],r[2]).length();const o=er.set(r[4],r[5],r[6]).length(),c=er.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Wn.copy(this);const l=1/a,f=1/o,m=1/c;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=m,Wn.elements[9]*=m,Wn.elements[10]*=m,t.setFromRotationMatrix(Wn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=$n,c=!1){const l=this.elements,f=2*s/(t-e),m=2*s/(n-r),h=(t+e)/(t-e),g=(n+r)/(n-r);let u,M;if(c)u=s/(a-s),M=a*s/(a-s);else if(o===$n)u=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===is)u=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=m,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=$n,c=!1){const l=this.elements,f=2/(t-e),m=2/(n-r),h=-(t+e)/(t-e),g=-(n+r)/(n-r);let u,M;if(c)u=1/(a-s),M=a/(a-s);else if(o===$n)u=-2/(a-s),M=-(a+s)/(a-s);else if(o===is)u=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=m,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=u,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const er=new G,Wn=new Wt,jh=new G(0,0,0),ed=new G(1,1,1),xi=new G,xs=new G,Ln=new G,sc=new Wt,ac=new Tn;class ai{constructor(e=0,t=0,n=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],m=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let td=0;const oc=new G,tr=new Tn,li=new Wt,Ms=new G,zr=new G,nd=new G,id=new Tn,lc=new G(1,0,0),cc=new G(0,1,0),fc=new G(0,0,1),uc={type:"added"},rd={type:"removed"},nr={type:"childadded",child:null},Ya={type:"childremoved",child:null};class cn extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new G,t=new ai,n=new Tn,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Et}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(zr,Ms,this.up):li.lookAt(Ms,zr,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(li),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uc),nr.child=e,this.dispatchEvent(nr),nr.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rd),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uc),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const m=c[l];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),m=a(e.shapes),h=a(e.skeletons),g=a(e.animations),u=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}cn.DEFAULT_UP=new G(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Sr extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sd={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),d=this._getHandJoint(l,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],h=f.position.distanceTo(m.position),g=.02,u=.005;l.inputState.pinching&&h>g+u?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=g-u&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sd)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class St{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=Vh(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Za(a,s,e+1/3),this.g=Za(a,s,e),this.b=Za(a,s,e-1/3)}return It.colorSpaceToWorking(this,r),this}setStyle(e,t=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const n=tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return It.workingToColorSpace(pn.copy(this),e),Math.round(Lt(pn.r*255,0,255))*65536+Math.round(Lt(pn.g*255,0,255))*256+Math.round(Lt(pn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(pn.copy(this),t);const n=pn.r,r=pn.g,s=pn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=f<=.5?m/(a+o):m/(2-a-o),a){case n:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-n)/m+2;break;case s:c=(n-r)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Sn){It.workingToColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,r=pn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Ss);const n=Ha(Mi.h,Ss.h,t),r=Ha(Mi.s,Ss.s,t),s=Ha(Mi.l,Ss.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new St;St.NAMES=tu;class nu extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xn=new G,ci=new G,Ka=new G,fi=new G,ir=new G,rr=new G,hc=new G,Ja=new G,Qa=new G,ja=new G,eo=new $t,to=new $t,no=new $t;class Yn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xn.subVectors(r,t),ci.subVectors(n,t),Ka.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(ci),c=Xn.dot(Ka),l=ci.dot(ci),f=ci.dot(Ka),m=a*l-o*o;if(m===0)return s.set(0,0,0),null;const h=1/m,g=(l*c-o*f)*h,u=(a*f-o*c)*h;return s.set(1-g-u,u,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return eo.setScalar(0),to.setScalar(0),no.setScalar(0),eo.fromBufferAttribute(e,t),to.fromBufferAttribute(e,n),no.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(eo,s.x),a.addScaledVector(to,s.y),a.addScaledVector(no,s.z),a}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),ci.subVectors(e,t),Xn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Xn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ir.subVectors(r,n),rr.subVectors(s,n),Ja.subVectors(e,n);const c=ir.dot(Ja),l=rr.dot(Ja);if(c<=0&&l<=0)return t.copy(n);Qa.subVectors(e,r);const f=ir.dot(Qa),m=rr.dot(Qa);if(f>=0&&m<=f)return t.copy(r);const h=c*m-f*l;if(h<=0&&c>=0&&f<=0&&c-f>0)return a=c/(c-f),t.copy(n).addScaledVector(ir,a);ja.subVectors(e,s);const g=ir.dot(ja),u=rr.dot(ja);if(u>=0&&g<=u)return t.copy(s);const M=g*l-c*u;if(M<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(rr,o);const p=f*u-g*m;if(p<=0&&m-f>=0&&g-u>=0)return hc.subVectors(s,r),o=(m-f)/(m-f+(g-u)),t.copy(r).addScaledVector(hc,o);const d=1/(p+M+h);return a=M*d,o=h*d,t.copy(n).addScaledVector(ir,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ki{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Es.subVectors(this.max,kr),sr.subVectors(e.a,kr),ar.subVectors(e.b,kr),or.subVectors(e.c,kr),Si.subVectors(ar,sr),yi.subVectors(or,ar),Ui.subVectors(sr,or);let t=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,Si.z,0,-Si.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!io(t,sr,ar,or,Es)||(t=[1,0,0,0,1,0,0,0,1],!io(t,sr,ar,or,Es))?!1:(bs.crossVectors(Si,yi),t=[bs.x,bs.y,bs.z],io(t,sr,ar,or,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new G,new G,new G,new G,new G,new G,new G,new G],qn=new G,ys=new Ki,sr=new G,ar=new G,or=new G,Si=new G,yi=new G,Ui=new G,kr=new G,Es=new G,bs=new G,Fi=new G;function io(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Fi.fromArray(i,s);const o=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),f=n.dot(Fi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const jt=new G,Ts=new Nt;let ad=0;class fn extends Zi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bh,this.updateRanges=[],this.gpuType=kn,this.version=0,this._normalizationScale=e!==void 0?Ul(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Xh(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):qh(e,this.array)}}class iu extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ru extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zn extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const od=new Ki,Gr=new G,ro=new G;class Fr{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):od.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(ro)),this.expandByPoint(Gr.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ld=0;const Un=new Wt,so=new cn,lr=new G,Pn=new Ki,Hr=new Ki,rn=new G;class Vn extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zh(e)?ru:iu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Pn.min,Hr.min),Pn.expandByPoint(rn),rn.addVectors(Pn.max,Hr.max),Pn.expandByPoint(rn)):(Pn.expandByPoint(Hr.min),Pn.expandByPoint(Hr.max))}Pn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(rn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)rn.fromBufferAttribute(o,l),c&&(lr.fromBufferAttribute(e,l),rn.add(lr)),r=Math.max(r,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let z=0;z<n.count;z++)o[z]=new G,c[z]=new G;const f=new G,m=new G,h=new G,g=new Nt,u=new Nt,M=new Nt,p=new G,d=new G;function y(z,P,R){l[z]=l[P]=l[R]=1,f.fromBufferAttribute(n,z),m.fromBufferAttribute(n,P),h.fromBufferAttribute(n,R),g.fromBufferAttribute(s,z),u.fromBufferAttribute(s,P),M.fromBufferAttribute(s,R),m.sub(f),h.sub(f),u.sub(g),M.sub(g);const O=1/(u.x*M.y-M.x*u.y);isFinite(O)&&(p.copy(m).multiplyScalar(M.y).addScaledVector(h,-u.y).multiplyScalar(O),d.copy(h).multiplyScalar(u.x).addScaledVector(m,-M.x).multiplyScalar(O),o[z].add(p),o[P].add(p),o[R].add(p),c[z].add(d),c[P].add(d),c[R].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let z=0,P=A.length;z<P;++z){const R=A[z],O=R.start,Z=R.count;for(let N=O,H=O+Z;N<H;N+=3)y(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new G,L=new G,T=new G,_=new G;function E(z){T.fromBufferAttribute(r,z),_.copy(T);const P=o[z];b.copy(P),b.sub(T.multiplyScalar(T.dot(P))).normalize(),L.crossVectors(_,P);const O=L.dot(c[z])<0?-1:1;a.setXYZW(z,b.x,b.y,b.z,O)}for(let z=0,P=n.count;z<P;++z)l[z]&&E(z);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,f=new G,m=new G;if(e)for(let h=0,g=e.count;h<g;h+=3){const u=e.getX(h+0),M=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,u),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),o.fromBufferAttribute(n,u),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),o.add(f),c.add(f),l.add(f),n.setXYZ(u,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,m=o.normalized,h=new l.constructor(c.length*f);let g=0,u=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?g=c[M]*o.data.stride+o.offset:g=c[M]*f;for(let d=0;d<f;d++)h[u++]=l[g++]}return new fn(h,f,m)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,m=l.length;f<m;f++){const h=l[f],g=e(h,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let m=0,h=l.length;m<h;m++){const g=l[m];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],m=s[l];for(let h=0,g=m.length;h<g;h++)f.push(m[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new G,cd=new G,fd=new Et;class Ti{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ao.subVectors(n,t).cross(cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ao),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fd.getNormalMatrix(e),r=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ud=0;class Ji extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Qr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Uf,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hi=new G,oo=new G,ws=new G,As=new G;class su{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){oo.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),As.copy(this.origin).sub(oo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ws),o=As.dot(this.direction),c=-As.dot(ws),l=As.lengthSq(),f=Math.abs(1-a*a);let m,h,g,u;if(f>0)if(m=a*c-o,h=a*o-c,u=s*f,m>=0)if(h>=-u)if(h<=u){const M=1/f;m*=M,h*=M,g=m*(m+a*h+2*o)+h*(a*m+h+2*c)+l}else h=s,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*c)+l;else h=-s,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*c)+l;else h<=-u?(m=Math.max(0,-(-a*s+o)),h=m>0?-s:Math.min(Math.max(-s,-c),s),g=-m*m+h*(h+2*c)+l):h<=u?(m=0,h=Math.min(Math.max(-s,-c),s),g=h*(h+2*c)+l):(m=Math.max(0,-(a*s+o)),h=m>0?s:Math.min(Math.max(-s,-c),s),g=-m*m+h*(h+2*c)+l);else h=a>0?-s:s,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(oo).addScaledVector(ws,h),g}intersectSphere(e,t){if(e.radius<0)return null;hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),r=hi.dot(hi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-h.z)*m,c=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,c=(e.min.z-h.z)*m),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,m=e.x-a.x,h=e.y-a.y,g=e.z-a.z,u=t.x-a.x,M=t.y-a.y,p=t.z-a.z,d=n.x-a.x,y=n.y-a.y,A=n.z-a.z,b=Math.abs(c),L=Math.abs(l),T=Math.abs(f);let _,E,z,P,R,O,Z,N,H,k,U,K;if(b>=L&&b>=T?(z=c,O=m,H=u,K=d,c>=0?(_=l,E=f,P=h,R=g,Z=M,N=p,k=y,U=A):(_=f,E=l,P=g,R=h,Z=p,N=M,k=A,U=y)):L>=T?(z=l,O=h,H=M,K=y,l>=0?(_=f,E=c,P=g,R=m,Z=p,N=u,k=A,U=d):(_=c,E=f,P=m,R=g,Z=u,N=p,k=d,U=A)):(z=f,O=g,H=p,K=A,f>=0?(_=c,E=l,P=m,R=h,Z=u,N=M,k=d,U=y):(_=l,E=c,P=h,R=m,Z=M,N=u,k=y,U=d)),z===0)return null;const V=_/z,ne=E/z,se=1/z,Le=P-V*O,be=R-ne*O,W=Z-V*H,me=N-ne*H,ye=k-V*K,fe=U-ne*K,Y=ye*me-fe*W,ce=Le*fe-be*ye,_e=W*be-me*Le;if(r){if(Y<0||ce<0||_e<0)return null}else if((Y<0||ce<0||_e<0)&&(Y>0||ce>0||_e>0))return null;const oe=Y+ce+_e;if(oe===0)return null;const ve=se*(Y*O+ce*H+_e*K);return(oe>0?ve<0:ve>0)?null:this.at(ve/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hd extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dc=new Wt,Oi=new su,Rs=new Fr,pc=new G,Cs=new G,Ls=new G,Ps=new G,lo=new G,Is=new G,mc=new G,Ds=new G;class an extends cn{constructor(e=new Vn,t=new hd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Is.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],m=s[c];f!==0&&(lo.fromBufferAttribute(m,e),a?Is.addScaledVector(lo,f):Is.addScaledVector(lo.sub(t),f))}t.add(Is)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(Rs.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Rs,pc)===null||Oi.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(dc.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(dc),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,m=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let u=0,M=h.length;u<M;u++){const p=h[u],d=a[p.materialIndex],y=Math.max(p.start,g.start),A=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let b=y,L=A;b<L;b+=3){const T=o.getX(b),_=o.getX(b+1),E=o.getX(b+2);r=Ns(this,d,e,n,l,f,m,T,_,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const u=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let p=u,d=M;p<d;p+=3){const y=o.getX(p),A=o.getX(p+1),b=o.getX(p+2);r=Ns(this,a,e,n,l,f,m,y,A,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let u=0,M=h.length;u<M;u++){const p=h[u],d=a[p.materialIndex],y=Math.max(p.start,g.start),A=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let b=y,L=A;b<L;b+=3){const T=b,_=b+1,E=b+2;r=Ns(this,d,e,n,l,f,m,T,_,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const u=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let p=u,d=M;p<d;p+=3){const y=p,A=p+1,b=p+2;r=Ns(this,a,e,n,l,f,m,y,A,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function dd(i,e,t,n,r,s,a,o){let c;if(e.side===wn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Li,o),c===null)return null;Ds.copy(o),Ds.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ds);return l<t.near||l>t.far?null:{distance:l,point:Ds.clone(),object:i}}function Ns(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Cs),i.getVertexPosition(c,Ls),i.getVertexPosition(l,Ps);const f=dd(i,e,t,n,Cs,Ls,Ps,mc);if(f){const m=new G;Yn.getBarycoord(mc,Cs,Ls,Ps,m),r&&(f.uv=Yn.getInterpolatedAttribute(r,o,c,l,m,new Nt)),s&&(f.uv1=Yn.getInterpolatedAttribute(s,o,c,l,m,new Nt)),a&&(f.normal=Yn.getInterpolatedAttribute(a,o,c,l,m,new G),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new G,materialIndex:0};Yn.getNormal(Cs,Ls,Ps,h.normal),f.face=h,f.barycoord=m}return f}class wr extends xn{constructor(e=null,t=1,n=1,r,s,a,o,c,l=on,f=on,m,h){super(null,a,o,c,l,f,r,s,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gc extends fn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cr=new Wt,_c=new Wt,Us=[],vc=new Ki,pd=new Wt,Vr=new an,Wr=new Fr;class md extends an{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,pd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),vc.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Wr.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cr),_c.multiplyMatrices(n,cr),Vr.matrixWorld=_c,Vr.raycast(e,Us);for(let a=0,o=Us.length;a<o;a++){const c=Us[a];c.instanceId=s,c.object=this,t.push(c)}Us.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(r*this.count),r,this.count,wa,kn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bi=new Fr,gd=new Nt(.5,.5),Fs=new G;class rs{constructor(e=new Ti,t=new Ti,n=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],m=s[5],h=s[6],g=s[7],u=s[8],M=s[9],p=s[10],d=s[11],y=s[12],A=s[13],b=s[14],L=s[15];if(r[0].setComponents(l-a,g-f,d-u,L-y).normalize(),r[1].setComponents(l+a,g+f,d+u,L+y).normalize(),r[2].setComponents(l+o,g+m,d+M,L+A).normalize(),r[3].setComponents(l-o,g-m,d-M,L-A).normalize(),n)r[4].setComponents(c,h,p,b).normalize(),r[5].setComponents(l-c,g-h,d-p,L-b).normalize();else if(r[4].setComponents(l-c,g-h,d-p,L-b).normalize(),t===$n)r[5].setComponents(l+c,g+h,d+p,L+b).normalize();else if(t===is)r[5].setComponents(c,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=gd.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const xc=new Wt;class Ol{constructor(){this.coordinateSystem=$n,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];xc.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new rs),n[r].setFromProjectionMatrix(xc,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new rs),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Ol().copy(this)}}class pl extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const va=new G,xa=new G,Mc=new Wt,Xr=new su,Os=new Fr,co=new G,Sc=new G;class _d extends cn{constructor(e=new Vn,t=new pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)va.fromBufferAttribute(t,r-1),xa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=va.distanceTo(xa);e.setAttribute("lineDistance",new Zn(n,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Os.radius+=s,e.ray.intersectsSphere(Os)===!1)return;Mc.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(Mc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const g=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let M=g,p=u-1;M<p;M+=l){const d=f.getX(M),y=f.getX(M+1),A=Bs(this,e,Xr,c,d,y,M);A&&t.push(A)}if(this.isLineLoop){const M=f.getX(u-1),p=f.getX(g),d=Bs(this,e,Xr,c,M,p,u-1);d&&t.push(d)}}else{const g=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let M=g,p=u-1;M<p;M+=l){const d=Bs(this,e,Xr,c,M,M+1,M);d&&t.push(d)}if(this.isLineLoop){const M=Bs(this,e,Xr,c,u-1,g,u-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bs(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(va.fromBufferAttribute(o,r),xa.fromBufferAttribute(o,s),t.distanceSqToSegment(va,xa,co,Sc)>n)return;co.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(co);if(!(l<e.near||l>e.far))return{distance:l,point:Sc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const yc=new G,Ec=new G;class bc extends _d{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)yc.fromBufferAttribute(t,r),Ec.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+yc.distanceTo(Ec);e.setAttribute("lineDistance",new Zn(n,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class au extends xn{constructor(e=[],t=Lr,n,r,s,a,o,c,l,f){super(e,t,n,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bl extends xn{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ir extends xn{constructor(e,t,n=ri,r,s,a,o=on,c=on,l,f=Pi,m=1){if(f!==Pi&&f!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:m};super(h,r,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ou extends Ir{constructor(e,t=ri,n=Lr,r,s,a=on,o=on,c,l=Pi){const f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lu extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Vn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],m=[];let h=0,g=0;u("z","y","x",-1,-1,n,t,e,a,s,0),u("z","y","x",1,-1,n,t,-e,a,s,1),u("x","z","y",1,1,e,n,t,r,a,2),u("x","z","y",1,-1,e,n,-t,r,a,3),u("x","y","z",1,-1,e,t,n,r,s,4),u("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Zn(l,3)),this.setAttribute("normal",new Zn(f,3)),this.setAttribute("uv",new Zn(m,2));function u(M,p,d,y,A,b,L,T,_,E,z){const P=b/_,R=L/E,O=b/2,Z=L/2,N=T/2,H=_+1,k=E+1;let U=0,K=0;const V=new G;for(let ne=0;ne<k;ne++){const se=ne*R-Z;for(let Le=0;Le<H;Le++){const be=Le*P-O;V[M]=be*y,V[p]=se*A,V[d]=N,l.push(V.x,V.y,V.z),V[M]=0,V[p]=0,V[d]=T>0?1:-1,f.push(V.x,V.y,V.z),m.push(Le/_),m.push(1-ne/E),U+=1}}for(let ne=0;ne<E;ne++)for(let se=0;se<_;se++){const Le=h+se+H*ne,be=h+se+H*(ne+1),W=h+(se+1)+H*(ne+1),me=h+(se+1)+H*ne;c.push(Le,be,me),c.push(be,W,me),K+=6}o.addGroup(g,K,z),g+=K,h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Aa extends Vn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,f=c+1,m=e/o,h=t/c,g=[],u=[],M=[],p=[];for(let d=0;d<f;d++){const y=d*h-a;for(let A=0;A<l;A++){const b=A*m-s;u.push(b,-y,0),M.push(0,0,1),p.push(A/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const A=y+l*d,b=y+l*(d+1),L=y+1+l*(d+1),T=y+1+l*d;g.push(A,b,T),g.push(b,L,T)}this.setIndex(g),this.setAttribute("position",new Zn(u,3)),this.setAttribute("normal",new Zn(M,3)),this.setAttribute("uv",new Zn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.widthSegments,e.heightSegments)}}function Dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Tc(r))r.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Tc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Mn(i){const e={};for(let t=0;t<i.length;t++){const n=Dr(i[t]);for(const r in n)e[r]=n[r]}return e}function Tc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const xd={clone:Dr,merge:Mn};var Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=vd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new St().setHex(r.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new G().fromArray(r.value);break;case"v4":this.uniforms[n].value=new $t().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Et().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Wt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yd extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ml extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fu extends ml{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ed extends Ji{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bd extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Td extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uu extends cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const fo=new Wt,wc=new G,Ac=new G;class hu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fo,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===is||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zs=new G,ks=new Tn,Qn=new G;class du extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zs,ks,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,ks,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zs,ks,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,ks,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new G,Rc=new Nt,Cc=new Nt;class Bn extends du{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Rc,Cc),t.subVectors(Cc,Rc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wd extends hu{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ad extends uu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new wd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class pu extends du{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rd extends hu{constructor(){super(new pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mu extends uu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Rd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const fr=-90,ur=1;class gl extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(fr,ur,e,t);r.layers=this.layers,this.add(r);const s=new Bn(fr,ur,e,t);s.layers=this.layers,this.add(s);const a=new Bn(fr,ur,e,t);a.layers=this.layers,this.add(a);const o=new Bn(fr,ur,e,t);o.layers=this.layers,this.add(o);const c=new Bn(fr,ur,e,t);c.layers=this.layers,this.add(c);const l=new Bn(fr,ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,h,g),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Cd extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Lc(i,e,t,n){const r=Ld(n);switch(t){case Yf:return i*e;case wa:return i*e/r.components*r.byteLength;case Il:return i*e/r.components*r.byteLength;case Ii:return i*e*2/r.components*r.byteLength;case Dl:return i*e*2/r.components*r.byteLength;case $f:return i*e*3/r.components*r.byteLength;case Gn:return i*e*4/r.components*r.byteLength;case Nl:return i*e*4/r.components*r.byteLength;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:case ko:return Math.max(i,16)*Math.max(e,8)/4;case Oo:case zo:return Math.max(i,8)*Math.max(e,8)/2;case Go:case Ho:case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vo:case ha:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ol:case ll:case cl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fl:case ul:return Math.ceil(i/4)*Math.ceil(e/4)*8;case da:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ld(i){switch(i){case _n:case Vf:return{byteLength:1,components:1};case ns:case Wf:case si:return{byteLength:2,components:1};case Ll:case Pl:return{byteLength:2,components:4};case ri:case Cl:case kn:return{byteLength:4,components:1};case Xf:case qf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);function gu(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Pd(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,m=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,f),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){const f=c.array,m=c.updateRanges;if(i.bindBuffer(l,o),m.length===0)i.bufferSubData(l,0,f);else{m.sort((g,u)=>g.start-u.start);let h=0;for(let g=1;g<m.length;g++){const u=m[h],M=m[g];M.start<=u.start+u.count+1?u.count=Math.max(u.count,M.start+M.count-u.start):(++h,m[h]=M)}m.length=h+1;for(let g=0,u=m.length;g<u;g++){const M=m[g];i.bufferSubData(l,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
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
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
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
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
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
#endif`,qd=`#ifdef USE_BUMPMAP
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tp=`#define PI 3.141592653589793
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
} // validated`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ep=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
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
#endif`,Cp=`uniform sampler2D dfgLUT;
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
}`,Lp=`
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gp=`#if defined( USE_POINTS_UV )
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
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xp=`#if defined( USE_MORPHCOLORS )
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
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
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
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gm=`float getShadowMask() {
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
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform float backgroundBlurriness;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,Bm=`#if DEPTH_PACKING == 3200
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
}`,zm=`#define DISTANCE
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
}`,km=`#define DISTANCE
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,Km=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Qm=`#define NORMAL
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
}`,jm=`#define PHONG
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
}`,e0=`#define PHONG
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
}`,t0=`#define STANDARD
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
}`,n0=`#define STANDARD
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
}`,i0=`#define TOON
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
}`,r0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 color;
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
}`,c0=`uniform float rotation;
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
}`,f0=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Id,alphahash_pars_fragment:Dd,alphamap_fragment:Nd,alphamap_pars_fragment:Ud,alphatest_fragment:Fd,alphatest_pars_fragment:Od,aomap_fragment:Bd,aomap_pars_fragment:zd,batching_pars_vertex:kd,batching_vertex:Gd,begin_vertex:Hd,beginnormal_vertex:Vd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Kd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:jd,color_vertex:ep,common:tp,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:rp,emissivemap_fragment:sp,emissivemap_pars_fragment:ap,colorspace_fragment:op,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:fp,envmap_pars_fragment:up,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Ep,envmap_vertex:dp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:Sp,lights_pars_begin:yp,lights_toon_fragment:bp,lights_toon_pars_fragment:Tp,lights_phong_fragment:wp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Rp,lights_physical_pars_fragment:Cp,lights_fragment_begin:Lp,lights_fragment_maps:Pp,lights_fragment_end:Ip,lightprobes_pars_fragment:Dp,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Op,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:kp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Vp,morphinstance_vertex:Wp,morphcolor_vertex:Xp,morphnormal_vertex:qp,morphtarget_pars_vertex:Yp,morphtarget_vertex:$p,normal_fragment_begin:Zp,normal_fragment_maps:Kp,normal_pars_fragment:Jp,normal_pars_vertex:Qp,normal_vertex:jp,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,iridescence_pars_fragment:rm,opaque_fragment:sm,packing:am,premultiplied_alpha_fragment:om,project_vertex:lm,dithering_fragment:cm,dithering_pars_fragment:fm,roughnessmap_fragment:um,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:_m,skinning_pars_vertex:vm,skinning_vertex:xm,skinnormal_vertex:Mm,specularmap_fragment:Sm,specularmap_pars_fragment:ym,tonemapping_fragment:Em,tonemapping_pars_fragment:bm,transmission_fragment:Tm,transmission_pars_fragment:wm,uv_pars_fragment:Am,uv_pars_vertex:Rm,uv_vertex:Cm,worldpos_vertex:Lm,background_vert:Pm,background_frag:Im,backgroundCube_vert:Dm,backgroundCube_frag:Nm,cube_vert:Um,cube_frag:Fm,depth_vert:Om,depth_frag:Bm,distance_vert:zm,distance_frag:km,equirect_vert:Gm,equirect_frag:Hm,linedashed_vert:Vm,linedashed_frag:Wm,meshbasic_vert:Xm,meshbasic_frag:qm,meshlambert_vert:Ym,meshlambert_frag:$m,meshmatcap_vert:Zm,meshmatcap_frag:Km,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:jm,meshphong_frag:e0,meshphysical_vert:t0,meshphysical_frag:n0,meshtoon_vert:i0,meshtoon_frag:r0,points_vert:s0,points_frag:a0,shadow_vert:o0,shadow_frag:l0,sprite_vert:c0,sprite_frag:f0},qe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},ti={basic:{uniforms:Mn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Mn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Mn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Mn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Mn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new St(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Mn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Mn([qe.points,qe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Mn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Mn([qe.common,qe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Mn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Mn([qe.sprite,qe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Mn([qe.common,qe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Mn([qe.lights,qe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ti.physical={uniforms:Mn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Gs={r:0,b:0,g:0},u0=new Wt,_u=new Et;_u.set(-1,0,0,0,1,0,0,0,1);function h0(i,e,t,n,r,s){const a=new St(0);let o=r===!0?0:1,c,l,f=null,m=0,h=null;function g(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){const b=y.backgroundBlurriness>0;A=e.get(A,b)}return A}function u(y){let A=!1;const b=g(y);b===null?p(a,o):b&&b.isColor&&(p(b,1),A=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,A){const b=g(A);b&&b.isCubeTexture?(l===void 0&&(l=new an(new Or(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Dr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_u),l.material.toneMapped=It.getTransfer(b.colorSpace)!==Gt,(f!==b||m!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=b,m=b.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new an(new Aa(2,2),new Yi({name:"BackgroundMaterial",uniforms:Dr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=It.getTransfer(b.colorSpace)!==Gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||m!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,m=b.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,A){y.getRGB(Gs,cu(i)),t.buffers.color.setClear(Gs.r,Gs.g,Gs.b,A,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,A=1){a.set(y),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:u,addToRenderList:M,dispose:d}}function d0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(R,O,Z,N,H){let k=!1;const U=m(R,N,Z,O);s!==U&&(s=U,l(s.object)),k=g(R,N,Z,H),k&&u(R,N,Z,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,b(R,O,Z,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function f(R){return i.deleteVertexArray(R)}function m(R,O,Z,N){const H=N.wireframe===!0;let k=n[O.id];k===void 0&&(k={},n[O.id]=k);const U=R.isInstancedMesh===!0?R.id:0;let K=k[U];K===void 0&&(K={},k[U]=K);let V=K[Z.id];V===void 0&&(V={},K[Z.id]=V);let ne=V[H];return ne===void 0&&(ne=h(c()),V[H]=ne),ne}function h(R){const O=[],Z=[],N=[];for(let H=0;H<t;H++)O[H]=0,Z[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:N,object:R,attributes:{},index:null}}function g(R,O,Z,N){const H=s.attributes,k=O.attributes;let U=0;const K=Z.getAttributes();for(const V in K)if(K[V].location>=0){const se=H[V];let Le=k[V];if(Le===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(Le=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(Le=R.instanceColor)),se===void 0||se.attribute!==Le||Le&&se.data!==Le.data)return!0;U++}return s.attributesNum!==U||s.index!==N}function u(R,O,Z,N){const H={},k=O.attributes;let U=0;const K=Z.getAttributes();for(const V in K)if(K[V].location>=0){let se=k[V];se===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const Le={};Le.attribute=se,se&&se.data&&(Le.data=se.data),H[V]=Le,U++}s.attributes=H,s.attributesNum=U,s.index=N}function M(){const R=s.newAttributes;for(let O=0,Z=R.length;O<Z;O++)R[O]=0}function p(R){d(R,0)}function d(R,O){const Z=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;Z[R]=1,N[R]===0&&(i.enableVertexAttribArray(R),N[R]=1),H[R]!==O&&(i.vertexAttribDivisor(R,O),H[R]=O)}function y(){const R=s.newAttributes,O=s.enabledAttributes;for(let Z=0,N=O.length;Z<N;Z++)O[Z]!==R[Z]&&(i.disableVertexAttribArray(Z),O[Z]=0)}function A(R,O,Z,N,H,k,U){U===!0?i.vertexAttribIPointer(R,O,Z,H,k):i.vertexAttribPointer(R,O,Z,N,H,k)}function b(R,O,Z,N){M();const H=N.attributes,k=Z.getAttributes(),U=O.defaultAttributeValues;for(const K in k){const V=k[K];if(V.location>=0){let ne=H[K];if(ne===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const se=ne.normalized,Le=ne.itemSize,be=e.get(ne);if(be===void 0)continue;const W=be.buffer,me=be.type,ye=be.bytesPerElement,fe=me===i.INT||me===i.UNSIGNED_INT||ne.gpuType===Cl;if(ne.isInterleavedBufferAttribute){const Y=ne.data,ce=Y.isInterleavedBuffer===!0?Y.stride:Y.itemSize,_e=ne.offset;if(Y.isInstancedInterleavedBuffer||Y.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)d(V.location+oe,Y.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe);i.bindBuffer(i.ARRAY_BUFFER,W);for(let oe=0;oe<V.locationSize;oe++)A(V.location+oe,Le/V.locationSize,me,se,ce*ye,(_e+Le/V.locationSize*oe)*ye,fe)}else{if(ne.isInstancedBufferAttribute){for(let Y=0;Y<V.locationSize;Y++)d(V.location+Y,ne.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Y=0;Y<V.locationSize;Y++)p(V.location+Y);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Y=0;Y<V.locationSize;Y++)A(V.location+Y,Le/V.locationSize,me,se,Le*ye,Le/V.locationSize*Y*ye,fe)}}else if(U!==void 0){const se=U[K];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(V.location,se);break;case 3:i.vertexAttrib3fv(V.location,se);break;case 4:i.vertexAttrib4fv(V.location,se);break;default:i.vertexAttrib1fv(V.location,se)}}}}y()}function L(){z();for(const R in n){const O=n[R];for(const Z in O){const N=O[Z];for(const H in N){const k=N[H];for(const U in k)f(k[U].object),delete k[U];delete N[H]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;const O=n[R.id];for(const Z in O){const N=O[Z];for(const H in N){const k=N[H];for(const U in k)f(k[U].object),delete k[U];delete N[H]}}delete n[R.id]}function _(R){for(const O in n){const Z=n[O];for(const N in Z){const H=Z[N];if(H[R.id]===void 0)continue;const k=H[R.id];for(const U in k)f(k[U].object),delete k[U];delete H[R.id]}}}function E(R){for(const O in n){const Z=n[O],N=R.isInstancedMesh===!0?R.id:0,H=Z[N];if(H!==void 0){for(const k in H){const U=H[k];for(const K in U)f(U[K].object),delete U[K];delete H[k]}delete Z[N],Object.keys(Z).length===0&&delete n[O]}}}function z(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:P,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:p,disableUnusedAttributes:y}}function p0(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let h=0;for(let g=0;g<f;g++)h+=l[g];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function m0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==Gn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==_n&&_!==kn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(xt("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:u,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:b,maxSamples:L,samples:T}}function g0(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ti,o=new Et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const g=m.length!==0||h||n!==0||r;return r=h,n=m.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){t=f(m,h,0)},this.setState=function(m,h,g){const u=m.clippingPlanes,M=m.clipIntersection,p=m.clipShadows,d=i.get(m);if(!r||u===null||u.length===0||s&&!p)s?f(null):l();else{const y=s?0:n,A=y*4;let b=d.clippingState||null;c.value=b,b=f(u,h,A,g);for(let L=0;L!==A;++L)b[L]=t[L];d.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,h,g,u){const M=m!==null?m.length:0;let p=null;if(M!==0){if(p=c.value,u!==!0||p===null){const d=g+M*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,b=g;A!==M;++A,b+=4)a.copy(m[A]).applyMatrix4(y,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}class zl extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new au(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Or(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Er});s.uniforms.tEquirect.value=t;const a=new an(r,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=ln),new gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Pc=256,_0=3,v0=20,vu=256,xu=16,x0=3,M0=new G,S0=new St;class ss{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gl(1,10,null),this._boxMesh=new an(new Or(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=M0}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);const m=c.autoClear,h=c.autoClearColor,g=c.autoClearDepth,u=c.autoClearStencil,M=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(e.background=c.getClearColor(S0));const p=new gl(n,r,f);return p.position.copy(o),p.update(c,e),c.autoClear=m,c.autoClearColor=h,c.autoClearDepth=g,c.autoClearStencil=u,e.background=M,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pc,Wh(e))}_fromTexture(e,t){e.mapping===Lr||e.mapping===ts?this._setSize(e.image.length===0?Pc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Ic(e,!1,!1),n=Math.log2(e)-_0;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ic(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Lr||e.mapping===ts?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=y0(),this._integrationMaterial=E0());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/xu);for(let a=0;a<=n;a++){const o=ss.lodToRoughness(a,n);if(a>n-x0)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(vu*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=b0());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function Ic(i,e,t){return new zl(i,{minFilter:zn,generateMipmaps:e,type:si,colorSpace:ma,depthBuffer:t})}function us(i,e,t){return new Yi({name:i,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:t,side:wn,blending:Er,depthTest:!1,depthWrite:!1})}function y0(){return us("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vu}u

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
	`)}function E0(){return us("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xu}},`

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
	`)}function b0(){return us("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${v0}
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
	`)}function Dc(){return us("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Nc(){return us("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function T0(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,g=!1){return h==null?null:g?a(h):s(h)}function s(h){if(h&&h.isTexture){const g=h.mapping;if(g===Oa||g===Ba)if(e.has(h)){const u=e.get(h).texture;return o(u,h.mapping)}else{const u=h.image;if(u&&u.height>0){const M=new zl(u.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const g=h.mapping,u=g===Oa||g===Ba,M=g===Lr||g===ts;if(u||M){let p=t.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new ss(i)),p=u?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return u&&y&&y.height>0||M&&y&&c(y)?(n===null&&(n=new ss(i)),p=u?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",f),p.texture):null}}}return h}function o(h,g){return g===Oa?h.mapping=Lr:g===Ba&&(h.mapping=ts),h}function c(h){let g=0;const u=6;for(let M=0;M<u;M++)h[M]!==void 0&&g++;return g===u}function l(h){const g=h.target;g.removeEventListener("dispose",l);const u=e.get(g);u!==void 0&&(e.delete(g),u.dispose())}function f(h){const g=h.target;g.removeEventListener("dispose",f);const u=t.get(g);u!==void 0&&(t.delete(g),u.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:m}}function w0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&br("WebGLRenderer: "+n+" extension not supported."),r}}}function A0(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(u=>delete r[u]);function o(u){c(u.target)}function c(u){u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete r[u.id],a.unregister(u);const M=s.get(u);M&&(e.remove(M),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(u,M){return r[M.id]!==void 0||(M.addEventListener("dispose",o),r[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function f(u){const M=u.attributes;for(const p in M)e.update(M[p],i.ARRAY_BUFFER)}function m(u){const M=u.index,p=u.attributes.position;let d=0;if(p===void 0)return;const y=M!==null?M.array.length:p.array.length/3-1,A=p.count>=65535?ru:iu,b=new A(Math.ceil(y/3)*6,1),L=b.array;if(M!==null){const _=M.array;d=M.version;for(let E=0,z=0;E<y;E+=3){const P=_[E+0],R=_[E+1],O=_[E+2];L[z++]=P,L[z++]=R,L[z++]=R,L[z++]=O,L[z++]=O,L[z++]=P}}else{d=p.version;for(let _=0,E=0;_<y;_+=3){const z=_+0,P=_+1,R=_+2;L[E++]=z,L[E++]=P,L[E++]=P,L[E++]=R,L[E++]=R,L[E++]=z}}b.version=d;const T=s.get(u);T&&e.remove(T),s.set(u,b)}function h(u){const M=s.get(u);if(M){const p=u.index;p!==null&&M.version<p.version&&m(u)}else m(u);return s.get(u)}function g(){for(const u in r){const M=r[u].deref();M!==void 0&&c(M)}}return{get:l,update:f,getWireframeAttribute:h,dispose:g}}function R0(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function c(m,h){i.drawElements(n,h,s,m*a),t.update(h,n,1)}function l(m,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,m*a,g),t.update(h,n,g))}function f(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,m,0,g);let M=0;for(let p=0;p<g;p++)M+=h[p];t.update(M,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function C0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function L0(i,e,t){const n=new WeakMap,r=new $t;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==m){let P=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var g=P;h!==void 0&&h.texture.dispose();const u=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;u===!0&&(b=1),M===!0&&(b=2),p===!0&&(b=3);let L=o.attributes.position.count*b,T=1;L>e.maxTextureSize&&(T=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const _=new Float32Array(L*T*4*m),E=new jf(_,L,T,m);E.type=kn,E.needsUpdate=!0;const z=b*4;for(let R=0;R<m;R++){const O=d[R],Z=y[R],N=A[R],H=L*T*4*R;for(let k=0;k<O.count;k++){const U=k*z;u===!0&&(r.fromBufferAttribute(O,k),_[H+U+0]=r.x,_[H+U+1]=r.y,_[H+U+2]=r.z,_[H+U+3]=0),M===!0&&(r.fromBufferAttribute(Z,k),_[H+U+4]=r.x,_[H+U+5]=r.y,_[H+U+6]=r.z,_[H+U+7]=0),p===!0&&(r.fromBufferAttribute(N,k),_[H+U+8]=r.x,_[H+U+9]=r.y,_[H+U+10]=r.z,_[H+U+11]=N.itemSize===4?r.w:1)}}h={count:m,texture:E,size:new Nt(L,T)},n.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let p=0;p<l.length;p++)u+=l[p];const M=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function P0(i,e,t,n,r){let s=new WeakMap;function a(l){const f=r.render.frame,m=l.geometry,h=e.get(l,m);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const g=l.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return h}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const I0={[Ff]:"LINEAR_TONE_MAPPING",[Of]:"REINHARD_TONE_MAPPING",[Bf]:"CINEON_TONE_MAPPING",[Rl]:"ACES_FILMIC_TONE_MAPPING",[kf]:"AGX_TONE_MAPPING",[Gf]:"NEUTRAL_TONE_MAPPING",[zf]:"CUSTOM_TONE_MAPPING"};function D0(i,e,t,n,r,s){const a=new ii(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const f=new Vn;f.setAttribute("position",new Zn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Zn([0,2,0,0,2,0],2));const m=new yd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new an(f,m),g=new pu(-1,1,1,-1,0,1);let u=null,M=null,p=!1,d,y=null,A=[],b=!1;this.setSize=function(L,T){a.setSize(L,T),o!==null&&o.setSize(L,T),c!==null&&c.setSize(L,T);for(let _=0;_<A.length;_++){const E=A[_];E.setSize&&E.setSize(L,T)}},this.setEffects=function(L){A=L,b=A.length>0&&A[0].isRenderPass===!0;const T=a.width,_=a.height;A.length>0&&o===null&&(o=new ii(T,_,{type:si,depthBuffer:!1,stencilBuffer:!1}),c=new ii(T,_,{type:si,depthBuffer:!1,stencilBuffer:!1}));const E=r===!0&&A.some(z=>z.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new Ir(T,_),s===!0&&(l.format=Ri,l.type=Pr)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let z=0;z<A.length;z++){const P=A[z];P.setSize&&P.setSize(T,_),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(L,T){if(p||L.toneMapping===gi&&A.length===0)return!1;if(y=T,T!==null){const _=T.width,E=T.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return b===!1&&L.setRenderTarget(a),d=L.toneMapping,L.toneMapping=gi,!0},this.hasRenderPass=function(){return b},this.end=function(L,T){L.toneMapping=d,p=!0;let _=a,E=o;for(let z=0;z<A.length;z++){const P=A[z];P.enabled!==!1&&(P.render(L,E,_,T),P.needsSwap!==!1&&(_=E,E=E===o?c:o))}if(u!==L.outputColorSpace||M!==L.toneMapping){u=L.outputColorSpace,M=L.toneMapping,m.defines={},It.getTransfer(u)===Gt&&(m.defines.SRGB_TRANSFER="");const z=I0[M];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,L.setRenderTarget(y),L.render(h,g),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),f.dispose(),m.dispose()}}const Mu=new xn,Su=new Ir(1,1),yu=new ou(1),Eu=new jf,bu=new Qh,Tu=new au,Uc=[],Fc=[],Oc=new Float32Array(16),Bc=new Float32Array(9),zc=new Float32Array(4);function Br(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Uc[r];if(s===void 0&&(s=new Float32Array(r),Uc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ra(i,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function N0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function B0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;zc.set(n),i.uniformMatrix2fv(this.addr,!1,zc),nn(t,n)}}function z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Bc.set(n),i.uniformMatrix3fv(this.addr,!1,Bc),nn(t,n)}}function k0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),nn(t,n)}}function G0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function X0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function Ca(i){return i.version===0&&(i.compareFunction=Jf,i.needsUpdate=!0),i}function Z0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Ca(Su):s=Mu,t.setTexture2D(e||s,r)}function K0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bu,r)}function J0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Ca(yu):s=Tu,t.setTextureCube(e||s,r)}function Q0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Eu,r)}function j0(i){switch(i){case 5126:return N0;case 35664:return U0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return G0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function eg(i,e){i.uniform1fv(this.addr,e)}function tg(i,e){const t=Br(e,this.size,2);i.uniform2fv(this.addr,t)}function ng(i,e){const t=Br(e,this.size,3);i.uniform3fv(this.addr,t)}function ig(i,e){const t=Br(e,this.size,4);i.uniform4fv(this.addr,t)}function rg(i,e){const t=Br(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sg(i,e){const t=Br(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ag(i,e){const t=Br(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function og(i,e){i.uniform1iv(this.addr,e)}function lg(i,e){i.uniform2iv(this.addr,e)}function cg(i,e){i.uniform3iv(this.addr,e)}function fg(i,e){i.uniform4iv(this.addr,e)}function ug(i,e){i.uniform1uiv(this.addr,e)}function hg(i,e){i.uniform2uiv(this.addr,e)}function dg(i,e){i.uniform3uiv(this.addr,e)}function pg(i,e){i.uniform4uiv(this.addr,e)}function mg(i,e,t){const n=this.cache,r=e.length,s=Ra(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ca(Su):a=Mu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function gg(i,e,t){const n=this.cache,r=e.length,s=Ra(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bu,s[a])}function _g(i,e,t){const n=this.cache,r=e.length,s=Ra(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ca(yu):a=Tu;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function vg(i,e,t){const n=this.cache,r=e.length,s=Ra(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Eu,s[a])}function xg(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return sg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return fg;case 5125:return ug;case 36294:return hg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j0(t.type)}}class Sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xg(t.type)}}class yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function kc(i,e){i.seq.push(e),i.map[e.id]=e}function Eg(i,e,t){const n=i.name,r=n.length;for(uo.lastIndex=0;;){const s=uo.exec(n),a=uo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){kc(t,l===void 0?new Mg(o,i,e):new Sg(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new yg(o),kc(t,m)),t=m}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Eg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Gc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bg=37297;let Tg=0;function wg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Hc=new Et;function Ag(i){It._getMatrix(Hc,It.workingColorSpace,i);const e=`mat3( ${Hc.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(i)){case ga:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wg(i.getShaderSource(e),o)}else return s}function Rg(i,e){const t=Ag(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Cg={[Ff]:"Linear",[Of]:"Reinhard",[Bf]:"Cineon",[Rl]:"ACESFilmic",[kf]:"AgX",[Gf]:"Neutral",[zf]:"Custom"};function Lg(i,e){const t=Cg[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hs=new G;function Pg(){It.getLuminanceCoefficients(Hs);const i=Hs.x.toFixed(4),e=Hs.y.toFixed(4),t=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Dg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Kr(i){return i!==""}function Wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Xc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(Ug,Fg)}function Fg(i,e){const t=wt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _l(t)}const Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(Og,Bg)}function Bg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const zg={[js]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function kg(i){return zg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gg={[ts]:"ENVMAP_MODE_REFRACTION"};function Hg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Gg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vg={[Al]:"ENVMAP_BLENDING_MULTIPLY",[Ah]:"ENVMAP_BLENDING_MIX",[Rh]:"ENVMAP_BLENDING_ADD"};function Wg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vg[i.combine]||"ENVMAP_BLENDING_NONE"}function Xg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=kg(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Hg(t),m=Wg(t),h=Ig(t),g=Dg(s),u=r.createProgram();let M,p,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(M=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?wt.tonemapping_pars_fragment:"",t.toneMapping!==gi?Lg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,Rg("linearToOutputTexel",t.outputColorSpace),Pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=_l(a),a=Wc(a,t),a=Xc(a,t),o=_l(o),o=Wc(o,t),o=Xc(o,t),a=qc(a),o=qc(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=d+M+a,A=d+p+o,b=Gc(r,r.VERTEX_SHADER,y),L=Gc(r,r.FRAGMENT_SHADER,A);r.attachShader(u,b),r.attachShader(u,L),t.index0AttributeName!==void 0?r.bindAttribLocation(u,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(u,0,"position"),r.linkProgram(u);function T(P){if(i.debug.checkShaderErrors){const R=r.getProgramInfoLog(u)||"",O=r.getShaderInfoLog(b)||"",Z=r.getShaderInfoLog(L)||"",N=R.trim(),H=O.trim(),k=Z.trim();let U=!0,K=!0;if(r.getProgramParameter(u,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,u,b,L);else{const V=Vc(r,b,"vertex"),ne=Vc(r,L,"fragment");Bt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(u,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+V+`
`+ne)}else N!==""?xt("WebGLProgram: Program Info Log:",N):(H===""||k==="")&&(K=!1);K&&(P.diagnostics={runnable:U,programLog:N,vertexShader:{log:H,prefix:M},fragmentShader:{log:k,prefix:p}})}r.deleteShader(b),r.deleteShader(L),_=new ra(r,u),E=Ng(r,u)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(u,bg)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tg++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=b,this.fragmentShader=L,this}let qg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $g(e),t.set(e,n)),n}}class $g{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}}function Zg(i){return i===Ii||i===ha||i===da}function Kg(i,e,t,n,r,s){const a=new eu,o=new Yg,c=new Set,l=[],f=new Map,m=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function u(_,E,z,P,R,O){const Z=P.fog,N=R.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||H,k),K=h[_.type];let V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&xt("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));const ne=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=ne!==void 0?ne.length:0;let Le=0;N.morphAttributes.position!==void 0&&(Le=1),N.morphAttributes.normal!==void 0&&(Le=2),N.morphAttributes.color!==void 0&&(Le=3);let be,W,me,ye;if(K){const He=ti[K];be=He.vertexShader,W=He.fragmentShader}else{be=_.vertexShader,W=_.fragmentShader;const He=o.getVertexShaderStage(_),Rt=o.getFragmentShaderStage(_);o.update(_,He,Rt),me=He.id,ye=Rt.id}const fe=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),ce=R.isInstancedMesh===!0,_e=R.isBatchedMesh===!0,oe=!!_.map,ve=!!_.matcap,Oe=!!U,ze=Oe&&U.isPMREMTexture===!0,Ze=!!_.aoMap,st=!!_.lightMap,je=!!_.bumpMap&&_.wireframe===!1,tt=!!_.normalMap,Ke=!!_.displacementMap,Je=!!_.emissiveMap,it=!!_.metalnessMap,ut=!!_.roughnessMap,ft=_.anisotropy>0,C=_.clearcoat>0,_t=_.diffuseRoughness>0,pt=_.dispersion>0,dt=_.retroreflectivity>0,we=_.iridescence>0,bt=_.sheen>0,nt=_.transmission>0,ct=ft&&!!_.anisotropyMap,x=C&&!!_.clearcoatMap,v=C&&!!_.clearcoatNormalMap,B=C&&!!_.clearcoatRoughnessMap,q=_t&&!!_.diffuseRoughnessMap,J=we&&!!_.iridescenceMap,ge=we&&!!_.iridescenceThicknessMap,ue=bt&&!!_.sheenColorMap,Q=bt&&!!_.sheenRoughnessMap,le=!!_.specularMap,Ae=!!_.specularColorMap,I=!!_.specularIntensityMap,j=nt&&!!_.transmissionMap,ie=nt&&!!_.thicknessMap,Ee=!!_.gradientMap,Te=!!_.alphaMap,pe=_.alphaTest>0,Qe=!!_.alphaHash,mt=!!_.extensions;let Re=gi;_.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Re=i.toneMapping);const rt=ze?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,vt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:be,fragmentShader:W,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:_e,batchingColor:_e&&R._colorsTexture!==null,instancing:ce,instancingColor:ce&&R.instanceColor!==null,instancingMorph:ce&&R.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:oe,matcap:ve,envMap:Oe,envMapMode:Oe&&U.mapping,envMapPMREM:ze,envMapMaxLod:ze?rt.length-1:null,envMapSize:ze?rt[0].width:null,aoMap:Ze,lightMap:st,bumpMap:je,normalMap:tt,displacementMap:Ke,emissiveMap:Je,normalMapObjectSpace:tt&&_.normalMapType===Ph,normalMapTangentSpace:tt&&_.normalMapType===pa,packedNormalMap:tt&&_.normalMapType===pa&&Zg(_.normalMap.format),metalnessMap:it,roughnessMap:ut,anisotropy:ft,anisotropyMap:ct,clearcoat:C,clearcoatMap:x,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:_t,diffuseRoughnessMap:q,dispersion:pt,retroreflection:dt,iridescence:we,iridescenceMap:J,iridescenceThicknessMap:ge,sheen:bt,sheenColorMap:ue,sheenRoughnessMap:Q,specularMap:le,specularColorMap:Ae,specularIntensityMap:I,transmission:nt,transmissionMap:j,thicknessMap:ie,gradientMap:Ee,opaque:_.transparent===!1&&_.blending===Qr&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:pe,alphaHash:Qe,combine:_.combine,mapUv:oe&&g(_.map.channel),aoMapUv:Ze&&g(_.aoMap.channel),lightMapUv:st&&g(_.lightMap.channel),bumpMapUv:je&&g(_.bumpMap.channel),normalMapUv:tt&&g(_.normalMap.channel),displacementMapUv:Ke&&g(_.displacementMap.channel),emissiveMapUv:Je&&g(_.emissiveMap.channel),metalnessMapUv:it&&g(_.metalnessMap.channel),roughnessMapUv:ut&&g(_.roughnessMap.channel),anisotropyMapUv:ct&&g(_.anisotropyMap.channel),clearcoatMapUv:x&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&g(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:q&&g(_.diffuseRoughnessMap.channel),iridescenceMapUv:J&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&g(_.sheenRoughnessMap.channel),specularMapUv:le&&g(_.specularMap.channel),specularColorMapUv:Ae&&g(_.specularColorMap.channel),specularIntensityMapUv:I&&g(_.specularIntensityMap.channel),transmissionMapUv:j&&g(_.transmissionMap.channel),thicknessMapUv:ie&&g(_.thicknessMap.channel),alphaMapUv:Te&&g(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(tt||ft),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(oe||Te),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&tt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Y,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Le,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.filter(He=>He.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:oe&&_.map.isVideoTexture===!0&&It.getTransfer(_.map.colorSpace)===Gt,decodeVideoTextureEmissive:Je&&_.emissiveMap.isVideoTexture===!0&&It.getTransfer(_.emissiveMap.colorSpace)===Gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ni,flipSided:_.side===wn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function M(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)E.push(z),E.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(p(E,_),d(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function d(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){const E=h[_.type];let z;if(E){const P=ti[E];z=xd.clone(P.uniforms)}else z=_.uniforms;return z}function A(_,E){let z=f.get(E);return z!==void 0?++z.usedTimes:(z=new Xg(i,E,_,r),l.push(z),f.set(E,z)),z}function b(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),f.delete(_.cacheKey),_.destroy()}}function L(_){o.remove(_)}function T(){o.dispose()}return{getParameters:u,getProgramCacheKey:M,getUniforms:y,acquireProgram:A,releaseProgram:b,releaseShaderCache:L,programs:l,dispose:T}}function Jg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function $c(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,u,M,p,d){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:g,material:u,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:d},i[e]=y):(y.id=h.id,y.object=h,y.geometry=g,y.material=u,y.materialVariant=a(h),y.groupOrder=M,y.renderOrder=h.renderOrder,y.z=p,y.group=d),e++,y}function c(h,g,u,M,p,d,y){y.reversedDepth===!0&&(p=-p);const A=o(h,g,u,M,p,d);u.transmission>0?n.push(A):u.transparent===!0?r.push(A):t.push(A)}function l(h,g,u,M,p,d){const y=o(h,g,u,M,p,d);u.transmission>0?n.unshift(y):u.transparent===!0?r.unshift(y):t.unshift(y)}function f(h,g){t.length>1&&t.sort(h||Qg),n.length>1&&n.sort(g||$c),r.length>1&&r.sort(g||$c)}function m(){for(let h=e,g=i.length;h<g;h++){const u=i[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:m,sort:f}}function jg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Zc,i.set(n,[a])):r>=s.length?(a=new Zc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function e_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new St};break;case"SpotLight":t={position:new G,direction:new G,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function t_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let n_=0;function i_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function r_(i){const e=new e_,t=t_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const r=new G,s=new Wt,a=new Wt;function o(l){let f=0,m=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let g=0,u=0,M=0,p=0,d=0,y=0,A=0,b=0,L=0,T=0,_=0,E=0,z=0,P=0;l.sort(i_);for(let O=0,Z=l.length;O<Z;O++){const N=l[O],H=N.color,k=N.intensity,U=N.distance;let K=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ii?K=N.shadow.map.texture:K=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=H.r*k,m+=H.g*k,h+=H.b*k;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],k);P++}else if(N.isSunLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,se=t.get(N);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[u]=se,n.sunShadowMap[u]=K;const Le=ne.getViewportCount();for(let be=0;be<Le;be++)n.sunShadowMatrix[M+be]=ne.getMatrix(be),n.sunShadowCascade[M+be]=ne._cascadeData[be];M+=Le,u++}n.sun[g]=V,g++}else if(N.isDirectionalLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,se=t.get(N);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,n.directionalShadow[p]=se,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=N.shadow.matrix,L++}n.directional[p]=V,p++}else if(N.isSpotLight){const V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(H).multiplyScalar(k),V.distance=U,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[y]=V;const ne=N.shadow;if(N.map&&(n.spotLightMap[E]=N.map,E++,ne.updateMatrices(N),N.castShadow&&z++),n.spotLightMatrix[y]=ne.matrix,N.castShadow){const se=t.get(N);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,n.spotShadow[y]=se,n.spotShadowMap[y]=K,_++}y++}else if(N.isRectAreaLight){const V=e.get(N);V.color.copy(H).multiplyScalar(k),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=V,A++}else if(N.isPointLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){const ne=N.shadow,se=t.get(N);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,se.shadowCameraNear=ne.camera.near,se.shadowCameraFar=ne.camera.far,n.pointShadow[d]=se,n.pointShadowMap[d]=K,n.pointShadowMatrix[d]=N.shadow.matrix,T++}n.point[d]=V,d++}else if(N.isHemisphereLight){const V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(k),V.groundColor.copy(N.groundColor).multiplyScalar(k),n.hemi[b]=V,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qe.LTC_FLOAT_1,n.rectAreaLTC2=qe.LTC_FLOAT_2):(n.rectAreaLTC1=qe.LTC_HALF_1,n.rectAreaLTC2=qe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=h;const R=n.hash;(R.sunLength!==g||R.directionalLength!==p||R.pointLength!==d||R.spotLength!==y||R.rectAreaLength!==A||R.hemiLength!==b||R.numSunShadows!==u||R.numDirectionalShadows!==L||R.numPointShadows!==T||R.numSpotShadows!==_||R.numSpotMaps!==E||R.numLightProbes!==P)&&(n.sun.length=g,n.directional.length=p,n.spot.length=y,n.rectArea.length=A,n.point.length=d,n.hemi.length=b,n.sunShadow.length=u,n.sunShadowMap.length=u,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-z,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=P,R.sunLength=g,R.directionalLength=p,R.pointLength=d,R.spotLength=y,R.rectAreaLength=A,R.hemiLength=b,R.numSunShadows=u,R.numDirectionalShadows=L,R.numPointShadows=T,R.numSpotShadows=_,R.numSpotMaps=E,R.numLightProbes=P,n.version=n_++)}function c(l,f){let m=0,h=0,g=0,u=0,M=0,p=0;const d=f.matrixWorldInverse;for(let y=0,A=l.length;y<A;y++){const b=l[y];if(b.isSunLight){const L=n.sun[m];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(d),m++}else if(b.isDirectionalLight){const L=n.directional[h];L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),h++}else if(b.isSpotLight){const L=n.spot[u];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),u++}else if(b.isRectAreaLight){const L=n.rectArea[M];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(d),a.identity(),s.copy(b.matrixWorld),s.premultiply(d),a.extractRotation(s),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){const L=n.point[g];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(d),g++}else if(b.isHemisphereLight){const L=n.hemi[p];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:n}}function Kc(i){const e=new r_(i),t=[],n=[],r=[];function s(m){f.camera=m,t.length=0,n.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):t.push(m)}function o(m){n.push(m)}function c(){e.setup(t),r.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function l(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function s_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Kc(i),e.set(r,[o])):s>=a.length?(o=new Kc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`,l_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],c_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Jc=new Wt,qr=new G,ho=new G;function f_(i,e,t){let n=new rs;const r=new Nt,s=new Nt,a=new $t,o=new bd,c=new Td,l={},f=t.maxTextureSize,m={[Li]:wn,[wn]:Li,[ni]:ni},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:a_,fragmentShader:o_}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const u=new Vn;u.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new an(u,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let d=this.type;this.render=function(T,_,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===lh&&(xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);const z=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Er),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Z=d!==this.type;Z&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=T.length;N<H;N++){const k=T[N],U=k.shadow;if(U===void 0){xt("WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const K=U.getFrameExtents();r.multiply(K),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/K.x),r.x=s.x*K.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/K.y),r.y=s.y*K.y,U.mapSize.y=s.y));const V=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=V,U.map===null||Z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Zr){if(k.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ii(r.x,r.y,{format:Ii,type:si,minFilter:ln,magFilter:ln,generateMipmaps:!1}),U.map.texture.name=k.name+".shadowMap",U.map.depthTexture=new Ir(r.x,r.y,kn),U.map.depthTexture.name=k.name+".shadowMapDepth",U.map.depthTexture.format=Pi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=on,U.map.depthTexture.magFilter=on}else k.isPointLight?(U.map=new zl(r.x),U.map.depthTexture=new ou(r.x,ri)):(U.map=new ii(r.x,r.y),U.map.depthTexture=new Ir(r.x,r.y,ri)),U.map.depthTexture.name=k.name+".shadowMap",U.map.depthTexture.format=Pi,this.type===js?(U.map.depthTexture.compareFunction=V?Kf:Zf,U.map.depthTexture.minFilter=ln,U.map.depthTexture.magFilter=ln):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=on,U.map.depthTexture.magFilter=on);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==r.x||U.map.height!==r.y)&&U.map.setSize(r.x,r.y);const ne=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();k.isPointLight!==!0&&U.updateMatrices(k,E);const se=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:E.layers;for(let Le=0;Le<ne;Le++){const be=U.getCamera(Le);if(k.isPointLight){const W=U.camera,me=U.matrix,ye=k.distance||W.far;ye!==W.far&&(W.far=ye,W.updateProjectionMatrix()),qr.setFromMatrixPosition(k.matrixWorld),W.position.copy(qr),ho.copy(W.position),ho.add(l_[Le]),W.up.copy(c_[Le]),W.lookAt(ho),W.updateMatrixWorld(),me.makeTranslation(-qr.x,-qr.y,-qr.z),Jc.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Jc,W.coordinateSystem,W.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,Le),i.clear();else{Le===0&&(i.setRenderTarget(U.map),i.clear());const W=U.getViewport(Le);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),O.viewport(a)}n=U.getFrustum(Le),b(_,E,be,k,se,this.type)}U.isPointLightShadow!==!0&&this.type===Zr&&y(U,E),U.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(z,P,R)};function y(T,_){const E=e.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null?T.mapPass=new ii(r.x,r.y,{format:Ii,type:si}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,E,h,M,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,E,g,M,null)}function A(T,_,E,z){let P=null;const R=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=E.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const O=P.uuid,Z=_.uuid;let N=l[O];N===void 0&&(N={},l[O]=N);let H=N[Z];H===void 0&&(H=P.clone(),N[Z]=H,_.addEventListener("dispose",L)),P=H}if(P.visible=_.visible,P.wireframe=_.wireframe,z===Zr?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:m[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=i.properties.get(P);O.light=E}return P}function b(T,_,E,z,P,R){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Zr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const N=e.update(T),H=T.material;if(Array.isArray(H)){const k=N.groups;for(let U=0,K=k.length;U<K;U++){const V=k[U],ne=H[V.materialIndex];if(ne&&ne.visible){const se=A(T,ne,z,R);T.onBeforeShadow(i,T,_,E,N,se,V),i.renderBufferDirect(E,null,N,se,T,V),T.onAfterShadow(i,T,_,E,N,se,V)}}}else if(H.visible){const k=A(T,H,z,R);T.onBeforeShadow(i,T,_,E,N,k,null),i.renderBufferDirect(E,null,N,k,T,null),T.onAfterShadow(i,T,_,E,N,k,null)}}const Z=T.children;for(let N=0,H=Z.length;N<H;N++)b(Z[N],_,E,z,P,R)}function L(T){T.target.removeEventListener("dispose",L);for(const E in l){const z=l[E],P=T.target.uuid;P in z&&(z[P].dispose(),delete z[P])}}}function u_(i,e){function t(){let I=!1;const j=new $t;let ie=null;const Ee=new $t(0,0,0,0);return{setMask:function(Te){ie!==Te&&!I&&(i.colorMask(Te,Te,Te,Te),ie=Te)},setLocked:function(Te){I=Te},setClear:function(Te,pe,Qe,mt,Re){Re===!0&&(Te*=mt,pe*=mt,Qe*=mt),j.set(Te,pe,Qe,mt),Ee.equals(j)===!1&&(i.clearColor(Te,pe,Qe,mt),Ee.copy(j))},reset:function(){I=!1,ie=null,Ee.set(-1,0,0,0)}}}function n(){let I=!1,j=!1,ie=null,Ee=null,Te=null;return{setReversed:function(pe){if(j!==pe){const Qe=e.get("EXT_clip_control");pe?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),j=pe;const mt=Te;Te=null,this.setClear(mt)}},getReversed:function(){return j},setTest:function(pe){pe?Y(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(pe){ie!==pe&&!I&&(i.depthMask(pe),ie=pe)},setFunc:function(pe){if(j&&(pe=Hh[pe]),Ee!==pe){switch(pe){case Co:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case Io:i.depthFunc(i.EQUAL);break;case Do:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=pe}},setLocked:function(pe){I=pe},setClear:function(pe){Te!==pe&&(Te=pe,j&&(pe=1-pe),i.clearDepth(pe))},reset:function(){I=!1,ie=null,Ee=null,Te=null,j=!1}}}function r(){let I=!1,j=null,ie=null,Ee=null,Te=null,pe=null,Qe=null,mt=null,Re=null;return{setTest:function(rt){I||(rt?Y(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(rt){j!==rt&&!I&&(i.stencilMask(rt),j=rt)},setFunc:function(rt,vt,He){(ie!==rt||Ee!==vt||Te!==He)&&(i.stencilFunc(rt,vt,He),ie=rt,Ee=vt,Te=He)},setOp:function(rt,vt,He){(pe!==rt||Qe!==vt||mt!==He)&&(i.stencilOp(rt,vt,He),pe=rt,Qe=vt,mt=He)},setLocked:function(rt){I=rt},setClear:function(rt){Re!==rt&&(i.clearStencil(rt),Re=rt)},reset:function(){I=!1,j=null,ie=null,Ee=null,Te=null,pe=null,Qe=null,mt=null,Re=null}}}const s=new t,a=new n,o=new r;let c={};const l=new WeakMap;let f={},m={},h={},g=new WeakMap,u=[],M=null,p=!1,d=null,y=null,A=null,b=null,L=null,T=null,_=null,E=new St(0,0,0),z=0,P=!1,R=null,O=null,Z=null,N=null,H=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=K>=2);let ne=null,se={};const Le=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),W=new $t().fromArray(Le),me=new $t().fromArray(be);function ye(I,j,ie,Ee){const Te=new Uint8Array(4),pe=i.createTexture();i.bindTexture(I,pe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ie;Qe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(j+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return pe}const fe={};fe[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(es),je(!1),tt(Zl),Y(i.CULL_FACE),Ze(Er);function Y(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function ce(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function _e(I,j){return h[I]!==j?(i.bindFramebuffer(I,j),h[I]=j,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function oe(I,j){let ie=u,Ee=!1;if(I){ie=g.get(j),ie===void 0&&(ie=[],g.set(j,ie));const Te=I.textures;if(ie.length!==Te.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Qe=Te.length;pe<Qe;pe++)ie[pe]=i.COLOR_ATTACHMENT0+pe;ie.length=Te.length,Ee=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ie)}function ve(I){return M!==I?(i.useProgram(I),M=I,!0):!1}const Oe={[gr]:i.FUNC_ADD,[fh]:i.FUNC_SUBTRACT,[uh]:i.FUNC_REVERSE_SUBTRACT};Oe[hh]=i.MIN,Oe[dh]=i.MAX;const ze={[ph]:i.ZERO,[mh]:i.ONE,[gh]:i.SRC_COLOR,[Nf]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[Mh]:i.DST_COLOR,[vh]:i.DST_ALPHA,[_h]:i.ONE_MINUS_SRC_COLOR,[Uf]:i.ONE_MINUS_SRC_ALPHA,[Sh]:i.ONE_MINUS_DST_COLOR,[xh]:i.ONE_MINUS_DST_ALPHA,[Eh]:i.CONSTANT_COLOR,[bh]:i.ONE_MINUS_CONSTANT_COLOR,[Th]:i.CONSTANT_ALPHA,[wh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(I,j,ie,Ee,Te,pe,Qe,mt,Re,rt){if(I===Er){p===!0&&(ce(i.BLEND),p=!1);return}if(p===!1&&(Y(i.BLEND),p=!0),I!==ch){if(I!==d||rt!==P){if((y!==gr||L!==gr)&&(i.blendEquation(i.FUNC_ADD),y=gr,L=gr),rt)switch(I){case Qr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",I);break}else switch(I){case Qr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jl:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",I);break}A=null,b=null,T=null,_=null,E.set(0,0,0),z=0,d=I,P=rt}return}Te=Te||j,pe=pe||ie,Qe=Qe||Ee,(j!==y||Te!==L)&&(i.blendEquationSeparate(Oe[j],Oe[Te]),y=j,L=Te),(ie!==A||Ee!==b||pe!==T||Qe!==_)&&(i.blendFuncSeparate(ze[ie],ze[Ee],ze[pe],ze[Qe]),A=ie,b=Ee,T=pe,_=Qe),(mt.equals(E)===!1||Re!==z)&&(i.blendColor(mt.r,mt.g,mt.b,Re),E.copy(mt),z=Re),d=I,P=!1}function st(I,j){I.side===ni?ce(i.CULL_FACE):Y(i.CULL_FACE);let ie=I.side===wn;j&&(ie=!ie),je(ie),I.blending===Qr&&I.transparent===!1?Ze(Er):Ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Ee=I.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Je(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(I){R!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),R=I)}function tt(I){I!==ah?(Y(i.CULL_FACE),I!==O&&(I===Zl?i.cullFace(i.BACK):I===oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),O=I}function Ke(I){I!==Z&&(U&&i.lineWidth(I),Z=I)}function Je(I,j,ie){I?(Y(i.POLYGON_OFFSET_FILL),(N!==j||H!==ie)&&(N=j,H=ie,a.getReversed()&&(j=-j,ie=-ie),i.polygonOffset(j,ie))):ce(i.POLYGON_OFFSET_FILL)}function it(I){I?Y(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function ut(I){I===void 0&&(I=i.TEXTURE0+k-1),ne!==I&&(i.activeTexture(I),ne=I)}function ft(I,j,ie){ie===void 0&&(ne===null?ie=i.TEXTURE0+k-1:ie=ne);let Ee=se[ie];Ee===void 0&&(Ee={type:void 0,texture:void 0},se[ie]=Ee),(Ee.type!==I||Ee.texture!==j)&&(ne!==ie&&(i.activeTexture(ie),ne=ie),i.bindTexture(I,j||fe[I]),Ee.type=I,Ee.texture=j)}function C(){const I=se[ne];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _t(){try{i.compressedTexImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function pt(){try{i.compressedTexImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function dt(){try{i.texSubImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function we(){try{i.texSubImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function bt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function ct(){try{i.texStorage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function x(){try{i.texStorage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function v(){try{i.texImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function B(){try{i.texImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function q(I){return m[I]!==void 0?m[I]:i.getParameter(I)}function J(I,j){m[I]!==j&&(i.pixelStorei(I,j),m[I]=j)}function ge(I){W.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),W.copy(I))}function ue(I){me.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),me.copy(I))}function Q(I,j){let ie=l.get(j);ie===void 0&&(ie=new WeakMap,l.set(j,ie));let Ee=ie.get(I);Ee===void 0&&(Ee=i.getUniformBlockIndex(j,I.name),i.uniformBlockBinding(j,Ee,Ee),ie.set(I,Ee))}function le(I,j,ie){const Te=l.get(j).get(I);c[Te]!==ie&&(i.bindBufferBase(i.UNIFORM_BUFFER,Te,ie),c[Te]=ie)}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},m={},ne=null,se={},h={},c={},g=new WeakMap,u=[],M=null,p=!1,d=null,y=null,A=null,b=null,L=null,T=null,_=null,E=new St(0,0,0),z=0,P=!1,R=null,O=null,Z=null,N=null,H=null,W.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:ce,bindFramebuffer:_e,drawBuffers:oe,useProgram:ve,setBlending:Ze,setMaterial:st,setFlipSided:je,setCullFace:tt,setLineWidth:Ke,setPolygonOffset:Je,setScissorTest:it,activeTexture:ut,bindTexture:ft,unbindTexture:C,compressedTexImage2D:_t,compressedTexImage3D:pt,texImage2D:v,texImage3D:B,pixelStorei:J,getParameter:q,updateUBOMapping:Q,uniformBlockBinding:le,texStorage2D:ct,texStorage3D:x,texSubImage2D:dt,texSubImage3D:we,compressedTexSubImage2D:bt,compressedTexSubImage3D:nt,scissor:ge,viewport:ue,reset:Ae}}function h_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,f=new WeakMap,m=new Set;let h;const g=new WeakMap,u=new Set,M=new FinalizationRegistry(x=>u.delete(x));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(x,v){return p?new OffscreenCanvas(x,v):_a("canvas")}function y(x,v,B){let q=1;const J=ct(x);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const ge=Math.floor(q*J.width),ue=Math.floor(q*J.height);h===void 0&&(h=d(ge,ue));const Q=v?d(ge,ue):h;return Q.width=ge,Q.height=ue,Q.getContext("2d").drawImage(x,0,0,ge,ue),xt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ge+"x"+ue+")."),Q}else return"data"in x&&xt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),x;return x}function A(x){return x.generateMipmaps}function b(x){i.generateMipmap(x)}function L(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(x,v,B,q,J,ge=!1){if(x!==null){if(i[x]!==void 0)return i[x];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ue;q&&(ue=e.get("EXT_texture_norm16"),ue||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8),B===i.UNSIGNED_SHORT&&ue&&(Q=ue.R16_EXT),B===i.SHORT&&ue&&(Q=ue.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),v===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8),B===i.UNSIGNED_SHORT&&ue&&(Q=ue.RG16_EXT),B===i.SHORT&&ue&&(Q=ue.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ue&&(Q=ue.RGB16_EXT),B===i.SHORT&&ue&&(Q=ue.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){const le=ge?ga:It.getTransfer(J);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=le===Gt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ue&&(Q=ue.RGBA16_EXT),B===i.SHORT&&ue&&(Q=ue.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(x,v){let B;return x?v===null||v===ri||v===Pr?B=i.DEPTH24_STENCIL8:v===kn?B=i.DEPTH32F_STENCIL8:v===ns&&(B=i.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ri||v===Pr?B=i.DEPTH_COMPONENT24:v===kn?B=i.DEPTH_COMPONENT32F:v===ns&&(B=i.DEPTH_COMPONENT16),B}function E(x,v){return A(x)===!0||x.isFramebufferTexture&&x.minFilter!==on&&x.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function z(x){const v=new WeakRef(x);n.get(x).__ref=v,u.add(v),M.register(x,v,v)}function P(x){const v=n.get(x).__ref;v!==void 0&&(u.delete(v),M.unregister(v))}function R(x){Z(x.target)}function O(x){N(x.target)}function Z(x){x.removeEventListener("dispose",R),P(x),k(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&m.delete(x)}function N(x){x.removeEventListener("dispose",O),P(x),K(x)}function H(){for(const x of u){const v=x.deref();v!==void 0&&(v.isRenderTarget===!0?N(v):Z(v))}u.clear(),m.clear()}function k(x){const v=n.get(x);if(v.__webglInit===void 0)return;const B=x.source,q=g.get(B);if(q){const J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&U(x),Object.keys(q).length===0&&g.delete(B)}n.remove(x)}function U(x){const v=n.get(x);i.deleteTexture(v.__webglTexture);const B=x.source,q=g.get(B);delete q[v.__cacheKey],a.memory.textures--}function K(x){const v=n.get(x);v.__depthDisposeCallback&&v.__depthDisposeCallback();const B=x.depthTexture;if(B&&B.renderTarget===x&&Z(B),x.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let ge=0;ge<v.__webglFramebuffer[J].length;ge++)i.deleteFramebuffer(v.__webglFramebuffer[J][ge]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const q=x.textures;for(let J=0,ge=q.length;J<ge;J++){const ue=n.get(q[J]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(q[J])}n.remove(x)}let V=0;function ne(){V=0}function se(){return V}function Le(x){V=x}function be(){const x=V;return x>=r.maxTextures&&xt("WebGLTextures: Trying to use "+(x+1)+" texture units while this GPU supports only "+r.maxTextures),V+=1,x}function W(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.mipmapsAutoUpdate),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function me(x,v){const B=n.get(x);if(x.isVideoTexture&&bt(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&B.__version!==x.version){const q=x.image;if(q===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(B,x,v);return}}else x.isExternalTexture&&(B.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function ye(x,v){const B=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){st(B,x,v);return}else x.isExternalTexture&&(B.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function fe(x,v){const B=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){st(B,x,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function Y(x,v){const B=n.get(x);if(x.version>0&&B.__version!==x.version){je(B,x,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const ce={[ua]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},_e={[on]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},oe={[Dh]:i.NEVER,[Jf]:i.ALWAYS,[Nh]:i.LESS,[Zf]:i.LEQUAL,[Uh]:i.EQUAL,[Kf]:i.GEQUAL,[Fh]:i.GREATER,[Oh]:i.NOTEQUAL};function ve(x,v){if(v.type===kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ln||v.magFilter===za||v.magFilter===vs||v.magFilter===zn||v.minFilter===ln||v.minFilter===za||v.minFilter===vs||v.minFilter===zn)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,ce[v.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,ce[v.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,ce[v.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,_e[v.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===on||v.minFilter!==vs&&v.minFilter!==zn||v.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(x,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(x,v){let B=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",R),z(v));const q=v.source;let J=g.get(q);J===void 0&&(J={},g.set(q,J));const ge=W(v);if(ge!==x.__cacheKey){J[ge]===void 0&&(J[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[ge].usedTimes++;const ue=J[x.__cacheKey];ue!==void 0&&(J[x.__cacheKey].usedTimes--,ue.usedTimes===0&&U(v)),x.__cacheKey=ge,x.__webglTexture=J[ge].texture}return B}function ze(x,v,B){return Math.floor(Math.floor(x/B)/v)}function Ze(x,v,B,q){const ge=x.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,q,v.data);else{ge.sort((I,j)=>I.start-j.start);let ue=0;for(let I=1;I<ge.length;I++){const j=ge[ue],ie=ge[I],Ee=j.start+j.count,Te=ze(ie.start,v.width,4),pe=ze(j.start,v.width,4);ie.start<=Ee+1&&Te===pe&&ze(ie.start+ie.count-1,v.width,4)===Te?j.count=Math.max(j.count,ie.start+ie.count-j.start):(++ue,ge[ue]=ie)}ge.length=ue+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),Ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let I=0,j=ge.length;I<j;I++){const ie=ge[I],Ee=Math.floor(ie.start/4),Te=Math.ceil(ie.count/4),pe=Ee%v.width,Qe=Math.floor(Ee/v.width),mt=Te,Re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Qe),t.texSubImage2D(i.TEXTURE_2D,0,pe,Qe,mt,Re,B,q,v.data)}x.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function st(x,v,B){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const J=Oe(x,v),ge=v.source;t.bindTexture(q,x.__webglTexture,i.TEXTURE0+B);const ue=n.get(ge);if(ge.version!==ue.__version||J===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Re=It.getPrimaries(It.workingColorSpace),rt=v.colorSpace===Ai?null:It.getPrimaries(v.colorSpace),vt=v.colorSpace===Ai||Re===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let le=y(v.image,!1,r.maxTextureSize);le=nt(v,le);const Ae=s.convert(v.format,v.colorSpace),I=s.convert(v.type);let j=T(v.internalFormat,Ae,I,v.normalized,v.colorSpace,v.isVideoTexture);ve(q,v);let ie;const Ee=v.mipmaps,Te=v.isVideoTexture!==!0,pe=ue.__version===void 0||J===!0,Qe=ge.dataReady,mt=E(v,le);if(v.isDepthTexture)j=_(v.format===Ri,v.type),pe&&(Te?t.texStorage2D(i.TEXTURE_2D,1,j,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,j,le.width,le.height,0,Ae,I,null));else if(v.isDataTexture)if(Ee.length>0){Te&&pe&&t.texStorage2D(i.TEXTURE_2D,mt,j,Ee[0].width,Ee[0].height);for(let Re=0,rt=Ee.length;Re<rt;Re++)ie=Ee[Re],Te?Qe&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ie.width,ie.height,Ae,I,ie.data):t.texImage2D(i.TEXTURE_2D,Re,j,ie.width,ie.height,0,Ae,I,ie.data);v.generateMipmaps=!1}else Te?(pe&&t.texStorage2D(i.TEXTURE_2D,mt,j,le.width,le.height),Qe&&Ze(v,le,Ae,I)):t.texImage2D(i.TEXTURE_2D,0,j,le.width,le.height,0,Ae,I,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Te&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,j,Ee[0].width,Ee[0].height,le.depth);for(let Re=0,rt=Ee.length;Re<rt;Re++)if(ie=Ee[Re],v.format!==Gn)if(Ae!==null)if(Te){if(Qe)if(v.layerUpdates.size>0){const vt=Lc(ie.width,ie.height,v.format,v.type);for(const He of v.layerUpdates){const Rt=ie.data.subarray(He*vt/ie.data.BYTES_PER_ELEMENT,(He+1)*vt/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,He,ie.width,ie.height,1,Ae,Rt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,ie.width,ie.height,le.depth,Ae,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Re,j,ie.width,ie.height,le.depth,0,ie.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,ie.width,ie.height,le.depth,Ae,I,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Re,j,ie.width,ie.height,le.depth,0,Ae,I,ie.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Te&&pe&&t.texStorage2D(i.TEXTURE_2D,mt,j,Ee[0].width,Ee[0].height);for(let Re=0,rt=Ee.length;Re<rt;Re++)ie=Ee[Re],v.format!==Gn?Ae!==null?Te?Qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Re,0,0,ie.width,ie.height,Ae,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Re,j,ie.width,ie.height,0,ie.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Qe&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ie.width,ie.height,Ae,I,ie.data):t.texImage2D(i.TEXTURE_2D,Re,j,ie.width,ie.height,0,Ae,I,ie.data)}else if(v.isDataArrayTexture)if(Te){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,j,le.width,le.height,le.depth),Qe)if(v.layerUpdates.size>0){const Re=Lc(le.width,le.height,v.format,v.type);for(const rt of v.layerUpdates){const vt=le.data.subarray(rt*Re/le.data.BYTES_PER_ELEMENT,(rt+1)*Re/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,le.width,le.height,1,Ae,I,vt)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,I,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,j,le.width,le.height,le.depth,0,Ae,I,le.data);else if(v.isData3DTexture)Te?(pe&&t.texStorage3D(i.TEXTURE_3D,mt,j,le.width,le.height,le.depth),Qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,I,le.data)):t.texImage3D(i.TEXTURE_3D,0,j,le.width,le.height,le.depth,0,Ae,I,le.data);else if(v.isFramebufferTexture){if(pe)if(Te)t.texStorage2D(i.TEXTURE_2D,mt,j,le.width,le.height);else{let Re=le.width,rt=le.height;for(let vt=0;vt<mt;vt++)t.texImage2D(i.TEXTURE_2D,vt,j,Re,rt,0,Ae,I,null),Re>>=1,rt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const Re=i.canvas;if(Re.hasAttribute("layoutsubtree")||Re.setAttribute("layoutsubtree","true"),le.parentNode!==Re){Re.appendChild(le),m.add(v),Re.onpaint=rt=>{const vt=rt.changedElements;for(const He of m)vt.includes(He.image)&&(He.needsUpdate=!0)},Re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{const vt=i.RGBA,He=i.RGBA,Rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,He,Rt,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Te&&pe){const Re=ct(Ee[0]);t.texStorage2D(i.TEXTURE_2D,mt,j,Re.width,Re.height)}for(let Re=0,rt=Ee.length;Re<rt;Re++)ie=Ee[Re],Te?Qe&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,Ae,I,ie):t.texImage2D(i.TEXTURE_2D,Re,j,Ae,I,ie);v.generateMipmaps=!1}else if(Te){if(pe){const Re=ct(le);t.texStorage2D(i.TEXTURE_2D,mt,j,Re.width,Re.height)}Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,I,le)}else t.texImage2D(i.TEXTURE_2D,0,j,Ae,I,le);A(v)&&v.mipmapsAutoUpdate===!0&&b(q),ue.__version=ge.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function je(x,v,B){if(v.image.length!==6)return;const q=Oe(x,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+B);const ge=n.get(J);if(J.version!==ge.__version||q===!0){t.activeTexture(i.TEXTURE0+B);const ue=It.getPrimaries(It.workingColorSpace),Q=v.colorSpace===Ai?null:It.getPrimaries(v.colorSpace),le=v.colorSpace===Ai||ue===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,I=v.image[0]&&v.image[0].isDataTexture,j=[];for(let He=0;He<6;He++)!Ae&&!I?j[He]=y(v.image[He],!0,r.maxCubemapSize):j[He]=I?v.image[He].image:v.image[He],j[He]=nt(v,j[He]);const ie=j[0],Ee=s.convert(v.format,v.colorSpace),Te=s.convert(v.type);let pe=T(v.internalFormat,Ee,Te,v.normalized,v.colorSpace);const Qe=v.isVideoTexture!==!0,mt=ge.__version===void 0||q===!0,Re=J.dataReady;let rt=E(v,ie);ve(i.TEXTURE_CUBE_MAP,v);let vt;if(v.isDepthTexture){if(pe=_(v.format===Ri,v.type),mt)if(Qe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,pe,ie.width,ie.height);else for(let He=0;He<6;He++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,pe,ie.width,ie.height,0,Ee,Te,null)}else if(Ae){Qe&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,rt,pe,ie.width,ie.height);for(let He=0;He<6;He++){vt=j[He].mipmaps;for(let Rt=0;Rt<vt.length;Rt++){const Zt=vt[Rt];v.format!==Gn?Ee!==null?Qe?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Rt,0,0,Zt.width,Zt.height,Ee,Zt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Rt,pe,Zt.width,Zt.height,0,Zt.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Rt,0,0,Zt.width,Zt.height,Ee,Te,Zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Rt,pe,Zt.width,Zt.height,0,Ee,Te,Zt.data)}}}else{if(vt=v.mipmaps,Qe&&mt){vt.length>0&&rt++;const He=ct(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,rt,pe,He.width,He.height)}for(let He=0;He<6;He++)if(I){Qe?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,j[He].width,j[He].height,Ee,Te,j[He].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,pe,j[He].width,j[He].height,0,Ee,Te,j[He].data);for(let Rt=0;Rt<vt.length;Rt++){const Dn=vt[Rt].image[He].image;Qe?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Rt+1,0,0,Dn.width,Dn.height,Ee,Te,Dn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Rt+1,pe,Dn.width,Dn.height,0,Ee,Te,Dn.data)}}else{Qe?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,Ee,Te,j[He]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,pe,Ee,Te,j[He]);for(let Rt=0;Rt<vt.length;Rt++){const Zt=vt[Rt];Qe?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Rt+1,0,0,Ee,Te,Zt.image[He]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Rt+1,pe,Ee,Te,Zt.image[He])}}}A(v)&&v.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),ge.__version=J.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function tt(x,v,B,q,J,ge){const ue=s.convert(B.format,B.colorSpace),Q=s.convert(B.type),le=T(B.internalFormat,ue,Q,B.normalized,B.colorSpace),Ae=n.get(v),I=n.get(B);if(I.__renderTarget=v,!Ae.__hasExternalTextures){const j=Math.max(1,v.width>>ge),ie=Math.max(1,v.height>>ge);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ge,le,j,ie,v.depth,0,ue,Q,null):t.texImage2D(J,ge,le,j,ie,0,ue,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,x),we(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,I.__webglTexture,0,dt(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,I.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(x,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,x),v.depthBuffer){const q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,ge=_(v.stencilBuffer,J),ue=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(v),ge,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(v),ge,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ge,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,x)}else{const q=v.textures;for(let J=0;J<q.length;J++){const ge=q[J],ue=s.convert(ge.format,ge.colorSpace),Q=s.convert(ge.type),le=T(ge.internalFormat,ue,Q,ge.normalized,ge.colorSpace);we(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(v),le,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(v),le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(x,v,B){const q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(v.depthTexture);J.__renderTarget=v;const ge=q?v.depthTexture.image[0]:v.depthTexture.image;(!J.__webglTexture||ge.width!==v.width||ge.height!==v.height)&&(ge.width=v.width,ge.height=v.height,v.depthTexture.needsUpdate=!0),q?Y(v.depthTexture,0):me(v.depthTexture,0);const ue=J.__webglTexture,Q=dt(v),le=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Ae=v.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Pi)we(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,le,ue,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,le,ue,0);else if(v.depthTexture.format===Ri)we(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,le,ue,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,le,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(x){const v=n.get(x),B=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const q=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(x.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)Je(v.__webglFramebuffer[q],x,q);else x.texture.mipmaps.length>0?Je(v.__webglFramebuffer[0],x,0):Je(v.__webglFramebuffer,x,0);else if(B){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),Ke(v.__webglDepthbuffer[q],x,!1);else{const J=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ge)}}else if(x.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ke(v.__webglDepthbuffer,x,!1);else{const J=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(x,v,B){const q=n.get(x);v!==void 0&&tt(q.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&it(x)}function ft(x){const v=x.texture,B=n.get(x),q=n.get(v);x.addEventListener("dispose",O),z(x);const J=x.textures,ge=x.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),ge){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let le=0;le<v.mipmaps.length;le++)B.__webglFramebuffer[Q][le]=i.createFramebuffer()}else B.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)B.__webglFramebuffer[Q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Q=0,le=J.length;Q<le;Q++){const Ae=n.get(J[Q]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(x.samples>0&&we(x)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const le=J[Q];B.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);const Ae=s.convert(le.format,le.colorSpace),I=s.convert(le.type),j=T(le.internalFormat,Ae,I,le.normalized,le.colorSpace,x.isXRRenderTarget===!0),ie=dt(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,j,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(B.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ve(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)tt(B.__webglFramebuffer[Q][le],x,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le);else tt(B.__webglFramebuffer[Q],x,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);A(v)?b(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Q=0,le=J.length;Q<le;Q++){const Ae=J[Q],I=n.get(Ae);let j=i.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(j=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,I.__webglTexture),ve(j,Ae),tt(B.__webglFramebuffer,x,Ae,i.COLOR_ATTACHMENT0+Q,j,0),A(Ae)&&b(j)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(Q=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,q.__webglTexture),ve(Q,v),v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)tt(B.__webglFramebuffer[le],x,v,i.COLOR_ATTACHMENT0,Q,le);else tt(B.__webglFramebuffer,x,v,i.COLOR_ATTACHMENT0,Q,0);A(v)?b(Q):v.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}x.depthBuffer&&it(x)}function C(x){const v=x.textures;for(let B=0,q=v.length;B<q;B++){const J=v[B];if(A(J)&&J.mipmapsAutoUpdate===!0){const ge=L(x),ue=n.get(J).__webglTexture;t.bindTexture(ge,ue),b(ge),t.unbindTexture()}}}const _t=[];function pt(x){if(x.samples>0){if(we(x)===!1){const v=x.textures,B=x.width,q=x.height;let J=i.COLOR_BUFFER_BIT;const ge=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(x),Q=v.length>1;if(Q)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),x.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]);const I=n.get(v[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,J,i.NEAREST),c===!0&&(_t.length=0,_t.push(i.COLOR_ATTACHMENT0+Ae),x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&_t.push(ge),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]);const I=n.get(v[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&c){const v=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function dt(x){return Math.min(r.maxSamples,x.samples)}function we(x){const v=n.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(x){const v=a.render.frame;f.get(x)!==v&&(f.set(x,v),x.update())}function nt(x,v){const B=x.colorSpace,q=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||B!==ma&&B!==Ai&&(It.getTransfer(B)===Gt?(q!==Gn||J!==_n)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",B)),v}function ct(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(l.width=x.naturalWidth||x.width,l.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(l.width=x.displayWidth,l.height=x.displayHeight):(l.width=x.width,l.height=x.height),l}this.allocateTextureUnit=be,this.resetTextureUnits=ne,this.getTextureUnits=se,this.setTextureUnits=Le,this.setTexture2D=me,this.setTexture2DArray=ye,this.setTexture3D=fe,this.setTextureCube=Y,this.rebindTextures=ut,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=we,this.dispose=H}function d_(i,e){function t(n,r=Ai){let s;const a=It.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vf)return i.BYTE;if(n===Wf)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===Yf)return i.ALPHA;if(n===$f)return i.RGB;if(n===Gn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===wa)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===Ii)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(a===Gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===zo||n===ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Ho||n===Vo||n===Wo||n===Xo||n===ha||n===qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Go||n===Ho)return a===Gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wo)return s.COMPRESSED_R11_EAC;if(n===Xo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ha)return s.COMPRESSED_RG11_EAC;if(n===qo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yo||n===$o||n===Zo||n===Ko||n===Jo||n===Qo||n===jo||n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===al)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Yo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===ll||n===cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ol)return a===Gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===ul||n===da||n===hl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const p_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m_=`
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

}`;class g_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yi({vertexShader:p_,fragmentShader:m_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new Aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class __ extends Zi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,m=null,h=null,g=null,u=null;const M=typeof XRWebGLBinding<"u",p=new g_,d={},y=t.getContextAttributes();let A=null,b=null;const L=[],T=[],_=new Nt;let E=null,z=null;const P=new Bn;P.viewport=new $t;const R=new Bn;R.viewport=new $t;const O=[P,R],Z=new Cd;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let me=L[W];return me===void 0&&(me=new $a,L[W]=me),me.getTargetRaySpace()},this.getControllerGrip=function(W){let me=L[W];return me===void 0&&(me=new $a,L[W]=me),me.getGripSpace()},this.getHand=function(W){let me=L[W];return me===void 0&&(me=new $a,L[W]=me),me.getHandSpace()};function k(W){const me=T.indexOf(W.inputSource);if(me===-1)return;const ye=L[me];ye!==void 0&&(ye.update(W.inputSource,W.frame,l||a),ye.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",K);for(let W=0;W<L.length;W++){const me=T[W];me!==null&&(T[W]=null,L[W].disconnect(me))}N=null,H=null,p.reset();for(const W in d)delete d[W];if(e.setRenderTarget(A),g=null,h=null,m=null,r=null,b=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),z!==null){const W=z.camera;W.fov=z.fov,W.zoom=z.zoom,W.updateProjectionMatrix(),z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return u},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",U),r.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,fe=null,Y=null;y.depth&&(Y=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?Ri:Pi,fe=y.stencil?Pr:ri);const ce={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new ii(h.textureWidth,h.textureHeight,{format:Gn,type:_n,depthTexture:new Ir(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new ii(g.framebufferWidth,g.framebufferHeight,{format:Gn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(W){for(let me=0;me<W.removed.length;me++){const ye=W.removed[me],fe=T.indexOf(ye);fe>=0&&(T[fe]=null,L[fe].disconnect(ye))}for(let me=0;me<W.added.length;me++){const ye=W.added[me];let fe=T.indexOf(ye);if(fe===-1){for(let ce=0;ce<L.length;ce++)if(ce>=T.length){T.push(ye),fe=ce;break}else if(T[ce]===null){T[ce]=ye,fe=ce;break}if(fe===-1)break}const Y=L[fe];Y&&Y.connect(ye)}}function V(W,me){me===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(me.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let me=W.near,ye=W.far;p.texture!==null&&(p.depthNear>0&&(me=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),Z.near=R.near=P.near=me,Z.far=R.far=P.far=ye,(N!==Z.near||H!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),N=Z.near,H=Z.far),Z.layers.mask=W.layers.mask|6,P.layers.mask=Z.layers.mask&-5,R.layers.mask=Z.layers.mask&-3;const fe=W.parent,Y=Z.cameras;V(Z,fe);for(let ce=0;ce<Y.length;ce++)V(Y[ce],fe);Z.projectionMatrix.copy(P.projectionMatrix),Z.projectionMatrixInverse.copy(P.projectionMatrixInverse),z===null&&W.isPerspectiveCamera&&(z={camera:W,fov:W.fov,zoom:W.zoom}),ne(W,Z,fe)};function ne(W,me,ye){ye===null?W.matrix.copy(me.matrixWorld):(W.matrix.copy(ye.matrixWorld),W.matrix.invert(),W.matrix.multiply(me.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(me.projectionMatrix),W.projectionMatrixInverse.copy(me.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=dl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(W){c=W,h!==null&&(h.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Z)},this.getCameraTexture=function(W){return d[W]};let se=null;function Le(W,me){if(f=me.getViewerPose(l||a),u=me,f!==null){const ye=f.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let fe=!1;ye.length!==Z.cameras.length&&(Z.cameras.length=0,fe=!0);for(let oe=0;oe<ye.length;oe++){const ve=ye[oe];let Oe=null;if(g!==null)Oe=g.getViewport(ve);else{const Ze=m.getViewSubImage(h,ve);Oe=Ze.viewport,oe===0&&(e.setRenderTargetTextures(b,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(b))}let ze=O[oe];ze===void 0&&(ze=new Bn,ze.layers.enable(oe),ze.viewport=new $t,O[oe]=ze),ze.matrix.fromArray(ve.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(ve.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),oe===0&&(Z.matrix.copy(ze.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),fe===!0&&Z.cameras.push(ze)}const Y=r.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){m=n.getBinding();const oe=m.getDepthInformation(ye[0]);oe&&oe.isValid&&oe.texture&&p.init(oe,r.renderState)}if(Y&&Y.includes("camera-access")&&M){e.state.unbindTexture(),m=n.getBinding();for(let oe=0;oe<ye.length;oe++){const ve=ye[oe].camera;if(ve){let Oe=d[ve];Oe||(Oe=new lu,d[ve]=Oe);const ze=m.getCameraImage(ve);Oe.sourceTexture=ze}}}}for(let ye=0;ye<L.length;ye++){const fe=T[ye],Y=L[ye];fe!==null&&Y!==void 0&&Y.update(fe,me,l||a)}se&&se(W,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),u=null}const be=new gu;be.setAnimationLoop(Le),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const v_=new Wt,wu=new Et;wu.set(-1,0,0,0,1,0,0,0,1);function x_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,cu(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,y,A,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),m(p,d)):d.isMeshPhongMaterial?(s(p,d),f(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&g(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),u(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),M(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,y,A):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===wn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===wn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d),A=y.envMap,b=y.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(wu),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,y,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function m(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,y){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===wn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function u(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function M_(i,e,t,n){let r={},s={};function a(y,A){const b=A.program;n.uniformBlockBinding(y,b,r[y.id])}function o(y,A){let b=r[y.id];b===void 0&&(u(y),b=c(y),r[y.id]=b,y.addEventListener("dispose",p));const L=A.program;n.updateUBOMapping(y,L);const T=e.render.frame;s[y.id]!==T&&(l(y),s[y.id]=T)}function c(y){const A=i.createBuffer(),b=y.__size,L=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,L),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(y){const A=r[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,_=b.length;T<_;T++){const E=b[T];if(Array.isArray(E))for(let z=0,P=E.length;z<P;z++)f(E[z],T,z,L);else f(E,T,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,A,b,L){if(h(y,A,b,L)===!0){const T=y.__offset,_=y.value;if(Array.isArray(_)){let E=0;for(let z=0;z<_.length;z++){const P=_[z],R=M(P,!0);m(P,y.__data,E),E+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function m(y,A,b){typeof y=="number"||typeof y=="boolean"?A[b]=y:y.isMatrix3?(A[b]=y.elements[0],A[b+1]=y.elements[1],A[b+2]=y.elements[2],A[b+3]=0,A[b+4]=y.elements[3],A[b+5]=y.elements[4],A[b+6]=y.elements[5],A[b+7]=0,A[b+8]=y.elements[6],A[b+9]=y.elements[7],A[b+10]=y.elements[8],A[b+11]=0):ArrayBuffer.isView(y)?A.set(y.subarray(0,A.length-b),b):y.toArray(A,b)}function h(y,A,b,L){const T=y.value,_=A+"_"+b;if(Array.isArray(T)){L[_]===void 0&&(L[_]=[]);const E=L[_];let z=!1;for(let P=0;P<T.length;P++)g(T[P],E,P)===!0&&(z=!0);return z}return g(T,L,_)}function g(y,A,b){if(A[b]===void 0)return typeof y=="number"||typeof y=="boolean"?A[b]=y:ArrayBuffer.isView(y)?A[b]=y.slice():A[b]=y.clone(),!0;{const L=A[b];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return A[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function u(y){const A=y.uniforms;let b=0;const L=16;for(let _=0,E=A.length;_<E;_++){const z=Array.isArray(A[_])?A[_]:[A[_]];for(let P=0,R=z.length;P<R;P++){const O=z[P],Z=Array.isArray(O.value)?O.value:[O.value],N=Array.isArray(A[_])||Array.isArray(O.value);let H=b;for(let U=0,K=Z.length;U<K;U++){const V=Z[U],ne=M(V,N),se=b%L,Le=se%ne.boundary,be=se+Le;b+=Le,be!==0&&L-be<ne.storage&&(b+=L-be),U===0&&(H=b),b+=ne.storage}const k=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new k((b-H)/Float32Array.BYTES_PER_ELEMENT),O.__offset=H}}const T=b%L;return T>0&&(b+=L-T),y.__size=b,y.__cache={},this}function M(y,A){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",y),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(y){const A=y.target;A.removeEventListener("dispose",p),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const y in r)i.deleteBuffer(r[y]);r={},s={}}return{bind:a,update:o,dispose:d}}const S_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function y_(){return jn===null&&(jn=new wr(S_,16,16,Ii,si),jn.name="DFG_LUT",jn.minFilter=ln,jn.magFilter=ln,jn.wrapS=bn,jn.wrapT=bn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class E_{constructor(e={}){const{canvas:t=kh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:g=_n}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const M=g,p=new Set([Nl,Dl,Il]),d=new Set([_n,ri,ns,Pr,Ll,Pl]),y=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let L=null,T=null;const _=[],E=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,O=null,Z=null,N=null,H=null;this._outputColorSpace=Sn;let k=0,U=0,K=null,V=-1,ne=null;const se=new $t,Le=new $t;let be=null;const W=new St(0);let me=0,ye=t.width,fe=t.height,Y=1,ce=null,_e=null;const oe=new $t(0,0,ye,fe),ve=new $t(0,0,ye,fe);let Oe=!1;const ze=new rs,Ze=new Ol;let st=!1,je=!1;const tt=new Wt,Ke=new G,Je=new $t,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function ft(){return K===null?Y:1}let C=n;function _t(S,D){return t.getContext(S,D)}let pt,dt,we,bt,nt,ct,x,v,B,q,J,ge,ue,Q,le,Ae,I,j,ie,Ee,Te,pe,Qe;try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",He,!1),C===null){const D="webgl2";if(C=_t(D,S),C===null)throw _t(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(S){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Bt("WebGLRenderer: "+S.message),S}function mt(){pt=new w0(C),pt.init(),Te=new d_(C,pt),dt=new m0(C,pt,e,Te),we=new u_(C,pt),dt.reversedDepthBuffer&&h&&we.buffers.depth.setReversed(!0),Z=C.createFramebuffer(),N=C.createFramebuffer(),H=C.createFramebuffer(),bt=new C0(C),nt=new Jg,ct=new h_(C,pt,we,nt,dt,Te,bt),x=new T0(P),v=new Pd(C),pe=new d0(C,v),B=new A0(C,v,bt,pe),q=new P0(C,B,v,pe,bt),j=new L0(C,dt,ct),le=new g0(nt),J=new Kg(P,x,pt,dt,pe,le),ge=new x_(P,nt),ue=new jg,Q=new s_(pt),I=new h0(P,x,we,q,u,c),Ae=new f_(P,q,dt),Qe=new M_(C,bt,dt,we),ie=new p0(C,pt,bt),Ee=new R0(C,pt,bt),bt.programs=J.programs,P.capabilities=dt,P.extensions=pt,P.properties=nt,P.renderLists=ue,P.shadowMap=Ae,P.state=we,P.info=bt}M!==_n&&(z=new D0(M,t.width,t.height,o,r,s));const Re=new __(P,C);this.xr=Re,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=pt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=pt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(ye,fe,!1))},this.getSize=function(S){return S.set(ye,fe)},this.setSize=function(S,D,ee=!0){if(Re.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=S,fe=D,t.width=Math.floor(S*Y),t.height=Math.floor(D*Y),ee===!0&&(t.style.width=S+"px",t.style.height=D+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(ye*Y,fe*Y).floor()},this.setDrawingBufferSize=function(S,D,ee){ye=S,fe=D,Y=ee,t.width=Math.floor(S*ee),t.height=Math.floor(D*ee),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(M===_n){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(se)},this.getViewport=function(S){return S.copy(oe)},this.setViewport=function(S,D,ee,X){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,D,ee,X),we.viewport(se.copy(oe).multiplyScalar(ft()).round())},this.getScissor=function(S){return S.copy(ve)},this.setScissor=function(S,D,ee,X){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,D,ee,X),we.scissor(Le.copy(ve).multiplyScalar(ft()).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(S){we.setScissorTest(Oe=S)},this.setOpaqueSort=function(S){ce=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,ee=!0){let X=0;if(S){let $=!1;if(K!==null){const Ue=K.texture.format;$=p.has(Ue)}if($){const Ue=K.texture.type,Fe=d.has(Ue),Pe=I.getClearColor(),ke=I.getClearAlpha(),Ye=Pe.r,ot=Pe.g,w=Pe.b;Fe?(y[0]=Ye,y[1]=ot,y[2]=w,y[3]=ke,C.clearBufferuiv(C.COLOR,0,y)):(A[0]=Ye,A[1]=ot,A[2]=w,A[3]=ke,C.clearBufferiv(C.COLOR,0,A))}else X|=C.COLOR_BUFFER_BIT}D&&(X|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",He,!1),I.dispose(),ue.dispose(),Q.dispose(),ct.dispose(),nt.dispose(),x.dispose(),q.dispose(),B.dispose(),pe.dispose(),Qe.dispose(),J.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",te),Re.removeEventListener("sessionend",he),de.stop()};function rt(S){S.preventDefault(),tc("WebGLRenderer: Context Lost."),R=!0}function vt(){tc("WebGLRenderer: Context Restored."),R=!1;const S=bt.autoReset,D=Ae.enabled,ee=Ae.autoUpdate,X=Ae.needsUpdate,$=Ae.type;mt(),bt.autoReset=S,Ae.enabled=D,Ae.autoUpdate=ee,Ae.needsUpdate=X,Ae.type=$}function He(S){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Rt(S){const D=S.target;D.removeEventListener("dispose",Rt),Zt(D)}function Zt(S){Dn(S),nt.remove(S)}function Dn(S){const D=nt.get(S).programs;D!==void 0&&(D.forEach(function(ee){J.releaseProgram(ee)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,ee,X,$,Ue){D===null&&(D=it);const Fe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Pe=Dt(S,D,ee,X,$);we.setMaterial(X,Fe);let ke=ee.index,Ye=1;if(X.wireframe===!0){if(ke=B.getWireframeAttribute(ee),ke===void 0)return;Ye=2}const ot=ee.drawRange,w=ee.attributes.position;let F=ot.start*Ye,re=(ot.start+ot.count)*Ye;Ue!==null&&(F=Math.max(F,Ue.start*Ye),re=Math.min(re,(Ue.start+Ue.count)*Ye)),ke!==null?(F=Math.max(F,0),re=Math.min(re,ke.count)):w!=null&&(F=Math.max(F,0),re=Math.min(re,w.count));const Be=re-F;if(Be<0||Be===1/0)return;pe.setup($,X,Pe,ee,ke);let Ve,We=ie;if(ke!==null&&(Ve=v.get(ke),We=Ee,We.setIndex(Ve)),$.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*ft()),We.setMode(C.LINES)):We.setMode(C.TRIANGLES);else if($.isLine){let gt=X.linewidth;gt===void 0&&(gt=1),we.setLineWidth(gt*ft()),$.isLineSegments?We.setMode(C.LINES):$.isLineLoop?We.setMode(C.LINE_LOOP):We.setMode(C.LINE_STRIP)}else $.isPoints?We.setMode(C.POINTS):$.isSprite&&We.setMode(C.TRIANGLES);if($.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))We.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const gt=$._multiDrawStarts,Ge=$._multiDrawCounts,Ut=$._multiDrawCount,Tt=ke?v.get(ke).bytesPerElement:1,en=nt.get(X).currentProgram.getUniforms();for(let Xt=0;Xt<Ut;Xt++)en.setValue(C,"_gl_DrawID",Xt),We.render(gt[Xt]/Tt,Ge[Xt])}else if($.isInstancedMesh)We.renderInstances(F,Be,$.count);else if(ee.isInstancedBufferGeometry){const gt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ge=Math.min(ee.instanceCount,gt);We.renderInstances(F,Be,Ge)}else We.render(F,Be)};function Ni(S,D,ee,X){O!==null&&S.isNodeMaterial&&O.setObject(X,S),st===!0&&le.setState(S,ee,!1),S.transparent===!0&&S.side===ni&&S.forceSinglePass===!1?(S.side=wn,S.needsUpdate=!0,Ce(S,D,X),S.side=Li,S.needsUpdate=!0,Ce(S,D,X),S.side=ni):Ce(S,D,X)}this.compile=function(S,D,ee=null){ee===null&&(ee=S),O!==null&&O.renderStart(S,D,ee),T=Q.get(ee),T.init(D),E.push(T),ee.traverseVisible(function($){$.isLight&&$.layers.test(D.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),S!==ee&&S.traverseVisible(function($){$.isLight&&$.layers.test(D.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),je=this.localClippingEnabled,st=le.init(this.clippingPlanes,je),st===!0&&le.setGlobalState(this.clippingPlanes,D),O!==null&&Ae.render(T.state.shadowsArray,ee,D);const X=new Set;return S.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ue=$.material;if(Ue)if(Array.isArray(Ue))for(let Fe=0;Fe<Ue.length;Fe++){const Pe=Ue[Fe];Ni(Pe,ee,D,$),X.add(Pe)}else Ni(Ue,ee,D,$),X.add(Ue)}),T=E.pop(),O!==null&&O.renderEnd(),X},this.compileAsync=function(S,D,ee=null){const X=this.compile(S,D,ee);return new Promise($=>{function Ue(){if(X.forEach(function(Fe){const ke=nt.get(Fe).currentProgram;(ke===void 0||ke.isReady())&&X.delete(Fe)}),X.size===0){$(S);return}setTimeout(Ue,10)}pt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let un=null;function oi(S){un&&un(S)}function te(){de.stop()}function he(){de.start()}const de=new gu;de.setAnimationLoop(oi),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(S){un=S,Re.setAnimationLoop(S),S===null?de.stop():de.start()},Re.addEventListener("sessionstart",te),Re.addEventListener("sessionend",he),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;O!==null&&O.renderStart(S,D);const ee=Re.enabled===!0&&Re.isPresenting===!0,X=z!==null&&(K===null||ee)&&z.begin(P,K);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(D),D=Re.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,D,K),T=Q.get(S,E.length),T.init(D),T.state.textureUnits=ct.getTextureUnits(),E.push(T),tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ze.setFromArrayCamera(D):ze.setFromProjectionMatrix(tt,$n,D.reversedDepth),je=this.localClippingEnabled,st=le.init(this.clippingPlanes,je),L=ue.get(S,_.length),L.init(),_.push(L),this.info.render.frame++,Re.enabled===!0&&Re.isPresenting===!0){const Fe=P.xr.getDepthSensingMesh();Fe!==null&&ae(Fe,D,-1/0,P.sortObjects)}ae(S,D,0,P.sortObjects),L.finish(),O!==null&&O.updateLights(T.state.lightsArray),P.sortObjects===!0&&L.sort(ce,_e),ut=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ut&&I.addToRenderList(L,S),this.info.autoReset===!0&&this.info.reset(),st===!0&&le.beginShadows();const $=T.state.shadowsArray;if(Ae.render($,S,D),st===!0&&le.endShadows(),(X&&z.hasRenderPass())===!1){const Fe=L.opaque,Pe=L.transmissive;if(T.setupLights(),D.isArrayCamera){const ke=D.cameras;if(Pe.length>0)for(let Ye=0,ot=ke.length;Ye<ot;Ye++){const w=ke[Ye];Se(Fe,Pe,S,w)}ut&&I.render(S);for(let Ye=0,ot=ke.length;Ye<ot;Ye++){const w=ke[Ye];De(L,S,w,w.viewport)}}else Pe.length>0&&Se(Fe,Pe,S,D),ut&&I.render(S),De(L,S,D)}K!==null&&U===0&&(ct.updateMultisampleRenderTarget(K),ct.updateRenderTargetMipmap(K)),X&&z.end(P),S.isScene===!0&&S.onAfterRender(P,S,D),pe.resetDefaultState(),V=-1,ne=null,E.pop(),E.length>0?(T=E[E.length-1],ct.setTextureUnits(T.state.textureUnits),st===!0&&le.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?L=_[_.length-1]:L=null,O!==null&&O.renderEnd()};function ae(S,D,ee,X){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)ee=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){const Fe=D.isArrayCamera?Ze:ze;if(!S.frustumCulled||S.intersectsFrustum(Fe)){X&&Je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(tt);const Pe=q.update(S),ke=S.material;ke.visible&&L.push(S,Pe,ke,ee,Je.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){const Fe=D.isArrayCamera?Ze:ze;if(!S.frustumCulled||S.intersectsFrustum(Fe)){const Pe=q.update(S),ke=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Je.copy(S.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Je.copy(Pe.boundingSphere.center)),Je.applyMatrix4(S.matrixWorld).applyMatrix4(tt)),Array.isArray(ke)){const Ye=Pe.groups;for(let ot=0,w=Ye.length;ot<w;ot++){const F=Ye[ot],re=ke[F.materialIndex];re&&re.visible&&L.push(S,Pe,re,ee,Je.z,F,D)}}else ke.visible&&L.push(S,Pe,ke,ee,Je.z,null,D)}}}const Ue=S.children;for(let Fe=0,Pe=Ue.length;Fe<Pe;Fe++)ae(Ue[Fe],D,ee,X)}function De(S,D,ee,X){const{opaque:$,transmissive:Ue,transparent:Fe}=S;T.setupLightsView(ee),st===!0&&le.setGlobalState(P.clippingPlanes,ee),X&&we.viewport(se.copy(X)),$.length>0&&xe($,D,ee),Ue.length>0&&xe(Ue,D,ee),Fe.length>0&&xe(Fe,D,ee),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Se(S,D,ee,X){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const F=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new ii(1,1,{generateMipmaps:!0,type:F?si:_n,minFilter:zn,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Ue=T.state.transmissionRenderTarget[X.id],Fe=X.viewport||se;Ue.setSize(Fe.z*P.transmissionResolutionScale,Fe.w*P.transmissionResolutionScale);const Pe=P.getRenderTarget(),ke=P.getActiveCubeFace(),Ye=P.getActiveMipmapLevel();P.setRenderTarget(Ue),P.getClearColor(W),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),ut&&I.render(ee);const ot=P.toneMapping;P.toneMapping=gi;const w=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),st===!0&&le.setGlobalState(P.clippingPlanes,X),xe(S,ee,X),ct.updateMultisampleRenderTarget(Ue),ct.updateRenderTargetMipmap(Ue),pt.has("WEBGL_multisampled_render_to_texture")===!1){let F=!1;for(let re=0,Be=D.length;re<Be;re++){const Ve=D[re],{object:We,geometry:gt,material:Ge,group:Ut}=Ve;if(Ge.side===ni&&We.layers.test(X.layers)){const Tt=Ge.side;Ge.side=wn,Ge.needsUpdate=!0,Ne(We,ee,X,gt,Ge,Ut),Ge.side=Tt,Ge.needsUpdate=!0,F=!0}}F===!0&&(ct.updateMultisampleRenderTarget(Ue),ct.updateRenderTargetMipmap(Ue))}P.setRenderTarget(Pe,ke,Ye),P.setClearColor(W,me),w!==void 0&&(X.viewport=w),P.toneMapping=ot}function xe(S,D,ee){const X=D.isScene===!0?D.overrideMaterial:null;for(let $=0,Ue=S.length;$<Ue;$++){const Fe=S[$],{object:Pe,geometry:ke,group:Ye}=Fe;let ot=Fe.material;ot.allowOverride===!0&&X!==null&&(ot=X),Pe.layers.test(ee.layers)&&Ne(Pe,D,ee,ke,ot,Ye)}}function Ne(S,D,ee,X,$,Ue){O!==null&&$.isNodeMaterial&&O.setObject(S,$),S.onBeforeRender(P,D,ee,X,$,Ue),S.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(P,D,ee,X,S,Ue),$.transparent===!0&&$.side===ni&&$.forceSinglePass===!1?($.side=wn,$.needsUpdate=!0,P.renderBufferDirect(ee,D,X,$,S,Ue),$.side=Li,$.needsUpdate=!0,P.renderBufferDirect(ee,D,X,$,S,Ue),$.side=ni):P.renderBufferDirect(ee,D,X,$,S,Ue),S.onAfterRender(P,D,ee,X,$,Ue)}function Ie(S){let D=0;for(const ee of S)ee.texture!==null&&D++;return D}function Ce(S,D,ee){D.isScene!==!0&&(D=it);const X=nt.get(S),$=T.state.lights,Ue=T.state.shadowsArray,Fe=$.state.version,Pe=J.getParameters(S,$.state,Ue,D,ee,T.state.lightProbeGridArray),ke=J.getProgramCacheKey(Pe);let Ye=X.programs;X.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,X.fog=D.fog;const ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;X.envMap=x.get(S.envMap||X.environment,ot),X.envMapRotation=X.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ye===void 0&&(S.addEventListener("dispose",Rt),Ye=new Map,X.programs=Ye,X.programVariants=new Map);let w=Ye.get(ke);if(w!==void 0){if(X.currentProgram===w&&X.lightsStateVersion===Fe)return et(S,Pe),w}else Pe.uniforms=J.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,ee,Pe),S.onBeforeCompile(Pe,P),w=J.acquireProgram(Pe,ke),Ye.set(ke,w),X.uniforms=Pe.uniforms;const F=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(F.clippingPlanes=le.uniform),et(S,Pe),X.needsLights=yt(S),X.lightsStateVersion=Fe,X.needsLights&&(F.ambientLightColor.value=$.state.ambient,F.lightProbe.value=$.state.probe,F.sunLights.value=$.state.sun,F.sunLightShadows.value=$.state.sunShadow,F.directionalLights.value=$.state.directional,F.directionalLightShadows.value=$.state.directionalShadow,F.spotLights.value=$.state.spot,F.spotLightShadows.value=$.state.spotShadow,F.rectAreaLights.value=$.state.rectArea,F.ltc_1.value=$.state.rectAreaLTC1,F.ltc_2.value=$.state.rectAreaLTC2,F.pointLights.value=$.state.point,F.pointLightShadows.value=$.state.pointShadow,F.hemisphereLights.value=$.state.hemi,F.sunShadowMatrix.value=$.state.sunShadowMatrix,F.sunShadowCascade.value=$.state.sunShadowCascade,F.directionalShadowMatrix.value=$.state.directionalShadowMatrix,F.spotLightMatrix.value=$.state.spotLightMatrix,F.spotLightMap.value=$.state.spotLightMap,F.pointShadowMatrix.value=$.state.pointShadowMatrix),X.numLightProbeGrids=Ie(T.state.lightProbeGridArray),X.currentProgram=w,X.uniformsList=null,w}function Xe(S,D,ee,X,$){const Ue=nt.get(S),Fe=Ue.currentProgram.id+","+X+","+$;let Pe=Ue.programVariants.get(Fe);return Pe===void 0?(Pe=Ce(S,D,ee),Ue.programVariants.set(Fe,Pe)):(Ue.currentProgram=Pe,Ue.uniformsList=null,Ue.outputColorSpace=X,Ue.toneMapping=$),Pe}function at(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=ra.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function et(S,D){const ee=nt.get(S);ee.outputColorSpace=D.outputColorSpace,ee.batching=D.batching,ee.batchingColor=D.batchingColor,ee.instancing=D.instancing,ee.instancingColor=D.instancingColor,ee.instancingMorph=D.instancingMorph,ee.skinning=D.skinning,ee.morphTargets=D.morphTargets,ee.morphNormals=D.morphNormals,ee.morphColors=D.morphColors,ee.morphTargetsCount=D.morphTargetsCount,ee.numClippingPlanes=D.numClippingPlanes,ee.numIntersection=D.numClipIntersection,ee.vertexAlphas=D.vertexAlphas,ee.vertexTangents=D.vertexTangents,ee.toneMapping=D.toneMapping}function Dt(S,D,ee,X,$){D.isScene!==!0&&(D=it),ct.resetTextureUnits();const Ue=D.fog,Fe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?D.environment:null,Pe=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:It.workingColorSpace,ke=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ye=x.get(X.envMap||Fe,ke),ot=X.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,w=!!ee.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),F=!!ee.morphAttributes.position,re=!!ee.morphAttributes.normal,Be=!!ee.morphAttributes.color;let Ve=gi;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ve=P.toneMapping);const We=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,gt=We!==void 0?We.length:0,Ge=nt.get(X),Ut=T.state.lights;if(st===!0&&(je===!0||S!==ne)){const Pt=S===ne&&X.id===V;le.setState(X,S,Pt)}let Tt=!1,en=!1;X.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==Ut.state.version||$.isBatchedMesh&&Ge.batching===!1||!$.isBatchedMesh&&Ge.batching===!0||$.isBatchedMesh&&Ge.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ge.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ge.instancing===!1||!$.isInstancedMesh&&Ge.instancing===!0||$.isSkinnedMesh&&Ge.skinning===!1||!$.isSkinnedMesh&&Ge.skinning===!0||$.isInstancedMesh&&Ge.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ge.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ge.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ge.instancingMorph===!1&&$.morphTexture!==null||Ge.envMap!==Ye||X.fog===!0&&Ge.fog!==Ue||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==le.numPlanes||Ge.numIntersection!==le.numIntersection)||Ge.vertexAlphas!==ot||Ge.vertexTangents!==w||Ge.morphTargets!==F||Ge.morphNormals!==re||Ge.morphColors!==Be||Ge.morphTargetsCount!==gt||Ge.numLightProbeGrids!==Ie(T.state.lightProbeGridArray)?Tt=!0:(Ge.outputColorSpace!==Pe||Ge.toneMapping!==Ve)&&(en=!0):(Tt=!0,Ge.__version=X.version);let Xt=Ge.currentProgram;(Tt===!0||en===!0)&&(Xt=en===!0?Xe(X,D,$,Pe,Ve):Ce(X,D,$),O&&X.isNodeMaterial&&O.onUpdateProgram(X,Xt,Ge));let An=!1,Kt=!1,Qt=!1;const Mt=Xt.getUniforms(),kt=Ge.uniforms;if(we.useProgram(Xt.program)&&(An=!0,Kt=!0,Qt=!0),X.id!==V&&(V=X.id,Kt=!0),An||ne!==S){we.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Mt.setValue(C,"projectionMatrix",S.projectionMatrix),Mt.setValue(C,"viewMatrix",S.matrixWorldInverse);const Yt=Mt.map.cameraPosition;Yt!==void 0&&Yt.setValue(C,Ke.setFromMatrixPosition(S.matrixWorld)),dt.logarithmicDepthBuffer&&Mt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Mt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),ne!==S&&(ne=S,Kt=!0,Qt=!0)}if(Ge.needsLights&&(Ut.state.sunShadowMap.length>0&&Mt.setValue(C,"sunShadowMap",Ut.state.sunShadowMap,ct),Ut.state.directionalShadowMap.length>0&&Mt.setValue(C,"directionalShadowMap",Ut.state.directionalShadowMap,ct),Ut.state.spotShadowMap.length>0&&Mt.setValue(C,"spotShadowMap",Ut.state.spotShadowMap,ct),Ut.state.pointShadowMap.length>0&&Mt.setValue(C,"pointShadowMap",Ut.state.pointShadowMap,ct)),$.isSkinnedMesh){Mt.setOptional(C,$,"bindMatrix"),Mt.setOptional(C,$,"bindMatrixInverse");const Pt=$.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Mt.setValue(C,"boneTexture",Pt.boneTexture,ct))}$.isBatchedMesh&&(Mt.setOptional(C,$,"batchingTexture"),Mt.setValue(C,"batchingTexture",$._matricesTexture,ct),Mt.setOptional(C,$,"batchingIdTexture"),Mt.setValue(C,"batchingIdTexture",$._indirectTexture,ct),Mt.setOptional(C,$,"batchingColorTexture"),$._colorsTexture!==null&&Mt.setValue(C,"batchingColorTexture",$._colorsTexture,ct));const Jt=ee.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&j.update($,ee,Xt),(Kt||Ge.receiveShadow!==$.receiveShadow)&&(Ge.receiveShadow=$.receiveShadow,Mt.setValue(C,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&D.environment!==null&&(kt.envMapIntensity.value=D.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=y_()),Kt){if(Mt.setValue(C,"toneMappingExposure",P.toneMappingExposure),Ge.needsLights&&Ct(kt,Qt),Ue&&X.fog===!0&&ge.refreshFogUniforms(kt,Ue),ge.refreshMaterialUniforms(kt,X,Y,fe,T.state.transmissionRenderTarget[S.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){const Pt=b;let Yt=0;for(const Nn of T.state.lightProbeGridArray)Nn.texture!==null&&(Pt.textures[Yt]=Nn.texture,Pt.min[Yt]=Nn.boundingBox.min,Pt.max[Yt]=Nn.boundingBox.max,Pt.resolution[Yt]=Nn.resolution,Yt++);for(const Nn in Pt)Pt[Nn].length=Yt;kt.probesSH.value=Pt.textures,kt.probesMin.value=Pt.min,kt.probesMax.value=Pt.max,kt.probesResolution.value=Pt.resolution}ra.upload(C,at(Ge),kt,ct)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ra.upload(C,at(Ge),kt,ct),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Mt.setValue(C,"center",$.center),Mt.setValue(C,"modelViewMatrix",$.modelViewMatrix),Mt.setValue(C,"normalMatrix",$.normalMatrix),Mt.setValue(C,"modelMatrix",$.matrixWorld),X.uniformsGroups!==void 0){const Pt=X.uniformsGroups;for(let Yt=0,Nn=Pt.length;Yt<Nn;Yt++){const gs=Pt[Yt];Qe.update(gs,Xt),Qe.bind(gs,Xt)}}return Xt}function Ct(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function yt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(S,D,ee){const X=nt.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),nt.get(S.texture).__webglTexture=D,nt.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:ee,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const ee=nt.get(S);ee.__webglFramebuffer=D,ee.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,ee=0){K=S,k=D,U=ee;let X=null,$=!1,Ue=!1;if(S){const Pe=nt.get(S);if(Pe.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(C.FRAMEBUFFER,Pe.__webglFramebuffer),se.copy(S.viewport),Le.copy(S.scissor),be=S.scissorTest,we.viewport(se),we.scissor(Le),we.setScissorTest(be),V=-1;return}else if(Pe.__webglFramebuffer===void 0)ct.setupRenderTarget(S);else if(Pe.__hasExternalTextures)ct.rebindTextures(S,nt.get(S.texture).__webglTexture,nt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ot=S.depthTexture;if(Pe.__boundDepthTexture!==ot){if(ot!==null&&nt.has(ot)&&(S.width!==ot.image.width||S.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(S)}}const ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const Ye=nt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ye[D])?X=Ye[D][ee]:X=Ye[D],$=!0):S.samples>0&&ct.useMultisampledRTT(S)===!1?X=nt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ye)?X=Ye[ee]:X=Ye,se.copy(S.viewport),Le.copy(S.scissor),be=S.scissorTest}else se.copy(oe).multiplyScalar(Y).floor(),Le.copy(ve).multiplyScalar(Y).floor(),be=Oe;if(ee!==0&&(X=Z),we.bindFramebuffer(C.FRAMEBUFFER,X)&&we.drawBuffers(S,X),we.viewport(se),we.scissor(Le),we.setScissorTest(be),$){const Pe=nt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,Pe.__webglTexture,ee)}else if(Ue){const Pe=D;for(let ke=0;ke<S.textures.length;ke++){const Ye=nt.get(S.textures[ke]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ke,Ye.__webglTexture,ee,Pe)}}else if(S!==null&&ee!==0){const Pe=nt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pe.__webglTexture,ee)}V=-1};function Ft(S){const D=nt.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=dt.textureFormatReadable(S.format),D.__typeReadable=dt.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,ee,X,$,Ue,Fe,Pe=0){if(!(S&&S.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe],Array.isArray(ke)&&(ke=ke[0])),ke){we.bindFramebuffer(C.FRAMEBUFFER,ke);try{const Ye=S.textures[Pe],ot=Ye.format,w=Ye.type;S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe);const F=Ft(Ye);if(F.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(F.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-X&&ee>=0&&ee<=S.height-$&&C.readPixels(D,ee,X,$,Te.convert(ot),Te.convert(w),Ue)}finally{const Ye=K!==null?nt.get(K).__webglFramebuffer:null;we.bindFramebuffer(C.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(S,D,ee,X,$,Ue,Fe,Pe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe],Array.isArray(ke)&&(ke=ke[0])),ke)if(D>=0&&D<=S.width-X&&ee>=0&&ee<=S.height-$){we.bindFramebuffer(C.FRAMEBUFFER,ke);const Ye=S.textures[Pe],ot=Ye.format,w=Ye.type;S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe);const F=Ft(Ye);if(F.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(F.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,re),C.bufferData(C.PIXEL_PACK_BUFFER,Ue.byteLength,C.STREAM_READ),C.readPixels(D,ee,X,$,Te.convert(ot),Te.convert(w),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const Be=K!==null?nt.get(K).__webglFramebuffer:null;we.bindFramebuffer(C.FRAMEBUFFER,Be);const Ve=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Gh(C,Ve,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,re),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ue),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(re),C.deleteSync(Ve),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,ee=0){const X=Math.pow(2,-ee),$=Math.floor(S.image.width*X),Ue=Math.floor(S.image.height*X),Fe=D!==null?D.x:0,Pe=D!==null?D.y:0;ct.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,ee,0,0,Fe,Pe,$,Ue),we.unbindTexture()},this.copyTextureToTexture=function(S,D,ee=null,X=null,$=0,Ue=0){let Fe,Pe,ke,Ye,ot,w,F,re,Be;const Ve=S.isCompressedTexture?S.mipmaps[Ue]:S.image;if(ee!==null)Fe=ee.max.x-ee.min.x,Pe=ee.max.y-ee.min.y,ke=ee.isBox3?ee.max.z-ee.min.z:1,Ye=ee.min.x,ot=ee.min.y,w=ee.isBox3?ee.min.z:0;else{const Mt=Math.pow(2,-$);Fe=Math.floor(Ve.width*Mt),Pe=Math.floor(Ve.height*Mt),S.isDataArrayTexture?ke=Ve.depth:S.isData3DTexture?ke=Math.floor(Ve.depth*Mt):ke=1,Ye=0,ot=0,w=0}X!==null?(F=X.x,re=X.y,Be=X.z):(F=0,re=0,Be=0);const We=Te.convert(D.format),gt=Te.convert(D.type);let Ge;D.isData3DTexture?(ct.setTexture3D(D,0),Ge=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ct.setTexture2DArray(D,0),Ge=C.TEXTURE_2D_ARRAY):(ct.setTexture2D(D,0),Ge=C.TEXTURE_2D),we.activeTexture(C.TEXTURE0),we.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),we.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),we.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const Ut=we.getParameter(C.UNPACK_ROW_LENGTH),Tt=we.getParameter(C.UNPACK_IMAGE_HEIGHT),en=we.getParameter(C.UNPACK_SKIP_PIXELS),Xt=we.getParameter(C.UNPACK_SKIP_ROWS),An=we.getParameter(C.UNPACK_SKIP_IMAGES);we.pixelStorei(C.UNPACK_ROW_LENGTH,Ve.width),we.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ve.height),we.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),we.pixelStorei(C.UNPACK_SKIP_ROWS,ot),we.pixelStorei(C.UNPACK_SKIP_IMAGES,w);const Kt=S.isDataArrayTexture||S.isData3DTexture,Qt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const Mt=nt.get(S),kt=nt.get(D),Jt=nt.get(Mt.__renderTarget),Pt=nt.get(kt.__renderTarget);we.bindFramebuffer(C.READ_FRAMEBUFFER,Jt.__webglFramebuffer),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Yt=0;Yt<ke;Yt++)Kt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nt.get(S).__webglTexture,$,w+Yt),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nt.get(D).__webglTexture,Ue,Be+Yt)),C.blitFramebuffer(Ye,ot,Ye+Fe,ot+Pe,F,re,F+Fe,re+Pe,C.DEPTH_BUFFER_BIT,C.NEAREST);we.bindFramebuffer(C.READ_FRAMEBUFFER,null),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if($!==0||S.isRenderTargetTexture||nt.has(S)){const Mt=nt.get(S),kt=nt.get(D);we.bindFramebuffer(C.READ_FRAMEBUFFER,N),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,H);for(let Jt=0;Jt<ke;Jt++)Kt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.__webglTexture,$,w+Jt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Mt.__webglTexture,$),Qt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,kt.__webglTexture,Ue,Be+Jt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,kt.__webglTexture,Ue),$!==0?C.blitFramebuffer(Ye,ot,Ye+Fe,ot+Pe,F,re,F+Fe,re+Pe,C.COLOR_BUFFER_BIT,C.NEAREST):Qt?C.copyTexSubImage3D(Ge,Ue,F,re,Be+Jt,Ye,ot,Fe,Pe):C.copyTexSubImage2D(Ge,Ue,F,re,Ye,ot,Fe,Pe);we.bindFramebuffer(C.READ_FRAMEBUFFER,null),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Qt?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Ge,Ue,F,re,Be,Fe,Pe,ke,We,gt,Ve.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(Ge,Ue,F,re,Be,Fe,Pe,ke,We,Ve.data):C.texSubImage3D(Ge,Ue,F,re,Be,Fe,Pe,ke,We,gt,Ve):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ue,F,re,Fe,Pe,We,gt,Ve.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ue,F,re,Ve.width,Ve.height,We,Ve.data):C.texSubImage2D(C.TEXTURE_2D,Ue,F,re,Fe,Pe,We,gt,Ve);we.pixelStorei(C.UNPACK_ROW_LENGTH,Ut),we.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Tt),we.pixelStorei(C.UNPACK_SKIP_PIXELS,en),we.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),we.pixelStorei(C.UNPACK_SKIP_IMAGES,An),Ue===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&C.generateMipmap(Ge),we.unbindTexture()},this.initRenderTarget=function(S){nt.get(S).__webglFramebuffer===void 0&&ct.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ct.setTextureCube(S,0):S.isData3DTexture?ct.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ct.setTexture2DArray(S,0):ct.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){k=0,U=0,K=null,we.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}class b_ extends nu{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Or;e.deleteAttribute("uv");const t=new ml({side:wn}),n=new ml,r=new Ad(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new an(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new md(e,n,6),o=new cn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new an(e,hr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new an(e,hr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const f=new an(e,hr(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const m=new an(e,hr(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const h=new an(e,hr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const g=new an(e,hr(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function hr(i){return new Ed({color:0,emissive:16777215,emissiveIntensity:i})}const mi=4,_r=[{name:"lid",color:15785894,roughness:.14,opacity:.36,elastic:.15,adhesion:1.2,print:"net",ink:8133904},{name:"milk",color:15987436,roughness:.3,opacity:.72,elastic:.08,adhesion:2},{name:"tint",color:8374502,roughness:.03,opacity:.42,elastic:.12,adhesion:1.2},{name:"clear",color:16777215,roughness:.03,opacity:.16,elastic:.3,adhesion:.6},{name:"frost",color:13625070,roughness:.6,opacity:.5,elastic:.04,adhesion:1.4},{name:"amber",color:15902012,roughness:.05,opacity:.5,elastic:.2,adhesion:2.6},{name:"smoke",color:1711136,roughness:.06,opacity:.8,elastic:.15,adhesion:1},{name:"white",color:16185076,roughness:.2,opacity:1,elastic:.02,adhesion:1.6}],sa=[{name:"eye",color:15986664,roughness:.2,opacity:1,eye:!0},{name:"jelly",color:16764349,roughness:.5,opacity:1,jelly:{tint:16758692,depth:.9,ior:1.2}},{name:"kraft",color:12096614,roughness:.88,opacity:1},{name:"paper",color:15855074,roughness:.92,opacity:1},{name:"slate",color:3159099,roughness:.7,opacity:1},{name:"enamel",color:16053490,roughness:.12,opacity:1},{name:"red",color:12992300,roughness:.45,opacity:1}];function wi(i,e=0){const t=i===0?_r:sa,n=t[e%t.length];return{index:i,name:n.name,color:new St(n.color),roughness:n.roughness,opacity:n.opacity,elastic:n.elastic??.1,adhesion:n.adhesion??1,eye:n.eye===!0,metalness:0,print:n.print??"label",preset:e%t.length,ink:new St(n.ink??663616),jelly:n.jelly?{tint:new St(n.jelly.tint),depth:n.jelly.depth,ior:n.jelly.ior}:null}}function po(i,e){const t=e.color!==void 0?new St(e.color):i.color.clone();return{...i,color:t,opacity:e.opacity??i.opacity,roughness:e.roughness??i.roughness,metalness:e.metalness??i.metalness,print:e.print??i.print,ink:e.ink!==void 0?new St(e.ink):i.ink.clone()}}const vn=1024,Nr=vn*3,as=vn*2;function vl(){const i=new Uint8Array(Nr*as).fill(255),e=new Uint8Array(Nr*as*2);for(let t=0;t<e.length;t+=2)e[t]=1;return{cover:i,id:e,coverVersion:1,idVersion:1}}function En(i,e,t){const n=i%3;return((i/3|0)*vn+t)*Nr+n*vn+e}const Ma=Math.PI/4;function hs(i,e,t,n){const r=Math.abs(i),s=Math.abs(e),a=Math.abs(t);let o,c,l,f;r>=s&&r>=a?(o=i>=0?0:1,c=e,l=t,f=r):s>=a?(o=e>=0?2:3,c=i,l=t,f=s):(o=t>=0?4:5,c=i,l=e,f=a),n[0]=o,n[1]=(Math.atan(c/f)/Ma*.5+.5)*vn,n[2]=(Math.atan(l/f)/Ma*.5+.5)*vn}function La(i,e,t,n){const r=Math.tan((e/vn*2-1)*Ma),s=Math.tan((t/vn*2-1)*Ma),a=i&1?-1:1;let o,c,l;i<2?(o=a,c=r,l=s):i<4?(o=r,c=a,l=s):(o=r,c=s,l=a);const f=1/Math.hypot(o,c,l);n[0]=o*f,n[1]=c*f,n[2]=l*f}const Au=`
#define FILM_N ${vn}.0
void filmFace(vec3 p, out float face, out vec2 uv) {
  vec3 a = abs(p);
  vec2 q;
  if (a.x >= a.y && a.x >= a.z) { face = p.x >= 0.0 ? 0.0 : 1.0; q = p.yz / a.x; }
  else if (a.y >= a.z) { face = p.y >= 0.0 ? 2.0 : 3.0; q = p.xz / a.y; }
  else { face = p.z >= 0.0 ? 4.0 : 5.0; q = p.xy / a.z; }
  uv = atan(q) * (2.0 / 3.14159265359) + 0.5; // 0..1 on the face
}
vec2 filmUV(vec3 p) {
  float face; vec2 uv;
  filmFace(p, face, uv);
  uv = clamp(uv, 0.5 / FILM_N, 1.0 - 0.5 / FILM_N);
  return (vec2(mod(face, 3.0), floor(face / 3.0)) + uv) / vec2(3.0, 2.0);
}
`,ds=128,os=ds+2,Pa=os*3,Ru=os*2,Di=vn/ds,Sa=32;function T_(){return{data:new Float32Array(Pa*Ru*4),version:1,layer:0,id:0,fade:1,strain:0,ghost:.6,band:2,fan:{c:new Float32Array(3),u:new Float32Array(3),v:new Float32Array(3),pts:new Float32Array(Sa*2),n:0}}}function kl(i,e,t){return(((i/3|0)*os+t+1)*Pa+i%3*os+e+1)*4}function w_(i,e,t,n,r){const s=t-.5,a=n-.5,o=Math.floor(s),c=Math.floor(a),l=s-o,f=a-c,m=kl(e,o,c)+r,h=Pa*4;return(i[m]*(1-l)+i[m+4]*l)*(1-f)+(i[m+h]*(1-l)+i[m+h+4]*l)*f}const Cu=`
#define LIFT_M ${ds}.0
#define LIFT_T ${os}
vec4 liftAt(vec3 p) {
  float face; vec2 uv;
  filmFace(p, face, uv);
  vec2 q = uv * LIFT_M - 0.5;
  vec2 fl = floor(q), t = q - fl;
  ivec2 o = ivec2(int(mod(face, 3.0)), int(floor(face / 3.0))) * LIFT_T + ivec2(fl) + 1;
  vec4 a = texelFetch(uLift, o, 0), b = texelFetch(uLift, o + ivec2(1, 0), 0);
  vec4 c = texelFetch(uLift, o + ivec2(0, 1), 0), d = texelFetch(uLift, o + ivec2(1, 1), 0);
  return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
}
#ifdef LIFT_DEPTH
// w at p for a point ON the film. Where the four cells disagree about being lifted, only
// those the film reaches from p without a gap count (the cover atlas, sampled on the way to
// each cell's centre): the line between lifted and not then runs along the cut itself.
float liftDepth(vec3 p) {
  float face; vec2 uv;
  filmFace(p, face, uv);
  vec2 q = uv * LIFT_M - 0.5;
  vec2 fl = floor(q), t = q - fl;
  vec2 tile = vec2(mod(face, 3.0), floor(face / 3.0));
  ivec2 o = ivec2(tile) * LIFT_T + ivec2(fl) + 1;
  vec4 w = vec4(texelFetch(uLift, o, 0).w, texelFetch(uLift, o + ivec2(1, 0), 0).w,
                texelFetch(uLift, o + ivec2(0, 1), 0).w, texelFetch(uLift, o + ivec2(1, 1), 0).w);
  vec4 k = vec4((1.0 - t.x) * (1.0 - t.y), t.x * (1.0 - t.y), (1.0 - t.x) * t.y, t.x * t.y);
  float lo = min(min(w.x, w.y), min(w.z, w.w)), hi = max(max(w.x, w.y), max(w.z, w.w));
  if (lo > 0.5 || hi < 0.5) return dot(w, k);
  vec4 ok;
  for (int c = 0; c < 4; c++) {
    vec2 centre = (fl + vec2(float(c & 1), float(c >> 1)) + 0.5) / LIFT_M;
    float m = 1.0;
    for (int s = 1; s <= 4; s++) {
      vec2 u = clamp(mix(uv, centre, float(s) * 0.25), 0.5 / FILM_N, 1.0 - 0.5 / FILM_N);
      m = min(m, textureLod(uCover, (tile + u) / vec2(3.0, 2.0), 0.0).r);
    }
    ok[c] = step(0.8, m);
  }
  float sum = dot(k, ok);
  return sum > 1e-4 ? dot(w, k * ok) / sum : dot(w, k);
}
#endif
`,$e=1,lt=vn,xl=Math.PI/4,Ur=Math.PI/(2*lt),ls=new Float64Array(lt);for(let i=0;i<lt;i++)ls[i]=Math.tan(((i+.5)/lt*2-1)*xl);const Lu=[0,0,1,1,2,2],Pu=[1,1,0,0,0,0],Iu=[2,2,2,2,1,1],Du=[1,-1,1,-1,1,-1],Qc=new WeakMap;function ps(i){let e=Qc.get(i.id);return e||Qc.set(i.id,e=new Uint16Array(i.id.buffer,i.id.byteOffset,i.id.length>>1)),e}const Hn=new Float64Array(3);function Gl(i,e,t){hs(i,e,t,Hn);const n=Math.min(lt-1,Hn[1]|0),r=Math.min(lt-1,Hn[2]|0);return En(Hn[0],n,r)}function Ar(i,e,t,n){return ps(i)[Gl(e,t,n)]}const Ml=.55*Ur,Nu=1.1*Ur,A_=Ml+Nu,Uu=.5*Ur,Vs=4,Hl=0,Fu=1,Ou=2;let Rr=Hl,Bu=0,zu=1;const sn=new Float64Array(90);function vr(i,e,t,n){const r=[e,t,n];for(let s=0;s<6;s++){const a=s*15+i;sn[a]=Du[s]*r[Lu[s]],sn[a+1]=r[Pu[s]],sn[a+2]=r[Iu[s]]}}const Ws=3;function ku(i,e,t,n,r){const s=Math.max(0,n-Ws),a=Math.min(lt-1,n+Ws),o=Math.max(0,r-Ws),c=Math.min(lt-1,r+Ws),l=En(t,n,r),f=En(t,s,r),m=En(t,a,r),h=En(t,n,o),g=En(t,n,c);for(let u=0;u<e;u++){const M=i[u].cover;if(M[l]>=128||M[f]>=128||M[m]>=128||M[h]>=128||M[g]>=128)return!0}return!1}function R_(i,e,t,n,r){return e===0?!1:(hs(t,n,r,Hn),ku(i,e,Hn[0],Math.min(lt-1,Hn[1]|0),Math.min(lt-1,Hn[2]|0)))}let aa=null,Vl=0;function dr(){aa?aa.fill(0):aa=new Uint8Array(lt*3*lt*2),Vl=0}function C_(){return Vl}const pr=[0,0,0];function Sl(i,e,t,n){const r=aa;let s=0;pr[0]=e,pr[1]=t,pr[2]=n;for(let a=0;a<6;a++){const o=Du[a]*pr[Lu[a]];if(o<.3)continue;const c=(Math.atan(pr[Pu[a]]/o)/xl*.5+.5)*lt,l=(Math.atan(pr[Iu[a]]/o)/xl*.5+.5)*lt,f=Math.max(0,Math.floor(c)-Vs),m=Math.min(lt-1,Math.floor(c)+Vs),h=Math.max(0,Math.floor(l)-Vs),g=Math.min(lt-1,Math.floor(l)+Vs);if(f>m||h>g)continue;const u=a*15,M=sn[u],p=sn[u+1],d=sn[u+2],y=sn[u+3],A=sn[u+4],b=sn[u+5],L=sn[u+6],T=sn[u+7],_=sn[u+8],E=sn[u+9],z=sn[u+10],P=sn[u+11],R=sn[u+12],O=sn[u+13],Z=sn[u+14];for(let N=h;N<=g;N++){const H=ls[N],k=En(a,0,N);for(let U=f;U<=m;U++){const K=ls[U],V=1/Math.sqrt(1+K*K+H*H);let ne;if(Rr===Hl)ne=Math.abs((M+K*p+H*d)*V-Bu)*zu;else if(Rr===Fu&&y+K*A+H*b>=0&&L+K*T+H*_>=0)ne=Math.abs((M+K*p+H*d)*V);else{const me=(E+K*z+H*P)*V,ye=Rr===Ou?me:(R+K*O+H*Z)*V;ne=Math.sqrt(Math.max(0,2-2*Math.max(me,ye)))}if(ne>=A_)continue;const se=ne<=Ml?0:(ne-Ml)/Nu*255+.5|0,Le=k+U;let be=r[Le];if(be===0){be=255;for(let me=0;me<i.length;me++)if(!(i[me].cover[Le]<128)){ku(i,me,a,U,N)||(be=me+1);break}r[Le]=be}if(be===255)continue;const W=i[be-1].cover;se<W[Le]&&(W[Le]=se,s|=1<<be-1)}}}if(s){Vl|=s;for(let a=0;a<i.length;a++)s&1<<a&&i[a].coverVersion++}}function jc(i,e,t,n,r){if(Math.abs(r)>=1)return;const s=Math.sqrt(1-r*r);Rr=Hl,Bu=r,zu=1/s,vr(0,e,t,n);let a=-t,o=e,c=0;Math.abs(n)>.9&&(a=0,o=-n,c=t);const l=Math.hypot(a,o,c);a/=l,o/=l,c/=l;const f=t*c-n*o,m=n*a-e*c,h=e*o-t*a,g=Math.ceil(2*Math.PI*s/Uu);for(let u=0;u<g;u++){const M=u/g*2*Math.PI,p=Math.cos(M)*s,d=Math.sin(M)*s;Sl(i,r*e+p*a+d*f,r*t+p*o+d*m,r*n+p*c+d*h)}}function yr(i,e,t,n,r,s,a){const o=e*r+t*s+n*a;if(o<.5){let h=e+r,g=t+s,u=n+a;const M=Math.hypot(h,g,u);if(M<1e-9)return;h/=M,g/=M,u/=M,yr(i,e,t,n,h,g,u),yr(i,h,g,u,r,s,a);return}let c=t*a-n*s,l=n*r-e*a,f=e*s-t*r;const m=Math.hypot(c,l,f);if(vr(9,e,t,n),vr(12,r,s,a),m<1e-9)Rr=Ou,Sl(i,e,t,n);else{Rr=Fu,c/=m,l/=m,f/=m,vr(0,c,l,f),vr(3,l*n-f*t,f*e-c*n,c*t-l*e),vr(6,s*f-a*l,a*c-r*f,r*l-s*c);const h=Math.atan2(m,o),g=Math.max(1,Math.ceil(h/Uu)),u=1/Math.sin(h);for(let M=0;M<=g;M++){const p=M/g,d=Math.sin((1-p)*h)*u,y=Math.sin(p*h)*u;Sl(i,d*e+y*r,d*t+y*s,d*n+y*a)}}}function L_(i,e){i.cover.set(e),i.coverVersion++}function P_(i){i.cover.fill(255),i.coverVersion++}function I_(i,e){const t=i.cover,n=ps(i);let r=0;for(let s=0;s<6;s++){O_(i,e,s);for(let a=On[2];a<On[3];a++){const o=En(s,0,a);for(let c=o+On[0];c<o+On[1];c++)n[c]===e&&t[c]!==0&&(t[c]=0,r++)}}return r&&i.coverVersion++,r}function D_(i,e,t,n,r){hs(t,n,r,Hn);const s=Hn[0],a=Hn[1]-.5,o=Hn[2]-.5,c=Math.floor(a),l=Math.floor(o),f=a-c,m=o-l,h=Math.max(0,c),g=Math.min(lt-1,c+1),u=Math.max(0,l),M=Math.min(lt-1,l+1),p=En(s,h,u),d=En(s,g,u),y=En(s,h,M),A=En(s,g,M),b=i.cover;if((b[p]*(1-f)+b[d]*f)*(1-m)+(b[y]*(1-f)+b[A]*f)*m<127.5)return!1;const T=ps(i);return T[p]===e||T[d]===e||T[y]===e||T[A]===e}const N_=[.03,.01],Wi=48,mo=new Uint8Array(Wi),go=new Float64Array(Wi),ef=new Uint8Array(Wi);function U_(i,e,t,n,r,s){let a=-n,o=t,c=0;Math.abs(r)>.9&&(a=0,o=-r,c=n);const l=Math.hypot(a,o,c);a/=l,o/=l,c/=l;const f=n*c-r*o,m=r*a-t*c,h=t*o-n*a,g=2*Math.PI/Wi;for(const u of N_){const M=Math.cos(u),p=Math.sin(u),d=_=>{const E=Math.cos(_)*p,z=Math.sin(_)*p;return D_(i,e,M*t+E*a+z*f,M*n+E*o+z*m,M*r+E*c+z*h)?1:0};for(let _=0;_<Wi;_++)mo[_]=d(_*g);let y=0;for(let _=0;_<Wi;_++){const E=mo[_];if(E===mo[(_+1)%Wi])continue;let z=_*g,P=z+g;for(let R=0;R<10;R++){const O=(z+P)/2;d(O)===E?z=O:P=O}go[y]=(z+P)/2,ef[y]=E?0:1,y++}if(y===0)continue;let A=0,b=0,L=0;for(let _=0;_<y;_++){if(!ef[_])continue;const E=go[_];let z=go[(_+1)%y];z<=E&&(z+=2*Math.PI),A+=Math.sin(z)-Math.sin(E),b+=Math.cos(E)-Math.cos(z),L+=z-E}const T=Math.hypot(A,b);if(!(L<=0||T/L<.15))return A/=T,b/=T,s[0]=A*a+b*f,s[1]=A*o+b*m,s[2]=A*c+b*h,!0}return!1}const F_=160,Kn=65535,Fn={n:0,id:new Int32Array(Kn),old:new Int32Array(Kn),area:new Float64Array(Kn)},_o=new Int32Array(Kn),vo=new Float64Array(Kn),mn=new Int32Array((Kn+1)*24),Gu=new Int32Array(Kn+1);let yl=0,Hu=null;const On=[0,0,0,0];function O_(i,e,t){if(i===Hu&&Gu[e]===yl){const n=(e*6+t)*4;On[0]=mn[n],On[1]=mn[n+1],On[2]=mn[n+2],On[3]=mn[n+3]}else On[0]=0,On[1]=lt,On[2]=0,On[3]=lt}const Yr=new Int32Array(Kn+1).fill(-1),zi=new Uint8Array(Kn+1);let vi=65536,Xi=new Int32Array(vi),qi=new Int32Array(vi),Ci=new Int32Array(vi),Hi=new Int32Array(vi),ya=new Int32Array(vi),Vi=new Int32Array(vi);const pi=new Int32Array(6*lt+1);function B_(){vi*=2;const i=e=>{const t=new Int32Array(vi);return t.set(e),t};Xi=i(Xi),qi=i(qi),Ci=i(Ci),Hi=i(Hi),ya=i(ya),Vi=i(Vi)}function El(i){const e=Ci;for(;e[i]!==i;){const t=e[e[i]];e[i]=t,i=t}return i}function tf(i,e){i=El(i),e=El(e),i<e?Ci[e]=i:e<i&&(Ci[i]=e)}function nf(i,e){let t=pi[i],n=pi[i+1]-1;for(;t<=n;){const r=t+n>>1;if(qi[r]<=e)t=r+1;else if(Xi[r]>e)n=r-1;else return r}return-1}let xr=null,Vu=0;function z_(){if(xr)return;const i=lt+1;xr=new Float64Array(lt*i);const e=Math.PI/(2*lt);let t=0;for(let n=0;n<lt;n++){const r=ls[n],s=n*i;for(let a=0;a<lt;a++){const o=ls[a],c=1+o*o+r*r,l=Math.sqrt(c),f=(1+o*o)*(1+r*r)*e*e/(c*l);xr[s+a+1]=xr[s+a]+f}t+=xr[s+lt]}Vu=t*6}let xo=null;function k_(){if(xo)return xo;const i=new Int32Array(24*lt*4),e=[0,0,0],t=[0,0,0];let n=0;for(let r=0;r<6;r++)for(let s=0;s<lt;s++)for(let a=0;a<4;a++){const o=a===0?0:a===1?lt-1:s,c=a===2?0:a===3?lt-1:s,l=a===0?-.01:a===1?lt+.01:s+.5,f=a===2?-.01:a===3?lt+.01:s+.5;La(r,l,f,e),hs(e[0],e[1],e[2],t),i[n++]=r*lt+c,i[n++]=o,i[n++]=t[0]*lt+Math.min(lt-1,Math.max(0,Math.floor(t[2]))),i[n++]=Math.min(lt-1,Math.max(0,Math.floor(t[1])))}return xo=i}function G_(i,e){z_();const t=i.cover,n=ps(i);let r=0;for(let u=0;u<6*lt;u++){const M=u/lt|0,p=u-M*lt,d=En(M,0,p);pi[u]=r;let y=0;for(;y<lt;){for(;y<lt&&t[d+y]<128;)y++;if(y===lt)break;const A=y;for(;y<lt&&t[d+y]>=128;)y++;r===vi&&B_(),Xi[r]=A,qi[r]=y,Ci[r]=r,Hi[r]=y-A,ya[r]=n[d+A],r++}if(p>0){const A=pi[u];let b=pi[u-1];for(let L=pi[u];L<r;L++){const T=Xi[L],_=qi[L];for(;b<A&&qi[b]<=T;)b++;for(let E=b;E<A&&Xi[E]<_;E++)tf(L,E)}}}pi[6*lt]=r;const s=k_();for(let u=0;u<s.length;u+=4){const M=nf(s[u],s[u+1]);if(M<0)continue;const p=nf(s[u+2],s[u+3]);p>=0&&tf(M,p)}for(let u=0;u<r;u++){const M=El(u);Ci[u]=M,M!==u&&(Hi[M]+=Hi[u])}zi.fill(0),zi[0]=1;let a=0;for(const u of e)u>0&&u<=Kn&&!zi[u]&&(zi[u]=1,a++);const o=Kn-a;let c=0;for(let u=0;u<r;u++){const M=Ci[u];if(M!==u){Vi[u]=Vi[M];continue}Hi[u]>=F_&&c<o?(Vi[u]=c,Fn.old[c]=ya[u],_o[c]=Hi[u],c++):Vi[u]=-1}for(let u=0;u<c;u++){const M=Fn.old[u];M>0&&(Yr[M]<0||_o[u]>_o[Yr[M]])&&(Yr[M]=u)}for(let u=0;u<c;u++){const M=Fn.old[u];M>0&&Yr[M]===u?(Fn.id[u]=M,zi[M]=1):Fn.id[u]=-1}let l=1;for(let u=0;u<c;u++)if(!(Fn.id[u]>=0)){for(;zi[l];)l++;Fn.id[u]=l,zi[l]=1}for(let u=0;u<c;u++)Yr[Fn.old[u]]=-1;n.fill(0),vo.fill(0,0,c);const f=Fn.id,m=xr,h=lt+1;yl++,Hu=i;for(let u=0;u<c;u++){Gu[f[u]]=yl;for(let M=f[u]*24,p=M+24;M<p;M+=4)mn[M]=lt,mn[M+1]=0,mn[M+2]=lt,mn[M+3]=0}let g=0;for(let u=0;u<6*lt;u++){const M=u/lt|0,p=u-M*lt,d=En(M,0,p),y=p*h;for(let A=pi[u];A<pi[u+1];A++){const b=Xi[A],L=qi[A],T=Vi[A];if(T<0){t.fill(0,d+b,d+L),g++;continue}n.fill(f[T],d+b,d+L);const _=(f[T]*6+M)*4;b<mn[_]&&(mn[_]=b),L>mn[_+1]&&(mn[_+1]=L),p<mn[_+2]&&(mn[_+2]=p),p+1>mn[_+3]&&(mn[_+3]=p+1),vo[T]+=m[y+L]-m[y+b]}}for(let u=0;u<c;u++)Fn.area[u]=vo[u]/Vu;return Fn.n=c,i.idVersion++,g&&i.coverVersion++,Fn}let mr=null,oa=65536,$r=new Int32Array(oa);const Xs=new Float64Array(3),H_=[1,-1,0,0],V_=[0,0,1,-1],rf=3*lt;function W_(i,e,t,n,r){const s=e+n,a=t+r;return s>=0&&s<lt&&a>=0&&a<lt?En(i,s,a):(La(i,s+.5,a+.5,Xs),Gl(Xs[0],Xs[1],Xs[2]))}function X_(i,e,t,n){const r=ps(i),s=i.cover;mr||(mr=new Uint8Array(r.length));let a=0,o=0;const c=l=>{if(o===oa){oa*=2;const f=new Int32Array(oa);f.set($r),$r=f}$r[o++]=l,mr[l]=1};for(let l=0;l<t.length;l++){const f=t[l];!mr[f]&&r[f]===e&&c(f)}for(;a<o;){const l=$r[a++],f=l%rf,m=l/rf|0,h=f/lt|0,g=m/lt|0;for(let u=0;u<4;u++){const M=W_(g*3+h,f-h*lt,m-g*lt,H_[u],V_[u]);!mr[M]&&r[M]===e&&n(M)&&c(M)}}for(let l=0;l<o;l++){const f=$r[l];mr[f]=0,s[f]=0}return o&&i.coverVersion++,o}function Wu(i){return{id:i,area:0}}function bl(i){i.clear();const e=Wu(1);e.area=1,i.set(1,e)}function q_(i,e){const t=new Map(i);i.clear();for(let n=0;n<e.n;n++){const r=e.id[n],s=t.get(e.old[n]),a=s!==void 0&&r===s.id?s:Wu(r);a.area=e.area[n],i.set(r,a)}}const Vt={elastic:.12,adhesion:1.2,shear:5,load:1,lift:1,ghost:.6,height:2,rough:.1,tear:3,grip:4,edge:.7,straight:1},Ea=4e4,qs=8,Ht=ds,zt=6*Ht*Ht,ei=Math.PI/(2*Ht),sf=3,Y_=3,$_=3,Z_=12,Mo=1.5,K_=.12,J_=.004*$e,af=40,of=1.7,Q_=.4*$e,j_=.2,lf=3,ev=.6,tv=15e3,cf=6,nv=5,Me=new Float32Array(zt*3),qt=new Int32Array(zt*8).fill(-1),Jr=new Float32Array(zt*8),Xu=new Float32Array(zt),qu=new Float32Array(zt),iv=[1,-1,0,0,1,1,-1,-1],rv=[0,0,1,-1,1,-1,1,-1],ff=[1,0,3,2,7,6,5,4],Cn=new Float64Array(3),Ys=new Float64Array(3);function Yu(i,e,t){hs(i,e,t,Ys);const n=Math.min(Ht-1,Ys[1]/Di|0),r=Math.min(Ht-1,Ys[2]/Di|0);return(Ys[0]*Ht+r)*Ht+n}function $u(i,e,t){return e>=0&&e<Ht&&t>=0&&t<Ht?(i*Ht+t)*Ht+e:(La(i,(e+.5)*Di,(t+.5)*Di,Cn),Yu(Cn[0],Cn[1],Cn[2]))}for(let i=0;i<6;i++)for(let e=0;e<Ht;e++)for(let t=0;t<Ht;t++){const n=(i*Ht+e)*Ht+t;La(i,(t+.5)*Di,(e+.5)*Di,Cn),Me[n*3]=Cn[0]*$e,Me[n*3+1]=Cn[1]*$e,Me[n*3+2]=Cn[2]*$e,qu[n]=.7*Math.sin(Cn[0]*23+Cn[1]*11)*Math.sin(Cn[1]*19-Cn[2]*29)+.3*Math.sin(Cn[2]*61+Cn[0]*47)}for(let i=0;i<6;i++)for(let e=0;e<Ht;e++)for(let t=0;t<Ht;t++){const n=(i*Ht+e)*Ht+t;let r=0,s=0;for(let a=0;a<8;a++){const o=$u(i,t+iv[a],e+rv[a]);let c=o===n;for(let f=0;f<a;f++)qt[n*8+f]===o&&(c=!0);if(c)continue;qt[n*8+a]=o;const l=Math.hypot(Me[n*3]-Me[o*3],Me[n*3+1]-Me[o*3+1],Me[n*3+2]-Me[o*3+2]);Jr[n*8+a]=l,a<4&&(r+=l,s++)}Xu[n]=s>0?r/s/(ei*$e):1}const Tl=[],Zu=[];for(let i=0;i<6;i++)for(let e=-1;e<=Ht;e++)for(let t=-1;t<=Ht;t++)t>=0&&t<Ht&&e>=0&&e<Ht||(Tl.push(kl(i,t,e)),Zu.push($u(i,t,e)));const la=new Int32Array(zt);for(let i=0;i<6;i++)for(let e=0;e<Ht;e++)for(let t=0;t<Ht;t++)la[(i*Ht+e)*Ht+t]=kl(i,t,e);function uf(i,e,t,n,r,s){const a=(i*n+e*r+t*s)/($e*$e);return $e*Math.acos(a>1?1:a<-1?-1:a)}const Ot=0,$s=1,Zs=2;function sv(i){const e=i.films,t=i.lift;let n=e[0],r=0;const s=new Uint8Array(zt),a=new Uint8Array(zt),o=new Uint8Array(zt),c=new Uint8Array(zt),l=new Float32Array(zt*3),f=new Float32Array(zt),m=new Float32Array(zt),h=new Float32Array(zt*3),g=new Float32Array(zt),u=new Int32Array(zt),M=new Int32Array(zt).fill(-1),p=new Uint8Array(zt),d=new Int32Array(zt),y=new Float32Array(zt*4),A=new Uint8Array(zt),b=new Float32Array(zt),L=new Float32Array(zt),T=new Float32Array(zt*3),_=new Float32Array(zt*3),E=new Float32Array(zt),z=new Uint8Array(zt);let P=[],R=new Int32Array(4096),O=new Int32Array(4096),Z=0,N=0,H=0,k=0,U=0;const K=[];let V=0,ne=!1;const se=new G,Le=new G,be=new Tn,W=new G,me=new G;let ye=!1,fe=0;function Y(te){return a[te]===0&&(a[te]=Ar(n,Me[te*3],Me[te*3+1],Me[te*3+2])===V?1:2),a[te]===1}const ce=new Uint8Array(zt);function _e(te){return r===0?!1:(ce[te]===0&&(ce[te]=R_(e,r,Me[te*3],Me[te*3+1],Me[te*3+2])?2:1),ce[te]===2)}function oe(te,he){const de=1<<he;if(o[te]&de)return(c[te]&de)!==0;o[te]|=de;const ae=qt[te*8+he];if(ae<0||!Y(te)||!Y(ae))return!1;const De=Math.ceil(Jr[te*8+he]/(Ur*.7)),Se=Me[te*3],xe=Me[te*3+1],Ne=Me[te*3+2],Ie=Me[ae*3]-Se,Ce=Me[ae*3+1]-xe,Xe=Me[ae*3+2]-Ne;for(let at=1;at<De;at++){const et=at/De;if(Ar(n,Se+Ie*et,xe+Ce*et,Ne+Xe*et)!==V)return!1}return c[te]|=de,!0}function ve(te,he,de,ae){const De=ae*3,Se=Me[De]-te,xe=Me[De+1]-he,Ne=Me[De+2]-de,Ie=Math.ceil(Math.hypot(Se,xe,Ne)/(Ur*1.4));for(let Ce=1;Ce<Ie;Ce++){const Xe=Ce/Ie;if(Ar(n,te+Se*Xe,he+xe*Xe,de+Ne*Xe)!==V)return!1}return!0}function Oe(te,he){const de=u[te];return M[he]!==de&&(M[he]=de,p[he]=ve(h[te*3],h[te*3+1],h[te*3+2],he)?1:0),p[he]===1}function ze(te,he,de,ae=-1){if(N===R.length){const xe=new Int32Array(N*2);xe.set(R),R=xe}if(R[N++]=te,Z===O.length){const xe=new Int32Array(Z*2);xe.set(O),O=xe}O[Z++]=te,s[te]=he,f[te]=1;const De=te*3;l[De]=Me[De],l[De+1]=Me[De+1],l[De+2]=Me[De+2],m[te]=de;const Se=te*3;if(ae===-1)h[Se]=Me[Se],h[Se+1]=Me[Se+1],h[Se+2]=Me[Se+2],g[te]=0,d[te]=te,u[te]=te;else if(ae>=0){const xe=ae*3;h[Se]=h[xe],h[Se+1]=h[xe+1],h[Se+2]=h[xe+2],g[te]=g[ae],d[te]=d[ae],u[te]=u[ae]}else{const xe=-2-ae,Ne=xe*3;h[Se]=Me[Ne],h[Se+1]=Me[Ne+1],h[Se+2]=Me[Ne+2],g[te]=m[xe],d[te]=d[xe],u[te]=xe}}function Ze(){M.fill(-1),ce.fill(0),s.fill(0),a.fill(0),o.fill(0),c.fill(0),N=H=k=Z=0,U=0,ye=!1,i.tension.count=0;for(const te of P)z[te]=0;P=[],ne=!1,t.id=0,t.fade=1,t.strain=0,t.fan.n=0,t.data.fill(0),t.version++}function st(te,he,de,ae){Ze(),r=te,n=e[te],V=he,se.copy(de).normalize(),Le.copy(se).multiplyScalar($e),be.identity(),fe=0;const De=(Ce,Xe,at)=>{let et=-1,Dt=3.2*ei*$e;const Ct=[Yu(Ce,Xe,at)];for(let yt=0;yt<Ct.length&&Ct.length<90;yt++){const Ft=Ct[yt],S=Math.hypot(Me[Ft*3]-Ce*$e,Me[Ft*3+1]-Xe*$e,Me[Ft*3+2]-at*$e);if(S<Dt&&Y(Ft)&&!_e(Ft)&&(Dt=S,et=Ft),S<3.2*ei*$e)for(let D=0;D<8;D++){const ee=qt[Ft*8+D];ee>=0&&!Ct.includes(ee)&&Ct.push(ee)}}return et};W.copy(se).addScaledVector(ae,1.2*ei).normalize();const Se=De(W.x,W.y,W.z);W.crossVectors(se,ae).normalize();const xe=Math.max(of,Vt.grip)*ei*$e,Ne=ei*$e,Ie=Ce=>{const Xe=Me[Ce*3]-se.x*$e,at=Me[Ce*3+1]-se.y*$e,et=Me[Ce*3+2]-se.z*$e,Dt=Xe*W.x+at*W.y+et*W.z,Ct=Xe*ae.x+at*ae.y+et*ae.z;return Math.abs(Dt)<=xe&&Ct>=-1.5*Ne&&Ct<=of*Ne};if(Se>=0){ze(Se,Zs,0);for(let Ce=0;Ce<N;Ce++){const Xe=R[Ce];for(let at=0;at<8;at++){if(!oe(Xe,at))continue;const et=qt[Xe*8+at];s[et]===Ot&&Ie(et)&&!_e(et)&&ze(et,Zs,0)}}}return N===0?(Ze(),!1):(H=N,ne=!0,t.layer=r,t.id=V,!0)}function je(te){const he=Vt.adhesion*ei*$e*(1+Vt.load*k/af)*Math.min(1,te/.05);return Math.min(Q_,Vt.lift*(te*$e*(1+Vt.elastic)+he))}function tt(te,he){be.copy(te),fe=je(he),Le.copy(se).applyQuaternion(be).multiplyScalar($e+fe)}function Ke(){const te=1+Vt.elastic;for(let he=0;he<N;he++){const de=R[he],ae=de*3;s[de]===Zs&&(W.set(Me[ae],Me[ae+1],Me[ae+2]).applyQuaternion(be).multiplyScalar(($e+fe)/$e),l[ae]=W.x,l[ae+1]=W.y,l[ae+2]=W.z)}for(let he=0;he<Z_;he++){const de=(he&1)===1;for(let ae=0;ae<N;ae++){const De=R[de?N-1-ae:ae],Se=De*3;if(s[De]!==$s)continue;let xe=0,Ne=0,Ie=0,Ce=0;for(let D=0;D<8;D++){if(!oe(De,D))continue;const ee=qt[De*8+D],X=ee*3,$=D<4?1:.5;if(s[ee]===Ot){if(ft(ee))continue;xe+=Me[X]*$,Ne+=Me[X+1]*$,Ie+=Me[X+2]*$}else xe+=l[X]*$,Ne+=l[X+1]*$,Ie+=l[X+2]*$;Ce+=$}if(Ce===0)continue;xe=l[Se]+(xe/Ce-l[Se])*Mo,Ne=l[Se+1]+(Ne/Ce-l[Se+1])*Mo,Ie=l[Se+2]+(Ie/Ce-l[Se+2])*Mo;const Xe=d[De]*3,at=xe-l[Xe],et=Ne-l[Xe+1],Dt=Ie-l[Xe+2],Ct=Math.sqrt(at*at+et*et+Dt*Dt),yt=m[De]*te;if(Ct>yt){const D=yt/Ct;xe=l[Xe]+at*D,Ne=l[Xe+1]+et*D,Ie=l[Xe+2]+Dt*D}for(let D=0;D<8;D++){if(!oe(De,D))continue;const ee=qt[De*8+D],X=ee*3,$=s[ee];if($===Ot&&ft(ee))continue;const Ue=$===Ot?Me[X]:l[X],Fe=$===Ot?Me[X+1]:l[X+1],Pe=$===Ot?Me[X+2]:l[X+2],ke=Ue-xe,Ye=Fe-Ne,ot=Pe-Ie,w=Math.sqrt(ke*ke+Ye*Ye+ot*ot),F=Jr[De*8+D]*te;if(w<=F)continue;const re=(w-F)/w*($===$s?.5:1);xe+=ke*re,Ne+=Ye*re,Ie+=ot*re}const Ft=$e+J_*(1+K_*Math.min(f[De],60)),S=Math.sqrt(xe*xe+Ne*Ne+Ie*Ie);if(S<Ft){const D=Ft/S;xe*=D,Ne*=D,Ie*=D}l[Se]=xe,l[Se+1]=Ne,l[Se+2]=Ie}}}const Je=i.tension;function it(te,he,de,ae,De,Se,xe){const Ne=Je.count*3,Ie=ae/Math.hypot(te,he,de);Je.pos[Ne]=te*Ie,Je.pos[Ne+1]=he*Ie,Je.pos[Ne+2]=de*Ie,Je.col[Ne]=De,Je.col[Ne+1]=Se,Je.col[Ne+2]=xe,Je.count++}function ut(te,he,de,ae,De){if(Je.count+2+(De?qs*4:0)>Ea)return;const Se=de<1?.5*Math.max(0,(de-.6)/.4):.5+.5*Math.min(1,ae),xe=Math.min(1,Se*2),Ne=Se<.5?.35+1.3*Se:2-2*Se,Ie=Math.max(0,1-Se*2),Ce=te*3,Xe=he*3;if(it(Me[Ce],Me[Ce+1],Me[Ce+2],$e*1.012,xe,Ne,Ie),it(Me[Xe],Me[Xe+1],Me[Xe+2],$e*1.012,xe,Ne,Ie),!De)return;const at=d[te]*3,et=.55,Dt=(Ct,yt,Ft,S,D,ee)=>{for(let X=0;X<qs;X++){const $=X/qs,Ue=(X+1)/qs;it(Ct+(S-Ct)*$,yt+(D-yt)*$,Ft+(ee-Ft)*$,$e*1.008,xe*et,Ne*et,Ie*et),it(Ct+(S-Ct)*Ue,yt+(D-yt)*Ue,Ft+(ee-Ft)*Ue,$e*1.008,xe*et,Ne*et,Ie*et)}};Dt(Me[Xe],Me[Xe+1],Me[Xe+2],h[Ce],h[Ce+1],h[Ce+2]),Dt(h[Ce],h[Ce+1],h[Ce+2],l[at],l[at+1],l[at+2])}function ft(te){if(pt[te]!==dt)return!1;const he=_t[te];return he>=0&&he!==we}function C(te,he){if(Je.count+2>Ea)return;const de=te*3,ae=he*3;if(Math.hypot(l[de]-Me[ae],l[de+1]-Me[ae+1],l[de+2]-Me[ae+2])<Y_*ei*$e)return;const Se=_e(he)?0:1,xe=_e(he)||!ft(he)?1:0,Ne=1;it(Me[ae],Me[ae+1],Me[ae+2],$e*1.012,Se,xe,Ne),it(l[de],l[de+1],l[de+2],Math.hypot(l[de],l[de+1],l[de+2])+$e*.012,Se,xe,Ne)}const _t=new Int32Array(zt),pt=new Int32Array(zt);let dt=0,we=-1,bt=new Int32Array(1024);const nt=[],ct=[],x=[],v=[],B=[];function q(){dt++;let te=0;for(let at=0;at<Z;at++){const et=O[at];for(let Dt=0;Dt<8;Dt++){if(!oe(et,Dt))continue;const Ct=qt[et*8+Dt];if(!(s[Ct]!==Ot||pt[Ct]===dt)){if(pt[Ct]=dt,_t[Ct]=-1,te===bt.length){const yt=new Int32Array(te*2);yt.set(bt),bt=yt}bt[te++]=Ct}}}let he=0,de=-1,ae=-1/0,De=-1,Se=-1/0;const xe=Math.hypot(Le.x,Le.y,Le.z)||1,Ne=Le.x/xe,Ie=Le.y/xe,Ce=Le.z/xe,Xe=[];for(let at=0;at<te;at++){if(_t[bt[at]]>=0)continue;let et=0,Dt=-1/0,Ct=0,yt=0,Ft=0,S=0,D=0;for(Xe.push(bt[at]),_t[bt[at]]=he;Xe.length;){const Pe=Xe.pop(),ke=Pe*3;et++;const Ye=Me[ke],ot=Me[ke+1],w=Me[ke+2];Ft+=Ye,S+=ot,D+=w;const F=(Ye*Ne+ot*Ie+w*Ce)/$e;if(F>Dt&&(Dt=F),Ct+=F,!_e(Pe)){let re=0,Be=0,Ve=0;for(let gt=0;gt<4;gt++){if(!oe(Pe,gt))continue;const Ge=qt[Pe*8+gt];if(s[Ge]===Ot)continue;const Ut=1/(Jr[Pe*8+gt]||1);re+=(Me[Ge*3]-Ye)*Ut,Be+=(Me[Ge*3+1]-ot)*Ut,Ve+=(Me[Ge*3+2]-w)*Ut}const We=Math.hypot(re,Be,Ve);yt+=(We>1e-4?We:.7)*Xu[Pe]}for(let re=0;re<8;re++){if(!oe(Pe,re))continue;const Be=qt[Pe*8+re];pt[Be]===dt&&_t[Be]<0&&(_t[Be]=he,Xe.push(Be))}}const ee=Math.hypot(Ft,S,D)||1,X=Ft/ee,$=S/ee,Ue=D/ee;nt[he]=et,ct[he]=yt,x[he]=X,v[he]=$,B[he]=Ue;let Fe=.55*(Ct/et)+.45*Dt;if(ye){const Pe=X*me.x+$*me.y+Ue*me.z;Fe+=.15*Math.max(0,Pe)}Fe>Se&&(Se=Fe,De=he),et>=cf&&Fe>ae&&(ae=Fe,de=he),he++}we=de>=0?de:De,we>=0?(me.set(x[we],v[we],B[we]),ye=!0,k=ct[we]):(ye=!1,k=0)}const J=()=>({c:new G,u:new G,v:new G});function ge(te,he,de){let ae=0,De=0,Se=0;for(let xe=0;xe<de;xe++){const Ne=he[xe]*3;ae+=Me[Ne],De+=Me[Ne+1],Se+=Me[Ne+2]}return te.c.set(ae,De,Se),te.c.lengthSq()<1e-12?!1:(te.c.normalize(),te.u.set(-te.c.y,te.c.x,0),te.u.lengthSq()<1e-6&&te.u.set(0,-te.c.z,te.c.y),te.u.normalize(),te.v.crossVectors(te.c,te.u),!0)}let ue=0,Q=0;function le(te,he){const de=he*3,ae=(Me[de]*te.c.x+Me[de+1]*te.c.y+Me[de+2]*te.c.z)/$e;return ae<.2?!1:(ue=(Me[de]*te.u.x+Me[de+1]*te.u.y+Me[de+2]*te.u.z)/($e*ae),Q=(Me[de]*te.v.x+Me[de+1]*te.v.y+Me[de+2]*te.v.z)/($e*ae),!0)}let Ae=new Float64Array(1024),I=new Float64Array(1024),j=new Int32Array(1024);function ie(te,he,de,ae,De){ae.length=De.length=0,Ae.length<de&&(Ae=new Float64Array(de*2),I=new Float64Array(de*2),j=new Int32Array(de*2));for(let Ie=0;Ie<de;Ie++){if(!le(te,he[Ie]))return!1;Ae[Ie]=ue,I[Ie]=Q,j[Ie]=Ie}const Se=j.subarray(0,de).sort((Ie,Ce)=>Ae[Ie]-Ae[Ce]||I[Ie]-I[Ce]),xe=Ie=>{const Ce=ae.length;return(ae[Ce-1]-ae[Ce-2])*(I[Ie]-De[Ce-2])-(De[Ce-1]-De[Ce-2])*(Ae[Ie]-ae[Ce-2])};for(let Ie=0;Ie<de;Ie++){const Ce=Se[Ie];for(;ae.length>=2&&xe(Ce)<=0;)ae.pop(),De.pop();ae.push(Ae[Ce]),De.push(I[Ce])}const Ne=ae.length+1;for(let Ie=de-2;Ie>=0;Ie--){const Ce=Se[Ie];for(;ae.length>=Ne&&xe(Ce)<=0;)ae.pop(),De.pop();ae.push(Ae[Ce]),De.push(I[Ce])}return ae.pop(),De.pop(),ae.length<3?(ae.length=De.length=0,!1):!0}const Ee=J(),Te=[],pe=[];let Qe=new Int32Array(1024);function mt(){if(Te.length=pe.length=0,Vt.straight<.5||N<3||N>tv||!ge(Ee,R,N))return;Qe.length<N&&(Qe=new Int32Array(N*2));let te=0;for(let he=0;he<N;he++){const de=R[he];if(!le(Ee,de))return;for(let ae=0;ae<8;ae++){const De=qt[de*8+ae];if(De<0||s[De]===Ot){Qe[te++]=de;break}}}ie(Ee,Qe,te,Te,pe)}function Re(te){const he=Te.length;if(he===0||!le(Ee,te))return!1;const de=ue,ae=Q,De=.6*ei;for(let Se=0,xe=he-1;Se<he;xe=Se++){const Ne=Te[Se]-Te[xe],Ie=pe[Se]-pe[xe];if(Ne*(ae-pe[xe])-Ie*(de-Te[xe])<De*Math.hypot(Ne,Ie))return!1}return!0}const rt=J(),vt=[],He=[],Rt=[];function Zt(){if(t.fan.n=0,we<0)return;Rt.length=0;for(let Ce=0;Ce<N;Ce++)s[R[Ce]]===Zs&&Rt.push(R[Ce]);const te=Rt.length;for(let Ce=0;Ce<Z;Ce++){const Xe=O[Ce];for(let at=0;at<8;at++){if(!oe(Xe,at))continue;const et=qt[Xe*8+at];if(s[et]===Ot&&pt[et]===dt&&_t[et]===we){Rt.push(Xe);break}}}const he=Rt.length;if(he-te<2||!ge(rt,Rt,he)||!ie(rt,Rt,he,vt,He))return;const de=vt.length,ae=rt.c,De=rt.u,Se=rt.v,xe=t.fan,Ne=Math.max(1,Math.ceil(de/Sa));let Ie=0;for(let Ce=0;Ce<de&&Ie<Sa;Ce+=Ne)xe.pts[Ie*2]=vt[Ce],xe.pts[Ie*2+1]=He[Ce],Ie++;xe.c[0]=ae.x,xe.c[1]=ae.y,xe.c[2]=ae.z,xe.u[0]=De.x,xe.u[1]=De.y,xe.u[2]=De.z,xe.v[0]=Se.x,xe.v[1]=Se.y,xe.v[2]=Se.z,xe.n=Ie>=3?Ie:0}function Dn(te){const he=te&&i.show.debug;q(),te&&(Je.count=0);let de=0;const ae=1+Vt.elastic,De=Vt.adhesion*ei*$e*(1+Vt.load*k/af),Se=$e/($e+fe),xe=l,Ne=Z;let Ie=0,Ce=0,Xe=0;for(let at=0;at<Ne;at++){const et=O[at];let Dt=!1;for(let Ct=0;Ct<8;Ct++){if(!oe(et,Ct))continue;const yt=qt[et*8+Ct];if(s[yt]!==Ot||(Dt=!0,he&&C(et,yt),_e(yt)))continue;const Ft=pt[yt]===dt?_t[yt]:-1;if(Ft>=0&&Ft!==we&&nt[Ft]>=cf)continue;const S=yt*3,D=et*3,ee=Jr[et*8+Ct],X=Me[D]-Me[S],$=Me[D+1]-Me[S+1],Ue=Me[D+2]-Me[S+2],Fe=d[et]*3,Pe=xe[Fe],ke=xe[Fe+1],Ye=xe[Fe+2],ot=Pe-Me[S],w=ke-Me[S+1],F=Ye-Me[S+2],re=Math.hypot(uf(Me[S],Me[S+1],Me[S+2],Pe*Se,ke*Se,Ye*Se),fe),Be=g[et]+uf(Me[S],Me[S+1],Me[S+2],h[D],h[D+1],h[D+2]),Ve=re-Be*ae<=0,We=Re(yt);if(Ve&&!te&&!We)continue;const gt=Ve&&!We||Oe(et,yt),Ge=gt?Be:m[et]+ee,Ut=(ot*Me[S]+w*Me[S+1]+F*Me[S+2])/($e*$e),Tt=ot-Me[S]*Ut,en=w-Me[S+1]*Ut,Xt=F-Me[S+2]*Ut,An=Math.hypot(Tt,en,Xt);let Kt=h[D]-Me[S],Qt=h[D+1]-Me[S+1],Mt=h[D+2]-Me[S+2];const kt=(Kt*Me[S]+Qt*Me[S+1]+Mt*Me[S+2])/($e*$e);Kt-=Me[S]*kt,Qt-=Me[S+1]*kt,Mt-=Me[S+2]*kt;let Jt=Math.hypot(Kt,Qt,Mt);(!gt||Jt<1e-5)&&(Kt=X,Qt=$,Mt=Ue,Jt=ee);const Pt=An>1e-5?(Kt*Tt+Qt*en+Mt*Xt)/Jt:0,Yt=Math.sqrt(Math.max(0,An*An-Pt*Pt)),Nn=Math.hypot(ot,w,F),gs=Nn>1e-6?(Math.max(0,Pt)+.5*Yt)/Nn:0;let Ia=1;for(let hn=0;hn<8;hn++)if(!oe(yt,hn)){Ia=1-Vt.edge;break}let Da=0,_s=0;for(let hn=0;hn<8;hn++){const Jn=qt[yt*8+hn];if(!(Jn<0||!oe(yt,hn))){_s++,s[Jn]!==Ot&&Da++;for(let Qi=0;Qi<8;Qi++){const Fa=qt[Jn*8+Qi];Fa<0||Fa===yt||!oe(Jn,Qi)||(_s++,s[Fa]!==Ot&&Da++)}}}const sh=_s>0?Da/_s:.4,ql=Math.min(1.8,Math.max(.3,1-ev*(sh-.4)/.4)),Yl=Ge*(1+(Vt.elastic+j_*Vt.shear*gs*Ia)*ql),Na=re-Yl,Ua=De*Ia*ql*(1+Vt.rough*qu[yt]);if(te){const hn=re/Math.max(Yl,1e-9),Jn=Ua>1e-9?Na/Ua:1,Qi=hn<1?.5*Math.max(0,(hn-.7)/.3):.5+.5*Math.max(0,Math.min(1,Jn));Ce+=Qi,Xe++,he&&ut(et,yt,hn,Jn,de++%3===0)}if(We){ze(yt,$s,Ge,gt?et:-2-et);continue}if(Na<=0)continue;let $l=0;for(let hn=0;hn<8;hn++){const Jn=qt[yt*8+hn];Jn>=0&&s[Jn]!==Ot&&$l++}($l>=nv||Na>Ua)&&ze(yt,$s,Ge,gt?et:-2-et)}Dt&&(O[Ie++]=et)}for(let at=Ne;at<Z;at++)O[Ie++]=O[at];Z=Ie,te&&(U=Xe>0?Ce/Xe:0)}function Ni(){for(let te=0;te<N;te++){const he=R[te];let de=1/0;for(let ae=0;ae<8;ae++){if(!oe(he,ae))continue;const De=qt[he*8+ae],Se=s[De]===Ot?0:f[De];Se<de&&(de=Se)}f[he]=Math.min(999,(de<1/0?de:f[he])+1)}}function un(){for(const ae of P)z[ae]=0;P=[];for(let ae=0;ae<N;ae++){const De=R[ae];z[De]=1,b[De]=1,P.push(De)}let te=0;for(let ae=0;ae<lf;ae++){const De=P.length;for(let Se=te;Se<De;Se++){const xe=P[Se];for(let Ne=0;Ne<8;Ne++){if(!oe(xe,Ne))continue;const Ie=qt[xe*8+Ne];z[Ie]||(z[Ie]=1,b[Ie]=0,P.push(Ie))}}te=De}let he=b,de=L;for(let ae=0;ae<lf;ae++){for(const Se of P){let xe=he[Se],Ne=1;for(let Ie=0;Ie<8;Ie++){if(!oe(Se,Ie))continue;const Ce=qt[Se*8+Ie];s[Se]!==Ot&&s[Ce]===Ot&&ft(Ce)||(Ne++,z[Ce]&&(xe+=he[Ce]))}de[Se]=xe/Ne}const De=he;he=de,de=De}if(he!==b)for(const ae of P)b[ae]=he[ae]}function oi(){const te=t.data;te.fill(0),Zt(),un();for(const he of P){const de=he*3;let ae=0,De=0,Se=0,xe=1,Ne=0;s[he]!==Ot&&(ae=l[de]-Me[de],De=l[de+1]-Me[de+1],Se=l[de+2]-Me[de+2],Ne=f[he]);for(let Ie=0;Ie<8;Ie++){if(!oe(he,Ie))continue;const Ce=qt[he*8+Ie],Xe=Ce*3;s[Ce]===Ot&&ft(Ce)||(xe++,s[Ce]!==Ot&&(ae+=l[Xe]-Me[Xe],De+=l[Xe+1]-Me[Xe+1],Se+=l[Xe+2]-Me[Xe+2],Ne+=f[Ce]))}E[he]=Ne/xe,T[de]=ae/xe,T[de+1]=De/xe,T[de+2]=Se/xe}for(let he=0;he<$_;he++){for(const de of P){if(s[de]===Ot)continue;const ae=de*3;let De=T[ae],Se=T[ae+1],xe=T[ae+2],Ne=1,Ie=!1;for(let Ce=0;Ce<8;Ce++){if(!oe(de,Ce))continue;const Xe=qt[de*8+Ce],at=Xe*3;if(s[Xe]===Ot){ft(Xe)||(Ie=!0);continue}Ne++,De+=T[at],Se+=T[at+1],xe+=T[at+2]}if(Ie){_[ae]=T[ae],_[ae+1]=T[ae+1],_[ae+2]=T[ae+2];continue}_[ae]=De/Ne,_[ae+1]=Se/Ne,_[ae+2]=xe/Ne}for(const de of P){if(s[de]===Ot)continue;const ae=de*3;T[ae]=_[ae],T[ae+1]=_[ae+1],T[ae+2]=_[ae+2]}}for(const he of P){if(s[he]!==Ot)continue;const de=he*3;T[de]=T[de+1]=T[de+2]=0}for(const he of P){const de=la[he],ae=s[he]!==Ot,De=he*3,Se=b[he]+(ae?Math.max(0,E[he]-1):0),xe=T[De],Ne=T[De+1],Ie=T[De+2];if(te[de]=xe,te[de+1]=Ne,te[de+2]=Ie,te[de+3]=Se,!!ae)for(let Ce=0;Ce<8;Ce++){const Xe=qt[he*8+Ce];if(Xe<0||s[Xe]!==Ot)continue;const at=oe(he,Ce);if(at&&!ft(Xe))continue;if(A[Xe]===0){let Ft=!1;if(!at&&!ft(Xe)){for(let S=0;S<8;S++)if(oe(Xe,S)&&s[qt[Xe*8+S]]!==Ot){Ft=!0;break}}if(Ft)continue;K.push(Xe)}A[Xe]++;const et=qt[he*8+ff[Ce]];let Dt=xe,Ct=Ne,yt=Ie;et>=0&&s[et]!==Ot&&oe(he,ff[Ce])&&(Dt+=xe-T[et*3],Ct+=Ne-T[et*3+1],yt+=Ie-T[et*3+2]),y[Xe*4]+=Dt,y[Xe*4+1]+=Ct,y[Xe*4+2]+=yt,y[Xe*4+3]+=Se}}for(const he of K){const de=la[he],ae=1/A[he];for(let De=0;De<(Y(he)?3:4);De++)te[de+De]=y[he*4+De]*ae;y[he*4]=y[he*4+1]=y[he*4+2]=y[he*4+3]=0,A[he]=0}K.length=0;for(let he=0;he<Tl.length;he++){const de=Tl[he],ae=la[Zu[he]];te[de]=te[ae],te[de+1]=te[ae+1],te[de+2]=te[ae+2],te[de+3]=te[ae+3]}t.version++}return{get active(){return ne},get peeled(){return N-H},get front(){return k},get tension(){return U},get height(){return fe},start:st,rise:je,carry:tt,clear:Ze,step(te=!0){if(ne&&te){Ke(),mt();for(let he=0;he<sf;he++)Dn(he===sf-1);q(),Ni(),oi()}},commit(){if(!ne)return 0;oi();const te=t.data,he=[],de=A;for(const Se of P){if(b[Se]>.5&&s[Se]!==Ot&&he.push(Gl(Me[Se*3],Me[Se*3+1],Me[Se*3+2])),s[Se]===Ot&&_e(Se)){for(let xe=0;xe<8;xe++)if(oe(Se,xe)&&s[qt[Se*8+xe]]!==Ot){de[Se]=1;break}if(de[Se])continue}for(let xe=0;xe<8;xe++){const Ne=qt[Se*8+xe];if(Ne>=0&&Y(Ne)&&!oe(Se,xe)&&(b[Se]>.5||z[Ne]&&b[Ne]>.5)){de[Se]=1;break}}}const ae=3*vn,De=X_(n,V,he,Se=>{const xe=Se%ae,Ne=Se/ae|0,Ie=xe/vn|0,Ce=Ne/vn|0,Xe=Ce*3+Ie,at=(xe-Ie*vn+.5)/Di,et=(Ne-Ce*vn+.5)/Di;for(let Dt=0;Dt<r;Dt++)if(e[Dt].cover[Se]>=128)return!1;return de[(Xe*Ht+(et|0))*Ht+(at|0)]===1||w_(te,Xe,at,et,3)>.5});for(const Se of P)de[Se]=0;return Ze(),De}}}const av=[["elastic","stretch",0,.6,"How far the film stretches before the pull reaches the front. 0 follows the finger exactly, higher is rubbery and lags."],["adhesion","cling",0,6,"How hard the film sticks. Higher needs a longer pull before each bit lets go."],["shear","shear",0,15,"How much film dragged flat along the surface holds out, compared with film folded back and peeled. Higher keeps the peel a narrow tongue along the pull."],["load","front",0,4,"How much a wide peel front weighs. At 0 width makes no difference. Only matters with cling above 0."],["lift","lift",0,1,"How the hand pulls. 0 drags the film flat back over itself. 1 lifts it up and away as it goes, so the finger stays over the place where the film comes off."],["ghost","ghost",0,1,"How visible the lifted film stays behind the front. 0 fades out, 1 stays solid. Looks only."],["height","band",0,2,"How much of the lifted film is shown: it is cut off where it rises higher than this above the sphere (in radii). The rest of what is in the hand is not drawn."],["rough","rough",0,1,"How unevenly the film sticks from spot to spot. 0 gives a clean front, 1 a stuttering one."],["tear","tear",0,10,"Strength. The film breaks off when the peel front gets this wide, sooner on a fast pull. 0 never breaks."],["edge","edge",0,1,"How much more easily the film lets go along a free edge than in the middle. Higher lets the peel run out along a cut, so the front meets it as an arc."],["straight","straight",0,1,"Above 0.5 the lifted film is a taut flat sheet: stuck film lying under it lets go, so the front runs straight from edge to edge. Below 0.5 each spot only answers for itself."],["grip","grip",1,12,"How wide a strip of the edge the finger holds. Narrow gathers the film to a point, wide pulls it off flat. Takes effect on the next grab."]],ov=[["opacity","opacity","How much of what is under the film it hides. 0 is clear, 1 opaque."],["roughness","rough","How matte the surface is. 0 is a mirror gloss, 1 dead matte."],["metalness","metal","0 a dielectric like film or paper, 1 a metal: its colour is then the colour of its reflections."]],hf=["none","label","net"],df=14,lv=4,cv=8e3,Ku="http://www.w3.org/2000/svg";function ki(i,e=""){const t=document.createElementNS(Ku,"svg");return t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("aria-hidden","true"),t.innerHTML=`<path d="${i}"/>${e}`,t}const pf="M8.5 4.5 4 9l4.5 4.5M4 9h10a5.5 5.5 0 0 1 0 11h-3.5",fv="M-4.5 21V4.5A4.5 4.5 0 0 1 4.5 4.5V17C5 13.5 11.5 13.5 11.5 17.5C12 15 17 15.5 17 19.5C17.5 17.5 21.5 18.5 21 22.5C21 30 19 34 16.5 38H-7.5C-10.5 34 -13 31 -14 27C-15.5 23 -14.5 19 -11.5 18.5C-8.5 18 -6 20 -4.5 21Z",uv="M4.5 17V22M11.5 17.5V23M17 19.5V24.5M-4.5 21C-6 23 -6.5 26 -6 28",Ju="M4.5 19.5 9 15M9 15l9.5-11.5c1.6 2.6 1.4 6.2-.6 8.8L12.5 18.5z",mf=i=>`<g transform="${i}"><path vector-effect="non-scaling-stroke" d="${fv}"/><path vector-effect="non-scaling-stroke" d="${uv}"/></g>`,hv={combo:"",peel:"",knife:Ju,ruler:"M3.5 16 16 3.5l4.5 4.5L8 20.5zM7.5 12l2 2M10.5 9l2 2M13.5 6l2 2",scratch:"M6.5 4c-1.4 5-1.4 11 0 16M10.5 4c-1.4 5-1.4 11 0 16M14.5 4c-1.4 5-1.4 11 0 16M18.5 5.5c-1.2 4.4-1.2 9 0 13"},dv={combo:mf("translate(7.4 6.2) scale(0.42)")+`<path vector-effect="non-scaling-stroke" transform="translate(11.6 0.6) scale(0.56)" d="${Ju}"/>`,peel:mf("translate(10.4 2.2) scale(0.52)")},gf=i=>ki(hv[i],dv[i]??""),Ks={combo:"Peel and cut",peel:"Peel",knife:"Knife",ruler:"Ruler",scratch:"Scratch"},jr=/Mac|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl",pv=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,mv=pv?[["Peel and cut","where the finger lands says which",[["Drag an edge","peel"],["Drag on the film","knife"],["Drag from outside","turn"],["Two fingers on the film","scratch"],["Two fingers outside","ruler"]]],["Tool","",[["Tap","open it"],["Hold + drag","pick"]]],["History","",[["The arrows","undo, redo"],["The round arrow","start over"]]]]:[["Peel and cut","where the press lands says which",[["Drag an edge","peel"],["Drag on the film","knife"],["Drag from outside","turn"],[`[${jr}] + drag`,"ruler"],["[⇧] + drag","scratch"]]],["Tools","hold T, move, let go",[["[T]","tool menu"],["[1] [2] [3] [4] [5]","pick a tool"]]],["History","",[[`[${jr}] [Z]`,"undo"],[`[⇧] [${jr}] [Z]`,"redo"],["[R]","start over"]]]],gv="M19.5 12a7.5 7.5 0 1 1-2.2-5.3M19.5 4.5v4.2h-4.2",_v="M12 6v12M6 12h12",vv="M7 12h10";function xv(){const n=(s,a)=>{const o=a*Math.PI/180;return`${(12+s*Math.cos(o)).toFixed(2)} ${(12+s*Math.sin(o)).toFixed(2)}`};let r="";for(let s=0;s<8;s++){const a=s*45;r+=`${s===0?"M":"L"}${n(7.4,a-15)}L${n(10,a-9)}L${n(10,a+9)}L${n(7.4,a+15)}`}return r+"Z"}function ht(i,e,t){const n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n}function Rn(i,e,t){const n=ht("button",i);return n.type="button",n.tabIndex=-1,t&&(n.title=t,n.setAttribute("aria-label",t)),n.addEventListener("mousedown",r=>r.preventDefault()),n.addEventListener("click",e),n}function So(i,e,t,n){let r=!1;const s=a=>{r=a,e.classList.toggle("open",a),e.inert=!a,i.classList.toggle("on",a),i.setAttribute("aria-expanded",String(a)),n?.(a)};return window.addEventListener("keydown",a=>{a.key==="Escape"&&r&&s(!1)}),t&&window.addEventListener("pointerdown",a=>{r&&!t.contains(a.target)&&s(!1)},!0),s(!1),{set:s,get open(){return r}}}const ca=i=>"#"+i.toString(16).padStart(6,"0"),_f=(i,e)=>`rgba(${i>>16&255}, ${i>>8&255}, ${i&255}, ${e})`,vf=(i,e,t)=>`linear-gradient(${_f(i,e)}, ${_f(i,e)}), ${ca(t)}`;function Mv(i){const e=ht("div","ui");e.addEventListener("touchstart",()=>{},{passive:!0});const t=ht("div","bar"),n=(x,v,...B)=>{x.removeAttribute("title");const q=ht("span","tip",v);for(const J of B)q.append(ht("kbd","",J));x.append(q)},r=()=>ht("span","bar-sep"),s=ht("div","pick"),a=Rn("tool",()=>{},"Tool");a.setAttribute("aria-haspopup","true");const o=ht("div","pick-pop");s.append(a,o),t.append(s);let c=null;const l={y:0,moved:!1,down:!1,key:!1},f={x:0,y:0},m=new Map,h=x=>[String(i.tools.indexOf(x)+1)],g=x=>{c=x;for(const[v,B]of m)B.classList.toggle("on",v===x)},u=So(a,o,s,x=>{x||g(null)});function M(x){let v=null,B=1/0,q=-1/0;for(const[J,ge]of m){const ue=ge.getBoundingClientRect();q=Math.max(q,ue.bottom);const Q=Math.abs(ue.top+ue.height/2-x);Q<B&&(B=Q,v=J)}return x>q+6?null:v}function p(x){u.set(!1),i.onTool(x)}function d(x){a.replaceChildren(gf(x)),a.setAttribute("aria-label",`Tool: ${Ks[x]}`),n(a,Ks[x],"T"),m.clear(),o.replaceChildren();for(const v of i.tools){if(v===x)continue;const B=Rn("",()=>p(v),Ks[v]);B.removeAttribute("title");const q=ht("span","pick-label",Ks[v]);for(const J of h(v))q.append(ht("kbd","",J));B.append(gf(v),q),m.set(v,B),o.append(B)}}function y(x){o.style.transition="none",x(),o.offsetWidth,o.style.transition=""}function A(){o.classList.contains("at")&&y(()=>{o.classList.remove("at","flip"),o.style.left=o.style.top=""})}a.addEventListener("pointerdown",x=>{if(x.preventDefault(),u.open){u.set(!1);return}A(),l.y=x.clientY,l.moved=!1,l.down=!0,l.key=!1,u.set(!0)}),window.addEventListener("keydown",x=>{if(x.code!=="KeyT"||x.repeat||x.metaKey||x.ctrlKey||x.altKey)return;x.preventDefault();const v=8,B=o.offsetWidth,q=o.offsetHeight,J=s.getBoundingClientRect(),ge=Math.min(window.innerWidth-B-v,Math.max(v,f.x-B/2)),ue=Math.min(window.innerHeight-q-v,Math.max(v,f.y-(q+16)));y(()=>{o.classList.add("at"),o.classList.toggle("flip",f.x>window.innerWidth/2),o.style.left=`${ge-J.left}px`,o.style.top=`${ue-J.top}px`}),l.y=f.y,l.moved=!0,l.down=!0,l.key=!0,u.set(!0),g(null)}),window.addEventListener("keyup",x=>{if(x.code!=="KeyT"||!l.key)return;l.key=!1,l.down=!1;const v=c;u.open&&(v?p(v):u.set(!1))}),window.addEventListener("pointermove",x=>{f.x=x.clientX,f.y=x.clientY,!(!u.open||!l.down)&&(Math.abs(x.clientY-l.y)>6&&(l.moved=!0),l.moved&&g(M(x.clientY)))}),window.addEventListener("pointerup",x=>{if(!u.open||!l.down||l.key||(l.down=!1,!l.moved))return;const v=M(x.clientY);v?p(v):u.set(!1)}),window.addEventListener("pointercancel",()=>{l.down=!1}),d(i.tools[0]);const b=Rn("undo",i.onBack,"Undo");b.append(ki(pf)),n(b,"Undo",`${jr} Z`);const L=Rn("redo",i.onRedo,"Redo");L.append(ki(pf)),n(L,"Redo",`⇧ ${jr} Z`);const T=Rn("reset",i.onReset,"Start over");T.append(ki(gv)),n(T,"Start over","R");const _=Rn("gear",()=>_t.set(!_t.open),"Settings");_.append(ki(xv(),'<circle cx="12" cy="12" r="3"/>')),n(_,"Settings");const E=new URLSearchParams(location.search).has("settings");t.append(r(),b,L,T),E&&t.append(r(),_);const z=ht("div","sheet"),P=ht("div","tabs");P.setAttribute("role","tablist");const R=ht("div","sheet-body");z.append(P,R);const O={layers:ht("div","pane layers"),feel:ht("div","pane feel")},Z=Object.keys(O).map(x=>{const v=Rn("tab",()=>N(x));return v.textContent=x,v.setAttribute("role","tab"),P.append(v),R.append(O[x]),{k:x,b:v}});function N(x){for(const v of Z)v.b.classList.toggle("on",v.k===x),v.b.setAttribute("aria-selected",String(v.k===x)),O[v.k].hidden=v.k!==x;R.scrollTop=0}const H=ht("div","info");H.setAttribute("role","status");const k=ht("b",""),U=ht("span","");H.append(k,U);let K=0,V="";function ne(x,v,B=0){clearTimeout(K),V=x,k.textContent=x,U.textContent=v,H.classList.add("show"),B>0&&(K=window.setTimeout(se,B))}function se(){clearTimeout(K),H.classList.remove("show"),V=""}window.addEventListener("pointerdown",x=>{z.contains(x.target)||se()},!0);function Le(x){const v=ht("div","knob"),B=ht("span","knob-v"),q=ht("input","knob-in");q.type="range",q.min=String(x.min),q.max=String(x.max),q.step=String((x.max-x.min)/100),q.setAttribute("aria-label",x.label),q.setAttribute("aria-description",x.text);const J=ht("span","knob-k",x.label);J.append(ht("i","knob-i","i")),v.append(J,B,q);const ge=()=>{const pe=x.get();q.value=String(pe),B.textContent=pe.toFixed(2),q.style.setProperty("--p",String((pe-x.min)/(x.max-x.min)))},ue=pe=>{q.value=String(pe),x.set(Number(q.value)),ge()};q.addEventListener("input",()=>ue(Number(q.value))),q.addEventListener("focus",()=>ne(x.label,x.text)),q.addEventListener("blur",()=>{V===x.label&&se()});let Q=-1,le=!1,Ae=!1,I=0,j=0;const ie=()=>Math.max(1,q.getBoundingClientRect().width-df),Ee=pe=>{const Qe=q.getBoundingClientRect();ue(x.min+Math.min(1,Math.max(0,(pe-Qe.left-df/2)/ie()))*(x.max-x.min))};v.addEventListener("pointerdown",pe=>{if(!(Q!==-1||pe.pointerType==="mouse"&&pe.button!==0)){pe.preventDefault(),Q=pe.pointerId,le=pe.pointerType!=="mouse",Ae=!1,I=pe.clientX,j=x.get();try{v.setPointerCapture(Q)}catch{}v.classList.add("held"),ne(x.label,x.text),le||Ee(pe.clientX)}}),v.addEventListener("pointermove",pe=>{if(pe.pointerId!==Q)return;if(!le){Ee(pe.clientX);return}const Qe=pe.clientX-I;!Ae&&Math.abs(Qe)<lv||(Ae=!0,ue(j+Qe/ie()*(x.max-x.min)))});const Te=pe=>{pe.pointerId===Q&&(Q=-1,v.classList.remove("held"),le&&ne(x.label,x.text,cv))};return v.addEventListener("pointerup",Te),v.addEventListener("pointercancel",Te),v.addEventListener("pointerenter",pe=>{pe.pointerType==="mouse"&&Q===-1&&ne(x.label,x.text)}),v.addEventListener("pointerleave",pe=>{pe.pointerType==="mouse"&&Q===-1&&V===x.label&&se()}),ge(),{cell:v,show:ge}}function be(x,v){const B=ht("label","well"),q=ht("span","well-dot"),J=ht("input","");return J.type="color",J.setAttribute("aria-label",x),J.addEventListener("input",()=>v(parseInt(J.value.slice(1),16))),B.append(q,ht("span","",x),J),{well:B,set(ge){const ue=ca(ge);J.value!==ue&&(J.value=ue),q.style.background=ue}}}let W=[],me={name:"",color:0,opacity:1,roughness:0,metalness:0,print:"none",ink:0},ye=null,fe=-1,Y=null;const ce=x=>x===-1?me:W[x],_e=ht("div","layers-head"),oe=ht("span","layers-count"),ve=Rn("btn icon add",()=>{ye!==null&&ye>=0&&ye++,i.onAddFilm()},"Add a film on top");ve.append(ki(_v)),_e.append(oe,ve);const Oe=ht("div","layer-list");O.layers.append(_e,Oe);let ze=[],Ze=null;function st(x){const v=ht("div","layer");v.setAttribute("role","button"),v.setAttribute("aria-expanded",String(ye===x)),v.classList.toggle("on",ye===x),v.addEventListener("click",()=>{ye=ye===x?null:x,Ke()});const B=ht("span","chip"),q=ht("span","layer-text"),J=ht("span","layer-name"),ge=ht("span","layer-meta");q.append(J,ge),v.append(B,q);let ue=null;return x>=0?(ue=Rn("layer-minus",()=>{ye===x?ye=null:ye!==null&&ye>x&&ye--,i.onRemoveFilm(x)},"Remove this film"),ue.append(ki(vv)),ue.addEventListener("click",Q=>Q.stopPropagation()),v.append(ue)):v.append(ht("span","layer-tag","base")),Oe.append(v),{chip:B,name:J,meta:ge,minus:ue}}function je(){oe.textContent=`films ${W.length} / ${i.maxFilms}`,ve.disabled=W.length>=i.maxFilms,ze.forEach((x,v)=>{const B=v<W.length?v:-1,q=ce(B);x.chip.style.background=B===-1?ca(q.color):vf(q.color,q.opacity,me.color),x.name.textContent=q.name,x.meta.textContent=B===-1?`rough ${q.roughness.toFixed(2)}`:`${q.opacity.toFixed(2)}${q.print==="none"?"":" · "+q.print}`,x.minus&&(x.minus.disabled=W.length<=1)})}function tt(x){const v=x>=0,B=ht("div","layer-set"),q=i.finishes[v?0:1],J=ht("div","swatches");J.setAttribute("aria-label","presets");const ge=q.map((j,ie)=>{const Ee=Rn("swatch",()=>i.onPreset(x,ie),j.name);return Ee.append(ht("span","chip")),J.append(Ee),Ee});B.append(J);const ue=ht("div","knobs"),Q=ov.filter(([j])=>v||j!=="opacity").map(([j,ie,Ee])=>Le({label:ie,min:0,max:1,text:Ee,get:()=>ce(x)[j],set:Te=>i.onEdit(x,{[j]:Te})}));for(const j of Q)ue.append(j.cell);B.append(ue);const le=ht("div","layer-line"),Ae=be("colour",j=>i.onEdit(x,{color:j}));le.append(Ae.well);let I=null;if(v){const j=ht("div","mini-seg");j.setAttribute("role","radiogroup"),j.setAttribute("aria-label","print");const ie=hf.map(Te=>{const pe=Rn("mini",()=>i.onEdit(x,{print:Te}),`print: ${Te}`);return pe.textContent=Te,pe.setAttribute("role","radio"),j.append(pe),pe}),Ee=be("ink",Te=>i.onEdit(x,{ink:Te}));le.append(j,Ee.well),I={pick:ie,ink:Ee}}return B.append(le),{box:B,update(){const j=ce(x);q.forEach((ie,Ee)=>{ge[Ee].firstChild.style.background=v?vf(ie.color,ie.opacity,me.color):ca(ie.color),ge[Ee].classList.toggle("on",ie.name===j.name)});for(const ie of Q)ie.show();Ae.set(j.color),I&&(hf.forEach((ie,Ee)=>{I.pick[Ee].classList.toggle("on",j.print===ie),I.pick[Ee].setAttribute("aria-checked",String(j.print===ie))}),I.ink.set(j.ink),I.ink.well.hidden=j.print==="none")}}}function Ke(){if(W=i.films(),me=i.base(),ye!==null&&ye>=W.length&&(ye=null),W.length!==fe||ye!==Y){Oe.replaceChildren(),ze=[],Ze=null;for(let x=0;x<=W.length;x++){const v=x<W.length?x:-1;if(ze.push(st(v)),ye===v){const B=tt(v);Oe.append(B.box),Ze=B}}fe=W.length,Y=ye}je(),Ze?.update()}const Je=ht("div","knobs");O.feel.append(Je);const it=av.map(([x,v,B,q,J])=>{const ge=Le({label:v,min:B,max:q,text:J,get:()=>Vt[x],set:ue=>{Vt[x]=ue}});return Je.append(ge.cell),ge}),ut=ht("div","extras");O.feel.append(ut);const ft=[["debug","debug","Outline of what a press would grab, the finger marker and the tension lines"],["grid","grid","The millimetre grid on the sphere"],["films","films","The films. Off, they are hidden (not removed) and the bare sphere shows"]].map(([x,v,B])=>{const q=Rn("btn chip",()=>{i.show[x]=!i.show[x],J()},B);q.textContent=v,q.setAttribute("role","switch");const J=()=>{q.classList.toggle("on",i.show[x]),q.setAttribute("aria-checked",String(i.show[x]))};return ut.append(q),J}),C=Rn("btn chip",()=>{const x=i.settings(),v=q=>{C.textContent=q?"copied":"no clipboard",window.setTimeout(()=>{C.textContent="copy"},1200)},B=()=>{const q=document.createElement("textarea");q.value=x,q.style.cssText="position:fixed;left:0;top:0;opacity:0;",document.body.append(q),q.select();let J=!1;try{J=document.execCommand("copy")}catch{}q.remove(),v(J)};navigator.clipboard?.writeText?navigator.clipboard.writeText(x).then(()=>v(!0),B):B()},"Copy every setting as text");C.textContent="copy",ut.append(C);const _t=So(_,z,null,x=>{x||se()});N("layers");const pt=ht("div","help"),dt=Rn("help-btn",()=>ct.set(!ct.open),"Help");dt.removeAttribute("title");const we=document.createElementNS(Ku,"svg");we.setAttribute("viewBox","0 0 16 16"),we.setAttribute("aria-hidden","true"),we.innerHTML='<circle cx="8" cy="8" r="6"/><path d="M6.25 6.4a1.8 1.8 0 1 1 2.6 1.6c-.55.28-.85.65-.85 1.2v.3"/><circle class="dot" cx="8" cy="11.25" r="0.65"/>',dt.append(we);const bt=ht("div","help-pop"),nt=ht("div","dos");for(const[x,v,B]of mv){const q=ht("h5","",x);v&&q.append(ht("span","",v)),nt.append(q);for(const[J,ge]of B){const ue=ht("span","how");for(const Q of J.split(/(\[[^\]]+\])/))Q&&(Q.startsWith("[")?ue.append(ht("kbd","key",Q.slice(1,-1))):ue.append(Q));nt.append(ue,ht("span","what",ge))}}bt.append(nt),pt.append(dt,bt);const ct=So(dt,bt,pt);return e.append(H,z,t,pt),document.body.append(e),{setTool(x){u.open&&u.set(!1),d(x)},syncLayers:Ke,syncShow(){for(const x of ft)x()},syncSliders(){for(const x of it)x.show()},setHistory(x,v){b.disabled=x===0,L.disabled=v===0}}}const Sv=28,yv=40,Ev=28,bv=.97,Tv=.5,xf="codevember-2026-09-settings",wv={films:[{preset:"smoke",color:1711136,opacity:.8,roughness:.06,metalness:0,print:"label",ink:663616},{preset:"white",color:16185076,opacity:1,roughness:.2,metalness:0,print:"label",ink:663616}],base:{preset:"eye",color:15986664,opacity:1,roughness:.2,metalness:0,print:"label",ink:663616},tune:{elastic:.036,adhesion:0,shear:.3,load:0,lift:.13,ghost:1,height:.5,rough:0,tear:2.3,grip:4.74,edge:.16,straight:1},show:{debug:!1,grid:!1}},yo=2,Av=5,Mf=.16,Eo=1.2*Ur,Sf=24,yf=["combo","peel","knife","ruler","scratch"],Rv=.25,Cv=.75,bo=28,di=4,Lv=.05,Pv=.45,Ef=.2,Iv=.05,Dv=.012,Nv=.012,Qu=new ai(.38,-.55,.12);function Uv(){const i={films:Array.from({length:yo},()=>vl()),layers:Array.from({length:yo},(e,t)=>wi(0,t)),next:wi(1),lift:T_(),pieces:Array.from({length:yo},()=>new Map),rotation:new Tn().setFromEuler(Qu),tool:"combo",aim:{active:!1,x0:0,y0:0,x1:0,y1:0,valid:!1},hover:{layer:0,id:0},show:{debug:!0,grid:!0,films:!0},look:{x:0,y:0,on:!1},tension:{pos:new Float32Array(Ea*3),col:new Float32Array(Ea*3),count:0},finger:{active:!1,from:new G(0,0,1),at:new G(0,0,1),height:0}};for(const e of i.pieces)bl(e);return i}function Fv(i){const{world:e,camera:t,canvas:n}=i;n.style.touchAction="none";const r=new Tn,s=new Tn,a=new G,o=new G,c=new G,l=new G,f=new G,m=new G,h=new G,g=new G,u=new G,M=new G,p=new G,d=new Tn,y=new G,A=new G,b=new G,L=new G,T=new $t,_=[0,0,0];let E=0,z=0;const P=sv(e);let R=0;const O=new G;let Z=0,N=0;const H=new G;let k=!1,U=1,K=1,V=0,ne=0,se=200;function Le(){const w=n.getBoundingClientRect();V=w.left,ne=w.top,U=w.width||window.innerWidth,K=w.height||window.innerHeight;const F=t.position.length();se=K/2*($e/Math.sqrt(Math.max(1e-6,F*F-$e*$e)))/Math.tan(t.fov*Math.PI/360)}Le();function be(w,F){t.updateMatrixWorld(),y.setFromMatrixPosition(t.matrixWorld),A.set(w/U*2-1,-(F/K)*2+1,.5).unproject(t).sub(y).normalize()}function W(w){const F=y.dot(A),re=F*F-(y.lengthSq()-$e*$e);return re<0?!1:(w.copy(y).addScaledVector(A,-F-Math.sqrt(re)),!0)}function me(w){if(W(w))return;w.copy(y).addScaledVector(A,-y.dot(A));const F=w.length();w.divideScalar(F),c.copy(A).addScaledVector(w,-A.dot(w)).normalize();const re=Math.min(2.6,(F-$e)/$e*3);w.multiplyScalar(Math.cos(re)).addScaledVector(c,Math.sin(re)).multiplyScalar($e)}function ye(w){h.copy(w).project(t),E=(h.x+1)/2*U,z=(1-h.y)/2*K}function fe(){return e.pieces.some(w=>w.size>0)}function Y(){P.active?k=!0:_e()}const ce=new WeakMap;function _e(){k=!1,e.films.forEach((w,F)=>{w.coverVersion!==ce.get(w)&&(q_(e.pieces[F],G_(w,e.pieces[F].keys())),ce.set(w,w.coverVersion))}),e.hover.id=0}const oe=[],ve=[],Oe=()=>({covers:e.films.map(w=>w.cover.slice()),rotation:e.rotation.clone()});function ze(w,F){w.length===Av&&w.shift(),w.push(F)}function Ze(){ze(oe,Oe()),ve.length=0,Je()}function st(){oe.pop(),Je()}function je(){const w=oe.pop();w&&(ze(ve,Oe()),Ke(w))}function tt(){const w=ve.pop();w&&(ze(oe,Oe()),Ke(w))}function Ke(w){P.clear(),R=0,H.set(0,0,0),w.covers.length===e.films.length&&(e.films.forEach((F,re)=>L_(F,w.covers[re])),e.rotation.copy(w.rotation),_e(),Je())}let Je=()=>{};function it(w,F,re,Be){be(w,F),b.copy(A),be(re,Be),L.crossVectors(b,A);const Ve=L.length();if(Ve<1e-9)return 1/0;L.divideScalar(Ve);const We=L.dot(y);return T.set(L.x,L.y,L.z,We),Math.abs(We)}function ut(w,F,re,Be){return e.show.films&&Math.hypot(re-w,Be-F)>=Sv&&fe()&&it(w,F,re,Be)<$e*bv}function ft(w,F,re,Be){return ut(w,F,re,Be)?(r.copy(e.rotation).invert(),a.set(T.x,T.y,T.z).applyQuaternion(r),Ze(),dr(),jc(e.films,a.x,a.y,a.z,T.w/$e),C_()&&Y(),!0):!1}const C={on:!1,painted:!1,last:new G,claws:0,begun:!1,side:new G,ends:Array.from({length:di},()=>new G),travel:0,off:new Float32Array(di),veer:new Float32Array(di),late:new Float32Array(di),down:new Uint8Array(di),phase:new Float32Array(di),pace:new Float32Array(di)};function _t(){const w=C.claws,F=()=>Math.random()*2-1;C.travel=0;const re=F()*Ef*.6;for(let Be=0;Be<w;Be++){const Ve=Be-(w-1)/2;C.off[Be]=(Ve+F()*Pv)*Lv,C.veer[Be]=Math.tan(re*(Ve/Math.max(1,(w-1)/2))+F()*Ef*.5),C.late[Be]=Math.random()*Math.random()*Iv,C.down[Be]=0,C.phase[Be]=Math.random()*Math.PI*2,C.pace[Be]=14+Math.random()*18}C.late[Math.random()*w|0]=0}const pt=new G,dt=new G,we=new G;function bt(w,F){if(be(w,F),!e.show.films||!W(m)){C.on=!1;return}if(f.copy(m).applyQuaternion(r),C.on||(C.begun=!1),C.on&&C.claws===0){C.painted||(Ze(),dr());const re=C.last;yr(e.films,re.x,re.y,re.z,f.x,f.y,f.z),C.painted=!0}else if(C.on){const re=f.length();pt.subVectors(f,C.last);const Be=pt.length()/re;if(Be<Nv)return;dt.crossVectors(f,pt).normalize(),C.begun?C.side.lerp(dt,.35).normalize():(C.side.copy(dt),_t()),C.travel+=Be;const Ve=C.travel;for(let We=0;We<C.claws;We++){if(Ve<C.late[We])continue;const gt=C.off[We]+C.veer[We]*Ve+Math.sin(C.phase[We]+Ve*C.pace[We])*Dv;we.copy(f).addScaledVector(C.side,gt*re).setLength(re);const Ge=C.ends[We];C.down[We]&&(C.painted||(Ze(),dr()),yr(e.films,Ge.x,Ge.y,Ge.z,we.x,we.y,we.z),C.painted=!0),Ge.copy(we),C.down[We]=1}C.begun=!0}C.last.copy(f),C.on=!0}function nt(w){be(ue,Q),me(w),w.applyQuaternion(r).normalize()}function ct(w,F){const re=y.dot(A),Be=re*re-(y.lengthSq()-w*w);F.copy(y).addScaledVector(A,Be>=0?-re-Math.sqrt(Be):-re),F.applyQuaternion(r).normalize()}function x(){return P.start(j.layer,j.piece.id,j.e,j.n)?(Ze(),nt(p),O.copy(p),R=0,e.lift.strain=0,e.finger.from.copy(j.e).normalize(),e.finger.at.copy(e.finger.from),Z=N=0,!0):!1}function v(){P.peeled===0?(P.clear(),st()):R=Mf}function B(w){if(!P.active)return;if(R>0){R-=w,e.lift.fade=Math.max(0,R/Mf),P.step(!1),R<=0&&P.commit()&&_e();return}nt(f);const F=p.angleTo(f);ct($e+P.rise(F),f),d.setFromUnitVectors(p,f);const re=w>1e-4&&F>=Z-.002?O.angleTo(f)/w:0;if(N+=(re-N)*(1-Math.exp(-12*w)),O.copy(f),Z=F,P.carry(d,F),P.step(!0),e.finger.at.copy(e.finger.from).applyQuaternion(d),e.finger.height=P.height,P.peeled>0&&P.front===0){e.lift.strain=0,v(),q="torn";return}if(Vt.tear>0&&P.front>0){const Be=P.front*(.45+.55*P.tension)*(1+Tv*N),Ve=Vt.tear*40,We=Math.max(0,Math.min(1,(Be/Ve-.55)/.45));e.lift.strain+=(We-e.lift.strain)*(1-Math.exp(-14*w)),Be>Ve&&P.tension>.35&&(e.lift.strain=1,v(),q="torn")}else e.lift.strain=0}let q="none",J=-1,ge=!1,ue=0,Q=0,le=0,Ae="";const I=w=>{w!==Ae&&(Ae=w,n.style.cursor=w)},j={layer:0,piece:null,g:new G,e:new G,n:new G};function ie(w,F){F.copy(f).multiplyScalar(Math.cos(w)).addScaledVector(l,Math.sin(w))}function Ee(w,F,re){for(let Be=0;Be<e.films.length;Be++){const Ve=Ar(e.films[Be],w,F,re);if(Ve!==0)return Be*65536+Ve}return-1}function Te(w,F){if(j.piece=null,k||P.active||!e.show.films||(be(w,F),!W(m)))return!1;f.copy(m).applyQuaternion(r);const re=Ee(f.x,f.y,f.z);a.copy(y).sub(m).normalize();let Be=ge?Ev:yv;const Ve=Be/se/Math.max(.25,a.dot(m)/$e);u.set(-f.y,f.x,0),u.lengthSq()<1e-6&&u.set(0,-f.z,f.y),u.normalize(),M.crossVectors(f,u);let We=-1;for(let Ut=0;Ut<Sf;Ut++){const Tt=Ut/Sf*2*Math.PI;l.copy(u).multiplyScalar(Math.cos(Tt)).addScaledVector(M,Math.sin(Tt));for(let en=Eo;en<=Ve;en+=Eo){ie(en,g);const Xt=Ee(g.x,g.y,g.z);if(Xt===re)continue;let An=en-Eo,Kt=en;for(let Jt=0;Jt<6;Jt++){const Pt=(An+Kt)/2;ie(Pt,g),Ee(g.x,g.y,g.z)===re?An=Pt:Kt=Pt}const Qt=re>=0&&(Xt<0||Xt>>16>re>>16||Xt>>16===re>>16),Mt=Qt?re:Xt;if(Mt<0||(ie(Qt?An:Kt,g),o.copy(g).applyQuaternion(e.rotation),c.copy(y).sub(o).dot(o)<=0))break;ye(o);const kt=Math.hypot(E-w,z-F);kt<Be&&(Be=kt,We=Mt,j.e.copy(g),Qt?j.g.copy(f):(ie(Kt+.004,g),j.g.copy(Ee(g.x,g.y,g.z)===Mt?g:j.e)),j.n.copy(l).multiplyScalar(Qt?-1:1));break}}if(We<0)return!1;j.layer=We>>16;const gt=e.pieces[j.layer].get(We&65535);if(!gt)return!1;j.piece=gt;const Ge=j.e;return U_(e.films[j.layer],gt.id,Ge.x,Ge.y,Ge.z,_)&&j.n.set(_[0],_[1],_[2]),j.n.addScaledVector(Ge,-j.n.dot(Ge)).normalize(),!0}let pe=!1;function Qe(){const w=e.hover;if(w.id=0,!pe||J!==-1||q!=="none")return;const F=e.tool;if(F!=="peel"&&F!=="combo"){be(ue,Q),I(F!=="ruler"&&!W(m)?"move":"crosshair");return}Te(ue,Q)?(w.layer=j.layer,w.id=j.piece.id,I("grab")):F==="combo"?(be(ue,Q),I(W(m)?"crosshair":"move")):I("move")}const mt=new Map,Re={on:!1,ruler:!1};function rt(){const[w,F]=[...mt.values()];r.copy(e.rotation).invert(),be(w.x,w.y);const re=W(m);be(F.x,F.y),Re.on=!0,Re.ruler=!re&&!W(m),Re.ruler?e.aim.active=!0:(C.on=!1,C.painted=!1,C.claws=di),vt()}function vt(){const[w,F]=[...mt.values()];if(Re.ruler){const re=e.aim;re.x0=w.x,re.y0=w.y,re.x1=F.x,re.y1=F.y,re.valid=ut(re.x0,re.y0,re.x1,re.y1)}else bt((w.x+F.x)/2,(w.y+F.y)/2)}function He(w){if(Re.on=!1,Re.ruler){const F=e.aim;F.active=!1,F.valid=!1,w&&ft(F.x0,F.y0,F.x1,F.y1)}else C.painted&&Y(),C.on=!1}function Rt(){if(q==="aim")e.aim.active=!1,e.aim.valid=!1;else if(q==="draw"){if(C.on=!1,C.painted){const w=oe.pop();w&&Ke(w),Je()}}else q==="peel"&&(P.clear(),st());q="none"}function Zt(w){if(he(1),w.pointerType!=="mouse"&&(mt.set(w.pointerId,{x:w.clientX-V,y:w.clientY-ne}),mt.size===2&&J!==-1&&!Re.on)){w.preventDefault(),Rt();try{n.setPointerCapture(w.pointerId)}catch{}H.set(0,0,0),J=-2,rt(),I("");return}if(J!==-1||w.pointerType==="mouse"&&w.button!==0)return;w.preventDefault(),J=w.pointerId;try{n.setPointerCapture(J)}catch{}ge=w.pointerType!=="mouse",ue=w.clientX-V,Q=w.clientY-ne,le=w.timeStamp,ge&&(pe=!1),r.copy(e.rotation).invert(),be(ue,Q);const F=W(m);let re=e.tool,Be=!1,Ve=!1;if(re==="combo"&&(w.metaKey||w.ctrlKey?re="ruler":w.shiftKey?(re="scratch",Ve=!0):F?re=Te(ue,Q)?"peel":"knife":Be=!0),re==="ruler"&&!Be){H.set(0,0,0),q="aim";const We=e.aim;We.active=!0,We.x0=We.x1=ue,We.y0=We.y1=Q,We.valid=!1,I("crosshair");return}if((F||Ve)&&!Be){if(re==="knife"||re==="scratch"){H.set(0,0,0),q="draw",C.on=!1,C.painted=!1,C.claws=re==="scratch"?di:0,bt(ue,Q),I("crosshair");return}if(Te(ue,Q)&&x()){q="peel",I("grabbing");return}}q="orbit",H.set(0,0,0),I("grabbing")}function Dn(w){const F=mt.get(w.pointerId);if(F&&(F.x=w.clientX-V,F.y=w.clientY-ne),Re.on){F&&mt.size===2&&vt();return}if(w.pointerId!==J){J===-1&&w.pointerType==="mouse"&&(ue=w.clientX-V,Q=w.clientY-ne,pe=!0,ge=!1);return}const re=ue,Be=Q;if(ue=w.clientX-V,Q=w.clientY-ne,q==="aim"){const Ve=e.aim;Ve.x1=ue,Ve.y1=Q,Ve.valid=ut(Ve.x0,Ve.y0,Ve.x1,Ve.y1)}else if(q==="draw"){const Ve=w.getCoalescedEvents?w.getCoalescedEvents():[];if(Ve.length>0)for(const We of Ve)bt(We.clientX-V,We.clientY-ne);else bt(ue,Q)}else if(q==="orbit"){const Ve=ue-re,We=Q-Be,gt=Math.hypot(Ve,We),Ge=Math.max(1/240,(w.timeStamp-le)/1e3);if(le=w.timeStamp,gt>0){a.set(We/gt,Ve/gt,0);const Ut=gt/se;s.setFromAxisAngle(a,Ut),e.rotation.premultiply(s).normalize(),a.multiplyScalar(Ut/Ge),H.lerp(a,.5)}}}function Ni(w){if(mt.delete(w.pointerId),Re.on){try{n.releasePointerCapture(w.pointerId)}catch{}He(w.type==="pointerup"),J=-1;return}if(w.pointerId===J){if(ue=w.clientX-V,Q=w.clientY-ne,q==="aim"){const F=e.aim;F.active=!1,F.valid=!1,w.type==="pointerup"&&ft(F.x0,F.y0,ue,Q)}else q==="draw"?(C.painted&&Y(),C.on=!1):q==="orbit"?w.timeStamp-le>70&&H.set(0,0,0):q==="peel"&&v();q="none";try{n.releasePointerCapture(J)}catch{}J=-1,w.pointerType!=="mouse"&&I("")}}n.addEventListener("pointerdown",Zt),n.addEventListener("pointermove",Dn),n.addEventListener("pointerup",Ni),n.addEventListener("pointercancel",Ni),n.addEventListener("pointerleave",w=>{w.pointerType==="mouse"&&J===-1&&(pe=!1)});const un=Mv({tools:yf,finishes:[_r,sa],show:e.show,settings:()=>JSON.stringify(X(),null,2),maxFilms:mi,films:()=>e.layers.map(Xe),base:()=>Xe(e.next),onAddFilm:et,onRemoveFilm:Dt,onEdit:Ct,onPreset:yt,onTool:oi,onBack:je,onRedo:tt,onReset:De});Je=()=>un.setHistory(oe.length,ve.length),Je();function oi(w){e.tool=w,un.setTool(w)}oi(e.tool);const te={t:0,done:!1,begun:!1,laid:[0,0],paths:[[],[]]};{const w=new Tn().copy(e.rotation).invert(),F=()=>Math.random()*2-1;[[-.3+F()*.04,.33+F()*.04,.34+F()*.04,-.3+F()*.04],[.36+F()*.04,.3+F()*.04,-.28+F()*.04,-.27+F()*.04]].forEach(([Be,Ve,We,gt],Ge)=>{const Ut=-(gt-Ve),Tt=We-Be,en=Math.hypot(Ut,Tt),Xt=F()*.035,An=.006+Math.random()*.008,Kt=2+Math.random()*2,Qt=Math.random()*6.28;for(let Mt=0;Mt<bo;Mt++){const kt=Mt/(bo-1),Jt=Xt*Math.sin(kt*Math.PI)+An*Math.sin(Qt+kt*Kt*Math.PI),Pt=Be+(We-Be)*kt+Ut/en*Jt,Yt=Ve+(gt-Ve)*kt+Tt/en*Jt;te.paths[Ge].push(new G(Pt,Yt,Math.sqrt(Math.max(0,1-Pt*Pt-Yt*Yt))).applyQuaternion(w))}})}function he(w){if(te.done)return;const F=re=>re*re*(3-2*re);for(let re=0;re<2;re++){const Be=Math.min(1,Math.max(0,(w-re*.55)/.45)),Ve=Math.round(F(Be)*(bo-1)),We=te.paths[re];for(let gt=te.laid[re];gt<Ve;gt++)te.begun||(dr(),te.begun=!0),yr(e.films,We[gt].x,We[gt].y,We[gt].z,We[gt+1].x,We[gt+1].y,We[gt+1].z);te.laid[re]=Math.max(te.laid[re],Ve)}w>=1&&(te.done=!0,te.begun&&Y())}const de=()=>{te.done=!0};function ae(){de(),Ze(),P.clear(),R=0,k=!1,H.set(0,0,0),e.rotation.setFromEuler(Qu),r.copy(e.rotation).invert();for(const w of e.films)P_(w)}function De(){ae(),_e()}const Se=(w,F,re)=>re.set(w,F,Math.sqrt(Math.max(0,1-w*w-F*F))).applyQuaternion(r);function xe(w){dr();for(let F=1;F<w.length;F++)Se(w[F-1][0],w[F-1][1],a),Se(w[F][0],w[F][1],o),yr(e.films,a.x,a.y,a.z,o.x,o.y,o.z)}function Ne(w,F,re){c.set(w,F,0).normalize().applyQuaternion(r),dr(),jc(e.films,c.x,c.y,c.z,re)}function Ie(){ae(),Ne(.12,1,-.42),xe([[-.5,.12],[-.05,.12]]),xe([[.18,.5],[.18,.08],[.55,.08],[.55,.5]]),_e()}function Ce(){ae();const w=(F,re,Be)=>{Se(re,Be,a);const Ve=Ar(e.films[F],a.x,a.y,a.z);Ve&&I_(e.films[F],Ve)};Ne(.1,1,.34),Ne(.06,1,-.4),Ne(1,.45,-.3),Ne(1,-.55,.38),_e(),w(0,.05,0),w(0,.6,.05),_e(),xe([[.22,-.3],[.5,-.24],[.56,.02],[.36,.2],[.2,.02],[.22,-.3]]),_e(),e.films.length>1&&w(1,.38,-.08),xe([[-.2,.22],[-.12,-.05],[.02,-.3]]),_e()}function Xe(w){return{name:w.name,color:w.color.getHex(),opacity:w.opacity,roughness:w.roughness,metalness:w.metalness,print:w.print,ink:w.ink.getHex()}}function at(){P.clear(),R=0,k=!1,oe.length=0,ve.length=0,Je(),_e()}function et(){if(e.films.length>=mi)return;let w=0;for(;w<_r.length-1&&e.layers.some(re=>re.preset===w);)w++;const F=new Map;bl(F),e.films.unshift(vl()),e.layers.unshift(wi(0,w)),e.pieces.unshift(F),at(),un.syncLayers()}function Dt(w){e.films.length<=1||w<0||w>=e.films.length||(e.films.splice(w,1),e.layers.splice(w,1),e.pieces.splice(w,1),at(),un.syncLayers())}function Ct(w,F){w<0?e.next=po(e.next,F):w<e.layers.length&&(e.layers[w]=po(e.layers[w],F)),un.syncLayers()}function yt(w,F){w<0?e.next=wi(1,F):w<e.layers.length&&(e.layers[w]=wi(0,F),w===0&&(Vt.elastic=e.layers[0].elastic,Vt.adhesion=e.layers[0].adhesion,un.syncSliders())),un.syncLayers()}function Ft(w,F){if(w===0)for(let re=e.layers.length-1;re>=0;re--)yt(re,(F+re)%_r.length);else yt(-1,F)}const S=w=>({preset:w.name,...Xe(w)}),D=w=>{const F={},re=w??{};for(const Be of["color","opacity","roughness","metalness","ink"])typeof re[Be]=="number"&&Number.isFinite(re[Be])&&(F[Be]=re[Be]);return(re.print==="none"||re.print==="label"||re.print==="net")&&(F.print=re.print),F},ee=(w,F)=>{const re=w===0?_r:sa,Be=F?.preset;return po(wi(w,Math.max(0,re.findIndex(Ve=>Ve.name===Be))),D(F))};function X(){const{debug:w,grid:F}=e.show;return{films:e.layers.map(S),base:S(e.next),tune:Vt,show:{debug:w,grid:F}}}function $(){return JSON.stringify(X())}function Ue(){try{return JSON.parse(localStorage.getItem(xf)??"null")}catch{return null}}const Fe=Ue()??wv;if(Array.isArray(Fe?.films)&&Fe.films.length>=1){const w=Math.min(mi,Fe.films.length);for(;e.films.length<w;){const F=new Map;bl(F),e.films.push(vl()),e.layers.push(wi(0,0)),e.pieces.push(F)}for(;e.films.length>w;)e.films.pop(),e.layers.pop(),e.pieces.pop();for(let F=0;F<w;F++)e.layers[F]=ee(0,Fe.films[F]);_e()}else typeof Fe?.film=="string"&&Ft(0,Math.max(0,_r.findIndex(w=>w.name===Fe.film)));if(Fe?.base!==void 0&&(e.next=typeof Fe.base=="string"?wi(1,Math.max(0,sa.findIndex(w=>w.name===Fe.base))):ee(1,Fe.base)),Vt.elastic=e.layers[0].elastic,Vt.adhesion=e.layers[0].adhesion,Fe?.tune)for(const w of Object.keys(Vt)){const F=Fe.tune[w];typeof F=="number"&&Number.isFinite(F)&&(Vt[w]=F)}un.syncSliders(),un.syncLayers(),typeof Fe?.show?.debug=="boolean"&&(e.show.debug=Fe.show.debug),typeof Fe?.show?.grid=="boolean"&&(e.show.grid=Fe.show.grid),un.syncShow();let Pe=$(),ke=0;function Ye(){const w=$();if(w!==Pe){Pe=w;try{localStorage.setItem(xf,w)}catch{}}}window.addEventListener("pagehide",Ye),window.addEventListener("keydown",w=>{if(w.altKey)return;if(w.metaKey||w.ctrlKey){const re=w.key.toLowerCase();re==="z"?(w.preventDefault(),w.shiftKey?tt():je()):re==="y"&&(w.preventDefault(),tt());return}if(w.repeat)return;const F="12345".indexOf(w.key);F>=0&&oi(yf[F]),w.key==="r"&&De(),w.key==="b"&&Ie(),w.key==="n"&&Ce(),w.key==="z"&&je(),(w.key==="Z"||w.key==="y")&&tt()});const ot={tool:w=>oi(w),finish:(w,F)=>Ft(w,F),peel:P,tune:Vt,bench:Ie,bench2:Ce,back:je,redo:tt,cut:(w,F,re,Be)=>ft(w,F,re,Be),draw:w=>{r.copy(e.rotation).invert(),C.on=!1,C.painted=!1;for(const[F,re]of w)bt(F,re);return C.on=!1,C.painted&&Y(),C.painted}};return window.sim=ot,{update(w){if(!(w<=0)){if(q==="orbit")performance.now()-le>50&&H.multiplyScalar(Math.exp(-20*w));else if(H.lengthSq()>1e-6){const F=H.length();a.copy(H).divideScalar(F),s.setFromAxisAngle(a,F*w),e.rotation.premultiply(s).normalize(),H.multiplyScalar(Math.exp(-3.5*w))}else H.set(0,0,0);r.copy(e.rotation).invert(),te.done||he(((te.t+=w)-Rv)/Cv),e.lift.ghost=Vt.ghost,e.lift.band=Vt.height,e.look.x=ue,e.look.y=Q,e.look.on=pe||J!==-1,(ke-=w)<=0&&(ke=.5,Ye()),B(w),e.finger.active=P.active&&R<=0,k&&!P.active&&_e(),Qe()}},resize(){Le()}}}const Ov=150,Bv=80,zv=$e*.998,bf=$e*5e-4,kv=.22,Gv=1,Hv=.1,Vv=.3,Wv=2,Xv=.7,qv=.004,Tf=3.5,Yv=34,$v=.22*$e,Zv=.9,Kv=.3,Jv=2,Qv=.85,jv=.014;function ex(i){const t=document.createElement("canvas");t.width=t.height=1024;const n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,1024,1024),n.fillStyle="#fff",n.strokeStyle="#fff",n.textBaseline="alphabetic";const r="ui-monospace, Menlo, Consolas, monospace";n.font=`700 46px ${r}`,n.fillText("PROTECTIVE FILM",150,400),n.font=`500 26px ${r}`,n.fillText("REMOVE BEFORE USE  →",150,440),n.font=`500 17px ${r}`,["PE-LD 50µm","LOT 0911-26","TYPE M-09","QC PASS"].forEach((l,f)=>n.fillText(l,700,760+f*24)),n.fillRect(700,734,150,1.5);const a=800,o=230;n.lineWidth=2,n.beginPath(),n.moveTo(a-16,o),n.lineTo(a+16,o),n.moveTo(a,o-16),n.lineTo(a,o+16),n.stroke(),n.beginPath(),n.arc(a,o,9,0,Math.PI*2),n.stroke();const c=new Bl(t);return c.wrapS=c.wrapT=ua,c.anisotropy=i,c.generateMipmaps=!0,c.minFilter=zn,c}function wf(i,e){const t=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[1,0,0],[0,0,1]],[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[0,1,0],[1,0,0]]],n=i+1,r=6*n*n,s=new Float32Array(r*3),a=new Float32Array(r*3),o=new Uint32Array(6*i*i*6);let c=0,l=0;for(const[m,h,g]of t){const u=c;for(let M=0;M<=i;M++){const p=Math.tan((-1+2*M/i)*Math.PI*.25);for(let d=0;d<=i;d++){const y=Math.tan((-1+2*d/i)*Math.PI*.25),A=m[0]+h[0]*y+g[0]*p,b=m[1]+h[1]*y+g[1]*p,L=m[2]+h[2]*y+g[2]*p,T=1/Math.hypot(A,b,L);a[c*3]=A*T,a[c*3+1]=b*T,a[c*3+2]=L*T,s[c*3]=A*T*e,s[c*3+1]=b*T*e,s[c*3+2]=L*T*e,c++}}for(let M=0;M<i;M++)for(let p=0;p<i;p++){const d=u+M*n+p,y=d+1,A=d+n+1,b=d+n;p+M&1?(o[l++]=d,o[l++]=y,o[l++]=A,o[l++]=d,o[l++]=A,o[l++]=b):(o[l++]=d,o[l++]=y,o[l++]=b,o[l++]=y,o[l++]=A,o[l++]=b)}}const f=new Vn;return f.setAttribute("position",new fn(s,3)),f.setAttribute("normal",new fn(a,3)),f.setIndex(new fn(o,1)),f.computeBoundingSphere(),f}const Af=`
#define MR ${$e.toFixed(4)}

varying vec3 vLocal;

float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 perpTo(vec3 d) {
  vec3 a = abs(d.x) < 0.9 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
  return normalize(cross(d, a));
}
`,tx=`
#ifdef ROLE_LIFTED
varying vec3 vLiftN;
${Au}
uniform sampler2D uLift;
${Cu}
#endif
`,nx=`
  vLocal = position;
#ifdef ROLE_LIFTED
  transformed += liftAt(position).xyz;
  {
    // The sheet's own normal, from where its neighbours a cell away have been carried to.
    // Smooth over the mesh, so it gives one soft highlight and not a facet a triangle.
    vec3 r = normalize(position);
    vec3 t1 = perpTo(r), t2 = cross(r, t1);
    const float e = ${jv.toFixed(4)};
    vec3 pa = normalize(r + t1 * e) * MR, pb = normalize(r + t2 * e) * MR;
    vec3 n = cross(pa + liftAt(pa).xyz - transformed, pb + liftAt(pb).xyz - transformed);
    vLiftN = normalMatrix * (dot(n, n) > 1e-20 ? normalize(n) : r);
  }
#endif
`,ix=`
#ifdef ROLE_LIFTED
varying vec3 vLiftN;
#endif
${Au}
uniform sampler2D uLift;  // lift.ts atlas: displacement xyz, cells behind the peel front w
uniform int uLiftId;      // the piece being pulled, 0 none
uniform float uLiftGhost; // how solid lifted film is
uniform float uLiftBand;  // height over the sphere (radii) up to which lifted film is shown
uniform float uLiftFade;  // 1 while held, runs to 0 after letting go
uniform float uStrain;    // 0..1 tear strain approaching break along the taut crease
#define FAN_MAX ${Sa}
uniform vec3 uFanC;       // the fan (lift.fan): centre and axes of its flat map,
uniform vec3 uFanU;
uniform vec3 uFanV;
uniform vec2 uFan[FAN_MAX]; // its corners, counter-clockwise,
uniform int uFanN;        // and how many: 0 no fan, all lifted film is drawn
uniform vec4 uFinger;      // where the finger holds the film (world, from the sphere's centre), and how far round it the film thins out
uniform sampler2D uCover; // film.cover: bilinear, film where the filtered value is above 0.5
#define LIFT_DEPTH
${Cu}

uniform sampler2D uId;    // film.id: nearest, low and high byte of the piece id
uniform vec3 uTop;        // this film's opacity, translucent (0/1), scatter alpha
uniform sampler2D uPrint; // ink coverage of the print on the film, tiles
uniform float uPrintOn;   // 1 this film carries the label, 0 not
uniform float uNet;       // 1 this film is veined with a net instead
uniform vec3 uInk;        // the colour of what is printed
uniform sampler2D uAbove; // cover of the film over this one, for the hairline of its cuts
uniform float uAboveOn;   // 1 there is a film over this one, 0 it is the top one
uniform float uAboveLift; // 1 the film over this one is being pulled
uniform float uGrid;      // 1 draws the millimetre grid on the sphere, 0 leaves it plain
uniform vec4 uEnv;        // env diffuse, env specular gloss / matte, direct specular matte

#define LIFT_NORMAL_CELLS ${Wv.toFixed(1)}
#define LIFT_FOLD_NORMAL ${Xv.toFixed(3)}
#define LIFT_GLOSS ${Qv.toFixed(3)}
#define FAN_EDGE ${(Jv*Math.PI/(2*ds)).toFixed(6)}
// How far the sphere-local rest point p is outside the fan, in units of its flat map
// (negative inside). Lifted film is drawn FAN_EDGE beyond it.
float fanOut(vec3 p) {
  if (uFanN < 3) return -1.0;
  float w = dot(p, uFanC) / MR;
  if (w < 0.2) return 1.0;
  vec2 q = vec2(dot(p, uFanU), dot(p, uFanV)) / (MR * w);
  float d = -1e9;
  for (int i = 0; i < FAN_MAX; i++) {
    if (i >= uFanN) break;
    vec2 a = uFan[i], e = normalize(uFan[(i + 1) % uFanN] - a);
    d = max(d, e.y * (q.x - a.x) - e.x * (q.y - a.y));
  }
  return d - FAN_EDGE;
}
#define FINGER_CLEAR ${Kv.toFixed(3)}
#define NET_WAVE ${Yv.toFixed(1)}
#define FILM_BUMP ${qv.toFixed(5)}
#define FILM_BEVEL vec2(${(Tf/Nr).toFixed(7)}, ${(Tf/as).toFixed(7)})

// Antialiased coverage from a bilinear value c and its screen footprint cw: the 0.5 contour is
// a hard edge, smoothed over exactly one pixel at any zoom. Film cover and peel front alike.
float coverAA(float c, float cw) {
  return clamp((c - 0.5) / cw + 0.5, 0.0, 1.0);
}

int idAt(ivec2 t) {
  vec2 b = texelFetch(uId, t, 0).rg * 255.0 + 0.5;
  return int(b.x) + int(b.y) * 256;
}

// The piece at atlas uv (from filmUV). The nearest texel says so wherever it holds film. Right
// at an edge the bilinear cover can still be above 0.5 where the nearest texel is already
// groove (id 0): then the texel of the bilinear footprint that adds the most cover wins. The
// footprint is clamped to the face, like filmUV, so nothing bleeds in from the next face, and
// two pieces either side of a thin groove each keep the fragments closest to them.
int pieceAt(vec2 uv) {
  vec2 a = uv * vec2(3.0, 2.0) * FILM_N - 0.5;
  ivec2 lo = ivec2(floor(uv * vec2(3.0, 2.0)) * FILM_N);
  ivec2 hi = lo + int(FILM_N) - 1;
  vec2 b = floor(a);
  vec2 f = a - b;
  ivec2 t0 = clamp(ivec2(b), lo, hi);
  ivec2 t1 = clamp(ivec2(b) + 1, lo, hi);
  int id = idAt(ivec2(f.x < 0.5 ? t0.x : t1.x, f.y < 0.5 ? t0.y : t1.y));
  if (id != 0) return id;
  float best = 0.0;
  for (int k = 0; k < 4; k++) {
    bool hx = (k & 1) != 0, hy = k >= 2;
    ivec2 t = ivec2(hx ? t1.x : t0.x, hy ? t1.y : t0.y);
    float w = (hx ? f.x : 1.0 - f.x) * (hy ? f.y : 1.0 - f.y) * texelFetch(uCover, t, 0).r;
    if (w <= best) continue;
    int i = idAt(t);
    if (i != 0) { best = w; id = i; }
  }
  return id;
}

#ifdef ROLE_UNDER
// Is the film still lying on the sphere at p? All of it but the lifted part of the pulled piece.
float downAt(vec3 p, vec2 uv) {
  if (uLiftId == 0 || pieceAt(uv) != uLiftId) return 1.0;
  return 1.0 - step(0.5, liftAt(p).w);
}
#endif
#ifdef ROLE_ATTACHED
// The same for the film above. Its ids are not at hand here: all of the lift atlas counts,
// which only differs from the piece's own lifted part within a cell of a cut.
float downAt(vec3 p, vec2 uv) {
  return uAboveLift > 0.5 ? 1.0 - step(0.5, liftAt(p).w) : 1.0;
}
#endif

#if defined(ROLE_UNDER) || defined(ROLE_ATTACHED)
// A cut reads as a thin dark line on any colour: what is underneath darkens a little inside a
// narrow groove, where film is down on both sides within GROOVE_REACH texels. Wide bare areas,
// and what is along their edges, stay clean. No ledge or cast shadows anywhere: the film is a
// membrane, it has no thickness to shade. film is the cover of the film the groove is cut in,
// open how much of it is missing here.
#define GROOVE_REACH 4.0
#define GROOVE_DARK 0.6
float grooveShade(sampler2D film, vec3 P, float open) {
  if (open <= 0.0) return 1.0;
  vec3 n = P / MR;
  vec3 t1 = perpTo(n);
  vec3 t2 = cross(n, t1);
  float reach = GROOVE_REACH * (0.5 * PI / FILM_N) * MR;
  float g = 0.0;
  for (int k = 0; k < 2; k++) {
    vec3 t = (k == 0 ? t1 : t2) * reach;
    vec3 pa = normalize(P + t) * MR;
    vec3 pb = normalize(P - t) * MR;
    vec2 ua = filmUV(pa);
    vec2 ub = filmUV(pb);
    float both = smoothstep(0.5, 0.9, min(textureLod(film, ua, 0.0).r, textureLod(film, ub, 0.0).r));
    if (both <= g) continue;
    g = max(g, both * downAt(pa, ua) * downAt(pb, ub));
  }
  return 1.0 - GROOVE_DARK * g * open;
}
#endif

#ifdef ROLE_ATTACHED
uniform int uHoverId;     // the piece a press would grab, 0 none

// Debug outline of the hovered piece: 1 within HOVER_PX pixels of where its film ends.
#define HOVER_PX 2.5
float hoverLine(vec3 P, vec3 dx, vec3 dy, int id, float cw) {
  float inside = 1.0;
  for (int k = 0; k < 8; k++) {
    float a = float(k) * (PI / 4.0);
    vec2 uv = filmUV(P + (dx * cos(a) + dy * sin(a)) * HOVER_PX);
    inside = min(inside, pieceAt(uv) == id ? coverAA(textureLod(uCover, uv, 0.0).r, cw) : 0.0);
    if (inside <= 0.0) break;
  }
  return 1.0 - inside;
}
#endif

// Where a point of the film samples the print: one cube face each, equal angles, wound so
// the text reads the right way round on every face (and mirrored from behind, as print does).
// The net: a labyrinth of veins, as on a frog's inner eyelid. A sum of waves of one length
// in many directions is a field of worms once it is cut at a level; taken in space, on the
// sphere it has no seams. The directions lean one way so the worms run mostly along.
const vec3 NET_K[10] = vec3[10](
  vec3(0.94, 0.20, 0.27), vec3(0.88, -0.31, 0.36), vec3(0.97, 0.05, -0.24), vec3(0.83, 0.42, -0.36), vec3(0.90, -0.12, -0.42),
  vec3(0.79, 0.55, 0.27), vec3(0.86, -0.48, -0.17), vec3(0.99, 0.12, 0.05), vec3(0.76, 0.30, 0.57), vec3(0.81, -0.22, -0.54));
float netField(vec3 p) {
  float f = 0.0;
  for (int i = 0; i < 10; i++) f += sin(dot(p, NET_K[i]) * NET_WAVE + float(i) * 2.399);
  return f * 0.316; // about unit spread
}
/** Ink coverage of the net at p, antialiased. */
float netInk(vec3 p) {
  // a slow drift in the level makes the veins thicken and thin and break up
  float level = 0.15 + 0.35 * sin(dot(p, vec3(1.7, -2.3, 1.1))) * sin(dot(p, vec3(-1.3, 0.9, 2.1)) + 1.0);
  float f = netField(p) - level;
  return smoothstep(-0.5, 0.5, f / max(fwidth(f), 1e-4));
}
#define PRINT_REPEAT 1.0
vec2 printUV(vec3 p) {
  vec3 a = abs(p);
  vec2 q;
  if (a.x >= a.y && a.x >= a.z) q = vec2(-sign(p.x) * p.z, p.y) / a.x;
  else if (a.y >= a.z) q = vec2(p.x, -sign(p.y) * p.z) / a.y;
  else q = vec2(sign(p.z) * p.x, p.y) / a.z;
  return (atan(q) * (2.0 / PI) + 0.5) * PRINT_REPEAT;
}

// Millimetre paper on the root sphere, laid out per cube face so it never pinches: a fine
// line every mm, a stronger one every 10. Returns line strength 0..1.
#define GRID_MM 40.0
float gridLine(vec2 uv, float n, float px, float w) {
  vec2 g = uv * n;
  vec2 d = abs(fract(g - 0.5) - 0.5) / (w * n);
  // Fades out before the lines get denser than the pixels.
  float fade = 1.0 - smoothstep(0.25, 0.6, w * n);
  return (1.0 - smoothstep(px - 0.5, px + 0.5, min(d.x, d.y))) * fade;
}
float mmGrid(vec3 p) {
  vec3 a = abs(p);
  vec2 q = a.x >= a.y && a.x >= a.z ? p.yz / a.x : (a.y >= a.z ? p.xz / a.y : p.xy / a.z);
  // Equal angles, so the squares keep their size from the middle of a face to its edge.
  vec2 uv = atan(q) * (2.0 / PI);
  // Pixel size in uv from the position itself: uv jumps at the face seams, p does not.
  float w = length(fwidth(p)) * (2.0 / PI) * 0.7;
  return max(0.35 * gridLine(uv, GRID_MM, 0.5, w), gridLine(uv, GRID_MM / 10.0, 0.9, w));
}
`,rx=`
  vec3 P = normalize(vLocal) * MR;
  vec2 fuv = filmUV(P);
  float fc = texture(uCover, fuv).r;
#ifndef ROLE_UNDER
  float netVein = uNet > 0.5 ? netInk(P) : 0.0;
#endif
#ifdef ROLE_ATTACHED
  // The film's height near its edge: its cover, blurred over a few texels, as a ramp up from
  // the rim. Its slope across the screen is taken here, while every pixel is still alive.
  float bumpH = fc;
  for (int i = 0; i < 8; i++) {
    float a = float(i) * 0.7853981634;
    bumpH += textureLod(uCover, fuv + vec2(cos(a), sin(a)) * FILM_BEVEL, 0.0).r;
  }
  bumpH /= 9.0;
  bumpH = FILM_BUMP * smoothstep(0.3, 1.0, bumpH);
  vec2 bumpD = vec2(dFdx(bumpH), dFdy(bumpH));
  vec3 bumpSx = dFdx(-vViewPosition), bumpSy = dFdy(-vViewPosition);
#endif
  float fcw = max(fwidth(fc), 1e-4);
  float cov = coverAA(fc, fcw);
  float shade = 1.0;
#ifdef ROLE_UNDER
  shade = grooveShade(uCover, P, 1.0 - cov);
#else
  // Cells behind the peel front, and how much of this pixel is past it.
  float lw = uLiftId != 0 ? liftDepth(P) : 0.0;
  float up = coverAA(lw, max(fwidth(lw), 1e-4));
#endif
#ifdef ROLE_ATTACHED
  vec3 dPx = dFdx(vLocal);
  vec3 dPy = dFdy(vLocal);
  // How much of the film above is missing here, for the hairline of its cuts on this one.
  float ac = texture(uAbove, fuv).r;
  float aboveOpen = 1.0 - coverAA(ac, max(fwidth(ac), 1e-4));
#endif
#ifndef ROLE_UNDER
  if (cov <= 0.0) discard;
  int pid = pieceAt(fuv);
  float lifted = uLiftId != 0 && pid == uLiftId ? up : 0.0;
  #ifdef ROLE_ATTACHED
  cov *= 1.0 - lifted;
  #else
  // only the fan between the hand and the front being pulled: the rest of the loose film
  // trails from nothing and is left out, along the straight sides of the fan
  float fanD = fanOut(P);
  cov *= lifted * (1.0 - clamp(fanD / max(fwidth(fanD), 1e-7) + 0.5, 0.0, 1.0));
  #endif
  if (cov <= 0.0) discard;
#endif
#ifdef ROLE_ATTACHED
  if (uAboveOn > 0.5) shade = grooveShade(uAbove, P, aboveOpen);
#endif
`,sx=`
#ifdef ROLE_ATTACHED
  {
    // the rim bump: the normal leans down the ramp worked out before the discards
    vec3 r1 = cross(bumpSy, normal), r2 = cross(normal, bumpSx);
    float det = dot(bumpSx, r1);
    normal = normalize(abs(det) * normal - sign(det) * (bumpD.x * r1 + bumpD.y * r2));
    nonPerturbedNormal = normal;
  }
#endif
#ifdef ROLE_LIFTED
  {
    // the smooth sheet normal, turned to face the eye whichever side is up
    vec3 fn = normalize(vLiftN);
    if (dot(fn, vViewPosition) < 0.0) fn = -fn;
    normal = normalize(mix(normal, fn, LIFT_FOLD_NORMAL * smoothstep(0.5, LIFT_NORMAL_CELLS, lw)));
    nonPerturbedNormal = normal;
  }
#endif
`,ax=`
  float liftFade = 1.0;
#ifdef ROLE_UNDER
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.2, 0.27, 0.36), 0.7 * uGrid * mmGrid(P)); // grey-blue ink
#else
  // Both sides of lifted film look the same: gathered film turns its facets every which way,
  // and a different underside would show each one.
  // The print: ink on the film, so it travels with every piece and shows mirrored from behind.
  float ink = uNet > 0.5 ? netVein : texture2D(uPrint, printUV(P)).r * uPrintOn;
  #ifdef ROLE_LIFTED
  ink = 0.0; // peeled film is plain: its own flat, see-through look, no print
  #endif
  diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ink * 0.9);
  // Film alpha. Opaque layers: 1. Translucent ones only scatter a little of their own colour,
  // the tint of what is underneath happens in the under-sphere shader.
  float filmA = uTop.y > 0.5 ? uTop.z : 1.0;
  filmA = max(filmA, ink * 0.8);
  diffuseColor.a = cov * filmA;
  #ifdef ROLE_ATTACHED
  if (uHoverId != 0 && pid == uHoverId) {
    // Debug outline of the piece a press would grab. Magenta: pull it. Grey: too wide, cut it narrower.
    float k = hoverLine(P, dPx, dPy, pid, fcw);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.0, 0.55), k);
    diffuseColor.a = max(diffuseColor.a, k * cov);
  }
  #endif
  #ifdef ROLE_LIFTED
  // Peeled film is one plain transparent sheet: the same everywhere, however it is
  // stretched, gathered or folded.
  // And only the foot of it is shown: lifted film is cut off where it rises more than
  // uLiftBand above the sphere. A clean cut at one height, not a fade: only as soft as a pixel.
  float liftHigh = length(vViewPosition + viewMatrix[3].xyz) - MR;
  float liftBand = 1.0 - smoothstep(-0.5, 0.5, (liftHigh - uLiftBand * MR) / max(fwidth(liftHigh), 1e-6));
  // And it thins out to nothing right at the finger: the whole width of the sheet is
  // gathered into the grip there, a bunch a hand would be holding and hiding.
  if (uFinger.w > 0.0) {
    vec3 fromFinger = -vViewPosition - viewMatrix[3].xyz - mat3(viewMatrix) * uFinger.xyz;
    liftBand *= smoothstep(FINGER_CLEAR * uFinger.w, uFinger.w, length(fromFinger));
  }
  // Cut away, not just drawn clear: a clear pixel would still write depth and hide the
  // film lying on the sphere behind it.
  if (liftBand <= 0.0) discard;
  liftFade = uLiftFade * uLiftGhost * liftBand;
  // Subtle polyethylene stress-whitening along the taut peel crease as load approaches tear.
  float craze = uStrain * smoothstep(4.5, 0.5, lw);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.95, 0.96, 0.98), craze * 0.38);
  diffuseColor.a = min(1.0, diffuseColor.a * liftFade + craze * cov * 0.20 * uLiftFade * liftBand);
  #endif
#endif
`,ox=`
  {
    float rk = smoothstep(0.25, 0.85, material.roughness);
    reflectedLight.indirectDiffuse *= uEnv.x;
    reflectedLight.indirectSpecular *= mix(uEnv.y, uEnv.z, rk);
    reflectedLight.directSpecular *= mix(1.0, uEnv.w, rk);
  }
`,lx=`
#ifdef ROLE_UNDER
  outgoingLight *= shade;
#else
  {
    // Blend like glass: the diffuse part is mixed by the film opacity, reflections stay at
    // full strength and hide a little more of what is behind.
    vec3 dif = totalDiffuse * shade;
    // Peeled film is see-through but still glossy: its reflections do not thin out with it.
    #ifdef ROLE_LIFTED
    float specKeep = uLiftFade * liftBand * max(uLiftGhost, LIFT_GLOSS);
    #else
    float specKeep = liftFade;
    #endif
    vec3 spec = max(outgoingLight * shade - dif, 0.0) * cov * specKeep;
    float a = diffuseColor.a;
    float lum = clamp(dot(spec, vec3(0.2126, 0.7152, 0.0722)), 0.0, 1.0);
    float aOut = clamp(a + lum * (1.0 - a), 0.0, 1.0);
    outgoingLight = (dif * a + spec) / max(aOut, 1e-3);
    diffuseColor.a = aOut;
  }
#endif
`;function bi(i,e,t,n=!1){if(!i.includes(e))throw new Error(`membrane: shader chunk ${e} not found`);return i.replace(e,n?`${t}
${e}`:`${e}
${t}`)}function cx(i,e){const t=new fu({side:i==="lifted"?ni:Li,transparent:i!=="under",metalness:0});t.forceSinglePass=!0,t.depthWrite=!0;const n=`#define ROLE_${i.toUpperCase()}
`;return t.onBeforeCompile=r=>{Object.assign(r.uniforms,e);let s=r.vertexShader;s=bi(s,"void main() {",n+Af+tx,!0),s=bi(s,"#include <begin_vertex>",nx),r.vertexShader=s;let a=r.fragmentShader;a=bi(a,"void main() {",n+Af+ix,!0),a=bi(a,"#include <clipping_planes_fragment>",rx),a=bi(a,"#include <color_fragment>",ax),a=bi(a,"#include <normal_fragment_begin>",sx),a=bi(a,"#include <lights_fragment_end>",ox),a=bi(a,"#include <opaque_fragment>",lx,!0),r.fragmentShader=a},t.customProgramCacheKey=()=>`membrane-${i}`,t}function To(i,e){i.color.copy(e.color),i.roughness=e.roughness,i.metalness=e.metalness}function fx(i){const{world:e,scene:t,renderer:n,camera:r}=i,s=new Sr;t.add(s);const a=()=>Math.min(e.films.length,mi),o=k=>Math.min(Math.max(k|0,0),Math.max(a()-1,0)),c=Array.from({length:mi},(k,U)=>{const K=e.films[U],V=new wr(K?K.cover:null,Nr,as,wa,_n);V.magFilter=V.minFilter=ln;const ne=new wr(K?K.id:null,Nr,as,Ii,_n);for(const se of[V,ne])se.generateMipmaps=!1,se.flipY=!1,se.unpackAlignment=1;return{cover:V,id:ne,coverVersion:-1,idVersion:-1}}),l=()=>{for(let k=0;k<a();k++){const U=e.films[k],K=c[k];K.cover.image.data!==U.cover&&(K.cover.image.data=U.cover,K.coverVersion=-1),K.id.image.data!==U.id&&(K.id.image.data=U.id,K.idVersion=-1),U.coverVersion!==K.coverVersion&&(K.coverVersion=U.coverVersion,K.cover.needsUpdate=!0),U.idVersion!==K.idVersion&&(K.idVersion=U.idVersion,K.id.needsUpdate=!0)}},f=new wr(e.lift.data,Pa,Ru,Gn,kn);f.magFilter=f.minFilter=on,f.generateMipmaps=!1,f.flipY=!1;let m=-1;const h=()=>{const k=e.lift;f.image.data!==k.data&&(f.image.data=k.data,m=-1),k.version!==m&&(m=k.version,f.needsUpdate=!0)},g=new G,u={uLift:{value:f},uLiftFade:{value:1},uStrain:{value:0},uGrid:{value:1},uLiftGhost:{value:.45},uLiftBand:{value:.02},uFanC:{value:e.lift.fan.c},uFanU:{value:e.lift.fan.u},uFanV:{value:e.lift.fan.v},uFan:{value:e.lift.fan.pts},uFanN:{value:0},uFinger:{value:new $t(0,0,0,0)},uPrint:{value:ex(i.renderer.capabilities.getMaxAnisotropy())},uEnv:{value:new $t(kv,Gv,Hv,Vv)}},M=k=>({uCover:{value:c[k].cover},uId:{value:c[k].id},uLiftId:{value:0},uHoverId:{value:0},uTop:{value:new G(1,0,1)},uPrintOn:{value:0},uNet:{value:0},uInk:{value:new G(.03,.09,.2)},uAbove:{value:c[k>0?k-1:k].cover},uAboveOn:{value:k>0?1:0},uAboveLift:{value:0}}),p=Array.from({length:mi},(k,U)=>M(U)),d=M(0),y=M(0);d.uAboveOn.value=y.uAboveOn.value=0;const A=k=>($e-k*bf)/$e,b=wf(Ov,$e),L=(k,U,K,V)=>{const ne=new an(U,cx(k,K));return ne.renderOrder=V,s.add(ne),ne},T=L("under",wf(Bv,Math.min(zv,$e-mi*bf)),{...u,...y},0),_=p.map((k,U)=>{const K=L("attached",b,{...u,...k},mi-U);return K.scale.setScalar(A(U)),K}),E=L("lifted",b,{...u,...d},mi+1);E.frustumCulled=!1;const z=p.map(()=>null),P=p.map(()=>null);let R=null,O=null;const Z=()=>{for(let U=0;U<a();U++){const K=e.layers[U];if(K===z[U]&&e.films[U]===P[U])continue;z[U]=K,P[U]=e.films[U],To(_[U].material,K);const V=p[U],ne=K.opacity,se=ne<.999,Le=se?ne:1;V.uTop.value.set(ne,se?1:0,Le),V.uPrintOn.value=K.print==="label"?1:0,V.uNet.value=K.print==="net"?1:0,V.uInk.value.set(K.ink.r,K.ink.g,K.ink.b)}const k=e.layers[o(e.lift.layer)];if(k!==R&&(R=k,To(E.material,R)),e.next!==O){O=e.next,To(T.material,O);const U=T.material,K=O.jelly;U.transmission=K?.58:0,U.thickness=K?.45*$e:0,U.ior=K?K.ior:1.5,U.attenuationDistance=K?K.depth*$e:1/0,K?U.attenuationColor.copy(K.tint):U.attenuationColor.set(16777215),U.needsUpdate=!0}};let N=!1;function H(){E.visible=!0,n.compile(t,r),N=!0}return{update(){Z(),l(),h(),N||H(),s.quaternion.copy(e.rotation);const{lift:k,hover:U}=e,K=a(),V=o(k.layer),ne=o(U.layer);for(let be=0;be<K;be++){const W=p[be];W.uLiftId.value=V===be?k.id:0,W.uHoverId.value=e.show.debug&&ne===be?U.id:0,W.uAboveLift.value=be>0&&V===be-1&&k.id!==0?1:0}const se=p[V];d.uCover.value=se.uCover.value,d.uId.value=se.uId.value,d.uTop.value=se.uTop.value,d.uLiftId.value=k.id,E.scale.setScalar(A(V));const Le=p[Math.max(K-1,0)];if(y.uCover.value=Le.uCover.value,y.uId.value=Le.uId.value,y.uLiftId.value=Le.uLiftId.value,u.uLiftFade.value=k.fade,u.uStrain.value=k.strain,u.uGrid.value=e.show.grid?1:0,u.uLiftGhost.value=k.ghost,u.uLiftBand.value=k.band,u.uFanN.value=k.fan.n,e.finger.active){const be=e.finger;g.copy(be.at).normalize().multiplyScalar($e+be.height).applyQuaternion(e.rotation),u.uFinger.value.set(g.x,g.y,g.z,Math.min($v,Zv*be.height))}E.visible=k.id!==0&&e.show.films&&K>0,T.visible=!e.next.eye,_.forEach((be,W)=>{be.visible=e.show.films&&W<K})}}}const Js=.13,wo=10,Rf=48,Ao=7,ux=42;function hx(i){const{world:e,canvas:t}=i,n=document.createElement("canvas");n.style.cssText="position:fixed;left:0;top:0;width:100vw;height:100vh;pointer-events:none;mix-blend-mode:difference;",t.after(n);const r=n.getContext("2d");let s=window.innerWidth,a=window.innerHeight,o=1,c=!1;const l="#fff";function f(R,O,Z,N){r.beginPath(),r.moveTo(R,O),r.lineTo(Z,N),r.stroke()}function m(R,O,Z,N,H){if(!r)return;r.fillStyle=r.strokeStyle=l,r.globalAlpha=H?.9:.4,r.beginPath(),r.arc(R,O,2.5,0,Math.PI*2),r.fill();let k=Z-R,U=N-O;const K=Math.hypot(k,U);if(K>=1){k/=K,U/=K;const V=(s+a)*2;r.lineCap="butt",r.lineWidth=1.25,r.setLineDash([Ao,Ao]),r.lineDashOffset=V-performance.now()/1e3*ux%(Ao*2),r.globalAlpha=H?.85:.25,f(R-k*V,O-U*V,Z+k*V,N+U*V),r.setLineDash([])}r.globalAlpha=1}function h(){if(!r)return;const R=e.aim;!R.active&&!c||(r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,n.width,n.height),c=R.active,R.active&&(r.setTransform(o,0,0,o,0,0),m(R.x0,R.y0,R.x1,R.y1,R.valid)))}const g=wo*2+Rf,u=new Vn,M=new Float32Array(g*6);u.setAttribute("position",new fn(M,3));const p=new Sr;p.visible=!1;for(const R of[!1,!0]){const O=new pl({color:16722570,transparent:!0,opacity:R?.45:1,depthTest:!R,depthWrite:!1}),Z=new bc(u,O);Z.frustumCulled=!1,Z.renderOrder=R?9:10,p.add(Z)}i.scene.add(p);const d=new G,y=new G,A=new G,b=new G;let L=0;function T(R,O,Z,N,H,k){for(let U=0;U<H;U++){const K=Z+(N-Z)*U/H,V=Z+(N-Z)*(U+1)/H;A.copy(R).multiplyScalar(Math.cos(K)).addScaledVector(O,Math.sin(K)).multiplyScalar(k),b.copy(R).multiplyScalar(Math.cos(V)).addScaledVector(O,Math.sin(V)).multiplyScalar(k),M.set([A.x,A.y,A.z,b.x,b.y,b.z],L),L+=6}}function _(){const R=e.finger;if(p.visible=R.active&&e.show.debug,!R.active)return;p.quaternion.copy(e.rotation),d.copy(R.from).addScaledVector(R.at,-R.from.dot(R.at)),d.lengthSq()<1e-8&&d.set(-R.at.y,R.at.x,0).addScaledVector(R.at,0),d.lengthSq()<1e-8&&d.set(0,-R.at.z,R.at.y),d.normalize(),y.crossVectors(R.at,d);const O=$e+R.height+.008;L=0,T(R.at,d,-Js,Js,wo,O),T(R.at,y,-Js,Js,wo,O),T(R.at,d,0,R.at.angleTo(R.from),Rf,$e+.006),u.attributes.position.needsUpdate=!0}const E=new Vn;E.setAttribute("position",new fn(e.tension.pos,3)),E.setAttribute("color",new fn(e.tension.col,3));const z=new bc(E,new pl({vertexColors:!0,transparent:!0,depthWrite:!1}));z.frustumCulled=!1,z.renderOrder=8,i.scene.add(z);function P(){const R=e.tension;z.visible=e.show.debug&&e.finger.active&&R.count>0,z.visible&&(z.quaternion.copy(e.rotation),E.setDrawRange(0,R.count),E.attributes.position.needsUpdate=!0,E.attributes.color.needsUpdate=!0)}return{update(){h(),_(),P()},resize(R,O){s=R,a=O,o=Math.min(window.devicePixelRatio||1,2),n.width=Math.round(R*o),n.height=Math.round(O*o),c=!0}}}const Gi=.28;function Wl(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ba(i){const e=Wl(i),t=new Uint8Array(512),n=new Float32Array(256);for(let o=0;o<256;o++)t[o]=o,n[o]=e();for(let o=255;o>0;o--){const c=Math.floor(e()*(o+1)),l=t[o];t[o]=t[c],t[c]=l}for(let o=0;o<256;o++)t[o+256]=t[o];const r=(o,c)=>n[t[(o&255)+t[c&255]]];function s(o,c){const l=Math.floor(o),f=Math.floor(c),m=o-l,h=c-f,g=m*m*(3-2*m),u=h*h*(3-2*h),M=r(l,f),p=r(l+1,f),d=r(l,f+1),y=r(l+1,f+1);return M+(p-M)*g+(d+(y-d)*g-(M+(p-M)*g))*u}function a(o,c,l=4){let f=0,m=.5,h=1,g=0;for(let u=0;u<l;u++)f+=m*s(o*h,c*h),g+=m,m*=.5,h*=2.03;return f/g}return{noise:s,fbm:a}}function In(i,e,t){return i<e?e:i>t?t:i}function yn(i,e,t){const n=In((t-i)/(e-i),0,1);return n*n*(3-2*n)}function At(i,e,t){return i+(e-i)*t}function gn(i){const e=document.createElement("canvas");e.width=i,e.height=i;const t=e.getContext("2d");return[e,t]}function ju(i,e){const t=i.width,r=i.getContext("2d").getImageData(0,0,t,t).data,s=new Float32Array(t*t);for(let l=0;l<t*t;l++)s[l]=r[l*4]/255;const a=new Uint8Array(t*t*4),o=(l,f)=>s[In(f,0,t-1)*t+In(l,0,t-1)];for(let l=0;l<t;l++)for(let f=0;f<t;f++){const m=o(f-1,l-1),h=o(f,l-1),g=o(f+1,l-1),u=o(f-1,l),M=o(f,l),p=o(f+1,l),d=o(f-1,l+1),y=o(f,l+1),A=o(f+1,l+1),b=(g+2*p+A-(m+2*u+d))*e,L=(m+2*h+g-(d+2*y+A))*e,T=1/Math.hypot(b,L,1),_=-b*T,E=-L*T,z=(o(f-3,l)+o(f+3,l)+o(f,l-3)+o(f,l+3))*.25,P=(o(f-8,l)+o(f+8,l)+o(f,l-8)+o(f,l+8))*.25,R=In(.72+(M-z)*1.15+(M-P)*.65+(M-.5)*.38,.28,1),O=(l*t+f)*4;a[O]=Math.round((_*.5+.5)*255),a[O+1]=Math.round((E*.5+.5)*255),a[O+2]=Math.round(R*255),a[O+3]=Math.round(M*255)}const c=new wr(a,t,t,Gn,_n);return c.flipY=!0,c.generateMipmaps=!0,c.minFilter=zn,c.magFilter=ln,c.wrapS=bn,c.wrapT=bn,c.needsUpdate=!0,c}function Ta(i,e,t,n,r){const s=e.length;if(s<2)return;const a=new Array(s),o=new Array(s);for(let c=0;c<s;c++){const l=c/(s-1),f=.5*At(t,n,Math.pow(l,.78))*(1-yn(.84,1,l)*.65),m=e[Math.max(0,c-1)],h=e[Math.min(s-1,c+1)],g=h[0]-m[0],u=h[1]-m[1],M=Math.hypot(g,u)||1,p=-u/M,d=g/M;a[c]=[e[c][0]+p*f,e[c][1]+d*f],o[c]=[e[c][0]-p*f,e[c][1]-d*f]}i.beginPath(),i.moveTo(a[0][0],a[0][1]);for(let c=1;c<s;c++)i.lineTo(a[c][0],a[c][1]);for(let c=s-1;c>=0;c--)i.lineTo(o[c][0],o[c][1]);i.closePath(),i.fillStyle=r,i.fill()}function dx(i){const s=Wl(9021047),a=ba(13379),o=ba(79199),[c,l]=gn(1024),[f,m]=gn(1024),h=[.024,.017,.014,.011,.008,.006,.005,.004],g=h.map(()=>s()*Math.PI*2),u=fe=>{let Y=.45;for(let ce=0;ce<h.length;ce++)Y+=h[ce]*Math.sin((ce+2)*fe+g[ce]);return Y},M=512,[p,d]=gn(M),[y,A]=gn(M),b=d.createImageData(M,M),L=A.createImageData(M,M),T=b.data,_=L.data,E=M*.485;for(let fe=0;fe<M;fe++){const Y=(fe-M*.5)/E;for(let ce=0;ce<M;ce++){const _e=(ce-M*.5)/E,oe=Math.hypot(_e,Y),ve=Math.atan2(Y,_e),Oe=u(ve),ze=a.fbm(_e*2.3+4.1,Y*2.3+1.7,4),Ze=o.fbm(_e*4.2-2.3,Y*4.2+5.2,4),st=a.fbm(_e*10.5+1.2,Y*10.5-3.4,3),je=Math.cos(ve),tt=Math.sin(ve),Ke=o.fbm(je*1.5+3,tt*1.5+2,3),Je=a.fbm(je*6.5+oe*1.4,tt*6.5+oe*1.4,3),it=yn(.3,.72,ze*.62+Ke*.38);let ut=At(76,74,it),ft=At(118,116,it),C=At(142,98,it);const _t=.76+.42*Ze+.16*(Je-.5)+.1*(st-.5);ut*=_t,ft*=_t,C*=_t;const pt=Oe+.08+.07*(Ke-.5)+.05*(Je-.5),dt=Math.exp(-Math.pow((oe-pt)/.15,2))*(.48+.52*yn(.22,.78,ze));ut=At(ut,98*(.82+.34*Ze),dt*.58),ft=At(ft,112*(.82+.34*Ze),dt*.58),C=At(C,72*(.82+.34*Ze),dt*.58);const we=.032*Math.sin(ve-.9)+.018*Math.cos(ve*2+.4),bt=Oe+we+.045*(Ke-.4)+.075*(Je-.5),nt=1-yn(bt-.085,bt+.11,oe),ct=1-yn(Gi-.02,Oe-.02,oe),x=At(116,68,ct)*(.82+.36*st),v=At(74,38,ct)*(.82+.36*st),B=At(35,18,ct)*(.82+.36*st);ut=At(ut,x,nt*.86),ft=At(ft,v,nt*.86),C=At(C,B,nt*.86);const q=.78+.07*(st-.5)+.04*(Je-.5),J=yn(q,.96,oe);ut=At(ut,26,J*.84),ft=At(ft,42,J*.82),C=At(C,56,J*.78);const ge=(fe*M+ce)*4;T[ge]=In(Math.round(ut),0,255),T[ge+1]=In(Math.round(ft),0,255),T[ge+2]=In(Math.round(C),0,255),T[ge+3]=255;const ue=Math.exp(-Math.pow((oe-Oe)/.07,2))*38,Q=(1-yn(.74,1,oe))*20,le=yn(Gi-.04,Oe,oe)*16,Ae=In(Math.round(112+ue+Q+le+(Je-.5)*26),0,255);_[ge]=_[ge+1]=_[ge+2]=Ae,_[ge+3]=255}}d.putImageData(b,0,0),A.putImageData(L,0,0),l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(p,0,0,1024,1024),m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.drawImage(y,0,0,1024,1024);const z=(fe,Y)=>512+Math.cos(Y)*fe*496.64,P=(fe,Y)=>512+Math.sin(Y)*fe*496.64,[R,O]=gn(1024),[Z,N]=gn(1024),H=(fe,Y,ce,_e,oe,ve)=>{const ze=[],Ze=(s()-.5)*.25,st=s()*Math.PI*2,je=s()*Math.PI*2;for(let Ke=0;Ke<16;Ke++){const Je=Ke/16*Math.PI*2,it=1+.22*Math.sin(Je*3+st)+.14*Math.cos(Je*5+je),ut=Math.cos(Je)*ce*.5*it,ft=Math.sin(Je)*_e*(1+.35*Math.cos(Je))*it+ut*Ze;ze.push([z(fe+ut,Y+ft),P(fe+ut,Y+ft)])}const tt=(Ke,Je)=>{Ke.beginPath(),Ke.moveTo(ze[0][0],ze[0][1]);for(let it=1;it<16;it++)Ke.lineTo(ze[it][0],ze[it][1]);Ke.closePath(),Ke.fillStyle=Je,Ke.fill()};tt(O,oe),tt(N,`rgba(14, 14, 14, ${ve})`)};for(let fe=0;fe<46;fe++){const Y=fe/46*Math.PI*2+(s()-.5)*.16,_e=u(Y)+.04+s()*.22,oe=.055+s()*.14,ve=(.012+s()*.028)/Math.max(.38,_e),Oe=s()<.5?`rgba(18, 34, 44, ${(.34+s()*.28).toFixed(3)})`:`rgba(20, 38, 38, ${(.32+s()*.26).toFixed(3)})`;H(_e,Y,oe,ve,Oe,.45+s()*.3)}for(let fe=0;fe<24;fe++){const Y=s()*Math.PI*2,ce=u(Y),_e=At(Gi+.03,ce-.02,s());H(_e,Y,.035+s()*.055,.022+s()*.032,"rgba(30, 17, 9, 0.42)",.4)}l.save(),l.filter="blur(4.2px)",l.drawImage(R,0,0),l.restore(),m.save(),m.filter="blur(4.8px)",m.drawImage(Z,0,0),m.restore();const[k,U]=gn(1024),[K,V]=gn(1024),ne=[.63,.7,.77,.83];for(let fe=0;fe<ne.length;fe++){const Y=ne[fe],ce=3+Math.floor(s()*3);for(let _e=0;_e<ce;_e++){const oe=s()*Math.PI*2,ve=.28+s()*.78,Oe=24,ze=s()*Math.PI*2,Ze=s()*Math.PI*2,st=[];for(let tt=0;tt<=Oe;tt++){const Ke=tt/Oe,Je=oe+Ke*ve,it=Y+Math.sin(Je*5+ze)*.014+Math.cos(Je*11+Ze)*.006;st.push([z(it,Je),P(it,Je)])}const je=.16+s()*.14;Ta(U,st,4.5+s()*2.5,3,`rgba(22, 36, 44, ${je.toFixed(3)})`),Ta(V,st,5.5+s()*2.5,3.5,`rgba(34, 34, 34, ${(je*1.4).toFixed(3)})`)}}l.save(),l.filter="blur(3.2px)",l.drawImage(k,0,0),l.restore(),m.save(),m.filter="blur(3.6px)",m.drawImage(K,0,0),m.restore();const se=(fe,Y,ce,_e,oe,ve,Oe,ze,Ze,st,je=ze*1.1)=>{const Ke=[];for(let it=0;it<=18;it++){const ut=it/18,ft=At(Y,ce,ut),C=Math.sin(ut*Math.PI),_t=fe+Oe*ut+Math.sin(ut*oe+ve)*_e*C;Ke.push([z(ft,_t),P(ft,_t)])}const Je=(it,ut,ft)=>{it.beginPath(),it.moveTo(Ke[0][0],Ke[0][1]);for(let C=1;C<Ke.length-1;C++){const _t=(Ke[C][0]+Ke[C+1][0])*.5,pt=(Ke[C][1]+Ke[C+1][1])*.5;it.quadraticCurveTo(Ke[C][0],Ke[C][1],_t,pt)}it.lineTo(Ke[Ke.length-1][0],Ke[Ke.length-1][1]),it.strokeStyle=ut,it.lineWidth=ft,it.lineCap="round",it.stroke()};Je(l,Ze,ze),Je(m,st,je)};for(let fe=0;fe<520;fe++){const Y=fe/520*Math.PI*2+(s()-.5)*.03,ce=.24+s()*.25,_e=.68+s()*.27,oe=.14+s()*.24,ve=ce<.38?`rgba(42, 26, 14, ${oe.toFixed(3)})`:`rgba(22, 40, 52, ${oe.toFixed(3)})`;se(Y,ce,_e,.008+s()*.024,3.5+s()*5.5,s()*Math.PI*2,(s()-.5)*.09,1+s()*1.9,ve,`rgba(28, 28, 28, ${(oe*.9).toFixed(3)})`)}for(let fe=0;fe<820;fe++){const Y=fe/820*Math.PI*2+(s()-.5)*.026,ce=u(Y),oe=s()<.72?ce-.05+s()*.07:.24+s()*.36,ve=.72+s()*.24,Oe=Math.cos(Y),ze=Math.sin(Y),Ze=a.fbm(Oe*1.6+3.2,ze*1.6+1.4,3),st=s();let je;st<.46+(.5-Ze)*.35?je=[126+s()*42,168+s()*34,190+s()*28]:st<.84?je=[112+s()*36,156+s()*32,134+s()*26]:je=[144+s()*28,140+s()*24,84+s()*22];const tt=.12+s()*.22;se(Y,oe,ve,.011+s()*.028,3+s()*5.8,s()*Math.PI*2,(s()-.5)*.13,1.3+s()*2.6,`rgba(${je[0]|0}, ${je[1]|0}, ${je[2]|0}, ${tt.toFixed(3)})`,`rgba(220, 220, 220, ${(.12+s()*.2).toFixed(3)})`)}for(let fe=0;fe<340;fe++){const Y=s()*Math.PI*2,_e=u(Y)-.03+s()*.15,oe=Math.min(.92,_e+.16+s()*.36),ve=s(),Oe=ve<.54?`rgba(190, 216, 226, ${(.13+s()*.22).toFixed(3)})`:ve<.84?`rgba(170, 200, 182, ${(.13+s()*.2).toFixed(3)})`:`rgba(184, 146, 86, ${(.16+s()*.22).toFixed(3)})`;se(Y,_e,oe,.012+s()*.03,3.8+s()*5.8,s()*Math.PI*2,(s()-.5)*.14,.8+s()*1.4,Oe,`rgba(255, 255, 255, ${(.2+s()*.26).toFixed(3)})`,1.5)}for(let fe=0;fe<280;fe++){const Y=fe/280*Math.PI*2+(s()-.5)*.035,ce=u(Y),_e=ce+(s()<.22?.12+s()*.22:.01+s()*.11),oe=At(Gi-.04,ce-.04,s()*.65),ve=s(),Oe=ve<.42?`rgba(132, 84, 38, ${(.2+s()*.28).toFixed(3)})`:ve<.74?`rgba(164, 122, 58, ${(.18+s()*.26).toFixed(3)})`:`rgba(108, 122, 68, ${(.2+s()*.24).toFixed(3)})`;se(Y,oe,_e,.008+s()*.018,4+s()*5,s()*Math.PI*2,(s()-.5)*.07,.9+s()*1.8,Oe,`rgba(238, 238, 238, ${(.16+s()*.2).toFixed(3)})`)}for(let fe=0;fe<160;fe++){const Y=fe/160*Math.PI*2+(s()-.5)*.06,ce=(.04+s()*.085)*(s()<.5?1:-1),_e=(s()-.5)*.036,oe=10,ve=[];for(let Ze=0;Ze<=oe;Ze++){const st=Ze/oe,je=Y+ce*st,tt=Math.sin(st*Math.PI)*(.014+s()*.012),Ke=u(je)+_e+tt;ve.push([z(Ke,je),P(Ke,je)])}const Oe=s(),ze=Oe<.45?`rgba(172, 134, 72, ${(.18+s()*.24).toFixed(3)})`:Oe<.78?`rgba(136, 124, 68, ${(.16+s()*.22).toFixed(3)})`:`rgba(96, 62, 28, ${(.18+s()*.22).toFixed(3)})`;l.beginPath(),l.moveTo(ve[0][0],ve[0][1]);for(let Ze=1;Ze<ve.length;Ze++)l.lineTo(ve[Ze][0],ve[Ze][1]);l.strokeStyle=ze,l.lineWidth=1.2+s()*1.8,l.lineCap="round",l.stroke(),m.beginPath(),m.moveTo(ve[0][0],ve[0][1]);for(let Ze=1;Ze<ve.length;Ze++)m.lineTo(ve[Ze][0],ve[Ze][1]);m.strokeStyle=`rgba(255, 255, 255, ${(.22+s()*.24).toFixed(3)})`,m.lineWidth=2+s()*1.8,m.lineCap="round",m.stroke()}for(let fe=0;fe<280;fe++){const Y=fe/280*Math.PI*2+(s()-.5)*.02,ce=u(Y),_e=s()<.52,oe=_e?`rgba(44, 24, 11, ${(.24+s()*.28).toFixed(3)})`:`rgba(156, 108, 52, ${(.18+s()*.24).toFixed(3)})`,ve=_e?"rgba(55, 55, 55, 0.24)":"rgba(215, 215, 215, 0.22)";se(Y,Gi-.06,ce+.015,.005,5,s()*6,(s()-.5)*.03,.85+s()*1.1,oe,ve)}for(let fe=0;fe<5;fe++){const Y=s()*Math.PI*2,ce=.5+s()*.28,_e=z(ce,Y),oe=P(ce,Y),ve=4+s()*7,Oe=3+s()*5;l.save(),l.translate(_e,oe),l.rotate(Y+(s()-.5)*.6);const ze=l.createRadialGradient(0,0,0,0,0,Math.max(ve,Oe));ze.addColorStop(0,`rgba(62, 34, 15, ${(.48+s()*.24).toFixed(2)})`),ze.addColorStop(.55,`rgba(88, 52, 24, ${(.22+s()*.16).toFixed(2)})`),ze.addColorStop(1,"rgba(88, 52, 24, 0)"),l.fillStyle=ze,l.beginPath(),l.ellipse(0,0,ve,Oe,0,0,Math.PI*2),l.fill(),l.restore()}for(let fe=0;fe<18;fe++){const Y=fe/18*Math.PI*2+(s()-.5)*.25,ce=.77+s()*.08,_e=z(ce,Y),oe=P(ce,Y),ve=3+s()*4.5,Oe=l.createRadialGradient(_e,oe,0,_e,oe,ve);Oe.addColorStop(0,`rgba(210, 224, 228, ${(.16+s()*.14).toFixed(2)})`),Oe.addColorStop(1,"rgba(210, 224, 228, 0)"),l.fillStyle=Oe,l.beginPath(),l.arc(_e,oe,ve,0,Math.PI*2),l.fill()}const Le=l.createRadialGradient(512,512,496.64*.74,512,512,496.64*1.02);Le.addColorStop(0,"rgba(18, 32, 42, 0)"),Le.addColorStop(.52,"rgba(18, 32, 42, 0.22)"),Le.addColorStop(.82,"rgba(15, 26, 36, 0.62)"),Le.addColorStop(1,"rgba(14, 22, 30, 0.84)"),l.fillStyle=Le,l.fillRect(0,0,1024,1024);const be=140;l.save(),l.beginPath();for(let fe=0;fe<=be;fe++){const Y=fe/be*Math.PI*2,ce=Gi+.01+.004*Math.sin(Y*44)+.0025*Math.cos(Y*71+1.1),_e=z(ce,Y),oe=P(ce,Y);fe===0?l.moveTo(_e,oe):l.lineTo(_e,oe)}l.closePath(),l.strokeStyle="rgba(18, 10, 5, 0.80)",l.lineWidth=5,l.stroke(),l.restore();const W=m.createRadialGradient(512,512,496.64*.82,512,512,496.64*1.02);W.addColorStop(0,"rgba(128, 128, 128, 0)"),W.addColorStop(1,"rgba(128, 128, 128, 0.88)"),m.fillStyle=W,m.fillRect(0,0,1024,1024);const me=new Bl(c);me.colorSpace=Sn,me.wrapS=bn,me.wrapT=bn,me.minFilter=zn,me.magFilter=ln,me.anisotropy=i,me.needsUpdate=!0;const ye=ju(f,2.45);return ye.anisotropy=i,{irisColor:me,irisData:ye}}function px(i,e){const o=Wl(4182029),c=ba(55127),l=ba(88321),[f,m]=gn(1536),[h,g]=gn(1024);g.fillStyle="rgb(128, 128, 128)",g.fillRect(0,0,1024,1024);const u=512,[M,p]=gn(u),[d,y]=gn(u),A=p.createImageData(u,u),b=y.createImageData(u,u),L=A.data,T=b.data,_=u*.49;for(let be=0;be<u;be++){const W=-(be-u*.5)/_;for(let me=0;me<u;me++){const ye=(me-u*.5)/_,fe=Math.min(1,Math.hypot(ye,W)),Y=2*Math.asin(fe),ce=Math.atan2(W,ye),_e=c.fbm(ye*5+2.1,W*5-1.3,4),oe=l.fbm(ye*14-4.7,W*14+3.2,3),ve=c.noise(ye*46,W*46),Oe=Math.pow(Math.abs(Math.cos(ce)),1.5),ze=yn(i-.03,i+.16,Y),Ze=yn(i+.16,1.12,Y),st=yn(1.1,2.35,Y);let je=At(198,232,ze),tt=At(203,226,ze),Ke=At(208,218,ze);const Je=Ze*(.55+.45*Oe)*(.76+.48*_e);je=At(je,228,Je*.68),tt=At(tt,192,Je*.68),Ke=At(Ke,182,Je*.68);const it=Oe*Math.exp(-Math.pow((Y-(i+.25))/.17,2))*yn(.4,.78,_e);je=At(je,230,it*.2),tt=At(tt,216,it*.2),Ke=At(Ke,188,it*.2);const ut=Math.pow(Math.max(Math.abs(Math.cos(ce)),Math.abs(Math.sin(ce))),8)*yn(1.05,1.5,Y)*(1-yn(2,2.6,Y));je=At(je,194,st*.85),tt=At(tt,122,st*.85),Ke=At(Ke,114,st*.85),je=At(je,172,ut*.28),tt=At(tt,94,ut*.28),Ke=At(Ke,90,ut*.28);const ft=yn(2.78,3.04,Y);je=At(je,212,ft*.45),tt=At(tt,178,ft*.45),Ke=At(Ke,164,ft*.45);const C=.962+.065*(oe-.5)+.022*(ve-.5);je*=C,tt*=C,Ke*=C;const _t=(be*u+me)*4;L[_t]=In(Math.round(je),0,255),L[_t+1]=In(Math.round(tt),0,255),L[_t+2]=In(Math.round(Ke),0,255),L[_t+3]=255;const pt=In(Math.round(128+(oe-.5)*16+(ve-.5)*9),0,255);T[_t]=T[_t+1]=T[_t+2]=pt,T[_t+3]=255}}p.putImageData(A,0,0),y.putImageData(b,0,0),m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.drawImage(M,0,0,1536,1536),g.imageSmoothingEnabled=!0,g.imageSmoothingQuality="high",g.drawImage(d,0,0,1024,1024);const E=(be,W)=>{const me=Math.sin(In(be,0,Math.PI)*.5)*752.64;return[768+Math.cos(W)*me,768-Math.sin(W)*me]},z=1024/1536,[P,R]=gn(1536),[O,Z]=gn(1536),[N,H]=gn(1536),[k,U]=gn(1024);function K(be,W,me,ye,fe,Y,ce){let _e=be,oe=W,ve=me,Oe=ye;const ze=.018,Ze=[],st=[];let je=(o()-.5)*.45;for(let it=0;it<fe;it++){const[ut,ft]=E(_e,oe);Ze.push([ut,ft]),st.push([ut*z,ft*z]),je=je*.55+(o()-.5)*ce.wiggle;const C=Math.atan2(Oe,ve)+je;if(ve=Math.cos(C),Oe=Math.sin(C),_e<ce.stopTheta+.12){const dt=Oe>=0?1:-1;ve=At(ve,.04,.36),Oe=At(Oe,dt,.44)}else ve=At(ve,-.94,.18);const _t=Math.hypot(ve,Oe)||1;ve/=_t,Oe/=_t;const pt=Math.max(.28,Math.sin(_e));if(_e+=ve*ze,oe+=Oe*ze/pt,_e<ce.stopTheta||_e>Math.PI-.08)break;if(Y>0&&it>5&&it<fe-5&&o()<(Y===2?.1:.085)){const dt=o()<.5?1:-1,we=Math.atan2(Oe,ve)+dt*(.38+o()*.46),bt=Math.max(8,Math.round((fe-it)*(.55+o()*.35)));K(_e,oe,Math.cos(we),Math.sin(we),bt,Y-1,{...ce,width:ce.width*(.58+o()*.14),alpha:ce.alpha*(.78+o()*.15),heightBump:ce.heightBump*.62,wiggle:ce.wiggle*1.12,stopTheta:Math.max(i+.03,ce.stopTheta-.015)})}}if(Ze.length<4)return;const[tt,Ke,Je]=ce.rgb;Ta(ce.targetCtx,Ze,ce.width,Math.max(.45,ce.width*.24),`rgba(${tt}, ${Ke}, ${Je}, ${ce.alpha.toFixed(3)})`),ce.heightBump>.01&&Ta(U,st,Math.max(.9,ce.width*z*1.2),.5,`rgba(255, 255, 255, ${ce.heightBump.toFixed(3)})`)}for(let be=0;be<18;be++){const W=be/18*Math.PI*2+(o()-.5)*.28,me=Math.abs(Math.cos(W)),ye=1.42+o()*.52;K(ye,W,-.95,(o()-.5)*.38,46+Math.floor(o()*26),1,{targetCtx:R,rgb:[154,68,82],alpha:.2+me*.14,width:4.2+o()*2.4,heightBump:.06,wiggle:.32,stopTheta:i+.11+o()*.11})}for(let be=0;be<22;be++){const W=be%2===0?0:Math.PI,me=(o()-.5)*Math.PI*(o()<.74?.56:1),ye=W+me,fe=Math.pow(Math.abs(Math.cos(ye)),1.25),Y=1.24+o()*.54,ce=i+(.055+(1-fe)*.13+o()*.08),_e=o()<.55;K(Y,ye,-.92,(o()-.5)*.42,48+Math.floor(o()*32),2,{targetCtx:Z,rgb:_e?[178,52,50]:[148,38,48],alpha:(.28+fe*.26)*(.8+o()*.3),width:2.3+o()*1.4,heightBump:.16+fe*.1,wiggle:.4,stopTheta:ce})}for(let be=0;be<46;be++){const W=o()*Math.PI*2,me=Math.abs(Math.cos(W)),ye=i+.34+o()*.72;K(ye,W,-.88,(o()-.5)*.65,22+Math.floor(o()*24),1,{targetCtx:H,rgb:[186,68,68],alpha:.14+me*.13,width:1.05+o()*.6,heightBump:.05,wiggle:.5,stopTheta:i+.035+o()*.08})}m.save(),m.filter="blur(3.6px)",m.drawImage(P,0,0),m.restore(),m.save(),m.filter="blur(0.7px)",m.drawImage(O,0,0),m.restore(),m.save(),m.filter="blur(0.3px)",m.drawImage(N,0,0),m.restore(),g.save(),g.filter="blur(1.2px)",g.drawImage(k,0,0),g.restore();const V=Math.sin(i*.5)*752.64,ne=m.createRadialGradient(768,768,V*.94,768,768,V*1.22);ne.addColorStop(0,"rgba(170, 178, 184, 0.28)"),ne.addColorStop(.32,"rgba(192, 152, 148, 0.08)"),ne.addColorStop(1,"rgba(192, 152, 148, 0)"),m.fillStyle=ne,m.fillRect(0,0,1536,1536);const se=new Bl(f);se.colorSpace=Sn,se.wrapS=bn,se.wrapT=bn,se.minFilter=zn,se.magFilter=ln,se.anisotropy=e,se.needsUpdate=!0;const Le=ju(h,1.25);return Le.anisotropy=e,{scleraColor:se,scleraNormal:Le}}function mx(i,e){const t=Math.min(8,Math.max(1,e)),{irisColor:n,irisData:r}=dx(t),{scleraColor:s,scleraNormal:a}=px(i,t);return{irisColor:n,irisData:r,scleraColor:s,scleraNormal:a}}const gx=`
varying vec3 vEyePos;
varying vec3 vEyeNrm;
`,_x=`
vEyePos = transformed;
vEyeNrm = normal;
`,vx=`
varying vec3 vEyePos;
varying vec3 vEyeNrm;

uniform sampler2D tIrisCol;
uniform sampler2D tIrisData;
uniform sampler2D tScleraCol;
uniform sampler2D tScleraNrm;

uniform vec3 uCam;        // camera position in eye object space
uniform vec3 uLight;      // direction towards key light in eye object space
uniform mat3 uToView;     // object normal -> view normal
uniform float uPupil;     // current pupil radius in iris radii (0.16 .. 0.58)
uniform float uPupilRef;  // baked reference pupil radius (0.28)
uniform float uGlow;      // red retinal reflex alignment (0..1)
uniform float uLimbAngle; // limbus half-angle (rad)
uniform float uLimbR;     // iris outer radius in object-space xy at limbus plane
uniform float uIrisZ;     // z of the iris plane in object space
uniform float uIor;       // cornea/aqueous refractive index (~1.376)

struct EyeS {
  vec3 alb;
  vec3 n;
  vec3 ccN;
  vec3 emit;
  vec3 sssCol;
  float rough;
  float ccRough;
  float spec;
  float lit;
  float indLit;
  float wrap;
};
EyeS eS;

// Minimal-twist orthonormal basis (T, B) on the sphere matching (+X, +Y) at +Z.
void eyeBasis(vec3 n, out vec3 T, out vec3 B) {
  float inv1z = 1.0 / max(1.0 + n.z, 1e-3);
  T = vec3(1.0 - n.x * n.x * inv1z, -n.x * n.y * inv1z, -n.x);
  B = vec3(-n.x * n.y * inv1z, 1.0 - n.y * n.y * inv1z, -n.y);
}

EyeS evalIris(vec3 pos, vec3 nSurf, vec3 V) {
  EyeS s;
  // 1. Refract view ray through the curved corneal dome onto the recessed iris plane
  vec3 T = refract(V, nSurf, 1.0 / uIor);
  float tz = min(T.z, -0.10);
  float tPlane = max((uIrisZ - pos.z) / tz, 0.0);
  vec3 h = pos + T * tPlane;

  // Subtle anterior iris bow (real iris sits slightly forward near the crystalline lens)
  vec2 hu0 = h.xy / uLimbR;
  float rho0 = length(hu0);
  float bowZ = uIrisZ + 0.018 * max(0.0, 1.0 - rho0 * rho0);
  h = pos + T * max((bowZ - pos.z) / tz, 0.0);
  vec2 hu = h.xy / uLimbR;

  // Tiny anatomical nasal-superior pupil decentration (~1.2% of iris radius)
  vec2 pCenter = vec2(-0.012, 0.008);
  vec2 hp = hu - pCenter;
  float rho = length(hu);
  float rhoP = length(hp);
  float phi = atan(hp.y, hp.x);

  // Subtle organic micro-irregularity on the pupil rim (real pupils aren't laser circles)
  float pWob = 1.0 + 0.007 * sin(phi * 5.0 + 0.8) + 0.004 * cos(phi * 9.0 - 1.4);
  float pRad = uPupil * pWob;

  // 2. Biomechanical radial stretch: remap [pRad, 1.0] -> baked rest space [uPupilRef, 1.0]
  float span = clamp((rhoP - pRad) / max(1.0 - pRad, 0.06), 0.0, 1.0);
  float rRef = mix(uPupilRef, 1.0, pow(span, 0.92));
  vec2 dirP = hp / max(rhoP, 1e-4);
  vec2 irisUV = vec2(0.5) + dirP * (rRef * 0.485);

  // Subtle micro-parallax inside the iris stroma using baked height (alpha channel)
  vec4 idata0 = texture2D(tIrisData, irisUV);
  float hDepth = (idata0.a - 0.5) * 0.014;
  vec2 uvPar = clamp(irisUV + (T.xy / max(-tz, 0.25)) * hDepth, vec2(0.01), vec2(0.99));

  vec3 col = texture2D(tIrisCol, uvPar).rgb;
  vec4 idata = texture2D(tIrisData, uvPar);

  // Tangent-space iris stroma normal: deepens gently as pupil dilates & folds compress
  float compress = mix(0.88, 1.28, smoothstep(0.18, 0.54, uPupil));
  vec2 nxy = (idata.rg * 2.0 - 1.0) * (0.76 * compress);
  vec3 nIris = normalize(vec3(nxy, 1.0) + vec3(hu * 0.06, 0.0));

  // Baked multi-scale crypt/furrow AO, deepened gently on dilation
  float ao = mix(1.0, idata.b, mix(0.80, 1.08, smoothstep(0.20, 0.52, uPupil)));
  col *= ao;

  // 3. Pupil edge & velvety optical interior
  float sd = rhoP - pRad;
  float aaP = max(fwidth(sd) * 1.15, 0.0022);
  float hole = 1.0 - smoothstep(-aaP, aaP, sd);
  // Dark pupillary ruff margin shadow right at the pupil rim
  col *= mix(0.38, 1.0, smoothstep(0.0, 0.032, sd));

  // 4. Corneal caustic: curved corneal lens focuses light onto the FAR crescent of the iris
  // while casting soft corneal-limbal shade onto the near rim.
  vec2 l2 = uLight.xy;
  float ll = length(l2);
  vec2 lDir = ll > 1e-3 ? l2 / ll : vec2(0.0);
  float farSide = dot(hu / max(rho, 1e-4), -lDir) * smoothstep(0.05, 0.65, ll);
  float causticArc = smoothstep(-0.18, 0.95, farSide) * smoothstep(0.16, 0.88, rho);
  float nearShade  = smoothstep(0.08, 0.95, -farSide) * smoothstep(0.45, 1.0, rho);
  float lit = (1.0 + 1.55 * causticArc) * (1.0 - 0.58 * nearShade);
  float indLit = (1.0 + 0.14 * causticArc) * (1.0 - 0.34 * nearShade);

  // Luminous translucent scatter inside the sunlit caustic crescent
  col = mix(col, col * vec3(1.10, 1.12, 1.06), causticArc * 0.42);

  // Deep anterior chamber angle shadow at the peripheral iris root
  float rimDark = smoothstep(0.84, 1.02, rho);
  col *= 1.0 - 0.58 * rimDark;

  // Deep velvety pupil cavity + ultra-subtle retinal reflex only when aligned with light + view
  float insideMask = smoothstep(0.0, -0.05, sd);
  vec3 retina = vec3(0.45, 0.055, 0.025) * (0.0005 + uGlow * 0.042) * insideMask;
  vec3 voidAlb = vec3(0.001, 0.0014, 0.0018);

  s.alb = mix(col, voidAlb, hole);
  s.n = mix(nIris, vec3(0.0, 0.0, 1.0), hole);
  s.ccN = nSurf; // smooth optical-grade corneal tear film
  s.emit = retina * hole;
  s.sssCol = vec3(0.82, 0.94, 0.88);
  s.rough = mix(0.58, 0.35, hole);
  s.ccRough = 0.022; // crisp optical corneal gloss
  s.spec = mix(0.11, 0.0, hole);
  s.lit = mix(lit, 0.15, hole);
  s.indLit = mix(indLit, 0.08, hole);
  s.wrap = 0.40 * (1.0 - hole);
  return s;
}

EyeS evalSclera(vec3 pDir, vec3 nSurf) {
  EyeS s;
  // Lambert azimuthal equal-area UV centered on +z (matches bakeSclera)
  float k = inversesqrt(max(2.0 * (1.0 + pDir.z), 1e-4));
  vec2 sUV = vec2(0.5) + 0.49 * pDir.xy * k;

  vec3 col = texture2D(tScleraCol, sUV).rgb;
  vec4 nSample = texture2D(tScleraNrm, sUV);
  vec2 nxy = nSample.rg * 2.0 - 1.0;

  vec3 T, B;
  eyeBasis(nSurf, T, B);
  vec3 nSclera = normalize(nSurf + (T * nxy.x + B * nxy.y) * 0.22);
  vec3 ccSclera = normalize(nSurf + (T * nxy.x + B * nxy.y) * 0.07);

  s.alb = col;
  s.n = nSclera;
  s.ccN = ccSclera;
  s.emit = vec3(0.0);
  s.sssCol = vec3(1.0, 0.66, 0.56);
  s.rough = 0.36;
  s.ccRough = 0.068;
  s.spec = 0.30;
  s.lit = 1.0;
  s.indLit = 1.0;
  s.wrap = 0.48;
  return s;
}

void eyeShade() {
  vec3 pDir = normalize(vEyePos);
  vec3 nSurf = normalize(vEyeNrm);
  vec3 V = normalize(vEyePos - uCam);

  // Subtle horizontal ellipticity: superior & inferior sclera overlaps the limbus slightly
  vec2 eXY = vec2(pDir.x * 0.985, pDir.y * 1.022);
  float ang = atan(length(eXY), pDir.z) - uLimbAngle;

  // Soft translucent corneoscleral limbus overlap (~0.045 rad feathered frosted-glass blend)
  float feather = max(0.044, fwidth(ang) * 2.0);
  float blend = smoothstep(-feather, feather, ang);

  // Always evaluate both unconditionally so 2x2 pixel quad derivatives (texture2D mipmaps
  // & fwidth) are 100% artifact-free right across the limbus transition!
  EyeS ir = evalIris(vEyePos, nSurf, V);
  EyeS sc = evalSclera(pDir, nSurf);

  // Subtle translucent milky-blue scleral overhang haze across the limbal border
  float haze = 4.0 * blend * (1.0 - blend);
  vec3 mixedAlb = mix(ir.alb, sc.alb, smoothstep(0.0, 1.0, blend));
  mixedAlb = mix(mixedAlb, vec3(0.58, 0.63, 0.66), haze * 0.16);

  eS.alb     = mixedAlb;
  eS.n       = normalize(mix(ir.n, sc.n, blend));
  eS.ccN     = normalize(mix(ir.ccN, sc.ccN, blend));
  eS.emit    = mix(ir.emit, sc.emit, blend);
  eS.sssCol  = mix(ir.sssCol, sc.sssCol, blend);
  eS.rough   = mix(ir.rough, sc.rough, blend);
  eS.ccRough = mix(ir.ccRough, sc.ccRough, blend);
  eS.spec    = mix(ir.spec, sc.spec, blend);
  eS.lit     = mix(ir.lit, sc.lit, blend);
  eS.indLit  = mix(ir.indLit, sc.indLit, blend);
  eS.wrap    = mix(ir.wrap, sc.wrap, blend);
}
`,xx=[["#include <color_fragment>",`
  eyeShade();
  diffuseColor.rgb = eS.alb;`],["#include <normal_fragment_maps>",`
  normal = normalize(uToView * eS.n);`],["#include <clearcoat_normal_fragment_maps>",`
  #ifdef USE_CLEARCOAT
  clearcoatNormal = normalize(uToView * eS.ccN);
  #endif`],["#include <emissivemap_fragment>",`
  totalEmissiveRadiance += eS.emit;`],["#include <lights_physical_fragment>",`
  material.roughness = clamp(eS.rough + geometryRoughness, 0.045, 1.0);
  #ifdef USE_CLEARCOAT
  material.clearcoatRoughness = clamp(eS.ccRough + geometryRoughness, 0.022, 1.0);
  #endif
  material.specularColor *= eS.spec;
  material.specularColorBlended *= eS.spec;
  material.specularF90 *= eS.spec;`],["#include <lights_fragment_end>",`
  reflectedLight.indirectDiffuse *= eS.indLit;
  #if NUM_DIR_LIGHTS > 0
  {
    // Subtle subcutaneous wrap scatter round the terminator + corneal caustic focus
    vec3 ld = directionalLights[0].direction;
    float ndl = dot(normal, ld);
    float wr = max(0.0, (ndl + eS.wrap) / (1.0 + eS.wrap)) - max(ndl, 0.0);
    reflectedLight.directDiffuse *= eS.lit;
    reflectedLight.directDiffuse += directionalLights[0].color * wr * RECIPROCAL_PI * material.diffuseContribution * eS.sssCol * eS.lit;
  }
  #endif`]],Mr=31.5*Math.PI/180,Mx=1.376,Cf=.979,Lf=.17,Ro=.34,Pf=.52,Sx=.58,yx={w:10.5,z:.72},Ex={w:52,z:.84},bx=.13,Tx=.0085,wx=.64,Ax=.46,If=.52*$e;function fa(i){const e=i/Mr,t=Math.max(0,Math.min(1,1-e/1.08)),n=(1-Cf)*(t*t*t*(t*(t*6-15)+10)),r=(e-1.02)/.16,s=-.0028*Math.exp(-r*r);return Cf+n+s}function Rx(){const e=[],r=42*Math.PI/180;for(let u=0;u<=44;u++)e.push(u/44*r);for(let u=1;u<=56;u++){const M=u/56;e.push(r+M*(Math.PI-r))}const s=e.length,a=129,o=s*a,c=new Float32Array(o*3),l=new Float32Array(o*3),f=new Float32Array(o*2),m=1e-4;for(let u=0;u<s;u++){const M=e[u],p=fa(M),d=(fa(Math.min(Math.PI,M+m))-fa(Math.max(0,M-m)))/(Math.min(Math.PI,M+m)-Math.max(0,M-m)||1),y=Math.sin(M),A=Math.cos(M),b=p,L=-d,T=Math.hypot(b,L)||1,_=b/T,E=L/T,z=_*y+E*A,P=_*A-E*y;for(let R=0;R<=128;R++){const O=R/128,Z=O*Math.PI*2,N=Math.cos(Z),H=Math.sin(Z),k=u*a+R;c[k*3]=p*y*N,c[k*3+1]=p*y*H,c[k*3+2]=p*A,l[k*3]=z*N,l[k*3+1]=z*H,l[k*3+2]=P,f[k*2]=O,f[k*2+1]=1-M/Math.PI}}const h=[];for(let u=0;u<s-1;u++)for(let M=0;M<128;M++){const p=u*a+M,d=p+1,y=p+a,A=y+1;u>0&&h.push(p,y,d),u<s-2&&h.push(d,y,A)}const g=new Vn;return g.setAttribute("position",new fn(c,3)),g.setAttribute("normal",new fn(l,3)),g.setAttribute("uv",new fn(f,2)),g.setIndex(h),g}function Cx(i){const{world:e,renderer:t,scene:n,camera:r}=i,s=new URLSearchParams(location.search).has("dark"),a=Rx(),o=mx(Mr,t.capabilities.getMaxAnisotropy()),c=new fu({color:16777215,roughness:.4,metalness:0,clearcoat:1,clearcoatRoughness:.025,envMapIntensity:.72}),l=fa(Mr),f=l*Math.cos(Mr),m=l*Math.sin(Mr),h={tIrisCol:{value:o.irisColor},tIrisData:{value:o.irisData},tScleraCol:{value:o.scleraColor},tScleraNrm:{value:o.scleraNormal},uCam:{value:new G(0,0,5)},uLight:{value:new G(0,0,1)},uToView:{value:new Et},uPupil:{value:Ro},uPupilRef:{value:Gi},uGlow:{value:0},uLimbAngle:{value:Mr},uLimbR:{value:m},uIrisZ:{value:f},uIor:{value:Mx}};c.onBeforeCompile=Y=>{Object.assign(Y.uniforms,h),Y.vertexShader=Y.vertexShader.replace("#include <common>",`#include <common>
${gx}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${_x}`);let ce=Y.fragmentShader.replace("#include <clipping_planes_pars_fragment>",`#include <clipping_planes_pars_fragment>
${vx}`);for(const[_e,oe]of xx)ce=ce.replace(_e,`${_e}
${oe}`);Y.fragmentShader=ce},c.customProgramCacheKey=()=>"human-eye-v1";const g=new an(a,c);g.visible=!1,n.add(g);const u=new G(0,0,1),M=new G,p=new G,d=new G,y=new G(0,0,1),A=new G,b=new G,L=new G,T=new Tn,_=new Tn,E=new Tn,z=new Wt;let P;const R={x:0,y:0,vx:0,vy:0},O={x:0,y:0},Z={x:0,y:0,tx:0,ty:0,next:.35};let N=0,H=.8,k=Ro,U=.5,K=-1,V=-1,ne=0,se=0;const Le=[[0,0,1],[.24,0,.97],[-.24,0,.97],[0,.24,.97],[0,-.24,.97]];function be(Y){if(!Y||!e.show.films||e.films.length===0)return 1;E.copy(e.rotation).invert();let ce=0;for(let _e=0;_e<Le.length;_e++){L.set(Le[_e][0],Le[_e][1],Le[_e][2]).applyQuaternion(E);let oe=1;for(let ve=0;ve<e.films.length;ve++)Ar(e.films[ve],L.x,L.y,L.z)!==0&&(oe*=1-e.layers[ve].opacity*.85);ce+=oe}return ce/Le.length}function W(Y,ce){return ce*Math.tanh(Y/ce)}function me(Y){const ce=e.look;if(ce.on){const _e=window.innerWidth,oe=window.innerHeight;p.setFromMatrixPosition(r.matrixWorld),d.set(ce.x/_e*2-1,-(ce.y/oe)*2+1,.5).unproject(r).sub(p).normalize();const ve=(p.z-1.65*$e)/Math.max(.001,-d.z);b.copy(p).addScaledVector(d,ve).normalize(),O.x=W(Math.atan2(b.x,b.z),wx),O.y=W(Math.asin(Math.max(-1,Math.min(1,b.y))),Ax)}else(H-=Y)<=0&&(Math.random()<.55?(H=1.4+Math.random()*2.8,O.x=(Math.random()-.5)*.05,O.y=(Math.random()-.5)*.04):(H=.65+Math.random()*1.4,O.x=(Math.random()-.5)*.48,O.y=(Math.random()-.5)*.28))}function ye(Y){const ce=O.x-R.x,_e=O.y-R.y,oe=Math.hypot(ce,_e);N<=0&&oe>bx&&(N=.045+oe*.11),N-=Y;const ve=N>0?Ex:yx,Oe=Math.ceil(Y/.004),ze=Y/Oe;for(let st=0;st<Oe;st++)R.vx+=(ve.w*ve.w*(O.x-R.x)-2*ve.z*ve.w*R.vx)*ze,R.vy+=(ve.w*ve.w*(O.y-R.y)-2*ve.z*ve.w*R.vy)*ze,R.x+=R.vx*ze,R.y+=R.vy*ze;if((Z.next-=Y)<=0){Z.next=.26+Math.random()*.72;const st=Math.random()*Math.PI*2,je=Tx*(.35+Math.random()*.65);Z.tx=Z.tx*.28+Math.cos(st)*je,Z.ty=Z.ty*.28+Math.sin(st)*je}const Ze=1-Math.exp(-48*Y);Z.x+=(Z.tx-Z.x)*Ze,Z.y+=(Z.ty-Z.y)*Ze}function fe(Y,ce){const _e=e.look,oe=window.innerWidth,ve=window.innerHeight,Oe=r.fov*Math.PI/180,Ze=(ce?$e:If)/(r.position.z*Math.tan(Oe/2))*(ve/2),st=Y>0&&K>=0?Math.hypot(_e.x-K,_e.y-V)/Y:0;K=_e.x,V=_e.y,ne+=((_e.on?st:0)-ne)*(1-Math.exp(-5*Y));const je=be(ce);U+=(je-U)*(1-Math.exp(-3.5*Y));const tt=Math.max(0,M.dot(y)-.52)/.48,Ke=_e.on?Math.max(0,1-Math.hypot(_e.x-oe/2,_e.y-ve/2)/(1.25*Ze)):0,Je=Math.min(1,ne/(5.5*Ze))*.065,it=e.finger.active?.42:0,ut=s?Pf*.88:Ro,ft=ut+(1-U)*(Pf-ut),C=.014*Math.sin(se*.72)+.009*Math.sin(se*1.63+1.1)+.005*Math.sin(se*2.87+2.4),_t=Math.min(1,Ke*.48+it*.45+tt*.58*U),pt=Math.min(Sx,Math.max(Lf,ft+(Lf-ft)*_t+Je+C)),dt=pt<k?4.2:1.05;k+=(pt-k)*(1-Math.exp(-dt*Y)),h.uPupil.value=k}return{update(Y){const ce=e.next.eye;if(g.visible=ce||e.next.jelly!==null,!g.visible)return;se+=Y,g.scale.setScalar(ce?.9975*$e:If),P===void 0&&(P=n.children.find(ze=>ze instanceof mu)??null),P&&y.copy(P.position).sub(P.target.position).normalize(),me(Y),ye(Y);const _e=.0032*Math.sin(se*.53+.4)+.0018*Math.sin(se*1.31),oe=.0026*Math.cos(se*.47+1.2)+.0014*Math.sin(se*1.17),ve=R.x+Z.x+_e,Oe=R.y+Z.y+oe;M.set(Math.sin(ve)*Math.cos(Oe),Math.sin(Oe),Math.cos(ve)*Math.cos(Oe)),g.quaternion.copy(T.setFromUnitVectors(u,M)),fe(Y,ce),g.updateMatrixWorld(),r.updateMatrixWorld(),p.setFromMatrixPosition(r.matrixWorld),h.uCam.value.copy(p).applyMatrix4(z.copy(g.matrixWorld).invert()),_.copy(g.quaternion).invert(),h.uLight.value.copy(y).applyQuaternion(_),h.uToView.value.getNormalMatrix(z.multiplyMatrices(r.matrixWorldInverse,g.matrixWorld)),A.copy(p).normalize().add(y).normalize(),h.uGlow.value=Math.pow(Math.max(0,M.dot(A)),28)}}}const cs=document.querySelector("#c"),$i=new E_({canvas:cs,antialias:!0});$i.toneMapping=Rl;$i.outputColorSpace=Sn;const ms=new nu,eh=!new URLSearchParams(location.search).has("dark");eh||document.documentElement.classList.add("dark");ms.background=new St(eh?15132392:723725);const Lx=new ss($i);ms.environment=Lx.fromScene(new b_,.04).texture;const Cr=new Bn(32,1,.1,50);Cr.position.set(0,0,4.6);const th=new mu(16777215,2.2);th.position.set(-2.5,3,4);ms.add(th);const nh=Uv(),Qs={world:nh,renderer:$i,scene:ms,camera:Cr,canvas:cs},ih=[Fv(Qs),Cx(Qs),fx(Qs),hx(Qs)];function Xl(){const i=cs.clientWidth||window.innerWidth,e=cs.clientHeight||window.innerHeight;$i.setPixelRatio(Math.min(window.devicePixelRatio,2)),$i.setSize(i,e,!1),Cr.aspect=i/e,Cr.position.z=i<e?4.6*(e/i):4.6,Cr.updateProjectionMatrix();for(const t of ih)t.resize?.(i,e)}let Df=performance.now();function rh(i){const e=Math.min((i-Df)/1e3,.05);Df=i;for(const t of ih)t.update(e);$i.render(ms,Cr),requestAnimationFrame(rh)}window.addEventListener("resize",Xl);new ResizeObserver(Xl).observe(cs);Xl();requestAnimationFrame(rh);window.world=nh;
