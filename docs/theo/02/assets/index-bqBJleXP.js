(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const A=(o,t)=>[o[0]+t[0],o[1]+t[1],o[2]+t[2]],H=(o,t)=>[o[0]-t[0],o[1]-t[1],o[2]-t[2]],X=(o,t)=>[o[0]*t,o[1]*t,o[2]*t],te=(o,t)=>o[0]*t[0]+o[1]*t[1]+o[2]*t[2],ke=(o,t)=>[o[1]*t[2]-o[2]*t[1],o[2]*t[0]-o[0]*t[2],o[0]*t[1]-o[1]*t[0]],se=o=>Math.hypot(o[0],o[1],o[2]),q=o=>{const t=Math.hypot(o[0],o[1],o[2]);return t>1e-9?[o[0]/t,o[1]/t,o[2]/t]:[0,1,0]},Yo=(o,t,e)=>[o[0]+(t[0]-o[0])*e,o[1]+(t[1]-o[1])*e,o[2]+(t[2]-o[2])*e],go=()=>[0,0,0,1];function rt(o){const t=Math.hypot(o[0],o[1],o[2],o[3]);return t>1e-9?[o[0]/t,o[1]/t,o[2]/t,o[3]/t]:[0,0,0,1]}function oo(o){return[-o[0],-o[1],-o[2],o[3]]}function Ze(o,t){const[e,s,a,r]=o,[n,i,l,c]=t;return[r*n+e*c+s*l-a*i,r*i-e*l+s*c+a*n,r*l+e*i-s*n+a*c,r*c-e*n-s*i-a*l]}function Le(o,t){const e=t*.5,s=Math.sin(e),a=q(o);return[a[0]*s,a[1]*s,a[2]*s,Math.cos(e)]}function W(o,t){const[e,s,a,r]=o,n=2*(s*t[2]-a*t[1]),i=2*(a*t[0]-e*t[2]),l=2*(e*t[1]-s*t[0]);return[t[0]+r*n+(s*l-a*i),t[1]+r*i+(a*n-e*l),t[2]+r*l+(e*i-s*n)]}function is(o,t,e){let s=t[0],a=t[1],r=t[2],n=t[3],i=o[0]*s+o[1]*a+o[2]*r+o[3]*n;if(i<0&&(i=-i,s=-s,a=-a,r=-r,n=-n),i>.9995)return rt([o[0]+(s-o[0])*e,o[1]+(a-o[1])*e,o[2]+(r-o[2])*e,o[3]+(n-o[3])*e]);const l=Math.acos(i),c=Math.sin(l),u=Math.sin((1-e)*l)/c,y=Math.sin(e*l)/c;return[o[0]*u+s*y,o[1]*u+a*y,o[2]*u+r*y,o[3]*u+n*y]}function Zs(o,t,e,s){const a=1/Math.tan(o*.5),r=1/(e-s),n=new Float32Array(16);return n[0]=a/t,n[5]=a,n[10]=s*r,n[11]=-1,n[14]=e*s*r,n}function Ks(o,t,e){const s=q(H(o,t)),a=q(ke(e,s)),r=ke(s,a),n=new Float32Array(16);return n[0]=a[0],n[4]=a[1],n[8]=a[2],n[12]=-te(a,o),n[1]=r[0],n[5]=r[1],n[9]=r[2],n[13]=-te(r,o),n[2]=s[0],n[6]=s[1],n[10]=s[2],n[14]=-te(s,o),n[15]=1,n}function Js(o,t){const e=new Float32Array(16);for(let s=0;s<4;s++){const a=t[s*4],r=t[s*4+1],n=t[s*4+2],i=t[s*4+3];e[s*4]=o[0]*a+o[4]*r+o[8]*n+o[12]*i,e[s*4+1]=o[1]*a+o[5]*r+o[9]*n+o[13]*i,e[s*4+2]=o[2]*a+o[6]*r+o[10]*n+o[14]*i,e[s*4+3]=o[3]*a+o[7]*r+o[11]*n+o[15]*i}return e}function en(o){const t=new Float32Array(16),e=o[0],s=o[1],a=o[2],r=o[3],n=o[4],i=o[5],l=o[6],c=o[7],u=o[8],y=o[9],g=o[10],m=o[11],f=o[12],d=o[13],h=o[14],v=o[15],p=e*i-s*n,b=e*l-a*n,w=e*c-r*n,P=s*l-a*i,S=s*c-r*i,M=a*c-r*l,z=u*d-y*f,B=u*h-g*f,V=u*v-m*f,C=y*h-g*d,x=y*v-m*d,T=g*v-m*h;let k=p*T-b*x+w*C+P*V-S*B+M*z;return Math.abs(k)<1e-12||(k=1/k,t[0]=(i*T-l*x+c*C)*k,t[1]=(a*x-s*T-r*C)*k,t[2]=(d*M-h*S+v*P)*k,t[3]=(g*S-y*M-m*P)*k,t[4]=(l*V-n*T-c*B)*k,t[5]=(e*T-a*V+r*B)*k,t[6]=(h*w-f*M-v*b)*k,t[7]=(u*M-g*w+m*b)*k,t[8]=(n*x-i*V+c*z)*k,t[9]=(s*V-e*x-r*z)*k,t[10]=(f*S-d*w+v*p)*k,t[11]=(y*w-u*S-m*p)*k,t[12]=(i*B-n*C-l*z)*k,t[13]=(e*C-s*B+a*z)*k,t[14]=(d*b-f*P-h*p)*k,t[15]=(u*P-y*b+g*p)*k),t}function Xo(o){let t=o>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Qe=1e-5;function io(o,t,e){const s=[{n:[1,0,0],d:o,verts:[[o,-t,-e],[o,t,-e],[o,t,e],[o,-t,e]]},{n:[-1,0,0],d:o,verts:[[-o,-t,e],[-o,t,e],[-o,t,-e],[-o,-t,-e]]},{n:[0,1,0],d:t,verts:[[-o,t,-e],[-o,t,e],[o,t,e],[o,t,-e]]},{n:[0,-1,0],d:t,verts:[[-o,-t,e],[-o,-t,-e],[o,-t,-e],[o,-t,e]]},{n:[0,0,1],d:e,verts:[[-o,-t,e],[o,-t,e],[o,t,e],[-o,t,e]]},{n:[0,0,-1],d:e,verts:[[o,-t,-e],[-o,-t,-e],[-o,t,-e],[o,t,-e]]}];for(const a of s)Cs(a.verts,a.n);return Qo(s)}function tn(o=.56){const t=o*.5,e=o*.54,s=o*.5;return io(t,e,s)}function jo(o=.56,t=0){const e=o*.5,s=(t%4+4)%4;let a=io(e*1.15,e*1.38,e*1.15);const r=(n,i)=>{const l=Lt(a,q(n),i);l&&l.volume>1e-4&&(a=l)};if(s===0){for(let n=0;n<6;n++){const i=n/6*Math.PI*2+.18,l=Math.cos(i),c=Math.sin(i);r([l,0,c],e*.72),r([l*.78,.62,c*.78],e*.88),r([l*.74,-.67,c*.74],e*.86)}r([0,1,0],e*1.24),r([0,-1,0],e*1.18)}else if(s===1){for(let n=0;n<8;n++){const i=n/8*Math.PI*2+Math.PI/8,l=Math.cos(i),c=Math.sin(i);r([l,0,c],e*.92),r([l*.68,.73,c*.68],e*.8),r([l*.8,-.6,c*.8],e*.78)}r([0,1,0],e*.64),r([0,-1,0],e*.96)}else if(s===2){a=io(e*.96,e*1.04,e*.96);for(const n of[-1,1])for(const i of[-1,1])for(const l of[-1,1])r([n,i,l],e*1.02)}else{a=io(e*.88,e*1.12,e*.88);for(const n of[-1,1])for(const i of[-1,1])r([n,0,i],e*.92);for(const n of[-1,1])r([n,.78,0],e*1.04),r([n,-.78,0],e*1.04);for(const n of[-1,1])r([0,.78,n],e*1.04),r([0,-.78,n],e*1.04)}return a}function Cs(o,t){if(o.length<3)return;let e=0,s=0,a=0;const r=o[0];for(let n=1;n<o.length-1;n++){const i=H(o[n],r),l=H(o[n+1],r),c=ke(i,l);e+=c[0],s+=c[1],a+=c[2]}e*t[0]+s*t[1]+a*t[2]<0&&o.reverse()}function on(o){const t=[];for(const e of o){const s=t[t.length-1];(!s||se(H(e,s))>1e-5)&&t.push(e)}return t.length>1&&se(H(t[0],t[t.length-1]))<=1e-5&&t.pop(),t}function ls(o,t){if(o.length<3)return 0;let e=0,s=0,a=0;const r=o[0];for(let n=1;n<o.length-1;n++){const i=ke(H(o[n],r),H(o[n+1],r));e+=i[0],s+=i[1],a+=i[2]}return .5*Math.abs(e*t[0]+s*t[1]+a*t[2])}function Qo(o){let t=0,e=0,s=0,a=0,r=1/0,n=1/0,i=1/0,l=-1/0,c=-1/0,u=-1/0,y=0,g=0,m=0,f=0;for(const p of o)for(const b of p.verts)y+=b[0],g+=b[1],m+=b[2],f++,b[0]<r&&(r=b[0]),b[0]>l&&(l=b[0]),b[1]<n&&(n=b[1]),b[1]>c&&(c=b[1]),b[2]<i&&(i=b[2]),b[2]>u&&(u=b[2]);if(f===0)return{faces:[],volume:0,centroid:[0,0,0],min:[0,0,0],max:[0,0,0]};const d=[y/f,g/f,m/f];for(const p of o){const b=p.verts;if(b.length<3)continue;const w=H(b[0],d);for(let P=1;P<b.length-1;P++){const S=H(b[P],d),M=H(b[P+1],d),z=te(w,ke(S,M));t+=z,e+=z*(w[0]+S[0]+M[0])*.25,s+=z*(w[1]+S[1]+M[1])*.25,a+=z*(w[2]+S[2]+M[2])*.25}}const h=Math.max(0,t/6),v=t>1e-10?[d[0]+e/t,d[1]+s/t,d[2]+a/t]:d;return{faces:o,volume:h,centroid:v,min:[r,n,i],max:[l,c,u]}}function Bs(o,t){const e=[];for(const g of o){let m=!1;for(const f of e)if(se(H(g,f))<1e-4){m=!0;break}m||e.push(g)}if(e.length<3)return[];let s=0,a=0,r=0;for(const g of e)s+=g[0],a+=g[1],r+=g[2];const n=[s/e.length,a/e.length,r/e.length],i=Math.abs(t[0])<.8?[1,0,0]:[0,1,0],l=q(ke(t,i)),c=ke(t,l),u=e.map(g=>{const m=H(g,n);return{p:g,a:Math.atan2(te(m,c),te(m,l))}});u.sort((g,m)=>g.a-m.a);const y=u.map(g=>g.p);return Cs(y,t),y}function Lt(o,t,e,s=!1){const a=[],r=[];let n=!1,i=!1;for(const c of o.faces){const u=c.verts,y=u.map(f=>te(t,f)-e);for(const f of y)f<=Qe&&(n=!0),f>Qe&&(i=!0);const g=[];for(let f=0;f<u.length;f++){const d=u[f],h=u[(f+1)%u.length],v=y[f],p=y[(f+1)%u.length],b=v<=Qe,w=p<=Qe;if(b&&g.push(d),Math.abs(v)<=Qe&&r.push(d),b!==w){const P=v/(v-p),S=Yo(d,h,Math.max(0,Math.min(1,P)));g.push(S),r.push(S)}}const m=on(g);m.length>=3&&ls(m,c.n)>1e-8&&a.push({...c,verts:m})}if(!n||a.length===0)return null;if(!i)return o;if(r.length>=3){const c=Bs(r,t);c.length>=3&&ls(c,t)>1e-8&&a.push({n:[...t],d:e,verts:c,internal:s})}if(a.length<4)return null;const l=Qo(a);return l.volume>1e-8?l:null}function vo(o,t,e){const s=Lt(o,t,e,!1),a=Lt(o,[-t[0],-t[1],-t[2]],-e,!1),r=Ao(o,t,e);return{neg:s,pos:a,section:r}}function Ao(o,t,e){const s=[];let a=!1,r=!1;for(const n of o.faces){const i=n.verts,l=i.map(c=>te(t,c)-e);for(const c of l)c<-Qe&&(a=!0),c>Qe&&(r=!0);for(let c=0;c<i.length;c++){const u=i[c],y=i[(c+1)%i.length],g=l[c],m=l[(c+1)%i.length];if(Math.abs(g)<=Qe)s.push(u);else if(g<0&&m>0||g>0&&m<0){const f=g/(g-m);s.push(Yo(u,y,f))}}}return!a||!r?[]:Bs(s,t)}function It(o){return o.faces.slice(0,64).map(t=>({n:t.n,d:t.d}))}function Ts(o){const t=[];for(const e of o.faces)for(const s of e.verts){let a=!1;for(const r of t)if(se(H(s,r))<1e-4){a=!0;break}a||t.push(s)}return t}function zs(o,t,e=0){for(const s of o.faces)if(te(s.n,t)-s.d>-e)return!1;return!0}function $o(o,t,e,s,a){const[r,n,i]=o.min,[l,c,u]=o.max,y=l-r,g=c-n,m=u-i;let f=.01;for(const B of o.faces)for(const V of B.verts){const C=Math.abs(te(t,V)-e);C>f&&(f=C)}const d=[],h=Math.max(12,Math.min(140,s));let v=0;for(;d.length<h&&v<h*45;){v++;const B=[r+a()*y,n+a()*g,i+a()*m];if(!zs(o,B,.0015))continue;const V=Math.abs(te(t,B)-e)/f;if(a()>.3+.7*Math.pow(1-V,.75))continue;let C=!1;const x=Math.pow(o.volume/h,1/3)*.28;for(const T of d)if(se(H(B,T))<x){C=!0;break}C||d.push(B)}d.length<3&&(d.push(o.centroid),d.push(A(o.centroid,X(t,f*.15))));const p=H(o.centroid,X(t,te(t,o.centroid)-e));for(const B of o.faces)for(const V of B.verts)se(H(V,p));const b=[],w=[];for(let B=0;B<d.length;B++){const V=d[B],C=d.map((R,G)=>({j:G,sj:R,dist2:te(H(R,V),H(R,V))})).filter(R=>R.j!==B).sort((R,G)=>R.dist2-G.dist2),x=Math.min(C.length,34);let T=o;for(let R=0;R<x;R++){const{sj:G}=C[R];if(!T)break;const D=H(G,V),F=se(D);if(F<1e-6)continue;const U=[D[0]/F,D[1]/F,D[2]/F],Q=X(A(V,G),.5),oe=te(U,Q);(U[0]>0?T.max[0]:T.min[0])*U[0]+(U[1]>0?T.max[1]:T.min[1])*U[1]+(U[2]>0?T.max[2]:T.min[2])*U[2]<=oe+Qe||(T=Lt(T,U,oe,!0))}if(!T||T.volume<1e-7)continue;for(const R of T.faces){if(!R.internal||R.n[0]*1+R.n[1]*1.371+R.n[2]*1.913<0)continue;let D=0,F=0,U=0;for(const ie of R.verts)D+=ie[0],F+=ie[1],U+=ie[2];const Q=[D/R.verts.length,F/R.verts.length,U/R.verts.length],oe=Math.max(0,Math.abs(te(t,Q)-e))/f,ne=Math.max(0,Math.min(.95,oe*.85+a()*.12));w.push({verts:R.verts,n:R.n,delay:ne})}const k=Ts(T),L=new Float32Array(k.length*3),E=T.centroid;for(let R=0;R<k.length;R++)L[R*3]=k[R][0]-E[0],L[R*3+1]=k[R][1]-E[1],L[R*3+2]=k[R][2]-E[2];b.push({poly:T,centroid:E,hullVerts:L,volume:T.volume})}const P=b.map((B,V)=>({s:B,idx:V})).sort((B,V)=>V.s.volume-B.s.volume),S=Math.min(44,Math.floor(b.length*.58));let M=0;for(const{s:B}of P){if(M>=S||B.volume<8e-5)break;if(a()>.85)continue;const V=4+Math.floor(a()*4),C=sn(B.poly,V,a);C.length>=2&&(B.children=C,M++)}const z=nn(o,b,t,e,f,a);return{shards:b,crackFaces:w,surfaceCracks:z}}function sn(o,t,e){const[s,a,r]=o.min,[n,i,l]=o.max,c=n-s,u=i-a,y=l-r,g=[];let m=0;for(;g.length<t&&m<t*25;){m++;const d=[s+e()*c,a+e()*u,r+e()*y];zs(o,d,8e-4)&&g.push(d)}if(g.length<2)return[];const f=[];for(let d=0;d<g.length;d++){const h=g[d];let v=o;for(let P=0;P<g.length;P++){if(d===P||!v)continue;const S=H(g[P],h),M=se(S);if(M<1e-6)continue;const z=[S[0]/M,S[1]/M,S[2]/M],B=X(A(h,g[P]),.5);v=Lt(v,z,te(z,B),!0)}if(!v||v.volume<1e-7)continue;const p=Ts(v),b=new Float32Array(p.length*3),w=v.centroid;for(let P=0;P<p.length;P++)b[P*3]=p[P][0]-w[0],b[P*3+1]=p[P][1]-w[1],b[P*3+2]=p[P][2]-w[2];f.push({poly:v,centroid:w,hullVerts:b,volume:v.volume})}return f}function nn(o,t,e,s,a,r){const n=[],i=new Set,l=1/Math.max(.015,a),c=g=>`${Math.round(g[0]*2500)},${Math.round(g[1]*2500)},${Math.round(g[2]*2500)}`,u=(g,m)=>{const f=Math.max(0,Math.abs(te(e,g)-s))*l;return Math.max(0,Math.pow(f,.85)*.27+m)},y=(g,m)=>{for(const f of o.faces)if(!(te(f.n,m)>.98)&&Math.abs(te(f.n,g)-f.d)<.0018)return!0;return!1};for(const g of t)for(const m of g.poly.faces){if(m.internal)continue;const f=m.verts,d=f.length;if(d<3)continue;let h=0,v=0,p=0;for(const P of f)h+=P[0],v+=P[1],p+=P[2];const b=[h/d,v/d,p/d];for(let P=0;P<d;P++){const S=f[P],M=f[(P+1)%d],z=se(H(M,S));if(z<.0025)continue;const B=X(A(S,M),.5);if(y(B,m.n))continue;const V=c(S),C=c(M),x=V<C?`${V}|${C}`:`${C}|${V}`;if(i.has(x))continue;i.add(x);const T=Math.abs(te(e,S)-s),k=Math.abs(te(e,M)-s),L=T<=k?S:M,E=T<=k?M:S,R=q(H(E,L)),G=q(ke(m.n,R)),D=(r()-.5)*1.6,F=(r()-.5)*.032,U=Math.exp(-Math.min(T,k)*l*1.6),Q=95e-5+U*7e-4+r()*45e-5,oe=Math.min(1,.5+U*.38+r()*.22),ne=z>.045?3:z>.018?2:1;let ie=L,de=u(L,F);for(let Oe=1;Oe<=ne;Oe++){const Et=Oe/ne;let it=Yo(L,E,Et);if(Oe<ne){const To=(r()-.5)*Math.min(.0032,z*.08);it=A(it,X(G,To))}const ro=Math.max(de+.006,u(it,F));n.push({a:ie,b:it,faceN:m.n,wa:Q,wb:Q,ta:de,tb:ro,slant:D+(Oe-1)*.18,boldness:oe}),ie=it,de=ro}if(z>.016&&r()<.34){const Oe=H(b,B),Et=se(Oe);if(Et>.008){const it=q(A(X(Oe,1/Et),X(R,(r()-.5)*.7))),ro=Math.min(Et*.65,.008+r()*.018),To=A(B,X(it,ro)),rs=u(B,F)+.018;n.push({a:B,b:To,faceN:m.n,wa:Q*.68,wb:Q*.14,ta:rs,tb:rs+.045+r()*.035,slant:-D,boldness:oe*.7})}}}if(!(Math.abs(te(m.n,e))>.96))for(let P=0;P<d;P++){const S=f[P],M=f[(P+1)%d],z=Math.abs(te(e,S)-s),B=Math.abs(te(e,M)-s);if(z<.003&&B<.003){if(se(H(M,S))<.004)continue;const C=c(S),x=c(M),T=`cut:${C<x?`${C}|${x}`:`${x}|${C}`}`;if(i.has(T))continue;i.add(T),n.push({a:S,b:M,faceN:m.n,wa:.002,wb:.002,ta:0,tb:.022,slant:(r()-.5)*1.4,boldness:.95})}}}return n}function an(o){const t=new Float32Array(o.length*6*10);let e=0;for(const s of o){const a=H(s.b,s.a),r=se(a);if(r<1e-5)continue;const n=[a[0]/r,a[1]/r,a[2]/r],i=q(ke(s.faceN,n)),l=X(s.faceN,5e-4),c=A(A(s.a,l),X(i,-s.wa)),u=A(A(s.a,l),X(i,s.wa)),y=A(A(s.b,l),X(i,-s.wb)),g=A(A(s.b,l),X(i,s.wb)),[m,f,d]=s.faceN,h=(v,p,b)=>{t[e++]=v[0],t[e++]=v[1],t[e++]=v[2],t[e++]=m,t[e++]=f,t[e++]=d,t[e++]=p,t[e++]=b,t[e++]=s.slant,t[e++]=s.boldness};h(c,-1,s.ta),h(u,1,s.ta),h(g,1,s.tb),h(c,-1,s.ta),h(g,1,s.tb),h(y,-1,s.tb)}return t.subarray(0,e)}function Dt(o){let t=0;for(const a of o.faces)a.verts.length>=3&&(t+=a.verts.length-2);const e=new Float32Array(t*3*6);let s=0;for(const a of o.faces){const r=a.verts;if(r.length<3)continue;const n=!!a.outer,[i,l,c]=a.n,u=r[0];for(let y=1;y<r.length-1;y++){const g=r[y],m=r[y+1];for(const f of[u,g,m]){const d=n?q(f):[i,l,c];e[s++]=f[0],e[s++]=f[1],e[s++]=f[2],e[s++]=d[0],e[s++]=d[1],e[s++]=d[2]}}}return e}function rn(o){let t=0;for(const a of o)a.verts.length>=3&&(t+=a.verts.length*2);const e=new Float32Array(t*3*8);let s=0;for(let a=0;a<o.length;a++){const r=o[a],n=r.verts,i=n.length;if(i<3)continue;const[l,c,u]=r.n;let y=0,g=0,m=0;for(const f of n)y+=f[0],g+=f[1],m+=f[2];y/=i,g/=i,m/=i;for(let f=0;f<i;f++){const d=n[f],h=n[(f+1)%i];e[s++]=y,e[s++]=g,e[s++]=m,e[s++]=l,e[s++]=c,e[s++]=u,e[s++]=r.delay,e[s++]=0,e[s++]=d[0],e[s++]=d[1],e[s++]=d[2],e[s++]=l,e[s++]=c,e[s++]=u,e[s++]=r.delay,e[s++]=1,e[s++]=h[0],e[s++]=h[1],e[s++]=h[2],e[s++]=l,e[s++]=c,e[s++]=u,e[s++]=r.delay,e[s++]=1,e[s++]=y,e[s++]=g,e[s++]=m,e[s++]=-l,e[s++]=-c,e[s++]=-u,e[s++]=r.delay,e[s++]=0,e[s++]=h[0],e[s++]=h[1],e[s++]=h[2],e[s++]=-l,e[s++]=-c,e[s++]=-u,e[s++]=r.delay,e[s++]=1,e[s++]=d[0],e[s++]=d[1],e[s++]=d[2],e[s++]=-l,e[s++]=-c,e[s++]=-u,e[s++]=r.delay,e[s++]=1}}return e}function Vs(o,t){let e=0;for(const r of o)for(const n of r.poly.faces)n.verts.length>=3&&(e+=n.verts.length-2);const s=new Float32Array(e*3*10);let a=0;for(let r=0;r<o.length;r++){const n=o[r],[i,l,c]=n.centroid,u=t+r;for(const y of n.poly.faces){const g=y.verts;if(g.length<3)continue;const m=!!y.outer,[f,d,h]=y.n,v=g[0];for(let p=1;p<g.length-1;p++){const b=g[p],w=g[p+1];for(const P of[v,b,w]){const S=m?q(P):[f,d,h];s[a++]=P[0]-i,s[a++]=P[1]-l,s[a++]=P[2]-c,s[a++]=S[0],s[a++]=S[1],s[a++]=S[2],s[a++]=P[0],s[a++]=P[1],s[a++]=P[2],s[a++]=u}}}}return s}const ln=[{id:"free",label:"Free",group:"mode"},{id:"gem",label:"Gem",group:"shape"},{id:"vase",label:"Vase",group:"shape"},{id:"crystal",label:"Crystal",group:"shape"},{id:"prism",label:"Prism",group:"shape"},{id:"A",label:"A",group:"letter"},{id:"S",label:"S",group:"letter"},{id:"O",label:"O",group:"letter"},{id:"V",label:"V",group:"letter"},{id:"X",label:"X",group:"letter"},{id:"H",label:"H",group:"letter"},{id:"T",label:"T",group:"letter"},{id:"M",label:"M",group:"letter"},{id:"K",label:"K",group:"letter"},{id:"E",label:"E",group:"letter"},{id:"C",label:"C",group:"letter"},{id:"Z",label:"Z",group:"letter"},{id:"2",label:"2",group:"letter"}];function Z(o,t){let e=0;for(let r=0;r<o.length;r++){const n=o[r],i=o[(r+1)%o.length];e+=n[0]*i[1]-i[0]*n[1]}const s=e<0?[...o].reverse():o,a=[];a.push({n:[0,0,1],d:t,verts:s.map(([r,n])=>[r,n,t])}),a.push({n:[0,0,-1],d:t,verts:[...s].reverse().map(([r,n])=>[r,n,-t])});for(let r=0;r<s.length;r++){const[n,i]=s[r],[l,c]=s[(r+1)%s.length],u=l-n,y=c-i,g=Math.hypot(u,y);if(g<1e-5)continue;const m=y/g,f=-u/g,d=[m,f,0],h=m*n+f*i,v=[[n,i,-t],[l,c,-t],[l,c,t],[n,i,t]],p=H(v[1],v[0]),b=H(v[2],v[0]);te(ke(p,b),d)<0&&v.reverse(),a.push({n:d,d:h,verts:v})}return Qo(a)}function O(o,t,e,s,a){return Z([[o,t],[e,t],[e,s],[o,s]],a)}function lt(o,t){let e=o;for(const s of t){if(!e)break;e=Lt(e,s.n,s.d,!1)}return e??o}function _(o,t,e,s){return{n:q([o,t,e]),d:s}}function Re(o,t,e,s){return{kind:"plane",planes:[_(o,t,e,s),_(-o,t,e,s)]}}function Mt(o,t,e,s){return{kind:"plane",planes:[_(o,t,e,s),_(o,t,-e,s)]}}function Pe(o,t,e,s){return{kind:"plane",planes:[_(o,t,e,s),_(-o,t,-e,s)]}}function Ce(o,t,e,s,a){const r=[Mt(0,0,1,t),...e];for(let n=0;n<a.length;n++){const i=a[n],l=[...s];for(let c=n+1;c<a.length;c++)for(const u of a[c])l.push(u.poly);r.push({kind:"pockets",chunks:i,nextParts:l})}return{id:o,steps:r}}function Ls(o){if(o==="free")return null;if(o==="gem")return{id:o,steps:[Re(1,.85,0,.24),Mt(0,.85,1,.24),Pe(1,.9,1,.25),Pe(1,.9,-1,.25),Re(1,-.78,0,.22),Mt(0,-.78,1,.22),Pe(1,-.82,1,.23),Pe(1,-.82,-1,.23),{kind:"plane",planes:[_(0,1,0,.21)]}]};if(o==="vase")return{id:o,steps:[Re(1,0,0,.175),Mt(0,0,1,.165),Pe(1,0,1,.205),Pe(1,0,-1,.205),Re(.82,-.58,0,.215),Mt(0,-.58,.82,.21),Pe(.7,-.7,.7,.225),Pe(.7,-.7,-.7,.225)]};if(o==="crystal")return{id:o,steps:[Pe(1,.95,1,.235),Pe(1,.95,-1,.235),Pe(1,-.95,1,.235),Pe(1,-.95,-1,.235),Re(1,0,0,.23),Mt(0,0,1,.23)]};if(o==="prism"){const g=Math.cos(Math.PI/6),m=Math.sin(Math.PI/6);return{id:o,steps:[Re(1,0,0,.22),Pe(m,0,g,.22),Pe(-m,0,g,.22),Re(.65,.76,0,.28),Re(.65,-.76,0,.28)]}}const t=.24,e=.29,s=.11,a=Re(1,0,0,t);if(o==="H"){const f=t-.088,d=[O(-t,-e,-f,e,s),O(f,-e,t,e,s),O(-f,-.046,f,.046,s)],h=O(-f,.046,f,e,s),v=O(-f,-e,f,-.046,s);return Ce(o,s,[a],d,[[{poly:h,pushDir:[0,1,.2],cutPlane:_(0,1,0,.046)},{poly:v,pushDir:[0,-1,.2],cutPlane:_(0,-1,0,.046)}]])}if(o==="T"){const g=e-.105,m=.056,f=[O(-t,g,t,e,s),O(-m,-e,m,g,s)],d=O(-t,-e,-m,g,s),h=O(m,-e,t,g,s);return Ce(o,s,[a],f,[[{poly:d,pushDir:[-1,-.25,.15],cutPlane:_(-1,0,0,m)},{poly:h,pushDir:[1,-.25,.15],cutPlane:_(1,0,0,m)}]])}if(o==="V"){const f=t-.072,d=2*e,h=Math.hypot(d,f),v=d/h,p=-f/h,b=v*t+p*e,w=[Z([[-t,e],[-t+.095,e],[0,-e+.115],[0,-e],[-.072,-e]],s),Z([[t-.095,e],[t,e],[.072,-e],[0,-e],[0,-e+.115]],s)],P=Z([[-t+.095,e],[t-.095,e],[0,-e+.115]],s);return Ce(o,s,[a,Re(v,p,0,b)],w,[[{poly:P,pushDir:[0,1,.25],cutPlane:_(0,1,0,0)}]])}if(o==="A"){const h=t-.072,v=2*e,p=Math.hypot(v,h),b=v/p,w=h/p,P=b*.072+w*e,S=k=>.072+(e-k)/(2*e)*(t-.072),M=t-.092,z=S(-.105)-.092*.92,B=S(-.02)-.092*.92,V=.145,C=[Z([[-t,-e],[-M,-e],[-.072+.012,e],[-.072,e]],s),Z([[M,-e],[t,-e],[.072,e],[.072-.012,e]],s),Z([[-z-.02,-.105],[z+.02,-.105],[B+.02,-.02],[-B-.02,-.02]],s),Z([[-.072,e],[.072,e],[0,V]],s)],x=Z([[-M,-e],[M,-e],[z,-.105],[-z,-.105]],s),T=Z([[-B,-.02],[B,-.02],[0,V]],s);return Ce(o,s,[a,Re(b,w,0,P)],C,[[{poly:x,pushDir:[0,-1,.25],cutPlane:_(0,-1,0,.105)}],[{poly:T,pushDir:[0,.15,1],cutPlane:_(0,0,1,0)}]])}if(o==="X"){const d=[Z([[-t,e],[-t+.088,e],[0,.082],[-.068,0]],s),Z([[t-.088,e],[t,e],[.068,0],[0,.082]],s),Z([[-.068,0],[0,-.082],[-t+.088,-e],[-t,-e]],s),Z([[0,-.082],[.068,0],[t,-e],[t-.088,-e]],s),Z([[0,.082],[.068,0],[0,-.082],[-.068,0]],s)],h=Z([[-t,-e],[-.068,0],[-t,e]],s),v=Z([[t,e],[.068,0],[t,-e]],s),p=Z([[-t+.088,e],[t-.088,e],[0,.082]],s),b=Z([[-t+.088,-e],[0,-.082],[t-.088,-e]],s);return Ce(o,s,[a],d,[[{poly:h,pushDir:[-1,0,.2],cutPlane:_(-1,0,0,.068)},{poly:v,pushDir:[1,0,.2],cutPlane:_(1,0,0,.068)}],[{poly:p,pushDir:[0,1,.2],cutPlane:_(0,1,0,.082)},{poly:b,pushDir:[0,-1,.2],cutPlane:_(0,-1,0,.082)}]])}if(o==="O"){const f=t-.088,d=e-.095,h=.095,v=[_(1,1,0,(t+e-h)*Math.SQRT1_2),_(-1,1,0,(t+e-h)*Math.SQRT1_2),_(1,-1,0,(t+e-h)*Math.SQRT1_2),_(-1,-1,0,(t+e-h)*Math.SQRT1_2)],p=[lt(O(-t,d,t,e,s),v),lt(O(-t,-e,t,-d,s),v),O(-t,-d,-f,d,s),O(f,-d,t,d,s)],b=O(-f,-d,f,d,s);return Ce(o,s,[a,{kind:"plane",planes:[v[0],v[3]]},{kind:"plane",planes:[v[1],v[2]]}],p,[[{poly:b,pushDir:[0,.2,1],cutPlane:_(0,0,1,0)}]])}if(o==="C"){const m=e-.098,f=.09,d=[_(-1,1,0,(t+e-f)*Math.SQRT1_2),_(-1,-1,0,(t+e-f)*Math.SQRT1_2)],h=[lt(O(-t,m,t,e,s),d),lt(O(-t,-e,t,-m,s),d),O(-t,-m,-.148,m,s)],v=O(-.148,-m,t,m,s);return Ce(o,s,[a,{kind:"plane",planes:d}],h,[[{poly:v,pushDir:[1,0,.2],cutPlane:_(1,0,0,-.148)}]])}if(o==="E"){const d=-t+.09,h=[O(-t,-e,d,e,s),O(d,e-.088,t,e,s),O(d,-.044,t-.03,.044,s),O(d,-e,t,-e+.088,s)],v=O(d,.044,t,e-.088,s),p=O(d,-e+.088,t,-.044,s);return Ce(o,s,[a],h,[[{poly:v,pushDir:[1,.35,.2],cutPlane:_(1,0,0,d)},{poly:p,pushDir:[1,-.35,.2],cutPlane:_(1,0,0,d)}]])}if(o==="S"||o==="2"){const h=[_(1,1,0,(t+e-.075)*Math.SQRT1_2),_(-1,1,0,(t+e-.075)*Math.SQRT1_2),_(1,-1,0,(t+e-.075)*Math.SQRT1_2),_(-1,-1,0,(t+e-.075)*Math.SQRT1_2)];if(o==="S"){const v=[lt(O(-t,e-.086,t,e,s),h),O(-t,.044,-t+.092,e-.086,s),O(-t,-.044,t,.044,s),O(t-.092,-e+.086,t,-.044,s),lt(O(-t,-e,t,-e+.086,s),h)],p=O(-t+.092,.044,t,e-.086,s),b=O(-t,-e+.086,t-.092,-.044,s);return Ce(o,s,[a,{kind:"plane",planes:[h[0],h[3]]},{kind:"plane",planes:[h[1],h[2]]}],v,[[{poly:p,pushDir:[1,.25,.2],cutPlane:_(1,0,0,-t+.092)},{poly:b,pushDir:[-1,-.25,.2],cutPlane:_(-1,0,0,-.148)}]])}else{const v=[lt(O(-t,e-.086,t,e,s),h),O(t-.092,.044,t,e-.086,s),O(-t,-.044,t,.044,s),O(-t,-e+.086,-t+.092,-.044,s),O(-t,-e,t,-e+.086,s)],p=O(-t,.044,t-.092,e-.086,s),b=O(-t+.092,-e+.086,t,-.044,s);return Ce(o,s,[a,{kind:"plane",planes:[h[0],h[1]]}],v,[[{poly:p,pushDir:[-1,.25,.2],cutPlane:_(-1,0,0,-.148)},{poly:b,pushDir:[1,-.25,.2],cutPlane:_(1,0,0,-t+.092)}]])}}if(o==="Z"){const f=e-.088,d=-e+.088,h=[O(-t,f,t,e,s),O(-t,-e,t,d,s),Z([[t-.11,f],[t,f],[-t+.11,d],[-t,d]],s)],v=Z([[-t,d],[-t,f],[t-.11,f]],s),p=Z([[-t+.11,d],[t,d],[t,f]],s);return Ce(o,s,[a],h,[[{poly:v,pushDir:[-1,.35,.2],cutPlane:_(-1,.4,0,0)},{poly:p,pushDir:[1,-.35,.2],cutPlane:_(1,-.4,0,0)}]])}if(o==="M"){const m=t-.082,f=-.04,d=[O(-t,-e,-m,e,s),O(m,-e,t,e,s),Z([[-m,e],[-m+.055,e],[0,f+.095],[0,f],[-m,e-.13]],s),Z([[m-.055,e],[m,e],[m,e-.13],[0,f],[0,f+.095]],s)],h=Z([[-m+.055,e],[m-.055,e],[0,f+.095]],s),v=Z([[-m,-e],[0,-e],[0,f],[-m,e-.13]],s),p=Z([[0,-e],[m,-e],[m,e-.13],[0,f]],s);return Ce(o,s,[a],d,[[{poly:h,pushDir:[0,1,.25],cutPlane:_(0,1,0,f+.095)}],[{poly:v,pushDir:[-.45,-1,.2],cutPlane:_(0,-1,0,-f)},{poly:p,pushDir:[.45,-1,.2],cutPlane:_(0,-1,0,-f)}]])}const n=-t+.092,i=.1,l=[O(-t,-e,n,e,s),Z([[n,-.02],[t-i,e],[t,e],[n+.065,0]],s),Z([[n,.02],[n+.065,0],[t,-e],[t-i,-e]],s)],c=Z([[n,0],[n,e],[t-i,e]],s),u=Z([[n,-e],[t-i,-e],[n,0]],s),y=Z([[n+.065,0],[t,-e],[t,e]],s);return Ce(o,s,[a],l,[[{poly:c,pushDir:[.25,1,.2],cutPlane:_(0,1,0,0)},{poly:u,pushDir:[.25,-1,.2],cutPlane:_(0,-1,0,0)}],[{poly:y,pushDir:[1,0,.2],cutPlane:_(1,0,0,n+.065)}]])}const Fo=-.82,cn=-.9,un=.18,fn=.23,cs=.22,zo=.04,us=.24;function dn(o,t){const e=o.lane*t,s=o.targetLane*t,a=Math.sqrt(2*o.gravity*(o.apex-Fo)),r=a/o.gravity,n=(s-e)/Math.max(.25,r),i=a*a+2*o.gravity*(Fo-cn),l=(a+Math.sqrt(Math.max(0,i)))/o.gravity;return{th:o,x0:e,vx0:n,vy0:a,tEnd:o.time+l}}function fs(o,t){if(t<o.th.time||t>o.tEnd)return null;const e=t-o.th.time;return[o.x0+o.vx0*e,Fo+o.vy0*e-.5*o.th.gravity*e*e]}function hn(o,t,e,s,a,r){const n=a-e,i=r-s,l=n*n+i*i;if(l<1e-8)return Math.hypot(o-e,t-s);const c=Math.max(0,Math.min(1,((o-e)*n+(t-s)*i)/l));return Math.hypot(o-(e+n*c),t-(s+i*c))}const pn=Array.from({length:8},(o,t)=>{const e=t*Math.PI/8;return[Math.cos(e)*cs,Math.sin(e)*cs]});function mn(o,t){if(o.throws.length===0||o.clearCount<1)return{level:o.level,stageHalfW:t,reason:"No colored gems in level"};for(const n of o.throws){if(n.poisoned&&n.gemId!==1)return{level:o.level,stageHalfW:t,reason:`Poisoned gem has wrong gemId ${n.gemId}`};if(!n.poisoned&&(n.gemId<2||n.gemId>12))return{level:o.level,stageHalfW:t,reason:`Colored gem has invalid gemId ${n.gemId}`}}const e=o.throws.map(n=>dn(n,t)),s=e.filter(n=>n.th.poisoned),a=e.reduce((n,i)=>Math.max(n,i.tEnd),0);for(let n=0;n<=a;n+=.08){let i=0;for(const l of e)n>=l.th.time&&n<=l.tEnd&&i++;if(i>8)return{level:o.level,stageHalfW:t,reason:`Too many concurrent gems (${i}) at t=${n.toFixed(2)}s`}}const r=t*1.18+.05;for(let n=0;n<e.length;n++){const i=e[n];if(i.th.poisoned)continue;let l=0,c=0,u=0;for(let y=i.th.time;y<=i.tEnd;y+=zo){const g=fs(i,y);if(!g)continue;const[m,f]=g;if(f<un||Math.abs(m)>r){c=0;continue}u+=zo;const d=[];for(const v of s){const p=fs(v,y);p&&p[1]>=-.3&&d.push(p)}let h=d.length===0;if(!h)for(const[v,p]of pn){let b=!0;for(const[w,P]of d)if(hn(w,P,m-v,f-p,m+v,f+p)<fn){b=!1;break}if(b){h=!0;break}}h?(c+=zo,c>l&&(l=c)):c=0}if(u<.65)return{level:o.level,stageHalfW:t,reason:`Gem #${n} visible airtime too short (${u.toFixed(2)}s)`};if(l<us)return{level:o.level,stageHalfW:t,reason:`Gem #${n} (t=${i.th.time.toFixed(2)}s) blocked by Black Diamond (max safe window ${l.toFixed(2)}s < ${us}s)`}}return null}const wt=1e3,gn=[.88,.68,.56],Is=1,vn=[2,2,3,4,5,6,7,8,9,10,11,12],xn={1:[.04,.04,.05],2:[.95,.97,1],3:[.76,.36,.58],4:[.3,.74,.68],5:[.34,.54,.82],6:[.58,.42,.8],7:[.48,.56,.82],8:[.34,.72,.8],9:[.86,.72,.82],10:[.74,.84,.92],11:[.72,.88,.86],12:[.8,.74,.9]},bn={1:"#1c1c1c",2:"#1c1c1c",3:"#7d3962",4:"#296e68",5:"#355687",6:"#62458a",7:"#4d588f",8:"#2c6d7d",9:"#7a526e",10:"#4a6885",11:"#3f736e",12:"#635385"};function Vo(o,t,e){return o<t?t:o>e?e:o}function Ds(o){const t=Math.max(1,Math.min(wt,Math.floor(o)));if(t<=6)return Lo(t,0);for(let e=0;e<64;e++){const s=Lo(t,e);let a=!0;for(const r of gn)if(mn(s,r)!==null){a=!1;break}if(a)return s}return Lo(t,64)}function Lo(o,t){const e=Xo((o*2654435761^Math.imul(t+1,1367130551)^2654435769)>>>0),s=[],a=[...vn];let r=a.length;const n=()=>{if(r>=a.length){for(let u=a.length-1;u>0;u--){const y=Math.floor(e()*(u+1)),g=a[u];a[u]=a[y],a[y]=g}r=0}return a[r++]},i=u=>{const y=Vo(u.lane,-1.32,1.32),g=(-1.48+y)*.5,m=(1.48+y)*.5,f=Vo(u.targetLane,Math.max(-.78,g),Math.min(.78,m));s.push({...u,gemId:u.poisoned?Is:u.gemId??n(),lane:y,targetLane:f,apex:Vo(u.apex,.74,1.16),seed:Math.floor(e()*2147483647)})};if(o===1)i({time:.2,lane:-1.16,targetLane:.08,apex:.98,gravity:2.25,variant:1,poisoned:!1,gemId:5,spinSpeed:1.4});else if(o===2)i({time:.2,lane:-.18,targetLane:-.66,apex:1.08,gravity:2.3,variant:0,poisoned:!1,gemId:3,spinSpeed:1.45}),i({time:.25,lane:.18,targetLane:.66,apex:.88,gravity:2.3,variant:1,poisoned:!1,gemId:2,spinSpeed:1.45});else if(o===3)i({time:.2,lane:-1.24,targetLane:-.22,apex:1.04,gravity:2.38,variant:2,poisoned:!1,gemId:10,spinSpeed:1.5}),i({time:.26,lane:.76,targetLane:.64,apex:.84,gravity:2.38,variant:3,poisoned:!1,gemId:7,spinSpeed:1.5}),i({time:.78,lane:1.24,targetLane:-.06,apex:1.14,gravity:2.38,variant:1,poisoned:!1,gemId:6,spinSpeed:1.55}),i({time:2.55,lane:-1.2,targetLane:.1,apex:1.1,gravity:2.4,variant:0,poisoned:!1,gemId:9,spinSpeed:1.55}),i({time:2.68,lane:1.2,targetLane:-.1,apex:.88,gravity:2.4,variant:2,poisoned:!1,gemId:4,spinSpeed:1.55});else if(o===4)i({time:.2,lane:-1.2,targetLane:-.36,apex:1.1,gravity:2.42,variant:1,poisoned:!1,gemId:4,spinSpeed:1.45}),i({time:.34,lane:.88,targetLane:.58,apex:.78,gravity:2.42,variant:2,poisoned:!0,spinSpeed:1.65}),i({time:2.45,lane:-1.22,targetLane:-.48,apex:1.12,gravity:2.45,variant:0,poisoned:!1,gemId:2,spinSpeed:1.55}),i({time:2.52,lane:.08,targetLane:.48,apex:.92,gravity:2.45,variant:3,poisoned:!1,gemId:5,spinSpeed:1.55}),i({time:2.86,lane:1.16,targetLane:.62,apex:.76,gravity:2.45,variant:1,poisoned:!0,spinSpeed:1.7});else if(o===5)i({time:.2,lane:1.24,targetLane:.14,apex:.86,gravity:2.48,variant:0,poisoned:!1,gemId:3,spinSpeed:1.55}),i({time:.42,lane:.28,targetLane:-.22,apex:1.14,gravity:2.48,variant:1,poisoned:!1,gemId:11,spinSpeed:1.55}),i({time:.64,lane:-.68,targetLane:-.74,apex:.96,gravity:2.48,variant:2,poisoned:!1,gemId:8,spinSpeed:1.55}),i({time:2.65,lane:-1.22,targetLane:.08,apex:1.14,gravity:2.5,variant:3,poisoned:!1,gemId:12,spinSpeed:1.6}),i({time:2.7,lane:1.22,targetLane:-.08,apex:.94,gravity:2.5,variant:1,poisoned:!1,gemId:2,spinSpeed:1.6}),i({time:2.98,lane:-1.14,targetLane:-.64,apex:.76,gravity:2.5,variant:2,poisoned:!0,spinSpeed:1.75});else if(o===6)i({time:.2,lane:-1.22,targetLane:-.66,apex:.9,gravity:2.52,variant:0,poisoned:!1,gemId:3,spinSpeed:1.55}),i({time:.24,lane:-.16,targetLane:.06,apex:1.16,gravity:2.52,variant:1,poisoned:!1,gemId:2,spinSpeed:1.55}),i({time:.28,lane:1.22,targetLane:.66,apex:.84,gravity:2.52,variant:2,poisoned:!1,gemId:5,spinSpeed:1.55}),i({time:2.5,lane:1.24,targetLane:.12,apex:1.1,gravity:2.55,variant:3,poisoned:!1,gemId:9,spinSpeed:1.6}),i({time:2.74,lane:-.1,targetLane:-.64,apex:.94,gravity:2.55,variant:1,poisoned:!1,gemId:4,spinSpeed:1.6}),i({time:3.04,lane:1.16,targetLane:.66,apex:.76,gravity:2.55,variant:0,poisoned:!0,spinSpeed:1.8});else{const u=Math.min(1,Math.log1p(o-6)/Math.log1p(wt-6)),y=2.52+u*.98,g=o<14?2:o<35?3:o<110?4:o<350?5:6,m=2.35-u*.58;let f=.22,d=-1;const h=t>6?Math.min(.24,(t-6)*.025):0;for(let v=0;v<g;v++){let p=Math.floor(e()*6);p===d&&(p=(p+1+Math.floor(e()*5))%6),d=p;const b=Math.min(5,2+Math.floor(u*3.2+e()*1.3)),w=Math.max(2,b),P=.42+u*.46,S=t<16&&u>.48&&e()<.3,M=e()<P?S?2:1:0,z=w+M,B=new Set;if(M>0){const k=[];for(let L=0;L<z;L++)k.push(L);for(let L=k.length-1;L>0;L--){const E=Math.floor(e()*(L+1)),R=k[L];k[L]=k[E],k[E]=R}for(let L=0;L<M;L++)B.add(k[L])}const V=e()<.5?1:-1,C=Math.max(.16,.26-u*.08)+h;let x=f;const T=[-1.24,-.68,-.08,.58,1.24,-.96,.96];for(let k=T.length-1;k>0;k--){const L=Math.floor(e()*(k+1)),E=T[k];T[k]=T[L],T[L]=E}for(let k=0;k<z;k++){const L=B.has(k),E=z===1?.5:k/(z-1);let R=0,G=0,D=0,F=L?.74+e()*.08:.84+e()*.32;if(p===0)G=-V*(-.42+E*.84)+(e()-.5)*.1,D=-V*(-.74+E*1.48)+(e()-.5)*.08,R=L?.34+k*.05+h:k*.045,F=L?.74+e()*.06:.84+Math.sin(E*Math.PI)*.3+(e()-.5)*.06;else if(p===1)G=-V*(1.26-E*.36)+(e()-.5)*.08,D=V*(.28-E*.72)+(e()-.5)*.1,R=k*(C*1.35)+(L?.18:0),L&&(D=-V*(.5+e()*.2)),F=L?.74+e()*.06:1.12-E*.26+(e()-.5)*.06;else if(p===2){const Q=k%2===0?-V:V;G=Q*(.98+e()*.32),D=-Q*(.04+e()*.32),R=k%2*.06+Math.floor(k/2)*(C*1.35)+(L?.28:0),L&&(D=Q*(.5+e()*.22)),F=L?.74+e()*.06:.84+k%2*.22+e()*.1}else if(p===3){const Q=k%3;Q===0?(G=-.78-e()*.42,D=-.74+e()*.22,F=L?.74+e()*.06:.84+e()*.22):Q===1?(G=.78+e()*.42,D=.52+e()*.22,F=L?.74+e()*.06:.88+e()*.22):(G=(e()-.5)*.44,D=(e()-.5)*.36,F=L?.74+e()*.06:1.06+e()*.1),R=Math.floor(k/3)*(C*1.8)+k%3*.06+(L?.26:0)}else if(p===4){G=T[k%T.length]+(e()-.5)*.12;const Q=Math.abs(G)>.75?-Math.sign(G)*(.05+e()*.4):(e()<.5?-1:1)*(.35+e()*.38);D=L?Math.sign(G||1)*(.48+e()*.24):Q,R=k*(C*.8)+(L?.22:0),F=L?.74+e()*.06:.82+k*37%100/100*.34}else G=-V*(1.24-E*2.48)+(e()-.5)*.1,D=V*(-.64+E*1.28)+(e()-.5)*.12,R=k*(C*.92)+(L?.2:0),L&&(D=Math.sign(G||V)*(.5+e()*.22)),F=L?.74+e()*.06:k%2===0?1.04+e()*.12:.82+e()*.12;const U=f+R;U>x&&(x=U),i({time:U,lane:G,targetLane:D,apex:F,gravity:y,variant:Math.floor(e()*4),poisoned:L,spinSpeed:1.35+u*.9+e()*.65})}f=x+m}}s.sort((u,y)=>u.time-y.time);let l=0,c=0;for(const u of s)u.poisoned?c++:l++;return{level:o,throws:s,clearCount:l,poisonCount:c}}const Gt=[{id:"crystal",name:"Crystal",bottom:[.955,.968,.982],core:[.988,.993,.998],top:[.945,.962,.982],edge:[.64,.68,.74],density:.72},{id:"sommerso",name:"Sommerso",bottom:[.98,.2,.015],core:[.92,.88,.04],top:[.12,.44,.84],edge:[.03,.11,.28],density:3.6},{id:"solstice",name:"Solstice",bottom:[.96,.08,.24],core:[.98,.72,.08],top:[.08,.64,.74],edge:[.04,.15,.28],density:3.4},{id:"forest",name:"Verdigris",bottom:[.9,.44,.02],core:[.56,.88,.16],top:[.05,.44,.5],edge:[.02,.12,.2],density:3.5},{id:"cobalt",name:"Cobalt",bottom:[.72,.12,.78],core:[.96,.46,.54],top:[.12,.34,.92],edge:[.04,.08,.32],density:3.4}];function yn(o,t,e){const s=o[0]/Math.max(.01,t[0]),a=o[1]/Math.max(.01,t[1]),r=o[2]/Math.max(.01,t[2]),n=Math.min(1.5,Math.hypot(s,r)),i=ds(-.18,-.58,a+.16*n*n),l=Math.exp(-Math.pow((a+.08)/.48,2))*Math.exp(-n*n*.75),c=ds(-.25,.65,a);let u=e.top[0]*(.45+.55*c)+e.core[0]*l*.75,y=e.top[1]*(.45+.55*c)+e.core[1]*l*.75,g=e.top[2]*(.45+.55*c)+e.core[2]*l*.75;const m=Math.min(.88,l*.95);return u=u*(1-m)+e.core[0]*m,y=y*(1-m)+e.core[1]*m,g=g*(1-m)+e.core[2]*m,u=u*(1-i)+e.bottom[0]*i,y=y*(1-i)+e.bottom[1]*i,g=g*(1-i)+e.bottom[2]*i,[Math.min(1,Math.max(.02,u)),Math.min(1,Math.max(.02,y)),Math.min(1,Math.max(.02,g))]}function ds(o,t,e){const s=Math.max(0,Math.min(1,(e-o)/(t-o)));return s*s*(3-2*s)}const Ie=`
struct SceneUniforms {
  viewProj: mat4x4<f32>,
  invViewProj: mat4x4<f32>,
  camPos: vec4<f32>,        // xyz = eye, w = time
  lightDir: vec4<f32>,      // xyz = unit dir TO light, w = causticStrength
  blockCenter: vec4<f32>,   // xyz = world center, w = cutRadius
  blockQuat: vec4<f32>,     // xyzw = rotation quat
  halfSize: vec4<f32>,      // xyz = initial cube half extents, w = ior
  palBottom: vec4<f32>,     // rgb, w = density
  palCore: vec4<f32>,       // rgb, w = dispersion
  palTop: vec4<f32>,        // rgb, w = crackProgress
  palEdge: vec4<f32>,       // rgb, w = planeHover
  cutOffset: vec4<f32>,     // xyz = world offset of severed piece, w = hasCutPiece
  causticBounds: vec4<f32>, // x = minX, y = minZ, z = invSpan, w = floorY
  params: vec4<f32>,        // x = planeAlpha, y = canCut, z = exposure, w = dt
  cutQuat: vec4<f32>,       // xyzw = rotation quat of severed cracking piece(s)
  cutPlaneN: vec4<f32>,     // xyz = outward unit normal of primary cutting plane
  cutPlane2N: vec4<f32>,    // xyz = outward unit normal of 2nd symmetrical cutting plane, w = radius (<0 = hidden)
};

struct PolyPlanes {
  info: vec4<u32>,              // x = planeCount, y = isCutPiece (0 = main, 1 = cut chunk), z = 0, w = 0
  offset: vec4<f32>,            // xyz = world position when isCutPiece == 1
  quat: vec4<f32>,              // xyzw = world rotation quat when isCutPiece == 1
  planes: array<vec4<f32>, 64>, // xyz = outward normal in local cube space, w = d
};

struct ShardPose {
  pos: vec4<f32>,  // xyz = world pos, w = active (>0.5)
  quat: vec4<f32>, // xyzw = world quat
};

fn qRot(q: vec4<f32>, v: vec3<f32>) -> vec3<f32> {
  let t = 2.0 * cross(q.xyz, v);
  return v + q.w * t + cross(q.xyz, t);
}

fn qInvRot(q: vec4<f32>, v: vec3<f32>) -> vec3<f32> {
  let qc = vec4<f32>(-q.xyz, q.w);
  return qRot(qc, v);
}

/**
 * Venetian Sommerso 3D volumetric colour tint at a point inside the original glass cube.
 * Rich ruby-amber base, glowing chartreuse-gold inner vessel, smoky sapphire-blue upper glass.
 */
fn sommersoTint(localPos: vec3<f32>, u: SceneUniforms) -> vec3<f32> {
  let h = max(u.halfSize.xyz, vec3<f32>(0.05));
  let p = localPos / h; // approx -1..+1
  let r = length(p.xz);

  // Fiery amber/vermilion base wrapping up the bottom bevels
  let tBase = smoothstep(-0.18, -0.56, p.y + 0.15 * r * r);
  // Luminous chartreuse/golden inner belly (concentrated inside the block!)
  let dyCore = (p.y + 0.08) / 0.48;
  let tCore = exp(-dyCore * dyCore) * exp(-r * r * 0.65);
  // Smoky sapphire-blue upper body, deepening to rich navy near outer vertical edges
  let tTop = smoothstep(-0.20, 0.62, p.y);
  let tRim = smoothstep(0.52, 1.18, r) * smoothstep(-0.32, 0.38, p.y);

  var col = mix(u.palTop.rgb * 0.78 + vec3<f32>(0.20), u.palTop.rgb, tTop);
  col = mix(col, u.palEdge.rgb, tRim * 0.72);
  col = mix(col, u.palCore.rgb, clamp(tCore * 0.98, 0.0, 0.94));
  col = mix(col, u.palBottom.rgb, tBase);

  return clamp(col, vec3<f32>(0.02), vec3<f32>(0.98));
}

/** Beer-Lambert absorption coefficients sigma = -ln(tint) * density */
fn sommersoSigma(localPos: vec3<f32>, u: SceneUniforms) -> vec3<f32> {
  let tint = sommersoTint(localPos, u);
  return -log(max(tint, vec3<f32>(0.012))) * u.palBottom.w;
}

/**
 * Bright-field museum glass photography studio (no walls: pure white luminous cyclorama,
 * sharp overhead & side softbox light strips, and crisp dark negative-fill side flags
 * that carve obsidian dark contours along steep glass facets just like the Murano reference!).
 */
fn sampleStudioEnv(ro: vec3<f32>, rd: vec3<f32>, u: SceneUniforms) -> vec3<f32> {
  let d = normalize(rd);

  // Luminous bright-field white studio cyclorama
  let upGrad = smoothstep(-0.18, 0.65, d.y);
  var col = mix(vec3<f32>(0.94, 0.938, 0.932), vec3<f32>(1.04, 1.04, 1.05), upGrad);

  // Crisp negative-fill dark studio flags on left & right (essential for clear crystal contrast!)
  let sideAbs = abs(d.x);
  let flagLeftRight = smoothstep(0.50, 0.68, sideAbs) * smoothstep(-0.28, 0.10, d.y) * smoothstep(0.84, 0.42, d.y);
  col = mix(col, vec3<f32>(0.018, 0.022, 0.032), flagLeftRight * 0.96);

  // Narrow secondary rear-side negative fill strip for internal bevel depth & chromatic fire
  let rearFlag = smoothstep(0.32, 0.54, sideAbs) * smoothstep(0.10, 0.52, -d.z) * smoothstep(-0.18, 0.22, d.y);
  col = mix(col, vec3<f32>(0.035, 0.042, 0.058), rearFlag * 0.80);

  // Crisp low dark negative-fill studio strip near horizon behind glass to outline clear crystal bases
  let lowBand = smoothstep(0.08, -0.02, d.y) * smoothstep(-0.28, -0.10, d.y) * smoothstep(0.05, 0.45, abs(d.x));
  col = mix(col, vec3<f32>(0.06, 0.07, 0.09), lowBand * 0.55);

  // Razor-sharp overhead softbox
  let topBox = smoothstep(0.74, 0.88, d.y) * smoothstep(0.56, 0.18, abs(d.x)) * smoothstep(0.58, 0.18, abs(d.z));
  col += vec3<f32>(2.4, 2.38, 2.35) * topBox;

  // Tall vertical left softbox window (creates the classic vertical glass reflection streak!)
  let vStrip = smoothstep(0.92, 0.975, dot(normalize(vec3<f32>(d.x, d.y * 0.25, d.z)), normalize(vec3<f32>(-0.56, 0.1, 0.82))))
               * smoothstep(-0.25, 0.05, d.y) * smoothstep(0.75, 0.45, d.y);
  col += vec3<f32>(2.6, 2.62, 2.68) * vStrip;

  // Front-left key studio softbox
  let keyDir = normalize(u.lightDir.xyz);
  let keyDot = max(0.0, dot(d, keyDir));
  col += vec3<f32>(1.8, 1.76, 1.68) * pow(keyDot, 28.0);
  col += vec3<f32>(3.8, 3.72, 3.60) * smoothstep(0.962, 0.990, keyDot);

  // Subtle right rim softbox for catching cut facets
  let rimDir = normalize(vec3<f32>(0.68, 0.42, 0.60));
  let rimDot = max(0.0, dot(d, rimDir));
  col += vec3<f32>(1.9, 1.92, 1.98) * smoothstep(0.945, 0.985, rimDot);

  // Matte white studio floor reflection when looking downward
  if (d.y < -0.005) {
    let tFloor = (u.causticBounds.w - ro.y) / d.y;
    if (tFloor > 0.0 && tFloor < 18.0) {
      let hit = ro + d * tFloor;
      let rFloor = length(hit.xz);
      let floorFade = exp(-rFloor * rFloor * 0.05);
      let floorCol = mix(vec3<f32>(0.96, 0.958, 0.952), vec3<f32>(0.88, 0.878, 0.872), floorFade * 0.5);
      let underBlock = exp(-dot(hit.xz - u.blockCenter.xz, hit.xz - u.blockCenter.xz) * 4.2);
      let shadedFloor = floorCol * (1.0 - underBlock * 0.22);
      col = mix(col, shadedFloor, smoothstep(-0.005, -0.08, d.y));
    }
  }

  return col;
}

fn fresnelSchlick(cosTheta: f32, f0: f32) -> f32 {
  let x = clamp(1.0 - cosTheta, 0.0, 1.0);
  let x2 = x * x;
  return f0 + (1.0 - f0) * (x2 * x2 * x);
}

fn studioGrade(hdr: vec3<f32>, exposure: f32) -> vec3<f32> {
  // High-key photographic tone curve: crisp deep darks, punchy saturated midtones, pure studio whites
  let c = max(vec3<f32>(0.0), hdr * exposure);
  let shoulder = (c * (1.0 + c * 0.12)) / (1.0 + c * 0.26);
  let srgb = pow(clamp(shoulder, vec3<f32>(0.0), vec3<f32>(1.0)), vec3<f32>(1.0 / 2.2));
  return srgb;
}

/**
 * Smooth 3D transparent-to-color crystal gradient mask [0 = crystal clear, 1 = deep jewel color].
 * Each gemstone has a slightly distinct optical axis & dip depth ("more or less" clear vs saturated)
 * like natural bicolored quartz/tourmaline or dipped Venetian Sommerso crystal.
 */
fn gemGradient(gemId: u32, p: vec3<f32>, u: SceneUniforms) -> f32 {
  let h = max(u.halfSize.xyz, vec3<f32>(0.05));
  let q = p / h; // approx -1..+1 in crystal local space
  let r2 = dot(q.xz, q.xz);

  // Per-gem tilted optical axis & dip window so gems show organic clear->color variation as they tumble
  var axis = vec3<f32>(0.18, -0.96, 0.14);
  var lo = -0.68;
  var hi = 0.58;
  if (gemId == 3u) {
    // Cool Rhodolite Ruby: clear crown melting smoothly into purplish crimson-berry
    axis = normalize(vec3<f32>(0.24, -0.95, 0.18));
    lo = -0.62;
    hi = 0.58;
  } else if (gemId == 4u) {
    // Cyan-Emerald: translucent clear diagonal fading into cool cyan-emerald tourmaline
    axis = normalize(vec3<f32>(-0.28, -0.92, 0.24));
    lo = -0.70;
    hi = 0.54;
  } else if (gemId == 5u) {
    // Sapphire: crystalline clear side sweeping into deep royal blue
    axis = normalize(vec3<f32>(0.36, -0.88, -0.26));
    lo = -0.56;
    hi = 0.62;
  } else if (gemId == 6u) {
    // Amethyst: natural quartz clear base growing into cool imperial violet point
    axis = normalize(vec3<f32>(-0.18, 0.96, 0.18));
    lo = -0.58;
    hi = 0.58;
  } else if (gemId == 7u) {
    // Tanzanite / Periwinkle: luminous clear crystal dipped in cool indigo-periwinkle
    axis = normalize(vec3<f32>(0.22, -0.94, -0.22));
    lo = -0.62;
    hi = 0.56;
  } else if (gemId == 8u) {
    // Aquamarine: icy clear crystal blushing into crisp glacial cyan
    axis = normalize(vec3<f32>(-0.32, 0.90, -0.24));
    lo = -0.52;
    hi = 0.64;
  } else if (gemId == 9u) {
    // Orchid-Mist Crystal: mostly water-clear glass with a cool rose-plum nudge at one end
    axis = normalize(vec3<f32>(0.34, -0.90, 0.24));
    lo = 0.08;
    hi = 0.95;
  } else if (gemId == 10u) {
    // Ice-Mist Crystal: mostly pure clear glass kissed with pale glacier blue along one tip
    axis = normalize(vec3<f32>(-0.38, 0.88, 0.22));
    lo = 0.10;
    hi = 0.96;
  } else if (gemId == 11u) {
    // Mint-Frost Crystal: luminous clear glass with a delicate icy cyan-mint blush at one corner
    axis = normalize(vec3<f32>(0.26, -0.92, -0.28));
    lo = 0.06;
    hi = 0.94;
  } else if (gemId == 12u) {
    // Lilac-Mist Crystal: water-clear quartz with a cool lavender-periwinkle whisper at the tip
    axis = normalize(vec3<f32>(-0.24, 0.94, -0.22));
    lo = 0.08;
    hi = 0.95;
  }

  // Subtle curved meniscus (like hand-dipped glass) keeps the gradient organic across faceted bevels
  let proj = dot(q, axis) + 0.10 * (r2 - 0.45);
  let t = smoothstep(lo, hi, proj);
  return pow(t, 1.12);
}

/**
 * Physical Beer-Lambert volumetric absorption sigma (m^-1) per gemstone ID (cool mineral spectrum):
 *  0 = Palette default (Sommerso/Crystal)
 *  2 = Pure Clear Diamond (100% transparent optical crystal)
 *  3 = Rhodolite Ruby (clear crystal -> cool purplish crimson-berry)
 *  4 = Cyan-Emerald (clear crystal -> cool cyan-green tourmaline)
 *  5 = Sapphire (clear crystal -> Ceylon royal blue)
 *  6 = Amethyst (clear crystal -> cool imperial violet)
 *  7 = Tanzanite (clear crystal -> cool indigo-periwinkle)
 *  8 = Aquamarine (clear crystal -> crisp glacial cyan)
 *  9 = Orchid-Mist Crystal (mostly transparent, cool rose-plum nudge)
 * 10 = Ice-Mist Crystal (mostly transparent, pale glacier-blue nudge)
 * 11 = Mint-Frost Crystal (mostly transparent, cool cyan-mint nudge)
 * 12 = Lilac-Mist Crystal (mostly transparent, cool lavender nudge)
 */
fn gemSigma(gemId: u32, p: vec3<f32>, u: SceneUniforms) -> vec3<f32> {
  if (gemId == 0u) { return sommersoSigma(p, u); }
  let clearSig = vec3<f32>(0.048, 0.044, 0.040);
  if (gemId == 2u) {
    // 100% pure water-clear crystal diamond (zero tint, pure refraction & chromatic dispersion)
    return clearSig;
  }
  var richSig = clearSig;
  if (gemId == 3u) { richSig = vec3<f32>(1.15, 4.65, 2.15); }      // Smoky Plum / Mauve-Wine
  else if (gemId == 4u) { richSig = vec3<f32>(4.80, 1.10, 1.45); } // Sea-Glass Teal / Fjord Spruce
  else if (gemId == 5u) { richSig = vec3<f32>(4.80, 2.55, 0.92); } // Arctic Slate-Cobalt
  else if (gemId == 6u) { richSig = vec3<f32>(2.15, 4.55, 1.25); } // Smoky Iris / Dusty Amethyst
  else if (gemId == 7u) { richSig = vec3<f32>(3.30, 2.75, 1.05); } // Storm Periwinkle
  else if (gemId == 8u) { richSig = vec3<f32>(4.35, 1.35, 0.95); } // Pale Glacier Petrol-Cyan
  else if (gemId == 9u) { richSig = vec3<f32>(0.55, 1.85, 0.95); } // Dusty Mauve-Mist
  else if (gemId == 10u) { richSig = vec3<f32>(1.80, 1.05, 0.42); }// Glacier-Slate Mist
  else if (gemId == 11u) { richSig = vec3<f32>(1.85, 0.55, 0.72); }// Sea-Glass Mist
  else if (gemId == 12u) { richSig = vec3<f32>(1.00, 1.80, 0.58); }// Smoke-Lilac Mist
  else { return sommersoSigma(p, u); }

  let g = gemGradient(gemId, p, u);
  return mix(clearSig, richSig, g);
}

/** Luminous transmission tint for colored gem caustics & razor bevel glints (inherits clear->color gradient). */
fn gemTint(gemId: u32, p: vec3<f32>, u: SceneUniforms) -> vec3<f32> {
  if (gemId == 0u) { return sommersoTint(p, u); }
  let clearTint = vec3<f32>(1.00, 1.00, 1.00);
  if (gemId == 2u) { return clearTint; }
  var richTint = clearTint;
  if (gemId == 3u) { richTint = vec3<f32>(0.84, 0.44, 0.68); }
  else if (gemId == 4u) { richTint = vec3<f32>(0.36, 0.82, 0.76); }
  else if (gemId == 5u) { richTint = vec3<f32>(0.42, 0.62, 0.88); }
  else if (gemId == 6u) { richTint = vec3<f32>(0.68, 0.50, 0.88); }
  else if (gemId == 7u) { richTint = vec3<f32>(0.56, 0.64, 0.88); }
  else if (gemId == 8u) { richTint = vec3<f32>(0.40, 0.80, 0.88); }
  else if (gemId == 9u) { richTint = vec3<f32>(0.90, 0.76, 0.86); }
  else if (gemId == 10u) { richTint = vec3<f32>(0.76, 0.86, 0.94); }
  else if (gemId == 11u) { richTint = vec3<f32>(0.74, 0.90, 0.88); }
  else if (gemId == 12u) { richTint = vec3<f32>(0.84, 0.78, 0.94); }
  else { return sommersoTint(p, u); }

  let g = gemGradient(gemId, p, u);
  let baseMix = select(0.15, 0.0, gemId >= 9u);
  return mix(clearTint, richTint, baseMix + (1.0 - baseMix) * g);
}
`,wn=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var causticTex: texture_2d<f32>;
@group(0) @binding(2) var causticSamp: sampler;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var pts = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>(3.0, -1.0),
    vec2<f32>(-1.0, 3.0)
  );
  var out: VSOut;
  out.pos = vec4<f32>(pts[vi], 0.9999, 1.0);
  out.uv = pts[vi] * 0.5 + 0.5;
  return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
  let ndc = vec2<f32>(in.uv.x * 2.0 - 1.0, in.uv.y * 2.0 - 1.0);
  let pNear = u.invViewProj * vec4<f32>(ndc, 0.0, 1.0);
  let pFar = u.invViewProj * vec4<f32>(ndc, 1.0, 1.0);
  let ro = pNear.xyz / pNear.w;
  let rd = normalize(pFar.xyz / pFar.w - ro);

  // Editorial pure vertical studio gradient:
  // crisp pastel Nordic sky-blue at top -> luminous ivory horizon center -> warm sand-porcelain cove floor
  let sy = clamp(in.uv.y, 0.0, 1.0);
  let topCol = vec3<f32>(0.46, 0.62, 0.88);    // crisp airy pastel sky-blue
  let midCol = vec3<f32>(0.98, 0.96, 0.935);   // luminous studio ivory horizon
  let botCol = vec3<f32>(0.86, 0.71, 0.62);    // warm cream-sand porcelain cove
  var col = mix(botCol, midCol, smoothstep(0.0, 0.46, sy));
  col = mix(col, topCol, smoothstep(0.50, 1.0, sy));

  if (rd.y < -0.002) {
    let t = (u.causticBounds.w - ro.y) / rd.y;
    if (t > 0.0 && t < 45.0) {
      let hit = ro + rd * t;
      let dist = length(hit.xz);

      let stageMask = exp(-dist * dist * 0.05);
      // Keep the floor seamlessly blended into the soft cyclorama gradient with subtle grounding warmth
      var floorCol = mix(col, col * vec3<f32>(0.975, 0.972, 0.968), stageMask * 0.72);

      let grain = fract(sin(dot(floor(hit.xz * 280.0), vec2<f32>(12.9898, 78.233))) * 43758.5453);
      floorCol *= 0.995 + 0.010 * grain;

      let cuv = (hit.xz - u.causticBounds.xy) * u.causticBounds.z;
      if (cuv.x > 0.005 && cuv.x < 0.995 && cuv.y > 0.005 && cuv.y < 0.995) {
        let texel = 1.0 / 1024.0;

        // Soft studio shadow penumbra (alpha channel)
        var shadow = 0.0;
        let rS = texel * 6.5;
        shadow += textureSampleLevel(causticTex, causticSamp, cuv, 0.0).a * 0.24;
        shadow += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(rS, 0.0), 0.0).a * 0.11;
        shadow += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(-rS, 0.0), 0.0).a * 0.11;
        shadow += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(0.0, rS), 0.0).a * 0.11;
        shadow += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(0.0, -rS), 0.0).a * 0.11;
        shadow += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(rS * 0.72, rS * 0.72), 0.0).a * 0.08;
        shadow += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(-rS * 0.72, rS * 0.72), 0.0).a * 0.08;
        shadow += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(rS * 0.72, -rS * 0.72), 0.0).a * 0.08;
        shadow += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(-rS * 0.72, -rS * 0.72), 0.0).a * 0.08;
        shadow = clamp(shadow, 0.0, 1.0);

        // Crisp chromatic caustic sample (rgb)
        let rC = texel * 1.6;
        var caust = textureSampleLevel(causticTex, causticSamp, cuv, 0.0).rgb * 0.44;
        caust += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(rC, 0.0), 0.0).rgb * 0.14;
        caust += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(-rC, 0.0), 0.0).rgb * 0.14;
        caust += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(0.0, rC), 0.0).rgb * 0.14;
        caust += textureSampleLevel(causticTex, causticSamp, cuv + vec2<f32>(0.0, -rC), 0.0).rgb * 0.14;

        let edgeFade = smoothstep(0.0, 0.06, cuv.x) * smoothstep(1.0, 0.94, cuv.x) *
                       smoothstep(0.0, 0.06, cuv.y) * smoothstep(1.0, 0.94, cuv.y);
        shadow *= edgeFade;
        caust *= edgeFade * u.lightDir.w;

        // Soft studio occlusion + vivid stained-glass transmission & bright caustic focus bands!
        let shadowFactor = 1.0 - shadow * 0.30;
        let maxC = max(max(caust.r, caust.g), max(caust.b, 0.001));
        let caustHue = caust / maxC;
        let caustLum = dot(caust, vec3<f32>(0.299, 0.587, 0.114));
        // Stained-glass tinting inside shadow + luminous chromatic ridges!
        let stainMix = clamp(caustLum * 0.72, 0.0, 0.72);
        let stained = mix(floorCol * shadowFactor, floorCol * mix(vec3<f32>(0.72), caustHue, 0.92), stainMix);
        // Focused hot caustic bands (where facets overlap!) glow vividly
        let hotspot = max(vec3<f32>(0.0), caust - vec3<f32>(0.18));
        floorCol = stained + caust * 0.32 + hotspot * 0.65;
      }

      // Soft ambient grounding shadow under suspended block (fades out cleanly when block is below frame)
      let underDist = length(hit.xz - u.blockCenter.xz);
      let blockAbove = smoothstep(-0.15, 0.25, u.blockCenter.y);
      let ao = exp(-underDist * underDist * 4.2) * 0.095 * blockAbove;
      floorCol *= (1.0 - ao);

      let farFade = smoothstep(3.6, 10.5, dist);
      col = mix(floorCol, col, farFade);
    }
  }

  // Tiny interleaved-gradient-noise dither eliminates 8-bit banding across soft studio gradients
  let ign = fract(52.9829189 * fract(dot(in.pos.xy, vec2<f32>(0.06711056, 0.00583715))));
  let graded = clamp(studioGrade(col, u.params.z) + vec3<f32>((ign - 0.5) / 255.0), vec3<f32>(0.0), vec3<f32>(1.0));
  return vec4<f32>(graded, 1.0);
}
`,Pn=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var<storage, read> poses: array<ShardPose>;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) color: vec3<f32>,
  @location(1) alpha: f32,
  @location(2) localPos: vec3<f32>,
};

fn projectFloorNDC(xz: vec2<f32>) -> vec2<f32> {
  let uv = (xz - u.causticBounds.xy) * u.causticBounds.z;
  return vec2<f32>(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0);
}

@vertex
fn vs_block(
  @location(0) localPos: vec3<f32>,
  @location(1) localNorm: vec3<f32>,
  @builtin(instance_index) inst: u32,
) -> VSOut {
  var out: VSOut;
  let wp = u.blockCenter.xyz + qRot(u.blockQuat, localPos);
  let wn = normalize(qRot(u.blockQuat, localNorm));
  let L = normalize(u.lightDir.xyz);
  let h = max(0.0, wp.y - u.causticBounds.w);
  let above = smoothstep(-0.12, 0.22, u.blockCenter.y);
  out.localPos = localPos;

  if (inst == 0u) {
    let t = h / max(0.14, L.y);
    let xz = wp.xz - L.xz * t;
    out.pos = vec4<f32>(projectFloorNDC(xz), 0.5, 1.0);
    out.color = vec3<f32>(0.0);
    out.alpha = 0.45 * above;
    return out;
  }

  let disp = u.palCore.w;
  var ior = u.halfSize.w;
  var mask = vec3<f32>(1.0, 0.0, 0.0);
  if (inst == 1u) {
    ior -= disp * 0.85;
    mask = vec3<f32>(1.0, 0.0, 0.0);
  } else if (inst == 2u) {
    mask = vec3<f32>(0.0, 1.0, 0.0);
  } else {
    ior += disp * 1.05;
    mask = vec3<f32>(0.0, 0.0, 1.0);
  }

  let nFacing = select(-wn, wn, dot(wn, L) > 0.0);
  var refr = refract(-L, nFacing, 1.0 / ior);
  if (length(refr) < 0.01) { refr = -L; }
  // Tight realistic caustic focusing around the shadow footprint
  let rayDir = normalize(mix(-L, refr, 0.92));
  let t = h / max(0.22, -rayDir.y);
  let xz = wp.xz + rayDir.xz * t;

  let tint = sommersoTint(localPos, u);
  let ndl = abs(dot(wn, L));
  let focusBoost = 0.25 + 0.75 * pow(1.0 - abs(ndl - 0.52), 2.0);
  let energy = focusBoost * (0.26 + 0.34 * ndl);

  out.pos = vec4<f32>(projectFloorNDC(xz), 0.5, 1.0);
  out.color = tint * mask * energy * 1.18 * above;
  out.alpha = 0.0;
  return out;
}

@vertex
fn vs_cut(
  @location(0) localPos: vec3<f32>,
  @location(1) localNorm: vec3<f32>,
  @builtin(instance_index) inst: u32,
) -> VSOut {
  var out: VSOut;
  let wp = u.blockCenter.xyz + u.cutOffset.xyz + qRot(u.cutQuat, localPos);
  let wn = normalize(qRot(u.cutQuat, localNorm));
  let L = normalize(u.lightDir.xyz);
  let h = max(0.0, wp.y - u.causticBounds.w);
  out.localPos = localPos;

  if (inst == 0u) {
    let t = h / max(0.14, L.y);
    let xz = wp.xz - L.xz * t;
    out.pos = vec4<f32>(projectFloorNDC(xz), 0.5, 1.0);
    out.color = vec3<f32>(0.0);
    out.alpha = 0.42;
    return out;
  }

  let disp = u.palCore.w;
  var ior = u.halfSize.w;
  var mask = vec3<f32>(1.0, 0.0, 0.0);
  if (inst == 1u) {
    ior -= disp * 0.85;
    mask = vec3<f32>(1.0, 0.0, 0.0);
  } else if (inst == 2u) {
    mask = vec3<f32>(0.0, 1.0, 0.0);
  } else {
    ior += disp * 1.05;
    mask = vec3<f32>(0.0, 0.0, 1.0);
  }

  let nFacing = select(-wn, wn, dot(wn, L) > 0.0);
  var refr = refract(-L, nFacing, 1.0 / ior);
  if (length(refr) < 0.01) { refr = -L; }
  let rayDir = normalize(mix(-L, refr, 0.92));
  let t = h / max(0.22, -rayDir.y);
  let xz = wp.xz + rayDir.xz * t;

  let tint = sommersoTint(localPos, u);
  let ndl = abs(dot(wn, L));
  let focusBoost = 0.25 + 0.75 * pow(1.0 - abs(ndl - 0.52), 2.0);
  let energy = focusBoost * (0.26 + 0.34 * ndl);

  out.pos = vec4<f32>(projectFloorNDC(xz), 0.5, 1.0);
  out.color = tint * mask * energy * 1.18;
  out.alpha = 0.0;
  return out;
}

@vertex
fn vs_shards(
  @location(0) relPos: vec3<f32>,
  @location(1) localNorm: vec3<f32>,
  @location(2) origPos: vec3<f32>,
  @location(3) shardIdF: f32,
  @builtin(instance_index) inst: u32,
) -> VSOut {
  var out: VSOut;
  let sid = u32(shardIdF + 0.5);
  let pose = poses[sid];
  out.localPos = origPos;
  if (pose.pos.w < 0.5) {
    out.pos = vec4<f32>(2.0, 2.0, 2.0, 1.0);
    out.color = vec3<f32>(0.0);
    out.alpha = 0.0;
    return out;
  }

  let wp = pose.pos.xyz + qRot(pose.quat, relPos);
  let wn = normalize(qRot(pose.quat, localNorm));
  let L = normalize(u.lightDir.xyz);
  let h = max(0.008, wp.y - u.causticBounds.w);

  if (inst == 0u) {
    let t = h / max(0.14, L.y);
    let xz = wp.xz - L.xz * t;
    out.pos = vec4<f32>(projectFloorNDC(xz), 0.5, 1.0);
    out.color = vec3<f32>(0.0);
    out.alpha = 0.32;
    return out;
  }

  let disp = u.palCore.w;
  var ior = u.halfSize.w;
  var mask = vec3<f32>(1.0, 0.0, 0.0);
  if (inst == 1u) {
    ior -= disp;
    mask = vec3<f32>(1.0, 0.0, 0.0);
  } else if (inst == 2u) {
    mask = vec3<f32>(0.0, 1.0, 0.0);
  } else {
    ior += disp * 1.15;
    mask = vec3<f32>(0.0, 0.0, 1.0);
  }

  let nFacing = select(-wn, wn, dot(wn, L) > 0.0);
  var refr = refract(-L, nFacing, 1.0 / ior);
  if (length(refr) < 0.01) { refr = -L; }
  let hEff = max(0.045, h + 0.03);
  let rayDir = normalize(mix(-L, refr, 1.18));
  let t = hEff / max(0.20, -rayDir.y);
  let xz = wp.xz + rayDir.xz * t;

  let gemId = u32(max(0.0, pose.pos.w - 0.5));
  let tint = gemTint(gemId, origPos, u);
  let ndl = abs(dot(wn, L));
  let energy = 0.30 + 0.58 * ndl;

  out.pos = vec4<f32>(projectFloorNDC(xz), 0.5, 1.0);
  // Poisoned black diamond shards (gemId == 1u) cast zero rainbow caustics — only dark obsidian shadows!
  out.color = select(tint * mask * energy * 1.15, vec3<f32>(0.0), gemId == 1u);
  out.alpha = 0.0;
  return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
  // Subtle organic optical caustic ribbon modulation so flat faces don't look like plain flat rectangles
  let wave = 0.78 + 0.34 * sin(in.localPos.x * 24.0 + in.localPos.z * 19.0) * cos(in.localPos.y * 22.0);
  return vec4<f32>(in.color * wave, in.alpha);
}
`,Sn=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var<uniform> poly: PolyPlanes;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) color: vec3<f32>,
  @location(1) alpha: f32,
  @location(2) localPos: vec3<f32>,
};

