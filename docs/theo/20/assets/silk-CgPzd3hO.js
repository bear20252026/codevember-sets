import{W as de,B as he,a as me,S as J,O as K,A as ve,C as fe,V as m,L as pe,G as Q,b as Z,P as ge,c as we,d as X,R as xe,H as Me,e as Y,M as ye,f as Ae,g as be,h as ze}from"./index-9RIHTaSu.js";const $=new URLSearchParams(location.search);$.has("clean")&&document.body.classList.add("clean");const M=42e4,u=new m(.56,1,.56),G=70,ee=36,N=G*ee;function Se(e){return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}const te=(e,n,a)=>{const f=Math.min(1,Math.max(0,(a-e)/(n-e)));return f*f*(3-2*f)};function Ce(){const e=Se(20),n=new Float32Array(M*3);let a=0;const f=(r,t,c)=>{n[a*3]=r,n[a*3+1]=t,n[a*3+2]=c,a++},b=()=>{const r=e()*2-1,t=e()*Math.PI*2,c=Math.sqrt(1-r*r);return[c*Math.cos(t),r,c*Math.sin(t)]},z=[];for(let r=0;r<9;r++){const t=b();t[1]=t[1]*.6+.25;const c=Math.hypot(t[0],t[1],t[2]),o=(6+e()*3)/c;z.push([t[0]*o,t[1]*o,t[2]*o])}let s=z[0],F=0;for(let r=0;r<ee;r++){let t;if(r%2){let o=F;for(;o===F;)o=Math.floor(e()*z.length);F=o,t=z[o]}else{const o=b(),i=1.2+e()*.5;t=[o[0]*u.x*i,o[1]*u.y*i,o[2]*u.z*i]}const c=.03*Math.hypot(t[0]-s[0],t[1]-s[1],t[2]-s[2]);for(let o=1;o<=G;o++){const i=o/G;f(s[0]+(t[0]-s[0])*i,s[1]+(t[1]-s[1])*i-4*i*(1-i)*c,s[2]+(t[2]-s[2])*i)}s=t}const v=new m(s[0]/u.x,s[1]/u.y,s[2]/u.z).normalize(),l=new m(...b()),j=new m,S=new m;let C=0;const I=a;for(;a<M;){const r=(a-I)/(M-I),t=1-te(0,.09,r),c=.3+.7*t,o=.0013+.004*t,i=.02+.08*t,R=b();l.x+=R[0]*i,l.y+=R[1]*i,l.z+=R[2]*i,l.addScaledVector(v,-l.dot(v)).normalize(),v.addScaledVector(l,o).normalize(),l.addScaledVector(v,-l.dot(v)).normalize(),C+=Math.PI*2/(56+12*Math.sin(a*7e-4)),j.crossVectors(v,l),S.copy(v).addScaledVector(j,Math.sin(C)*c).addScaledVector(l,Math.sin(C)*Math.cos(C)*c).normalize();const le=Math.sin(a*.013+1.3)*Math.sin(a*.0041+.2),ue=Math.sin(a*.21)*Math.sin(a*.037+2),V=1.09-.19*r+t*(.2+.2*le)+.02*ue;f(S.x*u.x*V,S.y*u.y*V,S.z*u.z*V)}return n}const p=document.querySelector("#c"),h=new de({canvas:p,antialias:!1,alpha:!1,powerPreference:"high-performance"});h.autoClear=!1;const k=new he;k.setAttribute("position",new me(Ce(),3));const ae=new J({uniforms:{uHead:{value:0},uAxes:{value:u},uLight:{value:new m(-.5,.6,.62).normalize()}},vertexShader:`
    uniform float uHead;
    uniform vec3 uAxes;
    uniform vec3 uLight;
    varying vec3 vAcc;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vec3 n = normalize(normalMatrix * (position / (uAxes * uAxes)));
      float facing = dot(n, normalize(-mv.xyz));
      float lit = clamp(dot(n, uLight) * 0.5 + 0.5, 0.0, 1.0);
      float w = facing > 0.0 ? 1.0 : 0.45; // the far wall counts for less
      float head = exp(-(uHead - float(gl_VertexID)) / 240.0); // the newest stretch, still wet
      vAcc = vec3(w, w * lit, head);
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    varying vec3 vAcc;
    void main() { gl_FragColor = vec4(vAcc, 1.0); }`,blending:fe,blendEquation:ve,blendSrc:K,blendDst:K,depthTest:!1,depthWrite:!1,transparent:!0}),B=new pe(k,ae);B.frustumCulled=!1;const D=new Q;D.rotation.z=.32;D.add(B);const L=new Q;L.add(D);const ne=new Z;ne.add(L);const d=new ge(32,1,.1,100),_=new we(2,2,{type:Me,format:xe,minFilter:X,magFilter:X,depthBuffer:!1,samples:4}),y=new J({uniforms:{tAcc:{value:_.texture},uCentre:{value:new Y(.5,.5)},uAxis:{value:new Y(0,1)},uUnit:{value:.2},uAspect:{value:1},uTime:{value:0},uK:{value:.3}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
    uniform sampler2D tAcc;
    uniform vec2 uCentre, uAxis;
    uniform float uUnit, uAspect, uTime, uK;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec3 a = texture2D(tAcc, vUv).rgb;
      float lit = a.g / max(a.r, 1e-4);
      float through = exp(-a.r * uK);

      vec2 p = (vUv - uCentre) * vec2(uAspect, 1.0) / uUnit;
      vec3 bg = vec3(0.043, 0.047, 0.059) + vec3(0.045, 0.036, 0.028) * exp(-dot(p, p) * 0.1);

      // what is inside: a warm body, breathing
      float len = max(length(uAxis), 0.56);
      vec2 dir = uAxis / max(length(uAxis), 1e-4);
      float along = dot(p, dir) / (0.8 * len);
      float across = dot(p, vec2(-dir.y, dir.x)) / 0.46;
      float breath = 0.86 + 0.14 * sin(uTime * 0.9);
      float g = exp(-(along * along + across * across) * 1.7) * breath;
      vec3 amber = vec3(1.0, 0.6, 0.24);

      vec3 silk = vec3(0.97, 0.91, 0.79) * mix(0.16, 1.0, lit) + amber * g * 0.5;
      vec3 col = (bg + amber * g * 0.85) * through + silk * (1.0 - through);
      col += vec3(1.0, 0.94, 0.78) * (1.0 - exp(-a.b * 1.4));
      col += (hash(gl_FragCoord.xy + uTime) - 0.5) / 255.0;
      gl_FragColor = vec4(col, 1.0);
    }`,depthTest:!1,depthWrite:!1}),oe=new ye(new Ae(2,2),y);oe.frustumCulled=!1;const re=new Z;re.add(oe);const Le=new be;let g=1;function se(){g=Math.min(window.devicePixelRatio,2);const e=window.innerWidth,n=window.innerHeight;h.setPixelRatio(g),h.setSize(e,n,!1),_.setSize(Math.round(e*g),Math.round(n*g)),d.aspect=e/n;const a=Math.max(2/.5,2.6/d.aspect);d.position.set(0,0,a/(2*Math.tan(ze.degToRad(d.fov/2)))),d.updateProjectionMatrix(),y.uniforms.uAspect.value=d.aspect,y.uniforms.uUnit.value=1/a,y.uniforms.uK.value=.16*g}window.addEventListener("resize",se);se();let q=.4,A=.12,U=0,P=0,T=!1,H=0,W=0;p.addEventListener("pointerdown",e=>{T=!0,H=e.clientX,W=e.clientY,p.setPointerCapture(e.pointerId)});p.addEventListener("pointermove",e=>{T&&(U=(e.clientX-H)*.006,P=(e.clientY-W)*.006,q+=U,A=Math.min(1.1,Math.max(-1.1,A+P)),H=e.clientX,W=e.clientY)});const ie=()=>T=!1;p.addEventListener("pointerup",ie);p.addEventListener("pointercancel",ie);let w=Math.min(1,Math.max(0,Number($.get("p"))||0))*M;const Ue=e=>150+2500*te(N,N+24e3,e),x=new m,E=new m;let O=performance.now();function ce(e){const n=Math.min(.05,(e-O)/1e3);O=e,w=Math.min(M,w+Ue(w)*n),k.setDrawRange(0,Math.max(2,Math.floor(w))),ae.uniforms.uHead.value=w,T||(q+=U+.05*n,A=Math.min(1.1,Math.max(-1.1,A+P)),U*=.94,P*=.94),L.rotation.set(A,q,0),L.updateMatrixWorld(!0),x.set(0,0,0).project(d),E.set(0,1,0).applyMatrix4(B.matrixWorld).project(d);const a=y.uniforms;a.uCentre.value.set(x.x*.5+.5,x.y*.5+.5),a.uAxis.value.set((E.x-x.x)*.5*d.aspect/a.uUnit.value,(E.y-x.y)*.5/a.uUnit.value),a.uTime.value=e/1e3,h.setRenderTarget(_),h.setClearColor(0,0),h.clear(),h.render(ne,d),h.setRenderTarget(null),h.render(re,Le),requestAnimationFrame(ce)}requestAnimationFrame(ce);
