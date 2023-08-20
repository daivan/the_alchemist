/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t,e,i,s,r={975:(t,e,i)=>{function s(){return new Promise(((t,e)=>{const i=new Image;i.onload=()=>t(i),i.onerror=t=>e(t),i.src="./assets/all.png"}))}function r(t){const e=[],i=document.createElement("canvas");i.width=385,i.height=24,i.getContext("2d").drawImage(t,0,0,385,24,0,0,385,24),e.push(i);const s=document.createElement("canvas");s.width=224,s.height=32,s.getContext("2d").drawImage(t,0,24,224,32,0,0,224,32),e.push(s);const r=document.createElement("canvas");r.width=128,r.height=128,r.getContext("2d").drawImage(t,0,56,128,128,0,0,128,128),e.push(r);const n=document.createElement("canvas");return n.width=128,n.height=128,n.getContext("2d").drawImage(t,128,56,128,128,0,0,128,128),e.push(n),e}i.d(e,{$:()=>s,M:()=>r})},900:(t,e,i)=>{function s(){const t=document.createElement("canvas"),e=t.getContext("2d"),i=32;return t.width=i,t.height=i,e.fillStyle="#566e78",e.fillRect(0,0,i,i),e.lineWidth=6,e.strokeStyle="#7e9597",e.beginPath(),e.moveTo(0,0),e.lineTo(i,0),e.lineTo(i,i),e.stroke(),e.strokeStyle="#1f2e38",e.beginPath(),e.moveTo(0,0),e.lineTo(0,i),e.lineTo(i,i),e.stroke(),t}i.d(e,{Z:()=>s})},663:(t,e,i)=>{function s(t,e,i){e.clearRect(0,0,t.width,t.height),e.beginPath(),e.arc(t.width/4,t.height/2,t.width/5.4,0,2*Math.PI),e.fillStyle=i,e.fill()}i.d(e,{Z:()=>s})},97:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(20);class r extends s.GH{overlay=(0,s.jy)({x:0,y:0,width:1e3,height:1e3,color:"white"});header=(0,s.xv)({text:"The Alchemist",font:"15px Arial",color:"black",x:256,y:30,anchor:{x:.5,y:.5},textAlign:"center"});subText=(0,s.xv)({text:"Press space to start",font:"15px Arial",color:"black",x:256,y:100,anchor:{x:.5,y:.5},textAlign:"center"});heatTemperatureGoal=(0,s.jy)({x:238,y:70,color:"purple",width:8,height:30});heatTemperature=(0,s.jy)({temperatureValue:100,x:240,y:10,color:"green",width:4,height:100,update:function(t){this.height=this.temperatureValue,this.temperatureValue<60||this.temperatureValue>90?this.color="red":this.color="green"}});stirTemperatureGoal=(0,s.jy)({x:248,y:70,color:"purple",width:8,height:30});stirTemperature=(0,s.jy)({temperatureValue:100,x:250,y:10,color:"green",width:4,height:100,update:function(t){this.height=this.temperatureValue,this.temperatureValue<60||this.temperatureValue>90?this.color="red":this.color="green"}});constructor(t){super(t)}update(t,e){this.heatTemperature.temperatureValue=e.heatTemperature,this.heatTemperature.update(t),this.stirTemperature.temperatureValue=e.stirTemperature,this.stirTemperature.update(t)}render(t){"start_screen"!==t.state&&(this.header.text="The Alchemist",this.subText.text="Press space to start"),"game_over"===t.state&&(this.header.text="Game over",this.subText.text="Press space to start to play again"),"playing"!==t.state?(this.overlay.render(),this.header.render(),this.subText.render()):(this.heatTemperatureGoal.render(),this.heatTemperature.render(),this.stirTemperatureGoal.render(),this.stirTemperature.render())}}class n extends s.GH{recipe=0;timePassed=0;clockwise=10;recipeTime=0;everySecond=1;state="start_screen";gameStarted=!1;heatTemperature=0;heatTemperatureGoal=0;stirTemperature=0;stirTemperatureGoal=0;gameUI=new r;constructor(t){super(t)}spacePressed(){!0===this.gameStarted&&(this.heatTemperature=this.heatTemperature+10,console.log("space pressed: ",this.heatTemperature))}addClockwiseStir(){!0===this.gameStarted&&(this.stirTemperature=this.stirTemperature+10,console.log("Rotated: ",this.stirTemperature))}reset(){this.gameStarted=!1,this.timePassed=0,this.recipe=0,this.loadRecipe()}loadRecipe(){0===this.recipe&&(this.clockwise=10,this.recipeTime=60)}isGameOver(){this.timePassed>this.recipeTime&&this.gameOver()}gameOver(){this.reset(),this.state="game_over"}isRecipeComplete(){return 0===this.clockwise}update(t){this.gameUI.update(t,this),this.everySecond-=t,!0===this.gameStarted&&this.everySecond<0&&(this.timePassed++,this.everySecond=1,this.heatTemperature=this.heatTemperature-3,this.stirTemperature=this.stirTemperature-3,this.isGameOver())}render(){this.gameUI.render(this)}}},102:(t,e,i)=>{function s(t){const e=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*Math.floor(t.width/7),s=t.width/2;return[Math.floor(s/2+i*Math.cos(e)),Math.floor(s/2+i*Math.sin(e))]}i.d(e,{Z:()=>s})},454:(t,e,i)=>{i.d(e,{h:()=>r});var s=i(792);function r(t,e,i){return new s.Z(t,14,"Old Standard TT","#1f2e38",e,i,"start","left")}},924:(t,e,i)=>{i.d(e,{Z:()=>r});var s=i(792);function r(t){return new s.Z(t,32,"Arial","#1f2e38",32,32,"middle","center")}},593:(t,e,i)=>{i.d(e,{Z:()=>r});class s{constructor(t,e,i,s,r){this.name=t,this.time=e,this.ingredients=i,this.instructions=s,this.events=r}}function r(){return[new s("Albion wartbane elixir",45,["Vinegar","Tansy","Woodruff"],["Heat kettle \nnot too hot","After 5 seconds \nadd vinegar","After 15 more seconds \nadd tansy","After 10 more seconds \nadd woodruff","Stir clockwise for \n15 seconds"],{5:{type:"ingredient",name:"Vinegar",heat:1},20:{type:"ingredient",name:"Tansy",heat:1},30:{type:"ingredient",name:"Woodruff",heat:1},30:{type:"stir",direction:"clockwise",duration:15,heat:1}}),new s("Tadpole tranquil tonic",60,["Chamomile","Catnip","Alcohol"],["Heat kettle \nto boiling","After 15 seconds \nadd chamomile","After 15 more seconds \nadd catnip","Lower heat to \nstop boiling","Stir clockwise and \nstir until done","After 15 more seconds \nadd alcohol"],{15:{type:"ingredient",name:"Chamomile",heat:2},30:{type:"ingredient",name:"Catnip",heat:2},30:{type:"stir",direction:"clockwise",duration:30,heat:1},45:{type:"heat",level:2},45:{type:"ingredient",name:"Alcohol",heat:1}})]}},841:(t,e,i)=>{i.d(e,{Z:()=>r});var s=i(20);function r(t){return new s.V6({image:t,frameWidth:32,frameHeight:32,animations:{bubble:{frames:"0..6",frameRate:5,loop:!1}}})}},195:(t,e,i)=>{i.d(e,{Z:()=>r});var s=i(20);function r(t,e,i,r=1){return(0,s.jy)({x:e,y:i,anchor:{x:.5,y:.5},animations:t.animations,scale:r})}},914:(t,e,i)=>{i.d(e,{Z:()=>r});var s=i(20);function r(t){return new s.V6({image:t,frameWidth:55,frameHeight:24,animations:{swirl:{frames:"0..6",frameRate:10,loop:!1}},name:"stroke"})}},792:(t,e,i)=>{i.d(e,{Z:()=>s});class s{constructor(t,e,i,s,r,n,h,o){this.text=t,this.size=e,this.font=`${e}px ${i}`,this.color=s,this.x=r,this.y=n,this.anchor=h,this.textAlign=o}update(t){this.text=t}render(t,e){t.save(),"middle"===this.anchor?t.textBaseline="middle":"end"===this.anchor?t.textBaseline="bottom":t.textBaseline="top",t.textAlign=this.textAlign,t.font=this.font,t.fillStyle=this.color,"string"!=typeof this.text&&(this.text=this.text.toString());const i=this.text.split("\n");for(let s=0;s<i.length;s++){const r=this.y*e+s*this.size;t.fillText(i[s],this.x*e,r)}t.restore()}}},110:(t,e,i)=>{function s(){const t=window.screen.width;return t>1980?[2048,1024]:t>1024?[1024,512]:t>768?[768,384]:[512,256]}i.d(e,{Z:()=>s})},138:(t,e,i)=>{i.a(t,(async(t,e)=>{try{var s=i(20),r=i(975),n=i(663),h=i(195),o=i(841),a=i(914),c=i(102),d=i(900),l=i(593),u=i(924),p=i(454),f=i(110);let g=new(i(97).Z)(0);g.reset();let{canvas:w,context:x}=(0,s.S1)();x.imageSmoothingEnabled=!1;const _=document.getElementById("frame"),y=_.getContext("2d");y.imageSmoothingEnabled=!1;const v=document.getElementById("water"),b=v.getContext("2d"),S=document.getElementById("background"),k=S.getContext("2d"),T=k.createPattern((0,d.Z)(),"repeat");k.fillStyle=T,k.fillRect(0,0,S.width,S.height);const A=document.getElementById("text");console.log(A);const[E,M]=(0,f.Z)();console.log(E,M),A.width=E,A.height=M;const C=A.getContext("2d"),P=A.width/512,O=await(0,r.$)(),j=(0,r.M)(O),Z=(0,o.Z)(j[1]),I=(0,a.Z)(j[0]);y.drawImage(j[2],0,0,_.width/2,_.height),y.drawImage(j[3],_.width/2-5,0,_.width/2-5,_.height),y.fillStyle="#e8d5b0",y.beginPath(),y.arc(32,32,24,0,2*Math.PI,!0),y.fill(),(0,n.Z)(v,b,"#aa4d8d");const R={strokes:[],bubbles:[]};let Y=(0,l.Z)()[1];const G=(0,u.Z)(Y.time),L=[];Y.instructions.forEach(((t,e)=>{L.push((0,p.h)(t,296,52+20*e))})),(0,s.hg)(),(0,s.ex)();var m=0;let X=!0;(0,s.q6)(["space"],(function(t){g.spacePressed(),"start_screen"!==g.state&&"game_over"!==g.state||(g.gameStarted=!0,g.state="playing")}));let V=(0,s.jy)({x:28,y:28,color:"#0000ff00",width:100,height:100,onOver:function(){0===m&&0===R.strokes.length&&F()},onOut:function(){0===m&&(m=1),console.log("moving out of left upper",m),this.color="#0000ff00"}}),H=(0,s.jy)({x:128,y:28,color:"#0000ff00",width:100,height:100,onOver:function(){1===m&&0===R.strokes.length&&F()},onOut:function(){1===m&&(m=2),console.log("moving out of left upper",m),this.color="#0000ff00"}}),D=(0,s.jy)({x:128,y:128,color:"#0000ff00",width:100,height:100,onOver:function(){2===m&&0===R.strokes.length&&F()},onOut:function(){2===m&&(m=3),console.log("moving out of left upper",m),this.color="#0000ff00"}}),B=(0,s.jy)({x:28,y:128,color:"#0000ff00",width:100,height:100,onOver:function(){3===m?0===R.strokes.length&&F():this.color="#0000ff00"},onOut:function(){3===m&&(m=0,g.addClockwiseStir()),console.log("moving out of left upper",m),this.color="#0000ff00"}});(0,s.j)(V),(0,s.j)(H),(0,s.j)(B),(0,s.j)(D);let W=0;const q=Date.now();let U=0;function F(t=1){const e=(0,s.RI)();R.strokes.push((0,h.Z)(I,Math.floor(e.x),Math.floor(e.y),t))}(0,s.DX)({update:function(t){if(g.update(t),U=Date.now()-q,R.strokes.forEach((t=>{t.update()})),V.update(),H.update(),B.update(),D.update(),U<1e3*Y.time&&G.update(Math.ceil(Y.time-U/1e3)),W+=t,X&&W>.1&&R.bubbles.length<15){const[t,e]=(0,c.Z)(w);R.bubbles.push((0,h.Z)(Z,t,e,(Math.random()+10)/2)),W=0}R.bubbles.forEach((t=>{t.update()}))},render:function(){R.strokes.forEach(((t,e)=>{t.currentAnimation.isStopped?R.strokes.splice(e,1):t.render()})),R.bubbles.forEach(((t,e)=>{t.currentAnimation.isStopped?R.bubbles.splice(e,1):t.render()})),V.render(),H.render(),B.render(),D.render(),C.clearRect(0,0,A.width,A.height),G.render(C,P),L.forEach((t=>t.render(C,P))),g.render()}}).start(),e()}catch(z){e(z)}}),1)},20:(t,e,i)=>{i.d(e,{DX:()=>H,GH:()=>_,RI:()=>C,S1:()=>u,V6:()=>pt,ex:()=>ct,hg:()=>L,j:()=>X,jy:()=>v,q6:()=>dt,xv:()=>k});let s=()=>{};let r,n,h={};function o(t,e){h[t]=h[t]||[],h[t].push(e)}function a(t,...e){(h[t]||[]).map((t=>t(...e)))}let c={get:(t,e)=>"_proxy"==e||s};function d(){return r}function l(){return n}function u(t,{contextless:e=!1}={}){if(r=document.getElementById(t)||t||document.querySelector("canvas"),e&&(r=r||new Proxy({},c)),!r)throw Error("You must provide a canvas element for the game");return n=r.getContext("2d")||new Proxy({},c),n.imageSmoothingEnabled=!1,a("init"),{canvas:r,context:n}}class p{constructor({spriteSheet:t,frames:e,frameRate:i,loop:s=!0,name:r}){let{width:n,height:h,margin:o=0}=t.frame;Object.assign(this,{spriteSheet:t,frames:e,frameRate:i,loop:s,name:r,width:n,height:h,margin:o,isStopped:!1,_f:0,_a:0})}clone(){return new p(this)}start(){this.isStopped=!1,this.loop||this.reset()}stop(){this.isStopped=!0}reset(){this._f=0,this._a=0}update(t=1/60){if(!this.isStopped)if(this.loop||this._f!=this.frames.length-1)for(this._a+=t;this._a*this.frameRate>=1;)this._f=++this._f%this.frames.length,this._a-=1/this.frameRate;else this.stop()}render({x:t,y:e,width:i=this.width,height:s=this.height,context:r=l()}){let n=this.frames[this._f]/this.spriteSheet._f|0,h=this.frames[this._f]%this.spriteSheet._f|0;r.drawImage(this.spriteSheet.image,h*this.width+(2*h+1)*this.margin,n*this.height+(2*n+1)*this.margin,this.width,this.height,t,e,i,s)}}function f(){return new p(...arguments)}function m(t,e,i){return Math.min(Math.max(t,i),e)}class g{constructor(t=0,e=0,i={}){null!=t.x?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e),i._c&&(this.clamp(i._a,i._b,i._d,i._e),this.x=t,this.y=e)}set(t){this.x=t.x,this.y=t.y}add(t){return new g(this.x+t.x,this.y+t.y,this)}subtract(t){return new g(this.x-t.x,this.y-t.y,this)}scale(t){return new g(this.x*t,this.y*t)}normalize(t=this.length()||1){return new g(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}length(){return Math.hypot(this.x,this.y)}distance(t){return Math.hypot(this.x-t.x,this.y-t.y)}angle(t){return Math.acos(this.dot(t)/(this.length()*t.length()))}direction(){return Math.atan2(this.y,this.x)}clamp(t,e,i,s){this._c=!0,this._a=t,this._b=e,this._d=i,this._e=s}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?m(this._a,this._d,t):t}set y(t){this._y=this._c?m(this._b,this._e,t):t}}function w(){return new g(...arguments)}class x{constructor(t){return this.init(t)}init(t={}){this.position=w(),this.velocity=w(),this.acceleration=w(),this.ttl=1/0,Object.assign(this,t)}update(t){this.advance(t)}advance(t){let e=this.acceleration;t&&(e=e.scale(t)),this.velocity=this.velocity.add(e);let i=this.velocity;t&&(i=i.scale(t)),this.position=this.position.add(i),this._pc(),this.ttl--}get dx(){return this.velocity.x}get dy(){return this.velocity.y}set dx(t){this.velocity.x=t}set dy(t){this.velocity.y=t}get ddx(){return this.acceleration.x}get ddy(){return this.acceleration.y}set ddx(t){this.acceleration.x=t}set ddy(t){this.acceleration.y=t}isAlive(){return this.ttl>0}_pc(){}}class _ extends x{init({width:t=0,height:e=0,context:i=l(),render:s=this.draw,update:r=this.advance,children:n=[],anchor:h={x:0,y:0},opacity:a=1,rotation:c=0,scaleX:d=1,scaleY:u=1,...p}={}){this._c=[],super.init({width:t,height:e,context:i,anchor:h,opacity:a,rotation:c,scaleX:d,scaleY:u,...p}),this._di=!0,this._uw(),this.addChild(n),this._rf=s,this._uf=r,o("init",(()=>{this.context??=l()}))}update(t){this._uf(t),this.children.map((e=>e.update&&e.update(t)))}render(){let t=this.context;t.save(),(this.x||this.y)&&t.translate(this.x,this.y),this.rotation&&t.rotate(this.rotation),1==this.scaleX&&1==this.scaleY||t.scale(this.scaleX,this.scaleY);let e=-this.width*this.anchor.x,i=-this.height*this.anchor.y;(e||i)&&t.translate(e,i),this.context.globalAlpha=this.opacity,this._rf(),(e||i)&&t.translate(-e,-i),this.children.map((t=>t.render&&t.render())),t.restore()}draw(){}_pc(){this._uw(),this.children.map((t=>t._pc()))}get x(){return this.position.x}get y(){return this.position.y}set x(t){this.position.x=t,this._pc()}set y(t){this.position.y=t,this._pc()}get width(){return this._w}set width(t){this._w=t,this._pc()}get height(){return this._h}set height(t){this._h=t,this._pc()}_uw(){if(!this._di)return;let{_wx:t=0,_wy:e=0,_wo:i=1,_wr:s=0,_wsx:r=1,_wsy:n=1}=this.parent||{};this._wx=this.x,this._wy=this.y,this._ww=this.width,this._wh=this.height,this._wo=i*this.opacity,this._wsx=r*this.scaleX,this._wsy=n*this.scaleY,this._wx=this._wx*r,this._wy=this._wy*n,this._ww=this.width*this._wsx,this._wh=this.height*this._wsy,this._wr=s+this.rotation;let{x:h,y:o}=function(t,e){let i=Math.sin(e),s=Math.cos(e);return{x:t.x*s-t.y*i,y:t.x*i+t.y*s}}({x:this._wx,y:this._wy},s);this._wx=h,this._wy=o,this._wx+=t,this._wy+=e}get world(){return{x:this._wx,y:this._wy,width:this._ww,height:this._wh,opacity:this._wo,rotation:this._wr,scaleX:this._wsx,scaleY:this._wsy}}set children(t){this.removeChild(this._c),this.addChild(t)}get children(){return this._c}addChild(...t){t.flat().map((t=>{this.children.push(t),t.parent=this,t._pc=t._pc||s,t._pc()}))}removeChild(...t){t.flat().map((t=>{(function(t,e){let i=t.indexOf(e);if(-1!=i)return t.splice(i,1),!0})(this.children,t)&&(t.parent=null,t._pc())}))}get opacity(){return this._opa}set opacity(t){this._opa=m(0,1,t),this._pc()}get rotation(){return this._rot}set rotation(t){this._rot=t,this._pc()}setScale(t,e=t){this.scaleX=t,this.scaleY=e}get scaleX(){return this._scx}set scaleX(t){this._scx=t,this._pc()}get scaleY(){return this._scy}set scaleY(t){this._scy=t,this._pc()}}class y extends _{init({image:t,width:e=(t?t.width:void 0),height:i=(t?t.height:void 0),...s}={}){super.init({image:t,width:e,height:i,...s})}get animations(){return this._a}set animations(t){let e,i;for(e in this._a={},t)this._a[e]=t[e].clone(),i=i||this._a[e];this.currentAnimation=i,this.width=this.width||i.width,this.height=this.height||i.height}playAnimation(t){this.currentAnimation?.stop(),this.currentAnimation=this.animations[t],this.currentAnimation.start()}advance(t){super.advance(t),this.currentAnimation?.update(t)}draw(){this.image&&this.context.drawImage(this.image,0,0,this.image.width,this.image.height),this.currentAnimation&&this.currentAnimation.render({x:0,y:0,width:this.width,height:this.height,context:this.context}),this.color&&(this.context.fillStyle=this.color,this.context.fillRect(0,0,this.width,this.height))}}function v(){return new y(...arguments)}let b=/(\d+)(\w+)/;class S extends _{init({text:t="",textAlign:e="",lineHeight:i=1,font:s=l()?.font,...r}={}){t=""+t,super.init({text:t,textAlign:e,lineHeight:i,font:s,...r}),this.context&&this._p(),o("init",(()=>{this.font??=l().font,this._p()}))}get width(){return this._w}set width(t){this._d=!0,this._w=t,this._fw=t}get text(){return this._t}set text(t){this._d=!0,this._t=""+t}get font(){return this._f}set font(t){this._d=!0,this._f=t,this._fs=function(t){if(!t)return{computed:0};let e=t.match(b),i=+e[1];return{size:i,unit:e[2],computed:i}}(t).computed}get lineHeight(){return this._lh}set lineHeight(t){this._d=!0,this._lh=t}render(){this._d&&this._p(),super.render()}_p(){this._s=[],this._d=!1;let t=this.context,e=[this.text];if(t.font=this.font,e=this.text.split("\n"),this._fw&&e.map((e=>{let i=e.split(" "),s=i.shift(),r=s;i.map((e=>{r+=" "+e,t.measureText(r).width>this._fw&&(this._s.push(s),r=e),s=r})),this._s.push(r)})),!this._s.length&&this.text.includes("\n")){let i=0;e.map((e=>{this._s.push(e),i=Math.max(i,t.measureText(e).width)})),this._w=this._fw||i}this._s.length||(this._s.push(this.text),this._w=this._fw||t.measureText(this.text).width),this.height=this._fs+(this._s.length-1)*this._fs*this.lineHeight,this._uw()}draw(){let t=0,e=this.textAlign,i=this.context;e=this.textAlign||("rtl"==i.canvas.dir?"right":"left"),t="right"==e?this.width:"center"==e?this.width/2|0:0,this._s.map(((s,r)=>{i.textBaseline="top",i.textAlign=e,i.fillStyle=this.color,i.font=this.font,this.strokeColor&&(i.strokeStyle=this.strokeColor,i.lineWidth=this.lineWidth??1,i.strokeText(s,t,this._fs*this.lineHeight*r)),i.fillText(s,t,this._fs*this.lineHeight*r)}))}}function k(){return new S(...arguments)}let T=new WeakMap,A={},E={},M={0:"left",1:"middle",2:"right"};function C(t=d()){return T.get(t)}function P(t,e){let{x:i,y:s,width:r,height:n}=function(t){let{x:e=0,y:i=0,width:s,height:r}=t.world||t;return t.mapwidth&&(s=t.mapwidth,r=t.mapheight),t.anchor&&(e-=s*t.anchor.x,i-=r*t.anchor.y),s<0&&(e+=s,s*=-1),r<0&&(i+=r,r*=-1),{x:e,y:i,width:s,height:r}}(t);do{i-=t.sx||0,s-=t.sy||0}while(t=t.parent);let h=e.x-Math.max(i,Math.min(e.x,i+r)),o=e.y-Math.max(s,Math.min(e.y,s+n));return h*h+o*o<e.radius*e.radius}function O(t,e){return parseFloat(t.getPropertyValue(e))||0}function j(t){let e=null!=t.button?M[t.button]:"left";E[e]=!0,G(t,"onDown")}function Z(t){let e=null!=t.button?M[t.button]:"left";E[e]=!1,G(t,"onUp")}function I(t){G(t,"onOver")}function R(t){T.get(t.target)._oo=null,E={}}function Y(t,e,i){let s=function(t){let e=t._lf.length?t._lf:t._cf;for(let i=e.length-1;i>=0;i--){let s=e[i];if(s.collidesWithPointer?s.collidesWithPointer(t):P(s,t))return s}}(t);s&&s[e]&&s[e](i),A[e]&&A[e](i,s),"onOver"==e&&(s!=t._oo&&t._oo&&t._oo.onOut&&t._oo.onOut(i),t._oo=s)}function G(t,e){t.preventDefault();let i=t.target,s=T.get(i),{scaleX:r,scaleY:n,offsetX:h,offsetY:o}=function(t){let{canvas:e,_s:i}=t,s=e.getBoundingClientRect(),r="none"!=i.transform?i.transform.replace("matrix(","").split(","):[1,1,1,1],n=parseFloat(r[0]),h=parseFloat(r[3]),o=(O(i,"border-left-width")+O(i,"border-right-width"))*n,a=(O(i,"border-top-width")+O(i,"border-bottom-width"))*h,c=(O(i,"padding-left")+O(i,"padding-right"))*n,d=(O(i,"padding-top")+O(i,"padding-bottom"))*h;return{scaleX:(s.width-o-c)/e.width,scaleY:(s.height-a-d)/e.height,offsetX:s.left+(O(i,"border-left-width")+O(i,"padding-left"))*n,offsetY:s.top+(O(i,"border-top-width")+O(i,"padding-top"))*h}}(s);t.type.includes("touch")?(Array.from(t.touches).map((({clientX:t,clientY:e,identifier:i})=>{let a=s.touches[i];a||(a=s.touches[i]={start:{x:(t-h)/r,y:(e-o)/n}},s.touches.length++),a.changed=!1})),Array.from(t.changedTouches).map((({clientX:i,clientY:c,identifier:d})=>{let l=s.touches[d];l.changed=!0,l.x=s.x=(i-h)/r,l.y=s.y=(c-o)/n,Y(s,e,t),a("touchChanged",t,s.touches),"onUp"==e&&(delete s.touches[d],s.touches.length--,s.touches.length||a("touchEnd"))}))):(s.x=(t.clientX-h)/r,s.y=(t.clientY-o)/n,Y(s,e,t))}function L({radius:t=5,canvas:e=d()}={}){let i=T.get(e);if(!i){let s=window.getComputedStyle(e);i={x:0,y:0,radius:t,touches:{length:0},canvas:e,_cf:[],_lf:[],_o:[],_oo:null,_s:s},T.set(e,i)}return e.addEventListener("mousedown",j),e.addEventListener("touchstart",j),e.addEventListener("mouseup",Z),e.addEventListener("touchend",Z),e.addEventListener("touchcancel",Z),e.addEventListener("blur",R),e.addEventListener("mousemove",I),e.addEventListener("touchmove",I),i._t||(i._t=!0,o("tick",(()=>{i._lf.length=0,i._cf.map((t=>{i._lf.push(t)})),i._cf.length=0}))),i}function X(...t){t.flat().map((t=>{let e=t.context?t.context.canvas:d(),i=T.get(e);if(!i)throw new ReferenceError("Pointer events not initialized for the objects canvas");t._r||(t._r=t.render,t.render=function(){i._cf.push(this),this._r()},i._o.push(t))}))}function V(t){let e=t.canvas;t.clearRect(0,0,e.width,e.height)}function H({fps:t=60,clearCanvas:e=!0,update:i=s,render:r,context:n=l(),blur:h=!1}={}){if(!r)throw Error("You must provide a render() function");let c,d,u,p,f,m=0,g=1e3/t,w=1/t,x=e?V:s,_=!0;function y(){if(d=requestAnimationFrame(y),_&&(u=performance.now(),p=u-c,c=u,!(p>1e3))){for(a("tick"),m+=p;m>=g;)f.update(w),m-=g;x(f.context),f.render()}}return h||(window.addEventListener("focus",(()=>{_=!0})),window.addEventListener("blur",(()=>{_=!1}))),o("init",(()=>{f.context??=l()})),f={update:i,render:r,isStopped:!0,context:n,start(){c=performance.now(),this.isStopped=!1,requestAnimationFrame(y)},stop(){this.isStopped=!0,cancelAnimationFrame(d)},_frame:y,set _last(t){c=t}},f}let D=[],B={},W={},q={0:"south",1:"east",2:"west",3:"north",4:"leftshoulder",5:"rightshoulder",6:"lefttrigger",7:"righttrigger",8:"select",9:"start",10:"leftstick",11:"rightstick",12:"dpadup",13:"dpaddown",14:"dpadleft",15:"dpadright"};function U(t){D[t.gamepad.index]={pressedButtons:{},axes:{}}}function F(t){delete D[t.gamepad.index]}function z(){D.map((t=>{t.pressedButtons={},t.axes={}}))}function $(){let t=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads:[];for(let e=0;e<t.length;e++){let i=t[e];if(!i)continue;i.buttons.map(((t,e)=>{let s=q[e],{pressed:r}=t,{pressedButtons:n}=D[i.index],h=n[s];!h&&r?[B[i.index],B].map((e=>{e?.[s]?.(i,t,s)})):h&&!r&&[W[i.index],W].map((e=>{e?.[s]?.(i,t,s)})),n[s]=r}));let{axes:s}=D[i.index];s.leftstickx=i.axes[0],s.leftsticky=i.axes[1],s.rightstickx=i.axes[2],s.rightsticky=i.axes[3]}}let N,K={},J=!1,Q={swipe:{touches:1,threshold:10,touchend({0:t}){let e=t.x-t.start.x,i=t.y-t.start.y,s=Math.abs(e),r=Math.abs(i);if(!(s<this.threshold&&r<this.threshold))return s>r?e<0?"left":"right":i<0?"up":"down"}},pinch:{touches:2,threshold:2,touchstart({0:t,1:e}){this.prevDist=Math.hypot(t.x-e.x,t.y-e.y)},touchmove({0:t,1:e}){let i=Math.hypot(t.x-e.x,t.y-e.y);if(Math.abs(i-this.prevDist)<this.threshold)return;let s=i>this.prevDist?"out":"in";return this.prevDist=i,s}}};let tt={},et={},it={},st={Enter:"enter",Escape:"esc",Space:"space",ArrowLeft:"arrowleft",ArrowUp:"arrowup",ArrowRight:"arrowright",ArrowDown:"arrowdown"};function rt(t=s,e){t._pd&&e.preventDefault(),t(e)}function nt(t){let e=st[t.code],i=tt[e];it[e]=!0,rt(i,t)}function ht(t){let e=st[t.code],i=et[e];it[e]=!1,rt(i,t)}function ot(){it={}}function at(t,e){return Object.values(e).includes(t)}function ct(t={}){!function(){let t;for(t=0;t<26;t++)st["Key"+String.fromCharCode(t+65)]=String.fromCharCode(t+97);for(t=0;t<10;t++)st["Digit"+t]=st["Numpad"+t]=""+t;window.addEventListener("keydown",nt),window.addEventListener("keyup",ht),window.addEventListener("blur",ot)}();let e=L(t.pointer);return J||(J=!0,o("touchChanged",((t,e)=>{Object.keys(Q).map((i=>{let s,r=Q[i];(!N||N==i)&&e.length==r.touches&&[...Array(e.length).keys()].every((t=>e[t]))&&(s=r[t.type]?.(e)??"")&&K[i+s]&&(N=i,K[i+s](t,e))}))})),o("touchEnd",(()=>{N=0}))),window.addEventListener("gamepadconnected",U),window.addEventListener("gamepaddisconnected",F),window.addEventListener("blur",z),o("tick",$),{pointer:e}}function dt(t,e,{gamepad:i,key:s}={}){[].concat(t).map((t=>{if(at(t,q))!function(t,e,{gamepad:i,handler:s="gamepaddown"}={}){let r="gamepaddown"==s?B:W;[].concat(t).map((t=>{isNaN(i)?r[t]=e:(r[i]=r[i]||{},r[i][t]=e)}))}(t,e,i);else if(r=t,Object.keys(Q).some((t=>r.startsWith(t))))!function(t,e){[].concat(t).map((t=>{K[t]=e}))}(t,e);else if(at(t,st))!function(t,e,{handler:i="keydown",preventDefault:s=!0}={}){let r="keydown"==i?tt:et;e._pd=s,[].concat(t).map((t=>r[t]=e))}(t,e,s);else{if(!["down","up"].includes(t))throw new TypeError(`"${t}" is not a valid input name`);!function(t,e){let i=t[0].toUpperCase()+t.substr(1);A["on"+i]=e}(t,e)}var r}))}function lt(t){if(+t==t)return t;let e=[],i=t.split(".."),s=+i[0],r=+i[1],n=s;if(s<r)for(;n<=r;n++)e.push(n);else for(;n>=r;n--)e.push(n);return e}class ut{constructor({image:t,frameWidth:e,frameHeight:i,frameMargin:s,animations:r}={}){if(!t)throw Error("You must provide an Image for the SpriteSheet");this.animations={},this.image=t,this.frame={width:e,height:i,margin:s},this._f=t.width/e|0,this.createAnimations(r)}createAnimations(t){let e,i;for(i in t){let{frames:s,frameRate:r,loop:n}=t[i];if(e=[],null==s)throw Error("Animation "+i+" must provide a frames property");[].concat(s).map((t=>{e=e.concat(lt(t))})),this.animations[i]=f({spriteSheet:this,frames:e,frameRate:r,loop:n,name:i})}}}function pt(){return new ut(...arguments)}}},n={};function h(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,h),i.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",i="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",s=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},h.a=(r,n,h)=>{var o;h&&((o=[]).d=-1);var a,c,d,l=new Set,u=r.exports,p=new Promise(((t,e)=>{d=e,c=t}));p[e]=u,p[t]=t=>(o&&t(o),l.forEach(t),p.catch((t=>{}))),r.exports=p,n((r=>{var n;a=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[t])return r;if(r.then){var n=[];n.d=0,r.then((t=>{h[e]=t,s(n)}),(t=>{h[i]=t,s(n)}));var h={};return h[t]=t=>t(n),h}}var o={};return o[t]=t=>{},o[e]=r,o})))(r);var h=()=>a.map((t=>{if(t[i])throw t[i];return t[e]})),c=new Promise((e=>{(n=()=>e(h)).r=0;var i=t=>t!==o&&!l.has(t)&&(l.add(t),t&&!t.d&&(n.r++,t.push(n)));a.map((e=>e[t](i)))}));return n.r?c:h()}),(t=>(t?d(p[i]=t):c(u),s(o)))),o&&o.d<0&&(o.d=0)},h.d=(t,e)=>{for(var i in e)h.o(e,i)&&!h.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},h.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),h(138)})();