fn projectFloorNDC(xz: vec2<f32>) -> vec2<f32> {
  let uv = (xz - u.causticBounds.xy) * u.causticBounds.z;
  return vec2<f32>(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0);
}

@vertex
fn vs_cut(
  @location(0) localPos: vec3<f32>,
  @location(1) localNorm: vec3<f32>,
  @builtin(instance_index) inst: u32,
) -> VSOut {
  var out: VSOut;
  let wp = poly.offset.xyz + qRot(poly.quat, localPos);
  let wn = normalize(qRot(poly.quat, localNorm));
  let L = normalize(u.lightDir.xyz);
  let h = max(0.0, wp.y - u.causticBounds.w);
  let above = smoothstep(-0.12, 0.16, poly.offset.y);
  out.localPos = localPos;

  if (inst == 0u) {
    let t = h / max(0.14, L.y);
    let xz = wp.xz - L.xz * t;
    out.pos = vec4<f32>(projectFloorNDC(xz), 0.5, 1.0);
    out.color = vec3<f32>(0.0);
    // Poisoned black diamonds cast a darker, crisper shadow!
    let shadowAlpha = select(0.42, 0.78, poly.info.z == 1u);
    out.alpha = shadowAlpha * above;
    return out;
  }

  // Poisoned black diamonds absorb all light (zero prismatic floor caustics)
  if (poly.info.z == 1u) {
    out.pos = vec4<f32>(2.0, 2.0, 2.0, 1.0);
    out.color = vec3<f32>(0.0);
    out.alpha = 0.0;
    return out;
  }

  let disp = u.palCore.w;
  var ior = u.halfSize.w;
  var mask = vec3<f32>(1.0, 0.0, 0.0);
  if (inst == 1u) {
    ior -= disp * 0.85;
    mask = vec3<f32>(1.0, 0.0, 0.0);
  } else if (inst == 2u) {
    mask = vec3<f32>(0.0, 1.0, 0.0);
  } else {
    ior += disp * 1.05;
    mask = vec3<f32>(0.0, 0.0, 1.0);
  }

  let nFacing = select(-wn, wn, dot(wn, L) > 0.0);
  var refr = refract(-L, nFacing, 1.0 / ior);
  if (length(refr) < 0.01) { refr = -L; }
  let rayDir = normalize(mix(-L, refr, 0.92));
  let t = h / max(0.22, -rayDir.y);
  let xz = wp.xz + rayDir.xz * t;

  let tint = gemTint(poly.info.z, localPos, u);
  let ndl = abs(dot(wn, L));
  let focusBoost = 0.25 + 0.75 * pow(1.0 - abs(ndl - 0.52), 2.0);
  let energy = focusBoost * (0.26 + 0.34 * ndl);

  out.pos = vec4<f32>(projectFloorNDC(xz), 0.5, 1.0);
  out.color = tint * mask * energy * 1.24 * above;
  out.alpha = 0.0;
  return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
  let wave = 0.78 + 0.34 * sin(in.localPos.x * 24.0 + in.localPos.z * 19.0) * cos(in.localPos.y * 22.0);
  return vec4<f32>(in.color * wave, in.alpha);
}
`,Mn=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var<uniform> poly: PolyPlanes;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) worldPos: vec3<f32>,
  @location(1) worldNorm: vec3<f32>,
  @location(2) localPos: vec3<f32>,
  @location(3) localNorm: vec3<f32>,
};

@vertex
fn vs_main(
  @location(0) localPos: vec3<f32>,
  @location(1) localNorm: vec3<f32>,
) -> VSOut {
  var out: VSOut;
  let isCut = poly.info.y == 1u;
  let q = select(u.blockQuat, poly.quat, isCut);
  let basePos = select(u.blockCenter.xyz, poly.offset.xyz, isCut);
  let wp = basePos + qRot(q, localPos);
  let wn = normalize(qRot(q, localNorm));
  out.pos = u.viewProj * vec4<f32>(wp, 1.0);
  out.worldPos = wp;
  out.worldNorm = wn;
  out.localPos = localPos;
  out.localNorm = normalize(localNorm);
  return out;
}

struct Hit {
  t: f32,
  n: vec3<f32>,
  planeIdx: i32,
};

/** Exact ray exit from inside a convex polyhedron, ignoring skipPlane so corner bounces have zero seam dots. */
fn traceExit(ro: vec3<f32>, rd: vec3<f32>, skipPlane: i32) -> Hit {
  var bestT = 1e6;
  var bestN = rd;
  var bestIdx: i32 = -1;
  let count = poly.info.x;
  for (var i = 0u; i < count; i = i + 1u) {
    let ii = i32(i);
    if (ii == skipPlane) { continue; }
    let pl = poly.planes[i];
    let denom = dot(pl.xyz, rd);
    if (denom > 1e-6) {
      let t = (pl.w - dot(pl.xyz, ro)) / denom;
      if (t > -1e-4 && t < bestT) {
        bestT = max(0.0, t);
        bestN = pl.xyz;
        bestIdx = ii;
      }
    }
  }
  return Hit(bestT, bestN, bestIdx);
}

fn traceChannel(
  localRo: vec3<f32>,
  localInDir: vec3<f32>,
  localN: vec3<f32>,
  worldCenter: vec3<f32>,
  objQuat: vec4<f32>,
  ior: f32,
  ch: u32,
) -> f32 {
  var rd = refract(localInDir, localN, 1.0 / ior);
  if (length(rd) < 0.001) {
    let wRefl = qRot(objQuat, reflect(localInDir, localN));
    return sampleStudioEnv(worldCenter, wRefl, u)[ch];
  }
  rd = normalize(rd);
  var ro = localRo;
  var skip: i32 = -1;
  var throughput = 1.0;
  var accum = 0.0;

  for (var bounce = 0; bounce < 4; bounce = bounce + 1) {
    let h = traceExit(ro, rd, skip);
    if (h.planeIdx < 0 || h.t > 100.0) { break; }

    // 3-point Beer-Lambert volumetric integration through the gemstone / Sommerso body
    let p1 = ro + rd * (h.t * 0.22);
    let p2 = ro + rd * (h.t * 0.50);
    let p3 = ro + rd * (h.t * 0.78);
    let s1 = gemSigma(poly.info.z, p1, u)[ch];
    let s2 = gemSigma(poly.info.z, p2, u)[ch];
    let s3 = gemSigma(poly.info.z, p3, u)[ch];
    let avgSigma = (s1 + s2 * 1.4 + s3) / 3.4;
    throughput *= exp(-avgSigma * h.t);

    let hitP = ro + rd * h.t;
    let outN = normalize(h.n);

    let exitDir = refract(rd, -outN, ior);
    if (length(exitDir) < 0.001) {
      // Total Internal Reflection!
      rd = normalize(reflect(rd, -outN));
      ro = hitP;
      skip = h.planeIdx;
      throughput *= 0.95;
    } else {
      let cosOut = clamp(dot(rd, outN), 0.0, 1.0);
      let F = fresnelSchlick(cosOut, 0.048);
      let wExitPos = worldCenter + qRot(objQuat, hitP);
      let wExitDir = normalize(qRot(objQuat, exitDir));
      let env = sampleStudioEnv(wExitPos, wExitDir, u);
      accum += throughput * (1.0 - F) * env[ch];

      throughput *= F * 0.92;
      if (throughput < 0.015) { break; }
      rd = normalize(reflect(rd, -outN));
      ro = hitP;
      skip = h.planeIdx;
    }
  }

  if (throughput > 0.015) {
    let wDir = normalize(qRot(objQuat, rd));
    accum += throughput * sampleStudioEnv(worldCenter, wDir, u)[ch] * 0.30;
  }
  return accum;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
  let N = normalize(in.worldNorm);
  let V = normalize(u.camPos.xyz - in.worldPos);
  let inDirWorld = -V;
  let cosV = max(0.0, dot(N, V));
  let L = normalize(u.lightDir.xyz);
  let H = normalize(L + V);

  // Poisoned Black Diamond (poly.info.z == 1u): lethal jet-obsidian faceted diamond with mirror studio flashes!
  if (poly.info.z == 1u) {
    let F = fresnelSchlick(cosV, 0.17);
    let reflDir = reflect(inDirWorld, N);
    let envRefl = sampleStudioEnv(in.worldPos, reflDir, u);
    // High-contrast mirror reflection on flat diamond facets (crisp dark flags vs dazzling white softboxes!)
    let mirror = pow(max(envRefl, vec3<f32>(0.0)), vec3<f32>(1.85)) * 0.52;
    let ndl = max(0.0, dot(N, L));
    let edgeGrad = length(fwidth(in.worldNorm));
    let edgeGlint = clamp(edgeGrad * 2.8, 0.0, 1.0);
    let spec1 = pow(max(0.0, dot(N, H)), 260.0) * 4.2;
    let H2 = normalize(normalize(vec3<f32>(0.68, 0.42, 0.60)) + V);
    let spec2 = pow(max(0.0, dot(N, H2)), 140.0) * 1.8;
    let H3 = normalize(normalize(vec3<f32>(-0.55, 0.65, 0.50)) + V);
    let spec3 = pow(max(0.0, dot(N, H3)), 90.0) * 0.75;
    // Deep jet-black core with subtle cool graphite facet separation & whisper of crimson at extreme grazing angle
    let baseObsidian = vec3<f32>(0.004, 0.0045, 0.0065) + vec3<f32>(0.012, 0.013, 0.017) * ndl;
    let grazingEdge = pow(clamp(1.0 - cosV, 0.0, 1.0), 5.0) * vec3<f32>(0.18, 0.025, 0.045);
    let col = mix(baseObsidian, mirror, F * 0.92)
            + vec3<f32>(0.96, 0.98, 1.0) * (spec1 + spec2 + spec3)
            + vec3<f32>(0.55, 0.58, 0.64) * edgeGlint * (0.45 + 0.55 * F)
            + grazingEdge;
    // Tiny interleaved-gradient-noise dither eliminates 8-bit banding across soft studio gradients
  let ign = fract(52.9829189 * fract(dot(in.pos.xy, vec2<f32>(0.06711056, 0.00583715))));
  let graded = clamp(studioGrade(col, u.params.z) + vec3<f32>((ign - 0.5) / 255.0), vec3<f32>(0.0), vec3<f32>(1.0));
  return vec4<f32>(graded, 1.0);
  }

  let isCut = poly.info.y == 1u;
  let objQuat = select(u.blockQuat, poly.quat, isCut);
  let center = select(u.blockCenter.xyz, poly.offset.xyz, isCut);

  let localInDir = normalize(qInvRot(objQuat, inDirWorld));
  let localN = normalize(in.localNorm);

  let baseIor = u.halfSize.w;
  let disp = u.palCore.w;

  let rCol = traceChannel(in.localPos, localInDir, localN, center, objQuat, baseIor - disp, 0u);
  let gCol = traceChannel(in.localPos, localInDir, localN, center, objQuat, baseIor, 1u);
  let bCol = traceChannel(in.localPos, localInDir, localN, center, objQuat, baseIor + disp * 1.15, 2u);
  let refracted = vec3<f32>(rCol, gCol, bCol);

  // Crisp glossy Fresnel reflection of the bright-field studio softboxes & dark flags
  let F = fresnelSchlick(cosV, 0.052);
  let reflDir = reflect(inDirWorld, N);
  let reflected = sampleStudioEnv(in.worldPos, reflDir, u);

  // Sharp studio key specular highlight
  let spec = pow(max(0.0, dot(N, H)), 180.0) * 2.6;

  var col = mix(refracted, reflected, F * 0.94) + vec3<f32>(1.0, 0.99, 0.98) * spec;

  // Razor-sharp glowing score line(s) where the cutting plane(s) slice the glass
  if (poly.info.y == 0u && u.cutOffset.w < 0.5 && u.params.y > 0.5 && u.params.x > 0.5) {
    let relW = in.worldPos - u.blockCenter.xyz;
    let planeDist = dot(relW, normalize(u.cutPlaneN.xyz)) - u.blockCenter.w;
    var cutLine = exp(-abs(planeDist) * 320.0);
    var inOuter = planeDist > 0.0;
    if (u.cutPlane2N.w >= 0.0) {
      let planeDist2 = dot(relW, normalize(u.cutPlane2N.xyz)) - u.cutPlane2N.w;
      cutLine = max(cutLine, exp(-abs(planeDist2) * 320.0));
      inOuter = inOuter || (planeDist2 > 0.0);
    }
    col = mix(col, vec3<f32>(1.8, 1.85, 1.95), cutLine * 0.88);
    if (inOuter) {
      col = mix(col, col * vec3<f32>(1.05, 1.06, 1.09) + vec3<f32>(0.025), 0.30);
    }
  }

  // Tiny interleaved-gradient-noise dither eliminates 8-bit banding across soft studio gradients
  let ign = fract(52.9829189 * fract(dot(in.pos.xy, vec2<f32>(0.06711056, 0.00583715))));
  let graded = clamp(studioGrade(col, u.params.z) + vec3<f32>((ign - 0.5) / 255.0), vec3<f32>(0.0), vec3<f32>(1.0));
  return vec4<f32>(graded, 1.0);
}
`,kn=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var<uniform> poly: PolyPlanes;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) worldPos: vec3<f32>,
  @location(1) worldNorm: vec3<f32>,
  @location(2) localPos: vec3<f32>,
  @location(3) delay: f32,
  @location(4) edgeFlag: f32,
};

