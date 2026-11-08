"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{1670:(t,e,s)=>{s.r(e),s.d(e,{default:()=>M});var i=s(5155),r=s(5860),a=s(6275),n=s(2115),o=s(5269),u=s(9625),h=Object.defineProperty,l=(t,e,s)=>{let i;return(i="symbol"!=typeof e?e+"":e)in t?h(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,s};function p(t,e,s,i,r){let a;if(t=t.subarray||t.slice?t:t.buffer,s=s.subarray||s.slice?s:s.buffer,t=e?t.subarray?t.subarray(e,r&&e+r):t.slice(e,r&&e+r):t,s.set)s.set(t,i);else for(a=0;a<t.length;a++)s[a+i]=t[a];return s}class c extends o.LoY{constructor(){super(),l(this,"type","MeshLine"),l(this,"isMeshLine",!0),l(this,"positions",[]),l(this,"previous",[]),l(this,"next",[]),l(this,"side",[]),l(this,"width",[]),l(this,"indices_array",[]),l(this,"uvs",[]),l(this,"counters",[]),l(this,"widthCallback",null),l(this,"_attributes"),l(this,"_points",[]),l(this,"points"),l(this,"matrixWorld",new o.kn4),Object.defineProperties(this,{points:{enumerable:!0,get(){return this._points},set(t){this.setPoints(t,this.widthCallback)}}})}setMatrixWorld(t){this.matrixWorld=t}setPoints(t,e){var s;if(t=(s=t)instanceof Float32Array?s:s instanceof o.LoY?s.getAttribute("position").array:s.map(t=>{let e=Array.isArray(t);return t instanceof o.Pq0?[t.x,t.y,t.z]:t instanceof o.I9Y?[t.x,t.y,0]:e&&3===t.length?[t[0],t[1],t[2]]:e&&2===t.length?[t[0],t[1],0]:t}).flat(),this._points=t,this.widthCallback=null!=e?e:null,this.positions=[],this.counters=[],t.length&&t[0]instanceof o.Pq0)for(let e=0;e<t.length;e++){let s=t[e],i=e/(t.length-1);this.positions.push(s.x,s.y,s.z),this.positions.push(s.x,s.y,s.z),this.counters.push(i),this.counters.push(i)}else for(let e=0;e<t.length;e+=3){let s=e/(t.length-1);this.positions.push(t[e],t[e+1],t[e+2]),this.positions.push(t[e],t[e+1],t[e+2]),this.counters.push(s),this.counters.push(s)}this.process()}compareV3(t,e){let s=6*t,i=6*e;return this.positions[s]===this.positions[i]&&this.positions[s+1]===this.positions[i+1]&&this.positions[s+2]===this.positions[i+2]}copyV3(t){let e=6*t;return[this.positions[e],this.positions[e+1],this.positions[e+2]]}process(){let t,e,s=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[],e=this.compareV3(0,s-1)?this.copyV3(s-2):this.copyV3(0),this.previous.push(e[0],e[1],e[2]),this.previous.push(e[0],e[1],e[2]);for(let i=0;i<s;i++){if(this.side.push(1),this.side.push(-1),t=this.widthCallback?this.widthCallback(i/(s-1)):1,this.width.push(t),this.width.push(t),this.uvs.push(i/(s-1),0),this.uvs.push(i/(s-1),1),i<s-1){e=this.copyV3(i),this.previous.push(e[0],e[1],e[2]),this.previous.push(e[0],e[1],e[2]);let t=2*i;this.indices_array.push(t,t+1,t+2),this.indices_array.push(t+2,t+1,t+3)}i>0&&(e=this.copyV3(i),this.next.push(e[0],e[1],e[2]),this.next.push(e[0],e[1],e[2]))}e=this.compareV3(s-1,0)?this.copyV3(1):this.copyV3(s-1),this.next.push(e[0],e[1],e[2]),this.next.push(e[0],e[1],e[2]),this._attributes&&this._attributes.position.count===this.counters.length?(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0):this._attributes={position:new o.THS(new Float32Array(this.positions),3),previous:new o.THS(new Float32Array(this.previous),3),next:new o.THS(new Float32Array(this.next),3),side:new o.THS(new Float32Array(this.side),1),width:new o.THS(new Float32Array(this.width),1),uv:new o.THS(new Float32Array(this.uvs),2),index:new o.THS(new Uint16Array(this.indices_array),1),counters:new o.THS(new Float32Array(this.counters),1)},this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()}advance({x:t,y:e,z:s}){let i=this._attributes.position.array,r=this._attributes.previous.array,a=this._attributes.next.array,n=i.length;p(i,0,r,0,n),p(i,6,i,0,n-6),i[n-6]=t,i[n-5]=e,i[n-4]=s,i[n-3]=t,i[n-2]=e,i[n-1]=s,p(i,6,a,0,n-6),a[n-6]=t,a[n-5]=e,a[n-4]=s,a[n-3]=t,a[n-2]=e,a[n-1]=s,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0}}let f=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>
  #include <clipping_planes_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
    vCounters = counters;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0) * aspect;
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy * aspect;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <clipping_planes_vertex>
    #include <fog_vertex>
  }
