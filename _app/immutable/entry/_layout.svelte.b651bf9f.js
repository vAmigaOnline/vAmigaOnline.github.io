import{S as xe,i as He,s as We,D as n,E as a,e as ve,b as Z,n as gr,h as k,k as ne,r as re,a as $e,l as ce,m as ie,u as oe,c as et,p as se,F as h,v as tr,o as Cs,G as Is,z as Je,H as Ls,A as qe,B as Qe,I as hs,J as ys,K as Us,g as Ge,d as Ve,C as Ze,L as Gs,x as rr}from"../chunks/index.5b7df20d.js";import{a as tt,p as ue,i as x,d as H,c as we,b as ar,O as s,W as Vs,T as y,R as _r,l as ws,e as ae,f as xs,g as nr,w as Hs,M as Sr,h as lr,j as fr,k as or,m as Mr,n as Or,o as Er,q as dr,r as pr,s as Dr,t as Rr,u as Cr,v as Pr,x as Tr,y as Ar,z as br,A as Nr,B as mr,C as kr,D as Ir,E as Lr,F as hr,G as yr,H as Ur,I as Gr,J as Vr,K as wr,L as cr,N as xr,P as Hr,Q as Wr,S as Fr,U as Br,V as Kr,X as Yr,Y as jr,Z as Xr,_ as zr,$ as Jr,a0 as qr,a1 as Qr,a2 as Zr,a3 as vr,a4 as $r,a5 as eo,a6 as to,a7 as ro,a8 as oo,a9 as so,aa as ao,ab as no,ac as co,ad as io,ae as uo,af as go,ag as _o,ah as So,ai as lo,aj as fo,ak as Mo,al as Oo,am as Eo,an as po,ao as Do,ap as Ro,aq as Co,ar as Po,as as To,at as Ao,au as bo,av as No,aw as mo,ax as ko,ay as Io,az as Lo,aA as ho,aB as yo,aC as Uo,aD as Go,aE as Vo,aF as wo,aG as xo,aH as Ho,aI as Wo,aJ as Fo,aK as Bo,aL as Ko,aM as Yo,aN as jo,aO as Xo,aP as zo,aQ as Jo,aR as qo,aS as Qo,aT as Zo,aU as vo,aV as $o,aW as es,aX as ts,aY as rs,aZ as os,a_ as ss,a$ as as,b0 as ns,b1 as cs,b2 as is,b3 as us,b4 as gs,b5 as _s,b6 as Ss,b7 as ls,b8 as fs,b9 as Ms,ba as Os,bb as Es,bc as ds,bd as sr,be as Ws,bf as ps}from"../chunks/constants.962cab4a.js";function Fs(o,l,r){let t,c;n(o,tt,R=>r(11,t=R)),n(o,ue,R=>r(12,c=R));let g,_,M,E,C,A=0;async function P(){if(g){console.log("Audio context already initialized: ",g.state);return}g=new AudioContext,g.onstatechange=()=>console.log("Audio Context: state = "+g.state);let R=g.createGain();R.gain.value=.15,R.connect(g.destination),t.setSampleRate(g.sampleRate),await g.audioWorklet.addModule("js/audio-processor.js");const I=new AudioWorkletNode(g,"audio-processor",{outputChannelCount:[2],processorOptions:{pointers:[t.leftChannelBuffer(),t.rightChannelBuffer()],buffer:c.HEAPF32.buffer,length:2048}});I.port.onmessage=U=>{t.updateAudio(U.data)},I.connect(g.destination),g.state==="suspended"&&await g.resume(),await O()}async function O(){_||(_=await N("sounds/insert.mp3")),M||(M=await N("sounds/eject.mp3")),E||(E=await N("sounds/step.mp3")),C||(C=await N("sounds/stephd.mp3"))}function D(R,I){p(_,R)}function b(R,I){p(M,R)}function d(R,I){p(E,R)}function f(R,I){p(C,R)}async function p(R,I,U){if(R==null||A>=3)return;const G=g.createGain();G.gain.value=.004*I,G.connect(g.destination);const L=g.createBufferSource();L.buffer=R,L.addEventListener("ended",()=>{A--}),L.connect(G),L.start(),A++}async function N(R){console.log("load_sound: url = "+R);let U=await(await fetch(R)).arrayBuffer();return await g.decodeAudioData(U)}return[P,D,b,d,f]}class Bs extends xe{constructor(l){super(),He(this,l,Fs,null,We,{setup:0,playInsertSound:1,playEjectSound:2,playStepSound:3,playClickSound:4})}get setup(){return this.$$.ctx[0]}get playInsertSound(){return this.$$.ctx[1]}get playEjectSound(){return this.$$.ctx[2]}get playStepSound(){return this.$$.ctx[3]}get playClickSound(){return this.$$.ctx[4]}}function Ks(o,l,r){let t,c,g,_,M,E;n(o,ue,i=>r(31,t=i)),n(o,tt,i=>r(32,c=i)),n(o,x,i=>r(33,g=i)),n(o,H,i=>r(34,_=i)),n(o,we,i=>r(35,M=i)),n(o,ar,i=>r(25,E=i));let C=[{opt:s.WARP_MODE,default:[Vs.auto].toString()},{opt:s.THEME,default:y.default.toString()},{opt:s.CANVAS_BORDER,default:"0"},{opt:s.SHAKING,default:"1"}],A=[{opt:s.CPU_REVISION,default:"0"},{opt:s.AGNUS_REVISION,default:"0"},{opt:s.DENISE_REVISION,default:"0"},{opt:s.RTC_MODEL,default:"0"},{opt:s.CHIP_RAM,default:"512"},{opt:s.SLOW_RAM,default:"512"},{opt:s.FAST_RAM,default:"0"},{opt:s.BANK_MAP,default:"0"},{opt:s.INIT_PATTERN,default:"0"},{opt:s.UNMAPPED,default:"0"},{opt:s.SLOW_RAM_MIRROR,default:"1"},{opt:s.SLOW_RAM_DELAY,default:"1"},{opt:s.DF0,default:"1"},{opt:s.DF1,default:"1"},{opt:s.DF2,default:"0"},{opt:s.DF3,default:"0"}],P=[{opt:s.BLIITTER_ACCURACY,default:"2"},{opt:s.TODBUG,default:"1"},{opt:s.PTR_DROPS,default:"1"},{opt:s.ECLOCK_SYNCING,default:"1"},{opt:s.DRIVE_SPEED,default:"1"},{opt:s.DRIVE_MECHANICS,default:"1"},{opt:s.OPT_LOCK_DSKSYNC,default:"0"},{opt:s.OPT_AUTO_DSKSYNC,default:"0"},{opt:s.CLX_SPR_SPR,default:"0"},{opt:s.CLX_SPR_PLF,default:"0"},{opt:s.CLX_PLF_PLF,default:"0"},{opt:s.ACCURATE_KEYBOARD,default:"1"}],O=[{opt:s.AUDVOL0,default:"100"},{opt:s.AUDVOL1,default:"100"},{opt:s.AUDVOL2,default:"100"},{opt:s.AUDVOL3,default:"100"},{opt:s.AUDVOLL,default:"50"},{opt:s.AUDVOLR,default:"50"},{opt:s.STEP_VOLUME,default:"50"},{opt:s.POLL_VOLUME,default:"50"},{opt:s.INSERT_VOLUME,default:"50"},{opt:s.EJECT_VOLUME,default:"50"}],D=[{opt:s.RENDER_MODE,default:_r.smooth.toString()},{opt:s.FLICKER_WEIGHT,default:"0"},{opt:s.PALETTE,default:"0"},{opt:s.BRIGHTNESS,default:"50"},{opt:s.CONTRAST,default:"100"},{opt:s.SATURATION,default:"50"}],b=y.default,d=0,f=1,p=_r.smooth,N=50,R;ws(()=>ae.opts.toArray()).subscribe(i=>{r(24,R=i)});async function U(){console.log("registerDefaults"),await G(),await L(),await Ae(),await ge(),await _e()}async function G(){for(const i of C)await W(i.opt,i.default)}async function L(){for(const i of A)await W(i.opt,i.default)}async function Ae(){for(const i of P)await W(i.opt,i.default)}async function ge(){for(const i of O)await W(i.opt,i.default)}async function _e(){for(const i of D)await W(i.opt,i.default)}async function W(i,u){try{await ae.opts.add({key:i,value:u})}catch{}}async function be(){console.log("restoreDefaults"),Se(),le(),F(),fe(),Me()}async function Se(){for(const i of C)await B(i.opt);await G(),await v()}async function le(){for(const i of A)await B(i.opt);await L(),await q()}async function F(){for(const i of P)await B(i.opt);await L(),await q()}async function fe(){for(const i of O)await B(i.opt);await ge(),await $()}async function Me(){for(const i of D)await B(i.opt);await _e(),await ee()}async function B(i){try{const u=await ae.opts.delete(i)}catch{console.log("FAILED TO REMOVE entry ",i)}}async function Oe(){console.log("loadSettings"),v(),q(),Ee(),$(),ee()}async function v(){for(const i of C)await K(i.opt)}async function q(){for(const i of A)await K(i.opt)}async function Ee(){for(const i of P)await K(i.opt)}async function $(){for(const i of O)await K(i.opt)}async function ee(){for(const i of D)await K(i.opt)}async function K(i){try{const u=await ae.opts.get(i);Q(i,u.value)}catch{}}async function Ne(){console.log("saveSettings"),de(),pe(),De(),Re(),Ce()}async function de(){for(const i of C)await Y(i.opt)}async function pe(){for(const i of A)await Y(i.opt)}async function De(){for(const i of P)await Y(i.opt)}async function Re(){for(const i of O)await Y(i.opt)}async function Ce(){for(const i of D)await Y(i.opt)}async function Y(i){const u=te(i);try{const Te=await ae.opts.put({key:i,value:u})}catch{}}function te(i){switch(i){case s.THEME:return[b].toString();case s.CANVAS_BORDER:return d.toString();case s.SHAKING:return f.toString();case s.CPU_REVISION:return c.getConfig(t.OPT_CPU_REVISION).toString();case s.CPU_SPEED:return c.getConfig(t.OPT_CPU_OVERCLOCKING).toString();case s.WARP_MODE:return c.getConfig(t.OPT_WARP_MODE).toString();case s.AGNUS_REVISION:return c.getConfig(t.OPT_AGNUS_REVISION).toString();case s.DENISE_REVISION:return c.getConfig(t.OPT_DENISE_REVISION).toString();case s.RTC_MODEL:return c.getConfig(t.OPT_RTC_MODEL).toString();case s.CHIP_RAM:return c.getConfig(t.OPT_CHIP_RAM).toString();case s.SLOW_RAM:return c.getConfig(t.OPT_SLOW_RAM).toString();case s.FAST_RAM:return c.getConfig(t.OPT_FAST_RAM).toString();case s.BANK_MAP:return c.getConfig(t.OPT_BANKMAP).toString();case s.INIT_PATTERN:return c.getConfig(t.OPT_RAM_INIT_PATTERN).toString();case s.UNMAPPED:return c.getConfig(t.OPT_UNMAPPING_TYPE).toString();case s.SLOW_RAM_MIRROR:return c.getConfig(t.OPT_SLOW_RAM_MIRROR).toString();case s.SLOW_RAM_DELAY:return c.getConfig(t.OPT_SLOW_RAM_DELAY).toString();case s.DF0:return c.getDriveConfig(t.OPT_DRIVE_CONNECT,0).toString();case s.DF1:return c.getDriveConfig(t.OPT_DRIVE_CONNECT,1).toString();case s.DF2:return c.getDriveConfig(t.OPT_DRIVE_CONNECT,2).toString();case s.DF3:return c.getDriveConfig(t.OPT_DRIVE_CONNECT,3).toString();case s.BLIITTER_ACCURACY:return c.getConfig(t.OPT_BLIITTER_ACCURACY).toString();case s.TODBUG:return c.getConfig(t.OPT_TODBUG).toString();case s.PTR_DROPS:return c.getConfig(t.OPT_PTR_DROPS).toString();case s.ECLOCK_SYNCING:return c.getConfig(t.OPT_ECLOCK_SYNCING).toString();case s.DRIVE_SPEED:return c.getConfig(t.OPT_DRIVE_SPEED).toString();case s.DRIVE_MECHANICS:return c.getConfig(t.OPT_DRIVE_MECHANICS).toString();case s.OPT_LOCK_DSKSYNC:return c.getConfig(t.OPT_LOCK_DSKSYNC).toString();case s.OPT_AUTO_DSKSYNC:return c.getConfig(t.OPT_AUTO_DSKSYNC).toString();case s.CLX_SPR_SPR:return c.getConfig(t.OPT_CLX_SPR_SPR).toString();case s.CLX_SPR_PLF:return c.getConfig(t.OPT_CLX_SPR_PLF).toString();case s.CLX_PLF_PLF:return c.getConfig(t.OPT_CLX_PLF_PLF).toString();case s.ACCURATE_KEYBOARD:return c.getConfig(t.OPT_ACCURATE_KEYBOARD).toString();case s.AUDVOL0:return c.getDriveConfig(t.OPT_AUDVOL,0).toString();case s.AUDVOL1:return c.getDriveConfig(t.OPT_AUDVOL,1).toString();case s.AUDVOL2:return c.getDriveConfig(t.OPT_AUDVOL,2).toString();case s.AUDVOL3:return c.getDriveConfig(t.OPT_AUDVOL,3).toString();case s.AUDVOLL:return c.getConfig(t.OPT_AUDVOLL).toString();case s.AUDVOLR:return c.getConfig(t.OPT_AUDVOLR).toString();case s.STEP_VOLUME:return c.getDriveConfig(t.OPT_STEP_VOLUME,0).toString();case s.POLL_VOLUME:return c.getDriveConfig(t.OPT_POLL_VOLUME,0).toString();case s.INSERT_VOLUME:return c.getDriveConfig(t.OPT_INSERT_VOLUME,0).toString();case s.EJECT_VOLUME:return c.getDriveConfig(t.OPT_EJECT_VOLUME,0).toString();case s.RENDER_MODE:return p.toString();case s.PALETTE:return c.getConfig(t.OPT_PALETTE).toString();case s.BRIGHTNESS:return c.getConfig(t.OPT_BRIGHTNESS).toString();case s.CONTRAST:return c.getConfig(t.OPT_CONTRAST).toString();case s.SATURATION:return c.getConfig(t.OPT_SATURATION).toString();case s.FLICKER_WEIGHT:return N.toString();default:return console.warn("get: Invalid option: ",i),"???"}}function Pe(i){return Number(te(i))}function me(i){return Pe(i)!=0}function Q(i,u){switch(i){case s.THEME:Le(Number(u));break;case s.CANVAS_BORDER:d=u;break;case s.SHAKING:f=u;break;case s.CPU_REVISION:c.configure(t.OPT_CPU_REVISION,Number(u));break;case s.CPU_SPEED:c.configure(t.OPT_CPU_OVERCLOCKING,Number(u));break;case s.WARP_MODE:c.configure(t.OPT_WARP_MODE,Number(u));break;case s.AGNUS_REVISION:c.configure(t.OPT_AGNUS_REVISION,Number(u));break;case s.DENISE_REVISION:c.configure(t.OPT_DENISE_REVISION,Number(u));break;case s.RTC_MODEL:c.configure(t.OPT_RTC_MODEL,Number(u));break;case s.CHIP_RAM:c.configure(t.OPT_CHIP_RAM,Number(u));break;case s.SLOW_RAM:c.configure(t.OPT_SLOW_RAM,Number(u));break;case s.FAST_RAM:c.configure(t.OPT_FAST_RAM,Number(u));break;case s.BANK_MAP:c.configure(t.OPT_BANKMAP,Number(u));break;case s.INIT_PATTERN:c.configure(t.OPT_RAM_INIT_PATTERN,Number(u));break;case s.UNMAPPED:c.configure(t.OPT_UNMAPPING_TYPE,Number(u));break;case s.SLOW_RAM_MIRROR:c.configure(t.OPT_SLOW_RAM_MIRROR,Number(u));break;case s.SLOW_RAM_DELAY:c.configure(t.OPT_SLOW_RAM_DELAY,Number(u));break;case s.DF0:break;case s.DF1:c.configureDrive(t.OPT_DRIVE_CONNECT,1,u),u==0&&c.configureDrive(t.OPT_DRIVE_CONNECT,2,0),u==0&&c.configureDrive(t.OPT_DRIVE_CONNECT,3,0);break;case s.DF2:u==1&&c.configureDrive(t.OPT_DRIVE_CONNECT,1,1),c.configureDrive(t.OPT_DRIVE_CONNECT,2,u),u==0&&c.configureDrive(t.OPT_DRIVE_CONNECT,3,0);break;case s.DF3:u==1&&c.configureDrive(t.OPT_DRIVE_CONNECT,1,1),u==1&&c.configureDrive(t.OPT_DRIVE_CONNECT,2,1),c.configureDrive(t.OPT_DRIVE_CONNECT,3,u);break;case s.BLIITTER_ACCURACY:c.configure(t.OPT_BLIITTER_ACCURACY,Number(u));break;case s.TODBUG:c.configure(t.OPT_TODBUG,Number(u));break;case s.PTR_DROPS:c.configure(t.OPT_PTR_DROPS,Number(u));break;case s.ECLOCK_SYNCING:c.configure(t.OPT_ECLOCK_SYNCING,Number(u));break;case s.DRIVE_SPEED:c.configure(t.OPT_DRIVE_SPEED,Number(u));break;case s.DRIVE_MECHANICS:c.configureDrive(t.OPT_DRIVE_MECHANICS,0,Number(u)),c.configureDrive(t.OPT_DRIVE_MECHANICS,1,Number(u)),c.configureDrive(t.OPT_DRIVE_MECHANICS,2,Number(u)),c.configureDrive(t.OPT_DRIVE_MECHANICS,3,Number(u));break;case s.OPT_LOCK_DSKSYNC:c.configure(t.OPT_LOCK_DSKSYNC,Number(u));break;case s.OPT_AUTO_DSKSYNC:c.configure(t.OPT_AUTO_DSKSYNC,Number(u));break;case s.CLX_SPR_SPR:c.configure(t.OPT_CLX_SPR_SPR,Number(u));break;case s.CLX_SPR_PLF:c.configure(t.OPT_CLX_SPR_PLF,Number(u));break;case s.CLX_PLF_PLF:c.configure(t.OPT_CLX_PLF_PLF,Number(u));break;case s.ACCURATE_KEYBOARD:c.configure(t.OPT_ACCURATE_KEYBOARD,Number(u));break;case s.AUDVOL0:c.configureDrive(t.OPT_AUDVOL,0,Number(u));break;case s.AUDVOL1:c.configureDrive(t.OPT_AUDVOL,1,Number(u));break;case s.AUDVOL2:c.configureDrive(t.OPT_AUDVOL,2,Number(u));break;case s.AUDVOL3:c.configureDrive(t.OPT_AUDVOL,3,Number(u));break;case s.AUDVOLL:c.configure(t.OPT_AUDVOLL,Number(u));break;case s.AUDVOLR:c.configure(t.OPT_AUDVOLR,Number(u));break;case s.STEP_VOLUME:c.configure(t.OPT_STEP_VOLUME,Number(u));break;case s.POLL_VOLUME:c.configure(t.OPT_POLL_VOLUME,Number(u));break;case s.INSERT_VOLUME:c.configure(t.OPT_INSERT_VOLUME,Number(u));break;case s.EJECT_VOLUME:c.configure(t.OPT_EJECT_VOLUME,Number(u));break;case s.RENDER_MODE:p=Number(u);break;case s.PALETTE:c.configure(t.OPT_PALETTE,Number(u));break;case s.BRIGHTNESS:c.configure(t.OPT_BRIGHTNESS,Number(u));break;case s.CONTRAST:c.configure(t.OPT_CONTRAST,Number(u));break;case s.SATURATION:c.configure(t.OPT_SATURATION,Number(u));break;case s.FLICKER_WEIGHT:N=Number(u);break;default:console.warn("set: Invalid option: ",i)}we.set(M)}function ke(i,u){console.log("setNum: ",u,u.toString()),Q(i,u.toString())}function Ie(i,u){Q(i,u?"true":"false")}function Le(i){console.log("setTheme",i),b=i;let u="";switch(b){case y.default:u="mytheme",a(H,_=!0,_),a(x,g="invert",g);break;case y.light:u="light",a(H,_=!0,_),a(x,g="invert",g);break;case y.dark:u="dark",a(H,_=!0,_),a(x,g="invert",g);break;case y.coffee:u="coffee",a(H,_=!1,_),a(x,g="",g);break;case y.cupcake:u="cupcake",a(H,_=!1,_),a(x,g="",g);break;case y.forest:u="forest",a(H,_=!0,_),a(x,g="invert",g);break;case y.aqua:u="aqua",a(H,_=!1,_),a(x,g="",g);break;case y.garden:u="garden",a(H,_=!0,_),a(x,g="invert",g);break;case y.pastel:u="pastel",a(H,_=!1,_),a(x,g="",g);break;default:console.log("Invalid theme")}document.querySelector("html").setAttribute("data-theme",u)}return o.$$.update=()=>{o.$$.dirty[0]&16777216&&console.log("CONFIG DB: ",R),o.$$.dirty[0]&33554432&&E&&(U(),Oe())},[be,Se,le,F,fe,Me,Oe,v,q,Ee,$,ee,Ne,de,pe,De,Re,Ce,te,Pe,me,Q,ke,Ie,R,E]}class Ys extends xe{constructor(l){super(),He(this,l,Ks,null,We,{restoreDefaults:0,restoreGeneralDefaults:1,restoreMachineDefaults:2,restoreCompatibilityDefaults:3,restoreAudioDefaults:4,restoreVideoDefaults:5,loadSettings:6,loadGeneralSettings:7,loadMachineSettings:8,loadCompatibilitySettings:9,loadAudioSettings:10,loadVideoSettings:11,saveSettings:12,saveGeneralSettings:13,saveMachineSettings:14,saveCompatibilitySettings:15,saveAudioSettings:16,saveVideoSettings:17,get:18,getNum:19,getBool:20,set:21,setNum:22,setBool:23},null,[-1,-1])}get restoreDefaults(){return this.$$.ctx[0]}get restoreGeneralDefaults(){return this.$$.ctx[1]}get restoreMachineDefaults(){return this.$$.ctx[2]}get restoreCompatibilityDefaults(){return this.$$.ctx[3]}get restoreAudioDefaults(){return this.$$.ctx[4]}get restoreVideoDefaults(){return this.$$.ctx[5]}get loadSettings(){return this.$$.ctx[6]}get loadGeneralSettings(){return this.$$.ctx[7]}get loadMachineSettings(){return this.$$.ctx[8]}get loadCompatibilitySettings(){return this.$$.ctx[9]}get loadAudioSettings(){return this.$$.ctx[10]}get loadVideoSettings(){return this.$$.ctx[11]}get saveSettings(){return this.$$.ctx[12]}get saveGeneralSettings(){return this.$$.ctx[13]}get saveMachineSettings(){return this.$$.ctx[14]}get saveCompatibilitySettings(){return this.$$.ctx[15]}get saveAudioSettings(){return this.$$.ctx[16]}get saveVideoSettings(){return this.$$.ctx[17]}get get(){return this.$$.ctx[18]}get getNum(){return this.$$.ctx[19]}get getBool(){return this.$$.ctx[20]}get set(){return this.$$.ctx[21]}get setNum(){return this.$$.ctx[22]}get setBool(){return this.$$.ctx[23]}}function Ds(o){let l,r,t,c,g,_,M=o[3].ErrorCodeKey(o[1])+"",E,C,A,P,O,D;return{c(){l=ne("div"),r=ne("div"),t=ne("p"),c=re("Emulator failure. Uncaught exception "),g=re(o[1]),_=re(" ("),E=re(M),C=re(")"),A=$e(),P=ne("p"),O=re(o[4]),this.h()},l(b){l=ce(b,"DIV",{class:!0});var d=ie(l);r=ce(d,"DIV",{class:!0});var f=ie(r);t=ce(f,"P",{class:!0});var p=ie(t);c=oe(p,"Emulator failure. Uncaught exception "),g=oe(p,o[1]),_=oe(p," ("),E=oe(p,M),C=oe(p,")"),p.forEach(k),A=et(f),P=ce(f,"P",{class:!0});var N=ie(P);O=oe(N,o[4]),N.forEach(k),f.forEach(k),d.forEach(k),this.h()},h(){se(t,"class","p-1"),se(P,"class","p-1"),se(r,"class","h-24 w-full border-none flex flex-col justify-center text-lg font-azeret text-center"),se(l,"class",D="relative flex justify-center bg-black text-red-600 border-[10px] "+o[2])},m(b,d){Z(b,l,d),h(l,r),h(r,t),h(t,c),h(t,g),h(t,_),h(t,E),h(t,C),h(r,A),h(r,P),h(P,O)},p(b,d){d&2&&tr(g,b[1]),d&10&&M!==(M=b[3].ErrorCodeKey(b[1])+"")&&tr(E,M),d&16&&tr(O,b[4]),d&4&&D!==(D="relative flex justify-center bg-black text-red-600 border-[10px] "+b[2])&&se(l,"class",D)},d(b){b&&k(l)}}}function js(o){let l,r=o[0]&&Ds(o);return{c(){r&&r.c(),l=ve()},l(t){r&&r.l(t),l=ve()},m(t,c){r&&r.m(t,c),Z(t,l,c)},p(t,[c]){t[0]?r?r.p(t,c):(r=Ds(t),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null)},i:gr,o:gr,d(t){r&&r.d(t),t&&k(l)}}}function Xs(o,l,r){let t,c,g,_,M,E;n(o,xs,P=>r(1,g=P)),n(o,ue,P=>r(7,_=P)),n(o,nr,P=>r(3,M=P)),n(o,Hs,P=>r(4,E=P));let C=!1,A=!0;return o.$$.update=()=>{o.$$.dirty&128&&r(6,t=_!=null),o.$$.dirty&99&&g&&t&&!C&&(r(0,C=!0),setInterval(()=>{r(5,A=!A)},800)),o.$$.dirty&32&&r(2,c=A?"border-red-600":"border-black")},[C,g,c,M,E,A,t,_]}class zs extends xe{constructor(l){super(),He(this,l,Xs,js,We,{})}}function Js(o,l,r){let t,c,g,_,M,E,C,A,P,O,D,b,d,f,p,N,R,I,U,G,L,Ae,ge,_e,W,be,Se,le,F,fe,Me,B,Oe,v,q,Ee,$,ee,K,Ne,de,pe,De,Re,Ce,Y,te,Pe,me,Q,ke,Ie,Le,i,u,Te,rt,ot,st,at,nt,ct,it,ut,gt,_t,St,lt,ft,Mt,Ot,Et,dt,pt,Dt,Rt,Ct,Pt,Tt,At,bt,Nt,mt,kt,j,X,z,J,It,Lt,ht,yt,Ut,Gt,Vt,m,wt,Fe,Be,xt,Ht,Ke,Wt,Ft,Bt,he,Ye,Kt,Yt,jt,Xt,zt,V,Jt,qt,Qt,Zt,vt,$t,ye,er,Ue;n(o,ue,e=>r(10,t=e)),n(o,Sr,e=>r(11,c=e)),n(o,lr,e=>r(12,g=e)),n(o,fr,e=>r(13,_=e)),n(o,or,e=>r(14,M=e)),n(o,Mr,e=>r(15,E=e)),n(o,Or,e=>r(16,C=e)),n(o,Er,e=>r(17,A=e)),n(o,dr,e=>r(18,P=e)),n(o,pr,e=>r(19,O=e)),n(o,Dr,e=>r(20,D=e)),n(o,Rr,e=>r(21,b=e)),n(o,Cr,e=>r(22,d=e)),n(o,Pr,e=>r(23,f=e)),n(o,Tr,e=>r(24,p=e)),n(o,Ar,e=>r(25,N=e)),n(o,br,e=>r(26,R=e)),n(o,Nr,e=>r(27,I=e)),n(o,mr,e=>r(28,U=e)),n(o,kr,e=>r(29,G=e)),n(o,Ir,e=>r(30,L=e)),n(o,Lr,e=>r(31,Ae=e)),n(o,hr,e=>r(32,ge=e)),n(o,yr,e=>r(33,_e=e)),n(o,Ur,e=>r(34,W=e)),n(o,Gr,e=>r(35,be=e)),n(o,Vr,e=>r(36,Se=e)),n(o,wr,e=>r(37,le=e)),n(o,cr,e=>r(38,F=e)),n(o,xr,e=>r(39,fe=e)),n(o,Hr,e=>r(40,Me=e)),n(o,Wr,e=>r(41,B=e)),n(o,Fr,e=>r(42,Oe=e)),n(o,Br,e=>r(43,v=e)),n(o,Kr,e=>r(44,q=e)),n(o,Yr,e=>r(45,Ee=e)),n(o,jr,e=>r(46,$=e)),n(o,Xr,e=>r(47,ee=e)),n(o,zr,e=>r(48,K=e)),n(o,Jr,e=>r(49,Ne=e)),n(o,qr,e=>r(50,de=e)),n(o,Qr,e=>r(51,pe=e)),n(o,Zr,e=>r(52,De=e)),n(o,vr,e=>r(53,Re=e)),n(o,$r,e=>r(54,Ce=e)),n(o,eo,e=>r(55,Y=e)),n(o,to,e=>r(56,te=e)),n(o,ro,e=>r(57,Pe=e)),n(o,oo,e=>r(58,me=e)),n(o,so,e=>r(59,Q=e)),n(o,ao,e=>r(60,ke=e)),n(o,no,e=>r(61,Ie=e)),n(o,co,e=>r(62,Le=e)),n(o,io,e=>r(63,i=e)),n(o,uo,e=>r(64,u=e)),n(o,go,e=>r(65,Te=e)),n(o,_o,e=>r(66,rt=e)),n(o,So,e=>r(67,ot=e)),n(o,lo,e=>r(68,st=e)),n(o,fo,e=>r(69,at=e)),n(o,Mo,e=>r(70,nt=e)),n(o,Oo,e=>r(71,ct=e)),n(o,Eo,e=>r(72,it=e)),n(o,po,e=>r(73,ut=e)),n(o,Do,e=>r(74,gt=e)),n(o,Ro,e=>r(75,_t=e)),n(o,Co,e=>r(76,St=e)),n(o,Po,e=>r(77,lt=e)),n(o,To,e=>r(78,ft=e)),n(o,Ao,e=>r(79,Mt=e)),n(o,bo,e=>r(80,Ot=e)),n(o,No,e=>r(81,Et=e)),n(o,mo,e=>r(82,dt=e)),n(o,ko,e=>r(83,pt=e)),n(o,Io,e=>r(84,Dt=e)),n(o,Lo,e=>r(85,Rt=e)),n(o,ho,e=>r(86,Ct=e)),n(o,yo,e=>r(87,Pt=e)),n(o,Uo,e=>r(88,Tt=e)),n(o,Go,e=>r(89,At=e)),n(o,Vo,e=>r(90,bt=e)),n(o,wo,e=>r(91,Nt=e)),n(o,xo,e=>r(92,mt=e)),n(o,Ho,e=>r(93,kt=e)),n(o,Wo,e=>r(94,j=e)),n(o,Fo,e=>r(95,X=e)),n(o,Bo,e=>r(96,z=e)),n(o,Ko,e=>r(97,J=e)),n(o,Yo,e=>r(98,It=e)),n(o,jo,e=>r(99,Lt=e)),n(o,Xo,e=>r(100,ht=e)),n(o,zo,e=>r(101,yt=e)),n(o,Jo,e=>r(102,Ut=e)),n(o,qo,e=>r(103,Gt=e)),n(o,Qo,e=>r(104,Vt=e)),n(o,tt,e=>r(105,m=e)),n(o,Zo,e=>r(106,wt=e)),n(o,vo,e=>r(107,Fe=e)),n(o,$o,e=>r(108,Be=e)),n(o,es,e=>r(109,xt=e)),n(o,ts,e=>r(110,Ht=e)),n(o,we,e=>r(111,Ke=e)),n(o,rs,e=>r(112,Wt=e)),n(o,os,e=>r(113,Ft=e)),n(o,ss,e=>r(114,Bt=e)),n(o,as,e=>r(115,he=e)),n(o,ar,e=>r(116,Ye=e)),n(o,ns,e=>r(117,Kt=e)),n(o,cs,e=>r(118,Yt=e)),n(o,is,e=>r(119,jt=e)),n(o,us,e=>r(120,Xt=e)),n(o,gs,e=>r(121,zt=e)),n(o,_s,e=>r(122,V=e)),n(o,Ss,e=>r(123,Jt=e)),n(o,ls,e=>r(124,qt=e)),n(o,fs,e=>r(125,Qt=e)),n(o,nr,e=>r(126,Zt=e)),n(o,Ms,e=>r(127,vt=e)),n(o,Os,e=>r(128,$t=e)),n(o,Es,e=>r(129,ye=e)),n(o,ds,e=>r(130,er=e)),n(o,sr,e=>r(131,Ue=e)),Cs(()=>{console.log("Proxy: onMount()"),a(ue,t.processMsg=ks,t)});async function Ps(e){await F.setup();try{console.log("Showcase:",e.title),m.powerOff(),console.log("Installing ROM:",e.roms),t.installRoms(e.roms),console.log("Configuring Chip RAM:",e.memory[0]),m.configure(t.OPT_CHIP_RAM,e.memory[0]),console.log("Configuring Slow RAM:",e.memory[1]),m.configure(t.OPT_SLOW_RAM,e.memory[1]),console.log("Configuring Fast RAM:",e.memory[2]),m.configure(t.OPT_FAST_RAM,e.memory[2]),console.log("Configuring drives:",e.adf.length),Ke.set(s.DF1,e.adf.length>1);for(let S=0;S<e.adf.length;S++)console.log("Inserting disk "+S+":",e.adf[S]),await je(e.adf[S],S);console.log("Configuring warp mode: "+e.warp),Ke.set(s.WARP_MODE,e.warp),console.log("Launchine emulator..."),m.run(),e.title=="Absolute Inebriation"&&(console.log("Scheduling disk change (inebriation)"),ye.scheduleGUITimerAbs(3e3,1)),e.title=="Eon"&&(console.log("Scheduling disk change (eon)"),ye.scheduleGUITimerAbs(7600,2)),console.log("Done")}catch(S){throw console.log("CATCHED "+S),S}}function ir(){console.error("Exception "+m.errorCode()+": "+m.what())}async function je(e,S){try{console.log("Fetching adf/"+e);let ze=await(await fetch("adf/"+e)).arrayBuffer(),ur=new Uint8Array(ze);console.log("Calling $amiga.insertDisk",ur,S),m.insertDisk(ur,ze.byteLength,S),console.log("Disk inserted")}catch{ir()}}async function Xe(e){if(e==0)return V.deleteRom(),V.deleteExt(),a(sr,Ue=e,Ue),!0;try{const S=await ae.roms.get(e);return S?(S!=null&&S.rom?(V.loadRom(S.rom,S.rom.length),a(sr,Ue=e,Ue)):V.deleteRom(),S!=null&&S.ext?V.loadExt(S.ext,S.ext.length):V.deleteExt(),!0):!1}catch{return!1}}async function Ts(e){for(const S of e)if(await Xe(S))return!0;return!1}async function As(e){let S=V.analyzeRom(e,e.byteLength);if(console.log("ROM analyzed: ",S),S.crc32){try{const w=S.title,ze=await ae.roms.add({crc32:S.crc32,title:S.title,version:S.version,released:S.released,model:S.model,isAros:S.isAros,isDiag:S.isDiag,isCommodore:S.isCommodore,isHyperion:S.isHyperion,isPatched:S.isPatched,isUnknown:S.isUnknown,rom:e,ext:null,extStart:0});console.log(`${w} successfully added with id ${ze}`)}catch{console.log("Failed to add Kickstart")}console.log("Opening Kickstart viewer"),a(ds,er=Ws.kickstart,er)}}async function bs(){await Xe(ps.Aros)}async function Ns(){await Xe(ps.DiagROM)}function ms(){console.log("Creating proxies..."),a(Es,ye=new t.AgnusProxy,ye),a(Os,$t=new t.CPUProxy,$t),a(Ms,vt=new t.DeniseProxy,vt),a(Ko,J=new t.DriveProxy(0),J),a(Bo,z=new t.DriveProxy(1),z),a(Fo,X=new t.DriveProxy(2),X),a(Wo,j=new t.DriveProxy(3),j),a(as,he=new t.DiskControllerProxy,he),a(nr,Zt=new t.EnumProxy,Zt),a(fs,Qt=new t.JoystickProxy(1),Qt),a(ls,qt=new t.JoystickProxy(2),qt),a(Ss,Jt=new t.KeyboardProxy,Jt),a(_s,V=new t.MemoryProxy,V),a(gs,zt=new t.MouseProxy(1),zt),a(us,Xt=new t.MouseProxy(2),Xt),a($o,Be=new t.PaulaProxy,Be),a(is,jt=new t.RetroShellProxy,jt),a(tt,m=new t.AmigaProxy,m),console.log("Launching the emulator..."),m.launch(),console.log("Configuring the emulator..."),m.configure(t.OPT_AGNUS_REVISION,t.AGNUS_ECS_2MB),a(cs,Yt={ArrowLeft:t.PULL_LEFT,ArrowRight:t.PULL_RIGHT,ArrowUp:t.PULL_UP,ArrowDown:t.PULL_DOWN,ControlRight:t.PRESS_FIRE,Space:t.PRESS_FIRE},Yt),a(ns,Kt={KeyS:t.PULL_LEFT,KeyD:t.PULL_RIGHT,KeyE:t.PULL_UP,KeyX:t.PULL_DOWN,KeyC:t.RELEASE_FIRE},Kt),(async()=>{console.log("Installing Roms...");const e=[3304125791,2798523958,3283989056,1062194186];t.installRoms(e),console.log("Initialization completed"),a(ar,Ye=!0,Ye)})()}function T(){if(!Ye)return;const e=he.getState(),S=he.getSelected(),w=e==t.DRIVE_DMA_WRITE;a(ss,Bt=m.poweredOn(),Bt),a(os,Ft=m.isRunning(),Ft),a(vo,Fe=m.isWarping(),Fe),a(rs,Wt=Ke.getNum(s.WARP_MODE),Wt),a(ts,Ht=m.isTracking(),Ht),a(es,xt=Be.isMuted()||Fe,xt),a(Zo,wt=m.isHalted(),wt),a(Qo,Vt=[J.isConnected(),z.isConnected(),X.isConnected(),j.isConnected()],Vt),a(qo,Gt=[J.hasDisk(),z.hasDisk(),X.hasDisk(),j.hasDisk()],Gt),a(Jo,Ut=[J.motor(),z.motor(),X.motor(),j.motor()],Ut),a(zo,yt=[S==0&&w,S==1&&w,S==2&&w,S==3&&w],yt),a(Xo,ht=[J.hasModifiedDisk(),z.hasModifiedDisk(),X.hasModifiedDisk(),j.hasModifiedDisk()],ht),a(jo,Lt=[J.hasProtectedDisk(),z.hasProtectedDisk(),X.hasProtectedDisk(),j.hasProtectedDisk()],Lt),a(Yo,It=[J.currentCyl(),z.currentCyl(),X.currentCyl(),j.currentCyl()],It)}function ks(e){let S=e.type;switch(e.value,S){case t.MSG_NONE:a(Ho,kt++,kt);break;case t.MSG_REGISTER:a(xo,mt++,mt);break;case t.MSG_CONFIG:a(wo,Nt++,Nt);break;case t.MSG_POWER_ON:a(Vo,bt++,bt),T();break;case t.MSG_POWER_OFF:a(Go,At++,At),T();break;case t.MSG_RUN:a(Uo,Tt++,Tt),T();break;case t.MSG_PAUSE:a(yo,Pt++,Pt),T();break;case t.MSG_STEP:a(ho,Ct++,Ct);break;case t.MSG_RESET:a(Lo,Rt++,Rt),T();break;case t.MSG_SHUTDOWN:a(Io,Dt++,Dt);break;case t.MSG_ABORT:a(ko,pt++,pt);break;case t.MSG_WARP_ON:a(mo,dt++,dt),T();break;case t.MSG_WARP_OFF:a(No,Et++,Et),T();break;case t.MSG_DEBUG_ON:a(bo,Ot++,Ot),T();break;case t.MSG_DEBUG_OFF:a(Ao,Mt++,Mt),T();break;case t.MSG_MUTE_ON:a(To,ft++,ft),T();break;case t.MSG_MUTE_OFF:a(Po,lt++,lt),T();break;case t.MSG_POWER_LED_ON:a(Co,St++,St);break;case t.MSG_POWER_LED_DIM:a(Ro,_t++,_t);break;case t.MSG_POWER_LED_OFF:a(Do,gt++,gt);break;case t.MSG_CLOSE_CONSOLE:a(po,ut++,ut);break;case t.MSG_UPDATE_CONSOLE:a(Eo,it++,it);break;case t.MSG_SCRIPT_DONE:a(Oo,ct++,ct);break;case t.MSG_SCRIPT_PAUSE:a(Mo,nt++,nt);break;case t.MSG_SCRIPT_ABORT:a(fo,at++,at);break;case t.MSG_SCRIPT_WAKEUP:a(lo,st++,st);break;case t.MSG_VIDEO_FORMAT:a(So,ot++,ot);break;case t.MSG_OVERCLOCKING:a(_o,rt++,rt);break;case t.MSG_BREAKPOINT_REACHED:a(go,Te++,Te);break;case t.MSG_BREAKPOINT_UPDATED:a(uo,u++,u);break;case t.MSG_WATCHPOINT_REACHED:a(io,i++,i);break;case t.MSG_WATCHPOINT_UPDATED:a(co,Le++,Le);break;case t.MSG_CATCHPOINT_REACHED:a(no,Ie++,Ie);break;case t.MSG_CATCHPOINT_UPDATED:a(ao,ke++,ke);break;case t.MSG_SWTRAP_REACHED:a(so,Q++,Q);break;case t.MSG_CPU_HALT:a(oo,me++,me),T();break;case t.MSG_COPPERBP_REACHED:a(ro,Pe++,Pe);break;case t.MSG_COPPERBP_UPDATED:a(to,te++,te);break;case t.MSG_COPPERWP_REACHED:a(eo,Y++,Y);break;case t.MSG_COPPERWP_UPDATED:a($r,Ce++,Ce);break;case t.MSG_VIEWPORT:a(vr,Re++,Re);break;case t.MSG_MEM_LAYOUT:a(Zr,De++,De);break;case t.MSG_DRIVE_CONNECT:a(Qr,pe++,pe),T();break;case t.MSG_DRIVE_DISCONNECT:a(qr,de++,de),T();break;case t.MSG_DRIVE_SELECT:a(Jr,Ne++,Ne);break;case t.MSG_DRIVE_READ:a(zr,K++,K);break;case t.MSG_DRIVE_WRITE:a(Xr,ee++,ee),T();break;case t.MSG_DRIVE_LED_ON:a(jr,$++,$);break;case t.MSG_DRIVE_LED_OFF:a(Yr,Ee++,Ee);break;case t.MSG_DRIVE_MOTOR_ON:a(Kr,q++,q),T();break;case t.MSG_DRIVE_MOTOR_OFF:a(Br,v++,v),T();break;case t.MSG_DRIVE_STEP:a(Fr,Oe++,Oe),T(),F.playStepSound(e.drive.volume,e.drive.pan);break;case t.MSG_DRIVE_POLL:a(Wr,B++,B),T(),F.playStepSound(e.drive.volume,e.drive.pan);break;case t.MSG_DISK_INSERT:a(Hr,Me++,Me),T(),F.playInsertSound(e.drive.volume,e.drive.pan);break;case t.MSG_DISK_EJECT:a(xr,fe++,fe),T(),F.playEjectSound(e.drive.volume,e.drive.pan);break;case t.MSG_DISK_SAVED:a(wr,le++,le),T();break;case t.MSG_DISK_UNSAVED:a(Vr,Se++,Se),T();break;case t.MSG_DISK_PROTECT:a(Gr,be++,be),T();break;case t.MSG_DISK_UNPROTECT:a(Ur,W++,W),T();break;case t.MSG_HDC_CONNECT:a(yr,_e++,_e);break;case t.MSG_HDC_DISCONNECT:a(hr,ge++,ge);break;case t.MSG_HDC_STATE:a(Lr,Ae++,Ae);break;case t.MSG_HDR_STEP:a(Ir,L++,L);break;case t.MSG_HDR_READ:a(kr,G++,G);break;case t.MSG_HDR_WRITE:a(mr,U++,U);break;case t.MSG_HDR_IDLE:a(Nr,I++,I);break;case t.MSG_CTRL_AMIGA_AMIGA:a(br,R++,R);break;case t.MSG_SHAKING:a(Ar,N++,N);break;case t.MSG_SER_IN:a(Tr,p++,p);break;case t.MSG_SER_OUT:a(Pr,f++,f);break;case t.MSG_AUTO_SNAPSHOT_TAKEN:a(Cr,d++,d);break;case t.MSG_USER_SNAPSHOT_TAKEN:a(Rr,b++,b);break;case t.MSG_SNAPSHOT_RESTORED:a(Dr,D++,D),T();break;case t.MSG_RECORDING_STARTED:a(pr,O++,O);break;case t.MSG_RECORDING_STOPPED:a(dr,P++,P);break;case t.MSG_RECORDING_ABORTED:a(Er,A++,A);break;case t.MSG_DMA_DEBUG_ON:a(Or,C++,C),a(or,M=!0,M);break;case t.MSG_DMA_DEBUG_OFF:a(Mr,E++,E),a(or,M=!1,M);break;case t.MSG_SRV_STATE:a(fr,_++,_);break;case t.MSG_SRV_RECEIVE:a(lr,g++,g);break;case t.MSG_SRV_SEND:a(Sr,c++,c);break;case t.MSG_GUI_EVENT:console.log("MSG_GUI_EVENT received: ",d1,d2),d2==1&&(console.log("Inserting disk 2..."),je("AbsoluteInebriation2.adf",0)),d2==2&&(console.log("Inserting disk 2..."),je("Eon2.adf",0));break}}return[Ps,ir,je,Xe,Ts,As,bs,Ns,ms,T]}class qs extends xe{constructor(l){super(),He(this,l,Js,null,We,{runShowcase:0,reportException:1,insert:2,installRom:3,installRoms:4,addRom:5,installAros:6,installDiagRom:7,onRuntimeInitialized:8,updateStateVariables:9},null,[-1,-1,-1,-1,-1])}get runShowcase(){return this.$$.ctx[0]}get reportException(){return this.$$.ctx[1]}get insert(){return this.$$.ctx[2]}get installRom(){return this.$$.ctx[3]}get installRoms(){return this.$$.ctx[4]}get addRom(){return this.$$.ctx[5]}get installAros(){return this.$$.ctx[6]}get installDiagRom(){return this.$$.ctx[7]}get onRuntimeInitialized(){return this.$$.ctx[8]}get updateStateVariables(){return this.$$.ctx[9]}}function Rs(o){let l,r,t,c,g;return{c(){l=ne("script"),r=re("console.log('Loading vAmiga.js');"),t=$e(),c=ne("script"),this.h()},l(_){l=ce(_,"SCRIPT",{});var M=ie(l);r=oe(M,"console.log('Loading vAmiga.js');"),M.forEach(k),t=et(_),c=ce(_,"SCRIPT",{src:!0});var E=ie(c);E.forEach(k),this.h()},h(){Gs(c.src,g="vAmiga.js")||se(c,"src",g)},m(_,M){Z(_,l,M),h(l,r),Z(_,t,M),Z(_,c,M)},d(_){_&&k(l),_&&k(t),_&&k(c)}}}function Qs(o){let l,r,t,c,g,_,M,E,C,A={};l=new qs({props:A}),o[6](l);let P={};r=new Bs({props:P}),o[7](r);let O={};t=new Ys({props:O}),o[8](t);let D=o[0]&&Rs();_=new zs({});const b=o[5].default,d=Is(b,o,o[4],null);return{c(){Je(l.$$.fragment),Je(r.$$.fragment),Je(t.$$.fragment),D&&D.c(),c=ve(),g=$e(),Je(_.$$.fragment),M=$e(),E=ne("div"),d&&d.c(),this.h()},l(f){const p=Ls("svelte-16x0bsf",document.head);qe(l.$$.fragment,p),qe(r.$$.fragment,p),qe(t.$$.fragment,p),D&&D.l(p),c=ve(),p.forEach(k),g=et(f),qe(_.$$.fragment,f),M=et(f),E=ce(f,"DIV",{class:!0});var N=ie(E);d&&d.l(N),N.forEach(k),this.h()},h(){se(E,"class","relative")},m(f,p){Qe(l,document.head,null),Qe(r,document.head,null),Qe(t,document.head,null),D&&D.m(document.head,null),h(document.head,c),Z(f,g,p),Qe(_,f,p),Z(f,M,p),Z(f,E,p),d&&d.m(E,null),C=!0},p(f,[p]){const N={};l.$set(N);const R={};r.$set(R);const I={};t.$set(I),f[0]?D||(D=Rs(),D.c(),D.m(c.parentNode,c)):D&&(D.d(1),D=null),d&&d.p&&(!C||p&16)&&hs(d,b,f,f[4],C?Us(b,f[4],p,null):ys(f[4]),null)},i(f){C||(Ge(l.$$.fragment,f),Ge(r.$$.fragment,f),Ge(t.$$.fragment,f),Ge(_.$$.fragment,f),Ge(d,f),C=!0)},o(f){Ve(l.$$.fragment,f),Ve(r.$$.fragment,f),Ve(t.$$.fragment,f),Ve(_.$$.fragment,f),Ve(d,f),C=!1},d(f){o[6](null),Ze(l),o[7](null),Ze(r),o[8](null),Ze(t),D&&D.d(f),k(c),f&&k(g),Ze(_,f),f&&k(M),f&&k(E),d&&d.d(f)}}}function Zs(o,l,r){let t,c,g;n(o,ue,O=>r(1,t=O)),n(o,cr,O=>r(2,c=O)),n(o,we,O=>r(3,g=O));let{$$slots:_={},$$scope:M}=l,E=!1;Cs(()=>{console.log("+layout: onMount()"),window.Module=t,r(0,E=!0)});function C(O){rr[O?"unshift":"push"](()=>{t=O,ue.set(t)})}function A(O){rr[O?"unshift":"push"](()=>{c=O,cr.set(c)})}function P(O){rr[O?"unshift":"push"](()=>{g=O,we.set(g)})}return o.$$set=O=>{"$$scope"in O&&r(4,M=O.$$scope)},[E,t,c,g,M,_,C,A,P]}class ea extends xe{constructor(l){super(),He(this,l,Zs,Qs,We,{})}}export{ea as default};