fn hash31(p: vec3<f32>) -> f32 {
  var q = fract(p * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

fn vnoise3(p: vec3<f32>) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let s = f * f * (3.0 - 2.0 * f);
  let n000 = hash31(i + vec3<f32>(0.0, 0.0, 0.0));
  let n100 = hash31(i + vec3<f32>(1.0, 0.0, 0.0));
  let n010 = hash31(i + vec3<f32>(0.0, 1.0, 0.0));
  let n110 = hash31(i + vec3<f32>(1.0, 1.0, 0.0));
  let n001 = hash31(i + vec3<f32>(0.0, 0.0, 1.0));
  let n101 = hash31(i + vec3<f32>(1.0, 0.0, 1.0));
  let n011 = hash31(i + vec3<f32>(0.0, 1.0, 1.0));
  let n111 = hash31(i + vec3<f32>(1.0, 1.0, 1.0));
  let nx00 = mix(n000, n100, s.x);
  let nx10 = mix(n010, n110, s.x);
  let nx01 = mix(n001, n101, s.x);
  let nx11 = mix(n011, n111, s.x);
  return mix(mix(nx00, nx10, s.y), mix(nx01, nx11, s.y), s.z);
}

@vertex
fn vs_main(
  @location(0) localPos: vec3<f32>,
  @location(1) localNorm: vec3<f32>,
  @location(2) delay: f32,
  @location(3) edgeFlag: f32,
) -> VSOut {
  var out: VSOut;
  let wp = poly.offset.xyz + qRot(poly.quat, localPos);
  let wn = normalize(qRot(poly.quat, localNorm));
  out.pos = u.viewProj * vec4<f32>(wp, 1.0);
  out.worldPos = wp;
  out.worldNorm = wn;
  out.localPos = localPos;
  out.delay = delay;
  out.edgeFlag = edgeFlag;
  return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
  // Subtle internal 3D Voronoi fracture planes sweeping outward from the cutting plane
  // in exact sync with the exterior shard fracture seams!
  let arrival = clamp(in.delay * 0.27, 0.0, 0.29);
  let tNow = u.palTop.w;
  if (tNow < arrival) {
    discard;
  }

  let age = tNow - arrival;
  // Progressive internal mirror brightening as air enters the widening 3D fracture planes
  let openUp = smoothstep(0.0, 0.22, age);
  let hp = in.localPos * 95.0;
  let hackle = vec3<f32>(
    vnoise3(hp) - 0.5,
    vnoise3(hp + vec3<f32>(17.3, 9.1, 4.7)) - 0.5,
    vnoise3(hp + vec3<f32>(5.2, 23.7, 13.9)) - 0.5
  );
  let N = normalize(in.worldNorm + hackle * 0.18);
  let V = normalize(u.camPos.xyz - in.worldPos);
  let ndv = abs(dot(N, V));

  let L = normalize(u.lightDir.xyz);
  let H = normalize(L + V);
  let spec = pow(max(0.0, abs(dot(N, H))), 96.0);
  let refl = sampleStudioEnv(in.worldPos, reflect(-V, N), u);
  let tint = sommersoTint(in.localPos, u);

  let tir = pow(clamp(1.0 - ndv, 0.0, 1.0), 3.0);
  let waveFlash = exp(-age / 0.045) * 0.38;

  let darkRefr = tint * 0.18;
  let mirrorCol = mix(darkRefr, refl * (0.58 + 0.42 * tint), 0.55) + vec3<f32>(1.8) * (spec + waveFlash);
  let alpha = clamp((0.012 + tir * (0.10 + 0.14 * openUp) + spec * 0.26 + waveFlash * 0.22), 0.0, 0.28);

  return vec4<f32>(studioGrade(mirrorCol, u.params.z), alpha);
}
`,Cn=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var<uniform> poly: PolyPlanes;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) worldPos: vec3<f32>,
  @location(1) worldNorm: vec3<f32>,
  @location(2) localPos: vec3<f32>,
  @location(3) across: f32,
  @location(4) crackTime: f32,
  @location(5) slant: f32,
  @location(6) boldness: f32,
};

fn hash21(p: vec2<f32>) -> f32 {
  var q = fract(p * vec2<f32>(123.34, 456.21));
  q += dot(q, q + 45.32);
  return fract(q.x * q.y);
}

fn vnoise2(p: vec2<f32>) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let s = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash21(i), hash21(i + vec2<f32>(1.0, 0.0)), s.x),
    mix(hash21(i + vec2<f32>(0.0, 1.0)), hash21(i + vec2<f32>(1.0, 1.0)), s.x),
    s.y
  );
}

@vertex
fn vs_main(
  @location(0) localPos: vec3<f32>,
  @location(1) localNorm: vec3<f32>,
  @location(2) across: f32,
  @location(3) crackTime: f32,
  @location(4) slant: f32,
  @location(5) boldness: f32,
) -> VSOut {
  var out: VSOut;
  let wp = poly.offset.xyz + qRot(poly.quat, localPos);
  let wn = normalize(qRot(poly.quat, localNorm));
  out.pos = u.viewProj * vec4<f32>(wp, 1.0);
  out.worldPos = wp;
  out.worldNorm = wn;
  out.localPos = localPos;
  out.across = across;
  out.crackTime = crackTime;
  out.slant = slant;
  out.boldness = boldness;
  return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
  // Directional fracture wave: Voronoi shard seams unzip outward from the cutting plane
  // and progressively widen + brighten with air-gap mirror sheen as breaking tension builds!
  let tNow = u.palTop.w;
  if (tNow < in.crackTime) {
    discard;
  }

  let age = tNow - in.crackTime;
  let openProg = smoothstep(0.0, 0.26, age); // 0 right as tip unzips -> 1 as cleft widens under tension
  let fw = max(0.06, fwidth(in.across));
  let sgn = select(-1.0, 1.0, in.slant >= 0.0);

  let chipCoord = in.localPos.xy * 460.0 + in.localPos.z * 380.0 + vec2<f32>(in.slant * 17.0, 0.0);
  let jag = (vnoise2(chipCoord * 0.65) - 0.5) * 0.24;
  // Crack starts razor-thin at the advancing tip and opens progressively wider!
  let widthGrow = 0.52 + 0.58 * openProg;
  let a = (in.across + jag) / widthGrow;

  // High-contrast double-walled crystal fracture seam:
  // crisp dark obsidian TIR cleft paired with view-dependent silver-white glints!
  let darkBand = 1.0 - smoothstep(0.05, 0.38 + fw, abs(a + sgn * 0.22));
  let whiteBand = 1.0 - smoothstep(0.04, 0.44 + fw, abs(a - sgn * 0.22));

  let N = normalize(in.worldNorm);
  let V = normalize(u.camPos.xyz - in.worldPos);
  // View-dependent slant glint: some seams flash dazzling silver-white, others sit dark obsidian TIR, shifting as the glass tumbles!
  let angleCatch = smoothstep(0.15, 0.92, sin(in.slant * 3.1 + dot(V, N) * 4.2 + in.localPos.y * 8.0) * 0.5 + 0.5);
  let glint = pow(vnoise2(chipCoord * 1.8 + V.xy * 12.0), 3.6);
  let tipFlash = exp(-age / 0.065);
  let spall = (1.0 - smoothstep(0.0, 1.0, abs(a))) * in.boldness * (0.20 + 0.80 * vnoise2(chipCoord * 1.4)) * (0.35 + 0.65 * openProg) * angleCatch;

  let tint = sommersoTint(in.localPos, u);
  let darkCol = tint * 0.08 + vec3<f32>(0.015, 0.020, 0.028);
  let whiteCol = vec3<f32>(1.45, 1.50, 1.58) + vec3<f32>(1.85) * (glint + tipFlash);

  let whiteWeight = clamp(whiteBand * (0.22 + 0.62 * angleCatch * (0.45 + 0.55 * openProg) + 0.75 * glint) + spall * 0.42 + tipFlash * 0.95, 0.0, 1.0);
  let darkWeight = darkBand * (0.88 - 0.35 * tipFlash);

  let totalA = clamp((max(whiteWeight, darkWeight) + spall * 0.22) * (0.62 + 0.38 * in.boldness), 0.0, 0.96);
  if (totalA < 0.02) { discard; }

  let mixRatio = whiteWeight / max(0.001, whiteWeight + darkWeight * 1.35);
  let col = mix(darkCol, whiteCol, mixRatio);

  return vec4<f32>(studioGrade(col, u.params.z), totalA);
}
`,Bn=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var<storage, read> poses: array<ShardPose>;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) worldPos: vec3<f32>,
  @location(1) worldNorm: vec3<f32>,
  @location(2) origPos: vec3<f32>,
};