`,d=parseInt(o.sPf.replace(/\D+/g,"")),m=`
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useGradient;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  uniform vec3 gradient[2];
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 diffuseColor = vColor;
    if (useGradient == 1.) diffuseColor = vec4(mix(gradient[0], gradient[1], vCounters), 1.0);
    if (useMap == 1.) diffuseColor *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) diffuseColor.a *= texture2D(alphaMap, vUV * repeat).a;
    if (diffuseColor.a < alphaTest) discard;
    if (useDash == 1.) diffuseColor.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    diffuseColor.a *= step(vCounters, visibility);
    #include <clipping_planes_fragment>
    gl_FragColor = diffuseColor;     
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <${d>=154?"colorspace_fragment":"encodings_fragment"}>
  }
`;class v extends o.BKk{constructor(t){super({uniforms:{...u.UniformsLib.fog,lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new o.Q1f(0xffffff)},gradient:{value:[new o.Q1f(0xff0000),new o.Q1f(65280)]},opacity:{value:1},resolution:{value:new o.I9Y(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},useGradient:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new o.I9Y(1,1)}},vertexShader:f,fragmentShader:m}),l(this,"lineWidth"),l(this,"map"),l(this,"useMap"),l(this,"alphaMap"),l(this,"useAlphaMap"),l(this,"color"),l(this,"gradient"),l(this,"resolution"),l(this,"sizeAttenuation"),l(this,"dashArray"),l(this,"dashOffset"),l(this,"dashRatio"),l(this,"useDash"),l(this,"useGradient"),l(this,"visibility"),l(this,"repeat"),this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get(){return this.uniforms.lineWidth.value},set(t){this.uniforms.lineWidth.value=t}},map:{enumerable:!0,get(){return this.uniforms.map.value},set(t){this.uniforms.map.value=t}},useMap:{enumerable:!0,get(){return this.uniforms.useMap.value},set(t){this.uniforms.useMap.value=t}},alphaMap:{enumerable:!0,get(){return this.uniforms.alphaMap.value},set(t){this.uniforms.alphaMap.value=t}},useAlphaMap:{enumerable:!0,get(){return this.uniforms.useAlphaMap.value},set(t){this.uniforms.useAlphaMap.value=t}},color:{enumerable:!0,get(){return this.uniforms.color.value},set(t){this.uniforms.color.value=t}},gradient:{enumerable:!0,get(){return this.uniforms.gradient.value},set(t){this.uniforms.gradient.value=t}},opacity:{enumerable:!0,get(){return this.uniforms.opacity.value},set(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get(){return this.uniforms.resolution.value},set(t){this.uniforms.resolution.value.copy(t)}},sizeAttenuation:{enumerable:!0,get(){return this.uniforms.sizeAttenuation.value},set(t){this.uniforms.sizeAttenuation.value=t}},dashArray:{enumerable:!0,get(){return this.uniforms.dashArray.value},set(t){this.uniforms.dashArray.value=t,this.useDash=+(0!==t)}},dashOffset:{enumerable:!0,get(){return this.uniforms.dashOffset.value},set(t){this.uniforms.dashOffset.value=t}},dashRatio:{enumerable:!0,get(){return this.uniforms.dashRatio.value},set(t){this.uniforms.dashRatio.value=t}},useDash:{enumerable:!0,get(){return this.uniforms.useDash.value},set(t){this.uniforms.useDash.value=t}},useGradient:{enumerable:!0,get(){return this.uniforms.useGradient.value},set(t){this.uniforms.useGradient.value=t}},visibility:{enumerable:!0,get(){return this.uniforms.visibility.value},set(t){this.uniforms.visibility.value=t}},alphaTest:{enumerable:!0,get(){return this.uniforms.alphaTest.value},set(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get(){return this.uniforms.repeat.value},set(t){this.uniforms.repeat.value.copy(t)}}}),this.setValues(t)}copy(t){return super.copy(t),this.lineWidth=t.lineWidth,this.map=t.map,this.useMap=t.useMap,this.alphaMap=t.alphaMap,this.useAlphaMap=t.useAlphaMap,this.color.copy(t.color),this.gradient=t.gradient,this.opacity=t.opacity,this.resolution.copy(t.resolution),this.sizeAttenuation=t.sizeAttenuation,this.dashArray=t.dashArray,this.dashOffset=t.dashOffset,this.dashRatio=t.dashRatio,this.useDash=t.useDash,this.useGradient=t.useGradient,this.visibility=t.visibility,this.alphaTest=t.alphaTest,this.repeat.copy(t.repeat),this}}let y={width:.2,length:1,decay:1,local:!1,stride:0,interval:1},b=(t,e=1)=>(t.set(t.subarray(e)),t.fill(-1/0,-e),t),g=n.forwardRef((t,e)=>{let{children:s}=t,{width:i,length:a,decay:u,local:h,stride:l,interval:p}={...y,...t},{color:f="hotpink",attenuation:d,target:m}=t,g=(0,r.D)(t=>t.size),x=(0,r.D)(t=>t.scene),A=n.useRef(null),[_,w]=n.useState(null),M=function(t,e){let{length:s,local:i,decay:a,interval:u,stride:h}={...y,...e},l=n.useRef(null),[p]=n.useState(()=>new o.Pq0);n.useLayoutEffect(()=>{t&&(l.current=Float32Array.from({length:10*s*3},(e,s)=>t.position.getComponent(s%3)))},[s,t]);let c=n.useRef(new o.Pq0),f=n.useRef(0);return(0,r.F)(()=>{if(t&&l.current){if(0===f.current){let e;i?e=t.position:(t.getWorldPosition(p),e=p);let s=+a;for(let t=0;t<s;t++)e.distanceTo(c.current)<h||(b(l.current,3),l.current.set(e.toArray(),l.current.length-3));c.current.copy(e)}f.current++,f.current=f.current%u}}),l}(_,{length:a,decay:u,local:h,stride:l,interval:p});n.useEffect(()=>{let t=(null==m?void 0:m.current)||A.current.children.find(t=>t instanceof o.B69);t&&w(t)},[M,m]);let P=n.useMemo(()=>new c,[]),j=n.useMemo(()=>{var t,e;let r,a=new v({lineWidth:.1*i,color:f,sizeAttenuation:1,resolution:new o.I9Y(g.width,g.height)});return s&&(Array.isArray(s)?r=s.find(t=>"string"==typeof t.type&&"meshLineMaterial"===t.type):"string"==typeof s.type&&"meshLineMaterial"===s.type&&(r=s)),"object"==typeof(null==(t=r)?void 0:t.props)&&(null==(e=r)?void 0:e.props)!==null&&a.setValues(r.props),a},[i,f,g,s]);return n.useEffect(()=>{j.uniforms.resolution.value.set(g.width,g.height)},[g]),(0,r.F)(()=>{M.current&&P.setPoints(M.current,d)}),n.createElement("group",null,(0,r.q)(n.createElement("mesh",{ref:e,geometry:P,material:j}),x),n.createElement("group",{ref:A},s))});var x=s(2198),A=s(3181);let _=[[0,1],[1,2],[3,4],[4,5],[6,7],[7,8],[9,10],[10,11]];function w({active:t,low:e}){let s=(0,n.useRef)([]),a=(0,n.useRef)([]),u=(0,n.useRef)([]),h=(0,n.useRef)(null),l=(0,n.useRef)(0),p=(0,n.useRef)(-1),{invalidate:c}=(0,r.D)(),f=(0,n.useMemo)(()=>({a:new o.Pq0,b:new o.Pq0,up:new o.Pq0(0,1,0),delta:new o.Pq0}),[]);return(0,n.useEffect)(()=>A.nM.subscribe(()=>c()),[c]),(0,r.F)((e,i)=>{var r;let n,o,c=A.nM.getState();p.current!==c.technique&&(l.current=0,p.current=c.technique),t&&(l.current+=Math.min(i,.05)*c.speed);let d=(r=c.technique,n=Math.pow(Math.max(0,Math.sin(l.current*Math.PI)),3),o=[[-.43,1.98,0],[-.66,1.55,.22],[-.38,2.12,.54],[.43,1.98,0],[.64,1.54,.2],[.38,2.1,.5],[-.22,1.15,0],[-.35,.65,.14],[-.48,.13,.44],[.22,1.15,0],[.4,.62,-.12],[.56,.13,-.48]],0===r&&(o[1]=[-.5,1.87,.22+.56*n],o[2]=[-.34,2.08,.54+1.12*n]),1===r&&(o[4]=[.42,1.84,.2+.7*n],o[5]=[.18,2.06,.5+1.25*n]),2===r&&(o[1]=[-.76,1.55+.48*n,.22+.51*n],o[2]=[-.38+.58*n,2.12,.54+.62*n]),3===r&&(o[10]=[.4+.35*n,.62+.4*n,-.12+.55*n],o[11]=[.56+.7*n,.13+.75*n,-.48+1.65*n]),4===r&&(o[10]=[.4-.2*n,.62+1.04*n,-.12+.82*n],o[11]=[.56-.2*n,.13+.8*n,-.48+.62*n]),5===r&&(o[4]=[.64-.27*n,1.54+.5*n,.2+.85*n],o[5]=[.38-.58*n,2.1+.2*n,.5-.18*n]),{points:o,turn:1===r?-.34*n:3===r?.42*n:5===r?-.2*n:.05*n});h.current&&(h.current.rotation.y=-.28+d.turn),_.forEach(([t,e],i)=>{let r=s.current[i];r&&(f.a.fromArray(d.points[t]),f.b.fromArray(d.points[e]),f.delta.subVectors(f.b,f.a),r.position.copy(f.a).add(f.b).multiplyScalar(.5),r.quaternion.setFromUnitVectors(f.up,f.delta.clone().normalize()),r.scale.y=f.delta.length())}),d.points.forEach((t,e)=>a.current[e]?.position.fromArray(t)),u.current[0]?.position.fromArray(d.points[2]),u.current[1]?.position.fromArray(d.points[5]),u.current[2]?.position.fromArray(d.points[11])}),(0,i.jsxs)("group",{ref:h,position:[0,-1.2,0],children:[(0,i.jsxs)("mesh",{position:[0,1.68,0],scale:[1,.95,.7],children:[(0,i.jsx)("capsuleGeometry",{args:[.34,.55,6,12]}),(0,i.jsx)("meshStandardMaterial",{color:"#a6a6a6",metalness:.75,roughness:.28})]}),(0,i.jsxs)("mesh",{position:[0,2.33,0],scale:[.88,1.13,.9],children:[(0,i.jsx)("sphereGeometry",{args:[.23,16,12]}),(0,i.jsx)("meshStandardMaterial",{color:"#a6a6a6",metalness:.8,roughness:.27})]}),(0,i.jsxs)("mesh",{position:[0,1.17,0],scale:[1,.7,.75],children:[(0,i.jsx)("sphereGeometry",{args:[.38,16,12]}),(0,i.jsx)("meshStandardMaterial",{color:"#151515",roughness:.6})]}),_.map((t,e)=>(0,i.jsxs)("mesh",{ref:t=>{s.current[e]=t},children:[(0,i.jsx)("cylinderGeometry",{args:[e<4?.095:.13,e<4?.1:.15,1,12]}),(0,i.jsx)("meshStandardMaterial",{color:"#8b8e93",metalness:.7,roughness:.3})]},e)),Array.from({length:12},(t,e)=>(0,i.jsxs)("mesh",{ref:t=>{a.current[e]=t},children:[(0,i.jsx)("sphereGeometry",{args:[e<6?.105:.14,12,8]}),(0,i.jsx)("meshStandardMaterial",{color:"#27282b",metalness:.6,roughness:.36})]},e)),[0,1,2].map(t=>(0,i.jsx)(g,{width:e?1:2.4,length:3.5,color:"#ff1632",attenuation:t=>t*t,decay:1.8,children:(0,i.jsxs)("mesh",{ref:e=>{u.current[t]=e},scale:2===t?[.65,.5,1.3]:[.95,1,.95],children:[(0,i.jsx)("sphereGeometry",{args:[.2,16,12]}),(0,i.jsx)("meshStandardMaterial",{color:"#c81015",metalness:.3,roughness:.3})]})},t)),(0,i.jsxs)("mesh",{position:[0,.02,0],rotation:[-Math.PI/2,0,0],children:[(0,i.jsx)("circleGeometry",{args:[1.8,48]}),(0,i.jsx)("meshStandardMaterial",{color:"#222225",metalness:.55,roughness:.5})]}),(0,i.jsxs)("mesh",{position:[0,.027,0],rotation:[-Math.PI/2,0,0],children:[(0,i.jsx)("ringGeometry",{args:[1.73,1.75,64]}),(0,i.jsx)("meshBasicMaterial",{color:"#c81015"})]})]})}function M({active:t,low:e}){return(0,i.jsxs)(a.Hl,{className:"fighter-canvas",camera:{position:[3,1.2,5.2],fov:37},dpr:e?1:[1,1.5],frameloop:t?"always":"demand",gl:{antialias:!e,alpha:!0},children:[(0,i.jsx)("ambientLight",{intensity:.8}),(0,i.jsx)("hemisphereLight",{args:["#ffffff","#281b21",1.4]}),(0,i.jsx)("directionalLight",{position:[3,4,5],intensity:5}),(0,i.jsx)("pointLight",{position:[-3,2,0],intensity:32,color:"#ff1430"}),(0,i.jsx)("pointLight",{position:[1,3,-2],intensity:45,color:"#bed4ff"}),(0,i.jsx)(w,{active:t,low:e}),(0,i.jsx)(x.N,{enableZoom:!1,enablePan:!1,minPolarAngle:.7,maxPolarAngle:1.6,target:[0,.12,0]})]})}}}]);