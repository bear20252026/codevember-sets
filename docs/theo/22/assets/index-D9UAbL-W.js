(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Gc="187",od=0,Dl=1,ad=2,er=1,cd=2,qs=3,Wn=0,fn=1,gn=2,ds=0,tr=1,mo=2,Ol=3,Ul=4,ld=5,us=100,hd=101,ud=102,fd=103,dd=104,pd=200,md=201,gd=202,xd=203,Au=204,Ru=205,_d=206,vd=207,Sd=208,Md=209,yd=210,Td=211,wd=212,bd=213,Ed=214,Ga=0,za=1,Va=2,cr=3,Wa=4,Xa=5,Ya=6,Ka=7,Cu=0,Ad=1,Rd=2,zn=0,Pu=1,Lu=2,Iu=3,Nu=4,Du=5,Ou=6,Uu=7,Fl="attached",Cd="detached",Fu=300,xs=301,lr=302,Qo=303,jo=304,Ht=1e3,kn=1001,go=1002,Gt=1003,Bu=1004,$s=1005,zt=1006,co=1007,Hn=1008,xn=1009,ku=1010,Hu=1011,hr=1012,zc=1013,Xn=1014,Tn=1015,In=1016,Vc=1017,Wc=1018,_s=1020,Gu=35902,zu=35899,Vu=1021,Wu=1022,Cn=1023,Ai=1026,wi=1027,Xc=1028,Yc=1029,Hi=1030,Kc=1031,qc=1033,lo=33776,ho=33777,uo=33778,fo=33779,qa=35840,$a=35841,Za=35842,Ja=35843,Qa=36196,ja=37492,ec=37496,tc=37488,nc=37489,xo=37490,ic=37491,sc=37808,rc=37809,oc=37810,ac=37811,cc=37812,lc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,xc=37821,_c=36492,vc=36494,Sc=36495,Mc=36283,yc=36284,_o=36285,Tc=36286,ur=2300,fr=2301,ea=2302,Bl=2303,kl=2400,Hl=2401,Gl=2402,Pd=2500,Ld=0,Xu=1,wc=2,Id=3200,bc=0,Nd=1,Ti="",at="srgb",_n="srgb-linear",vo="linear",yt="srgb",ta=7680,Dd=519,Od=512,Ud=513,Fd=514,Yu=515,Bd=516,kd=517,Ku=518,qu=519,$u=35044,zl="300 es",Pn=2e3,dr=2001;function Hd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zd(){const s=pr("canvas");return s.style.display="block",s}const Vl={};function So(...s){const e="THREE."+s.shift();console.log(e,...s)}function Zu(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function We(...s){s=Zu(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ze(...s){s=Zu(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ps(...s){const e=s.join(" ");e in Vl||(Vl[e]=!0,We(...s))}function Vd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Wd={[Ga]:Ga,[Va]:Ya,[Wa]:Wa,[cr]:Xa,[za]:za,[Ya]:Va,[Ka]:Ka,[Xa]:cr};class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wl=1234567;const nr=Math.PI/180,vs=180/Math.PI;function Nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function $c(s,e){return(s%e+e)%e}function Xd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Yd(s,e,t){return s!==e?(t-s)/(e-s):0}function ir(s,e,t){return(1-t)*s+t*e}function Kd(s,e,t,n){return ir(s,e,1-Math.exp(-t*n))}function qd(s,e=1){return e-Math.abs($c(s,e*2)-e)}function $d(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Zd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Jd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qd(s,e){return s+Math.random()*(e-s)}function jd(s){return s*(.5-Math.random())}function ep(s){s!==void 0&&(Wl=s);let e=Wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tp(s){return s*nr}function np(s){return s*vs}function ip(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function sp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ju(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*d,a*u,a*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Uo(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zc(s,e){if(e.constructor===Float32Array)return s;const t=Uo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Jc(s,e){if(e.constructor===Float32Array)return s;const t=Uo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Mo={DEG2RAD:nr,RAD2DEG:vs,generateUUID:Nn,clamp:rt,euclideanModulo:$c,mapLinear:Xd,inverseLerp:Yd,lerp:ir,damp:Kd,pingpong:qd,smoothstep:$d,smootherstep:Zd,randInt:Jd,randFloat:Qd,randFloatSpread:jd,seededRandom:ep,degToRad:tp,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:Ju,setQuaternionFromProperEuler:rp,normalize:Jc,denormalize:Zc};class ae{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(h!==_||c!==f||l!==d||u!==m){let p=c*f+l*d+u*m+h*_;p<0&&(f=-f,d=-d,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const S=Math.acos(p),M=Math.sin(S);g=Math.sin(g*S)/M,a=Math.sin(a*S)/M,c=c*g+f*a,l=l*g+d*a,u=u*g+m*a,h=h*g+_*a}else{c=c*g+f*a,l=l*g+d*a,u=u*g+m*a,h=h*g+_*a;const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-a*d,e[t+2]=l*m+u*d+a*f-c*h,e[t+3]=u*m-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new D,Xl=new hi;class et{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],S=i[1],M=i[4],v=i[7],b=i[2],E=i[5],x=i[8];return r[0]=o*_+a*S+c*b,r[3]=o*p+a*M+c*E,r[6]=o*g+a*v+c*x,r[1]=l*_+u*S+h*b,r[4]=l*p+u*M+h*E,r[7]=l*g+u*v+h*x,r[2]=f*_+d*S+m*b,r[5]=f*p+d*M+m*E,r[8]=f*g+d*v+m*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ia.makeScale(e,t)),this}rotate(e){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new et,Yl=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function op(){const s={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?vo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[_n]:{primaries:e,whitePoint:n,transfer:vo,toXYZ:Yl,fromXYZ:Kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Yl,fromXYZ:Kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:at}}}),s}const ht=op();function oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qi;class ap{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=pr("canvas")),qi.width=e.width,qi.height=e.height;const i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cp=0;class Qc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sa(i[o].image)):r.push(sa(i[o]))}else r=sa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function sa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ap.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let lp=0;const ra=new D;class Vt extends Xi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=kn,i=kn,r=zt,o=Hn,a=Cn,c=xn,l=Vt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Nn(),this.name="",this.source=new Qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ht:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ht:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Fu;Vt.DEFAULT_ANISOTROPY=1;class At{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,v=(d+1)/2,b=(g+1)/2,E=(u+f)/4,x=(h+_)/4,T=(m+p)/4;return M>v&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=x/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=T/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=x/r,i=T/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Vt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Qc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qu extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class tt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,c,l,u,h,f,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,f,d,m,_,p)}set(e,t,n,i,r,o,a,c,l,u,h,f,d,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,m=l*u,_=l*h;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,m=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,dp)}lookAt(e,t,n){const i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),pi.crossVectors(n,pn),pi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),pi.crossVectors(n,pn)),pi.normalize(),Cr.crossVectors(pn,pi),i[0]=pi.x,i[4]=Cr.x,i[8]=pn.x,i[1]=pi.y,i[5]=Cr.y,i[9]=pn.y,i[2]=pi.z,i[6]=Cr.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],S=n[3],M=n[7],v=n[11],b=n[15],E=i[0],x=i[4],T=i[8],L=i[12],C=i[1],R=i[5],I=i[9],O=i[13],P=i[2],U=i[6],G=i[10],F=i[14],Z=i[3],H=i[7],X=i[11],q=i[15];return r[0]=o*E+a*C+c*P+l*Z,r[4]=o*x+a*R+c*U+l*H,r[8]=o*T+a*I+c*G+l*X,r[12]=o*L+a*O+c*F+l*q,r[1]=u*E+h*C+f*P+d*Z,r[5]=u*x+h*R+f*U+d*H,r[9]=u*T+h*I+f*G+d*X,r[13]=u*L+h*O+f*F+d*q,r[2]=m*E+_*C+p*P+g*Z,r[6]=m*x+_*R+p*U+g*H,r[10]=m*T+_*I+p*G+g*X,r[14]=m*L+_*O+p*F+g*q,r[3]=S*E+M*C+v*P+b*Z,r[7]=S*x+M*R+v*U+b*H,r[11]=S*T+M*I+v*G+b*X,r[15]=S*L+M*O+v*F+b*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15],S=c*d-l*f,M=a*d-l*h,v=a*f-c*h,b=o*d-l*u,E=o*f-c*u,x=o*h-a*u;return t*(_*S-p*M+g*v)-n*(m*S-p*b+g*E)+i*(m*M-_*b+g*x)-r*(m*v-_*E+p*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+i*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],S=t*a-n*o,M=t*c-i*o,v=t*l-r*o,b=n*c-i*a,E=n*l-r*a,x=i*l-r*c,T=u*_-h*m,L=u*p-f*m,C=u*g-d*m,R=h*p-f*_,I=h*g-d*_,O=f*g-d*p,P=S*O-M*I+v*R+b*C-E*L+x*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return e[0]=(a*O-c*I+l*R)*U,e[1]=(i*I-n*O-r*R)*U,e[2]=(_*x-p*E+g*b)*U,e[3]=(f*E-h*x-d*b)*U,e[4]=(c*C-o*O-l*L)*U,e[5]=(t*O-i*C+r*L)*U,e[6]=(p*v-m*x-g*M)*U,e[7]=(u*x-f*v+d*M)*U,e[8]=(o*I-a*C+l*T)*U,e[9]=(n*C-t*I-r*T)*U,e[10]=(m*E-_*v+g*S)*U,e[11]=(h*v-u*E-d*S)*U,e[12]=(a*L-o*R-c*T)*U,e[13]=(t*R-n*L+i*T)*U,e[14]=(_*M-m*b-p*S)*U,e[15]=(u*b-h*M+f*S)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,m=r*h,_=o*u,p=o*h,g=a*h,S=c*l,M=c*u,v=c*h,b=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*b,i[1]=(d+v)*b,i[2]=(m-M)*b,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+g))*E,i[6]=(p+S)*E,i[7]=0,i[8]=(m+M)*x,i[9]=(p-S)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=$i.set(i[0],i[1],i[2]).length();const a=$i.set(i[4],i[5],i[6]).length(),c=$i.set(i[8],i[9],i[10]).length();r<0&&(o=-o),bn.copy(this);const l=1/o,u=1/a,h=1/c;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=Pn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Pn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===dr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Pn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Pn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===dr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new D,bn=new tt,fp=new D(0,0,0),dp=new D(1,1,1),pi=new D,Cr=new D,pn=new D,ql=new tt,$l=new hi;class Ri{constructor(e=0,t=0,n=0,i=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pp=0;const Zl=new D,Zi=new hi,Zn=new tt,Pr=new D,Us=new D,mp=new D,gp=new hi,Jl=new D(1,0,0),Ql=new D(0,1,0),jl=new D(0,0,1),eh={type:"added"},xp={type:"removed"},Ji={type:"childadded",child:null},oa={type:"childremoved",child:null};class Pt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new D,t=new Ri,n=new hi,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new et}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Jl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Zl.copy(e).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Us,Pr,this.up):Zn.lookAt(Pr,Us,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(Zn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pt.DEFAULT_UP=new D(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ct extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _p={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function ca(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=$c(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ca(o,r,e+1/3),this.g=ca(o,r,e),this.b=ca(o,r,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=at){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return ht.workingToColorSpace(tn.copy(this),e),Math.round(rt(tn.r*255,0,255))*65536+Math.round(rt(tn.g*255,0,255))*256+Math.round(rt(tn.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(tn.copy(this),t);const n=tn.r,i=tn.g,r=tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=at){ht.workingToColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,i=tn.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Lr);const n=ir(mi.h,Lr.h,t),i=ir(mi.s,Lr.s,t),r=ir(mi.l,Lr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new $e;$e.NAMES=ju;class el{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new el(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ef extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const En=new D,Jn=new D,la=new D,Qn=new D,Qi=new D,ji=new D,th=new D,ha=new D,ua=new D,fa=new D,da=new At,pa=new At,ma=new At;class Rn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),Jn.subVectors(n,t),la.subVectors(e,t);const o=En.dot(En),a=En.dot(Jn),c=En.dot(la),l=Jn.dot(Jn),u=Jn.dot(la),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return da.setScalar(0),pa.setScalar(0),ma.setScalar(0),da.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,n),ma.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(da,r.x),o.addScaledVector(pa,r.y),o.addScaledVector(ma,r.z),o}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),Jn.subVectors(e,t),En.cross(Jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),En.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Qi.subVectors(i,n),ji.subVectors(r,n),ha.subVectors(e,n);const c=Qi.dot(ha),l=ji.dot(ha);if(c<=0&&l<=0)return t.copy(n);ua.subVectors(e,i);const u=Qi.dot(ua),h=ji.dot(ua);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),t.copy(n).addScaledVector(Qi,o);fa.subVectors(e,r);const d=Qi.dot(fa),m=ji.dot(fa);if(m>=0&&d<=m)return t.copy(r);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(ji,a);const p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return th.subVectors(r,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(th,a);const g=1/(p+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(Qi,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ui{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Nr.subVectors(this.max,Fs),es.subVectors(e.a,Fs),ts.subVectors(e.b,Fs),ns.subVectors(e.c,Fs),gi.subVectors(ts,es),xi.subVectors(ns,ts),Ni.subVectors(es,ns);let t=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Ni.z,Ni.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Ni.z,0,-Ni.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Ni.y,Ni.x,0];return!ga(t,es,ts,ns,Nr)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,es,ts,ns,Nr))?!1:(Dr.crossVectors(gi,xi),t=[Dr.x,Dr.y,Dr.z],ga(t,es,ts,ns,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new D,new D,new D,new D,new D,new D,new D,new D],An=new D,Ir=new ui,es=new D,ts=new D,ns=new D,gi=new D,xi=new D,Ni=new D,Fs=new D,Nr=new D,Dr=new D,Di=new D;function ga(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Di.fromArray(s,r);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const kt=new D,Or=new ae;let vp=0;class nn extends Xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=e!==void 0?Uo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jc(e,this.array)}}class tf extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nf extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Sp=new ui,Bs=new D,xa=new D;class Kn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(xa)),this.expandByPoint(Bs.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mp=0;const vn=new tt,_a=new Pt,is=new D,mn=new ui,ks=new ui,qt=new D;class Ut extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hd(e)?nf:tf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(mn.min,ks.min),mn.expandByPoint(qt),qt.addVectors(mn.max,ks.max),mn.expandByPoint(qt)):(mn.expandByPoint(ks.min),mn.expandByPoint(ks.max))}mn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qt.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(e,l),qt.add(is)),i=Math.max(i,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new D,c[L]=new D;const u=new D,h=new D,f=new D,d=new ae,m=new ae,_=new ae,p=new D,g=new D;function S(L,C,R){l[L]=l[C]=l[R]=1,u.fromBufferAttribute(n,L),h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,R),d.fromBufferAttribute(r,L),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,R),h.sub(u),f.sub(u),m.sub(d),_.sub(d);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(p.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(I),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(I),a[L].add(p),a[C].add(p),a[R].add(p),c[L].add(g),c[C].add(g),c[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,C=M.length;L<C;++L){const R=M[L],I=R.start,O=R.count;for(let P=I,U=I+O;P<U;P+=3)S(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const v=new D,b=new D,E=new D,x=new D;function T(L){E.fromBufferAttribute(i,L),x.copy(E);const C=a[L];v.copy(C),v.sub(E.multiplyScalar(E.dot(C))).normalize(),b.crossVectors(x,C);const I=b.dot(c[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,I)}for(let L=0,C=n.count;L<C;++L)l[L]&&T(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,m=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let g=0;g<u;g++)f[m++]=l[d++]}return new nn(f,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$u,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=nh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=nh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function nh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Nn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const rn=new D;class tl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Uo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zc(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jc(e,this.data.array)}}const va=new D,Tp=new D,wp=new et;class Mi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=va.subVectors(n,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(va),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wp.getNormalMatrix(e),i=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bp=0;class Vn extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=tr,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Ru,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ei=new D,Sa=new D,Ur=new D,Fr=new D;class wr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sa.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(Sa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=Fr.dot(this.direction),c=-Fr.dot(Ur),l=Fr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=r*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Sa).addScaledVector(Ur,f),d}intersectSphere(e,t){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,_=t.y-o.y,p=t.z-o.z,g=n.x-o.x,S=n.y-o.y,M=n.z-o.z,v=Math.abs(c),b=Math.abs(l),E=Math.abs(u);let x,T,L,C,R,I,O,P,U,G,F,Z;if(v>=b&&v>=E?(L=c,I=h,U=m,Z=g,c>=0?(x=l,T=u,C=f,R=d,O=_,P=p,G=S,F=M):(x=u,T=l,C=d,R=f,O=p,P=_,G=M,F=S)):b>=E?(L=l,I=f,U=_,Z=S,l>=0?(x=u,T=c,C=d,R=h,O=p,P=m,G=M,F=g):(x=c,T=u,C=h,R=d,O=m,P=p,G=g,F=M)):(L=u,I=d,U=p,Z=M,u>=0?(x=c,T=l,C=h,R=f,O=m,P=_,G=g,F=S):(x=l,T=c,C=f,R=h,O=_,P=m,G=S,F=g)),L===0)return null;const H=x/L,X=T/L,q=1/L,le=C-H*I,we=R-X*I,V=O-H*U,se=P-X*U,ge=G-H*Z,De=F-X*Z,he=ge*se-De*V,Oe=le*De-we*ge,ft=V*we-se*le;if(i){if(he<0||Oe<0||ft<0)return null}else if((he<0||Oe<0||ft<0)&&(he>0||Oe>0||ft>0))return null;const Xe=he+Oe+ft;if(Xe===0)return null;const je=q*(he*I+Oe*U+ft*Z);return(Xe>0?je<0:je>0)?null:this.at(je/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ih=new tt,Oi=new wr,Br=new Kn,sh=new D,kr=new D,Hr=new D,Gr=new D,Ma=new D,zr=new D,rh=new D,Vr=new D;class ee extends Pt{constructor(e=new Ut,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ma.fromBufferAttribute(h,e),o?zr.addScaledVector(Ma,u):zr.addScaledVector(Ma.sub(t),u))}t.add(zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Br.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Br,sh)===null||Oi.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(ih),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,b=M;v<b;v+=3){const E=a.getX(v),x=a.getX(v+1),T=a.getX(v+2);i=Wr(this,g,e,n,l,u,h,E,x,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const S=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);i=Wr(this,o,e,n,l,u,h,S,M,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,b=M;v<b;v+=3){const E=v,x=v+1,T=v+2;i=Wr(this,g,e,n,l,u,h,E,x,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const S=p,M=p+1,v=p+2;i=Wr(this,o,e,n,l,u,h,S,M,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Ep(s,e,t,n,i,r,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Wn,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:s}}function Wr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,kr),s.getVertexPosition(c,Hr),s.getVertexPosition(l,Gr);const u=Ep(s,e,t,n,kr,Hr,Gr,rh);if(u){const h=new D;Rn.getBarycoord(rh,kr,Hr,Gr,h),i&&(u.uv=Rn.getInterpolatedAttribute(i,a,c,l,h,new ae)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,c,l,h,new ae)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};Rn.getNormal(kr,Hr,Gr,f.normal),u.face=f,u.barycoord=h}return u}const Hs=new At,oh=new At,ah=new At,Ap=new At,ch=new tt,Xr=new D,ya=new Kn,lh=new tt,Ta=new wr;class Rp extends ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fl,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingSphere.expandByPoint(Xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(i),e.ray.intersectsSphere(ya)!==!1&&(lh.copy(i).invert(),Ta.copy(e.ray).applyMatrix4(lh),!(this.boundingBox!==null&&Ta.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ta)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cd?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;oh.fromBufferAttribute(i.attributes.skinIndex,e),ah.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Hs.copy(t),t.set(0,0,0,0)):(Hs.set(t.x,t.y,t.z,1),t.set(0,0,0)),Hs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=ah.getComponent(r);if(o!==0){const a=oh.getComponent(r);ch.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ap.copy(Hs).applyMatrix4(ch),o)}}return t.isVector4&&(t.w=Hs.w),t.applyMatrix4(this.bindMatrixInverse)}}class sf extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nl extends Vt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Gt,u=Gt,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hh=new tt,Cp=new tt;class il{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Cp;hh.multiplyMatrices(a,t[r]),hh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new nl(t,e,e,Cn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(We("Skeleton: No bone found with UUID:",r),o=new sf),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class yo extends nn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new tt,uh=new tt,Yr=[],fh=new ui,Pp=new tt,Gs=new ee,zs=new Kn;class Lp extends ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),fh.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),zs.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ss),uh.multiplyMatrices(n,ss),Gs.matrixWorld=uh,Gs.raycast(e,Yr);for(let o=0,a=Yr.length;o<a;o++){const c=Yr[o];c.instanceId=r,c.object=this,t.push(c)}Yr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nl(new Float32Array(i*this.count),i,this.count,Xc,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ui=new Kn,Ip=new ae(.5,.5),Kr=new D;class mr{constructor(e=new Mi,t=new Mi,n=new Mi,i=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],_=r[9],p=r[10],g=r[11],S=r[12],M=r[13],v=r[14],b=r[15];if(i[0].setComponents(l-o,d-u,g-m,b-S).normalize(),i[1].setComponents(l+o,d+u,g+m,b+S).normalize(),i[2].setComponents(l+a,d+h,g+_,b+M).normalize(),i[3].setComponents(l-a,d-h,g-_,b-M).normalize(),n)i[4].setComponents(c,f,p,v).normalize(),i[5].setComponents(l-c,d-f,g-p,b-v).normalize();else if(i[4].setComponents(l-c,d-f,g-p,b-v).normalize(),t===Pn)i[5].setComponents(l+c,d+f,g+p,b+v).normalize();else if(t===dr)i[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=Ip.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const dh=new tt;class sl{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];dh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new mr),n[i].setFromProjectionMatrix(dh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new mr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new sl().copy(this)}}class rl extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const To=new D,wo=new D,ph=new tt,Vs=new wr,qr=new Kn,wa=new D,mh=new D;class ol extends Pt{constructor(e=new Ut,t=new rl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)To.fromBufferAttribute(t,i-1),wo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=To.distanceTo(wo);e.setAttribute("lineDistance",new ut(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;ph.copy(i).invert(),Vs.copy(e.ray).applyMatrix4(ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=l){const g=u.getX(_),S=u.getX(_+1),M=$r(this,e,Vs,c,g,S,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(m-1),p=u.getX(d),g=$r(this,e,Vs,c,_,p,m-1);g&&t.push(g)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=l){const g=$r(this,e,Vs,c,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=$r(this,e,Vs,c,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $r(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(To.fromBufferAttribute(a,i),wo.fromBufferAttribute(a,r),t.distanceSqToSegment(To,wo,wa,mh)>n)return;wa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(wa);if(!(l<e.near||l>e.far))return{distance:l,point:mh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const gh=new D,xh=new D;class rf extends ol{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gh.fromBufferAttribute(t,i),xh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gh.distanceTo(xh);e.setAttribute("lineDistance",new ut(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Np extends ol{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class al extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _h=new tt,Ec=new wr,Zr=new Kn,Jr=new D;class of extends Pt{constructor(e=new Ut,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;_h.copy(i).invert(),Ec.copy(e.ray).applyMatrix4(_h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const p=l.getX(m);Jr.fromBufferAttribute(h,p),vh(Jr,p,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Jr.fromBufferAttribute(h,m),vh(Jr,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vh(s,e,t,n,i,r,o){const a=Ec.distanceSqToPoint(s);if(a<t){const c=new D;Ec.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class af extends Vt{constructor(e=[],t=xs,n,i,r,o,a,c,l,u){super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vt extends Vt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ss extends Vt{constructor(e,t,n=Xn,i,r,o,a=Gt,c=Gt,l,u=Ai,h=1){if(u!==Ai&&u!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class cf extends Ss{constructor(e,t=Xn,n=xs,i,r,o=Gt,a=Gt,c,l=Ai){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lf extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ye extends Ut{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function m(_,p,g,S,M,v,b,E,x,T,L){const C=v/x,R=b/T,I=v/2,O=b/2,P=E/2,U=x+1,G=T+1;let F=0,Z=0;const H=new D;for(let X=0;X<G;X++){const q=X*R-O;for(let le=0;le<U;le++){const we=le*C-I;H[_]=we*S,H[p]=q*M,H[g]=P,l.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[g]=E>0?1:-1,u.push(H.x,H.y,H.z),h.push(le/x),h.push(1-X/T),F+=1}}for(let X=0;X<T;X++)for(let q=0;q<x;q++){const le=f+q+U*X,we=f+q+U*(X+1),V=f+(q+1)+U*(X+1),se=f+(q+1)+U*X;c.push(le,we,se),c.push(we,V,se),Z+=6}a.addGroup(d,Z,L),d+=Z,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cl extends Ut{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,f=t,d=2*h+f,m=n*2+r,_=i+1,p=new D,g=new D;for(let S=0;S<=m;S++){let M=0,v=0,b=0,E=0;if(S<=n){const L=S/n,C=L*Math.PI/2;v=-u-e*Math.cos(C),b=e*Math.sin(C),E=-e*Math.cos(C),M=L*h}else if(S<=n+r){const L=(S-n)/r;v=-u+L*t,b=e,E=0,M=h+L*f}else{const L=(S-n-r)/n,C=L*Math.PI/2;v=u+e*Math.sin(C),b=e*Math.cos(C),E=e*Math.sin(C),M=h+f+L*h}const x=Math.max(0,Math.min(1,M/d));let T=0;S===0?T=.5/i:S===m&&(T=-.5/i);for(let L=0;L<=i;L++){const C=L/i,R=C*Math.PI*2,I=Math.sin(R),O=Math.cos(R);g.x=-b*O,g.y=v,g.z=b*I,a.push(g.x,g.y,g.z),p.set(-b*O,E,b*I),p.normalize(),c.push(p.x,p.y,p.z),l.push(C+T,x)}if(S>0){const L=(S-1)*_;for(let C=0;C<i;C++){const R=L+C,I=L+C+1,O=S*_+C,P=S*_+C+1;o.push(R,I,O),o.push(I,P,O)}}}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class bo extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,u=new ae;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ot extends Ut{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let m=0;const _=[],p=n/2;let g=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(d,2));function S(){const v=new D,b=new D;let E=0;const x=(t-e)/n;for(let T=0;T<=r;T++){const L=[],C=T/r,R=C*(t-e)+e;for(let I=0;I<=i;I++){const O=I/i,P=O*c+a,U=Math.sin(P),G=Math.cos(P);b.x=R*U,b.y=-C*n+p,b.z=R*G,h.push(b.x,b.y,b.z),v.set(U,x,G).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-C),L.push(m++)}_.push(L)}for(let T=0;T<i;T++)for(let L=0;L<r;L++){const C=_[L][T],R=_[L+1][T],I=_[L+1][T+1],O=_[L][T+1];(e>0||L!==0)&&(u.push(C,R,O),E+=3),(t>0||L!==r-1)&&(u.push(R,I,O),E+=3)}l.addGroup(g,E,0),g+=E}function M(v){const b=m,E=new ae,x=new D;let T=0;const L=v===!0?e:t,C=v===!0?1:-1;for(let I=1;I<=i;I++)h.push(0,p*C,0),f.push(0,C,0),d.push(.5,.5),m++;const R=m;for(let I=0;I<=i;I++){const P=I/i*c+a,U=Math.cos(P),G=Math.sin(P);x.x=L*G,x.y=p*C,x.z=L*U,h.push(x.x,x.y,x.z),f.push(0,C,0),E.x=U*.5+.5,E.y=G*.5*C+.5,d.push(E.x,E.y),m++}for(let I=0;I<i;I++){const O=b+I,P=R+I;v===!0?u.push(P,P+1,O):u.push(P+1,P,O),T+=3}l.addGroup(g,T,v===!0?1:2),g+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ae:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,i=[],r=[],o=[],a=new D,c=new tt;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(rt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(rt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class ll extends qn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ae){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Dp extends ll{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Sh=new D,Mh=new D,ba=new hl,Ea=new hl,Aa=new hl;class ul extends qn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Mh.subVectors(i[0],i[1]).add(i[0]),l=Mh);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Sh.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Sh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),ba.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,m,_,p),Ea.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,m,_,p),Aa.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,m,_,p)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ea.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Aa.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ba.calc(c),Ea.calc(c),Aa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function yh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Op(s,e){const t=1-s;return t*t*e}function Up(s,e){return 2*(1-s)*s*e}function Fp(s,e){return s*s*e}function sr(s,e,t,n){return Op(s,e)+Up(s,t)+Fp(s,n)}function Bp(s,e){const t=1-s;return t*t*t*e}function kp(s,e){const t=1-s;return 3*t*t*s*e}function Hp(s,e){return 3*(1-s)*s*s*e}function Gp(s,e){return s*s*s*e}function rr(s,e,t,n,i){return Bp(s,e)+kp(s,t)+Hp(s,n)+Gp(s,i)}class hf extends qn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(e,i.x,r.x,o.x,a.x),rr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zp extends qn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(e,i.x,r.x,o.x,a.x),rr(e,i.y,r.y,o.y,a.y),rr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uf extends qn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vp extends qn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ff extends qn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(sr(e,i.x,r.x,o.x),sr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class df extends qn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(sr(e,i.x,r.x,o.x),sr(e,i.y,r.y,o.y),sr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pf extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(yh(a,c.x,l.x,u.x,h.x),yh(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}var Eo=Object.freeze({__proto__:null,ArcCurve:Dp,CatmullRomCurve3:ul,CubicBezierCurve:hf,CubicBezierCurve3:zp,EllipseCurve:ll,LineCurve:uf,LineCurve3:Vp,QuadraticBezierCurve:ff,QuadraticBezierCurve3:df,SplineCurve:pf});class Wp extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Eo[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Th extends Wp{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new uf(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ff(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new hf(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new ll(e,t,n,i,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yi extends Th{constructor(e){super(e),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Th().fromJSON(i))}return this}}function Xp(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=mf(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Zp(s,e,r,t)),s.length>80*t){a=s[0],c=s[1];let u=a,h=c;for(let f=t;f<i;f+=t){const d=s[f],m=s[f+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>h&&(h=m)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return gr(r,o,t,a,c,l,0),o}function mf(s,e,t,n,i){let r;if(i===a0(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=wh(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=wh(o/n|0,s[o],s[o+1],r);return r&&Ms(r,r.next)&&(_r(r),r=r.next),r}function Gi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ms(t,t.next)||Nt(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&t0(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Kp(s,n,i,r):Yp(s)){e.push(c.i,s.i,l.i),_r(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=qp(Gi(s),e),gr(s,e,t,n,i,r,2)):o===2&&$p(s,e,t,n,i,r):gr(Gi(s),e,t,n,i,r,1);break}}}function Yp(s){const e=s.prev,t=s,n=s.next;if(Nt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(i,r,o),h=Math.min(a,c,l),f=Math.max(i,r,o),d=Math.max(a,c,l);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Zs(i,a,r,c,o,l,m.x,m.y)&&Nt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Kp(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Nt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(u,h,f),_=Math.max(a,c,l),p=Math.max(u,h,f),g=Ac(d,m,e,t,n),S=Ac(_,p,e,t,n);let M=s.prevZ,v=s.nextZ;for(;M&&M.z>=g&&v&&v.z<=S;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=p&&M!==i&&M!==o&&Zs(a,u,c,h,l,f,M.x,M.y)&&Nt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Zs(a,u,c,h,l,f,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=p&&M!==i&&M!==o&&Zs(a,u,c,h,l,f,M.x,M.y)&&Nt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Zs(a,u,c,h,l,f,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function qp(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Ms(n,i)&&xf(n,t,t.next,i)&&xr(n,i)&&xr(i,n)&&(e.push(n.i,t.i,i.i),_r(t),_r(t.next),t=s=i),t=t.next}while(t!==s);return Gi(t)}function $p(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&s0(o,a)){let c=_f(o,a);o=Gi(o,o.next),c=Gi(c,c.next),gr(o,e,t,n,i,r,0),gr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Zp(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=mf(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(i0(l))}i.sort(Jp);for(let r=0;r<i.length;r++)t=Qp(i[r],t);return t}function Jp(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Qp(s,e){const t=jp(s,e);if(!t)return e;const n=_f(t,s);return Gi(n,n.next),Gi(t,t.next)}function jp(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Ms(s,t))return t;do{if(Ms(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&gf(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);xr(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&e0(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function e0(s,e){return Nt(s.prev,s,e.prev)<0&&Nt(e.next,s,s.next)<0}function t0(s,e,t,n){let i=s;do i.z===0&&(i.z=Ac(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,n0(i)}function n0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Ac(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function i0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function gf(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Zs(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&gf(s,e,t,n,i,r,o,a)}function s0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!r0(s,e)&&(xr(s,e)&&xr(e,s)&&o0(s,e)&&(Nt(s.prev,s,e.prev)||Nt(s,e.prev,e))||Ms(s,e)&&Nt(s.prev,s,s.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ms(s,e){return s.x===e.x&&s.y===e.y}function xf(s,e,t,n){const i=jr(Nt(s,e,t)),r=jr(Nt(s,e,n)),o=jr(Nt(t,n,s)),a=jr(Nt(t,n,e));return!!(i!==r&&o!==a||i===0&&Qr(s,t,e)||r===0&&Qr(s,n,e)||o===0&&Qr(t,s,n)||a===0&&Qr(t,e,n))}function Qr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function jr(s){return s>0?1:s<0?-1:0}function r0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&xf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function xr(s,e){return Nt(s.prev,s,s.next)<0?Nt(s,e,s.next)>=0&&Nt(s,s.prev,e)>=0:Nt(s,e,s.prev)<0||Nt(s,s.next,e)<0}function o0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function _f(s,e){const t=Rc(s.i,s.x,s.y),n=Rc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wh(s,e,t,n){const i=Rc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function a0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class c0{static triangulate(e,t,n=2){return Xp(e,t,n)}}class si{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return si.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];bh(e),Eh(n,e);let o=e.length;t.forEach(bh);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Eh(n,t[c]);const a=c0.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function bh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Eh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Mn extends Ut{constructor(e=new Yi([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ut(i,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:l0;let M,v=!1,b,E,x,T;if(g){M=g.getSpacedPoints(u),v=!0,f=!1;const ne=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(u,ne),E=new D,x=new D,T=new D}f||(p=0,d=0,m=0,_=0);const L=a.extractPoints(l);let C=L.shape;const R=L.holes;if(!si.isClockWise(C)){C=C.reverse();for(let ne=0,pe=R.length;ne<pe;ne++){const ue=R[ne];si.isClockWise(ue)&&(R[ne]=ue.reverse())}}function O(ne){const ue=10000000000000001e-36;let Ee=ne[0];for(let xe=1;xe<=ne.length;xe++){const Ke=xe%ne.length,Pe=ne[Ke],Je=Pe.x-Ee.x,it=Pe.y-Ee.y,lt=Je*Je+it*it,B=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(Ee.x),Math.abs(Ee.y)),Rt=ue*B*B;if(lt<=Rt){ne.splice(Ke,1),xe--;continue}Ee=Pe}}O(C),R.forEach(O);const P=R.length,U=C;for(let ne=0;ne<P;ne++){const pe=R[ne];C=C.concat(pe)}function G(ne,pe,ue){return pe||Ze("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(pe,ue)}const F=C.length;function Z(ne,pe,ue){let Ee,xe,Ke;const Pe=ne.x-pe.x,Je=ne.y-pe.y,it=ue.x-ne.x,lt=ue.y-ne.y,B=Pe*Pe+Je*Je,Rt=Pe*lt-Je*it;if(Math.abs(Rt)>Number.EPSILON){const Fe=Math.sqrt(B),ze=Math.sqrt(it*it+lt*lt),oe=pe.x-Je/Fe,mt=pe.y+Pe/Fe,Ue=ue.x-lt/ze,Re=ue.y+it/ze,A=((Ue-oe)*lt-(Re-mt)*it)/(Pe*lt-Je*it);Ee=oe+Pe*A-ne.x,xe=mt+Je*A-ne.y;const y=Ee*Ee+xe*xe;if(y<=2)return new ae(Ee,xe);Ke=Math.sqrt(y/2)}else{let Fe=!1;Pe>Number.EPSILON?it>Number.EPSILON&&(Fe=!0):Pe<-Number.EPSILON?it<-Number.EPSILON&&(Fe=!0):Math.sign(Je)===Math.sign(lt)&&(Fe=!0),Fe?(Ee=-Je,xe=Pe,Ke=Math.sqrt(B)):(Ee=Pe,xe=Je,Ke=Math.sqrt(B/2))}return new ae(Ee/Ke,xe/Ke)}const H=[];for(let ne=0,pe=U.length,ue=pe-1,Ee=ne+1;ne<pe;ne++,ue++,Ee++)ue===pe&&(ue=0),Ee===pe&&(Ee=0),H[ne]=Z(U[ne],U[ue],U[Ee]);const X=[];let q,le=H.concat();for(let ne=0,pe=P;ne<pe;ne++){const ue=R[ne];q=[];for(let Ee=0,xe=ue.length,Ke=xe-1,Pe=Ee+1;Ee<xe;Ee++,Ke++,Pe++)Ke===xe&&(Ke=0),Pe===xe&&(Pe=0),q[Ee]=Z(ue[Ee],ue[Ke],ue[Pe]);X.push(q),le=le.concat(q)}let we;if(p===0)we=si.triangulateShape(U,R);else{const ne=[],pe=[];for(let ue=0;ue<p;ue++){const Ee=ue/p,xe=d*Math.cos(Ee*Math.PI/2),Ke=m*Math.sin(Ee*Math.PI/2)+_;for(let Pe=0,Je=U.length;Pe<Je;Pe++){const it=G(U[Pe],H[Pe],Ke);Oe(it.x,it.y,-xe),Ee===0&&ne.push(it)}for(let Pe=0,Je=P;Pe<Je;Pe++){const it=R[Pe];q=X[Pe];const lt=[];for(let B=0,Rt=it.length;B<Rt;B++){const Fe=G(it[B],q[B],Ke);Oe(Fe.x,Fe.y,-xe),Ee===0&&lt.push(Fe)}Ee===0&&pe.push(lt)}}we=si.triangulateShape(ne,pe)}const V=we.length,se=m+_;for(let ne=0;ne<F;ne++){const pe=f?G(C[ne],le[ne],se):C[ne];v?(x.copy(b.normals[0]).multiplyScalar(pe.x),E.copy(b.binormals[0]).multiplyScalar(pe.y),T.copy(M[0]).add(x).add(E),Oe(T.x,T.y,T.z)):Oe(pe.x,pe.y,0)}for(let ne=1;ne<=u;ne++)for(let pe=0;pe<F;pe++){const ue=f?G(C[pe],le[pe],se):C[pe];v?(x.copy(b.normals[ne]).multiplyScalar(ue.x),E.copy(b.binormals[ne]).multiplyScalar(ue.y),T.copy(M[ne]).add(x).add(E),Oe(T.x,T.y,T.z)):Oe(ue.x,ue.y,h/u*ne)}for(let ne=p-1;ne>=0;ne--){const pe=ne/p,ue=d*Math.cos(pe*Math.PI/2),Ee=m*Math.sin(pe*Math.PI/2)+_;for(let xe=0,Ke=U.length;xe<Ke;xe++){const Pe=G(U[xe],H[xe],Ee);Oe(Pe.x,Pe.y,h+ue)}for(let xe=0,Ke=R.length;xe<Ke;xe++){const Pe=R[xe];q=X[xe];for(let Je=0,it=Pe.length;Je<it;Je++){const lt=G(Pe[Je],q[Je],Ee);v?Oe(lt.x,lt.y+M[u-1].y,M[u-1].x+ue):Oe(lt.x,lt.y,h+ue)}}}ge(),De();function ge(){const ne=i.length/3;if(f){let pe=0,ue=F*pe;for(let Ee=0;Ee<V;Ee++){const xe=we[Ee];ft(xe[2]+ue,xe[1]+ue,xe[0]+ue)}pe=u+p*2,ue=F*pe;for(let Ee=0;Ee<V;Ee++){const xe=we[Ee];ft(xe[0]+ue,xe[1]+ue,xe[2]+ue)}}else{for(let pe=0;pe<V;pe++){const ue=we[pe];ft(ue[2],ue[1],ue[0])}for(let pe=0;pe<V;pe++){const ue=we[pe];ft(ue[0]+F*u,ue[1]+F*u,ue[2]+F*u)}}n.addGroup(ne,i.length/3-ne,0)}function De(){const ne=i.length/3;let pe=0;he(U,pe),pe+=U.length;for(let ue=0,Ee=R.length;ue<Ee;ue++){const xe=R[ue];he(xe,pe),pe+=xe.length}n.addGroup(ne,i.length/3-ne,1)}function he(ne,pe){let ue=ne.length;for(;--ue>=0;){const Ee=ue;let xe=ue-1;xe<0&&(xe=ne.length-1);for(let Ke=0,Pe=u+p*2;Ke<Pe;Ke++){const Je=F*Ke,it=F*(Ke+1),lt=pe+Ee+Je,B=pe+xe+Je,Rt=pe+xe+it,Fe=pe+Ee+it;Xe(lt,B,Rt,Fe)}}}function Oe(ne,pe,ue){c.push(ne),c.push(pe),c.push(ue)}function ft(ne,pe,ue){je(ne),je(pe),je(ue);const Ee=i.length/3,xe=S.generateTopUV(n,i,Ee-3,Ee-2,Ee-1);nt(xe[0]),nt(xe[1]),nt(xe[2])}function Xe(ne,pe,ue,Ee){je(ne),je(pe),je(Ee),je(pe),je(ue),je(Ee);const xe=i.length/3,Ke=S.generateSideWallUV(n,i,xe-6,xe-3,xe-2,xe-1);nt(Ke[0]),nt(Ke[1]),nt(Ke[3]),nt(Ke[1]),nt(Ke[2]),nt(Ke[3])}function je(ne){i.push(c[ne*3+0]),i.push(c[ne*3+1]),i.push(c[ne*3+2])}function nt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return h0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Eo[i.type]().fromJSON(i)),new Mn(n,e.options)}}const l0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ae(r,o),new ae(a,c),new ae(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],_=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ae(o,1-c),new ae(l,1-h),new ae(f,1-m),new ae(_,1-g)]:[new ae(a,1-c),new ae(u,1-h),new ae(d,1-m),new ae(p,1-g)]}};function h0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ys extends Ut{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=rt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new D,f=new ae,d=new D,m=new D,_=new D;let p=0,g=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,g=e[S+1].y-e[S].y,d.x=g*1,d.y=-p,d.z=g*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:p=e[S+1].x-e[S].x,g=e[S+1].y-e[S].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(m)}for(let S=0;S<=t;S++){const M=n+S*u*i,v=Math.sin(M),b=Math.cos(M);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*v,h.y=e[E].y,h.z=e[E].x*b,o.push(h.x,h.y,h.z),f.x=S/t,f.y=E/(e.length-1),a.push(f.x,f.y);const x=c[3*E+0]*v,T=c[3*E+1],L=c[3*E+0]*b;l.push(x,T,L)}}for(let S=0;S<t;S++)for(let M=0;M<e.length-1;M++){const v=M+S*e.length,b=v,E=v+e.length,x=v+e.length+1,T=v+1;r.push(b,E,T),r.push(x,T,E)}this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.points,e.segments,e.phiStart,e.phiLength)}}class Ct extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const S=g*f-o;for(let M=0;M<l;M++){const v=M*h-r;m.push(v,-S,0),_.push(0,0,1),p.push(M/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<a;S++){const M=S+l*g,v=S+l*(g+1),b=S+1+l*(g+1),E=S+1+l*g;d.push(M,v,E),d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.width,e.height,e.widthSegments,e.heightSegments)}}class fl extends Ut{constructor(e=new Yi([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ut(i,3)),this.setAttribute("normal",new ut(r,3)),this.setAttribute("uv",new ut(o,2));function l(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;si.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){const S=m[p];si.isClockWise(S)===!0&&(m[p]=S.reverse())}const _=si.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){const S=m[p];d=d.concat(S)}for(let p=0,g=d.length;p<g;p++){const S=d[p];i.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,g=_.length;p<g;p++){const S=_[p],M=S[0]+h,v=S[1]+h,b=S[2]+h;n.push(M,v,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return u0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new fl(n,e.curveSegments)}}function u0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class vr extends Ut{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new D,f=new D,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const S=[],M=g/n,v=o+M*a,b=e*Math.cos(v),E=Math.sqrt(e*e-b*b);let x=0;g===0&&o===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const L=T/t,C=i+L*r;h.x=-E*Math.cos(C),h.y=b,h.z=E*Math.sin(C),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(L+x,1-M),S.push(l++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const M=u[g][S+1],v=u[g][S],b=u[g+1][S],E=u[g+1][S+1];(g!==0||o>0)&&d.push(M,v,E),(g!==n-1||c<Math.PI)&&d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fo extends Ut{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],u=[],h=[],f=new D,d=new D,m=new D;for(let _=0;_<=n;_++){const p=o+_/n*a;for(let g=0;g<=i;g++){const S=g/i*r;d.x=(e+t*Math.cos(p))*Math.cos(S),d.y=(e+t*Math.cos(p))*Math.sin(S),d.z=t*Math.sin(p),l.push(d.x,d.y,d.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(g/i),h.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){const g=(i+1)*_+p-1,S=(i+1)*(_-1)+p-1,M=(i+1)*(_-1)+p,v=(i+1)*_+p;c.push(g,S,v),c.push(S,M,v)}this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Bo extends Ut{constructor(e=new df(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ae;let u=new D;const h=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(d,2));function _(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),S(),g()}function p(M){u=e.getPointAt(M/t,u);const v=o.normals[M],b=o.binormals[M];for(let E=0;E<=i;E++){const x=E/i*Math.PI*2,T=Math.sin(x),L=-Math.cos(x);c.x=L*v.x+T*b.x,c.y=L*v.y+T*b.y,c.z=L*v.z+T*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=t;M++)for(let v=1;v<=i;v++){const b=(i+1)*(M-1)+(v-1),E=(i+1)*M+(v-1),x=(i+1)*M+v,T=(i+1)*(M-1)+v;m.push(b,E,T),m.push(E,x,T)}}function S(){for(let M=0;M<=t;M++)for(let v=0;v<=i;v++)l.x=M/t,l.y=v/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bo(new Eo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ts(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Ah(i))i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Ah(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function on(s){const e={};for(let t=0;t<s.length;t++){const n=Ts(s[t]);for(const i in n)e[i]=n[i]}return e}function Ah(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function f0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const d0={clone:Ts,merge:on};var p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(i.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new At().fromArray(i.value);break;case"m3":this.uniforms[n].value=new et().fromArray(i.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class g0 extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ne extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cn extends Ne{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class x0 extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _0 extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function yi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Js(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function v0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Rh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function S0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Rs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class M0 extends Rs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kl,endingEnd:kl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hl:r=e,a=2*t-n;break;case Gl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hl:o=e,c=2*n-t;break;case Gl:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,S=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,M=(-1-d)*p+(1.5+d)*_+.5*m,v=d*p-d*_;for(let b=0;b!==a;++b)r[b]=g*o[u+b]+S*o[l+b]+M*o[c+b]+v*o[h+b];return r}}class y0 extends Rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class T0 extends Rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class w0 extends Rs{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){const m=(n-t)/(i-t),_=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*_+o[c+p]*m;return r}const f=a*2,d=e-1;for(let m=0;m!==a;++m){const _=o[l+m],p=o[c+m],g=d*f+m*2,S=h[g],M=h[g+1],v=e*f+m*2,b=u[v],E=u[v+1],x=E0(n,t,S,b,i);r[m]=Sf(x,_,M,E,p)}return r}}function Sf(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function b0(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function E0(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=Sf(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const c=b0(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}class Dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yi(t,this.TimeBufferType),this.values=yi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yi(e.times,Array),values:yi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Js(e.settings)&&(n.settings={inTangents:yi(e.settings.inTangents,Array),outTangents:yi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new T0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new y0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new M0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new w0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case ea:t=this.InterpolantFactoryMethodSmooth;break;case Bl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return ea;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Js(this.settings)&&(Ch(this.settings.inTangents,e),Ch(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Js(this.settings)&&(Ph(this.settings.inTangents,e),Ph(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){Ze("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ze("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Gd(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){Ze("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ea,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[f+m]||_!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Js(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Ch(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Ph(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=fr;class Cs extends Dn{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=ur;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Mf extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}Mf.prototype.ValueTypeName="color";class Sr extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}Sr.prototype.ValueTypeName="number";class A0 extends Rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)hi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Mr extends Dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new A0(this.times,this.values,this.getValueSize(),e)}}Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends Dn{constructor(e,t,n){super(e,t,n)}}Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=ur;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}Ao.prototype.ValueTypeName="vector";class R0{constructor(e="",t=-1,n=[],i=Pd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(P0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=v0(c);c=Rh(c,1,u),l=Rh(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Sr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function C0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return Ao;case"color":return Mf;case"quaternion":return Mr;case"bool":case"boolean":return Cs;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function P0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=C0(s.type);if(s.times===void 0){const n=[],i=[];S0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Js(s.settings)&&(t.settings={inTangents:yi(s.settings.inTangents,Float32Array),outTangents:yi(s.settings.outTangents,Float32Array)}),t}const ri={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Lh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Lh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Lh(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class L0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const I0=new L0;class Ls{constructor(e){this.manager=e!==void 0?e:I0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class N0 extends Error{constructor(e,t){super(e),this.response=t}}class yf extends Ls{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ri.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:i});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ti[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const p=new ReadableStream({start(g){S();function S(){h.read().then(({done:M,value:v})=>{if(M)g.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let E=0,x=u.length;E<x;E++){const T=u[E];T.onProgress&&T.onProgress(b)}g.enqueue(v),S()}},M=>{g.error(M)})}}});return new Response(p)}else throw new N0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{ri.add(`file:${e}`,l);const u=ti[e];delete ti[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const rs=new WeakMap;class D0 extends Ls{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ri.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=rs.get(o);h===void 0&&(h=[],rs.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=pr("img");function c(){u(),t&&t(this);const h=rs.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}rs.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),ri.remove(`image:${e}`);const f=rs.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(h)}rs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ri.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}}class O0 extends Ls{constructor(e){super(e)}load(e,t,n,i){const r=new Vt,o=new D0(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ko extends Pt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class U0 extends ko{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ra=new tt,Ih=new D,Nh=new D;class dl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ih),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ra,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===dr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const eo=new D,to=new hi,On=new D;class Tf extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(eo,to,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(eo,to,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _i=new D,Dh=new ae,Oh=new ae;class ln extends Tf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Oh),t.subVectors(Oh,Dh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class F0 extends dl{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class wf extends ko{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new F0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class B0 extends dl{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class zi extends ko{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new B0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ho extends Tf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class k0 extends dl{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Go extends ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new k0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class or{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ca=new WeakMap;class H0 extends Ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ri.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Ca.has(o)===!0?(i&&i(Ca.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ri.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ca.set(c,l),ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ri.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const os=-90,as=1;class Cc extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(os,as,e,t);i.layers=this.layers,this.add(i);const r=new ln(os,as,e,t);r.layers=this.layers,this.add(r);const o=new ln(os,as,e,t);o.layers=this.layers,this.add(o);const a=new ln(os,as,e,t);a.layers=this.layers,this.add(a);const c=new ln(os,as,e,t);c.layers=this.layers,this.add(c);const l=new ln(os,as,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class G0 extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const pl="\\[\\]\\.:\\/",z0=new RegExp("["+pl+"]","g"),ml="[^"+pl+"]",V0="[^"+pl.replace("\\.","")+"]",W0=/((?:WC+[\/:])*)/.source.replace("WC",ml),X0=/(WCOD+)?/.source.replace("WCOD",V0),Y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ml),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ml),q0=new RegExp("^"+W0+X0+Y0+K0+"$"),$0=["material","materials","bones","map"];class Z0{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z0,"")}static parseTrackName(e){const t=q0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);$0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=Z0;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Uh=new tt;class J0{constructor(e,t,n=0,i=1/0){this.ray=new wr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(e,t=!0,n=[]){return Pc(e,this,n,t),n.sort(Fh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Pc(e[i],this,n,t);return n.sort(Fh),n}}function Fh(s,e){return s.distance-e.distance}function Pc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Pc(r[o],e,t,!0)}}function Bh(s,e,t,n){const i=Q0(n);switch(t){case Vu:return s*e;case Xc:return s*e/i.components*i.byteLength;case Yc:return s*e/i.components*i.byteLength;case Hi:return s*e*2/i.components*i.byteLength;case Kc:return s*e*2/i.components*i.byteLength;case Wu:return s*e*3/i.components*i.byteLength;case Cn:return s*e*4/i.components*i.byteLength;case qc:return s*e*4/i.components*i.byteLength;case lo:case ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $a:case Ja:return Math.max(s,16)*Math.max(e,8)/4;case qa:case Za:return Math.max(s,8)*Math.max(e,8)/2;case Qa:case ja:case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ec:case xo:case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _c:case vc:case Sc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Mc:case yc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _o:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Q0(s){switch(s){case xn:case ku:return{byteLength:1,components:1};case hr:case Hu:case In:return{byteLength:2,components:1};case Vc:case Wc:return{byteLength:2,components:4};case Xn:case zc:case Tn:return{byteLength:4,components:1};case Gu:case zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);function bf(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function j0(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
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
#endif`,nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,om=`#ifdef USE_AOMAP
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
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,pm=`#ifdef USE_BUMPMAP
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,wm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
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
#endif`,Jm=`uniform sampler2D dfgLUT;
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
}`,Qm=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
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
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bg=`float getShadowMask() {
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
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform float backgroundBlurriness;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,ax=`#define DISTANCE
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
}`,cx=`#define DISTANCE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
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
}`,fx=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define LAMBERT
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
}`,xx=`#define MATCAP
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
}`,_x=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,Sx=`#define NORMAL
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
}`,Mx=`#define PHONG
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
}`,yx=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Ax=`uniform float size;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Px=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:em,alphahash_pars_fragment:tm,alphamap_fragment:nm,alphamap_pars_fragment:im,alphatest_fragment:sm,alphatest_pars_fragment:rm,aomap_fragment:om,aomap_pars_fragment:am,batching_pars_vertex:cm,batching_vertex:lm,begin_vertex:hm,beginnormal_vertex:um,bsdfs:fm,iridescence_fragment:dm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:gm,clipping_planes_pars_vertex:xm,clipping_planes_vertex:_m,color_fragment:vm,color_pars_fragment:Sm,color_pars_vertex:Mm,color_vertex:ym,common:Tm,defaultnormal_vertex:wm,displacementmap_pars_vertex:bm,displacementmap_vertex:Em,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Lm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Nm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Xm,envmap_vertex:Om,fog_vertex:Um,fog_pars_vertex:Fm,fog_fragment:Bm,fog_pars_fragment:km,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Gm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Wm,lights_toon_fragment:Ym,lights_toon_pars_fragment:Km,lights_phong_fragment:qm,lights_phong_pars_fragment:$m,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:Qm,lights_fragment_maps:jm,lights_fragment_end:eg,lightprobes_pars_fragment:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:cg,map_particle_pars_fragment:lg,metalnessmap_fragment:hg,metalnessmap_pars_fragment:ug,morphinstance_vertex:fg,morphcolor_vertex:dg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:xg,normal_fragment_maps:_g,normal_pars_fragment:vg,normal_pars_vertex:Sg,normal_vertex:Mg,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Eg,opaque_fragment:Ag,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Lg,dithering_pars_fragment:Ig,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:Ug,shadowmap_vertex:Fg,shadowmask_pars_fragment:Bg,skinbase_vertex:kg,skinning_pars_vertex:Hg,skinning_vertex:Gg,skinnormal_vertex:zg,specularmap_fragment:Vg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:Yg,transmission_fragment:Kg,transmission_pars_fragment:qg,uv_pars_fragment:$g,uv_pars_vertex:Zg,uv_vertex:Jg,worldpos_vertex:Qg,background_vert:jg,background_frag:ex,backgroundCube_vert:tx,backgroundCube_frag:nx,cube_vert:ix,cube_frag:sx,depth_vert:rx,depth_frag:ox,distance_vert:ax,distance_frag:cx,equirect_vert:lx,equirect_frag:hx,linedashed_vert:ux,linedashed_frag:fx,meshbasic_vert:dx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:xx,meshmatcap_frag:_x,meshnormal_vert:vx,meshnormal_frag:Sx,meshphong_vert:Mx,meshphong_frag:yx,meshphysical_vert:Tx,meshphysical_frag:wx,meshtoon_vert:bx,meshtoon_frag:Ex,points_vert:Ax,points_frag:Rx,shadow_vert:Cx,shadow_frag:Px,sprite_vert:Lx,sprite_frag:Ix},be={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Bn={basic:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:on([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:on([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new $e(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:on([be.points,be.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:on([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:on([be.common,be.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:on([be.sprite,be.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:on([be.common,be.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:on([be.lights,be.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Bn.physical={uniforms:on([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const no={r:0,b:0,g:0},Nx=new tt,Ef=new et;Ef.set(-1,0,0,0,1,0,0,0,1);function Dx(s,e,t,n,i,r){const o=new $e(0);let a=i===!0?0:1,c,l,u=null,h=0,f=null;function d(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){const v=S.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(S){let M=!1;const v=d(S);v===null?p(o,a):v&&v.isColor&&(p(v,1),M=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,M){const v=d(M);v&&v.isCubeTexture?(l===void 0&&(l=new ee(new Ye(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ts(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ef),l.material.toneMapped=ht.getTransfer(v.colorSpace)!==yt,(u!==v||h!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ee(new Ct(2,2),new ci({name:"BackgroundMaterial",uniforms:Ts(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(no,vf(s)),t.buffers.color.setClear(no.r,no.g,no.b,M,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:m,addToRenderList:_,dispose:g}}function Ox(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(R,I,O,P,U){let G=!1;const F=h(R,P,O,I);r!==F&&(r=F,l(r.object)),G=d(R,P,O,U),G&&m(R,P,O,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(R,I,O,P),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return s.createVertexArray()}function l(R){return s.bindVertexArray(R)}function u(R){return s.deleteVertexArray(R)}function h(R,I,O,P){const U=P.wireframe===!0;let G=n[I.id];G===void 0&&(G={},n[I.id]=G);const F=R.isInstancedMesh===!0?R.id:0;let Z=G[F];Z===void 0&&(Z={},G[F]=Z);let H=Z[O.id];H===void 0&&(H={},Z[O.id]=H);let X=H[U];return X===void 0&&(X=f(c()),H[U]=X),X}function f(R){const I=[],O=[],P=[];for(let U=0;U<t;U++)I[U]=0,O[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:P,object:R,attributes:{},index:null}}function d(R,I,O,P){const U=r.attributes,G=I.attributes;let F=0;const Z=O.getAttributes();for(const H in Z)if(Z[H].location>=0){const q=U[H];let le=G[H];if(le===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),q===void 0||q.attribute!==le||le&&q.data!==le.data)return!0;F++}return r.attributesNum!==F||r.index!==P}function m(R,I,O,P){const U={},G=I.attributes;let F=0;const Z=O.getAttributes();for(const H in Z)if(Z[H].location>=0){let q=G[H];q===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));const le={};le.attribute=q,q&&q.data&&(le.data=q.data),U[H]=le,F++}r.attributes=U,r.attributesNum=F,r.index=P}function _(){const R=r.newAttributes;for(let I=0,O=R.length;I<O;I++)R[I]=0}function p(R){g(R,0)}function g(R,I){const O=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;O[R]=1,P[R]===0&&(s.enableVertexAttribArray(R),P[R]=1),U[R]!==I&&(s.vertexAttribDivisor(R,I),U[R]=I)}function S(){const R=r.newAttributes,I=r.enabledAttributes;for(let O=0,P=I.length;O<P;O++)I[O]!==R[O]&&(s.disableVertexAttribArray(O),I[O]=0)}function M(R,I,O,P,U,G,F){F===!0?s.vertexAttribIPointer(R,I,O,U,G):s.vertexAttribPointer(R,I,O,P,U,G)}function v(R,I,O,P){_();const U=P.attributes,G=O.getAttributes(),F=I.defaultAttributeValues;for(const Z in G){const H=G[Z];if(H.location>=0){let X=U[Z];if(X===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),X!==void 0){const q=X.normalized,le=X.itemSize,we=e.get(X);if(we===void 0)continue;const V=we.buffer,se=we.type,ge=we.bytesPerElement,De=se===s.INT||se===s.UNSIGNED_INT||X.gpuType===zc;if(X.isInterleavedBufferAttribute){const he=X.data,Oe=he.isInterleavedBuffer===!0?he.stride:he.itemSize,ft=X.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Xe=0;Xe<H.locationSize;Xe++)g(H.location+Xe,he.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Xe=0;Xe<H.locationSize;Xe++)p(H.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,V);for(let Xe=0;Xe<H.locationSize;Xe++)M(H.location+Xe,le/H.locationSize,se,q,Oe*ge,(ft+le/H.locationSize*Xe)*ge,De)}else{if(X.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)g(H.location+he,X.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let he=0;he<H.locationSize;he++)p(H.location+he);s.bindBuffer(s.ARRAY_BUFFER,V);for(let he=0;he<H.locationSize;he++)M(H.location+he,le/H.locationSize,se,q,le*ge,le/H.locationSize*he*ge,De)}}else if(F!==void 0){const q=F[Z];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(H.location,q);break;case 3:s.vertexAttrib3fv(H.location,q);break;case 4:s.vertexAttrib4fv(H.location,q);break;default:s.vertexAttrib1fv(H.location,q)}}}}S()}function b(){L();for(const R in n){const I=n[R];for(const O in I){const P=I[O];for(const U in P){const G=P[U];for(const F in G)u(G[F].object),delete G[F];delete P[U]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;const I=n[R.id];for(const O in I){const P=I[O];for(const U in P){const G=P[U];for(const F in G)u(G[F].object),delete G[F];delete P[U]}}delete n[R.id]}function x(R){for(const I in n){const O=n[I];for(const P in O){const U=O[P];if(U[R.id]===void 0)continue;const G=U[R.id];for(const F in G)u(G[F].object),delete G[F];delete U[R.id]}}}function T(R){for(const I in n){const O=n[I],P=R.isInstancedMesh===!0?R.id:0,U=O[P];if(U!==void 0){for(const G in U){const F=U[G];for(const Z in F)u(F[Z].object),delete F[Z];delete U[G]}delete O[P],Object.keys(O).length===0&&delete n[I]}}}function L(){C(),o=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function Ux(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Fx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Cn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const T=x===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==xn&&x!==Tn&&!T&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(We("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:E}}function Bx(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Mi,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?u(null):l();else{const S=r?0:n,M=S*4;let v=g.clippingState||null;c.value=v,v=u(m,f,M,d);for(let b=0;b!==M;++b)v[b]=t[b];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}class gl extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new af(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ye(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:ds});r.uniforms.tEquirect.value=t;const o=new ee(i,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=zt),new Cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const kh=256,kx=3,Hx=20,Af=256,Rf=16,Gx=3,zx=new D,Vx=new $e;class Ro{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cc(1,10,null),this._boxMesh=new ee(new Ye(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=zx}=r,c=this._renderer;this._setSize(o);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,m=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(Vx));const p=new Cc(n,i,u);return p.position.copy(a),p.update(c,e),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=m,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(kh,Ju(e))}_fromTexture(e,t){e.mapping===xs||e.mapping===lr?this._setSize(e.image.length===0?kh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Hh(e,!1,!1),n=Math.log2(e)-kx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===xs||e.mapping===lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Wx(),this._integrationMaterial=Xx());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Rf);for(let o=0;o<=n;o++){const a=Ro.lodToRoughness(o,n);if(o>n-Gx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const c=a>0?Math.log2(t)+.5*Math.log2(6/(Af*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Yx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function Hh(s,e,t){return new gl(s,{minFilter:Hn,generateMipmaps:e,type:In,colorSpace:_n,depthBuffer:t})}function br(s,e,t){return new ci({name:s,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:fn,blending:ds,depthTest:!1,depthWrite:!1})}function Wx(){return br("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Af}u

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
	`)}function Xx(){return br("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rf}},`

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
	`)}function Yx(){return br("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hx}
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
	`)}function Gh(){return br("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zh(){return br("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Kx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qo||d===jo)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new gl(m.height);return _.fromEquirectangularTexture(s,f),e.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,m=d===Qo||d===jo,_=d===xs||d===lr;if(m||_){let p=t.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ro(s)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&c(S)?(n===null&&(n=new Ro(s)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===Qo?f.mapping=xs:d===jo&&(f.mapping=lr),f}function c(f){let d=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function qx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ps("WebGLRenderer: "+n+" extension not supported."),i}}}function $x(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(const p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);const _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(m){const _=m.attributes;for(const p in _)e.update(_[p],s.ARRAY_BUFFER)}function h(m){const _=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const S=_!==null?_.array.length:p.array.length/3-1,M=p.count>=65535?nf:tf,v=new M(Math.ceil(S/3)*6,1),b=v.array;if(_!==null){const x=_.array;g=_.version;for(let T=0,L=0;T<S;T+=3){const C=x[T+0],R=x[T+1],I=x[T+2];b[L++]=C,b[L++]=R,b[L++]=R,b[L++]=I,b[L++]=I,b[L++]=C}}else{g=p.version;for(let x=0,T=0;x<S;x+=3){const L=x+0,C=x+1,R=x+2;b[T++]=L,b[T++]=C,b[T++]=C,b[T++]=R,b[T++]=R,b[T++]=L}}v.version=g;const E=r.get(m);E&&e.remove(E),r.set(m,v)}function f(m){const _=r.get(m);if(_){const p=m.index;p!==null&&_.version<p.version&&h(m)}else h(m);return r.get(m)}function d(){for(const m in i){const _=i[m].deref();_!==void 0&&c(_)}}return{get:l,update:u,getWireframeAttribute:f,dispose:d}}function Zx(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function l(h,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Jx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qx(s,e,t){const n=new WeakMap,i=new At;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let C=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var d=C;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let b=a.attributes.position.count*v,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const x=new Float32Array(b*E*4*h),T=new Qu(x,b,E,h);T.type=Tn,T.needsUpdate=!0;const L=v*4;for(let R=0;R<h;R++){const I=g[R],O=S[R],P=M[R],U=b*E*4*R;for(let G=0;G<I.count;G++){const F=G*L;m===!0&&(i.fromBufferAttribute(I,G),x[U+F+0]=i.x,x[U+F+1]=i.y,x[U+F+2]=i.z,x[U+F+3]=0),_===!0&&(i.fromBufferAttribute(O,G),x[U+F+4]=i.x,x[U+F+5]=i.y,x[U+F+6]=i.z,x[U+F+7]=0),p===!0&&(i.fromBufferAttribute(P,G),x[U+F+8]=i.x,x[U+F+9]=i.y,x[U+F+10]=i.z,x[U+F+11]=P.itemSize===4?i.w:1)}}f={count:h,texture:T,size:new ae(b,E)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<l.length;p++)m+=l[p];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function jx(s,e,t,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const e_={[Pu]:"LINEAR_TONE_MAPPING",[Lu]:"REINHARD_TONE_MAPPING",[Iu]:"CINEON_TONE_MAPPING",[Nu]:"ACES_FILMIC_TONE_MAPPING",[Ou]:"AGX_TONE_MAPPING",[Uu]:"NEUTRAL_TONE_MAPPING",[Du]:"CUSTOM_TONE_MAPPING"};function t_(s,e,t,n,i,r){const o=new Ln(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null,l=null;const u=new Ut;u.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ut([0,2,0,0,2,0],2));const h=new g0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ee(u,h),d=new Ho(-1,1,1,-1,0,1);let m=null,_=null,p=!1,g,S=null,M=[],v=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),c!==null&&c.setSize(b,E);for(let x=0;x<M.length;x++){const T=M[x];T.setSize&&T.setSize(b,E)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;const E=o.width,x=o.height;M.length>0&&a===null&&(a=new Ln(E,x,{type:In,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(E,x,{type:In,depthBuffer:!1,stencilBuffer:!1}));const T=i===!0&&M.some(L=>L.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&l===null&&(l=new Ss(E,x),r===!0&&(l.format=wi,l.type=_s)),o.dispose(),o.depthTexture=T?l:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let L=0;L<M.length;L++){const C=M[L];C.setSize&&C.setSize(E,x),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(b,E){if(p||b.toneMapping===zn&&M.length===0)return!1;if(S=E,E!==null){const x=E.width,T=E.height;(o.width!==x||o.height!==T)&&this.setSize(x,T)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=zn,!0},this.hasRenderPass=function(){return v},this.end=function(b,E){b.toneMapping=g,p=!0;let x=o,T=a;for(let L=0;L<M.length;L++){const C=M[L];C.enabled!==!1&&(C.render(b,T,x,E),C.needsSwap!==!1&&(x=T,T=T===a?c:a))}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,h.defines={},ht.getTransfer(m)===yt&&(h.defines.SRGB_TRANSFER="");const L=e_[_];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(S),b.render(f,d),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const Cf=new Vt,Pf=new Ss(1,1),Lf=new cf(1),If=new Qu,Nf=new up,Df=new af,Vh=[],Wh=[],Xh=new Float32Array(16),Yh=new Float32Array(9),Kh=new Float32Array(4);function Is(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Vh[i];if(r===void 0&&(r=new Float32Array(i),Vh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zo(s,e){let t=Wh[e];t===void 0&&(t=new Int32Array(e),Wh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function n_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function i_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2fv(this.addr,e),Xt(t,e)}}function s_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;s.uniform3fv(this.addr,e),Xt(t,e)}}function r_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4fv(this.addr,e),Xt(t,e)}}function o_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Kh.set(n),s.uniformMatrix2fv(this.addr,!1,Kh),Xt(t,n)}}function a_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Yh.set(n),s.uniformMatrix3fv(this.addr,!1,Yh),Xt(t,n)}}function c_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Xh.set(n),s.uniformMatrix4fv(this.addr,!1,Xh),Xt(t,n)}}function l_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function h_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2iv(this.addr,e),Xt(t,e)}}function u_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3iv(this.addr,e),Xt(t,e)}}function f_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4iv(this.addr,e),Xt(t,e)}}function d_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function p_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2uiv(this.addr,e),Xt(t,e)}}function m_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3uiv(this.addr,e),Xt(t,e)}}function g_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4uiv(this.addr,e),Xt(t,e)}}function Vo(s){return s.version===0&&(s.compareFunction=qu,s.needsUpdate=!0),s}function x_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Vo(Pf):r=Cf,t.setTexture2D(e||r,i)}function __(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nf,i)}function v_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Vo(Lf):r=Df,t.setTextureCube(e||r,i)}function S_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||If,i)}function M_(s){switch(s){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return f_;case 5125:return d_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return S_}}function y_(s,e){s.uniform1fv(this.addr,e)}function T_(s,e){const t=Is(e,this.size,2);s.uniform2fv(this.addr,t)}function w_(s,e){const t=Is(e,this.size,3);s.uniform3fv(this.addr,t)}function b_(s,e){const t=Is(e,this.size,4);s.uniform4fv(this.addr,t)}function E_(s,e){const t=Is(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function A_(s,e){const t=Is(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function R_(s,e){const t=Is(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function C_(s,e){s.uniform1iv(this.addr,e)}function P_(s,e){s.uniform2iv(this.addr,e)}function L_(s,e){s.uniform3iv(this.addr,e)}function I_(s,e){s.uniform4iv(this.addr,e)}function N_(s,e){s.uniform1uiv(this.addr,e)}function D_(s,e){s.uniform2uiv(this.addr,e)}function O_(s,e){s.uniform3uiv(this.addr,e)}function U_(s,e){s.uniform4uiv(this.addr,e)}function F_(s,e,t){const n=this.cache,i=e.length,r=zo(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Vo(Pf):o=Cf;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function B_(s,e,t){const n=this.cache,i=e.length,r=zo(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Nf,r[o])}function k_(s,e,t){const n=this.cache,i=e.length,r=zo(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Vo(Lf):o=Df;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function H_(s,e,t){const n=this.cache,i=e.length,r=zo(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||If,r[o])}function G_(s){switch(s){case 5126:return y_;case 35664:return T_;case 35665:return w_;case 35666:return b_;case 35674:return E_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return I_;case 5125:return N_;case 36294:return D_;case 36295:return O_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return H_}}class z_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}}class V_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G_(t.type)}}class W_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function qh(s,e){s.seq.push(e),s.map[e.id]=e}function X_(s,e,t){const n=s.name,i=n.length;for(Pa.lastIndex=0;;){const r=Pa.exec(n),o=Pa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){qh(t,l===void 0?new z_(a,s,e):new V_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new W_(a),qh(t,h)),t=h}}}class po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);X_(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function $h(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Y_=37297;let K_=0;function q_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Zh=new et;function $_(s){ht._getMatrix(Zh,ht.workingColorSpace,s);const e=`mat3( ${Zh.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case vo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+q_(s.getShaderSource(e),a)}else return r}function Z_(s,e){const t=$_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const J_={[Pu]:"Linear",[Lu]:"Reinhard",[Iu]:"Cineon",[Nu]:"ACESFilmic",[Ou]:"AgX",[Uu]:"Neutral",[Du]:"Custom"};function Q_(s,e){const t=J_[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const io=new D;function j_(){ht.getLuminanceCoefficients(io);const s=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function tv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Qs(s){return s!==""}function Qh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(s){return s.replace(iv,sv)}function sv(s,e){const t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Lc(t)}const rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(s){return s.replace(rv,ov)}function ov(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const av={[er]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function cv(s){return av[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lv={[lr]:"ENVMAP_MODE_REFRACTION"};function hv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uv={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function fv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uv[s.combine]||"ENVMAP_BLENDING_NONE"}function dv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=cv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=hv(t),h=fv(t),f=ev(t),d=tv(r),m=i.createProgram();let _,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Qs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(_=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?st.tonemapping_pars_fragment:"",t.toneMapping!==zn?Q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Z_("linearToOutputTexel",t.outputColorSpace),j_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Lc(o),o=Qh(o,t),o=jh(o,t),a=Lc(a),a=Qh(a,t),a=jh(a,t),o=eu(o),a=eu(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=g+_+o,M=g+p+a,v=$h(i,i.VERTEX_SHADER,S),b=$h(i,i.FRAGMENT_SHADER,M);i.attachShader(m,v),i.attachShader(m,b),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(C){if(s.debug.checkShaderErrors){const R=i.getProgramInfoLog(m)||"",I=i.getShaderInfoLog(v)||"",O=i.getShaderInfoLog(b)||"",P=R.trim(),U=I.trim(),G=O.trim();let F=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,v,b);else{const H=Jh(i,v,"vertex"),X=Jh(i,b,"fragment");Ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+H+`
`+X)}else P!==""?We("WebGLProgram: Program Info Log:",P):(U===""||G==="")&&(Z=!1);Z&&(C.diagnostics={runnable:F,programLog:P,vertexShader:{log:U,prefix:_},fragmentShader:{log:G,prefix:p}})}i.deleteShader(v),i.deleteShader(b),x=new po(i,m),T=nv(i,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(m,Y_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=b,this}let pv=0;class mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gv(e),t.set(e,n)),n}}class gv{constructor(e){this.id=pv++,this.code=e,this.usedTimes=0}}function xv(s){return s===Hi||s===xo||s===_o}function _v(s,e,t,n,i,r){const o=new jc,a=new mv,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,L,C,R,I){const O=C.fog,P=R.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||U,G),Z=f[x.type];let H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));const X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,q=X!==void 0?X.length:0;let le=0;P.morphAttributes.position!==void 0&&(le=1),P.morphAttributes.normal!==void 0&&(le=2),P.morphAttributes.color!==void 0&&(le=3);let we,V,se,ge;if(Z){const Te=Bn[Z];we=Te.vertexShader,V=Te.fragmentShader}else{we=x.vertexShader,V=x.fragmentShader;const Te=a.getVertexShaderStage(x),St=a.getFragmentShaderStage(x);a.update(x,Te,St),se=Te.id,ge=St.id}const De=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Oe=R.isInstancedMesh===!0,ft=R.isBatchedMesh===!0,Xe=!!x.map,je=!!x.matcap,nt=!!F,ne=nt&&F.isPMREMTexture===!0,pe=!!x.aoMap,ue=!!x.lightMap,Ee=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,Ke=!!x.displacementMap,Pe=!!x.emissiveMap,Je=!!x.metalnessMap,it=!!x.roughnessMap,lt=x.anisotropy>0,B=x.clearcoat>0,Rt=x.diffuseRoughness>0,Fe=x.dispersion>0,ze=x.retroreflectivity>0,oe=x.iridescence>0,mt=x.sheen>0,Ue=x.transmission>0,Re=lt&&!!x.anisotropyMap,A=B&&!!x.clearcoatMap,y=B&&!!x.clearcoatNormalMap,z=B&&!!x.clearcoatRoughnessMap,ce=Rt&&!!x.diffuseRoughnessMap,ie=oe&&!!x.iridescenceMap,de=oe&&!!x.iridescenceThicknessMap,me=mt&&!!x.sheenColorMap,$=mt&&!!x.sheenRoughnessMap,Q=!!x.specularMap,_e=!!x.specularColorMap,N=!!x.specularIntensityMap,te=Ue&&!!x.transmissionMap,J=Ue&&!!x.thicknessMap,Se=!!x.gradientMap,fe=!!x.alphaMap,ve=x.alphaTest>0,Ve=!!x.alphaHash,Le=!!x.extensions;let re=zn;x.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(re=s.toneMapping);const Ie=ne?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,qe={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:we,fragmentShader:V,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:ft,batchingColor:ft&&R._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&R.instanceColor!==null,instancingMorph:Oe&&R.morphTexture!==null,outputColorSpace:De===null?s.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:je,envMap:nt,envMapMode:nt&&F.mapping,envMapPMREM:ne,envMapMaxLod:ne?Ie.length-1:null,envMapSize:ne?Ie[0].width:null,aoMap:pe,lightMap:ue,bumpMap:Ee,normalMap:xe,displacementMap:Ke,emissiveMap:Pe,normalMapObjectSpace:xe&&x.normalMapType===Nd,normalMapTangentSpace:xe&&x.normalMapType===bc,packedNormalMap:xe&&x.normalMapType===bc&&xv(x.normalMap.format),metalnessMap:Je,roughnessMap:it,anisotropy:lt,anisotropyMap:Re,clearcoat:B,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:z,diffuseRoughness:Rt,diffuseRoughnessMap:ce,dispersion:Fe,retroreflection:ze,iridescence:oe,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:mt,sheenColorMap:me,sheenRoughnessMap:$,specularMap:Q,specularColorMap:_e,specularIntensityMap:N,transmission:Ue,transmissionMap:te,thicknessMap:J,gradientMap:Se,opaque:x.transparent===!1&&x.blending===tr&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:ve,alphaHash:Ve,combine:x.combine,mapUv:Xe&&d(x.map.channel),aoMapUv:pe&&d(x.aoMap.channel),lightMapUv:ue&&d(x.lightMap.channel),bumpMapUv:Ee&&d(x.bumpMap.channel),normalMapUv:xe&&d(x.normalMap.channel),displacementMapUv:Ke&&d(x.displacementMap.channel),emissiveMapUv:Pe&&d(x.emissiveMap.channel),metalnessMapUv:Je&&d(x.metalnessMap.channel),roughnessMapUv:it&&d(x.roughnessMap.channel),anisotropyMapUv:Re&&d(x.anisotropyMap.channel),clearcoatMapUv:A&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&d(x.sheenRoughnessMap.channel),specularMapUv:Q&&d(x.specularMap.channel),specularColorMapUv:_e&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:te&&d(x.transmissionMap.channel),thicknessMapUv:J&&d(x.thicknessMap.channel),alphaMapUv:fe&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xe||lt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(Xe||fe),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:le,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:Pe&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gn,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function _(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)T.push(L),T.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(T,x),g(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function g(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){const T=f[x.type];let L;if(T){const C=Bn[T];L=d0.clone(C.uniforms)}else L=x.uniforms;return L}function M(x,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new dv(s,T,x,i),l.push(L),u.set(T,L)),L}function v(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:S,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:l,dispose:E}}function vv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Sv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function nu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function iu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,_,p,g){let S=s[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},s[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=m,S.materialVariant=o(f),S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=p,S.group=g),e++,S}function c(f,d,m,_,p,g,S){S.reversedDepth===!0&&(p=-p);const M=a(f,d,m,_,p,g);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):t.push(M)}function l(f,d,m,_,p,g){const S=a(f,d,m,_,p,g);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):t.unshift(S)}function u(f,d){t.length>1&&t.sort(f||Sv),n.length>1&&n.sort(d||nu),i.length>1&&i.sort(d||nu)}function h(){for(let f=e,d=s.length;f<d;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:h,sort:u}}function Mv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new iu,s.set(n,[o])):i>=r.length?(o=new iu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function yv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new $e};break;case"SpotLight":t={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Tv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wv=0;function bv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ev(s){const e=new yv,t=Tv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,r=new tt,o=new tt;function a(l){let u=0,h=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,S=0,M=0,v=0,b=0,E=0,x=0,T=0,L=0,C=0;l.sort(bv);for(let I=0,O=l.length;I<O;I++){const P=l[I],U=P.color,G=P.intensity,F=P.distance;let Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hi?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*G,h+=U.g*G,f+=U.b*G;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],G);C++}else if(P.isSunLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,q=t.get(P);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[m]=q,n.sunShadowMap[m]=Z;const le=X.getViewportCount();for(let we=0;we<le;we++)n.sunShadowMatrix[_+we]=X.getMatrix(we),n.sunShadowCascade[_+we]=X._cascadeData[we];_+=le,m++}n.sun[d]=H,d++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,q=t.get(P);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(U).multiplyScalar(G),H.distance=F,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[S]=H;const X=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,X.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[S]=X.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,n.spotShadow[S]=q,n.spotShadowMap[S]=Z,x++}S++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(U).multiplyScalar(G),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=H,M++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const X=P.shadow,q=t.get(P);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(G),H.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[v]=H,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==g||R.spotLength!==S||R.rectAreaLength!==M||R.hemiLength!==v||R.numSunShadows!==m||R.numDirectionalShadows!==b||R.numPointShadows!==E||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+T-L,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,R.sunLength=d,R.directionalLength=p,R.pointLength=g,R.spotLength=S,R.rectAreaLength=M,R.hemiLength=v,R.numSunShadows=m,R.numDirectionalShadows=b,R.numPointShadows=E,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=C,n.version=wv++)}function c(l,u){let h=0,f=0,d=0,m=0,_=0,p=0;const g=u.matrixWorldInverse;for(let S=0,M=l.length;S<M;S++){const v=l[S];if(v.isSunLight){const b=n.sun[h];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),h++}else if(v.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(v.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const b=n.hemi[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:n}}function su(s){const e=new Ev(s),t=[],n=[],i=[];function r(h){u.camera=h,t.length=0,n.length=0,i.length=0}function o(h){h.isLightProbeGrid?i.push(h):t.push(h)}function a(h){n.push(h)}function c(){e.setup(t),i.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Av(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new su(s),e.set(i,[a])):r>=o.length?(a=new su(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cv=`uniform sampler2D shadow_pass;
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
}`,Pv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Lv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ru=new tt,Ws=new D,La=new D;function Iv(s,e,t){let n=new mr;const i=new ae,r=new ae,o=new At,a=new x0,c=new _0,l={},u=t.maxTextureSize,h={[Wn]:fn,[fn]:Wn,[gn]:gn},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Rv,fragmentShader:Cv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ut;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let g=this.type;this.render=function(E,x,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===cd&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);const L=s.getRenderTarget(),C=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),I=s.state;I.setBlending(ds),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=g!==this.type;O&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=E.length;P<U;P++){const G=E[P],F=G.shadow;if(F===void 0){We("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Z=F.getFrameExtents();i.multiply(Z),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,F.mapSize.y=r.y));const H=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||O===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===qs){if(G.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ln(i.x,i.y,{format:Hi,type:In,minFilter:zt,magFilter:zt,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new Ss(i.x,i.y,Tn),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=Ai,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt}else G.isPointLight?(F.map=new gl(i.x),F.map.depthTexture=new cf(i.x,Xn)):(F.map=new Ln(i.x,i.y),F.map.depthTexture=new Ss(i.x,i.y,Xn)),F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=Ai,this.type===er?(F.map.depthTexture.compareFunction=H?Ku:Yu,F.map.depthTexture.minFilter=zt,F.map.depthTexture.magFilter=zt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);const X=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();G.isPointLight!==!0&&F.updateMatrices(G,T);const q=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:T.layers;for(let le=0;le<X;le++){const we=F.getCamera(le);if(G.isPointLight){const V=F.camera,se=F.matrix,ge=G.distance||V.far;ge!==V.far&&(V.far=ge,V.updateProjectionMatrix()),Ws.setFromMatrixPosition(G.matrixWorld),V.position.copy(Ws),La.copy(V.position),La.add(Pv[le]),V.up.copy(Lv[le]),V.lookAt(La),V.updateMatrixWorld(),se.makeTranslation(-Ws.x,-Ws.y,-Ws.z),ru.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ru,V.coordinateSystem,V.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,le),s.clear();else{le===0&&(s.setRenderTarget(F.map),s.clear());const V=F.getViewport(le);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),I.viewport(o)}n=F.getFrustum(le),v(x,T,we,G,q,this.type)}F.isPointLightShadow!==!0&&this.type===qs&&S(F,T),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(L,C,R)};function S(E,x){const T=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ln(i.x,i.y,{format:Hi,type:In}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,T,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,T,d,_,null)}function M(E,x,T,L){let C=null;const R=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)C=R;else if(C=T.isPointLight===!0?c:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const I=C.uuid,O=x.uuid;let P=l[I];P===void 0&&(P={},l[I]=P);let U=P[O];U===void 0&&(U=C.clone(),P[O]=U,x.addEventListener("dispose",b)),C=U}if(C.visible=x.visible,C.wireframe=x.wireframe,L===qs?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:h[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=s.properties.get(C);I.light=T}return C}function v(E,x,T,L,C,R){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===qs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const P=e.update(E),U=E.material;if(Array.isArray(U)){const G=P.groups;for(let F=0,Z=G.length;F<Z;F++){const H=G[F],X=U[H.materialIndex];if(X&&X.visible){const q=M(E,X,L,R);E.onBeforeShadow(s,E,x,T,P,q,H),s.renderBufferDirect(T,null,P,q,E,H),E.onAfterShadow(s,E,x,T,P,q,H)}}}else if(U.visible){const G=M(E,U,L,R);E.onBeforeShadow(s,E,x,T,P,G,null),s.renderBufferDirect(T,null,P,G,E,null),E.onAfterShadow(s,E,x,T,P,G,null)}}const O=E.children;for(let P=0,U=O.length;P<U;P++)v(O[P],x,T,L,C,R)}function b(E){E.target.removeEventListener("dispose",b);for(const T in l){const L=l[T],C=E.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function Nv(s,e){function t(){let N=!1;const te=new At;let J=null;const Se=new At(0,0,0,0);return{setMask:function(fe){J!==fe&&!N&&(s.colorMask(fe,fe,fe,fe),J=fe)},setLocked:function(fe){N=fe},setClear:function(fe,ve,Ve,Le,re){re===!0&&(fe*=Le,ve*=Le,Ve*=Le),te.set(fe,ve,Ve,Le),Se.equals(te)===!1&&(s.clearColor(fe,ve,Ve,Le),Se.copy(te))},reset:function(){N=!1,J=null,Se.set(-1,0,0,0)}}}function n(){let N=!1,te=!1,J=null,Se=null,fe=null;return{setReversed:function(ve){if(te!==ve){const Ve=e.get("EXT_clip_control");ve?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),te=ve;const Le=fe;fe=null,this.setClear(Le)}},getReversed:function(){return te},setTest:function(ve){ve?he(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function(ve){J!==ve&&!N&&(s.depthMask(ve),J=ve)},setFunc:function(ve){if(te&&(ve=Wd[ve]),Se!==ve){switch(ve){case Ga:s.depthFunc(s.NEVER);break;case za:s.depthFunc(s.ALWAYS);break;case Va:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case Wa:s.depthFunc(s.EQUAL);break;case Xa:s.depthFunc(s.GEQUAL);break;case Ya:s.depthFunc(s.GREATER);break;case Ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=ve}},setLocked:function(ve){N=ve},setClear:function(ve){fe!==ve&&(fe=ve,te&&(ve=1-ve),s.clearDepth(ve))},reset:function(){N=!1,J=null,Se=null,fe=null,te=!1}}}function i(){let N=!1,te=null,J=null,Se=null,fe=null,ve=null,Ve=null,Le=null,re=null;return{setTest:function(Ie){N||(Ie?he(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(Ie){te!==Ie&&!N&&(s.stencilMask(Ie),te=Ie)},setFunc:function(Ie,qe,Te){(J!==Ie||Se!==qe||fe!==Te)&&(s.stencilFunc(Ie,qe,Te),J=Ie,Se=qe,fe=Te)},setOp:function(Ie,qe,Te){(ve!==Ie||Ve!==qe||Le!==Te)&&(s.stencilOp(Ie,qe,Te),ve=Ie,Ve=qe,Le=Te)},setLocked:function(Ie){N=Ie},setClear:function(Ie){re!==Ie&&(s.clearStencil(Ie),re=Ie)},reset:function(){N=!1,te=null,J=null,Se=null,fe=null,ve=null,Ve=null,Le=null,re=null}}}const r=new t,o=new n,a=new i;let c={};const l=new WeakMap;let u={},h={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,S=null,M=null,v=null,b=null,E=null,x=null,T=new $e(0,0,0),L=0,C=!1,R=null,I=null,O=null,P=null,U=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=Z>=2);let X=null,q={};const le=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),V=new At().fromArray(le),se=new At().fromArray(we);function ge(N,te,J,Se){const fe=new Uint8Array(4),ve=s.createTexture();s.bindTexture(N,ve),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<J;Ve++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(te+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return ve}const De={};De[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(s.DEPTH_TEST),o.setFunc(cr),Ee(!1),xe(Dl),he(s.CULL_FACE),pe(ds);function he(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function Oe(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function ft(N,te){return f[N]!==te?(s.bindFramebuffer(N,te),f[N]=te,N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=te),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=te),!0):!1}function Xe(N,te){let J=m,Se=!1;if(N){J=d.get(te),J===void 0&&(J=[],d.set(te,J));const fe=N.textures;if(J.length!==fe.length||J[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Ve=fe.length;ve<Ve;ve++)J[ve]=s.COLOR_ATTACHMENT0+ve;J.length=fe.length,Se=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,Se=!0);Se&&s.drawBuffers(J)}function je(N){return _!==N?(s.useProgram(N),_=N,!0):!1}const nt={[us]:s.FUNC_ADD,[hd]:s.FUNC_SUBTRACT,[ud]:s.FUNC_REVERSE_SUBTRACT};nt[fd]=s.MIN,nt[dd]=s.MAX;const ne={[pd]:s.ZERO,[md]:s.ONE,[gd]:s.SRC_COLOR,[Au]:s.SRC_ALPHA,[yd]:s.SRC_ALPHA_SATURATE,[Sd]:s.DST_COLOR,[_d]:s.DST_ALPHA,[xd]:s.ONE_MINUS_SRC_COLOR,[Ru]:s.ONE_MINUS_SRC_ALPHA,[Md]:s.ONE_MINUS_DST_COLOR,[vd]:s.ONE_MINUS_DST_ALPHA,[Td]:s.CONSTANT_COLOR,[wd]:s.ONE_MINUS_CONSTANT_COLOR,[bd]:s.CONSTANT_ALPHA,[Ed]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(N,te,J,Se,fe,ve,Ve,Le,re,Ie){if(N===ds){p===!0&&(Oe(s.BLEND),p=!1);return}if(p===!1&&(he(s.BLEND),p=!0),N!==ld){if(N!==g||Ie!==C){if((S!==us||b!==us)&&(s.blendEquation(s.FUNC_ADD),S=us,b=us),Ie)switch(N){case tr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mo:s.blendFunc(s.ONE,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ul:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ze("WebGLState: Invalid blending: ",N);break}else switch(N){case tr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ol:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ul:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",N);break}M=null,v=null,E=null,x=null,T.set(0,0,0),L=0,g=N,C=Ie}return}fe=fe||te,ve=ve||J,Ve=Ve||Se,(te!==S||fe!==b)&&(s.blendEquationSeparate(nt[te],nt[fe]),S=te,b=fe),(J!==M||Se!==v||ve!==E||Ve!==x)&&(s.blendFuncSeparate(ne[J],ne[Se],ne[ve],ne[Ve]),M=J,v=Se,E=ve,x=Ve),(Le.equals(T)===!1||re!==L)&&(s.blendColor(Le.r,Le.g,Le.b,re),T.copy(Le),L=re),g=N,C=!1}function ue(N,te){N.side===gn?Oe(s.CULL_FACE):he(s.CULL_FACE);let J=N.side===fn;te&&(J=!J),Ee(J),N.blending===tr&&N.transparent===!1?pe(ds):pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Se=N.stencilWrite;a.setTest(Se),Se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Pe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(N){R!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),R=N)}function xe(N){N!==od?(he(s.CULL_FACE),N!==I&&(N===Dl?s.cullFace(s.BACK):N===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),I=N}function Ke(N){N!==O&&(F&&s.lineWidth(N),O=N)}function Pe(N,te,J){N?(he(s.POLYGON_OFFSET_FILL),(P!==te||U!==J)&&(P=te,U=J,o.getReversed()&&(te=-te,J=-J),s.polygonOffset(te,J))):Oe(s.POLYGON_OFFSET_FILL)}function Je(N){N?he(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function it(N){N===void 0&&(N=s.TEXTURE0+G-1),X!==N&&(s.activeTexture(N),X=N)}function lt(N,te,J){J===void 0&&(X===null?J=s.TEXTURE0+G-1:J=X);let Se=q[J];Se===void 0&&(Se={type:void 0,texture:void 0},q[J]=Se),(Se.type!==N||Se.texture!==te)&&(X!==J&&(s.activeTexture(J),X=J),s.bindTexture(N,te||De[N]),Se.type=N,Se.texture=te)}function B(){const N=q[X];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Fe(){try{s.compressedTexImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function ze(){try{s.texSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function oe(){try{s.texSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function mt(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Ue(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Re(){try{s.texStorage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function A(){try{s.texStorage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function y(){try{s.texImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function z(){try{s.texImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function ce(N){return h[N]!==void 0?h[N]:s.getParameter(N)}function ie(N,te){h[N]!==te&&(s.pixelStorei(N,te),h[N]=te)}function de(N){V.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),V.copy(N))}function me(N){se.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),se.copy(N))}function $(N,te){let J=l.get(te);J===void 0&&(J=new WeakMap,l.set(te,J));let Se=J.get(N);Se===void 0&&(Se=s.getUniformBlockIndex(te,N.name),s.uniformBlockBinding(te,Se,Se),J.set(N,Se))}function Q(N,te,J){const fe=l.get(te).get(N);c[fe]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,fe,J),c[fe]=J)}function _e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},X=null,q={},f={},c={},d=new WeakMap,m=[],_=null,p=!1,g=null,S=null,M=null,v=null,b=null,E=null,x=null,T=new $e(0,0,0),L=0,C=!1,R=null,I=null,O=null,P=null,U=null,V.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Oe,bindFramebuffer:ft,drawBuffers:Xe,useProgram:je,setBlending:pe,setMaterial:ue,setFlipSided:Ee,setCullFace:xe,setLineWidth:Ke,setPolygonOffset:Pe,setScissorTest:Je,activeTexture:it,bindTexture:lt,unbindTexture:B,compressedTexImage2D:Rt,compressedTexImage3D:Fe,texImage2D:y,texImage3D:z,pixelStorei:ie,getParameter:ce,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:Re,texStorage3D:A,texSubImage2D:ze,texSubImage3D:oe,compressedTexSubImage2D:mt,compressedTexSubImage3D:Ue,scissor:de,viewport:me,reset:_e}}function Dv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,u=new WeakMap,h=new Set;let f;const d=new WeakMap,m=new Set,_=new FinalizationRegistry(A=>m.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):pr("canvas")}function S(A,y,z){let ce=1;const ie=Re(A);if((ie.width>z||ie.height>z)&&(ce=z/Math.max(ie.width,ie.height)),ce<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const de=Math.floor(ce*ie.width),me=Math.floor(ce*ie.height);f===void 0&&(f=g(de,me));const $=y?g(de,me):f;return $.width=de,$.height=me,$.getContext("2d").drawImage(A,0,0,de,me),We("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+de+"x"+me+")."),$}else return"data"in A&&We("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function M(A){return A.generateMipmaps}function v(A){s.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,y,z,ce,ie,de=!1){if(A!==null){if(s[A]!==void 0)return s[A];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me;ce&&(me=e.get("EXT_texture_norm16"),me||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8),z===s.UNSIGNED_SHORT&&me&&($=me.R16_EXT),z===s.SHORT&&me&&($=me.R16_SNORM_EXT)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),y===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8),z===s.UNSIGNED_SHORT&&me&&($=me.RG16_EXT),z===s.SHORT&&me&&($=me.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),y===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGB8UI),z===s.UNSIGNED_SHORT&&($=s.RGB16UI),z===s.UNSIGNED_INT&&($=s.RGB32UI),z===s.BYTE&&($=s.RGB8I),z===s.SHORT&&($=s.RGB16I),z===s.INT&&($=s.RGB32I)),y===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),z===s.UNSIGNED_INT&&($=s.RGBA32UI),z===s.BYTE&&($=s.RGBA8I),z===s.SHORT&&($=s.RGBA16I),z===s.INT&&($=s.RGBA32I)),y===s.RGB&&(z===s.UNSIGNED_SHORT&&me&&($=me.RGB16_EXT),z===s.SHORT&&me&&($=me.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),y===s.RGBA){const Q=de?vo:ht.getTransfer(ie);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=Q===yt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&me&&($=me.RGBA16_EXT),z===s.SHORT&&me&&($=me.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(A,y){let z;return A?y===null||y===Xn||y===_s?z=s.DEPTH24_STENCIL8:y===Tn?z=s.DEPTH32F_STENCIL8:y===hr&&(z=s.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xn||y===_s?z=s.DEPTH_COMPONENT24:y===Tn?z=s.DEPTH_COMPONENT32F:y===hr&&(z=s.DEPTH_COMPONENT16),z}function T(A,y){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function L(A){const y=new WeakRef(A);n.get(A).__ref=y,m.add(y),_.register(A,y,y)}function C(A){const y=n.get(A).__ref;y!==void 0&&(m.delete(y),_.unregister(y))}function R(A){O(A.target)}function I(A){P(A.target)}function O(A){A.removeEventListener("dispose",R),C(A),G(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function P(A){A.removeEventListener("dispose",I),C(A),Z(A)}function U(){for(const A of m){const y=A.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):O(y))}m.clear(),h.clear()}function G(A){const y=n.get(A);if(y.__webglInit===void 0)return;const z=A.source,ce=d.get(z);if(ce){const ie=ce[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(A),Object.keys(ce).length===0&&d.delete(z)}n.remove(A)}function F(A){const y=n.get(A);s.deleteTexture(y.__webglTexture);const z=A.source,ce=d.get(z);delete ce[y.__cacheKey],o.memory.textures--}function Z(A){const y=n.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();const z=A.depthTexture;if(z&&z.renderTarget===A&&O(z),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(y.__webglFramebuffer[ie]))for(let de=0;de<y.__webglFramebuffer[ie].length;de++)s.deleteFramebuffer(y.__webglFramebuffer[ie][de]);else s.deleteFramebuffer(y.__webglFramebuffer[ie]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ie])}else{if(Array.isArray(y.__webglFramebuffer))for(let ie=0;ie<y.__webglFramebuffer.length;ie++)s.deleteFramebuffer(y.__webglFramebuffer[ie]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ie=0;ie<y.__webglColorRenderbuffer.length;ie++)y.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ie]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ce=A.textures;for(let ie=0,de=ce.length;ie<de;ie++){const me=n.get(ce[ie]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(ce[ie])}n.remove(A)}let H=0;function X(){H=0}function q(){return H}function le(A){H=A}function we(){const A=H;return A>=i.maxTextures&&We("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function se(A,y){const z=n.get(A);if(A.isVideoTexture&&mt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const ce=A.image;if(ce===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,A,y);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function ge(A,y){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){ue(z,A,y);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function De(A,y){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){ue(z,A,y);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function he(A,y){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Ee(z,A,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const Oe={[Ht]:s.REPEAT,[kn]:s.CLAMP_TO_EDGE,[go]:s.MIRRORED_REPEAT},ft={[Gt]:s.NEAREST,[Bu]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[co]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},Xe={[Od]:s.NEVER,[qu]:s.ALWAYS,[Ud]:s.LESS,[Yu]:s.LEQUAL,[Fd]:s.EQUAL,[Ku]:s.GEQUAL,[Bd]:s.GREATER,[kd]:s.NOTEQUAL};function je(A,y){if(y.type===Tn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zt||y.magFilter===co||y.magFilter===$s||y.magFilter===Hn||y.minFilter===zt||y.minFilter===co||y.minFilter===$s||y.minFilter===Hn)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Oe[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Oe[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Oe[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ft[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ft[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Gt||y.minFilter!==$s&&y.minFilter!==Hn||y.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function nt(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R),L(y));const ce=y.source;let ie=d.get(ce);ie===void 0&&(ie={},d.set(ce,ie));const de=V(y);if(de!==A.__cacheKey){ie[de]===void 0&&(ie[de]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ie[de].usedTimes++;const me=ie[A.__cacheKey];me!==void 0&&(ie[A.__cacheKey].usedTimes--,me.usedTimes===0&&F(y)),A.__cacheKey=de,A.__webglTexture=ie[de].texture}return z}function ne(A,y,z){return Math.floor(Math.floor(A/z)/y)}function pe(A,y,z,ce){const de=A.updateRanges;if(de.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,z,ce,y.data);else{de.sort((N,te)=>N.start-te.start);let me=0;for(let N=1;N<de.length;N++){const te=de[me],J=de[N],Se=te.start+te.count,fe=ne(J.start,y.width,4),ve=ne(te.start,y.width,4);J.start<=Se+1&&fe===ve&&ne(J.start+J.count-1,y.width,4)===fe?te.count=Math.max(te.count,J.start+J.count-te.start):(++me,de[me]=J)}de.length=me+1;const $=t.getParameter(s.UNPACK_ROW_LENGTH),Q=t.getParameter(s.UNPACK_SKIP_PIXELS),_e=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let N=0,te=de.length;N<te;N++){const J=de[N],Se=Math.floor(J.start/4),fe=Math.ceil(J.count/4),ve=Se%y.width,Ve=Math.floor(Se/y.width),Le=fe,re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(s.TEXTURE_2D,0,ve,Ve,Le,re,z,ce,y.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(s.UNPACK_SKIP_ROWS,_e)}}function ue(A,y,z){let ce=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ce=s.TEXTURE_3D);const ie=nt(A,y),de=y.source;t.bindTexture(ce,A.__webglTexture,s.TEXTURE0+z);const me=n.get(de);if(de.version!==me.__version||ie===!0){if(t.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const re=ht.getPrimaries(ht.workingColorSpace),Ie=y.colorSpace===Ti?null:ht.getPrimaries(y.colorSpace),qe=y.colorSpace===Ti||re===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=S(y.image,!1,i.maxTextureSize);Q=Ue(y,Q);const _e=r.convert(y.format,y.colorSpace),N=r.convert(y.type);let te=E(y.internalFormat,_e,N,y.normalized,y.colorSpace,y.isVideoTexture);je(ce,y);let J;const Se=y.mipmaps,fe=y.isVideoTexture!==!0,ve=me.__version===void 0||ie===!0,Ve=de.dataReady,Le=T(y,Q);if(y.isDepthTexture)te=x(y.format===wi,y.type),ve&&(fe?t.texStorage2D(s.TEXTURE_2D,1,te,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,te,Q.width,Q.height,0,_e,N,null));else if(y.isDataTexture)if(Se.length>0){fe&&ve&&t.texStorage2D(s.TEXTURE_2D,Le,te,Se[0].width,Se[0].height);for(let re=0,Ie=Se.length;re<Ie;re++)J=Se[re],fe?Ve&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,J.width,J.height,_e,N,J.data):t.texImage2D(s.TEXTURE_2D,re,te,J.width,J.height,0,_e,N,J.data);y.generateMipmaps=!1}else fe?(ve&&t.texStorage2D(s.TEXTURE_2D,Le,te,Q.width,Q.height),Ve&&pe(y,Q,_e,N)):t.texImage2D(s.TEXTURE_2D,0,te,Q.width,Q.height,0,_e,N,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){fe&&ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,te,Se[0].width,Se[0].height,Q.depth);for(let re=0,Ie=Se.length;re<Ie;re++)if(J=Se[re],y.format!==Cn)if(_e!==null)if(fe){if(Ve)if(y.layerUpdates.size>0){const qe=Bh(J.width,J.height,y.format,y.type);for(const Te of y.layerUpdates){const St=J.data.subarray(Te*qe/J.data.BYTES_PER_ELEMENT,(Te+1)*qe/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Te,J.width,J.height,1,_e,St)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,Q.depth,_e,J.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,te,J.width,J.height,Q.depth,0,J.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Ve&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,Q.depth,_e,N,J.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,te,J.width,J.height,Q.depth,0,_e,N,J.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{fe&&ve&&t.texStorage2D(s.TEXTURE_2D,Le,te,Se[0].width,Se[0].height);for(let re=0,Ie=Se.length;re<Ie;re++)J=Se[re],y.format!==Cn?_e!==null?fe?Ve&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,J.width,J.height,_e,J.data):t.compressedTexImage2D(s.TEXTURE_2D,re,te,J.width,J.height,0,J.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Ve&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,J.width,J.height,_e,N,J.data):t.texImage2D(s.TEXTURE_2D,re,te,J.width,J.height,0,_e,N,J.data)}else if(y.isDataArrayTexture)if(fe){if(ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,te,Q.width,Q.height,Q.depth),Ve)if(y.layerUpdates.size>0){const re=Bh(Q.width,Q.height,y.format,y.type);for(const Ie of y.layerUpdates){const qe=Q.data.subarray(Ie*re/Q.data.BYTES_PER_ELEMENT,(Ie+1)*re/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ie,Q.width,Q.height,1,_e,N,qe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,_e,N,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,te,Q.width,Q.height,Q.depth,0,_e,N,Q.data);else if(y.isData3DTexture)fe?(ve&&t.texStorage3D(s.TEXTURE_3D,Le,te,Q.width,Q.height,Q.depth),Ve&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,_e,N,Q.data)):t.texImage3D(s.TEXTURE_3D,0,te,Q.width,Q.height,Q.depth,0,_e,N,Q.data);else if(y.isFramebufferTexture){if(ve)if(fe)t.texStorage2D(s.TEXTURE_2D,Le,te,Q.width,Q.height);else{let re=Q.width,Ie=Q.height;for(let qe=0;qe<Le;qe++)t.texImage2D(s.TEXTURE_2D,qe,te,re,Ie,0,_e,N,null),re>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const re=s.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Q.parentNode!==re){re.appendChild(Q),h.add(y),re.onpaint=Ie=>{const qe=Ie.changedElements;for(const Te of h)qe.includes(Te.image)&&(Te.needsUpdate=!0)},re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{const qe=s.RGBA,Te=s.RGBA,St=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,qe,Te,St,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Se.length>0){if(fe&&ve){const re=Re(Se[0]);t.texStorage2D(s.TEXTURE_2D,Le,te,re.width,re.height)}for(let re=0,Ie=Se.length;re<Ie;re++)J=Se[re],fe?Ve&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,_e,N,J):t.texImage2D(s.TEXTURE_2D,re,te,_e,N,J);y.generateMipmaps=!1}else if(fe){if(ve){const re=Re(Q);t.texStorage2D(s.TEXTURE_2D,Le,te,re.width,re.height)}Ve&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,N,Q)}else t.texImage2D(s.TEXTURE_2D,0,te,_e,N,Q);M(y)&&y.mipmapsAutoUpdate===!0&&v(ce),me.__version=de.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Ee(A,y,z){if(y.image.length!==6)return;const ce=nt(A,y),ie=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);const de=n.get(ie);if(ie.version!==de.__version||ce===!0){t.activeTexture(s.TEXTURE0+z);const me=ht.getPrimaries(ht.workingColorSpace),$=y.colorSpace===Ti?null:ht.getPrimaries(y.colorSpace),Q=y.colorSpace===Ti||me===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,N=y.image[0]&&y.image[0].isDataTexture,te=[];for(let Te=0;Te<6;Te++)!_e&&!N?te[Te]=S(y.image[Te],!0,i.maxCubemapSize):te[Te]=N?y.image[Te].image:y.image[Te],te[Te]=Ue(y,te[Te]);const J=te[0],Se=r.convert(y.format,y.colorSpace),fe=r.convert(y.type);let ve=E(y.internalFormat,Se,fe,y.normalized,y.colorSpace);const Ve=y.isVideoTexture!==!0,Le=de.__version===void 0||ce===!0,re=ie.dataReady;let Ie=T(y,J);je(s.TEXTURE_CUBE_MAP,y);let qe;if(y.isDepthTexture){if(ve=x(y.format===wi,y.type),Le)if(Ve)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ve,J.width,J.height);else for(let Te=0;Te<6;Te++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ve,J.width,J.height,0,Se,fe,null)}else if(_e){Ve&&Le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ve,J.width,J.height);for(let Te=0;Te<6;Te++){qe=te[Te].mipmaps;for(let St=0;St<qe.length;St++){const Yt=qe[St];y.format!==Cn?Se!==null?Ve?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St,0,0,Yt.width,Yt.height,Se,Yt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St,ve,Yt.width,Yt.height,0,Yt.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St,0,0,Yt.width,Yt.height,Se,fe,Yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St,ve,Yt.width,Yt.height,0,Se,fe,Yt.data)}}}else{if(qe=y.mipmaps,Ve&&Le){qe.length>0&&Ie++;const Te=Re(te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ve,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(N){Ve?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,te[Te].width,te[Te].height,Se,fe,te[Te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ve,te[Te].width,te[Te].height,0,Se,fe,te[Te].data);for(let St=0;St<qe.length;St++){const fi=qe[St].image[Te].image;Ve?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St+1,0,0,fi.width,fi.height,Se,fe,fi.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St+1,ve,fi.width,fi.height,0,Se,fe,fi.data)}}else{Ve?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Se,fe,te[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ve,Se,fe,te[Te]);for(let St=0;St<qe.length;St++){const Yt=qe[St];Ve?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St+1,0,0,Se,fe,Yt.image[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St+1,ve,Se,fe,Yt.image[Te])}}}M(y)&&y.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),de.__version=ie.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function xe(A,y,z,ce,ie,de){const me=r.convert(z.format,z.colorSpace),$=r.convert(z.type),Q=E(z.internalFormat,me,$,z.normalized,z.colorSpace),_e=n.get(y),N=n.get(z);if(N.__renderTarget=y,!_e.__hasExternalTextures){const te=Math.max(1,y.width>>de),J=Math.max(1,y.height>>de);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,de,Q,te,J,y.depth,0,me,$,null):t.texImage2D(ie,de,Q,te,J,0,me,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),oe(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,ie,N.__webglTexture,0,ze(y)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,ie,N.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(A,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){const ce=y.depthTexture,ie=ce&&ce.isDepthTexture?ce.type:null,de=x(y.stencilBuffer,ie),me=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;oe(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ze(y),de,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ze(y),de,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,de,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,A)}else{const ce=y.textures;for(let ie=0;ie<ce.length;ie++){const de=ce[ie],me=r.convert(de.format,de.colorSpace),$=r.convert(de.type),Q=E(de.internalFormat,me,$,de.normalized,de.colorSpace);oe(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ze(y),Q,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ze(y),Q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Q,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(A,y,z){const ce=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=n.get(y.depthTexture);ie.__renderTarget=y;const de=ce?y.depthTexture.image[0]:y.depthTexture.image;(!ie.__webglTexture||de.width!==y.width||de.height!==y.height)&&(de.width=y.width,de.height=y.height,y.depthTexture.needsUpdate=!0),ce?he(y.depthTexture,0):se(y.depthTexture,0);const me=ie.__webglTexture,$=ze(y),Q=ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,_e=y.depthTexture.format===wi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ai)oe(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Q,me,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,_e,Q,me,0);else if(y.depthTexture.format===wi)oe(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Q,me,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,_e,Q,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(A){const y=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const ce=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ce){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ce.removeEventListener("dispose",ie)};ce.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=ce}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let ce=0;ce<6;ce++)Pe(y.__webglFramebuffer[ce],A,ce);else A.texture.mipmaps.length>0?Pe(y.__webglFramebuffer[0],A,0):Pe(y.__webglFramebuffer,A,0);else if(z){y.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ce]),y.__webglDepthbuffer[ce]===void 0)y.__webglDepthbuffer[ce]=s.createRenderbuffer(),Ke(y.__webglDepthbuffer[ce],A,!1);else{const ie=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,de)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ke(y.__webglDepthbuffer,A,!1);else{const ie=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,de)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function it(A,y,z){const ce=n.get(A);y!==void 0&&xe(ce.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Je(A)}function lt(A){const y=A.texture,z=n.get(A),ce=n.get(y);A.addEventListener("dispose",I),L(A);const ie=A.textures,de=A.isWebGLCubeRenderTarget===!0,me=ie.length>1;if(me||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=y.version,o.memory.textures++),de){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let Q=0;Q<y.mipmaps.length;Q++)z.__webglFramebuffer[$][Q]=s.createFramebuffer()}else z.__webglFramebuffer[$]=s.createFramebuffer()}else{if(y.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)z.__webglFramebuffer[$]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(me)for(let $=0,Q=ie.length;$<Q;$++){const _e=n.get(ie[$]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&oe(A)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<ie.length;$++){const Q=ie[$];z.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[$]);const _e=r.convert(Q.format,Q.colorSpace),N=r.convert(Q.type),te=E(Q.internalFormat,_e,N,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),J=ze(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,te,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,z.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),je(s.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)xe(z.__webglFramebuffer[$][Q],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else xe(z.__webglFramebuffer[$],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);M(y)?v(s.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(me){for(let $=0,Q=ie.length;$<Q;$++){const _e=ie[$],N=n.get(_e);let te=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,N.__webglTexture),je(te,_e),xe(z.__webglFramebuffer,A,_e,s.COLOR_ATTACHMENT0+$,te,0),M(_e)&&v(te)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,ce.__webglTexture),je($,y),y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)xe(z.__webglFramebuffer[Q],A,y,s.COLOR_ATTACHMENT0,$,Q);else xe(z.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,$,0);M(y)?v($):y.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Je(A)}function B(A){const y=A.textures;for(let z=0,ce=y.length;z<ce;z++){const ie=y[z];if(M(ie)&&ie.mipmapsAutoUpdate===!0){const de=b(A),me=n.get(ie).__webglTexture;t.bindTexture(de,me),v(de),t.unbindTexture()}}}const Rt=[];function Fe(A){if(A.samples>0){if(oe(A)===!1){const y=A.textures,z=A.width,ce=A.height;let ie=s.COLOR_BUFFER_BIT;const de=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(A),$=y.length>1;if($)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const N=n.get(y[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,z,ce,0,0,z,ce,ie,s.NEAREST),c===!0&&(Rt.length=0,Rt.push(s.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Rt.push(de),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const N=n.get(y[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,N,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ze(A){return Math.min(i.maxSamples,A.samples)}function oe(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function mt(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function Ue(A,y){const z=A.colorSpace,ce=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==_n&&z!==Ti&&(ht.getTransfer(z)===yt?(ce!==Cn||ie!==xn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",z)),y}function Re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=we,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=le,this.setTexture2D=se,this.setTexture2DArray=ge,this.setTexture3D=De,this.setTextureCube=he,this.rebindTextures=it,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=oe,this.dispose=U}function Ov(s,e){function t(n,i=Ti){let r;const o=ht.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===Vc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ku)return s.BYTE;if(n===Hu)return s.SHORT;if(n===hr)return s.UNSIGNED_SHORT;if(n===zc)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===In)return s.HALF_FLOAT;if(n===Vu)return s.ALPHA;if(n===Wu)return s.RGB;if(n===Cn)return s.RGBA;if(n===Ai)return s.DEPTH_COMPONENT;if(n===wi)return s.DEPTH_STENCIL;if(n===Xc)return s.RED;if(n===Yc)return s.RED_INTEGER;if(n===Hi)return s.RG;if(n===Kc)return s.RG_INTEGER;if(n===qc)return s.RGBA_INTEGER;if(n===lo||n===ho||n===uo||n===fo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===$a||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===ja||n===ec||n===tc||n===nc||n===xo||n===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===ja)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return r.COMPRESSED_R11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return r.COMPRESSED_RG11_EAC;if(n===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===vc||n===Sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_c)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===yc||n===_o||n===Tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
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

}`;class Bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ci({vertexShader:Uv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new Ct(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kv extends Xi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",p=new Bv,g={},S=t.getContextAttributes();let M=null,v=null;const b=[],E=[],x=new ae;let T=null,L=null;const C=new ln;C.viewport=new At;const R=new ln;R.viewport=new At;const I=[C,R],O=new G0;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let se=b[V];return se===void 0&&(se=new aa,b[V]=se),se.getTargetRaySpace()},this.getControllerGrip=function(V){let se=b[V];return se===void 0&&(se=new aa,b[V]=se),se.getGripSpace()},this.getHand=function(V){let se=b[V];return se===void 0&&(se=new aa,b[V]=se),se.getHandSpace()};function G(V){const se=E.indexOf(V.inputSource);if(se===-1)return;const ge=b[se];ge!==void 0&&(ge.update(V.inputSource,V.frame,l||o),ge.dispatchEvent({type:V.type,data:V.inputSource}))}function F(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",Z);for(let V=0;V<b.length;V++){const se=E[V];se!==null&&(E[V]=null,b[V].disconnect(se))}P=null,U=null,p.reset();for(const V in g)delete g[V];if(e.setRenderTarget(M),d=null,f=null,h=null,i=null,v=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(x.width,x.height,!1),L!==null){const V=L.camera;V.fov=L.fov,V.zoom=L.zoom,V.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",F),i.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,De=null,he=null;S.depth&&(he=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?wi:Ai,De=S.stencil?_s:Xn);const Oe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ln(f.textureWidth,f.textureHeight,{format:Cn,type:xn,depthTexture:new Ss(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ln(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(V){for(let se=0;se<V.removed.length;se++){const ge=V.removed[se],De=E.indexOf(ge);De>=0&&(E[De]=null,b[De].disconnect(ge))}for(let se=0;se<V.added.length;se++){const ge=V.added[se];let De=E.indexOf(ge);if(De===-1){for(let Oe=0;Oe<b.length;Oe++)if(Oe>=E.length){E.push(ge),De=Oe;break}else if(E[Oe]===null){E[Oe]=ge,De=Oe;break}if(De===-1)break}const he=b[De];he&&he.connect(ge)}}function H(V,se){se===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(se.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let se=V.near,ge=V.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),O.near=R.near=C.near=se,O.far=R.far=C.far=ge,(P!==O.near||U!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,U=O.far),O.layers.mask=V.layers.mask|6,C.layers.mask=O.layers.mask&-5,R.layers.mask=O.layers.mask&-3;const De=V.parent,he=O.cameras;H(O,De);for(let Oe=0;Oe<he.length;Oe++)H(he[Oe],De);O.projectionMatrix.copy(C.projectionMatrix),O.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&V.isPerspectiveCamera&&(L={camera:V,fov:V.fov,zoom:V.zoom}),X(V,O,De)};function X(V,se,ge){ge===null?V.matrix.copy(se.matrixWorld):(V.matrix.copy(ge.matrixWorld),V.matrix.invert(),V.matrix.multiply(se.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(se.projectionMatrix),V.projectionMatrixInverse.copy(se.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=vs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(V){return g[V]};let q=null;function le(V,se){if(u=se.getViewerPose(l||o),m=se,u!==null){const ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let De=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let Xe=0;Xe<ge.length;Xe++){const je=ge[Xe];let nt=null;if(d!==null)nt=d.getViewport(je);else{const pe=h.getViewSubImage(f,je);nt=pe.viewport,Xe===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let ne=I[Xe];ne===void 0&&(ne=new ln,ne.layers.enable(Xe),ne.viewport=new At,I[Xe]=ne),ne.matrix.fromArray(je.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(je.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(nt.x,nt.y,nt.width,nt.height),Xe===0&&(O.matrix.copy(ne.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(ne)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Xe=h.getDepthInformation(ge[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,i.renderState)}if(he&&he.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Xe=0;Xe<ge.length;Xe++){const je=ge[Xe].camera;if(je){let nt=g[je];nt||(nt=new lf,g[je]=nt);const ne=h.getCameraImage(je);nt.sourceTexture=ne}}}}for(let ge=0;ge<b.length;ge++){const De=E[ge],he=b[ge];De!==null&&he!==void 0&&he.update(De,se,l||o)}q&&q(V,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}const we=new bf;we.setAnimationLoop(le),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}}const Hv=new tt,Of=new et;Of.set(-1,0,0,0,1,0,0,0,1);function Gv(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,vf(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,S,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,S,M):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===fn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===fn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const S=e.get(g),M=S.envMap,v=S.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Of),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,S,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,S){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const S=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zv(s,e,t,n){let i={},r={};function o(S,M){const v=M.program;n.uniformBlockBinding(S,v,i[S.id])}function a(S,M){let v=i[S.id];v===void 0&&(m(S),v=c(S),i[S.id]=v,S.addEventListener("dispose",p));const b=M.program;n.updateUBOMapping(S,b);const E=e.render.frame;r[S.id]!==E&&(l(S),r[S.id]=E)}function c(S){const M=s.createBuffer(),v=S.__size,b=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,b),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function l(S){const M=i[S.id],v=S.uniforms,b=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,x=v.length;E<x;E++){const T=v[E];if(Array.isArray(T))for(let L=0,C=T.length;L<C;L++)u(T[L],E,L,b);else u(T,E,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(S,M,v,b){if(f(S,M,v,b)===!0){const E=S.__offset,x=S.value;if(Array.isArray(x)){let T=0;for(let L=0;L<x.length;L++){const C=x[L],R=_(C,!0);h(C,S.__data,T),T+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,S.__data)}}function h(S,M,v){typeof S=="number"||typeof S=="boolean"?M[v]=S:S.isMatrix3?(M[v]=S.elements[0],M[v+1]=S.elements[1],M[v+2]=S.elements[2],M[v+3]=0,M[v+4]=S.elements[3],M[v+5]=S.elements[4],M[v+6]=S.elements[5],M[v+7]=0,M[v+8]=S.elements[6],M[v+9]=S.elements[7],M[v+10]=S.elements[8],M[v+11]=0):ArrayBuffer.isView(S)?M.set(S.subarray(0,M.length-v),v):S.toArray(M,v)}function f(S,M,v,b){const E=S.value,x=M+"_"+v;if(Array.isArray(E)){b[x]===void 0&&(b[x]=[]);const T=b[x];let L=!1;for(let C=0;C<E.length;C++)d(E[C],T,C)===!0&&(L=!0);return L}return d(E,b,x)}function d(S,M,v){if(M[v]===void 0)return typeof S=="number"||typeof S=="boolean"?M[v]=S:ArrayBuffer.isView(S)?M[v]=S.slice():M[v]=S.clone(),!0;{const b=M[v];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return M[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function m(S){const M=S.uniforms;let v=0;const b=16;for(let x=0,T=M.length;x<T;x++){const L=Array.isArray(M[x])?M[x]:[M[x]];for(let C=0,R=L.length;C<R;C++){const I=L[C],O=Array.isArray(I.value)?I.value:[I.value],P=Array.isArray(M[x])||Array.isArray(I.value);let U=v;for(let F=0,Z=O.length;F<Z;F++){const H=O[F],X=_(H,P),q=v%b,le=q%X.boundary,we=q+le;v+=le,we!==0&&b-we<X.storage&&(v+=b-we),F===0&&(U=v),v+=X.storage}const G=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new G((v-U)/Float32Array.BYTES_PER_ELEMENT),I.__offset=U}}const E=v%b;return E>0&&(v+=b-E),S.__size=v,S.__cache={},this}function _(S,M){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):We("WebGLRenderer: Unsupported uniform value type.",S),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(S){const M=S.target;M.removeEventListener("dispose",p),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(const S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:a,dispose:g}}const Vv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function Wv(){return Un===null&&(Un=new nl(Vv,16,16,Hi,In),Un.name="DFG_LUT",Un.minFilter=zt,Un.magFilter=zt,Un.wrapS=kn,Un.wrapT=kn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class Xv{constructor(e={}){const{canvas:t=zd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=xn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=d,p=new Set([qc,Kc,Yc]),g=new Set([xn,Xn,hr,_s,Vc,Wc]),S=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const x=[],T=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1,I=null,O=null,P=null,U=null;this._outputColorSpace=at;let G=0,F=0,Z=null,H=-1,X=null;const q=new At,le=new At;let we=null;const V=new $e(0);let se=0,ge=t.width,De=t.height,he=1,Oe=null,ft=null;const Xe=new At(0,0,ge,De),je=new At(0,0,ge,De);let nt=!1;const ne=new mr,pe=new sl;let ue=!1,Ee=!1;const xe=new tt,Ke=new D,Pe=new At,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function lt(){return Z===null?he:1}let B=n;function Rt(w,k){return t.getContext(w,k)}let Fe,ze,oe,mt,Ue,Re,A,y,z,ce,ie,de,me,$,Q,_e,N,te,J,Se,fe,ve,Ve;try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",Te,!1),B===null){const k="webgl2";if(B=Rt(k,w),B===null)throw Rt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(w){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ze("WebGLRenderer: "+w.message),w}function Le(){Fe=new qx(B),Fe.init(),fe=new Ov(B,Fe),ze=new Fx(B,Fe,e,fe),oe=new Nv(B,Fe),ze.reversedDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),O=B.createFramebuffer(),P=B.createFramebuffer(),U=B.createFramebuffer(),mt=new Jx(B),Ue=new vv,Re=new Dv(B,Fe,oe,Ue,ze,fe,mt),A=new Kx(C),y=new j0(B),ve=new Ox(B,y),z=new $x(B,y,mt,ve),ce=new jx(B,z,y,ve,mt),te=new Qx(B,ze,Re),Q=new Bx(Ue),ie=new _v(C,A,Fe,ze,ve,Q),de=new Gv(C,Ue),me=new Mv,$=new Av(Fe),N=new Dx(C,A,oe,ce,m,c),_e=new Iv(C,ce,ze),Ve=new zv(B,mt,ze,oe),J=new Ux(B,Fe,mt),Se=new Zx(B,Fe,mt),mt.programs=ie.programs,C.capabilities=ze,C.extensions=Fe,C.properties=Ue,C.renderLists=me,C.shadowMap=_e,C.state=oe,C.info=mt}_!==xn&&(L=new t_(_,t.width,t.height,a,i,r));const re=new kv(C,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(w){w!==void 0&&(he=w,this.setSize(ge,De,!1))},this.getSize=function(w){return w.set(ge,De)},this.setSize=function(w,k,K=!0){if(re.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=w,De=k,t.width=Math.floor(w*he),t.height=Math.floor(k*he),K===!0&&(t.style.width=w+"px",t.style.height=k+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(ge*he,De*he).floor()},this.setDrawingBufferSize=function(w,k,K){ge=w,De=k,he=K,t.width=Math.floor(w*K),t.height=Math.floor(k*K),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(_===xn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(q)},this.getViewport=function(w){return w.copy(Xe)},this.setViewport=function(w,k,K,W){w.isVector4?Xe.set(w.x,w.y,w.z,w.w):Xe.set(w,k,K,W),oe.viewport(q.copy(Xe).multiplyScalar(lt()).round())},this.getScissor=function(w){return w.copy(je)},this.setScissor=function(w,k,K,W){w.isVector4?je.set(w.x,w.y,w.z,w.w):je.set(w,k,K,W),oe.scissor(le.copy(je).multiplyScalar(lt()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){oe.setScissorTest(nt=w)},this.setOpaqueSort=function(w){Oe=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,K=!0){let W=0;if(w){let Y=!1;if(Z!==null){const ye=Z.texture.format;Y=p.has(ye)}if(Y){const ye=Z.texture.type,Be=g.has(ye),Me=N.getClearColor(),Ae=N.getClearAlpha(),Ge=Me.r,Qe=Me.g,dt=Me.b;Be?(S[0]=Ge,S[1]=Qe,S[2]=dt,S[3]=Ae,B.clearBufferuiv(B.COLOR,0,S)):(M[0]=Ge,M[1]=Qe,M[2]=dt,M[3]=Ae,B.clearBufferiv(B.COLOR,0,M))}else W|=B.COLOR_BUFFER_BIT}k&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),N.dispose(),me.dispose(),$.dispose(),Re.dispose(),Ue.dispose(),A.dispose(),ce.dispose(),z.dispose(),ve.dispose(),Ve.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",wl),re.removeEventListener("sessionend",bl),Pi.stop()};function Ie(w){w.preventDefault(),So("WebGLRenderer: Context Lost."),R=!0}function qe(){So("WebGLRenderer: Context Restored."),R=!1;const w=mt.autoReset,k=_e.enabled,K=_e.autoUpdate,W=_e.needsUpdate,Y=_e.type;Le(),mt.autoReset=w,_e.enabled=k,_e.autoUpdate=K,_e.needsUpdate=W,_e.type=Y}function Te(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function St(w){const k=w.target;k.removeEventListener("dispose",St),Yt(k)}function Yt(w){fi(w),Ue.remove(w)}function fi(w){const k=Ue.get(w).programs;k!==void 0&&(k.forEach(function(K){ie.releaseProgram(K)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,K,W,Y,ye){k===null&&(k=Je);const Be=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Me=id(w,k,K,W,Y);oe.setMaterial(W,Be);let Ae=K.index,Ge=1;if(W.wireframe===!0){if(Ae=z.getWireframeAttribute(K),Ae===void 0)return;Ge=2}const Qe=K.drawRange,dt=K.attributes.position;let ke=Qe.start*Ge,pt=(Qe.start+Qe.count)*Ge;ye!==null&&(ke=Math.max(ke,ye.start*Ge),pt=Math.min(pt,(ye.start+ye.count)*Ge)),Ae!==null?(ke=Math.max(ke,0),pt=Math.min(pt,Ae.count)):dt!=null&&(ke=Math.max(ke,0),pt=Math.min(pt,dt.count));const Bt=pt-ke;if(Bt<0||Bt===1/0)return;ve.setup(Y,W,Me,K,Ae);let Et,wt=J;if(Ae!==null&&(Et=y.get(Ae),wt=Se,wt.setIndex(Et)),Y.isMesh)W.wireframe===!0?(oe.setLineWidth(W.wireframeLinewidth*lt()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if(Y.isLine){let Qt=W.linewidth;Qt===void 0&&(Qt=1),oe.setLineWidth(Qt*lt()),Y.isLineSegments?wt.setMode(B.LINES):Y.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else Y.isPoints?wt.setMode(B.POINTS):Y.isSprite&&wt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))wt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qt=Y._multiDrawStarts,He=Y._multiDrawCounts,sn=Y._multiDrawCount,_t=Ae?y.get(Ae).bytesPerElement:1,Li=Ue.get(W).currentProgram.getUniforms();for(let jt=0;jt<sn;jt++)Li.setValue(B,"_gl_DrawID",jt),wt.render(Qt[jt]/_t,He[jt])}else if(Y.isInstancedMesh)wt.renderInstances(ke,Bt,Y.count);else if(K.isInstancedBufferGeometry){const Qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,He=Math.min(K.instanceCount,Qt);wt.renderInstances(ke,Bt,He)}else wt.render(ke,Bt)};function Tl(w,k,K,W){I!==null&&w.isNodeMaterial&&I.setObject(W,w),ue===!0&&Q.setState(w,K,!1),w.transparent===!0&&w.side===gn&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,Os(w,k,W),w.side=Wn,w.needsUpdate=!0,Os(w,k,W),w.side=gn):Os(w,k,W)}this.compile=function(w,k,K=null){K===null&&(K=w),I!==null&&I.renderStart(w,k,K),E=$.get(K),E.init(k),T.push(E),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),w!==K&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),Ee=this.localClippingEnabled,ue=Q.init(this.clippingPlanes,Ee),ue===!0&&Q.setGlobalState(this.clippingPlanes,k),I!==null&&_e.render(E.state.shadowsArray,K,k);const W=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Be=0;Be<ye.length;Be++){const Me=ye[Be];Tl(Me,K,k,Y),W.add(Me)}else Tl(ye,K,k,Y),W.add(ye)}),E=T.pop(),I!==null&&I.renderEnd(),W},this.compileAsync=function(w,k,K=null){const W=this.compile(w,k,K);return new Promise(Y=>{function ye(){if(W.forEach(function(Be){const Ae=Ue.get(Be).currentProgram;(Ae===void 0||Ae.isReady())&&W.delete(Be)}),W.size===0){Y(w);return}setTimeout(ye,10)}Fe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Zo=null;function td(w){Zo&&Zo(w)}function wl(){Pi.stop()}function bl(){Pi.start()}const Pi=new bf;Pi.setAnimationLoop(td),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(w){Zo=w,re.setAnimationLoop(w),w===null?Pi.stop():Pi.start()},re.addEventListener("sessionstart",wl),re.addEventListener("sessionend",bl),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(w,k);const K=re.enabled===!0&&re.isPresenting===!0,W=L!==null&&(Z===null||K)&&L.begin(C,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(k),k=re.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,k,Z),E=$.get(w,T.length),E.init(k),E.state.textureUnits=Re.getTextureUnits(),T.push(E),xe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?pe.setFromArrayCamera(k):ne.setFromProjectionMatrix(xe,Pn,k.reversedDepth),Ee=this.localClippingEnabled,ue=Q.init(this.clippingPlanes,Ee),b=me.get(w,x.length),b.init(),x.push(b),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const Be=C.xr.getDepthSensingMesh();Be!==null&&Jo(Be,k,-1/0,C.sortObjects)}Jo(w,k,0,C.sortObjects),b.finish(),I!==null&&I.updateLights(E.state.lightsArray),C.sortObjects===!0&&b.sort(Oe,ft),it=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,it&&N.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),ue===!0&&Q.beginShadows();const Y=E.state.shadowsArray;if(_e.render(Y,w,k),ue===!0&&Q.endShadows(),(W&&L.hasRenderPass())===!1){const Be=b.opaque,Me=b.transmissive;if(E.setupLights(),k.isArrayCamera){const Ae=k.cameras;if(Me.length>0)for(let Ge=0,Qe=Ae.length;Ge<Qe;Ge++){const dt=Ae[Ge];Al(Be,Me,w,dt)}it&&N.render(w);for(let Ge=0,Qe=Ae.length;Ge<Qe;Ge++){const dt=Ae[Ge];El(b,w,dt,dt.viewport)}}else Me.length>0&&Al(Be,Me,w,k),it&&N.render(w),El(b,w,k)}Z!==null&&F===0&&(Re.updateMultisampleRenderTarget(Z),Re.updateRenderTargetMipmap(Z)),W&&L.end(C),w.isScene===!0&&w.onAfterRender(C,w,k),ve.resetDefaultState(),H=-1,X=null,T.pop(),T.length>0?(E=T[T.length-1],Re.setTextureUnits(E.state.textureUnits),ue===!0&&Q.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,I!==null&&I.renderEnd()};function Jo(w,k,K,W){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){const Be=k.isArrayCamera?pe:ne;if(!w.frustumCulled||w.intersectsFrustum(Be)){W&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);const Me=ce.update(w),Ae=w.material;Ae.visible&&b.push(w,Me,Ae,K,Pe.z,null,k)}}else if(w.isMesh||w.isLine||w.isPoints){const Be=k.isArrayCamera?pe:ne;if(!w.frustumCulled||w.intersectsFrustum(Be)){const Me=ce.update(w),Ae=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Pe.copy(Me.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(Ae)){const Ge=Me.groups;for(let Qe=0,dt=Ge.length;Qe<dt;Qe++){const ke=Ge[Qe],pt=Ae[ke.materialIndex];pt&&pt.visible&&b.push(w,Me,pt,K,Pe.z,ke,k)}}else Ae.visible&&b.push(w,Me,Ae,K,Pe.z,null,k)}}}const ye=w.children;for(let Be=0,Me=ye.length;Be<Me;Be++)Jo(ye[Be],k,K,W)}function El(w,k,K,W){const{opaque:Y,transmissive:ye,transparent:Be}=w;E.setupLightsView(K),ue===!0&&Q.setGlobalState(C.clippingPlanes,K),W&&oe.viewport(q.copy(W)),Y.length>0&&Ar(Y,k,K),ye.length>0&&Ar(ye,k,K),Be.length>0&&Ar(Be,k,K),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Al(w,k,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const ke=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Ln(1,1,{generateMipmaps:!0,type:ke?In:xn,minFilter:Hn,samples:Math.max(4,ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const ye=E.state.transmissionRenderTarget[W.id],Be=W.viewport||q;ye.setSize(Be.z*C.transmissionResolutionScale,Be.w*C.transmissionResolutionScale);const Me=C.getRenderTarget(),Ae=C.getActiveCubeFace(),Ge=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(V),se=C.getClearAlpha(),se<1&&C.setClearColor(16777215,.5),C.clear(),it&&N.render(K);const Qe=C.toneMapping;C.toneMapping=zn;const dt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ue===!0&&Q.setGlobalState(C.clippingPlanes,W),Ar(w,K,W),Re.updateMultisampleRenderTarget(ye),Re.updateRenderTargetMipmap(ye),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let pt=0,Bt=k.length;pt<Bt;pt++){const Et=k[pt],{object:wt,geometry:Qt,material:He,group:sn}=Et;if(He.side===gn&&wt.layers.test(W.layers)){const _t=He.side;He.side=fn,He.needsUpdate=!0,Rl(wt,K,W,Qt,He,sn),He.side=_t,He.needsUpdate=!0,ke=!0}}ke===!0&&(Re.updateMultisampleRenderTarget(ye),Re.updateRenderTargetMipmap(ye))}C.setRenderTarget(Me,Ae,Ge),C.setClearColor(V,se),dt!==void 0&&(W.viewport=dt),C.toneMapping=Qe}function Ar(w,k,K){const W=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,ye=w.length;Y<ye;Y++){const Be=w[Y],{object:Me,geometry:Ae,group:Ge}=Be;let Qe=Be.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),Me.layers.test(K.layers)&&Rl(Me,k,K,Ae,Qe,Ge)}}function Rl(w,k,K,W,Y,ye){I!==null&&Y.isNodeMaterial&&I.setObject(w,Y),w.onBeforeRender(C,k,K,W,Y,ye),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(C,k,K,W,w,ye),Y.transparent===!0&&Y.side===gn&&Y.forceSinglePass===!1?(Y.side=fn,Y.needsUpdate=!0,C.renderBufferDirect(K,k,W,Y,w,ye),Y.side=Wn,Y.needsUpdate=!0,C.renderBufferDirect(K,k,W,Y,w,ye),Y.side=gn):C.renderBufferDirect(K,k,W,Y,w,ye),w.onAfterRender(C,k,K,W,Y,ye)}function Cl(w){let k=0;for(const K of w)K.texture!==null&&k++;return k}function Os(w,k,K){k.isScene!==!0&&(k=Je);const W=Ue.get(w),Y=E.state.lights,ye=E.state.shadowsArray,Be=Y.state.version,Me=ie.getParameters(w,Y.state,ye,k,K,E.state.lightProbeGridArray),Ae=ie.getProgramCacheKey(Me);let Ge=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=A.get(w.envMap||W.environment,Qe),W.envMapRotation=W.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",St),Ge=new Map,W.programs=Ge,W.programVariants=new Map);let dt=Ge.get(Ae);if(dt!==void 0){if(W.currentProgram===dt&&W.lightsStateVersion===Be)return Ll(w,Me),dt}else Me.uniforms=ie.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,K,Me),w.onBeforeCompile(Me,C),dt=ie.acquireProgram(Me,Ae),Ge.set(Ae,dt),W.uniforms=Me.uniforms;const ke=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=Q.uniform),Ll(w,Me),W.needsLights=rd(w),W.lightsStateVersion=Be,W.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.sunLights.value=Y.state.sun,ke.sunLightShadows.value=Y.state.sunShadow,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.sunShadowMatrix.value=Y.state.sunShadowMatrix,ke.sunShadowCascade.value=Y.state.sunShadowCascade,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.numLightProbeGrids=Cl(E.state.lightProbeGridArray),W.currentProgram=dt,W.uniformsList=null,dt}function nd(w,k,K,W,Y){const ye=Ue.get(w),Be=ye.currentProgram.id+","+W+","+Y;let Me=ye.programVariants.get(Be);return Me===void 0?(Me=Os(w,k,K),ye.programVariants.set(Be,Me)):(ye.currentProgram=Me,ye.uniformsList=null,ye.outputColorSpace=W,ye.toneMapping=Y),Me}function Pl(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=po.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Ll(w,k){const K=Ue.get(w);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function id(w,k,K,W,Y){k.isScene!==!0&&(k=Je),Re.resetTextureUnits();const ye=k.fog,Be=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,Me=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ht.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ge=A.get(W.envMap||Be,Ae),Qe=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,dt=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!K.morphAttributes.position,pt=!!K.morphAttributes.normal,Bt=!!K.morphAttributes.color;let Et=zn;W.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Et=C.toneMapping);const wt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qt=wt!==void 0?wt.length:0,He=Ue.get(W),sn=E.state.lights;if(ue===!0&&(Ee===!0||w!==X)){const It=w===X&&W.id===H;Q.setState(W,w,It)}let _t=!1,Li=!1;W.version===He.__version?He.needsLights&&He.lightsStateVersion!==sn.state.version||Y.isBatchedMesh&&He.batching===!1||!Y.isBatchedMesh&&He.batching===!0||Y.isBatchedMesh&&He.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&He.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&He.instancing===!1||!Y.isInstancedMesh&&He.instancing===!0||Y.isSkinnedMesh&&He.skinning===!1||!Y.isSkinnedMesh&&He.skinning===!0||Y.isInstancedMesh&&He.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&He.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&He.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&He.instancingMorph===!1&&Y.morphTexture!==null||He.envMap!==Ge||W.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Q.numPlanes||He.numIntersection!==Q.numIntersection)||He.vertexAlphas!==Qe||He.vertexTangents!==dt||He.morphTargets!==ke||He.morphNormals!==pt||He.morphColors!==Bt||He.morphTargetsCount!==Qt||He.numLightProbeGrids!==Cl(E.state.lightProbeGridArray)?_t=!0:(He.outputColorSpace!==Me||He.toneMapping!==Et)&&(Li=!0):(_t=!0,He.__version=W.version);let jt=He.currentProgram;(_t===!0||Li===!0)&&(jt=Li===!0?nd(W,k,Y,Me,Et):Os(W,k,Y),I&&W.isNodeMaterial&&I.onUpdateProgram(W,jt,He));let Rr=!1,di=!1,Ii=!1;const gt=jt.getUniforms(),Jt=He.uniforms;if(oe.useProgram(jt.program)&&(Rr=!0,di=!0,Ii=!0),W.id!==H&&(H=W.id,di=!0),Rr||X!==w){oe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),gt.setValue(B,"projectionMatrix",w.projectionMatrix),gt.setValue(B,"viewMatrix",w.matrixWorldInverse);const Kt=gt.map.cameraPosition;Kt!==void 0&&Kt.setValue(B,Ke.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&gt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&gt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,di=!0,Ii=!0)}if(He.needsLights&&(sn.state.sunShadowMap.length>0&&gt.setValue(B,"sunShadowMap",sn.state.sunShadowMap,Re),sn.state.directionalShadowMap.length>0&&gt.setValue(B,"directionalShadowMap",sn.state.directionalShadowMap,Re),sn.state.spotShadowMap.length>0&&gt.setValue(B,"spotShadowMap",sn.state.spotShadowMap,Re),sn.state.pointShadowMap.length>0&&gt.setValue(B,"pointShadowMap",sn.state.pointShadowMap,Re)),Y.isSkinnedMesh){gt.setOptional(B,Y,"bindMatrix"),gt.setOptional(B,Y,"bindMatrixInverse");const It=Y.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),gt.setValue(B,"boneTexture",It.boneTexture,Re))}Y.isBatchedMesh&&(gt.setOptional(B,Y,"batchingTexture"),gt.setValue(B,"batchingTexture",Y._matricesTexture,Re),gt.setOptional(B,Y,"batchingIdTexture"),gt.setValue(B,"batchingIdTexture",Y._indirectTexture,Re),gt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&gt.setValue(B,"batchingColorTexture",Y._colorsTexture,Re));const wn=K.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&te.update(Y,K,jt),(di||He.receiveShadow!==Y.receiveShadow)&&(He.receiveShadow=Y.receiveShadow,gt.setValue(B,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=Wv()),di){if(gt.setValue(B,"toneMappingExposure",C.toneMappingExposure),He.needsLights&&sd(Jt,Ii),ye&&W.fog===!0&&de.refreshFogUniforms(Jt,ye),de.refreshMaterialUniforms(Jt,W,he,De,E.state.transmissionRenderTarget[w.id]),He.needsLights&&He.numLightProbeGrids>0){const It=v;let Kt=0;for(const $n of E.state.lightProbeGridArray)$n.texture!==null&&(It.textures[Kt]=$n.texture,It.min[Kt]=$n.boundingBox.min,It.max[Kt]=$n.boundingBox.max,It.resolution[Kt]=$n.resolution,Kt++);for(const $n in It)It[$n].length=Kt;Jt.probesSH.value=It.textures,Jt.probesMin.value=It.min,Jt.probesMax.value=It.max,Jt.probesResolution.value=It.resolution}po.upload(B,Pl(He),Jt,Re)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(po.upload(B,Pl(He),Jt,Re),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&gt.setValue(B,"center",Y.center),gt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(B,"normalMatrix",Y.normalMatrix),gt.setValue(B,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){const It=W.uniformsGroups;for(let Kt=0,$n=It.length;Kt<$n;Kt++){const Nl=It[Kt];Ve.update(Nl,jt),Ve.bind(Nl,jt)}}return jt}function sd(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function rd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,k,K){const W=Ue.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ue.get(w.texture).__webglTexture=k,Ue.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){const K=Ue.get(w);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,K=0){Z=w,G=k,F=K;let W=null,Y=!1,ye=!1;if(w){const Me=Ue.get(w);if(Me.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),q.copy(w.viewport),le.copy(w.scissor),we=w.scissorTest,oe.viewport(q),oe.scissor(le),oe.setScissorTest(we),H=-1;return}else if(Me.__webglFramebuffer===void 0)Re.setupRenderTarget(w);else if(Me.__hasExternalTextures)Re.rebindTextures(w,Ue.get(w.texture).__webglTexture,Ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Qe=w.depthTexture;if(Me.__boundDepthTexture!==Qe){if(Qe!==null&&Ue.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(w)}}const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);const Ge=Ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?W=Ge[k][K]:W=Ge[k],Y=!0):w.samples>0&&Re.useMultisampledRTT(w)===!1?W=Ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?W=Ge[K]:W=Ge,q.copy(w.viewport),le.copy(w.scissor),we=w.scissorTest}else q.copy(Xe).multiplyScalar(he).floor(),le.copy(je).multiplyScalar(he).floor(),we=nt;if(K!==0&&(W=O),oe.bindFramebuffer(B.FRAMEBUFFER,W)&&oe.drawBuffers(w,W),oe.viewport(q),oe.scissor(le),oe.setScissorTest(we),Y){const Me=Ue.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,K)}else if(ye){const Me=k;for(let Ae=0;Ae<w.textures.length;Ae++){const Ge=Ue.get(w.textures[Ae]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ae,Ge.__webglTexture,K,Me)}}else if(w!==null&&K!==0){const Me=Ue.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,K)}H=-1};function Il(w){const k=Ue.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=ze.textureFormatReadable(w.format),k.__typeReadable=ze.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,K,W,Y,ye,Be,Me=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ae=Ae[Be],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){oe.bindFramebuffer(B.FRAMEBUFFER,Ae);try{const Ge=w.textures[Me],Qe=Ge.format,dt=Ge.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const ke=Il(Ge);if(ke.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-W&&K>=0&&K<=w.height-Y&&B.readPixels(k,K,W,Y,fe.convert(Qe),fe.convert(dt),ye)}finally{const Ge=Z!==null?Ue.get(Z).__webglFramebuffer:null;oe.bindFramebuffer(B.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,k,K,W,Y,ye,Be,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ae=Ae[Be],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(k>=0&&k<=w.width-W&&K>=0&&K<=w.height-Y){oe.bindFramebuffer(B.FRAMEBUFFER,Ae);const Ge=w.textures[Me],Qe=Ge.format,dt=Ge.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const ke=Il(Ge);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(k,K,W,Y,fe.convert(Qe),fe.convert(dt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Bt=Z!==null?Ue.get(Z).__webglFramebuffer:null;oe.bindFramebuffer(B.FRAMEBUFFER,Bt);const Et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Vd(B,Et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(pt),B.deleteSync(Et),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,K=0){const W=Math.pow(2,-K),Y=Math.floor(w.image.width*W),ye=Math.floor(w.image.height*W),Be=k!==null?k.x:0,Me=k!==null?k.y:0;Re.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Be,Me,Y,ye),oe.unbindTexture()},this.copyTextureToTexture=function(w,k,K=null,W=null,Y=0,ye=0){let Be,Me,Ae,Ge,Qe,dt,ke,pt,Bt;const Et=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(K!==null)Be=K.max.x-K.min.x,Me=K.max.y-K.min.y,Ae=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,Qe=K.min.y,dt=K.isBox3?K.min.z:0;else{const gt=Math.pow(2,-Y);Be=Math.floor(Et.width*gt),Me=Math.floor(Et.height*gt),w.isDataArrayTexture?Ae=Et.depth:w.isData3DTexture?Ae=Math.floor(Et.depth*gt):Ae=1,Ge=0,Qe=0,dt=0}W!==null?(ke=W.x,pt=W.y,Bt=W.z):(ke=0,pt=0,Bt=0);const wt=fe.convert(k.format),Qt=fe.convert(k.type);let He;k.isData3DTexture?(Re.setTexture3D(k,0),He=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Re.setTexture2DArray(k,0),He=B.TEXTURE_2D_ARRAY):(Re.setTexture2D(k,0),He=B.TEXTURE_2D),oe.activeTexture(B.TEXTURE0),oe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),oe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),oe.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const sn=oe.getParameter(B.UNPACK_ROW_LENGTH),_t=oe.getParameter(B.UNPACK_IMAGE_HEIGHT),Li=oe.getParameter(B.UNPACK_SKIP_PIXELS),jt=oe.getParameter(B.UNPACK_SKIP_ROWS),Rr=oe.getParameter(B.UNPACK_SKIP_IMAGES);oe.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),oe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),oe.pixelStorei(B.UNPACK_SKIP_PIXELS,Ge),oe.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),oe.pixelStorei(B.UNPACK_SKIP_IMAGES,dt);const di=w.isDataArrayTexture||w.isData3DTexture,Ii=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const gt=Ue.get(w),Jt=Ue.get(k),wn=Ue.get(gt.__renderTarget),It=Ue.get(Jt.__renderTarget);oe.bindFramebuffer(B.READ_FRAMEBUFFER,wn.__webglFramebuffer),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Kt=0;Kt<Ae;Kt++)di&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(w).__webglTexture,Y,dt+Kt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(k).__webglTexture,ye,Bt+Kt)),B.blitFramebuffer(Ge,Qe,Ge+Be,Qe+Me,ke,pt,ke+Be,pt+Me,B.DEPTH_BUFFER_BIT,B.NEAREST);oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Ue.has(w)){const gt=Ue.get(w),Jt=Ue.get(k);oe.bindFramebuffer(B.READ_FRAMEBUFFER,P),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let wn=0;wn<Ae;wn++)di?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,gt.__webglTexture,Y,dt+wn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gt.__webglTexture,Y),Ii?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,ye,Bt+wn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,ye),Y!==0?B.blitFramebuffer(Ge,Qe,Ge+Be,Qe+Me,ke,pt,ke+Be,pt+Me,B.COLOR_BUFFER_BIT,B.NEAREST):Ii?B.copyTexSubImage3D(He,ye,ke,pt,Bt+wn,Ge,Qe,Be,Me):B.copyTexSubImage2D(He,ye,ke,pt,Ge,Qe,Be,Me);oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ii?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(He,ye,ke,pt,Bt,Be,Me,Ae,wt,Qt,Et.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(He,ye,ke,pt,Bt,Be,Me,Ae,wt,Et.data):B.texSubImage3D(He,ye,ke,pt,Bt,Be,Me,Ae,wt,Qt,Et):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,ke,pt,Be,Me,wt,Qt,Et.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,ke,pt,Et.width,Et.height,wt,Et.data):B.texSubImage2D(B.TEXTURE_2D,ye,ke,pt,Be,Me,wt,Qt,Et);oe.pixelStorei(B.UNPACK_ROW_LENGTH,sn),oe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),oe.pixelStorei(B.UNPACK_SKIP_PIXELS,Li),oe.pixelStorei(B.UNPACK_SKIP_ROWS,jt),oe.pixelStorei(B.UNPACK_SKIP_IMAGES,Rr),ye===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&B.generateMipmap(He),oe.unbindTexture()},this.initRenderTarget=function(w){Ue.get(w).__webglFramebuffer===void 0&&Re.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Re.setTextureCube(w,0):w.isData3DTexture?Re.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Re.setTexture2DArray(w,0):Re.setTexture2D(w,0),oe.unbindTexture()},this.resetState=function(){G=0,F=0,Z=null,oe.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const Yv=["#000000","#ffffff","#813338","#75cec8","#8e3c97","#56ac4d","#2e2c9b","#edf171","#8e5029","#553800","#c46c71","#4a4a4a","#7b7b7b","#a9ff9f","#706deb","#b2b2b2"],ar=Yv.map(s=>[parseInt(s.slice(1,3),16),parseInt(s.slice(3,5),16),parseInt(s.slice(5,7),16)]),Uf=new Uint8Array(1024);function j(s,e){const t=(s&127)*8;for(let n=0;n<8;n++)Uf[t+n]=e[n]??0}j(0,[60,102,110,110,96,98,60,0]);j(1,[24,60,102,126,102,102,102,0]);j(2,[124,102,102,124,102,102,124,0]);j(3,[60,102,96,96,96,102,60,0]);j(4,[120,108,102,102,102,108,120,0]);j(5,[126,96,96,120,96,96,126,0]);j(6,[126,96,96,120,96,96,96,0]);j(7,[60,102,96,110,102,102,60,0]);j(8,[102,102,102,126,102,102,102,0]);j(9,[60,24,24,24,24,24,60,0]);j(10,[30,12,12,12,108,108,56,0]);j(11,[102,108,120,112,120,108,102,0]);j(12,[96,96,96,96,96,96,126,0]);j(13,[99,119,127,107,99,99,99,0]);j(14,[102,118,126,126,110,102,102,0]);j(15,[60,102,102,102,102,102,60,0]);j(16,[124,102,102,124,96,96,96,0]);j(17,[60,102,102,102,106,108,54,0]);j(18,[124,102,102,124,108,102,102,0]);j(19,[60,102,96,60,6,102,60,0]);j(20,[126,24,24,24,24,24,24,0]);j(21,[102,102,102,102,102,102,60,0]);j(22,[102,102,102,102,102,60,24,0]);j(23,[99,99,99,107,127,119,99,0]);j(24,[102,102,60,24,60,102,102,0]);j(25,[102,102,102,60,24,24,24,0]);j(26,[126,6,12,24,48,96,126,0]);j(27,[60,48,48,48,48,48,60,0]);j(28,[28,54,48,124,48,48,126,0]);j(29,[60,12,12,12,12,12,60,0]);j(30,[24,60,126,24,24,24,24,0]);j(31,[0,16,48,126,48,16,0,0]);j(32,[0,0,0,0,0,0,0,0]);j(33,[24,24,24,24,0,0,24,0]);j(34,[102,102,102,0,0,0,0,0]);j(35,[102,102,255,102,255,102,102,0]);j(36,[24,62,96,60,6,124,24,0]);j(37,[98,102,12,24,48,102,70,0]);j(38,[60,102,60,56,103,102,63,0]);j(39,[6,12,24,0,0,0,0,0]);j(40,[12,24,48,48,48,24,12,0]);j(41,[48,24,12,12,12,24,48,0]);j(42,[0,102,60,255,60,102,0,0]);j(43,[0,24,24,126,24,24,0,0]);j(44,[0,0,0,0,0,24,24,48]);j(45,[0,0,0,126,0,0,0,0]);j(46,[0,0,0,0,0,24,24,0]);j(47,[0,3,6,12,24,48,96,0]);j(48,[60,102,110,118,102,102,60,0]);j(49,[24,56,24,24,24,24,126,0]);j(50,[60,102,6,28,48,96,126,0]);j(51,[126,12,24,28,6,102,60,0]);j(52,[12,28,60,108,126,12,12,0]);j(53,[126,96,124,6,6,102,60,0]);j(54,[60,96,124,102,102,102,60,0]);j(55,[126,102,12,24,24,24,24,0]);j(56,[60,102,102,60,102,102,60,0]);j(57,[60,102,102,62,6,12,56,0]);j(58,[0,0,24,0,0,24,0,0]);j(59,[0,0,24,0,0,24,24,48]);j(60,[12,24,48,96,48,24,12,0]);j(61,[0,0,126,0,126,0,0,0]);j(62,[48,24,12,6,12,24,48,0]);j(63,[60,102,6,12,24,0,24,0]);j(64,[0,0,0,255,0,0,0,0]);j(65,[24,60,126,255,255,24,60,0]);j(66,[24,24,24,24,24,24,24,24]);j(67,[0,0,0,255,0,0,0,0]);j(68,[0,0,0,0,0,255,0,0]);j(69,[0,255,0,0,0,0,0,0]);j(70,[0,0,0,0,0,0,255,0]);j(71,[96,96,96,96,96,96,96,96]);j(72,[6,6,6,6,6,6,6,6]);j(73,[0,0,0,0,7,24,32,96]);j(74,[96,32,24,7,0,0,0,0]);j(75,[6,4,24,224,0,0,0,0]);j(76,[0,0,0,0,0,0,0,255]);j(77,[128,192,96,48,24,12,6,3]);j(78,[1,3,6,12,24,48,96,192]);j(79,[0,0,0,0,224,24,4,6]);j(80,[0,0,0,15,8,8,8,8]);j(81,[0,60,126,126,126,126,60,0]);j(82,[0,0,0,0,0,0,255,255]);j(83,[0,108,254,254,124,56,16,0]);j(84,[192,192,192,192,192,192,192,192]);j(85,[0,0,0,224,24,8,8,8]);j(86,[129,66,36,24,24,36,66,129]);j(87,[0,60,102,102,102,102,60,0]);j(88,[24,60,24,126,255,126,24,60]);j(89,[3,3,3,3,3,3,3,3]);j(90,[24,60,126,255,126,60,24,0]);j(91,[24,24,24,255,24,24,24,24]);j(92,[170,85,170,85,170,85,170,85]);j(93,[24,24,24,24,24,24,24,24]);j(94,[0,126,36,36,36,36,102,0]);j(95,[128,192,224,240,248,252,254,255]);j(96,[0,0,0,0,0,0,0,0]);j(97,[240,240,240,240,240,240,240,240]);j(98,[0,0,0,0,255,255,255,255]);j(99,[255,0,0,0,0,0,0,0]);j(100,[0,0,0,0,0,0,0,255]);j(101,[192,192,192,192,192,192,192,192]);j(102,[85,170,85,170,85,170,85,170]);j(103,[3,3,3,3,3,3,3,3]);j(104,[0,0,0,0,85,170,85,170]);j(105,[1,3,7,15,31,63,127,255]);j(106,[3,3,3,3,3,3,3,3]);j(107,[24,24,24,31,24,24,24,24]);j(108,[0,0,0,0,15,15,15,15]);j(109,[24,24,24,31,0,0,0,0]);j(110,[0,0,0,248,24,24,24,24]);j(111,[0,0,0,0,0,0,255,255]);j(112,[0,0,0,31,24,24,24,24]);j(113,[24,24,24,255,0,0,0,0]);j(114,[0,0,0,255,24,24,24,24]);j(115,[24,24,24,248,24,24,24,24]);j(116,[192,192,192,192,192,192,192,192]);j(117,[224,224,224,224,224,224,224,224]);j(118,[7,7,7,7,7,7,7,7]);j(119,[255,255,0,0,0,0,0,0]);j(120,[255,255,255,0,0,0,0,0]);j(121,[0,0,0,0,0,255,255,255]);j(122,[0,0,0,0,15,15,15,15]);j(123,[0,0,0,0,240,240,240,240]);j(124,[240,240,240,240,15,15,15,15]);j(125,[24,24,24,248,0,0,0,0]);j(126,[240,240,240,240,0,0,0,0]);j(127,[15,15,15,15,240,240,240,240]);function Kv(s){if(s===163)return 28;const e=s&255;return e>=97&&e<=122?e-96:e>=64&&e<=95?e-64:e>=32&&e<=63?e:e>=160&&e<=191?e-64:e>=192&&e<=223||e>=224&&e<=254?e-128:e===255?94:-1}function qv(s){const e=s&127;return e===0?"@":e>=1&&e<=26?String.fromCharCode(e+64):e===27?"[":e===28?"£":e===29?"]":e===30?"^":e===31?"_":e>=32&&e<=63?String.fromCharCode(e):e>=64&&e<=95?String.fromCharCode(e+128):e>=96&&e<=127?String.fromCharCode(e+64):" "}const $v={5:1,28:2,30:5,31:6,129:8,144:0,149:9,150:10,151:11,152:12,153:13,154:14,155:15,156:4,158:7,159:3},Mt=40,$t=25,Ff=32,Bf=36,Ia=Mt*8+Ff*2,ou=$t*8+Bf*2,so=new Uint32Array(ar.map(([s,e,t])=>4278190080|t<<16|e<<8|s));class Zv{screenRam=new Uint8Array(Mt*$t);colorRam=new Uint8Array(Mt*$t);continued=new Uint8Array($t);borderColor=14;bgColor=6;textColor=14;cursorX=0;cursorY=0;cursorEnabled=!0;cursorBlinkOn=!0;reverseMode=!1;canvas;ctx;imgData;pixels;blinkAccum=0;scrollCount=0;dirty=!0;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Ia,this.canvas.height=ou;const e=this.canvas.getContext("2d");if(!e)throw new Error("2D context unavailable");this.ctx=e,this.imgData=e.createImageData(Ia,ou),this.pixels=new Uint32Array(this.imgData.data.buffer),this.clear()}reset(){this.borderColor=14,this.bgColor=6,this.textColor=14,this.reverseMode=!1,this.cursorEnabled=!0,this.resetBlink(),this.clear()}clear(){this.screenRam.fill(32),this.colorRam.fill(this.textColor),this.continued.fill(0),this.cursorX=0,this.cursorY=0,this.dirty=!0}home(){this.cursorX=0,this.cursorY=0,this.reverseMode=!1,this.resetBlink(),this.dirty=!0}resetBlink(){this.blinkAccum=0,this.cursorBlinkOn||(this.cursorBlinkOn=!0,this.dirty=!0)}tick(e){this.cursorEnabled&&(this.blinkAccum+=e,this.blinkAccum>=.42&&(this.blinkAccum%=.42,this.cursorBlinkOn=!this.cursorBlinkOn,this.dirty=!0))}setBorder(e){const t=e&15;t!==this.borderColor&&(this.borderColor=t,this.dirty=!0)}setBg(e){const t=e&15;t!==this.bgColor&&(this.bgColor=t,this.dirty=!0)}setTextColor(e){this.textColor=e&15}pokeScreen(e,t){e>=0&&e<Mt*$t&&(this.screenRam[e]=t&255,this.dirty=!0)}pokeColor(e,t){e>=0&&e<Mt*$t&&(this.colorRam[e]=t&15,this.dirty=!0)}scrollUp(){this.screenRam.copyWithin(0,Mt),this.colorRam.copyWithin(0,Mt),this.continued.copyWithin(0,1);const e=($t-1)*Mt;this.screenRam.fill(32,e),this.colorRam.fill(this.textColor,e),this.continued[$t-1]=0,this.scrollCount++,this.dirty=!0}newLine(){this.reverseMode=!1,this.cursorX=0,this.cursorY<$t-1?this.cursorY++:this.scrollUp(),this.dirty=!0}printCode(e,t=!1){const n=e&255,i=$v[n];if(i!==void 0){this.textColor=i;return}switch(n){case 13:case 10:this.newLine();return;case 147:this.clear();return;case 19:this.home();return;case 18:this.reverseMode=!0;return;case 146:this.reverseMode=!1;return;case 17:this.moveCursor(0,1);return;case 145:this.moveCursor(0,-1);return;case 29:this.moveCursor(1,0);return;case 157:this.moveCursor(-1,0);return;case 20:this.backspace();return}const r=Kv(n);if(r<0)return;const o=this.cursorY*Mt+this.cursorX;this.screenRam[o]=this.reverseMode?r|128:r,this.colorRam[o]=this.textColor,this.cursorX++,this.cursorX>=Mt&&(this.cursorX=0,this.cursorY<$t-1?this.cursorY++:this.scrollUp(),t&&(this.continued[this.cursorY]=1)),this.dirty=!0}print(e){for(let t=0;t<e.length;t++)this.printCode(e.charCodeAt(t),!1)}printLine(e=""){this.print(e),this.newLine()}typeChar(e){if(!e)return;const t=e.charCodeAt(0);if(this.cursorX===Mt-1){const n=this.getLogicalLineStart(this.cursorY);this.cursorY-n>=1}this.printCode(t,!0),this.resetBlink()}backspace(e=0,t=-1){if(t>=0&&(this.cursorY<t||this.cursorY===t&&this.cursorX<=e))return;if(this.cursorX>0)this.cursorX--;else if(this.cursorY>0&&this.continued[this.cursorY])this.cursorY--,this.cursorX=Mt-1;else if(this.cursorY>0&&t<0){this.cursorY--,this.cursorX=Mt-1,this.resetBlink(),this.dirty=!0;return}else return;const n=this.getLogicalLineEnd(this.cursorY),i=this.cursorY*Mt+this.cursorX,r=n*Mt+(Mt-1);for(let o=i;o<r;o++)this.screenRam[o]=this.screenRam[o+1],this.colorRam[o]=this.colorRam[o+1];this.screenRam[r]=32,this.colorRam[r]=this.textColor,this.resetBlink(),this.dirty=!0}moveCursor(e,t){let n=this.cursorX+e,i=this.cursorY+t;n<0?i>0?(i--,n=Mt-1):n=0:n>=Mt&&(i<$t-1?(i++,n=0):n=Mt-1),i=Math.max(0,Math.min($t-1,i)),this.cursorX=n,this.cursorY=i,this.resetBlink(),this.dirty=!0}getLogicalLineStart(e){let t=e;for(;t>0&&this.continued[t];)t--;return t}getLogicalLineEnd(e){let t=e;for(;t<$t-1&&this.continued[t+1];)t++;return t}commitLogicalLine(e=0,t=-1){const n=t>=0?t:this.getLogicalLineStart(this.cursorY),i=Math.max(this.cursorY,this.getLogicalLineEnd(n));let r="";for(let o=n;o<=i;o++){const a=o===n?e:0;for(let c=a;c<Mt;c++)r+=qv(this.screenRam[o*Mt+c])}return this.cursorY=i,this.newLine(),r.replace(/\s+$/,"")}glowCache=[0,0,0];getScreenGlowColor(){const[e,t,n]=ar[this.borderColor],[i,r,o]=ar[this.bgColor],[a,c,l]=ar[this.textColor];return this.glowCache[0]=(i*.55+e*.3+a*.15)/255,this.glowCache[1]=(r*.55+t*.3+c*.15)/255,this.glowCache[2]=(o*.55+n*.3+l*.15)/255,this.glowCache}render(){if(!this.dirty)return!1;this.dirty=!1;const e=so[this.borderColor],t=so[this.bgColor];this.pixels.fill(e);for(let n=0;n<$t;n++){const i=Bf+n*8;for(let r=0;r<Mt;r++){const o=n*Mt+r,a=this.screenRam[o],c=this.cursorEnabled&&this.cursorBlinkOn&&n===this.cursorY&&r===this.cursorX,l=!!(a&128)!==c,u=(a&127)*8,h=c?so[this.textColor]:so[this.colorRam[o]&15],f=Ff+r*8;for(let d=0;d<8;d++){const m=Uf[u+d],_=(i+d)*Ia+f;for(let p=0;p<8;p++){const g=!!(m&128>>p);this.pixels[_+p]=g!==l?h:t}}}}return this.ctx.putImageData(this.imgData,0,0),!0}}const au="codevember-2026-day22-1541-disk-v1",Jv=[{name:"ECHO",builtin:!0,lines:{10:"PRINT CHR$(147)",20:'PRINT "*** ECHO CANYON ***"',30:'PRINT "(PRESS ESC TO QUIT)"',40:"PRINT",50:'INPUT "SHOUT";A$',60:'IF A$="" THEN 50',70:"FOR I=1 TO 4",80:"POKE 53280,14-I",90:'PRINT SPC(I*3);A$;"..."',100:"FOR D=1 TO 80:NEXT D",110:"NEXT I",120:"POKE 53280,14",130:"PRINT",140:"GOTO 50"}},{name:"DODGE",builtin:!0,lines:{10:"POKE 53280,0:POKE 53281,0:POKE 646,13",20:"PRINT CHR$(147)",30:'PRINT "   *** ASTEROID DODGE ***"',40:'PRINT "   A = LEFT    D = RIGHT"',50:'PRINT "   PRESS ANY KEY TO FLY"',60:'GET K$:IF K$="" THEN 60',70:"X=18:SC=0:MX=INT(RND(1)*34)+2:MY=1",80:"M2=INT(RND(1)*34)+2:Y2=-6",90:"PRINT CHR$(147)",100:"GET K$",110:'IF K$="A" AND X>1 THEN X=X-2',120:'IF K$="D" AND X<35 THEN X=X+2',130:'PRINT CHR$(19);"SCORE:";SC;"   (A/D MOVE, ESC QUIT)"',140:"MY=MY+1:Y2=Y2+1",150:"IF MY>22 THEN MY=2:MX=INT(RND(1)*34)+2:SC=SC+10",160:"IF Y2>22 THEN Y2=2:M2=INT(RND(1)*34)+2:SC=SC+10",170:"POKE 1024+MY*40+MX,42:POKE 55296+MY*40+MX,7",180:"IF Y2>1 THEN POKE 1024+Y2*40+M2,42:POKE 55296+Y2*40+M2,10",190:"POKE 1024+22*40+X,60:POKE 1024+22*40+X+1,1:POKE 1024+22*40+X+2,62",200:"POKE 55296+22*40+X,3:POKE 55296+22*40+X+1,1:POKE 55296+22*40+X+2,3",210:"IF MY=22 AND ABS(MX-(X+1))<2 THEN 300",220:"IF Y2=22 AND ABS(M2-(X+1))<2 THEN 300",230:"FOR D=1 TO 75:NEXT D",240:"POKE 1024+MY*40+MX,32",250:"IF Y2>1 THEN POKE 1024+Y2*40+M2,32",260:"POKE 1024+22*40+X,32:POKE 1024+22*40+X+1,32:POKE 1024+22*40+X+2,32",270:"GOTO 100",300:"POKE 53280,2:POKE 54296,15:POKE 54273,8:POKE 54276,33",310:"PRINT CHR$(147)",320:'PRINT "      *** BOOM! GAME OVER ***"',330:'PRINT:PRINT "      FINAL SCORE:";SC',340:"FOR D=1 TO 45:NEXT D:POKE 54276,0",350:'PRINT:PRINT "      PRESS SPACE TO PLAY AGAIN"',360:'GET K$:IF K$<>" " THEN 360',370:"POKE 53280,0:GOTO 70"}},{name:"GUESS",builtin:!0,lines:{10:"PRINT CHR$(147)",20:'PRINT "  *** GUESS MY NUMBER (1-100) ***"',30:"PRINT",40:"N=INT(RND(1)*100)+1:T=0",50:'INPUT "YOUR GUESS";G',60:"T=T+1",70:'IF G<N THEN PRINT "TOO LOW!":GOTO 50',80:'IF G>N THEN PRINT "TOO HIGH!":GOTO 50',90:"POKE 53280,5:POKE 54296,15:POKE 54273,35:POKE 54276,17",100:'PRINT:PRINT "YES! IT WAS";N;"IN";T;"TRIES!"',110:"FOR D=1 TO 40:NEXT D:POKE 54276,0:POKE 53280,14",120:'INPUT "PLAY AGAIN (Y/N)";A$',130:'IF LEFT$(A$,1)="Y" THEN 10',140:'PRINT "BYE!":END'}},{name:"CAVE",builtin:!0,lines:{10:"PRINT CHR$(147):POKE 53280,0:POKE 53281,0:POKE 646,3",20:'PRINT "*** THE ECHO CAVE ***"',30:'PRINT "COMMANDS: N, S, LOOK, SHOUT, TAKE"',40:"R=1:K=0",50:"PRINT",60:'IF R=1 THEN PRINT "YOU STAND AT A MISTY CAVE MOUTH. PATH S."',70:'IF R=2 THEN PRINT "A WIDE STONE HALL. EXITS N AND S."',80:'IF R=3 THEN PRINT "A GLOWING CRYSTAL CHAMBER! EXIT N."',90:'IF R=3 AND K=0 THEN PRINT "A BLUE CRYSTAL HUMS ON A LEDGE."',100:'INPUT "> ";C$',110:'IF C$="S" AND R<3 THEN R=R+1:GOTO 50',120:'IF C$="N" AND R>1 THEN R=R-1:GOTO 50',130:'IF C$="LOOK" THEN 50',140:'IF C$="SHOUT" THEN PRINT "ECHO... ECHO... ECHO...":GOTO 100',150:'IF C$="TAKE" AND R=3 AND K=0 THEN K=1:PRINT "THE CRYSTAL RINGS! YOU WIN!":GOTO 100',160:'PRINT "NOTHING HAPPENS.":GOTO 100'}},{name:"MAZE",builtin:!0,lines:{10:"POKE 53280,6:POKE 53281,6:POKE 646,14",20:"PRINT CHR$(147)",30:"PRINT CHR$(205.5+RND(1));",40:"GOTO 30"}},{name:"PIANO",builtin:!0,lines:{10:"PRINT CHR$(147):POKE 53280,0:POKE 53281,0:POKE 646,1",20:'PRINT "  *** C64 SID PIANO ***"',30:'PRINT "  KEYS: A S D F G H J K"',40:'PRINT "  ESC = QUIT"',50:"POKE 54296,15:POKE 54277,9:POKE 54278,0",60:'GET K$:IF K$="" THEN 60',70:"F=0",80:'IF K$="A" THEN F=17',90:'IF K$="S" THEN F=19',100:'IF K$="D" THEN F=21',110:'IF K$="F" THEN F=22',120:'IF K$="G" THEN F=25',130:'IF K$="H" THEN F=28',140:'IF K$="J" THEN F=32',150:'IF K$="K" THEN F=34',160:"IF F=0 THEN 60",170:"POKE 54276,16:POKE 54273,F:POKE 54276,17",180:"POKE 53280,F-INT(F/14)*14+1",190:'PRINT K$;" ";',200:"GOTO 60"}},{name:"AI",builtin:!0,lines:{10:"POKE 53280,0:POKE 53281,0:POKE 646,1:PRINT CHR$(147)",20:'PRINT "   *** C64 AI AGENT V0.64 ***"',30:'PRINT "   64K CONTEXT  38911 TOKENS FREE"',40:'PRINT:PRINT "   CHOOSE YOUR MODEL:"',50:'PRINT "   1) CLAUDE 64"',60:'PRINT "   2) GEMINI 64"',70:'PRINT "   3) CODEX 64"',80:'PRINT:INPUT "MODEL (1-3)";M',90:"IF M<1 OR M>3 THEN 80",100:'IF M=1 THEN N$="CLAUDE":C=8:TC=10',110:'IF M=2 THEN N$="GEMINI":C=14:TC=3',120:'IF M=3 THEN N$="CODEX":C=5:TC=13',130:"POKE 53280,C:POKE 646,TC:TK=38911",140:'PRINT CHR$(147);"*** ";N$;" 64 ONLINE (ESC TO QUIT) ***"',150:"POKE 646,1:PRINT",160:'INPUT "> ";Q$',170:'IF Q$="" THEN 160',180:'POKE 646,TC:PRINT "* THINKING";',190:"POKE 54296,12:POKE 54277,3:POKE 54278,0",200:'FOR I=1 TO 4:PRINT ".";',210:"POKE 54276,16:POKE 54273,18+I*4:POKE 54276,17",220:"FOR D=1 TO 45:NEXT D:NEXT I:PRINT",230:'TK=TK-LEN(Q$)*17-120:IF TK<0 THEN TK=38911:PRINT "(CONTEXT COMPACTED!)"',240:"POKE 646,1:R=INT(RND(1)*4)+1",250:'IF Q$="ECHO" THEN PRINT N$;": 10 INPUT A$:20 PRINT A$:30 GOTO 10":GOTO 460',260:'IF LEFT$(Q$,2)="HI" OR LEFT$(Q$,5)="HELLO" THEN PRINT N$;": READY TO SHIP IN 64K!":GOTO 460',270:'IF LEFT$(Q$,3)="FIX" OR LEFT$(Q$,3)="BUG" THEN PRINT N$;": FIXED! (MAYBE 2 NEW BUGS)":GOTO 460',280:"ON M GOTO 300,350,400",300:'IF R=1 THEN PRINT "CLAUDE: YOU ARE ABSOLUTELY RIGHT ABOUT"',305:'IF R=1 THEN PRINT "  ";Q$;"!"',310:'IF R=2 THEN PRINT "CLAUDE: LET ME REFACTOR ";Q$;" INTO 12 FILES."',320:'IF R=3 THEN PRINT "CLAUDE: GREAT CATCH ON ";Q$;"! SO SUBTLE."',330:'IF R=4 THEN PRINT "CLAUDE: APOLOGIES! REWRITING ";Q$;"..."',340:"GOTO 460",350:'IF R=1 THEN PRINT "GEMINI: REASONING OVER ";Q$;" IN 1 PASS..."',360:'IF R=2 THEN PRINT "GEMINI: HERE ARE 3 ANGLES ON ";Q$;":"',370:'IF R=3 THEN PRINT "GEMINI: DEEP THINKING ABOUT ";Q$;" -> DONE!"',380:'IF R=4 THEN PRINT "GEMINI: MULTIMODAL ";Q$;" SYNTHESIZED!"',390:"GOTO 460",400:'IF R=1 THEN PRINT "CODEX: GREPPED ";Q$;". PATCH APPLIED."',410:'IF R=2 THEN PRINT "CODEX: RUNNING TESTS ON ";Q$;"... GREEN!"',420:'IF R=3 THEN PRINT "CODEX: 1. PLAN ";Q$;" 2. SHIP IT."',430:'IF R=4 THEN PRINT "CODEX: DIFF READY FOR ";Q$;". LGTM."',460:'POKE 646,12:PRINT "  [";TK;" TOKENS LEFT]":POKE 646,1:PRINT',470:"GOTO 160"}}];class kf{diskTitle="GAMES DISK 84   ";diskId="22 2A";inserted=!0;programs=new Map;constructor(){this.loadFromStorage()}loadFromStorage(){this.programs.clear();for(const e of Jv)this.programs.set(e.name,{name:e.name,lines:{...e.lines},builtin:!0});try{const e=localStorage.getItem(au);if(e){const t=JSON.parse(e);if(Array.isArray(t))for(const n of t){if(!n||typeof n!="object"||typeof n.name!="string")continue;const i=n.lines;if(!i||typeof i!="object"||Array.isArray(i))continue;const r={};for(const[a,c]of Object.entries(i)){const l=Number(a);Number.isInteger(l)&&l>=0&&l<=63999&&typeof c=="string"&&(r[l]=c)}const o=n.name.trim().toUpperCase();o&&this.programs.set(o,{name:o,lines:r})}}}catch{}}persistUserPrograms(){try{const e=[];for(const t of this.programs.values())t.builtin||e.push(t);localStorage.setItem(au,JSON.stringify(e))}catch{}}listEntries(){const e=[];for(const t of this.programs.values()){const n=Object.values(t.lines).reduce((r,o)=>r+o.length+6,0),i=Math.max(1,Math.ceil(n/120));e.push({name:t.name,blocks:i})}return e}formatDirectory(){const e=this.listEntries(),t=e.reduce((o,a)=>o+a.blocks,0),n=Math.max(0,664-t),r=[`0 "${this.diskTitle}" ${this.diskId}`];for(const o of e){const a=String(o.blocks).padEnd(5," "),c=`"${o.name}"`.padEnd(19," ");r.push(`${a}${c}PRG`)}return r.push(`${n} BLOCKS FREE.`),r}find(e){const t=e.trim().toUpperCase().replace(/^0:/,"");if(!t||t==="*"){const r=this.programs.values().next();return r.done?null:r.value}const n=this.programs.get(t);if(n)return n;const i=t.indexOf("*");if(i>=0){const r=t.slice(0,i);for(const o of this.programs.values())if(o.name.startsWith(r))return o}return null}save(e,t){const n=e.trim().startsWith("@"),i=e.trim().replace(/^@/,"").replace(/^0:/,"").toUpperCase().slice(0,16);if(!i||i==="$")return{ok:!1,error:"SYNTAX",name:i};this.programs.has(i);const r={};for(const[o,a]of t)r[o]=a;return this.programs.set(i,{name:i,lines:r,builtin:!1}),this.persistUserPrograms(),{ok:!0,name:i}}}class Ce extends Error{constructor(e){super(e),this.name="BasicError"}}const Qv=["PRINT","INPUT","GOTO","GOSUB","RETURN","IF","THEN","FOR","TO","STEP","NEXT","LET","DIM","REM","END","STOP","CONT","LIST","RUN","NEW","CLR","DATA","READ","RESTORE","POKE","SYS","GET","ON","WAIT","LOAD","SAVE","VERIFY","OPEN","CLOSE","CMD","DEF","FN"];class jv{screen;disk;options;program=new Map;sortedLines=[];directoryListing=null;diskTimer=null;vars=new Map;arrays=new Map;forStack=[];gosubStack=[];dataItems=[];dataPointer=0;running=!1;pcLineIndex=0;pcOffset=0;currentLineNum=null;stoppedState=null;inputState=null;loadedBuiltinName=null;pendingEchoInput=null;lastEchoCelebrationAt=-99999;keyBuffer=[];bootTime=performance.now();rngState=305419896;directRemainder=null;extraRam=new Map;constructor(e,t={}){this.screen=e,this.disk=t.disk??new kf,this.options=t,this.boot()}boot(){this.program.clear(),this.sortedLines=[],this.directoryListing=null,this.diskTimer=null,this.options.onDiskActivity?.("idle"),this.options.onSidSilence?.(),this.clearRuntime(),this.bootTime=performance.now(),this.screen.reset(),this.screen.printLine(""),this.screen.printLine("    **** COMMODORE 64 BASIC V2 ****"),this.screen.printLine(""),this.screen.printLine(" 64K RAM SYSTEM  38911 BASIC BYTES FREE"),this.screen.printLine(""),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink()}clearRuntime(){this.vars.clear(),this.arrays.clear(),this.forStack=[],this.gosubStack=[],this.dataItems=[],this.dataPointer=0,this.running=!1,this.inputState=null,this.currentLineNum=null,this.stoppedState=null,this.directRemainder=null,this.keyBuffer=[]}rebuildLineIndex(){this.sortedLines=Array.from(this.program.keys()).sort((e,t)=>e-t)}bytesFree(){let e=0;for(const[,t]of this.program)e+=t.length+5;for(const[t,n]of this.vars)e+=t.length+(typeof n=="string"?n.length+5:7);return Math.max(0,38911-e)}exportListing(){return this.sortedLines.length>0?this.sortedLines.map(e=>`${e} ${this.program.get(e)??""}`).join(`
`):this.directoryListing?this.directoryListing.map(e=>e.replace(/[\x12\x92]/g,"")).join(`
`):""}pasteText(e){const t=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!t)return 0;if(this.inputState||!t.includes(`
`)){const r=t.split(`
`)[0];for(let o=0;o<r.length;o++)this.screen.typeChar(r[o]);return 1}(this.running||this.diskTimer)&&this.breakProgram();const n=t.split(`
`).map(r=>r.trim()).filter(r=>r.length>0);let i=0;for(const r of n){this.screen.printLine(r),i++;const o=r.match(/^(\d+)\s*(.*)$/);if(o){const a=parseInt(o[1],10),c=o[2].trim();a<=63999&&(c.length===0?this.program.delete(a):this.program.set(a,c),this.loadedBuiltinName=null,this.directoryListing=null,this.rebuildLineIndex(),this.stoppedState=null)}else if(this.executeDirect(r),this.running||this.inputState||this.diskTimer)break}return!this.running&&!this.inputState&&!this.diskTimer&&(this.screen.cursorEnabled=!0,this.screen.resetBlink()),i}handleKey(e,t=!1,n=!1){if(n)return!1;if(e==="Escape"||t&&(e==="c"||e==="C"))return this.breakProgram(),!0;if(e==="Home"||t&&(e==="l"||e==="L"))return!this.running&&!this.inputState&&(t?this.screen.clear():this.screen.home()),!0;if(this.diskTimer)return!0;if(this.running&&!this.inputState)return e.length===1?this.keyBuffer.length<16&&this.keyBuffer.push(e.toUpperCase()):e==="Enter"&&this.keyBuffer.length<16&&this.keyBuffer.push("\r"),!0;if(e==="Enter")return this.onReturnPressed(),!0;if(e==="Backspace"){if(this.inputState){const i=this.screen.scrollCount-this.inputState.scrollSnapshot,r=Math.max(0,this.inputState.promptRow-i);this.screen.backspace(this.inputState.promptCol,r)}else this.screen.backspace();return!0}if(e==="ArrowLeft"){if(this.inputState){const i=this.screen.scrollCount-this.inputState.scrollSnapshot,r=Math.max(0,this.inputState.promptRow-i);(this.screen.cursorY>r||this.screen.cursorX>this.inputState.promptCol)&&this.screen.moveCursor(-1,0)}else this.screen.moveCursor(-1,0);return!0}return e==="ArrowRight"?(this.screen.moveCursor(1,0),!0):e==="ArrowUp"?(this.inputState||this.screen.moveCursor(0,-1),!0):e==="ArrowDown"?(this.inputState||this.screen.moveCursor(0,1),!0):e.length===1&&!t?(this.screen.typeChar(e),!0):!1}breakProgram(){if(this.diskTimer){this.diskTimer=null,this.options.onDiskActivity?.("idle"),this.screen.newLine(),this.screen.printLine("BREAK"),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink();return}if(this.running||this.inputState){const e=this.currentLineNum;this.stoppedState=this.running?{lineIndex:this.pcLineIndex,offset:this.pcOffset}:null,this.running=!1,this.inputState=null,this.directRemainder=null,this.options.onSidSilence?.(),this.screen.newLine(),e!==null?this.screen.printLine(`BREAK IN ${e}`):this.screen.printLine("BREAK"),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink()}}step(e=24,t=1/60){if(this.diskTimer){if(this.diskTimer.remaining-=t,this.diskTimer.remaining<=0)if(this.diskTimer.phase==="searching")this.diskTimer.phase="transfer",this.diskTimer.remaining=.58,this.diskTimer.mode==="load"?this.screen.printLine("LOADING"):this.diskTimer.mode==="verify"&&this.screen.printLine("VERIFYING");else{const i=this.diskTimer.finish;this.diskTimer=null,i()}return}if(!this.running||this.inputState)return;let n=0;for(;this.running&&!this.inputState&&n<e;){if(this.pcLineIndex>=this.sortedLines.length){this.finishProgram();return}const i=this.sortedLines[this.pcLineIndex],r=this.program.get(i)??"";this.currentLineNum=i;try{const o=this.executeOneStatement(r,this.pcOffset,!1);if(n++,o.action==="stop"||o.action==="end"){o.action==="stop"&&(this.stoppedState={lineIndex:this.pcLineIndex,offset:o.nextOffset},this.screen.printLine(`BREAK IN ${i}`)),this.finishProgram();return}if(o.action==="input")return;if(o.action==="jump"){this.jumpToLine(o.targetLine);continue}if(o.action==="jumpPc"){this.pcLineIndex=o.lineIndex,this.pcOffset=o.offset;continue}if(o.action==="nextLine"){this.pcLineIndex++,this.pcOffset=0;continue}o.action==="continue"&&(this.pcOffset=o.nextOffset,this.pcOffset>=r.length&&(this.pcLineIndex++,this.pcOffset=0))}catch(o){const a=o instanceof Ce?o.message:"SYNTAX";this.reportError(a,i);return}}}finishProgram(){this.running=!1,this.currentLineNum=null,this.screen.cursorX>0&&this.screen.newLine(),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink()}reportError(e,t){this.running=!1,this.inputState=null,this.directRemainder=null,this.currentLineNum=null,this.screen.cursorX>0&&this.screen.newLine();const n=t!==null?` IN ${t}`:"";this.screen.printLine(`?${e}  ERROR${n}`),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink()}onReturnPressed(){if(this.inputState){const i=this.inputState,r=this.screen.scrollCount-i.scrollSnapshot,o=Math.max(0,i.promptRow-r),a=this.screen.commitLogicalLine(i.promptCol,o);this.handleInputResponse(i,a);return}const t=this.screen.commitLogicalLine().trim();if(!t)return;const n=t.match(/^(\d+)\s*(.*)$/);if(n){const i=parseInt(n[1],10),r=n[2].trim();if(i>63999){this.reportError("SYNTAX",null);return}r.length===0?this.program.delete(i):this.program.set(i,r),this.loadedBuiltinName=null,this.directoryListing=null,this.rebuildLineIndex(),this.stoppedState=null;return}this.executeDirect(t)}handleInputResponse(e,t){let n;if(e.targets.length===1&&e.targets[0].isString){const o=t.trim();o.startsWith('"')&&o.endsWith('"')&&o.length>=2?n=[o.slice(1,-1)]:n=[t]}else n=cu(t);const i=e.targets.length-e.collected.length;n.length>i&&this.screen.printLine("?EXTRA IGNORED");const r=[...e.collected];for(let o=0;o<Math.min(n.length,i);o++){const a=e.targets[r.length],c=n[o];if(!a.isString){const l=c.trim();if(l!==""&&Number.isNaN(Number(l))){this.screen.printLine("?REDO FROM START"),this.screen.print("? "),e.collected=[],e.promptRow=this.screen.cursorY,e.promptCol=this.screen.cursorX,e.scrollSnapshot=this.screen.scrollCount,this.screen.cursorEnabled=!0,this.screen.resetBlink();return}}r.push(c)}if(e.collected=r,e.collected.length<e.targets.length){this.screen.print("?? "),e.promptRow=this.screen.cursorY,e.promptCol=this.screen.cursorX,e.scrollSnapshot=this.screen.scrollCount,this.screen.cursorEnabled=!0,this.screen.resetBlink();return}for(let o=0;o<e.targets.length;o++){const a=e.targets[o],c=e.collected[o],l=a.isString?c:c.trim()===""?0:Number(c.trim());if(this.assignTarget(a,l),!e.fromDirect){const u=c.trim().toUpperCase();u.length>0&&(this.pendingEchoInput={text:u,at:performance.now()})}}if(this.inputState=null,e.fromDirect)this.directRemainder={text:e.directLine,offset:e.resumeStmtOffset},this.resumeDirect();else{this.screen.cursorEnabled=!1,this.pcLineIndex=e.resumeLineIndex,this.pcOffset=e.resumeStmtOffset;const o=this.program.get(this.sortedLines[this.pcLineIndex])??"";this.pcOffset>=o.length&&(this.pcLineIndex++,this.pcOffset=0)}}executeDirect(e){this.directRemainder={text:e,offset:0},this.resumeDirect()}resumeDirect(){let e=0;const t=4e3;for(;this.directRemainder;){if(++e>t){this.directRemainder=null,this.reportError("OUT OF MEMORY",null);return}const{text:n,offset:i}=this.directRemainder;if(i>=n.length){this.directRemainder=null,this.running||(this.screen.cursorX>0&&this.screen.newLine(),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink());return}this.currentLineNum=null;try{const r=this.executeOneStatement(n,i,!0);if(r.action==="startedRun"){this.directRemainder=null;return}if(r.action==="input")return;if(r.action==="jumpPc"){this.directRemainder={text:n,offset:r.offset};continue}if(r.action==="jump"){this.directRemainder=null,this.collectDataStatements(),this.running=!0,this.screen.cursorEnabled=!1,this.jumpToLine(r.targetLine);return}if(r.action==="stop"||r.action==="end"||r.action==="nextLine"){this.directRemainder=null,this.running||(this.screen.cursorX>0&&this.screen.newLine(),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink());return}r.action==="continue"&&(this.directRemainder={text:n,offset:r.nextOffset})}catch(r){const o=r instanceof Ce?r.message:"SYNTAX";this.reportError(o,null);return}}}jumpToLine(e){const t=this.sortedLines.indexOf(e);if(t<0)throw new Ce("UNDEF'D STATEMENT");this.pcLineIndex=t,this.pcOffset=0}collectDataStatements(){this.dataItems=[],this.dataPointer=0;for(const e of this.sortedLines){const t=this.program.get(e)??"";let n=0;for(;n<t.length&&(n=ro(t,n),!(n>=t.length));){if(t[n]===":"){n++;continue}if(ii(t,n,"REM"))break;if(ii(t,n,"DATA")){n+=4;const i=Lt(t,n),r=t.slice(n,i);for(const o of cu(r))this.dataItems.push(o);n=i+1}else n=Lt(t,n)+1}}}executeOneStatement(e,t,n){let i=ro(e,t);for(;i<e.length&&e[i]===":";)i=ro(e,i+1);if(i>=e.length)return{action:"nextLine"};if(e[i]==="?"){const c=Lt(e,i+1);return this.execPrint(e.slice(i+1,c)),{action:"continue",nextOffset:c<e.length?c+1:e.length}}let r=null;for(const c of Qv)if(ii(e,i,c)){r=c;break}if(r==="REM"||r==="DATA"){if(r==="REM")return{action:"nextLine"};const c=Lt(e,i+r.length);return{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="PRINT"){const c=Lt(e,i+5);return this.execPrint(e.slice(i+5,c)),{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="LIST"){const c=Lt(e,i+4);return this.execList(e.slice(i+4,c).trim()),{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="NEW")return this.program.clear(),this.sortedLines=[],this.directoryListing=null,this.loadedBuiltinName=null,this.pendingEchoInput=null,this.clearRuntime(),{action:"end"};if(r==="CLR"){this.vars.clear(),this.arrays.clear(),this.forStack=[],this.gosubStack=[],this.dataPointer=0;const c=Lt(e,i+3);return{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="RUN"){const c=Lt(e,i+3),l=e.slice(i+3,c).trim();if(this.vars.clear(),this.arrays.clear(),this.forStack=[],this.gosubStack=[],this.stoppedState=null,this.pendingEchoInput=null,this.keyBuffer=[],this.rebuildLineIndex(),this.collectDataStatements(),this.sortedLines.length===0)return{action:"end"};if(l){const u=parseInt(l,10);if(Number.isNaN(u))throw new Ce("SYNTAX");this.jumpToLine(u)}else this.pcLineIndex=0,this.pcOffset=0;return this.running=!0,this.screen.cursorEnabled=!1,{action:"startedRun"}}if(r==="CONT"){if(!this.stoppedState)throw new Ce("CAN'T CONTINUE");return this.pcLineIndex=this.stoppedState.lineIndex,this.pcOffset=this.stoppedState.offset,this.stoppedState=null,this.running=!0,this.screen.cursorEnabled=!1,{action:"startedRun"}}if(r==="END")return{action:"end"};if(r==="STOP"){const c=Lt(e,i+4);return{action:"stop",nextOffset:c<e.length?c+1:e.length}}if(r==="GOTO"){const c=Lt(e,i+4);return{action:"jump",targetLine:this.parseLineNumber(e.slice(i+4,c).trim())}}if(r==="GOSUB"){const c=Lt(e,i+5),l=this.parseLineNumber(e.slice(i+5,c).trim()),u=c<e.length?c+1:e.length;if(this.gosubStack.push({lineIndex:this.pcLineIndex,stmtOffset:u}),this.gosubStack.length>128)throw new Ce("OUT OF MEMORY");return{action:"jump",targetLine:l}}if(r==="RETURN"){const c=this.gosubStack.pop();if(!c)throw new Ce("RETURN WITHOUT GOSUB");return{action:"jumpPc",lineIndex:c.lineIndex,offset:c.stmtOffset}}if(r==="ON"){const c=Lt(e,i+2),u=e.slice(i+2,c).match(/^(.*?)\b(GOTO|GOSUB)\b(.*)$/i);if(!u)throw new Ce("SYNTAX");const h=Math.trunc(this.evalNum(u[1]));if(h<0||h>255)throw new Ce("ILLEGAL QUANTITY");const f=u[3].split(",").map(m=>this.parseLineNumber(m.trim())),d=c<e.length?c+1:e.length;return h>=1&&h<=f.length?(u[2].toUpperCase()==="GOSUB"&&this.gosubStack.push({lineIndex:this.pcLineIndex,stmtOffset:d}),{action:"jump",targetLine:f[h-1]}):{action:"continue",nextOffset:d}}if(r==="IF"){const c=e.slice(i+2),l=sS(c);if(!l)throw new Ce("SYNTAX");if(this.evalNum(l.cond)===0)return{action:"nextLine"};const h=l.after.trim();return/^\d+$/.test(h)?{action:"jump",targetLine:parseInt(h,10)}:{action:"continue",nextOffset:i+2+l.afterIndex}}if(r==="FOR"){const c=Lt(e,i+3),l=e.slice(i+3,c),u=c<e.length?c+1:e.length;return this.execFor(l,u),{action:"continue",nextOffset:u}}if(r==="NEXT"){const c=Lt(e,i+4),l=e.slice(i+4,c).trim(),u=c<e.length?c+1:e.length,h=l?l.split(",").map(f=>cs(f.trim())):[""];for(const f of h){const d=this.execNext(f);if(d)return d}return{action:"continue",nextOffset:u}}if(r==="INPUT"){const c=Lt(e,i+5),l=e.slice(i+5,c).trim(),u=c<e.length?c+1:e.length;return this.execInput(l,u,n,e),{action:"input"}}if(r==="GET"){const c=Lt(e,i+3),l=e.slice(i+3,c).trim(),u=this.parseTarget(l),h=this.keyBuffer.shift()??"";if(u.isString)this.assignTarget(u,h);else{const f=h?Number(h):0;if(Number.isNaN(f))throw new Ce("SYNTAX");this.assignTarget(u,f)}return{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="DIM"){const c=Lt(e,i+3);return this.execDim(e.slice(i+3,c)),{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="READ"){const c=Lt(e,i+4);return this.execRead(e.slice(i+4,c)),{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="RESTORE"){this.dataPointer=0;const c=Lt(e,i+7);return{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="POKE"){const c=Lt(e,i+4),l=Fi(e.slice(i+4,c));if(l.length!==2)throw new Ce("SYNTAX");const u=Math.trunc(this.evalNum(l[0])),h=Math.trunc(this.evalNum(l[1]));if(u<0||u>65535||h<0||h>255)throw new Ce("ILLEGAL QUANTITY");return this.poke(u,h),{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="SYS"){const c=Lt(e,i+3);return Math.trunc(this.evalNum(e.slice(i+3,c)))===64738?(this.boot(),this.options.onReset?.(),{action:"startedRun"}):{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="WAIT"){const c=Lt(e,i+4);return{action:"continue",nextOffset:c<e.length?c+1:e.length}}if(r==="LOAD"||r==="SAVE"||r==="VERIFY"){const c=Lt(e,i+r.length);return this.execDiskCommand(r,e.slice(i+r.length,c).trim()),{action:"startedRun"}}const o=r==="LET"?i+3:i,a=Lt(e,o);return this.execAssignment(e.slice(o,a)),{action:"continue",nextOffset:a<e.length?a+1:e.length}}execDiskCommand(e,t){const n=t?Fi(t):[],i=n[0]?.trim()?this.asStr(this.evalExpr(n[0].trim())):"*";if((n[1]?.trim()?Math.trunc(this.evalNum(n[1].trim())):8)!==8)throw new Ce("DEVICE NOT PRESENT");if(this.running=!1,this.screen.cursorEnabled=!1,e==="SAVE"){if(!i||i==="*"||i==="$")throw new Ce("SYNTAX");if(!this.disk.inserted){this.options.onDiskActivity?.("error"),this.screen.printLine("?FILE NOT FOUND  ERROR"),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink();return}const c=i.trim().toUpperCase().replace(/^@/,"").replace(/^0:/,"");this.screen.printLine(`SAVING ${c}`),this.options.onDiskActivity?.("write"),this.diskTimer={phase:"transfer",remaining:.72,mode:"save",filename:c,finish:()=>{const l=this.disk.save(i,this.program);this.options.onDiskActivity?.(l.ok?"idle":"error"),l.ok||this.screen.printLine(`?${l.error??"SYNTAX"}  ERROR`),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink()}};return}const o=i.trim().toUpperCase();if(this.screen.printLine(`SEARCHING FOR ${o||"*"}`),this.options.onDiskActivity?.("read"),!this.disk.inserted){this.diskTimer={phase:"transfer",remaining:.55,mode:e==="LOAD"?"load":"verify",filename:o,finish:()=>{this.options.onDiskActivity?.("error"),this.screen.printLine("?FILE NOT FOUND  ERROR"),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink()}};return}if(o==="$"||o==="$0"){this.diskTimer={phase:"searching",remaining:.35,mode:e==="LOAD"?"load":"verify",filename:"$",finish:()=>{e==="LOAD"?(this.program.clear(),this.sortedLines=[],this.directoryListing=this.disk.formatDirectory()):this.screen.printLine("OK"),this.options.onDiskActivity?.("idle"),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink()}};return}const a=this.disk.find(o);if(!a){this.diskTimer={phase:"transfer",remaining:.52,mode:e==="LOAD"?"load":"verify",filename:o,finish:()=>{this.options.onDiskActivity?.("error"),this.screen.printLine("?FILE NOT FOUND  ERROR"),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink()}};return}this.diskTimer={phase:"searching",remaining:.38,mode:e==="LOAD"?"load":"verify",filename:a.name,finish:()=>{if(e==="LOAD"){this.program.clear(),this.directoryListing=null,this.loadedBuiltinName=a.builtin?a.name:null,this.pendingEchoInput=null;for(const[c,l]of Object.entries(a.lines))this.program.set(Number(c),l);this.rebuildLineIndex(),this.clearRuntime()}else this.screen.printLine("OK");this.options.onDiskActivity?.("idle"),this.screen.printLine("READY."),this.screen.cursorEnabled=!0,this.screen.resetBlink()}}}execList(e){if(this.directoryListing&&!e){for(const i of this.directoryListing)this.screen.printLine(i);return}let t=0,n=65535;if(e){const i=e.indexOf("-");if(i>=0){const r=e.slice(0,i).trim(),o=e.slice(i+1).trim();r&&(t=parseInt(r,10)),o&&(n=parseInt(o,10))}else t=n=parseInt(e,10);if(Number.isNaN(t)||Number.isNaN(n))throw new Ce("SYNTAX")}for(const i of this.sortedLines)i>=t&&i<=n&&this.screen.printLine(`${i} ${this.program.get(i)??""}`)}execPrint(e){let t=0,n=!1,i="";for(;t<e.length&&(t=ro(e,t),!(t>=e.length));){const r=e[t];if(r===";"){n=!0,t++;continue}if(r===","){n=!0;const c=(Math.floor(this.screen.cursorX/10)+1)*10;c>=Mt?this.screen.newLine():this.screen.print(" ".repeat(c-this.screen.cursorX)),t++;continue}if(n=!1,ii(e,t,"TAB(")||ii(e,t,"SPC(")){const c=e[t].toUpperCase()==="T",l=tS(e,t+3);if(l<0)throw new Ce("SYNTAX");const u=Math.trunc(this.evalNum(e.slice(t+4,l)));if(u<0||u>255)throw new Ce("ILLEGAL QUANTITY");if(c){const h=u%Mt;h>this.screen.cursorX?this.screen.print(" ".repeat(h-this.screen.cursorX)):h<this.screen.cursorX&&(this.screen.newLine(),this.screen.print(" ".repeat(h)))}else this.screen.print(" ".repeat(u));t=l+1,n=!0;continue}const o=nS(e,t),a=e.slice(t,o).trim();if(a){const c=this.evalExpr(a);if(typeof c=="string")this.screen.print(c),i+=c;else{const l=rS(c);this.screen.print(l),i+=l}}t=o}if(n||this.screen.newLine(),this.running&&this.pendingEchoInput&&i.trim().length>0){const r=this.loadedBuiltinName!==null&&this.loadedBuiltinName!=="ECHO",o=performance.now();if(!r&&o-this.pendingEchoInput.at<8e3&&o-this.lastEchoCelebrationAt>9e3){const a=this.pendingEchoInput.text,c=i.trim().toUpperCase();(c===a||a.length>=2&&c.includes(a))&&(this.pendingEchoInput=null,this.lastEchoCelebrationAt=o,this.options.onEchoAchieved?.(a))}}}execInput(e,t,n,i){let r=e,o="";if(r.startsWith('"')){const l=r.indexOf('"',1);if(l<0)throw new Ce("SYNTAX");if(o=r.slice(1,l),r=r.slice(l+1).trim(),r.startsWith(";")||r.startsWith(","))r=r.slice(1).trim();else throw new Ce("SYNTAX")}const a=Fi(r);if(a.length===0||!a[0].trim())throw new Ce("SYNTAX");const c=a.map(l=>this.parseTarget(l.trim()));o&&this.screen.print(o),this.screen.print("? "),this.inputState={targets:c,collected:[],promptRow:this.screen.cursorY,promptCol:this.screen.cursorX,scrollSnapshot:this.screen.scrollCount,resumeLineIndex:this.pcLineIndex,resumeStmtOffset:t,fromDirect:n,directLine:i},this.screen.cursorEnabled=!0,this.screen.resetBlink()}execFor(e,t){const n=e.indexOf("=");if(n<0)throw new Ce("SYNTAX");const i=cs(e.slice(0,n).trim());if(!i||i.endsWith("$"))throw new Ce("TYPE MISMATCH");const r=e.slice(n+1),o=Co(r,"TO");if(o<0)throw new Ce("SYNTAX");const a=r.slice(0,o),c=r.slice(o+2),l=Co(c,"STEP"),u=l>=0?c.slice(0,l):c,h=l>=0?c.slice(l+4):"1",f=this.evalNum(a),d=this.evalNum(u),m=this.evalNum(h);this.vars.set(i,f);const _=this.forStack.findIndex(p=>p.varName===i);_>=0&&this.forStack.splice(_),this.forStack.push({varName:i,endVal:d,stepVal:m,lineIndex:this.pcLineIndex,stmtOffset:t})}execNext(e){if(this.forStack.length===0)throw new Ce("NEXT WITHOUT FOR");let t=this.forStack.length-1;if(e){for(;t>=0&&this.forStack[t].varName!==e;)t--;if(t<0)throw new Ce("NEXT WITHOUT FOR");this.forStack.splice(t+1)}const n=this.forStack[t],r=(this.vars.get(n.varName)??0)+n.stepVal;return this.vars.set(n.varName,r),(n.stepVal>=0?r>n.endVal:r<n.endVal)?(this.forStack.pop(),null):{action:"jumpPc",lineIndex:n.lineIndex,offset:n.stmtOffset}}execDim(e){const t=Fi(e);for(const n of t){const i=n.trim().match(/^([A-Za-z][A-Za-z0-9]*\$?)\s*\((.*)\)$/);if(!i)throw new Ce("SYNTAX");const r=cs(i[1]),o=r.endsWith("$"),c=Fi(i[2]).map(u=>{const h=Math.trunc(this.evalNum(u));if(h<0)throw new Ce("ILLEGAL QUANTITY");return h+1});if(this.arrays.has(r))throw new Ce("REDIM'D ARRAY");const l=c.reduce((u,h)=>u*h,1);if(l>65536)throw new Ce("OUT OF MEMORY");this.arrays.set(r,{dims:c,isString:o,data:new Array(l).fill(o?"":0)})}}execRead(e){const t=Fi(e);for(const n of t){if(this.dataPointer>=this.dataItems.length)throw new Ce("OUT OF DATA");const i=this.parseTarget(n.trim()),r=this.dataItems[this.dataPointer++];if(i.isString)this.assignTarget(i,r);else{const o=Number(r.trim());if(Number.isNaN(o))throw new Ce("SYNTAX");this.assignTarget(i,o)}}}execAssignment(e){const t=iS(e,"=");if(t<0)throw new Ce("SYNTAX");const n=e.slice(0,t).trim(),i=e.slice(t+1).trim();if(!n||!i)throw new Ce("SYNTAX");const r=this.parseTarget(n),o=this.evalExpr(i);if(r.isString&&typeof o!="string")throw new Ce("TYPE MISMATCH");if(!r.isString&&typeof o!="number")throw new Ce("TYPE MISMATCH");this.assignTarget(r,o)}parseTarget(e){const t=e.match(/^([A-Za-z][A-Za-z0-9]*\$?)(?:\s*\((.*)\))?$/);if(!t)throw new Ce("SYNTAX");const n=cs(t[1]),i=n.endsWith("$");if(t[2]!==void 0){const o=Fi(t[2]).map(a=>Math.trunc(this.evalNum(a)));return{name:n,isString:i,indices:o}}return{name:n,isString:i}}assignTarget(e,t){if(!e.indices){this.vars.set(e.name,t);return}const n=this.getOrAutoDimArray(e.name,e.isString,e.indices.length),i=this.flattenIndex(n,e.indices);n.data[i]=t}getOrAutoDimArray(e,t,n){let i=this.arrays.get(e);if(!i){const r=new Array(n).fill(11),o=r.reduce((a,c)=>a*c,1);i={dims:r,isString:t,data:new Array(o).fill(t?"":0)},this.arrays.set(e,i)}return i}flattenIndex(e,t){if(t.length!==e.dims.length)throw new Ce("BAD SUBSCRIPT");let n=0;for(let i=0;i<t.length;i++){const r=t[i];if(r<0||r>=e.dims[i])throw new Ce("BAD SUBSCRIPT");n=n*e.dims[i]+r}return n}parseLineNumber(e){if(!/^\d+$/.test(e))throw new Ce("SYNTAX");return parseInt(e,10)}poke(e,t){e===53280?this.screen.setBorder(t):e===53281?this.screen.setBg(t):e===646?this.screen.setTextColor(t):e>=1024&&e<1024+Mt*$t?this.screen.pokeScreen(e-1024,t):e>=55296&&e<55296+Mt*$t?this.screen.pokeColor(e-55296,t):e>=54272&&e<=54296?(this.extraRam.set(e,t),this.options.onSidPoke?.(e-54272,t)):this.extraRam.set(e,t)}peek(e){return e===53280?this.screen.borderColor:e===53281?this.screen.bgColor:e===646?this.screen.textColor:e===198?this.keyBuffer.length:e>=1024&&e<1024+Mt*$t?this.screen.screenRam[e-1024]:e>=55296&&e<55296+Mt*$t?this.screen.colorRam[e-55296]:this.extraRam.get(e)??0}nextRnd(e){e<0?this.rngState=Math.abs(Math.floor(e*16777215))||1:e===0&&(this.rngState^=(Date.now()&4294967295)>>>0);let t=this.rngState||305419896;return t^=t<<13,t^=t>>>17,t^=t<<5,this.rngState=t>>>0,(this.rngState&16777215)/16777216}evalNum(e){const t=this.evalExpr(e);if(typeof t!="number")throw new Ce("TYPE MISMATCH");return t}evalExpr(e){const t=new eS(e,this),n=t.parseOr();return t.expectEnd(),n}resolveIdentifier(e,t){const n=e.toUpperCase();if(t!==null){switch(n){case"CHR$":{this.expectArity(t,1);const h=Math.trunc(this.asNum(t[0]));if(h<0||h>255)throw new Ce("ILLEGAL QUANTITY");return String.fromCharCode(h)}case"ASC":{this.expectArity(t,1);const h=this.asStr(t[0]);if(!h.length)throw new Ce("ILLEGAL QUANTITY");return h.charCodeAt(0)}case"LEN":return this.expectArity(t,1),this.asStr(t[0]).length;case"LEFT$":{this.expectArity(t,2);const h=this.asStr(t[0]),f=Math.trunc(this.asNum(t[1]));if(f<0||f>255)throw new Ce("ILLEGAL QUANTITY");return h.slice(0,f)}case"RIGHT$":{this.expectArity(t,2);const h=this.asStr(t[0]),f=Math.trunc(this.asNum(t[1]));if(f<0||f>255)throw new Ce("ILLEGAL QUANTITY");return f===0?"":h.slice(-f)}case"MID$":{if(t.length<2||t.length>3)throw new Ce("SYNTAX");const h=this.asStr(t[0]),f=Math.trunc(this.asNum(t[1]));if(f<1||f>255)throw new Ce("ILLEGAL QUANTITY");if(t.length===2)return h.slice(f-1);const d=Math.trunc(this.asNum(t[2]));if(d<0||d>255)throw new Ce("ILLEGAL QUANTITY");return h.slice(f-1,f-1+d)}case"STR$":{this.expectArity(t,1);const h=this.asNum(t[0]);return(h>=0?" ":"")+String(h)}case"VAL":{this.expectArity(t,1);const h=this.asStr(t[0]).trim().match(/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i);return h?Number(h[0]):0}case"RND":return this.expectArity(t,1),this.nextRnd(this.asNum(t[0]));case"INT":return this.expectArity(t,1),Math.floor(this.asNum(t[0]));case"ABS":return this.expectArity(t,1),Math.abs(this.asNum(t[0]));case"SGN":return this.expectArity(t,1),Math.sign(this.asNum(t[0]));case"SQR":{this.expectArity(t,1);const h=this.asNum(t[0]);if(h<0)throw new Ce("ILLEGAL QUANTITY");return Math.sqrt(h)}case"SIN":return this.expectArity(t,1),Math.sin(this.asNum(t[0]));case"COS":return this.expectArity(t,1),Math.cos(this.asNum(t[0]));case"TAN":return this.expectArity(t,1),Math.tan(this.asNum(t[0]));case"ATN":return this.expectArity(t,1),Math.atan(this.asNum(t[0]));case"LOG":{this.expectArity(t,1);const h=this.asNum(t[0]);if(h<=0)throw new Ce("ILLEGAL QUANTITY");return Math.log(h)}case"EXP":return this.expectArity(t,1),Math.exp(this.asNum(t[0]));case"PEEK":{this.expectArity(t,1);const h=Math.trunc(this.asNum(t[0]));if(h<0||h>65535)throw new Ce("ILLEGAL QUANTITY");return this.peek(h)}case"FRE":return this.expectArity(t,1),this.bytesFree();case"POS":return this.expectArity(t,1),this.screen.cursorX}const o=cs(n),a=o.endsWith("$"),c=t.map(h=>Math.trunc(this.asNum(h))),l=this.getOrAutoDimArray(o,a,c.length),u=this.flattenIndex(l,c);return l.data[u]}if(n==="TI")return Math.floor((performance.now()-this.bootTime)*60/1e3)%5184e3;if(n==="TI$"){const o=Math.floor((performance.now()-this.bootTime)/1e3)%86400,a=String(Math.floor(o/3600)).padStart(2,"0"),c=String(Math.floor(o%3600/60)).padStart(2,"0"),l=String(o%60).padStart(2,"0");return`${a}${c}${l}`}const i=cs(n),r=this.vars.get(i);return r!==void 0?r:i.endsWith("$")?"":0}expectArity(e,t){if(e.length!==t)throw new Ce("SYNTAX")}asNum(e){if(typeof e!="number")throw new Ce("TYPE MISMATCH");return e}asStr(e){if(typeof e!="string")throw new Ce("TYPE MISMATCH");return e}}class eS{constructor(e,t){this.src=e,this.vm=t}src;vm;pos=0;skip(){for(;this.pos<this.src.length&&this.src[this.pos]===" ";)this.pos++}expectEnd(){if(this.skip(),this.pos<this.src.length)throw new Ce("SYNTAX")}parseOr(){let e=this.parseAnd();for(;this.skip(),ii(this.src,this.pos,"OR");){this.pos+=2;const t=this.parseAnd();e=Xs(e)|Xs(t)}return e}parseAnd(){let e=this.parseNot();for(;this.skip(),ii(this.src,this.pos,"AND");){this.pos+=3;const t=this.parseNot();e=Xs(e)&Xs(t)}return e}parseNot(){if(this.skip(),ii(this.src,this.pos,"NOT")){this.pos+=3;const e=this.parseNot();return~Xs(e)}return this.parseCompare()}parseCompare(){let e=this.parseAddSub();for(;;){this.skip();const t=this.src.slice(this.pos,this.pos+2),n=this.src[this.pos];let i=null;if(t==="<>"||t==="><"||t==="<="||t==="=<"||t===">="||t==="=>"?(i=t,this.pos+=2):(n==="="||n==="<"||n===">")&&(i=n,this.pos+=1),!i)break;const r=this.parseAddSub();if(typeof e!=typeof r)throw new Ce("TYPE MISMATCH");let o=!1;i==="="?o=e===r:i==="<>"||i==="><"?o=e!==r:i==="<"?o=e<r:i===">"?o=e>r:i==="<="||i==="=<"?o=e<=r:(i===">="||i==="=>")&&(o=e>=r),e=o?-1:0}return e}parseAddSub(){let e=this.parseMulDiv();for(;;){this.skip();const t=this.src[this.pos];if(t==="+"){this.pos++;const n=this.parseMulDiv();if(typeof e=="string"&&typeof n=="string")e=e+n;else if(typeof e=="number"&&typeof n=="number")e=e+n;else throw new Ce("TYPE MISMATCH")}else if(t==="-"){this.pos++;const n=this.parseMulDiv();if(typeof e!="number"||typeof n!="number")throw new Ce("TYPE MISMATCH");e=e-n}else break}return e}parseMulDiv(){let e=this.parseUnary();for(;;){this.skip();const t=this.src[this.pos];if(t==="*"||t==="/"){this.pos++;const n=this.parseUnary();if(typeof e!="number"||typeof n!="number")throw new Ce("TYPE MISMATCH");if(t==="*")e=e*n;else{if(n===0)throw new Ce("DIVISION BY ZERO");e=e/n}}else break}return e}parseUnary(){this.skip();const e=this.src[this.pos];if(e==="-"){this.pos++;const t=this.parseUnary();if(typeof t!="number")throw new Ce("TYPE MISMATCH");return-t}if(e==="+"){this.pos++;const t=this.parseUnary();if(typeof t!="number")throw new Ce("TYPE MISMATCH");return t}return this.parsePower()}parsePower(){let e=this.parsePrimary();if(this.skip(),this.src[this.pos]==="^"){this.pos++;const t=this.parseUnary();if(typeof e!="number"||typeof t!="number")throw new Ce("TYPE MISMATCH");e=Math.pow(e,t)}return e}parsePrimary(){if(this.skip(),this.pos>=this.src.length)throw new Ce("SYNTAX");const e=this.src[this.pos];if(e==='"'){this.pos++;let t="";for(;this.pos<this.src.length&&this.src[this.pos]!=='"';)t+=this.src[this.pos++];return this.pos<this.src.length&&this.src[this.pos]==='"'&&this.pos++,t}if(e==="("){this.pos++;const t=this.parseOr();if(this.skip(),this.src[this.pos]!==")")throw new Ce("SYNTAX");return this.pos++,t}if(e>="0"&&e<="9"||e==="."){const t=this.src.slice(this.pos).match(/^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i);if(!t)throw new Ce("SYNTAX");return this.pos+=t[0].length,Number(t[0])}if(e==="π"||e.charCodeAt(0)===255)return this.pos++,Math.PI;if(e>="A"&&e<="Z"||e>="a"&&e<="z"){const t=this.pos;for(;this.pos<this.src.length&&/[A-Za-z0-9]/.test(this.src[this.pos]);)this.pos++;(this.src[this.pos]==="$"||this.src[this.pos]==="%")&&this.pos++;const n=this.src.slice(t,this.pos);if(this.skip(),this.src[this.pos]==="("){this.pos++;const i=[];if(this.skip(),this.src[this.pos]!==")")for(;i.push(this.parseOr()),this.skip(),this.src[this.pos]===",";)this.pos++;if(this.src[this.pos]!==")")throw new Ce("SYNTAX");return this.pos++,this.vm.resolveIdentifier(n,i)}return this.vm.resolveIdentifier(n,null)}throw new Ce("SYNTAX")}}function Xs(s){if(typeof s!="number")throw new Ce("TYPE MISMATCH");return Math.trunc(s)}function cs(s){return s.toUpperCase().replace(/%$/,"")}function ro(s,e){for(;e<s.length&&s[e]===" ";)e++;return e}function ii(s,e,t){if(e+t.length>s.length||s.slice(e,e+t.length).toUpperCase()!==t)return!1;const n=t[t.length-1];if(/[A-Z]/i.test(n)){const i=s[e+t.length];if(i&&/[A-Za-z0-9$]/.test(i))return!1}return!0}function Lt(s,e){let t=!1;for(let n=e;n<s.length;n++){const i=s[n];if(i==='"')t=!t;else if(!t&&i===":")return n}return s.length}function tS(s,e){let t=0,n=!1;for(let i=e;i<s.length;i++){const r=s[i];if(r==='"')n=!n;else if(!n){if(r==="(")t++;else if(r===")"&&(t--,t===0))return i}}return-1}function nS(s,e){let t=0,n=!1;for(let i=e;i<s.length;i++){const r=s[i];if(r==='"')n=!n;else if(!n){if(r==="(")t++;else if(r===")")t=Math.max(0,t-1);else if(t===0&&(r===";"||r===","))return i}}return s.length}function Fi(s){const e=[];let t=0,n=!1,i=0;for(let r=0;r<s.length;r++){const o=s[r];o==='"'?n=!n:n||(o==="("?t++:o===")"?t=Math.max(0,t-1):t===0&&o===","&&(e.push(s.slice(i,r)),i=r+1))}return e.push(s.slice(i)),e}function cu(s){const e=[];let t=0;for(;t<=s.length;){for(;t<s.length&&s[t]===" ";)t++;if(t<s.length&&s[t]==='"'){t++;let n="";for(;t<s.length&&s[t]!=='"';)n+=s[t++];for(t<s.length&&s[t]==='"'&&t++,e.push(n);t<s.length&&s[t]!==",";)t++;if(t<s.length&&s[t]===",")t++;else break}else{const n=s.indexOf(",",t);if(n<0){e.push(s.slice(t).trim());break}e.push(s.slice(t,n).trim()),t=n+1}}return e}function iS(s,e){let t=0,n=!1;for(let i=0;i<s.length;i++){const r=s[i];if(r==='"')n=!n;else if(!n){if(r==="(")t++;else if(r===")")t=Math.max(0,t-1);else if(t===0&&r===e)return i}}return-1}function Co(s,e){let t=0,n=!1;for(let i=0;i<s.length;i++){const r=s[i];if(r==='"')n=!n;else if(!n){if(r==="(")t++;else if(r===")")t=Math.max(0,t-1);else if(t===0&&ii(s,i,e)){const o=i>0?s[i-1]:" ";if(!/[A-Za-z0-9$]/.test(o))return i}}}return-1}function sS(s){const e=Co(s,"THEN");if(e>=0)return{cond:s.slice(0,e).trim(),after:s.slice(e+4),afterIndex:e+4};const t=Co(s,"GOTO");return t>=0?{cond:s.slice(0,t).trim(),after:s.slice(t+4),afterIndex:t}:null}function rS(s){Object.is(s,-0)&&(s=0);let e=Math.abs(s)>=1e9||Math.abs(s)>0&&Math.abs(s)<.01?s.toExponential(7).replace(/\.?0+e/,"E").toUpperCase():Number(s.toPrecision(9)).toString();return(s>=0?" ":"")+e+" "}class oS{root=new ct;screenMesh;powerButton;hatchPivot=new ct;hatchMesh;knobMeshes;interactiveMeshes=[];crtMaterial;ledMaterial;ledLight;screenGlowLight;screenTexture;powered=!0;hatchOpen=!1;knobs={color:.52,tint:.5,bright:.52,contrast:.54};powerAnim=0;powerOffFlash=0;degaussAnim=1;hatchAngle=0;buttonDepth=1;constructor(e){this.screenTexture=new vt(e),this.screenTexture.minFilter=zt,this.screenTexture.magFilter=zt,this.screenTexture.generateMipmaps=!1,this.screenTexture.colorSpace=at;const t=hS(),n=new Ne({color:11050379,roughness:.62,metalness:.04,bumpMap:t,bumpScale:.004}),i=new Ne({color:9734519,roughness:.68,metalness:.04,bumpMap:t,bumpScale:.005}),r=new Ne({color:2630946,roughness:.52,metalness:.08,bumpMap:t,bumpScale:.0025}),o=new Ne({color:1578516,roughness:.75,metalness:.05}),a=new Ne({color:1381395,roughness:.9,metalness:.02}),c=new Ne({color:12235944,roughness:.34,metalness:.68}),l=3.56,u=3.24,h=u/2+.11,f=new ct;f.position.y=h,this.root.add(f);const d=2.15,m=vi(l,u,.12),_=new Mn(m,{depth:d-.08,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:4,curveSegments:12});_.center();const p=new ee(_,n);p.position.z=0,p.castShadow=!0,p.receiveShadow=!0,f.add(p);const g=vi(l+.015,u+.015,.125),S=vi(l-.04,u-.04,.1);g.holes.push(S);const M=new Mn(g,{depth:.016,bevelEnabled:!1,curveSegments:10});M.center();const v=new ee(M,o);v.position.z=d/2-.52,f.add(v);const b=d/2+.032,E=l-.24,x=u-.24,T=vi(E,x,.07),L=new Mn(T,{depth:.04,bevelEnabled:!1,curveSegments:10});L.center();const C=new ee(L,r);C.position.z=b-.14,C.receiveShadow=!0,f.add(C);const R=new ee(new Ye(E-.02,.64,.14),r);R.position.set(0,-1.2,b-.06),f.add(R);const I=2.72,O=2.02,P=.27,U=vi(E-.02,2.38,.055),G=vi(I,O,.16);U.holes.push(G);const F=new Mn(U,{depth:.18,bevelEnabled:!0,bevelThickness:.022,bevelSize:.022,bevelSegments:4,curveSegments:20});F.center();const Z=new ee(F,r);Z.position.set(0,P,b+.015),Z.castShadow=!0,Z.receiveShadow=!0,f.add(Z);const H=vi(I+.22,O+.22,.19),X=vi(I-.01,O-.01,.155);H.holes.push(X);const q=new Mn(H,{depth:.2,bevelEnabled:!1,curveSegments:20});q.center();const le=new ee(q,o);le.position.set(0,P,b-.02),f.add(le);const we=aS(I+.18,O+.18,24,18,.095);this.crtMaterial=lS(this.screenTexture),this.screenMesh=new ee(we,this.crtMaterial),this.screenMesh.position.set(0,P,b+.012),this.screenMesh.userData.hit={kind:"screen"},f.add(this.screenMesh),this.interactiveMeshes.push(this.screenMesh);const V=-1.21,se=b+.015,ge=new ee(new Ye(E-.06,.018,.03),c);ge.position.set(0,-.94,se+.045),f.add(ge);const De=new ee(new Ye(E-.08,.48,.05),o);De.position.set(0,V,se+.005),f.add(De);const he=uS(),Oe=new Ne({map:he,roughness:.38,metalness:.25}),ft=new ee(new Ct(1.16,.36),Oe);ft.position.set(-1,V,se+.034),f.add(ft);const Xe=new ct;Xe.position.set(-.14,V,se+.032);const je=new Ne({color:3880755,roughness:.48,metalness:.12}),nt=new Ye(.02,.32,.026);for(let Le=0;Le<11;Le++){const re=new ee(nt,je);re.position.x=(Le-5)*.042,Xe.add(re)}f.add(Xe);const ne=.62,pe=.94,ue=.36,Ee=fS(),xe=new ee(new Ct(pe-.04,ue-.02),new Ne({map:Ee,roughness:.55,metalness:.1}));xe.position.set(ne,V,se+.028),f.add(xe);const Ke=["color","tint","bright","contrast"],Pe=new Ot(.056,.062,.075,20);Pe.rotateX(Math.PI/2);const Je=new Ne({color:3485997,roughness:.42,metalness:.2}),it=new hn({color:14604750}),lt=new Ye(.011,.032,.012),B={};for(let Le=0;Le<Ke.length;Le++){const re=Ke[Le],Ie=ne-.315+Le*.21,qe=new ee(Pe,Je);qe.position.set(Ie,V+.025,se+.055),qe.userData.hit={kind:"knob",knob:re};const Te=new ee(lt,it);Te.position.set(0,.028,.036),qe.add(Te),f.add(qe),B[re]=qe,this.interactiveMeshes.push(qe)}this.knobMeshes=B,this.syncKnobRotations(),this.hatchPivot.position.set(ne,V-ue/2,se+.095),f.add(this.hatchPivot);const Rt=new cn({color:2104345,roughness:.16,metalness:.05,transparent:!0,opacity:.78,clearcoat:.9,clearcoatRoughness:.12}),Fe=new Ye(pe,ue,.022);this.hatchMesh=new ee(Fe,Rt),this.hatchMesh.position.set(0,ue/2,0),this.hatchMesh.userData.hit={kind:"hatch"};const ze=new ee(new Ye(.22,.018,.03),c);ze.position.set(0,ue/2-.03,.012),this.hatchMesh.add(ze),this.hatchPivot.add(this.hatchMesh),this.interactiveMeshes.push(this.hatchMesh);const oe=1.36,mt=new ee(new Ct(.36,.12),new hn({map:dS(),transparent:!0}));mt.position.set(oe,V-.135,se+.034),f.add(mt),this.ledMaterial=new Ne({color:1916960,emissive:5111656,emissiveIntensity:2.2,roughness:.25});const Ue=new ee(new Ye(.085,.042,.022),this.ledMaterial);Ue.position.set(oe,V+.125,se+.036),f.add(Ue),this.ledLight=new zi(5111656,.18,.9,2),this.ledLight.position.set(oe,V+.125,se+.16),f.add(this.ledLight);const Re=new ee(new Ye(.19,.15,.03),o);Re.position.set(oe,V-.01,se+.034),f.add(Re);const A=new Ne({color:3880497,roughness:.42,metalness:.12});this.powerButton=new ee(new Ye(.145,.11,.095),A),this.powerButton.position.set(oe,V-.01,se+.055),this.powerButton.userData.hit={kind:"power"};const y=new ee(new Ye(.055,.016,.008),new Ne({color:14209733,roughness:.5}));y.position.set(0,0,.048),this.powerButton.add(y),f.add(this.powerButton),this.interactiveMeshes.push(this.powerButton);const z=new ct,ce=u/2+.035;for(let Le=0;Le<12;Le++){const re=new ee(new Ye(2.46,.025,.038),o);re.position.set(0,ce,-.82+Le*.088),z.add(re)}f.add(z);for(const Le of[-1,1]){const re=new ee(new Ye(.06,.24,.92),o);re.position.set(Le*(l/2+.018),.22,-.05),f.add(re);const Ie=new ee(new Ye(.05,.045,.94),n);Ie.position.set(Le*(l/2+.024),.34,-.05),f.add(Ie)}const ie=1.48,de=cS(l-.34,u-.38,1.98,1.72,ie),me=new ee(de,i);me.position.set(0,.04,-d/2-ie/2+.06),me.castShadow=!0,me.receiveShadow=!0,f.add(me);for(let Le=0;Le<7;Le++){const re=new ee(new Ye(1.5,.03,.04),o);re.position.set(0,1.24-Le*.055,-d/2-.16-Le*.155),re.rotation.x=.34,f.add(re)}const $=-d/2-ie+.052,Q=new ee(new Ct(1.22,.54),new Ne({map:pS(),roughness:.6,metalness:.1}));Q.position.set(0,.36,$),Q.rotation.y=Math.PI,f.add(Q);const _e=new ee(new Ye(1.36,.38,.08),o);_e.position.set(0,-.34,$+.03),f.add(_e);const N=[14071090,14210508,12073012,3158064],te=new Ot(.055,.055,.09,14);te.rotateX(Math.PI/2);const J=new Ot(.028,.028,.11,12);J.rotateX(Math.PI/2);for(let Le=0;Le<N.length;Le++){const re=-.39+Le*.26,Ie=new ee(te,new Ne({color:N[Le],roughness:.45}));Ie.position.set(re,-.34,$-.01),f.add(Ie);const qe=new ee(J,c);qe.position.set(re,-.34,$-.015),f.add(qe)}const Se=new ul([new D(-.55,-.62,$+.04),new D(-.62,-.82,$-.32),new D(-.88,-h+.04,$-.58),new D(-1.45,-h+.035,$-1.25),new D(-2.3,-h+.035,$-2.3)]),fe=new ee(new Bo(Se,28,.036,10,!1),a);fe.castShadow=!0,f.add(fe);const ve=new Ot(.16,.19,.12,16),Ve=[[-l/2+.42,d/2-.36],[l/2-.42,d/2-.36],[-l/2+.46,-d/2+.36],[l/2-.46,-d/2+.36]];for(const[Le,re]of Ve){const Ie=new ee(ve,a);Ie.position.set(Le,.06,re),Ie.castShadow=!0,Ie.receiveShadow=!0,this.root.add(Ie)}this.screenGlowLight=new zi(5396696,2.2,8.5,1.7),this.screenGlowLight.position.set(0,h+P,b+1.15),this.root.add(this.screenGlowLight)}togglePower(){return this.powered=!this.powered,this.powered?(this.degaussAnim=1,this.powerOffFlash=0):this.powerOffFlash=1,this.powered}toggleHatch(){return this.hatchOpen=!this.hatchOpen,this.hatchOpen}adjustKnob(e,t){this.knobs[e]=Math.max(0,Math.min(1,this.knobs[e]+t)),this.syncKnobRotations(),this.syncShaderKnobs()}syncKnobRotations(){for(const e of Object.keys(this.knobs))this.knobMeshes[e].rotation.z=-(this.knobs[e]-.5)*Math.PI*1.5}syncShaderKnobs(){const e=this.crtMaterial.uniforms;e.uColor.value=this.knobs.color,e.uTint.value=this.knobs.tint,e.uBright.value=this.knobs.bright,e.uContrast.value=this.knobs.contrast}markScreenDirty(){this.screenTexture.needsUpdate=!0}update(e,t,n){this.powered?(this.powerAnim=Math.min(1,this.powerAnim+e*1.45),this.powerOffFlash=Math.max(0,this.powerOffFlash-e*2.5)):(this.powerAnim=Math.max(0,this.powerAnim-e*4.2),this.powerOffFlash=Math.max(0,this.powerOffFlash-e*1.35)),this.degaussAnim>0&&(this.degaussAnim=Math.max(0,this.degaussAnim-e*1.3));const i=this.powered?1:0;this.buttonDepth+=(i-this.buttonDepth)*Math.min(1,e*18),this.powerButton.position.z=2.15/2+.032+.015+.072-this.buttonDepth*.028;const r=this.hatchOpen?Math.PI*.56:0;this.hatchAngle+=(r-this.hatchAngle)*Math.min(1,e*12),this.hatchPivot.rotation.x=this.hatchAngle;const o=this.powered?1:0;this.ledMaterial.emissiveIntensity=.05+o*2.4,this.ledLight.intensity=o*.22;const a=this.crtMaterial.uniforms;a.uTime.value=t,a.uPower.value=this.powerAnim,a.uOffFlash.value=this.powerOffFlash,a.uDegauss.value=this.degaussAnim;const c=this.powerAnim*(.75+this.knobs.bright*.65);this.screenGlowLight.color.setRGB(Math.max(.08,n[0]),Math.max(.08,n[1]),Math.max(.1,n[2])),this.screenGlowLight.intensity=c*2.5}}function vi(s,e,t){const n=new Yi,i=s/2,r=e/2;return n.moveTo(-i+t,-r),n.lineTo(i-t,-r),n.quadraticCurveTo(i,-r,i,-r+t),n.lineTo(i,r-t),n.quadraticCurveTo(i,r,i-t,r),n.lineTo(-i+t,r),n.quadraticCurveTo(-i,r,-i,r-t),n.lineTo(-i,-r+t),n.quadraticCurveTo(-i,-r,-i+t,-r),n}function aS(s,e,t,n,i){const r=new Ct(s,e,t,n),o=r.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a),l=o.getY(a),u=c/(s*.5),h=l/(e*.5),f=u*u*.85+h*h*.85,d=i*Math.max(0,1-f*.58-u*u*h*h*.14);o.setZ(a,d)}return r.computeVertexNormals(),r}function cS(s,e,t,n,i){const r=new Ye(1,1,i,2,2,4),o=r.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a),l=o.getY(a),u=o.getZ(a),h=Math.max(0,Math.min(1,.5-u/i)),f=h*h*(3-2*h),d=Mo.lerp(s,t,f),m=Mo.lerp(e,n,f);o.setX(a,c*d),o.setY(a,l*m)}return r.computeVertexNormals(),r}function lS(s){return new ci({uniforms:{uScreen:{value:s},uTime:{value:0},uPower:{value:0},uOffFlash:{value:0},uDegauss:{value:0},uColor:{value:.52},uTint:{value:.5},uBright:{value:.52},uContrast:{value:.54}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPos;

      void main() {
        vUv = uv;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPos = -mvPos.xyz;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform sampler2D uScreen;
      uniform float uTime;
      uniform float uPower;
      uniform float uOffFlash;
      uniform float uDegauss;
      uniform float uColor;
      uniform float uTint;
      uniform float uBright;
      uniform float uContrast;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPos;

      // Subtle CRT barrel warp with authentic slight overscan so the raster tucks cleanly behind the rounded bezel
      vec2 barrelUv(vec2 uv) {
        vec2 c = (uv * 2.0 - 1.0) * 0.94;
        vec2 off = c.yx * 0.14;
        c += c * off * off;
        return c * 0.5 + 0.5;
      }

      // Crisp sub-pixel texel interpolation (sharp pixels without harsh shimmering)
      vec3 sampleC64(vec2 uv) {
        vec2 res = vec2(384.0, 272.0);
        vec2 p = uv * res;
        vec2 f = fract(p);
        vec2 i = floor(p);
        // Smoothstep with narrow transition gives authentic CRT horizontal softness
        vec2 w = smoothstep(0.18, 0.82, f);
        vec2 suv = (i + w + 0.5) / res;
        // Slight composite chroma softness horizontally
        vec3 c0 = texture2D(uScreen, suv).rgb;
        vec3 cL = texture2D(uScreen, suv - vec2(0.55 / res.x, 0.0)).rgb;
        vec3 cR = texture2D(uScreen, suv + vec2(0.55 / res.x, 0.0)).rgb;
        return c0 * 0.72 + (cL + cR) * 0.14;
      }

      vec3 hueShift(vec3 col, float angle) {
        const vec3 k = vec3(0.57735, 0.57735, 0.57735);
        float c = cos(angle);
        return col * c + cross(k, col) * sin(angle) + k * dot(k, col) * (1.0 - c);
      }

      void main() {
        vec2 uv = barrelUv(vUv);

        // Subtle degauss wave on power-on
        if (uDegauss > 0.001) {
          float wave = sin(uv.y * 18.0 - uTime * 28.0) * 0.009 * uDegauss * uDegauss;
          uv.x += wave;
        }

        // Base unpowered dark CRT glass color (classic greenish-charcoal phosphor)
        vec3 glassBase = vec3(0.036, 0.044, 0.042);

        vec3 col = glassBase;
        float inBounds = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);

        if (uPower > 0.002 && inBounds > 0.5) {
          // Warm-up raster vertical expansion
          float rasterOpen = smoothstep(0.0, 0.45, uPower);
          vec2 ruv = uv;
          ruv.y = (ruv.y - 0.5) / max(0.02, rasterOpen) + 0.5;
          float rasterMask = step(0.0, ruv.y) * step(ruv.y, 1.0);

          vec3 raw = sampleC64(clamp(ruv, 0.0, 1.0));

          // Soft 4-tap phosphor bloom / halation
          vec2 bOff = vec2(2.2 / 384.0, 2.2 / 272.0);
          vec3 bloom = (
            texture2D(uScreen, clamp(ruv + vec2(bOff.x, 0.0), 0.0, 1.0)).rgb +
            texture2D(uScreen, clamp(ruv - vec2(bOff.x, 0.0), 0.0, 1.0)).rgb +
            texture2D(uScreen, clamp(ruv + vec2(0.0, bOff.y), 0.0, 1.0)).rgb +
            texture2D(uScreen, clamp(ruv - vec2(0.0, bOff.y), 0.0, 1.0)).rgb
          ) * 0.25;

          vec3 phosphor = raw + bloom * 0.16;

          // Subtle horizontal scanlines (272 lines)
          float scan = sin(ruv.y * 272.0 * 3.14159265) * 0.5 + 0.5;
          float scanMul = mix(0.84, 1.06, pow(scan, 0.7));
          phosphor *= scanMul;

          // Very fine vertical phosphor triad shimmer
          float triad = sin(ruv.x * 384.0 * 3.14159265 * 2.0) * 0.5 + 0.5;
          phosphor *= mix(0.95, 1.03, triad);

          // Front-panel Color / Tint / Brightness / Contrast controls
          float luma = dot(phosphor, vec3(0.299, 0.587, 0.114));
          float sat = uColor * 2.0; // 0..2
          phosphor = mix(vec3(luma), phosphor, sat);
          phosphor = hueShift(phosphor, (uTint - 0.5) * 1.1);
          float contrast = 0.55 + uContrast * 1.05;
          float bright = (uBright - 0.5) * 0.45;
          phosphor = (phosphor - 0.5) * contrast + 0.5 + bright;
          phosphor = max(vec3(0.0), phosphor);

          // Filament brightness fade-in + subtle 50Hz breathing
          float filament = smoothstep(0.08, 0.85, uPower);
          float flicker = 0.992 + 0.008 * sin(uTime * 37.0);
          col = mix(glassBase, phosphor * 1.12 * flicker, filament * rasterMask);
        }

        // Authentic CRT power-off beam collapse (horizontal white line -> glowing center dot)
        if (uOffFlash > 0.002) {
          vec2 c = vUv - 0.5;
          float linePhase = smoothstep(0.42, 1.0, uOffFlash);
          float halfW = mix(0.015, 0.48, linePhase);
          float halfH = mix(0.004, 0.014, linePhase);
          float lineGlow = exp(-(c.y * c.y) / (halfH * halfH)) * smoothstep(halfW + 0.04, halfW * 0.4, abs(c.x));
          float dotGlow = exp(-(c.x * c.x + c.y * c.y) / 0.0014) * uOffFlash;
          vec3 flashCol = vec3(0.88, 0.94, 1.0) * (lineGlow * linePhase * 2.2 + dotGlow * 1.8);
          col += flashCol;
        }

        // Bezel edge shadow & curved CRT corner vignette
        vec2 edge = abs(vUv * 2.0 - 1.0);
        float cornerVig = smoothstep(1.38, 0.92, length(edge));
        float borderShadow = smoothstep(1.0, 0.92, max(edge.x, edge.y));
        col *= mix(0.62, 1.0, cornerVig * borderShadow);

        // Convex CRT glass specular Fresnel reflection (soft studio window glow)
        vec3 N = normalize(vNormal);
        vec3 V = normalize(vViewPos);
        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.2);
        vec3 R = reflect(-V, N);
        // Subtle soft warm room reflection from upper-left window + cool rim
        float winRefl = smoothstep(0.42, 0.85, dot(R, normalize(vec3(-0.35, 0.55, 0.75))));
        float rimRefl = smoothstep(0.15, 0.8, R.y) * 0.14;
        vec3 glassSpec = vec3(0.85, 0.88, 0.95) * (fresnel * 0.24 + winRefl * 0.095 + rimRefl * 0.06);

        gl_FragColor = vec4(col + glassSpec, 1.0);
      }
    `})}function hS(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),n=t.createImageData(256,256);for(let r=0;r<n.data.length;r+=4){const o=115+Math.floor(Math.random()*28);n.data[r]=o,n.data[r+1]=o,n.data[r+2]=o,n.data[r+3]=255}t.putImageData(n,0,0);const i=new vt(e);return i.wrapS=Ht,i.wrapT=Ht,i.repeat.set(6,6),i}function uS(){const s=document.createElement("canvas");s.width=512,s.height=160;const e=s.getContext("2d");e.fillStyle="#1e1c1a",e.fillRect(0,0,s.width,s.height);for(let a=0;a<s.height;a+=2)e.fillStyle=a%4===0?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.06)",e.fillRect(0,a,s.width,1);const t=62,n=66,i=32,r=17;e.save(),e.beginPath(),e.arc(t,n,i,.42,Math.PI*2-.42),e.arc(t,n,r,Math.PI*2-.56,.56,!0),e.closePath(),e.fillStyle="#3d63b8",e.fill(),e.beginPath(),e.moveTo(t+12,n-16),e.lineTo(t+42,n-16),e.lineTo(t+31,n-3),e.lineTo(t+12,n-3),e.closePath(),e.fillStyle="#3d63b8",e.fill(),e.beginPath(),e.moveTo(t+12,n+3),e.lineTo(t+31,n+3),e.lineTo(t+42,n+16),e.lineTo(t+12,n+16),e.closePath(),e.fillStyle="#c83e36",e.fill(),e.restore(),e.fillStyle="#e8e3d8",e.font='700 44px "IBM Plex Sans", Inter, sans-serif',e.textBaseline="middle",e.fillText("commodore",118,66),e.fillStyle="#9d9688",e.font="600 17px Inter, sans-serif",e.fillText("COLOR VIDEO MONITOR   1702",32,126);const o=new vt(s);return o.colorSpace=at,o.anisotropy=8,o}function fS(){const s=document.createElement("canvas");s.width=512,s.height=196;const e=s.getContext("2d");e.fillStyle="#1b1917",e.fillRect(0,0,s.width,s.height);const t=["COLOR","TINT","BRIGHT","CONTR"];e.fillStyle="#bdb6a8",e.font="600 22px Inter, sans-serif",e.textAlign="center",e.textBaseline="middle";for(let i=0;i<t.length;i++){const r=82+i*116;e.fillText(t[i],r,162),e.strokeStyle="rgba(210, 202, 188, 0.35)",e.lineWidth=2;for(let o=-3;o<=3;o++){const a=-Math.PI/2+o*.42;e.beginPath(),e.moveTo(r+Math.cos(a)*34,82+Math.sin(a)*34),e.lineTo(r+Math.cos(a)*42,82+Math.sin(a)*42),e.stroke()}}const n=new vt(s);return n.colorSpace=at,n}function dS(){const s=document.createElement("canvas");s.width=192,s.height=64;const e=s.getContext("2d");e.clearRect(0,0,s.width,s.height),e.fillStyle="#b9b2a4",e.font="600 26px Inter, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("POWER",96,32);const t=new vt(s);return t.colorSpace=at,t}function pS(){const s=document.createElement("canvas");s.width=512,s.height=224;const e=s.getContext("2d");e.fillStyle="#1b1a18",e.fillRect(0,0,s.width,s.height),e.strokeStyle="#8b8476",e.lineWidth=4,e.strokeRect(10,10,s.width-20,s.height-20),e.fillStyle="#ded8cb",e.font='700 28px "IBM Plex Sans", sans-serif',e.fillText("COMMODORE MODEL 1702",28,52),e.fillStyle="#a7a092",e.font="600 18px Inter, sans-serif",e.fillText("COLOR VIDEO MONITOR · NTSC / PAL",28,90),e.fillText("AC 220V ~ 50/60Hz   65W   FUSE 1.6A",28,124),e.fillText("CAUTION: HIGH VOLTAGE INSIDE",28,158),e.fillText("SERIAL NO.  1702-83-004192   MADE IN JAPAN",28,192);const t=new vt(s);return t.colorSpace=at,t}class mS{root=new ct;interactiveMeshes=[];leverPivot=new ct;floppyGroup=new ct;driveLedMat;driveLedLight;diskInserted=!0;activity="idle";insertAnim=1;ledTimer=0;constructor(){const r=xS(),o=new Ne({color:10984585,roughness:.62,metalness:.04,bumpMap:r,bumpScale:.004}),a=new Ne({color:2499103,roughness:.52,metalness:.08,bumpMap:r,bumpScale:.002}),c=new Ne({color:1315344,roughness:.8,metalness:.05}),l=new Ne({color:1907224,roughness:.36,metalness:.14}),u=new Ne({color:1381395,roughness:.9,metalness:.02}),h=new ct;h.position.y=.55,this.root.add(h);const f=gS(2.02,.98,.075),d=new Mn(f,{depth:3.15-.06,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:3,curveSegments:10});d.center();const m=new ee(d,o);m.castShadow=!0,m.receiveShadow=!0,h.add(m);const _=new ee(new Ye(2.02+.068,.015,3.15+.005),c);_.position.y=-.04,h.add(_);for(let V=0;V<11;V++){const se=new ee(new Ye(1.56,.022,.042),c);se.position.set(0,.98/2+.026,-1.25+V*.092),h.add(se)}const p=3.15/2+.015,g=2.02-.14,S=.98-.14,M=new ee(new Ye(g,S,.06),a);M.position.set(0,0,p-.01),M.receiveShadow=!0,h.add(M);const v=new ee(new Ct(g-.08,.21),new Ne({map:_S(),roughness:.36,metalness:.24}));v.position.set(0,S/2-.13,p+.024),h.add(v);const b=-.02,E=new ee(new Ye(1.48,.075,.07),c);E.position.set(0,b,p+.004),h.add(E);const x=new ee(new Ye(.32,.26,.07),c);x.position.set(0,b-.02,p+.004),h.add(x);const T=new Ne({color:1710361,roughness:.65,metalness:.08}),L=new ee(new Ye(1.36,.022,1.38),T);L.castShadow=!0,L.userData.hit={kind:"drive"},this.floppyGroup.add(L);const C=new ee(new Ct(.92,.42),new Ne({map:SS(),roughness:.85}));C.rotation.x=-Math.PI/2,C.position.set(.12,.012,.36),C.userData.hit={kind:"drive"},this.floppyGroup.add(C),this.floppyGroup.position.set(0,b,p-.58),h.add(this.floppyGroup),this.interactiveMeshes.push(L,C),this.leverPivot.position.set(0,b+.04,p+.036),h.add(this.leverPivot);const R=new ee(new Ot(.052,.055,.04,14),l);R.rotation.x=Math.PI/2,R.userData.hit={kind:"drive"},this.leverPivot.add(R);const I=new ee(new Ye(.1,.27,.048),l);I.position.set(0,-.1,.018),I.castShadow=!0,I.userData.hit={kind:"drive"},this.leverPivot.add(I),this.interactiveMeshes.push(R,I);const O=new ee(new Ye(1.65,.52,.14),new hn({visible:!1}));O.position.set(0,b-.04,p+.04),O.userData.hit={kind:"drive"},h.add(O),this.interactiveMeshes.push(O);const P=-.3,U=new ee(new Ct(.72,.11),new hn({map:vS(),transparent:!0}));U.position.set(.54,P-.075,p+.025),h.add(U);const G=new Ne({color:1719583,emissive:5046120,emissiveIntensity:2,roughness:.25}),F=new ee(new Ye(.078,.034,.02),G);F.position.set(.36,P,p+.026),h.add(F),this.driveLedMat=new Ne({color:3871250,emissive:16722464,emissiveIntensity:.06,roughness:.25});const Z=new ee(new Ye(.078,.034,.02),this.driveLedMat);Z.position.set(.72,P,p+.026),h.add(Z),this.driveLedLight=new zi(16722976,0,1.35,2),this.driveLedLight.position.set(.72,P,p+.18),h.add(this.driveLedLight);const H=-3.15/2-.02,X=new Ot(.055,.055,.06,12);X.rotateX(Math.PI/2);for(const V of[-.45,-.22]){const se=new ee(X,c);se.position.set(V,-.08,H),h.add(se)}const q=new Ot(.11,.13,.07,14),le=2.02/2-.28,we=3.15/2-.34;for(const[V,se]of[[-le,we],[le,we],[-le,-we],[le,-we]]){const ge=new ee(q,u);ge.position.set(V,.035,se),ge.castShadow=!0,this.root.add(ge)}this.root.position.set(3.05,0,-.82),this.root.rotation.y=-.18}setActivity(e){this.activity=e,this.ledTimer=0}toggleDisk(){return this.diskInserted=!this.diskInserted,this.diskInserted&&this.activity==="error"&&(this.activity="idle"),this.diskInserted}update(e,t){this.ledTimer+=e;const n=this.diskInserted?1:0;this.insertAnim+=(n-this.insertAnim)*Math.min(1,e*11),this.leverPivot.rotation.z=-(1-this.insertAnim)*(Math.PI*.48);const i=3.15/2+.015;this.floppyGroup.position.z=i-.58+(1-this.insertAnim)*.72;let r=0;this.activity==="read"||this.activity==="write"?r=.85+.15*Math.sin(t*42):this.activity==="error"&&(r=Math.sin(this.ledTimer*16)>0?1:0),this.driveLedMat.emissiveIntensity=.05+r*3.2,this.driveLedLight.intensity=r*.48}}function gS(s,e,t){const n=new Yi,i=s/2,r=e/2;return n.moveTo(-i+t,-r),n.lineTo(i-t,-r),n.quadraticCurveTo(i,-r,i,-r+t),n.lineTo(i,r-t),n.quadraticCurveTo(i,r,i-t,r),n.lineTo(-i+t,r),n.quadraticCurveTo(-i,r,-i,r-t),n.lineTo(-i,-r+t),n.quadraticCurveTo(-i,-r,-i+t,-r),n}function xS(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createImageData(128,128);for(let r=0;r<n.data.length;r+=4){const o=116+Math.floor(Math.random()*26);n.data[r]=o,n.data[r+1]=o,n.data[r+2]=o,n.data[r+3]=255}t.putImageData(n,0,0);const i=new vt(e);return i.wrapS=Ht,i.wrapT=Ht,i.repeat.set(4,4),i}function _S(){const t=document.createElement("canvas");t.width=512,t.height=64;const n=t.getContext("2d");n.fillStyle="#1b1917",n.fillRect(0,0,512,64),n.fillStyle="#a9a295",n.fillRect(0,60,512,3),["#cc3a32","#de7a28","#e5c136","#4da34e","#3c68b8"].forEach((o,a)=>{n.fillStyle=o,n.fillRect(14,12+a*7,16,6)}),n.fillStyle="#ebe5d8",n.font='700 28px "IBM Plex Sans", sans-serif',n.textBaseline="middle",n.fillText("commodore",42,30),n.fillStyle="#d4cec0",n.font='700 28px "IBM Plex Sans", sans-serif',n.textAlign="right",n.fillText("1541",494,30);const r=new vt(t);return r.colorSpace=at,r.anisotropy=8,r}function vS(){const s=document.createElement("canvas");s.width=256,s.height=48;const e=s.getContext("2d");e.clearRect(0,0,s.width,s.height),e.fillStyle="#aba496",e.font="600 20px Inter, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("POWER",64,24),e.fillText("DRIVE",192,24);const t=new vt(s);return t.colorSpace=at,t}function SS(){const s=document.createElement("canvas");s.width=256,s.height=128;const e=s.getContext("2d");e.fillStyle="#ebe4d4",e.fillRect(0,0,s.width,s.height),e.fillStyle="#c83a32",e.fillRect(0,0,s.width,22),e.fillStyle="#1f3e88",e.font='700 24px "IBM Plex Sans", sans-serif',e.fillText("GAMES DISK '84",18,66),e.fillStyle="#4a453c",e.font="600 15px Inter, sans-serif",e.fillText("ECHO · DODGE · GUESS · CAVE",18,98);const t=new vt(s);return t.colorSpace=at,t}class MS{root=new ct;hitMesh;canvas;hovered=!1;lift=0;baseY=.012;constructor(){this.canvas=TS();const e=new vt(this.canvas);e.colorSpace=at,e.anisotropy=8;const t=1.92,n=2.28,i=new Ct(t,n,18,22);i.rotateX(-Math.PI/2);const r=i.attributes.position;for(let c=0;c<r.count;c++){const l=r.getX(c),u=r.getZ(c),h=l/(t*.5),f=u/(n*.5),d=Math.exp(-f*f*20)*.016,m=Math.max(0,h+f-1.04),_=m*m*.16,p=Math.max(0,-f-.72)*.035,g=Math.sin(h*2.1+.4)*.006+Math.cos(f*2.5)*.005;r.setY(c,d+_+p+g)}i.computeVertexNormals();const o=new Ne({map:e,roughness:.9,metalness:0,side:gn}),a=new ee(i,o);a.castShadow=!0,a.receiveShadow=!0,a.userData.hit={kind:"paper"},this.root.add(a),this.hitMesh=a,this.root.scale.setScalar(.86),this.root.position.set(-2.96,this.baseY,2.25),this.root.rotation.y=.16}setHovered(e){this.hovered=e}update(e){const t=this.hovered?1:0;this.lift+=(t-this.lift)*Math.min(1,e*12),this.root.position.y=this.baseY+this.lift*.045,this.root.rotation.x=-this.lift*.04}}function yS(s){let e=s>>>0;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0&65535)/65536)}const lu={a:{w:.58,s:[[[.78,.46],[.5,.36],[.2,.5],[.16,.78],[.36,.98],[.66,.92],[.8,.62]],[[.78,.4],[.76,.76],[.84,.98]]]},b:{w:.58,s:[[[.2,.02],[.18,.55],[.2,.98]],[[.2,.52],[.5,.38],[.8,.54],[.78,.84],[.5,.99],[.2,.92]]]},c:{w:.52,s:[[[.82,.48],[.56,.36],[.24,.48],[.16,.74],[.3,.96],[.64,.98],[.86,.86]]]},d:{w:.6,s:[[[.76,.48],[.48,.38],[.2,.52],[.16,.8],[.38,.98],[.68,.92],[.78,.68]],[[.8,.02],[.78,.56],[.82,.98]]]},e:{w:.56,s:[[[.2,.66],[.54,.64],[.82,.56],[.76,.4],[.48,.36],[.2,.52],[.18,.8],[.4,.98],[.76,.92]]]},f:{w:.44,s:[[[.8,.14],[.58,.02],[.38,.16],[.36,.58],[.38,.98]],[[.14,.46],[.48,.44],[.78,.44]]]},g:{w:.58,s:[[[.78,.46],[.48,.36],[.2,.52],[.2,.8],[.46,.96],[.76,.82]],[[.78,.42],[.76,.92],[.64,1.24],[.36,1.32],[.14,1.18]]]},h:{w:.58,s:[[[.2,.02],[.18,.55],[.2,.98]],[[.2,.62],[.42,.4],[.7,.44],[.8,.7],[.82,.98]]]},i:{w:.28,s:[[[.48,.42],[.48,.72],[.52,.98]],[[.46,.16],[.52,.2]]]},k:{w:.56,s:[[[.2,.02],[.18,.54],[.2,.98]],[[.78,.42],[.44,.62],[.22,.7]],[[.4,.64],[.64,.84],[.84,.98]]]},l:{w:.28,s:[[[.46,.02],[.46,.56],[.5,.96],[.64,.98]]]},m:{w:.82,s:[[[.12,.4],[.12,.72],[.14,.98]],[[.14,.56],[.3,.38],[.46,.52],[.48,.98]],[[.48,.56],[.66,.38],[.84,.52],[.88,.98]]]},n:{w:.58,s:[[[.18,.4],[.18,.72],[.2,.98]],[[.2,.58],[.44,.38],[.74,.48],[.8,.76],[.82,.98]]]},o:{w:.58,s:[[[.52,.38],[.22,.48],[.16,.74],[.32,.96],[.62,.96],[.84,.78],[.8,.48],[.52,.38]]]},p:{w:.58,s:[[[.2,.4],[.18,.88],[.2,1.32]],[[.2,.52],[.48,.38],[.78,.52],[.78,.82],[.5,.98],[.2,.9]]]},r:{w:.46,s:[[[.24,.4],[.24,.72],[.26,.98]],[[.24,.6],[.44,.4],[.72,.38],[.84,.46]]]},s:{w:.52,s:[[[.78,.46],[.54,.36],[.24,.44],[.24,.6],[.56,.68],[.8,.8],[.74,.96],[.44,1],[.18,.9]]]},t:{w:.44,s:[[[.46,.1],[.44,.58],[.48,.94],[.68,.98]],[[.18,.42],[.48,.4],[.78,.38]]]},u:{w:.58,s:[[[.2,.4],[.18,.76],[.36,.98],[.64,.94],[.78,.68]],[[.78,.4],[.78,.74],[.84,.98]]]},v:{w:.54,s:[[[.14,.4],[.32,.74],[.5,.98],[.68,.7],[.86,.4]]]},w:{w:.78,s:[[[.08,.4],[.22,.96],[.46,.56],[.68,.96],[.9,.4]]]},y:{w:.56,s:[[[.16,.4],[.34,.74],[.52,.94]],[[.84,.4],[.62,.84],[.4,1.18],[.22,1.32]]]},z:{w:.54,s:[[[.18,.42],[.52,.4],[.82,.42],[.5,.7],[.16,.96],[.52,.96],[.86,.94]]]},A:{w:.64,s:[[[.1,.98],[.32,.44],[.5,.04],[.7,.5],[.9,.98]],[[.22,.66],[.52,.64],[.8,.62]]]},B:{w:.6,s:[[[.16,.04],[.16,.52],[.18,.98]],[[.16,.06],[.62,.04],[.82,.24],[.64,.48],[.18,.5],[.72,.54],[.86,.76],[.68,.98],[.18,.98]]]},C:{w:.6,s:[[[.84,.18],[.58,.02],[.26,.16],[.14,.52],[.26,.88],[.58,.98],[.86,.84]]]},D:{w:.62,s:[[[.16,.04],[.16,.52],[.18,.98]],[[.16,.06],[.58,.08],[.84,.34],[.84,.68],[.58,.96],[.18,.98]]]},E:{w:.56,s:[[[.8,.06],[.46,.04],[.18,.06],[.18,.52],[.2,.96],[.54,.98],[.84,.94]],[[.18,.5],[.48,.48],[.72,.48]]]},F:{w:.54,s:[[[.8,.06],[.48,.04],[.18,.06],[.18,.54],[.2,.98]],[[.18,.5],[.46,.48],[.7,.48]]]},G:{w:.64,s:[[[.82,.18],[.54,.02],[.22,.18],[.14,.54],[.26,.9],[.6,.98],[.84,.82],[.84,.54],[.52,.54]]]},H:{w:.62,s:[[[.16,.04],[.16,.54],[.18,.98]],[[.82,.04],[.82,.52],[.84,.98]],[[.16,.52],[.5,.48],[.82,.48]]]},I:{w:.36,s:[[[.26,.06],[.5,.05],[.74,.06]],[[.5,.06],[.48,.54],[.5,.96]],[[.24,.98],[.5,.96],[.76,.96]]]},K:{w:.6,s:[[[.18,.04],[.18,.52],[.2,.98]],[[.82,.08],[.48,.34],[.2,.52],[.52,.74],[.86,.98]]]},L:{w:.54,s:[[[.2,.04],[.18,.56],[.2,.96],[.54,.98],[.86,.94]]]},M:{w:.74,s:[[[.1,.98],[.16,.06],[.5,.56],[.84,.06],[.9,.98]]]},N:{w:.62,s:[[[.16,.98],[.16,.06],[.52,.54],[.82,.96],[.84,.06]]]},O:{w:.64,s:[[[.52,.04],[.22,.18],[.14,.54],[.26,.88],[.56,.98],[.84,.82],[.88,.46],[.76,.14],[.52,.04]]]},P:{w:.58,s:[[[.18,.98],[.16,.48],[.18,.04],[.64,.06],[.84,.26],[.68,.5],[.18,.52]]]},R:{w:.6,s:[[[.18,.98],[.16,.48],[.18,.04],[.64,.06],[.82,.26],[.66,.5],[.18,.52]],[[.46,.52],[.68,.76],[.88,.98]]]},S:{w:.56,s:[[[.8,.18],[.54,.04],[.24,.14],[.2,.36],[.5,.5],[.8,.64],[.8,.86],[.5,.98],[.18,.88]]]},T:{w:.58,s:[[[.12,.08],[.5,.05],[.88,.06]],[[.5,.06],[.48,.54],[.5,.98]]]},U:{w:.62,s:[[[.18,.06],[.18,.68],[.36,.96],[.66,.96],[.82,.68],[.84,.06]]]},V:{w:.6,s:[[[.14,.06],[.32,.56],[.5,.98],[.68,.54],[.86,.06]]]},W:{w:.78,s:[[[.08,.06],[.28,.96],[.5,.48],[.72,.96],[.92,.06]]]},Y:{w:.58,s:[[[.14,.06],[.34,.34],[.5,.52],[.68,.3],[.86,.06]],[[.5,.52],[.48,.76],[.5,.98]]]},0:{w:.58,s:[[[.52,.04],[.22,.18],[.14,.54],[.26,.88],[.54,.98],[.82,.82],[.86,.46],[.74,.14],[.52,.04]]]},1:{w:.4,s:[[[.26,.24],[.5,.06],[.5,.54],[.52,.96]],[[.26,.98],[.52,.96],[.78,.96]]]},2:{w:.56,s:[[[.18,.24],[.42,.04],[.72,.1],[.82,.32],[.58,.6],[.18,.96],[.54,.96],[.88,.94]]]},3:{w:.56,s:[[[.2,.16],[.52,.04],[.78,.2],[.7,.44],[.42,.5],[.76,.58],[.82,.82],[.54,.98],[.18,.88]]]},4:{w:.58,s:[[[.68,.06],[.4,.38],[.14,.66],[.54,.66],[.88,.64]],[[.68,.06],[.66,.56],[.68,.98]]]},5:{w:.56,s:[[[.78,.06],[.48,.06],[.24,.08],[.2,.48],[.56,.42],[.82,.62],[.76,.88],[.46,.98],[.18,.88]]]},6:{w:.56,s:[[[.74,.1],[.42,.06],[.2,.34],[.18,.74],[.44,.98],[.76,.88],[.8,.62],[.54,.48],[.2,.6]]]},7:{w:.54,s:[[[.16,.08],[.52,.06],[.84,.08],[.62,.52],[.4,.98]]]},8:{w:.56,s:[[[.52,.48],[.24,.34],[.24,.14],[.5,.04],[.76,.16],[.74,.36],[.5,.48],[.2,.66],[.22,.88],[.52,.98],[.8,.86],[.78,.64],[.52,.48]]]},$:{w:.58,s:[[[.78,.22],[.5,.1],[.24,.22],[.26,.42],[.74,.56],[.76,.78],[.48,.9],[.2,.8]],[[.5,0],[.48,.52],[.5,1.04]]]},"?":{w:.52,s:[[[.2,.22],[.46,.04],[.76,.14],[.78,.36],[.5,.56],[.48,.72]],[[.48,.9],[.52,.96]]]},"!":{w:.28,s:[[[.5,.04],[.48,.42],[.48,.72]],[[.48,.9],[.52,.96]]]},"=":{w:.54,s:[[[.18,.46],[.5,.44],[.82,.44]],[[.18,.7],[.5,.68],[.82,.68]]]},"+":{w:.52,s:[[[.5,.28],[.48,.56],[.5,.84]],[[.2,.56],[.5,.54],[.8,.54]]]},_:{w:.58,s:[[[.08,.96],[.5,.95],[.92,.96]]]},",":{w:.26,s:[[[.54,.82],[.48,.98],[.38,1.12]]]},".":{w:.24,s:[[[.46,.88],[.54,.94]]]},":":{w:.26,s:[[[.48,.42],[.52,.48]],[[.48,.84],[.52,.9]]]},";":{w:.28,s:[[[.48,.42],[.52,.48]],[[.52,.82],[.46,.98],[.38,1.1]]]},"(":{w:.36,s:[[[.68,.06],[.38,.3],[.32,.56],[.4,.82],[.68,.98]]]},")":{w:.36,s:[[[.32,.06],[.62,.3],[.68,.56],[.6,.82],[.32,.98]]]},'"':{w:.36,s:[[[.3,.04],[.28,.28]],[[.66,.04],[.62,.28]]]},"/":{w:.44,s:[[[.84,.06],[.5,.52],[.16,.98]]]}};function hu(s,e,t,n,i){const r=i*i,o=r*i;return .5*(2*e+(-s+t)*i+(2*s-5*e+4*t-n)*r+(-s+3*e-3*t+n)*o)}function TS(){const t=document.createElement("canvas");t.width=720,t.height=860;const n=t.getContext("2d"),i=yS(19842209),r=n.createLinearGradient(0,0,720,860);r.addColorStop(0,"#f5efde"),r.addColorStop(.55,"#eee6d3"),r.addColorStop(1,"#e3d9c3"),n.fillStyle=r,n.fillRect(0,0,720,860);for(let f=0;f<6500;f++){const d=i()*720,m=i()*860;n.fillStyle=i()>.5?"rgba(88, 70, 44, 0.032)":"rgba(255, 255, 255, 0.045)",n.fillRect(d,m,2,2)}n.fillStyle="rgba(42, 34, 26, 0.16)";for(let f=22;f<704;f+=26)n.beginPath(),n.arc(f,0,5.5,0,Math.PI),n.fill();n.strokeStyle="rgba(78, 136, 198, 0.30)",n.lineWidth=1.6;for(let f=114;f<836;f+=50)n.beginPath(),n.moveTo(0,f),n.lineTo(720,f),n.stroke();n.strokeStyle="rgba(210, 88, 92, 0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(86,0),n.lineTo(86,860),n.stroke();const o=n.createLinearGradient(0,860*.49,0,860*.53);o.addColorStop(0,"rgba(60, 48, 32, 0.0)"),o.addColorStop(.5,"rgba(60, 48, 32, 0.075)"),o.addColorStop(1,"rgba(60, 48, 32, 0.0)"),n.fillStyle=o,n.fillRect(0,860*.49,720,860*.04),n.beginPath(),n.moveTo(642,860),n.lineTo(720,782),n.lineTo(720,860),n.closePath(),n.fillStyle="rgba(90, 74, 52, 0.14)",n.fill();const a=[24,58,146],c=[194,42,38],l=(f,d,m)=>{if(f.length<2)return;n.save(),n.lineCap="round",n.lineJoin="round";const _=[],p=8;for(let g=0;g<f.length-1;g++){const S=f[Math.max(0,g-1)],M=f[g],v=f[g+1],b=f[Math.min(f.length-1,g+2)];for(let E=0;E<p;E++){const x=E/p;_.push([hu(S[0],M[0],v[0],b[0],x),hu(S[1],M[1],v[1],b[1],x)])}}_.push(f[f.length-1]),n.fillStyle=`rgba(${d[0]},${d[1]},${d[2]},0.82)`,n.beginPath(),n.arc(_[0][0],_[0][1],m*.56,0,Math.PI*2),n.fill();for(let g=1;g<_.length;g++){const[S,M]=_[g-1],[v,b]=_[g],x=b-M>0?1.12:.88,T=m*x*(.92+i()*.16),L=.74+i()*.18;n.strokeStyle=`rgba(${d[0]},${d[1]},${d[2]},${L.toFixed(2)})`,n.lineWidth=T,n.beginPath(),n.moveTo(S,M),n.lineTo(v,b),n.stroke()}n.restore()},u=(f,d,m,_,p=a,g=3.2,S=-.012)=>{let M=d,v=m;const b=-.08;for(let E=0;E<f.length;E++){const x=f[E];if(x===" "){M+=_*(.4+(i()-.5)*.12),v+=_*S*.4;continue}const T=lu[x]??lu[x.toUpperCase()],L=(T?.w??.55)*_,C=_*(.88+i()*.24),R=L*(.88+i()*.22),I=b+(i()-.5)*.22,O=(i()-.5)*_*.15;if(T)for(const P of T.s){const U=P.map(([G,F])=>{const Z=(G-.5)*R+(i()-.5)*1.4,H=(F-1)*C+(i()-.5)*1.4,X=Z-H*.08,q=X*Math.cos(I)-H*Math.sin(I),le=X*Math.sin(I)+H*Math.cos(I);return[M+R*.5+q,v+O+le]});l(U,p,g)}M+=R+_*(.1+i()*.09),v+=(R+_*.12)*S}};u("BASIC CHEAT SHEET",98,94,37,a,3.9,-.014),l([[98,105],[260,101],[415,97],[534,94]],a,3.2),l([[112,112],[290,108],[480,104]],a,2),wS(568,38,80,a,c,l),u("make it echo:",100,162,26,a,2.8,-.01),u("10 INPUT A$",106,214,34,a,3.6,-.01),u("(words!)",378,210,22,a,2.4,.015),u("20",106,266,34,a,3.6,-.01),u("echo",176,266,31,a,2.9,-.008),l([[170,262],[192,240],[210,266],[234,240],[252,266],[274,244],[284,260]],c,3.6),l([[168,253],[228,250],[286,252]],c,2.8),u("PRINT ???",302,264,34,a,3.6,-.015),u("30 GOTO __",106,318,34,a,3.6,-.006),l([[356,308],[488,326],[596,286],[600,212],[552,174],[496,178]],a,3.3),l([[516,162],[492,178],[516,194]],a,3.3),u("loop!",526,258,22,c,2.6,.07),u("then type  RUN",108,372,29,a,3.2,-.01),l([[314,380],[362,379],[412,377]],a,2.8),l([[96,424],[116,394],[350,390],[588,398],[608,426],[590,456],[344,460],[110,456],[94,428],[114,398]],c,3.4),u("stuck?? press  ESC !!",118,439,31,c,3.6,-.005);const h=[];for(let f=98;f<=638;f+=26)h.push([f,502+Math.sin(f*.075)*6]);return l(h,a,2.3),u("LIST = see code",102,548,26,a,3,-.006),u("NEW  = erase all",102,590,26,a,3,-.004),u("CMD+C/V = copy/paste list!",102,634,24,a,2.8,-.006),u("GAMES ON DISK!!",102,692,26,c,3.2,-.012),l([[102,700],[238,696],[352,692]],c,2.2),u('LOAD "$",8',108,738,28,a,3.3,-.006),u("then LIST",326,736,21,a,2.4,.01),u('LOAD "DODGE",8',108,782,28,a,3.3,-.006),u('SAVE "MINE",8',108,826,28,a,3.3,-.004),bS(42,558,a,c,l),uu(586,744,26,c,l),uu(636,784,16,a,l),t}function wS(s,e,t,n,i,r){r([[s,e],[s+t,e-2],[s+t+2,e+t*.8],[s-2,e+t*.82],[s,e]],n,2.8),r([[s+10,e+11],[s+t-10,e+10],[s+t-9,e+t*.56],[s+10,e+t*.58],[s+10,e+11]],n,2.1),r([[s+25,e+23],[s+26,e+27]],n,3.2),r([[s+t-25,e+23],[s+t-24,e+27]],n,3.2),r([[s+24,e+36],[s+t*.5,e+43],[s+t-24,e+35]],n,2.4),r([[s+t-17,e+t*.69],[s+t-12,e+t*.69]],i,4.4)}function uu(s,e,t,n,i){const o=[0,2,4,1,3,0].map(a=>{const c=-Math.PI/2+a*Math.PI*2/5;return[s+Math.cos(c)*t,e+Math.sin(c)*t]});i(o,n,2.6)}function bS(s,e,t,n,i){i([[s,e-34],[s+12,e-10],[s+12,e+20],[s-12,e+20],[s-12,e-10],[s,e-34]],t,2.4),i([[s-12,e+6],[s-22,e+24],[s-12,e+20]],t,2.2),i([[s+12,e+6],[s+22,e+24],[s+12,e+20]],t,2.2),i([[s-4,e-4],[s+4,e-4],[s+4,e+4],[s-4,e+4],[s-4,e-4]],t,2),i([[s-7,e+22],[s-2,e+38],[s+2,e+28],[s+6,e+40],[s+8,e+22]],n,2.5)}const ls=[{name:"blue",hex:1987512},{name:"red",hex:13183526},{name:"green",hex:2526020},{name:"black",hex:1776153}];class ES{root=new ct;hitMesh;sliders=[];sliderAnim=[1,0,0,0];nibMat;nibMesh;activeIndex=0;hovered=!1;hoverLift=0;baseY=.056;constructor(){const e=new ct;this.root.add(e);const t=new Ne({color:3898306,roughness:.22,metalness:.05}),n=new Ne({color:15921128,roughness:.24,metalness:.04}),i=new Ne({color:1512982,roughness:.38,metalness:.1}),r=new Ne({color:13942914,roughness:.25,metalness:.85}),o=.055,a=[new ae(.011,-.74),new ae(.022,-.72),new ae(.036,-.67),new ae(.046,-.58),new ae(o*.94,-.42),new ae(o*1,.06)],c=new ys(a,28);c.rotateZ(-Math.PI/2);const l=new ee(c,t);l.castShadow=!0,l.receiveShadow=!0,e.add(l),this.nibMat=new Ne({color:ls[0].hex,roughness:.35,metalness:.45});const u=new ee(new Ot(.004,.01,.042,10),r);u.rotation.z=Math.PI/2;const h=new ee(new vr(.0055,8,8),this.nibMat);h.position.x=-.022,this.nibMesh=new ct,this.nibMesh.add(u,h),this.nibMesh.position.x=-.755,e.add(this.nibMesh);const f=new Ot(o*1.005,o*1.005,.024,24);f.rotateZ(Math.PI/2);const d=new ee(f,i);d.position.x=.072,e.add(d);const m=[new ae(o*1,.084),new ae(o*.98,.42),new ae(o*.88,.62),new ae(o*.62,.665),new ae(.018,.675)],_=new ys(m,28);_.rotateZ(-Math.PI/2);const p=new ee(_,n);p.castShadow=!0,p.receiveShadow=!0,e.add(p);const g=new Ot(.013,.017,.036,12);g.rotateZ(Math.PI/2);const S=new ee(g,n);S.position.x=.688,e.add(S);const M=new ee(new vr(.029,16,12),n);M.position.x=.722,M.castShadow=!0,e.add(M);const v=new Yi;v.moveTo(.62,o*.78),v.quadraticCurveTo(.42,o+.058,.14,o+.042),v.lineTo(.11,o+.015),v.lineTo(.17,o+.015),v.quadraticCurveTo(.4,o+.025,.54,o*.88),v.closePath();const b=new Mn(v,{depth:.032,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2});b.translate(0,0,-.016);const E=new ee(b,n);E.rotation.x=Math.PI*.58,E.castShadow=!0,e.add(E);const x=[.55,-.55,Math.PI-.55,Math.PI+.55];for(let L=0;L<ls.length;L++){const C=new ct;C.rotation.x=x[L],e.add(C);const R=new ct,I=new Ne({color:ls[L].hex,roughness:.28,metalness:.05}),O=new ee(new cl(.017,.14,6,12),I);O.rotation.z=Math.PI/2,O.position.set(0,o*.9,0),O.castShadow=!0,R.add(O);const P=new ee(new Ye(.034,.028,.026),I);P.position.set(.068,o*.96,0),R.add(P),C.add(R),this.sliders.push(R)}const T=new Ye(1.64,.24,.28);this.hitMesh=new ee(T,new hn({visible:!1})),this.hitMesh.userData.hit={kind:"pen"},e.add(this.hitMesh),this.root.position.set(-3.08,this.baseY,.42),this.root.rotation.y=.36}clickNextColor(){return this.activeIndex=(this.activeIndex+1)%ls.length,this.nibMat.color.setHex(ls[this.activeIndex].hex),ls[this.activeIndex].name}setHovered(e){this.hovered=e}update(e){const t=this.hovered?1:0;this.hoverLift+=(t-this.hoverLift)*Math.min(1,e*14),this.root.position.y=this.baseY+this.hoverLift*.028;let n=0;for(let i=0;i<this.sliders.length;i++){const r=i===this.activeIndex?1:0;this.sliderAnim[i]+=(r-this.sliderAnim[i])*Math.min(1,e*24),this.sliders[i].position.x=.56-this.sliderAnim[i]*.105,i===this.activeIndex&&(n=this.sliderAnim[i])}this.nibMesh.position.x=-.735-n*.028}}function fu(s,e){if(e===Ld)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===wc||e===Xu){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===wc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function AS(s){const e=new Map,t=new Map,n=s.clone();return Hf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Hf(s.children[n],e.children[n],t)}class RS extends Ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new NS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new du(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new du(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new KS(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=or.extractUrlBase(e);o=or.resolveURL(l,this.path)}else o=or.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new yf(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gf){try{o[ot.KHR_BINARY_GLTF]=new qS(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new a1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new LS;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new $S(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new ZS;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new JS;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function CS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Dt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class PS{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new $e(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],_n);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Go(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new zi(u),l.distance=h;break;case"spot":l=new wf(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Fn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class LS{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return hn}extendParams(e,t,n){const i=[];e.color=new $e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],_n),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(i)}}class IS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class NS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(r,r)}return Promise.all(i)}}class DS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class OS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class US{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class FS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],_n)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,at)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class BS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class kS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(r[0],r[1],r[2],_n),Promise.all(i)}}class HS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class GS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(r[0],r[1],r[2],_n),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,at)),Promise.all(i)}}class zS{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class VS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class WS{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class XS{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class YS{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class du{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class KS{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Sn.TRIANGLES&&l.mode!==Sn.TRIANGLE_STRIP&&l.mode!==Sn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const m of h){const _=new tt,p=new D,g=new hi,S=new D(1,1,1),M=new Lp(m.geometry,m.material,f);for(let b=0;b<f;b++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,b),c.SCALE&&S.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,_.compose(p,g,S));let v=null;for(const b in c)if(b==="_COLOR_0"){const E=c[b];M.instanceColor=new yo(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){const x=M.geometry;v=new Ut,v.name=x.name;for(const T in x.attributes)v.setAttribute(T,x.attributes[T]);for(const T in x.morphAttributes)v.morphAttributes[T]=x.morphAttributes[T];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(const T of x.groups)v.addGroup(T.start,T.count,T.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),M.geometry=v}const E=c[b];v.setAttribute(b,new yo(E.array,E.itemSize,E.normalized))}Pt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Gf="glTF",Ys=12,pu={JSON:1313821514,BIN:5130562};class qS{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ys,r=new DataView(e,Ys);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===pu.JSON){const l=new Uint8Array(e,Ys+o,a);this.content=n.decode(l)}else if(c===pu.BIN){const l=Ys+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $S{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Ic[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ic[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=gs[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const _=d.attributes[m],p=c[m];p!==void 0&&(_.normalized=p)}h(d)},a,l,_n,f)})})}}class ZS{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class JS{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class zf extends Rs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*l,_=m-l,p=-2*d+3*f,g=d-f,S=1-p,M=g-f+h;for(let v=0;v!==a;v++){const b=o[_+v+a],E=o[_+v+c]*u,x=o[m+v+a],T=o[m+v]*u;r[v]=S*b+M*E+p*x+g*T}return r}}const QS=new hi;class jS extends zf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return QS.fromArray(r).normalize().toArray(r),r}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mu={9728:Gt,9729:zt,9984:Bu,9985:co,9986:$s,9987:Hn},gu={33071:kn,33648:go,10497:Ht},Na={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ic={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},e1={CUBICSPLINE:void 0,LINEAR:fr,STEP:ur},Da={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function t1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ne({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wn})),s.DefaultMaterial}function Bi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function n1(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function i1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function s1(s){let e;const t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oa(t.attributes):e=s.indices+":"+Oa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Oa(s.targets[n]);return e}function Oa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Nc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function r1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const o1=new tt;class a1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new CS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new O0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new H0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Bi(r,a,i),Fn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(or.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Na[i.type],a=gs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new nn(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Na[i.type],l=gs[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,p;if(d&&d!==h){const g=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let M=t.cache.get(S);M||(_=new l(a,g*d,i.count*d/u),M=new yp(_,d/u),t.cache.add(S,M)),p=new tl(M,c,f%d/u,m)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),p=new nn(_,c,m);if(i.sparse!==void 0){const g=Na.SCALAR,S=gs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new S(o[1],M,i.sparse.count*g),E=new l(o[2],v,i.sparse.count*c);a!==null&&(p=new nn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,T=b.length;x<T;x++){const L=b[x];if(p.setX(L,E[x*c]),c>=2&&p.setY(L,E[x*c+1]),c>=3&&p.setZ(L,E[x*c+2]),c>=4&&p.setW(L,E[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=mu[f.magFilter]||zt,u.minFilter=mu[f.minFilter]||Hn,u.wrapS=gu[f.wrapS]||Ht,u.wrapT=gu[f.wrapT]||Ht,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Gt&&u.minFilter!==zt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,m){t.parse(f,d,m)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;const d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(c).then(function(f){return new Promise(function(d,m){let _=d;t.isImageBitmapLoader===!0&&(_=function(p){const g=new Vt(p);g.needsUpdate=!0,d(g)}),t.load(or.resolveURL(f,r.path),_,void 0,m)})})}const h=u.then(function(f){return l===!0&&a.revokeObjectURL(c),Fn(f,o),f.userData.mimeType=o.mimeType||r1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new al,Vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new rl,Vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ne}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){const h=i[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],_n),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,at)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gn);const u=r.alphaMode||Da.OPAQUE;if(u===Da.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Da.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==hn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==hn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==hn){const h=r.emissiveFactor;a.emissive=new $e().setRGB(h[0],h[1],h[2],_n)}return r.emissiveTexture!==void 0&&o!==hn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,at)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Fn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Bi(i,h,r),h})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return xu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=s1(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=xu(new Ut,l,t),l.mode===Sn.TRIANGLE_STRIP?f=f.then(d=>fu(d,Xu)):l.mode===Sn.TRIANGLE_FAN&&(f=f.then(d=>fu(d,wc))),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?t1(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const _=u[d],p=o[d];let g;const S=l[d];if(p.mode===Sn.TRIANGLES||p.mode===Sn.TRIANGLE_STRIP||p.mode===Sn.TRIANGLE_FAN||p.mode===void 0){const M=r.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&v?new Rp(_,S):new ee(_,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===Sn.LINES)g=new rf(_,S);else if(p.mode===Sn.LINE_STRIP)g=new ol(_,S);else if(p.mode===Sn.LINE_LOOP)g=new Np(_,S);else if(p.mode===Sn.POINTS)g=new of(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&i1(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Fn(g,r),p.extensions&&Bi(i,g,p),t.assignFinalMaterial(g),h.push(g)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Bi(i,h[0],r),h[0];const f=new ct;r.extensions&&Bi(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Mo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ho(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new tt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new il(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],m=i.samplers[d.sampler],_=d.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,S=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",S)),l.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],_=h[3],p=h[4],g=[];for(let M=0,v=f.length;M<v;M++){const b=f[M],E=d[M],x=m[M],T=_[M],L=p[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const C=n._createAnimationTracks(b,E,x,T,L);if(C)for(let R=0;R<C.length;R++)g.push(C[R])}const S=new R0(r,void 0,g);return Fn(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,o1)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){const d=u.userData.pivot,m=h[0];u.pivot=new D().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new sf:l.length>1?u=new ct:l.length===1?u=l[0]:u=new Pt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Fn(u,r),r.extensions&&Bi(n,u,r),r.matrix!==void 0){const h=new tt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ct;n.name&&(r.name=i.createUniqueName(n.name)),Fn(r,n),n.extensions&&Bi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){const f=c[u];f.parent!==null?r.add(AS(f)):r.add(f)}const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Vn||f instanceof Vt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Si[r.path]===Si.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(Si[r.path]){case Si.weights:u=Sr;break;case Si.rotation:u=Mr;break;case Si.translation:case Si.scale:u=Ao;break;default:n.itemSize===1?u=Sr:u=Ao;break}const h=i.interpolation!==void 0?e1[i.interpolation]:fr,f=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const _=new u(c[d]+"."+Si[r.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Nc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Mr?jS:zf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function c1(s,e,t){const n=e.attributes,i=new ui;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const u=Nc(gs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,c=new D;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=Nc(gs[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Kn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function xu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Ic[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ht.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Fn(s,e),c1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?n1(s,e.targets,t):s})}class l1{root=new ct;interactiveMeshes=[];spotLight;wallGlow;bulbMat=null;innerShadeMat=null;switchRocker=null;lit=!0;lightAnim=1;constructor(e){this.spotLight=new wf(16768944,28,18,Math.PI*.34,.72,1.4),this.spotLight.position.set(1.75,3.25,.25),this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.set(2048,2048),this.spotLight.shadow.camera.near=.45,this.spotLight.shadow.camera.far=14,this.spotLight.shadow.bias=-4e-4,this.spotLight.shadow.normalBias=.025,this.spotLight.shadow.radius=4,this.root.add(this.spotLight);const t=new Pt;t.position.set(3.2,.2,1),this.root.add(t),this.spotLight.target=t,this.wallGlow=new zi(16763784,4.4,12.5,1.55),this.wallGlow.position.set(.55,3.65,-.55),this.root.add(this.wallGlow),this.root.position.set(-7.62,-1.46,.35),this.root.rotation.set(0,-.06,-.32),this.root.scale.setScalar(1.34),new RS().load("/codevember-sets/theo/22/lamp.glb",r=>{const o=r.scene;this.root.add(o);let a=null,c=null,l=null;if(o.traverse(u=>{if(u.name==="light_origin"&&(a=u),u.name==="light_target"&&(c=u),u.name==="switch_rocker"&&(this.switchRocker=u),u.name==="shade_outer"&&(l=u),u instanceof ee){const h=u.name==="bulb"||u.name.startsWith("shade_")||u.name.startsWith("cord_");u.castShadow=!h,u.receiveShadow=!0,u.userData.hit={kind:"lamp"},this.interactiveMeshes.push(u),u.name==="bulb"&&u.material instanceof Ne&&(this.bulbMat=u.material),u.name==="shade_inner"&&u.material instanceof Ne&&(this.innerShadeMat=u.material)}}),l){const u=h1();l.add(u),this.interactiveMeshes.push(u)}if(a&&c){const u=a,h=c;u.add(this.spotLight),this.spotLight.position.set(0,0,0),this.spotLight.target=h}e?.()},void 0,r=>{console.warn("Failed to load desk lamp model:",r)})}toggle(){return this.lit=!this.lit,this.lit}update(e){const t=this.lit?1:0;this.lightAnim+=(t-this.lightAnim)*Math.min(1,e*16),this.spotLight.intensity=this.lightAnim*28,this.wallGlow.intensity=this.lightAnim*4.4,this.bulbMat&&(this.bulbMat.emissiveIntensity=this.lightAnim*3.6),this.innerShadeMat&&(this.innerShadeMat.emissiveIntensity=this.lightAnim*.78),this.switchRocker&&(this.switchRocker.rotation.x=this.lit?-.28:.28)}}function h1(){const t=new Ct(1,1,22,22),n=t.attributes.position,i=-.545,r=.355,o=-.94,a=.61,c=Math.hypot(a-r,i-o),l=.43,u=l*(250/350),h=c*.55,f=.94,d=.03,m=Math.cos(d),_=Math.sin(d);for(let L=0;L<n.count;L++){const C=n.getX(L),R=n.getY(L),I=C*u*m-R*l*_,O=C*u*_+R*l*m,U=(h-O)/c,G=r+(a-r)*U,F=i+(o-i)*U,Z=f+I/Math.max(.15,G),H=Math.min(.5-Math.abs(C),.5-Math.abs(R)),q=.002+Math.min(1,H/.045)*.0065,le=Math.max(0,C-.14),we=Math.max(0,R-.14),V=le*we*.09,se=G+q+V;n.setXYZ(L,Math.sin(Z)*se,F,Math.cos(Z)*se)}t.computeVertexNormals();const p=512,g=716,S=document.createElement("canvas");S.width=p,S.height=g;const M=document.createElement("canvas");M.width=p,M.height=g;const v=new vt(S);v.colorSpace=at,v.anisotropy=8;const b=new vt(M);b.anisotropy=4;const E=new Image;E.crossOrigin="anonymous",E.onload=()=>{u1(S,M,E),v.needsUpdate=!0,b.needsUpdate=!0},E.src="/codevember-sets/theo/22/gpk-sticker.jpg";const x=new cn({map:v,bumpMap:b,bumpScale:.012,roughness:.34,metalness:.02,clearcoat:.38,clearcoatRoughness:.24,transparent:!0,alphaTest:.02,polygonOffset:!0,polygonOffsetFactor:-2,side:gn}),T=new ee(t,x);return T.receiveShadow=!0,T.userData.hit={kind:"lamp"},T}function u1(s,e,t){const n=s.width,i=s.height,r=s.getContext("2d"),o=e.getContext("2d"),a=16,c=n-a*2,l=i-a*2,u=14,h=(f,d=0)=>{f.beginPath(),f.moveTo(n*.62-d,0),f.lineTo(n,0),f.lineTo(n,i*.3+d),f.lineTo(n*.9-d*.8,i*.27+d*.5),f.lineTo(n*.85-d,i*.21+d*.5),f.lineTo(n*.78-d,i*.22+d*.6),f.lineTo(n*.74-d,i*.14+d*.5),f.lineTo(n*.68-d,i*.1+d*.5),f.lineTo(n*.65-d,i*.04+d*.3),f.closePath(),f.moveTo(0,i*.73-d),f.lineTo(a+18+d,i*.75-d*.4),f.lineTo(a+11+d,i*.79),f.lineTo(a+22+d,i*.83+d*.3),f.lineTo(a+8+d,i*.86+d*.5),f.lineTo(0,i*.87+d),f.closePath()};r.clearRect(0,0,n,i),r.save(),r.shadowColor="rgba(18, 4, 0, 0.55)",r.shadowBlur=12,r.shadowOffsetX=3,r.shadowOffsetY=5,r.fillStyle="#e8e2d4",r.beginPath(),r.roundRect(a,a,c,l,u),r.fill(),r.restore(),r.save(),r.beginPath(),r.roundRect(a,a,c,l,u),r.clip(),r.fillStyle="#f2ede2",r.fillRect(a,a,c,l),r.drawImage(t,a+4,a+4,c-8,l-8),r.fillStyle="rgba(245, 224, 185, 0.10)",r.fillRect(a,a,c,l),r.lineWidth=7,r.strokeStyle="rgba(255, 252, 245, 0.55)",r.beginPath(),r.roundRect(a+3,a+3,c-6,l-6,u-2),r.stroke(),r.lineWidth=4,r.strokeStyle="rgba(65, 52, 42, 0.32)",r.beginPath(),r.roundRect(a+1,a+1,c-2,l-2,u),r.stroke(),r.save(),h(r,11),r.fillStyle="#ece6d8",r.fill(),r.strokeStyle="rgba(120, 105, 88, 0.35)",r.lineWidth=3,r.stroke(),r.restore(),r.strokeStyle="rgba(255, 250, 240, 0.32)",r.lineWidth=3,r.beginPath(),r.moveTo(n*.52,a),r.lineTo(n-a,i*.42),r.stroke(),r.restore(),r.save(),r.globalCompositeOperation="destination-out",h(r,0),r.fillStyle="#000",r.fill(),r.restore(),o.fillStyle="#000000",o.fillRect(0,0,n,i),o.save(),o.shadowColor="#ffffff",o.shadowBlur=10,o.fillStyle="#ffffff",o.beginPath(),o.roundRect(a+5,a+5,c-10,l-10,Math.max(4,u-4)),o.fill(),o.restore(),o.save(),h(o,11),o.fillStyle="#999999",o.fill(),o.restore(),o.save(),h(o,0),o.fillStyle="#000000",o.fill(),o.restore()}class f1{root=new ct;hitMesh;hourHand=new ct;minuteHand=new ct;secondHand=new ct;tickSoundOn=!0;lastSecond=-1;onTickCallback;constructor(e){this.onTickCallback=e;const t=.92,n=.17,i=new ct;this.root.add(i);const r=new Ne({color:1118482,roughness:.16,metalness:.12}),o=new Ne({color:2500138,roughness:.45,metalness:.25}),a=new Ne({color:14823990,roughness:.32,metalness:.15}),c=new Ot(t,t*.96,n,40);c.rotateX(Math.PI/2);const l=new ee(c,r);l.position.z=n*.5,l.castShadow=!0,l.receiveShadow=!0,i.add(l);const u=new Fo(t-.03,.055,16,48),h=new ee(u,r);h.position.z=n,h.castShadow=!0,i.add(h);const f=d1(),d=new Ne({map:f,roughness:.62,metalness:0}),m=new ee(new bo(t-.05,44),d);m.position.z=n+.004,m.receiveShadow=!0,i.add(m);const _=n+.016,p=new ee(new Ye(.054,.46,.012),o);p.position.y=.2,this.hourHand.add(p),this.hourHand.position.z=_,i.add(this.hourHand);const g=new ee(new Ye(.044,.66,.012),o);g.position.y=.3,this.minuteHand.add(g),this.minuteHand.position.z=_+.014,i.add(this.minuteHand);const S=new ee(new Ye(.016,.78,.008),a);S.position.y=.25,this.secondHand.add(S),this.secondHand.position.z=_+.026,i.add(this.secondHand);const M=new ee(new Ot(.055,.058,.032,16),a);M.rotation.x=Math.PI/2,M.position.z=_+.028,i.add(M);const v=new cn({color:16777215,roughness:.08,metalness:0,transparent:!0,opacity:.14,clearcoat:1,clearcoatRoughness:.08}),b=new ee(new bo(t-.042,40),v);b.position.z=n+.054,b.userData.hit={kind:"clock"},i.add(b),this.hitMesh=b;const E=new ee(new Ct(t*2.55,t*2.55),new hn({map:p1(),transparent:!0,depthWrite:!1,opacity:.55}));E.position.set(.08,-.1,.006),i.add(E),this.root.scale.setScalar(1.15),this.root.position.set(3.22,4.18,-3.44),this.syncTime(!1)}toggleTickSound(){return this.tickSoundOn=!this.tickSoundOn,this.tickSoundOn}update(){this.syncTime(!0)}syncTime(e){const t=new Date,n=t.getSeconds(),i=t.getMilliseconds(),r=t.getMinutes()+n/60,o=t.getHours()%12+r/60;n!==this.lastSecond&&(e&&this.lastSecond>=0&&this.tickSoundOn&&this.onTickCallback?.(n),this.lastSecond=n);const a=i<95?Math.sin(i/95*Math.PI)*.022:0;this.secondHand.rotation.z=-(n/60)*Math.PI*2-a,this.minuteHand.rotation.z=-(r/60)*Math.PI*2,this.hourHand.rotation.z=-(o/12)*Math.PI*2}}function d1(){const i=document.createElement("canvas");i.width=512,i.height=512;const r=i.getContext("2d");r.fillStyle="#faf8f0",r.fillRect(0,0,512,512),r.save(),r.beginPath(),r.arc(256,256,240.64*.9,0,Math.PI*2),r.clip();const o=284;r.fillStyle="#a48ee4",r.fillRect(0,0,512,o),r.strokeStyle="rgba(255, 255, 255, 0.82)",r.lineWidth=2.6;const a=28;for(let h=256%a;h<512;h+=a)r.beginPath(),r.moveTo(h,0),r.lineTo(h,o),r.stroke();for(let h=o;h>=0;h-=a)r.beginPath(),r.moveTo(0,h),r.lineTo(512,h),r.stroke();r.restore(),r.strokeStyle="#977fd9",r.lineWidth=4,r.beginPath(),r.arc(256,256,240.64*.9,0,Math.PI*2),r.stroke(),r.fillStyle="#977fd9",r.fillRect(246,256+240.64*.74,6,240.64*.2),r.fillRect(260,256+240.64*.74,6,240.64*.2);const c=(h,f)=>{r.save(),r.translate(h,f),r.fillStyle="#e03e32",r.beginPath(),r.moveTo(-22,6),r.quadraticCurveTo(-10,-8,0,-4),r.quadraticCurveTo(10,-8,22,6),r.quadraticCurveTo(8,2,0,8),r.quadraticCurveTo(-8,2,-22,6),r.fill(),r.restore()};c(256,256-240.64*.89),c(256-240.64*.88,256),c(256+240.64*.88,256),r.save(),r.translate(256,272);const l=h=>{r.beginPath(),r.moveTo(0,-68*h),r.lineTo(-10*h,-44*h),r.lineTo(-22*h,-66*h),r.lineTo(-26*h,-34*h),r.quadraticCurveTo(-82*h,-54*h,-148*h,-6*h),r.quadraticCurveTo(-162*h,34*h,-172*h,88*h),r.quadraticCurveTo(-110*h,48*h,-56*h,64*h),r.quadraticCurveTo(-24*h,56*h,0,82*h),r.quadraticCurveTo(24*h,56*h,56*h,64*h),r.quadraticCurveTo(110*h,48*h,172*h,88*h),r.quadraticCurveTo(162*h,34*h,148*h,-6*h),r.quadraticCurveTo(82*h,-54*h,26*h,-34*h),r.lineTo(22*h,-66*h),r.lineTo(10*h,-44*h),r.closePath()};l(1.04),r.fillStyle="#faf8f0",r.fill(),l(1),r.fillStyle="#2d2926",r.fill(),r.fillStyle="#f5e7d2",r.beginPath(),r.arc(0,-14,11,.1,Math.PI-.1),r.fill(),r.fillStyle="#ffffff",r.fillRect(-7,-23,5,3),r.fillRect(2,-23,5,3),r.restore();const u=new vt(i);return u.colorSpace=at,u.anisotropy=8,u}function p1(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,128*.24,128/2,128/2,128*.5);return n.addColorStop(0,"rgba(0, 0, 0, 0.92)"),n.addColorStop(.62,"rgba(0, 0, 0, 0.45)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new vt(e)}function m1(){const s=new ct,e=[{canvas:g1(),w:1.55,h:2.05,x:-5.15,y:.008,z:2.35,rotY:.32,curl:.05},{canvas:x1(),w:2.05,h:1.52,x:-5.95,y:.015,z:1.65,rotY:-.24,curl:.07},{canvas:_1(),w:1.48,h:1.92,x:-5.55,y:.022,z:2.85,rotY:-.58,curl:.09},{canvas:v1(),w:1.38,h:1.72,x:-6.45,y:.012,z:2.45,rotY:.14,curl:.06}];for(const t of e){const n=new vt(t.canvas);n.colorSpace=at,n.anisotropy=8;const i=new Ct(t.w,t.h,12,12);i.rotateX(-Math.PI/2);const r=i.attributes.position;for(let c=0;c<r.count;c++){const l=r.getX(c),u=r.getZ(c),h=l/(t.w*.5),f=u/(t.h*.5),d=Math.max(0,h+f-1.05),m=d*d*t.curl+Math.sin(h*2.4)*.004;r.setY(c,m)}i.computeVertexNormals();const o=new Ne({map:n,roughness:.91,metalness:0,side:gn}),a=new ee(i,o);a.position.set(t.x,t.y,t.z),a.rotation.y=t.rotY,a.castShadow=!0,a.receiveShadow=!0,s.add(a)}return s}function Wo(s,e,t="#f2ebda"){const n=document.createElement("canvas");n.width=s,n.height=e;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,s,e);for(let r=0;r<3200;r++)i.fillStyle=Math.random()>.5?"rgba(80,64,40,0.03)":"rgba(255,255,255,0.04)",i.fillRect(Math.random()*s,Math.random()*e,2,2);return[n,i]}function xt(s,e,t,n=3,i=2.5){if(!(e.length<2)){s.save(),s.strokeStyle=t,s.lineWidth=n,s.lineCap="round",s.lineJoin="round",s.beginPath(),s.moveTo(e[0][0],e[0][1]);for(let r=1;r<e.length;r++){const[o,a]=e[r-1],[c,l]=e[r],u=(o+c)*.5+(Math.random()-.5)*i,h=(a+l)*.5+(Math.random()-.5)*i;s.quadraticCurveTo(u,h,c,l)}s.stroke(),s.restore()}}function Ua(s,e,t,n,i,r){s.save(),s.strokeStyle=r,s.lineWidth=3.2,s.lineCap="round",s.beginPath();const o=6;for(let a=3;a<n+i-3;a+=o){const c=e+Math.max(2,a-i+2),l=t+Math.min(i-2,a),u=e+Math.min(n-2,a),h=t+Math.max(2,a-n+2);s.moveTo(c+(Math.random()-.5)*2,l+(Math.random()-.5)*2),s.lineTo(u+(Math.random()-.5)*2,h+(Math.random()-.5)*2)}s.stroke(),s.restore()}function g1(){const[t,n]=Wo(512,680,"#f3eedf");n.strokeStyle="rgba(92, 148, 198, 0.28)",n.lineWidth=1.2;const i=32;for(let d=0;d<=512;d+=i)n.beginPath(),n.moveTo(d,0),n.lineTo(d,680),n.stroke();for(let d=0;d<=680;d+=i)n.beginPath(),n.moveTo(0,d),n.lineTo(512,d),n.stroke();const r="rgba(26, 66, 162, 0.85)",o="rgba(196, 44, 38, 0.85)",a="rgba(38, 138, 66, 0.85)",c=["...1....","..111...","..121...",".11111..","1112111.","1.111.1.","..2.2..."],l=96,u=96;for(let d=0;d<c.length;d++)for(let m=0;m<c[d].length;m++){const _=c[d][m];_==="1"&&Ua(n,l+m*i,u+d*i,i,i,r),_==="2"&&Ua(n,l+m*i,u+d*i,i,i,o)}xt(n,[[l,u],[l+8*i,u],[l+8*i,u+7*i],[l,u+7*i],[l,u]],r,2.5);const h=["..1...1.","...1.1..","..11111.",".11.1.11","11111111","1.11111.","1.1...1.","...1.1.."],f=384;for(let d=0;d<h.length;d++)for(let m=0;m<h[d].length;m++)h[d][m]==="1"&&Ua(n,l+m*i,f+d*i,i,i,a);return xt(n,[[l,f],[l+8*i,f],[l+8*i,f+8*i],[l,f+8*i],[l,f]],a,2.5),xt(n,[[370,165],[415,162],[448,178]],o,3),xt(n,[[382,152],[368,165],[385,178]],o,3),t}function x1(){const[t,n]=Wo(680,512,"#f6f1e4"),i="rgba(26, 64, 158, 0.85)",r="rgba(196, 44, 38, 0.86)",o="rgba(40, 136, 66, 0.85)",a="rgba(34, 32, 30, 0.82)";xt(n,[[38,42],[640,36],[646,468],[34,474],[38,42]],a,4.2,5),xt(n,[[44,412],[125,340],[185,396],[260,318],[335,398],[418,365],[495,305],[575,392],[638,380]],o,4.5,4),xt(n,[[150,255],[270,252]],i,5,3),xt(n,[[360,215],[475,218]],i,5,3);const c=195,l=205;n.save(),n.strokeStyle=i,n.lineWidth=3.6,n.beginPath(),n.arc(c,l-14,13,0,Math.PI*2),n.stroke(),n.restore(),xt(n,[[c,l],[c,l+30]],i,3.6),xt(n,[[c-16,l+12],[c+22,l+8]],i,3.4),xt(n,[[c,l+30],[c-14,l+50]],i,3.4),xt(n,[[c,l+30],[c+15,l+48]],i,3.4);for(let f=0;f<6;f++){const d=236+f*38;xt(n,[[d,206-f*8],[d+24,202-f*8]],r,4,1.5)}const u=518,h=148;xt(n,[[u-70,h],[u-38,h-24],[u+38,h-24],[u+72,h],[u+34,h+24],[u-36,h+24],[u-70,h]],r,4.2,3),xt(n,[[u-32,h-22],[u-18,h-54],[u+18,h-54],[u+32,h-22]],i,3.5,2),xt(n,[[u-10,h-36],[u-4,h-32]],a,3.2),xt(n,[[u+10,h-36],[u+4,h-32]],a,3.2);for(const[f,d,m]of[[448,165,24],[118,118,18],[322,102,14]]){const p=[0,2,4,1,3,0].map(g=>{const S=-Math.PI/2+g*Math.PI*2/5;return[f+Math.cos(S)*m,d+Math.sin(S)*m]});xt(n,p,r,2.8,1.5)}for(let f=0;f<3;f++){const d=76+f*34,m=78;xt(n,[[d,m+12],[d-12,m-2],[d-6,m-12],[d,m-4],[d+6,m-12],[d+12,m-2],[d,m+12]],r,3.2,1)}return t}function _1(){const[t,n]=Wo(512,640,"#f0e9d7");n.strokeStyle="rgba(84, 138, 198, 0.28)",n.lineWidth=1.4;for(let a=72;a<620;a+=40)n.beginPath(),n.moveTo(0,a),n.lineTo(512,a),n.stroke();const i="rgba(26, 62, 152, 0.85)",r="rgba(194, 42, 38, 0.86)",o=[[160,440,170,120],[140,250,210,125],[44,110,140,105],[290,95,165,115]];for(const[a,c,l,u]of o)xt(n,[[a,c],[a+l,c],[a+l,c+u],[a,c+u],[a,c]],i,3.8,4);xt(n,[[232,440],[234,375]],i,3.5),xt(n,[[262,440],[260,375]],i,3.5),xt(n,[[165,250],[122,215]],i,3.5),xt(n,[[310,250],[348,210]],i,3.5),xt(n,[[348,126],[402,178]],r,5,2),xt(n,[[402,126],[348,178]],r,5,2);for(let a=0;a<12;a++){const c=a/11,l=245+Math.sin(c*3.1)*50+c*115,u=500-c*340;n.fillStyle=r,n.beginPath(),n.arc(l,u,4,0,Math.PI*2),n.fill()}return t}function v1(){const[t,n]=Wo(480,600,"#eee7d6"),i="rgba(26, 64, 158, 0.82)",r="rgba(196, 44, 38, 0.84)",o="rgba(38, 136, 66, 0.82)";return n.save(),n.strokeStyle=i,n.lineWidth=4,n.beginPath(),n.arc(175,195,58,0,Math.PI*2),n.stroke(),n.strokeStyle=r,n.beginPath(),n.ellipse(175,198,108,24,-.28,0,Math.PI*2),n.stroke(),n.restore(),xt(n,[[290,420],[360,275],[395,295],[326,440],[290,420]],i,4,3),xt(n,[[360,275],[405,245],[395,295]],r,4,2),xt(n,[[290,420],[254,445],[276,466],[308,434]],r,3.8,2),xt(n,[[326,440],[344,480],[312,474],[308,434]],r,3.8,2),xt(n,[[296,445],[268,502],[294,485],[274,535],[312,462]],r,3.8,3),xt(n,[[120,440],[185,435],[178,495],[116,498],[120,440]],o,3.4,3),t}const Po=[{label:"←",key:"_",w:1,col:0,row:0},{label:"1",shiftLabel:"!",petscii:"BLK",key:"1",aliases:["!"],w:1,col:1,row:0},{label:"2",shiftLabel:'"',petscii:"WHT",key:"2",aliases:['"',"@"],w:1,col:2,row:0},{label:"3",shiftLabel:"#",petscii:"RED",key:"3",aliases:["#"],w:1,col:3,row:0},{label:"4",shiftLabel:"$",petscii:"CYN",key:"4",aliases:["$"],w:1,col:4,row:0},{label:"5",shiftLabel:"%",petscii:"PUR",key:"5",aliases:["%"],w:1,col:5,row:0},{label:"6",shiftLabel:"&",petscii:"GRN",key:"6",aliases:["&"],w:1,col:6,row:0},{label:"7",shiftLabel:"'",petscii:"BLU",key:"7",aliases:["'"],w:1,col:7,row:0},{label:"8",shiftLabel:"(",petscii:"YEL",key:"8",aliases:["("],w:1,col:8,row:0},{label:"9",shiftLabel:")",petscii:"RVS",key:"9",aliases:[")"],w:1,col:9,row:0},{label:"0",petscii:"OFF",key:"0",w:1,col:10,row:0},{label:"+",petscii:"╋",key:"+",w:1,col:11,row:0},{label:"-",petscii:"━",key:"-",aliases:["_"],w:1,col:12,row:0},{label:"£",petscii:"◥",key:"\\",w:1,col:13,row:0},{label:"HOME",shiftLabel:"CLR",key:"Home",w:1,col:14,row:0},{label:"DEL",shiftLabel:"INST",key:"Backspace",w:1,col:15,row:0},{label:"f 1",shiftLabel:"f 2",key:"F1",w:1.48,col:16.65,row:0,fn:!0},{label:"CTRL",key:"Control",w:1.5,col:0,row:1},{label:"Q",petscii:"● ├",key:"q",w:1,col:1.5,row:1},{label:"W",petscii:"○ ┤",key:"w",w:1,col:2.5,row:1},{label:"E",petscii:"━ ┴",key:"e",w:1,col:3.5,row:1},{label:"R",petscii:"━ ┬",key:"r",w:1,col:4.5,row:1},{label:"T",petscii:"│ ▎",key:"t",w:1,col:5.5,row:1},{label:"Y",petscii:"│ ▍",key:"y",w:1,col:6.5,row:1},{label:"U",petscii:"╭ ▌",key:"u",w:1,col:7.5,row:1},{label:"I",petscii:"╮ ▄",key:"i",w:1,col:8.5,row:1},{label:"O",petscii:"┏ ▆",key:"o",w:1,col:9.5,row:1},{label:"P",petscii:"┓ ▇",key:"p",w:1,col:10.5,row:1},{label:"@",petscii:"━ ▀",key:"@",w:1,col:11.5,row:1},{label:"*",petscii:"─ ◣",key:"*",w:1,col:12.5,row:1},{label:"↑",petscii:"π",key:"^",w:1,col:13.5,row:1},{label:"RESTORE",key:"F9",w:1.5,col:14.5,row:1},{label:"f 3",shiftLabel:"f 4",key:"F3",w:1.48,col:16.65,row:1,fn:!0},{label:"STOP",shiftLabel:"RUN",key:"Escape",w:1,col:0,row:2},{label:"LOCK",shiftLabel:"SHIFT",key:"CapsLock",w:1,col:1,row:2},{label:"A",petscii:"♠ ┌",key:"a",w:1,col:2,row:2},{label:"S",petscii:"♥ ┐",key:"s",w:1,col:3,row:2},{label:"D",petscii:"━ ┘",key:"d",w:1,col:4,row:2},{label:"F",petscii:"━ └",key:"f",w:1,col:5,row:2},{label:"G",petscii:"│ ▌",key:"g",w:1,col:6,row:2},{label:"H",petscii:"│ ▐",key:"h",w:1,col:7,row:2},{label:"J",petscii:"╰ ▄",key:"j",w:1,col:8,row:2},{label:"K",petscii:"╯ ▀",key:"k",w:1,col:9,row:2},{label:"L",petscii:"┗ ▖",key:"l",w:1,col:10,row:2},{label:":",shiftLabel:"[",key:":",aliases:["["],w:1,col:11,row:2},{label:";",shiftLabel:"]",key:";",aliases:["]"],w:1,col:12,row:2},{label:"=",key:"=",w:1,col:13,row:2},{label:"RETURN",key:"Enter",w:2,col:14,row:2},{label:"f 5",shiftLabel:"f 6",key:"F5",w:1.48,col:16.65,row:2,fn:!0},{label:"C=",key:"Alt",w:1,col:0,row:3},{label:"SHIFT",key:"Shift",w:1.5,col:1,row:3},{label:"Z",petscii:"♦ ┼",key:"z",w:1,col:2.5,row:3},{label:"X",petscii:"♣ ╳",key:"x",w:1,col:3.5,row:3},{label:"C",petscii:"─ ▂",key:"c",w:1,col:4.5,row:3},{label:"V",petscii:"╳ ▎",key:"v",w:1,col:5.5,row:3},{label:"B",petscii:"│ ▍",key:"b",w:1,col:6.5,row:3},{label:"N",petscii:"╱ ▗",key:"n",w:1,col:7.5,row:3},{label:"M",petscii:"╲ ▘",key:"m",w:1,col:8.5,row:3},{label:",",shiftLabel:"<",key:",",aliases:["<"],w:1,col:9.5,row:3},{label:".",shiftLabel:">",key:".",aliases:[">"],w:1,col:10.5,row:3},{label:"/",shiftLabel:"?",key:"/",aliases:["?"],w:1,col:11.5,row:3},{label:"SHIFT",key:"Shift",w:1.5,col:12.5,row:3},{label:"CRSR",shiftLabel:"↕",key:"ArrowDown",aliases:["ArrowUp"],w:1,col:14,row:3},{label:"CRSR",shiftLabel:"↔",key:"ArrowRight",aliases:["ArrowLeft"],w:1,col:15,row:3},{label:"f 7",shiftLabel:"f 8",key:"F7",w:1.48,col:16.65,row:3,fn:!0},{label:"",key:" ",w:9,col:3.2,row:4}];class S1{root=new ct;interactiveMeshes=[];liveKeys=[];keyLookup=new Map;constructor(e){const t=b1(),n=new Ne({color:14077888,roughness:.5,metalness:.04,bumpMap:t,bumpScale:.0032}),i=new Ne({color:6446162,roughness:.78}),r=new Ne({color:1973274,roughness:.82,metalness:.05}),o=new Ne({color:1512982,roughness:.62,metalness:.06}),a=new Ne({color:2236446,roughness:.48,metalness:.08}),c=new Ne({color:2828325,roughness:.58,metalness:.05}),l=new Ne({color:10262930,roughness:.36,metalness:.78}),u=4.04,h=.52,f=2.18,d=1.62,m=d+f/2,_=new ct;_.position.set(0,0,m),this.root.add(_);const p=f/2,g=new Yi;g.moveTo(-p+.03,.02),g.lineTo(p-.04,.02),g.lineTo(p,.13),g.quadraticCurveTo(p,.21,p-.06,.22),g.lineTo(-p+.66,.43),g.lineTo(-p+.58,h-.02),g.lineTo(-p+.06,h),g.quadraticCurveTo(-p,h,-p,h-.07),g.lineTo(-p,.06),g.quadraticCurveTo(-p,.02,-p+.03,.02);const S=new Mn(g,{depth:u-.06,bevelEnabled:!0,bevelThickness:.028,bevelSize:.028,bevelSegments:4,curveSegments:10});S.center(),S.rotateY(-Math.PI/2),S.computeBoundingBox();const M=S.boundingBox.min.y,v=new ee(S,n);v.position.set(0,-M,0),v.castShadow=!0,v.receiveShadow=!0,_.add(v);const b=new ee(new Ye(u+.008,.012,f+.008),r);b.position.set(0,.095,0),_.add(b);const E=S.boundingBox.max.y-M,x=new ct,T=-p+.075,L=-p+.57,C=11,R=(L-T)/C,I=new ee(new Ye(u-.03,.016,L-T+.03),i);I.position.set(0,E-.004,(T+L)*.5),x.add(I);const O=new Ye(u-.02,.018,R*.56);for(let Fe=0;Fe<C;Fe++){const ze=T+(Fe+.5)*R,oe=new ee(O,n);oe.position.set(0,E+.005,ze),oe.rotation.x=.08,oe.receiveShadow=!0,x.add(oe)}_.add(x);const P=-p+.66,U=p-.06,G=E-.088,F=E-.302,Z=Math.atan2(G-F,U-P),H=new ct;H.position.set(0,(G+F)*.5+.004,(P+U)*.5),H.rotation.x=Z,_.add(H);const X=new Ne({color:12959408,roughness:.56,metalness:.04}),q=(Fe,ze,oe,mt)=>{const Ue=new ee(new Ye(oe,.032,mt),r);Ue.position.set(Fe,-.002,ze),H.add(Ue);const Re=.022,A=new ee(new Ye(oe+Re*2,.014,Re),X);A.position.set(Fe,.013,ze-mt/2-Re*.45),A.rotation.x=.45,H.add(A);const y=new ee(new Ye(oe+Re*2,.014,Re),X);y.position.set(Fe,.013,ze+mt/2+Re*.45),y.rotation.x=-.45,H.add(y);const z=new ee(new Ye(Re,.014,mt+Re*2),X);z.position.set(Fe-oe/2-Re*.45,.013,ze),z.rotation.z=-.45,H.add(z);const ce=new ee(new Ye(Re,.014,mt+Re*2),X);ce.position.set(Fe+oe/2+Re*.45,.013,ze),ce.rotation.z=.45,H.add(ce)};q(-.22,-.1,3.16,.83),q(-.26,.39,1.79,.22),q(1.62,-.1,.33,.83);const le=new ee(new Ct(.16,.045),new Ne({map:T1(),roughness:.55,transparent:!0}));le.rotation.x=-Math.PI/2,le.position.set(-1.89,.022,-.53),H.add(le);const we=new Ne({color:7344656,emissive:16722716,emissiveIntensity:2.8,roughness:.2}),V=new ee(new Ye(.042,.016,.018),we);V.position.set(-1.89,.022,-.48),H.add(V);const se=new zi(16722716,.04,.28,2);se.position.set(-1.89,.05,-.48),H.add(se);const ge=new ee(new Ye(.84,.014,.2),i);ge.position.set(1.3,.012,.41),H.add(ge);const De=new ee(new Ct(.81,.18),new Ne({map:w1(),roughness:.36,metalness:.42}));De.rotation.x=-Math.PI/2,De.position.set(1.3,.021,.41),H.add(De);const he=.194,Oe=.132,{keycapMat:ft,uvRectFor:Xe}=y1(he,Oe),je=-1.78,nt=-.4;for(let Fe=0;Fe<Po.length;Fe++){const ze=Po[Fe],oe=ze.w*he-.018,mt=he-.02,Ue=M1(oe,Oe,mt,Xe(Fe)),Re=new ee(Ue,ft),A=je+(ze.col+ze.w*.5)*he,y=nt+ze.row*(he+.006),z=.068;Re.position.set(A,z,y),Re.receiveShadow=!0,Re.userData.hit={kind:"key",key:ze.key},H.add(Re),this.interactiveMeshes.push(Re);const ce={mesh:Re,restY:z,press:0};this.liveKeys.push(ce);const ie=de=>{const me=de.length===1?de.toLowerCase():de,$=this.keyLookup.get(me)??[];$.push(ce),this.keyLookup.set(me,$)};ie(ze.key),ze.aliases&&ze.aliases.forEach(ie)}const ne=-p-.024,pe=new ee(new Ye(.76,.16,.05),r);pe.position.set(-1.26,.25,ne),_.add(pe);const ue=new ee(new Ye(.3,.16,.04),l);ue.position.set(-.56,.25,ne),_.add(ue);for(const Fe of[-.14,.34,.92,1.48]){const ze=new ee(new Ye(.22,.15,.04),r);ze.position.set(Fe,.24,ne),_.add(ze)}const Ee=Fe=>{const ze=new ee(new Ot(.054,.06,.22,16),a);ze.rotation.x=Math.PI/2,ze.position.set(Fe,.24,ne-.09),ze.castShadow=!0,_.add(ze);const oe=new ee(new Ot(.028,.042,.1,12),a);oe.rotation.x=Math.PI/2,oe.position.set(Fe,.24,ne-.22),_.add(oe)};Ee(-.14),Ee(.34);const xe=new ee(new Ye(.2,.1,.18),a);xe.position.set(u/2+.07,.2,-p+.56),xe.castShadow=!0,_.add(xe);const Ke=new ee(new Ot(.054,.06,.2,14),a);Ke.rotation.z=Math.PI/2,Ke.position.set(u/2+.08,.21,-p+.24),Ke.castShadow=!0,_.add(Ke);const Pe=(Fe,ze,oe)=>{const mt=new ul(Fe.map(Re=>new D(...Re))),Ue=new ee(new Bo(mt,52,ze,10,!1),oe);Ue.castShadow=!0,Ue.receiveShadow=!0,this.root.add(Ue)},Je=0;Pe([[Je-.14,.24,d-.22],[Je-.55,.11,d-.32],[-1.42,.028,1.24],[-1.98,.028,1.05],[-2.04,.028,.15],[-1.92,.032,-1.25],[-1.18,.12,-2.55],[-.38,1.15,-2.82],[-.39,1.38,-2.56]],.028,o),Pe([[-1.18,.12,-2.55],[-.42,.88,-2.86],[-.13,1.38,-2.56]],.02,o);for(const[Fe,ze]of[[-.39,14202934],[-.13,14736852]]){const oe=new ee(new Ot(.044,.044,.18,12),new Ne({color:ze,roughness:.42}));oe.rotation.x=Math.PI/2,oe.position.set(Fe,1.38,-2.62),this.root.add(oe)}Pe([[Je+.34,.24,d-.22],[Je+.72,.11,d-.3],[1.5,.028,1.26],[1.96,.028,.85],[1.98,.028,-.4],[2.06,.032,-1.85],[2.42,.16,-2.74],[2.78,.46,-2.48]],.03,c);const it=Je+u/2+.15,lt=d+.56;Pe([[it,.2,lt],[it+.22,.08,lt-.12],[2.56,.024,1.98],[2.88,.028,1.96],[e.x-.04,.055,e.z-.14],[e.x,e.y,e.z]],.022,o);const B=Je+u/2+.16,Rt=d+.24;Pe([[B,.21,Rt],[B+.4,.1,Rt-.16],[3.42,.034,1.72],[4.38,.034,1.15],[4.56,.034,-.45],[4.46,.034,-2.15],[4.2,.034,-3.15]],.034,o),Pe([[3.38,.44,-2.34],[3.62,.18,-2.74],[3.88,.032,-3.02],[4.05,.032,-3.28]],.032,o)}triggerKey(e){const t=e.length===1?e.toLowerCase():e,n=this.keyLookup.get(t);if(n)for(const i of n)i.press=1}update(e){for(let t=0;t<this.liveKeys.length;t++){const n=this.liveKeys[t];n.press>.001?(n.press=Math.max(0,n.press-e*8.5),n.mesh.position.y=n.restY-n.press*.052):n.mesh.position.y!==n.restY&&(n.mesh.position.y=n.restY)}}}function M1(s,e,t,n){const i=new Ye(s,e,t,6,4,6),r=i.attributes.position,o=i.attributes.uv,a=i.attributes.normal,c=s*.5,l=e*.5,u=t*.5,h=Math.min(.015,s*.09,t*.09),f=Math.min(.013,e*.11),d=Math.max(.75,1-.048/s),m=.72,_=new Array(r.count);for(let O=0;O<r.count;O++)a.getY(O)>.8?_[O]="top":a.getZ(O)>.8?_[O]="front":_[O]="other";const p=(O,P)=>{const U=Math.sign(O),G=Math.abs(O)/P;return G>.99?U*P:G>.6?U*(P-h):G>.25?U*(P-h)*.48:0},g=O=>{const P=(O+l)/e;return P>.99?l:P>.7?l-f:P>.45?l*.35:P>.2?-l*.32:-l},S=c*d,M=u*m,v=O=>O<0?0:O>1?1:O,[b,E,x,T]=n,L=x-b,C=T-E,R=80/192,I=E+C*R;for(let O=0;O<r.count;O++){let P=p(r.getX(O),c),U=g(r.getY(O)),G=p(r.getZ(O),u);const F=Math.abs(Math.abs(P)-c)<1e-4,Z=Math.abs(Math.abs(G)-u)<1e-4,H=Math.abs(U-l)<1e-4;F&&Z&&(P-=Math.sign(P)*h*.42,G-=Math.sign(G)*h*.42),H&&(F||Z)&&(F&&(P-=Math.sign(P)*h*.82),Z&&(G-=Math.sign(G)*h*.82),U-=f*.52);const X=Math.max(0,Math.min(1,(U+l)/e)),q=Math.pow(X,.85),le=1+(d-1)*q,we=1+(m-1)*q,V=-.014*q;let se=0;if(X>.94&&!F&&!Z){const Oe=P/Math.max(.01,c-h),ft=G/Math.max(.01,u-h);se=-(1-Oe*Oe)*.01*(1-Math.abs(ft)*.25)}const ge=P*le,De=U+se,he=G*we+V;if(r.setXYZ(O,ge,De,he),_[O]==="top"){const Oe=v(.5+ge/(2*S)),ft=v(.5-(he+.014)/(2*M));o.setXY(O,b+(.03+Oe*.94)*L,I+(.03+ft*.94)*(T-I))}else if(_[O]==="front"){const Oe=v(.5+ge/(2*c)),ft=v((De+l)/e);o.setXY(O,b+(.03+Oe*.94)*L,E+(.04+ft*.92)*(I-E))}else o.setXY(O,b+L*.025,T-C*.025)}return i.computeVertexNormals(),i}function y1(s,e){const u=document.createElement("canvas");u.width=1440,u.height=1536;const h=u.getContext("2d");h.fillStyle="#ded7c9",h.fillRect(0,0,1440,1536),h.textAlign="center",h.textBaseline="middle";const f=160/112,d=160/80,m=s-.02;for(let S=0;S<Po.length;S++){const M=Po[S],v=S%9*160,b=Math.floor(S/9)*192,E=M.fn?"#7f7a71":"#ded7c9",x=M.fn?"#716c63":"#d2cab9",T=M.fn?"#1d1b19":"#252321",L="#4b4741";h.fillStyle=E,h.fillRect(v,b,160,112);const C=h.createRadialGradient(v+160*.5,b+112*.42,6,v+160*.5,b+112*.5,160*.54);C.addColorStop(0,"rgba(255,255,255,0.12)"),C.addColorStop(.7,"rgba(0,0,0,0.0)"),C.addColorStop(1,"rgba(0,0,0,0.09)"),h.fillStyle=C,h.fillRect(v,b,160,112),h.fillStyle=x,h.fillRect(v,b+112,160,80);const R=M.w*s-.018,I=Math.max(.75,1-.048/R),P=R*I/(m*.72),U=f/P,G=v+160*.5;if(h.save(),h.translate(G,b),h.scale(U,1),h.fillStyle=T,M.shiftLabel&&M.label){const F=M.shiftLabel.length>2,Z=M.label.length>2,H=M.fn?22:F?19:26,X=M.fn?22:Z?20:32;h.font=`700 ${H}px "IBM Plex Sans", Inter, sans-serif`,h.fillText(M.shiftLabel,0,112*.3),h.font=`700 ${X}px "IBM Plex Sans", Inter, sans-serif`,h.fillText(M.label,0,112*.7)}else if(M.label){const F=M.label.length,Z=F>5?24:F>2?27:F===2?34:44;h.font=`700 ${Z}px "IBM Plex Sans", Inter, sans-serif`,h.fillText(M.label,0,112*.51)}if(h.restore(),M.petscii){const F=R/e,Z=d/F;h.save(),h.translate(G,b+112+80*.46),h.scale(Z,1),h.fillStyle=L;const H=/^[A-Z]{3}$/.test(M.petscii);h.font=H?'700 13px "IBM Plex Sans", Inter, sans-serif':'600 15px "IBM Plex Sans", Inter, sans-serif',h.fillText(M.petscii,0,0),h.restore()}}const _=new vt(u);return _.colorSpace=at,_.anisotropy=8,{keycapMat:new Ne({map:_,roughness:.42,metalness:.03}),uvRectFor:S=>{const M=S%9,v=Math.floor(S/9),b=M/9,E=(M+1)/9,x=1-v/8,T=1-(v+1)/8;return[b,T,E,x]}}}function T1(){const s=document.createElement("canvas");s.width=192,s.height=56;const e=s.getContext("2d");e.clearRect(0,0,192,56),e.fillStyle="#3a3632",e.font='700 28px "IBM Plex Sans", sans-serif',e.textAlign="left",e.textBaseline="middle",e.fillText("POWER",8,28);const t=new vt(s);return t.colorSpace=at,t}function w1(){const t=document.createElement("canvas");t.width=512,t.height=112;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,512,112);i.addColorStop(0,"#8d8880"),i.addColorStop(.5,"#9d988f"),i.addColorStop(1,"#7f7a72"),n.fillStyle=i,n.fillRect(0,0,512,112),n.strokeStyle="rgba(255,255,255,0.28)",n.lineWidth=3,n.strokeRect(4,4,504,104);const r=42,o=42;n.beginPath(),n.arc(r,o,18,.42,Math.PI*2-.42),n.arc(r,o,9.5,Math.PI*2-.56,.56,!0),n.closePath(),n.fillStyle="#f2efe8",n.fill(),n.fillRect(r+8,o-9,17,6.5),n.fillRect(r+8,o+2.5,17,6.5),n.fillStyle="#f4f1ea",n.font='700 44px "IBM Plex Sans", sans-serif',n.textBaseline="middle",n.fillText("commodore",76,44),n.font='700 46px "IBM Plex Sans", sans-serif',n.fillText("64",418,45),n.fillStyle="rgba(244, 241, 234, 0.88)",n.font="600 22px Inter, sans-serif",n.letterSpacing="3px",n.fillText("PERSONAL COMPUTER",78,86);const a=new vt(t);return a.colorSpace=at,a.anisotropy=8,a}function b1(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createImageData(128,128);for(let r=0;r<n.data.length;r+=4){const o=116+Math.floor(Math.random()*26);n.data[r]=o,n.data[r+1]=o,n.data[r+2]=o,n.data[r+3]=255}t.putImageData(n,0,0);const i=new vt(e);return i.wrapS=Ht,i.wrapT=Ht,i.repeat.set(5,3),i}class E1{root=new ct;interactiveMeshes=[];cableEntryWorld=new D;stickPivot=new ct;leftBtn;rightBtn;btnRestY;targetTiltX=0;targetTiltZ=0;tiltX=0;tiltZ=0;fireAnim=0;fireHeld=!1;pulseTimer=0;constructor(){const e=P1(),t=new Ne({color:1513240,roughness:.44,metalness:.08,bumpMap:e,bumpScale:.0028}),n=new Ne({color:723724,roughness:.85}),i=new Ne({color:1776412,roughness:.42,metalness:.14}),r=new cn({color:855310,roughness:.14,metalness:.08,clearcoat:1,clearcoatRoughness:.05}),o=new Ne({color:15352868,roughness:.28,metalness:.04}),a=new Ne({color:1250068,roughness:.78}),c=new ct;this.root.add(c);const l=1.08,u=1.1,h=.34,f=.068,d=Fa(l-f*2,u-f*2,.18),m=new Mn(d,{depth:h-f*2,bevelEnabled:!0,bevelThickness:f,bevelSize:f,bevelSegments:6,curveSegments:16});m.rotateX(-Math.PI/2),m.translate(0,f,0);const _=new ee(m,t);_.castShadow=!0,_.receiveShadow=!0,_.userData.hit={kind:"joystick"},c.add(_),this.interactiveMeshes.push(_);const p=Fa(l+.008,u+.008,.22),g=new Mn(p,{depth:.012,bevelEnabled:!1,curveSegments:14});g.rotateX(-Math.PI/2),g.translate(0,.135,0);const S=new ee(g,n);c.add(S);const M=.74,v=.76,b=Fa(M,v,.065),E=new fl(b,12);E.rotateX(-Math.PI/2);const x=E.attributes.position,T=E.attributes.uv;for(let se=0;se<x.count;se++)T.setXY(se,x.getX(se)/M+.5,.5-x.getZ(se)/v);const L=new Ne({map:A1(),roughness:.3,metalness:.74}),C=new ee(E,L);C.position.set(0,h+.003,.01),C.receiveShadow=!0,c.add(C);const R=[new ae(.285,0),new ae(.235,.022),new ae(.182,.068),new ae(.145,.125),new ae(.124,.155)],I=new ys(R,48),O=new Ne({map:R1(),roughness:.28,metalness:.72}),P=new ee(I,O);P.position.set(0,h+.002,.03),P.castShadow=!0,P.receiveShadow=!0,c.add(P);const U=new ee(new Fo(.105,.02,12,28),a);U.rotation.x=Math.PI/2,U.position.set(0,h+.155,.03),c.add(U);const G=new ee(new Ot(.102,.088,.04,24),n);G.position.set(0,h+.135,.03),c.add(G);const F=new Ot(.132,.14,.026,28),Z=[new ae(.112,0),new ae(.112,.036),new ae(.104,.056),new ae(.086,.064),new ae(.048,.057),new ae(0,.053)],H=new ys(Z,28);this.btnRestY=h+.004;const X=(se,ge)=>{const De=new ee(F,a);De.position.set(se,h+.008,ge),c.add(De);const he=new ee(H,o);return he.position.set(se,this.btnRestY,ge),he.castShadow=!0,he.receiveShadow=!0,he.userData.hit={kind:"joystick-fire"},c.add(he),this.interactiveMeshes.push(he),he};this.leftBtn=X(-.33,-.32),this.rightBtn=X(.33,-.32),this.stickPivot.position.set(0,h+.06,.03),c.add(this.stickPivot);const q=new ee(new Ot(.058,.062,.44,22),i);q.position.y=.24,q.castShadow=!0,q.userData.hit={kind:"joystick"},this.stickPivot.add(q);const le=new ee(new vr(.215,36,28),r);le.position.y=.62,le.castShadow=!0,le.receiveShadow=!0,le.userData.hit={kind:"joystick"},this.stickPivot.add(le),this.interactiveMeshes.push(q,le);const we=new ee(new Ot(.034,.044,.14,14),a);we.rotation.x=Math.PI/2,we.position.set(0,.15,-u/2-.04),c.add(we);const V=new ee(new Ct(.26,.065),new Ne({map:C1(),roughness:.48,metalness:.1,transparent:!0}));V.rotation.x=-Math.PI/2,V.position.set(0,h+.004,.455),c.add(V),this.root.position.set(3.04,0,2.74),this.root.rotation.y=-.22,this.root.updateMatrixWorld(!0),this.cableEntryWorld.set(0,.15,-u/2-.1).applyMatrix4(this.root.matrixWorld)}nudge(e,t,n=.16){this.targetTiltZ=-e*.34,this.targetTiltX=t*.34,this.pulseTimer=n}pressFire(e=!1){this.fireAnim=1,this.fireHeld=e}releaseFire(){this.fireHeld=!1}update(e){this.pulseTimer>0&&(this.pulseTimer-=e,this.pulseTimer<=0&&(this.targetTiltX=0,this.targetTiltZ=0));const t=Math.min(1,e*22);this.tiltX+=(this.targetTiltX-this.tiltX)*t,this.tiltZ+=(this.targetTiltZ-this.tiltZ)*t,this.stickPivot.rotation.x=this.tiltX,this.stickPivot.rotation.z=this.tiltZ,this.fireHeld||(this.fireAnim=Math.max(0,this.fireAnim-e*9.5));const n=this.btnRestY-this.fireAnim*.026;this.leftBtn.position.y=n,this.rightBtn.position.y=n}}function Fa(s,e,t){const n=new Yi,i=s/2,r=e/2;return n.moveTo(-i+t,-r),n.lineTo(i-t,-r),n.quadraticCurveTo(i,-r,i,-r+t),n.lineTo(i,r-t),n.quadraticCurveTo(i,r,i-t,r),n.lineTo(-i+t,r),n.quadraticCurveTo(-i,r,-i,r-t),n.lineTo(-i,-r+t),n.quadraticCurveTo(-i,-r,-i+t,-r),n}function Vf(s,e,t){const n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,"#c8c6c1"),n.addColorStop(.35,"#dfddd8"),n.addColorStop(.65,"#b8b6b0"),n.addColorStop(1,"#cfcdc7"),s.fillStyle=n,s.fillRect(0,0,e,t);for(let i=0;i<t;i+=2){const r=.02+Math.random()*.045;s.fillStyle=Math.random()>.5?`rgba(255,255,255,${r})`:`rgba(30,30,32,${r})`,s.fillRect(0,i,e,1)}}function A1(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");Vf(t,512,512),t.strokeStyle="rgba(40, 40, 42, 0.35)",t.lineWidth=6,t.strokeRect(3,3,506,506);const n=r=>{t.save(),t.translate(512/2,512*.52);for(let o=0;o<4;o++){const a=r<0?-Math.PI*.8+o*.08:-Math.PI*.2-o*.08,c=192;t.save(),t.rotate(a),t.fillStyle="#19191a",t.fillRect(c-8,-11,16,22),t.fillStyle="#e84324",t.fillRect(c-4,-8,8,16),t.restore()}t.restore()};n(-1),n(1),t.fillStyle="#181819",t.textAlign="center",t.textBaseline="middle",t.font='italic 700 44px "IBM Plex Sans", sans-serif',t.fillText("TAC-2",512/2,446),t.fillStyle="#363638",t.font="italic 600 17px Inter, sans-serif",t.fillText("Totally Accurate Controller",512/2,480);const i=new vt(e);return i.colorSpace=at,i.anisotropy=8,i}function R1(){const t=document.createElement("canvas");t.width=1024,t.height=256;const n=t.getContext("2d");Vf(n,1024,256),n.fillStyle="rgba(20, 20, 22, 0.14)",n.fillRect(0,0,1024,28);const i=8,r=1024/i;for(let a=0;a<i;a++){const c=(a+.5)*r;n.fillStyle="#161617",n.fillRect(c-38,256*.58,76,32),n.fillRect(c-18,256*.24,36,256*.48),n.fillStyle="#ea4222",n.fillRect(c-7,256*.26,14,256*.42),n.fillRect(c-14,256*.64,28,10)}const o=new vt(t);return o.colorSpace=at,o.wrapS=Ht,o.anisotropy=8,o}function C1(){const s=document.createElement("canvas");s.width=256,s.height=64;const e=s.getContext("2d");e.clearRect(0,0,256,64),e.strokeStyle="rgba(255,255,255,0.14)",e.lineWidth=3,e.beginPath(),e.roundRect(6,8,244,48,22),e.stroke(),e.fillStyle="rgba(255,255,255,0.22)",e.font='700 26px "IBM Plex Sans", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("SUNCOM",128,34);const t=new vt(s);return t.colorSpace=at,t}function P1(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createImageData(128,128);for(let r=0;r<n.data.length;r+=4){const o=105+Math.floor(Math.random()*44);n.data[r]=o,n.data[r+1]=o,n.data[r+2]=o,n.data[r+3]=255}t.putImageData(n,0,0);const i=new vt(e);return i.wrapS=Ht,i.wrapT=Ht,i.repeat.set(6,6),i}const _u=[[7399679,16777215],[16769370,16751164],[16735842,16761713],[7664268,14221206],[13796607,8832511]],hs=1400;class L1{root=new ct;rockets=[];sparks=[];flashes=[];pendingLaunches=[];positions=new Float32Array(hs*3);colors=new Float32Array(hs*3);trailPositions=new Float32Array(hs*6);trailColors=new Float32Array(hs*6);geo;trailGeo;points;burstLight;onPop;constructor(e){this.onPop=e,this.geo=new Ut,this.geo.setAttribute("position",new nn(this.positions,3)),this.geo.setAttribute("color",new nn(this.colors,3)),this.geo.setDrawRange(0,0);const t=new al({size:.24,map:I1(),vertexColors:!0,transparent:!0,opacity:.98,blending:mo,depthWrite:!1,sizeAttenuation:!0});this.points=new of(this.geo,t),this.points.frustumCulled=!1,this.root.add(this.points),this.trailGeo=new Ut,this.trailGeo.setAttribute("position",new nn(this.trailPositions,3)),this.trailGeo.setAttribute("color",new nn(this.trailColors,3)),this.trailGeo.setDrawRange(0,0);const n=new rl({vertexColors:!0,transparent:!0,opacity:.85,blending:mo,depthWrite:!1}),i=new rf(this.trailGeo,n);i.frustumCulled=!1,this.root.add(i),this.burstLight=new zi(16777215,0,14,1.5),this.burstLight.position.set(0,3.6,-2),this.root.add(this.burstLight)}celebrate(){const e=[{delay:0,x:-2.45,targetY:3.15},{delay:.24,x:2.35,targetY:2.85},{delay:.56,x:-.25,targetY:3.85},{delay:.92,x:-3.05,targetY:2.55},{delay:1.24,x:2.75,targetY:3.25},{delay:1.68,x:.85,targetY:3.92},{delay:2.08,x:-2.15,targetY:3.45},{delay:2.42,x:2.1,targetY:2.7},{delay:2.82,x:-.95,targetY:3.88}];for(const t of e)this.pendingLaunches.push(t)}launchRocket(e,t){const n=_u[Math.floor(Math.random()*_u.length)],i=-2.25+(Math.random()-.5)*.65,r=1.05,o=.4+Math.random()*.14,a=(t-r+.5*2.4*o*o)/o;this.rockets.push({pos:new D(e,r,i),vel:new D((Math.random()-.5)*.45,a,(Math.random()-.5)*.18),fuse:o,color:new $e(n[0]),accent:new $e(n[1])})}detonate(e){this.onPop?.(),this.flashes.push({pos:e.pos.clone(),color:e.color.clone(),life:.34,maxLife:.34});const t=95;for(let n=0;n<t&&!(this.sparks.length>=hs);n++){const i=Math.random(),r=Math.random(),o=i*Math.PI*2,a=Math.acos(2*r-1),c=(1.35+Math.random()*1.45)*(n%7===0?.55:1),l=Math.sin(a)*Math.cos(o)*c,u=Math.cos(a)*c*.92+.35,h=Math.sin(a)*Math.sin(o)*c*.45,f=Math.random()<.32;this.sparks.push({pos:e.pos.clone(),vel:new D(l,u,h),color:(f?e.accent:e.color).clone(),age:0,life:1.05+Math.random()*.65,size:1,twinkle:Math.random()*Math.PI*2})}}update(e){if(this.pendingLaunches.length===0&&this.rockets.length===0&&this.sparks.length===0&&this.flashes.length===0){this.burstLight.intensity>0&&(this.burstLight.intensity=0);return}for(let i=this.pendingLaunches.length-1;i>=0;i--)this.pendingLaunches[i].delay-=e,this.pendingLaunches[i].delay<=0&&(this.launchRocket(this.pendingLaunches[i].x,this.pendingLaunches[i].targetY),this.pendingLaunches.splice(i,1));for(let i=this.rockets.length-1;i>=0;i--){const r=this.rockets[i];r.pos.addScaledVector(r.vel,e),r.vel.y-=2.4*e,r.fuse-=e,this.sparks.length<hs&&this.sparks.push({pos:r.pos.clone(),vel:new D((Math.random()-.5)*.35,-.4-Math.random()*.4,(Math.random()-.5)*.25),color:new $e(16768928),age:0,life:.28+Math.random()*.14,size:.7,twinkle:0}),(r.fuse<=0||r.pos.y>4.65)&&(this.detonate(r),this.rockets.splice(i,1))}const t=Math.pow(.26,e);let n=0;for(let i=this.sparks.length-1;i>=0;i--){const r=this.sparks[i];if(r.age+=e,r.age>=r.life){this.sparks.splice(i,1);continue}r.vel.multiplyScalar(t),r.vel.y-=1.45*e,r.pos.addScaledVector(r.vel,e),r.pos.z<-3.32&&(r.pos.z=-3.32);const o=r.age/r.life,a=Math.pow(1-o,1.35),c=o>.55?.65+.35*Math.sin(r.age*36+r.twinkle):1,l=a*c*1.45,u=n*3;this.positions[u]=r.pos.x,this.positions[u+1]=r.pos.y,this.positions[u+2]=r.pos.z;const h=Math.min(1,r.color.r*l),f=Math.min(1,r.color.g*l),d=Math.min(1,r.color.b*l);this.colors[u]=h,this.colors[u+1]=f,this.colors[u+2]=d;const m=n*6,_=.085;this.trailPositions[m]=r.pos.x,this.trailPositions[m+1]=r.pos.y,this.trailPositions[m+2]=r.pos.z,this.trailPositions[m+3]=r.pos.x-r.vel.x*_,this.trailPositions[m+4]=r.pos.y-r.vel.y*_,this.trailPositions[m+5]=r.pos.z-r.vel.z*_,this.trailColors[m]=h,this.trailColors[m+1]=f,this.trailColors[m+2]=d,this.trailColors[m+3]=h*.12,this.trailColors[m+4]=f*.12,this.trailColors[m+5]=d*.12,n++}if(this.geo.setDrawRange(0,n),this.trailGeo.setDrawRange(0,n*2),n>0){const i=this.geo.attributes.position,r=this.geo.attributes.color,o=this.trailGeo.attributes.position,a=this.trailGeo.attributes.color;i.clearUpdateRanges(),i.addUpdateRange(0,n*3),r.clearUpdateRanges(),r.addUpdateRange(0,n*3),o.clearUpdateRanges(),o.addUpdateRange(0,n*6),a.clearUpdateRanges(),a.addUpdateRange(0,n*6),i.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.needsUpdate=!0}if(this.flashes.length>0){let i=null;for(let r=this.flashes.length-1;r>=0;r--){const o=this.flashes[r];o.life-=e,o.life<=0?this.flashes.splice(r,1):(!i||o.life/o.maxLife>i.life/i.maxLife)&&(i=o)}if(i){const r=Math.pow(i.life/i.maxLife,1.6)*8.5;this.burstLight.position.copy(i.pos),this.burstLight.color.copy(i.color),this.burstLight.intensity=r}else this.burstLight.intensity=0}else this.burstLight.intensity>0&&(this.burstLight.intensity=0)}}function I1(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.22,"rgba(255, 252, 235, 0.92)"),n.addColorStop(.55,"rgba(255, 235, 190, 0.30)"),n.addColorStop(1,"rgba(255, 220, 150, 0.0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new vt(e);return i.colorSpace=at,i}class N1{target;postScene;postCam;mat;constructor(e,t,n){this.target=new Ln(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n)),{type:In,samples:4,depthBuffer:!0}),this.postScene=new ef,this.postCam=new Ho(-1,1,1,-1,0,1),this.mat=new ci({uniforms:{tDiffuse:{value:this.target.texture},uTime:{value:0},uExposure:{value:.98}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform float uExposure;
        varying vec2 vUv;

        // Filmic ACES approximation (Narkowicz 2015)
        vec3 acesFilm(vec3 x) {
          const float a = 2.51;
          const float b = 0.03;
          const float c = 2.43;
          const float d = 0.59;
          const float e = 0.14;
          return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
        }

        // Fast hash for subtle organic 35mm grain
        float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }

        void main() {
          vec3 hdr = texture2D(tDiffuse, vUv).rgb;

          // 1. Exposure + filmic ACES tone map (from linear HDR)
          vec3 col = acesFilm(hdr * uExposure);

          // Convert to sRGB working space for gentle analog print grading
          col = pow(max(col, vec3(0.0)), vec3(1.0 / 2.2));

          float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));

          // 2. 1984 Swedish 35mm split-toning:
          //    - Slightly lifted cool-slate shadows (keeps dark desk wood & crevices rich)
          //    - Warm creamy amber-gold midtones & highlights
          float shadowMask = pow(1.0 - clamp(luma, 0.0, 1.0), 2.4);
          float highMask = smoothstep(0.45, 1.0, luma);
          float midMask = 1.0 - abs(luma * 2.0 - 1.0);

          col += shadowMask * vec3(0.010, 0.016, 0.024);     // cool film-base shadow toe
          col *= mix(vec3(1.0), vec3(1.022, 1.006, 0.976), midMask * 0.75); // cozy analog mid warmth
          col *= mix(vec3(1.0), vec3(1.032, 1.004, 0.945), highMask * 0.72); // creamy tungsten roll-off

          // 3. Gentle analog S-curve contrast (preserves crisp C64 CRT blue legibility)
          vec3 sCurve = col * col * (3.0 - 2.0 * col);
          col = mix(col, sCurve, 0.16);

          // Slight saturation lift (+6%) for rich burnt-orange enamel, Colodore blue & TAC-2 vermilion
          float gLuma = dot(col, vec3(0.2126, 0.7152, 0.0722));
          col = mix(vec3(gLuma), col, 1.06);

          // 4. Soft 35mm lens optical vignette framing the centered CRT
          vec2 d = (vUv - 0.5) * vec2(1.06, 1.0);
          float vig = 1.0 - dot(d, d) * 0.42;
          col *= clamp(vig, 0.68, 1.0);

          // 5. Ultra-fine luma-weighted 24fps 35mm film grain (never noisy on text)
          float frameStep = floor(uTime * 24.0);
          float n = hash12(gl_FragCoord.xy + vec2(frameStep * 17.3, frameStep * 31.7)) - 0.5;
          float grainWeight = (1.0 - highMask * 0.65) * 0.022;
          col += n * grainWeight;

          gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
        }
      `,depthTest:!1,depthWrite:!1});const i=new ee(new Ct(2,2),this.mat);this.postScene.add(i)}resize(e,t,n){this.target.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n)))}render(e,t,n,i){this.mat.uniforms.uTime.value=i,e.setRenderTarget(this.target),e.render(t,n),e.setRenderTarget(null),e.render(this.postScene,this.postCam)}}function D1(){const s=new ct,e=U1(),t=new Ne({map:e.color,roughnessMap:e.roughness,bumpMap:e.bump,bumpScale:.012,roughness:.92,metalness:.04}),n=new ee(new Ct(18,10),t);n.rotation.x=-Math.PI/2,n.position.set(0,0,1.5),n.receiveShadow=!0,s.add(n);const i=new ee(new Ct(48,32),new Ne({color:1446415,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.set(0,-.005,4),s.add(i);const r=F1(),o=new ee(new Ct(5.6,5.4),new hn({map:r,transparent:!0,depthWrite:!1,opacity:.78}));o.rotation.x=-Math.PI/2,o.position.set(0,.004,-.35),s.add(o);const a=new ee(new Ct(3.3,4.4),new hn({map:r,transparent:!0,depthWrite:!1,opacity:.72}));a.rotation.x=-Math.PI/2,a.position.set(3.05,.004,-.82),a.rotation.z=.18,s.add(a);const c=-3.45,{map:l,bump:u}=O1(),h=new Ne({map:l,bumpMap:u,bumpScale:.012,roughness:.92,metalness:0,side:Wn}),f=new ee(new Ct(30,16),h);f.position.set(0,6.2,c),f.receiveShadow=!0,s.add(f);const d=new Ne({color:12367530,roughness:.62,metalness:.03,side:Wn}),m=new ee(new Ye(30,.34,.08),d);m.position.set(0,.17,c+.04),m.receiveShadow=!0,s.add(m);const _=new ee(new Ye(30,.055,.11),d);return _.position.set(0,.35,c+.055),s.add(_),s}function O1(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#aba69c",t.fillRect(0,0,512,512);for(let d=0;d<14e3;d++){const m=Math.random()*512,_=Math.random()*512,p=Math.random()>.48;t.fillStyle=p?"rgba(248, 244, 234, 0.06)":"rgba(52, 48, 42, 0.055)",t.fillRect(m,_,2,2)}t.fillStyle="rgba(40, 36, 30, 0.08)",t.fillRect(0,0,2,512),t.fillStyle="rgba(255, 252, 245, 0.045)",t.fillRect(2,0,1,512);const n=(d,m,_)=>{t.save(),t.translate(d,m),t.scale(_,1),t.rotate(-.18),t.strokeStyle="#5c7286",t.lineWidth=2,t.lineCap="round",t.beginPath(),t.moveTo(0,8),t.quadraticCurveTo(1,2,0,-4),t.stroke();const p=[[0,-8,.02,3,6.2],[-5.2,-2.5,-.78,2.7,5.5],[5.4,-1.8,.72,2.6,5.3]];for(const[g,S,M,v,b]of p)t.save(),t.translate(g,S),t.rotate(M),t.fillStyle="#586e82",t.beginPath(),t.ellipse(0,0,v,b,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(154, 176, 196, 0.32)",t.beginPath(),t.ellipse(-.4,-.8,v*.45,b*.45,0,0,Math.PI*2),t.fill(),t.restore();t.restore()},i=6,r=6,o=512/i,a=512/r;for(let d=0;d<r;d++){const m=d%2*(o*.5),_=d%2===0?1:-1;for(let p=-1;p<=i;p++){const g=p*o+m+o*.25,S=d*a+a*.5;for(const M of[-512,0,512]){const v=g+M;v>=-24&&v<=536&&n(v,S,_)}}}const c=new vt(e);c.colorSpace=at,c.wrapS=Ht,c.wrapT=Ht,c.repeat.set(9.5,5),c.anisotropy=8;const l=document.createElement("canvas");l.width=128,l.height=128;const u=l.getContext("2d"),h=u.createImageData(128,128);for(let d=0;d<h.data.length;d+=4){const m=112+Math.floor(Math.random()*32);h.data[d]=m,h.data[d+1]=m,h.data[d+2]=m,h.data[d+3]=255}u.putImageData(h,0,0);const f=new vt(l);return f.wrapS=Ht,f.wrapT=Ht,f.repeat.set(24,12),{map:c,bump:f}}function U1(){const t=document.createElement("canvas"),n=document.createElement("canvas"),i=document.createElement("canvas");t.width=n.width=i.width=2048,t.height=n.height=i.height=1152;const r=t.getContext("2d"),o=n.getContext("2d"),a=i.getContext("2d");let c=19841122;const l=()=>(c^=c<<13,c^=c>>>17,c^=c<<5,(c>>>0&65535)/65536),u=(R,I)=>[(R+9)/18*2048,(I+3.5)/10*1152];r.fillStyle="#332820",r.fillRect(0,0,2048,1152),o.fillStyle="rgb(138,138,138)",o.fillRect(0,0,2048,1152),a.fillStyle="rgb(128,128,128)",a.fillRect(0,0,2048,1152);for(let R=0;R<1152;R++){const I=Math.sin(R*.055)*9+Math.sin(R*.17+1.1)*5+Math.sin(R*.43)*2.5+(l()-.5)*6,O=Math.max(24,Math.min(78,Math.round(54+I))),P=Math.max(18,Math.min(64,Math.round(42+I*.82))),U=Math.max(14,Math.min(52,Math.round(32+I*.68)));r.fillStyle=`rgb(${O},${P},${U})`,r.fillRect(0,R,2048,1);const G=Math.max(105,Math.min(185,Math.round(142-I*1.4)));o.fillStyle=`rgb(${G},${G},${G})`,o.fillRect(0,R,2048,1);const F=Math.max(108,Math.min(148,Math.round(128+I*.8)));a.fillStyle=`rgb(${F},${F},${F})`,a.fillRect(0,R,2048,1)}for(const R of[-1.2,1.4,4.1]){const[,I]=u(0,R);r.fillStyle="rgba(14, 10, 8, 0.35)",r.fillRect(0,I,2048,2),a.fillStyle="rgb(76,76,76)",a.fillRect(0,I,2048,2)}const[h,f]=u(0,2.7),d=r.createRadialGradient(h,f,40,h,f,440);d.addColorStop(0,"rgba(128, 98, 70, 0.14)"),d.addColorStop(1,"rgba(128, 98, 70, 0)"),r.fillStyle=d,r.fillRect(h-440,f-440,880,880);const m=o.createRadialGradient(h,f,30,h,f,420);m.addColorStop(0,"rgba(84, 84, 84, 0.55)"),m.addColorStop(1,"rgba(84, 84, 84, 0)"),o.fillStyle=m,o.fillRect(h-420,f-420,840,840);const _=(R,I,O,P,U,G)=>{const F=R+Math.cos(O)*P,Z=I+Math.sin(O)*P,H=(R+F)*.5+(l()-.5)*(P*.08),X=(I+Z)*.5+(l()-.5)*(P*.08);r.save(),r.strokeStyle=`rgba(148, 120, 90, ${G.toFixed(3)})`,r.lineWidth=U,r.lineCap="round",r.beginPath(),r.moveTo(R,I),r.quadraticCurveTo(H,X,F,Z),r.stroke(),r.restore(),o.save(),o.strokeStyle=`rgba(205, 205, 205, ${(G*2.2).toFixed(3)})`,o.lineWidth=U+.4,o.beginPath(),o.moveTo(R,I),o.quadraticCurveTo(H,X,F,Z),o.stroke(),o.restore(),a.save(),a.strokeStyle="rgba(72, 72, 72, 0.55)",a.lineWidth=U,a.beginPath(),a.moveTo(R,I),a.quadraticCurveTo(H,X,F,Z),a.stroke(),a.restore()},p=[[-2.85,1.75,.22,118,1.3,.14],[-1.45,3.35,-.41,64,.9,.11],[1.65,1.85,.78,86,1.1,.12],[2.75,3.1,-.15,142,1.5,.13],[-3.6,2.7,1.12,48,.85,.1]];for(const[R,I,O,P,U,G]of p){const[F,Z]=u(R,I);_(F,Z,O,P,U,G)}const g=(R,I,O,P)=>{const[U,G]=u(R,I),F=U+Math.cos(O)*P,Z=G+Math.sin(O)*P;r.save(),r.strokeStyle="rgba(18, 12, 8, 0.34)",r.lineWidth=.75,r.beginPath(),r.moveTo(U,G),r.lineTo(F,Z),r.stroke(),r.strokeStyle="rgba(155, 128, 96, 0.10)",r.lineWidth=.6,r.beginPath(),r.moveTo(U+.6,G+.6),r.lineTo(F+.6,Z+.6),r.stroke(),r.restore(),o.save(),o.strokeStyle="rgba(195, 195, 195, 0.45)",o.lineWidth=.9,o.beginPath(),o.moveTo(U,G),o.lineTo(F,Z),o.stroke(),o.restore(),a.save(),a.strokeStyle="rgb(44, 44, 44)",a.lineWidth=.85,a.beginPath(),a.moveTo(U,G),a.lineTo(F,Z),a.stroke(),a.restore()},S=[[-2.05,2.72,.04,155],[-2.02,2.8,.05,128],[-1.92,2.66,.02,92],[-1.68,2.55,1.54,118],[-1.62,2.59,1.56,84],[1.38,2.22,-.08,134],[1.42,2.29,-.06,98],[1.72,2.15,.62,74],[1.82,2.86,.03,146]];for(const[R,I,O,P]of S)g(R,I,O,P);for(const[R,I,O]of[[2.9,1.3,120]]){const[P,U]=u(R,I);r.save(),r.strokeStyle="rgba(148, 120, 88, 0.11)",r.lineWidth=1.6,r.beginPath(),r.arc(P,U,O,.3,1.45),r.stroke(),r.restore()}const M=(R,I,O,P,U,G)=>{const[F,Z]=u(R,I);for(const X of[r,o,a])X.save(),X.translate(F,Z),X.rotate(O);const H=X=>{const q=P/2,le=U/2,we=5;X.beginPath(),X.moveTo(-q,-le),X.lineTo(q,-le);for(let V=0;V<we;V++){const se=-le+(V+.5)/we*U,ge=-le+(V+1)/we*U;X.lineTo(q+4.5,se),X.lineTo(q,ge)}X.lineTo(-q,le);for(let V=we-1;V>=0;V--){const se=-le+(V+.5)/we*U,ge=-le+V/we*U;X.lineTo(-q-4.5,se),X.lineTo(-q,ge)}X.closePath()};if(G)H(r),r.fillStyle="rgba(210, 196, 158, 0.13)",r.fill(),r.strokeStyle="rgba(226, 214, 180, 0.17)",r.lineWidth=1.1,r.stroke(),r.fillStyle="rgba(238, 230, 206, 0.10)",r.fillRect(-P*.48,-U*.44,P*.14,U*.88),H(o),o.fillStyle="rgb(62, 62, 62)",o.fill(),H(a),a.fillStyle="rgb(140, 140, 140)",a.fill();else{H(r),r.fillStyle="rgba(176, 162, 136, 0.065)",r.fill(),r.strokeStyle="rgba(190, 176, 150, 0.12)",r.lineWidth=1.4,r.stroke();for(let X=0;X<32;X++){const q=(l()-.5)*P*.96,le=(l()-.5)*U*.94;r.fillStyle=l()>.4?"rgba(194, 182, 158, 0.12)":"rgba(24, 18, 12, 0.15)",r.fillRect(q,le,1.8,1.4)}H(o),o.fillStyle="rgb(202, 202, 202)",o.fill(),H(a),a.fillStyle="rgb(133, 133, 133)",a.fill()}for(const X of[r,o,a])X.restore()};M(-2.45,2.55,-.34,114,28,!0),M(-1.78,1.9,.52,96,26,!1),M(2.12,2.48,-.58,108,26,!1);const[v,b]=u(1.55,2.92);r.save(),r.strokeStyle="rgba(32, 74, 168, 0.48)",r.lineWidth=2,r.lineCap="round",r.beginPath();for(let R=0;R<16;R++){const I=v+R*3.4,O=b+(R%2===0?-9:9)+(l()-.5)*3;R===0?r.moveTo(I,O):r.lineTo(I,O)}r.stroke(),r.restore();const[E,x]=u(-3.15,2.95);r.save(),r.strokeStyle="rgba(176, 152, 122, 0.14)",r.lineWidth=5.5,r.beginPath(),r.arc(E,x,52,.2,Math.PI*1.85),r.stroke(),r.restore(),o.save(),o.strokeStyle="rgba(205, 205, 205, 0.55)",o.lineWidth=6.5,o.beginPath(),o.arc(E,x,52,.2,Math.PI*1.85),o.stroke(),o.restore();const T=new vt(t);T.colorSpace=at,T.anisotropy=8;const L=new vt(n);L.anisotropy=8;const C=new vt(i);return C.anisotropy=8,{color:T,roughness:L,bump:C}}function F1(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,256*.14,256/2,256/2,256*.48);return n.addColorStop(0,"rgba(0, 0, 0, 0.92)"),n.addColorStop(.55,"rgba(0, 0, 0, 0.52)"),n.addColorStop(1,"rgba(0, 0, 0, 0.0)"),t.fillStyle=n,t.fillRect(0,0,256,256),new vt(e)}class B1{ctx=null;noiseBuf=null;humGain=null;sidOsc=null;sidGain=null;sidRegs=new Uint8Array(25);enabled=!0;powered=!0;ensureContext(){if(!this.enabled)return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.noiseBuf=this.makeNoiseBuffer(this.ctx),this.setupHum(this.ctx)}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}makeNoiseBuffer(e){const t=Math.floor(e.sampleRate*.25),n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<t;r++)i[r]=Math.random()*2-1;return n}setupHum(e){const t=e.createOscillator();t.type="sine",t.frequency.value=100;const n=e.createOscillator();n.type="triangle",n.frequency.value=50;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=160;const r=e.createGain();r.gain.value=this.powered&&this.enabled?.008:0,t.connect(i),n.connect(i),i.connect(r),r.connect(e.destination),t.start(),n.start(),this.humGain=r}setEnabled(e){if(this.enabled=e,this.ctx&&this.humGain){const t=this.ctx.currentTime;this.humGain.gain.cancelScheduledValues(t),this.humGain.gain.setTargetAtTime(e&&this.powered?.008:0,t,.04)}if(!e&&this.sidGain&&this.ctx){const t=this.ctx.currentTime;this.sidGain.gain.cancelScheduledValues(t),this.sidGain.gain.setTargetAtTime(0,t,.02)}this.ctx&&(!e&&this.ctx.state==="running"?this.ctx.suspend().catch(()=>{}):e&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}setPageVisible(e){this.ctx&&(!e&&this.ctx.state==="running"?this.ctx.suspend().catch(()=>{}):e&&this.enabled&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}setPowered(e){this.powered=e;const t=this.ensureContext();if(!t)return;const n=t.currentTime;if(this.playSwitchClick(t,n,e?1:.85),e){const i=t.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(58,n),i.frequency.exponentialRampToValueAtTime(50,n+.55);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(240,n),r.frequency.exponentialRampToValueAtTime(75,n+.55);const o=t.createGain();if(o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(.11,n+.02),o.gain.exponentialRampToValueAtTime(1e-4,n+.6),i.connect(r),r.connect(o),o.connect(t.destination),i.start(n),i.stop(n+.65),this.noiseBuf){const a=t.createBufferSource();a.buffer=this.noiseBuf;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=4200,c.Q.value=1.8;const l=t.createGain();l.gain.setValueAtTime(1e-4,n+.04),l.gain.linearRampToValueAtTime(.025,n+.08),l.gain.exponentialRampToValueAtTime(1e-4,n+.28),a.connect(c),c.connect(l),l.connect(t.destination),a.start(n+.04)}this.humGain&&this.humGain.gain.setTargetAtTime(.008,n+.25,.2)}else{const i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(6200,n),i.frequency.exponentialRampToValueAtTime(1400,n+.14);const r=t.createGain();r.gain.setValueAtTime(.018,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.16),i.connect(r),r.connect(t.destination),i.start(n),i.stop(n+.18),this.humGain&&this.humGain.gain.setTargetAtTime(0,n,.04),this.sidGain&&this.sidGain.gain.setTargetAtTime(0,n,.02)}}playSwitchClick(e,t,n=1){if(!this.noiseBuf)return;const i=e.createBufferSource();i.buffer=this.noiseBuf;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=1100*n,r.Q.value=2;const o=e.createGain();o.gain.setValueAtTime(.14,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.028),i.connect(r),r.connect(o),o.connect(e.destination),i.start(t),i.stop(t+.032)}playKey(e){const t=this.ensureContext();if(!t||!this.noiseBuf)return;const n=t.currentTime,i=e===" ",r=e==="Enter",o=.92+Math.random()*.16,a=t.createBufferSource();a.buffer=this.noiseBuf;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=(i?950:r?1250:1750)*o,c.Q.value=1.6;const l=t.createGain();l.gain.setValueAtTime(r?.065:i?.055:.042,n),l.gain.exponentialRampToValueAtTime(1e-4,n+.018),a.connect(c),c.connect(l),l.connect(t.destination),a.start(n),a.stop(n+.022);const u=t.createOscillator();u.type="triangle",u.frequency.setValueAtTime((i?150:r?185:240)*o,n),u.frequency.exponentialRampToValueAtTime(85,n+.025);const h=t.createGain();h.gain.setValueAtTime(i?.045:.025,n),h.gain.exponentialRampToValueAtTime(1e-4,n+.028),u.connect(h),h.connect(t.destination),u.start(n),u.stop(n+.03)}playHatch(e){const t=this.ensureContext();t&&this.playSwitchClick(t,t.currentTime,e?1.35:.9)}playPageFlip(){const e=this.ensureContext();if(!e||!this.noiseBuf)return;const t=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuf;const i=e.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(1600,t),i.frequency.exponentialRampToValueAtTime(3400,t+.09),i.Q.value=1.2;const r=e.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.055,t+.025),r.gain.exponentialRampToValueAtTime(1e-4,t+.12),n.connect(i),i.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.14)}playBicClick(){const e=this.ensureContext();if(!e||!this.noiseBuf)return;const t=e.currentTime,n=(i,r,o)=>{const a=e.createBufferSource();a.buffer=this.noiseBuf;const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=r,c.Q.value=3.2;const l=e.createGain();l.gain.setValueAtTime(o,i),l.gain.exponentialRampToValueAtTime(1e-4,i+.014),a.connect(c),c.connect(l),l.connect(e.destination),a.start(i),a.stop(i+.018)};n(t,3100,.11),n(t+.032,2250,.14)}playLampSwitch(e){const t=this.ensureContext();t&&this.playSwitchClick(t,t.currentTime,e?1.45:1.05)}unlock(){this.ensureContext()}playClockTick(e=0,t=!1){if(!this.enabled)return;t&&this.ensureContext();const n=this.ctx;if(!n||n.state!=="running"||!this.noiseBuf)return;const i=n.currentTime,r=e%2===0,o=n.createBufferSource();o.buffer=this.noiseBuf;const a=n.createBiquadFilter();a.type="bandpass",a.frequency.value=r?3300:2850,a.Q.value=3.8;const c=n.createGain();c.gain.setValueAtTime(r?.024:.02,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.011),o.connect(a),a.connect(c),c.connect(n.destination),o.start(i),o.stop(i+.014);const l=n.createOscillator();l.type="triangle",l.frequency.setValueAtTime(r?690:610,i),l.frequency.exponentialRampToValueAtTime(240,i+.014);const u=n.createGain();u.gain.setValueAtTime(r?.014:.011,i),u.gain.exponentialRampToValueAtTime(1e-4,i+.015),l.connect(u),u.connect(n.destination),l.start(i),l.stop(i+.018)}playFloppyLatch(e){const t=this.ensureContext();if(!t)return;const n=t.currentTime;this.playSwitchClick(t,n,e?.72:1.15),this.playSwitchClick(t,n+.06,e?1.2:.85)}playDiskSeek(e){const t=this.ensureContext();if(!t||!this.noiseBuf)return;const n=t.currentTime,i=t.createOscillator();i.type="sawtooth",i.frequency.value=62;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=180;const o=t.createGain(),a=e==="error"?.45:.88;o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(.028,n+.06),o.gain.setValueAtTime(.026,n+a-.1),o.gain.exponentialRampToValueAtTime(1e-4,n+a),i.connect(r),r.connect(o),o.connect(t.destination),i.start(n),i.stop(n+a+.02);const c=e==="error"?[.02,.05,.08,.11,.14,.17,.2]:e==="write"?[.04,.1,.15,.26,.34,.41,.52,.6,.68]:[.03,.09,.14,.22,.33,.42,.5,.62,.72,.78];for(let l=0;l<c.length;l++){const u=n+c[l],h=t.createOscillator();h.type="square",h.frequency.setValueAtTime(e==="error"?110:145+l%3*18,u),h.frequency.exponentialRampToValueAtTime(75,u+.024);const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=e==="error"?420:620,f.Q.value=2.4;const d=t.createGain();d.gain.setValueAtTime(e==="error"?.085:.048,u),d.gain.exponentialRampToValueAtTime(1e-4,u+.026),h.connect(f),f.connect(d),d.connect(t.destination),h.start(u),h.stop(u+.03)}}silenceSid(){if(this.sidGain&&this.ctx){const e=this.ctx.currentTime;this.sidGain.gain.cancelScheduledValues(e),this.sidGain.gain.setTargetAtTime(0,e,.02)}this.sidRegs[4]&=-2}sidPoke(e,t){if(e<0||e>=25)return;const n=this.sidRegs[4];this.sidRegs[e]=t&255;const i=this.ensureContext();if(!i||!this.powered)return;const r=(this.sidRegs[24]&15)/15,o=this.sidRegs[0]|this.sidRegs[1]<<8,a=Math.max(20,Math.min(8e3,o*.06097)),c=this.sidRegs[4],l=(c&1)!==0,u=(n&1)!==0;(!this.sidOsc||!this.sidGain)&&(this.sidOsc=i.createOscillator(),this.sidGain=i.createGain(),this.sidGain.gain.value=0,this.sidOsc.connect(this.sidGain),this.sidGain.connect(i.destination),this.sidOsc.start()),c&64?this.sidOsc.type="square":c&32?this.sidOsc.type="sawtooth":c&16?this.sidOsc.type="triangle":this.sidOsc.type="square";const h=i.currentTime;if(this.sidOsc.frequency.setTargetAtTime(a,h,.004),e===4){const f=this.sidRegs[5],d=this.sidRegs[6],m=f&15,_=(d>>4&15)/15,p=d&15,g=f!==0||d!==0,S=r*.16,M=g?.06+m/15*.85:.35,v=g?S*_:S*.85,b=g?.04+p/15*.6:.05;this.sidGain.gain.cancelScheduledValues(h),l&&!u?(this.sidGain.gain.setValueAtTime(1e-4,h),this.sidGain.gain.linearRampToValueAtTime(Math.max(1e-4,S),h+.01),this.sidGain.gain.exponentialRampToValueAtTime(Math.max(1e-4,v),h+.01+M),g&&_===0&&this.sidGain.gain.setValueAtTime(0,h+.02+M)):l||this.sidGain.gain.setTargetAtTime(0,h,b*.35)}else e===24&&l&&(this.sidGain.gain.cancelScheduledValues(h),this.sidGain.gain.setTargetAtTime(r*.14,h,.015))}playJoystickClick(e=!1){const t=this.ensureContext();if(!t)return;const n=t.currentTime,i=t.createOscillator();i.type="triangle",i.frequency.setValueAtTime(e?920:540,n),i.frequency.exponentialRampToValueAtTime(e?260:150,n+.028);const r=t.createGain();if(r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(e?.095:.075,n+.003),r.gain.exponentialRampToValueAtTime(1e-4,n+.032),i.connect(r),r.connect(t.destination),i.start(n),i.stop(n+.036),this.noiseBuf){const o=t.createBufferSource();o.buffer=this.noiseBuf;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=e?2900:1850,a.Q.value=2.4;const c=t.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(e?.065:.05,n+.002),c.gain.exponentialRampToValueAtTime(1e-4,n+.022),o.connect(a),a.connect(c),c.connect(t.destination),o.start(n),o.stop(n+.026)}}playEchoFanfare(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=[523.25,659.25,783.99,987.77,1046.5,1318.51,1567.98];n.forEach((i,r)=>{const o=t+r*.072,a=r===n.length-1,c=a?.42:.12,l=e.createOscillator();l.type=r%2===0?"square":"triangle",l.frequency.setValueAtTime(i,o);const u=e.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(2800,o);const h=e.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.linearRampToValueAtTime(a?.075:.06,o+.008),h.gain.exponentialRampToValueAtTime(1e-4,o+c),l.connect(u),u.connect(h),h.connect(e.destination),l.start(o),l.stop(o+c+.02)})}playFireworkPop(){if(!this.enabled)return;const e=this.ctx;if(!e||e.state!=="running"||!this.noiseBuf)return;const t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(140+Math.random()*45,t),n.frequency.exponentialRampToValueAtTime(42,t+.14);const i=e.createGain();i.gain.setValueAtTime(.08,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.15),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.17);const r=e.createBufferSource();r.buffer=this.noiseBuf;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=1400+Math.random()*1400,o.Q.value=1.2;const a=e.createGain();a.gain.setValueAtTime(.065,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.18),r.connect(o),o.connect(a),a.connect(e.destination),r.start(t),r.stop(t+.2)}}const k1=new URLSearchParams(location.search);k1.has("clean")&&document.body.classList.add("clean");const an=document.querySelector("#c"),yr=document.querySelector("#crt-fullscreen"),H1=document.querySelector("#crt-fs-canvas"),G1=H1.getContext("2d"),un=document.querySelector("#touch-kbd"),xl=document.querySelector("#btn-esc"),Dc=document.querySelector("#btn-focus"),Ba=document.querySelector("#btn-sound"),Oc=document.querySelector("#btn-paper"),Xo=document.querySelector("#paper-view"),z1=document.querySelector("#paper-img"),vu=document.querySelector("#paper-close"),ka=document.querySelector("#toast");let oo=null;function ki(s,e=1600){ka.textContent=s,ka.classList.add("show"),oo!==null&&window.clearTimeout(oo),oo=window.setTimeout(()=>{ka.classList.remove("show"),oo=null},e)}const bt=new B1,_l=new L1(()=>bt.playFireworkPop()),Gn=new Zv,Wf=new kf,Er=new mS,Ft=new jv(Gn,{disk:Wf,onSidPoke:(s,e)=>bt.sidPoke(s,e),onSidSilence:()=>bt.silenceSid(),onDiskActivity:s=>{Er.setActivity(s),s!=="idle"&&bt.playDiskSeek(s)},onEchoAchieved:s=>{_l.celebrate(),bt.playEchoFanfare();const e=s.length>18?`${s.slice(0,18)}…`:s;ki(`ECHO! "${e}" — nice work!`,3400)}}),Ci=new Xv({canvas:an,antialias:!0,powerPreference:"high-performance"});Ci.setPixelRatio(Math.min(window.devicePixelRatio,2));Ci.setSize(window.innerWidth,window.innerHeight);Ci.shadowMap.enabled=!0;Ci.shadowMap.type=er;Ci.toneMapping=zn;const Xf=new N1(window.innerWidth,window.innerHeight,Math.min(window.devicePixelRatio,2)),Zt=new ef;Zt.background=new $e(855051);Zt.fog=new el(855051,.026);const ai=new ln(34,window.innerWidth/window.innerHeight,.1,60);let Yn=!1;const bi=new D,Ei=new D,Lo=new D,Io=new D,ws={x:0,y:0},ni={x:0,y:0},Su=new D,Mu=new D;let Tr=!1;function Ns(s){const e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight),n=e/t,i=e<640,r=!s&&n<.85;if(s)Ei.set(0,1.98,1),bi.set(0,2.02,4.2);else if(Tr&&i){const o=window.visualViewport,a=o?.height??t,c=o?.offsetTop??0,l=Math.tan(Mo.degToRad(ai.fov*.5)),u=1.15,h=2.02,f=84,m=Math.max(140,a-f-52),_=m/t,p=1.62/(l*n),g=1.19/(l*_),S=Math.max(p,g),v=1-2*(c+f+m*.5)/t,b=h-v*S*l;Ei.set(0,b,u),bi.set(0,b,u+S)}else if(r){const o=Math.max(.84,Math.min(1.12,.48/Math.max(.38,n)));Ei.set(.1,1.66,.35),bi.set(.28,3.65,18.2*o)}else{const o=n<1.5?Math.min(1.85,1.5/Math.max(.85,n)):1;Ei.set(.16,1.7,.3),bi.set(.48*Math.min(1.25,o),3.02*Math.pow(o,.28),8.62*o)}}Ns(!1);Lo.copy(bi);Io.copy(Ei);ai.position.copy(Lo);ai.lookAt(Io);const li=new oS(Gn.canvas);Zt.add(li.root);Zt.add(Er.root);const bs=new l1(()=>{Yf.push(...bs.interactiveMeshes)});Zt.add(bs.root);const Vi=new MS;Zt.add(Vi.root);let yu=!1;const Ds=new ES;Zt.add(Ds.root);const Yo=new f1(s=>bt.playClockTick(s));Zt.add(Yo.root);const yn=new E1;Zt.add(yn.root);const Ki=new S1(yn.cableEntryWorld);Zt.add(Ki.root);const Yf=[...li.interactiveMeshes,...Er.interactiveMeshes,...bs.interactiveMeshes,...Ki.interactiveMeshes,...yn.interactiveMeshes,Vi.hitMesh,Ds.hitMesh,Yo.hitMesh];Zt.add(D1());Zt.add(m1());Zt.add(_l.root);const Kf=new U0(14077892,2366743,.34);Zt.add(Kf);const dn=new Go(16770238,1.45);dn.position.set(-4.2,6.8,4.8);dn.castShadow=!0;dn.shadow.mapSize.set(2048,2048);dn.shadow.camera.near=2;dn.shadow.camera.far=19;const Ko=4.8;dn.shadow.camera.left=-Ko;dn.shadow.camera.right=Ko;dn.shadow.camera.top=Ko;dn.shadow.camera.bottom=-Ko;dn.shadow.bias=-4e-4;dn.shadow.normalBias=.025;dn.shadow.radius=3.5;Zt.add(dn);const qf=new Go(10993898,.58);qf.position.set(4.5,4.4,-5.2);Zt.add(qf);const vl=new Go(15063236,.38);vl.position.set(4.2,2.6,4.6);Zt.add(vl);let Ks=1;const Tu=new J0,Ha=new ae;let Uc={x:0,y:0},Es=null,js=null,Fc=0,wu="",$f=an.getBoundingClientRect();const No=new Set;let Bc=!1;const Zf=new D;function fs(s){wu!==s&&(wu=s,an.style.cursor=s)}function Sl(){Es&&(js!==null&&an.hasPointerCapture(js)&&an.releasePointerCapture(js),Es=null,js=null,fs("default"))}function qo(s,e){const t=$f;Ha.x=(s-t.left)/t.width*2-1,Ha.y=-((e-t.top)/t.height)*2+1,Tu.setFromCamera(Ha,ai);const n=Tu.intersectObjects(Yf,!1);for(const i of n){const r=i.object.userData.hit;if(r&&!(r.kind==="knob"&&!li.hatchOpen))return Zf.copy(i.point),r}return null}an.addEventListener("pointerdown",s=>{if(bt.unlock(),s.pointerType==="mouse"&&s.button!==0)return;if(No.add(s.pointerId),No.size>1){Bc=!0;return}Bc=!1,Uc={x:s.clientX,y:s.clientY};const e=qo(s.clientX,s.clientY);e?.kind==="knob"&&e.knob&&(Es=e.knob,js=s.pointerId,Fc=s.clientY,an.setPointerCapture(s.pointerId),fs("ns-resize"))});window.addEventListener("pointermove",s=>{if(s.pointerType!=="touch"){const e=(s.clientX/Math.max(1,window.innerWidth)-.5)*2,t=(s.clientY/Math.max(1,window.innerHeight)-.5)*2;ws.x=Math.max(-1,Math.min(1,e)),ws.y=Math.max(-1,Math.min(1,t))}});an.addEventListener("pointermove",s=>{if(Es){const e=Fc-s.clientY;Fc=s.clientY,li.adjustKnob(Es,e*.0045);return}if(s.buttons===0&&s.pointerType==="mouse"){const e=qo(s.clientX,s.clientY);Vi.setHovered(e?.kind==="paper"),Ds.setHovered(e?.kind==="pen"),e?.kind==="power"||e?.kind==="hatch"||e?.kind==="paper"||e?.kind==="drive"||e?.kind==="pen"||e?.kind==="lamp"||e?.kind==="clock"||e?.kind==="key"||e?.kind==="joystick"||e?.kind==="joystick-fire"?fs("pointer"):e?.kind==="knob"?fs("ns-resize"):e?.kind==="screen"?fs("text"):fs("default")}});an.addEventListener("pointerleave",()=>{Vi.setHovered(!1),Ds.setHovered(!1),ws.x=0,ws.y=0});an.addEventListener("pointercancel",s=>{No.delete(s.pointerId),Sl()});an.addEventListener("lostpointercapture",()=>{Sl()});const V1={1:"!",2:'"',3:"#",4:"$",5:"%",6:"&",7:"'",8:"(",9:")",":":"[",";":"]",",":"<",".":">","/":"?"};let ao=!1,Do=!1;an.addEventListener("click",()=>{Do&&(Do=!1,Oo())});an.addEventListener("pointerup",s=>{if(No.delete(s.pointerId),s.pointerType==="mouse"&&s.button!==0)return;if(Es){Sl();return}if(Bc||Math.hypot(s.clientX-Uc.x,s.clientY-Uc.y)>6)return;const t=qo(s.clientX,s.clientY);if(!t){document.activeElement===un&&un.blur();return}if(t.kind!=="screen"&&t.kind!=="key"&&document.activeElement===un&&un.blur(),t.kind==="power"){const n=li.togglePower();bt.setPowered(n)}else if(t.kind==="hatch"){const n=li.toggleHatch();bt.playHatch(n)}else if(t.kind==="drive"){const n=Er.toggleDisk();Wf.inserted=n,bt.playFloppyLatch(n)}else if(t.kind==="pen")Ds.clickNextColor(),bt.playBicClick();else if(t.kind==="lamp"){const n=bs.toggle();bt.playLampSwitch(n)}else if(t.kind==="clock"){const n=Yo.toggleTickSound();n&&bt.playClockTick(0,!0),ki(n?"Clock tick on":"Clock tick off")}else if(t.kind==="key")if(s.pointerType==="touch")Do=!0,Oo();else if(Ki.triggerKey(t.key),bt.playKey(t.key),t.key==="Shift")ao=!ao;else{const n=ao?V1[t.key]??t.key:t.key;ao=!1,Ft.handleKey(n,!1,!1)}else if(t.kind==="joystick"){const n=yn.root.worldToLocal(Zf.clone()),i=Math.abs(n.x)>=Math.abs(n.z)?n.x>=0?1:-1:0,r=Math.abs(n.z)>Math.abs(n.x)?n.z>=0?1:-1:0;yn.nudge(i===0&&r===0?1:i,r,.22),bt.playJoystickClick(!1),Ft.running&&(i<0?Ft.handleKey("a",!1,!1):i>0?Ft.handleKey("d",!1,!1):r<0?Ft.handleKey("w",!1,!1):r>0&&Ft.handleKey("s",!1,!1))}else t.kind==="joystick-fire"?(yn.pressFire(!1),bt.playJoystickClick(!0),Ft.running&&Ft.handleKey(" ",!1,!1)):t.kind==="paper"?$o(Xo.hidden):t.kind==="screen"&&s.pointerType==="touch"&&(Do=!0,Oo())});an.addEventListener("dblclick",s=>{qo(s.clientX,s.clientY)?.kind==="screen"&&yl(!Yn)});yr.addEventListener("dblclick",()=>{yl(!1)});yr.addEventListener("pointerdown",s=>{bt.unlock(),s.pointerType==="touch"&&Oo()});function $o(s){s&&!yu&&(yu=!0,z1.src=Vi.canvas.toDataURL("image/png")),Xo.hidden=!s,Vi.root.visible=!s,Oc.setAttribute("aria-pressed",String(s)),bt.playPageFlip()}vu.addEventListener("click",()=>{$o(!1),vu.blur()});function W1(){const s=Ft.exportListing();if(!s){ki("No program to copy");return}const e=s.split(`
`).length;navigator.clipboard?.writeText(s).then(()=>ki(`Copied ${e} ${e===1?"line":"lines"}`),()=>ki("Clipboard unavailable"))}window.addEventListener("copy",s=>{if(window.getSelection()?.toString())return;const t=Ft.exportListing();if(!t)return;s.preventDefault(),s.clipboardData?.setData("text/plain",t);const n=t.split(`
`).length;ki(`Copied ${n} ${n===1?"line":"lines"}`)});let Jf=0;function Qf(s){if(!s)return;Jf=performance.now();const e=Ft.pasteText(s);e>0&&(bt.playKey("Enter"),e>1&&ki(`Pasted ${e} lines`))}window.addEventListener("paste",s=>{const e=s.clipboardData?.getData("text/plain");e&&(s.preventDefault(),Qf(e))});window.addEventListener("keydown",s=>{if(bt.unlock(),s.metaKey&&!s.ctrlKey&&!s.altKey&&s.key.toLowerCase()==="c"||s.ctrlKey&&s.shiftKey&&!s.metaKey&&s.key.toLowerCase()==="c"){s.preventDefault(),W1();return}if((s.metaKey||s.ctrlKey)&&!s.altKey&&s.key.toLowerCase()==="v"){const t=performance.now();window.setTimeout(()=>{Jf>=t||navigator.clipboard?.readText().then(Qf).catch(()=>{})},35);return}if(s.metaKey)return;if(document.activeElement===un){(s.key==="Enter"||s.key==="Backspace"||s.key==="Escape")&&(s.preventDefault(),As(s.key),Wi());return}if(s.key==="Escape"&&!Ft.running&&!Xo.hidden){$o(!1),s.preventDefault();return}(s.key===" "||s.key==="Backspace"||s.key==="Enter"||s.key==="Escape"||s.key==="Home"||!s.altKey&&s.key.startsWith("Arrow")||s.ctrlKey&&(s.key==="l"||s.key==="L"||s.key==="c"||s.key==="C"))&&s.preventDefault(),document.activeElement instanceof HTMLButtonElement&&document.activeElement.blur();const e=Ft.handleKey(s.key,s.ctrlKey,s.metaKey);Ki.triggerKey(s.key),s.key==="ArrowLeft"||Ft.running&&s.key.toLowerCase()==="a"?yn.nudge(-1,0):s.key==="ArrowRight"||Ft.running&&s.key.toLowerCase()==="d"?yn.nudge(1,0):s.key==="ArrowUp"||Ft.running&&s.key.toLowerCase()==="w"?yn.nudge(0,-1):s.key==="ArrowDown"||Ft.running&&s.key.toLowerCase()==="s"?yn.nudge(0,1):s.key===" "&&Ft.running&&yn.pressFire(!1),e&&bt.playKey(s.key)});const kc=" ";let bu=0;function Wi(){un.value=kc;try{un.setSelectionRange(1,1)}catch{}}function Oo(){Wi(),un.focus({preventScroll:!0});try{un.setSelectionRange(1,1)}catch{}}function As(s){const e=performance.now();e-bu<25||(bu=e,Ki.triggerKey(s),Ft.handleKey(s,!1,!1)&&bt.playKey(s))}un.addEventListener("focus",()=>{Tr=!0,Wi(),xl.hidden=!1,Ml(),Ns(Yn)});un.addEventListener("blur",()=>{Tr=!1,xl.hidden=!0,document.documentElement.style.setProperty("--vv-bottom",`${window.innerHeight}px`),Ns(Yn)});un.addEventListener("beforeinput",s=>{s.inputType==="insertLineBreak"||s.inputType==="insertParagraph"?(s.preventDefault(),As("Enter"),Wi()):s.inputType==="deleteContentBackward"&&(s.preventDefault(),As("Backspace"),Wi())});un.addEventListener("input",()=>{const s=un.value;if(s.length===0){As("Backspace"),Wi();return}const e=s.startsWith(kc)?s.slice(1):s.endsWith(kc)?s.slice(0,-1):s;if(e.length>0)for(const t of e)t===`
`||t==="\r"?As("Enter"):(Ki.triggerKey(t),Ft.handleKey(t,!1,!1)&&bt.playKey(t));Wi()});xl.addEventListener("pointerdown",s=>{s.preventDefault(),bt.unlock(),As("Escape")});function Ml(){const s=window.visualViewport,e=s?Math.round(s.offsetTop+s.height):window.innerHeight;document.documentElement.style.setProperty("--vv-bottom",`${e}px`),Ns(Yn)}window.visualViewport?.addEventListener("resize",Ml);window.visualViewport?.addEventListener("scroll",Ml);let Eu=-1;function jf(s=!1){if(!(!Yn&&!s)&&(G1.drawImage(Gn.canvas,0,0),s||Gn.borderColor!==Eu)){Eu=Gn.borderColor;const[e,t,n]=ar[Gn.borderColor];yr.style.backgroundColor=`rgb(${e}, ${t}, ${n})`}}function yl(s){Yn=s,Dc.setAttribute("aria-pressed",String(s)),yr.classList.toggle("open",s),yr.setAttribute("aria-hidden",String(!s)),s&&jf(!0),Ns(s)}Dc.addEventListener("click",()=>{yl(!Yn),Dc.blur()});Ba.addEventListener("click",()=>{const s=!bt.enabled;bt.setEnabled(s),Ba.setAttribute("aria-pressed",String(s)),Ba.blur()});Oc.addEventListener("click",()=>{$o(Xo.hidden),Oc.blur()});function X1(){const s=window.innerWidth,e=window.innerHeight,t=Math.min(window.devicePixelRatio,2);ai.aspect=s/e,ai.updateProjectionMatrix(),Ci.setPixelRatio(t),Ci.setSize(s,e),Xf.resize(s,e,t),$f=an.getBoundingClientRect(),Ns(Yn)}window.addEventListener("resize",X1);document.addEventListener("visibilitychange",()=>{bt.setPageVisible(!document.hidden)});let Hc=performance.now();const Y1=Hc;function ed(s){requestAnimationFrame(ed);const e=Math.min(.05,(s-Hc)/1e3);Hc=s;const t=(s-Y1)/1e3;Ft.step(18,e),Gn.tick(e),Gn.render()&&(li.markScreenDirty(),jf(!1)),li.update(e,t,Gn.getScreenGlowColor()),Er.update(e,t),bs.update(e),Vi.update(e),Ds.update(e),Yo.update(),Ki.update(e),yn.update(e),_l.update(e);const n=bs.lit?1:0;Ks+=(n-Ks)*Math.min(1,e*14),dn.intensity=.16+Ks*1.28,vl.intensity=.08+Ks*.3,Kf.intensity=.12+Ks*.22;const i=Math.min(1,e*3.4),r=Yn||Tr?0:ws.x,o=Yn||Tr?0:ws.y;ni.x+=(r-ni.x)*i,ni.y+=(o-ni.y)*i,Su.set(bi.x+ni.x*.24,bi.y-ni.y*.1,bi.z-Math.abs(ni.x)*.02),Mu.set(Ei.x+ni.x*.05,Ei.y-ni.y*.03,Ei.z);const a=Math.min(1,e*6.5);Lo.lerp(Su,a),Io.lerp(Mu,a),ai.position.copy(Lo),ai.lookAt(Io),Xf.render(Ci,Zt,ai,t)}Gn.render();li.markScreenDirty();requestAnimationFrame(ed);