@vertex
fn vs_main(
  @location(0) relPos: vec3<f32>,
  @location(1) localNorm: vec3<f32>,
  @location(2) origPos: vec3<f32>,
  @location(3) shardIdF: f32,
) -> VSOut {
  var out: VSOut;
  let sid = u32(shardIdF + 0.5);
  let pose = poses[sid];
  if (pose.pos.w < 0.5) {
    out.pos = vec4<f32>(2.0, 2.0, 2.0, 1.0);
    out.worldPos = vec3<f32>(0.0);
    out.worldNorm = vec3<f32>(0.0, 1.0, 0.0);
    out.origPos = origPos;
    return out;
  }

  let wp = pose.pos.xyz + qRot(pose.quat, relPos);
  let wn = normalize(qRot(pose.quat, localNorm));
  out.pos = u.viewProj * vec4<f32>(wp, 1.0);
  out.worldPos = wp;
  out.worldNorm = wn;
  out.origPos = origPos;
  return out;
}

/** Offscreen pass: stores nearest back-face world normal (rgb) and camera distance (a) for exact shard thickness & TIR! */
@fragment
fn fs_depth(in: VSOut) -> @location(0) vec4<f32> {
  let dist = length(u.camPos.xyz - in.worldPos);
  return vec4<f32>(normalize(in.worldNorm), dist);
}

/** Translucent internal back-facet pass drawn into main scene before shard front faces so crystal depth & interior edges show through! */
@fragment
fn fs_inner(in: VSOut) -> @location(0) vec4<f32> {
  let N = normalize(in.worldNorm);
  let V = normalize(u.camPos.xyz - in.worldPos);
  let ndv = abs(dot(N, V));
  let tint = sommersoTint(in.origPos, u);
  let refl = sampleStudioEnv(in.worldPos, reflect(-V, -N), u);

  // Back facets inside glass catch grazing TIR dark/jewel bands and bright softbox streaks
  let grazing = pow(clamp(1.0 - ndv, 0.0, 1.0), 1.9);
  let L = normalize(u.lightDir.xyz);
  let H = normalize(L + V);
  let spec = pow(max(0.0, abs(dot(N, H))), 80.0) * 1.4;

  let col = mix(tint * 0.45, refl * (0.45 + 0.55 * tint), 0.55) + vec3<f32>(1.15) * spec;
  let alpha = clamp(0.08 + grazing * 0.44 + spec * 0.25, 0.0, 0.62);
  return vec4<f32>(studioGrade(col, u.params.z), alpha);
}
`,Tn=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var<storage, read> poses: array<ShardPose>;
@group(0) @binding(2) var bgTex: texture_2d<f32>;
@group(0) @binding(3) var backTex: texture_2d<f32>;
@group(0) @binding(4) var linearSamp: sampler;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) worldPos: vec3<f32>,
  @location(1) worldNorm: vec3<f32>,
  @location(2) origPos: vec3<f32>,
  @location(3) relPos: vec3<f32>,
  @location(4) gemIdF: f32,
};

@vertex
fn vs_main(
  @location(0) relPos: vec3<f32>,
  @location(1) localNorm: vec3<f32>,
  @location(2) origPos: vec3<f32>,
  @location(3) shardIdF: f32,
) -> VSOut {
  var out: VSOut;
  let sid = u32(shardIdF + 0.5);
  let pose = poses[sid];
  if (pose.pos.w < 0.5) {
    out.pos = vec4<f32>(2.0, 2.0, 2.0, 1.0);
    out.worldPos = vec3<f32>(0.0);
    out.worldNorm = vec3<f32>(0.0, 1.0, 0.0);
    out.origPos = origPos;
    out.relPos = relPos;
    out.gemIdF = 0.0;
    return out;
  }

  let wp = pose.pos.xyz + qRot(pose.quat, relPos);
  let wn = normalize(qRot(pose.quat, localNorm));
  out.pos = u.viewProj * vec4<f32>(wp, 1.0);
  out.worldPos = wp;
  out.worldNorm = wn;
  out.origPos = origPos;
  out.relPos = relPos;
  out.gemIdF = max(0.0, floor(pose.pos.w - 0.5));
  return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
  // Compute implicit screen-space derivatives in UNIFORM control flow before branching on per-shard gemId!
  let edgeGrad = length(fwidth(in.worldNorm));
  let gemId = u32(in.gemIdF + 0.5);
  if (gemId == 1u) {
    let N = normalize(in.worldNorm);
    let V = normalize(u.camPos.xyz - in.worldPos);
    let cosV = max(0.0, dot(N, V));
    let F = fresnelSchlick(cosV, 0.17);
    let envRefl = sampleStudioEnv(in.worldPos, reflect(-V, N), u);
    let mirror = pow(max(envRefl, vec3<f32>(0.0)), vec3<f32>(1.8)) * 0.50;
    let L = normalize(u.lightDir.xyz);
    let H = normalize(L + V);
    let spec = pow(max(0.0, dot(N, H)), 220.0) * 3.6;
    let bevel = clamp(edgeGrad * 2.4, 0.0, 1.0) * 0.45;
    let col = mix(vec3<f32>(0.005, 0.005, 0.008), mirror, F * 0.9)
            + vec3<f32>(0.96, 0.98, 1.0) * spec
            + vec3<f32>(0.5, 0.52, 0.58) * bevel;
    // Tiny interleaved-gradient-noise dither eliminates 8-bit banding across soft studio gradients
  let ign = fract(52.9829189 * fract(dot(in.pos.xy, vec2<f32>(0.06711056, 0.00583715))));
  let graded = clamp(studioGrade(col, u.params.z) + vec3<f32>((ign - 0.5) / 255.0), vec3<f32>(0.0), vec3<f32>(1.0));
  return vec4<f32>(graded, 1.0);
  }
  // Subtle conchoidal fracture micro-ripple breaks flat plastic glare into real liquid-glass reflections
  let rp = in.origPos * 28.0 + in.relPos * 19.0;
  let ripple = vec3<f32>(
    sin(rp.y * 1.3 + rp.z * 0.9),
    cos(rp.z * 1.1 - rp.x * 1.4),
    sin(rp.x * 1.2 + rp.y * 0.8)
  ) * 0.032;
  let N = normalize(in.worldNorm + ripple);
  let V = normalize(u.camPos.xyz - in.worldPos);
  let inDir = -V;
  let cosV = max(0.0, dot(N, V));
  let F = fresnelSchlick(cosV, 0.052);

  // Sample exact back-face depth & normal from shardBackTex
  let dims = vec2<f32>(textureDimensions(bgTex));
  let screenUV = in.pos.xy / max(dims, vec2<f32>(1.0));
  let backSample = textureSampleLevel(backTex, linearSamp, screenUV, 0.0);
  let frontDist = length(u.camPos.xyz - in.worldPos);
  let hasBack = backSample.a > frontDist + 0.001;
  let rawThick = select(0.055, clamp(backSample.a - frontDist, 0.004, 0.34), hasBack);
  let backN = select(-N, normalize(backSample.rgb), hasBack && length(backSample.rgb) > 0.1);

  // First refraction: air -> glass
  let ior = u.halfSize.w;
  var rd1 = refract(inDir, N, 1.0 / ior);
  if (length(rd1) < 0.01) { rd1 = inDir; }
  rd1 = normalize(rd1);

  // Second refraction at the shard's actual back facet: glass -> air (or Total Internal Reflection!)
  let rd2 = refract(rd1, -backN, ior);
  let isTIR = length(rd2) < 0.01;

  // Beer-Lambert volumetric absorption scaled by TRUE geometric shard thickness!
  // Colored gemstone shards get a modest path boost so small scattered facets stay vibrant on the white studio floor.
  let sigma = gemSigma(gemId, in.origPos, u);
  let gemBoost = select(1.0, 1.65, gemId >= 3u && gemId <= 8u);
  let opticalPath = rawThick * (1.25 + 0.65 * (1.0 - cosV)) * gemBoost;
  let transmit = exp(-sigma * opticalPath);

  var refrCol: vec3<f32>;
  if (isTIR) {
    // True Total Internal Reflection inside the shard -> crisp dark jewel mirror + bright softbox glint!
    let tirDir = normalize(reflect(rd1, -backN));
    let tirEnv = sampleStudioEnv(in.worldPos, tirDir, u);
    // Longer internal bounce path intensifies the Murano glass jewel tone
    let deepAbsorb = exp(-sigma * (opticalPath * 1.9 + 0.06));
    refrCol = tirEnv * deepAbsorb * 0.92;
  } else {
    // Refracted exit ray samples the REAL studio floor, rainbow caustics & background behind the shard
    // with chromatic R/G/B dispersion!
    let bend = rd2 - inDir;
    // Project 3D bend into screen UV offset (stronger for thicker glass!)
    let refrScale = clamp(rawThick * 0.55 + 0.018, 0.014, 0.095);
    let disp = u.palCore.w * 0.55;
    let uvG = clamp(screenUV + vec2<f32>(bend.x, -bend.y) * refrScale, vec2<f32>(0.002), vec2<f32>(0.998));
    let uvR = clamp(screenUV + vec2<f32>(bend.x, -bend.y) * refrScale * (1.0 - disp * 3.0), vec2<f32>(0.002), vec2<f32>(0.998));
    let uvB = clamp(screenUV + vec2<f32>(bend.x, -bend.y) * refrScale * (1.0 + disp * 3.5), vec2<f32>(0.002), vec2<f32>(0.998));

    // Convert sRGB bgTex samples back to linear before Beer-Lambert tinting!
    let bgR = pow(textureSampleLevel(bgTex, linearSamp, uvR, 0.0).r, 2.2);
    let bgG = pow(textureSampleLevel(bgTex, linearSamp, uvG, 0.0).g, 2.2);
    let bgB = pow(textureSampleLevel(bgTex, linearSamp, uvB, 0.0).b, 2.2);
    let bgLin = vec3<f32>(bgR, bgG, bgB);

    // Subtle internal back-face reflection layered inside the shard
    let innerReflDir = normalize(reflect(rd1, -backN));
    let innerRefl = sampleStudioEnv(in.worldPos, innerReflDir, u);
    let cosBack = clamp(dot(rd1, backN), 0.0, 1.0);
    let fBack = fresnelSchlick(cosBack, 0.05);

    refrCol = mix(bgLin, innerRefl * 0.85, fBack * 0.55) * transmit;
  }

  // Sharp glossy outer studio Fresnel reflection (curbed slightly on flat faces so no solid-white plastic blowouts!)
  let reflDir = reflect(inDir, N);
  let envRefl = sampleStudioEnv(in.worldPos, reflDir, u);
  let softRefl = envRefl / (vec3<f32>(1.0) + envRefl * 0.35);

  // Tight crystal specular glint from key light & secondary rim light
  let L = normalize(u.lightDir.xyz);
  let H = normalize(L + V);
  let spec1 = pow(max(0.0, dot(N, H)), 220.0) * 2.8;
  let L2 = normalize(vec3<f32>(0.65, 0.55, 0.52));
  let H2 = normalize(L2 + V);
  let spec2 = pow(max(0.0, dot(N, H2)), 160.0) * 1.1;

  // Razor-thin edge definition where shard faces meet (dark TIR edge + bright jewel rim)
  let bevelGlint = clamp(edgeGrad * 1.8, 0.0, 1.0);
  let rimTint = gemTint(gemId, in.origPos, u);

  var col = mix(refrCol, softRefl, F * 0.88);
  col += vec3<f32>(1.0, 0.99, 0.98) * (spec1 + spec2);
  // Subtle sparkling crystal edge catch
  col += (rimTint * 0.35 + vec3<f32>(0.45)) * bevelGlint * (0.25 + 0.75 * F);

  // Blend slightly with the translucent back-facet pass already in the framebuffer along ultra-thin edges
  let edgeAlpha = clamp(0.76 + 0.24 * smoothstep(0.004, 0.035, rawThick) + F * 0.22, 0.0, 0.98);
  return vec4<f32>(studioGrade(col, u.params.z), edgeAlpha);
}
`,zn=`
${Ie}

struct Splinter {
  pos: vec4<f32>,   // xyz = world pos, w = size (0 = inactive)
  vel: vec4<f32>,   // xyz = world vel, w = age
  rot: vec4<f32>,   // xyz = spin euler angles, w = maxAge
  color: vec4<f32>, // rgb = Sommerso tint, w = spinSpeed
};

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var<storage, read_write> splinters: array<Splinter>;

fn hash11(p: f32) -> f32 {
  var x = fract(p * 0.1031);
  x *= x + 33.33;
  x *= x + x;
  return fract(x);
}

@compute @workgroup_size(64)
fn cs_main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let idx = gid.x;
  if (idx >= arrayLength(&splinters)) { return; }

  var s = splinters[idx];
  if (s.pos.w <= 0.0) { return; }

  let dt = clamp(u.params.w, 0.0, 0.04);
  if (dt <= 0.0) { return; }

  s.vel.w += dt;
  if (s.vel.w >= s.rot.w) {
    s.pos.w = 0.0;
    splinters[idx] = s;
    return;
  }

  let floorY = u.causticBounds.w + s.pos.w * 0.32;
  let onFloor = s.pos.y <= floorY + 0.0005 && abs(s.vel.y) < 0.22;

  if (onFloor) {
    // Resting/sliding on the studio floor: no gravity jitter, rapid friction & complete rest!
    s.pos.y = floorY;
    s.vel.y = 0.0;
    let slideDecay = exp(-dt * 18.0);
    s.vel.x *= slideDecay;
    s.vel.z *= slideDecay;
    s.color.w *= exp(-dt * 22.0);
    if (length(s.vel.xz) < 0.035) {
      s.vel.x = 0.0;
      s.vel.z = 0.0;
      s.color.w = 0.0;
    } else {
      s.pos.x += s.vel.x * dt;
      s.pos.z += s.vel.z * dt;
    }
  } else {
    let drag = exp(-dt * (0.45 + 0.014 / max(0.004, s.pos.w)));
    s.vel.y -= 9.81 * dt;
    s.vel = vec4<f32>(s.vel.xyz * drag, s.vel.w);
    s.pos = vec4<f32>(s.pos.xyz + s.vel.xyz * dt, s.pos.w);

    if (s.pos.y <= floorY) {
      s.pos.y = floorY;
      if (abs(s.vel.y) > 0.26) {
        let r1 = hash11(f32(idx) * 1.7 + u.camPos.w * 13.3) - 0.5;
        let r2 = hash11(f32(idx) * 2.9 + u.camPos.w * 7.1) - 0.5;
        s.vel.y = -s.vel.y * (0.24 + 0.14 * abs(r1));
        s.vel.x = s.vel.x * 0.58 + r1 * 0.22;
        s.vel.z = s.vel.z * 0.58 + r2 * 0.22;
        s.color.w *= 0.45;
      } else {
        s.vel.y = 0.0;
        s.vel.x *= 0.4;
        s.vel.z *= 0.4;
        s.color.w *= 0.15;
      }
    }

    // Rotate only while actually airborne/moving
    let spd = length(s.vel.xyz);
    if (spd > 0.06 && s.color.w > 0.1) {
      let spin = s.color.w * clamp(spd * 0.7, 0.0, 1.0);
      s.rot = vec4<f32>(
        s.rot.x + spin * dt * 1.3,
        s.rot.y + spin * dt * 1.7,
        s.rot.z + spin * dt * 0.9,
        s.rot.w
      );
    }
  }

  splinters[idx] = s;
}
`,Vn=`
${Ie}

struct Splinter {
  pos: vec4<f32>,
  vel: vec4<f32>,
  rot: vec4<f32>,
  color: vec4<f32>,
};

@group(0) @binding(0) var<uniform> u: SceneUniforms;
@group(0) @binding(1) var<storage, read> splinters: array<Splinter>;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) worldPos: vec3<f32>,
  @location(1) worldNorm: vec3<f32>,
  @location(2) color: vec3<f32>,
  @location(3) fade: f32,
};

fn rotEuler(e: vec3<f32>, v: vec3<f32>) -> vec3<f32> {
  let cx = cos(e.x); let sx = sin(e.x);
  let cy = cos(e.y); let sy = sin(e.y);
  let cz = cos(e.z); let sz = sin(e.z);
  var p = vec3<f32>(v.x, v.y * cx - v.z * sx, v.y * sx + v.z * cx);
  p = vec3<f32>(p.x * cy + p.z * sy, p.y, -p.x * sy + p.z * cy);
  return vec3<f32>(p.x * cz - p.y * sz, p.x * sz + p.y * cz, p.z);
}

@vertex
fn vs_main(
  @builtin(vertex_index) vi: u32,
  @builtin(instance_index) ii: u32,
) -> VSOut {
  var out: VSOut;
  let s = splinters[ii];
  if (s.pos.w <= 0.0) {
    out.pos = vec4<f32>(2.0, 2.0, 2.0, 1.0);
    out.worldPos = vec3<f32>(0.0);
    out.worldNorm = vec3<f32>(0.0, 1.0, 0.0);
    out.color = vec3<f32>(0.0);
    out.fade = 0.0;
    return out;
  }

  var corners = array<vec3<f32>, 4>(
    vec3<f32>(0.0, 1.4, 0.0),
    vec3<f32>(-0.52, -0.42, 0.40),
    vec3<f32>(0.58, -0.36, 0.28),
    vec3<f32>(-0.08, -0.48, -0.64)
  );
  var idx = array<u32, 12>(
    0u, 1u, 2u,
    0u, 2u, 3u,
    0u, 3u, 1u,
    1u, 3u, 2u
  );
  let triBase = (vi / 3u) * 3u;
  let a = corners[idx[triBase]];
  let b = corners[idx[triBase + 1u]];
  let c = corners[idx[triBase + 2u]];
  let nLocal = normalize(cross(b - a, c - a));
  let vLocal = corners[idx[vi]];

  let fade = clamp((s.rot.w - s.vel.w) / 1.8, 0.0, 1.0);
  let sz = s.pos.w * fade;
  let wp = s.pos.xyz + rotEuler(s.rot.xyz, vLocal * sz);
  let wn = normalize(rotEuler(s.rot.xyz, nLocal));

  out.pos = u.viewProj * vec4<f32>(wp, 1.0);
  out.worldPos = wp;
  out.worldNorm = wn;
  out.color = s.color.rgb;
  out.fade = fade;
  return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
  let N = normalize(in.worldNorm);
  let V = normalize(u.camPos.xyz - in.worldPos);
  let L = normalize(u.lightDir.xyz);
  let H = normalize(L + V);

  let spec = pow(max(0.0, abs(dot(N, H))), 48.0) * 4.5;
  let fres = fresnelSchlick(abs(dot(N, V)), 0.10);
  let envRefl = sampleStudioEnv(in.worldPos, reflect(-V, N), u);
  let col = in.color * mix(envRefl * 0.68, vec3<f32>(0.24 + 0.62 * abs(dot(N, L))), 0.45) + vec3<f32>(1.4, 1.38, 1.36) * (spec + fres * 0.35);
  return vec4<f32>(studioGrade(col, u.params.z), in.fade * 0.94);
}
`,Ln=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) uv: vec2<f32>, // x = along line (-1..+1), y = across line (-1..+1)
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32, @builtin(instance_index) inst: u32) -> VSOut {
  var quad = array<vec2<f32>, 6>(
    vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0), vec2<f32>(1.0, 1.0),
    vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, 1.0), vec2<f32>(-1.0, 1.0)
  );
  let uv = quad[vi];
  var n = normalize(u.cutPlaneN.xyz);
  var rad = u.blockCenter.w;
  if (inst == 1u) {
    if (u.cutPlane2N.w < 0.0) {
      var hidden: VSOut;
      hidden.pos = vec4<f32>(2.0, 2.0, 2.0, 1.0);
      hidden.uv = vec2<f32>(2.0, 2.0);
      return hidden;
    }
    n = normalize(u.cutPlane2N.xyz);
    rad = u.cutPlane2N.w;
  }

  let center = u.blockCenter.xyz + n * rad;
  let toCam = normalize(u.camPos.xyz - center);
  // Line direction lies strictly inside the cutting plane and perpendicular to the camera ray
  var lineDir = cross(n, toCam);
  if (length(lineDir) < 0.02) {
    lineDir = cross(n, vec3<f32>(0.0, 1.0, 0.0));
  }
  lineDir = normalize(lineDir);
  // Screen-facing thin ribbon width axis perpendicular to both lineDir and view ray
  let sideDir = normalize(cross(toCam, lineDir));

  let halfLen = 0.50;
  let halfThick = 0.0028;
  let wp = center + lineDir * (uv.x * halfLen) + sideDir * (uv.y * halfThick);

  var out: VSOut;
  out.pos = u.viewProj * vec4<f32>(wp, 1.0);
  out.uv = uv;
  return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
  if (abs(in.uv.x) > 1.0 || abs(in.uv.y) > 1.0) { discard; }

  let hover = u.palEdge.w;
  let canCut = u.params.y;
  let vis = u.params.x;

  // Razor-sharp anti-aliased architectural hairline that tapers softly at its two ends
  let fw = max(0.08, fwidth(in.uv.y));
  let core = 1.0 - smoothstep(0.18 + 0.16 * hover, 0.55 + 0.15 * hover + fw, abs(in.uv.y));
  let endFade = 1.0 - smoothstep(0.68, 1.0, abs(in.uv.x));
  let alpha = clamp(core * endFade * (0.58 + 0.28 * hover + 0.14 * canCut) * vis, 0.0, 0.92);
  if (alpha < 0.01) { discard; }

  let col = mix(vec3<f32>(0.12, 0.12, 0.13), vec3<f32>(0.02, 0.02, 0.02), hover);
  return vec4<f32>(col, alpha);
}
`,In=`
${Ie}

@group(0) @binding(0) var<uniform> u: SceneUniforms;

struct VSOut {
  @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs_main(@location(0) worldPos: vec3<f32>) -> VSOut {
  var out: VSOut;
  out.pos = u.viewProj * vec4<f32>(worldPos, 1.0);
  return out;
}

@fragment
fn fs_main() -> @location(0) vec4<f32> {
  return vec4<f32>(0.06, 0.06, 0.07, 0.85 * u.params.x);
}
`,dt=2048,hs=4096,qe=24,Io=12,Do=1072,ze=4;class Dn{device;context;format;canvas;msaaTex=null;msaaView=null;depthTex=null;depthView=null;bgTex=null;bgView=null;shardBackTex=null;shardBackView=null;shardBackDepth=null;shardBackDepthView=null;width=1;height=1;maxSplinters;causticRes;hasSplinters=!1;causticTex;causticView;causticSampler;sceneBuf;sceneData=new Float32Array(368/4);shardPosesBuf;shardPosesCPU=new Float32Array(dt*8);splinterBuf;splinterCursor=0;blockSlots=[];activeBlockParts=0;cutSlots=[];activeCutSlots=0;sectionVB=null;sectionVertCount=0;shardBatches=[];floorPipe;floorBG;causticBlockPipe;causticCutPipe;causticShardsPipe;causticBG;glassPipe;cutGlassPipe;cracksPipe;surfaceCracksPipe;shardsBackDepthPipe;shardsInnerPipe;shardsBackBG;shardsPipe;shardsBG=null;splintersCompPipe;splintersCompBG;splintersRenderPipe;splintersRenderBG;planePipe;planeBG;sectionPipe;sectionBG;constructor(t,e={}){this.canvas=t,this.maxSplinters=Math.max(64,Math.min(hs,Math.floor(e.maxSplinters??hs))),this.causticRes=e.causticRes??1024}async init(){if(!navigator.gpu)throw new Error("WebGPU is not available in this browser. Try a recent Chrome, Edge, or Safari.");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new Error("Could not acquire a WebGPU adapter.");this.device=await t.requestDevice(),this.context=this.canvas.getContext("webgpu"),this.format=navigator.gpu.getPreferredCanvasFormat(),this.context.configure({device:this.device,format:this.format,alphaMode:"opaque"}),this.createResources(),this.createPipelines(),this.resize(this.canvas.width||1280,this.canvas.height||800)}createResources(){const t=this.device;this.sceneBuf=t.createBuffer({size:368,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.shardPosesBuf=t.createBuffer({size:dt*32,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.splinterBuf=t.createBuffer({size:this.maxSplinters*64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.causticTex=t.createTexture({size:[this.causticRes,this.causticRes],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.causticView=this.causticTex.createView(),this.causticSampler=t.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"})}createPipelines(){const t=this.device,e=this.format,s=t.createShaderModule({code:wn});this.floorPipe=t.createRenderPipeline({layout:"auto",vertex:{module:s,entryPoint:"vs_main"},fragment:{module:s,entryPoint:"fs_main",targets:[{format:e}]},primitive:{topology:"triangle-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"always"},multisample:{count:ze}}),this.floorBG=t.createBindGroup({layout:this.floorPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:this.causticView},{binding:2,resource:this.causticSampler}]});const a=t.createShaderModule({code:Pn}),r={format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}},n=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),i=t.createPipelineLayout({bindGroupLayouts:[n]});this.causticBG=t.createBindGroup({layout:n,entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:this.shardPosesBuf}}]});const l={arrayStride:24,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"}]};this.causticBlockPipe=t.createRenderPipeline({layout:i,vertex:{module:a,entryPoint:"vs_block",buffers:[l]},fragment:{module:a,entryPoint:"fs_main",targets:[r]},primitive:{topology:"triangle-list",cullMode:"none"}});const c=t.createShaderModule({code:Sn});this.causticCutPipe=t.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vs_cut",buffers:[l]},fragment:{module:c,entryPoint:"fs_main",targets:[r]},primitive:{topology:"triangle-list",cullMode:"none"}});const u={arrayStride:40,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32x3"},{shaderLocation:3,offset:36,format:"float32"}]};this.causticShardsPipe=t.createRenderPipeline({layout:i,vertex:{module:a,entryPoint:"vs_shards",buffers:[u]},fragment:{module:a,entryPoint:"fs_main",targets:[r]},primitive:{topology:"triangle-list",cullMode:"none"}});const y=t.createShaderModule({code:Mn});this.glassPipe=t.createRenderPipeline({layout:"auto",vertex:{module:y,entryPoint:"vs_main",buffers:[l]},fragment:{module:y,entryPoint:"fs_main",targets:[{format:e}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"},multisample:{count:ze}}),this.cutGlassPipe=t.createRenderPipeline({layout:"auto",vertex:{module:y,entryPoint:"vs_main",buffers:[l]},fragment:{module:y,entryPoint:"fs_main",targets:[{format:e}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"},multisample:{count:ze}});const g=t.createShaderModule({code:kn});this.cracksPipe=t.createRenderPipeline({layout:"auto",vertex:{module:g,entryPoint:"vs_main",buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32"},{shaderLocation:3,offset:28,format:"float32"}]}]},fragment:{module:g,entryPoint:"fs_main",targets:[{format:e,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"},multisample:{count:ze}});const m=t.createShaderModule({code:Cn});this.surfaceCracksPipe=t.createRenderPipeline({layout:"auto",vertex:{module:m,entryPoint:"vs_main",buffers:[{arrayStride:40,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32"},{shaderLocation:3,offset:28,format:"float32"},{shaderLocation:4,offset:32,format:"float32"},{shaderLocation:5,offset:36,format:"float32"}]}]},fragment:{module:m,entryPoint:"fs_main",targets:[{format:e,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"},multisample:{count:ze}});for(let S=0;S<Io;S++){const M=t.createBuffer({size:Do,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),z=t.createBindGroup({layout:this.glassPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:M}}]});this.blockSlots.push({vb:null,vertCount:0,planesBuf:M,glassBG:z})}for(let S=0;S<qe;S++){const M=t.createBuffer({size:Do,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),z=t.createBindGroup({layout:this.causticCutPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:M}}]}),B=t.createBindGroup({layout:this.cutGlassPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:M}}]}),V=t.createBindGroup({layout:this.cracksPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:M}}]}),C=t.createBindGroup({layout:this.surfaceCracksPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:M}}]});this.cutSlots.push({vb:null,vertCount:0,crackVB:null,crackVertCount:0,surfaceCrackVB:null,surfaceCrackVertCount:0,planesBuf:M,causticCutBG:z,cutGlassBG:B,cracksBG:V,surfaceCracksBG:C})}const f=t.createShaderModule({code:Bn}),d=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),h=t.createPipelineLayout({bindGroupLayouts:[d]});this.shardsBackBG=t.createBindGroup({layout:d,entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:this.shardPosesBuf}}]}),this.shardsBackDepthPipe=t.createRenderPipeline({layout:h,vertex:{module:f,entryPoint:"vs_main",buffers:[u]},fragment:{module:f,entryPoint:"fs_depth",targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-list",cullMode:"front"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.shardsInnerPipe=t.createRenderPipeline({layout:h,vertex:{module:f,entryPoint:"vs_main",buffers:[u]},fragment:{module:f,entryPoint:"fs_inner",targets:[{format:e,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"front"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"},multisample:{count:ze}});const v=t.createShaderModule({code:Tn});this.shardsPipe=t.createRenderPipeline({layout:"auto",vertex:{module:v,entryPoint:"vs_main",buffers:[u]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:e,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"},multisample:{count:ze}});const p=t.createShaderModule({code:zn});this.splintersCompPipe=t.createComputePipeline({layout:"auto",compute:{module:p,entryPoint:"cs_main"}}),this.splintersCompBG=t.createBindGroup({layout:this.splintersCompPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:this.splinterBuf}}]});const b=t.createShaderModule({code:Vn});this.splintersRenderPipe=t.createRenderPipeline({layout:"auto",vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:e,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"},multisample:{count:ze}}),this.splintersRenderBG=t.createBindGroup({layout:this.splintersRenderPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:this.splinterBuf}}]});const w=t.createShaderModule({code:Ln});this.planePipe=t.createRenderPipeline({layout:"auto",vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_main",targets:[{format:e,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"less"},multisample:{count:ze}}),this.planeBG=t.createBindGroup({layout:this.planePipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}}]});const P=t.createShaderModule({code:In});this.sectionPipe=t.createRenderPipeline({layout:"auto",vertex:{module:P,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:P,entryPoint:"fs_main",targets:[{format:e,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"always"},multisample:{count:ze}}),this.sectionBG=t.createBindGroup({layout:this.sectionPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}}]})}resize(t,e){const s=Math.max(1,Math.floor(t)),a=Math.max(1,Math.floor(e));s===this.width&&a===this.height&&this.msaaTex||(this.width=s,this.height=a,this.canvas.width=s,this.canvas.height=a,this.msaaTex?.destroy(),this.depthTex?.destroy(),this.bgTex?.destroy(),this.shardBackTex?.destroy(),this.shardBackDepth?.destroy(),this.msaaTex=this.device.createTexture({size:[s,a],sampleCount:ze,format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTex.createView(),this.depthTex=this.device.createTexture({size:[s,a],sampleCount:ze,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.depthView=this.depthTex.createView(),this.bgTex=this.device.createTexture({size:[s,a],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.bgView=this.bgTex.createView(),this.shardBackTex=this.device.createTexture({size:[s,a],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.shardBackView=this.shardBackTex.createView(),this.shardBackDepth=this.device.createTexture({size:[s,a],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.shardBackDepthView=this.shardBackDepth.createView(),this.shardsBG=this.device.createBindGroup({layout:this.shardsPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sceneBuf}},{binding:1,resource:{buffer:this.shardPosesBuf}},{binding:2,resource:this.bgView},{binding:3,resource:this.shardBackView},{binding:4,resource:this.causticSampler}]}))}uploadPlanes(t,e,s,a=[0,0,0],r=[0,0,0,1],n=0){const i=new ArrayBuffer(Do),l=new Uint32Array(i,0,4),c=new Float32Array(i,16,8),u=new Float32Array(i,48,256),y=Math.min(64,e.length);l[0]=y,l[1]=s?1:0,l[2]=n>>>0,c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=0,c[4]=r[0],c[5]=r[1],c[6]=r[2],c[7]=r[3];for(let g=0;g<y;g++)u[g*4]=e[g].n[0],u[g*4+1]=e[g].n[1],u[g*4+2]=e[g].n[2],u[g*4+3]=e[g].d;this.device.queue.writeBuffer(t,0,i)}updateCutSlotPose(t,e,s){if(t<0||t>=qe)return;const a=new Float32Array([e[0],e[1],e[2],0,s[0],s[1],s[2],s[3]]);this.device.queue.writeBuffer(this.cutSlots[t].planesBuf,16,a)}setCutSlot(t,e,s,a,r=0){if(t<0||t>=qe)return;const n=this.cutSlots[t];n.vb?.destroy(),n.crackVB?.destroy(),n.surfaceCrackVB?.destroy(),n.vb=null,n.crackVB=null,n.surfaceCrackVB=null,n.vertCount=0,n.crackVertCount=0,n.surfaceCrackVertCount=0,e.verts.length>0&&(n.vb=this.device.createBuffer({size:Math.max(24,e.verts.byteLength),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(n.vb,0,e.verts.buffer,e.verts.byteOffset,e.verts.byteLength),n.vertCount=e.verts.length/6,this.uploadPlanes(n.planesBuf,e.planes,!0,s,a,r)),e.crackVerts.length>0&&(n.crackVB=this.device.createBuffer({size:Math.max(32,e.crackVerts.byteLength),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(n.crackVB,0,e.crackVerts.buffer,e.crackVerts.byteOffset,e.crackVerts.byteLength),n.crackVertCount=e.crackVerts.length/8),e.surfaceCrackVerts.length>0&&(n.surfaceCrackVB=this.device.createBuffer({size:Math.max(40,e.surfaceCrackVerts.byteLength),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(n.surfaceCrackVB,0,e.surfaceCrackVerts.buffer,e.surfaceCrackVerts.byteOffset,e.surfaceCrackVerts.byteLength),n.surfaceCrackVertCount=e.surfaceCrackVerts.length/10),this.recountCutSlots()}clearCutSlot(t){if(t<0||t>=qe)return;const e=this.cutSlots[t];e.vb?.destroy(),e.crackVB?.destroy(),e.surfaceCrackVB?.destroy(),e.vb=null,e.crackVB=null,e.surfaceCrackVB=null,e.vertCount=0,e.crackVertCount=0,e.surfaceCrackVertCount=0,this.recountCutSlots()}clearAllCutSlots(){for(let t=0;t<qe;t++)this.clearCutSlot(t)}recountCutSlots(){let t=0;for(let e=0;e<qe;e++)this.cutSlots[e].vertCount>0&&t++;this.activeCutSlots=t}setMainBlocks(t){const e=Math.min(Io,t.length);for(let s=0;s<Io;s++){const a=this.blockSlots[s];a.vb?.destroy(),a.vb=null,a.vertCount=0,s<e&&t[s].verts.length>0&&(a.vb=this.device.createBuffer({size:Math.max(24,t[s].verts.byteLength),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(a.vb,0,t[s].verts.buffer,t[s].verts.byteOffset,t[s].verts.byteLength),a.vertCount=t[s].verts.length/6,this.uploadPlanes(a.planesBuf,t[s].planes,!1))}this.activeBlockParts=e}setCutPieces(t){this.clearAllCutSlots();const e=Math.min(qe,t.length);for(let s=0;s<e;s++)this.setCutSlot(s,t[s],[0,0,0],[0,0,0,1])}setSectionLoops(t,e){this.sectionVB?.destroy(),this.sectionVB=null,this.sectionVertCount=0;let s=0;for(const i of t)i.length>=3&&(s+=i.length);if(s===0)return;const a=.0017,r=new Float32Array(s*6*3);let n=0;for(const i of t){const l=i.length;if(!(l<3))for(let c=0;c<l;c++){const u=i[c],y=i[(c+1)%l],g=y[0]-u[0],m=y[1]-u[1],f=y[2]-u[2],d=e[0]-(u[0]+y[0])*.5,h=e[1]-(u[1]+y[1])*.5,v=e[2]-(u[2]+y[2])*.5;let p=m*v-f*h,b=f*d-g*v,w=g*h-m*d;const P=Math.hypot(p,b,w)||1;p=p/P*a,b=b/P*a,w=w/P*a,r[n++]=u[0]-p,r[n++]=u[1]-b,r[n++]=u[2]-w,r[n++]=u[0]+p,r[n++]=u[1]+b,r[n++]=u[2]+w,r[n++]=y[0]+p,r[n++]=y[1]+b,r[n++]=y[2]+w,r[n++]=u[0]-p,r[n++]=u[1]-b,r[n++]=u[2]-w,r[n++]=y[0]+p,r[n++]=y[1]+b,r[n++]=y[2]+w,r[n++]=y[0]-p,r[n++]=y[1]-b,r[n++]=y[2]-w}}this.sectionVB=this.device.createBuffer({size:r.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.sectionVB,0,r),this.sectionVertCount=s*6}addShardBatch(t,e=0,s=0,a=20){if(t.length===0)return;for(;this.shardBatches.length>=a;){const n=this.shardBatches.shift();if(n.vb.destroy(),n.numShards>0){const i=Math.min(dt,n.baseShardId+n.numShards);for(let l=n.baseShardId;l<i;l++)this.shardPosesCPU[l*8+3]=0;this.device.queue.writeBuffer(this.shardPosesBuf,n.baseShardId*32,this.shardPosesCPU,n.baseShardId*8,(i-n.baseShardId)*8)}}const r=this.device.createBuffer({size:Math.max(40,t.byteLength),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(r,0,t.buffer,t.byteOffset,t.byteLength),this.shardBatches.push({vb:r,vertCount:t.length/10,baseShardId:e,numShards:s})}clearShards(){for(const e of this.shardBatches)e.vb.destroy();this.shardBatches=[],this.shardPosesCPU.fill(0),this.device.queue.writeBuffer(this.shardPosesBuf,0,this.shardPosesCPU);const t=new Float32Array(this.maxSplinters*16);this.device.queue.writeBuffer(this.splinterBuf,0,t),this.splinterCursor=0,this.hasSplinters=!1}setShardPose(t,e,s,a=!0,r=0){if(t<0||t>=dt)return;const n=t*8;this.shardPosesCPU[n]=e[0],this.shardPosesCPU[n+1]=e[1],this.shardPosesCPU[n+2]=e[2],this.shardPosesCPU[n+3]=a?r+1:0,this.shardPosesCPU[n+4]=s[0],this.shardPosesCPU[n+5]=s[1],this.shardPosesCPU[n+6]=s[2],this.shardPosesCPU[n+7]=s[3]}flushShardPoses(t){const e=Math.min(dt,t);e<=0||this.device.queue.writeBuffer(this.shardPosesBuf,0,this.shardPosesCPU,0,e*8)}spawnSplinters(t){if(t.length===0)return;const e=Math.min(t.length,this.maxSplinters),s=new Float32Array(e*16);for(let n=0;n<e;n++){const i=t[n],l=n*16;s[l]=i.pos[0],s[l+1]=i.pos[1],s[l+2]=i.pos[2],s[l+3]=i.size,s[l+4]=i.vel[0],s[l+5]=i.vel[1],s[l+6]=i.vel[2],s[l+7]=0,s[l+8]=Math.random()*6.28,s[l+9]=Math.random()*6.28,s[l+10]=Math.random()*6.28,s[l+11]=i.maxAge,s[l+12]=i.color[0],s[l+13]=i.color[1],s[l+14]=i.color[2],s[l+15]=i.spinSpeed}let a=e,r=0;for(;a>0;){const n=Math.min(a,this.maxSplinters-this.splinterCursor);this.device.queue.writeBuffer(this.splinterBuf,this.splinterCursor*64,s,r*16,n*16),this.splinterCursor=(this.splinterCursor+n)%this.maxSplinters,r+=n,a-=n}this.hasSplinters=!0}render(t){const e=this.sceneData;e.set(t.viewProj,0),e.set(t.invViewProj,16),e[32]=t.camPos[0],e[33]=t.camPos[1],e[34]=t.camPos[2],e[35]=t.time,e[36]=t.lightDir[0],e[37]=t.lightDir[1],e[38]=t.lightDir[2],e[39]=t.causticStrength,e[40]=t.blockCenter[0],e[41]=t.blockCenter[1],e[42]=t.blockCenter[2],e[43]=t.cutRadius,e[44]=t.blockQuat[0],e[45]=t.blockQuat[1],e[46]=t.blockQuat[2],e[47]=t.blockQuat[3],e[48]=t.halfSize[0],e[49]=t.halfSize[1],e[50]=t.halfSize[2],e[51]=t.ior,e[52]=t.palette.bottom[0],e[53]=t.palette.bottom[1],e[54]=t.palette.bottom[2],e[55]=t.palette.density,e[56]=t.palette.core[0],e[57]=t.palette.core[1],e[58]=t.palette.core[2],e[59]=t.dispersion,e[60]=t.palette.top[0],e[61]=t.palette.top[1],e[62]=t.palette.top[2],e[63]=t.crackProgress,e[64]=t.palette.edge[0],e[65]=t.palette.edge[1],e[66]=t.palette.edge[2],e[67]=t.planeHover;const s=t.cutOffsets[0]??[0,0,0];e[68]=s[0],e[69]=s[1],e[70]=s[2],e[71]=t.hasCutPiece?1:0,e[72]=-3.2,e[73]=-3.2,e[74]=1/6.4,e[75]=0,e[76]=t.planeAlpha,e[77]=t.canCut?1:0,e[78]=t.exposure,e[79]=t.dt,e[80]=t.cutQuat[0],e[81]=t.cutQuat[1],e[82]=t.cutQuat[2],e[83]=t.cutQuat[3],e[84]=t.cutPlaneN[0],e[85]=t.cutPlaneN[1],e[86]=t.cutPlaneN[2],e[87]=0,t.cutPlane2N?(e[88]=t.cutPlane2N[0],e[89]=t.cutPlane2N[1],e[90]=t.cutPlane2N[2],e[91]=t.cutRadius2):(e[88]=0,e[89]=1,e[90]=0,e[91]=-1),this.device.queue.writeBuffer(this.sceneBuf,0,e);const a=this.device.createCommandEncoder();if(this.hasSplinters&&t.dt>0){const l=a.beginComputePass();l.setPipeline(this.splintersCompPipe),l.setBindGroup(0,this.splintersCompBG),l.dispatchWorkgroups(Math.ceil(this.maxSplinters/64)),l.end()}{const l=a.beginRenderPass({colorAttachments:[{view:this.causticView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]});if(l.setBindGroup(0,this.causticBG),this.activeBlockParts>0){l.setPipeline(this.causticBlockPipe);for(let c=0;c<this.activeBlockParts;c++){const u=this.blockSlots[c];u.vb&&u.vertCount>0&&(l.setVertexBuffer(0,u.vb),l.draw(u.vertCount,4))}}if(this.activeCutSlots>0){l.setPipeline(this.causticCutPipe);for(let c=0;c<qe;c++){const u=this.cutSlots[c];u.vb&&u.vertCount>0&&(l.setBindGroup(0,u.causticCutBG),l.setVertexBuffer(0,u.vb),l.draw(u.vertCount,4))}l.setBindGroup(0,this.causticBG)}if(this.shardBatches.length>0){l.setPipeline(this.causticShardsPipe);for(const c of this.shardBatches)l.setVertexBuffer(0,c.vb),l.draw(c.vertCount,4)}l.end()}if(this.shardBatches.length>0&&this.shardBackView&&this.shardBackDepthView){const l=a.beginRenderPass({colorAttachments:[{view:this.shardBackView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.shardBackDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"discard"}});l.setPipeline(this.shardsBackDepthPipe),l.setBindGroup(0,this.shardsBackBG);for(const c of this.shardBatches)l.setVertexBuffer(0,c.vb),l.draw(c.vertCount);l.end()}const r=this.msaaView,n=this.depthView,i=this.context.getCurrentTexture().createView();{const l=a.beginRenderPass({colorAttachments:[{view:r,resolveTarget:this.bgView,clearValue:{r:.96,g:.96,b:.955,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:n,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});if(l.setPipeline(this.floorPipe),l.setBindGroup(0,this.floorBG),l.draw(3),this.activeBlockParts>0){l.setPipeline(this.glassPipe);for(let c=0;c<this.activeBlockParts;c++){const u=this.blockSlots[c];u.vb&&u.vertCount>0&&(l.setBindGroup(0,u.glassBG),l.setVertexBuffer(0,u.vb),l.draw(u.vertCount))}}l.end()}{const l=a.beginRenderPass({colorAttachments:[{view:r,resolveTarget:i,loadOp:"load",storeOp:"discard"}],depthStencilAttachment:{view:n,depthLoadOp:"load",depthStoreOp:"discard"}});if(this.shardBatches.length>0&&this.shardsBG){l.setPipeline(this.shardsInnerPipe),l.setBindGroup(0,this.shardsBackBG);for(const c of this.shardBatches)l.setVertexBuffer(0,c.vb),l.draw(c.vertCount);l.setPipeline(this.shardsPipe),l.setBindGroup(0,this.shardsBG);for(const c of this.shardBatches)l.setVertexBuffer(0,c.vb),l.draw(c.vertCount)}if(this.activeCutSlots>0)for(let c=0;c<qe;c++){const u=this.cutSlots[c];!u.vb||u.vertCount===0||(l.setPipeline(this.cutGlassPipe),l.setBindGroup(0,u.cutGlassBG),l.setVertexBuffer(0,u.vb),l.draw(u.vertCount),t.crackProgress>1e-4&&u.crackVB&&u.crackVertCount>0&&(l.setPipeline(this.cracksPipe),l.setBindGroup(0,u.cracksBG),l.setVertexBuffer(0,u.crackVB),l.draw(u.crackVertCount)),t.crackProgress>1e-4&&u.surfaceCrackVB&&u.surfaceCrackVertCount>0&&(l.setPipeline(this.surfaceCracksPipe),l.setBindGroup(0,u.surfaceCracksBG),l.setVertexBuffer(0,u.surfaceCrackVB),l.draw(u.surfaceCrackVertCount)))}this.hasSplinters&&(l.setPipeline(this.splintersRenderPipe),l.setBindGroup(0,this.splintersRenderBG),l.draw(12,this.maxSplinters)),t.planeAlpha>.01&&(l.setPipeline(this.planePipe),l.setBindGroup(0,this.planeBG),l.draw(6,t.cutPlane2N?2:1),this.sectionVB&&this.sectionVertCount>0&&!t.hasCutPiece&&t.canCut&&(l.setPipeline(this.sectionPipe),l.setBindGroup(0,this.sectionBG),l.setVertexBuffer(0,this.sectionVB),l.draw(this.sectionVertCount))),l.end()}this.device.queue.submit([a.finish()])}}function Rn(o){let t=o>>>0;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function me(o,t,e,s,a,r,n,i,l,c,u,y,g){const m=Math.max(0,Math.floor(s*e)),f=Math.max(1,Math.floor(a*e)),d=Math.min(o.length,m+f),h=Math.max(1,Math.floor(u*e)),v=Math.max(1,f-h),p=Math.max(1e-4,i/Math.max(20,n)),b=Math.pow(p,16/f),w=Math.exp(Math.log(5e-4)/v),S=(Math.max(-1,Math.min(1,y))+1)*Math.PI*.25,M=t?Math.cos(S):1,z=t?Math.sin(S):0;let B=0,V=0,C=0,x=0,T=0,k=0,L=0;const E=e*.44,R=Math.max(.5,l),G=U=>{const Q=Math.max(20,Math.min(E,U)),oe=2*Math.PI*Q/e,ne=Math.cos(oe),ie=Math.sin(oe)/(2*R),de=1/(1+ie);r==="lowpass"?(B=(1-ne)*.5*de,V=(1-ne)*de,C=B):r==="highpass"?(B=(1+ne)*.5*de,V=-(1+ne)*de,C=B):(B=ie*de,V=0,C=-ie*de),x=-2*ne*de,T=(1-ie)*de};let D=n,F=1;G(D);for(let U=m;U<d;U++){const Q=U-m;(Q&15)===0&&Q>0&&n!==i&&(D*=b,G(D));const oe=g()*2-1,ne=B*oe+k;k=V*oe-x*ne+L,L=C*oe-T*ne;let ie;Q<h?ie=Q/h:(ie=F,F*=w);const de=ne*c*ie;o[U]+=de*M,t&&(t[U]+=de*z)}}function ce(o,t,e,s,a,r,n,i,l,c,u,y=0){const g=Math.max(0,Math.floor(s*e)),m=Math.max(1,Math.floor(a*e)),f=Math.min(o.length,g+m),d=Math.max(1,Math.floor(l*e)),h=Math.max(0,Math.floor(y*e)),v=d+h,p=Math.max(1,m-v),b=Math.max(1e-4,n/Math.max(20,r)),w=r===n?1:Math.pow(b,1/m),P=Math.exp(Math.log(5e-4)/p),M=(Math.max(-1,Math.min(1,u))+1)*Math.PI*.25,z=t?Math.cos(M):1,B=t?Math.sin(M):0,V=2*Math.PI/e,C=1/(2*Math.PI);let x=0,T=r,k=h>0?.88:1;for(let L=g;L<f;L++){const E=L-g;x+=T*V,w!==1&&(T*=w);let R;if(c==="sine")R=Math.sin(x);else{const F=x*C%1;R=1-4*Math.abs(Math.round(F-.25)-(F-.25))}let G;E<d?G=E/d:E<v?G=1-.12*((E-d)/Math.max(1,h)):(G=k,k*=P);const D=R*i*G;o[L]+=D*z,t&&(t[L]+=D*B)}}function ps(o,t,e,s,a){const r=o.length,n=Math.max(1e-4,s/Math.max(20,e)),i=t*.44,l=Math.max(.5,a);let c=0,u=0,y=0,g=0,m=0,f=0,d=0;const h=v=>{const p=Math.max(20,Math.min(i,v)),b=2*Math.PI*p/t,w=Math.cos(b),P=Math.sin(b)/(2*l),S=1/(1+P);c=(1-w)*.5*S,u=(1-w)*S,y=c,g=-2*w*S,m=(1-P)*S};h(e);for(let v=0;v<r;v++){(v&31)===0&&v>0&&e!==s&&h(e*Math.pow(n,v/r));const p=o[v],b=c*p+f;f=u*p-g*b+d,d=y*p-m*b,o[v]=b}}class An{ctx=null;out=null;noise=null;banks=null;activeVoices=0;maxVoices=32;muted=!1;wake(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext??window.webkitAudioContext;if(!t)return;let e;try{e=new t({latencyHint:"interactive"})}catch{e=new t}this.ctx=e;const s=e.createDynamicsCompressor();s.threshold.value=-12,s.knee.value=10,s.ratio.value=4.5,s.attack.value=.004,s.release.value=.14,this.out=e.createGain(),this.out.gain.value=this.muted?0:.8,this.out.connect(s).connect(e.destination);try{const n=e.createBuffer(1,1,e.sampleRate),i=e.createBufferSource();i.buffer=n,i.connect(e.destination),i.start(0)}catch{}e.state!=="running"&&e.resume().catch(()=>{});const a=e.sampleRate*2;this.noise=e.createBuffer(1,a,e.sampleRate);const r=this.noise.getChannelData(0);for(let n=0;n<a;n++)r[n]=Math.random()*2-1;this.banks=this.bakeBanks(e),document.addEventListener("visibilitychange",()=>{!document.hidden&&this.ctx&&this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{})})}setMuted(t){this.muted=t,this.out&&this.ctx&&this.out.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.02)}bakeBanks(t){const e=t.sampleRate,s=Rn(20260202),a=h=>t.createBuffer(1,Math.max(1,Math.ceil(h*e)),e),r=h=>t.createBuffer(2,Math.max(1,Math.ceil(h*e)),e),n=[];for(let h=0;h<4;h++){const v=a(.1),p=v.getChannelData(0),b=660+h*42;me(p,null,e,0,.018,"bandpass",1750,920,1.6,.58,.0015,0,s),ce(p,null,e,0,.072,b*1.04,b,.56,.0015,"triangle",0,.005),ce(p,null,e,0,.032,b*2.32*1.04,b*2.32,.28,.0015,"triangle",0,.004),ps(p,e,2600,2600,.8),n.push(v)}const i=a(.28);{const h=i.getChannelData(0);ce(h,null,e,0,.25,210,310,.3,.04,"triangle",0),me(h,null,e,0,.25,"bandpass",1400,3100,2.6,.22,.045,0,s)}const l=a(2.4);{const h=l.getChannelData(0),v=new Float32Array(h.length);ce(v,null,e,0,2.05,184,52,.58,.01,"triangle",0);for(let p=0;p<v.length;p++)v[p]=Math.tanh(v[p]*2.4);ps(v,e,420,62,.85),ce(h,null,e,0,2.35,92,24,.92,.01,"sine",0,.065),ce(h,null,e,0,.075,220,46,.65,.003,"sine",0),me(h,null,e,0,1.85,"lowpass",680,62,.8,.74,.006,0,s),me(h,null,e,0,.16,"bandpass",2100,420,1,.46,.004,0,s);for(let p=0;p<h.length;p++)h[p]+=v[p]}const c=a(.41);{const h=c.getChannelData(0);me(h,null,e,0,.16,"bandpass",1900,580,2.2,.48,.003,0,s),ce(h,null,e,0,.36,195,195,.16,.003,"sine",0),ce(h,null,e,.015,.34,208,208,.13,.003,"sine",0);const v=new Float32Array(h.length);me(v,null,e,0,.36,"bandpass",160,1250,1.6,.36,.34,0,s);for(let p=0;p<h.length;p++)h[p]+=v[p]}const u=r(.2);{const h=u.getChannelData(0),v=u.getChannelData(1);me(h,v,e,0,.08,"highpass",5800,9200,1.4,.5,.002,.15,s),me(h,v,e,.005,.06,"bandpass",4200,2600,2.2,.62,.002,.15,s),ce(h,v,e,0,.14,3850,3850,.14,.001,"sine",.25),ce(h,v,e,.004,.11,5750,5750,.09,.001,"sine",.3)}const y=[];for(let h=0;h<2;h++){const v=r(.65),p=v.getChannelData(0),b=v.getChannelData(1);p.set(u.getChannelData(0)),b.set(u.getChannelData(1));for(let w=0;w<14;w++){const P=Math.pow(w/14,1.3),S=.03+P*.5+s()*.025,M=.1+s()*.4;me(p,b,e,S,.014,"bandpass",4800+s()*3400,3200,2.4,.18+P*.14,.001,M,s),ce(p,b,e,S,.035+s()*.03,3200+s()*4400,3200+s()*4400,.035,.001,"sine",M)}y.push(v)}const g=[];for(let h=0;h<4;h++){const v=r(.68),p=v.getChannelData(0),b=v.getChannelData(1);me(p,b,e,0,.14,"lowpass",620,110,.7,.62,.002,0,s),me(p,b,e,0,.11,"bandpass",5400,2900,.9,.8,.002,0,s),me(p,b,e,.008,.54,"highpass",4400,7600,.6,.3,.004,0,s);for(let w=0;w<24;w++){const P=s()*s()*.3,S=2600+s()*6200,M=.035+s()*.12,z=-.55+s()*1.1;ce(p,b,e,P,M,S,S,.045,.001,"sine",z)}g.push(v)}const m=[];for(let h=0;h<4;h++){const v=a(.24),p=v.getChannelData(0);me(p,null,e,0,.055,"bandpass",5800,3200,1.3,.4,.0015,0,s),me(p,null,e,.005,.16,"highpass",4800,8200,.8,.16,.002,0,s);for(let b=0;b<6;b++){const w=3400+s()*5600;ce(p,null,e,s()*.045,.025+s()*.065,w,w,.04,.001,"sine",0)}m.push(v)}const f=[],d=[];for(let h=0;h<6;h++){const v=.02+h/5*.14,p=5400/(1+v*2.8),b=.032+v*.22,w=a(b+.03),P=w.getChannelData(0),S=1.48+s()*.45,M=2.35+s()*.8;ce(P,null,e,0,b,p,p,.55,.001,"sine",0),ce(P,null,e,0,b/S,Math.min(15500,p*S),Math.min(15500,p*S),.32,.001,"sine",0),ce(P,null,e,0,b/M,Math.min(15500,p*M),Math.min(15500,p*M),.18,.001,"sine",0),me(P,null,e,0,.036,"bandpass",Math.min(12e3,p*.72),Math.min(12e3,p*.68),1.2,.72,.001,0,s),f.push(w);const z=b*1.25,B=a(z+.03),V=B.getChannelData(0),C=1.52+s()*.42,x=2.4+s()*.75;ce(V,null,e,0,z,p,p,.58,.001,"sine",0),ce(V,null,e,0,z/C,Math.min(15500,p*C),Math.min(15500,p*C),.34,.001,"sine",0),ce(V,null,e,0,z/x,Math.min(15500,p*x),Math.min(15500,p*x),.2,.001,"sine",0),d.push(B)}return{gemPop:n,blackWarn:i,bombExplode:l,failFreeze:c,cleave:y,cleavePlain:u,shatter:g,miniShatter:m,clinkFloor:f,clinkGlass:d}}playBuf(t,e,s=1,a,r,n=.14,i=!0){if(!this.ctx||!this.out||!i&&this.activeVoices>=this.maxVoices)return;this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});const l=this.ctx,c=l.currentTime+.003,u=l.createBufferSource();u.buffer=t,u.playbackRate.value=Math.max(.2,Math.min(2.5,s));const y=l.createGain();if(y.gain.setValueAtTime(e,c),a!==void 0){const g=l.createStereoPanner(),m=Math.max(-.94,Math.min(.94,a));g.pan.setValueAtTime(m,c),r!==void 0&&g.pan.linearRampToValueAtTime(Math.max(-.94,Math.min(.94,r)),c+n),u.connect(y).connect(g).connect(this.out)}else u.connect(y).connect(this.out);this.activeVoices++,u.onended=()=>{this.activeVoices=Math.max(0,this.activeVoices-1)},u.start(c)}ping(t,e,s,a,r=0){if(!this.ctx||!this.out)return;const n=this.ctx,i=n.createOscillator();i.type="sine",i.frequency.setValueAtTime(Math.min(16e3,e),t);const l=n.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(a,t+.003),l.gain.exponentialRampToValueAtTime(1e-4,t+s);const c=n.createStereoPanner();c.pan.value=Math.max(-1,Math.min(1,r)),i.connect(l).connect(c).connect(this.out),i.start(t),i.stop(t+s+.02)}swoosh(t,e,s=.65){if(!this.ctx||!this.out||!this.noise)return;this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});const a=this.ctx,r=a.currentTime+.003,n=Math.max(.25,Math.min(1,s)),i=.14+n*.045,l=a.createStereoPanner(),c=Math.max(-.94,Math.min(.94,t)),u=Math.max(-.94,Math.min(.94,e));l.pan.setValueAtTime(c,r),l.pan.linearRampToValueAtTime(u,r+i),l.connect(this.out);const y=a.createBufferSource();y.buffer=this.noise,y.loop=!0;const g=a.createBiquadFilter();g.type="bandpass",g.Q.value=1.35,g.frequency.setValueAtTime(680+n*240,r),g.frequency.exponentialRampToValueAtTime(2250+n*750,r+i*.24),g.frequency.exponentialRampToValueAtTime(560,r+i);const m=a.createGain(),f=.36+n*.22;m.gain.setValueAtTime(1e-4,r),m.gain.linearRampToValueAtTime(f,r+i*.16),m.gain.exponentialRampToValueAtTime(1e-4,r+i),y.connect(g).connect(m).connect(l),y.start(r,Math.random()*1.5),y.stop(r+i+.02);const d=a.createBufferSource();d.buffer=this.noise,d.loop=!0;const h=a.createBiquadFilter();h.type="bandpass",h.Q.value=1.8,h.frequency.setValueAtTime(1850+n*450,r),h.frequency.exponentialRampToValueAtTime(3400+n*600,r+i*.28),h.frequency.exponentialRampToValueAtTime(1400,r+i);const v=a.createGain();v.gain.setValueAtTime(1e-4,r),v.gain.linearRampToValueAtTime(.12+n*.09,r+i*.18),v.gain.exponentialRampToValueAtTime(1e-4,r+i),d.connect(h).connect(v).connect(l),d.start(r,Math.random()*1.5),d.stop(r+i+.02)}gemPop(t=0){if(!this.banks)return;const e=this.banks.gemPop,s=e[Math.floor(Math.random()*e.length)],a=.95+Math.random()*.12;this.playBuf(s,.95,a,Math.max(-.85,Math.min(.85,t)),void 0,0,!0)}blackWarning(t=0){if(!this.banks)return;const e=.96+Math.random()*.08;this.playBuf(this.banks.blackWarn,.95,e,Math.max(-.85,Math.min(.85,t)),void 0,0,!0)}bombExplode(){this.banks&&this.playBuf(this.banks.bombExplode,1,1,void 0,void 0,0,!0)}launch(t=0,e=!1){if(!this.ctx||!this.banks)return;const s=this.ctx.currentTime+.004;e?(this.playBuf(this.banks.blackWarn,.65,.85,t,void 0,0,!0),this.ping(s+.02,520+Math.random()*60,.22,.075,t)):(this.swoosh(t-.15,t+.15,.3),this.ping(s+.02,1680+Math.random()*240,.16,.045,t))}comboChime(t,e=0){if(!this.ctx)return;const s=this.ctx.currentTime+.004,a=[1046.5,1318.5,1568,2093,2637,3136],r=a[Math.min(a.length-1,Math.max(0,t-1))];this.ping(s,r,.26,.09,e),this.ping(s+.04,r*1.25,.24,.065,e)}failFreeze(){this.banks&&this.playBuf(this.banks.failFreeze,1,1,void 0,void 0,0,!0)}levelClear(){if(!this.ctx)return;const t=this.ctx.currentTime+.004;this.ping(t,1046.5,.3,.08,-.2),this.ping(t+.075,1318.5,.32,.085,0),this.ping(t+.15,1568,.42,.1,.2),this.ping(t+.22,2093,.48,.09,0)}cleave(t=.55,e=!0){if(!this.banks)return;const s=.94+Math.random()*.12;if(!e){this.playBuf(this.banks.cleavePlain,.95,s,void 0,void 0,0,!0);return}const a=this.banks.cleave,r=a[Math.floor(Math.random()*a.length)];this.playBuf(r,.95,s,void 0,void 0,0,!0)}shatter(t=1){if(!this.banks)return;const e=this.banks.shatter,s=e[Math.floor(Math.random()*e.length)],a=Math.max(.22,t*(.92+Math.random()*.16));this.playBuf(s,.95,a,void 0,void 0,0,!0)}miniShatter(t,e=1){if(!this.banks)return;const s=this.banks.miniShatter,a=s[Math.floor(Math.random()*s.length)],r=Math.max(.22,e*(.9+Math.random()*.2));this.playBuf(a,.9,r,t,void 0,0,!1)}clink(t,e,s,a,r=1){if(!this.banks)return;const n=Math.min(.18,Math.sqrt(Math.max(1e-6,t))),i=Math.min(.42,(.02+e*.045)*(.45+n*8));if(i<.025)return;const l=s===1?this.banks.clinkGlass:this.banks.clinkFloor,c=Math.min(l.length-1,Math.max(0,Math.floor(n/.16*l.length))),u=Math.max(.25,r*(.86+Math.random()*.28));this.playBuf(l[c],i,u,a,void 0,0,!1)}}function Fn(o){return new Worker("/codevember-sets/theo/02/assets/sim.worker-CemiIHqv.js",{name:o?.name})}const St=new URLSearchParams(location.search),Rs=St.has("clean");St.has("debug")||location.hash;Rs&&document.documentElement.classList.add("clean");const lo=.56,zt=.36,As=[lo*.5,lo*.54,lo*.5],Fs=[zt*.5,zt*.54,zt*.5],Zo=[0,.52,0],En=2.6,Ht=4.2,Nn=!1,De=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<=1024,Gn=De?1.5:2,Es=De?768:4096,_n=De?.35:1,On=De?512:1024,Ns=De?8:18,$t=De?36:96,ms=new Float32Array(0),Eo=[0,.96,2.22],No=[0,.4,0],gs=[0,.88,2.72],Go=[0,.56,0];let ae=[...Eo],Be=[...No];const Ko=38*Math.PI/180,qn=q([-.5,.84,.34]),pe={ior:1.56,dispersion:.062,causticStrength:1.35,shardCount:De?36:72,explodeForce:2.35,crackDuration:.36,exposure:1.06},je=document.getElementById("c"),Zt=document.getElementById("trail"),$=Zt.getContext("2d"),Un=document.getElementById("hud"),Wn=document.getElementById("hud-level"),Hn=document.getElementById("hud-score"),Yn=document.getElementById("hud-best"),We=document.getElementById("banner"),vs=We.querySelector(".banner-title"),xs=We.querySelector(".banner-jp"),_o=document.getElementById("sound"),co=document.getElementById("pause"),bs=document.getElementById("fatal"),Y=new An,N=new Dn(je,{maxSplinters:Es,causticRes:On}),ko=new Fn;let I=Xo(Number(St.get("seed"))||202602),Oo=0,Xn=0,be=[jo(zt,0)],Rt=St.get("shape")||"free",j=Ls(Rt),mt=0;const Gs=-.34,_s=.16;let xo=rt(Ze(Le([1,0,0],_s),Le([0,1,0],Gs))),uo=go(),Jo=go(),fe=[...xo],Me=[...Zo],Os=[0,0,0],re=Rt==="free"&&St.get("toss")!=="0",ye=Math.max(1,Math.min(wt,Number(St.get("level"))||1)),Fe=Ds(ye),_t=0,kt=0,Ot=0,qt=0,ee="ready",nt=0,Yt=(()=>{try{return Number(localStorage.getItem("shatter-2026-best")||"0")||0}catch{return 0}})(),bo=0,ht=0,yo=0,wo=0,fo=0,Po=!1,So=0,jn=1;const K=[],Tt=[];let pt=0,ct=0,ut=0,ys=-99999,ho=0,qo=0,Ct=0,At=0,so=-99999,qs=[0,.7,0],Us=2;const Kt=new Set;let Bt=0,Uo=-99999;const ws=[0,5,10,15,20,30],Qn=["","BLITZ","SUPER BLITZ","MEGA BLITZ","ULTRA BLITZ","UNBELIEVABLE"];function Xt(){const o=window.innerWidth/Math.max(1,window.innerHeight),t=o<.72?4.35:o<.95?3.48:o<1.2?2.94:2.72,e=t*Math.tan(Ko*.5),s=e*o,a=o<.72?.82:o<.95?.76:.66,r=Math.max(.48,Math.min(.88,s*a)),n=Go[1]-e,i=Math.min(-.82,n-.3),l=o<.72?1:o<.95?.45:0;return{eyeZ:t,stageHalfW:r,spawnY:i,portraitFactor:l}}let Vt=!1,ot=Nn,gt=!0,no=!1,Te=!1,ft=!1,vt=q([1,0,0]),jt=.18,ve=null,Ue=-1,et=[...vt],Ro=jt,Ae=null,Nt=-1,tt=!1,ue=null,_e=null;const Jt=new Map,le=[],Pt=new Map;let es=1,Ve=0;const $e=[],He=[];let xt=-1,Ke=!1,Ee=0,Ne=0,he=0,xe=0,Ut=0,Wt=0,st=0,Ge=!1,Ye=!1,Ft=0;const Se=[];let ge=new Float32Array(16),J=new Float32Array(16);function Wo(){const o=Math.max(.2,je.width/Math.max(1,je.height)),t=Zs(Ko,o,.05,40),e=Ks(ae,Be,[0,1,0]);ge=Js(t,e),J=en(ge)}function po(o){const t=ge[0]*o[0]+ge[4]*o[1]+ge[8]*o[2]+ge[12],e=ge[1]*o[0]+ge[5]*o[1]+ge[9]*o[2]+ge[13],s=ge[3]*o[0]+ge[7]*o[1]+ge[11]*o[2]+ge[15];if(s<=.001)return{x:-999,y:-999,visible:!1};const a=t/s,r=e/s;return{x:(a*.5+.5)*window.innerWidth,y:(.5-r*.5)*window.innerHeight,visible:a>=-1.05&&a<=1.05&&r>=-1.05&&r<=1.05}}function Ho(o,t){const e=o/Math.max(1,window.innerWidth)*2-1,s=1-t/Math.max(1,window.innerHeight)*2,a=J[0]*e+J[4]*s+J[12],r=J[1]*e+J[5]*s+J[13],n=J[2]*e+J[6]*s+J[14],i=J[3]*e+J[7]*s+J[15],l=J[0]*e+J[4]*s+J[8]+J[12],c=J[1]*e+J[5]*s+J[9]+J[13],u=J[2]*e+J[6]*s+J[10]+J[14],y=J[3]*e+J[7]*s+J[11]+J[15],g=[a/i,r/i,n/i],m=[l/y,c/y,u/y];return q(H(m,g))}function Ws(o,t,e,s,a){const r=Ho(o,t),n=oo(a),i=W(n,H(ae,s)),l=q(W(n,r));let c=0,u=1e6;for(const y of e.faces){const g=y.d-te(y.n,i),m=te(y.n,l);if(Math.abs(m)<1e-7){if(g<0)return!1}else{const f=g/m;if(m>0?u=Math.min(u,f):c=Math.max(c,f),c>u)return!1}}return u>.01}function Hs(o,t){if(be.length===0)return!1;for(const e of be)if(Ws(o,t,e,Me,fe))return!0;return!1}function Ys(o,t,e,s,a){if(Math.hypot(e-o,s-t)<10)return null;const r=Ho(o,t),n=Ho(e,s),i=ke(r,n),l=se(i);if(l<1e-5)return null;let c=[i[0]/l,i[1]/l,i[2]/l],u=te(H(ae,a),c);return u<0&&(c=[-c[0],-c[1],-c[2]],u=-u),{n:c,d:u}}function Co(o,t,e,s){return Ys(o,t,e,s,Me)}function ts(){N.setMainBlocks(be.map(o=>({verts:Dt(o),planes:It(o)})))}function bt(){if(j){if(ue||mt>=j.steps.length){ft=!1,tt=!1,ve=null,Ue=-1,N.setSectionLoops([],ae);return}const r=j.steps[mt],n=[];if(r.kind==="plane"){tt=!0;const i=r.planes[0];if(vt=q(W(fe,i.n)),jt=i.d,r.planes.length>1){const l=r.planes[1];ve=q(W(fe,l.n)),Ue=l.d}else ve=null,Ue=-1;for(const l of r.planes)for(const c of be){const u=Ao(c,l.n,l.d);u.length>=3&&n.push(u.map(y=>A(Me,W(fe,y))))}ft=!0,N.setSectionLoops(n,ae);return}else{const i=r.chunks[0],l=Math.abs(i.pushDir[2])>.85;if(tt=!l,vt=q(W(fe,i.cutPlane.n)),jt=Math.max(.02,i.cutPlane.d),r.chunks.length>1&&!l){const c=r.chunks[1];ve=q(W(fe,c.cutPlane.n)),Ue=Math.max(.02,c.cutPlane.d)}else ve=null,Ue=-1;for(const c of r.chunks)for(const u of c.poly.faces)Math.abs(u.n[2])>.9&&u.verts.length>=3&&n.push(u.verts.map(y=>A(Me,W(fe,y))));ft=!0,N.setSectionLoops(n,ae);return}}if(!Ke||Ye||be.length===0){ft=!1,tt=!1,ve=null,Ue=-1,N.setSectionLoops([],ae);return}const o=Co(Ee,Ne,he,xe);if(!o){ft=!1,tt=!1,N.setSectionLoops([],ae);return}tt=!0,vt=o.n,jt=o.d,Vt&&o.d>.015?(ve=[-o.n[0],-o.n[1],-o.n[2]],Ue=o.d):(ve=null,Ue=-1);const t=oo(fe),e=[{n:q(W(t,o.n)),d:o.d}];ve&&e.push({n:q(W(t,ve)),d:o.d});const s=[];let a=!1;for(const r of e)for(const n of be){const i=Ao(n,r.n,r.d);if(i.length>=3){const l=vo(n,r.n,r.d);l.neg&&l.pos&&l.neg.volume>5e-5&&l.pos.volume>5e-5&&(a=!0,s.push(i.map(c=>A(Me,W(fe,c)))))}}ft=a,N.setSectionLoops(s,ae)}function Xs(){const o=re&&!j;Un.hidden=!o,o&&(Wn.textContent=String(ye),Hn.textContent=String(nt),Yn.textContent=String(Yt))}function js(o){We.dataset.mode=o,o==="play"?(vs.textContent="Play",xs.textContent="始める",We.setAttribute("aria-label","Play")):(vs.textContent="Replay",xs.textContent="もう一度",We.setAttribute("aria-label","Replay")),We.hidden=!1,je.classList.add("replay-ready")}function $n(){js("play")}function Zn(){js("replay")}function os(){We.hidden=!0,je.classList.remove("replay-ready")}function Kn(o,t,e,s=!1,a="#1c1c1c"){const r=po(o);r.visible&&Tt.push({x:r.x,y:r.y-18,text:t,sub:e,color:a,age:0,maxAge:s?.92:.56,emphasis:s})}function Qt(o,t,e,s,a=!1,r=0){if(nt+=o,nt>Yt){Yt=nt;try{localStorage.setItem("shatter-2026-best",String(Yt))}catch{}}t&&e&&Kn(t,e,s,a,bn[r]??"#1c1c1c"),Xs()}function ss(o){const t=At,e=[...qs],s=Us;if(At=0,Kt.clear(),so=-99999,t<3)return;const a=Math.max(-1,Math.min(1,e[0]*.9));if(Y.comboChime(t,a),Qt(t,e,`${t}× COMBO`,`+${t}`,!0,s),o-Uo<=5500){Bt=Math.min(ws.length-1,Bt+1);const r=ws[Bt],n=[e[0],e[1]-.16,e[2]];Qt(r,n,Qn[Bt],`+${r}`,!0,s)}else Bt=0;Uo=o}function we(){Xs()}function Je(o,t,e,s,a,r,n,i=0){if(o.length===0)return;const l=Math.max(1,Math.min(Es,Math.round(s*_n))),c=Gt[Oo],u=xn[i],y=[];for(let g=0;g<l;g++){const m=Math.floor(I()*o.length),f=o[m],d=t[m],h=[(I()-.5)*.03,(I()-.5)*.03,(I()-.5)*.03],v=q([e[0]+(I()-.5)*a*2,e[1]+(I()-.32)*a*2,e[2]+(I()-.5)*a*2]),p=se(e)*(.4+I()*.9)+I()*a;y.push({pos:A(f,h),vel:X(v,p),size:r+Math.pow(I(),2.2)*(n-r),maxAge:De?4.5+I()*3.5:8+I()*8,color:u?[...u]:yn(d,j?As:Fs,c),spinSpeed:8+I()*22})}N.spawnSplinters(y)}function Qs(o,t,e){let s=1/0;for(const a of o.faces)for(const r of a.verts){const n=t[1]+W(e,r)[1];n<s&&(s=n)}return s}function mo(o,t,e){const s=se(t)*e;return s<=1e-5?[...o]:rt(Ze(Le(q(t),s),o))}function ns(){const o=new Set;for(const t of K)o.add(t.slotIdx);for(const t of le)o.add(t.slotIdx);for(let t=0;t<qe;t++)if(!o.has(t))return t;if(le.length>0){let t=le[0];for(const s of le)s.worldPos[1]<t.worldPos[1]&&(t=s);const e=t.slotIdx;if(t.bakedResp)eo(t);else{N.clearCutSlot(e),t.detonated=!0;const s=le.indexOf(t);s>=0&&le.splice(s,1)}return e}return 0}function Ps(o,t){if(o.bakeStarted)return;o.bakeStarted=!0;const e=[o.worldPos[0]+o.worldVel[0]*t,o.worldPos[1]+o.worldVel[1]*t-.5*Ht*t*t,o.worldPos[2]+o.worldVel[2]*t],s=[o.worldVel[0],o.worldVel[1]-Ht*t,o.worldVel[2]],a=mo(o.quat,o.angVel,t),r=Qs(o.cutPoly,e,a);r<.015&&(e[1]+=.015-r);const n=q(W(oo(a),[0,-1,0])),{shards:i}=$o(o.cutPoly,n,j?.2:.13,o.targetShards,I);if(i.length===0){o.detonated=!0,N.clearCutSlot(o.slotIdx);return}const l=[];for(const h of i)l.push(h);for(const h of i)if(h.children)for(const v of h.children)l.push(v);o.parentShards=i,o.flatShards=l;const c=A(e,W(a,o.cutPoly.centroid)),u=Math.abs(s[1]),y=Math.min(1.65,.72+u*.22);let g=i.length;const m=[];for(let h=0;h<i.length;h++){const v=i[h],p=W(a,v.centroid),b=[e[0]+p[0],Math.max(.028,e[1]+p[1]),e[2]+p[2]],w=H(b,c),P=q([w[0]+(I()-.5)*.06,0,w[2]+(I()-.5)*.06]),S=pe.explodeForce*y*(.68+I()*.85),M=[s[0]*.52+P[0]*(1.25*S)+(I()-.5)*.95,Math.max(.38,.45+I()*1.35+u*.22),s[2]*.52+P[2]*(1.25*S)+(I()-.5)*.95],z=[(I()-.5)*18,(I()-.5)*18,(I()-.5)*18];let B;v.children&&v.children.length>=2&&(B=v.children.map(V=>({slotIndex:g++,hullVerts:V.hullVerts,localOffset:H(V.centroid,v.centroid),volume:V.volume}))),m.push({slotIndex:h,hullVerts:v.hullVerts,initPos:b,initQuat:a,linVel:M,angVel:z,volume:v.volume,breakSpeed:1.05+I()*.85,children:B})}const f=es++;o.bakeId=f,Pt.set(f,o);const d={id:f,totalSlots:l.length,shards:m,staticObstacles:He.slice(-$t),maxFrames:De?210:260,fps:60};ko.postMessage(d)}function eo(o){if(o.detonated||!o.bakedResp)return;o.detonated=!0;const t=o.bakedResp;o.bakedResp=null,N.clearCutSlot(o.slotIdx);const e=le.indexOf(o);e>=0&&le.splice(e,1);const s=no?.28:1;Y.shatter(s);const a=o.parentShards.map(c=>{const u=W(o.quat,c.centroid);return[o.worldPos[0]+u[0],Math.max(.02,o.worldPos[1]+u[1]),o.worldPos[2]+u[2]]}),r=o.parentShards.map(c=>c.centroid);Je(a,r,[o.worldVel[0]*.45,1.45,o.worldVel[2]*.45],440,pe.explodeForce*1.35,.0017,.0072,o.gemId);const n=o.flatShards.length;Ve+n>dt&&(N.clearShards(),$e.length=0,He.length=0,Ve=0);const i=Ve;Ve+=n;const l=Vs(o.flatShards,i);N.addShardBatch(l,i,n,Ns);for(let c=0;c<n;c++){const u=c*7,y=t.frames[u+1],g=y>-100;N.setShardPose(i+c,[t.frames[u],g?y:-999,t.frames[u+2]],[t.frames[u+3],t.frames[u+4],t.frames[u+5],t.frames[u+6]],g,o.gemId)}N.flushShardPoses(Ve),$e.push({baseShardId:i,numShards:n,fps:t.fps,numFrames:t.numFrames,frames:t.frames,contacts:t.contacts,nextContact:0,elapsed:0,settled:!1,gemId:o.gemId,shards:o.flatShards})}function Ss(o,t,e,s,a,r){const{shards:n}=$o(o,[0,1,0],0,r,I);if(n.length===0)return;const i=[];for(const m of n)i.push(m);for(const m of n)if(m.children)for(const f of m.children)i.push(f);const l=A(t,W(e,o.centroid));let c=n.length;const u=[];for(let m=0;m<n.length;m++){const f=n[m],d=W(e,f.centroid),h=[t[0]+d[0],Math.max(.04,t[1]+d[1]),t[2]+d[2]],v=H(h,l),p=se(v)>1e-4?q(v):q([I()-.5,I()-.3,I()-.5]),b=pe.explodeForce*(1.05+I()*.95),w=[s[0]*.3+p[0]*b*1.45+(I()-.5)*1.2,s[1]*.25+p[1]*b*1.15+.95+I()*1.1,s[2]*.3+p[2]*b*1.45+(I()-.5)*1.2];let P;f.children&&f.children.length>=2&&(P=f.children.map(S=>({slotIndex:c++,hullVerts:S.hullVerts,localOffset:H(S.centroid,f.centroid),volume:S.volume}))),u.push({slotIndex:m,hullVerts:f.hullVerts,initPos:h,initQuat:e,linVel:w,angVel:[(I()-.5)*20,(I()-.5)*20,(I()-.5)*20],volume:f.volume,breakSpeed:1.05+I()*.85,children:P})}Je(n.map(m=>{const f=W(e,m.centroid);return[t[0]+f[0],Math.max(.03,t[1]+f[1]),t[2]+f[2]]}),n.map(m=>m.centroid),[0,1.2,0],260,pe.explodeForce*1.65,.0018,.0082,a);const y={slotIdx:-1,cutPoly:o,worldPos:[...t],worldVel:[...s],quat:[...e],angVel:[0,0,0],targetShards:r,gemId:a,bakeStarted:!0,bakeId:0,flatShards:i,parentShards:n,bakedResp:null,hitGroundWaiting:!0,detonated:!1},g=es++;y.bakeId=g,Pt.set(g,y),ko.postMessage({id:g,totalSlots:i.length,shards:u,staticObstacles:He.slice(-$t),maxFrames:De?210:250,fps:60})}function $s(o){ee==="failing"||ee==="lost"||(ee="failing",bo=.42,ht=.82,yo=.068,wo=1,Y.wake(),Y.failFreeze(),os(),we())}function Jn(){const o=K.length+le.length,t=Math.max(22,Math.min(54,Math.round(130/Math.max(1,o))));for(const e of[...K])N.clearCutSlot(e.slotIdx),Ss(e.poly,e.pos,e.quat,e.vel,e.gemId,t);K.length=0;for(const e of[...le])e.detonated||(N.clearCutSlot(e.slotIdx),e.bakedResp?eo(e):(e.detonated=!0,Ss(e.cutPoly,e.worldPos,e.quat,e.worldVel,e.gemId,t)));le.length=0,o===0&&Je([[0,.12,0]],[[0,0,0]],[0,2.2,0],380,3.4,.0022,.0085,Is),Y.bombExplode(),Y.shatter(.68),ht=Math.max(ht,.36),yo=Math.max(yo,.055),ee="lost",Po=!0,So=2,we()}function Xe(o,t=!1){ye=Math.max(1,Math.min(wt,Math.floor(o))),t&&(nt=0,Bt=0,Uo=-99999),ue=null,_e=null,Jt.clear(),K.length=0,le.length=0,Pt.clear(),Tt.length=0,N.clearAllCutSlots(),be=[],N.setMainBlocks([]),Fe=Ds(ye),_t=0,kt=0,Ot=0,qt=0,ee="playing",bo=0,fo=0,Po=!1,So=0,pt=0,At=0,Kt.clear(),so=-99999,os(),we()}function ea(o){const{eyeZ:t,stageHalfW:e,spawnY:s,portraitFactor:a}=Xt(),r=Xo(o.seed),n=jo(zt,o.variant),i=ns(),l=[.06,-.28,-.62,.34,-.94];let c=l[0],u=-1;for(const C of l){let x=1/0;for(const T of K){const k=Math.abs(C-T.pos[2]);k<x&&(x=k)}if(x>=.34){c=C;break}x>u&&(u=x,c=C)}const y=Math.max(.75,(t-c)/t),g=o.lane*e*y,m=o.targetLane*e*y,f=s,d=Math.max(0,Math.min(1,(o.apex-.74)/.42)),h=o.apex+a*(o.poisoned?.04+d*.14:.04+d*.36),v=o.gravity*(1+a*.28),p=Math.sqrt(2*v*(h-f)),b=p/v,w=(m-g)/Math.max(.25,b),P=0,S=[g,f,c],M=[w,p,P],z=rt(Ze(Le([0,1,0],(r()-.5)*Math.PI*1.4),Ze(Le([1,0,0],(r()-.5)*.85),Le([0,0,1],(r()-.5)*.65)))),B=q([(r()-.5)*1.6,.5+r()*1.1,(r()-.5)*1.4]),V=X(B,o.spinSpeed);if(N.setCutSlot(i,{verts:Dt(n),planes:It(n),crackVerts:new Float32Array(0),surfaceCrackVerts:new Float32Array(0)},S,z,o.gemId),K.push({id:jn++,slotIdx:i,poly:n,startVol:Math.max(.01,n.volume),pos:S,vel:M,quat:z,angVel:V,gravity:v,poisoned:o.poisoned,gemId:o.gemId,slices:0,lastSlicedAt:-1e3,swipeEntered:!1,swipeDist:0,enterX:0,enterY:0}),o.poisoned){const C=Math.max(-.85,Math.min(.85,g/Math.max(.25,e)*.78));Y.launch(C,!0)}}function ta(o,t,e,s,a,r,n,i,l,c,u=0){const y=A(s,A(X(r,.72),[0,.22,0])),g=ke(r,[0,1,0]),m=se(g),f=A(X(a,.75),m>.001?A(X(g,3.2/m),[(I()-.5)*2.2,(I()-.5)*2.2,(I()-.5)*2.2]):[(I()-.5)*4.5,(I()-.5)*4.5,(I()-.5)*4.5]),d=ns(),h=A(t,X(r,.012)),v=[...e];N.setCutSlot(d,{verts:Dt(o),planes:It(o),crackVerts:new Float32Array(0),surfaceCrackVerts:new Float32Array(0)},h,v,u),le.push({slotIdx:d,cutPoly:o,worldPos:h,worldVel:y,quat:v,angVel:f,targetShards:i,gemId:u,bakeStarted:!1,bakeId:0,flatShards:[],parentShards:[],bakedResp:null,hitGroundWaiting:!1,detonated:!1});const p=n.map(b=>A(t,W(e,b)));Je(p.length>0?p:[A(t,W(e,o.centroid))],n.length>0?n:[o.centroid],A(X(s,.45),A(X(r,.95),[0,.28,0])),c,1.05,.0018,.0068,u)}function Mo(o,t,e,s,a,r){if(ee!=="playing")return!1;if(o.poisoned)return Ft=1,$s(),!0;const n=Ys(t,e,s,a,o.pos);if(!n)return!1;const i=oo(o.quat),l=[{n:q(W(i,n.n)),d:n.d}];if(Vt&&n.d>.012){const w=[-n.n[0],-n.n[1],-n.n[2]];l.push({n:q(W(i,w)),d:n.d})}let c=o.poly;const u=[];for(const w of l){if(!c)break;const P=vo(c,w.n,w.d);if(P.neg&&P.pos&&P.neg.volume>5e-5&&P.pos.volume>5e-5){const S=se(P.neg.centroid);if(se(P.pos.centroid)>=S)c=P.neg,u.push({cutPoly:P.pos,localN:w.n,localD:w.d,localPush:w.n,section:P.section});else{c=P.pos;const z=[-w.n[0],-w.n[1],-w.n[2]];u.push({cutPoly:P.neg,localN:z,localD:-w.d,localPush:z,section:P.section})}}}if(u.length===0||!c)return!1;Y.wake(),Y.cleave(.14,!1),Ft=1,pt=.028,o.slices++,o.lastSlicedAt=r;const y=[...o.pos],g=[...o.quat],m=[...o.vel],f=[...o.angVel],d=Math.max(-1,Math.min(1,y[0]*.9)),h=n.d<.0085&&!Vt&&o.slices===1;if(o.slices===1?(Kt.has(o.id)||(Kt.add(o.id),At++,so=r,qs=y,Us=o.gemId),h?(Y.comboChime(4,d),Qt(11,y,"CRITICAL","+10",!0,o.gemId)):Qt(1,y,"+1",void 0,!1,o.gemId)):(Y.comboChime(o.slices+1,d),Qt(1,y,`CUT ×${o.slices}`,"+1",!0,o.gemId)),n.d<.03&&!Vt||o.slices>=2||c.volume<o.startVol*.25){const w=u[0],P=[-w.localN[0],-w.localN[1],-w.localN[2]];u.push({cutPoly:c,localN:P,localD:-w.localD,localPush:P,section:w.section}),N.clearCutSlot(o.slotIdx);const S=K.indexOf(o);S>=0&&K.splice(S,1)}else{o.poly=c,N.setCutSlot(o.slotIdx,{verts:Dt(c),planes:It(c),crackVerts:new Float32Array(0),surfaceCrackVerts:new Float32Array(0)},o.pos,o.quat,o.gemId);const{stageHalfW:w}=Xt(),P=q(W(g,u[0].localPush)),S=Math.min(1.12,Math.max(o.pos[1]+.18,.86)),M=Math.sqrt(2*o.gravity*Math.max(.1,S-o.pos[1])),z=Math.abs(o.pos[0])>w*.7?-o.pos[0]*.65:-o.pos[0]*.28;o.vel=[o.vel[0]*.45+z-P[0]*.22,M,o.vel[2]*.25-P[2]*.1];const B=ke(P,[0,1,0]),V=se(B);V>.001&&(o.angVel=A(X(o.angVel,.7),X(B,2.2/V)))}const b=Math.round(pe.shardCount*(u.length>1?.46:.64));for(const w of u){const P=Math.min(1.22,Math.max(.42,Math.pow(w.cutPoly.volume/.0075,.62))),S=Math.round(b*P),M=q(W(g,w.localPush));ta(w.cutPoly,y,g,m,f,M,w.section,S,!0,u.length>1?34:48,o.gemId)}return we(),!0}function at(o){if(ue&&yt(),j&&mt>=j.steps.length)return ao(),!0;if(be.length===0)return!1;Y.wake();const t=[];if(j){const m=j.steps[mt];if(mt++,m.kind==="plane"){let f=[...be];for(const d of m.planes){const h=[];for(const v of f){const p=vo(v,d.n,d.d);p.neg&&p.pos&&p.neg.volume>12e-5&&p.pos.volume>12e-5?(h.push(p.neg),t.push({cutPoly:p.pos,localN:d.n,localD:d.d,localPush:d.n,section:p.section})):h.push(p.neg??v)}f=h}f.length>0&&(be=f)}else{be=m.nextParts;for(const f of m.chunks)t.push({cutPoly:f.poly,localN:f.cutPlane.n,localD:f.cutPlane.d,localPush:q(f.pushDir),section:[]})}}else{if(!o)return!1;const m=oo(fe),f=[{n:q(W(m,o.n)),d:o.d}];if(Vt&&o.d>.015){const h=[-o.n[0],-o.n[1],-o.n[2]];f.push({n:q(W(m,h)),d:o.d})}let d=[...be];for(const h of f){const v=[];for(const p of d){const b=vo(p,h.n,h.d);if(b.neg&&b.pos&&b.neg.volume>5e-5&&b.pos.volume>5e-5){const w=se(b.neg.centroid);if(se(b.pos.centroid)>=w)v.push(b.neg),t.push({cutPoly:b.pos,localN:h.n,localD:h.d,localPush:h.n,section:b.section});else{v.push(b.pos);const S=[-h.n[0],-h.n[1],-h.n[2]];t.push({cutPoly:b.neg,localN:S,localD:-h.d,localPush:S,section:b.section})}}else v.push(p)}d=v}d.length>0&&(be=d)}if(t.length===0)return bt(),we(),!1;t.sort((m,f)=>f.cutPoly.volume-m.cutPoly.volume);const e=t.slice(0,2),s=[...Me],a=[...fe];[...Os],ts();const r=e.length>1?Math.round(pe.shardCount*.62):pe.shardCount,n=!1;if(gt){Ft=1,Y.cleave(.14,!1);for(let m=0;m<e.length;m++){const f=e[m],d=j?.026:.0075,h=Math.min(1.45,Math.max(.42,Math.pow(f.cutPoly.volume/d,.65))),v=Math.round(r*h),p=q(W(a,f.localPush)),b=A(X(p,.85),[0,.36,0]),w=ke(p,[0,1,0]),P=se(w),S=A([0,0,0],P>.001?A(X(w,3.2/P),[(I()-.5)*2.2,(I()-.5)*2.2,(I()-.5)*2.2]):[(I()-.5)*4.5,(I()-.5)*4.5,(I()-.5)*4.5]),M=ns(),z=A(s,X(p,.012)),B=[...a];N.setCutSlot(M,{verts:Dt(f.cutPoly),planes:It(f.cutPoly),crackVerts:new Float32Array(0),surfaceCrackVerts:new Float32Array(0)},z,B),le.push({slotIdx:M,cutPoly:f.cutPoly,worldPos:z,worldVel:b,quat:B,angVel:S,targetShards:v,gemId:0,bakeStarted:!1,bakeId:0,flatShards:[],parentShards:[],bakedResp:null,hitGroundWaiting:!1,detonated:!1});const V=f.section.map(C=>A(s,W(a,C)));Je(V.length>0?V:[A(s,W(a,f.cutPoly.centroid))],f.section.length>0?f.section:[f.cutPoly.centroid],A([0,0,0],A(X(p,.95),[0,.3,0])),e.length>1?45:65,1.05,.002,.0075)}return we(),!0}const i=[],l=[],c=[],u=[];for(let m=0;m<e.length;m++){const f=e[m],d=Math.min(1.45,Math.max(.38,Math.pow(f.cutPoly.volume/.026,.7))),h=Math.round(r*d),{shards:v,crackFaces:p,surfaceCracks:b}=$o(f.cutPoly,f.localN,f.localD,h,I),w=q(W(a,f.localPush)),P=[0,0,0];i.push({cutPoly:f.cutPoly,shards:v,localPushDir:f.localPush,worldPos:[...s],worldVel:P,ballistic:n}),l.push({verts:Dt(f.cutPoly),planes:It(f.cutPoly),crackVerts:ot?rn(p):new Float32Array(0),surfaceCrackVerts:ot?an(b):new Float32Array(0)});const S=f.section.map(M=>A(s,W(a,M)));Je(S.length>0?S:[A(s,W(a,f.cutPoly.centroid))],f.section.length>0?f.section:[f.cutPoly.centroid],A([0,0,0],A(X(w,1.05),[0,.35,0])),e.length>1?85:130,1.2,.0026,.009)}for(let m=0;m<i.length;m++)for(const f of i[m].shards)c.push(f),u.push(m);for(const m of i)for(const f of m.shards)if(f.children)for(const d of f.children)c.push(d);const y=ot?pe.crackDuration:.001;Ft=1;const g=[0,0,0];return ue={chunks:i,flatShards:c,parentChunkIdx:u,crackElapsed:0,crackDur:y,cutQuat:[...a],cutAngVel:g,ballistic:n,shattering:!1,bakeId:0},N.setCutPieces(l),!ot&&gt?(_e=ue,yt()):(_e=null,Y.cleave(y,ot),we()),!0}function yt(){if(!ue)return;Y.wake();const o=ue;ue=null,o.shattering=!0;const t=o.ballistic?[...o.cutQuat]:[...fe],e=Math.min(1,o.crackElapsed/Math.max(.05,o.crackDur)),s=.003+.009*(1-Math.pow(1-e,2.4)),a=o.chunks.map(f=>q(W(t,f.localPushDir))),r=o.chunks.map((f,d)=>f.ballistic?f.worldPos:A(Me,X(a[d],s))),n=o.chunks.map((f,d)=>A(r[d],W(t,f.cutPoly.centroid))),i=Math.round(680/Math.max(1,o.chunks.length));for(let f=0;f<o.chunks.length;f++){const d=o.chunks[f],h=d.shards.map(p=>A(r[f],W(t,p.centroid))),v=d.shards.map(p=>p.centroid);Je(h,v,A(d.worldVel,A(X(a[f],pe.explodeForce*1.15),[0,.95,0])),i,pe.explodeForce*1.35,.0022,.0095)}const l=no?.28:1;Y.shatter(l);const c=es++;o.bakeId=c,Jt.set(c,o);const u=o.parentChunkIdx.length;let y=u;const g=[];for(let f=0;f<u;f++){const d=o.flatShards[f],h=o.parentChunkIdx[f],v=o.chunks[h],p=a[h],b=r[h],w=n[h],P=W(t,d.centroid),S=[b[0]+P[0],Math.max(.03,b[1]+P[1]),b[2]+P[2]],M=H(S,w),z=se(M)>1e-4?q(M):p,B=pe.explodeForce*(.68+I()*.85),V=[v.worldVel[0]*.72+p[0]*(1.05*B)+z[0]*(.88*B)+(I()-.5)*.95,v.worldVel[1]*.65+p[1]*(.52*B)+z[1]*(.62*B)+.65+I()*.9,v.worldVel[2]*.72+p[2]*(1.05*B)+z[2]*(.88*B)+(I()-.5)*.95],C=[(I()-.5)*15,(I()-.5)*15,(I()-.5)*15];let x;d.children&&d.children.length>=2&&(x=d.children.map(T=>({slotIndex:y++,hullVerts:T.hullVerts,localOffset:H(T.centroid,d.centroid),volume:T.volume}))),g.push({slotIndex:f,hullVerts:d.hullVerts,initPos:S,initQuat:t,linVel:V,angVel:C,volume:d.volume,breakSpeed:1.15+I()*.85,children:x})}const m={id:c,totalSlots:o.flatShards.length,shards:g,staticObstacles:He.slice(-$t),maxFrames:De?210:260,fps:60};ko.postMessage(m),we()}ko.onmessage=o=>{const t=o.data,e=Pt.get(t.id);if(e){if(Pt.delete(t.id),e.detonated)return;e.bakedResp=t,e.hitGroundWaiting&&eo(e);return}const s=Jt.get(t.id);if(!s)return;Jt.delete(t.id),_e&&_e.bakeId===t.id&&(_e=null),!ue&&!_e&&le.length===0&&N.clearAllCutSlots();const a=s.flatShards.length;Ve+a>dt&&(N.clearShards(),$e.length=0,He.length=0,Ve=0);const r=Ve;Ve+=a;const n=Vs(s.flatShards,r);N.addShardBatch(n,r,a,Ns);for(let i=0;i<a;i++){const l=i*7,c=t.frames[l+1],u=c>-100;N.setShardPose(r+i,[t.frames[l],u?c:-999,t.frames[l+2]],[t.frames[l+3],t.frames[l+4],t.frames[l+5],t.frames[l+6]],u)}N.flushShardPoses(Ve),$e.push({baseShardId:r,numShards:a,fps:t.fps,numFrames:t.numFrames,frames:t.frames,contacts:t.contacts,nextContact:0,elapsed:0,settled:!1,gemId:0,shards:s.flatShards}),bt(),we()};function oa(o){re=o&&!j,ao()}function Ms(o){Rt=o,j=Ls(o),mt=0,re=o==="free",ao()}function ao(){if(ue=null,_e=null,Jt.clear(),le.length=0,Pt.clear(),N.clearAllCutSlots(),mt=0,pt=0,re&&!j){Bo(),bt(),we();return}os(),K.length=0,be=[j?tn(lo):jo(zt,Xn++)],Me=[...Zo],Os=[0,0,0],ts();const o=ln.find(t=>t.id===Rt)?.group==="letter";xo=rt(Ze(Le([1,0,0],o?.12:_s),Le([0,1,0],o?-.22:Gs))),uo=go(),Jo=go(),fe=[...xo],bt(),we()}function as(){N.clearShards(),$e.length=0,He.length=0,Ve=0}function Bo(){to(!1),as(),Xe(1,!0)}function to(o){Te=o,co.classList.toggle("paused",Te),co.setAttribute("aria-pressed",String(Te)),co.title=Te?"Resume (P)":"Pause (P)",Te&&(Ke=!1,xt=-1)}function sa(o,t){const e=o/Math.max(1,window.innerWidth)*2-1,s=t/Math.max(1,window.innerHeight)*2-1,a=e*.48,r=s*.3;Jo=rt(Ze(Le([1,0,0],r),Le([0,1,0],a)))}je.addEventListener("pointerdown",o=>{if(o.button!==0&&o.pointerType==="mouse")return;if(ee==="ready"&&!We.hidden){Y.wake(),Xe(ye,!1);return}if(ee==="lost"&&!We.hidden){Y.wake(),Bo();return}if(Te)return;Y.wake(),xt=o.pointerId,je.setPointerCapture(o.pointerId),Ke=!0,Ee=o.clientX,Ne=o.clientY,he=o.clientX,xe=o.clientY,Ut=0,Wt=0,ho=0,qo=performance.now(),Ct=0,ct=0,ut=0,At=0,Kt.clear(),so=-99999,st=0,Ye=!1;const t=Hs(o.clientX,o.clientY);Ge=t,Se.push({x:o.clientX,y:o.clientY,t:performance.now(),inGlass:t})});je.addEventListener("pointermove",o=>{if(!Ke||o.pointerId!==xt){o.pointerType==="mouse"&&sa(o.clientX,o.clientY);return}const t=performance.now(),e=Math.max(.004,(t-qo)*.001);qo=t;const s=he,a=xe,r=o.clientX-s,n=o.clientY-a,i=Math.hypot(r,n),l=i/e;if(Ct+=i,he=o.clientX,xe=o.clientY,i>2.5){const d=r/i,h=n/i;if(ct!==0||ut!==0)if(d*ct+h*ut<.42)ss(t),ct=d,ut=h;else{const w=ct*.72+d*.28,P=ut*.72+h*.28,S=Math.hypot(w,P)||1;ct=w/S,ut=P/S}else ct=d,ut=h;!Ge&&(Ut!==0||Wt!==0)&&d*Ut+h*Wt<.32&&(Ee=s,Ne=a),Ut=d,Wt=h;const v=ho!==0&&d*ho<-.25;v&&(Ct=Math.max(Ct,10));const p=v?85:145;if(Ct>=10&&l>=300&&t-ys>=p){Y.wake();const b=he/Math.max(1,window.innerWidth)*2-1,w=Math.abs(d)>.12?Math.sign(d):0,P=b-w*.46,S=b+w*.56,M=Math.min(1,(l-280)/1600);Y.swoosh(P,S,M),ys=t,ho=d,Ct=0}}if(re&&!j){if(ee!=="playing"){i>2&&Se.push({x:o.clientX,y:o.clientY,t,inGlass:!1});return}const d=Math.max(1,Math.min(7,Math.ceil(i/12)));let h=!1;const v=[...K];for(const p of v){if(ee!=="playing")break;if(!K.includes(p)||t-p.lastSlicedAt<170)continue;let b=!1,w=!1;for(let P=1;P<=d;P++){const S=P/d,M=s+r*S,z=a+n*S,B=Ws(M,z,p.poly,p.pos,p.quat);B&&(b=!0),P===d&&(w=B)}if(w&&(h=!0),b){if(p.poisoned){Mo(p,s,a,he,xe,t);break}p.swipeEntered||(p.swipeEntered=!0,p.enterX=s,p.enterY=a,p.swipeDist=0),p.swipeDist+=i}if(p.swipeEntered){const P=Math.hypot(he-p.enterX,xe-p.enterY);(!w&&P>=22||p.swipeDist>=34&&P>=28)&&(Mo(p,p.enterX,p.enterY,he,xe,t),p.swipeEntered=!1,p.swipeDist=0)}}i>2&&Se.push({x:o.clientX,y:o.clientY,t,inGlass:h});return}let c=!1,u=!1;const y=Math.max(1,Math.min(6,Math.ceil(i/14)));for(let d=1;d<=y;d++){const h=d/y,v=s+r*h,p=a+n*h,b=Hs(v,p);b&&(c=!0),d===y&&(u=b)}c&&(Ge||Math.hypot(s-Ee,a-Ne)>180&&(Ee=s-Ut*60,Ne=a-Wt*60),Ge=!0,st+=i),i>2&&Se.push({x:o.clientX,y:o.clientY,t,inGlass:u}),Ye&&!u&&(Ee=he,Ne=xe,Ge=!1,st=0,Ye=!1);const g=Math.hypot(he-Ee,xe-Ne),m=Ge&&!u&&g>=30,f=re&&Ge&&st>=42&&g>=42;if(!Ye&&(m||f)){let d=!1;if(j)d=at(null);else{const h=Co(Ee,Ne,he,xe);h&&(d=at(h))}d&&(Ee=he,Ne=xe,Ge=!1,st=0,Ye=!0)}});function na(o){if(o.pointerId!==xt)return;const t=performance.now();if(re&&!j){if(ee==="playing")for(const s of[...K])s.swipeEntered&&(Math.hypot(he-s.enterX,xe-s.enterY)>=16&&Mo(s,s.enterX,s.enterY,he,xe,t),s.swipeEntered=!1,s.swipeDist=0);ss(t),Ke=!1,xt=-1,Ge=!1,st=0,Ye=!1;return}const e=Math.hypot(he-Ee,xe-Ne);if(!Ye)if(e>=22)if(j)at(null);else{const s=Co(Ee,Ne,he,xe);s&&at(s)}else ue&&!gt?yt():j&&at(null);Ke=!1,xt=-1,Ge=!1,st=0,Ye=!1}je.addEventListener("pointerup",na);je.addEventListener("pointercancel",()=>{for(const o of K)o.swipeEntered=!1,o.swipeDist=0;Ke=!1,xt=-1,Ge=!1,st=0,Ye=!1});function aa(o,t){const e=Zt.width,s=Zt.height,a=Math.max(1,window.innerWidth),r=Math.max(1,window.innerHeight),n=e/a;$.clearRect(0,0,e,s);const i=220;for(;Se.length>0&&o-Se[0].t>i;)Se.shift();if($.save(),$.scale(n,n),wo>.01){const l=$.createRadialGradient(a*.5,r*.5,Math.min(a,r)*.25,a*.5,r*.5,Math.max(a,r)*.72);l.addColorStop(0,"rgba(20, 20, 24, 0)"),l.addColorStop(1,`rgba(20, 20, 24, ${(.28*wo).toFixed(3)})`),$.fillStyle=l,$.fillRect(0,0,a,r)}if(Se.length>=2){const l=[];let c=[Se[0]];for(let g=1;g<Se.length;g++)Se[g].t-Se[g-1].t>90?(c.length>=2&&l.push(c),c=[Se[g]]):c.push(Se[g]);c.length>=2&&l.push(c);const u=(g,m,f)=>{const d=g.length,h=new Float32Array(d),v=new Float32Array(d),p=new Float32Array(d),b=new Float32Array(d);for(let w=0;w<d;w++){const P=g[Math.max(0,w-1)],S=g[Math.min(d-1,w+1)];let M=S.x-P.x,z=S.y-P.y;const B=Math.hypot(M,z)||1;M/=B,z/=B;const V=-z,C=M,x=w/(d-1),T=Math.max(0,1-(o-g[w].t)/i),k=w===d-1?0:Math.min(1,(1-x)*5.5),L=Math.pow(x*T,1.15),E=m*L*k;h[w]=g[w].x+V*E,v[w]=g[w].y+C*E,p[w]=g[w].x-V*E,b[w]=g[w].y-C*E}$.beginPath(),$.moveTo(h[0],v[0]);for(let w=1;w<d;w++)$.lineTo(h[w],v[w]);for(let w=d-1;w>=0;w--)$.lineTo(p[w],b[w]);$.closePath(),$.fillStyle=f,$.fill()},y=1+Ft*.65;for(const g of l){const m=g[0],f=g[g.length-1],d=Math.max(0,1-(o-f.t)/i);if(d<=.01)continue;const h=$.createLinearGradient(m.x,m.y,f.x,f.y);h.addColorStop(0,"rgba(24, 24, 28, 0)"),h.addColorStop(.55,`rgba(24, 24, 28, ${(.34*d).toFixed(3)})`),h.addColorStop(1,`rgba(20, 20, 24, ${(.72*d).toFixed(3)})`),u(g,4.2*y,h);const v=$.createLinearGradient(m.x,m.y,f.x,f.y);v.addColorStop(0,"rgba(255, 255, 255, 0)"),v.addColorStop(.45,`rgba(255, 255, 255, ${(.65*d).toFixed(3)})`),v.addColorStop(1,`rgba(255, 255, 255, ${(.98*d).toFixed(3)})`),u(g,2*y,v)}}if(!Rs&&Tt.length>0){$.textAlign="center",$.textBaseline="middle";for(let l=Tt.length-1;l>=0;l--){const c=Tt[l];if(c.age+=t,c.age>=c.maxAge){Tt.splice(l,1);continue}const u=c.age/c.maxAge,y=u<.14?u/.14:Math.max(0,1-(u-.14)/.86),g=(1-Math.pow(1-u,2.2))*(c.emphasis?46:32),m=c.y-g;$.globalAlpha=y,$.lineJoin="round",$.lineWidth=c.emphasis?4.5:3.5,$.strokeStyle="rgba(244, 243, 240, 0.88)",$.font=c.emphasis?'700 22px "IBM Plex Sans", sans-serif':'700 16px "IBM Plex Sans", sans-serif',$.strokeText(c.text,c.x,m),$.fillStyle=c.color,$.fillText(c.text,c.x,m),c.sub&&($.font='700 10px "Inter", sans-serif',$.lineWidth=3,$.strokeText(c.sub,c.x,m+17),$.fillStyle=c.color,$.fillText(c.sub,c.x,m+17))}$.globalAlpha=1}$.restore()}We.addEventListener("click",()=>{Y.wake(),ee==="ready"?Xe(ye,!1):Bo()});_o.addEventListener("click",()=>{Y.wake(),Y.setMuted(!Y.muted),_o.classList.toggle("muted",Y.muted)});co.addEventListener("click",()=>{ee!=="ready"&&to(!Te)});window.addEventListener("keydown",o=>{if(!(o.target instanceof HTMLInputElement)){if(o.key==="Shift"){no=!0;return}if(o.code==="Space"||o.code==="Enter"){if(ee==="ready"){o.preventDefault(),Y.wake(),Xe(ye,!1);return}if(o.code==="Enter")return;o.preventDefault(),ee==="lost"?Bo():ue&&!gt?yt():j?at(null):re&&to(!Te)}else o.key==="p"||o.key==="P"||o.key==="Escape"?re&&!j&&ee!=="ready"&&to(!Te):o.key==="["?re&&!j&&Xe(Math.max(1,ye-1),!1):o.key==="]"?re&&!j&&Xe(Math.min(wt,ye+1),!1):o.key==="r"||o.key==="R"?ao():o.key==="c"||o.key==="C"?as():(o.key==="m"||o.key==="M")&&(Y.wake(),Y.setMuted(!Y.muted),_o.classList.toggle("muted",Y.muted))}});window.addEventListener("keyup",o=>{o.key==="Shift"&&(no=!1)});function ks(){const o=Math.min(Gn,window.devicePixelRatio||1),t=Math.floor(window.innerWidth*o),e=Math.floor(window.innerHeight*o);N.resize(t,e),Zt.width=t,Zt.height=e,Wo()}async function ra(){try{await N.init()}catch(s){bs.hidden=!1,bs.textContent=s instanceof Error?s.message:String(s);return}ks(),window.addEventListener("resize",ks);const o=Xt();ae=re?[0,gs[1],o.eyeZ]:[...Eo],Be=[...re?Go:No],Wo(),Rt!=="free"?Ms(Rt):re?(St.has("clean")?Xe(ye,!1):(ee="ready",N.clearAllCutSlots(),be=[],N.setMainBlocks([]),$n()),bt(),we()):(ts(),bt(),we()),window.shatter={slice:(s,a,r,n)=>{if(re&&!j){const l=performance.now();let c=0;for(const u of[...K])Mo(u,s,a,r,n,l)&&c++;return c>0}const i=Co(s,a,r,n);return i?at(i):!1},carve:()=>at(null),shatter:yt,reset:ao,sweep:as,setLevel:s=>Xe(s,!1),toss:()=>Xe(ye,!1),setToss:oa,getGameState:()=>({level:ye,phase:ee,score:nt,bestScore:Yt,flyingCount:K.length,stageHalfW:Xt().stageHalfW}),getBlockScreenPos:()=>{if(re&&!j&&K.length>0){const s=K[0];return{...po(s.pos),state:ee,worldPos:[...s.pos],score:nt,count:K.length}}return{...po(Me),state:ee,worldPos:[...Me],score:nt,count:K.length}},getFlyingScreenPos:()=>K.map(s=>({id:s.id,poisoned:s.poisoned,slices:s.slices,...po(s.pos),worldPos:[...s.pos]})),setCarve:Ms,setSym:s=>{Vt=s},setCrackle:s=>{ot=s,!ot&&ue&&gt&&yt()},setAuto:s=>{gt=s},setPalette:s=>{Oo=(s%Gt.length+Gt.length)%Gt.length},setPaused:to,cfg:pe};let t=performance.now();function e(s){requestAnimationFrame(e);const a=Math.min(.05,Math.max(.001,(s-t)*.001));t=s;const r=Te?0:a,n=s*.001,i=no?.22:1,c=Te||re&&!j&&ee==="failing"?0:a*i;Ft*=Math.exp(-r*11),wo*=Math.exp(-r*3.8),pt>0&&(pt=Math.max(0,pt-r)),!Te&&At>0&&s-so>180&&ss(s);const u=c*(pt>0?.18:1),{eyeZ:y}=Xt(),g=re&&!j?[0,gs[1],y]:Eo,m=re&&!j?Go:No,f=1-Math.exp(-a*6.5);ae=[ae[0]+(g[0]-ae[0])*f,ae[1]+(g[1]-ae[1])*f,ae[2]+(g[2]-ae[2])*f],Be=[Be[0]+(m[0]-Be[0])*f,Be[1]+(m[1]-Be[1])*f,Be[2]+(m[2]-Be[2])*f];let d=0,h=0;if(ht>0){ht=Math.max(0,ht-r);const C=Math.min(1,ht/.45),x=yo*C*C;d=(Math.sin(n*88)*.65+Math.cos(n*137)*.35)*x,h=(Math.cos(n*96)*.65+Math.sin(n*149)*.35)*x}const v=ae,p=Be;if(ae=[v[0]+d,v[1]+h,v[2]],Be=[p[0]+d*.55,p[1]+h*.55,p[2]],Wo(),ae=v,Be=p,re&&!j){if(!Te)if(ee==="failing")bo-=r,bo<=0&&Jn();else if(ee==="playing"){for(_t+=c;Ot<Fe.throws.length&&_t>=Fe.throws[Ot].time-.24;){const C=Fe.throws[Ot];C.poisoned&&Y.blackWarning(Math.max(-.85,Math.min(.85,C.lane*.78))),Ot++}for(;qt<Fe.throws.length&&_t>=Fe.throws[qt].time-.18;){const C=Fe.throws[qt];C.poisoned||Y.gemPop(Math.max(-.85,Math.min(.85,C.lane*.78))),qt++}for(;kt<Fe.throws.length&&_t>=Fe.throws[kt].time;)ea(Fe.throws[kt]),kt++;for(let C=K.length-1;C>=0;C--){const x=K[C];x.vel[1]-=x.gravity*u,x.pos=A(x.pos,X(x.vel,u)),x.vel[2]*=Math.exp(-u*2.8),x.quat=mo(x.quat,x.angVel,u);const k=Math.max(1,ae[2]-x.pos[2])*Math.tan(Ko*.5),L=k*(window.innerWidth/Math.max(1,window.innerHeight)),E=Math.min(-.9,Be[1]-k-.28),R=x.pos[0]*x.vel[0]>0&&Math.abs(x.pos[0])>L+.28;if(x.vel[1]<0&&(x.pos[1]<E||R)&&(N.clearCutSlot(x.slotIdx),K.splice(C,1),!x.poisoned&&x.slices===0)){$s();break}}if(ee==="playing"&&K.length>1){const C=1-Math.exp(-u*16);for(let x=0;x<K.length;x++)for(let T=x+1;T<K.length;T++){const k=K[x],L=K[T],E=Math.hypot(k.pos[0]-L.pos[0],k.pos[1]-L.pos[1]);if(E<.48){const G=.42*Math.min(1,(.48-E)/.16),D=k.pos[2]-L.pos[2];if(Math.abs(D)<G){const F=Math.abs(D)>.02?L.pos[2]<k.pos[2]:L.id>k.id,U=F?L:k,Q=F?k:L,oe=G-(Q.pos[2]-U.pos[2]);oe>0&&(U.pos[2]-=oe*.78*C,Q.pos[2]+=oe*.22*C)}}}}for(const C of K)N.updateCutSlotPose(C.slotIdx,C.pos,C.quat);ee==="playing"&&kt>=Fe.throws.length&&K.length===0&&(ee="cleared",fo=.65,Y.levelClear(),we())}else ee==="cleared"?(fo-=r,fo<=0&&Xe(ye<wt?ye+1:1,ye>=wt)):ee==="lost"&&Po&&Pt.size===0&&$e.every(x=>x.settled)&&(So-=r,So<=0&&(Po=!1,Zn()))}else if(!Ke){Me=[...Zo];const C=rt(Ze(Le([0,1,0],Math.sin(n*.45)*.045),Le([1,0,0],Math.cos(n*.35)*.022))),x=1-Math.exp(-a*7.5);uo=is(uo,Jo,x),fe=rt(Ze(uo,Ze(C,xo)))}bt(),we();const b=j?1-Math.exp(-a*10.5):1;et=q([et[0]+(vt[0]-et[0])*b,et[1]+(vt[1]-et[1])*b,et[2]+(vt[2]-et[2])*b]),Ro+=(jt-Ro)*b,ve?Ae?(Ae=q([Ae[0]+(ve[0]-Ae[0])*b,Ae[1]+(ve[1]-Ae[1])*b,Ae[2]+(ve[2]-Ae[2])*b]),Nt+=(Ue-Nt)*b):(Ae=[...ve],Nt=Ue):(Ae=null,Nt=-1);for(let C=le.length-1;C>=0;C--){const x=le[C];if(x.detonated){le.splice(C,1);continue}if(x.hitGroundWaiting)x.bakedResp&&eo(x);else{x.worldVel[1]-=Ht*c,x.worldPos=A(x.worldPos,X(x.worldVel,c)),x.quat=mo(x.quat,x.angVel,c);const T=Qs(x.cutPoly,x.worldPos,x.quat);if(!x.bakeStarted&&x.worldVel[1]<-.1&&T<.56){const k=-x.worldVel[1],L=k*k+2*Ht*Math.max(0,T-.015),E=Math.max(0,Math.min(.28,(-k+Math.sqrt(L))/Ht));Ps(x,E)}if(T<=.015&&x.worldVel[1]<=.05){if(x.worldPos[1]+=.015-T,x.hitGroundWaiting=!0,N.updateCutSlotPose(x.slotIdx,x.worldPos,x.quat),x.bakeStarted||Ps(x,0),x.bakedResp){eo(x);continue}}else N.updateCutSlotPose(x.slotIdx,x.worldPos,x.quat)}}let w=0,P=[],S=fe;const M=ue??_e;if(M){M.crackElapsed+=a;const C=.36/Math.max(.08,M.crackDur);w=ot&&ue?ue.crackElapsed*C:0;const x=Math.min(1,M.crackElapsed/Math.max(.05,M.crackDur));if(M.ballistic)M.cutQuat=mo(M.cutQuat,M.cutAngVel,u),S=M.cutQuat,P=M.chunks.map((T,k)=>(T.worldVel[1]-=En*u,T.worldPos=A(T.worldPos,X(T.worldVel,u)),N.updateCutSlotPose(k,T.worldPos,S),H(T.worldPos,Me)));else{S=fe;const T=.003+.009*(1-Math.pow(1-x,2.4));P=M.chunks.map((k,L)=>{const E=X(q(W(fe,k.localPushDir)),T);return N.updateCutSlotPose(L,A(Me,E),S),E})}ue&&gt&&x>=1&&(_e=ue,yt())}let z=!1,B=0;const V=De?3:7;for(let C=$e.length-1;C>=0;C--){const x=$e[C];if(x.settled)continue;x.elapsed+=c;const T=x.elapsed*x.fps,k=Math.min(x.numFrames-1,Math.floor(T)),L=Math.min(x.numFrames-1,k+1),E=Math.max(0,Math.min(1,T-k)),R=x.numShards*7;for(let G=0;G<x.numShards;G++){const D=k*R+G*7,F=L*R+G*7,U=x.frames[D+1],Q=x.frames[F+1];if(U<-100){N.setShardPose(x.baseShardId+G,[0,-999,0],[0,0,0,1],!1);continue}if(Q<-100){N.setShardPose(x.baseShardId+G,[x.frames[D],U,x.frames[D+2]],[x.frames[D+3],x.frames[D+4],x.frames[D+5],x.frames[D+6]],!0,x.gemId);continue}const oe=x.frames[D]+(x.frames[F]-x.frames[D])*E,ne=U+(Q-U)*E,ie=x.frames[D+2]+(x.frames[F+2]-x.frames[D+2])*E,de=is([x.frames[D+3],x.frames[D+4],x.frames[D+5],x.frames[D+6]],[x.frames[F+3],x.frames[F+4],x.frames[F+5],x.frames[F+6]],E);N.setShardPose(x.baseShardId+G,[oe,ne,ie],de,!0,x.gemId)}for(z=!0;x.nextContact<x.contacts.length&&!(x.contacts[x.nextContact]>T);){const D=x.contacts[x.nextContact+1],F=x.contacts[x.nextContact+2],U=x.contacts[x.nextContact+3],Q=x.contacts[x.nextContact+4],oe=x.contacts[x.nextContact+5],ne=x.contacts[x.nextContact+6];x.nextContact+=7;const ie=Math.max(-1,Math.min(1,D*.75));ne===2?(B<V&&(Y.miniShatter(ie,i),B++),Je([[D,Math.max(.015,F),U]],[[(I()-.5)*.35,-.22+I()*.44,(I()-.5)*.35]],[0,1.15,0],56,1.55,.002,.008,x.gemId)):(B<V&&(Y.clink(Q,oe,ne,ie,i),B++),ne===0&&oe>1.8&&Je([[D,Math.max(.01,F),U]],[[(I()-.5)*.3,-.15+I()*.35,(I()-.5)*.3]],[0,.55*Math.min(3,oe*.4),0],Math.min(18,Math.round(oe*3.5)),.9,.0022,.007,x.gemId))}if(k>=x.numFrames-1){x.settled=!0;const G=(x.numFrames-1)*R;for(let D=0;D<x.numShards;D++){const F=G+D*7,U=x.frames[F+1];U>-.5&&U<.8&&He.push({hullVerts:x.shards[D].hullVerts,pos:[x.frames[F],U,x.frames[F+2]],quat:[x.frames[F+3],x.frames[F+4],x.frames[F+5],x.frames[F+6]]})}He.length>$t&&He.splice(0,He.length-$t),x.frames=ms,x.contacts=ms,x.shards=[],$e.splice(C,1)}}z&&N.flushShardPoses(Ve),N.render({viewProj:ge,invViewProj:J,camPos:ae,time:n,dt:c,lightDir:qn,causticStrength:pe.causticStrength,blockCenter:re&&!j?[0,-5,0]:Me,blockQuat:fe,halfSize:j?As:Fs,ior:pe.ior,dispersion:pe.dispersion,palette:Gt[Oo],crackProgress:w,planeHover:Ke?1:0,cutRadius:Ro,cutPlaneN:et,cutPlane2N:tt?Ae:null,cutRadius2:Nt,cutOffsets:P,cutQuat:S,hasCutPiece:!!(ue||_e||le.length>0||K.length>0),planeAlpha:tt?1:0,canCut:ft,exposure:pe.exposure}),aa(s,a)}requestAnimationFrame(e)}ra();
